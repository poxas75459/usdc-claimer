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
    "5rsbbGFCDCNRdkKUP7UwRmAFwAaaR7f8xu6shaKbiimMs1euC8C3Z2p2yxkwq6jMMCuCG9otXrEBFWyvr4KUUsQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qo8tmEuwtRCPN5zLRdLLb7irhpdP9kExViyhkN2MxdFg9rZTUoFiHfVafJGUr5VBmvjZzSsWMa4fP5aDMpvB233",
  "key1": "4S65wPqBA6RctmRGjAih28WKuwWC42G3GGi6ts7CPM3zCFiF6nvbzX75bwXKsa222s62mno3ic3GcmnxQjKNWoC",
  "key2": "9zDCWU5y8i3M7kS8QTtPzJV7Xo9tzXeDTJNkXvjdEWeQwrRebmnR8LRLj2V62ZgyvzwnRBXyoESsbxBt3t5jfBQ",
  "key3": "3ujrsgVPbU8LvsMBMJTUYbJ1kbVWgR37ELwQkmh8XBH4cDQwLzCTLAQnWkkx4uPW1RRxuxcCUJpNua7vqkQtCCR4",
  "key4": "quj5iksS3Dco3w3LkTwPamN8FRcrUQxRVkTzMSQmyGaBE4VXoa5DwBFvZ32sCE7LjpyvePJX1zrAnVt22JojGBL",
  "key5": "2oHKKt2wE9HWDVzfgtWZHf2nKNuQcCfTnD9b7p1B5MeHLemotoEf8otxYyNcCtqFCErW6byLYDxqJXpDQsBkwPw7",
  "key6": "4mKEW7H63q1u4Ni2a7pgCTmwGrhCvkioPYi3Ji7BE1mmaRe393mPQ4PEhBk3qDhd88Mme4TbFC9jaGTK5XnVFxp6",
  "key7": "3x8KrGt8M9iyQYaaEU62vUp67Bxhkoa6Bkj5xBTcbVJcn5pb2JAZ66FVhBVvByCfsTfChDg8eBjxfA4BUafkaSpw",
  "key8": "38tx46azbAdt6B7P9tgr9kxhv6YC6g5hK6TNgFtM8bYuGoL75zHvcxkEzKyVba7xHLSv51pdeE7wGb3BM1MsocXx",
  "key9": "36NP3CPX8fxnS1SW9KyuPdTP6cu5EGD9M6JCi4zk7b1vdE7iTmSN9GRWmw1WjDRuNfe7HjcBb1w7aL2EutotHkQt",
  "key10": "5PgN5Egg7mnkEjB5oQ1ymXN4LNrApD4RquwwcTZ7TykjLTrKFHjPtXAsGoR26Vt7owYdnLwLYPBLLTago7mc83jn",
  "key11": "T6AnPhY2aoY527M73z72twUrGVPkUDg3AxWiNr7RGqni1H9vQTXKKF3tP4ssVuFU2mTkrBdgnWLiDefUmsnTaUQ",
  "key12": "4vJbKKcnnJho1oZAgxMM6akyCtXxBrjDRsuwAA84zfXt6gcVjgtJiibha4NQzj5yqofYgWLdiiHmJNqdb8fEhbqb",
  "key13": "66VF2e9nvRzbAwCi1xvtKs8gJfRNj4xnaqxLZ3NGkCVScf7f2i9YD4GxUoF6EsrXEN95TH7negtSLjRoX9auDZDE",
  "key14": "3gGYveHsXocvQ9xhPNNqfM9cgx7G7MF3WbodCWwmazggbGavaZR6B3QgQnwbhtW2zep4TWZCkcGV7AKPeJwj3o5h",
  "key15": "4HbvmpLLPrdRKQkFCbqLgaMaJykCFz6QXN4uXXbCj4YUHhACmg7oci5sVRH2V97b25h3V5EMU8tu92TSi3UxiKb3",
  "key16": "3SCsk6RFsDQFSyhVCqJd9Av1myvz1RdJjzsgG9KPLkN7iUkgZ6irsWHQh5EPLpRwjr8cQwSD7b7xnkzRwQBKFGTt",
  "key17": "4o9v2FAaxNhRibxPTNyM2ousoE6V8ZgFpYGKAju57AxYpAmXbG8w2fhvPZBGW5hBwPSR3L8ApN1wyMbQFB56XtDq",
  "key18": "3s6TMCAvNQJ2w2pJm5sSph8Mx3A5wGydweEAZzGAEHXfgL1tHPYe7SJ7LUPs5xHv7pDop3ntAF81Lc2c2uX7Q7My",
  "key19": "4p8xV3UPWvPDQTPxcHkeVSi1yHATLW4Kf8SWEs6cgoCJKjCCZbbtSrMYwdgsMJ8T2q1EgbPKAPM67qHgwBGf1S7B",
  "key20": "4XQbVxhudC3c16uJxgQ9XWkrbDV2Ab479Ese3u9uoQiktdYtZGuidADHLe5k9PJcUMzXq3rEsmTcAkUfgct9F75u",
  "key21": "45MsEwhFHSqAkU2kv2KuMDSATGhpyqd3rddp2PFh8ZfKHuc2xMtBbiFA2QwkTrq6iXYhaZ8crm353zhfAfHXSqq9",
  "key22": "4H5rFP47mS1j23Mn8BgmBj8LMXbzTfgHt3E6uxfaTH1d2ZishCQ9AnK42WKqQJDmEJMMhXd8nJ2sNTVJ1Qg7vwA",
  "key23": "3CZBwWc7EbiCXYZGQbRLoufJbZP3MW4qnxjdsHHcdNqebFpua43Xt4P3MpGxmJ2dsEFycW5KRduSR6z4SP7KJsHt",
  "key24": "2bZ6DqfVoHKaKMtMZ41tWUzzKMX2sJjFCChufSmP4NfoTH8wbrke3zsWbj4cmMpbmBVjGyifkMTsfVcou2MYLoZ3",
  "key25": "3YyJiSsDis5tfVLzXxUeK6RBpYxGBDyuxVj33sKD6EtkY92EFHvn2kUdXqyNDLbjsYpV4nGKBYqjTsC1RbYdhtfi",
  "key26": "3wC8eoVV6UJzGP6d64UeFnJUXkU5mxUfrBBGeDbj238tgd2bh47TD5j65dStA8vCTpoRm1Tg9QTRqsabQynBUCLA",
  "key27": "5gbTAJQ6a2tpEZ6RsL3W8sZQvxJdXdEeFgAiMQhRWTzUTJMeqA4y9XBQbnaxaoDSai5bFZJbVgP4Qaz3UhStnV5G",
  "key28": "2ZiXqKXEYNdDkKp6kySnMPUxD3Xo8ucRAjQKecrMMraKQgS4k9w1T14VWTUihws5FwnynfzMiBBjfAm33k4aEouF",
  "key29": "5y9gQoDjUxf6H1WiR7pW3ywJx2XnK7aejSE2TqJES4Yt3KKNeMa3TdmbZXkWaVzT7cWcWT4916VRK2vWBzKvjGrG",
  "key30": "2xBTbmSqTiW8kBevRhvUb4DTo3q19tiYNVUL2SfnHa1mQhMpy9FJHg8g7QtszASsPnFhJLavUueysdpeRZiEHnGd",
  "key31": "2FaSKitkjhUNzeNeDMnYmq3Wz5sc3FAGQXSwuzuNme5Bo617MRKPRyyATWP7Vj4WDrWHPgtiL8JH5Bb1Aeh3kN8w",
  "key32": "8dUw83qC76HYVDrb4Zs27TZCfE7PqRmucYn7KvBPg9st9VcGUG32CcusGuBjaJ5VxRHvKm2j4kkTL9ToZrUHAPZ",
  "key33": "3sCyNJoL81o9pPGfDDpnL5hjffdTQehZvo1U8CoCbWNen5uhjACh64fiFDXUBo2Ex2Un5e2YMBjTRug8Jnrk8YZq",
  "key34": "4g8VAhVS6VSJAxredSbyveQ6CsgrAszaw4MBERw9xTGGn2uFcHCWPnpcQXz8gtr5r66LeEbsZZxaCXLRm5SenkPk",
  "key35": "4MzzooJpVG3Fsiahk6HPbxwU1XfUwgW2raX5AAd1gs62zFkTzS9PwbxU5PudNAWrj336aL7eHqzBJjbVnNY7YQ8s",
  "key36": "37L9DZxVBQBzYLkyFY1DvQukxDgcYu5outj9c8DD5yj5b6QGshxRGLm8LW2WWHBTmFENAbtcfZw2t1JBBvhRudyP",
  "key37": "Ta6bZ3CiBb4w94QS5vy1MfDaaLjbGfziLNmNXAgMwePyR9BtjCzAsKzHBEgjqP8QQfRucqqb1Yw6oZoqofMQ6Jy",
  "key38": "3hecqfMsEDtDFT4hrFCdwx5XVHTWdqkEpNuhpRm4q75G7HT56zGECEa6wmcxUYg5NKaVteuiMUqiUaMhP1gUHJS",
  "key39": "3DgB8URKrmCvaZhQkQ4UDBsG5ovSNHmvNZnk9oEoNk7PnhcYoerPjCzxwH5fWEzb4pL49GFCkwj9KFp3LXW3e3Tv",
  "key40": "4NKVW5NCxrMfWTyNkX613kAeLUb2fo7zp4QCQjDoQ9YLegvqveZdrEGrZdMexXYQHpxW87enegXnzcSEEHt5SanT",
  "key41": "4oeeDxdxmffU3wwN8LLkCBtRjL7Dtd779SCanciVWEPhfdSGKnCW5beyHpMBwsFtoRhNrzGgE7mVAWPs2PV4Tcxh",
  "key42": "wtH33x94Rvb1MTRZYHWoY1zVXYhYXb3tNPsLk3N7UHz4n6bYbEpJRFgvv2xUqVLN2s2VC4WpMQiJBE8LQio4jEJ",
  "key43": "3AXBS7BuXaUX7ezaPocf54vKLagH3xBr7S84qQBr4dFcWhuYnAJZkr3Xntr6hgAFnvgHJAZD3WL3nfTETe2wQDBk",
  "key44": "66QKWSagRjRmbENXUFVb798Q8XyWGboL143G1UMvKNjCTy75DmDiyrLL8NUV5KmZiPtm7z31BDpjAJqJJi5GufAU",
  "key45": "RRLD1wh9mrfkBP8PFXMyUSCiLwvoxDjc7e4duuhoXJfD1zANx2mezsxk2hj8DV5RWsA24Cngu7qwkyHzdyWxg8C",
  "key46": "3bpHpDzYE5vGnD8KaHHe3N5BMdLBBQmFzH1EgvWGHbmWHyStpSLYmFx5WEe2wahdDmrTrJ7LKWSMBhxzorYsPbF3"
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
