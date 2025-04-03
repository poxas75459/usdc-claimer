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
    "3QLgCgSDTAmkG2JQMkQMYpGMAAo6Pa8wbyqSFHFfzJ5ukERuAfZYtKofD6LqifFZkUZQpqz4PMH7quYGLd4LpaPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yboLCHwgDnGk8xYfpSDhabj4tZJg2D8MFtdAf3XC6EcZFfpCL7gPWp6wfowoM6gnrV9JH6xU4KghvyBMuDbSTsE",
  "key1": "2JQ5F3KjPuEuTGFBJyJ4EaEqxafgPYUm6s7DEtfNBQqP1x9K8vdkzNmxpovFRvwvZujBkRzVCNyoEYZC1enhV255",
  "key2": "4gMYEULKezAM1Wb3PQdmHTHKQBNHHfsC18ykkCdgBDM7uzbHLidoUZgTCW9qHtLTmcZkHBtkKgLV31fMUySayLdQ",
  "key3": "2Xzdx4rFx849nDimrxyHFyjEdiqRyF3sKghGnDPi5WRLxobDCmaGcoththVeDhfJkxBS1P9RMmcfDWpvswdkjZqH",
  "key4": "imeFRBZoRjqRfSuWrAi4ErYuZ21SnHiLnfh2LnaZG1iNEs4NbjyeXCRDL7zV1ZiK5jUCgRyC2knufhuhNrpnTdc",
  "key5": "ZofZx3nYTEEN4RwSEfNq3rQegmGCBj4gxy14MFVMtd23gdBahHPBPhVCLSEAxsJrCf7XnoECaAcD7Nn6QF25Mgv",
  "key6": "2oewdD6sD4iYJRAntfwCFw3JPQ4s8r7wsaE1iJeXbMtNSZNkQsHzcErAw4B4V6K8E67H1vfUnuAubjDVNzGyTQ4k",
  "key7": "4k3zXknC4abds2f47tNkC2UJdcTN7cmNEs5Sc4HeWK5hv2MjD1vrzD6WBzNxZ4X893sHnsMX4sYhJTNssf7S3awX",
  "key8": "4RGK686BP4MCxt8CDBw28REmofP7ZhV8sQ3DEaFA1tKhBD93cWYvMTW5d7qyyBbXBUkGWdsQTitoB6x2btb4BmNw",
  "key9": "5RuTvwnbAvugsCUiBBEiq54ZugzvKXt6CYEdZs8oFTcam1m6jZekFrecEqahnMeFV1QFDajpQQnocKVG7jibMeoy",
  "key10": "3Dz5c7guuAJpLqBPMyoRADcdcRkdH3LHXdA2Vnxm1HyNwAY7YUWGgPTpqN7cBVbxrmVcF6x3gA9xCwzTBx88VZN8",
  "key11": "EkShh2tJgDcavGyJUZ6ux5Zdm68zM7fSt3sAXP2ypf8mmdgmTFLSZBWZq3zRbbXXncm7bwvCRKPtMLsLARRFaeS",
  "key12": "5S5J9bA91KPUi7WM7AUQm7LwdcrFv2JiPTKaor8cEy8N6sSykVqvVDLB9dEi21LQV3rnshyd49aY52gR2ApHLtKE",
  "key13": "3oKMdFxuEJRsRtvD2TJpVRsGg7W55FQRGX5C1iniMS8nvj1wD5kNjoCKVNTnT5WoSMLYBvNhpfso5MWJ2stFUCFT",
  "key14": "4sgt183UCBPaBhm4UjgNAKKaMkvyFsRUF6ZgF3JRdJnQMHjerrKijDiQFFL5hSYB2g71PSeZxFKd5NSFvcQoAJjf",
  "key15": "4ey6c1QRdvwW3dzjntS8ctSbymDBgptj3DdE1M82GZEhkA5UbujyskaGj5qpVM7JZue2Gd5ZaD6WjgZ2nTovG18B",
  "key16": "2LGa7msovF5amudE9PYS1ksFcTZRt1SKWQ8Qqq8MkPenTcQXYny9CAqkmZqPvwMmnrzPS5ZcdpiQhd41C8U8sB2V",
  "key17": "3NrUQjigxVMBNv3Nx6SPtpRnMwFymvqYjcwaQWgCJYEjLmBMR8NaXbQXiznC2L1zDjDq1ANXaxz9AJLakDMcTUuj",
  "key18": "qB19VpudKUtRV7xjmLAMwXeCGQj7JQZtZdyz8TX2s7vSKXZ29CRFz64CjHKv1upJT61UwaS1yE5eAueZo85FpaY",
  "key19": "3RqfksB9M6L6pQjMYFWjfGfvcMddyjgEywiwc4LDQWrpnxU8ZfpmwBmtXzc6rVN3DQqKU4BEtHeH7C82G7HoCrVR",
  "key20": "33ukAiJ4bBr1L14Tsi9DLuMzNW6VxUxYvrWSHySzPL2rUj22BCzTGfK7M7uAgEvftBrnQesmrz7CSGb9BzAcvK9",
  "key21": "Y7kinLNdMchQaaALEM4yGcaNTUUscTgKXTUeDbdx8Sqs5HbXQsErLEy4gjihFkcy2SXSQriHC1TBACsKeDqBEQw",
  "key22": "4SZNtWKuH7LpvhaZMhgfoe8bXJprgJM8hxzJoatnSJaNbmt7gQGtJR4VCMiXa6BFyCS1VyjzrnKN9szod1TtMDMq",
  "key23": "2Hg4rr4QZzyZnRGNo92FYqczpBeT816uePbo98stPtp4X8DJ63y2Ea43d1JDjuiSAgAub6NWzQqDMeVEg4d8dGJs",
  "key24": "5dMm7rpdsttszZYY9PNDqjqD85hMacfSBJ3ttG5WJmjfPrdCwVsDKmGU5da7bx3YjeuK24kSWxbdRYEb4EmwjA5Z",
  "key25": "54dwsSCv9ymUjM8zQoxi64XDFDFg2UjDHVDntupYFpqdx9yRFYsMamkbttPyJdkKbkEsozbTbrkePfpURbdSct82",
  "key26": "js4krX3hY55HGzzVp6mgaQx8w7NBhsJNxovGdmfhND6HafaFprR12i2F1Rbx5SLJHLN3F83nXeX3bJjtYnghnxn",
  "key27": "4mD7sVJ63CudvqXCckN2r7QxshmKsN2jyfUQPCB8CZmzhREgxq2wDt8987sY161eASkgMiaL3QBpBj47E7D9JrGT",
  "key28": "2NiBCN65hKeezBCQbnsLYRXwTEQtUaZ8cqFJee6goupt6wzDDPcuCABk5BueZfYdGpCLqSmrZx51oD7o1348iTJY",
  "key29": "4oUbK2oYczhkioZk93L6yJFSj1GBZm6UyqGEA5gXLMNcfWJRs62HKQrTsgcMfMWqzfSY6zMS5uZ5Hx9VFCDwXLyi",
  "key30": "3Xhg4gbuGYuVVTfKrcYdM62WEKru2Amzg4V7aLrG92Qc6s5775paUrqKnnZ5ZPNW8vSYdhdeRDXBSg5hR612Df49",
  "key31": "28226skBP5ZCkVcbZEoqT15jvXQfAtDSJupM8U4jzzKUZqWGzmJoEJxHBksfHtiY3FDvEPB6fsY5RjrYujLTCHuU",
  "key32": "3ZutqDsqmktnvnjYfGxmnrbPHq1q7HAop4YRDNzAX23GBqTDowek9XoYvjB9tB7BdMDhbJcm4RwF4hk6y8mAGq5n",
  "key33": "5uRXxRsu58Xm4xJ9uvbEcXiWsWAgjoAhaW3aoKBHWpjMFfLZHkFEEGP5WrTPfVCB9jAbqf9vqJ6Sw3CiMsbTNDn3",
  "key34": "48A8wLSX8ALCZQ4k7MwL7raTQGQ9zzRLSBivvBDsuGsAZ9HW8ReuaE8NLiDkPC8fCjPXVCicnpLHpqgAghCdJvrV",
  "key35": "4xzAmjCPeBZc6w7SnLxrDMYJfFY1eTsCm6sxjs1kTPpfsJhcLNDj8dUfxHth4F5frBh52N5Tpnayf7uwZqszFjvY",
  "key36": "2iJz3gRGUvrNFr1UR7Cve585yFXFcJqCLN9pmwGFwXY61QGz4spwEjoNamdfMvcAd5NHPnwx7KffHAaEfikSzzRu",
  "key37": "4edNuJKxVhGCeKPJGuSanx7q3LYPWubs5HUC5Xmy3n7VcvNDzvd1QBV1zbgY33z9QQmjdr3b65gg7ydQ3Hg3jxZm"
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
