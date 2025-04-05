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
    "G5Mmntmx5nvZBxGm8e1s3sdqLd6o11YoR6yMh3x6ub3H2kyScH3j85RLqRtnd8pGUdzSTN3a59hEGfMMHKEFF6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htBRCT5DQcyxdhjdTyMj92sdqSkZyTUSNrijEKETVgqRGrNHjAznFQSMnYqxP4nx71XwTB7HdLo7WV8cTLj8JDK",
  "key1": "2d3MtPXnUTCYa19EcaMguHxaLHXwnHPygxvsGGfrvDT9NScSJVRMZJUWjV5ySLbsjyZ99D6tEjEWaqmdp2qcSos4",
  "key2": "2LT1z7t1fdCW3oUJwiEVFGEwp6rR6r8c1ETpwEhQJBBqSditMsTHjb3CvfGrPjxEfVjSsrAuZvnoQ4MUqi3zcRjK",
  "key3": "4XszHGwTrEex2kdkaRiXSd5wToM1Egp97FhkqDUQPdYJARsJ3JsZyfaaQKTG9tKzfgU2QbuehBxKmUAFsmUfTPq4",
  "key4": "4YL2heePtaqxaCVEoTtc93RnCPAk2NhzS6pFZmX4tXn8gXqgS3XiqcEdXrGmTa8BQpZQwFcSVsDdm2FoedLWA3w",
  "key5": "4vGjAQDCH3GFt8sZtufHWaq9ZYLyqMAAdjtJaeHc77QLdiTwQKd2ETzh37MSzQZhDy7YjzFXHpLwSeQfAmaYmctC",
  "key6": "5DpEkhs9x9SUhJ9QnJgxKgCpKGkAK8uqmkJKgurUKkXwE4gJRcHd35JhqoZfE5U27Foc4o4MU1DiwExW13b2F3N8",
  "key7": "5GQzZNZvwgsgq6hFw6ma3D1xpo5gMkCJ5jvRqRxNwxKamDMMM92ASQ3ud4gWto3CC39MaC7qJfGGvnLXsYoVJhEf",
  "key8": "5CqoLXgro8yWTA6rVYi7od5G8WEzesMhdBkAfasqRp6zpze4VWV1f8ks9TW1XRKFgmALW8naGLPXWPKoWRXdPdsr",
  "key9": "t7LVJ1bTQZTgFWLkLo8xc4EcQVXBQQ64JtPctn6axe7GTNzP7Ci63hQnjr345RW4qbSo2aRka6KpcpHVkcLnWLz",
  "key10": "RQyYzDMG25ULxzDJNm3n92yw8KYVb3uJVpCK224fqV94cjhky7Jzqm82SNwfizVfNwwHun6KSusUtrAH6Gn2YPH",
  "key11": "k3bbp7P3RDXjsNA8c2SbR8adjUu1XbDuqNuXe7KHQGFu5jm7GR1Z4TavV6URXoasTodmyQR7m9Q3R39xrxw3To3",
  "key12": "5mfMNfG16P7YiWBDMoiVWLpK3vVSGhtoy6JgZbmh2QThodg22SG2YVEkw9799JPJAoXrgxURnnb9YzT32ta2QtDS",
  "key13": "3634k5a1woV6Dq65kx4djXaabcrVae7hMzStDs1wQ5MhVjyuqTuQKgMW7GfDfbi7Lijb2jeV2Ji47T1bJe5GSPBd",
  "key14": "KwQGqWijGgUxdomjkmbTmtzNYHGcppEJCAEeFsqFDapQJ8a7iznoLrRAtYHfCkVjeMoWmXVrndrZ4kYAJ2jtoTe",
  "key15": "62PkuuR4PBezUqiUNZFCDXKyF1aHJiPpM71qUX2QfqFfuLPEku9bduZHb17PkVv2fUoxBF6oUGA7ooX56o5sFmc9",
  "key16": "3q3VXTvdN3JzXegNVWF3AJpmrTdCWiYzhP9Z7suAHybPMmz4pLTpm1o8sGrXxesfgXRJ7DWH9ZRLT45SdXDtbhSS",
  "key17": "4enAwd6GDGfrvCSU7nALteN8CmdKq85iDWbMN4WiajWScSoGejsCMLHD3UsT8eo3dtHi4WW2SgvWXGGJDSKsoBmJ",
  "key18": "48Ru7GaUeRCL6kFmNYgYpF4KaxwHb6Yz9SYi2bdMWdF3z1BRcr5dhFfaqcDKCbYYn494B4pMM58ceBMmx2Kb7jN7",
  "key19": "2rPZHSLdE7aP5PCqLWFRkpeSmWT3432ikYtcArYhC4bjAbuhTwETb2M1Uhvniqumxw58z5K1yqWhi4s2v4epuQmx",
  "key20": "3fFbV144QZQf9VkFYunUcswqmGsLJsNi9nnr1AUjnayhqtmGSnjHThrbCircwVAfPZUkJseiQY2jrJj2qYbs1Tnq",
  "key21": "4yRkxouCYPL8Ani3rFfHGxwzod83uuwskB4G6Aa9nz8swQNKZHUHNyNcdVwd9MeJxE7JiMX4UmcTDLtWimryyEg8",
  "key22": "3VKJygaWowURGnSENU4ShZ6GMwfJbWnUQDHYBs1Xp9abA6ZagEjcFq5tPjQDiN5UHpzDbkQwgtX1cqVga6RVv3JC",
  "key23": "xtZD2iftjsnMAVDNa84BCexLTN3aJy58oTmaq9viB1XTjqf8CuDVkn2DUmLpLjGRtEok5XrS8VPSwVCjUACyg4m",
  "key24": "dmgbERsmynekuEgh5dP4Yx24AZVz1pf8KrS82Q3N2RRustVy1KtZ9dd7QRmfDWLNT23pnYJfJ4JXiR8rNXh5E5U",
  "key25": "4eke1VKMqF8xJKPNxpN6JtvCzSvSRkfsyFX6sjjwjXwAaCbbj2pvgEvwRFpPyjhT5n4fdhMwtahMoKch8ovpnakb",
  "key26": "3FJqHzAL9GPqBDcZP31xPWqCKyEppqU5Eo3UicRK6cuTtn1rk8juDNKD2nt7m9RFD1hd7hRGtdyLMqmU9CYSLfqR",
  "key27": "3MPLm6bV1NLnk3GJv7tLK2bXKhJ6fVK59vY9n5PGZWjs1nCnhTDLJdviumz8Xy4VYBHjbi1aprScRkrgYGDTycL1",
  "key28": "2Sv2y2jfLDSVgGsYAGrFkBJ7aVNSccGcroGvYmWoRHt9TiJf2VzTkbMiSCnjRkLDVB4oYQ6zhcs6eENcFwgn5ukP",
  "key29": "5NUB1imQXoGeaBBfdDrRYHoLXUGVgDDuJQ7ZMVTboXwhR59TPDd75F9YjhMdtGHBwPy1cfgjFS4potX7uw7Cz4ox",
  "key30": "62ckfhJPaYqWWjpqFEtgxr5WF9FswHJ1NFWphWzzdH1r5LVn9fotr4u4LQLJ6LLHf5Qrmk1jA3KyANT3W5ndtH1W",
  "key31": "5VxSvUuxX8CUDzVb7CRxzUEvvVnQSqU4xeSGTP7hUkEwqprsP6D4Hm2agRC4aTwuVNQHHj7bcfuucfZBjYsh6NoS",
  "key32": "4dvtZ8J4PtpesFQxPWRoJKPCFxzoo3Sad4fghSXHquTcospQmwYPJX4gACo26vqVtXHHAKwWTuafduFnv4VZccZh",
  "key33": "4TxL1QW8UxsQWShGgjbbQJwygYoMEYHYWiN9S6CvTq8VwU7o661rbHYDBgeWNxAnbCt8Q21XSqNEwa5ZtfBPbkjA",
  "key34": "2eJzQQodnJm5VgcVaw1Eosdjv5ESWRs2PWrghjkG4EZQUotc9jrk68ExckXvfSUo1CoYVa5Fj65gMinv28T6GFUS",
  "key35": "46BL5kr8qjVW7H6Gvh9p8eWPUrj3fL4jE6cS8jVgkUSvAqqz4MVR8ZSNK8diTmbvMWkiNPQh9tX34N7TQ7Mtd49X",
  "key36": "45RQurGsFZUrGBUXwyjE2v6qKtpys8ibz5jCDiqSBzehot63MLin5bhrSBEK34wpi8MxupREFL1rZ3b5L4QgaNjP",
  "key37": "jKHsyrRmU7r2D1zre53GFbok8QxpE7fUnvP4Zi2APSmC5EiCYioNa3XUsWeJvwiDzu62yZm1NogNSmzeCV1q1MJ",
  "key38": "2CxqWfCMPA4n9r4BsL6Z9TeQ1o9bgQSaeNmcxMV8TPzuydbGmj1dbN8qsgd8CGUkxhv4Jfn8bm1CSGcZ97LbDL91",
  "key39": "3iHvcbrV7gM7dRE4YZDA3tM2F3XdqnKtuiiQVfaocUKapSufALXVCMQmBaVof1pKhtRYrvLWYvqcWs6tswbUqjQe",
  "key40": "3JEUqWdQdMdjS35Zz4MhXFZmyzYDzuex3YnRFQJGwmyQxUsd7Jt2DH7P1MvfBHM5yXPAv4JpdFfTi12v86TXsjLj",
  "key41": "Ez3Gx5R7j49ubLaw59M9sbH6udgu5hQwQiNYwaLi1QEcusZgTnoLkXwFgMoxtpT1skxkRQwgfwuTDzzLhYyKaYc",
  "key42": "4xf8ueGCHhuNdVAWEfgWndVrJGsXf5L81v6dJyKMu5tL2FDwDdEDqWZbtK9xt22z1WYdvx61Ev4MJgapxTvQyxB2",
  "key43": "2qbvZJeFT3fPagMHkfs4rGJ9xVo2AVLXRw6ZuDoB8GYh34ZuoVpbMLyM8WqjWoDWm4u6ZC4eccmdC2ydX9P1MGro"
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
