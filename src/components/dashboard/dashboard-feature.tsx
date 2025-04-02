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
    "3vvW8MfzpnXDpVzAk99WxYPRpfyRRrX6N7TwijA24FJ4fzF9dYmykd3xwnGH3tVn3nrTRnQbzuHkxzX2wxafcWQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GheNmMMJBTqHWq7vPrQ72UAphcZvejwzLyEbHYiAfpw8uR6z8VcHkwRDTaaspTtea5rHoskEMvy8m9ajzjNq5wx",
  "key1": "5pd39C6ZnQUpaAjrt41cAsMR53DWybmPo124w9vkhXmMeEb9nsBtncFZmdNFyRiqQU3Ka6TjidyFYTuAenaKTFUw",
  "key2": "4c7JmFN7rKhjNnYZyWU5ePdRRWBVP9iZRHV3ABjPdBVPaQvVsPNoy8zRBqbtSzdKa5q3SJZ7M9v9dVjkuY9ikQqi",
  "key3": "67cVcr2yzkdA5ey2hnPiwSGYcrGh9BdEjNQTdW2ctaM6npZFJp4PfkqZRTvcGLMp3YisL8d81tQk8JhduDUj5AEA",
  "key4": "29sUjSaLdrpMioS2fYpxiJnqBSgSmAgFxSmieiaGr7XFQ4PnBogvg1Ks6Z7E6qv2yt347xd69kBXMq1asfoccL9u",
  "key5": "516V9PA9EXHhRZfbPakBpUskkV5Gx4gGyAjV19djj9kFPFrx7fVkNMvHAoXByaCwAHndVEc6EYhFuTXLE2HTfupC",
  "key6": "2BbXUqPetBWtqyurNoSYrHDsXMK8C2pBTi7cne3tboWmwDETFXt5hjg9tJdRGwiUnU6gEhdR2rhKW6gZZDraXBHv",
  "key7": "4boCTofuGGkP8s1Wdtg2XkdVCsAar4kvcvpBcAUgavjzbKH4ydtauRn8xTXEWSKudzuYXokuehsj9mySC7kytaLK",
  "key8": "4iWfWu4Uwgr6eKuBVyABkex5qQQpb8au2SswLxniQGexh3MpDQUqe2GtPDA267LZ8VwFRoimYbek1wr8BrMaHEwo",
  "key9": "3niNZUQcAhor8BM438jrrNeFs83JNZ56nBMPCH8jtARr87tbcuhoBeKL1FtAU8D5SG1FS3yrxjFeGes6PDRgYC8t",
  "key10": "3zBw2t6dXzjBcRqEcmsFMfrkZujgUUC842YaSjcmv2eDiA61j5dMExqGrbyu15DYFvMtk74sTqBYRdUqziahkgto",
  "key11": "3KKoiJdc68Kv15anpKLmnsjsTaC3NH6S1Y6VukSMRi6zW1QzPHb8hhfYvgV2hi22NLk8cPJbBrThr2GJsHj4vGQB",
  "key12": "5Cpi4YqK1ZTqX5CZNVAfXdHkCVGzEK1VtG776nYFw4wj2Sb3pCcoYsbqoofvtkt7KXPnqrYYu8yNqbqe3jpNxs2F",
  "key13": "2HAgNEkodymTcdVsqqE7waEr9eLKqCquTCUWvN9u9VcUNSoFEBXH6MNgxWuwjMdQ7uEvxqG3CjmBmWKxqpXqPS79",
  "key14": "4guM9NmaFswUkD2hLmdhxbzfgXLcdFFELvS639bAmntNG2Nf8VJzMjgYPTJgKYotcZ1v9GboghmUenAw8oxKqmPT",
  "key15": "2jvYHNvKMevbnzpAoLCPvNor8G9qpQibZiSfw649qaLBHfpPhn9ncC6wihZU38epds8sWSzBuGtzTSdJzYvYvij2",
  "key16": "5X64fSexEveGbfbDi1QQ9Hhp74wSDUdgmo6DMyTiJhm1fHjxT1qNf45hBXpMNMywo36QfyFRB1R33zu4QvN7QcKf",
  "key17": "4NJFzrV2R7CtaWW2gEaWLbq3gnxWsiMUJ16462k9g59H1UsMYadsGgjxxiLKp1xweoZKfgbzVvUPaYMnGaDVzrRg",
  "key18": "2SfJaWxzEJFWMuASzgHaK4kT2aq1uXWhTg1RTG7ZBgVWWb7UfyiHR56yxj6oJS3FMipXAuz72WohXQC8V2MxKwid",
  "key19": "Lc9oRrK629BNsDFsfz8QcAyu5YaTTNF7nnoDHFgLsxwskrwJDGxR8d3ea4CAsqU9simngHauwjaokzcTst1nYPm",
  "key20": "2rd5N5rgJAY1zpRxAUHDLhU6WEpb9ATgwrzyrBqND4c3f4PLPKazfLesSrV17ygeQjhmBcHnMnqzJuNc9J8aPmBu",
  "key21": "4i6cFJY3fYxPWAkbHPruY2Ve9yFiXhdbqwbiCrorR1zX13hb2BEh5JniuxAPHvWq3mpRiL2qE1dtYa4APThWfzaG",
  "key22": "3TiiP9VgDZAuojMmKErQ5UtxUgyfRbpKcJN5XfRGwotcbcwTpmTAgSCZfkorfDmJiScPApynWUAxdBjLAowwEhjd",
  "key23": "56v5JsHjAULwPa4RC1CkJquD9bYSGdwLXBfZETRsaumSEs2x6zP5nEanuXRnUzbrUy25tXcP3WcqVjKCXqwuqiJa",
  "key24": "2HfxrMVyfxSCQK7bwkqq1kpf4ga7csm5s2k1Y3rLtdE1sB5zfSEfyoHkhU5bUJCBNQ7588KzXJKsKpFXPHimb4px",
  "key25": "7nvP5XbuuHMJSHNgicWvC6S3qD2kMPHQfNcRwCPfbtHWD9XLJF7c5nEJYBB2mkDkZ5DJEnEKGi85H43EtR9ZqDM",
  "key26": "5n9oX3CeAprEwB6ezJi1LH1uRyjuBXW54JsnSRwGKM5emvqdqogkXajTZWoWc1q8nX9ieSrP1W6XkpoZvikvC7U1",
  "key27": "26ZjTqgB63AyMCxfvBhkbRE6MA6pwDzATCaUa1tZ6TGwCgCZ32VQX7sCQG1EC9J373a81vG6oJ5nQpqsHGzdek1J",
  "key28": "2s6cU3PuMgam7kZm1vmYDMPHPTiMEL7uCxGHbTVN8ZwXcWJVZBNkvgRv63mnc6aDMuYkpzHyhTkkBp9f5ux4be9",
  "key29": "2WyYtgThNS6G5GWwaaLbJmNdwdxfBCKeJQUZZQVtX6oPrDMabQAtxG4ekcTNmnocRiLN23Ywaepu6HHz8gJeyEHB",
  "key30": "5VLmrau9kkEQMB4JLyF3kcEZTNFZR4JNsLVdAhBnuhgM2CThjnXjuYKwhUyghxzky6EDArojL9HYxoErPLXHEay7",
  "key31": "3E29sHcQibYSDt3JTjdyP63PibfEAKExB2UWrNsZjYNGSfg7mmnvnho1JPhCym7BTSD5hEGrhxTGxPrbjUUjCwc8",
  "key32": "48XhtiJ41aoS7AQodaWZguZnfpUCdq6VFBTaENpxXgtjMbbNhVaDUJCE69nTFossZuRMppy4NPDeWkfAT9Qpacvx",
  "key33": "6EMJcMRudcTx3iqTYd2G7Yk2D2qA9g6X4BYrinSEhKz29rpg52BrjeGJtP6xhweRJAhMvPD3x5HcT7iFF53fybj",
  "key34": "22JmKmpduTcRTjFYPNrtWRwTVnYkzNVUHxnmGy8hPLgmKFi4rwCFkUJwmZNciua8DG1uhtQJx8NpgCFLdBgrm9Mv",
  "key35": "41DHNhuivpL42bXZLsmppjh17WrEdEDvKRHHxnwi55VUqbp7cgkZEv87DvhSMRJiis8eft8pTgtJD4ELWe7oYR8b",
  "key36": "rQEkKnzPGpPxFwNmXAUkWt2AoXvar3Z7fuiGTd7VDnRQSqzHWDDHNfZAoMu2gkoorUoqkGq7y7yp42JWam5MYU8",
  "key37": "NYw3q3fMaPdMc5ZExTwFQbCn2bk2uCkb39yLw4KUSaBRHhagmiPh5yEGmnhMWf9p25HCfzV1aNkaLmP3gPUzkiz",
  "key38": "3Yo687bBQXrwRUkasGBmnNcp9E2aPJr2AJUPUDUzqNytXYQLRJrYfoE1x1nqGbHMn913UnedzQmtje8Ezea9G2dq",
  "key39": "3WZoY3RQdNESSrjxBUcWJp9txV4qxfKzE1qU5ZuJaPDZYqsTZTkgqffcjyfUgrNSNCwzASWqneksWTDyBfMYNM9J",
  "key40": "SHHa2wQqf7h4mFBUuStmErFi3UdDrK8VSBbRoEzkegbgN9ZPU3eaPQmSgosCENSbz53dNUQtEdheBGxuSiM7Rqy",
  "key41": "h92Na3NkXHHGoYHUPgSgJYUf7pMLrX9nuK5g7EjCPKeAUyP19wLPBqq3DHYfcuxxTBTHQ5PD3kQMBxQ67fKdCNv",
  "key42": "2QaxuXWyiSgHFVczD1T68nGh7XbXnpxFX8JYS3QSuBkQLc8r6CnXqGkFHLfseThfdYJRTt4QFc2nyNY6GB358vem"
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
