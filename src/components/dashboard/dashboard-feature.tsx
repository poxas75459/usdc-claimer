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
    "9qRKbHmChckPwJvtS14VfD7QTmZZ5XGztZ6Wch843grvSx4XfxBc2JGGfxNHf4uHJesEnvzbEhqh9rcpGozbciv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cMuTdvrW4Gq39xhB874SBkWwD4DEzHQLhJgmw56BrbgXF2nbqfEFXfmsapqVfqcxEkmcbKj4aJ8CJHMQqcCB1yU",
  "key1": "5pTx8CoUo7RR4i8uFL3NBgnFN5pjE8ndcyHbYyLEYgco15pFPL885BrA8YvBhQUsodquWfRLEbNSbfPUUMqtUkUM",
  "key2": "TpufyhNVBF5dBLRSM1GpZtZuGsiB2czUURChkQfMwNzBg9G9Ad6tBBJ5Zw6vhWjowP1988Q7aXtqbdv8X3rchYC",
  "key3": "3wGjLFgtmpgU1gAQVvsaDRnp65wXXDhZK8MupvuuM7cuxYmu6goBfUruusCSuc6MraMFWV2VCXD91MZXiTRXo2Di",
  "key4": "zv6zMW5Codh9JJen74NaMx2kQ1HRt7hSgNMCHmXRt4QQM84rLuw76FtyA8yNJgiojJJtbJEoYRhwKv1qHx6RBCw",
  "key5": "cgWruKEZS3XTE9yYcyKSzdvND39HARbwo4umWz92CeynmMzPu2T6tPcrTGxTiCweD6v4sdon6Fg2dZ2pPMngniY",
  "key6": "5xo6EkadPGPCY7YjE7MCGcAQBTtL559p8CPKHNupAx5SVYGpYVbu7gZcegX6X8JTAaoLZC8CMThS28GEF9ftC57K",
  "key7": "4XxoxmQ7DdURasXjXyQHU4sz8f9M9uD9AL87wcTt6bLWchXWr8NaX2tcKCLbYBGPbBdHreP5WHgkR5LfZG4CfDTh",
  "key8": "5JkV5VaT1tQw6Z3V1auPdzRy2g9MQ7jFHDCTQCcRLkKHvtQvLB4VxAs5uD7x4rZs61bAVzpfFZPLpE7Q7xnXyqUT",
  "key9": "FPwYWiGyQxHdNzcKauyeaJVQzhQgfKMdsxJggBkbqCmnSDfLgnvz8tDb6efv6kieihNeopUZo1AqqT3irCRqDHE",
  "key10": "3vm7WEATwEe8iJKtF5qcqHumCYWHywsXaG491b2guiz9BoA6QZfcMJeJRWRGotCrz1MQNtFo13bx6kVxicoMMQQH",
  "key11": "4zVZdrf6nFWRkRc7PA2rzvgDcNVSYftj6KBoQBbFLJWGkvWP7mFn1gFqUM7SuHXdW355WAVSuQ12B8LdWCTmDNJT",
  "key12": "4LCL6pSthBVp5cpMfgtXM3dfK1jrn5exnJWzJYiXefeqxzyG2qiJ7DdBvX3tE3GWAnJDprpgNUhTAdYiyyQY8XG8",
  "key13": "3hgktt6pAWuxNZUahyW7CCD1HGNDEouFqCDGTJMX5VxyP7KgEuxCTJ2dMK8cw3X9mn1mZRkpWZzNbixFFpwtSaPX",
  "key14": "622pYUJZNif5nmotnPhKDr76w5q5xau1985fxiyxPZUpxWQnnK21MAzcfeTQv9Lk4KovZyuuaxPD9F6FR6Kapsre",
  "key15": "4XU8o2oa3cyX5E21gkskRHBMuPmbNDJ8ibzAiXPYatXUG33r8rR34RWKkkrRwcsUWfnCQwYR5XsFCxZMENmBa4jR",
  "key16": "P6TxHZ4kjmwZtyj37ZSdq8ZLnDtavsvWEe7bqFtpTBUpqA5VuDPPYeDPh2SdRZkh69H1zamQ8bQ5BDMVSspbAPS",
  "key17": "SZuDgMj4FLikdqe2KLRADLWtS9bRSByyVoxtE65m1S5vxPXMt7pKcvh7jaaPsa5kh1SgtRaaBMn4puT9jS6T3Rv",
  "key18": "4NA9yN7dqMjyDrM4Yv4Y98GV6tYhTeTnZqEchDiJ2ryEENa3diFxVpsjYLaUadp2qpfReYBfhzK54GwWMtSymVik",
  "key19": "2W6ZrWJckF7oHm92MHfH6dW2zA24gnDZAfFk1aTCkHcM8XLG5HcxGA6wyPTDKQoNUCACjo9iZnZX3xzbB4bfnmMS",
  "key20": "2sndcX7jamjiKLmeFUbfuR15WpsajdLn3D1NmQJyw3T8oWdWcbamkixV1fRe3M1DhBYVB4wKwsemD4MBaRgovrpP",
  "key21": "4kag6CPf6fpyUvin6pVsx6Sf3zj96URVkxkEPMtbkuXTbyRFG4hmHasfKGNs2q2faMEqXUwNyV3kUFC86p1F63pD",
  "key22": "d9bhAzCjcLGtjt4z1QitZC1KEtG9wbiKMtsa5xrCCmkzetH6ZedmfEUX8KuLA1yQbYft8Cuf8xraZfcKyyWmSdr",
  "key23": "5h41eru3k68Kq8z5NLXj2nFeJC8jJ4uuTYtcEnD5bdHsBWpkWJ3gHjo6MbqxViRncWkj98aSiixQoXnBnDHmrPtM",
  "key24": "56VsEXhQv12YFH9NgmkzScpk2YzpUVmQ1AJMHJEHVJyHenzrMeh4zjbsrxLXopco5GJ9XEue5g87jaBL5Z5n87c4",
  "key25": "4sfsnTS3Y1RUna7jLMnzDJFrGpxhzMxcn1wJQzm8iNKpWmVdRnB8LHMw7yrCaFrK6jmSQ62aRx5HpwppCTyKH4kJ",
  "key26": "66qjXNsJpi2eRtF3EFxRL9rC6xxLgRzuiSVMJvxUnY2B1Cg4wYb99eM7RwpZ1hQ28fQmAjLKjSP7SjLS6vM8GvXo",
  "key27": "5YQA6NhBsivD38dQYoMUuHVsk5zya4Ht1FTpw2AMBPBRXjZjExJ879dEkDicGK8agPS84BZkxY685E4oYyCbACcq",
  "key28": "4UugjYLyfZuonC3DgaSjPnw3FV9jQGtBtV3e7g6hcyeUwZYKTep6Gn6gFtp4eQgyBs8it4ML5poreWhp1bZfbMYk",
  "key29": "5mU2nfJhhu9BcSA17SQYJ4VLjAMnmMmEp4EPdZu4qWdosHfKebdcE7sQb2R36eiLBgPdKhgqwTYxaWKvCvio7YgV",
  "key30": "ioPzxW1wEDrqFQb7e1K8mM7ats6qe7s9S2YdZ39qxTaQt9hKJkaNZCJ2DaX5w33NxpkJRApBFgGH3pxSB4sSfoE",
  "key31": "5Yp53D7zFGB4Ym5tisToeFfMMbTzDFwj6TrdEqAiTi91WDgFfpPaR2wXhnTLLGosMbH5Jyv8TEdxHRVMF6ZB2y5D",
  "key32": "2VMkKVrutvki6xv4GWNmueqMv8GSwoSzFojVcf6wv2ssggpDJ5Jh1JpSv5AV2xjzSF22cQ8GAZ3QLmD8owWBTCsG",
  "key33": "291sLwdqSDXph6JPz3AkoTYigTBi2ri9EgffUvSuPm7xnsxZPfSwydhZKvJQBjri5etmmUrPbm8zqs48zp2UMuTZ",
  "key34": "22Kd8vVjyEMtnqtcqJ6txnFA2w1ig7358JxVsZh5AuzrL6t2pwFpVJAVsUGHQWnHiFMpNL7mS4j8PUEbFgctTX2Z",
  "key35": "2hBQygkVx1XvYNUkp1c8Rkxukwbm6dXP6oDQVxrALp1fKrKucoXt5V1tpZKQysiXpytcNGDC1L89BSfw4ygDYn6V",
  "key36": "4n2M4vfE4tZT99Y9zRJoL6emVbsAZXak5NzwLVSa22PxCdXjFfHDBoNAPuz1eoWVgoN9nKnawfwmYkBynzy2GSWY",
  "key37": "61BpjV2GR7cAkNSqVYFNGdp7PMfzLL9uL4XpRSKivt8w3h4XhFwHwq1zdrKEahCnBzXjom9TrAvP8pM2oBARAdKL",
  "key38": "5ijmtyrZvsWFQq18bM5gas6gqYTLsWBBdHwZc1h4fiX7cddhrA7P2c5ZvVwUAhbgyxWJPSL6dqsuCBqP2wtRnGcZ"
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
