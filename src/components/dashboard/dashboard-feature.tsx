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
    "4orZUc1buXrpPQjmFZMsAGjA7zCru1VLg3tTWRW5PNvszS6H7cSkAogPXWMhVJfW9Dh2eXoi7Kp9NFraL57JndFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwq19TkPr2DZqM2oKos26ymsypPifckd9PgdWeEFcFu2RMLzChM4EqS4LTP6A1qBhefcPiEisK3CE8ph19F6MFP",
  "key1": "cgG1vYQPAN798wS1gqSpA2ubVM6ao1MN6ntsjtBMvW6mZhj7gqdi8kGTn1dWtavKsscw1yc5uEa4xmFzQMthmWd",
  "key2": "4ZsjVTDd9QcJLAdGhAeP2LDTeYfgJBQpuFsJn7E528ydYwxVLRWERTQbaUwSMjgAZF6fs7xyWzaU6mgKSwjqJo8S",
  "key3": "2g5KCjaJ58QNAWiiXefz4cZDEjGVhYKThDEKzPgMrkVGAQcU98eiqXYNsDrGM5fk5qtEn1Q94Tn75YCumD78ct8L",
  "key4": "2g9sKCfTBVY3sPuHZMPzwcmXi4JrPs7FfCR8VFbwP66UrVJFxpdLACkM1zf6hkUo6e9cyYFfwb41JDE2k1vs6DW7",
  "key5": "2iav3XABzoYHFVrGXgPgLCuMLcmwNKPg7gECVHYCJNpoRxpkzSekzgbpkxiE5Ta1UXjEaJMCxnQWAcy9rPsLrS8B",
  "key6": "5BeW1jDVs3iQ5QUeSfWb3UZmqAFuE6v2sArr5Fa85uNf9YsinccTGYgWiD938hs2DWtJZ4YUb9b4nrPqWeMSGhjY",
  "key7": "ZdTwVkfbkPmWg6VVEAQ1czViaCSaLWAS6gnHbyypbaLTDcYGmau9tBQbhui7LniVf1Jq9gaZb1YiNG2FJqKKtZ3",
  "key8": "ihr5ueouMSqpaG4ENDP71jQMMJxdnBhFfJrp7r1PBKMWv4nggrUkxErJXHKG92791dCHGBeyYnpT4EgXXf2HMEN",
  "key9": "24vomSd4jNB1e4H2M1GLpdu2YJeRPNffn9d89Yc4rBPFvqm1i3bKaAnEGJZNPx1bUov3r4T14gxoTLB9roSDgDYt",
  "key10": "47LLVRrzVVWRgSuCHCHNYMyHmzAZhFcUUP8vDFmJkyKRCi9rN6y5p1q7KqyMMDRY6qEhAxy8QdBHoZgrGVLd8Tvh",
  "key11": "37AsnS1Hyww7tZ5Q6a9ZiDAtaMpoMyY4ZRMzhqBJGyvtCLe7frmU218vgFaArJ6KfMwnxNtPhZWvqZXzzTxqXwfn",
  "key12": "2FFP3TG2vLnuVLR6hh682uZ7wv4cwVYykHDXGkSVxcjd4itdRixLbNxBZtnrxy8MohcWY6ZxAqrZP9hJuJ2F9JFe",
  "key13": "5i7FuDA8KTJiuXym6Jt6Rnxdr7W8BaQj414E853SxhGE1gRv3wvN6Tj5f3rH8AtRZ5hSnbQ6nmGwCqejVmy16wK",
  "key14": "45cyvJhRkHJgcYJcnqct1EhDNLLdeEeu7MQfC4C4dA9rxnHXN2Q88SG6dX5yEx6rzeZzDSBYFkupFbzF6RT76b7y",
  "key15": "3H93ruFYWtmRG8JYwGPviwss1nuT1udd4Dr4CpUWW4nmuojzZ33p1qvmny8VYGMkJ3zQi5FM7BGPhhndApHEDCYk",
  "key16": "5epDB5GWFxV5TSBq3Qg9rLZhUuP1DsPc9kSmH8zPQaR53Lpsme54RyBfXtNJnaiFqqpCQgShRDPcJDf8jaoHAfN4",
  "key17": "4TALWRK6mZ8F26YKvd57UgHfz6MGnh1oyQR74vDAKTqmhyHDrL5P3tdHb1tDECA7thvvEDF7PeiZNZY1b6jY58iw",
  "key18": "294c8suxBRuaaSg35x9WvdnpsYW5PZknAsEW9sBxwpTMcyqqgmSBK48bK8Q7oLgHK9vHPb7RpxkqRqxaiafbFL74",
  "key19": "27rjtKeUirjXs8DNpDJfkjNUMTWmeYxwpS8fPmeRNNz9zi7kvobjsFmtu2f7hZrXQNmiC2cYAMzUfnUiXdmtWxhp",
  "key20": "3madoRnNnevW1DvNntw16JTjbcV5mwWF4gBWS6xJTq7YwL9ubSLX26cVaZED1LX5QWhKnM9Fjh3pM82Tq7GSWUCK",
  "key21": "3Lt4JNMQzUGkFgWMJiXnQpQ2gMaS5rAudfR65mpg5LzEGxmo9qsYDZuBwkdyQqt5q8hxB3f5b7dxbxmXxvqdJhkJ",
  "key22": "44dJ8HaGP1VvAWz2zUM46DNRtJkHdYxZGEAFaqk7f1VWdBgbg3sjTDHrwp9jQuTSRY3uSYmXnQav2bikf9TAHirs",
  "key23": "67p9BQrnnFUYcTdsxXorsJQ2nfdRvGFek2k88y4b4xuz5bUG2JUCNa8EEEfezaYyyuT6aLvUVQAU1Bc9UVrErWrT",
  "key24": "2gFLafA7eVTYs65zJaCmbmczk3ThcPTBi54TtS8mkxQc2qEQs8Mupq752nKxxHHHE92ta4P5bBKb8AqFDmET838W",
  "key25": "25pCAuJrYAHHcMuHup8iHKcrwDKoEeivdTg8JzBjHQNoyoBvnZe5pqz1ByQREPjA9uWn1MoFTJihvB9eZZPrmg9c",
  "key26": "4S4GMKG9ZZQuMVH6f3bSG5uSTT2udLqzTLvEUvxx6nXBXFMiTqkWXdjN5k5bQvTt86QKS5PgoVkoddLp2HowoQB6",
  "key27": "3GZYgThKUKSqoJMubkM7kX89FEaRjsBPva5LKwk2JyhA5A2a1fddGQ1ScPUHTycedctNYCqZsgkSeT4axRuCbvVu",
  "key28": "2vLFFJt9hcK7WhxKcPHiZ3g7YVuL2vT5YjgGL83D8RM6837nN8hNxrTHdnyYBrJodVuH9pK8wYifPsAxJpS6mJz9",
  "key29": "2bL63nB8fZWPfr6XUPpwK5bKJC28mRwxggyM3YMkFfR1RwyGhY492iEKdo7LQtEVMM7X825fTAWLFDagVtEv7yzx",
  "key30": "4rDfXmEMBz72af7ypzjUQJQ8dH658kP4rER61NSsDK8eo1WzVbFPa7c5Gs9cPw7hu5iNXL8r1rrE9ZnkLPcMSb6r",
  "key31": "4BjtCpCP8A5ahwQ7m6k98qDj2GJ9bsjU56VGakCtbE8AphNuz6gP63U2aj3SYGia21d3RtEQPGUcMKzKuVcaDQDE",
  "key32": "5rGkNChZ3AqS9tZ3CqqumBA79eyK2p3tNTJN999JcdXapcUo8kbkq6EWGUQDUUh2VZP3JxvdmGbBKyx58q7kXD1k",
  "key33": "S84oMufqTahQ2wGRExcTtpikfrEXUuGi7kDbDA8jkusDTBxqA96oSSKPNXNBHuv6HzFW6HbzjQFptuZQxrCMdA5",
  "key34": "2pPB2TjcvkkGcH4Afsx3KbmPdvC3pZsuhBcAMbrzZUN94xUXL4vMtGntpD5zZMLnkmVZYbbHH4x99MXWtj5wdUuE",
  "key35": "61XzRRN1cUoeMbHTXCgT6QGkiNRsKFwJPj9NSVHG6aaagLST3rV6LYvKg8hmQjKaUfveEftMHSRKTSbo59EB2DPM",
  "key36": "4oSRcj256xCHgZoMUKwnoJep9Za1eNtqF3Ti7v4wpC2mcE8BUVTXidre52Kp2zoLDYe58z6mBfLRcdxUsTgALKJq",
  "key37": "w1dADzBsjMRoWu76SKfBAJ9r6Y2uqKdGuGDoNmYkxih1ZetSy4hPUQqFRugaNfe3smunRcGj5KnhzjNMe3oXXiG",
  "key38": "4MrdAB4YAhXfarWdxsQqB8JJimAzCZXcV8fbg1e3h9MfNwvKeVMGPrJndPNBNwmnLSLk15Q8Wr1qACS8PiWJnPgD",
  "key39": "2sLGqYwhBDCBrgtH1Bm3SyPmhfBiSNw8fhkUCMyxzZLa5ULgYrXKpwy7T7VipsRDc2ZbBRtBT5CrAsVUeFruRir6",
  "key40": "3PmD8U7rhfMQuz5aDBMHVsFtTgnAfk8BNz57Hn37Ljh6xCCaqCbMfczfhSG8W4k2SdKZzUUfML2zGN9YsnJsHYQA",
  "key41": "3HVDdpGSR2sf2Zq82FFFKBZv3C6NPYrqGRsPmovGKXAQr2qQxuobbYZaDKpLaXrQUvnuah7vKQUqp98immBG2Rhq",
  "key42": "3RWMukDJHKh8eEy2cTLzKJVZKi5QDJxGFt2i6epUUVmhJgmynREd6FEbDK4AfXkrBYXQAaPfgq6HMYePPLHVTnr5",
  "key43": "27ihBCrqQzoam9wFCXySffmBRkkNys839RfHLkjukPrs5NywPczhTjzNeaTZzz3yjabnafzpotSwFfDwuTyGbeDW",
  "key44": "5diTGPyWurz7scuSwv9kfYLo6fEyjaYkF97J8TRPcUYaCtwVfMZKXJJX2f5AGfggcP3JfkxSVptN3rDzF91pQcEa",
  "key45": "3Xn31bcd7w7WFvsZE3J2L5wazsQsxvdUbdicgpEwiyXSjtaYTBU9AeUhKDP33dGvnuW5J9MC3rMUymUHrXpPHCpE",
  "key46": "51Ks9GKs8JzMW5SKLXkizj1rCmi6w3Y3xyGc4vxKopurtnZMaVzyX3N23ZCuAstm5KPjt2H7ekzwSsV43ixXwKgK",
  "key47": "2sfmwTsZMseGKz77kKZb9RxgPx5LVV977C8p5TKe1VC5Y6Pw6G1voMpAvnWnB8Yxv9B637adsbqx6E1R3oWiCSxQ",
  "key48": "5zhszmTQdHqcL1WtDTs67S1fzy2d3TZxtMWWjmpw9zekg3Lg8SxcgFQjJSFZ1SvKniGr25o3Km3vBGJbpr8FZLrs"
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
