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
    "26FXmECXuGPXEGh3EY9U6TbC62mQo9NA7h7DstpAAwCf67Z14NzAT7CY46ifverpAQFCsqrE4V27ynwkcPivdCD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffx2Ud2zPKzdieRNTX7nMEMZSgg62rPzPA1ry6WwhvQkUCWQwcfwHyRWFsYbjnRy4DkBrtsR73fViLk7qsTjMoo",
  "key1": "62L8DZjUq3XnRDZtid6WpF7RkYGePX17Nykqp8wNxYuNr8XCuZVP83MGCm881SHmzyDxFL8CBGxXhVFZzXrgDK85",
  "key2": "2ZWxzdcT1GXKHDkYSsEEo4DEX5yAekd56Bt6ScXeD5hzGSJmuVie5emTwiCVdaVw3Lpoe8EmQZjCQc22koF7ufFm",
  "key3": "n3Np1Z1mwRH9oPy4ZwWjFafpA3YSUJ9bApPCz6qqzYPzxbNLEN3pYBaFvavsYY4YRaZFFXzSToSU3z4YcpLLNch",
  "key4": "58HnXNJ6gBwKBtQUiFqab31U8bxhXvJtDqm3TKYP4FUimdAqub9GbNRgGYoTXBzUAxuZZf99PytX7BRnzeG8JcT6",
  "key5": "XiZ4RhbP44NjZEyiL5SxyHypZe1nb7nWD6K9RTixXdqA4imRcVSDucyureFkVMjakCEXkusvagN92tUx6bjAaN4",
  "key6": "35i4qSPAEAD4P6S1iqDDkUcz1mtbb32n7CKwAe45TeheeuBjzSt7zPTim4AQ1q4ESub37RnucXfM82nwRQU9rRkJ",
  "key7": "3PorHQ9LbfNxph8gWwuugfWS1R2zYCG13uzRCL62nLwwvdXDUrXWciwP25eMucSxgZ3fwyYc8eJEwrbq53BL2gPW",
  "key8": "5mGEVivLv62YvcVktUo63EbLjgeEzXSACW7CLZsK4NqfeSkpNzZEvTQNvtQwCai6bNfwAPt6zoxn6TjF8Sn7zuNY",
  "key9": "3qi8RdVoFu2kCT3d3J86q6DZGmiWzS93cvK8ogRqC7sJs5Q19hdzBRrCZ4yWuKwLtKQZFLzDkrNBCq8rgjwyzExw",
  "key10": "3sm6KyqTohy4z92nSTJQABCHcgZtV8quHS21noJ4pEinZA8bFkE6263P2FH4HhxNt7SRyrn5ivM5VV2frgiji5cs",
  "key11": "3b2FdaUomA2FCzRj91QKMHZSki7s9qUMF5joTRpSYrPF6heUuM3XXnH4NAkSdwiCcDTPm4LbhC1mfew1R8USnrWd",
  "key12": "4TaeEJBRy4aqhNt4PWraeCYJCWatyMi3vZ6zCi3EpL7Guu54JWtTrwCTEc84whU1THpkkxHdUSHobbXv6QkvkHri",
  "key13": "42AkirKeYNkbFRrCrKA4X3YfXSwsSbz56GbUixRnqNe2GJd8jXouLdbB8daCwr4FQo1J4vugNA3bi3XgUrXDWsib",
  "key14": "2a2eB5cqdWjxw8ChQnwri5Twdm3twKMteCaGZDPzykJwEZQYP1DeYYNJMvrYCEXW55bAy8wGuhuXSwYzJyfHiNUP",
  "key15": "eFf47fyRQcb517tZRUYPvn4BkHeo6kcgUqgJkE5wdgR1oVG3cJsUsCzrztRRc2Y6PX8kzbK9gnnER6kaXgy3QY8",
  "key16": "2bu5je8FN6JLEsyyBvfPUGi1QEMGcpQpP27czaMThiD2Zvq5ZHGbL2X4VULnVusjEAtMmyzzRbySQ19UpB6K4VW6",
  "key17": "2RxuM4tArTj6CtDyEgxb2PNkC2Yry9iq91GdnaEqpGf61Sbjuh5huRMtEi4jTkB2Zxxdx8v7UitDBuBdgsKGmzCJ",
  "key18": "39qXLMzMYwthUcZL62RbdjPy7Zta2zsvzoedgdBtCEJaoBo6xhQeULU5dt7ZHVhMswibDA3SQ4NvZvj8tSSMKEp2",
  "key19": "2RhEtfjbNf7mkZMLTtNoh8NChBHNVYo9VE8rQ5kDLByBudhMoE8PLq1d7Smqo1wKs2oUuQ6f3pKNeTb6meL7gXmK",
  "key20": "WkuGsuimYicaMYY8u2B3WwJJtDGG3ycVbmZcmUhNkm3MuVgfhbxTuE9dMwE9iDCVkT9Akvpqw4nsuTysdr4WPZU",
  "key21": "4kRYzcj64yGFusMuoZntXhtmqcoxJ1Uhz1dyZEh3ZUTusmJkkWhkyFxP6zaT72XfvNZ3v4qWoRLs2BCJvC5MC8fi",
  "key22": "4sk8BhUY1wqxqHJw4fT5CM6HK2ts8yeGyrDFrQWgNoGw5qRKH25LXLDbtAzEKYCZaGgrVGCe84szgXpWu3S3B3dC",
  "key23": "2rVvJEciUwZyCiZFdUAMnJ9Km6pCq6DLWGxhmX9gMwoRF5hUp69Da6Vr6myqPRjcArukdHhuih68dnbQyLVCdMnc",
  "key24": "5Di7t6596UoAtPqQ3mtDvbipCp1Sim5n49Xh9wzXjVvAN9DWyksfHZMMRH8oHKYTjvuKnbwUnNpkRSZxBaVeB2Mw",
  "key25": "apP8FXfp1gYFgzdyEXRepkoZnozyKkpLKd8qEsyRWgcW7LLe3Ka15LMNbFcdQHwvyamW5bnYC4QXnTd3EphTSe8",
  "key26": "3m6eL15rMiqVfY6qycccAbBUbgozJ2X5aC2Pijj3wxCRdausbRz67vguVTa8AmyCBnwXWQexLnuHjDX3JiAbeVLX",
  "key27": "4VJ14Lu4t1mT9Lz2H4gYFebV9bsSGGJY79fFJGAkLB7pmgDEtCcdDzheFas41qjCpSDdj3YehcVPUurgVUwDLrA4"
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
