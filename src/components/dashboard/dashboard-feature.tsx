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
    "4cWWPZCz6AWB8JGz95tNgLZZhS17FoSF5T3435PVK3ci7dY9ia8qFgEE1EYmfjMLZsEJbTyGobSjXTEhE2oySP9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFbPMA7gyFNJghbaR8LAWrHxWtfQJ2gS8WPLicQbsvgxjytCSoqEGym2bZf82MsB7WS8yYPV2y5nfZiiSu2FTmx",
  "key1": "4WwsmRiPEsa8sCroj15H4jWFBXSdsuoxwKTLxGMCHdURpptL9EyutPqj7g5p42wQxPcCRjbnADiXmx7HxpAtamMa",
  "key2": "3uvRVw4mQ1YSaMFV8Dpd9Fki6Ax1WA13ir1bDRtnbiysqBY3tWhFoSedtHsqoMJfiKvc26T1DA9KS9C2HfKavF3U",
  "key3": "3gaZJB9jovvUJ1TBYyiQRztobXNo7AicAVyNCNvejmochqSbEwXGWpssaF37SoYs4gXE2x2JHxM9AE3RwbCFMjBJ",
  "key4": "2AThia1ojqh3XB5aWuNs4UZgTAaPcW2EK5BqX2kp3DUWY8gnZ9J33mTwktnnQ8J23YzgzGTedfNGiTgLWSz812hW",
  "key5": "367cNimWtEv4pg1EZj7EcjAWwD1PjsyLsbyPeqJAsyEmiKUgv2TPVjomSHL7gxHDePkU83HbE51VzugMrrW7ATJr",
  "key6": "5sfjobkqyYeAPPYgiqWfXUonFaGz4aEhsEs3Nxxhw8JS89wYvH78Ct4y1MapCNN6dizm1n1ZbRFEQ1AjWN19WrPx",
  "key7": "5AWyiFSiCFmY6uJKVjxjsea7WAJqUBGCBmEUYy8oaW5RufVPvduNhaMj7JentpmKYJ81yVuikUM7bfqQ1pKB4FQ5",
  "key8": "pkCPoHgASz7HVjW4vzKHrTJxx51Xs57cE5bAx6hcAR5jyLcrjN5wNmT882eWJVVnSFppxcZNHQnEYDSiy6uwJ5V",
  "key9": "5bm1b3eBPQoRxAgfAYie1PAR5BqWkTDYgMShjS8tz8HRBgzQvavAR6SB5WmuCEFDoU9o1gMevRGRxtS32bQJSA7D",
  "key10": "aRuXbANJJvnfrXdEQWzEC1JCqA6bLZTiafRHa3bLShiY5JNnVNdR1JqxY7XPvefyF6KQgvDcjec8L2XqftsfdMw",
  "key11": "TZBXNo7NyRVnZKP5AnkkDVsQJQGxgcwuhjopXXmpkGvKXsM3JA3Z4Rp3mP4s7SnuAwrXBmLmiUWKkFdTVDTsRRv",
  "key12": "21V2MZ47iZd97R8nw6rJHZsC8NzbbdLg8J5ttJZe4MwLJLSMt5hEK4PuArm4WDvaQFg6aDZHGsaqCUZdUV34GaxL",
  "key13": "wxuH7XXK5ZpnQg8otn2aw3GyUyMfkc4Hz5jcCPC67cBJw4m3v6JDEmqSwk2vN8ixuU1xNocDH3ecdVtoLzucnkY",
  "key14": "6mK7fAN36B1NGakatrGWkVZAPuhx4hbyf6aiEVeRRZfUapmhfgwnrCu8q2R9HMwFFWVm91XzgMVfzaXrx22PcvG",
  "key15": "qq5a4RuKakUpbtSGhn22NjYjTUSbZ4z9zQLp3wPdzs7spfaNnhVjwywYycJxo8hvQt3XrZ7jsv8P7kx8ZNCPobj",
  "key16": "3oXcV9Lfuwo4AjdnYNb33KwZRoGz8sVXurCHC5JDzrVAMyD433hWJxEJoWFqaFQfpFZh9TnMwpGmL85wcUxwQCwD",
  "key17": "4h9P7UAZdYtKeb8iRXaxrBjHwQfXTNEfzjB9LGn3tsbe8M4beXUNQ7mSTuSnJT17rUctAsURsRVbn3mb2xoTw8Wn",
  "key18": "wLN5g1P2W8P7HCtDTmvxcyHkjRJxMefNhbsxWbdisZnNeHdL3HypJsvjEtThUhzbxMKnKREajuUsc8qYGM8Pyqe",
  "key19": "gWExsKfTGGbZ7JMwYRtTj4FsXVzJ7R9bwFJmovtJNhe4AY9GwL1PfqUxaRWWAbp9p3x59HYiUp6GUrDenbw7qiH",
  "key20": "3gqVa1H5qhsGbLPG5kd4xVggjos1ooHh6ZRJCFzXPmPoeAyoktrzwMi9tMorUGTN1nJNjC1e3qjJjwWByZbuVpAA",
  "key21": "4RcWwyjiKJgKsPqrnNtYWhA4C7E7nBRYaXbTT334jCE1XC4rrb3NrMCZ3sfhN7YkEuRiUv4CSWkEBMKMWLYhojDn",
  "key22": "5bGNV6RQ7r3aqgDGM3sgnwf3vv7yth1S5DyWynLwSJfue6PepDdaqQAZhn7e3r8JQpDwa46CGGfoLotS63174LCY",
  "key23": "wyYyHrq9qrLAb8ncR4yt5E81JWfVGYfSd4JsK1KJ3EaJgP8Nej9MqpdHsR9w5A8qdn2J7kZZtVrRZfNqAVUMxxb",
  "key24": "5WNJak7Lwqsp4tergSbCuVc2S2zxtHK2NQy1mUU4g2Pth79P7WRxB8oyHSkKXgoqr9HFbZb25adwuTtzXjbiN4kc",
  "key25": "vNJNV1A1DpmToypZWwYxqVyd9Ck2amUjDFFirQUg8cNuXshNdCrDTzNVDgCGuq2z8wP4ugaAPSLnh1sYeTvRps5",
  "key26": "3PjyTJADWkXgfBQQbFAfAsJAtFFbXBJo4Q7BTB5jpaBBLbjnsEngPtrsmHwshayMSKtP8sfEZcQPXNezjDVnWM47",
  "key27": "56HmsAsXpN281mpVECGvJEKN3Hxbk2Z38u8h8HuJGbKUACT8UfdaBqV81fPL8T4F2TtBgNCrE5aABxBGGHGcPXgy",
  "key28": "bvBAo2DE4aWi2CqWALJfHEAF4MUe8yRyA9VTyEtB7Cnyw6jaiP1XoUYeXGbUPdo73kMv8nMxMPBV6cB8wuMJKum",
  "key29": "2DibRhn7uadLCad53E8d3wyHfgt9HKJYojD3z3SELs5s9D2pGKNg7XzW7BmRT9BREbbbeimYCgTuatTz7bHRxRAt",
  "key30": "5u2kh5xWFZDsMC7krsgV8bv7YNGhScVsFHGktfExmD6PeoEy5CsEWoNT3GT1dtzGa5D3ba2rq6x7eZt3Eqxf2gr9",
  "key31": "PuG9ZXLDAS4BnAs8RTmhPzsWcDzQbMrE2W5FzvMqhu4FpLnWga22kjYezNEa6mro2C4xt1XV4oCigfbc4nQF7Gq",
  "key32": "3E37FnHe6XPxEyHyHBYNz4qNpaiRrTMYGHxUc3ev6b5PWDAquaE1Ha3sJtfDB1iEkFHsifNrVwB3SykaNo15Kamx",
  "key33": "5Ak7LcZuwhZuB4ybo32DRfycJfjrZxv53qGSbFF5KMK5soKEXgiyCrGhKxDxuowPph7avyQTny4zxTU9JLdET86n",
  "key34": "wJs7jMeo8uCrm1sUvPsT5jFhCVFkk989Dvma9zr1wNJoRPiCLHrBYj1933vih1tDEkKEACoBURrFYkLmkfVFHhe",
  "key35": "17WWPswjVkd8cgRidZnoC6zeCJnEaHKEX8bQXYmBhbkhmFrACVssXJKT9yukfeEwEgvwxAypvgm2eQP9FXRB4CE",
  "key36": "4WCvhrtVtwX7wfv8hHnDiDTPNTTUb9i2RH4dBcxq6SQDFcVRLUpnqE2YMa2Ke8oUrHuNnMp2DXwCZ7bHx8aCAqB2",
  "key37": "3CbwQLgThBybtmQDEfvPREHbn7ZNgyDj1kdD63pxnzYfo3QvpfFKKxgvkaD1y1cPZDJMBoWVqNbafikyVzNeQ5Ae",
  "key38": "37yB1AhjWpgWA3Kd8QRSjHuUJgQ13PxjQZ5kcUCYsvuKDF6iLKmbi7JW8wiqUqgsjCm1SzUVeqXgSQ3T7L4UBgfA",
  "key39": "3EAaRDtPtSE2oQVzKT7C4b6J2aAeix7FBH7KPcfv44Wbth8c1yshPdgckBfVLPXAKnfzoV8bKXjkYhJmt3wCSzfP",
  "key40": "3Fhrh3ZmwaYG74uLrB6sVCm3ouhWgcAdWuDTCmULG6xCmzjczU8K5nEQV92YsvMxoqH8mMExmsbXzQYAzDEDvms3",
  "key41": "2roecQ4w78LrbN8ALRtYjdtG4o3hBUTYCoCcWCy12xY1f7vmqYszQhzw34AqeJ9awKT3JrkFf17UrETNe4CvSQ7H",
  "key42": "2tytQNspuUwjc8TcB2ftRbnig64eCqNxtpESSfPMS6pMFmHtjK8nZLqj9iQmGdr5yeZoGVpyXbTGUCS1TcUEi4hy",
  "key43": "Rtgu1pw44owos2ZApDpw4fPVLPKPqUxjsez1rqqJzkouhNU4Jsw4KYEKFwDPwKuZaEBgPxTnLDSNfg2Kv1LtVG5"
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
