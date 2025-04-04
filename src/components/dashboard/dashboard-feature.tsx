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
    "3FaCpMU5U9cmKNn3tSmon49Taw1W5wWie3sMVsFmmFYPSaK3dNbMvnVYVkf2CS5UV2ESUZKcL1LMqnTMa5WTu8ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMAeWw4TSooYfipXZGZtCqTEgLWLPU7yV4ojKNFhUi4sppWDYDjKaRreuxmaoTtxSwuiVycUoyaU8WZd1XXkSyK",
  "key1": "AusaL82uMUNoNsQCmJH2oNBGoAs4YiqGAWZMYMS4uJxoymCHPuF44LrRH6GFYDiadqkKzeGAwGkw5rEgMhpEESF",
  "key2": "21EnX4P95K7skHxz3Y5zyprrKR9VGn9H9PBXWPd2pXK9BmdNpjrb1JHNYjq73jr7aKjWTxqBqhzJ6vZ7Csgf99Pa",
  "key3": "2RCMK8bP74wuVEWZAFZY1MnkqmyCDXjZTXgpQH4NLdKrqazpRcXJdFu7BqYuqnFZ4z8FM3VDQCSgD6KJNLxQuw96",
  "key4": "58BvibAPYZSpzJC86ws2FLE9U9MnpU5dS9NdsLTCpgFGSriLKZa79JFqAkUeSqehyuicNrPqd5J8KZKfYAWDJKr1",
  "key5": "STHK8uhAuEWC5mrVpFt1wkY85ccFRTS43oNWQD17hVCHuC2n2cN2Skovh4TGdw3Zp5kQbTRL6heZneJDMidB5Zw",
  "key6": "UJqU1oFriLMCJzKeivemG7QjGir6ajtgi8R3yvLgku2h5TTq9c3SvgVJaNxEeyrqfbrFFRnSb5zgc2E29Wdkbtz",
  "key7": "UkAwtFahhzWRxEtVHb7dy3XUxWmRSKvkDHrdNcPCiZT5kxRT3gjkVrWUQfCmJStbDbA9Rb329uoQDybV9r6iWhL",
  "key8": "3wR1hVDQKyDb14rT64Fo46rh9z5t765CF6uy53rEPxG2wSbHY34EyytABxEZKRRy93LkC1JQo3Ez9AA9ci1MQicU",
  "key9": "21JyjPb2RkeQjDpy1DVXLaQTBfEcoa9pdNXzmBENe7v5wEFqYxEkxGxuFC5x4shdsXUx3njtJpJGFzqokC8QcdRd",
  "key10": "2qbfP8C3Hs21Frob4mSSARaQG3tKyrfGhBSaBpkCWSkdJxncYoKs893i65Y2eox1FSA667Hf14MRBHVgFSdd9MUb",
  "key11": "3kKiF5NwWGDoCqg2RvoVzFSsYEBKuGUKFP5sNnRdJaHS7xmeQLoMSPsN38fnNEeVZ1JTEADS2bJvMBnFvCCbsJmp",
  "key12": "66G5n93PaF4y5z37LyUrZgzaBU93pJUWbPAZ9knyRqss2YWcRPZb7iwaUu6o9qYQ2Bf5j18DPvpexS48D9mnU3tJ",
  "key13": "66i6MfyXuK7EjzxU9LtmqtHQDLZsDTgUy3tuVJNRiMzMatDwXBBfDC2N5jxTY1A4Qr37DnEvkvFPJQdkmFoz9YMi",
  "key14": "5MUVgoNRkHQSzTfEqUW8MdSHutpbq6fZU9bEdM97KzC8z5NRTvwVpUvypFXw5fXmDAvRTHHLfbbyk6AydjpJ5nC9",
  "key15": "5uG4rekjRh84RerUNuiDSe6VsyPzEUzkYFSXvURr6rYrAvLCAigfYcVW15Lsr5fTvCJnCakUamjoVZBcZwGtgHXZ",
  "key16": "2Mso1Xer1fRpZfrAUGy9LKsYGEv4zZdVm2cB3fWsygu8hUyNHPczRT6388VYbkUwhyExQ2hWJLX4RQQSnxfXrn66",
  "key17": "syE129hbw556WeaPt1GceMsZ2bgJEKrZAz2jPRQDzMtgWJyr1xksmUtViFK2ALVsjgMRQpnvSwRSSr9YPkCUujj",
  "key18": "4wDVne4ZUm2ddwRHqmx7KXctfdayxs9uYct14vuSRzpg4mJaFm75oTa5eJoqssPu1nPf2QfPjgoPJvgpD9CxNLMW",
  "key19": "2pmmowLd651PrHvxQeMqsroQiB86F5mPrb8WZPjFt7YuvvcU3Md5RgAR3UVUnUKdhmPe935j4FkrPcMVRrbAQaq3",
  "key20": "63zWtgr7qjpjHAnwbrngpfSP55qbufyLew589pqbtxpAgWG67HMF3bDNga5n9iqU9kN8xsA2NuaYbjEnn41L2K3v",
  "key21": "4V5toY9VDVFuyVrN2mfAxEUdkEE4UcgS2dZYXknCMyuyo6rooCJHBeuUrLirR3e9J2Vs4hAoCVFFr1XopY9mNWgK",
  "key22": "2j95qyiVtNcNQabSTAesN4Wvn4Q6PsT1qtgK6Tkh27mkWwHqkP3qijH8NmshVSXYPhbUcpDogGpqwEsLdSsCx4tG",
  "key23": "4MjnwBW8cXsDQN6L4UaLfAcmUokvv6zxc8hpre86Nt62JccG5nYcYP7Ec3bw6ALsejjvWNsSAMdvx8PdDASfXTSH",
  "key24": "CkgZ2iNVAp3SFjPkVuM8bsiowaZsYHxGSFQmibw7jtENA6NCzWZtXHq8Q8JVY9SZR9c2TLCLhcEptXHcm6bj5YV",
  "key25": "5G99YybTCEPUiUm3CLBvKA2Sqt8dv7uS2Q7ppHpmnpH8JVyedUfXMjTLw5bWBapmmKwfTsntKBZLBvvUx5rduKDB",
  "key26": "4CBuuKuWLyjZrNVvZZ8YThNYPVyiyCEEGTjYq6ufpjXXPfcAE4pcFx2bxfkN7Kh8xBTu7yfg1Qfu1A4sRz5Qa5ju",
  "key27": "4HFJTEYG6b3r9QQsx92GfbVm1YdG4yXfDZJfBky8WRyk71YRc9KSXB92wcPmp5zUYcGHZ8QgXc9a2sS4tixxG8kE",
  "key28": "44VVG3kBVGHG6heSaEawRtCbL6r7gpSAR5FtEJjjbYGfo3LZxaLaHfrSp7BMoS7epBaqaaMDzCTsLmBGRxn45JYd",
  "key29": "WHDLx9owS6LQqCqEcm69Ws6ix9zKLeqEVoggid1RRNuosR3WCG58fHbHNW29AnLonQmjxydncrABW7WavSvcA26",
  "key30": "eWgjCb2cF5bf4xhbkxvM7PRXqsnQoTupZV2G3qhFgRrjK8UNTmdeGhQU5NVVv3Rj7YzJVyzMc6XMZtxkxgPRavm"
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
