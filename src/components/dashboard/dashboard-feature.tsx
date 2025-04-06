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
    "dRNCTCVr3big3EPUTructftVv6JbXkx5iS6n5fPGTwkYoFmUYAu7r8SEH9614iDE2BPU693fGjcq6uZpz7YJ6dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdjd7cvrJPL3Pfkr1vcJFGoUNT9Kznti8mpp5AMtYHWbMRRxzjfVNdTJKUrXn9TA2XTHvdYAMe7PMS4hieKR1GG",
  "key1": "5WNHjqeK7nVWQBXE4hNqa95Yviy3F8BmZ27VWH26aXX6H3ALdr9o3HosafsmnYrV94mzEegPAKfDjn4qgj8itkBA",
  "key2": "3g1FUA85Q5d4bB9MuVXT2aUk1Sab3GbqWnzZDc7fLoDQHMfc9oqeNsfnYmHD1EjZub4pES7mPR89w2RyrKb6MPQ8",
  "key3": "3L1oj1VJiMHuFBBSEh5LnEPnFd1QysosXoNhy9rt9WvveqPxNmYEWGhqxUkbvrCocpg9sNh1u1mmQmtAFmHiC3Xh",
  "key4": "qA9AgVNKhF7Vq7gWTu6s1awa8abQQPZMFKhAJhM261MRpZe4T4AgzbNFFUfFdfJ7JKChDytmcCVxPKzJn6HqEx1",
  "key5": "66rghi7BebFgFmbWWe9diPJh6Y5sVeSkB3r11fGQMwJnGKRzPFKRg5HQB7PYMU1m7VRm768maJBpXLqMVpAs7tKP",
  "key6": "kBGaeqePXWHESfMzm7smbbFxougmbAquNrb2GvSPYkLYdiRHCmtgbjM2ZFGNgwM7SWizHDBMu6TUfteYujxuz7T",
  "key7": "55XxhVqCrjSMr6hoPbXSwxPEN8QXLcjhxx1JpexBeyvBTuXcUicgsWn3qkGbvznMNA6J8eD3qbNBAzYqTpdNDaYt",
  "key8": "3aGYJ7PJVyHUfuNWszruf7N2SjnWVqT4tNCxfhKffL3Qyy4pAqMrJ2SeJdoEWW1U57AUpuNtaCxBniC5wSGkBHge",
  "key9": "5VVSR5YrAat57fXgPsngT8TFgbmT6NKFwpcFESvcX77iRupN2RmnmzgnikmPnMTFyTmdSKkRDzvCWT5bM3XAzaqS",
  "key10": "2PEasbkuwDBaf7oJ6bXumyhqSwSg6gDaMMirz9sBBuZSrqNYgC9fAM9QqECbtVVHKGqbgqVuHjPnJuqVLFYReoH1",
  "key11": "62Ttf2L8wQYChRsar84T1GpeyHhbKv2MozjejSEmSoi2kmkKkhGjfqWTnRWGbvJXSXSmcsRELQETBTaitzgk3MAi",
  "key12": "4nnmWHN3dSgrPXByi2nWfZRokjSKRWz6mmfpWAjDtqo2Cg7q1JJjis7T2rsGyFPppeX4LYcMy6NxGeXArMMr5nFU",
  "key13": "5JBQBX85YBwBfFSiRTDHAfyjzS9MVbJbrwr61J5sXcEGGyF9DWrn2ti1DcqnHKF896D8xNaQ1JhMASpA6FfKkdZK",
  "key14": "5UcxLct9iQ2a8dopreTpkTNyciAcyy3dNTBgQLRo6CmzW4rjD1acWS1NZmgPx21oA961HzrYqTLqbGrN5uBuKtEG",
  "key15": "w7Ns9qMz4ARTuHrsmnEtum2fDjdXGsTaQTjvsYoSBpmvjQBefaQrLHqJnTjsViGw8QDj5Va2c4vdSkjwSoEVeTs",
  "key16": "bkQpENB8ZfK5z5VacGa6tqdtCNTFFEGrqcMsbA8YHdDZwEupvXjEAyDCnb6zxLadLs1C73RmcQ5unXZ4QTpqZva",
  "key17": "5UeYqGM6kmJc8c77i1uWZZuJRgW2AZzVmsLVLzMPg5KihussHuhmb8h1QJdFJcAMgphss4qCzm6jHQ4j3mf2mBEe",
  "key18": "6326GLdt8EXqDmATDBU519ixBD7VT32K8gaTYFQs2b6FLbLHQPgKkMbdgkYDRztTyHHBvco12tSnm25EFtPLKywq",
  "key19": "2vNAUPGnmi3VtCZ2phSKWYQ27YW87CY6d4UcrLu72usP4gSHTLN5PsV2NCbTM7GAovk1wn3wrEYTV5pUF9awgku4",
  "key20": "5uBRgaVPcXNwTYjL7nNSEboW3vY61APdUv2G4q672YSELdyBCV1PniAS3YFH61TBWtLKKubsJHAMTU4v9EWBFDSb",
  "key21": "QgkpyMh53AgeMiXLn8k5KiXZFYRrMoQSZgYZt7TgxJPMoxY5YbfPNQd51NfBXBBxXTQwimHTsxemVvRLjSg4WW3",
  "key22": "KZTdRREuSmh9VxCSFVBVMStWctC2pdEdCsMw13tfHpaicmJ7foeNj4b8aQCxePsmQ8FuRscKnJ9zQZ7JwvCpk2U",
  "key23": "5dnz1taej54VipNSSNH8LRdEGwwg56fAuut4qCDx533wJBcodg5KsuCogofJykeBTMWC4NTi41yh99kCa8vLhU2c",
  "key24": "BniMRJGHndp7sp3xXW5Cffcs5Bni2DBtoscSVELzUC3Eaqn6KeX4pRztzuLExx5NxpPozVFsc5NASFb7Z7BqKP1",
  "key25": "3FuNEiHGisdMzDFvw4NN5EYBKxwzJQgk4H8AC9o48U6tG9oEt8P7ckEbNS3Uy9T966TqX4UJqmc6jw3Gr4DPwtZ9",
  "key26": "2JWYUMCk9uieJNp24KmjJxGwRYoqJMpG7Agq4kT6Qk7N83GBoW8atAEGBjhzjRHH3Wq6rmbGPhjQEbjTvjdjDWKL",
  "key27": "2YE4AAo45Mt6vRt6CffrMMJbGVByUdZxADJXStoN1CDJcCiw7McTWjBFJdp4xgtGv22ET3XMca1EjEVPN8PgosCC",
  "key28": "5VEf7Dh79eqbHceGDaRD7ijg7QMMajXTpN9uWDLMaLzdetoHH8w43YEGmYbR58aejrdAamqPLwXYzaZpESREMvra",
  "key29": "5pfcCWdF61BfL4j1qxXrTmSBnHTKLuhJ1NmK7ipjYXvB8eVdremp1fUhCRTHTTeo9LgoL8a5J5NLxM11xvsYEkf2",
  "key30": "HpBpGgZ5B7A6BwjDGVRAWdRa9QK1HMfLuFE9PMHqvgvwFYT57WQJ7Z6gSo6zt2LC1nr11EajBPHZQmYQcFSn2Mo",
  "key31": "3DyxSp55uqHxXyjej9YFJaMJ5QrXThfhJHiVotApvJecf6vJXNUMvDNwBLpBUHDoZRJW4RAyjNNW8Ad35PUbxZru",
  "key32": "j6yXoyZrToti2Bg5nsriWuKDovExjrns69a7advLAt8izNrPMxpREcfz6vjV1Tv7CwRBHaAMp5XSDzDZwPs6jvz",
  "key33": "3hzUB9oPvLFKAY2PrvJ6Cyg8TWRMscLeifxdNBvKeXpMH4B9oPDW3XtrrE8wAcGBEifwWxK1oK1G8vBUjkp38BR8",
  "key34": "36M2UX8hBrpr2wQwgz2tr9JB2FiXRYAWiCFezgJtoo7Ji5Ab8SvgoDYSYYFvGgm77N5zdzkS6q6HdssvLgtgPwcP",
  "key35": "aSJETgyAxn7GGgxtU7FLkRBmSyiNmaCqsYctqCT2DpG9x4cyrXdQ6LpKTfz1xSEJ6DiMPEgvMyYeBsiLhtmsS6p",
  "key36": "Pmna7HWunkEsjZPhzLB8iYuPmhpQMeSFw8euSfvh2i6pcoMFLGMwgTBCGsrxLdjspiLjihdsjH7CqSdUFrbyiGZ",
  "key37": "56znNgnsjaSMGJsW8wKiUCDAVmrJp9gNFJPKfyj4zk8t5Uc3wuBmHjdy7KaqEasabeuxuCYmxRD1UrWQN46wQB3V",
  "key38": "H1fcybaDy8pk1V7No1AwNVyAqhsPBr4uQM4hQjXQg7C6XffMuJUh11iNuv3s2Pd6eHDvy8dUSqd2DJg2kX1EZX2",
  "key39": "5qCSPkCAxmuqPCZuwRQo3hY6bmStfP6jsoanDZbgQCJYjUgNJbz8WAFzM4bxgpH8w963Gh19TfeU63y187c79zQq",
  "key40": "2aCVtiJt4ySsXhyzLSnP2JsnaaGpHipDGjnu9GgyqtLNCXsBjghKYanXxT6t3wHRZ4EKm4AzK4uiQ7jNit12h5aY",
  "key41": "3hAwuTqHdt8Sb59dhzneMowtxFRsQJnBKtosMP8rLQNJBHJWmX1XBbozknSJPLaj7KkMtNL9HFchzRMECWmMYtAe",
  "key42": "5ncKVJ9zjARWcZbHcM6dq5YsHo7TeXhEUqF2ji4YhVPQsSa5YpcdJWfBMBCy6ZZkoYD8rWP8JoxYuqtQt9o54cKf",
  "key43": "2PjNPK52TyXwPxEfyeQvMucWzXCm4Q8BruR2S7Z9xuSqL516DB8fw3paoxxWLitQZtFhzvpXHU2DLaYqzTKJCQBD",
  "key44": "3BWyp9F9dWArZBeWtSNooe46vvNtTtWFoDhLknheK43xVWsH9e7siztyFt5z85mt63SVfAE6BgeXX3JUQa5fQWGG",
  "key45": "pPbrXM1jHXXVMESzWfSDoKyPCtYKCSBs87jzDCXGXV5ptndUAKjabXUjcArGyztjG2osoAhLbtWthBN6E4f7ktu",
  "key46": "4SCyEycYnNJubeoq5KCoAogm4KnQQ3fNEZUsX4BZvrCuLhpsrMTN6xUWTBAsAkrcncbomjggCZiYS5gjZSHn7Lnh",
  "key47": "4aP2zoYdGvZfXJta3XpS5FpqLoJwAyDRUgH4HQ7VYQbLva8SjwAvuqkFQS382a4c9yEGdMkAso7gnX7HFFveDsvN"
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
