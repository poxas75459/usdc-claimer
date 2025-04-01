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
    "2FKjxELLJ6e7gnUNUWg6fPh1CWrARzL81RtEh7UTzm4rGPCsH8bCcwzyTGzeWmPamvAnhyNijNrXKsnWcFM6gxiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3urjRWr9YKgXTfbDEjKSVjCSdpTLoRLBV8o4uUiGig5o4ryQMaRB6yRxfq4rZ6jgktNcKE5QGrnJ29VQMiZ5SkXi",
  "key1": "44peAomFk5Qg6SLN4Xiq1fFuGYwEpDVRtpJiDHRr6k4mvjHozsZZsGTBJ6BY64cHQ5D2mGaqLLBH6X8rVPQQTvxv",
  "key2": "5iMndtZpXaM3R4UXxiJSZpCsoMNVAXDrhLCihYmD68nCi1pBKFWcknDsCCuqVcSTfL2iCgTBaWE7JM5mHqfT8DEs",
  "key3": "3NoTgn7xzNoBmV4Qj98hb1XuGRm3DavqHGUfgFp6D1JMa9ZzjaPgAhZd6EGFiZn44JGJmCy6FdEi5DtarD3Wn8RY",
  "key4": "5NV9FfqgFLavNdeNbqhuXpK7XbPBKNzW2gBBqFsQQ3Z6rJKvTQPQqjW16T1f31DbDJZVDg5iaXKqY7DVptDQX718",
  "key5": "4uLdQZBavHXTbKfaTsnD4FX1HK4J52RUiVUbD5ZqcFD8tCogjCYugHvmfjmkNVr77zC6k7PNJnJ2PFpmW1RP4Yr5",
  "key6": "WAHRKtivevk7WejdqXrKWrkZS54ozNsFj8Lypet8Xoa2GYbtZfacirRuzmzW5KtrN5FCxxYZzarAH2RZtWsxjvw",
  "key7": "3XmFY1uqgX7RdfawJDsWWECoHqjXpxUehLFkk81idPrGSaf5aUiXCgA3tkcpikaTnU8yzEpT8rDDSMtB3r7x2DXs",
  "key8": "2XQBALk9zgA5M1CtG5VJG6FF5gBWSSUYaMiKx5yUUBctmgoN7YBauT4rb4JVYbkMTJoEDkWc55PHBZpDPbhMULof",
  "key9": "5qdaz8u2D1YYxVNKBXZGmBNNV3M1aXvejcAB9ZCSNTxsQLhR767AjiUcMnL2KP6iZ17LescNTYvtNrwNENy4PBeC",
  "key10": "5ws3cY6SFfbWqABPsFTo1Z4JaRKHKuKjTW4rnUMWhqRWLBregoRGx69p5eoSca8o3PBiBqiFP8uMcmfM5EkNoyKp",
  "key11": "4AQxY5zvSJLHKzRKpCHngUM5yReETuCn9uXDPVU6n7cMNjUBirp8UNwB2NcMFi9xKUxXezHQ9yy9WzZHGei12oxB",
  "key12": "4QgGAf96GnwD3pKhcPUbXTnydsQvNmEwfrHeFskzxuUAA7gTNmbUoth7SfJAoeRLmjMwv5VSi2ZkfseA7cXe8Eby",
  "key13": "6461PptUpAyj2Y6PLrfy3FGUGnCWmd3UPJtmx3X11hctdESN7GTrhh8xiHYgCix6eR6WuN1y1Ww6PrkJFu7TSxPk",
  "key14": "3Tbh8SjCTXx3CYta6WDDtXFtQTwprtZN4oM7PdCqtH8TL1ArW6W2T8Bd9eiDZz2Dib6Adgdr1jC9i4QdcHZDsWB3",
  "key15": "3XLZ3YiN4ashgfSTSwZF36h78eZN3teirHHduhbJZDCg6bLo8pyD39GAzHa7qGshmk2yJesxAD3dWvg7cNnqyNCH",
  "key16": "5pJgGrZHoKCXBJCAmrJ6yG6ho1t95m3Gz4GE28xYUMvcAYhNsWFv4Dif61yVDkeYHytrkAXY7XaDU8LRnPM1f4Hc",
  "key17": "3ixr41ayAfywBA5c6GEJ37Jh39JHjW39hswJhKXZaEYLLps9FQrU7ArGo816opdPBoeyYg8y63A3JiwCpGonHaog",
  "key18": "3CyZdn4doXDeBuzQpYvY6e4qiuUPpPz2sBwr47xGBnSjhfLNrZRMbQnWDM99Z69yjY5a9QHnBXaRgtEUgE8KdBHm",
  "key19": "bwxBQE4gZsdKJBZjDs28mNmDakwMASuM2ssmaVHdXtbzL47DH6oj1eAJHwZPY4nTqwacjKJhAknHE2jCjGqazzX",
  "key20": "bRNvvMXaaqZgXY416y86ZRCU2B78zTLUneLBGQTpaC4JtdZweNSKwSqEqvbDK6SF3TVoKWePPT2Fcxxtm9sPq8J",
  "key21": "4dtTaV3oWTaGmVaQXTJLWYSKZLxjbLazbaj5A8V6Tj9R4zCQKCNYrxAcrDvuzQb4GVCRH2RLeKdTR8dbnuCkM7m6",
  "key22": "3wB8CGrBerQxLbozGUsT6TScEKjVyCz75TknnSqXD8jrLGF411J1V1G8WVyVovGmyLKo58fYa3knEFVvWDo8VhKJ",
  "key23": "62EMW9PN21Fb7UjBS4vGEJXrP3HymwATd82PeR6yketAf1pu7WiSmwwJGwTssysR5vdz2rgirKjBXuz4mAmqqyZS",
  "key24": "Bu7QZ4QwvSUbvskQUvpc4d4pbTHhoduaqKxch4fwmN1iuKnj2i18UqTnSbKnyG55uEK8gVUasvsjo13dmGhXCcQ",
  "key25": "5UNX18eAKdnzXEzPvfeCigz9a1ePomMHfEVcXpZM1L5ucZGHviQtGxG3hkKopxF9B46nJ2y8VCzHVPBLrSPviP7m",
  "key26": "qUi1LGLUTnRuD1pf5mkZNQapVcwBVdYajSX3uUyHGYgb4QXjQP7VyMTu8xYRNrPMsCuDRWgp9XFm2x9GGuziL5V",
  "key27": "2U94S7BuNA5KXtMjm7YNtJvLAsAkmEmHBPhy2RfBVsDQpnUmCLgDdx16KVxsG2G9n5dKrCfxkf4fpt7Vqmc4g6oa",
  "key28": "5NXH1bK4A1Wa6Q81TrND6udsiAeGWS8JfHexiPQ1jycYEj6HHePq4pV687pEKPwmmJjFdYtiwpcqAaqU7FcqgFix",
  "key29": "gAeFS4KGUurPkTsq28FPLLkC452gjcPFh8eyzJJy2PirBUgNi5FVqq228XviCPCGskfEC6nsgcP8k3qtah5crju",
  "key30": "3oqavi1E3qAS4GCVkkfWgZJJyVu4vFSDVPPm1Pz2cRG3m4a23H76XDyBxrKv8dRFt5Qswr1HzEFWDqcvxhHJhEdj",
  "key31": "3UF9qHeWABbwBPPW1LMUAut8n48h9rfy8qy9879MJjwLrQedF4ngdPxhiHP7rvrii1KEdKj8kGEzPNSycHQKZTwp",
  "key32": "4rawbNezY8ZxyQ8FjxUjp9hgRqtsBnqbj34BkZDa6jrQtS641E5Y99DgzC9u1dQSweTYgVhxAe6RB9RTVeYTswFC",
  "key33": "4sG4Cy5v9g4BWGsvgrVkKx1Ur5b8MhndRwAjTFetuJKNqQ58sWYwkcw8C8Yj4QfQwvdeNBdzBZNW4TyPJRawG9gi",
  "key34": "DATDHnoEUAPNRk9PAEc66GBBmqCxuxN8a78uqWKDsGSvm288jukdjkCy4XPMBoRo4sE25tNTKYafuYv4GFP34nc",
  "key35": "2Xkwwi5yNY65wRr7k1pAVTCsjGLZUYoLSTeB94uVQqqr6zk4ARGG2uhWwUZNcHTqLCSwxaRwJGBfP2rvTg9UTUkJ",
  "key36": "2ZVLRh7M4GxCWKUk3PHb5b11ZiihXZ4ynDp5NufjWR3PsMALawji3uGWeJvGo2wCNUMYdhf6LpA7voEj54p93vUB",
  "key37": "57gK3UQNgMZyFFFwEFs1XYHiAeQXCKW3dt6Sms48HcwahggGrvtjYyo27vpogs7fTwfHkUU33hmWy1NJ9uGngBpf",
  "key38": "2GBphoKJLwrmbBhecWqTXYiAZv4VyoXRW83tVEkt7YKvXUKxYevF1RYN75n74oS8PizwU4pS67WwuTDjEJft73bV",
  "key39": "4RBfwKcTfUeVw6qqoD2Z4kfmzWRnYdax1UmXGXNCKzxnB69ZawixVkcN1xtdgHsnKNLZds1af4axDMUo6DssmBFr",
  "key40": "mxq3QVGfcD2aH9pom7hQ8VHpubeNxYWTB2zBZu1nYPsh5M3WRbgnAiLq17kh5TyHDt5y9eRBm9qNua1kKhqf7Fa",
  "key41": "4G9D1sVL6HFQW9kc34mBy39WVPTprYEjFnxpt5nueT9XyNWRESkqLdyzHNifxA4YATZ2grbqerLZgvdaLnbgDJPH",
  "key42": "2AUPcyvCDZEBxTBYf5MAAFykhySRL4s1semRAiYLSKB6Tm5XyvBPJATRTPz8v4SypiUz1ZtGm6tdaEbL7TRgM6H1",
  "key43": "bCVYMWt8wmPuRtUBUbnwDrjzhYKPRJftwBvXJD8Xs7Tu59PqAGU3B8LTPR9UhH3V3TWsJiiV56STuAufTNqYFoc",
  "key44": "3sM6gfHZ2pztWd2xBY1wsHjwweUzS2SdU6Yr1sVP8ya4CAPgU9ieYAHNtF5GoNc58qpGx4aoiY78J5aCN8MSHnHK",
  "key45": "4FzZuSQWdy1jD3V6MuAruaZc2eVpiSJReUiAZ4uRwieSfQ9ZZmFNQXNrZY3iuyXkCKfQRWQvGd3FCei3VTQA9cs8"
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
