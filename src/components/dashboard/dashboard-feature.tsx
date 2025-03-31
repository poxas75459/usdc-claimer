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
    "oTZZR5rgfdCF7DVsAV2KsqVNG2VvQXv5jB5zr6CtD1dkjE1HGk4pat6UQRvs6D2aRL6XCnU9Ewe7YsvTsQPEia3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNJCga8DS6oApUqZZz3vdhDqXAHvWshZ678xBEa8N5gyV6AHELLVWBb1bNPJKnomZFqaQT2kkZ5MtKM36iDFmHf",
  "key1": "2sa1sEa1h9bLy9d1byuivPDPBD2cpEr5io6pz39n6JhS56531RDFcDffo3SDsQ4nMgNdNeAbVWYdEuvP6NY23xhb",
  "key2": "wenVZrhnwAJLxC8jAR9cc3QYSDPCqEarMnA5ypzRwRj6x6MhFGsPsXCJ4532vqRbCdQ9yrUyc7XnAUfxZ1yzLJS",
  "key3": "fM1feYSGdErEkk4dzPGt5p9TQ1ptyGKo9jsfsdWiiSNZ6Wxucg2FGFNSA4CrcAf1Y69cYKj8JUF2k9V5dsZzrHd",
  "key4": "3UYyobqoJtVfwyJfjD32MH4XrCpvCj5BPrEoBzC7ewsCWJEoRh82CnRexgAewhCeSsK1bqT1qW8yAenQN2L18Evs",
  "key5": "2vtWYiwq8JHgDnM3AN4GhvthMDPQpjR1eHiJNdHM5H7oenp4S6dr9nnVeAyDaSnvbjXcJafXtwEe2RgW4z6Qguyu",
  "key6": "qChPiCZnRgCvgyHqqGqWsWmugtX6Et6r2S8qZHK1G46HQXvETbNye9Cg12bEG4hzQiUecckhrbgGJpqnxr4z5RH",
  "key7": "5iU1T9RS7qEA2hbzURE4RBUB7VuE6n8u9gSA558cZ8UF9TKn7G213qNxHwghHqYdNw9jq7XPg2vvAeWw8FpAh6D4",
  "key8": "pBGeWd7E97oBwKohSAVcDGyU9QNF34QowSz4hrRtBwXMtDwSrR1drKMF8hZ14FCrgZeMbh5H74iBDwBoE3SYkbU",
  "key9": "2KG4PLzUg7TJUhKkaCtqdD86C2YJ68G9RBkSHuBFfEMYLNiMpsMUFQJJRH4L5qDBB7paeYNUdX8sSrneMnzNhVXe",
  "key10": "5PvMmTRWwhjTCCeo9UbqJG8GG137B71hrbJVRRGmo62Md8CJ6qtfgXehDtkDcA6huTwMH91FLvLFfgSCTAcMLrEK",
  "key11": "2fhoP4XXCR7J2s2oZUQA1kg5Htg1fiKLjJU77yvPyHT94TuTEZQwGqQf5ow2z4QWXT7TBZ7chVUqwroZjdi4BN6p",
  "key12": "621tDpVmZ4RXLMpYd5ZiMSq82c9uq9bqwrVqj7cKx1LKhRaW4kZn4d5sS63TPV5WRchm4Rtitp2zSmm4gAvdEAda",
  "key13": "22jBWjzYVgGEG44BszH4RMPnBi8RgUn8Qr6WdPajkRY6FCXVMYX65z3n2KDppjsR4MvQNXEzjv1B7ifBWh4jS6fB",
  "key14": "EZQJ7AhHLgefdJafTCgvznH1u9VgUUi2ywe7FWTg9fjzkr3Nt6Pd6ApjMwLVYNuskmzdoVuJykwphkwNzxaNmZ2",
  "key15": "3foEzAy3zFntGmcY5kcRZWta8iQvSQ4eq7x4MgyGVJbfi6zFTiprAtNbiRsn2nNrYQjVjEBa95HWVAiQ4xPd3QDu",
  "key16": "5y42Kkf6s41uqhSWvCGek9S8WbBdKFo6zYU6yQ9ZX8mqsjegdXmf9jbQDNLyxtRTtKrbTagZqLGaT3WAjwfXcs2p",
  "key17": "51k162PhuVKUqMYEhGhYm3YhS9DiM323BrXpqZz5qB6H5UYzJr1i7RARg3vMCJrAEzJvZyXaK5g9ujaeUBk1vQCL",
  "key18": "29yZA3w6pUbGLgaN3Park1a5Cu8o53bcxDxfXvEmraGkzkn82nCxSH7aZqiua3BADYA9oRLFZuS8taWYgmZHC6zB",
  "key19": "4Bx991Pp4Hv6kzFW24GsBC97LLuyAfj1Gej3pW2Qr6ewsNnexiyUAHrW3pjKCGPLiv228yS5zqD67EEqapi32X7L",
  "key20": "Bmp2LaY7uqwfNDtmbm5iH8kMikXZM8zhqdsWJQZeSkVtta381QXm2EkRZMis2Mvv6nGPS2DrRyEeror1jf5Bb4N",
  "key21": "4k5u2vQdBrLgH4p9mMfZh4grGNf2Y9VB94jkLFE4CzPn4ZvodzMKZGAPFdeFJDhenFcp9YJbJxkFQpoN6fPBH79o",
  "key22": "2ppmkGjKEaLWQJFioSiXzyAJ8M4HKmmfGTJV5whrb48gSjuUS3W9oSgwTUdtdoJmVjby6KaTv65WaWkBBvcwKSrR",
  "key23": "4dNrzCFsaYMpVU9iUnzLsf5zXhvNA2JG7unqw2nUiy5JPh9krpMaKPBELxeU8GhM1n5cLyqvPnXq5gP7sU5uCWkS",
  "key24": "4yfNHPfkTUvDvwda72MecpDMjuEWCsnsgVRLTKphbJS7z2aehPL9KhVaMuukc3z7sWoth68o6vVNnpwBsNFP5NgE",
  "key25": "4R43W8x5WE85yCjCg56fn9runYYTRzW9LSkTrSpeTD3hpGvnQQgZaMgD7oXkPpW1bf8ZNKJ1mgYRgv46G3jBfKNS",
  "key26": "4QE4ffGjG7K97hNoitn6vztjZXjzGbXhT9a4KgQvEKTQWvpFEtB7xANSYdTEFv8GuJGvj7UcYDDoTGhZmVVpNdbj",
  "key27": "3KxsQGfZXxoeAgcVmLUW9WAy7bG7YwQtFZqvwz766h17TVwXvunkuMqcL9Pix16Cw3utv4seW42tzQeJ62u3kHGF",
  "key28": "5DcLHBMt98PHvR2SeaMQFz1gTguS1vshMxUWp9PdE4Kri9WfXriYim6Ybfng7GNcAdNbYxQ4mwJ5NTn3sSyUeVhg",
  "key29": "5j3Y1qQd18GkdLbGoCGxTFVdYUAFSfrV9GPGKeSnrJnWhSGqpj8HZTpBrvaEREaxoAeMKGHk5dSWQKXhrEJdbjmg",
  "key30": "99umkwgVAtcxMvpSX2WFymy6N33NjLKpb59KJDy1nVWt3bNqbFNCRkuVRuYsS4R7ZZ6dcQaPWmXfXTUv84WZ4Np",
  "key31": "3wNUKuvd5KfxD3n5WUkfxnpdvMrfGbdiXfvZV4HMzD8iyC1xTTZPUGGLMsX2LQ9ozJiKM7fnnzvrkgaApuLQs7o8",
  "key32": "5cFtTQscfz7yc87oCvVnTnkLNrJYEA3jnfTtnKFuY7SEQy4wQ47t3P6amn5N8RRUJUmjfNeMoCuxW9P3M8Vn7kBX",
  "key33": "4JcFf4HmXPTtE2ioa5Bb1zFha994ouiZAHPWUdHntUBj7KuohXUrAAdwqzeBMTVdqL631MwaoPAZYacf7kqDoiAC",
  "key34": "3qLe67uAXvRRh1HctAnZBQ9Ka2a5LBHk7f4548xDQBtovFp5MDQ2T4RsnZxazB779jCzvG7PPRpJRMoyLidftoS9",
  "key35": "4qdaA2LFrRSAXkHCv5JcmcRQF6h5kqZ83wMGVf8DgddiJhB4nwMyTXXxerqGF35FgQivz2Ufte85sZTMFLqA2Qiy",
  "key36": "5epXR93TjnxixxC2uRfJZKBXhi4h2by8tMubx2ursEvyABBvMhHeb53pr3sAYiQgXd7ES6yfVtEnUJBCJWsnrFYz",
  "key37": "128nNwf69SGQbvXzaCVKfH9GzdVaAYmT2BHH4SqH5wCeCCa5aktA27Vhu2wMtooczET36vhcRcQfXq9Y29bavek5",
  "key38": "896eUz4HVfpWwr5C7EY2tgD2MDfffZ5K84sGQgV2knpMG8DcZVo87dgm2HYUJNbzFSTjSX3oYios2PMyR6Nksud",
  "key39": "2kHuyBirivMAYGytcjuzjZADL6R5xdK7iqRceXXKFZj344y4NVWAZC2udHUoPqCdboJ4nAarxzBNpphqT9sKXQVH",
  "key40": "58KwEeJnjSzYSuikWMF7ySNvwZ4fiT5ECLRN5VWJm5KioMuLfEBtPnTSatxiLRkBKRr8UXuoK8Q5YoFwgubDnePT",
  "key41": "2oNnhDVJQcNc6vpCF53knjztxBBEDh8FzptWwwxicF9sGDJZYKuYVwEjiq9jc98xdL3dCNzsXKv9iHuMN3M9rPzQ"
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
