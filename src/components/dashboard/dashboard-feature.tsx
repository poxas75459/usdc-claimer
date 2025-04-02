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
    "vgBt6TYsv8p5L56Do1o6fdhGVarYjc7xZ46YML1GciDReCHHAEoNsp7nmJUkTWbH3ehbBok6QYdYCTnjUXfr6E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2echk5FuN3uQgp5PiGGcincUvjgf2YYfVey95CWVHpqGQb9yoKxBrASQCPbu5T4B6GjY8nVUx5aQurmzWrdMstFZ",
  "key1": "4Eds7z2kCLaXxape2aDvGfvU6EK2AsGFoQirYjSYNL9sQqJ6D1HVJHLAnauR15SmAfHVHsuJ4WDYJMmNycWgctqz",
  "key2": "47XvcXLZzDkXbMLpkqa9XVaZpH4wgSet6xcH6Fa7c16gi2Vu6j3g5Qv6oU58nBCV8rKtQ86QZRcYJwLgTK7YDhYc",
  "key3": "yQ25mjCF4uXMWS57FaV5ikJFq5RNMbS6WCztNnHXdMNXB6WKTzNXSgZxcRHzX7BR3inXC6a5yYrEFscMPKr7eBo",
  "key4": "5XVvP7cwdC9ievsA4PRpFBLKCaLhs8XbYGXmVgU3sU5BTSaFgy8Y4TA8y6ko7jY9hUtWtAetvjgmtoHj64GNC2BZ",
  "key5": "rGQrw8QQbvJufrsrH6Q1e5XdzvbEPyZ1TU37VmBmXK8zFvrNAhtMhZtw9UprGM7xzSk19KM6UbcsR3UtgcxFoMq",
  "key6": "4xN3UsQjMc5Bf1wz85wsWjCZsA3tD68pAmuWeHsXGwyPXnfbDGHuuUyziNbECLZSx6d8wCoKf9rNf5UeAd9BqofY",
  "key7": "5uNMo71vT1YsyTxGH76uatr6dGoL9cJp9GaRJEcrZAytbY4U4BVFH7amHeS1wXoQf7dhNd7bCkkffTURpnm11176",
  "key8": "RYAtFdh9aHyaPtpUcQq9MNZ2T7fSdjo9SyDvjk27FQLEA1cH3Z9WGtpU6u9acWpH227mWShgcrfZggiKG1KXH3E",
  "key9": "4FNbpzcsWLWDR2LQ3Yz1qip5YzGmgicqvzTufyWPSFsSGtzBfhkyQ5YZwqgmRZAA6b6d2kAgT3giCEHFVMbSWTWB",
  "key10": "2VeGgwy3kWzsCQSteeU6AjVBfzZjmkJRUaJXXAZN3L9SYAfXoerufzJnWXeZ3UQ2Ymiby8VjaHWHLLB4FYKf3sEt",
  "key11": "2Qu8Kgp3ZBjqAFf1FZbjfzDmWV5m12XrjzQHrMUskp7FPza7QjNYKBNtVAnNwxbZadyXXkp8RckRKPY9r3HrBiqG",
  "key12": "3hCGBqn2yMi17MPxzLDPkCD65BDP1e42gUfTBbx7vsdEcY7qGKobKBxJSkhR7eRN7xdHMrRraod8GpXA5kzTxnKK",
  "key13": "4CPjgFLHRXvGaWZdabbxUnowdBag94HdjGNQ1k7vtD5ovcNgLkzFEDA5USRVCKBQj8wg2i2uz1UJz5djE9S1t5rg",
  "key14": "58N8dwpckGZw4jedWDbyZ7sqqHdsnZ7ezAdRmESVLfvFcnCBtMpPbk6EGFRhNvvKWrPZ3N5bzD536pydrTdcHxP",
  "key15": "4zCJXpEvkcJxkbhPSE6c8fJWkttE6hCYpvtM5W1EJYS2QcnrkMsbgAkqbdfJFrMcPnDb2mSba918RHFan4xQn6b5",
  "key16": "3Z1m53FQcmrCfJFYMqjzNQg1Em4tYG4peJK4LE5cKgHBr16ktdFvcHovCbCfz7Acf3z3Fdhhovz6Hj7intbW7VyM",
  "key17": "4n2w7TeAijrT3g7c59bKqzJo6Bi8RHwr53ajtPeHZ6cJA6GxLtaCEwedWDpfXgqNUvJDzEQJgXAjqRiXMMVpAxJN",
  "key18": "5wDLkDk2sLiyDn4ocSeQgRGkwA6ha81jE5jGgdw2qTnXbsSyabbw7aq7VRTVcTY6xRijbJtkQPLGcKi52xxPi9v5",
  "key19": "3Hdv98qae7KWUo5wPCxRU7mTVwJ3G9nzDwqtER8DWL8UscHAWYDwtWobmkoGnTRvfu9UEuY6jWN1DNKMKMY9fdQU",
  "key20": "67VKMqUuDJTpWrwqKn9o6tb6mPiMpUAukjVYN3qUW9HoendcrEBxNqjWk6zgz6CYG8b2D2pqhvvjZUN1VTe7GT9b",
  "key21": "5WxwvaMveh6GHDarH3ZvEhMbs1tdob6a7XZ12CJZiRdALRJwjyfyxrJuiAtbkRQbH4TzCm96BV57GgN1U8mvwVUp",
  "key22": "2us7J9R6LqCbAfpLjUZ3aD1G9MZdMr9CthiXokNYkTH5G7zDvfMp1EnWZtPLbaBhTSpBmP4g4tiKDNT8LHFwjd93",
  "key23": "3ZEZtKNcta63BHUmMCPDRfjdNX8PNAPUvZjTE9CYZAFr9xzUX1JkZqugWK8wh3b6HPnJxDaeFhx8hhFo1froSL2z",
  "key24": "3cU235mw2zWRevit21oHF4CzMhsBqpfbR65V7mWWbxE6pMoo769SwFW5d6zpBcbwBuXtU8zSHRsR4Qwv17ddbVsa",
  "key25": "3Yz8PfvsSQi2QxEKgwrBwRJvE58n3UEEy9eQPnG3cT5JLgLE6sf5vjkTBLomF8zxxs4LbHtMGdhS5A4qxi4NpU7",
  "key26": "9KBc9HUVFSmxXHWYKLVsFTcbDQCC4PzAs9TmD8JS5wP8NaYjwpcTQcss79LeAxxpKEiAi2FeNECGwkarGwAbvJ1",
  "key27": "Efo8jKhSF5nvgKeAq9Y7GyTYfYp1LP2iZzAgWD3pTg9uGreGCYQbFy3FKSq54GbbNR4rNCPS2WzY2LM5Txnopmz",
  "key28": "4eGreyjzKurbDJu27huDipVZu5nhAqB43w8qMmJNYw49MyGinrnBRN9RzaRdFcbTekRcieB7kHqCzMMXv5RxwRR1",
  "key29": "3ivLpRcHaHbkT1Wyp7sHS6juTNEkEHEVnkX5Vby3SZJwEV16MDyBEepLJm7wM3YgmaqLT2hxb8zeMKqE2kRpqAfv",
  "key30": "4tiw76tH1SGdsBUsyBRNUaL3BMHPrTUL8ier7VTRPhQwrDbcSM4XV5YS4PHQJXjAoxpzJQW1hZXPJmUFuRtZ66ir",
  "key31": "56PtxG4fgFFrQZc3VSNc47sx96urGzgDjJUr514HgQDtL1DejpNJEADTKvxb8jB74M92pw2CG2AzPmHamGPKnNmm",
  "key32": "4YYTKZf5mLkUAht9BrDBfBpkMWdmfjrznSCtPZgUqVsWHcsD6MKzaB2wePWBy2RvH1yPH1oTaCawtMsTTqHhKWVC",
  "key33": "3rPRK1hwqwuubT2b6XQmJzTmgTgd8Sf6uiyf8bwfi1f2f6sVnRM6vuHzT7rVfioPENh1gBj4GCshRuRSzapymE5e",
  "key34": "2NKx3XyDfoTHHxmepfeZyEL8bs9hZT6GSgrJcSFfKhgNHXzYbyEDGz7F1REg6jB8jRNE6YtVSmPdNkKqSgfDycqN",
  "key35": "5wKmhpVgVP7eKRiTeXCeZsrE21SLjkghBCBbSqkKSwVnq73PWrkuU2R5pKzhsPrgUKrWN1s6kk4HTTmewCroJ8VN",
  "key36": "2oWVbKsroDxEnqqPLenL2axRbMB6rMkq4hJX4rK7wRzVKDNzQM7ucikEpWhzUSCV3LSPYmV8AcvLdQQBxBYUWRz6",
  "key37": "3XBGAXubpsyshwr56SRTqUJZMVubtTVW5v51Vc3vhiF31xBb43cTJk6AAkbnhmM11EkLhumuJ1Dq53JyAyhU69HY",
  "key38": "fYsrtYEcVXjnGMc3f9hyphXNdYd3ZWG94UDNKiKjkdCF4i7enuQnnkeWJedAVkP479KGhJ4QkhnLtqwJCj1yLvc",
  "key39": "3ydYb8wjnJpBMwJFJm7VFTh8dLQHJ2nQaDEnQYBzrs8VbfAJwiFiHSwAb1PhyM7CCd5yEMPgqtHcXX9ofJfXbLJe",
  "key40": "2YYXLx2TWJim3WCiLXVyquYZr5h23nJfpiM3Jrxha9te6m9YtqGU7xnbTEZe4vHS59un6vaYXxik9hCD2p9UWaL9",
  "key41": "2VRzGV87AqtXUv59b4ZKhysiGS8jLvgGHoqDZGJowpbTe2phUaNEWzCxK6VHRFqX5HbuHvsJr4gUs5ukoQE8aCxM"
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
