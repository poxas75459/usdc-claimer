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
    "5qphu58WkQcmKMV82NWVTjwrMrxXH7q9g3itnfvQxvqZEnYhj63VaJr16pX4dmLLGn9MH3y6gcirwMfjvcaa1iuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5s9ipXLfDCkpzod1uKyKMJvMuLgymJDVSquVGUA5TkGdToJKkxX5z36CGKPJooE83G3RSc46hXPA4p7RuVRuyZ",
  "key1": "5FFFMZiKHuQAedxzP8uWamKXVDmNWrfFJgSp247sLuyrLJso7AZsPVatHJGxHuepfAc1QjZwWHMPdPXn8M3bZyHe",
  "key2": "3BGLyTG6QbTnRCx7LYei1gy8TzsFwiuUdarsNnjozQCpqNvduwcgE4wH7teGXEqcNCZNxTjUyHec2A2MYKPmMQ5Q",
  "key3": "5qTPhzMMUh8FLExGeZvCvxxTYwHpS41PxEtra98rwcQ9dHjRy9qWbjSH26ZY3LQspEzMTVCjgyvcdajg5fDVTeu7",
  "key4": "5zv2cTCNLoqXsrek8EMrtKyuLPjHMVWxSfz5E5xZCaAzWwghLdxJDvUKa5fE58U93umPZua5v9BEZJjrciCqgmWX",
  "key5": "5VvQhAoFud4g8awnJz9mngby3v6GRy7se54UPb7vmoy966ZwALFGMPLGCvr7WeULmVMrDd3VPTH3t16CuccGJsCZ",
  "key6": "49MD2vL3Mj658JVDro1UAEHnGVqwyxEiyUMQnmJ3FK1wbYDW8L16mMjoeRY1ZkBEowTjtnJgeine7vRpdrP65wyW",
  "key7": "zqvL4Hy6442zKQVxoLCSMkP6NVAzRzUrqYkYJdnZx5JC4p5RQCeQZmTihvPx5Npv6zR9NGTdQQ84XD9hLgaKnST",
  "key8": "FhvUvueB6uGSgPaNiGyYg2z1rKe6fQzuXULiEj3davsDmn1vZGkP4E1zvm8aw9kgJQXLJkHwjq5Ck7SD1SZquJd",
  "key9": "3UExpra8GKixsdzkH2S9vLUJ9uDxHzrwcmtKUrCZCXe8UXHzKCzZzVTVu5khUqxLrPR8VH5ACbYpzZT4fK76qDY7",
  "key10": "3zyQMkt1W6RWnLuNeUfW5hptTWebCJwT8UsCEcaXNXprx7LenQdYEXhRSqv5pktV3byXTKe16eQq2cC29F6qZbGf",
  "key11": "JcVSALGuuMF7Kddq4zZBC5w6KKE5Kmkoeu53JYzwcGMkoKWFQZAEcneBytSBUE4triT4wEeCCXm2UxdyJTKGruF",
  "key12": "2KduJDkGprdbCFg18sk8pxSAa6Gc4xD5PcDkJJCp9UbgX7u4Gt8TuSCKxMqhc3UBrsMbFPXwiK2FuhyLgq7Kw4yw",
  "key13": "51AcuWWKFX3REygMmmuTMfY2T3h1v8jfSvgXRvN3gEMntHYpFWhaaTLDynbe1iKpXKgV6kSQxWYv2jemmE5nwHcq",
  "key14": "3PVAWN6v6VsgGBA1b7aeL7ZWUJGZHkGEKh95g8wJak6AZBRdhSKPhEjvneG7eSDjJ5LgPVgrAbHp1Gz4KGoh7f3W",
  "key15": "61xU76MaMpj9yYFeN58YyfPCBLrey3twhjAcGaq7aqNeeJMcBZ7mDwgzJQexLoEf7uMHHGqjRAQo2vdLQQEZwZYj",
  "key16": "3hdM1SpNwLsiRC9huW8m6QwdPXHaTTLYY1VpwE9swPuqBX63uLfEow5i8h9W3XwmwZ43U4auLF6Ee85UfsJ9JSuU",
  "key17": "2EgudGFhPA7YWpmHRrwqWK9KXiuX4u7fXrnyNz9goHaJiwi6xfbCBU1azP193fh1FMGRKcvw2uW4vcz2WXCV7Zw7",
  "key18": "5xEiu8KkUswEmpnnDrYHtZmHQucNq3zzkSXUQ6WLFuukZRYRgQZKKTEPYZH1m8Yksb6uKamGgu2iEqp59S4fNeHs",
  "key19": "2LtcQaqECHoiJSjBFWYLASeVd6APXEMuwb62GDvUwHoNEHgnN5UekJcjexEUp5Ui4eGXBySGwAxtDkhn7xs2zArf",
  "key20": "5KSETpnXV7BzmYp2ERQDMQZMeKYjK7DFsd7TqxiGiBkAafq9ioCJ4acQwPGxYj9xuzYRgqFFzuLC3fkbCXUDBJEy",
  "key21": "4vtzmj3Ph88k4LFEnrYQHzfJ19McfV6nsEh55NSL8ibfvPrzfQYsM1w4sXrgrKsj48QRXVoXYmnS8iF5mEJwuMVu",
  "key22": "kJNWrRGBokTz8jZtCAo6adWpKYkatanvVmsSBJmkLWLi4Bxj7o7B1thUWpc51nWnUj6hw2pekBv6PdwWPtDgRv4",
  "key23": "2xjcNAr7pzCFzKSFxcrEhS5zmaGHoczhxBe7NU6rthTuAkpgzNWewcpD6NW8oUjgSXViCjhjokHr9mMDHoeCLG3i",
  "key24": "67kC8RnBJyuGoxcszsswvL3qAbze5TLycFyfW5nba56DjnJn5fca2xRZcboXYkpG2VTtkgAzDM56KCkJav6aokD2",
  "key25": "2TP8Cd1wG3ivtGPQtgF51gkNVRXBQBKRHuCwhzv9H12J4DGahUWGcxWVHgzQfHcQmiEsnoBrzKP21LJbq9MChXtQ"
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
