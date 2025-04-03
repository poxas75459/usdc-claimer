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
    "3aSNELUyVDqDiuG3XWarGjJwnsf2moLFYJunmBBiFSo2Fjm1LXyLYSFkkCEyQtFmacbGeQfTeraGmQwFHMvuu26N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VL2JPrCN9EFZjf6UxMM2d5tU6yFr63iroM9wWhFJG3WPxRjYoxGs1oL19CkpmPsecP7pBbFRYZ94DAj6S6PX85W",
  "key1": "6J87vX2DhkygrDnMUEHLfx2hZNXzYQK7du8T3jDJPAGCaz17nv5SGEVmTqzetTVM1uEGDSb5174FMfVZURd2W2S",
  "key2": "5Q7a1JnwpTLhYwDMyDPni9EqhTBEmwgjuxpYVwKdmMZVpWUAd3P9ybDUy7APsi3bCtbQ4sa2RQTRaxudCiCDTUSd",
  "key3": "5oReDkhmDhos1bNJgqUzwTrpAbGMbTB8cZ9AsRYed8Jzi6dFBVRjqPGwRG4kPLCPRayWvgqnaH5hpG4YoKQfoZjd",
  "key4": "2XM9WLKXUZZLV7cTSmEi1q79Ao1Pu8GVBAXdd923nqoYhiCN2DCkzcfjWwGccjkhHCVzW19mdX9qFdEEB3fig725",
  "key5": "5QfFadKnNg3tBPDhQKTg5JVCVJ1zsMQwuqDuzAGLFDW7h7ULeKqTZ9MkYGdwQhKV1M4Atqr5zHj9UP1zULY3JoTi",
  "key6": "59UocrX5D1TrPmK35sU92JJDmdYhGzfXr9rcZ7XGCzbFckHqQjfWihy3mG4GHBfzCzhhYR8iQwdT8Kxncamq3tgD",
  "key7": "2tLvnMvJdWgehGYUywTDVZnyT9msDE5h9pS61ExAU5gnbd78WbRbvzzvymXe1Ro5vNiHJpqsunwGWJnUmPp9ZbsN",
  "key8": "BH9RGQd2H6Qm7k2Sk8XnRT513N3BQw6qSWVKZpb62NQGn9GvXYcqrG9M62BZvjpAPfvHaLxZNHBCpUhKyVTHBai",
  "key9": "3mPRdfegv8u8wcUbVvkLoigVAQWQQbJ6Y6omw9HLvoRTX6FEZGiF52993zLPipBue1fiQyw586Spttp4NQd5mcCJ",
  "key10": "5VMfkEhGdDnSQGfdftLr6agjAX4SCYLoGMhMXVg33CXxfPxrEeBVG68UwVe8kbCQSR93NN3TdLsKVJuK5bqfmNra",
  "key11": "21r1GEYAMN9yx2FiXuCUKqeqTAE5v6pskwTC7mU6AFFXzPyDboMJc4FfpooKimNjRgf6rjW4AnETz3w4VtyuUYjw",
  "key12": "2V7QaokrxCJe8RyPpNYjo3h8ceVENbkDvudZom94aPEJQQaak1TYrRBp34Hiun1CKgPSDhuvwoy34QJzrWbsq1Bv",
  "key13": "4ekNBJTys7r4w6xg4cK49CfCzK2M81qgmcfq5qNAHacHs17fXUzPwVsukkFKeD1qcfUBdN9pkSS6SCPHBmHU82NM",
  "key14": "64KQiq5NWkab53vUVZFoUacie2K4ZVUjjmcfwMrXbugv16bkD5EVuheB7wdfZXkyyo5cDAds9j6K6gVYpU8k2hrS",
  "key15": "369GsyCpy2BBY7pEBx9BPsvXKGCnBqh2Q9AgvggRo1eDPAtMWuMV5QyKujYdj7NpsMotrDo45hAqHnyCwHUkjmEQ",
  "key16": "63CGpDFGJgSJMLgyw46XS93kgGiJMbdbsA1x2Z2TLiPnpixDaTR4Uc2GKTFrPpgqykYXVwRZohBL8d1WfvGiNdhW",
  "key17": "34QsPt4aHEcrB5trCHpCakaD1389AaxKa9na5xxs6d7Bgccmiw7vj2Npkdxgpa9yPnu6Xt83EmiM73QYrhyrFYTo",
  "key18": "3MYx95zxX749nSJEjPCXuLJHRX5TntCoV3VY6RHpmjtAyu9tFkKpFrqjgDwiV6McurzPmMybBaBTQCpumH1JRzuZ",
  "key19": "nbdocqLM6t4mRLJDQeDQsxfRxXxYTprbrzRQZY1FvZskMorTHAc9614QK6yyCgviSvA3CrczF9zMHFY22twghjc",
  "key20": "4RokM9ZgYGMmJbqcyGBXWvZ8syeLrJFvWypunCuraqPSTjGspVuq6Dr3cHqZZ124VZ6BRygPrNZ2KyanzkHsc4rJ",
  "key21": "24bw3bXzBLhxxGjtWbyfd6mw3jqfTNhdfgq2RpFwkZ4f4adoJ8W3hStZiSPTEzt8feeuKZhxWupfhDzRrKCFParW",
  "key22": "2Wx83H3jygw8B6jF5TCE5vGFAZspYQjetMLe7CMJmNLa6ozDgpxAXyBwLNELhUurAQXV4ysr44RHDAWZBxw9Uu3W",
  "key23": "5SJ5xQ4XqfWxdKggM55zaNBLcKq24kN8FjhgVLdjGcZXSmZS8HcAqn2SuNxUZdNtdhAZsYU48smbzmNeQyQgueas",
  "key24": "4fHYgG27HeWesWBg3wR4zJjXQLC3vsvSwpPNZmk5cbN1yRa6wrbnNZGDnuswbf9gSQcDNrRxbR2ZMrWcUdf185bf",
  "key25": "36DqpDLcQGcLpkbMeM831n32VnKvNhgazvEZiT2oYsffYoB47aTaDtXNp4hQ94K4ytVqLRJ4op2Zy3SmvkCjzZDr",
  "key26": "5WKBRVM2XT4zeGppKX4EJaiTSBDnoVtp32sg7ykaEbQZcN4dszjcQrE2ZFri3gXyTtCBPEjbLECkotq78rm7nJ6G",
  "key27": "4JspRUgYEdtcX7pfQ387gmJsA2hazTizpuun3SXiDiqv4ocDiMUQTT3p574gEJddwjUpgbbErWWXDDc5mKCqsXgX",
  "key28": "3NLP4HPC2Wy9pVUNi7Km6cDPiCKYqWFftPor2N43dwDuCijGMbSZPbqzXRmofjdihdoycMjHZvNkmUHShGyuwHa2"
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
