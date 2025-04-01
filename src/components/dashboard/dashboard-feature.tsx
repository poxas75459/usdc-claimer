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
    "3rYr8uNdKncC8aJfsc3tZB3BRkLnmLfmfZWQa4HbeQEBayQk96k8LCQpRcnhfaobY3xw9LHfsfXg3dXJLTggSK2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vu6KFzPc41UkqEL81ktQNZF78qb517vv3uR3mLKxYgVaKdU5sEYjT42mpYcPiRmiBXwR3EMNpytZucSVZYHnsRL",
  "key1": "5MPenxyVPs1NiodwBa3x5V1NfMMznMjUE9JdyL1HospdfBJLVeLkn65YS9vwSAbsU3dZm73SQTvbzBvosWLbYHEr",
  "key2": "23dM5GXrLrD2cy4WG9rkXGn3WdkFjmWw4WmXwxfs5CZT5NYEuW15JS3Q2GLSUy97haAX2YiXCbtgLeX9CjaLJVA3",
  "key3": "3AqmJhNA3cARABfTFM6ujP5JLX8xVF4AFKGS3GeBrGzCjoz1NQxPtwayGNc2a8f12M9icwZGSVzZYGfhN9cCCX4D",
  "key4": "29Twtutr3TSb6Mx8qYZbHis68MdGJnY78vY5RQymo7GVaMsWWrTk6b6rQNdmneF6gvQiQg2J3m24yussCTk5i2p3",
  "key5": "2xj1xDb3rgXgFzy6YZARSw9L2HnoaTokDJwaEKRyw13UbGiE2Tk1gkiDXbu8DBYxnDRBLvXUFoVMzrR3hVJQGGJs",
  "key6": "4rF2sFod5553cV5JMoR8JpSFSvBKKazKgs2TTKdMkJ2XnWVweWZCSw4s3BFSCd1dWx8gYdtAVG8vDKqeDomw2vrW",
  "key7": "5HcbaAvcrkADKZ9md8GVTzeskgTxfr6BNFmZW8CWiz1eqfC4dkY9LvDjoa3Rd2JSLNMKr3b5mPaCzNgRJVUJZSF3",
  "key8": "2cYN1yTUR7PzPQyKj3N8Dq3fnJv3VYPfjfBFUcVgq3Xk42xq1mmp34GNqk4HicGv9onNMtPy2Eeg7wfRpwWyGPA1",
  "key9": "3SrBFkdhDvEP5Taa1SGnmLHxPEurURPJZz1RTwdRGks5XtgwyTao9QM8dMLS8yoZ2GyhXjJPUCZSZ6jFQyKjC3Ey",
  "key10": "3FZirPr4rRqmH5Hj4jsr7q1SwfQZew9yTy91jb2Vfv9auz3N8Y28UdQ7Re6bP2KQrCQCb5ZSQxRCEGVHuyWywND",
  "key11": "2PXTBk12b2tMrWCMQgNVFXEmD1fNoQzoMtwaxFwRddgcvqQdKeb9bLAAr857jwM4pwzx5RWXqLhJT7naAJ8j3PRr",
  "key12": "4fWq5XjE3D4UpQHNESA62xBrHC9Sb9zaZxXULjPZuhdCWoRtB2CCaNx3PN1A2k55UFXFpjU7ubf2WH3ZeVZ1MWvW",
  "key13": "u4HaXdoCitUfK9p2W2MUZjDnTrqii5F9Pm9BMtSMkmBNyS1stVZnvfswAiXvRZ932GJiPjn6ytP35Z6eFsdxiPx",
  "key14": "5v2AVGmsZZzfRt67pcs4DUNSgj83UyYrE3ggUcMt6PSumwr6Gum6z4Szh8wrKuq8aKnEGfGynQRGaRBywzay8Tr1",
  "key15": "5Z92B3RkfffMja9vT5nUzXqojrmwM4KSVoVRR5GDgA7awgrfJBYmrAb5qmxy28XKaZg7Mb66tu5RF8BMUgWMiHH5",
  "key16": "EBw8LvtJTG1BKwzBitRzU1J2E4oW9pmMWsDnk5qSweG9YvF8aQxrfo1PtiidhKdanucjtP9MAdgGKBPo8pSDK1G",
  "key17": "5iSPpt5ys7koos61a96GyNSZXyqFTv987Y1taStXz9HJj58ybnSYfzVK9dHWpiX3ikZDocReZWiMi5gdbED7rFr2",
  "key18": "54sW5g2aKmm4ddYwAc47Da6zBYyDfMt4PQ3PB1wEK3ZUF8A6T5J4u4X1kTpsFuu7CCYxV7nFafD86TETZfJyE7zX",
  "key19": "5yTAMxtKDu5DVYLgHWtoxESzEKFB6uYCdQCEjmuVBZwECecvuwiN8N5aEhabzQD7AfxigFbNLfjRpAzYGp1hPDYs",
  "key20": "3kSCE48S1X4oZP1gYT4NG8DXDL9NixCFwe51UsahuZLr9558hTqw25sSHK94XxTMkU4vaLHmSmG9PGqKfYGqjXur",
  "key21": "nyCYkks6v2VbFHxcvZ2Sa2brbq3hDJVRinrTZuGXUwuXzSZD1H6XyfryqiE5w9BS2wEhakH5WmSU2wVybWqCCRH",
  "key22": "3YHj7miGd6cpfQEsPJYnqmNCH4gEB1zamECMXjJMax94BjSXK9PCkaf7scaRB2sdx7B3PiwfN5PchUWxfhs1sVDF",
  "key23": "2DVrBZwFwpUqXxWAJEXEbd2ozyEiec2RoqVichr46naEpxW5oKPDHiBjqsw4CJ2cYZokJvgnBiFDLX1Now4REWXE",
  "key24": "4HUSnp9821BqA9HHeitJpGtiQ9xRZVeZR3xped24ZbyeiEbDKyEExSVRgkajSwdiZQfuyPAX9MbYEYg7UsFoBBLa",
  "key25": "4kzReJ8MULETwWyNVvT2CvFpCNAKrubTaji3cTptsgzbpTJwq1SNkPcKSCkjtiwWuALzjK4NRSabrNw9PgBmWf7Z",
  "key26": "4G3iUsb8NS9FCJhoF4V1Wefyfd7yCx7HfPxxRCuzq8Hx56CQ7hfMs1YyXRbUiBXwMYb3DYoNRyS6XZ9Dnw1mTfQ1",
  "key27": "4dTJKjzHGPnBNis3m1C1ekavir2kgSVSxAC2LFXusFNrTuh1PcZDBKvc4AUHfApUFqJ2JvomBNVHgq5XKrudr2w5",
  "key28": "2BCQcbo2LkdUMsaprGQ9NEMwTxuWNXhUfmQCe47fnf2RznjCDnGaRtGhEtQRATwWLheu8QfW282wBUzP3Qy5p4oW",
  "key29": "4znhtAYcotuFaPKxxvBico6Vn4oyUsqEeWJWt5igoWQj3EvY5KYcKzPC9RiGScWM1nTrs3fQfv6DGYm81neQijmz",
  "key30": "2txwKmm7DXUPxpUTy1FuDDKgsyoQCWcVwKtRXf6zGQLd6252DA6UZ1CskYjqDVjvNGmXQaPnSvxKBVb4zhETTdjc",
  "key31": "3oe8GATMAQcegBgXXwKwEeyT6gPKwzkSf4Dh3zQMzLt4jGR89bvzZKf4MnGXpne172bZ1B4Qf5n8scoBds6jgvu5",
  "key32": "4Tm9NA9AnEHt2MmUuHjtyJARdzY4WrhaKMLXVfqSx4RAgZinvdYyuUW66E8fXVDwGa43cBZGtFUWwKFuS49HqtBB",
  "key33": "2WUmAzhp8sfmVmGfxYKRfszKqAWarzByEawpNUccQLwUSG8GgPP7NoxmLK1v3iC3M2s7GpU96ghnWazDDQkF3Hpa",
  "key34": "5uNWvjQDTdtAfdDMEceqsRF4o7NPVjiXQTfa3kckYFtG5fDjNWJApiCkb3zwWA7pgxwiYwAnsyifBFx7J5mkc8mW",
  "key35": "ZN3g7e2AW1Q5hNDZps219V7Jo2WaHrKUPAMmpBoEib5oqtFb2zwZhaHBo1xjDXp5KYNpJcpsFnqFNSWQn9Qiies",
  "key36": "5YcDHNxUU3f596yZ9qFcueYEp2Ar2z3Rm4H3jUMDeD8JaSGYzYwZfipkU2jbx7TSz4gFbEpLg4AX3K9T4a6gAutg",
  "key37": "5VUmvgmfHbHKuKJBbYkVLmKm6NercURVmgXk3rmFXUAFwy5Lkghf7s4dkmsK5pwu2vnD9uTgBpqW65e5cmgFbpAV",
  "key38": "2t34xvHqbm6ZxMfUawHHRX58ooHHLBpXK13gdcMMunuCQAumtCMnH7TAYLPBXCJVQ3vnEbfNiSf4DsZpNkrRi7tj",
  "key39": "4z1k1yfnJAXtLb26WEAYmxeqLjSE3HjzJYrvcFPH2P52wwSnK17KFknEYM1HARRzKzX5z2i1X2WDnRkiUUpEGwtZ",
  "key40": "2hoVsMirPVqFJub6rnhCn78AmrrbmHoCUFwUAtpFww9CVcoJbW9BmNpRhcELw7zoR9N9DxsHgzZRFXa9pUjaLub5",
  "key41": "XVtMMsbJYJtQpzVRQjtPtVymiuJ8SP7imSZ8iHCdjexbwJBxZiMWjJE6oAHPi1A99LV4E85PJ6Lb4DPny3P2bFZ",
  "key42": "37h9cZYRxAXJrg5ZEH73s2izLdPNoqATpp4MXpkhgEF5HuZ2wzZczzysmo5w1cvSX8Dmk1gBceyXDyh376XgGi4G",
  "key43": "5cbNXbYuCGbrL7TeHCbVo6EzKivLa4iURiFssvoWFMNVaRoQeTY1KWgoUQC2xN3Cah4bhJvt4cUNc84VZYX9ii91",
  "key44": "4WBQG4tv28KEcXmTuVuN5rrPj1fdcsc872aV1w2UMzNQ4ecpxeWmRVrEakPJqm2rDutS7BapHbugwUVcnhARGDvF",
  "key45": "2agsjiit3uGrjTucbzuYihcJp7f9T1zwytNzHduwmVGeYGuYeSBVLiqQS42S4j4pkYDG16cJDLcvE9Bt5c2r1VUS",
  "key46": "3EYu1raBtKMUTeEZGBSbQSoku5ADYUMURoXR2s6JyzCSrC6KbYkH1cy1RyuiNzy4jfge3kyAJuD78LaCmx9NiJ6t"
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
