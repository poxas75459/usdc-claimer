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
    "jGhFA65f4VG25g82Z2hGkXu66XdYLM3rB6iiXU9r8sHmtSB45XDhTDzwoiUGt1EDnGeYLagy8foZJsQh13vnGCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B88WSqj4Ztdfyy99reFWqWHyvxq5JMzbWtroi2aKY3UXfSRnfzqk28VGSEtCnNaRpDibBQ1LEe5zTsst6aNhYR3",
  "key1": "4qammJggwZ9UidmNRntgKWTVcxp7jm4NmR6LKrX589HKppTGh5rCG9KJxizbEt6JPysaNYPMZT84rV3Ty2kE4fhG",
  "key2": "3mENsKa8bKi8YcWEo7Lv3RFA58QetairShgwTUj6Uka7qSRPoNDECGTAsQnPk3k8VhhucvViuw2sYyMtiJcjH2Tq",
  "key3": "HuaoQB23zDHLicPKNZr9gAgr7qer3LgxKY7WCvmjwoXQe9U8Km1SqEn6p22QDC5b4LfA38eETmRFw3dyNHW2j7W",
  "key4": "5hoay2w7A4Sj5Q56EJdai1uM3kDEQWpvNWhpnsm6aggJC4wLj2eMT5u9vRb5MqnhdJ8FwGbuygvSAr9nJDibZzep",
  "key5": "2UyqS7otcUCbDLXWx4dYqvJ66z5jATVnKCBf48LEaLAEgMtETFTYuFEvWsLcfMTtUDzenEjEkvQg23JWaRg2mtsf",
  "key6": "5gddvWUnGWmP6R6PSCM8Z1nMbDEWGeC9nAb8F7dAEpdooBzETc28RJcmQgudwXZdXBsH2HeQSuyZqB7ebbQGrrk9",
  "key7": "31F3RfZf5sLKsGtP4u6ZUKAkjMXTKCaYTbpkEcCkFq8VaQMMFQEUe66E61KUqW4mYH6gaQSwe7uo8jFU8HVP4ALh",
  "key8": "5gam3JRmWri32kVqaiM9EasuDNf8yDTts4FcXtHLQgqqQr22nN5SyRdtiDqVGm5UQPpqNh2AnBv38ZDzPuMmGyCa",
  "key9": "5BA8TY3tQHvnfb8zPEZLjyveeiYYVsaoEUE1NdFFitS8h2X1pmDRDKrmQfzTGdpHdVtDfrWbg3TgoEXE3yYCseCD",
  "key10": "3i5fZ5FGEo2KwTTREL8bh3xNiKW14BBi4engUMkQHtPgRMXP7rxUvHu7rAxv3FQkNFCcyYgw636YiHH4eod4VDxQ",
  "key11": "4kza8HrGVEbCQC3an2sDeGPZGJtpABD779G3sii6fqmgZfBq4pZ1Y464wj5uuTqhvXbQv6XFsiKGMMApxeovDbK1",
  "key12": "4xseuNGWba5GdigWDtb4DPbfbccvxsTyeS6GMuXKZmzoEe9shZ5fSQwnQPuZq5dfSTuzzhjmGbZfKhFTQ7nv29D4",
  "key13": "3nHjqosdGZrsWKQXyiWeN6Ne4MpUMHiEvDBx3GqbwyLqmWZKCva39TxCZJPKjA3oCvbWWTk2B2QMwWACFtsh3HE",
  "key14": "WRNG9jU3ndwPxL3GKC3dRGcz2CjGyQSgkGgU1EZHETozXbPU4LszGoz55NzNgcZhhNh2sjMxssr8w5GQTwyFHQn",
  "key15": "G1CUQuZKiyaXm9BzBfhb1gFb72qkuQ5ZCbguN1R9Ma3PCmLYe1JGTE8T5j5UBvXVxdx8dx5PrNPWkegdK8uqHaf",
  "key16": "39tcTNtjpde9eNtyLqjNNQnMSgMzc2fEqD3YR7zFfYwd1pwUm47XVHbHwsv37WRqEKR5N6LzBZDr2Z8DrTwA4yQr",
  "key17": "34hKJw3Kxo9ozgm2q6WZEyWpSU6T3vNUgSZ9d2CPs5ukALQyS1bGCH37c4LmDVwdGwXpYbxYT8y6LCUSmyjTn3RK",
  "key18": "4AXgp1Y3yCqcrC23pDSKkb1YM3EQT1sHpJDnR3kT3iomvn6PDatGNzmePDzNcSvVk64ZJ7rALwt9PxL5MtQwsA8D",
  "key19": "5wPYZs7Pewc3UH23rpubqCL6hgzrwaHzv1PUvJrMqVJ1DfqYmnVKDGhYrpc9KjW4EU84x8nqigNAmJ5z3KG7UCS7",
  "key20": "3v1S7su4xavEJwxREUUfzybwVoWrcVzStkMrL1SYZB6W9ivWZ1UiGcC7iSHS1xaz1J4BNsiTJrLpjZoDX3zSs8B8",
  "key21": "5zVYF3zmEC4TfPmLMfWnAGBxLGcCmAc2KmtH1zANHrSffMtku41xuTqFeSmURhVRcQJXWCMBWpcsNbEfXx9xvJah",
  "key22": "cba7y4AGg2HcQn1EadAjW7twYVaqH9RWTXRTmG1cUyB1BXUFRqKXfPxZoTKRE18TQktdEZqbHwpijPdLm3WEQ8s",
  "key23": "3gD5fz38LDt1gzdMiUpyYpuSWjscRXoUPCLw5jKrzL4APGR95iPm6M3fmi76ffJztUzuJjNiWtHLMUzbfDs8AQF2",
  "key24": "5QammvAVEtA3pjP48AVpeU7uQF3pQzonX6ujU2NTKk6yHkpeZ1ghX2QPeotWWNBVhdwB6svFyB6gqFE169QrK3y3",
  "key25": "5sbvogy6cwCiT8PhJSFqWBEq1DwFDoSFGNPtaCrS8F2TBETGSvMvjrhDNGk4UGCSZDbCCPa9Q7sdkWTcwwWFk1hm",
  "key26": "3SHxQ1TLYDEeHNZ7ECH1SJbLhondNEsMZ2zDm5z48TvAuZfcB7E45aN2FiVGVBeKLQxuJSkTyBovE2BFcnnr8eQH",
  "key27": "3ZiGczf1VFPLgPTZyQVefHJo7DuSDNctJz1kGzC84swk1CnQtFBE29Nm9tujdfVzKbziAhsqTjifscinKP2j9Rrr",
  "key28": "5HuGx2DzYFUPaMBW5eRU8cP63MjGLEhS9M2UshE2UhsPCfDaFb2QL7UU43TMSKYaHCYTyA16KLZ5A3kRMSW9YDGW",
  "key29": "3L8CnPzvu1JwU2USNwRGjyr7L5yv2tFtBGTdpyTjjfGb9VuqEZMsbFpJdQC3y3Ve38gZ68kW5Q75hmQpJCzwPDds",
  "key30": "51uxiuqWsWK4j2xdA4PFL6w1jzf5hApfg3gwEFgfWF87uVkTeLSN1FTcmdn9EksZp7uUcpfJ9y789C6LWJVce2kG",
  "key31": "2VBP8voGPPCoboqZBCT1FMw7sqvZDoMo8EWT4DWVqeNmwafAm5dgbKR5Q8s8BGL6mDCsiH3WnWKyABcmi6racc8T",
  "key32": "53gF1xMdrh69zB5Rh1EbHKHfsWS3dL57ZYQbfvg3F8chzUnwhkvGyNBW3Tch58R35EiH5X3QeVahPhQTFbtd5XCV",
  "key33": "2n5eQ5UrhggXh5p2Y8ZnoJFiPQogsZXSp1zp1dysT2okH9QPoB74Uo56fppiT9PFDuGMck2cKxwr4BFD3qkLzzS7",
  "key34": "3hz7RcZ6AT8Uc2dyP1f2T1FtJUwP3YKuXGY1XmfpqVWrkEJAMV53yydXG13XnrScyVMRqjDJkaV1Szx2i4pCyhk3",
  "key35": "3K9zktBjKHBm8H6yiwZVsRVT5huUc7vhjGZ1k9g14kPBJKsnoNctQbdJnT2SRmqEzj4vxmHr6nM49gG8nCAKdSSL",
  "key36": "5gQzDRToq6g6A4szpKwAgtpL5guiaJ2RNPd6WV3nzVrAsqR836hNuacEmpdoQ6rW1HWHKqoisqTutX6w6VfRmDgL",
  "key37": "khSKCykP97GqEr2X3dYibMZcuA72RdJgF7H7C4u5Pk6q9Kw5ZqpNkZ8dE24NZdVjFyfHJE2FQruiVEmxtr62G5L",
  "key38": "3smsH3FdKaRPcteRB25Hqm3pK6fhApETFNsWtk1WqEqgwhtKQCPKovw9VBeJ3epuSep7VJpvMTonLjtzDFudGZ2m",
  "key39": "3F1phSvJaHkAf9FrGiDTpqG5uYsWUFad1BcvNdh3kA7UFo8LCoeu4Wd67AK57qnimfuA1tzLG2uTm7H4KYjkYhR4",
  "key40": "9KKR4jH7mkUBcrpHU96xtWDR4iMm74n4aKkKFS96juPvpVR4vyrmPj78XfDpkcwb199aMqXpBKxrY3xdWTjEEaL",
  "key41": "3L5sdMdXfrmMrdxmU9PunwuvveHDT9eKUEex8YSPGLsLBmMTbRKFuXNtAUPxG2pzExo69GGU7Q7GvZXmT6AmKH1D",
  "key42": "5PYgRTD7cARfx1QHPaeNZHeHGrhhBQeFAYwu9G45i8zNWzhrRJHkgxyV2JKE6HL5Vnuco9oKEMVS8N7r94dDK6af",
  "key43": "4BZ8EYu8zYL8GUwQA5mmxTvyNHuXXpo5R7CtUB2NSGJhaUFDdZkVPJJgZrPyxEFwx6qz17qqm3Y3QzSoQoTWg5Fp",
  "key44": "3uCRQUd4KJS6FrdRpPHKp8kgQqW47DEm5ZVm6FQCas2Zzdi9d6HoW8oHGAeWt9vbxxHYb5hFoBzPkcBksRJU9WTW",
  "key45": "cJhgFGziVz2XFqpQFDLQgzQmYwxuf4oEHVQw9aarjUbtFyM42EuUCDckgjjYsz3sVnzRTtdcLHER58Yg2448AFM"
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
