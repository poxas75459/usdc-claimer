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
    "M94yz7hRPkY4JcHjSPr7cNSDVmaUoW9soUcxcw5ErnoHvQzQhYYhR5ox25xS5RSm7LmwyhrY6yfZ8AoaDLCTLBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPaMi4vEhCw4zckXe3gHdsZw3d1cf2QJqWcgJXWfz2VPCDAhEv7Xp7fzH7m4E8vr5HbEkXufpqTTgsuLkMRzsd3",
  "key1": "45Kzj9dUwZpajzsw2hFRUWWNGUsKZvp7PYm238LiNr5J1h1XY5Tgh13jskbf6AggoBtAGUs66dCpk1FPbojrgHTZ",
  "key2": "5q9wJ4UrExXjarkYR6hG8RWQeXAatSjq4W73CCiyH1XLytHx3wXxatavXqxcLgFLVoxKd4shcoNM1t89bxZyw4ri",
  "key3": "4Pt4kKesipahrsuTzyLc7Fe3jQF4Lidyg315a6aYnMVQfLHHb4y9t9LhBnFNebfQMuCJ7CAaw8uC4mTwWsGpBhjr",
  "key4": "3DLwmUGS47Efz8F1hFsZvZRanguC5Ujwc2R1SpQwh4Se1AstyGcKEqAgzBicGj99EM8Mer1qxmeYo8w38nuEn8mg",
  "key5": "tt3RWDEkMQt6u3TQH1kBhomHqDXtHQ4VSgUcvvN3nMyi6faNdgzvW5H8NQnHoWoMoct4R7boF8mfUmmizpC4tmM",
  "key6": "2F24NmtsHHKx1XSsnj62GjktWM69z6NGH5nznhbk9Cnhu1oNTpiPLP42kxtZV6DCNXwxSt1y5rBtEbcBQ9aYeo5m",
  "key7": "2Vaudcy97hqYJjiMLmGJD9qMpvVBBSfrBieppXFyXPxsmFyPBQ2iWFoMKvrDtf5CfSkW7QejmF7N3Cm8ANK35cj7",
  "key8": "4UkmPEfdbZZ3V2AfsepjiiQ7h6QujBBdhTqitGWZ6wqvjYkjiUCkrZqzfkBnV3YzJe89YWfgWfN2XTiiH4WaF9z4",
  "key9": "QxuRCaKhVzPYfiNfbkNaXiAwo62Qf6qWfJKGR5mwiAQRjLqFuDwtvvKdesVMsJXW3RXzvR3NMrN8uuHFz1tRUfT",
  "key10": "4xS6JqWJd3UQvPbBSKGy7wHFzPN6bXAWfJxpUDZTPogoCiJicufnq63uVNUAthQ21D39k4BdSGLjL8MiMi2aW6cN",
  "key11": "63XUv1bXM71csRarBw2ZqBRWZGyP6RnuCL36Pm8x6rPjPom7EnHeanKrMcxwHtS8QjrpQb4BwsYH7GX8KCp1zeNo",
  "key12": "3epppVZXEq8YsX1YRXeGpNZPzLpeJpqLevzdXD2Fguj28bqaZpxRpMTVTN9EUkAuxAcPEWrYFr3E7PcB2gbsZpjw",
  "key13": "3GMuWSTSSLH85sThFhobHx6ZQveekWVvKR5yQx1MT8vfbG371ybDzBymh845UVKuidZKzfKv5p1CJG4fpsUYvsLR",
  "key14": "3e5qwNW1oS5KKB39JXCLuqwLffDzui6B697T2XWuBGARbMUXmURP2Qst3AEq9JsFhJUUCDQhmx7pRsN5PR33QMrf",
  "key15": "QJDpZ8JqNgULDJtHRuzq3UQp8a5VG1ZKMtgVvgdfG1a6mRbs6C6zMw5NCDB1vmyH94yMPLBHxN213oHye3fB4VR",
  "key16": "4YPsAuukJGV6RcBd4XToPCTiGqzfMrGSB1JnpQTghHqfq8DAZq8KQi5pBtRmKZkssNuW5GWWdmezg14gPuots74k",
  "key17": "2G6RArer8y8oz5p5mayTxgZUWqN641VbacfbHPPh13Rygd4ooMGChdoX5tSPoHYyE8Ei5SPrL75KEFp4bwzAhLFM",
  "key18": "1wHjagaXZyTo4An4KvZTqALszFUKQ57ggicmswzeb9GeHTiAYujpTUN6tbqC5qBQ9YhWBDZqr8FMtK8DSepi5nn",
  "key19": "2ruaHAm3wKXPHNsFgKbpmCQtbtZLkKHGnUyXUJz86tQtPnCQEihkwgAyfEDX1cVh8sEMBBBqzYgHgxaEGcHh61Zd",
  "key20": "kjgYTwmCGPheDDRMDsmKo5Ne9PwP8mPUPvwinrd92SyaebRyBZJwudhJm3bZSnuK4MD9fzsRLZgy8iXMW7a7UYb",
  "key21": "2L4R8tpHEXBiqvA3RwCogaNSfhQEZbfQocppUNvYeNJFomSN9SMCjUTcgGgEswSGLrmWQZ1TaVthm2bVzYRdEQH",
  "key22": "45odm5JbBz791Gx5Kxuik78cvTZ1eDyAPXejCSAQEXjEzCEnVN2QELQs3xAA2cSBcGSx4G8KSDAB4ySfC6qwZGTZ",
  "key23": "2957grAfLAoJTZPUGGugVizUWqj7WU6C6NwghdqyTouUzG1D6jcBHjG44FK2ZChrd5dYG9AcoV2WpFPaFMsz7AFv",
  "key24": "XcpuQLvt89VH1xFSobRT3VS5pidfk9axaiFnbN6g3sdPr5DUCbkMnvrqK7eP3rRGedSmgfj8avNzpzb8na2vJBN",
  "key25": "5b6DHNGpAdoC89EHMPQNqt2Lg9K3qo5ae9PRpRzRP8Qa2V32bHUE7jSfBDKB89o21GJF5JYjnpFGnhxPT3oKkvhV",
  "key26": "52pWDMUdyizytP1H8ANK4YLP18tMLsryt1Bok3bXS6MTGTbm793fZpX61xEkkkcfhXes6P6EKevZuLq3GKuohVqC",
  "key27": "5JrgZ7hJp8NdnmBWjUfk14ZqpmJb3wPMiAeqfzSVUhK7jrdNL3QnhTyoxGK4nJySvMUuyH29U5pnzyWsMcUXRMfa",
  "key28": "5a7kotFRHJKkUTpBHALcNy3E4yWjQPVNdNSWuBHPcDMQmgSb6HZDBaeuwG5tpCbs8F3db7gf4cWEXXiwvV1B1BWq",
  "key29": "2SsrxrxpS9jHxniWNNByP7gQNUPz79FQAJKjgYQ8zmQxq5WigbZRSvWvxp1o1zLoS6CMXrssqNQjcU29mNCQvhm",
  "key30": "5An9iYRggVuywArYh8K9hSuyZxBB21YefMN2kwYuzcC13d8o5C3R74QxvVjKGSnRPGzt21Bf27c2Btft4Ausx8PS"
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
