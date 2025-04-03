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
    "2EEGRhPtGPyDEVbyY818c243AzREt1KG2wCGA7knLZurqYmK1QFzN5PvouNCH3jtJ4Tf7fueD63CubN2F1gyRUbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBT8EVV9uBGAvaLN7wssRNPZFnmHKa48p8bWgL3aYi76BVTiLfBLNEChCc7Rc2WxAxQmovasJq3uKAj7WDxS5rN",
  "key1": "54oEdwkDC8Eqy8wnfNmu6LStQpdDSWeN5FUVMGoZbzVv85EaeXMoFXt3s2buL4ZhxX6LzQstXTWqC68bXbHHgP3t",
  "key2": "2FDAgYszGt5HCvtJ9dYZQEJZowiPrQ2VVn8wZp3FbPfKxkvrpcjmFF2AqhqMWRJrZb9JLLWWMuVoEHkqrtBeZyzG",
  "key3": "5xXUQRMwZKRrLhEFtpCfbqD8oB8hBN2aZeizwk5xbXFPLwgui9SHs8vDKWH7uDhW8ritfbJY6nMQiu4EjE88qZeo",
  "key4": "cZu3yHD2Tuq2j2q6jaMt5RBoz2s8wDS48aF9R2q6eNGAVG7Np4pJDeeYL5sUwczurXTQiJG7AQp2F8i3kdkXu79",
  "key5": "NgLt9JhgTe776kwB3D8xMfiJzcpXhpZDLrNxkTGwBvSQxAzkk7WbKeV6TYs8rfBC4ghTDGvKT2vcUJk6fp48jPx",
  "key6": "bQg1Q384u8uALYv3oQuEPxd1bS9NcJnDA6aruCg5QcMbHR33BFjRKbEs8sjqNZ2iH8cFyYA6vYDAp3WoqDnfHiX",
  "key7": "2un9uKi4q5tsuPBwEUpLWMJcxZL5vnU8kRsM2zR3314HfM1FTSnd5eBAsUMdppNmoXBTNdigqYcTdaodvzgpyTNS",
  "key8": "fw99RSCSauxet5aXbJFTi9dSZyBs11zE8okPvB6YLTw7vt41RTRAPYHf3Me3SHoJSypTtAs9xWAPx1oRt6JTe6L",
  "key9": "599YSN5UxBWakChrf8wjrtujtJttbcVC6FdkzGdBk9UmxSUSoCSYvivbokad5CGu1gt3hkyvzbBkqf12GsL8ji41",
  "key10": "iCvN1yypM7mmwWLSXNmN2Wt7DFAaBBJgUn9LZUSQ2xFEpyRJ3hCDZw2NAWWbKowP27vTakAB6moJSTd7v9vsWXa",
  "key11": "2PSikDRBvho1eZgD5QY3k6T2PYvQTTmpdk2a99w7LUr8PeNv1BB6e8RbBBhoXbddpFqDgHPTHSz9id7o2hbsA5Eu",
  "key12": "21tdaispLHvkJKa9NMRLdSYymcL3hZGVxFHNEzgZvzkfpdC5tbyKJjANny9q1sB4xJ253SsaqCVZocEZvgpLANiy",
  "key13": "4UVFKrSgNDLEXVnQYBHhRZNmdHeLA3G8vB8vXtQFVatwG15eQsU8N1JCq2jLKm5pctBq8Zd2omQdCkR8sUWePWEw",
  "key14": "2Le4LriXbtsmiDQCGkNyLU6fWp4wAfanCeZKbFtruJ8PqRiPFYd5THVFxNzEMsRco3kkfx4vQzE6fq2cpfXHxuJ3",
  "key15": "58mY4VvW2ZQiGsfexn99bSjtmxv2bSmghyyC4cmUWkri1JHN51NP4QUHdwiKR2w3ow2a2AhSS2DExy4En3cNxb3M",
  "key16": "5Skdj6WaHMf3a2v4bTCVKEukP5r7q7XRchFubyBb1JVf8eBFH61xTiFyqgpkheVPdEK5ELrhLVs1s12GFdrJZMhL",
  "key17": "4uAMcizMsBn8PgXyH5Ui7Zwb54xRu4brw25QV58jHku2HHneDxe48EvtMA6gYbf5AuZoUpbwyF9bk43uoWnQmVYD",
  "key18": "3N87TypNcPvUnzVvzR6JPvDKPuTmdtAAwVSzaxpd56ZWc5pGoYhxhicmXMAzgE4biqmbfbpUymjMK8ZhwJKtTyLQ",
  "key19": "2GhD92EorVTW81SzmFcmbHVs7uyv6zqAC4jguMAGB9ckq2WnURPo8ms3ggjrmkF3HKDeWewdf5E9MVE5gED2CDC5",
  "key20": "5mRb3aXjzt4QPYStSubXyeYkWZsmWTV5R94DNZK9L2fuGJyGcgRF13rwByeZfwp8fZVdhcGLQ54eCUkuzT7JaJCs",
  "key21": "3arMLvaBasyccGkumfFjo5TpPR5cbQdT4CLbefRk6KALAo3NLUEtLmtH7dFmjHLyqn7nRvV5Ak9iqEFSGnbAJf3U",
  "key22": "2Y4rCiVpBKwjchn2YiCZp1stKXWHrZuSjrfs3BMsppzWXEibfcvJt4QMfgBbFTqPLAVNSpBPcebmWw2Bu2cfUJAC",
  "key23": "5RWZK92c3gwuLihs1Bir4AjGsjpom4ytSP3sutiePQ9eqsP26GMQgUWzvQR3ZdAxr5voNC66QxBT4qxHmPVuuXzA",
  "key24": "4xtHdUUq5PjhZsfVmGNKkxfj3GE1y91MRZgxxWVnktXNhCc1bLP7RaBTFinDF4Qc2BxwzYcHPGq8QjJJ1tdv3DMQ",
  "key25": "5Eizu4TtRDYzvYyPgRAryADsRToYveVtLvNNMGLkxFxmdvccSLBgCpS4AxtVgm7cohhjzbDRyqhueX9U3a1obuez",
  "key26": "ZDcXTQAb7idbYn4zA5LNoLYtecEZ9SXZrc1JkH4Rq5ysREVdnGFGQWq6PKNuJ5fiuz6F7YAjyNdknA1TuWmWtKV",
  "key27": "2i6KumWY8iDsRYxQ3iFwhP9hQGsQKNxpXDrBBY2GBseuibG2TV6puoY4KGRZT7qzFejPDchRypocu1Xwf6XcYQku",
  "key28": "3Cot5jxfTyTtY6MU824fMhDwb56gKbEn6PcnRHkfQ7dH1dK2kgaZ1ZAmLeCsKPN5BAjJhsjtcm238i4EwTRGSfjQ",
  "key29": "3WZCuz8UHi2GZJxv9H5CQrz5otcWZoVn5f2nNyjpBUzJS4NSnjCwshe78vQcrpFF6zfkJBjQyDrSZ72KiwnQDs89",
  "key30": "3XwVWP7rodxFy2jdnr7xHDkGMYoDTzeXt59U1YimMsK3rPtzhSeP95fm1KWJNtCKBmuDgZ5cjPd9zrbD7VHqLkoU",
  "key31": "4yhmWBVv4aZVR9xqdhqBPiR2cRz7vhTp6cV3tCzbHsaGNbeac7Sz3Xo3NgfxTE4nyjVGP34Z1VM9vcwDgc6a3aV6",
  "key32": "5DAYEvrDDcz9tzYPaAfMUc3iptPvbWh8YL33Dhde3yPbVxuPoQMo8wdaB3mLgH1jV17kYKzWkAFwQ413T3NAxUkk",
  "key33": "2ptNgk7K6rn7o7GFyZsV55eDRU3yEkCJ9vhr4wBiVUk3v5eyhQjG372y39VhYCcPCAPVCmhcYQByaEGeVT48kM2C",
  "key34": "uWAunFoAPxVgQ9AHqFHvSjtnegGfaLwPCiKHD49SJJHjJkMBZS7v3zoAkxX3L7n8ydpZVBYaxMefNAPWWZVc2Kr",
  "key35": "5UTYeF5GVgFuvqMccyRU9XE7h6HzgE2aQBFd83T6qBoF4wa7ja3T5DCpv8GoSLcpmv44uLacraHrsAddsnPiv3oZ",
  "key36": "4rStfeXj8PwpWD296ZWXq13breJNBszYwqZ1RdV2jQBBNqkECGtDf912tMdBGZhBkjZyx5igpqsXbXazAjpofXHY",
  "key37": "uUxEpk7uGeH2AFYdKahq9e1DxekBv44thnLecmaxZB8BbmHHCTCApgJT6JcKnKs2WKidrYRBnMvP37b3ntEnqw3",
  "key38": "5dX7aotBViZe74TURi79grtYtvBoyhawCWXweabFaxvJVdJqrPCU5mnFSQwXTz9SBHLryq5vudKeJd6HiWqPdDA2",
  "key39": "21gFtE9ydUwVJZB44GQjtqLM6rGfSr62e51Y2YRXYtcPsnA8rAupaEuRpn2FLBLD3ec5rvFLdw5wNuFaEtKAD7Z4",
  "key40": "5pecmjZ4tqiCpv8zAYka6uL1we6Nexh83Jua3rPP4gZBXCVAvsus2r8dZikzervJ62RMX4gqu4Zanpy5zj2rLdge",
  "key41": "48LCgqdwqnkmGKNVWWmWkGL3TNynzpEiLGVBnjn7RABHQ25tZVtgbnhvrjVJVTKw9VWU4H1xoPeLxbG8PiWKqVDX",
  "key42": "2ZdPmyrHDQeiUZ2ZLfjrDxs3h95YXDsiewMtXJRpzu55QhUVnrkkKCHjuuWYEaVRJdv7uuyLJ8ASu8ktZZRuA23a",
  "key43": "2Kcr1o5UpdJFLuKSoF9i4S5S5XBSkFxvSjTXZkbmMCtL3fEevqhssvsENH94GpRvLKDmX8s7wJ26rGy7D5rUbBNS",
  "key44": "2HbeiQWdZLWbH578So6fQrp7H8inie8AMRYFmh2d6oQcrUaatovhMKphW4A9Ri3XvWLDkuVKmk3PdPwHJYJEp2Hu",
  "key45": "5B9gKDz5weAhxjdKQ8VApaj96pbPVsnZFJmfNpMt6i8WPXfNPFe5T94KND6PbJ8RLzVcjp29VdQiA2ZUqfF5C82a"
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
