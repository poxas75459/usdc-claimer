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
    "ks5qe1ja1YLhHGkPzYzmr4kXunBFXE3MFP8ib31RdxHXfF7Grtzwsfkz5g7kqyXEDiWWYnzLvvijYrHkHJV8Y76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DutRdoyNLjGGsnaRvFfZR79immbqLdtxpbN6mmo69NSEPgihjMvLU6DLQWYk3TZbDD6H7jRxZQPXxk8jA39JhZ",
  "key1": "3SNWxTt7pSTAzp5kGGLDDZRKAh3giqtJ8Zjkkv5yMrqqa3CZA3bEbpNLtY5XmNSF7vj7MFzcgkVx3BQDQek5L5ZW",
  "key2": "2x5sFVmB2rsuSSNRnVWBYeeQhdDA8RuTgX8CN5N393tARcgHfLP2kb31je3cKueysw8VDsZoFYK2wxqSN355Vxph",
  "key3": "4NKzZ5JfNd4yYnskjnQipZ48FVXAPVGAj9nD7UYJ6agsj66eVh1yr6nhaoebMf4bXvxqffuyeszsQ1DTVtjEnq6u",
  "key4": "g5MLSo7j1qqFfQvKSJMgnB2BZZ7hJnqTtZmN6rpguRm68AX9omMAhqed6Wc34neamvgUETebmUT1LipgeD4WfpL",
  "key5": "kASGBxGhbEuqkiV4Qw7ATyAbQzUXVoSNU9245nLwQ7m21niiuUjqYoyqRnqSeiaMh5B8AJSL4uKBhp55j1T9SYR",
  "key6": "33ARqBEFeyPeAjX1VBh28KVXspGSqRNrJ5TBytJGeFfv9oxAFnK3dG7nU8eZKShTfZQqTEqNX7kFqhZFNt37xWMg",
  "key7": "2zZuPZFAvvzLMNkwyw4pSQgTQxfqdLcnitgdUmvjGztDxjLJtyUThYaUr5rK5V6nWsXTFyQipJy8nefpZEAGR6SP",
  "key8": "4hqP21V9JgciAdk9RYFAQ2XeeJZoQWQMTCNzZ55F1RW8yyhtNR72vfqEkyFPgeX9nuYAjeygsgEEACK3SMKWVLEc",
  "key9": "2oiTZSLWhSzAhpnonmBoSe6xhBCFazVq9LedtAg2huN451uXBGenBVjvP63m1NzTKErkNNV8nW3TF8AKJvqnu6So",
  "key10": "4smysHd6RPcbr8bf4ue9pGX8qAzPDz2GCPA5ZHQfHpmmrjVW2LhzgjwYppL2JaEq4vHkjxEE4SUVwTQBd7ygtim5",
  "key11": "3wP5DYshJpm36rWwHANnLjV3QgWUnJTv5fnas4vHnQv7sFG5wuKq3KVnhBa8aqwkRaGTZcBzmAwn4CkmCDSkAiWQ",
  "key12": "47o3ZGTWvwm97w5ksYo9UCK1pYGZmX4QpqjRvQtFZuURiZZy97v7W12uB5ttvTkmCModK7HpofifwVrdgcSzbBKZ",
  "key13": "Ab2DTWbZraZ2MDpCNCNqm5E1TTyZBcPdqqEoBYe8h3VeyMspgepnev97dSniyoxgK1jG1bRrAPa49bSmi6sGidn",
  "key14": "3yLeErGguJRQ8atTYbJGWEpEA7aaGCCaAbmPiFscDwAufsCoDrNynUiYjBafXFpM4HtVivoFvNLz14Bk72ERMUaU",
  "key15": "2rjtprDTR66HHxi47BsH6Df3zJaiGG1TFJjPETTiPKox3QrEWXWhUmibjCcVVzec1dEaB8FsjVrKF9g9voMRHyCD",
  "key16": "4tMhe5z64JNR4k5R5Eoa8JrykmxSYuy1dism4GKkk1VYXtyX7idH2BG5QE8G4sproW5Dr8EK2azPrrJN5QP6WpSP",
  "key17": "42SAvdE4MAJoQJw3hLEAWR4PcULJ1hTi2kzozLxTB711jzcMB1nMLxr8N2Yjhj9qfKDjmXfCqr5tKczi9TmEQVgh",
  "key18": "5P7Jt54Yar58398kLgCjAgsjWxNecuxS7Yb2ZSY3ikZ6WNx8SmDYbhwPvyFSqHKT2C6NuvQqCbDz8xFBPJMFVjHe",
  "key19": "4xd47dTdNBrbJbJRCSFu4ARDB1F7caQbAM4f6T85Yd8ZVHTBSAa52uv5qUYUkRHAf5LMHQdScEy1U4HDpCnS941c",
  "key20": "NXsEwDD4b137GU4ZaQfzMYbWF5YwLe4QJTYx1D6uPwDr8F3ZTdpKWZFW3wiSkzsfGUFQC7oC9gVyHSVX19VyDhV",
  "key21": "59vm5w79eskXDmvXYZKjRKHY8H3chtkWhH79ZRwGKTkU3PuwaUj8RjaC3JV3CFwHr9DfBkxqam2E34Vg7b6iopFE",
  "key22": "tk6dU3RZ2Fuhqr7Z4BAN6RQtj4LfwGNEvnKMHX3uqpGFo7J57BZp9417DuQxaUp9ACPLCua5GJ7aDk4yhVSDG7o",
  "key23": "3enMV43u7BJfLUveycyfd1V7Q2W1tx2uSuzeefVY5GB4QWwSp4CWorNnS7m5SrHtErgtrWkrGwkLEZpStMMR3kbj",
  "key24": "3oGKcnT1YvDouF8FMUyT39Lpk4FmZgBQQiLPmxJCPJ4KyUGA4mDnUNAcnv8RbFfoeBPRaBJHQuKFPyDFKvi5gkyV",
  "key25": "5FGo6gLiuyfXRyPFN4mRFTgeAYFCfaEqZTU45LXgtdBWEkoiM1kD5toASD7GH1uBcVDauRTSQRU85aDD1qGzjByk",
  "key26": "4Gi7jHDWZ8uTgwpELrQ5HKcquLTcFGVb7GXvfAsnqRyNwBsmhMNHuJ95VocXEHdvVRLw4jReYgRcDy1TubHkhzQG",
  "key27": "5itpwSprmHjV2miRmDboBQ9vbCBQ3toWBS8XHy67fuFMpsKq5zmuZaa7ZV3ECK7VTVCwfjvtH5Jbbi5tMZfonwfz",
  "key28": "3iAmEoAiae6dzt7KvEYjCaBTsJ6CpStS8RACZaHWwVrUh7VNSWz9A3rMBMiZMnDgm6Mo53MoqwCKrbZw3BUq2hdz"
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
