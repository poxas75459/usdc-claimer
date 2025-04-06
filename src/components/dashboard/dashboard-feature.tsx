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
    "LPmmLkCWVtHBoX3uLrUgPo1k8mhxpPyJmU4ywvTgcrXkypgEqovVmYaRAGEqZD2A5A8sPa7zLN7pWck6xscP9FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6zo344ycTx1bMPvKBxjDyXGut4WG98sbkAQCfPn458ASZQc5kNDBLysLGSfzNjny5WnNJAY8qb8pd66t6nCqqr",
  "key1": "67iFx7YJ6Bjy88zj3udVhaFC8G6hQu37gEZxLYpKVgi2MoRZB4RujQTMesCFQhHypz9qQM7vraxHD1DFmAr51kMA",
  "key2": "47abWUoRRd1bdPxYCEr1X7t5U123THo31RdaW2F3oRJYQfJ39F6iPQGxG29xNAD5WHxiwBj6TdJ4mwGVCYnSVmuW",
  "key3": "3mVDJW8RzDKyyfSkHZcPrFo8uNHg9sJ5VtFjGKMLyshuMBZD1RGTAxUhhg3afA8k6ojxJELuJjEqph2FjQb5jB2o",
  "key4": "2FWZZsRkSx22kSYbHVYasR3pp5RTr17PWSyKiHvhf3Wrko6vHNsVHD7SWP4RsGybNnnkpWzpuPpYX9PobkiQzXCx",
  "key5": "VN69SbSP2Kof6fReRHAJjjcUEhLTvWv18wqFTqUj1XfNA6vWBTK7psXryB6Cz9T982rjyZezoxpSsGfVPzpb71x",
  "key6": "29YKg9sPt48c3jpHqWViEq5JVkm9zLBCWY9gcKqHnwtmkkVkJwqBia7AdUjwkw83wYLM2ftKjYLbjtb18Hn9qvAo",
  "key7": "2dWQffjCfJzTiYm6n66zqEpdbEDbKok1vu7ESxNmFTAq9s8abeomQT935SNcNmvyou89C6QAqpASriJTTk8Hg2ct",
  "key8": "4HVHrPBet6My3xfTETS5415sT3RvJ5VmMUqckdVvXVM46tfHWbET7MJG8QxoLEMEuBDtaCsaXxvNZMe1ud4Phut9",
  "key9": "1npYczdzuuTW7uSu9CSdU2dFkxuAiZVNYm2p83Jo5fw7zZUAUvtyZUnM8vNZrcCvV3xftDhtUkqrExSR9QEkQbR",
  "key10": "4Bd1mCvG6ZDRoZiY1oPL1Y4kQiF5tHo99mym3dbSxDpnxCx5Q2PNemQAp9KpkFbVF3K96NDpbQEJTFUw1B5SqQEV",
  "key11": "4DL9UYs72sfniay9LHejLZ4b1EuRE3Sbg8hJYjuZU51WW2TAWs7914QVx2MeNgN3DG6jnGetZSwrTeMX8mKEVeH3",
  "key12": "4rDGRtvqm4Mpd2UgR1N6Ree3vtvwoS9cqa9jyKAJYYesLLxSBy7FpN4ZF4JR2k2jnuQAhXeKJxaNF2C3wsSMi2Zq",
  "key13": "2hTUv3WysirfmdTpzSqmuL7tP7jSQniV6YCePGAVfkHSd82NgcPVuBRdu3wwyoZmGoKqwRcxGweP6Gur4RLqtvWP",
  "key14": "43y34GbZNcS8NjquuuyTc14Vp21oSUa55U7sJReyaG5PmE7KEAFDMwzRU2n8Fs6pXqQaAJ2sU1TRN2R8brWBQgEJ",
  "key15": "HAffHJvu1AeyPtqdDnMKJNmvTCvwB4xd45LjvyqSCSWmdPxHUdem7zBn6PW7hbLLw5tVYDTvUJTBCrm53FxRSmG",
  "key16": "fed3wUZXG1r2fTtFcmruD4psiQRQ176rQD9WBJW7Zs1J8Go1BrX4RXck1AztcERcT9VikupCjM5TFLPyHokQzKP",
  "key17": "2zA42kL5nQkZ2xk3N7pn8Ub3B6RGCadD2yEySvyE9eFazzjpZoaJ7Kgf1s6p3N6gojRsKWGNeCTcy7ARyMr2R2pZ",
  "key18": "5tAXbcrG5VThGgmMw58JjKPAUpPHrqkNexH3UxdufD77sradqZsrn921dtwu8jrU3hGumnapkhsHBuJnd2eoiqVe",
  "key19": "3CQ7MgmFaZB4U9FASzBA2pPanfLVzvJCf9oRe73gokzAHsg1awjoTtAVxd2mXbJPbM65aLgvKgr5dYBYAkg9Us8f",
  "key20": "wCpuRiqtC479mSHNRKugPX1AcpWUmKC2GCGHkn3QFBBK16n9kyrBbp4vHLLZmVrP5XMLWCnQYj2hAnrw7HGpKMv",
  "key21": "2Lh86fFFkYbw5GHp1mvoXCL217nbCyhdBKpTBJmFjz4D3Y8WDdVP2aYhVM2FsHTHMz5LCp4kN4E9RYBE5x6LYrdj",
  "key22": "33XaC6S8v6wNVaktLK3p8Z8edWQeRXm1APC9SuFmaXLhw7Ym3p3REvG86cmqVRFHhw3yKUZKd5xmLkUWkYqTzqyf",
  "key23": "3yaXHhkTgkeFgkkdXjcF8v4vR9iXVqzfaLbMh8GzyS97p1MhGWbxP4WoZrbNkESFCxyLAxD81KLVuyRRHiBGD211",
  "key24": "5dZz6hi2psr1NpzuxnzBNT7CiDvCAtA8rDXfc5zW4qLzcBLnRVJs1kBj2iVdBxh5jW8AD42kCmwfLiusz2ma5PQa",
  "key25": "5FbJYPpdETL2ybYUuWt6sDeBkozqSsKgntd6gHefi2M2QFqEJj17bgUnaCmUTcWGpqH8fV7witk23pR24yxncCEH",
  "key26": "5Wy8o1Ph1ALfu7hp6rAaB5LsWPKn884LF1KqQLtnQXGXyjJhT5NLW1JH43ynW6sBN2RPdEYPkNcoTDcchVFf7aj9",
  "key27": "5RCthdaXYm6bxYFd4XwDrTuJ5uH8a9ySDY5XWV5Ydeaqi5ZPVRss14P6sAyUkXznKa9fpm25WGA3PRkPS6LjNe7Q",
  "key28": "44Zc3dGxQqHXCwjVeiFp3c62ToqDhsC14igw969qkDVunck7C4UjkUHmdQq8QfDGbV2h8ZFLA2G8SamZa8SKcnqK",
  "key29": "38aBLdvTP32AHV8M6Akj3bQ8q1ibHe5ybkstXA8mdsF5bCavQbrJiarRvMmPonfGNmQrLN1DVGLgdcqpk8fwaHxV",
  "key30": "66948EhCa6WXUAz34EjZkAFrdh1EeA6KxPThhFT5uhp61F8p4R7rEK2wg7SHwiHsGai8sgRte1HuBFF2jKKqA6iy",
  "key31": "6eCGSnxpNi5orvh9tF2ZuhHTS8h9w2MgozXkDYJX5AVWvs6g1sYc7h6fm9HwDBp1KNm9yhukhFCmnwVzPXghsvZ",
  "key32": "J3Wz5e4CjVYDbwkspesn1v3gfoZHZmMJZ5B9J5fyDh8GQPbHgXvKEvu4MMHoGfHYgijJbhHF8ErQ63Nf85N4cCx",
  "key33": "2ERiQhd2be4CTRHob2dwpRqS3GRbjkcDtfyn5fc1XsFttqtgF5hisompCUzak8XPFf9h5ohV51AyCTgdT6yxtAg1",
  "key34": "5nLHMmvA6paLFGZ4CuUNVPV7AdHji6NhLALF7DPxbeXscK5e6JxQhmtcy8D8rPqarGksYbX5UPHwZVWnjydBHzz",
  "key35": "5RnKGa6iQwSGr8rQd3k4G89zw9Lu7KCKViduGnuH51cN8PM2taSFKke9Lp3DrbKSHPtru9haQkeQ5d8W8ZAvddfJ",
  "key36": "2cSZD5XMMA9eKafXSydnDh2yyBu1syENpePD8xh3M9C3khcbEPLLuouzweCA8tUSRTez6z5xLUbtARaAFSYvXE2N",
  "key37": "3t4pZPuxaAdb5sFqjz1d4WrHK354zoDdgP2wcVbgs74u1nDYH7QNv4JQ7AeAUgrN2cg6LerjNngBdw9FdeDDgLqC",
  "key38": "s5zz4kg4xzzpLxDYUknLn4XWfmByXd11jGKWDDim1D67YithUA5ubCsr63WycmK3zrBpwowwVgtU3vHBvEgfqsq",
  "key39": "uRz89AspP2bRNino1gyQPnbMadWUByqcn1rtQv5jsDKr2e6hU9ytMtn4gcCmnnt5CmqVY4JNkVANuvZuYb4T5Ys",
  "key40": "ggtxwSBge6JZDCYconGgfZJTRMe4gDaqy73avrV38ydzYMxj5A6JwXaZ8sdtawSUMTm1kXMQzthgdxarbpVpSRH"
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
