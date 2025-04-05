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
    "3CsLEmpkM3twNKD74RPvdFkz7MTgQxRi1685ohB9rLT3ta4XeW65dYA3qZkuBYNmSfoyge2deDCKaEbfjGMPhRW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59hSYzoWehknimPcyytbgDGYkn6GyVKmAWpMprnJQe3w6MQYxcpcpK7KANGMd6dtoXpPG8Jm8vLDULR8vvK4aTQD",
  "key1": "2DxAyTfNy2qytyUTYSifkWnfaRqzPsu29RMUriZhbzCZpCsRjfBQwVCA1PrrUqR6x2ebf59D1crSpDSubZRzoECh",
  "key2": "YXHqp3iDJqpYu7pnCJMnsSbRpwM2ZXmZc8SnGyerrrASPfbdJpZzKu2aMC3j976yadEukYsszhm3h7XGxbt5JiD",
  "key3": "5AWKaMJdaCF4diUWFCZLRwLkWh4ZsdeJEPRQ48m8aQpcfo2ZzuoJRezTxCep6WHPAzCVRjkNNuLMx8tyo3Yf69er",
  "key4": "5rr4ooZtWsrdPQCrC2FafWxmrGxC82phJCv4Tt1EPehzYZ4ymzHavk1mt5zK4yjdSJ2TktdPbt5sKVDnMYM4VYMj",
  "key5": "2fhrwhbMC9euUpfEMgUqoCc7Ezz6zoVjQqZkbWzDghfcRYSjKTgmPpCKHbX7Yvhrj4S4w4KvFtphBongqvZc465Z",
  "key6": "373XFWgsSS4coPT2k8f5kLncYsGcsoxQ1tRiND4SH53rns5XiT6r7xXgUqLnGoqDCb36stM3uUY2neN1kF6NKr4u",
  "key7": "5wiBcoRdk7FyWRZJbMxW4dMMjZ3cVAXBdihFsB7RW35mc3WfSJTMBUvdeJiroM6tYWwvGujQbM7kVPJzCtCd4cpJ",
  "key8": "5nABGM2kvLWu8FPe9jLxmi165FbmPYyU3CUPuGbBTWWBvSmnqqbVxaFQqQTy7dGmD3M8oQe2jjLHY69unLuEf6Xm",
  "key9": "4yHd7WofB9pqpZzLdwsngPp9eETYoP2YszMG4CfC1XJCqNbMLwrXuLrkQjYa1FQihjfcuAKJNtuvMiffDKpLHr5b",
  "key10": "61Cex441fHxhTVqep2DZgQCfwxzyS55tdoQkJZ8RN3ATiTPmJKFmX3xQqvdCybYnBBrC5XqasVR7hEcW4PhvZPJu",
  "key11": "MDHZQhHwGRdE7KMSbXvK8tuGVCpyxYDQGJAyxpAoNi57cm1d93uqHwEB6vuxAkiipv3r6YHGBRqw3nZENq86Y18",
  "key12": "vZjpU1pBA5K5B9Nd8AH7eAik1Wz1BmFbRjYkpWpXQPpcsWBveBXpnyD37Mnrg5k7RPhsAw1Nx4Jk5KZB2Rg7qWJ",
  "key13": "5BNrcikHmD8DxtqFJv5pRyKrYQr2HUPasnB7Yb5n9gS1jCVTe8ukwDDD2veVwzHxS6ie1t5wDLXhy1M7oPH1PkXk",
  "key14": "WncqhoqQwghor9qbPzznTHynZtKnyoDiN5zE2gVvGCbeDRDFeBRGMMXG4vKXxmNCXJYTihuoqGpyWaJjwtdwdmw",
  "key15": "Y9y15hWbMfpQCCqmArhVNEU6VW5nwALdWLoToQHnyhEXG7ffXByQoCA4BZZ2P92H3YM23niTu2oCYN3iecHSqD5",
  "key16": "5xfxsgySYVzQk7RuqyKuqausuq2j8CvmB6fSc3Rypqe7gboprfBLn9Fsi2L8h98trUe9wdnWYHZQfgJRZKTKxpHR",
  "key17": "mER4P7u4oCr2TQnkZ63SkLkqMJZzYBJqV7VMYttrbw6282o7g4TwrkS6jFuSMCDtWKAnnphiXM9BW54mVK21Dy6",
  "key18": "3DktcwNGnaAt3ZVG4sdaNumh6CdqAqJASZ5Si8Nxgmn2EDZXbGm6ohXCbFKwu78Nq54ExMY22EpHw2RwBEZcuY3Q",
  "key19": "57JzM9VemGStX38FeRjGPNZw734EY1EpeVUDWPfGGZSLdzkA7YTcxBGqw6s2DwcwudYDeJgaeKAR2ZhXB6EC5XMh",
  "key20": "477p1uUmouDUedqMAkELQRh3FsNmbb3jqR3nHseE5591VEj34Jt5t3WqDEUypK3HeZRre1XbE7kN7JSPoYwpPHFk",
  "key21": "adxu2V5MT5he2CLMyKkxu34XEat2TMg7DXdM14tPYi6oTzgv8XJj8uDwb9GwxbQAXaRhxJpK3ifWsNBaLVGjuLV",
  "key22": "5cER85axXuHVSGSh18WjvDPakvvymxgcAXE3eEvwKU45sgNGtdJ7hC5hbuZAWJhG72WKqMFmwGhuCBMRfqKKy8tq",
  "key23": "okvarNHFt2mP1TzXcUheBVqSysy879B4rujnWPEfvKQUQRucma3NijUTD92bvW3bVvo1oTRrRAUmeWBSyHVensp",
  "key24": "3RuoFH6CYijHkTuX1po6sboTXj4Vkc7mpzea1Wsvois7oiDGyTGykedJwnnWbSTvwQQABWCoBr2kDobgNMXGuNED",
  "key25": "4SeRswDvXobzLUE5nYmSMtiHCsg5zwLwcvyy9rvERZRheEKFwjP8H3LKWbJwyWQmHT5Z6QV3hCok7Y2bXgfU5FNs",
  "key26": "26GzaZ9vi5vFZxx3dZUJFq3jKj2km1SkfrXfWX2LmvK4wY3v3VNcj41XUf2BFk4q6W6MtTybMkw17Rbygk6MKZxT",
  "key27": "4snKt5P2zWwnHKHPYqocoK7vNgtJPESe7WsA2jzXxS8pM7eet5NNdQUxXeDTNgopA55aEeeW7TXZS4ec8P8Nbti5",
  "key28": "3TFn1ih2tCe2z3135MHJgCoDDv4cKxeum9oK6AvQDUSZje8wu6F4p8opEbHsJA6e3eJAUcsvUCUrr8Z3T61syjdz",
  "key29": "VFBP9PnjHynmeeJQ9W8wXR3VEuywwzJ7VFyf8FuagWV7xVPnuFuGSVwfvsaoYr8MoSUJXkjZBdyzsECqV2YVPvc",
  "key30": "5sFrA3mKkpTvJ94AWEuRnF86W5xBGw47GKyYguoqPEsj5payJKyhR1xPY2FTXShQEkJWr39Mi7gAxE2FXynK1uPe",
  "key31": "e1e1CQZoUmHyjjVXiTGdaF6DBig4QhW2nZFea49kE7A3KtgUHnDtKqa3PVZPVfCmyHUqD7WvSWuSjM3kBY96xy5",
  "key32": "59gYSqH2L99EqaG2LGS2n5mbesiqKXBtPgjaX3w96EnL3hd3d4ZoWjs63cEZG3nfKTu56A2nArtBA9R1V7bnmEjk",
  "key33": "3ZtbzympQhY7B19vL3WzH5gbPZH4Xn57GFUJDQPNYCQAh4KoaMBmDCirPEYT759SKmCfEsQnVZRCr4bGN9moDew3",
  "key34": "2ErEDbew37o2jDxyNdKzvq28jwXvQPYxkmMmBBYxL34eiJQbgFKsobEMtP9dmejnzaRGMzxjn38ejidKfzFgTguG",
  "key35": "34Z1zqJqGqFLGKvUJxBm44srS44hU2LcvPjTuTjb6nTdEct1Edqoys76jVjEShz5DtMziXKQnRDH7MX66C9vJZgw",
  "key36": "323P6xULHLSr1trPZzrW4k9V3WisZpiG5FHnRKCpUV6bjfht3ngEsjf5cFRrjspHuGwM8GJ2adeSVnerHCdEDF4G",
  "key37": "QjmWjiiGDVFm3LJSh9on1ePkd88jabdMMScH6NSTwvJ9zwSeSXT93uJVQYE1KPXsYvXZNRKoxD8rzhpC6q2kVo8",
  "key38": "2s5U61ogGVcZTWo7WVubXMM6oeh7ychuYHaADP2zHo2fXQj3EYJ2Z93uxHr91wLjRoXTkXjYbsyiK5TymQoPPTvh",
  "key39": "5ZFhKyojMNKRPmErUBpzTQquB8ChW3eVGXCmoSoJRqmH7KAMXsASK5EYKkccScLVCZAfG95fUULeo3EhPGkGQXk4",
  "key40": "282qXNpQ4gxLjxkQTmQLiGpuG2g8D76aK6m4hpzjJcTh61j4voy76oFik7XgH2kYaGV8pd2DdPxu8E3r7ECE52Sc",
  "key41": "GPFycoYfVkprpwEtdBFMoGhCPkevD4gS3wsTEii8Ph5FDANhATHaqoEu1ELiGJLMUjfqwB1dHoKMZxRiffPx1bK",
  "key42": "91wHYRq4LDGzKAmUbkdEw6dKwcpEghKJvZhxirecAv6LbDxGiuhUPPD6sXqQsCxHsQVJ71bnhuza6iVCxTRC9CN",
  "key43": "SChFo6b4PutMMhyemSi2XeoHmkgextqW2XQuSQz5RvoLKXMjgEVmB5mJ4BhVds2wQwitTzoGFhNme3gjMaLsGh2",
  "key44": "4zMUEmqQZ3iiVyuuyvuZJL3LLBrMw4kd1J2bNCUxLedxp15q92PuGzpSkv4qoNY5oJ4rb79pJQ5iaikofLeUV2j1",
  "key45": "3mgbmnuSbB9yFsutoY7wTzxgBCHmffHdpXytWXHorWiCxycM7VMK4ZxjWLZQRtuHACpXhGKZQwRtzLxNsR38CrJJ",
  "key46": "5GPjgRFDNq93XdnjrRnAj3WjLA4fUHQu1H82RLv8ctFWziosJfFuA46y8JLfZcXat12poMAf91WxYuH4avjazyEk",
  "key47": "4VK3mURRjvwK4fwWqw9FZmEyySFaqtYmyuajpcwgrxEWLrwq66uA4tNPMcizRKFq8z1ukGVfcf1H8Dem7RtiKgMz"
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
