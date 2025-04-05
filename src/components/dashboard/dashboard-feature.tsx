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
    "5zzwi1VS3VnBgfN99pMUfrmArR1Gjifabu4vNFJKkppvnbxQqrYRYfK4vhLZpCKfDLufvT8FdQdpDzViuwvRsUaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5moDmPr1ajJHYV5AzcumH6UWkyWR88TuGpBGfnWHH5MMQWnzr2pkjnHg2QiydQnBYkrtXmyXjCyzRvoGxfcrMHcW",
  "key1": "3E7FH9R1GnJF4HjgxMp2D69f8BezY5aLy4tm1gdARZrPoFyy6pXcGuUvTPzcYAYvASr1GA3wQiHG4S8NsJqiYZHV",
  "key2": "2yn8r2Zp9ZRHkPrji6RNpX2ghQAtwZARCfZnZzjb7P6gyvZTEisMXhVnknDnyHdNz8ssByxzfHcgC8v6X98PdRD9",
  "key3": "4JvqZ76qqriFEJYvLiFk3d9wGToeoCUdZ5VKSmwLJYfVPphwnuqgASt6ftJRhR2PEtFGENsLQVJzABMUtj7bb4pP",
  "key4": "LSe4WRjdDsxrP4SV2mdsV2dq83AcLf19w6TTGa5mnvS7E8j2Qqfham1J51CorDbdWcKZzm8GFKiRMGqer9C14EY",
  "key5": "4Ct5jnRi5ddPKcWoaSaErquJr9LDMJSErZBMEbkij7hGconJrQBfMhWmKG8Cgpxb8fhU6YT1Tf1tUyA8jFdJ8tid",
  "key6": "5vrjNwGn4JrQX81QWCRoHm3u2o1rHAxKK9dkcTdEmYhv1NpHfiFaNw3UxhrVwyBR5mKfaRgzGCkYfdYhmbK2WiWs",
  "key7": "2x7TmZX9ArP5oUvUFCGfjhShDo5CahwP5KPgRZQjWC8Tgxu3DzoMJRfnBzGDuJR64Vq6p9TQyQMN3Rcbr4cwsmM",
  "key8": "4t1UGuSD79GMrAgVaE1kP1b3D8RxRb5b1Mp8FBbpjgD38iPDrLzo28ykt89p9ZDHFFkJNX6y8tn8hckTGha4yQvz",
  "key9": "2HUqDQxAANDAFbBMVYm9Z9ykTVmzWhpJb8rVw7EG6J2zFycxxphqeEnwQ9pz3aXrWiuer5pcE7bJk3ybjKwwA9o1",
  "key10": "392HDo7zGJFoCABzWmmU2Ka8Ye2T6UtreCSFnQx28HLfdULh6FvAMpSPQwGqvpdnr6yRUvE2iUhwNoYgP1gPXXz4",
  "key11": "4yAzv5xXA3JtqJ9QNQNsRSxUCqziwiPf5mKJPAaLyNh1q7EjAzScmyVUzpPAxNFqYUhcZ48fSPiAFUgZxUw78QTU",
  "key12": "3uktXLD9AH2nBh2aNE5oXQGkwsT65YTeJ8vePJcjodgU1VA5eoujd5S5po9gUYku4NRKLLKU8u6xwXjYgPuWrtSc",
  "key13": "3UCma6PvYSrBeqBiCHPdPqMxbVhyHozinQpjXDvhS53hcY4zz4G34AaJwVUs5wRBUMsFt2MCwYKoDtsVJyWE4BNP",
  "key14": "2FznDkostzJuDV2acnxzY5ynLCELq9VhSWmx1KcS2FW46SyDvJvJM1tpe3DoBTuNEGUzjEL3RRwC23XncfiUvTxs",
  "key15": "5TBnhyB6SRLgmwExq7N1y2JU2KTgZqvfBT9pDCvXdvaZcAxhCAua6mTEbDmxeuCtmrUb5GzSEtD6GJDZcDEtev73",
  "key16": "5ySCc49ywSZpgBzBA98NYNyEw27boZG155BCXQJNhhsSQKUMMCcL2r9Pw39JAV46a9mwWK6DCg3W5zVqvqScpTev",
  "key17": "5YPazjKdgJjDf5PPzK1yGj7invhVRor2stmf9advuDWk5apBp57VcAVR1KCQjJKoVtg2cEgqMdfbV8XyfAV8X65F",
  "key18": "4ws6iVBWNVPrj9ovR3QSX77pN1JS6aeN7oaSVhqKTUxM7pW4nqDtrx8vUdQBd5SHddJixX5TzFzFEt9zjuCDBegV",
  "key19": "25PGcUW6JEuj1FTVkjruZQaWJGsNRscbf9kAPFSbDrN9nWG85Qrh3zikHaXC2BmPAyArbcbPhoug1uFRaXUeJTGj",
  "key20": "3XAwLsZgVCC5F1XjW3u2rjz26f5BmUSybUwW6A3bs5Y5BgRS7mrFvfqK13czYuZJbQHcJTmurUhBqDMGBrY2gmzW",
  "key21": "57Gt7RBbGRnCNWbUS1o4WwASDh6LzGifTgtMAGHhhEt8UxdekkwdBeVUk1JZXosqs1PiombGS2ZetqBfwiA6MzcM",
  "key22": "5SzYw9NbwPUGTjHKHSzyt2hRt2W37WJrPmuGAsgEwHgPQ6XaYWQo4rzKKydKaX1wobkkq2qEGm6wArMbfpsmmmwF",
  "key23": "GaGj32UL9XEFykPdZmeEvm2uffvgVeHSAHxgeUPLSgRR1zL948CfK4BcqDZkamqtNn3Uw2Dp87xgtwXNsEqoNJF",
  "key24": "3YHmMFAcCwEynJP59j8pgDbFMsFKnKSpDUokecgeVA1dybvDjpT7MMXFSWe4et7TnMmBVHUVW6tXfs78WhV1h14o",
  "key25": "4hVhs7i44RUV1mP2e872xVWsQThaco3HdMJPZx2cVsJaM1VJiYucK6egVfXniWuCSZxmWEUzsTjXSXaMDkSDVQot",
  "key26": "BFs55CNm4ccNUwM4PNtFR292pAyCmxtyxYy81xc882kLNoUQVkzKAcDhoiytJeF7WWDdSbgH8GaTxvxeSKajM1v",
  "key27": "382Sopsc5JAE4UXpxXxKuVx6fASNHETWrRtAm1W9F1zDnnKkCSaocsz992tjPiYSsox5hHYjhY1DnxCRSLW6NDWc",
  "key28": "9CCsnRVM73YFsgBoSzbSsLs5MN7SF9HjApsw5w8uNtYNzSvpPyiZkBbviasNA2CCGunKFxT6NTK31VWhW1FXcuy",
  "key29": "UZUMdqKkaffVPwHjrLbtRn145wZgqrGLZy6Vh9hn9sQE349329W6uYvwxmXMwRyWkYJvrdeQNe1X6TQBXQUexdS",
  "key30": "zVwWfi1eBYcac6qyMNqppoMdNaetEAEiieYmFMEndRQDTBeDnDndCn6Fdcg77UvXA4m1wC6BQCqxMscHhc5tnK8",
  "key31": "5DuVeHTnPhLPQw5AgZz8XuwPNhAKAvbvs723HsnrTftYvKREKbcDM4SEoRDoKamiF6meLbi157UstSH1KPu2a7So",
  "key32": "JA6JfahX1c5YtHXXaHmmmmaAguqpRdk1SQWFXMF3eztcJ3YBWKruAYeJA3uod47dJSj9zxRMDquxE4izo7opT3S",
  "key33": "4pX4MzjY1jDDetQjHiKp2vYee4eqcYvGn3ZzgqhJqRZKn2zZg1iniedqsNtrqMGT32U4U3jYUaXWDCPxGUAhqWYD",
  "key34": "fX5qM5kgK5Qms96tiGy9du3bnZ4qj13DLfGetKeKH7YyzFX2gCmm8VKKWxMyaUtU75w75Qd8N6N4D4SZJPupaKs",
  "key35": "21XBc9XhrRRnYeFq8RGrZRUoVdNZzxmhdxB6GxSJ9aCvziRsD2hXvTznfrHRCvhJVnG8uPr5ACeC6XqQoRnLKNgp",
  "key36": "468Z5L2GoVcgKfZYxvH9HjTYHorSuNAB3SK63UGkYCtaZAG1ou3QoXuC7hsNGNyph2DbK3pMBhhkVeUReTcNHJz4",
  "key37": "5HBzY5NH9EcLZbsCoiHYW8qjKK5HxN9W8w5iKDWAsbKEHtux3x3Mi6bHkXxQB6JPGivptgJicoxqrBuAjWrfnDNZ",
  "key38": "3Mbs8nhCfLFZFR5sSWpj1nqsxczoteCRuFEzQBEW7zHzmPfoGYffEWPvfK6vYiie8sc25PYdDDXqdTuaB8GmhdBp",
  "key39": "4LFpLtKCWRuiQopDVkLHBdksnLmATrcMfooBp2mH5syRTCMDFTJJ1bcY2HdheqaW3nSEWEHdu4GmXhj3qtDoHXcZ",
  "key40": "23mWXy3EfeQGnudpEDk8rVV6CjBFKUNJia3LcyYSb7RosPLPqBSTTgs6YjYFxtWcRUGKPuU1jZGrfRiT8m1mdzCy",
  "key41": "3m49NbVUp8wSb7tFuyYPx5qoKTG3UG9Z62KhoPEkce92u9nGewuffPJLwzSxiD8hqzzpne6iYHEeCyXrKkXdojod",
  "key42": "5GaahuwKgjtorsDCWYLaZKb2N2BL4qiCcya4sdA7BZNcfKSAcFqjvaT7drMMc6w5nuACTxG9c6fywfoAMswpxd3",
  "key43": "WFADMCN7CaGHNVSy8fcDLSJAudEhvAtiqzmNcYkgod2iHDf7kaqHzJgZ88DvYiBotD5gotovpY4xu5qMgjQrWa8",
  "key44": "5LZvYYqxuYDPiF7gvRMbaXGEyjFTXxVRsocSHrnH8zFQZaeThT93qLUGabF4WS3AjgCA9gMCwjcNKjAGE6Kd3nWx",
  "key45": "4am1AYPaoVynAK3kS3vEkhWrZwGnPzLqLz912boLNL6pQDWJ532QNy8aAdUGo8CvuXEJfYrXVdX6UWPWysvywoBq",
  "key46": "5F3Nhm5NE2docNeUcBxCwAGnCexjcELcdN57jRsBc6fRSrNeVvszGWCXrehGBhhkgzBbFAG5CTadCd7rAAZv7Fub",
  "key47": "58Yb5DLvqkw1LyCJpBiDbsPgHgKip1nb4qxJZBdibdikFoECmejqvJHKbN4XGY89WYsz3o3XwtY38UAtD7mQFNV"
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
