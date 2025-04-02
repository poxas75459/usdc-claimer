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
    "5Vh9NKeysB9HnMns6syMJukdFpRgJXzjKXzVK1XCuMFYbT1xaWeMbCnEUustqUgVmQUXZ3M9gAjibj5jyDnPSmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZgvub59PyiLo9GAsJ8PjbMBTSFEocjgwsqhfiwcoj1bfsX3QVpcWNSn5CqEZ3HVnGm7jTHR5yGcQWaY3Z9GGfp",
  "key1": "3VATggTnyWhgvQ3NsDV8qNr3ZeLGAhKHvTsuKfScKFhrfSwcadJDdo8jwakwMPiu19TbENhPTBnDdxGBHJoyLQDL",
  "key2": "2Di5nnyj9xHCSdi8WBtb6igCsAaGnh3KTqRZste67aHDivKwaYTPaTGiiSYtNA6AUyLK81yFdGDYkiQnELrQFDTq",
  "key3": "4ARNTuaqYkAwCaZaVtJ7hmv5UMgzjbAXNgHKFG8PxfWzNSfBgJT3XxNN1T3vThbJGrmZ52xTZq384GLBxbugvJvV",
  "key4": "5YTwLgyGT75UHFR77szt7oEyQVuY7cJVhSJ1ysuEU4kzyjwMrp9SsNk3tQ1Jv6baeyG8xFuHahNREaATkiT699aR",
  "key5": "3BmruFuS1QiEZGXin6fPMnxeYBHa7wZ46RoXzacWSvNiTs4bhphAKkTCRHhHt6z3ooPfjjUMPYMmZPo8vi9eei1U",
  "key6": "2P7kgEwonj1Km862KY3PSYurkbsPAcpWGPfNSs4xuPEKrjeZH6RKJ6iwWwY24WzSAKYSg2YKirG3nzhri9qzHbpb",
  "key7": "2poJqCag8PGx8cj3eQFXyA3uCjKabaMkbqFbxhDzYxNDgWXEUGZb924KQ9hwci8YJGZVqmrbkrTmdbVdqDkJTSHu",
  "key8": "4EWvP7JpienGU6tYvKUorDqhs4VxwQytYDi6GekPdrWmkSUUfiJiR72n4wgBA3Wif198QzxG1MN8GxUg6PBuT5W6",
  "key9": "3d1KtPprMZY5kW7vMBak3DJAUGL2YrZPRaBRYUFAZTiXdQG4Es8wK7zaZamuFMqpT7yB9SfFjU2J7UNJPJHoZW7c",
  "key10": "5oHoEXRQX1u6PxhpcfYifynzy3TgQXFj6ofUUdDdwuWWXKWUjBAN3y1mztk6QVDeif5U4Etu9cNpt64hvcpM4axo",
  "key11": "46hTuDUUSJigF2Et7gwTriqa39xDrCgcP6pFkRiVe4E32vr69AzGvtKQpejHuA7rYcDe33zwC81LjGwTJ9WTAR2W",
  "key12": "5gBYJyHjYoh1YeHz7N9bcFX6Uk9WWsgCF1ba5dXYyFTUX64UujWnWuFP1UytkVTzF6SaErh3Q7pxQKrF6HhSPpR9",
  "key13": "5NbGupbcxDDYr8CioUeWJveDS3x7PRKBTe6M86vVWCvCRxP3mXCb5qTAtYnysUSqTMpQ81WYVtZMWSjZUt1rXCwH",
  "key14": "haqmVJHiqGvs462TTzQKSmjAwYE1crdiMb6w4pYLcyfYgCmzS8uMfo5NfDoEBR49NE2pqbMAbRStRKZPzUFXrWQ",
  "key15": "4aHTGcteeQkATtsXjMrSoHKmZCLHzqYS9JVt19Edb362kvneRFxUDBJoMRe65Te5EtLnJ2BV9BUqg8fZrB4V7rWy",
  "key16": "28MEEj9fBYuwV3wJ8oBJNqCSe3oLhQ5Zh9uE7t7sBL63bmfLJB2tx71iRYCeQn2EWhhr4twft6LDiQxGDxVtfsUR",
  "key17": "3H9CWKfJrDXgBLYzBkEySW3sCiUP2tuxPfedEpXvjqKQAEgwwFrYwDRvmKyyCA8JTqMbRnfymVKm8ELdawGCMh3G",
  "key18": "65JGhvHPJvcpZngnjciT7St4EvW5nFJVNbEA2GqqNwfbLaHbQDUhXXECuDd1onfSF4X3zK6Z6YNxHr6aNVWb1Qe6",
  "key19": "2iaikgS3ReUPjpKrAHkhTHoAeUa44gCb2b2hyLhCiMoxFzHoUaQo2Koq4pgrHdKyAoXkrGAxPid444kUqDSvd91h",
  "key20": "D4jRJtjWspjzy2xftMx6idzizhr7KrWPdV5D4cecgk3B5gJY2SgiRhqca7oRv6rdup4cnx5z3evQEjdwPs5giUX",
  "key21": "42oz7UfneRjWH9KNQLq6DPsT4HhL3uPyFBP8MCAvL2bkN1HwCDDo6uxnuKm3JW6mkkWk4sN1eNexGKFeo5kGE2kq",
  "key22": "5QEWTLFxFdWhcYauLN1v3346Cnvb3F2yi53udydRPbMy4Mx7cFnQBqG9mx3exWuuMfKW5nN33Z1jwWVvgdJVDc8r",
  "key23": "473Zx597fnksc2L7X9okTYJuQLbNHpgjhpNt1RAvQHvF7UZvEFLhYjuwuXWnob9em3h22jD6G4rqSmCJPVTEF5Pd",
  "key24": "3QdgARWs7hWZcJmRmczDBAESFYGuxiH1e7oK7SWuVAMtWWKU7JNzD2tFMGpsawYFAPBsnGXnarU6mpUwioWqJLdF",
  "key25": "3rtVr3V77sat7gH3KQshpdF62TQTufvSJKeHsM2hR8Jc96UZPi4GKoXDJihJUw2FdWZFqXTHnk4fMGmBiJ9YXWf5",
  "key26": "2EjN6Hfb2cd7x578YVvZkPsefChnU8wXzTJdbCF8hKEbT1Nj68gB8uR8qinJVnzFwhL9yUFBLEs3xxLJvexsh3CC",
  "key27": "4Zimed19HpT2SjYYz4yD45hDZo4k2o4rYC5ZUPDqQ4pUfiASyymvATakMUyuaoV6DtTadC4XbjVFz4GJY5zgPVbG",
  "key28": "5C42UNYgtndcWwqZQxFsXB2114gzRbQaHRFc1mf6rdTMAYBdpkrKRztwqErncaagEKSQGLFu1MyESnx1HxiaZ4Gv",
  "key29": "iVpWtLRbRG9dtw2TaZLUCMQbmzMFyJoiCRYsAiLnwcJYEQZFePhYhugoUMeCjcGZPjP523eaioMGZNXBHCJMsuu",
  "key30": "26WcG4egMComXUfxPaR6CF7EjGyEHzFisPvEFzhAXLQ7Y1gbxiLS14TvcAFZEeg4dnBrd7pw3v8LUHmeGMD3dQfb",
  "key31": "2dJZWoiFc7bsNNJ9AjVkSCe2h7Nsq47D9t6cXVHWr3CUdtA3FeebyohBD52Yfq37LC1c5MzUaRE5YDbZBMe7CAj9",
  "key32": "wVJszE2bexnVmPFsjf7RSp5QvPqV1DB1CYtDj8Z5in5w66YV8UpN7TsZPK77MQYFd8EGru9GpZ7kACJfgTR4vDh",
  "key33": "1ZroNr4pNoNnrJfuVw9LVnqFC3HQvVj3M7ekABPw3PLWCPWec2k3n6bAJzn573hJ4w43xTgy18mzKrx6tEX3hHU",
  "key34": "ZoFNZZdKDAHTBJZ1W7n1jCwNFkoN8Pq69tQR8yPLS3mh9oA1qmZAARCW1VMNp1gDeB8dSPFc6iqyZCXsymtSamh",
  "key35": "2dRDxuMcugepU3EUEiQxyrT1PEX7ino8342ZaTpkHaCEoJXKyGNQeR3yeADE2PPwLcPt8jTpQQeAHEGmSqXTR448",
  "key36": "2QURLmUGPqt7MFUtzdv64TcaptiyKz9QFUAwr8y66DFCtAqzTH7S33omFkBETVcq8pV1ddiE6ys9GPY653Sb3S7p",
  "key37": "5HEfcWC3mPTKfp5ujFJ4U5UXLaVuagEtSACzcUihs9ms3Ebygb5t6MQ4bdDtbZk6TipggjLADHuSPZYF3EP9tobg",
  "key38": "4DUNxLpQtMYWrL87dVJmxuuVDdCte6wDee17GnbHZKRXbgtLMsxViWQsTnp2FrqzrVsYs9YC6fUb4XhE7BtjAsLo"
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
