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
    "279wAgqvo67DJjpaiK6NyJ9GnbTHRvWSYugqTL5tWxsCKXLmvUDrhHi8NiZAj7UtVCxNSDtobcyMHMcvKtM1NTNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dRLovtXEVpMHnDR6N5RdKJqJd26DdQqhYwjCea2Cv1b1vp79Ni6q8kaxsjZmsVewerp9aR9vyzwomzbXBcKRKV3",
  "key1": "3hKFdug9ReqkjFUnV6Necy3uX2ZJzcY9yZYi5KHAMbwH7P2jtQn6cZmEE1CDj3xREwbujKHMJ6Hm44Ew89YLj8xA",
  "key2": "5fmk7WZnMwqLn855hR6FNtkTAnR68GmVbkxrF7y7rHwJYdE8dLT3ukbXaYgd4wXqc1EfNWEuznnqK8w5nAAbjEy6",
  "key3": "368GzGvbQSdxGY6VfTtD7JV1FApvWx8kQw5KtiXYgFU2UEAjnueYrLtNXNHFatKsnvjmxcGGWXyjdn7bUASenV4Q",
  "key4": "56Pm2zbWSF2m682XvmMZRCoHMGFtsN7DPpkA9LChAhNMtRYPgM1KyGFH15TB7trzFPRqfm9Tqgtr2ao6urYD7M5p",
  "key5": "463hs4ipkjjTFLfUmaswNrUpcz21ycrYCHJ9U5WqnvtJnUFaN9A74E9wDvg4oGeTKJAHE4duYrRpf1Mqdx13Ppg",
  "key6": "2RdWZ2Fm5LGF4vP77imbBV1pnEUR3b5k4Ewit6iphhAxcVHQXDvQcm6stM3WdU12qySaLya4SZ7U5TngDnU1aoxB",
  "key7": "gqmPtpqiYBVjYw57G9u3P1fq6UG2BHkRz4PGBCAaVdXX53yg79FfzDXjBWfVs32yNxTUCRqFMr15CDydsf2bi3d",
  "key8": "5pg2mRS34CR5f68b1DobTdnvoBrSk2rdXNwF7g5uaukUxqFj64A4YMfmcufzfy1j646zTQ98AMAML2Fz1B4nVsT4",
  "key9": "5LSKb35VWGkdoi6x5fq6WzZ8suUEKcmR1vBCTmm5QP4aLzTpC9HwXkLcpM1uz1QDVpatCqJDbHK3s67sfD8a5NMc",
  "key10": "2JHXQj6WCj558BA1QmGM7Hc1vGFBWwpQJnqGFpxvF2RWg33Uk2Zynx2jFxVQoTABJNycLKpT7s29FXd2JDdE9Xv",
  "key11": "3wiSgA9JXQxGUjfZ3Lz2EziH3DRSCVSd1Ye1iZYPoceaKDUQskkHWR8aghZzg1akt25LCW5dLj3T57HpVQb5qLbT",
  "key12": "4KxqxCR27PVx9R6Eiy2Mgodsq2sgbwvwhXYBZM13hauwxx5UFec3cVFYP9ExmTpKPr4fLN24o8WRHm9faWoy85vK",
  "key13": "35S7BMcFkuRbjsSCnLyTFqavo4cr4Dmku1vDUAEmS8G3RqZxztMQprLkoEoi2GAorXyynoh8m2VtX2jRPqcUcrDc",
  "key14": "3SwWHK7z1MUQ4ykZmdMujdGVBPXxo2tdQs35PSew4GKDL6FMqcB6gkxgAjPjQ784A3M5PP27UNnmqjaHMWRAS2Jg",
  "key15": "2jKt15BYb4E5svfxDpUGsm37PzYcPCnB8xFmYtGJdpUAfcwg2AYzRG8MgBBUQo3YYf6YrQGbJCiuZH1xxvEVNeSv",
  "key16": "SE5sDAhY6fNH6C2qxDMn284UuQKpu5pqq16DnBp5xWP8b7on8rSdMKPKDmDunqPgDCnLoZQsVYCWHBo2qMB9gQp",
  "key17": "4fv4bYvQBSKjopoDY7gwFLGuTJJfC4F2xERfhsMTq3gdRkFuRQ3CzixsYTQf5fK1Fbp2dCD5oSuryps2amkvzcH2",
  "key18": "4i9YvCizZyDduhnU5cVwpDjG1ecWzYFpdB833ysZo76xMjk78h7CqujE5yGVFNkp8x5wYvmWKTNcYgcEsjJsdAhy",
  "key19": "5sm8Nxtovtq5JXSyLMBPuoZLTHRazsdLBfmzShaKXgqp3H6DGFyBjTU1ckFUaMUYscAXZXM2Hm4vuNkkSHBSY2ir",
  "key20": "nPs7AJVjHQv8kyVH2Bfsye8XuF22ny1zdG2uQVXjWtociSWwrv4Z54oEfhkTpGg6ipTBg9gBy2Am96b2vxuTTuw",
  "key21": "c88cNQbVgbpwT738KjUxXSnex9dxq8EidGCCmW2FuMe8n6wvoFTUoPM1tHEpGHVVpBtkUuFo2shXH81Hp2gFzKN",
  "key22": "24k7sxnGKNA1qgAv5pG9Rae2EHUKSi2oJXBPUvEootSLKMuxRN7Unazvgk3QZc5whccA1z8hLzcznv2Rb3mWB5qw",
  "key23": "2oEPTWKj9hBiwzqvv6LLUsQwde8tKBszyqh6iZ89dtQ22XTamRR7rTboYgXcfxUFAwM8NJd7wftqRzE2AoNaUErq",
  "key24": "4pDaRgdEFDEGi6WTKA8bGtAbrv5z3nwSgCVWufuVzvVQPD5KaoBRRTSLqDkhiPmh2NbvZUv1fuyZZD166L7xb8Hx",
  "key25": "5sEFjRxQMteTC8nYR9KSmGH8oiCpZsQV1CT4bGSc5HY9racNTX15y3Xd1n8jsSQ3gncwaAqbmMzAUBjDAtbARbWW"
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
