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
    "5ypYBvz5ovDknQyGWYUCK9v2jJK9Mz4XW2gyNEzppjXr4TfXUumsMxciBcPZP8kjVzP7NVEhnMYuW9Fu93xVRexQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zh9L5pJb63Qvc2tUx6Sc4iRcWHP8Kn8e1UvHoRetxpthYEBpUZfD4AffVWSqviVqVkWj7J8XifvzySA8wkSDhj",
  "key1": "4G841oN8PJX6CE2L2eyvDq9Ve8FC3QCvSbSsvyMFdwdc4zEjDGupmZU4RXFZnLzRpbj6uLEMPYmeFUuqErY97pgN",
  "key2": "3zLny9pp8BcA9J5rGZhRSGExRqMvxwEc6JViLttLf7jFvGC3LPmMLaNww2P79wATpuWeZRNZgcBj8w7WXJFUp26d",
  "key3": "56yJDhoJchKprJRbsBETPN78Tdom7HyJwyihaxXvKqdr74oNNtdckAMFp6WEAuoQMJoAiS23RzV3GimwM1nh4htM",
  "key4": "3gu9LXGr8ejpTk6VqBdbVCc5LLdKvFNnNDy627eHegZ4omUkAxSEbMtsvi7zDNKaQu4Td2MCExBjbsaoV9fAp2RN",
  "key5": "PAW8iKkmrVJz7PHAdc9RaY1W7MgiMQfhSG5oZSJVxfeG8YVtCbRVYeDv9nNSxFp6wbACWCVuydakgWYTcesjXkm",
  "key6": "4uHGbQd284VywcBTLaWC2rDpY9X2QfFkErh3Vzrva7CTodzAwpAgWcUZ3EsJc4Nc4kgzMGKiAfmhoyCgDDWTzr6h",
  "key7": "HyYkKyQVQcKHgSg9Fj3KMQMyVQzssgUNRueaAE9UA85QtCVSkKT8TRPBEo6aJ9zTZq3uBEnBHGAyFM1JAXBCWgt",
  "key8": "3XFaTYxnNk6ZV1pC2MpM5ncWJFDNUSTdBG4i1GhakvQr451Ywi8KLJbubE5Kj1LuKNYVS3Mri8c1nYJdAwp87ZsF",
  "key9": "4boJF4iunaJesjdxNJXz66R3GsYnDZsAF49YUWC67AN3jW69wiqjwoNRVuEoLx1T6zPtW5DTJLHfb3dqyc162156",
  "key10": "4afeiidL4TuEPNMXwTnkXroT3T3rmhEj1rbfqzjYWYCHg9mUoNWKPmBE3WPovYzBC3YcdxtRdxctZXX2qRgnpDsq",
  "key11": "345hGZuS1UCuxkWiSZcuyaPoRpF5WJvWcxKW2Qx8NXVMMH61GJqzRSm7P4WutUnttdL8om3uadbWe69JcNjSVYt4",
  "key12": "3VG4mDajo15HY6BLFsP6JbzKZmdBnvG2xpQoZ2wj2tjM3DQCKhMuNh7gy59xnvrjZBF3wuv1rUArYmhhWoXaP5Wr",
  "key13": "4tZKahzxUPkARrZJTpVnrwZBLCeLuaHz81QD247z13EVkR3rEbKqeA5LNicBJh8QXbM6mUw8cnkTVXTSNH9QowA4",
  "key14": "3rfQge5LzpkTWDcQuRuLAqmCoD18UNpVnaES8fb2FNP8AT9KJzhsqoBXaLjQ7AfE3SWUD8SKpYABKFmLhTssiZs1",
  "key15": "2VDfPUmMQ1mbUg9LfaHgL8JB2bHUdFBvkke3oa3qRrKEHuwi7w47WV51kZt88AHWA15zDdS8uSqeRvWvMCxUx9U4",
  "key16": "nCX4QR7gGnqoPDaiU5SdS6AyN5BxEnTJhCG7ZZFseEzDQo8WepMZS6AzCrKYzKuMZQ43uuRf4Ccf5w8LvK3iJxz",
  "key17": "2aHe3H7fDWyHe7xBtfuCMJBaLXiUwuTHg19R3cDXs3gr3CdVhu3mA5VuouP2Vjjkh2mhAabSkd4NMpuDTw6EoSnw",
  "key18": "3o8b5o8d98mG1J1H4WC5sfHF9prXs1NAjXkmEo9PMzRP6ft6Axq8AD7qYCqK9wDHQSvwFM5BcBDNj4JsiqS4RSYQ",
  "key19": "3fekLGiuHFWMUf9CJN3AxM1SXXSa3NEmc3NFAU8n6nsA8zpq6mLUiQwErRsKR1EiatNnvwYNkpkwUXDF9dYKoC4B",
  "key20": "63fRP4B4CesR3UXRnMjKS1VW85cpCcey5WM67fgGu8uyJEmvuH7jZMGy8LKrhepS5aJNbTD3z2o4oVEUNmito2su",
  "key21": "4xeLRpa8MRWCB9mDmaybMW6WewoMyVHJUEfq1vyEUWPM2z44Es5nmBwNHSCvbgYDPrDHT6jaAjg8pZEbkyDnp34H",
  "key22": "2pXr5bQv34srbpeU7GwQRufCuy4Lh5Lgysi4YsxCRsCDhK3RVXtuAGsDuSAv2Fger5SK8JT8vAeVVfwz3EuuRcJW",
  "key23": "65nCWdCNTwiCywvAZnVPLDDf9hxvMz1wb12Heev8uj2t3tS5mpjqQd9WrNuJnoPySEfq438edVYZu9E3SiMj2Wvq",
  "key24": "5ADU5PJnc12n371WUkXxLQLdiyb7noz3eoMmdA5kkTsnMXvSH97uMLauCtyF9dpRFzso8yzfP4qfWCH9UVMG3Ur",
  "key25": "h6xhbAYopakpJqATLgvMkBWxY178hUtmkJLiezCeujX3ngMMwnwjoURUR72SqVTpa6rRpNkbATUWZ6CMt4knPDG",
  "key26": "3ZTAfMm6YcP6yaQC4cqu9jxQd9rxS94PABSAPaNF4MN7V9fXxx23DmHCH4fKs6hzo7rhicLJiYsdwMWkFXfDcJc2",
  "key27": "DsEUbmpBnKeG1LCAWWcL7M3hYAXYHmNDrWKHGSXxBgh3SUP4bn8DT6akm8m4UD7Kjpert6fTE7eDkpTNtPVp38H",
  "key28": "4udhrwHbzFkSv6qYSSLX7FpXCLtMa2vjvEcS6vTJBXoBD7VMm7ZekwLJsao1dJ63XAG16evpazpxmXPPqtgYGnS7",
  "key29": "5we5w4CNinJv8Un3AiRxjjn2NjMCi1dUjx5LvasS3VLNwsRWCqJ6C3Aejakyjyx3rjX2nkeVz2iVX9sM6a3Vj3Yo",
  "key30": "123v6Lq1a1f7ViAZ6EhwzbfinvEA9YJFX37pSFEr4SKF9neCY3ELSHiiQZD4DsDFSwLAwgQvwwn8TkGNHuGSdDUU",
  "key31": "27Vj3Da8XrirDnTsrQ85TpQuybJTCQPcfZKfnatLfTeZYifZy7PbrWxvdv3FkMaXWovrAxX8F4rYUwKBTnbGbFAw",
  "key32": "3evqfcSVncKYg9SVMZWNDgGah4HjKkVoa8CyVo73xBn8MYZine8YrcagqU5G1epRck2ePoya9noPyNjeoq4ewoXC",
  "key33": "2CuwQBfwrjETYVit5ZG2cmWMxpLrBqseMBUd1fKB3RniaA35zeiUQNne91Q9DsonRaCZaQ9FMi1hDxBmCSeo4hzr",
  "key34": "KuJaYad6w3KXLVg9zgTHe3Ku2WgE4TZqQyEkGxuvy5RLt4BXWDA4YR2MovCRJmRrqxxqtzbDadNBpRPgXNPXq8h"
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
