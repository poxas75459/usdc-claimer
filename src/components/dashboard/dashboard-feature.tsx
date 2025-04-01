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
    "3kh5YWUQZEr7BiaUYzuuupU18GLkoeLqKEoYt3jWQwH7Fz7g6WHbXpdmumj2KEBacBppQTcEuUnJYCPuaCkWuWLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMdgKZHhnFX4cDNkVrbdb3K2QGqpH1XyXGLtn2Mc5XFUY6xYDjiQF7AKHnvNKgE3ZBNVP9p8gjxY4pVhrvKJviP",
  "key1": "4MQY4s8cegZ4CLMbdnTWdmnsZmmQX99BAZQEmrJbRX9i9apjLZ9TWPMnyq72Zrh3Zfndf9rBaDHyPfg67cDScjFi",
  "key2": "3eJBtje3p6crh17r2bt1vxxeHR5PmuRUCMNUvwKquW3KUPJSv1JT4q6YECCZwhYAf3SmJcspJDmDYw6EoNx9Lu1j",
  "key3": "GpqGhLninyxzVzRZiHTQbQyxreLsxmKNCpGWyYMnvVg7fA3r7a52wxCrdH9Q8GYvuCjecm7y3Aqm6jFekpoyBc4",
  "key4": "4LrbyteJuVC4p59uFwruSyw3iKWy3kGdRNuoY28qYuutezwjGL21esf1AEDKAfEFnbgMRBkd1oJrQHpRUq3Nar3p",
  "key5": "5ni7aBnLaQ8h8cKA45J8qW1MBMcU6c639mQi3EdyfaT455sEffGL7uoyDuziMB4EyGHUw4aMW63c2jZcuJ6jMDfe",
  "key6": "2WrJPJ7orbUFwJrgQmYYynuzCnphzK9zfeB9bThYHCbuwSoav9kosrJifLngJcfZgtp1p4wQZsDefsgCoxHv1ADo",
  "key7": "46vcb2SBu5dNxYu8kb4kSHzFWrHhVbeztozwKwPYzgTzd7ac3i3s3ks6srLLDUBeNfMb9b8Wo57VjucqRuR2tRhV",
  "key8": "2GxJzWAwnaLfSXhorWSGzXY6mmk7MbtsWqXqWvppyxM3z5GWKkxYMxbhDqBDb8jEAwSn27y9F9tPhN4jMWDQT7Zz",
  "key9": "4j8d9vsKZWstwcB1UgpKqqg3rsZRMjQkVj5RVAPngVSWiksSyohPNTMK5jg8h7wLxwZjTf1gwwZaDRktrKyBkF1x",
  "key10": "hkunsmCP4zyUydCUHr6juPBde3ZgaSu7e9nyWMyFpzexduj9A2q4gB1bu914aNesYAnzp4BZsUiHXy9sE7cBiYq",
  "key11": "2gKZndf3sFTKevsDE1YQmRmcZhQLSnUhHGxGe26VtCBQUEYnip9nseBDyVk2t5AZ4cB1aabySHsjGTJYEts1Fb9Z",
  "key12": "3GoxcszLdruULkTb7to9kxdRe5rqrpTahdqyZDpvxQVVcJzSyhvzYup1qcxVZZ59VG9pDJeGDC44ay7p1Yi6gdD4",
  "key13": "5cWBRSWXsXMuZZ6njr8n7Cztv4x9MuU3gmPrDsbEmHZrrtrEA2fKamkRm8kg5TNuf7zqz1zEWqa4s2y1hV8xqP5g",
  "key14": "mAiccZHEbnF1SgtZNy5jD55pCSGAsvEFnaLvoMXeMyq39E3oKEJHeAKjXsqsNhd6J513tSe8Bx3BW3VqLodjxyR",
  "key15": "5ALkJmzvrUrdtTyMcEng5mmT8WvtuBW8gKfpMBHwEW6gu3kk2tTk5ccBY95mtfbxpZTfbYJiS5Tdt3DopVCyx1M5",
  "key16": "5qinXx51ym2sJWy1VbH3GsimeNxmRZh8wYKxAYADAAmNuRiRhJLyQh2H2fFokjJu55RZQZw8jcihHKEpH6Dosjwq",
  "key17": "3ZyThdrNzqdbn3nj28xiy4HsbTnbDkmdob71F8EtfQJUWQiKqeLbb42mu6AYjusKECbLcthmG9Ykax88PHAuKShK",
  "key18": "3DDvBTLD8dwY1rNvTXxZyB4waTqz2SXS5NWxA9hE6jNgmKUMJDNMfFCySB9Dd5W6g59WYefX8oaFejjhcSDfUmNL",
  "key19": "3y4DHq1tQmJdBk9jfKi8JCwDW6u3zN1SNHreKSZnt6hj8KkEeHWq11RAGw5rsmrZVvfySGzeh6YxFToXsH3wa4jd",
  "key20": "3JHPjEAeAHswRMS6NvrqHWwEZSc7uWCVCfRmQuW4gz8jrcAAMAkGKGHnxAFEujbdbtt1ap8pX5Cke6qM6LPo4zJn",
  "key21": "46ksdCd9FWNxPDe2N5vKwPpUxiRm3m1ghMuHQQhirTxE8U3WpFMXevYuoomxKT4Qf95t2qdNUAomobisSszFYpGb",
  "key22": "MdtAcG9a5fACsqPKYQ7HH1wThJJtyUXoFs1E9kV3zqe47kMTQmrNrze7srC4CfSPXV371cu9yk5HV8nnGkGVKqJ",
  "key23": "3khW6aFfNt9MvB8tL1gYNVcfNVrPL7k9Nk5TQcrBJCx6pfeELUjg3tZx9TENFaSofpY4uMNdnU3fXAhfNBZQKPj1",
  "key24": "4SUfG1en39J7Xn147NeNPqywnw2weaTE36AVqVDkELk3i4XTTX4Utsm2oLNytQpbVtwP2u1B5Cm9tXH6PKqM5vVH",
  "key25": "jHvnGUhifJ8A6SBgKqbSTBEhUdybytoCqyFYxfsHUWsLUdfZTZ6RUfnjGkCfSxDRYTv6VHKfiQvgCMSFng9YTFp",
  "key26": "59QdUbAdhhqj8qJWCNPQPF6ceQDDUZC76748qymhFxDw5kXhnYRjRcckXk5orhVGGERgf2q9EMe9AYANSfmFbFmJ"
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
