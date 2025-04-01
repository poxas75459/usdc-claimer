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
    "4honJmvHa36pAWmXjUJbegZTjxQrW4zvB6Lh7Nd3ax6gwZ1MY3aPxZNEsQeYewfjx4pTXDABgqGFmx6uUjuzhcye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXCqFWcQfXmHHDrgJSdiqHcnCJR3up1YE38fVe2sUri6CUe6zKbPvKEshqz5g7q4TDsrpnfLrhPzvFhR1rk2LAH",
  "key1": "2jMNZktJpihHhHu56yXXHMNx9YExcshS4tWDYGUrsqNVciZEJv94ybDzJCdoXjJdRx222V7ytRUhcB2uKd7zumjA",
  "key2": "3Dh8XRF2NCioVsstQWRRvUSFfrDFCVGKnJETZ8HSXwe7eVzVq2bVkQoU7nm6cqzv3WCXDw8FKnR6vA9aCefjWokV",
  "key3": "5HK9ZLPBbfra28hF1ffqazSijv8G4nkVmNuGQzS5MqKMnLYQsyq7xBwJqMxRfooa35uEoNv8GqoXFbtH2h9ri3NC",
  "key4": "5sBN29LugZdsuRSHikJyn7piCrHP7TVuhbn5Cm8CVM8swGazqLhCJgCfPc4LxEpSd9m3pJeVyFCNKNPy1HZd5Why",
  "key5": "27bptrkJb9wBamWq9UuP7EGvF4ixm1YAqQZxeA6BxcVcfiB2AGizu4PtbphVj53KQ3ypUAE1BFL1xX8ZabTcJTqL",
  "key6": "5FV8GPxnSp7gRRUNih9JG5TNM8KyDvL52uyfsVWGhtSPRiaHksBMwvacRFKwAf3bLqtfCAjFkCanw3yz6hArg1g2",
  "key7": "VwDJDmX159qhRE1iyE4VEKqQ22R4wWEauzvnSoe4UUNLAzVeBVzj6YY6VqUkGWsYTZo6J95hFRbLw5SXN3F1Wju",
  "key8": "usMZ3r5QWUCYJjjFu9MFaW46yCk41XCurg5KcofidJap5wUg9KFDxFRhTyAKJ8puVadU6Ycu6yXaALF3zcqj5HE",
  "key9": "4o9Qi5GzZrtxuEsVC1oJN38WfjYJfcgaoXfoFZRGdMT8k55UzceKQrbrmxB1avvTFk4CkutZ6CE75tGjyUHyTDDz",
  "key10": "3VE1MqM8bDEr8Uds1TSkrcrPceJzmTMtS7x2EzNYoeU7fybEf1zGmrY6L261r6TMXzvB5wv73EuRBGJcxXxeuzpN",
  "key11": "3grdYfq9ovmX9V8wPrwLimeo9GjfyAzi7twZcTQeTL3S18yqWue5xHEFvJDfDBGuLGDcbGnbecXyKKzrp3Se2uAz",
  "key12": "25yQPcdBu7R7xNqzf85UG9AprJmMBPd1UeyAC2ycuh9R1332ukBDHodwdUEKxZshoko4XvxURpGQY2WQYy2mLVDz",
  "key13": "2QX1d8CXq56ESWYLBdWRfcXpP5ze7LiVrzeBqBfzPeFNwJbc7zHBzdv6QGFEGK3XSEdsMy9Tw8aEa5aiVkc2NMJc",
  "key14": "2nVTEdKyA1SEzY1XkD94vKYNCgSHUg1PYpqw4F76n2A499HwuLorXPssud6yZGMNRGcX3CNWmAYN62gBLSgWbFgq",
  "key15": "2Poc2G6Hcg9MG8LmMYnbHDm4koap2dkXbHTFnRbGcfTMHjaSDUP6HtAWem3BPMRjaeysbfs5ztxtTaLB2tTVfPZb",
  "key16": "35V85gUPp6hm15Hyoiv7W7Fbv47NLRugEjkjTXBoCWrNmtqZE1S7sVDAXpBNhhhKN26HLSPfLnXuNXiVtER8Tk93",
  "key17": "4qwDHivYB9aP8pTnhHD9vcgDbyhn1L8smNHHbC38bub3XznNZHF6HaTZkDfPMWPiStWN9bkdQLYbhzvPAy1qs5TC",
  "key18": "4nhQQKLcWHvNpeg4PyoU15sRprkdKVfahh3TryZV9sFHdRRvDqQ5p6Kzh9veZey2Gqboqnq3VZXg3iP8Yt4egND1",
  "key19": "NuAVvZwbCPsaz4WWtCrCk7gVobSCiw9Lh67LF3RUnd7tHjSLvBsNtkJt3xs7m3DNJYoHkWXfGPqeHzsA5cdD3BL",
  "key20": "2CXq5MVKDWmPsNdZZvwVYZD5vC1k7HkDApNntcs7W7Yk7uhXefxL7K8oAuhZC15nNVxWxuHKen1mCpgDL39Ven29",
  "key21": "4U9Qtqj7jLFdsLhgDVaQAZMyvJtJjSy1ereyzT2WccrjVQGRxssTk36rGWZSUqeN39QRZ96jYenbj3zPRhBEsZ3U",
  "key22": "uxBkybPBspeEi1GNPe5Kwzn3Lo3BUBzS6uKy7ebS1AJF4xs95hA3ZW9JhowHgU5ptkEzYXX2q5dtocRCiuktaYa",
  "key23": "51ZGvoCK1XDC4WQj7JNt7GnZGpgkY5M7mmFgjeQELZR2eFnVUasVm7pSs58Vb2eSc1kuqnCdfwgD3VRBhyCRHW5U",
  "key24": "2bd5JYN5JkBL78izpZGL2b6QB2s6iaFTUWJijqdBAhpreNYkJe8p3aZ1XAkz5D3nVhXf6kzdtRCmEqcHvvPH3k8P",
  "key25": "5nz8ZK9stavKY7fu7yg2rub6awN8ASbFNVQwDSvJYQtCcHwTjwV3cDu5SNbmzs1cmHgyZSkNybLCFg2rWiw353Rv",
  "key26": "2MAUh6YoGSLG55iKi2iCRi5B7LrCJAoZg3K16MAaB3sprqU6eT3qxowGjazWXrY5YP1Han29cBEp2dcxwdvULn8g",
  "key27": "51SSBfurfDJNABxng1Pu8ntLWFzqzmbaumRXtHfibd7Ed6kU4pD6sfdnvPNzpW8nQUG2n4LK1ofNFNEMd5bizxKC",
  "key28": "MYvd1U4TdjBmy7JQxg7AHqyqf75xoGaCzoyCHi3ChMC2NpHZ5qbrx1JZBgQX4Ap4yNs9M7gcLEpM14UvT3kA4fk",
  "key29": "4mytTuNDRtbwgmmVmeS2P2H3FrnuF67EpyK1mMTziCxtZznxiyUu6cq3wzpcaA5ik3ouThT3NinoABqW8xMgmtMu",
  "key30": "4Jrxu3htYe2muMtWBsCBfuREk6q1n4URceK3KgBYmbJ4vzqDyqhQ5SH3V1YRk2gyMVcyCrpAVe8EtY7ZTJkp5RSR",
  "key31": "KCtAG1XHDRBd37edWfpszuy8rVdwidRKKCDm6pbu8VSKx9xdLAFGAgCzDgrPeXV9WogXrVtb4VVscYT4QCcXTAW",
  "key32": "5Us2xEjqC1TDJ3CPXiuwRn88QKXxbbqaXZ5hQEZByzn4iRN2FwNezqWTULUgQ4AqLvtKDvJELr5QrT9rd1JtghV3",
  "key33": "3wBeQfBRhxBdKkvvxRYyBag4vWS6GRKhtPfuvgdc7RvPbs5ynmkrLwBsEFx46NGwqwmuqvajFqVF5ZTYZXbLSsxQ",
  "key34": "43j9wuYAZVvL3P5pt38p4DLzPpjBA3Pfh4Ugg5Cr3Czh5sG4R295tsrm4dvrkeJPta6PGwrbkp4GFVKxNHbVQia4",
  "key35": "2JQbC5de6wgkjKLJiyo8YJTZrascXYRvNGXKQdtAbgzFxU3oYmPa2oXQD2vmKRS8oFzKMgUw9uWwbE1ZdunjTzgK",
  "key36": "5F9fRnkMbEBMXvjMYriFC78CyKwRtAfQAgW5rZWvgGHCpdTN3Fd9BYyQ5wtiYaaaAWT1TdzQicy26XQFAGfZhAnM",
  "key37": "3HfJYd1oJ1J3pvm4yoWwq5uPMsu92t5nQTK6D9nDgT5BPSGrTEEwYGXLbg6AHmQNi41GrgkFXX6MypbdxVx4KjeR"
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
