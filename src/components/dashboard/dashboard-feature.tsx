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
    "feYAgLQe9T3XiWa1hNVNmcyegoDdpvqWz7UpPBeUvKbZ5815sakMsHuX779MkRTQqs3x6A3JXtiYqyLdAmwuYuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488d6jHpbfDPGuysVzzFU7ARjxvLzkF41y1NUY3SiCNep4EaBM3AQAsyHc4pnBKQ1stkFRkucf7WFiiRe2dvV9DJ",
  "key1": "7BzeGW1FNP47qoNrQ44zaksKR2fXgCSSp2x579UcP6Qg1zfKksJayH3ZuUxia86NKzjiADbwnfdnvrhTqbVctku",
  "key2": "5imj2a5qqh2xb4eueNjxoLnywaWG8AieL3p6WgSu9PPr6mNQppBbt9yE4R1pCcpycEirpt61KoxUBWonvVcGz9Cz",
  "key3": "5GtSzNjTdjQkiYYXxpspPdnunm4uXULh6q7uRRdzztYc1QJcFZnbFpXiHRMNPmzsbrEvv46rHKBRSMsH7GUjFKqC",
  "key4": "Sm9j43reepf38paxGbUfJi4oekNYSuTYfGu5VJU7uMwCiSwWvfRcEoyQinkCCknNyKWGzsTXwoyiEiZL1siK2JJ",
  "key5": "5ctcmFXjfqSFEv4y4X96iudVsVXjFVwMKSpEKbvixsJkPGPNGKNjjQhM7YcqQk3Kb5N1L7MtZjFjCJGdWajdTmDQ",
  "key6": "4emm8aCZao5sDfT7MAfS935dcWyszF8PfgWFuK7UvoCFdEwhgQ559aozaYsH1DHdNn6izhPajNMPRLAL7odZ3aUT",
  "key7": "P8yWYd2eLNBECGQfxEy7Gf9nHsrVhkYHDb66KhDxnzm7NQHKs2eT7QSgModenkDeDbv9Rogaau9jQbAtnxkH6Mq",
  "key8": "5RQopGSXzombCGCsjr7A2V9jVVVifPfxfp5z7RQd5XWi3ZBNYf5w9Q6AppR4eBnGpQkFFgzPttUHfDGaxw78X7n7",
  "key9": "214z6LcHusMn9rEYFJq8PMNAEZJp4YfAujyrFxJCZYRQzPBUH7RMcDGxLkHanH4Doxh67Ku3sogYePRsKyQGdcG7",
  "key10": "2gQguw3WrmDuDYtMf4h9g3y9YUDXUX5sJAihAJkqyXgRfM16if7DE3L3JCJw6UX87eukKpHnWHsGeZpnQSGbQ9wc",
  "key11": "43xUf8CfQJ1EKYcm6UMxWSPpwVxn7SMngg7bpwB7o1xncYhgDsoPAKnCieuJzwBDM6CDGN7nSPzX3gaiZB2iymFt",
  "key12": "4TxaG61kknTpGvqvHsaPHVCBvdFss7qiqS33bDAY94Bwfihdkn3A8vhjL6Tw3GumHnWVvcWsUKooNyLJuBNayVtE",
  "key13": "62T1pJEwW7HzvRhnEJhwnU7AJys5q1EppsHDd1kF4Qb8MBSvxx6vwaZ13u4jHc6vgg851dSXGKzZSvVUxRBahtiZ",
  "key14": "3TrpPMPmkBVcqAda1jvREpoiXzqjNg2X3a7qnhMHw3av8WELGZxhLcQXvWvqZzAHHaCHusyVywgxKejWrZsiFV3q",
  "key15": "4d8GAfmpfy2xq7GeuubHzyecoSXrg6DKAyAXzAC5C3VrZDqGQEWhUgDeLhxEoxHdkdJnbu4ynx31U4JkugQd9jrP",
  "key16": "4LSBbCLQwnY45Xsp7MnCuoajLqP2uTvatK1j1WseKtAJF5ps8DnXFDcLVWR4bkgfADsUadbVjWoj9GjQ3Vdk2YMp",
  "key17": "5CtxZVDjSsqp6uHs3QEJ3Ub1C1AvqRKvH2kSVC5F2AaPnQPttF3EW9KVc58Ftqgezj1B1a6fjMwhipf4Q5cjngEx",
  "key18": "53xn3GvEH4N7SvU7xFbLYhDH7cCc4Qm1DpaD4dooRS67JTaDNkoJe6DjE4KgqPhQXCVmFwyvmHMNXMegBotY2WCo",
  "key19": "5Wi3TmADsLtUJTKFHvxX7qsxF7JqNY1WjhErRd8v3nnj9MGgKmys4WimznHrEDs5fgdxSiitwg1yo8PRNNfLkZjT",
  "key20": "2N6KDMvMf2xhWHbGcxXommwcovYxvGjxqQgJD1mm23xH6GU8EzbahBqDP4RV6ksWzXkzFhmw7n9Gfpb3gHDHy1Zj",
  "key21": "4fbnSj6qpSp9eSzioS8EuqL9J71AoDdcRDNyorpV6UYh7VFMLoA8EhX73msP4HGzha6vTqS9HPto6PXtUTiw16Ge",
  "key22": "2FXmncEXgv8Wwd4SdL2qPzdTFXYTozBWg1gc3T8W3b5oCGykn5dkx9VjqKgrAEuh4sy6jU8twHXJ87hJSPmobQxE",
  "key23": "35VnoXBMNjY9KJxPTmaKpxU8bmcnp8sfvJTguHamQWUswuvBey5RT56WjB3BMp9EjtHH1JZx6CxXGt7f5rEy1eNF",
  "key24": "66QB92ifKbfFAJYSGKaR3hmH773GjryfrcRu5DBmKCDVW6x5fQyeR33QShS6NaZLq4Ax8Fgyo5WFpm4mSDMJ4i4H"
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
