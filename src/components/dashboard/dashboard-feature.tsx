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
    "3RxK8oJGgVkPTAdePcgCHvaQ6TbjgiohUPQjU7agyhN1KVRx4CxNxGg7gyqBJp4eL4eHafzcMG5dBPaqvN9jqiSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cbvVgp6Y9vukA2tuLqAhu1gS16JL1zrhdFMdvv4oYqPZQrSR411YQzVm1W65DAkbCSpct3zuXsHVdWcDoi63W2W",
  "key1": "3c1CxcLkeRW6hTM1QMUGXyDp7U11TyMTahK9KF77qHwDjXRpnvn57KbPEsWchxgU6A31ALwivUwiic1sbVRhi58j",
  "key2": "4z2pbJJdZfFc7XJ7Bpz6uyBotX2rZQRNsm2ECu26DGqWWkcgxCqnD4qcvMZjQcqpmvNM6pducybAWrhV5VQC6CPJ",
  "key3": "1VABDt6YXP9cF7vw1QEvCrZeJaauutXdAVpboxmiLEFUtB5bLkkkcdqesQKPJW3jjVGusVyaF8yLDjvKEERWM2p",
  "key4": "2M2QnPFfYdZCZyHHofvJXF3Xpa35R4fdcJWg7e414UQbSSRi9bmePvidtiELVTz5VDWcHzwJyQ8TbbmhDfjJMnGN",
  "key5": "teQFA27XXFjXYSPMa3yBbbu33wsNrXDdhpoB7jcEG5fcMB2hYTr134F41yscgiXmZq3JFLrCzWAsryCx8GBGaHY",
  "key6": "5Bp8c5j7tWcQAvqkFVdxwQq46XMkGD34Hmyp6qiJKsdaTzm3JchvuyCWWeQAvF33rVXwPyNMPaeT7YKbCfc3ntpu",
  "key7": "46gQASBk6ct3XDF35bz9QwVDeLo5cUzNXwgauxb5GU9vt3AzHqAw7AukmJsb1x9Vikg7Wn8h3G7sfjc58mHbYdWv",
  "key8": "4Ch9fZJ9EdgmJNCV6JrPJFck7SQ3mHrnVGm6GiGUQgcaJEvCbeg18F6nTXjfuYPEKSAnP9P3kkLSvbpXGiZim8wR",
  "key9": "4xiMTJmXa4ES4GNE8gcmjJJsfjrL7d8u5joj9XSQR7jtLLMkk9HHwXirWUFnJVNceHtv3zicdFrDn7RxPjnAeYos",
  "key10": "4raE9qMRRQtctQ7YKYsSJtSMrJHbdbsyLpFKfPxuB2rpvQTgBNPSEEssN5DpCdFzB14jkzVTzJb2XhJWAqD2gKYj",
  "key11": "5yE6hi5od2h2BypFThyaYLsqFxR4qvPZYst2whebo7tQCVuT4DG5czmRuGhewZqcK71P11ftjjfz3zM3YoJfZFvq",
  "key12": "4Rrq2dvUFHPwzUCb5gwBNC3aRhEU1yXJpbRuNGeeHPh5i4n4CyWUeoKhdhU3SMVdWwjALZhv7ZDTZnCz8zpUoAys",
  "key13": "3y7gCWbA3My9PUdW3o9ZqEi6egCwck4RfuvxEzADppZVoRUGpGMnTd3cToxpMoDULA9bsYj3PDiRFmei7ZmFAto8",
  "key14": "2Rgi45xtKGwu77VMasW3iNLgH1KrUgnXqCBBRpYBtFGzHZNc7fZyNMtbcBzqNf5REkUco9R548pdVpphnak7jo2b",
  "key15": "4PiR4gjTD767gtKs2ejo28CDQCXMrpqb1h7p2CWgtpaPKb7Mzpv11JXENrbfihhmghxuhkkanzZwSotBYQVrx9gd",
  "key16": "5VjbbZWhqzZhTxiS1Wa3r7rBDE1vKXiH1aCM4rKKAzKgfLZpYe6kk45CLjQG5v1W8STV2rcyG75NXLx2scajkyea",
  "key17": "4DSvhijj5p8XjDGKRxcsWfYdVZgq9qJm1o9eweLR43WWvQZghvxteddqHVjUWZaexjpqNy4SGR6H5wrNhouc7WCN",
  "key18": "61VEap2WqqmS6KdGAxVnRSgqj3KQ7Bbf1SL8af5FnZAhCBby3eNanqg25AK2WP2Zb2SwKw8eM3fpK5bknt2inQUk",
  "key19": "gBU2xFj83XJyGx96fSL9KJzn5TPdaCMcKS6CSV5oqbKRwi193MnmhgtrDDbPnRmL3E655uNHL9uGEtaMGfh5EAD",
  "key20": "bCw3uLojTnPeNJG74JNnhQFuLGkNEv6ZsXnR4uWcCDBRZViM4T7jmmW5WETnBapT3veaZYd9qCTt6YSCweY9ngX",
  "key21": "31xPYqydubAmM9upEwtew8roTMex9NYA4U3FceYaT2TauUvhHCVCwggJuXgasGsfZJQPgF8QfzC1XGMkfEN1wrXb",
  "key22": "5Kgh619E3doExW4XSNrgvYTqDv2JYPXaG2PgNRBMPxzreX88vYh8ypSzebueyXKkWLSMmCWVf9iyymmfLvLLKmtM",
  "key23": "1izmmNy9SXm3TGw5npVZuXg6jpcEdumUN8ojydk1e4Xs3n7AJNaNyDMrZtZjgRfSN7DHUMNdR9SiNeXEqNFev8p",
  "key24": "375anGbWjLmaNJn367ToqDnwukL3uEJ5bpnCNjrBu8vvWbdzUBNqq19J9TrJc2BNrvF29Hig8FuouNRysbbver2C"
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
