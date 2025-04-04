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
    "3dmeJAYwTi7RmvMkXtmfRKDxNe4tUiokqZraaf4tMntbnAFjF7xZ6RxerpAHznEYTmubuETkA9PK9cTihmRfzha5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxkTQd5BjHF6D5g8aJoQhkydzVWKyr4WkysuMoh3hiDcymAaMw3tnHh6SYZDcb1r6Tz9EqEfBvXhGS6166rEs2C",
  "key1": "m9vaSijHq8yMMCCePQjgm75pPz3exidK7Abx9yPbXPpnTd5c2vjfo635KhEsAGFUuu73reDNrESNjpTa4cUNXzy",
  "key2": "2GEuRn1HvsRUtoo4XBAzdgWQPWB1bhGEsn3MjWyeSwuGf4gg92TiRsnp11rkz4Qh9v893eWFxpAvzDXMVmBs2mjM",
  "key3": "2Gj5ae7cKHNTwhzXqo9DVhHSn73Mpyooa9fPra3jsz3Q7yMvaF9msv16cSf7E7M3UhLx1fxcec4CAThuAXEMfkeS",
  "key4": "3cfPka7cKqrUSwJXquj3tCrgC6675FdXzz3L4ScucgBYM13D1hrwbdr89cw4nX5smz4f1MZEQGtP1vuhz4rgTPqc",
  "key5": "4gp21wC9SsfjmUPnADxUBhYM8hfVbfbSXTd69f3Ytx3M1mZsk25NB9YFz6ZGqwxGPqMDcjydfCketaEEWCLR11QJ",
  "key6": "2UeBRsEisH49uYiLNhVvwGtHf9iefkuEFeHqmBFFJVrG7cnwQy3s7LNbn6ajNWqpMZRLnunUYbn7kYR7jiCuXBgQ",
  "key7": "26e5rQWt6FknTA1UMqzwQapuZUb3BimzDFySuruKvDDRDdk3YY9o3ZN9vq9mu7QSbjpAzRGyxyE7HZpSDURLohaN",
  "key8": "2vfdhyYFPYnyUaczUyqpKaKzTsDLJSk7QfjBbBTbusRKGScsNL9mVHTLxKcNyEePfkTVNHDXCstaM47B9wsnQMjn",
  "key9": "nwKoZx91wxfooo96JJAQ75BYBacgHPwoNSQgBECkSMm3YBra2MmrZDwCwFEjCFKkwM8rdaHfvHQUxH5bzT3oQvT",
  "key10": "42k2aFrkDZg2YV1osGqT6ibH6A2MXRZwUF4LM9R6SeHNrAJ1BYtud4BGki87wHqFQAQUz3VhSa73dxHZfH3EinjC",
  "key11": "2UNxL99yyZX1bi5qMnSwujhhNucArSyRKzDdDSC4j1FztM5Dt3jnjXS3NnozH8m7sspP5PRscAvoMW4WZfQLHQAk",
  "key12": "SMEVDTGYeTxNGi83Hkc2RnRnyzM7CmLPczVoiMxCmNVse3co4Pc4AwPEwcRFTatK2hKD3anoLCUGTr3LEQZXyFa",
  "key13": "5RxsEAKc1Y8ySRLNVYMA1Eo2WwVNx3tDZhjRkiMf5zDtL5MEbf5ZmCGuFvyX7fYNPFGNfyTgs5po5523xQXhKt6E",
  "key14": "2qGhF4zHswLaALRFSQ3KAfRDvGPWiDazcjCrrnkZ895Q4D97mq3Z1skY54ej3v6wMTK6rDDybJqJgu3S1YAfTAkh",
  "key15": "2R8u7HF98yVL6xnDp8iKrBGbXXfrmGSky8d7s2tWV8LBXfg6rcJeMBCokvA63MFBFw3nBjsCPEPaJDN4mNhNxsRn",
  "key16": "5ngYpMeRfLj6N4Yb7pPgMNXYcrq3YSZbz6FLwxgxgsizHbTKi84idev29StZ6AFXsRWd9PYQXccz2UyeHmpXW7nX",
  "key17": "5B4ke2hx3Zkwpds2tyrEv4QBj45E1wbGfTceKYPbHiAYsbC6XFc9ChaWXxhThJ6CxX5cZaJGoWVNdWCJWeNW77j3",
  "key18": "4vx7UAG9gqPKxJ5FACGLjkPDLbqodJYLP3wYP9bWwvQYdh6kfHvdkvZJx1VQusW9p2npFH8SmnDQKYtSYV9B6SRT",
  "key19": "2Ruo8WDotEsJpzdoWrT21CS9EeX2HyBmDh7Ph4EArMpEC4R8Hffh6BBKrNpj7dM8i1f8njGMcUG4tCbhRMSxtgXx",
  "key20": "XM4MKEmWE5iDDQob1fx1DLq5z9srLdfaJtmDmmFRe5snu5R1yeFNLtx4J4gFtaTkDLjoC33iL8L3yqRTWumqn6y",
  "key21": "3Qbt5Avj9M2m4yamLx7hK2j5MdoHHKsUsgwtDX7AXzEH8vcquexr5KFPnpk5wuyHXXkpteq5EbAkGCBKz4sXoyzt",
  "key22": "2C2byUVbEuS6vqYPefKyrnWydrLsDZXy6kP1ZpZek7DUdHUKTa1UxQzyDGPncog2iNeVc6uwaTHhJq2BtyXZA7yc",
  "key23": "2ZYoXaGDnfx2a2wUUYBGeVm16FF4FXvhRCNdBgWLpxqDH4RVTaSmbtxi6ij2ZqvVvUtKQw4QyJA5SwL2jNfw27cS",
  "key24": "sVC9idSwy8CtVYhLdXvKxza1wwcCohdF4DUMHm424m19NZCfZiLNVyDGadzdyFAku8RSjMs31zxLUqEC1XH5WUB",
  "key25": "xiVNqQ5uN49KYM1tGjtbZ93ZVQFFWfLoikePHVyH7ToRHNvAPmq9wyMTx1FVYxxbTKZ87rdcifELCHZMAPBmFbF",
  "key26": "5oJmefsMwR1yeVLQ7b1Upk7LGmMWpzVbo8dZj2ix6rSpWFPnLdQUBPj6v4K9NSkXZ85kRKPyXr4moKjtzu3yb6Xo",
  "key27": "3nQbjkBTZiwS2C6tbWRUs4Y4GeLfdojt5mNdSLMZPCzc25FQLLvhUXVTk3jEwuyJn6FoTyRXBcT893Ugs2p5K4Bg"
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
