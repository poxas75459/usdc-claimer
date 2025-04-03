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
    "3tWWHMpm9VGuyYNM5MmFYsrfWSRwBMXa1WDiW4DheP4zMsecqaa3AAGaaZ5bwTPbadepmRZB5g4c89gUi7trP9L1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjT2c5jm3XfQU7aUjW8WdFSy63jQ79N2v9T8A1p7pNJytXVvpn9ipLSGTMdzs44z8qeFYZvwZ44yhAfNgdZ196w",
  "key1": "5JZUNhTTrUqcyNXRTADJFRELwUd6AGjmPfv9mvvEyAb7nCN3a7ogrqvYLzRB25BJhomcWqeYimEU75GPvFVqCbq8",
  "key2": "3JwAfoa2yuKVYC3cisMVusX1botvKX1FdxVyJDJ1Hf9A3jRyBRC8BmDZpzhsHfv9v94FdtqRkrX1MrArpWkWbCoj",
  "key3": "53TChgW8PZDeL6eynKTN1URRYAL6pe86Fq6rWvA7Nm6Dsb4cg5vbz3T5X9i2LQHRYHVjkam38dMPss7xd3tG9bSN",
  "key4": "2ZjXyNCp3MMmDnLTWGZrwURNXvKaAS4wDoxo2jAEDGhrpbbCT3HU7GnZA7eo2q4G3MTUnh12kvLzLMhpQbVjntfw",
  "key5": "Xhosy1aLqRqUgFwNLACnipAzE5wRkWNtRCkLU76fNtyAndWD2p7SgA2S33snGorzgngAYRpvqLDMuViU8xEyCBu",
  "key6": "5cYgjAQwaG3EXV2JsbzqkKftkfDMbuLbitPJDq3DYf43nm3oNzF3rT6HVFw1TgUTsVCfWvuffF8ZK25kApb8Ey1P",
  "key7": "37jZBmYUgj8Ssx5xfxy8yVmYbbSLK6Ns4SN4DpkzyDzwv4VtiojPUwXxAsHq9VMjK847MYvCZSjYwcqG3pkpUBa9",
  "key8": "29KnNurspDVMFkfjKUnkPWcr3UckDJWrquuLr8Zb2bnMgSodNpWmJK7bTwqpqic5R13ZxfjJ3Dm8t7eAGezmVCcN",
  "key9": "3AYFPFEmP6UnWnk25iiQzrfTM8uFTjRYKdFv5YXtJ4wCSyc4vyyJsLtMbr1kAriZYmn8fgxKyRn8q9ig2Do6Uh73",
  "key10": "5QjmF8JXmZb5k833ooxudQmfc9z6EaDBJGR8pfF5k5Vz1RQnvBmw42PYbfsckapm9bb4oX1H4pEi6X5X8wq1h4Gq",
  "key11": "5PrUVMmDNhLzY8AbSM6MK6kzKMtrJqoFtKoBoYhuXC4y7anJp8m4wRyzURNkcjge8rrU1y5LsxqxwBZmRmmRuktZ",
  "key12": "LfqWobSCqznXTMG6Hfd3prd8fy1uMKV2nJfdDEBakjccSGFaRVbL5kvR9dCwALx3D9wfNAMWU31gwziicjscMS5",
  "key13": "4FrsCkJ3dAx9iVcMa1ta2fWsedq3GcsBi6Q34sdDKhbMtW33W36XeHEidD2UVSeoZwSTgmFCpSkHVNBBzP8VRKaC",
  "key14": "3QHjW1KXF772KGyPrEk5jmHCKzT34o2pmyBGQp6UtDCZ2HRpMw54sykxthM51aSJSyTP5mnxSwJN1TijFdixomup",
  "key15": "EQh8RbbTED61AT2vZ2mmXHDB183KXyo22S2MyNt6KcxNy52xP7FqBVRXw45bXRzBkZx3ZgGBKHZpvRPpQ9fAti3",
  "key16": "46KNr4vr9SpyScDTeRZWiy1NWNQ7EgDpmXriY9uCiqXNGGNPma2KaFkqPCMtWWCbjB8iEvQVJw3QpSDkC3zQkhZp",
  "key17": "5VsSUJYnoJEg53zMcgrUudQVupdLmEEwaKhEnyyvMD9akYNarGubKWuKMNignnjWTC4Tg8tU19TF16jsevT9Ho3T",
  "key18": "484eftvqLBGM3wuthHuWgxQyRviD26NGvUEuvNDQ7G9uEcFt5sK88zMK6uNJy8gEDVqZznsUDE4hhhQAF6NvPiyf",
  "key19": "51Ex5xmGHUegqsxBfXW5zNcw8exahwKWYVg1iXuLxbaHWije4TYi5qZFs5thQQTTXRx57pT9WePvrjW7p9LTPybF",
  "key20": "M1CjBm1nSox4rWhkbrobTzoN7eHZbxboSCAudL1GHPNtwEexryBb4yXLwcD56KYT7MUPe54m4fg5MsgaQogTu2L",
  "key21": "37ntnAJcMUtaXDw2YpMWneYo6wZ5tukA6oqiXVvRdWaXdA6f3KpH9jXSk8fhujg1Ps5axY7Yq5jVa3ynGHNr6ay4",
  "key22": "3HGY5qXRM7B8bRJqd9MH2UojNg1TAwmsavNCTYhFU1R5GELGoZJThFLsWjvnWUhV6kjQWB3jwvGVfRfnzxQa41EW",
  "key23": "5VFiwUKiRVGDGBRH6ZfqAaskuhCBxZjZumd9qQ418RVXzEHEoAUpM6ibhbcKZQvQYSFro4g65zzHYMowx2yhMB8G",
  "key24": "5Hfzp6E4aWXLqkLHJNTnLpN4bzJ42bhoxZkX4nsh76sn9Y2Q4KsfLRS1kwkLCRr1hsetYe2XLb6VECdbhemCAgxL",
  "key25": "3NXLkfAL5TBkzHetLUG6juQpqa2DFaCJT5X2op6x2S4HuZJ2J1QHfEUDf1XzeAX8E1iLE2qT3FyPWepvFnprjyhj",
  "key26": "3VVVGLCvJSttqCPzjA1a3T4mu3ELoWjSBKZByJaY9v4iZixG4ZdJ2956scikNTsRmmT5yaxQpT7fy73pUsFpAjHX",
  "key27": "4rGj3nPDA2o72Fjwpsid1n2Z7b6qZsEkfjituFXui1VCxuKJN2zRbkhtrPM8YWRRhtQXkMVnJErtUejkfDUZvcJg",
  "key28": "3fmu1j5QqfByLyMHRJVL9JYNhhX4JSdcKcDvEGtuvccVs5xxXt1fFbgiEQQ9tYAfvAvEMqPeJCsFS4csJZUNDGcz",
  "key29": "nHVRzVLrtXTLofhes4ynFxmYQ61sTf89sjkFhZ8jfTDHJvB7q8X8UxzrHQ9H4pj9CPGbXjnAPGrAGyxhyy9dj7c",
  "key30": "2CssixuLNgfDWw94jn5Wid89XtbBqeHw6x7M4dAjUb37WX5qqJCJchhnx9qbvVozfvHqHJ1bvYohHGg86hLGr79i",
  "key31": "s5Lw6MimfrgbwY5YNa14LxyFCfBd1mNbXtTUXXALC4woKZi3Ysaeq3eiLbmXahQywTCFkdci9EAWaRk5h1eoPuC",
  "key32": "4CMwt7gPAL39VsLGbajWce3KZZHqt97orzwagDTdfcBzYYGHRDuwjSGmk57GvocbKwBUfD6SX5CWUSNiwUYVTXir"
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
