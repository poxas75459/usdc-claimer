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
    "2zvnawVC71vHrFhwXFZxBe5n38diwVidz4W8mECmqxjpXZ87dMqFAugdX9mM4RrpdKsi4TyphyKD7XouP1mz3nrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkTkNuS94MyAJE16BHuftg1tLbaimznRoBgTDASG7XU3M2xVcdQ73wjJ9K8iQGQpS7X7WfYkpf9dy666oW9JdRM",
  "key1": "3y2HmchfYMdSC1PFtXZsN4sK18hDdC2EELfzMDt7SRfYnkFHWnSxMANEaENyLoFM26oG9VebU7HfLjVo7QFcvwjy",
  "key2": "aD6L7PXy6WMEw3hhTKXYjkgh2xFj4XqeeeuGVGxbDf27nmeFrFuDAdBywiWnNp492PGV2q38q4sUmew8vCMzpzq",
  "key3": "5GZa1jsqL58sTdHRCFroTKZB5vK8p7Ve2XWLExDoQRJiUmHqpUH9g6a2qMrFz2EL3Sb3oRcyqkwHfgSjzBxXZCXZ",
  "key4": "57Vc9dbXNwDDoFoctCuXYFJUFyachZgy6gqkLzvCAPZ88uM4yZYdC7Mi5PFdvELGFS8SZDjgnYJHTuLr2cwrAjeh",
  "key5": "4sUH4KKG1tTLy6aAMQnvbmD6yfKMW81QBjTr9F6d5iquMkdiRGSW2tj4v1Lb5rkUJJ2XKqUG4qGTrAEDgDtyjBGr",
  "key6": "38P84PhSRVDMaCNUn2P6GUmTVCaBe8BWEY7rsMRA9JYEvJQRLL4AnVYpDVWaqSrDw98ZfCV1HNYkAPyXq194ert7",
  "key7": "4baXDpxMTsExipqfQJFRPakW9s8nSiWFvTyxjD3uEWW2FZ1SBWLoooVQ3zRSJWWRwLnZAZvYk3nBjaCtDCBQuzSU",
  "key8": "3LRP5HbXy955yXe2TkfMDbCT4g7YMvFrRudE1nDdEURX5NghoFuBQFvHApQTycn1aiz94wwgoSu4tfvmrpJxEt3z",
  "key9": "5xP6qro3zoCHJk4Jo1uK4vuftaEp7F13KUs5Nx2GSSksrmAE8Asy5D6bEjhzVZ4RgMXc4MXHrPiVH1ZkzKnAfMco",
  "key10": "v7chcxY1QRiSWpHmAtzMNVkDPW5nApTL9TM569PtkERxcnzySspkSoWvSx6g8AsEFKoLuV64fE1A1pJoXAamr7B",
  "key11": "5jHvPj2kkQPeYvqwsBuPaYyYZDuCv3xWHnM4Kzc5UTYVFCowhDxgNoBgz2jcjCDEA1am4ZFK3fK37LtyDsesdyet",
  "key12": "2RajcyqPVWmScQxNh7JCueLRMFKtjdvzy3wvUSKyTG3rvWUstPRTMx2qEsXcUtrgQjUj6fm1taYYzbqtPdFiWZXL",
  "key13": "4h2MgiaMmmF4y9mqi6ykqNgLkbnwX6ToGNUwtoHkC7wu5wcKjqEjEk4CfztbEFRqAhGv7kYGrjWGCThGjhLfJ625",
  "key14": "3qsMAjU6BihzHrtY5ACKZGttHjF7qxCe6hmvbiYuCtXzwLNJ1ETJjseUyBxVJZsFRPdZnhqjEQWqdUXaaAU4qUi6",
  "key15": "5BQg3JAfCNUc2DDDAL4yrWbkDHHTdi1smDvsSSqK9F6YXW5jje4dBzuFU11NvaoDwSGKBd4AchrFfwY9We4mjbN9",
  "key16": "3g7g93cuC2bVZmEYq79z17j3WH6zC9E2X6vubXg2JRVwwBmScBHozpa2x8HykpZcimFih7n6Viyrg39ecZn1ZE14",
  "key17": "4pFafYMHqz39dYQaBofBmBivPhJef7rrBzB3MheERsJ5ggiNytzub2mX9chCK3HKaiUb4ZVrxhJwP85qzbG3e6yN",
  "key18": "25gYVXr4vaJSES6pp566SbP81TwiCqaikwYGQMKMbuDBNNCFAC8D4Nen6JuFANxtnE52GFdTKFReA8RmUcvRdmiY",
  "key19": "2TU1XFRAnZqKZs8xsreemJtSPn4fqFCd4oneqqUmVsm7iAZmSpk6rePDvvu9GvM51nw4HyXMRiSFaxnU2P6M8nnE",
  "key20": "37agBHftPig5m2vDBBLT9eJLwvT3Dbobj4DQzLVKXjMY41JoQM5t9NwsnwPDBAVR5itGYrYjpxjoTgznf9VjABJg",
  "key21": "59FY7Qxpapesk15ifbP5Dgh4PYm5rpXS34c8WLiJTPPS7h9SfKWRqTzuBVeFAUbZCZZyo5JfmxxV5j2kNt2kBVMh",
  "key22": "4YY3r73rDofs7MHfuowqVQuY6k27x4hiXL1iWSBJCHkxvFtXV7FwyfVZwdJyY25B5TxFZcqchGKLuAMKPBrP2Uv4",
  "key23": "UbX6kDdnvewTSS8rShdGwP9N8yT5pbeDv9yYeUsjAku75ugwND1Si9Qz5ACBU6wYMCgjHzYJ7KFKS5zydhRtZtD",
  "key24": "4BeFXwEhFaAHAfUtisTKkerReanot8uSQqDqv1vWHyK3FdQUgCEutuU9tpq7vcYNiv4c31f1w9a1J7o8frqhpBUt",
  "key25": "YBJJee7dZipLHkYb3otGn15v1X5dLj4ntCM62KS4oUZtYDvJ3wsHEqMXX1HUzNvn4xnDZkkGHnLidCJLS4APNSn",
  "key26": "3wh6Rh21X9Q6LcCroYkTonhCey2swVUGodVpM1WSbPAMRVA6kjv9KQq5QkJuV6tN1WRrSQx8eDbKp4XDVjhK1WEj",
  "key27": "2YGdgruDKo8nEk5sSmRZKL42NenjVj83tKAnwnKAE2uNo43JkfFSTCmLMyKdK4nKXc6qcWTqFKWJEG2wZoACLLwT",
  "key28": "TYTYQwQ34YchiCcZyLaaGnakGf14Pqh6wsLfpQB516yPB3bE4LjjaXU5yMgWdeNCs4mfJ8YDDX784ycJiPY1SXr",
  "key29": "37HH7ZJSP1sHsYfWy3cFsYhG4mFCasEXgMggnBr1USbAYRsJT4i7x9aZ7rJqgyvGniZjnMH1aFZTcJH6EFi2oayx",
  "key30": "5LaMWiXuLyRvWXV8zczKFotMyp2Kd2qPZNCcRDXZCTW7tgQkuwV8feTCCVeFhw41t1dNynSKiAA2GsCqHGJFW9M1",
  "key31": "4df4MbfFp4FgUWkjAevCYEe2tpqwXB3QKXbXGUBBMRQEFm31eNMK672DByLLy2TWNwrnoNQ88JwizsEbiSWGpAfT",
  "key32": "5q17nEk7txjVuHVas1fwotVxeWYyXZSNWov5rp1hXee8nMeXtKQk61cRBMbXeJmLKrBZ7fe2jsXKQo6TJyRWqEBs",
  "key33": "3Khmc6Rn7TbvszR7nXtQ3xrxctxjBr673zooLrXcPxWMwt7hg4YLbsKhqkMcfX8uHoqzxLVQgU3dbXwXqGioRat5",
  "key34": "2BbvsbTjfBGD5PW5zAQsi94xf29tDWcsHbYKHEH4KPr3ioziRLAWKDmzBPvYm176ZXSSNiEvdsiy436mm2axHF9h",
  "key35": "xhaooTw1ChfxXM3Vd1KgXDtfk7ZA5ZjjxDgZ4AdkYNNyRkgRbmkjtNXn3gArCsh8P432GEzzJTpjSdvmErQiMAs",
  "key36": "3f62Frtj8mMn1gThejhR73mxYAoBAjsLowb79gvZ1p2rhR8KQVCuycUpYWNMdNF7NoCMqRLP9eDaBp2sFzW4XnQk",
  "key37": "2T8C3Tn4ASuShgGkdo34MM4VPmaqU3bU8kRnPw1zqXM7sHhs94FEPoKTozKVKV97uJjL6yzARYFvUcz5LyThXETs",
  "key38": "2Mrps9st4vZJfzWK8UnGcqdgrg5xJmuUZ73RqawKGf2zNKnhsP871p96qnx7H9RGrgPUG3aQrwusXFLQ83vnELbM",
  "key39": "3jjDwzF5h4hpoYbC2mBqQG3A6w4GxgmHnW6M3Ej5x77SuA6kJ9HWuRE8SMCTCuWZ4SGF7x9sz13oShq3zF1VjdGf",
  "key40": "3zbjDo57vrUT5QixBBuLXAXvntydAydi6omWk5P12PdruDdkneco4ALXBFkuR3QZdgUvx2hinjHSKs1eoYtMFiVJ",
  "key41": "5n1TF5kWJf9oXUf6UXeJ6VCfUhyTGiGcX1Fk36s7x3R4Aq1nXSdkdWCC8qoBeydkXjaZrdzoXtQsYPxQHPEAAeHy",
  "key42": "9ojMqmuSPM4jihX3tMBBKCuU8yR6oapp5JxJ4x1iYqXVxqph73cKTv8P8XJov7shhcDrHF3nrkro2Dg2M2LZwSz",
  "key43": "3cTvHCcuhsYbztMzfziDhA5pdxtqxjEhD4pwHEjwDxJPDZ9SckYxrv59zfkviLDa5MMSSmRE3yovbPJqyuLk21WZ",
  "key44": "32Ps1WRt7AkbH8PYoF6LSbUjAxcQ6Hs5tqCopWwuLv7b1J4a2X1VZpDHys7v2DsiXCj5ggPp5dTPXzpLGxYz8vx3",
  "key45": "3r4og19cwTg2Xb74zZN6QmYP2z9aHjLxsWACcR4YdtEaJ1YVp1FNyEyZxGRADrKCp38YbW4cwK7doVoreft7yQQR",
  "key46": "33uHVcKzGosS1gXarU24u669ymFNyFrXbufgbehFzyWAPavbRPjrPiWiR2C3PtGVZENfVVNR72K5gGsmgDoF9QtT",
  "key47": "5PxYioWUGRrNHjfm5HQt5m1RyrtGatw3Vdnwa49GT2GABdKLnYij6uMjvp98pKWkrSJ4nJfvYgbKEJHzahpANrQJ"
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
