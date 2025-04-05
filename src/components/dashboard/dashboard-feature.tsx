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
    "4qR43uok4MDYdyzVnHXHzCRJACjdCQrGuUGF7sDYAncnvAXNAFZd6fU69iFe1somVCEwdovWBGDqBXEYoUsf94uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zipLP96mAMd56DtkoTPp5BXPGPjeyT25bvGZXhswoULtEaq4dLVWuuNg13nW9UciyfWT7JUA67L6i6oLvnK9doD",
  "key1": "4Z8e9M8shheZex7wkV45KMgot62uJz3SnGgujH9CGW3TASH16K24Hko81Bq663EHZVd4UNzNX7RxJprxH9jeLCPt",
  "key2": "5jxwhSd2WPxyiZt4iXfgBuwG9qMjD7MFpGeMqJV3XufHCE67Q65QDXtj7SBXzmav15CWAXwJDm2FURSbqezFkoMh",
  "key3": "3zLoCYs1ChpbcCYwSkRq6rhydY32RtRU64bQvKpSL9t94xL52aDbb1cifStFvU3wLVUC9rhHaW1VrZ9y164vSNuX",
  "key4": "3ahbzLqC5Qzokqi6MJ6VKHFozjWncGBmpUacb55oLExeRF4KHyrvs1o3wqjXYooTt8ofxP1W1droFAaA1zbFt8um",
  "key5": "4JuHfXJf8SsfQBy3uFPWUbNRzbMnReNJ4cx21QmvWHFbYs49gD2guz6s3yEQLeKWVBP8APSmmZw1Ewi5pE7xMWh7",
  "key6": "MPrjfTjoM5Jz3xzgmi7XrPgMUnHjeBqMunRkh5mMVtWukDQpb6j2nEjdiq137w7TLjoN93tHAwUKrMNg4dks5De",
  "key7": "4r1DCVBni6578kJeeMG5NLxFYZdfs4the4LxD3ENx6G5fpCueh29Dmzfkqfytrc9hCvMMT9jMqA8CU535rq9MgTc",
  "key8": "JJrUi3hxHotwzuYo6wVFKQi6aUnY7pK9SZbHdHBEvpGf6XYWC1ypj5uR42Scb9aq8tNSZrKc4eUuh3zyZpuuAdt",
  "key9": "4gDabt3NHmLTgjdsFCJ3zHnbDyPqkz6sFFXA4mdYFmD8mtGigszt4qmxySDFf78dFwkroE8PJ8RukQGq5ze3TaP6",
  "key10": "3zfvBX1vXKksdracwLvgeYhxCyZtM7F5LiLLwHcjWENPk5z1Wj7irKSTkzh4dhqe26bYWApXALVrhW5UU3gD3oZL",
  "key11": "DmLqCLNVpTUAJi9HwSVkbBGE6bFkwYAptciG2AboryauQwaeZKCYGSghbLA25f7i19f8h5eHCVw4XPkZymhVbbn",
  "key12": "54q5EZ5xffjFzaykEdeavsJZL6d96RRTAs4Ayeny1JbfowWF9BWD1Kq9eAVvM6rw9ft5RyhKwrso5nCft7HKomMP",
  "key13": "22bMW4s6nMTvuFpBhsU5bCKBg2wcZMdrEzb9cyhXP34Vi85kmSgUdW6kQdD4YDt55MwYxZcMNGLYjZUNqSDWiF7Y",
  "key14": "2pjEY3BJpTvFJpUn3CChpXKUydRuZze6JEJLdRCrWXUqRAGkTAmNG69BuG4khcrG7WZ82pexfmaiiq9nxnBxVDTh",
  "key15": "4okou5T3KsHwcPRefeWshAwHcqbdv2e37LMZ7xFuLJ3TLdQ4gKBLGiQQgN56twU3MY9T9kyANmjoJM8YjkjuG7da",
  "key16": "4CGXgYyGSeihw3KxHCwVwhVTnFZvURDVXP8i4FGTejTeKAzzGiTMoZnpayZYgmST2axZBz2Ji8dXrumiknSwH2n9",
  "key17": "7bMKBUUTv3PmBAivc8JiBnPCWSU1X3wCSi8JXDmuomJ2ikZYiMKf3KPmMqNDWvownbTDnFxzQMUTQAPXtEFbfpU",
  "key18": "2HZXdsiPLwk18gu44xuVfM7884SF5J7ZWYV3rxTYNHdRPBgt3M3UbuNhT3WgNx3dLB2cLo4Ataqv3VWvhAyuSUnb",
  "key19": "3Ber7nTeWx8Ahv2p7MMQ5H2SqqFrYMyNKYSQBUL7gun4ddZAniyL4GUdpQWDSxJUDUDReWwJPMwX5teryfwhDae",
  "key20": "34bXWk5UrATxuhPsp4SpgmGV1nLM8ifPS1vf5zKZcSg6JzbeEqmbNDoyYJ8nCe5uGAb9XpgceNCDSrcHDmAymKGE",
  "key21": "5yikVGSs3aQfZsdoEJF4jeiUoNxwug2DRieS1jbRupAbtToWxe5C5hd8EszoCvkyBjtkdEKKEQ7fuxsuje5TUpDZ",
  "key22": "5NReEppmVuLEWXTa8xYuJrNEL1Y7RMeZQQHrrq6JrAx1ZL6ZzceysXrEvUkFv5TXiwyW9QhxGpTqvHzR6k1B4Xah",
  "key23": "3wFXKwEcdFKnNWx3USAEqM5NQTKsf5AkPwAy1pJ6kzTu3gYM9Yan6U7jF6kqhiZ2cbfR2vTPUSNZaudzzadCeMZh",
  "key24": "5zR1oMpQU9xBBZ1n6sP9ApFEBucH8yLf1c1UMAiyGDQr35RX9ZZLN48WPNV1UUuQG8JnqGUyX5wuoUg83GyZYnn3",
  "key25": "jgZKc6FmF1Z325DJ9UpLjvDN8hZi6k9a5wdYSsRKPWreVjFwCHcWDSUgxdd8rtZfpeuoqhr99nyfQNxYGNbz7sK",
  "key26": "2qEHZDwLuvhMH92MRRZXBK27xQZmwMvmbN6JeZW8mUMwrmLckqvovz4d1mH9vkwpTWHMX4223YFmKxZ7dJqC1pZf",
  "key27": "4RFriXB3Z9sJeJfJY6Lq9cU1y9TfZzTT1H69jBeQAwen7zLF8JbcwchYPmt2T6QGkJ3KjRDTRjxvSoKBW5UyHMB4",
  "key28": "5LbpaECqdbEMMCRwQbETkouc7zE5MgVBdvpuRskv2maHxqHpPnLT7uQKKUeWuvNX3NY2TSStfKy7xwRAALgspeYC",
  "key29": "2EN1q9v4dXEbhn4EZFuSMXquLabzFr92FzhgA47ywqogkCDqDzZ3LTrtAN2Y9W45XHevv5Z5g39yRuyK8HWN21yN",
  "key30": "5myJQwqLSE5QC3Y3XbsNvhZS8q3A29e4NhiJwgk5xZpo2BhHDJ5fbygC5zf6Acaa9PEuKoq7dVJ3Ag5yGvP4BTNN",
  "key31": "5mxuvDGATbDLBcqRyBb3utjKCKPWCKVXcRvVqisEy5Tbw4vH7ZGG5jSJfExi3FnEkQYtsVyby7z73JDdmMkt8UJZ",
  "key32": "axzL8AyxjEtBp43GgihV3n3Jh1EYv5T7RUtypmEvREEf8Nd2tZrR1ApPFM4wwQRQNEtcdwgfEmPoJ4Arf2YHRBd",
  "key33": "iP5m46Wm1nfDTDf4uU7BGQmu5CiNU5KRzXtYNxirfh6ZNUpg8NTTKmiZ1ywv1i5SygHCurdAxY9Lb9uJWjxyW1x",
  "key34": "FnApC2KSQL3LrJChtg9NCyzYKBmeDBa3AWaQVG5hLyPv7UspVCzhc1jJvpNs7mwarmzzhiALNmKMXRuCWmKGPgv",
  "key35": "kb9JrbQZCrj5QGPG5aGMu4uoJ3zJmwxkRmrjYLCECCpqajFpTvef3zgsNKmyZfJQVrV8kJaWENNApqQ5Fi9GHv8",
  "key36": "4QxgK996Sgmicc1Go7uxBxjCtfHoLLj2sGHZFWWftTyiuk7HaMzL3gSXuBgxrw34JGj1ZMkQ67PXf7uNiZjH6gpL",
  "key37": "5Hhy9KYNDTwAtCQx7Lpp7NYEAuT968KVohUNokNs21sMiRZqW53MkCut2DVhVBwvTPucH1vWEJ6R98L7zbE3tHij",
  "key38": "8CAd7ZZ4KopPT6hThr7jVhcLCybNmmFoNzJ3s5qSp2opcB2WvC7tGQdmR1t7nSSmB1iN7z2dMQW6625mNbVNtbj",
  "key39": "646kfneXvdNcXxXfbFuqMr8XbcL7TSvryNA6b4ffP1ciXEmqwwRhW75oprDQzgpL29WGaYHN5VrpSJbVGfWxdB4Z",
  "key40": "4R37MuQHmauWFguNYHMMTQuzFCsAj45y2aHkSknr3uLqxeBfe95PpZcHbi73YddzkuVfiupEB3mJj7gEZpUPaiLQ",
  "key41": "rf4o7RQb2XLm1n9pxrD1xnRqdA1a3gnC2R63WYdBxVW64koGgPNytUoAQAkGe6etnw1AUbxUhBn1B55R7Qt4RrF",
  "key42": "tSBr9fpPPWKmYWSmyfnQUUN4R8rHzubdpM1Ry8PAsn3DmnUhjQ2nYarjWrTFTgtNNi2871Us3jiRJgBW3SNxSe5"
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
