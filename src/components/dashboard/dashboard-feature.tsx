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
    "5fpRB4FNaMEGgm6PKH9L1FLaeFUyMfJXTX1ZqwB3PQb8SMHV8LurgJaaVchE9rrkQ5Cxu99NAxx99mqaSMx22MHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KVDozp7DPKiymrn8ef8pYbs5MdwTfGVvUGosUDwLr66ySVSQ8ykc2FvHXX4AYZSjjs7RWdXYZMdpzkNne7RQZym",
  "key1": "5ADNGirk9Q8s1qmnaaPhikNeFD3tXYfSZaqQnQx2UB8LWMNrWkpnBCAXVrtP9VAJLhmvyiQQK77KRaVgx8VZysvk",
  "key2": "5mSWUsTx5MtGWYY2fDJBSZMZMW5oXvDuoRmzj7m5EbDKsPEdNAPFxo3hbypMEW9zJGBMRXeV34sTcupnsghBDQ4M",
  "key3": "5QEANvejV4rXxuk8tLKCHwXywFmbPUEtUzTch8aSSg3WwtcNrjXDMyPejbNFjuqTJ2JceHEDY7fUwt2LR71eJPuq",
  "key4": "AJyYcfHeprCxMXXiHqk3DFPdxghkdt6XAWYpkHAkKDHwuLmMNDbEJdE9QvszZdFiJKRf6iTioJtmPQQmxY5MwQW",
  "key5": "iXiAuS3UZuakhcfABtDiUewssXpPJbRRa3m5WjwVZr3giu1jK7Jjmr8XySPEpwbHBNqHBu6q2rfFT8jPv6Dj658",
  "key6": "34juC7P6nb39dQyUgzMayF5FPKK4oqrcKSSHRiByqp7xQccTcxAq3PKwNavQdFDdpdvH1155edsLSYdj7csXtRwe",
  "key7": "4GKjxeYbWHnoHsvZxLGJZs6GWA3NyvVYWgCvxdsi6GDJj521F5DTiyoJdbwQTjERtRL87pmF6t8EfwiMkt9vKfkR",
  "key8": "2qB12gMSeUPeLxLa2uR8zPc8ygwNQFpckpA6JAYpQxhjDYmMiK9vUw58NcVXuwTvGB5N1rZWAa9WxnBR8TCYcRBc",
  "key9": "5qir1Ei49om4G2wP7TxNe7qem1rNCwnfAkFLnTwmWksupFfHxHBArLiQEDUUTxYGypJ1JmHrBLCNRJFap7vargY1",
  "key10": "3g92XenTCcbyu3don6GC7e7PdbJUt3JSJWQa1oDLBdTGZU2Jgcn3katNx7hCKgAVwYSPQoZG1CTfdFvDfQVJLnBd",
  "key11": "2xU7XjL3ptsmEEN767gCS9cQ76oTQZXLnCBfzeg9J1CmahHwDdGJvoetwSFGRUwEuV4td8cjLDSLj75Mr11bAp5S",
  "key12": "2BNGGr9gEegzTaCi2oVHN3tHGcyJCMx8H7wcBAVSWiucHuW2BXNfwhs8o3wPqLTcv4aqkh5YEAw3jfa4Vx3iTbp7",
  "key13": "4Ts6aVtD8rYGn2FJUAZMwEbjybWgJSZAnGveRPSMr7LjFaBGjajDqn5PvnLXNpbToty3ET1hht9WWdmM2oaa2WYh",
  "key14": "3ndAuDAyDuRVH2UbtBsrEuwYC2MM8dTuZaAmSod6Pc1hQevdeUxVTfgHKgVs86nqxiKqwJd99TN9z2nQsbrf8nmy",
  "key15": "yJd5iM6Vnz91jFPB5cFnqnWJVhdDeXcbbhoZjbhhHdtB5SZo6P5KfyXJmSeSyDdDyUWuxej5z3CVB4cuVSQMjVf",
  "key16": "5g12YVWYqM8uJwizZUXYx3ZWtyD2KiMXc361ubwKQ7xLkLxnB75Mzf4Qk6tkv6mG3LA4w3hJ3SMNffB736vpHbFi",
  "key17": "3NLQud2yNT6fcmgjuE8HA62V8SEzDZ6GV8W4qMUFzrByK4Q7CgfUcj4CTxBPBpBtqptzUmgUrSjqWFWWxzWUsBQ4",
  "key18": "2mv8LD3mASPSXLk9qRjerdjD1YKuhmN1R7RN9cqETJZZEjr6Y5LqEVVjmhnEsEQWTQ5Ce4hRXwZPoNcTLYEJHRzD",
  "key19": "3SDvBZYP4Ratk6JQmia65YuJoFCVBSgfVx8fHnDySvZTdyGqvopBpEjNZ2eYcRWci7TeK9xkWLtHbFvrRr1euyrJ",
  "key20": "4onbC7TXmyYr6gDMdZm1AxfaUsfta7dQBbHYgcWEowu1Fp6JimqQsB4KNm7GHjkZkKHpsnk2ifYSSTYHg1Mrm63M",
  "key21": "4yVA8ygZCoGWYAvatq55QQEhxdP2xA2xv9YtWuVaFHy6tRgFbZw6bT7aicDDitJ5RoUFEN3NnkZ4yspfSyo35as2",
  "key22": "4wgp6g93HFN8T3GAPU94XUsN9MXnXNpg2m9BA9EkLuhnz99PMhVYYZDpad3z8v7uDSov5KYa7oBe63CjHFuvmeg1",
  "key23": "shEKKV1XXHr5Qr1Rt1fa6gCQkNX25i5tvvZb7CEaXCyYTTACZoP7sUhnnSyrCQbvxXoVDyJh21bT1Fi1e3U1rRX",
  "key24": "3YGw1hjzbuXzza2pnWKspxNw9NnqGnSz84Z61m8EVCneJuFa574Y7tkNBU7HNbjMFt7AL6Nn61rQCVXMJwmdy45i",
  "key25": "yvTjHb62j9aXMULgPMRtvPGtghwTYfbVnM2mQb7mxSKiV5Hpmri2aZYtpjUsvGdyA1Ye13g5cCX1A8RwkFWdV4q"
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
