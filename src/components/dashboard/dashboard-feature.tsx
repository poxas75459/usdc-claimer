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
    "2EirPKqBm8FTwrJw3yHfHe4dGpJ9QehgNUPN5e2A8viwGzH3z7eYH4ZNjieaMEqnFgxq4AWNsRz7hg6trgJ3VpYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37irS7XT9xDjBVsHKuF2C1BwQwpcVWs2XRmaEqpErtU4YPJdAMS94CAjR3rk7vpnYXV7qKV2NxCzNP7tAr6ohg3v",
  "key1": "3fcHnLJQXcsAH8ah6d3CZQtz8y6ingeGchHfq7ghiGLts3492K6QJBHFJTTqSPA1nb8kK9vqQ2BxeXJkusZDPK8K",
  "key2": "Urp2RPjvcoWvApvJ3ULZNUwd3LWxFxzPCv6ovkWpEUVSqSkSnwr1uiikNpXkEb4TnBWcvot5fS9twV31qmejSKn",
  "key3": "4D5knbDTrvtEm49McaF5Xmzz1mWCs6HLfGmW7eGk3Ts6VCuhRezcgPyV8eVdoxEMWXQunW8eyzyaDwNr8DD1WifC",
  "key4": "5MAtVqEkJqxfgDSxft9GHBmXvAfUiWBj5WCqGjARcZk1ettn4ir9XDM8nMdu223oavqSBj5w48iPgW2qso5rzXMS",
  "key5": "atdUU4WJbwXRUDgjLWeM65zS9npNuAqawgAkxV7dPcoNLXPFHJkaGf1QayP6gkos2ZZjFG4Yh5EadceGhk8YthG",
  "key6": "2C4qMHwEtDojEkEmj42N7AEXD1HMxviQjyoKM1CsQHMbbYHZA8wJBk2K9BKsfXCDcyT8d1ZxVo7BHAGsDuPjBDBM",
  "key7": "4zcZpCdQLetmnjobGtT6xvBR1Lrz67F88Yhw4fHphKnV6dXFZiv7adj424gbxdZa6f1t91pYic7oVtfmvHnRLZ9j",
  "key8": "4D8TYZMFQNteZ2MAuDVirPvfKfterRF8E5wfNtvm2cYsmqjgyF3QXRJuLkfWsGCXyktcZq93X6X8LiigFssLLoJA",
  "key9": "3UMfSNZoFLKvSj2sNyMzpaUjCan5x2YcHCQd67xFU5kUNdbPECPfCFfyHDk2uVWdK6spEoE25mio28Da2CoksrHg",
  "key10": "PsUHCWYrs3ocb9ATSopQyp7hzu8i2ZL6kmSTkVkMxn99fVMgmoyGKGcHHdMNPttjTntfustozVVGeafaDUmK2xn",
  "key11": "2mMm5XP29iZacituMahHhuuHHre852sZSNhDH1JRCpGAWU85CFWFkLprqKwTJJWD2japwSgXUzjK9RnDomNyb9v9",
  "key12": "5DtiZcBYyyezNcTGRfkFtMQ9pi4rpcr39XQtS77dw2fncEEPd3go5ua6RZnUCK3yjgXbqGBc9urjrFrHp5A8Appc",
  "key13": "3UehRsixj3cBuhTsn15bRjSqvVSdCDtvx1CYUeUE9funECoZfbRzH2bpfTf66egK8iAL1qqBZuYvc8aFdbiHqiZa",
  "key14": "5HKvgsY78Y8nTRnECkbgVkyK89pM41ziX4WvgDWSbj66mE4RnrTZ8Rp5Ys7nvREnRxrbfTgsPxEEruggCLRVyWHk",
  "key15": "3Zp5Wkbz8x6116XFzipmAtzZLga3kHhQt6bWjhLQUob9HrpzFGCpdGERbZNc5ZS4MtcVJjk2jTxfrkcPsnNBYBQq",
  "key16": "3zGMy6c7BaBr86vKdb6KsAUpsyLw9CrZ1yQtwYehd3otDW7xAKs7vVnXaz1QxbsAyDXR7KZhk2aGp3qecC8CiFy9",
  "key17": "2c8EKft2hLwYQetBaKJV25vWENgMbP3FG1qfetGTvMoWYscd65niHPXF42DUNbSKEKe3aujgqDvsd1tssCS9PWTL",
  "key18": "2ajigdvJM7Q3NEWZuQ3Ptdt7B8MZCrc95GR2agBJg8eE2ZBcjtuSgpUK6CRZjAEqJHY8a7NQcfVk8EYyfbrmjwtr",
  "key19": "5qNaFkgPYwouGuKF8vpo7Jx5Hia133uwGdrtUzzpNgaLZztTjUTUuDsNVtqkDDyYgKgeBc5iwzSy5s53NEoVqWTb",
  "key20": "4db7Ch66VSRJuqooVbsZVnkmfkeZ5bb9KfHGL7qPALf2i99uspsBwBhuYQQg85rD3kkRtwnzyCoJu74Nhmv35Ctk",
  "key21": "4iS3HMMVTd8ogg6JA4WktTxCoaeM5dD4GJDNXU4F3pqBVdPhXpXseGCSh1negpQ3quDVwt6c3i7voUkUvoBwMX4j",
  "key22": "ZsjNVxqBVAdt9bbq3PmRsxrrXZeW1psh3rfbxAELX8NvgdEyDvJnrmEo858vgy9NECnPwY1Uxjsj3Srkfd8kCVk",
  "key23": "B4G9sdh9mYEBprcvc7Gm8EyhhNUnvREgZitvEGd6aLyafzmaxMocE24hfKEu6hoVa5gRXwZYBYeBLME1rFgGTug",
  "key24": "3RE588wtFR1Lm88kJh6emNzGF96kFFUAVuSZ492UGBvyqZjHAeZiDVDYn1qcJPCUcFarW5sGN9TKZyPD3kJbD61A",
  "key25": "2XCPAELQZNQ9DoJesznmPwB8druRbS8XGZy5b5J9i1qLriZKNm9W3FqQeLdgiqCsRkLbeUnYPbVDQfDMnewEs3JZ",
  "key26": "dgUQKeZos2nRYotwnR31d6HGwGoU7uXifCHSjuPKkA4aEyLvgDWuSofrh8i3GWJAiqZGN64qane6faCKxA7Gr57",
  "key27": "PCr98LMUMY6TgZzvbxh3kzUi2XjuzwrZ2L5TfrGFk1bfHJuDzrM7kUtpHYWfTuKBnBTMbwxcjQR31VQZ1XXmjAj",
  "key28": "3UJpu2zg7ZjEkMqHpGU41YLvjM5kspg1AdN8Z7vgsH2gtb5y7VZCeZuc694uEtigfJJX3qBhFDZxjDajJzD8PLAX",
  "key29": "2gAtPpYCFY9HNuCcnFtQXnWSoAhRRwSf3H1Vj9cYJuDBHoopVEq4FrZSc7WNK2fm4HDSMRAL5tZhxe5vb6X8AweT",
  "key30": "21JpvDsS5py7NjtYu19K4uJ63BHhssfE13BZVmXTKKdhEJb4hJr3ZToQ7Qza7rwtPvtW98zjBM9ppzD4opgQdJwu",
  "key31": "4wiEKo3Co5Jf4mWcGEnvHhXW5wVXsYXPf9wqqGq6dbzi1jqMDBGNxHHM4LMDfBRKGNUYiuKmhX7TsEWkRqCgjECy",
  "key32": "5vocxCgu3pXYsieFVJa94Vp8SYyFYV2xMV484x88LgrhP5VvfbdTvo834NQt4k562xJzkbCM2KqokTjqn2mCYr1G",
  "key33": "64sqBi5FBYoikhwyL8v5wfMfTQWB56vVJQYedx61Dnd4AFTMAaGpj1eFo5WPhMxD74MvnmiBTXxHcUqbhuH6B7E5",
  "key34": "41cHeMg6j6qTY3y9WiLQA2QHvGUBfeCd1jnMnMYSE25uQampvkzif9yTLFKcUmpMx5fLL2i8Z7jeghdcBVqx4cwQ",
  "key35": "4gofMXBF38CDHE5F6suVeU8RRFFKAR7VBXX26Hr2u1GEtnGPmvRzzUEpzkaLcA31APh4SiuGLphv4fyEyHeYRKGM",
  "key36": "rJcgmhxgvatLHGUvzf6fjhSh1buSLUBK6T8Q6mED8py8Q5daMqdFPfR2MvdEko5CUGBzwFcVtrQF2ufJbg4aqUX",
  "key37": "2K2zgtjW9XXgymmGUcdtG6eF2oRTUANxhpfyXqcc8Ym97pSpvjyQEmezbkbGBjRRpu4RY4RWavH7fqeoGs4m8bZk",
  "key38": "w6PYhEWLUuvkM8HZrZEwRtoXCUXbphwYwLSFQ4PwzPbQ5etz1DxUgwSGYeb12fSt2uG2svJ91gT3gVqN8MUvzzn",
  "key39": "XZGwxwx9zs2zxK6maAzqyzqP81tgDpJGFPRpE9dWqq62MRqWFML7Y5PSfJHcfB6n7m4oFAmZjW7G6WUbyEjZx8J",
  "key40": "5f8i1cWNKNQDvm6r7XXYdb7M46TqFBnjedfbwBuYHXxLCj4hvk5qr9f2DHsxn1nLzEwLRRySC3MLYigpfRwYteps",
  "key41": "2bUhDgZ2Rqy5PzN4UvWUz3wedbazdSPniqHt5kGQ9XU9uZtokrrhUTmk9mipQK2GZ2G1zpg3BgmNQh3vGkHmgdwV",
  "key42": "3AJUC5grBzmxS5L3gpswTGkKUctXjemu1eiWggzK3wyDj9PmJgCSf6dYC9y1o7RCLmxxVjPThoMpcKcthqH4pETc",
  "key43": "pviaUr6NxHhHrsnPnjFMauLPXGD4f5186gRtNWEGiGYAwcHiJYh1q9L9YjsjbUuWxk8zyB5uX6zo53STKBDoxLB",
  "key44": "2mnaGv5gFVnmPTj1B8w4GdwRjUjeNcAWciaNV8EFREf2KwNGAB3G1zwv9ikxScq6TnXy9oFreeh9tSxBd5ozS9wB",
  "key45": "2hxRchhPXPUe9F5HX28xwsDLqDBbAoC5BAJMs7DLgMRNoxFjqQMjfST7SjZKj8sSZkjWN7ejJh2LoidMFhraUwg7"
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
