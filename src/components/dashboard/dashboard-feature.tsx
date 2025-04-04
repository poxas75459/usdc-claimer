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
    "25MGNxjECpjW2yWUvVsqJx7kbWhwyM8mpqCiNbkT5TLThE1oJbA7Cjxm5KveMyNA8fR9dgL68GEYK76ZRWp8PB68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRKxJ3zwtYQfBhHvSH9GhcARQdpJPtXyfqLTmKubxtoWVQfBVTt95ok23ZF1XcHcYdePba8Hp7WXd3yZZF5L2iM",
  "key1": "64eo5mVJRvwENZbCeSui4PpgY2EYpYwBpeNvEdgUXS73S721PATMu52Xk82Kpa5BufitFktqC5mPYFuR3DF5iSWs",
  "key2": "32q3NpRsBqbErQK2W1nxFJcjfv3JDYGzhEVZck5uHNESqToBmARqmV7e8D4jCMuMgUTHCHUxTggrcfrUXMPqFgCv",
  "key3": "4wHo7nadt4N8S2YVoVixwikdLxcuDQYu8oeMir8zxSVXca7eAqSynFQtWqXoDQE5M9TjWfVXETN5hdggMEDEHE7F",
  "key4": "4LWqgYbiYaSnfVQiDEkYfZa39R2hFSwKZo8as9eA7ZuPN7d8uTs5TcfYQVMEgGMTL69c8HZQbFk6EKLjAJoVwEFS",
  "key5": "4YpshueT6F68srGKwkE8gTG1F6wQhH6deEbxHFHjn4wEY9RGYJzXgmZKgzMggnMPnGXjGT4u3hw2jKg8HSmCvit4",
  "key6": "5S16FU7Vv5sWpn6fAcpL415xGqZNAetPAP79aNZYanVT5F3PXTkmCacURrgozmMRLtiotSfUNpvJ95MdA6xWJBqA",
  "key7": "YoKvymRUVJbWu5EyoXZscmnZFoVn2RSaG1tewUDqsfkgm3k5N56rzuqM59vwoo4dL9SupJT6siHB4pd8RdQXjvK",
  "key8": "2AdpQGMUTaLmmAWeQ8F89r3p53AksLg2uZKSr8rrK8sYE1crNDMAfoPjgcrtYDSpuBL7cHqpmeY54QEqx15PCrzJ",
  "key9": "4CxGbZmyanhJg3U1ZLxmixJ91Lw6NbcUEPG5f9JsJUVcMzbVirGcqQEDZi321CtLxYgi2UWwCHnVCKvJ5Hctk7ez",
  "key10": "4YEPa9eGBZCE9RPPu358iPUfFuR9fLKSYtCSHB7AfY3uiempVJ7GkDmS1dSe36vVSKSF5sfMKm7zqCc1K8KwgXwJ",
  "key11": "5tTYPekW7iLpa2YtiFvedUwkkFs3tK2Nc12DDs1mETty4Rve3YiNBS7pP835iQBBWu8bjdwkxUhVvQXKq8Vfjz8W",
  "key12": "4QDf9dqUeoTvdJwrNkrevEcM84eQUspNbGVrFKdsHrpU12RHoWQfvFS6VmVendaVM4MxKjurZ3p1uGbn1QsAnnV5",
  "key13": "2REgTAyBd43JMNv7EtSNC5CMqb2xoUXXGTMAWRnKdWhBQbdTPRpibbzDP8VJVXfeQ5WUjkyhfARRd6WfS8fSM2j",
  "key14": "2Hid1dvLNLTn4pwuSuqcHBVeaTKc9W2kdoeR1HMtbsPQais3brW3Yq6uCJXtP5uY89FLPY13epDDXvW7LHih4R8b",
  "key15": "9Qpsqob3wKWy252bhotmKHtYhP9LF4imGdPJojY3SfYDzQHLAmToC2ggMsrEUaTbPwYqgN4SJF78hFgcmXGkLrT",
  "key16": "3eep8yPN48gSz3djgqLcZBMyxR2ovwBerwe4sLtQf2iymMw6j16ZFKhjGER3ycWCoVfWaQJeY3owh4yzG9KjiHbs",
  "key17": "5bFJ1rBMXMEYKEkhNjtVr3qskSUehABuXhUgvzmxZU1JHrK1BpFpcfWTyXYRr33FxdzZwM1mJjRMVQFa2dLe3aRF",
  "key18": "2w6Q6yjsp4t7wSwbp92bUP81tgRnMALDCy7zFWtbJoneM5NTmZ9TDhxwEw7PG4JKCFrcPLrAd52jTCHjPFBj2AkX",
  "key19": "3hDRtnSgNFkx2BY2eY4JHL4NDV5YBsvgmyr3pLndPmK32hzDsC7aH6N64GUtwvFo2mNc2NNfmxXp3JhtBEttgjD5",
  "key20": "3pjtAp1ofUqQQd2TyqrZp6zNXPPZr7t9pAqnjVgdPuoVfh5LXcaQSiQrESuzyUK2XktRqJkx3cx8DgSVG4R6tgZf",
  "key21": "371bM15tXEyu7AcYwqEp8cCQW5q6Shm2ybxT5rQeEKipkkBsUz4HhSbqk8SFG2xGyaHu15KgZ944rWv1RHo6MZ3T",
  "key22": "5ZB4t2tqBFSJ5Gsjp4Wf3sZixFdZPXjEm1q4cNmDCLAYvVPmwosbyQttNaGkeSNr8eWWGoqK3caME6FCsR5qzJk1",
  "key23": "3kENQXoT9a9CtydGLtNGEUSMi4EnU8azXyJszg5GBek3GYmvDyZT2LWCGtaDbbiT7UTASj8ykGTMzLPmZUaYyUid",
  "key24": "2RzxeuujKCanP9pZHnTWjx4DLkPADRo16pkR6kHJfmzWwQ8HdaSWrrQ6dXNN3ZWRjomyfDLSTo3sk8oDg1MknSGL",
  "key25": "5fXuBFv2YoUWKdwRKzzjf2UpGFV7hdN5Ef9Xj4Fx9Q4rmARqeNmZdPXoUmnzGhCSHuDiM2FLU4FawtHBKuKEcAfA",
  "key26": "23DcxRXxKbuaH337XfV22k4dPkBvDSrBJgCCySy24uqv4BmYY6xsVh4ypaUJcMvvYrL8KkNsB7FTr2VFXAdd1BUn",
  "key27": "3CeC8DeqDuRNwXVincB9kvS6NdpAxJDPHpT8bVLFxWJdh8sYE9kLpkFSVR6t23iSAHVnmBbeRpLYtT2HceSMz85e",
  "key28": "4iTM5zXawB8DPRipy2r6gJdmxERMXfkREkSznnK7BGT4JKaEriQpTCbN8ESbE9kxZviRi4EFxaruoiv9Diu7VHd6",
  "key29": "4D3Lg6B11B8PbayGgSERLxA4u3vM7nmma1PZWCC4pwyRZ5E315jYPVBR4oFc1hCXvZBgQygqhbhLjj2wPDqfFvbd",
  "key30": "2A94kp49k2PZWv62fKF9ri6JJbzu2bRoEahHvgyEwRGi8zx9bmvFWh8rcqi7xbkzPVbAtVh7bSRgznqyAUcEEhKt",
  "key31": "vtEezCprh7AdcF3gEus9msA4a6EA3kMr1UtYsfiKd4Ddi1sdbUcxZ9H1BpcYbZLBTdhhpxp2WN2AKCeSpRDLs7g",
  "key32": "5SWA1RYUNnUkhRcXawckmTa5PiAkW77nrykfQSrfhDmUGtYvQ6Ztqq3H74fCxsnTcFifduW5ammbw4LyKY42LgTp"
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
