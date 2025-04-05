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
    "3fA9uFufhaKWoZk1v5uSFZJsmFkdAcw4fz414GX9Cj4RA5yzY1JAeeU4mZNgTWKeLDLVJW2Z6hhfXgW8VJ2SL3Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XRA72rGpVEPDxXmwA5wRLkD5u42qT85UzhPdvrovckpkkbJGZkjdTaTu4FdSdDKvaTb8YRQH6CykUYmHKQSwk96",
  "key1": "4BQcPRVFZcxhctUW92T8ndP89YtL8HCvc8WSwy34rvb2y3nVeQ5nbrar6XX2P4Euqu8KWcB6U9CjkC6oNQUPgbPm",
  "key2": "4hn6DNsWTzeCWtcPCKSnCn72pxZWdQxA82F82BPCSe2zPpotnoX7nv2mpNCtZiH65iYN62MNA4cbQzLxvb1TiXVY",
  "key3": "G42jCAoUxPpndGTJn2Btfd6fMaHGJG296H4MvnTKUVkzF9vCCR4p7mxFYiiLkTL7nLS3cNZ21CcvZ9xBTASgfxT",
  "key4": "2wi74gDjHyWwoMZe9RJEXr6F2DcmVvqB6J6hA6Rq1qQszwbpfGjt2VJBWtUBquV5k1qBcaaYLp8AqXwXKAdDqvYj",
  "key5": "3UvGAdRv2TbPi8gtaVmWiU51BWoJ7P7hWvk1L2hWtuTna9rc3UE2DAvCSL5niKpyiKPa5yvCPeFoBwsmgng3HiNe",
  "key6": "HebNqiWLKzoUnbG9pygt1Ww5FsjGv6pwCSouWEfm3zCTjJ1vGo9FrfjwarutdSbj7va5QHCHmWXeb2Y8jimzYHw",
  "key7": "rLaR1hdcBoWh4f7BD44FsnWYjtB8f83kBNr1aF3PqPyecUkw3MEqHvKPxzxP52wAXhMfXdebtmejv62UYxEuFNk",
  "key8": "4hh486EFmjnHqcibBhdpJBX31fcHrgsh6hs76t2LGCuQ9suGzpvN8PkcuCBdycr5RC3nsQBbC4JUTrJwgXQE62A8",
  "key9": "4NC3vUUz2aTELjpCuCsZGRVG1cfKXUQEJr2a24E5DtsDEnfQxQdKMUBoh4zRcPV2W6YpCKygZv2vfgLD31Dq4oPb",
  "key10": "2G7uPqYTC3XuBRTWPpMYL13t6EHJTCb8uSWbrfErHzxACA7pyqforCxBNHoso8ZJ2NpEXgavJEr8wyxBk8zRkjha",
  "key11": "5GqaA2BdYdf6y8hBqqLFRK4MfLZZyQiDvxNevwVEMov5NPQ5iQRHx7CjPAMtb1GVQgDrFptL7mv4STi3ZvECJ7aJ",
  "key12": "5Br6a22AyJ6JubYYKU9iPXeVpwefaUbZ2XDbhcXujv2z9DJg8qY4KXUFY8RsT4ZPkmgHi5RvRxzPtDTdaSxa6yNs",
  "key13": "54b6m3bpUBYfj72JCcjETT4QeCvrEnTAoHMRXPRsZc1j4pAsJouKcRxZL6kdBbZ6Wy96YNT1t3PnrDEqdcjVMyz2",
  "key14": "3PwSZpRHAGpVjGjgg1MmPBnXVD188Pw7jrj8WX3vH5vRmozZs9qtEVuUyLp4wZCTu6mgDvQ6Y7ywXKrop6optScs",
  "key15": "5pbeMy46gmnLPvLmVVijURgNEpREdYqGtCYPRWJrUrzyhtLCyM3Cxm4tTpWAKdEzfp2yu1iKo7SW8bmoxymZ6GMS",
  "key16": "3fbjeubBo9HWqwXJMZ1kbaH8MWjjsCnN8wNStNVbjNQBgfNJnXpTco4HiVYgrhvAVKbm3XByFHVCioaNuqkXTDwz",
  "key17": "2Ca4Q1QdPeha7YSaMoqg67bCgk9PqwiNUjwBVbrx3K21XRCfVReW94cZWtcgYeg8Jv3VhYrgVsFpL19sh5o6k5Ut",
  "key18": "52VjtaoSfPq2pPqie7eNSq8UB1RiZ98RJUNgRu3Frm6YmoPptj5BbAptP8C4CxMhsVDNvL543edBeNHCTHphvK8o",
  "key19": "2RWonz5svgT2qhNeqyTmPntWSPS5rGHsJPATqMsEVFfzBex5wMmnxFUwUAtXMcjUSVUzTSEgqzprTC3fG14SoGML",
  "key20": "2gYpGVeyVRME5jfiwfRXttoxkai4js7RRGG7zcemguAbhvzuDYivNzmhovYUeeVqEPTiTRJwE4XYn1m7XvZtM8kq",
  "key21": "4owo1yJVNE6PZBtvg6ggtWazPx8d9cHDtDfcaJFsQySR2RpYPkKTHvaPynmgTm1ipfKZCjdB6KX3YqHYM2KFqH1x",
  "key22": "3AQ4eJmPVBGxB67QS8ueBXGmbMx1iwXPr1xp3e7EHuLXApva6ZSLge6JurjsMQJMJzGrob3BbHTAtCZ1VZaSe2xi",
  "key23": "5g1dqU8A9oWLzstYzgPn3vgBSKUZGXKKMtH1tADq2HWb6gv34uPFcN4prL164CxxsxmBprLn9UJmme9apMXGwNC6",
  "key24": "5gdd9YsQDMk4YJ1AnDBrBXS5UEwKXytPCHdnDAtNWRe5BBEZuybcUHZtgX4Zj6m99i6Pui4ZpvmyJmyMMBGyfdj3",
  "key25": "4Mh5BQutT3xBBpRLtd7f5oJc4NjbGMmc53zsmDbbVLqpWcAuYgkuB1r2hsnqyS1amGqY6c66HqHxpmet7LrsAf7x",
  "key26": "4R33j4pg9LB6t1EQwfDPshRfLV1HsuV8LeuGqDdWV3pGHWJySJNndTKAf8xWBuHKgCWCBCFHykgvdzFvtr2MgNU9",
  "key27": "4e6LHa8pMprcE6JS6HFA2Zf4MEvtnZ7u9VkCuqt1MRQR8P5ArcUMsswvNc616trEEFzZHVYH3y3PtAbjKEgbTRC1",
  "key28": "7zM7y4dwBQbv7vw4eGniUP3djnUJ37nbdjk9zokzdt1VHW6vko86Nyya195N9xMkt181wafLzh5pkqJniSKnQmF",
  "key29": "4CCEoniP1QDsBTBVo27enyULXJvPt1tVwghpf3iQoFEWGLfktjXNB2s8AYmDZxKhh9JndKLWUQ1ZCzgSsrdpgct",
  "key30": "5FLK2v4jrHn65ikgrjay8vEmiehD4zBb4LM83Q8BPLoSRsHuKaPkzhNJeQEi4a8xjrmSoKtNQZKE1wnadDmmR8Bp",
  "key31": "4yp4WSJ95zTY26vZ31GyzmnH5f2saE3G2xnjY1BznM12aSwaHjDH2nUKUcBVboGU4VtfXVg3bvfxW6ukf8BpN6Fn",
  "key32": "4u7fQbbpng6KnMB2krLPHUbaN7RFqBuhQxkSScMXHtUcSnUu1dcMSHptJb5YUNPGXbAX54zVxgLv75aX7LR84oHe",
  "key33": "37psunUvoXYzBMKcDvYux57D92D8cnk36MhaAGH9vc4hwzXfnUwuU8Mne5kAc1cGsoJkhpV3iAVeZTdBAKGwUaXt",
  "key34": "3wFPrUwTWfPCAiooYd6dMW2i2dJA3TiJzKPis3V8LrMMzt7rzZofwJVDwFzG1tTQrW7i5xNKKY1iKNuoypp9twFY",
  "key35": "3x1LpjryYKTFH57USmTyGhXRKoySEhAN6u6s5xREq4jem9fisnQsYzRBCysLGJb5AuZepMaDmgrVBwjv9V65E3Hz",
  "key36": "38DkyqVj1U1s43ScEfYU6wrRnRXruJPx69YXfNJDe5omcvuLJbD6kVDFhrC1yP1uyYiVTtq3Wb3xZw6drCEeKM8d",
  "key37": "3jeV4GZRL8viaTjb7C3JU32D5YQMf8SBbxDGFMnv3yZNjz7JgBDJe14iMQr5EZt9UgoSHbnQ3UrkPD1UhNWVe1YH",
  "key38": "WczmiHyZTVEEHcDhG7rKLCHTybYsJ2oMGXNsd7wtavPgVcjTyE2fGaHSpj3Ev6NyV8EeByNeADQzx1ZBHrUi5y1",
  "key39": "4NWutqhP9RMQMiFTarnLJQhkSJfcrwUxgbviGfqeREorXP5u9Da3zHhwjrbBCj7bp5YdkjwjKBFDnH3zuNUVUMHc",
  "key40": "4X5BaUu62Fu5jcLNJPsXXAxpckhKMKZ9YZJK22CeFqFa3DdfsTxsj6wuJCUmNEpYxU5uS5xRqq5yP14cE3VAriL",
  "key41": "3WMpaqe9eBbFakZwDwrspVCPzFBsnQhu5xt5N71m4sNCTLW41tyL5GFSSBXyYb2kzvDvugdgUE1Tna1vcRDhgisA",
  "key42": "2hTnyCmEe6WtEfqU4Tnayrtg3nPprcerzVxd4KeM6B7fU5A9X5HvCSyBHNE371RLyPhxWPPy51tVQVsJju69upCw",
  "key43": "bzrutSSUbgJ3m5JoZLQfidiEPLuZhLqVYYobHcPJ5mfSxra9B83gT5LT37TrmgHr72XNb8T9yWLd9nzXcDcmSHG",
  "key44": "5fWNYjAGA5YFjYkZ4uWaRP12menB8kgBuReJgVdnq5A2P1MBMtAuLnzU2aj4LcNEdKxmSAtCbTdiRDPxMnNYzZzg",
  "key45": "4jpYcNDNRU1BK9QpPoAiBuFt5BVGCRW1eU9aWHwARWJFJaBtwXx4qYGCQUrswpkwNHLftKE19WM8QPjTPgRMcq5Y"
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
