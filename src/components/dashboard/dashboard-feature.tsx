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
    "4cWmBPFm5wQeWBz5pa2zR3mP8Lc48zmbGTMAH6j1tSjPTLmNwaV5pyKPoJ36U2vj9VEMrFXmPaFJZzycQCGhSeqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LMSZdaZ8hPHQekhiqAA3SKXKEEMh5XDE5YeY2aAAdSbsXq688t1wrc6PPfEVhd7wX7Z9kufUBx85UjCxjY48z5w",
  "key1": "5DtZyNm6akb29mXyMHjdyichy6eowfZByPmQ2dSFWJgRcKpXf5BB9Ryd6BStqDYegSgvNihbNFy3rqH5KTpLtbaV",
  "key2": "65U4ugWxUeGC9ZUdPfKY9tmFN2LaQa7spMnvXsvysjLyYXxNpTS5UoFSUwj8EBJLKMnMTe3UWZtDZwh8X9GYwXhq",
  "key3": "3xQXJ4iKyCGa79qkTVhKxjZfugxv98vp9MRqC9r1kTkHs1MgbR2SbSjRJCF258kawH6fXjYvGdyqseF9XxtvCkqE",
  "key4": "owtbTLDPGvot84r2NMqVnpQwwmwcopFz3sWPH6uLgd9wnbL68QS59Rq4Hjo4ZkW4eTzrSKSPyXXG4jwAkgwMHtZ",
  "key5": "3UcSSQAvYdAzDqZnC4oKwnj9gQCBw6BB33LaJdutEdVbfJJJGyVLL3FfGmNrGZ37hfk3MprMaB7G7LVbBj4cjZ5h",
  "key6": "3SDs9ee8eVKaqvqZSKM1fSVErRxF6Xcf7gfkPE1rnGbUTW5SRxei5gtX6KoLn3xVsAp4wH68UrnXJBsv7E8stSZn",
  "key7": "5ynmmGfNgtH2mSBpM3x5vNy7f1svKod2CfcCmobWmFDB3QEWCs2KEdoigpDg5E7RSrN9ynGCSuMSEdZBU4JnB8Yk",
  "key8": "3pUBxx9nWYd1uJkNdRvuGcQvHQsuKL1xisAweb5MWX5jjvxC2gNxkRe1Bq4QUejLWutnQ3T56pwiLFoR9uKtMtvy",
  "key9": "GgLLUeDxdwmetKDMrcfhzFijMguEFT4H1WXBuFT4dX93tTPwZ4kzZArGhPnwynGnLiMYyCR1fV7y1w5yjaTask3",
  "key10": "5Z4Y165bKPxL2CKwqScdidBycp4UiKwLhqrrXrorRnHdU4RrFduDwiPRX2mpv8ZBgxcwBZD8Z9CQEVUJ86RfACwq",
  "key11": "35kxDy9SwqtQkTQNFG8mGED3mikpfdWqmTrmFbTaGRGhXNJ4tJA5ULqn9gCh87URht1NzdqkczffSUZM5VRNo1oo",
  "key12": "23cjoWw51nu6VYmqTGNtTcWNVppu7wRxzGn8XPpArwv7tPasYY7x7Jx8GVmdg6b77hyj7eqsEak1XJZARvX424qa",
  "key13": "3uEwH7P2q3ZRQvb8ctiJhZqijMUowWrMqY8Z48kEvsR76RvgJsNgzNXyfD48iQXwhFRQirkkD2wwWSGtvhdD4ygS",
  "key14": "3Gd1ZsmRTM8eKT19Krx82SHPE55eApUQeXG531mNiwUkWQ4bCUwAmcfnWhSZYKtM4juPuW7Y7n5q8R6QJp1H7ok",
  "key15": "57xErYJ2L5u1L5X2Bydx6ccFkvzCY9gWSBCUDkqv9TZQfzCxkeuEditjpLc3vBn8tMpDXo3wHWNbqJm7veVnYDkz",
  "key16": "4Y3oULjd2aQiwYCcRbJbdXgubChqFwnRyDbWE8TAkVNRLay5EmDS5fJ2oSodsh41bEjEDEfaYgCwjanmNgHGjW59",
  "key17": "35DGcZJK5SjrGFFVrRLAV7K7kdAdb2hBHBXyQCMy92gq8X96TdP8UQQ6CNQWemdYfYxejoAt7vy6UxeyxyKdWxgY",
  "key18": "ecF1NXuAkQqYGpDozK9CdXa9P4UM3cExt89QqMSL89mReM1BJRaKMhaD6gDAr4jhirNca4kywRxVFcTy7ApAz7V",
  "key19": "2XhNjSXxxt8r5pm1QmL8oAmZVjwkK1Jjf23EMotNfZBfegG5UBCNaC2zq4iaFESMHXn6Xp7vyT9LpV4bebj3iTPz",
  "key20": "2o8hZT9d1Zk22PCQdThLySvYqW8ZSxYbSKdxyjULeNMhFDnbJGnVEExEMtJCRxZuWrZKeEq35Js9FNenoKM2QSAb",
  "key21": "Um3EBV9k1hGPtqhqkhTwVz2iwvRG9BAQwL1K13EtnDFwT8g2kbx5DDonESaT4WwhtPPRASj7wNx9gqmartoKkyd",
  "key22": "CW67HbwxUPzNwTshCjwrkTaKk6cgw1VmXbEHeJJpi5LCNbXQVGNJMJW7h5zLbNhiEntwP8ce9xkqTTifySmFuLt",
  "key23": "QzcUjmwevhrtGGo97kJ2VHepUn1gE5StYL192VT1saNUxd6NVsiNe4QuQTveD3gNnkzqvgynwuKQgnL5mwWQ1Sz",
  "key24": "66qbV1HUN1PM8S5tcNDqsNXrazJb2o39F7o4Apn1mmFiRb92tjxUVM8WcqgVudETb7i48ZzegFGb4UWKx2WK3W8s",
  "key25": "63uKEsUJtTsVjppMwxBssZX9VJ8byJPzk64ddgRinTuWBnaR174C9Ra2h6MToxpVKLdHrDQbn1hMd4FjNQwe9Qay",
  "key26": "4iTEb1NwwpqETQZJBYMvACLHT6dJWUa4PmoHcF5Hwx1jx6ofeMtzc9pw3cft7wqsGnzcW8urPNbg5DqJuGo997zk",
  "key27": "4izhjdBUYmBKrVeDvhxfvVWCC1cCNmxcnJSGo9bEyZbdCCKMzc5ULQB5Jucmv627hEdVTVpjzHE6LFJKjKg6abSt",
  "key28": "2rmRmq3ke7XAf7dHXrcyoZYtSGc1rof5x6jP6yT9yE3mQg7EmcatYozraTdqbc8yXPJyjx2RYmkG9BJQ2qu9fAhk",
  "key29": "46rEH6RpqJ8WTBurTE7SQLFCYeKXgaEuYXWbabivCMqxxSMXbFbuxKTRq6KWnRwUih5GozLt7AbTAPZ1zbFsTsB7",
  "key30": "3YEhTaSH6zKkb9L6K9g9QTaQNG94Ro2SygdeX27WzBSrN2mXx2uJPb7LvrQ7xY2BVFxo9AY6PJyHMZ2h8H2Q4CsA",
  "key31": "4HZeGcdsfK2TkKno7XAiwKP9QjZgzymmgDBD9NUTRJy2ZtA6ed6ozqNhj3FsA2TgkGVqufV7BVjYc5ueBDbXdHz9",
  "key32": "4TE6pFUgZX34BJSobUmeERN4YAFgDHzSR9DuFwKQFee6mNnkAFF7KNRMuwdmGiU6rSCuGmqvbkQ1wTJcyix8LzXR",
  "key33": "64HEBYakvdn3nKHK4jG2yApcsJRVtyogbgecd2hUkMeNtcQnbRa4STQDmfqeDxKBQiinF2LivTGyc4h8seW4pSfB",
  "key34": "ZKosNJqLBWzmSbD9wVJtnJWTRRS6vSMYPbSUpxXPZJ7QyzmuK4MSswpRg54DGRVvpWBKSca6S6HVeAwFcZAWtSM",
  "key35": "4QWjTav2ECVbzTEXPPF6JB8taemkX7qSxU9CKosnE1Y71nVSRLJCGHdY8en3m8uJ1GGHXwiS4toiAiqswnwAS5T6",
  "key36": "4NCgA8qxfjhBpzvueVjR7WiWHarwXhUCpHwizL84hCTG24A1swXBcN1fyAGojMh1kmQ3FgoiLsaDXJbwsJ4xf1tQ",
  "key37": "5oJYX21ULUwBpUWah2v1zByx6extq3gnZgDYkL2dH6Z5zFF4aqNjmCvTPJEKRZfXeBnFqFNvSsoVMygxRTQZL4tS",
  "key38": "poWmZQ4jn32QWU17jk77BdUJouxqZfxcg6eSMREbTzRfwyAcWZSA8CQr8eBtbUBUd8BGQj8PzhFyVc7TVTRV9GV",
  "key39": "pkGjpGM53Db6qQQBzwSiHEiZTomwBixY6vZwVozG64sJ7MJ2wFZCZMkX7RFAGtdwygasoC8UuzGkRRLARjHezAV",
  "key40": "HNurhaVBipRUcUMNPizRHMoQSZWvBxgQHwEXehuPsCB7fgAj1TVt3sAuzEMc3sentd3S6yqmVFT49m93p4KEjWQ",
  "key41": "NscYQBehDZM3BS7rPX7VL4hXbPFZkzKwaM9r5R4jF2hpFBMxtAHTkPc76LCXoKk8kdGrTT6ftqpox4PmCcmZEFy",
  "key42": "oS1dFyYELFnRXqL1csRsdjXN3QXmDj1VZENUwuMspWMqBHi8EAHoeopsJchg3PBEmBEBau4CSi1GzhaTtwwW94x",
  "key43": "9byADdgTmJRfp1G9SuhPt9KzCz3nVjGeFkjugdYoFcRCUmaYu7aoJv537vZF6y7qXib2mFqXdCjhCcsdfjFZmvj",
  "key44": "32i29oKKhorWyNq5uAWbyiSVsqBbQz2kqQwkHNvoqDrjU1JuMZBWtVzsGEx9MdVErsxCyW9srieE6VzguUwTxgpp",
  "key45": "j8kboyuukXxnYeoHpsBNujBwHSML5mGQ9gKpjBs2U8cnewcM3KBSCLW9hj3WGfiZhLF4XQCE8WrgWVRdMf1i9b9",
  "key46": "3jefpU8PSHkVreKmVYenrhyx3ZYvxDxymqMDmxp79Pjx7cVuJoBc7vPaQZHgZBQ2sBTL1HvHgY5iSp1kHsfiTk4h",
  "key47": "2hwjdwmEaAbmvyc6Z5pnEYRJLnTBrT9Bq7Ax8URdTE25WMvtYAK8RjFJhmMsLiqmQ42dvLVR81ra2LsN8tNrSa5R"
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
