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
    "3QJmf4vaz3Rd1ayPWh85JfB2JF5eBRBX3i8px9XbgWycYNA92Vw4Sr5XMTUV5uLLM5oh8kNCWMBEKq3f1PxA5t65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dui282RSsaEApfExmCt78rbYiwuB1xdN86hUEVCjk9xjuZTbuXdJYWaBBW3nsd72TmwyTUJxkF7qXiFgkpVb5VS",
  "key1": "31YiMeyqVVfgg44v5gfwUQxBiLdLXVf9HcEvRp5yeYQPTJhhooKqf9MmL6riyygHHSfQJ61zpZhNsszhVzRrvWUY",
  "key2": "FkTmHUsdVcbVB5e7f2HsqeKD4o9W5tW5tL8bSrPPUxCaBAWJuaVBuPC1XUYhRT8X2r7XTQe3PD2b5FK1bFuKtbQ",
  "key3": "cGuf16hMrY7dj929YW13wmdwDFz1wT2XTuTFgoi1gGWTkV3Bnkfg9t2rSiqoRivMwaAkKVooHVRcRJdtUQ5J5B6",
  "key4": "4yhXnPtzzJNt3EgceSSVSk3VNngK51trBUDwTZABNDah1spExacW1KMiGU2WhyszoZDED2CQGqNjpkyYvyHiy4qi",
  "key5": "4TfzjCQrMLb1rRXPsa229a2NSUxo8nMzasbYXKFJRPsQCRvdxgJVarFdjY49vaVUHYDepct4DAEC6KHSpg7er4zf",
  "key6": "Zb53MZCmAjJqz93qp7zZup8DKaUMVFaf79XS6R4swrVd6UZ4oiZFtURDtKRvEYbKk8HEH7Cngza82ukiJaPnYse",
  "key7": "2VQidJdH9EaLCxgM7VkwLWZ1MT1Gk4TUAcAdpBevmn7i5K1tGUuLNB1uAUAf4mQAkrdT9vTNMyYFw6mk7vCx746M",
  "key8": "2tMdqdn4q5dti2HqwhdDKs4FJ6NGToAmAyvpZgniCaQwuTBhPP4LzZBXtzwkmQfjQDZfp9Be74hH7toQKko1yJga",
  "key9": "2JxSNg5qqTJ2mKZYgQ3hwQmCfTsGQqMyqYSLmiyx2e8V1JCLaPcvCq7Nq5r85kyLXQcRr55HQcrJGfjRL7Ea4eSG",
  "key10": "4LRRwtaWuwM5aLjMmuLmLhzUQ3FeJP6Yp2grNjquENyFJwTnjTAEQfNLZwDyvscxtKSygiQrfhJJirLHVwPTJdL1",
  "key11": "4D87HcvfsjeUpxtdbrQYv9NcBfoUdoPtDcYfHFj6aeUNBynFH45vpp2oJo3Vn15unkGbrRh8pwnX7AWiGjMSnqv7",
  "key12": "5D6ZeFBUwF4MU9qcMsfCqQiopnS1E82vW2fLJSQ13vPynYGzXjiFmLEYLAqqN1jXVQDABtUx8RwpZvP84wzdTpKD",
  "key13": "5Kd3aFy5PtgqYEda6zgg4swjZFR1aRHiFDCY4GffqjXCBZHG35NL3csQ2yWiVyCpwiLMyXTh1Hb14V3gUFAg7nGj",
  "key14": "5pjCmDhHbRkrhGuHC7NpZYxKXwaJxycGz6dmpBw7p8HouzDBFwZM25Ezs4xcz49wQ6EwLd8cJ8qowykncdexjViT",
  "key15": "3rchaiZJn8RPbJJ832saNF6vxQ5rS7TXiKbd8MvERbNWfHHLT8fAJbFLnNgZKM7CRbTwVgwbUjAiieMQgKWtMtHu",
  "key16": "58R7eTxKj2KTyEzAPx2ogjotZdShDXEdXEQYrBeWooXTqZAJ3TEm44YHxd7y44tgribySdkZ1aEK5Rfe6UcnB8cJ",
  "key17": "5J9cD73E6mt7theEtE8Rp8f1A7R52kP7qM332uZC81WkosiX3Z8V32T8fTjC1sDja2qpPSA5XehkQXNLQm7S45ex",
  "key18": "5kSjP5TsWauvTCk3YeBGtLKrU5UZqXmrbn36Znbt29V78G1o2PeLaTDcjQCcEsf9zxqZND8CSyYwKUwPE2WMvHSk",
  "key19": "3ztYxWALowqwZd8b9GtDxaDhKWghYFPR9G2BtaZytGfNWKc1EicA5SaHcX4biWDDoNKDRVH67z4MBeH33Fj4RyQ4",
  "key20": "3eEG94kEJXCy67P7HAX58qtCh9x69xS3hHZwzsqg4Na9bqk1xAdh6nhgtvVhA7sSJP4QHk9bdJYvPNDJp6vT1NXL",
  "key21": "ckuEzX95typCJrJisbDEcYB5LCX9uCwom5MBw31s1HDJExuqHkEz1ofV9ZZoVu87YfMEwBJB32fbUC2Xc44gSR2",
  "key22": "4NY6UFwygYJqJPHZj9JmiCgFTHhQCE8K27ZQZiBf9V8LnECHQ6MH2MEzzB6Hdom5ohPqQBrxK7cyPvcrPdZ9F2a8",
  "key23": "mWFs3Hmj1q5fsG1a4yV9yM7uiHfYdiCuNH7idUXsCg6LVLYbiuuxjHibnxvkmYEXhgb66RffoTAbuTy7Ywx2ebf",
  "key24": "TvcAUbuVhxfqCLcA848Baaz8NsJLUjL1LcdF4dSTA6kUvCL4qT6UKSkxCxiWVqVZRjShwNETUUFzeyeYkVtXwrB",
  "key25": "586KRLdNxyyBcccEwy6Ab3c8181TGZoXCwqasPm1r4rH3ukgMwkJpHX9B3SmwG2iTfLK5vmTGxYvxV8nuu2QnLYr"
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
