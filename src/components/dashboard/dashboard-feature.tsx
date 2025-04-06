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
    "2fHTVvuW5iJ1Q2JTRPFoRV4jyvA37FAHExedcrvEdBtrsFsLsArny9d7Pw6hUcjyaoMQcDjjoAjEr5xaKFsVw26v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LeaCiYWLUzzoBpRbjpTjohDhcBMuNyx75AEmQ7p9xPVsx2p5ma1FqVgf94aQ8PjbxgLxNLqPsXEgE6zapXJDc2j",
  "key1": "5rbPGmgZ82jhDuVov79zkRWm9tsyNmBUPhNcBiUXbDcA3iLoxRw3CNNweV4Qvy13LrUMPArtjpfT39ENEv175aj2",
  "key2": "2xrYRdiq4qPwg22phuLRB5PCozVB4KkNxvZj7sQwTuyj4zyi8pzWgNmFHrCYWZku5eJ4z2Q7XrzS3WmN5Hwr2jma",
  "key3": "2MBUG8xpjj9m5WwAXzty6sXn1QzH7o9auK2ke3dmj7vp7cETFmyXJ3WPgPZ29qav9zrRUE8YnRAkvohCwRuqoFhg",
  "key4": "4EYekr5AaPhoow4Ueot8MJQpydaCEatLFjo6qAn3MKcaARnrgG22bsKyDaiestFCjT5HagZRR8BTabc2CQZ48p6t",
  "key5": "212j9xYgwSUiXqYo2y2VwM5zSJbNJ2mCPC25CE4Krp7TcRDptMQRutAdfgKA2prZx564XWsqGxpHDNHKGGKYV3Pu",
  "key6": "2rTn2zjfhrCfAYBwtdw8FTnJcH7r89o1yhxS6qRt6dFzcgxu1QJN4dWpEZ5DrW1tqnjPSRsk1CrXtFdcFS3zvm7S",
  "key7": "4DFb1EuiLwGv5Tkmj57d1Hic4VzMaXDX9Uz2Gy1LKZ6BWS6vjdEU5BErWqqCURxtdgrzmkVoH9xHGFz46pEFZiqc",
  "key8": "3g4WpPiUnUy2NKf3usA4eL4oYyNAaf1rKyfhRsLa6Pz4JeiFGBwrZCGqcxLXyTkScSPXnrEFYttqd9cYiTGL3Ga6",
  "key9": "M4z75FihHQtz3WjFQ1PZHmRo5uvBTjshmhmJwnHqsYn9Wbt4JeQU5TGA2t8HpqT5tWXFuHrq4TtUJpjBk1UVUuY",
  "key10": "4ZKLi2Zv4T4jmcFfkvdHWiX4ko8NMni6zQjnYkArP48HyYS7GVHKo4FisJ88z1tAKPjHUUmGL2FbstThQ2QRsC3V",
  "key11": "66WaYZsNZR6em55bVJ4SsT7rEiHzWjs1vcGLuARwtuwaoJcSNZdk62tcxy1eXxCdidJm9ff5YQ59NS6Qxw1SYprF",
  "key12": "3Qad8ZTq1S4GiBXU2wvfBioEdzTaBfzkkAvBEvXR2JPywfhyuLVdFZfPgBgwF26hDTo9EJcjJpc7GVQDTxJWvvK7",
  "key13": "4j5RTyg7ZLh9dTaDfS8hh442Att1kEEmsyLDE37ZFa3BM7ihzdQCwVhp4SsEnQuVxPg1yFNk6osLNXq9KrqJx9jJ",
  "key14": "3PsWj6kL6LLUTUvrY1Kwteo7xEik8jcC5kRD96SAeiufLhasSvMCzZRPrqvNzfRbobjDpsGzt8cKm1gTUqYLrnWP",
  "key15": "5vELoBKZheWo2hVJNrhS85fJ3q186BBeWsj21eRj8eg6as6jf7vjqtufjvinqSjkkgewt5Md6AkZNXN92TXi4Mnb",
  "key16": "3MCBCrH5wzuk29DkxErZMSiioicxVPdqrWrDHAp6T1sziwpVtbDVFG8NAnZs4M6hYvhn73aLEeeiBEqy3pw2GJHr",
  "key17": "i67fc4oAUdbvBvqanwPF5Lv4Hqt6BFT4sTGmBqcPaVPXRaprzYkQ7X6VP7AuqKsct1Viouo13NYpHvG2V8GeSGA",
  "key18": "3q5M8zm1CezY5QUjkDgT3zwxkf58fgnxzkHq2aSpgQda4nAVTz1izJzAU8p3sAFa91cNn2mUtLhAaceCe9EHbZ4Y",
  "key19": "5s6A4iXxRgaF4CU8m3YcxovSBPPfiSriSphdjEfL3HmuMyGnSjpXkC2pjBdi1WkuiYBB8gwYyHQ8PU4eFVz7iBic",
  "key20": "4eGJYZW8Qr3Uoih7vdRL1AAUD9r3oQ7rfhutVPpEm1UJdtyHH5wsmxHxqf6VMjTxbBQYgKti9JjFxqEpX9NmUFxy",
  "key21": "5NnCvNvudqosUDHM3s3UUvJsLf84wn32nq8GYUuH8kcxwfJFC9MRpBqy8sTnSAhYkgctsCxBaij6rRDuB2wL5y27",
  "key22": "3eiGptbdJNuwdCEUjDAEVMbPxkTUMssJcpPMjUdd2dEnE7nJFADK2TdeRAooW5VDx3D2nQCq1vK7taJ2nyfSsnSB",
  "key23": "5S7ty3mqHdU2eE1XPMk6kcq6LDeeZUaWKdaTsjknLovEPsu759PsW1zGxEMvrj7kS36sBmYxeHyfcSNrgBDrkTo",
  "key24": "3MphC8WWZW2tpW2FZ4WT5LWqVsyqN59DBwvBcH14i84XmQuiwvVXMeV9WsvU3ABUHyNNvetHmeQA897hBzSkSJhP",
  "key25": "4m5ofi2a821R4NggbLHZhFZGxgJiJaqqPaY9ePgK2vcHwKzLPArXWTxaZcSuY1Gyd6LxpNYH5XpFwvwvyaRz7CRx",
  "key26": "5X49kzGwaC8Ti2ZRfkFZvbQn7atoPRHFJiGCiQRHpyWjYQSGUMyJ6UuHko36rfpNcCLE1zG8hizTvgPoAY1HypDt",
  "key27": "52ndY2s9YUWpnkRKBZs5ZfVNxkQm6nHKZQGguMJhojFzCyPKRmcKRGrN2Yo1NaDske3ApVsBhSNysUCjsWpbGNwk"
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
