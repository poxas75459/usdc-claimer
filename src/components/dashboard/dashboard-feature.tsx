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
    "4vNQxZrqe9h1VUx5o17qcXAHn9FBYyjcR9wFwWmSzNMH8uHqacX3Ux5UbjvaccFSbdxtJvXTKU2Tb8ain61hmJNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V57LxqT5kyKEVjWEowJFMkqHSQHgNNZCgUPNaEKhwCJzxohAWshKMeB4kzzHgxCGbwvj3oAQwQScttGShsDEJm9",
  "key1": "MNThK9urXajYujA7FxJ6Eweey1VrCdzBcwKufvDeUgEfLCJd8CxEakNRSeck8fZ881RHTVwq99wjdJ8BJM3FxS7",
  "key2": "2p9pZ9sWQqQStv2FiTtbNvu98yvJyYaE9LAB7GktmfkhQeZQ1tCsbyDAcvfskxBKnzQtvkrYMNW9HgNmA3Ba7BU6",
  "key3": "5tsUjh9fsdL5wg8pBD9YRyxmxkWnovXj9wy42XfLeD7RgqM9PRw76S8zwBi89Wnnw74K2pYcCXuuz8vw6eyRG9gs",
  "key4": "54ug7xXkhvyqzPCiiXe2ggSKgiWzrWgEeYfApu1ToV9HBbh5iVjMaaexUWUziHkVvoDAXeDkMNcsaytmJmg2ZReo",
  "key5": "5AmAYTKakiSKbX7oXP4cLkwkCtn2MpSmTbwx8L8pEjyDBS1dSxs41TepxtW1ZasadbPYhJPCA2dQhbmExVPNZZWB",
  "key6": "3g2LUsqpCAZftdsr85AdFSUbrckgsUp6kiWXTJKz2ntHw97tE2NbSuy7vDpDrXDSLFXabkrzUDUiYSJJQZDn3rdJ",
  "key7": "kHmaucksvgy88jBQ6bCNMDUkqB1fP4zM4ynoCKr2sCCvMHk8VW3tQRfQ12k9ZZR3CBvNSeXQtDDVBn6TpzsfbQ2",
  "key8": "2zyMYyAkQXJHwihpSfxvK7ekfb2exx97VsbPcz6U1wBemZ7SgvZZxCyosgr6ZaSj2EpKhifckZK3WwgDinnbit6j",
  "key9": "2auzF9PUkHVtDTXu8ox5mzUs7HPNzcRfGsbtaVYaJDCVVpyPHDR5Dmz9aPN1M7rBokbNBhxVwiDMyGiqhMkmthQ",
  "key10": "5p8iNX9XtgPup7EuJReqoALKQdAmu5esmQT84os6fMGZn3tPKs6whRJ8SYgSiq7RsNPZK8DZy8Dn5PJbLHUHgbp2",
  "key11": "4VsjkeCQ1ZYSUYimhRXGopsbWiAM2awusP52fAYxUWavoAXkdzeWb5p1uLGqanjYNHC2m37CRoL97huxKEqghcvd",
  "key12": "3CKrJ8ZsDSycEQKxpndbovVhi1XrCZjmsU5jNZtQD6NmXemX9SZzUYwaUbendnYgbp4jyaFoKtHbcvRNQbVb86cy",
  "key13": "2AKDt32nhqiHnaJSSMddJF6HoqznKdQyVppFXhUf7iqmf4tEsrZgpSTSpssFiSVN5Lg7ajvti1UMgY7yHDM9CQiX",
  "key14": "4SE4hVTcYQLAR36RBWvqdzi2MS3ZHPAEfofCnQJWJXbQay9ezAt4kyjyvzjkQiQvanjRfqMSPttuv8q3k4ZZCVhK",
  "key15": "3zkesJvEjeFh1MymrW8UvJqLShvkbEBX9hiRwLhSztGYBct3zNLkQAQJbUqiK7zGwdDph7nRXcEtHwNp6Z7sHito",
  "key16": "2Tbn1WZJjdZwcTF8kqNHqGE64DdE1FtoDWu95pu1zdCvuVJCHTRu77ipicQGXAdj3fkLA1RZFMYJZDisHqRootns",
  "key17": "5jdVJZ5Kg84S6DpQ3Wq8iDBHwjkgrxpr1cRTjikL25PUav7UMYX7voNW9e24qrCxwXun4WaTWrUsSYzGwyh5Xj2C",
  "key18": "2E7tTBuh5sF4VLE4Ue5d9JyxL4G3h8Ugx4MC3QCiNTNqAVYsEtnEhXhdcF9vxXuJUisRJam9TjP4MsbSr6CVo2AD",
  "key19": "2WFoNa353dTMCgncd4hzc2dta9wYnRuwnETMvbeqQkJaa8DsauTCvPnT7Z1heUoeEUxjX8WAmUEK6qX59FjyjyPB",
  "key20": "LefsL2WuSLVtatEC7GMeeqsCvfmKRnjk5yX4u1RKvVQKE3uKxbg9xZLjjDjseirJgLU1Cx5ng47HduURomQ6wHz",
  "key21": "5pJzWTqNgcp5rCQKLJVWgjiw1465TZvGtGkXkg5gsA1YtCz65kpm7ZjJocag2smY5STtD2xWNo7atGqWfUaqq58J",
  "key22": "5otXTvt3xMZ4q3GHoKzGy4E5sUbYLwoghcpzW1n3PCQvxykvPK2LSGxZJiSao7CD4LdUxDEU83tWSJ4tPmhdoBHd",
  "key23": "Fe4N3fgDbznhDNCSFkDvk1YvJ19hh9nqDgzVsYtJ1nbWHSxwyC6Sn1zS9bj5vk6eCRKqVotsr29AfgX6YTXjYHt",
  "key24": "587iGr6t5AH3eZEH8dYuCcvvi4JV8qsDw2R2PJ5tDVwhkc6KWjvnoi3GpmJnTSuN7PjK2yYqoYnkYASH9wSRhbNj"
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
