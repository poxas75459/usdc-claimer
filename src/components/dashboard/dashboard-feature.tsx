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
    "25rwuGyH4hZ27M1dzVz45DcuH4hZTREbrHRBDjja3YBUtABcxMtG4BEibukHxVvC8LtuncGgPuEwVcdJZXSmaiYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRQ1gDpfDKXDHZdA9eW9xtf5Z8LGjvTtK2dfng3aNaV5ksSYivz3jhMYhrNhArXPVXXhFBCEjAJVy1bFNRJTxWt",
  "key1": "4iJZdhsdyZRgbU6pCUfk1tYhRobrLfCkhuBkJZJ8xyur2nrLwkZnRgU2yHHWBjkk3hEkeS12bkC2mc16iadUX9NF",
  "key2": "4B2Y45tJdfRbJqsXnGGic8XuuqiEk6kdPQdbge9XYq4i2HgkcmNLxekznpss71oifu1ZMwrhRMDhGaW1yBUFUhKo",
  "key3": "51qWtErgbFMnfzQT8cmRWyUGAFdgU1GAqSBcUerDuj3ssVRcAVkJEFFqAaTbYC2y1fBuUrjZarcdNkhBHd2EA4id",
  "key4": "2SSSWADuu8CdpRfC1SPV5RxPBz6Jvwv1HgMy8UApL8Tkraczzaeaeqb6aCLbXESyNG4jibU48gxS3ugTjcLXjrsd",
  "key5": "5P3MnQ3LeVmGaw9RBkvSVXR91dramj56ZhYfEUZZ7V53d4LPu8Cnd4M5h8DoMDGhS9bRGM1DP8FppDgRzgeDB2cA",
  "key6": "4yPLjkRt8sp7jJtjNcPDyHAXDTt9ZdRtj51BxVBNMNS7dLAMiFBLFgLwrq2m1PFKjiJjUi4kKvAcZwHygghXioib",
  "key7": "2dtCfPtCYKNSpjF7Tq7Rqxp3HUQBAmxuPd3Wzf3AvSQ8fr8UEE9cnGHp4CkP3gLVyTEYk1Bxm5g1UZ1bEFoGrKG6",
  "key8": "3uqxvL6DQg6VVYKVWxJdYrZMa62p7T5EnqLWVWjXj86ES3emKUNk2XTnfZoZeCvaN28A99N8g2gQy2wT949j9kKw",
  "key9": "4LvzhWLep6DjFTYD1rG2y9HyxAYx99rCdgZsNp24jVMPaczT3CGL9wbgx6hh7RXNaSLqdMtSYjJPSmzekaNu6Y7j",
  "key10": "cvZ2gbSSizS8Nv9HkzMrPa1g6kqi6r8x5mQxgSYQCbDHgT2YC2iaHsj8UwUgjpNBDwKKichSLaaLRFAa6xrDN3i",
  "key11": "2sc9utxSYmtVXtPML2fLNiMngF7reK5vnb7P1VPN1Qpfek3B8jUGcUKfvGXMpAw11ouAPJowg5XpsrND2VcHdGMv",
  "key12": "44pJhXsHr5yYG8Nm81vLJrCLHxVoNt5soh9cNDLLue47jHmyj6AAqp1hgd6WxWPjUaQw4jjdQrDCrwzQFGH1ihxh",
  "key13": "V389rTtyWeBES77bpgnUW2hhFSMj4irQ1GDwHWThnycbRMUtcCe1KKYJag7cUbD1MbxoSu2gBMATa2uoBU4MH7h",
  "key14": "UvqL9p7ifbBRkjVkEBzxTnuSAXZg9dFgCgPEk85tnsSGP1CndkVrBNXJsCVA9HFfo9mr7U7LCP9o3myzhmhGQH1",
  "key15": "5bepesBktGR5obWfBFebVdDGRHMssndy4VkcvMQJ6pQL8EmgmwFasrFznrbu6LesJrQXL69CVhYvewvmbhVYThNL",
  "key16": "T4Nq5aeqWrUqgzaFvzTn9KWs2zpzXsNEUhYW4vS3RjKyhpDPMYRjPY76st2hkkWZZfdfbweUbUaE3w7gH7BFQRE",
  "key17": "UHSTq85BHVKWEnju3LrG9ikGqwtGhNyPxF7boZJBU3LvbsgHMrcAfHDzkshh9MfZ9ebnGf5RoszzRd6isVRsQWP",
  "key18": "5xVE6Kf3mUdK26Kvbam8Lgoz4ttk9zoTdkFzqSVgGWDepJV5ujEukeF2S8CFFyj9LwWHqUScjdRXkBZ4ZiFnWsmu",
  "key19": "24GJgvjgcwHzdkzcwpzyswAia2Nj9sGTXwphdnSVNxAv3ZWAQZpTtApX18g7UCUPmeeBEncKgcyNsWdEPD1kx3P5",
  "key20": "2BHXV8vjr1HS2tDrKMeV7bW24DXmY98v34prSvx8yKZm3GMYS5Ly93mkx8NWGB2nthehHRDZMxXV4rbPDE4msG2Y",
  "key21": "5BAGAHypqLrhwUuHjPQaNbAvBc4sMyZgL23hZCQVSmRVXtfRtqeQJopLovHBWSkHchYb9uuEy8YKNxeAPbJwpte7",
  "key22": "2fTDA9qSqg7DRJ7YSz6prrPx7dgLfPxXJfMxi3iiE2Gz6NGWtVEc5YfkfL2rUCFwiR6XM829TKpdxg6BfSKG1YbU",
  "key23": "5xLDx8VTgNwCofbicagg5xMjktXrKJ85tKJnyfz6AUHexn2DxMCmPJRVY5ZVDYTbwpBvj1Zh9A2GZqyrsNEmei7P",
  "key24": "gFDiSt1KwEioipXnbs4ujwGsmXpaSRNciQr1t2GqXAMhsdZFJNw2i8GAhqs4FfCd5S3MfVM4jNmvY3xhLaRSPJs",
  "key25": "26xHrBBvKZXGTBsGeFdd2DMdTa4EaNg2vUKc9RhQWJ9y6ANXxhdts3bh77rPTSotsM1prrBQYRG23gxDfMn31zHs",
  "key26": "5zJiERbZnyfrkPrahDdai6KFpMzJFShrHqbfXiJckYEn8j7MjacWEgAA3wr8NP6UsWwvVV3ZGqtF7K6inKLyt3z4",
  "key27": "4VHvDnRpNmGYT7dHR7k6K9d8AwTD4hGAuhZSPigWnHdgej4hJtaoGMxXzy7iA9Pr1WGgBv26Cp4hUQpuk5wvAGwk",
  "key28": "2JGMPH6QLFfmp6dFHt1mncEXAkePcZtAVHPm67kd3LPq6ZYmK9Zm8toBXqoCNdQKqZBbwyb4k8psWVRM5nhtSvty",
  "key29": "5n67K7rNqbpkJL5LjXuo3i4t9cGHZBdDHYukNTWNnAyhMPgAgKHf4zCm4cChUgYn1ut6SSP23Jme9AoXfZSpdzPf",
  "key30": "4PQbfjaX23P4nZ463jN1PxkSeyH1sSfZChoP785yxVY3zrXkTdTH5FYcVtqJcUkoR4BaJBwr3ZmFXxwPJ5oCMH5h",
  "key31": "4Sb1Uzhg57MjJzxrZdHAyDm3qqjGnm7omo3tL2MeZuYVwjkX28KYR2w9vEo2AoSG8vWQ6X6T7p4YyyNd1TrL8aDL",
  "key32": "4a1w4MsFCqN85M3iW5BnoPrE8skZaKdSMFccF4zJojBGs6bMRWWFMymsXH7XhdkdjJQ1yUuY9dV1JHsrxSiNsD7j",
  "key33": "5dUjG5cNFvXcfASDhkHkv9jqWMJfWgSWoHT945zsL7dX9Lj18TPB4bwp8PzwccpiWWekt7hjkzDtEM2MLHDRiLFk",
  "key34": "3cMfE1y32FbypRRAJL3dvCzzjPo927H7jdJBCqhi8DcTGa9z8Bt14GJMRPf9KV1KGgAjKbMA38CNEeySCASdLRgv",
  "key35": "Em8Pq15i56ULRhNUmuLDfkEb3p1bUpmSvFUQ76Ach1Q77GXZg4qTziL4pa9huPgfRm3RYv564VaNhcEQ6TPh4t4",
  "key36": "5ZUX3DdhMKpy715xAP5msANTfqg964PH6eeLPSxNyn5CMhttVEcskETQeiHhgS4UsScnLUWfcYQp4scNHofiYFCQ",
  "key37": "DVExnYGmW9aGXtN9SQBVdKpmqKBaYrRMtr7Pj8SCP2ooxSRtT3J26u13JVviaB9cBNuG56X4pQuTCP8WJ7s8QpP",
  "key38": "4TeMd7K2K4hjDLNT87LmxAq1h9UtUWQDk1Vdb6YM9dts5YKGcfTcnCdaL6PiC5nKhraHwu8Wi5qwrybze9MNLhCm",
  "key39": "zi7xeY1oZNVLX7HZ583EtrK8bzpZuGr32xLz7Ttj2ntJQJq9KjWrHj1qpw7kuY9NxNio5YeP8hHY1mKq3BqU8hE",
  "key40": "L6qdYxjfqNd2ZxNytNYXGx13LxrEwuvDzSp7atR4KHj43neNNrNbnUisx5u9C5YqqRRBkrDoVfBq1WZxcPQDcAL",
  "key41": "56CDFCSHkiGBAeamnDPMyp5yhpKNU5utDymQkw4STq2WxvWJBDymWZZLVWScDWDqNsvzArvter9nLJvqWTh994c3"
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
