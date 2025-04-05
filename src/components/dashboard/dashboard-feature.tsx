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
    "22sD4xuz55bXAHdZpX2Do55TdtgWAE8LvsC3nHaeD2kzcCXjAQmqFZon6x7Hr9L5UUmpLgTx9zefvYSWv4CffQFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kwf4eQcm9Pr2kypv89EsgRZgFViW9Q5Jwxgt1fgZ7W7WYhLLSXYdazxELVixbcQ8dosDm3pjAdUh2pabwLHc3vH",
  "key1": "4mgU7YvVX3LgiAHD4KBfv8WfH9TuV5n293XdTfQJYhwPC56yyDg8jqmLo6ZWgfFxahXg3TjmzWBWVTn6EFzi236K",
  "key2": "3ygs1P5FtYXWecBzvheLnmMEvT4vxWVdGNWYD542jnrW6rwQGcqURGfJtmqsy4nnNGbsfPrNRQNB7hGTJioaPKLK",
  "key3": "2nzXyUD8KM8uc4cYVpw6XXuCBzh7dbUkuoYJ8drwg8c9MrMttR6vdSofUJZvryJb8rW2t2SGoXs3EFPmN29AAk5b",
  "key4": "4EDmzDjrVTVQ48kb4iSTKUFWuGybW9jv3ARceCgp9yBFLaG23arKJAh6MuBNksJeahiVrkPUcCkjfk91gtcBtBUM",
  "key5": "4QQF8FYvoQwnErCnHkf7Me9RkBfZnuiis9urSzx7YoNegdvappESHANTjAyd5m5XCwjgpHxDjpANmWENdWRrD48Q",
  "key6": "4RdJoRqRG8NUybwq2zTLJeSzLeRe4HyGSiMm5VDKWgVG7XxHqqLZ5WdupfZ6hA8JYYMj5mSdBhV9MeyFLZZqy6HT",
  "key7": "DZG9hWxxaDtJ1bbMaA9HhBwyyYXfeDZMNVi8VCgJuBxp6HmhtabHsNt2ftHBAB3HGsFmmEavP3UqcvxW2HokwkL",
  "key8": "2woyYQJZPCT892HdVHAShvUGLL7xzmbxCiiwB8eTaT1yNGGf8bAfjV51kbLR6S2mTP25pjRo9kxyUGf5rmrDt97b",
  "key9": "aUd3FEY6yK6w8g6zsLWkh8vcvWTgX1QZmDNB29oLsu9Y1vSfrtDwETdADRMPj7BTsxX9Bci94ZBtvD3XScypeLM",
  "key10": "39dtpEaWXHMLNUZbkhXL7Maqw7Jne4NXvz5LSCmWpuwsopSJf8PeyVW13gK5LtBqva7q2nBbEKtkQJnWS9ZqDZfD",
  "key11": "2ekVTr56waYjXLFPh8WwKcmLFKUrmWREbkAuqRooQ5GXfLiQt6WpfYAKhnRsWLPkBKJ6WdjHnnuNr5XAW7nvRXeG",
  "key12": "5LmtazuJfpHjNFxKQpkcWSZ9aNAdectreHaM2cUpvQRZb1raPgXvPFbaccikWbV5vyzttgMxcQJMiritGnweZHLT",
  "key13": "MwYQcZwkbD8o9EAk9jSJe612qeg5XEZzcHApp6CTF41cUhrceq8tZRTcZYVy41pXDKty4h73nZxeLZkjvMN37FP",
  "key14": "5g67fJqc6ENhLsE6CoADs4L5sZSu9dCgvDLVPrz39TPsjHd14BnCAoRp55sdRBYh9afMeg6FBsNQruJAq6dTSc8m",
  "key15": "V2xYuoJNSbXmbG1dKdePH2489a6qbrWvk73AM9ceTs3jWfMfjSH4vHLuACVcLDrfghp8vAYDUre4T2kUkeDbEjE",
  "key16": "41g6N6muQC9xnH3J9poeHZoiKhsdgUj3CnkiFRtfxGVUaEGdSxfnZ22fZQnq5SmEiJT6NCE8ixcQbDDxvmNaVgEX",
  "key17": "5JkYCuM1pthGPAAtvecR4SQ15cgJKSwfX9KWZWKXA9aYnQHAqY49d9Fj18yYNh1MxEnVZkjWMH8HQcrGGgKrTPLp",
  "key18": "5nZoECCBDNU7B8TXeCHzqBc7c6Hoe6CJrjAiqy7BXAo3eStmQFnQvyFpqmHXqAutNjfroCiSfHYh15p6p4meaTQi",
  "key19": "5JdHKuh3fPK2LNNyzgkH2LCVXuvUZNAzLudYrm6HuoXMW5G1FTHVvSx3scLrBR4y3FatEv7fkNKsmDGyqvGS6Yp5",
  "key20": "3nZTfuUwx6iWGg23nw12v4LH9mA6rMqYnxgRssyvqww8tDzztdZLZrN5GYryM3xn59MfsTEyn7RDJeEzV3SNhsoh",
  "key21": "4f1yVn6xnTYRjSR8Fzatcm8ffTupZM4R4pdMb6qcLJmYyYFuBbDZBbCuFeEZ28BcKxC8Sg7TakLTxrFNWau51JrY",
  "key22": "3Aw5t9KM5UR5frMCLaxg9s2JS6YdDgm7WLb664zh27Gico8jMjivgX8Q34Chv9wWYis5ghWewYUUH2RxLYyqTyra",
  "key23": "3tEjfWJxsqxFEG7Amr1tuthgzKDDeSeNp6cqBo7zCRpTcXbbeLm5ULq1JbnqwHwWfwz3aLq4pP1G2M93qqSJr3MH",
  "key24": "5TvydzATqn95NNCd8SUy58pmLjFTMxrBdNQDN2MAZGWHMn8FWCn2YmvdGwajcDCNzuc8TgZz8FeNyRbnntw9qNJX",
  "key25": "5DRDq1BhKozqG3bfrUQtsbn4741EYCJZR38qg1vryjaE1XhD2k9L5QQSKseeqwyaGYzdnPL8mX8oxEoMNNYkzCWW",
  "key26": "4h3SFZpgzq56hpBFCLu2jWhs4o3cRLTTikKjLAEbkkwfEMSZUHpBjhswGWq66WTn75PfUvHes1vaGHiXKNrkrR8w",
  "key27": "3oieEHgaxhEi7JM4KxLqTfdrJSqqoG2jt7jmotMznkjsHiMVWi23h49Qs7yoFguyenqot4QJ8WkXdw3zM13Atwe6",
  "key28": "BkPTKc6eQsSD1GJfyc3L578xCmx1jW9Uezpx5GSfwgDEp1LWh2qh7zZMmx9tvtGHie3GRTdtUAa5uVPJ6dNfuUc",
  "key29": "2dFQyecVp5dEmMbXoP7SAYzenRuqC9ewEdqBz7iUeCjLoM6JsDZEcY4J7dfsAsJMUHY1Ty8ns8em4DHHpkTyRADb",
  "key30": "4vY1CPEtPxSAWcMaGcacUgqptDGDkcD2GpneXMkdFcrkVJyPovFB54tBtQuBj2YViieWDR9gZYcMzZnhHW7QaS3D",
  "key31": "3qoYxvLUh5vHXiHyPKf38vTBt8wPZDeWUxhnHebkUCg3gbjXgyU7ZFLLjb1uuSGaq8otjt1S3VgNG44ywiQVodSL"
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
