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
    "3YpM5Zu6RKt1VC65svBZ7vSKxxiAqfAJJRifuEhj4pRYiEkMwdnzBcFpyZXSNV3qHBSZvqBocmAT5Ei96wpt1kw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DKpnipez4YJ99aVc93M3YaN87h4xHRbZebuVbg9hzxcpv36KaPnw678rbxT6BpWq5z4kRrRQhBV9dmSZfzNEjDj",
  "key1": "jLkMYsgpEZWPxAqUFNHsJiJvwMTeJhRp2cDfKWrt7GsqUgJ2KwDLk9JyUyjVVKpzJdXGYthBx7zrDBp9LySg4vD",
  "key2": "3bbmCMbMTFb52AvHLxqT7j43t2txPDTLESpPX9d363tQQGLXEL8mEcpmtT5hif2iPKRP2Hh2TTHT2KoQJkbsNWf9",
  "key3": "cknoNZQvgS8bZSEpzpbzrmhLWMQhmxRr2g65AVwyVzc5wmVpRJG9vtKSQ4k1PNuHUvVG1n1eJWzBaMrrU5nU4XJ",
  "key4": "4mEzLU3nQkH6bmt3vKTJqrACBKYELYDorCPL3U1TeEL15T8EJVoSqnbErs5eXcKU2RUTCro38R7oCWpAALSxugBb",
  "key5": "227BQi4utdAMaiG9pHWLsCfPcKjYL8y2fLHpiCehxRP6Ws35VgRGQNNNaRU2VGjN1S2TgxEFRQprUMdq7RYDsWje",
  "key6": "5Ndm5y6jgbqeZqjQKgkcHthJv8kqVa9LE1E2HvtM2TkUtztfbxws4w911u3KxwzjnEe25LfUmNtUjagJZjhLTdkP",
  "key7": "2zTPbkwSs6UQ3h1hKZNk93QonHojgH4UkqwBKnWTGC8NfuvPNNyTx2ktncGrRtq2souoybokY3vA7vWU2Fe8EdM",
  "key8": "Npi8aTGCTsFBuX3sSYrrUi33zuDkR2xAUaemvWW25eUAfXgbAajbjyBsLbmoWWjUYeNgxy1LzN91hbXcajgGinq",
  "key9": "2yeSPDyHC8P1rdRgAFGx73y3Kcp1wrcGqqVuvHGpXQYeo51Qp9hA3oJ4y6KbVyrBDQVXtv4eCWjUbRWAdNbQPqar",
  "key10": "63XXUDrGkviuu5weV3fdXrfhr7E7hcNgNn1Ehfdk3MQyvq3riER5G8XLsHdv2FTuH5MHFpsQboX74AkDqUxHuqBh",
  "key11": "2yfPAoANXWWbzmydkk13fJZKxMRzCvbGKEnHxJz12XvZJ1H5ZhJ69c2UrKJMHATkx1J8ZeAmJE7y4evb6WNgmUyx",
  "key12": "5mSRfF6vS7BfgoC2BsSLKjin52vUBegT2BxgB1zknZXjW1yLakQUqkaei9niFC6AGVmFACmeUezeXPscXHkEA3Td",
  "key13": "3xVbbbEyBp2Q4qcJsUzs8QMuJyQUkPXEjjyrez4GvPZhLWdwK1jY4sB9sbHTZq5hzkPUh39zUUpmZU8naRX8sSap",
  "key14": "47HQNxxKNbQcpQBDMpNZ45k2rHqwYQiutcxzjJFMiCsn7RggAEkWVQGGiduEZkxVzF15Ga7S3pRzc95ZLqWdiMJ7",
  "key15": "5p2t8NTMxsRuNpKqyvvEZk9xFeEDKY5kETTV8NM6j94MncwtnDCNAHckdKMJUDh2SQCoNrwJEHtsff9VkvcVnGue",
  "key16": "5LHqFmTwnRWweDBiP88SRTELCSGJ7Q7Wv1ZS1vdzdHNA5rer7bX2PdUvmz52i2rAzZCgWDXAjuBipBXgAB3DkjQV",
  "key17": "36x3bw2zc6E8usJc1d58DancL1spqLzgx3KqG4PACJYPSGL98KA5v2wiPW4KfDuRt4gwwNFzQmgWsR5AvmG7RjiP",
  "key18": "5MGReV7Zr8A85JP2Xh1rnEbeRToKazV7oXqRvooD9y1PTzuB7KwcSv9MbsmsjSBx2CJfL1BN96V2FjT4JykvW6JY",
  "key19": "2fBtnwmEpVfYbJhbDebFeRtGnhAma7NnGqkGGmHWYgpYsT4Xtdrh4qncjgzFVaPa7fj3L53SXf9nJ9V9CP4EX4Qd",
  "key20": "SQxJwTLZunbVct35U1WYQW3CRLFyAbaGXx8HFQ4fkbp1m8R9zLyEGmiPRawnmFK5YRNUdXhNQDkKgX4kkHq3rNJ",
  "key21": "YKwg1V1jn9NuKSFaUHWFZffNvx2SM7UPSrbdgDpLMiKnaXihJTGQBkzzHfgmNK4EPkeihTjphzfVcS6VfNTqG5M",
  "key22": "itiSSUCQU6B1oyHBTH5x4Gnp5AMjr3ct2a7AtTASDiwjYXRWyYSqJSRCbshHPsGUn9q2uj5Vvqjjjja5VjhqKGh",
  "key23": "66N8VAfqqKX1SfqeXRu66eaxLXasRoqAPnhErrD4K7iPWdysg2Nr1aUbA5hXuTmKPPduS2CPuJ1g8adoGvLgpS7g",
  "key24": "RBGjM4FaoVDHmmAxGtXWhXARUfk3pQMsqhDp8BPdriVqcmuBPvgD7g9ogHteqsrCA7HC1wVqWpNKPkCxK2KmZeH",
  "key25": "4YajKWjBxeA6aNxRXjLhS3YLtqYwiFUBkd6XkgFXL1aBA6xT4dYZTZR4krD9HjqxBLHd36BPsbHuTt4xfXJJZQJ5",
  "key26": "5ioVB87K2dzWr6ysi8js5LgebapJbP9a5KKpH14mm5d9KeuYKcs86eWTrNh8PRn4V6jvmbSxrKNga7HMcnUowaAH",
  "key27": "5JrHpWpfTPg1LNcYATM6awxCUkqGg7kXeDESX9eZy2Azd4MM5Hq3ypTeWVVrskdx3CnqeiAXMrv86sU4E9GKXK8x",
  "key28": "2gNu7h1ibVD3GijfS7sGsbEFguoWE5Nus5t6y38h5AXCXTPAaohQhhiLxBMZyTN7n2f39aaPsn4rTY8k7ix6VGDC",
  "key29": "5Z7uGfs5KxFeUYxYN4pqfanPRNru5WWMUSJxZVKwbuxm4vmUMhA4X5JBHC1ened4gW2vsJHxTAGYk2vcV6rAvGMY",
  "key30": "3wVG3Qsfsmj2xjF3AkSi3GUdQigr83oQuwPqaybcqEo9qeFauRZ3qicUnoSJkgaXMYNVGXshYTV4H8DLkqNdMJbG",
  "key31": "3DBEEtKugaQh2ncN5kkDdzB85mh9twFB7Px37nPD9G86JPCvWqERbziv1XYkvRWTcmzKeYnbUm8BJgymRCFFXJdj",
  "key32": "4T5hVgkFBvBLBGR9hBwRwp1uT31W16QQLwAHEtK8euvz7cPK996adn4ZhXBMr4fR2xbSJasiErjLSqP3V39apUhv"
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
