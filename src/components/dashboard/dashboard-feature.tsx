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
    "PzM92q2LgPT1yLm1F9aG2dPDwrLCTns1FPQfJKdJ1hfsTpCoKvKofoTnZ1Lnub2ng1GWJQW95YFGytvTbxDs77f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7XppzWEpi1MkrmY71q17ef4AFpujRxvCvo8QTwXp9tq6bWu8NgShCSRecx83uRgGrKq9yNBCme1nLDpdL3WMqb",
  "key1": "4TqPkXb3UdD5D6FFwFs2NsgdWWCqBRVMKnjfgM9cebxEXtKVbBnTPpiupfy57U4mgYerym2eTnkbgqWg8EXutGC1",
  "key2": "4RvTLfWbz8RFvfV3paN1hsRnqvyhojZ5Q8MS7EUo2af4qEDegjU8TEUeBYx52CSKk2QuZ7483wxuN7prb5LjZRF5",
  "key3": "5nfLDWLb1tVASaDmdN2pFv4gzfGzQdn31HPBGjg4D6pe7yLsj9W2aM9vpevUTzH6S6fnAuGmEimqDThqKNejhRei",
  "key4": "J34oXvKDnThbjnzZBu93mnDkkLmFZUJ75eYgjeUQeH8M4AhpyFK7d7WkGaoEfRRhxov1d25X9aC4Yhywwyh6GQP",
  "key5": "5Dpqx7U3LX4SebLC9PeMFPb2PbmugzGsN1Ut69rMeUkx1d3G4tJmpdUXHrMCATjtp16VZG5h3j6rn6fEUhoZkkh4",
  "key6": "MVSZMGrXfXHapQ8BGxNYKf24PGstcyJXozAU1u1nsDWcAomv6kZ37yKHQvZ4cFVGBV7RtUxq89BiXot5VZr3mw1",
  "key7": "hf9nXxQBWh2mDzv1zXUrY6fTPx1z3qXRccRCg5BSkNLcdkNX8VaTDKZE8xaeH1pEZWtscRqMEL2sNdX9fG8aN9t",
  "key8": "2nWPQr6DQ5B53TdWNJqqK5xGSGEWQ9YXA3ebgK9AGwtF8SrSptgMTX13DSEtRa6kFmHvtRe3WmPBmXkrwzGF8zHR",
  "key9": "36Z1oTbKvWATkqNcmtJNKb8QgsTgRi3JG5BVEL5rwdCGPjQ6vh8B9WXWvowx8gxvibpHLt9qgA3PAGryVZBK9bza",
  "key10": "4HqeVnpUodUWpbmw8G1rJQeFRE5jjPX6p7YcM6CanUnSZGAoUXMfrrzwCoFjumC92iJbLb85LTJKC8m5Q6JftDWu",
  "key11": "nzsSrkCJ3fNVxGDuKaNMWpMR6qwJ3s815pVuDjwLNdQy3wUiET6nwE4KD83fgbX8QwjgmdkH4R81aZtNn476dBL",
  "key12": "57JN84ufNPXisE8FdKk5JBSa3ZDu8o8akaoXe5wwDiZQkG7v7mBsK3GCZiSpFSSJLrcw6fB3AAWo5dQxSFLphFHc",
  "key13": "54AXjALJdEC12w8uJALsM9hG7JzSPaJ1BJ6peKDtPe3UpGdhe9ya5i2WcQbNrdodhWLNh2FEuTCaUrTbgrGJ8QJJ",
  "key14": "5EQEwAwu3681oca2iSYqXGJ1tEz53s6135RPoYgy4t6KycPXV4T4bnPjd2mcsVjWmwvjKxu2cBeyBj8vxghYoWtr",
  "key15": "5y6Xkm6Lfj8C8R8cU29TyLJUmhUxsk8sJjksumSLvxdWX2NufB1JsgMFb2p9juZ243ZUWKQJhum6u3xNWb5nA7DJ",
  "key16": "4dmzwyL7fZgkandcnSoKggLHC3MJqCt1s9WcRZDDZruYAnC2pgSYrni5uKvrRhMYGh69hAtAdHqNcyXGDmDZgJuY",
  "key17": "2y4UJ9wQnWHmhPUsM1D2nQNXhXGxQoGQYnB8r3prkyAMM1Q77UZaJKbWTbmqDj7pWU4sW5Q7tbodbkvsL32v1cqx",
  "key18": "3tvqvxs7dq8SrqGSq88uXXDrJaKc12bWEGzTGa4o4QnKUeTEKPm254zD6UkR9TwhX4AgTHS9WqwpAe7ZC7emwCEY",
  "key19": "ygRx6HcjbzV2UFhH48U82Ahc9B8ijmg1nnKFzNGRuNQJu1JMnSV5owfXxG8cvL2zxy2msiam56Lj4xKPxeR4k3p",
  "key20": "2vyt1ZwB6M5re3aqDu2RdubnQ8dBB61HhAcWTRmPhPGxsx9UEx7XugjTpgcjqBP5tnNkB1xGFLWS8xyvVssHuAH3",
  "key21": "5exP5yAbqVMjxm26YA1iveaZJjoSDHNBfcswRxv1XfxHqZmV7MxBzcizCPZ19EGKrMmzdRdn1wC6ssKPoauFj3hk",
  "key22": "2s3DDzhFcM6i6nnR3oAt573htZqJ1BaRMiJbNqKzVeCirtAJWdKNzTpJAY5rejvz4z48QJKo2gZFk3dxftQEyyfi",
  "key23": "3NkW5SpSnrsN8XbWdXP3FH4h22bASAsx2qYExNQU7QBL4deLUkjsVWDoN8Ra1Ai2kwadjqYyKvsJKMfHyGyhsRbk",
  "key24": "3bUoSABe5CjZYLgUAX8cJeVrpK1iWY8SkDkMv1wVq4WqVWCZfSZ2oDgZBURdqCsD9jbLErLdLtfkMhxAnU4asyiv",
  "key25": "5DW83B4k12aswuEfwkpi6hUFbmgN235dqEZEdBrnsDBgUF3RvcjxAVrEFG1TAuk4zCfwidVgmmkEuTsztawJhsRa",
  "key26": "2XAhhXZqMWktJpXsn6eMwEaYA7sFtf1UAudRc8MZDmaZuEFDccBWwuYJu78vsgFRPB5FPnbzFjCoUYHyZqjKNjAM",
  "key27": "4yFf2yzEKr4PbYPs31D7gvABpqJ7qNKV6Bcjke2ZacYYNM8K8Ky7baP4iXB9cGcgGTyzfUBJ1k6i5zRFDbcAFXcM",
  "key28": "3QY3iVavffN3Ri7kSudK3x3vET5yS2VxTY4mUGwjxbwpGBnr7qTC2e5bqR784zN4rY2kVF1qUUNomPySQAJpEmM9",
  "key29": "4NLx6Wg6QEMw5QKyzp5irULjTBxYXfCqbjGp18YJ2P3L99TYP9ZNMEddoxiQXn9gHgdpWjLQkCgnq3HKvQWiqnsZ",
  "key30": "2ih4N1oTLjSeJJB4sVgSZZV8DTwW1n8d27Vr8tFHsPe6gXhgSyn1vhuNY7WDoGiUYxjt3s3KaNLvub73pNpt1eye",
  "key31": "DwigyNVJFrbwWuZF37aXosh1s2SnvoXLSmF8wLKFfYNwjqjYtY9onwuN73Ni6bAoKwhxzb1MkrkW3D2u35D9WTZ",
  "key32": "3kS6VKMFkf85Hp5d9G6tZqsrrMzzSMJSrnSFk36DGcXxJX8zDnS3f7pbeKrMebk3bcvWYicTKCuWiaE6KySjstoP",
  "key33": "3GhkyvXMW5TfoWZMdFBPd3aVf7LJCTgH8YpW3hHZLnGsMeKU7N1YLXAMarwTyiw9bmzPzBFPrqHsjEa4TWz2cMhm"
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
