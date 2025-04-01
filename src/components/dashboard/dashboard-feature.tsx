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
    "67rTjJw9qbda7A55iwfr1bbfm4SMGtjbBE1kvs3HuL1dL1u1wrsmRGZ1sm6eTHauQ5YfMceXEXZrvPn417n4Kziy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "stTaPrXkFwbdQhTdE6QU2MEza7RfCFLTdMdVjGKSoPq1fwSmM6F1DDPkFu1oM1AU79GxRhv85Kmm5pHuJzheLxz",
  "key1": "3NWgd7CvtQBKWt66DdL6YPHEtxYbec5xz5KriVYWkTDk37seE9E4zp3TofDb2M3P3KPTYvYjxi3vhBBBerUpcxPq",
  "key2": "2Pyb9TgHnwp3CfziUxiKcbnxvxnmrdPdYngUUbRVVQwA7BNj4EWGGMSzyfxaQkxAwZrFzKkJpUuvhSXRT4G5Ts1h",
  "key3": "F5YtHFxZJYdvyMnN46XLRJSGb86NWnobMx2vQMYRhCpL4YvEGK8Myc25RTNsAvkUNWwaRi9Txqr3Gjco99van8k",
  "key4": "MsQ4NZc5BnF7DbbZhzTgSjh8HXU8JzHZLzN3zMo5Z5zRcXMi6iKyVLKQGsnUkz4ZV9Tf4gkwsKjgutdiZ72YBAR",
  "key5": "5YiWK91cfxaRbHTQ1r5WP5cpgnEySXzyxxyeeHEP7QsAdodxDzuqL8nyFnNnDWPCAVDrGtUBFgbQv4tmgGS5Y5wT",
  "key6": "3sPwdXenF3NubmLfjVruptyLA22k2oCihDHufTYYqStqJZ7faJ2rtdb3qZBBBNxAHSfcqv286dFkFEiv4H5qTHM2",
  "key7": "2Hx1vmSM3UXnJX7Ug5NMeQSFMUu8FjPK43ybdc8DVgQj6fX6XJ39yYkQxazauWTRxCHtBGEj5JFzVEhk2ETBFNme",
  "key8": "4s81D4rNXD1TEZk4cMmFhoLN8dyLYNPp9LKe8EP7zq9oAyqURgPudVTFXBSTVwqtcSpqR3xb1yk66dGsL7oRAh7A",
  "key9": "5XP9rgymRruQ6KmbaAykHYdWC5NxqGHGEmrna9Ld42pS1PvAcHggXr24PiXckEVmmGnXtDA5kZJuFu8XdxpvCh2W",
  "key10": "47ruxFLEEgcBNXLB9Cc3qpXk3MepASxwHP8WnjJmhFzF6Kzn5Dy3fWweAhLYZANSXNH9zboDep9p47k2iqPEHLGu",
  "key11": "5ozZe62P4QFXv715DaqshiCbLiB7T9zqjXBVSDiqEcsc7y1EJjM1cHGVw13kysyYb1uzxdEwBT3uS43mesRWmDHe",
  "key12": "PWoqYkX9KHs8MsG1Y113Qm8dXEwgWjkn297kggb3PPvcXuRS84Sma3qUHu15gyCResC1va45i55TtZTtWpZgkm4",
  "key13": "2HdoS4GRofvxBSpEYVkdmHHoWCNh7EGXCwxsUkcuHEXQjj25Ts5GE9BQGjFo6rNfLKyWMDSknJj43mjb9FuRN62a",
  "key14": "2CbsKaVst3i1syLWUdhD9mJeXfJbodbuu1XoL5pkd4GAaAtBQ5UWtPfwBm7YF3zAVv6upHgN6cPHEcUjpHmpfEBJ",
  "key15": "LdvMkwqfRFptkihUQMWU3s3gFwxG8iLEJF8dahwbjj2gfhPpw3PpDazsZyD3fSmGhcBnN794w511EtMFeCNqPrS",
  "key16": "3gn3xSVEwxxwHP4hV9b46eLbfWWLNhg5NLULkfpzK15Mvm4dUzMCPg5LQvJjcpE2FUahrNjyCU3ZNhEZ3fYDPvVT",
  "key17": "2JmCs77xpK7hCKwTwRbHGe6kiLQLV3BjQ3h9QraB859jcBThp5dbSoLpDAZTbPXLWpzYKJVQHFvNypnn6Ti7sSKm",
  "key18": "3SLpMsDX3522jxSapsRcT3NWELkauyu45CmBvCt8Wxax7uLdqbNncvWZvimbxaUd6vK9xTHfMijUc9jqG31r93Cz",
  "key19": "QeARvC9QHAMmXoYAjcnF56ggbf3DCNf7pMCYMcNGjG8eTTEG6axA5SuE4raz7gbRxCv4bkrfAfpARuAndYkqhc8",
  "key20": "2V6rmbUqQsuRmV6upxUcc9GZ9c5ewhtxoD73hJVJi9CpSYhr3Vxi7aRCSxKAjYXv82GAJAvdnGZjnvZN9kLofo6y",
  "key21": "5rfquFYEfe4MsXKek2isQf9tU3SoMcqfa1Z4zHqYuhFp1jBvi6TL7KAppSF7nZAPRvCARYYqRLNPqbeuiLaSiJsX",
  "key22": "Nw9YS7zoRQd9zafzdShnKLKQ1RPi3y8ukmxR4e1EpumaRvSpo4243Y6Zg6dmZ2hUTgYamhLic7M9wmyVL63Y78V",
  "key23": "2RascynXmmo2XnJzAAdxPR62REhTCyZqNZZ4EJ8yZXRjYUZJY7vzqqz1ZiRxBEY34eR2Zp8a8B1Eq6NG8JcKMQum",
  "key24": "2xvSzgr3Vo7n1NzsPBhVKQoXE6CY5gwjvdXZp98XFoSp5ATZhxTcjSSabU7c4MG28UobpKedovmLkgVWz55srXXN",
  "key25": "vXaqyzv3oawNvNYTCe8Rt3C3XZQ6AY2BDEgsMQE7BEWwiAWPE19spaUeu73z4ryT6Vy5zHKikjgmJKZkqTKLvC2",
  "key26": "597wNApRpyf9x9DM1PH3A372DsSeEX33suGSFKYcvLmN2W4A8mfSbopeZVapLLh8zE8j7sqVBbb5sj1kx7G1icha",
  "key27": "54SFppwampT5jeSwrcCJi3QyX9sNkVvp9fMt94VYz93TuXtoKRWpv7v6FJMKrfL8Mii7YQPtQNYzRaAAjGSQRQUz",
  "key28": "4ZC2wF8zmR1umAbySFXBTpFX3ornLTS8tohJjJiUPmFWo4CDGaQtNRrnwJ7z9LUSCKMmyDXhCkkA7VrMa5SpYQmQ",
  "key29": "27qAp7p7W6ntcoc3FziNtXa94w491fY3MXAcS7Rxxnqw8HiHv9Uj31Pefx9raWKBCKQiTMqvbbaBmKUzV3fwkyMP",
  "key30": "WD6RRZHn1KTyckJoPyxLdoxivNTzt8mmmkVMsz9g6GK62PtMdMjaFzxmSeBYniE89y6eJnk1DtsMCeJ8W4am7tX",
  "key31": "whwYgKTFxeBwes1St9WcPAKTaUsePpaifoJVKhqms8VQDa7A9TXXvTt9HcWZ7fUJz5fWBUJe5wAJVNo24MMct8m",
  "key32": "3FEcDu9mLP15H8EbTgwEedEoEFEiuBLpDkNBum16i3Xi6HTsYCDxQ3qwiYgSqaKm1VoqyhJ6DBFApZhRaGmWk22j"
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
