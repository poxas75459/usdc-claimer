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
    "3pnbsEMqjQENwrrJNshnJhzMVyqqaLh2uCVd9HW8th9ionMrQf3qsD7HTRgauvSb7ncbPJvXBmfQPpuQ13ymuHiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GeKvCgGjvqYudVZWs6erHz4HftbmEFKVLvfKuEMSja8SY2MwEEqdUvEcp1rrW73qXxfDNS4Hp1BZEqSa3MLnGsH",
  "key1": "dk2V4iwuaUagJKoqJVLEVYv2Byt3Q88KNN825xBNFY8PVVDmFYnGdcfdc1rJjNfJ9Zeb3ButavaMsLn87JeBSR3",
  "key2": "5tXKUNNFHk41VoxL9CQyBcLVCFmYHfxrrksxbV2dBxe1dCcHm3ZuSUdY1GmE3oZiKYLdS25J43WDDREdCD9sn1zj",
  "key3": "4dxiWghqMUcDegzSqLrNtnrbYg317KshkZx3vaABZWbH3EP9fK1sPxa4ax837XVgFLCzyT269Lv9xCy92iWZKimn",
  "key4": "VZThkiYaemVbxLajFvGZMg48cDi7yoM5SCVySmD6DreF9JcDdpY5yJaq7vGd5o6jVTfJr6ao8M6uk8Kdf4LdvGA",
  "key5": "WXG6LEPDGG5pqHNUrpAj5VheHEZcZsY85xswM8hCf9vN1RWq9sr7L3mhQEXj9Z6cxaFFfSPFpX9DDbJECEAyNva",
  "key6": "4AWELVx48j1bEi4L1o1WPZbwdr1f7HCJs3bJKHrPQNAe3bqrBcjNMnSDM8Tw4zB76zKxifojYprsUP83GAwgeyiD",
  "key7": "3Bbsh1wkYJaiUMop4febKKBDo8TN4zTUUEoqz3KcXzVW6X93Uda2FN2Z3vcix9dmjbv3ypSbP9XG4YZixXpbceYv",
  "key8": "5JFryLvnQgW2aUi431VJkZsCjqCSDBWCSpGPmtBPqZLVQEtDNEb6qYUKRKQdSk78N2SGa4Qfi26t62SNwdwo9Q5D",
  "key9": "2Jje4HD4wzS5sdY4DQMs8QSBtK6viQyn1aQ5ULug9JVYR2ce6dZ3nTfvvyg8FBe3tko16UYNEBNVnRsQgjJj572L",
  "key10": "5QvZBAyEy4TPQQDMw1soq9AYrWubvUJmoM8MGVrw8R4VP4k9zReAaKdr1pFrA75bziemy6SjdNnrf6949FXorq9p",
  "key11": "4jQi2cFrmUUYf4CYKAyGvYMgqPTjFr81Y1xz8Z5AmiN6X3Xej2iD2VwSQ4u7qAE7EZr6aBkVmJZmfxLnvjXiiAQt",
  "key12": "3R9Gj6a561Ybc7mW7FKgZwBHoh4G2W86xHiFNkzaDHTftCm2iyQdZgFamgFXYwPBvrwFzcW3dQ1qDQurYMyQXFFw",
  "key13": "3Qc4vmUfpARei6bhgAwmn8MpzYhvqpcvQcqUc922a7T2BPKuo4NPFnTjsnZjVSLpp1VZokKeXLEyzdQN9b91NEfJ",
  "key14": "EY34sHrKTTR77Mj3eeWjT72s87msUhmiVWccESCrJXbf9aTJtYaKMB1dtPTkiTtaRh7pXdcCBR4EQsQVvoSt2mj",
  "key15": "5CwWTFUPb27wzp6HpZdKY3yfgLbReGuiFXxHRsG9eLH9cm9fNBSQUVxPmwz42Pyu59hJGva46kfdD4gL87fp1pW4",
  "key16": "3VXpAHmxnC2KGQbifPQhYYxGw2UghhPdKNJj3h7BLPFoHWPGYp3JMSDF8TZxtBDdyhhQRwMYNzfDoRQh9oJCmoj6",
  "key17": "bzs6xBs8kRXcGS1JPYuGgP3KmwS3MPuJ82aTQ3SZkq9PGH22ZkFDKg1JFpMiLKd2PCM6PMu1q4AMC5hLyWfSqcC",
  "key18": "3tLQEu8tGkxjR8vx6JeM8F4ynqoYRUhzMego9rGjR7PrxDkwWZcWVi6Un6VcGuYKYGV6XJbwMqR1KkEmTb6fbBtx",
  "key19": "4aD6PghEqJapb6Uww6MKgxNYpseb7q2zLiJhK77EiftX4Vi41bpQgoK7K6NPPXLovxyeRRQz247Fh2T8eVC8Y8ZP",
  "key20": "th94JuQjLY6S2BDdT3Z62ob1fmvsuU7R3jDFez82aP9aAExVAJn6SN32DqeDd8jzKovHpWMuy7zu2YLwXNGjezV",
  "key21": "2DBaXeT9hZSTyTRGfTzN6g7aGVUZbaP7DhYAB2q2FYVFdvY374jHLAwxci33MVCdPeW28xnRjDjxwzrmDBHySvT6",
  "key22": "3ttwGfZRCGdAKNk5iMk3tM3f55AQ6yhnhufhGvJMccMi5NjexBB8SQHwBYeuoNoCtxdZZ9TP1bdNZL2g2KprVusc",
  "key23": "2PGBhLHCBydfFkhHYsJqSZZ8NkkcBtNmTgcjT9s6c5vgDZ5vKrmR6hU9kQ78agnpnknhcr7Q2d8TzjdfLbBhrLHY",
  "key24": "5MwSHEPkGTCRW9b2wA2oUAzi1R4fRQeRjJkkFUYPSs4BthbNN1GDKFt3GoppyoZU8ZN84GttkSxx4cyUhPJKH8ue"
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
