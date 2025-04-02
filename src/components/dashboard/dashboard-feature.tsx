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
    "4iYBwizo4cZjtAajN2HuYhcDyC8ZscHbYNyJurfUpwTvzi4zJHFsdypqpNksf31Ek8zQMNtYYBh1EywgpWBds9NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNbV2vxKAQMgRUiYr84pdjMxVgpafiZ34jTE1Tf7kKaituDBPXwFVDAcdxPpkMtogv8jp9C8vd1eub2LFM9FW4A",
  "key1": "3YpPPsGcoLTHqnLiDTmXX6Mu91CcxkjSR2bSoRA4jLFcPJ8pCauSHpRESAVADALo68CBuTzmWTrY6auRHiCNwhYY",
  "key2": "57zgguPKsuqGwaaWkZ7pqHs8AgZxVduGN56tdgWjEteYoomQfd56H3tsS41nV3iyZC6ShCx5ex2K9cSv45pcvZtc",
  "key3": "icH7nnhH3ZasDE78ugm1H7Q492juZkpmiQ84n8xUDf1DPVW4xNgajC7HEZwGaUs1n87D1NP3yCkrLotnG5a1bJN",
  "key4": "7AH4LUKs34e5WQ2SfsTq7E2xRVmqcpNYK6ADV3QqmZiCDHLuo1ARzffvnoZND6cV6KxXwh1C51mBXxaqU9zSkyZ",
  "key5": "pTCXcUNcxhf3TTg9USZbkyPUh5M2iYY5fR9t7sEn7vSLCYZL5LazJ27R5xjjUUDW2HuDchnMFbqzmJMpwyg31fz",
  "key6": "3tHqvEnx9JDSrGYtr7CriZiumW8QNX1FACXq4e8K5oevWFAFU8dxWXfnN3vuEeRTgrxeY4kwkZPiqpBKaq6c1okH",
  "key7": "2kXuKKwRLsQPLe1r2qwCo1UCesWCZLN47qocfqGyjm2HV9XtvVy5yTzUxBN5ZY4XJ99xo5Geq2zDXWpFos5owJtX",
  "key8": "3tfg1wi21nAp3rPsorQZz8hBZYzvNw9mPE9C9YavhHNCnB4Wkh5VNSn8nGGGiLbnq77uvnBtE8VULN3zeEcA8BUu",
  "key9": "2SHrywmhfkiXQApmHPXy2VnTfGN52UfBMvhp6dsLBS6GxAHQXoeRN3BwJjakzNqs3BcnUVRkRP7SuQUtti54gVCP",
  "key10": "436Yb3Dk3Le9nRxz6kshsFnYyZrc8wHtqhCLfQaDrNQvXQBwdboEQGvcAWwVE5fAG8ZrpBv8F66TA5xbYv1Bnk8m",
  "key11": "5Fa4vtiJHhxFFz55SjVGEh3byPZnKnqmvQbtqn1JFGPTaex5rVWTH6n9GsycykPQ7NRWz8cLrVMuYqKeLeDnDYZq",
  "key12": "2ikmi1YYAGMTTGJDYux5E722qxupygCiq4vCXRbS32dm1padRgdeyoPHReqC3ADpZjcdnjiysegL61L16n6Q5hoC",
  "key13": "4GpWzvjW3tazahtq7zkLjnNKN1Knd6uCpFbKU8aYCmEpA6pb3UKBwp1ZEq7gxvUwVkbhin9VpBzhmr9Qu8bWJrp3",
  "key14": "4siyLyeY6ReBjqimYATPmjnjdAJaS6Bx275Jx2vuR29JxCMpahVmexAm5MkYWUsijjsPpDFcWVcc8yAaRK2T2kqM",
  "key15": "5LXiSL7p3ghESP4jA2Uv2bJ2Q4yB2MF3tagEfSXda5HcGwmxFLNjUwv5gPaNwSrGAyCD8kj1yDZXzPCrwB3dr5Lq",
  "key16": "2FsNFLW1k2bUiUTCaDUjtDYHKpdSp2LC44ukqbdzFXznvrSHN4CdfdxbMXcKh7XpBTGq7x9ZpAMB9hPmyQFHPC3t",
  "key17": "3FaLGb4zNtwkrVT3ikbV55AqbrmiMfMytYbDYYNBcSmqzVjeJtfrTR1Fa7SuuJrdn8TWPEymDpdKQWoKQgHx1w2A",
  "key18": "3QFuMKrDGqdo8X3QzBjvmKz84UnxU5o5ystiE1zCjecu94LWF5ZtKXm49J1SszQQc2NyJb9yvkoQ447aqWs2dS44",
  "key19": "2SiD7h3xEiDXamyLL1am97yi1Sz5QhAbf4qpKiUuo7vPkaLjuzVby77SkiowgbgL4mVYReM1bkxPc94ZJn4xg21Y",
  "key20": "2gCoQERx7JLJd8YBrcW31nv6wfz1q5zfZwLxWuNAstRWRME9ULr7ptti4EH1N8nCEP8yyXkJXD49pHyfZQagsDMB",
  "key21": "4Zgoay9BNbpF1oc3wE8MgSo5cv4mvCXa94EqNbHcj23FEus42ysJNZedCcsGZcNEHC4JW5SJfCj3K1HNMVJnK8TU",
  "key22": "5yuQJofm3wNBv5EHvxLnmT455tzi5DEAhwVBDx9QMVjcFhuQKLX1zEyVgonNUHJJY31N2wQnv1daRoYLBnZzopbT",
  "key23": "2dUcjWwoH4hmtwvSnEHeyBhBjgwSJN2YkMphQiVJEBKBaSsgajBTdutYp7DD8nDw2jueVP4sm4EoGqkjUjL7Fe63",
  "key24": "4yFPfXPb1nu11iGGpoMGAiJgwMXMp64Pbheif4h2XRT7gQrqeQkTXLjJ9D16Bf6gKux85UUMUfrSGA9zqvtXgRcW",
  "key25": "4fTeBVF299WuF9tPRS7uB4Z5XobKf46UWkxjHj9sXHf8c4rWzu2xCtyVKTESNXCzuWX5dknL5bXNtDL8KvbykqAV",
  "key26": "5PCyT645EnwRdMtikohJnx3hdCogUbtJ4rW58wkQojyCJM4GZAmVexeVuaubmAzdrri5P8FEE2Fg4hoGiA6vjA9h",
  "key27": "59UW7ztpqmi1VPZYRsKHZ7PzneMGMkHN7iFeJgnqF3D5zobF9bhrbG62Z8x5ykjC6ssrHzn7DHpM7j1iJfux8akB",
  "key28": "gKyNqAz9mjku1SMXKR2JuzbwYABH1q5doqwEiF264raggceEryZAqcZHW3BE9JqXDtu2Rd9i5HRjb5njGqjWjdn",
  "key29": "3GbkWKSR7ZKTNGBs81frejeu3is6Cua1dHYaspmiv1Dhnj785fxcbKXqXbWnLyeZMMgYX754r6WGEvrrzYm7CM2K",
  "key30": "44G1xf1s6B68md9rzHy35XBkiz6qtJi14Rimjuh77GjEJBL7PsYapi9BeHVb6bXVhK1WBCAtnbW6Z7HYhLT94wut",
  "key31": "34SyoKpyyxeZVdtPSQJ9WYs5k3myNfZZG4hDEAa4oDDTP8KimohP1fuSrxoAzC8UJGBx2KVkFT1kv9DHPTdrCkLC",
  "key32": "jxh6dXeFUQm1AHwZi5uaHwVUW9Mojuf1kUJk1yW32Q9wD7xFdd2n4ZgzUxUP1EykBcviPGh3wpoiTRBZtgcDpHs",
  "key33": "4djadV2618uwFRaHGGQRV2kyGVxQ9R2psWG83X8dtvZbHZ37NADraYbPUzHmNGvzd9rkRrrPrUjPQpjKofbGFFTG",
  "key34": "2tXsk68BZqKw1xTTZzUMtqU9wizwQPhFy1tJVr8NSrZ8JtYLuZiXaXcWfqFLPoABHRzAuV9qs9huL5TUqMAyuzyj",
  "key35": "5GwJNUAo6RH2ffwXDEVpDBYZS8JAgYv4KH4a4KavN74EcaYw4tb21bYKQwGmCK4vZz2TYPCndp5tVuxbYDfmj9kq",
  "key36": "3XmBDCBM7voPEhR4uUfTEuqULj575DgPaECuQxUAoXGcR2d7xNuGqMCRaT2Kmo6FsuPHcsBFDH1ykEwujyYqHFT9",
  "key37": "2odtGzmZi5kba7x3ytie6qRvdcWnYPtik9dFrPBzNMx3JXZvTJXT58oZu1sP2bHY7NcyVdFgqWdq22bP5yzmeWp",
  "key38": "5ymRYqXH8FfXiC9DTsay1Pwhs9kdmKmGqHVpn7WbSnnfnCUSEeQg4XFBKpWaTZyJJNFXBw8kDApX98eyJEEzGK1i"
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
