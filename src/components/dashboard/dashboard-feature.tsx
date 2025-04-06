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
    "5gySsgPzgQ4z2SdrKxLDng7nfRn9mzTBro1hGxGHrxb9ETn3TxXjgrk6BMSwHmFhY8KDGL6awbLAnsJhnnCCEA5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29zC2p7Mg2A2qBKJ3wH9qHaosFaHPJ3PZMNLYFqpnGGytTtBEF4zuNNaEjvMkRa2ad9LJHqEM73EsBSS1NXZCEXU",
  "key1": "3hmKf3a8sd5mDTUZcLpewWqRBRTeFF1kJYa11bXMmGXW3uVaN4EipmqXB6c16aWgB2skf44wTo1uU1w33SXCRA8d",
  "key2": "4qZxMbDmNzTAuEdw62fr2MT9tStkzoKZGPLjXG3svR4zyB9LkSy4CR76PK5SxmupRMMGTPc79VxkiQuZPUA1XJyj",
  "key3": "3Vdf53esxMp21QDLJVmu2LPL4k95ZFao4p1EPxDBhXztPwanH3oFzxoudP1xXBLVp3Su7gXM45xpCzDMRueYjfP",
  "key4": "24wo3yCxMD6kF32anky6gzmNFao21PqqTn4beNzv1ZD7LJGRMgf1F9cjRjxLEYv1DVDZwP4vZWyQq7nHuDdGr3ad",
  "key5": "3bf4gGVk8BbyWkqgE6PWhcBX7tC1qLezFWsrAuoQbNDBR7GLwwQTR5sXSkwzdXLdrBT2cJScsJRzax7jf21syPm8",
  "key6": "BUjaeHH1hkJKs9mNgXfUCPLBKyQZ35jz9c2aHyjxrma7JaYfNXJxhkCGniCUoDZ1uki8CfYycfdsvKhwcTRwCFk",
  "key7": "GJ2wA4ca5JEktXTgqQbBJqeEfkSsP6fUu1cXaTBkWe95jC9eokiMMWAsxvVGVEeRLtA9LCGMAt3n1StjGE7VtyP",
  "key8": "NEnRmxPcJBR6ctpQTZcippWp2S3Eu2g5CsfoetxL5MSETjjfv8L8sfKEMbHL7u517pFjqdHe4Njd4PM5TEeWPrU",
  "key9": "4ncgSu1LyxPVanoWZXQ8gUew2T66QoKMqdixgbhKKshg5aYSd5wibf3Xmk3C5GUu4WTpQGx5RR3gtK2o5yj4cdci",
  "key10": "mWjHku5YanvmJJ4yRapx2VqWLRAr1L2wCe8ngca3PAJpuUB76qdRKzzPKRg3GYytC7BpEyqRQiRf5BqvpqbeMmP",
  "key11": "5JwY42NwTsTMBRCpNtBre1GvUBt9Y5CfXbq6k3cTK8XNYQhzQYKT5GcV29Br23uXeBwGLAtGxH4Y3Ez9bQFPt2ek",
  "key12": "3Ahvqe3pZMYXAFGfS7gZ4VJUSX76iVMiy2hq3KvwRJyuxE5sVAK3yStciqoSywPtE6cc7ZPjiDpSgP7LVnA3NfYN",
  "key13": "2B615aJRVF1qy4NaMdttyEruGp27JsQufXzMKHHPKAGC9wbrVJofozC1Cri9WjjMTE4tn2rC5vMvb9tCjMKC3PXw",
  "key14": "5J2wo8WawGyjJa9hafayms3HfUig1WXgMkGcsFWCAQZKyDBtQpoztxwT4xd4pywZJLNHNu1rNsKxh7Hug1azWm1C",
  "key15": "2q623hNzRPaECxTV2uGiqc4qBHpejpwdK5Mf3gpwdeQNJ5cVSs67P68Xp8oPQBZgg992Yvyj6a2FrwWTryrttnis",
  "key16": "3uPqvDY41XghfwudeoojdVUJntf8ptCbAEqz74P1YyMxcFQ9SZcLjzywggkBkzDUxVvFgpQuZfH6KGMRNmZdjPF4",
  "key17": "4UvwzZryKUuqHBqAU3aE8DDtWG6MQBiFv8gFqbizjWTmZTH3id2TbposKUAnUhtUUf77NVQLadXeUreskQ1eghK7",
  "key18": "RyGrgqBm4f8p4dXhz197ZBpAajJfMxw1PitAsNWTkQQnCAS4maiyB6tRffkrPX9rYCcZHk9qxe6fBUkbRXMMjPa",
  "key19": "2D6CwHqyMsm52vmXQYKGSUr3sp9cVQVaj3t4bsmCB1s3WNEbLTb5oBN6twp4KKumCV9Ctv9mY4SA732axrVsnrcL",
  "key20": "S1QtevHZcZHffPpYHTyBAc2Ti3eWMu9MXqhxVtv4Xa8qSuzmk6xzFjJbp3JJsYQGuW93S5nFHAs5zpcUWgTYdAm",
  "key21": "2r1uNDybvmiu9BsfDAYz38cnX7DzdLgRUJtv2R4UQSJrsfPNyFoPGTCDDr6S2ZejghgX2DTvQkkhqgS3iJZECxnW",
  "key22": "3XN1A2ozGG1aqXusuaEM8EgiGcxRyVhxCdi1HTRX5MtqppHseuhWF11kVHTZxC4B7wT4uEMxjxkcycgq3HAMj9uB",
  "key23": "3E4z49dE2Ea7TjmfYQe76oPhAhv1TLW4owTWfduF15DjDymB3Kct5rKAEZ8mk9DRxFsJQdcGqwfvNLv5MerNzNbn",
  "key24": "3hXtker4TSGhxg7wJj1FuFVzsvYwuhCfjdkpXYWwtNtoiYHca5221Fnns8xAufRUWuqFKthy5dAvVmBX7RMMg6C",
  "key25": "3Ch3MW5URRnMbrEdPJbVEVrkBuuxYiFnSYy3EKsCgzfJZ3aFjsRSbKKRFgS6nok2nbJHzVcNfqJyMKbkba9g1RiC",
  "key26": "4CoUxVS1BdAVz8N2akbPCQSXDv85n44UhhvohPKwdCB8ovjiU89Awh35tti8FeVThhmfmCRcN9LfBkV4wz945QjD",
  "key27": "63Ss3pszAw4agAdTtd2LSWHjHcAjj7suWeLc71391aWQcH2BT87Mp6JihLerF8piWvPfJD2zFBThYq5QffGEjNsQ",
  "key28": "4qGHCSZNJECpzJxX1QdwX2RsKd2ZsnByY9SmFt9tMR6wRyoRacENbcZSPLk3ajDwrwiwAP1Yk8YaxREQREL6DWLM",
  "key29": "5CarKh44MiQQYCu8groEt4tvKAGYk3FhRhA2hkhaFWihM5GWZPLHwsRkhZzsQZm99mrw77HNKDyys6FR2BtqLJft",
  "key30": "5icR2XQLYbjcNcDkMYjCyXm9NkudDwx3ozK4yCzLboQhTyDEsjfQfkKhCDsvN5C3o2PnbqVYsR7z3Hf2zGVrHPv1",
  "key31": "HKdDCEPyFh5otKTo7hzm3vsPVqSJ4f13uVB2sNVqPLYDXhUNzT8ySzpmTvU6vuxrdTEPNEbRrQngzCo1zZ1YfLK",
  "key32": "kPcK38cpZaJXJRhDetgwNxSkUFEguvT74Et1suBDucsrp1E1M8z2U1vhapJSaT2ciEoifC7fBHs2tRxTpDVUZkS",
  "key33": "2rrAVMYsdVuMeScjeM4fz4YQAEUWh3WdFGP2TL9qjVKeRmQWnVYeK2sBjNkDPGE7BJoLgCW7XazRn769JSHncDUS",
  "key34": "5sdT9yqzFjwJnAcPFwXNyyW4AhjmVdLWqZZHXco2juiV4iHR57Y9LqcWX1TEoxYh3gryGP5to3d6f1sAK8kXSs66",
  "key35": "4A2TmYh7kJ2BiQt4McBjbsQUJRquA6Vjrm922hfLkgZL6UVx39xamv1D24538XTh3nrFC49aCwtJ6c7dn13g4Ao4",
  "key36": "Ryq4Qd37CXZsUSjEyfbJZVGj72KEC59ZeGyAsQF99DdRsWSEZ4nTLNTUBJQpfY2kF9N3jT3pqJTPM5UMqKwoBdF",
  "key37": "3ahDXKMwVw2je5Uc7AYz8pUvzjuGfGj2JUfe2euon9rePixKEqnB4XBRWQQrKyeNkJbuN7MkggJwW7Kh8EAYvMeL",
  "key38": "4TNyWtLdq6Dgzj9VgRwBY8UrJAxdebThqK3Fv5Lf4Rav6bjQY8de1kXPF9PiXmthFr4p73vEoBsgvHxb3Ze5PnjX",
  "key39": "5TPoksM2RpiatCa6jTZTgNVBAUDzoLyFk2wGqQiEBZouJoivkZmziLEzapckmtaBSfUcrcpgGWGVnzskK3zXhE5u",
  "key40": "3P8MCnotYNDs7GhArNucuwS8wZPhTQwk14SicmvZAZGuZFk46RQN7QAwsgRJDWYqfXR5AFFbUd72EQH4hQ1mPjep",
  "key41": "5WXGvcXuRWxxmV4XQcTDTkP8Nw5ZkYGUoLyaLYmJ2bfHS3Lvz4sBhTDSqwpYk2aD9nQRpCSciZ8rxsDi9f34pRR4"
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
