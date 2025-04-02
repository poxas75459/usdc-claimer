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
    "qVyiDEyg6V8qiqqRAEeyihEUAUMoFjhd3CXZ27JKHZmMyD5QUPSKTa4jvEEWBVtN78H8yLPSnjcZbAwMpWwx5Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oWhfuSdqoxVmrwsTeefQvFhT9GKx5eeGN6R3PW2b5r64zrDcY9LBVbSETkY6nbgMn25dTiRQ6Tcg1yhFcV3wWKZ",
  "key1": "SLAEmmdKzwY797dVqYZQBbHJAabJ4uf2mHmuMmpNRjoDLhaPJJesoFLKgsVUht7KXKj29YFLabp9Wib4fFuc1Eq",
  "key2": "3kfZvtCHANiwfM8gQcKT8xoF6X2qJfxypJpktN7Jr3QZGcuUy1Le16NYYBR6REyzXW9saTHo1KiWgdotCVpEiD4K",
  "key3": "2MicV99GRgM85ocJHrv2vVZuc8pD6znqKymj1ADcpRgeuAh2NM8ZgybJ8t6QVx73wKggyZE8dghib1tCUcPdFCqy",
  "key4": "4T3ujdNQWmLqCGn7UkfocoqQvG8CqDxbiHeScHQnxjtvF8RfGZcL6ayCiAreGkyDp2d2CRc4SDPSgMsvADuHSHqH",
  "key5": "Q3groqsLad1AEMKj7BM6DqTmkSEV4yHbBrwrsG5QPnR2jDosNTCduKadmGgs96n1sZBHrd9SPcrHcX7xqttMNnN",
  "key6": "4nrQkPQvG3DYYAKbJKWwYEqA7ccoxiw1pvAjjMkmfxSsQoXHxg1czaaCTM6oszK6WVAYcqZPhpurqxp7NdB2R2HT",
  "key7": "2fJgkMztJWedC8JsWkK9NHYvHRQ7NmEif8HE13eiYPzqkGVK5wAEUgfeGH6JN9yY7VQXPPbeqL9vmG6phWoDsNb4",
  "key8": "2cBMJ3SEtKkhEEp5KSUvRnTwtm4Ude4DAZq7e4yfPKwbsVeLy77BFN4w9AyMi6gZaXoqgx8TMs5Ry2QKVQN3F4xy",
  "key9": "4JBkQpdtcQMuWV7ivGjL6JMC2WAYfQmcde7dyW8d9ZnZp1wpRaGq4DwmoNjXVJ7XqjaZncj15GZ56nkNaLGzfBSA",
  "key10": "5uWfWSHMrMEeDyYYo5gchykQRZNDx8GmYcNY4PqqZkJaZyDhtg9AKogDtW8dGZLaJKEF4c8vVtdkyWSax3yCF5mb",
  "key11": "5ruoGuc4ive4fhXB9FVDAvWLCwHLMryoQ7Q5KX733hatjZcDpyoWRwpc9KXjG7Hq8fMXgCgqMpg1nkWw8cvvCK8o",
  "key12": "2vGKKkztdK1Dy8Yn7dqvPpHiHXk2fKv3nDWQ6Poq1qqXZoRaJCo5A7LZLsmbQJ1puMzAZpnmAJB41jhsk2ygxoLg",
  "key13": "4N2hz35qSbU2o8h33keugZqcsLLW2wc5uNgBkhdxhR9oegyJbHreDiu5deTwgfTU9DteQw9c9Nm4wKwgY2eqafKm",
  "key14": "662DoRRp1yXbL2tTtXu68iZUKbqWZmo4fiGnzQD5kktToC54dWj89tSG2SqFf1d8KxLEmTCmmr5WYMrqrAdggcUP",
  "key15": "rxWDCTesezbErtsb84Gc9MT2fQme6ztW77K8hBR8diQGGp9g4F9KCFHc5CXfbPodgzJryaSySxtyMucnUMkY8s8",
  "key16": "5fHZGSPNf6kYFQ3vVJ5d6QPCHhhfGf3RpFyw5u3Txnc5rVDUSdfDaNjL5wApu3xpxbFYUvSdDPGEWWpwQYnFuzZs",
  "key17": "3FwsjSGY2itKZqTdaTcXywVuYWG73M1r94e4acf2kQh9apukQos7QUAmKdzak4avBr3cyJzkgrbKQVehog6Vo3kF",
  "key18": "5K16ENoxFaKA2h3iQotaPPzLK5oU6vLAdiA48qZkBDao6bnxMhRy69E5bzKa31bVJU4yzTs5VSBncFDYL1EPpn9K",
  "key19": "5D1u7ZVQ36kcZNqauN1hzWHnYzsUFhzKWqvRMzb5FUSQAMbVZLvXSJWN9Esf2itRCkDJmUodCaxBAaKYxeDZgePt",
  "key20": "32zufFdKpCc9C2vtx7EYqJZ9zMS7oxRm2ukf6VujKQ22fj9eaYLU5ySi7TXGYU9MH7cg6pNpncoZ37jZZ7mYZeSR",
  "key21": "U6XagWqtmPdekSCb8Pqq8DzGMvsBa1N5dUUcgQC6Yt9z8opkzntQrzdXhL4TobvgQoEvSZMnAninx91c8EzLLs1",
  "key22": "5uNoehwbjU3Q7oJgDE4gwSe3XZxGeyvpLMX3VmsdsscqQcBzLfZFbf4MjoBZXaGCycpUkDjCMzKGXStSi8ceiiTE",
  "key23": "4VBbPWvnxaDrCtygk5zHL5iquZH2Bw8uAT7KEEHwrnHFUUTzaCbpBJpcGZcemHvFArUtknVqB1sA9gimwMY9JBHs",
  "key24": "5nd92gNG1AE8oPn6TzLhn8CXYEDQxa5MJjbXY2WoV47ihSh3Byih8iUG5WiVY6UoSM9LQ8niUAAFK7en4QB3zmae",
  "key25": "4WmR4ZyHSAJ2PYbZoEm4YNT8zwmvr9TrFZd8ptFD3Q1oRGNJgHaAv77YsbmtryyLBzyTwN1oBtDj2tqCBVz6HhXK",
  "key26": "5Ve2KtohzayV1NsReusoM9zgxXNc1rcNtACpGz1T2f2wnPGLx9ijJr8JP63sABP8WDPGnvXUvZdeLBuMzMU8fma8",
  "key27": "5M2cY4Y6Fs77VfrTPkmScg4w4ihuvZrc35y18LtiyoYf9KXsPv4bKR9kv1Cw7UDcHjXVRiRtP5mWzo3o9Z9GhoEF",
  "key28": "GBTBtaoETMbyA1RvPM22mWjwf6wUKrkQ5YNYc185pkhCkm5FRpRuYagABLEPzsm37UW9bhEQ91fa9ZN3HegmpBp",
  "key29": "4RkLDXQpyfoXksxPpeFtrnnvZLb4ABoSGuE14hMWg65sV1jsR4piQGJXpKHHeviqG4ZibbRUgFWzVbLjsny1DNv3",
  "key30": "67Vtre6n38TiYjUnwoU3H6jfH8xFB8TYgRVHWQUmEqyusUunj2ewJwdMk8BQMSU2Jv2x8uFX22oyx7ikhNDZ99TW",
  "key31": "53pFjJbK3tT2WpW3Q9gz8ND519ZQ5sVEibaAHRBdXPPDddCvuJ9smkx96rHir8pKgfbYPupB6NwAELpBCjYRTpiF",
  "key32": "4oN11nbRTocd8jpmoPrUwiaeETBqTnJxbTdTz18y4TteYv1BTgjzBSUsaYyMte7KeToqh4wAjGfibhqUgFAtoxtS",
  "key33": "3hoFmwk41Lb3xRmMHQbb4sn29841Shx3UcZFn8b2zWfm3nAuGwokJuY4HdH4BrHUP5nbC75ievYHDSnNGaKVwJFk",
  "key34": "4fNfgF7bVay5fj4chgq3gcAHXrSFDvkPLsFdu9o1FMsSq9Aga4ELzEwVULAweFcmXmYFF5CzFSGJSvoZYXFgF5jh",
  "key35": "4ZDCiYyda4CtbgecirUubBHKanoggkdQZH4QJ9RLunH4sawDH5B1PiXcckkDFmVpsHWNGJMAKB9VDQTYqsqTw8eB",
  "key36": "4viCt7R6DVPsVjNAKPgHBviQyUcdHim4HZVUVCe651exYhhLanUNnKPSEtXHtCvui4bKvLym9jB4cW1y9hGqe2gy",
  "key37": "fRyysy1Wagu1DFMAV9faTkYmpjt7efJsQ8rQa56nmXbXPjpnu9q2tcurTjV71d9CPaLSg9R4VWy29eASosWPznz",
  "key38": "K9czauDmjLVx6KiSRYLSJXy7io4mPEGUYeuuj4v1Sgs9gbCNW3SmfMcwFVeN2nknZ3dcDqKFEz29tKBgRzKVbKQ",
  "key39": "3NGHKTiXq6pGnP7UZGHFksVzD8iZk78qxHqxPDYWtUNdx4H9SCdkt7VYG2r5FqxebH4x36TtpCFmcCMaXPE9TsFH",
  "key40": "3FiFcQpz2V85nq4SLrHPPYoMxmZsBbhC7TEDRZ8Bo4pGVPNzWr3pkZtQpXnyEuRjMkeLru2QmAnz4uxNSpwDv5Jb",
  "key41": "5nTBf9CRgefLP4fHJfSCegtDp156PEEEWHkD5bq5BRVcHAkY1v5ipa7RTv2cGsbW5DR1hP2BCVTeL71j5jwo77Bd",
  "key42": "5mChAAUGLjzBzvLaeUxJgcMeVYosCCc2UVRqGXBYga1HRJwhTT6ovjbee1gAH9Vt7eCz32ix93xDnzoaKsEWBobt",
  "key43": "4gDEWGvMLPcEypoX9wy2yM8rQVksveDD8Xa56WShndxriQK1FLAVet7dgyjNFLNhqXW8BVkHheJqdnAqcGWxYFb7",
  "key44": "2BUZK1W7Ho2EkdLQu6DNLQRaQemDRfyKXstEUukGWPuJzuc2tmtAdSsWVMYrg8haC4q8CoHdkrsJJSZbvuPCxfLZ",
  "key45": "5TQQWVx1nuCQAYsnDU6LSx9Sh2d5m6YcQi9PMrQmm6uui2pQNmyDr7gzYTspAErjuqGGDZrXCCfQLTzg4fdeM6pF"
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
