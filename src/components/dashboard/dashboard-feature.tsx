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
    "5FgbzcToRPWdVFuwLo8pt34pQR52Uc4kYNMAXq4KfffaQdHAHsBvpjyqTu17Goks8uZNFAFXjvdWCLM42JX4t5DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zu14kYRCYcPzY1mcweyPsEdS2jNyt4uruSVevkmfmAGPz9VFdyKTsX2uTqGKgH4biYKZnNrdXZM4VnTHRaNKFaz",
  "key1": "3v2WWw1mF3G795PDLLQCpPDKovdvMTAEna9cMdUh4KbJns87mMz84x1cdPb5y34qvY2EvdE5pqMkrEQScXL4Gm4o",
  "key2": "4pBgphvCBCX8rGAhoEUUkkv7829bJ6xQG7JMpJLmroMSLf54zSsfy4Ps6ZxBSdWzzxifgR5fdD563Z1TjJFxejCV",
  "key3": "Jsag8s4AH9fEEUxqfWSCHVNNFXSaWz3yYwGREGCXtvB6KSevWUkEShHiJ5HLjpARmSX2sd7igWD86qhgwZ4Z3VU",
  "key4": "36MLzgMwmWQN8EWo69gxPYkvnrD4f44AyeMyCr1Z8k1oBtxeNkpXHU3snKgRmk3769WdSXbJjHmSHpuQ3ukPSfcT",
  "key5": "WRiZXxAJmqnXz5aCBtJ1eWD7ZPY2uHeL2qCdbSoNgGy55ouA1eg92BzAd2qqDuU9bDqdiYEXBfJyw5pBnhJutbd",
  "key6": "5QUwsCBaJv798WHCpJ8nyWjsWGiK8qaf9MNMwYFgn1egGQo8CW6WENHM58mw63hpcke6dgVULE5YNzfkHycX3PfB",
  "key7": "i4psqyCwQ4N6wueTdEu6tiuSgCenNqGPeDg7y4Xmhn9hXfkLeZDr3KN35nDWMLyKXQMuEAejJTedgmiiyiErp7s",
  "key8": "5ngQNubygV59vPEQrxpVbQzGURyg2hwJJezS6WMzmqbWimyshcryhSqRtBgKD6cpCpiLSyXD2oABz8SejWDygmwD",
  "key9": "fq6ouPwEiiyPQoCBoxPa9JeJbtg6bLnHCyGnnR724zejP9mjufdsEUbfAH2NT5tpcAhdDKXDF4pJDVREUWmg6dS",
  "key10": "23s6Jo7G2kowhfRe6exwExXPFqEYiVKFhazDpmQhBu9pfZFxSKi4UW5b74NbTYVE8miXY9ByfdCt3Tk75MNLfWXz",
  "key11": "5dGVd1KfeRVMCSVuxmqvV6zjygBHmT858EYCdrqeFEpumnZh2xubEifA2Yh8ao6Bdfdtx6Racu2cgA9bvd1ZT8SR",
  "key12": "3HcNgq8NzBo8ZQPQLv782d56vs8GANiuE67nRK86qBodYtQ55W7do61Qx1MjExzwtdJcBjfR6GWkAFBo55NqxnwU",
  "key13": "2WGDsKCjM8btxvKTNX2MsT34sMbrnEiA4tx3u4tby1SxL9wnFrHis9xpAoqAyYhi6SBuuAkacaWc2zEvdHTcDQsw",
  "key14": "4omDH2Z8fqHq3sog5YAw2QobSNtfuGYwUE1ubNqUDVyFfMs7ELu7AWJSzEHGzVMmJJ6eWkPX56rTHegyWc4iqxXd",
  "key15": "5Wawdy133dHWnEE4dcD44iZJWR5dq21ps1cdvXQhf4VMzwcAKAYghN3QcNF2kRkj5ukGJtsbCsc14FS75hyADPpS",
  "key16": "5q2qVtYUSQ5RnskMDY86dDjbZBGxTEXf2AU4jEsXJf3BVYcPy6zs2DDDGQuiGcbZvxtG2TRNzTW2c5BV5PxPjrvn",
  "key17": "5NvkHEQ1YMzU7ztTy4DUDot8mk3uEHg9ppCYvyAQWauo3tRud4duu7thL5Xm3H7LUuGDnwF36zofkucCeKNvFW9P",
  "key18": "4D5BupB8SqPT5hUY24B17hYN57g2RMKQUTVaBSBjGeFNAZeHCri7AnKE5bSv5ZWttcZNgtHj94j3M8HoW7J64fpG",
  "key19": "3ahUzJpcrBGfFYMi8Kok6HA3c3HJzdUXEAdp96nEMKc8ZUcxMqLt7i2sPxiB9p2FDyRWyjkmYjc1dDhzpRyVL7Xr",
  "key20": "5yBep3jTyEG2XLjZVAqHviQrBCL3MFaWFYujfshJdiBjk7CXaYRUumLfs133wVoYpowMnSx6KboPgksfQ71YjU29",
  "key21": "2P3rKaM3Ma27G7HbAntXg4mbGiyVVBc79uXATA7PbK6b8eCB7neP5wQVKe12HuQCNbXDfifEaVoTy8UaYnqZSrCj",
  "key22": "3tTmDrUBx3nVhQKhb1mHu2K4WXTEmRog1JdnYm7HCwZqU6ycWcTv6VmHYjzv6ahPvPicx8PEYDg2YZfGfLDJRbn4",
  "key23": "45ofALAZ5iyHtkttMEe6vnASePsd5YQiX2QZzihCXvjQEqufCjNawMe3fsrCmeFnkXHWbsfzQkkraGnkPuPtsKXS",
  "key24": "3pCJXgvVuuyrdNbVhDniX6PDBDh9aTFd36UdzoKL4aPt5nc7ZM6xDvxZvWkUuyifH1fWiCVohWbrGzkcP3xafJZu",
  "key25": "eS9VRw78HBWgTT7xysWgreiquiua38wdTbFWqiwahJp3Nd4BkBWXd8r19Foh7zzMLUdGTUj5twFUgPi355J41Sy",
  "key26": "eCh2KtAzZmaZR97BrY8wCht9sBNSpE9GqKtM2xp8zm6tCFFGz3JUvFxyNSWrFTtFKAKmJFtxSEBvwevB9yXtgQh",
  "key27": "61bZw6SW4DyGQsBiNQtofHQrAauV9tzE5XS2uq1H25qd1C6vi3zdZ7xkap7pjdMVZPaAbaUYRodvRhNpgb9VVm9T",
  "key28": "5PdUbQemvqGAJdCVNQ4c3UA25bg5rBm8rzBu3AYRCTnmqVNeWqG5gSzUngJ15ThXMoPX4jptQ7hPDs38RrPs197B",
  "key29": "3pBYzuQuKNG34AMpnZpZz8dQ8d4uAejBhFvsrntir5ad2jpgiLsbUrd7wXRnmcw5DLZmz6ZLisYEFExytJjPB2w2",
  "key30": "5dSvQriMkqTqcrxpu674WQGfedHL4wYzo4D1pmPXQ1oCV7j8xotm1AVzxSw7pgBFpfFG75pWB1d7R9zB7kkmRpUE",
  "key31": "EYpApXWewy6yPCTALXEjZDN4nVBNK3Rr4chfh36eoTF8Bkvt4gHaGwTd75ySv3pFERXqrar3ExMcf6w14WxvjLV",
  "key32": "5Zx44q8eynKXSKBaAD9PuWg7DSb2hWhjZv4595s1NYLT5HzoS7TcQmu5rJfH3opybCQBYzkraEBva6nip3Ph8E6Q",
  "key33": "4DBLA25c2SEyfpAfGgtqpeALDW3hinhAAJr5SMWD3HG4QxUkWVrai5bASME1zNXEnrwpDRTaAdKJ7XhB9KQaCgVZ",
  "key34": "g9uMJaALGU1wMkVDcjwbpJk7ApTUAZBRGGJZmURwKWWsDict8iujD7QVmWnwW8XfNGoxxTciZZ6dacaoXNZLFSn",
  "key35": "3r6xzMQmzCkPXLRgjtB9ERco8AsVKmrsufwQaDQRUizJEw2k2wBr9cNdQQXpkjFcbY4TFNFDwdxdeRBTKvj3ikeJ",
  "key36": "3Kx7kfwQSiCgdeppDrf2LUa2EkNPP9y6xpK13whtn2rAPoxbMQLAbjPWvrH8TMjNVunzXtLqicZ1PhWKjMptKM4T",
  "key37": "5tXuXztsaFSNqRLpkSZ2dS1e6uJvUDcWDHp45NGWVfGR3fDyzh1mT4YYdTafZwfNJWZj4nMZ5RGDMhw3LTs5h8oe",
  "key38": "eUmgToa6a3P8L1YSwbhERgKeMQwXBr3aPJcy6ABki8PtmL6F6MsWbQU5GZBEzQPpjFNh9bdmr5ZKkNkCCGvasYj",
  "key39": "58hktcF4s4rjKJbXTFLxEhr3e6EYFvhMYsv4bNXH6pNAiAkxSgYfB2K3rBXvemNWnMbXohbhiiQaHq4MUnR3icXX",
  "key40": "61sXkTjYEsKbgLD6Bv1Ap6GuG31XLsNedBSDnsa7bGyhwBVbpZxJHpUcwR5YLZAfuecyvL6HjakbTJCkyqeyhmTV",
  "key41": "4TupeDDvp8cbJqzPA3beiWUBozh7F1jYrsJQH3dWF8Jws1SFbJCK6ZvTghrUsCVeBuQ8fhZyTjAWqh8JnGJWfAXr",
  "key42": "36ggRZamygBTYtQb3ZyfhTSrFqwJoCACy6RwKQdKkEbFaxJosY8z7od4zAG6AHqe53yVELUBxZ9CcwZtRDM5oaQ6"
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
