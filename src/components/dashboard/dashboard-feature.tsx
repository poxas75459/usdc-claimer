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
    "24w58MpQRrzS3ojggkjWSxUtxmHMmSTHVUfCYxSXFAgCDGBGbXZ9S9M5Khwf53mdX6Vu53MjtukvWUh85uHduDPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMhvmcPjfmf8V6gmjfJ5rMqi4Kumu84R2z9FzmNrwpEDcFTJpy4EUcHKLW5DietovZDcDGpZ5ThbB2DTxEejmnW",
  "key1": "5fj71gqwGRMwW2Le4g8bAPyf26D5LvhqN2A8XyUY8vJvbd9CGVQSGy2KaQuTXRp89BfMTwgjiWVhxniQwL64xDMv",
  "key2": "2STNM1zj6o47R7dRTQWfy956yCAA83DjvuLBZARNnedTAtuzn8nj5UFn6ynSi1keWoeN6dsYkPWM343Te2sAwuQq",
  "key3": "3iBJohLZ1GQ858ut1nDpDkqmQyH66jRckf8txyrzj1KTgjHG8zVttdA1VV7BpfMeZ58rrMnPV8JaFHepyW88VTnC",
  "key4": "TP65P9uVYPWdj3HrbLUoiWJCtqWxKoS3UK9LBz6bpX7V1BqAbVAYhAdn63Bkp8NCHhAu6H3ALrKZ7V6oixUJiPq",
  "key5": "2MduEJfHQEGsx6MnnqwsvuVuD6GXiWM9iUgNc9EwA7F2Dj86Cp34xQwNjcpaNd6kwjirGSCQEkVFCTumQfCw1Y5k",
  "key6": "3kBF64Fehp2tC7szzHg7vDHtdnL4JEdVYngahJhKSpyvzMGt1VbJ9N8HyKgUCPeyam1r9D1E8hYsQcbZ1EBJ6NRQ",
  "key7": "23uvk7kdzTc6VkPCTJKT67V7A3nfjnj6eD66Q5seAtbd46jXJwQ1FYajfQBrLk6sfnVVMcYrHDS7hwLc315tTPJh",
  "key8": "3yQy31d85RomxwA9KsdhRGHTCqA275BaZpeiDeF7UFkfySJvbjxKSBg5E9WCWBAxd4ZwnGS9CwBscom3Agk4HTGB",
  "key9": "3Ev8DiGRizedTSCpBSCBMjyVPSSSUFrufNQrFJCPEwckPsDpy7SC4YxXxDMV8jtQaxPhsVwDfScRyNcwAuEhE3UG",
  "key10": "2n8zYn53ptVz8vGEjRdUfn6jgBHb1TnsnX3WXKNHz5oMeajNgZ8DAuGwvWkABnKbMkNQBSDhr2kvG2hRUnWve9XM",
  "key11": "4qor8J7FT3ybsgXLvKs4ws3JcadbJyGdXcHKb2Z3qtqX9zusKm7s29st2NnVPR3bHYwGeDDSC16NXBcqAreqv8DC",
  "key12": "5h3JFrKaN6LpkwWXeSxGT6No4xSJd1UTZeqPD4FDWWkHXXo8u4441fDHPyqpoqyfUUp3hfCgerLJCX6ZDJkTgVL5",
  "key13": "3bLpowJdPDeD3x47X3ETNqtZt1K6zky9BVnHC79aEHfERgZEvfNrp3RK98jvCsos6ZCF8avvxNm9XWSFji2pGkgj",
  "key14": "4b4HKbZ7ukj5b5CXxt5us6qoxvnkSJz33DJQgBZrKcZcg3jxKFktQBuMCiCzJtQxMs9xA1mFbUKKbLHyRiMRCUxm",
  "key15": "3Uea7zPCqvv8FCKy7WuLQzAp36Nv1SGbVNxkXzc4mAZ25gCWzYuhHpBEJAhhs2ktHsjFH25eD5kafM2Lpe3HzrLN",
  "key16": "5SrbS1tvxtDgkE2btWprz4zEfLcvX41W4ui6AsyyyV7kch78pafPi9zT1rWX5ekdjB95zCvVnZ5uFGby5XxMkXet",
  "key17": "eSHgnL7ZxccLrK1UaxHfynwkhoKhcFUfyFetSkjnn7vQQsr76eG3XK5BrXfZ2pAG4ypemCTwjcArtWYdHmfax2q",
  "key18": "22QfvFVgEtiXmXGn3hGwjoYpkjVvs3JqHrT23j6kX8FRtPz4tW5bZoWrUossAyQBdzyXn1noay6wzc3JFZ94kLft",
  "key19": "3sm8QCRQPTHZVE9QuX7HE9yhudRtsV6pXL8U63S91QBaU5V8iRfkmweBg3Pcvviy4RqFHP7Kav1XS2RzZ8eA5WLH",
  "key20": "58jbqAHR5M761Bv54hQTveeMZD2PEHqebk1NnYXHxXLVzcakdWXQpBf6EktuqHL5oUfBvQZvh1FUBCEC3rgmAJgx",
  "key21": "3Kb5e9jeoxT5VJdy4NLcbzo249V9x3XyWDByQWxx49bvzjfYr856CjXYH35P21gAdctAs2QsTXrDts6QPL21KQ8s",
  "key22": "3M4R7Bu8dUEHgiPYruJcFmGJh8YofQZMbdpr5zgwT5JBF8M2UrSwKSvwyvp3KJhpaFrD7ykt2u4KwuePn5LTbh2Y",
  "key23": "3fCfCxjNNAaaLraBJfwLJT6ejNmFmkrauxqSPnRL5CrKfwCbYxPKa2AeYrHfbFCbB2Fwc5pZTaEvtbxaE7rHVXQv",
  "key24": "f1X1PdRF38x7p1xHfHo7fe5NsbwQ19KNn7NkcqX8q7un4qQ52wnfPPMWGBfgHe2xn27eMNYy6V2YiLk1AFsk4AZ",
  "key25": "4Y9PRdD7QdH7t6hzSVLf5ZWEJmXh8x3ir37nBhjM7iG4f9TpNqcZoudhKLMxf7gpRrP7MAYASGQEXKmALPG2UNy8",
  "key26": "2mk6WSgxnREcFuxFtiq4iznwRcti6fpfEempxTJ5g4s2vvDtQcvjkZw62kf1y9T1WXpndsyZHLa9yTUjEzyqkaai",
  "key27": "3Xg96SBmtnKw8TVoWfgLE93Rt5akEZGfVHxqcFfyjcNt8zMXKzP4F6FhNEXTyenYoW1dTXA6U9xhC8fS1d4TSvRk",
  "key28": "5KVgDoSrCHHiH4fr46DMuJEtVCjsHXPN5mDVu4edkLTTQefowx8Pp82g96Y9QZbbfeyzvBgByQkcgomVKn4xjzQN",
  "key29": "28ESii2uo8c8W7NELotrfJBcXuhva3rNXHqcNpY5xE6Le3Y3cemUYZfcJc9f2jVvcUqWcFTGgF7fhaeYbeDqan2X",
  "key30": "4AAQf5kWZpzKea58GjVwWX8VPJFZY59Cto84gPGNdUydjGY3DTGHS3jc12b21Nceg7VvaC4L281AKkNny15k9P96",
  "key31": "4DYJ3HBMJjvXWg6scgcrv8mznS6UTt1262vQmvB97uhzJx3JTLWwUXryjKwzbCXnC5LZaWRMddbTrmdXZjof3K5R",
  "key32": "3sbwAywkWMNDJ9ijbZBVh71hhNmHfz2qSfGGN9nt5JeCSaokEAPqY4Z4G7wTgJrVq9rNZptvJzj9Xvimxv5H6YHf",
  "key33": "4cu2krTLh2KkLjiq7TZkTezifKwFfbidte96nmSPsFz4BuCZBzTRuohqAmuLRUjuLTV77ySoHTBY7e7mwZv3ZMJh",
  "key34": "5fq3GNXMaBDCt6dkyNtMqvnvhXZdWQVdZVrLyDonHoUHLDejJtxGhKZpLC3576u8D6cRnkmdHAMVh6Gv5yvreUp2",
  "key35": "6338bJUYaMAf68bpaUMdGzWYhv2cVVFgfRJCoDrQ8qYEHpsj4hXY1szGpYPZUyTH3mGJcVpZju8humfjXA7azckA",
  "key36": "4HD4eH3uy85iiYRnNu7doT9WxeP1KZP99DwZVeGcbuXPKnNH8nA2HPfaTugNUpEZ35P3Xd6h4M1iHqTvA2aoCAar",
  "key37": "2PaxPxb1T4rLwzfYJARxVbr3E34GQhJpKySABENCE8TzsfnCQUihPnnJVRXPzaJ7ALRmfB31gsFwactVf67MdpBP",
  "key38": "3hRLASvQADv1pbRJbSQbufGxGW5y6CunRaGVaEPVWq4eB5xq7T89k48A4B1oGdutifGW1F6PQANUJ5XBcXi3Uzjf",
  "key39": "4nQhKbtv7bBdMQRXwWJX83QzeFxg3CMBZp6jzaFQMPfo7ZxNzXPLTqZ3J8THcf2mWkuycE4CMvQzZQrDhQFyJ2Kz",
  "key40": "3N5wTqrHJhboBx3YLRWMWEaouTpWTPUJf4MhSqvFyWXoKGPzHE24aF115okweFRscv1R6WFFs2PWUvx7wUG8vFZi",
  "key41": "vrd4sqxW9cTgnrvEX7KFiTex7R75fo7Nna2wFc1VvZocfdACATmBRL1U7W9LAQbidgXWNg1UvN1gvHfanivPNtt"
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
