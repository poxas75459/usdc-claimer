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
    "4EtmxsS5BNqn34hMk6BvwNkoUA6Xx4zMQ6Bw4bWWXBBwzUdJrmBwShvQd6KLj1AQvDWRRJWGVhp2WLcggsWcsBo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yUNU1Kk5YtYVqxuNWiVuUGYvwJLPmzhjZ2cXYVyi2X8CH1i2eYU8zKQeEsiGNzKCtVAUUq5u2AytBZr1yA9kxww",
  "key1": "5mfW1DA9H128PGqPFFA4RZypJNZvwEZVQmP4uv5gkLgSwdna3sdtYTdnoQd5NoXKj8vKJEmGryjPQTABcPZ45Sq1",
  "key2": "3AuQUjM1UAaAo4dyBynZ38knZYMcLuLSU8xRDMokDQhqPF1RZuSLSJBvLd1qapkWdb28HbEPPQvPcdKS7eFGiM2b",
  "key3": "5VEc7i19AAnfXRnSSJsurbHGNfnK1WmBxpWkCywKD2Drn8cXyPunsUZaZD2WQdHxcv4x5BL73Hb39dGXKChSi8az",
  "key4": "63THccjVHzxBXGH8yDeguHi5fQSn7anTfhEDMVadPRWMeBVZQ11VCKUNAGSpcrGiLwbs9gux8sUxavdtTM6PUuZk",
  "key5": "Z7sg3PCk7d9WbNaseNfUNxCZeeuYWMuqA5xumcRQYZkdsH2g8hAnarf6VrdGfCQrRWBKLpM5E5HijjBh7GPkiBX",
  "key6": "2zhKAE8CWJa7xEUKZ2pFgWh5os49RSBko7epswGaBNCASAo3ZE3w3hicSjWrZt7McwiYDEf5jU52hdMMWQpB9ggc",
  "key7": "FopqEZcPTyz6v27VSaRq7uecXHLPx9A3a2KRftMaao62WikVyFf7C5PYUz9Z36VVrkBWKuSSmjWiYCC223azxnD",
  "key8": "3XHrhhroXse4JK3DhmyseznTN12J1274v4yBLRgV5jGYWuBcbP7dFeBnD5zhApNhpvWVKrxtrHqNPDHvuEDdqYRn",
  "key9": "2dwcHpGLSv78EpMkcYyprMsSQjzBDmdfKv1NmrpHt8E1eALQLRNNJ8Y6wAJTyoWkWMq8Df2bu2uG8Yc5hDBq4AxN",
  "key10": "TZEfTgNLmGgYPegd8N2gti9pL5MMQmuHi6etxqzfXWA9w6HsXs7mTj7o3wqSZZdG59sB5YxB47eV4sFcY3S2yhm",
  "key11": "5KPLSAgtDa3aieMNZznfZKrTDjxxKdzmE5kz5pgt1UaByNCBx16HexLicQLRDDwB3D82v8RBh4rZMYboAWcp7jbp",
  "key12": "wBwg5oNXWMVBM1UUB9BSXm7bcxQRo8j14TKRSk1D5gru571Gj4TY9J9wyK8QHcTkk8BWiH2CCnFGcYvxgY3QKpR",
  "key13": "5FABGBsipRqxXCT2CtBKncc2MnFhvTotqkd4FcwrGwJNYJw3FiKCrJZkfybxy6mbJvnoBmcHJwD7hExaH4H6R9b8",
  "key14": "5QhhiRb8zyWK8pdusYNnXmefZp6Xzk5KX6tw2We2Lb5Lt9RYAPESKF4hUCJWKw3Hhzse9V3cYbGzfQnKSWDDWved",
  "key15": "Le8aU2UFrtwv1vBRJBYDAV88eiVuTmQwgtAnHfHgohMe3seKJzq4r8Kqu1yz71nHEs8aRk6M2KdzJhxnE1ucuuc",
  "key16": "3SPNn4yeyR6JLGH7yBtrbkFThnnqjPKgWwLG1v6hXBK3oE6ow84VJMqnPMnuK1J7EysqLzVDA4EMVpBbHyKzGhZH",
  "key17": "RrY1VfgWLfi2bC8hxkr4VkKamxVT6mFG7ZcVDd112GyrxXMZpZFsAiUC7cnLzN1KeYCd3qQFzPYetjuazYNdEJp",
  "key18": "5Ut5SXrZ63KYzywWcr8G12We8T8331K2B21QyR2kQC4xxQ6UdApm5kjjL3iYAmdAkKaTpifLi4qkGPzemzv9qoNk",
  "key19": "jH5q89izfDQyq1qpGq9Ty4vWErtonFJiwh3CyF9a5TrPjfPRQSPPES5srbsxjboQfyunQ2N9yB7oRfC6y5mEQzi",
  "key20": "5rgA74jvdVmiUgeaXZnuDsZ21KS4hanoQHud8h7bxQ5mc3KqMu1KnSoQfwg7rXRXFswCHZmVAsSxZznHwUXjEMsA",
  "key21": "5Zt1cxULUvrYXMcYqGWschbQFEqmauT1xWHkr1TkK4VK2uPeL57JJC6jMP5EkbdXvbpg2n2zS9yYdGvErJk2hDJp",
  "key22": "23H5ceRkGuNiK2L1JsFxuVvzproU4SgYxb33NzynUY6ASYt66Nbgke9A5X8okr1THZoi3UmjPmW9kFZPiQyD4CEW",
  "key23": "tiw8mqYpEm4CXG7dEn2VZTzEKptDpmyoFK3hG5D19sNvkkPwfWRdN5aVmPrDpjVPnVfFAJ472YtZgCUWYsCjJz4",
  "key24": "BYidoYw7Y9mTkypQ9XYUkPeqihPwUxq6dnA36JiEXCbbKYHEFkRFWQkg7YJBzcYCpjFfPJXU7nH19jQXYQyZr8u",
  "key25": "3ZYRA5XBRKunbpG6xryCxm8bcsX5aadeZT7L47GNwHzveR5J4RBeV8gmvep33frxR7zRLhFNAtPPxoTVc98m9WuC"
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
