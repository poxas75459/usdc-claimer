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
    "4VAKLnn5xVpStbZakVQ9LWdkUHehZBPBZNSze3jSFMeLCtCjAxk2isnzpSEhpnHJdJrHt19vR8U3h8ZwbXNK5Avn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PT239sVoFMMPj9irkgr7GrzPFqGn3ii5a537fD7nSD19jULWXvaFHW2XM5BuqzeEp2aNYGde8jYwVWLgMiqN8C7",
  "key1": "4pRQTRbeizhqneHitcaRNSzcqGNhEE6T6fBTwygoXdJGrHgRH5UBpx866oGPHb13qqUwSxuKxc8v7C52RhKeaXJf",
  "key2": "XQeNsEKNKgmKnqsA9hcH4Uc5dbNPPkWngtGcjrYRuMYgedcFAuBQQmrVtAbP6cCcdLVx9meddR5TnrGhVpPyuKX",
  "key3": "2nQxxEET3tUgoWk8sokXCRynfxM7j4MbBzKDV9MqcRmnX3j4nSik1pbaRSsj5XciE9e2Fsg8dP2J1YczbGwxt9qn",
  "key4": "5cZrGPZCnkNiAFdm66pLFVV8nEVVjdFyHghzS1bJY3jCsBaUzKMDbyriBSZt167e2t1P1tZ2T8rJDkhBMPsZyqAU",
  "key5": "4zfHz3KiPuvQfcRYmJEoWF98P63iB4w77buRVeFiqmYnJQjWDU1KpuZvLBEnoVsxktCToYymbC2vxxiUaXusfwvB",
  "key6": "Ke1YsM37kAfBgBysU7XaCYNvQUtMgotq58pqhDusfyunUcHwUVrprJooS4U1YKR9NjCdwraED7uefHmngukJi7c",
  "key7": "2RThSaoQfnhh4AGiqN8wjnNEFQ1Uj1zmHwqCsfgdFpcTSDqkShoPCqHEpX2S93DCBjTYnHy7xwixGPnNiGGs1ePc",
  "key8": "2g8FP3XaGeeicMxxED6Xd2d5VCpNJ2BDgnsqUCEddjNvwTTnoAzqj1AunDwgeEsALtsPBYoc7g1rPoX9Q58zcSSQ",
  "key9": "5vxKcpQSVwubkpcKejniACcWB1s3cR32X86JASD2eXw1HkqkJeZL6ygTVrz74yVPNzB5UsUtkyTBCHjocr5WpTg5",
  "key10": "46YNMEqirUuwJp4yYw4VWUvhNqnsURqU1AEdko6UrvutCFXCCJFYXrwX8XzGrHgww4j1f6mH8DBcZpR79gWaMEKL",
  "key11": "sSsiJ2LtrDd9hG8WdRtQyz8LpUG9ivbEhDXU5hyGTgxvsn18DviXEDr8dXNnMp9XSWowqb9N1rLo2kb9DDcTs7g",
  "key12": "3ysErEcE6PqNwvRZWfb9HEzWcQZisJ6ZscmE6be4HTL1jnTXk2k1CvnCtzgvMFfqMvhyaB7SwMocXYpLpvyC73sN",
  "key13": "SCk7QUefXZLb6k8HVn4N8R5KDSUqumg1iBjUCZaCvuVcySW4fT8eBDTD4L8kUt5Grcw35UeKZnoLCW49sp2u1xA",
  "key14": "MJNFAFMbYQLw4qGYUuRPLpnrksY2tmUGyJTtVLAVz2YFirH2U9G8mQeXCszm7jJNjDq6NUZgZvM9gFZ7j4rfpaW",
  "key15": "5PnAoxvWQm3JXcyW6UdJ7KfyqMjwU5FujoWxVFcZHPqkAhGYTrT6kV2UJAxM4SZ8NJbDSxvdovNpbqmegfVbZCHy",
  "key16": "vLZQW9uhGhkXEdXoGYX89h7neutNDdmw2YyN5krG5tAxsA34vBNcMDLrxZcha1zarEAsr2tTNjMaaC9pbMRbe5t",
  "key17": "4fkLd6rRRoG64Hh7t9wpHhvs8Y4YEmScH1YtAfvCgcb1mWSLzszhUkcj61hD3f2u8Z7ioboYByKnWfRaR6Vuhutn",
  "key18": "sLweJ2q9BjoMJSMwLzmwBGnEhzs5ig2ABJxWD84xTs3sxVSzTWt55p9nymh3JimUUGnHupfgGrD8cx5pWwpgnDb",
  "key19": "2nuJ4wFY9y3us7gJYaANmDrzgaGWvy3HQzBhfuwM3vLXyF9QhJPRPBpicwvZTh97vGhDLtNffSSDKf5TBiFrC1F9",
  "key20": "5fRd6AzVT2w7x2ctcVzwuM2LmZN5uPCM7cfynqdQDxXDae1wYg58RELtuNzD8e6ydR2biyqrm6KUtbaU2gxvWkgY",
  "key21": "3QtSGeb3TMj3S5vLphqLTcH2ufVcXgbeGGRKcje8yUoWiKUehppjpFeaMTKY2G4vPxJPizich9syqfECw79UfiXv",
  "key22": "2Dog2qobucxkQqN3Sit8JeAcBbSQY6jpcfmyFLfKEeGBy4T1yxHNQFXyU9PAgmV18BdEYoMWq3J769wnrDfcjHSe",
  "key23": "Y9HQUErswvm5D7mb7VCDmfgHgxLRDugWthNn32g5xRBTG2kLTwUADEKygZMGJYJrWYjPzexGihxqUNMevu1Et9W",
  "key24": "2KBxPe1KYLzh1waHiE6sXPqFaEuex2kbkJrvveuakbrSUjkD97aY5BwSmVxFfZogtGHwDPcujrunXTRbiwT65ueC",
  "key25": "5L3kFYUxJK5im8ybAvMoDayuhhCZX4vYx49S5kcMxwHx3cJbi4Wt7PyMWripTPoAtPhmbfF1cVT85MURSq9yp3YT",
  "key26": "4ekStcVb2Rw57EWS9XLxVmnhZVT2kQdibuRG16nvEwwRxSxid5ZQK4uWneshgbFknju558xrX3R64AxjL7ed1277",
  "key27": "2FctwbxNjBx6kvkv9gRDmbRDyNfvdNxn7RX9o8D2c6z3HtPGj9uzq5cuSC6G5HCBCNdZTSzDqoLz88ozhBjSmwyn",
  "key28": "hHVZQXjYHMGrYVJJ8ADhX6q9X77zrzB2u88iBjjCAo4i24o5HPpCpGkzzky9sDwwGA3mF8TKdCrRFBofYGiDFoH",
  "key29": "3ruQoRgRqPV1KYHsLLrAEuWM5wfswm6ushoKCf1v4xDgvbnJLoWb6doGrwj9Tw5Jqb7DA9jvinkbNpTZKKYC7Yq5",
  "key30": "5n3jr7caoatnQtMafRPWnsJXDTwYDDZSFzs27nmZAoRS5HuDDifes679WaNPhwTDUC2z7eVEPd61i6hQCBMJKmev",
  "key31": "5mq7WbfxPPDSYc6Q9t5hBUiei1Az7DuztDjNHdHGUHxeSjc7M9Uj57Hsk1M91Yju9idNk2F84VKTnQDeYMHcxhk1",
  "key32": "3UqB2A6dUeKSNat6HAFbicmxyHEY2CPNebPRfVZSkGdeciSz5UX7CvrRti7Yzh1WUp7hCmkk4j1i3mvQngopSm85",
  "key33": "4yFxWb2VAKMhDWDT2Djji4YP8daSvizemDtjqieCetwcimo37H6FRXJGFeES3YCYtWjkCaQLZrxB3nkAqvpBgYHX",
  "key34": "Kt5AJjMBxbwJ7hzvJoSRVdvzya46B2qmgYFXsDMf2o2kcYjc1AEN9iJU9H473LDvM68Lh8W3h6efzhP4rYhwiK9",
  "key35": "4RdqjVCTAJvWuJh7FmRK9hzakCpwJS1q6vGiTeZzGRx8pM2A2MmE6ow2pSkVo2fPy2NnJDznu6JFJqg9HJ76DZDL",
  "key36": "481rrGZ1kKAoFtZvMEQNkEfj9jgE8yKD6Rp5Ujzo2Ah4LncKGnkfDuLJwvonEh8Fep15pxgnhyD3NRcH4vtm3wZu",
  "key37": "eQ9iF4uhSEgsMR5KAS6NAHjKNbwK3L6fHxxFUgTyzSRgcvneoUsgAVz9vT1NMeW5hynJiUhCUuedDRRV9TMMV6B",
  "key38": "25h7oYKZ7zeRqdxE6BDs7tmQf4AMtUwZhUxkZHNMMhKmZEUUXK2Z3jG9z6yvzcDidkpB6ch2LjNdcukC2896HNAw",
  "key39": "axdanmt6y5bUV7rawJgkwz9vFgLW4ZJSvBfxYLxSCtAzgBzH5geuw5x1hJbXeHexwe9EVasUrepKUNCNc2PVHvK",
  "key40": "LVPcxJvSkh4NHrQMPAw1tZoviYQcuzwzMYGF229tFpSBDoppsmac7CnpRbEDGeFUjB5dUjWqGBM5bSeEL4CBrhb"
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
