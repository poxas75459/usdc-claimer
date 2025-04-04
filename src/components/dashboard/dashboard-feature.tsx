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
    "5QZsi8QMDwMyPT34PH863jfvMR7cizcBje9mNuH2FeqtVFxxwxepELvMzrYZGuFodjEZSQ6ApqJ59vxBu4kTWXHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19dgqpt67Wh3kMqzADxjk6qihAZsyghpigF42zQeDBQM1K1iUXGCAb1i8sbDJ4YGWXVQcZwXtGXPDzZgynD6Tyh",
  "key1": "2tuR9VCo4T95omscH9C1aPEY4dU67yHDWM5ubA3Jbdm9updnd1mc37xREMdK8a5GDsYQq7dTBWtAsoGnyU3Bf7Cf",
  "key2": "5nayQSgfeL9wozu7sy2ngzi21N7W2cNjZ3B5pifDnfiJCBqXYBAp3AQj9Ef616QFtYfVmzvkyhEDwHRqGdxxgGjy",
  "key3": "3MqLAuV2uXUTAi5J9REhNawALHcjEA8fxrN6oPJGC3cA3uofHfu6uYKJCG3Lz4vW7RH6n7xeKDjMDtP662yj44vS",
  "key4": "4U96gYQrhkLeBQjEYSPzbzZ8oDbkpSRBro3MDP2A4hk2wVfEsPHGs9WzT5ETAXJm2MygEb9xy3oc3v7bhYP2T5xe",
  "key5": "BwXUbwbXdgn7H1deTvkgsa48ihFP5RJbvnkNmhFAVdSrVirzXkJ2Mu937yuLYRVAkz69QbDBxd4i1ojXfwJTN4d",
  "key6": "2GGVRyavp8AmoJQEwtbzUK9Ne1CWA13hoRx3C5sUw1wyRgYFYadzr272hjkRk9F5d1DbxHunKSpDTaya2r1hCyWo",
  "key7": "2ubqZJen4pMPQub65nytM71CQEsmes8JR2S1XDzj98vcWwnMh1KrT8aB555zQYHoTBwjUCxnKK7bKfrFVi2nbshH",
  "key8": "3BBebLAt2bkBJCFBS5ZQaBeXkWd3fX9tbdUvWvbSShg3eNjUEKHi1cJUcgoTJmNSoLixZbGKzz4zR21dhi1ZB7eh",
  "key9": "5gMJ5q3Pu7fzxCaAiRe8SELqX5xC6ReNQSBwS2taniLiniPUtdkmgk3VBqia67TJaLb8KPasctgXxPvLHfKY3uU4",
  "key10": "pZrTxbEdMzZZ3Fnso76xUpCYJT1sY9NuZYE9ZoUJbs6LQvTNKy9bpAqofy945LXNBKgqejeH3ehjvxFrDFQs1XD",
  "key11": "2GuWysoAvu7C4poMMnn5MJbUJLPm99TC2NrxpPyBhVwx46S1cGLNyt6ZbzUypszYcy7FGYbaviVTPCRfa7UdUdrN",
  "key12": "aXMKxXxsTS4g3JfEt71cqgSPvmUVFQX6GCcSPZM8k3JdmgDfCqU6u9tobGDJo2ktP54M5fxtsT98Yaya7MmkZgt",
  "key13": "54Sz5kcjceTSkGbENi1UshTcYCyEW7KRH8oS8Ha35EnxvMwNdFXx4YJx4Qp2w4X5yTEZgeav3ZHJaSWdinM3F93v",
  "key14": "5zVZE3tyGLoCAJdi4GJ5kqD5a3GHm4WgFvR43fymAvMF2usuc7KRfkRh45juZagrzDi4nPJjeqXyEmsC2hs9YT6R",
  "key15": "5PcY8Vbx3SEc7WXBnLv5VLopXo9SE3MzgPyfCXYRL23GiQEbyfeJ6vwniKgsvLGeF6QTo9YgNnWNJBrTcqeCyrL5",
  "key16": "5AcPaNMZkyj6yysKFvi9M3eH5Nn14LQt5jtXHPTey9PRkSPPD1Q7QATdmtwNYYW6xZYy718gexoR35svxGu5Tvvq",
  "key17": "2aLQ66Z3q6cR1rVHBeguarzrAGP4LVq4SUzYM77VW5FARpGdaQsXWnLNsMe8qgMwHE9vJ1RLqUvCVfGnybT6vyxW",
  "key18": "24bAYDreAxwhVz9ntqpFtMwQJLSM6CB5m1hkKkuKykG52ywUdhtrheKX3UumwdPSFJgSGhATNcKm4fH11i6WTEfC",
  "key19": "UbrmNPj7qqPz2yLSRRpDkGkKB1ryMedXjKyNXMHLw4PuCjyCmNCHcjwfQezPEvonTrWC7e8crK34J3yhPDZq4YS",
  "key20": "3Y4WQkL5ra71Ea9CapmwfymsAqWsiTv4ugTcosvqEaUaYdguFd67ZZcccpgxWXV1YZpKeA6Xn2mAmYcmWrrMztLH",
  "key21": "2H4fD4dLq7Di1qG3xbPJmJ1EUDyhC8dGmA93n5J6cS6LRZ9hxrVR7hYi16Dqq1AkjQ7QGU963MD3XjYtp6ZDhH9y",
  "key22": "5uh4EWEwcA9ixnBUTu9VYqAkLLF5ySjWTRJewUXKBj5aLBn5F9VKHqMh4opmZV8NNzLAc2q7ASKHU8Cu9j5xiCpu",
  "key23": "5UeWMhDz3fXuiHUMChCCZLrns1LCHqmoQxX8RFReMfrVdEDTiCT67MahYVWT2E27eytLwvz8oAhZmEaL7h7a2wJv",
  "key24": "65fiZ4LSkPJRcBwD8d9dHRmtvBAvXTXNudBZ5KPjfxBd1ByJLSkvwxEHmUC2Eh4T7LfcPbmK6DnnzbGUyb4s75o5",
  "key25": "5eVUgvMfCYsvLTqR5gmfBshEsBQ8gPa2M2F8yABBU9YYi8TyHCtmGJJWGN39SproC2qkWME2QS6MDxhe6hohAbVo",
  "key26": "YNcJEFJw7LfCXFH33kU61qchmqJSPZMAa9Yy4UN1BmKm8oM41suhZ3KwGMEAVur59VywJLgHn4S2TrSCcgJNSi5",
  "key27": "2WxeQu6nZu1WjduZXDaFWGejepjHEaGjRY1WU5xb477VyEbZqg49QvQ92bjBGbpi3YuB5P2aWs6Mg1r2zhwihKmR",
  "key28": "5a5SoFYehY2GcDCDPVEiizrXyY13RE6sh93KnPEmdER78JCDtbEwBKcGpAsC12d5rhEvYVjaPjLPT8tFaPkPUnhp"
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
