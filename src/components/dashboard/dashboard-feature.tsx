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
    "3KvNs6ZoKGsezjmgk5ENbgJitVEogPMnjCiaZ7M7PBUdH4MxkMBCHBYREnHP1PSwRa87MxccA1wk7KQYar661tCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVCj1CTCiTWhtG9it13bqATL5wBhgYeijcaGCjSQteEUUNDjEZfVGo1ncQADyAY6HtaqvixpGmWVq6K7btNd3Bf",
  "key1": "6Rtq74hLnmcgu65R6AhRM6caN2bXEFuWgVqv6u72K5592fUTegb5fcv3WdJaUDrFrZ7CXVHh3eKAhQdTRQmcLvL",
  "key2": "5bwrKBVhbX79BnzFkfKdHW41otbAkzwVavJkAyMRbuH2Dn26nhHq3UGmsd4x1u6MQNvj6U65bn8jHauYYF2KaVZU",
  "key3": "5Jy2nxEuKYdEzHhBhV35u368TU4FfoY4jayR2mkDPjRGCXRhoV1VWNAtbwKwP7bAoM8jvAgrF1kEMWzDQcEdmxGU",
  "key4": "5YqhTVUY3gJ1Sh7YxneXGoQGrWZywgfsqoCjVUqgXDELQiwvBVT3Hpn1rmdRpoCuvGLCNGepp45g91Zx3sAYmtcP",
  "key5": "Q16G3UQJZnwy7qZJPS4orhQhkEB4vgTWb87MLDHZgyjrdApcXs44Rn8Wu92aay7z1q8pWk633JmwVUNaYLbgnBi",
  "key6": "5RY3u8x7MmMeWLiP1kujNm29XsG3Exzk8UN7rEi5qs7FmyNsFQRZ9tdphu1swczNWYVzitGjAZ1EXe6m4sWoiuc7",
  "key7": "2YDzdHu2u9Cy6LhFeeaQHojM3vK1go5VhmkRxwBE777DjdmTrTYXxWeJR8U8sNwVJarHWM3fVsHCaAGK2dH9CySk",
  "key8": "5v1UJeBWiUGfyvtg2b3dyXyMqJ529o2Y7J22ZEqAE3oUFQr6XfEcmwVGeBBirSXFD66ikdKwgPqoKUHnEzJFWY5P",
  "key9": "5FTguJypQFzHrs6MX4da47je5QHdQF34Aw6N6gNqvyKi9soXASYwczSvRNMSUd1JEL9Sz7suCaXsEZxFyFxXy6gT",
  "key10": "34WrT96VE36y6qZ88w4LzM4UmQJtnb171JVRHfHBZ81VBpfcr77yhdHHQZDrpLy4FhvvW7QoC7BZMKLpEwRVAK3y",
  "key11": "4PzEKWJwg1Qe9dXCAFDDueJj1o9Zvr8EhUDDVYFHDdiQUwh1747b5rhTdwPU9o48Pc3Ff3XbPfRVDB3PNaBAop6D",
  "key12": "4HCx4WBXz4xErz97mf9dr7gwFZWcjh2CeLxpUVf63hs63AdrSFM29y2m5jZwcPr9NMyJRWCopi85VjqRc3Msjnjs",
  "key13": "4UUjRhYmwapXGf2ZZ2pbxTTJQeJDLBAjJUrKJXZuCqTr8LT9zcRpynD4KHcGV6WqEAKLcZvrjmVqFbnkCddaeh1e",
  "key14": "2saQZ34zfEWihPh6ABMPHsGWUXLs1XJ5pGGsq5HPFVCCyiMuUhHgo3DdiBvF3fsgvtDDAqdtWY3wojYS5XS32m4D",
  "key15": "2txCXMAMwnAQ8omxFz3hX8YZLb1kXaMcBjTvWkcqAKb4pEZmqK4X7vmo1iCqvTNe7dZPeo9UwfVZWQQ61woTx1VZ",
  "key16": "36XMRroysEDGegMSLc7Aw3NeV3veYgQPNrDAgpYvbwh4JmJ2xS659EGLmzdDifAQcX2FwcGHacW4XDx6n64Xuoaw",
  "key17": "4KhUKBuKSonwnzEGJGE5d7pnXwPf8W3twAoTincCjAcdS3dAprehGjKpoHm7YgjeWoB91TQtP48ZtTcrJdkoK3nd",
  "key18": "n3PWkTFGXha4PJ9Qhi8YYaGiGheqtGF1gAt34mgQWp6sjqHkgmmJ38z37PRFo6edKaBDshspD7ehY4u4j4W8qPj",
  "key19": "4xSEfXnYSq5kKq3hTcgshybSLfNrSHbjH7iTyUoVRWUSB2UFEKbT586L66zDAUca4Wtim3zSbTEmxiorM5FKqQBs",
  "key20": "3SFwrNzfvSax86p18Nmbu4Q6VfEUr1xmvpWm9Hx9PgEQQH32SAsZq2aSHFGUTua4Gy9sdABpjKShXGAs7GNM3yp4",
  "key21": "37GY8ko73TK4xmSjUiJB7RV3z5sakeZEFMiq71BiKJ9qh8soZEtFCWdnNJ8CbiSQ3s8eNPXYs8V6MzP3tACdLGM3",
  "key22": "2dD77Qu2nQmy6TbvzkWsJy4WScu3BTH69KZkDFhvxHpfTGPGFYjURqrpsBpuMpyppPSDDrdQMEhHwjsyzuvxjGDe",
  "key23": "3VcxaTkpBnGgkRexf9nzYT46MKmJd5VtYTYfh89rQN3oQpxSEC2jBg1oCUEHbQ6f2vWiEj94tskZmmQCcwvxp9RQ",
  "key24": "2z5Zs2i5pMUg1NocMqVNK9xvaWEet2wJroYVRaXY3kK1KgAVTdqncPZrZ16fs84gSfeCtHpCtaStchKi5HcZzRSC",
  "key25": "5GUti4qMsWuaDSWkSbA7rJhrENWAz5D1KKKRzLu8c9kFZXmEasFY4qM2E9wRF9aAcXx9mJgZSkLkvwgcWbbnbXVq",
  "key26": "2Qx6DFXK6yMJWbjUejiZp5iJfGPRtpxZSp4PE9MbXxTBjHiBez9PTuCUkXDwHc7Sn37oGwSSofkkj4tApG8VCHNU",
  "key27": "4qS4sk2d1JuAvsTteygv1vsXokTAYMxHTDxih7fGMdx14jqULMnBN7pGLY17d2awKd7AsJNBvKayRyMqyTHRgprz",
  "key28": "4qzfQrNZeqtwNsmEKFBHPikG4Pu8z6mzy8a6kAAYxAeYKPYUvkQMJJ7fjvmVNPkb9Xr4EnBS4LVWkHhmdzpjj9Ex",
  "key29": "3spmnaqae74GkRNweuYZp6S5MeLYb3cfKMryG2qyzpw8Dn12LwSjfCHYpDbTqMiwt8EB1x7N2FoNXvi82pXUuQgE",
  "key30": "4pM1uAW8DGkHuvtDTpuZBej12dZzTBHURaDGAB8KtCGNPaM8vH2Btb7BdGFy3Wi87AMqPse4W8PbhottdRhvLB7m",
  "key31": "5roFrazSRi1sPHbBKJd34aVT2nnbxbLQNiPaikyWHPbwYQ57yju3M2PoPZHd3f3FkRsLDHTqhjGE77AQFDucpQZj",
  "key32": "3MaRN6RhdRTPUyFMbQEb9rM6v6zZFNtR2rkAK9v4Z2xmw4jnuXNqHzSh5LhBTFgCSDnQ5VSTvtfiaV1epW1uEk7B",
  "key33": "5GewhHZ3gZeLBSE4w6xJ4KLn4xDys2Hiwi5Qei2tgrcifctXH9P1jZJfp3VkNiVhQf9GyJy3npyT6WueSEuezy6K",
  "key34": "2m7c5je87trKTLPXM6YufVGTNAZ3fgxSENWwkGoR4fxrKFTEjPRh3bJyALmKJ9GEJAqNBZ3sshk4NrZKoB4JtmRP",
  "key35": "9aCmnMqr7dviCxBy1iHPxeJJ87NBu5S8nb5hLWdevs9KMJeQEngzRYGDWRaAHy3dkkg285YuS2aBNbhfBV3GduQ",
  "key36": "5URvybuz8nkLFdP2N7misthBP1zTbbyLpD7Mr6XMSVbVSg139zunbMUEsUEitSTfsYUsiVBWQtHiMF9mio2ia497",
  "key37": "64bXnHqHdyrzemkYFEwWd3yWsyjjX1VscYbx3TMytuTswQbH7iC6G8u5mF4L8GcMUDTiLwVGECFMzjhEB626DPxy",
  "key38": "9mnwCDRszCuh4KMpdes1JYH3e9XsPXTdr2L5dXhUCJ6aa5wLF6sg8ct1M5m1XSSbHZEinfXsSMYJngF5QjcCj9Y",
  "key39": "c9JwuezEnnrYPNoGpHu3h41eQShmXtBrhYDjuYufTecGaUnuNmo6CucDYbvcmfrHeVrQdTGj5LTR23AqWMcC7rL",
  "key40": "nWyf2kwDeZCjWAv8U9aqkd1bw8h1wPXFA1pG7rwCDK5S8zL3qrvtCDwD1K6rBpuaFcPUtgfvvNRe8NobT8yak99",
  "key41": "3z3qtoyXW3aZ3xuxAUzdTYmNGVGCtT8ZnaDR3CuqzEkTiaXr5vVhMxC4WsZXqWRqnzVWHYh62UqSZKnM2rtM3sYQ",
  "key42": "4LwGsBznT7CVrnHFzmCLip2geZGkmV6bu2sJL6zFf8jJ5mgYkVQ2EVt7x92kue2cJ88XzCKQvAmFrLGrf7HYzWnW",
  "key43": "4M7Ef6qWURcQYB8Sx8gcRnaoWm4yrt2xgr7DSGHC1f7yFJYadHJaBXtK6axagCykNDeAT9RtzfUQyhPgGp2aUdK3"
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
