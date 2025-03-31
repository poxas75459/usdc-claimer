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
    "4KJ8cgoyUbu5pnjyiEypuK5iPsBf1N5JtnBik7YfgGWMruFJekr1tJ1WYRY2n6QxAMi22TtUbwKigP5mJpWm6tAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EeXuE3gw25uGXBT5jdrwJFgDAWb5L1jBFPvb9YFuC77VP2SwKFDj2g5q4oPMgooaSS6ozyWzHgb94X1kaX4ZUq4",
  "key1": "56SMLZn5ZrgGSRZizkTkmg7xorDWvWy1DMnzFoxkWPEuUB5pNZTQRKsdekzcFQThQF3xyPhPNB2wiE85oiMzTwsp",
  "key2": "22MFmP5J4y31YtQEb5HpXLuFgvjMgzuAGhWCBQ58mmYpdhjRaByosiZQUV8snNWAEXc9VrvKe58W7RomqrGcfdQ8",
  "key3": "ncCANbs1YHJTiaatXauzqcefQ7dKPqAx7rJ4YTsFeDfBkXSr5RTARe31VYtncTEJKn8YH8ZshaXtXfmdZGAbESG",
  "key4": "bGrf2S1k1YqbfyjMeRTC7so6zu8ksK1gL7BKoAoGiKYBrpB6q1sHi3Xqeu7J2H9cDKZ3tSDwfcZV5GPDaJi2aPK",
  "key5": "5T22kPXFx8s1Xpewnwkk5GT9jSCoaVaeXjC827ErhPpqmdqa1fBjrxUXhMXyhVQZ5kpPAcihUcAMz3k1p8Nhzf8o",
  "key6": "3QfcDxVexR2NvGiyMTjDikZWLWFssTNom9Yjeo2xyhhMaGMjWFouYp4o6BEvo5EEo2oaFkpQwh23QsWSqbE5Gfj9",
  "key7": "5ogBu4PRwP3YzZgG8VzA2xn71R4bvs9DnqJY4gBchQ1Cj2tzHn92JCLmyBwEojpqMu1M78dadkLqxcpsM5mFJ3nz",
  "key8": "4vcZ5sG9Eu53tE7JA6MJaJAA3TbusFxdzLYiar7RsP1UeMgxXX1hiEbMwnjWpDtk2kFSjFkQz2qZxeK8zMximtK5",
  "key9": "3cAdUJRtEgmJ3YLmawecrNBtA6ADj2XQsND41Ku4AYMG45PmbVvMQH6cixEevmYXYs6Y9qQ4tZoqKH7ifNtPFDhD",
  "key10": "35JqbBYGAzHrxTB5qNbFmFay7iK7MEb8yWFt6wqFWgDjGpMsK4urHcrWxbom3evNt62yzTrMEs9zbtrJETnRSQti",
  "key11": "UisebfdxxxMWJArz8YQQKKyzJVokSZGmjRN69frWRqGGXCgXigSttCvgCPYPm7LXofKkTv8CesV3Q4bNyHnpFUa",
  "key12": "HVEGiDnnh85cwnje3grua2AFEHJPYCsLD7yvts2qJwx12aEj8kexcEju3XG4ksMJVQgtZRzZVxNKmNidRzs6NiT",
  "key13": "2Hr8BBxA1mq9dS7Guw8WL4fBWdbbz3naBosmy58PTGsPcTNYVPNnHX3SDvuYB16xA7m9Zj32whUwKRbCLWPkj6Ke",
  "key14": "2uvKDNZiJkdzkVW27FpTBG3649VC8ofujUbhrxjh1xJ5mhaV5boGUAwncVYr7kxWx3fawp6KPwfau4vnwH6E8Ch4",
  "key15": "3GYBDMjoR7ReqQGWmqjJaLFaWvdaEJo3Zf8adXVxgTLgC4T4weN1SQMHY3Dxi5XsBhCp4sdfLsKnzVLAetqm7VJG",
  "key16": "5YdcYFmFPir6V5NGXDkMX67a4FC7fmVhv189tkviCmEa5i4xdiqtjNEwZL2Dpnr3o7GwXjKhcQFbhFjytJFJB2g9",
  "key17": "63ihwR5X4VGmE9phkkmg5UQRio9F1WdqK1Ykb9vAQBLE85WJvoV1X2SqnThkhDvD2nfSxfsmudc8GBmCVyK94dqh",
  "key18": "29yqpRcmkrEtp1jLe8kVTnb8Wj2x1xnqPw3CPQn6YBm5osW9ybkcoSsKqdvN5LMxsUpNKdVXbJSTTyzGp7sc955y",
  "key19": "2mcEqrtdpxxSxQ3jkarfZCG8UKS1Jh6JUE9GsPb6wVPY5rh6cmzd7afMBYTtDW9BMv3cx3h78aMZFpcVVh9UzGod",
  "key20": "5FrqvcmBBZoCPa61igKvskKpAoqn9s59LLx7eSELS5KsQxvye7RtK2G4pHnz51GzqmVPLVCErLVHCjahg3PLrj7h",
  "key21": "2JG12434ecAyN1b7cGwoPvZF1JgNNcn6HMGhAKf2dPek3MxXodKv1RmxcfDQSob5hTMiC4Sy2qamR4KGbgY8HYqw",
  "key22": "4wKNiXf4s5cYCfjQZ15KMnAzoLfesvW5SBdmdPUSzParMJdTFjSx5vtuhBigGFygbG7onVHPnkxj8bJoB3t6LRWV",
  "key23": "3Mp4ZqM3j2Jd82G3dLWeb9PvXwWMMVqzwN33whEzF7rDTVUyvodr58XWuWoEBmceWP7BgSmzfvCTbF13N3TUyt5t",
  "key24": "22yHMqYvPdmLQRfRzpDqj3PRHqWMY7jpHLZpv5E5F8jEgG98KtBWb6LmvPUou8GgiUT7eDBfWiqpgufj65L92ovS"
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
