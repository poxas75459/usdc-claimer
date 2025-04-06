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
    "2hu4b5wWjhDwF8eRb2mQB1Fjevv7xX1iQPcyqxVYg9hzYYgTcAhqgyu5L31NvDEy4Spp5M3AMPeAHJoKR5uGSQW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKJE5ZFfCtxWcpuD93dKrmd6cEH3hPFm5A9Y5at3i8GWLUxhKr2v6bqeYqTYAKzAJYTZRmhHj1drjHo45wsfocq",
  "key1": "2oJq6cVa3w5i9mXrjeiiH2KoyS2t7az8yRaFJEEmRjcxMZBachvKU1Ci529kXmwdzePZLqqL8T29UZ62RtM4EB45",
  "key2": "5rhgRp9DrzbNBX4ANmAJMrZdbDLv1AEjx4qeiFTBzH17j2WGEceFG5ogKgD5enjXFLhB8giSMd9DhE57rY9oDHJz",
  "key3": "5PQnBRFzMVVfQvXus5nAu45ECFB6hSVV9nrqwQWMxnmUruCcpoCtPYCJSFmCdGa6exc1vHqBVATQN1rRMiuazXWa",
  "key4": "4qrcdmTRQ7dMckQFXdFSj4enYq3B7toE9heVZzcAb9pvz5Faw7yUC2GZ4uX3CNGp1ySxCQAppaL9JAFQbMSE1yLi",
  "key5": "5UoSNuYJbg8bAMKjX8q7iQ5FT4TgCeZAyBudoAyFbDk6w7FBFQfK1pbWfWGP2VfpbbxWXVcc5WQhPjhN6qyiBErF",
  "key6": "GYDM8NgNdLx4mVbNYys72EyWQMncw6jzp7fjKM2qMcWYVg4HzGJNbKWJWYvdHa6tDkbU23XXvSaW6AmmA1tHrkV",
  "key7": "5dkMxENVqMVDHD8fEFknn3kzm5WgqFTAMdzkqsCdueoL7fzkGdHBL83CUcDbkd9AXqbcHDR4hZsyNF7oJ9C6yDmF",
  "key8": "wTuWqi7hztuL5ncs4N2qBbS67iCyJxTUwJmBX1NQKxqqmY6Z2wCeJZx9Wp6sorbgg6y7MwVdn8Q94WSCxL6u1ex",
  "key9": "4Hxki2LS5cEiSbQ94G1PHCgUoZAo3Agsq3dMahzj4UJDT1kuhdV1iPf7zATqmbxqHEbTL9KgWQmh8N66w67TnP6N",
  "key10": "4CcfrXt39ZtxptSKnzGQ9zJTd86N9EsZ5FPCt1ZWQqe1Feq7unVPhUq3jfQqM3AjsKYX7dY7TxKEus4PvrLrG8tg",
  "key11": "PDg6zkptyRSHGfwXW1atuy25Cye9UcGCJWb2hqubzrXYFoNekChr2QTcqXn76Tq2ewaJdTKk3v3twZaGC4A7udN",
  "key12": "JPY13TxhQhe2sR7PGnu1ysxLxcjmMRKH3FJcEgT9msgGMg8647EQED1pDNV5gL9vDUnRScmpqj72AXprTJL1ieu",
  "key13": "4uuVJYsrabF71kypaHN4FdZLh3cbJwaMbKqn6URk2i1Nud8ATLyikh1Ft1KGTGC9QodWhzPXDwpp6gbCLwcEiF66",
  "key14": "4wKjCaQqKkVmRN7ToRJ2EBD5mkrY66KQABGLPhJN6kZWHLziefoA3P9yNsun1qLik8dHwK6xL4Fm1TzSDJaiu7Ws",
  "key15": "nYThyRfs8DivUo3xXbCnRyBQFdtHuSDYBrHNCQ6wh14ckRacvufxsfFp9DJJMwSPsxTz12WJWNZumrg9hBEJWqy",
  "key16": "44EoQy6qnwMM9sD6DgS2pVsh3gTgdDFAzukmM258jdAs8ZNbZY5ijN1ypfiPQPrnCWyjwNfmZoajN1nuvDgNGA16",
  "key17": "F3BPBAszDGeamm7rFe4wENYzPZLuq8mnMMzzPohDuXgs6CsALjbfRtuSmnkXMZfMZgfQTLy6GbqC6iJdUJsxnhn",
  "key18": "Ywb38t9P3qsYcwcZrsFnGNt2E3crMktEALWGNXbowq9BXTJB12rCp2Zhr1c6a6VX9SWtaRAKrWHDvBp6uT6ZRup",
  "key19": "4Vaemp4p4cZdZnp4NKMwSr5rTTTr5gqEMjQ7efTgFgMdBLri7eidfiv2rPTRH8aWAKbv57Bh7i4ncx2YWNRLJFYT",
  "key20": "8ZCSEhfohq5hXdktV2q5BG9wHPXngoaPquUWp8cGBGyyBqqg4jcJzjPATmJTmD6iKsXac46Q6TsuuPbgLgnjSv7",
  "key21": "DWcqh4dPVnz2KgBSC56XzdVP79iq8nAxmYqp6vG8i8z3Eyc5gkAtcwVvAFWHZaxRtNLm9f1fGc5bcfF9oTiDPPZ",
  "key22": "3P3HpLrTUnDHLhwzHp67g6vCSGqpaHP5WBEKrB9YYTeeFnQ3793NXperSZPtbhnWAhQVss7U4QJ8yySEMJprYdH",
  "key23": "8HBYj17urf6sDCUL4pSNdAmB5p6KAiQzD9wJLm2MaAkyjQn8FVtyDyQqUve4u4LXnna55C5ksiPk7FxYNzvMpPc",
  "key24": "4bhx2GWa643HUwmnSbjt3pUbjdXsMb14JrX6RDqC7fEGsKBdavhMUJSEkLeSce821YhsT22wL6B5WuRkgM43dRQT",
  "key25": "3npNfyo2k3A5UjdojfsYuWMvy28nwXFU72MCCQeHFH8Wav8eRutSR2BAxHoftutkv22nAaGGpEU9KtLXTAAy9HGo",
  "key26": "4vck3kpymH65UzSd1r4A3gKejvUb6DbsgjLWxKdypjWxTDGyHcAg2MVzEB6hut8xupqL431rK1vyLt5qhhyx7TSV",
  "key27": "PQ1K4zjtxg7REkgJwEJa3DxbzwaNzEjP9Pm6xpWeLCQpcvkUzB28pMKkJuUsFudnT2G4oHXQoKnrQUZwddFGKAA",
  "key28": "2gKVuhUvDqJHR15fnQ8Nfai5AvDf2zKJx5zn7fkKjySqnCUy9NCMbTvmNgtShhUhi4DT8nWQkg2ct1Jk1ctNH1Pk",
  "key29": "2Lv3zBUQNpSBMUA7Z3BVSgZEarUuze8tqoGciLqM744igUncXHdrPSbXKCrbsFss1ju9gHaBbmzjtP1Cr384qSH",
  "key30": "g76N81jZ9NJZ3BLKKdy1VmtWsy1ABSQJDp5ZCgvAaa3XDAHBsfdzXV6ouWULXWt57RvBD9tqcP4L196Sw4TKc6U",
  "key31": "2qLTV457nSuN1VXLvTKnDAdXr2DYpYqqq8HJKatmsvWFcBpfAJUM6QZQrrZCMzrdFKhyCBn8a95uAaWgtWiCegCi",
  "key32": "2TfBbgd49tZCxkYgibvjK3TpgbcFb2tUeYEihVbXCGq8gwXqCQpuGXpBxPFnMbWAvkxMUbhd9A3rSgi5HXSZiAqx",
  "key33": "2wev7xjp61W85SX1r1jnoUn3apBiLsmVZm3RrrN4veYigPdumvDEhnwrBp4rqhP6ojWMbxx5hayEi4wvXiNpwosj",
  "key34": "2EArCQqsKztU6hZXqaGR1rqcqNeWDFp9TBx8PBNXRArKDjPm18Vx4KsZHr4d7xztR4tT3kDKJZTLWo9WdJgKdJLu",
  "key35": "21V7d3GWCJ5kJphoZ2kmqKwd78vsphW4G8RQKZqVkwWSJeGfu18CtENFC9Nom7WUuRGPirYqw43sqJVvwQZQbEdd",
  "key36": "5SjBGLiW5UHo3cH9mpQgAuocqAzqgLE33Zau9LjcTqC8MJxCYVBf1vZSwakHww65Fp5seKE3yf2sJEb9E4STFAT8",
  "key37": "Xi2MXVsq2G42r4ReWPAqHqWjyBvV9MCmjkgpzijnU6HiYj6APUTd3u8Nb9aQrpKayzVpQMH3gLUxqdoiesFbGkV",
  "key38": "2n4QyNxrESLKiPwQzeudPZKE6UxDqxTpNJ3m6uZwxqvoiJxi3oceLN44pLwLfPzDJE2HuJfzjnXSYRnDx8YeG9CY",
  "key39": "bNGCdubqggKGA9DVvPmX4pyb6UNg1BHLCBP8c76p1H8cC5WCw23RX3rXYj7EKj4rdc86XXqzt5xGh7Q8sSdSzUQ",
  "key40": "4RGCm3RxUABxz3tsjze7DxyB5vstsEMxoQ5mGFg9ziVBdKBV8u29hXZHE4m46EcY8a8WdzrLR9aGiP8cHdGsfCQJ",
  "key41": "2ceVbEY4ejxPrWBTHUabpxe1SV8TakLFfYUhhYesLNjPQ6sxx8Lth6Rh9pQ4LJEaLHVUvUPfzbZMTpz4Ruy8GQg1",
  "key42": "HCLamit72dBet6v4w4kXnAdVxLMeu3XfWwdmJkAYBxiBNcFvkwLuMNb11bWcT6EXfN97KkCYqXyeNqoMXBn1cNp",
  "key43": "4CFSALgBCQ4JJ4t5zZ3nZRgCSgP6X4vLtStfJKfNXFLGcXcxeAk8PazQ85TdWQUJ31dRgzAFFVDCfkHKNFTA94tc",
  "key44": "4T33Ba35nWzPyZVBiW6ubAQvX6Zfg2EY2CWRQYN7UBo4K76pjJ9AXLarG7cQ3h2JDXqHBd914YLLVUJpG7EJp7hi",
  "key45": "2U3kCGtVCYPjQ5fiYjYiigHdfGg7tvfKw9bWTNabmze3ravBwPSziiXC3h39LfqLsTUisamRAj2NZodx2BTUqGXe",
  "key46": "4TU2vJMtPQ84iJFE3BDwKHzWzUxPLqFeThytbcYzKUb7fSKNn8Ne4x6LujawujPWJuzbVU8TRhW3L44WgNGUhfr2",
  "key47": "4rsdk4WD4zADg65CX7tX7PjQHwJ2L6adCW2BgrGwTfA5B11QJKEQZgCiQ5fV2cuXngjQFUSrgfvKJZjzc5VvEsHD",
  "key48": "2wdvQfSLQeC8fFHALCDND5sbNAttttWduN9XUA8AX4H2rspQ6DdYYQSurFMsGMmZivwnh4fn7FvfR5BnFDXtMw2b",
  "key49": "GdSHQ8MbnfuX3FSVHWHHneZQwtz54Qar5Si6r9szogjW7cfBytoNCpN4KjJu4wRjwGwd2CcaTKKmTzjmDeQVEdY"
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
