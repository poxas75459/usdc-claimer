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
    "3nNbXCryP9e7ctdQiE5gxq95mCQuMe2Kcs7RxD9ycnwRPgRFC2D78zgfq5g6CLSrj9WYgE18GqgfLNZuygHJ7kyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgjQBLK5DaN7P23TFBafA9VNQidqBMuWPanVMttRq5S2Nm9TC6W3GYAA8Qj4wGKyir8bCN7jZnSgNvpqZugDovU",
  "key1": "5RwAVuQmsuq54zN5nqKhsoRGenw6F8Hyg2YLY5BDYP1TnaUkBBZ11nAK34evauLurjZ5Y9MVjz38SS8mZVx28pTH",
  "key2": "4CY7iQFuhoHoiWWv3HzhEYdSLCDr94p9cVv7LmYX21paNyDjx3DVCMyvPfFGutoVsSVPP1xv21x1fRBHiWFj8kea",
  "key3": "5b7WzmQH5pRzkajVLUs8bZ9qt26heZjBbqqMgxgA4cNBjJ8gZBhK7MWgVtf2y3FBLQos8iDHHBusR4iigArDRa6j",
  "key4": "3ypxWkt1DABY4X1PJdzKwemLWBmUoiSEuKojW91YT2UzniwGbphkUZMwpDbkTVoXSG44jyEekNLk7sGL1geXkeYa",
  "key5": "5u1MMAWgD8aDXg3tukgBHG9GHdPkbL2t5smnkWkqJcQGefXzGDqgJL57xSAozS2tNosToSKKP5kdvZ9ym8M9RjWq",
  "key6": "2RTLwjofF7YxGiUFH63747WxJb8LBfvcbxd9nLA5zaDGWdFZCxGThmGLperTXRXqbqRw4LM4SDujxvyvRs6V9NNr",
  "key7": "43SZaFF5SyJLgamwLrszRtvnA2v7H7VBgFEmSFUbFqww8GkkUeu32Xx26Dq6RjDxRfpQMcQigVUFxwGv3isx3jhP",
  "key8": "4bL3zMTeeBjvj4LD9MVFP2vdTJ3gz2rf41wGZ39fwxCPWtrj4tNiMHg5hnGNim6t3o1LatTvFhizKYfdUwMmfC7z",
  "key9": "w7NjskpzkzSiUT9fZnGy6isJ3bXj4mRJiQU7fn5MFzyKA4MUwb2dWsELCK6XnJZgm6W5QFU3ocZ3DYAZH5Zvt46",
  "key10": "4APEXDcNK2kxrtEg4nwNRjP9PuEHgfPdDovXiNu2Cn5EXrC818FZMwJoh3kKDkp5eeiKo6mC8kT4v5RBFf5RTEdf",
  "key11": "2ePwsnitWL7DKr5qe8MWmoN47NcDMchq2SenML3hXg4YWo74KTxGg6DGe2Dvawf4bZ47eU2BMtnzz25aber2hoVW",
  "key12": "2tKj52MfYLohydCztyh6va3N3kEgLBfaEqf12LvKn7xcVCu56HBGGaaJRahyhAG65JusC8QdKszsYAa3i18hBV63",
  "key13": "28HgS3MX75WsPrD57qyK2TXM8yNK9VeNJpCR534rBNuBKe7RLya5QzmAYXHVocw7Bv86rD8QhX34ZApVJMt1BCEX",
  "key14": "5kxUTofbfoeZpLgMZF216X6F46Xxi6MSR1emeuWfR4f6P7Zedx8h27P6wa1sk4aX7dXV4GQd4hhL5wLCe89pJ3BV",
  "key15": "4Vm4WfpPqhZNKFfox4gSBZymKLigLPzcnUq1NFFgJ1CcMLHAPLUAUXTM8DykVXW6iSr3FsLQx1RP8HjAWdUopskt",
  "key16": "4EppXUPZZCp2eArziEgyfeK5gRZsEKPQK82mja84AVa6rHvcezCcPysmw61hLhNJ9LSKUHebaDXbapNr7wtKDRnB",
  "key17": "PrqGqGCAjjwpmQZkDHoH9xo3ZU5TyKcwCPT9cVNmvque2HY7MaGLjgGojJ2ETi4zLSfaCcDqrKySjp73AppL42L",
  "key18": "3abomWhy4xrVkb3QQ1ra1F4Y9ByS2FEDmhNAv5us27ZCAh5JK75uSVNF9gjBQogfCfW8qgeomNBttrdJmaeMN6bx",
  "key19": "62o7pk2aDjaWrCbz5Z8smTGgerS3o4rfmnjK64ZeiGNzQQY5s9QMAVh8kxVGcJiRWfEZNAP4Kta4RnGpmsBYzAzz",
  "key20": "5HweRVchGVidHsXde4hLMusYp89u4hANURJGR8G4EyLyXNV2NsZ5tcczXoyhztQF6gdBVnt3HfVfgLVhept6kKmN",
  "key21": "3Qq8V8CSQJourXAvfRTXMKVsfzw5egELbkULnqXRMr3xNQBDCAVyMENPATj4HRMUTFTA6QD1qGNio4wypg3cWHSz",
  "key22": "y4N11RcugpNioKT81k5Qu3sxgHQHuXtcv6dWE6vVqZFkWB2JwojiotRSav4iQDBZqfriQp2dWnCRtkQtzFZDJLr",
  "key23": "4T3c7WzD9FimKx7SzwKZof3ppeszMwzeLwWKfmU2JcTNFzSkUsdKrHosTWegsdijoJgXWMXQLG5kkqNdejDu3Kgz",
  "key24": "3AsBdz8DJViiuZ9exR3oGoCoDUYJFUoAgGtJhsGtS1YhM7vPdFrWSSTdpYQJxY1cY3Rf4URstymPpqsBFjdQAwZu",
  "key25": "BqwbNJnssPod25pzaoVKhgy2oqpPKMXBhZv6Y91NSdjrUyTd5kS63eBVLpBiBKoqjJcHckuiombQnciU2csyJmo",
  "key26": "125ZHitikoDGWMLNu1BhekaDT5RQdq42nhJdj9ifH1GHAb3Wyba2SNyzYE3SYLZcNYgThPSQk2cAFrWUDVNHKLMN",
  "key27": "5kNNZxbtUsvVYAUniYiw9vD8k9mVt1ihwUALwfDJfYXGR3i9A31cyWuMVpGayQH1xRmP5MEZHYQgenf2J4fTyziy",
  "key28": "sVtHoPSrtTFq9qwf8Nb1hTSdKXRoePcoMqvsVba8DCn47hYcBTaXSKxLJPC1kmDDjNMUXujhQvPMPpPLKTLQCaw",
  "key29": "3Fi5ejezwVuZpSxnE5ioA8z76yn9M2fZoeX4eRtW1ATqjHBKbG71KSrk3HWDCpMjiBNYQEjTTgFv4zb1dGbq2CCV",
  "key30": "Zpg6C4LFw38otQN7fTQtrT3KubfPbhy7ghkiA6Yhdwo7BTXJMtVVZfgMecL1kSvbabGmyZ7ynH37XEHy9ypZoUV",
  "key31": "57rZ8Y9amvMbA9z2L6sGamD199J81tHoxwJBFC9KPdY2JPLswYNTgmAgEgpzeqcxy4iAxZPAwTfEN9L2KnsjfpUD",
  "key32": "iLsemG4tt17yr5oD8akS2kSUKckWFf136CaT7pDLQP1tnGV2CuD7V1STe2gmANxSmF6VVYgs2MoLHjuH2bDhNcG",
  "key33": "3FLNhDGSNs5acKFzX2PTaZ32mxAr9hDJFznH8jBSKigXJb5hXq9r5MRgkdMkpNUeNhvpEGfgrC7Wz3oaHZ3qEgVC",
  "key34": "4zXkDWPHW1uvorUWf5ge6kZNvCNsyaQpJ6MBycTDkJfjcHV8u9jwdB2B9p5dW55yEhHeN2EG3Tx7j89xG7dg57Bu",
  "key35": "33q4tWDk1Zx2RQJcbC556KHCUTsz6qsuQSpwkEC1cx4UNh7wc6mArAUbnn6iWA8o8Ef7S7cZwzA1HVjF6WCDkbWy",
  "key36": "3gpTXCT51btdZgwBmsHWHHYdv1F8CfcwoEdpcHMUzTyUtNHgXw2AWcinDKnDsHcPGgyUvFCWYCeiG1saozVroLSp",
  "key37": "5q7CNJ2Ux6hTsguqJuxg9PLFPBWD5DQBRZjiNLcfYR4HF2TgCmiGFnCLLk9UcksoFLs3JVwNV8z6H1PWUAyzrxL9",
  "key38": "3XZKxnjPSZLtL8R6L4JBrQGzrYwxJK4uc1yAV849RZiT7EFf4D73xAxbyhouQD8XMMTJFXxDRTqJMqfXLUFW3jgW",
  "key39": "yTmX4BmbLdwn682L2RHgQ37tajj2ifNbfpwF3yZu8RV9KQUGBXQdDCPxbJxULTjHwEj5NeLUT5t9bULfQRKWuDy",
  "key40": "2E5m3uG5hb4T6B6MNXvog6QWkfCengH3854MrfGy4P1jmn2ts8g8ySURtAx8NgUvFn368oLBv9M7kwuSkhPCbR4N",
  "key41": "F9eTohDhfysXHmoteQhEhqMDvsMGe9KzLjfnmaofYWN4TAX55dvsRyYBLgDj3AjzVvyFdMsHNVKW86PwRTcGsJf",
  "key42": "2w4bNeKdefbo6vtCtdARcbM86rZdJdNAaBy31C3umi6hLwnzmCnxddyDJQLEXqBQz1mwCTAJFhbYfGQsBMsNr3HR",
  "key43": "3929FD2WsY6PDsfRfDnBHzhSe6qdBM6VRqFbLPFQRoUCAqqhRxGfJREhjJHC4QBk13VKBVWSD1gFHJYVR6WHM39b"
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
