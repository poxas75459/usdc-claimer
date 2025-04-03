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
    "2uYVvustiLUv6z7r3oM5x1DKytccesP7dz12qC43JbfW1ouGzbxiVFrbqN4zGe4EdKP8vrudAqQfuPZMZvh9UDAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gghhVkdm8ARUhRcQDNXk6y2RirsutCSzz4MgwxiJgMcHhC5KyEtW8S8ejJr2CGMcGvEyqq4nppZ5wGfQaLpusbk",
  "key1": "4rdeYw1xZBueqoD58T3YjeyCJ3qQdZrhwxWveWa7QUARZiuP2ypiW34KTWudu18Zk53yihq6iyb8KnKAppFLikqZ",
  "key2": "d7LvuuYbNSL11jRhL6oDdp4csYNbXdnnS2ya6bSSGkwmJhvb7YWXbUj1kiDpiitER3nu4g64VYCDkDfQuY65Hu2",
  "key3": "5zjzod93QousKNh98S15jXpcH2MrHzctJQYQj5FhnafV9pbTywCeXu3qaaHzE9PoFwsF6rTeHwqo9FVaUxVPX3b8",
  "key4": "4f7kuyCg9ghE91z55w272PQoykjorD6zgsweo1AWYNZfRdhgGhfhura2SX8r8gUpMiKn4wNqnU9N6NZJXYY1QsMQ",
  "key5": "3QPkUmqm5dwXjH723Emz35Kf9wyyuYvd8W8MtFToCdgGH4KTxseHuFnKAtcbifsjFQrfQsPLZ8GHJjYdVxt1ZgB4",
  "key6": "3wW84tCRdaUrJ94H1W7kgYp7wFKoehQtwQcjtGuUV4Q5FofGrZoY9hTNxAjsi62JX47PnkoxfaPM6Qot8bGLAg86",
  "key7": "5A96KQTjcRzp7qpKFqn2qpGcqHNoDFwCUc412jUb5UUCiy4VowBBsFQkpKtPRyXajU4REQgurh1vAHdyHrQrywKS",
  "key8": "5aAXpuCgcLHpxN31djyrjuM8YTvHs2g6UaX7HqFAwMxoPiHvuA3nJ6jT49TR4URqiT17uW9qztk3mtDzrQ5Yv2i2",
  "key9": "4PhnHs8jRm3VHyj7eVjavAN7aJi4eW1mnrGVAKCyrjNz8Vi6Tac3HiHyJCVom8RqqJG7aBBrjAKnaz7M51tbo9rK",
  "key10": "2pyreTGKkngk5zvCMu2Ds2kfZ1dtRr6NX7YboBByoWYZiqMPCqJ6KkzESWodr3esdiGTtKWQVBY7Bm452BMm4eBm",
  "key11": "5YzNQNU8mfcTYzzRK1eBX5HHrVg3KozNmMT5SsUF3mT6pk4CgT7hTdoxxx2U68HaFWseshGFGecKKPsRUHL4BVC7",
  "key12": "jDzkTJCGVR1xcxWXspxWTn3GpJoJSPvxbkYgTXbjmiRqdXfzxhUDzmXMCi8N212aHtif4Z7UzqSauRyxHWvnMVR",
  "key13": "LEFKjHz1baMx8nagDYEojmUiH8R1ri4J3LeJo5Np19rKBKpDnTXAKt1jQKaL25qcx8oQTaKCXapis1D5Jynt23R",
  "key14": "1rUWiCycQSMpAUKXebD35GrhzK9cGQmFjn1VPkJYrJttSb7oXsQVc7J4bzjJSPeJpezpBebGZ526TRqVkFPwHby",
  "key15": "46cJbjuuePAQrwH1BbpCaQNJrjM1GvVMLJ3M94T371ZbT7eR4Gppt3nka2nm7H3Hmv7fQMx87W7xNcSYfMUh3nhA",
  "key16": "47N6SGzvi719DiGGDxtySgv2jAv1foKrtDnTLWs1Z4FerYeKiwqtmHcoTxBqagFBqsWHzJLih6yxkpf794QZS3qx",
  "key17": "27GKNuhtdK8Q51bAEH1GGN5N1gZNKUpwygAp9e99D6tUMjFQtcuHJRjrvQVcrn7VedjWBFwahRGrmhbRGwR7afJj",
  "key18": "4ApLwVDyJ6xab2e3Zvs9hkPUGtDVs673LjQSpys52PevozoEvnTC83sjQkiqCFzGBbEeGD4ncDbyYK1VXhGKPuJw",
  "key19": "3QMnd77BUmHdY963A1J6NiSkiZwEu8SqpbnSjbyv1dmtJFkULFpNGT2PrAD79JX1kf7pe7v4mfR8ERQUmJKzCoNP",
  "key20": "3oRevbMuqNmwrapnm1yyp91rgqQxg9N9TYGr2HcYcaw8VUTLnXQQtGt6pxAPV7mkxwgrYFhoZst1Ht1BtS3WooBL",
  "key21": "DQ832wkqT27yXW3RAZxWk2moeeZ7ufQatVE9XuP1jzmqroCCZW25e1rFEBGxfnWxU16zFbFbWi9qiotj3wCZixR",
  "key22": "3ZqB1nPcreZzzebmEZEdroL8QN7UFJB7DbnDkq1BUNw4brjLsGniWTwHMMAfj3kuVpFY7pW6anM6QY36ezypUVQ3",
  "key23": "3yri4bFZBWB7XsHvHhdafHSEtcSZzktN7tBhNSmNGsYmHKcwGJheb2iPfUAgH2TBxfVEWMPHyWLXERFgd8F7vykx",
  "key24": "5pRS3wbJBpps1Zufb6LWaWGe3kS71Gqq2KRYzre8BmRkxFuoGnAUwPe2Q7EdVXi2waqbtkWDkriqrhCxSJfbk2gK",
  "key25": "4nLoy689TNFfwvmVax6wmRwwHbMJ8FT827SLbPeZ7eXyX6raaHBusALFfSmQUcZqjf5Xjgn6jeegbtteWAegLVnN",
  "key26": "3ZrTBgiVymp7tAyGCLFcG7PQrtaW1nquKDb8FRTssYrRVYHAp37mD4xqUSuKuq25rnjiYvD96fE89RuFTn4Siqa6",
  "key27": "2EMLMdw7zAAd5k7bBvuWbCrFjzihc3sjrdnLfA12Gp7bC2ULvUfVkEK66Rj6pG9fbnHdKiy7nSXDhtbRNfehA9ue",
  "key28": "5Ba3rxZRWYN4S4R5MZEjcmb2u6CNf5qL1kfNoXiiEjUNKp26QyEwZ5r8qGk5me3X3xxNyAz6GmPhEVFMZbXh8dep",
  "key29": "4f62mktRKVuZXNGk5LnUdan3hARuZHQL6tDd3tpKZQbNiNQV22KAdXoSoW7LWWyQ7Dk8wds72pkRK4TJrhbKc5pg",
  "key30": "2AqCwKe83Ki5sfU6AhfkYUyefWKoEDuAi2dwAhjRvNKrvYbccjf5dZLR7PPyu5MHbzJqFrCPYab17ooyNBHBcBrQ",
  "key31": "4B4zfw65bp9itDQ1RHUEymLr7B1dv3axSGTKHNq8JHf9Cd8icKoYJXJPij22QasUeBE17YS8DTQEhzUSHCajnZ21",
  "key32": "5q49eiw8LwFScvfcuUzXCDJTqkWFtwBDRJwLTEzdqZg56qTMNZecQJ1qVEkGPMuknP1JghvhaJZ9kRqwiJNSKta1",
  "key33": "5KYhs27ZFnQZug6JkcEjbpFB8oDWPPaL4kugFFeSTT5n1s2P4KcH38hPw7RoAXp29vyDN9x9xQ9Ti55AJ7GVJXJV",
  "key34": "4WnCjXPxMhER6UTuhyc81BKQ9nh671Ah2bie74Ku8uaKufqXB9rAupZ4ZWjZTFiXKA7yKXqtfSFKayefx7BFox2i",
  "key35": "2KkWLjMzujAjx87UkQsaK4ZX6eaRsuh88Aa2vmhqAqiaFGFK7Y6k2KhCiTBGYc9xNGT7jdFVYMNqvXi4fMJQGBAB",
  "key36": "2xU3dn2u2tmxk6bf3Ym4m445BHYzoLsn3Jm5BsKmkDfQBiVqM1iL4JjFoBRZsHsj7xK4Y6LwtA2mEvduXgcBNVmi",
  "key37": "5CjfbT7Zc4rwNAkS3JhTZwmxSTm1VVhLqVzmBV1ihB97PD8gc79etHTLVEKXyH8QJowJ9sMeCnQniY7Y84gD19d4",
  "key38": "ne7aDBCZpcfat1K6K3EVp1eLkzrefALchk6G4pBaVRFei5kEUFeyJhRJyiAvzDCiqCfQbPkLjEXdHZuavKEfB9u",
  "key39": "2RL1o36mm54tH6khfubyYjgr2xe4BVYvBSCVyH1gPtfQe6fBz8Bv1rEVmwsYUnAdfJbXk5JZo4Cj5Gvyw91DMG4n",
  "key40": "3LNE5E6HLw72Wg3ddpkM9YVynkVgoELHmQFG92WDkixuANLQxKECe38sk6TqVonkoPSZ91saMZXE5KfuwHQvUfwM",
  "key41": "sYaKLXgzpEvtWZwENQGAQT7fqCrCjANXQnuHDHQjceGKRNoT3QdXVQqDBEBcbTUGSDSrkmwrtSosFp89ymiQeSo",
  "key42": "3UThtUuaxA1VWs9fgnYqyqFQeiADgedSm7BNy67q1v2hDxu24X18uFGXczJ4UBexykpDKbYxoLiTSer69Y1tEs7D",
  "key43": "53bfRw82TXE4RdqgA8dobUfKkcBq7L1WqXdptzVpQKWupzR4uzJRFyXAjdcUE5rN67TNJbx1dJi9UpaR1AWuujcS",
  "key44": "PaF4L24eZsYCXBu5kNQXNqDSZRYLV4UP7UKNBukc2KSYvCvUC9bPtKhyjHFhE2nAyG6urRAYZsCGCsKpxHR7C5u"
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
