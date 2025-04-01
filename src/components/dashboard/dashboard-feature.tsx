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
    "4TQzZZk3KmF541gAKowCj9mG6q3eG6iuAEdzeKGai9Cy7c2s1nsBkcSWDyUs5kShLoF2Gc9LEbTXptJZqZpQM6Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379xBHTCfxVcSd2tJfEDbfERTn16ffYQ6kAJnWhCQReYLFXxkAi11K8PEaxxJPJnY8EGANkMwHubqH7CH1smMe3S",
  "key1": "3YcG7MKR5DwyruuCCvMjn8bw5BsMGChVXQShKu5umkFMBVeV3P6tk6ivU4dCMCnHbb8qM5cVVniGZsKk59RQc3j8",
  "key2": "4aqmiFaVqneiTeb8b76qwTUaFwtoA6Rp4DwTaK4ERYccBvAxpLjwnrgNWpYGRHYX3iJDKojKrE2nFWFapEk7wVz8",
  "key3": "4opzRU8mwM7PP4R93qecsKXcTExh3ZNEuZnHp8YefkdpSeTnBBfc52FemxYQCcKFHRBwZpthYWnR9t4qd5cyE24v",
  "key4": "3EL5yk7w6rWeyGcndefXExFik6HdP6yJm4WsCQDvBZVvn1eAukg2WVKZm1YBMp1CNKokguFJaHyZfcGKPxjJRPkD",
  "key5": "2oDtVEedqELMVa266JZ1UuvTBhkiQfb4j1Ewd63WD38wieHQdbkbBeTp9MRoxo5vsGfheof8hhfpm2sEN1YpvhWK",
  "key6": "2KHL1ZwZCZf1r5J3McoEGwfdJgU4YovftuKGvXfUg7mxu7L7YhaJhJvhaXnh5m9BmKLcwE5J5wCgGa9A8GewwUeV",
  "key7": "eabneP3p27fKAnuQvnVLpqyuWc18xoFqArywsNCxm8QpzQfxYjAJGDyYGZ1oZGbv6bi9Q34zXqLiTL9oHfe2C53",
  "key8": "unL4QtFrag5XoVoJdYtgYsP7hAdGWbtqJphu4EJZGtmuMYQFZpaq8eF9dFeHAxULFJZ114yohpSxKFrbMHNiRzx",
  "key9": "qYqG8S9bJDHJP38Ux1k2aj49Lf5yZopFxs4EjqsZSfuwAt9pCHThr9mrfUAR4PLYFWchJ12mobQVMbbaVgqygf2",
  "key10": "3iDDRzyA1iy6A3b3KYiNhXsjYzN2hBsH4jT9nkEiz1JrPyjAnaqnFTcteHepNHx6RztrJWiPkBfMnD4k3LsEoHXh",
  "key11": "5kh5sLj7Nmh3dwkf56oyUbe27YARadd1X8tqeNo2c8GJoj9yiNxdr4caPotxspbqFb99mMbNPLWMVE6UwmcqpoWi",
  "key12": "34i19fPSJKwhLaQcTpFrsNfeqAJqdcejvh6RPyHiVq48tEMw4QLevqUsvJEwphE66H8RAv1De8rDpvumBmTsszsc",
  "key13": "5h24oYYJQhxjsfzg63SFgrPCYTkqBmEcdoNzovie3v1facYWmX7Wa4ReB1VCkYdAAnQwCbjixgvbJqWVa12v6s5q",
  "key14": "2kndx9Ai8vJ6ZZKzqciJdKjcHCKZGQBcCSMQAtnxj7LpnAzXjmDAhWLVCzy6HbDtJU8QVbTwjtmry5hPLS58b2Vn",
  "key15": "2e56jrEYksrGC8pjeKmT2bZbt7FKzgV9gVsApnAcVxe2t3TzE4JwjjJkLPwpvc6yRcbpbw5ZNEFn5qRp4PiWGmJg",
  "key16": "5GhUV5C3aiiZfnPeMPJFXemhfvV1ktPbdeYrKWepn7T7DwmEbm8jTMnhEoEhSNP4V5RohqaFXQJbbf4RDKB5uD15",
  "key17": "4W1tTtEs4Z1PuPukD1S49EwMXYDY4cnY3PPS4uohQynAHvcs3zHHh1NHxWupySpjDYvptbypmrpMT7NqdfVahynV",
  "key18": "5DuCsujJmNUUMEZCapfTMZTVx9g46JksZeNvBnKBuZYXyPWirmjFDGQsLF9LvQ13sFATunnUoYNjkEnKNErbg9jv",
  "key19": "2yqfVvkQe4Yhwq3unm9ujaw4vFKej3NbAPiA7y3WxZiC5MEkuxdkk1jYkXd1aQvrwHVmzJaLJLp5z63QdnBXSWLR",
  "key20": "2taXc2AwnHqaSUTu5Coa9DWimVSxNqMuYigxFCTd185wKHGVQujRcLvHX9waEsWAetPSHkBqVKpMyA8frBmxvnxM",
  "key21": "q8f8TZrXERXZdRF9aku3V4FFWyyuERebJLqQ6mguQv6GgUGtUFDYCrPzymv3uY95C5JKVxqM1qBS3SiNZJvGpRf",
  "key22": "2FY5JmdZzSkRe5uMWDFSGMeKon1pTCkyMx2y5JGYnu7Y5J7xD7mFPnTqohMRD3aNDMLETrgdPTgfYzNuttySpZkt",
  "key23": "22DcQ2LDJPTwQb3xPY9mFxAHmyk5fCRodaNEgyDR8MwAVPi3MMuRqF985FNvSzruzzD4bvhhuQvTEvDFx7DmgE1R",
  "key24": "2GLTQTE4aFRwYcNMhTiCCuHmifaQzLwecnCUnVCALeJqqVbYWjw7WRR1f8DMiTqQZ5USzJsGG1GPEgSGsJSAg5qV",
  "key25": "vHezbuiMyRgQaXQyAeAK7XaXTtAe7zyDD1kqqRgnbwAsgQxtmfLNsarnYzb64kWzL2ktA4qNWhtPkFq24EUFXrA",
  "key26": "RHGLLrfHfZ197g9jA2pMSUfsyziWNwnDNVMMQKwW2Q1jkYKwrTM24h8Bi1Ahe9FFqbrenjNairzzNAijSwURhms",
  "key27": "2eoL4EJgk2Tr5FFgGvv4zhxFWBsv6zeHd1yhu9uiDobLPy4Jbd6wsrnJVDn3j1kvy1hFnk3rqKFaxYN9ufRAyH8F"
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
