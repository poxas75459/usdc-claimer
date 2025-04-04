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
    "xbD2ugCAgRNWGwcybdWeny9s8NE5aE3CPQjshYgUJBaMR9SB9aQpZm1fTCUUomP1iNqYmrbaCSKC8nMaJi3c4ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Enk7WXb4oHWffoR7d9HfKWjcEKHPFTvJbe8c83kBe1X3SXxW9hgXaLFZBBGhZR4fovgExV25Pgi9q4u8bSpGckp",
  "key1": "5aGmuJLibqXnVduMfPLc5H374Awy4mHCWQB1mhi2xZcoTgFtuugukWxSZiYDNHJcFurEkR6J1CWqjumTJmScmaTQ",
  "key2": "5hAV9GcRCWWy5psw15JC93ohXtV1jcGM95Z4UvncW3EtHv5i8gFtkQVC9bq8QazrzXZJmWogFwWTjxoK9on2Py4K",
  "key3": "61jFyTwXFf9p3mCg5CrANAhi5A2h6kuR38yBVML4RpyeZ8PDAkyxs9GmmG94FoGuM5SJLekHEf5cHyrotzNUvY2V",
  "key4": "2BCAaCRNpwbumUR6KvkojiXK6SniGYE4w5Lgrc6jEZNCoEtjgqn9xE17ojDght7sVsKQBUerkTnbi4oj3yUdvfh4",
  "key5": "ZYmSBaBCJpjEdzBvJCrnzA5EFxhKRhDNDon4MctjGAs3yRcSc1V6CatyPdd5ru3mvYLaCfAfMuJq4EiNFhzGbgd",
  "key6": "3pfCrQkURfTfPFG6PkCB14WxhacP1WFixD3jXEMSw8f6QQ21AJJYxsEJihHrcoDgxwyniTLmSujHZhxpbPdeQiCh",
  "key7": "4vxxcEJjFWwAUr1usRJYB8mThR3ywdY2qY3SAwb8kPSTctb7WVb5aYMwFuV2qpHmpLKEh2d7Nrf2PJQWhFLkwM2D",
  "key8": "HbAbyQN3xbAaQB62bwYxktxk4YgYCHw7Qiu9LxeweLxVUVdmmya6GEjHx9ntpJbGrPguxhwERGZErXDXMyMKTD1",
  "key9": "V4PDJQwQUhC7DzzDqjWNc9mRwKtHZe9Goydz4VBiAY4XLU7LiJuyZ1cSz6qSPMNC7EXrVQYGVU87nLiG1ZsKwfF",
  "key10": "39jtZMYy1P9oB1Y7whppSPciYRSFo1s7JzCj3VHANb6Hmj4fYWa9KxKJjUQ7T6BiQhVdEUFKXnrxvtpQjy1EAycp",
  "key11": "z2NMYrKNj8MLNwGBkfUzgWE8eL2RLTQ4Q5vhLe5aQLv27tG7BThfwsKdq3SiczXmv3xveWwurLaSYi4Ntw1LPPH",
  "key12": "59YaceYJy72XaS5sFuc6mLSiLoJ42XFKpfwDqZqpeWt15vYogxMf1mddLm7R4rtFp4262WZA3naU72SrHxb8AEGQ",
  "key13": "2RLm43qfJXqqjx1tyt6bkTrk9AyuzvHUpJGUJcuJNZhYxFeaiNSVYJsu71C32bWa2s7UvGi4d5zBxebyeQ6syB94",
  "key14": "5HJrvUwMbYB2r9qvmLaiYwFdaxuRKgi4jpz7xwpW3maNYQdjZZFv7fgU5NM765Zuc2M82KahmPHL7kEmXssDWNbB",
  "key15": "3NKHSeN21DSSofHrR8Vy4XM4C8nNDVdbL9gEXLGVCQHA1SfCCopZN4ZQ3UFMNcamkQ23bcwAqYk2u2vGdx7JUkEZ",
  "key16": "9rQUZKwb9ny6NRZ725UEMbm5yWJ3YBBZJrBh4KAgwncBZPRWwcQFYVmLHypnUgTwQVfUiDhEDzncVwxQWvpXYBU",
  "key17": "3QVRnqaGrwgP879eKuSgeu8rXKNHs12t8Ujd2TVE7PZ2k7HernKj6b5ifQmFY1uPQ8zCxDTAocdKMG9wCoDRfrk2",
  "key18": "5BU57m8FSp83EQ3KkpEjGPPP4VshpGd9QiuhCbFWVqfhHYpjmJUSGP4A23vPK4YYxPtwoHbeeERLos9SVr4BAbrk",
  "key19": "5VWzjw7JG3LZYQXzwfMQZxiD9QdejU5mMHShqzbCY1T2u3YRdWpXar7gEk6Q8MMmdScuKQuofcXKJaLXmDYRk32y",
  "key20": "4yd8R4tWa4i6o1exWny3gQSATiqXf24ypC8nLGphah4pNmRRisnrk9XYgonVzrBVgj7oRWtFUZEwhqzwdakzbvDi",
  "key21": "31gt3RxU4GUArr6ZzDgcNPidYywgUCF5s6sRzkeUkHFKr4UQDBKP7g38UgxccDjXK94Jno3RAjEFQHrjn9NqRDWS",
  "key22": "x7o4QEHc3rXnVGhkYiqjSvY3XgsBoDymTr5SLjH2Xs3G1Tm4GKiCrZcsjd8Y6Xa52jeJpRTGFLR6ZHF3MgNd75S",
  "key23": "5tTgwmw6W5BvaQQUywdjb2qT3HZy1BfXZCjD6QnL9HffKk2MH5T1ywzsFfpiGuXo1KvuQggKDMnbiP9vkbHvnWEp",
  "key24": "YjRyps5CGLk1171rqNFNaBA2WymbwHEBSajVzNoctwg4w4QXi2wwTq9Q8K9VG6xkbyK1y1L5DFxv4H2B7Rpv3fz",
  "key25": "js9Rpta4xTXvjyttytncF4Abhn9h2BfTUfxV1GsnXj77Bey6Bg57ZGu8ZF39yQHvDynDH6mhGvezfdYYZ7oLgvD",
  "key26": "4b5n7RDHpeQihNw5t4EjZ96WS4Rq5b8ZTvaib4JXGTefMrroJLN3x54p6GH3Psw4VeLsSefspGnAx1cfX6qhVXFd",
  "key27": "3oz2SirUW67N6nJ2UtBQ2zCyBzqVyDEU4jvx9PNBXKh8zpbEDkeXxdSuKCC1gh7nR28jc3SFkce6eFYGUq4Fxuxa",
  "key28": "2qRNcDsnF5A9k2oGnXat4HPH2uf5eZHMsVYzfwxfWxXyPVXevbgeV6ygYSCqqDxEZRENkEmCrbnkV3YMAWwFLb1C",
  "key29": "FynJgDxjfCzwZChGGB3iZMdE8Y2x8k6BshWZE8iiNBDdBaVg6VUH1MaKUUWZXCVq2rHgKFZGH5jrNqYU1AZ9xZG",
  "key30": "3aC7SmKgk73arR74hhwSuwJSLe5UzAtHkWzGXsvnUrpZRctE1NK9YGpiT4XkDeDqU8NVUZd8bPp7zu6a6yyWXhT9",
  "key31": "3VZC2c9tAhWuJ7cVDTMFxsa3f4ASd43gCwHYS9CLP6EbvcqRFP1oteKkL9E7mNgFNoRjzqaqqnFoc3kF6Cc26Mvs",
  "key32": "5nhxCeNYBhUZCVTn5V7HzzfmowXsDJzVNGoUxQ5TqgayPk5t5NW78tHmdai6YEenVMBbCmHcyeNLnoGTxHrCbtof",
  "key33": "2tqEjGyCzxoozyoxf8oTkMqG6ggBfXqrmG4e7xSiedFvUHk2SBUPwmsTMSD56apn3TMawNEUraFHAoaR54vq7Vf3",
  "key34": "2jGA8j6cDRqDgr8EbyZmyVCYr8v7YVUfVVw3LKzVCPHeNGC38aZRr6AT6UCu3xJbQuT2M4xvc8976tXnntDUibwg",
  "key35": "3XAegjbmhXKWeuMH89bWVKSRQsQbMLqb4Pb9DQxQvDpxdehmT1NfDsvS6Nd5LVPZWuo8VQug4ZyyN1Hk2gN5xcMR",
  "key36": "2xchVhcmfgvf7so1zPFH2utovuQMfPB4ncTq7pF9CMXuaJ5AxwzmhvGJD3kh9BZRjiduBzaXmcf5Wfpyji5Z1WJo",
  "key37": "HgWfFD3N4x3mG6QTqEoafLD1DAefj7GtuzVS2kGoiGFowVbo1kSJncr4PTuJ3EZjTTa24EEAi8U796VNyJj1SDP",
  "key38": "yun28NRRFsdYtCw6aGb88AUqhqMWkQ4gKy6qPHKcXfnVbDSbFDEo5GXkjRRDdrqtKU6cS68UwBXCyw7hjzKtCKv",
  "key39": "5ZV3ZEHiCYSueTHEXC9Xt9otsjVVKiT12a27whzjNcSvB6jva5e2RRGb1knJ6SYQsBUqMYVh1ipe449S17Zddo68",
  "key40": "4EzXUZF35iZA5Z1ds1K4uoPpDCWwD4bYGxYqTMy1rZyK7Gsu5eCveZ4DuP75tLwTb9QnQLZAWZxPniwatX3N78Dn",
  "key41": "LvLiM1acahBe6etLXAXu5WwTwnucU6GoZabDmwdonWc9WLooNuXUXp4E2R3LBDeYj3fTfRWXMQhL17YKqEuokEh",
  "key42": "4tYbECxk76ZTtb7qnGMhpdrPMuwjcwfCJgvK26sLm1hNJZacKWhp7XYb8w1FYgBHBdkYRAz6eJrfAFTJ9bVgJ5nR",
  "key43": "2i7JefNB2jChpihtL9ZQcQ6hmomLt7bENKAdnr22JWeuabvw4UoVHzvtC4Pd9X2wjFat7SxNcVjJcDU713zQKKbR",
  "key44": "qSRbznFgfwGU2ySWZkPsuEgDfq6tBYxbUhbivBPjLiV3yrHtJXmduEppURSjECknZNWVLjWVvsRQ4zxqusp4rMd"
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
