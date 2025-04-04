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
    "wwDoDreb1xsUW7TAn3T6T58k3z7WsgnQcmHgFzeZ4GgxRJRZCC9EKDH6ZdkEYQYifBX5LVkidqrr6u2rALiyp9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5taNtyU2iEZUwa2T8SMhgojmYLqRRpgBiACmgeiy6UL48cidpvE1ivab3bd7TKVeAYLC55QKsxLZqt4Wp4JmN8LS",
  "key1": "3ND3ftxEzBsRsQw43gZBJgc4F84EhYVEZdADxvEjdMejLmhaNs8sV6uk946tEXLG1uncdFRi73Mno4vNNbXpyfDY",
  "key2": "3PDbWgap9SgQc3p9ows6jZaRYeEPg8bXJPed1sjVhA8PGVC5Di6NMrj1dW6VKNCshHG1d93ss6sFbhpsDQC1A4pm",
  "key3": "4Ph9rkU5i7ByzkqLLVVmBycGaxUxA2keDmrK5gVZTTRhggX75j4GMuuaAxpqHJyQNRPTjLdGiHA3pyiWuQa7of9",
  "key4": "HwaNh5ryi4BuN3CoaoqEZAAiHooNdzxdvam48mt1udEWazVR3jvY66USej1o5sQNj3TaqR6FNPam6RDjrGsvkuq",
  "key5": "8Ms95TxpYxdfDhq1MptTZ4AqvCskphbapKCSzgv7xWqDiyNk1gocVANwnyeaBq2msCfEdhiLkJWzmVXwjP2MYgx",
  "key6": "53vG228ryLLS2wwyoJefD1rrp5WfJ5TtrSPx9uuMdGjgs7nsduYFcpNSHStgT77cyn2nmeFmUakBu8xkpmw73VAV",
  "key7": "3QhDrtMHTDn85fTtFCfwMjRNKtN9eJqt1DWojkRnsGnkbKWEH2fc2vqSjzyesUMteJo82mwGQiz3mtb3X9Hw3xWJ",
  "key8": "5a66pD4HF1KjLNjBXdRHnY5yKmMZZbxnfKkKya38jpB4UQY1Q3oLEsBFHT1oQM23a8ybxPg3fU5QRHogAZSAhkYX",
  "key9": "3xARFTMVw1RHu8wKsUZFAZVe8sbGdNeUwNFcNeQuWy4iUUodpJ4UDNPiRVm2q6v3BBEKciRUXDPQtcATDMmT57BL",
  "key10": "qvLEKrpgUyH1p1n69x9q9vfkfei8AboZbfiBwNw3ckzf9vo6UWPVEhgJPTsH734tWkPqKci4jA5eqMg3VCtcq3F",
  "key11": "39uWzmFs3PHpnxh1pmyGaQe4jUYcbsS5AgmtKiAMyn5HvQ2BezXiRY5oz1vcV8B8jKfKXiucBqu9Z9gfuTn3eCBB",
  "key12": "dqCAjVmyhaREVn7FqWcBdSPEW6JhTc4snWMbTq4kzAqUxCwQe25z69wTDLEHeSVFSirhZf65uidHMqbAtuF2S4v",
  "key13": "2Tqg2pDAYmmEin9Y3aYSr8WVo4RqzWQxFuJTEyScPooL2qgQwvmnpGNYdLErZXVGMwbuaD5ms3a1TbEdwV6nfnTu",
  "key14": "D7zypNEHKkwDW9cpYRhgE1LWnk3vpEuYZ43SDNmg3DaYqvaZgQSVLPjoQqNSwZcRbBt3LJSsvnH6GBmJthcdo2M",
  "key15": "3JsgafdPpECLwb1Fv7BRcPsAbM3YeCj46XAxgXj7jxrc9EVw4voRDp85jdFDt3Mid97jVTe5YThYfgNhD253SKwL",
  "key16": "42i37KABn5FTC1fvwfNCEsovpwsqYEJfGx8pMhtb6hXwGnhW7s7aftcyjSDxLiUBUdrm5BdhrHLtxFMVNzLH7F41",
  "key17": "fvcwC997MgdfyVHHAgwZ28EwfLoD87jXbRgMNiwicx9LPomxkHEBuosjiZRxhfvLTeHBfAbT4bkKHUhcykQhPFG",
  "key18": "fEaMPJkRGGrMq2HUtzKtYhRPM14nPgZtZuJBfd7RDyW9pHNnEqepo33ahaQzpCuS369nAjX6TzMLqPXRcnnMjE1",
  "key19": "5EV2RMfnnQp6vbkbASJSJBKztrTbvBCAfhK6zSwYMJAh8gKkkjbQoqmjKXBj7bzn8jQNcVbE9uy3p1Nvv3n4Z1fG",
  "key20": "PKqrx9W9Z2MyjtVL2j3rNJZqjFLteRtpneHu4aktfXxguvQqZMy1n2iEiok9vVM7wgzDiZvY8x7cj59wsY6zG56",
  "key21": "5j5j5H1bwExZV7eTSFHtazaTqZAPnTTmLGwRFEtqSRRyZyFghoHBduguggyWHYfK7WMF8xsaazFLZKtFugDtxdUD",
  "key22": "2tq8PYkdap83GmriXMQKAe82JAZcnwkukz7i5ii7iGiVL52mXemDthFQG6Sz9xx6rTk1RBCVPsdUm73unVDFzC2U",
  "key23": "3HpEXkwdXTzLfAN2eumsvmkBgN6uCxw4zycDLVTvM2hQt8ZLE11iiB79i87YYs3W2auJvssfLufkUuc6JKbpkcsg",
  "key24": "5AYUXHg1Tjz6wHUNEk8zJvo8cFY3grqLhTqEfMTztGBWmekSQRK83PhxdAN5ggPu7Tacac18X18mdSA4CGa6ZZcF",
  "key25": "5rvhqNV5WFRHi9r4poZGvmGMbmtGd6bDiLhN8yaYWCUdxnNNP2yACbofpXFHaLgpaeMR7H4K4mXCstnDBpWQ56yF",
  "key26": "38LhPp5ihvtvbvLKbnEQfkpAin5ssrbgGXNF6etoYe8DTtrCcZNGfyiyMdS6YYjRC4fpbeKgGRVaCXwwKoC771tD",
  "key27": "HbzKvUSfsAdtLHHLFki7aeY1K9H3hEbW4B15MxtibgCUDgWh2WhMUtNNYwx8AaJGMWG1B8QqhA8TWqqHELfFDcs",
  "key28": "31UFkVJF5u75YHqChB7cV9gHQ9vwVJQdH31iqCzFgUNsTXdaBJvBWmCK33p7z3EtkK1oYLj722nfocD3VNrKGPEB",
  "key29": "2bHZFWptZaS3wQix5QsJKHHxoEs92ync9iuGvjJ4MW6Zp22QzMXrUbeCrbV3uBzDYa35ERjR7bhCHrBc4JiZEEZP",
  "key30": "35SdBQVgQ3SgU4a8MBkrPh2UE4kUW7nu2wK73QxricG1pCLyEj8hyJRzCV1c7xfCzvkARMQDZ5FJbiAa3eLbwABZ",
  "key31": "3z7ceyLktkFUaYfZjNfjgqzHsPt8T6e1nXB8fyXVEmT9DdjxqmrPwcUHHv1WUYMup4ZnrLfJW3HMHWfwdLEPNNcK",
  "key32": "xNdZRFrSq21ukBhhNTSNBpBsroArMVEZntzmoDkZZ1nSmGDTtDLCgEVqK7sZdxxnpMaNXrJjHBWB5KE5PCwbWPm"
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
