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
    "64cCrDxgt7pRa4d2sDhP7LiWFwTVze7k99MaCYNdywDwE69x2anP3hdf2F13Agw6VhaEXhc6ABMPyNzMsjbXKMCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55JnEdBwriddmyhkZT1cUuUotGuDJv6mZGVnXQnxqWdfydDFnaX96XgEk1UDePQAJ3WqxB9f9w7nnnZrsgUxuqnK",
  "key1": "5D79wGSiiL531GFnzDrU1FLCqXWrdmWtttJke5wgY2PQpibEDDFjNu1EzWiQpcEfkJzLck2xY9FbDM5PyuxpbLLq",
  "key2": "9K1ztZggJK2q2kRSU8UkuYS19Wz1QkJc74kqVMg8BS56Y5qKuvdow6Bz75RqdBXpQex7nirgvDnVWkEeUrCY3iv",
  "key3": "3Sj4EV35Yh2V8cXG7WEUPAPRKkrwxez1kKeGVm5ubSxqo6UhLMAFMHJWsWrAzHCAswYmazAGJMQvyJHQaFFfejkK",
  "key4": "4taBQUsZfiNzsC6NMyW6iWyWCBMV9YLukk5B6rGA7BDG9KBWoHJ6MiJxg6JALnjSCJEzuAoGq1w2LvT5KEpdsrdi",
  "key5": "5KBCKuqHeg8cvPapZ1GV8djEKdqKoXYuPM7y2DygTZUi7wp1Ja6GKKfQREC27PVDGSn6fFQxVLvWgn6DBaZpLcaB",
  "key6": "2281JLa8qd7LrJs8R1oQyWGGdcqvTTiNPZ44hkAxnQWeZRSQXQPVEo2n6vLqi7XU86ioimTgieh2qfhmnHZTBKNp",
  "key7": "J5tCqNd7NY3Cepp9kM9mBvFaLvwLb445dtjV6NxSnjAJciKE9Jw7qYF3fhYHjDDPeVT9EC3F1uEtR5o9XWbWcdQ",
  "key8": "3aGgzukczt6myJFBYsfcqe4km5JRyosj1drxJuTB2HecvuPCPM8w7MnQZzV5aZoitWvgSjs8KZDzZKgNQAN7UwuH",
  "key9": "5D3Q9zJBEt7uwsEJKLdSStLq3oyZR5umSoTUdwhvgivhm7NYuzDbLMw69LbRot7FchLiboHHMNyki2eF79GqE3Xi",
  "key10": "4ZbUdZj1U3H6SjSbuJ1Fih4LhkMuzmqY7LdMF21jjS8J8i9GWdF3UqHEFAeHBS5sqag1pRYcLjA8obRGpKAKh2Je",
  "key11": "45czaFvr31LYc4PFppdebmTPgUzvgLMV7eCQLjSEqxFy12FusVdzK5bjDat9Hg4YZLc7uNEYJV3hSQQ57HGyRgUZ",
  "key12": "HJv5Jsz4coAGoYkyawA1jgH2pAx5uPCcV3Kf2gErub1RpiMnVoR1BS6xxjAJNerKhDV21XFbrfAJ4VjAEWrnnU2",
  "key13": "5VLTrNTHfFArD2GoooTEM6b99Tj1WmhaYm9vEZCW6ZyjQWJqEgWD94U8qSfUZyPdetNAmWCSZKxXdp1jofUwCEq4",
  "key14": "5A2NAwPuyht4s159ftupwHtnqf6Jc5rubJdbKRJHPRYa6Fa6wHHJUytu8N6i6cYZ15jwF8T6XJ8HZsAEEtMrobEL",
  "key15": "5H9NMLNtdS3vNHb3KLwEZ5Fti7uhz7bY5QGjBjPUDYco55vH6UKbHsw9CFTQR8D8NWn9bnHzwWMRbpq5iXQCzQu7",
  "key16": "3SjVE9sWChFt4VAkaPY2yzKTZrWuEYZgF7jnUxFSbmNM6Bwc6u55MiPqQdkU8odAsJxHXmaQmsF3SHPB1c71Ngs7",
  "key17": "xXuwsnFX2yU7ty8buLVvLm4hq8iwTzipgS5p14dJfBghbcGgPmTDT9CH6NrnjzftbSYF9AVNRJ1PmxH2HTatcF6",
  "key18": "kmdCrwbgjwocgaCnVZLZzJFfNFEjtDLRX65hC9aABWsLBxqjGBUBCnjbM7sw66F8wqwEKjdvMHPzSBbtuPYxFRA",
  "key19": "2riSYVESgrfd7uda1vXWQDRZm4vzqUXuk5tDBrryV238bkiP57xZazEAEgenVniTz8xYR9Q54gCASGGJUWqJ859G",
  "key20": "Mrn3XHuoYxsjr3w5Tm8NdCpNhNLD6RrwDXgBz2PhZ2JzApqBpddDKnLKpFKH33Ffuq2mhDzWDF4J2f1Xzu4u24e",
  "key21": "4rE1mfkSKqHWJWaPWChWcJRNpK5MpeiCvtuEov5nsWZDZ4EhsMNJytsCex34T5kY8ayUFN9NjDW2pD6GJzFWCKkX",
  "key22": "2GFciPU3BiRrnouCZCSNkwqdsru4929NWiADD7o6Zz2f7EixK34MoXSDNXbvM2hhrtTPz2sraUcw4ZAHGn8FKvTC",
  "key23": "5hUYDT647eRKp9KS53MEHDLGHjNtnStTRXDmhkNmiapeTEmFVxjzVancrBw4qW35Zv2qCzoKUgSF4mGT4KjDqYbU",
  "key24": "27HsryfkLveaAv8ZTPf6kXTQDNT9H1nDwAVzL9wX5tveyXDjqUzk7jxaRXk8ioHDg35XhfLBk5rmtReVt6bSMRar"
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
