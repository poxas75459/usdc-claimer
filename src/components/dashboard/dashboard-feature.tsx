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
    "5Qr1tefpa1rsMXtmpsKENQLuzTg58Mjzb5HPjG3KZfPvK36Q99pHnz3kot96E1gpS5QWwLJAFNvWTXP5YhdrPi5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "quisFfDcCwih15siMa9PdoLRhyAzgVDzRbmkztN6t6kQrBKWySm6dexWGAcgRi3GuuXwoANus6M1AatG4AgHHs2",
  "key1": "2DfKm513kbGXJg1FJ85Cze8NfRtYA4F6jwdndk7nSEJGwcqpYTenSc8CiBih8gFYxx19PGndzNi6kMk2jS4EmvEW",
  "key2": "4XvFkAgSGvTpKgtXiTUB5GWrjZDTY6zEJZa9ikpYqNyoMGXeCsPdWdibq1wYXPC9a1Xjan5KEu1x6PvWHV8wfL2D",
  "key3": "5wVL9u7QUJHz29mweZ4e35XuKAALE4SJ7Ju6PhvJfkh1DPEmytPFZMdhqqKYeWiVXi6mJdUJSx525pVJB8Rc8Zsm",
  "key4": "35rGv45ETrFNc5h5482T45hSyec15V7dDEStSbF9FnwNK18aS8xx9eY2Rqwvo16f7DcBYL9QLGQvVSLpDFEFMvNA",
  "key5": "2RRfT3UnzhDvzRcvenoikMt3PBc1Lt8JEiN6iZ49r2kA4eXu85shq3K3D9vXMUbeiCYw4mqRt9H2htruVyRvBDQE",
  "key6": "5ATBj1iKTK3dG8yRYtgnYmWnF589nhgqMdtGG1rqpUiKnDJiz7dGJn5VPYGgsT82RgqmyUr2m57jfUSoS2yoiwnK",
  "key7": "5Tp6LKJNd1tFLZdy9XUYA2MebcCCcuY6A9sqFVnhHCPcRcTe7ruf2nUAVWWffAr6PpepYkAJCCMYQFGyNpwHHvmn",
  "key8": "2gEwWVteTyLNHn39poGutRzquV2aryRrPdaGqqmMHmm7mR2ytMrLN9DDGAY4KiPr9qfGWHaB6yzs58C9j3BbM4n2",
  "key9": "3Bui9bn31aSBHG8PiPAWUJCquq61LZGfj1dDtnCL3DcG2qEc8dtCvzd6mBCq6MSSuoqLSFUp6GuuJwDKSVn5QHqd",
  "key10": "4wiTQdG6DZaJjfYruBufTLYNUYr9QzPj2ndqXECwNxoAMZ8cBAGmsbpm4rkoen3QCSq9EiKHdaHY3FK6hWJdEws3",
  "key11": "2UwFtXY5TDcDUATw3baxp8xqPsgRo7DrFsoNYjQZ3BZwwcSzQRAxfXFi56qwCre2nRpXnk6Ad4BxJf2MbvyAL53z",
  "key12": "5FXTaZMA3fGiiMdCeL3We3d7uwxdiZzDJybcZE3F9Mr7Cf3hygor2cqCetH7uR5PNv18ndbxoQGPPv4VpnpZ9edS",
  "key13": "Vg4hQSVnunN8TEpyLhL9pZ7YoVjWSg9MAdPBZcVZTjMNmPvA9Bxep4hYxD4AQQGffWEou9aaTnGPYpr3DohcSm8",
  "key14": "4maBDp9Ked6MVPVw9uKU6pWDUbD3ZVWQPM2ueXyhwCSBujceuHbXBGrcHtRJB8HPmVyeHod6SiLZ1yoXDhPgdXDS",
  "key15": "5CyaW8co5UPMX4N7U8eeQjtjwWdyEKnAwvgprf1uZHgyQ2g49XYSThbdn3tfZe9H8rkdyVA5QiSSzLmkFheDse3f",
  "key16": "63BVTTsu5FX9mj3eeVdQ7hSNm4zwyVKU1a98Nb4uoBARWHxybGnJbVp53LezmKdkqzQ88v1Z5Xadwe769HuSHs5L",
  "key17": "59LNvGdyRHpbmKpMUK3XPPcMGsp4au1P1LRjECArppNLznsVJ4ZBZD8UPt3mN5UUpVBp7f1HyxUfGqLDizb3PpmV",
  "key18": "5RPkjHah7cyV1MfesE8wngnvXsV3XipLqJfWYGPkBC1Y1JahmrTGKhtAgDKj5HC8czvjLWv43nBma95425xmx3tU",
  "key19": "KaMvM1vrLn4N7pDymZzqS6wwYFfg5j2H7U3Gb6ZNHTRCVApVFocnJfE7eZQZwW8ZzEXmDYcP3YrjQTHDxPneJnS",
  "key20": "3LDq3WpKZTRmPSvJiTBLVGTGpeUZjHsAie5rbCsSwiMpDvPBkYJE4kE97BXoMBjGBpKyE5ukT3tgxSyGWPJffL5g",
  "key21": "2q7us7K2cvYhzzirGEu3duSEEmnmYLxbdSNRVJhnHxRKigriS5eXAxF2op4MJ1CTfkmeYHxdY4F4iFyy4Wq5tfPi",
  "key22": "4pMjoMoFGaZWBM4B166Nu9Vk2xkZdxikYvWLqHn9Bx9XKJ35aJkF9eLvAeLkrJZcbu75kzc9soeUsVrJRK3JaiG8",
  "key23": "CSiKp9ZrUg7NoisTR26Km6bG5zUw6o1LjfaEWBm9m8uGMwACrEh92Lqypn3FimVbMQAXPvWLnnY79ccVn6oTZRo",
  "key24": "EV1tDQd8PBJwH1TvQ99itGPC7wCnbHLtSqfYrP6bTuz3jJbB6K7ZeBoyrFaqUjXm6hoH4y4o7WUKoXari837YVf",
  "key25": "3D6Zp6Ers4Hqsr1FMvxpXBvXmv9iM4fMSGCF3Z4jZFVkBeKzsy9Kf8iFFeqgPADQQSNjiwPn3jtC4fCt7AJoHpLY",
  "key26": "5b34HuzR1jWkCrbhXNKV5S8j2rym2LyyQiXFnqR6fzXrwMHXnwNHedAoqs7QDhhWhkCDdcLHQNzXuijxhe6YkiCF",
  "key27": "5aJWUBj7JqFptAf5AJYqJVgzmHmCkqW4br9TsrnWrnhhqSgBwSnb9qQCw6r2maKpjXqHEKN5xK7BAk8Yoj7cMU8L",
  "key28": "5FW6vamCFRcMjFUGkbhTB79BEMvWtLCH7wZ3QjzXbzB9ieH6MWGzLCo3oq6dTxJdXsAijv1WRq6YzgDeymhu7cxL",
  "key29": "3f4vSa1PEjmEijUxNnDVxXvA2pCmGs1P1SC78zAu9HmRUmFW5ihxuEtt6Fbz2uMHgzDV85cH8emyYy8KQynfdDXc",
  "key30": "4sodjm55GdoduTo9MGHdf1GH75CHF52UuFxGKixCrsB8TPpizwvoKEjp2F8tUrnPPT8rB9NGB7thTm5J9euk5Kuy",
  "key31": "nWrDpjJ6gFRX3rdnJxDTT5PssAeY6ep81Vcg2243K1EYH8gXmthEB5NAKk3hFVHaKrZMErhUWmBfqfpsb7Tw3uP",
  "key32": "F8b33FKFuYuXmqnV3Dp3kysD8icNxpqmPVmcSWuLVVYw5fvPsvaKBfnjuHocemHJXZ5QGrgVNK1D6FwAE8cjGjr"
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
