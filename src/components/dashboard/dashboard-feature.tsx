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
    "5yR98wdKpXUs94rtREJTdFwKfXkwAFDEjNisRScdMSbMHz37juAdZfA6whuuJddWCxrS2d6w3vwvqDuC5KmePwqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdCX4xDkQ5V4g7wD3PRjwb6gBFFoApZdtimowE8RPfker3Y1r5ciVuPd321iUtDGMhHDwSx4AE2aAeiANot8FfY",
  "key1": "3rzcftQ2nG2KyDT518Rcyn5r9UBrzriiyXJRofeEYzqBhj4UhBXkTKEhASa2tQGADxAuBzodeykq8fTyPiJwhvz3",
  "key2": "4NN7QgBR1Hf2hjDB2ryKiXXnMnTtajZVwJp9zx3bBcGgnPdL55MzvydjT5sJzzPV1iwT1xQUm2csb4tLZZW8NbKD",
  "key3": "2bLYsqvUhdWRxXLmPWX69ZLzB2r1dYG2a4YQYYuUKer3rhrG8NA7HxkcWCARSNVhtgu6LBfda8TDZVwp74HHBZYm",
  "key4": "37CyomAtTYJdLCj24qqqhiEa3LjjjE84EwDnTi9L1QLYVLD9mb14tF6x3Ssigy1AdsBAx7cFFUVkbEaaWwMR3a8u",
  "key5": "2pAqZfXYMwt98aWTD29K8ALvDzUo74u7aqnzgtNgj9Qaf862SprdVSiA2yqmFBWY4fs7kPcCNoT8XmEkRYvHVBnE",
  "key6": "2T1kCyPrkT9nKYX5zHXxLmZQdW8Y3q6yZWyqXjFiubhKfYCkmxbAbEKUC2fpx7ug6v7fTcPRpVapUFzMvp8xRG35",
  "key7": "2qdfAAyCHg8ciJ3A631UFxBii2fxKszjmb4mp9CPJGfG6YdanngCvVVgVhmrg18Ety6CCPpdaAiP9mCqsBS6JU1T",
  "key8": "5VAo8pJdgfvfNYdsxZNoLVb4kmniMaMb18GkmL339U4uwAA13GsZm7FkZNnKvFHCaZHk5eXaTgjybMvjktn2rXq9",
  "key9": "66NqHxavsozY8hQKF8NaDgWUrDJ1VCuKzpq9eYXPBjBDWCRqffiC7vBbmQbqNHeXxikCUMqJzHwsA9sjJy8fgnrm",
  "key10": "5zqSq8m2Lj2fJWfnzQNwNDFi95H8yTghc8rrvtGgLaEZ1xkoDLnbETPFWTbdoXgjYZCes6dbgJFn7Wdxfs4mr5vH",
  "key11": "3FtLqkSNHxeErD1BMQsLx9r7RjadcA1JRdXuqEyokR1V71s5XXz549rKYNuow9mFpjBEkjtYseFBE4Sav826PZ3G",
  "key12": "29naGoVfsnrgcv8jUnzidmo2XHRGXp7GSqf2i84q5BM2SZTPtAZMXEscjzBVJVnqw8boVnxUrMTpypXoWmuCQMPs",
  "key13": "5ZGiBpRWYAJ1aHL6skPzTEp5tnQdjBtEkqK6thJKPCfhLprj9M3opv5PkErC9JTPHpLPBBDGFqH3WZkUBD8oYn7e",
  "key14": "FTPpa2xKXR24CF1KJvucdMYY8mEbbSVqry3aEGUYKeTEQTjzYKybWtzriG7sJbryprUcnxbHA7Kr8tTeWMpCEWX",
  "key15": "5uLiw7TMNnmumz6Kk33dBcDJMzSVL2yqLwrpjLZwuwWa8h5qe5MNJ5eMAPF97YzBzp9vSkoFKfsw9ZLmg8HMMKpX",
  "key16": "49xyAXBwn6VWT2Cb4nKFsSN4Jy2mPD4YHMPmHdB5PVrLUGvBRQnByzQK2YGjsLs7tcoy9ipdTKCNWfiYR49UuAqP",
  "key17": "227HEqj9mkWLt86cgyb4wxVsTAhVUb7UVPQbysL5ifxYkeM3juvUTruhtNSoTDzGXegRerajXn7wNHARSUb46dmC",
  "key18": "3jLks6oUHX7hBvAZKNCTRoW659BxdrB1Wanw5UbkFAu9VraA3Uojf9GiYMVraur5GjQqsHtUFPqJTVRZVuExfmcV",
  "key19": "2iyHpX4S4CacwjCTezrAdiaMMPUhsiZxU3qEQn1TeGWVNGPwmePcNBLurwdPwLEQwSXGwk2afY9ShyYTeZMQfMy5",
  "key20": "573FWH6rW1VgGWo6TqdDbeXQn3aTSZMHTJSg5qzk2S8FjKx28iKZv4sfXektugAPmWsmwGouK3ESj5gpcKWa8nMD",
  "key21": "2sH5RmGRbH6qW9KsY8ofhjaZSMX7jo2itWPtrQAyzHznwtvxR5wK1ZyaeDB67Jpf9NAZEta3yDemhx12T8WdSAAd",
  "key22": "4QDsxyRmkpCwN3vrG4RhWPYDSxez6SxEPTSy6qbL8SD3Ns2GPUwMfcAre8gt5MkWQYwGetcDjDKLfXVuBdc4iAXi",
  "key23": "5pBGTJze6RVaRUrB9Lkr6oJbzqLDaLz8XJdzrJtjdBCcWnrbHvabnimQWhG2GCrkM531KSHwDCCaiLeYz4WrCvc8",
  "key24": "35RcQfYPYiYPCjBswGppVhoRsX1Z5GSdMfHuBhsaQgyjgSXkX9HAHd1RiPsJEGcbFjUTAA8mdCEo63V1vj2cew4N",
  "key25": "59FmHsYJnAA1n1rsXeK4N34zuqvmThLAmaE8fsMehqKgMwoJLedHZKbVQptjTjf8E9ByMZmd6v8orCVfygye5DCg",
  "key26": "2jduiSxkEjCTHEii42rhLi7LUTNfD1RkfWkKgZW5fUNJ9KDTya8MEvzQurZFZMfm6nK9yahSWNU5LS3a7GfrsDxS",
  "key27": "3V15u6qXRvjnxnvTnf57J92MYG1ExUViJu1xLjhs4haBx121x1PLyJ6v6qxKpFpeJn9oPNjnH4j7xpYaif829f76",
  "key28": "5oJuxcrgbGmdJumyESTwMtGMKkdJcUXFYcnhQNJEL6VFBQAJSTH7PwTWGvt5uV72F9DMy8P4aLQaCgDvByRyedeS",
  "key29": "2TnVmoMvvqxm8NUUATyQdikWiVtedSmP9xvy4p3yepSAysAJrxWxCbg3MQQVhMygEARaDaZCqRs29bKV4YJjW429",
  "key30": "3vw9JihhifZPdDhBGPahErN4McoyPFwuLq44L9GAy5gGLZSoy8Uw6aRqfY8XvMSxUqEncaNSHVaYgWv6KrFoigXr",
  "key31": "5YBZ3ZkEUJg7KnTMuZcr3WBJB9rZSNLs4uKJH9qHEjeoVri9H59g6uT6dvrJcL5APKLRWqKiVFsh5Z5ciQ8myZgL",
  "key32": "171XVZk79vTvb3SrXX5NHXXWvssJQcnmV12SamTwzXaPpsW7QdHvmRZuA6xMvqah3gBMRgyLiQfpMAzF35rDGWR",
  "key33": "2yPuDDx4Ew9LMVRqxvFgx1jRUDSRTx9o1gqTeq4ebA3tuSqLjd6fyM1Msdr6N3TGvhn4QV4N87BXbZ8vJaBb5MPS",
  "key34": "5gny6zUqhBnD7V3kamVnHND1TgRogzJkG2f7ZjPrv83ieFgwVjgVvBJGQ3X1UwuGVPqigsk27KSc5oBje9KpPWoD",
  "key35": "517Mp6Dt3dwvomfoojgfh7M48N16QDTohngMzrUAYy1uYtvm67Nx1v45qUa8atr6VG9oyZYsGdquV6u43gCNWyP1",
  "key36": "3Dq5J535UKP4cMxfuPtynSDA77UKf5GPNTY3eKp1z8CDoRkXxZi2R4PtxgiSqUuiTDEzzsvDF4QBFtSUnWF52bN1",
  "key37": "5r2vbGVjWyKdC2YTXFLFZPyHKW3ZcqYjZw7JnxH6sy7APDY2jz3G4qU1cTMebFAy6qgJtr5dg9JvkF1BQmtRtCiA",
  "key38": "JYSNzF3FhGGqHv1fXPHcNnyJroVbhyAocw8okrq3UfwHvn2vbG8CPiHr2BcPwdLwH8N23Rp4tydLFjn7CRrMEuS",
  "key39": "4PZnv8b1TT38LuAU5yUFhhNFnyoy4vXedSMTxPXniSeYaKhWyt6Bqs79LpUKNL5Jq313SsMNyySg6LCydAH7EqGP",
  "key40": "5FPvxuNETpGrF2vKAfSoNeM6ebzwNKrN51e7uJCGYi9WPUHphAkvkTLZE4z3Gmox8iLYhKFnrYBD3B5Ed46P15Wd",
  "key41": "5Y2ZuRB2xvEQ6wpcaqTELmZsT1bZ8LerH8ZMnMsKrZLZLdcdBSbJMWBBnpZuBK5GtKYevmY9dL4B5ejjvvbKAecJ",
  "key42": "23xbzdziqkJHLVnwHGjZ2N2KgjwhnbDTPbgKDgFuvqwKbcfXkxCzzY9nRASHDyJ3RRMNR8RMpG5q6vXYXpDcszsZ",
  "key43": "3NvGEDfADQXBVCE23hFPy66yFVu4W5P2HJcPjCFaHSSaqUwXptVNPZeQZxWXgLPKMi54SjjuPZ4R3YsRLuNH4tn4",
  "key44": "4879u1J7jyxKCyyaW59eDksLaD5v75fkgQFaEZYdFNKN7z9njFKNuLHpeb2gY2kVoMnbGjryuMve48c6Xc81MhAt",
  "key45": "5FgVkBmj7aTuzg3ocoKAG2aoweXsJ4yKgXUvTR8WowHPDCNfA92sAhubePwZXSBhHaFG8LbSpmiQUqt66Pt5sUNZ",
  "key46": "QAKQorKskaGaEvfkYAywgsiyPMsrJRdWRF8BT2zfnxoUhAqsjhHtxZS4aGBg6qFPoo2YrVcAMpNrA78GteFQbEZ",
  "key47": "336TfhnVwMEq4UnhkbiCRhyLe6fcCg3weHhqjbYDhFc6aAS4zTrhxmi5PgyMmRS58Nwu24foJeM9M7e3YBX1aVJm",
  "key48": "4RJ1y6QsHkv6JfGju8eST4F9LnpwYpMxgm74mJRXiZFhsHmGK9KvhY5f1gohjdXGMzfcnaqYUMWkCefdk9R3Qes3"
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
