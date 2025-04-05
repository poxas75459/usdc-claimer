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
    "J3C2FMPirbzxnryB4zqWQX34Uup5j2rPjRNh933QM65sak4Pfb9xhC3He9dZHYgMXvdBCgYgA3WKEsq3v9kDYYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgp3KqB5T8934i3um5A3BdNrTC5RStGX5tSkngMmEM632FYY4oVKkcstNTzSqdreTRxxubXA5AaxaqFNeCq3dLH",
  "key1": "mmMtMGJr7WksnjGMFYXeCsHLnS9MTRNb7WP4WLcFXrGoLQVdRcJmJk8Z4jqVSwdgod66WQwDbHxZV9pxogx6Go2",
  "key2": "4oajKWtex7qVp5iTcKtrj44uXLFKnd5Ms6VSkHzHZK4Q6rLbRzHsiaZCp3Fte2Nb3K6uSqgfTRGxasM1S5NJiV4K",
  "key3": "5C6WJqrj7Z4MBeFqaYFJoMjbELawcBtqyyTGMfrHdNMvDD1tSByPvLp9RnCJH59VU1MZqT5MdyHtur41FdstbZRp",
  "key4": "4nPFrEREDWWPZQ4w3xzp8RntqYAL1hLE6rhcHRzX9hhzYBmLKh9vhxHn5VDLj8aT4W6ezX2uTxSdMCCdqSSfeKPy",
  "key5": "jnPnMw1nSwjhfe2emwPLKChWoe6itSSD58LU8fCGyFAqYAoUNFaMBDsh5xxVeSvfArVjwCRbWXWMzo2bVcwodoK",
  "key6": "3fUoj9RqnT1XNxS9fVicjnTfosdb8khYhEj2Aqt5Zor8GPMcc33azTAbaWyfkZFJcoQw9zrXPts4Dyn27AoKZ7Dn",
  "key7": "5jrkAxryd4bCpSwg6BTZqHq7Kv6iNZEQo7AB6q5mmxutLBmBa7tUXKtCvFKQ6gxQbZnMfzLvMS2nUfpSQMRVM51g",
  "key8": "2HEQAFadXNLiZSPJTcDF73gZqmD5Jt7Ltiq21Z8iCCzjTpy6HiSWdT6R18kRvmKcYgRNKzXwGteCmLWMjFipE4pm",
  "key9": "2RDJh5SMkDwrZyiw88f7Q4T5FBspmQPspepcUcBYkKEx1uoEY5GpeFgcnPWkwg8ntU2cQAH7siEnKve2m1t4LqGh",
  "key10": "5DdtiXSWmyJNRibKi8Vf8JjCP61MxufrqYNXt2mtegu4zBrFAr2v2D1A7zQ2V4TqJhwGMup6vyMjnoR35WpuakVg",
  "key11": "3j2rArywFL89kKJrd2KYMvAgQYLbpHRcK9cvtv7VhRf5eiYxUX55Y87hkPv7YvTix3g2rbRNWT1dJChhUUpzmXcC",
  "key12": "ZB1PgtGgmWY6cxYWzAAXgTd3MyJEqBVEoKZVzjE5vCL4NvM7NPb7gFWkpkiehYDL3wy3yQXBTk5aZ7yMcukH31s",
  "key13": "65QmLSdMXp6UfrFyMJyet2YYBkN5vNaVjunobBoLcS9cePXbAt3WNFqHeW5P8qTwSJywBehV5DPXgmLR7UWNvfYo",
  "key14": "4vR6AkRVppD4fUHxhR37djRMe1avaNgdVbbRmPJDsUuQ9CsXezQFFtQ3eXbGJCDjZrrFKynzn4tYoiLGsCtAob8v",
  "key15": "6Pdzhryi6nVjijaKcFdwi75bddCQ5tFxHpP2EHdRoKc5nscJrWiZxMsRdGoNRqakbrCMCTBTQcScdTKk63futPH",
  "key16": "3A19tXFJewWFqw78tZRaZi49yto5pWLu6KGHe2wRST71U1qYsS5fGgah2WjwTAhCvVn7iYkhFpBKQXzzcyY3Rkxu",
  "key17": "545ehDqCc4WvcWCz7QupASLM23gs2fFDXsFKCJXHYAU5QaX8ausarGkXbCNVvzqZTgJmg5sVWGSjqkJaHityE2tF",
  "key18": "2RPjGxwqaCNUK3r8k1kDcDKnJM3My7KzUNXitUydo3H7CNDQ5YDV3jFSxahnqoKEoMRCLGF1pwwELthSUTeqQUTv",
  "key19": "61iy62hpxk5k8LCvkrMnXoEqquTKPmQDhJUWC9gbQFpbhbGS1qF6Ra2eMXtsnQGVxb8QEWQ6SAmz4oy3mcSo3RcT",
  "key20": "616EFM8DVvMh8MgmGpzcB8TQiYJfd2QYcGSUWKFMLdvwZEniMGEFRjMYb1xvNVfeXE9f2EZs7GvhSTwjwTh1jg2m",
  "key21": "3cSfpHHXReqBatzBapADV7pHTD5T2PnjdNy47yqkZSdcpcobSNR2GB2X3viANb9od9hECJGYtupqHp8XrW1Chmwi",
  "key22": "4NXNq2SetjntCofUhYQjuRuraSRAQzQXn15d3wGLkxnNKgTy5g9arMQVymZmg3bodvFJN9aZfP7ZSw15gomdm4KD",
  "key23": "AWgzRQeDBNCSXVKRpQr1n4LVwoifuj2zPPE2LA9M1UgNh47i2gvxyN8LAZeSuPDtj4PWFXJDuYfsTBwdeMk4c9M",
  "key24": "2PNNpCoMqJzxtnTpgnZL9NYdZj86jPe5cduoiorU9apxsX1sKoomZoemveZCGwwfGUaGFXo1ZVtPeQJ7TF8tWcyb",
  "key25": "5qBaFAU598JTsnn3u71avzAoeTVVANY9TUp8sBP16rFX4gxzjAfyiqEhvKwqp6JM49uCNYFxUHW8SvPb3wJDDCMF",
  "key26": "2AzawcStsuRNYrAXVoevvLntHowYqGV4b4KC1JxVD352e8EUusQ5TmAhGzAh9VE3zoGLVJtMEK2ucGEpteV1j97D"
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
