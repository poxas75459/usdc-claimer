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
    "4CCXzQQPSZzFiDsMpZ1uLVH2up8iNC4hfxn6BJ9Zeu1B96HWRze7Fc53L7BtUnfUHPUeXedVVQR2n85iGgcSkBhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6AfoJAHZMrPyJqTFkbnSNiCMbQAb1vUgBaEyBgjfJGkdQDEBXY4ywmvsjgo9mqdMuuvfZSWHYKTBPnJWosqEhD",
  "key1": "FnBfLFwsPuBkZ77Bq8xRvAfnZAb8qgM69uSoUf9PTj9vJycyqUpoTeM3pCVYMjAAgqVgDgSUiE77wtmBWBv32nT",
  "key2": "5zgFjkEPD3HGkhgcoJsmH3J9f74DLFoqxp7uPiogGg6qd4HjMsdkw4hXN9RQhVwGBcrHP9KKSseXRHDugNaF8zQa",
  "key3": "hgTZ2Qi92zsKkR6MjgJPnwA8GJ1DGPeyBu9aGaBSFN2dys8rFJJNGWNH9QYipQYih31S21MHz83HZ2rDFiEN87C",
  "key4": "pYu5HyFmemveVNyTvnmeSdWE5JS18N6bn6QA7hp8kAprEEsvnQcm1FVSWgpCh4mQs31zrATLxziLhRiyQiH6Sev",
  "key5": "4quVjV7aQjazutXRCD3M9rRrmHNBX3uM1HBHoM42dPpocfCpgTLXmgXC3zN5UMAepcXUe4724639vSExcN2Q8tUG",
  "key6": "3WDWbMR8oDRTq64A2U2LBQ7PeGxyR1Q1KwBkLHqiSSuNeiczjNL28Z35xMuvFsn8RMeThaBkvEu5i17e95Kfx4Qm",
  "key7": "2xVx5DomQpMg6V1gbVnRMcCFfEQXCxxxsFuaVs1oiuwdEQKxq2KXKRLP9MagttPU5hUkXgrpoSP7vQBCSKVEFfEb",
  "key8": "4g8SE28Gwvr9cMSZeku7U22GSAs8AeqtU1LCFH4nWzsx9zxo71XAnaij4ZEjWihMyTEGx8tFYburNucY6tpwJxBF",
  "key9": "3kKH1QLR9o9cZvSaeSnsXyPn8g5iamAXe3JrB8YKCZMMrbZnURqavnqgHsJTmQyewz6C229kDCc1cURHRwzUfGyz",
  "key10": "5yfU2RLWDBZH99LU8e2xPKoVq9k8unzUAd9hWy2SQv65ukPyK9Q7DLoCYA3twyoEPw71mbQEcBLb4PEh9KhsC8qX",
  "key11": "4UhEEx7bZi93grx19Gx46jaHAVyFJA9Gi8oaGNZLd6jSmG9fWL48npgjaAA6HFcn3DN3hzh12UWKP67Px6ibRNKL",
  "key12": "56KFpzhkQV3SmXTVAHdQBeoiA6avDgwsDwUoZArG3mvH4v7xrtKJZm7mYTN9Apy2SN4REnzEV8Pn2dTasJZTt9WW",
  "key13": "4SzLSRNsPo75YXPQNqaorsPZYEcNeCgx6a351kEXE1r6xiniTYrRvax8kLn134MABKhH6gxi2kBbQkuRh9jb7PiQ",
  "key14": "5cRu3xCZeL1pweiQJzzJDAsAgAiSwUQjoV1GapqrM18reZvUHTHWc8ZarG4KCbLUvBCc8LrSjXy5MJtxBewaUAsn",
  "key15": "4LwcLVpSngwvhK492cw5r8ksY8jyAXD1yvUJmcXsScL7aRBPe1t9X6CdWRDrFda2ceCSjJizHHvURkZQsBVxAper",
  "key16": "54EKRTMGg3RP9fNXLAaKe5SvG3yS1zUcv86zpqLBxtQhRz7w1ipZE4BNTRgx73hKPMA7dvuCgsqeVyFbEqzsuSUt",
  "key17": "4mgbxYPRABPMWVnv2Rs7AASdnWQtdDutnP5dUQvswPZwa4aYzXMYaWSQBFnKMvsFdsWn7uQNNM1aFHwRT7bRtktq",
  "key18": "4WerZjmZvG6CjYUJmBgKJTKrPsyh9kSHn5kG2GU5tFvgeMpbpBpwxGxHjYdgq2ahFTKY1Y3G4qAtvnGszavBKMia",
  "key19": "5FrNiyeF8tBPNyf7iaYY9dmVi4HgwaJCT16WzHcdt4YQQ6S23NLFqM6mdsrS3LzhtWJBF5NwTqMBtRBUnPaKCHoK",
  "key20": "ej5xBEKoPnNyyH7rjE419k7qNbaS8ALVC6Q1jCuqkWWKLwMu3WCMHULyoCLWUdaVmP5PeHHiPmEFtPRKhx6qGTW",
  "key21": "4eHxxtRMiLyY43fRhoqWXngcv5JtueusnMakMkoBg7JdQt6b6D21Qqkmae681eE4pLSRJAnNyw3rywctj9fgreDo",
  "key22": "3zXXMLkeuHsFL49tnLhrNCA7VXHHAFDbQ5GjcT1UadKSM9718ngzxBTY7XXrAtsFqgpw4VacdiEF18UAAjrcBCVV",
  "key23": "NUNV4oi3ZMU4E7y8Ze2Yc6Lp2kz2N8nSLzM2E2QAokUA5T2c27f3eip7Zsj5RqG67R1uZ9TJKZ958VRPpV7SxJi",
  "key24": "murhtJfZ7FGy5uUMqv1sVnN87HFdgQ4udEP1DnxnwAxUibXfaQCP7NcJt3fFCi49R4Sp3yE6EnWLFZFFqZZ9NLy",
  "key25": "4u3PRduirf5onTJn69FyfV2VMD8a5993384YUxTXZH5KuNw6rsa9fvs5qbRbsX9FHArCgzTuRJkFHuAWQhZcNtka",
  "key26": "37cdpSZbfsgz9e9Ct3qzTqkciQjmn8Qxye9RAof9cTPQ4fg6ZjKVWMXqK1JrRpzbFTiJT43uMBCwc97fZwKL1zAX",
  "key27": "5vKpefs28Q3ue7rooTss7Pryp3JSVQ2PZQHCEDoPYxcgwAnsseRWsjfDVdnBsre61epDVGu2gnWiBwV84PSYqArc",
  "key28": "2rfEfajGQpiPysLaSLziwxWcbGDyi8Bezn1kAu9LivyAG8DhBhbuzrMY34uBTiMNovmuAYRgWuCbRcLRpVAkPatM",
  "key29": "4c8nngkAFQxnD8xAG6U83MXBrecoq7L64QVvtkwzM8wTjq4s8UTLNYjDP4x3Bpfsh1B2RnXtDbKH8C2McBbCHqMj",
  "key30": "4o143PEwQ8SSe7s3EvmhpnHZGGE5S943AhhDf2fJwbxYo99MakHRvGTf45bVqvMWHTQSbiN2SX38FJT6CmkQ5bM9",
  "key31": "2jYE9utDYFmqAvzTADAgNKYvF4rr4MpwQkdwEWBN8dm7NmKTY6mjpppPpEQXjv3GTfR6CFfdEK5QSWw2txZGguQ9",
  "key32": "5E7yjaTwi3s3YcGUQhQ7VY3VHrjYTQZ4R5hVGieJpnNiYMww3PANk9XeQ8UsLWEwiGLgTVM2uobcL7XQpXSLbdD2",
  "key33": "65vKHdKKmNi7Lxm1tZoT7A9JR6BALLE46Svxzbo3r1357NR8mdHVSre468gjYtst7rKmKDCsV5dDojypEv6CnomH",
  "key34": "5JVqornGpR76UfFF8fffDzzkWqpPBERbrQWR4stmXHirRFTAVo18Bnt2U9L3PJdH9RZgSva9Nvg3awyjX5Vf71dH",
  "key35": "4jDszuNXngv1AvxFtctw36yT6EgaFP8CDh4iEkQxHhsw24KnKSRF4ySFnXZN8j4cirjjposw56J9JqTG88BBByt6",
  "key36": "2zi3rYhp8PBweYGe3F8LZ9m4CBNwM8kwSBqrNCDjuWEEJeNexdCvGkm852erUxYuWYx3yBg7TnNgXVDnD5i3tfXV",
  "key37": "5rmBj9QNnfuEMxXJjTSCQoxk19fPokerJEW3zvrMokSu1RcJGzqVtBiaYSqzUVvZPTpWUw27Hre5sfGkmbnZkc2Y",
  "key38": "2m9Npp2519C5XVfZz5NuVpqZ7MCkiPJcv63qNhAZ7w4wqPqW4hmhhgPthXXA3jiia6EPniBPUsbiY9oxQUb73xaD",
  "key39": "2vvgi9cLdQmHj4S536KLQRheazsjUjjMemmvvEeYFTSpQEf7BaF5HKJsHhxyVCXfu88hy8U9uDds28DiY6BVVDmv",
  "key40": "5JJEky4n9MyZEqrAtQedsE6soXJfJAuKeBdMuhyuNds46uwzmUaoirBYYVWTX3MUHHTNZ8CRdHCURN3fsNcdSSeF",
  "key41": "jfPnDcZLisUK2Tq2aDLuQ36VihjCRohziLWUjkunupH5FiWexXHg3M3taD2KwzCxcYv1UKrfXPqfE2yRWk1C1qM",
  "key42": "5vt88fizFwB5DX6Zu3w3qS9FVFGJqFvefsffZpP1mfv5noNtM5UnTAdKStKZH96axBTYMgLM3MSjEb7975akNn74",
  "key43": "5uJjiMd9kWjT4bRWfTx1aFg6mt4ZdC2rZbZFQDk7pRTCWZ7mFsVHqa6RtSf3DHK7hHuaLdoQqtTYo14DbbK5LQTw",
  "key44": "CoAG8QCauPWk5rnxKaGRngeTCw1CCQ8c9KxjkdyH4bqKBZ1aK72Cmp7Xjpz1VfRvDnx6tn35TKSA1PQUhmZi1j9",
  "key45": "Y811xbyKdumYN97D9tiQF4vo7RPdx1Hv7FoiN83vPbTZNuYNUCSjzxttBCtXsEcUrr46TNsWciUzanLKBgcwnpo",
  "key46": "28WGvSt4b1czWqeqtKXWgrtndd6F4bGv2sQbvqeBVMAzAcxmWGWoLUH55BSMtVUVRSwZ5ZSa6ZkzvTJ3YpUGSa5y",
  "key47": "3gJS3QJmApeRFGgEDGeLcbzw8zbj9Ts6Z6FLQmJ99pQ4urtwKW4zKYFFZvpyeWkFmvhNLn7LERpjqHAXfvV3YQLF"
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
