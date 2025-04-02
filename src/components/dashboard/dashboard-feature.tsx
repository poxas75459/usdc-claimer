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
    "vopFGezRxAPDWUnDi73R3mXExgLp4vWbAxfBQkHC7ZZ1hxjwbiwYy28Wh23HbcXrjkwrQ3NjpCjSuq6eJDH9jLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zR7vv3qbGyD9N7XXKkFNZjuBEPQE5PAXvi6vzYZD5FDnSKoRbWUxFBVSbAD8dMF3A9QoMdHsEvGwQpMjza4pLSc",
  "key1": "5BQbW2BFeBKkTKPBkyvoaSAQzMUGxSytdoTPGriQK7WX24TCGS9x4Tud5ehwrLrgqxn5Sqqu5B845C1ncG28R61B",
  "key2": "4ufpht32mn8Ur4wpP2oxyKm1SAgSaCX3CBGRMGmUPh2su3DHy8BJPVCSCBE9tKeCE6k9xCrtqdYBeZGEFaRCvKuS",
  "key3": "29M3aqrw2ohdVo7ttUS2t8e72fMEsACfDaxFKgcgu8SXBUKggvZsRcSPAD7h1Nw1iKxQ2vvLmPBJ9RmNqpjVwG9T",
  "key4": "4VhDDA6ViXSq6GetQgScBrLGMHDwePakDgdeDiXUtkjenBoB8pyKToEE1x5ETSx88BYkmbYV9GnK31m9cMHJNKSV",
  "key5": "2c17SBUpSjEUPv59JTZgBXbCKNrCukmQ6EtpeMCorJujYe97rj6xvpm8CffHD3jb87ANVWrnxBChMpN5NxAE1NSn",
  "key6": "4yZkXhVWfDkSypF59Pd7xnvLAk7Kxui7h4zobU5mp1ozVD15abaXYYf3JghCFcLNNUrdhagCh1r2HvCMJjRcrqQn",
  "key7": "48YC1CKJSMkXnQgCgeBcW4vzcuXEGQuxQMXXkJ4Cym4iti7CZFbXUY2Mqf59nVxY5hfwNwnxDLogyJxkLD2YAps",
  "key8": "5Cy3KjiE25Aj9hfCEJPy6YupqT4fx4Y1UXBcpkiCQpwvuF49ayd8w4muogigTezHTPNvSoLS787iBUhWPm4YeTau",
  "key9": "2ApBNTNB5Z8BmvcZrMwFjLEQZSumgiZBkhbN4wwt6hSmLn2pwY59FH5inEe79FhQ6o5c4RdXgZSkm25SJ4Zp9yvM",
  "key10": "GEnrHwTH2coYHt5xSmi5ADYHDo2HYC5qWMWGBu6cA4UVHmAb1VDuXDS1CeGEmo631sjAxxrS1ELG3uLcWZL1KaB",
  "key11": "VMyTAnf8N6s18iTappDxMNYHhaZSNiXbHLWC93xfW6jzamCofVy83ZV5F22KkrpvuJg6551x98VDN1rQpnWdmJG",
  "key12": "2xMjcurqsM6TzFgqtr49xsKKWjfndfHkwHqYqmCFBrspVVYGScF7NimKf4YpXiQcJxn9WfFrtjyf8WE159ebBZmY",
  "key13": "2MFafANorBfw8zx2cwZJN9DK7sauTFEjummXRwHK3k11zY9H4HF8AuKixWAfpKQz5z8CEVsBLHDQLghEVJgyteiL",
  "key14": "4h7po7fZYYDcczhrT5uW7zKSQa4CnMn9seK8feWEkyBKgWkaH4ffNNntni7V1FLeknZjrnaQ4pehdvoY7SohFh69",
  "key15": "2fBzvDstLbeP7VFyQd6YcAjb1tmkoxzoWrQdaikCWj9rJLJrGR8eBYb1Hrfw3Dey51u2YqQ8rh33sffMCbZWc9wH",
  "key16": "5kvYKeLscvxSFuP5sRVUYS3V3cARyzKdpBEMVGyZLwnwbn28w8m9NpA4NZC1i7yNbD4QbnDViuXzcxqhMDbfETMe",
  "key17": "2iVumea4ZDsBzxWKKa8mgzrgbHWjBkymxc2xP9AkSCzfgM3nQpq96H4rSVPL9QobVmfM12zucpRqMvg2C8fb7zVf",
  "key18": "5Pc7wVkpo51oy9r2MXSDcvungXgPHHUhphjvzJPc8zmRWsYQVjGvjn9hpecbePMErMDHqgQTrYeK2dLPMYk8jgwx",
  "key19": "37x3F1aDzKdrcmzsoqCdhWz67HKjn3FsPq9Bn214HW8sPMGBPPXgyEiEEtyWkfUmY3x2egCwSRtWRWVZcPVPrRi8",
  "key20": "3HDYkTGLjUD6ELfye6NDEDRS9CzwNY4pX2dXzzjWwFRQ1vdh7coUrdAWNskNzJBkrmEfymNnD1dc6KUbStgtXQFh",
  "key21": "62pAmpbuf7kDedBjJGnsiCS1kEhpaS3e7mNzrcp7RxwHyfcgTJKeSCRYkbPrsnHVSkyemxLfoyf5yMHKf7ZzQmsd",
  "key22": "4HQsJYKAymVToM7W5ysQFXoggP9BmsLqWHXHhvR8p4Vf9xvqrQSsv8qmsFPUBj4588Xw4PzaSXpaD8BRtp1YrDkj",
  "key23": "VY8M25siAmKzx9sQbSWiy7gRV21ogLtq6HcaTxmEGcvrCq65gSoQUQqV8W5UjeE6kEgGixrsarXzG3N2aCd66Hh",
  "key24": "52yeT4vwwdcUu5ckmmAGQBNDZQ8fxFDaWfkdEMTqej7TUvbKigMd5dLPKf2ToyXFCQzpyYKQ1eeGF3CR5UatkzFF",
  "key25": "2w7fFDBM2piCrF2Y2qhYVp2YcSCuVWWbHtj7kVeGnPbQVxCaRK861LJhWAKSGHfUe3sEygsFXv9aJycPTqMM2gzk",
  "key26": "61RQTX9FqBPwCUtE1qyGEyaaVknWsVqpr6QNd7mCMFr3HYibBDx4ZKr5rQdzP6Gwo7B5rFm4fS6G2VxkAWXX7dX1",
  "key27": "37y6BcF37Fczd7S3uPMvkuRmyjr1TazGRyKuikFCxY6U3qx8Y7t4evDeVyPqcg851CkENMXuaF4oRJmHX7opcRKL",
  "key28": "3zArbeWyA7iQcPLReDUPeMfs2k8uYD51PHtdYMgb6LWigZPijPT5dmgauPcpoAmwCmBSaHyAp1wKpNERXn9gD2p4",
  "key29": "2HNxdJ91rV5kcHwVxDZG8ddDPGjpDSCeUzG7XV7x66ESMaREwMVw4VMtS9ZbRAbGhkwTSZAesZvGBBw7ph4k7sy9",
  "key30": "3buofUF618XZddfrx8KD3DuVgZZveemKciT1QT6sotCVSLh28hzUDynE6hLc2We7qGqTPQ2VWHB1J4MLQjnJiaB9",
  "key31": "2KNTbenpn7kgodWgQ5zFkSrdST42vzXyzgJcoAzmm5htkXztYt3SKx33hSWChefCANB5KWWYioUPXH34CdSZghTi",
  "key32": "3k121QVf1BJ7iDQky7KfRkVCtbPx1jm1vR3yvPN9CcJx6ioB92T6U3exKNnYLtzrx2FrdZHV4AT3ntBPDpKUT9Ze",
  "key33": "4yGXhXmKy5jKEWxaWG49FbtaCcpgacH2y8qTNbn3aLZHWt3Gmzbk6QjzEAxihhpU4Rs5CaXsRzfvKhy9NbReLH4i",
  "key34": "2thmeZUSEKCB3hXfydYHyVKqWTYLS5d29q1Xi3mi65cRRrKRewumFLqPgTizH1qHBfFPQo5XNzEPuPPy79RRkxiN",
  "key35": "4J4y8GuR1WF74w7Y6qucAUpXK9Ho895zTSA8GBCPCzuhh1KwzPxxLLgPrUaG61VoNarDAniRXyTULDsRjc1V1MSZ",
  "key36": "3PTfwCWtzCckR2Ysv7J8ycBqagyS2KWE4b3UABxhwixxrUvStLu9tpCAuFRKqtEpj2ruzqdGFQSr4kxzmjASSXX6",
  "key37": "6LVkrF5kBKxLtxuNGJWpWEH1eHGcvzrogTpTBFcv4yFxNXf9iJjHRo6wKor5EZb1c1GVMJ3zM7fWg7f6Af8r6ST",
  "key38": "3FArK2uzZG6h9baNgrKLUXuT6juwW4kWgTkoHvkzJzvvo7GCNk8XKrhxip6EYjpTZQ1X22z1pLtYSjLdxx4hhzSU",
  "key39": "3yYWUuLQZx6K7qRja6eE7jQxgPdLptRvrLUPe9u9YRQS87fmYaYJg5etEEQ3CHydCNY16U1nKcuT19r8Er2hW9nw"
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
