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
    "5b7RUUQp2bDd3EmXZPbz3ZYLHmM2fJ7bzPjhdiJGZrk6PHPUTp3deCAEZ4v3AkLYCGE135mcY4bGXvPUeErACTEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eqXwBCUX3EikDgDCfSmBuu3FXLziA1xtEhGiCBgaoomn1TjJ9y7RkfQEPRNrLzCznGfU6QUxUm2PVXCgdy8Bzr",
  "key1": "2ZXdaRgTgnybdEi9FHZNoCh5y9bALkBV12LwAuyQ6sd1axfNUmqSj2AopzPuRSbB44UX46fMi1GAyCqV64WfoMo5",
  "key2": "3EBQ53iQs3qh4GB3MGDXGYJeyrVSydFQcfYQ2aRLTtQ7ogTy7YTfTdj1QwvNSyeN5Kj9RwMAUYgsfLmQBce5HPvL",
  "key3": "2bGdz8JaJLpjvH4kabTyVV985PHQSzFYvoWBz582KmusyCFiwhreSBuP4df8W57zbrc7b8hm2sTKVP8PaKA8FNgy",
  "key4": "3cYbbXeskFs2JS3Wqbt3kkpS1T6fZ6As2rjvNcV16nD2eCYL3aaRibcuF2Dgqwrgw65MrBMJohPoLpp3qkYTxhbE",
  "key5": "4HSkqv3AAn6ZuwnPdFyRrfRmMvjJ2dkXyNa8fvZa6aHUxebeKePJC6af4F65wKpNdJRa6Ai5z98bQZFq8soKqV4c",
  "key6": "5CgqtmCTwTDnG1X6EQmCT8ddhrmpvBSnezaiSAADeJUeDFe86PLRxcNoot59gaJALLVUYUMwjEKhnYm8AWxojM9D",
  "key7": "2zMceUMo1j3eYhj9Ez3V7bPLke1rZasHrM69zqXeFHopEa6Vy1LMHXSCVsG1RZwXSuvArpQ57tvnoekAnbZp15Gh",
  "key8": "2dW7gvBZudy5bkEnN7VViu619oYtTfc82QoqpR7c9cuynsueVWai6h74J3dXi461spM7PPwZJCa9mKhTM4NTE2q9",
  "key9": "2kPc1pg1KhLcp3Q97BAzFRaXQdnqJaeN6idDjTbE7VgQV5AQSQiPS831vPYzS7vdh4vNc8HSEASpJ8aQ3syVBZfp",
  "key10": "5AEH1sGTYWfpCtAci4bf4oRSkjiGMThac1MgZmRy86PHzjTPaZUmqLd7UBeUxTumbMxXHdQAo6DnxV26ZqjqtWhw",
  "key11": "3v9HfXEuQx7vD4uEnqVBBcTxK7pms9F9i8CS3XYMKoF7qxJ1U2vfpsbCsprXvLavyAt97yerXZW9BQmwDb9uZknq",
  "key12": "53GxFbaAB3BM3QYWEaCWJmLLYHyuc5qTKPRCWMvY8bjNW5sXEm6zibQ7uPdrjxfpJtWoTN17DcXRjLTJSB8sNb7N",
  "key13": "4CAQFtRW6BnKReY5g56PM7YtEsLdchsQNmw3yyZCobawKrzart1Tx8AAtNkunQ4vsXhGh4ZPDTctmtAc1Q6MWrnb",
  "key14": "3rmNMLS61Qx4bUjSXi7NkS7PcwHU1etW3ftw8SgPRtKgQmvtJT2ScVEAfTLBaK9GrAfdwERnkDNCJ7bvyeKXhcPz",
  "key15": "jGPgA3oECq1mYtpBJqyE13DFHSx5BrUL3gMkEfoqNNevpScmvFhwxgh1wSBzCXER3NfakNf3UcrAq7vuz3yZy51",
  "key16": "5XabSGteQGj92K9SPQMqG5UiJ8Ru2jXKP42HXo3B2S8C2TkvBhYiiSxwDeNmgVL8JkW3nhFibWismRXJwwTPwca1",
  "key17": "5DuKd8AboTctgGbiwcAAMeKYbbWFQp3GS763ZsSNrwrPheNGzJxuR2kYqepzLoc1SK8N4px5GkWWXmJ8ywKjHpBp",
  "key18": "3tKpN3f5fu8H6UdoqhZRa2YRA8y3iQoifz6Sg2QateWZJ3BDoUecC5zkHEuzPK47dbrnCQKdH2rKrXHKvoWHSajw",
  "key19": "3dXtcCHvE9U4TcfHrGZTfcwtWZeAzaVd9Sjhdb3HxgEm2uXNqLJX8sjraibDNTTjm1CKNwxhYK3c2ggdCBTtXJ9u",
  "key20": "3rfVZzsFd9czMDzRYb13PNqRc9qWfT72BPjqX8PhcRkY2bP8AHm71nrmkMGW6Uopc87YbN5C2wYx7PMfovW8p31j",
  "key21": "51vzSJWE5Y4x4FMQprErigc1unNmnwWTe98NAo6FHznMy9qYTtQM58D1W2yRJsRfC5VB6V42CqFUg4sw4SZqhywS",
  "key22": "4PEDjdsFjm3Vr3vf9zWauRSWkqRUv7Z7yiWf9eQmQcSiCFKUSKsxRMEddj3cXiAEJSEj52bqX7Gv76Kc4XrTu8Nz",
  "key23": "21Fv1iEqduzJmMN3WucUhP6QHAQVKzurx2CXDbfh34j48kcRLohYus7xioKE8KwQg9B7E8RXGDH24TTwWtvvkCn6",
  "key24": "DKuCNfKvxq66fgGxxhh6nee7DxBWmyG2T6MGdLru56KyQWj6qcCXbL7tSqRLxyVpamWLpbhg1xs8NyKw9thbEfE",
  "key25": "1JTR8sC51qfCddmYXvZDg6mqVWNLj69NpMHwtxoRmajZfF2YDEvqzbmj1awfYnszEr32VkGftsPzD3WfgcndsGm",
  "key26": "2EQWWBrE7NkjRDhAF6RKujxgvFa1zMxNrnoReqAZtDbjSiwFadmorq85fYCibFWJv7Je3a4vhTgTj3LAwHSpY1hh",
  "key27": "62WPyMRpPA4XRfn76Zz8E1tLmstCnr7R8Et6RbruMdMYjeeAJJfWauNSv6MgBgTxz7LKLzjMQ94oy5nmBry6V9Qe",
  "key28": "3wksBiDEgsei4svYzSi3xofKfUA2xSFWM6aMWmbskSAGy8vfDjCsnEUQi9H9tXgRVY1dU1PFpowEyZvjRjKpx516",
  "key29": "2mFabUcs9foT7R1AurSFcaiQJkCwz5c9fjWiaNJTKUC1EZw2KDuCdAWQvQmmJh5JNFNveNZqNZZBkBYdSxtJu1hQ",
  "key30": "5uq8JuqwbLA9DDMbHz2wtoKPjcnkpJnLJN2BvHo5ivgT4JHAZ2Gur3pZYyoEmpkZDtnVTPtqLtgPV5TY9paqCgwj",
  "key31": "3EdGniz124FXF7snG6pZGiXLYdbiCzpZmfMfF8TcNQNEQgP9ryrkBHnGUzpQxAoLLYtY2MrtbVzts2RP2ZEHAF5R",
  "key32": "3aMc7Pnjo4icDn1h3BNSXpFMV8Z6Uz7YNghAdd6egX5xq9SZHPM366MY9Udj4Nfk9eKpLaRv7XFk5nKhER4kpaGf"
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
