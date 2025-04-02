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
    "5zFKE2MkCbcpy2T98smZWnuYmuWiBbKBWiHeQej4AfLgSF6gokTYUDTeghca7g1cqerW2URboQvKdv9hJcCVNdBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pCkhHP2EQ6scwgGHza8p25nJ1ii41pA8kbQQfYphMyAaBFePCV4NxaRpCePRWRTybc5iEqcLgj4f4vZmjXXKpj1",
  "key1": "2aip49fH2fiVT5bPRSe18qdtNvcnY4bhkR1mTrJ12GC2hydDnV5d8RobLN4u4HnyYPyB2ofv7eqTYYZ9JWRVRFLW",
  "key2": "3ucZ5twVGv1tcM9KDsrz4Nh3b9pD37jJZWcEgMMBeUCTmhxkbmTp28kho9eAJWABGuz189YzJPkczM2Je4bdWaqu",
  "key3": "4eRPj4PJ9QbMxqbBDr3VcnFDDwd3LxSfevxbeBvstvDUERYSy6vvNeJVKCvVtPdXgzvSYehh4rXUXF7SetED7esb",
  "key4": "2k8zyrw8b9hS2ixZZK152Frf7aTesotpcn7ic3Tb2PxSFQAyRFBqrTiXRR2LPhwBGRSX47996AJPt1PF2UpUF5gV",
  "key5": "5shAk2XH3ZoeACCpxrxXDy1stPj13u3KG2p6aqk8ZNCAA8bTFEWWe89N8j27iRx9moS9qbXXJq7kY1aGisBYrWTC",
  "key6": "5G7XXSwwXdZk9ef3HrGGwcuxF9NovM9JgRnvWYid5eqWWExgVURAsFR2QXwixiRCApVVucZ7YHeYzfJ9sYVxGAJQ",
  "key7": "UST4QskXGphpeVBZcZSVreDwerp86iPvdkPVxDY7MVarWGx3Q2LrMedfRwt7YCQPUEPAh7fYzBZvjSLxBRMSoTd",
  "key8": "4wzwY8fsF4soMqtk5aJw5LhyDbp5QjYDC5rimNP6QZk6Np7yACpJzTUzd3GPJvbRk7B2RMsgB9rrBSB1b6nLESXU",
  "key9": "4X2tv8b51zz2koWx8TPnmHxPaYSLH7mZs8smn5A5uoav6RWnb9p1hSWSwhiS1jgEqkhfY9yRVzwgo9t4pa4q5a3R",
  "key10": "W6fN7ec7czwKnQc1NPetfWJRc8JaEzRLgCpFvCwRzocK6r52HKvhhEwXnq8bo6KrPAVWmUsmEQkHkijg9yVzUmq",
  "key11": "5PB6E5sBdDtVPJxtFcEPPKtrs8DRE2snFkvzHHbPKPkgkfwAqySGJFqRR5zRe9au13UF7v11z4Xgu8TEVa4iCHe8",
  "key12": "48k5LbczPp2oJ5ZLPWX4Kxo9NjnU9pAbwtis1UTvYVTv2q7Mt7QQ2L9Z3MiufQDZiXDR7vM8fmHCRbVqWqoCZ9bj",
  "key13": "318wxKb3YX1cVZ9HqpBT8kNCfEevBzT8scqPp1vXpAZEQ2ysixbAYgubUXfdZqp7EHs3ysuHPRzsyagPau2S3bYR",
  "key14": "2m1wCnjKgD28FteYoEjFn4XbfAmBFrydzAYV8u1SxU7WtC52CGQbefTH9hkTMYirYMkPsCD4mN4rxpuZAA1ME9G7",
  "key15": "2nQ4yDbomXHKx5WEqyZxyyBTyJXvBaSvExNACqdZtL2XtsUJF3g55RmLCuoeYZ89kU7VWavrkhTUhcSRzFge9g1J",
  "key16": "UtjnvHdiDuBSQ4H1cKxMDtyA4RzvjHXzoSKgf4mDYXptDoipaHvH595571XTokwF1b1DBMHHZLs4wgZav499b5F",
  "key17": "5PS8xsSqJakhW3UXijdrWaFTVDVCrPFbmDozn8wf4RYjLGhYj59oiYNndx1EnspN5QX4ooTTmCndcMddYJU1NtrM",
  "key18": "5rWjc4smyQ2WUYg5aZT51ijBvYrc8oo4QmU74Faa1ZnMaH4DdNEq4vYEA6fX4EMym8UrZXDiPy3mpyQkYQkFSqTY",
  "key19": "4dyo8abidY8Zt4nTHp1CedSrM9XHbnqUup4M6n9ujyzKvJ4FiPvRfca25VzybVB1iVzZRERn43GCoekDQCgHhBTQ",
  "key20": "4Hc2633wNfcoi4gJhcci2LtYf5qRSFb1WcWg5ojv1meJsMjFoepharh5zRgkJrfxTcaqPCA4AfSbubSP45TS2Uwd",
  "key21": "Q5h9vj2pmgzm6c9x6LFpL8yexFPopHgA8unewUMz2K7JrwLgscpoeQFxCZWAA7RRiAJGpsEjAuYwzy38qk7ySXa",
  "key22": "5JX9qo8HrcX9fs6VKn8RGmiTJqRSqcJspLV9U9Mc8GyqTXE1hESzuWqFDmHRJ6XK5FHA1SpGZXkAp2G7MyZzxstm",
  "key23": "7Lbg4RFx11TiKg9zsgEnDAmBmYaKNSeC42wnJLQMSLFMmuz9KJzsYFfzYgxPs5VShQ6hLg7roECxgC4fqYpTZGa",
  "key24": "kGLDZ7jgxyfuQjxPWDwXFtkpFV2GStMbs7XwJSbLbfiCL92C1SSWZfug5AV762sWzR9ZoxcxXB2MEQmx7RXoTSL",
  "key25": "3jba7fvVAfegpTozNYiEVC99UsJtNv3Tjpu4FHJt7u7Wc8qke64cwpEf5q2hxCgmdZauSeebg3tNfoAsoF4E8wSN",
  "key26": "3t9HrcEkdEK9J4mq7cumbm2ndRnv23eWt5Y9j4k89283giFVuvBF4hyxat25aK7R889M2X6ybpNDi3GLeaRwMNzN",
  "key27": "2ebXy5K1rFGnHDTGyocDVUWPKBK6XZ7uRfUjVQqkn5zdXyxrxSedKZiRKybmajjZ6VUKkV8yUr31erJKWW4L2wef",
  "key28": "shEPqgKm9AmvsEKeGnAqDR3X8TUextyzfLbBUcMoWnyxgjSdevTNo2LJHf4hVtb8CkkPkh8p3LvwkHB7JEPNpBG",
  "key29": "5bm9hf2Vc41iopRqzKiUFfXjwrqgKWNP48pcpRDwdH4UTcU5SauCoAUb5njzRj5ZpGd9Fj77MCkk1qheVZ85bCNn",
  "key30": "4FpshBoS9AZcFZf7YnPFAsLfiaBVrYuxLQMvfbrTMTT4KbDytmH5EexV6SnrCAAeWHgFr6q3VQjSy8VwSJyP1Tbr",
  "key31": "bZQheh5cPrMsrQG39cwSEbEb4mPKgJmrWXge66LaCYzJzZkZdgQSQg3VKbcBrudZKF4YaunFj5TgWPjEcX5eNEG",
  "key32": "D2U4jo4gQ8j5ohTRrhHFJxvH3ujcgaxWn5Q3y3KFJipM4N1mH8yzSGJqmpLaQQCFcMCG2EXb8fps9EonrSV11G5",
  "key33": "45aJJVtzeU4B9W9FFaPFmNNLxJmSFDAzKoAEAhb6pTp9pstr9T2F7ZxcMp3oDJ53ppA8VGatvLogdvdVJxDZaX1i",
  "key34": "4z21Xn6eLifSjax4okvMMSjqrnLuMh8iMXMuGbCPpFAHssck4V36YJVZw8MvYpChkMqHBsqANDSirv8C9wCgc4eC",
  "key35": "3mtPdceDNr4Xu7gpHctFxWnvcc4mJwfzNU9wPcQKEy8Dc3h79sPod63htyudzcV22d9JRy8GziyAWn59JCY3hstE",
  "key36": "4ZotDFQHi56tChHWudQ6wRuntYYV9b8hSBKTHQNXXXpEp2K4vEcLUnjyKEuP5GZwSPKJhfKMk16QtKPkoWNzVRcu",
  "key37": "2k964GnNNKVdejFw9u7KgH2jr9MtVH7YCt3TKmxi2iFWtFdn9AWyaNbdUdkrNC7PjvPSisYpBLcKwm2nkr2GXQuA",
  "key38": "3f9tMemcugLvRt7ATWs35fuGiH8EqLJpFt5rqMYr8HDkUNqoaSKrPAmbvf1Nq19aEZsQyJwiitGNjw4BhV155AXd",
  "key39": "5cJwh1BnPhDS5QAEnruNXUzREk3UwwLC38qM461EVokWQ4yRxuwDvGuSHXKgw62o8qhx5uNV1fA83qnrkFiNzAyR",
  "key40": "22S3PVAsKJEbFPed9X2kbQKcmHGdEYRp9Gtj93yFChnQbPXkJ6EV9LMN7JQkJayfMiXXE6qb9iPfpCrvgXxVWArw",
  "key41": "3xg1ajRUmkZrQxGWUmPnDkjEcZQwPZugbFa7gwJA7w95RMc4J8jtK2jscUjWf3GYHUveVzS1PnpvXFdjq2DYXgCb",
  "key42": "31X786szGVoEojAAd22r74FAwYoQvHS9o1GuCGmJGAj8H55Pm3tqGRGUGsQzgwVWDEtKomLZbEaFrJHncq5wABwC",
  "key43": "a64UbzQUxe1NCgZFUdjPwUZ36Jec5Ex8EcGjf4KvJE36WjCuaj3ixHbiAtMVeQ69FZZrig9EaeyztTmhDXm3AqD",
  "key44": "5i3co3peYsKo9xUuG9fCnCR3RUKWhoeNHaPgyjLRkxLXrAPqyk2m5PaSWG8tXVAGSQGuMkccQqRYxckP8UAzArvn",
  "key45": "WR5cyXqMCLbiTQKMWji1EuJUjMkkbzfcYWNisLnupyiDwSquqBf4ecWZkBHxM1Y2Wrzpp9riY1uxBa8ZFELfW7L",
  "key46": "2LkyCQqhNx9mfdtHEuAbKPZaKiyWgMLmxH7zKTpRK5hDzB36jrLWXgmtXrSCJoP4RbDkrL4jVPyDn65sxWu8NJWU",
  "key47": "2LdhMaKWGzJGfDy9VzB5iPznm65n3FwusQWgmNfx17CYtxJfEJPgigEUEuJiTABRCngwMJCiuVSkh2uTwW3tZZFf",
  "key48": "3KpxaY55B4qW2PDsw6qR4C186pkcRHD6ZnCS4emnt4pvDRJuWxVj8L94EiTUVuKaQtqKb2HdrqcZhra6829wfDn8"
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
