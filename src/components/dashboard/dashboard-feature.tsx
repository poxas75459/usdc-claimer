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
    "3ZmTAXSWNZk81ATkLRysJYAoifgJ7CxPqp2uxZgPMKE3zy3uNrU3QTwV3xKxBmycVWi8dQ5h86tq3WxY6ZP8ciKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6sZ8qGQE3zcWZGh8te9mwd2THTWPz4NDEGxfQ3tGCUYzJrQMLZhwb5EAcHXkRFLECzKasgpipJnubxPZUUwgYY",
  "key1": "4R5ZGjopfUypgyt4fnfSuDnYjz64H5HUhYDjyxaXaXb7bCegx6UjHU8EyRygU8WxZiQhRKjkuchmW86iAgf3JoXm",
  "key2": "2zTJGusEMTfaEEdr6x2u9GpULMtkKY8tRGFfm2wPsQSe6JiAiiP6NvaFncJx4e1oVFUxTByHAExAMXtgSci8V1wM",
  "key3": "22gGa9Ga1zEWwdc4g3x7Sijf9f86qfhVTysxF7AmiLEQ4Hsjha6nQA21Z3rwg8dE8pr2HdY3qfNVi1TG8QNemxAY",
  "key4": "2cVFf2K2uVZzC3ePnvkWF3KS3e6k4ixUKjMwXZAFLmXbDRQtFXp8vch8r55jo2Dq8crJXLU4jGWNFXmxBroC4WX9",
  "key5": "5swFbSqa6FkGbPP1zUB8xUpdSY5jr4nivNasvJ3CFTbDKd17MMGTAFVwTmgsXse8FWgbxedZXYVVber3A1d5VuiY",
  "key6": "2MwMpnBqBbfhSwuMvdram9hPCMdRJRRPeLDW74Mo6kcVByjEwQChsabazySaPoAaPYHfbVkw5R6quGczxtS7bC7h",
  "key7": "4CJYfr4e9RbAEzuuBVAKtNWBfgzxGvkR95Fp57n6EV3uHKXUiFJkkdEKchokabqXyobeMMtMwmc6nZyzR74K5DF9",
  "key8": "2CZWEvqur746p1wigTXatTANKcrcHu6UGLD65WyifjdrnVUPhPMe4qhWA7Fe59Dw8718ZWMQnxq9y3gidtVdtqs",
  "key9": "4jU9mBitgpHJyEFmvBTV6sMjRqQeJt7rQFfZFjHDsi2oyrsCAiADSdNThfYCDVKBBgJbGPckbWWPo6aLDwKbDh8E",
  "key10": "3Vku8dxD4zti8f3QSVE4ymy2bDzej6AVPA3gWXYTiTdtAP9Jf3JibutZvUDRvtvdS7nYJQotSMFF33ZVxbNHFdug",
  "key11": "4nWLSfq3bJVgs5AT3mmmxaTKQeFscEch5xD8LSg33bH9wzYusbySimQZAzDRtY4qw3hX4EacfidDtYgaTKB6r3io",
  "key12": "3c2AbHjLr2U2pdqLMLMPHcDF2XUnDaNjPqp5b5ePafqNmAQBcHVMju4J6cyC6viE5NtCkLtsL88NcUUZCrN6tFxD",
  "key13": "34jfUd8JjoACsNiNxrnmhV61Lm2hv6bUMYZvxip56tEptRiR1xCaTkaXtmrTsmJrqJM8Y545HBPrKRW8v8G3Te5B",
  "key14": "5CN15BTBBe4nmpCrdMpsqi3YjrZ7QBG7A6jrBdMCBmwUwNawX5V1ZRA3jHky8jJLcurtNSFybXWJC7Us2ufx2viZ",
  "key15": "2bmcV1wEVqLviHX4Yk4TeehfbkJwgKbNi7ZSJmEnbQ8Pd17pNqFCLepAwKPrUc8fDM16ZSS2cysXtFn2P3qGHisE",
  "key16": "2bc9y5ntVfqTEuqAG1o9LAK3ugZyrS6gZGYqE5rh8tPZCQMimK4ue3VvfCVLRgakAQcETzypqrHzYXgcZfGs5jvy",
  "key17": "52VN7E59wVcMw2U3RKegPX77WdV41p2YVCpibSwCUgn3aj9jwaMHsjJjhCkRcPxQK1TZmdRiWrPWZQPRReyWjQFC",
  "key18": "jpVJFkwZZebbn9PVipLpXbw6LxnW42AnJntkqT8suM8Y4obQcsuDQYn7A5QU67veZNY6VjFtZToMpkuJn8N9dCf",
  "key19": "4zkxVxqSYHUPUN7CyzxzhX35CVc3WPvf4HTutU75MSpDSZfQhrMiVq9nb4DFk63B9jF76VobwFfmVGqEoy5fpaET",
  "key20": "52bBvmShs3W1yFDLM9WE5EPyQPUu1gDxuqGKENdVsjYzi3fKy1CMacn6wmLPLJWAfr7XzbVkjV4r16uUNQ2uYc5S",
  "key21": "4if8i4b7i84riGtYaUPVmNAcf5SCQpGE4qNKz9NjK2nXR4NbSxvCLvxD9wtueUTNYTB8ZVpEtMpXs4cCWRHPxYYc",
  "key22": "5CMCeiYLfcN96XqzFSxQymynBKnDrfaoibDd4yGXgtwQL13mmsQkJRiecaV9rskYVS4dHT1vqBKNkpQTr4e8K1vk",
  "key23": "37yusVZA5T8LbTPkh2QstEaT3KkawESgKkgHcxFH82gyPPQaGVJ9aZF3k4rzPidGXwEMTaHZQ5ca8GFxnjxKGU8a",
  "key24": "2f9wRtC8kSBtGwYKRVujv5DrXRaFRoz87SqQesEFt3JGQk4TwVzCY6ms7HZATKiVhE9uUs9dDGLXLBkfSKG3k6Zj",
  "key25": "zyxVjr3UzM1NVzET5jNbYAtstCX9YjXbc4S6vt7BRPLDtrnKC3eXoyQoPUSHBg9dHFZcm4hqsMuKaU5LQAy9KQb",
  "key26": "3dPRkU9XDgBfoBDSGnjrqUCpWt5KjLsfQUFg6rnd6BMPmciYjmfsEwL3YE5rtmdSivEDjLjaRL7N9VARSNZb48w4",
  "key27": "4nNdXMhkC6hUXL4vtSoXJMMLT7L9gykn2DMFS7Yh3KkbSDEexaZuCqiSUv8A5FtrqwAXQEpR5fpkHD5VWG3gRUaZ",
  "key28": "3apMuM54nXqxLZsk68V5Nj8LZ1QHEHdsrBA8zz7CHzgs1X2gwoi4KwuWp3xNwJh7MmsdTCcf4iKgmcrTDKV4HBVu",
  "key29": "WSLnRH6tXWH6kwK3ASkheFQT598Xwih9u8xkxxzHNWKWjP8ZyFaKbW4U8511JCwPDjouLamRVkbMMuQ4MCu6HNA",
  "key30": "2rm63VT2CUXy9z1jQj1gsn2s51hYNFueRtuh97VGJw8QRRHPaH5enJAMvmit91w6rqus68AeNmjUrauwyJm5DiyH",
  "key31": "z2Uj1YA6C2kfvd5je2Qdk3sMsUZ3TNAdTb3ihHUNGhyzrGsyCpAyRF4FhTFPbXw1Gprrh1LUWKqk2GTMivMhckA",
  "key32": "2HCNNG7vn9SAvbND6vLGvtxYJE49w4ZWp2DdnhDb2yJyTvQNa8wyAW5cS9uLS3e2hesGC3ftD9o8rGdpZ63oVfBq",
  "key33": "5K7AA6iRtCziA1osEy4cWUcTvMVWda6EmVJXx85vk1c95rxDs8obfou436BK8mG437GG4zjxupSN3cvPrMUCeWEj",
  "key34": "24LLfo75gi35aWgJ8Bn7ibhug4Zy1UyaQoreNQi61s6qEt3VcANMFBSmTyp8XiMEQePEVtdYhFun1ifpE1WwZeoj",
  "key35": "2pPVXqEMFSDo4cTzC53s3sjG7FVvyYExvBPc81UyyHcVeLG7tqDVS6JCC2UcYmJTfmEs1FueNzyv7AdCe4nwgPKz",
  "key36": "2HntqE62V9mpnK7gh1kUHBySrNzwPUaPoLCKcTHJhUWuFtjXt457cbaNRLYv4SW8MZuxWwAQgx8hoxSHtqiRcov4",
  "key37": "5LDSzdTPhsRiPxdFpuQSdyJxwC8HQsyQY1ZULjeLpdyAQKSCTugtHBHxgEw6L4SpTJShbWA9ZhCuWt8c5ZCTXk9t",
  "key38": "38iuMvp2PSGT4Nf5BRcGtmX7dxmFPmywuVaPzZtsoH2B8zTyuWoSY7Lrt5hek5RXhRpAKgW5uD8CzsES8bF4gK1H",
  "key39": "2TmGjPajgHdrnEGTC4Dj1et6KBq4AkB7beL1q2TWZuCtJK7Uhj5kRKkQvzHM8rKcLgTLjTnVgBNyWTNgPA8HrYUc",
  "key40": "3Ed7brfhKXQZWnW72jwzfNrLrs7UnaJg4Do66fjwfy5petTnUUD1E9nBtxescmSnKvLkECwiLXo5GG9fq9UjVLqK",
  "key41": "1cGqJyNBqybP1kUTHgCCQUhAn1iFDx4P3RgdKAA58aGx3vwuAVetVAR1YeEgyxTtPfuCxRFpQjRDrs6XCb98yHX",
  "key42": "2Q5fezyzgXM5Pk3jicKsaopBjH93BbrtGucv6d42QkNaucMkbrGdwZAjb3vSRxApGiaqpm4xg3LbmbDoTkR5dBmd",
  "key43": "5BBnMvG9z9DDxyGpcgnwz1EhPF5tfxuHPxvNMBhqW4FSMQrd5eucAASj3eMLG7he9nJpNSnGNTBnGVf9t5tVsYRg",
  "key44": "5a28fmnHjxTvY7gH4nmHTPoM3fREVwowdxQfap7qTotBGiQBMkJJn1fUXYXdv5RhEWd3aNyDuii7QbVmYFHyVZqu",
  "key45": "5Sb7hpohXSMk2e1vQV7nmBMuXUGb9W7JEsUY5z6SKGeb5F8ne8aYVqDrN4T5cL47NDW6tJpsQbAW9WFAzxQWxbH5",
  "key46": "3Ta9eKfeS5nbTU77iVbVULauDHXRYrsPEvGz8PmeEwmzYrejh2wgWVvmp98jLHP51FutF344Vh83NwB9LDfHHNQk",
  "key47": "66CvxHRQgyVU2kAaeES3tybLZGwAtBup2c6Q3GetG3N5CAnNPS4o7K4vPk3EQKvY2Qh8Xm6ZBhdpu9czwA2PxHcm",
  "key48": "5zXAft2NWp8m5WK8HT79sv3b9MtMLaN6LBB3RxfLRe2SAHizjrmDUmTMUnrmZpMysmcZwBaBdRRC61owed48671E",
  "key49": "5ZckH47uTPC5qoqXHJvB78rpvBSifcNMzwrxtaAfqynkCosrqyswRyJs7FpSYSmPfsSp1ttkjGEpd9QLbtE8JtiT"
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
