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
    "5LpTW4TPBhosB22gnj4rR6M9YFhJBbxomSgEVEYC58cBQSeWoDgXn4G4JoNnUpWqEESYS6hsiSHfo9hPaTWaJbTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qVsusnLGVs3U8r6LnSTZThbWDLPfinWhVd2sHuet9UkL4usbwtNpohFM2ZWZBF5XbwRGm2wmsqXKBb47QchboD",
  "key1": "3wX1U1PZfmszoN8E4Xh5mxE2LGGAKxTegFoEraYykPNjeh1BUHccJd6JVh1KChmYF7A1zQ2YKfw6dGukVJVQJvoV",
  "key2": "5xzdGP2voBw45AJQNcsUnBgupGDoEFAYvpL1gXZG9gvm91P7XpoWb29GsCuCyyL6ixUgGWjroGTkeDTKZTbA1K3b",
  "key3": "5esm46uaoMSWgxv6FAameFKHiRJ1m5vDYLjYPJZqh4yiHqgKedrbqRYhreW171Rgo31BHddXcfzaVAhcnKk5ZYbw",
  "key4": "4GJ3X26QbWQpYQnutiWChxVsnMA9gJXWkKij6fa7SX8gRwzQSwDG3KA2Bwq69LzrigJWg1zz3gpMbVraDxyYSjmm",
  "key5": "2aF5uTXFCnfNKh8H5pTeKMzPryBQgj5u6rzMhCvxg6fgygPKPdcFZhxVxptqTxiN3MSSkuSsD7rSZ9B2dJATr7Gf",
  "key6": "3B5taaxk9t4vukFhRRk6QnJFbJW4thSvTZwg7QmupMrYKXQQzhCqvXGCEpFCmfDCorskgEbkLkcmdNLRjp2ppFcM",
  "key7": "3ukhPAwVLxDguUBj494LTNfJzSer1T26tBiR7dLnrvbvPVRhRhbHyyPWHS9SVZL63wqqxzNL8wGdaa7zBiGcDUe7",
  "key8": "2FRDqGSY7kcSmD9umX69KhhSoe4pLfDd8jyRGySzS2U69t98rv1sRnLU6pDP7j1ivXJGRPTeLGJ8rR12KuZXTpca",
  "key9": "55YaTGGAZnFJBp7vCqhThTJYKHErzFWa6Qp1FzdwMuxZz3cQhCo8aNtFM6H4cSZeqFehPzmi7fRmx9nJhnDQnEx4",
  "key10": "5df1QpXhnHPrZJyScbWMjiwkZNiRBMKKSodcoekTdWD9oEqoDACEmpQvVqPyZDpyjE3dpvfcrfg3oJr3uxqQRMmK",
  "key11": "2BtPLAWY4VyGJR17mppCw92Vhcoe319g8bZeNYUBaAcqhLDywPY2d7WmpnxSMSaVvxmqbfCjxPAb3U8xZdfbA6QJ",
  "key12": "2doX4x6nKFuURTZWz2ackeW8U6khyvFTJjav8KByWaFy2oY6nNdNbksqZzwcARFgwoHGvrqGEgVqSup7pqnugXTZ",
  "key13": "ze4zDKwJ4gAbZ8bhDL4Q3qJTr4piFprFLe3Px61cEixcdWzFErphqzBCS2tK2EVNSyVro5Ecb8Q9xL3YsCTC5hx",
  "key14": "4MTzJDTvfHVRzJFSVXBommRP7amabVNm8D7zsUvnFrGSyHTjfwzNf6jQfwuZgT2rDyvNouBpX4xKkHvhfoL7cY9Z",
  "key15": "4PkjvUHvFjt4sN7LTcvXHYLJFz7eSCLtYnygckZGJNDfbwm3xv7mT3sk1dRTfdiUDxT8jYCH3EkWTW3Fd6x8vTNE",
  "key16": "4Cv2Gaghug8qFqCUNKWEGzcx71QWHbiDgVoFsCqKMEUCmK18sk88wwAyFxxbw4XGtyUPDwVbbSJsVBa1s5dT4whM",
  "key17": "4XpaSuZKi4VVRgQ4pBeKj9XEftG39qi2XXgsnSzebTqeU8ZtjL4dhyvFadKTYsdiCVvLLswDcY67GHK1YuvohPDu",
  "key18": "5qCFk2QoZeHkm3sAX6pugXhsUUJP4NYWyE7XRagf4PqF8k2TLn69XFRwkvUmgZVpL2Uw9AgpxCEuxPqkwSGbzDn3",
  "key19": "fXL81dhMGpZQpQDR392U494yDwgY48KLYLqeCTJC3D6JQeGZDXx7j8rCyEpu2C1HmnYMUdZzPsRHqLexyPtbhNh",
  "key20": "4Y5UmDkbaVmY5ZkjxEaGzJm8sxyQuCnj5VRthSBmXmxPBUEFHHNoH2r3xnWzfjGT7ZJDZULZKzPRgezXRoc33rwi",
  "key21": "3CkM52gDPDEUARqPNQnr62mxC8HpbfyPf9kRQ2bX1LqYx36DYefubaCZadRsV5H7PdvVnMA7mB8pDdBQ6YCJ3EAu",
  "key22": "5cCCJmByEcjKBmRqKh1EYGtFBGEA5eHMiS55if5RF955rGF2J8Mxh8F8px1umsXRUgQUrjcQzem3a225GReQhgeh",
  "key23": "psSzkKT9m7BhmsCRN7oi25XuBZ8GMFnJSbYXkJsgwypscAxEUgzVpQE7JnHrG1ATNAbJcWEVHSQLZmAuRqyoAZ6",
  "key24": "4y3FGX14LXp5uAnSWKv5XLWY9HUGVJk9e6vXW7Q74spY9sjKPb6CBb1mrRJFbRUNZvRMPuEZYFdjkiWvtH7sj3gc",
  "key25": "42P93AaW9zr7kmDtih778qZV7u2KVS1qqNSwhWGWN7QiTv4DhuZtSHMXEbtEAD9Bu5tsofYsbk4SS1rXKnE1P9x7",
  "key26": "4c89744Lm9RdYTSdcALesnwX3dTrLBNHbg26ow4HgHSCgPRUQjPyr88io4sok1kqEHTaqK5LEsjmzHbY6fKtdY1u",
  "key27": "2QDBwxFyWzGnyuJeKW1FBSDRsrbhB49LsxwP5QqgQzu2ZFq9wc5VmXyXn1HeiFuxEcJA9fXifDELuJL8p6iLjQpY",
  "key28": "5DHdLo7H4Gn4s9s9UtaH2xigkgbpSxCK58gGawssEZN5no4RBE6AQkGrrsL7vfBTmWPLCQE5nc7cHyZ9NeqSTpQd",
  "key29": "3joao3ij4JDSUcXpoBud7dMaNiruKtMVd1ADeA7S6KTh8fgasDj5zf2LCckjW8VKhjegTUTqhun3FzTqt8Dfwmw7",
  "key30": "21oCzQumhbmho8ZPLtsvjSTaTmYZp7h5SLqSD61vAzrk77YpThohQysg1LnL8SqLQLvxWmx6ZbNv7adsBTVb3Mq3",
  "key31": "3VTkEpZTXKXLoKfzrwFsGdj15eBYXn3Jb7yzF7WQAmMnL5H6WpB8vEmZqxkMRuAEYCgwYTes2vCTXKquBsEvinum",
  "key32": "57DUep5B4AfjGNPeCtuuhP86mgpanvwHWMNZ5YJEfEYCe5oH1SiMPrUk8QTME9ia5cKNirPWaCtPrzU9MLC4qYs7",
  "key33": "3yQKBZkyccCoYnBXp7sDBR1nSsXev9XXdZjCEcVnMmpokzYhNo7RKW2C6G1RfKpajzwitfz1UjjEkLrXN9nJWtDp",
  "key34": "2FugYGR2vWnko7y2u84d4xppHcTMmVVDfVPZNs3xTZcBU46qrFojbTDzh32MKrtviB76skBuFXBn2BgYGG88vnc1",
  "key35": "5ph8W7NfDEPLBxxX72xsuCLEgYUE6qsFjWhr5Kx1BrovMGne1NxQ4dN3EN6PMwpYLJJ5oLrJhVqoyQ5PHbrznWim",
  "key36": "4xnMpQQhBY61bxB4mNF2c9PbjxVKyxk8U5FMaQpK2LffcC3kjZSmdc5M1gMDr7JF2kx8Z2DMzPYEYb6SJfgHR3mD",
  "key37": "5QFPE1cRn8K5oYSzcQqgQi1qAKyei3jzGkXCSo6Q6G7vFx4ZFVWqf8ygXxQTCGuUt4TsjtDcPP3QGES5ibkH81Hb",
  "key38": "5QZp6HTvfCgKZn5SaZqBxeBn91NykmzF6Rh5o3vdFSBJabZ5iCS9Y1NEnXK9c7dXxDCEmhGmNNnjdeLSuFYCXbX3",
  "key39": "2REnCzMeGcEZqjhG4Ri6GGPCaT46Zryw8FKRKqdYHjy8eiN3eKxACcEY7eGzzjCVqqAuBJRBFWdxMNi3aUTD9Srn"
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
