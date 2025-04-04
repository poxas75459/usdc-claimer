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
    "2LmvmJCtxYDySD789dGGzBVvPYHhviiK98KvuUZrBmMY2kaTnH5oAyiUzoiBA2rjMmxwU3pbFtSZSXiVBjUw4C6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217uzP7mxFQLm4FvTGzRYB4HyigfJD4QHNJ54tD7mDZ48kwBXJns9d5XTU3bMXXuMTxYnagi9qXEa5esv9bW33K7",
  "key1": "2LsAxDVT86iStMoGg2gprw9WjjQsucK8XsY4WVTomimmiQLPxjZtU3pGtd74dqnVViZTDnZvMwmh16ZPVnavu5XN",
  "key2": "2HKd2ccfsPWUPGjerfpp5iU1wYsBVH3BeXAWYbbtvDqkbbJfvqHff1GN9JQdUHAmvybf1bEUhs8f2TdKhVCZpQi1",
  "key3": "5K8dWxhZFWfgcKCLf7ef9ZQmSNKy3w6Mt5eg5CA4KXJdacEEmHfcP95e375wgLHSLdYtr2pFxbGKdr2fksrvtFUn",
  "key4": "5CkpEiFEKH37HCWEfabHXC3XPXhwhwhUVDbKLH67sfDazAZmaze7Bn3P4FyTcUHbajXmBptUgvLwzusQqR1Pu7d9",
  "key5": "2e5Ach1oYk9zDsSb96jD93oH1eCqcbTd3BG5KDJ3NEsK2CuMETi8YXVNSxUCMYiPrwsikbmxMhGbePWw7i8W6udE",
  "key6": "4TR4M8AbnfnEoAmKxXXUF4AoqZnfnWMji2kxixWQKHV4NMtNrjZ2T73XVK3Sbwgms1ZsqWsmg67MBLmiKLri2wpi",
  "key7": "SxLRYt6yRZ1Ev32CbnEY2M745gZB8LGQn3ZEbudZjiNMpkaGm9LdG7FVgNnNZeQ7yRBKpMRbfxJ4ZPu5ztAF4Xi",
  "key8": "4oADMudc2y9FGa49rfEY5jGfp1bhGtTwCGs51cqJsWzdtFQmGfHbme3j9akADp4DwWmLCRuzw7TAh4NLJ4tbQhL1",
  "key9": "3R8Pu5fqsaYfpQ3k1KSZtA7mkDbvGortwZZR1Gj58A6QW4svRn8Ss2T2vxX1mHL8UfjZ26ygpDdruMhtPZ8J6BjA",
  "key10": "5yNuifJRafRXyLumUUpTsjpgZXEUqAno1nCWaDkh77XMCZNMrsPoNszfDKdN26bQwwQkztJGSqfJyDeknYfm6YDP",
  "key11": "2WxXeUQoS3DcoEHFBurT3GvZgP3R9cVKe8ty5XnnNuzHVfAa2Ndra2DqhccVyvtuXebiRQKizRPC8gVKXcqABGSy",
  "key12": "5i23TbB8o4F46sFeEiXao6bxFHUDmcC17Kj63MfjanokNubE9F77mcc3HjJbTP6UPT9pQQYT5urpaYGSi2R7Z4MM",
  "key13": "61czyyjxho9qbJBnauxS3FUSUAfohQ9gJ72hA6dSJbeqgHgKowjpv5Tz8oeFzkqkhMpfa8V6Kdacpmc6tv4mL4EK",
  "key14": "3fconjrYpdUN3sqH48io9LqJpwyVP1KvLLkE9K6yQ9C2JbGDFV6jGotEHD46Yj8jmQbLEsHuBiKFB57tuQnKXV3j",
  "key15": "5vSwT5y3fiKkfWY2jFAN9dbzq33nnvaY9fCyKwArSS45pu78LcZw7xgPRA1BJ424XM9UUnpbMCGizA8ARxfnKPMp",
  "key16": "2W3zpofnPRh3JrwLh4k4iDRpE1AqCzKihkS7ZrJiAump1PnuvHRT2CiJRMrM3rAagszJMDcNYYTXTHjsd7P8zren",
  "key17": "5Enne7Spw1Z2oSfbmH2MyHAor8NQSascYimqjBbKLtHPF67VoTuD4kaxsp36cgJB11NHopos8rDUjKiEHgdxyZ4G",
  "key18": "4E82r3TZPkcDEKuPEsC4pzEgsHvsEY4xqMBWf9mngWshZNoUepQcXoroShaS6rQfdaxUj29mh9AR8MwB89qQ1TXA",
  "key19": "3yk2xbPDsNmJyX7ypPXsNV3DaeTFX7KpN5Nvv8pPAC5vxDowSC6fRHXYe7jVTs5usFVsxJpy5ugGBT4imaxx8FS5",
  "key20": "4LC1kErQ7hfBnn6SjDJ5FD6wiYagPsNTgVvKNxthCycqEReVHBhdDxTCjUC3gpyfncYJyxSxGCXexAFLqjrdNitG",
  "key21": "51nMd3ihRpnmwkCPuZ3e44sdUbSzAQAHa2qjXAXdj9HaD1U5XL6i9SMPgUkVVSQs7vABsvfsj8NQeKeFsPcaZDPL",
  "key22": "8pnxPriUbXRihEN4H9xobij6M3Afvo9xPDRfJ5xu9tEeV38hZ4Ax6vGQqjkX5dTCzRzEs33YkkNC15pX39KMGRF",
  "key23": "GG4t5gnaDYjXzQuiLaabiyHmmpeTd7SYUPbuspqVTBMktWxQpJFcMhBMGCPMKP6frxYYpbeY4iEJEKSLQYmSLxo",
  "key24": "5haJgHXhTLLCBqS3QR4aNqGT4nGhk3EnT9wrkSysKDksLFR4cGciq3hAEZCX23WQR35GAAxPLB6Uu93i1Q5TLMJH",
  "key25": "59sKGUjQMiu17zBvqn3KyAUHhZT1JUMuGwhCJM4YMiBY3S9XK2ShzQq49Q1Mprc8SNcxCttVst2f7qMxQhhzqQWU",
  "key26": "2jm5abtgpNagHX5ZuSLNYi2SkZXKHAK1sQVgbiijtb2Q8Piu43xKv2AvtDj1erFG6YuhsihG4cHAnx1heWZvTGTz",
  "key27": "5wzCEw6GcczCF8TrLo7rRiGTAijj9yR9GP5vhoyFSZaqb6j7weNN959ybV9sGNyx1a7jXSWwWys77yPFmHp2z717",
  "key28": "3viPPfo5u3TZijqnZ38gackGcEysJzFDfwxwxHWqB3mbj1xpWMqtJ3UC23PeCxaRw15rWWSH2FXtfbKf11Vq6ay",
  "key29": "5uxUQH3jQSwMCJAa6jrh5j1QMLaDxwUTfeLhdRB6qBNdUnXbjXYRgoY4aLF5VMPSmPaV8gK39tv2vyaVMrCy73mL",
  "key30": "7oLhMqQC8jET5tJndck1zQMAdQMFmsMLoTnvH4A4y9boACon74F9BcuPzK7sDd7nqSQneYaBW64BdxQTmAd3WeF",
  "key31": "2qxgjXAAF88aUBTGwfr6cLyqvj6P8K2dhr7Czfm4utxFfTHDZsJ28ivHJvz5MZ1YEsd1h29GCyMZKYMoS25MkKCp",
  "key32": "4ocQ9BsGQWjtuFPsXRyjraY6H53wHAQ8ayqHqm2228oKifJXW4ee5Z3d9QB8rbAEcWJ9R3uuz8cojLaHRXuigehY",
  "key33": "4N3pJrNm5MpTvkwuVQVz2tpfNbnNiLTgTokVuNkFWKRzuxoYwimzgUTiaciWFEac6gn82uvk9GDJjd6Z8nk2TX1",
  "key34": "56VFS6AK7hXAHkPyQhmXw3KWyaS2eAMD3wWSuQAC9MU3Ue2d8xtDd6fwKBhyop7QwgVqY8bhjpzNeDKERuRQT6Wy",
  "key35": "3YwYcwrZs6Qz7i49jWymUW33ELvkLXRhrA7FETz9q9KCYx1Zcvar2N927tehT1L7P3kUwUELEuZsFA5mqm3gQ47C",
  "key36": "4uhJ8bJHaDpAvQ7joGC59STUpCQB4D4hVBcRieDi6NCgeEGcyGV84XjLF7yaBNxygAvV338AHnkPFs5PXWTZfw4a",
  "key37": "2ri2fe8TCcSLnkCqF2z5rkWJ6bHtPE2sgVXzn1tFeabdmRZ3z5wXw6pamdo8KCcYCxfbnaF8xsrey9GLTKP35bAA",
  "key38": "4iLZFCKLbCNwW4AvifUWktvg6bfk9pUZVsZUVKx7DqRdUuqyR17Mj1tQq6D5S1sJdViRHFDDUTWf2yh1h9eDWExY",
  "key39": "4Wi5rDCt8AqEg7vdEqLN8GqEzWZZCgFRhbzM1C7FtjW37DiJ4Mgvjk6GGKBkTVb2WMth75LiSgreXWRLhwVYA1rQ",
  "key40": "2rHBRDzrmmT5b6LtXhAWFEHbs8i3LHBJF9W5DM7LJWV5M1Ect8GQ4P3TKk3aNNLr1zFxHk6MrMNrFyEz8GYsptqN",
  "key41": "65pDGAH73FTmzjLozv7en3YiPpDE23pUsB2B9bfJ2p19HmaEQqnY3Zw4kkcqVT5Pg4BKLmomNKcM68vhqhkwyE9D",
  "key42": "2QNSwMqHm5KXKCkjnyraNBAtsfqgN4xVcJQ1ZdRW4wJSxSErSTgTdM3ZMksoUPKFZGV2JpAGMWRjGMgrUccURddV",
  "key43": "2u2XzGeK7MUVVNWrom1nHXckkBg5VpheBkGvtMHc3ntTCdpqEKNEgUxB8f5FkMQU7Jt3Wqp8BJLxpNzDaYoQFX2R",
  "key44": "67HqC9jfLBsTxMB31fvkMfuQMfdfYWqiVodSsK7N7HBaZaYWTW6HBf1DrVwKa5seEVCaCJ3jGGj9JeguFmx2qW35",
  "key45": "2pwdfLtJN7ywNpMYYAgzRjmFLq52jwUUMxnQprLbXoC7F5EB9pmBLpPtHqD17oAecHUvfyj78MwJKtvcPYzJcZmj",
  "key46": "askoVvqGxkQYF8mGYEZQxUqNSFLbeBQSojDKYQZ5zvNC1B8JAZqWtigRyP9fyf4KGgwxKco1KHxJv8k4S8QG6pS"
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
