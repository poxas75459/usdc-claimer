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
    "3YgcYdcdaQC8kKhnD4ZQVtwNxVSFKHHUBbZ3GEEMhjE9npqvmzYFNYapgegrrK7TjcARUXGDC84RBzkUVwCvNFox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22k4dX6VKZV6R2qrzGhGkziCTyzv7faYs9pQYM92D5vFuk5xvoFgQgueuyGWMEF5QwApcFvCvCSyT7mtN6MnZbSR",
  "key1": "5oSgSSWHaeZtTzzWAhgZyKkNrP3XAn6FWgPpUFP4ekCZxZJ5Ay4FD4bzz4yLWs7LXqZQNeGeYzog4jaoT7PC9KCs",
  "key2": "3LjWm9UcDDrZENuzAphXsU6GdG6bV5n2WReVKKw1AwHYgdTmVL69tSmkWLvb5PuHeWPkjUegbRGH3dsuLWLJTL8h",
  "key3": "3NmKJcWh8oJ1XaKTDZR4imrrBS62kNh3k4534ZZhJCGEHCpqGU1sZTmc4SBeVYxVxri58fbNFCqVEa4YyYaogs7p",
  "key4": "2mpdVQQPKi197fx3ZTJWE15jD6tFzcWE7dvNAFq6XviSjvKU4HVu1CgS2kwAfLipLGUgYh8oL4eEbEBn5Mxqr1kd",
  "key5": "BgMP5WSNaL8xJ3dCkRyWnefBhhdguXSu2EKEDN2PMmbhZ2A1zVrVDTK4qfZYMMQnTbrgQmeLTm934EGf1XdZ8R4",
  "key6": "4vqgaGXmBJtxJh8UDbRh2r662HY7oco5fz1LZDsKVCgFbhW8ogvHu2nANnGaUhuDJ1musC1CbcqxzVxKoZiYQ8Qk",
  "key7": "63afb9TqrRtdveFcnuNHxkSW1e2N5s9BCTJgWpM4VE1qA3FF4mhMP1PYRF1MKXkaVQnpP9vNhX1r7H1wgKeSetUE",
  "key8": "4GdNjzRstERzUyQHyoxgXJkH1edYLvbt3A43KqyFPCzHBhHgZDjw7tfNQmxRYedNhTMDZgFBpYidunX3cAhGbu3r",
  "key9": "wA77STSUR9vGamou1GcnEz6PJdENQFiGoPeqieTeX31PzNcmyg7SaHhQh8fWGiD8cKDbJxLHj6HY6y2hsVwoDte",
  "key10": "53RX7gMcuseP18wyvYgMATCdLGE2hBxi2uSu3A5bW3Y5SM8R2nQfVAtnVDDydZwz2f5eKCcT3TT1mWzW6iAhUrTY",
  "key11": "5oLV5qQYR2kXoSyE2ocWJ7pY7XBuFdvkQ7AAdUnnnRoYQpvSFTgJMf4Z9gPiHPKMnk12jRXtjVuaXGWygeDkvQE7",
  "key12": "3xrBL2DRtQmz42QUWxqhWUhw7Y7YDAEj2Nke3Lyskg3tXah3oc1NJrJLdhx122gvMpny9Sa28YMaMeHPzAVae44u",
  "key13": "62935pMTUVL5s3uC5Mh12jj3RZsedECZfetaChntGQuVRuqWWTTcr25JFXfTsuDVy6RdZsaAo85S74yDGpaFyy5u",
  "key14": "3C4J2SnSwaHmWufrAAuKbyh3LKe5eTbrauWUZfACjG9PVBn8TLkaUYb8aDjSqCSGKqVQ6EZcxvP8UyBAoQHaU5Pr",
  "key15": "1LJaeJbEjqNLV3ReMVbniWo2DcVvAQShwtwvu6eg1wrdgSJLoCjA4sYEQ4To75dE5htkM64KNCun5LRgarqfwMX",
  "key16": "36ydjqPByD5fySoqgFmZy937RqFmMkchanvUcgLB17eUiJBKnfcC7pwDb9RTTvq8XiheHjjXnKtsz3URsDstFiVJ",
  "key17": "CKHtUVCw2ravL9wY5DF7PQ3NW3BD4ve69EcvCN3bejA56daisSybxtvpMcPNi4PEfPyyjtZuAfi3GLpkD75QySh",
  "key18": "3LMp1PjTxoLHkB331dJxS4QjqYCbdS7XLdh2zQwsJuQuAKyT61ufjNH62LKKucacAU1gdP29ngVTVQDAWJT8e4vM",
  "key19": "63dqhZrWzZvTxPVchcsfzY2jcktyHi5cxN7xjt2FPAfeDJJmAKHtQyp9q3TaDdEnzE4Lfccx9WQ3eBxzSEiRfbsd",
  "key20": "3M82mwKpCetkmo1AD4XRoQSwFTEqyjJmXB8fuqJ5X7aoHtVmuVySS74KL6gsZ9UkHk5qMNuPaMyquw8wK13v4F9Z",
  "key21": "5btaLxUjCB7ALRSH1ncdm6JDJdHfZSmNAsDQukhDWgGV78QQEfUGurAC8BgQFDN2qG65dr8s8zKF6YpVY63sC8Uk",
  "key22": "4EX9VeK6ujzTGpiaTQTJpxEyjNLJGKXX8zDNawaNrRsD4TLoEhdryUvAkV5c5aotyyi3MACXwpUTK85ZCVCVneP5",
  "key23": "23QuQTWMCNFknUGWLSPxvZ82hyftqq8chwAHZpFrrKQLX3pcFc3gTQ2XiTgsMnG4VdBxW6saPvQhwaRdBuGNwLTe",
  "key24": "ZhzYZTn8opjrU88PqY6tHGFRvC98wm5384FdQwaFFVji9aKyLT7dGcA27AS3HvMWf7YEeQpzFPJVJvQ3tfiedJK",
  "key25": "S7hS6RZyHQjEuvBrcA5CGSuwjr4wczrC6wpk1ugYpvo97JoZE9uKVwMfHT31UcBBE4XBmtnBQAVapFuRBi3Gsma",
  "key26": "3Mq1WLMUYJUM2ga262n1WmxTHssJR6TsYiS1sEe1QwLG9tkVtvXqWhfZxVJozaoxStYX6o1Xz9NNhU44LkrZ1tbj",
  "key27": "5wJwiD5Xo8BASTucX8NBeqUsaY7oUMVFV4A3JdwVMKvQdCSstAUPSRv22ptH9qxX5NrJxCgmBmrF8PGdDbGRgSdY",
  "key28": "2bRyWSX1f29YdYqA9eAB1KG9E683TBxcNEKdtzAeQhX4NuN2PmKeEwgDjTeSAdp121nz3VhMuZe6kqNEqAGcU4Rw",
  "key29": "2SafJAG4UsawGFR6bqFbP2rDT9NJwJkCcaGJGaSeVTw4h9kowi7QapfsjWHvUSYCWuxDRUbam4RbbbYJM9ASQXPB",
  "key30": "2PV6vNxMfWbxhxJTdFo1r7sHERnkqHWSa2yUcvDfVRE2ndqHdhFMe9Qv8GEFWwmUfkWYjnUkFB9Xfs8mLq1sFncs",
  "key31": "2QHGNvEDD2q7H39tAFJQp7fr6FXfZK12U1XVSbcmasJXR2KH9wU4aVuLA9SHXEyBDC1apVh6v8gLsWStF2QJwaga",
  "key32": "2e5hxBrVbVVnScCC6uoajSpLw63WNaqm9npGaE3EqCCbBks8seVTkARbo6FLN2iUqgmkE9K7HbtyfXfDX6LB8s6H",
  "key33": "44w8icPDSpY1hoVVWQAfJMeYv7WTKbqzodqASmeRZN6pttyYtbH98V3u1V41BaBDJwHHPiXNUPTGb1E9t6tkSXiy",
  "key34": "3ec8d5qf6htDXdsxe5sdjcFf7n5kwuZRk575z7QrYHbgFwCghhHn3yxVyXt5baVpF3eBXtHUju2Cd8FD5NFUhd7K",
  "key35": "3pebbtte9QgGKhxE1Ynz7TiGC5DkWSjmWfWumoafXphVWYETA9bBVdMKdu1zFfzcpGmZh6vzU5DN7gvkbviRX2Cy",
  "key36": "5vSV2yVkAraE9RGRCVcmr5NospNGCu5X2W5EPkpXqzfi4iehZoer8Re5FcQnAPXKhAVc6sH4kPGxaThVwMBhYWTp",
  "key37": "2s6sejRQwPmARfXAtQzcphpiU2Rv4rXRtfy9aEu3SebRRTLpnUnjQhCrgL3C5PZLmnn3cWx8xUKozAaze5jdMLb2",
  "key38": "5fRPKgzAAsrTdp29JxjZ1tMYRmezoxtuNdvLZUbFd6fAHhESUmgkXL8frTGdxG4Hzc2XaHkJZGYswNw8hUNoRUhk",
  "key39": "2NXrQisFAm3ffbEquYnKne7X9nWjSweFJ2ZhDs5bZHwC8niDDfwqrw3LErVB4gcv1HSFN9gsGu4Xp26xoBS7zYhF",
  "key40": "4FtUTDbAxigHuxquUac7FTXVaQpmDHp7d5wm8denKrDLPUZ72aYtmEDdB3pqAV2jL4eQTe2SEjcc9A4cTCVgqEbe",
  "key41": "4MY7LWe2ESPWzKGFpAw5SCaaotkM5uoW4sRgWBn19mhjFJ2yHnQccVSV3Tj6enUFf9Ke1rzETa3V2nwqGCTk4e26"
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
