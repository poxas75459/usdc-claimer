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
    "2HJ9XSLrEUovqet6wEk8es6wA12EQUUjPeeGyVGAph3svL1f79z7fVGNfr4uqHPj99mm5ynoDvSJA7evZeLKoFi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33j4XimDRPycYs1RYpFMYziWZZJS8DnMnCo7FF1avsdNfhK6F8LdR8GNyoWd9ickLtMB5npTKyqxuoGGg961ehsv",
  "key1": "34UqoCoyGJu1354H6z7kKBDtvmfh1dAgNpXAf4Dcwz8U3JKTrVMpg8EQK5SFqzLVuinmRqQB7YEVxfAreuRug8LV",
  "key2": "57tMnonLiwT5htbuXdSyLopjvULrMhGUop8WDbspr6396oNd7TMsLxUD166Unek7LKyujToTjsERJ3REr9TBYKJf",
  "key3": "36oZ2cxp1i5fHfc9U8VRfSLJCj6zGo4JpxbFThAgpt5Zza77xZk8BwAFxouuwRAKYccU27cEhCfAbtNfD7jTeeX4",
  "key4": "KfagNLEgmL3ggxZUgrj27PBacgkg7YdbTXub9FutUXLqJKES5sJVRcFiE3Gp5XmfkdpWVRnVCYm83wnujzJHFwH",
  "key5": "3UY8S6W1G5povYd7NcrXBCFeAknxbmf5jvcUbG11Nxn3954mBc3aJBz9risYMBcHtA3YmpwDGimS2oa7uzCHNr5f",
  "key6": "3qScToPECARA5VnCmwd4ERm6iqAovyAjJvFYfK51WDHNUfwSNGdBrmiWYoQMYQHSGwgXz8ZBtSQJ2ZzrURasM1Mx",
  "key7": "wbKKpqe1c5g8hfpTjzwkUgi8eGY8kvSDEAK9D95jBeo9ccyQoybDDru3Nf9dyepisnF7hfaDRez9LgSYjETaHMn",
  "key8": "es51omFKyG5sWvuuyTZwZiBLPbSczcBLciYn2vYHrNPrDdXqf4qHFfa1RjkjoNQNkj1JfuwARLvyoRvUU9vRVf1",
  "key9": "2D1hXjQyZXW47fx1n9g6G9eqhJbVQd5DBnxhQkjfB8i7HnzpjoxGHWq2Gtjh1hpCMQRhB4xmQxrF7AwqDWfppTRc",
  "key10": "afak7j8c5FsHZvQJU5sZpWLn7pPN1VocZSk7UYm6SgYk4neGAM26Q6wxgjJXcrJ5DKNSHwXGoQUtH6EfgCsN948",
  "key11": "4eyyjbDvGR92rj2WYEKRakUGVcP9yqrTKTqjTvVr7viR3c6dDw6cHgMWAUdquAXSZZfKGcJky99BK3Tt9jpsd9Ls",
  "key12": "4jdGzy2yJsFCwEKrb2PHtH8wZsudvwo12NNF7q9gQ38hqTnTKNkqX6Kic2u6ZKdeDWYCHCJZMoRvUnvRNrNGawwD",
  "key13": "55nE95j8PSFw9VvAa2PHjkZ9RtbApWMuLcpQmMcNQSGhtXncVLLDry37bzeKaG2Hw6hkrKtSbFSM8tTwkjEabeqx",
  "key14": "4yFqzfvKAU81gHADh4tvriAtD6ZDMbbXapVSYqxd64qfaXA8bktXr6YBXCMrhfd4zCxxWQbbnUBrSXaXVn64TVBV",
  "key15": "2WuJ7mhfgd43z2EAKqsC5bx15Mco3i6CwrgVr4wDt9r6j3kxpjnUmkpPfWmCx9Vqnju8uaRAxQkCDsdSsuSkZ3WQ",
  "key16": "2jdissRwMhbnJeyW4a9VEREPr5J7Yz8ZjGg73aBFqgHaG1Yc7QdG1iQUjHV6MR4UXyA6nKrdnbWq66JQbzhpT1c8",
  "key17": "34nvQg44wAiMpCRCR3vRYxEYKydaNEJmE7SKFXoV1UvNVtNex5jZUAxtzsteE7puSMwQ5KuZxtSmQU76Nc189PBU",
  "key18": "2aqeCzLB9ayL6kKhGpXvkCeLYYZ9QVJdfzXxQnGJeNdmjJ4HmXRussE6ThaDErX7aFd2wzVntcKC3FWqJLYQwmN2",
  "key19": "3CiFBhCDGzzmg7ccDj6hA9jc2e3GhrsuNUq1KXJpmMRUUP3DN5iXjqHEMZQ8J8iWf9MvgEiFG63RoKhpq4vGWH13",
  "key20": "2qytK7KN8DnS44pAZqHac3S2mCDTS6MwRN4zBWnx2Lk8knsXX3DfvVqyCAmhbPCrHJFXqzbYqLph23MsSzCLN9pt",
  "key21": "2xtFFAjzqpFwU1neWo6tUg5JhoXtsHMrwk1RsQnDNHqhouoCKiuhLhFHPsqni4nAyjRSb3ZyZykQdMBGJwfTMG9w",
  "key22": "3zVygKWZFD97m4VZWimGUTMn572EkfpJcrj81yHsrp1RwCF6cyL7y7FZqAhiUtZhrzm58iXrb7vJz4HpZA4wPdAv",
  "key23": "5ZUUuEtbYvdoYsAynRnRktWMfCE7nH3iquqpd7gYoWSBeCHAxuF7CvXEcvQrceqgzDgRdvj3ruzXEd6T8EC4m7hi",
  "key24": "41XzCxTMvQ26ZPxyML4XX5qLaMcFpEtJhR2sXhAZmeKgxCuo5VuDhSmcnsnd6aUdCjvN1YNA7UE7oxs5Xg6HUDvd",
  "key25": "5LLQauxqHeuwxMXWZSv5WF2YZeKJ2xNDK825A4QFWUNEy2VjzQihKSAQzg4DjoVYZqpr137oEnFD2oqoA9KKdXgR"
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
