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
    "29DXtH8aUJmZoURcMhhBvpkZQbsy4UucW92FJa3uydw2ibdj8QNj9yrkjYZjkTDsGRnYbHF84ePa9YZxnDKFKe2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JfmEQgMNenaZyzJDzF2c51UnSz5fWcDAJvreuKhivgUdsvVU4NEiGxxMG8T5yuHYZLgDcUKoH5nXSuSdV7umNHV",
  "key1": "2V15VTg9F7agzpPreuj3soD6r1HNKaXNdx2rTZsu5pqm5WeVjq74sQbSKGYHih2Mw6QrQ3YhxkGMxGw76aDff6F1",
  "key2": "3nmikgi2zpiW6SoNUm8PosGJdAszhjsLgfmiQ2863MAhojXuPzaHGMCnnGBa5QWLYsjhxEkDcmp7ggWRBPPAWZhW",
  "key3": "fWZP3R8VfoLAHXQihQSJEWSg18pXrRicQYzV1dn1wqXfDzmeVCS2d3LsnUbpiFYbJ2j8fHBy5pwFSf1kQ1yzzXJ",
  "key4": "3B2vyoRqHjj6mev9ZVbHojenSyGiXmj9nWsGsHjtkQh8MGEw7t18Sp6Pj5dm86BeN5dXj9pwinfgvRWgnH1Ta8zy",
  "key5": "4KK3fS8jaKfozLycxvDRTinUzc4hQduWMRRMtydQ6EZmJW4UscR2SWJ56SSWdF1LBGnqbvgJAfe2hm5ZQAWCBmwf",
  "key6": "4yGQtHweevsBzRPJcBSwfbuoZn8pTGj4jqs9ZKaULcHQPmRHmyUsNXx85YLmPdbsN5HaDEXtVuC556KJ7p3i8vMU",
  "key7": "5cmTPSTzbMvpSxFS6poxnHXDZxRZPnncEdrSQHDVCUvx2UahMYgfDcdEx51ApCpXqd83sQs4o7oi9pN8vqWUgRXy",
  "key8": "qLKac8AyhKtJofWKpb1CzxdHc5M686Pj3oFAx5jZaziF8hoUm97yGrb6RepEzmrcBF6DwVsaQ8VubP6NtAe96gV",
  "key9": "5emoexnK7fqshcEQxiouvcA75MuRDMhCc24Sjor2Da9NHrjLNjGREatiy7xDrfpG58qGbuZqSUuTnYogXxcN13jp",
  "key10": "2UAJfFDta44Be184WzFZw3dZVKBnD9y8RdtkfhJkHc4f4p8g66ZbEMn2aiHjndkkaozzheK7r2oLHLSUi63YJaQY",
  "key11": "26o1CnTpxvBWi7scDg6ks5kHqxoagdgZUEgMkNCr8pZdoJyuoQTmM7WDtcwq8ntgV4TRgT5RQyZRzL44owFoMk5t",
  "key12": "5HbXfueHDD4V8fRzz3SndZFq4ipJLAQ3PtHLDym3oJ8gAR6aaimsTeS7tFjWfq15VuyfMWqwM2ksopGbLUHGT75i",
  "key13": "2Y5p7bpz5ZuVVEpyaBFifgjZV6TSmtTuTPp4ouoYX6WCp3yTzgXTveJz1hyNcDkDZZcyKfDjoxR1B7GHUQBxiNth",
  "key14": "N383giEDd9tTYfjCjfncNkttTf7je1fqnggiti2yYtTUdwNL54fKW8V6S5aTnHJ6YfaqVUuHZJdfnikZbabtHTZ",
  "key15": "3FgwPknSV1hoW9yhkxKUZCA2YVm2bVg2PeresiLFDFHeW3ebMCXeQ3VgPkA6jbpjDJ4TxKUFE2qKTPjAwf3m66iX",
  "key16": "5WvSDwqoKuZ5qhwcfjpiyDz2hvFM6wRtisfNyKoPAWiytZSYskZu6BvshtrQWtitRnDaqhLTvFtDf3PrxPnMCS5T",
  "key17": "426dqHPV2nDRvmqvqAuJu3rPPXp5xQffBNTDV9CyoUXtNPZrjumLTomLMaNfKTafLtaHsGLHVcmvFywNRcAXmzmA",
  "key18": "4DWSHyHzXPQwgdkFa4WjLsgPQkq9QNafvmohkNuGqYUwNEnjy2qYW6nTYKCCrMZdS5MFyLh7KLNhbzsFojVheDjR",
  "key19": "5tAqVaQz3m7MREoTFwz5s1Msx1KAKL1rJB8D1bt1a1emffWd72dFqw9YEW8L6whVJUuWJQapSviDJikeLdp2JrCF",
  "key20": "2BrUTKn9th3uyHsE18rCEDBL2syBFM6TUaadv34yeipyFPvD7pHHAQxEvA6gLCkCPSkMdkXQC1M2zvUZ6RKieeVR",
  "key21": "54VqHtFksF3DzdQae5sV4a2knxaZRFfu5ZvAFmkZADwP386TMbbdD6nsPkte1CcCqis7tvh1VcHxnUQUUcPJJZkB",
  "key22": "38tXCQHjesvMtdHkEm6XcH86TdNnsYN9UVqu5wzG1DbjBfPctxkuLoyZ4uHZMTgcr5L4PFe2h6JPx6dttkdfvs6G",
  "key23": "56pAXRLNSBAQ5MyDUm64pzUQWzMGuipcsCwpcekBQDUPDeNT3MhaRPi82EKdLPc1Mv6PM7DpysSqXebJjU4L28cD",
  "key24": "2MPV3YVQfVWFxXuEWHyXk47n8kNgitXrZARtN8ekrT5ZHaCJe69FutjfZaJk4Y6QS81dDpEotQwQXz2XEuSVbjf3"
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
