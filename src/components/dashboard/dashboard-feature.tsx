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
    "29nFLeYzSh1DnWuXyGVeZkNqiN9SsHut3dmn7Nw7yMh346U5G22ezLngUdtcf7asFYAwmD9DBaTJ834XgVHMzz8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZnZTK65KGaJSBsG3SM6pe1QTLR2vVeUdczEKfvSkPeMiqFJcBVcKFFgqLvRJ3P1RzysbZxmjwYtx4A7Y11aeve",
  "key1": "28pvdVDdXN3aDPypJEtb8TPr8Qsye7wEvvTqzNzYdp5TDZu4pRza5QT2xbRHzq7yqxkw7eHFNngppjMeufDnN6vi",
  "key2": "3wP4eRtjtaGkdJM1kQhaMDvyCMbuXDeeJgB1uv1RxaKmDFLs872Vkx5S9SBn2NQCzK7tukfGBuduSaJBFT47vmS1",
  "key3": "3FafdqmbVC1J44SqFu79NhBiLW2eFZJ2VaMjTE5CKggBEaJgH9nufLSxmN2mW3E8nnU5xHcivaFaGk1k4rpMWWPg",
  "key4": "3QnjGtMYLRuVeDzg4gSemPtjR9ZKdEQA6CACwvQupsaHrBAw1TzJDjnit1JMxH9DBxfBZfzmT3AMNRDCdPaWPpfD",
  "key5": "gTmywD2fsCUVaV5a5aKpmjLYtbeMHNvp83cdVWgMP4XGvAvfySVKVBhzR9hMLhqBYmmPSw1GWBM2cH8umbZWtjh",
  "key6": "2XGTXm9qmeTjL3XjCPYbLr1pvHkABbTb7LMiNkyDxcg17Pv3NtPfZLR7PeRSFNzfs1GuaXQqEth31P6dwgHiYgz3",
  "key7": "4zYDKkEWvSBMb8NLxWcYR6XmCwQor8CMmNhWnec5ngEZckXWNn7XygVkwHc8sUV1g1f5YdKw6BHeiTueRHtCBX4J",
  "key8": "5AbBUBfiSweyXkxrftQjCiMNt3o5LQZsSMr7gSK5rYwDLrVs9VdYonkgjCN5BegAMrogzkFewA8QdyAaERWW3CG9",
  "key9": "K6BJmSYm3noTkxdhCSE5ZyRwjjgWrhbshS3S1CgbeuhAwXNrNNbi2KESJQitZQtndHCDqMLgtU4tCLE8iaXd4qm",
  "key10": "2kZLtCCSNESZTeACBoZXSrVGSRmABSE5yWHPY1iUAppikYN7B4Th6fCaxGBX4kq2LpWFbAYCLN7akCYh4SciyYq9",
  "key11": "4pHszk2wvR2erBpvuQm8CpwGBVydu4Dy2GGPGmzL4Ji61qBXXhyS8Fab1ATDz2fVzQvX59DjhN6uWUShdrAqDY79",
  "key12": "4ZKh6mC2ZEzXxRXVUEuARt3mV4qxAzgH6p1SwxJ9T7KDXeNJmtS1tpUZGr3d355ugjt2Vo3rogUmTAqEXRTmbf9V",
  "key13": "v6mUn5Tccq8Ssfma55buPncr5JVN1tpQ3V1GQTv4FdbNBCjejP4auieorQGWLpDc8oskLgT3YkzDko1wm3Ns6PS",
  "key14": "61LPjBAhtqXYbQ8K3SK5nHK2e5aorQ6Nfy8o7oS9Kg3CNaTyzcrUFDTf63CcXDtr33boJxCLF6MFHJH7Zoy8rxr6",
  "key15": "59KBV5dhx1v4Gun2GstUt4SxhWCaxwCwCW7uCoN9yTqgcFNFhqUtByTYXBoBsX7d6bpnJAz8ZRJiRV9oenTsZDVo",
  "key16": "3793kSUWhyiMhYHeGHLUgwJMfHeuQVAij6TxA6dVWg1mbediNMe5x7tSS9cmEhnpoMPBrDnTadELCwkjbFQdDAKd",
  "key17": "29VtVme9PMwF7JV4EA56ryh5XRJWLjtVBrhBTbJK1eiZ8xdnBCWRuEffB4Qx8E1G8avfP8bKPefe4iDC3GwgmE4y",
  "key18": "5p7jN4N8HAcz5TFsj4V8UWzBzsv4FEqas3wA98fAdAFs7k8GJc2pEtCDVqGtBYb1Dge2dRiYht9U3xqsiKy9y2NC",
  "key19": "2Ks7wF2x7KdWsU8gCTgPRvkrEb7wL3yzLJVhuCTTYnW2cEfaZmhr6nMW11cVppk3c7fJHjhNQxTpFVzPtiPvbACU",
  "key20": "2NdrHqa6D1gytkvzSyCtssow44Bn3tZngP4jiLnevPB7Ki6MrRtJegsRn35zyC61Sk7YLHJ9QnyDJ6HAj1vMzAjJ",
  "key21": "3sLuiMkw3vSCrmVzwLHZttCE2ZhoeKSTB1anZyPLcRqwzgUCvnTeE8SMd3E8MGfBu4m3gMerCRiUeK8GdGefKcC1",
  "key22": "EqSrXvrMNfUS4eYhaJ7LubdTuADVaVrsakWTjWhKrfHnVqvRpn6Bu14gG3ASzU29RBZUXgxceubymFynsjEx2HZ",
  "key23": "jZWA5BFGx6frpRrYCCoPn2ASyoTvbDjGfeca75bSAMuN9JJDT4nG6tqjWKfZAxEAjTA8pzccbWi2kbV4vmnNxTS",
  "key24": "34wn2Xo29d7yjm9VhKVQxbNFAcJFnzqDJ8XsJBLge1qJThYNsRnZiMZytVSCqEk84oqndqKk8A8DAgjfyHo7VUJv",
  "key25": "33MPeg2FbsEhbbuWykGtLbrHWy5FbU4cGTukMPar8bYXrg7Z5JytebDy6SMwfxZhvQab5hWvphXMaCDuYebXRHGL",
  "key26": "erDxRL6avjcWDtktCRKLzrHfJHhocpm37L8WzcBM32djTTZtNWSZWZ1qRdAfmfCw2fR9YFXhDqikRGzLUQsNgRJ",
  "key27": "oigHWjGgPkz7ZtT917bFviz4e9offZpRVRcC7DSBS6TzieXT73vm3jMKs2crfEdZnfWbdrrq7Jaby2tcj6JBoWi",
  "key28": "4TRseTysKNY9N9dyR6es7qRjmCHVW86YhgXZ5717igqVudQcz37jHidojMhJRagCY75bNwqPNSpoHtzaqrTWe13B",
  "key29": "5RGXxnbexvSQgefQLjoPp5kSzbjnToXaoP9omZC5nQTongntnvfkfRoZ8fACoF5pYyw7RZ7KLp3265gyKyK6r5JR",
  "key30": "477ngvn7psPpy1RTwKNuYKdak98nLptvAi4S9QTU2UmLZdCCQkzxLwnxPtAFq4GHWYMJ45Qzkv7uLBWyEZT9A8c8",
  "key31": "3gtLUt32vT8cdmUoRLjquvGPcejtYEJS75crywL6hx8NdwBBEhcA88GhJZBMsfuKUgr6xyfFwoVLSXeEoQvgwLCB",
  "key32": "C3z315LQYXEvzwvjgfYktuUF7yL7BKiWMKAEyu1js2yCneuwvPHb4s17xvaCfKcHRmHLtjzxK9xNLYYCV6AuHmL",
  "key33": "2gv2vWRtUjazVgcavUPVjC9XrCe2M3oe3G6cRYzX7ZeH4Nr3k1oseXraQGMdBB9Q5LUUo93tDJxA2imMKKfBTWea",
  "key34": "2VsMvBB9XPLpndZTM7EpjTE6hwBduoS1sXfrxbLg81RkGjM4rPxGsAd6fUDfcRUqciMsRBvKE1v9txmYSy8g8zBA",
  "key35": "3B5CuuyFC1YK4DdTjzV16HuLK3MNPMoo7sjCcAUtnmfqTeQ1851msRh7JX5DgUXA7xkWa42CBi1UP7s2jVZ5caZL",
  "key36": "5oUxoqbrZRMqnTyQzBCRVpPG6jmoqrrb6uKYJ9JKf2N3Tp2sqdeEz39CsKmdtSDamriX7smS9Vh8pdyCft5pysTu",
  "key37": "tBWzfHEgcSDD4C61fFFaY4cDSVV7PzD9BbVoGVRew1EUcNvW1LRrWi8TJZTBGFvKnpkF2ECTu2FH2SURDniWwQn",
  "key38": "2QBQriWgHjMxQyCvSr6uNN6QsEavNqGioMr4J8se5kpLHzPALqwCKzZdHsYxmgfDSCXdaAdTJPBJqhS3D97M9eKv",
  "key39": "366MAYb3wwnDpwZXBotUghdHCihg1SdCfrz2XjB3BsfH69DxWUnTRofSs4WESAAZJZNzuYUK34BzDW8o4WPgkkJv",
  "key40": "QtfbPuS1xWdY7FML5iCxz5zDX7k89pW6i6RVxNUaLvRQHE2D6bs9Fk535rAcQMZjST79TFTGLQT2HQv5vgn8QvR",
  "key41": "5T1UpyJ5sV9BzL9Yit7Myd9ky5Baj6VRvszMDCNmt7AEyiqFxTMdgUzaM8UGQceq1i9f37VWyybgPoozKiTh3X62",
  "key42": "5Ron57oZHJ5ByZWP9KVkuDtp5YKCePJi8ueAeTSYjKiu3kJRYHBhFr89dK2w8DeSrUZ19PMvvnEEWTp1vhmYGhb4",
  "key43": "5UMTutMRFRJNmHyuQy4o8SexjJHrC4gVqQoKV3UNKs1fNSXggQTjhC8MVMEqDKFwwsvfLGF12c4JKSGhYkQYVBKu",
  "key44": "42nqwNvHW2JQhdmXiYgLh7PCR2CocejAmAcYgXQxMpRwrSNbR9dXuKY3kvaZkn7jbuZiH39EBTVRLw75W1Q4oqLX",
  "key45": "3eS4EXycUokap2EV72gWQ4dP4N9T4cboK6aHewTFDbReck2TStwaus93Ch3ayoJC33unwH9KeKcC9hFksDhacovm"
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
