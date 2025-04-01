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
    "61mEQ8F3S8p4o5XBPkxtKtCjA6AmeuWYhR5uJEbKoUPjpzq5dV1QNVhyrEWUZLV5gbH5i9Tq3Zrw1h7qQPq7pV8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dqP7ro6CKQwQXkVjoY7j7L9dyiEauh9j7rvHQMqNzkqvhBnPTPzHAGKT31r25JyJrBF9X9UfDC4rWyGA2N79Ncz",
  "key1": "2b7MeNhYVDVK3JLuGLskhEJVfbNLmwFtp9sir9v3ksdPn1UyGMY7nXJGqiuHywmNWdpwJQVdMuwJcDP4PFhfa7m7",
  "key2": "5sMhdmeLvcxyskVyQ9HeZVX5uzHpVndd67U9LGUA2tfN8VNTNHLycCuwYgeRayDRVaUEjx99RtFFXaHJKYVG16Ys",
  "key3": "3PqiP21BjPykkVZScLDTvZJcZnfBTFY1BrZurpzQowPArNUCW87WmufsM8mqcoTpGgy9RTL3CGpg5y3CX5nBMMC4",
  "key4": "5Gxz5HWbR1iiYcoJGr6WSCdfhqyVZSQAw6Jd6Wpq76EcBNtqrCzXHMkBz5Zq6xTR53BzL9rm3d1ypktKegrgEscD",
  "key5": "SuFb1ZkKan5rLhRYueXKFkQ29TPtNBmxFTnhNk95sifAM7SWTvSeSac4JLeGrh394vp833PcfdwqtbKip2QowsJ",
  "key6": "4DwWib4WwDJAVk8933cx1sZ1wTKjFkghhsDUhYXTYfEN8N6GwoAYNh9BENj9QedUJQLy7SEnwar24WurEoxtTBkt",
  "key7": "5zwmUHswn4pmfE23uo1MZDBC6kqqVZckofBnAYp2HzzqjkjdCkexX1Rc1nvvRU284fYGky6DUngjAX92c38Rrdca",
  "key8": "5fJutZ6Che6giAETx6UAV56j1RCaUF8PYxj4LTywmVJSte3EAtmz3STdaJAXTkYuMDfznv1amVkybecLMwXFm4Gs",
  "key9": "gSNvDotUABk3CRDTSHJfnXQgK8gpgvoeGd8385XbiFycdcjRFmUmcEYtwvFWc9WQiPRZsD3C9K1cqCa8J3nJbV8",
  "key10": "28j3nGm9oXNmxYqF2VZRGMf7CaRZrH6bCNwKC1ruBrB8K5NFxPiuyPdmnp9nKuJFpVEdFTdzknDgqPn6Zq6hjJFq",
  "key11": "4n8CrtxRBb7H2dqk3V88i5KJc7jkRsYRdb6QHgGv749QqcNDjC4xKgggek1NACN1TGBgCeaUTjoKhgVhn8gGa77q",
  "key12": "3QLJyutJf7rr3biSavw3usEsHXwC5BPEAkzS4b9rsP5wDyFZu1Da95WJ8cQXYiRERi4NC7yJ94SJM1ahSgv3kcPG",
  "key13": "2GTd9LWA9V6beE37EwdfEMiXvmTzHGd9t3riDNcRLiCATdaQAqBg6nuxZ8Hr1gLDm6UBqP9R3ydjKCTTR2c8Mga5",
  "key14": "4QS9nuHXfvRxZRL7kLXD4mG9SU1SdLMcY78WhJwFk2X9zHbvLNTbt5SZ5Sws8EjomcA7k4UzSJdsDPT6pbNCfmvR",
  "key15": "5Nv7Mbqqk6izuKeYq8mJZJx2ZAJ36Waj81XwxJCDYNryTXJcAFmJwnkqK14F85RwE79fCJQQr83Pjjo4WdfPZ9D1",
  "key16": "21dRr5JCe6yX55znTbmTRzV1yfm2dBmE5LH38E5vb762iDvLrgTU5AQGtBtkzJLpUnqu3ctKFyXdZ9EJkK3z3tVZ",
  "key17": "62StZvbaHFKJ6VZrLbH9ZLBM2or4TeuGSHTssFkLkVc9WFTCSvGXG1fcHVUfH2Eev7HXU1Fqd4JAFjbYNvb5gndt",
  "key18": "6akQvBW9VZJDEmgKj9qf3MCRyptUbGGuUDkgieHkWu79FLXpcnCbjmrknvdRhuCf31o8qobJ18Uz1dinRR19E7o",
  "key19": "Mf1eiMsK39G2dRzYNDETi1b1gfXGgZ9ie2U7QcxFpNtmYUFYgvyjkjQtLx7hCzBet8JDxDNuC4ghyRaxxUubk4G",
  "key20": "5e7uVh71FJrf5yfYaMRvbn8a28DLsFR3opTkqPhgGmouWGpDPkmB4aEiNfrxmB94yXdzLX8FYdkSat8fM2kZAM9R",
  "key21": "3ZiJSQ2AtBhqFF8TxrYbsPDDN2vzvXrdmFz2xXK3vEdJLaPmkP4vbgrH7roafKmVzDwMxEb4g84RUYkTm3LFVMZJ",
  "key22": "3ntzZfbEpczqsHFTF7J3r5yJsddJCr5bho342x8ZPr7nKuzPuoMznr5MVE3JVrykvoG8p2or1tVBonH9BXXgPD37",
  "key23": "5BpdmBKYEJjgGUT4PECF4T4tdNwbAQeofueS1oT9EHVSFhejAMKMskxp5sXpaWv33dgs6Z93jCoey29TBojRDaqj",
  "key24": "8Ge3JbkzRSAapC9LSBPBCHJEbwAroUWzFxonPFX8TYSP6P7r7asqKrvwPmAa93o3SgiDEfZHEnus96fwQmoVctu",
  "key25": "3kBrVpRsgAgLrfXHWu6U8UgTcuhDrG7KnfQW9X2FHFnoTH5aG7FrTumUbMrCm8gRxrqTUuZ3qDPZJpdchtH9cuCT",
  "key26": "2r2fY9kZkGE9VYzp3ekKpUau3AAZd6SHr9cs3Y6LUcXt9CgZnbdEUkAfn9vMvVfxKo1CkTNo2iqFHSbz2aDiU5QH"
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
