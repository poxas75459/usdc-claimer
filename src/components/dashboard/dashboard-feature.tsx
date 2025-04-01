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
    "2dRKhuwUwsarTzudRc3JHXnL94JwyD4cHdJSvS7Sj8SBmr6ahRG66pBsfS1JDevvQ6kJkjoZv414gKtzwjx7Sr3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FrgvXcZyeWEBfWTfLENV38LBBCYifmgBUwKowHBZniF97LfXtQE3wecP2b3MySHffxy2dYbQXV8PHxA9vbG65s8",
  "key1": "5bQHz66LaX86CLmhqmujPm9cDH2tQDvuC4mDJwDCpocG7pCqxYpbtrk7x266fAYvbxXXGGPLTZikEm1CP2hviBYd",
  "key2": "Kfufzxa9ouEnvTsm1jBAFECqwwMvKQdR97DRjkm32DYbkAC8F9ieYTCrNJSVFS3K8hyryLYCh9Tx9aWq8ZYb7ov",
  "key3": "3iqkmUHshXnbyU1DjFeaXyzzm1i9urE72NgCuqtpPbSDJnqvCoSiadkghs2bWX1eejWR1Yp4XsAqv6zQBL2yVzvQ",
  "key4": "2Fo4ZSWy7RvjcLirx657EN6sJReKiKT69eK3UjchHCZ2ctvrp9wSmaStaMnxmLnQoZov8qyiJTvEiXsXTwMPzYxD",
  "key5": "3oWHAqvihNyBRxRQab6PPQTY7JcytKyJQ5jLPqZrozBihEaGLiqyjUdHQwtbgXCF76cLuRc39bcrTFZnXcDBUyUw",
  "key6": "4QQWvQQD5biZ3ZCJcRuiCZq7v8gv5BcFsZ2JE1mtKgy64MVteEbnAeJzYY1ybbKaMpRtrFf5XJMMgMo5QYXPED7C",
  "key7": "5hNsNimswcz7wvhuw8ST62AktfUQVKMwRiN9nNSakVh4TuKgMwto79YniH5Gf7qwDgCj8TzbFvs9mxuNBRXzL4kP",
  "key8": "3CAFqqZdBmtptB1Tj8oDEMaq3k5NujYZ7BeGSfYNrSr4EgQgC798FDx4QxxzDwU5L2qf8FUQuLAzpVigVkGka85d",
  "key9": "4LphCuamyQ92gxbjziXp75gNr4wqJ2pMLBgSt8VizU8ywCnN4Xn8DezxSun7y3to6CZd34mZBR4mJv9HkaDYrxFk",
  "key10": "4xPo14fdcT4EEwhaUKutYugxQn3w14j491SRxXBBGetB8ai2P3HqJhwdbRriAnmYqxYUhEEtrfJwoviiqSHGCzag",
  "key11": "2R1fsb6dGj9Q5rkYp4Hxt8wpkfnGAtXXmEFN5HrkANt6xZnFVZjNUPCAvo49tupCtYM8L6d7sfN6PoDye7qSSEwZ",
  "key12": "5SFMmuBBQ4xzYx1q9YRCLbXYThnPq27iyBMEKx1GZ8HYvdsJgU24HqHzBqnmtbFXK8i4mRuinV99p16iCDGxLu6c",
  "key13": "2gMbk36ywJZ5DhBCbgg5VFSXsSpv384eHUHqjwy4JvGiQdc35EC9wsyK3KxTQo3TbHrGG2Ey3cxgeoBAsZwGtHGv",
  "key14": "38XaVYw9MVikj7AKouJ8n2onMnberrzb4cjWN7rnGEj2hDzqywLVswab87hYdtbXAtG13mej7Ts3tzUtxi4324YT",
  "key15": "5zunz1f5VABVqs5g8pfcvFpc4D8NJA8D8dj8K74VErEJ3ZAmSMrKzrHed4iW7a6EWDuxwkp6mSwXHECfWXbZ7TRq",
  "key16": "45dF1uwi8MZKaP2begrgBU6biQfoarWmDiBbUc6nkUTTxsNadx3pKAKZ8F67pT6AFcPHE5RiyeUHLFcvNXxRVxJ9",
  "key17": "4wN357Eym11xRA3nqv6PaMM9pM3xnqjMsetxNy7LgKiXYzXDJzW3zRpxwsspCKmgYGe8qTtRS93VqP9Lvh8tvKTE",
  "key18": "4V92xDPRtw64Dxqi3tzY2S327mJV5F7YsE3S1uNwxejhRezJn3rxjCyJJhPbQZ8mD63CNw9wUmMA5KUx4fNPhJX9",
  "key19": "66J38vtXGVLXDvytm8mwJWBr2R6cmPBMriU7Lepm9R4xLBH8E7y31rMh7t6EucjvK48SqvrVGyUWoS7q6sZBgZPT",
  "key20": "5rLgk4w7uKFUQQpSoi2FPntSB7p8UpfyoGxDidT8vQLyZJ6ZVSkbY2vu356Gp6182rxYqaT8QXasmAQq2eBWiwR4",
  "key21": "317wNdbcUojFW9Sihs36Poqfs6HKKQ6nbfJEV1Zbo6dq9AFXY7nx4Le5W5ztEznJzfJGG42SuXNhprbLHvaFFKDT",
  "key22": "3PvNPwAqFsJ56t9wtYviRegg2iNNnbEhisbEz1mbvef3xFPNxYLs1HxFtJo9CtUcePdgazpLf2iHHRRF9ZLzvJ9R",
  "key23": "4FD2zphvVYLEdBp2sDxLsugd3kfPzeGAHV2Hys7npF93vyACcwTGPu9o8mkuEhqFmH2PBjoxYTzyebVi69YkcF4n",
  "key24": "5eWXBG6nvs1MnsaJJ4UTeMrVexNM6D8qC2HU4hcW8g6aqEo9mgh5J7Uk8PFo8P5SJDEC7Gn6iysny6FM4oQ8G18X",
  "key25": "2j5qjcsD8XasJ6xJ32eQkyoELe8Tt6Jd2F3Y7sGxec3iR8ta1EGtmAApiUgo985fqBAy5kbyyAEnUhcqZAVviRU1",
  "key26": "2esLbLzRooJ73zCyos57nQjUya7zeo9g1eYe3KekfuNgGLyErBZZY2Uh5m2yNy6MDxpawHBb1T6fUuiSm3k2JFLK",
  "key27": "5Xizd9LSib2B9AocvUELEEF7HsGPxUJniXe3zJSKVywsbvfRsaa4k1MTaMDMFRiHT79iXUSC8ZAekjZYyBCJZEzS",
  "key28": "5WPrkVz98h6UZT8MEgCxVEVPwQCNaBehN46jVbDb19Efdf3YxZidWYsoTJzaoeaLZThwhiKe8W1DYdDc26mt1i7P",
  "key29": "4QAS8QopodxKeVSWJmFAvkE4ouPdwfXp7GdcqJJzsW1aBD5vqtwYoGRiboTgs3R8PJNAFwWE2SvsE2p34g6gXSQV",
  "key30": "3hUTM2QsmogLhtKkfJd1L6Cjta7ftnQDxUMRaAwbstbTYwG8T9UabRWHLtv6fn7E6daKTUVt88kzLWPhXDW3detz",
  "key31": "5p8bWuNneX2EjNNV6iVzHaTZXRVS3cGFQNsQu9o3wE6nYmRRujZCKJFHQMQhwq9FNqDPHBfU4EURZ6HBcmmpK71D",
  "key32": "3At5TcE5NtQ7jS3rnHikYqrXqwR951LG9a4butxB9jxGL8AYnxHaK7Tz4ebZE4zfXKoQfMSUg6ZRJ5paXLtLtA4c",
  "key33": "2V6VRvyWyBs4TfSr1uNeN8bD7bK2AQHazkkpe7BpPfFKuMCy4upzx397MA2nsMCTyzpbabFMKYRBh2rVbcnXb1ud",
  "key34": "5ZnuaWsUZA3KeoXkyCoYdMpChuLWqVrTLbzPd5KUAb4AsZ3VrNYoBmGaXjZEt8MGubg2BnV5x4ZMnXTNJJdoCMAj",
  "key35": "4r47BULP2w5z7SiTnpeAy4jrss3baFGNofMLz4r2uP11AmcFnA3R95JoHocpaCYRWAoNAs45Zk4xYyVdr1E9N1R1",
  "key36": "5aHgT3WvWdfwsCywrwTPAbjAHmt1piVswKCw98rwNJtU6wEATMZiQTYkCvE8xyNPFpRvvoS78sDNx7dXsdRVUavi",
  "key37": "48JM8ZUBGB2cXxJt7s68MgL1GxcJp75sspFJiQVhoa2cuy2SQcHZsvzseNfYfudHBgryWz3LZLiYP11SFNgPfL18",
  "key38": "4FU76DxXxwEQ9MMe5E9QAdj57EvE8bAkU1umDAGwwD3iBnTsEi4qXtLffezAKmqAmbxXvyKitjzZPaLLGKBeHH2P",
  "key39": "327kRP2yedasfNwVD1yGGbnyLXiLyJQEjbSZihm3EWVAWTQuZXJtxouC1jtdMrsabEsT4UWyX5KQntP2j5woQb5C",
  "key40": "5bU18FoocELCjyxk6KyxfXDJNuqc2Vdg92mvb12r3i6uXPaU1Eix1KuRDykZBKSyr7uDjroQbUtVgkPiapmDBBh1"
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
