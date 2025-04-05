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
    "3ZAQq1QHkYKXpNQAaBPV1L1H87AnYJUmTrn2VMxJsFYGmdiYc5xfxVk2XsGY6YcTDHpWLLkC14tFfBLF9S5cEuH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSK74sqNdupaREfNThpJZkwxo8Dw5Ca4iqhDjpRC98i2EguFGNTesP77ZK59Mucu11SHFVPmZpgxddH7DGDH9ce",
  "key1": "FGCq73nPdmUafRV2fBpBw5PcvTUSLFXjggUMTViHL3NAPN3zBEvMk7REDHWaJhqKWEKnFSkk1DUiweWHh5UYitM",
  "key2": "2XGpy1uVhiW8ABDCH3C6VYEM68tr4oqpCaeCTK59y6BUdanwt1kjEN2LawWbTyDopBKF4eSkS2rXdj48bjwtJA5w",
  "key3": "3xwywGo2ghAeDRKW69sWWqD1evr5dZPt153HrAQCES1Le1FifwsWm43odEggCZX1B5ocPoPaXNzU6Q6LXcqiaxc9",
  "key4": "2mqUgfKgDtrva4cemPHq3zMcT97xp8gKb516ndVoQ4LYE4c4ASkmqNMBWHnHpuxQppGX2NWniANSb2dXZUnC11J",
  "key5": "2hxa1rNAHsEW5TqCq325ZTUsNgSFQ6nXcNoNP3EmMPTzA8Dnc8pLXH2guS1kn4bTXNnSp6uW6WWhj421wFZAQxUr",
  "key6": "3SgxuQuHtVxgd2FKFHgUUX51enWqwmbiGdEyDbLMrEoNcBG8iwHgy8EFSBzjvpfhrZ1GCgM9B5Sav7fL35o5WDQo",
  "key7": "63XLt2tJ6264J7bcZsm6jtkDZ2JbCf65BUAUKagQiipJRRjLg7oiJbdoEipTqnhBZCVzCBhUiBqNfyeFTbE15iDa",
  "key8": "2txQiRRTuYxCUzMswqUsjXBy396tYRGy8pScsqnjZGwyR3A1ax8xuBLPkvTb814uCqUzGNgatQP6QiJfogM2Kzmx",
  "key9": "5Dow2AiGtRf6VoTsDK7QXqWmLMZAtobi7iEcenQ7C21jxPiR47z9B1xs2VeQmroX9N3Y5PQuTUUu2t3nbpgcYFsG",
  "key10": "4ffMvWG6Q5KsH56m2t5xG9ui3WvpKJVea5Lv26RkCRJtMrBPuoAeK1FxZbjuVtimuqc2bMA2Szr24uXccqBNj6zA",
  "key11": "zBY8nnjjzwz2Lvhsugp4q7afaT22354WCGj3FmkrKEggiZbAbooLfM7NcdY3kSkUfFhS8nWkdWRPe72odztaUCx",
  "key12": "5ALVq4t9hkKyswHcerbmMxjYKzeRXiToUcggrxKVRDPv8SEMTGZAixD6RWJWp1ZCEHiBHuBUJiMxBdMxPFs3BhKF",
  "key13": "5XD9mjNf5SEaxEkuVczuFQ8D8AC1dqcJhxeySCCiQ9ikUtpAVWxXAepyhzVNoSjDdqSTk1Qv7p9u8bXDWj8RJyL5",
  "key14": "51qoDtS2XRWFFuUnk4AMAAyEjN9KXhYQYYx2xA21MxmV517XQh7Na4n8szfRaUFAU2hWPpwaeNsfcMYP2ixTBitw",
  "key15": "435pVuJ8L2yFafySTQb9g91SREsNPAFZax8V6U9amdBVJa96mP2mii5YkU1qtSgNrk5V76sUmDVcxkbHB5dnBz51",
  "key16": "zmtPthLCkzG2QD6pz5BYSFXjbedaFhE6ufg2dq5JF1vSwHuxF7e4mkya3LGU8i7NYRJNpUuUxVexX9YvgXyK1Af",
  "key17": "2U2ndgtPXbzLWjSRqN95JQnxA5HtigB2QUexa9UZyeFLRstcC55ygQVTtH5wXv47m7Qk9qdeNLVeafixJMGXGwno",
  "key18": "2E59ideKvi293tvmeALtYahUbmhAq7Y8zFR92FdrZnUgtt1vsJ2GKqe4ktDUZ6VrjFHAEeJd8VBauh3rVhey2pzo",
  "key19": "5Va9Y8NQS25SUFZPg3HAudVK2nPodYKdXGhgzD2TcutK2D8MbiEsByqrVUSLJ8L43eAGxr151W2aAWwDkFBALdQ7",
  "key20": "3swdv8vMsoWKYkEcZKvPTGq8bgRBN8TEcQxJiGJDwLd8SipPR1W96xWiotvhgcZk3n9DT91dy9VuCVP2STV6iEmj",
  "key21": "3wpLHULwqTgj4w1R2xzd5r1NsF7Z2xwv1y4CSF2wzE7K3T2L2HEo3Ncqnrhj5Api4si9bA8KTESuDWBTnjh2MKx2",
  "key22": "4exbKM4N5UFD6G5KQDM4D6kCMVCmfW2pjs3H9VpT6AqFEDC2zvjA4fNVzG75tPESnzMSAqaNLApUqJmzNiBVkjvi",
  "key23": "5AH1m2UEg2zs3X3FsAW5mrHgezZZuVt8WkbBueu8fZQezmiGPUBuuA8H7u5YqvfKnCwm5Hf3pEpPvngoc7C4v7v6",
  "key24": "2NbbFnsRtzXSr6aqfL5Prx6psbirqBiJFqqpjYPaWCCvFFvM9yvLkSVqjS8YGNaSLaQjWkLFDVHqiYT3VJrZaV2T",
  "key25": "3EEtjwsrYg8nTdiFYHDKq7nAzUpGJQXxRfRM6VcHXN9247eh7SHe282rTd6tkMo7NU3SfuepMSstpcERk4HjYDLX",
  "key26": "5CFsuUd7JDEYM6bMeCtENjHrXeCRxvBKsW8C6TLBaUKTxhmTLVzc8UR1zx69q5zfscbcD5vvtYPppUSEwchXNq4",
  "key27": "2zrUvCY4zWmWU97choStcHX17QrzVuB3zKokifyHi9dTTadwKbHD8v2JbjnwwmtbjuQ8kqU9wzpk73s4mJE4aDbs",
  "key28": "487YUduHWcg8N4Qs8LCChPWhxFdgYYvm8iXrEq2Bas94JPq5qgWAoBhTgRFiHDLHVJZKK8jv7w7XgbZkz2aJNp5P",
  "key29": "2JZM1qw5fWG5zRvfUXjmeYeQqH343oXsquBP41bQwA8rPFkZk7rdsAJyqD125L4Nhc21d1qhMVSDyKvSVsm4Gzuz",
  "key30": "4iz4sAw6rLv8Q23t24qZ1jFa4Umqm8JZypxcZ1bV2dSvfZGzGqANyQBJjfgJgmt2u2DitZGgwhgWJJqsbGSNt1mE",
  "key31": "3rqpSzoXKSukCqFEodJassqeG9NGRwAKVEFg98nB3EChhJkiNi63gyx2MwRPq7PU5HuxSeKRTtDUiBvHsKXmRDH8",
  "key32": "455EP3kHcapoQ9u8S5GTgaU7YX8TxQn2vdnZnjyCMxjPCCZXWmPhszNm4e3pE8bydnJrc3gTZtUCJYi6nbpLmKra",
  "key33": "3SJyzatvSGRqcEBA5AXNnrkZP33rPk1fp4ZbnQpZNPUn4uXegV7koXPNMXPiJeKD5zGFp7rRWB2azCyk2zV4QjgF",
  "key34": "2TfH3KGu17B2v2ZDyZFsx4qtdCnXHkvhGst2ViRM6h89ZBWRGQ2dUu7VTSsT1wfqJtXzpGdj3FjBKouqH7ibAJSb",
  "key35": "4q1St4X91vVaEWJ7UutHyrLAXiaFSuRJSSLwnxtW8f6pbMAVkxvGempZiZ4V99pucCt2SwFpUjS23tHtnK9QJ8Ea",
  "key36": "4UJbYU7v4bP6YVg6EuFKzf5ngPwoGydUDMeVDeurNmexT9cSvAE4ak6hZUvFGNkxEcp9dbCthGTgNXwEgoMKGjWq",
  "key37": "S78mrwjDpuRcjiHjsnvP7fwYnmvzuzM3ySeg8eXTWTaeCRBC2MAR4UrD8edJpBTJrNUqYPBQuYykCM9E6QLn74Y",
  "key38": "5E4hNbikCy2y4YvPxGEBxjnLbr4WkaDgnaF9rnryEnAFyJSCopVA3cqKc5TUPFykqfdMCcndxVEsZYpzoJybx3Px",
  "key39": "3APVwZcnroVRmdSaGJk1bQUo5YHvPnyPcnSs5fC8gezMrkyuGSZcMcmzYtwRPrQujff58iuZYtnuqrV5ZdXNXfQN",
  "key40": "5YBWWmy9y6foWkRhiG3LHr9hhtmDBh6uMaQb1vHiV3xARWqA9S15aooPbGZwYq9o8MRwmFzakQhVARLngdBV9mJ3",
  "key41": "45BgrUdLTtsiJhDrswbcqVshu3wN1fPgei5Wv4oQTk5gvoyqdPqgkUTHy9XfS5qdBVjTG7ehPhGv1Ef28K4Yw6PJ",
  "key42": "JmpLKXizm1oN6tcQ3MwURH6dbGvDxUwBiHWs5E5oJ5xwxSTmDxRDt9vRPUniaoQeTvsHRjUpjnh52YT9AotUcBv",
  "key43": "4sTLYEfwpB3AK2BXhkP1ktGd5kc9tLHC4rPTG7q2f7qb5QXwaMRwCneBwJiDF1szNRjDZbTDs3NHdb6S1pCKaSoD",
  "key44": "61KBphfp2Rw16cmVrDS5GvsanfofcS1aHAhwY9X4JeiJvbYvpsQsvkziBtFAHwZoJvgBsqG9iiG9M8AHR9hJ4GTf",
  "key45": "4ttybf9KgueirfFkMpwojaQsNYDpd1r3rqDUKBtXiLb1YucNwxr2pH1Eg7oDG8UCkkXEXJebWSezgM5jW61K1QsY",
  "key46": "qaRDiLP8f7YBsMrDC9XPvn7LsV7YwCJ2DYrQU47C3Bvqm8XpqY1G9CfuK8JGXHMmgZg8Ne25WP25QGPVH97Z4ik"
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
