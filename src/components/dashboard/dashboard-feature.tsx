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
    "2pwDyXomkjJXtKD6JUFBAEivfMQsc8jQ8eWNNbADZZRV2gaG2VtNjrtH1dzdz9SGSzr44BcQXmRyKyqRD6PTpnw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEuJxkpq5ozWjSzxuQdu4tDM3ZWz1ENq3627UNiijaqtoRaEnKNz5XdEpGASLgmWfwEvoEQGDBiM2oz4goyGrrR",
  "key1": "arxTJMHShTGjy5tRCPBbcR6AfhmTR3vHtsMXTmFQFgHB7nQuzu8rwzPrvc52xZNKspYWJiRXTKHfCJN6gN82YMe",
  "key2": "1k2m6cbGmf79Pxi4uhWZZiMEzkGkA2c5Lag6ZpvaLvtEU7peYGaHJreSLzcDVFbB6GPub4pLN6Sks94R1xEnBCU",
  "key3": "3SJ9UoyBNQptTPnRajsSzEKCMpv14S1WehwyR1GMggHFU5awJDD4EpuKMgeeQJin8fS9mT1REaovMtjdWM1UZ4du",
  "key4": "3kReSs1onp8DrNLuPAtetUxqmRBv4U3NWp4wdH1coaKfhjZJ9zdQ78zSStNAEFzfHARgXSxu5GKfCtoRkqkRGR1e",
  "key5": "4Btuzt1W56sA2xqvDMCrjoy5uwdStrbANQFFgYr9MEpha4pYgGNY1P7K2y2c2VzZbnYpdvmG1JthK8wzohA4imLr",
  "key6": "2Xu2PDmcqVAhtNMjw5xtV5VYwbnnPYWcWTYdJwLWJ4CKmojaRr8BbE4Tmd6JkyHP4Ze3v9qES2az8sJzdWUdL4yL",
  "key7": "2ZQ6i6SH1RgTYA44bvzHujwc2Msz26wZPBLovSStCYAaMh8tKnezyMCCBjFa8UF5LdPh7gAsc85UssBeAnZGTbvi",
  "key8": "3sTAyz5yEtS9oZUxhHC6LdVzFStUJ7QXXMDRJuuVLVPoC3YiPS8DVUH1LPzX5k9p1uhxPCjnRE6w4q7UJCLjVDW1",
  "key9": "2Z21s9si59AsH8oHa5vzAsiQqTghqxWamomD6hgjgkCjTyS8dcrxkuhpwLguMQqaha2a55QnhyEM1Wc3XnQZqXxQ",
  "key10": "3w39ocTrSBPYtjYEoDvvZLsuCZcTYXs2tZVXwFZdCGCjiaMm9yq82pymmUBmZ1wypCHonJFPKQ4Yiczg9y9VsJCo",
  "key11": "5q5Ri5TnGigRv2bGTv6Ww47uKY922R5qhTB2pKFNv9JryBTqsjV2YVjx7ZtBftjhwt2tfuDJTtvHRA66zPxBFaJe",
  "key12": "2qrDMBAdwjRmgcrireKxXYPaL7wM2AktR4SZXttoLGopbLX2bmXUftSMa4aa9gQxY9ps5A7DKMHg6u1ye12yy1HH",
  "key13": "3912dCd6Zs6PnrjbM3eoxc1M7MVc8bwXLxMsCbJjySEfCNrL4HSEY2KgtaJsgfTVQ8QyJSLpQsnEJbPj7didfAph",
  "key14": "38JEgxkoVM8YkEHYdb1gbeNpFRcbqayQj7kw5jM4otS96tVUpHZ2RdUrbnkBDQPtWBY5j7aDDg9UHA2QzHsVApxe",
  "key15": "5GzBJiSZN7U1ojCwdPGTjTVHpJWKdGzBKHpAonA2G5gKB6QD3tx6hTjsCyHrGhqndqbHhTnjTgpRyPVS1Wa7t6Qd",
  "key16": "3E8akG8KdQm2j22sqykiwmaTPVvsAS17ERLeBVunqyBVNHep8AtgKVaco9btrkxYaaRtV8SrDPNLJmtNMA6z2mFx",
  "key17": "ZXNWEbVEfHFUB8CqQXxdgoZ3ip2GRUKNT48UCUH4ZRdSY2iLC7rmFPeeLsyYP1tgKLcrt76uwqEqjNVBpmd6FTT",
  "key18": "43UMpQ2VahnemXQNgG9egpiSBJzgWNYtKXYgbDpu2VGMVsPoVytDGkWkbZYVmqAtWc57ike1MLm5GeX2GMXv7SQ3",
  "key19": "5rimAgwDASJwRxrsCZLP51bvqbCeHuYmtNLEBQDFCKBF6kheWALMSLdEfLh8SZxyqBmYe2XMyExk2H5MgHPUDgXc",
  "key20": "Hrxe9yZvGRhN178zF9DyZ2x4PUaDEAWsctbC712Nhd7NHAoTCK4pTRX8cBtutHtX2qY9oubB9tcqLsuUYcFLhYi",
  "key21": "48UZosNu3MZcHKKF9KBorJBC6cjX6xjLGYJKiWn2NgpXSpgwAXxxkzPNE7uaUS2A2nbGqxa1wAtVh812xkwf9ZcX",
  "key22": "3v7sGYN3SzdJ2rn7gtPnrbojZsuD6Tt9zpmGKv6rtbVuimAVS4vhnEPUAC5F32SarYdUaHV4DEXUTMRvGSsge4JA",
  "key23": "2RdEFPuaqPMk9vgoX7QTMGjvQMVKj2vHJaifZaSswswksHVetAGrD5oCc5ZB5xp42eNBy7Yk8CrKXFUsG9r1X9Zq",
  "key24": "2nfB62nj65WRhSQHmM62FayJe6LZwwmtd7v7n8dxWJZW5vSV3e2o5qVWXr1zafyD6mKC8maZ4MNZYUQ7hfeT3N2Q",
  "key25": "5w6gWcaTbmihBUiDaLs3nn3fswyEUaqd6DSFszzmcundWi5r35FvataafyGCGcL6FG7mxJg8wmRwpojQta7QdBYF",
  "key26": "3pY9SVECygcE63tjPnu2cuh7iid9jRGTXeWKTTN5VgWUCFk6WhmtZGmAjuuUUTuzSHU8mD4Y2E1BvMUNLHpReqwd",
  "key27": "2XXsuqu7rni1YZS3GqtWGb5mPBVz7VDhoA372mb6Gw2BHRbCZ6gu53zj9RyaVw8EShfrqN7VbK7o538QCCSJQqTd",
  "key28": "3WTNziviZugXsUTPBfsCprn4BS4U5PjQ455QJRuR8j7KHyqcrD8sfTFWcBxx8ugoXxJjbhqee8M7nQPp3EsMiqsJ",
  "key29": "2fT9DsZudLrWdJv1CkCcAiRVyX4E4tEXnvpXvk9x6PRiWVRsoetqowCrhW2Jj2pNPmFRXiZE48B6vcjuLRVQtVLo",
  "key30": "5dUYaG14kksY2NN5z9fMw6qgPnufbXsZWYPyGGTdnZnJMeqbcjmgWsSYM5DAYaRZzU9q1qEA9GqhfGGL4a85Z1Rc"
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
