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
    "zgixNC8zWj3ci7TAMKJa825tLha7ucNEmo974JsesRPYhfJFVmyVBJiNL8dCEUxwenLgveXkv7s3CShKExhFuJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHnKtmLXGfWp7XhxxFKdYnWMctvdhF3yz3WGBezaHy1e3CLYyrnzhcjm9pXYNAEYVJUYnHa6MwTiuxoFaapKqWo",
  "key1": "3GV26Qi53UE2SArA68CntGutJaLfbAN6wpFJgD2fhHj7UrUudNe2qkELQAimmS7iCisFR5oiG9TFYRrb1k4io2du",
  "key2": "2rSLuLtp13JGLPR6AeG2vKY1B5jco3u8fRa8z9pZGPzeG4dCgSDzWcZi9qsztQA5inygTshQYmkSpPapbZGUa4MX",
  "key3": "qVcN9fNtfwizkYVmDfzra5jh57Xd9RHcsDo6SDceA5aTCe2q7KWJgFVr3iRYCJ4pvo9gePz4iGMpK6BkA3WZipW",
  "key4": "5waLvTmqhbfkDxDMLoGeB5fNuvq3EXRdijV4XbnUtzQdL1CF4jhmarWAPDEprLKSbAcwfu1XNCDz5BWwmByc9tVL",
  "key5": "h3mU7qVb6tn85K4eN4Kn6D1Gu5Z3KtnCEdVYnmFj6SZcTv2s5ZHRqy645a3qRsy9v62Qth5tA1QxSqe4ARCYiZ1",
  "key6": "2u55R3oh5g9bsPqTE1CgCRWGQU4JzycdaB4H4wfhFR9dM18rionjtFtspR6DZw5nX1EqdVG6NG12K7epi8DQHc8a",
  "key7": "f4WHQZaWHnNsMn22eM6Egj2zMppY1oVBwzMv49WLGHzF72tSEF7ZqroJz3gbz9vbBRe6iV81Ub38puxPSncndmU",
  "key8": "3zjFtDHbiEkVbKN3JuQwWofK8Z4hJh4xboiqCptn4vj4g2DeZxuxdzMAuF6iuQ8iKCajLJSLJPSPQizyETcR4XA3",
  "key9": "5fduYRuixd2DVGmUkmXZsEqgYYBEWYUveP2pgCEPpRDqkS47Wc3qpsvSVse4E44GJsdNDG9ZbSvUfsDd9vqTNC3m",
  "key10": "2PazNfzE4jvVG8ppuCHaRuxNGUsEe7t6RJShSNauTLTUjEBHzwG2M92VA7tcRLcAhL1EFRhWacrReEcHc9VQ6g1C",
  "key11": "5tojXtmXW5vm3DumUfZzRadvAWe8NSSHBnQi1UvgVRHsRVKeagAy3o22K1CAo2W7qMTns3CT3djaXf9oQpLGdKdn",
  "key12": "5b2KpBdj33k7NEuUpc13BS3g482EATwU8x9qve93QjSRxSeQeyXmZziWoPd6rPHSy1w5WZPccsJpkRGY9ZE1R5HZ",
  "key13": "3y95MtuHSb899PLaMUcfoZbMc4YkRM4gyHnqgVn2VnH23VvA1x5xkH5azarQdazNAdS3WQx1YVN9uSMMeHGSinpZ",
  "key14": "3QvMoco8cFSQHh6yCoHKBrGUGrHVcLPwFQGtCoD1VRgJDR78Axbt7Xo4jg1bZ84xowCVVekST82HnokC8URYWXmp",
  "key15": "2VyN4W19asWWHFtkz7N3wjLyRhTmcAZgwQh9SupTxPn9KdF1TzmtgDU7DXkwSEA3HKd6j37Pyw4CNrt1sqEMsgta",
  "key16": "AiaLpFyPbVCYEiMKG3SxbCF8ybJsr4t8tUB1iHBaJgK6nJp1Ln85iBf9G3b3dJRNcPrgnT7LY6Vu5xdMq2Jv6zR",
  "key17": "5Ev7ofaRgYq13TwNvHihEcsJQZjmdtQfw9rmDyR92VpbRYeNVa6Lmwo22qkhYifqt7V4xMw8ay4cdbYD68UKvukr",
  "key18": "29V7BtHfL1YceGwJswXUvUdeYhuFoENd2TMkr5kpXtdmm7K3MPuci8AdGDoATRjH9dfkv3VLrXhALqcqDozf8N39",
  "key19": "55qsuuDmBgBXVHjMu84jTQhvcKt4XqUVCNThiq1tu9aENtz59jbgH4MkDGM6jkrnhMEYue4fHtiFMjsquq6W3s6w",
  "key20": "39HUwMWZQX4kLyrYztmJENDTJ3e9R6wUydVgZBgxgHK7wJ4SfRogMykm5Nz8wfj7K6xY9ZVU9dt1byJniggkZCzQ",
  "key21": "66Men2go9cgzowpQ4Q8VRiQLBrynjxEzwVFzY9YcPDSzPh5YpCQJeLbdzHEwkUPeUuKbNvMEhQ2WDRDsvpPxzhUf",
  "key22": "3FJXYHJcQ13Gfw3ySQWxY66FXYMRvyFAEasNV8hsDHzXPApYCGhtLUXJJPFEmxbvWKtgMb8SYt8Yypmy6nr6CXgo",
  "key23": "2FXRxXFHvBpaoQ8A5SB9wpEUxDeMYGS4X11Kqo8PA8rCRacoHyeoKRJgeZYv2RDf5b4sVwTiGJz7W4UPheVfWkhT",
  "key24": "4c2Sspd5vykwmsPFEQnkBCgYEVBwXg3tPXwaA8g3dpkmoUgwATczswJEHJDfnQq4nm3aHFLd9zJCadn7fMRFTYAS",
  "key25": "4mJCu3i3kH2dcMbKqD2JZwaor6EJTyfe3KBCE2wSAQBAQNyb1Yq2gZM71mHUv6n6UbkTKHJaht8gAG5TBqTBymhF",
  "key26": "2gNxc1J26Zu6tqMkkobDeYTPN2iSNVJj1j1REnRFDH91AJ14LVMXp4rkpfTtu8hLvLJgLYkvyFHaeYwfhsh2dsQY",
  "key27": "4eT3GUnnYYGbQDgpo2XeJ9352LVvqa32TWF7FtmeSw3Jkr5kh82Su3TzYkBjepHi82vVcTUgj41784bcgJXmHGkk",
  "key28": "44c9SFqFwQH26rq8DFr77m2RcvUMpApH3pcN1g7TqaEzjyb3RUUbVyarBbgdvM1pSpD6z1UMtro1H2Y7MZBRauPr",
  "key29": "3knDxcN4Kaxd3bwW8VjftPS9N8hsoAaicrUiwysBjSaupqAGDiMx7xDdfmPYNCmEqoobbUaUFRE8wYL2Hm2d346L",
  "key30": "33Jmta4AiSPYvig1Qwojzm93QMcsKL83NhzZxqiWq9ZdAuSgEu7fU1x6npF73P8pUVWHxSa6GmNSV9W4oQXheT92",
  "key31": "2cwxTkkmKzoyx3LBPYm3Hxy6ZbnNB32wZwre3FmWMJGFGB4syNeUmQvE2qJHgBdWFEsGQyTA9dHvxWyjx2DgaVQL",
  "key32": "zM2sT7iyc697cmqdRVAZR8dZfZTLvrJmZ6XZ2Ht1AQNyWV4qHrSTHHTpNAV77xeMXkyc6tmftuU1Sv5TS5E5WqF",
  "key33": "43EujZrNMawxDppwXeAyyh8bBauuoQJkzB2pNLvKAPPZPrqwtvFicPvFvCJccTYCY76jEPXR5aGBUCxmVF2dycWa",
  "key34": "5hvNPPitcAf1WBTMGWXy2dctdkBr9RpeFHbd5G85zDbE9tyrsG4USvhzHACngu1QM16uFobJX4o9M2WNYjLFC42K",
  "key35": "37dcyhJM5d6NLTXoCem1DRVrU8tZytyAh2euJjqhvvwLMzHDNPZBfGciup1gSKn3uwaGWi9JWws8MtLzbAbxGLTo",
  "key36": "54AuN4kAeDRBfPiLVPhC85pf7g7d3FwDqCKNJNdVzs7SnLeCQAUG7N9y6ghQ9F6D5HVi7p17jnr8e9skPmuy7hAA",
  "key37": "i3xrxutsCjVXGt7h3YvNhDD7aA8pHjzj6J6TJ5CfwcbBV9pfNc8ZKe6CU5GkKzzxypXxnLUykCPr1qzxn4irXnx"
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
