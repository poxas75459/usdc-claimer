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
    "5v8C28LGgPiL3eSKdVfxHEYMA81R4VtcpcnutsUZu3aArPxL7dSgXackCcHHXtxkcQmhRu6G3wreRViujLCM49Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1tZ4f52N79wkAP6yVtSFeqHNkMCTZG7Sbze1tL88LkCfB8wtrYF38xRw6m8q64PeDQEjgG7bMwNM8884ZvUvgC",
  "key1": "4ygkHVRWzZV8oMkNrVftkDbF1yD4r7FR9Vh5MgWVfbxiarZSzijE93ifJrb9GRuyF1AhqLMr1whPjttKQCaDyaiS",
  "key2": "3Vs46tx6DyvAQ96Lw9G6LWMzodrL2yc3YpnXdmSbS43YvFysS5aUxVX1rmbMpZRFsPwZM4qhKMJBh2cug4H6y4RX",
  "key3": "5J2ktTV4ikt4tCrBGX8CFCcgxawNahJwymuVNiMkxRG1KoYCu1hdBzKWwAiN166ScCRxedjmyKmZpzTiqqkRLMUM",
  "key4": "rM3iYS5iWkyQk5sjWZbBcYMLPWLaQKSZTpkPehVTUUQmrXkaNRRQHaSYQvvvAb26vv4JC77bfxibFWNBweuULE1",
  "key5": "4BH8BLe5A4Lt6f29wd2hZULTY1hMwXJyKCCWnHYNXMtgJ3vGxEWWksfW1VWiffgPfN2isE7SGNXjMTKV3UjfnLMw",
  "key6": "2avSNctb7RcnhQZpux5NKZ2kcsqM7JA6zL6S8nsc5E9gtFpKyJCGo6VqwvuRD2mPR9bkNZSR5The7GGMnNHmwyUB",
  "key7": "BQYxsasZ9xWBeMR1Be1HkPeJLch5B37tsu3tECy1CVLfddTGkByLXf4KWVPY67XAoDWxg5hnx4pNZkwvEK4f3Wf",
  "key8": "3n5AQiEyD1o8ugCppZnBqRiDPF6xJDVX9QEdB9JMNmrnHWbsdXDd82NEkUgH71GTzBkJX2YZZ4JRBMEGJSimiSCT",
  "key9": "2t8oTV9ipyDNU9PybABKg8az8MKhm2Yonyc6UQa8nxMz3XfuiWoLCVKkM778MKRnHW655cYESFgGrmJkri1NSUyy",
  "key10": "23Uzxu2YA4AuzAvXPLGuoCnLSdCL7MEz2XCN2Jq26xhi6BnC2ygkbQcnytYS77UQMzJcP2fVaMa5UozkvA4jiVpp",
  "key11": "SL6NbRKPxT9TZzyqq3Qcvhnu7RANj52qwmWM2ooakUh72W8ncgNBFLEXGNo85nQiXiamdaieh494LMgpvSPavNE",
  "key12": "DXQbDTzsxXhXHcoPkeLpPX7Npi34T1SXpEVueSujNYYRMYK9MZLvtB37uBzyiXomGmC7w3HWgDoXpatNa1F2Vg9",
  "key13": "3DXa84egRwcdQ8fr7J8HRRi3WYPn5Q5ZzZaGGGTqmHXkALwYotpwwAig1awc9b2Spcde6G6Xur7Vhbxf9scTicQJ",
  "key14": "uY3a7NamDCVwovGXsGchFzhUG4BMi1skaU4H9jj8fDActNT4vYW9WgkxsE8nFW2opKNkUZ4X3vJkpiUesfBp2y9",
  "key15": "5z5czrLE8kW54qtPCrQ1bgWcBZE4JghM4XDCQmFUWHCCDPqfpeVsUWUPkv4s6YavS8aDhfFg1t3jKPWc4eD3cACt",
  "key16": "264bNyvx3YZN6tbR1oMLzbZmkVd3dhRkBRPg7LMdf2YuKi6L2KrTte9ZAmSTt6FTSf9tKykQ9ywYbzj5cX6R7Deh",
  "key17": "4cwgeZqfhaNQd2DR2WxQeBeD3wCrjPBBdhr723tiRGV53xUJnTqe7iv6ynPf1DHsphkB3wRAMC63rbhQJMy3WLdQ",
  "key18": "4LxshzriNNFhwbPPuXVECaNtwVGBNcyJDoMp64JLZVaLKHjmSxfVWegeFJTD8uMGAk3aFyAX3XeQwjkib8Szbbuf",
  "key19": "23UPsYEUpoK7g6j4jhDTxj7tuzmzt42r6ZUd9R4mZW3EdzeW5BNbDEdbGnaupbnE26b3GHLj1sxFoTew6izCEDsx",
  "key20": "438SAhPtBfMKSWQKtEvYWSm1ZkhLEGS4pYA6wtSjhC4iJrzkpkp9TgexgivFS8w5vjUPetPMNrSahxDWGhBiVmBE",
  "key21": "3XoYtrb7AY4mVWoCLj8er2n3FPhm7rMXnuozfZ83hfKmpHc8kKboMNbwHhrXfrkGF3fi96EhnEWtk5MQRnwhi584",
  "key22": "3zMChwQWrqnhbj4PYaDxiEUXgK2kS2vsepMsbhWj3wqt86bL43M5Pa7ssy71MmJFtNRVYgGzaBLLyqNeE2GByjRd",
  "key23": "4bgoByeZng7UVkHA3iKosesHGF8Qx6Dvh5y62hBrCQdc7ywLEvUbjrc6CEJ6fP269qWccga67GbZ6zmLmMXqiKQ4",
  "key24": "LMLkKLi6fqdoMggEGFBy8tdjMEBG2pHDojSa1FDdSCrgeUajCDJPSzqiaqLf5gFHaD1HtbCS4FahZsxH8mmgjdY",
  "key25": "2cGmZGiEJFMMeEpHXZjgDSjgnTFQH1Tc3R9Xh8kdP4jCzFqYEydRoFmzyw8Lwu1xUVTVEzbyrWDvX3JrzN8D2wcj",
  "key26": "3NSu8ApVJerUx4KShy1or5YPe4bSzhh4M4y8z8Zmh3zWgsi8ZGepaqoY64Y8QrHjhrsWLBCvyDLkVTcwUKdUjihh",
  "key27": "5ZY36JKvxTeAGmFKaWt3gXtn7YCdTSSegMpNe5teQ9Rwoaw75XkD3mXQKiZLMrcBxh1PmmXt771yBc3enBLgUqKy",
  "key28": "5ZbXHsqW2qWesUYwkYss9dKmWeaE9FZ9JQ3ZonBAqTxz11FDxGnKxvyzoZjF2AdzgrV1eC2TWy4FEsg1JMsyuAQR",
  "key29": "2M1kLD3iSoqWzGrhDBP1s4hBA2gsrK98XH4EohzJpy5JshoFyNhGHztF8WdX5GMGvDM4kzd8qnjXqiEwQD5qkB75",
  "key30": "4YVYUdm3JMRz3CouXqeQCJRHeiHWqrcBxRLpg3bLaT7MDegv9mnA2juCJkqb75Tpgaw8wX62URD8KcGZGHD2Xuj9",
  "key31": "3YbkawcR5aMdN2SmxxyjXguCNky5GkXb7r3iN514xk2fQohXvhQCzLPJaCYXM92XK1sytWXbDujYT6BnKkVW4DZP",
  "key32": "5wYBoWMEjuCJLqT34gbZ5c7yoM54F5BixrVotV19GYKptGT4d5PXamE4C1RLz5jMVFzLFWK4xYN3d9mddWrbMn3U",
  "key33": "5NG9kTiLDqe9TG3RFZZJZT1bNgKZ757vPXriq8wExhw2mRSRc9CGS9XEv8whKoCTVxqXZbFkSxM68wsiHnmVVL1R",
  "key34": "3uTSBNntCmvLfHQweQUQsN3qEFoCVpBXmKDmkPHuFn6f13vXVrHeruHkNViFokPQLTZG4nutHdnxSR4S283kzXa8",
  "key35": "2jpbVmZLZFM1H1FR4F6b6cUYt5v9VFf12Loprb2nyyZmq4tWwPGQs1EjNnqbKnapn4bbzRkVKmN5Nro1ZVcm7eWb",
  "key36": "2MzRMnJDtPp2KxB98jduc5BVo7sqmFfDrW8A8jqVzLxeiGvsrRvirRWGNyzxznN9psJjiLmxAEhJK1sWajLALNpf",
  "key37": "64K7N1ZKvthUUsSeJXc5UJPNeB5KsPpuVJ83iusizs5dDJMw37QDZ4c9cKkeiJappjnTQ92kQX3gAL8oEyxUBtiW",
  "key38": "ppg6hGNGtEj7yYaup9ic3pj9mnVDuJpnCnZyeUK5tXdgE9AmcbLmq1tL1T4psuiXWucQvvyoKcW5HJ4BTxHd1FU",
  "key39": "2kas6ma9jAmECXoqBkrWXgx9eD25KsSmswjPbsorZUJYHY26MP7drvZSay2F492y825iimW5rmUYDjLhzMHDCyPG",
  "key40": "4XdLX4vAWCvczqiD2PkALvZrfM1ofJS1gVzqrNXWMHxt16pZEYvLU3cP6QycR9ndrL6GWGqpnN19tzruksPM7Wgi",
  "key41": "H5jAAtpmjxxLcY5QTLhhXoXrSYPWyPK6i9arkTzeB3WfNeSWoSm78PPwnw5howxDEU61ys1zARYucvyhHWR6X3d",
  "key42": "3tmr4JmExJ9YLRbW182E2qxR97ZTsecKsPN9tTcK38avDTbDeHfd9bXrH27rqZzS5UfX3gG5BdGxQdG8EAAXf9xN",
  "key43": "2uBdzXBBscpmpVwg8X3RxcYDZCsn791Tw6orBg2TsWfdhH8JcSNvzC5p3STnRzsUn3fLEn8CqJ9FRxK1hdhWPwQN"
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
