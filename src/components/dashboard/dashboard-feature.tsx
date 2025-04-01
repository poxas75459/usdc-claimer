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
    "3ZexWypsTq7LJADwobmttHZo6Aapd1S34BL8LYV8E1eMnEaeJTHbjvSVZXDc5gsHJAkoh3PswCu6gBpDatMTwYEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UHa6HGMAgYvEizLwE334nLBG5DPp8xjftf9veP79r4jxGpnpFmjRe3zBb6CMRyqPaZ9mzSR1fBbFdghHfA6b6N9",
  "key1": "5n3sYdRqWc5vJd4CJMqcDyLroYfU8pw79YaQDAqPBFobhf2wDWtps71EnSV2ACfTy46CZawy8bKZj3waGbnsas5B",
  "key2": "2BVDSLrpeLqFYSv4FHwiJjXEv7p2AAAMJMpNpGVWpUh1zF49i3xzMfMymRyxx86kHAS31Qfr3Ybxga8vkzhpJdk7",
  "key3": "5CRkj8M1c4fp2asatZAe437TGm2Tt5ZFytm93MHM8Y42RV8Cvdv9HhGJx73PssjdELzF4q3RGTkdcRq9cHdQrLeU",
  "key4": "3Sht2nvjrhwVTm1whiioWRf14HLyojRPdwah873RBt72NAfzUJTpjkYgBWP1WLhSyGvFcANHnSFsPZVpfGajvFcH",
  "key5": "29qLbA9akMZ9NpDBGU9ZCpJknpEGLqpno3dLPuNLxZofW7goai3REamN9L8Haf6brLownGGsb5oQfuvzoDsvV6tC",
  "key6": "55uHomApaicwSmGHBTV58vxbFpqDbrPTEQUWtMmsPq2iHPyH27jH3DfFMtqsq2xqRHtDjQtoktM2GEAPz8TA2dnw",
  "key7": "4CcHsM1HJm2MKDGZRqo1ggCg7Ty2ZayCHvBzNEs7beuNjCVXuipUop9nakHvZHEayvTUhuZD3qtAQK9s8ubsisYa",
  "key8": "2r6Z1meotXJmhxAsQyZ7PGvP18fayXyi5KoxCZpXayMurKWf7V7oLAogVmGRdsqmn2LqsAK5wVzNmLsBJFSSeoY8",
  "key9": "KsQ3XJWESpGuMWpZRn7DiF1sJ7tGoB45TL86awkV9Kmsg25igNrKJAcey6TBbhkCzqrR6Uo6CpwpmhUB8PdwAhG",
  "key10": "3MYnLuGToy1JPAzjr2rjsU51MYgf7v5hYbTkTobsfnPjTK6pMLShfUXZoFXoYbezdcsvKfcm16RCb1y48JRbhtx1",
  "key11": "56BLp4zKtuFy3JzMZrHMMVqvctG6WSDPxh62fXCg18FfrZeb6ZyyVyGxKPjbitjA3TiGFX4CKLpY454u38JvcgKV",
  "key12": "3CKJSgRavghBZWqrDA9SKcjuZLdacgtmXXKgrdsDhpXbFze7yohmPV3SJSDUP2qjMjK26zNquHP4o7fWMzr1H1t1",
  "key13": "2pR2zSytyGxDdCxJBJqnoZyvsBtNsdymq6yAN5oXAC8M2Ckfdu5ukEGNWJaiLbwrseERQUJaP13yj6Aoyycyz8cj",
  "key14": "463e3LcFjYZ5PCZ5c62WAEsLD5CPEU3uZ3nidxjft4AQfVhyMHiqWcB6tfH91qaTY47j7xjn2NSCCU9nJnW1FVY5",
  "key15": "dJE3mUiHdj8ngifanYqSXiMAWJMh6zC7UydcWs8YunFuNr64jHU6otxPea8dKkpxU3ADmucRgsGqypqinijtq8M",
  "key16": "5N7LV8sfcgSbq7fsih9s5cDEX3HY5vca6YRThXT8PdsYiMGYTeAaRg2okJruUJf2qhCgJxYfB6GiuqDeuoxzT1pE",
  "key17": "4oYunTcp3sYhkPy62mAcUjdvWR5f56Z6P6BUS7V7Tkg5eNiSPgT9RRdGgKJZLAP1KGUCDJg1tDrwgSTiQKmKeA2P",
  "key18": "32ySFkptaiwK3B3anmkhTwfAXmUgFYMojgXXqKfyngxi1mk9q666XHHWhcjFhAjB2Wn4Npaf3REWrkArbWMaFGTk",
  "key19": "qN5CBktbxDvN7HRojeSWdaxgerZWYDpUgbkE9s7L5WKDYbkkF3MgU3FdFwKcg5kSbLUeESPY5cG7U2yh233EUUb",
  "key20": "3SBV4gXyeJJEp7iS8Zf4Eu7HcVELSksxBrKKJRSjmB2G1dPVkRhFYpZkFehhJ719JkNi9RSgiExn9jJKsvCRC1ba",
  "key21": "yVAnebsSc8inG8toi2bxVf63wzHGL94k7o74vrMeUP1qQ7Ugynd9JYKFQZKM1ngHksozMYSyPxA7UWtgm58TM86",
  "key22": "56gHzDJH19W1EThwCuNX93uQNbzBPL2WNbMa2Cp8dy5Sp92MtwxYWLK6TVq6uY9bX48TfTV1JzCcpirx9toPapdu",
  "key23": "5xgh4iaweWNWoZthWbyN6Hjujm1gXqBAaB2Kw1ixKTnprKnuFJhXjCwv5b5oQTRQT3Sm9PVijbTthfkUFueukcuw",
  "key24": "2tQA5xx2RL52MzqQpXwiBMnzw5xa8qrq6ZAM6T83GSRxbPB4ac87VkCApD5MoGiFtmC1dbrVKUtrvngDcngjBptE",
  "key25": "5pub7GKGEBH7rwMLGyuFUUz5XLf8mUPwmpGQ2Aj6CoUKgtrKmTaWRYDzPuaXSjNpSajV1cALQhWnrcsidphoFEf",
  "key26": "5TVvCuCWfQUDU34nkQBzKrFVn6v8PzrX2gLvPSkVXDvSmLXrBpZdKPFqfHb5eRNjCqLSQN7zBTSsTjVxsgUSY8F8",
  "key27": "4VATZ1U6wgJ9Zm8J6y35ySbTcdiuNqF92NwQjfsK4tygPVf9ektT2xERXTt2iwShywXB6nRamqK4Y2taw7e3tJiF",
  "key28": "3R9JqLiMNhcSzwAw4HtDYAzVo7kaWT8ghffDXrMhgB1GVmfkXW1mevTQ2W9ddyXuA2342GyyLMXekBFLgpC6XxZA",
  "key29": "2iD9BeEdCrvYJ79rus1ufF5xCDuMLX66gNTKZKPbz6pEsfSG2YUBHobnksaUpbdMxEaprjjK3FPKy81AyWhYawNU",
  "key30": "GDzyWF1GpWM7BrpPx36BaaeQStVk7Dm2PDwPghYSwegEpkFKdhBTuXNSDXmAhBzAE6ur8Tz8SKFLB4en2GunRd3",
  "key31": "2GKQmUnH939hcwx3pMXdFFe64nbFPscgX67peBXP4m2TEnd9XmhrMdGbgZxS6Qfm4CsL2zPq35ZVm8xyJ5B8P8Gi",
  "key32": "5NtW6VB9i8V9dj4tHKjgLLRe3u2yGkCWm2aHAcFShn2RPJFi4MrYY6puRZY1EVsaV1Yx3gVnSc6pZjLY5nWEUopv",
  "key33": "2s8Fzf1KgBri8bo8enVRBnvB4xHyi3GuPGWqCut7RkS2RaEfugrWMtmPtNBLXHALiXn3PQX11faCGCQbhqNn7Ua7",
  "key34": "4mzJ2CXAMbUZY2XwMMXgFY19DEMyX3LPaUF9EKamjByJJ8ruYnkSmffNG8eGxmyKZkk9sJQyi11puRs9suN4hLYu",
  "key35": "4c4xi5C6L9i9STtxtj3EytrMcY2SuQ7GYZc5sMV1v8D3CJr1mo32c2ohPwCokbGDEr3ojg83S6znK98KnopLzgmt"
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
