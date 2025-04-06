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
    "4C4gWmwhmR3CZGxyXsXeCiqPA1p71Z4EZiYHZe2XkpJrQxCybZBiHsGanKTE6utptVLY1rWnNvjceXumRZLzLnMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KKdiA2MJpVtRxPhFkoBL1g1GmLE39QLcv6AbqHJLxC28FKJvSYL2j2w37jnfbvQFz4cMCSA8uoEL15Y4y3oAKaT",
  "key1": "5Ht6MiHeefYQFyW4mpixjLoJg86Y4DZeM9usAuaL4gzEKMpckGFEv8y5P3GNE27yLfGQzpjDkVDM3ENR6pEH5j3p",
  "key2": "5ebhzheofeK4kYDtEagvyeunQSBkFyvxci9gKL5RNp7Yj1ZcrZoaJiBQ914YhRrXjWytQ6nvBAFpvDnjtPKxDPrR",
  "key3": "3qnV1Y8ftmeik2stmu3NCtpShGVt2pzhoec7YTW6JoexE9D9bB5FnYNQFu8XDGeSRo7SFMVG5HHdRVxuwBJmh6sR",
  "key4": "2fefw81L4EPVn9HziLYPethewaUHssQJ6CuBkdqBDSgPUY5TkNwVvMNKKDiNqRrepNGr7ema5G58e2YZQ973jAsF",
  "key5": "XbSRgjWVqkFHBjoi6MsountgwpBe6hjcnBv1MNXbByedT4MXS1Q8dQkFSWpwdVbuKyjn8yh8JJxX6w4GJ8Qyhra",
  "key6": "4fizEA1JNXp51v8mwUvwLVi2cF7H2MkqFeNoB9WhKXqRgZ5EuEpgEksqPdL5Whvda2EDRKXYQVxj5kpuk9LReAXv",
  "key7": "5ib8z2HBc64i6srofSFyjAykJVqYam7EGa4VD2o7iFZ238vUqeFq3uypfj7owW6czAAquQMTa69vsTvpxK5RRyaS",
  "key8": "2vm1fXa1kXRHCuPyiyVDXX53tkuQa6EVpoLi73MLAHpZk3u9AxB8NBUsctUk2fpd2Tnc4RTpjkGSgm1qJU4RbZRq",
  "key9": "2ruxkjBKJWhZxPtJeTkVCRaxrP51mDq9BrvPcrLLqMfC6kpZMYozz6RBi6CL5q9qxBo9eWLa954NcQg95WepCS6u",
  "key10": "58nZXkqtKKKvj5iZ4CzLd7dwf9URpFAzH1S8PbbgNy6fas6eWse1KucaHAsuG3aryydkAwfGr47AHG2Q1RtjoyQj",
  "key11": "5x6dTmGN7V8JovASkEf6DMwB7UCwe6CS81cBjpzQYN3xfrBcdgfSxnHc1DkKdRKfaupJmPFs6rhUpyix8yq1hzo7",
  "key12": "4oSm2ospR5HLUCwyVwyEzsY9it5EZdPfjsAkNjBPHmXwgSUEoiVq6qnsQxCrhSjKCL8U3hjcRgnjfDW3xtW9HTc2",
  "key13": "27jPZAnLYjKZn8QWqmnngKnHhTBs9r18DmqCWcimrq4GzsEsPVTWeZq44ErwRRstyWry4aXN6VNrKcyg3jDPi9Pc",
  "key14": "2j72VKSX4HoWSMTkHyYfrRvZ5DA1smDS3gKNZ72cngVPNsyku1JbpWk7LM8edNcUgzJ6qXJDrfaYMc1k6Jnqc4t8",
  "key15": "riSPn3qisKPG16GfJHyitVETEAPXDQneqf21rYnx4SNzGcAVSbeRdsiJ5eqZZTkitaq7wGVUgaFv2mw52AR2NCU",
  "key16": "4RX7ZeBHib8h1yhaJGXvBrgmxTp3hT9pZca7Jd6x5QNEQt2pUmbTdedfaeZzuno5dG56cqTxmFRvFFmGHcbrFjB1",
  "key17": "4PLFsCdkveyywLHZEPyuNjj9KccnLXtKdA7SatRDJ5ZyW1vxD7cKeHrdodsqnwRrDMZyJhaBbc1JtX8GypbQMdSk",
  "key18": "yxgTT2fbAAG1uTMN5ahazjqJTfsc9aRJWst3Tbq78zGhNU8y1H9h9kVms8XKn6okV46d2e4UJtbMoMGRMiqoY6n",
  "key19": "33WFBs3zBg3xutxczwxSvcHgGg1vGpvpCshhV2cYAAbgw3hNw7HrJnrr3vPzMwCHH7UEiwu84oq2nWZNdaGbUcdL",
  "key20": "5PHhJEvQ4ugvRBSgpiRLEVDf8vVATaR7BVVgpPsGRKXxLJ9bWSWspF1F3CqKzzWNzUeggEw7QCt1bws9VLdedbZh",
  "key21": "3wTmbZ1BQKU6duCGH7pqji1N3kBKWfQp5Bv2cDuom5nKbZHoKpzyxkuoEwVPtZmRHhPEYhcgNLX9cmKdfQs59QNh",
  "key22": "T6CxqJndYWDkuUdY3rbfrYa19sGNqzfsrJE24VAi6eQTC3RWmMdbaatM9iiqWW3ZnN8GDRrfFg2wXxS4ZS7v96r",
  "key23": "3m5LPv4S1WDjeW8zyF5A1gcfDP3ssW5LZWMax3zPUnYktvMe443U6Jrchf3DneRAeegdarnswfVohpv7WGgJPmKR",
  "key24": "26L3cGNYAaYXAzyx2CKFvc8qwZVF7sDSLCUGyEAAKqJM3MbwVv3UzYLeYsQqqQwZzsiStrKeaxhJWyeZSXtUA3Co",
  "key25": "V83f3FJuKcSCJn3PFYjL3v7CT3qeNqHiPbnU49p7EERswwYP3u52neixRk2fGHKS9fiFioPJEQbBbsrzEFuyCyx",
  "key26": "4fujiaLiowAeYccEEirb918T1UbhKA7wHwMcEbEsRnTm26JFYjeyygY8uBhzbxETpvB9J9HKjnCTLMe5qQz2BPo1",
  "key27": "2Pbxu4QrekpQfGN2sSsmyPsRfKHWwXpdLiEYo6Qu19yQAXrVvmjmNR4VfxTtVDCAvXxtykmbR63EVFfJLNGyx6SZ",
  "key28": "2tnQYZDcNwEfbpdcNXf7A62i6ER2RBFETZSU3geKNYtvQfjaemF27DoCXWWYCjAQTsH6mzEPSmZfMA5LVVnhWWzv",
  "key29": "4zzTUmV7KFr7jJhjJHDj6fqeNAjhHhcK9yQQPbjb4fVov7c7ZzBcPVd2YE4WvpuxRnTf6Smtbk8A5ESiQPXhmTuZ",
  "key30": "3XMc7xBcMaU4nPx7x97ZXtHQZ3ctLWgKNEVUURBdXfwcuK9LrtrgVfzEs16XwKfmCicVDF9M6cLgUjD7VrMtPmah",
  "key31": "2giTMFaVYZKFfSfq8cCiYi8tG8uP7BezTG2C3iQJ8sgUFpeQDegjXdXPdLxXDnZ4FzK5C8dV9p8yTWSnzY9LytyR",
  "key32": "5EtjmPw3MczFcTCqYZq128Ze9QQMedXZDpxhUokoiQ3pZde2x5uV1UATeSesxJXimvtfqvtvDiPMfWeDpx9icngR",
  "key33": "5dywBCPBu4i7j82kqqXkqmrL6bpnnyjLcbhFfmwtexHJErSKN7S3RiTHCWYSJs19dPELGJSbwyX5oNXEA3D1D5dt",
  "key34": "ZMd5hHq9SXC7g8j8remDWBAqt4GjocenNeDLetz7iovhjGkdaKRv47bBYPdKg3rFkdnCQaedr6xxKgC4rjjr2w2",
  "key35": "3GiBammdiKVmJpKj7GDGJtaG5R2p5BJErRB6ExcqYxEYYLcF6SFPa4KGqpw9y3UAdrzaQPBsCo3mn88MDEKuaVoZ",
  "key36": "HaNEw2UXiysXHVHhX7weJ5yHeibsEs5nbZ5vR7212BnV5XNvjJ4HRmJbhGd8HsxgLc8bxntEVtNxxHHoEx9Jc6X",
  "key37": "2iCawL5hK8DnTNhqzonSSy1hsWKsRxbqhqmtZfp6WztnyimTpXYAF5YVnf6jsBLKuFHq21Fk3TYNGwbgfTWcXdxZ",
  "key38": "2zuVQwEm2PqR3GWkaRE24BHV3MT7jpSCaHZ13pEbH8iBbjaseLSgNTDg332MTYBgk9MxKBLLftRK9tazcggmvU3V",
  "key39": "2EeNcWyWydcEbaK9EKysB12raUu3QhWJZ23Nxqmn7Cgej6cN5yeQFJTHpSCwk7DrQDhbetQCxQcrrGHSPnqYxLgF",
  "key40": "XuiLYTGaNpXZABMMt34SkrGQ2Mbgv3azrKQkQVnn6PpX4qnCcNpernAFwyf6RNkmyjUYTSUSugvKRQhoHygEtSG",
  "key41": "4tJVnUEWiLibghRiBc2A42Qz9oQHgAdnLrh32i5jpCRiZLgGz5WneYgGH6XBKCfrDuK75Zz9FCLFzqKLxHnnTVmp",
  "key42": "5FcW1VL8KpHQFUsYNNWeCYENLtF5ASqdo6XYfSDNzWBwbE1g1Qn9p34v7ia99FRzJK9LhKApqadTroE3icJUxL9n",
  "key43": "4Zj4aJcVRTUt5kDVCGabb1f8sATFQjDx9NZYnxKDqUJv9JH26A8uvitDtyKuZNz6LaiWZ45E7ZVHHZFE93Z9fp5X",
  "key44": "5yUDMgCVgmJ22mmAZx56AWp25wqauoVhXRgCoL7cc9eHauE3r2a2EvskySPuakyqZMGVrGnpfuTNSW8wYHXPtQnZ",
  "key45": "4v2oin6HWdV9ci7QgnHZLkSuvj79mYKAz5AygS8E6FRBGCwUaotwBzDBie7qpwCfboogxa3JQcNonJxKSHBnX6Jk"
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
