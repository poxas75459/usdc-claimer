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
    "385QFcAqi7ARihomwkHYc8ro5LcaWoJVTspUzSEatp6PSSPoEZfDY2xcpnR3u2U26xHJEaWiZpKViyoj73S4Hccd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LST8A8xBZTFfVPJGWcCy5qVsWBm2bGufujGgoneG1vyeTCKCcTREDrHkj8yXMU3ptomwejSTNHGtR5wWzpcvn74",
  "key1": "2ZR6AEL867UjC8VLGGZNUwyQgQ9GiBgq7vtuy155NG4Ez3fosAYA3smPU1FNtkcAwFDmw5yUFgviSCNE6htu1K8M",
  "key2": "3Xnq2JghVMHD1f6bTebS6SjLxBj5n9McZDeHAbnkerUbyoRnpatDeFm8MJExRbcpS2dZWNxngon5JLQ4C8CesVuA",
  "key3": "3esPqdVU7bM87rBqs6g7hAFsSHiUmbB4Xz9Arb9TcJ6cMkMoMxUopn5hugp1kSCKDJVrby3VbjStEqFeff1HWC4W",
  "key4": "3Qf44H9d9tZZb9oPSxVSaRwbT8pFqHRgj6Z6pduYyAMYJNvjwXgnzywjfqM1WfLFaoDDuBs3EWbTPZYsMUXpxj1S",
  "key5": "3QR2ZFkRpCb4W1Vn7B6ejgz9gTwpHfGN3sQCPkZsdwrYbMn4r8zJYsrZ6BWxUa3bvGDbmptVdhwxHT7232vxKdoX",
  "key6": "4EWLRD8AoWFHmwg3YpeQ8yqTPiiMxqSbAavf3h88imjzHiyG3KshgPi4izfZvKtZzgUd9zGJ3PmzXJFrUf2xgdJB",
  "key7": "32At6RiMcnuwTbPYrU71THyyKy1maLsLqG1QGWMyvRhXmEXbj14p4agwKWcJNsy4h4P7g92Pe77JTwnBCy1YTRnn",
  "key8": "5B7oPc5rFYT4mx11vx2ApuYgNS1KHuFA19Xq7KuqDs6nSzh3DthcRhHvqSFyVirdZRHnDafXKBi4XqqsLNpSMFGk",
  "key9": "2vwi9uwXcrndHkCBVjs1z9SBgd1WC6QMWgD4NUw1VQtJ7p1Lb4AkmYw2Z4Sd64PSRPXRDx7nWmoPUVdavpdeq3eF",
  "key10": "H4S5s1gF2xsn4STze21qkd3MpCeJa7s4jHb8NgD88vapdEW7vkBoixty5LfTRpqDUsVov95jcQgxyMKoWCHpFPp",
  "key11": "DWBbYYvm19VFpeAeUs4oir39fmXkmtkDStFaggprZjwWnGfcfAiHgFQh7CzvUFY2EHCzejz6GFgtiLK7ya4SV8C",
  "key12": "4fGdqdoGMTeKFY6uW8M1yqW3BmDxauU1V2xR3vbKHnxsnBBANL2GaD4DYkuM2VvcLQbHH9RcCu6oCLHCDZCyjjis",
  "key13": "5epKq6c3yeQ8HiKFwbmq1DHERyo3dDCyc7VNv6B6u5Jp3trmziJd28i89hkZtLybcgsQu1BiGTYnKSiBo3xE1PNR",
  "key14": "6wnFk2bAdbAJZd8TnEXeDRHgdEH52FBM42xrdyBjAg5K4YomhRPqVUWopzjCUsWGytjmMwniiQ8h1Tww5hTBLK1",
  "key15": "qa7zKuznCnovzdgxZFrXjtUVyXR9fF4gNW3dBfbdSj3q7BJzd92dDutoDbF2piyz15gFvaBF3i54QgZUWqsCHCj",
  "key16": "51j4PPVY8iM3nPKrXBVW1Wcg29AFXKgxsjM9kyPGnG7DzpuyjxKk9HuycRU8CdjwDYb2bygVpejEfMdVHm6zJ82H",
  "key17": "54ZSkWMb2iP719Nf533miDQcFYMM6V1gRwEpauqAP74jw6mmYRLjN4A9NGgN9kxnbsehbLX2NXhbkfpnmN89tYvA",
  "key18": "4yVsRutCnrUFCEmD8TQFent1xrSqsbdZ4KEgZ8Jtmu4deSmy5gWr52HyZoFngXCbeEY3MAEuqqaJCpV1UC51n2LD",
  "key19": "3YBAdKSRML2r6YjXAWDPkEE5asGkTxoZVYei34hbs5sByi3k3ehZpaNXS2aGwgsoj6Ki6rKWDXagw5Y3ifDUZwwb",
  "key20": "5QCZtUAcJhjD2n68ddpvJ4PWfEb94Kx8KhJKvdmfkjTkURrGQ54tz4Aq2UGiHHgZnxuWrEsnqSfmY1pstQRnL6R7",
  "key21": "5hU6u3aFYf8FwGa7K4sP7ob2seNBxcnxJNLSSMdZqy24vs9NTMVkmueqafisUJ3xpW7P1T2oGzoWE9PWCW4rPcpW",
  "key22": "3aV6NVyMBRCgDhza35h79aysT8fUE29BwtmKpJTesHmZbfGZwJNsbsmJv9yULdZRVyQRHhbnLpjE1PVRmMu9ZkBP",
  "key23": "2q1ZsShA1hFdbsuLC8xKdtrsjUmv9KxafUjZHn5UzUuJqnofYxX81TzqJjY6hjbvfcqDQPoTG5x7YWm78b7HzwJD",
  "key24": "4nnZUUK9xt8QYDKcrr5Ur5Fy4vhdhSGQVNEYUCp7p3ctFVBE1pa1Woyp1cNoq9qaNYFBtppD8FRnMPsNhXmz6Tmj",
  "key25": "23xrkp1oQvUfBWcZG7xJYJbFTQtpkQJWGSwe3VgV4UthaCPAiE8LEmG4bzEFDWrWQDqT3EydEwvLQzoDwDvv7HKD",
  "key26": "25pWPTizci42PUUZUCq3qUwk4bdKwodbfuKksZAifEMjjYVU3yvKmyrRLWTokTUe7CCF8hadQ7yaA86NF29hWGbH",
  "key27": "2chzq6F6cVDRiTVQq2Gma8SqMhHBoHitqhRw59TeFYY7qWEt7U4usqtZow8ya67MkWrfg9qAvXkuX6rP9MjVYzAj",
  "key28": "2q7Zy95YoTcPcHkUqk7QLWZ14q8eWZT8EbvPGV1imFq3dr7iG44HBnXE5izQDhcMHjRaJ6iCURxaSdrwXjXhrxdE",
  "key29": "365cSnvdskg3z5Sw6QhjxYdcwCjJ8Q8j4xMTZej5yXh3qX49rFYcpBP66Qx17H2FVhLSbj8NJHnw4U7KQBAR8sib",
  "key30": "5HkqFYuia8TEjHdbqJQ2mrVQxmMVMcJ94VeQNkVVjDrfCSw86pNq65vu7xpGzKsPwXEm4tfjCzrRqJV6ranFdzEY",
  "key31": "3HonEjAe56Hdx448cxPuUjnjNPAPUQTXVKt2QXhoCoFHPRnj6RSWVmp54pB9dirPzdnUf5jfNG23nP8wZGHdZmPA",
  "key32": "2DHU29JhgBVH6tkcTXpGxJaji3kZSPm6oyp66Lqs7WYb7svRWQ9WxxdZvmcTH9tKgSVfLTr5xgCf32iPtrnzmLHj",
  "key33": "4sQmDxnFt5Uq4Jvr4jnMd7afdVWQrGxgGuRWep9vHLYKREstCZ8117cfap4dCYikbMa5kASw38bVCBQ8jdCSJezg",
  "key34": "5BrJQtYAjje5qarQ83brdZDFPndCXkSSv7JDRUoGWYdNCDzKiyFQRzsFH9xMSN6U3FP8d9GUKX6V1jJUwXAg6S8y",
  "key35": "3hrPzdfFZ7B5NwYtt6eD5ZLwjWgK2DSmkS4tsYp7TgNFQqJZQhByDE4AnZGJUEwd5GaVefqsTFW4uWt7Siky3vhS",
  "key36": "2gGuJJW9LkbYgGpSAJ5qxvz9n1nTQZx28DZBSGYp4CuNDoh8dgftZsBm4MwDioVctTzL9GPsd1xi75CNJHYx1U4T",
  "key37": "5MtHBG7XNUEEPNbVkGRSHQybQiS31bPy1KmvxbJ8p5bBqFYnptd7eqMWupTrRTQX3psSdwf9aDvnrVxRgnocF52v",
  "key38": "4Xgo5GUu9wmKnrtenrsfU7uXnF4LGd4yYERDv5NBAjef4VaDKDVHCMakTXkENgHG8BvW2xFccVaFdfRM3KeLj628",
  "key39": "34Z9CFC4fGBjj9M4rszqmWnXqM1gfALFLuy4hLuGGh8AcXwXNTECaw9wJGVrvWdn5pRdfkf6WoaQjMU54HNvsgg2",
  "key40": "5SdZsnwiksZtjivKEANekqBsRQ95wGP7cxTy94d5MqUkMRV5HbZgJ2YqQmzpkSWKuKSgJDMpxEKLgLr29gCc1nci",
  "key41": "4QNs4LzF9DS17DDPqCQ2Upjv9qK33LzUngASWNjLuHfwVLwtgLaDTzS7wGy7rzA4ZLnkkBFLwSG8pR225yXujq59"
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
