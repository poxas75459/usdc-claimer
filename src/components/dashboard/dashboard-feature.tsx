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
    "3viiLAihdAYo9SEBppJtJJg7UokwhZLn4bq3y9KpMZboLGwCDgZYWLUbnng4JQ4KsbJScCZTFZYgwRrRakiE2Jny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XrasJVGDNFc9SwSAd8ypN9XT47HZMiRJ73nNKhwDMEa1RQmzaVZeZzWaF4Q3wMBbTnJpYu2ANqhYkoVwQtppve",
  "key1": "4yNEtEyXhpznT6VyZJ63TQRid6RKNNQyLzcBQgEx7f7Hny6SsH93dt61X6sX1EVLejRom4JrVFhKrZeG4Uap8rhw",
  "key2": "5vBypEuTinkojBjSQAq3dmG3b4MEqEjf2cnq2nJbds38p7tw8afWucRx9K5DBEE4qRYZMZNYAC9Stz53X1pvGBSv",
  "key3": "c7wJYZ2F7qn5qCM39MytSspk9jhAkcSPsP4e3oTNA6rTKvicMEtoA8DwaDGDuC38asow5ia2AP9WU1AGRafAdGh",
  "key4": "2X9UWjEXeFPiEgEzKWoAGg8rV29jQnb4hEexCh3e4FudPhSyx5FAhjvv9JYduiyt8hsVwSZnsZ9RvZRGRNtY1XaL",
  "key5": "5sMMk8BpT1AuKkhNgX6E4zmfEAEwPAMBFDN4omvQmFuzNS4NKSERbA4DMAV3AQtHV5fDPiAvY6Ga74kTrzBRjAwm",
  "key6": "4EbEK9aYPaNUxgLhJX8E45orX99zkYTmcJZiMyvMWivTeQV8QvkStrPZvw1vdyjs4GiaPDNaG2gWaVnzSu84GJBC",
  "key7": "3kxWRY33ZHBNPEigvrErkFU1NKLzWZ7rTrAwEmL3xdmnhXGAUDeoLuPXCouFCfKoZX5BG1AkqA9m5DMAF2N9rnns",
  "key8": "5BerrHQv4bayA9gXeLdTPFsVqHNWYkFfxGriVndX2pmVCzY7TfXdookfPFFDfmGhvAkv1vgpNUcKHRFV4oczTo1k",
  "key9": "2HEwBAKw9uqHgBYURCwCmPseJaFwrYUEPoAfNRvq4aa8h8oKMAdD9YhJ9wAc5pfGLSkBG2W5NCYsdQhraW3ba8wp",
  "key10": "3txr1Zma67u4Joz2eTDKzXcxRw7WxpGsGxLJP8ppjaEu5JEF3mxLmhe2iV71F6haZoVCsj8EKEvsnAs5pQe1rsz6",
  "key11": "4pd7S91AY7F9S7bEiqVwd9ZLSk7Z8JLqxc1iutNjL9QGEeMPSbgWdjLdkjqeQ47o9q1HwuPT7KCFZP7s7cgToUt",
  "key12": "jGJq9d5upaxXMWjbVDLwURvE2JSfLVHpoWXDziu1BmEbFJN8odhKJpHpKmJHZNLfpNxuriciUMD5Aw4D5WtQyge",
  "key13": "5ZQ6Xxcyaden9ESXiAansiiBE2VCxYNQNAzSVsZi78Ca4et828PLMzXo6f2u7emV4H19U81RD6GhyaNjroZhih9t",
  "key14": "uptM5MqP6QCuTcPMnTfhzsoDPrkZALA9pytF7dEXU921hn9SGDeR8pzm37E9AmJdB53WL5sf483Uf1jQR32Mtar",
  "key15": "12KYnDewshkBmaUGWSYQMDHwxDj5WJGjxMKGF2qwyyEcUXpxvu9VPSkreezWsn6bWhEejV2W14AQFVmXMZ9fkyd",
  "key16": "5Qtm9sUeqMA9wZteaB372WXCwFgkDEAQsRfrz5rfLgswyeEKU2MdKi8BCYo8rgoEkz4rcuGfRYEhxh52tTEDYnS2",
  "key17": "ef3PiWxS2R6HsdeazhMA31g79qPLZxQ1879dkrR6gQCaSezVH37CwRXFUvkaqG1K8YPa5LWjj8wpAhFuJKY38zD",
  "key18": "651AyMRQh953cVMEdfhybwg4PuXRm5CwjYWkw5MASMzQ4HaDVAiujVAryBLrZwXUgGrCxWSYXZawdjLAkgXrC8S9",
  "key19": "5wVFLDnso5P7MtjbzP7HSiNUvJ5fXuUGSXHjLbwHYhpm5TcoFpQYHTm8iKchfiVXQcvSHqj9d5H4552q7iC8NdbG",
  "key20": "55NueugMi9jKXxA9CsHnJbrCg1wQEVNpcwJHPqhi2YXsict34WTjoUuSHtWxouKu38XiodVRyS1zg2rRhBjqL4MG",
  "key21": "3AnQfkhWMrwDtkXELT5v2A1EgbraGgexGPav18adK9noYkmLfN9WbWk4tUk3qUjEBEpF68stE2ShGWwzKXXhqe6V",
  "key22": "3Ji948Yu3ikXT1Wa9nSntkTi5G7coaurPFkVqXC38ddJWjeVspT9HGF7EohsSkFR1LHx7GJmRhPkjp7iWsodVZ5U",
  "key23": "4CuT8uZxfa329bwS3nB3WUeNAGG4PcgPdD2wfXorRdkYAGL2Cqw2k2gWkjNG8HP3HuijjTwQfsR9dj1CwKWp3kaW",
  "key24": "2sdErhCwJDVhPYx6hnevRo4AkMmHQtCwjx1Jf2jjepaR5Gf9pea8wJsHVDN5cBagBnYu162nHfdBnNjDCTCv2Yj9",
  "key25": "MmgztLynepRiTdPi73M1VjBFGR2XUABdR81as2e3YRdpUpM9aymFi9ALbBBYUpNauQGL8D8vgwGGfxodQtRFToB",
  "key26": "5HNxiA4wKHncwBQaiK46aFsSkyH5LwHmV8jQWKmA4vo3DEdLgAonKCLfqh52BME4RnFehAFohUGBWEzutA9oZxhP",
  "key27": "5gmVqHH1XjZejxRYjSXiQoPD1pxJfXs9NywjLnLGxzcfqQVVuQAmHT1JWDyMELhwpbDzC93VuXjKZ9YHb3ZjeUPg",
  "key28": "5QJxRvG6ERVsE8a2p4V38ySgobZ3PbrGtaGw47UN8CPhq6BnNT6WzuhaVoraxPgKquQxY8Pr7KZCt46bUghrda4A",
  "key29": "5yMYn561Y6dKfkUwoo47LW94L7pBuVzdbKy9jd5Re9HgEL9XkvXtYXxKRvWMoruFYCcw4Pztf8tcFmC9eoLEiMtX",
  "key30": "4qjYDXbegpqMsM2SWL3qEQgfJFkUs3iBUgmpG3FCRRGAfTZTufXeGrsLuveei9aVRPgGxJ11mnJ69rE7DygKUg5Q",
  "key31": "5aBMTnKGjrbpsB2mKd7ezvpMqxguES5hTYqyErUbb26fvBbjXYsooLhCMZzJ5Tb9JomGAGgpvn3j9iECcoRbBDbp",
  "key32": "5RM3roMXXhMnXTTn9DJFnTNgeZJ26qbw5pLTnD53ed3BkvgyG3KZwFSWTk5Zxb2faH5ZdV7hUVAz3TmTFrjvJMfo",
  "key33": "2awvfWv9JLaGdCTdre8co5zRGBLxpGF4yMyn9sNySLePZnrnyA3qUdWkdkdcbC1VD1fnQj8YmWNEMNZ35HkDjtF",
  "key34": "5vJXDiEYGtQsPf6S9qW264bTTpiDHNZkeMRJLMfQx8oNfCF3AXNLfU6gCdPsT9j6hy6UZhzoxEZ2JfcaPvab1pt5",
  "key35": "4iPgPSMYFLJYMeZuPHstd7FTrq1sBtMfdXQeGJZqetn61zHiTVzrVngCKAFw4tHfZBn777hQTjr1NFk7NQYYPyre",
  "key36": "2NgdfFMThaon2AyWoaSGfCwULSi9P6LYp4GnZ4paYWC7C6sWUkQYwmUANHnikEUbWLfq42ZeqDFvuPPUHAJu39yN",
  "key37": "3evd7jTNnCyVVabXFoDKTjgcv62DkkHziPChyEWjXG1zUtykMWZc8LmcQZauz8u6HZ2hJXsYLKyozUR26T7fhCpx",
  "key38": "55HmFXgYZygwUfSCMHoJxN89mSzm6dLiFCdH2o2rHhsXXV3VFkY9rihV8T9hLNZViNModWfoKo5nZdKm48eWbyMa",
  "key39": "4DgqhmXPgBjvsxZ4CEYxv4jLje6FgZ5mBr4vtyL68mL4itN54sKkU2wtyqVDqAd3xYKibrYWHKvsioQH4wFh5j1g",
  "key40": "2XXSjjwVweZoiESegmrfHj2w5Ms4rH1nuLYqhpoqHtyRn69z9JqCTfySt5WPf4e1GBfyBRAGT7axga1Adv8fQsVN"
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
