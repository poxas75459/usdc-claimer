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
    "uazVTMdMXHCj7eYFvW7qbJVqLNtpwsBfYYKB2WRWVyf6y8BMfayEUePo2GwoTz422SYEeB324uNcfEpjtyxab6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XHx26pVtF2fmCN31rKCs2qH7G8q4SPgtJgLbZ36unugAV6wm3SsG989b1L3pFUnRFUfZXznCrWspCBpFH5nrnCC",
  "key1": "5aQtY32ruYor6RBkmzLWVUKFydC4QEiWeawY5LmNc4XmhSbkSqTCA8cVd6JWSQrRgf1LB7rbuAd5JsiXFZm7Zf3n",
  "key2": "24YHrpw5gpfG3xMXaiXwksmUjp6zmUBBzJnYdjY7YEDnip9ortDLtNFundjfqXnomUtoVpX1zoEP9hkCrkghQ5Pc",
  "key3": "2ESwMPc2AAMTa2iD1YgBSrexDyHkcbRAh5bQUamY8CNx6XU4U2jSGYoooUEJUup4H641edNYYjfPRv7XTT6oSVrz",
  "key4": "Ha18Ji3mVSozQ451YJ8HnPQordwsR3n14MAfL99MSoQXjvCivWZKNxRYDHyt9rQXUr9Q7w9cHquW7JUjyZJzhzV",
  "key5": "2jnXvnZ52k4FE21ZqzQEVMRMDvBKEB34ZK3awbaLZmNtyComKPfPG3G8TZnsstKrSwmjsqSSnZzyUFGMLyjjaqAE",
  "key6": "2c4Li12itS36JdGKTq6EHHv9nHs1WabjM5vVgPqDprRSNvkvsMk7xWQtUu9chfqxbiURU1GqJB6f32Lh8iWPC4J2",
  "key7": "32weU145yqhMQrZKfd8rYb9jktYp2CPjne2nJroLZfqTd3jfHEWj3BJFRh8tNdqKH7ZMdXJFBwQ9Px3LwucbG1Mb",
  "key8": "3pY8Zd2zVGa2Sd2oCbCgXpYDmd4daHCN1ReosL6VhdQs8d8EupJnb3LJdgupuzmfvWbs2HCTq4WB6TeJfeBPMU8t",
  "key9": "5ohVNpkvyFpQT2wXrBGwWkVE1oj1Ax9YV6tr1SCPHcEsZnrWHwKZTyS53P1Ns48CeUoYffuoxu3KLCNCEcdeaif3",
  "key10": "EzrxVa5XDSbNFWjH6geQ1fn8tGVFg9J7TpFpe516wAxjZiRM61A2z1ojpsmJjz7JSFwEFWkxEEdYmoRiTxdLfKk",
  "key11": "5bVNVg6EbLUWcSM1VZ7JLS7o6savwyE1jmih8Qi9vjUKvvSXDaGuDDEf9JNc6dqd8pGxvLmrE39aNDJU5kBJzv7w",
  "key12": "wLt8LUYm4Db8Yr1nCUmFW2MwGwqDdwgZqD1FmaAAbxekPW4L2roCg7aSn3ECEcstpYBqhJrJeCSuzRDnLyMSUax",
  "key13": "5ufn55iVFiLxXS6sBY3qYo3pcwvi23kMddfhRCusWnqRcRjXD5PVSNGXmy28vbZ2mdX4sdPZSGBVu86Tk7mmBMAj",
  "key14": "3WkzxCRaZDGVf9btq53yq3WmA2jGAZm9CtxsaE8FXukuTFBy2Wjun4CCeRqZnRJ7ftmCKQgZ6GeHuDjbajZm4xSJ",
  "key15": "5HrLF3BrozTts1bvfinnQooZ3oRyrVefuC4BwCWJsxWfCMdfjgXtdvkxBGMEbJjvFX87nB754FEvK3FFPxC4XBzh",
  "key16": "nWR394J8vbzfxfVVgLf9ue4UpX2Mq6M3GSACvuQ4yZ8oY8wwCURNAyeNm8CcTJ6bTCXGHshggNiRwGiTvHcSCnr",
  "key17": "5d5e2SXzxsVgSpAFRZydJbC8soavXZH18Ahey5y1U2GEKJSVF53yzYXVq35Jmo2CRLuKcS5AzuZ8To8En4hhbdYk",
  "key18": "3EmG2n8oRuEjcXdhKJmxQsnesK1kWXDmQsa9sK5Z5jzTjsCXa9and71248EvihLxLcJ3k81gvgkzrjXka6tmSN6N",
  "key19": "3DBhg26AXjndAS26kH1cZHVYkvw4RbePd1qhd76tEiwz5mS5BXGmeTviHpaPp5YiRjBHdMdiToMFDDNHW9dz4uZ7",
  "key20": "VA8cN89yJT4xq4xpvQsPphAbivhwyDLNoD5t5SRhp5GqVp183oSmazMkZ76nPrGtEviCd1PHmnMHWHHqtihHB3d",
  "key21": "3eFJaFEXs8aCxdcWvdUq2jATt35CM16kVGA7jmuGKQBBd1Zg6V5pNWPP3MKnbUW8YSZdEEg1P6bSpzUhCA4Y2YVB",
  "key22": "32vVfryxdqPgD5udMWYby9KguLcoBVkEDTB7yRRBEftqCSVgs7RCcYa14j1VuPj1LjpJhzRFjTZgLW5h7YFjTtTy",
  "key23": "3ecuneGX8kcwEAuy9q1iV2Ytfsg75R6BpewiSbbMLWHh317QiAJVqARoWo52JHri2kHZqY4GiCPWErwMnM2HjSth",
  "key24": "5WKZ4taMqnVuAPwNPaLwcKNVw8oYuu9zHkLpzEujo26dP9pi6p4VSh7KG1fJgqj2pXfJpqCQ8JaBUVgUGe2M7Kru",
  "key25": "5eUb4YHLQzM71rJYpAQBagi61HX82Je92stfQEucUV5wkCZ8PYuQQd3LyxguwmzqscAgMyktwxYcxrY3HMZoAgAu"
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
