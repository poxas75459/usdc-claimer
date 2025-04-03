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
    "2H6onuHREFKXmnsZuJi8NUWNWj9kzicja2KnF3EXZ6YTm32p4D4nqu9QFExoVU8FbpWyQdQ2dMGi6hPVAUatXdMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ujDJTtGr4PDp9hQ7keekUUhzVqMjjenu9X3trFZnRDR89ifcxhgCqcUSZDcTzr5u1eggmvdgY4Lk5Zcm7fEmc8t",
  "key1": "53Xv9gGLnDPTs3kGdmPAfkjN1ah2GaHYyCN9Rrk3KGYcw1fpjsGfsEKb1dwstzEViX6714Nof97xSiSxtuGjkaPE",
  "key2": "2mYozSWTquL7J9aCNGQmzri36MSnkQKaXoJzeVfjdDaVMGjQnvx5CW128nWdaCAUk7rmjuZKj1bPFQarPkspg9ib",
  "key3": "2tRwUZAHjYJa5fLZYZmR4MsQ4Xe2ZwDkTeEGsQ9HYVDKcMTgjfWWNnY8ASZUKAsfUQ4hmNmn6F1prCjMCZ3hTSWD",
  "key4": "3VGajByzGgX3DVuKrRAGdnxDG8NM41n7Gr3VRMJDMuqoGKwmk8TUC7A7zrVzk46gme1LxKYvrc4N7C1YD8Fz3cam",
  "key5": "4zmvkg2iEETNcgsNuuV7r5H3Yc5BR6NNyyZiMS5DZWox5ZS9N82GW4LSyLTJnagvTorqNkA8QjTPQZfKo7BNGs96",
  "key6": "5Ws96wmBX56NhF9EiHwwgnNi6ZwLSkFZ6Vq45NeLLWr8gySXxS5bHvnJJQjGBpSX2sEWQAaTBp5rHmVuZYhj1W3i",
  "key7": "3eMVo1uQQYyYpvwhPLFA5f5u3MmfeaXC4ioRNa35msfhsav7Nfzb3CPMCmmsVaYXCwZwsVUJ7BhQugV2WQqpGsb1",
  "key8": "3S2qjPxCdCXftQCh2AGJKXEt9CZFFK1bhRyFUUcYSFQDF8bTPZ3KD3W7zAJe5CFmQab5syRpyzi44o7bKCVo5kwE",
  "key9": "32awYaRjCsVUMb8byQYzanjHgHEwiRQ4vDeGSzcBPjwJ9Rs9UXdWnXbMaWcgnjw9kZNqAWKQLA8cRuY357yzFfWt",
  "key10": "Jp18euyQWjrC4nvgrjGtWbAouUr5MdZ96gyF39j6JF5ZnL3BdR7zfWgfzyWL1AzFrLwmnL2NmSAzp98UFE3qsJc",
  "key11": "3TjikB3eGwuMz9ZofYbT1oYW3FcZZmiPaxuoTW3SDiSzeaRFEBtTG6FNWtVmybRKxqWDo3wnZRgBbQEXkkgivnHQ",
  "key12": "2YU6wqdtkiCZBsxWtNAu1jcUfU9eqKAuRBMeH2Y1XvFCxtimQkGTgGtRFMmTe7dt1CKPk4GpaexDtueGro82i6Q8",
  "key13": "4Hp2SSyqB6jeEHKJg5ijdWhuYJqYpisVYKjaxsGyfnsoJYC3cy6dKtyuFZ695rFUFoA725sTw3YFxCRppLae68Qf",
  "key14": "5jXpPeLNS3LBSJhfioeyQvzMy3oEexoZNGMPBRrrbyAn6xSx2Um9KwgFVvQ7SxGfLJw2ebTRv15tfmpj7JJkgRZa",
  "key15": "3s2y3cejQz6YafJgc9tfv7ft2UW4S8Egt1hUobWE11ZoSA8dbXKkvMSoeW6YCp454WPjx3mzDrzPWP1WX7dbsDej",
  "key16": "3tATvAowZ3y1aKjbvPdzriNqFwRsmxgmaiy9NCUA8AJNtzrRqWkvAcGs8PL2iTMZwdSoRLSc2Q8mC35Gkg1ZNaNk",
  "key17": "2gMrfm7GiuUyWEKCxjfRZTvqBq88hddVEBFv2gUqhmsnivDvZHryUbb1WuWwYnc72RL5NC5NUhD94JrCHfmp4TZo",
  "key18": "4qVx42S4t4m5zMgPTaQMessGpdpczK48oMmcobWthQhWTihrueaoEJ8nC7xskzLex1fe1NubdwDykT6m9sPyuxQ1",
  "key19": "4F5rKTJSV8ySE1B5eR7k49rzzHNxzGMghsU74uMBk87dZaWoohhKJTqgkjWJtAZNvA4n3EwnHaR6tuSammVov3xG",
  "key20": "3Wf4pqHhFQP822bkAnN745FsECDzLxYoz8rHN5LsCc9g7PQq5pFEPDxdx7V4D46JWtb9yNvqNh3rP3UemRDaZUqx",
  "key21": "3iQh3RPWdaAq2W6oy1EVfKyNvTKVqM6ZYBbyKFkDVHWps5oBMFzStdf2gqWJo6RFNtiN83btbQYkhhEFVaAUtXoz",
  "key22": "5w1v4nDzLxtAU5PFLzEm7vHNX3NthF3VXSboiHf3fHxySRUFfnCDYR9sgiS7VxMZvrVsMHGudppFMgLaQax93VJE",
  "key23": "2errdMyTbdA9b6q1k6aYGFgRAbyr5fpEyRaianbwarHB9CYES2DsdoKgRmhrDRwnreaTZy3TyPvJCVTVmGFUBTY5",
  "key24": "5aAcykVD1LXx7wEsijBT21owXawmrHJAJFdUvu5bMpxhpHDDZWpdvu6oAT8XmBspJ9TyRoAa7W72ataDaMhbWzR6",
  "key25": "2tDmfQ7Ywj1hdhtFLK7N48fCJ1WRwXxewswdBqg5Vta9qgeromWhjy7HkRemrHAyhcXWWtx9EADfmbpYRpmiLxPH",
  "key26": "2xTSWzrL8zCSeEwPYoh5SqUBPQgfMJEqNnvXzzTKmxG6XRhFzLvsRQezdAVvyGi1Urs8kD2JoskbyKwVo1A2pNZP",
  "key27": "3TprsnXJ4bv1Rw3yP3xoAvdk9atEhd4QHPoMpUNWajkRwwqZA73N9tGbkpjrpdDSJcxQyYuebDwqcNr8Dttrq1js",
  "key28": "2xJJEc9P6PzSazYTyZY1E2c5WWsGQntA1E3dK3FYtwev3U31HWSrLJ81qQjbAgKNVpuZzZ5NHJhqeRnnTpG4b2eV"
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
