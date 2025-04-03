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
    "29HSocM2hW4nEa4cPSKYjSmoyt8guiWbH9ZE3oXygN6beZreAhiNCoP1aYYvCuCKhzCTWtAr1PVsiBiiijqbrtqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RjwPtNUrN61TvcjWdquagzEbqXzAgXXDdGxSJ3PonQUpg7DW5jWMq9wEVsgAjcS4Q5B27xHL2eMBUZ7W1rzvJm8",
  "key1": "L2cTsQfDw2pSsdyuRBQGuAQVeXaZx4hLgGTxYLueYpxcR4AtznRwNwAGr3E53B82U3TykePngbdbqC6BejPd3ci",
  "key2": "KUnojWZ8AWZZ9ou4ZmM52aYaNKaDKSx3PzFn689ZiNQwdUH5TtUruXPNKazV9TcFCkKxuLXs7KbqoE3WmyKqqbE",
  "key3": "5WLKsYdsapc4zatuMcHoK7K8nFNw97YMT2naCVjPWyGW4J9jC6Xx4VZDwW6hfV779LKk4483SSvXQwrnZA2LQ8Ax",
  "key4": "sDG3zS5TXYEvLQedpkw5NMkKZs1GtaPAn9ySLzgVSvgMkxCu5gweiiijodwubXpmUSE7Ekc2C935WehX4ocai58",
  "key5": "3qBz4n1mm2J4TDGp9L1p4ypbHu1uY8ubwcbM8JB6TVh5c8yrrsBygtLLRxGHYra27krQ9DN9PE277XfXrTFNfUxL",
  "key6": "3Y29unHqW39xh8Jitr9GqzMrdeL5RWHpDZg5g1WEdeuwVjKsfV4dWQRXCun66pKKDV4Xr3UwNyGzwiC1QF6Bwk7x",
  "key7": "37uJ3pixAM4s959npAft8hmEiawqpVzH6RSyfag8hqvxaSF84FXVKtJLd5YPVzLiRoR4oTgrHN7CGyQijCEZdF8",
  "key8": "4nfKbwXw5Jd1yhJZQtPvCim4SdbBeedKFM6aFRZk6fWyHgzrm5m25i6kcJMpCn1j48fTz8bmZwPTs8Bo2zAJBcT4",
  "key9": "2NhYpGJBRjt2oh34MqXwUfhryv7QSfmi1RRD6R3tuhsitFdvaeSXysawPgfrRyqTopoNKzsckokiaPxtzueb5oks",
  "key10": "2s1tYPTKWvmottdBPKy8jV4L88r5EqtrDY5UfmefwyetAexumWEMXJGR9xjra3qKEM1fqzzWxBRHVHXWTYSAKxY8",
  "key11": "3s3TjHLiF5rEovyUeXxEpyXdRRNh5Bcg2jfMXC1qoTZptXMn7cv1j12itBYvjd8spTFZMQNdoLwkBeJw36GTkyX1",
  "key12": "5dR5tLxbWXrEQeP8AbP7qWsRVZBbKmsy8jgknxXpzAgF559QaEcSCNhNUdcCQ5TTwXApyffuKuxq7WUHADfropVx",
  "key13": "4rwrvEUb627xa2kA2anm4Kis3deFGG2duTgAmt33RsABvx11fTonD1XGDVEMeqMQGHRT74gWP5EDtU61oDBybgw4",
  "key14": "3YBR7a2MaZTwsrnbDWdRtVXrcwYAwz5drYpdUB8GFeaJJ5bvyePvJuAY9Fg94YDe5f6iFsocEFa92DGkGUwDzcEL",
  "key15": "5RxUzG2FeLPZWC7AqsQVJJCC3bshqzJyD7ajPZpppY8Lrq5JRTEfELb8Vo6UFKQ7BVPbeqqaa4NEAvJnJXjzgcpE",
  "key16": "5wMtcksw3EPUkAe4HFCeRx6cRah9hznUYfHzbvZiCwKGEVrZwDZUHoapF1SZtHJLZ1XyGKTNxKSEbvRFqWsDe6xA",
  "key17": "RAq4qVpEQkW28cYrLwvsKizfmBryc5NN837rRQAyoTtEJAj2aJNBBbVEo7ymuQzY75guZbHqjBZaPXriE2Z9d7e",
  "key18": "2PhaFYMaYgSfbzZcW7MaZtET6rvsjGadgxoqW36ebvoXtau8qyEdVQm4uZMVxmrCdn9mtGXfgDk462UhAkoLp1uo",
  "key19": "4xmb1WpUevv98S6216S6p9dxzJPDM5jTUJLSjqrcvpyVf49f6X5SRof1e2817D359z3RhQkUiLLsjks8FDxo5y5A",
  "key20": "5XMEscmrCFJB6DCCtKFiq9nq8hCa5eCkVuuN2Rt6J9zEfzzsjhJa1BBxdA17RVXG75BRVhFniiQLe6Xgh5dKZxJH",
  "key21": "4Poaw7aHJGjCrH1GWP4k8trpULmAEAbpbxCvCXnuoZix1iGRwq4TfdUnCCQGv7L63v4pzqGZdzMSgKNVyJjmZnK1",
  "key22": "3N2Rr5Nxg7ffvenpE1B583RpvpTheopCqSdamHHwgff28azczdFNebae8PZQpwyjGzpSnG8V3dSykYKmEGSp7aYh",
  "key23": "3TmM46Bca4GSiqpMtLt6hjAmUFJkfmczGumDGnCbkn341f5J61uXphPTTtXporjgPAtg4sTWbaA7YA71RmvvtQr5",
  "key24": "2cp2oWTdPdq5vJxSHpymCBNBtxve3f3oQ7utMoiSgRXByEMWA9JxpVojMHjPNp28YAxFGPyCG48MGtsp5BWspuZR",
  "key25": "4rcL64L4RsUPGzkZH1giT6zAzUHgAPp4Z8YLTPPh4Z3V4nyhjdieSt9cTf2TUsTYe7Q4iE6BJAFgNTiDLoNK4T9F",
  "key26": "63HfXwSQAbGWbrx44LhSv5wzgirRuGzRiEd4J9jVDgzL97L7orGXcVk7GYR6bj6XKD2RVoDkbccoVqqj1mmBHxQ2",
  "key27": "5imMUwrZjDx7VK6u2JpuKtsZqJkK5wom1msGYVh6DPkTfFnqc8VkPQvn8SvjQX5mcKxnSGN2rgaVyofAyNMF5vQ3",
  "key28": "XiyvUPiswPTypKgXWeWkJdZcYSUU4dSeD9ABx5bEewaEFN7bBgNSYNyL1LeRsUfVzn6PMrQyEANnjV8R4gJ7365",
  "key29": "4DZ1rqcVvDZnekqe3mmPSza7TbU61BLfht4xFCdgV3rayF7qRuzKm2diffPZgoT4ZkDFANmwgKnLnF6SzU6Xg3q6",
  "key30": "3ax1Kws2J2oPqEaoESJkrbQVxDP5cFJxzjzoDG2kopqS2kW2NE3DACztE5eQbmmP4yjUnbHNsrWojUhFpEUz1KDm",
  "key31": "gt24a4FSvQCTPWJrtr1MLSd9Paxoru9Lf2bZ2UZPbqeSTDJTGcUKP3yPyhAJBedK2LVaC6aAAsvvM8KgqdWCD5y",
  "key32": "662ahcPE1eft8T7ippGbptWqkwnHe6AUunSuXG3cuHiqiitRj2NPadAzUejFHyX97xxZYEsfTZhGhMRRADyADPcm",
  "key33": "4URbvpfz8ypqfAXyDVmYH53BdS4wH4wij23SXqQoVTFA8E5iSneZfRWJGyvoGWRNX4opMNFWTeDUFQV3s7eMfN1t",
  "key34": "qHjoJUvuWNhRM8VccjvDNNQVtpytT2AqCPdgevKHpPNpjWqvcKd5P8DYoz13DjqHcZYgwE4oircrG3sajWa12nx"
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
