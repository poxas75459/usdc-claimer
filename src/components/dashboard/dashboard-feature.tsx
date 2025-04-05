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
    "3uDoujx9UT1W2JA2gLs17mLrdP3ZsntSwLsy7npKR6J5Qaiz2DjSgnbPDpTji9ULopkTA8Kn499GJRETtFdZ2fKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhQgkJo21c6jGZaHVnPCwm5iKf2D2tZV2mueCyDD3tNfpTbuNVPjRReNwUJHvPRZho7J1xS8WwLnoE6FgiQpRct",
  "key1": "4z5QWkDNzQtF35z6RsCTDn7wMPSK42SwJNVxedZkd3Wa16vYKboRSArE6zVvsyymJdR2Brwxi6iZKWsXUEo7WcFV",
  "key2": "MuSNErsE8Q4NA52UerEXXkqXtgPcp9v8RrJG58SKjmxh9tQkETmBne2uTeoXk5XmUNyi9Hci1J8zvM43j6MjbtW",
  "key3": "2F9FrHW1aNkuZSxRpPvgSHvsiu1DjpfZgBVQzJ8ZZgCXpgD5KNu421XTwGqYL2w5JSiBfxeqJrhWsA2fZAFZqciU",
  "key4": "4DZYufcc1Gkh2fkxB72jXXtPdbVbs4H65rkrx6739gcEWTJVyqCbFEwBLJN99hmMuGQHqMANtj31GzaA1yapRuCr",
  "key5": "4CuGh6pn26j64LM2jHtjn7yL9iS18hJBgG4C1izpxPhNvHR8eVvjY54DWT1d7MaUWrQVLBM5npSK8b5FPUSxPYX4",
  "key6": "zsB3opUk1CCAg1uH8Ffhs6sxA4Bi1hkqRRo4AytGHaci6TrRCYWgz4AnQMToA3b19gXe9ZpcfNhiciHZ5sSRuyV",
  "key7": "4RSmpyPJDFuDhVcV5G9v3aFszqkqMefVA22dErY2gHVqUgggDEncAQySh5nsHdKLV84yifeFRLARFkvu4h39o7Pi",
  "key8": "3JHiZq7adcrbaL5eTMFWRvWgkdEnLYAzwZ3eMGzv7QvcFnvjJr2qY6XtqiUQZzjT5XfjndFrL98TfJrbzobdYPek",
  "key9": "4UTqwYJJKD2BkGwYdwbszR6m5cpVWHdzTkNCWtKbAofKazYvkDQcsptPrSnSAbwz9EGCPUxRKLcRhyTWYGuPntw2",
  "key10": "4r6U1Q6bhxV9q4mZQc4zbcRrDbPFQWBw4MqQox7nJfGbHFpoq7XPctMLQUbLiXBP6PnAxa5k3tJV5JR75gErRUVe",
  "key11": "2aFjZ8Sj51xhhQeEBFnoGFddMrH55xegffPKrTBGPXqkfmHkRPqMQA5SnUmffzVzgbi6ozWgBPd8VfP7S3UY4GUq",
  "key12": "4Q4a6CkpQUSFhV1zR3c9DGwDYy1jGUWNz5t493N4C17bRPLQscf88siFMmJLqynBvYonTrCZKFDa8EKK2S5DH3KB",
  "key13": "3bEV1hafa8QeZoG1tYa1obqs6xrnZndUrAWhvz51nitxXYtwWNswdTLhQ3m7C1pyZj5TCGNKFjPFHHu4fpmEMoQb",
  "key14": "2v8XUFTLvT9hfTX6wGVoB6TCLoMFNGRvvnTmXZD7G1XTWA3a3txY4PdZaiJxTjyyv3CBTkmSk3LjH1Am98XHWiu4",
  "key15": "3K3Gz9G4hFKh8uwPZDLim1yQE18QYWLgXG9X2HtoBcUp7SXxrwz3XghWV4N9qGb5bpfKzSKCPHBiQRt1vZkR38tU",
  "key16": "65qza9vC4zk7bqiV6UazXRUfghqhjQnBS5syFxgkAVwmo9x7CwSZfgDm7n4L8u8gztGwbZvpL8su1C7ycxQgm74M",
  "key17": "2LHoFtdCGBAsg7iFimey8XLtx3tL1Kx5DNfQCTVTukTBYAwrWEkQTWNoJhsU7zjuWU83oxGXaQKkYGEaWbMtZ9wP",
  "key18": "kAGnFBQmyBHXTtMpBMSLbgRK5HPhtCqndpK6GXDvKdjR6nkLUcG1mDqFaWXmhLY1qoEvbgnFvfr5HtPjjbGReL4",
  "key19": "4of1xS9CqibxPk9jFjjQk2dgY9FsJxPwNQcGShbfKBZ4Nverbjn5DFaPvcQXydJDuHUoqSE3NSDM8YTCnf6TQUTY",
  "key20": "4rom3rGPdcxjpE1xQyrgKeTFymKPZ7A9oWbFP7DJhQqvcMc5HunSHbdAgcGrdLVqicnC8DFv45JSfmL3wrC4Hhk7",
  "key21": "4QryYwpFvKRSoAS18fpkQCDk1xuKEcLjEVBkfT4YWmRvWdcSDFZRwr2mGMrwnK9FGdtWip6gzac3efZTKqvuM4oM",
  "key22": "4nUBMRpRvzQny39uNURrRtJ2NkpAmY8songZGs3TFhSZ7e41qHNDbGEKVZJqU5BtkpXpT2nFFqg6qPEZxp5SNkzT",
  "key23": "5cmpgPukiWPScKNh1wsrdsHFPhtHTS7LEaqY3Yaw6t6cUGjpNFPybyrxoY8HLHXzvHvTkv4poy1WHLsHBYyv1og3",
  "key24": "RKtiqDrceKqqjJFM8MoBsDWaypXmC7fHiXnUeTQvwH5eiQxxDyU11BCN8ZTobZNkJ9QpyPFv4wo3gA1WB7X4iUq",
  "key25": "3nwpdaBK8qnhbd5LTNo43su4s4nRpSGVunvR4wBkZ8oAhvMmD5D2XDif7AeamdeCGirK3zwcqZFFfvfctBjNNnSK",
  "key26": "2fGmm26hn25exWaASZRRm9dXpKjjXPTWYUpWXV8vk9pXiWJYnoFAyR1aXm5Q6UQ2GkRnE5PHANCuASpfkH65sfjQ",
  "key27": "2DLvG53f3hwwgV9guco69whxxkeZiXDJozXG9Q1gb5GHjqxrsGqGHZt1L281btShzS9ERkTomRBqzYFJx7A7AxqF",
  "key28": "5rtgVCWNexSfokwerS93fq4D6WEnV2ySndcqFGi4qbML1WDi8Z4Ro7u8g6RVP4DF9QyiAoEmPTzB4SWtHBE934NK",
  "key29": "2ddQL4uCWGNMRpt1mtTgQ2nRWmYSeJ2CpBYqWAmbYYQfrWj9A6yBf7gnfs3uzfhaGNUdZvfqGYcnWtR1p18K9KQv",
  "key30": "5MSnmp3ii1Skm4kTwXbkRfnWZQUFCZBZnQGJuj1mpz7orNJYQLjgz4nZniKS5wHFu5E2FckJtuDkvHdgSZpnFS8a",
  "key31": "2rPeFcxZojjx4Bkz2Jg75M3ZkP4a4uV1jycpxEotgfb8Qk3PQavURZAoLm4j4USttzLQEPoFq5379MjBFZYoaysN",
  "key32": "V6rupHAWei8JSmLFMAh6EmeGSsmN1fKjqhtvTiNu8hTRgWd93BavB5jkLDTX3rg2igriBpwbVS5S3Zt4G5mDcgx",
  "key33": "64f7dZnE1cuPpPYZ1qYezsbtZxF7VcPkTn7EcitnYzZKDxpbtFBQzPWB3Lw6FpKMGnSDdYfNKUmWCMSVkyMs3yDd",
  "key34": "TuMLqhU9d5bjvUdx1GDuCNkpjybfJdKt2srG2gRqwphhD4iRsC1DyjYKsRgPgZe2xc77so7kxXJpNuMcLQwwnM6",
  "key35": "3hHGCWVRPaweJFUrha4kt4Zf5Lz6ormUDdkztA8UREHD3txYzkzyYvhzV7GW9LQRZYLVXN3xDuLuX3GRf6NQ8nuT",
  "key36": "5MPTKacoNc3cWzWRLE4gqXWjJ7aEQWtbNYwbZmFsYJFAbLgacdhL5sSvKDhk2MLBpxE2PRBzNQZ6iy7n3SAYx5XU",
  "key37": "5wLw7Gy65apre3YVTBBQV1J749XSeL9ZJ5ikst4u4mtWTeLLE7mhcL6uQm3cGSUuTeZYaNpf3Jq7mFeEmk7iw9JJ",
  "key38": "vYkDQz3tPxTDNyy5hcuc8ZAqishyaHPp81mou2uXXEfThou62F5v2Jz29d9fzm8dRrNyp7mcCLiN37GMWaMtBY2",
  "key39": "3J3ov8bT3jd6X96K1EVu3o3E7khQpMzZRHEJxvb55Y8ryMoo76k5b8mVz6w84Do6GSrniyRitqRi7wn9cbU8HAbd",
  "key40": "5hNWD35RbUBHdJGBMcMcmZdPCrLyu6UNV2UF3PEqcoqAwZMVMeTbTHMF4KkyXdtmdW3Q2J8xuTi8PFCkyHjNxvnV",
  "key41": "5a9p2gZrMgUPmsGdD2SWnZ4BZhxBqD7Yh5bJJjNG5rV4j5366Z2A84vnPnUAd2MAVuUo3PX2CEc6csFormYUFyBK",
  "key42": "5hDuKbPw3ip3LHWaNSyNZBj5iW3ykzSj1dRiBm4rCaHShmA6aeoq6oX4j1b12k2cZLWfmrCLUy8PqbzmsVYxnqW9",
  "key43": "5eiYfP8KJ5Huw5nXT6keBRq746qrLpjvKc7VsYnuzB2vvLYSAdK3NsYJHxLa5oZveSajLH3zc2xXiFbJj1dFfUVi",
  "key44": "HwNsZQ8qxcJgA6zTDpQi8acibRYSa5SPz5Ax1AFdeFuTtCsqpr4SG25aisFEyZmgeSqDRQfqRto6yktxDyLftKb",
  "key45": "3AU8k8xshGaPmA9wgx6wGTdjq9KFWwCwqihaQaUCKgoGGzpStWWSTr12SPaT1ingZWYQWaumFDgXLoVYS6Zs56h1",
  "key46": "5EHpCX6bDBSpBpxJw1xffnpLL5rKTibaW9DpAdckbpAuycUuG3w5Les8UZA7srJhsixjzp4YF1CVu7N5WhpJhwid"
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
