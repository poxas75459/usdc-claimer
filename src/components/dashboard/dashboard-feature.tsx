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
    "5YHvnizu8AgzuxEeyruyQRZbxdsAa12DhxcFanUbGioVbhwLEx6XEs38ixAovBu4uw6ZTmK33EU97muaKF6bDSBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYrKFUprZaPUHJhRRxA65qDeauG1HEt8vpxttwxj1H11Qyb5jmueAzS2qQTKgXms8gzYVYu5RdjAAN4i3h4jhbW",
  "key1": "22UaKyBEE69q5dEaQJEtgiHHsSiZ2N9jxB4Hkt9Y8rA1WUyfDdp3FrX1HzqGhzkEe3q5NyvuaD2UYnbRSg62sPEm",
  "key2": "4K41q3iyHzX1YcMrZ4aKoCtYAJPC4yTh2TunKfFjKHb1Gao9EeauFaDk47vAhSYaT9hdGnMnJEHy48voGPD3PBxt",
  "key3": "4MzEykGLB4YBS8cg35hD2XVuNyF7jDzRZmnczwVRzZfYeGypgmTxq1zHZVeio5uqi1hAJNeAjujtBrgqD1kNSAn9",
  "key4": "59Pk78EbqFPF7hGEyiEjVriesyEzXCrKCMdijwVKv3hk1pUAYsqs26SWPJv5fY3wKpHQc3FedHC1dnxoPbGNtrz9",
  "key5": "4aHdmmUbsfXm4yhr5K5NUowufpahmVz8ME6Kj6D9CfutGXudVk4VKHrhYF5adDYHvp2PD9ZNmQQP1DWAHnkf6pFD",
  "key6": "2HqLGHbg4VXowtu9rK967gPfaJd7MCSKC8Ju7SDxipsoGssMCHJZMcYAgccvcoX5axJen5oh5J3vmw6o6V3RfjWB",
  "key7": "2azL9dxktFP8KK6FvhYvgzZ3P3n3xWPVcdQ7AsTRcHHKFzVRXx9mqChMCrVyu3HZZt5miPh5egBWULRUCP2J3DgS",
  "key8": "2jdCNQrk8tZQrvTzuRz8dga27NFBZrRS8ozj5EQaKDXy4gpuHLZ9RLnLEdmcNLY5cqMtUCevwJB5v726m87oPbMr",
  "key9": "HzomtAbKZNXEKDTQoQ2bEvRGYcGPBhaEt1BmgW4jpny3Bxffvyhgkd5FjtKPJmaMFSFQHEbqvfGuK2j55pzWfQV",
  "key10": "5fEv2wxC9tQ5rvLBH7x1nLJ81JirbVaZwd1po2aqKqJUuKRmUzKkJqJHynEfvc3Pcj7YpHR5xg42zmTPMTfKgYGi",
  "key11": "8LogzTeBHV4GvAMdP9nJRXgWpepoZ4zzW2B7Nd3iuccFccbWtfHfCKJnHeUJwpBA6vwT16hcTFHTrnQQGc8f2fN",
  "key12": "2ywUXXrZKVTd2yniAUbcVCzTEiic4jVqAyvsaizV5hDCD57P6KRmfFWVpP3zyPAg2mZk9k5ss5Qu2K8SxcDdwyJT",
  "key13": "53qc8TDpr45F31NhoFZLnEqV1bvtVrf2zvCWs1bFtXGrBZyi7JaG5qsGYgwUApm8C1mXbDvW71dwDnG2Bjq82nSh",
  "key14": "2fqx6dBKYr5GEzRiyMF3SjEJZB1M1FicrrcJ5smMX1jKMgnCfmj2vUp38DoX6XxtAvKxPUgtJeZA9VAVv5t1mQas",
  "key15": "gQKVBcYP9wfLY1sYd5SD6iHvr4M7uC5iMAejSx9z1Le73whHdkgQVwrg9eUCSxxZTiH2MAU5DXggnfniSRFE1MJ",
  "key16": "5B3nW6gWXTsNQ4vVpsWuZGpxrDCymbB1EgARPeQ3cmfxa86YLbYiG2AF6W8HrbsbGeDuqvcCcptuZCBUWNwXjiWa",
  "key17": "UXPXvE1CQNTrJgX38pBsfMzXUjE6gs2QfHZjoRkLBGyZT7fMcbFStDXGPwSbugzDc8TZ2j72TATisBz3XtohxAC",
  "key18": "5BBxWACwm7LL1wQ34cfeFRtYy1Z565c7AfM2xT6BPhU4kmj6ppbwDiJLJXwzfKeezkHEZ1ow1PPDQvRjydWd9kMr",
  "key19": "ZvzSKtyfSMKNHW22MGtwCiXBYTbT7jUXQQusFfNmE2UEko5ZGi97KaPx2oudJJDqL7GAo3cxPyEzgirVk6fthBH",
  "key20": "22dxrvZ58NYxCDdfDSCqcziRBmj6ULU7GreeyfViZCC3dZQ7XSJkMhHs2m4krWEy56yekufc8r8UhkhmihtLgLcG",
  "key21": "3dV17wuqS8GjPrVwYSrJz8sxrm5Cw4fzVcCHfM1sAKMT9CVD5WwhFCvUFXAUQa5UAg1kCQCc1W21ESZRHUCP5VSz",
  "key22": "4p3hGBJmkjhD3L2tMBoEELaQJnCoYN1xa6QsnmePjBtWvyntY72iVioddpXhLmUaVqDbwoq55sES8NeHMzzgg3hN",
  "key23": "X315D8XfXyaRa92sxeLNNHH3UomLCGfJ2TjhWTiw9jd5dHSD8AmFr9Q8PkxiGCaLBACo1b2RCT5mih4xKqqSJPq",
  "key24": "3XF3x6RvpoUM7WYoETxi8Nx8UpXiCvbFRo3jh8N6HD7EtPo2Hxwd9Z5kmtKRVZcYGMkReyhaJP1Lp96ttRBWssYE",
  "key25": "TCPrQfceDVPRknRf5VmgJ82SAoN2phVUKpWpRH2oHsFFukhZvBuuWKUKjSycDTJUgmLWMXAbZTWibx2jGqEYojG",
  "key26": "64sBstMJrqA2g9vX8J8o6XPJsTFdEmHkgE3sF2TU8LoyQJjHKbmb4RZPcEkDZEWjGvmJ92JxAn42hM16uVBstvAC",
  "key27": "2EKxfTjCTTDaUf3xo9YZ2hZ5jGddP8jTFyWRajFFpgENafBgyPtsDWZCkpuRaL2gYZfYPwHBz5DBJeRftqmkYMcS",
  "key28": "5fRSsJeFuMpBwUxFqGrCXfFubpCFeDtH2i2FjsAvFCN94Ab3VuY87GJGRzFrSfKqEJDhd1yenQRrinZocsMam5Ev",
  "key29": "4TJ6yHM3oxPy3Vwtmzi96t2BMQzoobocYdgDv5bgPidTkw2YbcaLiCEy3eCaHWRhRegokP5eAG5Uc1x8N42zcmuV",
  "key30": "3vgGvvwQJh4bRvZ1cezUrcQmtJuk5fUms2M5LG2kmUFAF3g5wXfegkA4EFPrH1yPiGrNCNyd7m9vSRjyn7qUhDYt",
  "key31": "2gds9UFgQPJcNQfp6fLDaVEuvb6p4nBgqf5qx61WhfAcFd8AEBWVjYQm6BA2HZVSFKmumBs62J1fZxbWuJShLR8E",
  "key32": "2PLd7SqfhuumkcXQrXsGYvX1eM2jauHCxfC35gWzuSM5in8EPFBh4kqRsfPBj7eU4jt5fT2AGPW4QvmJ2EGU5TYD",
  "key33": "nmCTDgKumrUjevzUNdRnziJVhnVxHW1KuMiTWZBqaD7N5eR7CSCdEKR5BrAMFEjKuLBU8bvy2q7HGe4jTroQBzg"
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
