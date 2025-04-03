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
    "2sgYB7192rHPZ71Mhb4dcbQUPwFiDjTGEFXpssQ87fAQbvNrrAN9hFExgx2Vr4BDNe3YfoMJk7M1r8dHhfzAGu9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c68wuBrZZ5FTWFDZshaShthEooMZ9H27SMnpQ5GmvmcpsT6J3FbiR4mCDELuNqmmfxGvQU7DHwVa7ih7UQ5f4UF",
  "key1": "4upAkmpAATkd445hALwJJ9cxjpsYHhVDo5C3NzWPXVsDdrJenVQvbBkFbxBPtUSbo67q7SVMQyDiMr5DSkxfRxec",
  "key2": "2kmeiudx4QGP6bMnecVBD1DmzVYrFvgMKH42ivJi4vu2EA1FMykMdfbTZsRAw2U2ifGS81LFz5x5ZHLoZmrrvwoH",
  "key3": "49HqpqKHBq1hHt5VDeo53tokbroDjLFGbFfssLf4szwtwXP6fa6mJF475Kxu1CqZzGqmYs3h9Nf1fu8YzmcZrRqc",
  "key4": "4JW623LgNt5oAfDoEhCguP87sjuC3KT6K7mYvM2HAz75nB3J5wNfBHvDeRkT8myJsEnwmUax7sgSySuCnLJRYG4R",
  "key5": "VQ3Co2q8N4FGJZPP6MDLVWoTfeP9eteDaS3xGoFSvt32zyhB1aidkpdCqcJ2Nyz4PhHvPFv98pLufpoXLx7eARt",
  "key6": "4AUu8emHJgy5jV97jkmKfKnByQWax4PiHQKEqGRoP4YcVAWHjTTttYHEx8vTBgCYvfzPvujfVJQkZJ4CnRW7ubBZ",
  "key7": "2SyzEsimDpDknYvJP4SABaLyjF6tPMPZA8AqxfBzPjWt4bHMqGtSzYJpd37hBnZC5868dxYbPzM8GGdcWxq9yhW6",
  "key8": "4QbB7wfNHZTUrFJFNiTAURgycCvg8djuTac9a8Z6B4EoWVWjAn2ForTmJpKFCtk8Ahfp6qA1WfRL2LF4drzoxWN2",
  "key9": "2Fr19h29cX9TagVR9CCwo7cqPqwCTYywUVKYtMnGDjykGFzMXxueK6gW9WCdosuaoH7rAstASgRKUcrADE4QqBcU",
  "key10": "5a2kVxK2i281XTt4gvp6oYuZUVQkLmtbnnhVsZvAHQor3oWhxhaykaR4KQSfQe5QYytgQM21jL9dowopqdKio1UW",
  "key11": "5tKGeeMCDhrkgvos3FFKkndLe2CbUVfbehNX7tRfXy68HxF4NG3jCYwZifkHonr8nx3DXaFpjL7iuzjgv8TT5YCu",
  "key12": "2jQJ1aY6PPGgLZAm9fa3jeoq2hAWXdnhMeoG5FANW3tHvVnhjp4WqFsgrYDzjZ4Qgot92SPJyLy9fJC2cGURBsFE",
  "key13": "3Eu2Q9MqEPgykdwZcZQMJWY3roq4b2CMkUte3KtUXz79VeXAwjfmS2QSBwRA8DTCwArYTb2EXUkCkuSULy7yvdoH",
  "key14": "4mB8LVESFoMd76TQS1L3jZDs6QaxCTAEv6WLhuP2YM6WTi6VPcP1MGKiforxPDTsHbFuqpt29WXv7WZhbqcacwZM",
  "key15": "5s5i7xgjn3XXLPKkgUnSYgVartitnHtgCi47uHHLHihDw9tSJbxPPdmJLe3wsZhJSaXamZYzXS8Bh5qFEEWhNfpy",
  "key16": "5F2zaghvHmFMXhmcHK1Wk4KLpvZqKPLfztB1CUy1DPQApgDSdpGa4QEJnUQWDBeW3aoEE29DrZCgvvEEzY7paFWL",
  "key17": "28bd8wqyramujuqcqw2HU7K5e1U9CzUJQBLcPdnR6hR9NZpC6EsgZDbgcEKqKyQSoxuyKQ1LUb218gW7YHBafV27",
  "key18": "MB7QjFLcpB5aT3FFqqGKLDCxQf8cUxtCRUoM59xiXkVWJTWsE63kXne2RBcWLhYqJSyaqRW8skaKc6Q9QmqieUQ",
  "key19": "3uQZskhzssEaBoYQakDBTJ4JQdWMjhWPQec6yJyPCTmMheWwDWT9oE3P6TXo6Lqw83McZMJGMKFVnvc3Pare5DqL",
  "key20": "53XARXYzmEHoGHGwcG3aCk5oET9MUySeDLTewjtJ8K4VawTLiovVfzPdFAGYyDY2pyHYPatLyHfFGXt7q2Jyq5pH",
  "key21": "G7PRsEAGsZr39Zfte12jFoAXTNx2MLJLyKHAN6ZPip41F3SJk4DL7gUifjrq3JKAi74smaeg7o7LgHmKqPjP9KG",
  "key22": "43UVDfGAVrxTijyXgKc6FfGjJqCm7GMEuNzjNVmJGvRE1WWRV3cKZpm79NvYwAWye4YMBQ1jiwjoHmKchHquDAzm",
  "key23": "9ELRXYv4PzDCztyUs1zDfxsmpzwwAXpUvgNUWDikJqXb2NNDphPdLYrfqimSdXPv23c4g1jEocEaiLaJD7DjRFp",
  "key24": "49FyqKizLddbRqf2UMGXPj7FBVVzkR1tdgtmQdKzmciaS7MjzgkQ98oTWVssTfzioi4cFyXFh5Nx4cmwDLrVftum",
  "key25": "2rjCa6cxfpT53Ah2ZrjWYkQWwsaW5tpa8kWSs4bjVyNZm7uRqosqBPoMgAvUSv6LZ9oPXoyybkHjEJjvD5b17UHS",
  "key26": "3XAVWA6hCtBwrdMCNTT27AWQUYpRDSPtFHx4NnSFwKy15VUHc8UhzebEpF7ST8vfjz2KQ5gCsXdvZMa7s77iRa7b",
  "key27": "4akvrkTBwXZduEDVy2nSYbaAumeARHC13wvar7N95ja1oumi5CEu8q7GYjcJBjuwfTcjg1SxqnyQQVrP24hqd8tJ",
  "key28": "5KBTmP21nGPZ7XP9NKkLQNo6m1XDHCx9Ko7Q6NsWhvy4atzqjqiXHTquugnyvMknWGUifK1SoYY3g3bQftDNf81d",
  "key29": "m8onNUzh3b22UNt3brRsA1dBaSk6NKXB1j89tpSwZtK5HgHseTVEMfu3w5dFq87PdmxqDDfgXLxn3bweRguvHhy",
  "key30": "3JCG3h4SZdLx7yomzDR3ZywkEAFU2KodqPpLQaecd65oj7EmptPzrUjJaMbd5skh1xan5nW3MVHqw73uX9UJgVfM",
  "key31": "o9uskMR2UGLv3rLyjxomNpJrzdYZsBhBrd9pzFZNosh1j2DpD1YuAq4C82rv6BNbFs3Cw4bZkZx8pLztvjVuT79",
  "key32": "2QpwvjFXfUuq37rsCA8r891qt2cgoJ3wyaRbDis38K7fTvkLevUL7xxLzGQzWG4FuohBJJcBU6AQTiEYVLLE5zBi",
  "key33": "392Y4VTMXcVZaTmdkxouAD7UN18rYKBMSQRm1MPSPmvwcP6W5h2ixREsEd9GJdtGwcCUrBNEfJStqixUX6ZhWnhw",
  "key34": "2bHXGbbmXwaYrfNUXj1UFazdQitM2d59wooyLLKzisxxHVLSrc6WYM3BbBdo85xFVLfUxBHqhYAY1YjX1i8fmSdo",
  "key35": "C6z6A8CWHPZ3CTj5M5LAeJyUw7kfnmR431DLpG7QWg1odniB1nmfdi4iDmkLDe58djxza4w1Hn1VV9a7gAMR427",
  "key36": "5LWyFBa7HFBxXSwdHcdxkdhuqgB5JuDhyW38xxAYroJuFjkRG94GhBZEa4fV6ALV3ARBwJ1Qci2Qx9ZEUkYNFguA",
  "key37": "2Cxhszu6BQtRf5jnermfmtNRPSxAXjWK6b8hQ5fgJeELbJ8FnLJfwpDQWyrr88ZjxpYZRXiB5CqwA2NceunPp3Vh",
  "key38": "5cjL4Pd5cawSn38jun71nXKMzcmCUSSnPQdYSfjpWPCxWMRF9eopJV9KXJMnkopdXftYkw5c6AeWPoMD4og9FREo",
  "key39": "3V9HjBZZfCnEeSgsjY3jEs29XYcLxMKKTBHCXxNz5xmZLyp67dzH1BYLf8QqUXdiELvpt5dPLMtSZieKJ4VdbPko",
  "key40": "5xanGXMGgaB2pyRKATuCNGyNAGjaLUeqRd3wcF7VsG2zzWFiZX88DVYqxr75K9SXg3NYyMZdcmoSTGaqcgfNGbuc",
  "key41": "21i2ahwZw63cKKojwJhpZv3eKzJPoFpAabNPyVH2yG2HaNZEZT4ue1Pd9j5fgodVbBKsKGmerkPwZ8Xr3mn4PtYm",
  "key42": "h84yohPExF9qM7tKxPkL5AGvsc64MjZNhfuHJVixbnAgVzrpzzxhk7MNZQXh5trDuWZRpvuoECoETS3F9tW4ZJy",
  "key43": "3MCPnQJzDTSYcxAYMhqoL3PWiK2UoSw1W2Mow32jt92Z9esEhjeaKm8ZjG4N5g2PEY49nqXJkCKvptGnci4KGGZ9",
  "key44": "wEij7dFx6YtmysYQxexZUcGou9Knj1DxVc3jewXaLwfJyKooKbuV8UeYNVcRpkoauLCFMg3JUkXxHMxdBowAiJQ",
  "key45": "5N7MPEnjZXwvBkwBf4RmorHTQ9aXjkVc4hKdvFwyoaSCPJNhuCMAYLbUHYDTVjJDZsp7Mr8aPEjBhmMWiAsEdzEk",
  "key46": "3YEoU4kDxRfefJQzorj6t3tiyqHGNnRLnk3vd1YhDNAbgGcUY2eVfLCHi3qQd3HEFMmJ1XbUax5yAtN4ShBNRVue"
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
