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
    "2mH1GUUwvZH9upGpqZyE72tLbRJbc1yP7uujaBr41mhom8QNSkxgJoqQXjN9ipQedzp77Yscq8UDT3EPwCKg21MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XttmmJVeadevx3hyHET2Z5JkkJ6SSLaAxZ8ABLFgrsBmg4zPgnAqtHnBFmCDxQS8vhjTjRz3aJDHgFizJcZ5w8Z",
  "key1": "3VBEAEJPaX4CD1ujcpKs5mEYzoiDAZR63MMv98MZ1R9HixgCse2yLzMCt16ygRmK95jcw1VF2W4XT2g6nN8zmN9b",
  "key2": "2yHXjdZVaJw496g8iKQrL6V8UG7vghWibDuN1rnT1KTdQrM84WjgMaAMcWmGkMfxH9r6UywLvJmmbUXHi7GZifij",
  "key3": "3bV1okyqc2nbEyhXXoXwg2D2FfT8SH5VQpKFSR2Dqn5z4UQvwiQMCMqJbcraqomGst2h9g8i8UWojhg117HjMAop",
  "key4": "2dKDW8pEpjR5XyvhWb1UA4fjX8n7WD4BkLoF2NBgBiGEHimhiydsdUfjZfDvDQUQ5XibgNPbrCrGq2Cx1b8xyudi",
  "key5": "2ACtJUrZpFM2kWDH95TubPVWTcRE4TxLBUzZ7Gidi1Ss6zusVS3R13GEAjvGZNgZQX8zpZD9jzwATDmkdK2yvCxc",
  "key6": "53GuTEvQA4RLzhGEnqisBjuqJAHc5Br3NZrYnREt2mxKQ4AFUsr1CNUegvgnqUM6ogGjxRKEkjVaqEEPyvjUD4k1",
  "key7": "5excFAmaP6PMrzVCnEw7DJUuRCnHHhpCkVnUMDNXCcaFbzn4y9ooqdBiizgQi8ZgoxJeGvWnNCLPjKXUmFZSgTzY",
  "key8": "C1BBpRYjXLXB6gQd8ztUu9okJdxBDLxZHJbdAuse8VHCCuGDgUpX7HZvMzeN9PVc5nni4NYu5Y3mSUsYBomj4TE",
  "key9": "5jbo7hBffGkJU5xo2JYRj7uiQgNHpbM5NeDK47wvZjyp65edwGhWnomsphtpfH5ZGd4qbrJ5HQ5ixuiAKEEfm6yZ",
  "key10": "3iz5uU1XAxqcdoMdVuNZKLrMF89MUihFsFkqpWcz2xhvw9y3ay5ZjTt7iYbBBexTw1awfz3FHWPHMjKFyjh7nSDB",
  "key11": "2FhL3xyzgY2PadG37gAjHbAYrmZemTZk3EuSDDMM6QedGJzspfJqpmnrHAKrBbnYTjjVPSwKazziA9wbjFTuCd16",
  "key12": "3zCXQUdjty3xUBRykRY879xggTVjVKDsUuLnuxydvFqCg1sZXuCiPG3cfa2Zc6zKhJjk78maW2tZX3sfFAy6EGa",
  "key13": "gLYwwr4dUoAN2H596icbW8ZKtHE1pYeD4fyT1ujLDfv5fiSf3ZwSbzGoUUjVSKCxa8X7oyD63Kc7KcsKnfp5NhU",
  "key14": "2TZuZk5AusBufnB9KgsvVnuDaZ7ttooK26StiJ7WYSuCQfBwfjTq6aA6JVwcLyt5qGJTsUfwN9mSntcAZe3PWqtH",
  "key15": "29NFuwfRYhki3aeasLWzdKTya5dtECAQjzp7Fda57NnHeqG7giE7z69Zob6wpmCMbh7xfJNyy2xz9rmeN7XXLHaG",
  "key16": "2VcA4cTigzy3yNMxg1hTizb6tYgG8RaSsX1yxxrCQxMsjPZKufuhuQhwAnQCRvrhtRC4hg3meyoScNZT5FYntjRn",
  "key17": "4wejVcigJGoyJdmBKs3eWNzwVhTnnWVAuemWGhEaoq5XWFh2L2WsRjFYxtinBM2VC3dGyR2LDRZerxXqbGvEJTmT",
  "key18": "ueYPhWmS4rKgsDekczPDEVg8woADohEFrwKVZHV4pdro72e6h5dvkfsui8R3855z9rxGUeB5y1Sbe5uhjBXhUZ9",
  "key19": "5sAG6m2wT9hxKWwwsfPRkwgpb1VPnXCVXkRQ8eQvTwo44VTzM27iVYEkrfPgsDtUybsfxuvFGFDQKLv723KfFfgj",
  "key20": "4Dhjb2nou6JruALwk7JP8br4tS4EWuGhYbxsxi3kTksQie1rzyHQByAY1vZQAaMV7jnt8ySLEiR9toEByJQ8G92v",
  "key21": "4Zf84cz9NJKpSPBe8gu1TTS6ebg4h9HMdvFyRXt45ghEu7nmmaVwfZ6KC5ugdLfW4KhbuQnM9Us2nSnYLuxgxcG1",
  "key22": "3tRGiLNa1C5sk6kw5AStxUZmBGbViFa587YB1Gn7hD2WjGb7Qk9VaDA5hWapxXW2qfJBymsPguVwbwgSFimexoR2",
  "key23": "4K3AjmzaCWhq3KmZhHrdPb9oFH15JBLkWdVRmCSkvdKuBBYNPau6LDTRrXANSATeRuSmBXVKoUAxTBnY8XsPfTUv",
  "key24": "2YMaBXa6v52PMkj2sApt8hWPeeLtYnQmQqPrByksuHa3NpwSTnrLgNySMkyGDhJJKGHEZ7dm6jZf41Fn2465VUsz",
  "key25": "XQfHnKxMk42axVSshmUeDzrkaRECxCfiGj25deo5Na9GRnVshsbxppv8QqBT4wBAYhoXo1aF5M5US8WHryCjazK",
  "key26": "26T2SzFYe669Zu1DwDLkM9snRLHY7dam7T5gEooQtVTWYpyTiwndQTjTDoEiKcmvu9HUFdwtxLNj7UwEEZwWJdAV",
  "key27": "5aFGjFkjGnLS4dHydojzJPBoxut9uF226MxecQRAretXxMTrYxgfqMy2zx58c792Lem626tDR1QmsanV6Pqg73rk",
  "key28": "keQt7uUYfVwe2ZEgYxtS3E8FoXpDj91wrRVKM9APxvYo2fLM26yewoKsjn1KkvynEbmmmQoDRSJVeUJhQZLxBFJ",
  "key29": "4TjDDuNQcDnEDKxXhCD8GZtGXF8DYqMUhDob47eBoAdVp6ZmHwrrtDnEohCnmPu2U3cBCVobbCkTFtejdNicsnKm",
  "key30": "5V6xAhCX71PpSwULtEenrjEbAy1E7SG9C9Bdu1BYT42HDyhxrDDabEruTjZEhY3XTaedLBiUMRjjBgySsDMYKzSH",
  "key31": "t1drfaFCm9dDdFtok7Tbk8WANYY5ujpecrhswc82sA1KaSxAqNCAJQhRnPuVYqeLCKjdg68Yoe6UbPGUqBGHLth",
  "key32": "2DUDiWvQx1hHoeShq2rKzUCA8yHk6SCQHRdYMjWWiU9X1N7zYsPMjNQ1dv4FYMcaMA15DreYqYMkazb9igKRidjE",
  "key33": "3AskCpWTdZuUXuy8gmTqoxrBpVkxkgPaVQ3n3LUATqyUE3GpTrbZx3gTnrVGeDRmrZYwHnbbdRkoy7zzmShdV5Xz",
  "key34": "4z1e7rfsLvvrkTeDRKxTmZji9zNaYNyyHR47rf8nTVX2y5B8jzmKeAYDZRpGHJpQvcWQnEFfb2fz4CkUYguPNKxD",
  "key35": "5PQLSwSixqdG1UvNiaHoRYaRqF4mPJmMvKvHz8Zx9BJwq6BNfoWCzMwQgPmzkZouxyKCtFYTELRUnsWiHcXDzxwE",
  "key36": "AVWPKx6S9bB1Y1khFkAEX8UfWr8BjpFAvaU8RiqzZQaTngt71o1HNR8iiKaYFshfDStEpMU7My3yseBvjrYCaac",
  "key37": "v4cLPiuRz5HRcbCfFuL39ktFrtJg4kCpPPFDzQp4DhAe5FVhWL5kskzRsBLYzLfJbALehjmpbD7wVfG9BEaggQW"
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
