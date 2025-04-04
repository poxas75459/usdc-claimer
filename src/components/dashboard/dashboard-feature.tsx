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
    "3ycMgYAHDAhiYhQR4zpwPK7P3NPwWksRjWohdfsQAzggsQsYW3ejTbbdK4FW1sexXrerwF82eAG9S5mKtWtbYLZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BcmJXiUv5Maq11csPVWiEqKsJvF6d8gZcfJ7cNt4UVMtdjWAMiw1T5H7yoKVnVQeARJeZbegU43LoT3As6nYnEn",
  "key1": "9SzQgaLjDRi8qC8ic2yPqdVWbgfDQ3rnyzTWLU1asjPRmSB19VUP7rZZELsvVabe59aT8Go9MUcyRBFZs6PVA4K",
  "key2": "3jB2Kt5dW4cAxdN23tZJBqV481zErLe6YSbyLd55UPya7CvSW6p5JFY7U9qH44enoXdXAnrEnUCKk3KWaR5DhAAy",
  "key3": "12A63FvXcCJ6G4v3Yte5dS9sgMC27NQcpnLxZVHFgpBYTykpF9T8CQy794Ra6UmBwFWXMPD4SQj99xA7TxPGYq6j",
  "key4": "3n3EtNfrD65QE6pXjzeWYqGXnCiVfbNLvtBaso63AkvqBAiYiXCg4NC94tzYp5ccdfTNGgh3beCJSx5hNFTTdXy2",
  "key5": "3qhtLfXL4UC2VZnsQ8UcVmNVKTdkN63otapGwtfrpswEHqhqjbWYeqNpzzWvyHd5FJvZUb9roPQE5Cjco1TsUKqR",
  "key6": "2rHEUWkDwXw4EthitNuFNKczVf9wD1CDeHWPrkGuEYNq8bVEUEagkFBZmjUUQUg4jnSjoWjtWng7kVeJjUpgVkVf",
  "key7": "wQpinJD6aoJn6RBQQ3f51ZFiHFzNCmG49QKeHVgPHUiCooViegRvWBA4m77etFSvQBeLZPvJmAcHuM1yo8Bv7uC",
  "key8": "5tfa8USjJYFP9ZUoZaJhR1FRaxwugK6b6DbKj7jH43cbNeDxXnVUuaAdLF5wNkzT1tqUWSS3PfZu7iCiJTBVmFZV",
  "key9": "39Pdqid2KksFhJtDXhFSRbmr7D4Qkzxe5jMoFJay1oqaepaDMT28ibY66keW7Bf85fZkUQrNCH6aDWAMWmft3z4N",
  "key10": "66fiUAk2FFrR53RpZVzHtb3KHYRtEwo4MNMWBxifLK53TDg2UxfKKKYJiNyqVFjsfi35idrMPbPhDAKPpiCjDjJM",
  "key11": "43ouLhH461daQpSWBj9BqUboKZ3MUDEQAiJQbYttPADKQ3NiPPneGR5sXxz7q4QLxvWSbygFrwiAoZBkLrhiReS",
  "key12": "27MBpK7sFynk7anyEU8z13ZkRPvaWLt7SPTXkyCoCdXbmGQtGy6T8ig5tcP6YFPYQSZkds55HP3EJNKGDDuiomsj",
  "key13": "5RSUUpt6AZg3ntWYnygPJZBfzhNXobCTpYrmefSYRaQDGEDVMFwbiVezaSJX7QgyN4Rz7WzzkLtYHofvnxa2Mpzi",
  "key14": "2RoX99weSjG4uDbdXpoCZ9DWevbwWKkrszogcnq4jktnCHD8MT37aScDC5ReurTuarJiLiQhRGhJzWYkgL1vGGNW",
  "key15": "2mjaXCNCb6fm7RPfqRREo2MGbsYLgfy1f6fhPwySnmW5oUxMwPCxJpDZS8jWoW6r3VMk8J3ecD3sbDrBuB8A6WX9",
  "key16": "3nxk849QrU4gHKToK9zbS1AzKTZ6HqXyA27JRwW9o7bQPPnSBpYExzfEA4DSrcG7powWj6K5ghfoqN9z2CvMaTfz",
  "key17": "3mx33TLTho6k9CbvQJRB18eo7gqsgudzFZscDMKU86RrvvTpeRt3tJnu7oZEScnhr8qxZimbDoDtcyxwfQm5eZRV",
  "key18": "4dWeUiNLjEsKZNHpwcKxRS7rqrFhMRAobQMP9BdQf5F3V6nq7qFEpujYW4rd53vtcvRrXEiTzs3oKejFuhF9PBX5",
  "key19": "hFoJWuhgUjUnFWbCwcuMutpQUoYxNPN2K1GNmvq5WUCibMBKGr7x3RgcdvsBU7wYuueedNaSVyBMCkJUrMnubCC",
  "key20": "2Ghv8yMww9yWUWqJAReCuvLSBGuWZvC44MST52mGcuZv5NbxL6uEM9dJqxD3EgbvEWhs4hS43Tv4sHtdT94tirrn",
  "key21": "24qBsR7mGHNnJW4LDqcDFGM253M1iqvEacoqrT41QgsJPjdtaiUqqFaBs9yHQr6jv5UqebJTYBu1U9ZBHKVdE5en",
  "key22": "4xYEeZf3S6DAg7Czq12VyTLy4cs9fJVTRC9QRJx5F6YYw4LWSojiwW2mhqw2ABrsM6RJidtVoKDYycw3RNjwCuvv",
  "key23": "vdJejctj5pH72HX1xnBgsNSkxDkpzt2cboXYnogSZ5KqQNz9VSL5DfHMX6TcM9whTV9stdbn6TW9BogwrvcmDad",
  "key24": "4CsVAwQ8QaLoHU311ouMaPSHirddaPEH3YVgHeu4nCxUALZLNYEewfjQjuStA4SynyoZLUZ1TSdosoPGTkegkC5v",
  "key25": "5a32a68p3MvBkjSNEWUFvDeKRb3bRN4rWrFPYiz4beoNgnMq8DpUrrkaNRP8qeydsvw7vWT1hEuxvn3YnjcA4cnr",
  "key26": "4Hn733moHJxxcswjbvfb2MwFCqdcTZ4dhhsRbiZ4uLeUfFqhYMDXGG4ujoTX5g5YFFdh2tVJ2ZLFVDCfeNZU9knQ",
  "key27": "5yc9GNnZ5Xc3qBDKkuuXaAKwCZHTxB4gi6q89wYQZUcawSwpuX8aqrJtCEo8QBRnx5iBtwyKb1rNasNzeWvZNULf",
  "key28": "3xjHYaY9usvv1uaGCgqPcwPKbEuRoKhDHtYmMNQPqf3acXj3duJHBFEnEh594kyoRGBrnw723TK2YExeeW1PBGkb",
  "key29": "22PMMkk4uVrnH4iS1jKrxf6x62YTHSafBCRfBrensaSDjAW1Jp4DuwPcN875HHmKyxpfjAH2WFjC1rAYmHkSacFp",
  "key30": "56ZZC2F5Jpz2WziwLcU8VEtsW1qs4QYZportftHnt5hsfbXkohhgFRWYJb1MhPM4cxWZrJP75UCBtj2Q4h4xFdPi",
  "key31": "2ZieS6RericBQS9iBbateC2a1P461xbP5EtEKGu8Q6EtdosWgEuyWAWJuCcdBQ1rDMC3xVE9cEUVde1qmzL8SCWm",
  "key32": "fHvBShiG1fN6wQzm5v2WaKcWq3QDtCuFK4BjorfPtje7FXFLSfMKumZsirFeq6artng27R6v18dajjTFwZZdbhL",
  "key33": "2VNeXjXmNmm7ePBJQBsbJHdbp6r7V2Md3oCSg5Yr3sDCKTbeLdDUwUDujp2hYvHs7bwRCx64vJ4STBkmR5zPZN37",
  "key34": "54zkUBP9xpCuw3HcHtZvLNA9V8J7RD1vTCUG8sic9yPLx21gX1AzPFvsTttABJkY2r5ZzuF4UN5vTMbcbuFaBFei",
  "key35": "GZUSRKZn4dvkSYHMDzgfVq1tKUkaYQX9QbhBt1QfGb5tAQkGsvksLEMzuBczfxN4TDN1tv3Yz9hvBuiQhvEggmf",
  "key36": "2zkuMXJmwuJh87CCrdgJztPvXhexzQHhmfrtCktbn1MSzo7hFG4dJH84PPYCaMTR1ZqKFvnbjz67U3PthymNPVrZ",
  "key37": "3muk738kCAs6X7ukQTy2RZNnkktq1PtHsDcX3kdeYYUzKLCC1Amxc7sEKf9LrKJG4DtDxdxuDgCXEHVFqrUNwEnm",
  "key38": "2GtNePDVCQoPyCj7TEP1YLYjWvB1GLqnP8dMjPBcVqVp3cUwaTumTpvkxc4swetHxi4xqrUiUTiQNEgcsj6utkwT",
  "key39": "4yHvfp3fX1iXCipmPt56FC7yz34Us753gV1S5azQ2e7p2WFtMUzw53crguUF3iH3NGnBARmNo2EdEwfK5QPMBigd"
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
