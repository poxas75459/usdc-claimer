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
    "5rvJvegQvvM8fQqvtW6MqxPwqFT3MfUtV6c73e7EgS683UpimymjjrTVcHMA8ScSksBz5SE2fyvRRfXBfEq2h2iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kk44Pfc6r7rvD7NzbhLGtZVMFiZCyk6XXjM9ndZhfvAu4wWDygqNxBwdTbtFa3LFoUExxYKLGwJGZKm3SFB9ATE",
  "key1": "3tkipeMjniKmsMf2KPtoZ8Lkwvbsq1KmrydrkRoGw4jTEY9WhcMuiLpHL45zoDKKJvFBQGYBNvZvfkziHqaLF8hx",
  "key2": "257FHG9CMpie8vccgo8m4hcjZRb47oNVbL5wGA1KPVaAHQGREeQkcbzQR9fhPs7aMmYA9ZWrJFhgjc6Ehaz61khx",
  "key3": "2TF9W6ypAuHyNNrSHKJpYXDv1fY916GgS9gtNvKYZpY1fDGAzCc8jjcw7VBvAgg4tHPk8ML1BCPoHVn9yHyNMR8f",
  "key4": "2T9Z38jwAgMoAgGcffpMQJ6XkXUcPDU4UXEJZs7yeZsMkWNpjc6xBWf3LTtFC5kThh7WMu39NGMT56Bb653AL3L",
  "key5": "T3CLjyXrG3opgjrLbJyu6rrr5uwyfTMTW458BGfZMg1gAs3GLgenpDy1VjHXEhMHnLFepSRfwpAyyfeMnt4GRci",
  "key6": "3X81pHVMKzGrQpSY8eBGYNi6743ooh4HvabTQrDEoLy72J76AhegNQ9KNHvzkUG6RpWm3nHEUrzmiRobBnFP8FUh",
  "key7": "gfr8VKqNzdmJBMtYREKbyp3WLoF7AS5PNAZ1PbApvf85rDyNBXPohPUVMP1ifayFA8hBJ7wJvkfg7nAkhsLmTL9",
  "key8": "528mwoGqB1n2cDHcecqM7YwjoFjEUFxgwigDGw1TSHq94hTL2kEZQupR8AuregQTz9ESKDriw1VLH7e1fsvXRisp",
  "key9": "EEXJ4Ega7hdLxDDDQGQBerNr6u6RhWHRG7KDsn2aob4JckTZkRo7fe7iiohCerjwPsR1zi7H3YsnjDaDkS4SCWL",
  "key10": "QAeTcv842VJxCG9KLzevTsWvwZHuR8KaARmbc3Dt6MNnv4fUF56t6CTKzzcTMAYSKPfhhUThxDhhvUbS1qfsaR6",
  "key11": "2hrPq4BBs7cZJXePt4Lt4CF1oZZi6HiZ57VVRd3CJ69Kb2AYvf1bTTWANcoYfnXhYj6c67u2NeMgvqvSMUeL3iG9",
  "key12": "TVs1hzLYvTJ7q7f5xmRkJYu8Qsh5M26KmVJqQc7HhQYC4g3NwWVLYgD5N68MGaAiz7ZdoyNNqZdV5w75XmVq1rs",
  "key13": "5PgTx7ZSp6RXYc1pz7aBiwvAnswXXVm3uohNuxKsqp7rUraojAs1cUybgSYn7BrFnHTB2w6tk6cBc4xfMR7aM8Fm",
  "key14": "62Bfb6MRy7VU1wynG8ov9MWoDFCwWJmQFBj83fhYvB7WGjgP7kD5BLPgkYFTH2HdgTb2Q1ab5m44wwuidBodTzVA",
  "key15": "eekjqfmQA8PgHtuRY5gr9REUJTiGXq8tXunmrMZpGLqKR2YS2M29wKW5NS5DyA6yaE2XWGqyFHYV7Y2H2cztsLX",
  "key16": "39cgHYJzaRxfbpfLQYDrUBPySxqpg9K8qw5pjan59yfwV134HoDzGTxeKvAWjiNdLDDhWbtCF2Fdhdk42tjVu7yY",
  "key17": "121HZ7FsUn56u8uitrXngCJi7tPxTKUJVEtzHFTkfTGq286xqnYm5XpntAKYrZDxA8vndxwcCgXibpYpC96Y3g4L",
  "key18": "55iWr672bKajDJeesryv5s2dBTHkDWQpReLfcqyWD4H2cb2ia3bvoJbWrccKNnJ8q6CsEbfSVSyE2hEoutgXrwPE",
  "key19": "2r9PTWMAbuLG6Z2xNYC5w8s9pH762pN9ZzRYbos9CSF6nxSm53PHratiTdY5U5bexXbzdBMppFR5p1JKmbtBWbrg",
  "key20": "5Yx28FYVvCMfWbccFb8tX7k1sAFv7VF12W3auqCH8ygGg3sw5MzsJBsZZJj2os1Jv6i6fL8iDoHaRD4nTHSbMmxV",
  "key21": "2Su6dfKJ1qa5AbZEE52Z7YpVcbGZM3Ne8vn351bLmUakCJU1oLwC52ctNNp6pT5W2enzXp9kGcb5HJEsFWL1GAaM",
  "key22": "4TyTv89gMg8Q9au2huQUa51QaUqPTJekhhAM9Mbfu4EpZqkUd6ymcu9i4MehaxTJdQsFFnfQm1M3GLkg9ups7UQ2",
  "key23": "2JSz8bpD78J1b9c5V8jhKyGaPSXx8JTFfzM6fPqb1Gso4kuVbq834obN7hZLHjsQa8qk5W3DTZ7amgVKiMPraDjz",
  "key24": "2tNhxfoDq88Rn5DZxNq9JVz5WvibveLsZXQpAXfdUHbwKHyWgRz3MirFyqrgsL9KN4ryURigmsuGjM6QPLdJpuxY",
  "key25": "3RDc1QuHcgm3atWF63AQn29T4kaV82purGUQN5ncMHgkdA8edPdGaoMAuoZCSRcALk6Z2o3twi67J5sTbD8LFeKj",
  "key26": "3YVozaaQ3BBTPqpQ3QG4Vmgi1RK4X7C4293L2CrntPChCfwzRubzcGLHjgYF389agRurzDTiT5ruzUcQf8yzpd2U",
  "key27": "ZN8gK1JBiSMbjZdhscygP5aV6MdskMzxGY4XmV31XKdUzRJ4r3TARH4MyxSfHHhiFzQrUwRuDJbyzv3kvSvAMzE",
  "key28": "2gJTtyBUsxJLNGFSXUeoRpRUHDEKdie8qRMLQBznkSNpCe6GiaiUMhHjPi89yw4bknqN82vs1GziHkzk1m6UQVNt",
  "key29": "2B63MpY9ebpcsdbt5ffX3PobLtqF11jibj7EtzmSrZtB5mg9bbg1TgBiYpHBDzVUdKB3Cv3DeRGuFHLyiSEPAAVi"
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
