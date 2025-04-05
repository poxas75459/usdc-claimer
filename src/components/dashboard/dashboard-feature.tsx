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
    "47fUENeDMyZG7ENBop6XkdK5EwBF8LNKbj4xkg7y4ZpmJUcNooGAsXs9mJeboR79FNGcQDX2ZDMwRFCSDsWUyw4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDdML5L8sp7HDZYo1eRm3d4m1jYU33NNf61wGmCDn4KXFCkw2r7cYmvuHxSDumKwZSVXpngbozprvMgBy4dhUL9",
  "key1": "2z43Q394ZnWq8KhsvU7UyJbBkbxpA1bYQgmV5zqhcf7skoVjw5RukRBiiJckcfjRqFhKBwekZvMRaVEMn4b6FynM",
  "key2": "66kDSftx4KCUXept6qznfZWuzof9uK6vPngBJvuAd3ie4mTQmNM3zcf94cg9B2QRiSc1ibbnYiKSNkYRHHo6hVK2",
  "key3": "53gQUev8byAQpakh2AZXQ1J1G3owyYmkKyPTxH3Am3ZFLejj6DfGoeZBUPvYYLLXAUcGrSGY9EsyipzbGNWWzyZ2",
  "key4": "126imnuhWT13x4wcNh72A7GawNAkfFY7sEB5LpCnuQuf6bjTCeVW4KF258uh7Dz7vmdkHGsXBpqeh4aNvinr5QR5",
  "key5": "5tSvfWqYHut4rpyJkQ8ApEeCiKNEHxpV8VNSwYpiCFQTjEvC4Unim3kC6UfM2CKz8rz8yWmtQbEWfDbnKpvLCsfu",
  "key6": "jaY9JVEf8ivqbj945D3xvjT2umhc2mXjiF5YjhF6LfVu8dCtj6wZQJzqiPdwAwsjiSzyNyck3cw16RgR8MxrXVx",
  "key7": "pggSiVbt5qkcDDBvofQAkXmTiayt4NY1jXLwYFbnjikV84J65trJgZnjJG21GD6cRAMbipETTS3RswHVNWXSpYr",
  "key8": "32Eu4SgAcDZxfSFPw1kBgheG4SuovgjSZQgbHgpgjhUfv2b5ZwcZtaZYqaFStm3UCPpsPdApMRfCiX7wPGsCX2KK",
  "key9": "3qmMo8jwibhUkmUtLEeHqHJD8HXCLwywXrsTTc5baf6YcEj2dXFpVAnQxidcsfTUVWqRKY6NacqoKvKbZNSbXkot",
  "key10": "56aZm24xKxyE3YKNLwp5xCdgmtB84T6wVTRqV66rB6omdNcXcFJn1v9WQWCF7zDCTsfVBMDksWqt39hPSW85okNE",
  "key11": "3Hwujv62MfYjLcEfweVvhurWETRbPQCtzA4A8tVbxs6xi7JYZitjnpGN2KwMHgdUEEuw1fM67PMdM7xASs5c23sL",
  "key12": "3n3To5cmeMy5FXM6t41uVx6pzAyusmYSsRJb2P2EzEayowS6ibNFSAfFJpK7UjwbhZujWu9hFCCLHxCJbA926EgL",
  "key13": "2WaKsLVk79LWHsJGnyySW8k2r1etuSAD6apceXe7QH9Hss1bgWxaj4be1oVyanZVUhJdmLsfqJhSnmXHu3GSyh5E",
  "key14": "fB9EgMpwxL8mWmJWWRDk9As3qvnmb54mwLg4B3fgsMpkrk7bM3EUEbdpY5gfNohjkv8NYCH2BG9dnnFh2dTXB3p",
  "key15": "6793WDRRNsRPaafigpizgzaQ1mvcS3SnaBk17fDf9zWbyJoWN2sXCVLqZe3gnWDeRbgYuZaFAi4uduLJbZ5zT5fR",
  "key16": "2vMasdWDSXYFoUpcDPFHwzUZbbfATEmcFznX4kxBLfmi6JVrwy8M3JZbVSaELmSNxbdD2KMd3ACcRMaMeWD3gupB",
  "key17": "5qbwDuTSX223kJB8JtjfwAbLuwGaaTqXToG8aZBcFi1BmVA97Ek2Vpq8oGyJ7f8TPcUHW8EPYj2gho8HjvMvzx8j",
  "key18": "DfaaGWoooFJRf5NFapjnLLaXgvXNzDS35ZcV3PvgpLTapoJaYZnmwh6iJkLTR3JDhWzSmMzXKvdX7jwwCKkfmF4",
  "key19": "5wd6sX3pitTLyiHEkdfW9E57Xd2gUwVDPC6g5M4r2rsT4akbHKnJHfgVUcwJZRba2gXzfXDEjQpWU9Me5qKzo2U8",
  "key20": "65ioGMDMLvxwxySd5Q9p8E2cBHeSxZCLZoT36h9mQUtn79vSXfNmC4bNiLfy7BpZFHc4SLiZ7uCx54HDmU2ePiHo",
  "key21": "5bVJmeUBVPTLvtkaXMJsKEPyBwbSzFk5wwtHbBro8xFdXwB71mLukmLXxecxy1sbbCZdmRfQyrN1bvHuoUs3sXcF",
  "key22": "cx8ubkcxsBPzZb9sUTQxhXe233uxaVcXo5BW9AERwAhLeizK8TdHBvcLCp4ghwT7YhnbsADNSdX27QQMnEFQpV8",
  "key23": "5MuquqeQcCjPa9miP4VPeaLph9mLocWQnsfZAEKnEvxzvKBx6YksBiQMngSKqzj49nXPTtFZ9MFq6uenAC8Dnhu",
  "key24": "5WtW4HM3HUmkcL9ZDnQNAghgkxH1MqZs1h7TKUNYLjo5TTxjP1EQo9WVzm39G8A6yZ1CAJbR434XogvshKuDAtMg",
  "key25": "5A7zz71kPpuj7M6DR2CGDGiRtG49HuMo3vEF5Z8yL7Z2h8Bb84esv8ee2SyBRp87jAdZTB5meCSfTGW4oie4it5X",
  "key26": "3R8UQW4MTCWeeTSe3xGTZ5adtsPypiT6h9fc2MCx93psx6EQXXWvtSnPJqVZicRdwp4w9MYydAKxqQP5rvV7LdLz",
  "key27": "56QPaaW5pVH9DxvkTWYvTV3RkZa9K4Sgj5KMjQK2SkEkLTQVKrqRh1LG7PX818gnCny17br2EbhfXhPfDH9HRxxR",
  "key28": "2zEfZgs7e2RKANoLiC7kFkFqg9NFBq7ahnyftwLpMsrLA1iEHFnawoL1wGgwHwNHAMd75QoxpFSdkviVqhmghZpN",
  "key29": "3RdhL9KvMPHbxJn4sGwCHLZWZCt9PjSyonNTurWWFA16AWnpDESncEEkfx14D3MM6kFfPcCqP9EVrEKBYadm8Zvy",
  "key30": "5jzAcWjdMQ4PHVSoDaW71BfnjRK8AkDoEZhrNLdL5TQedDCnmvNLK7p2fgi3AgDj4PSCiWv8QYjhXePZC2dGNjPc",
  "key31": "4ThrbzbJsKDmtCAUpkLzMGtBccLeY5omGLiNX2qPRWxLEqQBCrWQVAerTSHUWq5QhDYkEBa2eU4yCtDeNi8wdrys",
  "key32": "4BotCyfYUMfJDrC9rZxVDqvc676trE8XZLmVWQETdqzYtRu7MGbYv76bfaETKobLBYreuuDNWTKNmhg9nCZwbAxp",
  "key33": "mCTzYV76NU2PKkw9G9pZA9Es3mafkw8eMaY3Uig4gUjhfQiyQPkrgtjBrDx5a3Ge5kfy6ehFufokSuvUsKCwEcx",
  "key34": "5D5GLbiUKoJk6PrXhe823KT7XyQ4jaCthWhF96EFcKF9ZyDvpYZHndx9D3eU6W79K2XcmHZL5bgd2tTc2RcyMcsv",
  "key35": "2XmyDK9ZLBQc5ZZpugfJ2JS1BaiyJN8YbgdyVmNfV5aG2XnxMKn6RBYpxbeXXXft4qHai1Q18j8S6hN7uCMASRyq",
  "key36": "9qSrfeGKEo1R8VGghDxExKh5gntbznmZEsz8XJqEs8k5q1q6n5JRUemrx9MV6j9DtDgvZywj5oogRfDFBsDuGhH",
  "key37": "3o8gRiE7tqXWx7N86gtyj9DCL1mNNx37j6PhJy6GiELuWoLiJg7Zty1UfvMT74E1n9ooekuGcD68VPfCXHQhMQmS",
  "key38": "57C8ULAMFRy1kaDA5AiUmfEvqfn7cMYKppPCUfEc6MMkBqK5nxQo4cypKNXZkdhCVd2RNouL9LRbYgdAAneRocpV",
  "key39": "3z52Qr6w3pDMYWu4sBvMkLZhRKyk3HLd2x8ZGfHQfTBUdgf8iATS7sScZZ5B6KKqqrfN3h4r4LyATjhhCQGw5W6p",
  "key40": "5LKiVvFcF5me9KrvjuFZH3aFuE2bY6NuFHALWYahKzhYha2qhbdAc8wecJS9AAiQbH6UtmyxZr7uX47F2U7BRgJi"
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
