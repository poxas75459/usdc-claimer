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
    "3yAAri3W2sto6FY22hQMVuiH63PMZ6q337HUiWicCaho1pxD7PJXLALZaJNQisx1kyBMt3yNWsZedWy6RVUkMo38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Y1vKgp1JBMr7sc5LQ5PeQ46dQsT6MvTBG2K8nZeRGERmuubhFiL29Ut7vEm6FEnw3QykXiZsrCiBLif6tmrb49",
  "key1": "4775Ub56hMpQTpZGkYWmFXy9N75gHWuZe9kFtVZo64rMR9YSP2i9KuQnWL8ErTVPU4VoR4LaxBmMQzvShxiaDpbk",
  "key2": "4MnJXXqd1yDBxSS8v6vXesWVJefavTVsrjybXuHXSeBh5oE9mfGzPijMedJeQoxatVwr962dM7Yjwu4aHmnDegva",
  "key3": "YagE7SZRfT7e59gcZntRugsJu3srqQ32mvFxcAd4KfZSzLZfL62xc32PanUMdn3bvGGbdrP1GY9q1pLqPXeFbUq",
  "key4": "2czjtiBJxCPJ4shY7Vh5teZk6Hqynn24Q5cTMwy4Zz9cp3rcd2JLbiEZGQv7yr3xL4372hXmMiiaQpEJpu6Fy1SP",
  "key5": "4t6r6yhYYDbbvbnVZW84qyFAg6TgNVa7X4DmsoRXnxPYi7rUnMWDHbkLeeJTCtiUTc1WCjcFEZYykgZwQ3vRnhRe",
  "key6": "4nN29H92bqnZ5zG6uC69ioBytHGBQCAwGq5bCv8XxTnCmNK9nMQS6zin1mQkSAvEvK5rShQFGTFicgUz4fvejURG",
  "key7": "2g1toxnLnbPrQ2QwPJqC7asRwzqHdpeBEhoHWgUEupMXPUVWHymBnLcEqf2k3jwDpJ2LZ6BTPkMC2QaAkgJikafw",
  "key8": "cWZWEfiVEtAAnuWjzvU9ssWgiryatvtMH9w6XchfjjmPuVcg2hS47G6CNZxPhLms6WTENJ5paK9r31vRSfgDB3r",
  "key9": "4Mw6fMhQ5F31bMuGThJsgX42b6AEoY9hABcPfmvyDcRxPHNuMxcSfawJdcA6ZC4v4MhjXAUuSmCVVfUtE7bwCnga",
  "key10": "4ZdAUepDcSnVyfTCK94APaC5Wy357bHCZvP615BKt2farN8veyEcPER4zm5Sw4D6E8cSZnuinHTygNscpxdXhRJF",
  "key11": "tDLLhujA2ytfdyN75AARfsr5uwT2wVz3j7XiszuJ7uKYxTE4RTwrbv5ud9LZLmyHdC3H1L9YZoovJJGziffsYoN",
  "key12": "ZkNVanW9PXkJS45fWLL9TyZP9ghwtWZFXZo1RQhGbDadr5h2acfUHrnaMUdn3raNgDMACPna7eUd6mf3e5Y9QWx",
  "key13": "jiNN8uVdwKR8jTNEuj6xWxrRxERJMYR7TnJVLazqmXGVeBAf4JJSkRKsTtsrDbNLohHYDLBsa97k3UMuGgFwqNf",
  "key14": "4921d6PxJNjmUxLgyimffTtvCk3Jadt4GEW2pmxkmnjuzJbpEBwQ9ud7JFzkTQPpXz3dLMCcCeE42o52ezM53ZXN",
  "key15": "3MzAM3BG5AeiV4R7oR88V5Tz5FcHSXNvQBgkfoi51tjNppRDEfp7PWLqwjCBxXhndejjkthk4NyuNMzee18w2WTp",
  "key16": "5oPLjXwsCVZCULruoGDYDvTU9Q84RmihZCv7KeQrrWjgqH4pmHxtarxPqeQh288CExHXxUk742Y9ZA364ZC7qW4",
  "key17": "4yL9rrsLtreqSNuqaCgQqdh5mU2kw2fDsoMBVERc3CvPtBWPmRDXFqeM9tAA128zDAXpJzh25Ms4aPEN35Nc98SH",
  "key18": "gNNqZQhYDSm1FCPszaTKx6nxmbTNPGTTLbAkLG2TgZLXQKxmbZ5zCfPHhMaoSdpywzPDpVUZWF48a9APudjvNgh",
  "key19": "5knrwFDuyRE7vregVh8fZo6mLrq1MAziktE4f2X985LSKbPUV74QTzXipBkjrcJS3RbRhU9HWiBM1giQ3R3bB9rP",
  "key20": "3PQHVAHQ4XbAsr3Fr8McigJAgY2vqbfZtNfGfQjpHz1d54XSNeia9SNPzA5ybsoJ49E7PWoiyPJYv6AsmhQSgLpi",
  "key21": "4aoK7on21V9NPgzXViJ2bFt7wUE4x7PRHsRBC8kqBxLozXV5dbKveGYZcmwBvB1UNemsgkLk11pdwmVZQLMTZ6JH",
  "key22": "38PcbT6DMwE4p4hiHYFhmwiMJv9oWf64G22xj6Pibqi2BTXfA8GpoqdGjDGND5brNtQP7AtPQ1ZxEAQeMVXxEbCx",
  "key23": "4gyEbHmAChJUuCbhR86hCaNhjVKc31JXpr5MttyuVgKWiUCLEVnoWkRDCRZPwbRdXzp4d6xS1RMXF9cX6X6PhLsA",
  "key24": "uBpwErnEEtWFa253DojpSk7BNBRMtTwbmopwTcNRC6aEGgagvxgouYxVVDoWd5QP1gdzdeZZFjMb7cZraaRvGw7",
  "key25": "TigYgFksHmQb5rG26H3gh4UBGR3BukCR3Strebj71JsDhkaJ8vmAxog5TBAaG2eeUnSu8J1b4fdgjacj7cScHpG",
  "key26": "rNmbKcSYTvVgCV7SbfrjSeqVQZKVH9cE8eFRoKTM8FGt93XXiXaJutNCxj8YbgDSumt2x4CpvBDJAVAu92vmpHC",
  "key27": "2RDB8Q1WZNjrigF1AUHaKQiNv4GmV2JxpfBXXvojwC51GxNXeJ9DCjQtuz4jQ37hGmraYMhCzQdB9dnyWFzWxXa8",
  "key28": "5LRFKt3LsrFV6C8wYmMRZ6BoG1Lj7gsajcVkXvEF4AZXGeAXWim8eRPFQVvSQsjLZ2jgUAdfp4jzgzhRRXM2jtiL",
  "key29": "5PgmrLv75nKFrpmn72hamcYUn4htyC6o7qh3JeaMeHwKYBCaym9V5ZgHrJMSJK4bxykiCCB9fejoSDiNDH48nGqZ",
  "key30": "28GqD7QuZxMGEsv7o5mP6HtAcmM2YMyU93yAwaaRx75sDWBgNZshHCo7RBctPF1T5fXimyFtuDovtS6Mv3mdksyn",
  "key31": "2C1ecbVSqqCNaC6zykhuECsqABopGydmDVUrYMDZDQGzRavNa8Upjfj7mPFVFZ9rtPjFtGKHfWYXnLPZ9MWNTsam",
  "key32": "2sNZkYWDhmFa8Dqt1aFsjqRW4EL8J6DBiEUhkcHG6v7RZcwDxYa4qVD4NCe3TDuwcnLNj6pTUHdTnLVtPzp9YCMA",
  "key33": "39rEfEPcziKe5YvvaXcDisKHHCs52m9Su9puBoEHXq9H1mkLxvZxZazZcfwnCak9LG8uAXoN7viZozzAnVWpGpwk",
  "key34": "2adqcBFK6gXTPossPwV2b9F5Ed4M2quvUWN8gi793hgUo3iMoWHKEcyTBFomVwFDYC9LwUm63AscjfcPRN8auHUD",
  "key35": "2JhH8oNMTMkFydM8NuzJdfTPvyBvr7Pd9cYz2xLReh6a5phMo4BJRsKMQgvC5cR9C8i41MYjPFAV4ZY7jyxtckPE",
  "key36": "2xroPGvuWQpG4UJLKBC58eZYq1soCJ73fichH3kSTRTa7h6b9J8TYxQrNbT3kJUPXFhD6M1G9oUbVQH57VjWf6Ro",
  "key37": "4LbXZiTdCS9mn5DxXRxYTRSWQcjbUshMpbCjZC4Ck5JHbh1rXqyMR9caTxC4edxT2ysJAHK6c4WesDBxFpa7PFUy",
  "key38": "4bfjtz9rnUtT5128ixFsYH27EoTcFKbTaMnrLpowpV4yAokXLcNtkGYkZ2dnz3ycTqDzw3WiM2hw3chrm9iW4YuN",
  "key39": "4MwGx8L6fqXupsxprwcyaBcDhhrmM2dbUD7Edo1M3Ja3Tv7dA1NShSqCfhvEzbiixyF1LGs3ieZUegjANYs1vXiu",
  "key40": "42mSLDYhik4h3H3znv8fpxtGKsZokDQSpM92UJ7nCu9SFdc2rdEfQqP2sK92rbwFQL5oCStJkg4FrKJumHtv8Ngk",
  "key41": "XiQofKP1Tt3gXMN6fV7mfhiLEBUsQpNR6czGmzH8CxPdQ87tSQKkJyotXFWibbWbKMu43YTR9mgjtqnqGMx1UAz",
  "key42": "2wAgvCDhVC3hV1rJyybTUyfuvkvnPsKARY5dkEcsw8219TBjKbHrurX5eCTPRyEik3EqiyXMLgSZMRsgF2GYmFSX",
  "key43": "4EHXLAvt3tms1wNJEghE3UKdWjWYBqkhZqVV4YyEZzDB3sfEvHZs63Ra2WgPJpfTn5uGRsuCJhntCavsQv9LmKpp"
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
