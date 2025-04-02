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
    "27smAwujYdoqHrDyoF5YW7tMEuNjWSWgVYgTH8UdvgtRaKBMHD9oxbcRq8TPUe27sP6Dwb1MGhRbfMm5vErMsdf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUDfPbtu2aH2YUhWoedB3vyqALHaTu6SJYAfeFoWYntL6RQXx6X7XaMYkufReAt3v9zw444Cf9e1SHKhYL9U46X",
  "key1": "25kGWK6CNXd2PpMULpKPMuAmPFANy4Lr7Bdg9MzUJdRqu5Vfs5oBuwMuqzyj7WTxEDBA1prHALkfj8fwfbgab8ce",
  "key2": "5s5N1TR4bm7Qbd4zsacKx9vr8FaG6pkyKV57Sobjay4zPz6gkyT95nZrDBRHRyUeLs9q15zwtuB6DtmKJEPD8YMM",
  "key3": "5SqYtJiQa6JMpWoeJnSADiQv2Ui9MwSTrLBvbdt15j7oefeVAamtVA7BGiomVY8HGaGThfe8PfWEC5fy9r9i3E9i",
  "key4": "5tXLTKMtgRDECyyhnPU7XqSyVRJ5Smn5kZwXABdrkB9h1MjzjSZ39wpv2rTG4L12JEaZcqeLJDeY7p4k4HZc8XWX",
  "key5": "23PLWjYaqVyM66k8ZT3a5NVUkBjBqjz98CW8kkyu18tbmBiKi4xAFqQno66MD9CMyguaNnHDPW6brgkGJCpNFS83",
  "key6": "398o16gsZyRceZECNjKgeUjUio6hNP1h75mLkwayyH5Vrmnyh3mAqswvDD4BZs29eixyXbEV3JfzG7ZV6fiZVYrY",
  "key7": "3xvnECjWbmdJ1tDbFuD8r6Cp8F2YkKRhRx84C6M8ZK5gUDEa4GJGn4mTrWhqZyHNhCkWSGEDBWmVBwB2p9DBKLKV",
  "key8": "5ykq1H4Erc9W8nbM6TRGgCFJTrei9R6ufcNFqSSoC7NsLMcoax2KhRvMh2ktxckVneL3d9s2PknBtb9vnxZ1nMCn",
  "key9": "5jKjVDDYMmYq4YB7gtKNv3ZmdvjeWstfATUrowAqmyiAAWMLBNz7LvhuHRvhF3tesiQzMt4vLfSahdcyPLGSkyu2",
  "key10": "5T8KuZM9XcfHyKhSHxBwky3divrTrn1vr2c2yj3Acm7RsZSkvHo2b9xTDEFBqSrQyZPbnwbA6oiNzbvqZCLUo1hY",
  "key11": "43HW5H68XzTKj8PYEocBsf7URqqBGpJj8EtoXTbo8LaMYnf56omt4Uh8avm9BeRuegbX9UoJbeZNpYYxNTujhtg5",
  "key12": "4iPQgzCJP7gD2vg1eC7mXLHnSx4p8BTjcdFuyBqXoWEJNxt5nR1KLqEmutDDKm9YsAbdamjgk5hozGD8iZSEioC8",
  "key13": "5FRn3rEPrYmx4Z5ZTUH8HwPRgo2Jm1bVE7o6NyyqQWJ3LrqC1sL5Y5KaF3xTZTeNA6FUoDY2guFUBqJeJdNKR9kA",
  "key14": "3mrwirodydW7Nje3Cu7okLA5QPCCWb27CXKsuZ2AobRNURpK3bKzufT4D4ZbTMvcpY6zUuY15zY2o6c4biharroj",
  "key15": "AZxsD3KTjkEA7TDHFiExDFtWQx7G95Dwit1GjpnKiHKdDJuuqYcCRcNnJv3CHmtee9fUxFTsrmGf3Wfg51CUTYA",
  "key16": "4o6ZTD7F8WuTiYEG6MMG1CayqkTB68ENKY3ZhzLdkixdAAiQSzjDUaDoG4ZpDwYXfvJtmQzVmsGMFeS8ws9VB18P",
  "key17": "5JgfRE2VGNzxphohk5dA4JLPyUuj1Pq3KdZMSuPXTE1F85xAxdoFep4XNHcqozZ9x2Wjxxt5mdD7xWSEsF4HdoUc",
  "key18": "2TJwyyzMgwoB6mvoHeFwtUxDfYNJjxPJQ8sBLdSjRMmkx3nuKSrBXFxFnqcqU1V7SR3z3KayWjyCrS5aDHpvQtJH",
  "key19": "3ozyZnd4KHJkiLhZDZyYp7u7mUfs3XAjWRunttLfAQCZncENh2QdBgCh6ZxvbqKH6uLdt6WUSi735p1RQnUsZiFt",
  "key20": "23FCZ1EL4WMNMe4aKwepAdAGmhDpnoEets93K8MNqNTRMHnQRQmb3M7byEYx7PovJMHvgdR5G3pRtK9VUkwCsdzE",
  "key21": "4fzSPPDNh8HdbSMpA9w6UtZhG3i2nxajDfyKQCCj2xKGLdGwYeqo39tGMwLAxAyahi3xCiA7AngV3Z3PxFyFQ6pW",
  "key22": "3c7onqC9hYaos1NvkLHSmcrnSqsQscXArpiTY5KFYGucKjf41GM7Nsmoxb62kyaZerBzMrcbzofYTyomMKSbuUqo",
  "key23": "oDmPTwMXR9b4cqdXFYNkv8STXZkoGVYsDSDvZw7ZMMxYdEwruggXVb7e57s1Ni91D8nef46cJBzHC8yfRrJKjT8",
  "key24": "4o6zB4APhr33Zmv6vAe7Z1uPJMYww2JsrEmUeHcDgBbwHhuwj1xtUqscfgTui2NCEfDs8owsjNcM1kNGKfvqDwTQ",
  "key25": "5VDYcQAjzU8fKPBRWa9btDnRHXBkJ6LYpBczGTWdjceKdHBxaayPfgnkC34JbkMpsAFLQ8LAuE1gemNoTffbL9sF",
  "key26": "9uEvwGir9y6J8ajmEFaTw3H2yXnewDpnD1MC6y31TatQovgM6nAD7jGQbsRNpLnm4edCN7HqQoH7x61UzzhDhD5",
  "key27": "5GW3xA1991A2WKHzcpnzpx2miaTn5rkG1PiX16mCoxiYcP4EcLaeV1y2auz2HscSR63AknfZE2XxfRgWJoEChWGF",
  "key28": "2g9gbrEhkqhTjM3NEBsWiJUe6Jv4p7zorNKL2Pg4JnjTsNtUqDkxxpCcDCoMtdqpwKcRT4i9hJEahRtL5R1s5NyS",
  "key29": "269Pb9JNBWab8o1iZncuKe9mxGh9kuwUFyBxZ8NV6RbZrFnXVHadngWfUDDRS5GuDXu1xfnvTqurLXrXgM7iTkkH",
  "key30": "2XfMLQBh3FVuNxZGeaKDMf5KKLbTHai8QnKWodXSr1SDuzNDXrbFrFbAchHQG4oE9DfHuKv5UmeednQ5iygjtPYr"
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
