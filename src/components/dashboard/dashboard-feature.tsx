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
    "5jo3ZctJYm9ahZDWeiQ1KSsDqzCXtZq9PoEDc6utT82cEoqkY3uksWe9xX5eND7MfavU6zjnuXW845wckx3gvPwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Zukk1kHko8xVbvFdRmd2mTV9bHmkjbEaMmbu8xLGKvHBpnc7v2EszFQkVRpRttTvZpgNaeRV2QVUX1bWBY5NJ2",
  "key1": "2k7o2HW7R8VKj4wGF8exynQqzmpKC5vPXag1uasyYGwTfXfTmJs4bz5wTRg6CAhpCdA8zkP93ebNHikDe2WMG4TP",
  "key2": "2xHpJHJkFbC96LixF5HGtG8naKeTHPEtTZD1e9aUJnzrTD35ETMHeGcj1CruACwv3pcGL2peMGAoXdyoLvKbunFg",
  "key3": "j6kyAh9837mdNa5wDD31dSddMf33anxd8mbwSazD9aJFcwEFs3qvChZPWSsuAGAqFCr3DLBhV3GLGdBbQS7tPuR",
  "key4": "5q5hBKy1itMVrUwWmZDA9RVhjAmGeSQnSYAHjz9iGKQFxVz4yfEaZVzr5ZAYF9Y4gbn4LvbnD1MpfURkZcTSvKqT",
  "key5": "59fW9PsLqwfWbMSgstncZZp6GrZisNTexyyHoCK9Gy2bNxR8un1H3ExMSDKyzrpxiy29DfKWHTGAZbHfF7siGyU5",
  "key6": "H5BCgaij2QLWfjzF74ggxxYcrsAnytssPNsuSMgwNsEBwRHwZE1SBcBbDKSjxPHdgEf5heNpCYRpfFr5vHLCpHi",
  "key7": "2pcnaVKfFVTbANU1VgTgd1w9wKmih6Q9kgcQ6gr1RZTT2RdoQ8YnocSjwmzKCaAWTm9gy7MibtcqGsSTwkpgS7Tr",
  "key8": "4wNexaeiLdMYL6nPgbScHaHjg5TA7HBr6f1RsUmq73eqnJYXboQ1RzzSSYAf3hNnLKWoeHj635ZDBA3cbzoTkuf5",
  "key9": "GZv5xKRxC1qKKwittwkKd9qUoj5csDgGdrmbZ4fVpMg3U1KLctbspdcZ6fEHiQgLN9HkFYKyQG22HPES5i7zM25",
  "key10": "5DdMWUMM6YWXRxiT6wWQ1UqexHmTCdCQteipYQ4BDLQCcPHwaP7ozEJs2TsGUnTTXnFnQvQkJcDMmtB2E3PatGpE",
  "key11": "4YreaAf1M53cjXu4j7AxxsStWpDDTsBqGyJb1CAKhuK1jxijidPbSb8gkYr2FCZpm3yrokFJCMbKkDyLA3N2XuFa",
  "key12": "449bJQ32AFFiWzeqt31tJ7jaxycEhRiQHwBZCKQdnUUSQD4tAdJYV4i377PRsZdR6F968BoypBgPrNQG2KZh5fUH",
  "key13": "3WDrvEzgMk29kuVsiBK2fycWpojX9MEpm983ceqPkutJU237A8ksHf9mvghn5TJpcUghNK2WSQc1LK2oM7s5D8Ey",
  "key14": "41iWbdhBkBnWn64wmzvCxUhdWFAEFt7fbqqjhYJjZVVYsK1KfDqPRMJjXEm1y9QM23aQTNBdt68CuL1mf4SG7iQx",
  "key15": "5Qgpv2JsCXQ7kZsGiaPcGwPnSXNrdYdYihWyRLr6BYHrF7s12rEi8pVSnm56miS65pCi1GuSRFQwtX9bD9pdtAM5",
  "key16": "xNZnyY3ZVuVwumNZXFSAUP2qYpSx59x2VwKqXS7Rk5Cn5o9iPXEwWbo17qsWujvKcJ6NKh1BfbxLgVRGYvCoq5U",
  "key17": "4VD1E7m6uAAKv6obMqqDAhdvAGU4cGHYiSz3UofKwZ8MsbmK34QQVZuFJnWvg9g5i4pSsKsYQFJq8nQ9tBZbhTUp",
  "key18": "oksvS9xUw1hcC8RVvPko6s5ezTaeaejDZxVNx7LJEajbk6aoE5uDZoSD8TdUDf6D9fort4ahubpHxTXiEY1kC39",
  "key19": "3mWn7VE13vKWvLWXwUaHwx7UbyPX6KRHNhsSY6YeUrmt6kU5kt36MoK8FThrQDdWXxSYcx7zAkxr2tcg3XGP9GnU",
  "key20": "3qYMWgC46D7vYERY5jVppQxHVvkM6XYrmdbDwXTULv4LipGUbCpRNxXAdiAhVvUvxVsm2dQyZLkoJp8vX63VhFBV",
  "key21": "3PAfH4LeHzrNmwZ5CWDhkeqL2kahFDpH5Myohrji1VBNm7mAZUTsAc4VhkcSdtVbcYyUR9Gi6bsD9hY49E6afPR8",
  "key22": "4YkRQjbRS5V5HWgnHBBUE6CswW8dQD9hRG5Z5r8X9UTG6MXJASReewJEGBHYzZhrABnrSMEkT5PQv82msnV7kTUS",
  "key23": "318R52eTg2AumoJM8vLc3srsJwufGX5LsJQv82gptpi7TEhdmrkMHNJQBZz4QWUXUN1FLhXT8TkstKhpEc4Npc2",
  "key24": "23cbS2QcUMtHe5gyP6oEtboW8g9nvntta9CqFkT34JZt62qahwfzQzz2WLXzucGx7J6qEi8jwGoSu4PrPVyEaTxE",
  "key25": "iEQ9vd9JpNGze7fKdayUiSTeYUwZqEPbZAVw1P3Sv89eyNBHiaFFDniCM8mY9juD5yUSpAJ11nS5ny9fc4rXfJP",
  "key26": "2z3U26F6Lt16sKaTQcSWBPzfcMfRFpnHNMTWs7S1jPeTk1GBejvRP9Kfq99NojByYZRG8oJqWXJufHkY7fDsJMii",
  "key27": "426ULXnpPnN5pWykB8gHArRo7ui83pWznjhWLQRE7QsRyAwTTWsVtXvYo2bS8kdxCSFmWAXRgfdhL1DgcbXuMCek",
  "key28": "67meAmnva3VRut8AWiTBivXwo7cDC6tim2FqMktBvrZhqJGG97sMUoYVx4cGRUPrkciyF5HMJE1jGzVb3ryFbURA",
  "key29": "5GoqCh1QGgjbzcNhdaaSSxrAMgc1HxbZWJvp5BWUiHNGHmc61p71j5yhp6XFtG51zVQMdnTpEk6BvnYKsehMRmGT",
  "key30": "3RLw1KaCgLBUJGFmGRoWEJetJ4MXuAkMt6sxtjyWavjKMWW7wKWnpwqojZExfTpvByCiieByTyz6i5rtuTEddajf",
  "key31": "ybsk5ujfYtffN7PKdpTnJKVniJqGHQ5nxJoPXop9X21BK92jBVWaTu9ZzgLjygs8J82JWt4SQJ2p7wkTzzyjxg6",
  "key32": "4xVd6JtsQrQrPxTs439QcNfgo2ydXMX9DMXGT3D2boqwGEdThyeXEh9KX4g3zGmCyXFMCWxBxYrfG4Bmbt4bwDAs",
  "key33": "ZVcJay9Yhrs9uQteZrDc92jzRhLtUjmtY6FNunBFoQjxb6gs5U9dfLrRCNvKgymreXigsZzCy6TdmK9TxGqzq2E",
  "key34": "2qRVTmQa3sdz4sEDmKT6fo8WTZdiBEcjAVohgzE36bvtxWk7jBWVRpCuxUWheJV2v4PKz5VGAiAUtKFjRx5p7UGX",
  "key35": "8Ki3XExvgLkRY7H86kFBdU1cL2siUjVs1ghBPPSquoXEP1AkANHYodbLTJM9Z97zEeneFkqhJQBWFRqdQtobiVa",
  "key36": "RNwjPBKhzPrxJURFF1QZrV1vYjVLJXMNwYig3uDX65THAA3GP7bixGMEUPHdSdACJyp1FRiyNJZRmKw5kzkXbkT",
  "key37": "QzYfB2bj739iKGwWUkptoFbtyfmKLCd2TjuonGaZMNJj2gT67q5sqyiYRaftWJy8K2mJxboPyYTGyXsLWx2Aa86",
  "key38": "3c16BRyR4XpCxP1ZL7nMv7HSV1cF3AeU7ffsQam8FgbPr1oQHh2Qx2Q4TKMX66Rf7hMkskE4X8MhDebsFxdukW1t",
  "key39": "3556647oq1XZThAJLM4t4dNiYEDw2ZtuZye2wjmK2w959y4MFLJHpMWpvd31LrjQ5q5kz1RhozgN4KKbRgxkDFfW",
  "key40": "vzcidJgUxDjvhULcjPLJx82bDUsHaSwiZAvAgA2DVU7vVxnokm5PxQisdDq3TjcuTBZwH3WLEAYsihhHmqUsFG9",
  "key41": "QcF3CBu7cT3U6PBGqCQdFoGigV5dWFdVgVxJtGJnmgcwzBiZuaV1oiJp9jnBkdV2MQMjNdMPRpurFMi3m6wVQAj",
  "key42": "3mKuVC3x3B47BYb5jYp4CFfAuoQSVfrgUfpxGhWdUMNSkgR4JgrGi787stdxhPEQwWiHbVBdd3sz9m3TBUiW6Huk",
  "key43": "3KzrAW4qLK3srmmUbf8g4AteqhhYqcNzms8SXE4eGpLuBViu7osEEp35cdJ86QYQhwiB8iEaxoHvYgY3zPX7e6pf",
  "key44": "4mF2R6Htk8W1Z9218mFhn5ALKoEbcM46pBaJzbbxMiBUTiHuA5GQvxZcyeQk7SUm3iTga4DgtPRHXC8kj1myYXph",
  "key45": "21mpJmZLv6Pq86cRqcFYCFQHmyKB9NswUDdV66mPCcKmc76Kx7Hp5hZaABxtFDwmPVtHw2NweajWaZw8NQy3QmCs",
  "key46": "2HmYtGoNrTydxU27QUUq8JWLqy2bRmCr8RUL6oJQm7L7berm7Nh1EZzeNZUExf7shXHLUjvwcsDXFgaZP6CJ9Jrb",
  "key47": "2eaatdmQcy9HHSX72hEnSz8YNSYuCSAqvV8mgiiW3iNtK198nanHhkaxP2BcbVxcJUUWt7GJ1DnAGMJc4cDJYJHZ"
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
