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
    "2BD1Xz6qDtYqEx3dHYNSiePSbGwCGytWLLWCcH8YhKR8hsEb6YtJF5ZYxXvnVDAixQHVwZzDmDDoXwsKqkzC6JXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTcspRhKo3kWVbb8dqu6KPM5sxNwnMALWPAocK8UDXq4Z3Vck6KhLFG7FQvk9ERmQPR4kJm1YUJWExX4VjqM2cf",
  "key1": "62iQKhYBN4HvZ83JfEE3D8z5MKven8ZUcntNn4JgoEVoeGEdJZxT41EzaKWadtVrNo6UXEVtq51AGNLHSXZfcfYA",
  "key2": "3DoBqEw8QwfWxpGjXNBKJBzBq9sRmVdxcxCkw2YjmqgTHVLA1EFDHJfv5S8CP6YJiSUTJd2KNHKF76dRdeJj4saY",
  "key3": "2SyAxMSzMnxx3RwUxscNm3SAGjJhcaNdknifYRpiYJNjEn17XYyChRiJX2b8mMK7vFi3tPCw9GwJnN7LbE87CsNm",
  "key4": "5GUhKX5yhFqs8gbfjReQdPiFK2UyuZ3bh2LV9u5YkJ6dAXhFjX5av4YoN788gRDy52XdTTX7BrnnzoPiWe5b7BbV",
  "key5": "3fWVHHSMDVVWVTYYnWXqWZynCp9Dpj75NPHiDvBbz3Qu6LJf5NxeTCxrtXULD3EfXk9tD8aHMV5hSUZQXNsW78ad",
  "key6": "2otpL7stRUhRZijwytAVtte3KGH4nK7nrq4yMMUgDWF4EBanYTqJadsAAAB8cd2L1cxnjRNTvSXM5bNJaGXJ3ajF",
  "key7": "3mWYkf25AbJFzoWTRcTb6m5zo7S1EAeQDWKsM2GFhY8cwuzrudeEFtJzuNWW2c7pHYDHZiyq3QunbDkjdWHw2f28",
  "key8": "5enwUJy2xfVYapArnsqgxRo3cYa3WiXy5AYLFv2siohi42fFsCyJ2Q42Uawjw8TjwevY53tDUwWmJPc6GZb2mWKP",
  "key9": "4CLjmmu83hYZiCTFD8rKy1T72jZ1ETt4HubQE3D2jW19udMrCnAy4T3ins5MPeFEYSGiHiZKX83nZAJ6KUdxhkPe",
  "key10": "4hRE899hSfis4xDo6V7xgRwfvqAsvpK9LecmEhTRybRLsK69FKqdaSVnoEWCsmYdZVSzihGjZLLNQgLieXDo9qFs",
  "key11": "3ZwTrM8YNJq72fxSG6aPuoSGWVoqLEHY3NeVkH3zf3s959x9eucMCm5fVgtdcPT7qc5sD2JM63ZYVhbWpsjDj2gP",
  "key12": "3UebA4yD6tVmqSDxDxuXwqTF5tkKujuAWHdPEjo5bbZGPV8NZ1iqsHWxjqYNY8oSgZf199rQFYyW1ScmmQaHtw9j",
  "key13": "5QpVPajMvGg7mNRWdnLFzNvb73sYCvg3GMdHPx3REQds4Kqf6Dsk9tLhsyEVgw3AmcVRyf2vnBVig7TgwHde2kAf",
  "key14": "7GBXwK5vPUYbW1Wkmd76nEdhELCVVMxH3V9hAaKSMhfiS2UPqHS3HXZNtcF8tP6imZJDRpzyHZuqedvD7BrB4R5",
  "key15": "XK54PbYayBJ9m4jken1QKAV9zAntE2uYQqcP6TKhLhVDpk5DZDX26XiBbEzMhggzAw2GRENcC54ehXdiCS9aGsD",
  "key16": "3ZgzC2XQGQkZBv5JnHGGqAkUYU1oQabhbW4bsRpAi5R2pJhLVoqdrR6iN6yoKNjqEd2aN7eNYrMP9MKuskqe98UP",
  "key17": "4pLw96eTyNQ14sxrJcekgB481LMonoiCgvFqjZmnGLooZE5DiywZKEt1MKzhqzbZaY5vY7KmfrrCpKLQWfxmGqe4",
  "key18": "5tCgF4zN9cahU9gz7RFSuidzgKLWyrLomQ63MBTmk2DSVMcu8reN9WvGrHBtS81Z6YFhmreQHPTgAqCaBiegqGHD",
  "key19": "2a85uSYDtAMuy5Kf6f5fvjiMxwEgqHt9MW3h2hK6Jsa4SPyNMVeCsoK2eTbC23SKCF3DP3mrpfYq76XZ4VzDtC3V",
  "key20": "zGBixaoqBm3c6TVAAunDWuAHAC4UVNJQ1ryG7BoXQi7jpTua9n7dUEH1jAtCeWzMrpErrJy8ciNJFa6mphxegEN",
  "key21": "4DGpBHhAtW67DE26RqpYzACBwrwbP29URUBrzzCpgxiZhMKpRSAZJEhHy6smrvmZiXY3NUBMCoi4Fjn2sw74idEA",
  "key22": "u828Qdaw7qkd8DfQQNGGZsQdreR9Xry3kWvm1ALG1EBRnMeMfuJU1sL5pakGRoJbYvb6qwPFWRQgJmLmMhd1b1M",
  "key23": "2F5DCCZUzLAJwxR4bDDbgKymaMUMECU1JuC91qSwkELp9bbtjrzjdnP6k8ZvjBXsfoAiXMfSidiRU9wVK3s21HhB",
  "key24": "NVCLC67sJ3PqVmc5mJh2QTxcPj5HaGzemC9JVcDZuhuyQR2AHxazTJZPWvSwoZEHR8zE8QdyP3XYN4oPHLdyYpy",
  "key25": "2TcbWe4bt9je1SByjcM6ELAbf8HyicfKV7PU8oXh8RAxEVu9EbpmXwK8bk8djyhxaog6aphF9d3m1c11hwEmtoie",
  "key26": "299gD8a8V4jphQjc16kpfhkNkiqp3Z5ZaBkKsmcTaXU3nneb9X8Z81xgUeFubysrxcu7HoQhTSGVCGdy1pJakVZq",
  "key27": "3HPfWNtTuw8XqEzFhHwi37UehdUfFv2Dn6Jw9QyhkJsw6ETc5MeaU8P9hm81w1576gv9BbvS1XrW5XbbYnLg2ECp",
  "key28": "2BtXy3MLfVngwGmaHB62q9ygzD9JDXSVCWmnzkkbA7vcFwe7DXHK9F97gKKefyTiX4g7eQR3Y7qqvVmxp1DBtYMU",
  "key29": "2sxUc8CsiVtvAykRgFAogPWSgfMDwwmFVYshh9y3J2bj7D3XgoPnpUKFwWjDtucajYYAUgrKbAKNL3WvvFbqpoFi",
  "key30": "5dJpu7czwDL4mwUskHALfj9NDVqmh6tddQvxpHgZhC627gfMzMxx5fawXBG2MgNS1JiMgYGFJXdwGEQf6yzhTuLE",
  "key31": "47kTi4faozWNw4tDvxyQi11LHcpB5o9D21hrVhdu9JTPm9S9vPsNpP44Awuf1aRDPhUnC5DPxtmCAQ8EvDyThxZc",
  "key32": "3vqJaX7GZnHgTxtTE5hRfvTNvQ9VoSRmJQaCQWQq5sCaxkU8bzjquvrADusVCiVVN13a2eyhDzFuGkSc614E8mnT",
  "key33": "494XSp3txQNRpMrHhU4Nqxj4qxD8FkX8XBuU3Rh1VJ7LfxXviAiyJcCMiiKRTqBWywDMrFkqmMmMtSCobDfehmQN",
  "key34": "4AdgFVjG9QUiV4cXadk6crwXFjyXvJLhAdmGQyhqXqMySHa1vSppFnkJdyJwbkKEhhhByumZoSJGsQ3XCKL23TiR",
  "key35": "5Ts7igMsp4kwVD6WyP2Mfn7vqkVN5ZnvwvwBAJDS5Jgwad6JiKeJDk6KJX7f8pUiNTrQpwr37mU8fL8TqKfhGm2h",
  "key36": "3KRP4o2rsypkW63sFMsXzBiGAVJgw5mRczP5npor1Hoteo62jRehkETYdJXd2wJKgUmy5z1xUvnAgoPSxwv44ntr",
  "key37": "ocmbRg96s8Kni1jYkLSoJLcjjq5q3p6VDWVrCdEAdT8JCRQjR3EJpDXw6s3KFoLRDYPi3nXpeiHyK2vF4WQnbNj",
  "key38": "619QTMPyZj2xqxYmwy7TzXwmV4RQuTFTTPQbPCJtSPj8rzCuyGDjQKrRPzVCFmKFjHrcARXe67GkWcJgB2PLHRdj",
  "key39": "4Eyrocs2ZsxfPq3Z3Hi7h3fWpDkNr7gz2k2pHV9SSMYakVxwh3rUK61uEzFXP4jiwF393KjwuG4KLqNcU528Fi83",
  "key40": "4ybpChQQJuDodT6TmvMF49C8jPBNYDCMeG3V52JmTpC64krurpJQkFiLojespNJDYxu96rToSgr3eRuuDc53ZFCr",
  "key41": "5pKSbQoXMYDPpcwiwnET6XQ698VNwWdPPkhKR9eCw4q9Cz6EP2FuAPP1SRnrv4qdfGb53TZbWVYc5noAg49HvVwA",
  "key42": "4tCz7v2oKVMB1BX1SgTWhpk2vNoHamnxMMaPt56ndKVon9Lf9eyDxykJNLrjSYnByQQhR64trGywPqPr8z1uiDwt",
  "key43": "zqEScH3Gu7uw5LdSjLdCYQ62GwNe9ENjEMrLpKqRShcJ6PuXJ26GUkhAfE4EX1nQXvL1j1Fs86rQ6mFb6h775mU",
  "key44": "57z2jxgwkxtKSUpcnLzUvKDJAnFh5NAu4An7H16tw2RQTfaBhHsFfQZremjjuVXE91oLaNgGhm4vurf2osETumm5",
  "key45": "5XqPRfDu26x7Kvwcj8TMQGsjvSMWHQKdFuT66FFfhSCVbUYkv2BPJZ97KhiChFQ1wqaFgXnGGiZ66Ep7AGfewFFt",
  "key46": "gn4Pgfcf1dNgbUtfA2vjbcZiEy2e4dZitkrm4AvnFLAQfM1yPtxRcAxQEw8pMByEcrzsz237GM9fQuh6m5qUPvp",
  "key47": "4yj2jCN5xLsfWe2EurnZi2tZfLvmehyDVQK6CLzwkq5wjA73eKRQf4h5ASkZBttDBJwNkGFVuRsqpqxA4xnPFZMr",
  "key48": "3W7NTywaiPExHZyRWSVvyYquimnPpVP5ZuQu38gpSog2FadRbhFLU7grheWeiJGpAHQ2c5eUqkYgpu7ednZ3qPqp"
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
