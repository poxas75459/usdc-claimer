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
    "4No4z1SfMLMthLYe4pFagLMLnLMVY38SfiHym1GodnMMR8CbtM17HRKE2pjXfMVWpkwKkFHknaTUSVxWtZ3Hf2nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoyMvX1SCR2AzLdwMQVuzZjBTX1eK4zfV1YddQAauvn4wkcMh8Qu9kTKsqSuy1fC5Gog9UgDjKFWtQkbtGR43kw",
  "key1": "RLQ9H1jjobR2Pbz1wZQdDjUgq27Tn4KjfGgRz4vVkFuBke3en2yPKcrGn71oYWcMtykwFJPmRij3yqavTRXL9zg",
  "key2": "4EDHRtpuTRJsxCdo9PECkn1RTaN3R7mbt6k6XkB7cLtzRELSj82qBqptFaVc1SDkVAi6SKyn6zYdP1cfJyyu7xii",
  "key3": "3b7XCUfQHcxKYp2CD8pd8kzQ5ZbyqAMJsk3HndvKTGRtXHZhGuxzyodprUz6GJQ7E66RBqLbTZmWyDrStJeEfoKw",
  "key4": "4CWBXkZNtJJrTY93t6eFhTaEENXzQtYBzwkY1gHYtMMv6yMrf5jxqjdW5dxeBMAXrYocAAFcZSxYnD3Gc6AqcSX",
  "key5": "3b9qK6fvdSRvJUztzECt9qfYyBQjKEUzs81zZ321a2hB17ia5XXbo8D9GfsiWNjcMnQTXBtShajtE2K7scPEr8wA",
  "key6": "3qUFgG8tHaJFmyC4QEkkPZueZtTLsGoL7Xd1HjPT4kFXBKggXHNEC7VjgsbC6LavSwcdJA5k8q3BPkqC3hMM7WBF",
  "key7": "4Nhj8zSyZcsD4aseUdxeNeeFsnpV67cXwgWwRZyGubLU39o49oVpKTfPNAKpKAWpvKkguYYvUoxSsZnykpg7wDbL",
  "key8": "5A6NP6mKTKCtoKPCsZZYoCKTSKcTiwP5xuspRoSyrWksYYGykDEEjn73wVwPTPvXjyqSQrrT1EDXph6WC9X9eWAr",
  "key9": "dLrjcQzsfhVMnZfRGmQ8VXCWbubycG74A24MgXr4XvYWhmkCwAQFKQTTvAffi4jSXqjFU7So8mP5wzYYPgPHqgN",
  "key10": "7pQ6HuTDybEvVEH34gsv3ncnjnNSHkL6ps49BJG2ZssWkYXudFLo5vhi37zSbRPReSueWAR2BE12oPxTgAs9BZB",
  "key11": "2thGYNRqfXTXB4LnGLPY6Buw8u8b2ishPfSWtuHd61HvnfcDuPXf4Yh6Zobp9Gz52A3EFanZcoyvaruwAdEKrP57",
  "key12": "5poLGxmjtqZn5ioLyBwDnGL6MHQNHQbTQw8siDzyUiiwJtfNLwtCDnoW14y55BZxhKGQNrxVHfnYd1P4DL6Pawpk",
  "key13": "51NiUSW1sqrfxndFYQeeXETLtRpMLbAnwRbDny2cy84TYkbX4kLUnyVivhNZUik1Smqnc3n7aEjg6ksCvWgZwKGq",
  "key14": "2Mkdy8zZSdrKT5hS3gZnPpgJ7eb7F7GMDhM8CsQFDsaF3SHdzvgU6VyBYzdxW63bwi6CDHzAj2mNt1BzE1TYo3ZD",
  "key15": "SxbuJk3ESSaXNzxyD69Y4VggCRPCHurnUCB5RvTpq8kwk5m8dAoe1hT2oehBGzb4Uwf2JcTrS8qtD9fyv1PLWrV",
  "key16": "4waBun4dK6kDTMY1CBCgNu2b79wu4akY5J6JfAJMgs1VdHvD4vna1eeccZsdJmXaueK5yVPY2UDRpKGTtSveH951",
  "key17": "3PQ4VwcR75C4f5GR93EMHBygmfKc3XjNu8BFKV25ogBAC1b1qT5TWwusbYQ39VcYLWqgYk3LEmFwXnb1Ztf4qcno",
  "key18": "5j1CS7bZMPha7FUqMYrFs7ifiZY4DiRYyJEiD2AkGqUwE33JefLD3186VnRUrna7NvmStPaEGtibZ9GDpSqrLvLE",
  "key19": "4DksgmmWg1SeA1VD1aGppeVM6t8hRTjFHZRqvXDMsDiceiXVVEVJCx6NFp1YoXKRz6JJBkSkG1KnAEsUvfus4vsC",
  "key20": "2ehxQAkPH46ZtYBnoWpjonPq7D3woDK4Q6B5afPpiUJvunw7xiTLxPZjXEm9Yk2jqhYnLwiEEDyDQSEbTMwJ453q",
  "key21": "46cq2dyqM7EeMr4oE2QZmqHCRq1ZH5kM2GPauUa4c6eNWN4ngLgaKwDSViLHarAHQvW8Xct3C3j6zoavNRXDZfSe",
  "key22": "jh2D6MZtd1Vz3VKQfFMTvwqQwzpP2rtdUNcMMZPqSYC4AxEFhy95yquNpcQyc14QWfof4pGmnNBzrmVPAgYfWXe",
  "key23": "2QgSHpQJEjpV65A6nvMuJpHRWvHAYxBvRnis5GzxyPgT5PnsNGFymdt1HRSsoQPedrMHGSmvruwqZwGXVdJsL5SM",
  "key24": "3BqGEq4pqNXvJCMp1nR8B1kSRC1v5qm3H486vmuvu1ifAfreuewXyoLZfNivi9kLuujvZcyniHsc9Jmx3fnejDqg",
  "key25": "4hdFBy233r7x2dkUG4fR5KJK3bTdi1VvSidachEbTRig4S8YttFEGmHYZTgXNbqW5dVDDZYgYNcJASwoNz5R7jQj"
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
