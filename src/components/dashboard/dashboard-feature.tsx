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
    "2caSQAQBAViEWhUuSW9mZDmftJuBkXeokLgdcmLhiZygUGVwB8KXwLZFSwhS5Z3F6PsyMCZLF7BKxoARXdDwUPjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r3UaVG6kBnLrYmNwAwRmeot137ZFus48nyUJxnkEhjigpJcknYUJepmWqUhSvyfEJAyRvF9fneLjU7MG6owL27",
  "key1": "MNMHwEi45fRBu9CpoKfzzZA1B4W5jPqxkvsGLvmobhj3EaLo861a17ixH3d6AGcGSrWYLNoPMFqqRTbWXkCMEce",
  "key2": "61vQejmWXy7zoEFuiHcLmMcNSDtegLivrRbcm5YkX1bMxRrNDUkbtRkbqPay2po3NkTWQeqdt871Byn6TnV6budU",
  "key3": "3zapNSPzhmAyMD5pMfP8TXSTVZ1qBX8qHR4995z66bfmcd9awKFxZG9AYQxy9NfASqJDx2zhfAGePLgsVaSUEXTA",
  "key4": "e6SGZufLx5jzLsnqABVdRnVAHaTNExXEnuNKZhY48wUYBw8XGE194XsZSfTCZ3yTeRNrA4xmBXhcm9XEAVi5oNp",
  "key5": "5j5PkHW6h2pZg1MYZCM9fjKVkypi3xKKq66C464rxG3mSwXwWwC34Nbz9QE3JTiV6KByyKw2P4Mz5kynDy3DCL4N",
  "key6": "53QZroxojNP4sCN2wMifdxaAPDuPV4JAwc92mwBcJc9ohqUZH9HNy9C6SrC9838JWQ32TdVY6LHzwKAWeESJwvZK",
  "key7": "3Z7y1n4LfWeZ2FEMgYRZBn66T5Ap6M8u4Ur1jPuaUwshA2ENBh139sEAjuJz5skHq9wLtd4wEXwFQQYtDAAVqUrZ",
  "key8": "3fauu3sVY1qfy3YPqxnn5ptAXzsNMW2TLPcH892cYx58o1dehJxvzvhN8pbga7BaApcAooQSqTHn9xGD66Fz5sJS",
  "key9": "4v8ZRjD2N9stxQfHHbyat4na7k3PYpo4zeasARsMcDbWhXT23NngJeUjq8mT8FgvFmTsy2XAcVq6zsd2Xgxhxa5L",
  "key10": "cVdrzyQDF9UjE1Jj5dsP2HBvcdVFmqtpoVDzfh2af6Yfwch86g2nbRzywRCTTbSJnaBnUjNqichHJ5iVEzT2q5M",
  "key11": "2StxUpwSdKHmf3B2srvxumta9i8TqQTcwwGoJqJgfNVYJiD8WhutUipq9Y6YdegHxGFdEiJWuugPFi5RmDc7uryz",
  "key12": "5Jz55A8t935ZDYP523rxXNcqFofnjWUVAaERCLwjCHs3741EpU3cAPueAfp8Hehtm4ikLAK21g6ziZcvPQJxTPVG",
  "key13": "3xFB2aV5dGk6Zk9ovwKf3LAZjzy1KHHtDy7yBHrm1Dy8H4j38EE8PbaBhpRZZNq2Rf38PW768dnmNXBfPAFEMyB7",
  "key14": "2EcSZk4Ud1P4pnPX8jypEwc8yQNoGBh7wFwVnuvBjp3j3htavziLqR1S1Qy3ALwM9wj734KYiWAwkvk5P5ivrsRS",
  "key15": "fjUQ2YRCuUWrMvsxm4kd8V4EdjJk8ZPKFTBMVpBrN4nCm2XHWzuLAxNAWY11FTQNBFFQGnGxVtXRqwCFrNma4yh",
  "key16": "3Ujq9CbaDPB7dgspnL4VemYFsEqAqxha92RbGRS3prfxj5qCZcqkSt2van7eJzQ7xALDPJgUSxxib67e4SeFzM8Q",
  "key17": "2Ect7fyt2UUj3uCY3WnBj5xd3Gn51wVYKd7LsSfky4U7mzA9jFqyHcG2Faj6VPAVrkNbzhKN7WBUvB4LzPQp298w",
  "key18": "5p4L76HHYUtak3qDM7UPBS2M9tJsiW4SmjZMeJSfEyauJmTt19RBPcTgsVoKCb4V85S6nqky2s7ycZV9XTM3vRJA",
  "key19": "2tR2K5QWso6nCQofcYZJBCREJQm7yiTnCe3bZKuMQwpYuaLGY43fpzP68pL3W6qKR11njrUBS5t4ZUgJqhRqi671",
  "key20": "3kHSE8TJPZ2Sz1rBEp89aVnbjgKXX8LfnGsgTwsXHXfibZJSmJBW7ivNiUCnKrJYgbKNyH7oTuoAsz6g3J7FsDZR",
  "key21": "5GoLmMuEqDBuaeBtb8YtZ1JRHpfw1i4ffRW3ZyxBeCnFgQtfgvNEyfpKm1PAxCFebaaYnoPTHrCr4HVqnDeg8dt2",
  "key22": "38hwGLQjh41V7Ju6CUX4MYRkgKPGotiH6nPqwXzM2XrFt7wVTL6YHD7uZ5U1rQKyA9BkW4Yjgbm4N6qr3jrd8Xrg",
  "key23": "4VoGCGSx2w1UFqYKZdMthaeeAFPv7u9pQnzKVZJazxKnjxy8YCmkRTu8KbeXyFNwyDR3L6HhUfetVvChwFD2j3wy",
  "key24": "54HyT56Gz6uzJo7ts8NPndeonp8XguQM269upSFzNVS3iqgmCuFkQNnM2zpXU6Jptt6D1ShLJRAMZq65Xs2RGKmD",
  "key25": "5ai1iKQ1z1keMkmJ8SAfS7kV7n1k7Xygyw1JheUj4x3EANRitPkuivju7DbWfax2hLvGAB8WdpnjcjEXWDE4iAtd",
  "key26": "4S8bXAnKAsF3BLaHVxJFLSEKfGNgCtrREHFTi4354PETDbWApNQLdUvCdj53Wx3PTg8RmyhhNDBQMvcwiHSRYV8N",
  "key27": "88zKHKWXSoEHpkcWgY1AECRjhb2sH7CtoGS1Gf6f8dAKysyyvqwowcYnmrtLJj97gus14jt4e6K2Wz2PQap8WFA",
  "key28": "ve8fkRCvLVSfbALnKRHxKan7pVZ2xnqa178Cj8dr1aJmGu2GKbJkzQb2Dy5sVacfKT6HXtSsmS6yhRWkEBXjFD3",
  "key29": "3U9xcJCiJPPtzMZeQn7NBVfmWPtUoe7UJe3ntBoGzk22f3cb4269wijQRm6Y7jME3CTwbnmNm35Yy8e9PHAyJZu5",
  "key30": "4SYsjhJ1WoRyjxbp9ZYbUtXvwkuiKZCWgusCWo3AsHDG9ZBMuewncxNGxxpTT4zKgG15DUAEwunc5pUW4ijjC25A",
  "key31": "XPAvqgpFxDnanN6Q2X2TvMJc2uNYkvn7hN8TnQp86ThG255AjntbwzCUrVpoDWkcFvpMrGQdYWg1DYSNF7RfFN6",
  "key32": "3YU7A1yYgJ7r3FfsmbrooCPJ1JxS18krjNkh8Go27TSkaWofjEN8WifzajN3XCLC7vERQ3isbgamguquj7tG1KK8",
  "key33": "4UmRjPtgVkzu23WPFp3Fr4fq1WmfExPQjn8RmH6WsXNArjPeCo8a6Q3yS2dJVT46ZafMxjUDJYoggn3xoTkT64wC",
  "key34": "2rM5g3o8WmgiJqx1YttV4tfceGdk2PVZ6hopEfXrhsAAQYXZYP8Rm6ssywTtycjpaQSP717zCScnD694MCDkPfqR",
  "key35": "46DuVECFAD2WyN8XNTQCMMjVdTtaPjs977H4SBnxv6iuU6FWAeVUGviAGhVBN5SpgaSoiPqqrMpy6vBVT3UJdE41",
  "key36": "Q6fytDmX47kDMAEAEN43wLqtiCkWFDHajRSDKpTpED2ftAyM4YqQ2DE9ub3pPf9Lsx3ZtdWeLEssgHYsjQjqtNR",
  "key37": "3QdTA14vXLsVoJ5P1Vtkvriq47Xvt37tCvzGRoUsmXHuVKFd3eFMBFM7FSZ3GsVK71G2aKtboH33nVGQkbi4RVaX",
  "key38": "5fWQMcQvfd9kVd2fToJ1HBUieaueSpW4XhCw3LsqP2p5nZCumYpP8wcpfgM1T7rKqJD7UfUMQumNnr3eVdfm3FkA",
  "key39": "2yY2Y9hFaseG5YUseJDhoTwt1T77DWjCTJfd82WZikNnTxgoRNZrE5bmVuShBjExVdaaePEMQXXoVJkRMq5NPAcK",
  "key40": "4kFj3YTKAZykBecNQ8LuUESYQkUwm7afZ9ejpxdrQxwxQAtTAdaMPgkDz1Fkr8tASBXqk7p5uhzQ96SgsKGhBv5c",
  "key41": "45brcu26fqsXKjnSp2FvXo7dMKcCU9EURbeZNMHMHpz6x9UYHrT5GJPNxCsoXGNdU1giwFvwHDpHka3tKd4RwyTh",
  "key42": "4r9kX56rPiEydXu8DRUursy2WFRST7QkfKZ6FcZkDxkJmdtiDb285Rmp6QKEieE6NdqcGwoBgNPWGsA7B7kF7gaT"
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
