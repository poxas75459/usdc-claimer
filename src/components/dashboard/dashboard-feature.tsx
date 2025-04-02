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
    "2xjGQfwbGKvMj3ZtrFdDmJ6caVdtkgHbQf7DZgqvv5XXRPdgRbVHGPQETcLmefc7S19s33G7ukYm8sVEbMQpsYat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uowxysygA9dzzZYM1tiy1vx6H3bA5JMCUavL8pPHvEceipPNaTPhjBs7F13hxnDRPnkwbAFSkHeaSYNrwL6aUA",
  "key1": "4K2zHv2xoE5GWckBeyCyQVNmHH9SEf74MAskCkczxWV1oUnADLaKaxeRibAnqz6NUtdWc4vZHXWCrbekFn7zs39p",
  "key2": "4XCcpoS2D1H2Jyx4pTR4o7EXbsgYw9tsJR5dgoPuiXnofA4MDkZLHqVrkFCnuqv4PdnV8UhDwk5EhC9wNd82KJg4",
  "key3": "dkYiDsviXMv4LHPupAJDszfc1Nior9q9XTu1jEY9P2kBGKQysVcFxm28nL1ek9qzXWk3kR2oWbxWrrWfBo8j4z4",
  "key4": "SMBHknnE5CGpMpRN93EA6w4ucPcxBcmWSHyV4fyzZmFbuv4WWmjEZSRhF2zN5zWUevNvCMj5GKJTSVkpUXmG2My",
  "key5": "65KP4fo8xKuJi7Q3qxLw9WzcCnXFVuUTCk7gYHW6XWyrcKHKWm1BmhFLkTzChihYCf8daW5cx2rWHiDyFSpcD4ew",
  "key6": "48HvcWJh22id3Kg9RcgHWjwT4heE72UgZR4usqqwxx8p41ZobeK7Y6cP8cwtMcjNhVFv5jCxAknSj2XpFhbcpM3n",
  "key7": "43Wtdtyxh6KtMUmhpu5tuz3KGvoDsUApEdnGt8B1vX2QH2f4wvXzxZ6iBEsGG3zc8FDCyod4nNQZd4SK6pfj2vJP",
  "key8": "4JDtxqCz68tibua43nZEtZbQv9YdSsncptZBfhizzDorvw5ivxvJgQzZwx5UeFmpK7aKJteycUiihojfBTw58Dab",
  "key9": "1gajfvJm2uNzezKaKnBV2B2EifYmmmb6UGkN3BTjpcjbPUSKrDVkaMM52XYYs93YZf2VF6aeozACeDEesFEUqBS",
  "key10": "4d5tyu3e3zKTahg9PHojhYPMot23gskxAYHF3haLYJCSZWdnWwKeJGPu2XpF5cTqBTKn5a9PTWTeT9UC9yjb9n3m",
  "key11": "31DbPwfX6CeAUubN5W3uP7QRzm8VFCiHV8mocJMppeM2JGtsLvCuUqahFJi8sjBMyg2UCbRMdSTdUF2CZ6npuTe9",
  "key12": "5kZTJh6JRYNruw8cxkBtRCBjdbEbAKmXDS2hKra4J56ZHmJjEWmA429VMZ9X28xL1hUeqAm6my6FnamXDpDw1AP2",
  "key13": "3o3Hk2PkB3MLj1vySmEQeuTpgoQhKGi6iTZKhd8ucbvqfmXYGdL3s1ax291sLCFkoABfAcEze2BeezPZJmTvepNh",
  "key14": "mHdD5STajAd3Zt4S8rzqTB2tUJah56qQbDMx8NXfgKUYPW8So4sdvtyXPTF4DvwE4cjmHmfNHCjH1GJaPrKEBXg",
  "key15": "2a9r4SDWM6ayctrqXS3ua226VTeQRiwy1PM73Ktp8WBTrwn4eq5SNHpoSq8JUAkdRg7LSRxJzahT7sZRi7afZ6zB",
  "key16": "3V3ex7w2vAtXj7Ff7iwvx3Gs3Ru42vjPvg8rnV7QoF3X8xERTnUYyHBdsjPYoPY4rY48j7a71YEq1CAZm3CJs768",
  "key17": "2FrfHcPew12j2rsFBmEFa39NWDiKk4jSBYobaKnuHy3hDETt1EP1Y9L1LPypWaDZ4zdfjw41Vn3Xgai9vtcT8A6t",
  "key18": "3UgwEY8piPJm6MaAu3mr6hwzXX9oat99wD2ZbsGgsQ9q1HDzYcM6dr4x51FbNmCbNM13KPpXeyXcy6KqgTR7i711",
  "key19": "4GmqKJC72rNgjqTDWhLradPfEYu2yS3bnA2ZUt3TNrM95wS94rX6ZaMkqaxCgexQS5DFbkGtEreY9qAC39tDkYnq",
  "key20": "587TVNYhA6j7SML2Zsum6RmnXdar4nLPqZCHZk9XdiSk6YiZedNSPqaugrYzTQicTsfFr3xHUMjyhsu43w7qXX9N",
  "key21": "3eJUC6GLDg5fa5WKdgr7s5EXMKXv1ukADgEQ29tU655FgHhrfSy3zAGEQw8z3u7nXprMMnJs1h8MowVqjPxjpnuq",
  "key22": "26yWDikbdWhhaGsQfMjepN4hC7A7yJaY9FfW2RUEtXxRhiBiMh6jqoyAkSJZgu6jFBdLqBvL6spK5hthqs4u1oWP",
  "key23": "2qQADiz8poN721QJmPi1DtRK7a76nQgkQohVzuomZGEMd5UkKcatg5mRq2HtRQSZY8mBdVN28jzRUfdwtHS9UmZu",
  "key24": "sTXFHfhGXmDwU4agkPsVCerQrVCqrzfj3rNyeCjx8uHopYoAN4uiaaBe3dN2ooBVWrhoDpbQr2xH9Nu8XzHj3bN",
  "key25": "44TLjXRjqgXdB5mjRuFENCmabmbL1oGvjKFcBVgGPYo7h3t2fJMX8uu6HkAzPqd1mLh5ws2mhmia6qjs1XNJqEPX",
  "key26": "5PNWHUzsqS1bNmW8ZHyv9NP3TCgCdnyT7rpwUgJzawWFtY2gxFMd4giDZ4U7mB7WgR84P9zLxKbwNXXg6CC8joqS",
  "key27": "2A8mrr5tFHMDu7y7U37C2eGK1GkYB5WNo1JPBhriBMQmpC9K5zfzTcoZBUivHycVq1dqWamZcptcXitniiKR5HU6",
  "key28": "3txbmHxctYWCg5pJeqj28P1YAaTsLs5hEUtJarQ2LyAKReDi6SRGQxWTdfSGmqL3vvF5ZukBEfB6DL14T5G4AML4",
  "key29": "5XwSB2jBL2u8YFBM6Ee7cEp49B3M5SzPt76sbPv5Qfcu7j9k3WPHQ8hNyZuqzBxpU2ysTJC685bceaa5EZjbWzwD",
  "key30": "2Xoqp87qwWgA3QbxyjRKNPp1NohgCBDUc78Hp1n2Kwb55b4ahydSojMdj9QxRpyzJDTSGWz4C2vWHgwovL1SB1Ec",
  "key31": "4gB3MoZXjR5BvGErdz7c6E8xyKbHM4sAMFn8MVQF8gX59DMaM3VQiwrAQietWty69Zhk3vYYsxkaPrTnuDSLY3ZW",
  "key32": "JRcy3vR3vw2p1JGHdtkfBaaxPWgCZ6zXZwxfQxnbs7nd3GKW6HhXqbq1hifvDhwF41GqdXN4sDn1yFsvDXp4EBF"
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
