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
    "NKDHWKqFrQHYHmCDEM1hbcEnNG49TFAB6NA4U53NtKn2oEEak1afvT9TxLMeN4B8bpWPcJgYqRUUC6urZUTzYbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nra5or3V4PCn6BDgBtwfj8qWr3UjmPEA76nJpbUm6uEjfVPSBs2kzGsazTQs8AwxgzgsGiPsDwa1bSLmSPsPn2W",
  "key1": "4rfa9apRqdFpgTPEuhxZU4dPfjsEtfofjcg6yv7eNEmwyj3QM3vszRbdLa1s1f1QMJouzdQBJ4LN1fErdkr9Kuez",
  "key2": "5XeQzTyL6N4RP9u1MutGUz7LzNGwVqFDeZffRGsRrKV9LQfoyq98jmpk5dGRoCRRUZU6ULX7CJW46Z5qGeWKxi4D",
  "key3": "3a3TrdDzeTpL9k4oob8Ekh3KRXqGxJvmA6dWfhb8sHQiLvuWpyepm7LUyNG7vkdR1ZbvT7bAQvXsRP18TkN6VZSL",
  "key4": "5MZA2TBaG1UHsaykim2WUJ6HxrQzwQVJKcR66Mj8JFe2s1emsBm2wriaq7NHtRHYQEQ5fxezCqSC26odqDdQZh4S",
  "key5": "yG9omtgxmC3SyLnfkiqwJhvqH9u65MdvJQCi7no9xdaV9wq67gC87wqh2ZHcJrxjqfaYqSKJ19Bhy2fvJsAtLza",
  "key6": "2VB5c5RbbPo9kfaBtLVsaHVKbEmidbUf1KghXx3bhLPTrFeaf3ixf4QccMEJJyfUWq6CrBPnpr732BPBWQEJMa7Q",
  "key7": "WYDUFoHwMXjcYn5GpiJvei3RZnjiWr6q4vv3JE96b5ebDGnVT8SXfzWgPdUEYkqVco6JroANHfVAWyQA777yxwc",
  "key8": "4jyfW3juysQxv7gZbSNDoVuz1peuyc4LuNDxdPxfozfxeXdF6wspV8pg3AofJcDFtaemNW8yD6zksFFCQq78V8uM",
  "key9": "2JBope5wfTVmbngY5VBRUh32LgRn3QQdBM1RX3mEeFvgsv4tc2XmkqQJyqMkpf1cemLtQv974xg4RpvF14sdP4Mb",
  "key10": "44zBP4Pp11AGVRhKsNt6zppYtYt7ZmJM47kdccyTcFYLViBHSCURFMTMxj7ZwsSm6k6SscmaF546mzumnbmySBa",
  "key11": "wXQ4wDiQhhEbp8tHxCoGYLrEMzDwcauuGcs1tdLeN1M1pzLCm3mxg8U8JTmdrJcp8t2SLQiSj84ccoaeJSgy5zu",
  "key12": "2XYRubUq2ipPzBQ4Xsn7co78nnq8T7gj6NQ7MJmm4AvJe2HqZPFMdpwRUxrGYzY1vkCqLt4c7jqs4g2P6X9q8R5r",
  "key13": "snqudhcBu6CM1imHqdtuEaXde61FUkkcmRkGNcnUB1YVsR6auAChVDkkKBRkTJbw3wZ5o2TZcqHHKeNPfNGNus2",
  "key14": "3VzCa6Kj94tWHr6StFU4hDjH7qi2YYtRaHeyu5LN3ouyHX1bxAw13MzTRGQkK4xRYi7ugzyhy3yxESAAXyxbXuzb",
  "key15": "274CnY6VnzbQfGwqXvCe7BYP9XjApfbFRhT7DQA1SmK5FSkGRzdDy9ZrctewHRnq7kCzWV1ByAqRoq5h4WiEuCDX",
  "key16": "567CbdFfrdrZg91k2e9VcsW8xXBwsnHssrQcXekwo5wDJHrnBDY9xqwcdAstnGHJAiVkyh8zf79EWau2f8FdaKtC",
  "key17": "4hXvbiw7Nm54rq6zRgn2EnGHVgFZcKh2mFPSVyFp8VeKNmiZXAxtbAjxvirf3UAaDEeFPDVdXvMCkgkj7pV1sgzu",
  "key18": "5xvXSCwvPAEVRi5tUbfSwJU8LXh23C8UNu6KBJa39tddEKHX6N143YU66G9qr8ayCVwjbk6bMkhWWUFRkYPQMcLq",
  "key19": "3KUMoTfhnY41bHdcXgHgHY3NmWXT7cqGTVAYHKsLfuvpVFWh6Rnb5bbyifNVGMCimoc4v9YMLq6GETRf2v8H9ffm",
  "key20": "3qyKkF923Mos27o54Z7drRfEMGsc7CkTgW4LbT2KEXdTcVSg7aveLfYeyXenAurDTAPjKZmf4tNinGjJscE9czvH",
  "key21": "T3g4CLUUB1hwEfMsEpk5iisdCTZXKaJR1CfopxnM95nro6Vt64SyLvVftajWUdPmXvYx3oLPqTyRd2V91ksaGot",
  "key22": "5yJSxk7EV7e18TkPbghpeJyntBQieJq9XATMbg2yeZckn4qTUA58mewMk4PAqkHrpXguvsR4WWBfzgaTZnRAFG84",
  "key23": "3gKZx5e4SWVHFYve3aY8Epy6dQPZ3v9HcX5wo3nifPrX1LEiH6q7tafqLMQ9T9LfmA3tz2gLNn76pBp3PLv6dKKn",
  "key24": "38dmaraKve3bNw2FzEJo3omzSTqmzeKVTHRatBLqhCo8bDQdeRTD8r1H6GpLvCe2p1xZddR7bm2tk9tHsWvq5huJ",
  "key25": "4HwaVM7sMbagPekHWLvCHwfMktaSgd3wgrMVqA9NuDKan5LAfPCW8QUSDVSNa1wSuJNCusA7Q4zbXUC8MqkLxWem",
  "key26": "5U5mHXhMvB5FHF7Jzic9oRV2GGvWLwbzU25SaaoNxDenAR1UDrs8fMkg6RonfRf5uHmYMPGrEw5c9shEtgAbeYSt",
  "key27": "64J9CfA5XMvBFFLrVvi47DL5gxfCy9zoa3TK2D8S2FLGLysufnaiZjE5QJ69wg8F9DNie4hcKdnyrRWV3UGfTJ5v",
  "key28": "2cHp2e8szqUF5L6ZSoxmBKNjxj2NfCy9DUbpS2KgrsZ1KdJyNKpZ24UrjUn11U6TRPYbwPYm1MdamRA9EWdUtYs7",
  "key29": "4DDnsaAn9ndBfikWiVhpHBaN2B1SLL37bb66vAEUTixTLH5UAdLLNkNZc8FkK9CXoUoWkTRZNXqzwfa1mR28DmWA"
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
