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
    "3tjnD11sTGeegD8z4fgfuh5xornPbWJhGhMDbqbFaba3iMn5PxGqeH2eGR3rvuJb4iRwfPC2G3xbToL2gbZXQuky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2amf4PiC6x3Nzm9EfkZrkPUrAG21Xmzdrqvzn9iDybBdf3bBT7k8uYmVjippAHGWkH1FkJbqYGSuwT67EtYQLDEm",
  "key1": "3WragxW4xku8Q3bADEYmh55GSzy947WFmiDz2NoQjFiGcq8TiBaKMJs5Zy5HU8htLYkk7AZ4xC4fqo2XnQisybCx",
  "key2": "2VPJ5cH98nKSsaUh6m5V1bv8AcRASxmaHYKwuBRvrQGs1TvfU2vrapkzxcVGgNv9QD7UiuG6V4jspYxMpFK4PzNv",
  "key3": "3KFzD8EENtQ5cdSy99rbM5qq7PuHmDBWrgw396Lny1ExvF31eMnC1aJzXMPJ1QJQT3MGCiMLgWHtxN9rNL5qDUfR",
  "key4": "2UKwACXRThQrVUwSRhRkNVSMDsQHWSSXjYnoCkf5o2wjnMhUyKLtkvX9nwx323eTNRqimU7bYwsAcFsxA81vpdC1",
  "key5": "aZYL2Ztj9ih6U8GSKNHmDKUMsNXAPwio1UnRY5JUQseG3Fk6hK1WSgZERzry1C923w9cKJ6V4uU7cBBhDGmEL8e",
  "key6": "4sADDUGGqKWwpNjnR6KygNKctGFKJNpDCkzRcYWuctK9YtsuhSL2BJxdXQWFb9PL6bNkCD4uknhKpiEyaMgiPRSi",
  "key7": "tp4cXxsvoWSkAX657or5jiFHKyh2usxQecC9B9rHwZEw8Q7WDc6BgU9TFDJmdJp69b2NZf6u3WPSAeqLo9eY8QR",
  "key8": "3LvRHzzUK3QVxcQ47GjttE5rq6MEXMmG2u5jTTDkrT6nEAT2cwPdDXohHUtjhMC1dstXkNCm8G1tvo99sfuCzUy7",
  "key9": "4xEUEdm63kq3fyFkFZHqYuEom66kN3vm8kjNNrARQBeLDQpwZ96MTiedLVNEX4k4LiHkZ7utZqv2pTpGtVnzLxn6",
  "key10": "51b4UGNJsxVU5ut57KSPU3eWPeFr4nkbe3GZaVYnPmNkxfWFoeQc5B5wsV3A2qgW3eFNFLRN1VskqgcnVSZy1sRM",
  "key11": "5KyqwUcMzHniYiuj9C9LMjWi4nRhUz8uh1aeDa2m4c1CvNQUUiyyzme9rgFroeoYMuMXFF43XWqdEfeFnvwTP6aW",
  "key12": "4s5yoF47yrKMzFpVdzEXKwkRqr8njhoccgAwAVf3s8QyX87MusMZzpC2rnDsnexyb3U7oNnEiNdop7zMo3dCnBKj",
  "key13": "4Jw3Rt1TWcdCjJbWqSLYrJms18GXVEhT4oGi2PP4wjB1FR2jJjxqsCchpS24FfKU8rKvj9ZJcdeVWCwQjegrX9Uk",
  "key14": "XxGnZkq6LC894H6U5ViPEFsoRrBP2AKt946TjFn1qBsKJi6AEGR3teFsaXw1brAzYBEfDzsFkCJrTGqPDBPncwF",
  "key15": "6p3uoWYJSrYfjfqzDkT2PfcyaMPbnzBgygg5sqSryxsqbkBdxQtXZBJMtrtShF5At1yjV6zyyJndkSUqrvxXDKW",
  "key16": "3L45cJT4RWoc1wuA6QM57DT7PnkRj1YrVbyA3SPGKWfUd1UNZUSNfchotFUYuQir8MTbDrqmCUwuBeQqf5pJRT7R",
  "key17": "5TYUPCRs7ci98fMiaTy5srKgGx5RDULy9qPcMKQR2dfK5j2EjhFdu68XwnMSt3acTYBNg8ymvHjCergE868ZfYMz",
  "key18": "4fMXXyMAYikxwdzcPcwL7uzZ8ndfXCQn4rjMdXxdZiM3296mKbBWKZt4Rerj4i9MYASzArDjyWNhyfJV2BbqAzp8",
  "key19": "37KVL9eHDoimKZjWgzYHi46EFhd3EPh2jrYtictyaAbHZ5vkTur8Mgbzj5KDan4TuQXKDX2NZPV5dfx9s2Lqa65B",
  "key20": "5H6G58DtUz6iA8sEuXeHeUkpqHgA3oEsqzxK3t3LmMKc323AgTt5d3aou1bEbF4z1fypYjnP5H6Y2YCB4e6jyoTD",
  "key21": "48KCGW9mrDWcwg1Q7sA2Kz69aWYb38bVr8B33En6V6VTCB6e2NB9HcJF2Jm6352PrKbSHdEw4iEo85NSkhhc48hU",
  "key22": "wtrjGSPFP7zr1dVSbXoQC2BP4qxrTpBpmd2q5R9AXnMeNFJwHTtYqiBNoJUn5JYVaMUVxYwvRC4qVNtNwNUZnJ9",
  "key23": "44Yu77eJaHaVWgFc4rKT7Y8hQBfq3BefJfPeVbpdwwEX5vCPKhmPHUCmWywpumqRBDAov1qEcyQ3a4T8QUmMy8TL",
  "key24": "669Py5F7v1jw7Wxat9qMTTsC6S7R5hfC99pRHXLxTx8ANefWBfjCcopgdUxgGCqHmVdypTRbthPhPyFWUiZCkxWr",
  "key25": "qW99x89s8VUFxcXjs8KpT2o3TQhJcNjNoE32byDg67geRaRYLc7Wh9uz9Sm7Wy1NAsAJWFogx9U7Yt9Zx1fftSQ",
  "key26": "2zPEGFTnCx9FFPan4Cw8wRdGKyrCsrWs9jJx8oMxqDpGM1VaixM5Kc3f6HCEov4d3rugGy7TP8XdfL8BzsppTzRD",
  "key27": "2RKJgFLRkvPzRdPkj7d7uhLBsX3ePZQAdMFHked6j1ELPWE1tMd2WH7hC4xG9vzZzY9z1EQ1XT8y1YAHpeTCRudv",
  "key28": "5F6bVYpVG86cyzeqQFjj8QrihfJ7YFW47eUSTgTUfpvwv88kd7AbSjVwUiUG82oXkpHBFTHCaBdo8kNQd6gAT5E1",
  "key29": "27Q2n6VHM4Vdp6mNAs2xarMz5dfSsJwv2aaYQx5sU2Y6at1HD6WnjmNzzhWuqzvrY7v3g5tWMeJ8ZigPiPnzzfqw",
  "key30": "4fCM4L3R3czM1C2UAMMDZs2ERFu6rVcr38di5FuqyEpisUsnLDJJAhdE5CQjdCEZvxYVqckMSBw7DTtJPnT7Rzmx",
  "key31": "47uTvfSLXjoGAjDHMmm2HjzXFMSvmQeD7PgtmTqUJz7PuLWiZWxhniz3SkHTBT3m7wGeVkKiH3wts69npX2o9zV1",
  "key32": "36JEce8JUS1DY3RJv5zq1822DcpaRzbBBcF8ZtBe7caSteMcqRPv3zSZd1BEnaeKj1m8nkso47FMMftTzAzJnphD",
  "key33": "4gPCtEYgCpgPDS7NvJXsjZ1wiCeBQ7ZkqJzo8CS42BsUFVwdvUGUXmQWfTj4WzZfSBws48Qce5Wx9mjz6niLfZtf"
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
