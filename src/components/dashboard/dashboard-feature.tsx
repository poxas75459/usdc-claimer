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
    "5C2xKMhexz8uLQ4555JVe3K1Ea2w3DVURbFfJAg4op2U4ev4c5UafvMHbW9LeoKNtSn3qy1YXGKgL9sri1WWdCb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PJULRwwUKePw2sH2jyaaoEw4ZozcLsFHvbFoFCZHXbueKAfyF5p8A5ywwvuvtnNH6r3qVN13YCypJb5LCdNHgy",
  "key1": "2ieL41wokt7V1BWMFY6Qx2jjsNjhYyeMxzXgZurDmyAigpDMnJGPGTx1gbuHhdpjWmEToHr3R3bw4eYEgqs957CD",
  "key2": "4c3A7uxY4cihk5VFynGqF9yBbFDMmowc58ogKUzoH174E4DfsqgiyDHUjYjLzQY5MzBHhckJwpbLg33zZUBjH6uc",
  "key3": "2F8hrukNwoZRXyQZxPxEQwF2UNpv7QJxxocTXivwTJF1GJFbhWajo1PT6PHMjsDkE6etebqUnnxvPrsnooZ2VfaR",
  "key4": "3VrVc5u7xfcSsq6dAmpxsD8r75rLmSdHmQ665iUzSMgdAKPEEnkKQB9Q587iDQyNVbjqXtE6dRuEwqb9zbhXBBLb",
  "key5": "fq7Q1TLY2eScNXeRNKtp1chEVxBG1tDXkEJ7euNw76e9pXgCkPNsfRKMyjge4LdZFwJSEMyXD1i8vXcj7u35jBd",
  "key6": "5pBHHGhukSDCGg5gHhEKi1GBuyRFJgvqvSTrMziyMZBfCBowanMieLvtBhgwzzuyi487EtvdmicCvh7uXXF8NJfm",
  "key7": "Q8QtMBN54vxhqU8FCWQdi34A3JWZGUesZ3vNB1LZKb4d9N4JcFuoujfbAWtjdcP4jzGDwaLuzGYMRkp9cCodbNK",
  "key8": "3ncLfa9hi1npj1DgFDPreioLeX6GyHGiL6aJ3ZdCCYjJ2iXuF4WQJcngCFtSDvL8coEjw7zY6zxR2Foc8BMio2F5",
  "key9": "gqQCYDtXMeJ7Jm5YWXbWJTLou2joWB9Z4DotHPo1bLRCBi5tPZC7GLNfAcmJsowx3rLhmptzwNPp3zoH8bY8KCH",
  "key10": "52PsUZjdXpXXdDYTsqsUhiAfpg6kBs2RQm9vqkF78RExMcTsTr5qUZzk7fST5g4NzroKViedKpDJ8hWBa7wPFh8o",
  "key11": "5mxS2tWKg89V4j7NwNNFhhnexfA6QA5HQiT2VNBkPf39D8gwRSTEcKmi6aVMEPV67PRUFgvk7MjQUpBFfTboZEsp",
  "key12": "876WRLtWZ81efCvGf5B43wwLUidvScdeNp4dZRjBFFqS8AqtMwazfcW4ahBzaTU4ayaStweH1TFBeR5MbJTdA5n",
  "key13": "2UMY38Hp1vY3EWxd1QkXwUAtuY6c6dofVs2xNYMVXo7Uk6myZhHrvMddyxy5LqMNdMx311TKaTqDqJjAY6qeQGLP",
  "key14": "guGDpXixFgyyeVBRyyJgZ5b3ifzWiLcoUTiW9tL5CWq2zaC9ThyDSqRdQXhyD7DvSoygbcksVyT58eAREq7pPvC",
  "key15": "5wAwvyYQ6dhMCP8FfWFAkNK2Js3C1DWkwFmdvBx2oSusEKS4rRpGP1zeaRWx2fzWDdMeAAvugFhRZiSxATHEKHZu",
  "key16": "2ciy82yvRoGMrTpiNLXsNQvhqavt7eTE4jMyuEoEwnEC9fEUbSVWRdwWxdxbd6aGSPeiiEFSxqmmTurtERWLE11i",
  "key17": "2QQm7xqkcpij4Lirw9zwPmJKd6fGu5nt6EssMRxfRtmJqp1wfNit5wjUFcHmaQh4vDxeCzzy1gCTDkHLSmRrMvVf",
  "key18": "2K6xfgjSNCX5U47R9z2cKDxNXeeXopkoNLHxVwirptPzz7XuwMrpZeziwVFwv3ZzU2MY2CaSJcXxF11HrrACickp",
  "key19": "hKiw6XEf6MkkXMFrDLF2NAnm7V7uvnooDEsRFuq9Z9bgkbN5Betxh17KV9qJoStywoUdBePc2grQ71xBsktRD1p",
  "key20": "31ub9BiXgiwbWSCGuMyxmzCeYfJEtGamwJ75pYpTsYMe1DoTCgGHg2ZzJF74u3i9fzz7CKhjvxiJamHHxtJYTHRo",
  "key21": "5yrRYaQECGnBjzAzq6KQPkBsTFaM4mEXzw87DBWqRJPVgqr1RzpHGyhhvEdJvcsrx68pT4ErJbXD16gXGfJpEVnS",
  "key22": "2PcqV9gyaQ3ZvCJ6Wr3ksbtdFk57dDH1pMu75KELkrm6oA5oma2zKYmmxrfFnVJ6XrD4jfKcuLNbJ8SVCRWurL8p",
  "key23": "4jouKAESvFXwF7FyqtHZ4aGznrH1sZbKE7wW1ywhEQLpsid5bWLrRMdi5Lt4y8RMxyhtZ2S8W87ESVDmNQM12pXj",
  "key24": "4yxKRLV3KnxFLdwiBNq4VWFosDBq7U9qtFaWE8n1RmZJk2XehY3ddiUTqsJDHF8zpWtJzXmebpcXQf1jRRMU65D9",
  "key25": "TzCguXdCJnH7Yk8wkUAyKGhbcmd6uqSqDW7Uaugzwp4PU6gdSFLC38CLK5Fmpw4q19phUXp4K4grCd7geJPputD",
  "key26": "4Q8sDM7W19GtSoaSuc4LYERo9cGAVMSKarLGKTiZD4L559C1yUc4fNLnGX2mHXRA6zkMRQqFebT5ts4FhAArz4oZ",
  "key27": "31zVccutAc3C3vfQ9mjJzWEaWBKZ356gKuYsPaeN3T8AnA9aRZgKCDCH82MsZpQ2poG8uXCXKcc6t5buE5YqfAfb",
  "key28": "3efCUPpACfbMZWUFLFCRh4niqBuJhMGG2E1v2Mk5XXu4zVpcmzom68X9qYoSPyxQASMCvhAucvgG1D8iUj4AYfoE",
  "key29": "3RXB3ysgPNYgsnb7ZVMxmbFf2Jyzd8fopVu99xcxSuMaux8Nn2qCm7SAqVbArwpskH9PNjS5LhUvaA8sJLw6yeNw",
  "key30": "82d44VYfdnAFxebaRDaBXqB2wmE27WhX6wcJXZ14DTYkakhRgc4iQyARZc3oHaP7rrMUiAX7qQQREM1Qbr6FNS1",
  "key31": "4X78JU1p8RRDZFNzn2B8n2Yym4nzZJV8ZXd7fv6puhcBFsnv2gX19jrRSo8c9W1nEdGurx2UGdz42mwcvEvK7Kcu",
  "key32": "4b8jrs5aLwiAwAhdGPtvwFvWLeWDC3b5Xoy5LcFryUBPDDXx14gRvetFJcNCvZ7SdCqZmXTFsqPGG7e6UbiH3Mqi",
  "key33": "4vKAYeGbPipzyx12kLzA6tZGwJQMwr7XC6Vzde5Li7T2V1wQSyoDgSm6ivJnbL8kFLTCYaoT1Cm94M9aq3iMK37j",
  "key34": "5a9dNGoCm2hCdDNNaxDuFDYnM3UVNLmMvNkpyvo7RtYcADZt2kKX99mBdFahWAdse3kJFXaq7CCFTH3PhdpYHsJ5",
  "key35": "mEm3s8zXXxxwxGVwe5i3SrvcWHZksB5fMesUzLvDUfKhFJTcZABNX1ary8CQdiU8U1ypPH9PDip4rBH3VEhjJmN",
  "key36": "4pXNz8bypcP4vBeGnqeaMUyK4RiF4YM2uonTJd7J1c5HzGAdoQsJAVE8yCcEvnNoAd8Uz2oU1MB3s2GKGZv4RXW1",
  "key37": "WsXnGH8bosDFBGhkKBvv2SxMdUy2oMutGM9S7WkCrLY9huhWGcMmqny7wSggYtK2FLGUiRNxD3ttNb17Lt35ZQW",
  "key38": "2gQrntmmZNZS4bcFXu86R1HkEwAjT3iGTK8aX62JUdr7wdeVbB2Dm6uvvfHmqgckqTeBWFMQnZP2haDnBoRyiPXT"
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
