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
    "2f9o6VRFv2PK5JdwEXxtHRpCFTiXyazKtMcjdkjSC195q7U5XyuF6QweWB8oQVrtEYhS2VNUYYVqJptJLXC8UJAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VN6oS7S1Q6gmQrdpYRBD2iqbUePJbqw9bjaGBiv9GASKs89YvcQ7xZCsvPrCrq8PEE8UwhoxmdxCd1ozU5q8L7",
  "key1": "PHFKDSLxKud7FFaU3i3AhFhYaYYQsrVBt9dT8CGUQCGKqCN6Y7KPh3LE9egTHy3zwqZALH8RPRo7edwnLZ77Mn5",
  "key2": "4x8Kru1Ny1c9Vt4ajsMDPnijzsS1rBQ7cfbLgDo4B6nkp34hzToKWhM17CPBsVcRXCZhtYHB4yhvmuy7rzvXuF3g",
  "key3": "7SeHbjvpvuMHmFfRgHSX8cEqtBnRRPXZayXk5FfyG7hFQHyGwfnGGovbHyHgntFdTUdyNway6gbEQDXhZajjpdB",
  "key4": "5dVz7TimNmkhHnJy8REmfAYdgJn2TiX4N2VuuaYvVLZ5GqR6onYqX3j4QLZQu3AxmHK8P3bDaoGyfMpnV87Wy7YN",
  "key5": "3tyNhkUwmniBWsNawwfpBQCA96oWePKGNCnpfWWWk8fYfwY22seJv22trRXNyDbuCbQnbX2uBvWx2eeApFcDPwqN",
  "key6": "3VFFeNDwKhVTGNqXiu5zUzTWdrYhKu2ry6nLoXXRoLY1FkTdgexyfN1gJ11sfj5MUoFqag118wnLSew3iXyoNuuk",
  "key7": "5aMtWiqVCF19h7Q5be3H5fC6jRKaj3qrGYTPeUBmQa73kn4wpMENB5jwJHbetkHra5QJHxCAkMSWzG63jtxmzXNv",
  "key8": "4gaX1Hhkm8EccPkqnhHJqjtVtGkLeNQK3jvXHoKndsc7zVpnAdoMQwsLWXWCs7AtrThGW2W3KLeeqntuaS14YfHB",
  "key9": "RKeH4xk3VdXcwvR9M4z4D4295VRzGJtQQN3SunXDbcXBJvzGDXZqV3SGo6EMxYeiK862BNzyKb1RMfc5akB6q52",
  "key10": "3v71Ft1muEww8wmRGHB2aZgnDWim1UYNmovVGpb8jFbC1Mi4pJ2sxTF2rW6auN7B1q857exC9w75XfzHJr9eED3b",
  "key11": "41jdQc6BB5etJfsdPHy966oURqHomLxzu8LDTkT6aRpMZ437J45NKFCyLuUsbKzehJX8LnfuEJpxJ73ySgqH1iqk",
  "key12": "2LF2xbJDSohsknSuAXAMpoXTZsV4n6eyCbgJfsHJk4bkGHCwjtPPqZ6zGYqe2LfFuRXPLytK1Qd4jD5jXo79Gbcj",
  "key13": "4Y6tJ7HRdoDoHYFXgj6SxL2mz8z1XvWbvDnpVmmCygMCUJ1e5LcstQhAomUyTcSjqfyk7uSm8wkxvi6LcGmmYyzt",
  "key14": "4kR76aMDG9M7G132A1e1FdsmEL3sxSq4MxNzD9C7FyYiSALNHXriMRxEMH9QpFcSPMzGHR1VzURLxvtWEmd3h7Rw",
  "key15": "5DQnumuoQ2DajHGucGWapE5zAzqUWHZ43DtJiUzBfT4XRx8taKywWZAW4VahgxwRBgrL6iVaFRcGdeudcVPZi5Eu",
  "key16": "2vwLkq14KaYbDUdhUrJsyjfeYda93JbET3uMtukxyxHngvcxL9ore6AKEdR9qVwgeGPAcstBwiL2pKNyfv73q6Fs",
  "key17": "5G8CBdMkwcSuvVC1A1nQNH8uWv1UnRchMUBCRPGpUmipAQBXqwqzVju7N2VBGQkCfkXU5YPpMxWYxa9Bn7CCWtXe",
  "key18": "4k6M7SyjVDfjUudVWLZbaQuniBprhiiC1jB2k5HY3j9cJYZQJdnLdL5sULcxfZa2TpdHVuCtp5L3Q28X5og83zMr",
  "key19": "4yj1QCk7Whs5kcse6JEExbTF5JRmQBCvQAznGn5y1qT5V2QBoKspTPrZ9nQA4tU6sUPFgjFXCzu6z4eLab91Q1Jp",
  "key20": "UD3yrbZjPvDLdPdRfi5YFwN5kmJxiv2YD2KBECuLrD51rfcq2fSTgaJeNLepy8hy81PS9anx9fcJkuTFPjJVxJC",
  "key21": "22LtUFi5XpaQXxvgxG34Wt51VGs9nHmsY5h6Fz3tr6EFvsHjn3NUEmA143h1NKxtj4tZGGW76qRMMU2yhFzS4dat",
  "key22": "2m5GqdAGhEUKgb2ULuqTouAb7bybqkoiAopFWA3sRcTfJo2MyuwAdFhHQMyinkw3rRmKpSXSFuGe4MYXn8inGrt6",
  "key23": "uQGfDF9nvcYJDJfyZjPcyWs861dHK7GxpvH1xgGj4vA4XJuMJUhBchCtKEE84e6ETZckebeCt97x1pYS7XC3A9Y",
  "key24": "3GPkNQa75RCnA6m8KjqaoHV5f2vWZjP7WQQDHTKiyN1ohyKfkQ8TyETrSbu1YGFTgn8p8hoL1ySjnhTo5fWVmgiv",
  "key25": "nmJeQG5yXXocxTMiieV3UbFjX6aBzkee9kRAUoD7oNw2KTkF9UYBfJa6E3buwArGHJSfeXKKUjXynQ92F3B1sjt",
  "key26": "5tRixKwoNAHnteouE1fYVCGsWLCDkF6WaA4hsz9fGpa2sDzgVg5cr5dsAQ4oG5G8p9a49kodJfBAoGA4uP63LuN",
  "key27": "2xyuw3HCwLxEv2GsSHQDMGJrDvFsxkNS88eGhJ8HUVPDnGRZACqTz9GCbrJCy6z7ULidU3Z4JEa4rCRE1smB1ZVN",
  "key28": "4SHwjpNcj4nUCtFMYZWM9n6driLPzzXx4epU7BNRZhss3JUgxrLZfeGmTAn85ert88hBh3ZHgKvmZvLzJVBn3LxZ",
  "key29": "5Z4AR1ejemBXu3kLWNRDSy4wZP8KxovRevBUtKJyiUSZErwWpQGGWF6cbVJ416PRHmiSCga5XYsN2t3NRGnXuAj9",
  "key30": "4g2DGGUSCfs4u5h87HLkV3wA8uLpcX8EWWcXTNW8wAxAKAiXcDS8xQkq4G3EbpYEQaLUTHofu7YPZ41c2bw3fPL7",
  "key31": "2JrryDub4RkTpFX7ezNyfmYaYz7DJrminBefMTsbuuYerp9RwuzAt1C1LEHKZJv81oEQW6ejeUsr16dgC8W4CYXo",
  "key32": "4rhCMUAtWJPVjVHk4H1JHMmsUUQK4RQq2Xubij5RD4zyCpwWmVfcC6zeWAQUr5EsFrpssi3q6QcD4urYpFc1REtR",
  "key33": "3aTTZub87pJbtMN5ma5diNcpBoGuUzGUJXB3UKLjCrS3wdwaKnk6GhcCeodunCwz6nfFKRMQ27Rb5B7jo4A4TopG",
  "key34": "2Ahyd7XU1YLX4wnJpdqZ2vABwxpMHsFpkdE7pb2CwdfbRUB2guM5Ptfvd9VbxUtGWmH7hYXsXNQ4WxVQvXfCAUJe",
  "key35": "Krbd2vFm184eu7uM2a2bqScr64ZbDLHU6hrcRtPQvmy8wAjW9TdBbCQayDag2gKTwJ3nRPEPJF6ti4GLRcDHMam",
  "key36": "35tSmZWHPbcGPqkeUM9rTj18bXmys8ETme1WYiF8QKyL7ao2CLT3xuZvp4TDpBC8R55Ytg459KSGM6RxrduFLXhj",
  "key37": "GM1qvbH3zR2q3PhRhTneKFkbDz91Coj8Jhz43TvpyYFfd2nsQhy9supKqTBnjTre8X6GkZ3YWwbNJu24vnaqS4f",
  "key38": "66kB3wNbW844AzxBtQCkzDsXLerXxLRtnhuzAHafn7EBZoKqkkLPvxBRLMUDvcoVn5EDnxNZxwQ5JU3sjC1jwZNj",
  "key39": "5XUAiH5kv1MvmKQjxmen2wtQAvkZBcJR8GdJowR7YqTY5phUwKoDaJ6YeB6g48GzxWskfkCbKX9KbKEhCVBHCiaE",
  "key40": "22NirRfv1CgBAmfHLYhiqzBGv8kgWQctpazUuorULCG7G3uMthi8gvchnhvVPSLiGKzVqTcQeQnASko7Bgu7JLrL",
  "key41": "4qQmE4R6cDTndDdAHort2Z2rX64CWnSok6QvBjWbyXLwqUbkUcpgSvWohtvYfdyp28U2pVtCANwDsSPzzDnLm3cp"
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
