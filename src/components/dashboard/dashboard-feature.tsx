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
    "5YRTdPNNwALHhiLUPWVcDmHX6y38Pwc1fyhpAeRSy5VCcsbraSNevPXkxRvJohuZefK1N5MkB1SvEJeWPUPxsdnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xuJv3XDHZzDrhFkn95MFo4snLqiSg4X75hDTzpb49ukRshrYdR5at96EEUKphaUP78LtgaAtTc4GLchenzfEGkS",
  "key1": "2rvxEZTbtQfKv6r6wy6RGexHP9uk2PqcAT7HYBRhBVhJCuoemDa4dNGPJkLyHpjSsrmT7LEBCsCkxKykpvjCjE92",
  "key2": "gdR2L2PJ5L4X67tU61Qn7VHmEXF4k2R7rtxXVrFyCZvwFLvruCqxemghqWqMCh2Hp2hRxd81vXKEkDY4dE1sgQJ",
  "key3": "3yWaacxZd4pL3VxwH1Egseq6pMCTbaA7y8r8XW2CpCQvmu1CynaKsHQzCDazE3iKnvzJ255u11nNaiZ2CYaPbsTU",
  "key4": "PcNq6GV7JfkdQdidxqF1ZepRvJ39NE9sNsurVdSGGCjUVKE498ZGqaWCQTvLmtCEo5z5bCp5GRT3y7cvZEx8QDy",
  "key5": "5h3MzLR7N8NB28SWS5ZKgVuJd9bycs2ohN5e8U5TiP92aZj9tUCTVtCEvxNL6RjtrQD4Wjss366coUwcfZrgMSfK",
  "key6": "2G4hADhgDoS5Wh7eqqt2XU5PyM5PpmdtXhD4quHXXGpUnMwJiwLf3safC2od73HA3gpEQRWGGTHD3WFiMrWujNk5",
  "key7": "2thkWGt7xh14JGZUb3bVARn2jm1jZ6izzMYKcvoJoZ3bzsHxiqiQzYb33faaQM1LgYnHXXmSL4FQz3Kpbw1beUGy",
  "key8": "394f23jssR7cnA6qYZryvsMJvMLGYPbMUFcwSCJJpuc6eUjud7vBLSqEyK1puQ3vcviiYWX6sT7sX9MisXJ5kDd3",
  "key9": "2k31aaRhBpoNHrqTMnfDKGDPS9ZyBoW5i4CAFgzhNSQWLSYm6pfH3NNqcAXxpQuxUjF4wWZQvTzi5YJ3CMdiEjCv",
  "key10": "5LwyazhCkpgKAzCoa93r8ifXUAe46fG3zdocGMmznnP6NeW2Th3Re2ZZHRNKf2dYEXSm6oYgjJo6QP1JwVjMUBSJ",
  "key11": "427A1KrFyjwPyzFbTCLqAC7L5shY8EmdVBX3HmGys4xK4MLj8vrj5cdKmYdEib38TiMEPU5E6yng712PGoW9vG3X",
  "key12": "43gqhyixd4jcWGr6R6ehZhXkctt1XDF8kvm2wP9tsqQhrw6mMa9AiueCWYYLGFXMnZcfSn5RUfvq6XP33nUYYNj9",
  "key13": "5FGScxAHBCxsXohwKLy473WazsBNSuPcEiptJkJDhkRuXmmws31TeV1KS4TBHRB3eLyyharpXboYynb1c2TKdSpZ",
  "key14": "5inx9yhVhD8hhmbuMZK4gRr2oNPcEU6vi1nqWEmfRt64xuyWQV7TbgWnUYWrGLdAHzQuSyDQ9b1hYU71kDZ5siaH",
  "key15": "5iJtTc35zEuqQSq336GrnUpbvAsGE7auj8yD9ru7Z7qiXMfAvdBc3J7tkDK9EDD87NA8XR7GmwCoaH4aKA59FX1S",
  "key16": "kumVeyDHq4Rd7ufwF6EHZvygNJAXi1K2vjyP6VNzVnTwqhHQSrR8cCmkTPQHJ99oHXVoutrd9w1oEpAEqAGXQ2y",
  "key17": "5KZ9wzxKdCA86TP31HMABZZYmQLp6Lrd1AXwJjpqobVXRq1MNQWf6X8hFgic9pbukP3rXydkN5UtPPUB7y4jSDC2",
  "key18": "txsQ4KePjpxe4k7CGTKmBKkZq4UhMWzRdRbzmtuHTCyPDEGgSyjpr94QWPpr2hwgdnhXSdayYQ4Lg8hT73rPzq9",
  "key19": "4Vekpwtbicwgiob52B123Rz8ZuqFecQizj6dSmkoZabVyR7iDRh1vv59VNTQ4vGonRD9H7S58Wy6MnjVyzSyWz95",
  "key20": "5M3AjivgkUtKUfzVMiXTdaJhLmvKEqPsj8W2cboHkjWGtJd95KvVtiap2W3fmTgKnA2qxcVJ5GvEaLVfGeTgk7H1",
  "key21": "3Z6aZv2wn48mgPZzFrZvvcdRYjRnq9K8b3VXALWLKEfDkUrAsEYHmfAYYx1CZ9vztrhavN5JUQ5ZnyS66CGJmy83",
  "key22": "4S8tSUt36MSnf5ZhNG7SWA4yvQpvwfxt6jtfS4mNnw6sQC3dDPNrkNAb7SSoP5bFkogpqGzTPcKyBvWq9MQfL9R9",
  "key23": "2JeSHhsYwKC63sGHWeRAj7vmBQn4d7JGc1ZMeHzGa4Q5nRt9Vrqt78RXyJjSyH4ARaDTG3xC87ruB76g3ukQnokM",
  "key24": "2kujSccsNNQM4yucnghLwF6a42yScwDye34C4LtAxmzeRCRTupsYX3diT2BQBQHTLEZMT8DRYBPm9DxLLzkexXRT",
  "key25": "sPSsxfosjYAe2b4NXaxbKymYo2DNC73SCqCpPvLuZXpbqn7oUSwxMfkuH7NHSYewcNCWoHoxQoyxWU4446iYZ4V",
  "key26": "M1yE3m2tb57pkJEfCnN6EihBezHkRMXJQyJ16Hf88TY21YV1SMsxVFwNbemTAwjkmsRQXP2aEjsNoCaa8pvh53o",
  "key27": "zB1f2EUjmCbPvn2pUeRvfu4wpDsnoovAeJdEsMQRKjCeyC6d4HgpzLT2jZ8aHDC9R51kCmwH4FmwM9m4qP8SN8e",
  "key28": "3VAmfnMK6S4Y87zTVWWS1BxvdYoYqUW18dTq3jhvwLd3fhjhx849Me7quKqKq45UabK1dLzFCBiJ2kQmLZo3nHk8"
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
