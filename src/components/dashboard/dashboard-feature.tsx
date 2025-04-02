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
    "so5qojvVE8MpyqJcxmL3mCfpkuAgYQqZEyjynNG8j5opiKxQfE2KWDtoYztzNC1mqvjYbUMGJNnfek2KbEeHrvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpcGo1iuFVQRQmF5Aesx9tYZZoKgTP39rn466AwjMayRpKtnK3zN7ypy2mR769oRhkLoucNpdWtd7bSNT3ayrjF",
  "key1": "2UYNxVpavPibMYDi6XkUfYSML3pkGRfZiAkZ3gHFSsxvKUG5JZbpCHiA9zKBX2n4B1bPHmZmi7H6WXmrW732dJyj",
  "key2": "3GBDa24uTKiEuzff8bBKLULyED2LLMWhUfhYthRkztXRckrziBGHJ9z5RRMoTnkWAQGxb3AjS3StyfabVSACmthB",
  "key3": "NxivYjHbDd8SmCWuuRk6QS6SvqHgPtLhWSHfq5sUwWfaXnPjH3CGHx2Nsi1Qp2mTMUqECS3DLMQqu8Xy9VKQgod",
  "key4": "3fyvQZ7bKW1yiWVxmrowKbJPbGY9UpPP18863rUVsjZVRg8TrorYwbVGMpyzH45haNY7PTA3vjY3xBaNXbt3dywa",
  "key5": "Jd2JvsP3gRhbi1iAdZHfTQfpCHBrGuVa9N3GfMWh2oeahU47cQZBbLJ7P7ncT21eLF5LiyoCCn6p4wiMAgXMG6k",
  "key6": "8vu6TSWsJpj2ktafUp1V16txKBaAWJeNcpzYVRzG4GyLjDhLHBZg8PvVvp4TSUxyJAWHBa8qwr8QE8oY7nPioXt",
  "key7": "3z7uoEFTi3T7iA1td2nZfWoVRh4dU9LEt5nztEd1FKJYDXMkf7QcQH1GVEHi6F75z6QkMBhFkfaDhmMLnLhtx511",
  "key8": "2oM78UXfV2aEFWkUH9XsvDmepb2nHKi4sHXadq1vqKKAcWv8HTSjQ5VcmdMUJ9GEtqT9TVS1BAjBAn4jWCSLySL7",
  "key9": "3i5WmJuoLnZ6uxWMVnTgA7yjwL3ExdD7SK6cXTdLkxN854F8CVshcBC1Hk6NsQSXVZoCxbx4JVRPGDgmJprR8fWH",
  "key10": "4QgzajieEbvTFTi5yPoJTL1QNYAvDTMQvmyV29WaZggwgHV327mMj6RtN4K7xdnENX94akXSiV6dBPFy4MnfhQsZ",
  "key11": "3ipuHjBXr3vZ4TLP1kQv8mvA98pNUQfabB6dBmT7VbdEioGaCKHJi2bDsXTaiySoJuQbmGi86CpPevEN2zkcX5Zh",
  "key12": "zTNPA3X3T7J9YNUL2Wp8AEAvS7U1L5XgTtAXs4P1Js27xZeXpAT14q1Yro93P48hoNsZL2oEaimyd1TqhSQRfvg",
  "key13": "MzHeg2DPve7gtVoo8C8NQ3hZdWwfAz1zskxXudSFdnuY4wTBrazLYAh5JSLLbidnWtXKR3ToBKoNLZr1fgVCUE2",
  "key14": "5JjHnXF7n4phb2xewNZPRqS5nf4dc2fZVTe8DwzZeRpXVqWbnVbNGhhF8nKw9NZhvPqRY6FTsvc9SfZMLb6c9JoF",
  "key15": "2V1HuJp3PUX6p22S4xZEe576tZhgUsKUkLnpcbQzDvFiMV5JjLqaXXtFG284KhTRN82YGtjPYoWs8fHxmbgwW4VB",
  "key16": "3Yxx2Vz58AxquG5MmKSCP9G56WdALZEJXf5vZ7xmHCZd5SEQkdaJhPZv9dpojafyaSASCD5p3uahvJSyv9GX2uPy",
  "key17": "2Re1CvTZYX4sG76Ht81sUTaNmQybqjfYT23WCpjcpRYcqBBVETyteokibLBeyRBegz4JStW1GyEoGtuQcK98hPfg",
  "key18": "5XdzTcP8ri34u8jZiuEAmPAALuE5g9Uz9kCvhRy3R6kUZhD867aiTgabXm3rBMhBufSYrwKkGB9qVxn8L4k2mB4Z",
  "key19": "jnUSc2e7jGEXqDbD4yPcYhY5vX66CdfMMfekxNH5dPNWgJg2jLeq2b8MtAQZzkuzr4r6PXV74UYk1JVn96S8hSj",
  "key20": "4vhPJtuReuBxqD8ekkNwcEL76GkNJEy7jZDt6VuEcgbSPjtYAE1P5AFyWHBri15eAHw76YfNQ2aT662XkMWLmPEW",
  "key21": "2w7dP1enVwTi8j5v5JK8EmMALdhT6eQ9kfYXnUYvEw8EwFk8xWKC2MYaWXKZBigF3269WCUtrDw6rqNkp4LFawgs",
  "key22": "3pv2nwaR8p5FrX4iAjkMW3sDTeWvP1zYKgSwsn8bEtV6bcshi29s988D7Wfmvs6nPQaVM443MgnTYTm84vvTWQDj",
  "key23": "HdS7AjAJzBM6XyED2DyCumdapJmWaZNCCZnXBM3iUqTUDSC8Ws4zuuCRwNMfVuPzFtyWbXLBqQDB4JXpKygSFHW",
  "key24": "f3zBSqLCBDwuFBAF86XsngBPCWa2eRX5xPdtr73bEgaEVX6imweRTaXrkdT6wQtQH4UEm484NkSewhaNFbLTnS6",
  "key25": "3nXZDnfjVHy5rxXh6UX7i5uDJD2NihFQCqUzSFUM6snbnevvS9WJ7D4QqfS9NXC16X8UcYDf6HB3wTVKqg385Vca",
  "key26": "4yzndYhGKUfYtYyLTM6gqB5SvktJQy84gDQxfjwk5e1nN4f1j68qjmgVkbNZVEvk4wjTSKemkR9g5mf2CiUKDPYY",
  "key27": "5xUoMMJBiBTMDHRjivtCibJHMkifDtd8ZWnu1zm84UY7zDqDYiTbcWNpnidcan9L11S8jErzQZNKUgFaGMaLFD6b",
  "key28": "3dhe6FGq79t3Wod8EHSKUCNJ6bf2yfo26zUx5Xj6cHb4GxDM8cfL5HZ6239tMrMWfDy56LMQWUQPYgnQJLsACbEJ",
  "key29": "254HseqNTXLx8drykreWvq12x8ubT6gf5RdEduzm7B2B2r2WZ2HDJvWDmcZSkAUF5EKAPog4KdmpLUmP3itKKoJ6",
  "key30": "BhTgYVSwFNiLKkcpi73wEjdEsm3tR6xTVbLj5bwFSshDwmveHFBTn2i8yrh4Rvce6xXrWty3p7afufBSaWBeAb9",
  "key31": "3dauodPobTrqKrvXigXGnAymBAbriVHzaiFyNPTEL1A9AW1MuqjR7zvGBs1b4CzPMSQpzvPX8xJk2bAXdxMKyCef",
  "key32": "3innvsbsueJAwo4Mv3QiiCQVozRvQzbwqzQYu5GasUxHHEg2CrAutTtFksyNUwPCgjgqCnSt2W4pz2y2EwZHAz8M",
  "key33": "2vS31ipc5FNQkVTaTBYpjzr87zUKzwgvrLizP7AxJVsfKbANWqzqbjNeasuqzUv2nd6KhFuPpeAzzu2BHtbSzt4f",
  "key34": "4wwjR1yoxt1qPgHXjc1UdjkS8WMmHe9sNdLbPAthj3xq6H8Zhgt5EaXAFE8FA2HtcqBTo9yuiRWUxRMmXifCAWt3"
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
