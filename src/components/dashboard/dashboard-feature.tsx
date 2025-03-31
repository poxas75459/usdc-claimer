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
    "aGNJvQ3jxMqWCZQj2p89YoqhKpzP8SWCbr3BRYiBGc7u7z7BxR3nNEoaRSd9TPk6SPoogPnLvUq4fR4LXVhPR8J"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "42uGMmi88T47xDPKcE18bGhVvaWEfC8MRcjcTnwjVfgdi3B5jvXkgw34txTyCavEgd3MJZszmrTX76J5o9bip61R",
  "decoyKey1": "B2i9sxvM5hy55nH2QzuBQ9BLGrjKWp9EeYZpzrHt5vrxFtb4ioxfVRSkAWPwoLhRtskjrZnPJrmtLDt535HqEhe",
  "decoyKey2": "3UDyVEJiPyd8gK5Zacc5SkTNBD66KZPfB3XkUsqm12wmeSvDNfqkyCwug8Xx7z4HySXmN7CPzx3SZzHue7sUSNbX",
  "decoyKey3": "4A5Jg223RRBWFC3XhkkUzFfU4UF6Up5F7KbztijrPk9mLZWM9QJFQSje8uH9CgUWpG3zngdVtGkhzyDBTgNV68CW",
  "decoyKey4": "3TKdBqpWvykCNXtW4rhQ2abUeUL6PdupYAzmNEwfAGTB9FuP1t17X48ptiCvrQoDEoNM9w43r73DmLXHN4qPN91Q",
  "decoyKey5": "2QMnAbbDjW3vx6Xd1V1H48c6jDpg1u2nBiF8LcvrzvKo2krrAuMWmbAWuWUy58wDaU581kfKnYRje56RSp4HNKzM",
  "decoyKey6": "p3h3dsVELYS9FZZ3Bb2UM3cD8Dgs81rQDjcVeL9psNuV1M8kMwrY68Uyoca9kAsBF9dNSBJqtCRwvian4er2Gug",
  "decoyKey7": "zZZ7HoR8KoHdr3xPeNkGiwotUkEuYnFJ6Yw6gHR4eXDPgPJfcHs2zby7LuEjMGHLzGzijGXjfsK5mr4HbRvFeMq",
  "decoyKey8": "WB1KeKJYsTqesdYrR5EbSeL5vGJuzSrCshmSJrfW4GZRW8Y9VkS2gU4CTGjhFZBvSdG7dXKs1EDpst7R4rQspuM",
  "decoyKey9": "5KWSbGSn2Lqoe37RHARrLMwxMAH8eXYABU1YjhNeoWz5XEid2kieCA1tzBoeqkk3fCWZx4eJXK12eULYNas6S6Lq",
  "decoyKey10": "5zU611X1LabxwzHnEBWfLBi7UEnbENwsQ4KPmbt8YFg9TDY5y13dFbvDcAe8TEW9CcCLrL8oY5GZVjNMYPGog2Bf",
  "decoyKey11": "4afgr3y5bipzurw2qWFvp2ZP6fWneYqQKNcwHSAHbMgNWQqMLqSwrm1Z3fn2BH7N7LEvvnU28udHqo7chFSdD1sz",
  "decoyKey12": "49cLanHT7zkNMiK99CX7VtDzFrXkiP4Vo9oZ9GKmmdLpTNoAg9p1suB2Qj9N6vEHcwq8C3E8dnN3eZj8WrnWCgai",
  "decoyKey13": "28rgct5cMPPrDQBSqGB3oweinmdGiQcNrTwJDtGkgtrKzW4sxuxBZ3VQ2q1iJYd2Wtj2zYA4PYtbwYLz9FpYUWSW",
  "decoyKey14": "5AdgsNhg38scwsNQC14cJUj7tAsysSLMf7MQ5PejLu9uiSAkiR1G1UXKtBcU6DhvryejKbDGVn2DMMabKW4SWUNJ",
  "decoyKey15": "67Wqe127Zc91mi45gqyHTcU6o7VwqzxtJVLD76qYUi7CumMbQfy88cCPaGsVnWGJ9dmrHhPqaxBaR5WrZ6yd42oJ",
  "decoyKey16": "5VCZfCMga4EffYHa9QnsXSt2GK4UacF9gjWSC5K6iZuFkk2qY944LoLUhToFpNMbR8FELtcxtYS6vaENwUb7g4Ax",
  "decoyKey17": "4XJMBNQfvE9UM6KEvLTJa2kyJXHpGfFKD8WnVwAWDJwDDBUxjUoPwhioaLZDd8W6JBfbgGky9XgrTc4ytVDMPZJn",
  "decoyKey18": "2BBdX5GRdGkAnrkPDriSnpv4iiswP8XLZHLP56EUnLf4x7AbWLP5KwFkUVvE6QbeKQm8YVf8NXAzbr2X2ZrStg8E",
  "decoyKey19": "2wKrZbsfvK9wh1kNGwDQYkCtcn5WAaeYFzTpgs3bwA4ES2YuB44BPe8b9Cj75mrfAzYN5zo3hRptfAsWd6hK9ung",
  "decoyKey20": "44WUfnEeYvP7srV3r64FjeujbHszj4QACmTrRRfQzdzgQ6nnLaHos9ynVp5y8GdPvA7YFwG75wLVvVLF5m7T2EVG",
  "decoyKey21": "25NNnDSJcUb39tTda7Z81UM4LMMGSGohakWnJriortijELUnrTpjL2ZMJu7EZCshZ4XESx44nXvRSTZhv3h2g5CG",
  "decoyKey22": "4gJktdGYVLAZwwBGpYfmkgTUjDvS5BGuPBMe8mZDgGX4MpGQcpbxUTcDa4TDiBRUqbv2gmE9Pea6wp8hBkAaknHZ",
  "decoyKey23": "5RMsJCLRMTrYt76P27LBMr5gcLUJ8CxTrUkKSkxZ4ZddNenZt9ticJpwscd2QJ6qVdSQ34dojdFYAB4dUTBjmSgr",
  "decoyKey24": "X6jpNEBK1pG7NakjWwbZprTU5CR8j3wwvPonuCDZym4dp6cZrznk4hx14me7YjKBNQr5y5oDFYm5NCuTJ25ziGE",
  "decoyKey25": "4q5hKfv6NAtcJRMmCC9hmogGh7zigBxa9Fkn6bSgRQ1hmiiX5TVEYtTcdE3Q5HuZUgU8BVLxM1qisw6aXMQ93PU8",
  "decoyKey26": "4rr9euPfFhLtEKMuZkMS34VV5PW31oDKbCkU1GAyDcWxxbaofQgg2h1P5B9wq6KYjc5nyHJC7b4Hr6JontzqmR2s",
  "decoyKey27": "21qMgzctWFfGYaq8dwBzxTpkaUsuS7v16sthJoB48CSumHb3mH89864EfrxNDPUnd6A3gRiZxPHSisT787AvDXHS",
  "decoyKey28": "2xmQPmW3dmoCEWYUY6KvB8Zt33BTY3bDDdpgKpGXoQKqgm2UuRTTx97pnEYdeTzRviSYjc56kDjng8CGSiDot5nQ",
  "decoyKey29": "34wuzxMk6R8VL5VXjnNHUHVYu7zUKQEzvs6avqzF2Wz8wZQYdoUd9N3ET4otPvfCjoSq2areZTJ1N1PTg9A56CZ8",
  "decoyKey30": "4am9eRZ5S64j4kRjeWCKUWKuJiMX4pwpraABwfnFpePP6Cafb4VuhEDveLhqjHAQAuF2UmbhQYXfFMy1XpQ5QtA6",
  "decoyKey31": "42irrMpiDdvsGd4Q4HR47TAk9a6GwgQj8eY1PPZHdFuDaCKdztVpZRyH5eRo3R4BZe9T9NELW2WCYps3qnBPa9hc",
  "decoyKey32": "Erypm8Jm82HNzpB6PJCCBpXibgZV2XisA2bYUrwVhqUW7ziY7DfvAXexqoBWPePhksVrxyJewPUXMLR3oveQn97",
  "decoyKey33": "4Dd1TnPK3sY9RtMbqFvEaSwEyePfM873rWdBDMa4R2U8aA29BCV5XsSG2ySky66BJxH4rNAaMtUM31dSCYGFZATX",
  "decoyKey34": "p2346RBroE5ccP2aRiGVxN9GEa1YhGs9E2samM1kaLMXExqhDsiTtzjMUx79u7xaaYog54SUrZwBwJNEZg8jc2F",
  "decoyKey35": "55xKTvAmYwtQYKhCcyc7SBDx5cA7fxyCrv4Jt8kT7ZrRa9aet8ViVGBsSVbW6W96vps5pFr7b2HWW9xcfEbAFDZY"
};
// DECOY_KEYS_END
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