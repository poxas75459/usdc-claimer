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
    "4sGMzzfK64WHn9V71QeThc5uTjgvPpqcfToEVrLUScaCwSGa3SAGGYxWXNC6oEWmq1M45Y5DZwzNLubQZxyeG7R8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CX7EFYaRVN1YTxEUBag5zPux73fJRGTw9eD5mXVK7Fb3amRRKkm4tMpsfjbyPQCYz31dRdMfXTwihDBDPtJgck3",
  "key1": "47uNnY4TxfAqRiCzqvdGHmE37dNJGgg5qg9cF1LDyQUKvgyRPYYNExSjwKX4G2JV1cNDtianshatGFn6nhdWgc2n",
  "key2": "27knQFftdacq7FPds2xvrrtYK12JP2PuTUQrL1DovrrDDtKBai4qeL9DJuubVVaXY9yaeuvPUR7gq5DxUkp6P5H5",
  "key3": "2ExLZypYvVdgpbfbfGuWGFyEp5e22bpQCua4WxvisHnW6kaJFvBnPMU88yVFBYkZp7YBmNjStti6TAdmPHwzJSFc",
  "key4": "hhvX5uLpmjQhzGPLZDXdkmfedLH7McLnc3f5DYQBeJ2zSivAnjjFaRqGfw8D8w8AnhAqGJ1q7AfiWwcyunRvXX6",
  "key5": "5WWt34reSDQBseqEwYa5XDUV2GjLtiZdEB4RVhi4qgNk6LWLXGMYFErC3m9R1eEKbjir62VuNQedQpkCEaVbfme2",
  "key6": "3LoAVrXPbUWhJfRMHsVG1bGHLh5QY7xY16p7WEKK8BSpcLFEvEaS3ahyfwTdw16scCtmxTv952MUVp6itHBmVRxV",
  "key7": "4ZeGS2JMf3D9iJJd2LYnhD5coLUH3zja8jxurfSAcDnFi3tH7zg2YzN6wbzFyWMRpXiUojy5hrhtRU2WJDw5eAt2",
  "key8": "5gAnjegWJXP972Jh6tV5rfupvutk1Mt32tpFHYQCQs6N41GcitEkon7cMvpccsustoPe2GWPXFA5CCAjmUQ1fCoW",
  "key9": "28Q4UWaHyZmPBdxsJdyDjsWU9hGehe8t5JsAyrUuUkpnETasWtdTMJYYzhpdFX3Apc1bZUPbmugfukq67NBDQPwW",
  "key10": "2kTzDZPgNX6tshEVNJgA7nEzPrGL46GG6bYmqPDY32xoKVY3ictABgi3jdKGrgxbmiRcR5DF1pq2kyqN5izsQhbV",
  "key11": "4FfLmdHKrFDKukvpfLS2AG8U7RhZweHbJ4uuzNMiwmzovwC3C3yxNsUjxvbhAmLqKNKq1ndVmQhTFve5BLJVuavj",
  "key12": "3TExHCvXHH2eT5YwabgaxJv4hbr24r7RpT4CUPkYFUDspQE5dF5KPaJUjmijcWkyzXPF4M9wxrTMjU23cXPxBNce",
  "key13": "4vvxqkE4UVs5rSLoAFm3eFUk8gCHYRGFKreEgNP8XJ4xdNCEvCSMGUQK4wojdQFEYBHHgorwRT3z3qP6NWqSLMNR",
  "key14": "2iskhDvS5ZctgY1YoGSezXTcdbEi6MsQd6ss5jYZkejnNkfvxqPjkC7NgFyftY1Jzx81S7ZqWxk52f6XZSN6EiYn",
  "key15": "4Un56AzE7eg8wDQVaJSoFV7GcSEo9HaAbkNkTVYbe31EKvZ61eqHbiCNTuj6G6qeQTS2u1nKLGoMoVV6nv6qUcoP",
  "key16": "4ykdaWtgyqX2PajxLkJV5gktutpRdhfUPafsPH8wfrZj8B8aw1fcSn1stt7pJKfNZehVsw9cKtV34P26Vm9j7fW7",
  "key17": "4LADs3S5BKnZWpRFMGkR7xpLjtdzD4zVxCfSQ9ZGxCdYnK7H5jM5w47BDVnUDmu5fbpiHNTdN2ewkh3DbTqUsJuc",
  "key18": "653XyXsnXKG4AuaG55FVFJFcSiLAymuoGZZMnHojvyXynmuDS25q1S6WzdWE1qCEqqnNFueTyovxEyeQuXWx1HBE",
  "key19": "3SprmyEhRmdXhaZTYcYYkVXZJPhSNF4FbSHMw3S483M27p51TCHS1oMTALK24UK8rVD7k4Y2YZtcddW8dhjsifpv",
  "key20": "uDNRbJcLnjFFRjXJy2SEnNNZKqND4LG5UbUWzhtgdTb7pjCWcXU853asJWUg9e6ozd1bRMgArcpxSv5LyLyDB8N",
  "key21": "4bJshxe2s4FERVAs2pFLmmfDfG4beYP47M9MmXJizL44hJQqMcz7Mr3hWHQb43CUF7pXymF7UakifsgVijHCD1p",
  "key22": "4ikZJNL1kTC6WGnJSXvGJ1af9cxjZzefazPVWZCAtLXmDF5yyihCaRfgk1bGk6EwgDKoiXKpPV1R5axCyrknvmPA",
  "key23": "3L9fAMXNuBBQBnFHQm4XVzjb3qfjntJ615i4CrJWrGpQSXfdRyDgfLR8HBg9rqoUodobbUBFD9wsZsdi6KAsbrbF",
  "key24": "51KfArSANh1S5xXsfT9u8r5YM4YxRGGkn4kvrfQQdGwkNhV4SheDVdjnowDhc9vEsyNm1q112Jzt4Ze7c8iAPyXb",
  "key25": "4seGch7tDW86q7rLkGXWihY61wQQab4RnA2bGLM9s2vmWAQs7a9MykyHeAJgRwfHxuK7JXP9ZKahJsHaSR3zdUHG",
  "key26": "MGJmHyLCPLgE5gy85dnHbQYvwcSE2VtTSFgVP5AHA2a3j7mkS5wgYM2GauJUkRwuxgbrFzh9DrZ5AX2DcdsqXGy",
  "key27": "5bgopbSehWhxhd485777xKhy5RjEKSr7sj484xmcQfKbCoB4kWqRZ1paJTANrd3zryiH92gFSk2wqNuMcXqQE8yR",
  "key28": "4yiwAS9AKTZYmTPTfe1TyzNEByRADaYktq8x34yQF3s5ZoBzrKiXGvJd3cdCYjp1s7X5KFZh7njfNJ9uLWSVznka",
  "key29": "34vN8RmfMSL3976AbA1kqUUWHruCRqRTURJ86wMip9wyMnDJcybGYioku7ZkyMNXa3jg1N2eJqQtt4QALLEYHghn",
  "key30": "5WbomniKAPEgwCTmhdWJ4pfCk98w5e5WS16dZxhgvYfi2VgYf91qrKwr2UZrSz9P87wGzLi3Tjvvc3Yn8x7W1X3z",
  "key31": "4dX2XbFe4WDiZ8CZ1SFmRoW2fCrS4QUehVH7zhcS7Tr6WcFozv9VHYNdcgTSccjWMdqYVffsc6EXRuaesVzzGoQ6",
  "key32": "8n9Lccw3aVNhGhz4pCvZKR7N6K2AEoMGb7fCcM2YtLgmkjC8TtfnH4z5v4tJdgQDG6GLB5qPcLVhehvErk4k5D3",
  "key33": "5cjXfFmrQrT6G9kAuQK1MBoPVMGoJb6FuYkmE6ybNDbhrKa7Ayo7EnGqYV3Ejj84vMeTtPsmVJRkkHHcqh3Y9PUj",
  "key34": "3xafWd7yuYg8PPeKW4jyvQcXLLYmpfiPszShWCkwmVC5MghRsetMTyN9ZNwHKfJN6xe92NfEU5GwmhoY1fqU89T3",
  "key35": "h4XMUATmcrpMxjMWRSvyt7SrAUy7U512rt3g38SCVCXc5vu5XuMLsrP7EL4T1vJzdXo2BsibWVMejFTde135TGn",
  "key36": "3eP7unKLbbUKVhJn7xFBXtr2oBRsG5HdYR4P1jTzWY59ofYTqRvodMLPT6j3DZRSYSeKELzcuZzbf19HNq1uCfXL",
  "key37": "67Fr29c6hPBKmLiCxS9CBb5GTrH644Zte5LF6Ja6S5SVER6tbupgYwHz7qpmTcGJ1eX3j7euv9Ld3NovHRPkWNf8",
  "key38": "3Uc5Vyevk5spwmEDuF5nVQmXBm9aQnq2dByJ7dJSboxNQ2ZSYhDMqCCdeYjmwLYWzQbWYHobLyBfWU2rJoVYqdGD",
  "key39": "zCRRh5bLaBviFzGNufMjaMVn8R6UzLZxhZETaCwhQ6q4Thk7xyCECu4NTdY8HzDgMGiRGafxPkMrUqixB2vm7nP",
  "key40": "2DtSvMzDJG3EC72AkmXJwtg1oi3BM3Nd1PfUCrjwGpZdsbEnpRQDSewUvevZMtQkjZ7F9JZvXTG5tJQUxDbqRDVi",
  "key41": "3mgMy4Ncu1M1n5u2SdMQGXiDU6vLSwyzf2V4usVSTV2EwzpxSt9p4afGjTNd2ScyY2GqjEwSScYwDiSxvzvJi2on"
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
