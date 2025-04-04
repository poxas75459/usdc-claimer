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
    "2pYUaEFEJ49YuzW39KQmrgQuoEgHBLQp8DUQMs4FawQJ9CDWxJA6BCVeADmasJp7XWedEjvqMwxYq1rKxQGztU5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wtBCWWRuKMX5nSLQv2FDzL9FcH2y6hNzqxF5c9UyYsufY1yHEh7cbRiCWc7VMXyu98Gdc12ZHDah4DzB7icaeaW",
  "key1": "qUiAh2rdz2tqJPWE7frPfDh4AuuyTCjSBEbxjKbiSoSiwoayrxAs4dj3x5aavhRA76gVA3hcmuF7CrTkDFxDWEx",
  "key2": "31F4VsX4bWXPBY4twUhd9X7q5NobSJv6azdDtNgUGvrx7S4W8exM7b2vf4b1CP9GfjWkyifPLdTSTfj1APnBVuML",
  "key3": "ramRLmiRD4NVoC3MarQ6waTPUWUMDvHKsjiWAoBeudSWxcNfjH4NK2LTGZ5BQs1tgmW5FkQhBFGb5NuH6GZZr1i",
  "key4": "3pWhabcPmdjjhD6nYWC9irbntYV57xxFqv4DRrJp4CNqDtAoh2s8uh5RhP76Sy5xKP84aF11QkKDuQXCjX7fyYqR",
  "key5": "3iuPetntmtzdHEt3etQ8ULsCtfMn2DzD8ip5iM4SqznhQMRWA97wjX7AMjDzW6c6K3soLkxvNWqZbt3nMqQc3d6e",
  "key6": "4x7dPgmZHgLaakMDXY9sbusXhX5RQNGmdcQzQbTWMcZwHBFov3fhzCcBy5e126zfG5Q934KrLKAaefDBHtPADitD",
  "key7": "5ne9peyRKZ9KCgfWmZ5KvbFSAWiPxJH4obUEd88v4ecgSSuWGkxxt3mu4DRiL3cFfuCDVLgTCYAeLkPoxvscsxxV",
  "key8": "3qGM7ZWUCUvjboqSseXmrUoHoznTy4CyyLtQzqRf92M3h1pkaH3dnSZSHcjFzw89tgdjt3BqwZfWzwR3SPHFHsjS",
  "key9": "4NAPB1wdbAVt5gAPLdr4PZnwQqpYjMNvohvtAdqG6byJVoLPbWauttmXQ2xDkpRkj1UtYnvkEzkmDjTFsUkNQB1v",
  "key10": "4V2rW7qfeToMV7qZ4BfwPwUoSEVdQ82TSMjdYgJk13fUbRXhFXVwTeGPRAigXycs2bCt4TPyjxN89nips9gKR79R",
  "key11": "4Vb74SNeSKXYrTNV8ujTG6mLkban8Yp5WZkBy2ecvjztqKxni3DcJ37bESXvBDzQAXswciqX3Ad5F9hMeugWfA7i",
  "key12": "3NeaqDWXk62nCQ3Ai3K3npaCkRXeLvcfJSq94gregvfnmpr43BUGUF97DYMxNH4uK18P9ia1pJkZ6sjvXyLm5Ygz",
  "key13": "5EQgXx1xSMxzxWeR3t54nJfW2EPqTJp5X53qUi9oHg7CSqL5Ja5GpYabPUnKaBBWdwkLQrV6ceo8ZeE5Jp5tnvcE",
  "key14": "2Ejb6JqiQEg9XXfhwSFsHCdLavtogU2gqf1uPzwNZus1BVKwwFP1YjDTLjrL2fqh9bAGmo82FyqFSVTFJ3y5nkJN",
  "key15": "4f8L1fof8jiToGq7JacBbxiYGUZRGUzDTcTyjBB4LquGwALeCcwYyGREWMQ7rwE38TxyYUCzdd7JAdLNYBFMKfwZ",
  "key16": "39SzDzTH87df4XbJGXEWQZDtvqGridN1N7NN8nXBipmDEWyZPeYAoaAArq4XTw9No22RbaQc8MmyCMKYdCVEQEjR",
  "key17": "54wYuboNkmxGBrRNiPHgdHxUNVFYbYCyLobTj4gBafMmzjSu7HpXqaM8W2jceFSFE17BFdoPdBY6WYiJXTagduK8",
  "key18": "5dSopM9ztxMnMrNTBAeee1uYtMF9cGGhqvunrgvFoULM1qUM2UkD1PnqMWcWc8cQh94iEq53TiHBsDgUwMF8woLN",
  "key19": "5FUKhkvutVZ7ELYS7fWo9nGdbfwT9dLiBMp8umR3YQ3m1PVAS58Eq5TnUsxEP3wsJV7BMWR6S8xxBs8y53bhGw1Y",
  "key20": "2uFXMHD9V14p6f67kcPAk2NfqxWR1iMinUwT8vyxiiEyusFp5gsrWEsSvfz5khK3HQHgrNyY6n9oWdoePxehcN1b",
  "key21": "45hjLKsbaPu2PgD5GXjuELBD8XoB9gT2J56BLFMJrWe7vuvYpNVq9isV2G3pc3Jppit2vcgcM4xcNq4AtJDPgihy",
  "key22": "3D5x1kagqScEbQeYSZf1jsyYpmNkkK8zvYonQe4S3biuAJ53aYBhC4pSTxnWXSMW62Jd2smGRumPjqC17mTBXn8F",
  "key23": "4jsQBdG54vbvo6EzqHqNznX4FDnhDzkwxWMwtiDq43frmGSqvCNYDxZsvswPuiS9vu7WPbN3So4JkediaN47APvQ",
  "key24": "dxxDXjaG5p8G8KMU4JEWR5kzsT8TM5jcwhLsMUzYnEtoKsDJcU43SBwBkVNTrZQTuipDnR69apQapqeD6exzZr8",
  "key25": "24Z9t7TFWZR2rPkt4pwgNTaRceCKGmCxgQiRqa96kmjqKJpnLfaozhbMKuWZKZSMc5R3HTY1aW8wJGRd399bRCnx",
  "key26": "xHSZMaEqxNKqFZLPLMPjqjtL5HwQm9XwA6SaTGbLikPsUvxb9LrcCFqgDV5tHs5gkxMP75EzWSJbfwvtB6GSTjj"
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
