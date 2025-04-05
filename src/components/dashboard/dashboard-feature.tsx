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
    "j24RBaZFbMapK9vTCV6Vzd8xWmFq6KivJjiEuggWnyykxQiw9tQadBonj5JoTBJgJVQPXFuSp6Nm1vvfc7i5zLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2soXzha9aLjvvqExVECFffmK18qB3VjQ98y5tWgtJxqzrFH8sf5L2mHx3ETWAn98x1Bbw5XY4Bw4jF14JCm11Yi2",
  "key1": "2C6D7wvYWzHocQSw6CFNTQaQLQcTakUbz8oj6wYBU9UjM2aXq1j5EQCxu48PRAXsfdiLZgGgXmwysFqzac2VpphM",
  "key2": "5qmMkkQyQUztvZBM8i9bsBhfp2cov8w1FL221k6MrEbUMV5jKrdT4uADcbUM7hGeCAed78vP6d7mcAMgXYLTFBge",
  "key3": "4eYahSDyuUHqisw3TP182nkaAtXPfEu6QzVNPqAqQNumDmdei2pG7aA1G9AM52RswPydvKgQQ8rwuthC6YyUxhVD",
  "key4": "35SaxJ8yRGwu1uJng8jXBxFRC1ysThyeCTjc8qvbcNXSKrPgQxi22DrXxVaajmn5nKZrv9K7ypxUMARNXJSWUEVn",
  "key5": "3uP23NPkwS6kypi6m88fMUF9S1MjrFtCrmFqsgAko8VFnZT6YkJKLNLaxRJmrid6tqGnemXRxABgTzhMa23zNRBw",
  "key6": "2PATjHEyChhiFwwpKnX8FEXFQfsMcBB8PMX3cphtJpVnoZ5jJUNziWYmTY1Bf4A2mNJwPXB5Bt3K8UUjMkz6oVhY",
  "key7": "gSxkhH4pxV64mVsVhrDGDPx3EjuvRrLSyq59YerK63DwkLgkYiWRywSGdt2w6DfzNpJHibQdUUE1SiS1nHRUArA",
  "key8": "23hqwbH5k5yL8CuSigHQxBHE8J9BpTWuPb1Ak7fptukeCGzcBCN3iQrX7dDJHRGwVZyPbFUfR9Au2SPKaifuGZAF",
  "key9": "49A96EdWByWGiL4Hmg3WHM2AxJYwuqb7MU7hR1ujJpfrGS9eWwuRdKv6gwPjUYjodTwAQybMrGZGwtyP7Zw8xKAB",
  "key10": "2ZoZUsCtipBFrQMrEFQbfUrkhoCpdFb2P4FUwPZYHUVULSWn6ophLRY5SwkBb1k8MKob9i5xYSMQSDPYdvB5vn47",
  "key11": "5avpd3MitxszjBRaqYisBMLcWsgs8zqBWKvhBVeSoJUKMSw4nEkXDwd2K1huL8Y3psrdNAFiHFBVoijHDghLpm8N",
  "key12": "5jrUkjAWCPsQz2FcTUxrpKewDCxZrJemrbASDybVJm1kafej5Sfy9Cf9EaYChmXnK6gYMXbW1S8jqnyef4uLDC5n",
  "key13": "57p4BGKCbE6cZpG4aXiFWg3UiFV682RiysszBuxS6TtWXKZVzHURWCze94xx4jNq5s5EsV2WfVSg6SstqG7T9TF8",
  "key14": "2kxhzxgkX82KNgAm14F7yMUU9VUz4G3rfgifP2roM56ZAQZ3ftrPxKL9pH25K1iWHLGZh59Re8nnQ8iLqB5pFs65",
  "key15": "4jRHkPTTH7h9dKqkTkGmoxRDeMAmiQri8iEKoP7uGGYve7chn8nvzdj8WTPemrF88SsFjaGqD8sfSizwufYutxHz",
  "key16": "4PU6ZvYrd7xJSMNqnz6x4QKmA3pMbYJm7jWuLHjK2Lc76gfwL9XzuLzXWpg3BCt3nESLt6u3NGLVrgFb2EQbAs9w",
  "key17": "5WhxcLhE9dXrC5FnNgMhqj6aoqAX9FWPJryQDpspofGxXdR9kqBYSKKCwch4VBpUtttjxD6Pvyyv9t86mQ64FNJt",
  "key18": "evynGff5Y98FE2cVSBGz2sPv4HWtoSTxhuTofUe8itCngM4AoPM16egEsBQBEXcG5PEGkgMKMBvhGKarei1qxCu",
  "key19": "29MfZZfHzQZPKuFmwqtwHA8uqM53xwLMvUP844Q86F7GHV5GqXGSYS4cvDqyTY5gf7ui2B7p5UW9qjwPyoNfcKmB",
  "key20": "FtMednGrmCRCa4NW4tRmUPJBmte7xenmRqxZnt325nDmSLK4RXnFAhyZRYJLap5yzW5GeuhiETk9mgnNgR61ueD",
  "key21": "55LHAbDqH4JXErcNFikgk1TuniUf6BJbJqSJPoDtADGNWBXoVjsFoj78WDnaAodYyr8ZFfe6DJSqbYmXi2UgZ9qA",
  "key22": "28ZaoE5V3agN2NbbFjre3PdzncQbWK3A8vaBr2N2tTFre8PZ45YQAJX6e8TqYaT2F3qBjDufXWCuGpjwZ23FVFq4",
  "key23": "3U1auPRgFTG7eayoqCzXMXdCycaWUmLGNac3W2XZ3SSeLYa2ZhvPMNhYkd61yfFYMpZizQv8wm5NZwfUrn8xrK8y",
  "key24": "5pFetxnZYDFPX8h2Bya5PFnEYSnbKZYyPFdfSuENnnQK3g9vzrJhhVJraUmSDFooUxQegW3jghSbEsY7QDDztS1N",
  "key25": "3T8ifzQfeMpsYegR5D9kioMiR1iTHoVAkRmpef7xDoibnvj11EYtHWgNtVWNYov3PKrHjBL7BAHxrpwBBrFSA2MY",
  "key26": "3hL14t5CZZHTXpHrRVmkns2PY892AmecTm7dd9cgKgDKNKrXKKVjT5W9pSmn85R1XtwAd57UdFcEPhgpPdUs9Hoj",
  "key27": "bD3a1hYBNHRmh5hP8Q2MzSkWAj1bEZ9bgddz7te8FsWn3Fcx65EdA2LMy7wF1rTKkor5t9duFuC8MgcPm39u32G",
  "key28": "3VdGecznoaH1ByaihrsDWno7qBUc6wJLi2XqPKuCg8LLQTNyxYfGSg9z4dBbYWh9i3q64u3tjdV2nSTFGDCn6vzL",
  "key29": "2dGJwyLow8p21NCXWk8DS4bbxaSYUagx221SLHrMmAKgrpZvNaQiLbiHe7dfevqsUwizUTNYZfv7wgr9m2SmCHgD",
  "key30": "Dh2ErdHk9J5sX7VynAf8xNZhKuYwDf3F1adYm8uSp9RgLPz1eV3DbLKV6dD3Ai4v3cB9Cbs8pEArPWT9djzBriK",
  "key31": "5Y53jZAb81j4uZzwnD5jrZudcqvHZvrbEQi8HMnsoMFQ1NU5udLfaLLkC17kBvbQzkzzG5wqsAzeG19tkaqvD7Dk",
  "key32": "3qLp7rad8b6vPEABS1AotoLc3B3SsuRVUrhziVvNKvbaA5eugch8N76Pj6YLzuX3eVQ7JXL2RWCYCLECr2qPxGup",
  "key33": "Pi2Jpzo3VTBhUYyRqp2Chw5G66szGPqKvCf4SBWjwkP9u9pobwQTP8rQYnUkwpdLP1cJVZZkp8jfB1J98kQoJyM",
  "key34": "5kcZngmTYiU5RUHaAfoUJ1QTwSPehYk12EKACDva7xXMUdoykzDzwPfSSFUke2384tE33MsYgzoHKRfAYRXWXscH",
  "key35": "ZeWyLH7GwqsRDVg51WL1E823aYMc8UyLfAwhNNojjDAYu4okPyakfJyF1TAQ3no1pUaRrzNy2m3YLir7S1zfw49",
  "key36": "2YAf3VEEqXgLfucUt8qBYXTTWBkBQ8HuRLe2T8KbKr1ywcz1CtaDUYGuNZDLwiNdU7nV8vxnjTH9ghKLYurXmHjb",
  "key37": "32x9bnN158qKVAiVTBSFTdkTetn5MVEe67mZujcEeC8Y5NrnpakeaMUmTFyfTYurnX7nCccXyeFa3QUBZqBbJAzR",
  "key38": "5TiQhQT59ttoPSbmZizC17HxNvTPkzmiqDiNbd29CEFxivPKw3x1AHo3Ro6wuNtHdDLMJ2joL3ZhJFmF8iKRAD5b",
  "key39": "3YDM64pfBdFLhaJ6PfyC22v4HcBbwNHcjtSbcnmsuVStisqKCfCGcZRHpSVe6EBNM7qPG28XrBUYMkoy2wi3Jshi",
  "key40": "61Bzk7QHUhaeKoyVQz7jLdJJ5scaQQ2U4HmB5tFdsxxKc8uh6o1ebj7f4d1kKTkFVTodz5yvaGK8VnrBHkiB358h",
  "key41": "2Qc3QCvMPCTAgFybRbQwVDnR14xd4rBA51rrxoVVNBEKCRu8mVQ8tdR61XexgkdwPSB6sat7Ua2nw5E4vEjRdknx",
  "key42": "4awt6eocLgmCcNBq3FLvTM7AeTSUrzQHdAQZfHCn1BYRhz5hoDbSzeQgrNYokXjVYaRRyG2fVyY9SGmKZef1Kbw5",
  "key43": "5X76pucgS2hsA3uqpmvvHVngZ4RdTdEEuc4QHTAoziRVxAMSAoS4g3hip731aK6X3Fi24GmZDN6dFniYxP1HYxiH",
  "key44": "44oFi6TFyNkg37NzcgmPyiYANKtbEVoLY1YK6gfEo9QoAtQDJzEyVVhoRxi8FSsgS8tbbVPPNmHb6QhFtD5xQEQd",
  "key45": "4HvR3zVCJkp98hFs7QrCDkhPn4Wu5Y2GShcf2gPEcQCbefZVDsvHmS8RCtDMEsPtp4CCZxbfjvRB5deYfBXEtwy3",
  "key46": "3wgXiEYuMP64c3F9DCFqQUTSbUqPCP8PMi4NCSNCRfG9bXU8VtEvSSrCKDnGCtWsRiGFR2dLVSKiNrxNCrucEe6W",
  "key47": "65Xi5Avtnc72Pmoi92GGsm9P5biYJpd2dd4TMYgdmh63QG6q4nNaiPymqHg5X6WLiedS68W4Fni8adKxXrLRER4L",
  "key48": "4DEgDpti9xa82cMiJPTF3dart9qY9NCbYnxRJfVtoKpnCpkygMs62GLs7s3SsgFDyRGMd7Ven3HVfuhJHnJpaATb"
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
