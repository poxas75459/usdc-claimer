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
    "qvybsu3msntZLz8eta9HfuNuUnXx3aRK9BKWALQQswqy4pZdEqKGJzbJUenh3EwXQd4T9SVmxY5d9HuU37uECWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vrw2THPhvfut7kennDAkPBCuUoSZEpqoTm9vXj5KosRDddzEsHznC9XWamCDKtkj79n6cyCY5rSayZ6PUjYLYFA",
  "key1": "3BGUTeZCE3TMQMZvHLis75Ct8Bby4NthauKW3BNi74KyX1zPukhAixFqqRKLN2pVdPUvjV1Bhn4bRyv4LSPMAit1",
  "key2": "2BgwiRX41kNxH5pg97RskByC3o9dTwDTcArbDckyrJWabXedY35Mi1nRhvp4USboqcdyxdvmkZ65dWycGwFb9MH9",
  "key3": "5XjgaLvnhGboB3jzAjGtPkSTvrH2FrW3qq6Fs8vmX53FfyEzK3A8H6uR4XLmSvvXAJzwvRQVrV7kAfYWMQzWpmsD",
  "key4": "24H4Ci8URagdh456gTuZoKP49HcJfAyepDuZoAAVwe8KjmtTcBAP4xyMCprtMR2Vx3RjfWk4ajwM4RkUQ5Mr4qh1",
  "key5": "5AUNsS3Xo7445Ld3opuKGi615MinuXJ67U14L5D1WG6xDuiDEQqExaccHmg5pssL9dVw2zXm5VmbNa7gkwxTGCmm",
  "key6": "3T57k44Zey91h32AikxJ6jWDL1z2PMyS6egur67XYJ3BFA832Sh2sTAXEn9eTbmrqxQN5vLayVMFWsXr5Fvaoj8a",
  "key7": "2j45scJhLnTN68h7b74SzXQEmPbFaFuySsG2vn5EbwjErohHt3t3Jv2JqnT3jke1AhGgJF4UXb8GiqipiYsbm9gz",
  "key8": "5HLJx4rtA4Z8tdh32KQ2qabVFCyfeuMoHCcCXvfcpqzGJPvcWiyGqHXen447Kxn6FPYAm1qSyvKdiVuVw9oDGPtM",
  "key9": "3TLXt9x56xNPfHAst8gogQjQEM89NZ1qN8R6kjKGVvhdAyd6oDY8ZHY197ee6iKRLR43M8AANRZTHBhGFB4uUsYT",
  "key10": "2xrUfDTw4tt8N8FqBmHerdYS3vFaXVZGY82SniPnZNE85zbGi3tqHrjoTzXdcNBNFZYz9BksFXaZRqmCdJPpCMd",
  "key11": "gQEGEtEqXYyvoqu2QnJ8PYW52PwJTNLjF7ets2vCN1xtMyeaLyvNqMTaCmHi6Yfy2TY7bRg8FtMYbBe2LTpyT7z",
  "key12": "4DTTSLuTvWPEp6K71zML4fcqLXyoBQsTPx7Kph1gQHb1XTX196RL6T1uxPsLSkhPNoBBCSqBha9pn7EpbT6YEerQ",
  "key13": "51AC5H7TTBQm9HpAShxbZuJBSozVW3Z7ybKNNFV5NABfQ5SGdfpt7LiWwngjCk8DRDnnykbiNtpduzUjDgvsG4vB",
  "key14": "36nX5DNVK3XYTqdtVQ8zoaxkwMQTBgcSEz2UMGjtao6p5X8aXw3r8yLpVdGzi7Qx8fVq8EJSiuHK1LGc2anT6nYA",
  "key15": "5UPRUK5Cv6VedYGEt4Knzk4GAtKr1ScLHMTGDeZLUEcG7Fss6KH47KhuPWxt8mnpprswiMVUt8i7RAfrvW8dczWx",
  "key16": "23u41x28p5QuiLCcE2tYotjRgjdkbav2ZWgBXNXkhwG47hCKo9P81bJWJtnV2j6Xa97GhdiC2LkWvMx86m9ZvNff",
  "key17": "JadTSB3CubdB1oNwX4NJKJ9y9sbatY6hPJz5Um7bbmzAYxGKndcnYXorqZviFSR1UrezRn9qPcKZeAaWP7T9Lq7",
  "key18": "34cMEV7sM5dMizdhkqwC16SPBPSeAuHNJUA8YuxspYGkuTAjL3bMvFs8x9cth61CWZRtpiyzTsvTyfmFd9iwmWSm",
  "key19": "Va7JQaRdp96W5NaogEvCcoYQpGsy7718y4M2Bp6zHKfqouz4ESDieF282aBUyQ7TGahAj1aXnYLrbSHULToh37v",
  "key20": "2KL2afkMtwf7T1BdxGnXRE4V1kKG2yfgAoPS4WpK25bR8tbAbKbSbYxVY8oykMLTau6K9m1Box7GnnbKHoWUKfY6",
  "key21": "5dWjNABrrn4vyhtghYkh5Rnfb9bdadkbAH3rwKNktbfj5GY2YpEYnvgeRMsgW5Ky2jHomq1r2Y8dmvsP8ygWSMKu",
  "key22": "2f8Lt1p7ng2p2PJjn8PPsDBfdUihUUF3KYhKeEP2pUr3FU18q6mX4Dt3pumyudo3RMFJWuLpV3fPQFH2BY26hfVT",
  "key23": "3iwdKUKUSG5rBx3GtAev3K93kDFGedwtjvMcpEKLCqWQjkNiyiKHypxQtHF6fom45WW96ZBwctktbp7FurcT88Tj",
  "key24": "4iNTfCboozDMENxP6bWQeEGg1LQbBbS45cGokALizCJhFUK53TbSrV3EXeQpoaeyY52cshfnJHEy1zMYYSqKagud",
  "key25": "643nSoA1513NVXBFFw7Tcj1EKFBhaHBbemUBasEjomnLEhqvKFaaRzEe9q2w331Ew3174JtKb2vkqQiQxUqo4j2Z",
  "key26": "5V7EEyqm11pBBLaDUeG9uF9AmiQrmo8qmpkPhVSVJhU6rJiV8NCckaZrF8xuay55g1NDEsTAem1M9KSqNvq4PBSf",
  "key27": "46guvEzY19uRws6S7MD8o1jCsFH67EoZ5hpR5Dj9PyFTu83GzwYVQPUJmogNuufdcUWsV7fE3mgmUpRzqZMYhuMv",
  "key28": "3Me45zaPSEspUdkrhLxHP9HS4qkDAGC17ccGWwxx8oeeQvbQCbDMHbzWFzvkDDk671yaBUq54evYXAFSZELQmfxZ",
  "key29": "3Dan12imT7Ty6mTNLi4XWMyKd8ZfJN7WLhMDvE8xBMZgE5iWfADpPuCzoS8sY4QYGu2NHgBaMvSLQAoHkkR3haPE",
  "key30": "5KrSBHEpkhw537NoxkdHMwaFfKyCGuR1woz8GwpF9TX2FAwjq32afmpJuLiKKF8zhdnxjwA798VRz1L1K7FWXmRx",
  "key31": "4qbMS56dqtKNYAn6ELELycWvNzqHenXvY3fB3rQuK3ecSeN7KKKVpJQ14Eigy3HPedfWDw9L7HMdmExtArwpeCpr",
  "key32": "2Z9ZjfUKJFwA2DmUD9VRpbUq5hfHX4nCsWn7EC8HZDwSCKmmChHMocKSqv2j8Yc3Jdhvap9BzmpwnQbCnKpEL7ei",
  "key33": "5xJ3x1zYR9LWtJK1LhumSFbA9EYYw1XKamqQJdUz5dJGyY855Vq1JD8qePcdUSpXTWkjoMz9xZBWaLkNvyXv8nry",
  "key34": "HBeAKXz2dBkweuYymnGqPGRdQmFJbGiQcCZgDgzquKxhdt4nWYbc4p4tcgQZzn3aYtp5amhs8PjGkK3TCdZg1dL",
  "key35": "4HUmn42uBHNUCXthunDNfn121ibSNYXNRGhY73FaePeickK99vmLvtScApZWfaMFcU1UTMyQvASaDge46GbudHfs"
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
