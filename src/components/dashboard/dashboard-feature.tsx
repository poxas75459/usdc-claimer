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
    "BnVQHvPZv2kmBxeKNLK2eNgMW7UjJaDsRgHZF7xdBUqxPcZVx23mmHpP1ARvzJEELjQUi2dCfBbqfMrPLKRQF4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbCZkoz3yEDX7TTHvrCCyxVUF77zj5HLewdNqwve8SFzg27DWR19nBfhHEDF6FPJyxyxcvWaR6wVpn6z8Jw8LEx",
  "key1": "2daLGbKNHjVkpPvFhf8h4ixVrTbVm2Mx22TVn7RtsFWMgFsHa5eFiCVL7i3rkiUAyRrKuGjBD1ap9DFqHJvNVkSx",
  "key2": "4UAJnpE2T81xfyPM1mV3berJ1GaEmwY1yGDRHoE4h7NAohDMKdyY84aDWNzAXuk1CrWFDUbAm9zcy51VJZLTDotZ",
  "key3": "2JY54jiUS1gyKj8Y3LfVR1GmTwTXae7c937eWaEjpHAR7nELGYtSturXvYyuf2vjfmZpZuhUQTJ71BvwWfArrQrZ",
  "key4": "vrBep7osNZEwYJWTt17pZRsgvjTGoutF4oGKzXfAwLauGnEPzc1YR7MYo1h5rArH31dNTNkDLir2KV3bfyM8wcx",
  "key5": "4Boh4WN8QVSzGrQZPT19CABHn2qhMrJ7krLh3SfPy6f4tLVtS7NmfZeDnVQoP6eH3amr3jxn25t7u8xGBk68GoYf",
  "key6": "EVayZSwqnAJwApYaok6mAeMs8yjFpP57no6Hi3KcnGTGbZcRDzvD2P8KFNGo4oTypv4huqKZgDBDViwve5T72hG",
  "key7": "5guqivR3BhhBKydgu4NoKw5xdN7ahD5Fosx5JmEdaP7nzwBJUPaFZzpqtmQrtZz7ktjya8kbzgCaizMRdQXVuiUa",
  "key8": "45DcTWZ8KdP23bmrgcJ53TjBpJa88pFqx3Q3nXL56kRybkpz5CqrEZSHSByTPYx3BLnwt9Kw8bRJM7FjSLeS7kyK",
  "key9": "43ka6tAXBU9TNVWyunANz3K38BU6UNefAErEc1eXbFxRtzypYwH9KFCGMd93BXheTFiWi6z5jJtmLbumCtr44wyk",
  "key10": "5JA9VDbRmSZQGnw3qkcWJ7TjXhxYLAc8ADSmvUV2xsvb4EQjAXRYx1z3Qpd1ADaBVou9cM9CSHMpMKSCEq3RJ2WN",
  "key11": "4kgfa55Shkbbn1MRf7cEf7aBHx4thB4p7a2M1ZYGYdc51eVaVq7NhajWFWQCYmuCzrfKtotNJu1LseFRQih2N7jj",
  "key12": "3sQAbPTZXh2a99vyKUGAfuBUs1yqQnrY7vRACGaKBx32zzDqpQeM8fuaoZDimnFqeRqVYztQN18PiTpauxFnvLy7",
  "key13": "5XkHQVxBJLTWNnuKzWvWHvT9cXgdG4BzYLwAjVKB7JepwbtcVq1AWxioQLXDKTX4Gn6jb6gjSVyxx8yWGz1VFnDY",
  "key14": "5hiZca1CSHabtCY8Z7sL91o52fzXY6PiU8mp7ZKih194cWzbUDdbB8RAQ7ULJAcXZjKFYF9vJWNe1PZhCRLSkVPi",
  "key15": "4HPCjKr49wnQRrNa3bvex62kUFU7CmsTB3QpbDRqYAvQpL3b9JYniFJXs6NDcDrs7Z8m2XK9GKineC8iXyJNQsFJ",
  "key16": "3LmSPaRTRBYDoaXtF9iNQbcx4LMyPNgGkzJ63oxzdNC5RS6BMLBhkrNbUFYm9cJBBF7XoSJuCx4XqqL5fHRPAUAn",
  "key17": "21nRGXc5gVTuhDbRJA9sSNpV3L1QhVo7G9Y4umoQJq7xHqLNjVQFtofLpQ1cmjkhbXye5cWmxsb3hXExZSQtxoyi",
  "key18": "23TLT27wambuUF2UC5cAuiE1gvdBKFCYeKZZtgugQxau2EEAZWHSDP4gAPsUgF9bQMSKNF9yHYfnq5p22fyqcJ7b",
  "key19": "3igJzyypy2JCN7xnqHb5HGHKAA6ifXKNQb5P9rsxExZVzJTwP75FajWdJPJQ4rvBfwzDm4eB6y1YB5hURYsqYpZv",
  "key20": "41Pqoyvnr68nXCJv33nGSiRFHce2Yfhcv5Bk96w4kKXa62ALTnVoc7NAvRMgR37ATpfcwd8WzNDnE5YTcd3CUqJR",
  "key21": "3pppkv9U1vgHNdJaSkCvE9d3gyZs5sfvNzj25e5DhksuE2h5Au6CSJ9TDNGiJHJFZUeGGDPsRKQTR1hBQtKFLaZX",
  "key22": "5C7Y57rQYwhryjLXydEMAKB2VDEEoB7QKDUTTiYq5sodv6ZUoNFqYxtq7WH2BwZnwjJdVvqz8xnV8AKksTm8YkAn",
  "key23": "4iTKt3CQK1yaAXkPYdbRcZrUgbD5RNiibkX21BfCUp8kcY5NuEtSQ5g12cQ6XZRhWUxaUvxjXMXpoFMAveT3WeVH",
  "key24": "GfKh1gVCVpcL195K8y7Dipw2Rxv5wtqUGcuJGBfS9JmJceZ87pB41vP8muaKYCWzsTwm65z6WvtF432ceqbZBM5",
  "key25": "47TigKHYGnZmpw7tXmcXwJMeVWSTUajWV5bmNFeY1msABWipQ3p4aQ4ckQo7QAjCuhPpcKp7ZuzVHNsZb5J9tKun",
  "key26": "5GG2nGugypmHZfPFHiKhKwuCeiSNsvkXE3hMW2sgTqWQZH7BWXBtkzNu9GzSsHE2wYvGxNE9WepMPRFXDxxycyHG",
  "key27": "arkmX2aMVhUK6NbCWpZDyxj6r7QGYJv669ENSSUmGS6PumL6hCAKqvUuU2Rf2qKewRjod96qQRAV9jTHuVCuhGQ",
  "key28": "4pDFRPwD4i1NhkqGyhUEULxJf75uEvJyoT5c9isiijP3F4ainmdHqBrSFDcASrNUp7G5Ntz8FUHuWbyV3njKRyy2",
  "key29": "2Cm3wnu1tfGqJMvTkCacoXmcPPbQfVsRjZ8Y7sE2LedE7TnYMmnx6z6C577mAGNQUC6mnnGJb9WvTz2ERKjfQq2A",
  "key30": "2qoDmGcVLRmoeacj5wqyPu9oGdkLsQBgf9S3EkxUE5QCSptefRUMMBWRg6GkMoQTLy1ok2ZhZtzFD9b4C7pkF3tL",
  "key31": "2inv4fHuiK2wXU6BvyGAcGsXpCtNGkhhLGpPYz1mapL5zJBTJbFVX6kX6PYpirLSQwyHx3EuGrvQ4Qn5xpMsx1k7",
  "key32": "2VE2Fzfd6y7dpgmunRKo94tSVurNVFaiFVqqjMNfvsZvi3ceZV9KQ3HXTYyNpcthbG5f1BCYhoX6NSb5JeJEGC73",
  "key33": "3Bcvve8d2PCrJhgCqUm9pbHqQY1GqBtqDsKyoyBTBgmvWmsvog7h487Sy6uStPvyMfAwgqsgCuW9ow6SjoqkXNGA",
  "key34": "2mpsWW9jmrsSYMtj1pkjmEkeaT8Wkq8hY64edBgJV5n79k9oSCSGGXq6Nc5YkV9LpWdEHsWo5uNDJ1T9yskAaT5c",
  "key35": "2d6HBy64B7UmDUBJFQdvMZgeUvufBurFfoYhZxMG8PrLaqPvYX5HAGpDb6GVFzCqp1BinVe63bcAU9qjaJvH9owx",
  "key36": "3EEHiw4GUREpRSTAXAYnnQ4rhR4CrPUmykPKD1MBQzQtMmNhMjimYRcoZV7VDBoohGrX8cdZjitdQva6CdK5RJhG",
  "key37": "2p47xHYkeS9CDCBdNR1tZTAMweRLMipKamjqMbrK49u2zWNoBqEQpRz4YA6yarVtJ2YCrdExPuiqrM1CL5McDQke",
  "key38": "3KwrBkDTbMcEGrv7cyTyFTvR1CrPN1CK9jGddscYzS6XQ7ZXRm3qwpMa4pMmF5pJC9cpBHDboPft6hrHcUC8ia85",
  "key39": "PWeWKGgM8VuWyGt8ykuDhU1upTNPFYWWsE84dNRBzqaQJfpK9KjTQGG15GZFwQEykoH2PbEXrYKF8kPBh6Yayb5",
  "key40": "vkAkRTxMTTw3F8jmjn8DZbx7P3ZvMmBexsVVtTmtabBXictUqBPV8LvLvfUabTBo7v6mSjCvV99EYAxx6AyBuyr",
  "key41": "3DBNhdymYYH4zuv65ThUqTZxjSKp37ESRp6vYEy427LteJdRv5cxAarwRyMDDh5Djyb2xqBWsEp1BwJLGm5W6qt9",
  "key42": "5vqTAVgd98BD8RwPwsuQHDcg51RVsh6sd7KGQVWyEBP6Ten2yyqBFFekM5js6Tr3SduVuHzZv2m7kVc9Yw8d842B",
  "key43": "5ruRanCgDdxxZ3Xv31G8eRADV7oX7E6HhAmajh969hvVG49CukJx8Av9sHJi2kWaJY8oUgvXukepaHm6vGVWLsan"
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
