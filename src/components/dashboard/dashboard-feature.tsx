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
    "58zoukYQhrWvPYdEzptpehYwnd1nSnb4hj85xZNs1qBm85CSfG1WpMW6rF9ZBNgfTXDn9Ze3ecmZxteziJaPQsKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RYxQATDtFe7LELGddLp1tY7qqRxvNoUzSjNhRAxGiGcUsM7cetvd8Dt1h56cSPLHiWvXM8N9BGanLsf21WiXLg4",
  "key1": "4WrMZcc54cLSERkdWhZZs8zBZh2JahZYvHG65E6oX3cUpd88nh9Z1QQBKv7cZSHFXhYH3Da1YaY5vjQJ4dAEDcHX",
  "key2": "5vdgpkNc8NdstL5fTsZspEaVFpKRFVVLq7srANXMdf3cfHSqKwQDXomfhPV3xhM8SxgrHvHtLeRmdKc8XbV78quK",
  "key3": "4jM8Pp6u96JxVbUvdwRPrEY991MURUoRr6AwZJfBsW7thNZPPN58ZeLCna15G9fXiuR9XkZYS2DUBApGm89RR1yr",
  "key4": "3Q4ymhUfHbbLhg89W8hu7rjokqPrFpP6wV23VTEPjpRk2JSMxF4vrTxFAtBY3sUfhYWh4aPMKUck1CSYAUDHameo",
  "key5": "2xecHQvYgdVGJLgGjTvzzKagnbqxgjrk76gJayrS7rhQL5oLJGQwgvnKD39EmCFJzRUdxj9nHydRnyz8Gk9i6J5W",
  "key6": "Q2yE8tXXAQV7N2WEV6EtNEUHvLPfWBGFFPokKEMYmQCw9gn6eYqn1EfPRduptfD1S4ke8tVKFCXxYqjzq9773TR",
  "key7": "3ZxmsvSJ3StgRySxaV5rikft6FGfjRgcvbZKBJUMj4dWvXwJ5fWyzmZkbBy9U4UYuHn1TDzstAjcRGoH22hREfvq",
  "key8": "zkRKQRYoRPVLWViS9SnKkKty4PAzyniQ9TyJqxzDnEnLXwpfoxSzGqw7KZTuv9WENsbiEfpULBdXRuuYphpfn7J",
  "key9": "2r1LGC8h1H7E3WVwFda5y4Tn3sD6s1sbnftmMLHgfY1SXwscYx4JKeGA2r5DtrwNfwoGeXFCDS12MPdiVQXo1Ug6",
  "key10": "5PYCJN6qvChwFzBKPByiAQtcB7zVHY31DNNtxPU4pavHrUsEc9s8vD4pvjRi1FfWYxEs45uDvmU5htkBj8BVH7CJ",
  "key11": "4mPc8dyoXp9wn9ChWD6mK7bXqvzy4MRvvjz2RXjfs1M8L86gDSmxC5rMAwcJiuPo8eatf25XEs41JCvE6QneXq5v",
  "key12": "5SsGFDUWXVQagvySdNCdnPTkMk3V4tHt9zWsZLakjf3RU8ys1y16uvSvsyngszbpUGyXc2NhCoEeuDErh3756TtY",
  "key13": "5LHpvEydnN7JoTw2QfMEL1CEi2kcwXkHrCcQ2sGwkDfJ7ZT3zm8m1aGZg64Ap8NPNP3CdZWRrGvwheTPcoKJSzcq",
  "key14": "46cF8F6BAfpAzu36UcnKALahWRcK1kkYFPBGKiaUrEDENKJS41FxXQsZRcbthiWbvSUrVK1D615rPcVsvJ6ghhwc",
  "key15": "5NFEormE7jAM8AaDMmEXoY1zTCae989AbYSKuvW1CCkdwesFEeFy9BCMNyRJAFvphLRbpP8xWWnfY4TWxTqvnUnP",
  "key16": "2MTJtRxb6TSoacrsWD8Q9BhqQHFGn5pY9xpL715HL4ccqGe8YHuJCMZoTo96719GQ35D6gTTfpN96J3QMa365utz",
  "key17": "2qr3cTWzcSeFSPb2ZF56DgkWcdi6ZR6BRqbEGWPmqzQU62sWS2HhWHqkb9wsovvPDSyUgv7E1cE83zqXtwPhqKhS",
  "key18": "5MNbswiAi5N6V3uRqS8QSTGgzoPce9ndxYb4pSNBSKxw6BpeXiNtgKq1DtXUJFEt4eLFg2eJhTXmpAqm8c1VQuak",
  "key19": "2t8j2DeGcBTdCej62HM2fdJiHhuqo1Y9FVGesdpk8EBbkTQARzbCs2qvMnURSaN6H7RD3XoKzmh6fS1yJMQxZbWs",
  "key20": "5nvWDbEQTHsMNVY6H7JZCAprYVuFJaTiRySwrSiKG8J2PbneHjFkkT3YvaC7n4xdr8pQy8NkE21gg14hx8SuYiet",
  "key21": "2s4j9m59XhhW3H8mfibfsn5xojcPK4rUxXW6VuCBfzyUEkb1bHoNtbwtXpE2JH1SmCQBfVxFC2RriH71ZRXxYVbU",
  "key22": "2J2LcWpP1XZW2ruuTXBJShFCwUkaisfe2V3BUdQniyEoNkk9UjPofQW7FzGgcMjMexPcLFWGHDAXJ9g1Ck6yKpGV",
  "key23": "fAMHuzssYgavHYWmAJ7TEN2dQfFBpE2djM1TzzWUKz2XbaCBNWiyH2KtTBiexiphMPAWhfAnTYzasAtSyjh7aey",
  "key24": "5QjkaCA1fSD1GdGz1pTA8xA8LhJA2UZzbZbJGkUCyGPCf8z8Qac6xs5k59kEpHK1ecqYfKvVyB4cxgBwqKSDXxMF",
  "key25": "35yqXh1ykDACcSVxvYAE1yrdSiUux3r4NAHQ5P4puEQfB4EewpchoTRkWMu5PX8gy7Fj516ohGyTyAZTMTbxvNuL",
  "key26": "2QhDE6wwZtHPeVB7CTMqu66mrewBbhDw2aznfmi2TqXgVBiLoRf6pzGN7CZQDYYNihrzxidpmW3zKM8sfSF4HzXz",
  "key27": "45RWPwBRJhJGx5YM76dbPKQQgFsH4AgJ2xFvDT7ZofddUNJ18ugNW1dFLQC259MEgzkA5gxP4PUdb1w7CduWyw3s",
  "key28": "37j4L6VR5tC5uW86YL2d2DjPke5nwBJ5yBLGGmEbYRSmLxCe3xUkd9s8qPn6N12nFKNc9uQeMoNj4ouvg6KuoEsq",
  "key29": "4DieAVTp7wWAqwaSf4udGuZ4B52S799fpP5ZQtnzSzcFseSGyn8k6BRL3HpzS9YkwTe6nqCovZ2XDupe8quFwfce",
  "key30": "9RZCgevjGDANjvkrmeAjvDcd73SiucyFC3jv8eR7e1sxcKADv7DcNS7bfKEhaj3ACJV7VKyBSXphi5N7ZL6E6qf"
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
