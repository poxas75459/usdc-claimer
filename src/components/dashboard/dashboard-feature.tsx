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
    "2unxLDtxzFozgNAC36ZsfPWxai9ESN9rHhY1SqdD7LXJU1FXyND6PveaygcB3G68gN3pFB3iuyG5xTrf4VtyPBQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yordSWKWapKyYJoPcuxSufukg9gVVd3mQAZLCyZW77coSKxvQDNrh6WpS72sgsrhoLEZ1nv8MF19WVVCEBp9YD",
  "key1": "5ocqMESV28wnJgkD6ZtWvCJEHob8YWZ2XMuzqU9ZX2cBeK3Yt7vnxKsh6KXhwZJXERCdddGjtFKBdDDERU4tRPyT",
  "key2": "67Vd1bkKJkFbQASD1BUyf185w7cctZtdV2gn8Fdo2JtZnMtNWV76UJVRRfzE2HdaCXpJJVcoFYynoVXXhYUpYGQ8",
  "key3": "3BpALVNahM8fDjW9kFomvocYP7evhTaebCshkBir8ukoLXEavPSg7njNS9Lxqa9Fvh78Tod9oVrK7komY598aavc",
  "key4": "3jv9Ce4ZwH2jsNZimu6uWuQtd19MQKf6r7xmtySL4yf9Dz5SL16kQ4srosRskuSLGrcYsmGFRJDcC35EXPdRECSp",
  "key5": "46qJu9YucGkjmTcTKDGGZgYVuaYVMK3rbfk6C3KmHMwKxHy1YX9QsehcqT8wkU3sZveHQVEr9oAeE64SE7NMhaan",
  "key6": "4FGruDvRb9Hwkf1RJerrZrEawwdNUEwYCG69sv6RgxF7TbNUixVi8Ba5B1uNTABPbiiwmkrv3gqfAFLNUPDxtjee",
  "key7": "49bEc8vsuWJxVqmQvRvAce3qRY2LK8EBCZZMnRNYB8GP34mVU8Vn6CXqEb9dQ8YoQANKDKREv8dj2ZTCoEnKgVfr",
  "key8": "2dGHsojndKumWpeeQiKqrS9k3dKE3ayNsH9ddg7cdoLGWzeoqp3AH7Rv9hiY5FuPViwdwcGFgRwMyzvg66v5x43m",
  "key9": "xG4fbUBfrUR3iqRyQbSRmnTEXxDKdH1VLxFjmUqRz6yA3tfzq4K42xFs5YFgBzMNL64HmF5NSSzvD2SkPBoP3Zd",
  "key10": "48nFG2LxyijEWFh5jBrNzR9rL33TtRVf8enPzv1b5mfQakfVeRUG3aeJcqaWmH9dY97TmBBg6jD19YxQC6dQqBeW",
  "key11": "3FnSqu1u7tBfbMUHCcXSUghwtsq8UYQKPcfPXjLVXqnL1WtntsgvJRjFJd3T1H5bA649L85m7FZm3yERnAcqPH3q",
  "key12": "46oKt1vLSzatzYiDhQL6QXv48QjmLsVUcDvDHyf15812Aqobb56sQjYdGW2VGPLRjYHmpGQ28WTvNyLQbCRqY6BT",
  "key13": "5LQFPsGByVncUwck1cikDUsg2rH1ZNXXiEoAHj9vRcrQLnu6XtiR58UbqPbXNGB3KMdDprRDiNqBuWa8BfEEexqM",
  "key14": "4RxQ9KGUeqm7SdgV481VXyvuh6m4iMaw7hbF8tFZadmmB5GWmiQoms2Ri9P3khECLhHFbjAbUNSemn6YtbDBhLCj",
  "key15": "25hXfXfLcF49Sfk4r93xdUszEooBA7evfWLGCpcAQgrsEcAEBuhNNES9aXzmP6GBXP6SX7kNkgHCzmNbhF5iPMT4",
  "key16": "4kJNk7XS1PpTGySaGLz3YvDk4Y5DsQsunMBxNibtpnLJRf1nnudDjAQ8rq9ZCU9CxYmGFgPchBfM2FeL5qU53Pms",
  "key17": "3fGP62i1WWFgNuQNQhZyzQr9SG34t6CPvegHMZd8AgZthVZfKAPg4bQPwT1FWq7Dt1uYdTqMGXBq5UStKLGmEbPa",
  "key18": "5GxX8aePXYN9oVhiq5CQ7zaDQhp37roGVKdeCHdo6oJyEQddi9kqqA19pAKTnrnLxw7K9L4t5r6D61DWuJ3Ck7Xw",
  "key19": "3LzLBiEU64FE22nUKqaehAdpERVmXJ4xfEoCUwo1rJVQj4Uicfx5c3DyhLf6fCZ39VkKdno92NGL44XuR3SQQLZi",
  "key20": "5ee9bzQKW6M8rqFf5Exk6MYqdbi2A5EFNRcHdWBgtaVBWYp6ZDUSYN45MWKLUeGBAK43oE6h4Mk7v7nzBy5UBDUQ",
  "key21": "2YqFMwK2Q5dQ3m1RuPfr5NPXDRkZWb5q4Zdcs9ApuCHnxmXaU43893QfnsGhaGdSwnMav9LCpiArRfaPce4JHPBy",
  "key22": "4h6iEhQtK9dY1zr5aYQ3QJgGjvQcRt1WjVFZKasBtJg7ZgsEACh2QRgpyAEHPsUyBG4kU5FPUoWMWgnWhLCGK8Hd",
  "key23": "5q8xNzBmD1nv21sHvPcYfXVJzLQYD3NZ1Fg6tsM9okW3q9gg4kqUsFXX7GLATfQwTBEnoLi4vV8Ux8JWjczBcv4g",
  "key24": "4z9W9ygqaRzWmLxjLCtTTRGyKzCsV91xP95tjtFm46TAVAjgsbwGp2AhhGkKw3CfoTEKsDDTxzLYfX7vnPKHNmmS",
  "key25": "xxo4nn17tQgEoywBvmdmVxfGf863eYvssUatB8jqSTAqVjkbKZwpiZ5hwWoxxCZbR1hcWiDM5zaJ3R3665Pi55v",
  "key26": "2to2fbgXszFBHbjxRJhFdqMs7zi1BJ4AYf6nku9uHviwZV5WfuFjCd8jcv6K5h2G6a6Red2xFWWajAUt9qzuuZg",
  "key27": "33ikvAaEs5oajcWh791tTX6HLdM7auvz9GeCBanWu6SSLcd49WVZS5z9KCrWHwgPf6C1dmx2wDmTXmGPi2upQVt",
  "key28": "5nVo9hAQ9VAfAEj3mmMExeq1JGXgtw58xCV1gVgtb46onvEnT6YvYd4wmjeHszWY8JKUJzFKi5Set4n6ov9DJcFv",
  "key29": "3A7zeP1CeWUdVVD7GPXePghhvH2qx6CzaS4qLCGokQ2GWmydvpKpsm4N3PcDsUM5bSeZfvanmvLthi3tPEt1juFa",
  "key30": "GcruhnEAkrghX8n5VoEUmXE83mPqVdrn1CRUnzZ9q3XR5fektEsW7PQqSDPuLHgeMx8fxEdMRT57NenfN3qT1rm",
  "key31": "47u5H62ndeNHJeAMc8b4Qamx5jYg4h7ZTFYwCNqDMJtYe71W18H4VSVq1vas7haidbiNUDRBattKAYrqAmkRHUWZ",
  "key32": "2DfnkW7DC9goVWKR6PjvwYWV9JgB1aTEJTyQ9EcNAFVcofh2gTp4N5Jta3q12PQa3k7ZXu6NTAYeMDdqMTjBPKYq",
  "key33": "5hYdbPKhPqUFj5Qgm4RtJZF46LEDBMA8qBzLZZCeiN9tLQ7ft1Vo3VYHgP3DhQVPwe7Fn1dbKEY8cjGzGYLXoxNr",
  "key34": "zTNfUkXQyUCrYSYFNQuwEMnfJqb3mtXHoxmePkf4n3vZ6nH3Qf1v2tvj6nHHBzzaGD8f42tcRPNkBtZiycayrs3",
  "key35": "4rts89izc1peNnti13MdskoC8gHk9X3VNb6EKPbCabwKyvkKPZhgRvKSjgNDLF4zqBE2uERdASsnj7ow6si94sfD",
  "key36": "2RNEBcjtCRjdDieqz5YKyd3vA4z1h6Q7UHsnppgfvuyxsBLnkgy4FfdN4wcWAAuCq3fFjdaPSHQHD2oDCwjFVpEU",
  "key37": "3xc2MxEfxKrRjcWEQSBRjmyFFvXRbHjQ7PBgUPPUDbZrramxCWV1Qig4i9kakkChviFgD6bDwzvmxqNhHZRGvEgV"
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
