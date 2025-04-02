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
    "3sNvFtUXVe5tDQYo4VzSVeESLjdm2vgrhGdAmsew8123Crktzy6hivKdpXBZtzpCN5gMiM93uR38kup8NPDs6zWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z46tw28Ay46ZS5jhEQ9ZZyj7LKXkzAWo6jmdEAFmEB7F8YXVPrKci3Qa2Gjp1Yx7o6HZ5kbVohiDjviR164mJAB",
  "key1": "5szHTRewHa646jnXFHo5KJNEb5hREcJTqqKKHx4nQ61AcyS56CePNvrPJRuYnKDmGCbZWydZpy8hm6sPxgbWwkwk",
  "key2": "3kCQz2jBxoZpqoUptxEGcUA9D9wxMJwBPbKo53q6qiRDASsg8fEb8bzU2kKyeg9Sy5Dw25pjvZJkvhxQbXup7dQp",
  "key3": "4YmyKohx3KuUA1WXxsLRsXghrSTHzLXDn4qv7M9yvFD6E8XPFtS6mv1PBY3amhBqrewhhvPMUH6sW3RJKM38xecX",
  "key4": "5zdeWaBd341iGGkWEwch9TbMjEz2npcHNeq7DESMwK2eGLGaRQx8jUWRxfKmAbFojWVjAKtRLDZ2zdoyZmGktgko",
  "key5": "5dRteP2LLfxS1vHUjJPckuUYfkcp3HYKjqEez3M93481T3JRx3duH2ni4hAvLU5r873pktBYWSmxe5fM5bJixg2q",
  "key6": "4vWPHq9d7oRrf6MD1RxAX11e5LMJTypXibNWRiiD1Y1ad14rfSXtjUWpGDh4HUWpC97zEnYssJniCrCSWhQ9nByF",
  "key7": "2YptMjeZeTcj4mAXNX7WrSMmnGjwo4iuUiWDe7yhfWFQyYBFPgUHg8UwKz4mk7QGotGr1d2jXLVxGqU4HPihVjZw",
  "key8": "4X66mQHXqCAdqUWiyg2Qc4mD6PKobQkWDrnjNA63KTGQxUQuaVz9wLbynrutcrAYfiPbwhp15BTh45GSgib5R3iK",
  "key9": "5xbCJzZgz69zsBB2ekisRSgER4FMxLSqFigP8rhTbgGtiXamH9LBWSrtzjPGhZvb8NhR2dfcntPw8EMwnM98owKQ",
  "key10": "211ywryq7ThU7Uo2K7q1MMddxcudfJC91ZD9we3YurdSX8sJ5sfg2HA5EaNrD4uT1W8g7NX5gQN9cEi16VGnRvYv",
  "key11": "5xfEd3exwnstKzJUj6Yr9cLmRXGsV41nHixXX8EnRjJT9VPtcRJRx3Ucp4RyWZubvz2AajQkzyS8dCUrNkmkNGoa",
  "key12": "4CfoqkxgoEenUKKD2PT9tKXTEAztkqC4yUAqoty8eCmViGQ1naDdssoJyvwDV3KfJvuivHqxTyg9hj6GS5PJ9kLP",
  "key13": "42idZ5qikmYm71DuJ3b2a5eDpoMqeZ97zjRenZuXLCr3iUhynMskqpHu1Xfho919dAdCMSnAtP761sLZKdi7wi5T",
  "key14": "678yJmdCEcdo9xbmjjEi2graJWbqBByWukB4FC6k2Cnx9xGyMNAGMTouhSUcE19Wm3RuJZ524eVCt2YJvsA5eemt",
  "key15": "vBit4LdYSqYfzJdiY8beuyXq1rEJGitj1wHWnqquuC6LpnM5S4XREot6bWzCExkdpctQc33mUDsehw9R1uAsW8g",
  "key16": "25Admd9Ux8iqr3UiwbRMYLqbTwzYQyEmKjpPafWAvUS34mUvcZaxDSbGJDy5dGzQJstK95WrhpnQPjC7uHmooR1W",
  "key17": "4f6LUpGt6zdz2xyYqgw15Mc4UsWYTRFWzqFmp6S3vz6scN3wz5CLHKR54Hf57A6ugA8ZmCkhK9UZib5yNC8M5KBY",
  "key18": "YXu1Wopj85dirapCP4kZNEY82nGyyVqhpEfrAJGn394dRcuqDh29TZuCUHRgeRjQWB4K453DYR2JXhX63AMmFHC",
  "key19": "3WFqo5DKC348UWEodvtKboDNFqTHuDqiSC5JMNctx4PDv7se6MMSxqmHA7tD98U2fDtXK2fB1JEHBXLKtr2dMmsH",
  "key20": "x6Yg9KiH3WpNU3teM8PxABHakS59k2MT1FVwxpnWmgTfukEFvDEQwGtPvD72PkguyJtmAMEAPCtWXk2BabZc6jV",
  "key21": "3f8ftBJcWiVXAdeTaMfvzpgpF2Fqo1wcpbKG6iAgSuYUTtvQ2P9kWNNsSjB72saFxtTQXkYvbdufAjvyYpWT2dLx",
  "key22": "2ZUCmbr8XYfizG66dvti9VJpQnq9LcFNDQKu6Vs1bLo132JuCi3GAxjLggbz3tsmMBiiv7iLrwuHuozFL5zWjvRq",
  "key23": "T3FFs8g2dy6bAGoYmDjywwUu5JzZiw9xJpvj8Ew7VkCmSNEA6x5EGbmKNpbvSe7wHaVUbsve4q5za8S7YpGbdaY",
  "key24": "5xXBA8gJVc6o5nGQ9V5iqH8wkHaSfyCXhkqfHBFAQavMw8LCi35MU9yGwciP3LF4MFgzi6zEPMtm1ErcdTxVmzEG",
  "key25": "5s7MobFfJDjaCP5rMwQwUTcxdRVxr9imBYKyXxtTCoBPQkyoJn88BzDyW6B7WtC3uY8HABqZyri26ehqWysN44gX",
  "key26": "5uwxPxQS6iBdcgUALcubyGpdBqta8TghXuSpVU5ASuXJqj3Pve24NA32XqYdVQmdqyzsHHKdJVR3KjF8BXRHfQqF",
  "key27": "2JbQScBx5MoWR4vJbr2sFa2hLgWUzx6mXywJeqUHtCKCn6Z7eBMCWFGXxqYuo8Nj8iGKA8HA8Kpj2hgDUDbub1hr",
  "key28": "38QgJmzb2kfA5vxBYJ6HWEpzyiypbmdCFhS9fxrAj7MngxhBwoiEh7jibpYP3tX1tEjR2nkTD4dvm8MqUpF835f",
  "key29": "4uHT2vr3HTqcS3envJ1LW89FkfJZ8uhx2nkvNinjtWqKQHADPzJwAWPwTjxNhqrbQ6Bqgm8qf56HGf8FW1h3n4sv",
  "key30": "5ZHBNG3eVmRDb6NPVLikbR1aBJbxoSrkngNUGwNGjCVoTm3HeC3r46shwaxV9HzrzPPU3UwMWFtjTT72mqv4F1Mw",
  "key31": "4JZ7tgvGWSTwuLedSYmVK42Q1xjVLsus8xkQCf5LJwyEkUE9m82umgkW4WD4qc9eG5NrRn4CFpdY5C8qNwRzJjYG",
  "key32": "65cRVPDQo4Z5WoRtCkaxy5BjChvfh8oDkqzSXdYSVvcuSL1aGoHZAYiukM7JiGzc5MxpZnYn25ue1y8dXuARK1Qm",
  "key33": "42Hjbn472FXQLpQRgbzwrVbc3hAtuGwYdatiRKHQP1vamPid1i3h2ZgdYXahjARSthVJoV4qM2eiFqUoFWH6EA4z",
  "key34": "225REJGUPVuefCQNFS2cxUUcGzv43UFK38oJwspBXdyHHPZZxJxbaqTwqdHcqbRoobsvzxEdeYw4AFa1PxteV3uC",
  "key35": "oCEy6WuRj8PXCgcCqnTbso3S1NfqXZvRfWx9dAE2PwXcVm1XjMSG9of72v7meqA65k8tvNB6aWxYmjWVsccaPYA",
  "key36": "5i4V3QixzKHek5PmkJs4JQLKbCKBc8evbSDpHgjded3387zhDDJppcbMhp5FH84eahgLgnhu527hSERcWDa42KMx",
  "key37": "5Vbq1yhn4osPmDsUG5X9YGj9Be1Bbw7fkCpEVp3oET6B5c22mHPndwrkwJ28zuLAD37sVXpeqTC4bDKLXCrJVCRj",
  "key38": "4KFqEPUNZiwHimF4GA4JMux7ESMj7hnp8xqwJojUFirvETa3dFHuVc4Th1ypTTeu9ygsjFvpMqo82EaTj9zJojtx",
  "key39": "5UWPvQg8UfCkTfitrjVQe2mYKy7JqyPaahW25yWShbjN3EnWpwN8JkGbzoxd4BBjwVfG7geFZxmR4Xvqak8BWu6s",
  "key40": "2m3iAcwCpoJoQbXMmDH6G1rxAtrL3od7bKMCes6ARh33HK8oCsT8NRkCUyDjz4moUTz2kzcCHz7RTA2ae37SEqdp",
  "key41": "5Eop9CgtVcc3qqHcvqQ6wk81Qk597mZdhsWvBKgF4DxGPyP7XtDVyThZKoJTBcY9uFcu4TwksLavj3hrcoPBb9h1",
  "key42": "tr9m8qBLkzn25DGzeCS3V1vcf3zUjSnXUQy3ytCVvuDJiRn6xcJMbnLyzSkyKecDKGBtQEpkttor4qL5Ww3dLy9",
  "key43": "5AzudQjYDaPEiwzk9NFgVUEcUUQ5vkaS2sywDuraUmX8HjGiUhDbT6CjemdPhtAKSZYVojxZktU1AFE5QGPcv8Fy",
  "key44": "5bzZh8nXFKsZ5Gfuy5fDDFG3mRiWCF2NPsejKZmQV5fjuPhKEn9RC2YZSXFAS7NUWsFbjJeCuoxoPZRpjoaZoYZt",
  "key45": "jCbY3xcMtxu1ATStmc7zw8M4VtBuhhRuZ2cpFFfUAukHL3Z4bp6kziZ3MmhgCUM7gPfhjZKf3rh1MfmNUKD2Z3A"
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
