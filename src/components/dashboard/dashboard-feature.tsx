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
    "5Xzk4s4LaqLBw7vA54iqfp4SEuSs5jPAk4uSqYp2pXdG4AvwyJhMbgP7EriAWkSDJaS4f6q1g4MB1Q8yNgUVwAAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MnjzqTjebAD2XM5gHu44EMM3Ch67vB1xSVuitkaf6asbJQ7eQJKER5rPCpszTB13m4NCQuczUPpQmAxaxu6nXD1",
  "key1": "hCA3DmgTvxxiwoxZUjRVQ3KT1bE9NE7RX7nhHHu6pFBgKVz6aVLs1JLhPyzbBwxUPs8XJkXnbTqP98zDb7kNbp2",
  "key2": "4K32iRQ7obq1MnEANgyZr8aG3PqdGDZ4wpfu3frwYsvwCnXBFyX4pNR6XLD4U5C2JyAYVydvSYD76gsUEo2sw8qN",
  "key3": "4YTRU6UV8fT6hBgML2P9Jwy67YmLtExT5FMqf9FH7sVzk3XLPJMFDLCJeq9m8YxMxa75cZ14cAsg6ZWSwerDKMKY",
  "key4": "4Wh8f92hxNjKEkE1JQPKg5J88pdYrif3tK9o1WoJfcWeV9HzSeFgwWuHeUHFgy8cD8UQ7ZYhsKGZxrG8QhSTwstY",
  "key5": "4fu2cUgkiAABnapdtvGKyRGRs7SgeY5794GrrLysHWFPM8MZ94QVPvZLeqDWytnUbBKYpa63RKdahcn3xHTJyad5",
  "key6": "4PVCo7Mm7uFMZHQMzrMt8RusZ8bNX1mRWpZyLd16GvMPyF4wcFpf4cVobNtp9KRaQmPCxqZnURuaC4dDM86EvY4L",
  "key7": "5cwJHfQLgLnYQGk5Cixr8HDaHP78cS8yHwdETF2Nd5WUdpwb7Ctq3JAtgYvvKEa1ZNCzTnQY2rdZjvC5vTGAA9WG",
  "key8": "w5JYtGftRpP7VvHDeEpyXorezLc8cRarCUfVFU1b8BDmxWiHJXFCt3vf1DncMHNoS85mLxNEGeYwSbVyydvgLN4",
  "key9": "3p7R3JsFBsfLCRJTgBLfzdg662Xn1PZSoQKjnDDvarh3zpFBDXcgKNQ9bk7MAENx1HqJ7292Zo3ioq67in3Rfu6r",
  "key10": "3SwKAjaw7KqodTrdrn64KeCdLiugDSKL98LC9G7vEywgQZcpTD5euXVsfBu5dCA12JW74r9Sts2dvNy37GsQeWhg",
  "key11": "WiX5BQnL6F21ndKbYbaHqJQXNfWM8HG7HD9KK848JZHDHLcbTbARKS85n287FQgE8UNT2uQMww43k2PDP2Lkt6M",
  "key12": "2ujsM7yKVwW2EKDo1rgY1SrHk1vLJ8nHJqKYGAuY55XVARgdf5xBLEafyq7JSY6z7n71YXa8ZvKVvGdWQwsDygaL",
  "key13": "2VykoPsyvuvPcEKjaU7quy8uQMbGK433EXUu2JdENL7uC6KAXNCagAm1AY5jAsyrPKH49LhQqgApV9BkYHXBMtr5",
  "key14": "ykL3ArMMsrpU5nLAiMcKEuksp82wqkwsJ6PgULM4hr3iee4zNFi9hk8pnbk5KUmqfZjRN4WQr3bsazuk2KHEP3N",
  "key15": "2zohtYfpr5QyETiFvsWw8JVb374fCwGvpkofLym15Nykvxup2F5Yd6cvFkKvzEwBrKUyCd4HB4x8x5XbxLzueBjq",
  "key16": "Zr3dzGNZyaWJKdyNkcP8R5Yu4KeqMJ7pG1VjfeA7MgknmMVkco9KW52tvimi3uk5imgoSgjHC5F2HYWUYd8mNQB",
  "key17": "4tNjfNJErKLhpM3oCToNq6TAm7h37xhX1aG4Q5SKBHW9ZKsbfXAagVkHB3vnc7Dw1XKyU1kx55XL42tUwjUZXtzg",
  "key18": "22GdAFvXnwxaNwBfgFqni5qyzWHZvUQk88VfPi2rWNJQUeKreDN2eeVi7WxPQkEJFKiUqQCWh4TTgnwq3qvwQM3Y",
  "key19": "5va9Wwkox1yQbmAbpepjULBxP1XTzGsHcPToMDLi35azcF3tkKsfPUVz8rpZcyBZrJMb6FzwnD9vk6SKkohL6hpm",
  "key20": "28t38wP9zGEUZpXPxBX5DpscVpEJjQ5QRLU5BtubTXpCdafaZX9TLLk6jKXbzPg32C9up6MTRDdmBkPHLxPNaMwx",
  "key21": "59jgapgW7guQUKwjN7wNxm5vJmTAUZovXKhZZZ1Bcx1KRXKjn3AkGdDcWZ1vS7JY72KHD6pE6xpK5zD2Ze68kKDQ",
  "key22": "23uUnvSp8QW1jChnJxktpdPE3YQpXCcjGcNoTm8QhBGEGQzEgZiGypvYkGuV9EbFqxqjXEnSsTfko5WyfV9r1jKn",
  "key23": "3HpzmMwj5hoFYXd2NuZrpoghFw52GjHoLnk8VMLifqVQjm6WChc8z9nMFtCzySH8tzCMVqeVgBQhu35DPcq45EDP",
  "key24": "3nvYrGKGXYDGxb1cvMU8m3tUxazmD9Wn2fe7onEUdubyPECxxonujtomRdXdPfNhmttXTvzrXe17xHFX6ZGqp16D",
  "key25": "4BPiud6KAAJDHEaR9Ykj1AuuNCHuXUDJPZYWLuJT1tUbAwRkToLN2YmT9zPUWBcD1BvDrYDiF2SPtE7TDpP3Eyzk",
  "key26": "59DRcFQSSTqG2ha1mxPPdJ68BG4KvGxfbwoLDZCKeuxQmCduw79BYKUNYSCrHafyGYj5B6RbwNLy2HZWvshN78jo",
  "key27": "wU3q4JAaihTgC8ArBsmpEgLpDJT2kK5QV7G45LTw41KaNLNMn2N4zMSdNKkDCTtRoxhRkF8vYSpH6Z9HGtvg5FG",
  "key28": "5exPJUBAf6BL32XdP7zxeqaqxALxEwAboJtMgc9dLj3yvt8Rbe2Lu7fU1c6Gh4zUUsMYncabyMkhyEYD6HsoAC3s",
  "key29": "64ksrS79Xzxks3PSXRao7iZGPRk9eBhWerfw1qmQqgxbBTuoEHNCysbaQJbG2LDCPmqKdFstP8B84txLWwfU8Gt"
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
