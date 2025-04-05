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
    "2BqQY8NHjvRANA3EukpYBk4J6SVK7LSZeFJBxAuJqdTDmXk7Nv8CasLzJSDnVFGHbBMwzpCVHZXjStM2iQQ2n48x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3CNo6KENrgCVogbWxuqfaaijPs8mKuiDWfsfwYY6CZYSCqee6NwDQvDxKGWu7drm5UZHTFcgkTH3Rk2EigYZmk",
  "key1": "C1P5UVkzUWDV57GVgXayZiX3CR28XYPu9WNocCyfrbd84dB4xCJ8PR1X6oSGDdj8qUVva5adnUCNc7edrgrZ6SF",
  "key2": "2vfMYHNBnLUgZW6hGcLdQM4iNY18EexhsqzRnXmS2V6b8pCPWxjNpL3umGNRxjY1t9sWwmC7rjd5XPYyrRc2b12N",
  "key3": "JXn28teKzUECGSKtRkpFMftS4MYyYBb1ZqSwjVEMr4jkuRzCc5ee96yvdfm6z7Yo9XekuQiBtsQLMuwoUcxKGNr",
  "key4": "359Mr3skCvxtVqmrWU2qv5GgGdHyked6rhF3N9KaYyN7C94bvpY7jdzA4cegU85LTvx1if2kh6a8DWWxSq29UchB",
  "key5": "21WELha6dtvACjUk49fj3uBGfDs9RQwLpKRVKY1HSsYZBpm9V4wp3m7pfttKmYLV1msgRaCUn3hJp8maZ88DjCyY",
  "key6": "e9RKZkcavjSqsquwFi5iVxrpehZnizhgQco6wDLDifXbD5Vsxp2oPEnUBupEUXmDXMLtQMfzXfyBzwryJ9AsHEC",
  "key7": "4uQziii9yqaK6LcsegUzBhTGktF4nTu5xSGmuu3gwmHA49jwLUWi96jQJKrmi27NssvfCuiHQ27p86sWkTxdUhNC",
  "key8": "4qH1qKVARCqMFDgwYRtb6YPBQp6VUbnjguQPoFZQM7k8b74LH8mFKLQRB6YWsLNS3NcFDt8Ndrdt1sqWNWPaRxZ1",
  "key9": "2FJFKQVA8c8TA66wePi2CBNvCXKUXzv4M3yvbc2zPfzya4vC6TrWukEwFHdZdV87EQW39xiZjj7ot7godD5BrHyP",
  "key10": "3oNgAxQbecFMRkt6wGz5iGmWPQnM59pX2TvYhhzMgLTjd3CHNGe6qS5EJsCGRhxozmSCZB3irj7gVxKFtrjkAJFx",
  "key11": "5BB8Sp228Rjh162BwoZcvstGePHiwDf2CnChVMFDQ8L8CcRcDAkV1WPTcUSmU1nvBtnT2LvGko52dvyD4s7RCeZH",
  "key12": "2f9cz1iCobkYaGF2j6p29MoLKrAcXikxLqgwAeySVDE4RH5VgqioyphgVfZdQRtnv8AkprEXDirsnDEct7bMDu8G",
  "key13": "44hWdYP9FCoy8BNVoMA3za1b9Y7Tronh9DX8onQfiKxDwwLUTMXeGXx2XUqToMAyHMuFoJnnmdjxVeBrYGLuVSZX",
  "key14": "4mM8dYeMp58uXXJtJHb3zHxKRMkGNbBJEh1oQHCS6Dy6sQ5Y11Nv7QL9CPPMxcuBFHaUD7TJdQPzsHvTVHpgCAk",
  "key15": "AsgLFza7auH3isMVLvfhjP1CbSV2Y6Yx4G4waExas9rM6F99KVvHp2LnaSk7TEgmDbq8GC6kJstJ3VataVsWomj",
  "key16": "4A17bEj2oVof99PjVgcEX2hU334MDaMKKkq4hniPW7CbsKq3CPBgbMtbumYje7QKpcyLiw8HeRGCm1tTjNmdjzkS",
  "key17": "NwNGEUiLBzMeEPyfVyZtKf6n7SkrJsyLF1AUWCLrkzsMKqQg9SRUdzCxduKtktmC143sY3BLA6rhFyj9LynivkF",
  "key18": "5Kw4ynWkqu2um3qa3FP6nPJXfTcbW9zagHThPWkkxGgNS9JkbxvXQfQZHMmNS5DgbfjzBd2YQrMapcMsx393ZyDJ",
  "key19": "AhmtFpMAtzxeNuEcVN3dm1gsmrgMMEshWaMFBZTcxiT5Ys55sNHwpUSk5fKD7JrbR7c5Y8K3v1FRxvGPCSpqMa4",
  "key20": "gWuB5eSgxDk7mu9jD5rinp1XnppANp1sskUU4jyBvxS63wLCVZCmW3uqnFkAhB9dNt7r49jxStDp79pX3RJ1Sxi",
  "key21": "cFxTuoLnmjZaSs3BFTw9SWkqpA3M3rbvrW2p1114ivg5ckMsnSKmRn62AQpJhVp9cUDE4e4djXhf8ZJhWuCW3oE",
  "key22": "4SKAP3TVKNQ1JSLVR8pHLjFx5nXwiRLgYTVjpH1fsJ7CqiKFpFGBzsdaMphFiV7WwvjDzL8SuuDopczam8CGwWhC",
  "key23": "5tDEkAKhzukciY5rj2tQD7aFWaBLcrC7YFTRQcQpNRdFkaG8o8Dw6PvMgdpTFgVxbHjxdA3TxctpeYLFhGz9QV4F",
  "key24": "3M1k65PRq5rM3SoFVWbA6fvvwf9bA5qEh5TM5NGof1XiLPgnX5cKvJzCcFnyJgHyRVDf3qdXBmSs5tim78UrJtdz",
  "key25": "5icT6wKtYtvE9abJReeuok6veBLW1xmU33AWFWhpFjf2SWNeSCd9w24mWj6DT79C8Dp5KGSthnvogTHinLnfjxLd",
  "key26": "24wQ3BP1bWESRwrH95A8WnunEE4NgxhXRGhdWRrH5K3sxW2KGACk3JzKmbmgwmVPSXniRtVFAP7nAck1Lrmq3puJ",
  "key27": "SWknmc86jpW8UF5qpnatwX36yDbxZhNTGvTqn9oPmA8ybMb6d94tTKvAGJXktdwKpVmnaRApWKQtZs9nGEbndff",
  "key28": "5qUuErS8PLphDoKHMwpJtgGmtdFFuAwmmcDKCF8e1oK496no6P8MPTP55cJ2KoHnjyXdzu6fh1sReF6qA67kU8d",
  "key29": "5wdeYJHPg1zZ33nG33QpuJpiK62pcAi4f8NZGMchMAVHSeGFveYky7W6muTedCErGJWjh1ZncHzzsbsKfb278EwP",
  "key30": "2eyQW6LLUuqHBAUwxkeMJi6sh1FsGPnG2GVzvq2NNJh6LjANpAiPerhpZMRy4NPnoR7rG2LmmKXBCpStaCX6Zobt",
  "key31": "2FDL5TgRW2vSFXQLCoy8rbEhEw5mrjoqB1NZNF5GbSTk5Us37iLh51Fpmm1i3y42jKN84d59DBMrTT13DFgpAF5J",
  "key32": "5vPKyaw4UfCCpmtR92WxP5F9va1jW8yr2a8vJFU2qkZfaL3ENnhgez3Y8ptzYmCmRovf3JQLTZudzJ13BRUQKUad",
  "key33": "3QmPeg7bKoVmamDkqguJGvgYDrVUZdP9HKag4RFfuX4xhPLaX1DjCszw3ukeqPH6E48JVLujbcpBEEqzWGj17qpC",
  "key34": "YRDHqyrq4mbHNcGyTiD5i33y8yoPsM4namA8rFoRK3WDewi8mGZ5C6GzJD5BG7TWdgBdwuVoQwRXytdCczepFqR",
  "key35": "27VwSP2ZDNgrF9HSi2SQTYo3RZgnoMBGJmkVKnMd3ehSgDbQ7RB5T1qKLa7QUQMjpt2mQSnwA5Wp9hSviacZzekG",
  "key36": "5nVw8vsrdLCZFmwYHekjEU26PSvY47pDoZRvJ7DtL8j6HS9FUHVAg1PV717D6xneEXSZCQo8pHyLNkGASo3suDcv",
  "key37": "59hGyMxGmiyTHToEfdAcWzqcCaiYwARvWkmPGraDy7DcUy4AGMwA56N9bF7Gz83RnLsSDm4Eu3ZPUieDC4ZGX6Q7",
  "key38": "5Ci98dtfXsGkdC36bXDvD4yTJMGHXzWU3bRCVrHvzBBabbj2oJ3HWLzkZmHXDLU7ZpHc2SB7KNMWGDmqGqidA8Po",
  "key39": "Ns81a4zZVU4UvjSqQCHexubcFHTKnXa3fh1vYb7NNA3Sd7YWkbPWHzn7YFC57ggJdgziPbVoHwuKMtGSQ2CxHNd",
  "key40": "3NefziT1jeSmWYDE1BkGGG9tLRF92txhFFds4jtN727pDfswPwkM8bEw3i4NZD4Q6kvUTqN8f1LJ4CXCmTpKnwPF",
  "key41": "45G47hsfEK98ewzc7pXXW1JKLhhCcLL5CxrCeUSWsufcWgNCHxYNrk7wdQad2Wbvd9RuvUwFxXTgP1zRfRhr6kMv",
  "key42": "3kBeyMSx1q2aTkUyHVk8Zn1EsQqiNA1dhQifn5uik17EjquTSuf32f48YD8q2wiFPwmBczUoRCSnBNbfvTWfH57R",
  "key43": "65khMeSxJKwJc2XBa1tEdDeENiTzNhQxziJWWEfwHJHSEWNjyi66xAKG5Ximy2W72577wVVHz8YtFpdwpb84yir6",
  "key44": "muKMZi9NZpRXh5M1Zc3aeKEf95jY42xHAaSjSmshBkDEuAxjUVSBWgnBgBeMrkvnrs6WrLEAB41jNVwfz2r2K1j",
  "key45": "5BTGnCh49SJjnWBmUKhB5jJfR2RMBrdWQW9ZEdj67YzHLhUwu8KWb5aQindBPos1vGNJoPgvA6ESQzZxqfAKj9UV",
  "key46": "3GTKacRUAB1WxzKxPf9ZNdctNRSrcUeJU3tGBfKtPV2rjN4FJ4GVMkMHo9EinfJhiHbyfSMn7RQkfeqiEaqYgUfJ",
  "key47": "5kpUgpfFiGeiR1GgyrPSmPsH9ydbyfNFvhFuKRv7JQhdp1su58rg5ur3ZKCsFAMZqq13qUdVtkLtZ3FLLLnPNoZf",
  "key48": "3ktYBk2fBWq9cNytyMF5JyBzHNjNnUtWgiJLX1WME24hygLAR73n1vs28sJEzWDbfmujMHGJSJLoVu9VjRugM81z",
  "key49": "3y63BA5VKvahWQAQEHSmRQYNMSbq2Ux9TFyZrNog8WnstxBbLcKAZKMVhFuTACtXoFqw5gdNT5SAYQpQmK7B5yF9"
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
