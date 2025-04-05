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
    "sMRCCFHMo2AJipBx7FC8RxjSE3rQfihekwvH5kKNcb3UWyzwSPQEBZt9XX9YwCv8ER85dunTLDovUHUJtQYyYYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CsDU4Ja9KJ1ZgYffSCRomAVAeLUevFicDmH9SbrqL68eizChTC3P34sooYwg7u3qYspECtfHqj1L7pedzWSea4q",
  "key1": "51swsYSuaDjvuddjiVxeXcwvXjbjZoCmFoMHUUagPeM94kY4VpoVvQ3HpccnXV2x1NdLGkb4gBPi2LxgijSWNRn9",
  "key2": "55kKkqEwW1hjyma6jrW3pfK11UcC4LzHxo94ACSC46sfxPRaj5bJq6YR5CDejM5ayrEnxqGCnMTRtep3WyJHT3za",
  "key3": "4aPcCFjG5N9yNPdmCVh5owUWmXxEpAd2DNVmNvMx2HhpDxuqddzMRKaWLMBW7f9tYNNzUeXe3BYKxGSk5fKuL3jR",
  "key4": "zRq23CYyE5mR1B7Q8yXTMUAZzTf1EMUerHoptRfBMPYsK4PKoW8jNHhF6EqFyDtkPdnGxQiZAc9SNA46XeHFsqj",
  "key5": "3pzrC9igsZ1HzGq73rbp4NBxfU64iPSjFfpTdPzNtdBboQ7z8msVnGFY5mq32TzusnS49rxdX8x2HjpjSKeXRQ4T",
  "key6": "2d4YU75QT49qhjWaj5SxYeiTP8q4rsp3R5y2fVuhgninWPzkyp88ugjj3rm8djL1bHE5LitRcc9VbYNNDT77o2m7",
  "key7": "4HiNqsd5FvDKhua3J4Pq7sdgPThSFB9CtdaF2Y3YPdJrrjWNvUYbvRBdJ6uy5t8EZgTzdMGrfwPma2YZQn5xLBEY",
  "key8": "5N3fun4RJaTnSxdxAqARFmosyr4B3VAjArfdoAZfWutoLa7r1fykHw2ih4SZDrR5CELysTMmdZ2RDH7DZiZv5era",
  "key9": "48cJjotRDBxFQRprK61LFkQQz8icuKXPA5G1dSjFR9yCyoW28ZkBDiNiQJPDWNNJiQT9nRxB989nWkVTJugwYSge",
  "key10": "2n7GBJ3wUyBKJxwtThTEjrY7442jGRQwZGtChao3s1kjZjyJkzm6vKN6nhhCDxK7FzkFsrAgoqa4kppbntDtHi27",
  "key11": "5RjhRofcykzv7M8yCwkdUMWUdrY2bgNpfrwUiGRtffqkV5gWrsNdkTShCvZwBxo7AUhqPUaRqDFdax7QvafT5bH6",
  "key12": "FSmYVqQuWDLhU9TfF92cYC3ciscwxvXbhdYXXec3wM8ppGAXv7y58VcnnmsTXR9xVaZpZe7rixJuoBgoVNc8ks2",
  "key13": "3q6yBkhdkwsrSAm9r6NTU3FMazdA3jTiXYiGSBtarAjGUT3AQGGdwzY8kuwdGQZTU1W83VZZRMj9SFhsttb4knBH",
  "key14": "2boUDYcASyzjSGHt8AY1xBeSh2BP6hTnEKiuN83vtL236mfdZ6cf9YrFPk2Qsagi5pkWZonrCMNb2aH3AMDXnZZ",
  "key15": "2F8tvePSeGvd9wsdJgFVkEo6XMjExnR6WFdmo6GjSZnGZe96yS1PaVAjM9PqqzhCzQx1kP8cVhcjsjL6TGogXPWP",
  "key16": "5x82Y3Ex8tERwKH9TAzrtRUjCXCVQMAZZ8JrEXH5ZnAHB4kdPQx9eP9nLwyWLZPQqoSWPAxc6ze7wLujSuJYwwrw",
  "key17": "5fqtQLau5PT3j3spXJ85jFn2G5pP7h23ozvmtrW6nmEs912PqPPX1EaDrHy27Y7H7RbBm42sA7G5qdUXuYAE2PSH",
  "key18": "34rVJ43MeS87ARVew7N1dhBV4x5igwQKF62Aa4hyqqJgfED2QZQ4TtuXjqkoza8XcbrHCDFWhSEzCarw5gHPbfUN",
  "key19": "cc35RhCP4vrgV2nNAQVD5zX9x6sp3EmWnLV3wJMRxR3vh1c4LsGXLLkHTecpCwasyCTgR2d77dx7uj8KLPeTfqs",
  "key20": "3KubJcREjWuLFUkzbaipfVqm1VBubMC9oUn5zyGpBwKN9yLN84VFN6jvL19ZfJz1drTatYHW3cyjmtRpGqdPZpmJ",
  "key21": "EjKab1WgUgLZZPgXGJTYdWWtFW3rerbrMSncgypgaBYYnPC749hnuuu4mn2ff7fQ4Q88Ghv9rYaKBpHB7Sw64wY",
  "key22": "4EbydTZQnfVeqbq8j4wtGzQaYmSMhYzdxMu2uQxCmGcZsotMALuuFAqnrbiM238B6YZASyJAd6vr1uayfmDcUj8f",
  "key23": "63ygScGp2eCZnCAh5KKkfnGBQrJYAJErPPxh5vLw8L2y1WetM1XTPVS9aSMwxLiAYu83dVTkru8oNgJcEJdhBg7d",
  "key24": "3WbyKsmAx9UxAyRbvr9k8kJbt2wfzjKXjxhSsfikPquGnu5hjtRU2yufGRdvWGrNnziDXUKQ4VNUQegXhdSPUBwY",
  "key25": "2inPxE5QoRN326FAc5og4gGDhgjUJbFwqH6Qr3Nja5n2hjbCbazZhB57DL9eV1LrUKrow5khtdx82TVdhGjkwDNH",
  "key26": "4tmor2Qv8Sv8nkpKCvBwKU6CqXyn1sd2mg3ZiQBKSZY6LaLcMZG1yJqpvpqi7UphEv7kTGneg2V3FuEST2H2EkTV",
  "key27": "3x9o4aoWU5ZvpEhZ6fD4iUyXBAHBng74T9p1M9Ukmdk56YRHVrqJPzJBmKr1R2tcsNuDj59SkXHsweoDBWR7tztQ",
  "key28": "57gDkWLzHQA9MPDpwQbbTPFvYkBt2TWH1eitawwJNpWSbcR86ggJXJNkcR69pYd9CBe2QyhJBdpfG5bt3N1ix5iw",
  "key29": "67UFPot1ZCejPhVtnSpGWZztFLxYAZYc8VseHfjPFfVcAxe9ZZ7nQgHu97UEFWzmFRLLwk86zTrWaKzSYDyv7BoK",
  "key30": "JRhzLRA5ZrEkwhyHDJmFtFQWS9XpWneRtpr3TfYTYUScZ1bEy8exQBvZdkh4RQqYanBxbrAysmAggWJywd74xHK",
  "key31": "jtbQCs7MW8ELFwtYpQESxEbugTJybqncMKNEFeSoaXWMWwq5mb1sfykYqmbUCQyME9xMy5X1avZvjrkk21ijo2E",
  "key32": "4J6uoky7fpxL7Zq5Y5gNgEY52ELx34t9T3W9oAyG9PJxQf7KbiKW9r9paCoUzJC9DEaD2oHHVsBBtHwzZXsyMzuC",
  "key33": "34cw6ihM45qGWm7x4PEeZngiKoqYJMCybQJGJNFKwSga9VCigYFdpFYjQsKbASLKxUXQtD4qdspw3aE29zdvjGvQ",
  "key34": "3wk4YQL53DsqFGPBTkWYcsEPDbZa3RrvKHvEsqVxdJKt892YdnAbGFUgGq7AKF94TNPsw5NxHtUsvGq52cqDyc3K",
  "key35": "PBKDSSaF4vFC73URAJ9eMv1uq1mi7PRpkxTq7HQpbP2v5s51Smb1VqyVtZBhTeE1L5RoA89XpVM6st6C2LbQmRU",
  "key36": "2LW1gmS3Qej6yPtHXuKza6Rq84V8YxZhRyR9tznDmpLHKwVv3GMzHGB8KFqsxSGwrMazuZnZWhgGQ2pDtkWtmFAs",
  "key37": "4o2NTmhFjZUA74bsGTXep1KniHL4ShP4EwTdhZAw9BBeGKKqJx5F3vdYuCoAvWSSjEgTLQRiSB1DWrUc6SsVo7VB",
  "key38": "wgEqHdMhUC86WK9EPNZb6BSJUsprM6vyzgZf8MNY64bAoNHpoJRLdQZrQE1VpVDkBCkbnv5A6ZbfSh3JZ4LTyjK",
  "key39": "4UCuyMEUZqbU4s2WgcyuExba6Y4rRgaTgJ4ChXUzpREyrK49dwxijFy7d3mDxE47vx7QEb7oNgVdRUrUjAwcHBiN",
  "key40": "2F1xXCRqtmhozTBQZqnNuN8yoHmXGMe1YZKPYetvmM373BFj65TbEg5XBdG5WLCiX3CVMfpf3M6a55zQ69ozGLuc",
  "key41": "2FnBcfw8bQKpXr2RkumKSdECcPzVWgcE65gfHCtkUKb78Lr1Apn3E16BnFbdqeKbGNDBCCA8qDUNe7Z3cwAvMxXS",
  "key42": "5GJyxEjsrZ5QhoQCauxFyrkhwjQHJPCyAckXXqhbnWaQN66tCUiykHbsYVQjmeRwcVmK9kQ39rtHBqWCNcFqiguc",
  "key43": "4vxYcNM8oJTG41Lcx1mXsEbc6HqUby7kadiEPYXUnLqjE3TMjhUxWTWLPEXZ3LtqLq6PvAPnhDYdcNjxyThLHSg1",
  "key44": "5yY8QpkhjgVx71pRta18jjpe8rkNQSmrGHyHkypdTiDNb3aaHJ9XQQsdP8pijbHBgkYsuhR1X3Ab4dxLKonCfPWV",
  "key45": "21cnmybwupKKgoXdr4QacR5jt12567Q8aryNP6W8mbBYN4eQudgaQxXB5aNYkewGSHtZhxSLpAYh1ZEfBSiojLx8",
  "key46": "3RHhwJwZVQAzx2YhQ4AxohLLnjC13XKesKFJpAd2ekQvMf4N8Z4HyCJpQMYw1oVibwMt6JgMPN6GCFAGhzvLVSKC"
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
