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
    "45jEU4i1qaX4Xys5mgDSx3sHqV1Mp66PmAmnV4stzZ8jL7iW79Abn1LQRpDwdWmFq5B4TBQKESGiWhGK5HLVZiXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txydzUGW6eewiNpgtABLsEnQ69UyXWWNS9oAh2SphBP74Ls9iMLTgvACvQHLTkSz8Z2YfKLVoRic2ArYk5nVjmV",
  "key1": "RGJFiqMhJmxu6DcLCU4Mbf83CDtZiuZLXrzZPNUoXhWGwiQCL3PdN1AcvwsnJC6o3Cke4ntDpH8fuRTxCB41AQq",
  "key2": "4WQ2DqxtBigmdQSNd1oXbzAD9PgmKL2u9NUdBpVuz9eFXo7XR3CqupapxjKqsL5HbMK31dnMKpfczqRQFwRAERbC",
  "key3": "27j6dE6LSrLsfMCqve5Rp3BjgmDmxbTEhMgFMswHWjsxfVdHrhBzVK1g8Et3XNce1T7NWLaY9Pc1MtJuqrt7DWCu",
  "key4": "5Phx6m8MfDRnmATmtPDWEjJYVxD1YFgjq3QWJhtf18XM9YFjKqiZDbjCbHbGnZGkFFpVeXSuKMQPQoT9KpqSRtuT",
  "key5": "54fAgdn23NkgDwuttJ4VAqxyCJ3DiJnmFCPHPoNDJf4dfXRjVMav3xBAyewwSkDDRM9msB8SGUv4WqgmK8m74uwD",
  "key6": "4cZnhL4XAzh2MxrWex2vWej53fqw4XyCn28MpyDMhTLi5aB98WKEkdC8K4dwnDeMTPv5eykZHQqkgbpPTNqB1eWk",
  "key7": "57nWrt7cuYj4ompYjKqLEpdM5rqFiKoTdufoQ1Bteef2zcWUciq6NdJxeT6wjyqr3TSQZUwAnUDC44M9M33yzKXF",
  "key8": "BzNFEXrPm7RGuqbDHAXRAeB7ehGv1BpmyJ8sUqCj96i6RK9VjojtXA8g9zA6CxQQ9xNyVifTQuFwpe16PrYGHxB",
  "key9": "ierGQAQdyiCsUdtkdPaeN7WfpPmTGaJSCn7o2DTNRTNVAmze4BemWEno5nBQ4gxGBfGMMfmW5XQjN2NMkL4Teex",
  "key10": "3bHy2U7nBj3EBmy2AK6apUhaULdt3vBkVddRxNCL5Yz9FAkPPvbzd9Jh6bXvwFyCZ3A5z2TGNQ1KYyCyF2F834in",
  "key11": "2UrKLuXXkonYZFkFQWZM64uoPzTMTa4Zp6t3fv7xsPSczJYZmXuREHan1sE4HzfVGiG3mAPYEsqBqNU448Mr8cEm",
  "key12": "4fzDNXTbJZLrARAU2WLwN6m6hoo8Dvq5GgSsRpa7mg6ZXMwPFUMJbwUdDACFFi67piNwRh9JajacXjmSG2bNZXCT",
  "key13": "5C7QJ1Jca8X1f2kUhL7dHNxgu2wUwHR4Rwvz7e8z71m1ULfWJqPBDLFPVq1qWoEC3GkZzvZyx5oyCUoS7pzMDUj1",
  "key14": "2bqD8F83dAsynkSe2paY2FgLjqe4cZLGj2CcHXvRZ1sK57B461CUZhtxCz4cWEzsCEynL8H5wAqgUKEAtmTn8vFE",
  "key15": "5qjYANqAEGReYmhgSz1xzH5QpsXsmLZDpsKmw1aouSpgeosZjuJRUWu7qarjZ8Nx2ybBv3tV9Xx2HGBQUEqFJNN5",
  "key16": "2ee4qyJHMWGDMuFhn4t7V22os18msm2B9KVGyMoKUS1WedBoksyh4KPvve9kZwVrLjduXcRKiqdwzGRV8gH7sKmm",
  "key17": "4aPQCzyfXjTRAkr7SQRBpDkhE2obhKSvRwET6S9g41HZGgfzT2ifCgZjJaPKdZ1pygV3CiV3jepSaosrXXuKn54g",
  "key18": "2NY2sT9rFPNXtowLcy5AZi74VokKdjYu6k1atGi481tv8dtzfF3TyNdWPhbwoCnP9aQpDpy8vkbM94sUAZYbZgZY",
  "key19": "4LSitdifFCaesd8u6bRBjsZ42V7w41ypuq82EBzHV31m2gfZLPn9DXvCDHYpnGWQ7SEjrj89ZrQeK3YHMeRozhJ9",
  "key20": "2cknfaBaqLKN96pZqk6xSSoqmdsiGu6gJt9UsxHbJrh3wAwN4JT3ocvo8ENapLHtFYFTTy2ZYhzAvT8cHDeu3oY8",
  "key21": "4PovQ3o81xQwKPmGrJavHjro13wgBdkh6fYeTrtncpopeAEkXS35omUAu2mKyrMi3tXiHWRUwrsDdjoUSuc6hnbQ",
  "key22": "4CzUggRBVYneizFei7vK3tUiwpvNYLjskeeLiprhthakkZ1cN2U5Lnc8kHeqFCySFxmGiYCWxjbFo6iieNz23uCB",
  "key23": "5FrVzdmV9We9M4x7FP6QWGiMBwHuY1Sb65FvpVGGkZNrCRAbG5zAAou4zEpYmEbtJv5x5rXZ33c5fdwyCtv1rBgS",
  "key24": "2Lz3Y4pdZXKrfKmp4J812s68yBrrfpGpjWzDoZ1W4aFhhxQg7swH4MuPaEwWsFDD59qNvf21Lj5b4SdtacXuGNTS",
  "key25": "28M3Tu31zwWW5WKn8r27ZC8Z27JiFencQ2to2VfY5CB3NMhKTAkZ1LoSjSfrj16wDjr8SvUQwSt7e7fYTiAsFKMm",
  "key26": "4d7LD612MTEY8FWzHUuin3g8HtnSDEQqtSHqDaRNzoVWBURnR15jFjiVq6xYSgUfsMg51rZ7zPD493ouoDuDmC5T",
  "key27": "2xQ2FK55WaFhK9gNLEZPH3wEawdMy3i2tH7aYE1zuCKbdJcFhgx6zEV32fHHP5QmGoDZNqrBjBgrMtqhj5zCkr8c",
  "key28": "2nwThH2GZ1T9uqnmLUDGzz4ha8xqq7M7tBMQ3rum3r7MshCaYKc5R2kFhLHMbaPaEtD3R4tfLfuGeq6Ny6ooDwzs",
  "key29": "2aKJJSjw8e1nYrWt864PTLDPnkaXTMoc1hL8qAfEYLkJA6Q3soET86kUzvTesdrAv5WgFz5i1Uk2u9M7CmmAuqfX",
  "key30": "3DC2iUNSGPRLikQtse5bbrfeGqUcfyTPvVuuAofLuNqnrTxkGwd8bE3HiEvLAxMpLrNxSMiyeHo4BY1V67vTqJ3J"
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
