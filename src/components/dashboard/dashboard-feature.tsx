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
    "WibXzheLRYLuj3Z4zZCrXKmWaYD8GsHJUTKZqf2nnDDZ1RPZV6E61eHkeNMMfS79YWP6hZnfvwp8A6nfffsu8mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C47Nx4v3vnatQi2XE6LwGna1JmwgerZbjADiNd6qEExZsGa4zuDw1NvtdWR3zM2heXzEYwciciJ9GJeX8YmgVoy",
  "key1": "v8nB5zUa8qCzddhyY8J6yqpsAfQfpGpvkTwg3NSnfTXyx1K3C3KuG9DRAVmLLPZYA8qM8Tur447Ne4qbmLaew3r",
  "key2": "2TVCUqiryisZapyaxrsWA8PBgaj6dHCCjFEitN1zQcMErXRCwoVMVXNfTRYQ1XQ9VNsJmyizLBVRYoNT9JtEubDB",
  "key3": "41WhvKwZNAyzsUKu3YPrKR837UxYWokJ8wWBsJsctsFBm2tNNHZ9HvgJ7BUCGLiYcSpQbhtoytSVaps81mqUg2Ls",
  "key4": "3Fh82TbZF5NQgsou6kjMBa5ABRycjoo28chs15LK3WM3dccXf9AFVZ8Gkj7BuBKadpL9gjdhxR1xrarjtZT3Dcsf",
  "key5": "4Q5K4twsmpViFZPuBriz44n8VvSj3gFhZQykCQZie8cZvVrTo8n2USxiU2M6XvmyFrhtjdCz5Yop4gkPE6RbydkC",
  "key6": "47TMAWYLgQMjRKfUB9SMfcNcH5MtQUtLBx9kcw1zbWfnFvz7gD5trZHJy3kmx4LPMgPCt4MRZ7au88VWY3o8ihqC",
  "key7": "5qiVS1m2F3RqKridHKbRAykLJHTS2mL7SuDij7bx7YpzZLzCHCdE7CJQ5ktEcj9Q4KUhXJjejgiUbY872WgXBj4z",
  "key8": "4fc55fDy2u7n5rhrekrjZQRVH58FoSYstpxybApjBt1WZF1EHL3Ga2hdZ2VwnqEfirvSSx1uHaFZzj1UBQeSB28k",
  "key9": "3UM387vmHPLiEJ57CYuamt4Kdu8CBmoHTjdLj4iDbLw9yGyK72r3rPzcB3MFoP5bdVYBayuUx7pXniZTVJTcKzS6",
  "key10": "3Tg388bgTekjjkgwc17GKoKiyBtw1bcP4DRK2NkNexQMQfMNmvVL1qQwgaGJ4mYGrUME1PFmgYibHmrgXh52Y1KG",
  "key11": "5MnwgbZJ9QbAraPmNCzEVsuRHcux7stPFEvzvWTt9w8XwZRLtzHcFDka9DxKaRXHnL69KvNxSnrrgYeX1XhGqrMh",
  "key12": "UX8B7kw6QUVrxfkHBmBuQHgZmFanEt1YYnGefEmkg53aqxgi1Ah7SESZbHgtXCS8d9cPAm6uHj44aH75WWm3mtE",
  "key13": "2HUkfEKtVYxCic3M91aUmywAwtEAWwn255LTvc7kWQuan9i2WuoVDXDwkizAbE29TdiHdXqMURvuXJadafcRxeSD",
  "key14": "4dKzyfNo6gvfWgjMNZeT39FH1W42gv3iodV6ngewEyjifMEwjbgvXGLFKHja1QEmnSBWT11SBuYc4d2ME66FgXkj",
  "key15": "4f4nXxGuDVNCV1beTiyyfk1Xe5qHT2VfidEHzMor11dFDzansX2zynR24zWYUcuQHaDn2drT1JD15F7xk7x1ZA6Y",
  "key16": "ew4sx7yyv9z1G1LpoBVCooCWv9K5Hn6okYHckDeLQq1TbtL2YNBKP7jrLjF9ki7P8AagjTLPfbdMxhcrmhPdBX7",
  "key17": "5mLJ4WBZsrDAvYoay8EQ7Fre25GbnWgNJpZDQDJBpysDmqxXK51yLf1FBHSCn5tFj1gZTBQHYvq8YhJKBcyXfFFs",
  "key18": "3QcGjduVFyhYjhoAFN73R6Sbgg4gkS3CKpqWjzHvTcBj5MxkVZ4eYypyVGBNTLnb3RcSq1PLnTYFvEQi4BseLHxa",
  "key19": "2gSLJtLWaVgP238dT15DZjM7Rt6x9RPobdT4dqgZmyxSP2UmtbDg3mqnct5FpknDTX5qQxi6uX7nZhMdCuZ5sV7m",
  "key20": "2ogPSyFzaTnma2JSBBSbxwH2ZgwfCLu173obWZMXazo2WN7s4NLg47vq8wo4ELyAVD8D4jSw3tYmd35i4PLrNKRh",
  "key21": "5B4pLA6DUFFdWtRYWrZBwDqeZUsn9GZEpxJERFFgAZCXugosrmMP41bpTHsegZTcm1J7SsL11ZHymWLdkVKKaRGR",
  "key22": "KsPM53N9LM9B2gD1iC7kFBM8Dd8cwomjYUro2JvFNe3iX3eikBWwPXND25aw6UrsjS3Rd5obMpux7r5hp4kV5Vv",
  "key23": "4MV3kEfnpZbJRo9784e1aFDPDuuzkYQ1TyxF9yRRApvw3vaBBs8hgDZXzUSAThSDu6mCTgfaoru1o77z82dYawVy",
  "key24": "4a5ZxZWzL4PiHRnjCrDRv5hnrVBx3HoEoiZSHezXULG2RgttAYwUPzn4dhxWWDi9ityez7bkEqFdeT8NYGFgc18M",
  "key25": "37nXVmReYvjVpiuzXMPm6AiAgPNxv7V45rMG3XPFKbRjd1HH6Z5G8BfrhowQDzxEprN1uRiBWr51u5gKQW3RiAAk",
  "key26": "2GgWkUvUpyFo3x6TT3RxDFq4tsr6GkHLDHM4uUyBNAUehaq7TPsmPXzWWQdnmo57jUDnmGxqgrbuGgBVFbAiVBts",
  "key27": "5md9tY2W7gxZgdDeW7SifpBDV6zpCh2ACySXqLqyeX5vTzE6fUq9B3dGMpa1gLX7dfoCCA1MRwWx7mZf6EEvoPVd",
  "key28": "5qvWJaZJLZs8iK5ShMfy25MNckoswrW2kkQeAdBFUh4iybo7cPojdZAL5obd1m9n6aV6W2Tc5ETqQvYqeGyiFf2B",
  "key29": "3yNHEaFCrvNimsP37wH173N9zkp1vZZH5ffGVMzcdCffVPyQR14FfHEcRdDaVLAiskQaC5h8VMvoL94nqiY165Pb",
  "key30": "5SUMK4Rh4WdyQdnZfGNzWKUPWqS5cdAUzN2KpK715pGE25JwqgAVtMbwWiqZCrUmZxiXK2C6bSbjLUeWg7KF36ba",
  "key31": "4sgPQKhtbPaFnoJ7ovuF7PbPXEYnELfHG5Bfn72QnJUT85kW1dWd8Vwy9zNY4xxYH23jB7eS195xmKHCyK2LQTiG",
  "key32": "4qaadVoBQD6gHQyUHqjTep91sp11Fd7D839XiQyF3HFY8vxfJ8Zk316mkG52b5ChqnyRH9axhdSLyZ3kfdyPTH6S",
  "key33": "35NFAJeHXGA1xSdV4fZcmqTWjBgQAxmRUbGa45WYSUeooBfAXnP9DrTPTxGuPdXH8qVZZfBhrJuqa36VkcH5JG1e",
  "key34": "49J41aCHzALtAV8BytCoeMHgFTzmfKmvh7kzzphbHkAs95wnQyCgRLKBQSZ5neuUMgaYurhvDCD7oW45kcNRsgjp",
  "key35": "vPmbv5YQZbHqNaSNMsbWi9rysKB54a74JbQ6dUyEytmMB7LUxu5F1geS4mWuH17oqLpWyTvZqfYdu35wE6aq2KY"
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
