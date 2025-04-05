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
    "3MEHgsZKioKXUziRYNknHAdkxXurqrmUMMx8tst6ph3yVVFsUatUsSQ1zPZUZbZijjFXtK5jK7SwHZcmyZSLKeoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ELTWmDdAp5ekyvhqUGwFpiyGuQ1pHnfGhfwJXUvBezdbhCCfgA4X4q3nPdYkJRc6gbvAqtjJ6KnRBGmGZCVjyuV",
  "key1": "5uuFw192MuuXKA4nqtAqh51fYVfWE5iSnyQds497ECqh6iPRQx2MAabincMB3JEf7sTrWyw6hbRAuJQZbKvnFtin",
  "key2": "aRuEgJkixP91JJFyYq1S46ajYHh1m6bWMgL8igfcciVrVB5Ucup7BRh91oMsGGSoTMBse5of1Y6CWBq1HTuLPjw",
  "key3": "2RNwCLGzzokMYihM5czpHuJVNxKEtria5PJHcWkfBSEzFms3ASz5aTnGBdpxRrfZLh6mda9Ldt8Mx6UFQXJrTG6J",
  "key4": "2YPFx4qmgoTwDDx7RV5kZd7NYshv3LwzyNwqj5ifCJ4mr6GpLb1bJDn8BHpx3iaozHUVUGzpgjSuojrdYbTfgBtQ",
  "key5": "t5KVCc1wU83p6YvSRxpd3ideUvSTuWvAXVMVAVvdEe2rgWJ63EiaUnroSUCSDtU74tb64WfqiX9274T14qxwV9s",
  "key6": "67qLYMUU9DMEAH9Mxwi4eTfi2u1XpfpAG5FwzGgP2KiNU3sxvB8DxdbXzUnKF4ogGeXrguitsGMiXu4qAp2RteDN",
  "key7": "2c5WJoPndB77FEG2DpAY1HnjEoav6MQFG6tXPovQnxZRPDMEnTqswJJq9Pf4JFnq2Z9GuExWtp2kpCsNo3CUsUsh",
  "key8": "2UcinD43YAYNnRtDdyySA1efNzkdxq9WVdhE3tLKhkzhLj7jQX14J58rX5wS1kBJmEw3PSbGUQS9Fctf7vtcP1an",
  "key9": "36PT96D4Zs5G65nExve6tGZMxrMRMcdyS9NsfmgYT4QrWnUBLc8HN1n37Et2dVEtYAa96zLWFZk2vxm1KpKPG22K",
  "key10": "4byLFuZdtCaZCV2NKzivre56EgmjLK65DyBpcrsc1vyc7Kb27fxmxWotFTH64bC8r5vYsM2Ex5k33QLQKxW5wJfE",
  "key11": "4egeYQWcfx182ahoHupuSzf21HYMGwLevfwYYGsi89wu1rBqFY9iPEKRUoVKGgYwEdLxram96W9Lvcg4qjdzjCVB",
  "key12": "4HFkbX1DYN1DaJXkU61tttrPu2qFRuRx7TQzZWfg5L9zCWy2fsrx6SnqcNpav8mV1PPpJ5ih7hR9wxAEBLwn7PCZ",
  "key13": "5YTwnx5NnAH38jRLS28aLYExXPvj2pPFx6Kpqe8qgc2cHL98yiX3heyesmfu5848CJKHdH9Vgnto42vXQMMeLDtz",
  "key14": "3rSvv2fhLasTXVu8jh3TjQMySwMzyyinNtxQ3qydnHKovmQBgenn4gXvztM9j5eVmTnW1emqgfKX6MbwYkBkpEYP",
  "key15": "4LkpEfnAjV3j7UEmmZdB2ezYWvnxjRTQbJYkG9ZxuTB8QdEcWe2JqoPm178f3gfCMwKWPsZSVMXJFSoZe5sR59mW",
  "key16": "f9wirojeBAJBMwzbb7mfdo9VDmCuim3pVGDL7AcDbAjQ7Bwmvtj2kptkjPrbcNM4eYwvzcFCfjZaZZozCEnayFC",
  "key17": "3dxxP66LmWToUKPyrVeXpeSazjFxzYFasAVuuvDmKtiyS1hU5E8taToXR2tipgVGX4AFeznBr5cxaVTxByQ37G66",
  "key18": "34c6YL8Sp4LQRx6R4dUj2Nzbm6NgowTYuRRJxQwMtjBRvfYdvhDPjF7QWR4Zf8fWLnPrGdJXyJanGieE1w9FJEqw",
  "key19": "h5aqeyT8rDvcYBwsUJyZbeqVki3rmLrZVUJSoH8N6AbY74enGiD9xQbswVb1GUUEKX1b4dpuLRky9A8ap29PE8x",
  "key20": "54cKKfEPaWVRakomA1VnoR2bKapQYwwbFjyFknE87mkjjn5vWDFNjgo5mzoDhrixySeX9NgrgyKECXS3Gfu9jnXC",
  "key21": "2SFMQMqqdUba2C9VXEAHAj4F6BJjKivd6WXHn91C65uyiQdHNA3NS662BBNmJtTah2PwN2ePLd5DbYQtSzHm36f9",
  "key22": "hgvkbCM6d6BUntn1gvqEiLqW1fA56FJtWEPoAxfmRpKYi6QUGpBTGjHTyKCtGQqbugHmA9Jk8tERPgS79z5FHLm",
  "key23": "26ULmMt8WLMJBpVrDDPjdkbT12FwyFMHGLbzvtey5siPkMCnSnx2HQD3LcTvExR1wgA6v3L5Gxsgxyn9zRiN159E",
  "key24": "2nCRMVutkkqm44QT4Q8fAmzUkM19u9Au4hN1zrxuyCjeuPhYRMj6YrvbHg4pDqy1Epv7uHaCgA7koVHCUp8FwHxh"
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
