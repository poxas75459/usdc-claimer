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
    "34XThUXKrLvXkbo8mjJ9qprfXwbn5cepHEzWn2j5i2HCoJMheZRwqrSU9dHTNqANkhCMTKebd7ypueDzFBFyE2HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4Mm9J4EDAS52puz5mdshB2NNjNboTyKeCSk98UKm66GBtTyj4ZfaApQMXxByRkcum648Nyeuz6j3mtuM21Ethd",
  "key1": "5w2LrxouPjo3XWFVFegiQBue3bTLoAUCrsEqSvjS6yT86LsXasTMz2vovp88DnuRMebMHf2N212pT5ix3v7iUmkL",
  "key2": "5PBsdbDoSQNp1iNpDuWyUjRuBm452XW6QwacrwS28wmTcMR4hUjA3HJHx8XU6G3oMgvuuAHmnwDoSQjNq5rAW5bM",
  "key3": "5uabjEYvM3sGhTukqJFtEVN1c2VZaiBWn82DFfCT7HAuzYnJLEeAgE4Vyig2CoTjtpJugisywfaDv1ikwerFn5Bc",
  "key4": "4RF72CXectCxQMBX6Q6cxsVgBiwhJoRmXKxjQ8EFQyowEBBw8bwWycEKVe5CHctUmVqdcN8aGhh9B9f1MrNrTuiZ",
  "key5": "4XQfkpFoyN7LXYDhUqXqkGizQaDUwTWs6R1xtVLu67TFHrbRvArpTiqRcipKK6hD8Sqb4wDdmebjVDQkhoVkbBnr",
  "key6": "3HpxpFXbSPiKJ3vDwNvqP2AeXG28VeurEiaCaGAVoYzjDkGybt5qA8ELNWzVEVZ6j167e4TqVcpHu5uaXaHZaQAc",
  "key7": "45ykY1C4WsZenLiEmXfixhLKBx6csnRjv9uJHsGYibu5xPcJnJF1gGN4bge4UwRrGpQ3DizU8x7fFBJaPkqkR7UM",
  "key8": "UB2A2XMkEHhS9pm9d48HooP2Jw7whKFHE2GJd8TugBut8nu8Z17Ayntdn2TozLsLbqoaBm5SoASyaVo2aXkNBqa",
  "key9": "4fPRcwSYX7EU3N5xPAonXhwX4VDQYxmWCfj9ggmkuJqviqHGrDY4ECjRRrw3GxaPkaonEYCXsS9ebMC2hqhDcEzo",
  "key10": "JhoXGcAEtqAP9zaRLBHgNfqtAUtgPNL3z8uW3CsxfziC6PFVmz9CjaBqJqy7YnBqDn9eTL5egK3Ym7HQK5c6XJD",
  "key11": "53GzBu6Fy9J3vF6pj6gjaDawyU4NuUWgNNugVRJtQ4oVYZ1LNLfffF6JRfEP123nit9m9ethDXrNa6CmCNg6dtVF",
  "key12": "3jq1QkLc1yK1iPZYA7sTVKFVGqByrwCgkXukSYDKWvZd3RqED8dqAwMy8jJvBf42tUf8Pp9v7Cmiosa6bqmQeYoY",
  "key13": "22QJmaSuktrtV21teZemRVKcDntMX7BPZAyRCrPvFVzEYLVXxywmC25ELmei6fLwdDfJP9BYhTaNogJgRfpPsMRa",
  "key14": "2t9VLByfcjVRtpyTHULJN2r4UB7Fivb42j11ePbBQcBQmYtgEbPKHBZu1SL2hgcrknY5yx7iwgAb9xLhMathcW4y",
  "key15": "2bo8akHqei2rYUSQn9yxnC588QyhQTm99HSXf5Fo4jtXvB8QgLW4m4TTgt7ZPoBuHXCakaAMqGazXkNgb2YrjED8",
  "key16": "LL2e2BgBbfQDf167VVwyckZa1aKjK7NRWuH2qyhBPmZmZQcsjcdMzUzG7HkaTxPrc14gKdHEeSc1c3Kx6JKW6ZT",
  "key17": "2P26JKDJYHSebooXNuorbhtLA7Q7DSBswcovYn8VFbRuHZq66QHrB7HCAravdv69MrX9LwinQbpipe6BCCqPE7TC",
  "key18": "27sejjRKBBFS4CCQ18q5VpBCkgcTYgLX8isPqqMSF4uNjBmtCyV9q6kujRvAHQAwvJgfdsMyyPEeM4iByd8f8Jdr",
  "key19": "22xPJgz81dnUhtuuQVyPQfHWVaUobH1ijA47US7k7YRG7pcoEYwgSTtKRxPuUE8TTutd2PQnSH6ahexuSjzdcT1N",
  "key20": "4ngK5VY82gHXCJCHgxQXK7cz6ESEcYBJn3VXgfAXyWq3uGeeX4eat3z4VyXx8M9HHv6DsbuhucPxKdpgPwqAymMv",
  "key21": "43zySUhWcTwgArxccoyKkbbECzrKqCnPCrrnH3bWDBu8HBifWALouaGwtiV1XzxsoLFmdnbDQfqJuMghFeY39UFs",
  "key22": "2EHcTXYkeH7DA19B3QomHKc4WeUP4Mp2zrZeqqsbEchismYtQQZmiAsQ6ddPSSaG99y3GDu6QNuecDeM69m4jecV",
  "key23": "2s9V1cgirdRt1GeC6LWhqPxc6A6fY6HgT4yeQxkj7bSngW1UdW2wSe2LggLXkA29Qr7Pe5LCVX7nmMAaEvQSQPNb",
  "key24": "4BgtqzudfeNKUG5rV2xcSse2BafWEvSsKewxDfT5sDKrkAjKRZyhBGFCR28TDDkN2GcfeAvUy7fdydjCMWgCfbKH",
  "key25": "5epZxMv4hq8NXBWHhndvqQ6TgrdJrbqwpYbaLQfzGQ1Q7csai2XVP8c79aAnneoSx9vEBtML26bQ7G6FLFnstbh8",
  "key26": "2nyerQ8zgAq7PUUTqyris7gVYtneq5MWkSSVr5fd3SZicC9CuybYGMSZgrKXMgqBEXX8avknx3cLBCa3n2Ejmbib",
  "key27": "4avUE4vs3Ua8CcUdxq59jVjgo2YhdXYVGpM6adPnBdUfM1ncnUp8NfkpTRCBUWkkAmspo493HcHHjdW9o1KvVi2x",
  "key28": "JnSggPRdADEeVE9A6TkYYnciKiH2A7MyTNxqfxyoGE7zxw8rAo2VVQPagTnozxFTbumsjncBVnTsq2fnBg1is2b",
  "key29": "3HeFiYpLGRQn5zZAsqsjaXuo4jNqHEmq2VNwPHLde5SMLJWu2GpWZ9dNnb5pkc4Lx8KNetSGsgdkLwQrMspfh9tW",
  "key30": "5ri7zYp2p76e1Ty5JZpX5MXBcGAPWgy2zSbT4f4cXVXcTv4tBFNmEJpkpS9r3gS63hu8qyUSEe6Ab6M2RVzcG6uF",
  "key31": "22bVipn5eaYvc2ATAGDzFkF89UR9c55m8g86RbjdKNSxndfFBPYKGGyXwAjbGbHHi6uJTYAzD4p9CTNTr3CRG44n",
  "key32": "4Abwemx8nADZwvpV8qgta1SV7hAqPXe7r6uMte2sSucdvGdARHBZnc2U1N95cWevrRGkxe2EYbUDZ6tfA9VuXHR9",
  "key33": "66j6U6xQZfcnrQW4Yb67ktLBhp5RipVPhJ8XvDuKbNESJKeFRwU4g5mFZgoJsngqR4NFfs6mRwi6CgnvVrJaNpXy",
  "key34": "fuUyNtMZjM4N81zCQSSg9u29N13LyKHqvhRN9Twcuc2maXhsz5YMkpVHg9ueSu8yDeSVwXE4yXRcfDsYG66PFfq",
  "key35": "6jEg3ZiCsLHge2onXo1WJyvVyzHzTrHSdxqaNVB8wJXw2meEB6ARJhsHYWt3HkuWs51Wcb4vhxLc7uPR1WgrRJP",
  "key36": "25mANk8MhnLhyC1haPGUDWdgC6zKy4s8hmi1CCJi8LnkC3qu7fNAdvukgCKx48QpDwewBgo5AdxTgV9i6R7h5X46",
  "key37": "4p4AggQMbw269socFaB2nHE9it78pvPELK3nxRZJJpemxRVWiZdbUUdKo3q6UDv4TS44viwbd4PG2ctMPrHZL2x",
  "key38": "WVeSFgLAkhDQXAH46H1Cagrh713BguDJU2u3nZmQdxgqXQxia1GkoHQQPBGqbZF139yt2uWvNDKqiZ1LdVNsEs9",
  "key39": "5MxiZDEG18kh9ihKjTnj3Fon8iLVWf9XzEKAM6LZY44MNKuHbrWVv3SXD6y2h1v2XL5Q99ixHY52tvBEY7bKFcUF",
  "key40": "2HdeDx4eyJ8KjkSUaptHtV2pgFe5477Vd7HmQw5iGGbFamEbGA9JTe4uBLz2NSDVPRXag5u15zPjRgUtJ62UvXw8",
  "key41": "22urvtxTEPWjaxgc2HbR4KerGkuDdPavppmPwm3z6JUodGuujtyWzq7RhtaqUyv9ZM8yUec1bugfN8VaFhUPgs1f",
  "key42": "5r4yuEXvkyhScqE6q6RgmLcJbNhgaf7avcix1bCDAQcumK7dMRTXaLvxfx1pwXxEmk8bfCW4cNJFcSdfFda9vo8k",
  "key43": "2m4kx3pWq8tZ2x7skqw9eMVQKHQi8WDSCPuN9m7JrwQ7DKe9jMGaw21UEHR1rLKYJPhxzvAQL4vc8ybFsRi2WQrW",
  "key44": "3wtHatwjUN4T6K9ckQbhtE3YPgPQXxWiXtxxnwWzRWTaYzqhmjWaH862BRVmbtR9LaSJLwczEGu3a8oNWCaf14RU",
  "key45": "2xsSjg5EGGAhYPAa9TmHiPz3Wx9d7XFdMnjExMhQTeGyRtrx3MTJ2fxD9zGRWHCUz1bKPkyJbouLb2Xokbj8cMpA",
  "key46": "2RVfxxm3yPzDY63rGJ1bNbqXa5um6JPBbUSX7wkoXpVbDpEykUTYWwXE2UTE4UqyUxFwHc8Exbi2iw1hfLrTLNFt",
  "key47": "5TMSwMtgj6zTpepJpEjdSsSfUnpVmegDytWbCFb7iA86wpjakEjQux15hnFBdymCPSL5kVqhzYdZb5n5AEJwRRNm",
  "key48": "2pUmhFteXGgoUXgvcjeCK8CRdfAPhk3FrL2dL2h82U6n3ka4tzXRhTpzjRj46EKoEf4NbcHMgwzsPvHLHuNqHsRP",
  "key49": "b4YtbVvxKdGuzVZFV5RtYZzPJYP5BFpZUWbyNsStMV7hCUqSxxEdKCdntLGR54KbZH1bhLpeRPpPNiPGxEhY8Nk"
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
