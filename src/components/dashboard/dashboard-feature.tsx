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
    "4sz3AaTaFntvXdSh85gFhF32becoGk2ji51HAua2NkkbRbBDYRzA9it19onGdqcbWWK8wTr9oDoryaQmZsoeuhg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nko7CpHJ3aLRybAAZjGg3nek2iuBswVw25CUVkuqvLMPNLxqKSLr2EDTpocRvRqw7QxS29tiGycXZ7ft87JYD48",
  "key1": "4TLjgRNvCnGk7Q6ZmpWsWfnrxAdLugpMiTAoBY9HknxfBrtDTKexPa4oresbtFVDiMdHayWbBFzpe2MB89taWmQJ",
  "key2": "5SQdHES3XXCiiPSMhV76ZJxdpLJQpYVHto6Au3QXwG934MK3LKTPvEDcdDpqUbEKgh6NfjY3p5zCaPUL1R9HjPf3",
  "key3": "4ZUVVBz48VWmhfuRE7xVdya36YjUphQkzaAJ7yeKjBbJdLBjcfA9RYKHN3u3ZAfGmxsBHqdS7KajebinyCXuKoTe",
  "key4": "3fMoL3g1yss3r2ptt1PbqsbKX7ADHiHkbWTsz6RfzsF94T9GbstLehAcCDtbvebPRBFB6MyUK9aVkHC1QwcmhiwH",
  "key5": "HvS8xzEu9cgBRcdEbb2rDQtxbJnv2dJTci9oQFw22NPC1qvEwHt8QEJMcpuaEA8qcoRiqqm4y4drLFZhsdGAUu5",
  "key6": "5GFsnzS3ryYyGKAJno1XGRv7yDC6TbH7TFWHspTUodEU4dLWGcuyHB6x7GQ8D24tmTLE8MjGcb5wugygM2ChPfJM",
  "key7": "2vhZUUS2Y55k3ShpQxKwBJjmrmYbh3kUNVgYVbAAgLLzvxLtndSDk7yVowz3UCbtS5r2J4c3m7h69Qj1FE5mKRBv",
  "key8": "2ssbn9vQzK18u4WXZqQ5LxW7ydELEA9Ex5yZpuJGSQe8hChZz32EqyfD2msvVPoWvY5Crb5VETiE48QhVJh67znL",
  "key9": "5pD7U14hirsB4UJQ2cUU6uCzEWJesER73SukPx7LdZoqqDYKCXovfd5U8hy6SU7faPn432H4vaY61e4uomJynyZV",
  "key10": "43EkJ8ME3MuTjLw16aibKsunhWQ7m2EWqha4UgwnWijdisF3brj4RUFTehEdzWJQeZ6eTJebmPALtPvCRgEj89Tz",
  "key11": "5hEqG3eB3PByfLv64SsFQWoxwHVpS4CeThMFnasihrGDK9qVRzMqVuXUxUy3GZVKkQGq3EgMVhAxM3DZtvwaVeEt",
  "key12": "2XkttLr8aPDBuih4Ks4bAYsvk4asQMDrcZTPpWFeZFPgsQcps1Mh6U87AxKCvAr6MHf7nH9PU26m87Mu3ysKEtKi",
  "key13": "4TuUXyVUujYq35gtNndt3eWLcAGcGNEjoHm3rdqbocUqs2PkBds69imoBBfp5vCrfsgmxx3jCptxKBNKNyDKxpv9",
  "key14": "4Z8FXiB3LXxw7mTFJoYCfBM9s9CGWgjzmCArhYevFmrxGBThZn7sRaetgnyyJ3C5WeEct8tun4LmUc3agxuXpL5a",
  "key15": "JXyug9t4mFEyL8fxNZnYvtmpg26zM51tBjXecqCEsXre5tzBLKkGXUvTCKzBv3uYVvoghSXkcKmVnizzKpM7S4C",
  "key16": "3eKXrUwtngyPi2q9ynzbkE2Pa4kUdfS5AePyuuNPKUwGEZLVCAmUVkL3PBmSJxbuHhDjr4YxiyMZr2QFQQUCdM1x",
  "key17": "5M3YRUgEXpHxkRcwS9sM5DWpvn8b8VxfdJUnoxPvSpnG1diBGbidU3WYKMmrmxiGK3JCFVUQFb6xEyYFwJTp1qob",
  "key18": "BPNZNURtnpcTA4CQwonpedciwpzdEmAVP518bzR4CcJKDbyuVRt4YztiWHWQpKswn3DYynULTPKzVp3HdmCMngm",
  "key19": "572yHJkitYor7iR33dDoTGXUzixBpnSzSuDag5tEnB5y6ukqNxfB1vtE3GqXsmt4aJ8emXsyXJBFTJkTN1BbTQax",
  "key20": "3xarvghSHyHYNLzwkoAEJV4y6pZYbjvaJzse4jbPSMjsLc2RfKV8sH3gUYxdfUV8Kz2aBstc3swyBj5tWDQRxqiu",
  "key21": "2cxXYaumTuBCHoCXEEPnYK7b1NyYNaEyWxV85dxC1NCBR62BAeBvVyMtVhKQ28PDgCTBH9545inYUtbC7QFrbVJX",
  "key22": "sMi42pymtPE6KEqtDVHLPiRdnwjMvmyTMnewAeGN2CxSNnMrZVKCZXGp4jf1HTWWg4fRXsLr4g4Denq3Pdp4QBJ",
  "key23": "S5ERWqFiDCNd4PdnLiMebaYQtDf8rSo6NMquw2Nwhen4dif6P8BrcmYDtWogu8UjJv5JWYo4z2Q8jP3hAYEWrYV",
  "key24": "3MC4agycinbUGw55YPLx5DBXDE36sxEyp6k8a5MXHPPgfmebLxdJfE5V34J3ZUmYXTerCiE48wkh7xbYebk78E3y",
  "key25": "5REkVA8AN9Cx2TxHb15ZH7M1HVu7y4vuBF7uVNX8wajmq9KrQowxgtxfWNqs5QMp7masBjSEY6mUHXrrLVgeApAC",
  "key26": "4Bncf2rV2dhLzpjDcjwTv3yqstH47h32YbQVXhjizVQzgyw5xjUn8oAR7p21KM8cW5dU5BgFcUrG8ecwrDyGHNqR",
  "key27": "4HjJt35z2ohvLMME49NdQaMyLRv1ZhXGyShiGtY53SS1faRtvqnRZ8Kt7kyfZYFfJg4E5pMk4uwQpsHbh5Uy9K7N",
  "key28": "UqwjwbmmWGvR1r2gu82BmkGsUjzEqNcvhoJwH7cqx4zhqms3GLbxnDiniR9ACPpx2kU2sYUNXaXhQJ2WKNNZm4v",
  "key29": "2JivGazPvGnF51fUk3J1ntiKMsU7ryfSy5LcJ9GhrXxy7qhL7b9agNJptsGd6VqvAKeSAqzonYyHNt7xkbVZXwRe",
  "key30": "4EjgU5hBo9qf41TBanYAYJpAQZyZ9xUy81oFNvfrXNKTsYDoSQyPYEPm5sf2SxACyiHFQ6S7BFegVTaUyPurEUtZ",
  "key31": "2WmDWdKoTyMtVyM8rgmagDjGKbfhPoNMZnbsejgkFKJgVXdRcpSQ91ddYJFfJNSbiQW7vTd8daB5Uv39mw42JhNi",
  "key32": "4ECo1iuB2HFbSeGx5yyURkXGazomWu92MFhTZAJMCjQgkUpLQGYxtzGFRPuDBwVS5TwJvdUTMf86i9aBB67CqafZ",
  "key33": "9fFkNjYYw5uMiLvLsRqVazxapGQpabckSYsmSzn81tJ63iEQMXH6LZsNEXNNXuund6renUQWXEGkhbgMswic5Nm",
  "key34": "iW4LnN1EFRQZ5Wezw3eRsaTmcQ4xu4L3F8QgqAJs469NPAYURQHiPdXiXZhyqdMBBvuAyeNxQFwem91Rsx5c87X",
  "key35": "4eud8oPuuz9HNVe4rgE9tYWg1VNMdfXRUT47CHD8jKEzivavoLdCxcCvJSoDYKjxwnAPhFsJfmL61zNaykoG4TK4",
  "key36": "38U8YBbe6qkki2T3HoxTYHKjnrcQuin5y5yrwBLMKuBJRiKwQsQqsPQmC9i8FHWDTdBSwY1sZPNfc2Bu5Jqmg4k6",
  "key37": "3KZgaxCBMTNhiEWXHF1FeUGi464pm6ASn3xx3sE4q3ntsSgc3zD2yXnwRshd1xkFnetUv2eo5LAc8AuvuyuHs79B",
  "key38": "3CQBRXZpHYWR5Pu6PJZEWED2onQLVsVpkg6N4jDfag1PabUFJSXDMLeUoR9237X977hUYpn6pNqeauJyNMD55aHs",
  "key39": "36jzDdvhGpQP3kYJBkMNupj4un4LV88ipSSDRuM6W7QyAJpKSvPkUogAHUYGxpyjGae9N9e9hTUgiN7yeJWGUirR",
  "key40": "2WjJq3za8U7tj8HZ3HzTcNisv1wb2wocekGnRzqyQT8mMjYowtjpM6v94YzJ2PbfZ27PEXJXCtfbn12ReGQZXrMT",
  "key41": "3W8JAb6axTwL9c8HkSw539nwDMsyz3sfCXL2stHnR5Sujyc9kGoJsExbi5oM9T5hioABaVCH2R5iTpbBxCkYHUdG"
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
