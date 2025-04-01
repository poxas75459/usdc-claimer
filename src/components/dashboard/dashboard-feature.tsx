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
    "2vyrKW2x2jVX57EATV72A5uzbDBYq8CUtJ7dGU4hceUaYHKx4GT3qgUpRgp8C2eF9UgKk2wboTCaViH1g5Vfm3Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgNd9q2M92CDGWFTRRbAVkmUWt2Ewzyy4GQBYun1wdezVWgajd82PGVCEDcaRhfu2yKjpk87gx6fgHiZE6YJLxz",
  "key1": "pBqip79J7bXxcNS7aSsrxnoM7ckyDaVP1WSTVyFkLqeqaaW39RXVxYNJ4wyR1RSgTpB8JpwBGAXnnyiqVM7u2dV",
  "key2": "3SZUHJUj3yJHToBZ9D7QEC5y4ze42ZbPrLUQ3cStx6P3dXx3VrawoS8mf9ggwcim2WreiQr83kDV7BajRB7Pfsgm",
  "key3": "3PeV2tjZfisTt12fwdEgZh9FDatsuKiJM1qh6MH9u84C6UK2R9UobbPCt8jpiN9j6kyBtLwwyTY8KYYVVqKxFKqn",
  "key4": "3FEAm6b8C1pgAYiCw9EpnkGUphtKZzevMg6YNB73zNvZLSC9Fhicu3cZLaXkwWM3Y8vNbG1dHr6RsqjK3qJBL65A",
  "key5": "5VnGZ2HtDSCwxx4MDVX8Ktkj4i8mkPQnmMuBrQeVbAsB2kkYLWGzW9pYWF9UjtwPfzYzm8zGymXDvqbhhfRTYjTN",
  "key6": "3M5duJ1NoPQWrjrpRi2icCy5LjDFBrR5VH9ZUrdfSbi6Ff1EXSe5UcaY5Wwi23MtJU8JUnUPubmHdvwvJ3kb95W4",
  "key7": "4oRcXfH6anYGtSPH3KepodKDaJS1jzta4apgNVhpFjXgnecw7b4T8nMb47KA1Wukwr9DDuZrueqMqBEGRbv7Eq7G",
  "key8": "4rw3CBUKSCfb2GLtuHJ5DrEveLKryjb51nA51T5CxghBhh825dnVaSt48LRw7KJ6QpH9LNBYtCDehW7oStuhg8PQ",
  "key9": "5hsnYqvFW8aDcPx5RRuWKRPWNTwauWrJ9c6o1FBajivZAeuk3BGMyvCgqp3EeGpKiJDTeaMpgrsUh43FsCae83nG",
  "key10": "QP18ksjqs22pPZPr6HYZRdtGaqp92dXuaiUb6dfeP88ZXPKCmKVS1HJsrskoWF2RvRFSF8NLVEbZtNxL4sbdq5y",
  "key11": "5NKVCxwCMKLQoit5f3XKDnH3ASiGrtNke36D9uFcQmKZojT6H4gHbWBCZhBUTFj9ZrhuQnV5jat9TnviXT8EqtQw",
  "key12": "2rCe8oGVQs8hScVCeHQj6ep33P7JaH2Uqwu9WWpFs9XWjeCPuo2a1X2kwKzrjLyoJSzah54FGA7TzYt4xc7DENvL",
  "key13": "4pdhKfLa6LWeosuamwD7tqMwKuZrAuF4giK6sCAHCKq7E3ZAZFQ5kTTMiDcgfTDLMuUGxdoi6RPGVHLYkwrRXSy2",
  "key14": "4aGk9kqono1Aot99W8kwhKUsTfCByWSu5xyKPG8cZnSZ8R2KGFszz3mpEyrDdkqkj67WnjhdoYmSak6BRU17Wzxr",
  "key15": "3UFT221Rj4ecqmDr49jR3Ef81yMKfEjDDZ8kNvaF299avQwn9xVLs8t62oV29TGdJ86M2XjJo36tH11PDehL4Yyj",
  "key16": "5Nx9Xij9RSnzL5qC83cqSAPQ1dYBskfV3Btup7PnYtmsFEvbvuAJezYwr5YwBAYVryp5dvsadEEz3YmnAYUAwK8B",
  "key17": "4o3NPSw5kPzFahfnmBmDw3tccGh3CDgrFe2tZm1zkHLxEYj9YSTrko4P8V2v3bazxJLCFyhwEiCgkKe57YjxvqXw",
  "key18": "ZeK6zYroYmrsr41jrAjQmke6cX32BqdLAptXNmq3opS91fuqmbxWKY57G1iMWvtfATFNnEeRDgU3s3dThk5EXjY",
  "key19": "4n2oud7SLqwNWzeowPPD89yKeTsdNhG4qZipcmrabCtD66KA1PtTPaVtBmcx7yAHBztb4GhkYre2aBceMx7HWgmi",
  "key20": "vuB8zi2AQQ25G7epCygEaQouj4TJw5pGAjgkxUAJfNSLPBuZqoh6mLjJy64rjpo2kMPJgvxVqiVitzodh3Mh8Jp",
  "key21": "33y3GjkNENoh8iFpjgBAmrFPEi1qi81kkJDai7bp2YqKvxzkhFBJ5ccM42AWRKSjTKjvCecSZ5qsKpX9ouxNHjsj",
  "key22": "rifSzcBD4Bdq2wFJuPAi5aminCkiZ47AYg8G9kp3Qe4vUx34sjxURQSm4CJow7M6uW13RxuTJvDTB8FNdSAPLiS",
  "key23": "2NKvsZvcyMM28gPfq7kGio2P4YCwcSCbYdBHhZ5T35zjwbrtro49RgaHmccvP2YpiEsZTLoGMgyS1TsdrHqgFbFU",
  "key24": "YQK8v42cPoJgRVHFA7LumAzRkJq35en71qKbi6zhzLr73tmm6sbfgbjqRnjxPpsC2gvSzRSRC7y3qmDSweyBnB3",
  "key25": "2G3HCZrjJvD3DqW7HDfRau9skUhskEgjjztgEUG5YKZgopLQHr4yatnaFviShcD1S2S6oQHH1dfj91cMttuf3Tj1",
  "key26": "4Tw24DDSkx2SgcpJr3DwvS9GpZqCvyUdeKPLo4n8dvZHQVoRf9TbZ9jw34wDQ8LWq7ddt7S1xGwnoWq5ZGdNAuyx",
  "key27": "5hsAzqw3QjyghjrLJYAHeC4poLXUf4vV3GJKnPoFCArFh1dCRr3bBm5mFDzQmubud7kWfJyZ5fFMfz6bmwQE6CWo",
  "key28": "28mCJ7YAPbWCJJ4D5ud3wfyWEnf5FqsoX17bFRHkF1qQbXm5XdZiooX9jd9NH1dy6NLaAcDhb7saZpBmtwie6ctW",
  "key29": "4cCydAhqyAnrXrQrp1x97Mn74hUNZuGsbvdV6AacdWjGGx9c5cwoLrXyrKMhcP6AwiKPPSpmyPzKSTf3ae5CTwJ3",
  "key30": "3bR6JLj8h6VzECYRMaVjSUJQfCWHB6KYXgzzTawmFVrkP9TmW2xBYaxEwuiXYvhcjHbsZzHmJsRzmEKwAph9TBJH",
  "key31": "5DgsHSkviiT6zXyVLHc5c9799LqUphUqUjWoaJnYQSMdbrjFDtJu4m43DU7fpf5KRoiqvyr27z6hGXLiL1LFAFc",
  "key32": "thJKSooHbeoERHgwGNQFHpyhim3nDfAAnADXNyhBSnNimq157tbTsVLvsJJhZsvxu8FA6SWZT3tvqdDmM1JKb5Q",
  "key33": "t3A3H5C3HW4uS5VPAkXptDr65unLTpPb7mJhZwDGofFFjvtDbpFEE1rD2owNfWQ4LXMr3STTS1smHFj3DE82naX",
  "key34": "3VqsEH2GswkPVwY1XPy3wx4HfFRYLdWe4KU9XXokwcsFpEbS9WGUfcALkx6WfgeRr5m5RSXRHBq3FMtmyTDigAni",
  "key35": "4mZDoZ1qoRwYvKptma2oi3QWvcmq5Fof1nR892B3ZFvzhaHUsDnU2NU2J3taozKMWrnmMUEwm1eJrM8hhaophuZp",
  "key36": "FNwapMQVX8xeVmZ2aJXQewAYUPwbUK3pXSzMLADSHXgmbT2YP5F2MoMwkdZeDD7pyW5v8riYYYYuCUBTk7AMzrv",
  "key37": "3716C92sRta9tgbHax2uXeMkMJ39Tt6BPPieRZdnLvNGir1c138nCsuXbfVZYNgSp5hiBZayUEgSAGmqFfwvQ6ry",
  "key38": "5w2xECWVT9KxxU9CsearNJaeptkrF6Dn6VNS576zy5SJGJUNrAzAoUiT8FWvj48dB9j3vRcewdfNWhj7E87rx2ms",
  "key39": "2K27mucG3EJz52NrjmD9fPMgXmxXnY8LKSuMcGJTrtHrfBKYV7uCXCuRwfnvfgi9cmaZWoXDhgbjRR7tPRuMGALM"
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
