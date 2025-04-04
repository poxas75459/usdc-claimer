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
    "5kJFxsZeKYX3z4FXV25RT21hLjRZVqxtpaKXDjmr5BLU5WuvEN1qbn9F8iNBW1yMCxhNT2CJ9Y6rWqcneR66N1uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qWKQao97uswi9cJVzynNpo22A8doHYsrewZEX5zQm9aMYKS2qDk9aos1b5Z3Z8fdTM83VAsuZvBS5QFep7x6hvN",
  "key1": "4zijkk1ZHGfF2YKbNnbx9DthxBe9CkcHrt89Kcf3jDYPD9Pyd6rQyChJVVXLvVoHNk9yVTuputM1qPJ7qMk5Z6cs",
  "key2": "5AasEvA9PGY5WBXrHKSxiowGEaqwBNSAJ97XaCBZeREKixKypW8Wrbk5BEm2txZuQjXAxUpwQ9Cp352CKJid9zV2",
  "key3": "4fc2WnPzhGUXcMSA59hdKr4MTEvw2G2HTdomiGBjpHmBt1PhDqjSGDcryvHwghDkTkBeuxU3vmViqk753KUzxjHL",
  "key4": "8ZxUzZFyX5DuXt9vGZFTmEZqQYvnNbxrgZkQhoa2uSEgpG7hGpsbfNMZqLbHpAGAq3ccNVELr5iked9SZqLPmMs",
  "key5": "5UHbYads1NEz6t41xQ7NKiZEJ9ZiKMU97GdKN42wfVQaXQyjf2315sdTk4RP39mjU13HEA8fJfpjBQwS9uasLuA9",
  "key6": "4LuFHX81noYu3HXvs9PJqV7m6eFL7SQFCAUnMkHz3q95PJgS7JQjmRkpCf4o6z2ejxSPgTBYyHcUoBd2UnHRsV14",
  "key7": "5vYrJRHhgzhtwiQTVD7jM2agrcjk8DUFv6nu52XG6ZQ8aCBgxppqdWNg9AspUrYHW8D7SMJv2jTHr7pA6YbLEs9t",
  "key8": "6DTX2GChYpdTEAGXjifN15rciG5GYq8EehFPP1HUHHAiAooDwrG17zAa2rYfnxaKmyuFuJFSvEeJ9UPnq92jjDF",
  "key9": "qCvo16X7X958QYtAXVJsd8KDvYoYdgUBRBDMzQJujmfinGgDamERuPVoFsbnm7dnU9vi1L1Q7dTx6mhEmfnjmde",
  "key10": "5CJGDB2Fx5pL48KB1JWPoRUrqTjvL7z8sv8qfvadYNoMjTqgXZ9UQYzup9ASyy3kwYRTUqWPbUHCKC9KLcBbtFbS",
  "key11": "59XX8VGa8xquB49W53bmCiP8dwhKeUEr8NXc4EZ2QybQbpjMhEBi9CQXn34ZC7gdnrwv8Tu2UwoyyZw3sonJXZed",
  "key12": "42zPbrSWdmbHeSu828aRFNEUUUG9oVJaTkCb6KoYvW2PeRKoTwHKP7oDrcNsToiJG44FFbX3WP1tcitVFdBBVYeT",
  "key13": "mmJDmbFDLmGrVdeGxAoRFU6TuuLrg6SEynr2yq3iHGHSoeFbXHUQiiCqVSpSMen1i4KdEHFkSQL4VKGT95rRFZg",
  "key14": "3yCvzJi1rZsFxdnKSUAjQJ7Z1jx7cpAN2F78XNffHx9G3qKvBPTwGQoDRyLshGRWQY8s9KZLuKUG5d7sJgXAtVfM",
  "key15": "3WVS14pVAX5aLPkBmPUNM1y5pNm9BCSMetVYLzHfG5pDAapqdn9KYHjxum6ejZtBGpqDrEv8NGPovbz4u3nSJoXH",
  "key16": "9DfxUyfot62MDv6TbSB6vAjjgP8Hhy1yFV2tcL9RJACDQ6SfAPk2QN7kfpemCH9nCsTkufzfgKov5SJrYHf4qyn",
  "key17": "2q5yDjB7VDBxzqFv5AFYgERwL9okxiQNhQU2adDj5wEmrbJU2QpgZfawuBnNkbMifL8FfLs29EpFqiZYD1ZyvTkF",
  "key18": "5UJbBExxTVJfUNQ9zXYbZof3N6azdMfzbNjHh4DHHBjxLCsGqDjmd5Gpcbo2ZFAP4grPHXHiMdittVQcWnjUqgEN",
  "key19": "5b2v6GYRerfQkEfjWoyTGwEDzTcVa4as6Yqh8edBtXrnxCY4x97JHBruQN2mhkrwqXFAQaGdzRyc9yd9MVVTUEw1",
  "key20": "3mUDQR3SBqr9rmKjXJ1xqnjSuHUqpRfmFsnhX9HPqW68cwPTbQ7oK1cJqxj3MfFLMktoCsYCw53z1bSfmWrW592P",
  "key21": "4FHVARJ2kZvxt3Lg7XL3xEB2Q4oF8ziRNdXsdPJYvFNJxT2hhbmKbCSa5kn3xb7SophSYkHyfHVYr7Q6mFtc9BuG",
  "key22": "2mNhXmD7gYfkk6qAbnZ7C392Fe8hJtXntahL9c5YmcUyaQCsUoaSSXpsD72tyCyi9m1zCKZLdRPwbB1zJuse5ksr",
  "key23": "4eEtc1aErWkLQnHyz5XsJqCrQyjP3oCBvmSkUdAjxJycckiqZ3Kp6Eb1485LNXBfXPzj3HD9ArTU9sxandYgZU2k",
  "key24": "93NVg67ti94uzGuaVdJc1STdPTDAoBkScopCjmbwPhzj5R7Wmyfm8ZiGP1N16G3dadfbLrLPq3kvsud1S2SYvx7",
  "key25": "4ksjVH8iL9KndzoTLzs4pSfxJaQM1f4sYM43oZnkLpRbqiGzBxL53Vy4X1XMVZjeoqZ3StXf2VnVoMQDvV7AnUNn",
  "key26": "5NT27SM5tnSwDadQnYayaZfiz97Zx6dCfBFWN4Jxb1bSeWxkwdwbiEyXp2VuRfLCYwuyFj8uGG9QPbUtdcXxuCeg",
  "key27": "54JmNLwrozdM4ZF9YE9eo7u3t6Gd1sohyTqLCH28oSkkRt8tAkKXNE93DSfPPhd7JZJdWc2kj7t4mBAhzRrryTw5",
  "key28": "5VfAEJzcShUaLqDEE45xMTpwKQ5WX7XQn99U6uBW1W9rynGimi2eBGfkatNVp7Mj6UmuAj28qLsZsmWwbZAGVYeg",
  "key29": "2p4FjF3mjATyN7gjHuBVgb74FHvjmuEAANEpkGfZhHN6NNDiZsQTyUpWQ8S1SuNQczrEfT6b6q888pEe7CYLydm9",
  "key30": "3PQPxZ6ckfpbN4zNZ29gH4LsAc3RRjWAncrBFhJoMKXuTAp7Ag31hfoiLhwY1DEstQufHvRxjKQuwUpjSXJYsUKm",
  "key31": "5GfTCh2cdb5HGtzxm47D68frbDod2E5MrWfqiqUvhKpe8rQpZwczFjYakCLpXeWBWV9QZhuC8z2a6SVh45N4mBU",
  "key32": "49xE8MaZtsHTV1HUQ6NAPdN7uJ9onhnShtBqj1J3YybfyexWd9fPsCaqVUmmc47XYrt4iyWx47ujCVsxU6CsmAYq",
  "key33": "2dmakRWzR3gNG7w1JM1RXRHFFWGn3d3fQFj75PjWLDtMPy9jzPVxLxET1CqUkJmWSUjypKwAYcBoxHzhvdgPfZzm",
  "key34": "5HdMDv5cGrmSoiC7UihyPRUP1fQqJc3Bj91xa9fTUkFjq57TTa8iaRTw1mwPq1pVdbATYoeqmwqLiTDkkxyUaC8d",
  "key35": "4Zyw45vZUFDRmTXyvspzgoygdQ1KW6rSWvuu47YbUWwng1r6kFhUeMGUNa6VDuEY7wRwhAMkyQhkGq28C2jiRzEK",
  "key36": "eyK45n9x3nvVSoJUfZNLBN5n2w8dBwoNQWdcCdfuSTPFSAeXYbsRr8wF5f8nvuHycnQw1DiwVGmbtzYctK5Mc9o",
  "key37": "5afSFddnhGbQiy3T8okheEWyARdAgTZHyoCTqE9rRedYbpr3CiwMvQZhuW1hKY7wqszYS7bpPLedwDH87yufdqm9",
  "key38": "4GUKQMCfuZje5G6FyKudhdvaQxPFWMBSU5AF3Z7dJLqo2dHHyC2kw3EvYDCRViusP83iSFfFqhYhGFsZ8ZmZvC3p",
  "key39": "3rKy9sHkkqWUd3gFMTa2NWftvNcfshYFHL8UNdkS5vkmvocMY1gvM3TWhpgcPvWK9TRqyiTMf89fnnWXEDYYQqvL",
  "key40": "25KA8gmWMTJAPV6FbCeR5XZ8HaUdNgRhrFqN6ZrwbdpTUyYXKzmeXtVpFPBBnJJaeDis7Kc6Ng1tLhpK4ubNy5LE",
  "key41": "553TyWd5KdG1gjsi3HSyjWq6tt7k85t2bk8a8JjNNib3wDJpdaht55giyG8Vp549DnwghAqY6i2yEgQQTK4BcX84",
  "key42": "meHEDUVYVgERVHbkLL3CS34fnRvTmSv2ENCosMeN7j4kTecm8Lj6GF75YRX2yBy4EAgW5VTxVgpXpBrAXjKyYnN",
  "key43": "3t1NF8tqe5HBs172MrebEUEcMdNJPeEinfzTCFBFzuHEWiFa5UtjevPS9efbKcNockBwZR2B5hp3hy8ezzkc7GaU",
  "key44": "5XB56ywqTTN7pRm6EsUiScNsU6hgPNrZ2BYHQrajbpS9rPnTYJ3fUk8Yhx2UJntrxqsVPA88xFf4qtJjfkpHKvtn"
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
