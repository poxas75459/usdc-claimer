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
    "XtHJ9yiPnkNZrFV9NddijsjpL44Q7kYDJ8JmNsirfqnKAfXX5QhnSvnmdTJZPzVSRZ411TSKeSxjK5bQek6P3Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVZd5JMdnJrzenepqccjz4dGb1qQkVJQ19f7CAG3QbL3oZ7PtYSmc2u5D8Y3a8g9VAXkPruz39mrRguzFGme5E7",
  "key1": "5MmLqhexbF9wY4Jdx16wkXzRX7TbYUW8G1fQomXqDg7g7FPyAB16BXo7JGisHsgexzZcjK76EhYhrd6c4SENENkg",
  "key2": "5RYo5L6ZqDYo8QbTRyPEo7bwS4qdbYznGKcaU3G62S4aoHSHB31bTxEYnSvcTTJE12ioxeNBMxuAQWjLYgHD3D3S",
  "key3": "2EnADxhQR39roVDAE1vjN24hiuyxRL1A88LZJbxPVhV35EWH3DSoHg4hZvr9CFYfrcwe81aZ9vVUr1NFBfhaS5Gk",
  "key4": "4ZXYKGk1VbkxkEfe5U6cMhrQVxjseYv2DNBCx9RgnHSc41BV2pRWxwo9gRTcwXsMYnaW9rMYD569AVMCmUXk3d1f",
  "key5": "34qiaNyZSkC2YRQzjPvqD7CySB5e91hWKHvYmPu2xFVCPWQm4Ntvmp77YKMivgxbDQbnupoG5F4qHTVaRHncqWRs",
  "key6": "57FRfbWfzZ5h9YJ9U8mVoZQHPuoxDF2AZwz5cHMpN5oDYQV3PwPdVDC4oycjsUWc1KdvTfKsTGaDTQT6MFmHC1Md",
  "key7": "2G3Svm24CmHGs2KXHneEPXoq4d49pAZXh8YH78NTn5t7gMRPZJt1PXBjevVd8aK2qjuWanPc9nKhGYCREuXAHVMG",
  "key8": "37bKYsbb3DJ7xdq4iyeBBR6JFQJewZzeL5hMCmobhPxjHxnDf1P9G2EQX9ebP87ia5P5um8uTpuxGzdTDE9RTWhM",
  "key9": "3oxUhR6ig6JT39y1xBYPZnFTb4wzMtcJRnqz4vNtoc6wsq9YF74EhGeqytZH7uq5hcs48YMJpwXCw7r7LxY9teho",
  "key10": "2QXeCrGDPmEnaiDqEgkAcWLX9z96ja5Xc3qsLDNSfARVFRkzjAZwvYmydB8LPUuYH6rj8pGCAgseEwhpfcHKVCPn",
  "key11": "2kAG34KLvEqD7t8uMbe5Cm8xRV9wqmTLhuuPXAh8A8GjzQcmCeP6mDuVu14hF6MqJNSpB7187thmsKUfcytEsskN",
  "key12": "2ZSKRQoxg3PS9zkPxBsDfbhcLJEDBjr3huSeFSxd82DFtZGvKXLWj4i34rctF1SrgG5KcuzyVHUwkpxtQVbTUszj",
  "key13": "5NpZwjM5kgywChxM1CM4UFqGjqwaLdfCCseamrtnXNTaVny5ZeE4V5UtteSNCXxoEUQ4L5GCJTAYs7PXQ7vuWhae",
  "key14": "2nUnAZHmaV8BKtrfyHUc4SZNNCez2eYBgrChtFJ9VARH6AodfmJSfnfD7946km2ajdgjcfX2BjVrLXYT3uori7Di",
  "key15": "2j7ZFM317X3ga7XDi6ohxDqzzJgNjo1PLFMts8JfDCbftZb6yCoaan3yFDzuKY3Ts9Sx4dqfsk6yfGBVABtxosqw",
  "key16": "5Au77vBduJTthUXg72ei2c3fpUmi6VnYG1SRfbLs6AfjqRht1uRmvoewA9ToowsfLziMLpY3Ut2JbBsLCUWeir7c",
  "key17": "4SnjcTTS6DRL5eBGi1zYJsyn64irbGUz1YTDVQoUfNdJ4Sakgvx5fpyBLYjkJPDHToRKD47YSyiU1kGyKwJtaGCC",
  "key18": "tJzE9yBC1akBw4jzRHHWjpuPqkoRrDYBqGJFwQwMaFzxXF9jWTvFam8bvQ3aRGkNDZKii7Wk9PoTpvBrBKN5CTJ",
  "key19": "5oX7oiXWzP6cbMJyucoBXK3skRjsQiZvs5M4fstFrhUXw1UunCrLuBhVW3rTkRDHkmTzUJun7C7ugd8EcqY9uqoR",
  "key20": "4Mc2k1B2z9puWKaBpf6jDAxtkkyZQzGtLMrWkYPBYzhXVEdjbYjKKN2mjELzjhRUJKGGSDjkCaTB2FpmCt3LJULt",
  "key21": "5EEkEfcm12VgToT6i2ob5HCCJ4rE41VHffaY7g2SnYAUe7QiGC4tCa9UPv1pwFyMc2GSSzxTViFWufYuYvLbB4s9",
  "key22": "3zZ8RaKQidriycGLY7vpx24bmkuw6iZvBvTJquj8t5C1Fsygqx9ASEqU7noGyLrdgcxCqp7EcacYcCf5abMYHHvD",
  "key23": "2rNbDR8L6rNeaPb3nvXG4YNvM2CFeb7WSKeo4fyfeqJCMuUUrrpXaa31fT4mCDGzmzV8SAgXDirRC8tr6qVkKf7s",
  "key24": "5VAw6GTJ3pz23HWRRjeYKyEMTiss4mmJUT2Zhaoc5krfMLf4kWpFQT38wY1EEjJDFiMuwgsqAJfoBYFK4MFvszR6",
  "key25": "2SEyzMad4hbXfon4RRktwosyyU3tYS6xTQKpfVHjuoFuRwTSewPmAXwkfivQbUcySnxPX6KfDTTm63FC4fw585JA",
  "key26": "5qYfPYtfWj9n7WvBHhZFCvy6HVh7Nr2WEviD9yHph9Vqge2cjxYXorZhdUCtjeTLx4otiHZdoakCfJF9yrPpvVRV",
  "key27": "4JYBoE4YSfykAYiCuqUm7ZxDBCNXh3pFfTYYogxeqw2Q29KAW2QQmFGZdmLZjpiMRDyqo1k2CYqJetfjrGhNT5bZ",
  "key28": "3YVxUDKqyWnsJLSG2nEpaJHaAkauSYccmgQLHUikKwXNRoEjSW9vMsVExWrjJcxAc2mugc17cWzE3EVz6QsgHWg7",
  "key29": "5AszpYxgPk431jYLUjWz51NNTuyct7wGH9NjuCaaTGfhyZbZHKYoMGFqBSUyT56ry4QFjVwdvhF319sPLsaWQKRo",
  "key30": "3nJKGXD5D35rD6SH5RZtfWoHwMum5twAaVpyuMcL1GxpQPefPy56GtndFGt58BRPrvQctRT8sW1AeYurwnKx7VoR",
  "key31": "3g9bNtrqyyB7UFgdHWYj4mBhyDtcDMqMwMjpXonYbEWHNhyv3zdneoUDAPpnwiZJVMnZc9Vk44NTE6YVznW4uHQn"
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
