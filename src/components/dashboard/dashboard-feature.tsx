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
    "52UKVYqv7uk5gmdxWdjBxAv4x9kmsch9WfNwXNBzjPpHppUPcJCAwLUncthbVDUZ2aeiK39ruk8hmuE542W1x6z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JzyJwiww4z6eiZBHTHE1EzneRV7sbAuBFVgZZBSQoi3TUo2LgQ1f5cFC44J2s7fiYhCaL2ET3s7mWZ9AFihz5yj",
  "key1": "64XgUvgpKGte5LFQXtmAtUPPqKVhdRRzLWeZMvFaGVZcNV5qFFbE4PPB4xjhvG6weXGjabj3eMRFkzffPjdrefk2",
  "key2": "5QJe2BmsYz8Zm2kPqbGnhMyMPB4BTLo5qJeR2QB1EBQapQNFKrNsUJM33zVkqczuEiRTTrYVTb4GHmAmXYBoyAxE",
  "key3": "3AohaJJVfpVArqL8YG1Vf7DFWTE2faDUwWao8ksmqYGZpigHUX17RNTmgKrapRv2rdu58TVSiiYg5Hq6qmAaXgvU",
  "key4": "6vCgTdNHMTvDbfgDy7MrUUTdZLGAikm4CDUthzbnYXHnQPg9ztpATEE9Hv3TnPqDyLubhhYVyYRkDQxBNDxYi2T",
  "key5": "5qKfFXnMWVroMYD1JQwRCbNuwFzTZkijYDApJj3hiQMnqRMcmAc51rdRBxAet9UsiPUUUAkESRbqyh1Z5Y6jTkrm",
  "key6": "3DRA2UY98mT2EB7UTvENZKFHeyRsKhrirxaj6Jrzz878rBfFctSmDdFzdNER7Y3a6cHuoMBeC89iV14pcBmULDjx",
  "key7": "2buBanTAJ5YdiuGdu99yWvh9Ba66XonBSGRKAeV2BwYQ9aQrEvEKQWRhXGr4cZ6s3ybUQpn69aLsdhjytPxg3wJi",
  "key8": "4ucMQ2pBggfSG7SGcffkQkvpPhSLw9YAUMsLpqGK2j6FngFed9MNB2vtiuxMJmdpErY4m9vg5H3Hd2Tqc5Jpb46t",
  "key9": "4AuYqdCaN6qpsKaJsZT1gF1hmEkENJu9DdMCBJ3RBMeB5nyZ3B9TaybfTYAT86UU5Mno2Srdy47A4XVdNN7vNWpM",
  "key10": "44BmsqSnfmMUTwCfCiCGCS9AGcH5H9KaNXr9kwEVvSCX4uNtiKSN6BQrCtn1ETYCmRDK8FRZpRw8LY4NGN2VVLjZ",
  "key11": "66zijQzSi4tvWLnRz58e3r9AWuDnSvz45wsmrqRhq1Nx2qtaqDh6Ay4eeNDUZgwCqPoc7ux7MugQaL3jZHmLa1KQ",
  "key12": "5HCCvKukguuc5XLKVLKSMjuHkjFXx126tXGKpAeXumtDPZfbwJfW1VRnZaXj8CuQAJND65A9jYnwV6LUn4veRbcp",
  "key13": "3JGMNUQDKjiFYYromLTfat28e2WoJS7bKBgufiv7kCGMraboddPZnZuvwyQkEXZE6ptWMYstwi2DqoTxXZNmogzU",
  "key14": "pDVb1Z8z6n3ivpvnv6r6Hxv21RzN5kd4zFLMkeS4ynGhYXeySdzm7xeo4EPbAs1SmxBjPbmV1CKqvD7RBSyeH2q",
  "key15": "xuUHTnkWYrk6q2ukcoaacvsTku2iALva1Sz7aKocgxgc8bznNFeMBfk93CUD8qGtdLRLLUBCFwXxuNUM5s7b9Vy",
  "key16": "2y5o2jcw8VdyJw9YWmjy9kUB4Vskn3ajBFCk2DJd1YG49eprRESzgkh7RACy6icF2fHThQiaSjvzW7R1U7pmvkti",
  "key17": "4zpvNeeV7e58c1mGX8svySA76PhQPS6rEzP88B8P3KkpCvbXx7KYXqTjn9VH8Xg8jBfjctqx44ETRNSF68jeZyxY",
  "key18": "4pY6GuKTJWyiQfAaVcdphtyGAzEosFFBMeqjTmyivjnGuPaSxeSsEEytpHpJbDQJFiJ7kSFpusUMXX2GtnwwNnTr",
  "key19": "5AvhQUdxHoPaSxBHKDbAeLDkXXzrodJaLqA17cChFUoX6EnWLp4DmYSPVvgbb7utFQ9KVCPVx3fNynBp2YwPM8LP",
  "key20": "5bHQso9Vt7usUbQY1Y8e1ScUrm2Xo2Rat3ocpdH27fiPkFu2gzZP1s9i7NdXFTnDFRwdM3EDzTG65oBXsoeGzPaz",
  "key21": "3Tbag5MDRyy4SHhXFf8SU3zhNDz9sgDKeVfsTMA84s6TxDYFeLp3M2A8Yrf9f8WHHVpY3wv66jSBbMLpCJ6xnttM",
  "key22": "5K5HVgCyyPzDefKC5GGG1QMkfedwGgwTbQ3YHkZp7afTejemucqc3ryWMmwuR1VYRQRhJpyjcuEYLuBAiggyDq3N",
  "key23": "4VvcHgjWqDTiNRXbe9fwVN2vTCNBmjs4D3prXaJ43WNUGo8P66P4zNk5zdG7tbZ9GoNdawNQw99MxTBh1c2qsKse",
  "key24": "5vJzi3tqnnJsaFuJq5jiHhFcoMMNPf947ACCKxuazxxaP5dGTjacatQgP9eojbZYhGjAgXViYgSJNHHRZy5d2mJb",
  "key25": "3YmeVvenQkUYEyUL2LBwHMTCzcUEo23aNeZWw1v6m6KiihEQChJXxeQnRwe2qbQYX8PAQuvp2btWFVsp15HzJTDd",
  "key26": "3SUmgk8wmwcmW78KtAn5riXF8M2uQ2GUqeGTHrxwUhdrvgd5iEGV9ajN4W9sJiwLnc7y7pjZtxP3aCYd2H7M8skp",
  "key27": "3tj759fqwfkseXQA4d3WpmeFm5gWy9XMVijNesV4MkCPG9ynEX8YU5cVaJMR3sV74dKTCWxqLxinADJp5tXR78Ld",
  "key28": "xA8Nok2J3iauAqrVRv5fa3J9p3kSyZ5m3PovRV5FXbMVH4EbYgZGtJg1yMZuhp9H5PS6Z8j5yNPT2k82QKbZpKe",
  "key29": "3czoBGiajWcJM5t4TmNuDedCwfSiLb78xvEPL4RkEV3xziwj6dJhLdgbqEK4AALtFBBwxgyMXAFYsTjiT8EvSTua",
  "key30": "4siSba1JgkkJhgmfNekanWwjPcGuHTkrmCLSWgWX5MnbVgLakXcPbiYjQPfY2ooDo9YpYhdbfZpZwmD3RbqApY1T",
  "key31": "4eSXFqtptec9GpeMtAfzy3KgevPk1vjFTbnnhostNBT8mANjKwMiy8zNv6NBGadngC8mYNaw75JojWqCXYy2pB3N",
  "key32": "5RwoYWRUKcxrNHthRcbNpGU9KyqZ1vHrt1ovNksxHN9UFZXKv1ZP5Vkqwup9WvXfmm4fiLQaYhR3qTcNoHSN4LgW",
  "key33": "5KFWNxHyBauBGk2b2fRvG6ZYMS28Er6G5oXqCotMAKokUG8JNsU3bnehJ7DPiidErejFkJ3Q5KtAt7jjHsVZRDjj",
  "key34": "3SvuZbX57hoMo2iaddHM7qD5jjkz8nPYAv4hqVTgKtzR8A2BkdPVV1qu1EABiNwkoApPACeWgzryemo7mr7rveeL",
  "key35": "4sCsYNUxpLKkNh6GV3p1iHi8xJ7kWmVZ9wCvjj6zL4utwzPhA7ai8WMDY3q48m1gTF53oV8u3zb2V6PfYg1kXkRm",
  "key36": "magDLPnwvGV1MSFTtDegAvNxQCsWez7YNZgSJvPQgTF61Thu2auKNuU2wLrAPC7oBKi91xtGpoyGFkwKL9KzNzh",
  "key37": "ZjdQnCEreDrcRkqhLN1LEo1FQfTPscnoCcLcJ6FJiCUr6pgarhNMNVhGzQbEEa9FW3TVThNui4FWrdG8YbVUrq1",
  "key38": "2kejswdehdVnPXjKQmeP5rYwotu2Dyt8J13DU8bWqK2gHCXKiJL49o2NXdqA4nXZbrtfpLDRqM1yxmNvX6tEeadi",
  "key39": "cGx1uNxZdZFVxYtVHnU5DLrDT2Eb4eKTo2Nqa2bTpJUTJEjB2uYWpUxAy5GLUzxVmtUmZQSs82Mn72pfPBtqw5k",
  "key40": "24meRSyNj4zJENspPhbfLEQZ9Thsg6WAw9zWKZXp2LemZrKQt99F7gJABxtJq4ooo4gTRmkJ6mDA7UGhaotmozZ6",
  "key41": "23LFwdySBTbCfJJ4Yo2rocc2tepxRn2UqtCpVDxdwrQpd968eRBXN4Wb3XHY5J2AG8KdERyzvXGdYj9qECwjTtms"
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
