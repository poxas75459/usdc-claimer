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
    "GvocbWYDCoA4aujiZ15TJb21uha91EwwVMumGyj27FEZmQ6MEqJ8gYZPbiMXomkJBdTZJx573p1YWeDpPTsqW3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npaNVC9w9f2jpQAt3AV6tvN5zmAxEkwM9CsxSKNcTuKFWYb114GKEwHgdW9SDQPVQK6W5xTxqjQTtmz8Did9j26",
  "key1": "5Jgz8ELCRMFa5spv4hUy1Gt3hMmiSTL1qN2eSqvoTFuRUiBtPje5PfnXKAWRKtkC2TCuDnb63F3oebkaYcDNQks1",
  "key2": "3NjAfA5ibta3gHn3AxtbMytqEEfpvrBXsuSuooy2gLDTHcDFXb5LTDZc3acWhUsiqjVmreAcrCwJtk24yrE63e5z",
  "key3": "5L8whHhmrQpzvUgjqwLdpGgG3EutskEYQgyuzLcnuyz2Bdef8UjpaUromqUMEoG4LWy7e2wudzyc4PM1edjwL26",
  "key4": "xjFu3vNCVQBf7JRQWkaUDV7vkFsLfSZku145qYVpf76EaZN1iRX3n1LvpSraVAwDfL17D3npR2a2Eq6ncmYPkDz",
  "key5": "5a487PGiMAnRe6o8uRqqpkLXYmFdNphmn9JWkidMNvtncxsc4BAkjWa124atv4WYJZdd6dEQjPrQ6gG9fCfFAPqm",
  "key6": "2AyVPVwwYAahSwoemK8aLLtRRnLCi78zVUDvUcxd87RZpqcqB3pWSVWaPUFjQWameLdBcBZCeFAmQ914sQGpmtXG",
  "key7": "65NVnZRu2t9ocd6AaXFV9iqkGXQ7XCSg2D7qcxF99c7e5aoR1iUn9XeDpCnSckqBXiQfsYbLrpTTr6QpQ5ZiCtU5",
  "key8": "5B5pfX66ehJuE2MhgszZA9q2k2zd84SnjMaYZgunGzUkLSHzry2JWAvsKprhcSC2WH1hJNSrC3a181hwdhd2Z4xr",
  "key9": "ZMvCRPoD5CgVpSPnq2FSrYEQfMYaqv5RHpNu1qD1qXaib1xztz4Sm1THCGjtpDPGFXepFGUFtVJoT2J2iRd9EcM",
  "key10": "5NwofLUZvh6TubNJbiTuD77y6wCVsi8U5CdtYthmZFhRMmmEC1fcbxfXMGtMGk4t3MGpTEjrfhMEUAQMuCRrZkb4",
  "key11": "3mMoruLbq2X1vdwV7tpxd4xL31csM3Qgp2rNu3Pd7ANVkDDXhFtS2rqdhTqZomEL7QgVBPTwXzXLrupvRHbf2Dg8",
  "key12": "2HNuKF16QK2nU9oBcYiovpTgQV5tV17ds9ZH53QGX3fwWMYj19i1K52dkmrBTKEgBkmejV6R31ffxW62UEcnB3Hp",
  "key13": "2mrZ4gZPpfj2cXfemDT3vnq1zgpU8FWBgf5Hjr34pKwa3ohwdcmQrKhTq8h9UCtnJH2Z9mN7Sb86VUiw7SPrgyUY",
  "key14": "3BtiAdWstPZANrqsSjf9t92FAn7qbj7AUFnJt1aYXe9Gzqa6ZqCpM9eVhZiDkYpzSGfdEeraNGAdMugck3c7CDt3",
  "key15": "34z6KMB6GhjmiU9dxwTh6mRdxwZ2zXYTtKRtuABbXGHFf82PTwZeJ1z9k6DJqsUC1xk4ZrunVtv4f6yWN6N14EoA",
  "key16": "3i9FSq86P2cLjtzojbJ6rhKtGsVHcqqgeCctHmpeP5BBkBK5W3ym9HFoA8QZrWfvbdgc4DfxivXpuC8vbMQyhQ2r",
  "key17": "2LDC3MJnYbHaeBKcHBpkrWDUgiBXfYU44F39m6GJtQdREdmFF7WSF1ZgiuUKvzuF8pKMZjZ99VE1P5pfVTFAkczT",
  "key18": "VyuZMuqTDGomZ61GUVCnqkNXpPpDsx93D31dShB4NNHLa2r8da6P3E8XPN8smjwurv61sZVY7eSJ8FyXRbdhrCV",
  "key19": "2bPsXmB6D6YpQZGUbupbHbhPtYgSdEzboaj43nRdzZiDyeW6xU31AvYygW6kYsVdeBNeqSz8poeHpBjJeK5Qbf3R",
  "key20": "4juWNGmiFpYfwR5NwbtCApqmg9amoR1S6Bbva29V54hdnRx412Q4T2XtWwHxVx1HyaGisCiAgtEhdvnzdoN86VcD",
  "key21": "GRFhXvs1BkfSMQzx6jQSBXdpRwxw79RE5wpP5ykFoPt5f7YiTiwiuWX5K5tQSoVx9tryu1ZkB6cCfvnxCj8X5Fu",
  "key22": "2CJzGzcvb249CKdLdZvY43UprJDnschKfFZNxf7pfXxyocTswg1KLmFSMJ1ZraixgrCdmkftMwoNzNCvNCVDwSbz",
  "key23": "SdMNUXTYApddJVe98HYemcK6HGSz1zQf7aPspwf2zwgRT2PcvXkg33DWtPaPT811tXuPGzFSrCQRQe3HCQUVYjF",
  "key24": "3JfMyBDHakFmjW64RgvRrVJDNP22BanvW39Ps7gqizkAmugXyoQmRoRfqJ1ReFnf8KTQRvvgt8bbGiHemsr4VjoC",
  "key25": "wjBmrW8JanZL5zbQCYaSRhLa3viA1XQoTKhdQ83ZwgszE1pZw262SM5HRp2BFbmySmN69niGMtKyqgWNhVkqTBG",
  "key26": "2Le3azYpWB23q924jFkzyjA5UzZXfn57BH8mm1jpryiG49TQzaYnLNTjZCAorunkx14HwNE7KBQ5r9KzciVcmkwU",
  "key27": "4iwS6ovVpW37thKngmR7RBZf6vkHrHDPgHvrZu5m5pb8patucCikNaWgqcKwTQTTCux5gAfZobjkjYFAjc4t3Gmf",
  "key28": "5BdhnduZUigqoXczvALHVouK1xMZVijgDRDqbZDProMZiJZQ6grYKqWRhA985u646ZeZFAVm2wnpGCiWQtTXhCMV",
  "key29": "5wGJXBBsBpFwD2RhuBDvdjyNLuMdRXyoBRNmKy1iiWFWWUmenrRvEQa1JRHFEznvqqcMgJoC7GTSqUch7Up9kpCY",
  "key30": "TLGgsMs8JRYKyMJQKDTVUBdo7PLkih4PpCwMkDKCsGg2Me3VASegEM3hjwKhp1NRDWr6YWKiiQab6LcVsuxSxxz",
  "key31": "5eJuTMuyQyBbx6DvRdDomXGBMNp7UtgzHzeKLsK5q4ATrf9mA25Bx6VZMMFYQWbzoSDGGGFNrcUDLJocSgEdySQM",
  "key32": "3AtwKHPctdJ9xAetkqeu96fVP2nj27yxdyoD4aVdZZA8XSZooV8t6KAYLkhj1h2edNX16TDzuY89bns5P8tRMDQ5",
  "key33": "3M2X6gXnhLoQXEhQfqqPWc7Qse1N21MjF1LffY5VUqcGbN2yt6nyEfqhNQxNWtt8tN5HautG2MqyacLpSAo6oWc",
  "key34": "2nZQ16bHUpyDXUnFusN7qTvRvKHST4eTSZVtYFVheQxs8NZiQcqTTDK1BcmsGDHTY6aB72JJsBYKAFZnqjwmdwRp",
  "key35": "3wzGowHqAzeiPfAvM1wttGA2CRGXU7nWJaVf1EZi3j68HpXK57KrWRSR5u25sQjT6HMXfsrJC76MMdHmjpcPsXUL"
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
