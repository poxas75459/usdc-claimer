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
    "HCrNGtT3ruTkzEVLuhHVWQJAVzpoKpehe11NEACjdK1u3ofY4WJ7uNHF7GNHQ5ADTGXPrM65Aw7SU953JgL8M27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqGRgw9E1AsBK8EDZuepvCNjJiFtMZ4wp73oKpNT36xppQx9bxeh8PefkgVX7oUFPv9EZg3nJ7qmq5zitftG9aE",
  "key1": "4pZwLe8JLVpurtFvxUZrX8qbgzxXQzYd3DSn3ZJ83pvmaHrqrUZcm9xZQxmmt7jE2fVutRzrbgtf6tTEPiua8iY4",
  "key2": "Du7HWdU95hi1zmDN3Pqnqf2F5MxJdqyq2cz5oGvGj4NGxaZ5B9zQWm2HXgUnXQg9UTvKCafEFxvh7Tvb5WN6jbP",
  "key3": "ABt97HSLG7VWtqnnxzERywsRNMCpBgjihwfr1FwZfPJViCQ9DY2oKiXyBPsgH6PzcShwMvrhcezbTjWqENpHdF9",
  "key4": "WgwgYzGZLb412oEayLPuhWSZHa5jgSGRugWr1zFAXPxkZRiUfzQVzim8Na6iqzkCD9w4xmEuuDfBXQHSsvqw8zE",
  "key5": "35fuFg5SdrPhog1Q6SDPoQtspZJVREvtX1MjgtKcDtaR6bKiKMGL1KYQhtCmv45Vvn4bm4e25mS7fTb2KKezUqa1",
  "key6": "h89zqdFiaWiBMQCdYHJN3au3qG4mU4vinv9JSBMrAhLyZpDJmXFirKesEzn5LX9u7W5sVXFfpJyhtdEM1ZXqYej",
  "key7": "3qae2h4u7qRHkT3EBTXwPr77UTJZZACyVmCzyFjFNstR1Ba6xQ3WE3iJNG86KyMMASFoUn5HvDbVkK9w36DYheFU",
  "key8": "4tZxngXqbcdVtyuk8PNFCMjpvNxwEp8V1bA7kEavsGehbZ5kcci81se5x8Z1TTNfdub5M9hZWtCKUe4NqLVAzjbn",
  "key9": "67CHMa8urwq4xNsdBaE8fb5ptiSDNTngbqXxFTS1WqbNjghv3qusbmGbDrqxEDyzYB9WwEQSvGevyiAmgALs4SPX",
  "key10": "3WCMydA3rYB4546pqonny8A6ei45qb2uCcSwsWKegd93sbx15Ff7aq9pEV9XjAa8Fdhxo8y4ewgg8QPFuBD7dPkL",
  "key11": "5cN7bjTHybFMKmdwxKTHbCHdwpJiq81EKN11iHrMz4krf2169LY9uHmfRSFfNzujEMuDNebWdHtqRnig3UWT9gKA",
  "key12": "3QXyfx3Q1CaerGKHs8jBRwWNk444GTS5VThZsDoN6Y9kWmAD87UfAEFenbFS6KG2uwG6MhbbZo31dbeb3QFGoiaJ",
  "key13": "4xmLC1yg56Dq1KNL5YPtbhk1AXXrPk7VY4mMto7w5PCNAUx4ERDJ51pGF8is5qwDpUhFcMNYNZEPPHo8WPuPygyk",
  "key14": "M448y7rhayPLT9yr9HsZoqzKUmFicfUdFJtDnFwUTjHkfWWLqmNRrJutLzDaD7gjQsXZsZ9ybtqK829W5sy6o3m",
  "key15": "39o4NnGA6ZdU4RN8cHHRFHQs2NH6jFM1m9ZdiVSF9qoD9pMDPrSbZyQD4RRx3ucoCYErMSdw1uD2FtsdC4xEGkrd",
  "key16": "25LtFFEpDukUkv2vanaHNc2RJkV2zTJdx5LTBXaCh4qnuph9HxwxeoQ46BGrNcu7YWyQGdENepGEUyNtcNkcmXgb",
  "key17": "2JKaDDZKF4SY5XT18YoFqcgo3JcrvrDHR5htLH4hCSEe3c3DiqnHtSNGFjoiZkwmVJDXRQpUML2BiVPUSzU2g2a7",
  "key18": "JTWHpKX6KsQBUfQjPj9pKbs8ZPFenjNYXR9f5Z7djFwZSfq1SWrMN5TcLFu9HJV29mPRd9SfASgcQgwbQ4ZxVko",
  "key19": "3EfcJpGRYitZz2J7vHyJmS69jejHSn5buYPCn6SyxSjPdjKZz5nkWXcEzeGZC5PABZm1bsoEhPAUVLmS9Ycem3ni",
  "key20": "1273aP9QEmh1KPCotgiqoqqx3UMAdTNJ9qqyYW96tS1WmTzVkFz3ew2d1uutSpkaaNnh5zu93Z5HyCmre7DHiSGx",
  "key21": "2EPWQ8heur5NYUB4NWK7TBg4oPvNokJoKYFVfTF47DZjpLZ9LSDVewMdmQGkoSjsqHA9frossRQUjpHjoApg5qFa",
  "key22": "4uWwrpMzc6rQTsSns7rcJSZ4ne9n9qU2oMY9Jy9DGR5t8MPLVtcsKHcAwhhHDY9zM51RQfKFWTvmr1Sdbc1RYmhn",
  "key23": "nSXcxp82LHy838FfWpx6ezzQJhyTCgXEk2fGvBWRTf3pq2BRb34BBWYRFYTi11WjwAUt3U4xenfpctL37qXGCYb",
  "key24": "4WxFvcPEKT6b2CsFMZgX6t1GKqJ2TWZUGzfrem98LreUh2ZdTh947L7yYtyTDjFGPXuqYccKC36pwASaiPkgmiFK",
  "key25": "3tZyx1NC5YuY69uFqmRBFfJPuxokwYnfLy5GbaxbAfvEbsmcmjoBCLbFHMTTyAFjstfV8RiYQmq1x1aSZuUhALq4",
  "key26": "4g7AShdLjHCA1M2fTcJFUM7yTsPcQWSmza7KTpP8fUgtpXis6VjFsimmXhUMd3jFsD7NmkmsWTCqJnAfwkZpLosB",
  "key27": "4j8i8RXkTXwadQeHfCUDcuS39X4WSSStXKgSydsADSMNSW7vuMiZiqPvNrDWqkXF7XKZQTYrt4RNeCfpb9w3GN3X",
  "key28": "4BRY78XyZeuGzSHyEbnrzEHeZa1GgDRZBskxGgEhg8qMvEkkoMf2vc8mtsRTCYpma6QFxFXR2SgreMBWqJXwTVtJ",
  "key29": "ZT5iVfpVtTfC3ejvXR4vmtSuVYtnThQAHKJRrgogVTjwWnPVNhPEtztreQgbVUwMvsykjCEjjgqdz4fjH2iB1DB",
  "key30": "3tRP5dCY95U6rqvTQXuivcPZx8jsPri1gMMDyNcmKJV46DmYnb9yWB4zPHsf8iip3w8qcFVvArZ8N84nCEZbRNV6",
  "key31": "9bdSoe7HfMnbedTRdvoJMX6yuC4BxCqvyhPqfSD1x2TWages7Zxvn8cBgpQ1wmbEH78tRWcEydLTqk7jbwFZ4qi",
  "key32": "nFTvPi7jBMqHwBcuowEELsjA8EKi8nHZo6ehPr2uf7rYBEaUCkQkQ6HDmy3uQ2Rah9BeuWjztqJteb1hDZc7Tnr",
  "key33": "32bFev2gfyBS4rrgRcwKcx5qEASA2Prduh5eccpKAurL5Mqki1gnsDbFo1JRjuEARXnLmeBMbPmAYZo6N2kzbFhS",
  "key34": "2VVbabh8yB1bBN7w4ibbKAm714NG56VLNrg45saaGQ7jMyrzh9tiddYEbaURs8ceLCM4yhfh9c5WSUPcV6t2sbb1",
  "key35": "UR7aNktXfXDRDDKcRfUwwUwGaqKZouRnpeGpUXFUSJfQ7ejpdJtqyZxFfTjayiHcviWj2wVstvn7tGexgDT6ZNU",
  "key36": "3twGENX1QVXWNTeSGkWLPE5LHEZdfm5ugMKBhdQ2NHPt2cYjhXZ3wUK12Trnxc3S4KGb8ix415GrDgQ7e7Z2oK7M",
  "key37": "5pwQBJNv8ewrQf7Zxa5d3vqQjJdna4KbF1sdzPSPnfvr7gTPKVtvayfuqywAN4sw1uAz6ExZ2ooVRS8LsfBAtGmd",
  "key38": "5GBvQnQAsCWPTPReup9VbyqHkQdkP9hvnzPdzNCnbztoojupT3NFjTJztVZNG6PefZD4swpGaetamkEtgBsDqRwj",
  "key39": "5KfND33Q841HM4WeVbGaxwSMansDbHTBsXfdsK8pRpjd4i4qeuJiHBBbzw9Fa8frkMFSEJ4qW9wpTrYpYb1T798A",
  "key40": "4acKun3c6NebeYqwWo9k9svCiKiiCqt95LBWtMGDQKbiZeuiB4sGcYivLkeozdYWSuqPDJHFmf9c1dJWPxEabbux",
  "key41": "aHStNMe1YFgfE9XzorzyZH4bdkCbbEdTQGbAjQKYeLz6fqP8M7tpHJfiJtCE4ZoBHBR5FRufDqRrQmXerv6M23f",
  "key42": "2wfg4oWQkhiEFB8kzfNWcy9aVRzakJPyRd7ibBo7rDmMx5egTJZ6EDDb5L3LbGicpWaJC3faigmfhGpozRRh3XbL",
  "key43": "3m585vWmSx9t8S17jCf6hMYRytJdHDzXuF723pXM9ZaKCumc6SyeFsmZwUkHqXjjKuEwnnSEhAkKVpxctUa91Vqt",
  "key44": "ZCMgCmMxCV98svR8ZoUZQe8xLFzmWzx2VEB9D9Jpax13ow9PAhvaHqJ6cYBniHu8HsDSHNPVd4vauox4Z6tLuLa",
  "key45": "2MCUA7U8z6ASsLzTFPRC6Gg3eKm3yLnYm1cj2Ef84vMFwdtok6jb1tDcCYXYUTHB4pRy2A8wSoNZJt5gKhfGCSFf",
  "key46": "4vyDAFvtb4h8NRuvxsdZD6YD4zg7CbHSi8nefVp7wUa8Q2XuRoQz7vZLXwWiPUiRxVFgYLHmNZjAZ6VYge2xA4x8",
  "key47": "5SggUQZJzBEYCFosXuUuRvivzZikaue11uFsP8xD5R9SQbfVRavkVuHBBarXRLXvB4aaF7edJeykpH7tvYrCZKov"
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
