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
    "pJSwhPWasmaMyNX2p3HSY3PUKbyzt7rSJuGbnrSkEin7GbAgXnGxErgyfCLm4GGENtT1PC7aMPkXV8QbphLL8kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LPdGBAVtCjRhs86HrStaU9aWdYDheee68oSdQceZFBBr7cwcKNEjtC6xgZesnsZ2aoveNPEMbA2QD2r2tHtKT5U",
  "key1": "nwBt42TyYge4yHT5E1eAt2tXCUDtdedm9fd7HSAigQBpW81rFWpdsmMCEdFwS7C85q6h9NSkDYJqMtLHad9VxMh",
  "key2": "2RR936BrEUTTvQ86MVP1Cb5oqNnN1st9Ej7i5pJkyv6sSxZeioa6BeqvWtzoCexnTPF9WkwTw6DRU5VyLUFYMqMv",
  "key3": "5CKF5ci62CZpRRqV7JCNJU3MCjUaWkCBGMYbYUP1VspHxr7UzmCNTtoTsPsTkuXfCE3LKVVcHxKPC8qZ4fJ463mC",
  "key4": "4Naaw9shhB7T78ww48P6vyvWUn1jzKNh2W529NrpX2MGRdorrKaX6f3UpHx7VKfLNHLrFRPyfrfZZehkLGvnjosW",
  "key5": "43PFePekcXqWCXF1X2buqKkFJAHj6nMgprAcuP1GvrBHgHScjfSjPe185idEnJnTWUrhARn7v3zcSjRmgrKZCcRf",
  "key6": "5jk9kaQajcg1fWDsYuRSUCd2eakPbWgtwvAHksqzLicSEPyBumnt3N1kVixtr6tsp2bf8tcMXefbjLSjcWq5ZC8M",
  "key7": "3K76pQ1UNKAZcKShVR32LSgs8sEA3XNDopVUQBAWuHafdspVuNoeVz3eEMxaDN6XVbQJaopsj4huvRBbMrUdasae",
  "key8": "4TqvudxBdTZk71USY8EuAGQT9wSotg1WngZSGXSM3FLqAjCAqJPc7qeGH5Jf8BHADpNhvZgdzGckuWhFMPeKmtvz",
  "key9": "ucEErjukRHRm5PaDWd94tRZjC25w4B3FpBTUDUpCYM4gdo3Hf32v9q44vTTeShVsUcMSb8an2QAKjqbW4mWayzP",
  "key10": "5T1p6iy8shuonpwGhqow34r4H3BYwZJTCgx821eBufc58PFkBBLSfyLto65qhgiRAgUebJ3sHTvssHe1GuZQYJNh",
  "key11": "21E83oUfDMgpkWUmuWZaMYwCruYx8BHjNxivdhoPMCGxGEonkyKRSQbmKF7VXbsZmZWFPm7YwkLmJAv2dukmVvSe",
  "key12": "9p92Zxd21XxUNW3cRX5cw5VBJ85DRPb1RfRKbSj5EJkt8Chb32qohEFc5UtQhNzAraXSQdx3f8evgg7FgFJdszC",
  "key13": "37kMBv7maHx5i7qkWaSJxCZLs4b1hRhgLR73qEhwiD7QmfSD5QyBJzgJPDP4MFuTVFNhMEorGmAPWkfjQubjLzDY",
  "key14": "K31CpDJLrQaaGm7TNhp1BtrU3NY68cGYLbQVD3vXiHc6JVF1goDmLtXvZh5KKRqzwor4jECCKMQvHf3EK4mRiAM",
  "key15": "5qWc9684vodwjcHeq98SXnbEGcmpakZyuizF34ZfmQMraLP9oVFQJ5YCiqYnXqozWSFVUMAbfceHhYgrhYUzRRzS",
  "key16": "4rV9161xeuwx8aVCRPgFdhhBVv6iEsGXxhNaXNzvS2Pmseo4GWnGAV8hak9E3MJcuuqyntg9LHbfsdyoz3M2tiWV",
  "key17": "5YCc7F2oJbmSa2Mhbg8sFopwVCBMgzkocMKQCtGMKPCsoXZ9PVs6yYD3WhpvX33kPAV6aA35tktrdkbrBmCwhkPG",
  "key18": "49uezfg2Xfh1BjXTtsQ1awbmfzD2wKe24XR8zYbUVFTqYkNR2ALuNXkS6p8uQG7KsL3t2xa3kxsHDiBG6Xn5392j",
  "key19": "2k5pAvjxLgKsX36eiKBeZEbPnY1y8SqSQtPsow1qcNrpje9YqXgtjy8o7EUoLLdhZ51YAooPqaAU7u254NbUeTPi",
  "key20": "2Fb2efS2kwWUn1NNAyjPSVjjd3zAoTmShTxv1mUgq8p9Aa97KY1JUsQjWcMkGyCJehg6HF2w9AcuJMsD8EnpqppW",
  "key21": "3dHrz8hzTM1SYPKBUya81nVJZpVDcAfHcfC8qBhEVKdTd8YvP24cYsFtsW3urUrzkDDVTSHV5Xru8JqV7ynuSkyV",
  "key22": "4PjtrXWWpT8bvNvQxi3giocFyVmbAGFcw2CRqi6LsgCAt9J9D2szTo43i2CLkGvpNPNAA39q7vqqt2WcPepr65Y3",
  "key23": "2AKqNQqbfuobPFBUt2Y5QyHA7i2ASqHitZ5hBs88iyBoii8qVhiGu4F92fDbvzezqjh9i7Z9a8iprwd4Rg2XC9pB",
  "key24": "5vfg1PU2wbBUn6M8dVmp5ejd6BZmnihoJgDPdwQhi2V8AUvkg9WUspQswawjBK1xz6cHFaBHT5fYGa4W3YPxG6rD",
  "key25": "62sK7b22B1eMz1fKUokaoDAgqqRDxywDi4Ro7R6uzmeRbWwaY9G49kq8GXFP3q7RyS1xKA6BhHUpHw2ATW3hgiLw",
  "key26": "5aMbKoAjZ9tNjBdJXz9A1QXJpu5LVWfK7cGy6WZ6bBbBk2Qt35phE7iASTGWDJFxQfQPucx2Z97k134K84kdyebW",
  "key27": "oabMdT3eP3pf4Gpx9rq88i1qa9dD23oUZBswt6aDLK2BxVjGyzSLviNo3n5wJuKdDvjkVZh5devhmbxrJBqwQzU",
  "key28": "5k7xqJC4o37sdaDYYhvGS35sDMejr5Nrsz5QGeGFW8hhXL3oPPxMy7LqeuJ9MMkFgux2CuMV46MNwudJj366k8hh",
  "key29": "LKUyGoDtHbRMsSz99fbD21nDTBvxQCvnjdcgfzF3LJAEurShtNvZvnmppMFKVspBDuh32tVLFqKozSQQbY5iaWQ",
  "key30": "2QpcZLPXw8dtFgXySvnyRrqYzXTx9oKHDk8MWyGEUQhtNoU51daA6pUxVt7ncVgmnj6AFsoZDQC3ZDBHLPhJGwPu",
  "key31": "zHLWwYtYPzCZ8L4qGd84oGPtia6nxBvpG8Akmt79j3ooNbqPYmPkmnfp9CRe3PLkPXYjPYh75Qy7EorVGjiupmc",
  "key32": "49dqKew2rJ7esnaCWC7ag1rLhYYF1vnKJymxeNuMqabV2mLJCH7yTdsczMpfvPFm1ppYU5Un9pimKWykZRh1ia5E",
  "key33": "64iip18WPNg3LFs3iyJ6DuTFwjSvaq5BkeEFy15dJBS6PeSsGsrpn5Em66rnZ16wVdonxi8B9bxsQ7gKmqLJjjLm",
  "key34": "5NxXypKCiAMr3AqHH93daVUUG3nPCfQnZN2Nyu3fx7YWKfFEFVLHrxBNGgNf4qXfDJSS5uPpErt8UtkmJdryLruC",
  "key35": "k45otSeCvAsgqxANo7ErXDBo5teYitdzKXDEEh2723nQQay31BUJtVQzjffhjQnfmyPFpfPWDQk7siHXJCYZohZ",
  "key36": "4KMA31BBg4UGhTMpcaYBuyzHudkMHoVeZgU34hKX1qLRS9tbLcPsnLmTGhp9Zqv6GrAu2UcJyNuoDV3T6XM6VSdC",
  "key37": "5fEXJ4KVC6eMPkn4Pd6WQSfF9zkgNVGYfTkshGGUzBxjtnNfK6trn8auvBbMAgXcGswadargqW8PhnHTRR9eTmtM",
  "key38": "4vofD2XNoRKJqcv1fRkhA3pEXb5WMNcoAA1C4dNWffhr9MW7iMYQdziefiBmHMVL771DbMgPw4tagazxaE5siSnT",
  "key39": "WS3GTEYhLjoXJdDJXft9ngAZfCQQk9LyaUpwgxDsUnPKtZeyMnxmAbP7cfthUVcaWNvqV3rHN627SZBBQgatnRp",
  "key40": "5Ln5Mtx8gnzY5nT7PdsLvtoZFdALUgCxnQyWtPtQJGqTXbKbCiNHrRZMsV5tyrUZz95ScrMAG9iQciPcoLNMCdRP",
  "key41": "X6XppojgBCiyNhVSVk4yzK7r7PvvFK7LnMka25KC51ax2kinJ6T7g9jP283Sve3CN4rSxhKmUaiaDp76MpSwS8H",
  "key42": "3zrEdPK9qs8F6TFZUnvKJ1AMruSPtmye3oJLrtLnBQm54wiMJthtGppnhvt6Bg5xz71M1fEHUwtYsvB8G4GA92sx",
  "key43": "5514sSvNvVWjcdNuj7B4ZDQYd6LoNYXDoD5QV3yA2RknrVwQUa226SBsQ4D2qVC8stbE7kCw8ohA2xFpwVDo5LzD",
  "key44": "3FdG4hkPpBooYRd8PgSvQwJUuUPfEcTV7CqcrKKganKBetvfhqU2umarJKcE3zPUcdEgegX9GU2fuAK3987qvFvp",
  "key45": "4bF3hFcidzSbTfzBBkL3uC9Fic7mhiqknv63mroLBpqa9T8vgP4hjRZb2JVqG2MZWL1EkHWQyFmmEiqccZdUNXw8",
  "key46": "3Aq5i3LbyQSd8iGGLX1gUH9DTwdppBS3VYoxWF1PwjivyqnWJS5iZ3wrdeZPDa9mTwh4hKsrZqdzw9448dCfWSyz",
  "key47": "4Jj5NpEUVpzY4KmNNZpoqSW7s4S8BF83GH374yjAXcUPXy7KJvomfEdeDcn7tzVhfsYPPM4PuVNpSxA4nnL5RN4e",
  "key48": "3wdfjWhj8969oM8fMjjwyyWBq9Tsq9vPRgxFwz6wDc9ZRmc2YDHLFVBm21dDPJJeFWWp9cK3pnd6gGkDBXtiA5R7"
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
