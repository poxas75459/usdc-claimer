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
    "4ai4xQL1yvfpdTHEHNBMuqn8rmbEPxJGW9FLqCEpR5LXZw4SnGBuVh1njSEZhavkZ9SXoGRYsg9AoiXnNsbBS8Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9A3eWsnd9WA4spbhf1WyTtCvkg31C25C9LTGHBRSuTKEGdcuKnWSFs2Y3aQz7GmuSzrCoc1dawiwd8gBHVEkVU",
  "key1": "42aYDPM2bU2s7aZ8fBJtjLky11LvW1tLJ58FbZBJzUrEkaVtUD1Vc1YPTtRRdhMhiXAyhpEbyhm6XnDzRG6rg51b",
  "key2": "4tjWhRpW4TdN5hzDPiLxtANtvf2YWAUNkCfRYSPNQnTV8WTSwnfZrNbukHgqryBotgH9qoq4fvDZhvLUxmWusEVn",
  "key3": "3hZ6LRoqxgCeVArDgwRLH4e1uksK6pvBdqS6YAVMRi2ZXrimmDsKxWEFdWLt3TLr29Pg3ngzjtiZxf7cFXv4SWrL",
  "key4": "618oJnat3uWrwQptn6f2Gy7tAZFkd1kYtgGkjGuHfTuPRQChCNNNyDwYg4VJod4THtK1EMS69GeNhNGQcK4DxZaZ",
  "key5": "4U1tX5NVPSJNndszP5Uh1bNFDHHiUYajS2Svmi1aVCkSTWUTNepuhzY6gQhiu6goXYsfoC6tgqfo3638ZFCFGYyn",
  "key6": "59gHz5zt7V18GLUHFp4B9GvJh5YjG9avZ4FXJMZFfFzgKZiqvM46Nadhh8j9SurPh5sjKKev1TgVk1ftBZkF5mif",
  "key7": "34HCRcEm5ws3hgQcNGdTnptGmYW82h2pWm7DxNsymm5dqs6XfVoQVBgM4d2bmxwBg6cZWNT5ZtFn9y8sEm8zdU1b",
  "key8": "3E1UzpnVv44YjTJX5X3VthU82pjNYATiAb9Wz9PDy9TgYoANZm2wDT3XjvDcxHyAdnGMyPwB51QLQgE8xR2wWPDv",
  "key9": "vzh5DiYovZpq8KL8eFQbzhq8Z3nYKBMhwSskEp23DVH43axzUiXuSRwSVL7BxGnJomDc93F6H4xujQXX5FM1iEF",
  "key10": "wdYgANaURc5uCqPupTh2SDpN73kmc5orUUYSAYAMdJN4Wi375yjQnK76PnwbiYcYYDcqdLevCsphxNxhEr37zWU",
  "key11": "aWyYRRx1dAm1kpbAD6Ap6hLe2cbhNRZaSyx5pTq7Px2gDmRMDzXAMP4jCFBnhbUPe2rtf7Hb6BNHeEXjN56MHqc",
  "key12": "25cyvCmc5hWdJuCFJX8f6Ystdd3F2dN71FwbDsFCH6quSQ2DVSTjoJd2CRAwfoBZA1gW6ikFEHgRK5KDvjpyNz3b",
  "key13": "4uiYzV67tStFEV9ekHgUCVZkg37Nnu2wgbxoLfjiaZ1Dw57Tec7z58TgSYN3VhK1H4QoU4oNmqmeZcAnr1WkMH2U",
  "key14": "5fFaT1X6QwxJtpWnA6qxPGhScPUgknEr76AdFWb2kjZkqHHxuAr7kYhYYJe4mVguwohsTDQYrQBokZQqXmz5KbCw",
  "key15": "5YNpy3NNNjXdFLxxukTJSRtef8G9TB9FESZpQ5to4nR8nL2Vc9mqimjk2jiyWxY9AJX6PC13wAXgnwtEPftT5S87",
  "key16": "4CD4GQm3JGYNn5jN1PF7uevXjJF9FfEjk98fmP4jysFdKjskvEZWabW5K4n1UWSWTyzDraeLanAQbNZ92qGqfopV",
  "key17": "33su857MES6gHd8rRumY2SUPLHGX4RBNvf7SCWLYeNACMYXGxwcY5fLJZ1P6AU7W6JNVP1UChddp216uVhGuZnRV",
  "key18": "Dk6c69zjfDLdG42ySSx3RkB7vc7W9Aeqgja1DrkrNKTGS7G4rwEiRLUuvLy69dBFaYADKKsmsHG4Hr9cZwTKfW2",
  "key19": "qmpK525BpPsu2yuT1LhEgAbmN2BLKcCqxhPWbYF5trNpR7AMK6P3AKz6ny3YKb929xE2Na8LJX84MJASxbwe4ob",
  "key20": "3cv8HEYhJrgZpbztfTLaZ99viLVaV1joyySQW5CPfpDoFEyapmaokyiTc4SzQMMph34WKkjxv8HQ2s9RGkxSbwF5",
  "key21": "312j3ujk4dU8Z5fRBKKYaA69L2ganjVGcon2P92RW1X5k2fkgyUAbG2ND8Pfh9Hj75DJHhpeaWL2EohBncJSyKcW",
  "key22": "45nJoxQbwnGPdHvoAyqH1AGPDDeVXXkVuPaEdWP388PMjCrhwXktb1hAfMcxXGv1c4Aiu4c6fjw6ZfiB4HySpDS1",
  "key23": "23WtU9qxtwfA6Z7rBqzVyDxif5mMSgeoqC5UdhjDx1qkN5c7QQNDx74WVWvbJ8GfgQcNv2R33Ke5uydGWkJLjVnR",
  "key24": "LHs1tpYHAm3fcqMkrcCxiQ1gK1aaeUiYDLwcrHSpD3eCPNyrMhAopwGQNAvui3Dir7NpTfuG3usDjKN9u7EY6ge",
  "key25": "4wnnQJ1N5USzbkTTiA2tRbPtRxvrwadyUgFDDdeLTAUeXBjU1Uh3nt17RKhwn2JEzRppp4d9E2asCXtKQ78xcNh3",
  "key26": "55HK5pzWhBbsGkKaJwtt4k5JKKtKBXxvFHfvGH7JqtmVKkXBJEJmffWPEa5pxqFJUmsMynZvP88T4os4WAvRFaQs",
  "key27": "2ED6ZrRgzYcTksjH5jHKPgjuDE29sJNh2RykRmfj9PU1XookamZHAQzgSoLH48dQeyJzetSdSxnHeRRCnAF74Ugi",
  "key28": "2xGL9uTTaT6wV7UK4hmCT4LFpd9H6Su7GvxSttv4nRNTbJPXRej48odtEWEoDEbrQTdTZeTyFU3w6SqTrx5nXYHG",
  "key29": "G2CuN5vVVJiuvjWrGiSwBp3tUTrT9hHYDoEgZPDQHvA41NS2EEnR3zbc1oK32xYVs1GKg8ZC2oNiYYk3RiVXkvm",
  "key30": "64mGV9Z8p8NQtPnNkFH5tWf8T4zRiSohtwBufewQyL9TXFXyYUTH3LMwj64zNJBPbPmnsRRtMM8Y1WdA3af9QGKJ",
  "key31": "2mBBaBaFshxr6PTqPDa7GGmqoYSNX5Fb7SNhGACpEDiaKMaNubkbyJjBNjQ1VYneRWwMU94vyyGz9irYPyGFGmXa",
  "key32": "bDx2LMd4PC9fTgbK5c5EcQ7p9iGizSaqb65ETxpFEds5qKPkBnGCec5A4qn5SsGxBJfHdDyP6mLaFWb9mquUZwq",
  "key33": "8o8VH6jGWP8AVac6jAYNJ3Qnd9eZ8CAKepJEZFB5rihQnUZn5jqJuXrSwtwaYUsgPcwv8np2mt75Ag4LYGBoJkB",
  "key34": "4aR52rzxW2Cwnq9oaDwSmPfFf2saEWRjWU5nnNQkYvCcko9xvqAa684xLmcBnUVMAB2wpXgTzHo9wUNitbqapqok",
  "key35": "3KCBftZJcE4JjJANN11nRsRZMDytsb9ehxc5Mzy7wfwreWyiaebwVZSNYg1bD2rVP8g3Z95ExVvs61DbYGCYjD7"
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
