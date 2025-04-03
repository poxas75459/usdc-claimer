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
    "4zMmn5XuVHN2Td4JVgfWRbfmGC7kmbinsGLb4y94X28KtDr3Z1EgDw1B9TTtMk5huS3dudh82Ee9HQdaW6NAH2nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZahirwqz2PBRdtirnJ3wpGzCYC7jMZRz415nzsmfTgvoXpHCLKrCJ2YE6vkpUGT8qmFGWcWCGYDb4GJB9sumHy",
  "key1": "31qhnsStJJurchkQELYXb3L3Z1EtD57oFudf98hbwZjbrUkm52MYcTHiDGjYHujkW1LBipu96uCPSHFXqpmrZ9bw",
  "key2": "3PjSk2f2HPPMLDzUcPBvEJNJiqnF4WjRAmrw8QKNqUz4ggwycQyTuz6DTSJ6uRdRAiSTDMhAnq7ekSKMAPQsPG7R",
  "key3": "4bBc6r6ZDZiwqCLvZ8KEZtCVEsVQYnKhrcQmg2g1BgL9RRDgY9ew3Zv6n8RnQd1MS6rEXcrF14bHZHQEUqGaDqc2",
  "key4": "2BeMLsNYqBZEf94NuFFmyG3RT73YmXEbboXBDR1zQpmJof7ELCGqwX2QBxvVSfHvTk4MgXHeMrbiQaX9ju9u3jsR",
  "key5": "2Kj6VT3GNjCNnEUdafXhdCmxqaaFTfMxt2GHQk9LuGe1M4icVR74AbAzdKKmM7rpC8uQzXiKj8EB2xxihzRUkjkd",
  "key6": "2sVa6uDcQ8GYrmv5pdSUvoDWP9WbBfnJwkWv57QQ1bbhg4EcinrSx4V3RLKvemfkY9Li8aEfEn7JNzn2ckaE2Rx8",
  "key7": "2tELWvfN3aLUjEnB14kSwW4RNUoiXxgYuoj1dpisMjYq5dttpFDfpQLXAeSve4R8xsff8VMBsPCbhZBKgZGCBLH",
  "key8": "4NxogruGyGtDHLgMTmNtU98ebLtkdVrpJrYG7ubqJMmYiEVPbqqxSn9mDpBehK539L9vExidsvSpFKmdBMFpvVHs",
  "key9": "21etkSYaEjWL5aahHm4pa6iJkqL6dCcbxG4sxhG2JzWJiXQHAdbMtkd2TtoTHf6zVYrysFPQdgLWihDjcpKfMuBR",
  "key10": "tdptmAkdN5VxEg8wsxx2cG1XU3zrqBx6ZLZmyWMEnUYVnqP7wTCZJqzgNKczoiaTAQqxWQ1okbsRtRJ3HCT285y",
  "key11": "4xnz13twzKysxLVSnvT8Mg2tpWjJyWRxEcAutEJZpvkby9yfM4cUbzjQUitxLSN8Nm6xsts951YSVUhF7Trht9Le",
  "key12": "5tZVUzxoGTpP3N4kqR7WeKmJijsaFAsRxisjCpYEyd55hi3AH1dpkaYDtDfyCyzLY53NJgby8en52WMNkQHKm8H4",
  "key13": "5pFHJ3ZKbfibguLdZRRCtuQkdFwyXPN3FgJZ1GjvuQzyDVW4r56Eyv7hh2ZUpadzjrCBak47QuqbsBjfz1Ezvqzs",
  "key14": "7J31RpomwZXe9MzmXmnkzL7tDBPy1nZFzxdWUaQ1FWnxaVmwcBSDPC2CKQCgSouMCgoVDTwzbYfMYbrwBtwn7oB",
  "key15": "5x8gUmuTcY6cCXj6QzumDBEfybR1xUfiZqbqhHa3xceekd3oBK55ch3xy9szUJHnJBskutL1fnZqiTYwJiwoDpWN",
  "key16": "5mg8nG8ijErjTMxPC83cGGkA1aKXpmb1RjzQUARtQNgL481d1UwLdztcPeTZjyfA74Y9jKvFfQfrFCF91vAJegM4",
  "key17": "4C7m4X3ZXiCSMQkWuCRmtMbiS62j6Gk8r2QpE7mxShuQZ7vfeShRUtcHjYdmixAU8R31co4xqN7dQLHFduhAmYNz",
  "key18": "VQyD8pCnFuthf9wsho13wsZ33MG7dPT51RZPjFV5fKS27LXGQE19QSgiFentG7JPo8oAVKAqceybhHx9Voinu18",
  "key19": "3XiUhZ9nBM94HZdijz1FDbTr2yeNCEo4dnpncpatmNueFFz27bKsbWq6HkEBLNNHx4m7U8wBiepyhrd7ZxqJitN6",
  "key20": "5xXgheKSYm9niS8CfYCrJo7K5XZB72dZagPvUaVwwtUeQjhxfG5d3KK4EmZRW6SeZxfoFXF6J8XCHmpXsV9YShXh",
  "key21": "p2qjykybiFr59ZgU3Pn4drdjefb5VNb2JytQB4FCT4D3PCjz6BwzETe1RAnKwvaFe6qnaU1qmTXqMLakSr238XF",
  "key22": "2j27AaEytS53oGwcN2gFXdXDLuwH8KnU7BZvb1PRyhp3y8UtmZsm252NqWp5xWEZJGpjTtmWac1NRxhhoCW2pryX",
  "key23": "UGwQPphj4vEymYbK1b9MPRb4kbf1mzF8S3aFLwqvtb9A1mhypxj4GWS4y8y7QoN8ttBoXeoRBjwzbT3YNDAKsb7",
  "key24": "3UjUtd5w7JWH7dxq9x4F3h91pTrC9Wz1Q4nzTsz1KiSPsKTcKWSuUP8itkxJNYZbT7PLDNpKEyNSJAYC73bK56Aa",
  "key25": "2s88YukhsH2oWF3X8C7hF1ytursnGBME3reqkndEEj6njQSLDriqsdacsdmBTsPLpHnm9GyWUkr1ZhnBrJyp3pBT",
  "key26": "6fnGdp8FKSmXaxy6MfDTCM9u2Efd2866CTWvtnrWND2b9b7BNmSrRWBZYdZDWbDxcfD5eWKq8NwXiuRn7WG6zey",
  "key27": "QAuoEzETQ3MTaYxHsdGEwbxAU1GuHGvhWr2GvdV9YVoP4vUp5vqWfZ4h2ntjAssSGUWvDadaxWYdTf6ATesUuwc",
  "key28": "2czdpbPEfwrVxcUxFvUxHR1RnuXe6LdBYbh189R8xASxUjZcSamqzrU3k2kd7s83ppmFU8iPWr7qyLPKtWBgBbUp",
  "key29": "2yy6ZDVqH8KPJmUrH4wet6EeZDM79X6VHjWLmQDLzn4tmS8R64ce4tVtnQ6Tb95UMPTQELhY5mbjfJ9CDf63635Y",
  "key30": "NrMgYg5sF3CVcaFUm4HrMoPbCrQwtDMjm4i4xNoMXU5SXXhupEtFS1YKbBpJxTfQufnK89YyQ8LQZfhF2rjU148",
  "key31": "6sXNRMS4rWGVKhdAT9umvfJXrWBqrVTTB4cTY4BT6CdN4YGP8gUkX6bVjYuXVRNowcHR9buaGQeLocfhacR1Vte",
  "key32": "TzpwzHu7r7fyhALncmE1KUFFgvr6FL2TNgXybYjiygEHMtAjUHVBwc3RjCxZmwnF4L5dumFJ4xM745DmmgZ9svV",
  "key33": "4KTxWjqD6he9dVUainHSsqpskWtP6of9EmCZ8DmJWitT5pzAc6A1pbb3hAmGGUaAHHkqsferPfgqRwFPKvKgBVHx",
  "key34": "3F8uUGn1axnUphCJyf7Qq1yt6huMRzKG526GJyttC5nu49Epkqoic178Fd6Zg3CMaNZkV3KHszcSEYThHX3Hj5LX",
  "key35": "4puZV8MEJhQZdAsvrerFMVburCbLnJEui89wKAgB485EnVwMy5akTMNtDyVXcb6hdjiTftUoRqjpXrM9kXT55HGC",
  "key36": "5kBFNnWA5xhHii1qMCu2jvz6XQLjgZbyBEjutphB26cjhhqBJy63DuzEGMBdSdXCQRXC83z1rY3UjUa8L9xQ8YhB",
  "key37": "5tfnbHqwvcNCCYKTmvV9Ztp4zkEcChxQh4zDEUkqz3ySyX91VzsHLW4vGDGPuwAPDAN1UYFXshiYSuX863THySDn",
  "key38": "4sStG33jYc7M23ekD76BvuFDby4hXV5QDimSiiKgoSHqmGsmaqT7pASuQgbrvL1zUBm5h8MLe3n5mM9x7psvtNkj",
  "key39": "3m6NC3T4vMQS2R62Zx5ZfXyHjcQn8T3JHLM8Wa8hkLELunDDPadSwmZFZSq74v8ezb3Bc61izLN8ewnsCyq55X4",
  "key40": "5aCHs4gyAexJ7RVaUn5VDcKQW2JgxENn1ujGzUXvc2hWWzbMETEb2BBb3Z1x4czig3hRtYCwaFEzmxnUe2ycPck2",
  "key41": "2rsV7dFXqMgdww3zhanrCR68f1QSNDb7mH4H39auK9kxtE7po2Ht7tFUwLJ4ktAHa57i8XCMpHZ4jELE8so8uBnA",
  "key42": "4iEbgVe8J4ZLhgriXoBphFNa5DUzL2RcQCC6Bx7m12GK5o9LS3kfJjZLFrCKxu5xcvJKhtJn4PN5T8Q9WHDdzDTx",
  "key43": "5jp4YutkzVTnKtdToKRAXWgXfjKJz1rpY6gmzGGAFMWbjn1jKWaAUUWg2QizWbZjyvoqDESXc2D6LLp38oMiZ3Pp",
  "key44": "2FWvRVf9V4ujmXqgzxmFhuKByvuNJNiRp2QZHLvyPUZCmQXRupCMtkQG785tZtbADsfb9bRH1MBLEKairqcbxTdT",
  "key45": "4fJ9gD1Rp2TLiNDYZMM1zRhFtQXb34pefUnTUb8VX3wvEBqs12k99f98HkSoSSNVAXL6FeRhWHnHFPNYqv8gDv5n",
  "key46": "8NRew9A3MA4KMkdoGe3LLQC8YjfMXGBHfzNNmFhTHMgnotyizBk17ffMFL3tvaEGqLnr2uuFfkbkZ4fguPZjjEH"
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
