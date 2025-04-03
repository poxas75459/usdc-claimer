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
    "5aqgu18MAfSFBGUQm3diCV4rvVhbr1jkvkxREP2BC4rwJyGUKHYdhfyxTF7A71xybHc7GvSPbgc7mz5xdGRyunQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qdLwNJ7jGnMwNXi3uLrmKTjtHGznrSHm2D5pVDtt9Fi4rH4UNFxtnLCNSR8c5LDgGXAGqp7e6feQyZnPRT5qJEr",
  "key1": "2EUsqMgBo2Jxaq8RzT4xEd3YrvoznvJxsthGc367duAkmJHFzXLrBxjfzwAiewLfNxWo92hbg1W9FHf7zemWNyaK",
  "key2": "FyG5BWWsd6gKJe8E8Famps4a2LJywaRs8GuVxr2SWnZ6fhUqv3VfmnoBAFJVhb3mbqmj4MQGHVk62dMQFJRYWWH",
  "key3": "4szYiJ3KemFRQnTagGUFseE67L2JpGfGTk8f6Qv8kbzrQsGdRKSCJrv3ZTktoFkp52cuBHV4kH36ynGvi2uxsme6",
  "key4": "5Joq38FxLotfZt369V4BgR4KAGL8ikWEnVuyB8EPPh4aoAvhKPAmgeicmJZWKUxx1bYk1Gk1HVrN7MN9sNu8ARua",
  "key5": "4Mzvd4tKzprmM31b1xTHKXKaFVhYWdNgT11vDmjCEfdK9ePro6dS9e6DfnFKtpQZg1BNMAoMWeBZx6M4wcomAX1V",
  "key6": "5bZXUzu6ubPibbCopyjHAsFyJ6MTS1RSd8Wbx6yYfb95vKgtTrEqyA2cLNTiYjHnHmbWJQQe1gqLBSXA1ujCkXxL",
  "key7": "3m2xvy1YxR3afFCTGzhraCqPAF398wDA8bUqjLmZjDdpfP46FpnSjkRNNtGg481mTFJA5E4afwzKSA4sRipHLEbp",
  "key8": "5VjBJkqKnmmcSh29X1Fb6qi3LrPJEs3ehRURJ3wu4G4VaAavB8SzAEufr2NSLFymejeBEkt1SJYiUYtyjmV6VEvD",
  "key9": "4XhdBpm2S434LaJY4wPXhmJdRpvN71fGq9u1J2aDY6PGGKCLscJjUn98RMfHPZigHRiZj9CevZB3v9soyHHvsFGo",
  "key10": "57R7WiGMH3KB99YMDhFt8AWuQLgBWFZEvio8RnjzWuMJggqay71DDju72N8mmPB5c9rCoPnTBg6sMZ5yZCnXPbMj",
  "key11": "uKfiN46h9wA3vjgxhXsD4HWx7boUNHdH5bdz9eiaewtGhVfLPiJ5ZMDYCGyNvjZHx1aLHY1FRAGuEHV2XG34fgk",
  "key12": "3TLbueCHVEqVd4SXbomjD6zMcmGwE3NqNzA2KwsSTwPdBMwshhoSwycGqeCb44FxP8i2k11a22uKgNgRjmTZaXN2",
  "key13": "3fZqxvHgyoj8Mwb8SkLNaP5ZvvMtYcMeBuEF8Sk1x71hcGNiAmehoghs3FJ3XHEPHMTgngyoydWhLdut9e69MTsL",
  "key14": "3QZaJ11wbmo1mxADt8ynykXZsdWVfiRS9EJdxSwECdLFmjWuQZLDg4rioF9jfsaXB9Pxu7PvMwgFuVCnrB7QYS2J",
  "key15": "5eAwrwRQCGNTEiftQhpzMpQLttmoo7LU171faTLg3CLa9s7VEth9PMuu1w1Hh8FaW2FBNcvAw7une3jwhvk3SPGG",
  "key16": "xhwNgdnkni849Qe8UbeBQRBUuWJJmSMe6Zzvi7et3E3yX2FxKvShnRZQj2ywMT9nDq7p96UNUx3GdiTK1sm42PP",
  "key17": "3Xq7X6xSnPk9hokSZoBqWgAR5CsG4ZUNVXqzArXLDnDgmRquE3CUZJkdHPLVSJ9VAsr29ZGRybBz7jjhKR1HFEQ8",
  "key18": "66CUcNqWf716nsPqbG3FQYwvcaiQmd5kR3hoyFJbhsMQLPiJcBHMPMD1Kn86xmqMGfRRttXoVFzTcFethWWnTVnf",
  "key19": "3VRpAQvsffKkniYde7XFGwWv9Ygdyyp2V6HGtWEThM5oUhtci8egoUsaa84m31zPF7Wgfgbia8FVB4idk6Xrib2X",
  "key20": "4n2dwoiWrmsTbxNsHUJ6u6SnQj5ziGy8TKt97KRdCiP1k61xWczd4itHa61F2wBkQGf8bQQyiKiJAZMwMphn4rqi",
  "key21": "3aqCpKSKkydEsZ8zdpjFWWh6gv2rNr69YBixi2azeRYbkw3xeoYvZs2WVsAaZZFGeWYRMY4CdqTvy7Gecr6zcru7",
  "key22": "5EzkrMD3Npez83SEXMjhhXaUo4hCxmUmt2NbFZs5zpKJgvEsDaArDEHtkaKpEoumkpZTZRX4tuQDoKnqQ79fUj6x",
  "key23": "3TEyYmoxstUg55kjQxjVuWmfgnP2T2HoUdzGKKXFqjru4ajbHuZWuYf152peNRAWcLQr1vf8PGYx4m6yGZptTFEu",
  "key24": "5g589Q4MdMFKDfRBu61XKiHiauCQdszB8fNdYQWLNUM5dR7hy8nkWPsAQwztdkhshe1HWkmC1xffM4Ai31Ua7qsb",
  "key25": "1RFW5HNPEq5mFPLpvozMHGqf6yPPBTxYZ1V94HUfhntvrgeuP33tKVinJJH9ZYJj5NM4qgqXEUJyuNjFEdfEEwT",
  "key26": "3vEKYNsXR9djjEn642Q4iRK1j3KaYzthVi28gWGSzBS9aryaB3r5KyCigz65uFxGU5reuaDxvRcwB75EqR65Kuf8",
  "key27": "4J2s3S62hk7GPzC3Nq81aBbU8TLHgeQLLPUvCChv4k19Y1y2iFfnozrQzHW8GhMdSJykwyBJzw7G94iyaEkzqKw3",
  "key28": "4tkVJvUkk72dpcwzw5KPegh61YYg8sWbqTMvGq3DQye1GLR2tGMTcfT15e4rmJ3abf4BonMCd2XPaqUEt7Wpjzto",
  "key29": "4H4vJ6Lg4bng96wP9hkuJXymzxfRTbND2qegDRVt4eazKKFPiUrjf8s3TFjf2UU4J4MpGihe3v2cPbgozdW2ACKR"
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
