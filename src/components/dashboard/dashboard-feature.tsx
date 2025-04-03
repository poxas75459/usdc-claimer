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
    "3YFRdhoe7WpFXNnaVL5UJXxS9hdPiBMdPBmfsKfhXETdMbhUNZknXQ1Y76r5MMSHE6iexVrzMBa8sgKDxUeydxSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUsd4eCq2vZFemxmr6CDVXwzZ4utxrHbSxseaeEsvEcXPChow7cGYt7V362gSmUag25NjVq2EkKs4d1FYbSuEgq",
  "key1": "3TyycwDstY1YnyseJA8pm1SKRgCiPgbSKsGypwDHrK6U69EANzgFmbUXftoYaXEYTVnPEfu2Je6ZbgHko4suZDrH",
  "key2": "4PRD2wyNKFfnvoWi5V7FsUNChQuWu2bJ5zDW8rLKX1xPzZtbJ9orkwaV9S7atbRTBDh3byTT9FqHKR3S26sgFrv2",
  "key3": "LU9qdPfcqmZaqdBHyiGr9asbvNJguxNztESotVufs4XfsvfSMJqsnewuuUhw5M8aBHsCM6G7VrN211V244bCEJW",
  "key4": "7Vpd6Ec14J1EnKg9HFNoTg2nFB6HwhzhqwxJ5TeEgrDvmbXNh6nMpBAMfyDYZvM7T2m9AbMmb2EKbKcN7LQPjKC",
  "key5": "4hvuwoWH953sRKaNmuR5bF7ikNz2fckK8kG8Zu68rEd75mr2fMHRit7Ek7ggVtk4JvhG6LmZUUKJSv1jjYJruAaz",
  "key6": "3Zo6Ebf7T4SxAc9qpDw5LRxTZf6qgaSbtPoBaFakQ4jB4VizP3ctMMKGrA2D8fDfVafifKdNd1zmnbVKH2HjDAW3",
  "key7": "4xXTQscaNK8rXQbBnC2L3e8ewQQPNe4RLAJ94w1tiwhSH8bmgRT9CoDX2ekXZtsa3nLxa2s2uptP5d7XBvT4j6JG",
  "key8": "3QRvUH2Fh43BDTnDfiobEKndjQJrmXrbsybPoHsS2jhwPfXVQ6SnmDBRifUsL7W8H2SM53dpMG93ptF9CZWrv4Eu",
  "key9": "4R2uZ53gxEb2paqSH5fBrSnDwq944xCmhYDVmTAcUGyN96tLYgEaH3EdqgNaj8tnktYLMw4zbAdeTaxKVvEiSC7v",
  "key10": "5G8Ts7nuGbkQxLFAu2uyGNcfCma3WaNPXtaVK3CTz2nk7xByqhCZYAyeFkxxfCEowL4iNoNChkP6n9XKpaLnMGd6",
  "key11": "5mmUQvWwuDGcwHASGxfgtCBf454aMyg45LLerU4uGgMWBudQu3smTfsLJD76Rc84eokmGfxetNg1i4oLDqYn3mP9",
  "key12": "46V4vzVvnp2VBk3N9otJfV8iC3swdeTxD4CgdsnK2AT3TBcRnSaGFBfcYNpsVd83zTM3pzcTyymXQP9UsH7GsS3f",
  "key13": "5cxevmdfywBtrsshqsTJBkYMWrgkqubAF8GrCwXT3NDXZUWa6NgiY8BhbLiA61mPYTNFq9Ub31VCLTxqpM2mXSM1",
  "key14": "rjtjPHVcnpfD9x6qvP5vHCWet18tH8AVcEnpTDawjQDxHsWRMPr5yGjrymR3sFr1k8sYPegyaxCEVDnEurB9s72",
  "key15": "26pH3snkqnMJMPJujMLStjYB9sSBCS2JT2gJmyP1Bab2EqrRAp3o4UFREYUJ7NdvPYED5uKZ6o8VND4zyarYbAt5",
  "key16": "2vzt7L1v8VpGb1yPLWUQL24rE1i2FU8reRA4b2AEfkzYvppGYFwzA3ovPpwQp3EBvwSngaFwsoR8PVRGMrXS2X5H",
  "key17": "98CSt73L5RWPUggFjXrDKgCT7AjuQTVGQ8p8fdueRsobQc5wd4VM7tbvqjK47rebYFsB9QUzCovBMfmSQVxRay7",
  "key18": "2bW6K2gEqwR42Dqe9s4GURfYc5kg1SBiriYfCVX7s3Xm5ua2BkMJZtDnAP5Hje7uiDsBzA651RTnPD1MsEkHtCPY",
  "key19": "4e52DvsfTo2xoEP8LU5AkPQ9kfkjERD9KiXsuhytofqngiJ7J9BC6pNKuPAcdrRgvaXhYpgNocJsyX676jEzBvFD",
  "key20": "4dTXDDvunX8SDaXPHYzQsndRzwamaxVLeGafZhs3uhhfsKB3SntuzNVGxfciNsKcbB9nJpVHAJ8RQ82s51n8TwGN",
  "key21": "zy7RWmC4RtzCfE585UjuGv7GrZXQTMJq4WeYWus1fkEQBdju3ACryM38bmWgaZEZ8TnSuEkLBnrKDJ4VebviruA",
  "key22": "4wFKjf4dkx9uEvmbA5ettLdGy9CjhvrQSrMEpe4mbhdrfkpebBTPFLTyiJLUz5pP5CryyrBLjb8AxGK1kwhdAuV6",
  "key23": "4WgMsTw22ynqk7bfBrkXn2vcdqBdNjfJnbYRaHQaWCMdCL3vfnAkR86XR3E566MPstXyd8vKx2pLhyGuvnmPf1is",
  "key24": "5G6VFPjppjohWL29aqCPLBt5YQKdUZTGFfbujEuVXbAnurRid7eoZLntux9kDPJjukzu9qjanPyqasEUZFvYhmwA",
  "key25": "3y8GEiewk3jMLBs4AeDc6Eoe5TpBjuKyfnCAhApMv8Dn7BVRpa5JezJshhQCGw3S17RahRNo7MrKZoAesWfzh2MQ",
  "key26": "4am1gyB62WUGgLgZFJPAPB5hWSjasHZV2YrAVxy5TwmMaDNzXDJ339TYyuASutMCgC4iFo3h6LSKx1hamtJKpRm4",
  "key27": "jAzwP1vAogwKpWnibWbtrG4Mew1Am9KBKcPCPrc3KWVy9BNY1pR81dGkkK3mCYjHH51GdftijgREZf8P8DQkLBa",
  "key28": "MUHC1hdVEyLiUa3UvbfCNEaGLuvZeEqQg8gtLb12RepoRkc1VGoMpbWPLxB3YSGWe6yNQVsgJH3GHWcYyJSgz3J",
  "key29": "4zytKgKMNNkZByQkaa23UetjFr3hH64Dswt6nv4jtfvrWaYuEu2WX1ZMyomzrPJR5r2xxhC43znb3TqNBfcgaJJk",
  "key30": "36FLg4EbWKKgtGred6cF1MRF3zitUdaQwUnYm4E2T693pLTG2z2fStAfjaNrx4fUPe49tCbMDxNVsDtkAXmNcHBg",
  "key31": "6fJSEhBPJxoUCx39TgGq4SFhhxDatz1Pnth2dCBowAq5AnWxynfHixuPGpqCyUMXsZWrPGNQ3LC7PNv8dJF5muM",
  "key32": "2wCkrdTrTEMcYFrBeemR5RStG1mDH7SLCeQbreaZWMMaBmN8WX9SYKh6M3zjf6Ytp3A2tnpUphKYu7V6uhVfmtpi",
  "key33": "3RKY56f5iWfedxsRszgH9EQUfAyNbERERnpGcX692jooCcf8We1HqtNugH1DZoptxLXy58g2d8E9DthvAt4wTyHF",
  "key34": "3ct113fQ6yfFQqELMtSHEckBRTmCrGRCrqPdh3WHQ6H3VffMyKVKS1xv4g5BgF8Ddy2HpDsFWjSdFK53Fw562S7w",
  "key35": "4eWPse1G4afW6qKajqbw7aXfHtRRueRj9SaJDkd28uRiyE2TUSAHx1pz5fg5dbPLEEBUno7JFwEYGAmwXYvV4okw",
  "key36": "3FL446gYJQG4EPpR4DfM9aLBVCCifK3QHSiiu3AxbsRAwssYAF25HXFENLhhixnoNip1dt7iXdTUmLwki1x4bQYF",
  "key37": "3Woy1yAd2T7BzitaMGuyZoxQSDQP9F5CadNmyqSMzqht1sNzrSTt4ubi21Wx1Xnngs483keDq4UZkiYAX2vc2dGB",
  "key38": "5n7v5uvDHK78J8CwnzsPmnip64GaDWivzKZjhr8UweqoavrCePJ4ubb8iVZyZyHxKYkUBxjr5edHHo7T9VcNMRPs",
  "key39": "5Hx4edRhu4YP4dJGegXaUTAWVtD6f3QAPBJED55WvxGcrnbGf5cTZAQwBgFLyDjwdfDhzhpwdN9KZQaqM2vb7hwZ",
  "key40": "byDseXbGvpk2p2atwsjVfDahrHMDWtJV9GcCigMLSAorsRqfcZrp8NdTziwJGVVqPj4TbXAt5KHvUeUZp7fSvtN",
  "key41": "4ckzuQc57ccMpMHSzFnZ7YjsoLrCA94N6nGnrgQi22zWcLnSb93haCyRVvLFr8KxxCX4ixA8UvVXkVQA7CBqfWVJ",
  "key42": "63drEGonZpHR7hXpnDZrvjzjTMgqTwbPD63BuFSbmToywLm9mz8DuWivfaHT29nHSQXM9RQn7PsXdTdx6HMhawef"
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
