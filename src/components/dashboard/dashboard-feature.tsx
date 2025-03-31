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
    "5hz5sTEZKvWBDhbxKy2eEiBbC2tRTcuXdseAu2qC1G3CaLbz2i4tcNxK7v4m2mzum9ya6sBFdRw13FBug4yHpqnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LAHn5h2jjuMkDvDWeDYVXmcL4t5168DR1EUxXBt4Wb25XSjSUPY9dfkHfJXBryxXbHL3RoUU2j3LAy6DYv9J1ca",
  "key1": "57CRmiX57vGnDexdbrTxJkmSwgUjmWQ3dq5tUc3khGB5pJUA2wGvhqvKoKL7aftNgcjaoNxhyihWpiSyBnUnLnFT",
  "key2": "3G9nfcszEZi2MZTyfzkbLQDRxb8C28HWbC3Z5GcoudqAhTANT3CsWY6Me1HcC34vN8WJLKcAXVFotkTwqvuuHYRh",
  "key3": "4GoPLqgwBgpAr1N2jgmYb7XbsAbzCbuEakzF3W4382kNFCghyMeSmnJcpLZ3W32Rq36CsVTuFCbUHLNYnsnhCUyA",
  "key4": "59MrKki9pJ3hjnJeuRcGFMcZfzbgvcPwdeoefyA2p6Ra86R7VeFhwKCdNigypJjhDvHypwfEX3uA2KYLwhA5dsCL",
  "key5": "34N28vZXQ5oxca1Gq9FRAoFvNSA9X3cm9vd7XakijJdVoVJnoenPwyNwpbCQ97DpZdy2s3osVHWHE4QQRkKhaHTb",
  "key6": "q9bGyaJob33am8X5GLmb86kKUGYiSDgcr2tPhz1XZ9pR7JJQeDNW7PcnRZotnQNpo38qv3oou3vwcsejR9FJC4g",
  "key7": "5FHZqzsRFQdKYKU5sd6JCw7ChXTL54NEr1AMmYuXbFQw1M9oV58zMXRtADdK9bemBGBv4TPyLyPw42SFRFF36sxq",
  "key8": "VyFRnPto1jT3Z6sbGXuGJ3dnrhaxjkociXkoiEGrEY3EnXWSJbstsCbqh5wpFwcLVygAZd6JLA58CAMFyqRGSjw",
  "key9": "3aENt6VxdU5rLVeaRB7hwVb7MjhciRTHbxUBvXTa98nNSLM1PeeGFxbETzDLpDVbdQg2ujXGYR6qBwEuanizJUqm",
  "key10": "cxvRkySige9hy7CNtdg1xTHXn7eBo9C7sDo4N3Z2ndYLy5nRVs6qa9GTJTky6jXBJTDzWgCfNnP5bkcSkuZPjxY",
  "key11": "2h7MRsDwWEvn43ru8joh7BDwVAWte63DQsKWbBij179U9BpCXAXthPSpRqEGUNknf38LPHvCo94AVDWqE4Lcd4fi",
  "key12": "eCM9Xiuhiu8uobqD4FJRozHgLyPeqC3viQTLkovtz64Xy1mEyFVenC994uwRURhAEBd4WX4rke4sP5pqc7mRUEe",
  "key13": "5yQTCR7DBVKqiwuFV5tbvwik56pCQMYpgBz2GdkuYkUGxMdcyS2gy4tkHfxfgHMgyyeGwXzFZRWWYs85LQXkRChz",
  "key14": "4zt4eaxT4ras4pM6D7CE88Fq5x5cLe4HgBbiuzZDPhHmVc1f7cmx21BSM1ngoEEoyZH5UA8XGaJieC5L5iQ5skU1",
  "key15": "9wSsUvtcKny4Rx3Z1MiQm1pYqWqCxuKqDtb2wW3Hsye2HMVPLZhdkxykyK58pspeewZL9EM9edRKgmwSnfuq7cY",
  "key16": "gW3uVmWD3vKd5rWNMXuAobq3Zsxuxs6rmTPEsCzEKkFZRVXd8x2bFa5H3XRFxqYXtNoJYfNr6xhDpdrQiD5iJFo",
  "key17": "3EaW84oYzMQASQDQsAb3mTTouC1LBCYVJDf6RV7wF2hkgJRHswkSKUVD7su49VNkB1LahKhvt4UGKd67zgvBAFRS",
  "key18": "3NFxi1fy6CwRDdj9BfEgD6wNDZyvszfsweQZ7GGmH34H6C2QDkojjeQ8L18rf3vF6JCqA6iZf2ksfJEAx5ZeYQ5c",
  "key19": "4nyMnwq88MZKJVtZaV4qmDT1aSramzs6Sdgc4GwzScCVSTBfNN1LaTdoAHogWEP3cKYHyFEFi7rDS1LgZ6qbJvZ5",
  "key20": "nnAtowjPbziMiVJod9ggVJUmMx1SrJP7GjFnEK5jFRCcK41huLLdkv2T9Cw6K7dWANKhehKokPP7uwerWjgkTfZ",
  "key21": "4i7km1VboqzmykqaS76KgZbQTFixWZ8LVZxiQhCV7UkMm7s9zDNndFfVqv56u9Brb9KaQPM8bJVJQdKkYCHRJMFJ",
  "key22": "3agnUYYb7k2e6ewQmTi3CQ3hRD27PYZEzZUMctq1X4W4xP5sK3Emr8uouVY7t753foTerWJHejg2UdJa4TLKwtbk",
  "key23": "4tLskYa1Am51EAje567iP6v9MSNfLN7A5whHBA1s9AkfZWhxkdzyPwiZqxE2uhiTosohKsQnRiRg7hSNrSTQycB7",
  "key24": "65g83VFejKoKzgDhsPkFK4srfKDEzT27HsRx7bkaE8fGPSaVmxV2FM1nFXBWJEJS72AK7oskCYcSXytpExenry2E",
  "key25": "2EAmfoiQt9RDxAFa2JUnsm43UMt7uSPo2KWGtdAcGUEevR6nGWGuhNHYhPgvGaCysdXzPkHqywyocjw9HJjFzjjn",
  "key26": "4xWpkPVcEM9iBSfE1PGNBEKiq1jr8awiePmEqcZ6A3r4k4mtm6x8Tsa3eZKdUhnLUjRusqzsuwRmCmiTtGBVjqyR",
  "key27": "ScJzFCKb7SZkScxBMEGM62DqaBo67idtAtvrCrb8g9MXGjsJZkMeVe9ZK5G9HTLhhxjg36iqUDVWkAuN8NtDqnk",
  "key28": "4CWQA3PVMWyZUgJmtLUchA54Z4yLpsU5mfAWSPsJhSMpPs64cYDTZ9b8G8omeV4ggm9vq2YboEPAFR5goiDHky4n",
  "key29": "3DBFAQxM1zQXDZEuErB64TpSnTzE2bMPbeMeaHjLBpZfPi8jrtNvuJcMkC8c5SDVM34WjDk9uFbaV6S8rpTJ1ZwJ",
  "key30": "56TWmuovNVSC2KxWfKM1YKjJ4UaiQwtAncoigDhkH1dDu4RK9a1Ze8idHmuR7pBRwTHnWCNyAmt63Qtf34p1tF2V"
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
