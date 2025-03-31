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
    "2jE5QsqUzBoz33Qa1gixbegj55b9qZdb8EZJvLXZbcupVCdpJcL8KebaSBPJyzeuMd2bvvB13XUyu9iJvb8bCxH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbMkHngot9WhCzvg42Mhg1FMFFs8DsFsunL9a88HwJtg2Un8CRqxjA4eusFaR8MuKgwMgD8dY3fPzvMYHXERaPj",
  "key1": "2Ju8d9uCgmySe8KQoXVZ4diVXtMgfcyv65zvgBTsTXnAQxk3XctGj6tUDDuGtwccWRjXYUw74McJ6DihUxSEESt2",
  "key2": "25o1JEMeSFnMrp8FaW1E7Qcq1emAdjQ9PKjZqR6Vb7b6D4fJAULneM9XhSQhFyUBvfjpccxi93EAR2V1hsJkmeKh",
  "key3": "2gVxSYQY7tmC1X67DU8FpNEy7ic9CF7xYmKGgJkm1xeRH5VL6c6Dh3LTAQUQKyktnNSP5fZ5DTJPxbUsc9f6WZmZ",
  "key4": "3axMkqzqURXra4PzpZLinfF5KyuJR9pPrM7cEaUaYxrqFNuSVXNRdnpmtRYt22xA8Xr4pp9166SrYwRqtFAYw7qX",
  "key5": "2K8ChMKywa6BhugT6awGftRwKaEo1JTHVEtt5b11FYKQ9SQ5CQc6cZkZytJHAfxfAskN9pT9hfpVkFyjT7VNauXB",
  "key6": "56KDhguwNJoFfjppVNfamJ14XRGv78XoYoGJtfpRzivDvzCgrdJe6jFNsXfDJWN6aLWdFhpw8E9auMTXhpypsLqw",
  "key7": "2Tu3T5TQFBWbGWC8eUzKgGVFHzX5CjWPxs2FbsPGUVYARZcCYCDw1FbfH9EcARLQSZ6JKMPCWsfiKjGCtG3upGX2",
  "key8": "ztHRm7R1VnwyoQiLqqiZ6fG9CCff8oULv15vT3WcLVMborDuRjfJBrqgG9PH3xaWrc1xvUSDs6qSWEteDGX8fQf",
  "key9": "WZh6MFHrkxL9pEu4y7iBwCGa1pw1CNRRU4xDVSZQDRTGz6EeecDWYViHwvApv4MxT37AUPMY8EzCApc4UKASwYM",
  "key10": "5PoMCDKDmYQRJVrkW99G4vB5GesTRfNRtMWhC5Hfd5MHxaJd6NJnM5FrK7wHH7NyrChNJo7JE5WPTVZtpqtLpVny",
  "key11": "4RM8HqMpfdgHxfbt72pvJiqSTW6TH8uP4dgzLt3Eyccw4tnFWT78X4qU1MpC6ZgYyK8kJSEDgSLWRMepLvngxfRN",
  "key12": "4Lw7AqfF8efkguwwHJbdoUvbQbJBYqw6G3YamZtfvoGdA9XxEkoPiMro7sS3WiALDRA4FTAfrAXGmaNMaxomd3cx",
  "key13": "2txzc9bDAN2qmVkERJqMXKi3aavJcm2Vfj3Ui9FMZWqoen6iKkvKu1FgcLZBwGB1xWfBt9krbcsRdT1SQEqmg8v4",
  "key14": "4dED4sCDaohsEf3758xBzisJRqBgT8kjPKarYdrRYiFobWDvxjwrWoZJbZiufUqmCSV6YeTtyPL35o2NsVTAWovM",
  "key15": "4cAVyXhVkQmypZZtH19atpTL33Bd5REnQjuvWartoSMRXwLZCq4DSvPqA8VzkUJ3WvEk9txDkN7SPkf2tcd3aVgU",
  "key16": "2FNa9w3NzoW6tZ6PRQzrGW2efSbhWVhjfE17G2qGqC5u23SEi9FCTkqZJzTZQipuExd5ziAttDzQgEcau7fBuiz8",
  "key17": "5yRsaxSbnsqRPucVd6NjUJxJmpLFUzsyJv1TNePNWaiYhN2jvLniKZ8qPY89BC3v96XTxgU4PsGnz2YnBnzn9kKF",
  "key18": "5TpDntC61xEVXXP5YaEBYGwuj7tpDUtAt7FUmx11zbjE7HJbzxS5qNfSUdxmThsi1jNvfoHZt2UEZqWXSBsifD7V",
  "key19": "5HBVckqGuaNpmW63tcba2u8ThM3z5BNAXSCD4cZcdb5654V2j3VGRgJf5gQdFKtqtyDAXEVSq3qveQbLGEjv4jQ7",
  "key20": "MoTD1o2ymELWMV1honaxuPPT35Fb2tc31UZ3rJt9ffGqPAmNXKWo1d2t4sbKYU26wWzJvw8koufoLBdsRcoukFN",
  "key21": "25cK5K6wd6gBrHcADEJGjZjdgZE2vk3K69zL86N87PiDMGhWV26RPoQF78qH9n1uzJAbD9P6vPUTV4QLvjaBKHYP",
  "key22": "3wH2W2zz1XarrC58AqMYRri5geJhTUabMYA76EiZSes2C548pNW1dNkcTKKzy2zTsQgRsUqkwWMzKe1xybCgjdjN",
  "key23": "36VB98o9C7eg4SjqJVJKfez27wWU5AgVKGKG3MoYw67KSUJSPjgG93Y9DNMFZEkkc42qiSwFfYFNmawC8cNkgx4G",
  "key24": "3VqHZs4WaqrcntZPKe3UBb3cUiA8RPCZ1tE29RSyE1yhgwwx9w6cB2D4kqaG3NabWNaRiQoFxy5MqKZtSLaHCRUq"
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
