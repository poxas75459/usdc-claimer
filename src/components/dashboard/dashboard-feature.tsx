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
    "5NQpmgqRL7esBSFt1YcLEX9r2QhscMXreKrAYXumGBXnRTQxgNk3GuVjkve3whA8Gzo5aJfJo4ahPnxbSeSLussA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32aawcFL1zykRbp6ZnvCX9K6YkNeKnnmwBr9uZfFUfYPkAy6c1ZYdycXUBddSdrFzBuXEjnc2YgCUXBTVd4upRK7",
  "key1": "3i7qvHC19VmfQhGfdHRusbCpTRs5rd5m3P278qbSSFzoYKjSMrPzZomBK3ibMnXGFJs1sGgcjJxwWPX9dWf8aRc9",
  "key2": "2MY9uZQzkRV19cQfub3Vd1takfMDtojtDe8vCE1wMzyZJ9whYhRzFQaEUL6pq8jdowegHwn3wW9q1Adzne3RU5HP",
  "key3": "2h7Q2bf4XDrtyqM8kMcjB2ick1gDG6fNYkhszXMNSB3QPUSjSnHiPiUFz8f8Ro8Y8fu4EdkGjXTytQ1ZJzKBysNz",
  "key4": "3VbRURVxBjhYkQLNWfu83sfnuTeTRtWcf9HLTYumWCVdYaPhHyHHttpWc1mgBZCW123zDTrn7o9wL2KANtyPXMAw",
  "key5": "Ej8LLFi992SZQFAvmfnyy7BRnj287UjCkPEHbBQYAcYHJau2ywwtyUsjvcWnsiD8sxc1Jbv7AJ9UyKVpb6ySGLV",
  "key6": "28iPscnnyTuDGLUsTbgFh6qKCEDyxRbAm9K4ca2dxRX3dbt4gg9sQCkxyhyrVRvJ6cEaLkneNPRRSF3ghTS4GkpY",
  "key7": "41pLv7b9NVPC5fTeNRLhe3JSJC8jn8AEHTmmjSC1QEgjrs6gMGsykkrptzt8Z9DdWK4bgG5jHiE5hBobWm5fE8td",
  "key8": "3TFRbzMCy7Ky7NSemCvXRo85pLxMn6Xh1iwGbpGM7fmS3i1xMcWc21x4KZQrMYURpzA84xVL824HmVoTRvQyJWMT",
  "key9": "Nc4sazfvQJ8sMmcqFPDfNio8ryt6BSm4VycX8SRfdfu9BGgDmWnwo8ymYrh94r6dtYHYYnYKWb26EHBasDoyYmc",
  "key10": "2YZqq4qbiJfGFbGpqhMTLz8f7kn7NcXnXmznRUmAr9ur4Vh9ikueBiZEdtv6c67NMgbL7HwJqMq6ZecCzQ6E3Wku",
  "key11": "gtGRnrfsykrNjGQAYwixynVg3HEn78w144QwzGsw6neseVkrKUm8GRVVwgTwC9dX8PwddP1iUfvXc1HcpXow6rc",
  "key12": "3XGQBHzY2B9NqGrbA2aN8Uj8cwB9sFea8N2oBEmi9NJr6GfKHBUN6KZ43pVKYHVGZ9n63JJWogwRentARrxeQqfa",
  "key13": "2uKCqZbuRUYNEDHJUjXZPKKjxjvQ8W9rS74V7i2uoBVpnoVVRBDDRwr1unBt84kFbg2Q2Dx1czK5orhrMQWhryyW",
  "key14": "2fqJ94FVJouydnQZKeQpjMvGJYgUYqEbeyEP5j4gnfNvkY53jYnLe9kRAaskcEKnZnUypXZkQ7TE49nF7ayGukLB",
  "key15": "32G9SupLZSNddTarrJ719mWX4pEAixTE2i7AcvMKvik9YCwBCvibgDRKYuXfyBr7aWm9ryT7mwGa3ZEzBKSG4i2c",
  "key16": "2fSRyJFbeLRe32ZwkFHxEf8HoNNRbdFeYwH7RANedkdLGnRpakTZqFvw4Wr93fWtVZCjmMbWRpAWKnUTYGFs35qM",
  "key17": "4zMAiJZi5a12ikRM1ABPxBnBpTge2rdfWoxGCG4xzoamTUgeVe7QopoDDJ2vzeg7cKLPLmJdPQ4J8s8ci49ATrV",
  "key18": "9RFqdudEhfa4LDwoN691pf6D3Gn8dfXgAnwgJEtz8H5Jk3wUtNmCbUm4kAmiUaHsRWKyEtBBr6WmnmujwPQJkh7",
  "key19": "4C9Mv5hwtEW8Zjd9D79DEv7dwbpf7YMQzM35PR5LNopWLHCd5xSH7YMWRZVMGsoux8pVDQh4iVc3a4CABEp87AJC",
  "key20": "4xbHjLyXMRLq6dzP2R1HU2oNWD8AoBKBvrFbX86YqKuZcWw6LMMBZ9ApJfHQFy1zCeLpa843QKETtLaBe5XM4cCm",
  "key21": "4Xmb5qXMaZviT1HXa83bKm4GuVuEiuxvrxYrHqgwcRxSdtouonE8PMr32JMyHwKrpqXcZrWdn3hUFhBKF3cESgiE",
  "key22": "4YwY8xqMQQyuHpAub4xpUi9UotA8a6UhRdib2HMEWqyrDNrPWej8jEWgCV23TdPUXWq4rUMChxpFKEY2UJTrRbXb",
  "key23": "4vedY8hzSxfabLoQ9J7BvzSPpGXJtKYTazu8DAstrfqX85gyQQJxzYEfpmGLwNy3DmofVAtN74W4jVCJb4u63zG8",
  "key24": "4Lb18uU3QZETTf9uxdTfzrYDWhR6BsZ8EogtsVotZGmPfmwnSyusktXjGPmntoGUbxnzVP7vh5XnPY7JUuLxtGfV",
  "key25": "4ToyH29em5akucDJ6qH4SNaoDWZcgS3Uk2F1ifCk6sLbQaxJLWEMuTt4VAHvezu73vVXud6VA9fJVV1dYYJtY8tn"
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
