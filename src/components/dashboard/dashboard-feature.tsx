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
    "tMi7g1cAcRM4hQnhx6k6eiFT7k7RhUTQTjxsXVQEkyXJahvdXqQ95EgoxWps24FAa4smJceEML3k5bkwavYChH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6vHtPZ6fy6TUjgNJqhMvsV1A5S1dzSkKeMY3f5X8Lde2sH5PcqhTortbQSWuyHKcWvNx7mvFrudRRUYd8Ba9Yq",
  "key1": "4fmcwzD1tdVU34SKP2yj3TuJx4US1ZVBYuYX1QapYAqVrqoSWin6QoKmrTu3pz7wJpfH881wwaXuYZq9cExsdyqR",
  "key2": "5t7eMzWo463uu6TmRLFBa9tyxAehqHtrve2DiTozQuUUi8YwxYvZ2CjrEYkCfYhSBTbmYHEeAinJZjnejXE9iY5J",
  "key3": "5hR97wZpB3DZGQnRaDUrhQ52vWcGDw2treCaBfH2P2vNLS5ZF8NcaqnDseYqbReG7VCjeiP19wRYGAD2EUW1kXdh",
  "key4": "jtinKxKTp8DWEuV33C8CLjQ7wn43pnjLku9SKbi7XZqyqKyUJr79SYe9gkKg9JZiFkKFPfWUbVEsPwnKaZZm693",
  "key5": "4T2G9Nfi3tvVUhkaNgaTbBXKXZ44tevXd4zEGHagE86oRnZLxRQBk3PeqB5FrCyU7vhdAMBxYhJmanRqUtrfvdpV",
  "key6": "4dkcYdUk7qSDqPATSfeSJqGpWCe2kVKb9WHGz7r3eShABtgdahTfpQbMjtCtvx6bCTj7fgh1LXRzQ8B1xxPNvFiq",
  "key7": "4JSdCdHYF7NLKDeepjMUwNaV2BpXF8oRc5d229RtuL8pmJEJkzjwKPmE7U687z2ShNGFE5DLi2TMq73zCGWfXu2r",
  "key8": "3cH4noDBUb6LuC7BWb6JFkDvfz5C1dtdRyaqUDDZrYBXYQmzc2Cyi9CsqPvRj7nsiEfFVtNrx1agosHcshGo2TU4",
  "key9": "5rMG8fu1vSHsVBgxMNJDEZM2i5CbrJ9vZQyEWBBLNJzh3cWmtkqWL6TaX9hWHuBPEERb6qeeTi43GcJapjcbRcJ",
  "key10": "2poM45fnM5inyfCxjzve7KkAici62B7ZFoSMaNLHBMkSTzngFEhyDb9C3YzyyA4zAdhhrDnhPZKHYiJ8tu9MyTjq",
  "key11": "3yK1FcbteHGDtPQ29Nc5q5NMtNdBR3Kiho53kEaJQTFdTbYSHu9nMuCFn3iMnva7FA3mtv4oy3xempadM8cTdcWP",
  "key12": "57pdtEcpgCP5z3bn145WF4g6kqTT9yM4V73snYBvdbVyr9ow4FC5qieX7ygPcrZpfB2TyxZmpSbdAdFBD5wEo97f",
  "key13": "5E23VVoeJg43S9vqEQWD1TjnKtNs9hgxWgUdBQeHNwqPYsfbi2L4dRqzWRBQQRykq77m1bsCzqRaxSbxa1Ed58wk",
  "key14": "NNvxHNPvd8gythkNXbVR36a5n31Fbk1Qsh9WbpH1iGLfSqP2839FvHViVy5AZZoqjnaLJqB3yEdzHry3gEU63m9",
  "key15": "4ED7wWA46TupkbKhzukhSFYQUocfqkML7vFcMEQnqgeTk26rgYqk7JkKeAfXhC6pxPWQkqZtsYtTqevD2U3eGkdm",
  "key16": "4HuqBtJMFyviaphYxN33Jum5W7P8tn9jg1xjPseJSEjxxHf1xtxvF5YzcwFbD6payNiAKEx8BogzJABuBGR1L3Yf",
  "key17": "5kpKKmzMMmxJxL8oTsi7jjHwyEXvkZTaWa4EsJKE3MfzsJVeYe8wCBwUQ2BWaLMHohUNfr2xCEBDJUMCDPYJdnCh",
  "key18": "4MuQri78Cc5w5BqXSijwq3vuqM9Hk1rgrsoVghLp522gsWgQwSVBz9KAQ3VZhxKKBDimbRGyHQpmeYUGxk6gUUCS",
  "key19": "5uketrF2tvAqUmTFmPNBW5isoKaHtX2jRCSpj1YbG495B44YQ6dA5P1B3XZfsRRDQvDQVpMkbpSuszopStfBb6RW",
  "key20": "42iW65oYYtMbHVHzJaxmoGv1UYbqF4ni7ZErUvuNs4R2VTKkVWvK6938iu8y7HB28NjopygFDShuuVcrLaemopRf",
  "key21": "5NrqAPW7v9etFUD1mz4cJsrvX8XZ2c9GjVfe61yZjrD1p8U9jgByPhawAzbUgQGVHZSnfWovcHziK6WMpeY6kqcj",
  "key22": "3ecKWgHPz5HF6D3dr1UgDyrgZFm1DwibGdgwgjL2eSTbpvbkjg86phRCZ1ia9J6q5qcxripLUrjtX7gbFNgj29Yy",
  "key23": "4eupADdj9CbJatZ1djqVGDaSzPXoPDotcvsjsAuqzMn9B1PaK2frebD6WooyBrvUtVX6hgHFrwCTTySuRHArSArH",
  "key24": "dNYnvTzMAjqinphb8nej72JBHbJLQLSdm3ARwfyGK3UPxxzXXjui64uJLHsW4674Rqnn3ZzYiezkDQSeSs3z9k6",
  "key25": "MWj8ktzfxT5j4xNNsNUWPc1tCbxnm1MTEzMqowauKpUdKAiWNLJv7FfVK2FF8LXZ17Tgd3TJ32QHEukCF3b2GS1"
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
