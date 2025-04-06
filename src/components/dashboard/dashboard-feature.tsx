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
    "65gAb7TGp2FnFF6qoA1AqPi8rYTDGd5uJEg1azJrNNbLih1wsCAG4NevDY5Gp8f7PZ51vxJo9ydBQKBZbEwaZ2xC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTgXZma3z4ugcykjnCDk1zVRtBrMirvqhBGPHTvzQejNYD4avWAmH9aNVApbJXfmd16VR7JR81AiWX6hoEhA8AE",
  "key1": "5e1SdR35iQHC8UWePWiuN8upjQAY2iphmr4C1x6ts9zCFbuCFkywjzKa82W1UyRSbCmm6aGKWaGRwHum2e2w8xGJ",
  "key2": "3KJJBAmxUUPGQ1ZbB9yXRmmeXghr43ggbUnP3CUDrihjmpp2KiNx7TqJFdWCjhRbxAA5i3ZhPqztHNt65wpZaLkb",
  "key3": "2gW8imsUSo8je8ojxZLXyjnDvCuLNMXtLe6fLL8ybpFbmH2XxYPvjUXfPqDD783CzuAa9XmtCjRHhBabFTu5bKME",
  "key4": "WcpbajvZenqT3UbZHigVqNa7vF9i9jsWxw5itprv4jKPXghUn9ajM54nwrybh7HuvGfEFvweUd8NfoCS8Qt7RZw",
  "key5": "2zKizG4aumYCvo1QD2VZqVws9nn3nvkieqR8kqpy6Ja6bTXg9s61a4tm4CDwrSi36UmwjvSRqJyKTcccfLGyoMeg",
  "key6": "WZJo3mziywdDmJhZa6kyCWP1MrtffWukxUCp6vVVDCvwzeS9asjSWjt9c4cr6VYssMkSxHCVvwbBq8TG7nkAPre",
  "key7": "28ghanB5xPFhgRR6Dhd2352CcCsLKJVUHpNEA3jdDkLcNtEWX1TTU4a44CVTcSaFGxNpEqvp2j9mv93MDSKx45Qn",
  "key8": "2xkQXoUkWF5RQhVo3g9kXYZrDcMa43Mq91ADUQSDkMyfmant9pfp2xnXLdZn9zeXxuTxR2nQ14SrmDNmYxpoN98P",
  "key9": "39L3f5xBLBEZoBFbq4bfDmtpXX3eojJb4jVm3NnYhSaQaRMv2THoBrcPRS5NR1MsUG75JpCgCPiR2kRLVbwjEpzF",
  "key10": "3wHZRqq3atZtf7FAqL3bsZTncYa4V6dLAZNfkAadn12jBE3NK6dcFvb3JEMmRYfGvhMjH61fSYvCeuNBPWNNSgCV",
  "key11": "3eGsPS3KFm83furm83EZKrMvj5KjauD4VbBhU4TrtvGMtBMcmBmGwieBqdTSKg8RJycTKm3ycQmkXQnvtJHVzDPt",
  "key12": "3qgbs2xLG5h33TmxS1sqimVv1VHRGu5KBcmtJP2wWFYR22LwM1d7t95s74B4Ve2xbajVEMUB7cDT3HBTRdczAG1B",
  "key13": "4KethQ8qpWoQCMaN2aHqSiQc1vExh8unRex6REmYUwxWYZizTpJhSrDXNDun9dtQ61Xqg7BhMiiB3sw6L6wvbCKD",
  "key14": "5Pxb8mTtFhb8Yp5ZNA91qS23UJhSkPe13s7ghmr6cJcthqzMiAndpmpS3uThZ9NUUyWxPJCFFVGDVoesh6qSkcmu",
  "key15": "3cyACQFmwAteSrww8zMLNc8A8hYoPm7NsZBtJGee1hP4EgANP6ZRvgV2kBHhvqqmN4faRkgifMeY2mkDfprjkK17",
  "key16": "2vetbB42uGTah2GUnDD3sr8nbwRNDVZcQBFgo4MgKFyVp7YwnJHM4GQ2K1q3QqfGwhQVhyhG9zdUmKtGYqCTWz5G",
  "key17": "2iA926kr28q8F3t5wG2Z9KmDw8QSG9Z6W3rvnb6UyxBp5GqcSis2Xeu17k88TV8C2jPmTcFNShmzVk4HEb7XsdJ9",
  "key18": "5eHMRvQUwFkGPyJZoKcQpKTJRGS1wUaaHCdJyqphLCssc17CUK3C2MnZSZizxCEcegsuJRJXZhg2PSFz8GGQqzf1",
  "key19": "ttiM9gdKu267B2ZPyeYX8YtpFW4cFuxpudxqBdL1snSDCmcJH9dnRi2S6aS7rvgcnM2ankmuRnqmGu8jKypBqiq",
  "key20": "4FenjF3xL7Ez6MTgXuYc3RkiviDbXvhCtYLAEu3KYHhMLPBM4otHjd3MGT8JhJ8MhMswfaE7BLpeSCz8XKKmTuAr",
  "key21": "3nhMk44fQ1xusZTFzpfea8gF7nwPmWkZHHGuoYVM5vE5rJ2fG4LZGdn6i5C7zVP91QdMWd513F6RBXuBBPufJ4mY",
  "key22": "j86CpeUnHksThVkcKYe25x9JSAgDKeJ9hroLNRhsBhn6P5DyJ1E9LzgUFv9C6eayC3ZppqjBFiqA8fVPDpgm2qN",
  "key23": "5WrYbANBtMHtefgntG58U1L7818k9nxmyF7Ykb4t9vrJc7QPBatQKufrpoRuY4FSRQ925dcsDa4joduYSVU1EfDi",
  "key24": "3YVPQbDAPKzkecFniB29NKrk5NC2QZofZ2p5QszGLim9WYL8teQnn954nij68RZQNEbM8FQdkMzxPPwEnXWCPuTZ",
  "key25": "5khQyBSLC3zYTh49D3RWkLvYkKfQitdJCzV2SoNxLKJWf1QV7i3hAKtdt8LTJR9BCawdxnoHCHYhXwT8gmBdLCpt",
  "key26": "4em3aErBju9dwYjsinLtrQ2JWQ1nd5HXSWckP6oB8WYncNTipRgrz2yCosP8fhkNjoSeuv9J16KotmeH6pru3aj2",
  "key27": "GqKz6os3MzhAUwWspm44TA98uYnsKvNKDdU2cKtLfMxbh6FZTvUq6dxvuUvJUCRMuh28e1sTYXP3utF6TA5ct9Z",
  "key28": "229vELje9P5MjaNM3ZGuXcTyYSxvyEGrEu621e8FWZ55LXwq5o4ZqByxZVDoSb6fDvFJ1FsG8erLEpWcZJBgHBz2",
  "key29": "2NC4JVe1cG2cfXPziFAKcU9uWvCkyDfSZ6kV6VLxCHMNLPFzW8gkRLNfb1hSDHV86nHKLeoLFnfTAXjLMWAPSA8G",
  "key30": "5gEo1D4dViXxGpTrze6kwvx2fJDJXm9yK26tKcwRPNBZpdm7kMvXpoAVy9aKa7QYATcLHumhRi2FkmApw338ApEn",
  "key31": "253iWCKwBFU6cqg5PLQZwrV4yUFj9d2ywkLhFBQpVqjfjVqRW5xEZMoLEFJGrrocUa4nihDAdSV5FTN6NVNEAgMa",
  "key32": "5f7NiBXABWrSaRXA1CxSngdmfGQeVT51toMCwP7rZAtpMJujCkQRFvag4rXuuL1ZvtsJa46Hf4NpJHGbPUmtiPax",
  "key33": "4v2oG83aNeDuvaWtHo1u2JwhszAqNqdmkQAJN3g4461GVZYpUHTDNRnaP4jmo6k4Sh4pnvJWm1qjyg9b5JLmCBpT",
  "key34": "5qU9ev4YjQZo4FSTmzPDeo17DMR3XxTDZ9mY9Hba7Z94qLp7But75xDGo5cSn2qPmxNnFpHTb6jK1T4huAJ7YEaA"
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
