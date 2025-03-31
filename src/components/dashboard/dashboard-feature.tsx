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
    "5Vct9yYp7MxGHAJWKH3PomPFWrFDVHeeMv4VUDdGujmjtGSHCsqByuwekGGPsvPpsSdi751HFsYTbByyNK7Xz2U3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AbZ9yGzU3NZRawKYM4TnHrRnxjhY5fTJW9CJaKZW8sjdYVTqQQ65uwLG9DUBRJdZasQQz6qWvzPsZsScmDXBdPN",
  "key1": "9zHq2BBaqa3BS7gcz4ZTgS2cK1dr5iMm8YHFeGWV5hsxLYfXDnwNfr4kYW881YEMce5oug3Bh6CDdDeF24A9UEt",
  "key2": "dqQm6dYrWu4753GNPMEGCDyM3tSphAv3yYE7DSYWKDVooqkUB2fm8iDLPy5uh618T7iwkKVwMNZXBTZMVRE2zSC",
  "key3": "3Tktwx88WTu8rPPMG2t2k8PuT6pNpo1CbfJJdQhC4HPeuvPA391pGfLpt8Mo2cEtMfhmgHTzZ1qcoUr2tSU3NwJA",
  "key4": "2bQWzbDdc2QTAbb9pm5ZJhzbKhagjJQhxBbFFJkpKbmRrVWiDqxCk1ZR1dN7E17EJtxe4Xh751E98Mtgni8inJwM",
  "key5": "2EyL8MXTZCpPTTUGcdk3oAz1fpDcYMyQH5JtTSjaHeAvAqWZdGAquxtpKif2NxmiakdQhJdRNh9H4ahyGH1ourzD",
  "key6": "NqqHQzqWKfUqAFCc1ivvgYQzREsfM5QepuTHhRcTCL5ifEbtrW1ywWThfrRiXgUUpVaxYKhkpMARAvzpeQa67Ki",
  "key7": "5EHpnDKRMGWgZsQyZMKe8WoR9DHZbVXkV63QcMMsXd6huZj1wr6XhKSeL8aDmAgLQPRh7yQvVkTdqK8FUmEeWD74",
  "key8": "hLe2qnu2vJGo9D7DEBeXgu5JV4CCtQhWVUkdAKdKtzznhDtiCcHAHc6EhFginb1BAW4RWBrBBrT61Z737jji2cU",
  "key9": "347pDaH6cTjQ4QcnnCESdpxcTXnczrb1ttEcvhaND4V2PEtGR4VV2cBTec5n6iHtRHLDq9JZDsyzTJ3fYkedF9Km",
  "key10": "XV87K2Vpme1yThbebtRyoYzwjMDdKmsa73cGQaJQJbqVuuLugKuDtfYNGj7t7QSkHgMzPSBazJ6WmJrk9Aq5k6d",
  "key11": "5g4TcBmcBpWSSWR8zmf1xVqKc9arR2Avrox3YxYoxwFfPqKk13YmwRvJL7hB5HetLsJnTSFiPVoeo9vavvVbxwpL",
  "key12": "4GLRZCaN8wrHfkzt8YVPvcpybNCAcQzepeTsrFVqCtM2PPkHiYdxpsMPnMkhBGPje5Xs6mfUngzTvYR2n448M5mc",
  "key13": "3enQS998ikc6dpipJ2R2qNswdvFTmpo3SME4jjW3p4vPHoZnvYvKZvDjcUFqJ1TSQcKeiQBsMKJwGhgk9G5zEyh4",
  "key14": "RzPgJKFpADSF8De5wCiNqazNQeVAmwut7u2xTJbRiyeHgfJros8BYaVGXXMSZzyjo3peWUtmikH63BBG79mG882",
  "key15": "3P4hQijVGR8UaVv913hJcHyG3qVGzBw3waZVB7mA8Eo3oYHjV67ovEsCzbW2YpWmgfV2AdKZ192GS5qtovRJ53bJ",
  "key16": "67BCJKcrfbp3mKYveaJFGdhmVcFXKess2GAC3XdvnTGxzps5kbCMHUbYLgNVkQp22vFMbaofmffEFCPCDbBcNFuf",
  "key17": "5Gm3qQo6SU933VuAFz7NN4k7qAminDf5GceqmjJsY1egXApvqpk5Fa5XH98WT5mJYwYZTrt9BTzDqP9v16vrNGkJ",
  "key18": "4toAUqbgiznjukpc72WAt8aKQbubYXdPKUwehyhCd6FXtqsYBosEMxBHZWWFagJYn71ovttcR39oE4SLFf29TFWL",
  "key19": "3vW3vFLPuJtrJ8vgyTDBtYT6keSuYPuBKTz3NAhtzE7ByqEaq1Qv9adkcV6TPRB1DUfa66Vu2jZk1kvTHFFrNw6a",
  "key20": "3o6hdX3TnAanASz6GsXfTZh5D7ZJDmYhiZP9N7sfBEAin4vLx8kzgpQhDTv9EBv5Chec6Lw1a9tqn24gxJiZPJc7",
  "key21": "5eG2b9LhJcNACg4Bbd46xNier5EVgop9K6PbBRa4ndp5uc7LCx8j4pcbNVWo3fYnhNakKfYiUumaEDa1Biyu79fb",
  "key22": "5KfCeXaUEcrHCydv9daAX7S7dpZ4oK7Sfqs48D7kF3pZxsvcbNEeVDZoEwpVEg6DRSoPTKZY8xfNMa6ZSKGt2Bsd",
  "key23": "4nB8bqsbygkUQeAYUe3gCYxrduGaMU2rmKa3ABh9H9m7pcbxPcnVYrCq8LC8SfQB6rMdqmp15JuK2fZNU9vDExfW",
  "key24": "3GVN3MPAYzq7G7Y6YTxcH9u6L7MyzqJdFrraYms96Pp5AFSqAn1D1CcFa58ZZ5Q78QrqaC5ZiMW8TDjx1HDknsch",
  "key25": "5PXJ7gFr6RwNNdZqqv1GxLVZd8KifQcPDrTcnhKeFEUADR7Pmd3TxCTHQ25UkBrXXcK7PmPETvdnGGBPwcf6G3v7",
  "key26": "gZPi35wQ5NfVMWkvkhPFgC5zvFi27k1CLxBEs1gtv7Yso3WF2TMwSsP84qcempZL3QC12s8fXCcFpv9zBDnKWKh",
  "key27": "3VPjGeGw6AREYBGBvEMh1j6j6ct8mkjX9La5wUcvQs92Yr5dJRfp79f6KoZLWGnGCjkhXD7uh8VAuGVuQPoSuiSc",
  "key28": "5fnQ2Y32iafuvLAobzrEjKywqc8Ht7j5WRcAE7oEGXkcFLDvPDMXsstnLRuwcYZcZzrgXuihPSnDsqwEEhVfEmy6",
  "key29": "6oR5duBZgukiZJZfedNrYHwdv4FxYFPeXiVDwTt2WdMAReiHDgYx3nyqg1V9sK77xiYD3N98uhtUTUD8qXLyruq",
  "key30": "XroXDdiP9qnLkXGYViDXzHWFbp9TgubtJQH9GG38RCc5p1Gm7tshu8iUk3N7a82aDZJvqXXp6KQ1jKwyuFrZo7W",
  "key31": "2PmF63RDfBiWMu4ubi1SHLfpyD8xdWfCcsfsjVaHdKJ2D5qSGuzxVKvnfTh85Qcws4QhR2LWsvp19BQcbBbFVPky",
  "key32": "sPznkA6czgbU3BpNbAS3fNfov15XqW4YfvLWaCtAW7yPaJs4L9bxjqVnfDVnLtCNmtvVcjewnecN1DNpdz2CYpD",
  "key33": "4vy2bLq4YB7ef5QLQY41gDwGd8ww1qawcocGUFWGLDZH7gKRXvaSQxRCNKwozASF36vxUmeTqv1vJrbm96YGipHG",
  "key34": "2yUpT9WxY8QMg9azXRBo9TviTSyzGS6kUnrDERhMn1rmZCV9ZyojAmLiSDRyxS38535pAPwY9xBt5cfyTmFPiaMM",
  "key35": "ZcST1auuL1btWedGCLY5QX4S3bAeUBzJethmxUHkAkRNGi7J12QtcjypzVEJrFbeMbyamVBD4d93ukvTr3KT92G",
  "key36": "5GXWX3PNiDHmFiTBsFXLDwPQLZUygxDTNZgUVuSr4Vad7GdJzUUBJpyf6gqaeMD3KDhPd2pE26iz7txmhA1h9Eep",
  "key37": "2MXg3ykGPBad9JZamz7AhrmCK1vqgG9hgViTb1H5ttWVDWkKBiTp51k1QR36E2u1y9j41jVpZNFqmFTXjqwvoj4s",
  "key38": "f2pit126usrnMQEYgZQPWazo94rtfcbHSug9VzTV3317bFWrsdSyQFctDQ2FP2qG8DWdv5p47F6PRhVfcjHCBbq",
  "key39": "5nmZUha3uT9TS2Kig6YcZuTcreYz1gUeM2V4E3kcY6Dgqq5AbpbQ7zj4UCiJejxMsJPUTDTE4Acn3EDCPKMzMLyX",
  "key40": "4ALjNguvfVxzBUAmzkXzbPBEpimmnd3MPitiijj1KAeFncrVG6XZfaGc1gD7yCJcMDbHKbj15c3J8exxfZgLJu7g",
  "key41": "81uXqZp23jcgNaFuneA2m4rnFJuKFE23iCsnxbmGA5QCfFEbbgisho6jGBKKdvdd89V7NXmBjSNiDBdyh42oMrp",
  "key42": "5rAHF1FoXs653KWeCriTtreU61T3mB82p4SpKxjfzGEPQda2G647Enqft51wbBe5j235YzDzUXNwVGR5YNPiYHFn"
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
