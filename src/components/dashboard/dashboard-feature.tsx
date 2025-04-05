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
    "46dq2iNFJrGH5mpuxmfRX7WXr3PdSwNSTrbNfCi6mWcYA5rhPHJLa98DiLwb9oQHV6bxVXAPXSN5zQnVcUJirXDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePzHYK3Hq5N1jrE43zv6eXP7TKaUZ8TPAi56nAaifd3fy45pBcfiAfZdH3LgVdkEJvtW873MVBDqXiX52CeeAc7",
  "key1": "2xBFfAj8smSWPCo8LJpxA42n5Am7qPZ8U1i6n7VRVG5kb42ZJm7SyzESQWigpuNxJ8oewKM8KG3j8Rok1UtTnEcM",
  "key2": "3LDBGRD45UtBQetGkrWzknyX6UULpFfUo412Ghfi6umEoZfxEeNT7V3cgihV14B75tHGJcwFd5pkA5toc4TW6JJu",
  "key3": "3d5ooucVnDs6QnVGLku4mnvLX54iC3k7vqFNG41raNERnExwZr4ssXTvQL4TE3Wtxse38j2V7z6DtWzxtAbVQLPC",
  "key4": "369XzLWz6ai3chYiJQLTWsT28kVawwhzXG2iLMA6ePw5aQwqE567rajE7WeHxrCzpGWnWeYDew7mzEDzpsVkB4og",
  "key5": "aDZarCmk9mbueVuLtTwLBrp41sQ5h5F5z7kb827aHWaM4ZztSDVEz8kiqUYzUpjLjVk4qygBNM7KEduTEfskTrX",
  "key6": "HyNhLX7xp8sWHS3v9WcGsDKdeExew6nJN2ZkAVGDinRB2mE4ZnMdhecK3Rm1KRmSajhvD4LQef9fFaVHPpZ2ryP",
  "key7": "56WM57ZfruKjex9CCbMQ75FBbci3qFgXkjmqvdC1ZzCpSqjDXTWsmXDvnzaySAkPQUb2cpitQZdrA2Fr24eBYEjZ",
  "key8": "5RvYNyL4eNkCrAbZ6wVAJYH58okzrcu1aBUE4beGu1vJQWu4WY4A5VjSZTJhMRgKNkFGvEAzX27uNxf3hDsfKg71",
  "key9": "3nh9CWxbmVzs7WWSxq2R1j8XwZJqHyYTYgEUiBByQQXzZVGTvckajXSJtnH5JeyP3RdZLmwhWtafmph9jGsxGkBT",
  "key10": "SkWLo6MyiHLGscCgH4vA4dVrFCUmTrYsCLJjZ6KoBX8zz8pd4ANak16bGeUTVFT7kZcbibfnTanF2pnaBZb41FY",
  "key11": "4WRy2unaDV1YcJexMaZLmooTJQpW1yxGkrrk45HiRgn2GUyXNWztiY9H3TM6puhpczC9YqA9ov5Qjq63TT23JBSk",
  "key12": "PNuaQKv6UTJedWAaSdjNSZodaxHnmj6ntVaNNT8aSCpkY7eeJZZkkW4dzZ2Js9cEDmK1qhbpW2vUHdTyW8yuWfk",
  "key13": "2UuXaQETGnPS8pkZajpgvGpbXQYRmZg2AAUTtfJZe4f3ADHqfcyZMVg5h8mU4ZquuMamCHNprv9j4VznZeRzeixF",
  "key14": "4Ag1Z1A5kANszDWTNQGEyWbQw2kSgTi7DiZV2Phqq3CxUnKSKGRfvnK7RrHZJpUUrZxNSmavczL2craMX9rY4tkw",
  "key15": "3gnd2n4r56SQKzEWV3EcRSUuxasoKzDUvizVRP3qYAfV4CwE98yxDLMDKhFMC13GC816mokFcncQ1FP8wVDSMXy8",
  "key16": "4aS3G4GAtDbW1XLTSaZFpa2DhD8vm7oE5jzTE3myd8XXHJUQfFXFZbAQEfzurftC59LMoXdRnFDjstCL4DUyJDy5",
  "key17": "42Zs62Z5syxxCojak9hfaMK8V5iNMxmWzBQMziRCZxrSgeY1GwF2PimDfzjjAPDA5YbjcbiMur1aSBHieHPi1atF",
  "key18": "3g6fTVPo6SpyetUJ4yVfS9wbAZeqhC3sq7hyeZeZNZPtL1bQDuBFLajLgRvcKRuse9S8LMnZEG9EbzMqTKJhhHCk",
  "key19": "4Yn7GEVxQVc5jtDnw36ZQuBxovA7KAm5rfTFbG9G6BWM52e4daxZTYYgGhHXAQzWgfuMnaUK2RGAKAacXnsSgd3h",
  "key20": "2MBReyfKNNKNK6QcoTbfUKfWpsrKdg2bJbayeiZ88hNpQsoNhSVLQ1tq2ss83UhFpTsB3EvZqtyAfGxAgqHpmuk3",
  "key21": "2i7dqaPo6HjFEE5pwQHGgXKtLnitGUnuSN9bZrWRDBLnXXVzPR4Wkd8hsM2qRp84zVWFD6Cn9FhmZLaVaRnjCtuo",
  "key22": "2MUwvg7aob7r4fz2spiuo74xitS2RGboBbDcwnDLxWFDhYr623KnwPDm4owchmCKxrR2XSsFA8GEZpvqH4b47Nrf",
  "key23": "3Hac1k6gAuQwNuTTW2jrCxos4qWKJPUC62beZeYR8WyAhAYhFKHyW1CPYTmzDc6wEmUGmB3XJGpmRaAvaHhZnnYW",
  "key24": "UXdQ119MZ2sk6TrmMyDyDY36TjVPYnjyB8HGb8bzngCeRyVr77kkrFtg2ESyhsBCg3vGpa89kqYXwCj3dzDWkdZ",
  "key25": "Wq1NFF6GpHqYnMrgCEkTjZMW7Zn7BRxviVkuwvoYCSBbxW7PGaRX3Yoy33AeurLr4XLmzM2bXz6q6GBWY4Af5gH",
  "key26": "3GHaAmiFAhGRkKKuNtwnQ9tG7FJc1qhMo6i3sSy8fe1fCTLekBFXu6ZQh1nxAc8Gh1kL9m6trZxQcijEf7iEnMjb",
  "key27": "4VVAvph51KMb7jkr8dQsVVehe7VckVvmGjprdeyXH6XhkBqP2bS9A7MdYz8AqPatfgqm5Xq8n4jTtQeSwNYmSPmA",
  "key28": "54xN47qGS2khNnVqieELPQnYbL1xRfbaarQA8v3CRCvxniqt8GVeuTJcWM2g85M4oC2VHUE4jgYd7u32Fy67LVDE",
  "key29": "UcR4Md9yVjQzj4AfX59Qdn6b9YAPiV6ppcDCT7A9MR5iG136qSxpyRCRr5SHZVbANweRNMfE1NXdSyVZYH98i74",
  "key30": "2CQ9uvKwLszCcYig5fH3BtxKZo26aCX4F7SMAx13RXSDp714tTbkp4QRApb6mv9FXXsZc27hzdo2wK6zxT55zGtv",
  "key31": "3qxbykeTHCi6iTeDSgsV5haxS8HqvqS6rZyNfyLpiFehWXHp1hyyVnJzzTKLFkzUK4S4zKb4ZDNDDQCikdecAkTA",
  "key32": "2oSsVdxSZWxxQHBYZy1EfjtrhGn6rTLBhakg79kbiD6B5A54wTt8iww13xcLvUfbDmTfeS6kvdarCZYSkyem6mvS",
  "key33": "51DB8J8nKJN8sVqgmVP4HE3QSVJ5WwtSj4D8WVJCUXWwgCSucUYJ6zoTkmGyRq9rZaQQLqE5jBC3i9pMLfphqGzX",
  "key34": "23bh1GPwWHqtXL9sxv3psMxwqKCMfDbUsGaFMRZnzTVmkuRU1S2Y3dSvnBMpQSwrMWJKXoUsTNM6agsRr81s3aZw",
  "key35": "m1qNzFkx6vFegg5w6SGfPmH32jLQpwh5KDvDgJGFZAJxLQeJuDZqiPZfWFC81g6hzHYmQ1Uvhg5Y9xFduQ2rmBb",
  "key36": "23ewmygGTzBBySVstFHwex77B77Zt7WKTzBZxXa5fwzEY8zuH6hN4oUMSA9g3bbZyDsLrFy7yu6VyMsJ8zzRjrKd"
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
