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
    "5pC7DTsrUPf5KpzwDPTpRyAq6UsVf2FeKZSV9CmZj7rYmCzun8ythjE9G9sGnFb8VnCEXsEjEmgthc1Uk8GsMuqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvUFm8AiREvgruMA44ip3d98iwMno5T7bYznbCebuwbNM2o6L6NXKodGQ32mS4HckMQ3cNt4HErLstSsWEEXQGs",
  "key1": "3keyWaqTKPt49L76ZfDVyuJcF4s5R6oTF4quCt71cqNB1VuPZAmN63CR8yxWLd9vu9F7WgwnvaqS4P4jKSe9N4vQ",
  "key2": "5Ux9ESZ45A83i9LhS2oU5iJd8sHmGqPCZYgLtskb4YTexnNxZeGbQeGLcr46aU2Qi3LnfSD31XTKFzsXTFV4vLro",
  "key3": "5ug3Af93NTrZgzJPMHMGj5MwEXdpvMay2ZKHDxZYrpG6SpkSeNRujU3c9pnTGs4n3CbsrCqqsd3pScTzBbyznJwm",
  "key4": "5A5Y6mbg5hpfKhouPLudxv9b34nufcvrnF5j8DLkD1DnbcwJxQ5PeFUKnBka1RVQUc3peMH6KmCPBBpwxCjRYC3v",
  "key5": "4mS7ozuRrrvY3wzQ3bRwR4UtCdibqNQBDZPGGEYFhe8sFaNNAz8R4eJThRHwtwtKt5xpn5Ef3DjVJ2pfxnyDWdv3",
  "key6": "3W9X85uELBBmWzrSx5o2WhiDcPRL3rN2RDpG3uVpwNzwBkLYY13Fr3CZedT5UzrSgq8xS39dcy84HY94VWckyoBk",
  "key7": "38WiiR9FYzsLrfnFge31MSJy2eDbejEimkeebRd9QN8pMJwf8JVgKd66pFzP14kVrzUPn2QEDJjZLNWnR3FpxJb5",
  "key8": "26u5JEATocCJY9JJrTWKj8ph8M24Eh7sg4wdc7bJhzEWgrWydCM5r2BFM7MyUgMzAXc2gfe4FZGfi8LtfAttYYSK",
  "key9": "25hLuYhuZCM8csvSo3LcP1xbxSGhdEAz86uCSdptYfeYCRaHtyPfGceJ7ZR4Cc4jp31uvA2FVZeA7MLmCwkEDYQ6",
  "key10": "2ipiEp5LcPNca1Fzyeke5y6jwzp5tg9bFyRUnFFojWtrjb3yFy8by9Y9xn8ha8dLCLQrbGP7BLeJcqrLnxQGPUAQ",
  "key11": "4C7TzrijyL6uZ6MG7VTNYtPW5Zde4y3EMBMmodNHeRRRtUD61k3gYRZbZGfybqLJrf5xZQvbtguApcuUfaxVGJ1g",
  "key12": "2fofX3vhbFR9nPWUSTcusWph2rHNBX5ssJVd85rX71U2ypsRiosyiZTmsAEb3ozfA31emv41aYUKRVXCPEg1AWdy",
  "key13": "4ZxjRcA3QoiPS32W3jD1zffMJPgJzQJkUe1QULkS9kPLPLdJhCUXrsWz8fmj1MZGLJTDCUhdgniZz6KDNcVfA3qE",
  "key14": "5fNkPSTYXwCaHNsscGCEpQWyxLGamFfdgXJjWNYG2zfJBxoYBTbggCV4r8JPrW1AKXZu34n2hbbTCVM8JYYKchb",
  "key15": "367f6n3u1gTGc5sPAEZCK84wD2mka8mjmar11BnmXbeYqMHeaeEZR21tZWJZF46XGUMPFHJ15LPLt7hjDwwk4AGD",
  "key16": "4Q72pCZz4icwPxEq1Tgx1HgjrDJiJrGWvwsUSJW9ziVUeFHHbpWAkb1gkZcCZEoSDeeVrQFPT38G8pAxdHYH2J8S",
  "key17": "4H4sDrxwPxBjU9rKTKN7bSs144zeFvLuqxQUPprj8dS7xwLhumMCcsaq83YoSy9vd93QJCppSXByXPANaHBKHWX9",
  "key18": "57B9khDPECBsWzKcxkuXKDgSAwUU5o77s8Uf6PHfcxgHDPMLLo5pqsc1aNC5eqqftDMYxGMaDeV3UQwjBMHTYUqG",
  "key19": "36N7yWoNHSxt6AnV8AaqjAu77y8kdDgKmA535Pmf16x5gA6SxPJ459sGRa1YfKZzhawMuAFj79HkwZYbk7Dsjrtd",
  "key20": "4Y4iteN15arwDWpVwc2hEdSpWWk4H2nuHTueMgJS4pFKHqSpZ54M7xP3nBY4Hyhw5LXsKixPv5gMLReUyZ4nvdBN",
  "key21": "3Cx1DB2M9wk6Xo6vq4JcDK8C5LZVGweeYo2s5E8tmLoo6KEDYDGSi84qAiAaahxp2v5YuvrmRM1VrLpWy5Uu8YP",
  "key22": "AstFAZRu8wB4JDeJzdeJY4U6cK4Hxd57F1XHQKV5tcKZ7FuG7TacLZouhr3Goc8MBiNGuK6GJDNAadZauYbXceX",
  "key23": "3dxJVfrd84UZSDuri46SgRKkDB5gmEZuxgxm3WsdXW4V8p2kcxVgxe4XmFM41gzS8pS3ZkA9grh1sHGtaeHLqT2d",
  "key24": "4Kz3b3qdT2VobCyXhYFPRho6fe8SdTqdHvZmfzBiSawpgSjqqS5GGNjQ5ku5RatTWRDYCjZj89p9S55U3meZ13yc",
  "key25": "zwzJHRpJDUycbm8SJfpqpCXvXb5NKtyyL5ZJxGYWAvDw8AcHitL6tTsaJGbLi3awjD6feyH9ePTa2eXd16MwD4G",
  "key26": "4GqDH9un88yCNgeVTHSPji4vwirLRwx4fNuPAD5V4p5YyD43f5ciPCap3RKZ4s5PNgUpZwYC2WNTMsd79STfCTvD",
  "key27": "3x8bNa5uobNKzDPjvAuyp5HxUyf27etcdnaUefZbiut569b7fdyXT5P8THrmYNtasoSSstTfzMBbk5fnbFuwDXx4",
  "key28": "P9MMUQNsE75oN1Dq8mNL22XUH2BVSPnkGpVZeAvzYmDAhYFV3yFqjn9BdcAzD2GxYoyVLg715JK8dfRcd6ssuLi",
  "key29": "qXszTu6zYhFSTFszq2uxMHjVxHKkqL3Ta8qt68ec3im2LXA5pgu3bGmu9roKa24ECyYtCj4G3PtuA6CUoS1PNHx",
  "key30": "2F3KmGdafgduRzwTEAsKFpqxkQ9hL625qD4FwSGfUVYDkvcUykn2seJNCj6YCZxcSWPJSakueZrXYQeTLCaEZwBs",
  "key31": "3yvbj1eWDY33fWVa84ScCX3H75JXF98nHrJNkFHnS2d3px5XJ4WbUGU3kPoZ3BjwynsjuAzAoiWkTY1djeB7TLb5",
  "key32": "32TGUumvSpMCRTQpu8ZXf1Dsp1tU8juCjFrPdfieRda121xM4NK3WsQjzRSkGwpxRH1RjqBSB3EDcjKDCbwCMBiZ",
  "key33": "Vg8nuw951N9GKTjpaHBgubb9KrTHiCS4VagnqGvpJFAhwG6KkcQ68Vy3sMyURNLrRujLkCetkwdSnqSDTP4qpZj"
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
