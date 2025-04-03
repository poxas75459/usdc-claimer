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
    "2Nb7kRv4yfaCG3Tu2ZJQZrafKgqGm48eVfdaa3nmEfwK3BTH1BevmeVoG5cyPmvN4UnrXavAr3dmdesqYUGGkWfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5PZY4P8RQdrYc4zrobxS7bhtdnNjJFvJexqwovUFm68qxnmnFSjnN7wS8EWnnxFdQm3sA2phgQxJEUAK1tDhBt",
  "key1": "5Zn5PDY47uZS7EnZmEnUpyfpisddUK9KBUwizVamiUg3fXRak1qm3ArTV3eLJYfYbRVxcpDboTvaLjuTiG4tYLn8",
  "key2": "21VMAnhhjQmBm5AYhfECfzcSBLfCwdbhWq4XNT7E6b8yKGZ2fz4JdaB1dR55LeNatkM5kg4ofUAZAsuJW2ncBqNa",
  "key3": "5rincwZWTLW8GPvnznhaBaLA8aMTtbghk7D74dTGBsEnpA6NMtYLhAJMQ9zWfia7vxbuMisGEVhdFzq7qqkFrr5n",
  "key4": "4qsDhP3MrDfs2kgA7Cu45FwFasNkp7atFi9vunPMpHqPTHDh6erYVUh8q1nbX9UeCD4mQgyj28df2Ms4hjt6yvAM",
  "key5": "4QCGNqdFmxLZK7jQsoTECgKXk7UHfD8f56xRxX5bvqgWaio5hb6NhNrrxuiTw5Z9dnw5Dpg9WJPMP9Xp2CWntxQD",
  "key6": "334wq353MDaRz4ybFKzRfiDt7YX9pX2TMzh41DPeAsacWus46iVtQ4XM2zDMJujoapNPqWzAJDMjfK1uJDibU3TT",
  "key7": "2FRGkkHytXM4dp7TD3G8sHgLmQ246pZitFsEWfDELDYTbmHwLy5oiWEvGqxw5gb5vQcNUdDF9hYupMhZJbmTcuCU",
  "key8": "651epNsYWuq5CyoTYHuCVvRvgQpRhge3bLVvt2jCMJQJ2CVDChQ3V38BYpcyq8jLhiBD2oamegmTdrk6FNydPa1n",
  "key9": "TqnvpW7JtFVK7XN4HNzd8amXtPB1uySyNuhEDZyAnphTK3vJxcGKsGAnvLzGPXbt6YhEidDWyRYBHWTf55F7NGf",
  "key10": "2hTETqXYucAzoHu19CzuYK7HeZnfz34GA6EmsYaGue6RSPdPR1scjthb7ppNCPwueh9gfr17DAjaefzm4YxotK9E",
  "key11": "3YWgcVFhzAhWJ9XEyBgD8p4JGmKGwFEsFGTuHnX9X8FuPCPxecCrjvuZsTQmy8ersc9oujuGpeD6w8BPEJKXZsUL",
  "key12": "2diD9M2JTyoeRAjhCd9RNEuSbWF6QJVVTNLY6CViQeQAPozBnvFtrQSE7QFRmw2GX9QH4MppMuatFDSjBza4NrpU",
  "key13": "269nWk9J9qoFH7pPkmxTJAT1hHaXzcw8CzcTX1zufqkGkP9JCLwWZ4HsfTzAsBX6PfkvvjVdEKgxERKNewyJgHzf",
  "key14": "ZGy7dfEsHJHyfwxq19YTK9kpRCVaSmijVZS3kDpJvfsaKU6KsrQCRQgJuyzfdsmngZCt2chKxtdBUQwrG9o2V2X",
  "key15": "4yG1N3V6wSttiTqXq693kNF4q5ARpyWQ1YZRXyVF7nkaoZ2ucugWKjZKz69KjPLdGntiVcr9otAMioUDxtcLZqnE",
  "key16": "2mcjD4EYyzLzKkvQQGm4kEBvuyuc22FpvT3y1WNZiVUc5Jx4nKBjn6Dgeszot7VK5NxYgzz7NaTfQDSe1hW82Szr",
  "key17": "21imHdGAmsQYxW6jdGAnZE9CMap523g9vfg5eWgB8jMdKEhnbnoSUgqus2QYhqy7oBJ5nMdQgakH3YHeczQbias5",
  "key18": "3hscd7NzrePjwoKwLKtUUnzpWHrP18FHnLtXoQwhCNQh1zdhCJRLmdu2NNgRHtq5ZMtKqPMqRBbiFgAahJu8wgwY",
  "key19": "4DfjbBVMEpjTPkqAneBxWVKTRVB2XbNpg8WuDSuTBBwTYJVPjBU913DEAY4DUZFM1VVKW5S1KYRcVpzvzamKr8kp",
  "key20": "2ssvfebkBevEBcAJXHg6mETmVhqZd3wMbGgaGfcsazxnPbDKReqrrjjVLUniJ1rt8xn2P75CirzYYixV6yPsdpEt",
  "key21": "2so5YYjsHSYpRnfp88t9Lcj2K61hfDZcD2ueEUwQYn1GWqBzvTdcfC8fwWDt3wdNzchn33Nc1TCZMp1UmCdfQ7nH",
  "key22": "so5rpgpRZnGhNPxCCfAn5iYQysj2FDLTUCtJ2SjUdDEz9zVH5eJVAQnGKR3LbM5jaRvAATYCAvpbdtY25iEu39j",
  "key23": "3UWKik7BHR3uWpX12rhWVxgZ1hi3W8ZFhzeuU5bNrUGdzRbQm9KwvrZ4ssb45ABzxM4m6b9d2H4SH3BibQ5p8jbR",
  "key24": "uqT9cQo7fXSCoJHdK8aRx1bZHxraPUKmp17PRMx6C8VJk588RqToDR4H3PcvCMqn9Hxm3ss4HMvDGdUZy9ETo1m",
  "key25": "41HwKkbne8DtpjwWMHqREgUPRydoyjQdL9sgGF4acF952J1r4UiftZ53BS9BHoJrd8dWAd7S1j5PNBaPoNvGi3yA",
  "key26": "4F4oDV5dXcKx5e29PH3nGQsnXnLiYN1Y8RQCqvgL1ZSZc8U3mZu8YfjjxRWaU6WW1EzPWjM35bXLaPskKnkqDG5o",
  "key27": "4HrozqQD1tH5dE53hUHp3s4Frg9bYRDLcMbbqwR1U1Le3ATtBBTFaZCyEzDGcBfZ2zz7oiMwf5WWXtVDCTDCuKDf",
  "key28": "448ZN9dhX35YTrFjRy79CuypvK668T25vLSG8uNdHZPfvRYUNqpjzmJVP1nqyHvLVUGWKJHLnngkrNxiaWyFb1GY",
  "key29": "2b1pTSGpcT7Di766jYnbqBh5KKb77D7MmHnfmTB2quYUwDaG7UN6VJoswGR8CoYmWNBpE8mKfjHsrzydf8JfuMXo",
  "key30": "46kdp3TXdjFtdyDQzQwnpna7thi77JHdErkAu4KxLFXX9tUAfEWzRuJqSYx4PzrpyxUcPKd7RmFGYp4C96gzcMV3",
  "key31": "3T7yL3eNNtSNZpGW9ycy2d292wWrijuJGuXcDhqkMPzFm6Ti28i9dsWAiyvYJz7qWuhYUUfQU1j2MPu7ZJPBumAV",
  "key32": "2Rq9dP1mwU8eeS2S9CCgy2rKun9oVm9wDK989qW9dFYYPL8zJ9XFARYujfDEaX835mk3x5jsYRfc3ekmZuZDc9md",
  "key33": "7VSXAKDYwa7pGajGwnc6UbTjGdv2HqB6Mp6bQz8dYcTksfNMGhW8Kpx7tKV21AAWqkdj7JgX98fEaTFkzWM6NBP",
  "key34": "VzvJCKBpgdQxtYZeQkuVseLgqVEE6tW1i7AgGw5wwS3f2VrRvfKPG82Cp3tCs8pxukyX5RX68VDHMd7sqeCFwtT",
  "key35": "2FuCh9kb6VNPABjQkEMCkWPu8jZSrnazANXEk3GJgybdti48X74HRCZfsL9YBeNptq5ovUunGtwcNcs5vgmzEHvi",
  "key36": "2tbw9m95s2oFZfHEq7Jjm2sJqqgDFeZR2328pQ284iP2dgV3UMRcuU21eqRdqQ4aaW64RKrdGhCJNdqdiPq2QKZ",
  "key37": "8DpTYae7r3PbFeVirPW1GkLq7M8EWnjsrQRcX5RW3dWSHPpW8vRNa8oRWJQ2oyD27o6JpFD7oX7ePWTj4TD9y2C",
  "key38": "4WQkABqBxpMdYQKajemRoDLPaXLoF5GsH3RapJRcrNRqGtYQYDTzXqDULfvophtLPMt9BwQ5gMnGF2qMaEh4SbFf",
  "key39": "4sU7sWeNcD57MD59wdtC367BRQb9pMJicn4amxhs7qw7K6FeSjVC7FpHd5pgJPhq88oea92qzYh5guGNKp7Z4uuC",
  "key40": "5ucG4T8hGa6Q7RJhohd9RGRKU15d2jtYesN8AcaUVhmkMFUFnqSaxb2GehiQA3aub1obB5LiE1HqKmtmu38FsHSJ",
  "key41": "2gLE4RoDaMVX6KAvfUSTucKX9mnBBNkYqfMNtCDajmHhBYpWNpQ7L7brQJqTwNhszsLP74b1C1zsFW7ZxCaYdQqc",
  "key42": "5pCGWSz2k97R3EKER2fKZxW8hFMrx1axNDZHzEgCDE3KNFPs6eRhyEVNCnzjGA2khJ5uHTmGXLcJiA9FbNtRRbsM",
  "key43": "5QMTMopQwF97RcN5v7xMK2eggFqaPuV8t5GL1X4C1Uem1y8MRZQzpdrXt1cZGdeLBzZ2ch6kmqycjLunHyau5ctx",
  "key44": "2QeGE1wYSowmfvvb8i2vpPmaZD61HRjK162vc7F1D5Qpd2YKS62r849Ws2N9inMXB19weuZWfqL2hkvQgaSUCP4f"
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
