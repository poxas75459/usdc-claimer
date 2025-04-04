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
    "5NGU3nixnLHzqD78T6CXS8JKDLX8PPJS1gx9t7HDMbdTJozcPf9KWHrNz57xS7punt5d3GPJq9T1852WJKUQRbhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUtktDaepnnACGgD8ibNjQyS1q2J89EpirB6BtTm5NS9X1qg9ycrxZ6riNsuu591JgxMZ72qte5gE1qb6RGFvhX",
  "key1": "2YRR4sm2FHrCxGtBa4jmaYRFQ6w9jyuzWxDNdJRJGJ93UMjaCT6xncw3n5HX1eFfZogowj2uNwT5F9bgjE6se8SZ",
  "key2": "54u4xRn7tveRik8W37pDHHp7RKGXXWZQnDEyozWCvkAaPweih1NnKPJ5KkY7ej66MkuPw1xwDM1qYyN6jvtNoDhw",
  "key3": "3yTApGSgU1WqKUJS3NXRJWEyg4PCVJ7yLmTrXjKEmB23w7PTteeK4h8eyjZuKYhqExz39EB7oYAWtuHrnWekXzrE",
  "key4": "2ftvVUeF4QaxkVNTaq7xp3ToVihAiTeQ78yLpqtSKfnUyAHwkSX316MPDSypsnKjdCdC6FvmymzZhgeHLnQg2nR1",
  "key5": "5uE3eRkEc4Csog2EQ7v4FPLjyiztti2GhqKAdXUMVNz945Px8KCubybdfEMfF1mmcenArFdZgGdzC27zRc1Mwz42",
  "key6": "2tyczndVwmKrcBfQmkb3QoVnL3nMcoaVsT88hDJaiV79fSikEG3wfkDh5UpByniReZAeEMsot9N1z4ruQjx3R44c",
  "key7": "w7HSjct5cVq1V3Q1LW5r3zZVsrrfpCEBPqroGhs2pLG8ntsTAaQs5ngUuqtWnVNo6RTwfT2NktEj7sewQVySqcw",
  "key8": "4gQvayYFnDkv5PDJzaQ3CFx86u9ePhRwsr4LdBubcFfeRVqQ3GwwoS2Xcm3yRRNerPsC9JAtkj5HmDhQqz69waCE",
  "key9": "3iU7FQH1XbPjAvGqUQd3ZDs2fozaevWkrYfWFPZ72MSzgGzcRNJ4rwBdrgsjYBfrkCH1GYTiXEE1iyzCtGuaYdx6",
  "key10": "5rvhdtpyir8WF6rr5EHbgGYDV68qj8F51mBq9mPDbLVWUQsUPzAynaGNMfPVqQncTUA22dwjbAYedpTAq58MFV3X",
  "key11": "3VfjjQat8h22hqK3Yqfth3wAagFxAbSrDMh8DBKN5HqQ3vTMnqZhXCDHgMVTqqncFbuquajRqjBA3G55zoWuQVXH",
  "key12": "3zA5BDWVMDtpYGiGUskWNkWVcHAbr2eQ1CcWyG6aQUYDVTyGePE9GqeWqZNvdvjte74L9ncc8ZMhM2nRYAchpSoh",
  "key13": "3VxS8mKjZzn99cyhSk2hTRLNeKCPuP4KD7ZJSJ96PH6AqxS8qJpsjgYskG54bdgpaGeAwqUTtRYaPzcSJeo7ZqiZ",
  "key14": "5J6PyA9TufmdeZ9Sj4jEV4H6WDRvRTxtFyb42BcstRKYjJ8i1t8PhctWQB9riJSm8RT4UwftVnNbRvbVwmiaaNSG",
  "key15": "42LsSVsz7rXp6WJNANbKnZF1JJ27a7mZ6C2R4Z85heuYSG6xoeN3FJbVVL1ScvaFpNHsB9bLLDcYMPWSwz2u4G4S",
  "key16": "5FPmbHPLZ8rzRr8WuXZjMnkxjreCTyx7gggQiP3NmAjKMXcJv7Vvw7bc8WWRakEAHtdFLckhFiGke3WS8mQJrrXg",
  "key17": "4MyhKpnCeFaG5XAThWUGdv5Zw6ENVgre45x2PTMQkzhcyQPcCMDwYQSN4m7qm6n6z11FR67QvWVb26W9WKZMFnA9",
  "key18": "3zaFEnYW4GF4nS7L4ev67hG9AQDUrpPyFasTvjjHGfoiUq9Nx3CwZUHoUWT1aEMPzJagDdj39woK9uGnNuAhiB2m",
  "key19": "2xDs8qdwrA4uW9bTmL4C6Lrd4VKULpeRsYMMzWtUrpMmXpfPpqVZpE92qMPW67AeZJDKEBaecDX6S8tU6xcNavPS",
  "key20": "4753QfdeHpUihBHxUg7BijbBt8pCUAWFkbqh85qwZuuCP8Q3XgHuxoYG1WNDR3t3Rwk8ptWYa2VfsMFGgohLe4qL",
  "key21": "3HVtVqy8VQoT3rSHoA3Dc6z9SeQsc9izoPgnD9LT5ZtUij75BuDU7edFa7aLN6J9yXNVjR4rcS8RLdJQapJvVxVN",
  "key22": "4CXD1ZXhzNJKj5wrBnq5XY8h1HteHW5TmmjmB3M62hQvdRWoLYbJMwdU8hWAMNMmzRXvPKegC3ZxopXCwqYBYMaE",
  "key23": "5danD8uR2u3g59vzCadEogLgKmKH8H8jz7Y7SdsdEMEqE2SPYmTq72BRyAYU9GbzpRwYnP5daBiKQ1qoteQWZpTJ",
  "key24": "4gPtjzpGfs1P8CJaxVsdBQww1GDrQLven4dT55SURjTfsrEnBXcFk5rojYwbWk9AkBXq2VzadWJNfBAioCzVM71a",
  "key25": "5RAJAUz7z8k53knjCr8cqACuccaRhUGa8ZskSTcbWNieWiwScFXTn7x2j7781wAgcK4c92xGMLjtjPuzuj5NuqBp",
  "key26": "26WfjPqrdLaNKvdGXTMZ5pS46XS1rBSPpMmpmkzDhYygv5fGX2XkDriAgAETFRVWpmFaZ3Gt8ovqKDwCEX9Ab6D8"
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
