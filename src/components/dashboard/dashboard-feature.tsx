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
    "5CEbDAj1Gy4QetRJ9CYJCGmgVynZ5YsCcYLY7E2JGxkupueGFeabAtYzFwWLvakRLHrYYWoUovwrQBiibE53Ltky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UadXs91BHnj22fPxujkx92AoxD6djxFsoyDPKjeG61heNetWVuYS167VRyybRiNskcXG5n5vtrW8pYgPn5ujJsj",
  "key1": "wY9MzEQRW7sD9hMruWGAGVnF3ctgRTHGSoFTv5Lp9C1Nh5pYyAS8puuXKPmAiHv3p7i5oY9EoAX1kQcvCF6NxDb",
  "key2": "58PSarzifCVcP4WNGAMvDwzmVcuykCAvxUFAy4f9eEukBBjF8XwsYvsq7J5jw46gUrShSrehVQjsiD9znP3EeR6A",
  "key3": "3ju5rgXYXPuYbNfSdyKa8ZbJL37Hri2NZkugADyjzU2p4uRAmCF7Ey1zUiRQTZqJJNedCwDBpDkqmkkR1hu4kW2L",
  "key4": "2Lc6vLi4PCjGPLjXXi9zazhobLMFoxmfK9SJxk2AbUECLwHGp8ADSZSTjodNEzfKeLsQozWtGdHzYDvq8EQgoKku",
  "key5": "2q4feYy9AcnAtcgpkqZ7YhPzvRpKJ7VNBy4nxJvMVkzVnVN5hmGjShNm6GnF7k3VZCdMSioXkz2YfSTk4Bx8CnEB",
  "key6": "5NqzYY76pi5p8xxjYqqg8KjgdKKSyYYaHWuUznJSj4TbcQC2AjtfjMpxMtmYiW5NrQHf8yC8cbXds6j1q87zozrh",
  "key7": "3GnT5kDT8Hi42j9qfFsK69X5BDT4t4AtS77ud6SHhAy8BzjqMoA1fTMT6dYbrSRYtbcTAJYXTpWDkRguVgdMkARQ",
  "key8": "24tR5aVLSQJh8wd1mXNqNxvTxAgwnd8EkVjwqujtyu64E39xRCyy6ST1SUyXHSCmd4nDHv6RfMY5onDiW6ksaWGi",
  "key9": "MeNGUqRK3RKP5eXQH5i59xhcFE5rvJG1pk2ePT7GjdSzCYjhd93JGmnR8upoo6c6XP7KfU7b5Z8oAW1bKfgk75Z",
  "key10": "2tfMTiPMnjAjahmdqTJBPtCMuwpCZmWmdUdpay7fFKryGi5keGgUaJQoWt2mSAQL8YD5uWZkJ18H2Ki2GNm8mKoj",
  "key11": "SgwiNwyH6kmg9DqXsS9JJLk8LbunT5YsW82Kh8Tf6zF7sSeXGja6NcgW4UgVyNkNKQfJYdKv2S67pZ6Bcp7cibT",
  "key12": "2ghxHUrMQkhooRRmVY9RAdNttUpmsQuLVCAY3c4T15KvLLPKdnaKZaxxHU4SdEyT7GUiWYYxMQku5QEHuJ5jY3Kr",
  "key13": "4d4HKoGdqoy7CBMqZooYoHrFR8WucnEu4Y6J7YvKaD9TxvBQkWYoNpdn85PMm19NRyPbrp1pMRLPK3FwMpRB5K4j",
  "key14": "4etpqNjUhvjWiGHKP8GuwN47Ls1EWocRGRDEdnrXkboMb1uGx8K6Lvkuto56Yfc16CxqLpCHQmTkn5L8z3FpE7rK",
  "key15": "3o1Xshp3m6mLe46XdGUEjrqfcacpYs8fByERehHEZoBjmECN7q1sUR4oJySFceoVtcK2GjgZrjeHaeERmd76v7mn",
  "key16": "6qHdKM7VnKaa8HTFqLaK2HygRAFDZhEYXWDh9CLV9wcRa36gAgWBsXzL4EetURQG3Bunu5r4J5yTSo8dfiaWMJs",
  "key17": "SmH1ut4fcaBrjbZecEFms8FHffPaBu6sdktEfCzgyWVmNqaQLEumrSxNdpTF6WTrrXzprQPuJnetnFxiSCMj6rJ",
  "key18": "5chqRQJSMrNfXaQw2ALStxeX1ABQgoAgAbLsV4fhtiAmtA2E4vCXFXfsHWxEZEFXkPNVjxDSjafsRMoMx266oseu",
  "key19": "2z9U9ib9tREoHag1Nwjnv28ybdw8QqCRsi9ZQf5KMHFPeNitRLwcvhxg6GPZByAYrndjwTHXdZS47nVnwCUMGFKg",
  "key20": "4qfTuZeKG4wmyYzcYoahMSsjfuEmmbUkUuN9bTCArEvGTsWwhAe6GiqopYRuwoaQ8zvfLTWiCNhTJQfwh82ybdKH",
  "key21": "39JtWXj1gomCRwn7s81pA3rJ7yaVePKZx1dmEzr3dv7qeZAkkPkVa9rFWbq54EvbQ3WdiZ8QS98W5XKod7jy3xvV",
  "key22": "5NdRjvYh9vbcH58a8QwBkMDCqGD84RzCXLeKaWmGDBK1DRsbPdjT6p6wuniXhe6x7ftfgipy6WsEuYA6kxMQun7r",
  "key23": "5ZUKG5y9MT8EBhZJHGSPznuh7M2isEX2U9pBEsc18ipSXWqEbHpcnp2uqgi6R7A4YGB3mmbzi236Lb2Hf8CXAuhV",
  "key24": "5zwoAVwVbDntghLdAtetVxHbqke7NBUAuVPSW7mEtCWUuc4ZTga2GEhKjYN5bAoCXZEpq3qG7Rf6pc9bnGMTm3w1",
  "key25": "4o76hemc7z2bc7hcj2LanMxeojcig4KjJYmA782gu11EdZfTrHEREsDNaSWHnn6YvMPKpyY7X47xKJhoi3XERggh",
  "key26": "3tPVHb2i9nnSxJyJXMMdLWC3mg7Bm4upLX7Djdex1Y2vCwG6Xwpp8iMgmB17Yx1pGD37DtbPjPFZKp5gGGscXBvi",
  "key27": "22MxJhTWVsKQYr2MKFdvmz2S9tWJgR2tfWM81etYXY3gBdLryC9GmNANNr3XdkbUzsy8UEFeWWuwVLEhcnAC1i3e",
  "key28": "3jGCzqwXWUNFvZmbyi4ox86zumuiXfWjLiVR26JsU6Ts1j5rdcW1sDR2imdDnBHPrCoBzKp4kDFBcdAsSty4T1yr",
  "key29": "4Bk817ZypW8GZrT7JpYjbgbcx23XiHM2gfiirYizEtmkn7dMVTqQ812j7GQEqRr4m4xifb5iZjmfu6HdhCdt22TC",
  "key30": "3or9dJFouU5XmJ4MmxFCkfB6EpLAe4JsNuLQMsm7j95Lz4gcBHWZDqrJfmiDWzpEPtF5qTJbZwucrJDcwvjHrKKk",
  "key31": "33wi667Xm44kVgy187gtp75qD6KMXiKrRubzQbZPAvFx6pamQECbaq6eBLLFTXedRGySdopJwpKWmEPEabhxf6DR",
  "key32": "3f7juWcyUuYDrp6YzVRpG8KZR8BxPpE81ewqvy4LHVc2jHgk7fnPexcKcF6qKT754WVBENEJznYu46nCYcxRgfGW",
  "key33": "2QRWwJcvBCRcgXNQZK4LLn8Y4JZrebwFmL4Ka61qVs3VmonEpBezbZCUGYZADj7XMioAwWMvqMmro54c2AQXf5qn",
  "key34": "my7yGsW7obnvDwg25nzSW86QLtgbRd3y5866XTHzKgHKkrCg57n8Yydxyymdf9C2GieUTiZwhzY2w8vs7j86hjw",
  "key35": "4zN4KzB8yF3TjfYTqyn8ZhzhcUFKknzBgarwmU1DgzKx9oRSqz7JGu3So2og5NKK1jzycACW7puGWZcSvLx1XDsJ",
  "key36": "2Eu2nrYSRnodY2a9XQr9Avxi9hSexJ7KcQjwVrU2C1pU3quiTqZbyvPxrP5Kj5yT7U1Gmh6W5Cf68W1N6dPyYmUz",
  "key37": "33DYp6GDA1J8RGWsJr7UufTNeWTmnmArAcXKkHQbnnnJpNJCdzMusobcUBugcbGZNsiLb4H3PxhHS64rvyjBpGqC",
  "key38": "4qC8Rk1D99JpyhiX86ESheJygJ7vy5EhFj9MbGrq4dp2emY2vXQFc2C1Smtq3mGtQWYy3EMEqkJy62rpYVqBanXC",
  "key39": "3aUsDnwqAmgFaFKHJc9qHKzMXqPF7fQ5XvYheKDumY4WyK7jeW1F228oU4TLnV3Tti5Ptu5hV34QAeDMmA8oC7nf",
  "key40": "3fGZmjPYqj33dtknzZF6hbY9GL2LybPAa95ortP3NxfPCtzszpMt2kJDDbHhfE6kT22LGcYd6QgTMravVt87D5zR",
  "key41": "2MDcHAwHjP1eiqwNdFjM2DJ333qQQDD6mxbuA6dciPZ3K7Y6DXB3mDnLShsKLEr9uqZLG5k18rEC8R3HnUcqHECx",
  "key42": "4132Fd5ZPwWNoxH9G6tYNQ7e23m9Yt5CCiPwGknmuySndkk72Ds5SG5R98qGikPM6Zb7oJ2TUgUwAWK2gpjSNoZ7",
  "key43": "5c6gaQ8VhzNJtDrHhMXUEoF2r28ANMhmNdbjKx6Sp3Mpy4fHjVYCvJNRzQSPq5zvWiHCFB5uzVuEGspWPAgk9uVf",
  "key44": "3X3j2emCvdpA5wJryzosVidFunWEfwmBWCjYP5QkZ5ReEDuFV3JSwi6Nu5Mrv6h8qEaqiH3Yi5vqX2845esyrtBx",
  "key45": "4sCrcoK3L5fj11R5yPJaeGCrrEX46vVoLcoC3c82oCoe5aWKgA9Xmi2iPwbDKeSH3gXMwqk2DhLTwdUEcK3KWwQz",
  "key46": "2iDJJnx3Ddoc2AnckwbKHbr3gtZUmLvtQo2f4H4P55hYj8uwgKCJ6oESr9RxqHio6oKDV83YWW3oFheirdxY6hMS",
  "key47": "4bh11av8dDwuMJA7hvhQhedcgRUpwvbM6cyse5FFt8BoJ4pd3G36CRa9s8mo764kvzm13HcUD7DexGgBXiKQ24jX",
  "key48": "uF3LTrM2isS3wHWKdNMqbV3KZythd7oJc8DYpHojxUPjhHZS1cg7e2L8nFWyJWx7U44BBY4YJgaqTB3FPVFohYP"
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
