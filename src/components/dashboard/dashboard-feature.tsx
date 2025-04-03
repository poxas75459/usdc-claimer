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
    "WUPnTFJRC3zS9gKmWq7LNZA9aNrCUYjkkS81PoMjQMCeiyGf7P1Xb3WEc76V6bpmSKavoaxdm8sJskCLUPwMAiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mBD4BhWEkrtoyfazBKdZX9Ut52BhQgbH4NjAFiocuBmj7ixiVwyHe33Fk6qHezc7wwa9odFvt77Fh6sUBfQ3ctU",
  "key1": "5JnPk5aZoQUQUWTgAVb4gKgGeb1TJJ4KsrEfDuRukcrprpy1Zysa1nkxSffbYcJHywA73dkk2obEW565paZJJ2om",
  "key2": "3HT22DmrwvRdesoo94d9JuJnUhafBMpHphqwe6BugbJj6wspXUXAogajnuEeSpwTjVyVN8puRWhF1nW3jbydCDpR",
  "key3": "9Q5vmpatG4uEXJuq8Cgw9R1T2pkvGJUbeNbHLdDzDHhhecuG8VgxYuCVBs5FLkKNzqAnVqYtHjwg2o2GU6f5uDg",
  "key4": "DVRTbA5RdU6F7sa4CN6BgsTpQUcXq1tc8KbazTW2LYsgpYvqJbLBu1GbZe25oREdd5RoxBMQyPfRsmbMaJXT7BM",
  "key5": "3Q9FUvrAJNVoAwRpyc8ioFgKqo3pbCjzhFitycqTtq8FP2A8kDjG4rsNxmrAriHhGe4Y7ph8dwvpuAWXitpURPHe",
  "key6": "37dvzb1qxLLqSkh95kaFqMbLGYvtX9BrbU9BWX4AcJxZgNDwvUXQF4o9iRPknUmCjRt9m3G5pv9b5qixo4vWzpLw",
  "key7": "3S2meavEwURUdbK4HZkW4f6v2hcEb7fy6joFBmRR6SaDRjbG9sc9EtCBuUmZyRV15is4B26ZnYL7ajGPsqQjgMXB",
  "key8": "2fSXWSgZHXR297NLnQUEs9hje7REmFHNhNBqRGNwwT5sXbMCrUQVW53iGVjzXHXQR5BEWVphSAFNUBE5eoFMpauU",
  "key9": "5ZyMzm6wPcy5JaCe2e4b1TxZhepoe6cWuu9eWTkY5TMNKHWpE9ApKtPC4ueRWew7nnWPHKhoGiCxfoTjH6gaJvLU",
  "key10": "sbwF5jt9sMXntVnE22PrjpmfHgC6ghUUVQSf4dVa6siwmM6aX2EpWdbLtLcbog3uxcBEzLsNAVwNCbqqh9FwRXm",
  "key11": "65riVwh68qBGquRxzSM4sQ4RSGTQoq725fmY53D13CEXAuxmKccj7gqdw1h9G1fPSGxBovfCgzXVQVkfDD5WSHxp",
  "key12": "5ETk9oRFPFAA4ThG1ewEznLUy2Qx3ZL1GnZyttNAsHtdHPLmGwHPcG6jKojJhbBpNCfLW1Dtn6XcJWc5vDuNUCKn",
  "key13": "4zXSnUoeqqy9cexCZa7o8vupxPRbRV6jjcMEWeJotsbRmxD11YjjJ2H3zi1Cc5XDU692qSNqwQ26gZgwLbq8FXCa",
  "key14": "61iJ7xeF7AcmQxXv96JXfjsr9veeWcTnHwpag49UY7S1BuQSNdAFabADZUqjUxSasDsb1UaHB4sTwfkc51nnDtuU",
  "key15": "2v6w4BiwzaFPzTA2nhvvy6BM5x43Ki3E4KuBeFbgCRT7Sfba9sFzU5v619dq5NHTt8CGD6qJ6kPZYqSunMDiySiS",
  "key16": "5kAit7xGF6YNreYK6C1QaVZYcafZ7oNkUMFcPCZY4NowGeZRjq26DZCxnABrc5djdNJEUj25BemgmYLfnPj5x86t",
  "key17": "4ijwZfNEosZjFQNwM1b6jMtjweghNJjzuXJrqEbwVs6qaJ7yKzQgNj7YfwJcGvfu2nVRy6Gobgr722e9RV9WAdRF",
  "key18": "3NqHA6eCXojpWZoJquMh6mAnDh4NXWR9XfjH1FNeUGZAqRQa7xqCwU9fSNZpwPLAFaoKaGgsTUKprUp1jE4vPUah",
  "key19": "2PrjB1nJ2admjjJBpLgqiMtH83i67D8x97JvdeKqCNLrb58QRe1V9Z6mTvKfiCPmcRZfhXAWUZPKViHyr9NSZ9Dh",
  "key20": "4WtniJvk1gqCBXdXZ5vwZaNqxvA8MDmgvaq3gaoTSHnRv7EethTd7uAG46kjrw8vgebBQ4s7ZEsEFEsNpJjmR3n1",
  "key21": "KCJ4hgSNjkz1Y37ztgud9NheMg4J27oY3czobjwnc3ynTn3vpmaqx2F3sD4mAybhZbKvvPBdt1eMGpH6tfJpQDx",
  "key22": "Kp8aEJLetPVQf7PCJeGeknD99uMUQs5pZ9rd45FUQJaVf7nZKfuP7fLzXDVnEobA5grqkPd723WbJVESCGHtB6K",
  "key23": "2McE5TcHGUFDUDRSEPkV3xS2MVR1pWxfH5RSTFDoGDFfXFJSEYSPst9VsL7zGgwtGvaN1odgT2Nru5XToECjPxQQ",
  "key24": "2NtqK2vwZK3AFrUQZoZg1vtTKos9zfb9okGg14cvAN7yJdgCBnTzbb9ztWqUBVeF3qeBVz6VdgaHExnTJu6HxiS1",
  "key25": "758uxijCZfQpbo4GFG3joKeqf8WUS7j75DtVp2KGkY5tfroM3D1Viac2nme2UWopWJLGpNV8FNDrYpUbozkmoNy",
  "key26": "6779G3BCKHAt4HwtpUrxNsE1SvqtboaymhZ94qtGuDTYkkydfk8nnjiLhT1F5j2QbruDtAqtCorZLVD8yXjQHDKL",
  "key27": "2heue3gGQmpvz6Q1k8Dqe4gMfDCz9rRAdTFv7xmU7fT3u8u6KPzoC5RL6WezgGT7w7neeQViqG8Zk35bDZNN7Rga",
  "key28": "5NNrUTAUQ5WZMkKtjR5DLriBpin3GGodTnvcJJAu2pffQeVWqzHnp3jSs5FxxYaRkwC56M8zPddA65cCusRhaqHg",
  "key29": "2CvvL5bvq1ANoyHBCmaGBGj4AyArKVGjxXwdAd6VT9hNR7TgYLTM3RWdVJhuFLytsPVCtfVriuf9hRaMFSxHC83E",
  "key30": "4CoBi4hDQS113934br97c9F7KvNwwYhUyXqzi6jJCNV2x7jsEqVw1LfzEbtGaaN8VDJYZi9hsPTL5fB9XqSUQSKw",
  "key31": "2nhYrhRLUraF4UkdixYfF1szhdN5Wm18KVhw3CgbCpNtaEZR3ebqe3zd7cz7MWeDn9kEC7fnQbNNKJ5YYY4YBzLL"
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
