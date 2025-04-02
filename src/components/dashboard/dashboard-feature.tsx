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
    "4NXa7ncSWRYkqJ5PZFs5HiTxndZnFZG12AS6LrdgUcJV37gHuCDjsPG3bNgBzed2Wi5Lw8tULh8Sz8DrFkq5A4vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuSWyFgkR2gQDa6YTLgNyhAZaqrE2G5mAyE7HTuBNcKFGcGr67WGZyNxnh6YZM647PX5jZ9hnYXNoGKzRYn7ikV",
  "key1": "5sh6RaQmKsnBTixo9rm8yfFVCPsVGxyumtGsY2cqzdUewG1tvx6WwVJW38cBz1HCQzZhTBabZe7MyEgW4Gub9zy6",
  "key2": "WQVtrFizUpD5oKj7DB8dwn55u9qoXN6hgHFMZrhjgDkBxZnfNwmY4fdZNSdfWiGLmpYJny9n2XG2iAarCMfwmBS",
  "key3": "2nhsjUimGivGVhQ5NbmuodyFMwY41gURze8zmzkqmGNu4xvY1L48jDV6M9CXiVKvx96pEzCxrzps5NBNrHCe1nJZ",
  "key4": "64JrgMw6UJ2p7hXVE18L3DCB2uB9StfQ1Km5VY6FegEhiDP5gQgAjj2DSez3BJuZj3SQxrMymWP4Kxgty7Y8eRfY",
  "key5": "2jnRqgjuPhm4BgVbkEqHiaFimmZUfRNA1SoW8xwYTBJVyLwV7qMwXtXrzCDgATPXaa4V71FTRjYf65Y6C7nFb7wt",
  "key6": "JUxSPgyhn7wVAVoLwcMeQKR1WvCeg1QueZPmdUHVXLf2vmqvFo5oaUm8nqE3GSnHfmWPPTYDwbh6HhEBqkqs7F7",
  "key7": "48pjuLTNTaJ9RHPxKyxKwB6yPKKYrWyveCFzXuCcYXAYpNyGSL2f7RhZ4d8agxFprc4KApAMJz13D38z1X1LgBgh",
  "key8": "3sdTGSVZaJ6i4jKPc5k4PdjtYHvuuzGidAgzLWcECyFPVB6uRpPpbnoACWUh5cUW1oPwBCceMS4eRRnpHKVaVhC5",
  "key9": "2KwmJ1RRgYhZeHwdVb7yz7sFoq5agW4JM7GvbD5kFK3oX8y7m8FBHtUXEyyPoWZqPK5e51G2Vh6HuCw1NwpaWdyk",
  "key10": "4GthXziYNrAkNFYnDMLoYcopx3U53joy3YfAVNFMXfELR2ph7rtjp8NbDRVAcojEKByENT4NVnYTBkSgVRJdyvqR",
  "key11": "3swYMHxUd199uTvJCTRWexJXS8eCSAtxqrWFu5U8dgD9Phgte6EC4BgtFeD3HFdhb1WWGqBtWuVzWbH2MZB8nzeH",
  "key12": "5beY5s5cNtuFJGh2wwuNjEaj6bmQKp85rUGvYPDfzF85Mey7NachVpKpdBnrZtT4Yutr1MPFCkL9UJoF1aCWx2Bs",
  "key13": "67HCGQwtZzveoux34q4Ye1cGhRGYH8i2rQ6m2mpAjUgcsaHv3mCBGyQoRCg9hCnfMRSizBpVxf6LY4448YGubajR",
  "key14": "5X8B1E7q4D7XAN9VynhPqtgyjFxz4R7VgFnr7AvGE3bS4KRQUxgiNVstgooFXLNgZp8ATaVcSpGxXX3vgMqxTUdM",
  "key15": "5H8KgGXXuC1xrNTEe2giLrnQHsa5dU1nC3oeoSPLtDVLCkzpeBbxXbFxP5kUNRKH2ujWMW7kh35MSeXMxnpHxViQ",
  "key16": "4fCXWAksYoKSmH4f828PAkmGXdcQq2qkLU41zCtU4u5CypxRKPc7Q21wiT6siTyAgkVnt2L3oWi2bp4HFRTf8KD1",
  "key17": "5xbAQhZxYi9Dd8FW1ypWZrFR9gubZ9nc7t8ySBLj7MKPB54tkDWQZJQhj5Ch1HwWE4AWbe2UAGBXRhReA8HHLqqb",
  "key18": "4zwAAQZ91XgXayq6PEDcmwuRA1TkG1AwcXRUfKJP3gZLS4FKKMjmYXUqvDSoaVv6zQAKgYk3dtwxLf2tt5VfPwjd",
  "key19": "5sfCoT64TptPzd45doGwZbfTeLaeiiSThVQaEJawwhLjxbow3wHHGZdJMfCYPSdemrAtiQ1LESWUySMwpzUkmuce",
  "key20": "4bmosZRncYWnPjaZb4BSX5DA7Hq7kysfc6ga867uyMbZcEN8oCPNwZRKkSHx4gocU3QEx49aSJUbccqPCUbn8yR5",
  "key21": "4ZWCrqpvkw9vkJVyzknXGPLPmxYSoJ8rDntkc4Qts4DRG7VXKyQmVxA5a6GPUg3aJbctRy2gRMcBiyyv3e9wkiBV",
  "key22": "UZq1CnpEZohNgzzNxvkddhdfVJEchBoBAyqTm9d11cCQkqMoEEJAuwT7BYTcekb4QxtkeJLkuLdiv1GumYuqzP7",
  "key23": "rUE5kFapoHXfzAWBTSP2gftxWg4WU8cjJFBfWgjD2Lcyts9mnNYbfLDtWw9aWxz7FggcyHJHiKkrwrnWWM6K1TX",
  "key24": "4j1YqQWmvzRq53Lwn2YxEU6dYShm7myLmP3cLbfUbofJB5ExmuJ3ZKXXppDy1TpBgPfTQrABW3e6RDSFBXMAC1KY",
  "key25": "5CFWRU8kUbU1JGuiKwro4w1wrUFAhY5EBvE9p8JFCXurUNipFcTvkGM4ddxkL66poBBdvUnhx8F1QPWJmPekQixF",
  "key26": "y35MyYiSP1D1VGfpVX1C5mc4PKwVv7cfXfLuZqzs586NcTDkQFwUPKTCZXYvSiooq5baq4veq4Y1dkaAicsWW1E",
  "key27": "TdjZHXea6CuoyuoRBp9iXYCLNr4yKMrquN2dGXfjREbFeHFJmpJNFcTTfszC8pQF1aks1PhbxnNmwDMPufyLYU9",
  "key28": "4u2FmV9C5Uw6auLMfboQRYxv9AZcdnrrgvgw3o11X97RhYkj4bqEGYWqrtLXQV1u6MSbEoMf3Ji7LL4rjSmX2Xt7",
  "key29": "4SSePusGvGvQpAhJMeYC5DiqKYYtqeCEjnrB3w8bLFqUtbDmgENTR2334NLkdvjBQvzDijWP28FDDVcHm2p6oGG1",
  "key30": "3XqEwVEkWK6hM4Ju5k4uzpenhZKjz7MDzNV6rqPey67vWzDRreGETicPt98L54c7uVQ6EZvTa87SY1ZJjUB9G7HA",
  "key31": "3tknn87zkCfYpqkRZnYuP5x4ZfFnCHPBGswhdTNsFEtD6YW3JmBggndiq1wrUyjniK8tDtm7wE7mCF139gPEErVE",
  "key32": "4vAgZnp5wrbSNiwj79CVcJEEUYbvjej3e36QinMzpSefgACcDyrKfJ7uXJ9RrKdd8n97VmQ4GaqZyLfaE1TUq3Sg",
  "key33": "Q2TTtrpZWaqncfDiL4tGFEFzkypYM1C1XdaXxJWAK1ZE4XVukY8FVuKK3DjpDhcpRMZo9GK1mW2RxKKQpHSFgVR",
  "key34": "2u4cVKpb5nk8ffck6gtL1KXTCWsEcv1rUEbgnNdwcGoLo8C7wyJfewQbXHNXU44p8Fc1Fu4aBWPumkpkPgQYPSK7",
  "key35": "3sSwr2vveTSRyHPtTRtijGv6W2kFe9yUahH65Q7jz2vsCS8mPEQnmEAbUh9RYK44m9YzY9GVJaXkTXQV9xbBXFvc",
  "key36": "3TEjbYoqSwSJSj7akBoDs6rRRWamABw5cEufQufi9GnUKkke1rP9oceCD9wFgEZnoRAgcPevTwRrWDN9m5WaAnFQ",
  "key37": "3BWTAi7zUhS9uihvjDUvp41DjrMNxW4A9wochZ71sap1KnnKk2u5ZihaThpwcojoWdZ16fD9zKmm1j1EN8tPD9Zo",
  "key38": "5FsPb74qvBMoXY7EowDVSMs1sQNPhFC3TxKQ9m1dBxTn8maHb74xh5c9Rkr4w363AZUbgXyTwFS1rxG3HFZr67WX",
  "key39": "eTpkA26uM3Bo2bMsxWTpKAeFNX9dDhfAAbinHeiqC9zo34V5q18ixEmmWhRz997GyaZd1erv39aLmKGG1tnwNpG",
  "key40": "3yd1WzXe7xqyffDhtiJL2QKnpqsP17RV7a1EarZtjmaKeXrkAAUSqA8hLjfXLdaFA3uTYhdba53hCxUhdCEcM5Wt",
  "key41": "44VRpj5Y4ULFeuQxDRsPbbNyYUkt61Vd81EqNQhmFPrfRfkenm9PRfznEgR3U1DHwVED83VzZvfCNzWFaSFZVXEK",
  "key42": "5nQux1GrKxczq7wB9aAKGBJmvsSVscacFoxjT7NVNAPNpdQRnbHQTpDSUfkD6z4mAu6FcXmTDb8EytQtE78WeJF9",
  "key43": "3D1KmeFSxFmqC9yQegwcarvkZy7y7d9uekQ8xcdUUxVP8X9GqJfdDJBsbdM48HgwFvszarNiUWj4Kzh5NVJgHaGu",
  "key44": "4hrncoTZBvaH76bwocJ9ibEQfLYf4BfFtg5VtGZrpbS2paJmPtjJcr56HpTHVsyNQ9FNR19WQxoYjzJpqvTndxN",
  "key45": "5MCpffAaSbz29oFJS24gsALamyuveFJKfW5U5xCJng7av7NQWPx3mNd7cbtZe3mB1GV6esz8ymSziuW4RX3SeCgJ",
  "key46": "4ZodZYYoguXvRs7sSfC13nuqe5ETjAX3nCENAkJD1nt5LqwWeXUXzXpcH2QpTWSScg6PUhhJY8R9VAoVQt8dBodP",
  "key47": "3MC2thJnPmZJJz4bWXFGpacE6rYzvF9qo8s7tXZ9og4MXjqqb6LzUu3DH4HMYckRXjWLSjJp7mNiAQaxMDP9cTiJ"
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
