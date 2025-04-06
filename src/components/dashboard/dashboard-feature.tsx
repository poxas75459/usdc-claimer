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
    "3JYEBZoXB298Aod4UL2V8WWRh1QNqcbm2okSxCaZGgJuxN8dKqR2pCEn8APWdjnQGvF9mj3fmPRHqt6hTFfVhqY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TN5cpqEpY7YARjfR9uAvc3uX4xncNidN75ma1ncp3bp1WZNrXhT9DjTYSC1H6KywuVT2xUYSH7v2WfsRyNGWKuC",
  "key1": "3AdWp5uehXpzcZaeMVJit4sarNSwt5PVipWtBHdFWPZqH1CkrB8BZkLtNjBnU7EXadUqQuMjpV1cUKgbaey4Z3fQ",
  "key2": "4aC71PgV1MH2ocwMnytfo8PKrA5cCTTqLBX6iJKKwij6h6sLJZ52ohLZ254xyR3qvMXLcHCxCw3Hx6TBqCT7tcku",
  "key3": "3NdtahJXjjpEkbbcbEzBMZF6afpCLnaPTneR2YuL8SWCYRrG3KWZRXhETMxLC6nEAMreWviQ9GmDjuWnsq9AmrkS",
  "key4": "5SzuhK9An9fN5MR772MQaZCdFHcCuHvFfaapGqbjQNqWNPnBghQWxhCifRvPfik4zLC8yNLgKFg45Tp8k7S5dUub",
  "key5": "35jNTATJB2hPL6rSvkkXKtxhs57sEbWQA7PYidANMjvat3HVU2ZYZ5wmaqvVWQweJ1af5J1k4q3WYbAR4J6vEgmu",
  "key6": "3gexTRnJTdiCuQyNeT9Wa3oMHAWvmb7FRcmD777f5YBkCR6PVCpZwVVhYsd6WFh6KCZfyF9AWFLbtx7XoStxrrzj",
  "key7": "3QDW9oFrdQ8gVeff6F3F1qJqeJu5auD5yCxpJd1Qn6fZQgjhkdoc9iME3kwpojw8SEmdy6LaRHYwDLvDYTc9yHH",
  "key8": "58htND1RpdX3EipprLPiSLqhAhcxqgvRESChX26ZkKp6R6EGHEyGJvQitEX4iXVZxPBMGb3NhUHBaoaxXxfmZvuY",
  "key9": "4w1G9em2TFH4VozUfEXzNiicJoE2nqFaypURsXfY7PWG5BgHgvYsBFqEsCZaD3opFUNuRiuiCKXXoRSF59zwYVuP",
  "key10": "LZknKKE9k6NvPqH9rqjNJfVcqSn8xSJu2g24GQGy7UVNWhyg8mFBeL5KwPeww1XR4bggU2wJGWcbpA1kBusZ9QU",
  "key11": "4STdUQztjvQmzrrzy7to2fUMnG3ceP8vNZn3MCQUis9XNrM7V1N2bsNzq89Vq1SWykzSGWMRPwjZyXTXxJsU9SVU",
  "key12": "2zXkyqTMr2Kx3kwbBCRXr3qMkzrCsKCzeSBUKyZ9jFx4d7Yv98yADGzYGzmE1KML5gNeV2vnhCQEPxcn6z9h36Zy",
  "key13": "6fcM5Y2oxKcB5VuMVi8S6fV1QmbpSWTDXDmfhdpFr1aUJi4gpNegaCHuqzmDDq814b9B2GtnAtAvQwg2TkWmbWD",
  "key14": "2Vupach272aRvBZwotn8hda3GYqcfoM8x3x8pfPbRrqZ7RieVCiiqRJx3azraX8dEQk1N7og4JTAF3yEBJobQKcx",
  "key15": "66c6wMHUS29dnVoWwZe7gBrogi3CDGVukjzCBLGc8ffprwS5Umw4Ya6FM58wJjKEuZzaqxtV2s9KnX4ayak1F9aS",
  "key16": "5nPTPVNXJtmtY5xDBdZSyCYzSJRYN7woh6v7Cyq1YEPLWnjJp9XMLSJ9nBngzJcH7TGVeLTvDWpu3fq7pZGSzJrw",
  "key17": "5eT2tAYjgPLhFXA3zW6PhvQyLqmWx5Z7uahgGvEc7kMT1GPXeZbLwBoTfTCHPbWTb6oYxnBoJuvdBJtyLkGirxy2",
  "key18": "54UfPeF2Vsr3Zhq5NnqKqPMYujEchX25sYsyfkCSQDBKtbodH8Qf9rjUNttbRidsQ21dFxEuVn5g9FuVF5CeRM7s",
  "key19": "4W6GVLK9B3MDkiM9jYT7ehYmtD3ubqP1pr7UYzfwquJNEpJBzrDveLcKBWMDU7Zx9wjr1fQCmPSy6YMCzkpBK9DJ",
  "key20": "2tWYurfucuZXU4jwFvjP1bdVdEUg4bGpgKyRH2WHcp28PRa4BT7EBDDjiBz8wT3pgBSggSbF9gAWhzZquWoSyG2G",
  "key21": "5Fgp27cMCiCsRjWJ7WhfbD9ZaK5tkVzBv6L3Q6TPuCKDJ8ujgsN19UMCKjpdAkPAoqKPcUTrsPFjcYF6F5CfUe7f",
  "key22": "37uRSjZere8KaTVcRDYWShJ6dBTdXK2cnMJhadPDWZEnF4GXweUUt77c4cfyjP4H7DkVFfrHurox9tpzKh7JADbC",
  "key23": "3EATXJD53Dtrp2avkVCHogNmZbRk4TeBvhwopWgxq6rXHxBovqyRHgL7fhfMDRoCUNMQbbNpq7eSSPw1moxuVeUS",
  "key24": "4oBXn3ui1pAFYUrrcvLLvmQoWBFbqqHS8wyYnFmMYQ2ApQnRnG1Ghky6fQ9i6D9AG2FtM7QHHyrurkUDe71AT5hR"
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
