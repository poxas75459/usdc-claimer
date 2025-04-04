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
    "5GqLkv9mk4FEDyH6mYEV9qd3SwVmJYQCys8PLn7oVGbaD3qnKrwxH1Y6WMmNcb7QyA5UNMjN4EyoLp4QjXHkEdw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKAaeBtHYumtFHZDfYi7t7sZfW5Mz7nPAM7FSssg9NuCdhv8MQ9868BTLV6JbAgEqqUe8pDtaQYscmXCoLynf9y",
  "key1": "3d6Lghpe7VRU2ovax15qt7MjnuPmtqJDwcF69cJUdNh6Kt6b89aUyrhPuwKi6aytuwQWLkjdFNEcKNWoJZX8VdqP",
  "key2": "4mAHhiVkpS9SvHshLTa6NL1YbGSXcydppcC6dRQDKiRHd2veK2UogHpJDPK1k9XeFmywfdoZYWXJQENTJK5X7umF",
  "key3": "4C9DXFncYoFHPF2mGFWuThUywBaYgtJkzhXx14it1AAz5wdGAfDYXTjmeigky6h35aNzg7iL3Tks4eCFzPgoJmEm",
  "key4": "4HcuZa7ShJBryNvRLiTinPHJAUkigjVuHebcQWTBrazw3JyjZLxMr9ppskjt6k4a1PFaQK8czvHbZzbw7rRBodhv",
  "key5": "3tcfpxgudgC5kqapJdkPzBZmqKD5qH5SL589vvyzSDBhSApg7wAhKhQ5k8QEW5WtS9cPP9LjzQaZpgSXUBXcLqzq",
  "key6": "23MCgYLS9BRNrCqN8c5wmyMmRDAxLWYV4dymdeLPuLkMKqQ8ZhK4acHBRnGvHpX6cpecL33ggsLPG8P4PjzRdNDs",
  "key7": "4kVeXgqwLxphUuBVzgoRjvVnroVjGW1Cmg3x4aCCFv4ZVxyabbWzpUCbvTAqFw5pr96MG8feaSLVvmZtdXnZxvbz",
  "key8": "5UomCBY3pcozZjkvrWc6ctHDpAAhzxMd3hadFbVPsxKrKAUy3QcnVHCavpKSyS8RRo6ji62NwSVQm4RQQNsMTaGg",
  "key9": "4P7qkSq2Q1fUzdPg6JikH89QMkgnYHdximZNgvGthqVdqj8vFkcjPS91ZocB3rhHQCrzsNxgDXTpdCFQbPZpCTg",
  "key10": "3Qgne7wvts5kk1Wk5wpYxWQ15qa1dBkX2x7fTVrrK6cXfxtUganVjjij2ZBWRURX7NhExzhm3KrD1JYXvPUFgZcN",
  "key11": "2AHF5pEuwi2C3NKBuA9yPeLs9xkq586t2qxdVe6mcXuovZTcaRZ5i51N2uxCe5rCx7dVZp3vhDMuAwnwWX8yQ2pX",
  "key12": "5iepZToeGCAg819ap9cah3ngmKSQSSRfPFFWk5Zy5SAMDrSKEAUitPWceSiDZfu6jBjyzBFWYREx4RG6mufJBGSC",
  "key13": "WN2eZnyTMPCZuokMEPEahL81pEVg2CcN4XvJoP8RvQLFR14B78qKBF56U9CCCAUka7Nm6yFfVf4xMumC5dMu7Vv",
  "key14": "51Prk41TjAjbRHEKJmKJMtLtmbHnDsqd5Z2CYJfsQmpwYmYntuYDMd7X8tbSiqSAAtDdNw6xzveVFjnJs5ESPvVw",
  "key15": "4Cme5Hm3UXmLFvfqkKS8EsZt19quxc6Ue7CRcABBxRNsCo9n5p28DjioMjJzZEpCKcC3RLoUmZS3B5UZfXckzZXZ",
  "key16": "4NTd1QuC3X8r782cAXmFc4ex6k3su6oQDDGsuac2cnqCc6irSJy8uT7sCBghhneCd5FhqbCzcKqAG9jNZ1XT5eGo",
  "key17": "2GDNqTf3wVXaJeS4512vJkPqzZWCYyqiySAxw9pGHBUXa4YvP2MCjhFJWp8ehFmWJxxS2Y7sWPz2XUCq9SbDJrJm",
  "key18": "FZSJ6XHE19ad6gZBHqpAw1nptCVs5rVuP9fyaUJ5Sq86GNTjzHYyr7NrLcEqQXqSRjV7aiUZrdpCwp9C1phU93Z",
  "key19": "5XbHUHF3Hk3pBk2pV5b9qStwEA2nQ73TuxkrmsnWPTB3V3jnNSxbmbX4AhyePs4eKCU8kJkC9vrqSwfMUzwEAw7v",
  "key20": "5Sb4RqrKDc11Hjvn896wgKYT5HN218ohYGR5X6VLW69fb4JSeVub16YwE3sMjiF9eDVDHmXsKjkWrEPWkuLDuejg",
  "key21": "qDmvaMmHSzEGtHp682p486uabs1ibuJnhJXU5y1fKQdKsa2FYqjgWRCEt96kRWvmQBrPFGHm1qfh3iYTZNY5vZm",
  "key22": "5ya4v5rXN4ipKwAz8y27RfXkqXiGpZaS1AGr8UjmJ8L7dXkENAnjdqxDtMfbuoT1GpE1w2fE1Le8r5EV6zaFRXVC",
  "key23": "2NBwah2tggE9KvLnfwNUhq9ubxv2JnsMmGqnQWW4zYWVWRiJ3568vUkvb2i4gLiUnFZBqM5fozacZtjB3i6j6skU",
  "key24": "5DWQrrmVkKShLVusUK1hwea1DC5cY7HSzyDTJuP6L99MZW9rRs9A4Qv56GpKhVCumZMLYgqKRhTnJNRDnSeTKTD9",
  "key25": "EstiEpyJDrGboYPvLrYVqKqNkNrajEpt47FxWkVYp2zaz4cMXAapkWYbNo2XZeyZk5vAqZLxFcVfgSrXedg6u71"
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
