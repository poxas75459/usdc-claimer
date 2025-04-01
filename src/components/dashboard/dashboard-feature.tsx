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
    "3ktByoe7fZ34iiBsRpLm9Ndz1hSM5Dmgvn1LQvyrTq8SES9if9Lu8y77stBy1qDzbAEm4e4B6ysCnVRk3uFbCud2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zb72eH4fqHBA5RDY5CBktBZjGpXquQJ1oiMfg93pXdmrsdqtSVAV2jx5vb9SjqQN15t9LKnhqS9dYGGpM1Q5xQ",
  "key1": "4XSxyKp5M8i4c1H4mjx7WJAtjMfTx7APCbmhEkYNnXVaqDAtdfYFzfKQ4eirsgwvA2xNbFX34nrBTSG1vtPit7Y8",
  "key2": "2vD3KHcMzev5vGx9kv4SQ7BmH7hGiDPK7J6D44vqcwrDE5saqvpz4yyywQmQtv8Xj6VBQDSARRUH6atQy2jXt7TP",
  "key3": "4Cm25MFjMnHYtV6V6sJFLT5hbFS4LTCL81kyeMevuZSTZmTpkEMH2ovwHmzgrGjB7H1M1cN7E8LsvYbTowcKFLiq",
  "key4": "5facnEaeeWzS5oGuSXQJNUH2Q4nWBB52MsbAG7fcm3isDiFsjybEBSJABCdA8UWXMt6psHjY2vxod1tuSFzha6j6",
  "key5": "5ih1cut3QP3HkZHFRpG129xSFAYxPpuJTf4AY9RRULCeCoXaWYwtQEcno1yutrhLCwU2nUJY8TPAbGsQ4orzm6j5",
  "key6": "5A6mWT1594YwGBjsYcEFCStwAybYEHVFgoXUfR6shTau6L4ZARcej3BAXkSNHXUFPrMGYTJjajYFNpM3vUxkvKw6",
  "key7": "2pTvX7JtbHtvVk3JHooiEY1Ur4KDDzxaJWBvwLFtCE6efQY5F6AGAJvpXrKFGh3j4J9EsdWtKJN5BkyqCCbhWnam",
  "key8": "3WPQA5skCwJwwfWFvnLSTcByCYrwhRM4Ctz41S7VsgjgNqbLJXSPSVtCtHpHoos5KpScMiGyZ1M5jdxgaMBZQkoQ",
  "key9": "kHzs2yuKA2JYESQ8BwhyW7nMeMqyGJ3JXziZ2wP6NRZghpVpTgg4XbQfZP8MGLUxP9ZUS7wzpUfEf6KciDGdssi",
  "key10": "3JbBJKA63t2nwfva8pq3h8uWDGJom4EaTFePg728GWBVMzi23yBkjVsyWKAhHfsGWb5oGVp89rG7xmN85uvqmCrH",
  "key11": "266dGk6p72T3AYVoB1UQWr3BoxeM3Kp4P9sBt2MZLdJa4ASfmzXFUFEAgX8jyLtAzL8pGK3NPRxCTJ4QpCU3wTjy",
  "key12": "4AZdo8sjU2eakWmS4i34y117YSsgonoR72b2KVQoGQggYUKWVteFC3NnrMtGMFnzTv7xgF6eQ2pHzXL9ocoHfN6A",
  "key13": "337ac4BbPcb3Th2BeCL8MDPUUevKg5y1AE53d2HiVQRoVWnfHCtnH6KjPW5H83Wmdy4cGwkAg1wqvCv4c5R1z8qo",
  "key14": "51xUGe3Mfe4D15mwCMTFQ6GLiFhrbUADb2P5A3x8tjjzqRAGFhhfD6EfPGzSsAPBaQXpsuKt5WTofjGngZHS5G3",
  "key15": "51WEqszKzoMZmGEyA9yXzUdzh4UEBiBzvLpL5fAbEwaQq5rHW1ZfEVPCNXX8NmjgMX43df7XK547NucV8KoXaztN",
  "key16": "5zCkgNb5zoPt64kWWLTnzskE1Vi9puNkx7mt9HsgWyEb6yvZCddbhXsnmha1s7gKxyKo8avb9fBTv7CAKmy5en2A",
  "key17": "2ptnraoWkMwKqzKJUB1JZmKidg4Cerc6ZL3YVQjybDs6U2YEdWhi1eLeDchy1W5stz16kdB1AiuXF781Y39tuyXP",
  "key18": "2GAAFeaKtrjVr891RA6Nyrdxu6iV7qW6eSEeu7GVaFJGzevFMAcia8kxkp55Nk4Ti2JCj5uUVe5tynRmSgkwiqyX",
  "key19": "5rU3usT3cUyBrLf76PkGmMRxNLsb7mkrKjmMceNkTRDXS2JY7phwLmcP976TnsKvjA4zEwfeCtxjFE2MNsCV15w6",
  "key20": "5SesBWPXj9nAqQDfGKovwPXp6hcW82zyGEgv8dTKxDBdjDHAoQtZfE93R3DLzkCVrMC3GxNCpadxbnfHAzbbDGEx",
  "key21": "3r1Z7VAV5tkr6G9qq4kAoNxVCH6rAkbSoPuxL1tBdSpWxUSnDiLy6S9bnW2KNbexTV8CZVym5re1Cp3jCH7sTQP1",
  "key22": "4wojGUVZ8EdpaeBjqWv5VvTizKMegbSgkXbGum7JzvbZCxMrnUJUMf7KdqD9Pa5UWfCjjEU8wDPX4JkdMAUmbjBS",
  "key23": "3f8rYXQ8CaCanCMPns6jEsw1R5M1PWg7moZs97n68vU8kxNxPx8e3qLN3MLn3pqBjhKktr2GFnK1cxAJvmc1jiT6",
  "key24": "3WKm1dSWuNLRmY3nrkMzrHi3qoCUeDwqT7tYPkQ3NiVeauGMseLkrVzFLLwydVZVqVH6HgzTieSTqmTyMkzBoqP8",
  "key25": "3wEQbaZib8StLYozv1H3dwmFXTkTPVsgUp5Zrv12QLZ5dFE9Kn6ycz6u2aiMNCEnpezMp97Deg3VLdCJ6d3NYsqE",
  "key26": "4sNYJSNzpaxig5DddnZZmzJXk5JtQ91vtgf5wW1hTF5WmNWKSV3iPoBuPFbu61Tip6DWKgnvC2Pd3qv2BMLm8Qvu",
  "key27": "5AbUqZcXSMkG2HHQQ21FvoUEZ9aAVkpGi1EiiZkf7bKvsq58HWiiTfBYqKK7ENKtELWXzMLTrsfKirF1qmtGwQGb",
  "key28": "2ABpx1wPrZYFAFRbBB85aXDav4Q8y4ZTfro7FYRZsa5zPrFfyDHAdLneB7ds68PvT22KpemQGw6xwPvWUSTVjSJP",
  "key29": "2GvmyE626LrovfTT8EDxADn5qq4hKDe6ducUvfJ4ZbGgWT4u4SipaHWFdpRgRC4Q6aDdMsbabseeXMDQG8Xt6QNq",
  "key30": "2XRGHdFqptEH84hUSNTN6M54AydYPBpMyuVKok8v5KnkQA6XmDAmtewaYPKYy7kgeA1QdknQYTgKgC1n2zwB1LEt",
  "key31": "29g2UteJCJWEy4Y8RcrYya9K2fuosXiaVDkpERBDfcd4KBpBsNA7QnQB2CgmqhYszD3uA9pEJybkx31FSKPSLCdV",
  "key32": "3w3Ssdyv82ht4bKah76v8tfCKHZZMpmVLifznSrnHNSeQuLkNQBhvp4VSmTGCBVN3ZEiktcEA1QBuQCxiTZsRwEi",
  "key33": "5YnotnEmNVLzoT6yPdXJpJcXgDZuBn63wVzv4zUjsVeWxMNcEhcgGUjTaqHf8uw9HgKh3M9yrbSG2ivTdLYfSvVq",
  "key34": "5bafBJhUxhYLkoT6jXuD44ZHDoB26wypy1MmFowg8SjbZmwAgb7qdqpvYiCuNG57S8b3krDtCVMTQqCQZvUGooH1",
  "key35": "2AXTwz8dJ95acmVmzrBFqhmTmy77c5dGdTeAxiwjRCfWAZ8zxycWKwrGu4aWTzZcMaQQYPYtDJcTAbL9hnKSvruu",
  "key36": "4FkaRoXgMqbhpxGVLa42RchQaTQWoWmeFEFkLWhDqxvq4GpWXGmjaSKvB971tKpLZJfsbh4uLzRRXd4mpD3saxHT",
  "key37": "35KU3ZKzrrfYRMvuzjuKwzNnWxieHMRq1yoWa3TsDAMyq8pBM8JReybp4ghAv2qUnSEWNQdcBWaDNYBPKWgT3YpQ",
  "key38": "2p4o9LaGkid2QrCHhMp6S4wQb5yWxz2NQ9u6T2Ue4A63aKFAmHaVn3qKUnpPBdzpkxLquETRVCMYYwNsgMYgFTLa",
  "key39": "2jXNFHbytVmhHbb6W7xPEQtAzBaCQfo4bapZF1eYU47QFD9jfcskgpQFwkRmX7Yc74RNf4Gf5CeqYK5Vh4YeUZ6m",
  "key40": "7YGCGPDfPEHmYT4WeV1k65c45aUWVeQii5ohT82PoeCJDAXVMi6PNmNxpKcJHD1gQndu8TBofCYE3HRzkRHdvQD",
  "key41": "2V4C6bn5nEd5tBLerwAWTcgCnWj4WG4iCXFiEFLAChwL75VHC3LWT8cBXLh6zHYT6V9X1ABTxHHysvhmXk4AvMif",
  "key42": "4Ek8RmX3kaNzBe85Cw4tZMgntovxLJBKBWuhhWdHQHKdCJVh6eZ9dxa4hwfC4bbAjvYpUFDq9KnGdaYGvtKMPqBo",
  "key43": "44jKdRbrXizMrEapySsubZofEKPGHtYZQbkpcAfjkCx4S8kLJEq296HngWFqi2d1xZaGAWK7XSa3TPqqu842ZhoR",
  "key44": "2f7h9YooYnYevQHhJU8xPL5NHVUtLU9qDunFTdpeCRcYC8kHESCxakkJ83iFiE9CSaufk7tQo13Dn9KqHEHtdnGC",
  "key45": "4xQAWAGvR8PBu2WKNRavYinqa3Sz1R5esafJNJsxKZLSc5dDR55DwiRJmM4H65nJe9Yp1VCUdKqM6gxSpTTptBkd"
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
