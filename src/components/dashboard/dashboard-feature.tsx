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
    "3gMWHhW1PsxeCfixsdmJSukaNGNVrSdtaAEpztmv1jDb4WXxBDFeyuxkWGDvpT6Ukq5j8AW6bdjLHheZpg1QLKwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rmGSfhpwSW1ApSQUJznPRyN5NrNfrM2Wakj6STRyHh1x791EXiCtGG2fx6JwGkFExRdeut8KJpytkzNmeL8N1wj",
  "key1": "4zXFTMt5KYhnJip9NatwkSJoEYDU2D7MkCSZbwYDWjxfsqoXDL2gomhodTLCzPiaWUfzrzkCJT7kidSD81r8j8iR",
  "key2": "4HSE4RLt4S4y37iQM7fWwRr74roE4PNRBLyptcomZLeDKjxbZBg53jFvYvxrayvkmXKWDxmVeV9Jucmhber8hSPa",
  "key3": "7U5ydEtTZD1s7i2UsXPPeMFJdaSvMWuiMTRN7REd3tpZeFYD1gie1ZNCxyGURAe1HAJosTHbTgyZvMfbdF9N8Ut",
  "key4": "2xgQfG1ZUjK58b8k75PrkvJAeHrAyzfGWn1WupDHbmJy3ij5DSwtdY9jCr3yDmdrQEtNpFGgE7ycVoth3nBJq3uy",
  "key5": "rKbLkQy26krrrtYRqJyZC4nVjAUJ1yFpqfhmDRAsd326Gtas4LTPMMAHP3zYBYphQydpu15uyahjQFZGwarqKWi",
  "key6": "5zAJRwcaGitHwMN2f9zeTJUbRDWShvh2TSFyfDM8DQipPnvM8NFHJBvtizBZecTyKdh7YWHYPe1BjsepLrCkkSeK",
  "key7": "2YR149DtSaUft1FvBBbCFjggdT3nePyjyc9XvyqJ6evkBR5BVshnBuKsseQPEPkpC3SAZsiUbbzYfQvvbxarFKVf",
  "key8": "26LCsd7UmHfpuqDFLsfnfRJsia7Nd7aABcSrpubcYo79keLEz36J3hP1iEij9YohNLoNk8HaVS1wXUjC7SgDbBeW",
  "key9": "TGKjHMs2T4M2WbvDrpS2EQ3WePMNkj5Dui9EAq2N3afSHAVAgqcfLr1XAv9T8y1cA2ECtfDMZCK6mfun3trDipY",
  "key10": "5QwCj53whV8mVqtHLZEzsNtNQywmX9zvAaZ4nJYPfAEpVwGxBh5pbxdACgbeH4kzCBeC1Qp9QC5oE4QCPua4yS36",
  "key11": "3FB2J3vk67VEw6QXEcemJ6KfxsFsK8vsJkgMmwc5ztdhM5ZdDDYikqGkZLXZDxAib5ssKgQkWNePam43jDUB8LDh",
  "key12": "4CWkSCf15N2zFF4e71JBuZgi6f4vsZRxDo1QVAop2CSKKAMG7S85mAT3q4orMHBM3UYf7PXtkHz52puvov338JEX",
  "key13": "3GmTBggv35b8ZYDdvgFX7DtwxkwqxDG2yDx1PaD8DhC1Cp9VHptKWGfiuasDwc7jfoBfNwTdSLCxWjfzkPpXuz4y",
  "key14": "4Qy88T6EE7rwVHQuZP9VjRkpaCMay6j8UXYhNVr4hy7dVEdZaH3ktWRGqiHgNkYSsYQsWaASdmEWbmu1MvVyyyUE",
  "key15": "3VXm4gXXXTksg1LwE1MZBvpKrfC4QgcZXDa2aodZLJKLHjebC1bdT9CRTcZ3C8oH6LfNGpzxf14DdLwVZ66aRct4",
  "key16": "2b5UcJoVgzpUTZN8J51HMdumQRLaY9t92U7XuJSJ47CrmgNm2jNoMQ8CxqXBH3vMaNLypxVrg3tFa1jmwmzUsbDK",
  "key17": "3kMB2ocy4qbeRRafFB5S4TVBytrZ6JECMG3AZFPK3wCUBSyxz1WKpBntpqqLgtCdwUUXg4tTSuuhcjwyn4DufrzF",
  "key18": "o2EYuizMsRfJeEz7Rin9iWj29RHyRgLas9Hhc96CCCcqCe4mJdMvS1T2BpBvXFYCu3Mzvf4zMnjnzE13Tc5A8DD",
  "key19": "4Wa56oj1qQa3TBhPtowua77hc6h7Pbjiv5DWFMbqyR7eAxXxoV8mASAgs3sfjTKsH4fMHD4jnYo7nVe4xeTmChcb",
  "key20": "1jWinyxvRXNw184isUEkFYyjhm33bGJVoRtLx1sczMkJzpwa63QdV1VWSb6mRSGpjhUC93fXk7ZeXK7jP3sDBGi",
  "key21": "V7iunbdGaKGeNd36om6A8m18txQHLpYC6tCqY6eU4PejMYbUPtExLn6fDjzrohggmSHDJCt1S1Npi6nBAsAHzbw",
  "key22": "4kbUJu8FxrnJwMFFMVY8GkknnTiFDTNXv9g542skjTnqY3sR8z4bShnpE5AS2pxz2tPAMDXdG5N9Z9yZ2jHsbH7Z",
  "key23": "2nqz8sASSsrEAX9eCqdMXeJ5oXBLWHN31Tr8UdQ553uLaYewi2URpoUTZw6ARy8bLncU8nCDHxkk1rGCBJAJ7vMD",
  "key24": "88j2d43Rrj7R6oCh49W4hNXJ6ARrGkhpUkhSajLxsNLyMnz23xKzFLyXr6HSDxdb2C6vRLCcBBS4eMUxRH6AaKx",
  "key25": "3AgSo8LH8hUMmmiwAkTGeWVNLeCkQuKFbneV47KaeyKsD2ogXB9EWZQT4mHxTXGDrLiatXQrwZsbaES33SaJ1GDZ",
  "key26": "5Ye65aNMkGx8Cb2vEPCbxtsMuBvd1vonyZfbvr7rgPcteigNNZYMUESc6157UangNRe6GFJZAKvxEtCRTtYtcbbJ",
  "key27": "h1FmE9XkjF2d444Pspe3wR82rtxxuJ7Hqaeb7XB3oCMruwXyYL3QB8yTjJ3V6NZdiesvMfDkYZdmNjqEWbPw38g",
  "key28": "5k47t9w6CVzEn5ZwvBn8Z5baTNWxex6nM2zAJJuehMsetUG8G7rsbfsUdS2feSjtAkxJ2gBEYzdPgqZ1bD7ptPRJ",
  "key29": "ZhrfRY1z9MsiN8s6tEjk41fXdKNUY72DSoRw7dndZ3wCvMZMEAvU32DffvJcJ8ssesSaBRwJytChHdPgfbkgcVS",
  "key30": "5ntd7ATTdFdKoHMto2hkywYPYawFGUSK799dDQEBFP85vPzAAXPJgnED2Bw1P9cwrDUnRfHghXkG4cX7athAxFBe",
  "key31": "FopLXWgN6PQvs5YBB38iHLZHRBkvZuDoHUxokTRBDaSdGYEata9ftp2PpAPg7yEHfPTyFVmZ6vSVfHHzT27f4e1",
  "key32": "RtvSVPh54yp2b2HiswTNZTneWwnLzPUdM7mYYK7s7MXpRt9jVxtUysUExsys5Cuni2eGL8ZY7xGATsYuLMmjAci",
  "key33": "4w38nWGGdCXbsBc7a5Bc67KZCw5983t2b3AY1gZqKgbRT1yKQXQL4ygcRZQCLfSjmYQ7pSdduWA971R3K2jygaKe",
  "key34": "5FNRea8Jop7h6VgW82gC2fWiYYBMSfyupGchT5UqWCoptoF8UaBktqWPaHzDWvzQ5FAsb7XrfxmSJBE9iRz5ojGk",
  "key35": "3R8Zzp5XqZ9hj19xuxgCCpNc38mKg5G1inMy69UTpgdZrLV5cuPxay6J3kdEYoR1399QNoq3brJSCaRrq78bgXZK",
  "key36": "FVyyPeroa9HUYHWQ1NQnjJ4vCii8KtPFg1LX78hUkbh41BcaHxUD5YCpxdTEcMKUdnhaH2uxawXiN8wCJCHGtda",
  "key37": "KEiYxLjgbSg4qxiwhL2z7LZ6EUeVCmYkcn3EVqjpPSd58kF9CPb6VhxQYPnKSe2xKPFR4NAqqpmHwXaAUcaYKKv",
  "key38": "V7Gq5nrvHGzTTJbTXXb8QxEPej9RgvPLD3JL2LAjH8iKEtfycXVkGnw9fNoWdsFiHuYY1WWt44gJ8DjRizKgCoB",
  "key39": "48wf1VG7CD6hNWC2Nwq7ZyFVhQSAxJ9AkRRiWUAqYdA3hJyfi9NZWna9jPwZmYurWZeryhmsysry5s5Vr9YE4wKt",
  "key40": "gvWABREXvaaM8wJfijgspB3PeZ8uceGxAEzeC9KVT5k9jHoP3grLESiPviFnbMLXY8wRgf9LBc9C372Ro5s7se3",
  "key41": "3rk5uSw8TzbU6nLY6rpjUGQsDANex67ktgb3sKoShrNmU81Cp9FP8L4s4J1chY3Qh8w1ZKENaJpyN1iSonryz2xf",
  "key42": "tffSmzBr1veZwuoC4PivTpnEKu1iQs72F4UoH5qEr3s5LLK9GZ3tMhFHuYmhDXuenFUPS2is2AkZoP7wjFczcMw",
  "key43": "62y65VGxQiDJETXUzwB4q7LKj9qNH7wVF3bRNDdXDE5JtpiUmFcZ7dbrzwsFPZLA3tfb4YDmpQK6AbjHRa5nmfrv",
  "key44": "4nDycfbxpTubvJDYhpHsAjYzWfzsSpBUVL27APqLtJxCKojW9BfQcaEYbdwZx1rM3i5kqnnHYff5Qk5Kngh4Tfgt",
  "key45": "21yyT37YKmghWrwT7zD3qEMoC1k41Jp8dxsD7GqVTMpzEmtgmW3mCzpfcYKeTMFQzjcYfL1kaWL2szqkcKuZKxuF",
  "key46": "5RXHy6PEbt41t7PuXsuDbRoeKDbPLdz1NnFWVb1KDTfNcboxDnepfSGh3ey5qxRMewMQGw7RNUByuvazSESL3hGU",
  "key47": "4SoLPz2Tz1fG9iorjTbwrRJAbEV1aHbo9CW4GWoTSoMj6aYwSKJueb2ke191Md6vjWVoHvRTckcuQk2mku2qaMf3",
  "key48": "3P4PsLQWmeaGubsGWtPE5H6V24BNyjdXAo46w4HFzR1MY5LRd9kyGNGiRenjUgB76qn1A2QPyDLAXUGQrLwhbvFT",
  "key49": "65pZCWNWNQcDsUicL6p52STVj279HnhvJCTBYwTrbZ3hgX5jL5cBSKcWsKc5bn3DCA4sxYjjQVmoaK7tuuuexgDa"
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
