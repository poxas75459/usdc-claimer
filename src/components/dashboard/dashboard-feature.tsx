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
    "38BiPPDRkthvpxtVgsEFNo5QvQSAmm8CAsPNvorLtV7TuXbGna9QEvH4wf6CRp9RTeksrCcNtThWnVjPraWw4RAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SRoRM9RahHVeDZAEoubrW1JJVzg5SjgppgNWFgySBuktbPeBKgiuM1qCAwa9vUCz7dD61gvbhsGNycbdPoonbH5",
  "key1": "3uaS7ZkCRmhsrrV4QySrSn9VpV2VCm6Md8MhZWxNC1V1hRUZX2VQGM3zF4u2952PeyVhwipNHLwagv44547Uzqr8",
  "key2": "oyK6h8j7mcauuwWiUUnCoscnaGrEriyr2SFFZoaNUCJN85SYhYbnPYLTqb3PdjCqk8WVdxZmQVQELrwr7gYTqYL",
  "key3": "2UD8nzhRkG4CMy8cvHysj4mG4bgmyKWFsuQ3JYwTvz6vKUQWCVowgyKrKWNTB1TAeftkndYHgZ8XzqAmjWJ6Wktn",
  "key4": "5JYLoWHk5tdzh92KVWxG2GNKigNHp7u7DhBxyPBk3PAcu5quKWsZ86YMa54k4GopwLpaUsKgcSaEpbCgiXpSE2qt",
  "key5": "2YAu5DzXc3zTF3LCT4hGM2FieM8vNJK3o2Zmhy8cGsguUg1eGEU4A7pTGC35ywFgH4xq4QGudTVZgEcWyUb2QT36",
  "key6": "4wdyZLtLYkrH37gtTJSXSyqJYAEd64aXs8X7fDVFJKrdRcMYusipnTjZSRbuh9ue8wjAP8RCzvNkFYHkGzMG2fND",
  "key7": "5NACh2mDk56AZwSTLAJqq3sWam3Kh2KCxc6w4cGrF4AzyinNGFVaE3UV4uBvQgnN3hs1171o7DoxHweXRLttSDeG",
  "key8": "3AwVTooxK4JcfTkWJMXXjj3ARgdTP4PXnSRfjW2d72pAgaspXTMXDhRq3VFnSBJtHoRfiqa4rweo8XxDFhJM9P4z",
  "key9": "2MPV39RqGu7cxiVCCm1uDQbHp9XTn488tWwXodDyQ1zJRCB3EfF1NwiD4MqR6QUbs3q5XYNdFk1aQLNQRSratqdr",
  "key10": "BwLVpavKJ41zQ5xNhofznrkbiKcEcT33ZbETHheSNGYzoHp7m1Rv8UiEonmx8KHExvyC3sys1qER1EvRFtXSBMz",
  "key11": "3fE9CqNZQXrdafwh8mUeVNxt7mEDaM7dUspD4rJSLEdPDKFXoA7huozXGrXcqe9BQpHyb1tZGNhow9i5naW9d2CR",
  "key12": "2LiYsHxwNB3XeAQjGqVog4Z3hEerBwWh1yTeqF9QmoPTeKcjf9573qPuAgWmG17WkazyshJdgMH6sTfnj7osgi9z",
  "key13": "4jqmUaCBntwwACMZJupMLXNGEZhrnq1Wbh8W8CdhLJdHiewBpM2cb7M68MfQcsAiCLGpaMXEU4ybuH7fdGVcWZhH",
  "key14": "3odXGRYxQ9GVvAGa8WZSHtiJPn6yGdydnMr4cKpmEw8rskQSSjN4jnxgTxehUxQyRY1q9YAWeE2VYmwnwNiwHqzt",
  "key15": "318wpntbq5J7MrbCpBf5ZeFR4oaYsEgkysgEEB8pKnmaEepRmu6eW2aBiNFJVbATqCnUA1cpY8t3n5wnBk5T9L8V",
  "key16": "2PLkYRAnzQ78Q46ZGXdYzGpyTJ8HjNrdtNXUrvhpTRWKyrxeoohQHZMTsBiTLP9Ys3P2eJwxBJ4HqPnJRUYUFmAN",
  "key17": "28uU2S28aE9vVNkzhG8AeQLPCFpdBhbbuqz4sawVdgsHtsDjzsRFp66AvorCx7LDbvz3NFZJUAX1qjywgTwAmXAA",
  "key18": "eBh4kyiHLhRYQVZyyLPSbaGJABEtRsjiWq9f52hoFbK8m889gwWf1bXi2bkobCv1eEYxZTFZL2VaoLenz5XRa2Y",
  "key19": "3jXPL2rhfgySjGVaGmyFSbe8eupaEeg6neAexbjoU8JoEbCHcY132uUBPwNBTp72wdDXNCcZ2QudgRH2JNhrJ94r",
  "key20": "5dNEGwqYMMzR5Q7PB1vE2THtXXxw2aqV69UeTmpH7uMitdpUMkHsc4DRi8WyZ8CeC4dkKE5PHoDQNsVwCwYjvBow",
  "key21": "57j75jVC3nCjuPf3RK5rGBRExBbLwPYHra8dxeFnKPFJJQ4qfyyrNtJXZKojmxz8rr16WCANgxzxDAxLbZb5Rozi",
  "key22": "5okQctEJmbXTxwNzHvWcAP3CMssTaV72rnjkuqJuT33cH1nYvYgwa7F42YArcrRL44898UZ3ekEgVyxUHaZYBhYG",
  "key23": "bQiB7AqowJjfvvLgxG7j6zoz73KAdqi1Au9Eq2SwGFv3mQxMSYieNdSiYCM1zUgEkRTWF8ukAg4LnmY2th36zRf",
  "key24": "51DGwdUUGkzXzuadqsA7ktBX1Mg6nnkh7ov4ahtP1R6mCfKUfRQVuvqBuyKaaW3VUTHpYaMFkhLLdBESo3RmcA5f",
  "key25": "4R55iBTiV9AG7VvpVemnfXv9B4XpNmxeeTq87KqJHcqnNkHFtg3hGdpsymGrz2L7roVFZ4FAZoWxGoSEpfF7sjwG",
  "key26": "5wu8aWEghZgP6H1L8hARx5CFXqip4mUvDFU62TveqD94iP7PJMsmMjZVoBTQzBQnH2sXdEmggcHJfQqpB7AWRkJi",
  "key27": "f5zfQbiLWfVN41UsHmp17uyhtSw4YQ5xBWJUZF7XBepptHZC8ReTXPMUFGp5qw4eKjCoyVXuexdAL2as1ueC8XQ",
  "key28": "4QpALpUzdw5RQDVjB4aLG6N5yuEVSNHP4n5WWAPqaTpsZpJeBfqGSqvaGC9LTvzKTsuGracKW22kpd1MsGptc5MW",
  "key29": "5iypFXeU8XdmFQojB8SPNCEPLTKycHPQMa17kEq9dW3jwuGZUPf5oK87XMiRbPS9yk7wtmNsd82a3F4rGdH9NTzT",
  "key30": "3JqSMQUbFbYzxkwzw9cdr3tWpioDuoMPHPp9geQZucu271G3kcNT5MqY4rUSMXg2NLgnWhUGLR9PWko7k4GonbMz",
  "key31": "2CEsoLgDpeJXULVxtvcqN37wAMoG4zZ4gg3P6eh6u45E5b4oBLAEUg2SzzGo29CqVTpUzY4LRBU62zYqL6TYqLxz",
  "key32": "2DKBqVeJVH8aKYyYxAKuCMs9oEYPyBtYyE1qKHakLWdxT33fvLo6U2eR4EZJ69hVusCRdq3xyzFUySUn7TpvpfHD",
  "key33": "ajtkfYaJrcvKmoyoi2jPnbVMytCeRRkD3nRuBo1gYPMHfvggg8pFU1KgheTd3rrsZWm7EMVTrKJuahwn7Kwc3He",
  "key34": "5MXVtBnjwS6D8hWw6zY4JJjTSzgVJPsQuhh3KX2xHisETmL1M3u55fR1XAHMXWat8TJjVovcnrWsi7zNSnvZLAtX",
  "key35": "5GfSjNYHSLVqREg1kRJyJXKH1e6M18AUNGapDr63yV9SAGxoH6phnwQUZHJUKspLKoxnKVvwjpPVg2zhC4SfsXjq",
  "key36": "26JDq374XLJPDJwwsXQWivVeFBgD5vb84DjApm9pztw1vKqPFcoMCR8vPQMvZ9fmSQWQ2Zha1ss1EYcr15QDDyHR",
  "key37": "t154ADC73XvndFVvtmFocjnfNxyMf2ZxHDuYei2PKM6UNzsNUxPKU1TvBZEVRAvyBCei7TACRUwJqddgPs3e5k1",
  "key38": "9rRpXi51ssBUPXZ26XbWwBJ58B8vegYsLewUPyRev8aFFUANpbrBFTD4bub921KGmBJHQTAuZbEbA2wzeSbzT5p",
  "key39": "5ycZKWksdwJhet5EmTdQVvw2u2TEALqkXKzzGrY1rBuZW9GqV2PVoe5PrMeT1giV1oCsPYVLbCaZ3CCKitM9H1Tc",
  "key40": "3pJNvXb25VbV2kTctF5MkM9wfT1gdusE5gZijFZV16bv2Btpj7Gue56yaUHmAwzXqgEnnF52qbX61teprFUzpSvM",
  "key41": "536ChtYYfuTwto6Vvp1s9HYdXEKKkPiAEfAumMsKbbMw65PtftxakwQNCTsDZutbvwkkfoHo3QJpcHgxg5uNxFpY",
  "key42": "44zhttnnHiGDuRYhN9eHYTmSUA5w7qszNKW4ZE6gWzUGLKfTm1KdWjj4z6gCH7XbT3rDhxbjhB2EgJ4qD6oXRVTQ",
  "key43": "5ZETmQEPGNGtFH7F61LMwbApd8G4MApd3eLzUuZqh22DvBAbDZ5vztoQpbTNEcWBygBeA727eeMD4WPs57jmYnxA",
  "key44": "NEUC3uAsTywizs7aX2R5wPmubEVNsr6oCvp3JWHF1aYXfUtiNkzktUFSnN3y3Hup7gUrzZ6bkRt7whSCxWeXsfk",
  "key45": "4NW4EgApAxZxU3BokqLGkcueuJsbccGmg7ek8pyu4ZqUwHxNuC5L39uSEDZowz79Uo1swNGxik7p864zymr136Bw",
  "key46": "4vcG4AZbqYb1SLVjtDo2cT834wBni7y42ijLqr4Ty27R9o11Pq2DyKYVtNHmPPrv2U18V6aX497vvcS8zPdFvFFa",
  "key47": "3mVbjP2kWVs8QB9eXKBSx16BeHeGpjQANY4cGvbX8ffJbqJF9qV1GdZJPNV16cHddTUJepfuebuPiu3eNXYpmoxb",
  "key48": "4u65yLr4s4bqXXfVahWV9vjmvuXrNrMshRKmsbBaV6L6vEGE7sSDSghqxtiHH8GkxAAwhzUQ5jf6XGYAuz9WgigQ"
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
