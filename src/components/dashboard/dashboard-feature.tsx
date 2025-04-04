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
    "5gdKCC3HMhJarzLQLo9NKsxWSd6Q5cF27fExsCtZvmjYqxtNeQutKqNfMC3z6eV8vgAKPn1gjddGuo4aQ216Swo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FgctXhTkJSdCxyRbWPHKCDB9tTXD3MaMrcAKNYHcCCGQYtgnPapfvABwkXpWP6XaGamycyjxcWryWC5Pts1WVpf",
  "key1": "4zuEHuKcRF29U76LdiPeYgSqkptZvsAXJQwovQsVrkNK8DY4kBhY22DstAn3GeSwCCxQC8zKyrXSDmSPYAB6wfGH",
  "key2": "27PjFZDYa7GkD69mWFKDDd26tC6Xem8Z8meeqFiwxWwtpX1qTST9aDRXfQq63asHHopxxFtSNHKcefsjS3ckRyGu",
  "key3": "2MQ7adgcNRVkf5K8hqQ2RG4m4zc5twWzdH5cz1w51C2weFpV9WzuQUKUsgfByiX7EbaVjLvZqhbtcyAW7Z84ZtBb",
  "key4": "4qS8z1KcYfuEW37YqZXqKKMBzwcrYZWwDHcvqTivKaY3uRTR8AuuErroHPWheD7hKe9q3p2qm9R5qqAsCwDPGssH",
  "key5": "24bbfbc6WVqbX7JbaNEVDsUAoiUosRq4ypdNMw4AEMwKh8PUWSHYBanZ5jvW6dhyAJYVxzqjexngzBsEArYsAmSd",
  "key6": "49SKPWAJLJZ4YphECvWCLjuwMCRPwsgfYEvcyKiDQr9Yh3ZjFpYVaJ7gbwbjem2wSuuCj4m58F59tmAT6t7sKgPe",
  "key7": "2hzcyDeHnLMgwBs7sA56FSMZDQzCvUcc2tJWREfwCu2fT1nWWtaw3JY5mRjJZwC2Gzj89Ngj8HW1ZfX8kc2YrfZf",
  "key8": "4gFg46YzhciuFZutN26UoE8Z1eTgWkhdiACBGCjAkJ5KTNzc3LQGqLs6NMDDo4xcRXAC6bLay1NmkJCSPAeDAAD8",
  "key9": "2KiZZBuiExzrf9gt18NhnfXHrm6Urtwoosqy6RJBvPquv7qq6Z6c3NP9hiwP7i1dVrSwbHfEhzYfAt8Rfpgofvq4",
  "key10": "2RkjZx9FVnHmk11DmYBTg6sKkTDXHWW6p1EvemUdRqC6DhVsEhgWBSaNmXdRdhc5JTkchib4DRUgtvWFQCnTJz1U",
  "key11": "4uDzk3U87kjicroQH9TqWqyoNqEjqBc5xw14jHFsjYmeHJXYvvr7b9VaVqmosSEZPEd9zbrkxqL3Ko81ZsJyg3rY",
  "key12": "WfBsoEtXRVEy3WFZx1bMq1HAuB8tGh1vPFBRGCYijGxjtcDea7Y5Y6AujM9rJQgrdy6nap5cSvF38oC8EaJqGkg",
  "key13": "4yAFG63Vh3wxMaEPweZoSDTfB7ztPktUryKg7jDjWFfF3qfNVDzFQ3EfQ8tQHynTvwkuPtdVieae5o97fDV4SWT7",
  "key14": "5FX899Djwfqf72N38EcBGqPLoquUwBg9jwA44m1ekh7jqqWE39qtfzHyYrNvTUPM3JVrg46XT1UtHjXEESUvoknW",
  "key15": "AyknWbhJNeQ9H8WXoWA4H9CheDFSooTssUz7a3RZkHHTWBTkCcRqvAygZz29idT9d2SGo7xzpBSdKoH93zi9i3X",
  "key16": "2fTZMza9jkVc5Kc6udV48s6ZL6Vwj64q68cS3fGYr8MRoHbPigeKTJX1N2eg9J2ahE6y28KnBVjLYeJ4epcjQgoa",
  "key17": "skJcMYxg484TpPbjitdALgd7jZVNHJCRByZBh6cu712Jvs73KTK1ZuF2FSHZhF4MUrcHZmESpMrjTuZJmXgNK61",
  "key18": "4ZzmqVuMyxK8xy3WQLQP6zuxLx4fNDuDNAWU53MLRhT9FH6iRkRm387nMwheLqWeiFVkraP2fqfzjiFyHffmRzZ9",
  "key19": "3RfenmbqhuyMpxSjZXiKVVqtb1fkTPGgB95NdK1AGzRvfxvVFD3eGHnSfRJMnVrYnTuBW7sWEkQqinrCVennsdEg",
  "key20": "5GEaHefU8rXb26txiHZxrQeAYHmBabecbssasj8ueWJWkhgzL6kDxvG4HtUa55zo25MxKXs7qC5VhVmdaszEPd1S",
  "key21": "4DwoZZBr5Z7GfKbLixiqMfa7RfQXrgGrGPZeRU4a76ckaM1ez8ZfcUg146KRHXw7XgjnV85acxPRVYV8hXPMxGbL",
  "key22": "29RmVXgB4cee4BvN5gq6JM3qchQpkBunkQiYkG8U66VGWhx698GW8DuChofFLGgsfF68tdjD69uz4WSCsZenKFo6",
  "key23": "5jvKGa2D7jGofd5raQcJsPEPNdBJFAewjLCpU51eZvwe9q7M6G6E77AeFpeL6HyX6GfFnRqyDoaHVqJd4HfWKHBs",
  "key24": "5zEhBrdUfbs2vv4Qd5UVFfK5PG9Ji7r38Wym3SHxvvQ7YToTp6KEi3qEvLD3RpkeXkAX5G6N8b631g5WtgBDeVip",
  "key25": "3NDRzypPaygVtufQGppac7xN5xnZmMasfBYJfSuJPedotxjbgkNwaXh6LV5wMuqZrN3YtgGPS5UcwzmVCfEww1mY",
  "key26": "5E313DNiFEja1t3QRgSMqzFEKLzgfap5ziDmdqmLpMpRixzfXv4tiZmNoBGbnmGTEfXYHe4DgFiNZCUcg3pgr7pu",
  "key27": "4cpJS81aVKwrkz3nn2BxK7C9Tm1yLPrL6TLGHsT8n9GXJ8eRuqPojhFtnhcswSPGUaRJfhvTwpEyXQw1WbD35wPD",
  "key28": "5KYGcUaPDVnWUDW2kGrhA3R1Hje4bTGzzTgVUCfQahZbEDpyRUyCRwTrNfQr8JPdrUYaaJHnVqQDnbQUecPgmyUZ"
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
