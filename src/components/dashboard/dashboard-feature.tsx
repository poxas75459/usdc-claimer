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
    "24cP9gB2iZSgV9eEMk3Ky5esUuvm5x2LSSCrSCkNUUfMyUarCEbzknPf2FK4R1M6ASSanEx2zQbCdMPfP7xFx9tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UViujA9zpS1foXwuEzPnjYvVT6LcJUGbwaCNoiaud4SQzXXBXGSnjb6yeud6QBxYwjGTGbpPevvLvacGvyJCqAW",
  "key1": "25tCememc4skLjnGVNF9RzanLkYHiEAUpvvzBfuyPCdts6K6eMLnYGC74t3EVChbotLFGESbguMwdxXRCS7bRL9x",
  "key2": "2iTqWDzwXJFhs9pNJhiZ967it6kCJFSKXLJQPh27tAK2FLpCC6Xxhg9nknwFvpXcB5onSNVL7i9VBXrsASzi5rjf",
  "key3": "3CywUCHrvuTiQF1jStg9CbrUfpj5Ku1P5Nj9t7By9N4SVw7YwiF6w4cAgHeXReyy9qxWZY5pWbJQDCasnTwVwAuS",
  "key4": "2yzaS4XVqYtpZWKtCSMPGa4KgayYaw8QEnj5KYDqEnRGbzzETB6Tn3WGA1GbRGgqqKzDwBxLmqUhxxg5cmAauJ8z",
  "key5": "4QaSp9zoyHHEUY52FSCbD62Wcf9pwETamXuCu1tTYbSnuPcW5Aye7LwCWk7zsny2Xkh15yT3t1xV69YvvAzLMfSb",
  "key6": "TyyS7nQdcw2FeaB4j3fq1vgaEdEADDB4awMZzh4psehrUiiYY7jZ5jPnhN99w31ygkKaHUtQAigTNVhauP2FuBj",
  "key7": "41ywZJLH43U8yfwu7ySbPKSH5ZuTrpGbS2XyAWw8gjzR1DMmfVW7Gkt4tH1Sq8ycvzTchLaoh1hg6RtM1KASZxZj",
  "key8": "5W47VaiQWHFiC7yTBYUEAM1TBUXmYu2Qff8MZRi1SHV7hARMrqFpkzacigCZRxeCtJA3TxYG2BpLX2CiFtvh2bWX",
  "key9": "2Nvitw436ZDQWfz79uAyegCPbFsxiFLmPhhBkF6HZ6hhgywHvMyhh4oTyPn1jnHe1GnPAr8kJLhCG7NUmmPyPFV9",
  "key10": "5Puqxc3dRcsv6SobCwALsqyer2LNhfrt9fgr5aVjpdhaWbdmhYDJMPirUxC6pEmHrK9MF1t47vqjuyW7Z7ZRZCRK",
  "key11": "4yE4WYUZvZZjhTh2cfY53pmN2FiqvrYkvRizEotYyrH5ZK9up7mSJ6nb7uQ97GDbGCcsFdpA9HwhMa7PBbbk7Za6",
  "key12": "2fC9a1qN3KA31iPpRR7E31qNxGAVHpiJZq4euunDr1SSVSRDN3KPzWzQsexvwDrTZ19SYz49LxF5KQz4VYA3xssK",
  "key13": "2zweY8ELjmAYjfQSQd8hpDu9osXp8NBWWd8wLg1JPF3k6KkPr8aYuYvAAGUgm4LAC6V9sziGXzJXv5eV593wN2eh",
  "key14": "246sdRwd1QQjRkM3KYEjJaYB6ESoRJRNyBJrdEEwbL1xb6vyNMPvGLqPshd65CMm2cJTANWSB8jKpe2wKAdNsdXY",
  "key15": "3HXHv3CKDZt6vVVN3TA8Pxfw76Rg9rYeRqazd6LJ5zUJfHexbRA4CSTcFqbuCmUQZG2P1DTiD1r5K4QTCXQJxbPy",
  "key16": "3S8eBKbPTGp86dJddcDZoWfkzvJCBM9aRX3oU6hft8g2YhRxZjynPErbEVY1G2MBWHz9u1Adzb3erBoi8qrP4mEp",
  "key17": "5DMsTW9LZkxSH7xBC3TVEQ1FSW1ytBEy4Ng5DwaqN8yrGtztPwyYYg4RbUFocbbP3EeeHVuExZnZ8TzMP8ybUNNK",
  "key18": "3qCMGZ52RgbkP5jdJSUc4Cu7q3irubk43a71m5JMb35LeKnwBCQZnfYdvgAXJ7nvSA1h2r5eGNoZF2ZjiUJNsiuF",
  "key19": "26NqV1DibdnPGR4C5dsuz8PsiA54oVhHuEvD4gZWeUyCPgKCTjLJm6jR4RFRF7HzxN1yMqmhJVsao6vyiEHjJ9D4",
  "key20": "3fhjujF5rtV9jgJhW8mCSRpi4bb5dp4HFy1nSLZa3pBJ2RFYmjSxEDPMAWAWpynbomKqQZ3uMs9TWzbQPHD2XEWU",
  "key21": "3W3VGNJere7xrDpK6YQwF4is4pox1xh89L1ZawzgYseHR1y58MeS83mSz5bLK5V7rEPFtUQ9qiEXK9jPLwBPX9py",
  "key22": "5pus3CUzXftKhoPk8WSJjQNrYu9nQfrUzHLf1bPYfH6UqFqz7cxWNxyCZQuJegWiQBvyArEB2Bu6XADorqKiQ8y2",
  "key23": "5Y2LCksqD1U4dDr1vwy2gSA7cynWcrktd6W4SujZ7RN9ms2e9SgoKKvfiHetzamKEkaa5dB7v6k1fgyZq7Jp52jK",
  "key24": "4WCZRy54tnvMDKU511pJZETpYU95mTtektkiHT1mCEpkyU2KHHfGM1NEJTEB5e3UweWFPfktqVe2xkGvt4worAkT",
  "key25": "AB6D17NFjKCxo3RskuFoTgtVsAVJRKzkAaDoe8iVMZBJ122wBgq5g5YwYn8aXdUFK2jS3VyxsqsHM9ye7DaHxxp",
  "key26": "5UEZ1hZv9A91VLAqjXx6hazPbkygeJhKzKU3HHXaGeX7NHKaZiXKPJwUDBRGmWtauux3hNN7euXaXLMgENwTqBk5",
  "key27": "5P9ra72msQ2G8Y3PBXKdwT6hNJYigb97L6Hfm6YNwAiPKm1wuuEj3GJhRsrpU2tLWQPXS1dnYvyi9MrfnhstCuP6",
  "key28": "3TjSMbDS3wih6mHJLe1EWn3iozYGxActxuKN5GKkeGJpks52WYUqRnVQxTxXmLS8cGWkWC3T6UC3Q22ZxCbbnBpD",
  "key29": "3ccz466ACVsjXDuL4AQgkiGLmxSjPwNDhEz46Tr6uBKG5BzUKH9u9uadubCqyJaoipUKxjoWGuiihmoLrCQe6km2",
  "key30": "3hCCZpD7R4rhTVtVu3VKmvPzjivMwNp278gywbiQJhPoqvcPw5uDY7xH25ZaDuQJPciaCrZfSLpc7BpCgWvayBUe",
  "key31": "3Acbe5FyCTBGqPs6rxHjy8Kb19RH27zjgcoYxF1Xde4J9i6SnX2LuN555AQdbyrcgb2EhdDjWEJR6UaVtXSsuvow",
  "key32": "NCGLs53VChtccc2QyfHKsxXYAa8pmGzR3of6V4QF3bkZrG3roBf6eFBqPPepefENHXPoCHZG2xZp3kGm9jaAmim",
  "key33": "KgDCBeMWHrY7PgQBZMJbpVGbThta87QuanVFWCoxnp467Tp5irJaatytUcA1YKLyGmMzWmgAptBodkC9URH14Bb",
  "key34": "4sbLcW2QnH999PDmrZ2U2H2t314XbobPBFxNTHnenQtsA6s9Qc8UHsJ4wQ9vS65owQRPBrv6yPpfvTmLaXnd3d7Y",
  "key35": "61KB6PECxPgs1fdVxEcgowee17oJ7yuk4uf962DHUjXpYPd4QbLmzkXS2yi5M6hsjfVW1MdbhpgLocDZXNHDMmK3",
  "key36": "573NnQG3ZHYWAprJHKhEHwM9YtwuVextdVRPuHzaGsNgH5ND6hW5MYXTAe8kc5hjdpjdHgLnhinfa6mJsB5Ugs6A",
  "key37": "2BbRrrpYCSvcCB2bXu1R7FkU3oPbk32x6t8UkovNheXwKuc1KtmLujcgURjRrzamfj9HbHa4ogx8GJELvTCqAPs",
  "key38": "3FGjSUx6pD4G6Vm4jiU7PibbhhKwxiACcVRj3scMMDSZDa3xDoEXhsxHzPkmDV75nNMofNbuisRQmWTQiiSLmx6x",
  "key39": "3cjYATK8axwfSGPd6bHFmfBuLMjXKe5HyYo7FWg6zYzLmt5T5VYMT65AfVLmqvMzjHCVsF83BnKLHozxtPxsbVJX",
  "key40": "v95bYHzjUMsNh7Qbc17TnNn8AVe4hCMaSi2h9y9xJ8ym1wugB9bdyNRR6MuFSq9UigGWAXg3niM2zqmSpxQr6zh",
  "key41": "4CzEod1sexMd6WkQbptAqwdbBfs1ewzWsXcTg8GSPuy7bNnFcVEKajmA3ZY3CcnEdaUEifyAF5qUr5DdUnFZakBt",
  "key42": "5CHMe4GzvD2qg33sByMGT38Qp1d76iAn4rPDrDDZene7372Swcu8sG1XBTMBD2wTYCqxhtNYCES8xfAakhnAhrfD",
  "key43": "2drPfDMex5dFB9FJSKyqkQxh4Z9qjLp2WcrJjr3qTexy93TqrAuHWi1RGti248CrkvgRHv5aCQaiVt3bex3u2WB4",
  "key44": "3SmLsWWcw7PtYA2ev3wucsjJsvqAnZvNkNJytbD3R9nwzbtXt9WH8iZbq4YskpLgdZdxZ1BdwcnKYeQc9vZQnmxF",
  "key45": "5Jw2XaKZSafUsUNX8iS2BpacTYvYgbkyyvZp498XQucXbeV6FBtBhx8Amujwu5MPtWVXs2Wu6cYB6Zq9tcpxVNcA",
  "key46": "2NHvFJz4ZtWDgwyTvADhfvKbWdFkA8SAyvYBiBpQerSeY2EuMKFdDNUpoyTv1A93qNZUXxTqwQJh7gTsNZkZVmSo",
  "key47": "3PMFiJTrFkTAH5GSGTo1TN73Ay5h8NSPNUi8FnytSLtQ7u3MrZnbLEa95foWVhZswBiBdqVvDXyAk91UEWvDP8eS"
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
