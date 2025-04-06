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
    "2zoq2SE1enVgqcP4sg14CHYuyd7e4oCisMZi91iBV8z7eqxU5eRhT116YFcd4sasEc5pKMeawedA75S4ro1XV5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fPbbUjTZV8mRhUBt769w6cQhHJWmwXifRvYJgBGG48KEzZ64LrPKyrtG6jeRedc1TNvxyVtQuxjp2ixZ7EREjrw",
  "key1": "24yyW5FCW4DkVpGSdr3ZVatmpA1YaJpmPXJc37CjzEoBmF5hPJEjkBT2h7LurftBMnCxHBX1Giq4zxF57h7RyXLi",
  "key2": "62FewxewiKzu3Gk7zMx781ffFqJzU7bfAnVDXsSUrD4ijoc2uXZndGqv5vXUa4G3kAhHPsm4GKWhxzYGWDdks1fg",
  "key3": "2xGmAWKg59QVp6SKqrjFE9kwHGynL5EX5CD41koZg4ET47V9SUPadeENhf7KraBLCKEcz4v6ytydW6sj4VB8bfRv",
  "key4": "2MwTKdFhfVEtH9AzdPbZkNot8QR789VE23M8PCxVo7L9AA7ShJAEwGWEHeZFcBQCLHguuA7RvaQeGEhJ6g8UNNqw",
  "key5": "2unqLxSy9ENLKvvxxi4NSyMnD689qMViQqVJzCoFChuvptUWbZLNRTzJFrdKkQtcDGcFjaby1RnAGcQF87D3oiT3",
  "key6": "2u3ZeD6cXc2zM8TCzrdASvThEncQWLz6jVfTmDxx94PoqxhND9Ycu58SfFLxzfG62Pt6zaKmv9LPoFJcLc4estcx",
  "key7": "2RREtBewx313iagANkgwYHHA39fip7MhKTHBkeqquaEdD16gqRUwBGcKW5vf1aFvoPfLfi4cZ1k2aH4QLq7aAh4",
  "key8": "2g1bT8WyCmyaTcZ5tJkhTGN3CaHbfPzEDuj3Yy3JYgEqoHzH3qSz4JwBbK8v1ehjokzvMsPwXkRWbJiXT99ADZ6E",
  "key9": "4xUrP7rupgiyRwh9voA7bu99oujJkmSUapf41QcR6sNnkh4zdmgNiXRF8mZ3i9oY2iPP37EdPku53C1mrMmHJZmM",
  "key10": "3FmMj54LwFWW7aptUgQ4c3MY3FZ76Yc5LfB2jk3x6J1ack29SJmVxBGFWKSLLw8nswraun2Z2No5Lf7CA8Gew3NC",
  "key11": "5poRT8iNzQ3Rga42o9xWWdbQeXiUWGJmFPpBtMQi55XSBiYSCsKgrJ6fy1D8JKo7oFMXkt2EqkM8zzibQVDpcQo8",
  "key12": "kqL1Z2MSecUmXy227q7p4MJzJBjprddwmmC174KWRxvFwLn5Lm4WfHW8CvZ3ewTpgkZ5dCAxubdHZSHncaSNcj5",
  "key13": "5hUrZmorrGxzzvgHPgi3EGyHDVem1Gy3H1VA6ri7esc1EWXjZykTn3zFYqGqKcwDb2MvXoqPqzbjDLhCiUoZ6iLy",
  "key14": "4c6DCeishWwxxT93q25Kc47hH4TMFZcUbZdZHTp7dv8k4aE5M8iWN57hZT5vy4cpRHX9KyDYLKTG87U6qdfJ9yqR",
  "key15": "2dDco4DYbqovDA18avkEsEEZd13bsH11bc2MVxDFiY5KooUHC9LuYzf3GdZr1VzYgN942xuKEN5H63S7oDCUs4j5",
  "key16": "3Nn9pNVGDfiqhV3JpV1QhUhMySc4GhUoJaEscKthC3x45Dbat1yYA4eWiBREzhFtKEFt66tuDw1ehWydG97n4yjG",
  "key17": "2TCYQB1AYfCUEE5aAheUEyQpjwTXFHjynL5KemdLPKq814W3sgQbLZ6xK9fdXhkV84Pr3yU1kk6VfcmjXSPscwff",
  "key18": "3yZyW5Ms3Q59pge4koX2aTpYJufGdM7U64EHp53qsLeJDa52VCAjuZqhVGfhnmTojoamL8ML19eWkQEqytjBtLw8",
  "key19": "4C3wZYg8tPQMrnLaJ1YNf1bWf3yBCcXr4bYgy6vYYCFH3ZCRyobyQesVkiyRbTrEcqu4Bd2vh72k7Yr5geQaD4jx",
  "key20": "nJrBaeQ6sdke9rMjXmHCiu9bTGkjrvjKmaE4VWxErbzvAsVgCxD1gkt2reKtvmwSfxEob8njTrNydBcA6PmuhjY",
  "key21": "4m7u8E63kxGTjEfs9wMdKY7LhwD1x2g1pyBB57umAd8wyC35YYWM1JyqAwAnD5rRW5MZ6cxB3T5W4Nf51CvJor4B",
  "key22": "3AQEeY24WUBT7vuCHo1fKzt6FtmvUnp4tbSaiJYSrBCTjSZDEQs1EmR2kRX6TAWnenpkHLLprvchwzS4RZ8UPxZ1",
  "key23": "4pCFMmAXN4sLD3FShobZQhKJ2A3DN7KqQ1AjXPk51JG7tkEisAev5p41YggL9fStg9c1fyUPRSzeUEdSSGVA4UYG",
  "key24": "4gN9PFVSfeMdD8mtUG4DcPUXSGKCf6QwKEokPCYvyS5u4qMKaRLEznbWZES7bbbfrteG2RQwv2HiFHkzBsxJTEjj",
  "key25": "2TNUHT2owPAV2Yr8pVjECrnhZDqBSwfG5roUK2HL4PG8vMGWMtBnMv7wD7Xwjw6qs4AoJoZdnEjHYQkbvtqtU22R",
  "key26": "8wWLc98kDmpuhyM12A51xhXTr9SJC2tdLn1kJyvmGMuuykthbyZ5r7dzxRkc7ueVVgA3ENGu3a5nTp5wL5oxCev",
  "key27": "3Nh1WKfbh2DyVA5hjq7ZPz2ctgVozSiGyPhDRE2qnLJ2dB3FPdu6qZymtcenraa3Gv1wcdejqBiKUoo8ys1nrXxg",
  "key28": "5gnbzYMYGRXkRrhc2CqG4pmGiPwiB3JiexDwRXarSeAe5varPjdWeyAeYA2wz8M9J12JUkMQG6yRz5ckDBQ1N6Sf",
  "key29": "4S1JhD5wWTU1JvxWapNNoXUVrvCGvCGBgDFsehKvobEgDtnMZGXY8CiL2L6FFe2qsC4GH8C5bYQG8afNhCZvqkL5",
  "key30": "3QCcjjWNbvzXAvrQPiECuD1AXFMW6JooUUFe2iyQmgALasN5GjgZwxuxypPQxYSobXt1To3qGdYLMdSqS3zDQomK",
  "key31": "s5jAo3NQyRcRekxoxGdP9J3VrjEz8qL4XQ2hf4iV1U1oQnHEHPBFsTe8L8g4aAk8EJmADiJmT5XFhs64SAcce4d",
  "key32": "4hZBTEAEkN4SwQarEoo1WM9Jbvagc6XRtd6hZSG1CxmENqtPur8NEVNost385V9RY3bHud8VrLm5hFYRHybAbqLY",
  "key33": "dxQJuo56Zuh9ktbCpPaA13TcXgAytopjR2HKDZjGaRT5DNuVvkL7egaYPcozbbHLqgAUwNd2rG3CVhMDxAc3jXj",
  "key34": "5xpurhep6ikW5kyjndxNAV4S6mdBu13WUZ8PT1BACBv5KE6rAogUt6kvckruMUvjKGU68xq7r5XSk3sVigstZYbk",
  "key35": "29jbSUdUGmpBQAUjeKeNy3R2QqFm4VKRGJq3J6DTJiwcJf48JKK5DBTi6XKTVZhcbqit1TwxBDwkzZy8Y7WeuRXA",
  "key36": "35vRzACYMYEPxc3j6umYL1sMCecrR1HXeBnGcKS2QEx6jMD779GToLp9Uwh94Seq3rwQ2TK4nhRbAixBaEL41egt",
  "key37": "18UBdMFghWKqvEAS2GXU9udAKcXzyEmddtASvDApNhetaaNxC92KLwn9EYYwj86WDc6zaFbDcQkLqf5K52MyUBs"
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
