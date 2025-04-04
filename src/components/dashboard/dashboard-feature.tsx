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
    "67mvVZYnvGGjEVvoqVgSd9B7ujpGu6fAMNSqWFZEmKC6YpnxysDCDzT5meiyFgMr7qtqjzFjFTR4QxhRiEkqoe4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hT3ZudeSY1Tb3HDnZFjw334WdLWfHNyDdP6dJPgnhcpMt6Tank95iE4uGU8YykW4SURNvqxeuCwdDr4nCsSNoM",
  "key1": "4bWnTTo6dg8HFaaB74ifXAG9HfEHiFQoaH6VejL2JpP6quqJeCZgzsrZc8L5EwaDbYyWynfPAAfN5qJT8hSjvZ5P",
  "key2": "4mAMYEkRZPuCxwAgddKJViSrRaPQQSBbdckVoDZsX5avjf6VmgwYiTUG8NXft3FUdQjvpRNsLz2CgMr1KJz6Gm4b",
  "key3": "2qAcsNWWDTQoMsGdU2G2dtHexoh6wrynBLoswRGoQjw86cg6QFwHx55rxTRHxMxeUmBxLcT336gCmjUSheyBcUDV",
  "key4": "4rZ84TbEP95vCjCHPFt7c3MFKyaH659mBHmdjJMFQbeQptDESKej7j9Xit734qjfggQhGqhm9JmuG2YLhrEGS9cu",
  "key5": "3ke62b61xMpMEVpqd6bgDq9Rfj5EXd3c7oiAtHFUkWzyne3gZEdTPa9NY9hxpEwmZZiEaAF41zi9Vs5arqP15YP",
  "key6": "KucPSZSY3NyPQd8CZY5U2zJ3ExVKdTVh8vswaZtMsR41FFJioM4jXGPmWFVHd7iPtk37GuTPJ3GKZnmc1poZd2s",
  "key7": "3j9AnmLybHV9ugjdyhoYsy1v6YUABkCStm1NuCwc6VZ9ZxVgPSFS7FqSKm1kPEj8gChAHrxpsPv9LseyxZvzHN3C",
  "key8": "2H6bueCgaMeR3Cgouyo3cQNzNQyoqzC6tjoPwrd1wv7tmxqEcsCeU44BRPXFqAss6jYXB4ejc5jx53AxbfZV7UuX",
  "key9": "24qmwdFEjDBaLbVyy64kA8zdniio6XsyJig2mYVtyKLxsXiNekhgw8m26Vh1VwVC5mVYGfwg5dRUZuJ4uNeqZ4WJ",
  "key10": "5YeurDhpmDtgzJ5jvzxy71rzUX6HYicHxv1oD7Tgyhu5TwgvPGWQbLxqATiVjKg4y7mHQ6cx3C9riRxkvdKVdGuh",
  "key11": "5ekBRCtwaEUhCv8b1rLbQRG4MwpyCD59WrPFz4rjWi4G5AXgFKWwiKscTGs9mywQ7gZPVKmKjx8AihWUT69Prj4k",
  "key12": "5frGb2ofjcmvnwLjV6jLY24C3rHNYta9DRerxzSAApdMC6GmjzJHE741gra6AHjVcP2sD2tyPR83zreZ1QL1FGBc",
  "key13": "2arAykqXgFVH36QrZP84MLt8RYLDkK9Y5aw3vzCbuVWzKH5k4mFVPs2Cdxxe1DHisskJCuqghDcBUK2TTgL6LSCb",
  "key14": "53WdQcEmpZnpqHDTpPsVXJnLkx6MkU1dBmpQ357a47RRZCF8N3evcVXWbcKQxG2szCAb3nsApfn3hdG1PnnsZLXE",
  "key15": "5pWA4Wu9MP5u6EosBUh6pSCGMLzEcTUcbhPqff5yU1KWS3oCfGS6Vbw2Za4Z8fbWMY9Qowhcdhwj6EijqkUdbpjY",
  "key16": "2Bq9vH71Bj1SYaBkd34t1Ejs4MWoiHrxeRCr9Z1akrb2MBPRUfGigot8yQhpPrxQ7XaHPZ8WiH3mWcTeHbY5j37v",
  "key17": "4jMasrsHZW6rHKBcZfSPh9UTKBo7kwh9o1JfDxtNW6ES3NbJLzG7M83hy2bSdTf2bUKee8FuQPRoTdduiSHzGPZ5",
  "key18": "4sy5kCttF7ZmEhMNBTpC4kztaNSdp125pr4bjWwbhEevE3fPz6bT6U1HUFFyRb7QcvrdsLGagZFiErMbzvJsaCjD",
  "key19": "2WBYEBoRoprZqEksQQHjFg39fsWBrTE3K4Yt1ffFmqgzZUSeSv7Xw6PRjZAerisNr4NcuVwxv2uYkB915tayj6k5",
  "key20": "24otb6J4WZ99U2B4jD9QjN5FEuCVmKqMGYBy9UshoWu6JRs5qyEaBM1hWSx7UzfVzhdB79YJHRFnGtNFAXe5f2Pc",
  "key21": "4wKNtA4PHDwVo6i3WqTYyHMkSvxgsoCL97D8SCrLAo41rYMPL6pkEUrvgPHEbMEQfbDnmFS4auj4Ze2oKwTyxNCW",
  "key22": "5CJaX2KGdfhrmgEymQHetgb7kSvbf1J1UzZjJhKspBqBchPo9dgr7i8zZDLgUMxUA3K16XB2cai36ujWyn7mjChR",
  "key23": "4zLzESkUwVPQPsB9db3gVkBwm12HWypXSXado1MERHbHemvhkgG4jUmxSKKVdNyufqSZU3WzczN7qmKuvMPgaPS8",
  "key24": "3gSNRdvifxxXhNmpP7vSTa9qDTSjmAkoP1JyaytookcbG66z51EVjurBXemFTKKNdw3H8aysne3otZtvfA927Utj",
  "key25": "2HYLig5YarvzrFbCLcYCUhibpNRbs7MToxFTRu5cXLQBrh5WLtfviP3e4Tp3jjpGSDdv3LLQy4RMVmxhKLwa4cRX",
  "key26": "4eVKsXr9JJPPEVBFG3yJdsqN4Cxdsosdn1TAtbTSD24tYTQ2hWc2j25mBZ6WpVqtx4LJBwwz2WVvqdfLBdpv6QmH",
  "key27": "3CrjK7jrLWahq5L1ypWyyFcevsfmUZRDn7JA96eakzgWvLTh37uiKovzMFdgHNf5Npjt6dzpXZZnBUp8Uw25ru9H",
  "key28": "3sqFtQZYFiyUJTDVPX4kSXSD6KgLS2krNTor7YyK6N6VphG91bcHvZ9KyDnWv4mAEvNkYMijurazbZkSekGYrQnu",
  "key29": "3Mrdud9zMo2J8ezbK9Dp6wPtL1BW8wqDMxTxRDc5vEoBQr2NHWuunYqbtdgp8qZTyVniZHcrBA9ErzixZ1SLiEeT",
  "key30": "3xJDYRmtncUEHwMvKM2QSZBxwSU3DTGoXdB9yLYqi54j8QPoSNdtRfAn6ayztF59cpU8TmZbZCfPYk4cJpvt4m6p",
  "key31": "3kvzoUvaqQ3RQynJg5vQm5fbf1EMC9KKzbw1e3qY4jAAciHEe79MSktuAx8G8iF2MujMVFTnmM6AG7abowxThj8d",
  "key32": "2M3vad26o9cWkrmR3DdFAfWvGz96EymovCqQom3pdcP5n6R4Qe6Ne1ryaLd9SiZQM2oQC9u3cr7R5cxxjnoZzRDv",
  "key33": "WmT3x735xcJhg8c7as8zhkXbxP6mYzvdVJo26seaqDgVxqR3F8CJvySyWd7mRCDgTYGmZLUgc6pgYLiRHitsJip",
  "key34": "5j7TXFChymxbVYkadhmSF4hUPNVA15JZTCzrKYn9BszVZ488uSAbKgdsbya3Hnb2sbqpE7Stabdijsi8EaDCQjeJ",
  "key35": "PaNiDqfkipcCadsUVkMHX4hXjv1rhPvhEyXJ553MFScuEHiwdWcuvM4moCugqwZByKPn1HZUGqU9uEKCx4oQfMc",
  "key36": "2ZMSswvGCnnNAXz39XcdtrciRe9THQoTEUJYSfAM5po7erDRAhki5UqWHRjEYiUzNhHz1a6YFyAjmLW1YF1FgGMQ",
  "key37": "55D3jmn6xLZX78mahjQZeo2HZUFhs1RgtuRb8hFLQoUuKHnv4Ckgm1tU47KH8Pdo39YAEt7tpgwR8sq6hFqbz6aj",
  "key38": "3yRMKVwsJaugqC5dbo6vqUFL1bMSDpwwGDdo2CRG7QzMjCdpwT7Yp3RaHURufRUxRRH51uX7n2EE4bWS8pbEYzZc",
  "key39": "7LaZ3RCTYtfcK53FT7kG2fywVFRQvfbSHVriA3nJeorsEq4o7HYj976KTVrYngxiMYUkWsHqX95UaSsKyy87Pim",
  "key40": "5BzxgFRkThxJgzQuNp8LbBQjGG8ZpYGDVPRWD6FozT3VYrW94fpWrE6Zd4i5hD5qfL7zcrYKv5Gc6ShN2zLgUek4",
  "key41": "5DguZtxhqnYaeHdBJzycH9QLrEG9MP7u5G9LnSaeZaHmMTFAtQ8m2UW3kEvncV4dLxDARVhcTN9CePrGKg3gX9st",
  "key42": "2jfi5g1c3vRGjRrAQAbuuhFbRgBg3yRWvvNYN9ssT6Lt5udPTz3tAC38m6oJbijDEn8FNc4HQj15Ln16AqNH9qdT",
  "key43": "5haFpNwrKRuGQfYS5cXkx1urkx1FC5BV8HptQu93fb4icaCtoknJvY2paKABvaqLqgYZRyyzH7tR2p3qJmm7YNf6",
  "key44": "4cbET7TzSAxQjSYUD9XG2xhFnS7Lgs6B45vksoTXThpoZWheJSn2Q7fJRqLrcGuEyJAZ66FttG8cQR2hW31F5WUJ",
  "key45": "34rZ8F7dmjQ8v6ikzBRtgzQYvaxW1YkP1NvFD67QBGYjFKXKByHEge8GkjEsuQbFifbRvyrU9kmodJXSQAn7eVCr",
  "key46": "4CV9tqcLJh9rG47Q3ps23AsSfCnKEt3gk2z9waf7Q1tuTFSST8tZZDLTEQZa8oBdK8D5Typkcr31Vsm5H4bAdbif",
  "key47": "5AHFPda35F9MgqxAQVZTzUeLhgucFD5oyWcti5VZ6yRLX6mTi1r2m1JhafBQ9tzE8UM2DGehbGuzY16BhTpmZGTj"
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
