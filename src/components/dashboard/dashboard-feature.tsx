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
    "4bD5JSZTpXvHBaJ1AnSrQPZfyX4PV7VBr5NzgyU4U5PdUmczmwLny6mrE9XJdQ3uYsC1ikHphNW6XWuyhRx8DSRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5Ug6tZDcDjzxVQYENDbsn9ocGhSfSqKRouYiBmxaBEB6hZ1zAJxQ4mpKUfGUv3a9gjQ1KAQiFhPU51KWMm6Qtp",
  "key1": "617TLA4Pr3FbmVBNqAuioG9dy9t37cZtK7iMjVera9bcDoRvDrLEZZAWumLAEJzJg9h2k6wzhxPkbYH7qjrB1YKX",
  "key2": "32UQFjjsBYKdSxJXwB3w1yiL9PZtUHH7XKnmXDuq9SPmn52CXAQ6QqhW6aqjHkqGttdjK9ipyGdn9TxxniAetMFd",
  "key3": "5Bdy9pG4Ah3uryMNzT9eoCJojVAHoB115smscSRwEhVXPSEvqVzDrvBhRUCFE6uxESijesBA3tppqq9impRkdmTR",
  "key4": "38NwPRSAjyqZwjwm6fpxaG31cgCxHrbXFiokcfJEFY96CuRrZNLDMWYx5K2RF3EYAAPmijDbkqf2JhqH8iQAD6hM",
  "key5": "2jejEdXV5erkHAe5AHz26dQ7xQCuzaaYH5sF7EJGgvCfuyh8Ric3LkqWjVgWqksKhtodTHcWU5d9gYshJFRuGdrg",
  "key6": "2hhcbYQ86vRg7vkJZMQgwcncSxx78DeWfGhUuFS1gHjV3iY1gV7GDk9FW4BmGZX6dQWiKq7qPv6bNNdNgGPVs35L",
  "key7": "ZqvEWSoFaMFCYPfRUJESCJm7uzeYjzAEcFVgk8qz1yroSLPfACsnSm4BBoh8eaM77a3agHKzvz2ZbXzGpCLqcPH",
  "key8": "2EcyVMkH5VQUDGoo5Myfxu4VmdJZRYQbLxtKE95tnH8rRyh3VAWSV6QE2GA5ryGzquAEphtCUsA2QecuQz71WQBg",
  "key9": "4RH8HjJbUZLHKBv6PNHvqEujjSFo8cvAhRNiZG7m7VzDHmFAfRw4d71hoHJBJKe7eT1iBdC6dKgNiSBhQ2m9Fsbz",
  "key10": "5kNad64dynGf5uZNgZmfQX6Vi7oCjCyNXYiWLpjv1WpEj1tXVHfr4dvneAPnNYHq27pnsjnBks9cA7n4iUZyKujc",
  "key11": "4F8Z76SfmWAPxfux996cDyQ7Qfp9Hd3UBHtDm4Ev4FW2zrJsa8Pxtc2sk8ie35Y13AdTKmnRVURfvtLrh21cSjUx",
  "key12": "3okyqEtqE9NVSaSMkrsoEXCAYJvgt4wJjGKLsYybpvBBQfRm4ABYainzMtK7wTW26h7pUuXnB2dVmqrkMdvmsRvC",
  "key13": "49vapFYms7MLEJiNqbUrsDK8fYvzxb2mry5TNVGGsZz4khU1PUHUKu5VSmHGiDkuvayGr5rZC6jHjFVC49My1GCN",
  "key14": "vG5uUXnidUknkxQttDcCvfcSFxSbrUQWPC2c7hwjWSebtzXdsj7HcsjQAJGdtD96jQUkkJrCw6gntmGBeJCBLYb",
  "key15": "53Z2Nh3fYcLC6vX2YDDzRHBWGo2VtDCh8ZUu24G3zGCvfYyBPnv77GnE92MwWNRkJ7tJbBBEQ4H73BkQ4wHNfkWy",
  "key16": "LG9CmXhUkV86WNNkz8FCJdXc5rKo4S6b5XPwJTgB26ga6UpoXqzbzAXb1EjQtecaseGJ5TmUFbxsBgPAZM9yFRy",
  "key17": "xYfp5SjziQg7E7h4GmRSntHNnZ8MKmikvmsYLakhWNyAVGtkTkRZRTCMjwZrKhdzyXGMGEoKYJP3syoDQw9FxL8",
  "key18": "3vvgce62hWRTQK7zswXozzw8nw4VXH7rbSq8VH2XkE6DswhCdxixxGvfaJhSHMeLLHpYRWy9z9NWbq2HCTGPD85",
  "key19": "5k8WB2bBPPvuFTgDp1oSkTcvn5gNV3g1UxE8wNVtxjXVQ29nYriuMRoEJkVVLMmwNMriAYsZpKUWYPC7yciEwbpc",
  "key20": "3dz6th3W5P34VPosb1UJNuLcff5iPdorj7QzdbLNTmNwcxVfw9wpPMYTwe6TkRj57G9jz3cxZEgPHTz13T6zpbGK",
  "key21": "G1dDsXSQYrnjsPmLkrNRLrfKcAqiXLrs1zjr5KZqE8bE9PjzqdqTooeK2bgTEte3c2SucZ9UkzHGavrKvUEf3DN",
  "key22": "aenJBy2JmVkYQnrb3bXfQ4dvLuM2CUw1N5umM9RFC5ak7e5v8ouf7Q1LwNg2xHXUQTGsNdj8RV1a8PgHUfnfVMb",
  "key23": "EzhzKMzw8FsuFG317NXjTwBCticw4yFJDUNo41taXHwFTHVp5dpTtEPFK6AnUwoMRkDt5NcdKNQhdyh2m2pTf6a",
  "key24": "2xriFowTajzgfvwnRHgcczUH3d1ZBC8YGs7WHXFjDiLP3MtmQYn7iYqrNYMTLHoxiRHVRuL9acDnNNfYxbSQEvBT",
  "key25": "3oKGb1cJahtCMzAXU2h5nLwpUn9eCHaW97tbChvxvb59yYoMzHHpfFwuBWFzch6EgqYQDr6tqJQT5Esbky99ophM",
  "key26": "3setyNjqciwABUQAKu8XVuvUVoRZ2ShqJZJsJb51uA9NkP6MjSWodiQPWtMMtCtxznZ8a9QjVafTd7dhtiDvb2oM",
  "key27": "3fKWmqJwL4FPmD6eboR9fqG4PTzWNsFPSmbBeiSLCGn2uBKZMNavkbBuX8xv5wpjEQAQ8UewNLjDth2PpyN3opGo",
  "key28": "5tM5v2ooXFbMLC9qozWN7c6oXC9bGMuPt13EjBUw2PeGMaXEv61YmJ6NCCkfemaWZtvpVKHivoUzBunkPum5QYkY",
  "key29": "4F6bqcF6sdJPCCamFMHPxFCwPvsffcSoXm9sgR3XDeFaeVTZ4KYSSxgwUKm7ryqunnrPHdCAxXgWTppjaRpvYdvg",
  "key30": "4a9WLgQPAFrKq9JGsvo2ewRa4CjVKBG9dnNnJpdh62T17PREcf8ZSJ7Za3766JQmaigZitJaND3jh5zMiCGjPANj",
  "key31": "67drcidPSAPKSXGDmFAsqRkYsjycFap729oBXu5qxAD7PixsXNjqHmnuZS51eYaxYYiPxBxKBA6hBaMfxMLGLWic",
  "key32": "5crznYaFUubw7CZocj8uXb5rkTUFtGVp31pgbVAgvbE1pFzJ6PQKxbtUwVEEjphoBz8oDzHKPsVgUbH8cHkQFBhd",
  "key33": "2n6YeUeN8tEoMxWc7FafrxduVVKNECpuNmRN61jnX8S1M8GAu9ExJKvHZfe2tGM1NN7MPdJHdJrqGUyhPkqREQhn",
  "key34": "Yc7HjCBCKgieEH9fU61VSA8c766HyG17tTBNr8vZoPf1aUdUBJVmgiLodkg9bSjYrJq1Bw5p1umg5NRWiJp29L2",
  "key35": "ySbXcjqWTbnncDugcfiu5ZzYak7hUphFe1DvtAYFmKNbxbrJCHWCWub6Hs8Rbipg9Vn7CAAR88jDPgMztFAydi6",
  "key36": "2ktyHfSC9WzV7GGJ65FXQ8s9JTP3tsQQzf9FvdD4k4YD33nj6DburgwzK9on1HQynH4iAUWPAJn7AsYg2pgtwYLe",
  "key37": "2TSxU2L1wC2hPKsu46hkai7hCeczGqpTDejRfPHd5prSMgjnu1WuEaBr5LbSHJowSqNejFZqwUxMNiBca7fGpkyY",
  "key38": "5ETsuLYkRixRqccK7GaP5f244Xc7cFRmXV1dRcbEVkSNc9mGncMH1KqpUBz9gicQePf2MFtdXapNPdApp5u93nqd",
  "key39": "49Kz4UshUPJctA13JeGMVzbxyVuvSGVwUnQRw5RSBnrusbawfebYMgEgvUVGWrBqLPXZtzErkmXix79hCcmKvbr2",
  "key40": "3yXd3XUxJq5uruPccNdmBPGcha8ZA1JjQaTD2xUfSMkpnM1Prm8EP6gQiLeQoeh2iuLXqJz2YQHo8yqhqeMRw3T8",
  "key41": "3nZBohet4wHnPkPTyhXQ69yzsuBc1PbxkBXMgkBTYTQkobyXKpC29SiD6hVjBYQjompMeQcVviECfEsQdHLTfz9C",
  "key42": "5kKnXsZVSHZKYqwoe1hn6ZXR7y9227BEBAUfMnPGzwRqqmvmWddJcd7WctW91tej2Fg2uPakZWDSBRUGf4sxfvz7",
  "key43": "2W8UgNFeJWCE3gc6ba9V1DT1LJnK8y2fZPi5YbF8dFTzZjeNWExUBUrYsPtx45dEtb5D3bEWeDeMcgjmwyE3kSrM",
  "key44": "55P89ArcQKd7JUdpMgK1QUDY5SPCNzLqym6TRK2pUwavUKVLKjhX5h2uPiHDhWfHTu4LrckwxLecSS9jhB8tdseq",
  "key45": "3WJsnEEiKC1uW9JAybp2AHzwu6Jfog1hD94W2kZ9kQkEvU8r62xdy3c1838xcaY5u6RQjGFyQYkKpApsGtKosjVw"
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
