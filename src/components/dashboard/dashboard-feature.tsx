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
    "21DSEJunQpdc2iEfd9V3AcT1kWa68eofynAh6rULbM2uzuhBZmLfzYitJkiqD6UufBB6LLtY9i7v2ypQXSZcmcuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHkLgdLD86xebD4gNkpsBSeUsmfmnvdSXjKtdHhezfRuPJahChRsDJp2nJzCH2C6m581kvXDvoU1DAaFitcpTsH",
  "key1": "5JwNqBvjrApsbJNkL7VMKQ7ophnWrf8RXogAZ7swL3Eg1GCtdauLGMJdWfrhggnVT8aWUyZGGZGePUCvii4av9k4",
  "key2": "3ytKr9qhvgNJ8Ymfkj1NcVDT9ypFEmwwYy8Nz4t4Ppy5xW1cre93Ve7yGxE5FG8Evafw9JStayxToe5FBpstzUVE",
  "key3": "dSp8MTtKNVKVc8uAxA1CR2zS7nLa1DLygCQ2AHpiaFCocsMW5xHqMQ6Px1ZiCtoMsFUfZDj9y9tB5UL8CzFxvER",
  "key4": "2EuZNXManYTwWvw1qSezqFRyeq5h7LvRUehEt3uwuXKqdcD3kn9HqxEajSarjLqra2LtY3BWNCNrkXeEqZJdLcF7",
  "key5": "cHbtdJBRnYKSxL7nJJm73He8d5p2ZJDL9CrLy6DJ71nPjmjxheMzubfdfNee2Gzs9biPrxj1AhyxqoySCJXZwMf",
  "key6": "2uSDzGTSyWrPPhbTjLbqTcD3jf279v74ZT2DsV74eGMz6BNvge1BVBxtncmLSspfJSDhLDhTCNRXeG62epMf6vuQ",
  "key7": "4yTQ9C2xSKBdx9hCi4A6rZhPGHAyKmQHDV73f6acyUxd8m7muPNNQdDqjJu57F99YjfFZ4cmtkcPvL2zv1aa1Dsq",
  "key8": "4z9RmjkwYDaZcRGaZihULs3qsnzhC1JeZSGgKFVEmwvtorh41KwRGTmVMyyRi5VhqS4q4erPch7Cy3yFmp7BaFSu",
  "key9": "3Sh8nsthSi5Zr7vCMMbydZ3RpVLRJSTkrSoc1rmCSR9qMvzHihTsoAFHa7Laef2YeBAwDWSdEXX8psezJrFvo6JB",
  "key10": "2C4QtC42kM8DVu5SrcrYTdGyNxoWEskD4bRPCsSqHJDpFHEM3ECMdWj2PKrBB3ZFi8kq18JaSVfZDBVvPfzjccYU",
  "key11": "2q1iiCVqHT75vwsSV3no3pKYe1zdkwHNvBHLEWmQAMPEZiT16Gzv4FKodXVUd4Hw5JCT2aYRgAg27inDHdVBTT76",
  "key12": "Tbgg8YRCFBXfSECBB5uAYAK2aR3vyEb8K3mN93zJa54VoPDJ8AKgbxpjfwZ2N5Y5DqUVYgMxGGSXwhg6FXymN1Q",
  "key13": "2xF2rVccBun2Jya6p15zyWYRhmmj4HR6wF3mao99F33M9wX3TS5TneAj4DZkMmnJejoa6J3yZiNG7uR18rszi6ZF",
  "key14": "3Wc3DtJQsvTaqoFJciWcUpsK3Vic9aEKxT8pgGiZoKUuscaBCvdx9jFMDT8SrPCv4GKfgkQQKWoMEUCifKrwmHKj",
  "key15": "36bVFRnSNu4Nv4KYrXff2U25stnNoULdcpXmwgF4gR7Qk2TMSEC9JnzEdyYkvbWdYaExtCRmswnqqTFoYg1RVukz",
  "key16": "4PSMMuyRrnojUQcsqdpjNumzXp2sGRoTxisLDXi9BYRBhcnA5GhBnXFLrKQnn4kks4w33gue1ygfXXqfwn8jWbjU",
  "key17": "4JN8p9TNVgWUgwP8Js3qJH1o1xAp43reXfwkU3dfWMU62TaCoSGmdQ2gnjs54ak8QtqF3CJCgaEkNatzxapiszZn",
  "key18": "JzRJWPcY9wZGtEhtKA1GEYxZfJGevHSG2x7rYc1u8i9LNGy8QSpyeL2NzHVovHezj3LzKov6WApQ3gjWFAqZXDD",
  "key19": "5wym1aze58WZG2pSCtXsm6HcUFCuCymMEkTpvcMJausZ2BJ5yCXbtoqbSjcbU7Z2jnhrQg5vjsCVsrNGhsT46us5",
  "key20": "2WKcGuRgoXamuufiR5A3QB2K3pZmzmytoA8ZyrFDDuC6fCDMuQoCrBXMSJC9xD3YmKidzLkM3JMj4HEvESR1msdU",
  "key21": "354WiGcZ5D7ezirvqQMDV7r7NCXqrKkMdviiV5i1Hzyb3CEcJUWXf1ZKC1x4TtrW99KbFHGyRxMW3rzAJmvT63Uk",
  "key22": "2SQ5X1kkjAPQVpB7ziS1sFtjvVeKstbZ1raPXXf1dwSdXVmhuXrhmC3WW9ZQDjWzQggxCFhnt9EQ6un2kQnbXLm6",
  "key23": "3jWHmbbwESi6mYVZDqmCicoFJ8idoyCYZTH6PR8jXPprvva85ofPbcEoT9L7rLEM1aCYJEhDiD839YgmVGPVpiwv",
  "key24": "yZsHoo1RUJFkS3DKLqtWUXHcuKP6imAMEQNUfkkQeehZuNVrwPvh9M5d3gzdbQdppuxjbpo7R9xNz6TYbpr2V9x",
  "key25": "3WGu9PzndQHrm2zNjWRtBGMqZ78m1rPwkp9EQkf5iMCXnLjW98xPKfXwjE2NbFknxcPLxTbYs8uRBEvRHxLUcUSR",
  "key26": "5AE8qLoewRdsXqFPqMPDtx7q92isbH77A7i9aqZMAPXEYCTpiYhfsgjVvcwNkNAcR13Si8vejxkyrvzJ6WPbbANF",
  "key27": "5T5EtDRKvKKpfrNqRMhxP27qEHvvA23rb782EwAer55Cy1gKkT5B146XGNZNq3iKQCx2Xgq6UaHM4fBrCi31FWNp",
  "key28": "3N23uB3gdaENsYGiRVUs3ScpZoTLZ4s5Ta12PGjNvt2myoUGVis2LhmqscYRTSiFMoAAGcztAJ7833NvYMZ5nnkp",
  "key29": "527mmpB4aSCHh8E3ERtBVHqrubESgFJT8aKh2PVVj35CvUxDaNm1arxoD59fs9k8hmNUAE3hMfbew7jqVdGupKEE",
  "key30": "oQaszJGXbuSq2fLo2HRaP4KQzieTREnomYmyidsmiitMQi4jSTDGZchQoLXU5V8cdAPG5HMk3RStfipyke2GLAC",
  "key31": "2Dep2pMYbDC38Nr8ZjAJTYsmciQbhRyYpsLmo4zmWt8Ptqmv3avK9F15cL2popXvArbNxHbZMH4mze9bbKZxYoSB",
  "key32": "2b4SEMMDA1tedWtNMeVarLDan2geqYpzE6bpGJMauhTy8ChoKSLRt457ihNFtqWcwAUT6GAqx1MBoxGUjwcAGr1Q",
  "key33": "Yjc4ZgRGN1H9DgtaQj8MjEwuk6bJzTgqMPvbtbtLFc9pPDkX7QXDcQqfUXwYqW5ABnmxRMaKh4nYYqpPq4ezmbG",
  "key34": "4C8sNQF2GE4wz6feZa9vNvrnZM6GP6ehj8gjNu2frKyUFeTMhZRfuhcac5XXAubshCPXcCjCTu7YoscUAjmDWwDz",
  "key35": "5EX1SpdzneEfwk7Awvziz29Kpbe2imC2ukrE1t2NdwusALqDtp6CWDTxWkqhoZpm8wk6XCF4zT8sR71GnkhaBfQ5",
  "key36": "4UVZ4724LrLQkarzECLy1J6v4twSGzzdRBD5BMJP4uM1LhodG48nrnsoWURHSqQrgvx4fB5wQcb1ADev9FqCtpud",
  "key37": "5XLCP4pF4SbL46w55qzsxADDhQWwukYEfXHXtEWkJgiBASE3PHCrLa9x7LjT6Djs3BdsiEfpLE3MGm6kRKqBVW2P",
  "key38": "5LofUeCooEaAhTbixCxQGCGqKFavRqPJSm7CYEghsVNEucmfWNu4cQitC8Au2y6ycDs9k6pTymCtCYkqPbifYqhb",
  "key39": "3gG4xyvMy2ETm2TfYXFpmN74Huo3maGABjE5caZF5cwnNgwsRwHRzLuM1u7y29qLLaBnCDg1kqHYJnxjkghscAUx",
  "key40": "AoYq7L5hPR9Hrk9HPWig8gBUyCmfu7MtSTJptNd3ME1o9ZMaT1UHqWTr3upQ1TXkGQdwLVy86gACh87YFD9LxBG",
  "key41": "rKfcEXL52J9t1x2LjFnFHo9ZegQGh7BWxMXD4pBa5pKJRhgwUfFwd7S8owJgztxEuhZPL1HYM2gbkMjReCE4Bsx",
  "key42": "3xMXYptFfVtM99y48o5dRZ4T3B18YtgXX3c2pZcZBoTC2WhoQf5SNn26hCHzX3iuzBcC1fd4FD96jZyLUeQcuP5e",
  "key43": "4wKJoAuAjuNHPHaZSdxcaSDvaXF2r1vyfeBq4ah8f5WzYJ275fJG9v5GuA4RANjKiRWQxxJSvUqh2ue89tQKUr36",
  "key44": "3zSwAu44NFjHXmDzmBQBmxuX99GrpmTvr63qycyWSpGnREm76DLRvv2gs5zxrrUsBi6qMuxZ7RNiUDq4qkYZ8w72"
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
