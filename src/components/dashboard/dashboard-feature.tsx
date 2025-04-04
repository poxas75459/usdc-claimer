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
    "3TyxSHHzzgq3H3ZZFJhP9JwMLMZNYKxcURNo1mxiqkkY1BiYPX6QtmLYpEzUNxYXQ6n8oWsSkbz5DbytTuXSjtzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pewW8BMMFDr63oUYZwcm13dAYifAjgnY4wTJDBFFvEzqn146QAK81dA6NPNNwjrW8amZgYeaRoqe8FAZKDgcCbr",
  "key1": "4oVZVMKRrvPyZCAtQTjkbTszbm8guGey9Pv3Ac4eqeUwF5SPR6tzhBJYiKk7vUb7dLDhgbVoKcngTcjrdgLQLinb",
  "key2": "RNXUjNvxY8hQam1Xvm9gUNzgXYetQjkKo9CzuUp6TdG2Q6NMugneANpopyFttuVNr867wjCs6VFhnUSpQmfzYGZ",
  "key3": "4gc8cNy2g1JhxLHdWYug3LEN1sEV4qJAfVoMphjec2zsdM3MXP43tPVSk77gLMRFPMK5z3MfjhAnWUn8rgQWvVVZ",
  "key4": "2vZLdGRQXzrtA81NtSe9VgYFgXDmCXGMGCiMNahD9taPxBHdRfxtxgHaEiuG5Rrq1bkQA8itaxwrzDv35QK4faoD",
  "key5": "2nmmNHmFt17U49war3eBissn9kiD2uEu5GPbusuumFPPV1WgmwF9mVf34UbWiZVtPZScCcq2LL2RUL2ua8SycF6y",
  "key6": "479zKzP7p7g9iLcmSf4iTEEj1MFCLcBJWx9xCCvv9cmFUWwHuUf4N6yw5WWw21WXvYupFsd8FP61vnFo3AqmrAr5",
  "key7": "2PZZVfxS9JvoET26Dtqu1emw17D4J7huSTay87SJhW9tWfnRVjgdhK4hKuHV5jBT7J7NbaPySrEgZt2Vwg9Xyrjh",
  "key8": "5PuZgWv38WvSzjn4TC1Thq41z4m7LvtC8P5datKiSJCMvK1EkkQbTTXS7AQVAjRdS9VeBhw9pjKAwtsVt6LddJTe",
  "key9": "4Dt5xFs7roDwzMzZy5adznKFqkBrV2TDQbgcpLFaF6ahrGZ89tNBaEbPdwkiKuR6nNq4XqvLVhKpRcTJgJExVU6N",
  "key10": "pdVnc9APhLUez1qjp21VQmzeY9q3yAY1hxEx7Km3dYmERTPFCwr4mAFmzXXbVhS1bzUNtnhzuyLBRMj7yWLjzZA",
  "key11": "crnGR6MgYjATP45hzjVsWLnQvfL4WBajCeGFzMUdqBMrJeQfjMniXdXc7hAvzE8i7woh2krGRwpFbNMTuDPq9fh",
  "key12": "4KW61VY6vPYSCoYERvyHxawVyknhQDmkiQBN1WBVaqhGyZ4xyHTH3ifMsUDH5wPNb4ZAxTq7QC5v46Zhc29T4zJd",
  "key13": "2TZxZJWKXLsbVMR4jJ2MStB3HHNdCq7Wm1ktsMZEupX4h5qsKKvcGKBmhuRPtXWDqvrHrwoMD4bvQNK7y91DUcek",
  "key14": "3ee4PTGWcwny3JbGeGok4qp9uug2DcxPP4uTzmEs4J36euTUsHRLotN1qgDKBTqZtgQ5jwckLLJBXf83zugK2xc9",
  "key15": "54nyCuS4pednq58p9WB7yRuDxY7bNffwc85VA5ArySc7yLz2oAZJvAivtAEb21vzexNA4vrsA44dHuXv44uUL4RA",
  "key16": "26xs3uyovSqEwDMiz8qZqg5YpEQHcVMN6CwuydTkdjoDugVjnCZTmcx5cBpt2Bc1kPEdy9eeAp8SnrZecWxocu61",
  "key17": "2Qkg3D3sVKSMymWpHVhMU4nHm9sQjxQwDUY38etJ8iiEzAxg8y1x3RqyCCxTEBNWGUxFVCa1me2UVSier3CA7UyX",
  "key18": "2jA5dPo4SBDbHA6cquCteHszuy6ZBXa1dJBZ4fVdGusAkhfFpTFe1icLGrSDuKJreJ9xDh92m7rgzgx65QdzskXZ",
  "key19": "3wXvRopXBCXwDTgpdSPyGNENUaA4z94ZUJEBND2FFZmnsBwNzHxd4y97vrH6g4AJbCLVLnB3fCrLqGATbd7Nrbz9",
  "key20": "5gRNWZto9qLoJmpuBqhCcnjkMjv8EDagnuVgysFXA6GqT8tLHtF6K63MdSVNshVKMfoVGzfpkGTWuPP4FNcMFkt5",
  "key21": "pMiafqCo69RXZXxGMGSnTGk5pA7YVkWnKr6aLj2NknmMw3aypb6zD7RLkfPqaHyLGR2KGk8EGC9tq33ns5yb5Hz",
  "key22": "2sbW4FaS3VfvDE2uhCo9gsqAPELHRzK2B1nm3iBe8eg2Z2RnQiTTe7UgJMwuxRJqsTKVGzh34DjnpqPcKXBUy6Qo",
  "key23": "4THiD4ATQH6L9ndNVjXg3eZBQGNm3Hhg3u58WiaSwLCmK3mnU9ArzTTbncg4pYQAECFrA6xDEnzqmYV9Vmpp15t4",
  "key24": "33Sp3hiQ79SSsenmTv3QCh8VzZVvyhdHkyCHS1LDzxAXHKmjyth3wQ2GQUF95VVa9R5hD1GV4AjYVzkSbjgX1BPo",
  "key25": "FfPV4TxMzSREocDb2ZeDSRpTyHt2PoSzKhzC8vUdbp1B5SqXSEnPxLuasVLJ3GEtntGGThV5PxwBHRLRTeGdRkj",
  "key26": "3nDN6sMKq9a5wpqCS9k7ABT9ts7yWHGQ3EHXui2gaQ8wv9iXp7LSJYe8o75uTCfGxg2cuToKCabLjc99ewo9oTM",
  "key27": "xG3JeK949NUE2FeHsRbCCWSNJ26SZnwwtuudDGZNVdqQBvd1VqwknfSuobpRGAR319MGgKten2WjnTiMWzRtvVM",
  "key28": "3u7j2soRTFuJoCbPzYYYjywFJy73fvY9bS2MhXZdKno2oLMRzx3BYc2mFK6baGb6TJZE3ngzCSJh9Jn7fwpKAEqS"
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
