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
    "4ZqQ7MWjE7v391iwvHLbZpcfR1yVpg8wyPwicyZJbpKFCwoVTwS7XZZb3cetQZMn6i7b3mNcpSFewTgTZfHoenGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnYpMgMxZAAcMYuYbKskbCdQxRW8ECdu2WxLGf38B1RxBTttULMdEG3YyRByYCZHtPQwHjjiVjf7tyMjgWG6FY9",
  "key1": "44NV5uMcGgUkBoxUiM4xwdRa8RxXyDyVTCRpgue4GTqg9fkvipATru8dsk8jcNV2Z7BAufEmyuMPAaXqHEJ3ustB",
  "key2": "5ozb3B2iDjdPXpj7Mt6ERAnXxsAbUFU7vva2D5F9T9S5NBwxzCxyN17EeTa9M854Y8faiVWus8gGHhn35eCFMpBv",
  "key3": "4c1UqJHdvELaS3By6A9gDyUVv1Ck2t4NzmKTjaUDGwTM9h7KUuiZvCwmKUb9X5aS3PFXiLbASwPs1kjoQfPtVP8f",
  "key4": "h5PCJuqAzpoFBPaZBVDGWeuCVf9mYJFqT67v8NHThPEAuipv7RuD5DMF5k2hTeyEcDe6dQsTfKjtKdCgRayuhF6",
  "key5": "2n2jMR4UCw4KEY99jcQ7Fbpkv7CCHMWqXD2Cf7zwJAriBsyx18kztpbZiGpr39iJ1wViFpxW1pGUhwiLaAz2gexa",
  "key6": "5ekqFkf7nDR9noJT3PCeLZF7SNm8r7ySa2XH3RF6uRq4kgAQaTtuhwGrAHVCkBFdDTbSCfz12R2Ki7dRuk6VVmiu",
  "key7": "67cvF3EEFy4RANDqYo1LfCezxjJw9ZPnSdZktT5DgxtK4uHsiLFQ5rDeeqo7J5euUX7i9p9SSqXiwXMLWLmovHH3",
  "key8": "CSqVXJ8s11FKVpGG89RNzWiuQE3xarWXK2JhX5B4mSuetav3NzHzsxBN7tj8J687fS1vR8QqAqVnFNxqvnDRNAb",
  "key9": "5oHKh3knTo77CERaKnydncgDqYdLrteckhGom7ZrCS2bwL2rwgEiSiFdc73kZZzB6sEu2RP84NqZB5NSqKiaudyg",
  "key10": "4RSKeHcTghXtEcVKjd4AQucHYPY4NpwgJbYpSjZhr93T4zJfhd9t5NGJ6wFUydkVH1Uy8rNmGCrixqEgvFU7MUfE",
  "key11": "2xJLnDRm2hHvyXA6QZNifjW22CpYkZJtKFHCcCDhWDn7AtgsSqmHfEsVy7Siy1xoHqYWtWhdcbK95bm2phqBUwvy",
  "key12": "4jKv4QM528GpiXjEy84zbBg13vnBYfNCFKGdDYQFkqa9EFqyPD5LB7Uo4NFpTuxNDjKnkDt6JBR5DwHtM2nJczU6",
  "key13": "4fB7rUW4qhygKE19a1wkyaRo4S3dukQHxaTjwcvHkE3dGshPM8D5SX2NpTo27FB4WmfMNa38sUmDxTHsnRnL2H3D",
  "key14": "311orLu4AiiupzepSkz7R1bbhEfZW7j4FRHzjQ65Dc8UyGDSZ2xQYYRrZ3EvQexTqJcJQtU3KGTuWfmoeFT58tg5",
  "key15": "2VrQiS6DNTtFA4jN4HioBQmLMVrs9m2tVu7961P1RhRF2GWxG2p7juf4BrCdZryTw68iaBcZ4CWBfiRVrGHrTAyH",
  "key16": "66Nh5Cji6vmJhjeU4L87tBxiLFtasuem6HUGHcMtqgP3BgF6v4Fe1vq4dCmqQ732PsZxgjZyj7zWMqtax5cYGo6V",
  "key17": "RbPz1C2MFJxgwfpKN8ek7MCmHsDs4LJGGuJwp3ep7i1bGf3ToN8phEcsYm8g4kSA5FCXHdMvrdVKVTZ1Knzjt9B",
  "key18": "2rNRcXEENi8MaPo5XK67zBc4ysEX2hZgM8xcYzWZKqpBbnUEixeD613bFRTXoNZtQC6ibjqhQPjPmHiqqXwSy1VD",
  "key19": "3tGr47QqDJDCwkuWKDBmkFaMe1p8gK8y37bq4mtPqweevy6m4BkAm3fF9jdTvBLDCBCky67U9hmmc5UsGBN5wFEN",
  "key20": "seopyC8CeASGXypaw9kwBsypYnWWnK36oaDavmUqW4Hsq6AoXoJLGxZZBURhuffU1E1KYF4HAYkTZHZVov8uq7Y",
  "key21": "5NVHptoQGbM7B989W3PW6jXXgcbMo5F5Xqxo3M14TjW7U2MnxLspJDjgdoicHu7WnvDuz5P541Fi8G233zx3spow",
  "key22": "2iNDDKmFfBiVmMRBkAk1DL66vEZKT8phLSaAjhGhySTxBe5fUrFkTfYy3WqqGaUnQVv13NgdXp89bM3FUyX5wgM1",
  "key23": "3rmmfAZEm6jYJKqb7xhzRHGkiUoZQb8EkAVHd5wmciXCdDGZS111jfm1xwJiJv6nnAnpQoXHgi2UGXw15R6SQ9nr",
  "key24": "67DHELmVgq7LBeSnxKdapHWWVfe9ziPjndT2ta79janYeowCvTnPSurtZCqrcWrHRmUqYzmuo6UVzqXeXThRCJth",
  "key25": "yu3FdVEuY7d6LqqA1MPd5GMXum8L9LswRRttGeU3mc6vEJRr1hSwUcAygjrt2XpvkyAyGTwmJjUqUZy8x1sinRF",
  "key26": "4pN8mPRKqbR6QBqN1p9RB5ZQwjb9rtYBRvA2etZYkzfKX5S2aqW1HLu3WPaphupWwMny2hKC3meE9AHR3TiW7bdW",
  "key27": "2MpJEzTWiGxkxPDhAc9Zr5fddq8V9w9Jcxe8udB6ztegMwskNhhRf4WyMfBtgKZXEJ2L1iXPJcpsiBSdSCaAnWhS"
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
