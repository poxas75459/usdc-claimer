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
    "2nCR44XbfQYaaWBfoWUaNG1KVHzu1Eoncd1E8p6stnqwqu3hNKKbPb6dSWQtSvGSmGV1aoDSAX7ZEJbg9UMwv51S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6vbAiv81Rhrt7oATtfVzqBixDxzXX6LpXdYe8DebrSGDDQBw16c3ZgpVbZ95i6DqWTyd7HQYqPVss1Ci2p5MLpU",
  "key1": "3H8EACqSdQzscYgAJBG8VeFQfi6knWQJ3aZo2vVWz7K2grDEPnXPykcqUuCCniQBnhn9JfcnhmK12qihRuSjvrd9",
  "key2": "5swZ1WB4H5479Jndz5eoV7G9bohQht1wikjJBgBsgXN25wJBQGb9WrCQJH3PE4eCpnH7LAKyMC7PFdQrPEwxX5Tu",
  "key3": "264igt9bX9Mgu2FJgbawrJoBcxoTdmLGXbtHGXLr5Kqz3s6Ea6B97xxHuxZ7ETGgXc5mEThevmoD21x8ffkhvs4g",
  "key4": "4WHiWEvTcXotXNVAwGbpvMovvGwfmrJLAtciSHMJd9bsTnMTgaQ96cFAAEdjc9FZU9z4vZvJzTuCEDB5gvxbisSg",
  "key5": "5GJKi7wiM1kDPUZkXisAA6sv5NCvHXomWhgZukaFMtziWKWwmFZo4PvEBLiEkCxwL2SkUHiYtRgv3AxRNqZFEQgh",
  "key6": "573P8A5EneURB7D1cgQp8j5m9dvBiLvxfNY3CpMiMjY5ZM8W8rVDRSp5osZPhFWdjrykqEGk7NA78EgbiL1vnGgn",
  "key7": "3Tjnn82xXyeijiAc2GDVXudahbsbgDVXQNimnf5RfNAf1FqHytWm6K3SB4ciPQEKPtWT7ZxKsc9Jg2Hz72CChxAE",
  "key8": "2hYBepuMsgb1CkCNKijXPf9HC3wAZWf2R2jaUrBhKWBTy5PnvFWKf4irbdavsHqhFLGd5naVGsEYv3CVLSjyjYaT",
  "key9": "hLtHSCeVJMzdiinYg8tDHsEnzjPQpgzgfVT1kcWagTWFgqavs7VP2cYFZkc7mV3xXatx5EdTRcBBA3vrnj6EDM8",
  "key10": "3xwupHwV44h5frxpSFFWKf6fT8pzzsCG8Y61KbYoA45pZXhHWnxKXzZG1Tn9eeLRZDjonbpC6DTenAX4gXyw7D1n",
  "key11": "4F4x46qhZ6o66mgBg9dc7p1tyBPghvcTwBWL1ztH3ADHXRbgZxXkfPHZt2rDirisSm3TrE4e6D9Xwu7aNgSBerup",
  "key12": "5cQweW9NLaW1FMZL34xWS5itf9oMhVTQfCkxddrT3EYirgxz6UU5QKhFq7U9TAVygxj3deYqaoQdMSz1KMi9XMpP",
  "key13": "2S8ZVYucNHzeHeH6PGUs8z3nVRxSwbfAF34oupdZAC9H1VReoDFfKz8ky92CW6ZeZvsckYnsbruC9xRfhGTE1CHX",
  "key14": "5Ahfaf5Qd5Xx6uF8Ew7AUqdmQQUzsuEnZ8QLmdz7Vn1DquQX5aEmpWojTcprgNGkYeK81SJZYQZgUx7Py4cLcLgJ",
  "key15": "3yymD3qtUofKwNDjTvjRsHcmcS8e8og5HavPD1EPaBD4JibSkXMRbianQcpd767W3ZwUp1Gj1KKtbTtieYfrT8cz",
  "key16": "caYTc3Kc8p5cXSScxupCMeoGiAk5N2M7rNyALxk4TqZMcoTTHUJyQDEz4j719shEUMp469w6woKswv2SF4p9yoG",
  "key17": "Px7RUrt4rsPQiFwaUDinWLuW82RAYzPC5ZUjsxvCNSMFwRKkHsiicmX3jhrvw5PsGqwFC7MfdfpfpsvWEMXBt16",
  "key18": "3EhbQ9UVMQcficMqzZ2VAEaaV8HdU6UZr6GBwz4qEEoTJQvN21sLboE4EHQ51czfvhtbSLanW7fyzKSeWtAeBZhp",
  "key19": "5sBiBmxHmyCA6TgNPLjSsuLhxEevZbW1GbXRfqvAWXbmrnRSfWECVAF97k6qUQGBQCkguMrPwbdzTe1PERWFFtgd",
  "key20": "4mVQ5MsiDyr1wdfae61mrHXC7StWBWsjpwyiBuKcvSGyVig6VFU8jgSXJRWci2HL4rag1xsZ2LRT9Sfy8CVZLVqS",
  "key21": "5vE3XERvhG2vg6USF6CgvFTM9L7aMpKW6JZJybddPuhLFzxp9ykQsK59JszJkNkCuVwHuM9HFpsA4w36D3o4odJq",
  "key22": "3goyiv25DbGRxtZnkeUDNuVD1pox7dPNdgxmQC6QgciVbqZeV1g6LoQpXq3RDgSv2thZqq6vTJYBhgFKJMUQzrNJ",
  "key23": "2ECeyNSksc41GjYeVcybgZKKASHawC8QEmTbbuiU6AMWXdQ21K8e47hwKPhjNYJgCP226MV1Po7m8GJ34YPQ3H84",
  "key24": "2Go9RGmUVWRstzj1vEeUjHr9S5eLBzyKkGdWAcP3rwf1sW49c7eUKgU4Nr53Kp8veMpPSCJ7qXq3zfr4inPvKDpH",
  "key25": "4e9uocTPcB9aPtj929EtjwHQg6yzre9fKb1WbcxGqUGpEjfr3Lr8Q4g5v4e6pbDhcr5oiQLRjiDPCtY5vAxMAG46",
  "key26": "3AZJUyK5sgpNjdnzs7AvfGknioyjLBNtZAmc5pEN8RZFssh1ujPtp12nogVS3muuR72pHZ5e3roQkXikAvzv3pm5",
  "key27": "5Xwqs865FBMvnDZnBaBB1KtTazgWvnP3bSJwF7MMzqd54atjd3H7KP4hgrPVuWfTWP4kUTmcSbKNwdtLMyyDKMSF",
  "key28": "3SFbK31kr6iPspWjfnASvs1StiLuibtcrfHNNuukr6VzM8niikNo9bsHxDRAiReyV4a7q5LyWCBTRBHWW3TxoiSr",
  "key29": "3Yh3xxiSkvfXrqukUTgSn6yPzpXdmT5JegBYwxPDBAUU4B9gHZBxQeQ5dBmYbBFhwW1nAa2kL9DD3ibdLVVwk2Yq",
  "key30": "2EttM3kTsdN7z2vX1gLKDk8MhrGxDb4NFgJ8mQ2FJfMptFaLW2EJH3MqL2h4WSbZkwDFH1TLgzqNm1LgpUKqqD2t",
  "key31": "5PqtDd3kA98ZB4vZjxjPqv8wx6k4x9MuZT9McUeXU4Q9JPPTXbcZwDpXJk5r2hBgGtG6YAA7FtRLC69heTsGjc5m",
  "key32": "2CEG4Z7rGWFhutV4AFyr2vHqMkdHS6TtEyz54MaQNasMCXmtJKgr3smRiwwSN87dPfKUHKYgrZR9vik4GrFrXAVX",
  "key33": "3Q48YgpBg1wVqmtDtFFrcNLfUnQgj7ALCJDUn1oLawBgY1rtyZMJNBgVnps2M5mPvBfrR6aAkKMHcuezLWyc82tH",
  "key34": "2xCY9o8Uam2J14eWWKiKzzEHiH5pUn8smJb3yDK2zNH5BEvHgcdH9QxcYtptXVTbr18J35qw9uW3dQZL1uXV6VCQ",
  "key35": "9YVqMQgmPW7hwWXstf7XBvsvTBvbcCAfpQu1TcF5TBsZikxQfi7tBjBJNZCmg6XASm2CM7F27z1hk8vaamcSzbL",
  "key36": "75W2znBUguN9Y4kC54BhCrV1fmKn8nkwR3DUXMiv3Dbv7r7smHRe1d9aL55gVKQbD4dvh8dR4rA77bEwgD4v4LQ",
  "key37": "4m3q9ZguGoLUE9tfwoNhdxgpCU8JMcDRGt6RXrixiiB6ut1t12q6aBFr9d2us7TRYNJuLBe4CVMBYFjbdLXrrvc9",
  "key38": "4dWf7CTAmbKRXZBXRSynAUREA35ECFFk7sBbbgU1HnHXdPfAsYEkoyXNaYVMSFtFqWwF66EmNi5SEffcbvHskkxe",
  "key39": "2ckNkHqbkVaSohAzQ7VYQc7f2DPsJqvtKwxiZRJjDDnh1bRMNmKRJFUjps2UepD9hcvSdGhyzJsnwxdjWGGJWfwx",
  "key40": "32u6huzimDUBgzRmV3mHkqeZtGQmzezSdJ9hhLiv6sturWD16LWFdReK2SWxBUTSq5UYdcp6yPB55vTDgfFheSDt",
  "key41": "3ZSj6AwZfz7KV1Vz5i6adhgzqzPM7bjZhyozLxjkoPkYkGXpP8cjG7tQnsmsLshFxesxfPvdgtpDPTnsseJrZjQh",
  "key42": "4qaQorhWCncUtLnSugM6a56ii3xcvYeiC4BE1Ppvr4Kt6DHexPiATRzqwU96k1PdDRtLHX1sjL3bkLAtCARVZMSY",
  "key43": "2kZaRvgcxcqUp1wGX85zfByqAdsqMSGyZsv1QUnDqtg7Ca4qg9S2cwNoZ45CsLHEQBTbBY2NaGQ6y1oXb66CmTc3",
  "key44": "5QShDfbGG8vpeybqjFThiAkqhoY4eBR5vWYzQnJFurKctv7fAUHkN8E3YGwJWGtiinc3DLpvWpHYr5HMot7Nyifq",
  "key45": "4CbD2DDfGM8oh3W7Ubt6LzkS4yDrhd5qjkXtXj9s9QCrpum18171FfVG5mAz3unXmge5LTz2m8y4WTyw3zw84oZq",
  "key46": "t435vcrwHzCnmA9CV1mbTzM8WzeBxuXQpH5MNvwMoWnk27xPjyFE3T2h697rGCkGQbxTDnTpp3jtQXfAA66VnEn",
  "key47": "Bw7GYHB1RNp44KrGkis7DwwAn7juqvtSwusFBL7cNhYaJuePi7Vc4w2p5HGZBPwCrGffEQNeBNcnMMB8v9T53ok",
  "key48": "2XEuqEd5g8CVdjA5niVisW8SdoKzNWR9qEuzi7VsRpDcoC5REJHEY31SpKAELQHcd4Uj4Ad7Papw24wRtmAd4CKk"
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
