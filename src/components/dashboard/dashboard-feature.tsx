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
    "3wmKum7dAAifgQvoDLTavWJtqA88wkA6QgiUzsGWoFKGoh9CcyvGjtwgb9nw5izaTrqVtzkt1QrutnWHit2srGjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdAN2sBMhZiZutkD9M71bdUzMgJ26fBMSFojwaYTCdBMYsZBP5qdZWixmyuS7K2UK35fTN2yheExNjiatPApJzD",
  "key1": "3cpaMwYPRtxZbiJqYPxCCZxYomgFU8nJoCEvENm5wVRGZ8FBT7v6Yujkn2wo6BRjX2m6nkj2equuMAwPQeVKWBMv",
  "key2": "56HkYHnrVMDPvUbiNwrdj7r1sEYV8qQsAseN6sZSma1iYTN4Zub8zD2uUS6dsVh8ErD5JJiHbdXJ7WfENfacNzx8",
  "key3": "2F1HauSWEKyEsG4QAACmCtGoDLDHAojcwDXsv8yNhu59PbhrToEcZ7GxY4pik8BbbdUWNJUoUJE2pcTkpVkE36Ek",
  "key4": "42Wb6ReC6XHRh45KTkS7wYqT4SvwDPg71fsDFYdFB5o9XdD4W1YB1b7tVzbxGdLXXqjHrkzZhDQkbHWq9Y2CnwTX",
  "key5": "2TuEtpg3C8EtJzEuxduTP4xhtXwrk8BTNs4pJY6Mu9sqNgXyabCAe7HhE1k5vao724S7FsZ16uinxrG2JF7eZDi",
  "key6": "Dpf5VV2z3khdDAgmHPpDohNLHPvUfRehEYhzfWQZJURLSQ4YBF98modiPCso6CoetuvnpwB5h6E72KCHT724cA2",
  "key7": "fqTuD7gZwrsNBxNoavhfzGc9ZY2bLAXXzKaUZCm39jMThPkDd3b4yEdEPA88kUPUovjxYDVC87fwWX83i9oqRHg",
  "key8": "246i7vRwXT1sSTQT8CE5RUo36uDFydgcvZSPhWqqn8QRdtcRCmDUv4yGvGWvVNUASLcoFEEp7ofJ4RaqwbEGuo97",
  "key9": "4sFbXn99SU79DcxcgBYsiWsevA2724X6MWS8mSodUQkQnwoZvFXRxc7VBZeHQ7XomgecaZjZ6h9qXxFVeYudXNfC",
  "key10": "o15qMRMbFHFuThXYgrkPvF2RmP8nnYPj6VDv7vaoEcV1Skn2nFkWkEQXKnTU5kQFNe5HgNU5m3hK6uEPzinShcc",
  "key11": "HuKRY6VdKbdrJqYgF2XuBAtRSpcGxsLmDurHGHJW8nE8jziYqHoYzpFHQEEwrWDJi3dV3qXKDJhNGXyNVUemGWJ",
  "key12": "2iYnAcT4L8NHziTppMdDJmfntTC419AiwKUqNmnHkvYohFeCvMfuJ5se8YwEiNdvERjmbdM6WNiw5fZPWqPQ5xW5",
  "key13": "3NP1pfQhzJhF6SQqpLZF9BcaAqpuHukyCsZU6rmGmZGnwyEYkbKHbvP9eR1VUhRn78aEgSy6EBpRESE8XNGFhHkZ",
  "key14": "4rge6eYKHkz66bX5YUrE94aXYFGm3MDNVtDcHDVe86qmLV8cksGtMcBStqyKMi7PioC7cacg8ymdpFqnKVYKFNvP",
  "key15": "56CNkiz6V2vrhanGoeVThru4WjM5EsDRhuSom5jLZJYp9heZpeQq4LuR9fGimKHWuCrTboF3tEiVShq239RveWWp",
  "key16": "2zzp9iYBrqNqQyM7D9f6FnW1diSvTL6sxhss4RmxuZKi7mfSufuLaw772QM4CFbboxRYsid19YrmycDXm9cEGPNP",
  "key17": "49dC8x2FdNUEi6B9467Z4jVpvyqpd5pPsoPVxzt31AeoXJoX7h4vfu9m8X5CwpRymf6cjqTSeXz3x43sj9af55za",
  "key18": "23rTccFHFYAW8u2bA4QbGkd6FTzMiaim2MNx8FS1QwwHqGCwuurKgigpJBHq3u9Ny6evcC5YTz8g2AYy6dM3TvrZ",
  "key19": "3ESf2GxtCzSEYv2NxL81CQiUzi8CrPjFeWfUaZmGK72YUgKNop8d2BF7B9CuY2Wwv5542mQwRUo3ka4SmFTmQgoo",
  "key20": "ncUuEZsf6r3tjYi1axRpmi9mbBbYSiCqP6K5mGisWxf5RhpurSFCenckxYCvS5UWpHt6fEuHeKgLfqy3AxiSj1b",
  "key21": "3b1BQ3iXYTrXhvRQLbJDL1Td5jRZBe2rzZCgwcHoykrwxYUAkaC7SVwugMy3XSuY57YUT7iyQNCEMawAeqJkKD3R",
  "key22": "4Ta9nTaY7fcLu2TgL5j2FEdwhTkaSrEufZsqnnyN7gjuEAojfuRPkmmshSbP1vwE53mwJLVPNpo1D3rQmrvK8NJF",
  "key23": "5MSu4M3SRXu9du1yjpjGGTskdXTKQr3ymXnpN5ciUmgXg3ZvSgvjAYAVzJ8phPR89oBYKdLQtSyzA2o3CUyH1TYG",
  "key24": "5AkaXtsboVYqRXqKTnViTv7f3r86KYxbMkaGXJTC8AzHHSg8KohUJJf2U3MGhYYR4pts1Wq4rPD5qYz2g4Q3A4K6",
  "key25": "5M65fCNPpvq5WGftcYZKkB1PRhoTyMQsbDmZqqXdGfF9Mt5QBbU2xM65hWtgi8yVxvRqxWNj8Rfqvhj5EtXV66mw",
  "key26": "5QdVCTEAh3jP8BoBzthRp8S3ZjqPyJS8ZWvRPz8N8arofc3z1zbhGWvwDDJCKAz4BbPXjKMZjocfeeaamT7tppKP",
  "key27": "2SZvdqgBiLjW5UdpvDT2dmUWfdgCcsPbyWeKSYw6ymh2joeS6MaETLxNc1CDD17Epn263ga7XaS2akh3e1JBqRXk",
  "key28": "5ZcACh37vToNCoyb8ivf7RY2kDQQ1XHT56iQRBt2Vvq2zmRArSkZe6mEY4tUYYwitVcsLWue6dAW2mDnA8SaYHin",
  "key29": "3TaFbQBnYkx8mWLDgTiV3bXzDUQRhuZa2ikaDcxcjTJ2L9Hw3LXRYftKeJunzgBKP86W8RBemUyeMBoZfqZ4XSyJ",
  "key30": "XqhqKasaSM3AYtyWDjHcY3HVjWeTchKewF31d9qF1SWuLwBMiPA4hsci1mqS91Y5FoU5dHhWrLQWK8oGSfePG3e",
  "key31": "3aQ1131Yx537GNy7Ed72oUTmLk6bduavtJFWvxwaMAEbKoHS95MfEi7aRQXF8Mk8SFprm7hkBW2Cffqx2SzUh1dX",
  "key32": "5fyqiE8r45W97h2VjjGLtZZ8uiMjUqy34LjGRqbARYNd6zpCZL3LXm4erjhC71gV7LJU1R17EzUytSXd5gy2FMoA",
  "key33": "125MRGVXi1EBZZmFPHcUta1RSQMxG2mruswpKeqrfAJ1CwEtNUNvXRfFvKLUj12LpvVU7DKasR46aH4YyNAnRAEm",
  "key34": "58Dk1Df5bJBJMQwC9q3z92WN6Sru2atp9bR5JXNHpn2fDSzKmY3o9B24XzphEWsRBq9wc8g6bRECoehNx8p9AAg1",
  "key35": "3HeyUhtZhPYUxgDmdjcGBH6fv2GyMf9w76SyppZvfUtdq9Bb4MfoTGDFdsUGbnmCLXmopcxVE2ougWAKTbVK3uGG"
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
