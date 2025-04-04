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
    "44TqiSNgL7LZUkzDwByFFLbj3QyBgNgGdnABsbirJCiy9TcxWJNYcSnEEhtzJ13JmjSCCeTWp58RPu6L5V5GvwJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ep8K7gXGGxe4rKV3srYo8gKxzmxpRPetDt5b4uoY1s9mUw1ZW7iLasP1dLBteLeTd7fGKPakaKTkC7KAtuUSvkc",
  "key1": "JLZN2djujGVq38oriXVHaAZ8iSvHXoaDKBtiK1x1XoYKEBHwDdbgfPAT4Locmzr7hyb4edEa3Hy7op7JQ9Jgsr3",
  "key2": "2iemt4GQjCUcfPDo3WFkcaBo1842q7eEkC5XstZjCNxZ1DyU49FDcUj19tZGDv9JSBtNP4sYYUkSCFMwe7JAnpkE",
  "key3": "3TnkZJKKcAWH9yPLWPQzWvqJwpDFUW68C1skpe1BR77GuA6t3PiMbVxoDPN91H2mdgiziWopbC8Z3SyRu7Bfc2Gx",
  "key4": "3K4kgEfzfQNMNNbME2HmLqUiEGDFKK2KaEEdXnbBkokVjPqyXZojrj7tHSDMvBwodMDpxvNJp5ivUmdgh2QHhhHt",
  "key5": "3Fw8SvRPoXZmSMs7JFg8Y9EkWV86FdxUjd43cugrxfc6yqkzx8hCogPnEKxJLHeAen6v8PykyPcGmswASrQG6gh1",
  "key6": "2U79dC5H3Qy86eARcXmEhYzLboAW4jP3yJ6QEGHVy2duafaDhckBagikPjHpRRGS2qTuPZJ1AYiurhoBvkEbpboc",
  "key7": "3LRovC7qr1VE8uizb1paekB4MG6vaYUnDtVRLQcqHhVe3WKKDtPahxUDJSy44Z6P2NtYUSgYB6gDCiHiF7vw3ssf",
  "key8": "bmjgohhL1ko6tnf4D2Ajotteo4c58i4Vtk2y7RK8pdZLkCYZLGnx4ayoWDmHEAVMQffMQjw64NA6XAUtyjzW91u",
  "key9": "5bfDpC5mBfoYZJT3jwSgrDyofAwxBQxCBuzFzfacV9YbBFVsBTiqd1JGLMzMGGcPgh3ZrXPpguYGkqtHCugaLe6s",
  "key10": "Cw3s2EMMcEVMzTYKfkKFZwp9gaeyUY2Tudppfz7yb6sUGw2ay2cDMyBCaeG9WR5ysmFz3BUkZJpNg8MTo3L5usi",
  "key11": "4aWNwniXJsEz3s21NtJqdApoZNibk6GKMub15E3EY4LbKwGy1tQQ9eFmJR7a6CLTXDycRuwZHAYcXFK2XHLYo9Kw",
  "key12": "2HpGH5z82dN91BpEifHqJEHAdRYmjqtmDS1o1sHDEFwGwoVvHDvBbxTWmX3pEvyN8JaKRiS8uYyMpDswq5hQkkaq",
  "key13": "Lm1x8fuMCy9NiXA4G76ybRn2LQeybZYnfWquyLWyNwBJJ5Ct9a9bjgKT4njzjGmZsk3fELPjEQ6jPJYBuVxS7qa",
  "key14": "5m4Nxg3tJpXGvDXn94VurNuxSGq8cDMRsPfMepJVMVTVQ5oq3knFQ6NaHwrNvospLW1bcAyy6shWMLjaN1Uw5bBL",
  "key15": "3md6c39vJT2S59Lka5oGHpL65NCEvGD1F1qSQbJeHVvH7zx7pkQocYgd1rH48YAe1pdBi3HTHhsfj4DMByQNSmKh",
  "key16": "3JvYjsGFQnhyDm1E1MMqfYBkAcQAAFw4hoY6i82zY6GT7gNmHbXKVWCJzRsGbxsu2sTBhKCGoTfbc9ZH5w2ZpmH2",
  "key17": "3rAez9qQSS5L2SsSKf5diuERtBkiKuxiDfotk4wXzu4XL9g5zUCjvvCRmcPwgyiuyxrXbX9BKtXxEcBh5nDdnNZP",
  "key18": "5jXqDtrUQ6CYfkcb41ahVBQsq5Ld4kmudADdJpNaHFeSGiJAbJTihfyn2QvCC84waht9q4LCm6vJqQtQYaK2xFDC",
  "key19": "5dmtxUGa6AMFvkDFEozkSCULPtnXDVSG2yTWoyV8TuciLUSUHekdr6xWtyMj1CAPpVsZfJbbhbtjcotXUEDLKLGn",
  "key20": "5FpfGGcXqn6NPemakd8Hvt8vsfqKSxVeZk3gewjn2gFi9NzTYsKfLJdN74BiYAgqyMQa669nuNh9pfJ4XmTDZJwM",
  "key21": "47Ly5n18xGP7hTKPBMyBxyRAwzjwLoWYBBFhMahA9TyB6CLoPVhCZovVsBFbg3NBDDe2aqk3wYMaa4cR1MSJJX43",
  "key22": "3otgDNVUgPkw76CG5b6bnjSXvwstqmBTy29ppKd3aEKD2QFrASWgDnAE4Fe6CsgM4bHmuhxUv8EM3yhAJu3CmrhX",
  "key23": "38HeAUPJAhRenYqg1R4AEg6Bs4NLmCHPwnc3Cwhgh53fVjbxEHXmijP3GJVDCb5FhPExu6yJUVVjwExCmmEaFvsX",
  "key24": "429db1UHWmvkFCebbkVnw6P6xu47C8k9tc7w7yoTUVw3PKe25zpXthJdry7PL37ms3TXS3ZaiXhTX7UfWTju8AqX",
  "key25": "THrKtup4Jp2vtJeAE9CuVsd1PkwVvt4yfLU1zYk1LTAZ8VNKzmo4VrwTj4LZ3Tj33bZEEkVYdfMjo5Ed7UMJBKN",
  "key26": "2NfZVNU8BctukLM6qXRi6FHi2tqTYpkixwmy6Xu3M7U9T5jymqBMJnoPuJBWywcwwVTVCZuw3mkrwySHRjAhHKNf",
  "key27": "56Xv3EeEvDrKaKQRkzbUaeiETqtutjUoeCRYW15CeXJzhckc4pn4qvfh6pZxeLHsL7WH62qxViA8fVigt3WasoXN",
  "key28": "36FsWb11isVQNdEALncKZfbxZwUgoSm3mfnUMSWAhY3yYEALScT8bMYkDN6bVWM27mY93uyCWs5GuRcUZyJtPGoW",
  "key29": "4ng3Moh7cU8xmhKfEhjCmRtmRAKYNAY5GMQVkWiuRMdijwxw6c8gXeNjj9rcnAwnyfR2gAEV4CMUxqCerJqfnHBB",
  "key30": "389jokQ1PBUzg8vZPHMHXPo8vSAzzBvXobBEL8tUNvTpWXm3SXBCoDkeh6j4h896TF6TAZLFV8CfRggpB3arRBPN",
  "key31": "38dSymjFVX3PmmioBuJSrKV2qhJXZaAGMA9RVnd91GHwVtxkDKMLkVAoJFa6ES41VhFsLmXe5tzTLkKWNuzfxJ8H",
  "key32": "3S1vgWE97xAJweSmFUs3JoXHWukG4UWVHo3t8Gr4Jety8oSHLRFSMr8b8JoHmruDcQdCEGEQ7QZTkv2xQLZe69g",
  "key33": "492S27i697zgq4eW9is9KkXL6PFbyCJbFjyUnkGjcfdPAMzgFJL37QzcNGLKmcvSRm6bZZmW9kJyWbaJCCFyREVa",
  "key34": "XswV3T9UZpB186oYjA8NiKHfZkTRBer1TjuQsXgpCThZTHRcbktY1BXzqMre1wy8mNFFLdBXQAxZCy61PkbC3cH",
  "key35": "3fj3mutdiHXPqDzupKrVJ9Av3ANsgT4GiXabC46PREBmUZ8kkyTb6L85axxrmdDfSGeabvHHu9EoEq88bERoHtrX"
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
