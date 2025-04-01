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
    "44SQm6kj8j2uXADhwSbRY7EH5XbYuXG7G4dxE1RQoKWcqNu5ETVV1D9nVa5DusVoKHcjtZAdD6ERbqNF8UnwSRM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfE2oSX5uxmYLsxVKUL1kNE2iXzFexy81eYd4vn2TmG1bnAoGVbM4tHckJ47Z3FiVrnuwFMYp3A77q1qYtcQnWt",
  "key1": "2SsCwcm51wahpVFgDCpKifz1ADaPjzF6EDiVoqvVYEvNy5iytm6rz19UQSoNnXw742kEZk2NkucU92V4pFhJw9XW",
  "key2": "5KMi8TjLdDVhf2UtPcS984LJbShfoTbzonF4FTeFXNcGAmFBYqNW41B17bxLJTFyaVPN5EVYoMJWQrJwbsbBVkti",
  "key3": "5GHeBBtZehjC51JPcYDQAYrZU3Lt8un5WsFALFeAjAAjGmwGGcrcy9AHzFUHVRAA56uQkJM5fjsoNyoRVGRksaSn",
  "key4": "5jgEWAAG3Kr85d5rJNmDB9z5ANMNtP8ycpwk4wQUHFQTeNcmy8CoQH6iiwFY2JLPKdDGfcm51x6EJKqD8Q8MAw4P",
  "key5": "35RAiMcBXkQAzrjxXeDdR5JGrqGbRsgTGnCcdLnPPHow4rau6VsZw3G5TVA9YvjECX22x6vjYF25QS9pRdFo6LgK",
  "key6": "4y3F3PaetL7qxfavGr7ns9p1Vj7TDU4zZXV28zgzwiDYuH3cbib9vMBhH8LBqVyqMYVQpzxXpHgBsHuXft8HvAoA",
  "key7": "5r6PfZ2NYj9ewmGWLoe8cFjHT3qWiG5F9kRdde3JecBXRQ1HZvdGi56wBEaRaAUvcGdnLf5arcGmnJKp1yWFMLME",
  "key8": "maSfiPqpqWLdtcZ1kgBYHBVyT3ipyGk9LztTpysTZemyYhaS1qoWYhALNzyWxZyRKLmA4yC6ubmf7GGGAmTSkhL",
  "key9": "4L84k8r6T1qTa3eeEhZZFzzSukWhA7HUFVfgdYN9dS8285TAV26LS3UpsA49oc33127BP9DpYPMuLSHn5nhcExtG",
  "key10": "2VN56CU2UNyxUwT4zv2xiHBa545CuzYSdMMAxxyrAYYZW3sRugKVgP9JnUF4bar43V2LUrcTwgBRmAG8Szyee1jW",
  "key11": "483EcppQve1AdKJMt1xrxYKAYv7LnUt43yorAU9HdtgPRi5svwnN7Ys1YJuuJEeNttSD5Cpinq5LcPX6wWdR94ai",
  "key12": "3z4bEBXLZQmnXnzdLDwoQGxCSx8H6KZyM76m2jj3TJGr99oDTcJ9pKSnCSjh48R4hMEEnmsMnip3KkTitmDgRwDH",
  "key13": "3ZxbFRsfRYCdUo6ko7T4dPZJzNVyGzwTnS5VFw22XWREAzTNvMhNWufDvNaWihx3BvvXSw27a21A7s1qFzpyefpu",
  "key14": "YpuyVXRiF5CMMdjbQYePuoT1KmStnL5gEsgPjsXmdZSZesFLNBYRozdDQpLPQ9qQLzXTVUNbcRuchpFcNcVqgoY",
  "key15": "2nWvo9DUdeGpscsTG7914dD4K7ajmjsh7ScMX4jTHgSzhUR1iwt6h3SnRoRzbiDGcrhJWUiVR9g4jPGVvARAa6dQ",
  "key16": "9psEVVBzA4DUmPzvsiC2w18dsqc9iLG5dPvkqRmrZCEM6Z3fWDPYzTGWCdSNvUmbh3eTKwShu2PmjsV9jUMbg6W",
  "key17": "5ZPnHBkEQKTGaPpEsdPyv3sr337QAPTecsBmnme3ocHxBjY54gV8jggu17sS1KuYhHynMZ4FstaNxK19634YNJP5",
  "key18": "2RQVfXzNh5dLqB2J4tbtUxzb22ZRGG33FMDfQeaiTc4xAGv6VxNf4iM7F1HLDMgcLXF3JTYmNHcQ1RRE7oxMAchv",
  "key19": "22fGzVySi3h2wNWqrNe4BZ4M5kWm1dG8k3BP2usKSW1GW9n7UgvNiV6EDTvDXN5D7tzrzrzaRwY4wCu4LwWGpDwk",
  "key20": "53SnZyfiu7fgWH5WKc1WAhvU3fS2jv73w4DEhAieWdp5s45aQgVEWEBe6X5duky9JkQVUxpBVmUEs4BBWS8EaCF4",
  "key21": "5jz7kuEtTFLuMfSf1mTrctK9AZfwi5oNLXzWJjLJZ1kQG7UusXNqxXnSU8KAemErYV4C9Z3923tqLDHaXaDSE2UU",
  "key22": "4Kpc6wTSR7BwfmHoihBfbxFAoeqyJQYtP3aqR9MmeYHhbmpaxpoaAT6znB7X6ZDRHUtuMygwgqTvzGMpJhBCqppf",
  "key23": "LtNf3SUd7b1xK7M9ZLuXZ142UhAcBxPjwRxhegFtyQSMPF1NuVyRdU5dzasLHGmQ97M2GadN7yzwD6MdxfQG94L",
  "key24": "2ogS9pXJXZ4BP4WoYPPcPs9NTAqX2WJ3nBWWTwhCjbjxHMpjouScHBmQELrqEyqnAuLvJz8RKwu9R2JkRBEYfrqN",
  "key25": "239jW8p2KVX48mJZyt3BQJ4unVoQLnT3zbixSnrVxB3Uk5RQruq9HJcRodTwuKnU3H5yCTJ1HqLE68p3LFrLJe7R",
  "key26": "4wwySQdturczpgudiebs4NUVpwqmKaqZxYcyS1vmev4rccFKgnkYir1Xi1cCaxeaqF5759uJBpt3voq8bMqgxnnL",
  "key27": "35jr2MxfBvCJ1FiYN1wqtdYQJXMYyL1zzisLWkL1KL9M7wFsetswJAoNkmCVWpMYyCpgabBjiWcvYgRdoCVpRasi",
  "key28": "64N1BqATR2aGoqpV56cigAx7uQgb7SFsTrB69tyzAB214gWV8FMRA7HDbhsHftM97SfgqDdPdYr6hY2zXjjuQH9h",
  "key29": "4j4pVYh1SVZz3vmdTr2BZ2CGfDmR67P35o2u1f2GpdLSW1brFARc7xi7dWA9oAXTWvTN1C2BxbwMc2jacFdwGNzc",
  "key30": "5VfaJmgW5RVXzzFXYwjYnrtyUauQ3KGJ9jd9v6PxM9KCUghEPQXU6wvwwg9E1cnXXUtuGr3sWLyj99SWic4C8dEv",
  "key31": "2dYvcy557ADGsArosEWZWxYwVrigFqg7y96BsPvYo17FEzrdyeUA9LNvtA6Wup51aKpYbLP4xVCnoCCAGbur8WHw",
  "key32": "dcRFfYy6PBHbo9MZJc5rdPd5ZSXa2QsVwugsmmTtGKm5A5Bg3q9Gu4CdiLTuSffaZGv4ikxGjCNqUyEyJZx6Yn4",
  "key33": "5TjFXRoKZVGWayf8p9dHA4ty5ipcq156QbQs6ver7xsRSzYn7VHgxyQ9pfYSej525iWQBV8v33B8TC7j874wEau2",
  "key34": "3Z8Bf5k86TgrLiYZtEgdWuwZnVwaNrzkk45rrGWUwSjMpjh6UUSdLedcE4M6eqyNo2tKtMrrScTRhgRg35PLBCx8",
  "key35": "5QP8VL5P4PMB8s4oQM9iGwG9b7Uo4bdmLwPUdrnWonLtpMJQAhfhdS1VcuC5RpgtAzAFZgEeeeAi2AJPxMkaj9wf",
  "key36": "3zEUNYQeWn8VZ3JLHgUL82XzqMsjcMG7vWTvkbSHV9fU3rTH1StRxPKCaB4ktPmpLRyMA3StTCezh847P19fMWmN",
  "key37": "31spx18msp2Kum3DcN6RQ1ShHGEQrYce53htYVymY87wodZsB8f2SMxiTbn8qijHSCddPqN9e7Jw4NT2zVjHsHt1",
  "key38": "3je6CPoikVKNHY8B7iRrCALU5zcLqNEA5a47mNta2DAzxRiJdyXFoaFLtcPNMeCM4mZLgREUGJsZGsJYGq1sgMHQ",
  "key39": "2QD7RwYsEbzteBJT3DHuZKPbVuRwhkv9xDwJUfFkLcQumyAcqBautJNCPznR9VJdT34pXHdwyTu7AWdmr5svFKFP",
  "key40": "622af7ARz99mZwbws4vFdP8t4YBqLhhj2jbdEvibSzbyr4FDwTxH4sUGJkUjs2uX6EpAyUiJ1CzKYxLHQA9bQNuA",
  "key41": "61B2LgSf7wegp9ipWdWFTdNpnqp7qAtoREuQwkJaVVrAQCoWxJ1H47R6KXBHXQnQRgV5a5NZxyKieuyVbzHVibrH",
  "key42": "4nzhGLaookD2kbG3AEXxy8frZ6vhbMH5UgGNhdjQh36DrCuX78KoJYCVoJNc43icPh4F3iFDLquDnKUoAqogHf9x",
  "key43": "4hWF4RmwaMbcgzmUGnrzvkRJPSJcaWtgL6TnhLns4mmusjtCYkpB6GsBNRCV1RGSWQy8yZN6xVRd4ftBQbQAoVcQ"
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
