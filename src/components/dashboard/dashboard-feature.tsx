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
    "B3FfFrWfifemTHbea4YobCpTJ2ASxw4wPbZWsKzkxjAtrcBpiuXfxMBKDJUxwzjs1LbZ3JbDJG2kCg3gBCU6ydM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KX7PnLPG1S67NSA2bRoXgvp72uGhfqrwWkcbPx5M9erF3UgvgYeDuVoTx8gJzhTzGGGCgBzw3W9cPe6dcRFEE7",
  "key1": "1Bit3k4XkM1MpqQ8g8GxRY1DXSw7DoK3WuKK3xV94xBznctjCF4Lw8NA91gAcWPBxKfjTkmQVnrM5gT1QQFr8kp",
  "key2": "2mnv2T85S3rNp2gwCfEbcSeT2AHk2unLz7J2iMXCQ9nqMkyiq5fDGPKkZjk7ci8uXmMZw1oGFMGjbRGCkfMdZyLv",
  "key3": "xPw6mxP8zBQRFe6dTYwaPHoBomhYCuyf9bS8LZFzuEThuWv91BaccXkzWvRHwFbHeQEFXCsL7rnZcnw8p7YTXDr",
  "key4": "Mef9iYxEMaqHVqdzf8QBrvRKTw8hGaSommGAEndLsHE1SPaBX1hypHagmAvDCQguCQd6QjWkCezZbdxB4k2JCo3",
  "key5": "3oXYanLBD3wXEUC1pCpUkpJDFYGNz1u2A3spm4Tb3aa8uNNNXNP6cP7ePNQPKQxqZr8sxYJme6SZ3A4rRsANmxBS",
  "key6": "3zd9y3RoyZxDvGXTMLjayeiYQESdwmNMtKBu6YM6a5u3DKMcQTvUdPvodyfqyHxheo1UoSc6GGpncQ91yrCJBy7z",
  "key7": "52mJvTGsHtyMUdUoskfYbKrh5D78mYQQeV4uyeWUcr32kKUpWUYeM7TqhrcjXst6QiSPdpLXY2WDCBFhDR7A2Cnf",
  "key8": "5FQjWXag5nFEjqSp7tDK3wxKVrQNbC3jhWkR8sPa31wJxVYEXYU6do8BonL1t1EBsuoC2zEmPribzpRbaWhCQPXm",
  "key9": "5bYNMrBRHy7J3R4HFH8cxKWND2BpK5H6xgQ8fFeVRr9udKP26w8b7SZSxhfqZuz3kVGNhPiYdf1Zxnm85wuJCjPC",
  "key10": "2boEicM7kgPWEgkm7m2cfzgGEWko1NU1ptaTMbppRK6YwpsD6TM9e6hapWZjbLbwRSRGiWFAiioxkQFaWDKJg54D",
  "key11": "2geNSfvqBbjkxHSqKZ139Rm9BCsKBbeUf3iru8a5x1mD4GotKFCZbSKTA24Hp7YhH1XjfWtq9UenSCisQbZrQaFo",
  "key12": "ccTvTcRNa54bdzCXjYWer1KP4QMAh4aH3rf5VWDZcEvm6rm6Zavdeg31jTrtENHuMMyhAVYfaSkDATkeZFAq4BN",
  "key13": "4dRnVVFsJYAV9q6fDtQ7wnLjeYkBQ7fNgVPBi4oU6GNyE19qzAK8kmF3wDox3eax7yckw5SNaRaw7DztUoTpk77",
  "key14": "2KpyjpsApBxH27mV6VXFgfFKbQWUBEsUYFE9wprjJ7vQPDy3a14EmX4gcBM6LP1AQNCEjrUpbtBivzt1xauYoGuE",
  "key15": "5r6M3bvdHtW4htWw9vAFRpTauyKwAqtvY2U7N7ZYoMTJdLBgNu3gxZZsziacEj9o1gYBhcEPs4DteSrmAUJsnSGa",
  "key16": "pwLAxNqYMw1VUfChGC825G3d8KeRUMgrB9CSitVFK4bFiVawuqZtWbf2FnWh77u7JHgE7d5YUpJoJM5kX8uS54K",
  "key17": "65euiyCbxCmdLaixPMuKhaW4oqMykk8AcmdZdBTkXTKXyrgRxyJfehMRhGvra96whSNghDXHUAHJzRKhn5RiKVSB",
  "key18": "aJR6TbXtCxYir8Jt4vRTLEzYx6utymbXtKkZgbLzhAAqRLUa2suKfCvGNVLxkbPqHZW7VPnW5o3rwQen8Q9jP5W",
  "key19": "2iamXciAr3Vr1TjpLqkWVeQ7Gce9TE8eHPCAm7KFSpmJ61dVde1LU4s8pnj5C7c83yb8YApA4AiaomAiTrAVDTUJ",
  "key20": "VQiyoH26jfJHmxZwLxfavfsFzZme9u1UFMEsYiTtQQfuJVH2seWJy8LyQD7CgBi4hDRaTQijKLvoVzB1Yn7uxQk",
  "key21": "5pfDwNfznSMBzmTjyCm1hH5wKFwYgoSWK1WbUceSdbp3pK5CkEhsCSCrdmLA6KCfo2vkjWJCgXoywLaWL92sZ2wJ",
  "key22": "3fxSBxNi2ALmRgiZySQyJvB48UxugE44KYdM7h34qs7wsu8P3HKZ2512Q1Pu53UJrTfafxeHYEZxkNs3jiJsUWhj",
  "key23": "4k7Ha3V1jV7xHj49yJQxSnnsHfV5PYUVhJqiyLj69pRR5Z7VZsqsWj1DoUStCatKJJ8ffuVBpVd71KHBxqudgEke",
  "key24": "3yRirGARYL1zdaMWXfLXFhr31Z9Q6ruwoDdcCPoS8LLGHbDDDPkpmDU3vDFDHkP7sdh9g3jWxH8bu8BPJdug9e2K",
  "key25": "yyAzYugxsG5bfgCcsjPQiE5awXVDRSJ9nU6mhESaxqiT3FmCzWZ4tjAG6W7zcoVTT5LfLh5aZDJeACwsG2wrpgz",
  "key26": "44S2XgmUdgqv3FKe9934WC982HDLRYZdTYDLoJ59AMhthSTpdNsjgWtG549wnvMU1KwtFnSs4gQwREXGco8BFsmX",
  "key27": "Tvf6svfXKkS6ttdGQo5Uyih6D8bRDg2ePr9ndW1mkrvjYCrAHbjqfKTZdbuxnPCYKBGjwWxBMer4KLyuydWNom6",
  "key28": "376BrkBSLdBarAkaMQB7A6h5GuT3CjT4nunpnLE9EL1XDumBKXLBwMCpu8xKSEgoXJXL22zJ7U4zFboAsTLfybuS",
  "key29": "3gLR8mf1rP72QUcr6frhxW59aa2uC2S3DyhNqxZHRLTbENPaAet7Cz3XDaKgK4ZK1g9r3QdkV8RHiugiS5yPMX7G",
  "key30": "46StznRf7N1W7p1dk8KBnPNeLesW99Dx9b1V8UScv4x4Mr5dNL1UHsfBbGK2BQtLSwoYJhjFm7YidKUc2MqjEjzR"
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
