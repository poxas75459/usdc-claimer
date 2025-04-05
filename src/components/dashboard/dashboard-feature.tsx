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
    "4jEHcs69ZJJM5mQiHmzPEUcV3sn5v3keQ49YVErh11XxB4b2JpsUm2yxu5gEcX4BpoP4oTr9ZzVzqn6fgAnEPsJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPRVt4PQWXxuD4FwjCqmRGuZVwR5HrHT2hBvuhu9xH3pW1i5eN1zUAzeuMYcwxheeavNqJfCFiL4vJPWhNPpMMu",
  "key1": "5bVku8jRcva22BFAmDN8YuMWDrJeYNvNY4GXN4npieaRQaZgTPZw35eDXCR3ifqgK4wuRF6t1yVkUWCoxHLAUeFk",
  "key2": "2GeWz7KENW3BW2G7iATgrTJeB33xN52J1zJGEnHskYNMgFz5mLutR2XFF2hd4bw4n8Vm7GncFFbn3noAsZstC6yr",
  "key3": "3GTXk2jfXtJ43L1mgb24mrRgKyuYAgGRj5Tn2LJW9Kb9R2Ni5CoaxCXEJiKEgqYMFXBvRF9czhyegN4vuMdCUVkt",
  "key4": "u2rmVx27wshyDuyVbFWmTE6FgYVEc5ewLoSY3TXeMrvT1Jvw1qxyC5fCd8bFpZcWvH4pmGvMd6pguKXZnMAXYHN",
  "key5": "3M1292Zyr62ZBvZEFRDNYtFXXoAZSH3hpNk7jdDfiaDjxnAgwqGF8LaoPThQAQoeWwF3u7UU8LpFnVLQMBeWdR7R",
  "key6": "4Myw3DQpgSvG4bvynw3Dc8g3Dwa8MTGxLkMcMCnWLhuKDJFvaH4E2ZSMQnjFJmCEWLM1ijSjtwL7i2YLqQ9MeDkN",
  "key7": "5AAJ3n1L8YU8XkjsNBWavNJETyMqjDEMCeBs8UugpJCsfn2eG1GheMU3Yv9Wrz7J5owKrv1cKbGTGbDSqKRM5qvg",
  "key8": "2GYD7mpemeBPyBBceRfDcc9nstsw1iSHRSc1QfUE4vto76sT3WMh9ZhYu4B1vvgJhqGLQigTVHuj9Qyui9CqrF8X",
  "key9": "2GpS4J6v4cF2mpDfJYvWWLfoRymKm8JbJVPDXMhnBbyTaJbPinoRHzRZcaKZ5eoZeP34FjBcrSCrJoTe4Y23ExDo",
  "key10": "41XRTeZpCsrjboxbUCa17SXPnwyq3QpCzKuhnmWZMgoHbxmGHrKD2TfxJoy2Su4VMnsJNJi51LDgBSGcZRyQWdaL",
  "key11": "5vEp6UTDS5LEYjWHEzokQmrb8wx3n7rwCABU7HMMLX4v3ow3s6Cwrvt9XZ1UZNeUu4r9eNW6Bgx6VdLWvuPjrXzf",
  "key12": "2D1UPnwzt97X3vUo9HH2CzjTyB3ehTR45u19wiMRW16Bx8C5RdXuXftuXr7M1LnnR1n5r6SAQEvVNSLgcj9WoRy5",
  "key13": "4erECSUzb1ip41TtsJvhVPGTV9xiQNvXYyv63hq8zQx93CDw9QzDmzo7x3cQKrfpEt9AhXodKTy3SYRg9kWr2xCm",
  "key14": "5xyRD3r7yRJHKJU5cswd9JUNdoC9afwJxPuZfwwsKLFZUR3DGfuSrbdWyZmXQbBs24bwuHHFs1Hs96H2v9GFdWhG",
  "key15": "3ccgVszrQhtTzhpSruv9wqqS2LrC5UorxK53euAAdQK4zrVPKpcAyBepeELNdHuhf4XCmrBeoY1nxxPeN624pKpU",
  "key16": "5qhiY7H6YxhrvSptJCN3PYpX2Vq5M27DYei1mKYaeaJz9XcZF7gZJzohsGYpJDsAxtgtBJSTq2DeLWrCUB1TRBGn",
  "key17": "264KigrEkWsovAFbgGxcC154u7kevAk338m7F9HNsxM1cBn1VBKNvynADPHe2bR43FQct87bTzSTDDTvWkXsGbc6",
  "key18": "345BNeiGUrUCdWHxWo85sVJftrqneAcnj7D53prfi4PoKQqGDj6XWoMypmVMjPSk1d7q18otLTCGY5QQ31rb6E1G",
  "key19": "3qMo14htpXeKKow41PNgrXrkgob3RmxV2qR9qZLawNVxgvktBLPbcFdjXJisw4pRdjbUXAoHHbEkmEomLvCuqmJG",
  "key20": "4gWzW1nv8X1mWTHUKnkWrVnttDgSCfWdzL9vdhANfasWdjGcVn1uKsYkGP2eggyngqjf9nZLK6yF1PHsapkhod7L",
  "key21": "4wjvXtGzhXLCdZqUgpjEDZZxfNH1H29wsZkbSKednXfna7xd61dUod9oGobPJiFhhaRUiibNFZ7uQiZzrdnnGjLm",
  "key22": "4HVaQa5L6bTKcZquu5s5864J9dyD3k65P5KMbQLUSjb7dXSVv2DwGbnYEJw52MbigyABq7uoMduB9jrDFXDV97X7",
  "key23": "3GSM1DhZnb5EmVy3tmTmPEBnzJGMpxN4w7pqWHuXvrXNnpZFnyLst25tQxC8oJayHTWnUgYxiXBWvj644hY9BLsW",
  "key24": "28UVEyE9EmG7AT9wUwB1YpsakJbt9sRePcyvQMAvBgW5uLu9HRyQwFgChWBF4fod2P223vbkNRedgR4zGwvhXwkH",
  "key25": "2uaDETZM4NPcQ3jqWoWgq1Q3g2wpJDsACniom4ZpKC5rsjbEhyDDxLrCnaQFcA4eWq1VQhkvs998TozE2qkbU91e",
  "key26": "QmFR2UbeET7HcXEhMvzf2ECehsqUpNWQ7KWubC4vUBxLDXXZ62rWUr3gZtmxREHVfVVRthgTd8ygzxNxsQXxE4s",
  "key27": "3pUGHT6cMXp16k2WDHTTTVjSQqfHc6ijyEd9mtjdKGuKSHzU4tM6xUnn94k7wW37joGZJgTTqSx2QXYv8ZDsiYDH",
  "key28": "2PaTikv9As69eM492DDe3E67YzV2M7L6LaTvF5FpWQNe1zejsbxj2Bh6sS6HUzxKBpL3LfYPjX7XAzfZ2Tdno1n9",
  "key29": "2pSZEHwrZAteVEu6rS4FGgoXDbxWsTJ9hdZtrcS6SqYriRuttPGsZF4jS19tZhtaUZg578J4EJgjnYHndFVXf9zY",
  "key30": "5FtJrfnXT2JUfBFKHz8ert1g4VVeQZdg1FkbbvLjFdwmPmjiXKvSnviJCNX3PThL5eSJdM1NYZfd24dxasXCyJzA",
  "key31": "5iiFHfESoKCjYne9pHGsPDTMtd8fKDDQJ1he71R8mzsVjYYqBzNDMyB4z35yaMJT8tFkhvNgF7FSgynvcX5nBiA5",
  "key32": "3Sqmd7iGVsLbyhfqVvL5JZSuXaCU6cBMwPpasSjeMwjGRhg2uzE9cDRxqNBdaHS9Fiv4y9xaNtsEJPLcx1HNiRku",
  "key33": "W6v5SYZSAA3uFg8oa3UXGKpJS4H1g9tmdhVQR8Fzoh93kbi4bgTuNRyvyHWBCULWJa97oj6EVMGhGxUx1G7VADQ",
  "key34": "5gWpD7K42UJ464jWJir2NX3SBwXRNV6tEJANAd5rX1zWXmxriVYEnJkaCQvNC9BTpYrH2zfGH8zUgAkN4T92uG3e",
  "key35": "HTAuBTpSvvh5NanbmFHkX8FdMKiVDsSXaArQyT51wQbnCqTp5uJF7ZzQHhCP7VMQxaLhNeRi8uCikxqQApwJ9ej",
  "key36": "3bBb8Ud7Y6ZkYB5oNsuNrs7KPFnx7XY3Cegd4SVwEYZBpCNb7SFn9MDJriB3xEbCtEL779n2gtRqr2xo161UANUC",
  "key37": "4dtN62cdQfAEtd7cyzrpRYWh46B6xQ8qXiooAJCCucY1uQ844EriXPpFfMEGYPkmirCDKkxdmTB5qwdhaLQGxhZU",
  "key38": "5M3hKw4mchPC9tXPDhHg4AqBxiYURYH78yD1YhctdmG6M7uuFnACq2RZTa6Zx6Ymy84xiYvTdUDXcgyHwd8kmpaP",
  "key39": "54fBzyoDT7ToF9xwThwfyt6S1HWvAdyZdjvftpWyQT8ZMv8uoNoXpDXyPeJv1EY63QEA9woVqTQJceKtX2aJp9M5",
  "key40": "21G5fTeqjSwFQvnR5ks2SrWNvz1tjcf1eLEAF6TTNc2U1CR2muviFFJfRhhJWWwntKwaK2zQTWGntraQzdUsb7D8",
  "key41": "37ksFGeiXT6Di54XZeCLPYJ7eoNqGgEsafBt7Q5cQeHJwa43JCoP2C7d7azyd6tG8Adxhffepq4smmfijN5bjw5t"
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
