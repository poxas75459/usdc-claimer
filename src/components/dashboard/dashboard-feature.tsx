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
    "4QPqj7FGGtzybj3UST2vFBuSeqc7EoF9zPcD9ax8Qv7kTvir8YFXXX2akq9DVkYFS4LPgbnRjGdrAVyG2MAz7va9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ZfqNvDmH6pZJEK6TaG1xjV1ZXCg2FeE6WqQVF3PqvAiBDXmfgamMgahvSyawsp5MskL9ALHBvsn2VQpksaGrDj",
  "key1": "4ADTtSPop6j1Sqsrq4H3SjTMWjuZKG4t6BxqyipGZzHWEQwddrzUwwdvC1BwituZLFLjSiqnLqb4v1gzLAA4o7Tq",
  "key2": "eSwaKTiwTeHXeag1xjFZPfwo5GAMRYXLkqq77DcRDBoBJziDNrwUgUeuh7vWDpumSUC3rv4GrWFp5jEaey9NYip",
  "key3": "5aQyqW62yosrLDp4ZNjy7dR2woUprgDReq19fsHfM7qrSH3RzR9FyHkmkaz6YRBCoUo2zncMgFcrSQXwxWdBTz39",
  "key4": "tJhjbqxw11HqPvCde37qX24pHpL2HGJUph4ZX81akTEJZwg2bUP6yYcnroh4CxQwEvvaZPPc1soJzA3E9hoFoNr",
  "key5": "XBBFLxHpshdmzUQNzNehcoVmgtPECcwizW4pgoqvSFCw71PwX3BYpsHHoT7wAnf6C1NReZYE1TfCTsbTGtfxaCQ",
  "key6": "26cmU7imwXiKERfTaVYgR1smnnCdJFFQCN2fVH6J3Dm1CRgap2Yj6YgqjMoi5eTW8pquQjgxrve2Tg9AEZ2HEbgx",
  "key7": "3n8FmbnLXxF72Axag7Rm2D2vLAYCLTtWWdS77R6SzAVJ526kjhnwiaxmfrLTJirkcFhZZsQJJer3ZRS3q34FzmMn",
  "key8": "2BVs6utbBxGMR1r4yCVdVofjYk2Xm2Jtd3WDXquMXDXUupBUfzcnP32Lm9BvXEegZ5Ew9X4U5EYTKTvuu26GaRwr",
  "key9": "3X2B5uYcSgvNBzDgy3CXnk65Mwidkx7Srwz7XcfET1d2yy3Wc5r5HrFdx9MCeFz4xrt7hsGc5t3BCj1hKNZK2qWp",
  "key10": "HQYkDYQhMcbnctDDSkSZR7PCtjC9x3YfPWvo7WFb9BwNXTda9xuDNpkwF3Bo4VA4h5beZo6Srf6LPtN2fPZjx4R",
  "key11": "E7WNrkKqFj8tJ7sFG9F6AxLwovguV46NNBexASqK8dfzChz4QNYECddJyKgQSLDtcv2MSEQ9MiqR59sRCGhKDbM",
  "key12": "52AdERu7zM7aUtjjqZBszbcyzWFk7ZTJNorZW8LGBNXxupsF2wuJhmbPLmFaASoooyDcKe95kcXVwf8iQbmpbkS3",
  "key13": "5KAT9uZqWNqvyjXFBEE66B36STTjeQjGygFsxVEzF2mTonGyHw4AhztfhtEBRiH1SZJDc3HvsbC7DmEamMQJwQn9",
  "key14": "2fgRBqT4J86YPmET8eaDj4LZJ57LX1wmykR9WYnqbeVu1pkn8b68GWcxTd7ReuY9s4nGHqhdXyLnGkvcSAcMci5Y",
  "key15": "5AKAKZED2sxRBXMXS15VPEaVGRggqf6FKGwo7t6PX2ZE9zuexBodBJmYLuFbun7qS4mCjsYCxwNgKkexfiMuJ7rW",
  "key16": "5jJVzuYBU5EMzxByi6WbrgMe95zp85oN1iLUTZqiBo9jYdawYEVHDWeSZ72zbqwmBrrBn1PhAVH7Xx3Q7U3tTKuz",
  "key17": "3o2LZXok46TpHB391XSiGbLh9sYYBw8BbSGG8V78HY5MDnJ8sdorQSW322KtpVokRggUGsigwatja3ijS7QmqRAE",
  "key18": "kS7Q16YcEcpXduqtDc2jhM2hgV8qDgL8gykwrEoBuuTdGwNLmYv2Qsm2bYzNdodu4Y21xUNfBXwpbYbK6X8XhuA",
  "key19": "4P6Qzf6g7NZADvVXdXoCYTbraG9jFo3pQcHTL7n8UBqmrbbrtZa54mLHa8fkCCZPo1amCfhV1XDCjf6KfXA7gJPn",
  "key20": "3zs6PPjxvn8kadNxhbZemtWLqTecstg7GmFGpXDCJDLd8fKb2MKBpM49zzwncqWNMn2WpKkpfCgonbKKhRmWvkFS",
  "key21": "5tLUYw7YFizHF9rvoy851Gme1DRBhG75xXFt1oo5Bj8o6adtPf1jFwdpMYtvSZ3UZAUizHw3HxAgWmhaoH3LBDDv",
  "key22": "TdevAkCCFdsAZsNysQL7kn9PGVSbTZxj9sb7X3FqSRQr7iuU7cuotak9Lk9ynKrx4yoWSA9FsBEJzGpFneWEMvt",
  "key23": "2reKEm7jiiBxgiYK8DWfWXjM2Tyith3bLJ5v8E6RXkjpsMNcoAWvRo6QUqNnJ1DjDpeGX7eRSHN5nz4Q4oGhZqbQ",
  "key24": "3AeSyr2FpitMZtGMYVUxHSPXTd8gdUMtS2ojp4ZV2Nb1ShjGHRALAQ4WnmRGYAPBDEqYjYi73oVPP2eupn3VbrqE",
  "key25": "5PNqk2VDDxT6aXa2CyirGRVboZG5d7BZutcAdChVsrQT8QAXeQNFtGeNUUVaTMXhP1dbHnbGUDC1T9eVz3s4VEVt",
  "key26": "2CdyYEyDEXYKN1jk8yWU6ExvjRXy6k2Ziz9zdfPZ3DB28XFvsEHRLRY7WYQpwzsCMuXYGt6pNDWuPEi48wNdrPPC",
  "key27": "5FTo88rdHo4wq9yGUwTCGMF1DrLZm7Mgmjb6mhtnPaukummZqk7D58Gxh5SYpeDLvNxmNJJt85g5gJaKjj48gsG3",
  "key28": "3Zc1uEm4gyKC2TLfWCcfzdwnEwrXhdGr3mo6tjZVh1CxCVGSJKWtYc8r2hpiVdLv2B4f2xFwc6KmB7vfogcP6xpy",
  "key29": "56QP31JpD4hBZpTMAoQFP5MFgk9ckuSuM257QZt6FqSNqy2VXo3sBQGZH3Q2ms3Bcv85pQ6AQHV2qJuTXprQ4deS",
  "key30": "uLSrn83kVPmJuRNZFok5w4UzyavrMfsLaL7qBTeiih8wAzt8KufzsrXc23Vyi3dz9AS3xNtBR8onY23Hj26NEDp",
  "key31": "4XuHeZA1ZFNc5aPBQKAmtsbKnmj9qyY5yeqtPwsT9dnXWG69MXPykmSguMww8VdDdbcj6pqVZi5uzazqVcUP9ug",
  "key32": "AihHiTJ7KwaiF4Duj8aFbhTC941ciKoBwqi9Q9k9um2HNmDXhSAcVjsnLwNFsQcSG8PtKeTwkTaz2otsh4Ldzxx",
  "key33": "4bDsgRb3d5eHbxLsYFoieVCoxnG7dVRcVhf6evZZD6PB9BVBMHbQuFAFcCzGqLCyKAg4PdM1wULketK4WfX8DbD3",
  "key34": "4PZrVkWfLsknqKmNMpE7eV5YoReqJU1tP3pSELyZJw6o1Mjn8FZcRHCYFYebcvsu2ipf7W4xfoAZNBB1rJQRLdX4",
  "key35": "2JKir6rkEYT9kPn13dHq83FKC8HbbSGfVAdPxvw7BSVwEk1AS3Mz4Zg8SXE7HRN7ikB7ogqb2TC8Km7AReGoCuZb",
  "key36": "AosrSCWN9bHvdq6dTubaHV9tkekutwJxFK9GESyDBQ9eB3dMZn6YdQ1pT1A6mQ6TYyk3kp43578PDBB428XZpu7",
  "key37": "22MpD7dA4h5sb2G4BuaLgpASmRJkAEa7EPdgLLcZFhHgKi6bDQnqYQrWPszg2hyZXxiV3Lt9gzs1pzoaxUPACpP9",
  "key38": "3V9qxwMkAm4Enug18oH96EeFLSAQS42HSLxeHtFdLj4zYiMzpPMN2h9E54huVH2VcdF48W779TfyeFHkLnfUao6A",
  "key39": "2HCYmtAeafv6dXgQXBMRoR2zmnJTv1jA17e2wq73ghyaWM8uugxSBb69pkhkKF5WFBxG1Anx3Gz5FrKS88u4FSvg",
  "key40": "23FJgJne2UW8VHWmnEz4WWf7Zj6awqhzaeZRFDKb7S5qPa9qaQFMaTeaHcutcis1E5haMLFxFAQCGn1crE9RPyzS",
  "key41": "USyaTNVWmtAjEfA6CgidTfTmm5EJJrzpsT2u4s5QXzyiphsfQL6ah1rUnKX8t6uQGX9btz6STf1yL9RWawiWy6A",
  "key42": "3h8x49HaeQyu8VMKdEdJevRpWhcMWuaDFooDUhTnBvM5jjTNsASJsJeEkM99SNfqgQVGceJRShgtvcbdxKN7n1ws",
  "key43": "5ywQXY4VcHGtfHCsCV1nqYb4bCgMUJjH4YsCfakYqfEFZdam4JHxKHcGtgUWoc8FerV13PsQfrJgZDfN33HazrV2",
  "key44": "4tzbPGvC1qubhyo15XDBYH6w2TxDkzjKaWs4RyXi6SnJTyyQ5y1ntLAoPheZR3qSBiJNDrFRbpK9uQbXtrB9cr39"
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
