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
    "37ydaWqZd1KdDw6TbeHjC5NokiQZ1F5Zm7eYUyYQ8hpEwPvbHAPGrWShQfbZ6CxebJeHJX2KFNEJaDR12UhrEnuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qXBd6K9BX54GScvZDntvLgcBkcJS3agmFKYnCpS1iya6AF7RdMrEMvyYqMvGBPJqL2Nav8rExysKi9bQs6Hdt1N",
  "key1": "52MAJ6zvVHCsBqzBGwELdJYR7fZxxwVmqDktEY5DnpEXZcZRSCyvqpDSVbpKGRmwmzAdBD65Vdb2BjMqS5T3GPek",
  "key2": "5tMcz3JGvE9ZSxHWTjuhWN3yBpHEMrHRg9MaPn5YSEuh7fityqtkswX25FHF62zETWQ8ncRRnwo6kPLA95ugWysf",
  "key3": "3h7wEDKvpLCGihe5fYz5W6Dv1Ma6KKZuoxiaPSbnSSvKahVwF7YfnvoGWihRZr7WxgrKAdpF2bxXBnwWwf8e7BCP",
  "key4": "29HsiRx4vZWCG25gFiNUjaWu4n7rmc8fSZwbSFFUP6NWzkXDFPcDVaSBnbU617b3MvheKK7Kuake2yTVPtgCGUYH",
  "key5": "5TcHUEX3arjXNMJFcYMD3smuaQqy7K45LEjWQ7jPCTSo1PQ8nQwVqj1LMWYrkXN4QxaPxSZyEhQ6eFVwFWG53Zwd",
  "key6": "3LoXSc2VHv81238SoavJoFG26LXYuQcMsHyHVPBbGn4d1ajqKBoGCDL9ADGZzn1YEEYq7hQvPcJdztxkP2Y85AQX",
  "key7": "nBcx4uNfhCbqRDq2bxtrqGZkNr4qZh2fdz2bCJ1XYifiQMCdPYYuPJCtURtGXcKaDiAZoJPLjnXyri6iyiwKSMa",
  "key8": "5uju44caaFaCiZ4H6KXS2ydQUfVLT1b126S7tW4WXrNayv1Uk2gZzXCPUtyDEhFyPrg5gAFfxPr6mTWVaZbWNQA2",
  "key9": "ta7Ak4RZwsTMniah9sEsyo2MwQs4TTiSH4r5qC9jivshZ1H7RzwcoTJyCxhdeqx7JDQMUjgJoczJXAq4HruQvhk",
  "key10": "5Ho7SGccy91tsA7cMMB9KhjdAzUmoNDv7HMLYticrvmuukWuB1LL2jydnzjLuP1NvGXfmNd6SKGgywExt6GyM91L",
  "key11": "3tvL9iKF6gFdMa4w8yiL3VLEKwcMfUzRpY1NM2gVv9ckZe7JN26NYUNqjGcFnAybhDonyFvxAhsQ7L4Di3TA1SLg",
  "key12": "5LJjNReyKJzLcDBv6pWKKoppGv1DCU9jBFQS2uMSwwNoUDzsHMMDZ2qHJAAPgfb2zzkSfuhLwBkT5dxGWqy84BYk",
  "key13": "hxUJPS3zWiK9YEaiXTuv7cVnTcaUpxRqWfjVZqAqHeYRvV1625fAPogjkA8pXpQsh5qBqfuceLTZTEy4b8BQ7t5",
  "key14": "5FcjscRfaaqqDfsBVxJN9JUh1QELaSDBoDV7bKaiFU1VmVbYuvpnxS8t69t5ZcSAk3qt4ekaGQR4SwK7AiGdFrzp",
  "key15": "5jBYwXfTGPsJP1Up6wqcxreALSNuCch2ijvbRin2v3Jetamb5G3humDsAyb9e3JruEaphKsPGSsVv5v8eqapXA56",
  "key16": "3m2kTcdr1JMd9LEdUNU5xkuxxbXXJpqyyCfrumh5NgFo3mTSSWii3vH3WQsy9mc8iExBw5Xf7gv2PTNSUKT2SMr8",
  "key17": "47TixSSuRGhY2WK3LgywMqNtPKvovqvLcV811JDpfrG1JvqGNDVJhF4FxDmrpZfAyicRGq1kfNXb44ZgiXagRSsX",
  "key18": "2gjdtBMwqERfkY2uTbVnt91C5pxVoJgdpiagDBv7ex9PHPWCT8MfbiykSQ7V5GgdevxV9jLwBoaKr3WoUFh56wKM",
  "key19": "5qpTyfqTANHjKa1Vin98ua9Totmicft7tPwuA9nLRoiHjoVbNmFGbLSXTP1xFfVZgoEAes8TB6zfT8fgeDFptxHV",
  "key20": "3qfaVLLcZ4bcn3paAzj9ZpyL67aMPvmMPUjAPWBAWEvJpkVx7jeVFUCF3B9Kcf43PRaX1ShsEshxCPpDADAmsmZY",
  "key21": "4GQjNMEbuGzKkFfjUHiYESFi9N2kukwiGVu8mLnjGDHARy5Lo4KiQSJ7VehLGuzzsMdNeGpu1a9PhjwqQHN1NXts",
  "key22": "2ga2r9oJvyg4Mbf8CQrWjb7RABaHT8JPggyer1WGGFTv5FauJGEVNpXrviwKHB5q6sVaVK3VgoPxyt32Dz3cGKwh",
  "key23": "5nVh6R4SRkg4NoEJ2G1r2KR3Ld53HiJKqbNpVCZ4ZhwtdJF2meekgXfKXtULAQqniZcocZzm7rBGovgpY1LpoAD5",
  "key24": "3u4h8yEvMRABnA33sxFPez2a4xHYCsFqfNvuW4Qzbfb2v7kco3Pfpqdfm5ejjKbdu52sJHNKMZSypSt1VewBjMir",
  "key25": "MpSHkmguk4ANSriU4QTerhuBCRSVQUSiCX9eejfagnnt3bin9RHCBPhx2KfXTzjXLYn5TMkoPWibdib9koTorNJ",
  "key26": "282ihbNNqW72kqtJkeggNdDaie4wxZvxDkrGGqNocGSVkG3xZXgTzNnpTeretEmDAkWqcPemha9HiGDomYEkmqe6",
  "key27": "5umQFsxDCxtL5rK2aiuwwdFtKiaUHJqMGbCkksxMh1YCWz7Qo8ayX6vFooZ8vvGeUatsFg7vEiNQMDtbFnMRtvfD",
  "key28": "35HM3AYWocFTmpTk3NksR6xFZfg7AjpbdrdwJuW19hjRwgjUtYswz3ah2vmEkbKLoAjD7DQioKdKtY6skyfdT1nQ",
  "key29": "5p22LZxzdbLRC7SmcYTLyPNtRNbWpibAPLKxSXXmTmChe3nMdx7ZEm2nxVcj6YLNtgzz8RiCJ3csZTy9NurTdEL1",
  "key30": "friEXaA4Kiv5JmdN7bepxj3bvmS3q16AiMWvQW2bwXUQ3YEdU3hynB6TzEonL9CLUKmj33PGTHX98HAFmAsstym",
  "key31": "2WzzwPxBPa2HXpbxey5nV2p77SJCGmeBsEg9XNGNk5zVbtyS3x7XXjdRLY3JjHiw1Gwc59Pk6irDSsZ86fH17ysy",
  "key32": "35FqgqxvJ1KDxbNdq34CDyxh3VP84paA9oRmXXKgZuhBp7eHa5JfWY3z7oCUKtPpc8nXPwRAa6oWwxU5RyNRRarr",
  "key33": "ESviiznMB2xLps8ZaR7ngejrthQqpvWEyKCctZUDG9o4xHaPFdRwmpLR6hHHGLv17VGgHNostK2CaNSyGheoLaW",
  "key34": "287qegqxRpfngXDfPj9vcZgm6EUZHWmytXYFoU6xjUrsfVwsbj5Kjgrdk9Rus1po41ToHwXywfoyRjTz13FsR9NP",
  "key35": "4MMqM6XrVp1ECbRC3mmDTNgLQYfEkGu6zdnhyyfoHXR7xTgTvF2KovZgVpoXk7WXTAcW1WMGkDq4yQVT5YNhDsD3",
  "key36": "JmDPkTBC6S9LZqjTx46SsW8tpwL7N5SU6GiYZukXdj7Sdawk9TUoNHACseyCe82KHhEiWYBL7x1623JPbgzBotK",
  "key37": "376t3DbxWd8H5BRvorezdtVJBPoP8K8LsPmgx31V9C5QGt3L3wTeiKiASp63y9YM5Lv3pDZJ5WBsDUfQdQhpvrDE",
  "key38": "2hbQPqMAwQWNWxAhRHicw9VrNfxqWd1aY71qwNpGSYf61yuu2bCWiucWJ5hUpH2yXUevohbgXaBxKGL1hCZGnJdJ",
  "key39": "4Xd9QHjoT4EaRVGboj11P1tnzSMNE1qRqYfrZduyMob6YGktNmzToM688Fcb6uhkyhGc7BKxa8bh9vwLwP3DwLZU",
  "key40": "4BRZvSCE825ca7tz4HHFN2JpSfse7rDoSVyhBgq8dUkZaMtgpV6MU2FbmyyUcUw4hc7h5hgmj1feMbb9UwkXfZYc",
  "key41": "2KWa9ng1fJz1cnDwipzKVuAed1FrfGRr9ejiQcbZKDhFnoNY4hncJc9hLG6m9Rqg8PoqjS8vw3BwyFJKBAb1eJ8",
  "key42": "4FU589meKUL89rcAa617oynuF6vhHnexVeCGJkLwMCKQ9eFkCvozPsPYZtKBHaf9cynWMLsjAafuMrDy2DC3VN9d",
  "key43": "ugY15C156ZYw8z8VTREgGc4umESh8donB4C6LMCDKMcQBMbFdZPZpXXnnkxKfmv6pCZ3ZwTGEqBZHuLiurjNCXR",
  "key44": "6FJExoZQVJQ5UL6NPTowEDwq4AUSot3N3UTT71upXijYpV6sW7kvVnvK4oHtzVs2i5ZgoyFwzBrxvFzPY1rvgSb",
  "key45": "Ze1GHZdGvPCfDVSWQnsLGz36VEXRSVN9AwwJw9F3ZKhcBZteCuLeDBiJb2Pr5q1T7ZhUvApUuyakpGi32EWJUZK",
  "key46": "5sV7DsvQFrg5h7C3uB62NjFdsTQAdLFyKNrLwNpH3N4hfwyj6sSRHVMHCv452nUSqMgidGe44mnydLKYVdDmzruC",
  "key47": "3jCTucf9pNBK6m4jG5jDNuCcx4AzCCNbqofKDjPyEkoPVXg73xfg4UPtwGjEk9HLwMgP4LZmEsBR2RJbhuiLLCzK",
  "key48": "2rkn1bKG4tkwt4QHMRW2qNVCN2ineL2JnRgg6MKKt37ACLKj9qYakNsPfMecpYBstpBFJPmmbsi7w2Mv3gqF9aRb",
  "key49": "5zvdWKVDRv6GFUcRpnBS7nZ8vCVgC7z9yS5eVfRt4CQEk84QKQA2aRghubxdMndH45Dz6aTyyVefQgY4jMUMsvFo"
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
