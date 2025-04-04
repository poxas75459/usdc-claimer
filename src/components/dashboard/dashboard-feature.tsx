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
    "2VgNf9aTWXAcNw8iwXSt7wWRTVDw1QfguFDEwTEjszCH5vBxjJdcEjQvpiYN6QPkVPrewZrCr9DpgvmPmFFNgNJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ex8Xuu11yS3yECqr6u6Ykam3vbfpdE1X5SXywQu7kks3zijW9pL2Rh9qA5EVpef4X39yn91dYEjKrwMGwXJQX6V",
  "key1": "4hu7VnFGCSuEdpecAKQdhiY8VQKXDHtRB9ACXCKdJ33ckNP1tRCCohDWszEpEdQCFuGP6EaBw2DYuPXT9Yrc6hQQ",
  "key2": "21iABCh8Tem2gW27sf9dXrfmmYk5M466br3SUb2D6G7Qohx9qFbV6GWfMfyio4YWmGBykwqjWAiYSLL5U4pk8nAw",
  "key3": "63H8eJ9i3Cy8zYLobp56UvJwwXH7WTTdDwwZifnniJzJpkiTMFnVK2zWV9MYvRzgtZpntnUkbTaN4E3pEjhDso1A",
  "key4": "3WoVvSq3EL79ktB4erw8vnqsKHGDpA6QvrC46SctKxcdgMznUxFF3AmwhUvbiXm2K8TNEUzvT5mJpP8pA8beiB7T",
  "key5": "54McUjgf6Y3k7rNbzv4CZqkHf91aKgEY98TVV2MSe4MAhZnn9DEEifMmpmXdRm9wSuWJXEVpYDHVHp9a9VXdVdf8",
  "key6": "SMA7zE2862MPPrmqWRdnx6urS4KJhnHpSSCkXbvnWcg5qTVSBfxDNr6UkEiRbb9fXLFKKdBXP3Vgr7DEqyNpAp6",
  "key7": "3eiW7dcxcBiDr143fNmESXThR3ZGvK598feWiqf3qSqn4uHJEpeDpd5bUntu8BukBi4rESgMStZcCJH1RUNaLPC",
  "key8": "w4Ni1io2UheUirU3o3p4nvQthUz13QaP7UKNuXbHkPiQpHxCCRxtrQEDTVeiRUdHBHtcJCKoeK4y3cDJ1WHaKkm",
  "key9": "32Kic1hwW4axYLEbEMfGsEs9EzhFgnguzotWkWp1ifZK4b2kUzT1pJMo5jwYR1XzuD9gaQwhSDAsyccstHRt4gfZ",
  "key10": "55UqC4PtqPzE6dea6hN8Njw99DvxGdKUMdSDVUo5nAtH6UPeNgtECAxvayaiyQyYicKgnWWagkTGdTwzL6DEJnyS",
  "key11": "2hZSZnTNFnNh9CzNSxjVvXAJapxXpczxz1sN7aJdCa5JQ8hWw6g4pLvL4wo6xgDMZV1KsTwUG8gsS1ZY1ksnQnYB",
  "key12": "T7TY96xN46tergBxRZYzokZb4pdf4xTgsxaLkQHXU1cs5XEq78puAKM5w5zah7UyMAf8Njh1ZXi1b1GgWZJJTE6",
  "key13": "4nH53L8NJBY84fHqVBKGbzLqKkz6qceBE5ATjAMN7mnyBFxDiBxdRExTTsdmkoemyUEA8AQ57DBy5VtYUNNiBFEC",
  "key14": "XSXNokwzWRahsYnnXg7pCz8pYUYdZLfDQDykQoM3mw9zeKJM87BQruEvm1BjBdhinvzvGY8DBiWvmNXhL6o8BWe",
  "key15": "FJcVrJcM88HEfSowsA8s5Gk55ppKwN7289Q9cYDW1H8XR4yTp7NqGs8mDep3qLERYzYZhp4g4FNJzcL7Gx574kQ",
  "key16": "4pqDSyi57YZxLALDjmkRojDPESEap9dyLXKW4o5Zhdux5d6pHXM3P5L762E4TsXSUEhmW5TiTVCySxXkPBNwmgXg",
  "key17": "3bUjTW9kFK3dUtuL9dz7Vhsv4YzYhfVwmmxWTfFBmfnHyHpzW3hN6uqq6k8UnUMV6TmDLi4zM2WjJuXzbCTvrXZ4",
  "key18": "2wP7WCyE4MJ9GppTznwbDQ1ApDzsWVEZ7oA2GtdEocdvvEwSYxESJL2yziko1tUq1eKgUX1QgeUNQViGnSHygbn5",
  "key19": "xAyxrWRdztB5oi2z4gCf3qDtkKTwiLhnN2B7aPbqVCuVcaCSXnXXNPFP2LgtXfpt2kcoP6p156wJJHQF7VdhuqE",
  "key20": "2cQrWePNEb4QWZ719eHxqmQxXccLUDyh9PjZrkyCUHJeJwUhWXCnRLto35fuGi97ExF1waxVNqgPHJ4rrsKrHzza",
  "key21": "387YLFVwNHSJFT8M18NcykePNj7vwuamj9t3PyaXrN1BQ1m6BpxTa3UQVyj91LHKUkyffZvtTkBE1E2QQRDFPnXs",
  "key22": "3opMe43Hegd8bcExbT2Rvib6gCNtHgd5e5c4kBriEYY33UmVdz8YXpiUVt1xWvLF6GqHyvjguhYtLCSC693ThFTr",
  "key23": "4ovDHxbqQGKRMFNkmsTjPgBMG8ZkkhdJY2Dd6MQaxcULCQ3z2sbjX4XegB5mNEBDvmrVpDGhLq2WspSjWSUPt9Jo",
  "key24": "5aFo47hBsWdXEUKVa8rFgSm5FmH8LwZt5izvP3x16viHJrhAmRuoqdhpgSxcXFbJsxdTmXarEF7web4FBvbjHX1J",
  "key25": "35dSNwkKC7Z44DcTRwURcWpVHWLpijKUnwVFpyYs5x6n6cnbFpJ2Dmj8YCh14EcD55W7yADfVE1f1RSw9coAog8J",
  "key26": "3rwT2wrqhKQL7cmHdWLDAMYU13qUwaf86eb8KqTEWYKvw3WTTftU4tJYDpJUUMWnqA8XMjUmLUkBY3vDw2zQqCMA",
  "key27": "4W8e6XCVQGenEyVE2q29hrNvrqCC9nRboxTiw6H2HYpvc2ddhde6TKEytuAgqzThwadzATDB7BysTxN44ihjrabk",
  "key28": "2cVGhz6Syi3EdQ7SU8CxsgtEfnoYHDWnfF3ahEymu653wRDYkJieiyccjkCq1BTvnU8gvgpMZrx8VD58eZ7MGqKH",
  "key29": "5fufFQdBUtVnUddAso6cXvrh7ghgANRWsjdyJmnJV9TAckXQz8g43Ji1qeXv4GX6gmBmSd3jVMQgEitL8z5Xj7xf",
  "key30": "4jx4hsATiA52gwG9XxkWzifHpKzjeNQdLWhiDKdmbBqn9iFHFa8cGCF5kHzYAzRuxpUt6QoFeqmJwnVG9hWXmugi",
  "key31": "4PYA9gBpWwsJn2V1r5BFaygfgEFqd3vJNgfVq6cWDkXyvXdST98Tx7iFB3oX59X8W14KsGLE3aKWEmeMwZ3YFBU2",
  "key32": "WvdFs1wPSou3wBghtGBUb9v1XuRRFz3b58H39s4SZm22U2bGoPuGFWpf8xXcuHkCVC7byYL1qLdrEFPZCmWT93W",
  "key33": "5BCKDRU3QyRrjBnUwyKWA5gP1AkUqPsimRcqz1E17bNxMmJXrVDyfrKYixtNfTRR56w6MpuXgeYCVNaMLyJr3EVG",
  "key34": "4Rd9N9fLDELk61CcWwSjC9kdjxVixZJs4ZNG8QsMFNao7nnfymQ2n3SqSZxnUMAq3gfDkg7qZ2SCz9Jij2AehwPa",
  "key35": "4FFPCvDtjqqZ56YyarPsHEwF6v6HMvo8UBrvod9eZz9XtecBMxXXYGUqJwT1FhnDAyYs9bT3yNNNbiYPG3rhYFfA",
  "key36": "4KbQgMkkCQBftXrwzEHuoTdCCZSPAT4zNcKYM5isnu7CryHFzzwKoqao5QQkT1rU4jFZqwQJ6Uf1k2ASChgJt86E",
  "key37": "3h6zyZZEcwagjAF9dimpKreuZVou8EmT9NBxPV6j1Mzfj2WYjFceWmLt64StSNYfX8rtRiDfMLdY2PdYPsTnRfdr",
  "key38": "5nRg4pi4AuV5WoGM3r5kpzuHCyoJ4xQp6hNHkdvLVwMZCmy6HWKgdzEZ3tbzgTPSCsDcmxkLg7cRd8TCEJxo4xTT",
  "key39": "3XFRr64kZJgYopYrUi35FAVarxQs9F7dVfjNjRFg5kew8YaP1QhxsLR9iJJTYbHkPX4SjjwL5Jozfh9H4KUFBC7B",
  "key40": "2AJpqr7MqXYBjwasPMuNN1TFm5ViVhNNzcj3TZH6EnE9bXMXtGTtpsMhUfycztin5923Topj21PCerUyhjWCwhJa",
  "key41": "5sTNXZrxZZRdq6B1F8BcEqKkYbyXf3woo9fuDy48Np9S4Gg2Uwnw1oikiwVkfNUsNnAC6iY8d2RC7wggmwnM7zCj",
  "key42": "3jMPcUuxb2gXPVD6TPNke78gLudZBF9zJXjG2TWX59XdfN5DqEpwGb54DyvygrrmZsL6T8HEZosWyDKuE2gy2n4f",
  "key43": "5sDeNq891x8P1BjgzSwm84Hrs6eGQDSQu8Vk1cLGiB7RA49aDivbzYxFhQGMxmcwzwq15H3xWAPHv33FAeMVEZWm",
  "key44": "4VC4PVk1ZA2F8hhk48cjgfFjzppDgZ6JRBYBjryCKnja2gzVKcYD9wkpSfcrGtwdRgC6f8gQGFN6EvpiaPZcsBye",
  "key45": "DdLFHC7kxe1qadFU2Aae2oDLjV9qbkKFhBASLKysZLssug8q7MLPWHYRn5VcGZ3CAUYc6Zkwv7cKghefJupKzP3",
  "key46": "2MoLjiAPyxJ8qn5rkAwSNwHSRcdg2aVWov2Hj3AMNG8fK5B2ydddkRjsiCauHhidYWS1Cx5PjRTisRo7qdN617Ug",
  "key47": "3bt9bR2NNCgJ3Pe3FKSy3RroC842wsXnihjBYG77e7smM2M8Kw8obPEvndKLb2vBsSmkhPYqbT1yid3p2pHpQtRC"
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
