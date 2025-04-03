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
    "4pZZ8V2H4SYEzgUcaqh8FgKbWa5SKwCLZEErkJUsE2XyuvhPi1XCngUJeQdz127bVTCopjLhBBdJPg5iKMYvhxMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25CNPPe2He9jSv83N5s9DD5ujmgRxYiEjUqDqNRdoe5ZeLqAy6g4kJhXzyfWuA9HYnZPfmK4buHmAvW4bd2t9TkJ",
  "key1": "3MJPqGfYB6NMcyRx1WWjDZ2n3RPJnttq5Mh2DEJ5XpvKz4ybUGzE5npywDGJHHqDFNwLS9tdvhE4gSCg14MQV7oo",
  "key2": "5dpfCnLPZsSTUPWmp5rRhojnePNhsNhut5Gq4TupApWgZcdzsZZozUFMYv7yTkC8qMqLkq7errUTYEGJhd9RQjLD",
  "key3": "48LuPnmHyNJfhm21hKkTKHtLioKMFhdwTQP7E7ha7XwxZLeMyntSzQAMfKkSvJTK3oua1p71VkKbALZdd2LqbTtU",
  "key4": "aQder8ZR8Dsi3AGCfjKSiNtGC59dY8Rcc74Ta78RimZRZ8c1aQY9mkVdqM6BbYF5T2aN57hKcHwgjCW7WLVb5Qe",
  "key5": "Xt6Lxd9YWqdyzT1EET28v6nJagBBH76m3cihmpodwfCN7QQZeQxRDm3pEKzZCuKQYE9F4pTTJg42xNFdecbAiec",
  "key6": "2bJJPzn3PEnf23WkzDxisQ2QHg8qA7ZfmwnemV2xtFDeGzjpZW4RPAVXSM4oS88PU3PB6wXQ6WNE581ns8M9wfaV",
  "key7": "3FAwEdqGBkxJPX28WKhWkZTM42ohCih6E55qx1W7rxkL3EHtA32keV8ZPrZfHB8jK71XBTtHaUUvxiMZw7w6xn1c",
  "key8": "4LPfG6b2tYSrhgkirfwoZqaiqQZcoUMNDMhZVnjaH3BgZSRFj1udsuuSAyo5wvpdA3hdWpkZhAVAZwAbZrfkjLt5",
  "key9": "pDPRk8afbgGb8Pmqwk2fVQXZHzhkqy6fb6QRL1fi6kkeKerB7WS5XPFoJ2CqHqSb3qg1zdvEg3vuU651juhmYoD",
  "key10": "47yYcLrxcyo3bCBovY46LrnVPEUDvYsaL4xderNmYSnyfn1uCWRW1DrPQW1iNiZyWdEXhg3MkJnDixjXNECsht4Y",
  "key11": "61e2FVjSXx6aUFxmF8ncYbTuXs9RzGjqVT8H3XFP539tuoWWR3i4ni47HAEoDMHzeTgVmajYgFvy65ZEQSZqsfMM",
  "key12": "sjhfkhGbpjps1d1TWkVMzC8EXgQsUTJzrbmYyP6BpfR98hu1fBy99ZQuNuw5RzjoHR3kMtaHzUZa2ADiY4yqRFP",
  "key13": "2EyDUsaGHCKoJqGCLuUBa9eTEpJ1AXCtWL1JtALh1EvJzsZZYpM4baKCGthDfn3u9FEKeD5HiCFSNEkYW3WWHqm2",
  "key14": "3F6sJ7uAwGyaSSYzwXpxkr13V7QBBSpgxo7GkoNzxBfkSBF9WKmFH66cMUGhNoTPvSzY2fNt4cELYvuYh3xDydsH",
  "key15": "2qZK5BE4PujAXvxGqD4753STQhbd1i9JAARiPQmmox2PoHACTx4VF73Bzp6dSJtMFQCeHnJWaaqi69NvYAtSCYPN",
  "key16": "ZKyGu55ggHQTJ9TntqeqPv82NYDRyJyFFZGEaQhdv7mkji4iRqbKXHa3EDgbm7d4No2pJrEPuSpmghn86PiZi9D",
  "key17": "44JA8j63KguCw29yurcaZQemriDup1Bh8hSz6nREFXrjLkN6eHdDeCxh3PCqCBLPFWLwuRxL4Wix3DtYnwWxuCMt",
  "key18": "5hzZkEDxzdtVLRTo2vV6u1k72YJmZatp8mRmBN1nQdh5SCEmmKKHZmpcxiBzoEawypbEfKhrs8TfMZtyAkFadzSQ",
  "key19": "2tsqGJUpBo5nAdGa3JVxkhaSUpvNmEW2rLDckdqLf13uYQYgEQoMAXpxiREUqsUfmhtHoccJF2mfcx6tfXjWt5wx",
  "key20": "231yJupZTDmG1jLDnkmyHAjL54ZWLTWL8hCji5jWC7nTKnnJ2TZrKy9SPoEm68d43xPT9vZddEcYBYo85bHFWrP1",
  "key21": "2cahyw1zFfqdcvWCCpz1GuanVUQgNbW6jxKhpui7a495Vwmyz2QxGmkYM8JgGsLBmHnMVAB5gHDQra5vGJmub3EM",
  "key22": "5jFFVWywDmBehAUGdTKB6jbM1yXrhZDybQNBaaGYGE673aFfvySTjnwtCNCXY54GwELaT2fDUaKDkmrAFpuf3D2r",
  "key23": "25sHJG6Yfysx2kxDXynSUMssxeWAHZrJWWfkVQiZgUGp1my7SnnJ3oy4rowh8wAZZaTrZzkULqZnYyV5qGbUD32C",
  "key24": "2QmjxeDBpMzbAUojPvQtyeaAAt6h85ZtJDhwoLiY6N2hpcUesF9e6ZaQ7rnHXxLwn9fta5nQRFWyg5GQXRh2Qyd8",
  "key25": "kbvKrNHRa9x3XWnNKN8niVruA2NhHZaNGQkdB1awXyPqzWyQP4ynATua4rjdxRnZeSSCFukdyjw4mLNwioLHCei",
  "key26": "4x25Fw7CgjBdYme2yhDMno4Tda41rfQbUBSrqrohJ91tgBWwjfjhW1aXuFmuSbRa8MvgQG2sPosMZnA4yb8QtwGq",
  "key27": "5DXM5pVGYVHtfyh8D8H9yG3UjecXoWfDLn2ANxuZwnBoR778hSvC3TkLCyvTQ2MavX3oGSfueJvEK7zRmVAHSuHq",
  "key28": "3dFU2SfFJhiR3DoZ6JSv6bFJeoRQy5K7xFK7hjdDEgzGqjhs3GWK9gVSLST229JiPEzsDKKJJYMynn82bca8aK32",
  "key29": "5Fr2Rp8HNhim4AdN7rnFv672QpajWaWgiqAnS1RSXc8vQE8WmtCuySnFjizBa3wNMJZoicgHzn8X7cQSpfPVM99J",
  "key30": "2tBzpQaBp5WtKmo3AK5exxE1ay2iPN542ytbof3dZaoz2h7JLyxMPM4CdGhqoitEvw3aZoxVqULtsycDUcvoXCSy",
  "key31": "22gpaGMAPVyWGg2Vdz8icoh7u2qBUip62dNcR8LHzDKXZ5CH9a4iQ51yn9shpfgQ3M1H26mdmdbD87hfRoYXiRWY",
  "key32": "3jCwMTz7uAGnXxJr2hc8WLGTkS2xFMLyx9LGbw5LHWHx7vG5qhZyHBK9FBMYiyBQbmmDNWf2xWfu6Z9ERtWJp63G",
  "key33": "QCCdDmm531bT6CMDRDzhJnNysS8e5Cp98bAoEkL3uJoG3Z26iCxoataTWHxUNB2uRKYCVyTWQ6WBJ8PgB3B1n7X",
  "key34": "3fiZJ53zYCiMnq2usL4wSfSBuLnweaLBV3GusqTexCh52p7KHiuntycVLR8BoEXUUgmsNr6KKc8B4ogpyNdcq1df",
  "key35": "47j3cZQbBKvYVJMqDytz2Krpv3w3Zm76wiMYpz7ZzNo2BHLYk3i8o7mUXJynbnHoUooWN8bu25a9NNHTLRFzfbFf",
  "key36": "3E1D9d7iHYaZTY9Weh3ephJtVLxsTE4MWMybYiDqBMP8zXy9tguBn6qqhbHun4A9KT4ztKCruDKgRFQBizXRvjE5",
  "key37": "2V9ijjuJDZENw9cZBS255PMvhsfD4AaFHb6xhevvmgnZ7Rk5nS1cepPFDPQGQKtzag8FN2Gpo2NTfCGdn5ENiSJk"
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
