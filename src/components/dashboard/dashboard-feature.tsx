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
    "2biyoNPVACFC5bdXdSjb7qKQN9Jog5rEReEGTk2mwp2zss71az6eiJnHPoziZQWLoGYgmsBiJ9yR9VATHx5eQzC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbhPB9ZvxdGyWum5LjbyfpFGR4dSHkSCfc76eGKzySW13HD2Bn4eZYa6Aq5g6BHFKfDTcNK7MF5i2BMPc1XPG54",
  "key1": "2dSv9pEFCXwYkHAFjfwKbJssEen62rh8Ar7BVUtQa4uSrNjPvjLWt1BCV1bnkSGEYeWtEYxD47Rk9EgsjMM5CL4q",
  "key2": "4dpcUsWHKPEMNrnr8bhDY7hiAQkeYnxQr7thR639VAze6L27NkM7h2ipTYfMfsMSiQXZYcnzqJeXZrQffPWELUHU",
  "key3": "2dRyXdeKPyJKLKxDyU5Aqq8W1deN55fCxVWFGin6RupCgB8qb8KMHsBrKDzP7DDFaCKfdRER94aZoUnHaFuRnFyo",
  "key4": "3z9yFYjS3hSVm3RnFa8sMMn6KY93ZL23dJZmquonzPLVcw2vEgy66MKpR1BdoqPpxQ6E7TCgZoKqFcVkwpte1qjg",
  "key5": "5vEweue5wkmLygjfdmRAZgf3DkD1YPCmwUnE8Gh7c7voePSL6bf176kKiCUvusMNhVHBtjg2RjQRX8ABipYynhCM",
  "key6": "2GpQjhD22TMd2RYzqbEHTv5oJTjeuaz9P1sqJbzM5bBZDh2XrHtfRYV6CUznpPvbLfqPPhiwNH1iuRy1boopbaB5",
  "key7": "rGVFvWnFbSdd8mF3qTLBNCnx8nhS6ucNb9NfhN2ZCu7YffJhHVRfgy7GnWvRqWzRUFMrWjJGrvutdobMzvDuUGc",
  "key8": "2gLFyLK45QRfVMd5FHoP3c2dsVCujEG6SPQANstXxAMLGspmgxcY8bgwo3o4gm3yJEJ7JBB3Y8n2KhztCKLdqpNC",
  "key9": "zKPnffj7i4Pz5snLF95R3D87uygTNr5b9DGxGARq4heHLeGKs2HxCDi4FgKdwSnKyUNJF3TueZ8hNXhC4z4WoXy",
  "key10": "4m81BivtErJfQAnhNRaY49WLzzYs1tD2cxE7qynS2hHVS9X1ExSMxJvDtjU58W6FG8HEVaDtfTZ53hBXPtta9JoM",
  "key11": "MEr7jXyB2ULNy5NCQRkkdUQ1YwhZyTmsSzU9y4rJ3QXETnuxWFYDvEiswhzj6ExmtJbE9pmowaFuKTUgwvWdWkd",
  "key12": "2ZSTascwvXabjX7P3ujM5xoQmroXS954BDCnQBVFRSrLKeSkMadgzNwthT2b3mwdSuzxXxG9MHfyCg8QGNjrLTmT",
  "key13": "5oASatk5rA6U4KRYC47i3aZsa6X7iqaoEQSQd9gRn9zYS5LytpwaWumacH6z1cCTFjKh4tFwLNaazRUN5fCXT1iH",
  "key14": "65whGEFT7nYk3QCxMnQ86PF75j1mWwUuqm2jYE6ybuejvQwbmGgRv7QYqbDKSbhu7tsKwkM55neVQSbk7NmYMhtD",
  "key15": "36bfjZBAvyvRzq1CetokPrDG76Pen5vzDU6qTjr5384LAjzL4yimRUBB2WW5MSfVD9d1cdqaXNYrEUTLScFVR3mb",
  "key16": "4MPmr4v5DCjvR9An7NStpNgHdCP7RKW99ZbWi4V42rgkGLq5Rtvv4yje7ddNUWeXskUCpvCJonczW79JKFs6zLzM",
  "key17": "3ZnvS5iytUXmJkDU4eoUoepdK7UqRCdei24C45z9X37sLdkFkWVZiBaTThvXMtyveNkE7qQjtsFhURARhJpmLqbW",
  "key18": "4rn2mnjH5es8Q5Dh6166VEyz6rSC2EG7CVrAFrwC9B6LEKgqnJjvbu2Fo8mdyRHRtcU43Wyv6yTehJwt3S9VpEyk",
  "key19": "4ZtHw9n2QD22J62t7G5sMAd3uDps7fegv1rg6gnxBgp81ShKzrsRhGaHU8yaxdG3pBV6yy1wSNW9xjykW3YXgneg",
  "key20": "27ztsq1cPQfQZK1GMTEwnxpH22KJRAsebbuuqyeJXpJhJp1n7wpohXD3iki7RqfDTcQSJkK1ua6yRjsu5wXYGcQH",
  "key21": "63QYYfzUsZXVwQDuj5oqKicCqpQSAKL5EC1VpHwuww8GrDe8j1oJD4kEVp1LTjvAZsFAa4G6VfBfd1WRLBEKhjcL",
  "key22": "43iN2uPZQATpjSXahbTGkHvxg17x7pX6Ptb4TatW5r4ZaP5oBPYPtUan1ySj5pPXHxdQ7UoQZYFHm2t78WNc8EEe",
  "key23": "A7iCaFKNqUbKgPNGicyNNjLYdU49jb62tD75xQZWzAyeaP2hgzNBX8pfAFGdhaukjBYzfJx8eixh7kpLQPfZe1H",
  "key24": "3PKBgjUY95bzxhxu67Fhd6wavzqUuur8wAZnwi9qLLipTPNNNPEnZMANs8APLCRGFEvwruJAn7VmnHVUNjMWvj6c",
  "key25": "58hh4RnEiYCsQnTmqTFZiJV4jZNszeribgRW59BBN1ihrPCFA5W5UPctLkScs847QuomqvNoG85ffz4smXoAEAVr",
  "key26": "3sHgsohUntx72TgkEBzNJx4XwsR3fZPL8CWo4WNF5T8txXHQuBkmrRR77ci68J5Zs2JPR27kkxT19kkPZqMqryoi",
  "key27": "4CpcFXDwDni7HKT2RA57QC7Bba1Huqem9w7A4cvvJRLbNjCD2Wx1mQd4bWKGWVrKmTSmnnueDdHez3znydDi1QDU",
  "key28": "wL2A2tDroBMgMhCGWUQt8mCBdtThJ6SJsqF5Zb4UXtCnWDKbV4m73uVSbai96PZPhna2M46qtnEPk9LNdFRzmWn",
  "key29": "3GUkUczWey94ZM5EANGDkTRHJY8rpfPT8vGNzKTuKqAQme8a6rG5tdqXsYpW4ZnduZnn7mtCvwaVL3C96SQQRSqy",
  "key30": "3SssnBFPGCA7Hbn8sa7DQhDZ2jrbNAt8oXJJxosNiYLZRgR3b198QVF3SbMnGyzS9TLx1CQMXzZehbeXbdy8eoMx",
  "key31": "5mron3sXGCSufakKas8MV8YbdYDC3MrSZWXYHtxJDrtTM4mkhAhwkm2nccqqLD18oG4VHKx3Tee5sBrfaq6Jrm4Z",
  "key32": "52rVQH9wSbMzhif2s6QCm64hbPQ6HtArG3AD9d1mZj8SbcT58ZsaVLCYpTu75RpU7C8Boip9rPtZzDvsnVnnPxKQ",
  "key33": "4ghSaVn883jLdF8t435VRLbRWaovmBsRRYgtYyJGDUPM7p6qhTwyX5y4fEN3R2h7YWksRhXjLnJgRz6kEiBXx7Q3"
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
