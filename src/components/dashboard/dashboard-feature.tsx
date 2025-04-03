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
    "eae4ZPJH572nq36K588S7afgwMqLr9A4iC6wHBLjjVBT5RrjtuW76pqNVHPuJvsTsANrxEFJGxztkK8cXBVbu6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JH4ZT6LXa9Rqrzm7e8FddPspJfaZb13E86eUXdhrd1dqVhJ2Zh4ES25p4xJdLrgtZejKieJeUNM1SDjJYGoDW2p",
  "key1": "V8dAZyUp8r7bksiHntRFb2F7cX42s8knYQ6VEyfNK8TU9AP2fsfYHft8XecytX54S7krcTNfFfEAxqQwWDwZ8ks",
  "key2": "2jo9U8KvXMGFWHG7Cuq9kau9fZSTv2v5DaBki11SfJyK1cGHTTucP35QJZZgrqGWidHgLiSA5DiatS8wfqsZpCtR",
  "key3": "55wovDN7fbHsFmsrDRnjdEnt29dAUu5xqNzazr9A6DW81E4TEC4yF7VdGH7y6extFaFNxXHehkSLYBPo5MroqcgA",
  "key4": "28uKu6yD5vK1d7GPehyFdRKcPWeJA5uuYT8omXZ5UcMrKeYxDFkDbuWzP2X4WS9M9bWjFpLyniGg4UirhJBJ9MVC",
  "key5": "KVmiUbdbV6DghzhVWVUxk97299Cukyqq6gQUaGjThpn935BMqErz1ysum5Kzt6vMGbMBowedMbJB8W4PmsUvsUB",
  "key6": "2eWbeGcCUm8PgNQ2BpKVxTCrApcdcik6YsQ7h4DZyurEYshEaeyyoCBTF8yLH9NtT59zxUfxyxswgKn4VtkRGMZz",
  "key7": "XwuQWHgyPf662RDHRa2d8zmgJZWZ4XV9i73Scm7nohwNpL6WyeFBLCcdkxzN7xRHGc3KbrMjkWsMzikBs9wQzDS",
  "key8": "5uPuuysnQRkEf9V3Mpb1TfNbSHQLJDG43XLaEuJ9fogv6P3cxWJJNLm2YdQKJdhCKoHDEzjHZvHTagA63gY2zt1T",
  "key9": "2kjfAugjhBgSShKfbet4sEhguiNg16iTdALL42fF21juUwmG9aFrQhJt1U9o2uQpyQcHX4X8KksYF3pRC23QCUTE",
  "key10": "27hfaGpxo13oe9ot4KA1iqgsvqDSCF3bkRbyg8mtJcbTZnwLvuGxigoz3keym2R7dAFpxHKqiWbPGrw74HWRNozk",
  "key11": "5AqcvRtcehHmcXaEpRW9DN33BMJwuchjLvrZkgQ65fyPnZSsY48B3exK4MjySY5aTdb8wfAQA3TdFgECDPaxYV4B",
  "key12": "2bBJuwnkuDwMEqbBEYaydPDe1SfYyaDyPsCCoyhVwYHKWnrCPcHLm3F43rvKc91NegikwtwpwjMJ59PeGU4FgSjq",
  "key13": "cRoqVMCcVNYwiu623VNzhRhwokmotiDt2sLU5yEuq4jPt1v6HEVU8TVcGqunybsfTiB1mpf2gL1me2VM7mhmqg8",
  "key14": "qFi3HBypzsTHtxL6WiovuLoZ26Msa567b3MeEPsMsRnGGWvojgiAK2vthqpUhrdcja8eabUracsJJFC68MiQaj6",
  "key15": "58yXfN3vYb6oiijTNXH8E9xfoP3Dmhk6uP48WAq7qSifZWMUQdfxgrFuarkNo6wPcbscBiHdCVLWraz4tsLct4ji",
  "key16": "57U8W9xujLYAqZE13NWQXonqEyStDKcU2S5aDs1rYdYCNuhhstiomAgeSdFFpqsJR1v4xaoLVxr2UkYHhBjwaRWR",
  "key17": "2VpCQKv8s9YjqPthB5qJ6bkNzMM7CDgwPW198b24BbgDdMPEVHKtACHBjGtb8yL7USDahQRqdJZBi4XH6hrryjUP",
  "key18": "2vPG9BLwEW2qCzUSv5RCddJPDkQbPZ1hTEbe1hrqTk9A9JmwAYSfPFVPhMMbkA1k7yfc6BBp6ZgtypRQfw5db4Pz",
  "key19": "51afabA8vT5KQtBMv1QzDHhKJJv8C5GsYgev2X1EQXVgV3BhbRGnYpawqdkLnnPufXmfHiXo4xPK147MRRTfiWAb",
  "key20": "4EATWfkrHYmmjuLN3yyj223z6uEd7LoA7FkeZWsBPN2r5Zdiz2Au583AtGLKqFmKwZSvgrWCAjwXcvPv99R8hb2v",
  "key21": "3p2MYCRvYXk9MD3k6sU68GCzHettQ4BGm3iLJxF5ws6ZoD84fPePzmu5psa79rWA5qHFPbF4c8yw1WzJZDfaDZat",
  "key22": "46B8RnEHkXMNShTUtwmZ3GUu8kNvauEVNvfLvAkv6dbuwyniwX37bremEDiiHqGc2u3VU7tGrNm2tydNXvUAYGgt",
  "key23": "ydoFTdorxZLLKeR3d2tsMAg1PL5hRevzcbKpdKnV6nco9M4W3SFrrUm2Wj38Gm9Gnm2zQWsSk9BCDnL5UyTVg2T",
  "key24": "5ZmV61eQEw6HqwijK7vQzapsCsvrrPPbf5Mb1zUo2DzMpkb3g9VPvytHxhhNuWknbQ5rY2wQ1B4bLWu6J7ktdf1B",
  "key25": "5wbXGjNxDbgk4kgCBcVusQ6xewqZoQLjqhkeREYMpYUddz5qnZ21nPtA2T39rGEVogwNmpCA2VvBEkZRB3HGh8XE",
  "key26": "5xjBSoQqGf7v1GaKL3qLprgUGCyZL9QmvegsknKkeior7uwZ8Ak6qEMFexEn9ieyRc8aYgGZqdkb6zRSUTZ5sGPD",
  "key27": "4Dmxqj5tL5oUCcJwnr44gDUqZ8cofiuUm9kZWvSUvmQUDxvNUJZHKMZ4aLBoVUF3fatKnKGcZmUcSBUa7KrQqU9E",
  "key28": "4rcdVDq8nFSTaDV54mTsBCS59CxHJBh7TtbdhLBchNjFihPhmQoNivA5kZBYt8WbcMnkRX1mFkeMWgDs6kxNmRC4",
  "key29": "nzYt3tC68rZmV3LPeYiAdYeNewP744fveXcAR3Qmya282ZEXAvyBKLby4j8jAEpJF4JPeo4B28DTSHbN2nMHrrF",
  "key30": "3qcuAEX89FQsQwSnHFcBPMq79sBzdZ3Dze6zpwUV1WQP8MAHYZ3Kq2tCen6opzQay88UBSJSEm9f5TV4YiDFauPJ",
  "key31": "WF1wKRPVbeUzPuUmsRcmknAd3t4WQ7kVETjVgtLumHmnDVh3LuYW1TSVE5B2hHJBbxv1DVhkwuUXMcwSPcErd3p",
  "key32": "2m11iWfbB37KGRv3HxCxcNqWbgTHiseHz6d2nDgWFXar7ZjnGZD2N4iHBPK4GkxxV4SPWhcebLvAv96ayvCYomfH",
  "key33": "2UCDUAYT4d3KRiNuQBZPK7Ym7k1o1X2KJs5LKtLJD4FGx64Rh2EDDHCxNd6YmMqtjX5DuWKqSKqzDtA1cfdt2EZ5",
  "key34": "2NysKpwqW724YBcmdYE37jDSztYAPkxyKSSgKyv8gUkjMmLZnhzwCkHRvxsdf11vYumV4Va9XVaBBim45esvBRuQ",
  "key35": "3vR4PvjFHshq33fYBtJVpc3yBJQK9nJQtiRxYHspVvmxMJQLMPSBjg39kDJfbdcy31kz3vWEgMG7WLM38LzfUfzG",
  "key36": "5g7P67fy1o2P2WCxLJrcGcoKVqoz6h2HHWsJahNyAa7aNRgzoeKL2C8fvkETXMEPzUAc8hyq6iNsxnaqMEK35d2c"
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
