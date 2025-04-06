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
    "3mubxACLPixF5ftVdpy4ZeNXn3Zy9Q3mZ4NWmNeicGT5Vy8iaHbLEnC8hQrjptSYukmjP2732a5ppJczg1ZJi7rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhiBidqFHuhCYSzpwEw9TryLGXVn9TDxtf4CTvpXGbJ3RgR3mYk2JLyHFKD8vbCoBLW4m8dvSFEfLEpvG2EgCk4",
  "key1": "4zyzZTRYHroZB5nZTySQibTbBngY9vEj78RoGJbk8aFxzW7k8XW6D1uzaycmFqic7tMM8bjb6qWkRvKqsQvtixVq",
  "key2": "sxu9KYCXAQhheUh8ctndY5bvq9tmQUG6mJh6i1SkLF7QHjtJPmoT2LaAZRCUMbUuR4TD39pkumD2AvFH5m8BB7Z",
  "key3": "4ZUYbomxq8honUKRwbQuqRaZb4NkRkJHk7g5ensckEczUTzNVsmXPhB6kzSqDPzx3YP6ZitqQGCFhvLEV97vdZJ9",
  "key4": "3F6oWRz84Zn8Gbk5MEM4EFL8MsJr3Yuu7bsfaWBYpipiPUKCw1wWBrJZf9Q7QotDk9HPUtKMiWVe4B5TNL8Ht9x8",
  "key5": "2kW5vqoGphB6RVuC9kjuKnqqSTQ9YvnpBbWNQw2jp3fhKBoMCe9Z3W1V4gvBUXvJqanuTGzXyuh1zoYiQobap8DJ",
  "key6": "4CzgismUmWymeMU5FiBXkKdHQeBxuMsfMmCpKv182eefFRndf6YYpV21xKVHPLCKPHYaN6KttSVCMNn5K4LRfdBs",
  "key7": "2Z1PNkTF7CefdZ5kLNHSnG9MHfCNLZ27JVLhXSQPUvHKMyHD2RVcj8mzTSBjzYSeHLNcjc96mvrXzXWKYikCVbt3",
  "key8": "4sLyctribz79WB6CUethDGxngrHaefuQ6KvAP4pVMhAc5GiQP6PrPjQjmkDokqXFFo9steMW9w2n3CuVj9d5Bau9",
  "key9": "2KmA1Xi5ndrf4Fg5mNUpeDaeGLkw2YsBLxNRpDiK9X1pnsjP2D4JbJgCAu8cozwjVXGozJHpAnEFeupZkNXnGoF3",
  "key10": "51DE4Vg7S57mrn1raBd8heE27DZbd7gkoWoXymop2k4eCw1JBfFtExGVqbgkLjvk6X2dtvLneUnadBsayJXatNXm",
  "key11": "5wxhatNekUbjJBQEipdM7q5DP3dFpYTKBtnDa6mWcNvnWAFtYFENkiQDfhbDwen7b2xmr1jS36f3L1GCHbjB2r4E",
  "key12": "4kXrykEWMbPFDnfCtMswnFQ5QNocE3HisQySjbpRsfDSvh1qtfVWe5KeFE2yjnqmexV1gGdLa448aNZ7GQtJ1u5B",
  "key13": "5fczEjYyYTJSfASyp4AgaLEQb36mLUjimcHV9LTZ3TeWfoEUZYYDCWJfAcVYRxsaS46qQTCzrc38dxDWDCrAbnjq",
  "key14": "hjPwzs4Fwix2A1F8g3YGtHdXhxewRXdx1m9XAHH2RQMkaknMB8vLd5jnNYfncMVLMH2NUeg9DtzoZZwSnt3wEKz",
  "key15": "5t6biUDhUPYShRdnE3XMG9uJQkooAHA8is52vdxzcKodAN43jnEFM17jXfZVbqoqjJJkeSwunZ7AYSxDVbtQcwhw",
  "key16": "4G8MazWgrHjrWKTNUnN15zpZmsVyNy6TrU5NM6r4fEnVPC1UHfZ6VYGWgzC3H5vLmxoRgYfG6gZehtiRVdbzB7eR",
  "key17": "5g5APrbF63hnMJtaGPaHFerXFX7T6yCoSzvzvwb9wcFgSVtPk54FhJwYyD1RzjauQCQm6ETTAFTAL3TJGuqdSrdp",
  "key18": "5xHjGnsq9pvxjHCsfsEHf5cnj9sj14uhB5PpFYTK1K7fDWFXYXueyNBS4J2r5LviKtuKWAo2YKW6RwXWgP8WgjLf",
  "key19": "yHMvqrnVV7mdVJ2bjw2ZunfvSKTrE2fKx6zbjhfsxVqnjULAmLF8e9uYg6PuSUvSoPHMMe483SUgt4qaoUprp23",
  "key20": "27tJtZ9X3f44krVUZKiavELePcbGDEkBEMLsc3qThY9GwKDkFDGqUG7EnNi56UHyYv9z4RbfhYjswFvug6f9biv7",
  "key21": "671ZnBSzv4LGL1wV9CwtKnLs18yEVHgeu4B3apDtbSEEbfSwDQWg9Z76NRQW7YNo4gLoixWoz2XjReShjCuwZDgk",
  "key22": "2oKmt17syy9uthD5HpkaP6JfcBUayVLALhLbChHNLSDyWR8hSq5qbS6DEUJjkSonBEavnj2u2m3e5iJCCtjJDmy9",
  "key23": "59X5nMMcy3MRHeBMZvkDQo33bvwgaVpp95i4c8FbWxbpLhVR5g8bJCsDXRo6Q9FCGFRVHaHEJt3JaTSANsUd3uyG",
  "key24": "4r7kBYBgDCQT4N2bajAux3MSrR4xgEaqs4CvPZbo67L3M5XawBqb9iAnsnf5nQ6835DhN9hEGgc6NjCHJDsTdZ3P",
  "key25": "5PWnm8uwhYp5toiUpkK6eFnEoXJUAMrDY22zewzTp2HBCL1vMrnWDhWYMyxjfq2aEgq9YnEXnBBfL1LkM6j3zwG8",
  "key26": "3FuFCAWpRa8pS7aZmUn11hoLYMQ1grwfNFK5xpLdtWB5Te5ooziYpr6FEEHDyymg8dmUKNkPUjDfvT8Ewjrgq8YL",
  "key27": "4h7LfjuhXh4gBMazUwLHX147gFuhKYsMMphB6i8PC3HchMtfBDTJ3dqLJ1k8DhHeFduxqa1imkeSxUxfd6fFUowP",
  "key28": "2nAfFezr8LbtDfnufJKP3DTsMpsHkUibpAnvPLSF44rgMuA3ojfh2LCcNixDh7VzSfCNUrUPMLDyUwNRzVsXgizJ"
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
