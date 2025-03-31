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
    "3svi8GGR6eNJmva1JL2HuAK6ZBEhGeAhQNWaPDEAojkPpYr69VPXLqBdLpD3wLe1H2Aq1pwBcfU8cCkHVSG1XGW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pu3DauNDwu6wZV5bnde6uP7Eu4trNPF4YcsDJyPBg2VTahsr8BCJY4jRattqHzMep6KTaCgQWVrwiJ4xJYcS51",
  "key1": "58B3uASv2APvRUaBMYQogEA6TTFpdwbXgXuSo351d8N6yzSCPD31kEqoZEb3zJ4KJxgwuj3oVvNmWguC76jqFRTk",
  "key2": "oSXCtNtmrFVT4uSntFH4aFDE4hdEFUwRpfqjDkruVzyrWs6591AEB5YifS4bk7aevd4gpSb3fLgsc2HUQncfuP6",
  "key3": "NBn9duB2ympYWBDEQ78jrFwbhQhUJ5fwkP8cqQousvkweNMCB4pgzPqHyFNrWi1f5Ffdo9843XyZHi8roMqD239",
  "key4": "2aubHJX13HLHZ6NwtvaVTrgTLKQVGfgCRs7cTXDr4ap1uPSzefzeRontEt8p6qRvZpbyjiDVmtgKHrMGZGHBxrSj",
  "key5": "2EZkyidsaDYYMUgfBmVWTDwwkV2p9YfBvTVoBpiGyZLQqivee1SL9SqvfEmt8YoGpoe4rWPi8BRj4D4yyKVZo9xU",
  "key6": "5QQBgfa48T2TbKBEhJuqE94dmdSZiLUYkNhvGT4YNkUWGfEVGhnXDLd7F3XqpuvoVTeD69zYt5ZQ3GkaEz4mVgK5",
  "key7": "GHS1jzH2X52DC282zWmSTUr4FT8ryX9wDraCuoceNKJCrigHXHCRBD9NMF3kdPCNhYFVxqhBTvT6iNepBqNpwUw",
  "key8": "5B9wNmgq33vKQem95Rgj4nFZZCTifqHv6T3nXfJ1fPKVKKxfHziZBeWm5qfdTBeWevUGHSjL8yrR7gzRtDsZzKce",
  "key9": "YGj8i6bV6zrThX6oLxfN1ZoiZmj6YYW1UZUZV7KE12CH8Gx8iNBGiFS5js9MtEGxcepHgKoFbDyTX2PKwWZE4Nt",
  "key10": "4pBVFRBzqVqVpx2NKhtKkhNyx8qRheuSkfWDWBTA9gVcVRujDaW6m8chnCffnyiUuZHaxiUe4bQfiDQx8M18oSsP",
  "key11": "5dLbzfRwWC872MkWv6AZmwNnxjv7pSo2AhX7eK3DGaXD13SVm2Gh7CvDXohfk4VkwGsZpQZvxUgixgQDZMvjL3f1",
  "key12": "5bgNmrJJPGsjoYxDALyHFEgNTo8hNhr1xEYs8JUPjzmUCZaVVsvGschSn6pMFiT9FzfRx9TXj7v7iVY1xAyT8AQr",
  "key13": "QAwCufy1UkCqRrLtXh9K7X3vLrj2REUV9ZtDbVdtfFstcu73DmFvketY6PuDjTmgQ4KLnUqXQggoMndZQ23Y41h",
  "key14": "31gZTxJzHy2K1DDhej42vrxaPhkgZAL6Vtj7WmP1Hk8je1xxdYeaP2ozLp5WxESHsXrZZ3g6JfKfyktPN2BWCqz3",
  "key15": "3eWFPSLRqqMAESebmHMwnhzt5dEmmxPLPU77r7uyK2SAUwu9cZmRexfoSewhNG92NMS2mdDhjXiPnvksoMtzkQTk",
  "key16": "3mpS2pvqTozcpPjaBvzqdDiDdJxp7d66aBk1u77ce4FrLDpcQa91Z2Bdj9dCJaaS7pruPDADZtxG3zCiLp1YvUTR",
  "key17": "3a5dzo8t25zEDs7UWheWMxMaSEG6zZiRfUfRqK1sRaAJiRJeBG1JySHBn1c8iVWCvAXZxE6RfUaTtzFJ1z74BKVN",
  "key18": "272scgojpeXr4tErLzhtZKTwY5gbrQt5AeGKx7Nc9wVLJ6otfPPo5ZEXAJo2HxJtNu3XUVfGnUoJfvjifdowoj4T",
  "key19": "WrDiN6PdvSm9Dsx7Ur2m1chh33MC6ztdHdQS8UCeMagdQsbJsNTt4RNY47Y1Ccn5owWfs4wjWzfVfBSHdt2EMDg",
  "key20": "4GwhYBs2Jxgado18sUUfu8LCbJ2QxVZaPYyrRbBQj4CAUJy6TNnMEmkQGDUuP66tHojwxkEt3EYdRxNWn7SftyR",
  "key21": "3F8PJCQczHE6dQ75VjXsuKRBiGAFbM2e4Fr4FNgFs2cw1pLUBuF69mLS7D5kVaJP7cQ5zYzFANNBCSeXjw4WWQDM",
  "key22": "GyBHFoAKhWLJUitFQQwdEt16Ysu5rvQzppT6T3AKHD5g3FagozMofHZKrozAtVQKPScb4nnpMb2xAuxLXHniq6L",
  "key23": "5rM3DXDaEeVn6h2bhGojnRtRfnyDreA9m38wbifNEE4c2GsEzbgkkp4onF3nfvaAq9cB1BC9Hkty5ha21nvddTa1",
  "key24": "5QFidK1L2vLh2XaU8HHMqxv4MxbbBQiJ3ZbgvRmRYvSXmaH2JqEm2ZpkXjeS6bdyT4e4cLMANaVi6QmMVPtBm97U",
  "key25": "2bjGNUDm7dfsyBbqK3q3cQeVsGQGvbjGjByq3f4SBLXkCEaotszPTPGhHdjikBonLN6BfgwYaixmUNEGjYxegy1L",
  "key26": "4nsyWbsB3xGTisQDSapEjRmXhL94FrXQW7HqMn1LiV59YBSk6hwiwzNEaRApsX5m2Y7g29sKcdfDQwwWmfF7PVyn",
  "key27": "3ykFknjdr6fZAVLzcLm8TXRxknnggERGYbnJD8VSKNrn2cBQQSWsivqTJ576drcd3S98UUcsCBwdrPtVCeJrPawk",
  "key28": "9ipRFBJh24TSdzfhayYMKg3iWdYnB44kGNN1pz2U1PVZaQLPyBpp8fMRRbG8m3ZSRqtoDs5GSd27oKEbVSepyMg",
  "key29": "3DfgFjgpsDJSagYb5R2GCrdBRHmCN2QRge1ZXyDBp7gfF4p1jHmSbVqWXSTNJiuhP8jdfXWMv5D8AR3aFydNpmzh",
  "key30": "3Yr9pXc7fihvwBpuuKJZuvaS9quMpcMrzfdRS7z9jUuURu8Uq7r36HUr5BLjaSxmhEeQJfgdGW36jqcu2h4ra6YV"
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
