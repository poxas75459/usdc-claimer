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
    "3tSPCjxvmEH8JYqxtMCsUM9suphMLbAJUJebz7xYkKSdop8WrRMwHVtRqTmmQYB2ecsq5CcLWRyQu9UoGMwANFuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pBBnoxaLVLL8nVpFbg2Ai8N3H2eY7wmvhUKRHNQRJuRbNRns25WqUCrg9HAWeeULeLpAkMXx5q7kBZNJDwbjtfR",
  "key1": "4UiNsEqzNcybXS3cCaKStgvGfxPFWR8trswzjfoGaNGRz8gByRBWV2qj3DKM5yVeGLRmDQYFTrCpmVJuWwW6hSSh",
  "key2": "s6wn5AUch26AnyKWgEwnLXvdEVszdeKd5dARkmEn7xbivqV9TTHAMumkQJkv6BMYhiohuP2s54LDfrwkKQu3P2Y",
  "key3": "5tBRWasZrocrc3rtFaFWsQYtytckpqfRua1xXxwAtbB4WFkGG8HZgCPPoWodGt7EjvMR47k47S3axDNoPV6aWqP9",
  "key4": "31CALRNSvzUUgTMfuNSkLwLScPxyAzr2xZRKznHxhyDkEszkTVDSCPwSAyg9KkARPsVDHwMhRQJBsiq5odGmqV72",
  "key5": "2rd4mZ2F1sW5twZU9UCG3ziBSHTqUk6VR3DhxJf4vXhZ2bPMKtP3Yip2Suz4zNA1KqueZC72iJF9iFAHn4ci5J9Y",
  "key6": "34fEkAHYZv4UV9CP7z1w6WsYDgwvoMzRYkaxh89nbZu7SWzeBWLDJWhqeWUromkbbTM4FCiezYUzwUDWhm5hmv5F",
  "key7": "37zkmympTZJWedEvQB1joT5K1chs5z6ZzmkKx2psqSMyGG8dhupDh1bjxvFxQaHbn3oazZ6taXG7TwTqZmDjtjCZ",
  "key8": "67rHKKm5qFaKrG7KX5aJsvH4T6L619asNUKmp9mPp4b6ASpycnPb6yintKVDxhc7faihiAtZVD1k527UDWX6v6LL",
  "key9": "4me55y4dDrjjLpNRePgBGqyJcCYwdd5vPtv1b9m35n4Dp91KyHc3WAciPS92h1KoPpAHuMmMtjkFZcXWp2fZf6cF",
  "key10": "51bVpiapd4NfuqHk6NWymBs944qzRP8mB2YckKXN54n58ZoGK9HcbvN4WtQb3cRCHd33G5n2SZh6PrFi6HqS9KU7",
  "key11": "zan8WTUsTnP5THokwK6xBAUoB7ZgaF7XaGM6je8xKuVrvYWMKbxXsSNhmbPbmceM5T3Ffp3j9jSSZkTow6Ut9u5",
  "key12": "2KCfA8KFar3BqS1NcFfDB87owZLydeut2u7w9qDmwx5tYjN43WKxd14obWsKxJPE6cxvSEkCuppgXiowgcSaHyJ4",
  "key13": "2SMGaJeB73uMfeHSQgPPagBtFM8JVaQitiPenGhtFVL4Zn7YHM94h3U5Wgb5HWNPHKPEc6Lb3AggJi5mBtHmBYvK",
  "key14": "3QAK89gSwPF4a4KSJ9AQSGjLTyB2sm7VwEfhMFpWtbtVs4DY4g6PzVxWrF6SXBy9JGZwiaSFMjvLYsFhx4TgSvbF",
  "key15": "54ENBEgriJ69krw67jJPDLdS7tv8KiRNMnQSCcQEamxU8CuN6LcnmLYDJQxH6AR25xSpekz3TnLArmvnL1xwRNaN",
  "key16": "35StbYnsWeGZMqGxcnyuTZuMft2o9vtFVctTKbysBwKQEUE9HRRqaS5e5Aw3q8FDuepyYdU2527oVxLVVM6mnevT",
  "key17": "3NxUr2JXZYwHADRpDXgczf7hbooSNZU6wVL5TkgynEsM35cPDAoz8tHMeHCGvo36aECeuq6tvPQCAGsQAgK9LfQx",
  "key18": "9hpFZTvEULgAyDMpyTkv4NmWaSyiQ1rL7qjtTHwoe9eAS6toXv2uEzcmF9kWUSL8ccm6wg2fvbMvqrPyAN4KZfN",
  "key19": "FwgR7EPDh3bQwp1SUZmiYN2gZG4RaqAFmgzJCqefnZFbnBf5myKUWEWqNfqLpK4ktzYHk35d1qnLU2Bq3huxGJg",
  "key20": "55Sf34WzLuPMq6SwnqyWp4pvJBywa1ATpY2T9DFMmkLbG8fyHZpwqxQj2nC8t1WWXooQFGeL78G9oqd7C2fEsviG",
  "key21": "5Jn1ydWrmwGzoTAzQe4s4QHeTwM74gUPqWr5JNZbBfqJXXymnhFtAnM56G5nxdbjhhW4RDCsvaRs3iTmEgcFryAF",
  "key22": "2wY56WRXmL8hFCFXm2239GZ6ZHA4bcNNhbAajx1sRvXJJqzyn5mUHSY1QaY58cs8rxPn37cvYj9S8kRx5TXaU7tJ",
  "key23": "5HjrgqBWNyu3Fdp7DXus9eKsLGiARXXhmT2tcaxUJNUEShDJP56gVGauKiscFrX7KeTBdLnRBTmPXfRy1Vf92Ba2",
  "key24": "21EamoQpSpW7VDoxxaq1qPvKhERzA3pEHr9gzKc3buJpeNeB7MbHa7fEYyZ42x2EFg8urxNBJTmZRPyHqTpYwtDu",
  "key25": "3AuC45kXb589HBAQHnSbLPSviZ62ry5spJJrjEGUMTnhrZgZEZnyZoTH8P6MatJetp2FwcSRTxXmRyAsMNesfZMM",
  "key26": "2cc2EzuF9xUQK5w6BRo5fLYTmjnde1RhVwkHaRsTaPBcjLDLK5LZuhnSAiRBHAXpX3onhYwHTEcSLJj9Px4ndTbV",
  "key27": "9ikqZ5JBjYqjU9pu9ifzNiqHKkVH2L8YK5eLadHygyT4G9gKDvGKUGgatSEZ2PbNe5fJ6GKYXaMDv7UaMumsjGZ",
  "key28": "suQ94CFBpc8rzAFtk68i1goCfTdZPPGDXsdHnrM5dJbox1pyZqBTH1YJuTzmoZ6ya4Q9RNEALnsA7DCacptiwHM"
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
