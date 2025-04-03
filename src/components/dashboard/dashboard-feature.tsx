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
    "3vvWL98zSCet7DdqvU2AxsbtmUixtMFG1cz9L4tusGhEX9Y8yw7N9LWiQXv8cMSSRMsJdQLLuhuD8UhBSvrDeum6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QAzP8jixhmWijF9p5368rmRBZzPoNykxRpbrsfJ9A25DzjnFa15FqM4j95xm9betBKDcxEJDAaUDP4MMnuaMSce",
  "key1": "5ESdJV7T2fzooKJaj1cHCPf65zrWtXcKxqHPA3JGAMiL6twQ3cPJnuTrDCHHs54KPRtdVAdEQHdKzXwPwcKfX7u9",
  "key2": "4ApwSh9cSNGsXo2oeMASAbsp8N7iPBC3v6x5niGE8xFVbR66fEfL8ysJcL2fYTPazc7ocRRpenEArns2syqKsEBy",
  "key3": "zzJJNpoUnToUTu13TnXqAF8uHMmctZ1u2c1M9Jc2EqKskGthSnTeufUZsmAYjXUDPzJG2DFh5xD61sa6tbiF9xj",
  "key4": "azdkDrezDRZAfjmHLFtDeiXkwapHSBZnrTiphg49YZAaKMNkiExjWzCg3ECvPwesnYr97qTqqQ5ydFTDTFQhxUw",
  "key5": "5aCiBW3rCkcrSGSsEtuHYHLcg2FZEVMDQkoiFf4UXxGDXWw7BtKeCmfbGXeKf8qzaJz7NTb1RZgfuSN8zb9t4YcT",
  "key6": "2doA7PeJgMf1kDSv38XFNwxGfBQfy8jruWXCXg55682SMuB58L8pzy5TbdWemGNnZs7ypyF54oX5ZG6wXfa3fCxp",
  "key7": "4cSJkV85HjZb1atJaxJohxwdbqAuvu6CR2YGUyhPGiYsCeww3MAA3AzfEBatiPcaPMAYbFKknMnbK495qB8auxh7",
  "key8": "FkLKrtj8PteqbEAdbCZbAUtgLujzwSbDZjJF1v8sxRoAPg9RUkLiov1rgeDSYcSP1YkiwbXqPZJj9xmifiyNtZt",
  "key9": "5K6N11eSd4eUvA5q9wUUxduYF6UKGhtV3vbi9sK5uPdAVbbkXbYL9pRKp4MJ8LzM5mD5L8QBvCqP4cgQmSFct3fV",
  "key10": "3TiNqWqPWU8bqw3LApKMyt8rE58f8MUHVJNmBowkksHiH8E7jC7VgXsnzFtFa9ogiSMHgbdrJkDjzESTMmm9Bt7H",
  "key11": "3sc2gyiE62e7JnCgC8a1VXfreMTiyiyK9hJBHAWNbFarGY24uCducB53Nf1VZYXzroHuu3uf19CCerkiYSJjq2Va",
  "key12": "4mZfbqgNfMjd38qk6SEed2TCQKgfR56pYRVo3DD1QWQkv6giftdf7pSDbu3c4z7Zd1gVRNyS589CFXj5KHMhJBmQ",
  "key13": "3AVpiMsHTL8sFtn84s3EaNtebpukCNbbD7vxUt7wRbX53XymLpZNbLbbXicvrqotQVGAr9qNLaXkB8jEKzTUE2kQ",
  "key14": "5dUPxdMqJRWB2cMeZSULBXasRihLfgdwM9kMwVmPr5B5b3TsvhUE7opRshHz9vuA3ZAzmxesYHg3M3zFQYTo3eDW",
  "key15": "vEv8psu5Nen7GZomdfi1t7YPUHVTbTpNHzsKT2HF2SyCsQBUYmW73SM3ND2HCi2F8f5CdXofgyFhHcd2v95yhrV",
  "key16": "3oSybDzeJLbfdW5TArN27ox9QGRkTEPZHgWoBAJ4AXguCwJoMJfkLLYqpEocVJHCuVkj3s5g9AR96KetmJw3XLhw",
  "key17": "VjLtbCnHjad88mNKJe49eAgqT73qWQNdVY7HUdHyZUQDKAXptwA88sPBZTnXwZgmctm7qP6Qb96SC8qhaBkNvsu",
  "key18": "4yb8cBwyvJRaiQunAFzHFtZidnFoyhaTiFdprPZxZxohV7hKpvsj6wz6ux22jCng9BMwWt9TZ37ZVwuPuKPE5CVF",
  "key19": "3UqHTeotZgnKrmcuXHFqqoUjmgy5hnHHpAo7CNW2rhzWDgcvu3TDgpayxmarK2NSYixoZVKdSEFCK2Eupd1F6cvc",
  "key20": "3BtyrLcZUPUxgAdBmE6DpPyyzvvx8cMHGDQUQSBEU1mTj8cpoMbMuoh9ZpAJ4Jyd1PoyXN1qhzEDutgjzNeufqHp",
  "key21": "1zTwmCVMjSt6BZgbr8n96YccdfpC6vsQE3kMX7rA7ZZEwmxDxHBrD51wrrVbF3mFxRFaSA3SWDdoyTCuGrMaTFG",
  "key22": "5GbzLZDubX7LaLhtoVXTS4CNNqVKdTkov13C39W4qgyDqiyf2vTqfpPwRbiPyR1onQRyXHAU7CAMD8Qtg9Y5UxAK",
  "key23": "3LrKVDt45hrRXehc9s9ma7cd5qztJT7KHamWvViyYaC9pQCjbEoXNpiHY1GfwyK1v8uHWSXpZEgaCKGc8gQgok8w",
  "key24": "5nX9jiZa5Spv8iQjXAndFwECfaVTCW72FSZd6ZMFchHjhPWZiQp5Yd2XqWuC4fUPAoKW3hc7QNZ2qDiGF3o8zyKL",
  "key25": "FrPua4P39oZm5o76ZvGwjRA7EhrMRR6rEEfco41p5iJGZaHFzTjxigGyXVjnZw75CpJ9gEcbsu7HDJgB19KTiui",
  "key26": "nF8YBzHJm9r176qmo7qcCjkhjXbsKGMsz6EiD1nYYvceUNfmhKTx5VPpSpbMu7F94ebeaxtqA3btzDpPMRFBMiK",
  "key27": "5DEXy7LggpkmDqx4Y1cfHLuLkqvCP61DF9adRUH62HYXPBEBnXLBVPaRURyhoAVLAX138BY51qxdSuaUZdBi3sBV",
  "key28": "3GwpyZMNinSkoTww1DvAHMDqT67g4GXgbtAvSJiUFqW8V5gNs6gy91rAiTRPvontF88TPtDKHCMQ8iDTZpYvXPa8",
  "key29": "5ctDNrqCfwP1DzrBmkcJ5W3KbAXu3iJ4JSCxnAx6vQ7jenzRqFC4LTAh1GoEAPu4ZXV2r24FXhWheb4AarE7rgHf",
  "key30": "4Bc6TUejFFLtAAE9LTGEyErr94He3iCYe5xjUGDRcDs3msqHiXRSAxuVQRv4GUsCWeahYWNT9s8gP7Y21TQoMFAW",
  "key31": "hgo4Xtn61G62nMb8itPBvthzaSs1SZww6b9drt1PiEKVaL5xCMVinzHskA1Rt1EnC2d69aVPKUyBLpK9LukKdyj",
  "key32": "3jxP9WbDLUA5K5pWE1ubCi8RJdLCKdv7j4YpwFSWPtmP66TVcQXhZTkmD4SW4fmyJrSKhAqcmQPxMb2VDdqSxu8v",
  "key33": "44dnzduCdTr5AfLa4c5EdprKQfva3LxBe3x9wcamHZdqqoHX2mkdtdDxteqvt6w51np683msCrMKvPcNRtcY5FKG"
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
