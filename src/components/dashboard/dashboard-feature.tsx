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
    "3BJEGD5GZupFC54AueAcaTp8iGjNPuZZ6WV4YZQwD9WGzF47VoAigDzNpb1aDSZptN65K4eZZAvVTmmXaYNyT35z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Np36HouFq1ANmwa3kVZcfrhbv6KLcypjAjN46TWDLczBssgbgdvfsS21HZropDjrjxusp9BAypaBQkiRHzSgpZn",
  "key1": "4VkV8kQdo6QneWMS6dFnq3nX7bhXFnuHEjY8P1TNifXjTJS6MuZSEKD2PZ7zcwfRCrNY9x4Zi12RRLbfTF1d1tsF",
  "key2": "3WQ45s79GqvpXoK99CwgUfEmzECYuCM3TUXRziJ5xTi7ad6tJ4hv4JSYrZ8PJ9o9qSL6kr2F6826BAk1cQWWJsPT",
  "key3": "4kb3JZ1KVwDYhBrRiWs58unZXQ2ig4qA6ds9Zr6fjDXL158r8hnyCWyVWxMTDmEgmPVYuKCabDJR3S8XXxvZyEzh",
  "key4": "46PBHHQAHRvN4hQDvb8DkMccKjetXYu9fpYT5GvQmbdzyTJaGktDWzNSDYdxFNbenafWFZ1ifCrddUffcDnaYJtX",
  "key5": "5Jujd2AqaVuDqMcHNPi1uyDeM8TTSxEMYZ36XUJ7yr11bAeWAW8PU42KUpKPYC6VX3svkVHK83ChKSp1SgnMFymm",
  "key6": "2o4iZDhtf7tTiUjLuQMURpHD55yrccyABEtPto4N3BrSAtb8s3RSWT8Tscq8MezrCDRU3R3LCHsZ5R2VBjuUJCqo",
  "key7": "7q8nyHojR1fyEPcWBgoU9qZYEGcZQbSWxXbKKasZo1waDxQeLqkgq22uuNu9uQ9tfnjcxKPWid6TDhHf447P5EU",
  "key8": "EzgYu4TzjPrQ3C5NMejUcHDUuiH7EtdzMvNGsUguMh6DYBndKZZVfkCzrmS1xfAodmfjrRV1WnZh47AAZVQZjCn",
  "key9": "v29gW1SBsvNdFS6Lt4PG3YTF4B8qyd2gnh9bx8S4ys5HyESEWcFjttbVQHWqdp1gefPuW8gaTsKgXAfgUPpF5FS",
  "key10": "3vuB4gbwW42whNdc3pMmikhMB5aC6Q4iHb3mqfszdtxYRUrJRk7MjiSeshtNxpShrWZhdhjpAVjM7qfF3oUrek81",
  "key11": "2dRceJ1uCuMzHt5TKMFNkfL2rQpz4yxppxwAbGFuzLKNvf8EEhhci844H6mNjtUMoLdHpA2oUgcdi5a2VidFfx6u",
  "key12": "27YL1n37Az7ggfjNUX7n8oP5LV3YpBt1RuRpgiKrZugCR4FGxZPVSvYAgrXdm2tnS8R71KoUDcGqfbhyHEXumBpq",
  "key13": "2yo2SMxpJueESqCC8nfrrHBhkDeUB3xkS57qnmYxt7yLn18wo9CFULj62YhoSwLMSW6bWquXHKuyW5UtB3P26Vg2",
  "key14": "39p59MhncCezbmwppzkxpYa7wKDTFRCgTiAfhGThLLBPwgctaNNKxjGBqvpVHKdB2JcA93AE2cxGUF48MHhS7zTg",
  "key15": "44DxTpQ3ndxND3U8oPXDMuhJ6CNf9xwUqpazpcNGKaF9PzU2tET4Lu6vp3yjn5JtoB5i5FCMrxgqhtyr2KA69bjU",
  "key16": "33TT88mhV7qmrwwDrZWDccEdj9iRatbEXcHmqFGDSzN8bUk4aBHG6ZKuXtuqMJR9bFDAdv64UKs4seCG7pyHNDyS",
  "key17": "2m4QxGcbP4Ska6h657hPCtMjeCc8HmVnHZmnPxvPHLQUjdYsRdWxSEnacTizYX6xBisdfFrzVSVGAy4wHcrBeLou",
  "key18": "2Up5yiGCCbUE4a2FuKQvdBZWpxhCb4CfpipKe5gqxrvZyrFWKTGjX2c9NLLYMkA1G1RmGaX3d2gCvoEvGCPose9Y",
  "key19": "2wT5tjeXPdGanVMDKjbRJPYT3BzVNC4tCUHv1BGvdfZtehDNpDNuE4EuPu1bPenrTG2uNHBgYK9sCxidUtkyxeWF",
  "key20": "5ZACDmiyMgNmNHRobPfr6vb3JyRxXWRVB5pL194aiYbxX9sv1FVQ37NJeQAs1gkZTE3NUjnbJvWFvBVa1C6HbpYT",
  "key21": "47MvpNNWSxrV6QtTbwvZZe6qYZ2xGzpJZu7ZuiAoV42V3Xeb6iFrYhxJXVodQ5fRZq4HTY2rtedD1CmnM99JacCL",
  "key22": "3D7DSMRTuwFwPKiCetTLuXhjChFZhYFubV815sPntzdj78Xe6C9d23gzZhFf5sBXDA9aTniFu3THGVTzVuqfnVfX",
  "key23": "3LD74r5qXphAcyAaNubCnSF27d5WZx9a9ts4LoWNGTyr47yTsgAquKBPDChBGa3oZbWSNNFsFUvX8v41kRqvfQQR",
  "key24": "4UfnH97pcjf1zxKKZq3RHpvCN1DjvbiqnKvrhE4bmDcTav3WN87NkhKxSTgAtJZBcKceH8Nfhfj8A1ZN5W8BKsWU",
  "key25": "21EZYSEJtpM1G7uDFvo7eAVaesV7RJ1NehFAWgyZmP8g3C4jeAfrJnQhphqQAtMa1vswRmdNiCaHKFxZhapHe9pb",
  "key26": "5PgnU2cAnt28wxMEpLiXq4fMwp1wyMsGtGdgyaverdwQSd3EykpiQFJGScB7UywckbHBggDg42fdYom4R89BzSdD",
  "key27": "2hkP1EAgd4Wi4QnAZRCRb2Xcg1V6qhf5iYxjCmLf3d5hZq8LXknfY7HAHBgPodz59xpPrcVppogiWVaeZPoTC5sg",
  "key28": "3DV3hLpp91uNScbkxbLWLgndL2YemQyuyPCgZW8fPmcsGLh2YS5oGw1yCBvDv3wN6qhNcbYp8umhPCT7kiMNFYcv"
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
