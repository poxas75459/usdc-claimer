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
    "5EqyxJKJ6pHyGRzuRnVfgE4rvhjcu1azLvhUjBNRRR3djyKLMP1HmxGT2YH9dc1EY1VoJQ4H3oNDhxyk6X6JGZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQGRXzHYUrBUumP9qvngBgVA2fwFKpE6r9R6GurCjmfrPKXc2LmNfr1UjzhjiQecrFJaFahY83wbDyStLiWgR5z",
  "key1": "5rB8TuBfAai65w6EkcL5ee45XQhvsyFBjxiHwidL6YqxUaJHSCnFXzGdrjSKjQzV2izQ5nKMTHkUhcWEXdNuaBor",
  "key2": "2DAPqKhe8zga5Uk2ARe8w5KTNNdVcjMdwfrcQF3xQfsyN2a9YiR9YeD5koZHqkiLogQAiUSVDwcF5Tesyr1cuEXe",
  "key3": "4hLHy5tbUyb99uAHDch2JCL7BnzPwcGQ6UCkGTKX4wGQvYuvfre4nhbhVfPpXocA5ewD6BT9MN7Lwe76Hbi7KTQK",
  "key4": "3B9kZsC6eajvH22NCQ7erc4zkXD9vEYwYTg8cemaHMLpgRHog8UtHxuYJosEzVLnwiCthyPb1ecWQ5wmzpG6QgNg",
  "key5": "8G4GqBDAB6LF9c7DVySLm9gmgG5756ryKNHykeEPRpRBMr9C5Q9AMoutaLspbZe6bxzfUKz5kat82vsTmpqMiK5",
  "key6": "4B2rdBUGXZnPg5fB2rNeQ5whnC731iRdAgwRKox3LuVNkEiDovXbbz1vfDPMbKtMLvPco8ZbAG1uzAQ4Bz2g2TYE",
  "key7": "2Bz4TYQ9BRM63BvMF1UtmFGgmu21A8QWJepS3pyvirLQWtmYyyfFF1Mmf9CjQuzBSLj3qRDJHHM6i4a6xbwB5int",
  "key8": "56Vd6bWW4pFM45EbRtMFTRgqU4zj3uz5Y2pD8VkRzHusRcytUM6VSYjPMmyVtzaXAEv8Km3GAYYCQTrEf7RToXkA",
  "key9": "camwSnEjxH6r5LXnPaQjZJ3gSkCtBU6cdRe8z7kUMsWuvjSDxBovRUMJwifAr8kHt4bLnLNvpE5PmxAGAREAB21",
  "key10": "5aBJ4MoCvSEFht86aEz6tNv2Fvs4roPg1Utxa5MBkV7ZTrVgiCSfWARB5F1yPCRLm6n1bokfixVdaSNJVaGWHADS",
  "key11": "2Q9Pcgc8gCT6sDvcP9FGcqDAXfjWqrrHH95DvQrcDzXDFB3j7JiJ414KWrHnjZT5whUWJHun5TTf4NzJgQJAfk8S",
  "key12": "3ATwBsaXUQvtk5AbLFTVE8dKLBnPdtMfNpQVeKFuaDrBcVAyMq3bUZquHLgiTaoRWE52aHY3NWe8LLornK4pUaqm",
  "key13": "5pF6akvBLXQYb8Vq8FJA54afcm5WajmQr2VFWkdVL3qLHYNGx41dhR3Xeuq4cV2E7CcfP97L3keFtCgAt3BhoCR4",
  "key14": "SocH6U1jUNZ7ndYRxhn4CjmihoJVVSjQMQmJU6aBREmjmVKZVrR1UjGN3x1MS22r7fZrPv6MdzLWVy77oqyAXDC",
  "key15": "4rY4L8D2Sjq5NmoMJHDnvF1534veYG25hSGomE9H9YeNjVSSb8oRAvmgsLuGy3kstRnVo6fzh8ioof4o9jNN37wJ",
  "key16": "5MxczAAJKHtRDJ7rEvg5ArmVSJZJBv5FGxjHq9yBJF2XpTzTssNd9esnz9RFKMywbcCxSqDx1n6xiGyEEzPjwvc1",
  "key17": "5ScmPLdd5oGdnU32VEZcPDxupwkZCaqptJAPRtvGYy4zZ1A2BCims8vHfbLU8SCkWd2uSiiDi3Pq74UPGHNipxky",
  "key18": "Pa7nq6ePfvWjME12x2Ps2BYFduefTfUxQ7rhH65EVCyYWvPZKhEsvbwAQC9jPmFxvayAMKgtq2uuyt3WtqZry35",
  "key19": "4GZg2myWu6dNYR6NVmzEnoHzyghM4XXVoEQe5hiA5Zn6oR1C6TZz8oDmKxzKFyzU8bLLpAaEDmdjww26cvuL4ThV",
  "key20": "3KKkpefoPVYjnYCYQDcJYPyQMYvZmiU8wiULuMCob7F8KPMPuosdJq3PnsXqpq9ZmzHd3d8BQbQBUMCL9fqutph",
  "key21": "2HftKDszNxHAkjHzAaNa6HmJ6hvVb5PWnD6bizgZLcM4D31SHEW5XnHKDXKWqDzungafeMBuFCA71wWQqS4og7Ex",
  "key22": "2dwptjsA4zoX4s9WJZd9zC94BVz2fEjYCF5hPA2wBMWC2egR3zKa92b7go6NDL5sYcNhSFknCzSwzx6ob3LXVT5g",
  "key23": "3n4ABpJxNZ579nia9nFeCjRws68PU4qSwbmEGvXhHqvYt9NX7Wzb8YaoGoKFfckQKEda2kzRatFvYz8JAVuooWpk",
  "key24": "4QtxH68vcHKwVvEi3jQJYDefWcVAgc9GT8fsdb2CjP2C7fxK7t4gbwJP8sNJg8bGNzqevkwEb1sKDR84suQFzKFZ",
  "key25": "2MkgCnamci4mvc1m6gkU2uvZmKonJSksa5gkJbBNisB5NV1XhYinERENDGEGfjbz8fXLR6jj9QcLhnrxAAY7Xsnc",
  "key26": "LHhCcvaqhaKBNJDQTUh79yLYJkEMRanBEtP74X4tfyN49kQhdgfa5M4UrqRva85Bon915E1zFRy3Lo4NVCYwqm2",
  "key27": "3gkYc2TgYm5CnWGXvCz5tM8Q93UhbPxLDf2gMuhbokemdBfFWGzzhQXLQz23KWEgo6rafug2qxxM59k8AfXLQshj",
  "key28": "3juyj7BPrDT6t1ephQvEywTmQ58ySmu147hnTotq9KLaWCRaHV6EQ95fnADENRSBHNCa1yaHxKYsokdTWHD1wGcY",
  "key29": "5DLjsTBuxRvMuq7NpJ2g5ttsyTUZDd95tMMKnQet8fZfZn1AA31gd9WSv7fJRkReatR12a2NhVLU4eCTi5LBYXpA",
  "key30": "2gPNEcJut5KKzyTnHqUJcrMoheca82vack16c6d5AeEPUL1MJvoHtDiKNiyB2FRP6JJEqrtZNUtakWgNem2qxFi3",
  "key31": "4oVRP82v856F4UoXWntNenWNxTTFbQVcNJ6n2P4ftoko9sqfNbVxShzabmhLYKbusKNHtLQr1W3jzXKNazH7mWxA",
  "key32": "5LYmRR6BDAmXV294mBxP3finrVfz9qKemzRo74DZAfVhUC9rZEciiy4ZFXMsdij81kpJAM82pr3VHc2wvc5DKtRS"
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
