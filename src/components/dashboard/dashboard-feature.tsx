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
    "5TCGUJBj69HMUb5cXXNaFZ3Fy67dy2TvyFH8ZuzZC7ibsP9yLk3yQp7YrCUbtGQuD8vahT7dMuxPqUdqGxAk9pZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yy2pgVMCbnS448d6MFx4drZg9nZ9NJUzUYN3RtWp1vhLi8zZGTcz8uiLZocKLUUpDCW8kpYH78ptcgNSi4hJPZp",
  "key1": "5SVaSRy9vFZAam6qKBPKRPmbVrAJruiAPVZNQyKzvhqXx8NcHSsK4APmZEGN6Ts9rrN5YLo7ZQi53GPxeN757Stx",
  "key2": "tizPvqqex4EgZYFvQdE5fPxFsqgAmMzxea8YhrMy7HYH9DYGy2gz8yfXTp1aRxYVXKPBqXfiPDC9jBgCQ5EpY2o",
  "key3": "mrVVo3LUj1vbiGigd24PUd3HxUmintd8PBCrk4nKHTJxcFsE9M4sdJSB2B6UYzksqvYVpoVjy7gkNqmoeaLcRWw",
  "key4": "JwcN7FgwHefKEpRYfeLrNAerTyTahBmbaHmLerCaa9E3Z275eGPGt7K7Aq4W8xM4UGTRLySfgWTBY6faahB8Qxi",
  "key5": "2Qqzs3ZpBTyuNV3m5TE4jEmix4YhHWDzhLaMgqrc3kya5vdXXTia4rGmdLt1akM2ryVPsJQ3kEJjqSfAtctSLepo",
  "key6": "5P6zkNMMutZ71zFXpjPL8w9pb959cYeTZ3Cw3Z7ae4c82XA4mUkXn7J1vHAW9Te6ohCzVxeR3uUPRBY8jQYGHQrH",
  "key7": "48YHJhgtNHdm8DYM871xQuaFLK8LQBYRzmpk3mJLfFhR2P3WV4dbpiS1o6iJ15wStjqL7WZHuPm3PsXZmGLJKM9L",
  "key8": "5o9pQ3uSvFVMdzuGMBk2EMeUaZaAKducKJeHVL7KkwwV5CNo9fUkCfAMcXtVLCyBkYd29v3MambUz6WR9SFbkNDs",
  "key9": "5qtV2fLNh2B6t93NRhaoCWyPSDujwjiqxXSpjxmBi6RfdiRj9vHiymhL7pFcJkdZYcto1AfF6zkRePmtY2nyGGxD",
  "key10": "3sT179ieRQeTNCC5r8Y8aHPNvozfeDybje2KWemKyMzoCuNjbfwepFxDuMMGLKioffj6gZR2vQZGwMMpmHoDgXpn",
  "key11": "3tytUzRh9UhjAciKBAES13xj9SWTYvDa5MRcxKxgCJ59WBnxj4seP9c1kwJCp8xTHmSYGrKAuHYLn8iQR8sCKErE",
  "key12": "5PbYjRQDnBtfNDo6SdcjMFVM5sJEbyVYU5pTnr3MwJsr9vEKjD4BFzy9aVkBEjyaXEt2rM972CgdXqXHpvs8HYm1",
  "key13": "3bvq3BFYZ2kckAeGAaNh6CfSvg52GDyS4Kf2wPbWKbo9ZtZDR5LDRCMVfHgoEeFd7eiD76MZ6nSLsuPuKQLkYWWY",
  "key14": "2dDFbCBS8FkzZtp4opJkFyFtJ1SKGWBSmUrz3sqcGv3fWWH9NUNKtsQqHrg6hdZgRsV65sxBL53CmAA8WQmZFBqf",
  "key15": "Pzny8zfWnscwHzjQUKhu4ZDDsMGE2FRRHyNiQ1Vx31ZwqwpuhgfjC5TsZ3gFyg4Y1tEbQiQebrSCTT2rgxhNGJ7",
  "key16": "4oBJwz3i6zaMADGcXLGfLVB9pbRwkppwFMDzagw7NzBx4agKs3axkCinJwEq8XRT3Nfg4VbHUYnD3JiUovJp7b1X",
  "key17": "3PpUkUBwFtq8rbrs9qy3kLkdBZ1ovofMxEKmFgnUPycBBCwNNrt5w7eqpHzMJxi8P5DxaKBy1jEnF3aPGFszaiLQ",
  "key18": "7o54p1cdSaWfPhPBMPkpbGXLqLNELeDXorfArDp2bEh3As5FGeFTRJLZ6cwo8wgvGy2HocQm5XgG1QLU7vAiHKt",
  "key19": "3NtrfQNNJpBRf9jS69DLs3UFCmHYYK8FQprdtSMeBi3LYG7NmUzL27yXN3mECEVs2XydYV9Q1zPqz9t3ZcEJmqDu",
  "key20": "2MC8BhjMB4GujRrh7sz4eMVcjs62wkyazynkwR5im8CnNDCM7jNowyjo6DuFJanZc4Paa8AHw49hPDiy8dwb8BJX",
  "key21": "4Psu59Td8cgde2o4Se2bV65Rje4DXUjHTV7VgREtPmeZkAdonKqNrwtrbuqvP5sYWMEqMdzA6JUEgVT1rewXTc5g",
  "key22": "5bi1MqisNnc4LEUiWT2NNvPWZqk64QBo5p9J2Z5sueuMLjnL1DvT8KL1peBvT6o8BYjL4RqSHj6YZVFCkCbAsS6",
  "key23": "5BEJEVheYJwmXqJcHSsr9CnLdo41QBtvZGZpN78GAtySBy48B4tHfL2WJKjDXhBTg3G69tHJqzUCgSWY3r65QRkc",
  "key24": "5bbLSLDvLJ1U7YCVvyBSeANB54UG6uD4i7KsxHxKzzxhYCJaTWFQg6amHm7BynkQ2qJ4Fs4LTqRLS5pkRDV5EMBG",
  "key25": "4RHVf7VPKPKkqTixaipu6MPV9KnMoUqfDYLfNADzkfnW7iNjyRsStUqSxBkSBwN2gzPCuNTijY53i9zfzG8ZapHL",
  "key26": "p2R2P26aYWH4V54vwdQHyTyn77mmEuamxsNvgavZDfomL2Gi9e8TP9KbGs8xUGa2s4iiyzgHEH6HM6v8rrdVExu",
  "key27": "2bi97UuRKTgkMjCBXxC1MK1LjSJku79Ebc3VVngTrzCWZ5VvvBjZMZQsrpWBbXJW42tJAZ3VxFekFrBaYBH9nrdz",
  "key28": "593YoE8JWmnPNbKS7PWUyoCgsFEc17R6qXrWxAoQvePxKfxb6LXSr6ew59UmAgQy5UtkiSjJnKWpN3oBZgv9uNAW",
  "key29": "2js5mjYrmmNoaDRHSB6gQzEHMiq5HYgmMeFaFA8iUFX3idQh1Q8EaFyRQqpx5XiH7VfmcgKZU9VHbyg5szpcFsCM",
  "key30": "4uqYsPwQi29s4CQp8xCmfp196Jc6jz5xyHwQG62kkzYgssMCYSV2cRszLwi51dT2Yys6qRwCgDNACKPF8ApZZ2c7",
  "key31": "kJPPuam9E4x18c41YLzgJaQDQY4MW9XgvmuTnx5eSVGpSJ1H3dTbsz8PKrRNAMrLnQ2DdDT9hm13iF4vznqjHr5",
  "key32": "2zrMwXhx6vUCoyv2Nu7yX6iUtaqsXN3rHPBM4LwdQADrLKwzy1fcpCksg7QgYa7KXbSvtXHfWDtAXP72YLnegTcB",
  "key33": "2SJS2B2Cc8MZQqxUZitx5PdgmpDKiX3ZFyLbJUtEPm43BNrEoq6ftNiUZ7dnyB94eRcbefn6unAZG9h3tuCxbRGY",
  "key34": "2gMzcN8KPZA3Fyo3ZMV3zzeri7TS7XhLce7sHmbRdPC8LXYdEyWV1tbKY8E57oxxibcUN4MYcKa5JnWWcZLacQJz",
  "key35": "2TbmwZ3MRCMxKPhZje7dM2v2T2hh3ciZf8BFkxZsMpksMwA28KA89bbwcGR2N4TuwnZyCHgvXiVPUoZmcA3aky13",
  "key36": "626jiMHL2Bsv2QNxJy2HUsAgLyDRfPnKkR6WMhC8cJfAjMatFRsRYfH7UiiaXkecR3Z14zNyWB1XMYvuwz4zHGJ3",
  "key37": "4ZpLASAX2dunWbh5vS81edBABQ3oL6t98BHoGpwTvoyqk7QHKrXAwDTTazWHvKJWfiSsRW2ac2XtFP1VWRK4QQKH",
  "key38": "4k68bzNK5vvqqJg4C57Bwyvx1zQKP7fpbv1wsfMnt33bgtsEptZMNbrMEhoPYMcrFZSxL9CEUHPi98mfjBnB5dWe",
  "key39": "gnaRhBDUaWxbwgZBkTAFAMYnNX3Y2J79ZZzu4ZJs3WLgBhSZJUF43M1uxFr6oRAUNsKPeWCF44JMmQrN9w9mR14",
  "key40": "2h3LBXGuQKcr2YLbZ72qu4dcK36LFgyPwcXShDMSRUxaxVuPwJsZVE2FyvfRLwbh3oJTnVmen3CaxhzY2L56UKaN",
  "key41": "tTMgSLDccH1z3T9hKLG4DkU2rZi5j5wgMycYJAMmwjGhvDmrEsMdPVdsUaQgDVjCnUQBPE2ukMAEZQvDHK1Kc4n",
  "key42": "2sD499BozZuXuSwNfSgAdGNnUbFMwAaSBreujBtYnowkVXAUAWvM4eB8Q5KySa9c2gukGuvmvd8MxpA7vdfYDa3o",
  "key43": "35L1C3LiD6hRD2jYwFGfb9evdvCBhueX65vg6vDFHfgHsDvwpv2iaaUiD4MrLjugKVX76HgnEUVkKFRjRQm45JTY",
  "key44": "b7XRDj31Js2oqA4dKpDiLN1eXy4v21Lkh5mEc874cmD7wi3nckFSJb1x92F8csGHQ6YQDZt98tNotZmYBXT5GK5",
  "key45": "3Uis8cbxippmH9WB9gswX96ATv1Vx6jGjp8CnHT6GXw61mur6DmhoPWoE8uMTHNe2hJetpXVAXmuzdihQ1orEmGj",
  "key46": "CvKL5azZCtj5Qg16unL7NazHj9mGzbnnCW6zynHq9NdiLkiyHdcrahN75Wex4ihcboqTMDyCAH5cnZeoZku8D4q",
  "key47": "5Hv72QSt22yTujKDHTxVGpuCd6ryu3DZNkmDvog2qYXg4vrWE7rgsTTekgfjh1jcG665LTxtvxUXHPivezp5Ru72"
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
