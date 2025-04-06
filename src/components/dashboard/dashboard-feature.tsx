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
    "3kKyn4CDTcMtEUcotSsS5C9YBRR83Y7xri7V1nEnzP59c22CV17UW7K5mAWZSiWzgmiMAmAjzekW7TCE4uWwdaYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMYLBbtybqimNiiK4njT7K4S4ymskKj17cye34tFoaFmNHgCoUcujYqG8QZsQ1CoU1mGrmv7jYV78xic4tdp5Uq",
  "key1": "2tSTL8p1M6R5Bvi5kv4jdR7pq8eofeKEt8PFgDsjRL8QiwVqcrytn1RTBzPnT2bSqtHR3vKyTsq3LZcm8K58MLfm",
  "key2": "3md8W85V6obPioYwHTC15CmKeWhzKewi93L9i2f2dh84QaR6daAvCPboAXkCVRSTviYeSREANkg1D3N7NLx36Vxh",
  "key3": "CNb64NUsT4NLpKRhc3MXpsUA5dye78qYYUz6ASyRJHfaEthCpagVcFoXGUnsbyvZz7hscW8R9rrz1fnJFFeZqJM",
  "key4": "35istvgc3VfJsxNAciam9EaPyVfXQiN7yw8eftTAbaTokNjZ4kdyG4aGNntGRfFnocPz8iTDEVTEuZAbmAjR7QyQ",
  "key5": "3vEtscVVEEFWdUX4kG52qYvo4zgW83HjhCVzqqh2gWip1ZYgzUvGymhBGoXCB3inncpxTJQwUBfy1GByYnF3aF1z",
  "key6": "4TYVcCcPBQwXsCJYCYbzwucoRBtvEHSvcGdma5BFgve949e2PkNJSBRgWhVwUrLC9PU6bfvvyjVUE22pTizQHpXV",
  "key7": "4gf32sLTsi8zx5HLKVqUmrCYHq2mi3Gu3ttSfQGprqah1YQFTxVEWPEUGdEkL7AZtExZDTippNygbStMrDQwT9ne",
  "key8": "3xwcy6DNR6r7zNbrtzyVgHfLVLyafBPLh58A9s7hXoP5VZdSC1GCDVrz8zA3RSKQKQs3hzi8FajCi4vZiGckvF9d",
  "key9": "wDBpZ3eWMo8pv7TUYp3zccWMRy5oXmuq8Vy8xmdJN8MUTQ2NXaPbSkzmnwDcfn4Ua2dnwmDHWroETGNTiFNqYoa",
  "key10": "5jSafpbLJkGEKFSXvaeotknVN99kJi5HMi38BcUmmjZCeqLjiKgzxnFfp3JLuATups1vvhVDNJbuiGviY1oSZ2MK",
  "key11": "2LgTnmBrzwCy894FQbL6jN9FYH4UDutLUJMVSyUrJ9Uz8D7XnnUBq2GHkJqsLd2hwWAm5DSRrDg9RfCck3TsQnD5",
  "key12": "5sp2WdyLbScEvqXSrbfcruzTGEktfSQumTBvxDK3Ap49H5wjhNJx8EJ1diFMzLo8faXLHmpFzcPZWD4gJxiXUmoN",
  "key13": "3tRg57UahqYSxyKAQvW8eh7Luu8Qpe4ZR15Q2vugDDkq8j1YcYtXDQQ7g1f9gd9m4L1BEEzaMdbw85oztw2AbeU",
  "key14": "2EdKckxVotnofMwY554S3yfwjNVU1KmrMVcHSAFM2yKLa54d2zbQsYWM6kd7TLT5uJUxFRrwFfLzFt7UmarvTGDC",
  "key15": "2yAvkJx1Xsd6uY8QGsW4QK3VShiFRMTsVm4zSa7fv4144DQX3XbcfsXS83mD3F9nUzjT5NL8CE4VFw4oRbK9YEy3",
  "key16": "zJXpMhVXVrTt96pQUorVYK2kSEPzKkvrFe4oDYEqHd5ZMxGBkbrXd8PgjXdzPa1mJSVZRSiXbpXYST5TSBBBXQf",
  "key17": "64P1mNcTgfoebqZaADmmVUJZfCjrypFzxELwM9woE1HnBRZpYpf4ED7mWEnhnW6EZ3ezM2GD71v7v28K3JDFRjkp",
  "key18": "8BJX6ip9HVG5td6nVKkzGGSoApjHw5kF68EMuHvwqGA6aMRWFxn6MieyE5Zbj4oubTsrtrmEJcTHDMoBnu3yHh4",
  "key19": "3xzZATA4QqyjkyMuzbZ6j7dK6VvjAuQGmd7vQCnXhmKCFZSriBnyEkJRMuToZwxVStc3KRBenh6QaVt4son5d6Qu",
  "key20": "2RR5CJQFJUhtBHWDR6YJArgtAh5y74deURgNenAw6Dxu5KwopZcXX5RY3FdvnFcJA9vwpa1kYXf1nQ13bSYX4aog",
  "key21": "5ef7zE98grh3KdPigjm9aRdcwfiBijaXZh88UQ8Z6f5VTXRH4zULkWee2ri5gA92uxYrTiE6Lmqzn1ARXicf8Uhh",
  "key22": "4Co53q4XUVuTuHEBQyy49rTWMo6tg6dfzkKp57kVXXwk5DsSfTLea9PczwGoFTRxnQsoxRJL4XFJz9JGaZ2VRBqN",
  "key23": "2h5PtgCXegPW4EjgePf9uDt7NpBV4HgLJ4ZyqEG4H6MPBTCeW3w4HHQ3JVbwui8ZcPscWoUe5w6ijeUp18LTj8yM",
  "key24": "62poN4m2oxDa56fcpuoKkzZzGVhXEbGuW4sk7VPamW66YCYU1nZKrSuVekr7tzJUKU4WA2bAzybhvTcTMxp2Toei",
  "key25": "Q7AUNhMMrNqPRUxuEBzVrgjMesBEEvix3cgmiRr9x6yhiG71E8Q4rWyzLt8nm4E8nH8T8hkvMQw7jTD9SD5NQXC",
  "key26": "3yAQ7aUzLkCy4yJVYoDhqBVDiqJ5FQPfGD4qAfSo85cg77izaeuak343JAzPE3aZTLxkwTzcEgGDnH86UKUDKxXn",
  "key27": "3PFUE88rNWLd6B3xaZUVR8LufWWJKpxprM6z7YRKzZL5h8vBzA6veYYPtxDgNQhMoiEaYD9hBrAg82G3Fi5Nr8qd",
  "key28": "2QwBgBT6MC9qAeNEeAQjisNfrqbLb1p6M5RuR2kSRNT3ogYReSWQc1qmuA1bPYpKeiYJpSyWwEW7Vk76jUbVBQWN",
  "key29": "i56kJTMC9etp14rx7eL6qBL3UaNk2mytF2QU7eETbwjF1oJgYdxXKuQyK29NJx2BrDX8rbEz87siCGEnbuNtm7K",
  "key30": "5zL8DgebCvroEhhVgHNxnNvYHBp3FYPE8U9B5GP9dqkJZkGioFX4GiMtD2sG7eaCGecn2r1FJL37w21mxf6SwQ9q",
  "key31": "4JxhyehPHKVFmLHgnVLXUSi6RP7vg65ewkT9hUymqLvAcekAJFGXHbdZ7wgRmrTf3jZF5BfjmVf3tQyLR1h43Zsw",
  "key32": "4RWYAxrHvk795uccBuboDz5DB3F8YEvYsrhXNoWJh3P2ofb7r7x6PCALa8HHPsr1Whs19NvfAFkDcibtC5w7KNad",
  "key33": "b5veYLHfZoTgjyhzQ5SpBDpu5wTEm763o5orx7VvmWHZedUdLwW9bDBv7XirrWXKMwdaTsUir4qXYHEt7QZW1Pn",
  "key34": "UGxXQP7cU28rALzkupFWvZ89ZfFuW2q6hXMoKFZnL7heNsERR4JL7RFTcPAD93oiNctXXh2wdsdYNPkUxJRBCdk",
  "key35": "4VNwaVfBZjijAziosSZzvjCfB5Be8UdAY7ta5WVnBSpBcv85BvPG6jppHDx54ibNxbkMSchvdU42j5jyvknyh57L",
  "key36": "GnfK1KbXTBJt3mgjebjZTJWtFKb4X3XWSqmaA5fxDTXQVdQU8hjFkLdVY216HdyEvzUQxBjr7yFhMGFCCi4rDk7"
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
