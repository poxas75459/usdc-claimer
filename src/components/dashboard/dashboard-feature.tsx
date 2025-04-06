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
    "2twWewZDDYQnYXE8GfmXi49oAAVmAMzQBkMRJB3epWdLfpJLUHruXJv1H3sya6Zt2tT7bntyuWF3MuqTzFaepvcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RgkqVDhHAtTHhipZKJZdWTCCnpbof4PW5EpBS8srtSKMcfkkH134BBzSZn1vY1MH6uVSJzrCoZ2nQaPG86MPWtq",
  "key1": "3C184UyG2G8JUxJyiubq1W1QfTx1wxQoqbcM1wkbnKG12RZpDR3eUc4CwE1LM9Q8byBrB1y7daqUhV1d8bxTvS84",
  "key2": "4pHvDi4C235LKXNRd3XnCfxHueTBPcSo2bvsrumSTaZGW62momzoLJ6QPbPG4o4dF4M7DHxA66JBxgDLe5HobVCy",
  "key3": "4EQsTn15pqXezU9nSPwwBTRMKSrUFVvyRTe1brp3FftRrev4kUDvHRgthE2RiL3gHhVeNnhS9QK4ymcBKUWmyjML",
  "key4": "jNqjWS9BEBVaEcL92QYJh8ZEv95fiJRsTvAsKLUA3LxsBdB4Q3Qayro1nwzstntu9Bto7HWpRZK1QvNqbpn9Gyh",
  "key5": "vdZoPDxvmLo8su8x8RpYMobKxsViLoEyL94W9xLFawfZpGYPke9Lbvm57vikTbFfjja2sSJvzND5owZatgonAKL",
  "key6": "3z1c5tmkjjh4f1HwYkxvQUfQ4oCVR5RaHuiPWwmJ89Mbg6q5fVk6Ed3ihPXEmQoYfsfLr5XudBTEmhTqxfbfbC6x",
  "key7": "5k9piruYvGR3x3bzvX1bFjwN77rDxTpULaWhJ8FNEHENG7gduBf8zRmDMehK72gb7EaBom1gv4XkZ8k5d1EACGUR",
  "key8": "5ivHLsY3J6oyW4ZJGAnAo6aaAKd5GUBYmEoQeZqVB2dvF8c3WZqyvZVGMP917VJ23sGXcCjnqpwqaUoXtWsdVcFC",
  "key9": "4Znoiho3N87myLaUPno2ciFvHxRxCR7kG6qZyFmusbEQz6goHNEBKhmhxkuqSBZVdWDTa9ZGJ6HfmidwSTUwx9a5",
  "key10": "3JT4ytLF7jnQfhASKmgqdbp3AqcdhJVgtC79PeerKaWUdWYDcjWmVT4uJAfPDuPyf8mKZGedhJV55M9aUsqLoh46",
  "key11": "4iTxr1Yu38DY4kspM9k1uEmJcojjWzeiQMm88ZTPxF4wcXuJ6Zh5ngC95wxi1rrENXAzeTQ9JHqQAMV2asfSnCad",
  "key12": "3o5imdyHzgiEQR1AATtwQ2HGW11PykRcybhnHcyMD5Bn6xhgfrSRTxtFDrfqiUan7Vw2M2aFuRZpDipSEu6ewvKC",
  "key13": "gRDFwMKQCzkafyj1HVLSsJyG8zyGzRZdwqzzSnD9thGrj9MjDf5pUGT9kzU6Fd3SHsXMWh5AjH79dNMHMYvwzjv",
  "key14": "5UB8q8WN5T3izJLPjpGz5Kb4pHpiHQ2dktE6QLL56qf1WocijuN7V4CYaWmCY1QpEodVJ5bXn4XepPnWVwGQDqGj",
  "key15": "5NU5gtja3bKuQDRjAeEzXE37aA7YQYwLYjn5cvEjeVZZDDzhWgygYRLkPiTexuLka1RehBNNCcLGQrX4dQiHS4Fk",
  "key16": "2VTAkrVagMnxuDSXxhnyoCyNrP6VKig6wpXfVH8TrFW4BuL2sBq1CSmmS9pNnurznKR58eLNgDsDYDdXtLyad7nw",
  "key17": "5Qy4hKgLxuMKvwh8RNwRmkTXCCEnJVygJaHcpfnxy4RLqAFvo7o3VapSmnA36GU1yFkyhkrWc9EzSyVWzLcMw3R5",
  "key18": "99Lpvf5FHmZBF3YEhzzKLo8197ZLmVvMT1vp2ePKLvQmmhmNjcdxguWBeg3dTbPfM9e839URfVkwuic9qaB2JmZ",
  "key19": "398krRYytZiFUof3AsuN8UQwMZNHetqQLWFJdBpQr3jZxjxLPQv4zojgHEWYVRfRiHt1qkTEMpYfGTvCZ22pxBtz",
  "key20": "3jPs8vayqNDAuMrZDicPWr6rgF1ntMxoEe3axjv5nD3kiPL8H3piETW8qcghcnJUCuf371kLuPEHx2kDZRQN4Uz2",
  "key21": "4woKGxyAjuBD2ngRpkzcsC3qGrKQKRkg437DKRaLwyLtQ9fGWxCr2zZfERMbUWfsxYmYF8UmeeCoa6NnwMfgJjXZ",
  "key22": "3NaMNSUmMCVa6isapFTjJRoAVmPLJSLUyuZ4GvP1GbwKu36BRpB7H9bsqzwKYVkkNn7Q9qwVAthz6v3CtYDvk19o",
  "key23": "XSN5ZsCtukNKo3ghFtbSUg6uW1H2PgpzqHk731UmnDuusr81ifHBfLpC5TChBS2LvquTicXMuiLqEgQkx981nNG",
  "key24": "5YtAszYDpm23GxCi4Kr9iwupDd913Tr16scp3Cmk3YPHug6wv4pvNGbDz5ny5s3bWhhAvSis5DdeZpKCbkRoMBbC",
  "key25": "XRYYFuhPRZ7SEPiwTBLAD1WryPt4BNenq1Rjyin13eR2zurcpSnAJq5cKo1mrq6scXqzdEaHjFWzax4nqexhGGx",
  "key26": "2UWh85qRK7LMGz8ih7rjXZtbbo9ShV8XvX6k7LrieYfm2wqHVcHACtbi8wp7BHEgmeSpCqrqa4DA4uQeHhD5KVTc",
  "key27": "5XkyXKz9GjTsyqaqau71XgSbredzNuDw1w9z5gCgcoK9yDb1rYQWCDV2mLaBtrazjaZkRE4ABYooUYqeY4bVgm43",
  "key28": "2bBAtL4csog5NMwrL7UneXjmHHbVoRK6C3hc2ekQJtehHHnWiLxagj7PSgNnxb4DxkJmSPjePTLHS7Y5QHFVmy4v",
  "key29": "4KrXgaabLu63QtS9dgr6Lg6FJRL5sHpjb7WyCn2BBSHfoeMP6aLhpgTPYigHnJqB5rmio5G3fnTUpen8jpvsgvyM",
  "key30": "AqXoF2ukmx5HrctxCiSdtKtA1XXxjW56bqZLmkXbLDSWv9WABmuh4pCnnD2pi1t94Y7KvbsrGnKxvtQUYHraRW1",
  "key31": "T2592yLNhqo7YF8H5Cx2jgEmfdSQ3B8BTB19Nx4j1dpBgJG98Psne91XTAwQDyvem8DuTVcGb6AwCzCKHUJZu65",
  "key32": "3Wx4PPRCU5peb4HaE92TbqpEW7YTbQMtR7aXj8sBKhPLyyH1qYMahG3P1rNbEQdco4nPyvFNH9hqeadXCBEC5suy",
  "key33": "5xHvd7x6TbBqZ3uLpsqAabLTCXrNHoPrWfCDDVACRtMbBCoKYchLu6CCL9gk7QT51HPmF2k2vZzeSu3QqkLiNesL",
  "key34": "5mEQeL5pT84Lt5R5nvWCC5da74VetGMiiUqXcRYmCuMXTHJUtuPy2L5hjPB7RqdFxnrjsTPSM5fa3ubJPqU7VJQU",
  "key35": "4EMeLw5Nv1pDwATWhDSnxaeGNGcN3JD5RR3qha46qFn8w7NSTNg95bSeWq5U1nMuTQNmCyqYxXTuNJtq4ME2UYor",
  "key36": "8jV5sAR5QuNK4UgN2h8qJE5vUywMi9jCZbGjCN5VDbGfJAJ7u87QJ6CZxKcAueKgWg65kmmb1pXnwHi7sVQyFZH",
  "key37": "3YR284vK1B4b9KtJ6x8gHKPsuCDKR827yo2d47Wt5ZNDZmCxr4CQw5f11HaGt7rhZ8Je9JWmh44S7Kb5HkMvEdCR",
  "key38": "4vwKnxHtWADGuWJZzrR2xHuT5z8tZH9gfgszQP7mPfRYwU1KeYZ1A73m7pUa5Y9cM95JjDi3e89b6qP5Q1hWTpGo",
  "key39": "5tHer51r8SaLbMn7mHMfBiCWfdPh6xhgFyfqzzvQtnoAeYmTgLeHMatHZZCPSD8PdL4xvYvvztimFCJUEHXjJBJK",
  "key40": "4Zd44ooxqNUz1wVw888iP7nHk7KLLbiCEAsUVj3qagfQeyjGipSCcmLKRByyUvYDonK5r2BZ1Buxqzw8vAmMvMQD",
  "key41": "3yAnBJvDwoLy1Lu9Mghjw65KTXGus3MHGVLh6aaz9pSgALi96YunxM5CMteQiFaG3Q5nq4ZTSzdsvD2KRKczKzf3",
  "key42": "bG5jUPbDtuebqRGWWuWMEhjn6ed49TaVgmbYKB4kRKtEaQpaBAXEntq759gXnrn57X7pJyJxQp653KsZ6EZLHob",
  "key43": "6DFA1QzdyEEQ79ZMVRPd78whW79pyqgpHCUcNEpNzPxZTZFSGDwgqNEkhBtajSFhwELPrdfQzUHMd7gjPRhNHjC",
  "key44": "23yByFNz34fAZwdGbUvPLWfKyCfqxfj97NBL4VVSn1JvYiwBGLTQML1uu1hiti5Mm7Qzh2cJKurPtrxKQKfxjjyB"
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
