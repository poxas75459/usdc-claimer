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
    "2GSnn7R4vbDixqSyTPZXXkCz6CdHXmHiNY9TMfgHK3j3bXGFt9oskn7sWkPAe8GwhVXQUo2ef4rD1Y4zWUxAyzyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jXkMnfoZkGkPAazGsuWJPTQKfsNhMbbk9pvyxnjdnDpkq2VuzKQQNmBzEanhjjBGFiZMnPG2sa47JUdFu25FrD",
  "key1": "4bWGAWagJiB9qTX79JeWVy94WMzNLsfAaBXUJi17fwaxu7DStPrnLT74yjPNBmsUdScHTe3PMYXNcuhXE9WEmNYE",
  "key2": "4XmFc6Q9hkiChr5WNqU4qE2riAETzQHA8ZDmTXGCzmNTDv2f3Ptk7j213m1wybXK4FJANUYLiYFNiVhMMiEdSUqW",
  "key3": "yDSFWUPGvTyd7zWsUZTfn4WH4WtaWe9U7praAJg62aaw3yARGnt85T3bEfaxZSA7gvmwed9zaSMgP3X3U9VoiSG",
  "key4": "33eZoRcwa6HHdnJvHyVgZq9YFNAN86NSEUgM6BDLWMZBLAyjjvQy53LtuctmBRRDY4tgT8LBXXwf2WXdk2mmSxjJ",
  "key5": "3WtUK63MrGiYfg2z837AB4fzynFYiUddbb9S93qCson6yF98XP3k3HhNFmMZ3pJ4CRXwN1GPjBvqmrFztDRtcswQ",
  "key6": "5Lhdqi5iSU5EGm9YsSfeWkeDpr9cfnL5r8nBTtjhr6nyQ3iiaB9XqXa7Dea8AAZW4T54MiDAhpvDYv6hYFPxh31a",
  "key7": "2vTjoW8k3v4KFfqzuEJaP71hz4vWB8rH86fYKFn897dBv93z7hThtNq5WxAvBBRGravSniWiiJaQazVtn8kS4yh8",
  "key8": "fFvYPUeerfbiXykaCjVdgAqNUGxoNqsZCKVK3xyfJ7iKghFWuVN53usYXX5a9Jv1a4ULgkbSwLbvR1vFv2Bx1GJ",
  "key9": "5WxtAftEhcbaYDUVKHtLGHmVyDyMEfjrE88rUyj71SVkKq3RYrQT9He8MNdYdDQwmUmXp9a3dpuH5nqLxQj9cr3R",
  "key10": "MsS6m7pJUyzNvu47xFbGH9J3bh6fsSLGh6NDRbYUeMhPTypGd4NkXpVBQQ6BioAZUYzaiJ5i27zzUTrGPkzvWLU",
  "key11": "5nPHUH4cP35jTCd5MLGnohCcokYk8oyzLQYqTFF33SoTRFtuc62QrQRAX97JK8EajYywDsHBAQY8R7duxAkZLpkZ",
  "key12": "31CHyJdZfuDa7sw2afuzcP2aHYWXi7ojwVwhfZXRqxx3oYYAR8izVxXxfjCjiMhHo1Wehf2jifXCCSf92jFxSCws",
  "key13": "5baF9gmMTx9Hp6B2oSmT9rBjZm56P9ovXjVESJApHAT99W7fch2dcNZHGjaQ6swVE5ovZtMxLyFeW4xD6VZkswQw",
  "key14": "5dGg4D6nrPkVM7CwUwBR7TgFCb6Y4rawubUBNfwdNivsS53MNg6dSd6hLQ79s7gfdBXiNA4ingN7kjszCwiy1AU2",
  "key15": "npxo5NRd6NRrg81oC5ayjq7dwKYLQNzDAU6ZToJKM5vLWPLPfYh6s2CfWPrhko36JLoaQi8BYRy53aopWE9pniW",
  "key16": "5bq4gzE7dNFf6cL5whAoMeVbxFrmJybXATVmjGEQkPEauHGuPm41YBSaz6CrwA2kbiFa85TK8U1fVnUD71BHUeap",
  "key17": "5p3ZCQWtD1UWQ5hLn6XiXBrvMGoXNJrDN71FRR1VJdunjjmQ9Vp1vYkkVZC43huzgb83skLP1KfK7rR6L2tyfXcV",
  "key18": "hdCCbjPpMeYXqUS1mUoZTpzseoyc9RrzDiWhrnQBvUtitt28wtbLXzSNW2swBoPhEhjY1rF1qLe2MBRY6dzD4fG",
  "key19": "4EYeEAzykiXvQ6Eoioa7r7D71HQqknMUgQTY2edx43cUwje75t9Tv1CaK52gfYzyLn6EhRZiA8FPu1jpFi5Uw9sJ",
  "key20": "3Xjg6JhxrUBet1mx4fBWyDZcWBCnGzwZEU8Ys4h3Kd7jiCjkFX2rF1Yhefzr3r3Y77z2tE5ZyboaQwqQp8XjHcAF",
  "key21": "4ukUXg76bMJDZTwFVjBMfKnxwua8r2YBVkK8gV6t9vx3HPYVb8aLLHckic59NW43oKuQugp3BHVU4eXAKhVAxmHr",
  "key22": "5he4yjVq6qX6GdyfwNgMPDYYk3jGqSRoPC5X3ACX7rAApzRHgqjvpTTyrDT6mfcFvv8nfXHqPXd7MQnPnhTs5Sev",
  "key23": "5Lzjf9g7Z3mdWgtThGkbDoyrDRwYbSrC1pyonVPmw6KMrguqWXCLNU8Pfh8Ndbbq9C9P8N67uFXgT4myxBhZW4oA",
  "key24": "4mWBFvj7y3AKScV5SZnob3VDZiTG4YcCimoXTsh4JUnn6oURfAkTmbPEub8VqfQf711G5x4QxFjQNjBtrhBns2EA",
  "key25": "zTw9z4wKs2im22zhm2FmiKNwgbjK3ccDCntSiQ8R8jRyhbhsW7wWTLu52PHQ3nkB6eNAAoumb7kmvhFwYUjKRBM",
  "key26": "5rF9twABksjM7zmB4fFBQjnzBeH4JsKF6wwi4cyKB5C9wvDSakoWVN9P27eFek4ZPgog8zM6G2nt8UiSY1786T8x",
  "key27": "58Ne5XYbxKwX1egTx2wds3avKkTpDqq8KEHFRg9pZkfGBh4khuc14cYHghxXJXnyECi9B3JZzNPNkCjPFLdBuHd6",
  "key28": "4Yg8MUbRdGTFa5W86FBUjyCpSuDcYsDv6544jhREnCMUmAt9czhDbUoG1jJLXVuEKs4ZC2z8TABJijDutJM4LexX",
  "key29": "4TBe9zY3XDb9Lf31kV4jN4aGeGAufg5iKhdK3wSA1gJFdxG4uppnVH4GZy4Q8hhBT1ykV3ZZnBS4uw8jiVFHGBB",
  "key30": "3UEvAA6UY549p7QrmiPBxnUeeUnYpVEDVFHkdKx2fQFJ6DkjUWWpz6QsGSgVAGSMaMD41JMuEtxxx439Hpguaw6q",
  "key31": "4xbNxkSLVMx32Bz9KrEcsCiNUZxnCaRqpfPVro9uukdYerTTTptZDHDjtw8GWBVe7RhGbjEuw8mDKsEWJ7LuAfUY",
  "key32": "4p8tRdLzk1Zgprc5u8M4Y5pwdkrECtYRDRaHVFQGyBKBjUdBZNATsNXxEQXEwc3KYM1aaguqAKZtC2noHVHwvZPg",
  "key33": "3fkUEthJSmraVNPGeoSS2pJPyX9sQbszz8k91NNCYiK8doWCXhMiYLrdS2YoKw5afideP7WPhECm7MFQtPLStMLj"
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
