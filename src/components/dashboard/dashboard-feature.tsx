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
    "3FShpoPBHgH5cqTY2SN1UHd29FiiFfCi5cPw9DDmntPvoyvwkqvhfvVB2FbkZ28eS95itdq5Y5ucYGHJyWvXTTCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U5jaXvDmTo5SyvWEJavG3YLPmT8tx3qD439JwSDb12uWDGuvKYUSCyuBCf5FVXJ1xH5f9tiwuyx6nsvLxAsiLrC",
  "key1": "42zqcVuNiFh7DnsuykuvVbcto5Yga8JaSUypDg9yuRC4MPJz5e8DAutWa5XaXwYfXKU2xhVMHZx9katDauKRpTbj",
  "key2": "iY2UeYyJockymFPg8fw2dSJK2G6DJjfvXs8yJJZPX7QfEfd2fCMw6pf4Mnf17gZ3ARd2XSV72tSsJm8wVazbEZZ",
  "key3": "2uw6eEr8zukpbCB2SpdHRnFndeV9Uvtc8NJAjcwexW3MxRvcWQFj7BrzFMme7S4RvnEzFApgQiHJToizWrppziLx",
  "key4": "59G2JAMJyamEWAfpftinbrnGvAoWSU9PnQbA7GhebvSG3NapSaoXmRwTGPRS5H9xG14xQxxc9oMsXZXd23DbnuaV",
  "key5": "3dVTy3hMmpusC2TDuKAS2gGJq3qk41vZprfpJB6RMHPMk5AktrzBUCfHTwTF3wMariNVKCyPUJwPLNKPy3PdPL6o",
  "key6": "2SJA3c7w6EixJXmftk5yrsT4xy5kCr4BajDKnGiKAiwBpj3TMBqaa5h89PN1Kzd8o5WKhmV1PnbLDkmdyytdwftn",
  "key7": "2DFcMQnhVz9F65fqT3ZxHoPHqhCpoPp6wasyx8psg15jtv1TBdpU9rTmWg2iTcSjzUgssVucJWEbYg9X1KSteNQg",
  "key8": "4PbUqMdwYSd4aXrxh2XXaYrkWP7zfuAXYHE3YjYEYCpLDM23UYs23fsrgY9Zt4TjGYApX3ZBoxsTopQteMjsDH4m",
  "key9": "2YruF2Lvnr3EK6uWv2Y1n6L2bd2r1zcJ9mC35SkLc3UNiCiq1udbUTNckbaab4kco3pbuCKTARdP35jagAFRC8JK",
  "key10": "4ynkBSE23PnkKphf2UN1ykfvQJkN4QF5xUyGP1Sjeooe9CdsUJyihn8Y38ZDLwrv9tWECCLT4jEAY9uMBDzZU6tR",
  "key11": "5uH3Fgm1izPhF6oM5AQRdGtgfW48Qzq7tDcMw5eUmBtPvCCNARmyH2k8Uf2BZyFLYRMZ4B3p8U7C12obkDKJuoZD",
  "key12": "3jKScb5Adr22SW1zuMXxBWdpKx8tCpicbxog7xSKnc18KEBc5hTq3cpzZnV4TKL4BggGWW75rdAjvgkTMPA91Rma",
  "key13": "XLeHMpRejRQfdf2k13uyAex67E5ovpRTMAUMW2tACCzLTZXgcM7y3WCJA5rasdDvqqqA4uwkjJYiBdjR1564iP5",
  "key14": "fkFa5eD8ciiCAGznQrdzwoYuhNnPATuZEwiPJH8gLzyVEHE67pqsjytUKd3wavGoto3GNLfMEgSVHfpVPWDMwzL",
  "key15": "4Sd3rHTXtf2SGPtTNfAyD18kr3S6Y3ze9U7hd6gLqExnf5BBLfsCHqL4rqMPEeBmAfZdEWkPdmQBJhZcH78EJYPJ",
  "key16": "4P3qhKeDkd6x83hofYvWeffMd4x1QUfvpyWbvkoAHzuATwiUv5XAcexfpVeF6T37oey9wcC7juRvNQr1itsfS69S",
  "key17": "24TywuTzcZXYZyakkYLM4kMVZ6mmLxEqywAnjP9woFm1e2et9LYWPPutgBpWBZs14wZZP3SiKwVptwP7pUcyVzpb",
  "key18": "mSqeParzo6quWiaTZqzXgmNVqFq7E2QFCs7WN9kC7ve6L9aeq85t3n1iogqscoHGy9vdygRop3KYcHA4qLDSdA2",
  "key19": "5tX4y4W1yiijtpoCBF4jGbobfh9Lvcby6PyjvHdZTUa1AJr47mcWJNFJxv9V3WhMQdwrhRwiaHA5GQa9i52gUYpa",
  "key20": "5Liq8ZSh7LKvmAgqwJURN6A3JiGsv6dxt7spm7JZYdYWc6BmaL4XL25d1EyMo5nvpQH1hnLkoP9LmhGgMS363Zzd",
  "key21": "5YeQXzJKpSFYsMFTXsjzhWoVrbDLiv14LAyRz1XLYrLgMVejDJPNHwuv99Rhri5qqv4Xcjfd2LmkFFf8f7VtC95J",
  "key22": "4H7Xjvxt6kehYxq7mVvfZjnwNcAHsdAa2i7h4DfeeTd5gUuptsmvdgvohM4J6SHWi4MdNNGGUEn6ya8HwEisEk5C",
  "key23": "4JcFPpbjP7jrqj8N5jsS5i3kMHyaTcPKQPBRUq2LcJ7oxA9zdFRc7HRj9B6EqxCG6kY3d4qEF2N2dMPkaon4uXEX",
  "key24": "4tW3sR42ERHcajmDAhycq22kH2qU6Jn93PNmGvV7MX36biSL5Yg1rePe3zrYxTGoqpRGBGZm2rgu18QX2fvJ7qva",
  "key25": "2cjyu3CRDq3mCG3Tjg5TFLYTKuTDMuvyNXHsfeuVkD3tWSjo9YVV61tA2NWFSmbMYqZt6c41tKyMWHohs8WcfRpx",
  "key26": "2KSLdLhJrhc6ygn6poWZkjigvMNBA84ob2MxvwAdoRA9Tt2T1HqRTqsVqDtDm7L9ZxQzkr6r8mwM1MHDiniLQKgm",
  "key27": "xzayA4nvTa9whJhKfnmUc9iv5VAyu2cNP9eBmc9yQu7gk9gxD37xVGeePDajbq922rbz4sxpnSZXXXPy4eWs2J4",
  "key28": "3eVq7xe4DzwfeCNiq3qgEM1uRMy3Xf27BwMxdasrP3U3oHU6nxFy6tEEF4Z6izmgW381qrPQj7dNAjQc6NNG11Np",
  "key29": "4R1sK3HfXEoM91pahHyaRnTbYoQRbBMPU8oAHyNiF9FH6ssvfiiyP3u1E2XFutAMttUaa4hdv5gXZ2SQodCZCMmx",
  "key30": "415K4L8TAWZJYS7CZJwz1PYtuaZ8p1i6gLnq1HAh1TtEGcjmLfpuU54sMywXwviqWw8HUrm6HXSRLLv7vXR1jGGf",
  "key31": "4hAzBzNRmDS2GBnJRR1CfcSdPVzryFDo1Hy8bMJpd3gkCeYmcNcFvcM2dDKAgavUqW8tM86Kgm8A8QYCYkRxkoLv",
  "key32": "3axuCcr4Dteu1VtkwCUfWrgarS9Rm3a1q1XNbYGArzhyREK5XYi6fwe5dorc7pVrFmy6ZnMiV9PFnxdbmU2KrFRG",
  "key33": "64StweqM45NXoqBmxACfpjuJGg2ZtZiwUDz9McCzrAhAAg4cMxoBMeWihAA9ZS5aPSXQt31H2pnGfKJhbrQDqhdD",
  "key34": "41DMfFU4xrP623k35mb2F4vZrHrmUHDHE1ZtdENBtD55nFrsLXrw7krAXybD6wdinyb8svwGgYpkFbpfq3Wvf41u",
  "key35": "3p3p5fk2VeKLix4hxPqwGM7Ja7moVegmXuxeUM7NMydbM1veZBWcoid3mXkpe7HjcUHtgdmU3q3PtmthPDMVtyqN"
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
