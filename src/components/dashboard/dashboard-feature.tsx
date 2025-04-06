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
    "4K5x3JmBP4dKR37M5ju4x7TQpGJtcFQDQEvq75trSCreEuvd74v74XMNfH5SoZWVkT4N1dgKrvPqh8MCagQh5Ggd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JamrEGk12z9bNKcFLKdQW5fse7gjGXqUNWqDb4N71Wm4mnoWvonwWVTBsubsYJQeof2mMggfips5XvjgmQrzP86",
  "key1": "5uNteB5GV3mzSfLZP34CKm4nTAkxU1DCCL74vymEyYX8kCURqMK3Xrez2FMobv849ZpYf95891nxU1S52NTv5yeC",
  "key2": "3Rt3xZF5QgiizCg3LGMa9mVEjtXcnMD86aGa4LGobyhNwbZmLresTLsPb43jHEzvmnmj3AKNQQ6QadT1dL6izont",
  "key3": "5Huz2r2auRPao9BDwnVzfdMA3ckFkXYwRibrGf53TNSyzkEuV22PSZRQ5E4viqFYfz2Cxmy3FqxvoxwsA7Hz3Mbh",
  "key4": "3Lgd7dg3D44TbCJHFxdCNAoTCpHpuvviydHTth3Us8Hx5YiWFrHZknJhpfMEovepAQD6Qba7edgtPX7Ae7hJU3Hw",
  "key5": "5JfQ1KWGB8PohkxB2eFkG6jU41XppFcq67qqh7dz3vSCMadubHLMVbRQkTxmTAdWPq5z5KaaCJbRyJ7QPX2pk7p4",
  "key6": "3x7F4FWNZpgtwKRKiLFGWAj32NqCTNBiJeVcdtve8NmGqXSKBVYgsBWxtiQBLrwwFA9T8yCVrqSNBwudUN5awMSs",
  "key7": "jBC9D1q8xXXgdy2cJ1TmPWdLRuUMzqHT3oXFCj1ojmzNo2MYyNJL9zAcWeMpRChzonKoifTSN8mH2opbGwAQmmo",
  "key8": "3p6FMBvScp6Y3SsrhqNpwjbzxaH26x772evFrju7nxvbe8yMj1TAWLVd98AxS39dJjH2xyXczZj6qUebxJReAHiy",
  "key9": "2QtL8qtHiDCyrNUaKYp7A6m91XczFYb16iTSYajUFTzW8ByCpnPeciEnmSByxzGcnP9Yb96qwVPZS3eLDQyMQ9u9",
  "key10": "4mq7KsNoPX2j4bgqrtihF3ahXgh4jHt4J4yXQcQe2Psqon9kA1mcPA58vjRSXqGDkPzJ4pgbNMGxTNTbp68BPy7j",
  "key11": "YnHNAeWU8g8VmcLTrb2xqHSQkiYAYNaPCYgJVKYayEmRnrqHtim9KR3cLEgVc45BvM9cHxn7W68knCvk6ngaYay",
  "key12": "29qdxk66fmGnxyUZiUCH2cJgxCpu42pz5aGprjox9yepmEgwzxmpMExNAordKqkBFhkfUJuv8Bv7kefzAcWarSPG",
  "key13": "3S77Gk9eABzkcMzmk2ncw3J84bxdfJWJ3JA5kWF7ixXnwXjRmdLRnP9Aqb9kYm2ssfF9g4HmtDy5DAKGg9NATmEC",
  "key14": "2uAv6TokJ7n7Stcaz2GZ6ccadMH8SFquzUEjoL598GcEMzRyEswA8id1wD32dYywfvDh8BGbJbr3LdqPkuGpmWmk",
  "key15": "492Suyvz2EFECs5e294angympP8KpYqD7rnPpazjFybueBa3HBJ1WidppJaPfxZKcDRYzVWmHUtAkAu8h9JfzKMV",
  "key16": "2vbdaaEgBTb8g5TGgj8TJJqbanPCz2B7DoHAYLkXPvL8g8cHhvFb1hp5HVvjRRKgP5HLqFtyvu9by8GFzZCsYume",
  "key17": "1PMikLNhjnyL88ioYUZk5Y5GzuW2maSmmg2PhDAYZ3F3rbxsxF5YT2mK7pxwCm7eNg45aya6j4CDxgAnEfW63E5",
  "key18": "ds43eCwJpPCuCak58JA4eZUzouofGQJWUK2vD6RWiSpq2iGwGZuoXZPwGv1R6TH3iz3PWBbfomDN8ga3M3stESV",
  "key19": "65XLQ7HphWh9yrdmEA4ygiMp2y2veRyZGvztkMsTUCvHUEQkjqZKGTRMFJtT8Cr9dwuuQU6zbgTCxxNtJaQij75T",
  "key20": "3WhYTS4kaYh56JWQxBjkDCCWSRRNnNusWiCVkHpxakDzXtFMPQYbbm8xLtc6XqsNL54J4M9mUxZVghQagVDjbJZa",
  "key21": "Tx9m62wLBfMtt5SfNGcxYcGVEDZ48vhZfGaMKP2HrZZYZRkjtTKgRv3tdxnoHCjcunqTXm3PmE83mbCudysYXod",
  "key22": "3Ey42HxLfZQo84QPkYYazvSYYFcGpydsHnnLX3Q5RLZDmT3jc1giJey5GSsn1uipe3WizU3v1tSt7ZwgYFikCdnG",
  "key23": "5NW1jHRxtrc2Ss8FpxXrocEM4FLdXyJQpECXVgpWyquaMif7VW8XWQmyvBd1KTfgYgfejvs2tE32e5Qkhc6jsgwA",
  "key24": "4aXVtjTH6d4UoAbarRCTzPyH9ATwZB8g2pwco8nuabKeXrQbdbdVd5sREiEw6Yh4ZkV8q66dv7rUZNZUdEyCVtB",
  "key25": "5MVgqyDEuZAdZE2a4PL5FNmr3C7XrLAXdJTY2WChq3yuwPz6M9yPNnVS9wEiSejv5ieMcBoi2nNJFikpfgE3YQJF",
  "key26": "3yWqqvKrP6usgScyzKA3b7W3PygG2y8hCc4T4BMnLByL2Hc8thegbsDu8bRrKkvPQN3FUX2pwttGebXhDYaorpBt",
  "key27": "3cEysQMyfHcWTDu6Q2rLZBrXNvSNrcY29sn987jNGUJ8gGMBU52GBjF38ncX4X9jr3kNGRMJKz2nW5NMR8g2rvEV",
  "key28": "234ws1KsPJGYKM9qcMf61BiR2DQZ88ULFX2zgRmWHz9ZCrqgtvX5B7b46rCZrXdYk3qgnAwkev4HZ4MWVDmsdbLy",
  "key29": "33qATurAjgawDKdd7cJBrUELFm6umVgrenN3XqqYJTkzsMaesEUGj6f6J1mNzzipkYuPnMApWmcqERTJoqyTefky",
  "key30": "2wG59YQ1XifboubmjqcAtHafDPb5wdgoSD2NJW8yGQg54JEugV5DeKcjeNKtAPLVbTFQX4QrCDSV9G8CDFxVMVbK",
  "key31": "5xVDvZrKjbugfM6RNK3eocHKsGVAyqyM1EJKrHHdzcUwPq673bGkh2bH9DNRtQRQjVZhoBiVeqdXFq7cGTqRar7Q",
  "key32": "keVraQgwKgd1HUicCLb9WvqBcDbznCzdYZF3MbgusUjivNHLn3uJtYuXC1nQxXUgnk7PeymEjPM3aMEehc2vbxR",
  "key33": "5wQUFWVYBV7AcmdVpd6zGoq66dDCm5nskVvh5zU7taRHreqaErjCGSner2xoDDtQLqn3E8uH2vLMwovdsgDu5W1c"
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
