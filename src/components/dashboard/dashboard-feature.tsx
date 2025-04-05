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
    "MU2HF5Mj9jNgRA9fapVvfu4Si67uRYipXdcLtza8AiNfFhnzvE7zsiTmXvksCaoyEypsDfmobwrdB7g4H92ob7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UrrWzBwKjzJ38NqiW9ccJX3We9shRduzhpVKjqhLL7aYuu94cPD5ajYTmT6rJkLnTqbfiKFbQcKvEC5c6fsnhCp",
  "key1": "7GqUAGwGsdhoQ4u1uvixY9qjuP1ydcWcRrCizciBs2R5oShFfJx5AJdwugnr44gtHEYUdKqr1kgnLCmso9xi2q9",
  "key2": "24rirHfkTnu6mkX6B7fFLCzGgV37A1Cv4nqYjBZESfzxjTdy6iNd8Cg1Y42w8hyjt7oDA4dEhghJt5JFtDPAvPwk",
  "key3": "55tKAv2ejrb6m2dev2UxVMpWa5139jgSfJN9kmPpoUVyki3ZB1wafv6yEUKAKTtZnzP8ZkgSXwmoySoMV3BFKX11",
  "key4": "3sdV8aSKEqv3YWnnksWNMEtq4CpxfBno5ZJrMtH9QVYsfyx8XmfaWCD4tYdas9hXZcmaajbikcPLFSCv1iViEGb",
  "key5": "2R9rYG8exmG5jESAceAAYNc8CuRJQtZf6ycQhKcx3NwXKVEBNNhWRRng3afwaZEFsCrPXuACKHCb8DcHta5HTBFB",
  "key6": "4afyyB9NTNavNu493qRhJSxHQG25MCJwb8VPy1rcssSKFDgoGgG1nmAFiFwsFgaU5awFjG73xjewD3F7N4J6mBUQ",
  "key7": "5Rt8vo8NRvWMurCWhmw27zBvzV7EK2wYKM1GyyTNkQN5v3jRukgMnbpvnBEvXg2WFKNHBMqqzokHdUhRjVRk15Tr",
  "key8": "4JarAv4c5gjhQ7iG6MEB71Wv7oezG27VgfKeFk3L6mqFsXJMXMQp5rUgZG4Ks1SG6vnkb7RQssyX5j6Nbs8qCyon",
  "key9": "3hZRxssh6V8nbQd6RDoZh1mVe1UkSYfWUdDrYUwzFKMXSLQerwKbDv7ghgm7UX3t3xL5q8kXZcdfZ9qHJw1C5khg",
  "key10": "4dGNEwQpq9QqH2Ui5pnfT9K7YPjWXn55U81nX7PNNje394RKkprgfn5PEbACrzpyqEG8zzrgTP7YpVbktLcCBbh3",
  "key11": "4RnBEwBQVWBjEGmJ8BRzcdTALbPGZqmATzpok4VT4Wvfw5w6XCRhPEEPVLm3LYbPWgpduZa9UYn7t92XGPcWone9",
  "key12": "4erCzkmsv4Z9ND8xDCWquzuGJt1AY7Qfk8CYkVfaH9YyE4cvd7udcKf7rkbChidxM9BhuVdc6yFh2AS9iK5YFkUS",
  "key13": "5fEoECKRvnvBc7ziFgosEWbPwf9mKzRVmoT5Ad3nYZ59YtCFa6mM595dkDi11BEABeEVyEBPUSgNNCPvfdwnYCPT",
  "key14": "46sGtCYUJoX5hqpUhLPqbPk7sVPZBpYRyjhzdCCfCiFRx8CnMZA81JhM9V39MQ1q2XwjAuyA9fN6JPouP7BGzhHD",
  "key15": "5B32RyBEobm48w3yivchvQcrqJxsay4NMoxii6spT2p94cDwQbmhkdPoD88U3aYL1K9eESCxHUiGkETdNntUdbMd",
  "key16": "aZoLECHoKnxHjiFasJK5FvN9kpQsv4Bs4hDbE1AnN8B1D78MxW5porPhTxWAZk6p1v1KpVCMSamKc8ix97m2KdC",
  "key17": "3CvFEBM9NdJRZKL3GG2aqZohC6ZTmo4GBVar72AqAmUPy27zHGWd1DTRQN1dZvWQMF9Rx6ZiKa2pCpddY2ixWwDj",
  "key18": "8KSoMU67vzKpfWjno6vUqekZDXqr2Bn5owMk4vqj1gRBXCd97ofLeytfYhwhGNnj1EKaieNfvCb4H7N9sLwjWc5",
  "key19": "3X9X2JAg6JgBxdeV1NUDU5eheMjB2CqmAmJFmf3W2buJaeV5T2ALSL9851o679PwSCy3H5SJepEU1xssHWU1gDMw",
  "key20": "4RALX1baPTS2ENHsFikpUqpYSfsNC8sKuMtcDE71AhMhpknQkKYNncwt285AZYvsBHN4ks4g5X9Pekqyf4MGhiQX",
  "key21": "22kiBD58PzNnfQjPL9N9zkB3mfdTAghPTbbNRYKKii3k7dUQgvh1ayDoamnWLiKRaEWzQR6fJTY3mCTXZjqkfurt",
  "key22": "AHJw6j7CdCnwcXAv3TzqTvjM75avfvjXeooUZgRokcdCYunJ7cjs6NQxV2phhRAd2xAXeR5fJ1KxGp7dBstKeN2",
  "key23": "4HyKKjjnxnSr3YUf89wLu1giXXNyzb1yoXFiKvw15rEpSk2gWd1q3PMZKzfL2Yet3isxt4piwTi9GxJgNm3REGK5",
  "key24": "23MV1EJUebhmiqaZ8z6KmBHKrz6So5s5aqPfyyGwmxbW9kpHAYStrXsjrsUmQYeJvSDLCbMj9p36eR5NyN9XdfFA",
  "key25": "5S4BS9u4QEBgWn5e6eqrh7hQLpeFNgupMUmWYHGMe4oJMueeCVhvckYZivZAMAtwxk6NGxaY3nhwCHEtsmgiD6Ah",
  "key26": "5bz2cCbgFPLGXUvjmrJjjPPbQo1PWegXbiVQP5DbWMfL1PjamMfgDMyvZCv1KERnsM1t4dF8T6Zpx78Ad9mBwU92"
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
