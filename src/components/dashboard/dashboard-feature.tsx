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
    "2naA9jJhJFEth7QWEzGoJomvBct6ijaHfoQmRNui2xkb1cWroC5Q3GQGay7kkrVWp1VABsjRvEANUg7t9pVRmpMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MvbeZes6ZHMCaQQpbX8RuNvU5Ch1KeqL1TTVJDH4jbNhH9MYecGEZAkhvu5Znvqv27DU3fp3iXAZe55egbmphfC",
  "key1": "KiAcMk7HweH1NvYDS14N4WTpCQy5SdzPtgR4SAqLfrzfPXxuXcuvtUXcjNX83MNmwKmYHLhShYnCwCGuh466bnB",
  "key2": "3nwynB3ib6Teq7WqywBwtHj1JhWUG71tAuGMbBTnDaSH5uUpJu6aiWbLQABVoVoFkRkso8jGNmPLY1tYPbBSqNmx",
  "key3": "3aYzPK738xtSdAG53ZN6mhKgmWRyN6CQWk8Fq2jfyhWiWpnDBUgWzPEXuEug2SssnRxm4fQeUiWGZ3rwEjMvFjGD",
  "key4": "46VhdMC1TW5r8XdukEVjrs7DKtckRjmGBkVerZ9byvZRHGRQd9w7vxu2Vqvm1sEQ3kxzMhhCJ8NUhoZLGriXaWnh",
  "key5": "5fGkwEB9ygxu5km2VmQ8ASLLKQehqbpWsHzrQCy2UwScua1Loqqi4doQwYDQ2ZSdyZoDArMy7VRqh9KJhmcidiwv",
  "key6": "2MCuBHcmfiNniHaMWsSDPUHXma54zp3uA6vp1A72rR6QQ28bcd5GotKJsjAFYSt8WMrTnRfpARHBBit2vAhqCbRW",
  "key7": "29eR54o4ktiBagSvisPK7qHvPi9WoJ8Z6fJEJH2Dt9eioVXMwxpmbf6hVKcPJK5c8aqard3YKPCjMopmyzGkMxey",
  "key8": "4mZ8YM4UYwPWbARzhAtDnYETTcFPYAf95wXobc71rXJi1ZWYe7ednUTTbUnZDHatxTXi4vwHHLnXaQvonskYajtA",
  "key9": "5PhUZ5dnN3qMsYWgdhyak3aHFp1TMbKpgUhzQG3tLYSowjDvAsQNqWFsikyLdPNWkDCdfruBSQ8cMYq66nFktar1",
  "key10": "26vRAtAc4sot6qPxdGt1YC8c5WXwMNVdzxz38C2WWgJqzuvvWSH8MGvPVyo8oFQAM6fxW2BWQdg4Ht9k19F1564U",
  "key11": "2dEGrG2s6F4yuiGr7PW4x7mqiQn3Q1KPTdCvmmkxPjTjBY3GJccYbeELA25fKuG512SWupNupecsfm8X7oJG4DXh",
  "key12": "31vAkohaKcBfgEnfAeeqVwdxWxTXFTqJ7Num5AUko4hJZ1tKUuxCNqC4vEbNNDvDWzRswcd6pdM7FTQrnhX22boY",
  "key13": "3aTwvvsARQwDbB7cWp7S39qyGnezfnsBorXWScvdc31yBxTZUPM6rdNKFBhUr1pCEPWoc1G17rwsKv9NLcgdxNAS",
  "key14": "4YCbq9bvtS2E8jLec1oMQHPokSxirvSok2dQvXGkBLsDBY3oZ4ERvj31wVrfBVrYYnods3BMrXcrdmBJg5ryaNyF",
  "key15": "2RExuCZJUkr97zhaGzizEKCKaUHr8wgZy3HzpmQVqcqLG89NaNceeg3ZH3C1x3rt1dPqKNTnSqJqpe4KKJTKRKbp",
  "key16": "5fonis31kDKaWqaHQCRZAsyecpmzxdMRbSdeecFRnb1zxsDRCthSVoD1Pm4VgxgjYobgMkhE812KmQkFDeTw6Aj8",
  "key17": "4XoEWC3wsK1DwqiDX4HuVSYCjt1hMKFVM1TdTwWWmXjNduVvP6R4toU6BkMQnL4WEvASGFc3CghnifDqiu7kWynx",
  "key18": "2wZ1A6rYGTKW71ftc96brACXSjSrx8z7sC22aa9wXmXqqPD3EQrkURqLBZmsPvtHjhgV9qRKbCkpoLSpEymWEeiH",
  "key19": "4BDutDKyAxVTniL7xfxnZuv75jbWRqG7a8H3zmEmpRMaHcdnyG2XbPtuqHh5kjv386pKYpJ89CSjmHd2Pizj2YG8",
  "key20": "2frLYERBmK6Q6AhyuMpzfHNg3jJDyeno74MU18XM1NHq3uZVZokXuXUTRx1YWNuMwouDWzTcUYWChbGyStnrT6c2",
  "key21": "3kcJTjx3kHREKYLERMuRqdJKMKBAYub7Dn5yDKGHatcAskzX7zGRggZ1P9roi2N7nzLaNhGykWrNMkCcLfXY8YHW",
  "key22": "21iGvECqu9z5Pi4Rje3V8T7jUUQVBUX6xxEnzSH9AMu3ocQu9CPtC5P53ordGor8mg2RMAQav61ah9MfphQgDtnc",
  "key23": "Hh5XrjSjoRyGzZWxdNt3fjM2sc6unF6WXEummHnMFQjkMWBSpA6YQjSpcw4cqC6yDCgHXNeeqjnguX29JjsDif3",
  "key24": "3poHHbTsAfA62782xWamWFUpu7QMT46Mt2e9Yetq33ZisKvmTsfNufrhbcCgyz8jdwN18eqcCJ93FNPVBsskWzxv",
  "key25": "2hbBXngcbzTXYpoBkXYFMXBavsw8Tibot7AAHJQd741yM6qV43yG8BGxYdW4ijJEqdUrQv1yMcD8fDox4diVoR3x",
  "key26": "3wRTLAWBAUiUCMk9xenU2fX5ybRqiUcpGWxCQ4ztSEN8SN48ZbC3MUPcK7WjVxHho4WTs8hppyex1pMWfgswsA94",
  "key27": "5kKLVqfWPHxbkT4BmvvrihqiwEVEdTXqbweNSj4JmjwMJWmBgMZLKjQkwv8kA5Yq7Lywh87qEoYaBKjvvamDkLqv",
  "key28": "3YdTaSHL2F3REKjR9XZWmLvFogzZ5zvPt4pYA5zPxqRbgTiWkSXHHEYWgn8fVkJ5YXK1od6be2nHHw3oaeEaDr5G",
  "key29": "3XQk6rYSfhLfr5SMCP3Nz3ZehM38axrm7hfPm3q4qouiwynshzteXjpbUhHoRZmDqRMMCMmMzWetUberyTETxZFi"
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
