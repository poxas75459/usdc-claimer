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
    "8oBMnCXvn7fRiTbmYD93x2VL9ykS7VxhCcyQ6uYUCubLqcdMHEtuk4VP73VxRMp3HDbKJX7BPnnm8sgqFhxL6aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psQruCHSuxrNLgffiQg4gvxFgYJkSvtGjkjWSfgv6CxaJ969AN5YcdceLCp2aNKDQ7NjWxEpjzFXcoeYfHztkTo",
  "key1": "2wkXAzR3X6eaZAmN76zS71UjbDdRqPzbL4VokybriGkPetVyohmFTcAHm6hqNwqHeYTLLSgNrbGd5gFeHJpsAGHq",
  "key2": "J8SfanLoWX7P8cn3uny6WexmQkyhpLjLSzxxGEaywpqrMrNpzYq5jf6MQ3954T5117kVQtR9w4MVEARAYDa3gyb",
  "key3": "3Fvi35dFfav1MnrhbuoT83yUQyUCrnwdsakmzSqshmGmaVyJYseh3TP63SDBLEDwJxmyEksV15QK4mipt5dys8eD",
  "key4": "2jMKsYB1NPFxUBWKLJVzcDV8xTEgxREFtN1dyvRBiKwBiXWSEYsENz5k5HdsdUosvHRemZNKbrTBdLRPtj7SYNwY",
  "key5": "39weSyM9GawfCWaw3sU5t8EJGGmjfC59Fzk3dWGpvuqYMUAwgHJa5dKc5NybnsarQ5AfcGGXtBQQKdXgimhFY8T7",
  "key6": "4uc2ffGhBBBd3eJ9nomNT8ZJ2QoToK6WPZk1BCvAQFrs5jcMXDNoKAWAJkj5qDcf2LcGjooK8vgYcfa9AZZ4piLX",
  "key7": "4iMorz435ALDvS3qVMJvgj6zw5LjNFbDfN1iraqDre9ZHzdKDJsKunK2Z89R7j5mTEmSG7NjTCNoJWsAW1VJAo3",
  "key8": "2vXydUMff6mTYARSmeXqCoyfgGn1G3JR6pCAtheVTCLAEGPpmG1mVGaF6K5ayGfV1xtNfs9rvu6Q9tVLccnkmrKD",
  "key9": "5Qrbwg9UU9eMwmkEk7EPesLQiAg5tpscqTRJZxLVp3W5jquqZt2grXpkuey115MePKNufZGfLhHDRrnciW9qebym",
  "key10": "4iE8vTBGfKePSTKE6WfF7sBxuGT1bExTxxKMKkqE6eKaA6aDD9bZoZWasQFVDS7u7NjSFZRG87fQceU7F23KoXmX",
  "key11": "4rkHc8Q5FYgfmxuJkHM7o6ePF4roPtezma9Kd83GgheK4Ct1GEcyC8zMQRyoMpcidg3XVMQHke1Kfcr61f86iZwq",
  "key12": "KBYpe54uWQzhG1YUnRMRP5D15FUPYPVrXngNjf28Dz8GWqC9WU8r8nxxZKH2D63HCjTvD4TSfXSTVEbsBzAwQpr",
  "key13": "5h977Co4EPonjwZPPqyo831GnMfxoUtP6iJAYRFC2S9yEWGPMGRGQkYdVLxsAqQd8eBYfsutKVxctasD9gqDxF7x",
  "key14": "5WvSsyshzXN9UjRPbiu7erLzEB2FUNTUvunynq3dcjeqABzWZcjXZ6xCdgH9uZCf8RB5wnrvDQ1NM8jFCBdywNH9",
  "key15": "3WT68xw1SxVdiihVSgS5CBknGkWiu7VkKjHTpD6xHMpTZpm5UyxUvWbc9wjtR3XRWonWtn9mjxqFDR79hT1hZvVF",
  "key16": "3ULcvsUG6AZ3cHcKzK2jqD13f7ze83HHCgQKEnm2ui5Rfr74vvb9cXqarcLtsbQi6jnBrXpwo3KKmhsHm6Z7qMnQ",
  "key17": "5uDyJ21DfZjXvYncKpzURDUFNCQsqVsBAVS1XQRVA1espL7N8xD8LQK4GpZVCkQeewRyrCFQqmBubk7wE1fwaPZS",
  "key18": "5nbZX8kYqQGR4gvEP7EdU98FpE2saBTqsddHjZgnAkWLMKmckFgeQEMU2tJCLyjPZFLYBR4nxjWtWWWXD7pfCNYJ",
  "key19": "4RYTUbCiG1t7rRZ8HzhFJXmTz9gaga5cscmyUNaDSwMiacgHXqjtrw8vYnumNxDZc7gP7UN8pvLH5Lf7KfEGCBe",
  "key20": "5S9YAEQywAZBj8UMQTt1kgTeVBFGrpEZ598HW8WtQSdMNTvtKNW2VojB1oQvusB9vFnJA8VX849vdhc8N9h6TDWc",
  "key21": "2WNzWvdcqpPGjTyNH8nkuasVdPvd6sZZaRYc4S4PzshtM9rbcLnAVH43sRybPVbEDRZMapdMpw6oKTp4bTvVfmMv",
  "key22": "gM2LJPZbH9zSronH5wN2X1LD7tFYKEoyxRm3VK2C1tGVCVDNe6MiWY99PM5HNgG3VF4pbiQA2muJHZEgo1nDRfU",
  "key23": "3kCmjXVzoNKgAzHDJHCxGXM4HK6x6DSFHPkCXif76SEcuq3dzkL4Ek1HW3gJEuVxfLv6h4uPpEbZyUh36XxCUoEZ",
  "key24": "5w5d8addekCpn2CMxdwFEVaZWX1J3zccZ3EHYRtZ9jajYkwVD2vqXHthtQgR6Nu6rgncZquXL6oneyqSavQW47FT",
  "key25": "3ey8yA9XmYApZFFmrBmrDNc5EeEw9dTscU9s8xLrXTKpoMV95FfMpeTgNekV5FZtpi8oWoJh9fva9TMmEWSnbsHe",
  "key26": "2qTFkcCV5EF2zQkSaocLb621bkwvYzYjs1jsNHYbPEZnpKkkC32TURyixBh3SRuToT2VuSYzctDKrFHdtcampUHY",
  "key27": "UG4GwV8ZuxENTrAkH1hmen1bFZLhGSvgJWsDbusyXvZb2v7Az15psPrkdTznJ3NJyFu8j9wUc4KAHKcTZ7bgoEA",
  "key28": "5yARRqttbYyEFYkpzvBoChxpty8jzNvRaRy74WkcjMt6LwcimL3o1u3dMercBhi8YVFxBWCj19Ag5jsPsrHqLKD2",
  "key29": "2HUSBd4HC3t4N1qez6V811mjpxHsP1ViyDDUrKq2YAsLdVDqPgqtdu6y3rv6XXzxe8pNrMaorjFafKRRgURNNCtr",
  "key30": "38ddzVRmX3FZWR8arVXiTAJKpcroWTzEAgL4JvbvZ4Usw1GbVZubUHUfYyEKXejBDHXeoW6pdyhguNvT3MrYmDv2",
  "key31": "2hWfZWBHe9VVLD7jqxV3BoFpq9RebUieqTfaiHGP9nHnev3C6pc6cwJzSwxkz7FurBD33RLKD6hSUDJDWUSGtuVa",
  "key32": "2VPmrY1pirtew2p2iUkNJoQLerWbDLkhWNhAvRgm8jk6a3ej82uNFWeBt2m9GXessTwFGd835VT6ca9A3KxBaoe6",
  "key33": "4oiAdAed7eVDPZNZesFpziwThx2WrKgxmLmvhiu2Md9o3etN66XbDt9ESSoNusG4gW9n9vYFZTYjG5aZP7oJ7odV",
  "key34": "55GCAf6xa4HxYb1EaxQgzzFJXQGAZMiButwuaWtxCTw1xyiRh5vv7tXF65cT3s5MTW6U3AuAQFUJsgCKs7qEnmWv",
  "key35": "4kpc3Zmk5HZ8MxHAw7futDnr6XA36ByuUM767hCC3WxXZUU4jSurpmHkyLrwp5wGw7CkQGh9Ui8XTfpUmx61Hept",
  "key36": "2jSHzvtRCijqDXZdVfkkwiFR2ghM6jPjxyA9M2Y4ZmKgPk4eHeFB3grxM89wRBPvSHLAE9fzYuPW4raeGGChmAb9",
  "key37": "QHMzeLxZSQCMwGfXSSKx5gkkJC19PJnFV5ivZFMByMiiaEmKqAuuvvDUyyx2rmW6tLaUKU5eNTpNnQvmwRCma3d",
  "key38": "5SXCLHnKHWRKSTJpc19qzegkSANnfyzGaqPZJcqyhJxVrrgBz2vDsgfaxKteqcvW5tV5D6KxueZTzY5J9Um49CeK",
  "key39": "sVhAHvQdYQcbvFJtHMsHG7DeXPX9tR8bZj7zByxtABvNHVMU7EAmPHvJkxZgifrFGYh8a1iHfWZr2MjiBEYA5rX",
  "key40": "3bKJwdDPuEirsbWu3ownnUty2JUV4Um48VKLC9CYguELFy995DU4nYFh383kVXWiwPZokyghYSSRH99bMVhDHP1D"
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
