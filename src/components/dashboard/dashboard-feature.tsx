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
    "9o4HZyeXcCN4NoV1u6TMBUrgEaXVudBZBSHJttqws9rPN991QqkoCRuooCxXz2BAbHoBu5WUrPxCo7B1g4Bourx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPyzqzQvAzq3Eo67JQoz4P94FbHyUHe19FUbUKkcZeep94fCDJ7jfKYB4AHF5mYyaJrndkyrZrsXwGiPmjUCr4y",
  "key1": "2X8EkvomMdXGEWyb2y6dmcW6a8CNxjdGjU6fzJVN9rBnY7f19tygPank59hxQbdHiGRyGAD2WARF4e6qWeT7Lk8r",
  "key2": "5ikfHugRoQBNfLSFmm1RnmW8Dj4ngtFfrm5TJampCBPWX52ANqQfjdgBZ74HASvs95dE3wGfa5pEMAmDeGcHY17v",
  "key3": "5xLUycX3UX55Vo9areRDCR96LtiamVD7DEyE6n1kgJxknkDuYcbnGy7afiQPH4ZCC7tcTkU1w7P3n4RzUqeC3ALN",
  "key4": "45Xdn3btrkPjjWb7VAsprPAuHqb2YtzQXyZYpr2YMxABtmzPVDB2xWCevZ1tWEqixCo48ikJh744WF1PWeKRPnR6",
  "key5": "5iD7FrRJwbt79F9sjhAtWsUNJcbZTREBxet8N9RFAFFW5UGxMr6vXcrz8Zt3ksaFda8YX8qtuAFCwgdn6pFyhn7E",
  "key6": "AhiC5cWJGe6NPmPmXXMHyoKQ5UfELJAZaRcQah6RKZAk5x8afvxJy4dujLctthyorZPSSas26iQyfa1RqSGhP51",
  "key7": "4ey2Nk66cDv32W6LHBZKNWMU7KdjsfQUiPV5eBS95z4NqWCAmoj9hfNCtT6Uc2ZEi1G7P7WFcEYLA2tnw1k3t2Ns",
  "key8": "XEdhpgiJJkrWLoZyUp3B4SJeQqfJfy1rsELSuJ8Bkoe3LGZS85vqJ1oyAYZj2UrWop3QjqH4soWX7c9Mo9Yt5kY",
  "key9": "3uwDmssSvFL5YgQpd3GV9GUmfitFTV29bxP4RLRSQrSX1gngAW9GycHCGrj6urSiGcq21o9RNAMLTNE6NwNTSKvq",
  "key10": "Dx1ZrDEW52kBQVeTS923H6UdVE1tMFhpzdfuNGrtgy9FEgdU4cfeto7gu1KpL6pA3ruK8hB1zHh2yMWa4agyEQq",
  "key11": "GGuuBo8VnQx6GFkB9XB4GJkV3tLR8MtXPGesJf9iwdeQ1jwPJeH8cxWecVzm2aqAsu3fMEL6y7u8rxsCevbZxJi",
  "key12": "5pc6k6VTeoxiPQCx4vcrpVzCFrg5JnE99E37gCcJN9a7e7vKZqg71RpqjgAqPt4D1RDyUBV7yjXGAz3h6L1a1x5B",
  "key13": "4QTpDmARbupaeWPtYcGhM9nsgsi8ykq2aS4cuwww8CkmP1bA5y32JBYjgC72hb3hhTw7EkTM1twGSfy6pcDtNUrP",
  "key14": "4ooB4B9iRaWE18B1JVCFiNj3FjRWy1Mg67bykd16rzsGNzLbWab8hTJihL4yCpTVWAvYr9WfZVGeFkY9dASJ4GqE",
  "key15": "571h4tGW3vUxVWP4VSxL3cybC43iDeKqEoTcAd97YEhD9e9dwgJDiesUNAc7nPWhtA3Mf2vWRVkcsVA9tQsKTN6f",
  "key16": "42bUMKWVyXEQxiuMS9ZWf7duL7QwJRQdSH6cfMiHN2ChjNiMTfyQxBnUMG919B4QxG2TEoFS2J3zNwrQJ1nbWJFd",
  "key17": "suwYZanU51URHmqxTTM6HcJbJ2C3o7XzRvYmyuyZPuMS8CmWtiv5MRroN2LTeVymomQiyGTo4VfLHUvqusHZJta",
  "key18": "3EgNLE6FaMD9v6r7RW27n91iixZc4eW8ZedEjWpaFHi522LqUgLBDCFBeTU2WiNB8R3pLWJX8Kd9yGKdibF2AGHQ",
  "key19": "2CzgKqoomCUUfLfMxt2mU4dkY7Dv9Ygu4x9Th2QAxoQ7sZ1s56nz4ouP2ZksTnH9dgheNEP99oQX22wwmFz76Zeb",
  "key20": "3rwsWQAwSaveTndeB4jKQFG1wpx9CX4ofM6Bt8cTFVstqeSKWiUdQoyqNVkyp84x67SYsGnJLPmo4GJemfbPoRF9",
  "key21": "2Ri5TKghNaNXQ9rfehkJoj6apN9pvavYX9Qgf59T7vx2MiQubPowhB7vCDnyj9EtvwbDjNBRwjMmACecNRsKyqnJ",
  "key22": "3nvJft2PckJbPGBXkLHbuFirGfdKSwx8gjLcCLJ4F4gysC8BBjHrFEnRUSef1hDhBo5pCXx7A4Ad6yKXrFdvWqp1",
  "key23": "5yuzV6ALidTLZDG1NDHrs68RYwssGUyQ2QLadA66VJmgKzLUhuS1wQ8gaH2CybJDd2UtQkToan6YUffg7iKzFUNM",
  "key24": "61EprCygVMjEf6wDQXzT99cU3q3xCmA7Y1CxriG8L5wNdS2sxAimCLwuxxHKeuUkJPvFffCFKHeF6xUiVAB1VuJr",
  "key25": "3C6yvK5zvodxHZBn4FYJtJeMcTmB2oJh7UU4FmMEkf3GkeV9yc4uWgdbzMHVDhePomgQ94oFq65Fkos2KqL9hT8g",
  "key26": "XxSRFrYyBX3xaFsvwdsLARdpNy2JwpV9iR4nhtzjzANDrQLU1eXU7mqKifd8f5VVUQKf9tS13eAM2c7m939SgMF",
  "key27": "5oyM1H4R9ia9Via9McTDW7Mg3pojBQZhBQLTaUS4ssbXyd2T3zx736J7d6GdNrZc9vGMmS2Fcj4UdKuJN4kbWhiQ",
  "key28": "4wG9uDy1mHXQzNFt89LjrKNKj7WY7DFYjFiqcZMVcMXHxdzv6SfS2pTDTfURZuGiimD515qbPLbgBZ9ssjTVNWfu",
  "key29": "4bDq8x9av1gkCdK8GoffPrroVrRPRLPee74XtQr6ifZhRB4fNJ3hk6gddaZ9eh9A73p15HATZNKCA56LE15toitf",
  "key30": "3MNyurx2FSpM6UApTqPV5HtMMwioKzpTDM9iWPXgwMZH4EXL9QifiEhTcZZaY3FTrRtfK3KYvNBp4eUCjeViTYWK",
  "key31": "5tVkD2bkaqjHVw4apMXxsWS28ajHPrdBUpnAwCFESzQ5odQjyfHU2Fi9zAo9216ryQaqURdvcZBPCxx7KEZqut1D",
  "key32": "pAWg8ypAMNhmEKP6h8sHgTHDtMEoavk6No4tuGdQu5y26CXks7tY5oupLdbqnBTnfig7BtB91Fy9Fh7UTa47fvL",
  "key33": "4fSg2S6EF5pqHos4UbEycoc2efuhPYBGyGWduFuwKGPdBse4Uf3vJntW9vKaF3zdf3L6HYkwDmuiBKBM9NgbmHSD",
  "key34": "zX8vj1dpejSQ1QRQGTxMqmGkTdFxUEhn3KypMacNqJy4e4Cna6yL2usWepx3Vzye1o3j2FgBSuqStetKeJf4jCV",
  "key35": "3TdWuJcGYGnkvQ5jZz1wJLxmcJHup3QpsxVkz1whVAEE9i1gyYGjDUmKtbTdLir33vBe5QDjC9u1QZoLGuYDdPKW",
  "key36": "bkByiovmCmKJ1nh6LgUZasdRG6tZ4vffpBKtFDt7At5fv7KHoxmWUmx3sctGM4aMSmeDWsoEwQ1MfUMVquDPo39",
  "key37": "3NGzCmepKJvBomgfJpKCnakdsYT5rF7V7MRXMVtKzuztqjx2pfKkraKtFMv1j5ZKVmAddq44gE5wVbnAvDGw4Rjk",
  "key38": "dWmGZR7QZZBAnyjaJcUsvGD7JhdLvdKRBNwWqAGChFKJdvahbHroyWCqnf9xgdGf3f9sVkCaLKNvHCsszdUbN1Y",
  "key39": "2UriBqqodysktmF4uz4beyvZA3LLJSXHRnHdtw8gvdqnha2uHAedNaisiRipdAbUYXJ3vWozp8X9xxqfiqysEML3",
  "key40": "22QLvgP5NsVGR3j5SRFxrxcQ1vPpRPgtskAQuNYokXZTQR38cJTGSUWvjuMHogm6XH6R6zQdJk7T8wgG7Qiun4D3",
  "key41": "4noP8pWaKsQwmhMr8GyAQFKD24rtbGE5wEcfjtgMhiApqoo7LVwsRTv9q18i7KRdA5G12FuCNNF5UH1yEXJTwLPa",
  "key42": "B7ryjjv7Rytte9YdoPKuDz9JNJfU5xUHZ6pU841veFtBLbFkGrbWtr3T6P3k3cVTfbEbUmhAsavw2HDGoEsVT6h",
  "key43": "fK3zB5wqj75FubEYxSGjitazDH2puVLCtLQ7qTJAB1Frd5hdMA5YkgEqTriotD9JQeRJiaV5R4sxkydfihm69X6",
  "key44": "4bKESyEtavmXvgmUJhJm22BT63XWnsx648cziPipd9qQTRNHsXRmVVVUYvYX4WnGmccqADHrQByCKZbefxdVZkFY"
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
