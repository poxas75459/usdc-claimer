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
    "5Mvd3yQ5i1yw6MJpUGqHtpf8bxdf5CBMdErVxNkygxPnAaazEqbpyhDCvyaBNgiRTrn6Y3x6FRdrfZvnhXYKvzqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnxCWPpcN3wcdL89jV3nk1qcitk1eirxXo9y5CvWntX96SmQ3owoToKKgFRLXSZrkGXp31V7EQ2Cdi7XMDUk75K",
  "key1": "4625e9yuSJmNPtDR71iUzMjgjFHSjYvQGbe2Q2n94if87QiTrfZcGiZCF4UYprMuH798wYy8KLWsevjqpR886MoA",
  "key2": "2vgJ8ikZa61g9eEEzi2pgs4spFPgmysmM71EbA3e8VLRY6kqcUWkKqp7JidrVzbKqhwvhkz5W99GRqDQtqaw6cpv",
  "key3": "4XZAEtJxBnQ1CqB9TYUDae1riT8gFsw2SDJRC8VCbcZ6vYzkkL6iLgoEyPYV6JnHafmxcaLjb8Yj2jda2qBDeNUi",
  "key4": "31dQ1sq2HSYGszN4Bj7EXvazWQK8vFgaHftGL63PWu8msCVxncRf4qBP194SHhfBsCodgJbmSK1Zjhaj9nmLgJbX",
  "key5": "5aJpdGstZfsZGQUiQeXSyXqaJbXAhJUJvDzhUcXsy41vaskCrBLbE8ni6W6qtShneTZ8si6ccQKFcptFNH55Q2Dn",
  "key6": "WQug9KMCfYU11PAnDkf4EHs76d4ay7snVadnjSbvHSrN9FUPjAiHtr813gu25C6tPkjgBzqgiSQ1w7vRgmBgH4r",
  "key7": "2eMqA1G7pfNRyncPg4NJv6L6ETmxHvGPNtxHgcmUmYCfe6pGqGdkfsnHraPWYXezyn4j4BRXNERwKDtjEvzb4i7A",
  "key8": "4yS5jTYFVQHGuVTmazbiw3rgryhE2TP5CrNr9F643iSWdgqgDAk85tmbRLRF4hSyCYJMsBQyE7wEYFiyqTjuUiAz",
  "key9": "5XZhURBPDwXkAWnv7PZhNgxfoftGeyTzHEAQv4EJuZkgv92ex5YQnQS3WGuw6HjLzwWS1zts1vtGoY8gBLDFdCH1",
  "key10": "Et1NHVy9FTqtD5hUm8A5E99bNhnEWVsj3Cou7ijCDpVw7vgiBQ1FWLLkkEF22rNy1ZcYDC5uxkHceSxVbZxnzBG",
  "key11": "5GjCX3CL4WwgLwPqswLir9YTVzbVEP7bbdL443xD61h2gtLwTrdkGRdY4PgRSdcGVFuW7J9GRxmpmR3jHa9rLBKA",
  "key12": "5msyNaGZk5TRToRdeE5Acx7hPr27rvuBiDQxEdiAjoy8m4aZ4U9ffQQwkXhnqNubHck5wpj2UyFWTB9UACGhAdR8",
  "key13": "36riEcck9eZeKyHPvxHuRtTkDQBgKFigUhtuzxgnySm4NFeCyQ4QDq4sHcZaWLqKharNGbvwKoctWcJuVWTvtD2C",
  "key14": "5uV5Hcfmfqk9SAxqcM4oALCr24euwWSDTRZ8E7LJwDjGAeDRAKyMB4p59cDnNbGFGxf6yY6GpaceE49wRCMZj8Np",
  "key15": "o62HpvREiR4WtAio5jT4zyq1noLBfKbp2Fsb66yedVnqQWuSh5qUbzJHxFKJjzvHc5ic7CaqidWMsA4QyNNCpwt",
  "key16": "3NEsS45C5AGCFXvshniuWjs33bZCpwCoq1er7pMaq3Au8B9pMtDfGu7u8zf2SciSEjfRkPrVseGWiER9mKgqwmqa",
  "key17": "5sU1JjsEpmw5V3XjDGWhs3n2PjQWhdgKdWjxApJQHPFYJubwN8bwVfhHrfRAni6RQrb9V5zf5vRtbtF4rZ4spfyF",
  "key18": "2yJ6g67Bj58LBEnw4e4MWD355jaMqNbqS4cBJohsKQCNfZMXkWES5K9ZJd6YoNQWJJoYjszQXjgjuqyKVyMvDUtD",
  "key19": "5MkCifLDnVRwvFC2p6kdiUK9ptqHFkitrhCFnn4uSxfZ7TgCqM6mXAaHLXJDCNMjLUuaLCiY8KnR1Dac7dojqxRX",
  "key20": "3J7fuKtXi7bQdywZyntW62kxsLSia1TzWWc4rmHX5MkqKXTAhGCyLoBDvfntPLrTB6s9FQY4tbUkqMumBs24ZVcM",
  "key21": "45zNc4HDwL39EqN8ZeuM8aaiADptHvPKjV2caMdyZE6H5NN5tugonqSyYHXg69b6jBh7rYuZabsDYdSw4nKJkRVR",
  "key22": "4tBhz3e3Twj8FR6yFA6mirZoEUoRTvLWaEUqdKo5nN6xyBs9Noy3tYLWsRNUZWFmHAyHryJTQsYFVAXWAM3JeoeA",
  "key23": "f3RVjZDBLdNkgkjWbwYHWLttR75zDFDTL9KeKUAiLJbHAEbQ5kb4WEC1uzfWn92Ar3eCsvGVsvXJ7pkjXgTFEWR",
  "key24": "2uY2HhDDC91LnMT1MzkSUHR6CyC9xs2EwRWTaT3cdsefoEoMDudgEpyqBv4CdAk3dckpXCZPH4YscW4gC5GdJSkP",
  "key25": "3XZ3buHeQTR7rd92iSwub5fbrS3CkapPLfssqaFXFKaiFULf32fWj8wUwupne5j2NVrHLAqCMQmLHmZC8ZRFYKSv",
  "key26": "3E2vrkMdHzq7VAE1FsVRUJku4GYDCeJ223E2T36BUbJjF6MnxNaQeKbLDjBVzUPGooLLsdMs6pyQbSrcXE691ejy",
  "key27": "4TfikF4pbxH5tjpMnpP5SdHrXyxGXAKof116ARHSyPMK2sqkhAxEd35LRXM6jp7gq3WQwy7GDei7f86H2aZYExuX",
  "key28": "4nNcvmDGkipLur2KJ2sNhJZihBFPm8TZWKxjVVfG5SJZk56awujSQNzEpZCfndinpyZUACrKdBhuHJWC27wLdedh",
  "key29": "2gLk2Np2yBUtEthgXWrimQ43KKUW7Nj1jgSG5Qf5yRUJRAdGyHhS6VXnQuzfFMv8jYQN8Wtjpsvn7sDa5hmf7edm",
  "key30": "2dkmRoxHz1th3DvSu5HPnZsp5d1YrMK7UqQywNtRxUAjbtMCmd5XNcEA5sXstc3v7gUoFJigZqZLpuSBRXmkaYGZ",
  "key31": "43QA4aiU7LvZx5reFVnSCEKRbrnoib7pfGSfPeA1gbQUhRRD3PWbQyHD97Z52wdaMGFVJdfM8rYo8f3VTYspMrE1",
  "key32": "5Qa69DjhvvX3R4PAfXZa33UACHNeNSnZWV1whmxZiAtN3zsAYkTUm6hCPuqC58i1S1LEBJadKYV7UWyZAZEbAQ53",
  "key33": "3i3jxD9rBsskc8jHhWDe8tgp8QfJ7gexZKUnqTAjJ2TPLp7jhbhg95aRJztCmyogMq5PF88YBEar5DKHy2wAbUcW",
  "key34": "NT6oFyeiAB3VKigDsSF1hGhucpGRTqDvyxLs9qQ37hqq4jF8ewsoG64RcNYzvG7RPffUi1UWi6MsQz9Roe46sXw",
  "key35": "67eDtKxN2A4scdrt7cmvFbFQtmKj2E7LTuLxqZPpFnsFyEH8Vkdqe866WNzhCRsETbR91Fo4eyW1acNxqtfKqWjE",
  "key36": "2AqsYstUiQbBBxeVcvrHb4iBKZ5cPJRbnJHY6yaAGNAxmhRwHGxAiTGqRP3jtzGf5txmXEBPq1chv2DvnDwnG6Sz",
  "key37": "4oTU6V1fXFrbEdSkwu64k8NMHBLtFZTz9FP7FtPBrWxXE6TSqqev4sKpaUj64niiT8ZWuSqr7Qs2tw9VWhKjk8LE",
  "key38": "5dyLrD8ZJq5VXzfZr4HAzvEBmBiUEqo1g3iJqKL5KTqbbTVy6gK17gGeZ7fqdUi4XQjvo3wT6sBUMw8o9cB3pdQ3",
  "key39": "3ADurxMDc4Spcv4Yh9csUKmuvMzUjXqWA6FBMbcbRU9Wo1tc8ByUAKPGL9KdcKBtgdPjP8rCm8K3QdEE7snHAegm",
  "key40": "5zXFGqpcV8TkTMbxRkENxWvxwuTeRdSSyDVGL6AsmXFEAL5MY5NoCu5FKVFtr5cfPd88zfoNdwoy4ueMg5fJtgPr",
  "key41": "4oPU3KRM2eReA2MXdeM8dtgxx97SLaT1K6afabxoEjEDReE8Tnpo2aDZe6XbCCH2D3Px8HNeaPW3B5c8QB73RSQk",
  "key42": "58zB4PZmmMqF6CFMJohJ3E3Bf9sft98UesfSR9saXWq4Qp7RybHxCJZ9LyAQ6zNWpBJ7mX6bxXdrNLfHwgVtjQvt",
  "key43": "4UYFWAc2RBvFvvZE1tz1qgC9sARiqRjZievGBs3e5h2rTC9CExbAk51Z759ATSxYzhgis33b2sJJcnqSmNP1vd4g",
  "key44": "4qJMWt7Fu5tLmCyeK9gZsSD3qzKRpHiLa2FMPVxv9vNduqrrgziaeAuGnhfhoYTS9bSMuU9SA7x7Vi33ufjXgDFk",
  "key45": "5SqicGLDtktbA7MBE2WcNPguSo8Mw3wKaNSwoabpCdtJH1QaNSXwCsKTmk4nhnemtYAtjtkBWo6Xyd8MkJnjSyqH",
  "key46": "u8DS4hS6k9WxCs8tukuiqY7bSQApXdVoqcPhASe672BARbZatkHov5R8x5p86hQMPNBJuJoz4hUcKsi6J6MPKEJ"
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
