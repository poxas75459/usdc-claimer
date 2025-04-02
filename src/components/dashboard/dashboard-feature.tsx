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
    "3t6GBcxWNsKjFyrZ14s6intZyGc1nMF148gJLbTRFpDygmCRdGWjT38r451yM2mrw1DTykH4kpxRcak8jfnoyqub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RVqYyiDEJuSoHwLsTar1sZtVYnpe3KFRqrUhXZnEjHPZ2A3hxjhSJe2qwRQe8hVfPeepcYLRHPt14CV3sDCUUt",
  "key1": "5wJFmYD9yxqJvpYqaQBRin3S3tMTrXrxY74oR6W1JCdWusHhUEzwCmHahuyktpggFU8LM7YGbHGHEPGDjRJ6x6cx",
  "key2": "3JyRWV6bMYHMvG8mHqq7KVcbdkpekzbh51WEdudYVAPsjpVgLMmMdbEydP9oUb4SyDh9oehtisfvPQR6sggC4n8X",
  "key3": "2b2CWLpoAc7YPe8fCT45TeP7xNnvaVMnauYo5t8FzryinKSDeyX9rhMxSmD8wn6KW5bAV6Ny2kJULcX8eb34xYSB",
  "key4": "4inFQCny6FNhzQVmJvHn9DHaEmC7Mc2oJsmDF4CKsygGz9wFqDz152f6UK8bYwHY8akTqiwpt2yeDaRqRSTs3tcu",
  "key5": "q5sbeHXh3wQbbQVAyazUxpai665tXXiNK23BF9mVMtBHiWrGVg5sqweN8maiVy66xoEwN9K3VKZkhW6CecPB4hG",
  "key6": "5DeZmPfjZ3GncD71R4WUvRvF11MfUN7cL6SM7VncqDKJWPH7iGwfeUXPAvj1C4S4WhZe6hfNfiutbosJXD4N9QyU",
  "key7": "4k1Kbz3qoVkSnvbdfnw9GL2ceV3MRN8y1xqEBPUHrfDQCWLFnEUwPjdvhYq5XzcER5CX37WoeTAcAiWygUfSBsK5",
  "key8": "2WRTGBcimfdH6wao3wsWauMYfhKwdxD8kDnkJjPkiaXqXN6WPdP6rvBYqQbFPoZkGTRX2BETGwkDztvsXu3Dmrab",
  "key9": "2NNUfV4G588a9kGmQLF2j87WoVX2Ya1wAH3hpx7GfikHwXp5qsgRjHYjy5sV11Jk3mPXn4t8JemYtFVCDac5ppoF",
  "key10": "4rcgNdutbXaqpY8eW21rVqYkJK6Hev2MXd98tqwwy7LSAb3Nep2rYmr9SJe99E9k7ckzGoYjN7DWAmW1PrXyY9px",
  "key11": "4Q5o5r3uudYaEHpCZth9tz7y8WAqxYR8BargK6HdinKikgAitQ9LojgYYEAJcs53goWRtvFVMoKkf8x6bu7Ftte4",
  "key12": "5c9c161WqHSD13pQudkcfi7Xc9n2otgZPM22E1edpYu4YvUs2VnkNRG1KRH9KMBRywJsrR5dS8zKqqJX4irzyD63",
  "key13": "3oZptj7UfGXPVMjWY9SGAD7ebpbfwh5Yd4E3ie5VSuzLJMzgsbtQbUi1J867iEPecR5nXW7BjpTSFo4Zso8PjnTa",
  "key14": "7Damwqw62LTdz1UYp3qc1LdenqUC7Yq4pTchWGVX9hJnHQyJZdCWW7n5uuJJrtPDnWmHstdFAFQaMJ3VzY4L6d5",
  "key15": "SKwzMcSVQN4Uh8N3kE1kQtvA2eQRk22S41L9VBjvyqbTAcZGHrG7VKB4VtZpzuGYvFQEWbvUfzh7Q3eV4sgfXvV",
  "key16": "4Ru6UbHUN6AkQXjm9gVwPWjLtzfHPLjWZBBTJL91e32T2RnpTVbvsBQxotBqPwbWyp2dFY77og4gD7tjwRkuBrt6",
  "key17": "5XsinzmWTf1XqZ7Z1ZkGoPyhSN73aELPvMkkovc8V93fS56xMJwT3yrTonjkudVE2NytonHvfioNKmYTsBpYu6qw",
  "key18": "5KdySCEYxKBq9fWtbMBxCbqzNXrQmUY8GafKrgGrXpn9AsyFjYnJCyJRUUCgTRGH96PTq8B625MCnJVbycbiwfrF",
  "key19": "2fB6N5TmDU7J92RCGPYZdK9P6ToQBi8ZzwyTxxt8kfzmJM4coYZh2X3xwDWTmNTzgwdPCB5LktgwQtUygnRF7SGn",
  "key20": "52f136dMnv1SQkNXcb4VnC4BYgBbKYJXvTL9AbdPYrkW5sGK7G1xf1mHPZ8qHWmLCon7zisrgmnBcuFTWBVqX7bq",
  "key21": "32qMhyfbK5EA64v3ACpikkRzRdd9FYuHfwrCPj2E3acvEgkFQwiLadznjjC2YWYaEqcJu5fnmhYqwDyx59Jg7gTL",
  "key22": "3r6ggMCbF921RLUJzFWsR9UVCV7CMj61UJL6GiJkyfTEr9q5FcJLV8ucxEFWnL4ZdC4bgipzxWbea4hTed2nYKCS",
  "key23": "3q8kVs3euLCnTFtZhnGGAF3t9hNtAbaJbxnJq3xpw7vJCARpvygnq37441DPXcfZHa5qt9aqPqdp11BJ5TjZe9kp",
  "key24": "3NPnTEamAD4hyXysxD2UJ49DWvbzjHYkwpAtM8d9kKDzb27vLkHxDGyDNcrV911ssRt4UjQCi3zPpsNkYjL7NMXP",
  "key25": "53Q4bPES4eXbZuC5QPQ9oXhe1zJo4TsaLK7m5Mu8joH28HDSXkCxd797Wrk1Wb2nocmXvGjWdGWm68xXhuVSCsxq",
  "key26": "3Ga9Q8HVhD7VhvrijtB5FWY9ya95mukW1zKeM7HLBmYELLg8psc4KJCoK9xV2NFyngnz1Es5oTK2BG17g7pi3afB"
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
