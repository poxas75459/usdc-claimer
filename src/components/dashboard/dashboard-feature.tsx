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
    "2xc11KGvr4zw8YboY2R8p4GR3keT7g9b7qhXr6K4qdEvE2NvFP2K5mT53FsR9w7NYqZBhKDesLn5GLtWVh3qMyci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fi54xiHfCYGDTZ7bNam4kSywmmhFZbKp93JqpdPmZadBWZftNauJigc5gcBLC82wwaLaR6JS6bcbrPUU6FfWxV8",
  "key1": "3VCo7mGCDuEr6wCEF823GLAHTosZZuFbDaaQnP7y3n3rstDhxEtQVhh9KXpb1S5PeuksydLVuR6DifaLqW7TJHnF",
  "key2": "zx5RoXfktYsFYTfy6hGDEdtdL2PNAuWENhsvTUnwobBjgxrJchcaLEYao8Mhu2VzHFEkDkLV2YvjHa3wMrvKfva",
  "key3": "59nrxJUFQ5gSiSXDVMDZvbe7T7tBzSzM9J448BqZiGzzpsfZPwtiBVCQ1FmNJWL1r5sCmm8w4gBMApaLmCtnWq6P",
  "key4": "MgH3hq1kAfphdL8gXByRoVuDkuP6MgSrmBSkHutXZCpRR9BYmX4VYX5LPXn293qqA5CmT6SSwAk43mCiTnrDsif",
  "key5": "5UM9TSgLJVJZnA5nLrRqHUBbnRwYfYKg2D2ojf3WyiEDU9YR743Qwq6TZm2RatFRFgnVwitvY1MNUUDzjv4uxWt1",
  "key6": "3vWSVjXgdK81UFso5Hc9cMwZqp6NpihLjeU5s2FaHPiGBGixiGX2R2S917kNNS9WUUEabzxxMkNVPuida2qu1u8N",
  "key7": "2KGHK8wT3a86qzrUy1vyJNCkMsDvoNCb3K5DuAAvXEZz1LRDEembtShVcYdjEhx3Z57KhVZvuz2q4fDmS7KNBw5S",
  "key8": "2ppZB1Y1WTxrXEHjbVEN4a3Qah5WKBQGNyDHqreZRca54UenxqcMBMbUwUfoHTX6kpp9RAWRvZxiPwNQ4jsMecsy",
  "key9": "8LX7ukcQ4yjoYcZyup127AftiGVTu943r7EwA8oRcYG5mi2B41RVJsjzVGKdN8qbVGX8Y9mC4S2gvPkeMa9qxrb",
  "key10": "4SRM3nZD81dzKMEr75SprTdRjeK8qRoMoXRzHR4LTtZgmAADL47ywmsnyVFYptBFtwSYs3cYhGV5v2bcH1aTGe33",
  "key11": "5cCG8odezousws6dyTfwu4TNACxMshu3aFshtksaaWiE2bfLRLKUJT62MHVUF2FgMJE5LmopoGnXSm4o2DNxWMLq",
  "key12": "4mZVZABKjomAfG6zap3R22SmyNAMunkLbuSdB7KnSwWWLcbbjVt9YtU3RE92VtVyQUpGk6jznsVVHkNBhEJYUhwJ",
  "key13": "5nBJ1jmyXzEbCVtGTPJLechp8KqRoGUHy6dxHRNhuQRJKTvq7m7qLo4i8Nmqe3omiZ7b5pkuCmQLSsZuU9pwja2m",
  "key14": "5tXzmwdoiqdswuVR87aTF4d6L83j5ZptYi5tw9Pr6RfyyygRVNacVHY2MPVZJ9yD1shinBucNQUjgGAPEno5SQAu",
  "key15": "5e8Wsht8BkBMqeKCgxSKGUMhYgWp676VscJsSbQTMJYrcB5oqtk1RMw9ZQWDiMKo4hmPBdkFyrUpnbg4cwnzYGd5",
  "key16": "4WAuKQxviv4VmUGqQz1cJHyZvfRWCwJBpQRY7HgdTfy5rhc3VdBWWzZUnGTbU1BNyaD9fGctUgnJmWps2XpGG9fN",
  "key17": "4XAszVdQqf6asBu7qpdJ4jnTFsMeb5ENpkdSj8tw56irWR5aqWXGF6ChhocNeskWZi7QbPq8Bb5xYmL4YHSXL76r",
  "key18": "5Ao7BdkDG3GVgYPHhkoqnaURHu4MXyGvSimjssswj7HgJJeR9tyaY4iTbRa67MGNWFmgfwcprReffa9BwqKpaVBC",
  "key19": "648SC26k9cYAqd66DBQqcJyXZmNCTmbMTiWeR2GMvrEzBop2RRrzoh6setkCjvdPWjs2rK13LWkK85J7yLmw93bG",
  "key20": "3Zk7qS34bwG6zZ76Qhu6Z7w17hKgoqEwCCavuCvThAwEm9o3rVj2XTFw1ma5zVSPEXjantppZUtJrk7fCrmbp4eA",
  "key21": "jwL7UeeZvKh1PDWEcbPtSVCfuZL7uzK5fJUAi7rSEZzN6UnW4iagNC8aLxqMiCrrfG46VdrZzS6J9xqwU5DRjdE",
  "key22": "GMYruu15msTDbVRCcaW1ubcLm15LxRvVCUuSf76JdKXfhPMQV4mUHFNTinpoHf5pXjxQRfcFYxZRdg44zWn8VbZ",
  "key23": "3R245NYoYweYQ7UNtFf9yyMRLUE6Paatjr4Uwd7SqL3TAfaVcYQr7c4fkH8t8uc2MBF2de7HWwvNYozuefphZz4c",
  "key24": "2kZdaefHrYVtnb7xN4BuuMHdJWDm7hUbXuPAicufbtSaUqMP6385TAVfWCWzSe3oMze2FBJsqk6e4NDiVX5jFRuC",
  "key25": "5Se6vHF9kH5yX6BMpUpPzr2j7zxbxgqEjZg4Ey7r9MwVi9daqyu7uLXREcj6xeXp6PciMnWizuSfF1qbjUGm9tx",
  "key26": "5CtYhvDQ2Ho4BnXEEZK9R925zYM4VMkowChBfhp4RpD4F388BAZYnE1B3m8qp7FRvJzubjrN8Y4WB7LGEE1LVv6j",
  "key27": "4VoFvUBrMDztGdtsD7D1nmEtBN3Gfmr9ZHiYB8GHBXVmdoxPH6y39KTQQsgBWh8MVhKJxGoK6EWh1GeutTULy2A2",
  "key28": "6675i85HGWfscXVkgCtRrShURECxSfrZWAaMR2i4opwPv3MsZXehSdf2r3kMmLsdY5MMwytZZwxXspp2TsfsFXQL",
  "key29": "RBsKQruYM59qDMdttRpKZCEea9SzYitZaPTNxkpNirXiKRoBDLbYvhH18MhJ9yMqYCHz6X55Lh1Ls762L34ABgt",
  "key30": "2RxP32DuJp9gKizb74sEKKk8TAiKXtKKjUWv3RAzmQ8i4Ren4q6WWh7xxd3pq8NAUh76gzhBqhNJaATFLnyAizdF",
  "key31": "3kmSyEFgP3vNAXHJGxY3k664eSTtDbtoGuycoRmM9TViDS9Do59JqW9R4rJ4WNEAbofHCkMLdxcEuyTj6FR4PWrL",
  "key32": "4FKVduZxvzjqBQpjNC9KRLcsXrgbqwJW32dDMonfanmT1LFwCUuAvqdzmgxQskknWbQPuLmtz4QRAScmwhQTHPqL",
  "key33": "5uwUPB7RB1LfJSLdNGmpBZ82UXoTwZuYZ3V1PwHgojTdrTRWkfeVWqiRMMypTXeZmeFVZmV5XaDFhosH3m36amhM",
  "key34": "3yCEbLKiC97oeG9c3RCmDvkfzqf3jmRkNSFhadG4ydJuztUTcGpXDo6NKqrFRVdUStcAMQgj6SeYWu1Shf5CQuNp",
  "key35": "5MeC6Xpp1v97RiJSghZD9MKuALjpHEZsGARTXkQDquEr4DTtNJuReGXimSX6YSU7WRrgeNKVzKjGGQAHrn61kVa7",
  "key36": "3XDp2SqfKDNBkr7xtM4CKdom6S33niTAptZ4ttYsEQisu33QaCRwmLzKjBvfQPHFKRBEGW7F2rt17i9iq1cTNB3h",
  "key37": "4ApF2BCfd16EDuRPRLahWKThcPADCavQGjCyX7v9SEqbgSHJM9h8eaoFfhucg7iVcxZRwZVju6qYpyywawkpAkmB",
  "key38": "67XP2w16aLKRJDzTYRPkidnc1CgkTg5p6XDdRx2b5HwWQDKX2R6UkAk8U5UAEdEyFC5SZH5jSkTtftHEiyLMZ7pt",
  "key39": "5mGHeP64QVibvJjtQMLmbV3fxVUbmhTJN6Kqkyf4yp1T3dHWuGXnVpKvLCagE3yD4tddRqQ3PFRh9DWCJwNkFzDD",
  "key40": "4U3ddQgQLEkeZSEikXfehAn1aF26qzB37hyYMaoZP2V3DkByZXTDGLTiZrWMpXDFtbN8KZDnYbBoKy5xsqT5semk"
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
