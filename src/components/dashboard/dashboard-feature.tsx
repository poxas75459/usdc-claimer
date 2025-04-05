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
    "4vAscmHN3bsYgVjo5EpGkNH1sZ9xxL6UrQJkDYi3oDciJN8o6AvgC8Jryppd2NdBUofr9Simr8WoV45phVoG8Fh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xysG26doJj77U3pVSyWrr8cg6WrNzHqRMonc6afsjnWrj7P3U6FNKqeu4NF2naNF2RBjEwekGvnJyWKmTCtA5kP",
  "key1": "2dZGeDjJBG7cpBJxs21P9PyS4fmPA5UKQqXggeyrCLK28VTURGmt5qUiw4pQNPc3F8ucsNtfWR1X5o1nGYWEvE9q",
  "key2": "3gLDUEpLFR5kgH4n8XukKKf9Nfur2r2X4DE4U7287qe3cRoWBbK6ZkBaWW2JgRMUK7L1dzJ5qZ74E6y3tgpS4RVt",
  "key3": "2nnAuLxoyWTbqG4SN9S9xS1Lz3zkJ3eu1NyBh959iH2JaKKojN7dE2jRCUXhw1anytRxuoZcif5j7bh8tjynuojm",
  "key4": "2yWGQMG8JRcATrss6LCsNuy9gWLvKuJfGxxGPvZn9Ed7GNASqPoxjKhEcZ1B72GGz3K1CaKGGtJfRcB9QSQWFuYC",
  "key5": "3mnHNmT8qZe6BmzPTrbt4NtADsv1C1QWLKRsLANEf97LYxa3ejdTJRE8sNnYTo1JNocu8khMabw5HsJTTwfWynth",
  "key6": "3sCEDi1UZvWqsWPHCw8suYFZ8uiQtfTUyDrmZ6NoFudRCMaiSBYz27VPK5qhwt3QC9yRwCUYLiMeLz9ngwbkuR2h",
  "key7": "3YJ4akwkfZ7n426yfjnxf2wTrK4gn9hqk71a1C1PDsxM2ce339FgF2Ww4XA9hxrJfXSor3Uy713PpHia5isgNAe4",
  "key8": "49rNum347Kt7cBmnNg33PUdcUfuZy4ComEujZNHewUw6QfgGXsPqurw6GjWBUuVbUnBWKwapdpkSZGfK2vQDS87X",
  "key9": "3itJBQCHsL9VCrTMz4zzv7xWE4TE1cTdrZSoGjjKMYEj8T2LZ6PAYSNvRLaj4s57XT715XQ5tUQF6xiAWVZH6pRq",
  "key10": "3GVParGq6QCjfCabESSUw8FJrP19k4NaHjeQGceNMKTa4r76GSAaWiYP2zbpsUYHnxxoAkkCRFXkLbmTYo3fRVvx",
  "key11": "3AuYHH19aBPpoEA2WhstQ1xnkGgb8D5TAXVRtk2hqmtzoN3xkizTK9bANdeZ74whw3V244wKzyhCjigEfwMWkEhk",
  "key12": "4dXowDLb4iFvWeYxB3A6qFp3ZEWtd7HmgxL9Jr7Eje9yAoagC5fhTU9RqyxZebjiu9tWW4acvUXamwfD9sXRYNEb",
  "key13": "3S3L4Zcvf7ziYUYFGETREpnU7w9oYrwtzY7tRbtVQ1hfFigPqsyt8LBpQNy94KTMNky7EzKkekR2NRRZE8Tae3Fb",
  "key14": "5dWyWznESnRR5kcrzFBR4VMh5RjhaJJhJae9swg66yXdqGZGR1AQRi7qNayrZu6jaWT7CSxtBazidEiFMt8iaDaY",
  "key15": "e1Nm2kNBZQhbJgmU7vzhGfR66bNwRHgj8sKzusDgVkxcf25p4fd3FdMRjJATKZv9xt5awsBX3a5bpabaqvd1u6D",
  "key16": "3m1xCb9B9oRN8mBG73VGqEpfazNFuWMUkLu2FGdQCxay5TZQW33N26PaUDcB8Tm8zo1itd7vezGcw6bBrHguz7nP",
  "key17": "32jfuLzNrxV11y6yEZPvidz1EnQYxLkxGreAd2frprvSu7zET3zKN5D3x31ZB9EDWDoonwV6jPT8JHaGN7CXPEwb",
  "key18": "5FYpQco1FCbQRezh1naLWzE8cWv8Vj91T8pSs8YUL3Aj7wg9MQF6YBTuZSP5jcuJ4tywNVMW1rbQF5LsBsEAY2no",
  "key19": "4LZeToMiQSb4Yux1tWadzpLRjb39PyUGE6cWqEhWfwuvGgqCSj9GPxx5c7d2zHuMEfiYAxNutV9QTTtPgyMDVw8n",
  "key20": "63bRr8KpRERr5xomEwCaRsoJrJjH2sVmHWLP6urpDuKkQE3dt6CKXH8oXLcdmYHoZXg58Mp2ZN9Bg2NzXzS5D6h5",
  "key21": "2Z7kq2WdsX3WWMQ5gSARL6JQmyiw2tPXrAtQniYp1vCNCLoSjoQxxsVo66UYMZcjtmQTkHraHmxzP2aN2yKzVH3g",
  "key22": "stMCNTssNUCftUijZses8Mo3gx63k4rUnSHqD51XcbYBBr22nmof9E78o14APQt8mAPVTWRih55AgvuPWh8Jkwh",
  "key23": "mvERWLfc1rspFeLC77igTyjvz7AS9UGcAhTLBtXSYjgDo8LvVt3u5NGhpuWC7m7gXZbC3RbJg4S8Qwtywc5x1Yb",
  "key24": "4xGJWL7YGSZuNDt6gMV9WRiBM8k7vgYjkm7KLnvycvMRqjgrVUkV5LEaL5fKec4QfE1ZefU3dQQCq7EGuyXj9dvW",
  "key25": "3iJ4vWWiAzsRxkzeCPavhqsHppcQBScjjzwJxc1wPAz5bdHCdxxD9zGmqBKP7GFKwVVaiz5B7TpExaswkwXEPxHD",
  "key26": "2dzVN7CLU9xz1kNZDns4KxA95JNvUT6v4qtM11dv6MjeLAYX4BChAfY91sJScMVWUUsEkrbSK68J6mBLro6ajQPT",
  "key27": "5B4t6JzcX86yWayvGNB5zAvbCSqAxTGvGyJkRbZm4CgZsD8CH92afFzEYvBNKbXjprEmyGB7VdTq72RjCmTAtuEr"
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
