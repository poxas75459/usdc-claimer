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
    "341GpwjGj3qdC2cRWmQE2JFHcLPQE47f5B6x3Wh8gXcBwsXjKWbq1T183k7odQ8z9Gg1pLrqdDo3YSUpY6sikLFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srUn98v1ak27nPxbkSSx32r2EMEvBEzu77jqDTnXUWPRemRkpZm5cFXw2TgQzSzfKRp9cGqGRZ8Nv34GY2fbHQN",
  "key1": "4NeHc6DDB2faUQAeskdS5rJZZXF5JdHpfUFrrnuKFHpfxfE5qy2mHxmhm1KwtwjybC2UWPaNr8VFd4MnrwoMFuSw",
  "key2": "4DehVcyKH4AVMB7oM1PR7zU3nQBdSHW4HpsoTFhu24bRhoRsB8zkwrqLpTh1ZZ9Zjufh679wzXDhpHNditAFmd79",
  "key3": "2txzbMWba4GfUmCBhQswUL4qVAm8teLzBBAGPTfzr4YdR47WPur2iLMwuqmdCtzBo6QGJJuJdYvBXDQHEN1vgU3F",
  "key4": "NBjASsFMo3RVV48wHpwyPTerNHmokzJQwrZDjdabXSLuSpFLb1aebQgPkxayoqePV1g3iHMXt52vdPouLka1Rkj",
  "key5": "3YbzkYQG5XJgQbGJkHrjDzRh8f4sdY4Lyqh7y6E3k7B7YchdKmGRShPMF6jKwzsZPSVcwAETdHoeXMMP5JvvdSaj",
  "key6": "4wjrUmCk7Wd7LAKjZTQG3vcJpuhMCaaLzWZ7QDmdod8HFDJkfgF9q6x5LLywsbd5yW1TSCjo1z8FkCKHTjTAZrCP",
  "key7": "36rtVLyufQfZZXx3UrPmUvX6QLJRqcicFUF1wvuqP7HnJncEMmRHSmJiMUrSWwMz18fvoSAUqN1aRt4zafjkHFRY",
  "key8": "4DRNWLP1oMHyXa5qeyTKndXgTmWAeM5gpzTS8T8mHoctvh1bvfQKSiYvN2oGnwkP72GZ2BkYqg8sEcAXLCnrhE7i",
  "key9": "2UifEv3CGr4oaNoQ8ahxyP76AFMAbHB7Q6ybVNccwS4WAhkEEA2kVxPxuqQjvBCgiRg8vEPcJ4yEZoA24WuWACvN",
  "key10": "2yhb53bPPPKDpDrkRjDK5BmgWReMKrxuuBucAL3sBChWEeLNA67N9Rr7aCofFLPkft4T7hNpH2mdmwnhveNRLuNo",
  "key11": "yFaEX6eamSvfEMqaQVQqu3z86j7tohM8PoU2iff3XfzU5E1TrWt8QZ22DtnfQ3TaxTrbZiBfTed4QAyvEopyTg1",
  "key12": "x9zdKH6cARXXnJkC3SryutEw9pb63iDHvBYZdF6ZcAB9nBFmuwExaGAXXyF4n2Ln2tQXFawxUYiN5jUgGr2yHwe",
  "key13": "3vb7WER8y2V8TpUUhG8YTJCwo6HjGxg29cvxMavqcF6KugCGZASx9Q7DNnoSD8PqSqRWZaKh9YVkwyqxqtr5AKWd",
  "key14": "2rVtmHkU2hMHrGCcb7ZmBXPtRYs7Y1Z95JMrTgxiJSAmmmgXCmten4CCvgMjE6V61S3iMxccsYLsZJiDoRYB8WkE",
  "key15": "4Hks8XPekBzkVz6LjHjt2HkdKcSMXw3afNAfT5vndruDipTMCmfqkA9v6MWr312ya37QsbCRTHFYqZ9JwiQJRmcu",
  "key16": "56rX1ujfBeodRmix88X5VLaFuJdVmUiPjfZqUKD4YJBTz9nbfLMirw2b1UaK3axL1Gpp8bUZMCyyUj55eJh1UUDk",
  "key17": "4UpAwL5mou78foNh3AbXcMyB6q2yFCWaZSDUGAzac7DZ6T6PMDzmZAYGmTrn242xrpV6y5bPbD8uZzEHKo1va2W1",
  "key18": "QLiZs9DeW98gzpUY6gHoqgUksHBPE2Y7J3Xq6P19hSfx7sqSWGWxgeL29b2uMkszN9uRJkzbNBWy1WYB3v1APk6",
  "key19": "3SN2mpB2Uv3jRsXUwGQK7p9gBbRGhQ7H5yAtSYaxLTHaPHEt5CCSX4jbSQB5Laoik8CqXR9jyawC5WaEbGNdmfnk",
  "key20": "TCPQcu5mRdKsoGbQaG8SRt8JbjK3heE8yHjXiM45h23xAtVVpECFXsSRh98BsuYNTLtTANAWtHAH2Mr7MesZrLq",
  "key21": "qyw2S9Ym6KW91tCQbohPGKobkVjQLMdwx3z3qWPY9hbUtL4E5ZMSCf858sAVq1oDLVNmAXpT5YSEdRGGRLcjQqW",
  "key22": "2oXuiCh5DvEM9QZDPE5di1947gFSXyRC1GJCHvUSYqNPeGKwUCePtwaD3QGWHwtZgpBAXxbKqugrcgL2TXN4SV1V",
  "key23": "4xV1LGgX2LbUphLULoiKLwcPwc3ziFQNm7QXu7YocA759nQdLmAxByeXDksS7xV6QBNKSSdXm1TyJsGrCbFc8LZ1",
  "key24": "aPps8gk6cLwBPYhDkd1bc3zd3kV4ujUkv8CcT6tEUh9p2QsZGtYapyPmd4fhkkNqS2UAgCKuVpzZGYnnDGHFRY2",
  "key25": "5fonmXBYVcDJCE4aUhwSH94AhBVTCUoi7267VEcC5bvcDy55v4eY8BwcBwevYmFFs5vkhQudJRsd16yxsWSiS2bs",
  "key26": "5MSGFvZn3uBfWksuZ8ButmJnF9qzzSwVLkw6PB2pmQPaGhq4mLqiTKvFkAn7FrTBSo66oGTfng5ruympoLuaKVtq"
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
