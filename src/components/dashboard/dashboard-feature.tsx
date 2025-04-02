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
    "5RtVCjibW4HVMESWobSjvEHsujoQ1kFbQVU2ybFMkjkwZXDYpiUyzUmjcPLijsnY8XpT5MnxsMrnpjjpufguCDqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDAFP1UKXub5LFR8cgz1W46c54ze4fbsFbRPVdcoEKJ2z9suQk4ZmreMNeXEBu5YcFWwTK5DTvnbpJCW25nf7dp",
  "key1": "2wvPdfFQLa4P9AcX8nvNb7HPGK9KvkKmsocxEfmcAoG9eAaQyxmhaRw1cvkdd6G4bZWpwmyPvvsMxkXhjumpCKfo",
  "key2": "3R18ZsXb4yyuqeSGRiejvxWY9j6og59rm3dJA6TLDvJXrVELyifuNuwdipcSu6ZyveU4teyQxsRbrUnQbtS7h8BG",
  "key3": "49eRwJAhiKihcUBnH8vCd3RiyT4zcXvoamCtnizC7V1FB9FH9faiHruNxUtVWBD85FuLvG3LXffLwpscLTT8eNWp",
  "key4": "4o8W4Q95Go6qo4XtRVifza8AUvzQGJA5dQ7kCpJVryoRubxkyQ5kcsMcKT17CkE54eiudfkvHzGHCfMz94hRgMsk",
  "key5": "5Nn1c8tuhvMouwcqsP68CJFmiADECPA8hachYb2Qq3LMRF27AZQpgMxpm3H8SQaUfXi2XQNiSWHmKaQ9Z6eFh3t3",
  "key6": "3J88fG4KzcjxjGTcKqy7AzZYeSiGX8qm8J5k1aYikRqP5bQUGXBpj7m9y9tespUJHEXbPHjM3ZdZ8mDsdgepwMtp",
  "key7": "3uxGCTZSeEZqysakXHeq7EDPzaAVPHXsFpyZhBMMWUz4itcNUHmcuBriufQWT2YE2dLi1o8B2boiKD9q4twHJbqm",
  "key8": "5UeZnotTkLFDC1YrVXyJShVgqV5b7YEyJNTHtuTdmxLoLJpvBnU4Py4tA1zkxtkd89ArUzgqHoYBipTZ7nHbCFau",
  "key9": "pXAMvaYaAXG6Q9DKqKojuetHYiT5vr3tEGteSaVbgF9zwryQHeCK6YQ1rjKLhcwb8z5pHEzsg3FJprCHKappVgR",
  "key10": "Ze7Z3YozaFFWp7a6Vt6SUUXhc5bWHzAGaQWEFvutcQ3HAtL6y2j6tvuJSuDRNTPFFtSDaAWin17rjvNfWqigNoc",
  "key11": "3yQ3DRj7Tux1BytiR1um55urY6cgU7gGfNX7UXqvPdsTmEL7xyzdVaUJp3no9rWf3ssKtCSBSeF9odWc4bkxQNXJ",
  "key12": "N52h2GpXKVErnei9cxXN13J4PsQMY5aJaj3dQN1hYFpHqSU4erMwnx5ojnKfFQGmH6DksnWDecSbMyuEEfKJ9aM",
  "key13": "3tBZGPYFSrhamegWe9bFQgbE4QCoGSDTKezdoSBT5rVXfvRp56ZBGJbEstj44VEpfvU85k6mcsK1M4HMuYGNGBpM",
  "key14": "UDUvy3NsHU6JbvgQR6kgQMYbiQdiD7CVi63HqkS8E2rsAxDMan1CiFdo9rooWDjiT5NqMw3DcAtGXum2xRcBtqB",
  "key15": "2wjjwzEP8qBYbFUkNwwh4gPtqAZiVZmaJqgetyAW8psDJ5RNgitfkxKkUCmCATPeWiMEQabcYiBmUTND5abJ4aMM",
  "key16": "4J1dky9FnjudYbmjvtXunukK8P4KhRSkaNGxe98dAVSsiv8S2X4XwVppg8UfMLoo8xdwTRmeW9JASZg7bor79EZ6",
  "key17": "4Kt5PcEADrFWkBoaPRmFqQg3Sots8NcNgbDamxbREnFUcHnZmYVxnNrwEhW7Xf4QDriqL1fkSLhVR5RKXiy53Wy9",
  "key18": "5wd8bxQgUZRXhd1wWe3jF1vysvVrcau1XQbi6ooEQchZCK2J69NzCHJmuEfGoYzNdqNp4ooSgwGPXugUbNX9DY2A",
  "key19": "vfiJTQPoEmJJXDgGYPfHzjAHUvVGRoRwBXYaaAg6vEkgy5mbDcJ28VFrTLgQpKCcjrw33feLSjaRE3pQMq2HzK8",
  "key20": "3NuwaBp4na17tJvazLWt9vkLFzkrb7vMU7r9d1SqZsDoxnBktWfTvAVR37mrCjeU5waUHnZR3LMENCazj5rHzQH9",
  "key21": "2Loa7t4EiZjLrUqzcWGAVz4VojwN4g2ZmNSzSsnEKrnDScAuDt6DK4upk6hb36GJkGaKRTKyDu498RPpN2Rz3B5V",
  "key22": "4AzUdqFN3WgUZLRbZX2h8jQAXCSvGZUtV2SGTp5qN9nSZadh8QHEXqyTjVyvFmRVSE8UrbGvysbdZFQQEg6cw2Eb",
  "key23": "3GQeLc9HHcSbF4F7FrgZfKXenGharYvpnV3dA4DoFMYdWVmKFiRBvDkYL16CxE4qQK4ocbisS62rM6DxAhsURsid",
  "key24": "2pNZ2vGe83G8LisGJdAehcEh9TXCUh9BqU5h6USWvaG3vgt1gJSXpU8GrA4CVt4ddcge6kakSVHJsmXHgVexdXBu",
  "key25": "3vD9YZFQWioMNuwbPaTGkRjzyTqCnKWWU1wjC72JUyzpmqmQnsXhaN6FwPYJxLCR9DrfwFNGXmbhBnFSAWWFmzGF",
  "key26": "4Xo5yt5X3ahV2ZsSxeREhe3QS4WLAGLEH5gJQ9VetcTqXkBMqgThR1g4KPiEGV395B3fDz72XGmmP2BoFkLkbD3p",
  "key27": "4AYVK74KsjTrHnq798sXJWkQf5RUCQsUZAJLztFM1CDzW1UsXcfxyw12NoBfdXpqvszXnQSTeLeS6sA9zyCpW4CX",
  "key28": "5Qxyz3da1eSZp2yDpJb1d6ptgkXoCrvM2nyTNCykbQF271QS8j1M2qhMca27iag8nBWFaZ7vgMCG8ivbWgWVvpDp",
  "key29": "5RGaAzjT4Cu1kp9eT1yi6h6qKaQUEBcoT1MSMbFCrJW6uAxmhPJN7V36M79XzQAqz2LNqVGCPMVMM1fkmqoNqrus",
  "key30": "4mBqGUx9s42tXhUji6R94SXmGBHyBZEsiqrmwHnPbcpGY8NtTmLa8bxHfTAxsCskdQ2Je3QJk8UMFRtJQjtRMQap",
  "key31": "2462wgwi6DoHmtU4o5yyFGoam7XR7EwW6DtJvqc8vtLUaVE5vfPqYvaZ36K86FHQCsLqQmCS8SuyAozJkutQSBJk",
  "key32": "2nSyt9hfNzuanppYbfxKtH8PtwqFx2n5f1XnD8evmxmBvAjBErtvNNMdNwbV4bDk5QYuGZANbsv1xayDePwuMg55",
  "key33": "3xqdq8Nz5ahh8KEoA621ZPXwRZMAFHDHSeBVifD7b9mJnxyFtyUA5C56VYVMA6wk1tCodfxZxGrAZaEbhTLDZPtK",
  "key34": "236wTvi5NKjAdtHCFUvw1aFRiZ8RJT3Ri6xgiLsQbTLfAohF5wXnH7sVwM9XPmjJn7M4pQLKZ3gWhcYfxFg6sFWJ",
  "key35": "43jATeP474TVGTG5hjwaK1K43QTd6c9UFT8aFru1MkG6Z8swruZrnTwpqE7XNNRZFUr8vw3c5yJRj3nMDuHz7JAm"
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
