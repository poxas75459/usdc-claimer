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
    "BU6mTmCnBERL25YywJXfARXWWkcySYTy24PavLFSLgDaV5XcFygvih6NfrR2vEwWqVQuwUWN7xFneFRUWGGo8Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r5NmgbGSjqGoYF2sY3ZxusQghVKSNeHUWcd1QpmAF7jk96Kr4mkxPw7bmKiyhWxPNNkzeyeYrAo9LTLBJ6a7ygi",
  "key1": "5SWEreKAtDof5zjTxYH1HB2bgVBXK6nB8aSQp64wh2LjykWftuDZnht963haTvZSnfDZ8vCZ9AW1Z3kEKyJvMqTL",
  "key2": "3UNTtq9FX1fRmrUMs9GQTos4EJNQp94WRKYTCAX9CaxjhwGTgVGHjEXzuXeiqtGttqvh3iPFaBZsGYW9kub6f3tM",
  "key3": "4z73Jc9xKRfCMxMPPYpUFEq98SpfD66SgKRxux8H1MPuv6juG56q7dWBK9qvXTwgorjiVMtLshaF7BUcB6MyPK6g",
  "key4": "3quKDdAFq9SvDnXgK8mEiZwSD9MxWkTxi95rURFeM7udZWVFrtWsi9HTcC4nKaAp6Dn2m4HdnAe1svgHXxseCGZb",
  "key5": "4dXr1eFFSvnTqRr1pbvFvpQwcv8Db3HAaxUUimK89LuvddLMMStijzECQyT1DD429KYsPmi26rBJ3oQmG268KoAv",
  "key6": "3BZiLN3gQgPeKeDHumamL3JukZKt64DkQ91bo8KUK6DgaAWYjpUfTDL9Bodf9bERWYHZVadqJGd4QDYsgkv4UH9h",
  "key7": "26fAffz7L8ud5sg34vgYs1waxHHCdKoJUrQhpDiXKUE1gPUQPDSnS22Ew5HXQJWSeCFSyWFFKRzm7zp8qQtVzXLB",
  "key8": "5rKdkCuz8uML2ZimNK6z8ybNiaUnJf1NpuJQDPdTqTSiEAPTYhm26gbWPxsXGcxtdcC5vmU8KgUuHktWsPtzS3Fu",
  "key9": "3ZJewXzzxkHqtTtwmVymcbCGw9NawZf2i57gYTXfMh7zL5uGaA2trQBVifx7n4NfVdHZzvNmijoXcKjKtSVY153r",
  "key10": "4Uw55eSUznJuS8YimKSz5N5r1j2arKZKdXrrtQ3iWAKV4PPJ5wFyygBQGUwZMG8LPwPsr6wCXxhPxcqrWyevEuiM",
  "key11": "599jhnyy2LBMzXajpgwugjpmJvfxhv9JTe7YtgXgvHbhZ74CqeyjSxhDDZ81kGyoCnVY4f3L5jGjAH52aMmUpV4H",
  "key12": "5dVJSZEE3agRpaqssQ7FuEwyk2CFWAp2c2Zm6LhfVoyZp956H2NmZ1C9ufXTXASuHnCF5b9BLaxjd6fFTj8oJzZs",
  "key13": "4bSjJzRtoDFcVx29pXMQm2BgUJvnsSCF466DRkQfJNY2q58unHMGnKmacNdYQnxAsMxDgLW8ni259qoJnYnU1c18",
  "key14": "3JsQ9WHAGLEs7JuF5nhLukiEA9Lwz3ea5UrnGWcHA9ABdgewCf43bN9Wg1xf8c3qfj6G2UgPFBekAKvsiY96JV9s",
  "key15": "5G3yj2XiLa8VWgmXsEP9oxMN5vETwBgnxkSkahvFky1x2w1aqdHRzwKhMr71Y9QyCcLZ15xjJoCRCiq1kJjYpt58",
  "key16": "4F5x9gjHtLo6PwhSR7akKE2evDEG1YQqwDvqfk4ddH7xbHeEyjNht38EMxp1Qvwzoin1NS3pZN8qgHm4ugLHcTcH",
  "key17": "3HBtwqU9WBmxMyWsR8VYfKw9CETDZ9HYMryYeEgiycwEDS5Cpb2d3kXtZFQFQGmNBvm4MQhMsXrYRHjGzCk7mCbE",
  "key18": "5k9swDXtyLLtX7qbcmkYcDXdde9h3wyYDbXe6ctT5FYGKSeav1LE5cKn7wiW23adW6XRtZHHVjQ1jrMMQPSkEwmW",
  "key19": "348j4B7VJLMWf1TFHoSwMhdyTqXjBn7wACnBU6U8cARSRYanhDpJv7cnRCFbjbUM8x3yaS4bMdUHe2Q4KAzWfZz4",
  "key20": "xbE3eGsF8MP5LFgdyK4XNEkfhKKnwSUfDCFUujuLpPWKMSeJVM3LgXmEzG1RKTqDydxGGrTPW1PGCnnhLic4j4D",
  "key21": "4gztug9WwXEj58yKKUTggAMiRxoh3ss2FECwHCeLFopTmj47HetUNnXmhvaL8B6G4X41VyeVvpzC4GdRVHj1ihxe",
  "key22": "4EkTrD9USgN4iLNJ2kDmSMbCTQs93p9Gpz2NTAPG25P7evBM3gZbNxV4UNse5Ay79fPCBMRGL7vnA77WxhbWKq8a",
  "key23": "66y3QDvemTNc3aRWu4ouf7AxoAmontJHozCb1m3odB8tekpYN62JkL9Da7VYvAGpmWmscc48qXoiZWZRDU94CHMr",
  "key24": "66rFdYL4qmA3VnSDvBeetLpAcpN14UgWyVSVrhit184s4DAkfamHFdK3E1vqwJWePs4DR7UDoGky47mm13jgVcuQ",
  "key25": "2fRAvi1LwHBYFoA2gakrzmoEUhJFVd1zwNk7Knk6nUCvWF6cM6fgYgQojbYGWRN313Doqps5ty1hhUoz1WYxRxXi",
  "key26": "23wdfRpZucWXJkzRdHVm6crp53G9tDYktLAmf7K9rrifg2ev5Ue9L75v4HNd4ipXSxiKnV3w3b62edgZpdS9xSte",
  "key27": "5F2snNryB8cfLm3K6s5y9txEoxFwQzLxbt1jwHaPsveceeFuockiyiEuJB8EnBnqkurQLGSc32ftammd5yJqmJ3v",
  "key28": "2TfTtXoXm8g9dGaVrPA1PgStAJEb6btGf6ySt81wEpqydoh765pS1VfrnLFMv93FjhYbHNrtxSaUijwa1n3h4M5v",
  "key29": "5s2HQNBoKsFvTunLe2WejuS1ebcPo3io6E9FtX2d7Ja47uCo5WyZ1YD4vCBwU5oQkkADQNpqHc62QiuAgehnHTPV",
  "key30": "5umKPqEsqKSq1obpeLKDastM57ssppJMMryKYyJbm1Pn2cYAd8aZmhW5QowUDdKfEjE3Zcj3TsAHbk9qxAUnLZYb",
  "key31": "5fgB9ztWyPWUZVdUvRTneuFHQw86qYz8UFyxwmPXPXBjQs7JLhf1hrSyP4ei4WEByPyzVVQUsbvSqpkLZ4WiXd2k",
  "key32": "4yxTAAg1QrPCRBhsJhraHKMrYD3xUbGkjjyPdjQTyhKisNviCaToo5Mpw2DzRBWJD2HxCk1FPeTxYUn17k4iQV6",
  "key33": "nYtyA47CZ3u1ZSax5vAfPPZKE8Zv1djHHVSk6rFX1gVLvf642cik6MRj3wuTcmUUitsyxPu8sKcrH1bGJKEvJXa",
  "key34": "5Lb1nCeUQKsnzzHdj6NbxZVmNeUrKEHGBPPRfNPBbvmV55Y9SfichTvALMM7q5AWNdMPbbKoaPrRzb1b3PnzVHxa",
  "key35": "3Fn7jsMLDaXZ1mFn4utKYj6dz8kYUVWhoYeomv6Dysrz1ZkLpqjXGL4G3MmN9CDFRunHbGYLuYQxKtNCRHeLhT6Q",
  "key36": "38HHGaLQt6hiMW8av4Qqf7gfd6Ff73W4hGYrjWt9X5LQvmovHzS2G3MRT4HcEJHTgWhzW2D9xvpx9LMvfiL3gvFY",
  "key37": "f3aPfyDNPTx93s3egkHNCE8mgWE8E8FXif9YLZgwhGMEvVspJe271xxUyaabXhfEAHujZ1vHcmRBEEkS32xKqwr",
  "key38": "4RN3iKPRYN2cnjsnyKLNYua55p4Y1C1FAptEd4U9XrLeDBoKfnzRupYDrBShg7KF2RKE8AzUs2UoY9qLjgAWcMqV",
  "key39": "3WJP3MQbpshScsqxbw2gDyyFfAK2JgrUAmEMPLTxtn2drQwzRfeoqgW8FH8uXidqG7aC4NPnCR3QPxdgx495WofF",
  "key40": "3t3ewYGPu7jBeZ29Lf7zGJYHtQeWq3u7mxnbhx8mq6u3SRCH2CqEoFUaR1BVcsVveiz1kCeoU18N2DEwS6K7e8eZ",
  "key41": "5dpU4sFMW1juTSe8SZzckGXWQZBBVAgvrZQc7quKMt8yEK4B7XScuZ9nKQkNCXyR8kfuqEVzm87yZNrG4ioBB3fK",
  "key42": "2WXQDvzdjV5FzV4dFTMAjhgyj2Sr5VxY9kPMorED3cw8Rt1GwsM6a7xYMdybuPj5Up3zFyoDwHGNbdth6cD3d2vP",
  "key43": "KPfaqctYGS1Q8QpL3xwQ9AZ8iyxvWjaQhjmjYJstvfthsYLtBogorADmzmyusdzqVrTQW8JjStiVWiUYmHebp7N",
  "key44": "4Z4sfJQvDBd291XMwoQxukLUzMS3P3VHiHLGVNWfVq4ciPLFMVVS8FkYndGG1T5pAoZXWpBeRu1B1gQhy9u9UCN",
  "key45": "F7GeezYJxuAMfVpC6XpGm1Rt55x1zmtFddmuD6NL3kbi22gtK4ZFtgj82jyfSmUFS8NRvbU6mRRN8pmr2PdD77v"
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
