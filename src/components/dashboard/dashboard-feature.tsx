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
    "39F6xGRDyht2Kw3vvqTZTr1jvhywj3aRBV5RFA2AsyML2Berj1DXee1SHaLqinaDF8H8p3qcxP4FHHH4LL7k8yVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hyKM8f6ywQJUDp9t8xLvk4xtY5p2RWfATCno1uoCZUY35eJtGHkuFUfPRJ5C476cE5WxMMv21mwePSPcBu5ttP2",
  "key1": "3XchtjVnp4m3qqCrNYpBafK2ZnT7rSpK9YmFc7yaCCcCoUbVHM5rq6mRAiN9YwmHwvW8AZwJvkaPoB1KeKck2YvW",
  "key2": "3dBb9w8PhkNyFeGy2kreohTxU3GGaBBDxmCKBCYVphs7mqQREgBd5y85vp7dvyLYMbwQntX5rkqb5pDkqMseSWJ2",
  "key3": "2QEyCbov46biUmBd7NBPYyhs8is43C76qGMG3XmXY6h152dbFqLRnD4VTgML3g723JS3152fevUzfB9YFy1WFqo",
  "key4": "3u71XAFAZd9iN8ZbqMx23Y1PMQCPBC4Gk7B1PJvs1YKQyk355UTnHEWB4jbWSghzLBpEwTmsBRev4scRuvAymqRv",
  "key5": "3ZmMcKW2jEfQ2ySRYse77nr7BxdzPsf4niD8Ftqkp1CjvYUjy5vbFAqMvLMV2HZJ9BbB2H7C1qCQ9LPeNY9KuftU",
  "key6": "38tHAU568ovMWRWsyFhfoLwtqFuDVoDe3oMBKGGh17scVbCJRaHLDSkHSdDmqG6R1anRmXYFG1LibTADNKm7fi5L",
  "key7": "52FEiidjETuUfrMufo5vM6ewG8HyFd8dA9NF3P7rGfUdKS3NynQprBeyWxv15oikedhRVdc6Gh3bhXdNTR8d1JMj",
  "key8": "CHmC7PqQEJmKuGjFhekSQqN9xPazqBDoV9C7fnCkhGog468YgDgkB4nHw67Gi8wa7xwDUwKu1uRAiLeMGkdfMy2",
  "key9": "4f9qSyMSpEP7NPVPuPi3kv5tzFf3iN1HcTt44KswDAtmH99Rxpxp1gemH8YzGTMfbMGrJccjjJMcU5XTTeGosd7s",
  "key10": "Swc7jjVtTNuK9GCHSefa9ZPt14w4e562HakYDCxUmZUqV2h7NkJqBZkZDSCjQDrk54apMCT6MV1epMsQamMPzJb",
  "key11": "ciQKdMxYhPJH1s5tNAXAu3h3fgcuE9RY64Xt9ZoNBwDNTBzXo2Zs8WoFAKwXWkCjemoewnStMcF1bb8Xjt3Fphz",
  "key12": "9WBA1sxtAaSwYoJkNpUpzfdKNr1vvVW5ecqbJi3yFkthKKgVnZkT3nSuucWu6b32aCAnzF4yMRkCcdKA3NeBovE",
  "key13": "3t7bfmZtPXZwYgTDg2b81hyE9rACh1UVNj3T8YV1dAaNPcpG4aXobpm5iZWzbpYGrBWWrGPYvGyjQ1spDpvtfkyP",
  "key14": "5qTUyDyFe7KAor6TQ4faxbqEdLu8A77dVoKgBs2GahPeuDNCokCrRdavAwSj9D7Gnbi5tsR13Cax9hry23ryD7jk",
  "key15": "5iG344T41F76oNpQVCcBneTC4FTWB9pD4EYabmp7SVHWx7kYhDV3ZXtz6encinToFEKJcUx25gaYGSD3ZXm1obxD",
  "key16": "2JK3ngLT4oj59E5myqNMjUpEYSFnPymNYw9xfyj4z3soVUPnnD7qA4yADZTFt5i6Z1WEShH6F3Da6RWFZADnLSWb",
  "key17": "3gMH5GRiSCS7U6ws5wzJ4LFYrtQ8PN3aqy2thZum2VQ5buUznE7dCnyugRcj8v9aMY1NAmS3kdMZ3bpfnV3bGah7",
  "key18": "5aXNwKYG3Sb194x28MfpvyezKUcoc5WaQp2f29vNVzy2q83gwZih4ZmsxNbd6rKuQXSMQwsNaA2sVVD32v2FTPkK",
  "key19": "3pTKFhJS5HEvbYLtNcoM855d4zhMiTqiZxh3bAuR5bQYKwV3Q8WreiyChm3xZUtdsVMAmYLBMuVYxQQwqzeUMbZH",
  "key20": "4yaciBMnoRdj9Fv2qzbCCv4Kz7Rc5zWt5SfVz68LyiQuqcnCVyPc5raoPHEWfEWW4rUek5ae9KztPrk41QTdLjwa",
  "key21": "3ESH4Yr8nnPqRV8Xqvax1925SJV65RZbUKAqXT6jNdkFxJXX9B7AcGGGKffPfiiA3SvmsX16hHmFogBna6TbphCK",
  "key22": "4sY9NuUQcBWYALRLcYcJcSVzYqCnzrzGdTe9FpAtEyNtDUhQcbadUgJJLFYxs6YAFJ4Qrt6rjkJZQHZqn3agD9KD",
  "key23": "XYy7d99qNynWEGPWCDewKmL73JzArxx9pmHij5uMaGox1dGLJAmTbHJ67HAR6CAcHgeaL24eW3neXHi81mMKb1z",
  "key24": "3L6G3hknMcTtVDvRGzkCzRiBvL68PDUFEsXiGfNpAkMBG6hsq8cP6UTe4NBq9FUodjdiAh1zyybzX8oxw8eGaofL",
  "key25": "5F8HULD5RVvuwo8CmJFkPvgjokJAG39shEDxXw66ow81aVEmC5m5sNCDNuGiBozk2YrwfEZhxCBTrvGeANtEMrWv",
  "key26": "2rou4C9RmRj8GY7DFeiK73dXNDq5eCFrv16knWF1dofs3XH5z2v1WNWeiyFeCeZmkrbMX28nZtY1jmjwcJAkFGii",
  "key27": "66x7L65WFXYRwsrzfrkN5Qp4e8avXe6CNutd3qparv3F1sXLtKPfRGLiVAy2aMj9yQ8oWEgZQUtjAZzsDiH9UbYU",
  "key28": "5dWMvCkCBLPqPdR9iD7uzVLT1Fjzahvn8ps8hzgP8fjqsDgNtkK2AjaGa3or7v7LFGtsE3tv5GNd6LCBcbKSADaq",
  "key29": "2gEpHnQD3CreYax1ex8VhkSFzrqYffB6u7U7Cf9KiHUCV6ASb5pqxVB4EtYDkbfB77TgeEcqxQsxPKEnBpFRA3AT",
  "key30": "2Lj3nm7HyQaeYK1W8LyuboBxWE4Ktnuxd2kMTFwkWUAUhFpamxTHXG98fKQZcvGKhhQtCWEYzW2H3sTWkHkQfHpC"
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
