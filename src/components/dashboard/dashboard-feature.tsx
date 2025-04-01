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
    "3GqHrYwzuaUEKdeFhif4iDdxhfcWjvLSZkBwvBPoZELK4X18m7AExa7EHprRXgsxg69p7c3t3tk9dfVCvsu1UYDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pVGeK3k4WEL5HtvhHde36kDYthXCmJttRY91sy3SNRBjAdG2fouHjnwNcFz6yer39tPwDbWLb9DN1d3WB8a2J2",
  "key1": "3G5Sg5gMYVpBuVwocyRR7t7bxQW9Dcd2cKQoDXtrmKCbHF1gPL3rY9baJJRdWEQ5PdeG1rnK3psTAv2QbTy7DSoT",
  "key2": "wVbubSxocg9JRULy6UodSA71VeRSMB1PHQQeAmDnUXHs3iwmENs6wXNQhGo7VbNgDoPAiyprSXWJxHb5nCEJLdd",
  "key3": "kRyP1jH59NUcU7AJkRBKx1CsojcoRmm6P73he4nBzGpDZaSyn439bmz8vKhRHTZXB47kJzSc2cBug5wRwMQRWti",
  "key4": "5mXJEk7q6rqqa2YyLiLj4EQgNeuJwYqehEo2YTb4xeXpVvWn6VpgbyKrZLEieVCoiaHUWsUPLJLcRJxAkYmMKSz9",
  "key5": "5bJmHFAzhj297sMjYK6aTZ1hCVetpmooqnz7ymNtefWLdRPLK968icj8XqNmL7kzNWa6JpacvzWWfezG7L4kPfvL",
  "key6": "4U6M1v5XbbjNS5jPjCAXFJ8PPWNHNFmNzTe8RGJSwFm71A4o39iovi9FXCGhpuQZUKWyq3fJTWLFs49UNJ6co87D",
  "key7": "2MMpjEqFw6L6Dai5X2fkY4APYUq2EMMie63woL7Ty2HEb9KK7URi4zsiPARZTF34VVyti6AWg8LC7gtxQr6biWVg",
  "key8": "4jtSyqzPUeb7pAaK2nAoiMHyFTAZ2NVKxF3Hhud9rAX4d8jutdk9LUeEVQSDAHPJF6iJ4CmxVffgfVxmJeLbe8WW",
  "key9": "2XtEetQNDJpNczUamPuu3kXqGuYzX4CE6ozomRs7PcJXUeTJinjzemFgGnCWWtoSvH99FhATLnzCTNJV41e6qNfC",
  "key10": "rrMPuuPzxh6zFHpdnKX2konT5pGcjFr7tFQEuy3h6MhwG9aSmKuSnao51963BnPLadzT6j5Mz7Do5BjsaX2idu2",
  "key11": "3xuz6zDxocgS5YafNmxfEvdLzy4ASLgWmYcHwPTLym4UiBTBQiweZVeMhn4eoNXmf4CZY8pwMM5W6Z9e8RHGgJXL",
  "key12": "42dDT3mzQtY8kwqVSh4GLKBpRCdmFJwv1cxUYfyVZYpMuvoWvLBLWqtXPdPpF73FpfGg3sdVXjV4v6rTrDCjPLmy",
  "key13": "26vtvUAv1RKf3dgTdB4U5n6zUPzW62UpBrUGWgVkMpVUffai1FYofoSHHV1bANmbHXG7qom3HtWY6Qwmoj2uVpUc",
  "key14": "4xVV7dDs3iM5LBxLAjxBFBpJcNUARWGCdPBtLnbaimChRmftFJx5k2mAXgMerAh4pGinJxUFTmUwVa4aPq2dtg5G",
  "key15": "3KZ9ZxvhcPFmj3D6Ptf6Kfg4SLevBLyAjbzSYSEHvHC5uXJ1XcfvyUpjyx2T434NLSedffhEVSWXQNsuNPewKir8",
  "key16": "hytjcX4WV2Yp21BdrV6yg4Am2KwkcBY5L4bquYvh3BdrCG4P297cT1W1c42S3UBRZ4VLU6R7iQCobbcWUYip99K",
  "key17": "38kyvF6nKpGX7vfDseKLe4RKBASLTHr9mHq9eyktSYGUCCkJBKRA8Sxq8BpREyXuPKnTEcXoJw9HScsDCvYCaRsr",
  "key18": "4SPJwHeEdXTFKZxb818zEnYgDLDTe3L6oZxZMrnTvKfR6CvfSpkJ1hVU5HRFmYRBjfvwZwcqioTGgoyUbe5YrNmu",
  "key19": "4HbuW5w6zcYEnLxHyykE4hS4VMuySUM8HsRFbNF7N7t48GQG2MFerk19ueeTMEX4bypqzYFpcM5XLSGaufbE498z",
  "key20": "5YzHKKBC95WBjHCr1mhLZVpWTvefkm4FqqCzrbQS2zqkYTLVnzo9s7su6SZEN4tcoSoireqWMetvLHjCtagAPcRy",
  "key21": "5TNUFg4uLmNMz5QxhNiUMFU7f5zCbPETA17UvREXL6ZgVkvYbNqiXHsKxcEqyGdAdbQpBzw4PSUmY8MRqabn1Qb9",
  "key22": "5yZAJPJGyen38G3Wv2gBPssXnLf9qGwiP8PDXRvsDJAVpC4sY5p5rmyWeyvneo58cy774pLwwcZHd34RXpz9FKDP",
  "key23": "2AiuPQoXHyq3JT1seMFpFhKLyniHf3jFKZGAZF5HtCiyokNkxuuwQFLQeQwusrumir6HzGcCivdhgrR9H5cnPLrk",
  "key24": "31Rrwnxg4w8aCE4aQNQ7tAZQtqRM2t2ahq4nL4aJKPWsJE24vhnMdPkqEJp5VXLZ9bdhQcVC6Nst98mSjuURQhMo",
  "key25": "5VekHJ4tfm49z8x4wGiMZfgYwqdYXFozUmR5YScgPFtUdfUa1QkQfVqmeUD5TaZxoAryELyc1PpvpNQCxka63rXL",
  "key26": "3WMeJjDZEdHk6FWhvfgfzYBiTo4yvZ83Zh4pXvrUSX14hsQHYd7FZLNzSxPZ84hEktZSG7wZnHKYdMJ1oKjDDr1F",
  "key27": "5Efz5rcruqs4KSxK62SNbsA9wKyr7FcEWNZLaLono3qS4AWwBVh6FyXsJ6wqY6zgudwgsyjkjpDyii1fVyADDChK",
  "key28": "3JBNpZzvtPbGNf6h4sPDWdamF4JoSE34ja1fjUxW6hKbbHZwTA2gbivRQFEPnQ9Duzc13zdiP9gJAzVWCC3YdY6V",
  "key29": "3MHiqMvaCSYCEWghvgnUs34cSUPQboTBfjcsZzC7tRKjhZU29rXc8Ww6VFiYrV5LyHfpp8T2LchS3u8GHF1WtXM1",
  "key30": "btNM7ADMgN1WpuGTQ7WmmwyuhPy6wvAZFn9911yjWoSzHoA5oGEVDEVtQRk3JHjnANpB87pYE4saSBPLurFb3c2",
  "key31": "KEy4Vyi4r3Fm6aGoz5ucMeeSshdgg1F6TPo1eTxXpgmEHJsRia1YY1jC6T5CSVWtGdADQBq2pm4yaEBApTVwdZj",
  "key32": "2zCtKiazv7v129PBgCdHyxpijuPDmtL2miBAJcxAMkcgXm7SJfeD1uH7wzkwdnBTEhx22e4aLoNJyU3ZXMVcy3dR",
  "key33": "vGvy7vjuNcCtac5oz2yjgd2WXrh5e1usCfWY5xAKqp6akvmz3hyXNu27WndyXttKeYGJ2V2LUQ64iSnShmrkjfc",
  "key34": "5nZ9p9rLny1Lx6D2fL7JTB4L9Gou57hrphiKB9nRzZhSmNr5cva9ug5NwjLcSUyzz9asCW6ncLRmdQyLKuXgufau",
  "key35": "5vETHoonY7yjSvDXW2b94VrcrkT3CptcGtRZgJ4SrGGiicHJoAEhxuXGJgk6Cr3AAcWumWsUpJBBdqwdS7LWa16k",
  "key36": "1CTXswX6PKExucKxsdL3oAkvMeK5Si6GDTsoo9MTAUVrBExko1pESxvKkqt8J1Sj9b2hmACDD5685bh8XJ3QExP",
  "key37": "5k1F6FYBAVB3mtehDmwLdNCKxD9fY9hPHV1baTeDNBCZScdKokD1rgs4b9PTwfiy44bfoxEUawTYRNNyoj9FDzvU",
  "key38": "4icryv4Qs9euC4yZ1GWNXmGTNRMGnR81TcbGdTcJ9N2FreBCtWyhBZbjANMayzyHTkd86ES8fMRAqN9yuEgRK94H",
  "key39": "5MomoojUEqkJc2SKxj6kAqvhYAPAbxdXvXBgcJRUBA4GtkFBbBRtsZCqQuzcRc9DaoGg37es8dbuqxt33JvSDTV7",
  "key40": "5vdvHEJ1Ewn9CKpeA5EZ3L8cZebAtcuzS5Ezju2ZGjxfPZ29CdN3XC4riojtD72U1A3hb4EHSiYB4WA8fTHMrDmU",
  "key41": "3sqJGBqLMKqAYxRn4vXDKub9Po9LUEYJqPhjeLrMGT4Ayn81nnk27WDmgKQ6MXfxBBMskPGseBVnSpXhqxjd15Ad",
  "key42": "2JkCBdC1zUN112oSAVb2bq6e6KKo4jseq4FNiJKttU7PoZCEZGVo4Un7TLsiT9DCLQcU3kXzthHgd5fVqu3cciT1",
  "key43": "GgfYSCKSn7Ba1NPfEvwSv29sm3jxDEzn3xBEbeQFYgo7uwhH1KMmA86CnfdngJ97KNdHrRyGyUvZGsDNxMgP1mU",
  "key44": "5WLMrGH3qd3cA6nUThL8KzykKXeZQGa4WXYHyv21GvUHehK3cDnQeD2mH4YYbu5NxsNrVDYafAmJpeLSnuuoQeU7",
  "key45": "2SRUj8jvtCEEeGnuUbxKGe3HR8JDcSDwWX1QP8tiC16bUt4wDhS2uyHUUcFDZSCjuaTi96ZfVE33pNU9wxQcVt9S",
  "key46": "61J4Z3SVnQF6WJ5wmWqiCahvpS5Z2whB9YQ7ixNxN5ufSNMXx1CgGx8157LD7awmDETMCVXt9p5EZ4gWF4eSfmUU",
  "key47": "1uWr1LCYhf3y7RwD9kjEGwmRtwkoYnPWpKAtEq3jhit5HbwECyc9hbQxR5N9mdspbE3fn9RnP3xyaX1Fvsu5AbH"
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
