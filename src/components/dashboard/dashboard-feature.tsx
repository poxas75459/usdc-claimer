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
    "43yAs7gCYX8yPcVXAuoDKuvaFTPPaJYK7qa9hTsfFg6oDEHUjiQ4ZvaYdbNuxzrdUY9znymHPpvGsqJsFLcw8LMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YQZ7N5daeXk7aSpvVhyEPW1aTyqkTHwX6jfBih7gKp21hjVRA4AitnFoyAoRTVyZRHMUYMv7PgrH4Ax15qu5MVV",
  "key1": "4PkwU6knX8YQh5uWCsVpQbmVhmtiCEn1UKqiKXcZDLsSbBX76Wmo372zQEyJvZJKcPrXe7CCt3XZwFTthbBrB757",
  "key2": "wKqZ9zNz73xNFwA1JCSP8Kq2cAGPDXTLDkvMJntFdJDiZ5vHBoz42GYiGQti7me9Vjgxsqy4HwVxtK6DZvv2Gb7",
  "key3": "3sZY26sAue3r5yudkepPgSDwKJBYWHV7VEzGUzpXCv1GzU9nLUfVufRUBYTcSuyDbSn3VvV8jVxcV5DsKJc3mELJ",
  "key4": "3A6S13XnNE6FshDCrhFmqo82mU2uK59bst8bdVzaDPSB7zD7dZEo2QBj1MkMgBMCYnJW3nZrht2rVXzgFiPFPuYa",
  "key5": "3vcPtMUsi2Pv8vpUNkVUKSVZ9JKmBbv7vMZ62EHdFhodSgPS91q3sZ32XFGQgGzZQnubtUmiabYcwZtezQx3av5K",
  "key6": "cpvyrNLYeLALTSE6eQoKvERpvENPwpeHqZG9e5V1frXdzDBko74gcy4VCwGYZK7sKZktMheXP7qUcpTYiGeKamN",
  "key7": "51i63uxn43UbxaaMszYwzmZvnnV8qPy7TjyjhPnS2Jynb3T1ACj5NcigjJ9mmFET928uHQfbm7qkmRSaYLE6aooA",
  "key8": "3MdkvHT7tesD5o5MUvKQ1dEJ6HV1gij8XFwEzcoCdXWsKthwSwLdrVYUqKAs8RzcZ2jHg6Udc4WTb46aX6TvU4Cp",
  "key9": "28JFhDtd1EN8pgUNeokoEN7aoq1TJ6RQaniVQocy5jp6wpXXy6KcYVhbMo5hCeEvbpoPBKCbh2dbvBaYvUQ4D5Zw",
  "key10": "4VsDuKiigyNkPnGPQRxkyxaJ62F5nmHSi8WVeuwxBe5wh5E9CdbdkxYjeHGBUFkgCu4pjQQ2YvdzM1a6NgiX3P4V",
  "key11": "TNXeYyziehdBbtVrAHEfN6fRt3szJsiQbmGho1qYCYkHidfi1ANPiwQeb653ctXrMguaPZF2siVZ8Ygaua5bhpj",
  "key12": "2eRy7WGdYKBMCqJaNo9TZSPcPKfyJdxEb73yiFofhbdUJh7T5jKTfw2fHM39sgKjgSMUddA4vXJ8Sh6D9Dk7hBDL",
  "key13": "3eDhwNKiLDKgnwV9uDfCt3ywcPhMpoPWgYYJChPCuy1z3vxj4riU1GDvfAWm9eDkJXub3MBbt5sCpv7Nxz7HXkrx",
  "key14": "35zSHTY62KeedTqmXJHogqayacLxFsrZhN8uynFRnWBRmE85FQWyDkFhQ3u4xMWKGDVKmxkfdq5wyRLyBjKigsPw",
  "key15": "63Ukv1o9BdHvDeDhECdNF497nsshG4CGykw7nvh5txXeBWtUFiAkcf5BBmKnEWefmj7KBjuPMfmHEqkXfdDQkisp",
  "key16": "4y8pYNSFWKFL4wboSY9mwh9GLokApwY7DkqgZaQXr8Mg2w5YJtt8s9ZAPsuEZt17NgpZNQUmp7gauWyCtGY67Coz",
  "key17": "3MccyykfG7o2hZv5z7LTze4Gecr8K5Z6AmWte4msXPed4mms9Bnv5Qee2XF4A73cBeCN14LBcSCR5UFmEfo7NWUb",
  "key18": "W2WtM68ZpPxXwA4dLijC7cCLd2Bn2YUGzxqfBsVHqek7mt14CP2snVhr2neVbcr5hTEadSn7tTYPs4Y2BYnDnRW",
  "key19": "2UWoBVNjqpDT7hZu7aw5trJLCmekbu4EKcPjD83WKh8Vnbtepp7QxJsoSPTJHq8aTMEm8iFmfsZ8d86uitSxhg2",
  "key20": "ZmshatMSbmPXZnyEBr6x5cEkrgMGTa4oBAnkqMaFyFx3tcUob8sNh4Lu1AcExDtfRcJHsmfkGmkKVvadG5JLatj",
  "key21": "51yPWfcG4njYVFt8q2ZLzh3wu2TdgrozKiuzZPfpvPs7U9TLbYhnQ4h69t4U38t3UGz8XQ33mpoYfqhSvzFuzHtR",
  "key22": "82SNGgWF1SdgFjpmMwwyMwdMr7kZzvmfQAfXxuuG8f2Zc69Wh3HxC2YCFBtbbHFPi5QZBYzEcq6QdvSDVDb869Y",
  "key23": "Ty3p7E6rYVhwiknTocuRm3vRnKwbm3uRDaFRGiLxQEMFVz1u1tD8vLvPdpKJfHrXLJ1SURp2mgZzmTqzxttSJkX",
  "key24": "5Tg1PBd83NH2GDZdf63BBHQ6seSj1yqoZv9vzfNyCYGzu4YcqcgXtB9PM7ooBTTjBV7kwgdj8766ZuCwZPXAEQmR",
  "key25": "5g7yF1znEddp2Gd8mE8bRW39unWEYhDPs1dDLBXjoRzeXdThfj9GeFaFiQs4zFadqu5U3dd6SpUiaV2PPneMSKQ8",
  "key26": "3P7QCjgabPp3nqotQkYiH9E6SLFv8ddJ7AnD2D9e9tCme5qRT82iNieGrLXBZ4aGJb2Y1gCYjdJtE3v8mS1eL3PF",
  "key27": "hTP13K5F4SvHSALGkotHPGY2thrsmgqKMxRsaoyaxGrTAKyxHXpCNPPrrCTc57Hx85hXdmFWnuLFDnAe5VRMP5d",
  "key28": "563CRN2unMgTS1tYunoo74LDfZR2UiLF4hKn6Vhg8U5w2LwVYCZLxn4YMMosSx1kDshUhN1WQ5fy1XG1kRijLRMD",
  "key29": "SMD77M1DyUEjY8vW6bDUWre1rjpurTtXDGbyi1CgGWGbaboev2SpQXuCKFPJ7rLktoj2T53vUtvZ2WdWaM1afQy",
  "key30": "2D94ghNdrUtfAN3cYzut3QmJWjjsviCntmsoCaY2Fi9DaHoKwF2aX3Zz24SA2c3FEBypDoABHSS9Jo4F5CGgR5mW",
  "key31": "5dg7BVQVBuhyyYypFeaYQMZeEWZ1Jfe3FDVUrPCjPH9YT7usRbXnCDpfNcHXtkEcEzWFatDET1CPqZYux3y52jx1",
  "key32": "3fgEAxPLKGrpr41Br64DkSeopCNQac5DQ2BPH29uM6qxEuArywezUJBSUEgG6V4LDgaghxmL92uwZ59QQLcFhAhf",
  "key33": "4xJEX9PKiRqpkbvTJdLCasfJsfW6LwF1iKAZtEt7sktGvsQV1aJD5GrqP1wEyS1SLbumWpxFgVsyizhowWkkWdxX",
  "key34": "3DbDL8trfecSEHk844eLEjDgD4kdnHPcFXvEq7LXYGEwkuSkgoCd66kBFrRAMKAWiMuYHb1UBwZpkWDQbG1ShBVt",
  "key35": "3LUnMavwVpBmgr89syEfF5y4N4BnWaWvSVGYdos24jrm5Mqdh3mfDYDi8NMUAi8yQrCNTyV5jyT9rzZ5T5e64L2g",
  "key36": "3pR31iY1Cjfn1weAfW6qdV8mis7vKdtKTAEXUfpvJc7cndMqGRvusAUf1pWwcvJ5uB6ZHYyjWX4kCCguTkZPnRDU",
  "key37": "2xk7PMETSWPDLAc121jRnLFqvdupeHoC1gxQmrDAQAP2WkQTwwqyf2snTuQ7USdGgb8Mcm6KggYwbgkpYnSfeKbt",
  "key38": "5JMiHWZsB36Z1Xg9ZfRbcfMNpLJzMrq33HjhQavrQTaUDxrK45EKatVkAWHTyXbVGwheKSDUE19KiCcwA1E8EkBr",
  "key39": "4nG78Xr9A3T93hxS3fhsMVhnhA4UGfrLoGejYQKiUEX9FPwhgzGEJYjgfopwB3biufoKBpUcmKNooQMVjmW82egZ",
  "key40": "4THRsH6m4nzsSf45QMpAbXRELfYSeBturNYs4LRs2JNRNWWVViMAgTYteCWMjDc4yZkSqo5oTGcxiyxbHikrH5AP",
  "key41": "65mHxrc7Dk2LQRcU9WxykAT3TAitNyyfugm2dCn2ikZL3Y1pRafWQJa4wCYR7u5cXLo5SGR6QADU3EfgBiaWMvXN",
  "key42": "4SeHJYCsEcYmXdYnJjjmg9y3tgkaK4u6RCsDJrrVbxBqM377Sa9cmB5f9MkET9XHbkPRF3ZXpMewFHeWpDiXUXyQ",
  "key43": "4dhtamawKViamBRKctUWCSgXQzfaYX7tZFPQTVkszYn7bNpq29iZrP9P23hqiyTFHZEyEzEC3QeQ1aB6ZzAZz2Vh"
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
