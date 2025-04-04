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
    "2PrqGTM6F4cZmrCf64yU1x4gWbg5p9H5HHBgKFMUQihFZYFegDJQBuWh1C3z2EQJpBn8MyNueQZ8TmSrgfuvoNYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QkTKZeYaULTUv2qtdAb6oyTaRtJiX8NUacd5MSZPyakrv7d9p8SS8SbowVW5DRjisNjuHM4w3kCUfqneZ6YvtU",
  "key1": "56CAobcbm31jG4Y331SyfeUFMVBvViwibWyAe2QjPne8Vw9ptpQLioBtf7f8ZCTeyCEhYPCZTfXLQX4BmE2V9fd4",
  "key2": "adRSQ6hZwGgzFsU29hmqN4raKZqc1BJuKMcVSjz8tivRnDKdS3HEtuv68By3Aw4zA5qZFNZanGSrCsCD9NhcUb5",
  "key3": "2Gf5zwnDJ4xfwRgYgy3kAhZ4yYJ8u2vwPuyaPeYUc7PJe8k3kVnEkeNoDU91i2ZfWeLKcsMTDQ5duS68JwVxJ8GR",
  "key4": "45W7R4LoctNHKDhsEyUrHnciZEHWbFHu1gw9EM6c8ceU2snCTszpFxhAZWkTCygKnSrvweq9bqez19pA7RggckFH",
  "key5": "4Hz2dbdiukbVyHMpWXBAq7ApJPNvnoLhz6a87hPD79ApGib5N6tsK5K6JtwkMm4xC8f2ZFU3sNAZcZfKg3QEjap7",
  "key6": "SGGm7DGWDLVeDgHceAYHQSGvkLQ2H7s8b8DZD2vsGH31VfNAuzixx1KtfFR48ASmy4yUrCcqTwmDZ15srRD7GWS",
  "key7": "bnknumJuSZaWKi8vT6J5a8rQWDTyMgQBAMkp1TPEYjq19nGeTsTpA4hLcU2aV8hpir3EBQrFtkz163YpdrTxNjq",
  "key8": "2iDPxBmvx6Ar56727xWohr976mFQbUp1Xt5kmUeJbhAULeFDqv4dAHvnU44AiwuLGtJG1i5YhUCUyiHut33ithtc",
  "key9": "5Gv6iNRUDAgA6nNsuXAnH6MbWes3eGZTk5fUd7i7Bqwo2sBi52zrMx4cATc5Kac9b3XcMM39VP86zbGfZwLCP9Se",
  "key10": "4aeAMgvcENYPqdM4CNtxmkxY612LuiMDUBem6W98PUik2vsTahWsksNSa4Ts3nhwQr47ysaW7zbW2PJw1dqX9SQR",
  "key11": "4QcvMr1bGypk7pLWBhvuGy9PWkaidK5yTgtMxkaFNEF6xtpCWKNqhA2q4QDPowmAfmLJEAs4LTDvPzar6qotyLft",
  "key12": "jbQUx8E5fyfUJNoVxtVKj6tbJMUmuUF6hTA9FUsoWE4zrjwq13dVjEWJTH7HDQpmD9AJQexhX83LcPGyKo598ca",
  "key13": "648KCtj4iH1FDbTYdpo9CfSmFtCC4vDFYabbZ2ECyYoVyzNRuYBNmASkdBVEPNGVsFKszmvtfALrhcPK3DjWdm1c",
  "key14": "47yxDvMq3CWywTGNnMsPGYdvyUR7qZeS9jJ2JtF49mMm2hUewpuTxr5UDYidq9GLykw2pGUz8ebnoKqwnUKuuQNP",
  "key15": "5hmDUP6TReCBTHUUxzUCiRmXRpwh6nFKZxsRwKVyqmTwXbWxVTxV7FR4AHEMEYk1vxrAY77VisU51p45TuEsm36j",
  "key16": "5HcWdZSnQabxJNag5FM3yvHqXAyteV4ZTXdhx8xVrtKvteFSRhDm4p3bb2Lwo4DZN6xVmjM3pFQ43b1vAmAAgSeu",
  "key17": "2af9NPzGzrkKv6fZCnHwGcPDm5swSE6ogkL2bExoDio7ZGkwA7WFAVAiyt6FEDwq8heKSq9mKXho9uyvq72ZmGGN",
  "key18": "3dSsuoV5ChVsQYpvv6bxnx8iFAgJ3JXNy59P96u6E6jdzNJDqzbsTjT3UXAW1Gt9T3aJQrVETc31AHoBqRVByiRN",
  "key19": "3DVHn9EY96m56sfpRvGHAJh4M2nRGnRmirnrejcRKoaZPakgG6mviJstbLGLdWZH2HGejFVJMeV8xheG7HHRYb7Y",
  "key20": "5XcMbLorv4NmX8r4AUpFu5vWhpQUiUfE7DbKc3eZx1hor78AnLV2qmUdmzuj3fZUzscEcsxBJYmtCgVbUDR1399T",
  "key21": "5VCjDrj5PV9p1N78mCjYbfMsJxwMMB7iTAd1KiJwmDwSeqGm6bEh1swxgUyLyrmhMbJ8JHWRrSgMedeRU8Qu7xqA",
  "key22": "55yJ969L3tLKCcXryX9YiqG2SM5D4KauksBJJ1xkBgztQ2RHrJz93niirF8ZJJjWrce6rD5VkN5uTgLYiv7mNekh",
  "key23": "3RKxxcfwBXmyY7NmhbBDk9YbNt8pgSz3mDWu5FMF6McsXZ19Q2MzG1etdALLJm2dCP6ZFGo3PxeiSyidrPtQxndp",
  "key24": "4ffGEv5bXFm57UnvVV43k9EGkxwXrs5jznEB1PnysY9iRoRfBd7ZCa5CeWopTBcjPi41c9zAgqoAUb1od2bnHKcW",
  "key25": "4QSVCPETxjMQggzvokrthYbqM2TD9dDVHGcrX6ZXmVcS6fhHVcyccwTEMnVvFcV9YtvWWVKB9acmMgtNqraDybS9",
  "key26": "cWH6MSERD8D7MvZpH6JiR2UyGwbr9gUL3BDGJsKydwKLUwcCq3TQwMNknwFBM8MJhS2w6ZH6UAp8Jr6dWvadZ4y",
  "key27": "2dPYYXGryKzLUyTPtNjzBDKHkXzQ4ABB5JgurcYSwo9q1L9TGRvLvZDTQbK2JBSrHqJto8vPn2nU2i78UT3pCbj6",
  "key28": "4wffVUjt4gSbzFN3tDKQPsXuaoSuwquZwdh4zh7hnEeHeUt5CmgC98v6XpahDfYzoRQgqXwqv7Q4B59NW6BYP2zV",
  "key29": "RPmWVaUtad8AJZQx5fznbnqKhPeoWRFbiXPMZgPyz7P3zWBpKhL75S9pisQN94TA33zKYhL55yjTGLX1tM1tEe2",
  "key30": "53WAmZQi3M8wq8YKAgpv9Zt2Hz6QFE3XjzBdNhJ1AB8GKy4j7s4h9BZehJanDdMSwT6BtXtuhbWUeeaGdYVoSEB4",
  "key31": "5zhafoUcvFWLEwPvMa6VSdaB3YHbJVzWNonogHwFTtqg8pmQSHVCoMRrZ3BTaeUjKoSkF3zgC1fQgfFnkpLcBcSu",
  "key32": "61LQPQuwPfQahipQoq2Di2BzqP1P1jGP2thnnr1ZJR3a1VSxbjmvD5hEA4d3z29gmWBmn3rxHme3G9383DnJUJCy",
  "key33": "4xRSvn7e2M3sSftV42wZcRskP51Px3ue1E3MtFm6tJeTRfvSDt1o4ffZkT4VSL6F8cAoUb6y5DiXWnAQDzJ1K1rc",
  "key34": "5HWPoYgNHPCwEvWZhAikLggmqezyVvRqhUX5sSESRV3nBxJNqieKN48fHYEYKG2Vafbbf2jYXRs6sbCZs1KoC7E3",
  "key35": "2Zbf3LBpPGsvsm7BuxqsHSxS4feyKjVMKhMreuCaL66PLBWamFcLAYhx2Sy19YcuSJZVyFph8BtWW7EbhcEKC6fM",
  "key36": "3YXHTdotg7Dypo2XTeSNr7JwCwH2KuEcPyBSoXe84S1wQp1Z4XbjEu9aZNdgjabwN9KAxZ9EeSjndzQZoAfvTfBZ"
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
