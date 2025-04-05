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
    "5bGCvf8ZHfzG6qRCEtdnodgBJwGoPYUtSepJvrKdfFqXhKHr2z2FquXViS8ometCjnJogMXuz8BDj2qFHP1giYVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFYxaLCExG73KUNsq5GNEB66JfqKJW6w2fariDaVcK5i5SeSa8N6LgYjNfmHVqukNdqW8rrMPKmYkKWFYA2M1Ft",
  "key1": "3Dh4MBXWPZvBEBWtdVbNhrRdoVGw2oCYWM6k94AyxhtDz6ToC3N3S2QMUfpJa3iKXPGHaZcaQKVnSLvuT1edv6yH",
  "key2": "2a25tGLZ8rxrRZeBmHAjboYcny7Nb8z6PHTCZnFK8eafU9q3wDpyWhVtXYnw18YkVN8pawT2DezGJV6gnhDmFReP",
  "key3": "3mtpBpFw3gk9YeW43mg6AYvXaRzScqoDkmYrYnSTJiqNcEz4sxXSgo2dCWFoYSMNnvzXSgs1nkiNzCN3LH6wpipS",
  "key4": "5zp6a9zUMpzf5KHEjCn7DW5RxxKFmH7Jk4Qan7RdFchL8jhqVuYFCUV5bZPgfj6zrCGgvHymq6g4DRdAiStN1BYn",
  "key5": "fqEAZXJZ7ZY8eYSmh1h7tm8NFBYbFjGUD6wF7GznNLsrfkNXbpRV5yBhNk6Q2tuEwGLxvgHjBEDJoHXARPfAd7Y",
  "key6": "2B4Dt7BCXs26rLqrXB5DhMDQNu7V2bsHCDFAKFkghCf36XkzDnpzwBrDXy4xczVLuTUdcRqfLcmFCc13aQ3j4Hmp",
  "key7": "vGHns1zjKryhqwUwzKEFEiFE8gDqPCUhT9h3nSDu23g5A3RSgwgrPCqY57pqfTwVGB9fg9hPiyp4B5JAvu1nZ5v",
  "key8": "4hjrB6dwHjzCCenbJihfBWuL7syUavmUfhimzkotU3UPNfvXiqpqsk5WBAQ6nHW7pdDSWtRTw62zt8QnT8qtESHp",
  "key9": "2jyhDXRzz2TJUpu6NYZJb3YgxCjfob4UG3qnHN9zizuzUYdb5Wy365WRfVeToAmEWKQsc1S3DBKg9CEPVG2vN2zK",
  "key10": "4rfA32zH4GXcde6kvuSfd61s9rguURtiNmDucT1tFn49sf2hoGDtqKTkzjkach4PfgwsxnhuvYLaCRWaSoAund1y",
  "key11": "4VkUaaCHuQt2VjmFcZrrGF21kMupEwuh1XBfhFVJXA7ukpSA8fyxdJ9GTDnz6WTHqNEtN9xNmhDf6bmLrVZ7UvCn",
  "key12": "xUWeVzHWiWr8xVuMAfzeFRgFPVEHY5hRBPzbTifAkdwnc1PkJ2HtwC7AZkzaUHRDNfXNjZQ59mDweJ3q5kTX6GP",
  "key13": "5keh9dmxaK9pkEtduVmEpisknv5KEsTXZeCUiT2UprSqLfpR8DJFnRToJNMs13YvLENWeVCgPhbdmdXs5TsfN9NB",
  "key14": "4mN4PDPiBc58X8jNCMuUWi2gvv42jGzMZZpbJrC4JaWsBLTvPMYYv7rkCYizz7Wy9addQJpYZh1wK3s2geytyTeG",
  "key15": "5Xc2M5KeHDtxfcZdF6nhxqhntvRJ2Y7swemLRzDtpRtUQypG2BHksAYssMYv18cZeJpz4AV5aMqXBYTfohgJKHcW",
  "key16": "3kBEJyxT9KLqXLEK4LkQWikdNsSmRTB6ZZS4YFkLusWv26YWnPHMNqdUjShVZXdADaz1sT2QExjgKtqvGJyE33sZ",
  "key17": "2YHQfpZczot2sUUyfnpbKiNDZBC9om5tRvUbvjfxj9ckDoCT5xxT4PJeU3UGNQ7aTkxohEiZbdNmqyir8AvcFZuw",
  "key18": "tJatmhkrHUvLbnwxFhd4PsmBNrCi675QSZKSA7hRnZzm3WmaGq6M9wwgrPLH5KVwnYfz8tSe87B5DoKktrqhUt6",
  "key19": "3Ax5yVfFQMeU7qifPcJm7bbSQ5LRaxFKaFCREikAY2hZTVb4GfQFCKL4P5ThjXT39CbbFFWQBfSryJ6cEwseJavs",
  "key20": "5Xf5wTmdVR1JTXDrLxeV6cC3Sj5xoaTuWHmxALjTbrDLXQ2LAh7eUUcVCgj1PuSRX45cxGCEHuvsXx9TbXQpbXzT",
  "key21": "m4Jytu7Uzfyi9VXKAJ742dd7o8rcCb5jLC6MrUHdJjkQRDfh5umG8VBbuy3BPF1x2rTiQ4MoCUKpkTkYniXBfio",
  "key22": "9ktiyjXM5Q3ThY2JhHgaoweP8o2K8aHiZpwPAbAhX56qDa9f8UApcaQgKL5aPj7GN3L411iP9m2R78ieVzenQ82",
  "key23": "549WVUBqa9i8pjytMXuSpEsAZbN9EEopEkBb5XTXZBY8wNjiwxGi46aX9FK5HUsf42kJWCaWDdhYVsc6EtgVW27F",
  "key24": "5n74EqXve1X4iCYV3wpGKZkR9nrc92o63KcDgoZm5CzQYpEwfvuAdY7Eu5jUjdQY4mLKsyLDdhk1fwVBb2guYfTF",
  "key25": "4HpsgbRixxR6Cnmkrc6UmknsEYxh4BhC1uMJWjQpzH7duM8hQiTPHdGFdPooSBJKZyec9mnMhg31XfQx5XP2ir1p",
  "key26": "G9wL3oLbK18ED4cBCtJAGFzGSGMiZ6x6T5BWaid9h2Zegsy3W5ciLqYojbWLZPgHtzkkmukpm6HpB7cdyEBxrqj",
  "key27": "5RiwUUejBQvA9pAJWudxhXuMuPuqhnArYzMY4BF2oZRG5NuNJFtcZuBbnge9iz2aJHEumUeAsJVtuRGy7Sm9p9Bu",
  "key28": "445YMyXq5w18vLw3GgsSakN1LtXm69hbfgNeUn5UahUspybWes4HPRqr9NdBSwH9MHwyHBeapvafQuNSc2hBb8Mj",
  "key29": "59hBq39Q3j24sLAmiorTGKmBfPT22G3JLxdYX1jpbBGubDwbp616KXFy5pGFADgqZCWnnmxVtcVCAfKeeRz6r24g",
  "key30": "5A43KK8mxXkroZNUyrXQRXBSRNtF1unckzrE1uaMySh6GAKReKCULNCoBdTBu2k4W25XFsM2Ewo9GuJsH5YEh78A",
  "key31": "3MG7KPWniTeVYLk6Kt8UMPjQKedqQGrWjKD5wYRxYpFrjR4nsNNwUJpogUmSo8tFFS3aQSaQNZoURCeXCbrJxRrD",
  "key32": "3i8eibykheAmoa7G1A5XgxKHW9PgBgiiDD5RiGZK66GkcJkpFtL5aFc4FQhC1rjmzx1TgNJAXrn8fXSDrUGCwbTA",
  "key33": "51W3mCgZN2PbgYcHxmP33vPJnNytA61SW6Y5Zx2BGq2pVy6FTJq2a8RrZk5CCYHYjPBCZmrR85M1h262gTcsFweP",
  "key34": "3KXAis19GUzkvpHvT2TBHvN4QApxvS9Tw2dvGcot2Y9xpqeFLvaR4uNYhbmk1pWaiE2CeRUSudfFmEtQFx1po1Q4",
  "key35": "bms7rxoSwoJkad1Vq2eyLmYAM3srKfTtyR86xJhvqxXimZ3d55TNuSHLpR3eqqKWGj11FKDEACfkfWHFFknTkEF",
  "key36": "5YKb8LEKAYPYLFNNfAw6J8RYDvYc3v2PFxgxHs6m1qki6mDmKnZenY1i9rZA6czSVAooofpKadmR5279Lu3YSVyn",
  "key37": "36eVBoNCmCJtiw4yVKXA5gk6CNy8h7yZDcx4WF4zvEKBEnhU57mPCxVogyUUzW9E2gRycFmq5bSjRaKAm8bz96NR",
  "key38": "3EGVj3oBUHBsbZVBtAyyLkkKesRPZdE9Cr7TM8ntYB4eU8Upi9gDtArCFVo9kdXKnRx3PKgqK2NY7AGok35oHx9z",
  "key39": "4gNcizzq4mA5h51qQuBPw9F4i92uY6Nku9wHs79HCncscSV3RDYN8VFGHuk4hF7m6k6o4gny82mTYDvECUGhB1jC",
  "key40": "5URHqzCpjJEK7hoLQBifNzLm34zNBRDShpdh6Gss8NNEBMFKaKjZxkSQTHTTo1Z9DqQD2voNwbW2uwcaJ4P9QPx6",
  "key41": "2WZzpgMiKJBjWo8khFn8mHjmpsSfT1m8SXvGewar8bLYGjwPMfaVBb1HmLAJzD8aqzZQH3tKMKDhkzF1DH65e6PY",
  "key42": "527Xur4Pg5j6N9F5hUnxRnDeL1P859FvHAJVPva6MpZMXVhos4UAFpPvcLVP3Fk1BEdHY8eZHXusfPqq85wHi6Bc",
  "key43": "4t5NRxo2pa1eXQTUtKh3oj6zWtAsv3pvuk9Gc7gsSLJzdoVVagxyRyNL6DEtgUqsQcKgSzp34b798MFzhmw4mY9H",
  "key44": "53hVXVWuznBHq6RrV64TBbBTpJaqmPayDK5ZeseouuKaGhrBWPPkbKUjLJwu1RtLQQa5kRFgpWrH22GGmNA3gjTH",
  "key45": "33EwufUC1ds4tCdfHwh47ZKmtqBw44CkBr1b7wzNJQYRbSuorzWJ4ETidx2mswJqMpAN8Keci1uDxRwbRUTLFwiU",
  "key46": "2yoHGNjpvVdfacQ8UbvCyagak5ofWSKypDLvChoVFEWFqEUiXRHVyjx8fVDrLfnckBKmMyzczyzmJTffoLitKnR7",
  "key47": "4YurP1ZXM6hmgSXieLp2XkiyK2NveZqJG9LPxev5ZzMhwNVxxKDvrWtBpVNS9v9y4gvVvkHoEcKE1dEjG3svonsu",
  "key48": "3wYAnRVQ6tnbiM52mtvArgV75EWwXsZ9WaUagaaoPNAJYma1cWRTJYDGCfkFBm1WCkSq8kSEVJnWugMV2mkP9vVe",
  "key49": "WRG37SgnFrT8KkSmpjCABzxKmmRxtczFKGqQTDpB4Vm41Qf5QAXCXoujQAsPVkCz5CE6N4ny75J69Mof1ynuuFA"
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
