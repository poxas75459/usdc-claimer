/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5ugtSg1gF4E2pyDK4KXGdtX78Ky8B66jZZVLMfTwsiMmSLz1u74XY41C7bqBdig1262w47SjA1Jqufg68tBSBrPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m46SingJu8XpRkXS3SqZP5offJZ36ZrTGxarixfgAJC2deoQYhmmLSw78AnNSoeks4YYFiALzzam4fAEGABRKsB",
  "key1": "ryXV7Sq75jSNG2ULJL2ZG9GuQQJL1QMk2b3czfwwWbLr5ZqXqya1Qi9WUzuu7w199pyEvMn8KvwC8ZrZiRXQfhy",
  "key2": "4t8sR2geZAhugP5XYwDXPSeMKoex7Jx5JzsMiBiKNz8H6vwKosNEEyUPFqJV8RTNEh51bHroVc92kdf7xuvC5MsR",
  "key3": "2jQCeXatpe6TtzGMi75X9n7xGytVWXWt1BMvFrq35eY6GgA99qr26CLwyPV33pqxpcWWVYTCBbGUEzDqqYhfAZmC",
  "key4": "5dMinoN5TDmwwSS4eTDqjrQzN2HBG2XrsauSiVo9UNfUHWBxfsJfs9Ktub68gybxtVzPCQVsfrE2ygbN1m86fCY3",
  "key5": "3JYemxYc42boWhLnLer4XyudsUh5Gc2u8xbWjwBDEHSrCrGTB2txr6Tnt9qEyccRdjBj6h5z4eJmVbCFpGNkEyyp",
  "key6": "XH9ZbCBFVfTHKBduKQuJMV423WNiL4gEC3HJVC46goPCUJ1Dm6kHKxTzhe7KgWzLUwt3fVqt2ie9aDuouetypZx",
  "key7": "28zb8PT7mDNNtLENF7S3wZqdRe5Sxe4xZ9R6W23qSQCB8or5KhKn5R3ew5675y8XCkU9Cs7G1Wugnc8ejXSm3fHV",
  "key8": "3Tshy2DJPiNugr5DFLeXoke99ywcuJkqTHNvnk8brSPNzTP46yEMBZCTNLohBYsQvPeFvX2zsFtsA71pLEwcB5ic",
  "key9": "5BjB2ZMbkLfdXVUB2F6jrWMXbEv7jvinsMdddS8YMPsRpkvBwNhfNAJxpXFnzRUqL3UqXVYvMy4NwFSZJEDRC7FD",
  "key10": "KA6HM9SFqehTafz7sYA69myHzZS49TsH4ZGRxLGUgdb3F1mbzCtF7nik3mJiyVVKxAGpbzvNLxWTB9Cp8AoyXi9",
  "key11": "58U4WnMPzWUGjUCEwSiS8vkdrtEB1NKcsMph7BgCcY3NmUPadzTGEbu9jmuKHqeXxkz1mV7WJDo8b1vADa66yteF",
  "key12": "42ZNqJuaB1BVkbHPTVvVhyxFnZT8zUTBjUonFwnzqRvvt7yAiAgmFF5fEwyg8hK8R4FLRC57VV7y6qMdBx3LRG9g",
  "key13": "4i9d7JT6Bbshzm8eHj66JY5deaQ75jDTUBjaaXavv75pn6rGYQsvhfwpszdJdCxrfg4W3Jn64YPzPKtKXmeGsHZ2",
  "key14": "3LVwWzFXXMDsTezFDBhNpjQnz8DkGZkicUJadKuKDdsqxrraFU2tPNmoSyoH9RneKqgzxMQjF7dTeRx3zqTmb8hZ",
  "key15": "521wYCzThGgRAAz3a7AFwDsRtsGPzdLhT5PovuJezPW4CGp4hVqMWu6X9XmyKjuyBCMp1FH7KdAXsSckKhmWuuLL",
  "key16": "5WerZBgu1eLwb54SYNfdKnG63RNs1zKqGGdiRs5HFNpo1xUATWmU5y5j3h48pQjMUhGtVdJtk3RrudEoXMAv1kok",
  "key17": "4Bg8mjadWSgZx3G3VSvhuvqAGghHoZJzFGFDHwgf3RVf47Hvn8Me6ourUNBk8R71dam3hXfUJgWcvCBRzzQnhNuN",
  "key18": "2CSgrbEkjBCWk3EUEPDhyrkt4HucKHPi6XgHSgxgTgvp5vxkAW5RJYbwT6tZkLRjGZM23YF263RKS46fDPvU3BtU",
  "key19": "3BWRYMyU252wsfDTdYfrzBtE53XRniM379CVU7rm2xdsCika9oDHJ62aSv8JSsHjAivLjsJS661yKRYs9dKPEkSK",
  "key20": "2qMyaPZVsCtGLu1C6tTAyjUQBiondWYEC3p6sCgKjYWyvd8tayMsq7ivzSg2vftTFueXoYSRn4oYCbB3b6iXhHyH",
  "key21": "541M5aBMRSGUfT8iVvmuQ9s3WfJ4XRsZV3eU4oqRan3BoQudDV3uEFTojGThoVpLVLuaPpJHSXB3WBUJKo8gY3H6",
  "key22": "2oLaxnLAjSdwhxPBRSfhPxxpWnnGh4EK4WfuRgSSV997kD3n3UotiN6tgSg3gpCrGmPsD9Z55cFcdrNTEMhjC7wt",
  "key23": "Xyf4W59u7PAk5HzULiGYkifX4xvGfoaSJnFsjgjPC19ZKQAf7TFTGd7H6LaqbhCikNkE2FNivDFCebn9ixxaT6k",
  "key24": "3BEMhUmMfMG1tdacBfjSzmGh8VjfkLCFGu9Cd7UYRjhNrHFrhPCLZNuEsBf4D1Z4saUU1cTKYhVSwWa8x463QerZ",
  "key25": "3VHuVJfoyWnXR74Vtrsejnbyd37EveLkbb8ho8MJ5HCrxthYaSYrccwcswnNfZBscytdc7TBQWn1LvsVkA71w8b6",
  "key26": "4xxYyEURpsJ9tLXcu7WxF7ADf1bF3XWndJBtzj2kSsKR2uasBgo5XBeF9uoKKrsyaVjLpDiKvhpBUv6FyEnfgrPu",
  "key27": "5j9oZTVYE1Jy617s7Ap2cBUdWeJb1sfo57rUfCxBVnN6JQphb49q5KU5tVtLUHUtwgbpKdtCdAef2CyB7wpD7a4r",
  "key28": "4QHzMahQ2covuxVkhcxcEYxftYbs6YJuaf5Nukc4psDU3D8j2y3JzMhYtfQxFVEEs1gRXwuhVJQKPi9jfx9dnoKs",
  "key29": "4uhTpfTSp197HUFCehH2tgUdqSVMzWsXhbqBZ1PUA9YsiiLEq35qwbcEVX8rNhxJGSQsZpqpQP5tgTvwPtMpHDpE",
  "key30": "4nLrWgyCV2Bxtqdb6bAgLA9VTT7k8AemN1kAHiQfTKaixs2Ca8WP8nFiTzfxSB7xfqnmWsozds5piN6hjSEHgr7N",
  "key31": "3UNYKWhw3gmvBFYer9EdAFqZXYkv4fTeUYXTpF4fghav3ncevwD11RTUYzQ36LYryADgGGZFNxWxocRnhvmB6VMQ",
  "key32": "4Ahw6TXR1equQzF1aee6aditq6bchzXuqZ8FtHPJNe9PpSonSkMF94m5oP43Y46b5SuqBTQ7XPxDUUeHe5WE5hCa",
  "key33": "3YFakWUDC7SvxBAGV7kJevBEWqVScopz2eLeEjRBcpsixQ5ErPxtJfKMFDyy1V8XLyaNNBS1buMJvR8oCAZ3HGkf",
  "key34": "7yA1mix5yNF4cDYgk7uLumxyT7k9cP1HNj5qw9nyzjnpvCRjXGpr1p2TKqqGu4KcNWubvn5WLw3apZRjxbQTThB",
  "key35": "5XDP1f5ij5CCD5y6hByvzRvnjNBLd4qwfzg6Mip6vpEW9M2gZZqHfpdxkCsBT3xMwe63nEomPMf4ESyTU6U8No7E",
  "key36": "2wWtTW4Jwwx9NEPcuwEKnopxVRHjkDdCBY5mUQwZA1h4iBSSqRhnGbrRVrnFgHi2kiBVo83uUaTPZCCAsjBduz8K",
  "key37": "3iVA8hPup1gWNvtB319nBsYo3UT6hzDUARxevgf7RYChjKBEufHNFTE2pVWkM5cNQ6fbsrp87mVNRXeomjqBMkK2",
  "key38": "2LgVGh2W8f3byLDaBbJDG6fKeGjic3f1UrQtoyMT3Mn2Vz9NHhUNKnsxjMP78RdLYaCCtUZQHiFL74DJ43QkVL9X"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
