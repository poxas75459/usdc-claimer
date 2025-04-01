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
    "QJAqgXQ5DGFcsnn36U2tw5yd5c983axxSQHqnL3e469YJtP4SGCeePdHGKKAkgwFCZuLZi3PMThUnqPVzFc1x9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qv2Jm1ggid7JVnAX6pcEfpgcZerT7ekcmynaLYrUkc77d7Z1mZjTjopfAKHGG1Ss7XMtHtTgjNcHPLPR9QAGA7g",
  "key1": "5tN1CkzZkpr7EqKMBKFeyFpJfdA62dCoBo79nnyfwknCcFiiTgPjU8ysxRQruYgYSfgmsDAY4VoWVpvUogGZjESd",
  "key2": "f7mtUkxF44tAB7963HB6xQW54Nou1vJ95WSPFc4s5yDrBGRwNC9XqHSFyhm49oGLjrUYjCkYjgMppkdVrzFEZQV",
  "key3": "5CQtpJj62SFoWcsT26ZebtWAJA87W1vN7cui77tHL8NDHTJRNPeh1cvhAoeMQCxW3baZiynJnBMpka3uGWjXkVwv",
  "key4": "3RedpnEQijJP9dBxWDDnK7UJYhXxQM9je4RmicdF7N6o53Tk3J6rZFtYh33jY5CmsVXoHKg2kpDx85ks7ruRfut7",
  "key5": "67PoFd12GWTqKfuCnquPQtView12AXxw1VYYTTbs2wsnCWxPWUsDQnQfaqq6Ys6D7VqgDV2bvYEd3dmpnYnPq3DU",
  "key6": "2W92nttKbyiDaDawXXsjxdzBE77n8fSEr7PqFvP4yUUzNNDzLNgtpQtKKQoSi4mASv4uEGEw2Yud42p2MQi6KKVA",
  "key7": "3mwG29GaBRACdGmaAZ6E6qKEYBfPg3FhFnhYiddjPMRoiA2hkZ1ietbLbNP8WE42iYVeoJ3nn9DEv6qA9HMn1c5i",
  "key8": "3TfSknE7w3swgeSDtqu69T4yL7nxQtgGxzZ4qNAvhsTvozePQ67Pr5suBtMg3H9HAWY6hpie517s4xMPtsSBtjM5",
  "key9": "2fpzNHUtkaFERh5naKc2qJQgxiB67GADiqiCc4Km7m3CuHy9DfgKU55QssyRTTon1FG89zYNeiDtWmKtMpuYZHMK",
  "key10": "3DiULdwyxR5JDJZ6oSScxA3UxVsFd8AtJgxZqY2RbbnGYf4dskFDtZ8eF8T5X8ckCtE71wnRs9XCKQAfGxHXEzYA",
  "key11": "66kv2pbr9ecFdLTWNKCfNaQccoBDjYHXWpKfmmDcVGE3PykqnxPXKAM7DkhWDczE6JSxeEt47TGLaxrJpSbdjWyX",
  "key12": "KKryYqrNGMmyRCWPnaWB6T96p1D76gB5ZxhU33Sstypa4tNtDexGsqzeUZHLESpYi5T6y2efjHbhNVURaFQc3k8",
  "key13": "3saBTGQG6qjhxaQCuNVyKnn1tbZazLBrsmcbFWaqT5wUFQeDej4rMrwGotLHFbFyq9bU1h1Ln4gwp4REjUnig1ik",
  "key14": "rNZpx5dqUa1qoKoZPpv6usZgceV5MiPQhcZvkGL4Z5tWExni5c8WHSX7nW6UtDBFLcpg6Qjfq79WScbgak7xxN1",
  "key15": "29N1dXTqjTCAEyHAdRSCRYApsdxugTDJaXQGfWvvtG4mdqgCnhjCmb4u8BhSWVaqPUUtGjPS2sgaaqJk8qdtn58r",
  "key16": "4kKH9W7xTzppY8iVQLNERkQu9BRYkddkA3MsMcFgALNEnaVneZFbhUgUjrNTBsWSEhbJozzwWqGpSPrmqHTVV3th",
  "key17": "2A3oqCZH3bYxYUtoUCwKfB8zzh6iN8nENXjp7kKqPW5PDTjBquuz8jBnVdcs7SWQqKU1zyezmw7GmfvNMgNgUHe1",
  "key18": "55aKBGecAs2HVSnuGbrk3pW3bucWp9XW6nVRLjbi4xcUDeCRAtyXCXQHWeF86ueC3LhwTXgzzJ2rsesimA7KbjFB",
  "key19": "22aJ597uTgLpWoi5edjDFfxityeYskcc7MZDNqdqhvTo9F1wYFievfU2NBLVWVHecYgsX956KY1d2C5DjYEhFsjM",
  "key20": "2wYcYanNEZ1tTo5N26ZwhqEvph2BGsDpqkBbeopLtSCv7kCFJBB65cGimSPgz7YiByzQmLE1CzTso7PeuZ5gnHnm",
  "key21": "3T6XZTHxej3XdP8L97LZkSspaSjFitG1R2CA947nyBgsfhZeGExqUdnn9FxHVuhuKS5CxCAp52Atr2zH9oP4Kyxc",
  "key22": "4xyJsw4u7YmNRtRgzpswWJF9f93H8L5co14oktSSriRbV4wH87JQMAmi6J5sfq7ZpQkhEAmHxG7HNLYThnU6eziB",
  "key23": "54Tby9Jmt8oU8P6H8WCULhEQ4naeT7wkeP22H5RSRbcWK4frs6aZVb2nH5Xkz3hDAsX4BNFMJQf97D8kNePDNmb7",
  "key24": "2s6Hx7qsZsbUTUqXyCZYfS2AdmwPT4kT9a1vzQHwPjGXgm46KTbDCu5Z6Fmnpva3W53U96GhQmfsgHWHD8tC8U64",
  "key25": "64JthCd7qiwZZoUtN43Ge22M6p2UDiAfGw9mEZZxRCbRJhdReCHL6gTwPaaQaGe7QmYgM8sH99Y1umAndyekKBLR",
  "key26": "2nVKxz9Pz9AdeKB321i4nCCVDmLS2jRpTy7ucCSisnuwZbuUPNG3oUi3QjEEnHR4nHNvkSFGChTxuXgsChhjjKUN",
  "key27": "4tqHPu8vxMediviSaEhmBTTYpVbbb6aGUtxqpWujHVgVUSgm7URBA9YPwEWVNCbPJsD2V88q3G1KZppAXsFLiSR6",
  "key28": "2FgdfthLhyKbY3LcCuJvZjTk7Ru9bAEVCkCCRH4QegiJzQSdguYmeqXu6BD6NCfUF8gjjy836hzYkH1YwEqZQphk",
  "key29": "4fNtf4ynX5iTScwTV6BckJ6fmkL15Nm2EzUQ5jAWKgyLVJdjqkmJ3BNNF5RY5XdDUneayRSDigTZaEUEGxm1LKjn",
  "key30": "qNi6ePMmBDCn56BgWE766xU5SAi8Lffd9CipahjXULPXVp6MGupMrLniUyGzYnK7Snh28UxjER3gwmjEsjKqnCW",
  "key31": "2GoxpLjWZ6M6crrnzBgzLXvKwSTQyZMXXUTr5zoaHmpzSBwpPoKo4Dvoy1ACskS1pv5RekntjSm6r8p3mPzgruqB",
  "key32": "3BxD9Dkijn1DrQiQXiXvhBLhMMsYoVpydtc9rJwV8EEDmXeRouXLamfBBatswBmopKPsbJPKJHrrbSctyyCEY5fJ",
  "key33": "4ndebq2w4S4YAz8RviqpSyKVoqU5kXPRbuCoBvJM2yTqpmbBSWhPnaubcDdyUitK1EWw2XZUGBPmb8GJz2XYUSDj",
  "key34": "5g1T42UJvfUxeU3NraqaCGxcSkuXYWQYSrEcEDv3ioX2rfNZTeMf9B6bhdJQhu23bh1DJTon3nHvRrZCdTcWSjhz",
  "key35": "2VW7Frmojs1vwnJHg5dYsCZEobDCa4GPavHLkDaCxUofho7MvS7WLgKBk1aaJm3sbCV6W7eRvsRc5yfEHzR1gwsv",
  "key36": "4bCvquMsjbb6ejcteanmkfbbKx2oLfQf8hDtSeL8znx9A8fEtQikmsMWTvszHjNhak2YYteDLYSfnvoyuH84bASj",
  "key37": "pJAtE7ndX1ZiyPaSigbSWzAFcBgY7ZumF7qM667dVUV5NbxgmqDYpR5N7pqjQDUUNqz9hfPDnuyPt7YpR6gekov",
  "key38": "5Kw7uqhseojNEFo7zKw3qXiR3jfh8J8nh2CGsSab7fFt1TpB5eK5sS1Vhe8wiaVqcFcp3nrw13c5sS7us1Tv4HKW",
  "key39": "v5yzgvAB1ighr2zbTApfaGq7W4jsEEZ9yYFaPgsrHXmFK46tZssYwuyAPY8shZsCM7a9j1Nyx7eMxrJTQsv5DbF",
  "key40": "23X2dneLkk8nN2uzToq4WJvp85WJarnxY9aWWe8iL8wQE9n3Pte5L61tMW83fCNXzrQK5FevwRAL7pqDmqya9yX9",
  "key41": "3objBikQrRDcGuFrxTco3DqFK89y4zqssvTNv8qYgCreGshnnHhMt3UPB9EwskiFNctYo6kXGXvJAgcB7XGED7se",
  "key42": "Qquy6n5MjVeWvTXmWPeB9CeRYPnbvxKiJLpF4G9S4jRKjXqtFCQVdEGv9v64JzGTF3ExpoEovvApHBx1th5wfJK",
  "key43": "3hgpC5ttphpCf48mf8kFhyEQW2asHBVw3xk9HyBiqvpzfxaPoy4oTCucvgH2w9DY4hC7Sz1RKMJ7jiDmMkBt3FQm",
  "key44": "skRyDPE3RB8DsekUp1fciHyMepiDgstxm9q5vca6FNX9WCTTLhncgwW2x4uTkPVX4NYEXwb6rS6NZjdbKEDgZT9",
  "key45": "3YsDvN4KWvHk7FHA4HVmMJEjkbzvBVjppwfNRwhNeiobnunz8r8Mn41w4Z24vftZrpr36Hj6ctx7YWSPvQxBSm1T",
  "key46": "4o8h9FW9KcqgR3z58LNEo8XL2TYPVBzpzn3RBdDDJTuZ1e5fVpsiX39MJcr6AL8CVZu43sVpy6jiVrae9jeyEng4",
  "key47": "4ac31rZxn5eJNPXA456pLuRmcPn8uQeteR35esv31178UfrTTwqnoBjVFaDYG6G79bkoii7sZMkLYGVUSiT8P2j9",
  "key48": "qsLRPLSAoLZQ2gG7xGJL2sVrKCa9KHmRGuTdPn7G5StW4JJdwtaGBoonCmEd4aBFUQqupxC4QoxXDSmSqxxJKhG",
  "key49": "5ANt8zHfVneJXzND91T7wuqDgjH3cFdqfhGNT6nmvNM8RHHJ2WzmEkndzAVCiNG9Ewmag5dV1wcgcQjCHMyS9LGk"
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
