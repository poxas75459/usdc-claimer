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
    "47GqnNMa8poQZhHccarP7gDA6TdeAXVXq2rf6s9ui8ud6auMzVcHoHGBPPUJXSeNsQHSHhDrvEEcJhgsaktaTpaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHDUYgVEApPLxRDM3U9Cmt7pjh7QBXWkjS3En6QuQYKXQvDw3MjjSRvV2d543PNLEVdCerDUa8YfS2LeqG2zvVx",
  "key1": "TZS5kkEwXWVPkNcJmZnhsATW1QP6Xn6xuxB1C5RCFjqDhgc1tQ6uMaZyubgJuzRzdniftD4T9bhw4eih1f8QWsS",
  "key2": "5yW2JYVnjCGjLuuinCykWhkCDbKsCjksEXzKxhdMudSzyf1G7xr5569F4b3xXDZnxR1pwiVhnbd7SeiBi9JXp7ns",
  "key3": "BwTzNuUQE18vGuCSPeu1tHKkTqpQDjGc8CWCZA1w6FPuc8tjBLCMeUJauiEVTyTx4s7N2vuySaReK332bAFKVU6",
  "key4": "446tFXx2hZuHe7pjKRA5HL3NKCGY5G8nS6hbCZgUy8gS4tgu2ihQXKit8QvkgrQnkvL3NeXk2YAMg6HZU5MdKBSZ",
  "key5": "4h9XbmuimcXW5dXbChKmNKhNg8txqtt1Joip1UjghJXH57JSeyqeS2riCw74ZNqxZJfiHhmZH5xf8qMBo1P8VJwY",
  "key6": "5QHotmdYR1CB9V1ihzXjbWt7cpCS3cwYnwq94vbqsGvU8a8iVSU3b4M3QvTSvVCjpFJDJytZAAEqvowRTqLcT8qp",
  "key7": "utzjtmNxsrLaSXmQpeuHbM69vNM2vjmtdtHVmq3z4eRsVXD6m22pESks371nTg368fRA3fUU8JCMSiq1wxS7f8s",
  "key8": "5VsBjGjGPbgowNsafXTQLpaDYXKFJCbSHkquVDrgCrk6Uq9XCz3EW6n4j5D29whmZhtFBcMqMxNMZQf1iyddMa4b",
  "key9": "4HL9QFQJk5DPqq2qBR8NPnQKATsrYDv9qf7quVnGn4uX8ytPY1scdFpr3HsNDL2oRRY5WPTxNjdshMhWBX5qrC39",
  "key10": "231NvrJHv2ttXFPKCPHyAueLYabUEgdaApZoSwKejcfZqub8CrP8M4ynUDUFoXgpF49no1snQSniCDgDbCCorLp6",
  "key11": "4YTuQ7UvKgSeetQGHRS9nfHkQozi45xxH3m4TyX5JsUNYsJiPC4YNzmJspk3Hc6vYuMwrQareHEP3p4xPZzHBQT5",
  "key12": "JSRB8Ho7NktsuCGLq83iVCebCjN2BBy93DXU1DQ42JaDLmsNKFJr6Pq9SAA6c5JAFk3WuGc6Ah5D7hmmNZgqEgm",
  "key13": "4wrYKgUZaXCuVahuHMW2UEPtVLBzH2VahVvBZKPViUHLezBrntk9NkGu6EcM7tMrKQU65uSUoh2hvtcBrP4tC43m",
  "key14": "4qjRhYftHbWHVBdX4JkiBYPB2dpZUXmJj2YmEBMuyMQXXFp6aAonAMGcHnqiMXPrhFpMvgWWEweALccwRNdVdWiL",
  "key15": "5F99o7Hazvg5CJ3wcS4Xq4rT6JHdyiHdT85QPneS7mmjrudZ6shCLGZDuq9qN4wAnFrtCZ6huhaeKEgcHMPFX4m7",
  "key16": "2RDQQYMHNgZWEEM31pDZNL2BP6LWqqbndLpD4RMhj8JjZvTz9dJoRNUqwJtYddei58uGS71fn2uCRq1SQWcDh6cr",
  "key17": "4SQnzcEFCbHbeU1kaLxU3ym2u1EtTNgpD1nv3vp1S7F9h78fd2ZCPgx33tcELVoTqat5hWJ1cfBRx2gP6jcc6LQD",
  "key18": "3U5SVmVeuod2NGE198p4pK4jzLLvTuAT5fNCX4Ym43HC6HVFWCvbQD6u2Db13mptEr9ssLb13w253MNXCSbzc1hH",
  "key19": "4SQYWYiqL8jJYxcyjvAPktZ6HKKn3zyETokJAgj6czYqBhT6zJGSoRTZoddiDQR3qnYxjAoJRJEtRvFbiuRS49gF",
  "key20": "5NT1UCZGzrfpoWqtfDXiqYPzL8gsDfKMwbgDJ9SaM17b7NDoCMfFN5M8uUc6kcHFQm2EMd5tJGBSBKcHGYcZ9Zig",
  "key21": "3KEbdUmc8mLHmn4HjCYXkzZVkLF5yG2FmU957c1b38HvLdJVBQmLKqGGe9kKngPGfjTN2Gzd2n78G6gSuFATFSvF",
  "key22": "4KM2boonFRsEsgRi85iEQ5VqaYkWwyB4arF3CtoZuCvnbSQcJjY6YYGiPgU2DtoEDEh5naRVrSo9H313P61TzFvF",
  "key23": "2gSUJkVLuhAkm1a821fpkxXMV25dz7Xevko5rZ4pgCnDB299PNaPPCGSRWvAHnPF43RydJU6KmP7mEuMFUfw1SZC",
  "key24": "KNoj4gjEaYkBqeWdfc5yDy1gYnXRui5pD5yA7kL3wBzSWC9MT5rfxWdDBqCbLJsxA19JiJBoyFwudwvgfLE2EUJ",
  "key25": "4ckhYWBsMoL2PuFJhGzFN7cH2gFVFkfJPhCDTxWN3vkHcb2Nmd2J6bLiEJHrWVUxsYBN9vfPihXrx734er4VCJn8",
  "key26": "3QVemD7bN7sMxe3dgBTLNyjd7phhUyDFuDmrrEpWyxvWnfugHYta4tg4XrD6Fgq4nej1HE9QcXvtVdxxQ2qanCAu",
  "key27": "61p5JytGPJw8xFnTs5pxChPbPotDVTxgdRAYD7rmriDY23JvbJxvpbczVpQe11LSzsfHP93wfpsGRQEFWnUrMv9d",
  "key28": "4yoswrTGTfKzKM6wV7L1G9HSBrccxSZXRi8ZBx122SjKU7y5J4UsEEpueMCLgawz4pyxspUqMqf2dmrbpSoVmxGW",
  "key29": "2y6H7ESJknARwRboQW7uvUtjfHEvbrprsUCRQ1fF8iJpyLDYBcyrvZC2uHKQsCR948mpy4ofB5qvJwbJpJisepcT",
  "key30": "2G35yjKGW9weVRcj7JQWDbHAascBrAY8CBexF8ombKPsN4weyStTnK7AFQ9E2CXXfApWpDtyQ4Gx44W46zQBZNJR",
  "key31": "5ogrvzvfmHBmEU8LQhGUsSCgSyZjdm9hX7BsuCM6CyaRBcKJ9BXfUNapXF7YtD8mxVyBfmBPgj1R9PKFZwGfUdqF",
  "key32": "3FUdVjhCXuWTMFRaVTXB3iP2XDjMLyrj6QfQkxdYpNBAeuB9Leg7mpZidBJ5WLFH2GCikAfNg8XfGzQMYdxC7Cif",
  "key33": "Zs9FrwnwkYANhr4AxDuteUCyQFxYGm9Ajvn7AMCJNVuddeTY4V4FPxsHD7VNNBJqYL3eomcEcsbr5gSWNYoo1hz",
  "key34": "5ASw5C1ya1KKGphBnV9fdf9mw4g2fJSLgFxsMbwBY5ufvBjaGN5GrS7Yi8FT9WLUrXN1FhXoCv8fdCFGKu1y6QT5"
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
