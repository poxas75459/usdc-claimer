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
    "4TaXZ5CbPjyU8DBvAQN6TXrKU1p99HVKR23b4RJvtJsAXtZH59ZTBFNzCGb9FoiwkooeU8eg94XrfsMNv7tdGEEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQKZNm7qxEGQSFEhjGCMQfafqSrgwq5KGU9SY1UnTS2tDDYhj9E2sncRtUsscdERKK2uWSi5gNfd9beZpokT8iE",
  "key1": "3nakb8KsyTd8ytk2gK9ETiQAQVjy5zXyanHV7Q9r18oiw7tGPeAX5EXX4NG1uuiVe9mMqTE295x8cKpiFUUmrRci",
  "key2": "3FkHHdSrznN23Y5kAgfngP8mQzFAEwNvcHW9zCG4gsBYvw5bwNkgijubiXfbmiVEtK8MB6Lyo7ev2iwKSNCkqkYN",
  "key3": "4j6F61wmU3Co9pwR58Nqjt1ipCZHHeSdnQEwE1LbZNyaqohCjPfjA7QKNFcnnf7fVhM7STVHtwqsubRZvqcpvXxi",
  "key4": "4AX7jM43SueFPqnC2Zb4eU2svTQd9vJwUsGLMvGqf74orifyeC5vsea88ECeuPmC6cSyeFuV8Kaf8TkndQ255FJ4",
  "key5": "2iV7VUHyewaMKtrzX74MGFhMx8Dc4RG75QB9HPqToPt34dnkumJUDs4RSnwDDnFTrQrjTRDqaLKTaL2WZmRh4yJX",
  "key6": "3r8QV3a69vM2BDYaAkdWHGLiJfV6UKJKQReomWQ3TMdL7PPH8MjBk8FiQGXSgXQFAn4ZWxgh1vLdaiJJMUXcAfG2",
  "key7": "35r4tUeGsXi6PiUzakF173GP1UM1u8s7SEHpsTRCKi1bPFK3RM8PEVt94xNaFRqpd4bbfZegt5iQX8cJDtA66Eq7",
  "key8": "4f3QhgW4zHktY4KayjEyN8jDS3LQZkuG9WNBoG37A52BecZvnYADqxaBBhFKZ18t8V5qgSxYcpQCWce1CV1DqmZC",
  "key9": "mZitqENYGJwGfqp71JqLquijJRfnNLg53KxKvxT4YdT8QQYEWxFK1uxwckaH7REYrvhGuTgQrHfbXwTx4pLPocY",
  "key10": "2R2GMVCtiQYCo7DaAKUtuD2zPPXpJBQnimp4m9zbyKwr69BusriP1CZjVJe1pVHXKjjUw3CbyH7QRkWpJs431jz4",
  "key11": "2JiYzBZ51dKQ2Hiqb1TsYNFm7atTcPSbZmFsycFzTbTPtud3edgdTE6NPQqyeFPAdm7JEK4hmG5gn3YkMApj7Yna",
  "key12": "2oW4ymYAxwk7ahkj2uCmdH9akZahA5upLBzMKDZnKrt6LVpjzp1Vsj2W8oMkX5R4ksqWWoaqY4TgSS3XBHSTFMY3",
  "key13": "4rdq4b73bFg7PKbvNBubX7pTa97sVyRq6aAbKt8wCAP7dSg6bfjuhbd9jbaGA2t7sSYUSWVVaKtuaKTG71Y7e15N",
  "key14": "4WYXCHJpzZpZ5gMrm99nrd5EFwU12PwdypXhe9BXyYMVEQgRtjgULbKutEsPYwDXP4SUQ4oNewDtfPPfAT776LYj",
  "key15": "3WkaoTQzMEz83d6qYSCXESQuNEsheMA8UP1UqivZeeGnPEoUyxeQsAUUgXjrqwea26eEkmSVsNG6jdo8Fc8quHCc",
  "key16": "64MoGfGMs3jorYaw9W4cTYBjPo6vniD3fJTBbUyyuYq6WdzBTy9R86JUZUagQMtYAma3yXVkyzpuBiEL66xK7fFN",
  "key17": "3Vz24RpHiNYKzXLDAYCabdcu99rPy8BwXuXpivQ3EFHGWiANGneH5HHRK3Ceu1HUWc71dnAQ3xHABXwiCQuEn85U",
  "key18": "2tM5g5u9tvNCt4VYvYrSPwbLaK689D9PWt67TcWBcNathgrq7nQYVJt5wHm5gEDYdA1tFZqxUfzdoShs45kFjNd5",
  "key19": "3tuitWwHiRnAgMLFVhStNSYDz8SRoHyVk7XSYtKr82PpQqcnCfDEWMRfxyBgHtyJ9L4HBiSfhkPu3F7F6FREkLDu",
  "key20": "2J5KDu8hUS357H8QYGFezkyhFCDoeyyGpK63NamVkHq5HE836m4vXHA6fLuH5cBZLofXdZ86f4nijqEWw9wRiwjP",
  "key21": "59PUf4TU7Uv8LosWh75qW9tPqX2DUQbX5vhMUFCmQnFJdUy8oMrk1tfvHvx2zKXefvaxS6UqbMhXSCRSWXwKuYgd",
  "key22": "4Lgqha3F2NFxVaevVej5zvDwwXPMQd6v5T1ZC88ipVuR8516jWAQQsbqsXEwj6Es2cqHZUsLCFBxMkNK6Hkp8MiH",
  "key23": "2aaaYpPWX29fL3u4mxxXaGZ7GfQosjTYxnBXGXJcwbQgjC1AAAPQfHdJG5Yvo5M5Yz7XzFKZENSpY8pkBQ357BWD",
  "key24": "59QBXmz2a1GPKT36aQ4JwoNHn6BjubhUhFfnqQxvTnFmyzZKHEJsS5KW4QSeQVNSUuiWrT1qPh2HaPfiSYsM3bEt",
  "key25": "65ednW3QmaF5npzj3TfbdP8UPK6YSmuwupzX8FTDLQ64KbKuf1twh7WQhD21GDqrFwqChZn21gTK4xMtcNvBLwzU",
  "key26": "rHfvsLUdjDz8M7uU5HLdk5EFdtgd7bbUWWBsTooFLkpygdgeM6khigkz2wLw5fzpNeUTj322mJg2uLhsgnmmJfV",
  "key27": "62MuakezJrbgAAUcz31P2bDnX49wPHVJxC3Cad8zrheVvmfqgnK7FSXJNvvJPVerH3Ysp18gQPdiwfDZF9YuJNGm",
  "key28": "2qgM78bmFFsvtQgR2AvaU4Q5Wod1FfeVRGTv24fZjrZyG4fH19KBt1LVaWCSGhx4zoavwjN4sxDpSnNjQDDcBgS5",
  "key29": "4DxPAxTZ81SqgSqibVxWPodyC4fWGEbsVn6xWVMHSXkRyZLabqdAfBnkrbYkCJgq6RBscSMDK8sG1XnV57P5xDn4",
  "key30": "UYh2oF4JHXqNYk5Tzpqwg44jF2x24tVWPySiV5KWHoV26yjqgyNvcSB9LzrxZytUMBV8yjP6qAS5K8dhq61gdAS",
  "key31": "kdBSyfoiwF21ivFzT6jMVM1Goipp3Muq38rNg8rf72VMup3nYZbx91SzgG3kr6RsvNeegKhCy8JrBrotvnNsavB",
  "key32": "2Z3Cyuk99yNZxdXiX5y5c1TjpUZNbBs8WdsHAEyTdyc6y6GmBM68PDwVh3yDxBnyUw9KGgc5qXrrkKZ3Cpy7dKm4",
  "key33": "5ew3rfrAKweHfsQEE4YKNUcEEQyUsbPjLdpDWsY4xBLWMcqBpCqyzW8RgvyS3dqDttL4F4ryrC5tNbJH9rqLs4LZ",
  "key34": "3PpVJ8hQMA3HK4aHsuMifwtcia1bw6wmFuNrfwshZ8NkZ3Kowp2cvQZALSb9zAtmYmWwLgjBaWD9A3SbinsU4rfi",
  "key35": "5kxvHS88dGXRjxYquJvJp4cZVX38jL9WcbqepzmGEVc6AvxKVVaLEXq6wYeZ2jWdBiDUJzXymyTdNTwzdbqhhaGt",
  "key36": "67SN8eYaV7D4TebBLHVWU1LeLbzhxCM1L44srEyF9qmu2L5wQ6iw7S5mbCQNhyo2pwsrrU1yrS9ntsKsQdHq1ouW",
  "key37": "4rBNyeQ8ce4Qw7cWzyadjxBh86yJCCMnXgwZH8WSDaEcaeWuUB2qKEALAtzoVntGimA833Tpu567VHcLvBjnpDzy",
  "key38": "2ZNywMoewQwGJkj7ckX5GkF7wtmZqkaStDQLZbePzXP7Hpp1iZXgS1dffuWgNuJaHfEM62fr99ioz72mw5EFWk4s",
  "key39": "5qJ2xCL2rSdW8YGJZzyXkxMiajcBGnicPTq5drq5B1fSqwrWmFNxna1DEG53TLMemw5AuzujYaaRND5DygVaWYyn"
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
