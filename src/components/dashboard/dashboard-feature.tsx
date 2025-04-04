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
    "5iQyKV38cW7KATXgC1xUz2hbTDLQDZnCwmi2u6xsSPQCdCeYJ2npPmasSzibqgFp1YcafB1eT16fpjENm2pZSp5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47NkhwgwYb4YhYRj6VRu1D5gtwepXLLs7458zUD3nL7Um5CNA7MpdjagZV4fodJw8G3oXeJFVa1q35U5mqs53UYr",
  "key1": "65jtty8b38ArYGSnG3Wt1yiY3b87Wrhtvje7bzpR9mDGiyXAFva6kx8MemdiyRAsSQLBtJuh2XqJYHKsAAMeNQ5B",
  "key2": "4quiubCvqXaGqgxuVnzsNBaNHV8suRdDA7rWuz8Dt3pkSKpMDqEXYqUKncPHidWarsivG2D9RMojQJAvU8pVwbNs",
  "key3": "4tpN4HpxTJuAEQjPnSL1m4VEXw3vbSFhmYw7CyJwjrzhieiQLx7JYXher869kQZ1f9fUbTddSovPHnDDTLxcibsB",
  "key4": "2HRzHZsvFYzZwZba56LeSiFi7QAdPwmhGTuwEF2WpB9qoZkk4PiK3EUVcspeNiyT9otf2FhSHCjiBfx2awrbzKV2",
  "key5": "24uWTmmYxNcg3JsXxobYHZrqyEWdGTpzCKwJASzPtVu6nBmMbd6NFNiDmpuddsTGg9RNELjcnMH6AHCa2Ug63zhX",
  "key6": "5dhx1UgUhewCR8ebgc7usemyhu5wfJvXqY4gc4b3SHiz91B1V9XCyB2nAjrruf8p6KM7sBDKzetAatfT5RAHBDWB",
  "key7": "3Sinr2PnoiCcRReGoiD8kduLfDSLDqcYeXawefV3v73Kvn4h2vSrt3R3TUgtTkJhHpuMWHeRnnxnrd6jDGogMNQ5",
  "key8": "4516v8kBsnq7hLGsLi9xtafvoBnQFM5FXNWXkKVUtK3knF7ZM7pNVybuwGwYNZMAWX9y2sYTtbEBmyxJJA3MXUVu",
  "key9": "5niKpBF1hc9ko3pzkcc5JD1p3ff3ypXMRQ6TEsEx4htsKZo8RLyDdmMLVRNNwtyi8VvvwmkiL5SvYosrSYrLfvLt",
  "key10": "2XM7HkSmq94ztRAhq37CXohiEHHqyDJtrGXV6P19GNXTGSk3m6avzFFyRWLnjFF7A2X7UeLd4BfqMX3WJEzUsShr",
  "key11": "QTPW2cq9ZsxkbvNyx46mNDb2NTy86idGrcAhDmTxnTnEwJaPzXubMMDirZWD7Uv9kMm48TbopPQ3wQPyUSbxLyB",
  "key12": "DrxS8C61m82bb9Htqc5A8Hj94aHvknZY5Xh7kRsmPLYKozuLR2XvjwcWVdcjeNcPorU3yLSd8suXZ68uXHbQHzt",
  "key13": "2cPHKUzEkQM2txD3F3cnP2g4EStoHvn5LDr1JqdcE8wNFCQ2AW93SCFybZ93uGaUA9imzezYH6aw9zydrj93R2iM",
  "key14": "4jLXwb5AsZDe9M8aU2PS2VBMNbH1wYdyEJ7ByGetLYoMZ3p8SS5oucV24iYNvn4y9t6vWBUDSNdBJogvU4cemwbh",
  "key15": "32hY49ozXVbpPZPakoxJraETPmMsvWsSf9SjHsMu7PJA3CZoS8Sy3iFcmvjdRG4CSga5wqa6VQd15TyscDCKb7BM",
  "key16": "2S2u5EJ1eEcNobmmCPx88PtvBZQoNedV8KRDarQ8PteVFxqAAdi5qeoVFo7r5b1nMbgwxSiY5P9wLNxcVJmBriF5",
  "key17": "45W52caWaKqNaqr8shsWDsmWUryaLVfacxfzkQw4QcZuaoeRNzcsjmwGQjeSq3rV4eFvssyzymBvufLFLpuAuegA",
  "key18": "842mCvgw5AywTrnvW7maLWZUfe3VpFuQsvEW2DVQ6GYtZLazzQk6yo1r5285pGgcBgDnYYfZj2qsoF5ksh8Kf5g",
  "key19": "3bS1NFTJ97REuT9WtFoprXyf19fTMu7Juaw6wJL7XDTxsab2FqrrEUwucWeJm3REPPwkGqMtKaBLnS7RQEZbD9uF",
  "key20": "iGvvFPYk1b9tdoDKkxeLqNQmQCUBbUPweGSDnBh6iqxs94DDGqk8Kta1mSz7tr65v7a9LwHk22DiPNuqk8fDbjq",
  "key21": "4xjeoVVmUn4phByQG3nKoGSv3ob2E89XvBNSXGzAkNujwz3aLEMKzo3hpRqD5V55EqgVFLgas3ysTdXdaWvJVYv5",
  "key22": "5EHJJkmSPTzSKi2H9ixBZGs9TJsi6PmKMbMErWxZCiQZQVwa2kMZvkqewn2xNeqNkD15HcuqCdt4iiuygG1qhpiW",
  "key23": "2D7znrJfjD1dX247Wh2EGLQFJH9aarZ8mLKHiUXsFuWpqzMmpeZsjpapoDegeKJQNCGfsczKeu8Cm8xaPwwYP2Yc",
  "key24": "5PddYT6nHHcMQrTytf8JdRpjB4imLWo3hiLcXTs77AEfGvxCDtBjYPfy8yxtogAhTxtARsPxnxFVTp1Lxg5EGM72",
  "key25": "2XkVXokbANoEphFkwdv6JcPCa39zS1NiHeDtFNaAjCfQ9vsTGi6yypHegegGQWUghgjh1LTMEdFZHs4HoRk2zSks",
  "key26": "3oSbr4dyUG8cSQSb8RPDt8dFoi68zCT1srFeGB9n7SRvVVNKnsWLx5Bs1yjTeUaX6Azt5eZgLy2qVjw7uXW8iRwo",
  "key27": "4S54CrYtXdyhSJ3c1X8Bb68rfeq11nonJKsnY89e6d8Z1E3wq6B2QixkkM1No6Wm7y871JoWPvvKG1A9JyAmATiX",
  "key28": "2TzeLxJ8RdxmYtCrsb8jeDHqZ8boxsZunm2nEnHuzUnXXLvQDkWQ85GvDVeXamFFfE2aMmPjWSrvNrf5gpHwpuFa",
  "key29": "4gEekTq6buuXWVyqdygG9eYzVpL1Q7jbMpfB6sq8f3ZTUycA4JNku5kJvn1cJvF1c6hpK5uU9sAM5RF8uKWpa6fh",
  "key30": "3wDjcnSkjT19N24iqpbJaxJsDUabAaBd7vUu78f5TdU3e3Yw4495vPMNcjPLQ2aJpx3jvce2nHojNosgNvgACwJF",
  "key31": "uRFcLPH4SMp7P81PfNEnrTX4EA6Wh4fb6s3ZXptoCNgdiLGXxzFuh1U1KG1aBfXcnAopfzzMuujfPapi4MWVv1b",
  "key32": "2DMpdty6M1175Nc9eKU8HKthKVPMRxX8fr8edb67F41Yw3H8GizbGBfBXpNiy4Knfph9o2wrUaXPz8yUWTsdEv2s",
  "key33": "4fgrRH8oFgC86kidcLPWKByaMzzrq56d22VmE7uJ8oeC1MVoBvWmG3eeUu9yyYsYLUK3SALEB4N8ajWYCGoU4am4",
  "key34": "3yYVG2hk1WLCXNoFREwx8EmRk5u3EXGuETXW3esnjKdiYxCuCxXne6bXXUrE9v3DBASxPTic4iQjkWeVMYxWV8Da",
  "key35": "3tUmm6sN2TN6mQhXr7qPrxaLcPripFVJro68SEeWJDiyp2qiPFfYH8qYU8jMpjitYvTfZRZbRePfdgYnfyf1EV4p",
  "key36": "5ryodLyTN7ydQDKTprP3DE63PCrtctHSLRN53zhSJArRvWnxQk6gp4me9SSq2SfXGhRpDgGGBsBUZfMrjHQRxNJB",
  "key37": "6SxV1rB5SP2DydaqnoG7Cyvnk79odXtND3C1qdLP94Szt2DjUG2NYLkyDHzcXHaCUS5HQqB6jLK3YuHpJPj3YQS",
  "key38": "3FdZ4ykb7y2qvgXUweL9ypqmzgtwc3YuC96Dm6zVqLfrcpk8xX7zNDJJ32dVZ5MzANnfhGYEdcoo5o1LPucdUhHK",
  "key39": "53Db9RwJBVSCBuWLTGtxRNbSXT33QUXxEPr9mFLG8RZFvJyZSNwmdKMK9VoK91zwsC5C58JoFHWyifSjDmQFahwC",
  "key40": "qFGjhyHZpx3XrCk43wrec4MYfuWVim1eZnsyvyAyjbGiTz7QrTiGQnkfX5tF9KTUFq9wfcnKhMTRMrmW8u84P8R",
  "key41": "m6SrCJ6ad5S8obdZLMuTRpu4Fym6DtEPSvCXrGv2j9wwcPY92DUP1ai4MrWBaF15NgNufDJYFqWu3kJB5XbJ4Lm",
  "key42": "3UsJwP7sCm8ixjkbbvQWJf52wogTvJnFfU6NYkJGzbDxMRGGJQTwQqiqJAedSq1tXMrju6DQHe99Erxak2jSQXqs",
  "key43": "5ogayVr4tBkVwZjTqHnixGkock8trKxff7i5ZAmNgmerTodTnLMosHmK2e8zTSVTNr9aCKMFAQniiQh6Qnr7S8cH",
  "key44": "K2BjTghih4c6moj3ELHxGquQ7eyWpiUmYtQr75qtuH44S1ZRTf6DmxKAqVRSz6MfQM2PY4cqptp7QqJAHYbfskJ",
  "key45": "2Ak7zPjKq223h9Ctts3u8AmxFQoTv47CUoAHSngqYwjgWDxrMN1xiSyZQiy9NpCKPExzX3xkFUjzoQJsjB8X4XM1",
  "key46": "52NvQYsjDfXvpvcni4qQs6ZW1uYmUHVVaaeh1CqSGNzNsAB4r4HYDsWAtSMD2AivZB1xWFwUHvWPCSg3afZtavn1"
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
