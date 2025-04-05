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
    "4iMku9mGorewVX84YikXse57RrVm3vLbZYyy1QZ65EjtSdJhugiucPA9HL9Nrvbw1vsHT3DqCPML2ppMmZdG1Tb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6suE8y1yas84vRwBCixefj3BBoivA67aZXzLdUcBRyRfVeNzQoY4giawPRfuso9vqEg2eFYgDHvsoC6Hm6cAoH",
  "key1": "5KymcPyZ2NPeiUEBt1iqpw1yxfXV4cDDxKTSJUdETFDXeTM2EXdi7YN7YWP3xmHtGVKK7WaZNHKuG3rV7gCU6sdw",
  "key2": "4AQwQJegQieKcGmXVz6mEdqLmxHD4gu2sNtLoH54B7h5sN3Mzj1dUhGo3ESkAjmpWrPWochjHd2EED26Ni8gocAJ",
  "key3": "2B3bDZN9nABRUksmEG8LJVDMwTmZaG2cSMDGSpLVC1sYmcHLoypSnZSB8UJELrgNqW3nohhfp6t7mdq19wKCctsY",
  "key4": "3ZCVyQXjBRGsJ6XiJ4FHRfqNjRfVBxht2FeLqU993Tzp5qasgP2otTjABaxwCANE3DQGUdzt2VLjuaqaWPAuewT7",
  "key5": "2GvkU7eASzVNpJ9XBPFNeDoMLavy6ThaRYV8ywjWEgmSuNGzwPD6FQs5HFBX41uuoFbfcu7hokCBTxjrmDVZR2Xz",
  "key6": "4rkV9jCWsmSNAWAxywBLioSDZSZopsVi4HLdDrYY3jky4JEfEQ8V4ZYhSt9FCuP3mXT1NaoN5naeiXiJQnykwsnk",
  "key7": "3QAhjAdQ9mkYbLfUhocFatckifDUCpbLEMdZFWArQhmZ3v3pRBc88sYxZg7Pqhek3TtLx9irbHgJsJ35L8pm8z33",
  "key8": "5pJXWy3XJBX4QGMAFUU3hCAnacEJ4g2kjdeT2Gofjkc614XfZn8QfaDwDjePrvWwLkC7CtzNh8MfRyV7uZvtv12C",
  "key9": "3NooNssMPK6VM4HvEwnJ8KDQw8RPdzeDLVaj9L7Dv4jS1YHSF4pCg8WZ5rfTF3cMoChrT7KxGhbrSiDqn3a7MBas",
  "key10": "2EhQDrTt5J3hTQTbigEg7Tjg6JG1v3HLyDv4rJYWMGFJUuyBe3HcGG18NdH2tG4fhvnHRW1cpzcqFrknTYuY76CS",
  "key11": "2AL3XJPkuzxRAwrTmLBtoS1a69EMuY2PYWfT4cxFuLMy7oHgTKBsjJ4xQTsUMG6dHbdBprBjcBKvaHzjdJLoXMNT",
  "key12": "4AVQvV1jX6ztJTHVTZ1FWbGhSPu5M5pCAyeAZ8pXxvdaVkfjkRUYAzRZF12AvYwMkyh5SRvrRTtXfGQKiids5Hrn",
  "key13": "5Z6g8TQgzghz6Be69wTGbQ4pG1aMzA19E2tQP2K5hG3eHJmdfEaqWayAumv3VxpPEXn9VT3Vhv8cQDxt9rAcDbVk",
  "key14": "3RhERqkgkZqZv9p4pRQyUYrQAzaxJNo6JGWxh2zF2vmWuouvMuQX2NYRZAkfFUfHh5sQhzuFEt5xP4HD58v7NqFB",
  "key15": "5G5RTq4omfct7fBGEcxRwEyFLP8J5wDyxzeHVaDNqSsme5Fr34g3XT4xWG3eHL1NmF8F3Fz2uTRL6qijMMcdoXtN",
  "key16": "48G9P9ebzoV12DkvbYBEp2v48vPNL2ayTSoVXTxRUjefxx3LsQqqvm6ryAh4ZXCpstJ4WXUEHDvGUDohUwLdp9cW",
  "key17": "38e1q8yd5MTPLKWc5zKr16e9V9xLxVeco9bjhiUZX7TFiV9pfzBbNE3ugA4w67Ugs7yAgxaMi2n2iNAuRALskV3J",
  "key18": "4Ui7TwXwWLvM6cDmoEaCpdFA1aQwYV68wQtLENLGMxG1fnLWARFmvNDqXE5Hzyfcd3otL2y9R3aoJqbFsPfoibQT",
  "key19": "5QgXBYaaRbPmEHTWpjYSogoK6twZUo97oagyZHfdKZF6QSaXg7CURUnwwz2t5JgypfEFjpG6fuz8qwR5XNP5EywC",
  "key20": "1zvi7EocrKFQd3mUJev8wFjoYms4ABQbmZPXUBGefmNDxq7587YgXgZi1k1pSnHJvLaZmAXT5yYbYmt35agWE51",
  "key21": "584VRmaKUgVfvVSYsxeEzb1aqAN1CXutP68AhgrC9Wojp6cWYq3pknMKuj7nPM1RpxBMRHcWKRBGEKJsq5QHocce",
  "key22": "3wCm7yaD3rxqAscyUzd1LxvyL1E16RJKbAzko6qfiUtSUc1suTGerdYV1xkkTz7DVAHf42rmVU66KZ5a6SaEAWZi",
  "key23": "4cZQiH6g14wiTeRtkz3mrMtGtx65AVtHHeEimMomo6NKq56VGFTnHBMChSTKa4F7hHSiiFnL6X9zVa6yt2mhSxVF",
  "key24": "4K9BW9UqxM6GguG8xxCquAhwBksb8oDF9bj1KsC8UEZAN6ABbVHwAk4Bho8ufEY25wJkPRnyHARxoM8PDF6VVvTS",
  "key25": "26VEZGWDZE7ZH35KZE1TmPuX6e8zr5uWXBzEFXkhAsm1PtxbFjNYHMGnFcJR9Ru7erMwFUuo76qk4Y5oBEmW2WFp",
  "key26": "44Nh8KixBMmcfxCtbbS2sFNQCCRVYYroWsvjXDX1Df8iLrsrDSXCukxfg5qRS7ygMuhkFH3M8r7Qg2TreC8Vu6AD",
  "key27": "z7FUjEFgyWR4Y4YUPgjWxiSQPHkW8ckL4MXf5pyxSPnqiHTY5GKbvW7kWZutWYfHM57Sus3NQGZc1mAPvso1j45",
  "key28": "5b9FHa9199eX45CMEYUfF62h1dLBTCfVXYWtwseS1AX9n2GSG3JXSzSFmDnhvoQaCdBqp84q8drQQHYgBNWcK7N3",
  "key29": "4oA1s2SKRXLpRMDY95SLGYmgWhsAitAJuPyLdvRfrAaLsegHGiphA11cQS435YJvViaDZzAiRdbuNyt7yGyc7fFE",
  "key30": "5XcLJrWhMBmsAkYZS7MyL1Gbk8jFvHhJtQMtZKeTC3pkzB3uCWpEsgH2vrwhoZjxMNxEdsWSB5mqx8TkdsJuZxQY",
  "key31": "5yu4BA5CcaJYTSyVWDLvPpyqBGnhJeX2p2csTAXX7mhiPBsipqFcvLvZFJNuCY8kJKxEKBupf6jykr5p6wRFuPxH",
  "key32": "2KynQ7Tftjjf44NVKiccik11WpP9SuBKjnaX9R7kHYMRC9evWU5yoxxTr6LpR6bFdqNrvNEDeqVrrXKLoRhryzzX",
  "key33": "AoTD49JZ9tiWpY3miBKkr2kYspnzGQcr9zLJ3TnxnUcDAcaNWxot1n5UGYqUskrrEHh8wMMNhW7Neihaavt3Tbq",
  "key34": "3LnyZg7HmHm4gPLupkoAtZTcEcR1Wabjn8iB5g2uh8dPUqNQj3GVJvi9AKCqQTBGEEejAZMRZJswQjdyduxDCgsz",
  "key35": "3ze7fpe7NTiBpSpXLVvExHcAccLwibzAY8PayUFUYDVz5uD7zyw9ZFqsQwpnk5gNfyVBwP6DSKCLY1j8rWSrSzww",
  "key36": "UrVPuzDbLrStMvNZpYBVoakd2zatykhvVFY3M5ZiDLkznCyDdGJFNqrTb2s4k6k3dqvKcCBw4aj9oMoskhkQre3",
  "key37": "5Lfcbz3NHK1qVtwg5kiHeeJKUypiTc373E6Ype29vNNRpp6E34GyvFWUA1yqcRGaY98eQjaQLUT1vbAwNwAbpotZ",
  "key38": "2uHX3YSsW7EvQ6wHQyjpAPyURJyWFBVgWR9YU1zZppkx57RGwJ8uCuCLoKFeMZqgFCrEkYrGNXywY7xARPri3hCu",
  "key39": "4Q4pjnQsYUKWwrwir5zgEcXKvsHJAjBWuyhRqJscsbprVYxc5JsVCrCBmhChex5zfiuQX7hmXsi2oCM3AZSSRqYU"
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
