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
    "37pwED6XWE3pdqreRg1riseSD3WHJdP2KLFFxNSupqxPkNRUSz6zUa18dLvWcG4Zbe1ZdSefEtXjcGdD5ePcjAWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "211BVUFhVXJro2wiVBixiYwbcLP2kk4P75e5jdLTea3hVBfVsUXFZ33TvufEaGiWjrcDjXeHaZwXiu1GHeTUurRH",
  "key1": "26YjwkEXzBPB7yuzJhv5z8gExVhA88NGL8f9GRM8ebYfDfTxphVQEWpxTaeE7LrBKzdXdqFUYePTDDSag9KuVHc9",
  "key2": "dE69Ma7HVtDi17idyf7QghpkbXbREQVZg5jyS72qEJ5VKemDmKCysWbpX1DWrxndXQfKEcxoKoJvAH2MFmvFfdw",
  "key3": "5ApWWBJQVZTDWH4kGcuCZnZVatNGfcLyFWLc3xeb2DnbP3tr6TLPqb3Ewr3KDXQuZivHrd5Ws33XGGEhgkcEHHru",
  "key4": "2LQiuDnvS6mneNUHCuGWqvGKpJjaEy14owNVPWRteZKjb1kgcsk8Rq6JsTh7NB1mP8Q6UF9bwba3QdnoQGkWKAyW",
  "key5": "4gbHhZcCFgao8VPD9wJeWziR6bapfnyZJaZA1w6e6h1FSXzc7vzfgXHc3TApjpJaBecNuxzTLwKbSQFbNQWWumPU",
  "key6": "EKWgRqQn6EuLUBhTRjuqKAt2k3fS5tDmerbbErM7eZJCbPRpAqLzuxdDnL3pVAEUUZbiwdLMc6wWxwEAJT8pT2U",
  "key7": "J2jMq2533MQUrerCxVk7KNjCEp3yscC2JXyyNkMNc6nEo1QmYgXwAUyUNQcsAgC3gJjFm516EEuXLrSkoVbQoYj",
  "key8": "3GAD95WQhSnt6C2cyhpisdzP9F2dCMYUXispkCkNrBUnsAsMUZN3U8h2bPkzk51hfn69euph7dGRQgE9vmxbGr4p",
  "key9": "8meEwwvSHCKtP99R7pNaZAFbTadQrYko2RfABHRfLP5pUNUzSmtfoRTS5M3CyJMLtZgaUuhWRvY2KpfwaCCfjFD",
  "key10": "66x34sFc6UVqvBzSfGdTMNeAee5mz3YMq55RcXB3mSGuhFqFDmHuT3c2Djx4S4Wh9R5kkzZUVZMTKTmAgh8Ho3tY",
  "key11": "71QX2XLkLS85nxagJqPJeWkTJqddaZ2GfF9v1CwDvunDErtjEgxxGouj5M8gxAUkCY1e1mBgYgRutxd9PYw266Q",
  "key12": "5hGmzBasEYP2cspZXu4RzhgVdShxrtif7Qiw2rrjP2cPt7zsgRCAggSB1yibKXisGeNdLgqGRwjxuBY9qodxjfHe",
  "key13": "63PWqbANE7mvh8QzoDV68WFBraZEqGmGHcoHE2JoB1ysDPmrstRgJjZViEixDhEGk9d5h9oywNH812eQLtQh9Vfv",
  "key14": "2fziPafu9aGqQA42gXrrsoCMWKK3hmqhsbGX2CM54MZ37z69fwp5nde8P4cHsSPk69quoLRQT5svfoXJEU7fZEoK",
  "key15": "5kqvMAy4dkZeaWASsSh5i3DRwJ2WBLb2GPspN58wUY1pJQXpgi296DE4rmaj564AaMRhnihUUWFb3h6YwPJJ13BU",
  "key16": "vfGuAEaDANWZ3DrWZLA9CnR1deUzGGcWzdN58Yo9KmvG5fmNUnN6AH9sATvyWFGjAoZ4fsJeDtyHQCUyMqvbZkk",
  "key17": "4yNRnEtrnjcaNyX1NK8euP81Wjwfj9ZLbUxUDrDWzequxCRmRLXba4kqjVZ89Yw4BK15Gr9erH6CsELCLLR6kJ3y",
  "key18": "bFc2C3ACc9eW6JbyYP4Lccf38Fm4QZkrMUaitcNQs3yoXRAQjer4wDfTG2GjBMMSJLkdsE7tHqXpUuWHYCE6rsU",
  "key19": "3uzXcM2WgvYux6659cdjftVgVGWDmokMhER38sjrERCbzCQa8yUc8rj6Gtazjy3nLcG8e2SixN154rRTkCQwKZV5",
  "key20": "4G9c73AXFNhyu8JEfZ11HYkevgbzqsQfd6RTyRheuWK9cxeQsgPEpBY6bpCFsRRTbA91fVuLADD6L4Ay2YyFxFZo",
  "key21": "9WgKYikwQTNTigSzXzPVzFobPn3qj7YKPHBN5Mrx3WFo1E24AAtHLW4GuHnQFd7bs51ndLarXgaMzic5kS5isZc",
  "key22": "2xcgZrjrXA7ALrUTbwHdgQoejwVmoKgovbFmA8bB7XJLnDGD5nhRu4wxfMCmGcYd36gUdBhH3jgyTmeWGexwg5J9",
  "key23": "4z3zS6HNKRSL5K5RDHjtRK7JGaZ79fvioBVcTv4xAM4CCBuzA5Pm5nPzzxctxTqtK5SzZMhaG7HUxoM9dsP4srcB",
  "key24": "3TEeHLY1MutPAcLAtVTz2udmMK4sUKq2egGMSdVoE4RdjY5mnCJbfNsdpw9NkWMKv7oHEt8WNNEbqF5rZ4fKJ8AL",
  "key25": "2DxAQv9Z5m5bTE8NdGmw1CPMiDkofVBzHSTPFFTDmVMhPKH3pZ6AGaFe1mm2dKKMeKAAHbrVyckbUoGbd2EEBUMB",
  "key26": "5rcBn3tWEW3eChAJMbu5rt9XkzkvBgwRujbJoieHsV1BbyqnPpRtJdkuZDGz6cHiSKjqMPtaBxJ19bkxaRU7oLqw"
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
