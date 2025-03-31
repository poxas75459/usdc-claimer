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
    "Fjz5ztiFtEPn4KeAPxJAUSX1MjZBxseNwaZkkEVGmpAvRwcGUvLnZTfvLPCE5EW5kNFAtmkjWfZYiHndJuwDA2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RusbJCAsH1z63fuemRek1KuwV7cb9WrQRfzgMbu2gJqzFG4xJYjznaUztsoAuhSMBu2Y6cM1KTmm6EzL5Xr2GYK",
  "key1": "573U17X9FNu7bniLsFZofHTHKiNH35iGbjHFacUtQnj84ZBzsW8Wgaj8Ju8gtYPyiKmvVCUUSuipQ6iGM2YbJvS8",
  "key2": "2nK41HKbuMkbhQHSGGFR2hvMVBoqBrdUHLZ4tcrWy2j9Xc7wSofmHTppCoogx8TPqaRzmfeCWRLGgX2tdXH1y8bY",
  "key3": "ZKzw5qW8GQF6N7Ejqs7hPLaQRNW23Q9XbQDpCrxRBtDwTaXjmTje7LtxFD8i4HDgiK8TaE4pp896Fnm5XUWcreE",
  "key4": "2JtTsd9EhoBKYCW4FY8bZH4GnKTK2shsAkugaGb3Kzeuh3QGB27rNAkFghxuwCsC9RtfR6Rd4cboHq7e7UAx1jQc",
  "key5": "4TNobUnKznK4MaQp7sNjwGusS2JvUn1birqjW1EEkKXeTS4bAM1gZGKL4SMz8xqVBAbeA8T9HRBeek8m7rvrSVwf",
  "key6": "4eP9oNKfK2ok78imdyBiqYJEDhUSZyPM7zQXB4bMm2K5ZTRtGhQ2RKpMQcNogm3PRiHa5DLWo9vZpMt6Dt3NQdSX",
  "key7": "muEcS5Hcxeb7FnZRTVspQdAZATFSaSg7Jy88qnJwNJ3TaJ4DjMzGa5oVSpBCoVqkdSt8cLsdLpUHUjarQDZAPVj",
  "key8": "3ZXsdkq4rkuEFTXopz36n2hz6wGB3jCqKW17XiWXUwZkfPemAgac9SSvZsQhuzb43PW4RJoRZu4yMHjrocPeZuE8",
  "key9": "5b1AukmSnQvQk4FnQkviyEyqwfEwm8poZc9ZH1NRU2gjPk8hccHiCQ6h31fQShVgP5ZiMzj6tPpbMrAzKygr6GqF",
  "key10": "62Ubiwyib9ZsU1PF56HsZ7SgB1Lpkq7QTpWRjTjbi3ayY8BSBY59SRwnZbKxMQq8ikQLKrW5s8DMTnjSkX34A8LH",
  "key11": "2JMnvofBCw55SkiQwEADmzg1iGWZgECEUjaaTKho2s6JcXSsQ8iGZLTb1j3ciru5MSHQ4ccLPYtjkxp5gxjU38kC",
  "key12": "51eFpLXDBu1WwyoYwbnkLXtTJLPMNEEJiDbNhM3fZjpKH6pQhHVg3XsEdo5q8wg9osgZ9EU5iVQyujpWWhUrvuLX",
  "key13": "4wcrMxbvo4rrSnfvjgbBEYTn1qSGDCGvLveArHEHfeAiYkDtP5FfYM2PBxhKT1DHXwrJppkk7uueTVJyES9F8Zeq",
  "key14": "23q6f1tWsGS4th5ZCvHii2tjBiXZ9sQeHFDQxsmJhsuopajiPDfSDXSxDGHQchBET3XWarSb38AKZ7hRcMKyyQ56",
  "key15": "4aYjQQrZhvjD6L9Bn9poQ7ieBcssDY28icAT7Tzic1tPaHVpYiqF4LWFxY1WudiF8JAMEmq92v1TZMJJyqgEW377",
  "key16": "2Tej7QopAsvsGzoLS1eWVNEZgUUKnQB8EVhD3srFiJGPo5GwmhQ1WCvKEAWBPkv9KqXdu4XcRtyEQ84gTPz1nxHp",
  "key17": "5T8NHpD39cryeKDvytPYsb3rXShQE4iwUCwwkY2xNhBpAYxBn734AvDrxv1vH1AQ3hj2bbu2QBc3zexUGtee4C9E",
  "key18": "4cwX31EdVRGoBiCyWmb2G7PC4iLA1ZwKANyUH3e8FHXmam9p3KJ2ayFkCMt3tp9cCERokRqzfnYe9VQLU4GXnRVy",
  "key19": "4KoV4LiZEymLiy9fw1sM7RiZ7Y1wagZnz4ocBuVsoWuk7ZFr8MNnjpM4cQHmxPznWy2FzjZLPxTqgFucGvGYZZu8",
  "key20": "28J8HTsVJCJKmy7zYVuBRtXSS9MM253H9vD3Gimcvd6F4DM9ubnNc7zXTPXrxTMuBaAjh2nX5YjBYDrgLBYpAgp5",
  "key21": "5Wof261w8nLWLSx2uVhuKn22wsuoqt2EbF3C6gjK73pojCthmSXPb29kPDhYpudaAu7T95kDnmJz7qH4Nqc1MhCT",
  "key22": "2cCdxdQKd339cM7AK6o97HWgvuaCt4Q9CX2hZcpqiQZhusHK8pdTfMnEkAJDUP3bLxiD9qjaeh4cGdRTwYhtJ2DL",
  "key23": "5RqoCygjhMjHVMx8Vi4iA8CzifLiWeAYcHQZ463aAjnRSU7MZcswzjnpUtbfntFPjz32jL5Fo4SjSwb2hkpAtLaG",
  "key24": "5YLw3Lzfug1T4tSWiHp2oD4rTb5PbXDXCqU9Qb5Lwxc7HkY45RkMAEzutWXr313XgSArZbaHTrmVj53jWHXgzFaT",
  "key25": "URyRNz3TPQGSMDaeM43BQDydftKx2QPErjqQoLTvCLDGT2FibXPF6mEdVuWY2enzxb6qbyKpNMMzqHdqErQvrHW",
  "key26": "2U5RKHj4ZD4zKq4QBPwrKNTosmrYY17WVNGExTJyW2V2ijXkQL6U4aGbLKYnRD3nmaCpQbe6Yp95avMMNJvEQN3k",
  "key27": "3XDCutrMXpiU2jwd15SQfyibxjDhZkKXngJZfUa2dh2MjvVPJaEiConZxrEfNgeBp8M2mkXDoJbJWL4WXugebbHd",
  "key28": "61ZLpBSmZEgLnudCXr5KUF6u9jbWvsaYw5ee3HirVTLVkkttPFFjnx27Hka4yiabSxZG9ucHsjtVv2XfYhxmjV1b",
  "key29": "b2mJZJjew3zh6Qq1gAoioHMmhRRT76gL72iim59WKyU4VQSdc3f3M8jMTRqBkTa4S6EfDWW9o838Lce7VTjhQBb",
  "key30": "2rAmYHbDrWbQJhJAGSiURo3WMH6aLFBxRy4maEJ9p8MAv134mtgMe2dF6JS1ETk87NDxEBbKQuGyUtAKwiVCXpWE",
  "key31": "64RjPULvnZZeHN8EtcA1hV7tvAsKbKAdfF6yi7bLq7jxSVRQrLMZoKUkjMX8NWbzr73Y3n5FjdhWEZGntPytEtvh",
  "key32": "45u7QseAPuWsannQh6eEgfaxeMwAHUaxQ76VfFBPk157XXsdaYjiymEZuRvc8AJQMYiuCEyyeN4s8cZv3NPPhG7F",
  "key33": "2hdKEzF52M2vLYd9cx411p5EFD24NGUrmY98frTEShoYzVW5MFJ5duH5AWSWjJSJbPcL7BFk7vqLuWw9Q77FKExe",
  "key34": "65wG4mwiPqETeAdiD7hfWryKmn7jDz6chxPHXhFsHWk4jsTT3iBykPDk3UxXMpQTEjF3zpL1Wj6Xa7mstqUzscPD",
  "key35": "4pUH5WCHe5ZDqUQUEj9j2zJ5jUdax3oxrsiTWUxevZHgnLJhcYgoptk4rFJgx55gEXsXxuMfQSaeeTcEA7ka6DAV",
  "key36": "5DRCKyyuXJAUoaqeu8LQncpXZ9JQWiMD3BLr9NHiGKxk7ytsbPGDLd93SHKMb7uWwwMEMHCBwLA6oKyurgiwsSyK",
  "key37": "NSQRk3JeWwENuZ1zhVdEDzLEXjFrKagNxWRi8B92TuCApvenrT68MJDQqRHEQq5m4BR4xB2MgrLRf6iwBd6LdXY",
  "key38": "3X53EFeNAapGPvyTGdgZ6Dy5KZyHYCRKiwViK4AcskLn5ChoX5NY7GvpkSSxUWujKS4KkvroCswAs1bz9LPP7k52",
  "key39": "2XdBzdFcakA1P6EVhz4rrUnQ8hbVZexkuyxs8M5FpMbuvKrHNiHC7qPvyn4HtFDyZeAJknuoRufxzmf8xexuWuPL",
  "key40": "38QUvnErYiWTMzeo9r4sMhNd7gKcLymgpGVVZ8iLR5gfpBqHLL3ipR2UAvuijcX3tHhsHEnUrW19XJ4Q6wBg7JPs",
  "key41": "3iH3EoGxh5CSQq5zTccy7J2a6QwXpLRHKd1NxT8mnjnDdyGJjdwLGFBXhg1bqXyf5Yzni7hrnEp6kJYUsD6uoz6K",
  "key42": "5ZJVhFyTRS8dZ6vUJhuCpiL5Mg1YLQHvj2fHB3kKxyxoBXxof1jyAvr2ishWr7YyzRyvpJDouAzBUqrnpv7bWGP2",
  "key43": "2A33UAAjL1dr6BuuvsTB1X2GM67kidzccD9ZiTueJq7yEHCBTxvKCrvhm6aqGum2GAZfyM7GPLJjYSy9eqX7kmgc",
  "key44": "4aV1CwCjqj5ABjgZ9JeiYhVq9Wi9WZKEc1x2tdbYqjjaFp4UKXELA8ymqzWsFogbWbmgX2NdGP54qaEUURZ8Msat",
  "key45": "2DQDvGNfesTDr1nAPGxdDcV5tn2YiHE7AJr2L64QaCbNDjoKDtGiPV4RzS6ZcKnzVzAPGtTuTZLymLzfePmhyCcN"
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
