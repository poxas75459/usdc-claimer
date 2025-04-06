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
    "2a7nx1y1aNMVFF1gZad3s5fR4RfoeDopGsctAHmCMenB4QNRG7TzKZYSwm9kxyZiZKQs8PJRXVeTu513etJr66dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4dcxkeqvgAZCA4VF83xW8pNW8QAtDZHB2L6EL6nmPbyntPUfHJ7iJWZnt1CdZT6GhnA5jPz9wR4yWqSssduwaa",
  "key1": "5UZGCZ6uZFVznHPiGfUzmDW3uU3gyV6zq3TxdVeujma7PBF9dQ6ZcemRDvyT5n2bcVtiLVrot4LoyANTc1R5dvzF",
  "key2": "HpC3as6wGgMD3iN7sHj6MEEruvmaf4qarzybEojxDXpLMFQg3rXUW9WMpH3hMRLkEUxxrFSz9T9x3oVnygavMK7",
  "key3": "7GgWejCpcH3Qw5mtDLwcsUM7aYWWve1cAKkFWjfa1XNxjaRk4ix2MgLcxc8zHXpuJynJbY9hUzfizMToZ5VQutn",
  "key4": "2rKSKZX7DfyHVNHKdCjiW6Ue5vtuxgJHvaBL2SAZ7o5Asah9xzbcvE3kd8kdWpHqgHgGx55RDMPFtCKxES9AwgU6",
  "key5": "59TCWNyo8p4nJhg27HiPEYDrgrFsSqDFSs947V1DEwVWA5TfDPRYKkD8MBg472mv5ySui2CfGY7E1zZAzskGSTZy",
  "key6": "JD64uuQZrgRujZQR4gSeqrHARbfYU4vHrwGvdNENCLfrrsLAwZCorX5CBTVkEyLMoxkc9vKhTBALMDiz4NE6h2z",
  "key7": "5icfa6XhW1cG4XDnBQFFhCNF3eRcAATdfS33jFKUSpsHXQoYVdscz4HGCmCDnJJaFzpfgxjzoVbcFXchmnLGXic6",
  "key8": "JDs1tkiyd2sCeDaPdJPQr9Q69S9PDfHQVssDq5Lg8Xu6F4nQpbgEP6JMTaFrSVjunThTafExEDbEFpnDwZAy1un",
  "key9": "3LYrdP2zAmSGn7uJDRhXCk5xFWhNMV854KMDG8GRoV8bj5XfYSGzYYCJ6ZuHzfwp9HRua533xo1CUcXbvXJSxfVC",
  "key10": "43Mmtne88GG8XjfkkuAsUcotgGk8zogn8VsSTrs7Zt9YiqBxvCvVo2Fjy9pypTZSnzrheUF5vrkUsdPPPFf74Nfx",
  "key11": "tLNgQ4znGSuLVDsbvhzKbJBPZaXXdzKVD5wPXvjaF4wfKA1wLGqedVj7xZqtFJiPx8byAuJ7opU4bEBF7EDzjnb",
  "key12": "K3uyFs6EYPbsV33Db95yYnAijYwb7w3UYz44Jy5GKYjTvgrjS4XLE2v4A9CYMWXLYUqSoJFFCXgky6YhjkosGSi",
  "key13": "3yR2k2NcGfuGpCp8rSwbaVxEMBqszVcnWHo3op1Ff6n3JxLn5rQ33AWEGJznPZrA3mg3m5KBQphHsPWMHQ8aZCWw",
  "key14": "hLN4RawVDEXAMa2b3XbGK4Q3fhrhGg9uHzdA6R1m5JbWGM7YXg7rLgYkx1eUNjbL81vafiPRvq6TRzjJeRCaLqZ",
  "key15": "oFzwQU8DNCURpTp5bgsdNgQcZsTGQkgTG9qpacgMYmTKXXwKheqJRPrfzFk73tpLRbjq1m8eWbd4gvxMmUFWeyc",
  "key16": "3QjXq7B2VkCYyRCWnhvwSKQRcd4EbamxK3bXXVTJpbBKNYhMCk9C3RNDwWh8RW6FwvBCDyJh6iJZoNn2hTyWZU5",
  "key17": "2mTZNHg6RJH2Rme2qQ5PQE2EzQNRvPpybhtCiSuXjKGFqL1Z55toVrYuGom2hx9bF4wfAMqMQCdJ6A2gVzhif6pg",
  "key18": "4Kr53WdzppabNME282dMK82rzuJSb4ZMVZV7zbC7XyLB9yADPdXJG9N1M5D2qZGT6QYAWEktPrDzeZT2QsNyqLWD",
  "key19": "4kQmATDbMz7Q9okuN1tEkiUf3zWvwW1r1jmMvSQCjaiWKRdSwyK96LtVuaqRJD9PADeiQdUAT34ykjqYbtB2V4tK",
  "key20": "3fCfT2e5B6R4UihCAQpJ9RqfibvionxBTkUp631hMu61Qfau9zwgq7ipsXUMFGU5gJGQzJVFK3xATukAHy5VoeBK",
  "key21": "4cTjeH1po4MhhVy6YMmZegeLDNiEb7HEgWx8kownTK5ZGXHrgT3igigf55L7NrgqkJtHMSehmT3QAZMCR1jrDD4U",
  "key22": "5QcUcNuXtgDAPfmaS8NmAsByvTRgSuoM78o22GqJeA5sUFnHfRXoyYUCPtq8P5DGyZcdi3H6GxA4fSU2cUBbWpf8",
  "key23": "3UMxCtioiSHZY9r6dSMn8GZa6uhCnLe4zsrHJ9EFKLdSjFGJTv2XYceFNeyJu8WSbJ8mucHq1oQGDwQyqt3ArJYf",
  "key24": "LPAtyqwnxW4mypRmXpXqu4ZBDFThxjm7qR142kh2NPtiS4EKmeh55kFDJ35ZPoRmCMxdXgU98tZ6pvdjvYvBaP8",
  "key25": "2BxrikAM9xUuMUpwLGfu9vXKFB2cE2ZbSZkthqwPTo4MSCK7BKwjjnwXtijsABigvxLsfbPL2ftKESQ2pLDGsTBC",
  "key26": "5URuSEATu5ca1hCiGQ5PMriUxZB1NmLQK5cewArwVMo4Ap2daW74mo9KFq6ryfSh7Cso2F2E9ebrJBdEcG5kQxsJ",
  "key27": "56BorpbZ654rhYG3xjvDf6VbEXqYrzgeaqvvQtKRnoJnWovk1teKoLr5DnxQJKxCJd3otygC9rzHqhpHAF4vkzgE",
  "key28": "3pkU5wgRVDqvZ6c849YjLgbyis2B9QF1qdGrwpTGcB5gPy5LHxQdgxLGqzxJgTjLNmi7Qn6Hwpyuqu7e1UKHJMbJ",
  "key29": "3xtYhvSEH8rK4rSdC6WT6TRWkkwaGQ2s5RSiGFN5sRebry55R38v1fGgeRfz3xUK3VSn76xVMskbC9xUz7UkxLEf"
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
