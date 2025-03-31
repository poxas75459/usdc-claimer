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
    "3tKvCnip5bR2NFhKACgmDeyaCJPQ94P6kUBmGLxz1NWgKUqJZwnDej5Y1JJGoy1X31cZDcHVnynhmKctt5dfFDjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PY4eyH6ExCADqVYEQy8bJux9738oxtKcq89Xp7GsjAWyaiF2FSJtqWoWzdfEmG9AjKq231DdKcWQoTh98CM3hMR",
  "key1": "4yMSBFtV35ToTkEh7ckGcWqhErW7QecRu9KXmfc1gfE8FhqMJnTRV8Qc4Kz6ECx7y3TnGbzwhU6fDZbPxSaY3sEH",
  "key2": "4hD5YBzwRKzT6Ay5kKGXmyzsV17VEC5ZAoU2h9iGKrQmBpj52YoRVb6QNAb5AU8Ti5k9YsAdVNHo3eTRC3vc7Jv8",
  "key3": "4FfG7RTHmVgEf2NrbkRiuRQ1LwQryJFwLGcPKRh1YaAk5vsMVRGZvNbobAdWzymJpZpLuZehSJX6UdgnjCHTyfH1",
  "key4": "ZvMiNiE5Tnxe6ZQpwHaAfhpENqsLvniRey2z2NHYfU2RR8Fh9ThXqSno7jibyf45EGQa68GYaxh43oS1kjkxG52",
  "key5": "4qNyb6MgDSP7BXbnP45PdqPAyL7nKnYfiyPPBfierKNpA9uiNUcigdPhRtnQVb3gWpPP7evFXSNHGxDeq7aEG6m7",
  "key6": "3on77Q7XYDHFk5hoaTbtQt8didp6dZbbw9Tv6B17PP1HnM1iSKu6XNNZw5LdagsZQXFzmuxJ1sPumYhZBnVjnupS",
  "key7": "2PbdqYRgP86HMtsRp2cHkm1zU4dERPZnBv134WqMMA8JyVfPJcshYmmkqESzakA66Kr2zLrJePdyzuwNB96rP7Wj",
  "key8": "62VpwyWqsaa5LUN5TH5Xs9YKqmpxu2fsRvxzM56pFUEwzLLRwE3cBQ48Qz9VNFaYj4Sy38YrSge9tnNXcPBJQaSG",
  "key9": "3yjBb1bWjbMt9XUP4VSGMKfprVJDFQUDp4mfL7StamXY5wY8E4RihDaJEC17MmM48GazygfMWsXSdc5jSJQ28hnB",
  "key10": "6mBWpq4oUu8trMk45aA96z4Dj92fbZotCJSVYGSRvG5oDoRphUSFeNiNAN3ejocirsrc2TrXDBkA6pD8MurTRJR",
  "key11": "5DzB8GHfAUNTzBQyozWJMVTLjWiqkwYywN8hEe4rAwxwE6xndCLTJdhbGQ9BVRMSxDm7hyCX53CHxY534hVVtjaU",
  "key12": "2Lbs2GtQ6kpcssbohNm7DVHKrZ5P7FmYsbfSAH46Zpqx2tPMvbbS5UkCam4MNSC4SxQDqJdUwTmSpNa9KJF5vkL2",
  "key13": "31VqUsfbbMkDbCuin1ecXUCPMJaAE4Z5aA8yc2EPdTDjtBG8fiB6RWbXvWFyxm9MPVS7bPWpjy2YKmQwot2Fo1Zr",
  "key14": "3Px8VB9fk9gyuwLoG2G6y5bbvC3s1k4rZu8QaaYQmAw6WAb3FXAKtFFEUWsysaAhXEQDnbdrn4TLRL7PdmMQMct5",
  "key15": "29QpHk2YsdLp7tyHVCbptVDd4zuc1cqcCTghAuZkKkR2ixeexsKHysTBcCD9d6BFV9K1iqnTxyeNnK6cLG1RoLGP",
  "key16": "2NBMsmKkaUYzNAZp7xfhpchQgDbboEo5SXba2bqAcVXJjwqoVU4rWrMHPVCRBXmxJXTjEohDzRnChCaD9hQP6Hwx",
  "key17": "4W7SWUphwzErCRihXjuKdpBRJep9jdVQW6iCxti9rPsmhtVcJdiJaAdBFgERtVYzaBGoz4ThPgNQE8FTFSRevdBv",
  "key18": "2Myv7fyToWPAF2pgJ2TaabNMeXnxUe6vDbAwac8VRnb7K4fJaEJQgcuMM4YSgzgPYfjaB1DgdxkLJUxPqRCfowjH",
  "key19": "2oFXNML4EVBBGBu71jF8x2tyvS4wqkppAFKKur4mQKTpHvYyH53SbLhJmst5ZpNYfGoajJZNcCTiG2gXnm8n5W3w",
  "key20": "34k4co8br7Em6n6MtpMHeme7xA4aJTh8evGQTx72QHv3pqg6SWRJyGqYDTmveKgwrygW2f3UH1msRjpCV44pu1xT",
  "key21": "2WkVN57ecFqmY8NBD8CUUUP9GheBazcDTuR1WdWd16B4LrviNum4KEya3m2zdqYqfL1E2Xv2Mf91TTMYvgAjxZK5",
  "key22": "3gCXh8jkvCpcFxbAzBtP4JEsgGPuAyLPZB7n5Syz1NkBHgYyW8TWrycYdZ1sBEoqbEhBZCQUYi11VyURhvTW3KoU",
  "key23": "2xfibySR7kjDgVZnyADVTjr7AUQxLitgPqMrV1wrNVsxHkxpBhiBxpXqSeoSD5CW9eN4jcdbNyYKy7CATE33ivcZ",
  "key24": "225yeYdNEo9zihjyPuetJtPkiWLfUhm1oAX9uiW76VoLjeFJFT1Uf6UrriwspkX7uhraS9jAk6RothqmYwyuCBQL",
  "key25": "TQ137H1cQowyY6u2TP8Vmm1Xc6t6fq84JrgU6DiBuWweEp9Xp4u5wgEX27cEM7R5Cns9vvd5cqGMFTJZKTAEMRd",
  "key26": "3hr5uAhUKQRMf9Bq8acjmJZs9YYiu7VFghJYXkDnAzUHqkA6zYYA4uUKYjftUUjeY91nteBvnxs9yA5awCQg19Wk",
  "key27": "56DQQ2p3oLTXe6Bj4ixjVe3yChsammPhqsTk4GjfZyEB5EM38cr8mBxsiAs9HMgSXesprVnVcGrmsaZSbgiJhekk"
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
