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
    "65iAQsNcxcTqAXE3SV7dyg3JSYBkR49r4UiWrXLER7RLaQZyVKT33jb3sR2vXnQZyP5bbBNsVoqqHk5Y4YZCyJUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxqvPhNn33TcBi3zqsbfyYTtmtpG58WKLjWvqCagaUQsivaDxoze1BTNV3JbWAQS33ckBM8tpehk2BNUxLzko1r",
  "key1": "3MNj1oykb5YP9ZTD5aYVYo4LQb1mxVQ2vhEyvN4z5QroQ73b1rCdgAyEZRHgkEfHyTJTy76NdTdaJamPSxeyYx9s",
  "key2": "2N6eKXhMS1xusxuhMRRAbVccqoxZLQYzA3NdU1ent3bmtk7Kkvck2AwbsZAehoYRLECJ8rz5PwDx3bGXN6XYL33c",
  "key3": "4tK5mPNjy3tqdbwckdHr4WMSjgRfzzWQoZvfkYFp2eFgsBMKKRFVAtbKqRgYraZfJPuJ9Bo1zqzDfczcPU3L7v5W",
  "key4": "3MzrRpgQAfCLGLHyavjWAy1Ucj7aDGrKDD3dsQVRi6hy5NtaE3k4pNcLCG1z1uQGeZRP2XvS743xZAMhwgLFnZJW",
  "key5": "57iLwaMsqoT96aTeeG8XgbyhrPdKGRf7Dhnd6kW8mHQX8azLrfw19cQucySgfbhSCz3gmY4Zm8UFUF1t8a5Th1DL",
  "key6": "4enJ1Wj8oAMkEMsvSd4Q7f1KvqsddFYD9ixssBCVrBuiQvzfUbtS4oAVQfhP8WgR1XarpAGzCiqwxaezNyQdsSNg",
  "key7": "2YLzhaUX6GBZDkXYrMkSDURBjAJom5iEE1MV4Vf3Zke3pFdrXi65GRf32Tjq3pTicSJZsoNyeS923638NWXRPjvY",
  "key8": "3gMfQpy2wkivwiFYZJTEMX6zaZEqcRLWitW9QNa2mRvp1qHBhX2CBGsSntXR57xWVotrZikYDAVpbaRPGX6jpkYx",
  "key9": "3gESSvFybEmxx8Nt7tHy7LKhdFDGxbjN8sKbUgVMWiA5Bzzh4BLWp97ZZUTw5xa72p1h5kbTwNsYXFMNrtW4hqp1",
  "key10": "8imMA72Sa4JAwFkuSbTe6MHaxXhHGfZsSwKU7yUKRiJUjZjkRiBKgtejazK9dqqAFmbcLspCi8DKmM1DgShnDhD",
  "key11": "NtK7RHnKvaMWBvSVuqAqsHAXZT8Mfz3EhPi92Cs6yzjMhJf2XxLh5AP2oypVh5NAVWD6jpTAMjt8VGuD58uvikG",
  "key12": "2mQMTxRM1uSATPRk5v1EdaaWBkED3cwAj9VZi3vRkhya7VYX3GwkwY9EdG4TP4VYcAbCBSMYCpyUofKw9zzBkG7E",
  "key13": "2d7wS4VLDwbACboiM1WGT2SWp19v8ASbzfhV29RMrH8r7vMjT5Y6EFK2D79N6x3EEbkgeE5Rn48q1GvXfRNVzkEo",
  "key14": "2c8Xevc4QkXJgbiU4s1R7shJ227hNKu9FUdFWAkr6K5kmMNVALzviPFK24ABGWfzSUT4tFBPqJax3GM2URYHK7i3",
  "key15": "geHiPqBZpFuHCtzD7XePZ9LSeLCedJAjZsWJfoxmvA6CvdDTXzNoR2VoYx7Jw4Pv1wUziSZawRBzckEBeM4vXKn",
  "key16": "3KJCCMmmArJoYgZAxdsD5LPDiTaFoMXHqtSZeR5Cr7MeAeWn7M5Z9TiC2D56S4CrUDyxQLYSKvrp9EzHgoZzb4t1",
  "key17": "4b9zVm6HszM7qrsXFUwxHijWGU36XonFeJ53SR7qCDbZEHPmHZcKmD8T4MdfBXjFY5wBw6jd5Ji1Hn7Eu2oNQ2Ut",
  "key18": "5XVhnkJE2nMiqb3wLpfAzwdGxsJ3bC8f8JVEfWYMPx5RbKaCVy12g6ttM5aDZH81asFb53TXWn2sPX4LTZn4MkRz",
  "key19": "58M2jr9KKEghYCQLCkhbeFxdLb8kritRP3zwuKSrXYtYMtEMx1iqsqdMxojxMQHcQtTFsMztvLL92peNHoTEittq",
  "key20": "Fr2JDmHfhVLZpE1DrPsxuVxKDKQt1dXGuMQT5yEom6WGz7S2dhax69K5xqnuNzhiubgKeJQuNj6p1jFiXi6JVuq",
  "key21": "5MKoY8n5HANXomxiZeLrQmDF9iYGTY31ZPAf8h6tthuYqgvnCjs7W1tLgtfdNxmQwpkX1Mm22bf13WeKiQZcZ8PB",
  "key22": "4yfxzb3j7Jc3vsXRgDNdPKBeBBch2XDH1ihSHNNz58Vjq1jD3Gn25CLeDCqUFMMebkscsa93CoBURm1AVXg7T8bg",
  "key23": "3RHVFrTP7w4ExRc4PnTGAnQk85L7PuDfNwcrgcdigp4o1PxRLXbFyPGiMEaTjuCeHpnZew6Eh58LjzELgHZs5YFu",
  "key24": "3MoCkmryty5d8nBsEXgugF8JphntQ59tZ9GhF9kfgQxAffV3rGmBZkr3cPJrkdJs5Tn7PiAS2nogHQCjRZkWs1c4",
  "key25": "ZakVn7urS7kN4Szrw4bsiyDm6V6JimpKQwUeWxNJRrgzVhengEtSuVvhENb8wDUjTiPgac62zBBWcbnBQKfdTQy",
  "key26": "52c7KmJ5HTEAPY7Vho96KGu9qXwpoRDUtN8LRXk4k9rDDS8FmqEECjsYUs7p9ueUWWjQUCfLXZ2GWUcWAWKErymF",
  "key27": "38RUhghTPC7gVHScANWGucyD4aDsx3KaRxp39Lj4zdYdzPak5aWCJeozLp76J6bBraNmAHTg9c25dU22sVx3iWc9",
  "key28": "44BT2Uea8JTzPokMSTfsVytNZWYqEURRnMo8EgqtAfdXx5mYDENeDEgGhfzMQya7dWfDQAuG5oUn8uPJJHtzQXd9",
  "key29": "5TnuVBFcaj6TVA7KdUqhj9R7MXpPgNPgJVRmKtZEBPWf14LSqB8LA9xd2CQpNjGYYZBpCYjHv3dCn1bm2kJvY3Lf"
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
