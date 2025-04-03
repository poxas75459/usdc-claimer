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
    "3VzEmFbfkjP4fRgzPmR67HAuEdR1QgYCpLx7WANTBJGbi3TC3MR9rvDEa28FZSEm3rwBxBxFiXdA8KVp5XnHbr2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Paaof4X2xJd4z3BJYC8XYh3ThTw78y7pZjpY5t5gCKjKP9dvJCcF37vrJpndpzk6sW6HB7bV7VjHYuYX4kCPV8T",
  "key1": "3fKhcGmxttTcoXGvg2Gnv91VQ8k94X16eZHy7Fta3sqPghBRdAUi5ZEFxg9oysjkBybiZ4La6Wsn3oZeQNkKGswv",
  "key2": "482yH9MWCf2n4N2uescNigPyJ5wpoXY3ELT9dB39H5V3LUGaBCagKAiBzTYBd5BdaUM1Uqt63AYn9qV96juQh8Y",
  "key3": "22rsiJCKYStXvG6uNu1BppRV18iHw9kAzHw6baBiPEXF8Yd8K9GV3fvQgSWchSYdQNmuoDRVJVLx4UcqoCVjW1mC",
  "key4": "3ZwvkW9gAaeDGD4gLVgsSJqN7BpmcmUuKMXsckxNHouH2VHpmbyUJHtUv5oqakYXHmmrAdttWtLwxrdB64dSSwY",
  "key5": "5iF63htSZp4thoFhbyMYsDUwY7jcVdwqz1hj2PHsSbaRLCf5uEpHoYebvBdssZHKbEHdK6V9dZYZX5Q4UEV55MTc",
  "key6": "4TwmTb2Jep2PsNQV21CRBFDt9AJoV1RjnXW5YhGDVHe3Lc6hKqHB9VQAEnQrE4b7uRcEgoTpgWiy8r2EJ99BXP29",
  "key7": "5Xo1nssaFB7cNvdZ2hB3b6MG7U8mBHhfxiQdhqPuKWtrcR1FzgEefSPyrjwcdBhRwthCLwmRA56x7gEXvpqV4uz4",
  "key8": "34mP9rb8E72zhDcg8Bz1Qucq2j7TxRYfPzBQea1WeK3fwTKUWHa2xGALhm9z2tJVnKYBpU51E8QQmBuG68JMCP1y",
  "key9": "5KAtmzT1R8qLKhtPZG1SdtbrwVX9gfJybg6U15GuL1sdspG6qx1bfGrnfusoHE71KjnixjGyTySy8WvyFbRSit6F",
  "key10": "3wjq2LBZ3uZoizV4dVQ3x33BicxdQy5wm5HU8z4xPxdeh21NDvEVjYHyagxspvKX4YAoJ8jaJNs5nJsPp7hhWupz",
  "key11": "4MeNQoqw1h9pM7GAqgpH3MRk3CFTDME2Wn5GSLBGCi5pfjDXUbYAg6GxEsyoeTeQA49mh1t5hMPU3pHu2dVwv4Hb",
  "key12": "46QqqtydnPNra9drv7uTvLBUW8cuowwBYuUVcwkn6HvueNbrzQLDwZa79rmqJrtD8nPdy5qnw7TYhRusYNnd5Mf6",
  "key13": "4YKVWfZ99ewC7QsXLnV6bJoGNf2cKbo3EHYJRLWGjmGLFjuercP6bwTUSRFdSGnEHCUMrGVTcF3mf6enRDZ6ZTMG",
  "key14": "4VB3Lq9Z1B5bHS64nVkyh5FUotVD3KGYuBxbMjz7Pb2RTwBrCJMdYmcSrYR8M1MAWMKCfGWnELqNujcsQHxC3rer",
  "key15": "Z36PA3YPSMo1ZCWVSgw4iqpE2JAvgD2DnD9MX4J7eYD2782tw7qF5ohiTHHFmddvHdgLPZ96uCkCKKY4tugn86G",
  "key16": "2YFvewtP8cFi81E6D8qa4WG7QnQ2FeFDimf6Qwi5qhkH58hRwvVuxEm1fk9PhbnCTDTqrRpdxJfksyxY4HyYQEJH",
  "key17": "4P4yJmj2WRJorbGkQU662AqU8Y7noSThyCksAx22R9vbuku6vDbyv53v4zj1cU5QKFsnHVFz7HgSgxzfbmq7GNR9",
  "key18": "3vc2KvttABUC43xoQvKMddgLMs4u54au8BotqeBKtoqc3rf1gqd5YKy9CPKkbgt2TJT6pACDBK2h8LJTmbUfoxTw",
  "key19": "5HevxMnTchYXHDUdgy12wWMQDA8ZhBQ2J4DL3SeACRKqXLkw7ydRpiFEJvEG6E1KrpnpZbyBkf8pqKGPeVXGgosQ",
  "key20": "f4TfrnxAeQ6nftEdubZhTMp5xYgF5prA5pJBo2oSBCmynADyCDY3cW3J7ktDdRtVUWij2Rn6aepFXAkB71La8Q1",
  "key21": "4NHwtYTCUqPoJY86KoTk3cA5qAjedYiRf8mA32AJvFeBYWxDnb4PXqN2LLXU2V9w6irvh8maazdGVkuFPULTXWer",
  "key22": "3SqZNS2u2Th7JmDYcSJKvP9T23uZjxQWLJvnKh5xQrY92gJfaFSw2JaVFV74296AhtjvTdfCwrCuHZpAZ65xj1DF",
  "key23": "26iJdZzo7AwceqT79M2X3pnyJkCBirGLLvgPcchmt6MEjkkx4p6Whsc8VS8zDMzYqDyvYfCjzWZ7AbL7QGPaUk9Q",
  "key24": "2RYJEGLTeS2hTmorRLM5mALdrXV3mT1C2ygvysqAu5FmEeR3PRFYpAxcAG2b79XwvcBvNRu7KBdviUWBveDWupRX",
  "key25": "2cNWGF5wZYXqe1C2AZNQGcRS9sdQDqxNa7JMdsSbBh7H1xrwVTt4omPpmYhdyZpUnTHvuvAY5XJZoKmbtRrkRVjf",
  "key26": "23SGsfNSzLa3gBJ8q68oSqHgR6K7RNTHpnZt78E1cFK9XWMENoJYyUEy1oxepppjefVZDGa4atwARjhyPPpxx1Xu",
  "key27": "3v2vWxQZExTJusoSk6NfhZ4An1UzaLybjvmPGP8g7kB48t9naSUyXumzcjtmjzBduBcGKaZKZgbGcX74rGW9KrgX",
  "key28": "2uwpwbR6GztCNugUGjZAhbRh8XXL4VSBMmktmo5m15mdcAt9M3YcZLHfyqFDMiP3QnGSrdrggYe7p5b5GBohoDs3",
  "key29": "3x1uxM12HrAEimRH4S5i2xn9DZ7pkCeek16iZqf4Bmx4tfsGsLtxamoe9YdbdQxmbXX81z4mt2LVck17Yxrgy13g",
  "key30": "2g1VwKWY5sRJPXjQhBd6hvRVVniksiDEZ8HUsr81mupNWA7j9WqsRg4qDLLZQH4fSo4uWZ2xnNiRrUkacvv8HJYP",
  "key31": "5GL36dF1z2cm3A9jJnhHe62c79VrbFCion6cBCTNr195MrMbeHHiVXWzMdwUSEpWXMyBwwN76HxodZNb1fkE3TA6",
  "key32": "2BG29ytdfZQeFqvAmaiRg6CSze6bwTvm4QDxScaF262X7GN4xVRSnPanXxUjnaJNe8mZTFXb2qEtrfD7NH7SZRW2",
  "key33": "5g2gtE6si4sdmmaxg7x8j5pkAaPF6K7zrfRbNqfjHQ5giaHntzhkWPokePpgEvrZA6JixYC5Ea113CtE3iruHVTZ",
  "key34": "3DtXXDxSsED5jsk4DteZ5jygM4VcfCSZ7qLJw7KggmQcTTeWxuQyQfkitH6cBnNoPsUBXZVo5fNtWv6Ze4shibbt",
  "key35": "3vtxXxodPZpHcR5CvqWESngnRbMZga3B6JfehiVkubvnAdQBxZcitYyoyV2NSUPCedLjhLhQv7fm1yRWdAq3TL2c"
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
