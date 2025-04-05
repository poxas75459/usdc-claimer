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
    "jsu113AFHiMP8DhBPit6B2urkZkNf67iWZpxjtDXwPrVcrxvezzX78NW1nkTgZAGnLbirmfN6BCqMDFyE5w8xax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmcvigQR1fZ4Fb2P83EsHsU8XUwc2rBrg3VRi8UB4xDCrAstsYXGDfAz5urYWH6M8nSidKWPw1tMfstsCGgAp9K",
  "key1": "4CZW4WuERxbQAmFRZKBS5878WB7zYJe3nwyYwi9tACDDJaSjSNXj1vDKPpNGMxgKBFcAYP1cKXTrSo4XPXLes4Fw",
  "key2": "5nPmtBP3HnmXbkmLKSYBzYoLQNY9bYkEiQBtJPD3Q7KyzzpPJzVveXwQHCtYDHQNo4gYY4FY17CsjQWVtfX2sMDK",
  "key3": "5HrQftDpM1NqXEYxaxa2x7mU4TshPsLgTmfBoNNQhWhvdXhBASkkKNhwLAaCranKkAfgEdxbS6JDJ732tvCT1gK1",
  "key4": "4e59DTc4CeT8vivARbw4Dx3tAiL932oxgAWiQqGhTzqa7HeGdHJx9NQ7Tqh2TPyMnnuvZFAhTn52TPyoAZ2126ur",
  "key5": "3oggT5N2yBF5UgCj2NgTMhXKSdmbNKwgxcG1owZcd5HxqhWXXWaEQKHFNLpwFrPGjUChMFpXJNfd4uMrScj5LrmT",
  "key6": "5BA91q7xJERKoycjMcBRZCMWCp6Lw9wZiBS3VXKfusSJya18zyNUBgmKHhJ5uPW3U7t4SJNLgP6AW16b2omwya6U",
  "key7": "2eDBFD2xMc9uXPcy6iUUcA9Ycb3CTFEt7WLg4WBPYHJo8FDGsiKhLLfFzqnJWQ9ZFMPpfwedfuZ7tButZhrLmmpo",
  "key8": "3j4P5UqmGYFnMLWpZPHBS6UAL59gVHGSe1ivnv7nMjeAN8fLHhDyKZKjLcf787AffM9NQU6PMYSsHB1NpCi66LT5",
  "key9": "3xuxJJbNKnZ3ux24nPSsz6Db9uEAzW2cHMvHMmijCHUHLUUEzF95Nm8zqvvj8zqfywjwfs2NbrceJ43yb6TVUgSN",
  "key10": "Tj6vh6oFGc5zC3P5Z2WWP4sAvoeYnAmmbF9nzY19wA98VRVbMvjgL3RNd14qhRTd4uCiaxhySnzwv6VgTkFEPCh",
  "key11": "qevwAWeg7MJwEm3MDd7GrdtpK6DVBLns96Zmo4XPJWVxwV1oRgTGpA8P6oY8MnaSFyk7Yh6A2rhPZzae9kcfPbY",
  "key12": "4cyuw7D8hnQ1FHRA35nnYdtnT8sFHdvcxewKxb7ASerqmwND6FEKU1FRo193Dc5ZYuQtQASHHmD93pMhLpEBsMak",
  "key13": "2aoWgUVs8jbAeQqkFwmHaUBvNhBCPq3Hq54vZGyTjFKCyVnRUry91mT6XVBnwPp2VNHLTn65C1ZhAQLsQbB6o92h",
  "key14": "3G9hM5karfDoBPHVXarFihQderuJF1YMhXANmsVpBHZEjktPXHkWp6MeJNmXEGT7PogZfUmEC1wCBq4fpxJTPafr",
  "key15": "4pPccC8Y7tiAokova9zud5WSpC1xHpBNZwrRCQfnwrcCpAsVj9B5MMhHCHUWLJZ6W7WPYb7fXeqxvUG9TcaGPFYQ",
  "key16": "5kVZWKn9srWELGcDc7bhZRTC6WPZ1aS9oBNbXBgrr9hfq3KpX2wa4UREYewTy9j79CWbQcvidfnzMzoV1v5safNa",
  "key17": "5aDxvSh6KCnAw6WpG3Au6vwuURayQgDp52xqumoU1QSTb3S1M2tfvfi1ytGmiAdRJ8iHNMRsDF6iKvfsJ8u92QSW",
  "key18": "3nj96RC4ZVpzbvjfZNCZ3hACvgPcvz73uJAc2s87pCx5cBu4GuWxnkJH6n6Qa3SU6kyVBuYUtamTVeFZj9HhRrqK",
  "key19": "SiuhWt2orqo6FLpDhSLvSKwDYuaLrhkMgwzgZTgQYP4DwoyGEuW6F8fsWC8828fFGRBaucuzcHTT5iCyrsmCuJ6",
  "key20": "5jeFqFHHDMK7Q97zLnMkPJK821FDoRgoyiyKdFRgbqPu1fnTDPxD2mX4WB7VrrZF99JsmipLuAv94xC9HDqnkksP",
  "key21": "5HLCun3bbe8No5ZAbqFgYk1ksCH6pZMeSsqEy5HM2nXGjasekj4FMjabf4S9bp94uoTE1oDEyUrsQx6MzHNUzWmF",
  "key22": "2vgze8k6VPQF2HsRRthQMNViJVb7yz91Wgih6p1bkBBMB7po7sxTDXTMPQopu4jivxkCNmnWXt2yxy3oo6xPZwqD",
  "key23": "4cK2v3RJahMUSf8HwhzSXee8SkEnctfuCtfSMbRoSKcAGGMTNBUnHFqjcJCEsU2V5rfjNjByz1BQSm6eDksDxF2c",
  "key24": "4MxpsrrFVnTmasDETRQ4mMao2JygepL9NC9U1Z9GTuQmL8qBK3Kj56w2vVF9NBfnvkPJELPkL8hVH59uJU2KZQ1T",
  "key25": "3ztvZSMmM1uZWkBX9RSgnwkVgvGGoFyt5inwb4Srb329xXQAWdqTXfBJFBDHBwv5i842cQtNaaAfRKjPHNqcR8ma",
  "key26": "3W8JGNDFkszxSmC7pjkcTv5kmWjhHQL4GaACj9GNuLADJtFd9LCEXszbuA3px2VLSYsRkJGi7xmRgBjDasiuHVBq",
  "key27": "2acZeXys1Ts6RuvbMvFQSSkcSspjo8T4TJdx7GCtkzjqP3UNWmhkCUdKfdzxo5GyvYYB1gJJf5BS77j2aFsXNnzN",
  "key28": "5n8Y4LMsWbYjGBSAdNnyp1KH1d4vdHneRCQ2N3wqdBapimysgcnYjy4zeau6vmiGcxmVyP7au16yJdPn4TtrbVf9",
  "key29": "5UdW2vA6aZqhyqVpGWrXJ7fNDWvXsU14HRH5sqvDSsWYeQg6WcacKAveXqUrBkv6pVi6F8vqnKFF6mqT6Wem1mm",
  "key30": "2P5SpBVBEKWvZPLM5uALJKuVagb53HbtR9TU55hdSNzJ5ciT8nwQi1mkoyJvQPKCy23pKkwcosPzpF2Xdq7ms96S"
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
