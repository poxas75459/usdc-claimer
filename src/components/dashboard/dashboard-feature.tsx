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
    "4DyGxJ8R2r2RgrxAgvJxzM75Q3XjWrQtPYE2o2QiZbtHe5aPajmUyyorUR1dZVxHQG5KFXDWkx5b9aGuTXjA7m14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g5Ura4w45En38kCUk4pcedoXjxQiQUvXpYv4FjHdPCJa4ESLg13Qcpnk52iXY2PKffcsKg4nWrXqQm8F6bn48VW",
  "key1": "SYoxniPAYubynBpKvrgATPd2zShh23ZLJTyzopL7sN7ex5ub5hF3ngBBtVMajKCoKZWdHQymQwQcU467ZAxtkxt",
  "key2": "3eudtd7Xr2g57shHW2ZSJD33vUp2yNnhWS3HvDnj7vjysVDRUnyfbxuG9CqaDNmXGhoL3jDARUDu7E2pe49dbHYf",
  "key3": "5wUrrNLTid2HLgCdD1RDiMi9WKesFtfrzFTvftDQbWXpfBWToompvFPPPizNHRdezkaqwmY4hp95JXG8N2E42DXt",
  "key4": "2fyeYH1Jii19AfJVfSgVZWNceuXkByTPixXWXnRrxD96CMLGgc3WQCq4APUDYs7ogwEdJziBsLHiUdyrrN2fFaAT",
  "key5": "5JHoho1MNvh4GFMY1iKtW4eb5bTF6yQGmahTuLa8KQNwiNYrpAW5HEJjRk5RLoVejk9W1f4jtALooqmedz4Uyjpq",
  "key6": "33TFm2F8ZA7YBnUHgVmxLbLGnv4EMUjZKdhMJ8XZnWUebSrPu5evgJRJ7sG5LMLpvkKfDCi4rBV7q6YdWVDCdcpo",
  "key7": "3j7TrDdbr7bXUkAVWN1g5vZBD26FmyhpLNwtfHYGZJXoh1NXrXZwZtMFe18Knhm9jyjhkncigH1SUy6jwF63DfG5",
  "key8": "2ouvaC5xUniSNeRKh9ZiYE5Qx9M8WWoFGEMYRpxDk2hvwYgVrUyAEcQWp297w6v6PAkmgb4qPtTGAHJKtGAaBNFN",
  "key9": "43zDw5LHWB9Gh8LkXUEzYPCz29gzaG3nPnr1vQFViQThvQdoYwSkD75qPqF6Lc4uPEWc9rgBjHAozKHUwjm3uBQA",
  "key10": "5uEdWM55PkJ1gBi7bReRVKai3RdbryskVR4A5c3xujBEe6s8TTsRTNu1vyGeDfVWvKEDHgUtwU4WDJVyFgZtiPFb",
  "key11": "48fcd6XLpbTGYmqDr9dvfjKuxdP1ms8pmkg3kpnRmpcZEaQk9bKZYhCcudSdkF8aU5mv2mQpVUvoRqAhTAwXknb",
  "key12": "4FE1mUgtwifLstUBfrTCThxW17JrNCyEq8g9ZB1Y53LQ6A7r5RmymyGfVwVAzsjrs2K4t5iVDF3vgFbbjNTbDC14",
  "key13": "4xEqifCgmGAX2skkYcC7wsvKgnp88h6cDDaAh13sUJBX4Ea5Wb6JvurKCWcdioCHy7QhD4SiZ9REzP7BSTBmWavK",
  "key14": "3qo3ZuMCWa6C2kMvmMtDSck7rVTXNeB9qGVAEenBXfJjtiS8j6C47RUVL5UMiCZnZ2J2wLrzsyZmdojgLgdqGGMu",
  "key15": "2os5EQ8XJuGcapZiQQhbhiDzxodXfkjKtFcHQa6GkKWFE8xT6DcUoKTNAoTtwm1Ph4VSu2GPGYFZm66ciV4BxeVG",
  "key16": "3U9EFdnVqGE1XwbHoqKhsBdwpy4gG1WDQpUWupmji86BhaJ7apTiJ1Fv8t7vNn5sXVpnTeFZxQa1RGSWrtwveNn1",
  "key17": "2kHwtVMKLF7qgdKJZgiKGYXFPiTXAzPo9fLh3kHaXo65MrENnG3CdXmCNNwropfZbH7MYogdSBqPtZAFqkvGrLEL",
  "key18": "5B3VmXty5ykg5YoGjxPcfR1LhvnhYoHdTpzBy6xRib6BRibQz4vPqJwa93vi8HTiNZ3G1HkFS47HdqSz5ohzcFZu",
  "key19": "49kRJhmwZsUWJ2bjtyZnv78ymZ3X3oNE8Uiuzca9ahhvy7iWmsuPuEFuyy2oU1qUv3EvhNMPkQJDnWDN7VeZsghd",
  "key20": "3C4WKX35CiXNrh7ZjxnpTsd95dLhejio42fdGWNN5wT1YAQZZquSCxuHN1CVUS2XsDxjmZYNB6vohsHZAkERVjEU",
  "key21": "2DZTxXD5rq3fotEFLb45hsZoWovbg61e9HYRadHh2HTNNTocLrTnQFKAitg3mWUmtBkFU8aMcgijynDZ8P82tzVy",
  "key22": "5LcERxZG3qHGB2vbLUtF1WvipRH18w5MzKYT7hjT8i7xcHNJcTkDN2LmDgxBYGewWKzL1B8vqNyYdiw1yLuqpSdV",
  "key23": "cpYuj7keHk3jh3Ko63uMmmkzbTez6XiBUbnwCE7a61MP8sgpbVPN3rj6VJWokQdf7pJN6KbPsmhFEQGkK4mLogS",
  "key24": "5bJCZRLmCXdFpFjxJvQfdxiyUHB2P9sYEpyENLtMBU5dvoF85BSakhoYsmT7tQkoSw4Y9YFLdfEpmnpbm8SjBt67",
  "key25": "33dLdwDnQYwGknG2fiVueTonPZwovHEEoV1twJow7E9vohxJ7KqJ5aPBKvB4fKqRFLQRticoPkZ5TqjC7FmcisTu",
  "key26": "2vimGmycXgPVEg3tTmNZmbh1k7VmePZKoMV1S1iti6bLXsmR9W9G5Q5zp5NVNhi8JLntp7RZaNUxKb1CFdDxM7U7",
  "key27": "3jDkP7FNvhigf1XZAVxiyXw9isbem1HVycWrGTzSAhKDTPNWtKhHAkrR9DzXbPNhnsgBU4GZcj3x64BwHyHgKN4g",
  "key28": "33ZjhzpAraFbMVbUBUtq846ucKC73W3wnk8S1vthhuP9EiiCAxqWmUcCraNaFG7ozgseJAR2eMzEW6qiBDgdaUB1",
  "key29": "3oZb9XYgu19sVwJtwAvJ2qKsVxzFQ5uSUQfDMMv2BBXBWZshsA5fudqpfd5p5QWqV89Z975fvkVqDvwqyZg7Tqvv",
  "key30": "5xQAS1PfKicyc33qGmYSw9QiinsiuRLw8KvzsaJ2SsVj6zZabVs3SMupt6aCyKzJyV7fEeVbM5dzKvE5bMQYTkCq"
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
