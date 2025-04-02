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
    "C9Vfbg5urimz5VQuHRVwyD7zEPueGorK9Cp1zy4BTdmgFggd9CNeMYoF2f8R3VtKcsw693cDq3kePsP3mgu7Y29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jig9QeQSGcub3ndqFN7WfQtdNr6zRWyF5fmbyVstxknXZNqr9PubjdfY4YKLyj7moaFqAm5RNKeMP3Mp64PzFjJ",
  "key1": "2chW9CZYLoYRjmCD65TzrKD9EbdosmCF1qURxTAkoU1y1fi82jeCkj9SVRxoMZJZveb78Nbyh3kxRshxjCR9tLP",
  "key2": "5Tn6ri39AaHhWuFhxAkfgDAuPjfquKUr1rCNK1ZYqjX4k9LUfzbyvzVfG4h9Uo6Lds31tehBk8DpqaWJubosxsY9",
  "key3": "5aKoTLMNMy3Z2fC7gXiH9P7ir2jgLeJ4vh99Xb5my3xsLBBDa8WkSyUD2htvpSytCXs7qNYkLVPEGVfU7N7r3Df6",
  "key4": "29qmtbvrX9ue67r61drmTBp5a7SzFXJ2LNGEswVbTnVvjZAaQ5xxR1y1vrv1WMUrN1aZrA6j76RVZ2C6SNFmn1Pe",
  "key5": "2d9snFYeAztyn9e6jEWzvFwk6bWUc2jKmansaG8FqXML9NWrRbs9F18QFBSFiTBXTvTyZb24deB3xfvKKqdPXC9D",
  "key6": "5ekctuhZVxZL2JPPHJKzjGq7emVmXVk6GLVros3cDcQybzfGn7EvxLahihCCgGzobdGCSZeFcNpZ2TpxZtYkR7XV",
  "key7": "2Z9rDrBrdovTQmZxLJAB7WRcgja8JRoU3HHLjnH5RfhfuWpL6cWK5MJTLzPbbw66rbS8k9TZmbq6CxCqZWhLPyan",
  "key8": "3SJQVCfczYuYpD16EVDq3M79Vcp8YbxLuBkNWzhT1CskLm7xCLa3Z2KXX4mLMUrYsgRHbFeKoBZvwEsmSmXhEM5h",
  "key9": "3Zz4Hz5r3DfktV7TQhNXb2nvwmG1pqGy1WYbJrTq2St6QnZe4e6XN7d8Jxjykgcz3wfavsjMiBUAP9kUjMYK57QW",
  "key10": "2AcQUMd6PYvvAzgf8iPfkt3TUyUeMkEe4sG5YqDuwfX5dsYyU3wD4EKoARUoqzjMsGZ2Ap2eqk7yZpw6SP1X77y5",
  "key11": "2puk5ie1khZ1RagWjk3RpY7Anjh1hqsJbpWmz5jBok9VPuTjhRnKckCqAXx7m3R7h7C5K23HX1x6hdLYxaBvqTZ6",
  "key12": "2Pdyim9cDoRfWgsM5SAmDBagBDxrXCp2ZnMeRTkXXdcbnjn5xfEVRp3wD6jWQ6XcsTbfJdhfjZZGjMhddbpKbkaJ",
  "key13": "31x4PPdFKZH54ngQY3rL6ECuDKjw7TyiaaLpCTdLjxog7mTSzGu3LU6Np4xLJJUZj4cbNKRAXNWmcgtSNxzCERQC",
  "key14": "5TutBvreSsGLUkpmNcoCuDFotqUBcfeGhvTycYTJMG8SHsCP6RH9qYyikDKsfyf42eFraVwKWMGVAJUHVAth38j1",
  "key15": "42yvbXhismqsfG52VUykC1H4GFFvdkXdXCY7HoMm5yefkLJibN1yVYNMTZmCRtPBgKTb9TQHX6AcruHUqDSc4rjM",
  "key16": "2SojLqduxmhbNYUiFMv5haPbJ6KqUxPHxoUy9vTe4GeDbdtxa4ETVrfPLjFGrq1YxyT5iE7vw1wWKUymcvamDGLa",
  "key17": "2erASJcSoySuYrpCovBpyXZ6dUUKkBD2zwfKSmW1bvKRS2wuHwu2Ju18HkS8WrdqribmiP4i9aFqumf9mK8caxy6",
  "key18": "3Y6r7LyJt7tz7DHCP4yvByq83c4sxEDr4dSE3BwpFohs1cCBu5euLPs9e3cH65zHzMHAtfcE7VvKpV35H4oYeFvj",
  "key19": "5xba6M7qYqEM59RVt7j9mryEfQDLttqa1dSSjdUQpXPEKfmUJ5d2dCsfktRDrY4uxmsMQxHok3jktBTuZbE9ZGMa",
  "key20": "4ZmJzDyrJupqxn3prcurPdxpJ6XfyN6LUZfJWwPVLyx6LTQDakg5mEa2S1jA931BCYewjZtZJ2owDtSE4r9gFY4P",
  "key21": "5H6Ao6XcVuycWpYnq1dbxwanqnWQFMbTSb4fKUo9rs5QgRvBn8JQeDYsrDprA4SVYTqJjUzi4Ah9ypcxrWrGLC3L",
  "key22": "hyyWEgAhBtizLDEM3TSQ6aqiBFhjymJbMmAQwUwvvecvs7M7Q8MqPFbmmopakEGuU74p1AwrpWiuNDQw6n3ESAW",
  "key23": "5N8SPJ6nXkTRNNaK7vPvzHk4ba4qTpdnRXwJZsCCxT7xe13PJDZTjBVPsLtmL3bpTGChJGJE111D2GHc2G4nG8aE",
  "key24": "3dSfW6VggsPWAwbN5fSZLT4gr7mAK7Vi5Zy2G8ESnywuSHLPLq6ymk45mN17nN5pfCGVAzeCnJkJWXi8Re5DWvtq",
  "key25": "64g1dWoHnvCquj5ZTEmmG5uBVsRVC16tf7pWtDtFT1T38tmLPD5SDCSMMPU7b1LBcEarmsheLtXfnhzKg4bx6da9",
  "key26": "4NcZgVHC5LfhXByrZ7jh1tK1vX7enfVg1RqWesCztHPnNEW8oip8zfdt8dqhm5CQJM6RH2XyMiBhJAixPG6FjaQL",
  "key27": "2CJtkcSWwprat3kSLoeADfqAcXduCBQLrjSCYmZiReJwq5gxa47aAYbUvjJKKZAU2n1uJ8SSnqErLMWsboK5oLn1",
  "key28": "3c4tCNxYDVEBtkusRnkQb6Tdpz7anAs2w2HWyRXLvvY1ioxPu9CgW9vHSSLhzMYnVijF2unUhRbAgbsNdguja3k8",
  "key29": "3QYmUchZb8VvZwZitJpJeTryx9T8dHTbzXkPVDAfHsL7ap6EXQn6XdyJ96MXRKuDmVkbwYi4zAu4bis8zgqE969L",
  "key30": "5qBo9ygaS24vMPtxQYJf9KYX74yQoLtLKBKWVYfwYBcrtdGz2UkzqyeqAFuV5C1NaKURRECgKoEGBvfXczR3CUhg",
  "key31": "4mNgTqMBBWpADkQQSMAFQg9iXCRf1w4E8C7hs6bjQQBMCJxHgiv4kVeckX4gqVrb4RmTe8B2cBAQwRJPMey38wwx",
  "key32": "5oh6SMEki1ofJ7TKxPo9rRQgSiBALjv5WEZ2NVZ6whMGpWabp3pmPiNNjHBUBneoNVMKFtgTEr1tKqaJstk956Do",
  "key33": "5FeHirnxakus1PcnTWsHRyz6sXQVJyvZKRLvPzxtZqXL9aCmFp1nMDsv7DTEGHRVQLr2RFYTQ8aLi6BDvUYhAzxu",
  "key34": "4XQyfZDjRwrAF4zxsccdgneYirY2yofxpKagQXb3YvBkV1zWUqrJaobHuUbTcPSx8z7Z3oNr9qH7y4qiaWx8nSCs",
  "key35": "2LKsjLiSfo4mz3ExVmRcV3Yjw62FGynKAdrPp8jg87Q1FNxSQJ7ce3u1UPqYrD6T98QPPnXVKKu9icT6wp4xaHa8",
  "key36": "4eNwqWbYg4poWY42RYZFEjEvA2qDnEitKBNVetyqbJt8wPSixM97p6dHVwXKDCdG4NaxPLukixsyPu3CrBwniGUP",
  "key37": "3reVVR7hG8VaJHKD2shyENp611nUuqyiSFHLCfHUCSttdNFqhUvx4rv4veiXsS8CXpsosgnJa7xRq4a1XfZbuy6T",
  "key38": "4uffVXtro5yyYqAKK6qzTb7UVMvgWj7SHragPHujMdop5oPfprmxJp2SNtYbxeUvGUAcTBpZjHhU2Q3LfLyQwcUw",
  "key39": "3bUs48ZR21pjQhhcFqVi96x5jW4Qu6gvvGcLmExEGvijsq1qD2p8SZJjuakf1FaVBGmQrSbicrWDMCiwd6gGsUrZ",
  "key40": "2xguEvUFhmWofMVYqJZdD2qo7qWzwcYLz9MnW9wbJoYqUdGKYZcAWERDrhPQ5spiRLySwc39aVvkMAfTpeh9vt2T",
  "key41": "2ZS24EDfdbe6uwMdkTjDUNXdpsNAe8dmLYT9FTZhbkRw5Ex4pxQiC5s4UR9aM7guus2rSNLfLLwwScN9eyQKMgkh",
  "key42": "5it7pTzThceoYuZArcL2pgbS7iDniQzqLjVj5chWPTyqb8smMsmc5g2s1NYqLFHgNvuG5KbXHgCCQfqgUf4t8xgm",
  "key43": "VkHgMjm7jELDhCPoGAvBNjxfwAL6Fga39QxftF2rqyPPsRiWR5gAgA4R1YW4x24Eyvt68GEoW3FFbqbQwTJPtxx",
  "key44": "49YR7UM6oA6c3kQ4J23STwGfxuqvALQFKSt6B1KziicinEd5zNTckDsBivN5Mhq7uDXTNYXK8VR6v4ZKmVKcGiMp",
  "key45": "GZMCT9Edmhh96HxZTsfKwaxXJisKdZfomRtq31hB522gBpdqnDndBSG9oEzZud6sC77frgDYGmLPRvSbi73bWfu",
  "key46": "AoTPggp7pv4eL2grX5rPjSSGPPd7EGeUiG2HfmqMHyc72tRWeFX7cHquFsPWZpZDG154ZKohR58vTKU2wZFNB1P"
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
