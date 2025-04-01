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
    "5U5vHNp41G1qLRb3RP9doQAnJZmqritD6hJAgmNSeNMDouuSue6b28LyGMpVYqZz6JfgAQFPEdsPBLWhhFdVeZsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezzGKvpPbhY1HzFfS21meA7eLEDHXG2rCdJa4Fjyes38u4QFvtF2WwDEPfCR878P7pFa8zT33esaG2x8rUY6no3",
  "key1": "2bZFF2Jk7unKCPycstZwDw3B2E5vTXXhvPZvkNDhMGMQeqdErrE6kzEd2S18crnLko7S9v3tCmV6GnvvpUMqVyer",
  "key2": "3Hza8WY84RP8Z3eKbQEdaEQWS6x6v241pWFAYsxXcqZDn1Fb1DRFhibBXALiBZgZWtpKpP2CXYBRD8Ce2KVbQmNP",
  "key3": "3WKCjU4ggwrtAfZRJ3s3uALFnMQmWW2YFH1zUWJkmhVLnoWmZeBSh7hqNh93ewLGEjfaRWDCMFSVo1Tn4QFSScku",
  "key4": "3dTYmmga9mzSXXpDDv8QsDmKSQU9w8Uu7ZyRa8rph4v7tihK38Xe95FnpKb4HWfX91VS2PRTxDLm3DhV1dHvnb5g",
  "key5": "58YwNDEc6zdiPcViy7Zh7EuxvXLBFmCaJW5hQBBi7ewp9uDios1GsdUaTKVf7oMynqBhn7Ax5z3NF4uxcboRpu9m",
  "key6": "3yNk9hTScnmamfwjB2VP96uiapG7Eb65kSY2FHWyVCGbBJrZzB3Ca6kMANjckenL6uyszjMDW5tvkBBT7VjWdFfS",
  "key7": "5BKikfyQoKgyAHWuWyf3tkTifpmSHpKwQ6cRUN2bFbd7iueKd5Jqei89uwo7WgvdFp9mfA1xt2kk8dXRiJbsqxJw",
  "key8": "4ndyQLzRZNhQAVE7BkNS8LK6fcFKheN7HkubRTbTvHzCoSGdiFQfLbQnM91V16uFQwgrvRSEeANzeLJthif5uPrG",
  "key9": "3MGAKVQmLHhDJrsWbRP1yVUMdHJEugL7hJFba6o86VnsVrqvPFuTzFb7dN4NBTcD1boGsy9BfHq6yAuu4SDVYc2o",
  "key10": "3qaDgVAQHoH8vVA4t4D6z6M18jV89uDsrQYJWSNmGmU3o6VK6pBsPw3g4EQ1yK2Yy3RvzgV68uQx8cHjvsi41TDk",
  "key11": "34k1diQGteSrVJZVYRGL5ZbdxPUtftdULBK9x5NBts7RysSbK4SZQHXv9PLc68bnHzYMBVbXw4d9wvugxY4yxTPH",
  "key12": "5YUiwuQ3iXV5tugM1UmGNTiTQhBYPoPkxAdNZ6yDgyV1kE3USKeTHq4aB1xdJHJJvXEmiadcvifh2mNvS7VJ4bgH",
  "key13": "63TUVG5VqqWP99FXFmVASYW5MMJBewiPevJLrzDAc64USgqK7WXrNrfwkMpM9NNw3T5NwcuFDdQsxksYjgiAGw57",
  "key14": "36cZ5Gss8t8K53X6pyLrHwki5ypTRyFaPRr1BBn2w6L3EqYUS9ppDUgsQqceZZMWhcjLYF9pJ1Tfw9ShYvGx5bSN",
  "key15": "4oZjY5LM1DhiiLu41jmdtCDzets7g7t3piS7CYb2pzRSAhTsGQ1oyo2FBDDhFaAf9f1qvMdGmmdasP96RtDb6DCL",
  "key16": "4H42UjHD4UnGQ9S3vi1RaSNEY9MgRowuyQofHcyTHUSs9CF5fGeCVJTk93K9GWFYp6sHsHYWVGZssaSsStGPeTzw",
  "key17": "5jrSFjq5FVY7AJRXADUcLdqMxQQQA658njQPJt5m9R4LQoW7B2cqZ83u8LLgwBT94fFLKKg1SYmGoC73EgikqZbF",
  "key18": "5zyFU6kvxxhcPQESQ4y3CGUNgZb48mhGifq6We4nMt36k33m95k2VKuEAtqwgS58ZDc86fAMcgqXX6BY18HhxFmv",
  "key19": "83Szmhwrr77CJceFVtM5oEUYMx9TQV9dSSmZCrAxSkuRSE8VVdySv8DztAuJpM9iWxx2ats4o7ETpWHgRkB2nit",
  "key20": "28FLD28pgksMn6M7gdgsyWARBtoLByeNh8EHjSFh2WUTY3oKq6RYZfYUqFUjXhY25WVm4ZvvZEP1EkPK1gviKoRB",
  "key21": "5FCg94iiUFNx5pKrneA2GiXPJteG6bVPHSGvimsKkJSuo4pV1TD7gwkp72Kd3QmkWZuTZDBFvpfFZThc6vkHSPvg",
  "key22": "2e1gTmJ4iF8KDB4Q6M6sHqGDkTxDnZZQmxXgBw5gsTDDFqVLvGrgLyubWcueSxsedydESuWPjDnCHt5jvTBpfF6m",
  "key23": "djcrQYbaAjsVrPVo8bar7LmrgaHjG2CZAr4betXjk44GdCFbEDmGqjv4t6b6XXh4bXrCb6HDwTcncn1bgFCEvuJ",
  "key24": "2jbcL1ztsARNUvTaDhsL9SFXc1UG4N5rf7KVJLptdtN52A5tUUpCp81gRzFaek6bmMJhYmWSdRqx2ACeKMHQcvEo",
  "key25": "5kbop6zjG3taC2b7GenWWCeSSXLK263JEbdfLEBx5qWhihC9Qn2sjna9jRBacAHGs1VXgN1DUgCUHbHtomwHKdaV",
  "key26": "bKeoFKVGN3mheYeEMUruCx8zLHM5WSBnUV6G1qvLKg63q43fymhYNaVBPSiZjHr9uhJFLuFt3AxdZdoSL4YeDeo",
  "key27": "3QEQK7HoRf1Jkfsvb57SJphvpGuC3Muib3cKx46nu8cHv8jFFssE4uAGKSwUGGALUoAq3N8E7R4Vkuq436LGtV1M",
  "key28": "4agXRxS3p999eqFL1GiozZveZVQ4ygumKVz9a8QwYf9WmtTAghUvh5Mo7imujAdf3LAymRzXHmuL6BaTwdJYMvNL",
  "key29": "3jhk3e5MiiakbEPQoyis83gkhPvWMp4dFMDn7mAoKPTpV5s46Nk3aNTuoQ5hg2eMYsYc5tTaYEp3zcpgjbHgB17y",
  "key30": "4yQiHeHYjRPShA6rpVpcDKtXbXEZMyCArrbiNEqq8N7CagAzwyL5TZF3XuVrviBVWh9D3s3o3Vbw78AsJqRPbbsQ",
  "key31": "3H7tsxqUKPmMDRtj7udQQh9qy6aCRspDuNz6bQXtvUjMYApspUoQeUfyoqT5XsZVqtC7FLSB4VUGdr6rt1oqCkuB",
  "key32": "4Jpxxue6yZpEEeLD1EEe3GXYwpW6rABucrN6Bt9qqgDFDHGnVbAVkzY5XSXHKrQevYjCocNgGkKZq3AjCBK5kF5F",
  "key33": "dfa6Km9CnttHNXHwnz5HZP9PmDnjBtdp6yLgMfTA8kphXZRbiVZvX3PjmBSGzyykmjLtun2uvcjDuoDxwWBWX97",
  "key34": "3KrLzaPvD3h4gJuszk3e4gjTGinSUYMtByLic1SuCZNbKRH62D1fXMiFKLbPwqNyc85QHQymGfB5kXypuuTU7vf1",
  "key35": "vSuf1xk3VS8qBynvBtCRb7kAAnYavbhtzKazXzdENsV4rwayY4krqEuVBEkDdMCsN8fkcu1fjW9Y2t4LHDED4zz",
  "key36": "6YzEahwZKGKRvodcWf8GmLGkvwAdmQ3FXv7KYBYdvTV7RdjxbsWHKRUnM2QyNgiQPjWcHNUpQnftgc6gBSHGUNd",
  "key37": "23aZAubU8JEZimejdnezY9ED8zSAVqgfHMnRtsbQebcZc7uPnc1pTdqSczdnaq13iFy8BwQ6w5TvoksubmpEGUXi",
  "key38": "3vSf8BMUyKcfSyHU4eCeUpq1BqkWywk3ACWHMXr35GureqYoDKHgbosvAq66fLAnzvTk5ki2558GZV24dJL3QDXg",
  "key39": "5qf1upBW1hT6zUVZ6CFdnUN9TdiBGBX8kv9KdxHjE7aXu81b6qfwTCKrEZfoQ5upfGZopV9cWza5q8wYxNtmeJSu",
  "key40": "Tkuwqr8ZFnNzT6MbvdG1V5DpkK6KuyiSJZDVnUm3xP4T7bmkr7keKRQJwYLNPjmGsEbawv7gtegD2r6ncUSTWDU",
  "key41": "2vCuRUL8x2nfiX4cQ8QDpNaVzWE3BVZaUw7cBxXLDxKqZKn26KrVeYc4QpbDVMHHXwGyLowvSesExyyrBkH21GHz",
  "key42": "4ziau6SWi85ihSRfGakobpkmd7FDzMKoEgQ9AcsVcouKbbcYmZt3yMSBNfggLCt1Bnov68ATF5w1viANpcW5fzqn",
  "key43": "5UQjLcrvViT3jCaPZpv2Ao5iqGsL8g3kTBPsGjMctUGvtjzf39KR2WcqraaUCosiEYkBchqqkBAvFKnJndZdXB74",
  "key44": "3unAXh6ewLbLt2fMcqyrNgGoUsDzUArabx45Wb1GNNwFZxFQkcV1829MJxk4Y2X71UoG18NFFTBdvwLQn1SrwfBM",
  "key45": "3S6P7Ry8yKscLJ7zTp4hf9RFVY42jMZrSZZeDPYQFM5TodaHzssKmQJAtES5okNMYR6AEAZacGNWwimg1MQQqugc",
  "key46": "npcMZJ3QYPqqYk41RqVy57uD9Fo3Js6v9MMZYeizDfESY22NixsKJudTgKti67fLaifHDdEwKP9ivWA6hbPL1EX",
  "key47": "3UKKURd1BV61tiUaoVLNByWAC8Sz8Yjoaj7CNpTrqidY95jxpDbsYMU1FrTJaXpi1SkmUcYRfxRSa87fThP72ENo",
  "key48": "4LD3CJcs5Dkx3FPFHaauT5DTbKfJEFQ2NFbCpJurrCfjaXZxsq8voVoCQCAuTSbUvnAQENt5ffsaPn5ttf6vKJte",
  "key49": "2RKeLu6zc84x6cj6TdU9n2t2u5PMzcpSK6JWjD5ozqSFj1R7RxiwA8Evot54xpAkPkiEvYdQsFzoeb69g3FS94yk"
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
