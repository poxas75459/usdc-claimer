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
    "QYyUV8nrBLXFZPYrhjZFoPeb4DeUkyzqz5gDTD2Q2oBWkJSUhYMRoBAAbM99jQkbQU89XicG2ZapLtuRhKPG82f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ydi8Ex12kTtueQCPFeKTqLqX4WtYstshNqoN9P4C3H1FE91hnBg1cstKnunDexWUNJNMcMVR4kKhVeJQzPKDvpZ",
  "key1": "21nMnrrm8tLMAbBrWY5JazxpEu3dBKGyRQZx7M1w1SDfvhNY8SJraVR5Cp3mXEuJy4utqeMwwjMgYcyVaJ6DjeJ2",
  "key2": "4dv3cGuNb7UjveEKrjYMrd4J9hGZvAFLVUYmNdprreHys1waxEgP54karz2gYoZQnwPR2Fte8cQRYrux74M8MPAM",
  "key3": "tgEFtGtqyk9jFTYxj2KgHTtHUGYMkrhJLPU88sUz9qP8r5DfAcpaMyUeAwigmdXEKvpKQCebHF893FCwTStiKRM",
  "key4": "3oMZnas1HpvTTNUtiMwDFVtc9BfJRDfKMdo8s7pgkzN5TmkgunNzQ7TUbJX2LDyA3HQWGd5EJe38wpMhwagxeAAB",
  "key5": "2pb2s9CQ8X7LYWRJkTYXDfi5jLg7FbRq5KMt7F1Yi8RUBsJQVsoSW9r2yK35uJMx8MQvnk4754sbkHUQLR1qrM4n",
  "key6": "T3fAoJathrmfComwaXL21pux4W8n5rjhrEpaQT9qBHUgio5SPiMXHvjgi6VJwFE8kzUUEGbuQJPUHoFwmUE7oqN",
  "key7": "5cfRJ6mme84SnyUsUWsgw7ZXEiwwVg1BEr8DgzhNhQwMKHmpRwnj9AFdtsBPVqvZxh5TJU8xqqgkqoQomQQHu8eH",
  "key8": "5GR1yCKWGaF5JrreXNiqFJXptZ6GS5vtdSZJXJABHWARAxA9bX5XunK4ExXxwVpKYF4JJKYiztvzqZCjhBrV79KG",
  "key9": "3XdahnNigewY3hwifABtqGsvmjKfjqjSijpJcSa7mg3hmny8BE1wJb2VvqHLXUppYcsRzFNaFTPMPs59uRNw6YEd",
  "key10": "QDagr7QFgPmSTQrPQaNadL6EFDgrJihTxEBdYQX4JgnVH3CPSjJkbgqiVcS3wzDfyuJPZ9UZgExohjUKNoTiRPs",
  "key11": "wSNYcVPsuFCUa1w6J1szUdZ6DQaEV1Y1VARUdaH85jX9CaS3mKx8bNyEWvLPVmLh2awtECsS1PUgcHaehds57Ps",
  "key12": "2BbGHczACyfrokvGszrfCjTmZZxRzR89ebWViVtUCY89UYqmSW1qU3oKLqqEnAAGHbi2b8xv8cADa53Fzgo4qifi",
  "key13": "EUt6WXnsMbKxcskJsoAf7hjg1ChB24iyghHsu5sDn3y911gs1K8vHv7heGoSWEgPPX7es2q1y65FBiGRK5HTfJe",
  "key14": "29PXaj3BYPfWvQqDDtkhHsXki7qD9wv7aUukiTCybStMQZFTqDWZ8xikGrmaEeovV5ms1xmqX9dWRJCX49o5T8wq",
  "key15": "u9cSXRdvy14iksX1ZumKfEdVcjYpQExEi184RGQKyHk5idjcLLu4ka3oyrZTmqVN3tvmzUP89fLfDx2GXjm5XZX",
  "key16": "4xx2igMA7yWBCjMow9gqsGqmegfTUGQEvff5kz2kY5eZJWnXfTuvLzAy9NAdV5wGWPN2MiJ69hWEFEmAUabXmaXQ",
  "key17": "4L8foHzB7RBCwVQryrDMU32SbY9TfgsqXpmUXGG8ka5JNFFWzDtvKG4CTFXHb9LrrzzXoHaPHUmS59aw2VAEFybE",
  "key18": "GrcK33Nfi73s3My2kuZKBus9fAr5ohxa5BgVsbiGN6aCU3iUTVeTRisUKZUATZJdEBvv8NLDmospEoivBE2ba1R",
  "key19": "2JZ4wuUM4t8oR5i4UcVyDck1GYxBCZx6t2fBzcSR46Gpu5XRRrLQ2Y784rJe9XzZoPmx8Uwc1zkdPcmvzPEcbAPW",
  "key20": "5wgsGLtyuMQx7mijRc7tH2LuWcetRREV8G2gRdn1XsJVZqPCRCxCaPyHDmmcBBGUyxEo6HKgoV65LRn8dRj4RNiv",
  "key21": "4oPUVgnnm9Ko6FFmwtMphV2HP6yHa8apPk3mAmArxF5q1SPzuwZ5XCcXskqJa4QoKvnPf78vKGbemSxTRyFuk4Xk",
  "key22": "4XujokznM2coqbZ3PrbbjJ9W9n97oGg32V99d9MoYsMgLSQk75uQ7qBbELKYtqvs8JrbPYVSXhRA4AobFV8qxCbE",
  "key23": "2LebdyC5UTHueT3uQnRtA8ty1cyGWvz7XjtMmFxfXDacEwunLyZQRdKkXb8DW4NPUm1Tndqw8PcjmRnouVU1joR5",
  "key24": "j4azaeZhTWtLLZumdRQuVGpr9T9Z2UUwhABeQ8aMfb7NoozZQHJqFo2pHqHiYQbPjGYRyXCqN1gM23dHDRoSGyw",
  "key25": "4e8wVSoYU6Q27kqr9CCRnB8SzpWDQ2EaJ35uCd39n3iPrt1SUVrMV98QkdSytgQGFaPQdwsLJPSfpg7BRM32WkJC",
  "key26": "4dEM8HgqUDGNiDFBPYyTFttFfGpQJeCP2PWAvBhm9B1MHt1fur5hJW2Chd4pBqZPxbFW44WEQW6SDujZwVJrUS76",
  "key27": "5DkpGRex7GvSzhWkDnmh8mShwCPhmNeqea7kQERA2xHoe94oF4g7Qz6xszwnKsWHdyPVfBQ1sCpNfRGVBNMJ3Rx5",
  "key28": "3bWi7viVot6ZJxt6cPqER3199viP8AEkDdsbMGgYMKaPXBDmpdzfNZi5WXrSH7DVNjghch4z4dTLnry4zPHVhfnc",
  "key29": "3TLSKauPr6a2bGafztGdbqBDS7ngpFTTUxND67zV7ct6avDMVW9tuSCgKsAKBRNWDjHXBZVXxrhcr2thh7URNuQk",
  "key30": "4f442KVRXspn9HH27viYugtsxcQk56Xo2bWYQko1aSrUsPV5Zfk9qo8hMDUwsJmeb9xCY3JWu8pD8AXVKa4HAhDw",
  "key31": "3tvdf5ptAp9RbRQZx7xce7r5pwGbg64Hfa1nLvwKtpNvKPEsMptTzEZyniNZF3kx4fEVG9tMF13tUizyPvMXgH4e",
  "key32": "5Jm2VsEKy3wfJkuNoNiSjv26xRxMBsy9rXwXMVhUbEXYjL6fQ1W18Us7waurgjk4fEjSZQk1cyrrik4obkGGq3yd",
  "key33": "fyXpEoeqQn3gvjXPsCSduRkXy3NpDx95kSCfwLW3tQixYv6crxrtwdMSPAaFmFpQgFiKdz8R1awbkgvCsP2eaji",
  "key34": "3TSiTAGoirFwoFAYQ7UbUyUMh55HXD1LeFYcXrWb7jaeBGurK5J3DrQtTC572vUVMYWvkNV457wKkyzh8RRcuhwh",
  "key35": "3QXwiWXXhRbUK5LKzB3sA5ePtd49MivrzL2kQwCGSNgvsYWFi2LDtFJQ1nA5KvmVRyGw6r6vPx94p6UGw2LD1fKP",
  "key36": "5p2aboaFRsNeVeRvv3d6mjkoPjqYxHX5icAAz3PR4tD9Q28Nd3x3uvi7JCbHMfwCi5DdiS48ZLtSsw8J1V5o3EV9",
  "key37": "41TKLayhCuT8YY1h3kmzqoE699u2DQEGVEkRGaQRW9Q9Tjwtin3Kxnnoa3c18fnuLwBzjFfEQVwuQW4eJWCyj3dQ",
  "key38": "3ycjm9iRDb86SQpGB8ddnwA1qkL7PKF1PLnRJP2hp8APFSg3hnv7qdoUhwT3pHuHWa4bB8JhEJMX81Lqon9cFtqZ",
  "key39": "5zTdx2VzHgBTzJTfnyWAtRmz8oZbwENTdqt5v41yMWFTU2gpvxC2bYeHCjKEKoLGkTXcL71UF68KnRebxf6GMdeY",
  "key40": "LPJKC2sdnHdNCTXKWFzkV5hznJLQ6Fr2odk7YY7M9QjDBf23uTH9Dk3HZrKPJAHbGr7958bqa45x4NhBySy2Grn",
  "key41": "2eqjV3grHqPrkYPru5SMwQwY8NhgKYrSXoNREZsC1R4vQTKPP78GHekUWEaq8eLUryKsLaEDP7FjYpScmhouLyqc",
  "key42": "4prGwBH2wK2SC9iRPJvRurVCta7hKDHna5NpaMqCSybDtJhz4L8MuyLxVNB59vVDs1AxnQSrePXJLQ6ew2iUki66",
  "key43": "4DqfgicZuE54nWoVwfBnnGPTPQ9rSQhT3UcTWDZGGLQsDqWhFcMZKzFC5qM5zWhhqZDarFEn7iAAqpnAyWSu5s3s",
  "key44": "4GXQD4FGQbR2CQnsVViATSVjxQ38CmqeFFzuKH6xAW2Q7XiAbeDHiaubwuzoht5D6TUJ177ZzhNbFLcQiT53m4bm"
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
