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
    "4m26Fyx8FHfCFzXPP37KjQQQ1W1sATgqzv7ggLNie3m2az7zFg3Re2gDHg2QnGZNpYb9xBaDTnhVGEKxmURDYbH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "prTHuqvEiVoW76HznMsXV3QM2o5g6HXqPKvnBdsZrxNmmEJSbjQtDTd2mMuDy1qWKnNVZDWnYK5xstfNaGbPZH9",
  "key1": "2WGX7zvXNKx7RgCNk3BrFpsgfp3uxng7fJbHJHp6m8QkXKVNt1wGEN2krpQqjVrRq7wWiMzhuWwRwUL9gNiqUv4",
  "key2": "QhsV9qf1toee8AyQTgmb7mqUpmRe5ZJvGcngawgupP6WocR1zKKAir4H1BDmpn3KhXdvvvB63Zn2RoKBkgRyuVd",
  "key3": "3eaatzmghzXYGjiz4FZJYmdtTqxegAEWysDfHEXWtYiPjZupCmZPrTpLqWsrntjAzhNyXQgVenDKwdqeLEdv81JJ",
  "key4": "3wAeo5xTL3h9HKHznzwasioStbLvyZ2jGrGFMN76dya2kRhwUuYBAruHB6YwjDn3mJZebctSodxv9mijsE6BNc5u",
  "key5": "2MfaCQT9YfW37PXQNDdncSPP9AGxi4EcWrroaDfUnCWu8im996Z7UwC2TAjyFoC5xxzmqnNpL8ZU589d2cur59MA",
  "key6": "QZ3UbZWYCGua6wwTRgWbracgF44Kwwib8kxjdy6w8i7bRLWYoxx8QMp2tQN5qHaikDsyVDHYqqT1CnJpXijVWeV",
  "key7": "3QTaCiKuNY8n9qnKLJWrHNEodCZG1d6VRkMd3GSau6BR64d7dEMSdqiKHszSH9iAyY62m5NVRrXibnGN3ViX8ZrP",
  "key8": "4aJWhYoqCaq344LFJwyi6qtMPr7T7gjd6T3mZja5L4v9JGyx5q2cjTAyNvcwLvW9gQ3dHZyR9rgJAkay7VNcf9tL",
  "key9": "2BBgnT1UgW6VjfqAM52HeYfV1X2nuLNoU5sGEp6PAhj8UyPFHotW7y1vP9VwfkbDsnjmGGN2awjbXPFtmtrRmkit",
  "key10": "3DopEmEqUZ728uRdzfFFP9k9NnHKdgYVEAAz6pUAYMUBP6vWAmMFzXtbpRy2AJu6Jah7WTRzEWHyKcWFiwpgc3km",
  "key11": "2HxyF2CLfok9bbwsUZN8KgxdPedjaANBaegw5oQ1NRgKfufiktBKNPf8J4osgStr2VDFxtzJxb68yanUDiJiuL4n",
  "key12": "u9N4tb5o2LBfh461kzJ3RsFkgeJzGz3N1D8zpr8gRKbqFMWDDpWG9PZpjEwDXRsNPBJwLnh5TPtvUWodB4A332h",
  "key13": "iNAjfAPoup3yinE9egpwEytk4aPZnA1fvmFVK6AabAwvcnUkaqca4KVv1K4z3VEGy8wF7ud3QFN8LbNHyaZz4jV",
  "key14": "MBDfyvMknqicPkpUDdWKL9kNfXBwDM3Za5ZU64EhbbikhYJugLVu9cxMcF5civv7GWgRozB5zupWtt9N2UUBLfE",
  "key15": "5zf5NrBPu5S11nhhU7xrGC21croP5gnJyEQwRtvzFqb7832p2yFYxKaWu7zyNxn7T8Np4sQPekrRBhmXQ9PKcbJw",
  "key16": "4ph6uHB7sRmHNX1VmV845JjzgjSWFvZRdBTFe2ecVBT83zvfryn1DiYmXvjh6UWe2NnKN9UUCUFokgHucmhW4vmp",
  "key17": "54RosQrzsCWL1XeGNpad7twSGupZcvdgfntY5odtYTmANenCXX1Bue1oG2TTsgXW8pCrtbA2rghZRQTTE8AomJPU",
  "key18": "38EEWbsYCxXeqSTU43w79JKAPVZ8sZdPrsucW7nu56vKF3q7cPJGo6GAnnD1uCph2WYopyEen6oaKYM7wpZxdEuN",
  "key19": "3XHhK3W8id3aYUE25TB1QX6WMeZSPpnb6gMtFp7Q8ZJRxWkimpssN3PZKR3F8v6PcNeUSorGnjUvRXTivPeQuvu9",
  "key20": "4cSi8DnD8qrErAv6828ty9Wc9DAW8hFvRhicPgmXtEapjiWN1gxvVPhAHUJtg7XRREeoczi5914BfCGxR8DX5VuD",
  "key21": "3GY9HJFemNAynnfvxEisyEhiYk3eZroNzBBGeVne83rAVuPjycwRs57WLLi1BfBjpU5oPddsDtsmJQyGM7bDPZgJ",
  "key22": "22ws6Y3fNGgGsgCRaqf6m8XYaw9c8k8gco9QxqmPEYesqMeAR2iXhncb7tmZvCrxh3jjsx7AjjbRHVQDQUUY3VPd",
  "key23": "4M9UaEt5fYZ2TfpxmjULXpKPkdAZz38WRQQzhxwB2gFa18XWYjdPhivviRmgfi2xD6oMRq53wkyWyV9sZjgFTP6y",
  "key24": "23gQs7sZAWaekeLntPWT2KpaG8GPRfSnXohTutk6JnSjAWZqTGfpJGzTZqaxF7DJrPe4gphVfZZb7XmaFsDCdAL4",
  "key25": "4msTt3qDTM7QNEUvWx4MgmaAFW3ig34Xudv7sHma8MfzFTKRQ1xXouHEpuufURzzu9ynFCMM7sxPZArkUVkMpuYM",
  "key26": "3GLBjSpTBgKhmGSqBTfnyW2ecvsCN2sPbFaFMkkRYCr3NuWcZdncSSvzdo85297MW79BixBW9AnC2iacdekBZ4zJ",
  "key27": "44RJHPXZ8V1uyPm3Hi63JRBe9Pi2k2NJYrunwjWcM2aZr53EH7PUtr4PCTY1BEiAMqs5Y2seY5PoDufRUEuiSGfE",
  "key28": "2pAMVqQoipZLfkU6K7FjCyopRssQPTmwS1aY3He1DdzyPASB6DZfuvWbDJutdGC79zXB3w7uUifP4pgbs3wqaZUj",
  "key29": "5hGnQjiwiJuZGM32jDpreuEGriFB4TnSLBVbinXAQPFuB9Nf3YBSgqk1vG3cfdXTX8bxyshp91KvrkoVXNSK5djY",
  "key30": "5vUFfszUmsMwbSRXy8uLhQQCra4keiceQfgzfWUa1aE5nXeteMcbVezT982U9op2KsSZSYxyj89CmKcgi3xp1UsD",
  "key31": "XK8srmEU5CAN1SxWczm2ZGBNJRusGTZtSK2tm4KZ5ModNfuuyRPEBZ9Z2UYzjnDcsndGgzJ2jSs2E4GvVbDkH5H",
  "key32": "5ufCB3NJiwwGzW6Tu6yq6RXSZW7yydW4QEgHBRA4jUjZj1epEcgNNyg399mTvHMz7vyQqYccNK8JybQ4qYX3oNnP",
  "key33": "2NJwNdbuu262wR9jr1ujWmAd4pPVUxEbw9kKRn3WkTaFu3ri4JvjaCaRQoX15CeLypVFEqTzjYsXB9HQsyLYKYme",
  "key34": "ShkzMPiN5iTQuYoWx3MejnST1rFoqZAf9hUyr4jiEFd6ayUT2D1k15KmxumNxPTTmRqtYyJrUFBX6xMD1LS29dh",
  "key35": "59zGHodWaq13Wf2BPGq98rGdr3Tf1Gpzj4E4HHXCqMHnuSunFVhr8KHxYwm6qHSkvF9RFrMHEEuBX4XAQ6FSUNqY",
  "key36": "3jARMNGC5mdNLBbnNW7z9gvmMuMdu5pD9YaPEEmRzAeRrmU6EwRtrHchpnBbbwKmfK4r8z8dRFt1G66RriUz4wgW",
  "key37": "4sX6Jeo6QK1LXtr7Zht3A8ak8WDypLnuwcJqTdoadPdzozDKWFfYFT2YPKBKQw6ue6i8cEDGy12Ak786y91fc4o7"
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
