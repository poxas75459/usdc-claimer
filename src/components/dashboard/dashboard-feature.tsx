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
    "2BLyyEnyg2tVDYgQSg4ySw3eTuymV2HziAvfzBAELvanV141tD2SXJWJjRHVStbxtDkF6Ds21qDQgYqm7ibR6pCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2tCtYsp132owgNMUVx619q55CGfxhi4oZbKVBZszfGem7ZzEhapzSx91Bs1cZJvY7ZqytUspCKEBSiQhraQvsx",
  "key1": "4PYPFWsgqLeHxgxxAUfjkWufi6sQGRY6PA48MoExcekieHwvsYtgb46LBFXM7nvxtv8UBcoXxMSqLVSB3ebefKAw",
  "key2": "2ejfEdF79B1SiePWXRrpT7zyjaxS9v1QKoREKLFE11Kjb3rhYwq8GGEow6nYLtpS972wNfdHKhTEzKdiGsqJdRbJ",
  "key3": "2jogMn9vb5U8MCRe8XxL4CEJa3gKf7p1AC1PYWiMpDyf9vtmqWQgXAgUQys7E6mCWfFTA9E4Tt4dfn7J2YWTF7pQ",
  "key4": "4t7MxPQpVuaJTBPihpu5zTkz1YwQiDpWZP1SD9UAUi46Lf9wURH4wtaLgwSouhWcQ31xrmYwL7zZuYjoFDjZvc7q",
  "key5": "2RJs1jPdHoDL7bkTw4RGfguM3T5Fvws8eUcUT92r3ThCpfo8ULXjpo3qdgeTcD2y2s7ifuP2Fbvgy67E9gSF1tmH",
  "key6": "51zALGnJay8w2xw5bBS82HxRdnSF3JTapPyTb17mgezNYsQcVdgadYHVScTzobodASz5RLTZs9u1NPPEfuNxw3UE",
  "key7": "3Wap7KQAZ3HWsGHUKrJrhz9U57HgFtac2Sst28fEJRaMzTRpWF4udP735azHHef4hoNGiKXqamPu25AgoRpUiKkt",
  "key8": "38BHvDHAdjeRMZ4PrzwEHfWPXbUdgZE5EBhBRNRdA9xX5fVRFp2Zix7xZy69sgCewmUDBDqSu7p5SYPeva89NCqK",
  "key9": "5yGXi8rvgF1sGCBYDEb52rLnaDmtXrY4MX8jC5foYbwBjrF7W75HPjxpsic84cvoQEQc1CqQK7pHgVZRKDB1MSu6",
  "key10": "3h8tfZJWh4XTekv6w9hjXJ9Q9kUJUEBtJzAhN8Nn7EWxsSwHaP1t6Y5i9g6bLKPU8NgZNs7kn8MzPP7MSDGcT32v",
  "key11": "2DTApnX1S3NgyBmVM71ate1ofmQhE9VfejHmr4MaJkY89JfBymKd3b3TZ1jydvZDwZuwxByouLjrSmqCPS6WWG3w",
  "key12": "34AWX1VA3Ep64GHnYk78S72hEMhCxibpTNmMWwc2PWaRth9WynNQqGtb4rdGaSBec8ciCYEVNc9iHrbfUDegfdMc",
  "key13": "GrUudt4SrACaxV78r2wfAwNrg3QejmSG1bsAjXTVbGeCTwRPZcEZcX2GV77Zkw1q8XDQ1HsAEo5D3c8uwECVtas",
  "key14": "E1NTocMokXqi8rVXnaJ1GtLwb11KMGQ4Kut5QxEdNdyhjRPQrFDFqFior9MppvrZUivAtjSF9SVYx6keh597oPn",
  "key15": "58Sxd6vnmLaQA6PEGtZWfPVeCJsDyRNd8teu3WRWCtM4R4YGS8oocHgGp2N11sQL5K2R865m8sEiBT1Jne3K1JK4",
  "key16": "sHaZcgSgpZcuLwJG5c23xt7ZCAgML6x1kYrMUfA13WWEUPkBzwJzYmX7Uuph3EdQAVo59u47KuE8hF8JKzctWFV",
  "key17": "43D1saCJw8CR2EjFTWSRwWYcXo2urY47enQstxRQs391yizgj8rKS36KjNnGGPJk7C22Z9LQ3e5C3boNRXuKJrau",
  "key18": "3aBtcfgcdR6hsf3wjRzZeDnXZCvVnTr6xgaCZV4yA5cNQr4QDPRUr1HseU42MdGh9mgAMMD6Ra2mNKws16f2V2QD",
  "key19": "26ZBckbtmEY3H2Zb71F1PbSBsjECqpTh1w7wsMZpN35ixh2ZVkknDBPCmrf5HbE6F8Sw4ZAFBGzQTWYkQ5NYTF89",
  "key20": "4hQkV34enkXbWNNojsGmDsypmjRSMotJYWEunfK1Bu1maHuyFr6qUQVCN4Hweei8WABiKih4PBvpUdTPrwDefHGm",
  "key21": "jEsQrNP4jHVDFjYmTBV5jq199LqQe1JASD4Xyi6FgTzmfToqH6r8FxYByGX8kA4cLyoXJ7sHsoKpPhdjkSiZxm8",
  "key22": "Weg3QVFohN6FmpEezMmLmaEoq9pdihqKLnsCLQuFtxR2c9UnAjLFz7hviBfJkjA8Th2M6DF5r5F4a9sYMHEDcC5",
  "key23": "5JwU6JKVXJ6Ki8EF2TPiGcFJ5QUo2VeTEkxCNEwda9MPnjQHkNYta7kDtS1qGNinj9aYPsLD1UuPR2BSWoypPYhP",
  "key24": "417X7fdYnuUw7tK6DJrBVAEuSfRN9XHRXEtkSiXFqMaA4h16DZmm4VWRiwvkcY1SKZJQZw2FtebALhRb4DsEoATM",
  "key25": "5yGFEJfUwZ5bSNVFoS4rQEwSfuakc2DSLpe2ajvkqFyrgw2dUDvwJcTKqAmQ17Zi1fZ4oPSZXwcyUFwSNUW4QNaU",
  "key26": "HpPL7TCWbwPffYtdvruiemvPpBB1vzydjv6XVD7zhPZqRi289jN49uXHbBwT3WVW16yCiXSqVW9vP8mGQYkS2iu",
  "key27": "25qaYhoNxgTCHECnrYmzTB2HJjZkhuUyoCZRCMcTf1yQYufcK8nWvk7TbTKowjGL2LPUojMNpmHMrK4EVKqWgmGD",
  "key28": "5uG6fuLNobqRVHYswJq15jefhLmvphfM2AMmmsSPsJ4exYK3MvfXkCDQRzGf3D2gYxVRFR5h5TGL6XDvqQYy7mro",
  "key29": "2JnivdG4i4WU85d7X1Stn4VZ6Zw9wozooQA9Yrd1gYfoqUrccN7E8yW9sL1KGWd2iNmT4Xd41tbwK1gT5yvTYh1o",
  "key30": "3gefeeeY21YZHxVpPJTdQhRKVEK5c6HwWzCm5kBECwagxkwB5wdd2tw7V3yNzd6NY3awmrmPBxStgkKa4ExiWqke",
  "key31": "Yx3DvADxWGqoHFKq2pVYX9SFdBJgUDPR77Dnt268LCZSnyr5DmtwPsovjKWrYLbeYfcsUnPV2LGbDgKbiavyfMa",
  "key32": "51SFrZbEVSotGMx3oLjF8pdzakSdV342x36aLSqg2QJr7d9iL97nNvSJ1aZLoZZLTPU5CYgX2ZmbXQLy7SKEa4Yo",
  "key33": "2EGgsyrbycb354uBxtu4vLEBck34AqCVAacg1cThY9LWQDg42UkZZgAddmFKgmnsCqFkRRcF5pkHZqmwYaCa4FQp",
  "key34": "4JVkYc4WCF7N7Q4YQQKPqRWdAcbYvc1cxog3uytTPMrw4mhjFiGxb89g3zBLiG5LHswbkSoKVENXRuf6swK1fv2U",
  "key35": "58vpNkLomebEZkDtgrpyh1nZh3H21kbqbp2fHpdtf4fZhHcwxDJoHEoPPQvKo4VCNWsaQELxELFYEaQey1yUXGCE",
  "key36": "2ykgTRtMiVuaQiD663auCLhoHHAmrQNMCAd8naaPtcFzPVMhKGqyK9eJ7UTRC66wwtdiGWkVMNVb4L9yhfbZbLAz",
  "key37": "4Qxv2DtHyTWU1d9MRTgrUpy7gHmvyxEb8dz2dg6MkKKwNyjCRW7qoWeNcmCDeDegsw4G1wA7vEhRvhziXHUobmxk",
  "key38": "qAxdTSZcAeBnJdau8DwpjA8adJDfGThWYC49ZfuLFBY4CGp1Jt73gGN7BcEZLd2XPSBP8YDgETpHyyLXRiAvvQT",
  "key39": "57eQso1UxHqRPhSp9uVHuLiPsZJfquMKC799aYikxTRhTjqBGxxcMxLzhex9yGFVmYM3HUghbCbAjnCAqzxKTiPJ",
  "key40": "5i1pBFeTBMfB1Ww9333qMZSbEWF53iJ7ZfM7SorGshvAtxT44gQ3set32STwGXS9HUjQNA91SDCV1ByJjTrzBtsZ",
  "key41": "31fZLHY4tDMF7oTNRKm9qNQ7qqa32RMMFSbVpzCG8qyqyTQcisKbhspFWTdmhfGn69mxga3ekvF2beShbp8yjhzk"
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
