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
    "5aWJDB4jfkxWpBFbjSFVRW3JxaxXyhyVzrCmdFaK9PmHkmCQt39n5k3M7uGLh593Z68SoTL9Pki37ojPNVqEPzpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kfxi6gqrNEZz74AS7Wu2J7Xy7wqu69cSwuhdexJkdMCBuaT87c8fom9UiJium9XR3mzVxSddHyPx3FTbcvTXH64",
  "key1": "57r7m5GHkBzC2ZYjFM3aCSr7t5xpnWazJRnesPFr6BxfNjMjGRSr9MvbzLL4rN2fud4ZoZeEeP6EQJ5jCFHW5tDP",
  "key2": "ADgELSzcaAPrdeKLPMcqz2uFMEcrPnscMd9pdYCp8sNUPi7c6z6LQ4rjnd6zT7LuoVdb9o6gHVHcngkzgTdgxzH",
  "key3": "2NMvLZ8mwie3Z2TwyXRq5JgvHPiB4JBMD7AFenyc7P4DGSu3FXtptEtrBw7AFbzxf9faqqM2Jb5BG1MZGmQfHyXc",
  "key4": "7saLfQ3CZWSAie89yPSRrr5fkKtYsDRYx3ZUwKmFUDEBjdFEcVsE1B5kRa3fGdezCCfSnPFE7MKjFq79FBhf9Fa",
  "key5": "4E4JpJFo6t8zbpBPvGx4zEQgDC3zhzjxuFxhn8JHty8QoDpPFuVxZ5aYYvkD4hCwGFuANaHYFQ3HWp7TvGBwbnV4",
  "key6": "MqiGW133UYpVjR8LTpxUhKJ8Mxtpk7yHC57kWTcEB4dsVeCpqtsp1tHjd5SMyPatrJobjZAxt7D14whFPZd1Adq",
  "key7": "3rvsnkBjsjaCzQP1r8Ei7JutB1WXTWodXqsSrgjtN7Ea89yetbY4Kmy6dBcXHNLNh3dLteZLp96g6msd8xqCToL3",
  "key8": "2Wz8shSFonnzrjQ5Z3sb2tZWYeXpmQzzhttSq5yP5SqcC3rJsXL5z8BPhqKn8qVziQzGyp6vfCo1kNLNwax1SbHc",
  "key9": "cbqRqgWgSdhTgmxe8NYydx6GL8JfvPjVko72Sbdhpv4qxHzRcQYxWhUgEvzWdtJFLfqKyuzi9YgCx9Bwf1PKK2u",
  "key10": "Ux1FQQN6zv7KysywwxfNFxeSekg7mK6uZEAjn2DtbjpaxzkELvZiNRZPQXMBHhZLEoMP3JU8JumBRm1dQLHBiRj",
  "key11": "53B1UkfAQZzuj24PJyqcko6wadgj96fpmRS2AgogxJ4yk94fZFUyPajejQTmp5tAaFPJGtFGSws7UWA6LndJy6dh",
  "key12": "4miNVttn5w4WHizCopr8q8crHZ33WuTpTWLkfhURhnhaEzbyFX442cT8XXjk6fRTEPvGD9bhWQkJBRav4QqmchEf",
  "key13": "5f2vq4MmhrnCpBaHYedfoHe3Z2Xr4fDFVWgdrcSCxciyBRnwCrvvPiWuDTNGTiUi8adWEA5D1Kh4sCqhRY7K6BTo",
  "key14": "52bE33hM1UH498ieonM81fywE77SRaXp946W2MmnuJeSebua6ajHP5NZdgi83y5w1fvMhK8uiJDk5oeTmCwiVJic",
  "key15": "2orMyAoDVk4Fia2SoMey4uJGRfh3RtndPiEAjVz1NawTSEp3hJ6169MHpV3gUVkW8vYqHQ5yq3ck6P8394Xdryig",
  "key16": "3u4G41UtwzbFaXcdv1vxjcCzr91trYUzv75rjVAnxo1qEDmtXbHRVWiKnNxhXw5pZQP9iq9ibZqS85ctuN7gZT8y",
  "key17": "5WmVN63FY7sAW37xPrE4oCUnGVPMVtHSdPHyvUFy1hVXh9LfTQyrfNqTc9ayzveAnmEChofiQHAU9gH7eZHDcxic",
  "key18": "5djCF8a32tWbJnsf2deqg9zrZr4TiK9K5ZCgUMzYV7P16NaRvr3aAQeH4LCLixAubYW5MCZUykWsH2GkfA2Lrzv1",
  "key19": "2kgyiHD6ZFC6azxBi6oALA5UNQAs4sR6zypa5reT2aXR68SArHmEVUUNRegHuoQsZgj5K7rUmgLBT2R4iszNCxAz",
  "key20": "H2PamUk6kYrxMikPy7Zo7fAjZvSFEaSnFL6jVeYbqRyBu9io9H4ufTC8yQsrkxKNed6RWApk8JgTm1P8EXVZpip",
  "key21": "21g6rwbb1mzyYXzzHGHX14Ai34xouwpuPGpSM24j7db5v4qvbdHJpPt6bXqVHMKVJHj7DbR989dkeU4r34teEjmq",
  "key22": "4L3oaVVzyL1afHsThxWLPEFLfMFME3EWuybEApkLEsnTPhYB8DGRixEqcUHNkBwbd9EhkYxer1QJaXDsP5u7ngw6",
  "key23": "4AgMsoMugZCueJmY4zVwJtBhjfMufcK3t3S2jmxpVAZXvzwzgopbYrGP78Yo3eUMxHNLFg2KuZpoJ3trBFfTYgXB",
  "key24": "2aZDDTAXsLPR1PvPBGamnkihUXwNbdTmUBbyqm8VZdhqk4cPST8b5b68ZSED3hLRUubYCdVvTMnEpHPpme3LFkY2",
  "key25": "4TPyKiYvaU3FG5bg9jD5Y57np8sgC8EXuXVY4s4utYHFjf2cZPx6tF4acf3dfkSGohbFErpQtP7twE8uW6Tj3QUN",
  "key26": "cSWEueggY7t6DUTyqBVKqReFt3E9btNwi37cnpk2rpU2BnMmc3Ee8PoZSjmgdoZVQAKvGv967TLpNp75XcEJN7u",
  "key27": "2iQwJi4sFaYowGSFiW2QtU5dehf4dhQL3VoDiuicRPrE2srkQm2SXbUJHuMzXZARfqG95K9ZDt6TQ3zhkFf2U6Es",
  "key28": "5SpM8r8M4XSXaDYent7eCa4PN2opNuM9EoJ2HjC84QFugApLmMcJ6FEJYf7Wd6477KUypafaYMrqAQ2z49FibEMh",
  "key29": "3FCNbMzUuxX5jwWutQZAjSVgFyUCHUS8amfcqEwhHEczhyw9njshgdmQhN8BPrQFXYXE2n59MFYVJDkuDaByWjvS",
  "key30": "63Bpr5RVfnzEQh2aDAAJwtqqVEPyd3HnxoBmcJDDu8sJsFyNNebECkAdXouEk4aXwvAozzbhGWBQSq9rLP77uJp5",
  "key31": "3ign5QML5io1VZoRDQH7hq5DoHAvJBVNymNTKgS3LoQBgUXrU19Aqj81dDDnHPPptfqG8tMri2QMCduYMTc5F2en",
  "key32": "22ipf3UJLMAHdXUtnsP7ezMEWCnmQzUsmQenwQTATAvZmLivh7dHRWUq3WxsUa2k2KqM8BsroquzMuWmVXrFhrA9",
  "key33": "3pAZoQx9KAvuzJRp4Gxm51Zjx6tYWUHU9v3mpEawDqvZEaU2vTLZA13c7Fru6BBUs6GQW6BiMPbLqPEezD41vYhG",
  "key34": "Pw43eok6rsVZHaTiTxyRBzUJjXWAYtozzpsBGJfRmSjmFeDoP6WF7wxr2jSjDi9rgZdPGRjYKU8HCUj8HPB9LKj",
  "key35": "4dcE8hBmxNXpLwFokm1bgihrgPDzjvedviExW6JosQKxonySydCMh88bJxoKMAAHX2r9ixV67kVTkigCRGetumwN",
  "key36": "38X7kgfFE2JMCNBtFob7B8srdHxLPzcZTGnfPsy5EafHN6GEGgLStHnvnTiX4uqGyLZGFX9YM1ZwSkUZ73noB3Gz"
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
