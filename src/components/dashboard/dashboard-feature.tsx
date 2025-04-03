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
    "Xokeq6jqEsCDywc7R3PH8cmSMjUKEYhphr1gQYkSGZ7K7BLdz4W8EjeDVUCeiGAYJQQCPxqBrpAsUKD3UugZb19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2taK2ynGiW5B9p3fiWEkjmeQ65wrQc2sXRg4eKzMLBt4CinNUc5Vk9NFocmaHobAhTMCr2BLqsaRXWCjJzd6WY",
  "key1": "YikDy8V2ojAPs1ysYb9Ri16pLhbsm7cGCiKf2SsXntvRKNatdH6RS988rzdYXZUdbVKNPSHBaLQHYFveMDK6C88",
  "key2": "3HDuQGkTcaYkXFiae3jMAaSWXJo4xwYrBWpMADpU8H6X5W3bHTWBxMPa7Tov3Lcd8TLpMuhUvgYcxmbrJqpNoZWA",
  "key3": "5ds5QwevFF8rVvCoeuewacuwekjsaCotJqGk65m7qsu9TX4gMSLKRvb7KfiWMcJrGDSjrx97d1RzARcXHGb8UPnC",
  "key4": "5nECrLifWHPtQ1wPj1qoigCYUus9ne1pMAvfx5PGYrLc99ZiBvYh4TX3MVjMKiFbKvMKvvULyvtuz3s1SSY3AdMx",
  "key5": "3ia6oXhjMuBD8unKxTCAEsmJa8QzLczcqDBUmGR5w39qvvb7HWtuAcA5BLq8t1UUif6LsBksgoJzX28Q3LjUWTnT",
  "key6": "2TUawCbjhKdnhUVfPWNCzaS4uggWiTtn4dy6G3mUCaToXyA51rr3CYzysJU71xSspYti3Y6wcjbVoANSQCFJbn7W",
  "key7": "2Qs4yPBeQSEcvrsoEx1wdGt8TSUg9txP99BuC2r1wb1JNjACxYnFbF7uE65o25D3kb23V21LA1M96D2JFnEutr2o",
  "key8": "2SXinB5dCptu1xKE5FvJfaTShywi5uWrH51Nx4hxFtMSSpaSu69LrnvCJCM5fQHyhUWUND5GPhmT6KciFrmhRRdG",
  "key9": "4qtMc2HBbfjSA9gSQJSWHGS8jYssNRMEDubUmkSYXruetcW3DPhPt9uM82xpzDVkPkrcziwC7byjyMEo49KtKhrx",
  "key10": "63VMLXm6gALSoM3ohzED2aTDGaA8pGTYZ8B3xRQriKBKAgtYPA8uQg6XEsTCzdfrmNeWmWCTSwLWTBov6nXCCf4C",
  "key11": "25B7p5zRnJUTjsNaPT8XYinCG7msdzJ1B1careEuktHEvLS7UkY29WDSGRpTtdFZsXnxJVgDVbpaFf3NTyDQsezb",
  "key12": "BbbDiR3Bi6LkcqWamJz5ttuPQ4cKvitx74ruot52kkDqtiBUVEHnadjNRooztC8aMf7RWEy4HxVFiyBv1EjhreT",
  "key13": "67KgEpHUWNhVAe7rxRgSd7aXrzEpGuTxyH4e4KYctr4XpiRjUK8zMQRqqkix3gmyy5gUXAut3NBPcmofFJcESjaT",
  "key14": "5PzCcj9GrDiMBUhC1Rj2he4iq5tyF9VJNctPKeppaAQx9nwa8tP3gr43UXcL6mpVfXDshxPnFzmzUxFyFu8uiCBr",
  "key15": "3bGswdsZE5zuDv2KQyK6DVuujjhN2Zm4UAPDK3ZA8WokGryuEzgG4Ua5WZq9qjdvQBCnoax71dGmRW9EzzEikhbg",
  "key16": "3uXYW8FrJeipHEbV3dxXSTX73shp8A9tZSG2bejQ2TmKKVsKLAhGrtbeS6FynZv1ZgNTUiQNbQT4ZmeasnLSQeTy",
  "key17": "4prL16EvAV8tokSCWBFfEAk8xccTn4QCYq6wNAoocACJxeRxbmsgnBBumyLMHhWvi6zstAAD6J8CDR9GpHSS6Bas",
  "key18": "4N41XYvD8JcND8mcpKYgEJXjy9n1STVLUFPhXxTDR9S6v5uZUAxbxTqF7R6RuWqGF9EYjrGbpiecfht7tHscWQDZ",
  "key19": "4pkDQmoCL7sdmQzEhp3rhhoygLpq1bVJWdMLxktytERSnRMaSTFNCgeV7y67nshYUUpgUGHt6PCF4pyP3f6Hk2Ac",
  "key20": "3zYkFADsDjefTYqfYqDt361zATdjp2bExvCTNh1MhgVDFVNBvxnKNSCjB463FmDcv8DVbUav99koHQzdWTjtdCuh",
  "key21": "2GYr5Sh8j3S3YWdbW2rShAV7UKM3kLZrWurowYEBXcjeuAHMKh8DyS6BFrzbPfJqJsWX2eG97h1FjkKeKtsdVTr6",
  "key22": "4i7rWT1Ja78U9DFGoRqPg9UE6BGGWNV9txAHHiJt4rpsE7Gp2dxZ6EPpLWLoduLM5GvRrji4ESm2aEivjPKwR1rF",
  "key23": "36ms8Ukp3h7NPwHmnrXHgM1zFaj4jGmNQkk2HaKE1yfMdwoNyGevndge8igpkm1usJ6RbcUPFNF4tXtwpFaPN9yd",
  "key24": "4iyRVRWevKUbwwTkq1a2nkd89wTSxYCM1syB2n9ULZ2UFbxdHUMK8JtkwvEW7T374UVDAmrYkdi3XDqDvT9haktA",
  "key25": "3zEcqonLVKNcaxeF7LFoK7oxZzmZbHUZjfYktbCnWKP9F6bKfaGPZknU7jbQP9nXYjfTRNKh1XkDBkA4CrZzs38V",
  "key26": "31AaxDT3KjpbzXAVJv1WCEFfAXHyN2iPnVHR3E7bNLj5FpJw3JdMPgCyp3shxha2EXetSoe7kafEhBWWS8AkzsYA"
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
