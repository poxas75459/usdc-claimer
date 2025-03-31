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
    "5CoJsqJUPt8EW66yr6oKsJwe5oUw1HJC5UNNQ9tZAWq7BuQMaqMpSQBMYV9Lyf3TLdPGAKmYdm466QqZMos9sL3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKCj9XfCA7K6VLPd187e9HnKkz53FWJxc2bBeVvJGJJFMt8NQy9cUnJi3SroJrm1jDjw3TEP8HpcRs7qjr55Bk5",
  "key1": "46tEswwMpkq3Kh1FU4ghaHw7aBg84ZL1JPLamFbqWxqqcHReFK5k33TN4aCCBZVE9vWSkoa8AsHhHHGpg2h7pbK4",
  "key2": "61W59XE1YN2tiKgF8mCbxzSiuRWREacPyYRR1BAh1EKQPD6Tg7SnG8e7bigdcnoqD5cuUoGjqwgbnTFjNyr9jPs3",
  "key3": "474QtpKauqFLK198QDfMgahF2c3w84LuMXD95M148CM5K3ZjCn2urhcUFAmsPbXmsiDQ8vDwnPpeoJrsuHHigBHU",
  "key4": "Cgf9Ff2frS3smZnpF1Gur3EokoksbJYKzqbpnCTJmE1DmMqMjbLqr9NYrxfuS9deG9Ey4voBT97N6UkFe5gMmZN",
  "key5": "2HWQW1qRjM65ojNSuoBfC2YsWAYGqTrVVERTQ7JuMqtnf3Qd6pmPbaLYfT89rag9Dy2RNB3EHdctS3A5JKaAJEwD",
  "key6": "L9wpKraJLuKzzU3RaSLmENJk7RAwUaurk6fhswGXDRhAsgeVqmFGWw6q9z6ySCnsyQwy4u7LeEebM6ShR4AZWtz",
  "key7": "676EKcpPuJXj5Lho7YVqJFhFvvchQMQgPkUx7CmpuwZB86jD4R8Eq8odY5u14SC9mvJc1YUirbS2MuontL34juSi",
  "key8": "64hrniVUZNqxLdxeL5ZBWuDzRcsiteWmQ2cXBFpUNJNy5t1i23A5LR1dgZ7Su6jE2gwfczhiVXcmfvNkUnhv5CBZ",
  "key9": "5TAyp1LKjGo1vXKxxnJoXehoPbMm2wMh726Xg2VnmuD1tgkSfHGsLGmm7f67MdxGXsuzFeLGGLUZa4NgMZFaDEL6",
  "key10": "57Hy8Nt8HGqxa3HQAzG9FjKqvn2u2VXAMQ4amwaG88D3WUvwVoN7qStLFRyG8yRidjw9FgLo4Nc6Wwbv3He6zoUx",
  "key11": "2cPgSDR4JpF3Ckx5BQhJWw4r23Qdnj7zuvSLL2zKMkD7fv5rNsDNafP33KZoHC4WiwvoMpStQdrx6F7mHeSk7xVs",
  "key12": "2E3gKBHhLPhESqtK61Ft9bC2rHuVsNrH6ZXxK1MC2c2x5TYLY4WSqJ4pcW2hr3jGsc5AdKnk419qcYurRDmKmkLS",
  "key13": "PxEZKw25bs54511L6p3uVQvHzQW8LVkJUWTdZomvLwjunJj5if9yoscCNc9ZD6CFZzoACDUCtUcTHTALKxRQJeb",
  "key14": "31aftXfPCQxN4m3ULceaz2C6jXoaYFi5EJZK7z7BoC8or5fyZi1q942LHSdudDtcHDeJsZQ22M44Wr8z4VpdTtV4",
  "key15": "5JMq34se5HjZR5wfDC2rL81Qmn6FQMyc4LKeoxaffvtTrcyUMrPtAfHJRGtVRQUaCFmtFV2Tjt5TF5TB8Q3iMyXP",
  "key16": "RHiM9TuiGjiChX6zf5uuvdHj6Q2VeUGNs5Wcwisspx72D5FnrNhxn5Xj35ejkFKfC4Nnnjfi5EsRNYz3gZj2Xbu",
  "key17": "3RECnvStQaXJ3cxxKpsFgrU6YpDrMmLrbTZu5zkgFVTMFCXmM8yR8i6Hcw9K63gz284Jd9wxuijBeL5zTMHXonjt",
  "key18": "YrqGXekRZgsKr3rCdthb81NRZGhqJ98373Vzb2gD9DWqKU4sZNTZkJ4moKhupFBuVqMhULgmVKJcAAW6R1vUBz5",
  "key19": "D6Ut7M1B7E15gxHYmfiY7cVMhHvwPoZkSSWiMoUyH5umafP7JZ6d3iSLMWudEnBUKyb8gKL4QdvFR4PBBvX2L6m",
  "key20": "6LmNND4aFzMuZbQXHakN8kE14cUhWei1rhXQccjpguFePBa21BZ5d3QwViyCCnfL63o41imupi4aMUuGsKZQGPg",
  "key21": "Dn1qXjz7yegVzL5JyNUcWvqd3SRAzKVMdupk3tdg4GSMqqkc56dbnqhcg79GHxTrmYjZDGo2EdksMBw9M8DJUhM",
  "key22": "4YvjaaSugSrjF3pWus7Mk7X7xgQz2C3czFBM7UhH87tLpoCLXS3U1AVBYLXyKGiQFQJkQcwuTifhMNGgNvKkwK9i",
  "key23": "4RvGtGNLWdYJyTG4xVhQ4ntgE8agmYmcJTAgh25bock3no2Ei3RQtibYL9w3Xnb3GEjtGkQSdBuWdfZeweykAwtp",
  "key24": "5U3ucLKEJ23DC8UQMfzLadaAyoDNQuV9sWRnUkejGUQScCfqg1h3NUruJjS6YyZ8RN2ZMW4QRG486TBmzDM9nvjE",
  "key25": "4KvEGa5BrgPrv8S78nBqoyDkZ3G4HiBVmVUMZmHEZLvebLyEJPQ41BBquJcaRPdmgnMBX3rj9bqDtHaXBovu8jz1",
  "key26": "at6eP5Tchi5KXLBWZAN33qQhbYEMtzhmRupjMtGAkoe4Vt8qyJCFebg1QgpUPB5jGn5naH8pxEjqDUW335JWcNS",
  "key27": "5JAq1dvz8HBe7w5oPPAkMP1gv4f1bFNuAZ2oBX9NXiyK6tSBtSMC1rXfx5pkpSJECBq7AUQScNCmnDXpi4dVJmJU",
  "key28": "3MqaEJbeMJX16ZfbwSfzeVqETAGidNWsWVX3SaaFP7L36mmbseiNJXssSArimpv14NSHLeBTJEHYURV26iYTYN93",
  "key29": "3ShsxjKrUtQCb4yYAPV9nvJpob2M5o6TCh4mHqcYuHhvq2dYMnKeA1NyiLR1uNX8WkhrbgTjTspkGmBMzA79UvKR",
  "key30": "5kd7zxzvWns52Sd353ERxSxpPyvXSrBNSXnLg8zNmnygooAWXZNHvweUZTRemGvRMozXEScdHDpSU6Yo45rzDcA3",
  "key31": "2oo4yc7xshvBCMAkNR3zTS4JCFgn5MtPjXKzTeQayxSe1zF5pSNdDim8vQCzpGaDD2N5eM6jq68RQkjE3VGTxmNw",
  "key32": "owVtsmHUYor4fjAqmztJrY2MB4s77VPESRQhjyoCLSho5T9D9ecXGVFR3hxHP11k1R5axRBhiShwFp9TkHLKPyw",
  "key33": "T9GikzEXWRWrB1pzXMakXPAAUgsS2iFcU1Tes1NgQVU15cbAZWtTdHAody7VztzoTb9yKWd6sUZaDHfQnJTZw2g",
  "key34": "pzDN6puJqnK4A988vSk32z9pj4KNSXMrJxzg6xcSpudzMbaZRAZVMtcqCoo6oUM6dJ4WBfs4SNiTj6rYnyVjuAq",
  "key35": "4YgG2RN9UbbHMNoVK4GHG6xiJ3mk4TajrNKHHbFeTtBErMg3wXPuuhDdJmZHQKtRQaT71pQXAne6Gx1A23ijxw9H",
  "key36": "2bdnppUVdUnqC3obJsgVYjB4RszCppDr4HLYsHds63SGjJg4LZa74bcVixoi93QgLFNg7CqGeSR39xvZdYUqPYe6",
  "key37": "3Y4uwh5ofr2Kexw3yhxxZXCsAvHKkuWnQ81n1wrnRY1H9LDvaiwDbArU87nimpTVHGKu86D74ehzY6YN5wrjCSHr",
  "key38": "5W81XpGtAvYq6yHTFibcje9ZCgHS2eRfh2tzZozus3pSbGcwNRGrUS8AkGUYwNPCsHTgfE3BzRiyZCgw5LpAczpp"
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
