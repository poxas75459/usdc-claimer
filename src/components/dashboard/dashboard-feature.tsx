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
    "Df2xLuXh1eghUbsZ5aA1S1pPgfsiRxFiAugSSnJpKLUof24k9XzSBaim67i7Y44oBmLgddBRtVcqsB2XTT6846d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jBdJk7yMZjQoLCsxxpKhzub6eqsV9oFpe1cqSomXrjD4EgdivYuTFf6SeFRriifn7sLwLp3DtLvjtiGSfWGJfu",
  "key1": "j3UVVSrtcsQonissgMS1U8p4p1ppheQ8tyBKUxSQGmVt3YPDXF7yjuSMbjHfZEist5vuGUNsmGWxATkmJ92Ti1H",
  "key2": "4Np5UEz6CThsRYjaHw36hwZWxPCMe6SoQ1fQRktP5R2HFrG11ByktWFhJ2skQ9rMiwxSRfeJg5bRowqREcHN4Kdr",
  "key3": "21oEAzepUna8nmSKXtkibmgw5ue3qC5fhPWxq4Gsnbw1tZgbQCGmeNH1qCM8Rm6eCLeuNFatxJkPdZFXxUBdpetX",
  "key4": "3Cxo1rNCaTedinPpM4Bhtb3KY8m7Uxoi8JCAhdwEWL1NrDvSHkqgULCnFV7bajF5ENtVWMDZeM6vbt3jctG87tB7",
  "key5": "4P8GF73SA4LyjVi18V2EjDLoKnpoAirWhdyBkxcJWKz119QTjJdQxeE9FpavRFPUt755Num1bZZiEXZpLEWFzEmb",
  "key6": "4GRsKNoipvwcfWS4QMSfjqpWngMYgSkUAnv7v8xfZyTBdgjeozsfRZoQE8cQXirNpnY5sGF2vqtTpBfXgHjmF6Br",
  "key7": "X372wFCQQ2RWsEegqQwrWTYMxFs53kSPQcUuxMCoL27W6kf84Wvd9xtPbbpJ2EHMDb2DtkDafq72W1q6ym1rLum",
  "key8": "4Yt9aqYucVibQPVbFADgseSMuiYpGiutsefa8XN65MpMFToBPr1LLU4AFhNdWJaAVfr1qrGT9h5TVi1SSRXBmN5m",
  "key9": "4NRdkVeQy2E1pxVQQtSK7HC9EfsdFN5YnPdrDvfF1yq3RnvAuiTPj4b2oQLNngaxh8tR6PpWBvqdoR7b3QiJbBZH",
  "key10": "4W1jGe28PUnL9CMD3jnuedTe378mogt3f7TR7gTme98Y1wif4EVSq6AhybMUpPWzhhvj3G7MFmBSaSfxPoi1kSuN",
  "key11": "BcB4tTZRjjdGhA3MV6Fi9t84QHsEwS3MqkrZ3V92WyZMU7F1aqujSiShMnni7aSw6UNjNd2DQBeqbP4LEyAH4sY",
  "key12": "Pi6TDmXh8AcuogNWueFVjaxDJ5c1N9SKmm3bgV64vcydnnyTbLnJYq7u3nJowNhX4v3zZhZXNTpJEg97EMarDFW",
  "key13": "3dYMWxo4AmmFMZSRcBku8k7cB91tDSGb9hapjbkn3xXkMzD1D6U5zuDFM19wJghDfESTkbSsC6Fj6u847N6phfSn",
  "key14": "3CNnta2sq5DRDerwbj9j53HiSkKeASRwYcpA4L5LesjNEuPhcRcF85543fgHS2drZfmAegxGuQg8iwSL2jRKpUPh",
  "key15": "5eggYk9xVU1g7jMbwSHVBMMM7nkX7vLRyx3Y6SxC5eC8v6nHj4d9W12DG4JpfENzPETi1B1D5beHnsNZ7nZTW326",
  "key16": "5Y8zURF5yoKFBen5QLrmgw6gd7zLQk3FyCGPSDSWqVnNvzbUNjWwTi8QqmUHZTnmotaJmUVRBDZSNsaqo9ioH2XN",
  "key17": "4zWpZdUqmiCboBMPYzfxSLAjVEaQrFeTURYrM5aDExx7BDdfAtzDX7BaUjQMGzubgkf7fgj62HpgvXZh1Zpqtj7D",
  "key18": "5uotS9DR6nTmW5fiWcLSg5ZCzAfmusEisfrGAE57Z8VPcjSUHk8wgsVGiVgFvN6TrdMzinUeBrBrP2CMKcU4eRuH",
  "key19": "2uTbJ9F7dUnAogizXJWc9dvVu2A11mQ3n9XM4gsAPYAURXyJX1S7T8bmKeN7fDkC1i2wPGSy63USyD9eEnHFXsvT",
  "key20": "2T45Z1xcdV2ue7ni3tfrBufBfH75o1T87X2dyqDMCKjrGaRqWDsF2tYwF9G2W4hpthb93oFZYBX3m3yiNsxbFMxr",
  "key21": "5maPgeR2sDdB4NR7RuY8FxLiMSxK2gDFoRHbPEZrv2SbxFw5BG4v2amx7X6DNHS8TYmFeBCifqruTkCAiz1RPvgy",
  "key22": "44w6JV3LkVnXTJbCWuJ1cYe3QS69aWFjsKGvfwKtfspUqtCVVFhXYqznex5tQEpSaPMB8uGAvLrdC73sou1wRjnq",
  "key23": "5hj7R2kd4ifbLNJNnwhEx3JZCLbAusj43w7EuGKH42R4iq7E7GS3hBVRmLM8F9StREzzQoWb6pUgi55RJgFX1Ydw",
  "key24": "3xTV8jex32cFqRGCy7YTWXnTEmkZihkKtTiCp9N6vJJAwPENFw3is5bJfo3ThKD8xs2ue5kDqFWAntVu65a2Nv5T",
  "key25": "4ymbQuCD4uihuvnkNZSr4px2QZR6vkM9gVtPVKzws8sAT2dkvqArSmybCgN3JvAnbhGgXvzyEEfDove7mDXMRhAK",
  "key26": "5qS2iHx2HuQFdVSgwGoqsfswYTx1xSgCjTGYntZckW7uNArCbMfMi78ZReXmKmpsGTzpgdNsNDQmQcWqydLS26eg",
  "key27": "ZUwvTjHcfjLfMsPcRqvGztDy4WDjADHx3jbRNL2Frt2J2pybmeq2cmQ7189kwJ8HVwkyzvERDVaNqkNj46MUBBw",
  "key28": "363Req1PhucfyyRPZAany8mRwLGvNDGQribvFu56YE9a8P3cDJcFFYjZQrfoN8Fuy2zvZDX8119jLYbcYDHbGtjw",
  "key29": "6ALzXocvJn8tmFrkv2KJfDyWR1YB3sTFJ7EkBYLDk8ECjnM64FQU8gskQUVNE9XGTdKbeQ4erA4rYFnPBwUmSkk",
  "key30": "2YHCgYqEXeSx1LPGU1yQjwKuGkzAsyAzNPRCNo9WHWeJ9QYaqHPdDcToNDnUtiK9KXrXuVRSEEMydqpreWAUHuor",
  "key31": "2Yvt2S1rD4Qz5xRnCMt7ymnzsjsZj8MKMF84RDtyy4WcGiKGxSiPk7oY6AeEpbbDM5CwpV2CWRJLCy4wFFEFd2J9",
  "key32": "5WkttECsDhEn94QjZgt7FBcnYTa227nQLJicJHCm4wzsbFvEWDrvgSdC9hA7rUF3StoU5645WTd6NJ6pwDbcndis",
  "key33": "2mtpfLchwXJnxdQieEuJyMPKepLYqujjRfAvUNdERWHpBneRAmwdRGKtU9kpZBTCFHMyZffaxS9UGGTiJrHuzkVM",
  "key34": "fMgpJ6bLQch89miMpcMHYxJtfpMkiNKXpYD5kuYHiiFq3DKAwgRAf75oCstwB8ZY2gSBks1te6N9mkHo4Le7zs7",
  "key35": "3R7GAmQJCJyTRofzsmNmLT5spupqGytLsxT33bS9k4ywfj8ZATnm78EGxUbUVbZ1edtiDTfLgyhZ4KjMti7EMrYQ",
  "key36": "5e2jyJowMjkoQUvz2GrF1h3h9xhfXRkELWSeENhQLNA3kFsJFVgXDKxCGTaDxDznxJeiPgE4FXuQ8VBK1JC3W7Ft",
  "key37": "3aMEX1CoKpvxqStFZV7pfvKYo2tjbRjFazV9gKbcHeyDDEKsE99uCj6t8reUzng1keWoz2jEQKuzsRH7iT5jvkkx",
  "key38": "3zJVWrjDR7N5mTfiz6RK4xd2EXky6CKc8UzXrP6dQ5jBgaDBy4k5gMhfszRn2kJB1YcaiNtvMnfoVYViRxVUZKfM",
  "key39": "e2pX7m42wrFvJtPsU9NhfKUSJnqqeQHxLMbjPkvkhb5iu7uoEbQRbx8HXJri4tbY31UnSW8yVSDfoQwxemWwL2w",
  "key40": "3WdQqhGKBN5Y8zZ69WGD1SPbBu8yPNQWG9JEkVXPmQb8bCxs75d5fursKkbW9qCH51p6eoGJfCVCpsWp5UF5cv3B",
  "key41": "4eboLpA2DAyKU8Bn4esMJhg99cYXU7fiNQXZEWowAbjz2uChKXzLTPM3M8noYhnuFx7BDn3y4rYhaKcWUBVF12iP",
  "key42": "A418aRJAssuQmq9CRMdh3am9wxVekim56YFD9KrLeNhSrFVjsYjvUZFbh9GhSGaLKxa7XQQngiKEm4HgkGnwco8",
  "key43": "4HUszupcKDAq2uX45hSCg6mPbggG6pRbD4i2vnU7HzEx6kBS8GfvnLswLyrv1M2VURWcb5n1MJaWRRMUsRKGeWPA",
  "key44": "3iuVm7jDSJD9KmYwtgwW2xfQoK9UJexw6kadpaXMeufhgEL2kQFyi7BGGqNQmGfrni1NqLqbYRz8UnqhuWZXsJ55",
  "key45": "4sMgHLL5TLp8EDVc2boiqTfrxLytq51D1tPWNu4ihHTNk4aij8uZocRzP1R2z7M179ScpgM58kGAp4e7dvgn7L78",
  "key46": "JyLy6WsR4LRBAdfPXdJkwx4xh1WkqGzz7dCtkYNMwm9pjte41kCiymGN53Yvpwvtc49aN93VfKnFEpxz8SHWb4h",
  "key47": "5Z6i6LSFsSAwxfVLupCwwgG6PgAbgPeZsKeHcsHH5QAX2Ryf9CWzsjtuJkE126TJgGM8LWrA1S9qxwjKXtXbDgXq",
  "key48": "2vLgo45qDRK7N9LTvzeYJcX9azmo8DwMf8GoiGs3a1owZ52WdG6aDK2DHQm9mJecYs2ZtANDUez8kobcQCBkh4Ug",
  "key49": "5VkDiaqhJPbuUZAvvTn7RhFQzHEefQM9sGcA1YjjhP25XtZKXH8wWuj9LC2bpsj18kdquS1GjPSH4zhfNPgRHH7m"
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
