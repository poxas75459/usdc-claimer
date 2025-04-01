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
    "1ReJyMD7gJjFFLnR3DGH9uKZYDuLwQJc37zRubfxxPciLg7JoqFmsdEt38UEWqwZTT8ndHaiViLQhCoRX2JDEE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26DbKYCskfvHZwzir3aKE3mMFksVCj4XfQctwEMAUWsrwDegWMZa5Din8du17jULJgP2Zpm7b7BddqMondt2SMiY",
  "key1": "26e2pGUhSAohbfgrCZaR6DovWwU2b9BQadLkg1KDLaQQffdZTL8RvYutaJLbJJH6sApE41qvHVxuQeH3fyz1tngS",
  "key2": "2L3LGhjDiiizCZZXaXPK1WmntfYTfprMRkxYr9viLhkDoNLJDy1o8t3HCRDhdUnCRvv9e18cjkc8dWTd9jcGhJJW",
  "key3": "2fBLnt7FTt78WnwjYJFKtQ8JS5Jz9TFfKxdrCVAiCfcPBfcRH5rxeP4HudkKodfUWBkMabhQfVwexK82KFeZaETY",
  "key4": "3tvz6SvvRxhr9D4S3zqQoUk8Nr7nDtnNbNbB6cQ38bP3LE9nrnpP2gUNTEGf4b5DVFEJpXKLCY8bhbHSUNJ4KwBV",
  "key5": "5mL6pv7Soj7d7trsLw21xwqvaPsGNjo2P1U3cPNprWBmMz96A4zfN2AWEW7Pi7gXZ5y3ycjYphKqizGPLgXLTon2",
  "key6": "2TgXtA8uZmYDRr7aV4MCgY9eBrZgoVBABnAeL5K4kSxjYCpmJvNhmHnJstrLHzoYYR9iPov8hn5oi8aEM16ReRit",
  "key7": "42R5bTHjVGbnbw7MQyx5U9qQYLixUkCB8ydJrjiGL6uudJWhNhjzpLEbHTf8S84d6XyJdZVpvsnJ5MTM3pDyF6vT",
  "key8": "eRVazZ7LGXtkAePv6irfK9iVfLiwZBfd4Hyp7cedVqjpJYpFid9aqurCePVYrUf2z92DfbJetSaNUgQTwVrDmiK",
  "key9": "2L9GoBUiJTWS3vrN7ZnCrjYTF6RbbmsHLw2g9EEbk4JFLVQ6j6Qb8Du67NRks6kSGkC66R8GnZv1dMAdvoeKBgNJ",
  "key10": "3boDq3eABAY32ukpiHPXVyHwap5zJSjmunPajTLfQw1vEbhsKSudr72WFRhoZoPtbM7wRhYC3RR4wXkTZjM6uUu7",
  "key11": "2aUPC24n3yfmJSFftxf9gwyQYYR9byDRn1yiuD7p9ZFstbLA13PJKB9QDCpAYufF7nzLAUQZBjCeADDKrt8SbXNk",
  "key12": "2oLD6wvgp6PaAU7MuwT7Nrtzd3GU4vqgwUdTy7kAuFA2sUbWV7Qd3EwKgcCADBhH1raERxUAU1T4HKUmZKzo9skT",
  "key13": "2tcscW9yx64M43aVJD6X79VVshKFEs4rcU6zJj2Xz5TmNi5HQWe3qUqhUCj9q7BqdN5gJHrWycn6XQr7Y37Q3X4N",
  "key14": "kepPDLeq4gM87wBebcGycds4JpemJNV2kCpaUnvcuhWumfcPRM6ZcYPDwf9RRaQuCu7Gdn4VNZ4CVKpMxLETAib",
  "key15": "4GeCeFtRBfb5nnyS1gPzi5FdeyBg9bRaKjQtbYawuPczd1u46FZzcgTVwfzkhkTHDvsVFLwQiMVuE6borQLPafjg",
  "key16": "3sADQGSqj1wz1Ly59vnxCdxzi2s1Eyv5noLcM11cidPND4ygqyDGbmmxoS9sTHsTdAXwkNWCBu7puX62vTdQhPZa",
  "key17": "5Y72RU1Jng5pXwU4qsSv5h83CMQQZpzHE2dnLwopRAjkX8Dk9QsFEmHcgrDn31qaHioF32vBX19m2o3hcHj782Ju",
  "key18": "75ykXu9VgyeQRN51kGv4xNYSd6hiWSjQc92B6YB7CX836jTHWssHtJc9EzUBBjC23MDRQDpKdZqLxSUA41wqnVW",
  "key19": "3KR1ZSjAxnFJCV7PhGPks8vXudy135H75QhbpcVHyHEs2JDiZXQmzwvyv4NCAGitKfwe8TfA1ize7z222GjUrr15",
  "key20": "2wPqfsLQe2sBY3zcBTqGXf5tsM3ykGpDNxtB7M2mBveLB1UmyCMLdRhkge5pzmDZFFeg4gmthQMir9MERbX8HSRa",
  "key21": "28Recu8SzA6TJuW1HDejfwdpGWTBw84sMyy6hGaWXpF1RWHiXvyDUcAzYkhTRcLxjf5T7CxcdWJSChtAacmVoRZ1",
  "key22": "5pYLnJ87NemaR2Wx4hHWNzZ7zM8oefHKceacUS2yvsieFv9BwiW22P2jad3wKf9tgL6gvyYVXNKT18kKqmUpjckU",
  "key23": "4P5abABiXhghxfZ7tWPHvp9dYmuz8WFiYZdjSpkisHL6Kh6WTJjt3Uzfq4QmtWHtCcdaDw6YiED7vNtp5Zoxo8kv",
  "key24": "43x4gxsuc8swTPE6d4jDiHhyZjSskBKRm47iNfnZwMEjCcaUgmkwyvyzT2gmqVd8a5iMmfoTamA95wqwQW72F82N",
  "key25": "4ZeXfKdRDuysG9nDwZz9vGDR1Mpf9UMK8R4cFxfeXgzCJkeJTvsTgEG6xdNe7J4XEYq4Kxxo2KYFgQaMWny1Zjfp",
  "key26": "5wZmu24tdufmgqQRNE1GqrLn6maQXS9Tj89WmAjoQFJQgPzYHGwh8R9TFhLhhacQVPHUceVC3QP8V3SZLb8vCgtw",
  "key27": "3ueCahvSXGwMw4fPKUNyun1ZBj6KSWptp3DbAcTvAAEugjAfvC4X2CEzAvh1an5HVxKtfsTpGpindmxmRAZHS1xc",
  "key28": "2tVf5yrm4p6t8DgLCJKwAPZKe31XXy4t3gMS3m44SK9q2TLRCeCviTWfy4mFEVhTNpjC48MYAQtAZtL8ygR24coo",
  "key29": "659ZrLw5xwm47avKHQGsyRVbFCJM9XTnmGaNusSdNgyUziw8XttCxfsXxpEfnRzLj2TjAT7uGo7A4C1pWvSKNDYk",
  "key30": "3Q9oEa7Y5LZDVvbouw9VQ9buHmFgYncgUcoYUtuZ2qrEN8TLf45vqBjoZ947qsfyTFk7HQ26myn6j6Nurim41jov",
  "key31": "titqze4fc5tUz2aYw7n1DCzhvhNDCSdhy6pdgK8Mu21FXLnJoKHPxqSM3zq5gPrhjyw67XVPq1XpxinsG1wPMXw",
  "key32": "37DABoRFusHkh9LJzkgQ5TKN727vqeyRcUG8H1F2cU5b6xoWhvWUxCXbY2fwqKKTpaSu9PNfWA9eVn97YK2nSeXX",
  "key33": "64KSpsZGJaYmFV7ahhLF887QmWwK7MmSt1qd3jzH83KDFyNkDvgJ7XairhL4PT1XDxZLd3m4oWx41WwoAPNkvYpx",
  "key34": "3u4j7fWcbZQJPR3CTHiJZULrDG1odjXSkaQchde53LF6tyB2LKjfVh7qFSWzqz6weaBj9HVG4Bi67VfF5V2swPdq",
  "key35": "5omF8FJYsPhkCjBNF5e5Z1BdvaxQH2pxhcEYoqyxnAdVNH7ENdfRuFwdhqQMCVV3LRD3xUnn3cD4uFqV8xdfFGXt",
  "key36": "5L26wCQV8dCDsuN4ArEE37VsDHdE4NtXFr2RyuXu459uk9TQuKAjDM5NoziK59xhh5BaMgcGizq2PZRz5hAMaUq1",
  "key37": "4VQjTcDu8iu6EhYCQiziFMyEDVTWmajQJuP95grg58gojmKGZwBzhA4UJUsm83XvcSEeuKcyNdgSZM5ueayuF3qW",
  "key38": "kR7xKAoU3Lfu4wnuP4EqjJb4MRkbF2HsGomPt4a25CcuQg4fnnRLKJJVVfF5xLmxUivS2a4U4X2zqG9PjS6xUAD"
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
