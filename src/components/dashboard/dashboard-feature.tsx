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
    "3S1hLhznYLsWwFvLKqmXeMHBvJTFVh7s1bwXjcvs7hZ2mhQXvtkumaXzBQayBU8LsuNFZCZhHcYjdd4XnhJV6Jmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D56zbphMCAVRq5ZrLWs9odwTVWrBU84FB46wqbhHhFAak35ivX1myBNJWWLCXaQ3JTJATjJVzmZZoUmGhK27vei",
  "key1": "pWfkUjowT3SdVZKA8HiGKoFySDEtQbdbYaE2gYq7WXrApLPEJxF7ETCqmTL8SvkiT78Eu5AXk6Xa7SJgwjyKaiV",
  "key2": "451oWq253MQSTDhPdoNusbRPAztDd9QUkpVsTSHCm9GQut4AQzzWqrsztBtNpcemR83vPSyFK7AgEpkVLA8Rj4fi",
  "key3": "3XDSH8ubZyjhLbMbCytJ5XcdZD91JwrHYAgSJNWUUaDchGURoB9pX25dWVwA52skWVys2itNsV4Uv8tiuzTiN1Jx",
  "key4": "2Ch2VTmQFdCCoZFXQhiR6dM2QvUsqyhXEVfRM5NBE4rKzaqzVNdjeNBycY4usnB9FmcsdpELDwdumUuc1SQVByV",
  "key5": "2S6VhPiZ1cZVMTnkRaJM9ho2mqF31VDSEqaGjT2AozBNd18SoHXeqv991EiJgzJd62fpStD8JquuJ1LmyACfyms2",
  "key6": "3bf6pySC4fgojxD46BYQaf9xafx6xkrAcekmRLUsxYGaZXio5yCKRmzDsjGPqz8qLLQUHEotEhGeUpemNgGYjLh7",
  "key7": "3pxqCmeJC4EvSKEnMaEtddTMevhQ8xhaW4WDDawxcNpn5r18xtnBb8jkTVFhgaBJWAAm4MfemRzaQU9eUoj3yEJN",
  "key8": "2jxEFSjEGZ25V4dnNy3e36tpk3v9JM1NSMgZHyCAX2TYyEkB8kgewZ7R4JX8grj12vzpXRjzzsDGUNyKj4uohAX1",
  "key9": "5DBJS3DKbJ3HrKe3nGfXyjSo6Qffjk7NC9bD6Y51EpTc4Sq2wYY7CgAe5Kwcgz2vHkYWtNpKc5KoRsRtGxERXaaE",
  "key10": "3XYFmEjXciWYdZ2AVewrYBBxfwSB3T9edrqmziJxeTdhbi27bsUgKhGJMS8xcHXCxFwb7NcTkJDZZMUUJToFB54g",
  "key11": "3cNN7gKoVD3bVUwiJEtKRJnFnXeiP8rk6taXCr3vbLZdppuPZgY1sE9zHDKkqmM4ZMnL9H7UyUMZ56r5FoVF6eRD",
  "key12": "5QyhmEdUhNGGigwnnY8gasgrvWMXqHZ8QvFq9MHbpUFKP8DbPAm9bB2ZqfFa2kKaB3DUZ8tZAGPjqASYXzENVvPe",
  "key13": "5L7avxnKUYLdeFsZNyNa7pBizpQaeATP7nU31FCJkeke6F54iGt49fHHNnavkJYeeHS8Tc6kPDcZY9feEVHbE5dc",
  "key14": "hMtJEFkdo8mm3Ew9gcfSeZnoFsCiKaRyy6hdPtBU7aELTzJKemiKBMGPkrA3KCK1ZQiivuyh8diYEiYyjBqrNnw",
  "key15": "4D9KmGo6PeWagVpH4JKMhkcTa9teDBtW7tuSAsghsK982tAge6WfF6ob7wReYasankba9Uogd8notYH3ke4uHYGB",
  "key16": "63LA1a7Zh963paJHa5FCkHGKx9WnSD6pBKKXtiw1tBNA3YFmXJcsZ3LjB6k6pkaJTqZ1ecf2MjfQxBrSgMuKz46E",
  "key17": "2C4hkP7rdyy3wBEroKVbghctUPA7sp45FisRxqgcYg8dPDw4TdkWj2rWZgSRHxCgFjwZJc3g3LwyaRa2mizLvfqa",
  "key18": "59mfWeMqMWsk3ZajnoYcFuSA5aUFzeSMLm9PxaifJzaHJ3Pi7EQfPaqvRHKZDkGCzkMesPkohaVV1nVRzY9HJ5Ph",
  "key19": "35W6hXrJVqmhKHacvaYwzKeSsRYd2dufBcb7ef7M7E3WPKudTeUvnCaZ7fHdEcVBHw5A4GqtRa4XYQ16VLdrr3ta",
  "key20": "5Qtc9SbxjrDTR2FW64EcVrAanrgEXyLWp57D9kiomRVhxzPW2tMCX82B8SewgHhBsj4hDmN1FUrvEVF4wVYb9u9A",
  "key21": "2vxqzMTugRM5i4vihpsUN51fge9Cx8PACYHgPJoFfDQa9Za6uBKtbfTNabV3Qtpsn4SNFTTULHK2b7QG2zatD6oV",
  "key22": "5tZVNAbkzPSr1328hB3FiXRjiKHSMsyS5CZnhQAuuu2p5kj7QaJnK8nL1UFWug3KKinhAHuxEtrXKNBNqLC18ot2",
  "key23": "5fvzGrZ9yo51ze9zK74gFhzqXfETEZutx98dJZ53ATrGhooY9WwQN3kDdJzv8QJZUmynxXpxgmZYrFe9uJWMYgtP",
  "key24": "43GepP8xTQzufpA7Gv2uRLECdu4gUihb5nCXMHLPAVir2SSaeDqh6Pj1mhH6KFAEKpmx48CWeAv85etbNahsv3Tf",
  "key25": "2boeyEaHNnR15qMGRyVLh9ipZ8tDZg5ph5uYhK18ijB5zJH9p5YfCbsAL1RepveMjeChBhDT9q8U2hmrgWivNJMk",
  "key26": "4rKCuKKhr8xAjUtVFSkRgKZU3ewRvvHYj2AjQWRQRRoSSugHdybE6YHzLTRVWvjvG1J3qLAQZqkVaL7AKSCqrmQ5",
  "key27": "5X9ui2aQrkCMF3nN7Y52gRRLXJqXQeTQaiGth1aY8SQhbpSyFmRyFse65prsvVnJmgTEPhUFWGnAQF6Bz4PXDsFj",
  "key28": "25qrsZ9fckZ2esZpr2dNefi6rdvsVqfxeEZ7EuHsxKr6MMv6AeQW9eeVvvMXfB5z2hsNi9Lep5wag5sdEYfqCQBN"
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
