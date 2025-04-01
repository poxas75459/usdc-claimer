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
    "3gkcxXofxEp43PjXMXoqhZCZQCXTxfZLhBVdSDbPSfQtqXdjkAQreVDCovdpkmWAmSXoPdpMDspYthnXeK9dqdcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VoYhBxaZtuXGvaxjpYNFkjShEX9ELMXZoHgLtPmMNWbRgnc9gqcHDafu3hZLqeBQgdBdWAQL1VPBY6i1bkhsdbM",
  "key1": "mxLm2EdbnhxesudL22fegkei6B5v2DQfmAqFtwbcNVbdV1EnGo1BwsWKfbxFY3stZoFDkwpjjSsMrRNKvVsS1jj",
  "key2": "3rSitBZoLhaHBxHyRkWRVmCB864MK5f4XuaoxZ14JrdhbiWZHjUtiStBoKDqvMRymkW5JJBJ3RWEWBgaziP8vpxH",
  "key3": "5o9ovUSXkkkbBtFKjbN3wF8x44SzKqY7i5gBkzNV6RDw7VgbH35PUt1sHjV4ufYKF8npSps5hTbUE97qxW6uu2AU",
  "key4": "3wTdDuCDo919R41VceSkkuwpL82f2PW1G9c2ozen6jouYBhoRMjvWpSCZju5YJ9z2qEyXekMrom8eMoTovhx5n5Y",
  "key5": "5gCiGCccymR2uWpnoxF7dqc11yA5XrTZeXgUxUgE9kVHSLP77gd2DP63LKLrb493Nmuw8dbbu743Ud9Vqr6MQN5j",
  "key6": "3ApqbVbunCJRzXB1AQF52J4JvLHqX1DuGJk43nU2T4VXEbujUjAQEueW5WsgrnAwGWCyGT9W9pMjcDuHbqNZAHvm",
  "key7": "39nq8k3X9W2ZEhos8EuisZdvEQn5WcN2opbFJc1G3YPYbfMPN5RL8FdrrECzHD5iEkuduvsFUCGK5DxwdnSTmdFM",
  "key8": "3MvN24Aznz5WFAgkqTGUJXGKNxLUMycM3qieXiUTHF4Vh2CN9Z1FK4DER1fcTYM3kNmfvQFCZ8DP8ybtVhDpHJ2u",
  "key9": "Vjn5YqB5Myz2P6VXb56QSiMzCtEszU8ycvq8tD9WvNbu9NnWJDFnXtyv3Td5zN8L7djhTTQw5mvR6JVNnPk5wSF",
  "key10": "3nqNajK5yrhJbvP6bzXNJ3J7oB9aJ2WkZXUBVJydpm4qx9FPTPQAgWF9kN4P94ncQ2xQDJiwNbVx64Ly5TfChn9W",
  "key11": "2o8kdqtu4NSb6DSAkHnrE19dgzj6xVhaASSWs5y9HYLfs9nPE8cLmVpfh48kRvKyGtUDXr1hLFfM7nZp4GvfvszG",
  "key12": "JqJeZfdAxhrTLuk3xkfDnaoYSFdwXbZ1aBAZg5N9aMPZAYGVL8guTYUNm1VnojxPaaPVqrgv58iYJuLz7cj36Dj",
  "key13": "2851wnFtSFZWAuFRTz3WsFvQr7fPdqhaetR3Es8QrqHhjmenenkrtBG7iCRDg9himEoGn2s9wPyrWttk8NN6eAhg",
  "key14": "56yDxJG34aFabLBJdA2RSczX6WSMvSrGA76jVr7wQyNWtQbSskrtRty329FTDyGbWPR8jnpj8FZR8XmLLqNZH71R",
  "key15": "2kjFCPepRsWtPZyqZc7b3JRYam27Nc6o9Vax6ZomdBvuYmiH6tcjLfbDVkdC698nwF9T8BYcqohnvFn4vMFc24no",
  "key16": "rgYiFvoU6F5Vd1YmgmxoWhe8draQTxFuzpCiptcc88TSBXBxSdBwe5czb4Nr2pByPruAFNFLxKrZCqKWJ26ra1b",
  "key17": "3Ek6MGLMCg7TmX6s6qMSf9aLNTHhfSb7FCLFLUWLqyBmrSfe5NxwRrNvYgDn1gHqEqUqwCq1a1x55Gy9PVEtWXx5",
  "key18": "4tT87G4HjKk4tGsFobMDTRkEiXPZ8YCMbgPtK9VDErtJ5ExDmqkGLuiPFqQ7bdbfs5UGdJbA5PgZKXuB9ApLVSBg",
  "key19": "4mgLqH1rsBJRWfm9gHTg6p66h4nSmCWkEumrzV88hK7N5yhqrxhXhAzsiyG1j4EkHwHcCNgYgRiFy1sq1sLTf48g",
  "key20": "4AuqMGqKudF1u5fCq99PA4JTHX5ZTgXBo4ZTyxzCsgpZgUQQVgJDb8QoALMBAsv5u5FycMscbQAbyztovSboMsQK",
  "key21": "3Bcm5WiwiMg2sghm21dzHVWc9Ui7uxXoPZ8dUuBqjzB267pro51syFk4zbDxBFyG7SjJewW779oMPErigLGN63bZ",
  "key22": "2zqNjf111vDgYEYaVNGZLHCanQz5YuJEnDaHSpfJL9HQX6ar9RWVgXDDPCRWKaVZNcyrqn95waR3QAxeYVFX6LWf",
  "key23": "5SKqJQpv9DJQfhaqdd5yMYKaqRuzLu79sdPp2umvYA3ZYhf1hwTZ3ad9XuCqL4gsxjEqZda7uUWZpky58GcC9rg1",
  "key24": "rtk2aF3AQSvjqESHFyJi6FA7XggtV6Frh5mNuxDNLju4U6vshBrPXiuzXgbL8S5768uiDzt9eCxqKLRQmiXgTHx",
  "key25": "3MR8UgZtXtmwigfFDTBNrtsbBDce1vzLDpjm5Md8ACg2KH92nYfSB9kZdN5GfLtr9xbUACqNRtEuJJN3ouijpVPD",
  "key26": "3QcmNA9zFoZNr2VfUHJfrzGniNNjpY1KEVJH9FXcNwnRgzn5zBeiypW1yHvyukHb418C9mfxNi1qVH4bcY2Sr8ew",
  "key27": "29DtBysBn17pN3gtzsLZC4QK8PjdTzS4f1cc2EBKQjkKpuAiWw7EAVdaxL3fFRmsp3v2LsQ6udxZz1ENzsdKL3hK",
  "key28": "F1u3Q5S63FBEv92xpfgGAgitaRsvUS7tnvJwJWtMYQ3EB5nyYYe9UgQv1mSD579xwUvFwtyeaJPE8DJ99gvowr1",
  "key29": "65FCcVZxoWgYo2PF9CbfS3mcU1w85w2ghznumxSBrXJkfdJCrtoFufbn1P4sNESDcoQHmaGDStQoXz16gL18LfQR",
  "key30": "43NJpFbz7dNGdr32AUu7Da9RB527bwfUxTU9gAD9ahAGZvz4PqKgpqTgbm1QcunvTAXTM1ar25jxma8qM2GjaZ7p"
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
