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
    "652B34LhnaCKEwfZ4iNWyGAfNNfxAw5TzDCsmmMdBD6mu1WcUvF8YdESLbU8mdskgybbKpzUb6mhbzDaDJe4Boqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1jomYVci6n5yCKUAso5DEJjCkiebAZoL7VLhECpeaBksu5g7fwJJc3uktPCTL2fKYDP7875X3Ywq2Vwa8jGfwC",
  "key1": "2NaBK1cdEm6K9ssHDpb7ocnEhQKjzoqyzDkKadP76WmyoDfwYVdDFCfUfehqajmjAYoNFx3Wr1paoh85Ddn8nFfP",
  "key2": "2jgxuBRgEDKLgdWqWMbwqGTQTibGBJ9PrxNFNU84KP7UHYjAwUPnfgUVsgAmMXxzbiC354vUtPXuHsVG1KwzXfHP",
  "key3": "2Ez7UjaA5fGFcFzJFNrdVJfHHPpGtP4ZRB3sqzyxBgfMJtHtaHvZJAb3sVT88zyMLp8yc81Tcs2cx3UCW2mu7jGg",
  "key4": "4esHgyaHNKE4eVFSVem9g6xmJeVQuFQz5JPBJtki6fjKTc8EVpXqkrQCVSj8rPvjZjcnL9H518t9bEXzYH2nia3p",
  "key5": "626axocFwVg6oKikPJi6HisbtV3yU4ngyMVUUvuKbRHHaQcuN6KVDEMf612unZYJkan5Yn6xpp7QC6cSu9brYoSi",
  "key6": "5NZMr4Aec4taXzDUNKYyDFr8dvDUXXuAQrR8fFf8PvK4z852wJMbvLtZeka98ud5jnFdXwHb5qCVBc6LnZe1RhvK",
  "key7": "2DHGXPRKrHjqrHyY75DnAdXfCndsoVbUGCzxAUZrwZnBQ7SPYRVtobPMkx8Tn3LjqQuf1UZRNgjPNrCmGvE8xFMu",
  "key8": "h6vch8tro4yCuYDUmHAcTfCRofLF3oLNHpKaewiMjgD7Zzt5CfoGeWNkzFeEopQ8KSDECAGRaPnU2z99YUPs2vY",
  "key9": "4LB6F92AdTWDCq1upWTVs4bhBvVrg5Q5oZbjEndRwb39zsDFEBi2Kv2TpyRUNRE21QRacVoPgMjdk1YhEpvoDvfB",
  "key10": "o2LLQUya82yZg8JYNiTwQUrxHHF2UPQgtsSfiqCPW8mqKrtZrGAms1tAyrfXHRWYNPf2s4oV5syfPJNQ386Ak4E",
  "key11": "2vqFFCuFoU9Hswn1mSXFL6EbnS77dvGyCGjrWJP91S3Rp8PZRDDEpHLmiaeKap4zkMwDb3nu1hy2LXgTMYKzR5RB",
  "key12": "3wjz7tLHLwqcixX6MejAEqoW26fatYRNJumGa5k94RQGMVNJzVGXfydFm9ycy6AVGsmPhyBXVPWX4mzJUeSeGYYU",
  "key13": "3SnATupnFyBWue4udnCZ69RQy6qn7Z4PWmKFKxWYYkrmuipvdM8USfu1t4tjpjG9r4aSbWP2hMyGtVhpSejMQczw",
  "key14": "3AbD8xPFsC6Z3obBX1BUVMApyBxSuayLnaje6EC7dCCKpEaEwj1Lq8qfXSrGhMEHE8zxuMTTfbUvPjm5kEedwEAP",
  "key15": "3HWcauY6NFT3dNog5TC2AUKWQMmYDoV5padoZckbsjwE45BoXx8Wm9Wq9QsERCzpZ2MxuDG8fkQcTteHCm2yTsoY",
  "key16": "XKjiNzFhmgZvEmPNudAnG5QPiWRHymErLHS7Ucn1aZTvdopQ9Ai7ZMXyLyqBkNeqHBk463ZfRZHZMmX2XgVH5Di",
  "key17": "3CxHJtcJ1US7G44nKALpD1pqdm9ArE1ZLM2w1qFxt2jfT9VymKx6DcKSaVg3Cq8exX9RbEPMAN2RdZ67hd2UsoSS",
  "key18": "Cy3yJfU1hwnWtLzKQPGNc5ufxe8Qv79dfgo4Mi32f4E7EW5bMcQ2aAsCv3foyHpzcv7ZvSFVWSACDMwKEDbv5Zc",
  "key19": "2KMn8tDheZLUMHPPrskesxzKA8PQzBmws4GybEBw3FySZQiEM1kejRezLFejXdtnDAWRbw4MWPvuoPb6XXew77mj",
  "key20": "34NDtTVVAqCkLC8ULPNqyAVcsoRGPe6wCRt3ivP34GSsFtQ3RDVTi8zqB1siY8uzKWdAMqtHvDhnpHv6mVPLtdbQ",
  "key21": "2hZFHKhXXVnd5aUpcoVuRg4o1XxJcqTwUxQmqgVQThu1cnc7MjFLJoT3kpFrp4kvDiMFT5gKE491pfScQ56yYRZq",
  "key22": "EBcdcjhaqEwXka874UTNChG2Z3BM63GLho1747F765BTsUwkGqD7cAeXoVCzhbj8Wh39B6Eo9pM7MdDoep9JDJK",
  "key23": "2mW3kyuym31hzag4DcXqfi1WYQGyRPrfm1ruX3ASpWyfFJmbEKVybSeaTQCfrsshV5wa2xkeMxdDdGzk6AL9pkpV",
  "key24": "5MWVhksU47xwvSHxMHG4RW5da8p3eRNt1f42yf2S1C3nCPC2ZWSj849SFG4FuZ75Tdg2ejy9wJ12m1GjDWX1DdWX",
  "key25": "2NTfDCjzsXVV4HzYeQZ6hetXiLw81Xq3m1AeeRx9AbqUrV3iNVWYR9iiJHXQPHy9nBHfVm73v6FYu48SoRSh31S7"
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
