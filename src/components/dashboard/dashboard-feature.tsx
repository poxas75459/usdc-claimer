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
    "6KHPhXSwFZNXDz7izhVtk3QhWYqLsAojn4wdRWxcvPbJEP9pPh9NX5pbCXrPgtoqtvrrcDDiJZzYfGQBrwvXYMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qfiTrEBk3m9K8nWva72j3bHMHQNqvd3TXtMsqzGAJcwthZLoSwQ6ycaF7LMX4hS1ujo2SuqyvdVqstbTXoc7HCp",
  "key1": "63xhkdW68BN324utjhSPs1ibbMjNJvaSiRbBsbr9Q3KPV1bMr82xyPi5LLDdVw8n4PzvRGRtbRApFdAc37ni9uJ1",
  "key2": "2mrNkLRjoic3AAe9yiKrMmAu9m2i2fKi5k53fZP53kBewJSfBEjMgMmyCzAH2Ea4XUt8AFuTYnB8cPXzmsK1FmZT",
  "key3": "36xE9X6G4qUC9MgR8c3PLgwbJG63HCYi4Nwn5UgFBccUyrjWqhUNVZ9SMbKgDzHaz18oZYAqMXD8QkokAs42KCRh",
  "key4": "M6s3NprYhjonKAx4jfQUXqm2jrFG124xFrkeubKGJyfDLivGrsCUfMgyq93BRV7UPspjMmwVT3LjXNJ3SSJ5Lxr",
  "key5": "BcdVcg3wrmzmdqNvxLeUa4359hEQGiyUFdHfwoVq2AEU9ET1bAM2WmPuNXNmHKiCnc7s1KAvS99dbgU1qKvzAUo",
  "key6": "3svWVjwcvGhrH1uzBq72DmZbSaBoJEueW6fr8Jvf4vdkX9fu9duB94DJWaM5E1TTreU8jhXSWdXzMUjFg3tfWKxp",
  "key7": "4GKaoRNqRXBZKPkpX7vvc9C72yssLnNp1VG6kT9dmWewYgqXJZMSPJr2mqM11SuJSgCyRF8TSs7AWHhHJHaTQPDZ",
  "key8": "4rsNRcuk8zg4a6b1AWAeUYTocJUPEDC7UgmVUshtEPPT9ccvCvdtCrhm8G3a3m69cP7vZHxwurm5T47BCFjHafRb",
  "key9": "4X59z4cSyDSzkYAjSPUfHiedx2o25gnZGUZWKYNAHoeNvChicGm3sX89Zr5Ps7RmvzgPcVxJNjqLoqmMKe9bTthr",
  "key10": "3fs1fQrW3cyaqzeJ2o91ABT82HWw9dZ7yTXyJ6wDv4ZnykzAf8bXzrSmDEEFZocAsuZZCSRVBy43thmNaVXSRu7N",
  "key11": "4f7HzRnxYU5HyJdQF7BuqAHnTPf8hi8bDdCFJtpNgx9ryT2fJVJAYZysRQ1b42SSmCBDZTARh5WZnGR94Hxv5znM",
  "key12": "4iaK11fVJ9K6CWC9TBWL34T9R6Qefj5UWisdvrSibU6i9aPA6qHu3f2RebCiLAtCyn9hbeX2sL3eFhPgsP5JpovP",
  "key13": "2LqTMedXYDA4G62Pa4gxnkYdC6Ui9xMBbFGKNTr46iEk3xSjks1FGBN6CuhqnhnedJ67LFFhhr25Z1dJ56KktrGT",
  "key14": "22d4t72mS88Nc9XjEy3J3PjBSBouy2sB22xPHsSVEcgPX88hMGbVppSyfwLNbMati7J7MRVGbJyhkgWDDhZ371Za",
  "key15": "3u9YA4xFJJMPS6NQiow1yDDtThyb7KMa9KZKFzMoALpfWa9J7WT2XXxTMeJX9JwqTbsR4QE5LDD7CCZPzxdfyvnS",
  "key16": "5vWSm2Sk6r8p4M4iWrGH8HcYHKjbEiXGSwXQVxr3bCH3Ba4YRAevAk95WYHRm2tgf8jVhfVy7jVKW8snzfP9G9kJ",
  "key17": "QxXSMzNETCBkK3z5ff1RDN5MfCbKHyutPeAts6R2LoAQXCJqUuctt2bMqsWMm4iSYoyuGS5d2kGZfTBEMDeYDK6",
  "key18": "2E7ArnzpgjcioTEkYLw1E3318CDc15tXX5QQYcJhmZkUQnrCgzT4wBfKXgdYdWPDTtKfNnLnwif8MuGTZe2hWjQw",
  "key19": "31mdj55DaUUSafJ68NZg8WDjLe1heVUSzhDUy4gQSU6KtA8TNKmV3CWjH5Pt7FEPDbH4GAKLsLQo2XXjQ61ZHV9C",
  "key20": "5onSdSkwqfvT7gBkQF1gkC7nu9DDsHkhnWUVfk8TzPKud2XvYFMSCc2DSR524ctZHZa4ramMYUVWzyYge9XhyDuD",
  "key21": "2c5xQe7KeDzLHhWWkqnDdTmkZVy6w7YPAFMSM8jaZDdGbem6opHjjXS8cAoWxdUzxJEcTFVsoUaShC1MzTNrKMEe",
  "key22": "a2AEQbMDxY2owHG1U459T5D53nV6aik6YXxeFZfkPJKDogA2Mkq38KfRBXfnbsGzgjaNgNVBRq1cyy5RfTaLJEQ",
  "key23": "4gkD9fqrUAR81dCuWmPW8jnB58VaPe5wnbfiEsm7n5LzE8kgJmjAyRkqz1KR8bnMfpUAwa3s9oxfQeAsexr6YQ6r",
  "key24": "657za92hCEyt8mdcZjAgtjyWCZE5VvcnjrpcEAcerLKixdpLa7kSwJUWWfNrYgsiGQCy3qGn8Q5H5EAqw59ehYRx",
  "key25": "kki73wJXf7fY963VPWAb4CQyiGdriQi6CfygS6VyfkQnm3kfBLHdBNb4dVCvFqtE7VPcqfmj2MbFphSkzLAxbP7",
  "key26": "hhALjoddrKK54jgixEpQbmzS5Y37j9NqJQrdoD3UcGEqeDPB7yogcYFDZg4kRSG9iKLvm7oGnZo5sx7Zf2cTwZJ",
  "key27": "3ehFjoigAxTW6JBmHFRQUM6RZKRgdAcX4J1Pej2vkk1ewVyLXTnjQPbfZCzMmnwDyq3bk6E2yKXB9GjJp1vZzT3k",
  "key28": "3EvfNt7h3iB8P4TZn74KVE8in6B3F73JnryyEvFc5YmBFNSQDgaUs2ncJT5rQKfpr4Lh11FkUStqCdEwNtiXhEjS",
  "key29": "CExwk5V5gWoxRsuei54HTKWFk7tVNQ8ZJeZcZkQAZgZnBe81Z4YftL3Nqt8m4r4kNwGQ7j8ys3J6Xq8McJ1Cthq",
  "key30": "37PWJtGqf1uAKeF84YbnKuxrAT4QFcUs2QpoaFbzcdZvHTR62kQptNpvMQ8FW1Qz4NNjkuTttGzg297hbDnvLYiR",
  "key31": "3PbGA2pWeh6kgpZJEpEwGVG3c2FYrM5myYfNqPixNLEAwwi9ba4ztGLh9Evpdezfes8nvPhR1eWbYZQFUHt9FwHV",
  "key32": "3BVtVYnCvGUyKBisY56EY4NsK6cAqVp4pHb4u7J4nUMmzJkKnoPnjYG5hiHcWWPqLs1L7VgzMBEs7xS25qYYMUgT",
  "key33": "2uPupms6nk2FCZeyZ8L7rRBhiR3wwofjokZocLB4hftH5JxLEc7d9D9HaaLimn97YCfJfegGe8owVmsydivqJFro",
  "key34": "5emYieXjQtXFRhW56GUnjCRvL2Wg2qxWh7AdwvNUb6Mveu97Nsrco5ufGSWbtdzHyZMqmESyoDS5uynBG1Ht7S7h",
  "key35": "266423jaVRxDTnTmowMg1KfG2sQd3QV9MWQpm9r2NgMAjJnuui8oTfzMEGrghRM59MMh18tytDKjfXYdeAbEAMia",
  "key36": "57N3BQpuYqHE27FdkKF41H3fzAyCYY8Dt4QV4wdXwCWqQBZfwEsdMKHMdyq6HBWyHkSBhqCvigXaR4KrCKfka3BW",
  "key37": "24ckX8bVbrLVqrfe41Bt7UkWVdWkMZK4xa5pZ1gcvY72uBzkXjtu4TmxnrPweiSWrwqcJuv2pN3hNWjFBghDvQJ5",
  "key38": "2dBSBGDVKApLSnBTn2RZMAZN64mCdhh1iYrDFWhzGM127K6dEyourJ3uxBCUH8vSrbP3hqy8bejvN4gxLhBYaYvJ",
  "key39": "649qYUVh9hAkdTmea5UfE2S6vuz2hag6sn7zWdDmjzxzkHTmkrrmkYGLDVAyyATGbjxZ6NYwKXgHdcBJf6MZaCSG",
  "key40": "4Rphs7hgDKyGyxRkc9GhyDAwS2NvRLugVCn7toAVa6J3K6bfjJLA2Fde7Vis9qEnLP8LeYUQQmeMrWU1RX5z9Pk6",
  "key41": "6AGAn4AzvJ87R9RRXmWCwJ5b93AsJVoKMMdAFtx5LaA1fUiHPQfxbFzbaDP7JeLGHPxgmcSuRi8zZ35Efzg4Nah",
  "key42": "tBL8sZ3RpGaoF8LiuvH6yz5iu8JUy7sNyjY7ZsewHcDfwbxyjWKC4HAP3dig65XLwZHGfKEoKLAjLABSRTbmktV",
  "key43": "4cwifKSuE1smgdQmoU18dfbcx8Tv9QWV3mVTUHRfJ5ANqpY9wt7T8HaLpKrcWLVrAGqKtwqjsG9FgoeEPDpe4gpn",
  "key44": "mkwabtC29QwGeMPsUrVa9ttpmKsxdKASW2xFEZETtRq6eKpRwsRQ1tbBw1pVxY82tucwKhcDQe7Ny2jGN9cFVJ2",
  "key45": "4ykwuzGiK79YGhjZakJmDH7MAWsiw7VRdeLUpuawTu7wnDNRjgkjCjFd3an3izGKo4TW2C4qwKLjM5sP2p9e1WL5",
  "key46": "5aUFi8SEKWJpEyeZ734UP4KRcG1H1CGJJtFzN2c3HoULv4DqKsoXHHNZQ4tYXP8T3ryNAJKD1cPCre1LnZ5AN2Wg",
  "key47": "3CfkuJB6YsNh1mvN59hxJU6HwCXzpWVrWT4LAkygHaB4iPuhooLh3zyDVeWBiV5U9osVmRwk4f1soJid9C4Pn4Er",
  "key48": "3UNaZo126RHkcJAT2jZmhfpPubwchJj6bSr8tA7LRmRks5KyxvRnepx7tSL41QqSSMcbkQ7a48Arrrc1x3cSP5do"
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
