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
    "3dNAFswNd7og8QQo18YjV9oS4NgsKw461DcspNxQ7BnU6FKRfQm8udBUYfnaHoovfhUre3x6VFrjTiig3bZYXncj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEWtv35WpToVREC3zt9efxTmVYFkfooA4WXyQ3dTbwzPk4Wo4SJfnZs8YtovSS7dJphij4QQVseYYGQpLVKqFsK",
  "key1": "4fXo2ZxH98TiTR4FRDKwGBKDKHnG2ak88WVzoyD9wv5utzk7LuStmEKoVM1MwP5dH2LqErGzTGN1HQ9csdnTQXCC",
  "key2": "5SCzrASjyQZ8VhREZ7qVvWFCSENKaRjAehoqkdVRZW4i6qTankf1zMV2f9niQLjG8iQLH481LoYSKPBaWQZw2nGu",
  "key3": "4f2HWKjNPLTdqPKTjaqqFd5T8tAwAs9KEyPWMPX1neBBFusq9CX6EfeznV3csFn4m3ZiZQWMyxchu9mWMebn3urE",
  "key4": "2BRfExRqwfZugfwMtJHWkT1vHaxpQLWJJH3Du8McejtnUAm9rX3uMvgkdYLHFCuAdqijSFep5YKKUPdPtyUD2PXZ",
  "key5": "2sK87bKyTSfFouGFWnPh3oCbVgr9MuauuPzhVkcQVEBn12LyG6EzeqP69T8AvE2jshY8jqcgBpV9xYLaGjfYjNT8",
  "key6": "2Rrp24K85euvN6cQ5Mo5gsRRRK9ijiJ2eKvfHrp2cKk5VvqeRntLNyAnN2nirUQzEMjjRFrUMgUuzLpDaUJMqQsb",
  "key7": "2oef7P6fBYWBWv8Y8a8cV2qyvaFQAfAa8doxsUmwzxVU6rCS2nYmzoaQToADMprBFwZHXjxeAFDAT9jBwfzZ4RRr",
  "key8": "5MKLV82YvDkkq1UuBj3pxo5dr3Ahp2uutwU84FEhXSvCvWBH5TaVWgQvzaTFQNKxUD4MykW2hAS6Asv8yGQRXyCL",
  "key9": "4JprDfTHcCPGpswivhgi1sVWR97X6SJzZe8rAYfa2yAazhLpZnmQWgqtP1EwyUed4j2Qw8ocefLGgnMiYoEZfrcW",
  "key10": "5oTJ1vZMF7dEW3mTDgLwzyXMri1Pc6h8xXCA6eGqHgAzr3mTdodn8o66xXak4H7D4NtCTUV1JV9nXcdKtbEnQHnS",
  "key11": "5bDmTmHXpR38DYPY5m5mjMB3MPeCMVHXXSrGCFuCd4SSYdHWoxkijgHURZGsHeLBZcmHH6TSm2abKU8bP9vb9vDA",
  "key12": "2kYKhbXzwsFVz6Emb2yhJZLZH677dVfc6ba7XMbpzdEXeM1sE8JhsR2tFFkFDsCkbXxPQ3A2Hf2vo8S9EtxV9g4h",
  "key13": "67fJTAwj9hm2PLa2Vs6YHqdceJdf4KrMkpww2dDpJ7z8Zx2rqWdxbgD73hGk7i9mrfMMmLfSL1ooqtVSjHbvktfC",
  "key14": "5mEEEEqYtXfg5m56FWG6SckGdbSvRSwV8cfMsa8eZZdX6ncrQAuNvPMnogEvYTkzM26SBYHmBW7USUweSZe9RdQw",
  "key15": "2Zkf8MLk7USrTWfN6k39Ge2YCsVrVzZJ2Mdkw2kBhQsjt2vuLeyV4ta7oGHarkfAjMrihhNYVDtV9hm9DjEoxnp8",
  "key16": "2Vt2pdaVFZaD1HFYZuRX22GkzqY4j4ngFC2zFfix4YpziVFqquJPgpUTf3ArAnNCbESY48SA5Gtf15o91rDc1Xkw",
  "key17": "3k2iwhKYnwf3stQo8CBqPsvrkXsxQWLdAH4Ym7AvTXHPcNJ18Nsv4KStPnEbo1MAsAUtuyLGwXHjDWbEfpBGw11Q",
  "key18": "Tt4CcCZ6FEUeqUJduDuLhgFTPqEDk3D1pSWcPSYtbazsTT5i41JfoPLVAxQbmSJJLo1RM62JRxpGkjTXTQCcPqu",
  "key19": "buHiBztpeW6G6WoKzDzoX8CSsdYBU6TZAQrkeZMkj6YVeuxm2Hejj5GqWip3TBBSG2j9h4zd9G8sQdtEapoGZ7W",
  "key20": "x11YTMCJyUqBZfzasV9Mvmgx1FmeXdY3WNYVK6NN7YMD4TnpNxVFanqPLKhMR16W1nN3fiLaC6kiwpuJwDscKYy",
  "key21": "5kfi7zkgBrz8hWahfNPQGwGJracR4dKfzgdGMFWkT172adDX4TNwjr2jbyeK17Hkybg4ZBED9qgTRJ247LMXcaHb",
  "key22": "2fSP2KZuJZ7Ed8BT7onM9s8VVFEnXszWGNArXxUthqy8yAWTfjRb6kNRdCmdhPQGq3CP6xPfCkp6tYgxzmQWNB5W",
  "key23": "5bogrQ1e7LyfAd6Nr2Rpds2zzvGiMY2GA33xXmGLmr42BCxzJt5Xoy14K7DqQLuw3xP5RQshGgGB7kbPL3FFDtq5",
  "key24": "5QoZ97zvvWk7jsXhbqBcpPQFmcPXAAAcDp33kSZaKA66yUJfowkmTLY2CFTJxCN22dWy3tPSDYVhJevoTpW9uDET",
  "key25": "9AJDTsdzAWd2uJwzTAVQGDTjh3rXuycoHBxNbL6su9mifbenSdHyKpxKC9pFcXmN4uhm2XA9otPN7NC7rgR5o8G",
  "key26": "22bkx9XzSvVJ2nAurZjZuoUiWRjbxhJV7G6qpp8rLjTQkzSTE6Bf85nooDheUpDeeXCNH81bzRjCaRhjxYE9URST",
  "key27": "39NxW7eoZDztdBaajoGK4uadmrs3MeGPeBxEtnWWmqb6P49yiqZXnkBiL59M7ePJCcycNKejdXUeZBdzivkwXbFs",
  "key28": "62NFxQeYeckWhEjdkSQsV1H4dQf65rDcdC8N3KRigncJQonWBBij4Qk3kr7ThV7qCB7XjJfZoWEZXaay6L3JaqXc",
  "key29": "3mNQBMr8DR9CLFnAqXNi4SvEfwLigyJw8eCWGQgrFsDTXyRoaedBgTQD9SbYj4gj46EK1KcqkQTnjAH4X7h2Q5NE",
  "key30": "5arkdDKYvm6MmN7DwcH1RZmnMX7884UzjoLxFddL9JGYY91GQbsGemRzSUuaFZRjEPe155pQR4ANW2QfaUa6SYyE",
  "key31": "3TgHKF9swgCud3Ettevprn1jtn9GGiNCQB5w91ftmnBcKuPzBpGEGTEMPWfErV2aDyBeasddATUHX88c4LMnuRUy"
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
