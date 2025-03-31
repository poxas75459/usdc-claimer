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
    "WFw8j4crXgRNkYQ4xmbhVRCbmagexZNtodKdjPhraP2aEM1qkT4cDpSj6HnbW1YRXpHWZBxrwtznm2RgWC3tTno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jr8Jr6dCpcSvookULEK8YiYH5dZvjn9fneYcx4Bp6zgD61jrv7UryQEgh1BunXrzmRynULz6NePhRuKZHYwd5bV",
  "key1": "2re3v3VsuUbR8pGNtErNkM3tXmeLhSiw9Mz1vNyggWYyEQ5JLrS6mQvbMV5Weespg5t6od2vT39KkpwS6ZXHgD4s",
  "key2": "4apPdLBfnScVaUi4PEMmExhQBznP3oEgzTMPaPGTp14eU2rK2c3kKHovyQ2nmTnEA7y8GifhCwwptJgAmPnqL9Zu",
  "key3": "3aq2YzNe3f65WN6AULeTWBkgFasraeoUdx1dujirbjxfKbMxHzYDX57wvf42QSCDQNPUkPaKvffJ8192HpVSfQeL",
  "key4": "4WBLzBXSfpmYftMGGacPGWsYRa23up3gJJ1Trw8TLXyeJ2kVdiuHSgXdtRZnFPwnzUFUJTY68iLx9y5Ji8ncX9WJ",
  "key5": "4QeXkwGAcJtUBQLYsHGbduVX5uYQCkxicpPJAvZdBTgJV71ZoPqxsNWre1ww6D3SimukMFKNCh914mRck4GjAqq6",
  "key6": "5f8PobTiRki7NtBTMwPYZKSCFZPsYNZLxkNy1Lg6P5N1ybp8KRm8GthuN4NY8f24SfS1CEQCitdMAfhGxPbPR3rQ",
  "key7": "5Xq8B7nuspHoYxSiKiXnSecf4UH8gKsq27zaB2vDR487FZw99LCJTGefKeDdZc5UYnG2NoSnFk3BybyuRpzSJDQZ",
  "key8": "4AzSmao8j6akx3AozT6wTQwTncaE6xQkAUr35vUg9qKhZQCWS2Lv2z9Z1bLdx9s2hnHRr4cuYtdb4v9GBycKGCxX",
  "key9": "4i5TBMWGJ17tfesnhQWGTetKHLabYeBmNSk9JXRGehcZs2EXEasPJfsmQ9BKzXfahFkAABPsmprB1FeH7ewMfwPQ",
  "key10": "64bTV2ZQSGX43Wg3182B9Cr7Kpx95vKf7uqiX7Hc2yBesxX62FsqK6UFXQkgSg3EvJiaZoopgf3o26zFY5UaJZra",
  "key11": "2v5pStmkcRrGXaH5JVjNYYv5d8k5hbwcRJJUC897hVTZNJGRy2tXcA9KLPgKWWABeciQFvnfQtWbzAAFQsJPrM2q",
  "key12": "i6ynWN29XzSSJ3SCxCMCQp7aeN9qwox9DJEkZsa6YqAU7wXiaDQ1Ww5L7ds12Wp1ypwuNq85Xu94XWLMHeN6UAr",
  "key13": "5qALKZn89UUGgouXFZjsqz29Y1honALTZqryb9ZD3JuoPk9vhDBvZmR6ehpx7y6GMhXCNKefYFoDWw5AiZKbthRa",
  "key14": "3KjTs7RRpYJ5D9eiyPSZuppMHV2mGiiHNF3LX11XxAXAeEswa3g4YXmsRHA8LAr4FvfZ8yUKsUBXaHDoxgKJpsdg",
  "key15": "EGkpFmmqaboHoYyueLYRyynA4PQLzNjDqdM8qziMCS9vg5PgqmZnN9LNB32vRFMUu3h6qHUC6Dc5npG8GXYdSZ7",
  "key16": "35mZBecdf8GvcpxTNponFSj5h8BEf4w4v5SUva6aamZo2sLXBJKtLoxPqd41umXAmHCNgRfZLaoUqzV8F57yGUA3",
  "key17": "4pWir4mCpLkBBJJTNqWEik9NUa54wztTbJi78K4m4mRM7qzaHP4Dram6iwR76HCefjE6NsvfSHK4azFCxbjeR566",
  "key18": "4JmCu5EmFnpKscZcyVV2oFTXZEQLM4PHizMs9Be7f4QbsJkhrnKKvkWpeThkn1Be7VynX2H8fA31GJP7e3Yaipzu",
  "key19": "2N7UrpWSzj42kLb8qgJ1LT2PWwHs7xYXmBgt1qYVt9uLA1jGSqaQY56veouKiyJpacq8s935ThtCQe6EJ3oq8dab",
  "key20": "fdDuuD2SwheNtmxsWJWDkTvCP7gK88LHZX5w2E81crZVopuU7pMkVzN9DcbjUSGU9vGgFYb7FecTMZPnCRJTYjy",
  "key21": "BqQbSandeftZYvrsQPipfoZX8DxZe7fjdui9AQRbgUuGQhnUJ1eu4w4BGWYcSqj7Rr3gKsA2nhMmABhZg3doPWi",
  "key22": "3qtt9oqrVSp3qsfJR8dMYrGLYKz3Wnan9STgLeEhGAnihDgse1seMvMnfrJzF9BUNn7HWondYEpR26pGSoRBJSV",
  "key23": "2A12aDyycFRXykkHtPyaAU4eVigtyJYJPMd8URBonwG6FtVy9NHxHLSGjRAcz9mqTXoEwYC8aas4k5DM3jXCZ3Cy",
  "key24": "3By3Mrx1ht4XVGpvyoTfBbaAf5uWcszeC6fGy7NViAYbCBVHgN15Yo3bn8JKHhJ12v6hjjZFtTmoQnv5ZFpfsAzi",
  "key25": "4sdy2i1U7tGvyqNB3y6B3syXzMs9ipovuiFetMJeaV5JDKrSrNikYeQ4K4JG5WYcin2mpcLy219Ar5wMPCW1NGcB",
  "key26": "7SAT6ByaoezqdRyKunHRnsyrveAvuNj5c4vYczMVeu2LpfEMoVEYsYzdphtvbQmPxq8ANyoW228anX3hxxScwoY",
  "key27": "2FqjLgprtvoXwy2bXgbHJBwxsTCmr5W4aQHYXv2d3WHP1pTBiS4TvDwy6eZB2ih3NabeSXh5H8zSFUXVNd7JZWCP",
  "key28": "3NioUpmrNzSQFsRVd27dZNyo4VUASmNz4aWvqJKX6Vw3LQGVtX5gtwBFbX1qmi3ssWqUH1S3qMWifWqjuoJtcRfk",
  "key29": "5XUKHw3Vg61tmdAiz6prRjttE94aGtCUhi4nkJEheVnvcRMnDukNZs9NMoYnHaBWhUxfwGEZCMjECj89R6j2koJD",
  "key30": "5hPdiZES4kNFhCraYeQEFD8wiWuwx1tV3sg8Leb6aEduE3gygFEdwtPK377nDDCLtos4rk226GJXjpJEr5rdTUhU",
  "key31": "4GqHuikwR6HLUUa1QinanHp589cTu7eHBpMCjfrTcD3cxwmKmhjakcn8tfQmPFGa7BjZUHr6JbViAUYhbrQqeERg",
  "key32": "pZHMzahL8AgyGpoXkW8CiYcWyfSmDPhxTqGinqL8MVkZTwHEGteLsSC36M7zL6eRqt47eA8iphhF2ik9dYWX9qs",
  "key33": "RLtQS7qBwmZmzgs1oPDC4xBiiJR4nCCQ66cbgBKKA3pakGJZQEkoKJhEYMpJXdfmwZFbAedZA2J18eXrnLYtHZ5",
  "key34": "3hKtpw3tpv7voQSU79P8ivT76qewcqj61vEvVECN54Z3P9bMAN4QUfETVmuCaKaVYnKktBp7GiYpzjkFHjKYxw22",
  "key35": "3xu9QTm12uGPp5ZucdCKjZ5YZUgz1MoHvenkUEBX4HMSGPyvS7KCuZCFTfPtu6orrbYKmrFQSgDfMrJbbydXAGmJ",
  "key36": "Bbj9tQMmW5auEPQ1okLATJWHFTW5954WMsf4qmJ5urbBf5zHAVo4FRbqL2VABH4MfZU36U27amBn6uiHAcvVSA1",
  "key37": "2b9cp4arhKbcgNLkbFpxdo2mVj4UmSjo3FcJUu7QTi2CD2TiSR48Uo7c9KsQAQeCmdZJNbfewCozNbppYDQaJLV",
  "key38": "93Rq8qvWF7MEJE5SnHzJeG4xbnkK3bcfC7ixfvJhFGPd1KTJNwbrWuf6Zbbe2DYjKLKDNpDwJfUhWc6CATp6axq",
  "key39": "ZQ2nSQLRgmdrDvCAgRmH43umPyVTWQd8EncGA6saQ89rkiHkoZtTDXMpqffp1nJQoiYfE6Gim57moy3xuupZ4Fu",
  "key40": "jC8UgGZpHdtSjdEm5oCrxfaTdLS5sFKJ2uvpq8gbo15oZth8zSacb2QovcVY7xwNgwm8yCQcKXd4pb85ymcDJoK",
  "key41": "5dryg4KpFtcsor4NFNLHzHDo2EDrbo4G8cgeuuqdEuRJLH6gqN85yFFgwr9tfmc4wgGheUZ5V8UUGPFxeaRyseZ8",
  "key42": "3rTVYqcPJbUPoa1qydG8hhcbqLpiJRmSb3WvApeyr1SXjeBcwiEGxaWXg6yCij9rF277B7po6uHsgnor8TNB6zS2",
  "key43": "37Paybdy6EmHvetnLWdm5H3oYaazxzeN5pyFnySfaD5ibYWVURxsZQuS59vxhBoYLXapzrAxVtb5fWEpnxcsX6Cb",
  "key44": "4uXybCoVweDTp8yn3Kr9bptRcX6LjfGzjcm2y8aGPXCfGxRQdwokde4NB212N37xjQZVmpJsWvZ7VbmzqQHSqk4X",
  "key45": "5Bir6sFLcW31KTe3FEookF1G845XvSoo2t45So6o1g8JXQF5L8Zdsmo7F3gXgb4C4UnceHPh3shZFX2e6nDwpyzb",
  "key46": "3H5DXq9u3ALVr7SwQF2b98myAoFtPdcwoJiK4ZgyB3GJR8g918iYeJtGw9wm8RW5ZNaniy4DWD88KBUw2g1fnD9T",
  "key47": "5KmVShKWQUoKrGLxAyUB32ETkrMfRVVBkfS35M8QgZwR6n9BjhFSX6xq7mSHzJmF95TNj2WdgjTQEXi7hmu8cpX",
  "key48": "kqnENsHoYjZeyaNtter2XZG6NKn9Gdd5Ecj1FESsJzrAWWeahXbtMSAR9owfojABfz3yFhHc74S8yMHFT9Yp1Da",
  "key49": "43aUFnA1frTwd9DuJHmffe8Qw7ZQd3Bd1DyV9PWnMHqM2Fiu8HjqmRycqJgzXbE7n5795MZPWzSuKcxqoG1pekBb"
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
