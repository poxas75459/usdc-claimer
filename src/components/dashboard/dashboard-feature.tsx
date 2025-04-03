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
    "4S4CQGGqbCKCeEdFST9i7t5G784kJRxA143mdBCNVJsYdJqJ8NepHhKoH7JYitp5bnj93oc4bx63kXEUBzLB69Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jca3ipe8Gz7kE62Wo3DMNFW5AU6wjUtY1bWz343zxJxehCzD4FGjgZB92tXKps7SzG94PA6xwyf7YHiCbb5J9nL",
  "key1": "1Tsv8jboWErUF55WGfwzwHX9iLhXV9se9GkDxhUTojAY6pvdSHTsFMYGaNKohHUbBLs9D7Y5hyxrhAJixVstDv1",
  "key2": "43jPVFcWS1HzuPjSu5QwYqQQy4NNruN7THDYH5r4iDWtnEuMMkAeHgnaNhx8xTf541jGRWhHQF4WLFsXVfa3TXbs",
  "key3": "366xB4SgYKmiBMMYSqKZHf96a1VLKuV5nVjNhjqB5enwAzFZ2EPjKNQzFngRrk5dLZCopbG4fibBizAdxutd8gYf",
  "key4": "2ZMdg8DePaDAyjALzpiz6vxu6YUAgfKZSwabRH8VqANE5L3wzsm4tDDWZjtBrvwMSYApKCbprV41geAJDxtEYqUJ",
  "key5": "3x7ko9aXuwzWUWgepLrVEdXY7Fp5VbD3YVXh8bNyPzEZhf8gLTRS9FLcvLrFuBmjdxTWWuEVrn4xePXpmR2HDCsA",
  "key6": "36Jfa2veLjyBYAsaExK3HpsK9tEPai9nQtNHK3LvR2ySFbCiSTtXqfC8WjApJDTbksWhF34D38v6ZphhWxrjfMYq",
  "key7": "2EAiEGA498JhkmjsatU5jUb1aNEEt4Zn39hvxa3jcajdqk3v5Pz4HpLJBQTZkcAw7UGDrGfygBzT6vCBsb5f6kAs",
  "key8": "brqctU1eGy1QqTv4zBQyBpYWC1nqPyxbtiwguR6z4BkKA8wP3nz4PEfbi9VUAXYD9F86ujcRvoRASXaYwZzEapZ",
  "key9": "3iFoGPNSRx8q9xobJ94gUJ6z5SZKz5g2Be2YtmWCfEp4TKpe9MQmaAQWADTzzCWKZ9yWphrJFhLBRoL4DASfrtBs",
  "key10": "T1d2iZF4ctAvKJNzJsSzhdwKghNEfMgVrVeAzC4DiaJkb3ncedCXUEr34Ux5JdFG3agAVSvAxERD4oTrn6asVrF",
  "key11": "3qDiTwwoPe4qxfA3NgMPGzvv8dYbQLatf6kXfYvQ2ALmBvTN8ZPPgm5PDde4n7JkGV3Gp2Z6mu8qPLv2etUfj3Wv",
  "key12": "3jVtTJbx9gh7cCcLShH5YdVtark9VD5af7x6RtqZ7zmxJmUFnQJqrj28mpadergKH9mPtHBanxAeFheNR2G5rdqX",
  "key13": "5ZyiW6FykxdcnKLa2wt9cU3U6SeqBSc5yzq4TE8ae9jJMPW3JfEW2woPb4DmrHgQYTEHATRQvDTo46LVUbfLGR3s",
  "key14": "5E757J8MW42qtwtsSMW2D96GNaoY55MYzbp73NrfNab4kDBG2etUFt6ANTuhW1nk6pUjMNvbCFxoTTmm47jLMbUq",
  "key15": "65gGvR7LhuD1J8sTPrLgVkLgVm8FymbTYoKgAo8xKjeK88RBbC4ivJT2PJ7RFvAvzgffixCQEK5F9PcB5K7KR5RQ",
  "key16": "2MFQpD5A1pp7QQ1hGpiQuhofV331LGNE6bcfJpPAy2it2XQNLHjbcNGuLndQSY8WNZtdXYPC6dci9F5oQEYxfiAE",
  "key17": "5qAUiarhaazGWxhfjV8P6kT7awVXJFzpo41swTfjthEVfvUj2UbRPFwwoZQ55us6FDTh4AyDrWKzPSGqPExFZEZJ",
  "key18": "YKmzhXu7AvSvs2hXin9GnFfAxd8mhKYJtTK1o5Ki3vixREV945H91GryXHcSfG34QGuZ5PNGKAUEXSGeKKXF4nG",
  "key19": "4PzBqDgZorZFxn7c3QhZAoeyu4ijgfNg9NyWYmdLN9Gv6ExGhiyQxEwDtSjFBPLvi6w6j8CXvy2dquwt5UyHsygC",
  "key20": "4gH9hHfFXHSVAWApf9EeDnobKzSH7QfdkRFJ95L28tXgh1qRTCZd6R7dKAoFz3RNofBwm5diS7QjZQE7if7eujyn",
  "key21": "574BK4RwZjeLgcWrcRJuPVeeKjFSHVg5uAu7Q9JETpHDYfg4QXfW51c2w1x4NbiPSMXYxDFNcLg5TMvc2ERw58bD",
  "key22": "jfak9sqnZo1BCN4Q1eZWNpDrt7mQmyuXZ9UEYEaC2JnvVLtJRg68pABRMcCwg5gdGfA6LZi4tq4K7xdyMMKi9oa",
  "key23": "2HLk3mjbea82AVYuB5aevpwCmYz4RQEpX8oRnkGsP35j7R8AVimGKxDpfRLroJQpdHWA5LuqqL5dMEncYgPhUqn9",
  "key24": "2f94LGkBU8MQsHYPXQYbTciviCUvxzeatdKoWrSvQQZAJeDPa4SeDXpfCtNibfy5fvckGwV18FAxLRHu1129sose",
  "key25": "2WcdBUTL73W47mrKhhv2omFbhfG81Xk1thyeYQVkTwQZKjNn4GUvmuCj1DJyyz3xfNvacootxPeDYp3813mgSV3V",
  "key26": "4eTF4miKRcs7VcyNmoWbMTMkV3pWdnskQQe2GRUp7A1PBB2DPqCSnHJkJG8oFM3yybscNaLvrzkufzLtgL7GrNcP",
  "key27": "66LSc4nWRCMBpSvweumUiQH26VAHVwnQQuWKiEvXrw2hmax9YgDD74qKz3yBcsaCEmJVeKrUJfUxFseA6msTqeEu",
  "key28": "37yFevkpxhVo3zKw6WpnK8Az6nGMiCA9YaeECFemGAbjBdz4T3iYeyfNsnphAHScQBfokqq2BbWTjuVnPHhFr5vT",
  "key29": "2XLCYqjKTdLz237cnjvQckq3Homc5FGKmayteqX2yUgN8VP4MGak85jQbMLmcGoSXKdrzujFn6YBMQcoTAC2ZHdM",
  "key30": "5R4DMNz8ax2f789snDn2Nq33HtZGKgmdCX5HX5jhxM9LY7h7SHEZEF81ce6EVsWMAT6N7LQcc6aASf1eJ5dBzQXs",
  "key31": "YCB1PjdW7T6zX7UGkzF5UF2v2RbtGSkguRHJWndgMiJ3yRSLXQpjuyydycqhjiv5YcfHKxDsFBAWLaQcwdgYbHH",
  "key32": "631fTD3rcaYd5WebtQdSBLfG2rCAeQY2DDFP5dCDerNFcqcWiTQGdLWDomcmoTp9n64m8eTSw7hFhyskVLio9tPU",
  "key33": "2E8w2RWEruL9wbpt4wiuf3istwMP4RyeeDkDr6S1q9F4ieW5AHPB73mpS7rBr4gLtTu79bADezGNmmGj7NLbLNEv",
  "key34": "3hzBKxCyLkFpMcqxxSV4ALv5oVVmamdPNmWg4QaPNF3mrYdHALFCTpEWJuZFMfHHxnVav1MtSCKEDf5dA17koTiE",
  "key35": "4jHGkVQSWtNE7naRWvwZCeUuE3ZvVtBizMnLBXgZqFT9KHHMYFUTDJwohexCA2KsaHLGr7aKqA86bfpJ5yKgxLxG",
  "key36": "5rs4zbpA8TZb1v7NVvseu8MKE4ZmM9iRHiTaxF1EGLcAZoUUPcvKdm5tqBfdYaTGLW7wYQwf9yrkVxTRdH5CiHsn",
  "key37": "LBW6UiAhoLCbJPPtfewH9fFsjWHEVAoSSMKwhfoXYAkU62pFvcvsDwb9VssSedJgcfhU7AX16AXhZbez5MsBWV2",
  "key38": "4hg7p9jQSxahKvZHRqkfFd77i2ezvosmsGUF2QVoPg2crsyEtiS7rq96BPB5Ed1JXamL23A44sVTbqcScfL3ppzD",
  "key39": "518XqGmUfxXAuFNjDa84o8TH6JqBVg6kdvQgSPNXNkQhwdfuH7q3ZhAkkSHux6J83CQmeih3UtcENC2yVBDm2cz9",
  "key40": "379DCH9tfRyU7kxsVR7ZeFubHUWDQE1amTPxJrU1ZJL7xQmbM42uV2FPpcLP9c7Q2KFhpb913XtfJFx7ThZM6GSZ"
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
