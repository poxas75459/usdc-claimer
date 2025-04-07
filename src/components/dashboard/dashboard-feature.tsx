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
    "2ymWXUSdz6Ui8fSd3xVwcPoeXeUogsAkybcyYToswWiuxB71Co47W12bnvToiuCMDPRJxLGJ2FgsBDpY72HP6t1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmASQySvoLayVXV4vGdvAdvhE2PDRSb4airNjgUYTmiXmEm3kSsfLN7HJmVjRG4Rqo5V8xECXL5RLB7Z4KF7GZQ",
  "key1": "5GPfsZxc9aFUEQy3UEym8EigKpLMy2MS9cR3RbH5ucsMXgkvPWx1M2H82SrLoLsfLN51jnj5FuT3wsZ9LyevMJvj",
  "key2": "4Zu97q8F811zgbsEgoZRGQTs7rXjcdhFbp2BzP4Qhk9J6JosucDa2vFb7uWWH3ULbhmmA8F3dykQvtrDBMuaMhYx",
  "key3": "3hepoYZtDP83CzjfSPYjPxd7267us7W8ua4GZsrMSwskYaQuHpaYrJJQfaAgcPFKATaMkQgLrHayaF1CshHb2sRt",
  "key4": "5g4F9hv9HGYsakrzmJkygbVGZKUuC2SS2frkppRtYoREE9pKC1diETXEtDh7aS4oKb2JARuHCFgFHUexzwbVvqqD",
  "key5": "BiX2zNkXGoGcG4wUcQN8zeE2hZ7PgHck8E83w5HBQT8zwuzaKP5eVUcmoT3KmrhExEi8AtYQxgrBsXqJ6P2qrmB",
  "key6": "47Jpoa3UjmyDGpgqkvhJbvqDJkp8LpBGAr212GVAqT4tNjwhQ6z4fwQ9F5g824NWXpMsXy5pKRpwkqZKqkXs1mCq",
  "key7": "4UYivQbm4fU8MzhgWLjwDfKbmTYGjPQcLwMMRwRzQQe4r4vbpSeJJKScdTkwqDNayru8VJ1EwUZFgLH8AsN22TU7",
  "key8": "hmQfiaHKUoJZxpy1sBCaXCCmCvmVbd8cqycTjoChMKVJUBojkFBkQyrtE12W8hFiFBks4L3eHioiQ7aiJAiqQ9J",
  "key9": "4fMyMWtSTNJZrz68kWPq5wqazaK7vXCkKrKdJXxrrNQPSf4isUPHMmec6NRYihyEhrCVkejYuPDYYfSthTwdeHuK",
  "key10": "3SP3bEiDGgxCWNgBNyfKuEAbyLq45QBTqDB1Ni823e4RP2kXFm8w2LVZRAyCnRh11ZcLezT1vbrdsr7vKnPAqtLX",
  "key11": "2rLTXt9tLkAPpKa8G2dFYHEUMm9azg52F6BRZWj2tXo7AQcEEzkToP8cwC4U31jGFSPUABBuTznqUDnTNi1m6fhF",
  "key12": "sGgwXQd2YWjYqf54mEcVP9HAopCY1ZAAhU8yc6RRCegQTZ6WW4gk3AgG1CrZRLRhSJEGBRxmCvMHc87iYjrnYv7",
  "key13": "4SXPAZa5pfn4vryCvNHG8YqcoudZUuqYKzNQYNZmsA7N4cYnqNcDFFxdw9nYXMhCWTQ8PHHUABMV41Wf8yaJMXTh",
  "key14": "53GWYbQqewMCKzVZt5w1h4txmyDVb4oHKSwZkzQ3g7PpFqDXTna2V6a23KkafzCBGyARgZZG5vLnwsKGPVk8QPbn",
  "key15": "2Gm12xYG6U55AzJTJtKPMRey2UX5u6w5Cj8GmmFM1tsufzEf9YVBG8mWUfkPNQH8Vi8DAFTnAATfHnzUXoW2xLnr",
  "key16": "5yxUdbcgZtAqrJEAqon42vQxBxXV2MKvDJWkKeUzLdkXeGwfUZVrMDsQnXacx1tugPFe5uspxHmL6Qqj6FcdkzEE",
  "key17": "2pfQZy1XbwPM8Z4gRQ64JYHhPDdeUiqLJcpp9WL3t8QdN5NeULJWT9SKZBgEzzKJnBPtdo5DCr8qRVjvtKi2j6XR",
  "key18": "2a2RMa96jioA6dsEcM9AmwAgVKDLJ4HfE3BLNAnnmJPhXqhmgDsitkDoNuE58VR9sVb6muJpyovJzxuHWRw6SfqA",
  "key19": "aig9KEtWEMDqXiewj58fu91RNFDpGBR4jL17yuydRjeYsVtcw3zoGZAj9xNitnp89N8vvXexs2zN6ceAs1kTfRv",
  "key20": "NByEWvLFwY4LXN2p3BjbBX4qLDb7e9GKT5H7iFz7sb7khgWearbHYUKsnfCkhcJjCZ8sAK1QsLwJGMQt7vChbc1",
  "key21": "2X2Mjvm9g6BBBLUREJXh4C2v2uAjeHRv3UjCM5kuCdVmPsn9b5rgmZh5qC2SgUyeuxMsVHwENstQbs15HBTYVAJ1",
  "key22": "2mj6NwP5b2SN3cKwg26N7LhUT8kpJNmYN4JNwMteVLLsBhSSuEgZo3T1Cs8BnR6qWBPtP874eDMoPLFknyurR5z8",
  "key23": "3rhdb6EkrZfkZdNWB6TVocqj89VdBF5EMMPd4pdpCZ1MfXYCuagvA2Pq8TnQPyYuZDbFK4nc5byNcUcQxhAnd6k",
  "key24": "3UNDcpmDmTtpxNTwd3q4noMksnx3BvmSFXJHYWEbggJbm5vb9v3aSdZdqoqqpxQ4DhjVxefvSDfHEZ7bM9ZgL5wW"
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
