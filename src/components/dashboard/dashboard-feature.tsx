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
    "3pET3KdCh997t1EajBafJyYrsEnvjZjNVnABG9wtWHj9Tu3jJA5kFfn8yjEStjErHMUd5oNdWhL2bvi2cshaL9qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZUw5Ae5cBEDp7CkZeLTKoXEndbR7Fg24Q7iPf4p1FQ7PpZWCkwD662ZcHR9PYmSgauQ5pYnEo5PEcDasEfqbNS",
  "key1": "4v5mK7c47bxySEPLZZs7ycyQLBk2YrQZBLgCiKv8DbAP3zmAnXFVRm6aqS75bWgr5CALrx5pVNJ7RvvG1VQibgiv",
  "key2": "5gZmkY7V4153hPCik67MTMyYB4VNcFMR7uBhRjmPsQpVsj8AUw9f7ZJ1c5VJSAbLHosnPsh7bN1cyQgde5FnKEbH",
  "key3": "56vqpiVXJFvkrrrNNKotBn78Gai1DqU6qVWEffMzXv5tFKQfTnw9ZTatAQrRQR8CGbp7tssEYoqAN9ka7WvbKPUr",
  "key4": "2REXjiBSGhBuCsUGzHkfdLfCc4Y8QaaC83YeMHzHNo6AoesufS5s6TLtr6HpPrWBc1QiUZcB1uBt79KTzy5RbTgb",
  "key5": "5Bzf4GrNZRNj2X3jdUjjU2KJLBDLWNTnNKadUz1yxRehd2JBq1pjGvTrySwQCBqbJU6Cc5Z88JpGQc3mPxiAoNjQ",
  "key6": "P1J5CvtPRShBGWKS6NrNXUc1aq6QDRvZayYhS3fNqKRw4KRjqJQsSDkq3Wn9DRQNrSUVzaiAeTmDZBJRo7M4faw",
  "key7": "57nrEJtcY8ge1ngZyc4cY3ZLmYVGvqBWpHv6ktUymKXKZC17kRYUBbAyuAnhPmGckr1eRZXDQeA62jGG8Go8vLQr",
  "key8": "4SZfCwntJzCDFWuxsBX9srtmTYHne1rkAzVCDc79UPKPJUosU3bRracBHyBT2VmNHywMUaF4GvTqxTGMDSUWCxT",
  "key9": "3i69krtGqipXdNCdqaW9ZF8QGMXECzrvLRz7MGrTkVqaJS8YqZyhQEunXpfGZBtXGhxgGww7nRDvspzAScjRM572",
  "key10": "oHEDUkFhkwpg3Azed4gKkWQ67Y2G2C58maecusxQUhtfcUShazfnoPkwaENBTaGyyvWmo7qh2Z4XWaAg3yThFpU",
  "key11": "5QTWMtXnL135HTQXgkhoMW2FgctfDFJWx89zpJ5sF8krukZgnEjLPSmt11GpZXy9ApUCyRN1FNs6pjhrjrqe7XH4",
  "key12": "3P2JbkZNFvgPXdvVzUt3fcSatahqbFtUa95Fnc5DveBr7VQgaDsNeKsjqchENS5p8LZfWXWFjLsmTRbRnwctgRZz",
  "key13": "93ZEfPs2Tg5eAP3VqcpLS4SrzSn589d81ECvPuqVXirUyxUr3ApQ6aYJwe7KQJY6dVorKE4QGGZ1RGhhLjqJEfq",
  "key14": "4yN5r3gQe8UWzpp6w8DhroR9D6MSsS3SHr1as52SrH3RrAKAJKZN8unRBGF8UdF45jPWqM3nwP93TK2P3Cc255V5",
  "key15": "4C4dEL5uH3FzTJFp1AQ2iQs86PEu3xsmmYPQdSqQsTh8FiV4v9VrhLKghLpt4XTnX5AjqAx21694Nc5eGWhGdU9R",
  "key16": "kjZPx6fs7mbX79N8tMPVZS6qJX2zdqtcXQtXtxKCiyobWZF1Lm6ZkmmoAoeEM9DtSsCin9ySMtpnLLZXQ1KVbV1",
  "key17": "vDVHNKn89d1vwQhtTnej6pwxX34y1uBZQbu5cd7WKQWVpaiamzphUUZWW5dN13syCym7MKruDPugg3DFFSezuLD",
  "key18": "2LLmJvAjbd5kQu8hAQyJ63ptwyr9Mt9ZFD2P5aSr5gM9w9oHhKv3b9Fyg4P2Mj7VVo5PuGr1ub6Sw3mUqCtPYixg",
  "key19": "svi4za4kZuFZsunHkc3F9of8UuGPtQYS1UdQ9h5ZHbagtQVGuRFfV5G67HKLn5nUvtaTbph12PaXZVhcHfjSg9p",
  "key20": "3YajpGhYUG8YKnfrkNFy67EHpHAiP4gkKWqKBBLjtB8V91cJ6Qp7LRobjMk5vkeXVgESJ43kP9U9YBdeFvFCM5YH",
  "key21": "2HA6ziwhMiAa8A9WMiYBRoF2E27friXH98MoujZsveNi2PeP3vxPitghoiXWK2KFM9gGcVtUDgDek6KnnMVRH6EA",
  "key22": "5o98fNbvfx8Wr9gGYfSRJZFrjbf6hUxYLgscujsQhqn9iuWsT2sZJanXdbQjh5A6sN2ar4WPqQUno58mnFRevKkv",
  "key23": "3PGhhtkuvJHjo4MiZJgTXC2e9q8VdwRTqAYgjpa2QoJ9bMRBGpkrFXHzULu2Pc3YHrasgqTm5Ao4nqercvqxQK3K",
  "key24": "29mjV8AZPhe8neZB6rNYEDLGL4u8cuqcUuJPHPP9KmJMWDmmmLFpX3nszNMaKyGEVUsf3HqupDwBPAmKgsZTAG41",
  "key25": "3PcLY45JdwhbihoctjysegoweC5vLocxL8pfWagN1TdC7tXu5wd5wnxqvhbsVSVgU1w2sJL2Z4TVdEWtdnHkmxVp"
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
