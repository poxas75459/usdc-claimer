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
    "3zayz53WgeENxnRSvdSNQyQf9uBfiaLjj7UuS85bFEtrZAEHrFwc3CfyrV1Bw1gCgHPrumGj53sSRzWtjDUmCLHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vmB7K3tRX6Vkwg4ZyXXtbufGLVFGyA9RBYBwwBihUhcWBnxGE5F3gQTTb8vxjiS1qrKqqSDFTFPUHhtijDyJ5o",
  "key1": "5teEZJerfMFzSwNSSZFMGqxKj77mvoNUJ6SCCvDAEFRdGcbJz8fTQbu5h9edEybL6gfwxuT1ftVsfETRGJ3d5ZqU",
  "key2": "31sUxBXfDXkixBzfqsKutSaWFstxXuDePhQcKn2nJ3ukmXAgv3oMY8aJK69zyh2Sa8M4wKcm2ot2aGo68oMeU2Kz",
  "key3": "BW15QCBjSs6We5sW71LBHCJn14VW8pzb2s8cbpe3nBfiLycfxnkJezbVEwq8HMzzbARkBkEGGPV4YZru4WZnrr4",
  "key4": "5mK4fTJRdVHRgjbvzXf57ZoWniC8FjwRPitYCC7q64WAyudV7R41Q4rLJaKoue7AuWXuDMPGDpTD8JkdoZEwsXGW",
  "key5": "5wqqtFGFAym1JyqYZg4z7kNegSQowT6NFXhd6tseyxM2JMKtVm6C8RkeZ5AsqgJZNN8ytYQhX2SWFxmBjThiqo1m",
  "key6": "3yS9oCd3422PnveSEwpgB48mvmZ9z4AAT8u93Y6jink3uMEE8it3k4Bu6DUgRXSShUS4AH4h1Lak4R6FZ5bRE7Ff",
  "key7": "5UCXR4QTeW8bR36oRrGAfwc2FUMLhiSVodu6jbUV9UyvpWiG6QtppMWJ24tyeKRpdQeXCX2EUzwH7fxYpa4dKgmf",
  "key8": "4rvXgAt9NHA21noRE1v7KdugYsZLGSs44MQww2KkfecLrsi34ZSKiFT4EErdqd4Yr3615ZeNkbnxrfnKWj5FBJiS",
  "key9": "3azdgHrCfVDKeXFZ5hDR8urpesyVxzGnrVxgJkxq4BQV77oMj18GAjobYMEfpwZtVV8BRiTWf1AJ4r51DGBwaXic",
  "key10": "5hyK2uSci2cYAtxSDAVChuBEzAJtRswi1yzxDJ3id1P2i5mav6yWRkmrufv6ZzmX24He7QA3BU4J3qwDiXGFtuwg",
  "key11": "4uDtjnUCgHp8QPgU5EGaLPbVPLKFJqnBruBZuYrVaFhXKEWEpWiQWqc52BwfLr4Yc51KJJMsQqZRDoQyNeTcJw9r",
  "key12": "2G4snAVwWgWrku8q8Upsa8J9Z8YrSBn2kMGHRSX4dzSNVnsUshT8w1jjUAA68RnGCzLXw259xztrz9PZqpnZbBx1",
  "key13": "56q9Ur8dDnTM4YHEzxvLacmbcsjfEb7c3KHe2JcLi7wWEYSh7fJ4sN5fQRyuCsYf9jSu4VJFEnTMRpJTXQDGkTyq",
  "key14": "3Qi3ht8qWWoiaVBp5XJRyYc3ySG1Ujgq32NwFf3wsHdtLs5qCXSEKREdJBFyFi32awmATmp3kLyDLJjLjfGVdzcB",
  "key15": "7qvDPcQEoNMhtinmXQBMYjWxFRWFnVadZqsR1geThEmxa2r1f9n1YS72ntoNWtXsbgH1SzbEE4gaB5VzXJttdov",
  "key16": "2pbeUZaPXQvy6pxaQen5GRp22WYb2ba9KmnR6f8QdeZuEWqAweYSaVF4BbkfT6vFAwtcBHgq7j6SCLsh6pSNsK7u",
  "key17": "5ZpVAV4gWtT6GFRMvxUX3zckSs7V4zM9kuMjEnqwczi5kb9HstKKVryWEvCutGdo7yErJ9V21HxchPeTuACu25S3",
  "key18": "4RkLEkaa23x5YEonCJzynUpoEp35VUEY2Hp35zCBuxZC5c7pkNTYzVaJ6uUsUTwRpHHWeJiNkXZXi12DvMbeGobC",
  "key19": "Nyab7j8Rx2qa13A4rfswbh7Tqa1L8Dv7Q5MAg1snnqufoxKKpgorBibXiXMEVLQB7LkSNtqfdnmBBhZqX5sBf6T",
  "key20": "4VHfF7cSsXTYykKVThMuyDZctTxvQd77DMs85iX8oiuV7DE89s2tgC694BGdtK2CK3obFH8pH21Y8FSP7SnyuJZE",
  "key21": "38F5fbcXU8LqdxB66wDt5pGBB5BGKY6PSiNzfd6voxszDozhsjuyAMPaKidMXbrg5yhPjsk7y7ge3Ke79T4e2ZzE",
  "key22": "33f78G7JN1HCWByckmFwPhsonTeXjaLQcu7XsNgoWmqfDhjWQUnVnwJVapC4SuzZxpMweK42eWnxxnbHfDfnMG5B",
  "key23": "PXP3ia1FF1CUXm4VSniuDGduvCsJrJ8aRVHD2wGE4hzuHYG7SdmzjXz9Y6cVJuiemq6ZjXS73fL3V3XVVfvkGKa",
  "key24": "5rBbNCrBoGdKaw4RYxCe6JV35gCvHeKV8Tw5CwYeDrPLjuc7r2txmSoTQyY1rXsP6F77dsastgujWCRPtj5knww5",
  "key25": "3rYJBS7yh5coSm6SZBnMBqrZf7pdovSRFpVhdd9HMP7h8oTTDF3ofzAPWejj4LcJGTMuNB7yaS6PDiVu8VQAJuhn",
  "key26": "D2otZ4gC7C2iJhPzhgnyGyuCKhcDEtPgqK43jrSVZnYDWy7MDSyrzcVfg1AD6iFHhUoHXTUGLbq2uuyeVKpyAtU",
  "key27": "5uPjfJk3dVs4pGWHAQepi3NvUJQHvcroFqnN1Qpdv9KVn7ThR25HYr2iMf8kWgRY53RpoqP7bMExA3xjmkxNZN2g",
  "key28": "4hMVBSjorNHWxEmYPpM6v2TN42VvYhzgLE8UvgTpDdwTuER1wNJtqFfWFej9pidyabBUSAYxHUnT9CwGKZgArM5x",
  "key29": "gX84ffLSBpvBLA6wonn1fR8ENXEooy943aboV7da29W5K1qeEokReRRmGhCNByPHQJMVNWxKiB6heH9sQn5pJFj",
  "key30": "52Cp8KAEfdwFMcdnSoKTSdzDZzcaBbv2qzwLnUYpx6WrQ7qmonaPJPNPm1dWVsLvyUDTD4f6UqPe2EMKx5TYDv5P",
  "key31": "42Fp3B5AhwRa2Yi5t5tHgBZ7fVZ6xekgqiXmGomJiRoh92kYAUnn7ToqNyHjggyqmgWEayjLC5pJgQpf6xNT37Em",
  "key32": "DuVgzCLQ5BNMmDPk7xh7iDkyKkDHAiqKhUPPPann2Fp1mfpvSvLB7Q8wxEeXxykPceSUZ3godLwHTLHAZzmfsxx"
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
