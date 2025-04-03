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
    "4qJQN7MxB7mwLEXWRmrdcVs6AJTv2vSsPQ7pG9wiziCD6NTpLbZZBU2PuV7WUhcJfQcgvYBFqqt3RntmzsxjCGJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bH6D4fP2EznBBeV6iyi3YxXqson4VVFS2532Mt2PWciXGpzgvaNgW6ka4s1A7Ls4KZdnzfL7Xc1mQnkD5AEoaGE",
  "key1": "41erTxhk8AVSCoEk5hbdQYqEVveUjZdRS47YmU2SNX1mAcWU4LWtTL3ZjSyoZ4oMd2T7JULqDSK71F1K33GwP7jo",
  "key2": "5KapqXfiMFTvXVBf5TGBTsgwprX4tqKVUz46JqcH8QCqaukijK227nRTspJUctcx4oREqTkoRxrCs4amHvpjTRi2",
  "key3": "4FGrLjBxLKGyYAYxbBTU6D4EwhPyQnrja8SEWEFXrJmSSdE9cMYLsx1onjkonUXgcfPMGbbu86ygyqLYUhbwFvC6",
  "key4": "xdGWUMtQYtrMNsSEUJagEvN8RbWezWrkTYEGmh7fcY4JqXrjhSfAmb27e1DXvPyNhE3BcnRVd516iaJV37M5jBV",
  "key5": "4RVTttYX4Un67ggQabqqb5CyeyL3euMcAx9gDoo8NZTHxAiwYAAC1n1XtworPUygitSsZgRTJpeho32woQ6erKzK",
  "key6": "2MtkS1a19sjqs85sWdp51aEdDxEWvnSmaxf6Dh9HNAsLCGyFc7ZpB6dtUsZe6EPgs16RZbUF4G9QbXQ6D63ixLdT",
  "key7": "2t3Qi1rg3X51zZ76bVvinTPrppAb1FahhogwoYQ5YEsCXeyJaJNmBXRUPkFUM3Ycs9gKCtd95phACc15b1UxsFm7",
  "key8": "3gtCuzTme7Nk7MhY1NubcwoF4sCJYo25JCWWKVyLqb9yVs7XdpvadaUKR7NEmG2cbGcEZWJj9cRowyF4fJZxiPFG",
  "key9": "5mHAj68BiyHoLS8y9Yo58F8rwH8D45yPb4cxTs1N99bPx9TdgRMdcCgCgUbvhixhAM471bJ1SW2pJmXqLnswez5p",
  "key10": "jymqHsihecrkYmkWb6qpkYX7RUiav5NnPxMyJhZ3wrqS4srJrEM1LzajuS2TLy7Zn3pMF5k5XcFMhNqFkd3rh8f",
  "key11": "4EoxaDRXJQ3GS6hw4uTMaRLnsrvbzeEyZDqfMPaMUCP2MF9Le3nMi68MN7eqCaV1YRLH2YifA3sHRKTJbcYzvJxV",
  "key12": "5GJNCTMhoFxqMmJGcMEzr4NkcvVH7yqcPmn5TgqD3pnS1pBfG514kqvnMEqjuyrC6hFGukm3T1oUtY8AeNTBhGeA",
  "key13": "4WPsQoBX4HQAEUuWJQgHhJ9eDHaT3iBSj7qUaZGJP6jt9FDzQMjY6okAMYgX6X9qpLWBV9MU8RxcroZSzVH4P4pE",
  "key14": "46RCUJH9nU6Px4Z2hiGviRRT9VVgTXW44BVW19NKGbrcVpEY5EnEYPbtDHUrhWQnZ68zHKquv24Migd8yEDtH7NC",
  "key15": "3fvndtuj88VDEx2UUMxrmyeeJ2GKViUvdJepw2R45HsDw1QM5WZQdhHXpqyKJHxzF1gQKei6TgwnApf997hmFt9M",
  "key16": "4deVaCNSsMR5zNFHRs16DcX95bRBQGDk2QHRM6xLGqAugJh662EbWiLEcZRT1RFGKeYvmeUuNfbASDiRKWEVuEqv",
  "key17": "4A5fkJRVnxzCuB1xifRdSqkxw8L453nbpGQkv1UHYt4bbc5DTpnd6y19bX5CL3ahFgvQTuxd1bgzLzDrTEaMknrs",
  "key18": "4WFmQ6SvkkHXhUP1qsgGr3MyoHZFwtXu94M9sNn8R2wVEENdeRgZxiwy2qwwu3yLJrgGoyQfw6FhqSJ5SEenxk6G",
  "key19": "4Gxv3gN3roHxVbDEx3fwyvF7dukecCRz5zeunD2PPRcjTa6nxW2wRS8Z7VNdJAzNivgF6vCCrxZK71sXDkLoH2ip",
  "key20": "34y2bQa1P89K5vMhCXqrtU6vhL97mJF4ZcAReAazpZJE7fRsJKPhfqH8LwZKwzGQtJwxX6Sy8U8XXUf3tiVNjvaG",
  "key21": "4bKD5cYUya1k2ShNqzfkwujswva1apktt8cofbWanHURVr2Pan3vL1z2Zw8ZrGXVXWhWWwJ7KZ78ricWvfSqzSZD",
  "key22": "2KbMDYkLstdG5MMaDmPCMSyZtvwEuanqMw13e3nGSisTJwLayAwKMrMywaqH46Zf1L1zvveqL7oGeRGpt48af3cJ",
  "key23": "2CmVNehucGL8Y4QejrZmK9YhBZpLLqtjGp1pCRnQDy4mcTt3PLiQLtM4D4rHMMUS4vi3Z5oszd1nLw6Lorz9SrRq",
  "key24": "4ihmmEQgaiE3sJGQVMFn5FzEKQEMDVSBWU8Z73LwzFmZvUaV4Gpqd3gCifBJRV7sDqcn5ghNeDN3W1Dmw733mUg3",
  "key25": "5X2BDXrWvv2QB8ddBvQZqXWijaM9DdBDYwsWbUBYAiuKXHXF6h7apqzZAyAGvXW6ABp3MAugvANNibPibwSL96a2",
  "key26": "4PkyBv28pfELkzwhwSV7ymPSputHS3YbANUadCALEtP2mkSJhR7AX6SDQeYbZ4CcRzMSCMZsxkojUQnscoy2skUd",
  "key27": "2BDbwufG5GZD4N4JFiyT8g2wyVii2mXfQv4jL89hM27rjRFZxrjvXYeEFFxY6t9BA97VuKkjw4REpJUhf4PFrVxw"
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
