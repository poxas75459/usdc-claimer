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
    "3LFpp2E2uCKsoy7v8Qv5j24vG7D3fv1agYSeDU43RaC5P2vJ1xkbp8ZaoEQDNXS5d26MSZ8wgmgUvyKJ7DHj6uH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fGUFK2DVAjkBnU4VSpEbLHM7raP5Xp2ixo4AQZTtUr9Eg9fRwctp9LnRF5C319RqXABS32A6p5Y9DhLkrNVaCE1",
  "key1": "5ai3DbV9Q9YwPgMoodgesEzgseocE9PaT6eJU3biLyRmJm5UqDrEbdwHQmgLFHWHRxNpsL8iUGRKQA2rhxTZKiWj",
  "key2": "37NHddENFE37WLxQnz8JG5iCEujtMRmXqBrYUPxhxUorMrWhPM5XMS3XbD7VdERRHhEevEmfcrfR33wgk5VkPAN3",
  "key3": "UA6p5aTiViuo5VZxy9DL8iV3r1b73QFxQDmxcp7Xe1TwdHgqPpbK53QwqRu2TukuN6zjzyFLCVpKspMd6WAGFMr",
  "key4": "2GbiC4XZ4rQoHppAC26t2eZGF4EbefnZzcPNUq9gSVGtKoJaqMwh6zFqW91MJfHu5fuD92d6uU7jf5eC6bA7GhDh",
  "key5": "4tK3nDF5yNioXuNuTmLpUWUTM8xMCMTX9nQ3TAHPjREBsZmhzLoJwtszzrHSdHqz2uGfgDt5qG1GRNW7bj213sWg",
  "key6": "4cyFMmqY11ME8efMp2npqxydaV71X57oSUsNxhCaSTPVcCZCv1f3bbX6vkK3bFUV2xw2N6kcEv5VQkX1pQ7YtwWb",
  "key7": "1rme9wHcxv5uoKJhRatU5C8x1FD9k1SxH6pza1d4w7oe1VaPtoEVkVjVta63gq8kuYPAqcWHri8DhJpjh94F7jA",
  "key8": "27rJhgoM6JB5oT39krHfxFxr2rcUnrGMERxLGPvs6bMnhybSSwWkRCczV2a19xBJZL8dm35vuSVgHzEuA4nA6ZDx",
  "key9": "2ETfXZtFDHARXxNJfM7n6p5uSrFLxzK9C3xERpxw2DHCVQF1B5vaMEi4WoV7EWbUqZ87YuXDBjRxbzdeF5qtEJt3",
  "key10": "43zd7919EJwDVAWVKRSi3WqqWipQVM26uHHhe2qTaRPeJpG7MgajqVKZUPZRmU4dPtaVXjn4zFEaaihMAHz4VsVz",
  "key11": "441k8qLepLDKsKj4vAsRdsbCvgwgCtqxWDnfbHkbAjaD3fKUL8cy49EnfoAGqVj4VbdwfbgEZoycq17ebz7G5Bs8",
  "key12": "3rakAfsi6hUaWTKhCxwRffTdbpmZxHSsi693ysEujSoPJ2SF6qQ584beoV4sGPxGdzZPPvkSzsvkXnLHtq5KYa1C",
  "key13": "5T96J6cxBhK9ToGaD3Wz6E9CWUeTDbX9seW92BokBBwsPL19pdV452ZB8S4mSkxZgsHCBxm8isE3gaRZeKEVPagU",
  "key14": "3NHUsHwCz5fz7cTVSFYz1dFHfEEoCqAqCM4SGWT3mBpqbBmLCKyNMx2wEVHyWtiLg5WWJAs45yPbbdxkge3boiFK",
  "key15": "42xayLbXxWnU5XZEADLmeUmtGCgDPLXRoUU2RrYi2KvbysH5f5PV366NVJjvN7oMpxro73raqiAHLt76XLQ2kSB8",
  "key16": "4zWwtGxh2qicq2zeAUC69teGVaGQGc8tFrDfnG7o2bU2G76BiaVcKALBoaBBEQtjPi2buo9ZhR2YxLZKjbEPycVP",
  "key17": "3piH5XXLFJd8idQoxA4vUZbw8csTrTPg2NZ365FoHeVcEij6yRJBBTq5vqJC7krkBLqdKqcbmCwAfzvetERv2rpH",
  "key18": "2C4m9D48FimsbDQtLRLpAhCVkVdSth9isB3hppJ9abzng9FaFiAchELCAYDGx7Vet1Uwjw4dumwuYf7JEkvD4ESQ",
  "key19": "3H976eUEWvs3nat1EKB2NSHxJdNnhgLVSKa6sy5zsYbwPeWFoDfHEp2gPcSBRLi3mqQ4AqrDyUfGFM2kDWQPvvXt",
  "key20": "2gsgFAVNyBcfxWgMCJobRaF5xVRFzTyhjV4Wg3gGvQ2sF1orrdT5EQwvLhmmq8BSwGZoBvJg6FFYKjE3RtiryCcJ",
  "key21": "5Wafvi595t4bKW5j5A8AyNxrJWijavNxtdgTWGTDZMRtnwezwtY4ARipShkNMDxNFpRGy74NL2hHhniy9bDedtaW",
  "key22": "48qWp5FmM3PeNFEXNoTofzdDx46YQM5CT4JhaMfCWmGSBtAHeSVXT7KMUaRU7KKjHtW6iXx5JCR4MEjwQfhYtfcG",
  "key23": "5RUHHqiATK9avs4ywK1JJvDCFH4vRaLcYyW5HuBAEEkAUVKe1LrntCGxkmN4UoxhDhv1AyfJNR3DZqbCRMVE3g93",
  "key24": "2Us2RnD7jLtknq3MUuST9hpKtd9QKFandajuKiPnfKHXPs9GS5SvpAVGUmTGEsdgsnCmdctXppoZcPmAjTjW8w21",
  "key25": "2L3DZv1yvTQEXx8CdkinK7vSkBVEfrRfhj49TzvGhoAwxdhACWBMq8i73uuj7kCMenJ19Cc5qN5nTWjps3NFtwEn",
  "key26": "5H93HPDgAieydrEop8aBFm95KwXMCHxuBRLpkxwDkJ1xRsuDnpwgitGgVkLH8yk5gHKBUh8smnE8tTnsbKaf5sDW",
  "key27": "42T48u8fqXbbV47bAjveNAHusjFLX8VqS2NSDFjaw4LHF7eYqnbuDMt8rNhV55vt8axjcQBB15fnVADyi5RBEcYc",
  "key28": "35cwfyMhaLjmNCDPqcm2vof8iLP783ZoLmvcioE3Dy3EPKURzgQLWhgXJgZff4k4bvyUvNCtgGmpLFkid21NNAze",
  "key29": "2eFjMPZXXKsQJ2WRqfDEG2WAcp3aMh5tcPRvDFmsSdFpy3M7orMXz5TzxP9TwtSuomeF4ja9oEvsRQgrCmo8Fsfz",
  "key30": "4qiK3aikKNR1EpDW7wLsVzJASRf6wnj1UbiKDiiG9UF62BoTmrn8o2gubYis1CctMtaA6fnw2yTcCiBzj8pPc329",
  "key31": "3oobopNoHfLiB8ixmg5S1Ya7BEXD9Khg9EYxTH4BBthEutPD7wLYAFRxj4rPxzcf8vnNAQ59CWbt7VppVNWDX7e2",
  "key32": "3G2gvmQYHTtH3WwLWak9eRMBUFPc5iBKoZxwfRyN1thAsztvc3VN5ueC2fTMUjm1ca3ZoAm26N6gynE4ABPxSKav",
  "key33": "3FnSiKTdmd3gYKjKTVwQ9crCyCKW2HtK3ovQ4huEQiFqyWGuFnQLmBEEYWpKgFobBRZWf3YFbiq17dMS63jNRqXv",
  "key34": "62je6yE6GhhqiArbxXxQ1QT3ved6uECxv9V7ovHg8tMMxcTa5ojFxsH8PWf3j1gNFTz4BS4vubcPHThwQSfRGnt",
  "key35": "67Lffhvpa2TDAQqTJrDNSwinG3ZRATt5qXRtpTTcfBPVgrTfyyZnahLxPSwXWR92Y7CiQ8VN6uzr1UbWT99T5WnK",
  "key36": "43aXgqnNtLmxo9PZGp2gx4sTxfGvUgdQ3Ft8nahBLpUk6ziz7cszGxPcqb88k8Z4h7qsMgdYQbyBXFnbELTsYJ4z",
  "key37": "55vLiLtrWhMmavSdb29eZ8S1G6EHuu3pNA4QLFp9c9z1gWqVBs6exK2URNKFMKPQnF76iow5n1AyisQhVZaNfWFs",
  "key38": "4sH6GgM5xYTSHS8Nwa5LgiXQYd7PcX3tCPbdgWojs3xop8d6r7jBiJWwCnid3KkZULYUArZaUJSTi4m1mhuMJNef",
  "key39": "D56JGxRcmqongKURrH2EJH9iSdeCPt52UEjJUVDf7GFZcoiRtgPPjWtDcK9dMurtV9QgEQguiKGKFrnmbjPj8bJ"
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
