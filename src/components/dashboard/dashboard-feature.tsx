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
    "3dR1QUp7TeSvg4vmqUw7hz7uusAR8ZFGhhw3LW4T6DregNq799hSDWjmS8NJdrdvNctEyynriPtm6GWY6QsbSi4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67S638sq5ii3yaG6FPVmPuLw3iPGWXDWQTSUPyF5Nsy7tzXUcqguEopcxsR21AcEXA37h2iQCAJb8URfZfW5Asdw",
  "key1": "4vtFpfKi42V3ExZM8dZsa17PzXECZgfnUpvFPhZDNUtotCBLNL6U5DS691eHySStUduibjQ7HdTTJrj22mxoBZKX",
  "key2": "2QQA9RMS9c6YJ3sacBTdPmpBpkSzGX9qz51SmLb7ip6GJU2SwAsnpJU4ece1dduJCZ5cZJsfrgsi2LWGmCkPxMoy",
  "key3": "3MFaPBLuPeYNwLPEy5Ssio63y4AaJoCav8qmHWsjg4uy5zz6mHGjRGf8czT4iVGGXcL84rvA2bH41g63X61ekvYv",
  "key4": "3YrwxHxzDXSH25hBcHNR2V8VpjsbBBfCnCoZU9przXGxtbqnXBCPQj3gmu2fvY5z6xfnE35m6sNUAoJLo2JssYkQ",
  "key5": "5fP5A3DXRe7Pn7v47zDyU8uychYCG1ah4vPhPAANHyP3yFvJ42eNYDuRTzKNwyw5eMESQX5npGmjpnXZpsNNxX42",
  "key6": "QQxL5boRyygm8reY7ws5LrU2LU8hChrtVSjynLUVS4RQvp5UQjmNQdjfXBDtoxBcVP2t3GSKHXWiMhAuwBSE615",
  "key7": "g6g6C7GSTqAA7dpJsmfsQqNNkeqcdFXWjpHqPDsc2EUdTpqMaj4rgcuzmnhwW8sxwAR1sJ6SpAux1pbRD1yzZ5m",
  "key8": "3ZJiDvVzmcxSbSq8xuvNbZGrnAdRD2QuT3VXYEad6uRzTUfcKM3wTATi93Z9Ffztwwe7qZiuj3Y9CSVjzQsffJSf",
  "key9": "5Mi4iiNn9gt25aj15xmfTtnFas73LbEGtxbVfa94RHf6rcUeRsQFzUbgj7ipqucH5ne3yHytj1nd1iyyX3TksXwj",
  "key10": "5SMcVUETXkuMHdNfEJDThHH5aQBWMUSkqDNTMdtbQ9EFxJSyzpHDuDJL9BMA3TQHt4my5gF8UuozhFkPqVMRgowk",
  "key11": "5NarMnFMmMEt7FMvYBVPoCmwnDsuwanima4hWhbWPCwbdN8hRa5SbWN5pXnxV3ZSaDuGLpuHSjUXXe8eVFxts8EA",
  "key12": "56ookghE9YrNNC523fcu18uTLoBkj2xRFqv74VX4seeF8ozginuTKVjsdcQ6dY4fuwg8qg28nBjtxcN2mpeezuJy",
  "key13": "2H5J6LQT4MvidWy9TSggZ7VLw14gcUmAs1hhbm7QCrJ5TESPDKrn3QgV2gniQ5pL7wuWSQN5MEDJ7h5RVomFgyA4",
  "key14": "4YyKrDUite5Rom3eRHS8ikiKkgr7yXr5knPYZqN9nNbJBin68oRNoeG3585KrRgzHY6h75QYQSDPzdSyPQKgT5x1",
  "key15": "gGRKnEeJxHF3HQPdtAMMHbjzxsHczdBV5uCP5e2RapXW1MUfa3364v8QW8zwo2uQEShjYGRKVqRHriiU8udUSYy",
  "key16": "4nEvLWEWo1iiVB2Y42E3ye9jm7FrmvZhppFTGi268CVGuyw3pa7BrqUXmNet3EdYJBNmKdv75DUGMQRksAPCmWdW",
  "key17": "2rQkV2ZSoY2AfEooaipQ2ZCupf1tMJrrBuH36zPGGzbSiWAMtuBdPM532jWAMBQxTjEjWdqwSKVU2eHhV98MpX7z",
  "key18": "3hzX2wW4ULBpY2REttURCXCpwhFEV9YqPrAM7SzgaVPqPYypwKeyNkuMzpZdYN28hnjrizj6oDiyGAwUxbSo9Dwk",
  "key19": "3asydDhKUKB8RA6hfnHyKEqn7vZqiLyjqCcgGQcbDhtMkUE8nhsG2K8cd2CxqXy9LmLH23avPVBv4RPaZepihCEf",
  "key20": "AbhWvxDuEzQT469rDNw13gDwJjRLtgJLqerVorbep1SsdbZeJtGYEM4a7fwfnNr6rCnSwugGJZpWwza7LudhEWP",
  "key21": "4eRxyTTonZ1zuoe8CT5C4zDsj4oLVHZMZTZRZgxTF7qSfs4iMaz5CXKJAcPud6o5NenzJMRnhkQCDh2UNcrhz6fS",
  "key22": "333YgSrTS3SxLaTptuusUNyxHevi2u55QfMorqDDyCrsvirVwSPWBEyu4Cky6w9dJ7AX7iE24cwodnkZqs7WmSAg",
  "key23": "w5ZL3J2t8tw9PFhkvmgH16tQLbSuwbAszUcpFi9vkCRq2Qu5qrnVscYbMQ2rNK6oNhCnNrThQw7QhvZcL6ZrztX",
  "key24": "39dhzEeLGNNJnrJtVfoGQqsKxszy9GKWXYFyvPhsDKWTjMKHYgqHUpu9pDqqBJMqD83nLJskaMyWwhqfmDymwwYR",
  "key25": "2kJrQvXBGGUJYQxksCMy5oUy5qTXJtNsGWDecP3uYxpwFvyPwnGq6ZzPhgXE5Akn4j1eUDQTrMLXSJKVZ22ZzkZ3",
  "key26": "azd3j7HzyYvBMPkEbNXjFJdkYc6zhHuYVThbmvYgfNJp2F3FCHKVvPjPyckbdCqgUc8Ndg3y3q1veSD41F8F1Xr",
  "key27": "aaGCjARFYSvGBWkWNWGLJxzmRUsbcP8c9DiYTzeGcMHZrGxhkbASzF3PoxAoZf6vKUvmVDtNxm9JC6XqjU2PH6q",
  "key28": "AcxftxrhL1L9itmtE2tBzrP1LMgvCEoNE1xmSaVZUmgw2nePqKNkfogPXEgHRCkhNZbkqYjEZnFQnsXbseWVGxX",
  "key29": "5YrDpwqihtxL3hmXevw3TEve4QMP9HMbzYRDjpbrt7w2xF6uTv3nxvphUMTRqKS3UVVH5sxqox7ACJ8QGZBHKZKK",
  "key30": "2kggkaiwJNLx4dbnUFwp8kEHquPkmu1Tn7i97oAcs8yUbR12LeZ3GsDb3x9aipF3Jev9YzSHTqrb4beZE2nuvWLx",
  "key31": "tKeQDtm3oFUaszgzTsyvVYj4ZNDBrEBq3C2kiYXQrU2KhN2cvSfUGq3TMtYDVKYqudRWrWQ6qoWyL19mHvpnbmk",
  "key32": "2697rEozjckrVsXZzdCoSrB5FgNfHdX7KaaZ7R1kvivSee7Rn9S3JkbXkKFT3AWJ2NApr9J8hvvJ6vWUSgzq9vkN"
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
