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
    "25UztBrXWtep6idDWKA2HiD5MJJ1YT2MjEwB2X6YQWTiEQQS9jvqDQevf7m7si1XPXx2sHoSvpn6Z5ZXAJymX96E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvjyEkJdLkFMWn9N9fpcQFaNRZfYNvwRtigFmdmeZNPusVH71N7zAkW5GdN1YDvooXMNmTqjA3nRTUJpmsarS68",
  "key1": "4f8WJtFNZ4U7qKTsasyFmcrfMPcPe1GFmWwD4kJ915s53kp976N4SgHfotU9WZiiTvfmmP4pgEvH3sKULVosDMNN",
  "key2": "d1UrBtrjgJx6KBx2iUVwXkgVh69b9Q86KuKZitfeESYhK2rHpWF8wpmgsYtNC1Gu1sTi95HV7TkKBSKre2ft4f3",
  "key3": "31QBiPhN2npjtgPCyHYQhjkzmiJ7MPt5Z82yXeG2KLyDpR72sgyFi6kkQagtnuccNsL1konx8Mj1qqJpNTs4aqhL",
  "key4": "5oGg9ZEzxschhDjZLGawQ5NrmdnV3nk94YYdGGYpZyVmVsApXFChSs5szdEbbv3Bkx4kGKrguC4cUmj7QPTdVqEM",
  "key5": "UmCcAHNBuNaAUgVWy61gaUL95nQ9tUhncKgQfL9c3UrsWQrGijpoPy6Gkk5ng1SWq95pEbwx5BqAmkTwjqa8haS",
  "key6": "2AbrjoFuxQQ7qzLAF5SQbCRi8CBvmeE38Q8qFdE9HhSmT9FTKWfcZfjJfbo4k7sL7XF5dx8ffAuXrGufVQfaSEup",
  "key7": "49TvbEEaBtTPAsLR5FLZgLdXZRFhzyeARSUz8fE3313WmtXSwdegNn4W42U7421TJM4vUhC9vXhedveo5ctugLfV",
  "key8": "5kMh5o4Rv86weQ5L4F4hQR1GxSV5wbeyPcQmsy41XyUXq9Ww1rZ5rrcXDzhaVcdMkc3FUR87dXzdEDHNnkPrUp8E",
  "key9": "3r7qS27CbxZobpGY38Pm5AVwq6rvLh4j3eeKWfAvHsx8hzqsQi7axttRqD1pVMy2wpdBzKd67RFsPdkTeRjEqQc6",
  "key10": "2zzXgi3eSuFr4JPBsEeN3WixKsCUhxHqPNisw8xSFMcBcHrD1r2ctoHNyLDM9cvkNDE6JgNwEEhtGfxkYeU8Mzdu",
  "key11": "YDzKpRRXtEj5QWjX3HSk14Qy5qGA2Aii7UfX5awQr2MAqcyjjq9xHEW3nHpNUZ3kRNqia25fvrt5TupSs1FWbAm",
  "key12": "4pq9u7qwWvLKvD8ZPx6ANUx9sEc7hoadxedP9ML4qyMxFGcZsLjW27KmTAin6rCYwW8wARmARhsiPahd3oXwLyA5",
  "key13": "2DGGmrKuraV5ucEpgGXmPTsvJBcChepksqKExadpJ2jFK6hMdsCWAZas4UPo9CjoSqtfQZVaXHJQfC1qrc8KKfXP",
  "key14": "BZ8smza2puZYRDkNowufwnm9nhoAXBRRMBDcsbvzpstbrTZmexMiC3RAKRitF3fWYwwQ4SMBJWyrMBcegrtZ4mf",
  "key15": "2j6nnh9r5QxSwRN39PgfDbfbQob5xz8B8AN9De51xFVVQTi7J1PN5Y3yVWCVXwKUJzo9zAcSKgFnzf2UQPxoWak2",
  "key16": "2KYRoe4uLD5Gym3Cgxh92uvr1Pce5wMpmMWqnhSeTata1ii28ruCwjNdZdGHrkupWSFM1gEHRnMVBqwQgByDFzJo",
  "key17": "rNBBopvDVMBqXE7YjEYntdNRQN2tSaVd6aJLcdFoH1iGFRthxrvFrEHuXzUDsj15nrhwUXhLyUpwbivyDNKoY1o",
  "key18": "xZJ5WD7f3pZxLf4YDneQ27Duz4LhW4VGuJDpfwDGLCmrromYAN3RAgkrEo2foYksq99bsTr6TdjKJyT5yCknHkC",
  "key19": "3cpmMNdfHWYbgjQmncdHyyNwNFMY3od9eCq2ZFiKsYWawAwT3jpntQ35iMCgVPMjaH3J6qXnPH4VE9G3q4Cskecu",
  "key20": "5G9hLqdYsgTSPZhmK6cay5PEpCNJucAnK1GJuHwEzLGoRiCoe3iiQhAM8VtubM5rX14GhSi9kVqcgcLE7wzd2y9G",
  "key21": "64XSqNutR25Rq8CFPCmAGKQgGfLpZ4JsTtfm2gWWrabCzPA9rLLHrg9uqvw6qdQ3XTYPbfMLTnHMJ6ghhNSmgSwX",
  "key22": "5KoVNsK43kUfq6euhGfUt5t1pvtNcZ9FGBRRxet9cLWeWKYeKS6P18N5WV1NgbYuFPEzhNWViPpNNRU18Vdjote5",
  "key23": "2i9f1xf4wqj5im8ZC2DsVCWgXZy7n45cGQjdtcpmJfHxx69b513CsiPCx1CU7mq9T4RD6VL2QWabpNqXjBrcPpjH",
  "key24": "26LtYztzGKWeyWJ8MejLVMZXCo5nbfToTnFbAqVANzr5YxHRLHKsTgTjb42njKsp47uHLgDxDHkMcq2qLaXDB4z8",
  "key25": "8V3icgKHaJ1iUWpk8PPXhBkGPJneuoWrTNneCosP7kk7xpH2W8mAoBJ4jFmrwTeAmLM1MAKrrwuoRfwMQCk4LbB",
  "key26": "2Tn236cFb3jwLehG2HXFCLeAurGYWkYfDqRjWoc4rb767ihtJ9Z3MqbmrVFfbGhXrnKG97JTJW3jPKE8xjPw2vR8"
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
