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
    "58QMvrRhQrEts9yp3pE3kyxsLy9SEUtz1XbFwF9RoAJzmUqtGPY8SF1WGS6C25NxhDnT25VWNU2jsDs7X8riAUi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UJKa27Z8HvNJiqgdxHqrB79KsRj4Qz2KkYHQrZFZLqQ9P6SvMUFirGerUhxMuA7PkStDmhMi5ZzRC24pEAMzgtK",
  "key1": "21YtGJH582U7G1s23BFUeCSjvFazaNiA4hHzqCT4cw8bkp3VPxY2NvXU21zX6KDW8jpam23qgCdBVE594vK856VM",
  "key2": "5QBZe16dNHJZrhUUc365Z54jrLvrq1dtPEPfFobm65sbaMru7TCdVjwcdsnafAY3bCNp8k5xaqEcsTw4jbTbi1MK",
  "key3": "2sDhyuXKX6jSt5UbMdgPyf1CzBgW4FJB1bzUbinQofnRwH6Kd651Uh3iBvaVDZ3ckEuoPS4TT3jHfjy47CgxGaVF",
  "key4": "3WvNiAr8T5UMraQ15EGtZbXvM5LwaJGEeZ6Zp8aGVBwk6yUgrhaq6kKfCT6Srd3jSSgcwDZLgfsX3XcH8C338EJs",
  "key5": "3mUWVicsWqUqADJbqmWgH5YPotRameGT1LDZxoKNGG7Udort1vXujudgtvUEF3GgVMff1mEtNtnusjYE6f4BPzjV",
  "key6": "5entzwZcDjC2YEdD1dzBrj2L7pRehdzN5LdyY1bGkrTh82u1MHKeYzighxEeu5vpygLsMAe1e3b8EckSCsTZHX7f",
  "key7": "4v7DP8XJb55VvCV2Cv64JmY55CvNGhNBPmyFhRTGpvXaijNvRvQdhZmdf8tDqfwhArYAMMgsmudvtNWFuC3syqVm",
  "key8": "bqKN3N2KzkL4xoXcWownKt6cM1UirApvN7759ZaQywCZsXu2RDWJTpm2YvHWkRPpT5CycHPkHP3Axs91UgB5AUX",
  "key9": "CzRJuFNogTd7h2nTNdEar9HahtmYwxq4UXU7VqWbSkGU6U8636oAAAgP3WiKxFj33wAQY7QnVqepr1yiQEVHD3H",
  "key10": "3wpHhsSyPhbnDsLhSJs5ZBmifLzwpiGEWkuWoDWeRqetbzYKhi5aYX69ruvz2bJmwCxuLLLvhNXt4qdr9GguSV1S",
  "key11": "c23AcJbaBPDcQBvNbZfPwT9pN7w1arCnAnbr6MDdATT8c64dpkREcztsicMTQ9ycFijdsGjFU3JFYc4MdG9DahF",
  "key12": "5CG7JDNK9Ppx6YvtytdMKC1JxgjLaGbBdApupc6QVbtxkiiTrd4o9r258XqGLt6i95WNRXhuB8oCuVztv4TWKkfp",
  "key13": "5wyu8FtVUyxfF9AoQwSyqwJzDMZdt5VHBXdKFSMvUp43VTgKKBR3tJMtasV5Rh1RQq1fE2fEPUPjzYMJkNxeHcN7",
  "key14": "2idZjzkXzqR31DtjndwwwdrMfESC24SncqwejQowCj3FVyZ3nMpaJjCLgEQWjRUg43GMETmND9Q4zXeqpbM9i8Vu",
  "key15": "2JTKx8ZV5HUQK2nREuQgfiYC25zmhur7vYebT1hVnehzyEpEPN8AeGf6G6mJUQq6GpMuNFjhfqi2xpNncLQPUC5r",
  "key16": "61mReaMaxwX6DkafEY8NvMnPKrMxZf2pGrc8yVyoSYMhRSg3NkSB1r8sDHjykuGcsQgfF1SM6qXEueN4NXYCgLp1",
  "key17": "4d3YYUc3q2zXefWTGZTp1ipyZxMY7LixFryJqEeqCGhkLFF9Fh4ybCfjhELAGz35A1e82WLSwNKXNVQQ3hruDjid",
  "key18": "3q2wuEWMmcsMJduRCBFDYSgXXQEFdPAbq2khj1LYbj4jncwfNVFGExWhxcuLadxF8NbeJvo84BrE2jcmiWnxscGr",
  "key19": "2qbgwdAtr3AdRAbj6mgxqrF9PrCVoszspDiSpekPGk5WLfbi6Ec1G4QTP2kYchAyewEgmJ5n9NDrf7RgGKWLaZvU",
  "key20": "38Wfst8y5Nfar74arKEiiM7rcdGtEcQRxNUSHG8jLPU5TbrPSTRMcTT7dfSxMvrAyZX8xoUCXjbhzd358YYhxhCM",
  "key21": "x4ALfbjWPFrQiyAuuWqrto5CzxzD5KRhTjnCMMzpk2aYmkYVbwxm25qjyTHr2vHrYy2YynHEQMeQia7hm21Vpiw",
  "key22": "3LNqMQky7mQsKzzykSuvdThvWrfVz73HRFnL8gLJwrxvVUzt1Q8U5CyrjEtmUUwA1F21S9SmPJvro43M7WYV6Ujq",
  "key23": "22kJs7ucGLm1KJ434ktnhRPva52S4CYHXuL4eC6y94A6w3ZR8f3SmcXFu1fFvS1GEdKCkdHkaomMr9TPXdq4RNeD",
  "key24": "3ebNG2JFhERxEy9GTd88nwyeUUrMTzHGzsstf9ShPzkAMbXGHoMPigfjFXdHv9XugjjjpCWTzRMtToCzZmxAuRJ9",
  "key25": "4gkRokTXtnArDUwfidGcEEieXuKWg72mhUwd5gnDpPdyNDTaywgt7NQhe2UN2FjcSGAEXDqfa3GrETZbyP7pupHW",
  "key26": "3VD2PMLKczBuSCkahc9AanzJ3En1kT1kBryxZBsayYr1L2pawBzJydSch2kr6JFRLaS6KkmB5D4UoiSkjZys5uyR",
  "key27": "4fE7Aa3tFvodfBayFHS6G3AfPSPYQc3q9pSDVEFhnKBcbVbDw5Z1vYmMqGGuGiSCyWtSurhcdZKXHFMWuMRTsZgG",
  "key28": "4WnVUHcAdSUacfh4qJvULGRYKiTVunpptCzjYt1D6ZWVdQ8mw9HeCJLGKJJ8Xmgm7X4FG2o76bEegncpJEPUceEw",
  "key29": "5YWtQUTCsRin64i2SjcEae5euPyLV8pETwXbTQDvvonKxwFyw6kru3AsSbDcrmP25BK8wSFYs28AmUqSAwhqoj6",
  "key30": "31Ki2CMyzpTvtPhgpUNi5xz3cHLho7F6QA8UGCP7nSqqqmNWNiq7SorxmzNUCTSBGUgb8RNuHVtX9tf6NhQZfmLU",
  "key31": "mQH16QRaqDs9gEH8E3gq63kSGbJ3qFbaEyS8bZmff8K66dBbx9RJuCx7etFJzU9d2LtVHzHvgWXTtJoiQpxtcYK",
  "key32": "3nS9kyF9gW5kh9UR175cx9kFpyonbNVA3pSQivC2RLDD7YYWUMFrjBxyBPf7RnndHwM6GDrBEDVjZW7rXUx9FMGE",
  "key33": "3hVs9qMyXebXEnoidWqWupcCRTTQU33nQk9tg4oFNsigTsWyeAg9gUnt9Jvmgv7vTKfXfuh5wyu4bAGRStGT1b6D",
  "key34": "5bQm2BajqDeCV1ZsCVqdAYbFDiEdXdXGCqvUGvcUUp73vKgGK1jYU8Zt5GcV4BorYZAo7rS8aHo9Bjpp5HYt3ceL",
  "key35": "4tsP1MymxVqbcbjMbuzeaPsJ81mrMhjMHg5uRpoqvYfG985z6zxMa3X3BxK6SxSBiDyKK3yAGancVqDdbWbiMo9i",
  "key36": "3iDweYFW1oGGJ49YAFsem7xDQUffFoCTdXGbzUK2iCEDmYnSPivaj86C6QXW7umnb3HE36QyYZhNKyAHaBmLrWMB",
  "key37": "61NxgeiGFqLoWUGdqYjU6FtuZwP3nRVhAznmvVpimNLcZdqDSrmfJiqV6qt3yYopTWADer9LsWz6mkFhTnhAypQL",
  "key38": "4TX6n1wjtUkaR3jR48EQ8ykxuND7HURYaJRK3tsNLMjGJsrp2HfaUHvaweRNwpXuh31jzcB6j61zY987cTxZXq6",
  "key39": "351hXMmJki5fcnJHv3LshefPNkPNfRmKWww1iJwvNXJkKaRh9yzFCPsDPqR15FuEZfX23TZkNw6zFLTkxFSA2fu7",
  "key40": "5pNmkbbkjEbYxNADYhhe8fDwV8s782LbuY1cwBcgFQUTKcc2Qe7BaShwx9WgcUGwJB2Ri57vX7Th8VjQfzA5o73n",
  "key41": "3E4RNprVuHgJjiU2U1uid75U22A8SSDSNmauuREa2jkZpVfD9r9zgFirxbt4Y3w1cFZMrBiDwYbV4aMvqZCUQyRy",
  "key42": "UJFp8pu9XkLqLaTWepns4jEC5P71P62HGVMhmPDt2rb7WCHEhu999SZGvmUyxFmxTNYdAvppj5u4jD3CK1vLzu6",
  "key43": "5UncUievezigDD8bAboNqeTiAkAjb9WKv8tDK1Srx91usx3etyYsetkab1b8kmTDJiK8bh6HXGQZQz5rWSBRwe5L",
  "key44": "5NkRBMLshHAVHvifVMzxfNMiKUohwJ7BhaPBTmkYSKQSuvFmcew9sd9SH8ZUJJWqNQGEUC3XLWVuegCAFtDiSc4v",
  "key45": "3K5TyV1676wdCSzKcg5oAABrhXxgiBUK2aE1HDTQQfphJESXqNkAWgTTfve9ZdGv8yqJu9eRhC5SCmb1eZw6qQsp",
  "key46": "3jzkKeGVHhRge9fe7DUh7K4181YR5MAQ7QBLhwf2RCKaEntU1greBusYWBQB86zxTEpTazCHDGx2ExB11PZ1ss8r",
  "key47": "3Y5HGN69Rh11moyDzXV9mRneZaTBPPJcxRBeavMb7yV6rxTDraoW8pudKswnRLFCg25HPt5WtAKDfwFGjVK67Pre",
  "key48": "pSu1GfcAviTNKA8X2cj3dMM91AhTqgFthMgzQ3enoHdJWXzE8GoBgQEEeYs2YNT411Pe1YbqM6M2HSk7SzMPp5w",
  "key49": "17eS68NG5K5oFbYZfGDZjdpThR1i8wkS8kFY3bvnKDvfNPuSnF5WVVMGapDpq41bP27jPjmiKaAd7JUzQNfJaZA"
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
