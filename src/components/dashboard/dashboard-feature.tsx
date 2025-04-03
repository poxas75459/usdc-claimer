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
    "2KqYXHPVqjMwmV8LTazXGBjjuEttrx6PMuoykHoxxXhPnNLk9CUAeLm7TCgXCJpK1n7br4GRHgshNvpaFHvRAeka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afwykWHyTsiozJv7yXBzfEDCNLcRs9JAuK2JKMpPS4KcXywbPU2j6aWtdoyn4BMUwBpQ9xU8ghNHygsiNr5LMyP",
  "key1": "26gkgJMetUE54u27tSzpEC5vDxe6Df1qBqqza1Pk4r1nnG5XdnGvS59o9GdVVepoobmqhJykLti1p5kseCXf4Cu7",
  "key2": "428L49L1rjxZkD9guYtoQ2LaprH7YvNaLyRB8wZLpG8CZqGQZoZ92rrLFAKWYqR3ovXXdt2kufmKpvKr6wTgDeMR",
  "key3": "5kvdXzH6Yc5p4QfhDpHrCt1jhRon5z9dW3TzgpsUUigQnSga2bnbxC1cmn2FA1iSCi3fvt1mx2CfPCbr2pNuq22a",
  "key4": "4HqgUrberuMVSHC7AvEyAhRF3BDQgTCesvSJiZQ7jT8A5Y9Kz423iRzJr699ovnrHA8GwEHSkdvuEq82cp5h4oRa",
  "key5": "3LFMK2TGbhGisFtu6K8Sd4j9dwYPqkYtJEbHBs6V6To64yAoit28kGJdthuxXUDY66EDXpyPRtM8H8G9PidsoWXQ",
  "key6": "4aqRwxLGqf6UTuwu8gPNHv7jPT1H3mQbnb3iAHBwAG89yKmzhkNR6hUTmjTwzk87XX6R4k4gpPWdaigVncY1TQgz",
  "key7": "4vL7Xm4hKEVnRb6QfsVUuEzLP3vfbEF9U6cMZAh1HZuDCab34eCvKs4GRTNuPo6b4pSK9CMac5PrU53Vh36zBKoU",
  "key8": "4Hm7ZxyL6k3qg8tp8UKuUJ5pkdqjWi8bNnGMpcSciFF9XQSbYHJXi75AfUkE7AGhYh8mG2YaHDfZrpiM2bDdp6jX",
  "key9": "rhfyoFMCR4ni28uyssNnG8QJWMfoGRUJMeYgqVWy7vpinGJJfsCSvT2qCWVqBShGh9zKUtGkLaBy1R8WxqV7Xyh",
  "key10": "LKiX6cvo1yRV7iHRVCp8hvxn26e1PZNmX3fk4N1yBmJvudFuqTbPNLFQKXmUU99fhrc8w1eKBg7AxKDWpwry5VC",
  "key11": "3N874Eq4L1K7Ght2ZmnJD7dv4777TPmX2mqizweCpPZp87MVe2kyprFQxJFyixtMSrusPp5UKybfaoER297RzLeu",
  "key12": "4Y3NXZ2dG6AkqpQ6ENJarmCBH19yShJfVqijabJJaWSqtoBA7sKuXH5oUX15p44xMSReCmAx4i2w3MTL8zmvxRpv",
  "key13": "2fmfYHZpyrJnvgmMekmA5zpj4Aac4Z9VU4ZDi1gXkvAqgfpj1qUzpimkqHPzjYzFL5vjvEQ7PxL8JH3viqeAXjy2",
  "key14": "3ZXv3P4nACheeAjf1ySFXMpZ9k4E9ykrW87NkHgyzn2R7rG1r3MT5S8BG2d533MMjYDje6HdGA1dLeGu4D3tf1G7",
  "key15": "5vxTHgRYbArAbvzrndCLMwNENAozcXr3hpQ9zXUYA7DqFSDPv9GrX54Htery3EUP8CqZkezrrwsYAJVMsYyCMpQd",
  "key16": "2gGy4cSjA2BTDyaNxxpFmJtaCdJqYYYnddYxSZhccT9HXwDyeMSAULv5viRjRf4ggkPXGthChMy5JLJ21HRWjhua",
  "key17": "fx8p1wWXb7sg57n4EswcmHZez8jaVY1RCW2nKwTawWLNCkKudTS3d4AtoqzptSYmcPf3rs5Qaj7o63Kgvc3eqgw",
  "key18": "4yRF94D9pCEABqV9EYYkjSdudjjrDMNMVLQtS12dEVJtVaJAU6XT4sqht3jv6sB5g1xuxBN6AkA9nfFhKgKjmHnu",
  "key19": "3aTgtCaXBs16L8qwy8czJ232tHDfgkCBNawHWsSMHr8G3SfxmAfavn6AvUstuDZFfeDnL3mZsz5kah5D8F11PfrW",
  "key20": "3vvDsF8tsbKZY59niP8HUm6ut162rakS5YR5HK5EDe4WsAABwXfQHURhRgnaMY5gbZLZm8whee9oMV5UouLwFZfv",
  "key21": "4RPt84QkLH8Dh4StTSfpkbcpCuGbGbXqLcKhNqG8BLn2A3WsxY5RQ4qC6ETUJ7ur2DLhUbm89YX9REEMwS66x5np",
  "key22": "Hd2xx4jjSRkoUjQvXiTiC3QGmXgaKyQDpP93gRWp8iUHwnfqyEAw4sWZsYKc1Lkkzb717QGUKrSG8igK5Y9MZP1",
  "key23": "2Ugn8DvLL9TBAkQUr6ZY4wAaK5KnhAF3z5Syh9RSXESXdCTaR1HEw3oqWnUCkDyyBLNaiqdLP7z6SRngp5HuKk1J",
  "key24": "2gz2C9uKXuEdsoX8sZjbq5A7pNVLZSpMuQ7mNqXfa9Uy99FCgvSZ7JY8J41ZH713zavxR4wBmqeg8u9x3Ft5gK84",
  "key25": "WXNAuPxKv4ssoYXzg52MCpwBGLezGgvvcFGVhBPs8Unc21HJ1h74UoHW7C1ZscCpvQ6UvhRrXJri9jKeSDxx8fj",
  "key26": "259reTPLiKoXEsNBjZqpDQfFJ6We3ttS3d9LGq3JyP4NoYbjDdwEhQQ39uEu7My28su83qjqNwbhiRUZ1tAuTSiD",
  "key27": "4DWMFztewjnwX461Xx6nTPdDaxQD2fz8h5qF3pg9aMe9dATum2iXnLi9fTAkdwS74UuU9av3cPWxPwftMR2AxNpM",
  "key28": "2UskcsnCY5QsPZs7Nc6JA5gABG89UMTesiYYi6YxYKyJpjT7TQRdgmgfMsnsRL81BwyeTc8NhcS1BMxCqe6f7fsW",
  "key29": "3A94DKY5ChoYFMxaJJkdVpHeuR9fNg6RahmHZZMfS5mkcjAmKr36Hz22HdTfQGZAnh3VQYM5RH6FJo7WVLyzZCFH",
  "key30": "3mQJkuuAJoRV5BhomMRDUuTdmESibtg1178xwiMPi8y4gq1rEs8N4Xk1E6xHankQf2sx7NTxRSmDNrzAoBaUWLXE",
  "key31": "3xaehHZkFoS2PLg5aBqipzbtBf7XGwpNc1SLzCDx5rV1c7tiXnZnaL6GPYWXj6Z3Ssj4sATwRzEFHsC4rK1JWv7y",
  "key32": "nh7je9R57UwHK9icukWrV5gCkCowiYhpJ2nTmp82HHhg3tBc9TQZphP6DSVdChVNXicDcNpyFSYLwpGq9N91fnh",
  "key33": "2HZzPjtmTMozSnQKsyuADq1Yug6P56VMUxSBKiDgvoJux8Tw96XN2p72EmBMnywK71AMFJCvFzDgA26tvZRJwmyb",
  "key34": "2HKZniKscqD71fA5tuUpTHajNuPf8gjyaTdcBu5hUyxMqK4sVAXrN2cPbJnXBHdhD1fyXB42cyUAqFz5oz2RDnPL",
  "key35": "5DA1bdKVoyhnVGiAR9MwhG11uz8AcQTppXKwnVDwnA8tHauvd8vEytNpzHtAKiZGwsjDBuKayEs8Eo1hqLM5Ners",
  "key36": "5GPdoRp4t2ySAsuZNUWmeoKo4MoRTQAAEUiYqP1cbjxYAwxy8fwt7tVEY2fEPhF5GmGG9svvAW6zqfQS4igKCrBr",
  "key37": "3kjSyzWRvRFgys9KWhUYjQywZ9EBc6My8WPtmW9PoExSf5Sw49qByW5kKK5PW9FEGpNhGBgeLMPrMw6nqggoTuFf",
  "key38": "268X6WCPyHxh6c39W6xHiLWBDuuEgaCZV3TEoDpWfKqhaeqMubgshkLAPYG9VXeD7daekG6ykfASzbVSqopcPGgD",
  "key39": "9cM14DbkXKiDd4LN7N7KoP5qkNLoaFcmg5cQnTZ3t4U7hWdkFw7fnK65dVs3ksCMNZgebx7XAy8DCinHXMPkbAA",
  "key40": "4e25peACtQ219hq9RR7hazSXpKLHsDnGBGFLJk6kQNU8vhnfD6jT5XUrjWE4NPJfuuXgYfhKoq5EfGVwAxdVvFhN",
  "key41": "SesLPVwh2ocBDQ5vcdn1WLCALyZrTEY8uAeikPWcREqoHouPMzoSXkNgu6bzoDKLnKjTbDY2MDhqbizPXQTiv2N",
  "key42": "4xZnNXwaaMMyToJsT4A2G9s9NKDf8XuM3ad2cABvjP8fnjByFDZSfYURwpb7SmFT8CTQWL6imzmyv2pXTXZ5jmXj",
  "key43": "3fCezcoYWa81guhcxKj8XYbUhtADNPNtbwsiQiwPdr2FnETN62YPS87TZk1t7mbUuMfnP4vDdXpBMbadoEiXqbqg",
  "key44": "4t6viGRyXc11TZAqeRzDcsDJFhhswL7dCznPzSNSLaFp5q2ZBiKh13H4pvVTWhuFKJTh3WrH5wqiEMAskQnyj6DE",
  "key45": "4xgcjtcTVHTro7x8uZyTULxWwKHGhkYjGvwns6kUB9QaaK7weuunerRcJSqMNYACfHuF9uG6BbR6Abdutu3eJdeb",
  "key46": "3XmARjGzDddDSuCMXF5BfdSPGH4fykmbZtxmSoMw1rWnEJUCtAEfJPfbtStum62tvVY9DsZbCEGkFaf5fmuKCenx",
  "key47": "XeYqJTboPqhMLYMkQwp5Lfn62rKg2WHHuXHrYzaipjWB9iopqmabmkajFtq9fn3ATd4pBjEzLPgeG1gJdT2w6bS"
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
