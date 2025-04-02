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
    "5TX1t6Bd2BXcq9W3cZ1UrZ9XCXr5bEQax1M4U2DWZxSWSEqM2LTUbTNZzqwpBW5khaCMw2Kf1iNXyLxdstNHY8Xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32bbffPqyqpCdiiG1sc6cmq4KBZD6KrEeDaxNVPAEaHLpZdNkePtJDy49pYDkxbVpeiUfHx2jSUfsC1rLqEJN1dM",
  "key1": "J5DpvnVTULLHAvf7Hc7Jvh8YKL8GzmyPVnfQnvYQePXFpbJCnoaeYuMaEhEtzr5RsbW7MwzvWeyJkqqefK4TCaf",
  "key2": "3x8f4qA6vZteyJCf52b7Pe2uCpkPFXmZKMo3QD96HHATcuaREKWRv1y5g4hLcz8UhVRHYG26wTqakWt18Nb5PQ9A",
  "key3": "3kjPvvLce1FRWL8YEnsAuMvC1SJLc9omaphELJM2UDYxBvY2rzecPgm6RoSeYqX2cTYShdp3wbJUw7gmyTtETvLb",
  "key4": "47mUoW1ikpGunPf9tSKDijkfeH7A7n3cMEeBpp2U7VTeqGBLmiJyxS9E8MdCAFMixqpR1UTT9gLUMyfQP5oTeqdg",
  "key5": "57MtWo2WLRjvLPsXg6ip1jhQFF4UiEpCj4Ps3QQnVnnxPdHM1mqouoSZMd4asFe43mh6x2BQUVUrmteF3QmDWHyU",
  "key6": "56CnBcM7P7FZ6wdu1dJ1quxVj2WPqQMogfnsjJsbGHdv5Yq2C1txWC3ma7rCanPWpWxrKMw5ignWrWVfxU9H5ZdV",
  "key7": "4mWAdMWS4CnmybfmSDi7jxy64tvqZCRiTRdeoBNpkVPRG9mejPzt1Auoomh4i3mifirSJgiutDYhBaUXgXGPyQms",
  "key8": "5GwPUqT1EncJUzHrkWjyhxCZMbQc3mhfEbYFcv8DDyKyUnbNmLLCmHj2JZ68ZjGwegkemqFGaDMVzLrtU97AfqAL",
  "key9": "2B7CKJko9YJJg5tM6aWUcw28jHb87ZhyhCws5RdSd7skKp7GiuptZkR7VfLP32KvfupxbPDGv2JuZLRrKYKW24Dt",
  "key10": "4om5trmhV1tLh5EvnWCFcF9RnLM5WaT8DJL78TeB62D7sbpA2RFsv2ipX3pUZtPxC9RTNFuRw5EKVKqP699bCbME",
  "key11": "4LRpR2fH16QZVM4kM7tRiBqh3BeSsUoVArzWN52jLoAUArjHUW4Qn4EZQsr6PLXG4UmNEtg5MueKYSA6AwbtGe9W",
  "key12": "3tiGL8DgsHQAfdVp3gqCoAxxg7UC4Mxwih9tJnmq2phyvPGaxrnxeK4YiJyAJMBWSoP1jTiDBnKTiBNEigStNSQG",
  "key13": "wRUjNdjSeDB53HfXFmsoeudR1NPestQ5wXhDWDpHjZN7JREwLPNHBoghB7D3eZPVLSK5j5NZUrG4o61cLB5rWPE",
  "key14": "5HawhyMW9m11XUTEgDPcJALWwAHwSyfFE2co679S5KX9UFzYnQHr1xCKw1YZdkkiRcHD7YcKjeoGRAB6zarS4Pnf",
  "key15": "3BWS4unZnqjAfMJ2ZxbmAQkFXYxqWS2kibUjHuNPy64aXDNwFE3jAb5gfVHLvxu3Z1fe1jM3YL77YUGtmDUBSRMo",
  "key16": "538MqdyhzxiE4nJmDHQuZPew4vtupRERWxQZcfjCvJWkRM9y3ndqLtvAmxTiKLphHDEZYLsAtr3wCnACHYuxCE2h",
  "key17": "bKLi1UEWohRi3G2Lqz1o2AGpQ98uiBJJQrNkZR5PurGigeC837pH5a9duuxrkiAWSKTJT5scPtVoogpCXdeMoFc",
  "key18": "3p4naT6G5RJvSi9dcVKiygUVRxVKoyNiYLvSieRrpXpMwE1ELs4EgQ57hQezj1p3EMjrg7PGrVJF88VfH7bBwcJs",
  "key19": "F9tWTTR9o39B3dLy3RgyFd19ARrC9Cr3tkG1U8of1NEBZt74wbkPtX9DqTGb2oFzECMmrhPoR2vAk82cgw9yGZu",
  "key20": "3rdLHdbbZx1yY38wHNMoiJa91NLBCCMKcPP51euERbWxuUK6gNv3PS22XfZFmZmqJfGcB5mStv57PHboddJtEdAz",
  "key21": "2dmZQLhgiC3xzp1SzqFE7FRLgnPtBQFQwZHt7hx1EiRZCJ9yDg2rVkZD2RySAQtqaqD26HPMGT8MYjU4JtEyg62H",
  "key22": "5HT37sxHeS2jCv69sCoEm4ak35tZtJuuGxUqZAVsKjFqethREbQfxCfggtssuZ5eas5dDX7xVRSW46wUdvrfDz9a",
  "key23": "5spJAWeCZ943gSkLsKuBWSZEzA1L65rNiXphGW3dbjSJR1t4kLQV7fPgGdzdRuNDzh3GBZrLNMgfVLJ2nQPPqrvd",
  "key24": "fAEWDVnnRRr3TLM9Nc4EVRgR7xPg67Rbm532XnjBhsA1DUA9981XkEoeWuP8DAwWfC8nJTfpJbJHfCGwCztqHJF",
  "key25": "4E6hybJo2NKwDuaAiSKJAA7JT9Jtsy5m9nadCun92UMMQgRBMZhUwncfgRWqhMiwpvqFDNB3tgdqc5kmWNM6PdUc",
  "key26": "5jUmYLmgy9vGomoZ1LxSq6nM7oN5qWoJiDYENHKP2Prb9Wv1VvE7tYKvZQsvYqLoKc6iJA8ocQhnjXRxiMZGvX2y",
  "key27": "3iuWKJrNX8tH6nXPydp7Vwj3MVDV7XNX76tR6Mq2RA1igKJNsMZA6qVWcTKCE6PH5ih3qKzPbu3rAENgG8cmKrLu",
  "key28": "4DXuBGnefq4ZZq53Lk9rxu9LgzoisifvQH1jCm1dJCw2D5pWdUV8JP1RMAm3hvACgxeCvdKq9FwgUMig4hay7Enc",
  "key29": "A1yHnDw4ihAwByMu2L9TsGKg265Gr39r1cFgJsnshL131aCsaqLLXJ7mesFxahPUFUw36sqEw6uWmWQVXpk3amw",
  "key30": "4o49HGtP3ZnxuSPWfKnCB4fJqykeP6pyY1NwDoKBybjCKp7TKuS2QDyZoTvmtMoZwTkYoSgFK3vdayADKrDwwau2"
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
