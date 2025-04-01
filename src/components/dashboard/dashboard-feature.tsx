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
    "3gsh8YrxBm1PjSBA4LLcH8y1cRPpPumBp1NtRQcF44Q6nEqceANguG5oXE5ZQEYBAaAivwATk98FG6c3NiTrDowE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43UXV4HogdMxCVUhayiuMban6y5zBv3kJYYFV1TUKdfZikaiMRPQ7U5NYTfJ4dH2pWnx7eEFVocw8PyHZPPnHmii",
  "key1": "ZG9FxXvagBH8xmJybDeK3Q54a8H89epuoFQkiwzYEu66StaLcM8jEzRei1MKmL9HZFezXVEhZzqAPv9i39hGB22",
  "key2": "WGKAHYoKeoLALmLGvs7wWiGxZ7bKpwEWwgvMs5ou9ozF4yoN7SA3W7rx7BbJ9WfgpW8MJEbaa72y82ZFtrDKfFE",
  "key3": "zcpkTmzRFk9ai6PWyhaLnxJw5gw5nKoxrmqDMJCiNQeWrj8JGFdHwnCRCQJcVyB2jiegVN3GpeuE7z8zxZkv6Cz",
  "key4": "5d6JzEtRWmdhnM5g3xqYMStYFeQg8DesrB1aTweVgXVoTC99eR7efW5gr4dKEmcFuUJBniRXrqdSqbt7FRaQrLhE",
  "key5": "2e4JycmSS1zx7jNtU4sgPR9UH761DJCQgSqz6m9MV49PU2VgWyw6M86ca3GbF2MFCfmnpyyMkLgLXMPuBTMRQzYF",
  "key6": "42hpSo194CvHc2u43qr8R97xj46wnUuemDhomXSEgN4NsE7qtLodUjVq5ZiunEgNqNDhhy71MdAd6Y5Vr8HfCqWr",
  "key7": "4oZx5FXNEyGWXJLNvJW7nwDRxusu5B1YWmUBb6Ry9KMNxdXp8FPuWizgg25vEZqJBKv5Q5Za3F3KU2sUWdz9M88P",
  "key8": "24jd9ZM93Ux2xALMVZw8sUq5gXwXdynKr8FCte8PZzHkoMxYg6hFjcpo6HBEiVwenBo8Wqt27gVcYMy9iG96z7nE",
  "key9": "2uX3V7z5f4LqF542QgygAHMya3eRiyFfuGAF45ntEPiYgrrC24SHHzMjQRLoApFrcYHi3uvKtPh2BQd9NvsYExw8",
  "key10": "2jT6aLFoFngA2JiNVXvdntP5sgveVUQAZbQUyGbihaTTahSnNYS4D5znb5GuVLjquLxGoJhpfo7wLcZiiTNnBg6A",
  "key11": "4ukiEkMihWAWx1ccnmcbC3an6dQjoLaw3aZAgQuiwUQVTmkwHUC1km7CzcZfhJwuw4qRdZ9rcTqoR1iqs5e5a7NB",
  "key12": "4ftMcyHwhoBLUWdTG5PPYQxoCWU9wED8aJ1F3cYTRELzWgC1ACeEDTwTxvZK4jGVD8rBJieLtZHsoKJhmDjbj22a",
  "key13": "WirT2H2EaXFeeFCTs3ych1uPFkLtufriGXGsvCaczdX42B8KngxPuJGy9nXbnYHawdekfPz253CPPMXSRiRumCz",
  "key14": "3T9TSqbiz3YtoPCZ3p3FBFc4r1Nruu6aTv1KLrio6tq8MajkEeGujD984Z2j51PpW8gAKoGtcNC1LmKo9R7nnpAY",
  "key15": "4Fo9UAm3dtENA12B6c2ibhEiSnkMhMTGuvoyf7M1m2cnWMHgBMjvGqYHwnn1Zs2Rrro78w2KLsZ1guk3UcCCw9D6",
  "key16": "3tfuUbud32rCq9ucGanoeg6w1bGLMKYeEVWAaxurC26kLHdj57HvMVfRkyRb8sEhtmwYk4MGw3xYpbHPzKBLse16",
  "key17": "3rjd4ot1xGsJCkQVXH8ovPGZ4VN7rLrasJTqNaeCbtNhmjvH5GV57M4JiRAdDC1ZhQootiaFXwH3Ftr8HtshxCSN",
  "key18": "3vGtA19JXnnkeetSFM2KjmMhXea1fCasWaAF5qPqNrH33sj6jJGU8vvPUvKoYoPucytZN1hkSkDkhGEXtnCYYegB",
  "key19": "4ofE2cq1jxRcccKAjkcCgmATpTMN8eW6FmQj8QV1D5nYnSaY7VCMgAiYye8nnJqMHR8Thvt8zRCAqBgbm2U8BJPd",
  "key20": "5tpcub9bW5g7PijRSm6Bqe1cLtR1ZRScGwxzZL51CDgZxkRcvkkSu59bEhN3B6BVEwCydgKBeusikbxztZYTvD9V",
  "key21": "BvkNzxLNeUruhf1Wo9v95LeA4HQPsSLNAfApNjWUMMsM5tJWGNcJVbqqBX9JrPqD9vpYhnp4P73vjVpEmxACpkE",
  "key22": "3szdSr175kxnq3somGuh8zmdMW7i4htyZrwQsK6HJngvFHvet5RDJyz2cxEhkzyqdBixrhN1zEYSpU12Va9m7Qsk",
  "key23": "j3yqefJQwo3SPcgPqyEdZyAqKeVHVJ8Tem1dkKnq2MLu64TCYz56xaHoo3dSKXQMibyrjAtkUEjqXn5wVs9ktjr",
  "key24": "tEyZksrXCbqoWM2h8pzao1sJ6Pbqe1WiQhscFFxr5WTcjrnt6KRDHVDZHEHwEHLj1VN71XJy6nM5o2e9NsVKQTJ",
  "key25": "4xM8xA6L8wYUSpD3AFnKHZuBVfpdWjq4aswVvxJnFeKqfa3phTBo4CLvxWyApZLYNesC8gAUx5miR7KViDdmhhjW",
  "key26": "274SXSC1tVPvENmv5Bhjwcq579FQ6nf3DmM9Q97YmcoTW9YJEVuYR9hALWCvPCpjrNHx1T7zjJgSsCwM1wJ34rKN",
  "key27": "554Zbv6xiLKdq7EDuZ2pwtUr8gQZgbJxRWfTcoSUAJNsGbuQNc2mLjmzeUvmpNwDLTRbNGA5EjSMdHu9yrQHjH5h",
  "key28": "3Vnyj9eRkh3uLk1juQ4uBvnWbHuR8amVH5NmqBRASfxumGupqgd7TMB12YqghTQUuLV2SGz5VFqFYbNhYZRvG5qh",
  "key29": "2FveUPVwGiKWy16Rk3py9eeeRo2sUxftZ8SjtZao7fWQfeCjbwMNnu97SQP1G1jh5yDgC7qqCvLf4MJXsr95HuM5",
  "key30": "5A5KGqrPJGHg6acFR9ESApJ9Sn6CZbXPab2f3aZS5a2kTar4u1bQau3WzTYHkiX93xVrQx7NTtaFvRPdXf3WFhkL",
  "key31": "39hJchFfLoWrPPgj1HtbfJVyk44FMiHnaKCeHJLUftR8c3b48KqRg2iHgqjrUFnvp15QhwpBXopvpF28iKYpQJrs",
  "key32": "3eH2B8gxXcXZVmrC1A925K8jxvD1BNwL3SdFTM1ZP71AdcU6fiq82kjbdW4ZxxWVafHGH2Zmx5QLBkhDT8N2iVwV"
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
