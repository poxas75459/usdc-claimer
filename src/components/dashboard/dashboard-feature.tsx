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
    "3Zd4JKBkHAe8P2bxfJL3HG9gykuZhauDEjqMhudPTedQzDykrCDEAnMpppDMbe95Ysgo5z36CuBJtMkH9CdFYNc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UcNtPvxLDnfMgrYNhpf9eqJWJgDVom3bXD9fog55uio2NjBCWQUHAe5p3XD5JNUTbFT9Vj68RK7gapesBrnrWkb",
  "key1": "4kWaUkXAmogsiHUYm5mcCi5nh6rbFACeiQB39twuRSmuxWW46cNwHo5uzayMssZinHc7uSR7P3eKGNEfCoprhNFt",
  "key2": "4ZGMRSGNcKha7yx3KxFegbKVEt7fXthXD6RJJAgiTKFXrrA8AbeezAb6xwbxHxyW5vY5mZCFiuqCzXHVWMr2APdz",
  "key3": "56SaCueqvF966w9pG78oaaxwgaoQv7EahAN3ad9ncmMy7obzYftonntVzy3LuAx8fjAPgmFPe4x5aZgygcAHDojB",
  "key4": "44PYHd9rWCFe38PczdsM7EoPbqe1gffH9sSgeXTb6QLZkfiPL4Ey48C51FyfzF9RwMHq2qtALBEv5XaiGUu4hLJc",
  "key5": "2t3HGW3eYwWSZ6cf9v9x4gkQx8292bsTBJhWQSkxtGci9xzTfVBGvwuWYGkoNuq7KyvgDP5xuEGhddCfJbipXucY",
  "key6": "3V2bRYUy2hvxSqDRXC4KsYS2EVKDt8EdqSrGGLpoeBheykzKUVzGdp56pkgkvemGPrSFserpdFYAAXQ5Upe7vebN",
  "key7": "4coCkMt356HkSQyev3BoFgFJhruyhKq8Jtgeby753EnPYZzC4vFn2sjxGub3v9GVZmREW3JbcbsPVewnzkHdenMZ",
  "key8": "2KmFZH68x4dKYYwERxcuw34UwzmEi4BPqdnN2nypsLMntpXdSQd4FVToN2Sj6RWHdhyRTs9fmrKSEiKEH4qXwMKk",
  "key9": "2M6o3iQapj4ruPj4LzQzQqf8xp1YF7nBHT8Y51CyrMb89v5mn2aYqdjMLmRRcLdBJxgJTkivD7yTKgrY1Uzjb3WS",
  "key10": "n5i2jdzhAm7bgMPP9P3BYUHAcmbkyysis2Jnm7UdQrmWqfN4Y4qEWqym6MQr4nnJVt7ZaKTDpNVWCkj3ZSeedBg",
  "key11": "Pdy3H5kjACUa8yCVovDYwg8xb9jtahZhHe5pi5Rx4i7JVSoubS3UVvr75gLT23ggE111Rb8v55woZgiee3WnFKD",
  "key12": "5f3EymjRbjwKZGGW2DiqJuEByaLKaNUdnQqJtmLAXcoFe6FqFh2ffQndUdyaxPm7rAJnhw5MY4KsEor6Y9CevXr",
  "key13": "3acDZqc55oxsw2YAsSZoTe9KG3w1sRfsuheYxg4M8R9bnkndUAcFbmivUDFLHXHDPWChc2JPpVHKewtLQ4dXjoWm",
  "key14": "4dVUb9YWWc6eD1tGdLPkcLb5ztAUr29NnMfnuA3YMwUbVd5Q9mcNpKA8k1dW4D2GVCfyk11uqiWPvaHTCPQQ7Fjd",
  "key15": "5T1DcdtaMDcZFnWDCEfhFVYZcKiKCHDaQpkCNqrmXkdUugdGnhFc4DWTQAEjw2ksdj1fFTmG2VcSC9g8gDCQceu",
  "key16": "3ztTSnDtN6FT7EjXWY44Pj7e8E1LtEVzN5j9N4BpSTFLcarbjLPu5NJ1GxRCTrYQfeJA6DCKCw4YpdnaJwin39kr",
  "key17": "vEd9bW41XqNHNjSCCfdCsmDwpBKvjBbXTQtvFttXuhjzUGgwdnAYo41MXCPzLfQkZxFSYAWihUjmT7yHm7M3YGf",
  "key18": "2eLzgecwr84ovUkgxkEabWSRCWtmBxDVMHnZAuHwUcpqtqMCv4CU1EQRDK45uKoakj9RC3rmMzm64nca5ExBttD2",
  "key19": "3U9BWo7gDxBc8Hwci9vhCeiDv3Q812uvcxPySKVkvCvj7AV4q1XSnfMzUUVFT9GQtn4nXwmBwayBApWnoqdFFqE3",
  "key20": "5Abg34HDKgo1WQ94C8pC6y47J5xoqwAaFr37tzHwBeHjrF9HJvV4fYjjpchYU9FxW3YEs9wUcd22av4w7N3whdXB",
  "key21": "2RMBsFVXRxAwxWSiyWo87fL3AiR3BXdZQYRAfGqwRzqBqnKK3fDYtaJBSGzxNPB8nfyReFtn3L9TaNcnxCsLvD8d",
  "key22": "5Vnp2SdnhzywCm9xjkYx3cJTTgudWGH7cai9QaXktvKDEmt7EeCU4PBdpVf3buAMTs4nrY9dJoWVRsQN26jZsvLQ",
  "key23": "4UjtZRXiR76hRJcum7VYpBMJX7gySLJz75TCHPz8CGCoWLoBdq5wma2BXo3k9NvrDxUfhP9c9BUcsWkAjMyoGxVw",
  "key24": "2UpNQphJBfLNsP4hYdxrqiBi7ZGzurnjirRL361gsD6zjCa1SLNoLdFDvd373sw8NCXg9NeD3uFJJKBHQoKfef23",
  "key25": "44BwksCP2jWNKZKHt3LFjeHJjss3o9NryKaXTzyNsLatfzcKcZT9S9XaG1EzLAFkT6Qv6sYow8nRxqfNa18ufhy9",
  "key26": "3gdBx7Z9sV285g8meaKxmwTKLpzdWXezqrFs4HGLvusq8tGd9yLvUxz5zqdU4g8pw6dxfDpkG4d8hEhTEdvoy2AZ",
  "key27": "d7ryqYtCzLWHiezPUkYwe73WZBA9ptW1RZE6XAnN9QtnEafizE2BxP2ngZPTP1464CZd7hzUrWnpyWNvdvAdfvy",
  "key28": "xeUsyCbAG3sGsNNFEDqdTZnnh9iNt6AKfhRgwRUa1rD2Lwb3rHEspbZ19wJAiQRmDwXLfMqfETuLAtYgTTyVaee",
  "key29": "4b2VxyeJ3ArwoptegeJPSV46meETwaS7ck7EipUcCDpreh2Mnct1vLDZQtQXgSHK8hy4Dkq6uxdeBEKLhTzunacA",
  "key30": "5mAiVqXsrh7otMRyErYyT7RX6ztT2NjhE4vwCKXNNFKk4UT5cz12wHK32w1XCYPzVqB7aooM8ANCnsFoDsQQxqhv",
  "key31": "4bArowRzfdfckFAdZ8P5brFvSHGsd2z1fTCDJMPbY1YS1YbJHb2JZqCS1BToeVQXxVy6RSXWBALP7xofYj6EP7qu",
  "key32": "3hdmiiMw4VaBVzvBpW469PNbZ9EPNKHSHWffsKgZWeWznYF5xc4fFefgF8f9koS7QjG5QTLjVKTtdhMesV9dpf3i",
  "key33": "VKgzcQp1iHQYuisjC8roododrJ1dThpDTTnGntHJgLfkczKzvujHDXAahzxk3sejmNHiModqyijMqEoqRRWqGYo",
  "key34": "63XaS7efMmy8xypBGxFQ7Wxgs5zYeZzm9SQSqtXqLsDoscGSVRfeAjJBk377JWvvbdguqgdxsLcteDJdvb45TZG1",
  "key35": "3VP6Esf9ucGCHKRQQTsebGR3yxjGazRMZEdXD7CVJccKi3iMd23WJBYBCVvenB3CTsLLrH3bHnbK1GDMhrAtqMnN",
  "key36": "4vWvAnyPwyzHnSLijE1ZL8rYFbgXCzBYkzbaNXWJqSrK7c1i2jXwUZNMAFjVYiusVoCb2baiK591x1wTVEvMpAsZ",
  "key37": "5vzkXnrpL5Ue2EgV67YFJHbqzABamBDuCfjfAFFpRogD1nZVSxudtSTY9mzSdnbobCJKLEX4MSuHNLc7fnVwMMuC",
  "key38": "WuNw3dUqdHeNAHwdYCrkcu5h8oKHUZoUZwuUWsW72LHHGUWkmrFFdctE2mXFuKSXsBAu7dBmgs5oN6yZCzSrkWL",
  "key39": "QHP26VSpA3gA8PgWPT2H4kAhHCPxhoPRXufvixsTGy5E7J411jSJo7F1CwrsrrMy9ujPpqX4iwnpJur53iMkUiS",
  "key40": "4Rd8CAbdztpv3G2xNttdYWYbgwiLYFreaggV3urMmCZ2P89pWYq3U1DcezpgrG9AZh5umsAH1pvV7VdRTcyM5wwr",
  "key41": "2NpGzW9TJmZZAvdjgzKLvXPqqFq9C5SDJok1HcvvaY7J3QBUHejMR9YjB2PSRHUJehJQPqqPy1TZV9G5BLLRYCpg",
  "key42": "2qE9tofxmAXsbT7W5YjFLrgcTns6MCqpsqZGZBz1vASnRxWqeChS86n4BehrhsPjeUrXCNxW83GsfM55T2a3sdV4",
  "key43": "4Pz1YwXnBP1mscMPyBj9VE4GdKqkYQMtCQ1gYghmYzjfQhCMDtxgSgp7auYWfmFF11r3TAggyPMeKPJn9NV7vcHi"
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
