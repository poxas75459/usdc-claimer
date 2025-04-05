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
    "5fo7Eq8PPRMBiJSnNneNqqTvWWr6zSKEUjv5ngHvHfi5macGdg2t13PvTnyeM69tCB6Z3BBH4ruD66kqXt9ughGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hd39KVRHuj18BDFPGoR4aAXSGP9m2NoEJKYR12Cgey3y5d8LFFoERLKzodD3QGjBGCC49Q7CC41bFkXCBNJsZJ",
  "key1": "5LDegkKHCv4bbX71xBpz7TiLnuGJQ6SH87knPJVkYMfo6sahHSP1aoCA7qCPPnzxrY8D2s9XkfsGtDqe7E7jmvgj",
  "key2": "XFmkfT2bAqSGDY7BVLQofFYScmVeemnaUdEeSv4V2u6hxKU1EmFNmWpAZ39jjjBgfxzCwSXQpogSnTQFYKYwaqj",
  "key3": "61NwxHcuKNixdt1naKxsvo3mAZZVX8p7Mj2XMhX5ZJ262fGCdD6wq84jK2DRs9JR2oMVzqzAud82cPviANNwc6hM",
  "key4": "2mDzY9a5yZMRmHtnFM7YmySgfx6Fp5FmppgbZnF9YmTGNWn9Sipn2zoFGXnrPUPA92j3TzGTBzU8urw7BbNGtN4K",
  "key5": "4ssjQQntY3awirisLbPeWqbxtt3aQjXEjTbK9t48mFRa1cbVZwWDZXsXUFPbNK8otenR4rknnFXbgK9L6L23QqAs",
  "key6": "4zqUyQ1q4Hq155wTNaThPMu2XT7cpMQEgtmhSZeNVNr2AzsyuZUwEFp32FGSFxPh9NBtJ9ceqHbAZaxJFTLu7WVr",
  "key7": "5tKsAGxqVysVrt83u3SnuSqUqtFnuJ44ByXLwMWfuU1uJhMyg7sCQJ9Z6FJLwrNkrYMkHQkjUt8yKVQHCXdm8yvf",
  "key8": "4rdx1LJaGGV7JYLZ5Rm5KN6LYW2qy1hABnkeVXQzNZPooQCjgrSzy7axRB8U65eQpChppRfUj2Kc5E9yijuzBbd4",
  "key9": "3VtBcMjUs4j2isj2QFeu8sn8782U4JNvdKpeEdm6EQChuJ43pHe2F7tqKJ3f61zcMEvWZ247WAsVeuSLtJpU3xcf",
  "key10": "2xi5MLHfC6T7CnHGBo3si6igktxwbdScEgcfTcHAjCBd154i1QeZDPiA7W4bHF6Sx9VBQhjsopKWkjJUpzmJSgc6",
  "key11": "3Vk59w1d7aS3apWyyfdimZA64yD36TMRa2RS3MiWXdx4tVzLFH91B8ksp3ygoo2sfi5Dy8AZ74tzRyW5DE8odUe6",
  "key12": "4CShsnKLUMaidc2Ee4x3EXWj8P1RkwiKCXFLeWt3vZeva6VpY1hWcLkzBzmQhzfjMQGL3jwb4HgL7sbV3LvrXKWQ",
  "key13": "2vM6nri4xNW6WeEzjtFHiFE91HV4i5kRP6s3DzxWNYyjHYxSHKjE2FD7tTNxb2MLjTJvVwkJ9a6P6y9dYGF79avP",
  "key14": "41TXmG5SMWQM4pt3cBFUkqrNJ2SFWigLy2eM3Fonb7MTb3TPXCCahoi7iZMZaS2YRvHjJnMyPD9oQ3wvnfQu9qP5",
  "key15": "4doKEmvn8N5Awbdp6A35V5fkR9fjwW3gqydFgEpPhqjwq2FwXSxf5K5Mq5kvt8371k29z8VX64UWDxWFa6gdeZPZ",
  "key16": "2urcYW7vNr8aDd9SeJa41JfVKgzS6De37eeALntSjTTMXg1ECjWdKTDPcFDEXrHXHQXT7Q4eEAPFEWotfRfHJ5Lm",
  "key17": "5pL9xKNQvp6sMFdmkezzPVthaLwa5MRyAhb2RQ7bCdCBFDsMDsgKPyqjHbukXtGUG2wq2VQdHHKLkUSuyw1QCg9v",
  "key18": "5yBjpcREKiAEtZDB3bSTnwuknu3ZLYGq9D4MwbnfBQHa5U6GKLLiHDWGiDYbs5wkM6mBzuZKTecM4HiQPJC2Hkfz",
  "key19": "bTHdcsUZfk7uWWPxUf9vvv1uNz6ahksyUbuKwxMeC6UsZzb1UxE7Va5DMhu3eiCsAXz8ERm2Y5HYV1jmXyVQqzD",
  "key20": "4aBVurR4WmCuCPSWJufKLGhJcavMdSTEsc7Kip8PQrwmfsv6GwoCBmo43F8frW9syrZV3cuFXE9y5N2LwK8MTuyt",
  "key21": "3h8tKcdbHLJBDGXBxfJYbg5UnUoYbS98fQxNYBTBjTqxhoD1eV5egbdgCnwgkQAK4uaKR96jpzocedSmwVmU2M58",
  "key22": "3kR8DP5rHMyuLC8y2VNQZUXJEkAz1Y8MjqJMHCJ6bdoa51yE1tqWrLjZMqEo4cb4Rsj8RJMq3j4Z84RtZiHdwEZG",
  "key23": "21HCMjjRZBYLJ1Vq9wV24fHLShAp7SzSrWxyGnB1w1sFkCxckoMLkyvHhWCUKrPzWLZpLy3ccpt7i9sf88dQWxgS",
  "key24": "5GnybkbBpZxH1tgwzU9pgwF6oicyvTfRjDLwonVH5Pa4M6GuiuYV65LNiHusBuG5Sr9odJVm49EFBstsgwdYGxU5",
  "key25": "5vh9VTbJF74mgrpovp9pMY11rHYkTWM3HxnJdWwvWy7wbwEY3KhXyTcknap4DqxavT1RT3z4CiUUsonCvMY7899s",
  "key26": "5RxZ43hg87dfyJCSqGzUUN9sPf8oeNiw3rMD2WWkc49WYdnGnz3X8GTgoYz9o13ncaXSE8N9jvvdWFW5v7Cxen2X",
  "key27": "33eBHTKtCamuppD413gqcEqHjwWRCuZneViv84dAvFDaJP1gjkReRyBgJJofe8WcNq9Jw6KEbkvPdmYMUsjZZnuP",
  "key28": "2ox1JzhKA8QMjoxzKSuVZPPwT2j8Cm1aEr1kBjUNM6XqecvkMbpvPJw4jLC7Hn4WcaHqYavJz819i9BEU96U6cn4",
  "key29": "2mtwNag9nksDUNL6yCBekm5wymJzVHRCXzqGdyHfrEnoj7Wfao98bMykghdLngbZveEZBZ8GjX4BFMFepHZmm2Sy",
  "key30": "5dADrhcEaAsAEnhKWWxa42pSqwCuTNwSe1D2DzArs1qQdBRGha79zVsgK5q7pmtuQz6Yz7nG2JMEhk1e1kSUA9Sy",
  "key31": "4xChgt2HrfiMiv6eUb5wysan2CF9xs7gAC6R7HT7sG2fNqrqCwwART3KVssFaCNSafugXxvVozusgYsXBW5UspHh",
  "key32": "5sTCUsWCikfgKa74e6Q5gyKxmNtT8HCsef8AkPJnNPaX6TPNegx14cu2V9pjKsD9URNBQpQQnN8HG3hrng9FwrNK",
  "key33": "2bF3sFhBpi7jtD6k7x21gLNMPDoNB4A5up2izYxNCSNXYwR1X1ncjuR5KUgisnzJQFPojSkvN67XV4yGy6iegeNK",
  "key34": "9NyfoziARtKziDpt4UNkwqNa7ZgEeYcKPXE1H3rBYvebLbsZsTm9EaAAWXyCCbL15uRwyd7oPQ44pdX2xxJzJmT",
  "key35": "3k2scq8iW39dy2h7XhES8ePybeWdyZ2L9dHFNvAfDoMxUeMTi1U68PwzPpCdFgYQQRj2jymGnaLSr1Hf2VwR4wvH"
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
