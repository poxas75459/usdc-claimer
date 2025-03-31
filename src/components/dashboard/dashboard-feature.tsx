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
    "4f1Rtb7nR6i21jSP5yD33xDkCj6RdaqAKEk8jCGhxg1tXBYFzXZnTVMcykBw3CYkYVsX1zW9DroddDeP7Z7WeCMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27KQhH1YPqVceSv9KDKGkpvKJG389XEzs9k9WJ8pHa9SwpzwNkNM9zhPG9VqijqpRTsfv5cd57JFCwHzctQDR1mJ",
  "key1": "4pYVdegNqKgLc4zgShmQUPx146VhAuiJQPHEMeYrYDSKHYVyccoDWCPggsd7eMd67buFxAYSpQjZsc2nAFgGxawa",
  "key2": "5zBpF9EGbonoYbFcpxZ12YaCGWaCTZUyFCsa1LDGcpyqwdjxoC9u5tUGg7TpG7Mnp7dwsP4YUawbBmGf5LTUqSFC",
  "key3": "3i8vyBPyZgBLqcQApRqf2CMi7nCrS8hQJDKqyPPDze7yjaXnH4AEVPaD4o7JvcdCRht9k2Nd4ZWnJ9zHU91w5mcm",
  "key4": "U22jurUbMeRfjZbjsu5pchtgqDB7YarurYsaxyE2JPZG8E1umYbBkPUcqtW34U9zcH8zMzUnD7zGnHDE6Bptp3Q",
  "key5": "4XoAL8eyEzw6oKahywJxc6UYtui8ESzNxEb4Lx3XV8PCXuZp7Td15zmqBMYUkyjwmhkvQniW73kxQRq7b5L1wnYL",
  "key6": "3KUBkAXkVF58UExaSCAKQbs7JUYpsNiVkfd6GaojygF7EQCuo25dMGoF4RVsbeDkTd9t2H5VEPT3FqReD1RweBb2",
  "key7": "CLLDQTvAVgdwP3eygmr8S5wqPUoQVoqHfa5WM8EiraHbvuFaYz2qfUMtZfwX7NMPeMWVpZbiiCWcN6bXwKLttmG",
  "key8": "4htG8CFiFoPbjeHY7GUjgcCRzaQ6RZFAiJtUazJPAqWxMZveDwMz5uQRNNo59AUhvxePrrEKV4ZieG6qoweAuSML",
  "key9": "5RoUgThKCLAs7Rkikz56jip73bSKkrY9GKLGcJAFQPQXegzSCWdLsHQijTCTarf13Cce16UP7aKqCeazC3aZHk3",
  "key10": "4cV2M8wiFyeYfiVJ2q933Jv2BZkSkaKcp6kBLxqKQbhBqd8ovVVdbPGR7xwaUuWq4WU1cFGqkFrJJER8zkRh822u",
  "key11": "2TsCnJ4jnTpPdGPRyaSpuYUKf6NvNbTvqFS63mPkZDV79PKfygLLMaJJ2kytPhuMy9oP6Zvnf1DPw7j2v9da7QU6",
  "key12": "hMTBGmfVQMp8TmJ5WxfXRA4oBKGtfAZiPocPpUthM55c3yKoHhQ2SGXBwZr8Qby6NBTVb6WZcTUQqmGBh4H5V3N",
  "key13": "hwFYskLk8bRaL13sYPkMC661JSdAKWQyLweeqN4BPM8HCrRDYHMzzVRyt9Ean9FNGifTwp9TQVtBJ2iFMUxaGKh",
  "key14": "5wzUrPA69zhk87bXWktc5uJvnMP14gSEC4Zmf29QvrPQuUB1ijmP9Jsyw651t5vYaxD6gywvLLZW9ZeLdgbxzGoP",
  "key15": "5bd7TaGD7Wnsj3d2XXfWvfJaqhyQ86SqBc4z2Sbo6gxqTvvESqzZaRweZtC6hkSs8GCSjWGP18xAgFxGENhGAnjS",
  "key16": "5xpgGk93ouUdpuEfHTQR6JWawFY7LAdFSigKxMPcT2VRtJihujTWSHygAsrppKD9UdtsJqAT4LKCqzkUCNNMFC2V",
  "key17": "39e915ey2LGoFQXoZ3B83Syk2T3dfeDE75UqyJLPNMykZj7nGiBgrhV7mtHqiDy63FodVMeNWHuFg2xKKjprucgt",
  "key18": "24iRKzHZQ63ZLRXnWFhjhLdGxQ2zCQShDn1ZxRKgAArFYSEk1TP5AKcLGq14MNTgdD5LHEoVCDtL3nPwfEas3JLr",
  "key19": "2cYXczGZuPcV5fDK2dgWnR72g7owvZXgrqR5Ae1jxzukn1u71E6uK935MasYDtge7obgkNaupgQoD1Dxnr2b4uTV",
  "key20": "4HWkUvdu5gQK9NUi8ULPNeQzBH2b6cd67wuLTkPuavcqdyr39ELXE2YmzwzwhgXd1RU5pHSS9cQJVovqiiPfnhDT",
  "key21": "2upAg4VXmNdPwVmh1SU72RjPfWgYnB2fwmU5AoWer6uPDTyfzAC3fbZ5qpfPkSmu1ip4AEWhADZQEotRUFgsKvKY",
  "key22": "SEsuFMH9DMnVPDEN5gmyEVg7BBwWteaa3LFeSrFfALzrdHs8LG8obqYQ7phJun9vPfc6h4WHs5v4bQ3FtVb1xHt",
  "key23": "2xNDUHHswNRUUWHRxJMYHVgnc4Ebzd9P9jaPGn7gvjb6PSeb4y3SLbkgRbVKTb5f8qxgqm1GKjhQ6wkpavJF6VFv",
  "key24": "5TNyMXtp9d8xd3XZJUPn6t5nyN9sqYHHZaLiADUo9Ls1ZeJBQcpbzsSEhMxmAkGivXpeugPi8WUCiyPxE4ajRFk8",
  "key25": "mjCSKXo6N78jAz6HxyHmMBbKcXDwDN5uCLwC1GpgYPad1Ha6L97vFm7W7FE5dBamuHJwTq9W1rTFNgCAo1MFCKC",
  "key26": "Sa3gSN1CN2V9131iysTzsikVtPg8uR7PhSpMpQsfysCbaBZsLnF5r75aJWytYCAk7h1JgKKnTowxwg9iA528tSR",
  "key27": "4MsYEg2eMHG3V8Qk9ZZ2ifJRNfV2kKb1w1v8Fpxp5tNwVc4ubmgY14Zx3ddPBw6cbYnrDCenfD3nw3b4NtN3ECVH",
  "key28": "2btRsce4oUnYD9jn3dVdS2swQ6593DoMCBqYwREprjjweHtop2a7dhBorAabtT46akpcYnC2xVb5PiZEmjX4roJw",
  "key29": "2RAFuASQpFKm16Kc3kamCq7pUcXmFNwbpk7u1Ad8aT37UqFNQULYxYNTAFA75GJPoqRVV3e2PNfKwifpxRSDEuDf"
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
