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
    "3g9vDVy5ewDPRKBqBUbcibfsCLt4Ua49gidNP3XHLgHQ5kmUQcMdEfxCnoXQK2gbXoh4sxxXVQP3vLFgeor9QaWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hTCcznbqDKfszS7arEiVE312ThJ1C1o3CJ7vXZTnjUF2ZbDzB2iRYhJzc5u1N98HomxPknoHkZPyQJC94X9h8u",
  "key1": "3wzurzBokfkXSesHQ9iSzcWCGnTWSKaYWE7jeD1FCLk2B98q4RqPxNaBb1ovwgPbf24MYL2qZFHVJxy7EBtHVddV",
  "key2": "35Dz2GjCj73pFF219PfecdL4LkVs8tscDxVcyRCRatza6cF8TFngrDfutPU1uSHGHwrRA4io6TUctmMRfwEDwtZw",
  "key3": "5L6LkT31kDSVJ7nYRFuAC3ZLNnwcwkKACdTo4Hx4FTV5HT16yqwPgT8ywD9kXBVo7F78EBfxJybKuNzo5Rt7bCQr",
  "key4": "5uxtVFEUSmRYkkT2DPQUnLbXSTnbkdmwBMgdfbErHb9SkKB7bmeUQxXcmkwzAFXsMzhqnSnVSsbpbaT4tnp2cscn",
  "key5": "5hYL1decDX5kZmisTRqpVw97X6ri55KDc5YxE5okbPg69nVEe9b7bQVwR7hzszYKC2dsrUtbzmBiLiDhyDDHSBcw",
  "key6": "4u1LKmGN9SvG75XAKx82zik6wb11vcfNLufe8WMZnDGjnWCtcpcDeUjkTBgnLHhY25PCyoxWKwzVHS9pCK2G9iwH",
  "key7": "sPodnpSD2cH2sQkEZA2uvbDfh346cqqGc44skxsHmUTJJbBXzhePtr38bcoeYsDwWjWXsJR7F5xkHNbGzmhuMX9",
  "key8": "3dCaPxADYT7pkhdoqiJ4ip22AA9TnCXj712LHXh55ZhMh98qjeML9rXQRbtpCtdpBtKgmsvDuVEPBqRzKWmTpmLA",
  "key9": "3BdFFKe7DRrmKwADb9H6DYSgM632wE8QrFyaXMYQpkacEmdNuLrwDvCUp9GX4nWtEDZDykipoE4YdJvxQXzEPBfA",
  "key10": "5Xtmhs7f7W1MGpn9sVcAi2SQe8S5uwAo4sJWofqgYqpoV4VsdD1kfoT5e5eEEefyTyzKyPXseaRSUqmknfS7MwBB",
  "key11": "5XtayimJeptx3UE83wfwfoZyZwkTVSSbQ1nEr23RbDieeTMyDD17cPLRwSVCTTuZuj7GvgqNcAhVGLgrdcHz6Zbf",
  "key12": "5Sj3eRjwLVz1mZJmYE2LQe1eJ9TuMXs5VYbU82FqeHjC1NQrG4NccdE2Shut9VmP6UupAEDNpRzgjYqDwx8az2rE",
  "key13": "4X4inFC7SWX7kpFCvAE8UUCAEze4r7htQBQbfTddpvUaJgZCDDoXrBN8PPPchdLQkyEWKAfMRCF3FwxJD9GBeQb7",
  "key14": "4U5YvFdEVcHpwAfnhxZE6oyUmD6ajisr8JET6h4DsAsRgv9GUNYLUYjP5Vn2dtnicZLibDk5GeMFtyojX6edW3fw",
  "key15": "3x54w4Cfi8wrEnyhBGkquYd4WMkJPpmwe9tairnC9rM8QtZHCAZxXvtS5cqd52WWX2yqa9PrrfxT16czFxZfUvFB",
  "key16": "3MpeFJUx2nR8goLmDbp4h4Puo9fUwLCtVEC3q2os868EvgXH3gy5cTRurjQuMjedT6pExZxwmEAsSKFmLLrgKnrj",
  "key17": "4jJbc272ipoPXJyQxerzEH36QdVzpymYLZU88g2FKETCodA4o4buqvtxw821JKTWHE9ZkLDnLA7LRTJtj5zHznKJ",
  "key18": "GxSMbtFKDzB3Fhjv4rj3wSuexBNuoD5Kb4G2XpvFVu7txbEYbrJeCQ6R1R2KPsRFUZXF7Snb8pSEsrazxmFGuWW",
  "key19": "5DbbtDXN8NdzA6nkAcJzDkzABJdWLWEBUTaW3PLWbVWqoBi6vaZmT3e9Wd51ihXVBh3AMvy5gb5t6gL5xcbCVbY9",
  "key20": "dxFGoW4PKZqbYBxrHiftQFuzwVHtnN2zsMoXe2pKj9wuzDTPHiMC7mi5LFfvxE2SCRNZtuNsaH5LiSiKS24WKzu",
  "key21": "3hczEsTSmXgM7hE5Hd4EdMdJZELfREy1h6P1nTBCBkpPdTwSGHoKz9yXmdfnuFLZFqx7F1AcXeZG5W84k6CeQM7z",
  "key22": "4WYvn3FrwjU1HU9sfbiVPimAUJnG5MSwP9dPrKPgSXoTwSQpxK8AUwudZVRJ6CehisDeJ23CAJK3z5TPZtXwS1rJ",
  "key23": "4w98hhEfSHtkupvVXA3aammbipn8xDwdop99Y27oDTZ7EnKeVFT2JZsJvdKw1y7aNwVPzYniQBN9e7omKiGwsTjc",
  "key24": "2QKbrTQ2PSNX7vfhEP8aZfQAv7thAM3pwW2fC5AhC6cNVC9SJELyKMXBDb17qsjV2zjGgPFCfMBBNuzQ3YE59ede",
  "key25": "htBM1bFPzddY6mSLsdDTvGR5rkhBGKR4RcJv6QebHEE6ryXeSMGHFxU3u9ob5GEBScFCKG4jogCpFWTeGdPFcx8",
  "key26": "63WFHyRv5ZqtJWM97XbDhrN7MjoXWrJmKJGMb5igoGogLQBtob4Luao12SbCY4hSMLKhX3cW8SK6xtXH7vaFtdR8",
  "key27": "5fJtNtUH7buqvYqh5MH6LGj9kjzAPahrNpYKLSLC7KvegQWrLiTvmzy2LAADBZjUK7p37shLLATGJhBAJK23197x",
  "key28": "2zvoUbBSbBPE9vYLiHRoJs3ycDx3SFUSTtFK4LKmAdfMSnongE4E1Ge8tw67WZ7f9euHf3ZpwrXcmgke4k2DtAur",
  "key29": "3iCNMJopKAiPmfXu63b4gjypHgv7HU4MMfZYtnJFS8qKn4oKhHBQJBw8GwSsn7ivPAHPYaKJ5KAtx1EpUQoMZCKe",
  "key30": "4Ft37GXDDMWnVVezrxwgmuVdeF1iaPqBmMkybmpPqX7M4NjPAsEwEhtkUTnFnUCE2BZMMnadVme498pk8TJBrWGY",
  "key31": "gcyPSoPGnNVQEpdLYinjkEPeNN9e5QKsanBScxAjVAzSdp7ySyCZZXYHmjdBCfG2YM9f4wY3j9rdamiG8TkWKM5",
  "key32": "5tXaVrn4axNcY8AXYaad6LUPfDq3jQYCQ818HwnLwtYPDfX6Hvr1mUZCYWab3t7uQ9MbjzTgyPUXsVPA3mMmxF3P",
  "key33": "28SUMbLWUz5aURwvyE1ynoPPHkezRGjQixanAHbfSWGdnAmFR7ThUtrRiBewLr7ok9tfyYmEyM5kExtDqv8AoT4F",
  "key34": "4UmqpW3EKjnvMW5pkkUTKi7de8eVbiyGWYRmwpmGU2Q2xNm4oTMG2Q7Y1e1je2f3Zvh6rzUnAL2SmCKKoLpVs11T",
  "key35": "3onYiUEhTRH5gpa52bXdRok4HJ4p8M7o9DbVXE2mU1gMqGghFgdsrJtjY9mXgdHU56EkJDfpV6VCP37VomAxfroL",
  "key36": "35mTVsDcak6BxomjANRSSsAhGWVexK9a9RGMMWgXsns4LCZQLU6R5gUPncf5K77TKXhR47LdvmX1aJmBkR76VQQM",
  "key37": "3kUoSoYF428a4HwN3Edv9oyhd6s7sahxJMER1Nwd73PDhJScZ4UhRCD8hJskjCKWpg4iAFUUAooM3KnijN6PwNUS",
  "key38": "5roWEKjfo8MqJJAPoA887QBh7wLJyZdPWA6dMxDviqXiqqo58XHVYRvN9PXk7GuKHoCRf4jX6yWKwkK28F2X98s8",
  "key39": "4jhNpCGoYcXX76iTx34vMqpThrtJ4cA2V2stvUUnP8Lo7GJ4zpp2n4Nk8PBy6bUjG4EhN91qxkELYBQ9hDtW1CJZ",
  "key40": "2PzQL8zfcLRiFMSGAXF37FKLnurMaGgGKpFy96s9pYm9csBQe9YqwxEUFjzLVgY5m2cVf1a1ueHbZwYoJxkpJo9E",
  "key41": "4rBaPZRrZhNyRepX17Mdx7PhGpUDTcjrJ2wTSGA8RPAZRJm9LqP6NuycLUDow5MReS3ytYjR36WZgkwinRESn43x",
  "key42": "9Egcv6VMZdvKwWLAs6nUJs8ZZRV4EfpYk46aC6kVpZPtbijPKBay5TQUWMtpctQvyrjH8td9W1ZJLNKbCD4VCLu",
  "key43": "2SzSHvWBWZN1BoZewj4m5dwYqycn6YYULHRihitymg9D23PhpaKWD3eZYthtqLnFjv7FMJCcFV4KvCQowUGbMsT"
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
