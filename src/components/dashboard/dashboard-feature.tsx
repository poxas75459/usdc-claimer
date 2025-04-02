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
    "4avLjCbyzPQJNdkquCWU4Xv2xpjKe9yuZS7yFrLV312EGQxssCNb94dcv1fraeH9C14WBAKrJTHMzbbLrwLX6VZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEDMZhxxKBceUGZ5u93sVvorwLZmzrFVBRGgs7fnBgPvQYMJ5TbW8ZfTNMaHp2bvGyYxCAqZGFevBg8WbNUygaF",
  "key1": "5ZAscWgyrBYgKjXVba9zp1yByVq89DyZsa3XD9aJLFEuVG7GD7Zp1rnW5AJAXQyhah5iCN6QYdUY6NNkZM1j5AHo",
  "key2": "4HZrX54kTweWbWLuRNoUVfxku5WCoXPUBysKZ4brkHfTDCU3GxRSpbLGKSDTSxk773peVFGEVZfqnEx8d5LKYydA",
  "key3": "46PCVnKUUfwjHDdi4VniTJV7tVHyGmUAqrvRHYxa5HNVGsBMvDgH5C6Cq8cZQjDiWAiuHqaaPMpENXuQpZSnka74",
  "key4": "389GeKoZFfR7ZgeH7CmLDSYjCHL27h93CwWZtBhgdzSoziDwDRJoEs9S4UAoSDQDqgUesXoCnT8vDkyuneBbyzxE",
  "key5": "F9ZbBia9ZCWCMSa584BYeiiwn3p9Np78XAvWnvo9pPaPFYPAn7hxPTfhKFSAeG9vbGif89qkfN2UdBTttTwSAw1",
  "key6": "2GU1PzETGz4eqKD3GAtTjH4wJrShkrQ6AedhCEY37LuxbgcbaaqTKWEpEJx1u9nJWcpiJ8fuTCRLYZk6qZAQeHFM",
  "key7": "5ufhKURCKtyvEmQ3EghENemPCfPYUjwwymMAxJm61xpoRjrmipXYHgS24qYCooU511M51trKJaa25gutuQAnv29J",
  "key8": "NPxjey9twT9jd8Vzt3pLc3bwJyhNcsybnhD1mumFAAxMFoqDBtVyMNYwBSJHe89pvBRFAsW1YMEY6vcgRzEL1Zf",
  "key9": "tyPZeEi5XPcGnSpe4RfibZCX5j5Dt5KofoCkVZmJUaooebMf2C5TTcgR92hwiLXm5jZamzZ6dvSmxomBv46h2QF",
  "key10": "3wNVVSyaCXn4JQ192kMnDf5VhxEDEKSH9gw2YWAvMNp6s271gdnZz7TFQpm5CZ1RC2u3Y3Hr66JxDkYXe3NyStae",
  "key11": "2wgoiQ6DDh6KEuCxgahM4279jGFZXZPTT3P2eofZw6vmkupPkjQi5AxrCvnyR3zqLsz7uAabzXx679xZ1cbXhqH4",
  "key12": "2coETAnUX3nMe4WJ3Trj29XYRwvfP5u2jWbGMtZ7zvx8eAF3otAKPAHP15c9Yn6V1V44vkVpEkC29M9a3EdkLBNb",
  "key13": "Qqw2SzTLYoAz3qyD52xck3KwVPjpX5WQKjVjRMuLPQczvy5CKnJL17vjyRAvca69fnwmjR5zeoc5HXhXR9NuEJd",
  "key14": "4CzVSewbHGVkLU8pCLUob2owee4W4PvDioJ9r9UFcfVAnBRnxEsxYM3uAVj3xsvwaLoucbg4ERud5XT4bbCaxRPx",
  "key15": "3iq5rY8NrrqobCkcdZgFX3Y378jLGyQ4RYFhiFx9w9AhRkJR4RmCSNaHKpRensmxShHEwmXdsGFMCewotcr47gd5",
  "key16": "JX3NfsMsagetvjA51keWGGBgf83gyCeQ5Pc2AAgXpmw7DQHTmm2ys69EY6abULoGfUmkTda2N5JoP16jba4UCfC",
  "key17": "3Uqz7cjpSSXVTZwAKE1YAr2UNRTZKVQ5HRNhyeDXMNYrpU7tmRPMqcZrJKJDnhuJHG5xkjnztHeB7jmvKbwSxSzj",
  "key18": "2YuiqeGzzgjxRFP8zxce352VisRPfvDFCCFQdSiNaiLuZApnYSdgizi2S6pj1XwhpxzwJ9a7N8HoTdbGqW62mkK2",
  "key19": "66A3jkqjS4JqHq7Th9maygdkqvXdKn6hmbU7NowM9UcCxCDVhVpAcm2aXJ3P5kNLHeZGroVryPs6mrRMbNiqNJkq",
  "key20": "2ZaEy8JPVkGFsvvF8e3TX3Uc3R9kytYqR8JYS7nHRYaphyKMzeNeid62cXyVJikdpTbAbQjEVYyrsNVTTX1cM37Z",
  "key21": "31EXE7DZpaHLQriRjSrg7TXfG7uZh9B6r98cZ7Nd6t8G6JL2ScwMmC8MRnXw7NMEVjzTipPdqTGdYuruMsm3LVM3",
  "key22": "3kasMzgFrQSdqSd9pJXGysct4FJC42oYdqHbaGBQun8vGsVHcCX5LNDiCsKPL5kvZ3uP1vjSoNgpesBUp15Aj65B",
  "key23": "41zo844g2NpeLt4bC9JcWoY7mr89zNpQTv8wXkX6c1FZodadc9boh6Qr4L31yYQU1E6dAQoJ2G93FE3ZBRpGKzHx",
  "key24": "4my6iTY3qzyQ9aKBeMD2mZ4HF9CCQiM1aWWnXXqG29GJJuPxfKSaZgA1N49WTUfvzNyqvz9iPGmqZs6tp4SUUJCD",
  "key25": "3eCs2k6SPSjqmsF1EmVjiAjJaj2Yq9HwG4GHpxjMLtNXqf1CxRdgYdi4a7U8GiYHSewzqnmyuyd3mrtXDRQBEKDK",
  "key26": "3a3BZzHyci92vm9g4x4Z1bPr9VnRbD48ApPoEredeKg61JB2bVVuUKK9y9ZiZShz7ysPEPsnLw8TpW416DRhPHvy",
  "key27": "32WGar7Ekiq6PogzwmpaQsJGRpzjzDZmpwTLsVmLtBs7i6twdMQa2HJp7hur2M3hecdfSmvcV3o3N9ThygfLLB6g",
  "key28": "5bjFCXBD9pZvHNSHH9SLCrTB76uXQc6Dek54RQa79Vs446VfLNAtsADd2TPpRFpaHYd1FL5NMTaDYpnAHb8yreLL",
  "key29": "5Y1vnpbccWZGCiytNZXgiSF4vhV6xwjgQZGbR4W74hujhYMk8sPFqxJX1ss4CXBwFWhz5Nskg6Z8pHVjn1WzPZkY",
  "key30": "PyX64jaDcnSM5rX8jX4ta3f2QPF2TWSXsGPfHeNX2MZzwNcLevu9vpEAEfZ1x3HcSm5AHy7hjbNQ6N3VgnBqii8",
  "key31": "5NqXimbZ69L74JwktuiJ3jx3b6cgonKYDQbqPpVkSK2Jxyg6yDQBYB1jtj9wzLCngetmaDnLfKhANh45oE4XwPyq",
  "key32": "3MDTGk9hxTgSdtaEUL4tUnmA3EuGgcLk3Edw8j5dPgjbyVJjYFNw1jBeqJRX79e7uygmgUuWLSUFUPvZeoQpPTFb",
  "key33": "4bSUdTTRe6LgXpt52tUuPmtFyN2GryFt2G1RaunaftHF4xZpRGbhn3iBjoEJ3SbVgMcam3yjaQDk6wSdEnLgYfVt",
  "key34": "h8WwciLbdNVHr74kjFtcSxsZFJBYAELJYatVpfBKod4tFLp74kZai4HSfUzw32H2WctmrMjwq8LEZim51VYPMfD",
  "key35": "ycuhZGnNR7QwG3MQfDzHMiNgPskq3uQUgkWfZYHvjJK9xjcretiExn6gSPznF36JuY4sexMCRcN5wtUrWEYU5wu",
  "key36": "4U9n1GdGsuNs9cBvLkxmLSd6LKRtvxsMgY9boa51oVd27oTB2bcT2AtcEbpzXXViHnTCvM7mx5ziP7bv1MMYTDvz",
  "key37": "5SmBzWfMRTJG19QtcFxKhEoMD5DrHvf5aqxQSnYPMtqc9Cu6AzUuifA3L6qUJEHavY2w6D7LhTJsKTRcrHtdWd1g",
  "key38": "4Hy6Tysr9MptPiXVTYsSwMde4LqfhM9u1NxD5tvJi9ciXAP1DoT8wnmHZgVVzpp3LAecazw2GjX4a1RkBRox3ASZ"
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
