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
    "3unzt6qa6xeXfcyuSDymdM3H3Evf1r6DYw76jVJhiXLQs25sMMFMhVTT8xMBhn1Xqh4MiBpCMfYdTnekmFM39jcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hedu4EAkP8mg3ssk137C7Yky3DzesdcuA3CCXEakx4Wn7X4ustDEraut4mDrbEr8n126ii4Kjih29qD4QgzZjPG",
  "key1": "2y3czJXXvjMK4QtH3YYSNzfkCcjnoXbowza2G3ZSQ5MNLYJxVzjwzkeyMXpXhusfvoen65bcrdrAwnvDS2i3hfue",
  "key2": "4N51j6uBi3oZa6dejv7w91bn9SDFYD56SXopjP1jbaABNYv6oCWdB4utd4rxTFU6bDMoXbsPrjjvwJzeTy5SYHGF",
  "key3": "67cMys994irUmHqJpuzxUPsNuqhja8fe9uYUZ1XiaE7zBdUqT36VxnPXeDsdLKRMRuJaZ1gxv9fAYU6SLniBC9Yt",
  "key4": "5SedsyWt3YypvHLrgN5RGwViXBN8HRMY7KYcb3VZzUMqP4WLjs6oPohGFYZEBXVeP9RgD8S9EhwATkFAobZE9Gdn",
  "key5": "2QLmRiWX47TDukqYwrPjh3piC4RhMTmDpvvRijZwBwNfEjXncsCeBsP6fawyMhVUrCSQfksARWM3zg9EubDYPw68",
  "key6": "31Xu2VpYWPnM5MaAojXZMgzB4geVr9Vifeu9qLQyKF7agvgC8uFuVknFVZpeBdWVaFRQfeQkMsNKS1dqYEQvJYuW",
  "key7": "5UcvqQ9Fi3s4TKAtvGaiZC6eNvgCkuEdwarNsX7TnkjEstd5gKQQyYtw7EqKPYg8Fvkf3KpfzYiMWDfejSVk3QDA",
  "key8": "5YJxREfRxvyb4WT6VaMNBMvT9tfckzc5c4X77VzZed6EaK8pdSJkWGkPPCDiHr4B9NL5Hy2hagqgkhz2k1Ajno4Z",
  "key9": "56rWUfkfDQkz8S84o1hacK3vfpRaW5XcbNyucF93UECxPuh12uYB8JPUuUqCrtG55JRzXncPgvakPWFGGDuvKKo2",
  "key10": "Wh6Yy56M9zgLuXkf4WiToK7DAfdJwkfPqi7MW7nPBQD7BZVBaYKqTH9VaSvNsfmxGehanCtQhxHHxUZWw5DhTxq",
  "key11": "3QfLrsJETF5t294xvZgiXzxMw2vmeoCQq9q7SsGcqYYN7WU4fLjP92BH7w2Y9Wgn1m5EUMF2BGHeUbwumpeXXxqv",
  "key12": "3E2cNMynRUDwoLo7xRBFYgdVBmN7Yw8ExKo2hYeRh6MEPiCNrwz1Ac5CM9imDX6Mt6nizscNtL9tu13JdYh9qSKb",
  "key13": "23SfxMgXBHFn3upLnCgD8LcHeEfpjYuoMJxSeyCv3mkRoioXxwBGcaxRyXbY8zHeEecvgusgchajoh5pYRKAVQFc",
  "key14": "35pydaZDP1rFLQByAJMYwfmJmw1c7ioxJDDAK7CWrKR27kuX8VsNhv7Vabh4KBm1TfFxsP3KsAVYCpkGpH5gQHVa",
  "key15": "5vrwMdd8a1dev8yUbwTKH8Tq79CumjFdiHbYp6pNgH8cJ7jDHCHT3GXqX2fWpub5XfjYcceSkJNczEmJaS8mgPH",
  "key16": "4XPqQgQeo3Qdg6cDS7Ucus5GvZyyZnDpMF514ppLYRRGpeMvXnmdVpz9AnNWwqwC1c4BzQLgW2bMgj8LwcgKpEsC",
  "key17": "2yBcRWCHVgiSUPPDoVJAuun4j9sKS8nTp3zbtNUNrHghWiZfHj4kB94TjWLo1xcX5PwBhQAk5EvehP1RNMkq4K9A",
  "key18": "2N3zLR9Ymqx42xq8kvCbQbQz5LMzjZ2Xt7C3jfkWrn6bdNgedY111g574bQDPJUv1bF5PRLathDRB4PJ3irtDkeG",
  "key19": "2KNmWxgiu375CzbX7cW6ArsSDdG63HkhEYVHAh6hTPsxju7Q9aSiNoV9b28Tx99Ye2WWFXciZEWwzt68iPMfsqK4",
  "key20": "5AbDZ7UeDr2GcwnV433UDA7NxbqVejTPcgLJiW3QjaqAhCZ2US1GpXqJDvRSd2dziW1HgviWtvidwPpagYqX7qSm",
  "key21": "2iLm3Wh92Es8q97hCf59AFjaLCYqUjYXdmSp9XbPnxXRFM4iK41DP74rmwEUvsdvTSFffkYZdeM5azmTnM7BZsRE",
  "key22": "281uCHxb6kofMYCk9ppvFeDoXeJPVzQNQDKM1Hesa5hyCxdggoT4FLWJNmKCxWYGkHEQs1bbMZVFi2g4yK3in77B",
  "key23": "RVg3P2f1y4XdyriN8wMozKbNs338r4grsxNobJd8FoFpu4UTtLEQKng5bVQ5oHbVjbwwHK7jPMmhP7B6yLk82uB",
  "key24": "44iZXPaH31EJLtZ2HAuZnz5G3Aexuzxbpbt9Gzp452iYJjDtP8YMvU1iaAi6vJc19pRiusGNVmmxrZNwdwDvAZiY",
  "key25": "2aaArAakQwxMqg1d4zxb15LY9YvyG1E62e2TjckaghL7nWRNfsrGD7mN8oQJxfvDBdK4uQpxtmCvP8H9NAjgCm9p",
  "key26": "5KwvNNw4mhSZGNg2Dc7SFVqreDsVjT6RyiNnoMF28FvUb9Vd9ZPwePBpQuf3jKAi59baZPLxGAbAAKhfj29n5AhN",
  "key27": "ySQf5yyhXuVPr2GcNbWzJKfggsUYFz3M8SG4Qi53jfrWK8pk944i6qNSuDwyt7hpngyrAZNSzy4r9m9YHPucjSQ",
  "key28": "9Rmdsd3jHPgcuEqBRaC2nvwg7ixiCKkvrwvPA1sgawx31amGuLhq64Tpnmr3p1pdnAgon668xg1h3kd6HDbixn3",
  "key29": "3bEdzg6gzojNQkju6kJYtd6NEuGkBACo2oMQtaPm6iDgrGXeEVwVbj5PAYZ1zzMXYWHVaZ5h218ShLge214LoviP",
  "key30": "4CfCiwjSG82vGJrcYcET2XCr9LEVaFZmF8AoZkbJxo3iNGHHzQfGMbgurKqsCvw8v7JEB5FkZPbT4Ngjd8wSNbNG",
  "key31": "4okdGdC7RbaPrdftbuTfmesK3tNpwm3Gaq1wd4BaEsGTpXjUGywAsYx7zxKKoM7vifkD6bPD6YbpPCsXveS5p7Gy"
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
