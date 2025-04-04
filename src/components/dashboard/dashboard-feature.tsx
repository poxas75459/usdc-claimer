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
    "SoyEUtQNhUEzhRoagMfcEYUeZDPwny22DcTXGC6GWZRko1Eoioz8LjEvJw5W8FEXF6ZeEEvHsDF6n6vF747oetH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wcMSXepaHCJzTsbZTU8yuzJi3FEtj5tUFhKr2tNj8gd9Tq7QAYvfA5fpFwbgZBt2dGQycRKKWNjfrRYbckyCaLv",
  "key1": "24XFSDFUScaAzTAb2ajqeqbVb6FKiAqfQ5skTmaK9UoNciZ2x1vrLMBjpThqCVJiNagVCQqfSsrN7ZihgHyNVgNF",
  "key2": "2tkMerZUKWvTTUT81i7V4qZMdaBdh1yLH1xpMAph5L7nJHWJK1FFv2q9dWyvPia1Qwz1yzinGLXCDCjVd6EZyaTS",
  "key3": "5p7ziNnnGF7s1BAF1HRZecpaKkU2yfkzoyrxLKZy7HTmrqkKEFLPiW336XqcRAru8E294omSD7JRddmCUr3ZAxHk",
  "key4": "2K7TwLyKV8VzRV4UZaUicQkpqBRiT7zsY2NNGtL1PVFiqAfwcRtv7ERchYVfVYzfLnkxEe1CYeu45VmFkfEmoawS",
  "key5": "2UGEDy8nJULqpARA9Fqf34nuetXfTW4FmM6APj1fg2Ke1bsrqJnVPDFYn5Lf8jRzsznZZ3tGbogVUmc6D32cSCaT",
  "key6": "mCxNuyk8NpwTNRGuCLMS4TJUy2LiCELhVFwrbybwCGDi1g5TkXg7PcxhroGDmid8manYynTGw5AWd6NuSSKoZZ1",
  "key7": "662FkfubbHBNF3Yq2X59eaVSMMhWAgEmSntQEX3vC1ito2gVrgMBksGCY7LrhjMybQCSPPk7bFbFDZmzZpw8BxEM",
  "key8": "3aZM8yU43TPTebKDqRucpHp96tpsmgjMCHTVUDLpDkJU1LPBhiQ12QAYR5CnEEVvfvKK74toSPmrbRoh64xGdraz",
  "key9": "RXrQvi2PXZD6b1NkHYoTUZTD152ConcfmWvmV6a5DUEbL9wgdZKmSssmWviLbeofYScXg115wQXdBTuKfnK2MjQ",
  "key10": "6Fq6vKZoZ3ZdZnGr8v8KGWXHNzTsAfMpZavS2Jw4GWEUprD9ujXh7gn1XBkrma1RRd8ExGnbEDFb1w3r6m6UjVb",
  "key11": "DhUje6nUYGqEpKoyR1qYbVZR5X3xrRBgfBgN3xKBDV1YDxERqzYRdavhPBPXgtdheDgpxg4hTZaLigrmv3JVYMX",
  "key12": "26ZSsFBye7oMbontDxCcVi3WWUaHrCthmEGdFwkwgsRiCGmCRq6mHS3xae7nkgHxec9nb81T4SDDpZghfgz7TvMF",
  "key13": "2N7vc6C41WSWTgdrztVKfmKDgcVnbsSzhDLNT8bZuTZzir28sKWjKcbGoUjKuQYkBJLLeSSWn2yreLAnwKfjbRvw",
  "key14": "3MAT9M3qKFi2d9RoKVr5c2B78wjasoVHekdXFCXJbcfm7JiEkWMTnWVDHjGoBbE3hSDQ9V3zeix7BsqgLAALFrY8",
  "key15": "4eth2abgNte34cHLzCTsD6BtbvQ7Y5JEgqqSmGTsdkBMa5i154wtKf2jmRFwMrK1YAb9qr2i9W4PYwHzwipHLXJu",
  "key16": "6XoSmqj8Sisn4qPA9fQyFCCSR8PZqn8AwsW9Kc6ugMDS8wFUSEfJFqsysNJdDM1bhB4TKs4oryURyihQ7dey1bh",
  "key17": "2SjyoPRe8NgLXcERcssytCAdkrsKP5WFoRnYH616VntJRR3FXJ2kgcZ42WewCe31uFheKWAwM3qJwbqNFdXFs2iu",
  "key18": "M4xciFKpuVv2Lo4EZHGHRn25J5d29q3gAXYUZ5h76THo5TKCXayJ9mGJ7UPxMx4VLH9nL8cKr8aNkbZyxemY5EQ",
  "key19": "3a42g5rcwFsqfvEpL8gfCtL5eB4FUD9zgBJa6njV39qvEbkyNCiirDz97fET4VU2nkPTuoFaQWZmEFFmHmhyiRuJ",
  "key20": "2u2jHLremvYyC5xwRFBPa1N4N6Mz5AZM8q3wG1JdUSHuSCVKPapCyW5bumR7pk1WD1xeQh23UuuRgDYeuvS2DL4B",
  "key21": "Z9tnu8xo3YjA15HzEttNKUn7CaG5pJsnTG6vFRqeQ6tgtRZKYXVVDrmHoAvSoNf9Ycu8roYcuV8jV3npabJLTpm",
  "key22": "2iFfiULB3n8TxohBTRcKtQWLSPGmW9HzABKx8B4C69EQrCReEJuQ6Gi8WxvCvVKvd15UsGwduvCM3tpoHo8QhbMm",
  "key23": "5iN95xVo8jxwqY2WVseGD34GMMBUr2fg4vWddkTTm4WHCnV3FsZz3xNuJKJQx86cYHNwkCttnVXWVPiKhNk8Qd2z",
  "key24": "sKLdq6jgGqYBvgxA27cSE6ajo1yrEmf87B16y6qYbAG2xkBice7bivVPQDyb4BtVtvQ7BongZ6YrEFLQ1jBG3KL",
  "key25": "2SkwuVruEuYAsK2VUeVA3AbBCXYDaX5wsBHERVBihU3t2kgUNdSbwCb4S4czUh9q2WLPKqPAgDQGiSd9FEhpSWeq",
  "key26": "RZ2bbAszMAtBPgwyuj4aQQNSgFFaPqqU4RFaqGRpKJWQM698SVS8f93EoiN8CZm23g7s6PZvyGwHCCBPUZFopA2",
  "key27": "aApkP7NQ6ZkTZgtmL2e2STLzEjWgbj5mncb96ygkGgxArh5bhCGKaJpzfxCUUcvKEEwGPhQGLVuScu9tQta7V5d",
  "key28": "3yiRzEPy4KJA5FNuZ2kfBEx5pD5PrDTSXgvx6qk7jbEf6nqVKWRbGQsAx5JzXicFDh72aJ8e5uMrRqV9kRsf2QHt",
  "key29": "63khUwtw9MSDMMFLLm3h3tQmJuYAjpWjfyCNKTikNa1fWN7esK9QpLwGCTxE5FQeWZrs37FwgXxcPQPLMmFXwRcx",
  "key30": "5pbwGYfrD1CZUqeegCSxAin1ckwpz7CvpZgc9EGAoeC9NzsLjLowHGrQYJ8s365XHMxjsjeD6L5pFVNhpjcGw8Gf",
  "key31": "5hws2Umnyoed4yYvLwNdij9JkyxorWcY1htxX2pkBTGXi43D21ZJseZENek3jyzNDkWRquG5EaPLW9CvPdTqvgv",
  "key32": "5ZfCVvVkndqavNWvHJTmyfECEKJxZwFMsXpmfnehvKoMQByyJaJTyXueszASbWDnta6c1RAuBR7msRCe6YGzHm5r",
  "key33": "2ij23mt3U9miRMo7cC96FmtgBJZMDGLWoxazGwkBPMrh23GKECqucVw2GpFp8xqG6RMf8ATL7eo5Jh7NjRnnubDq",
  "key34": "4s2LPGk7B6eqMDRradZMD6Ymn3fXtnja8djjR24d5pAb3QF6ikgHUTHC4rciEbiRuY3vQTksuUoV5yCLeqxraoFa",
  "key35": "5u7RC1KobtLxe1pt3nAXDPeboZCCx2q31XAygw3czG4zgDfjFvBAswWf8LtMrAFBimbFXERMY22QSp5nvaZGptCE",
  "key36": "5WtBSPn4ZpzoXfkqNha1zHMENR594ByDhGGX7tAdUgbVTWXto3zizg6889QkpdAfjiMWxC4MRXQ7bXxiESz2LZVG",
  "key37": "4CDUzKNwQ2WLAeJYQR4Q7bGTMNcZBdVsyRxXPhXqTnRrwx9NKZsDm5tmBjEGP6dQQDcQj2h161e35PES7RFkpu3",
  "key38": "5LC22BAG6ykvFiA9gwiPm2Pc4uN2fY7QdVQxgAVyLQPWAhjgwPXHzjreDjB7iLW52za9yqmtD7J2HYK29oVrKTe3",
  "key39": "2ntiLDWQnpnAmoP5SjiPTL6DSVNBKG865EYv2vqkkiUTfwVBJt7g9MFr7BCPLkvour9i2dg4pXu7Zhv1ehd1in4x",
  "key40": "aHSfiXW2PegHt5EZS5D7ePkA8aiAY8q6qYzac5Spcv24uhAcmFzNoraX2K3cJ3tzcgyykwxxrktTR5MFimmoJKi",
  "key41": "5orqAr5TCSzfiJBhoMNV44Q8ATfCEomN69CJVK6JERuk4BBwPqJfRNn1WALLCcPPrqY8WnKTnXBLeSecDyUJCHC1",
  "key42": "5sXuvV5xLPtLJcnXbVSnxYViwkQJyUi19sia49yH4GHZgtWiz6BqXwMqUp6gC1dzn5fgGqiWC5AncDNtN4YqkuVi",
  "key43": "rismzrKmtHevw56wbGTJmTRJUdVSFi3KAxmhkR4TRJ8LVvPbTiousY155hArPk3RDgVdkcGSv6ujQbhaLpyexNy",
  "key44": "4nxgw34FpdF6XBr54iwkEZyWtdvrJaXU4HaPKYfKWNjXDbvEb8w7HPqb6ZimyqNZHoyxa2qADSyGGPDSCvg9Xe3F",
  "key45": "5utLPjPn2DBXditXYRYirDTT1j3EM8mzNF6MKjLMj4bqGnYFHC1d8Lp9Xx9E4GLCmM79VYn8848oiviUPV8tPaCB",
  "key46": "62BY6EVk9hCNbQWxVn3ehhVWS5tGToUn6kjcpJ1f9uYJw2dDvp8rsv8QVW8gV1VgmWvdJnkt1Ni4hu5yysftT1Ei",
  "key47": "4wEmZD5zgaRqbHoGpXWHfc2HoP8W32vzU86o6ypv84o6G8zaB24xatPeUnkUaKeWUU93xTnUArHfZLH9CKywCdtS",
  "key48": "4J6SarBhTcqvPnDyyyVEudHyXx35J7xVYxu24Gr2xRDx8ZprrtwhAownWBNJxLyjceVRctHXCFtMunXQgNQhx1s"
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
