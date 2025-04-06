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
    "4tXuQzmmQ9aWK5HgnSwsyWiHsFiVpYpA29i7zmcadQcTXh44KbnVZZXh4Bws8ktHH5cFYFFfXwyBrZJ2JejdNCGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHEwmcPM1XnkcRoXyzpz7tpBGntJbqmrBKHT2JntteAn6hsBkndH5eieFykL5N2QZQymDZxG99NneEiW2GKdQhm",
  "key1": "5yHgabhcdifgh4ow4NeJkzbXSudNuVNC27DYuzHHCejRTNQ2PYuGBvYmKYYKptNwGBgagSdHnSZm653gSt7ajWwa",
  "key2": "67KE53NUhemMXbGZxK1C4cejyYkbaZjNiuHN1wmh8cgyXAP9w1WGuNwf6avAxeAxbD4tKbbH968QYKECQyJJqVYe",
  "key3": "2vDgTERviRaGgbmdndkM2LoNGyH5yqWpYBna2eSihYY99C2c88gAzrr9A2BiH4n1EgEEYMNnC3rQHmFXNGxAssR",
  "key4": "4LAM5xTKSLvJ6xaZCToYqiZca8MadVUbF8Yrt4FC6U8NyTHrxPiRv12gotQbp8jkw3m7tvKsoBGhRe7EeDKEVGK7",
  "key5": "3vq7Jou8P6mr92u1tVG29WwC1i37oc6itCd3Y1MEcaRqpidLWp4JuFNw8E2aamKX6Ay9Bxixs2VQ4mYRHdhD9PZf",
  "key6": "56RDD68SD87MmvUCV3hMdG8w2nVxN2GgrcfzwLooNbtAnZNozYrhHgoDLEo6hJY2LmFsKFj5CDevnnN4xfJvonz5",
  "key7": "3YvxdSYJSDGJTWQR264zbtusAxkf3oKk6c7gpQ8rvVTxC1kmRYYPPWd5GFsSBn2N4VpdYHxwCfEvaEzyRWJTHU3P",
  "key8": "NXFVjztCRtFzL6Ryb2WW22JSr3GgJJRLTBkQi2nJpQCfjcb5FPdURPSbELWMkmQZoRrBhkT84dsVaLrzkntndmj",
  "key9": "2w1oUwcFk86AJAAeQQPCn1piMGFyjokMSiNBQr9FzurK3h7CgYHRRuquwzXXjQdULMScwfFinvjrc8uRDra69pJT",
  "key10": "65hy7DPWzLnYynzLqaYKcH3vRWcbXcZoxcGqWd1fuQ7oM4tWkSVuu7N9hsjBN138JcViSUTA5jrg2SA49wincAcV",
  "key11": "37irNRL99UNizS38pfx1KnPiQajXeky7J4EzC7SJRKxAiP42XXrkW5wuCKBQNBU7a4aeRpKjBbqRTDiipknhA6Ls",
  "key12": "471pLhweCNSkW76HFNp5qzTDA6oshDFZaqhraVLBFRSxDTkLsSJdthDnP3E5Qj6x52tDNM4Ch8mzuV5ea34UBmH6",
  "key13": "5ZgwqtxLGxmJ8488gwR7PnPjCBtwQoMKpTJbpWy3DFyZe2ySw33ozabndWy2hcg6YqAJXQxdNwYcvbKcWjzpPfQT",
  "key14": "58MauucDJD9sjP43K6howomH9p8HM1Z5bGu6Ax1LWV8oofSpVqumgyqamkoMe6fjsAoRnTBm8AWs7Lwdb7gHhvEk",
  "key15": "39GuzUzS3RznPpzytkPsJKavhVdwwWMd5iv9PyeqPRaETWbFQzTua7UEDkYf3Xd3D239tBPv5ZhEn46BLdHyc1E8",
  "key16": "2mZ83GMpuVLTcizxz3DDpkKX33HVc8ahjhDrJQauJ5iYmicGPdqqysmAWQ114Vsmh1ov4TKpCV6W34Y8r5YrFsdr",
  "key17": "2rPsQQEdcc1vFYgR3K9LY8hfm3SPbuHQPEuKJuFJKzTPdG6bSEc5qWeG5YLcAxEHicp8NGwUWSyxy9gUsMfPW6Vg",
  "key18": "5UkTx6muH76C38s4WWonjiNNMSf4g7BwczkzxLa3frTB2yUy22ah88UDFaM6C4SmoFbeVsxCjhSo8MuKnb3mPqkW",
  "key19": "jcotTMUmyYzPPAxrtM9XV3wdK6fkqS2N61yerAASNpKKA59Z7WQNmA6TTTeJPFJUPLEBRgydtcoh2ek74HvhkHJ",
  "key20": "5MzGek2mxxqTnfaYfAkxYqcTQ5CuemM8mciAA3FLrnB9Fops3DojrkGHmYxP8pDxMEbzTvySrRJ1nqY2Rw1p3Z9i",
  "key21": "3TeEAhm6n5VEPkvZvjs8AGu8MzmSaLaPv6iNdiMg7zVFzvj1QLGU71KHHKEtM5eEFjDKNz8p3jPitxDpfsuTcdce",
  "key22": "2BrvFGbMVuKqCus2zffJcRszJXisW3z3nu6m6QWCYWq3t9nDtZ7wetZ8BQtcK222ka6kwDC1kHmvHxteMwhy5FTG",
  "key23": "5U3HhgA9PghnQNcSMEm9E3Xdw7bzJ2NcXAwVtN4fPYFFa8oDtrS6bVorST8U2MfrYWDQxs4caVGsm7Uq4fFhEZCT",
  "key24": "8KYWmt9gm2NyhyFcNRq4RzEUy1kLpkenbw7upSeAkj8nEz2HqHxZppkN7CEiNTG33Lu4jz4UsApx81b61nrVFVM",
  "key25": "2hZGDohDVE6FLPAccCuBXLFgUpdNYRms9o4wXfwpxyHZB6TsuPE6Cng7ZvrCfQfTKR8Zt2wfgVWrFcEupBmyPSDP",
  "key26": "439nZAP8cEbXStK5AVW9qyj8sfY43HvutXFmKbs6zC5Es39b3wnrvEsFncMAGD5sMDcaJoARhYZUDTfcvzmyPcAZ",
  "key27": "L6ojK3m8pDefzRsFtbJFKpX3PZHmPn9w3HhuZCaSUwwW43NGVaFNbFgtEAC5p6ohhC2qKWCb7emaPy5kk2yRBhY",
  "key28": "5oUAhGg83Rn5viEMN2tFysyaX2HSoofgfivUp4DWWdgBu6SEJKFaZ8JdBucccscsry6ELo17ngcgo3qrWVAEKe3d",
  "key29": "3VTz9D3uYAuPeCbsDK54nUCRYZREubs8SvWeDB2zp2FWmvihvkuMPN5hKCCMxknWKC418S2K9TWCxDjfAo2ZZWpA",
  "key30": "64rDAP2tMsQB3h7KuFA6izriSo6CJPmYGxByVpdL72BcAaH65AGhonA4fthRUpCCgqb7kDZeQbfxKsJTn3KQkYxK",
  "key31": "dHWNfdm3LdWDMYFV7oY3pfwYJ3AZuJNd8RbZB5uCXohFeC1xpaANh9Zt36piKX1bkeNt3HpBZS1Wyd9A3udgpck",
  "key32": "2nPPKN3wn1Lb3tJLcSthpMYQtH59GwY45qdC4gLt9fPvX8V2QLHivz3sGQt4vjEixxFVtWggs9xARRozbXoXKskt",
  "key33": "UBxuYfE9tcQN7KQ6KnUHkyeYJcRB1pNJwEWxBbMifwFt1BRGsUmRF8XqzakaMcKhZrBBnDxPoS7Wj5CmyXngXZn",
  "key34": "4XirBXjZtM2VmYbeRKRqsD1yfXddh6H9NyLe4eAkVunV5gpNCyJjqDpzHofPi1dUCUrY8VmKqaAfV5UpgCowZkL9",
  "key35": "3htEMVTiDGcNtjXRDAFTzoDXSDA4cwuNf2vKZ9QoAJj8X3df8W4G6vZLbJC5VjxbY9ZuakHL48VAxqgLE7yANA6m",
  "key36": "4mEX1kkEampRyTtBwvfWWUvVcZSsmzydW5RfCAZDQ3iSG9Fampm12zpsaD9xbuuV9C82SqwuR9syKeoDp7UrNDJR",
  "key37": "5A23rLwo2X7M37HRzVFSWk3vSikpC7ofGNQNsZgfQeZfXmZBtbYLk5LPKAdvxNxupxDKqcFmFZ1Vk1DrKxZLtk16",
  "key38": "4MWiuU5r5mfXsk2boF6HrMbMypADU8ZJmdBonLHaC8mLMByHJYuxfiAXnFjh93yjkQtNqqgPfMYeC7tg2tA7scCp",
  "key39": "3cMqfn9c3GwMqrEkjBYAWnDzauweoKsnRwLg62wqZbomGKoji9QcyS6mL1HNWEzPRBYAf82TRw588d3NELr5xmcG",
  "key40": "2BjpHQkFQEeDnJXWosXQD868cjc85ioyx6wxUgtDxSwLbEpAS6DhoNPKtJMx9UvDjq2SJTki18bznB2TSiuzWmUb",
  "key41": "3UiWxBNvK4qFYv2fQX12w3NGoes4FjUfHQehPJEtqcuyMHi1G3EZVsnr2y1at2BCD8Kd7EZDuxNF5PELeHGn1FE5",
  "key42": "1A7df7nQBSUifb7H9sqgMd6S8cWLuP2DqHD8CFUeDED6HDKMwWWh8ZhubvA3zppVPuBUb3ZEBkxe3L1U7LMxRBQ",
  "key43": "5vBzf5oH65Z8XhJWjbjVA9VhsWkQVWmD6pRttvrSEmYNESdSpM3HnJZyixFqftj1EctxZbCdtKYjGtYTvafCppdH",
  "key44": "nN89xK6EpWuRVUxyiJkbu6fN9He56Xop6X8gbvVyGJCU4SxFHFPWoH2J2XnNNpFoichwmkxMBbnUmTZmokpbrVL"
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
