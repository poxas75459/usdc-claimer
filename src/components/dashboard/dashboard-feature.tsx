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
    "3bCAj6VKdJbNtaiReADankWdstAYgYDDfT8yev3d3mfsZmUqjJkEgNqM6xX3TGUWxaZRXNBKdr8T2dDUpJW9VnHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZMyT54EFDyHwggH21USmsX5ram4nCKYhRW4mfSPoNLTCVPqem9Ez1RK3tAKgbHtW9kz1ZFE1u9hemXRWpyRLf1",
  "key1": "43xduEefaj4aNZwdKfTXAah67EZZZETowNVqT4HhMnoFSuAQCZRR7q38zjNW3HPEde5myGK7LMANW2m8QUiZHsEH",
  "key2": "47EVsD3KYYPUsa4q6ziqLHRTdAtEwd6vrCb4f1CPA2L5q1ChiV9fGA19RuFAb1ewT6gPWNjsmidayffH2xx11mdh",
  "key3": "3D1RwhTcVFoxomSfenx7wFynD8Q93xDcg3aCNy1J3W4FYPXZSmn7hHinBzmPPGF9MQwAVS2LRMAiVmjc3iujg9i1",
  "key4": "QmBPUC1tXAYENU821BeRnFBDjFDdKF9UrkFZrBuChUc3DepNarcxNiyx8H79ztT1DAieVZpZpMERA7cumjAqKZh",
  "key5": "5bkghMeDMMFCn8ZyD8stg83HiHJxZpDVJu1FUZMVkEpEeaozfxvmT6nXK4hxtono8Wizkc9uVdhJ7pnnJzjmU93Q",
  "key6": "31fZmaUEwx4ZkVzAJZXTzVRgLRUs6z3rAFx6TbFcbnfXGnzx6Ba7gFCZ2DFuALo1JFyGStUTBXuMHkJDWsTb8sBF",
  "key7": "58zDKXAAHZ8pRszuQ4Zg3JGjDaWoxt61XBta9mqmgij6rAhUPrja1SBMtG7YPtPikm5ynBgmcTdCgTrDTjkz9vfY",
  "key8": "QZSdHzFBRaPR4fufwtwNVzTFSSVUjFtKwUii2a1szujq7ybH4C5PdcaoPYiifdmN5xGPw6Sv3UVQkmUFh6ytMu9",
  "key9": "3SY7jWM6CjL93iXqVuRAt6GER4mrgoCy15pANaZ3s4EAkmgm6aSrfQmDEWnNZhtY3aGaekR9CYS8LXGSD5xRryrW",
  "key10": "2a8DM557BY596nUALgF8RQBSup9bCNcT9gRbm4ZfHX9r72BxBUTLMr6fFDAsVCDsY5cesQMiYMonzMi6Cvppn7Pq",
  "key11": "4gruZ8eEyiaHRMRkSw6hgdFJDNWJgnb2LXWStG7yttwKorBWWv9aLtEAieuH57niivXmVjLCppgSotboK3CapVFi",
  "key12": "4CCCcB6AJQseYdjsc3EyzJHjNRVMDMvtTxjQzzLeMB7gpnXGtom9zaXq2nWh8UwEwayteWV85v8k8HXZQ3F2kP2J",
  "key13": "5QkumvZBACYCdkunuBp3om34CqqCn98u2maSvrCkfgX8wsCViciYmBFh7vfmxusrqi4b69vxVXJszvG5iKx5tVUv",
  "key14": "3HzgrjBXo2GhKRnwAs3UEC69JyuAUv6FWiyHyqwfs1GxiQVchfkXARtoC613DL64WXSoJCstZJJaC49Y3wpcU15S",
  "key15": "4haLwuttmQ6RvNbMJ5Q6Csc3Jxqgzv578QuLCJsYprTfLv72pjKE7a1ZD9V3K2sh3jtwHDme5Btq1hFifJV2DxuR",
  "key16": "3xadxJwRcp4wohYNPHtqVCQAJA969gFeSRg1dfEeNea65C2a5YBB9kN9vksbUFySb4zjtw89gYPec1TkTt5MMdek",
  "key17": "2gFsDUWkSLhkAdK3wmjQt4RzNyWK5QGRreRr48dTAZnGSm3HsgDrL4uZkaBYM11GczNPb5kSEa4Zh1zZUCk5ZQqi",
  "key18": "2zLgxxYQcHaaa9VPdrWZ9VVgnPiC1uCPUdB4XKa9Wa8fmk73aDkbaPMaz1GNpJxKBF8rTdavQJbDLqfLahC25sku",
  "key19": "4dz4D2CqguSRBBbQZ2fk9p8RJ6gpivY5rFbxyQKN22i6qDji3TsFhqbjtFjdJT51LJQJ1wxd6ySedyT1vp44L6DY",
  "key20": "394V64PwtMCuqmJRUkm9TEJtoKQD5FPS3deBCYLqym452x4Gn7jqKq4oawoFWtCGmgqKqbTvNErHHMjw2vjUaXM6",
  "key21": "2yugausqukczCBy9PpYLYE5w5hQe3QMArajkJxtQc1hddq2UezvMw9anYvGvbXBAFe8AHUzWSTWLbqdXYGZ1xrA7",
  "key22": "GagtSReXefiUxkN3PsmiMZujJCGES2MRNnB7VQWbqjPProinAuD9ipy6JaXx4pkhk3fJimGMF9H4ERkV6uEhZbL",
  "key23": "4LKiJqG56pR1gMB4BXRBWFp8zMcjb7GA7jWDLPVT7GHAA4dWaYMCD2KvgeQEairWb9TR8M21HFrxSmWxFGVKFhjo",
  "key24": "3kFzUjDeWbGsCpzL4ShrArumds32rae3Zx8YNQwgzPsRbPgP8vzeFsFJyxYEHByHgB4KZYaMjDy2ufaz1wVoRAY4",
  "key25": "4zAAtt5skMgigxyFh75NuLY1144i3km6RTmikBMjzaSpj4Cy21QTNWHk1FgUhErs7sBceA7FCrpjUddKFk15mjRi",
  "key26": "njmdsCQ5MuZp48i5XvTG5Hbku3UFfzzTjgH2DdVtJgjhXbisxj4xHVQCGLCkN19dcFvg25PiR2fzDncsNrGtTmB",
  "key27": "hPouutHGYpeTu3ajWTHRHEdvv6vinrzj7bHRTpCEX19ooJMZBRgkCD4n1YNrZoMaZeZNWTnsXbdqDVT6yvaMN7i",
  "key28": "5EAFy5R1j4yvX8AYBTWRbppuTQzLm9AFcTV83fxkX5dhhkdW7r7yyDizV7qMWd1fVdBwKA3jiUMD4oTJm5aQ7mUC",
  "key29": "4GD7crLtFLAXbhWkEYrYKHZJ9KpuCzNZdYoKjNhcXGLF8bgzr97hfkHAxkFfkbKHHTFgL5fMkyRbYzpSmEx2gXVX",
  "key30": "pkR9phHRim4sdPAMVv38TXjzSArMFNPp4qPpk8NwuNRRXf6TwUV6QQS9v5k2mhQZSD4fHvS3wcfrX4nTD9LF5qV",
  "key31": "5iGP4UzJ6HxEqSzE8ha8ULiaKqLeNrDkV8KowkXwQhy6hPxkxj9xu3yHpR7QL9Dewt8T6cza2jh2EYEPZZCP5L53",
  "key32": "2k5H6ZHCqUdHwUwTbKtRee6MFSryPovSHVxv2Aa8yUR2UsoUTd6n8Pj1bcwYme7yRw3mSPS7umuGfGKCRdK5sdsA",
  "key33": "3YJruRfLKDHWS5yhS6iz8DUkP7ocCR2uqGnomu89kfWvMNhhNscQ6wK3AMuwTRztGKTehEyZAeWQd5jKh1EdKyeA",
  "key34": "2QK2t8gRHoErNDvfBN7QHB8EWHM3BxwDBdQRdVabx4GTdt2kNtYKNsUKYaYfkgWStDBJESC7FXfRMEhom6Jg2Ljk",
  "key35": "5yuaE4X9sWdpKBQUc485ic79QqQ9Dvjz2psTCBMs2H7ssRAGmY2aJY5ndQMK4LZybGjGzbexyCpfUaS8sgxCwv5V",
  "key36": "2khfd8tsmuwHGvRuHpBNikZdYX8wUsriLRMfyT9whc62Pr3riUD4kUVuvZAKjxXZE2Kg6c9fXwLUeUgTr1pepLwK",
  "key37": "5iKBgSZtjCkSUezHi2QCyZhrB6xvMaC9XFZcHAVUmdkKPxzoTcsBdAFidgN7NsbHEcwMG76q8N7e1k2TrDya5e1",
  "key38": "226ki6nKE9TQp2yMvHum4H8YcYea9YDsjKN12DdySSro7bYbtTnAvhFyFaiNkTj4XXpq4D5L8xF9xFetQtL3MrUN",
  "key39": "5S8NwZQWDtyNUpttM6rHMMTLskcxoqwyduHfiwSMywXQwgYXjCGvm4NvNkVVmaoC5Y6Sr9SkeSejVE6RbPrWK3AU",
  "key40": "5QE3Vjff6J3wMqSF1PL7L9H6pyPemNLfpxLZuDdq4UzVs2748AuyKMmxMKWRKmJPUV8TfCKP6m9xyEQ2p9iqnR8X",
  "key41": "3g4AmcTKdvxCTMXpPgrCfWRwhq3vEcJWWBbWVVwz8VQGFzu49wZX8dbvXrXMVytvCX3DfWs8jjU4JFQ2FWjN3ouP",
  "key42": "3h8AofvrdjdDSUuo3HqqJTJEXX1G9HpBvqRAahwvFcCtSe4Pz95KFLKbNuKE3yZdpzWCJoJ8q9cxW72cXBg9P8qK",
  "key43": "61kLzpXJt13V4m5QR459oMyZoGJewYJVYMv3CsjwpkgVQo58NhAxD1MZ42nCQ41oQU891D9zNJCKGyCtAi1Zn9MH",
  "key44": "3CEmKGzJhnP5gFfYxruEbHHA3N7SqRYUnmRoDL4QRYduzjxHKKZan18zhmwP83VGEmAUXKBmr9GgZHTJYt94Pxd7",
  "key45": "woTjkH4VbVejUBEJcNfi51WkvsxS9ks3b8WEQzEgErd9Y31L3pizoJCWVHB77CZgNqTSnXNWrXskBXPq9dJdqqm",
  "key46": "4d69vyJuHzv23oqYUhLtSuRgfoxt9Aj2dfQv5XQumZeE6ktCs2ZcH5omHexwxviVLUGwsiaSAiK3HTjDVYGwBLtk",
  "key47": "5eUAXuzgtY8noaWopgc8iZpFr7FiAyV4sjbW5pdpY19kuong4WzsCqSt9EwLtGLpEPQwWwXnWRPZVPv6cYZMGbwM"
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
