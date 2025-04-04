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
    "eLCrqhSPX5MfPi4j8BA8cD8MTNYTodmdkNJXEt9SPoUygCX3RiZcAAPk6bStECHPSh5xtUN9WrRQAnPDBX8YK1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tiEJaVCXAE8QkVCWUP4UYKeDLJdVu2XrYS5xGraXCVcEYQwTdsggqeob6T9Kg4Y3RUduxcBhyNxwVWP14c1uJuA",
  "key1": "44gA8u4TnLsXHTeTifNuuwRiobC6gDxPT5vhBewuCQSAgKSAHBVTXbBNvUTWCedjY6ByNiw8vRD9WwZ4C2jQdRtk",
  "key2": "62HsyXSnV3fQ5ioBC2Y7osaaMLiAVwxoW6yz58UM3xA1gk5P6p9h8up323xrbcQSUgnpoUwRi2zKirc26qAj6fSi",
  "key3": "3NmMhRHqwpo8k24so31yUtAsnv4AHgMZw9n5KgUpEP9EsNE99E25Mx2snqWWnziDaZpwbzTa3yat8FpLZ1TbUm8o",
  "key4": "5BKSuksw948FfS3NbZK6W1KAhW6Qk66bwGi3UefmpoKxdZZYzA7NHNLktUJthQs7uqGnamkJk5e95RkK7iQYmWvK",
  "key5": "5mVWshdNgNw1iikfRhthfs92BPkwEfPx5VRG6EGtt4npriU8DQJpmEdcYi4Rdmy88YHaJvXgHZPFFC9hp6oZ2RtH",
  "key6": "2aawMCrdoQQQgJ8h1UgUbSqxmQ72PnYZxZ9JDoWeSN2wZurc1WacYsd3Lgjafsds7AKc8LVaVBQiEYVRKek3Rz9q",
  "key7": "5MM1vB4iYHtikoof54oYfA3sauBMTMy9vpBmrr2dMJ9X9RdPJB6cbvWezBYNmUZtZwpxVrUAoersbNyhnuLJRVu8",
  "key8": "2XCBHcbsCsJoEM35deskD9hitqT29xsAMp8HiqWUmdyF8gQ3TQ7nMWLHxztRUkxGq4iNQ7YCpQhMcCZ3kAkFYRt",
  "key9": "3W9xTPpbntqzhxwtxD3CMJadpJbtGJfWWZqQBC3FrLhByYBVjmX5UmzV4ETPt5xJqsLoVkWV3h4DptrcSrq9nmt5",
  "key10": "5X4CwSd1UMjhjMYySZczWfY3W4cWsTraXWxm5CLU3WhfadsocxG2d8eRG9v95zKGK8GBQf6L2kX2KvnzhD1Z8Apn",
  "key11": "3dZGoK3DsZw6u7aY7ibXaFCBtHFpx62T9BNTxfTm3trcH1RWAD9mHyG9gDvDygyxXVHaLB7Topdnc5k8JF9Ehg7g",
  "key12": "qgFxG8A3ADQ1gWLPCpF2PvYQwLeperm6G4HLbFaYysRaERtg1pzUKYXCq433PdPKNXm6yznDuNXeDDteh9vnasf",
  "key13": "nB4tueNirveF6Z6zUuwgtxVXn4aQ7XBvNsSzwzVSa7WEqEazf7db2mu9gDqxQz1LZUeztApUqhFpJ6u9BY9UgaL",
  "key14": "5y6AcXTuoga3dh9BG365Larvyozrvsj3ZP7dkBJQyBXJtfmK3vt9QV9FwgsnK5EgyUGfepSZrgEWb6q3PHomRvfh",
  "key15": "2Vtnf4M9EQyUnNT3r6gLk5TWFuHTRxrieHjKwP4HNF2tHmiaU3ycyA1WKzZoXi8zoW68fr6S5Q6RNLijZjbUEvmt",
  "key16": "4z9VhJR781WZC1nzh8n75iZMDUoaqcQEthhnzNjuAzkUD5nX9cF8rpUEoSGDtdm271pBtRhejBySnnBJF2F73oqh",
  "key17": "4zriEtaiNrUwL7ZhzUdwHodBoUuYuK5DTjeNST5gzMNX8CWyD5zd7eYSG96sLLm5mfg18sd9uzhP6UThihtZuEXu",
  "key18": "5L8kMrkCs1W1CiPzos9X2CtEEVRMp4ARMRHpUDtB55jQXGK2wL8GQYQxDJdJfudqXCLzUmsNbBiHqsVLwh4NQf2j",
  "key19": "iXfxFZmqgB1STV19kdLWjTjTwQAdi1jw6LncrxBhbncehaT3LcAmaJ4bmFEwYP61QKXakR72pozrnnBsXJkeUhw",
  "key20": "3JYeEBSiKdDgu2wojDKDHZzbFKhWyFZYbbjGJhZS9Ns1RNpSFFvgcYxhcSvRn18mXZmXwzJDp2UKsk9dLw1sjEaP",
  "key21": "4CQ2D4uuBZ5iFL2KaAuSNzAaoLVMf2WFjBRvBR8WAz9LtYMEvN1PTBxJvvDAH3hxGs5TNWGjf4RxygmvLaM3hJXr",
  "key22": "4vyJbCmTf1MiTS6KMKe3ezYgWd7vHopEyFCr8kr1pFSu4ehAqqyKsxyt6hoA1tUnDY37UyHo6fUddPj2dG2sneWB",
  "key23": "5B6tzLxWFyqakGR3LqkNqVMUqYMyF1sdLjQGQdK4tabCS68vCutLheeckbCASFGjJA4bLJ97MtM4Dy8hukhDrNi4",
  "key24": "4kDWT2oEmzxroxGUNpRMfERdq6KGo9h34wFbnbVzHaziK2bHTLfL84pzyH4M6re8MdPALpdBUahfr6quaDTjuRos",
  "key25": "3qU4P9w5ogV776uwjGLvb5MU8xnQhzAQjQWyPEP7KbThc8JeVPimdMj2TPALoUGNb5m8ZcmYUmqGFZb1wuUXdWzX",
  "key26": "8kf2UUtDXdiHQrEqhzvHLSUAumyypx1JK1cdR7CgmwgM6zoHfqnQ8iik9uRhNRNe6B3wpdYXTsXkpZKLev3RtTz",
  "key27": "3s5M9HzBKArjphtqBngG1TZbqFSEoRuKKtWduAFSqvVooPLUiSzzQib2mHnApeqPXqtrnGjEPdVf9wWUJYC8n2Jn",
  "key28": "MMGugHQN7kgUSpsqdD7oxgVfPds8XpBPMfw6RPiV5TBnkZXQTsFdqRN4f5YycVRh5piC6bXeDetEkKBamAYx5CC"
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
