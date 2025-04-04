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
    "2tUPphrtqxSrx9rCe9UZVg4P49e71tYcAi953dorpFap44PrFmjmci4SManYAr1zKeAvDMCzJWvP7EWEk7omvj7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9axMGr4Jwv2yH1WZRLEW3qv2TGGRZwuVdJFXiGHPfewiMUe7rK19eKSZjs6TYtTXTwMQogEiKu5529us3VSBTay",
  "key1": "ovZZ5StLU7yPpjDFFHaZSXcroiQENpiSG5EUhbtamowrpXVj6bnE5hiUWGEraf72opGf1ybWUgj4XbSm9p3HxF6",
  "key2": "2ZzSBuqS2ydNb8CbkfeUaBFJnj3qJTR2j7bgqiurawWEmkh799DSNhWgkeE8xGEaP6ZvQ1GrnFBRxSrGAp3vdxRv",
  "key3": "3oUy23NEVCPdHyhGFi9Mv6oWNjbKB39jeuRV1kAujiDG2wHHvXHrV1yfmUxx5dMyAVT9NWobErvNj6WHanW3VNKk",
  "key4": "NBtCQxKMzwDoJqSP2rmCUFg7GUHmhtqk5bhsyizRAZR2uQ3jGiEiPksFz72MsBU6gG8rAexahdqSNgwY9o7uBYV",
  "key5": "3WLKgE97k44srkV6G9SkuLYAdzPqjWnDARqMstz3LMnbCtKjCf3fn6L8afYSrT1WindM7G5kVqWGx5ivsk9gwrcj",
  "key6": "3gyFFPhQDoFuNZLhNVQz9S9QncBWofiG4feSR4aHQLYUY6y9swMSVEDqinSj36NzfGPAw2Ab1z7Bb2sHkr2rzUN6",
  "key7": "2tX6pPiWPMePtDmwXa58Bh1vxLJoBjbF9DWP6cc1eFoNbNbms4NuUAUZ2WYRo2eAfYVR99euR672zwPyZ1YaYw91",
  "key8": "N69Zib6txejb3mmcbpPhi11jZMFNrFyLfapC8Kq7gc92Cm1z8v6nPaKrnGtaMMTniyTHvT1cZ4An8TptCL8iN3M",
  "key9": "26x229CZSp7mLHbBttepHdx2hkRmQwj5JmzAdzHsjcLbYCf1WG2QRiSFuvLg2ZvF2TmZv14Y3h4Bdmjq7NYEa6fg",
  "key10": "UEUPZ9zo6K15FxniEKKPZDunQEyAHELLk19N1V6fJBxKWREgxgzVsC6aqfosS8jZbXVsugrjFzaeT4nKAFRwM4J",
  "key11": "4avjhJrjtZmqtHV3h6Z7jsL6ioWMr8PjUgmfULP6pUoFuGEpL41v5MbwWhMhNRE9etcVBzw6pEkMotr13mQHMfje",
  "key12": "tB3UzTLUujNoc1Sf4acxQSXchhkPVKgpEqbLfVsGgW4WuQUxs81g5ahJh8XAwsc6wNShdHHh9A4Yzm69hXekTAF",
  "key13": "2hMbnsbdJoYnVEMBiuTiB8M5sNqpvJ1gTHnTvUUrBmTuTvoZtURhvmf3e31mLHATKFy7QJzripXRET9KVcJdPG5H",
  "key14": "trphjqUVfM2aj47gpxBci6CdjLVxaeapCxVBa25gyBS9CRr526vHfVSpZgtK6HPgLAo9k6Fi45noE56ueiyWij5",
  "key15": "3kG2QLD46ZsxNuyYV6RxY79Au3QkrayGBdUc2o3JnmTeCt8JAB2EzZuZEmiMCz5MkFiJVzFYSSHa8BgoaCNJDdxN",
  "key16": "36sNRXepVrgsjiQdmWLgwq52iiDfBta8pehEhVPKtbAKW348AjbEVDjqF8xNne6WsgxmPh7J7ubcfe9EC8VfMAjF",
  "key17": "13ZFLetCFzWRuYxKVbwrzT2o12upjy8d4ZpyVXdhE8r6rPBS4CddEvaPehtrG2YGFDxYfcvuAu39d1p5sW6iMQN",
  "key18": "2tMMdAG17Wb6zFCNrMiw6z32FeDow2wdL13bUi3tGJd21jEjKry2fQfCFZbtsycs5gpPbjpxwp92tV2uQDPyaqYp",
  "key19": "4GU67Pwegz1PNS2MzCZKFjBvPoWx8hLCQGCZ7h195yU8SLPv1XpD747gBMVUHZiLooVG4KX8vaGf4JVjnbSVTDRf",
  "key20": "23u6KfhhqqTiprK8AfNakLWq7p465gY8Zepke6eeod3YXZ3Zhgxu2U5EzCiTdDdui1RQiB72RMMWBATyRoNMPJ95",
  "key21": "3bafWgFGYpQofbMTZGVP7AKYfF7v7N16KtrnrPJngikgnn2yugttJ4yGggwvccoXWrTpERNVqMjsRHviE5qaZbri",
  "key22": "5MrcuTsDPvsoMLG5GkmnpviuR1Tzt5xXctRPb8SrBmbufniTg6DjrZGpJxFKsFa1wYcCxCeGxjppPpbvvBkBhnxj",
  "key23": "3oMgZdfV8mYXBxoFNzweL1WgXKD7y5UPtvi6y2HCQbRwqGZSGCNsKL94tiGFzeJBodaG3cPugFWZq7cbGDNYdTft",
  "key24": "2XsFwm9s4EpwoUVQPTQiVz3dqbvXSckwKVuE3eiqptUjzLe5UPURp8zxamKq7FR7XEuM1xFjwdocjjWbGS7A7wTw",
  "key25": "39yAEHNibsgZLfFr3fmasjTZJaEzZkFw4pCVkL53taYe65fr7K1WKY85LFN12vW9PrL9d9H3bZnh7v1Lh7wCQiGV",
  "key26": "4RNz1GKuQPoZsNgsUaAtTpLSsRmmL4LU7RWhyQkqZ6DrZ9ArC8yofxDfR5HcEjUKZ894e9EkJ1o15qYDDkP8xFw7",
  "key27": "5JZXRCAHW4VQm87qQ76Dq34rQR67HiNW6DRH8YuChKXF5YeKMu5UaJA2KiktT6TkFsLxXnWZDDnZN1osiDZFzAyy",
  "key28": "tTFFXDLanyE5jE4HWVmSjXmLnqAdyijGKqAhbuoDYZrcp4ZQbLd6tvSwJSdncpdHzkoefNtQMF7VdUjseaj5ehM",
  "key29": "2vwzb2ZnQkPjhbgMzyk2yZ95Mz4q12pBz1q3AMK2fgNufcDNwkzGLxadpKF6of6USqcruTRZLKXTUFQivaynavLv",
  "key30": "3ogmE112V6rNGKSzfZMP1oSNNiSmvxAqRgGkhqbDUv2vCx5phckYyXvEa7L1Wnt2bwmkS3YfSru75Gaga14XJZJq",
  "key31": "SC1ZZ9LWjtHMEJgwJKkodbDMrzEAf9tQBsh1jY3JHhDQfpSaGBNpH4K3X8KnEC6UXVjjk2LvQGnqtZS6XVi4L29",
  "key32": "2KRKgwhy3cMRn3qvcXSwUQGsQqMRqgYi3iF8a9q88mYnZhVPrixP95WthFedmg3NeS7Ur2vAow7eonQbHAzFa4B9",
  "key33": "3j5aHow4214SN2riSfQmEGSLFyn2K3ZEAU1YqjDXndiu5rJEBG216akCyZaDH7vb1YbyYuE49r3p2zVw2kp5H9vv",
  "key34": "jHokoG7R1fhnidnHX2tEzKtkvjf5v66oNrxdieRhmw9hbR6HJGyCNWKE1MzzyuGAqAdwrCyXWtPZRFo29CHh6zA",
  "key35": "3kXQrqw2HUj2mkQ12hwExNMxZdHeUek4hvP7atrwFXNMPrTSbaeQkBpXJeF23fXQKqxwS6P6VwrZSjBSpGjeo1KC",
  "key36": "2EFic72Jc1u2UGNSrkhgV7rUq4PDQeqw7DtCTLzFcQR9tKavxyotMZTHrxCu41RN7Gs3D2YUKeH9Gz31qzCht6ZS",
  "key37": "VSMjAJm9H1BTH9VYSmaNb9w3UQA3APHV1C9jJVjoA4brNCKBixw9pgarkKxTMqM9c4ES9qejEwtzRc15QtRpBac"
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
