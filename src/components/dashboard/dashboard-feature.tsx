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
    "5DHq8CVHcTwg3LNJiYp69i7u9R7gNqWzt1ZH9bzwmUDm9GkiZi3oc4suerjhdKg7vLCYF5qeVCnjZy7Yuot4onvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zA6FnQv7A75cii7sXxfPwreWQchb5pwSqmZxyXh2PZThBs3GYvLkwXyVymy9MDpYp18if4SGiCCFhbdsZCW4qfL",
  "key1": "4os4ajZnPDDwnGz1p4c8o2akWfd2KSwQKEh7WdpaDZo16oQKbCREpiNG2MGgWudnVqupb7UAw5phHRsqR9F545Tx",
  "key2": "sKNo5bhypV8vQP4KaGtepLtCDdNN7Et1xKVdtMhmjLXau2Tzcw4pdCrrLjJUEprqSpMPXD9fsjGH4HrV8uzgwoF",
  "key3": "2XxE7y61VEMQYwLE68AZ3a78bRvDzjG3YSCEqKqBZ8dLWMpxEdAVB7L6e9UY2U4hvrLzNBsFCX3DvCruABNbY816",
  "key4": "2NsPSE4HcaGCzhg1tiBx4Ecz5JiYw2Vx1wxWeKRPKyeEYQUZiTcxXvL7z6qnVNhiVZtUaKpworE7cgBvJ7mdozzu",
  "key5": "2sts694LVBvppe5pNkvzFojNQSe8xUzmjiSsbyS2SiCCQ6T4wux9Hojqb7gn67BFEFCR6w829nQYc5K27294ttYn",
  "key6": "21eCWFzZDdDdJEoNGdWCC3HRcwephTUhRfV6w7JApiYcm2UDtvgk7YdFQVZgBCx9bzEps4FFUajnWPzb3dwdaQmE",
  "key7": "5SasgprqHataoR6gUnEnGwPjMqrkwXgWFsLxQetSWJ6fsy15vwD7gE6Wk9jF5V61iG5vDbNW4mEuFwyUAxcw8yJK",
  "key8": "njU6QrhCe6gh4NRniha7VGE1UxjAaPiMb3SHnJxQdoHYRDidyFdmFXvv1bUBqF3HjFtdG9aEksMe4KgP6BkguyR",
  "key9": "5WjYEMXEWNPs7RqUfaug6sjngsrKDgtJrYPsjjARSSAbRZPeZcVsmNjRpMFa5uanPtE8PZrLmeETWqNqfuJDUYrT",
  "key10": "3Ct18JXDfn4oLMJD6Q8YhJsttRzTLMcUeJ38mFqrHYSDEVKFuLPV9q85wQWp944AWsx7fu2GonVdvGCeJ2Wodw5h",
  "key11": "33oPYdfD1fQuJqaXPZbjyo21bDjZpMARS1gcmQJtJAKHguBont22UeJsy31FZgCbfE9EXfJfnxBhQ4SxCnVTkHmn",
  "key12": "5doGEyUFVvgMkpZJ8bnrSiXoY9syHKK1uwwXFzvB81xPuVqoGAPoGKUqdebkPUucwhncfxyZ7CegTDEvFWTBEPLo",
  "key13": "4if4c2U3PDVQQ1GrGMBcMz4KXLfdWuBkG6vwdzat4kVwqe1kcePP9zKAUPWC4rz9T9jR7rp3k91DuudFxEmti1gp",
  "key14": "4dcAKRHXeKDitHVSqfHdEuhg9MVcULKr6Peh6zHGUpPXfinm8dkE8cRZJYYhJDPv9EZxBHNiPCJZqXe69XXvTAEj",
  "key15": "2Kqm2aKYRAzL5mjCHaLxmnqtPXukWDwRRAzZRNn6V4MCNNAj7DK9sTYzibyGB7sJd95PMgzDSaHDsks1aHmWBKPh",
  "key16": "2fE7ijbT1vcTuAzrDwqNTRpHEwkCjJDYetE4qfpRsbKGQuGCyVhdiGdBYFdQaW4DTa7ieacBxmrPSAS5Ur5ZM2P5",
  "key17": "4TysiBDzVSdweX9siBmKCxbvdHYiQMD8JRPSUza1zhSdqR2PFurFoTeaoC9fbuFRjPbSMJ3VpCCd7JfDxGGaL6GT",
  "key18": "4cGCU4ag1t2rrNy4YGTcedBGGGvviAyKi8wocAgi3kSUNp2wvTA8ut7Qt1HHrN8DMinHxT3MgV7ZXcreivtAjnhv",
  "key19": "2vzVU9zDYnuBW75w51tyADSfC2YxtJTHTamo5Gs92cqcZuET7L5Te3rg9gXQqith2KzHhDhDaVgsYacq6c99JNbK",
  "key20": "3Eo4Jw36LCVo6PGxsC9AeRJ43BEESNTsHLg9uog2MmYfs968q8cRzhKWxoVBfhURn1ZrAjULqFGntetgVvvPdVSw",
  "key21": "jfjNRi74bcVLv2RFfUu6FSL2ufU7fXN6oPgyN4hvLChCGzx2nSCtx2TVHP38ybmRYwC6XGEoPRmag4M5141zr3C",
  "key22": "5vQCNBWZuXSkanZYWKqY6vXHGbd6r5WRPtEM9fUdnvJYt6a36zAc2GxEt4fabdJhCtbRikQxTWs3zQKwu5XAfCVi",
  "key23": "3zF4sTWypkD6xGsqGCPJiHHiLR865TCYsoBaeD9M5GYxRxBQ9Y3d98XA9Rmnzwx9ksRy1JvFFWCLHDsx4abDE2TB",
  "key24": "2CbACpkaidKRYQaw5VaUiEwHdfAYuNGFzZonGLPwUKCJdXADzV2mgjFkwmwhNL2U8z3catCS6FcnXhYeS9aY6J1a",
  "key25": "66WjVvKoNtNa8iPtnn1DLhBxkmRhhMDvZBrbne7hBAxs3hZNTm2RWpNKYqURU5QmKpTfQ8pJtr5dndbJSMnvQWWx",
  "key26": "ykyz15gPcd4uQkw76ibc7ybwefeiVJB1Km5AAkYdySAqjb3daNRR3CtjNYvRU3LPArQhYeD1P1qrD2bdJcWHNzt",
  "key27": "578EsY4oM8ykVKyEZpmeeHCD5HGqq9Q4Knb6FbRj9GKfhwrK9W8DCXriqTcyncJ7YPr8CJks23aKMXj9j4F52tkD",
  "key28": "4sJap1dTrQHty4owovmEejoFbCXVbUxp5sccsPf1qrdmGKvTVXg8QkaWgn6ExyDdQuFdr8Sgsp3po1JN8bjXEMMn",
  "key29": "2Q7WMvERRAojngiVFURno2HKeUhBDcGTHrr4QTYYpLNDMPGWnA7ju7g8nJkZbsQieP8Q2bXr3gfPcDG35zCQvNcN",
  "key30": "2q6zF2tCof9NYfsnXLcd6PwL9gAxPqNJc5NdhXMDebr8v5Z8py2WZAzKsyFQpHCrvbpAZMKw7EysftPYGZFQSmwA",
  "key31": "26B8zCS4JWwBnPeRtCQQ3xMrEYRrLNRsLBuUtqfQTqZjVvoX9Z3QFQbj7BFqaJyYWsXRMqZdWnD2YgUu8cUaXgbZ",
  "key32": "57tcYPyvUqGFUVos4gZYaeFNpGJoL97EFok4voN4tNzgrGzcFFX7hJCtweSb2xGTLibH5nL1J6ugr8v2DXp9mAHK",
  "key33": "3QgZyMbit7oCtSjv82SGr1wk36rXABehCyTUNyhR9fnUDQscZqsqYjiXjGnCHzo4nL3mNrE5hMMhBYKLU7Jzpt7L",
  "key34": "2DNtNW1iJNqed3Q9Xhea9CaEgMMQvMUNj5biiXCHC7JCv3Z2YYgWYBmA2uXdmKWkyYFzEdrq8vXUo5ZgV4zPCgDk",
  "key35": "2N56qyJob3e9T6LwEtkRnV2YYt9J2duKmzcdYeAHf2EYTTyuqvDeiGouA2dZVs8uXLmNm3fwzhukiDRnDvE9ndpG",
  "key36": "5zBPCpD4Kcjh3hDi4ygR25ZrwuUXtweqaqXcrjiREfaMRqx4fbHmb1GHsbuWJSBDxhrn55u35GjqP6GFYLswyt5U",
  "key37": "5MeDS3Gqg7QjpucLzXehe9eGXpfzDHcAwpRjAm37fdkoXyAR7NUR8rqNM7yex2A2nsgGketXtdBRWAtL41TXo6pv",
  "key38": "2nZTFhxQwXMqKNYFf5hs1eXFqFxreWB9tdBdGKM9MDj3FQDRo9UfoSLt5hUZ1UhddXPt7UaMRaREkr8U5sz7a9zR",
  "key39": "5f3DcsUQ9PAugsCRwjfRohtcwWxKo3YP6XJNtK9QM99tD3hAUcpTzwswkE4xucE5Y1RtJ8HxisXurGGXzkraxSEk",
  "key40": "Kym1mxVRjyGD3p6uHH8MPGoAy6uNq5aEEJSYcKuK6wPjeHuotU1YKVKCrDqPHfkfdxYR1T7vyHxgisXYFQnFLbu",
  "key41": "26scm5731puoEXKVKNkagjHJeTC3edReNkBYfar7gaYdE7yTU91gNYiApVNdVXtwWnh6cNrvgcERVSu8HL2K71CN",
  "key42": "2Qn8mxAqVqXeoJ3z5XXUaDVKvvs2Pn1Cw7vRWeZzno8tpLcsxqAjjJUaF97Q7px6navgGvS7NuPXUu5vmmkiaYvd",
  "key43": "5Wkc17Ycv7epYet3fYcUKrgpw2GhyCTsLz2KME5G24SXV1LaeCCpUngobyDeA7Lcj8YSHNdsxFNDaWghKnMHQom4",
  "key44": "5CnmTwhCsPgC34cBfjAzE2c2VVeed6W1nawB3NkxgkiMdqGNSUAp7voz7fMbEowngxrBbcZHpKyuFkod4SEC3Hjy"
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
