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
    "2J38SrKDcFe4aCJhEh4isEypSM6NM72GbbyZoAV1R6oZPok8V43GnQcKCxmUPmjFqjCJv9bUeqpwWD9qg3n3bLNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KgTe4MNA1u9ZARWzK73JsYuZ7BmuAbEmxgLz2yacxjhZXTs3whgS3TT1oqRHHcbjr57VTWiF9XTrEvkj7PaiM1v",
  "key1": "3uK5C91L8bYcRQMZtAGJBkWy41VaFDHPHf2g1e1ZpGqa6DLvc6MvJmYUBUUqKjZ7AxxzLbnE5Fb7gsfAjK1RmNHf",
  "key2": "3v2shNUkeBqAPWk1tRqwCshGAundUZfw1Ab9bF9oYAAagS65WTdHLajZA6f2Rz2XSRJNhz66wq7xgVHueRrNRL7t",
  "key3": "3LLd6LhdAcv1u1EPx55JeUEQ3AvwPiFC1ui97xowV89qoG6pj5vUztXYnFske32Pi5jcECe95jL8bvtuHCDNMkmB",
  "key4": "4zZHEqvVhhVEuFjKPwRukXucqr8VWeTk4XxbsdGZGfuCyBwqc6yLXZBSfRe3zv79wrKaogzNZPj5etW4bGNBTG6E",
  "key5": "5GAo3o4wZ6FFZ1nPRNng5o4vLKuvgKbny28R1HQeqDYyU5n4cUzUMggFY4FVYwqu2aVyzJADtULCScKL6U4dVkSP",
  "key6": "K3Fduarrp2ixcBmLxSovcdZsJS3NFcxBY92tuEmGmsbe15g5wkb2uzeJ8Z37aEio7ce5HKjkhGbVYoNkNFVBGNV",
  "key7": "b5D4CNunTCFFUveDyK2u4tqD3MUA5hHtdC5XEbWrSGXZ87LUcWcHcYcJEvbtYKrJBM1qYaMU4eCNvmnVTZqp6Ay",
  "key8": "2hTNSMyhVkHAgXiGuRqAZYKRoUobgeHSVNbogF3ryw98ENrGFqX56Hvxac44xYyGKVmt24dzhYZF7u5ynhkjTwJ3",
  "key9": "N12QuY7SpPgiqebBSvrYuLnktLH35vZDQPooDM9NCFN6zJ8yYw7wr5biZYZNzrR36Abk2fXpBgPTtTHCdFvFsSN",
  "key10": "35XRywfFrg34owMwtLEwVx6MKAEdadBKdR8yRpms3a33N18DiGgzJrhYSxSR6Tkbi6Ajfb4iiJSxRK23BL35Exgh",
  "key11": "3dDMELN5FYCGC5MtjUbYu268kr2LuvYkSKvLcKdswSehwbpk1gpkq2CpKsCq4d5fdSggrsRpYWtajMRtmSuwWezx",
  "key12": "5HDjXofPwGZHWprpBBpVTCLYGUFFdAaMEGbwizzre7HAMG7utDAStNQRbVdNGrcLzohTftj29FgAVSjqVcpWGoyv",
  "key13": "4ZiujkLjsqRCaRPAYtJ7GxCGhNmzrxiTF4QnRVBEi5gVd6rw55DRf9SoTizzHAFXU7FAfpF74qxkvB72qw1YJkpH",
  "key14": "qyGVvY6Ngzfz7dg7SBkFxee58dYmWo4GQMh47KLqW6YgrmcztD32W16KZwiynC6uveGbSzqTf1S2CpkhBCHexRF",
  "key15": "2KqYumf9u6AcMnTomoy7hAyVjPeVxvSmk6qfb6BQNu3FSCTyFWqeymxmrHWMqpfewZy13J2wf7vEnKfRLeWF2Tbi",
  "key16": "2LxNfGRzgrHZkbVhAXfoQdnL66BK8JbEgDNR9j4BAqk4B9SaLHH6qXbeanikJBWrKArqJYy26WjkdkwGRWSgTpJF",
  "key17": "5FTvudcCQjbpfvowPQhTbCMKW29GXDHiRKnoAvYmGFrqpzV2MyeccJ75kLVBSFnEyCyqPhXUC29mQrtEznd8oRq2",
  "key18": "5nXAhdSkAV7e9HMbxGFCNW6hZVKi9zC1NjD67ZpNqBzAmkva9CaUG1LeEvrHFMhTDgMDNpCJUw1esSD4G3dFhXBf",
  "key19": "2tXUkyuCWBojqsoETjHCPbU5ba4gZDzrg2vEvwFqh7YRcbfPQBAccr4PdnnJFktu2nJXQEtFFsyexnHzUFQcU2XY",
  "key20": "4Z2WsbFosfL1Xg4BuqdYA8a9w8HBhhB8rCXexqp3mAdmGeDR9zBD2kHRs4M8PjNTm1tfXduPhGz5TPdX7cPbaGS6",
  "key21": "bkze7C7vAesrm7JWcx9iB9LibZSfFF6RijFweDvvLbkcSvPKZoBFdPGpML7r1aUP6Lq6GDXRGCDUbeaXFXNW8Pq",
  "key22": "5eBensm4Y9hfgEkkymjBP6m29nFDAtSLUYPYB54pffDc3r4pZ4gopwxYncmGHJkR1wQmjLdoZT14k4ooGM7Krj9d",
  "key23": "MHpGXNzRPYXQqVQpyqvH7WMZPkQeggaB1bzBiwf2qGCR8Jfm5eHcLjZ8oG2RCukup9eSo67cEiJY9CtntfFtys3",
  "key24": "2tN1g7V2KkwocKf7DNKo1Uwig1tnW7k8ynK4LSQmzGppKuKquax5VGNe7tC1oHjZR7TSoCmDGXfBTMxCSscYt2fD",
  "key25": "5oMTRNXbS54pYKEqHpqoEPM6m6R3GdiDQZStpCq7ja98cyR8u126e9rL6nDwUSEaEg36mYLci5vvrx8uxZ6zi9uU",
  "key26": "2QEBRKN3axj1v8Pgk5xxLUFQMkqsFWanfzwhpKqTfJaWSmpWNWQHPfE4bUFDSa1T5koazB3rufL4xVH27CivHKCa",
  "key27": "4uGw1YoXL2qFPutLvHVPCQfwmtLqA4Km2JksKQGgKZYVhXGMLcpSxaeFZac9SUkc25wMfHkKARKNSaBfb739WbjD",
  "key28": "5bkLva3aNoDxSYhgLEkt3BWTm813inqCkaVevDV1f15bXd8C2kCd3LN1Jxi6bposhd6jyvR3oSQb4bm4wjrZpbtf",
  "key29": "aXoi7Tj6eiXhUpHWoHU7H8F4R4vNFD3D8LyQUjg2Yg8Qk1RhsJGSqU4uxHLoffEKuos5irsvGQ2L5PDx5nZCwiN",
  "key30": "63Jjv7bt4EwQNtt7FF1tXAfk4z9pJ5K2gpGqDEa59vBJe5hqYZ93gTSqUU8hXQWu77ath8svwHxYfXZ7tqooWLmJ",
  "key31": "25g6NAbhv6uuN4jtxaxgiGWsPADr5gN4vNy2H4eZjd2wEoDrA4NgKZAeu8WV9CN61hYR6Y2tHZj6vDYwov42kKsw",
  "key32": "3qLDrWtqi3gPHWJ3aK2zpEoDtHqBGHBhdA45HoEwYHtM8EMcTK5KYh3ZGbuDfd1VgnTbauFRXD3J4vRVhgJKatdx",
  "key33": "dV2sJsz3H6FFZqMYi6pYGuX4z68bTW5qghCj1t7D1WbbxwqaURZEzmHotoSMwnAnnMUtkie4RCs6wwkXkwN957c",
  "key34": "2HY2JY2yW8Sj6bkx6npW9p8v1yEhy49L9wj7AhmHtS3GfaYPMHt2b1er23wiK45FrzDbXAJc9TbNfSP3kK2o3bkU",
  "key35": "4PD1HsRP3D3Bmo5dp3FjZUekzQT5WaBf7ZHiFTTw9Cc8siG4P4Ab8rmVUWGiMgJArsr42UmYNLWWPRHeLNAf3UX2",
  "key36": "3J3Fa7vTyPthGo5hqGBLnAxPjC1wYsrRcpVow8yFhtJd72W3AEXB36CKBJZ4qhUnQmnjEiCLjbb3vuFb1CLkcVSR",
  "key37": "4FGcs1G9KsoDQeyoVJM8vZRnDWVBKMzGbNXBNuGpc9dWkNdGVjdfTkEfPCos52ee5MBWQDxGDL4KhMHj6C82zWDH",
  "key38": "5iBToks8L6s6b5nQGbAgRQEhCF5gDBZnHRnxZwKHbJQyBa558woWfNEstZBZmTe5dmGpLRpu2uzezr41HicP1Vtf",
  "key39": "2waFp7HXM3TJqYybvgpW133BMwYNvtMfAspRQQRTPuRgJzUiFCNmETAKDSvvgisy9wm7JcViKwB2qtNwfAvhxiXd",
  "key40": "9qDTd46T1NmrhC1Sa67yKWZw8mLG3NNQ6uZK2479ffW32Lfv7d6f1FtsZXCHhHXUzdxpTmJ5qcudmboQ4Gc6UyR",
  "key41": "3tZK6VAHioeh2a9pK22P3aX7EfkmzThDZBrxpjoqxuBUk2XZv5XFXJBzMrLVBRQNY6F7a9NLv3XBCXzDmUAT2B86",
  "key42": "3wNhsB2dud1UzScxcSNAhnmCsT7M9kKUw7XTkzcuaj7LcgjKPE5C7oRn6MMh653oTQHiVdH28uKb7mWPdkBsMqa7",
  "key43": "37YPVQvfQyghPeQKuU29RzfbUcbQq78kdgpgHuc2dk2SKny2tEeKEGE8JvdZC5CeSt687WhpcGCAny1K9B6V5TCy"
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
