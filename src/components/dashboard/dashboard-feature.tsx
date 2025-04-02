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
    "2dMc24S8ddRZDhgPNFEwVeNUH4stQJcfGuo6PpVcRnUr82LJLAeDXwHRkAZL39FmuveX3XACdssV5jEr1xcxFc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qXKibBBEstByC4Bki8YVN3XS1ga3C5ECeLGr2YLABM7iyd77jQpjERLN67SoKnkF5dJtdUSBpAnVr3u3M3tMYsJ",
  "key1": "5kMQpRtRZLRVvfFaCM6xNhnjK6GS6RHADEf5jAJHwSSn2aVzTeFgtncTiK5bhMvs9gxRwjNrt4aDvxTisrtXjvxM",
  "key2": "2wtq6zdwrjXxrqwrzF9pFkmnsVN8pAok5oeWX33XG3ZhDd3QqvpzT2F9uJDBoWoFFQ8KoT7gpSKQdPJUPAdgGB8h",
  "key3": "5FZgzC8Cceszhf3bM74C2jagTFMETE2dXBZuSiACZzzsu1BDc5jkwMEjRRuzrdEsrM1neYCC27Za8fT8MLrXqPcM",
  "key4": "2enKzU2R5Px4PCwG4ixYnHWMW1QbRmrceAfmVpem4Nfuuxm7kuC3HyTH4WctLVE9c2JqhZxqtoiZXvpj2oBC1Gc4",
  "key5": "BWtWF7UqiqV6tFnJBbjzqzSehicUCgwSf1MdvJyp9pRTXQ34ne9DL7Jej4469tyheLNNNMVudDdJiQRJHfbwCWQ",
  "key6": "3MjiCH5mSam752Cct7vBu8ogSWZuj5ECQYNTb5GwUbFDHwcJ9q3KYaYcEUeMYawm2XGUKGtuXEWYeyvrNrZqqM9k",
  "key7": "mkSm4eqawUyVUyfT4wkXHhrgqMaaiJyGktSJmxKcx2QbvkuNfES9pkNP6My9yhXPdwiFsGeaVKBkHngSH7LjkyF",
  "key8": "5HomVy4ANKanbnjVkKpD5NMpX6nBkdjJL5BXQzR7x2EUkFE91dts35hiTWcjfuAoZ5ASgW49X9Zsg7RYQyXr2Q1j",
  "key9": "o5suzzqygJtkFovXnY68Ug2JqS6MA1iVGLRv1S1sH3bgMWYzzuehtSJ8ZeFRrp3q1QxeFUZDGwszUQKvhcSY6h6",
  "key10": "5dkA4NrwEhfujnMXQR14FN7xFLzEQSK6bpnaziG5schHXd5u9nKHSou9zCf4pwkVCgNNfKvWgtBj5KxwMQ6YJQx7",
  "key11": "67crcbyNKYnVH6nBTHpA5GLZ9Z5YU8U8uF8beGdvphWsD8ha7ajakKjihrCd5pXQDSN9KhpBWygvkkv8YsFDb5LC",
  "key12": "4vbn1USo4sTsghpz3CGMSZxt9ZSWa9jhNXRuTU2zJAxpCPdFmuJBwZagGgQSA7gb39TB2YKfuePFiQc61BjC4ir6",
  "key13": "4w7hr31AYxk2cpdtbk9Tv7ZWvv87KJXaChGn2KUq7kvrPvakCpEEJRjkkUVsz5j23M3daSNpTJNuDiVi4QbWngGE",
  "key14": "3UPumHsG5rorv5Amubx9PuVbMgqkw63Sqn7Ydb9V4YQoEMNPAiKDe776EVwsxUuGcpPXvLvcwKhqdCeSty88Bdxh",
  "key15": "2J3EFqR4D6FfcYs6cgFuc3tW1Ests6ZKeGxqudbWGJANgznXZ7Vm3CXGezMoicCyE5GwiwnVoNjGgLqZX1b6EAAm",
  "key16": "3u3XbLDu1S65K5PoZyrJaCrvnaGPRXRxCKy2EGK5noNrfWmZQqWRETB2YngGoSCNaoUshRcSgUnGNuC13RAeA4yZ",
  "key17": "677iYNSVWvdCjFmwfDex39dzedB7w4dRA2snRxb7J2D6v4WCTT8jaHtEKcagdC7b5576phLmXmYomoj81aXqA2QX",
  "key18": "5oizHKji731V2Pziwqn5t8dfTbALMn8pY14PbBKvczyNU2CGwbEKbdP5pUTZzZNsoC27qsDab9zGPKuUfzHXXopj",
  "key19": "2ZzSb5QGqbJkgwqdeZWaou8mea5fYbXLYhTdspY8gMRMMAfn2K2V5nCUiSr7aqifGMv2C9JP4rt7aDbFQhpqBxKq",
  "key20": "T2jEUzWRTjAEwv9VRYsKceQfzQ8YqjmqmVewDNtB8iuMUtP9Csa2S2RmFVWDVXqwYNKGcUHuzYTiXXhUgoBBqHH",
  "key21": "4NDJxPgXcC9Jj9tCZeqjWEbe6NJE2YFSEd9dXWH8MiTm2aVYC8BG8MsfxhVc2z4b2Uu7oSHPWbEbUSpL1LtHPvtQ",
  "key22": "3EuqG1ikWY3gYLoe7mwN2KNnD4ynF6DXGepisCTn2YUqwQQEeXNTngHjHpv2R1JAgj8dFYXLDjNGB1Bs1Ntst6oA",
  "key23": "R21m7ZPD6hVpoAZ9V1Du4smP6t4JLBvyMchEr1k3H6vfPTjNzT9E9yyjLsgegYHeGLpkwoLHN4Mjb4TjSGjHSxT",
  "key24": "67T9Nuy7Jogs9wucSVHHePHCKp8YLrzwYCsVAAxQJQxjBF6nYjdP1kirqYE3FDo2qvko21r3w6FiUSBrXKivTAFi"
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
