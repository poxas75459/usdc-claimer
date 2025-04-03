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
    "WA7HC9Q46wgJxvZ5pcvJ25er4b28bYkuQFufdj5pVYEHGqvDrQkofUBjHjdjnxPg3TmhEo3tm3UxYvYfx6HLoE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdFF7gy5EaLqcJ2iRGEKDsfU1fvgPXYPPaJwhHkB6ZyrgVr6fwRrGfeuLmYbJzw37VcwTF3tJwAczZKpxnWwDsL",
  "key1": "59q7imhEVK3QmVPEcxLDxZt7cZJ9cC8depnB2BpsY5oHb3FiD2RKpUPWKAuZzKJEC5sB9E7ZMCcT3b3PrCYyySRc",
  "key2": "5rfy6BbsKwmx9skLFK853E85JFkhrcN9getNTFa5VNsKVomJobSKymBVKeEnQj9HyD2neFvccWBEBUHtwNb5d2uY",
  "key3": "rv4eh6JZwbPorZ21PRyDVDrYzHKqpjPn4dfwnnhBfm8Judj46qkvnWXDdHNeGvo6SPbqj4U6Vc9Tz6GPomAj1Gn",
  "key4": "29mswg3r3KzpjNNU7xeDUsJoARw4cqkJUG5yCcAUwPSrzNafAESRYYqmzKxmeAthT2WaqDWkTPrXePFc5QfS7iSB",
  "key5": "2DHDuWmznBKRBXmMoViviEvGEVeEubmNWL7Bx8TJgeDZFHV6GDmo5pvFWfFkrJVEr8bhnepg6Qr1thCUjYuCydsG",
  "key6": "5u4TdfL5S53SDAYmVZ9dq8QPpWmJTfBK1NWo9NBwaajGyLACR4ZijJX5qQ8DVQ8AmgaRNjoahC1L14XQwRhB1irr",
  "key7": "3jCi8LdmdR1MqtgzDkHxXB3YNqY7oiJ6aHAfbcuoHf2r1ffxTogQXPqAfUMqNEPYMFPXZrAxtfrsqkXZ4hh4qpX1",
  "key8": "4goamBgPvk4ccbJdxQrXbv3Ad3snM8sxkteYCFXYhLU1E5f7PVFT6UgovoMf5Qw55xZ4Ndjk5xZCUHCchVya8AdR",
  "key9": "4VES9fyo1ytaKNb4QBDDKBFzJ77bbTrzDNyX4hZR6b6kLiFojXbbFh7MifGReBNY493dY3u1LzDSrEVbwdE9sZj8",
  "key10": "5fVAeKsLDxQobSn3MbnueyB7q2CaRfmdt9zn8M3LYUDSdPpyRjxGnu6kdoEc6m56dReeAMkBNgLmp1yGNf2KxdPQ",
  "key11": "4PR9hRTXffnSDyK3Q3JySSEPqmWX9jY5P43bcviP3i9ScNucU9Ybn5RxJuKgxtPxx2Xct8DVVehfJqEGqNGeDZrY",
  "key12": "24FNMs8aoHr3L9GjArP752gedQM3c2ZU46dgESAJvWDpjofNkX1PDyoN9p1bJyRZFvNwBFvgN8RHUdQW1zfukBKf",
  "key13": "4sioNBieCoBMAEmZ3CcvLdA5zXUR6Wj9uQLipeh96Uxh7r1jWKsnXeYHQQjUco523S2bXaEgEv8AUBWvMnPHDi18",
  "key14": "ahed5HPnC35tJotuufRxc8FofquxF2bp3breyxpqDmm9K7qWAaTmyeuPoK8GmEzEGUmMLKfZKhvDKQWphdyNvcR",
  "key15": "8pjfarCEuDexhpsczESNpQsmG1bJn3nSPbPnbEJSTqjfVCjg1vvD2tZ31ezhApH3vB1cE31WkYMc2P1CptbXxnz",
  "key16": "2cjPMq3PaSmBTz3kQKADtjjqBjEibWsMckRzgo1f8gmDbARV255Ho3Khn59A4cbDivxWGq8U5mTWtEJZUMJGBocS",
  "key17": "62J3ed6c5BAVV6Y3ViyTCgv6syU9W8ZvAxqT9H1gMHTGchbNabknNAQ4Bi62pPSMZ7UajMQS1bwJBVm7p9wZar25",
  "key18": "5Du4udqpXDVDJgL8zWuJkRsM6AgP7ytgycYRA5aTCkmh3XPysbiEDTpVUHVNtZ6FW24Ty1swfSbNseiyYtoWDuSj",
  "key19": "52meTtiwkHYUB1akSF8hyTLHPTrmrDuFKMffY5KKKMTmKmkapNSyoeoqjcKeH1o2V9LnhKPAToT7kXVjXwjQBzpf",
  "key20": "RxTe9u757kkWQre8krXbTGZC9sops1QcWxsS174j9saecyxdrMGFnm77LvDeYDtHZeq9yN7xwv7qisn9Y2kf3qf",
  "key21": "4inWp2cruM5CJQqa1Sa4Se7tTEqpYRYryXNMm26suvaz5axjnviewmXH8Xu56gdNRQEzPA7FwptQ8vFKrv9qnFY6",
  "key22": "22ba3bQzGAaQjcAHpQfg3dZK6KibX2UnwnabQrVb7R3eKqf6E4p8m3duq1v1q6vzFQeypyoSV6eRLpaAbL3nXi5h",
  "key23": "4jWB1aesH8iWfuzxwQA45e4N3obUhU7CtH623qDhm1hEWVY65bzkivYaLJcYVUDqDoCM2GSgaPDCvVfoawDmbJdc",
  "key24": "2tJmd1HhXL5Mf6GAnPHVo7HbyybQZuyY8xek6YKkPpYYJ4qse2Pvm4uS9hJEdAMxEKvqzF2gL6rqafBF1HGhpZ25",
  "key25": "AhwAcMmewndeU2is73dCweGvYaruNS9SKMGp6PYmf5FYNNjSX5XMriG5iYMj7nnAFa2Mp5K1rZ3fhWJsfzT4cpR",
  "key26": "4SJeuPdaRb9REbfRVMw7sTrxDMJi484uFjEg8juLyi7DMm5Wa3iuLH5EgpqQgRvVD34Jk6C3vfajr8K6PQaYw8BX",
  "key27": "3cPsw7CfnSbikXSKo81Evbft1U9Rn96JoegENSQwTtuWrUZxTgE89kXid4BcCZ5N4H5kiBKy68qeinbWk7PsxezF",
  "key28": "5fNHDnosYB5DHP3Dx965kh8JhLkAVDveqaLvpfhaYRgaNKUSW3vjGerzs8ATbrrwGCF5WPDXgx71K98jQFC7eGh8",
  "key29": "5sXjiN35ETCDutNWTdU62pvrqH9nDJaUxpH9AJkghovWXqf1mK8G1U9uKYkcgqpd2WLM21xFCN4SSvSfUruQBpmJ",
  "key30": "4nSDpzNud1gb369yA5vwMUYa6DRvMdKtskGBYb1dRxFyZKwX2sFdhcvxNQ5tUMr6xCJkWyRFK3x7TAK6JWeky2tM",
  "key31": "127qEhW3UFDBmRexebWf8xscqRLW23TSKnS3nF1q5YkcQgegVWHQBDtjDRKfjQttHSy91yg96h2RdQ6Z2wcMeRJE",
  "key32": "2c4qEiXtNcc7FnvcrBt9tEuvTWRUVMhMHqwardGWfWrtw3UPKu7qJpTFiJQ5hi2fKcztJ2bmE5f7c6Qzg19HdVd5",
  "key33": "43HZrj5e1MDFyZfNbNtvS4xjt5W4S1LapDXkwhRXhJtc5hK8bR9dctA9XEUKeBafG8pbYaD5ttCWgtqUnuqamFBd",
  "key34": "3TnzfX4BnahttWMjtonMXJbBdV2yD2YN9XBhdVxuujtY61DXzUagC9Rr1SWECSiGCsoUmEJCdtCsBCfUPURF46TK",
  "key35": "56iaxqqeEpZFZ9futmjwh3MY75EYV35a8q3LLpYE9pYv5zCcXzaoMHSwspWStBTpX8hWPghdTnhg128xYKSwJAph",
  "key36": "2JdFM6xWiHBR5DDVx2uQf9QUkTUejmLH59RPYeQce8P4ffTX7BAvcji8PaqUVKTy2Gf8Wm5bHYnmm7SJgFVYjuAh",
  "key37": "T8GrkebESN42phMmLNJ3dLnnCzpGDMxTYN3Mo8NxX1MR31SZvyjzif5qt57yeK37Z5xAEwzQvt46wKUYvcdqPRY",
  "key38": "5zFuGmmRqBw7SCDtm1NmudXjXbJjSGmmHShikzbwwN2fXQyJT2o3G4xxXPrLsFDzYuY1VQ1PmCXnFG4RoaY4V5CZ",
  "key39": "3ZMxC8fddxjGPK4bttkk44Usf6ZaUPyeV2HqemVvfJiWXeBfZ8xXAjspXVLGDguMqBBtWSE8xHYfVEJPxUDgUa5h",
  "key40": "2VJmkt2WZsktPRRreRL42HccwHxN9SWVaPQP9Ye1YHznMjSBtSYBVrXzNGrLSPwJkjJNBq9HhNe82s7m8GewDYvN",
  "key41": "62JaGh4gwe9coBYRFXSLSKHUAMSRtRoH7C7pqJkfs2pkq14KX5rH2Xei9BqDMd5BvtyMkEwCqcazq52mMXKzCrLX",
  "key42": "2rXVm7aD7C2r4YCdqKEppjx6YShiD5swNHaLh2a669GTntWTqxkRBoz3bWnPC4aUZVmdJDs8tEwmntjfK59rAwjz",
  "key43": "2HzGpivZEjHsjnJmDeq2b7SpeHJcarFKcRmwbSjN4WoAMUsUNyQzcuQWsyUDq4b8ZKJSX6p3SxZqHB3jd9UndmZZ",
  "key44": "2uRu3kube4qXN5g2abWw5MoDKMY5bxARmLfnForJxh8K6gVY7cTk8eum9gHvgjmqVZTDhmMA5VYPdgqWB5X1Q3js",
  "key45": "2GBjKp7ZmMXKzSNMAWgEwMF8kLm1Pv8Sr4zqt8V1q32cPt6xNb2Ctfec41dM8422RBQYtfqLLFf9o5zhjyCgtsp8",
  "key46": "54rv6k7ytMru1QSha1zfSTzvFFtY1ySkcUUB6BJ3kbY7DaTs7TL8hxoFSDhMmsDLxUNbmBae23GMvFCMVK8JkDbj"
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
