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
    "1A4zHVcDthXBo5GqrQwxwuwiS9Eo63XJgQqmwUudS2eTm9HX6aTjsNdGW3xZNDqBAjiP9pqpoNb25p7qw8Nj1vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmSuvC336a5N7VP2gjCn1ws3uUBkQQTtAyPeoaYeyR7cX1Q6sAcAzz4fNH5JP399bDmmNU1X2T9dydaj5NLDqmB",
  "key1": "2eAV9cNnzYVwzrmVDjvDtqwfgv1X6uPUGAGubp2EtBzwvREk8bwbfYSWeUWjPx8h2Gsubc18uWvPHGoh283fza1P",
  "key2": "2g2VEhHTpNjKXFrvuPunL37JmZUUTQ4Mimf5MP7SuRmDb1pqhhX5oQYoHNM49RJZSRSH2VpqpjA1f2cnqKn9teX6",
  "key3": "41HohEVyANLVUaQTobdzpF4ZcQ5KCiMHGvteRyzV2RoKSGUntccgGJJRsBNcoWh7x9iTuhY4mwHTX7ZprUeF4Xaq",
  "key4": "4aNiKJCswEP3FA9sbNpXt13EjJgdEKhmV17xMbiH3nHMWUw4qYvFbFgiTeTPbYZkYP7UisYFimx4KyvtxCVsEVT8",
  "key5": "5VxRdfNjNogioyL4dQtXYKtQ849M5EmYXJG8qN8LKoKUEp5GwbfQm4xGqnE7sKBuyPFjQjvFcgtRUh9ubvzcQvAg",
  "key6": "3Se5boeLXGhhnt2rfnBkxPgRo5ngADKiPPVyo6rDtLY9Vbpv7uXezoVoSTJCy7HNaKgkxW49jUkFTCGbonr2VUrj",
  "key7": "3MU5otFU8b9DToUm8tMRrEcU7WtwUiTLhuddwEc4bvBwoF4dK8g95Fz3juACWZCzB1t8nXVxgTxw1JMmnXx73iWe",
  "key8": "52cnGteJcPbRhrM6rpzmcDgRR2sRom9n7RU8UKHfi27EGoxhBNkLmW4f3Pr4PspECgVA6jmbA4M5yomCwKHv7JiJ",
  "key9": "2gjWk8E2YQYdm87tbvJ1vF7wCRpJcBJJfjTp3YfBDeHDET65MeUsn183gPCQECERxS2gD8nXifro8BatRT9eZntb",
  "key10": "5h4JDHpxeTTkuRXUFX5BFPMt5UPGvLxrLAVZHWdLqtrLTpTNmEQkUuq2rvnAHMXS2mejpaGkqmJsG26guhQBt8Fb",
  "key11": "3RhchLY1KTxPkZgES9U6KriUNP8SkcFf2by8yinao2nXi3zJBX8QruPMvFkkyjdmPq28zYdWVXFzz7pwrXrE65fT",
  "key12": "5YU1ZAsgf4DTgBRZCTtrQwZzDjJg7VjJKDpRLxbAErSvnswRzVGJeG2S5nTACV9beYNd9ATkk9kpipWznu4S6Uc",
  "key13": "53aU8oeWT4KyXue1spX1f71X14rGxj3B7iFgEG16Bhn9Ss7U41t7erw7U6YkbqjBEwc5LAybLRDVq3aEYX5i413z",
  "key14": "5nL8DyEX3AogBSYi5TznGgjZGhfGPBi8MVVRvor5CddtUF25Aj666aPRqLfsjiRg3B4GvwvagSmqBzfejPBhiaqv",
  "key15": "3AK72QvdcRfxuFntgtkmpEAJ1JvurbjmPVXD2KiRxtRG7dmydJcJ6MLxBKTFdH682gbwTwCPViPDydvX9G1tDmF5",
  "key16": "4dvNxaVg5sDUoW345G9cboPhLi45aGtF4ERVe2hXkHEQzwswFY18tP3Jvxtw3szvNXMoxAC2qgRzf2258ow5KNDh",
  "key17": "5n8JommTiJJPnDguq7gdE5y54eWqjdrjGrb19SEu9TkgctpTJBW7zZBW2oMimzAQ7a48VQPRrYHtrPRKPUZx32rh",
  "key18": "2za37xS357xU1xNKTA21VyPD92v6FUEP1xKHYHj3TUVFJN8p9TS7ivH5gqYGieSTnjSiGnwGxPLWGNBvmHEvGdxb",
  "key19": "TaewRNzMMPAZfuh1mebZXg2SLpBorpyGZtb4ePkJHTKsrxu8zCvM9fLGfWDVuE7nyfC1yzsbE1aJt89JFRtAHiP",
  "key20": "2AETTvgXchLYCycraCJcnr7i6WUBciqMWMDhKrCyqerK7WdV3ud57LAdXxdjbGuaYAQuoWKbxiW9CVA2AGPviEsC",
  "key21": "3T4EZL6YeRmyKs9NX9qUTEwyTcgoXNUWpseeGYJdG4eADh5GDQvM3ZA2dWZPm1ciHifaJEqaWtD1i2VvQ88iLwLf",
  "key22": "3moPD5BfeTC3vxkzoYh1akHmUPxPJYu5XSYfCJpzfENHJxJJWZDrMddZ7CoeDCP5YWNfmANaB7ykxnnnDRNgvgYS",
  "key23": "2ExU6WcrW99CJDPV1cYRLWEvkMuygFNoioG71Lfgj6kioCadzo1akqU7AN83pstyKGwps3LSow1f1p6WKVCxucUe",
  "key24": "2jZb3k8NL6KobWiVDNdw8ogNmYozVoqihEAEbXuVGDsf3DDTp4HfLbqemvvhKtXRhQx5cj8UUu1zefb3B5P5CYj",
  "key25": "67f7coBQqcwXpT9iuUWnfXE7iqyzzPRYbSoCvpBCm2YXudxcgZgmjY7h9mFvRZKU6JZ5dMWq4rNFtwtXE7TBvMbr",
  "key26": "5wtyWkYPCQAVQfp4QNjyLT536ZaT9uRFo2AAM8Z1NPX2yRVMavN9PeViTFCtx3qTtdCuCr46oWJjmhVpJignvn2z",
  "key27": "41TqaXg9x9NP4jgtY2azvPxc9RA14ozruXsQiRvAhjoXtZUqeXCZ7Q4AKLP3SkcCeFMW21HxDNZiZVTosFqwXwk3",
  "key28": "sDV3sfsCh6ritF6L7SHWASwKiMp2iYaccGW7qWZrrTKcHNN6Ap3qNN5Y3XvgekbWrbp3MU7phaVQD2GJevopMRL",
  "key29": "4aZc5UU6n4DM541FmKeEiqLVyKm8KQWjUsdUjgbii3JcufxxeSCEpuAZjhvesgvv9r3qKttLubwoXkVuS7ZopgBo",
  "key30": "5PwjrCjPTgLqdqq4u7vRQB5TLwV2y2fEpBo5hA7DxxEFLjLrJak3c1riagh1JW6gtti18KKTKvoCwisRCW2R7Zrf",
  "key31": "obqntK5QpmsUAeRQutu5KLC8oQmrbTDxt9QPaFG1geqHdpfc2ARBdk9EhhiZaesKUXhJzvFCZazfqPk5diQhNGJ",
  "key32": "2zdiAMkzCjnEJ6PN6sgkfYgGeAtEzGZUkttGL7vuhL5ixeddivTnwqZnTcHr3K7UKxiLZWHVjXPWMwpvQ6CGpWos",
  "key33": "2GjezBCez6G34a99gziRZji47z3jgoWCAcLJhifv7fnm9nYwvC4L2n8Xa1gVpuPTpt2X6b1xsAQCDnbmfiCqG8Ln",
  "key34": "24EccZgCR3Pu2QJTboPPqXRWK9ZXL6SyjifHV3EhGa3ghRVMma42iPekYRBzb43chUzMNH37mnesTFvjZNAEx8cx",
  "key35": "2jyWUBkaycK5NG3tbABk1RrVdqvYEesUnL7PZNEHep65HfvQZPq37R4ZWjdRxcNiPDT4G5cnN1etvhm4xsTtYEoi",
  "key36": "4JQAXGFPk5baD2QoTNsBVc6UsNBqhtfGsTpGCw2QzRv3W9gvhmU6ZDSx54R5iVnJvcNMMbi4TTaeoz1whdW9s8i6",
  "key37": "2EZFsHZHLrAV8q8BdxRqpwTpGtJPRuAdUrDaq24FjmGh3jeg1AXiGZoJW4EUcKMSqn3buqZedH6vfKmobdT2qts8",
  "key38": "5ixkKjLniKB7EZPsGEedgL7ji3PfBX6ArAg6zrTGcbneMa3gKjCa8Gj3d79J5Sf9bVMVjRp72Pv5wNGReYXUpaF7",
  "key39": "2vAWnURgzNmxWs348f2xkvw6uvHho3B4bEGmdfxYoi5jNq7fTXYDh4Tpvw5wQJL1eXb3ijnkmPH2WLo4nKC1oDfD",
  "key40": "3PhEaGLXXV8w6mYyLag4R2R67X7sCEppQFr6wjKcnNxnczf9nqJHhwcXo775yFZ7kQw2dWQmAQb77NMmd4bi87Kj",
  "key41": "3bbaWyWJxEudDfW2JzZFGPbry9u9HchesAEFuzMo4ufXmPSc1pLxwLTssZjivzjgQwALmSfw3FXf4f8QDbr2X4vw",
  "key42": "eUxYARi59peuBFTBEu2xXiQRuX5V3eEFn1CB45qwcur5t7ACjuwRygeGp8Xamu2Vu5wLcnA6GrcpZ7XtTMoCmK2",
  "key43": "2J6vUQo4SrNetXJeuEyUWb2JcmBccMVXVr7NC4E4TCn89FS9FiosGhxVbEUq51qqYMtYEUNGXE9M8NSvQuWAb2Sb",
  "key44": "4ADp55NkEbHGUW98CMBisLNH3bcfbNxCxCUdW4PANFHYSFjZrDruM9SYWZC8jQzfexSNedR3kA4AU2QTcFis7YH4",
  "key45": "4saSME9PRs47epBVBAHE5qYqRVFYJVZuPd399L9FD82oxaYCNSDHjjgQpncW9csaAzYq6qmkaXzRtPeGWkENm8t9"
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
