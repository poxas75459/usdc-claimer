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
    "2p5aCGrAkoJsbv1FogHed4JK7b6zw93fTuPt31iXaYA6J6GYHD2Y9rNsUcNEno5JmUvpeTwUYDrmeoeuBWBHBvtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAasL5c4R4YE4R26reHpsvDR8b6NTfrsBUZehZNjsXVaRoP1cM7y7dG1HrCkG3XW67HKrRki33yCffxJZZd12X6",
  "key1": "4MfDzXiKWcC6UhzUGmKutAWZpHBzaNxy7fQRUqBXHhtgZ2qa4Rtu9ostsBNX1sjMUBKt1uvM1hmTeAeU1MzwsC8G",
  "key2": "2k5tR6M7xkZqNHsNc93TxYnfyEKgYapjikgCmCECEF4WUEynzUzJXWDGYV4C1dib3Gm34w91Nz8WuD7ywCUi5Gau",
  "key3": "32HkSUWDkMK2rMHUaY1P3y8wMfMtPwG9SBBWppB8a8W7pKm3WhGtw3yiCU4LYQHT7ezJeTMTjxanuvfWFP1q8NRu",
  "key4": "2VZT4ohhij4jv2Zv9Nc9JJ1q7DLRUT53JT41rsgBFsuaDRXccDPjc25nsHCVp23j64P3boW2MpBQfRF61wAk15Qc",
  "key5": "B7HV3iDNv8D4nKMAKWjzhp1sqW198brQySWHezJ5pdpPpuzUk8HUddzTJMAdQqb6EM7QReFde6L4AN8gLR2yTsC",
  "key6": "44yuwtupXTE8tAM6ybKZMByaXKcUDdeejHz6X2os4wfVFq5uUTs8FCu14Kis2ShwEgZnX8MhLSHXAna4C4ku8sYN",
  "key7": "YhpJY8NzbVASiK2jMbZ6RbjMwgKGaqc9iMKR2vZfnBEjionEzhb86AudGzRPuXm22T5hDVi8UJH9NmLn3DqfyjZ",
  "key8": "5xGjy2icLKUYp98itRcGHYj9PWVcUxphAsCHtF65Na6hnwVx73Wy1bhpbBkxDuLp1v5AyWEut8uD2qq1Y6mszq4R",
  "key9": "3GnsANDR8giRLNY54xgJnfV4DzXsiiDTGWhmKFs9P3Jzwjxseb3jg5L5isD8gNFyJAQVYbx9A6PmyoPmwCzJadm2",
  "key10": "FpvCmS2EiW8R36NiAkTsa5q5EXNGCBKQ9wk8W3E6y5V3qvXdMevBY2dFeJaECkhhnszQoHpoHfcPy4q454scpsK",
  "key11": "5LM854B49B483KCsgh59JR2k2MSh4x7AJU3Y9Hq9AzAdBswJB2upZ15uBxnEqYJYvAf8XPaU52rpbouXMR6hdtAK",
  "key12": "4ixtJ7oKCcZ9QnnWiSR5ZkznVcwUdzL5BwCKVMRDwi5cH8UC99DYJcNts9a5kjLYnV93u3RLXoHfvZJQUteJmDTn",
  "key13": "9sc7ULbpusbmLTErMi8yJZX9h564BjQ3XsXzProAuev9McEHVu8M5x8yQuy74EdGtKs43E5FrAPnbG9PgA3nCNf",
  "key14": "45WTFXHRf6DsYA8SkYN7EMzFRcZiiHs21D8P1eMJ6fp7xXhCT3UCTt2YWaCpZoGyj7BSvy4x3WdT2nUbtWDF6jqb",
  "key15": "627kvi8e6BSqyvcvByjqdC9rzJiZo2MQKFd3fFgE74HGKyzFWhjXXW6En8T7mmNWuu1QBQ9imP1nngza6G1q8V6K",
  "key16": "26MCtU1CysbM5Nziq4gP3EKsucfycDmhzsWoDWRRHeUnNXNP5QL3nWEBAzVpaFSHjnSGWoai389GCnbbajFH9Twj",
  "key17": "TH1aUPcHwevi7iRu51EkxvPZ5QuiAdetrcmXEpyGL8D8rQGn79YLLjtUfa5uqEyTz7FEoYwtiR74cQe8oyxgU2F",
  "key18": "2GREwFXicjbrkA9t1H2MgK7d3D3Vxesas6jS5kW2s7hsCxeAcgzW8YPVLmEMmQw5nQXnWJiunPVXpzLdGU3xTseA",
  "key19": "22iTx5UTvSwmR6Gcf2XTL41pkRnf4pfp5GoNoHGgnUoHJYyCSuRt6bvuRUkXEFVxbU2DbFahfHf6GKjLKE9N63dF",
  "key20": "VnS8u2xcQzoUHmsQg92aboBZGMaJAwk5PA3WpyDhCu8dvg3fpi7EQzS3tZLaUdcL5rfwgyYFx3oc4oWW8frvfC5",
  "key21": "65VrjqYDtLt9hWmMEUtm5Yfkt4Q6LgGo34zpBifTAHXhWsb9papKmgyjAhFE34XTp6DupaKKQpbYpf861ErPja1y",
  "key22": "47Yko42nWgYnLPukz8dBZPyHkUFnswJjUfYWjYRNR73nsVSBw7xnWgWMMFdcpvd6fc3Pzy6yBLwyBLXearb2GTve",
  "key23": "zQQVRwhGos8KYWXM3uvBRHsHXN88LmELLrfToZWaSnDsaxf3ZB3RpLpd6J9ow4s2PajYWEqba3RT2so5yoUecE3",
  "key24": "4bP5PnhmstCSfqZrq2kvGihRh6LXs8XS1iMW2dkmWwtXsEXEvNvxfmgDmn33AxDwNizahR7mSNhzsVgEySLqs4U6",
  "key25": "3FPcHLGuS9q2es6TcsFxZ4zvA22T5pg3JypCUUCuSXEJ1bDhrR1A1NYn2gFEihEiLuPi75735BiLALTehhp2TnXb",
  "key26": "4SQA6QUpbpy5MXSZEgDWDRBuPSdNV1u9KUjznXooovL4tQ3bBGioGopYYy9xp53bidn9Ktv3Nxx8RT2ppyxPw7EE",
  "key27": "4yRBYr61NeY9iETZe5pvFQViRXnsH86LWRwZqu5JwcUfg7t5FPKvqxRJEFFJVV1TsWphbnrjtkFg2rbYkuHEbR1p",
  "key28": "21sMJ2xzcHXtWFpPjRFbh4PHBnZ13i3ViCz7ksFBAHm663Ct3ReNKP5smojRQg7jcumVmFy54qQCwU8sracRA9Qq",
  "key29": "4vpx1xVp7BpzjPYkWEhws1216QdYPcRVfsnoHkSD4kwvKD1u88ecxL27Y7ybJmvX2jdtTg4hjs6jwzSNV6WatqyQ",
  "key30": "sYfBHXtmfkZq6JiCxcv8yWFZGnU4AWqn3yp8Z5TwT8FHqihoUDAbzLpbspCCwJAb1DKbn65ozrKR3buaGyTbxsw",
  "key31": "pRr421EXCLhGRqkCmBXV8dnNibHa7CDtZmb5xtikNDNXivHrCMx2wbUGqaL26JN4rjKHbMResGWMvZJjSrDTpFU",
  "key32": "5yodLsRiGR1PTaYQvWLRuFqtDg9Mg7pbSj8SzRwMVGK1gMKtsoytDpSTTQSt3zNyRVH6ftTFcsrhjCN87BGvBEyb",
  "key33": "4A9zpSpkw74vYSaesKEoEQBEuoqnwtWQqGC7u7JL8p1CajuwUDigXBhTbi8AH95Vh6czjvUoZGp5dYaXejHHzsYm",
  "key34": "5LvsNZiiuJWDHgKcvrWCD2Q9QpL6zqY3Un3bDX51zNHBwtW3Au2BhXspYTW5uK5wMQZa9xV4Crx3xrKueBfSaWXL",
  "key35": "5NcpY78ZbM2jKCKLq1NGn4qyoSY3y2qK7KdRU3nq9UiFosARQaEWe59eWP67GKKsFWxBt8qUDQ4xrBTAdjCQU1Ft",
  "key36": "26MmQ3FLJNSAPTAP5VzR9speDomUKNpWenXsRvAieLptCZh4tZNCJcY38wzxt1pdff5FFadkTBVWNi4KuswdsHzy",
  "key37": "4GEwEjsXWxJhwWDRCEWKR1quEckgeww6Mzjb196DTJgShpMrguoSm4Kf5b4XfHQAda5oTxwjvARQDnna5Mt7p8JM",
  "key38": "ohBC8JxyHm5p9HTESFwi49Uc1GLKYDGHcsHgRPhpr55Lgyb2JoPT4yfdDzfnyMrmka4LZkn6SL27uSeHwdPHL9w",
  "key39": "3MB3HTwg28ynmuKCxADeqUKtm8q157tzY2ioen5YtqsjA2YY4y4AyQEfXeRF3FGgJRQ2RWE6wyRmGbKQxusp2UY",
  "key40": "upwcxPKDvRMwp9vXaQC4unpKiPEumTfGf47pDuGD2ok9UGzeEHkpR4EeDSinMQRC762JSKXgPPsxbb8WfQa1NkD",
  "key41": "YFmSRkG9swUzjtbjSpx4LGRounswr549Yq6QG5xWiQTsEH5cU1ajvWQsk2Gop9raYFxHSPGz3bhwNgKFvWUZotu",
  "key42": "5cT7q8S9Y6ncWez8FFKm6xLHcb2Lpddtdoc4yZb6V4uW2Qe4NK23fM2v9NqBmeghV8Fm9KGNo87hHHM55P7H71h5",
  "key43": "A5Y8hij3m4iiBA2MEJK2dAvPXZP8ViAk4KC7YVwDCE4W8Jj4hngGoCmNguqBq558vJU9UjhcNKJuRTB4x6DuGqH",
  "key44": "mY68UMLWtSAiRM35f2mJPnWn6JZ3g3g5CFx5vN7hGGpcu9vVK88ZbtPDaqgqHWYqHXCKsvTqzHNftbt8NRqdsnE",
  "key45": "5SYQwc5mj4nWubgdi8Rxp3722wwxwq8CF3a4EKMZo6t5S7fgtnK16WgeUnABVLYiqTyuYXbCVpdJ9nLhMkGsJQKQ",
  "key46": "VK4DfU2mFkoArrPhsvpp8H1qSVACb774yLHHqjFkvjiUjHsMD4YCdqwdujJRDgoPNanXwjifEXDtcLdAUQQ5wUr",
  "key47": "4VS6FTT8BTneGtbwQXQB7WaxytMr4dUZ4iFHoeG1vuafVzNFt4yhfTdrEma2RE7xRXf5akD7nJEgksjwAooVdGGu"
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
