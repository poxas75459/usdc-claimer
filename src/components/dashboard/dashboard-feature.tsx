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
    "3xcdQiX4M3egu92s9FtnvqtL5X1oD1z2LmUEqUjeH6mreX7nxBg4wfofMY2txeH8V4pAKCHyJ3L66yH3VvonQqyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGgrfsgBLjqLkaoA2LLzRWjjsaRQhoPnERByi6k6x1oRvSRbFevcwZ5MYuo2yqVGLe3JmWRv2T7L2JsQzjx1SJ2",
  "key1": "2JjFGUiNMnoK5Wo5B5xLyJwrgEnvWNSn2ka8EeXXoEsWjFsEsvGXGbS2v1DNf8fsFW2bNX3Zwxbf7THkgVbE53fw",
  "key2": "62McGB9HcbLURUDAqHY3ARQhjuEMdHXoQErhZz8wEAL5TanoPBHZ5kfreyVgk3dZta1Z4NQzLC4iQXRhefUQ6U8B",
  "key3": "5rao8VyHxVxs7be6EQ3shack6YevZTxHc6J6b4YNhr7SZkt1Q7zhHSXRHnxwALtPJyJ6DVP4DES4KtMpi2nHgf2F",
  "key4": "32GgLXyYiyTbmc1XHjNzSALWuFMFM5jWbXJuJVWuMTjHQMpcPPGhPD3Pr1ivotRqNoayEEw5dTBwt4w1EWeEErYV",
  "key5": "4s3Mqn6CKza9bptc2Kv6YEC1t4GNweod71wrcAqimgUR9mohn9qmPZAP3xbeWWB5vpECDQaj9FWuvZJiS12MzmCn",
  "key6": "3pUuijopTb4bncoALhuuoc2gG8T3JyCSCXrzPC2BitrZasVtSeyawKJ5zHwg8SfbG2Ko62WYDLwCqefARGciQP37",
  "key7": "5aAPZ446w9nMZpL3eArQWT9Qyut2DAGhsu1KzGWvEjmV7DXUrphq9PU3sFW8hJ7fycDtp9F7iWya728yJR1oM3X1",
  "key8": "4aR2B5wCU3rp7sTnYqfnDCzv1KQgdZRgsXPqLvBcTEQQZzykpQTnNpeayyDwXx75uTS3UAgLGPdJEh5ANLS6zDi1",
  "key9": "4rNyf5Y8DtQhF5ceFpNjoG7omSoAtdj13kpd91HXUcr62oBzB3qpEd5RUGVwhxQcNweqbJrtcu1yGR7NWsWEQ1HW",
  "key10": "a9PEaLFU72AvzK3vEzVEM7qFxLh5hYP4KtPUKYMx1DhaacXeWwnkzvpuCqyDHbfVtFiD2mTt31xH9GzwAYE6WoS",
  "key11": "4v8ZtuzhFj9ZFDEboa25B6KnxRZdNPwKFAmfPnJ5UctmaJdK69bQwqdGZXboE3cGu8LCdwiTPWbEcx3zEi7tx1vE",
  "key12": "s8aHMkQTbhdGpJyLH7RuhPcQU1YEzmoCG81Tc9twXvx4D7r4Ws4pPpUAyuaJPFoLXP59qXrGVptBySZ69WccNmN",
  "key13": "2qwbBd8QQbichse4htaNg38HHVUQS6qxPXY6RGASRAcfCH8XqWaSCwnXRzmduZAjVaJQv82PLW56SUwSAMeNHn3v",
  "key14": "NV1tTZzt3wsmRj7miVRr7hCCg4vuueNP7rHFovncojhJuweEfr6N7iizKNoQn5GPWgWKyqacFu4xxc8RuUwYff2",
  "key15": "RFUkko8bCajBxRedrth2tTVLBjohZG3pt2Q8cPhMfKdfAbV7fwVdb3kkeF7CcWAizepeprXpEMBdaowtWGTA4Cg",
  "key16": "621MRtrSBU9pA3LA6kTVVDm8dzgwKzFntWcKW8RnCCbnTgHtzAcN6J8nEcPEw32i9V43B8rJrRa7XSAfMDvugdWn",
  "key17": "3D4oDu7MVeqFSB5GgFi2Tx85y2fcni67EBDAb6hQ5JBQRB8k87RqxZSVGCNHu2KKQFW6XGcxRcULTgHyYWAGwcHm",
  "key18": "5TeC5JUzG2M3H5ZK26Hrv7q6oZ5GWVMzXCRXPaQLfffQ8ZR5Xqpy6CbabCeGQwRkZy8ZBqRvMR1fcbhHXaUxjhNd",
  "key19": "5CeE9LfxUT3pT4KpMrG2RnTgeX3o1vHgnqSnovtAYjyWpg1TCjjtxLwUQ3SMiv97eBKgdVQWXN7cCTMNtEfNJ1Qj",
  "key20": "UbGieKUHhPpg8tk2GuV7Shuc1cA8bJUukmRCasYRaPLxHBMyqm9NYj94xafTS3J638NvcbuWhjJKmrLX8ZdCGsB",
  "key21": "64UAPUWwHcjWwUZH97m5Pv57pajJFSZbdxbqG59FkqZVAjoZqZkJVg4hr3Xp3K5MJRqb48br4jC6n3QnmTSsVVGH",
  "key22": "QkGx7BWA2R6QwfYbCdJLrgKuCyKHRSFisSGRu9kshnPMKzjaMKubddpqrCHGqBSsnob7s63NasFB4nCfxsmokXM",
  "key23": "5hKMNyTGnnbPKc9dw5Eg4jupiNRJx6SbV1M9ny7NRZuB8rWR85DaY1L7etYau7Nz5sYaN2Tp3xzAmsBb92C5weqJ",
  "key24": "5UJxLUv5iMF6ozQd5jFbyfoDuGuuayWLNH9YDws21k8H9FE7FVQF7eyU3GhFzzcsakd5PCZ4xcUb3HHyCZobFQ9v",
  "key25": "2qYKnPp8HUdvDUacHY2pGUuo2LF1dUsckHp1qVJggeHRAEM53Efh7XsVi1a58V6enLFXyEd9UoaKbBmMxbHy1Ndx"
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
