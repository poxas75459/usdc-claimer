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
    "5ndmsDnHMUgbfGvP7D8EXgMoQNR3KQQf2gv788kuEgGRPKUVDN4pAm8znbMfXBqnvsfzzNw7exk8tNZnUrGf4ek8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kkupcFsdBKEy5ZFdwwnyqPeJemMpp8ncMC62gx1pUuaNUegdDimfpmjc38bvw8HYq2s4ADgq3Zu1rYaoj1e1Ymu",
  "key1": "4NjLPeFtDm1ArTZrDrf78iPAkPcSpQKevwXGGy6Q1pZ13h3mndTTCaimcGdBSU8KpUzGg9Cu2GWzCkuDkPTHg3J9",
  "key2": "47caf4wPSqT9D7FRhQGQ9ctMQYHXQE1g6LPd9wGa8HqpNb5tsnJYKj6u8Lt2XSWvEWxpDYGwQpE776bPSG6pcmsR",
  "key3": "ni59Vs86EWcMkEkx3xLTGH43SW4BdctxHzjGjuKuish2vH7yUpLQeWv4hzc4WRDbwmaCEcGQLHTzFJpGyJBBhgP",
  "key4": "1pPzdRvJQBtriXRzuXasQ23MKAPEEsHtorGDuremnsRSrHQyYfHxFjXXaUqpEoGpWdGskGSYxziJf4WnVmvi5Gc",
  "key5": "4vGNjhucxRp2dDDiEwo9zMaFBB9yMFUjUCexk48sECDYkXPJAfGauvp8kTDnz6b7NxyeyUs7J8wHoQwtQFswvWgt",
  "key6": "2TUTeFCuSDh1td8gNBUP5kjuDkaqpWxTbnupd8hPHNHBvJEW1ojyWyMgucnogHu4YzrCLF76pYengxrvKEcWgT13",
  "key7": "2V9kM4vDU7h25Sd1GshXbVxHLf4x7NWof2gXuq2iEj91ChJ1xLcvDB6o9huVyLAER1NBh7kTQNHaJ8NdGQSH4Hfv",
  "key8": "5wBUrDiVM7nPtnWdHidvgymCyWXWkDYJGcj3KzVxD38WvB4wzNE69VG2DUEruzbD9RmF9yuEfmaNmwiB3doAP1nQ",
  "key9": "yHM4bEF27mwVrtnquT2zAQQV3pCknxmhs3xmE23MoN6V7zPYGVh5WFLswCLdATeekYvUPGi9AXRr4krfGx9qpmy",
  "key10": "f5R4dsavFdbCRDp7eRPSkvd83hbE5zMVvtBruedo1vupkRBF4Dw7AT8mtu5kMPRSpViJtNewyQPB3Q7e8B6XzeJ",
  "key11": "4nDfjaSWgwjtA89MLzNds8YmGz5EGu2DwMD7J5xqtJkpMU3kTt4xkArtnZKwFov6v2TDKezRkj5AwbsKUapZ3ueR",
  "key12": "3rk2ou8STvV48exegYakaiB3aJLgwcHSExVecfsSC5LrS2i4F9n4hFooWuAHJHJHkhQfURhpSfrd2J2fTWvgV28W",
  "key13": "5v3JMLiVg3VFYY9pCEEmez7TZ5QZaDFWMiR28eJH42AhPZBX8kxK4K8cKs8otqSBuGA1MkzNwYvdGFgcU3HxvNRj",
  "key14": "3rzF5Z3T1HLyT5T8ffVXKsWbm3r8dwKxQ8N6ds3aNYeX3WjFR8SH3NcGhFzYvHdaKMK7mnJpSczwEe7UMyGvKXzS",
  "key15": "4SqKR4LUaG3jAQjXoe6uMBtGWtq1KCcYb9VBXHLyHgsT6iBQKZSzyAEc3yMiANNpSY6Jm8g622w5jWomNFV2MHj4",
  "key16": "58yc6kq6M78VKZMDzSeHe8z4R4fAj2DeVjugRjsd5aGsgdHdUvAD8zCyEr14nRa8AfnKtvuTizGjGw3YJZ9jFd5y",
  "key17": "5XTgVoVkqLznnzTD5oWBVEMc8Ek6Qy8vKYyKc24ib4o9d3rBJrnRzWRsUyyEtD4Mamye1qkFAXCbs5WZoQfh2bap",
  "key18": "T7nKmaJz2cPfqZwDLXDiezo2moqUz4uftM56a51UYu5pNHn5y6qopTQrGyEX1Wd48ABPzfh2QfAbmAqpm8jh5RP",
  "key19": "4v4xorWvhiVyXbAPmnGjZksYv86DYZgZXK32nNfra7t6yug9iA3asR59oRVc9oWioMkgzdhyx6q3yxL81BbjZZaJ",
  "key20": "3kn5HKtQEBkvxdstxKgKtnQF2VaotSpYbyFfN1cpbzUWnxWbV3HtfsEWXHQcxrWbewcmw8SwqHNFuUBWGS2fPUtC",
  "key21": "3HUWPCXJCtDZRq41yYHFTzGikiY6qrt43coCYM9WM3C7xLSLZVB3j8Pk167ykBMPXQGveSMXZ9imCeevSYsXrYuk",
  "key22": "3sTbj6eApw1VehNWgXLLo4LUHsKtcCEiEwh58BB4cGEKr9T5VjdemHwfT2BbKKpi7g1TbLGUmbsUNChRKfzgYzT6",
  "key23": "2F6bP77SNar8ATHXih46b4Mjr8JKrFRfAHyjtsJSzdsUKPoPKYQYX3wa5Ze2k74bFgu2tTp8fCbYvN1LrsweRWba",
  "key24": "4SPZKDpctQH7oo33RzJazBfo2qwKy8HpUDvN4XXTw5ZxwLLJqxMmQEDfz4SzGDvVQm8rRG7XBWpRrEG6YQzZvuRM",
  "key25": "2EpoUHx95SGaXxLWUBar6vdEbAdmjxPa8MSADTikYyXuaFzGKnttUEkwgHrnpPTQcdMur1J8S3EU98RzLoAdtGib",
  "key26": "4N21P3Axa78ZZYpWMiGCNjYSWHKgaALLuC6FUQBcg3Bx82JGtJcUFFFxuJZBceqqxBKFM8FqRatYGuorQAUZBNRS",
  "key27": "3LwHUbhqtLwTUQ3ix16XncMMkzdgNL62AjcSQ6p2xdfcSvBgHfLJJ1J1YtLz4unBjNzaq9jxuAJgt9PBY387o1g1",
  "key28": "54w1vLekC3gJn6UAYSjHcQRvmq86VHEuTbHmSBeeRdVkGUJgtMyY9L6hCYyo6jTtXUYrVaHtXkYZzw9UGG4kxAyf",
  "key29": "67PFbUotwKNgj54UGpbeMFh4iv96DcRXcxatPAKvAPLzMHU5WQYiRNLNAU6yBL58k8Dg7KKdgo73WeB5WyHS8Vxa",
  "key30": "3A1TbRADhUCawt57mBLDNeM9m2d3wYdfDcKNPK6PAUzzkKUZ79DgMGJQALCN8D6Jp8YchcSi9SdeWGdnQfaVDhw3",
  "key31": "RTioEi6Zy7TDNGripu5vTGimzFopRw6CwGsLWd8q68CekAbT4DZq5DWFU1K1GjX31XLqvLB3648YhZh7U4ghNFE",
  "key32": "2GohDCh9rgeCAd5cCEgfRNrk2fK5TikuorWituuHyoPHxhzsFDJE8R6sWoAmBvj1efxNMpyaZd38FrefD7h5fMrL",
  "key33": "467esN4eZgx3HZLGzrMDyjiUUHy15uKqyBqrpq5E51a9Jz2PyHfkBEoK5sM7LXQcgZ8ZtsyazLojh5bLpQqVfQQT",
  "key34": "2xRqFL7cD8vK5KkEceezSUUEn3ufVzsQfAome2VJhwMVHXCYHxW5PwqHhSxPHCsS5QtiHmkLFF8ZjK9zuBn3t6sj",
  "key35": "4fWFLLVSt1vt8ipc3S3ea6GNo2i9h6biS75MX5AVuJmKeV1capWwim8THyQg5EV251YFws4yYxZtPXAk9V6a5WTX"
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
