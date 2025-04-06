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
    "3k1oRvUdPCFrRQTRiBAm1QBSni1xqk9KDUv6i5yQqPbaRFo9yfXCnc5yFdGS718feBpip9DtCPnuX3cHoaSTE7oz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYw62FiFK4ytoV3aJTz4GHYWcjce5jAbpguVuSzxugMhaBzEpVCDDU5gG2VuoupYVh6iB9KWsvZuCYScea9sPBe",
  "key1": "56kAhgyqpJeMAms8wXsMpHHrDYhbrHt16qMBbEBaHmSVNxHmzwFu3kW4RaDstfoyBd4aixwWn3kdUWXHuspx4cXh",
  "key2": "26u8FpsoorekKeBpBYcwnUyqUUtsLLSeV9fhxSgxEUF595wfs4arazVstbFgR77DAWxkNfhP69LgrneDWhUZrDDt",
  "key3": "4VudCmGpzpMoHrFcgGLyvUQ52xM5c4stvomYn9eakMwJJAw9owgECGVHknjGKL8dfeKdYc8X2BqTW8VQouNXQLpx",
  "key4": "5qaKkzUBNAkZctTpsF9g3xizX11JuuNrarfVTXLPrAgEu61tCSdmErrX4xtbrVvwQeHBYpGuGK6KV5kMctm1rat7",
  "key5": "4wfrFmHhuGqcZLwEUPEX9E8UEEqueA3wKgNBmbkq8xnC6HJqMbkGVxLjKxsQTEr6Tj17s9VK9H9v53fLcHeYBb84",
  "key6": "2kdAjSnsLcX1ghf2zS6k6bJfkoTqbwg8xZazdjPHGSg6G9Zwxa6PwMPrKhZqGQaFV4LnAR7jLs9QSEGLL15Qx557",
  "key7": "2AhtKwyBXdvd99x1CnJDpWjEaZ1e3RLALUVy1zJkDzP3Q73GF1asHHenh7ytvtGePHArkhsE2grM5iqJasTTtw2v",
  "key8": "4xLgXqKdWaQCrc2rstf2EJXtifn6iwPTv6tJ3vv4T3vhyr51C23efrR7wYhmHj8jaBKLGwXJFT669GLCxshXiEyV",
  "key9": "QM5XKaFT9QDzGaFXK83mGmcUBssEdg2VqrufQaob59yna6qyMcJwbcW6cSYn8VwnPeJnRTCRhjBnWr1B1RieBe4",
  "key10": "3DXEuPpiHbVX7xthXHKoHijP1p6LDre7t2b9gswBUngCa1EArZVNc35XcvKbAidaYYGFfcRf9PGyaQ7sQNUYRNfn",
  "key11": "4v5LKjq6GamoapfNMoMP4va8jzepP2tFfhtRtZw3mRxAUUFAWrAn8Ppe6ZRNaiu6tpq2GNBdN3CkP86GbQJiiDRy",
  "key12": "37u8PTByM5G8KNRsZhEFzyQwQd9yGzKsVS6fs8Qu6yukXDso1cuZnbmHY4VR6uBHCJfwdavXBiJguoZgBSTwDsNJ",
  "key13": "2QV797AEk7xMHhquPfaEy3eGyX4XLWgUeaovQjyFsYEM6kYxrLjLGfDXvyyTBunLMVpXt25owGFB7Sr7Zo7TbAAv",
  "key14": "JPZsBSeYL3xvZ574EvZ4Csrenqr7dXvgSgkrTEzNX2tHZA9qwH9fGhVK9AssmPJLJtYwj4FKa6umB5jYh8wTmKV",
  "key15": "dGPB5SQaQ78z4BmLj3XzEBzhvHTM5yU8tdCeoUNv8GTNVSMBki7wqyLnSX5JmLgTB2JcwnTKgvDfc1KxnTn6m9q",
  "key16": "616VgDxkTqFtnLk7GbaVBFxFtYjDoMpaDMkH77JP3zK6rd4f8rXZPctnH9UeQbdLTjfWaSUAh2HZRWjP7swNav88",
  "key17": "2mMhuZSi55w6oC8WUMuESWKoCV5aYu8FL7CMuDfJNmxy7JdAtCfegBZ6u2AFAkURdqNT6oDSrW8TkG4mLEXrLHib",
  "key18": "4wb7pGv6np6wcRXR8S8EQ4jiBdxjtywCitF3KocpnNRdM1jiLdRnfRRbRo6j4Ydb1f6jLDL82U4X2nUdrRzHndCE",
  "key19": "2WJSrLqcDWFMbZPLgkJZFFrcegRTt36YXiEGMcvfmBheeff1J4iJBG3bd8Xw3qk58dyPFixapyZyk1h8VXTKsnwh",
  "key20": "1HwnXMyF3RtkZySDYeQ9KLkpQ4L2EKqgCZds5a5XK5tCtqQRAAVyX7hfwAJoWe1orCAFHqNSjNfaJvePXA8dMfH",
  "key21": "5x19Ln6Pr8giCw7LP7UPCcWgz7iCwmSGoqqpBvdc8zfViT2kyVHeVe9ZCYVW8YavXYMoMWH1CxcFkoS5pAxbPUmR",
  "key22": "v2Z2YXY8BQrfe8ZxSS9xAeWeVJaHFFRu2v1WbUNWhANikDW6MLF3W2ozjeHMbh1LHuU3RgbAEPtqzoLvt6VDFkZ",
  "key23": "3vFtsUqrdW2riNELyDkoJMutPmSthtsxtiqvkDHtdt7DPrVfySgcn5eQpwuxMKLYLLnu3UmyRwrT2aB4jpgivKRc",
  "key24": "5otwPHwy2yE5oZbRwb4G7bds3LtL55ncYoHS8oucbFyitCT7dfXW33ch1vzUUj5DJhb29hzJomk1VGeuP6ed5Egs",
  "key25": "5dEyaZNZrRZw3vHN3LV5MQpEbyUxRuqnJHe131sRLMpnpfFS3cY4KLC6cy8UKNoE29kPhMcTGaD5LU4dqVyLwroL",
  "key26": "4FaQDiCoANEBT79KV3P3MTZUGgUi6SNsVeWqUAv3ByQ5WttDnFhYKEM1bj55YyFL2MmQfH5UqMFCL4SiczHnx7Kd",
  "key27": "3PmtzeaHiPpUcV5Utbp215Trp3pYDCE1VJWwDvksdJEHccN6ioETFMD1bETGTMxDwAStNK1W2YvSfPacbH38kUrc",
  "key28": "nVHuVSane4jBWhoaK914vzZdGyRXTRkgtMfDGZ7tw3hiP4Ym5PD7KxSzNMYBQ5e8EQiYU2F93iWrh45y16XD73e",
  "key29": "3R8Hx8iH9ytekYFv1NEYekR9yfuGoA2uqsu6MSer6qQxGNDs3YScBGK3xSXEyvkWhLHQkH6Sx8fQeeWGELmq4UDG",
  "key30": "2fZ6TtfmRLFNdCZQBgRL2cLvZDDQLUeMgQLzf5u2ZLhZCedM3GU5AwfC5DwyYzYFC5b9NUg9NdcPJJSCcHrm65R5",
  "key31": "3RmwcEAZup9q1mMYAnV31uXm2vfHgmfqVwvxJhiUMiTZ2C7R6PNiSeJQXmfStRzzUzANYxJRd97m76C7k8DdGxmG",
  "key32": "5heQVxhkCiFNe3DGwHs6Qa6rDNwMdV1NXk18TX1EiZh7GhUZ7Gz9rm9uMur9Q3G2eALsbaZTJqCagEqn9JTmU6M3",
  "key33": "65CGZgm5dEk9NcDzfbeeYh5jQrSRawXEaBn5F2QzwExaFwGaDEUTEMtJexaviUmWbfDcWwLRZXeXSULT9uW9a1CY",
  "key34": "XgfhNzgyM4a1gekSLMJpYEKNoqkLNmAcwhriKx7ofdhmuoxJu5JB3puojmBGc4fQ5cZNxwYdvbu5Af4LYRc3y8K",
  "key35": "2KHEs1BDptoKfrRMsVMt2N3h31Qx3LVQ56f4csxAt1jhBWFG2HsGjcxdmXfrgT71qafwP4JcycECV7GjCB1pt5HT",
  "key36": "3D7QsRgPjtKNSURXZv3zMPbRyvSNSZLc2JHxsbJ66vBoXwn6HpKyTwNBx74cCsGM2TtfRD1JfVbot5937AyRCq43",
  "key37": "pM7y45M2rPGwWJ8yomMHKAgiXijtVPHJZKFfNBrDQr4hAFFXPxy77nAFiuq63XnXybPBKMa3w4y115VCz1YWyGB",
  "key38": "2EcCDUStbtq4DJfhxYbGbdmQJJQES97svxD33ykYemQT1JuHp5nUc56YwwPnqL4VXcwDwzqbToBq7EKpNGv5YWc8",
  "key39": "4wYhfcRXbDmLyAX8MoDzrU8ZuKkrkLUEsj6P6xCUtomrdc3pKc6WJQZXEV2mEkeXuoyTDGL8SoNojg8pa16xzz6J",
  "key40": "3EZuHue3isYHZuTGqHkYskmMg9puM9fhVSZnyUze4kgbzmTFfgWBhAzXVrUYW7uBZnq1FFDvFZuSAbeC76sXXTB1",
  "key41": "5iQz7A7JTupxRocZpHgHwFyfJhH5fYGj1nEGxtP1WtvhbhR8MHg9gA1CRn8nKGy6o3rCjp7YU3Y6fw2qqHeAkBM7",
  "key42": "5peMetRYPP9gCpqLBYsLJhvuAouhqrGVejDodZM5rRrj5NdUpeg2wM1coYKES9nmAdZscKWndypyPEf1Dx3duuKd",
  "key43": "2MLd6AD5FGLp4XSRqQEXWje6651ikPMMPvA7xgBuzhHVikWCXWhknEaiRC3VaVkF8PtZXjGkqCHMaPZmnASz8B1c",
  "key44": "3bRVnyqz5gKsbME2PHaXuSnaBK9srceoiy5QiN8sYhmVpswaBek1v3yko3rELYAeiRcdSSNoD2gjuL9vudRNfHad",
  "key45": "2p1s34FpsqSD4xYcSKuXy9fWJwqDV6EKKpFAW8SP4C5nVGEojtDtYDSsGdD8phnKH5RdnPvm5bikQPNRQRwWkETL",
  "key46": "5zpD5e6NubCw3PwLeSQGdrCXFWWribKK9mNFSgq8zhDTCaBMiZ4wpUknE35CNrCyKt7NtbBdnsZikwuKydoPHsWs",
  "key47": "2CxVQ7tq8JnntV3c7HRk8CbTDRTXpZLxru51qFJkKv7dz3hi8XzQUruCL9D2hPenRHQkMoQv9Y4pW9eQe2KgmCqU"
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
