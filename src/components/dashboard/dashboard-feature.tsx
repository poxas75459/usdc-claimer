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
    "3RsbATohYYFmS9LT2Eg6Rmhh3k5AhckerT3quJLRrPz1zkiMDzG7caN6hVFnSdakCR3FZVZY6UFCVPoYbjBCxtFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XvsZhoXd7wKfiuQMZVxhtTwcHVmArvtGZ4V4X4ECD8uNDvxxukYtQpZDLSkxTHW4KXNre78Wq5DKQuC9FKovPn6",
  "key1": "34ivmNgyjGdWvuPvuLjRsm1H5HGFEk4wF1kXnacsebFFcDXFMRDiYumj3oUW5bcT6PK5o1FwqTCQrZESpJFwDMsa",
  "key2": "2JqXz1ppHLZmVQR7K6SC8ssQ2aALzS7HFWbNTimFubmypKf7Kz3ZmnpVXhr7PMjsyu9TewJxs594ehnijtpatXga",
  "key3": "2H2UrVyHc6am9EdEAJW4HnKde84EpiU89RooXwAyeWkPDRtCoxo4nA6xjMY2ffym3hdiJccawJoWToEXT1PRVUQK",
  "key4": "2hq1jNqKf7VXMU4e8ZykByawQLTNd9KTEdWRzzVXwDjfpnTMQFJEigxxvbQ7o8akXh6GBmce4q4k8ZfPaqXVnUzT",
  "key5": "3Nwe6dUUng76jYVvb44Se84pzECktUUzyNPdFjKdwThtvuC5WoWtkWHLm1FXoY5D2j3yBqtKogth8y6YhjXUUson",
  "key6": "122tdbw36MYhDLnnwjV7VefbQrJkpPnGwrE8yGLd16Jkqt6AF5S4PkhYNqjjS5fKHRLy2MdvGVgvc6sR7PKRR585",
  "key7": "8AWf3ubfRnZ2V4N6wgK92JSfw52xaAjDCr3qnty33Mcpbu18rEpw7LJJiEc5hyfXYLAbALv1qFj2k9VcKiwBaeQ",
  "key8": "67hTYQfJP3uQS69u1aZoYd9vNCnaezEF4eLmBpVtVcoMVhYD5JbRtvtvfwAK6arSgVN9zkzEJuSy4QBoYLuVRXUK",
  "key9": "56V35h7HHCKaeXEHqv1NPVTu7mGZBywfLADd6Pekv9FnrPCkd8WtMSXPKFCXTBeiHHw7ZrdXfog5Ut1BuYuQ1DMz",
  "key10": "c3GaEh8T312QUhKp8L6FBuUjo6K2uHja1hg67EF7LFfjFZHAsEUjkrsoknn8UKfDiSS8k5MjqsZt4JZ6SYs7nMU",
  "key11": "9stHLZcoFftwT3N2UZ6aZLk9wwADc9ZdKiriLDfHmC6ob3bmTUr3KgSpJdQXYBjxoSCpMwePqvFskBqWUFRdFDB",
  "key12": "3QTGTGC4pTSU44DBVUra7EBFZWhjzk9bVCgaxsaN9Zm6mmmNdDtxEUnmvV8ZvwQrCphoAvevW5zAvb18za6AQDLY",
  "key13": "5SqdAkaBSkAQ6GGBGm6pdMAXCEpANJNdbDzGUpTVwNzwpJrCrb3uGXSdekFPp89eibxt5yuf7asBmq7Hpx81WX4C",
  "key14": "62EY9ZZh71qe218hCKCBHvkf1HZQzKF5hzDQzxgT6s82bSJCyQrXFwoJKVEV9yfUQA2LLFQWa8fGcr6Vo3vocGPv",
  "key15": "5zxCGGBaeRMSau2DPNqEwwDxTGqaDQ8h7srRGk8XsjDUJE4RSKUSU6AiCubtWJzSujfBi5HDHYjacSQ3FV2YHiJR",
  "key16": "39z2gU8qcww4AwjDZhrYYccGewnNftoJBJzKBESZgmk5CnNRYeLyv8oNE9vHRrYSHHrtCo2mftPXgxnusgmExUR2",
  "key17": "3fffXdjB8X7T1BShBiyk7huqjwvC96uQHMwXmsexdtRi87GsvMFuDTpgNy6qRzieaCu7hXrAhSuYjRvTUEciWfSA",
  "key18": "dNM9JSn2AHQGR6wubJv2dFz56tBpKGaPHjXwsnc4dHPDuJY1BT7CDkhiyMmdeNWUKD9wqD57H9j6Q1x3fdoQ8rm",
  "key19": "2L6UYAhwUPwB9gNsedg7oMW4KWTVW3gdButYDvBbamJNcKxQCudG67XMRQKRPwCtGKcrz1apv1WFFaYvnhg4966i",
  "key20": "3qmv1PqrPK8PMvvFjRoFcTRmEyCjcSqTrQGmmCvG2MkTHPVHvgEHRuqkDWBDNVvvZCKzDsJupoxVzq8kmDgpWU1o",
  "key21": "64Bx7NFGrPpZS8bxw7vRDL2CuM5vPQdBogk6d7j4jQc66bqtm6RQ1dx8zCS1qPmdC59W81vQqYFWR1V4uYNYejwu",
  "key22": "2ddMAw7Z1PhkceAQhf4GWpugFhy6SHZSRJ8j3iWnL9zdhc9qXsYavQNpybHihusEpz9WAz7gsEZNMCP9EodUKkup",
  "key23": "54MKtZPfHpZSYBo5Jb7U7LQHLoMN8HVqXjkkRhhEvQ8BAD5SbD4z1qc3Ef5VfChEFJUUmyA18RG4Snxc1m46a6wH",
  "key24": "3syVLg8E712xsH8bPz8CmNT6CCAJuWp5Tbe6TuJnpRpTs6DkKgx2AtsvDBPannx4FTXEB3ZAkASjUfornA9NCTwp",
  "key25": "5wdUNrsPSsNMPzgoxxRBT62171p9H79cAX1a8aiAUAqVQwweWKrLrHC8yjegL1Jxx8ZD2YMqXrTdq3R6cu4LJFp9",
  "key26": "oQpGqmYAvNhRHBtCPAVC4kAfZRu6sLfwAzQeru8qWH9fKQ17qrxzXTc8NBsuR6Qotm5uiaJGJGsmYyVNHy7z9vs",
  "key27": "4e3VhrXgLTQFLAuQo36aPc9a7DqBkftMLuPR64VfkAVT5qtXLmoLVb5TSFgBtwwYSjubTsEdTL9a3ngttc7oDfwM"
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
