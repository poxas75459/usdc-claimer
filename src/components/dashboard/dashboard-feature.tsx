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
    "5TDhEtbWirF2MXKn9t92FdPy8BbiRLJw5WNmNDLvFz1mP5huSmGSMYoVMGXiB3g6nJ4pfLY7JZV6MC8QzCPCqHJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrpKjX8JvpShWA2VkcWm4kDRYMhtGUWYn6F5BdkbwmuSSzN5ptoTHRiyHakpLGqbsRbsFoBS24EXNBquqCmU2QX",
  "key1": "C9JEa2SQVPbF3ezE7cyjMs8NEkGfDnUhA2jTpuCjheHLWDLCw1BqBxJRFSZUYbH3jWrbAtkAGQSGXXghM5Zhqd8",
  "key2": "NYumN8jv9oXQgLtW36QUMaVBE6DyEEr5izFXy6iFayT2hbFF6wsjszTYdsCgL3QHtCwNB3Akpc4akqCz8aB51GA",
  "key3": "4yt1Aq1bucSxWKzGLxkkFKBtsdJwdaTbgYQRoLZdJBBaH63RZ7mVCf79h8DRvHN6rG3zsCH9E6D6HkS8MfS28szP",
  "key4": "4TgLDhrZqwZ3RYpP9HFdagYJd89AFr6HFb3vibtdK6Zpk7H7Jg3bh8BRERAdp6PjJDyVoSwTjzxJjexnnS48Z5Wf",
  "key5": "4n1d9Qfkfx1LxfqWHzSDzJk29hBGw332oCQMWaekEftUrqVU5NH49HUk35QBJDvuRjC1aWfK4dfn2fj1XHcxw2VX",
  "key6": "3Hgn1HqRg4Ju8aiQPR5bNZUMNXWgkCnknQHPUe51sCj4PbKtWbop9n6bZEDWfZwHjv9F4vTTTUBaK6htNx5XFYKt",
  "key7": "3WvrtKkP5kz265as7MNVU3VTTJTFpuhXAANQ8s5UyLFRGQ79FZQnMzuNhvUmxnCZ5PkdUCT7Azer2uy7xfg1xbEc",
  "key8": "37fkoMG2PGH7g4CMLUZiFiDaoRJnMjaimRbq9ha6Ui9LmfvKbsiwLtnN2N393ainfdG9ZUFYVfMTECta3YFYcqRn",
  "key9": "4LR3XhoUJgrQis18dPdMohUyCvLt9TAM36ZTUejDD2tAX2GVf1LAMhm1SwnC2vCUjEWVWQiXBvk4BBnvyBa3T1HU",
  "key10": "uxxyEnVNLw77qMptgyGWW28i8LpMuoHG5tkscji4Py8mNgYjND2qoCwZRu4TirjgBoUDYebURfdUwZpPVVKTCZg",
  "key11": "2SACJH1pgBP5enYDa56tiM2A8ao6VosmUXXewnRqMuuZuo9fozUipNpDBoNZGNQxM4zYJErDZQ5BeF8FnYc4DCU2",
  "key12": "5zQdxW26Z4YA1hXPP3zCezrhiErKvY4jkS9Y4PSxzcfaFJYq3Mwfs1WAQCwx3Z72LFkfKs1dEkCsuwbWf4yVVGjA",
  "key13": "2WzXvZbQ8ztThun4S2p69mG9xLA4yDKxmE3FS1j6fEtuGCCfN1p1gYynk42osFxm9cJp3Ypzi2274HBviwhP3d2V",
  "key14": "grm9bkoqwLeSJqpjaHBgQAuSrHyfQC7kEDYyPuzwWyUwPfHeGRLKwnnYMGQpwMf93UKnqPgah7PA6JtEKGzLWgE",
  "key15": "FSuhLgT9eor3mPouDDRDRQyRQAn5CREoEsTAf4qgcALg9PPVthKgvexxu3YtwYH7BRtMMw6qro1FQZEMJtaumMu",
  "key16": "5VrTcN2ubKf8xmi5CTXG2vsM6CWUvWfYvivhooojXHXQX4hpExq6ubYrXSt1jA37K7cde8r7AazGCLNVGDNMALLa",
  "key17": "2bNkV363YygMWYDRuHE71ymeqRmzwnvAncZ86cUMb21qnAZmST6CaKqYMyFLWcoLX6nakbRNn3rocymL2qEg8bZp",
  "key18": "2ecctQFsqeZj2i6dEHqKLt6bCt2SKQkkQ9oMjyF5FADRpNQ9RSCfD34NsBwfcDMMgpwYPni7oG8sKp8pySmhgcPD",
  "key19": "4KZ7qgEyaqZN39bodR3pbtBUAvtPjpWMaxF3KBRDRBUpz9d6TNjmgSFpGhebZAQK35RbacnYFWQC8K8sQ4fLbt6D",
  "key20": "3Sb9S7dGdMVUpmMXNqkUQ6ZVpevJbBTAQjsyD83xtDFagajynRVfA6B9aJjU5yqW52Em9aLm8daE3cdXwEozQq9V",
  "key21": "55GUofGYYLj4nxogaM5bGL3ZgMAMDXfGYcrwGCs56s5ZMZwjPoTWXrX9Si15kFagqUy2VJmE6J6hsYxc7ztUU48D",
  "key22": "1FQfYUAjoYkM1u4iNVros1gaRL135WNywCzEzLf2u14kwBdbtSTggxiUMqZRxVikyFXgwipUCYzrT42QQJqPWp1",
  "key23": "67N8ddZjA9F2XcHcapCp3wUKxEn5JEu6q9k1SfPfaDVJduJaT14y5yfcy3ijD9XJCfRLAzCG1hvWGutKonvrNVdt",
  "key24": "3ixAmBpyiKiz2zAUheQLmfM3WSWLTRmupQ36hgLLD9sKc2LWc9zXwKVQhWHGc3Nyz2USjENwvxj2SU9djuhy2Y4o",
  "key25": "56ePm4V7QTmP3u3FWLQcYEFGUzHmBZjX9KTJF4ELriHTXeTh1Lqv8ztxebjDKA6yUUFisbS7UqtuWd6XW4gWaMf7",
  "key26": "2Nhvv7v2hMy7ppguaxyNUov3ueXouRhLgs6byD7cxDMHkayqHe5k3MoQgRnZf2g21JRNuXeCGXGnjca1rhUudrNh",
  "key27": "5kHCLDoevDD57JYd9RP67ufof4E87B7ZFD7NFb7SxcePzffdgTRbhFrbXzd1rYBTcdZfhS9KtBBM6WQsZE1A7PTC",
  "key28": "3kirHJ3vNSdmP3BQSyfGqj7rVBAuqBoSok6cj8CWssoUfS1Pn3cMb4XAxwgW3kHnSoTj5pxrejJsZSCwcYxpxVHV"
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
