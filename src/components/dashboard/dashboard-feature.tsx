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
    "2kByUTFvU3D568zCMDfeK1yWsvCQhn3eV6LAe46pN3GCdQA4UGrrGKGEkUvquKRpLfKseySMj3p78FTLsB9563aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DizcKJeRkBDcrWUAKxZsHNyD3FHvFcBYCxMM6HNmcLskGwXSiZwpQ3NWTisjYMxq2YcjitwVwuG4TwMTjTTVmQS",
  "key1": "38K5kTWHgaURxLve8PqbErMZ8WLbM3gT1VypsHyfRoihuLY3CNALTvNrTRAxv8oWUP79SXryAL6y6Ed1hxNNc2iK",
  "key2": "fq6SRSivUTa5e8TMScHcRtv9bQjRBk97EasDwwzj9cYEYCf9jEDUUaifm7FjcSbdupk4kyWvbZVqzYj9ikFzx69",
  "key3": "3JRyTJuGiU6boBBUsZXzThXoow6WGqmcqF7S58QbHgs1rjAnfD7fPJiwG5MriXz54xq93gYggPdv69oKL3jQQHnE",
  "key4": "3ioqeb1ExrA58Xp7bHesvn1yDYcSXx9j3TNDRt2s1xKMY6Fqcd81S9iyHwMYsuVs9aeEihu4PNA79fmjyC1Fw3c3",
  "key5": "3crAa6C23Mb9HBQVUSsUszzfuEik6ws76XMAWQmB4EZTUKWntCFR83DY7BzqeTEVimnzA7E4BbeyFh5ZrsfMRxAp",
  "key6": "49CNjmM5CqemAWbYfZCHMmcA3SYnbw7e2fgUJK4udvDZMnHXGFayMCvJNKqfX4L3EMmMBN3GJcnKg9SNsP3mwq3a",
  "key7": "2SxHRtXzPyGdwVLBqwu5mS436CXWsVhsUzzjTpdWTFM3i8AKYZRk7UGnNHHAniCMgScnh86CYkk8RpHwVb1tkhbv",
  "key8": "tfUjnohBhUzxJB8tkgwRBRGaSvGNLHwwWb4p8r9F2NJ1e2gBEKWXbLRcczD3PskudCreP1jYp3taJsvZRoYZPWn",
  "key9": "2oAdRMkew2L6MCKnYnuw8M1NCYGDyPkTay8oWaSXHH3PvGr45RCneczYzj7E4fXv5AYcGaTWHcpbcUg7AxGnZRBD",
  "key10": "mmToLXajtdYmBoFDhmJJBTVhA8unQxtN3HrWNNo13Rm2q5WLFvja6XKvLuPJRjzoB58DqW72zUqGuAWth5jrs92",
  "key11": "2og6CyoxmEu8pHX9VpbrpLY3Cd5hdwerenqfxd63nYAnwy7B6bZZsojyLeRbX5VxTV41Vj6XDkdVbkixzBtexGGz",
  "key12": "29VAvDKGSaPdTssSY8JxWMBY5PVWu8sCtjYo3DwnJQNUnc3VS2m2y6ecycgVPRCbpJMNMvhpztNtprrLwc4yLR5a",
  "key13": "3VSnTh4KVcxwubK85E1Nhn8jLo5GYDyr8asi86ssDDaNjDSHtPVFRdFXpJB9vkAQTC6b1uksyfoeWN1oYYZDViA1",
  "key14": "5d2b3AcPNPLfDPT2puMSCaZTp9NkWbJgXukvwjDJefKH4s2VpyyYWweKPazFqw8Hkw43oatCRPEtDNiYdowKP7Qg",
  "key15": "4okKDLXaWxshzDds9gU1Uzrrmpak4ySAQ2RJTZ182Siad45eMwzi1yCgZZyEqJchrdtnD36Qtio9qfU2SryMyCiC",
  "key16": "2QiWQuqgrDFz57QZAtEu7YksXKAcZ6vfUUJBbqAkHwjZBJznQgPekKoCGuUNyAUSqXortrgiZrbejM4Ky4Mzo4Jn",
  "key17": "64deDot2yEGvodpD22BcQ5s5cbQ9FB2KkBCdokS67ghtRZNwvh6waY9tLWxp52E9t8L3zKwG6ED9tuHoJdBhE59",
  "key18": "5p9PtkPPDyJdGMcCpCpNSUSiopNAnvYuTAc1K1xmamVfA7sNFemJV2dVr1pTw1rym3bTuo7qhgiDphZq9MwgX6Le",
  "key19": "3MTDZ2LTZjiBhaLHHtH3VNtsndKHwurMYqZE3gx53aW2VZmgVGetLaPDgyFUrfSLtNiMaiQPqTAioCMBziLz3oom",
  "key20": "Yo8exaHf3Dj3iQAJXeLW3QwXQQYVxT7MuDEGRxPTyKNTMMnPDMV4C1pTJrndfyYs96HcFnjMGJ4eGCH89NZJruA",
  "key21": "5dpMz69WFnSRjQCtq7ZD452Zo2WdTCLYW5d9uAW1vACn5ciNgQnekoAWEKguxxoKX81Fp5qiCQM2D1JsXMSrJf4W",
  "key22": "5Vxhw3uWpnhPqcdSJbq3UtaFyFXwozAaVS5333hzNJ7JnS2ANgCXRa97XRUUrnXydLYawvSUsXD3sgMwC4CxaRQw",
  "key23": "4mw7F1QH6yawbKqVp8rMiAdyMNwoEMEAGbURsGPfzKfgdMhwKBTVbfvtdjZX8dQfgFp8g7Q6gHLG8GdNtBR7N7Qh",
  "key24": "4b6Kb18ApQdLz86nA6XEvLx5ERa2s2fw7MgESp3x437wssmNLwg5v4yGFi1TwPcMY7pDreLzRF4t4desXkEaqFdN",
  "key25": "33xscABfmLqiexh8JgLNEt2ERaTWdL21Ww9DNzWMoesWumMkTRR3WihtL6EVCMfx1jQ1S65wVCr2jb7pmNBUGPbh",
  "key26": "3KFwRUSjhCxuFq4JKjEYvXC9Yu3KFF37b2w2BLPZ1e1XvfDVQA11M6n23pqKBkeShmgBDgNPn9C7Lzn52yv6CBRe",
  "key27": "2Xosk78uqbF9HsSLJhzF8a8V4ELBzWMy68jCFtACVwLoi2zhqveofqJEwnfe7C6wVE4Pb8wVTy3TtuYGmz4z4cmA",
  "key28": "2VKQmw2BFqvTq2ZT5pnZet4ogsorpdA5MA63WSKi8UGFDPyQ2w6dRBKZut8Jr8VPUJtnWUdnZGqr1hek9Xy6okng",
  "key29": "2fd1QyQpanPhRUkUu9L1XbQ6x7bYHjwBEe6EsZ8BNUDrfuPtWzR2BU2vYoeMuyrCgaDLjxUtvhBrfUjWXNMzMqng"
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
