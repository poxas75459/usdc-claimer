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
    "2wUwJiD9gcY5SuH8zE46Wrc7KMhWDbxqmktZzcMziAa9DL8KEdwZtvENn9PkApwKU5UGNAub5HXHShfu5Xb2WFt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oGCdA12NC63KjJM4J2B9eoDCxzMEQFYukPWp79adTUZQKB7tytEkiWa6vnDTUVGZFsqPaitUtocNCRBGSQpMpA2",
  "key1": "Kz6r9LPCZtjLoKLzgcwvUSSKtkRGSXR1KVCzRtrRTygPofqbneYR4ogUcsshX7A2xeRD1L9E4wXa7JQSyh9LBmi",
  "key2": "2geEzPzw7oC3WpPLr4LdwjusfCRrBDTnm5M42kdh7z4K2Hnj6QEBrNCwtfd5Dt8yAHrdKXeJb2rFJagmtU4vF2wL",
  "key3": "5XEaDsCPtJaFsfnhmrc33cBxS4bJrnABiCJJr2WcKsToMy8CStvV4huLooKG8jJsDiax7Z5foy7B23GRpCi4y3ji",
  "key4": "2u7NMu2HVxpGU4NcKm4kY63Xqq4RsPw5MFcuokBGyACUFcZZLc2UMLx6XoreLMMHihdyB8tUrHkc4cH7Cx379Ytn",
  "key5": "2N2am1gvcFFV4SsojQWMQUYqSLe3ceJRwjsVKr33QHmW6AZGPHMRbon3d9b7RzF7Zq2XhGrkxPf84c8mHNn9SzxG",
  "key6": "5ntNxZ3vAYLPqUp61zdTFZeLKTGgBDTjEQJ3UjDi6ynsXnTNp37ZHySdnbmCNy6ybMaJR9USBH8oT7Z7F9gfbg4r",
  "key7": "5nMNGh761X3cktSTraYFtAVi2d3S4U1FYVmEw2zPesDkB6Hw2sAH46JAF7Q6LKtdGm9N4qdZRyGY3sHrpdQJTmL1",
  "key8": "5AHk4YrdkXgVi6Q5gnxT4u6bB6pf7uBUvTJiPABCZGWYBJ95BiZfupuH735aAN9LTHGnzJYQYmvaUswG7B7wD6Jh",
  "key9": "41dWyHRsQ8vS36qP9UP4c2hD6PhzPm9HrBSPCnkXrpPGdR4Q681iLEjSQ6TYph5BVeocM2CuM5CM968fWfUuCpu6",
  "key10": "mj9EptxGugKa9eSaQfedspnosdDJpgXJhxizFNTaK11GEGnusYDsmikN1iErSV4CHEw2aiPVLaFqXHhNtinjk7g",
  "key11": "61xT8uBsFYEeWTJj4Su8JVB4op7MNYo62RujmPEbjGpC3aokx33HQwHbUXHR4JVLYfhM6hF3BCjehsXrFFovAJ62",
  "key12": "23qkmACvPUKFR15WyJP9e7MsxoBmJxj6TaLYgm8FWnVSpiHDs7zRxZZ7yQbuAnBZz6vDfVqxV3xRKArze4GEJN54",
  "key13": "2Zt2A13mgSmFW77yCTXsyYjYYc4pQRChZzzxazcPd9P4ozKPPjwf3qW7NmBn7EfzmUHa9uhgk92N72j3neHf4N28",
  "key14": "5g516uaexAEvD2gJGf79LdwqMYTF2VCKWLRwYpw7wAd5FJy8N7Na4q6s5s5WYMVSCAtDZG5MzjnH3e9irkQtSswP",
  "key15": "33fEFwzZG77fwec7XNkCzJxPXXuonFeCG2odVTUzhzEm1hQHfpwTE6MFhJbXtGp2iw2tJH2WHxDE669e1fJnw5Nn",
  "key16": "Z5VL3RsPvje7ZQzLtw2i7Hjtiv7ogWHaQm3mGU6e2aQrwSsEXMsuZGineVqdwMPbGYYTbXHPsZZELvHb3Uesej6",
  "key17": "28V8qsZmLt5CEk6QnyLYkLsoTjNtV75yGEptSL35ZFREQqa3qwDKp9RW9Z1mQUpK2yMeHcqV3ffjAmTEGpNgGn45",
  "key18": "4XZSX9op9Sb2TsdneWW2fS4oYFA7zDceJBjiHDR9ojhNK8WyzVa2vUAUGTyYNcgNhZhWFqFvzTGYArJroQCnxtAb",
  "key19": "2goVfqWo6nFkUicW2zGE2wHebJ1tkwqW6TfR6WB8zf6i7j8Np8vFmFoY9dTKQ62Qxsv6MWK9KXRKR3tyJ4XQ4aue",
  "key20": "5Dc9nPH2gTP6wDYwGKYif6vcM54EJydV7ngVv1xYdrPVqjx2q5xmswHDtLvMkDE7KcfAYVyduvt2m2DFAeB5M5FU",
  "key21": "4L4h9GtrQNqtEynAf8PHZrsgt6GNhPFE25tiLs3SqUjkvAWJVAka97Wj6jvfSVTnUBtcwKaVkS2B9YwJjhmHmV3i",
  "key22": "nNa8qUoMVq5hj43bFQEgthvZtHLQoCKjAa61rDEnYd6YMhuLKeEGNqzYSBwQNNLEH42jq3fgiWAJxUdde25cFhj",
  "key23": "2i1AbjK1Qe3SLN8WPzKTRMa1KgvNsp8Vo8KewiAhuFX1RP97tu3j7ibRb13aEZpRDBqsV7jezYDuJtwJWUft2uzx",
  "key24": "2GgThqkv53s3hBCWRGypZf3EoFffvLdDS7npwwoFSdjewZ2Sjxz5vscXN6zftnqPqPidWxRcWrPwyoYy1yi5iffu",
  "key25": "3c3pz7tzR9XKf8T8q4H3QMdMCyAAzpM2VnVp41C9RDxuUYLqB34Kjwfopno9SDy1fx7xAFv5d625NDeRyD9Mu1FW",
  "key26": "5SBKanpFu4MkD2DDHBmq2RMWVneGZnYkCc1MLPrBk1HbAtB2YENC3JgKkfMSxWTT7UxBc76syGJv8F7XtenKAxj8",
  "key27": "4cMReeDz3VHEuEfPr1wGTzbYS9YgF1RPkw7mndzRZbdWrXw1Sh9vmryD4keijMjNHZJmX9TX48AbDHHhZMVPG2Ph",
  "key28": "TRBwHPi7wd3CJy3VTXFsopAQxMx6qmtCSQqsDzjn1hDVF67dMJXTW85GHNegyqeQVbj8TqRYWzWhC25z7k7BJ5d",
  "key29": "4oTwJWbQkAzFJqQr4PaKbwVWJRLRCiRoQFjip8gTW6bfMP8jGiZ43xnnq6kJfG3fgQr4EJdvwbUnpL5ed1Si2Bfi",
  "key30": "5uYwyWcHSC5MrRESEPvvbpyc2QVMbYK6PkMJLQQcG9QPy6gz2tTt3uBb8CXUzNzRZr8WW8t1EbwEAsDAEF44f45q"
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
