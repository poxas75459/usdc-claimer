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
    "48bHtMfUnUmXRvmbZxmdvHDKxcb2srhbH2hBTrrstbH7cjQdbmGCdkBGQ4FHZxWAxaN5sv9Nbr6DsKqfVYuAfade"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aNMW8q89rogv7x5UCcDnuBVDa1Dyz6mNgwiqRAFKMqAWEbbHqHwjDTPNPjg7RRfj58DyCpHtqsVNVP1j8bRhEVz",
  "key1": "3V5gcNFHciUnNsWQQroFvm3bDTczvUHbi1zsYawXLwzaZBd1UWVxooCv42uFyuSMFA7VrBRM3nATVhKDjJAALQvT",
  "key2": "33LkDPcjx7E8rb9gYEnGHgRLNGrj77vzusXNL6bYcp4SG4e32gjKGsbg19MeuQ7A2CBWTfeY3ouasPmjYpSBSbxd",
  "key3": "2jwcHY5R4bZYReW123M7tYQb4snkxbuQ3qZb4sXRd7MwAbKSrJykxZBJtN3iKg511DPGD8kjQMKC4x1NCY3sVgPH",
  "key4": "2V2Wi9h426ge4h4WBiyatATRePREAPB45ui7Wv8sZkvhwCpzRcJesPsbNknBwjag5QQETzkduNpAqzE1971V2AYj",
  "key5": "ttGr3mnUsnsZQZKvWpCXDzTRh3ipy6oGpezq7RTMje12UCMXsPsb97RHWWXihfXnVduNFwZdrTgdRE5UAN8TFD8",
  "key6": "3Zh2Pf2w3A1CctyY48BLfbbMMTNmFyCtihV36ubajqiHw5W4H9b9tTwvTErA5q9qrkVkJHDoG8dCUQkpUsiWCAbC",
  "key7": "5nitvvUKY4tj7qviZkPJGjiqirYDH1AU7PdzJJqZTTAY1PLwe1uwxExfTZqchL3asVBPjoeh8ChWgq496VxiCPtM",
  "key8": "3jNd2rDUJcpuxUt6ruDLRjgnAyRCXAU2NmY4PLKBVHBTgMqvzwBtNzByo7SvLULFvXFfGPz2veJtMgHA8TCcvU2T",
  "key9": "3eYfsRwbro8o5C1VDmTDqNUTYokiCPzb9XX2Qk26kF7JEocb9afoCsGYBuT9wKU37iMPmFxSDu3HX3FWdoUYaSDe",
  "key10": "4z1eCPEZo3s5Cqu26dYCNcq4tiNxJvwedpZv5F4GM5SH4h3xsgx2q6UBkCAfnuWaYTGEAFsXa6uuFssGWcv3WjDV",
  "key11": "4ma5EzQ1bzCYHoKkkLFkJW9xoCUynnbJyN6rf3rqoPPsQtvtqMwXUA6YB8qFSBAdb2fP7KM4T4brfYZcBfLTKVWk",
  "key12": "57vzHNY8wd8gtS8qrtCe4h657yQgf1z7VX1H2QuHSGfbNPN7ym4EPtb2tJ6KPmuXL71PKZuZCiqn1ucGzJUnhkDS",
  "key13": "2Z3dDV2i1yw7yv67E8WB443vA46w6wqbfBS1SQVgtyTHfjVMZoT8qUQRjqXfyBAxMGZa1FkfbsSaZkwPwKQw9QHj",
  "key14": "WrGFPwbSXJK3tjDDqMrPtSpLRrUZFtaNS2w6n3dDGAixS2xBZ692osc67Y2fSYxAkwCjQg3C1FPiFQie3W1QB9X",
  "key15": "ajBDfZTgu75Zb55Fc1H4MdENpukghk3hM3TSNQBP5Qe2JWhnBLvMdSbooELmdxzjVwNtyUQUX1Y1WSHrK3VMgEy",
  "key16": "kfhrtDR5oiSS6jPWq1PTkWrpfjmf8mx5asNZgWny5PHq1qvH3HnC3oDeQsgFhZjxoBh9cn4UT16V1hz7FAUwVYb",
  "key17": "3NCDsPbH1F28bowrxi9hs9xxF6rGffXrpRc6Lmuzw9YvviUFM3aWWLJRRPYvuZXetoNAqNnM6zbYXtHmHfxhsCks",
  "key18": "4PVQBLv3nqY3ydNxB2vC9owGFmApyE4DjktwvJytdwbSvZ9RYEb1TF1a2G4tpA6w5MHSH2hEyLS7N5oFjNdK7KY7",
  "key19": "38pK7FoXcrGnTEuUJYxn2MQMfe45zVZqtLKh3Yjtr7tttNsgXavSmewn9Ggebh3vAMacFcEtBgRcTP53RC2zi1CP",
  "key20": "7rarRHTThXFJUqq9PymtWNdvB1zqGgmUeXKc6S3mo1ud7jVwJ1RtDSS7cvkg1EQi9c4X6bHsWNbiRntjsYrhYjd",
  "key21": "2WJRtPLgJPiJH5qx6ZnA5dHbSmQLcdnyZmZrtaztwCiB6zMAyyvmPrhBfcowgjEfCdFjFWk8tDa8s7QuxmiMh7dq",
  "key22": "2w7FPD86pbXKXMuoHCiz1PGZLdt8uS4QjkqJvA9mrr5wqru1VB8v4TBZHB9Po8CCHvZPzkNE7AxhatCJUKvMJLCD",
  "key23": "48pzrAi36c2ZgnbrZ54QVy1ih5GfMDfztf4E9Av2uR6gnmG4w1QYHn9cf96VrHEA4KrV5oXpi4ommenkLrSALxP1",
  "key24": "275zkqG7eGceq2F2uEYLxmMeJgFHiDy5JqKhad3AUMGt4hzqzeheezmNJ2EhvVuiLBVpce7yBf3xSJuNDP7TzsTV",
  "key25": "4WumyvDvederYHX1XaZ3GrAm2zi4H8rseiKZe7TBjDhmAVic6HfgkPcMznSe6kmSN1JBg5oH1dK8ovZ4Dw6ntxA3",
  "key26": "3Xy8yxK1TNnsK6VTuNBJD2ch6fNczQP1xjHFbcgQW9BsZJkHG94ueU9jVZwnpzmALwgaMn5LALJxZmXM1MX1XwnG",
  "key27": "5Evdwr9cdL4LHQ7NYjvzLpTYrQDsnAUcM2t7PzZg1DffqrzA9xz9u8xQpHvSoPuyKjHsgfzqUfwChfH8vPM8xzAT",
  "key28": "66ncrSGvvwsbyzSYi5L4ueFkjV5uoQGskrbAL2MhEqJRooRt8r1ZL8z5SR5swsmDFsQAMg8xtU42rvCtxNLQrUiQ",
  "key29": "5CgFXsKvN6GnbjQ5Yd7EuDm9dKBwGW1s74ufmuvhxKYzuEEQRjEJjEsythn9YtUnmCtCfDUPAvABy4JxrGjzHCVk",
  "key30": "iKqup5KJJByM2nbyfZdisfj1Q832riXXXCKDtNiLp2gGmHFininiVF9ogqB9x3tiMx9uogiEizZVXJqkRNE9bQu",
  "key31": "2cEdaJXXrdAjTJ8wzV2t5jjQCwLoX9FMJU4F6kHWi1d64AwChuHFVJsHFQfuqzx9sMiMSjQt6YZYBP6RwkWLJPy9",
  "key32": "4svMe3RA5YRPgZREfmraaJpVK3ptx5JjrSMRS9FB2CJ9dYcr3M8ShrhnyS1jPKzmVi2sifsYMm1jr9FA7fjvUQmt",
  "key33": "5SWygbaWRNi14TgcsetGqH4reeMbmJhqAXrjT3X3FoopK5aPhs7isErK2ssjtU2jh8PBdNqtdT1StQNcvqJQjQn",
  "key34": "3v646FB9XpMkgYGr2Gwpjnr1rTqr88jerkYKGzWuJY7PywGUZNJZjSiBcAGhX6Ldgrswmq5rrqBeiypowNJkaHPh",
  "key35": "yodfNowQsrDLKGhpE6biYR1qr9ieHdPMyqGKSB1sEY3bo2urhmmNAiKA3v1JhPFppAzRKtmhbMhvcM6g7axVHMz",
  "key36": "5YWUB82XGAYYbey5HokHYVkWNusSsi95XhzTxLiGTAaFp2cyufSJVu5JhgbCuHXSU6ghyUkicM8b7diB6GTsbiy6",
  "key37": "4Mdx4PGjCnHgpytvSdYn5zr7jfDi1RBrzbQj7ff5UnDyQMjMtAk1F3XYRZU5YgLbSFwbgmiRrVZDNHxis7PKmbAy",
  "key38": "5DK2XaKgFybJDRaDM34mUQ6qFxwbVWSmmjv7iQQyaxY4abmJweeEDk9xd66vqT16MTmX6FcPm4SNtmMrgSFGStMj",
  "key39": "5kt9NnjKp7kZw3ddo7Kj5ApgF2u3Wjn22JH6KnzRuAsoaGfVq3vzZ8hJUVxCeid7HECwTPmSBgAh5No2pNHFAMt5",
  "key40": "3eA3Xb2BM5iFDfzn6wTkY2DSVSnS8DT6xiHpha7CTjuvuqZ1SfvRQHFMFkVS11vbkt3owuiGEbARrGk7N7ZUnRWd",
  "key41": "4ZpMNDYnF8AbyTjusNVJ14ffjSoCBFaMNLzfeZqsZnrVmWj4FYoZYssc3UumDoP8tP49YVfzziHaptv66xbEv9K5",
  "key42": "5AXJUuGPBcfB3pCHQsWieuv9CymRPWBKpCjqePh3RfW1mjBMTxQGDYXxjpHD4a3pR6GSWwrepovbaWDnhPBVw6Ha",
  "key43": "3eo7CcupoMxaQr2a6AMb72CA6xnvmc383Ai5AVdBUkiKPuuYZt7QP54wZuKGX26DUPNqh1jgn5tf9fc445Uwke4U",
  "key44": "LyqKDsycwUzrpEwSHZDJGFJp11i4Gm7jsFhz5F8xPHMNEtBD49RhSx9tYUS49gJYRjTuDirZySsdN4tsggd2dBe",
  "key45": "2kK5DXBxu9f2LJLBe7fhk6Q4kzfZVYgS7oCQwhurJX5iHcV9XHTYkxN2Us5YEkkDB8tbYnsDdpZMnDksd9qZ7gZY"
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
