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
    "3xSzsVKh5KzpiG5TXevJnANpazzTFG3jTQv6gPtGkhUxSt6QwrGYX3RAFnYAfmo1e2JWXrEkiSG2BueAKpTPqTtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f71etG6gKhqjN669THQ2u8FSnnP8jaPytS9mFr3d4juuMF5GNxDHgNGYw2pZgy4q9DsAbuBCG6x87fB7smLDana",
  "key1": "5eQE6VvFiA3B1YjKSwMCVm2RkW4MBVGpe4pg2NvmRwSMzEjJwCyyuus2QC9XrJzi9vipWgqSCZu2Xx4z8u44sxdP",
  "key2": "4NtkxA22H2ipoZiD7N8qTJPXFApdvrU5TNnG1jzZdTFc3tQUzNoioqh3Uq11njZg4p1HDZ77BUyZEyFsBiP3riQY",
  "key3": "f7hCDUskQMYHMCQBLE6s8ss32YWFFkmUc3GwxJ4Mhc7Yut1Kx4BdDwT8bD1wuqzkUpsrgMhYw6hD153eC6dEHNQ",
  "key4": "5HuGhHstyj7BkshM7ec8CyguyHfSxGBe7kXq8R53AKpmwsrNMfF1fQSn7oqcg3Hc2dULE8fWSWuLsgLG1oRYdiaD",
  "key5": "5F3oo8ibnBkMTSnXWBGSmHtjFS4Rbukzk89Mho72TrKNtmQbZPqw5GfMGQjYkA44Hyv4NdTFMksvvz7ibM8bKkgX",
  "key6": "2DmdPApe8PSYQKgVdf9pML7TrsVm7NZcRQ8fyrU3PrmnxumJSRrwHh2a5kXV67rfbrZpPygk9DSyTA9gGNxyrJ2Q",
  "key7": "2uD5HPrCxGdDmjURJ4BADqeqv6855DYY8asLQu34yFBtbXkfUbaFJVXvdMrXnmcfE5JBt26GsF3NnzCH4gzVJwaA",
  "key8": "7PFBXGVYTaEoT834eDt1nJNEkuh84TstpzRXauNGs9N5V5nNAjWcLj6dEYAdAr6J79BdHgkuG6ZaMrgBYisYAVw",
  "key9": "66jEeJFvNj72ET74akygnZiXT7vSdANfhMMKsSGsM6jLj3H2rQWUk2UjgNDX5ngb2LYWXyFZCpd7QNUyoD37waZN",
  "key10": "2WVyDSm3k36jJXLq5pwM7qScY5LmfJNnBJ2GZr7PYUuNAEMEFCTijjt2sjpusSQvCtfNg8tihbLrMuFcgdCziZ7e",
  "key11": "3fZSBpsyrmVxCC6mjU4epa5sNRCBAF2YMKecyYVJmpcXFcL93iMEp1LDRHsWcziB98kFSZZUUXa7nmW7yQ4vDfPs",
  "key12": "5fFJpVgPYnWgXa5fVW6wWtCbNVMZezvT2TzJcPctx4NEL7TUCchSs8B1nWx9kJnsk71J9gdbr943aSFReKBVDnaA",
  "key13": "4FSipRZrU1qNkcH9ALS1NPuYvJCt6f8S795ixxTzdSZhRZrCNqMMZoY9Z84VoYeDC6d3AXKbNedwgJr1khmJW6RY",
  "key14": "2vntdHVYreU3NPxZ9LuXXxoz29uNXXfy345LgSvyc4iFTyQtzCb1irwJ2CzVqNqMVkY8FbQDpZjKjjdXmaoipBit",
  "key15": "32QPAKuCwNgzz6V1BaVkPw97qQmD6XcoumB4ks43WyqcR21XxFD5yEuuYfEeTrbFQBx8MAuVABvTxS8H7dbHxwmP",
  "key16": "4yErzpf5yMTnK1sMfP5ik5MGuBEJc9sfxsrdpgUowK6uiAuA79kvx1d5LpzTk4q1iaC6TnKuTQoRsA1m7BU4YCoT",
  "key17": "4V8cZFXWyEGNzyjan8gHS1HKZUsq5jAcWLNxaWpTUkUKeXYq9yri8ZxU5NXtG1yKahyjQdvfHo7bCMakDs6TkBLm",
  "key18": "4Nc4wMeovY7yD5DqQzvmYdVg2Zd8qyDAYvX29NgtVJMyRuWBxvckXWg8jMgQv6wauNNW8A1QrP61971cQ1GAN9VW",
  "key19": "5Qmkx7B8apmrUEyHCtrZNDU5tWskJim3Cpt3uvtduDAVy1cQKP2kMNpvivhmNf6LXrcJx2yWMMW6sNymSgjd8Sjx",
  "key20": "4xXwJE2GCcakiFazyYkxzSqprBDsACRqF12JZV2cbSo1492g7s342YohUcbzfTA48vGfiTBo7Ss6Mbnsg3VvJ636",
  "key21": "2xYDXT9AqyMPFxL1FTSqUC3JG4ZEL4XmCfeS5Tavsqp2ojo2qs72V2dJg8iahdPHLj82e1HPRXAE2131xNoA9tz4",
  "key22": "5skfQwdxeLH3jyK4jJCbWJcfaaHqt8ZhppWYFsgGvAmkimjXjDJ8EpYE7uf51QoXdpotDES5WKbuBMF6frfDjjX1",
  "key23": "43GCijBty63ydL1fAxcKj19vmfc9zkUzPK8orxvipLv5AJY7ngHMKvBFeG136K9ogJcHAj1GcBWfUGF5UuY4p3CR",
  "key24": "2UFAF2HSP1G5VYLyxaEN1yNUYznM8rLLoLzYXxjHcYewTbNQKtysFDmbB9sFeqyYjXsMDr8VU62kXuESNFHHFEXQ",
  "key25": "5b9GzjdEvQBECdPtbyGkYiyWQDdb2q16kkyXNAuPLdUdaAmMNeF2LFnEofqvBKgs2HoVC4vWDLAA5QTD5q6S85yf",
  "key26": "8McgmmEzaospgmRPy6zjqJFNYdxDzj8knjgJoCysmExbQxKudTMHsLAwJ1dPNKFEB4vgDF5Gn2PhosQPdXLPm8i",
  "key27": "4HCEnWo7wBPQehp2YHnV5VTSA2hZWJn2Y9ckKFDCzuQkBHuJJUrtiR4dHgJ5zkpqXvD68TKr5ZTMno7oJtCx2Yje",
  "key28": "2ep5CeMJhfKJUVCoexsrA69ew6W28i6rZGPap4WhtBs1JkHfbKbCM3KTJ5rLTeedKxSsMc7ntUJyDMEVjp1sBoYF",
  "key29": "5fVBCrjSgffgFQZKGu8voZHBPJ8F4Wz5RzM1mfNgCsgCiHRoWh5PMhsMhPYYHpJwBZ4EotGM8neg81ToY6FFaSDr",
  "key30": "2o6wPhoQvr1hNjcSu1NXpufvq8VeBR5oQJNNiKNc4aM3pDYWhzENx136mL2EV3sBFGo8hy3AaZmHUJnTL93z1Qv3"
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
