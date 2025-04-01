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
    "UkhxrrjnQhsQQ2znSbVHPrxLDF6jgfbMqys9Dzp2KrxpRqhRiFKRgveLvnppxogSGQyRt65jkj7EjeRbbiBo8Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3og3YXknrgcPDauvgcm2AzxxhzavvZx3Dd8qFoCv6W4H94ZfEctk6tDC4cE4rEQos9w6XFjeJmN5TvB18E4xEJgn",
  "key1": "3do523xtgcskR2qZjA3HUYYEQDjLdLw6Lrzj6pjTtjdpgMKBj92c3nr3fMXNBKDhCZ1LTu4H1V1rmCPsVa9vbmHG",
  "key2": "9AnLmMnu1YuC6ZjiDgjSQSvSXgcu6Ce8y37WDVseQ9HH7Kd765rJoSZd9UhFmQf9QXkuWxn6qWFQ2aWzY4DvKrc",
  "key3": "Mk8LnUrFScB7gVAvSP2iBD1ByiiRSjAzvF2KG5rfw9rxV46fhFLMdF53s3WtBPgqSrKessocjq3HA4N9pdXBncj",
  "key4": "apLtqY9d3xi1RFw5D6ooWUwNF891fZCpPDvtRXPkeB3vGGbL9UFEgG4FKZVXni6DU7dcKt3KkoDgJ9S4xCiePoy",
  "key5": "2AhCyxmpfivtvEnkXaTHaiyHw9An3rzpB9P2Z133HAb3dxhYGxgrTDpkcyEbPFuM9sThmCojBLhHhqdNKW92rAdU",
  "key6": "VeL6HS4aq7Ms2YvkBK2JMZvdHCmcaHrwD45MnhfQuLEQD3eHiHGdcDMfc74CFsSpe6VMtzbEaUiikFc6fZoiHJ2",
  "key7": "4Ui1wMsqu9SNj4TuWNuDAMG1xGhPC3noFU772jf3ugiU2SpSaz14A71ACJHSBANRPLKP1y33hWAL6HncR53mvDJc",
  "key8": "67PBqnxbKU3jn8qxxesiC3ZApys1rTtpmHWTfT14cmkCesxgh5kvsY4JBZk5ofQ1rPHPmLb1pG8NFWrVvHTuHpHi",
  "key9": "5Wo5BSYPBWs6G8pHA2psKP61b2fnk11wcv88mExyURK2wXa4DjbcBzkCr3tVHZHyfLVvM8NqpLtJ4iTR6V3aKert",
  "key10": "NWkMxkEkdopwTxhX83nApxM94NPzZMeuEQaXVcTLg44mjt9HJmexbppvVy1nphYUo9BLSYRekHaZF34k8W11u76",
  "key11": "43FxVTgzbobGSeBGp7AqADmrLJYn5aFEdvM3LgTaucmGK38D2uyBKeMQyjaJKf5Xw36RphGNHz4hWBnB1bGRUde4",
  "key12": "4GY6orrgRFZLRNtbAHGMJgzcJZqUxdi2x3gCVc3faeff1mxhiud4e5qHWxb8yDvAbpMBvABsJRrcwiQ1bAcnRpKn",
  "key13": "2apAodWjXAEbnbn9wzD4jDv7hRS1ASMhMoeb27VnoAE2hHnC1Vbi59eF696Bcsd8uHX2CGyXZCJLNYSG6XuBVp48",
  "key14": "3AVjC5X9fE5rXYwWSk4dG858XHKSb94R74SWoqew3t3t5vsM5KLdbKLE7pRM8nuVS37TvXfcdjDXNfUwDZe623UR",
  "key15": "4Y4TNExBB3i16venj3GBkXFbffT5iKcqpZdrKBVHqQRiGG7Fqb71c6YnsPfKiLU721p6GbAji2oXaxqvKmbLJtrc",
  "key16": "4KQiycboMmLVvDEsFGRNpq2QQTAH2fh8FuJfM9shdxbKmkAagVJrhJdjmrkq7Bbba5wstr9UDpayPCCjYXLqD8SZ",
  "key17": "2ieE4jX5WHawanngn2nqmnuJUNsDPKV5Gi4Cyhzrw6fLb3jt3enQj91p5mX2nNwchKz7fmNyPGgph7VoW5HvQuZc",
  "key18": "nY5CWzZGa57pVitZRc3DjmCtv3WTpcW9VykAiTFx8ob8sLSzqJrEkpAXNzgHPusc9roQHYKoCxrhduAKFCmk4Vy",
  "key19": "3WDQY77jEKf4SUN8XBQ6tKqVDJRcs5UG9c8WMWm42vr7ZU3gKnFsPGfQUVQR2418Uwj8KyPgpP8xkSPdmjoTYmwr",
  "key20": "3CFUDjYEgxqHmZ7MvLzU6vZpLx4xnaX3nVD5isWsJbLudNXuwcybngeYhgL4Z3bR4oJyiLJU4NFXWkrMtKXkipjg",
  "key21": "5bhZippGH3G78uk19ScwT4JPYx9bANRLVZi6xxVixZmULpQAxhoiEYJLPfkkQoxHSdCTZAMLoJPfAeLgw6wDzJxC",
  "key22": "2CFwEpMH8EfY8P9Mk2uW18SbVdEykf1bqueiu258oyjFtVjVkEQ6NZxWrh7wuNHnfPxBVnAq7b2BJPTdkdzXUcdA",
  "key23": "2MLw2AGW7RguHcWdBeGbxFJQcEMaZ6N8KBweQMRFPK8VihAMMMJfZHGbXHsTNNHR54qRhTGgkx8WoDgXJQiGWwRG",
  "key24": "54J1ThFzrHjsKVUaCLpqdNDEDxNigLBdE5tBPd61zWEYoqQXWvYUkwkCS81mtCqTvSGfbqDbdUhRYfJZT2DXZ7b9",
  "key25": "3eYoj9DDgkmuRE1eMpSZ8VCTJgvj6511jNV3C4uNVd4KuYwWrzUE4uBzowB3goBCdRkW3kzvVGiFVQKXHFxcoA19",
  "key26": "4PrQKnASeHKyEgnQQaZUjjxCiawKYweiyDYk1AkJzJSNFgGVtnRhvunr6gV3hnJZahiFniDnx2339osKLng4H8M7",
  "key27": "2htetYQyP6hFr6NhbGXwnTdqjbJzXenNASwMSpizNhSzejikTScYjDXZUySPFbmfrfLD7gHA9aNNx99o6MvFA2bf",
  "key28": "2k7Dcz1ZbJWvgt85DdA4fbbN3A9EjNhgzh54Kg41XVjc5dHGNeqKV2kG4K6hqT2wxD98ppAoecU4Mio5ejuw5Kve",
  "key29": "2mDzm4b3zm46rb3Qck6NAxKtQckbmHSAWZXDAzW61C7RCWDPVbai6VtUP4SXFDama8rNGcw8g4jdQHJn6jihQhDM",
  "key30": "E75X6cEHvYZ3TrLquiqgrJBx5YohLvJ3ZyqFxg3MGm3GBvo9yAGLt8d8EeP7dFq1ukrmHbrU9GNMJpAX76Fizm6",
  "key31": "TjuE3L5W2Evodac9r6YxRgEkNg6EQJbmiLAFVAazxE4zCg5RfWrz5Cs9yG2ZN9XA5AMnCYpcEoD1xeuzXrKPXN1",
  "key32": "2ZmmFV4yi6cC5N7w9LSPdD2F1kzUYFtosmjJTPP6v7KEBx27wiXxK2AED7ssMhudCKoBM7HpvaKZbpYuWKXCTYTG",
  "key33": "VZ55WnVQknDPLidp1DYhvNYf817R5Q7k3PjMEv3kga1c3KArdcuZM4MVbsJSU9Dw4VFqgqiEHTcgSCVvNN5xFZR",
  "key34": "4cvNUXHcEdbYMhmTFxxqGkm2KHGTdHPEEuzFr8cLx6qdLn2sD8FJJFWrmK3Q41XG6KLK8BpJViGhDG11gEgdWaxj",
  "key35": "51xB1z5J2cvpvr7cuZrKim4fXpX5NCQ8o8rGzx3JXrhVS29fV5AfFHvu8Tz3RTjFmUWajvwhUa8SWT4eqDf7Ahfb",
  "key36": "4FRkqtV2x4JjqJ6bjiH7Ju2B4aydwJko1aG7gTkMKMoKAH1UJqeLNpAzH3gQjUD5Jx1xoMD9jvS3GTeuHSwZDmck",
  "key37": "45NBSw3qDonRvudaNr7vSmzBBmyRqKyqKXi2xnT4zMJkRdoiw3wKsue1xKFkjca2qMCYHam4YDFoTVHj6YcJjvKL",
  "key38": "5RQcDMNUPFNEC5srqDHcnRTWhzpQes9m9nxfCF6wtfU1hpuAydvYvuQzFksB3pvhp1rRhwZEaMP468M1WG8BDaPW",
  "key39": "tuGm6F53ScMDa8fPbpWUL8DrpiXocE3JgP5EXBsodjhVyK1K6f9fudaHyZrp4fXXkizuPwqo8H3HSjxB3nZuw6Q",
  "key40": "4juP8bpVK1dqJ3UVqjsLervZx5TUPj1a1DZws1BV1YeRfdZfvY2Soo9pitAoNQJjtJZs6ZA5WL4Ah1rkgQGBFVD8",
  "key41": "3RF5rvHkuNoJoRNffud6DHgTpVwHpb3ZXWxRGG9dNM7LKsefbSy55HCMmUuhYkDkRPCoyWYNHiKsmpJJ2WJaSBUx",
  "key42": "25gRViEwCLTYzmswex9by98JFnX7zGbRtXtGWCJL6tJi2jWSRKTV7WuwpBMwp7mfeJsf6k9Z14gQenyr1Bo2wBML",
  "key43": "2CRmJrFVhyjRvCVaRaUAba11LUbVevQa6xa55JqEuJ5y81sRMJAeaSQJdYWU6gKBfv5Ey8v2jie33uSjTjmKUjfB",
  "key44": "3WGkuyh9wXoFJ65XqP91W3SWJitun52vtYFWLvpN4Qmi5KMDFvF1K65vhfCmEgJF4pti6T9JFqq4TLFpN9ct9qiL",
  "key45": "qjYz8A8wJsWgGJdbEjoy6oQgZL5i1CXESNhcGJPGeVYmr1ZF4fRdkmEVmEkyc8PpzzMARCVcGkVgtYTPxQ3Ju4R",
  "key46": "3MhrDrk8Tb8NeJYpPN94KKTTbPhY7sWUnHxVSE9YGPhCrKx1V4QK28CAhDncoLYmiP4dw5i93x2xbVGc5t1JRErS"
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
