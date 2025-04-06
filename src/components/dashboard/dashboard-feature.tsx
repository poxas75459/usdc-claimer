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
    "P9XmCuy2hp94YANrVRxBDCyy5xujHWrTUGSmeFMgLG19iG23SbdCZWiau1GuWmUAXaTYGabRB2BEKgZRB4BUnbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2We13CJzZk1XXKdGM8qVKPJiRJDzYH82bCEmq9yzmPDYKVsppVkioMosYoWjYXztW6oKV35s1ykwBAKUdCZpjwZN",
  "key1": "NSKkhVjvBfPjbPhHWVifqgyCNxZJCQfmUAojDrpmHJcg7vT9Y3c2DmZ39gR8s85t3CWjF9tF6KYezDSDNNQeRUT",
  "key2": "yePXZg2E6dG4HaCv56kG7E4dr9rEaUvtBFVy7SPKoLGPUPxsTWzKwnxbVMJYfy4djwm9KmNTF8g4JNCDznfHcMA",
  "key3": "2nNasbHdR7cG13kdXUx1zwYHN1UE9Jpbfsz4sByfGnaQ6R7oxhkrXGyVHGYE8MEJNtvacqCNNbkYuTxD7GDPwKh1",
  "key4": "4wbkxpiHzh2Qcs6VV7uX7jWKHaeq4khyDTAW4pSzkKcWCYN2uDcmikY1HeqjK1xAcpaT2i8TE6Ve2vBt9hwTYy8Y",
  "key5": "5YaXxG2TKxWmhsFn8DzKb4fpgCGBzu3NAM21jVCuLTLLKkbuT7qifZ9RW3t2a2d7fBo2XseZTFHK2WHFt2nPjiTS",
  "key6": "3QvYALJz8SKJ7m5FVx37KVBJmW5rERkwFkpjHmfDC9MKmcvcBNrFuewmqiJ1ThAVZzE8HvHzdWDkyCdov5wuu3b6",
  "key7": "LTUMH7g5VCdWBoQaK6pMtKHfNCsoxJ9kRkVsShUt8LBFVbFFDMmJMpf1UsUKyBnRJimzquskcjJEU7RhWk9A1DG",
  "key8": "3s7MXfiqNYzydBZHNPBe1i8JF17idE5QgsVDrYo1H5N5XQuuHQHdR7Wa1i8cYxDd1mWi77hs44x8MPm1ihPJ5cLM",
  "key9": "4TM3bLVM3vcFtZFFtKv1AQZbvPXKvAQia61SJEMQZ8pLkPLDpUfVUwLWtw3JDiwEahT3J9oH625TnnFJayYqjzrK",
  "key10": "HwigHe8JLWzFC6wBVRSXhphrmFiA459sBnJdGdkPCJv6PK6SA43qhdtyT65TNy65tMpCaAKfHkcvSk5RuR9Nwpd",
  "key11": "PEQB79pPqdzjVHQbVScDJSAsBFoueXoyETYmVEypnpCYA75rfNH9LgrJmcGSTrpXjkdhTKzb4G39nwG1qed4jLu",
  "key12": "4gtXS5cjERzRU8BiRbQb3qhK8bgvvvMo63Lc2oqUaEZLfCgBcqmxUZVMry56yxp9z4grEVRRQkNaXU5FMwuqnupy",
  "key13": "2FNVurJwsYDYuBseAqjzzecCUh4C252J1RbYH3Ya1BAPExGMSQwj3Ns8ZWdHUDS3XaqEsg7FALXViswcZmj6JtWK",
  "key14": "4kcXfmHqAfGRh7ESHnVG5tSezYcscJp5b67JpfrZ9LbvNWqPQdygCwgq2Ymz9yUU9xGGZYv81SRjYxqgdKmjLZzk",
  "key15": "4UtehKbP9LZiPjXb4bX883U2XfkBRd6TzQZ6zr9r7kzvgo5hUYS9iVpAVezXyPi6zv26H6ygfXQmV42Vy6xm3U8w",
  "key16": "3suYUyUqmZuwzTwExVarPJcSF8yF4V7Rpt24bueJ3bmtbMHbmMit2E1EnretYTyXxHJ97JE8yVEdnMdpggygSSa",
  "key17": "3qaqL1U6rtrcBw9CxrpeB4QrU9drgkQNfbreKUcDV3J7uoLXH8kLc5pLJBMTUshmpEZoVaqBrowJbwT8RHtr99hc",
  "key18": "t9bmwosVDFcfXdsHgfU6WPUbEJpFGLx1euDJekGtHRYtdX7Y9htffAiieJrKdZWs9WYrr4nMpsupdxGY4tCmiCu",
  "key19": "2nEgqg8ZCTaJ6SXs5jEG8Bi2iCuim6KAZdNJZkqBY6fxGxnoXZHPpdQ96xAKwtY22WHGqrLVBUc5fvZ53v3xTfXQ",
  "key20": "4pQECQMuY7SLr3JD8ZfAgNBa2uPY1nGNvJdfvgnSvVMxTg6FhVoser377Ftqw8NkBTyzaxEFr1SyACdZ4Bi1GqEV",
  "key21": "5VmnSHptgTgiF1P3ZJiKEDz2HsgoW3sFfF4GWrCX7jwZ46YMDM1ekU8pgfG5fuFdRS84NRAFsJ7LCDy6deGJJerg",
  "key22": "2MfJWLdn8CUGWLMgBD7wu1EVFrdxEB5GZvuMSPUEnmFbdjVSHtWfGvQ6X1bQmJbZ7eyJ73UxFrigNXcVNoU3Xdnu",
  "key23": "2QvzP58wkLwp7txvSeNBwYfc7ytRwmYctBRgkBQCHc5b7FWvJJvny3FK3Wdnc7SLf9Dz9Kco5a2bcX5S6x3kreee",
  "key24": "d7SGRjBCaBvx4Bqcrg2qjx4rjeHkYLUz9DFYVWeNtGiho7rBBai6TV5rbnGn51nCuYA1vttDKXNBcsbPk6d8LwH",
  "key25": "bQtPsieBPRiPghSnJKGaoBipgtvLqnKjL2xbtdDbQtXxCtKcR85wvdUx5n2bVQdSawbAESjk3yphZZvTi9nojVc"
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
