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
    "26T5NUqEuywHLkj9UqJrWqNYxdM2UAFxcyjFMzw1ZNjsrULBHGzMB3TxP3hgwCJR2K8XdcWRzmLQb919NLwWPseA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X89vmeR4Lzbw47uNHB5KpGpeEd5tguCA2LwDMbfMCd2H64xjgexC6BiHQ2DN3JCX5SoBmmTQPnWpCm2Jvr13GcP",
  "key1": "5ZFSEa2ChZMjMe1ThMYLeYADgDtmp9bzYL4rGFpUhKLw7HbxZAR2JV5XbfFD7jZdBFckMmCeAsDGVwVFRb664Ad5",
  "key2": "KiRdgQZD3UKYkPZ3XKzEEgpJLaAtC8FCYd6dEiRqVueUXukx6DJMwKxxxugRXjVBFEcfiCgppU5UmJH37mED2RC",
  "key3": "2sDXgBRhAfWx5Sa6rA4cp112sSqDSPz8JFyVEfQqYc3i5cb4x1RwfpuDQhsoQvsNS1eqXuJYCfkpCd5oY5dfVpX4",
  "key4": "26WQfD9HjFnCjGQsrVYyXnspP7NxG2Pdb9y41pYb4F4UAiFvv5TV3Fum1aFoTywrxJeorruibqhs7mCtTD6fo1TB",
  "key5": "4Y3urtpJBzbSmkhh2P7nALa4ueyjhMWJAtjy7SxAv6oyDTvC7jB5PdvHZutNLUjdZNaAt3mkfpAgVMQqhyvLMfjp",
  "key6": "485w2vZETTbG1hjLmq1NnNJ4jtWY96ZJyVxDLHCkqWPW4KARavJgML66M35P6kivbFxeveK2yV3PjoRbNmtFEUg5",
  "key7": "2ES7y6zN18RCgY8Sw65Lz7N7B3hcc7Aeqx2ztHbCASn9iBT8pjNp4Vi7Z4Pfvqhe3kF4ocBpdd4tXSGYnqFkbCcc",
  "key8": "4PPzMg2aMHrUsKLMRAgJnwHg8YifwTYH1wobbyRWFf3c7SS4gY7d4rgStfaq7ANeU73WEdSiweaXboLFqUey6N9V",
  "key9": "3nGQcw9yKT4AQUpwG8EZN8bwNqcpTVCiypAcshkvBG8WGTE4VzAuQWucd9Gf6QyaTJ4vwkevGwdZKDtTUzM8g8L8",
  "key10": "tYoPTEQ8fcfzjgK6dQ8XBDSAof6HJSGQFEWXis5jJJ7mGM8bH3SyTC1Dd6NDx93y1oHFBnRmdhWdWqcWt4khXBV",
  "key11": "3QEg6tVLEr25NfZJQgQvZzH81cFWgRzGrvf2wYGm72R65ApnxsdKt2JzzV8hpyFiXzaxV7o4HcEvA5SAuYeFwfau",
  "key12": "2TkqpNmBzhEZsD43aYhJAZBbMbk1kymvmn8QUysYjmcAJa6MNAvLcJy7aCzztBYv37ymEQuFayfqs95S2oTPBNSE",
  "key13": "33REXiNAm4jUWyuaF1wmgM8cemDGKMtRVRHGebsTy9sU3GF6t2uXgdoiyvd188VTJiuyB2ZvxXGX1ns65eqUxnsP",
  "key14": "2SaAhjtCGaJ2fh5sPd7BUpWcY75qT88UUkX6YfH9Z3p4QjxnPYcqcfJXK2tG5GaZVbXpWh2tVzVrzbLPUJg5LsiX",
  "key15": "5FyvZLAL7c9rvzSoFSa4L5ACGzSiZNsPKx3t8QcifRLgqvVmv43wK5YHtbdcbhpDqRSQC5gx4QJJCyz5W6NRd39Q",
  "key16": "56J4APctf6FsmS2byV1qXHYwC7cwpeXnrUPoCz41CiwXbjYFJ9Bjmf9122doBLbX1ZKBD5zUH5eoKXY6WeG1LQsB",
  "key17": "4orWF7Qb1eYtdBC97DFUPmzmRvnpymX7iiQW7GtaAEBd7usbYnZhmWHYte6PkqXjkfFaJW9cZNSSo2f3XvVNa31X",
  "key18": "3KTotvNc9DL8rwxnsRF7eVD4oU9WUJsH2JKoHEWagCW6HQNjtF3HZ4WaEf7PEtE47X8goLwUPmLMsSQ7xZG9ejji",
  "key19": "4d6nd9Qr67WNZreXvotwyXBQsY7jr9Fj6oR5NNbEgKF7qykjXnotzLuGzM7F67KSqsRs3fCNMLnzRqHGE76gwqPQ",
  "key20": "24iFYR9o3mxNYin1Wzb5Hb4NLHV6Q68dY2UkzTWrfeWdjB6vhpToY6DMoovfxkNogaD1Ukv4a3cDs2CrJ27xuqeD",
  "key21": "22fSnm3U2sZERKV8hZtxh2iC2Jyfi42eN3fzbMSmDVXi1Emchfic4pnzRkBp9UStBF6FjtHkNTVGNPsUU49zWTHv",
  "key22": "32nT2JkaV6XnPtD2b1P3pzQV7hETUHuBmCihT9RYWWUQmzeSoC74SwKkVrwKjspGWj6LGkGWsTrQFohCe54nJLAk",
  "key23": "2yzKR52o4pfbE4Cd6LJUtSeGKQMNyCCEvtJ7aqULeprZy4oMriAfNfa1ah8EhDBA3C8Tsy6aSHb1EhpgnLKmY9RA",
  "key24": "3QUxe1x4Wma35987Dn4azmH5EUc8GgrwdvH9SBdTcAeRFTEDJSZCihj6VkRp8e6GPLidKxCzp28K6eMuXTmMgUCP",
  "key25": "3Jz4YegpsVPcnDqznB7nH7oQ4QgubxRWTaqyfpg5th3ZRLUqsynWKX1SKrKhBEGYF1A4SdNDbnBBTxeQK8kdmegU",
  "key26": "2N8n56z7UjAqEwahNyfhQ7w6vmrM7GGmwQzAPpwYENz7oLFcEF6euwF5GPE5pQFTdVzPqWUpDSJPaE3DSbXtiPUg",
  "key27": "23jDH3BVZxjHhLRfANhjYDS6uwE7CAcQ22ZR5hciNKUbmVqGH6LTnwxDSrENwCCCt3KhCBWfuhxaKqx8Cb1rkuzs"
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
