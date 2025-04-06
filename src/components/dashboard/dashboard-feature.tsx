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
    "Sfja63iUHryYuYDLeQ3C2crwJ1Cn5tV8UQ8yfuGGeuW5FNd86hJxWzKubcrPC3itUkuVYepzfi5mgeyhnnu9tS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mcV5BTBVgtD3Ef2DTkkz3horGsvDSKFWReJBV2uh48vBfsfgQ5FQs9TWJfMutsw3ifuS1JCQHCC2JRmxWFj2QXV",
  "key1": "BTn62Aux8Q4jYfjceW3nVtY2J1ErMvHNEkPBhmt7xSUrQoaEB7vYjPerK6irvvr3RTMFA1Mv9YCbykwZBixEekr",
  "key2": "3q2aHdcCFi3SHH5FvwZfXj6AXCR5kbKNaryDiyr3yXPceFChVFda2h6wPCMhnBNpBesXwN8zouS7MBK6Thibx8mf",
  "key3": "3WoqCDsVBQqfajqRUWxo3RChtX9LdMczht1a2w7MkV92CuDnDCRRoQRk8j7ZLU251mWAANaupQidRYei6zsk7c51",
  "key4": "3E8PVdYDWZwaLgN1mqBUpTb3VGBeZjpg2HDQUn6Sp9RfyfaDbr4ggitK9qmd32zKGjX8BuEXYyvUNaCPANB1Je8g",
  "key5": "2MogXGexHNRjnbZzkQtGZxfX52yPJkGthMSSj2yzrt9e6asBWxTDxiuXTRyvyxfdYgdzuxWewTA8D6wxwFNXqzpz",
  "key6": "3U3wMBPq2SFkrfP2a3Z15cfBbb99KaE5F65Goq6C9CH4MnYfbsigKDkjNsTSF1Zm8WJ3uyMrCmQ2yJaTjcRCmJmg",
  "key7": "4QnwtNhszVLaVkGy2fgQZvJf69VCZKQQBqqCryj1HdDMPXDb1yBBz6KRTF2isgNubreTMQTXgHo7dGXRAUSMHULX",
  "key8": "5LpKHpQJ9rjzLM3KWgSc1iF1bkDnHH83tW3ePzUgUqsfBAH7TfLnMwYaTR3fE6EBzkxYGe16LvjQ8STxJHiVH1vq",
  "key9": "42krKf4NdtYZmDAF8RX31XCNQiCQy2nQX5hwMxRwYMnpiS9DfygEbwuWpr8T3xvu7LusWWgTRArrVHh3B6vSAZQg",
  "key10": "3T5nh7zkBLWwFcS1vXHFvoLs12jznwA3RFDZyNN4T8BFgwjoSaPVTpU5TxqmBMNBsZYhSRQPBnqxea87wtQcZaL",
  "key11": "5kWDMezRcQA9KVm2iR35HF8QDizN8gganrM1g2rSD4SsbdjorPBMMdAjsmP3u5d3aMC66qoZu1NVPEW3MvgyZubU",
  "key12": "4gGTwbzCUuJazotnVWHRFCZ3V7ntAqiFUXPetJuWrQJ6Mz1ZA8dLSvo6dUxjZZr4S3Brm9WXZwZy8NzfpQprTapT",
  "key13": "3FgZVrHMEZDH8J43fKQdd2SF8FcY78Pq9Ehbr5qsttr3C659VfNwLNN2taGH7xVZJ6Qu44BbBz24WBwpAiMoZeic",
  "key14": "2brBWZcaWLjs9X21MbFAiDTkMb6WQgncH3ezZkMYHWDAb3UJKjPELVur1HLczV1qRjQeBos7YnYt7pBSJ6n8KvPT",
  "key15": "2eNzhGyMzsxmUdVbgZAEXXtiA4AocyJDmwP8BDWSo6zoxYbJYV8VpoQvB5McAvY2fDx5X6LnB85qvrToSMhCspsB",
  "key16": "4tuNjpLGbW9vpaUL99is9gzFCZ4HHTSWk823BeXFHkzyuxJZdPMfnjih5fEwHizzn2Zw628ny2qb3igg44j4MAgB",
  "key17": "wYGfcsuov1MPg173gnogEDPjJ3riByRDo6NGZHVkcd1SGZJgpWERs2P4F5ZsgQaErR7YRJVdTSJraQWWvVzdhLx",
  "key18": "3fgrsgdMJh365J3sYjkAachbktzPvRXPCYw2b1PMSpLJiKss7joFJ98juSDxsi98froHydahHdVRSvWdwTDFQ1Pr",
  "key19": "k1gtfFT2zL7S4UpG5mJqMmEhJYQJCn6xxneEbomJcoDNkHsw4fxcaGgYCabwfCF6hEgduQUmgcRuSpvnM4VHPM6",
  "key20": "2diuVHDwEye51Yac7aRjABGZ5UwszPzSpawCC5qpANSniyeZzD74TPRiTWgAZs8jXaznrzJp8T4ghaRLNVGUAdVk",
  "key21": "2QEs2vzYvkwoianxvVJspAHeRL44vfktrXmzLPNPHomcVZkg25Wc7ux48szAfQx4X42Rh3FBMKwbiiGKqtTmBQQv",
  "key22": "65exksqx3APbXtayRtpwCFLaw5PaUC3dWUAmdhJeBjAwLBWMNZZ4ysDSmypMi8yihaeHh81b9xAC4X9dX2iRfv2T",
  "key23": "3Tj9gbB9q335ULbkAmZf3bwKeCaCvgYb74Yb1W8v7Jtm6KAPPNxTc9LknUJ4GZFqvJBjoT8RomogmbA1TX7wtMVc",
  "key24": "4hdEVWuDNcQwVV9PLpaKFebh7m7xosDnDveDsEr3ujFFqn1LcZPSMEB9YYRPVUGgvG8BqsoTKm2h89836GraBZer",
  "key25": "61L7ir8hxvJLyiUEhhKJ6addf8Wd28LKGZi9Gava9tpSC9fSJV74k8RpMzFAiKSi64WD122U7t82UkmJp8dXxKdB",
  "key26": "2VusUATVDMvZ6zAYSRjArWQzmXKRFKn4MS8KCUZPGe4e7THL4fhFN7uBeAmMeFitCE2984yhcRkpHVYVqFRUE5En",
  "key27": "4WjwWngP9Gmt5kn8pKm6n3iwxiQMBLnKgHSWMjswbLf6Y8iazhvQkCESwEppz6MGspbQx9y2611RRsSSHGhGiUym",
  "key28": "3Mcfwo3kvZxFhyGUVCkAQRhBERbwThTvkxyFQzPVEZUr4eh7k1TS9Vdys42kuUHsTFKKgcgCfMh7pY5kCXnzhQbm",
  "key29": "5RRZpXdTRkWn6rhzVqcYfCDTebrzpym7GQeFRJEzHMNfbv9sXK4sADnqxNjecWTQEBVEoRBZCMcGaMM8iwjzxH6G",
  "key30": "4B3fNGM8ucQtNHapc61V4rhmm6uhJogx7j3Ei2baVwwxeQgk455AxVW4eWETAN9aS6tcX3n7YBRs2bqxogapquie",
  "key31": "5U6Ja6rDoKL9pcoF3nSghQ43nk4Zeuj7CBEPoSwzAELHxD4P8Eqh5kGQRk2Awea3EMTSL4Pd44DMXHxvpG3KwDgv",
  "key32": "ykursGeghzeVU24dVasfVNDmY2P1uf1Er1htaZoeQpuanqDbGvdAKU3CJPPQvPihoCFcHZhcUKHLVKdYabAVAUH",
  "key33": "4G5ESNi7Tvrzo4PbHrjsczRu48m9mUFdsUFniCQPh8mXiwrGeA17hqWHV6YqtftrPxhDZjqGSW9NvyReTVmU2TqB",
  "key34": "2jPKfDbJcLvFqCn3rDPTh14GTCfVCYHWVyfYjwmXcyWrUuS913hWw3Zjxw7QGFXtUTC2ZpNt1ch1fq2xgS8LoumP",
  "key35": "2LBswkJKnbGfkd9dYpyjntpnmxQZ46QgpnTmjKwDQmV7FMRUDMhVD3Th4dZi1WcNW3tSdxTbhdFa2BQ1NdtLYiZL",
  "key36": "4GQhpuxrjxFwggNgzqa3RkYN8D9yvMQVyjmGR1iFvBvfFRTEMEUwYVAKmSVRZeipPwJng9AnDRXygE8yR46QxwQg",
  "key37": "3nYqWskL71MqBvsevLhZPhhYE5EzoAmEUmgMF8akN4LN3cKKT1jEdyTqVg9E5by6SM4BrayQR8N9sZU2SdYDqwqr",
  "key38": "4sLwnKkYK6hbdbjwSueUDaqSfEVGixKTV1bm6bidfja1sC9ir6pV7rTTQbCBFjK18FYbq1KVzLhS5r4YzuCAZhFB",
  "key39": "33dqYRGjHkWiPg2yFF31RA5i7xPjCV1AqNg4KQ949LcajsnBd44Ntd2Dv7hETWzi9xksgPUv7XqZJ8KJLP8nHNze",
  "key40": "5P1RHDeQg6LXpGj1oN792HKzMqKnPLUaDXnSzE5zFgydRup2eQbEsuwu4rdKKUX4wJFRMCvkGhgJmSTYUJL9rxvF",
  "key41": "3xu3L651j3z1dgCymH2ehBFqs2MQW7uTMsSnPgeGkHo1Q9zCQRGhQfp5wpiCFfutjeYkzeKyNUBPfmGYZMjZpRE3",
  "key42": "2Uz9W8L5rtSeXmxxtG6hrVbabLKiatvmHqy2j3dknFmmZ2NySGxXpysEUzcBswGrMMSvz16TDrwGCaXvNB1VwzkW",
  "key43": "3jSTjSRJahDMpRUitiXwNTnuRZ7VutY2bFbhGKcagwzoUNDGNXvg7UKonRLdNUhZXHcwfj4EziQUmKPhP8E2fM7Y",
  "key44": "3bz1SsypEXeNuL6XAx5wZNssNZ7dvpz42xVx1hXFCVxGfQ2iDkYLZ9gd3w4MFHNuhyyvU5ktYawTZY4C2UjhT4F5"
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
