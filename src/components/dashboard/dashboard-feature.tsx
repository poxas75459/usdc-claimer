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
    "fL93ENpm6tYTcekXZTeKPpqWaQXKuqVUHQ1ANEFenRQWcHEhExSozKXXceSm2sMhTqc9SvYJjny5LFXLXgvKMSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xLq7RCpqMFDZA5Wxt2sYza166FwrDP2zpNYQKit3sQZN82CFVkJH9DC9mwQz5zy7jpmZxmHTj5Eiie1jctsQcHH",
  "key1": "46GpJAqpZxYCrwmkAM94QPJNNTuV29waprbzspoZ9SBgMJ5bfT4G9XxGaAtZrCuDCBXUxFxkeypXjFTzaS3BUm9X",
  "key2": "5HGU2VQPBKivXa7B21KnNm9mzC4sJMknF2R9vg95fDefaF2hFJzr5pjnhToUdubiirfCpBDdaAjKEWnNxjArhPTc",
  "key3": "2Q2vUYLKrJV9kzw2DU7aemrper1rHwe2p7U467AeX9h2JroWg9pRVrXBrxukHibNS1JmeNcha4UnP3YVxTG1TJ4C",
  "key4": "28R1fBxVcByvvdzrspwjWHmiNF9cefsUvVmfa8mMS7sksQ5Tb6aPzYw1uZ5RA63Zq9ZMMXP1yML8u3Mf77XSegmM",
  "key5": "CYX216XL1y8ZH6td1XLKsfbqFkLrbfMtgB2k4xg5nxEa8MHjtRXv9HmnF7962kXK3hanTZ6PAhbnsdsQCzQr6uU",
  "key6": "5SNFGCD1tZXqNd83TPQRBm1DaJvWMBeUbyGEYBxWfeRupYF4Xhhe7Qe4nPtiCFtzQrV6tmhhuEpw9qxF6pbfjTA4",
  "key7": "5fGoHAVraiSMji3V5XwQQdcHzE2dMjAPvRVqEemMYAV2g73cgVKbhS9JvWh4Bwe23LDPEmzKZpoqCdHNXwBCXiK8",
  "key8": "4uq97wTuspj7pid7pdE4eTum9jeyiSFpKzW4U6h6CWTaFqsAeJiTmksD1zUXuN9JwHRC9s1aTRPApwVU5mJ7swV6",
  "key9": "2D99BfYV7r316JTvSbbZc7KVqvZpmYKkEaWwYFBpD2JfPmkAq1cEmt772nXHWnRf3QTDoghR8ukPAhP8TK2iKrxe",
  "key10": "hnkdPszMiZqRSjfoVUDAedHAy7bbMpaMCPLsds46RTXf6sLUbUevuCzMX8ovD2T4PwPjD2hQbY1B8BCPwD3haXN",
  "key11": "vQpdYmvfDGMhZwMjKbGp7bfKhidvbVdvaEWexykRFrYVLFo9LxBNkbx2qGMo4TGYKrbgX9SRyXJ11MYYtaszAKc",
  "key12": "2BDa8BpksVWzrFzdAowxP8qnnEYQmbidGYX7qkYawDs9MPwY4UXRbKu5BwiidmzWMcHRjxm2gjtmPu1bNW8DWpGa",
  "key13": "2WFLRob88odJtKfgKPkeuYrCzJJj4SdfkPeDhTQQsbp2vN1NrZEANPXWFBm1KSC7X4HtMqC7bzWh59rtT2nqYdFp",
  "key14": "5WCG6ngRPGoeqkrJvfzdtycmwDaRCxWRJo1gP6jepec9eHjNVrGqWPe8UFZMZAvhrsTjfFDqyb5x6RmnAbxnugmX",
  "key15": "HYqMcSwi9jGtxLBBy7ZhY2D7vUrktdiWSDQ3ADCaPmw44Uwi6tUnVgAGD5ur65ui7aeFwNK7Nt64czdB1L6KVaY",
  "key16": "3WeL39WuVJ2iq3XPdW7NjkL9hbeok6Z9NUKU7tvaC18pZrcGDwi58B6VZeTiSXEn8VYYMhrJxsGgtWi82uJdqbaN",
  "key17": "1QYgHZfckUKagZ1mLxDSMUYW15km7dt8F1zm7GmJ8HGbvPmaSPzaHFCYm2tTjdJpvBxTX7DumJ1TVmbc3Afxc54",
  "key18": "Y95PCpipHxaVLTtj34qUGcEaToWavTSyXTgBAehBdExnn5pUA33q4YwCzMQ8zEtzK8uVkjqt1uu7PZXztccT74X",
  "key19": "4UeBtZor5yQDdtqXcUvrGd9ZMLVrhrcJxREFrx4cDwsB1Kc5AU1mbaVLuejiHvDT2wuxZnMtRVShqfTSjTmp3yZc",
  "key20": "myxPWysFFGZuXc1FpVEfeJxkhd7vNe6tvhEqKBDzVWDRfoJs7uwQuQg9LxS45bcJwErZRREwKAc3BDnc9nnB8m3",
  "key21": "13mERznNMkBahVLrg8H71NdrWtCaE3BDaBe3VuUJnvwNh9rN1RpBpD3pf6GevHY3SdueDQwkuhWsCiF1WcNWAwL",
  "key22": "4yMvpVfBcwznzwggZHrPvxQPULhsC6BcYJYyNzQ92WLuYpB5rMU3xZmkufUQv31CptbmAsLMvC3xFop3MYAWVr3G",
  "key23": "3s78MWdYUY5wRbn4gTEbxWqRm5YWmN8Wqt1wdgemXpt265Aqqz21uEK8HQJhZbrSE4GeZtjBi7xKaK8jcABKocB3",
  "key24": "5g52F6nPMB5ErVmUi1zuJXi3f2nnqhTopPDJRf1Jvb5RxZVzL42dfuinSbfTGagTh7GVSQh4iiXrUegeKbHk17yL",
  "key25": "4dtdXHWbVLnX6yT8DzxF1pmCpzizYDNfRHGs3oahH3PKQ6zjRsPrh8egAkpkTGhrsjeuVX42aCoTy6c2ASxL1L3z",
  "key26": "3FAa4tCfufSqb4HMe1UJMVDFSDXmiRMq1taTyHW2FeMeXHDGfiZrnJ62aAvRsmSUbyXDvXdz8ux5XqmZQLEEYw3p",
  "key27": "5nTrFyXWLNZvKx33vVZsGtcRu4GqvUtr5Fj5FHMP78jX36u8D3kEtxwdULhALumrWUf6uyBJkqRDMRmzJWimhqpT",
  "key28": "34kwnMeDn9YpCew1hhSZDsDozudJ7mhkLTMTGrQ8194FLxwMgDG3ovc6k2xK7SvLCwfAadHoWorL7j7577MKwCNd",
  "key29": "2JHo6yY44yEwrnC78puyiqWmv5mFgyH3o8yBKSviiW9xFLJWb9NaPAesSpAEAbEpKKNr6BTdt6hxUMMAf3oChC3e",
  "key30": "4SPBK92Ek4riPyk1FrAX9US9LNThi9PwVzcPdnHtLbrfPRzcBsLpRRoWBBDDGwGGtLdqfgGh2hrAs4NwDZonRdFr",
  "key31": "2vnhFLikv9eVUxeuFKXGqpd7zQ1QZdW1ipG5WiVq9khMxJWXtcbgeq847VYXW7xoQziZkN8CDYdzZmECMM9vhwqp",
  "key32": "2T9jjH25fvb4VVGCkaJcaxQCY1LUgaVcFYLMJqQcxB1gWYtk4nSzuT3CF2QUTyaKD5GnT2XtgKjq6rescoxrxBjP",
  "key33": "62ZjaxYcT5vDGAko7GsPKxT876yRJ4WsVgbgUWwEsVk9nUbjFei57CwAuCKJxf6YCnRuqfxAHDnWccntBbWZXbgw",
  "key34": "4B4BFpXyTqxUGCbwLXRb8ELVZjhsDAZVmPCx38d3qx4ohSQ64oWNeDfLeFiqsWq6jLYfZCLHuSR1iWiwimLJrkdv",
  "key35": "2kmXSXTUby2XBSDqPqt6cXAaNjctMJ1MCEXpfAnTkGPne823VywnzwigRDdWkoJWcjhdHX2bTRxiNmpvgjmE4F2u",
  "key36": "3eNHjyf83XRYCZuScvFc1Xwy99E7zYUFLrMQKkpDWQFCz8fL7q4cEgUKzTWQH5hFteQ33KsdyBsk7BALX1fFVfJZ",
  "key37": "xLmwZYEfQSSoHBPa743Hg3hgKdXWKA4tyQtWixTz56WtmkJtYbZkRvyWUX5xhww3BKVFfSJU4iFEfzuvtLqwZHx",
  "key38": "52WSTBeM9ZFyXUPPD45KUgG5U4JUkdNhSh8HLswJBBMjwTRkPQqfD7FPxYeDHQwhcvZeJMAj2XwcUsD13dLChjGa",
  "key39": "55H22smERiFC1jhh32Z3FoiYbNTQeqNcEKcbWS4tHZ1KvShQE24RQZ5NXQNmfVeTbR4RqBFKc1f4fKuRwgcmMmjq",
  "key40": "4k1in2KqQR68XMCAWeB4Vypr2FnbVgRUT6n5nS2Yn7AXzcxJVQTQtrTj8RT5Ry3qmyaKbKW2EBhMJ2LHskSr6PAg",
  "key41": "4HdQU95Qf9zjKPWJxZEdko3EidDhRdGgUz39aDUy1rBoGAN8qviiJ2ZLuFKXYjqP2bAdH5GaAUn3Dv7W8y3FYhUe",
  "key42": "4HbuBWcp6a9jq2ia5EFmNinGKrWVcb73gs73tmy3dzErsNsYws1giDtoaewBdbJRdi1QgwyYpUZFbCLMBwtBpHGz",
  "key43": "3XXDrDG1uEekk8RwX5dPzyUWme7FaLkr4GjY5STg6PijxYbu1sieS4tzRbpc46zgiicKLctEmYRmF4StSCZ9xKvQ"
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
