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
    "2VRcaD8JKVqxohbzeAENzhVUM54NgfndruNzJVBe76oFA2xywHd6Wcpp6W3mUj2txsdS91CoBZKeit8asyRtchxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NUoibJoMyM7bVRcuXTYe1eH5ifgUSU3zbYfvpRN3s58TdXqz8zi5zREqdoXJRoTqYVdocUoDD79ZukMbG4yE5Y",
  "key1": "2Co3yJjtij4KbztDCRBuQe5srCydiDPu9Viwtw8HzRGKpMDwQojaQxTgfqM4Ak87cXy1wKJUS5ELqkuik9gTdR4U",
  "key2": "2ho5wuGW9uAA5ihXivLyTbpy5N4zmXZvogxiMKY2R3o9azgrNDEWckwpbb8f5yE2rfSEkHXrBzTvenGxSLhE6KHL",
  "key3": "42PmpBr2b6xpyFA3mD1JEKxUEofVbSadYP9r1TFPjnb5VZxsE6tGuGowhLNeDg8uw73JBZZ6HhcG5ZdTFJcSYttX",
  "key4": "4Y1n4FiudFwfGdeNz352VHMkC93FBK3DhgxneZ2fYL1WCSxn87vk97zQEsaX8G9N9VgqsqrPbqPZrSqWFSZ2bXoA",
  "key5": "4mUaJcN5RVrEgGuiKJcgWrFGpUMJXkyKpZmLUt5rr3FgiKzdjerzMgUZdRTqyMFDkVmQWPaAtTsaB1BxogcKkWsj",
  "key6": "e7MmTYWoEf3rjnMPsmYqEjP3tgQ1NtPWPMV9dCY6c1vBGLsXCFbkRxEhSWAfHxT76R58SjMARopcs5cTM68qiX9",
  "key7": "MqzxkPHkJVi7gN3ZMpdH2eW4SDDKWK9jUvMXBGkEkx6949PwrSGRPQYBfeLh5xTPbsJtBAfzjzJ7swu6AFsAQta",
  "key8": "jJScMPX1oTLb8JebqXxjTbeAsDgixXdvXP5u7BRBSxz5tQDDfMiaXZMeNzqzXK2EJkCzdi339CypdLrGKX5dC1g",
  "key9": "3AU2JWdyyYkUdaSPvpiidqnPXetvz4pxgF5huBRMgpnRdqbmbkNRNxRaFQZvYE9CwSJain9cAThxTKom2HFYFJwb",
  "key10": "2YsspYvsJ1mBc7hH9tgTjA5TeD93KnKatX4GVWECbjSJL488P4WwcoS4VX5kCrbG8B1fjuaciMREsxEuG5UfrZEU",
  "key11": "3Dr99hJkfEh3jwYaDptWkdPWqcoo1BvJovKtNsEU1rg2TPMUCm1J5baczAuMMNBSCJZgY1mduQUZZJFyhFERtFUU",
  "key12": "fRBY6zXv1EjP774b8zsg2Z6uMoNqCS8ubDNCL3Ge1oY3mmTttzQBC9CcoxUbK2jprfifqXZ6XkhXiM6LMLQgdvV",
  "key13": "3cy77JeCha2grBLw7UxMTFGU2mrozT74RrBN4txmdRKQpkN3ev7w8Fk4xJMEsbkVR8jsbhKKfLVTa3zVSWrvq3nZ",
  "key14": "2Z7EFNcv8wsoUJFMQkxDmwGQFEhdaPYdJPcwAcpc1fAWLub3qd4WEqLdGfc6CbXpvPorzw5KCPVDasYWFSPypppw",
  "key15": "4Brxk7Mc2tKpRJSG8cH6Ydt5evTv36CNQAMAp5gKHz9PHzEpfNtbKkuMPSxV8QSean1WsTXt5bYxcoJvJgfc5Bf4",
  "key16": "yaWh455T7fo13g4c9wpQyVsGmv9boDdrgjFoePmmbvtqnw8ASPywyi7366PYAv37jqG1DPBF7tYbpGNQKiFT7n7",
  "key17": "4uR83bfhspQ43pyprTVYAk6gpx9vDu2prhije43y7CzMvmMT2zCaxwYDsJCKansy8jQN3u7ux23a6QdD9NRdz3if",
  "key18": "5iK4CxuxiWZSbCFjV89JBvYnSZvm156Xrp4YcnDtUNEqehSMkUkSbLYTZYwTRHKgMQCHA9DXtJbMVLkAwNZh2xnF",
  "key19": "2YVJTNHYT7zJwNwmpgUZhQXFYqMi2ieCauSts3u4BfXrUWQkP4687kMfMSPYRGDLw9PeiYghFPh1PTQbwdt4TCyZ",
  "key20": "64ybSzbkSiDVjHsc3r1DJ6DzrR6aKqdZvGLMDvPHv39QFugwKf7E8cgSfyTTDSWgkeZX7susSNEYS3SaC1WxVD7j",
  "key21": "3i98xrVXz1U5Q1kyEmhH7UDozyUTejz4a6yN8esxBuvMZ1DcL9qzu6TzrwSRdXonJPmktJq15UqzEsaM1XBCdxnz",
  "key22": "UHhMrMrmj2dAZBWL7AZ69PTRKVHFw5jmutkzuMFckow3xtseP9uN8oDcWohv3vJ2TKtBT1esqYRxrf9Bc1GraQe",
  "key23": "qdJ8Md14kDceVAvNrJJiB638rVw3Ufe2CVtJrh416RjiQT1fiiaxfhnR8MEBXAwfTHdGky9UFLNjA66tUyKgvgy",
  "key24": "4cVWMZQmSpfw4YKQjsjcgQJnZy5Sap9P2r8xHM9e9K77VzPVaEoQkeq4m9Tgn7HoR7VFs966wPEBjaTXT2fhnB8",
  "key25": "45B2Nv7GWedV1c7vq53q9sphqE3FxNTzgNcpN74ykByxg8YEBVMDkXdBggaNEfQ5PascQKnDUxi5GXzo1cReKm3M",
  "key26": "46CtSD2RjApBz9gyBuBCtmXu4vNM9Qk6Zu5MkMqmYkDTtqVv4szwL7apG1htzFGLjYzbJpobpcabEpWrVMSb6okw",
  "key27": "2dc3gW1CHvUcVMTLV3877kjKy1dRWPshKD7yHaFRvmCeQnY5hcWfVMN9nEqWLw5YiBAxQrRfR1VVLtLs81svYe3Q",
  "key28": "2rMyqgiRyoBRAiU8oUKqLixjxbLQ1wBjNgtpx1yqeTHSJNheRBD2zVFVDLr2rB97454bbdoMRF2e4THSznMZV5e4",
  "key29": "5xShpwPhpKpBZQXeUj765CMWDkwvZZnWBKefhBu1EqNSZkVX3wr3UrnDqU6XCByUw4tkmxavAAa6anhNoQLHY7F4",
  "key30": "TRypeJq9JxkY4JLcBdk33wVZypdJbdLKsax5bVnnAA3TkZxnzdVPN8Z7PriNB4T7wb55iVQsvC1UnuaekaVw9Zc",
  "key31": "3PpQ51ruKHGm8J7yLvsK9QCvxvFFXtCWExxQMEj95wq1dohfwSRjxebgwqqPy9dYheGFKzj5UTKb9S1CQTVk3bXM",
  "key32": "3tZnB2WuF3VV74MwiYDWF1u4dUJ8H5ZALAZc6N5xgXD8Bue1aXKh9fkCF4E1BF3TGQKEKU95FxJyQYjCCx6cJ1nu",
  "key33": "5oAmCjxqTnPxMspsDMfJsHqDL2TALxV16m2oo3f8cnh3U5eXwxppnh64wjULpRV7TeVy1nAfYrbh8J3xNfaBtNGx"
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
