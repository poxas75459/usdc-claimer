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
    "3SCGmwhkRZrXcz1JEcFcWeYP5qJR1qsqKmQEqGFJvA4PgR3pcYCsbjZuTty93cjgv812shQzdW3jDjLfdyr191Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcrK1xn3TbD8vrHoW7vs381xw7d9VFHtfMannuwtxRdGMUfvWcpD9i65ReJkjTSLfSUJzisbEecB5tAucRwPLnJ",
  "key1": "4Sd6ktYHLtJmsK3SZaLjhvfYGNBfBiyYg9TYXRD1BMZDFzw58A8rjNAKk9XqXEVhVWG3qM7CKuWRZpFyNcrWm6bS",
  "key2": "3sE3szPg1eCMM8uitn4P9uPzPYmwUDdKGyj3UfyHGQdj4QSMBW2Lc1buWQWdKULVwLc7dWdkH9ib5XB5VU1rZwS5",
  "key3": "3dEtisctgXtpFQ2nGCmevJzG5DtR23aTYdnbL1hv62kdvqJGMbbK29DpA4VooSmvbBytAaZ9LR1JhbqPKsxoMedm",
  "key4": "46CTXBpwKYRM2SfajZ2qCuQbQeTajYzFrdn5WZP46WMed8JnyvgUgK5Hrzb1Tt3xGxYtrprJxRGgcJvfNxtBzYxr",
  "key5": "3WTP9btGLBwZuHc3EgQrUmxroFEq9cZJEShoEyvgbqvHG7PeNsWUpXkVCaLcmHdafB5g8bhyWmSwrLABw5ZvHKmm",
  "key6": "3rC8NKw5LpRqwk699Emm8tLe1kha8wcjRSY8kzeUtpAcQYm3grZxRRVjQ1uNPAXJmG2vq8WxUCQ3FMj23NbL5ung",
  "key7": "471iBwMK2RzuPfPbqT3jX8KSzkzCnyUGFRzZVxYWCfJKsy7oqNXXyDEVP1YE7bftW3PUiRu9scYmkdJRbQJN7ZK2",
  "key8": "67m3ZnsKxiWjsGGkB2m53Tou4fixCAjp8jSWMBdb7EGeq8vW1SAAwkFCBe4siD8GUfwjQu9aMvxiPaZLiSNsS4iu",
  "key9": "3aPWExeWgyTFqLggDGKUgj6gSUK4mkdcpt2CWn9i31QEs9JDN76v7dpiY4eKAqzUTw6Z4Bz65DekDfUtYCrEBR8c",
  "key10": "2YmbjURzq22Q3gHn8FN4vrrw473HjuwjkEsDvuu2uapp4gSEMRFDrSCW1JGWn6PrrGGLn6QfVaXBWw8Hj4bYzK1Q",
  "key11": "4m4TJ3ziFTt1nAb4z61Fh2Nf1a1Eu3dJ5NafQXxQtTkvda8gaGPBNQm1wKh5p3M7bq5CMrfwxecLhrZtdeodGbW4",
  "key12": "8acGc1HzN5iTWwMf4S5L3TCVpDbqrjjHKoToHfXoa18sEKhmtBYAAYCTxcRjEdTsXuZnTHQhH8N9SxWGkat4GN7",
  "key13": "5Psd9XyaeKLUC1LR6aG7ZhmFmXwnrAAqbUmTUWRYKJqJZTjnvobEGRH3KBp5kqyiPHw7FECXgP2iTG19ESq2PygX",
  "key14": "34PyifhC5PU5XMToPpKS2iW665ScL16dJxfj47SRSzdWmNKo1agHcn4McNkdBGbXGkpzwxBqoqkzU74KNRrZknC6",
  "key15": "3aavdqfq88MPfvrUV4ZDKbGdUNPL3g94NqZaBm9NWxdf7bDE2sv9XKhVQqrbScw52Ud5K6pGhmzVYto3gEZrSgbA",
  "key16": "XCM5CMVNXrdzpTeX8p3H2gDLSeXpixJzNmeNMvvgV6WUfTfKpkieCKAAfAHcA7fHu4Pu4WtDjUk3TNwRsXxvpKr",
  "key17": "5CmnfhfgWrj5Qck15dyW4Yf5qA7fYWRK9W3K3uiC9qdPQxMAwnQmuXJHCrjRNLgeeskLVNxiAGNgForAr5H8Q6pZ",
  "key18": "2LQcLJPcSbEfNAmBeWs4WbkWgedmu3FmQk3FLnNA5RZMeZMicVkjpp4QdYE3hYaS3yNE2FaE9xtJP82tBMxtNNZt",
  "key19": "3MS3M3FjYbroTYBvcuBQsjUDwoDiy1zKueknfb6SXVEiQRiUwMhfW9pjcqp2AL34LzQLZvPFWDS9bPDFFtrGwBoD",
  "key20": "e3wH4mUxwZnGS95hA7TrshQKCoB4WKUc1Y8Re3rcNheqQjvx5SoU2Vr9kJyBgj245jUCefZCyG89rh8TA1nS7qx",
  "key21": "3Ss8uZ1cARAzNED4SxAgqBWSRTn6QSjJWdTE5k1bFZGtPMCu4Q89xrPXkqfKtFZkT71dtT6D6tbr82imvESFkD1D",
  "key22": "9txKDWrdkF8toWrK2uYBCFGDz3j5Rwt98rsRs3mLPUQwGgZyHvaWiM3MToCxS86TzZCQf1wC2e5kAVzmtXvZ7HL",
  "key23": "4iXnthqFFAeDi2kYzED8CCisgv7EGrZ3vTFHGXwwQ2M78pidNYeUDVqaTr2BnpTLktS1b1NZpUKKxSmaG2M3T825",
  "key24": "5o2LhTg6UfHCPkQ571M38fbJX5DsosyE1b5ipJuWrBxGhjgMCdpj5SCCgEBzDvcfpxkMzfF3juESvZFWqa3tYcRj"
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
