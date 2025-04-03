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
    "57psGmWR9Matfgv7N4oTvXY7s6Mj8pwNMWc4nb74KWcKk5841VDaMLmancbF5vcRjuxzUoxti21ZMDXAeCg25Rre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfu42QjDAAa1iDq3vSrdjYyAmGnRQnsJP6x3ZZZwwvJEQwLZCHuvkdRCswFeYMGY9R6aKwT15UAcYrv6sewbSnK",
  "key1": "5F7haxdEgVh8k75vAXvz6T5q1yKoaYX9S15zd5rZ9uhWgjDMRfPgCwHuP343ZCnC2ifvDtLfjJvT2xoquevVCHNx",
  "key2": "51V2j2Urt7by14PqoeE33f6KZjpfnPnQF1NX4HvuHHjbzN6rEMvYiNDZt7AysiemXEornRUQVqwnfkaBvcxgYkFy",
  "key3": "2oSgqKLdJVGAitEzYX2yWVYEH7giKh2WFuWq3uA1R5ro3Po3p2zYmH4osQSFPs4VHygxRZPtpjTEqfG8U7JLeXpx",
  "key4": "ytThUALCSoSd9NDDTFwJAJVPmj6PUsSFKEXGBCUYsuU3ctFc33ZL4itYJX97kBjxNqntTtZtnKuhqf9ARd5nEhb",
  "key5": "2KzaeqFj26SKrKwLYgkVsEnvKRevewMjkzHLzVEXodVGdW6yHbjziNL1TEZr9fgByqCGSQCUhpFkeQ8RyynZDJDi",
  "key6": "5QtZm9TSayEJC6UXU2i8FeVE3cp5cNV56xr1AuMi7e2LuotZnzPKKypruq54jCZ5ZpmzRdy3HYMnuA7ck8NvUrkn",
  "key7": "5B8Ux52vaHr6rF2kwmxfpxfRmQFhgbmzH1ruzArGyc6fXfndFFPtbtAdDztFH97DmM1LpzMfihu98DV9XMa2ebug",
  "key8": "MhhrsVKrr8amEXc4SdRyNBC6aMi5CYJ4U9Zf3eALqymeZzh3fAECjQ9ArFApC3MVReP6PT1orYHYzGfEs5XFdx3",
  "key9": "4EL4ixU3BuqViXVxnUkvrpfpQ7jNy6UN2YjYj4TUEssTxZySdeMCo2hS8dTsTDnrn74w7tdZj2GYNMDmTbfbmsgt",
  "key10": "hrQqA41xEdnj73Xzu6qp7C7X9Pxy11Svg4r6zaNVzxRXaesJC8EKQBnQxQ5ne2ucJ6N3Rs6cZeNsBccRkC3FLVh",
  "key11": "2kqLHc2RPkMxjW4SHkfCRRASmyBXntAX4YxizVpC3FuXsVYU8p55ELmc4HYims3z1o2jQpKAZnP1Ju1VmkfssduD",
  "key12": "5mHsijWX9VDYnk3fK3onMhf7PJKorbK8qmrvmoMy7zfBtXSpjqX51UD1BUtqknHvyQCTanFo6iGJBqHbs3q5HNWL",
  "key13": "4WE7pAZF75BBw3gtMtk4LN6njN3BA6FBQ1mpB35nbPRPndoRdGFNjb6MUKUdsuBtRhuq7iLJtuN7fkejxMPTjkNJ",
  "key14": "WSwwwxTSYr28EzYR3bZKBQZqKT96HXNb374UUiYAPkTLo1mDXMDsAhQvuaiAzYs3f66iWeapzrDFASHmQytuTiy",
  "key15": "5NBFGGebCKZDmaT3716j9abh8qXHxiCUCcJj66gQT9apbPaYhNk4r96AKAYG5dQgxLmUEDePeJatVmzSvpwqwtCd",
  "key16": "34AFzwRUShJUVwEyGw5hS9EQXKAUk6rXGFK53fpyPjdUw5xYTYft5A1EJjKLYTcRVuGB8BCagDFZ259DrLB4Z3xv",
  "key17": "3nhkckKadDPTWXwBJNiQ6o9c78TLVWojmxeH9eFgpvqGJgnNMBkKGXpKwtHwhizR7pSvpZcj9xX87N4bYdPHNGpF",
  "key18": "22hcsSHtar24fJ2JBEMxFq7Kb7BrF32o9cFzKnVnMhDGAm2eQ7fG8xz4CvDGWBFXkjX9z9sZQCVWmVHfsSmag8j2",
  "key19": "3BTVGTANfLZ3k3aJMcri86zkWT3gGBbGL9SutXMVkbhhF6TxLeuSvnmZcKesMhDZUPxy27PjQcAK6rvPr4ohA9HM",
  "key20": "4aVmBp9SoozAJSwGTfN4EVwHYmUG5rANP2KHCP29Nxi6KCM1SAgZkfQVsNdB1WNgcPcw3fjiSVmVWS811exgC3ss",
  "key21": "2zowcsczkqMQQabK1cWSH8ZJ9ZQpgDb73SnKPspw8ur7Kq3tKzQWG2ofEJfec7aRp25aPgb4exkEvVH5iPcWLAaS",
  "key22": "3KYn9WDdbC6EJZ9eqQmFcqHSDKFPxJzdRvfYSbeo6pxxZAfPynfuz7nAneNFrfyTR3mSn8DzpccLzEGcE8W611kw",
  "key23": "3Zf8rA1innE138HEYMBTYdiT7b5aG7cfxrfvUCYwoGgQjkr3iSRrZmgiASRoHNnj4ZoAEZq9mNTWrJna2c4TTgCp",
  "key24": "rc33Rrnp8qVWnLhEudRkKHoRrgVkhdiozN6eCVSAh736j8FdxL8WH2sDcSnkfLHXpBBwFPrJiBm27aZnkcdKikg",
  "key25": "5cbN2BwxgxkaSbqX8DoMMFAoxxFvz48s3SvNoWqLA1n7rBKkWKsaeYyUrSvwuQNMRVPPadyEwbNTG2U3ZAcJkiCq",
  "key26": "6wEDGy9HDZ4okhmsLy2mb9VDypoe2uPygA7maL74AJosdJEhuyNjNVik6HQTah4UwzpgmoRvckh6H4x6oXGVeyQ",
  "key27": "2aQtevFPN4pb4hdgsARrRLgh29KeEbT7jqbvUp18A5XTXNt8D4N144FS3UbZ8WMz6espRd4BcNnr32JSVnGZXfqu",
  "key28": "3GqYJvVoUQgUg2W6ZJTMmnh7WumMWCxpB1ujJfWtCWPfMGLY94BGXvNDjNVUfn7SLQ77TTZFVMLjTkh51QXJBFHM",
  "key29": "3qqddeXcwrDrqpCttWJ3LBXkBSMrRWpW4kub8mfDyGj7m8Js6WTatFbp6fMJDe3fEjTHFqNAogy5VsjmXwABDTve"
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
