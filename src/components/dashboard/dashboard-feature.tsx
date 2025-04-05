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
    "4zYzRyXU4PVYJwBoqbGnt2em6kRraCX7c1K8DjMPP1i6DfbtD6Uzf7zZdHmoC7e5ng3qp2dCoMxM72XfVjByFR2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XK2bfjejXTmAXyj8VFSEAATr53WkgBv92gEZq8Pd8tg6KWPA2WpFxtVhojQSREpgqDxjc8LcGRNQVvCYrDXV75e",
  "key1": "5o3C2mqhxZNUaCt34TQm516AHhh3hDWncFngBXBYU9sXiQDpWkf2kKNzKPF2G3fdqYj5PR1VALoMY6Q6BxbRQ8ei",
  "key2": "2Hc4C5SPfKZsF3q25NB8rLQqMH6XuiwJg8g2iJR7Ctw2fxqDESx9bgzhkKm9CC2S4R9uJXAcRfnAqDTS1xsnb7kw",
  "key3": "4toSRs6P4betiJKPsMMShFmDnaXioAucomMuCsDMzCUYGJBtzU8NEfrTsF8fprpt2P2PgruD74131yfDH1T8WbzB",
  "key4": "5urAZJU89zQoRyZsTsiujAxqhzpqTD9cfSeVYGg8QqCwQrBexd8NPXJbqqghRADGWqUzpp2ZZva8paxbagHk6hLz",
  "key5": "5H5W2mBN8WbMsXECC7aVWE2yAu8S98fApZs9edwaykhFevzam1u9n7R1qj67QXqQ5uEsLXFJmsUXTi6HRGVWYcgu",
  "key6": "5JzCDiEB75ETB32qyd5vazsyjk31AdZYA4sLviFyWY6gqy4PWSYuZM3mfGi6uk1gHpS9A4wzDHvbbu4qPaEXJJQ8",
  "key7": "2QtUcE38RQHmg3pjptjjeFG94LRxZ56NWVbUHsLBz3SPw9VnvuW2xTh38VoubHw1UUy13VAUjHxwfrKXaUZsHu4Z",
  "key8": "3otXaTXDWU2H1inUERvutQooSPeESp1bH5SQBJKhmAqw7XgqfRp8XpPUwefE8e28iV89m6dD9FXnTjQg2k1E7aLk",
  "key9": "2GnaYwM8HkgdmmV9jF7gUJfaDSYrGRfTgdT4sAn2Eenrn88AxBEDK3Tch1QpUvF9c54Rh5ZVEaYbWtpsUiqRPFtB",
  "key10": "7UYzBMvdGXWuksLcQSioHj8YjN7j58EY8cNBuhc8abu7DacFezvRBA4fJTSHhk9WdZXAzmzaCdfqonh7T7iXRFp",
  "key11": "4xyo9amVMBoMvBXM4qgHuJUykKDFAYzaDZsUHmfXpKFNRV3XsFPmmxE5RENBXsB4h4ma9S7tTH8oHDAdnLzr83gH",
  "key12": "3SctWxzewbSGx9WjWVHqg5E2XQgmaqK4UCdsgPLSsr4bQRJ1QeajBad8LvdDUNFFWFFAGgA3KpeieUKiLZpGzkmp",
  "key13": "4xBhfjPqeH6LTPjoHxtr6qBmPTB57ro2V52d9fympemVyzuqV33L8zsMHPMSzf4MbjUDDshqXPzbGZsHXuqSs7ew",
  "key14": "2ELokPKbk1guikQqr15BYYR5h4QFHzXf8sksUWV7wVfc63pcGghqmk8DUtMBunzjCFvRPs2d4ihmZBfyEZPp2aGd",
  "key15": "3yhJyRmxtXyr3EunoeEXjG8eC7uB5u4gJhiMiG4tmfPaX3asnE2BHSY7ACZ4egdph8eUKeg4bsv5ZQxZ9HoYbEaX",
  "key16": "39yzUBcmwbhhsvGrXQYH4zc1HRQRvN1msBqjvALqePoVYghpvThQa43samcvKQqK9421jJ2dLS4jVPt8sJBWr7mi",
  "key17": "3KXK61KVXwGFuVg3wq1oWdzBQuYyog8DU6t1jpEbwfvtrPyP8aabot7aFcfMXJGyMehhKfmE7FmHArMkrXtnuUnU",
  "key18": "3uj6tYNq2AQJ9paDVj4E7iANB4Q8MZNFK7PsPvgYnayZsdhz3ky4T5Gqv6ZnVh8bUNC3WEEoaTLUHPkeHsscodgd",
  "key19": "pvkr1vdAF6paxSJJS21DHBkQWqnud8sdRBLv64MpWqJeRH3uPww9VmvzwNvPUHrJxcAGPqpm868P1AGUmnPEwFK",
  "key20": "2PoMULCubRs8oy1oYb4eEaDnkiJwqsjyJUGAZTUA4cwScddbc7wK6HuFgLiZmRQa21UtGYDMrQFCYP76YPtjmGuM",
  "key21": "4T7GSXQqTXPpfUGRXxSZU2SVZJocXgYBD5A7SvrXHzzmfEZVA75m7g5jqLBMonsy5cHdzs86NaPCQrskzvsfg4aj",
  "key22": "5BYUGTaoghU7S1kv496HojwKgepqNbbCGxaZwTNUDSXeJ5D9ViuBJVy8SkwPtWhNW6ughAM8uCaNiR2N6bDwrDV2",
  "key23": "3tdTchZWHYBkacGUe3qTjq8qEYxrVW3hU86C9L1TNuXDrVaEyUFA7FX5ENrCDTfdBndU8yLSmjnXGvAAmyAfjasd",
  "key24": "3cWeVLMuhs5nHtXgK3aKcWb8zuYh5XaPQXvnBJiGrcbUCzYSjRoibeFegtKvmcqtJTyjsYKWMD8XVeDyPqLyZzGJ",
  "key25": "5nPxnAGN1ZjdyMGuM3ZV6RFPFAtt8sDJRqfuHVx2gBrxqmCzr5cwoRsm8CJxYEMVYtHoASqKuiVtttwdJ5CSMQjM",
  "key26": "3b6o8nAdSZMvdW5YEMcaTFe8qMKmZi3VyHZbGdGhycBHFWj7QVXZSQbNXXXkFMJkQP5LHJLhpsWZPHHcs3T917a4",
  "key27": "F17cmPcSqXo7UkymtxHY99FKhoZfVN8JoK62frkJyCeRq49TEYpS92nnsdkVqjrFQvXVnPaw4DcxCJMqGrjj2Ye",
  "key28": "2XdrNwJWdGdD7L3NmdMPy4jnUZh2hHhjZouQ79nd6Z1huq4zqKiKJGdVEZnS7HC2xsGF6zpUKTJfhe4MT2hQ7u5N",
  "key29": "4FL6toGonn2LJVB1mEoKBY3H6XWiAYGetcx8WzvV7xtP5DYWDmSsDvjXJ8yBr47NLNvbkXm8W27kDuoTxgGECoLb",
  "key30": "4Uw6g3FUAeCf9cEEpamXoKSk9DbhFMrAVbW2Wd7kTWk6krVi2fXn2jKCXDzAuWGqhKFvGkNUYMNHuGHR4jsu2RHE",
  "key31": "rBBUCpxRwG7TNLnZQqkW7GAiyBtkbZGeHG4hvCRD1rsLvPe6CcB9RD96i4HVBpEWozAPU6x2Eudn9EJqGrZeRzu"
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
