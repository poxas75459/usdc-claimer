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
    "3RTgzeUAY8fpZzBvh8MzRymdDKXonwM1XTGFqKfThB4CHg2eVtNrxtaQbEd18aSf9fZDbRm6u2nSEZgMWhkZYEV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQcdwFCk5tvH6JdJyDHmQrdQkmUkDUPGiT2JKGxDNfDLcEuuQ6bsrCvriF228zoQXKcxCQY7PzFguCmpoBtsfxJ",
  "key1": "2PKGWgHXZHxtgX6WvZUUi5JBpfj1PPEzf7g7L53KMR9CpsWeUtgWJ2tVGryrZuCJxJaEREMgLCmfsApfbKB1fvRq",
  "key2": "2RVn34gebm3wAfVTj2gxJvKR843GBBwQJnEXEqL1UExXSnoReENcPq3wVLr9rL7GEnmwX1imvtiBYjBYby2Z3YSg",
  "key3": "4Pf53jsb3xbKYEdvQxeZ4QkogoC5jzDEqkfHQfF3NaNkW2wqkTJvUokoe23pbZNQ4jVWbvgtXbdTkCYuEGuYu5vP",
  "key4": "3Gzh9tw2YL8ZRAEC5DtJrGJ8d5qCPB5ogNYrWRUqcNz2a8F1mtkTZfdHQQpLRPB5eB4Q9bNbwBbc5X4R57RXkEi1",
  "key5": "2fPbi4v6nzvDan2jBsBZPE6TsyT4UQvV4vkcwKKkTkdnhVngK4HgvQFNKwRcs3mghahbL8RquoshF82zWDSWmnHC",
  "key6": "52agNz1Hxucqf7ycTkuoq1yNuLGvoyVb5Q9Y4AmefuSk2ktSW2TEgL3vPUiZD39YfvqxDQ6t6puhuqXH7WGZ7EKv",
  "key7": "RtCzqA2rhN3KZsSPm5SDkUBEsL8wqiqf7fDGdMjMphVd8iqoeqU4aCfhVsr8o1qgV3r5EPjtrK9muxndzCF1aoW",
  "key8": "wi28iHnFQRafDPhRmrHhwcFRufS1YyHK4UKBeUxRaf5Y79ijN118mPv7wqTXkiDZRf3mtp3pNQ633fZ2u9pHvtM",
  "key9": "XY9eQ5F9qzj3RvGP8hLTXqtMeTTAA8ikVzmCvqHmQ6Xy6zebZriXXX9HNpSX8ZuAvKTWPYcVdo4yDWW2j8LUk26",
  "key10": "2Jpz1oNooGpRi8G9PnficP6krQAYU4kK8zPSX4TDMwLWVow5uTdboA1f4nGPfQkeMEopBrijWtSmcPjJeekyitb4",
  "key11": "2MbzAd5yqZu24adyx3QSSDEPw62Y7tCMdPcRpBthaEs47k3C8f8ZtYNYwwZSdY2WKwPq4zbxnx6oGjf1NXkW8NJq",
  "key12": "n2FzXdB8swGvWQ7JP5iHNFm3D3n8PiX46ckkv9f6JmBDwVtL52KsNqBSit7i3jYh8K8ae5zaGjMVUc37Cfw8FR5",
  "key13": "5QDMN3JKxFAT4VevdHHeFHgNjsMLHf7ix9SLFdfi3s7msxeupyBsWg6wMGuyDT6VgKUGMHBgpkK1LM2B1KyqNuqt",
  "key14": "5XEVfyzzQhpkw87UrWCkpsLm8VN7ryfe4aHr6zv3xpPBFUQik1B6KJB6zB65EaskFscj77pn8WcWF42RmNvjsF9a",
  "key15": "3Mkm3iouR3pTuy9ykqtstjsPdCbAHK63GHKt4yF4V1Z2tRssXnXXwHroTRUb9U5q3QSmPMqNXGkcBAUbp9KLQLEM",
  "key16": "5h5J8QqcRZV76Wqii5zhccsuvZCcqABtxFzjPXc2abeTKFAD3woNHYqH8nZKB5sTT5NU2ZzBQVTB1ynUEQ5YwY3M",
  "key17": "22Qpw8ZUxS6ry6LTVxBcLAa2wQRktJSDmgCNDN8yftwRfMUi1Ci48zFb5t1Ych9vkW1jqbVhvXJ98JaV6r1NsJiD",
  "key18": "5Y7wgXrFDcoPki815Wtfdn9YnE1uoe9fvPh7g7tvMxSk95jybHyEJQQNsSwAdR59x33FF8sVU9CZ8CvWQb8G1s8d",
  "key19": "3dNHavMFPwuxGcUnEtCYPfTnmaMsJBEKoAXaxfEzFDHA7FJ31UB2jHhyAUpfrMHLZHPk4NaqjDKJhqAek2CCirFP",
  "key20": "SV4Qoh3FXB8Ng87b9E2Qv7EfvJbH1btj1Tw73RfJ4DtrqduAg9oGWJwyscj5Jk6AC9js9beqtQ8BE6xt8t7Fv86",
  "key21": "3QY2ZFcmSsT16w4xTPop4kGunCjnQmU4QKaa2VyCgFw5szXVy3jujXGZqv5QopMexMVbNCQvf8x35LGDaQFmz2SE",
  "key22": "3cC1TFUqJmVwwHWiWeWjb133TcXGjAUox4BscnKHSHzZy1rVSuPmxnPFnw9ntLnLfEFcpWVS44BNE8DTCCjbUjfb",
  "key23": "2shYxHXFZVeCqXvTAC8QgFjtvXxFr5W5TUZ89CYgkxhu7NovA5jD1wdo83stGa4NeHGJAnPYVqdpUF7ozLtwMtDZ",
  "key24": "5QHuSRfiE5yZcFBR6zkRLUBeiHibYjtiSPYst7kMY95tvU8xuzjzuNmETb7kqVaisxA1ZAcXovkjdYWnWtY7hiLW"
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
