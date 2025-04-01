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
    "2dj66SLBfegzRFFFmfTZHtruew5k2NFkryUqSA4JZYaSRSHGCtYnNukouMxxPKcNuuA7xyaw1hZBcestiDoNvk4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b4khCrerG2W96n9VkUJdUW4MRtV6hE9nqh6tFXQZ1XCTGog8vasgh31jmqB16vyJCp9kUqMoq576An9vPcteWSM",
  "key1": "gZmjoJf78pxWKPrGB6own2rtp6UCRkW8qHkmzbAvPkXfSpAhhrwdhncdqFv8m4Zk7Hqq8DmPZcSfmoVaqN7nD6X",
  "key2": "4Mdd81jG8s7TLfoGPnd4DYFAcnpB9JiyAAFzh8XyzH47b5wv6wPrF1QWP6aaKepMic5KryEAFR3dAdhnDW6BFsR2",
  "key3": "t7w9AfZSyENGaoN7tJVbL1KwDnyy7DFXfbPsetapifhiN1TDDAae3ZReCYxVkcq7pHXM7MM5c9q1bA4u269NpPU",
  "key4": "5GiWPr1Gz3Ebf3i5s1NaDYLu2B9FQevxGA76kXj6tqHgvGDGicCQVFAD9s9uJSdiDhd88KxxYgZEfh9fQQ1CKuNi",
  "key5": "2fMkWtBdpbSammRU2TW8XCM3pvuVrE9BHueZWZfbBNSLT9XVPrbQ8wwqSai2AAodNrRBg3yENQgtxgeQqqULGMPz",
  "key6": "63kQjFYwmvVwRMhonnrkjjkkHrXJpMokZ8LXY1fkHSGnjFJj91jneifLQWyChMfxx6LeeyTQ5uBMakcHQm29i7iZ",
  "key7": "2BtcdXSvQNpedPhmrg3XgG2uLtTnD9JZYKTueEJxkzxRRNDuFQ7zhA9yNYvWmwbTh9p2rPibJdBRY2qPQtYHW63L",
  "key8": "4DCD3VYSGJvjtg7f8FcVU6W6v4pJDzMEpBFwcoTsg1bx7xWjSwfzQy27cvHZF1kikmovFHvDHA15PE9EVEygEQpo",
  "key9": "zzqZG251rm3335E6w8bwe3meJU8Q1XoNDD6E6NQuGKbWoCuQwTnWV8q35uywbhti9XYyegQwbLZbMVpWDX8K1tP",
  "key10": "5ihm88o9mpJ9hJxNrDwoD28eJD4j5eeKHj27ZM5JEJNjfK3M9dixdYFp67SLS3jYbHbgB5RuXbNmKYUXFyVD1NVe",
  "key11": "3UKPLs2SqEwyUJYeEiqEpNYSHaQ5Ga1vQe8qbeszXyf3faM7Jca5n1qQ2rNnnc7AWtrNG9D5xtUYWFnLMqfiRvwy",
  "key12": "8627ZW2grGDjYhNozw2HWXedvDK1BuRsrsS6cDarFQikYQarL5h3iNt6Euqixk3L3EjgnfzHzcF7N9tS84wMQMk",
  "key13": "4dJ5RDztKuaCw7fJXM8G1KW7bGJFrP7Xx1GQ2uSC9QxmugEicWNb74NjqX4Ps5r8qEwA7q5EGZgiX5Rzu3ikrdWn",
  "key14": "2P9fL1RWQfM5Cadf4X1pwwdEmc1bCsNuGQ2HXaXjZ5x5SBQfE8gZExFjmueVExaWVGJkFQPYkbf2wGyEWggWpxsQ",
  "key15": "2fRNmCNaU1ks6xsfxxMdzxANhUEBRzDuSo8JCXa8FC6rzst3GJ4cCy6vz1JgYNSPKck81NrkRa3TQBwoa92frVM9",
  "key16": "2D6AVZbs4iXuR1yzavJmtU2P3cPjvHc5mstHZ8wvcZjVNrtpTG6srywT2nNuY5iDV44RT6oeCHGu7CiAgAneVeof",
  "key17": "2ZrBkjvAexGc6z6GsVFqaoZ7AqUYg119GY51t1m6BptUxuz7fFDdQhY3hzutExGTzjeKs4egoLdpKcGsXdXLrMyn",
  "key18": "58c7VWHvr33tdbZJqwRj9kifhfwMtCXFE7Z92rsVkyfn8xipgUsCPbtgpiu3yuZjYwERpDy2EHZ7FRCidvgXzESy",
  "key19": "5nWPMAMk3KBb9LnDvSkeUZVarb96LnGaH5E2Gh96vfsEbsSBwCgMQJbgVs2PJR21yyuiweWA7v6Vv5a8UzkGeoBr",
  "key20": "iH9H2TGBCcPcheePxy9mKnJA6ARTU38AjN9e1Xjs74o1x14iuPyr1yqzvhVL9XJNJLZyy4q9fRaZtQn1C56ZrXd",
  "key21": "PpUfYkQVAVV8c3yAqakAkh3PEtRkoiQ3uuEa7nDEckfqJWfd9vseU3htaDFaVZPKQCz6Uypy7wtMXkH9K6MGFGe",
  "key22": "bSKtT4jTDAfRiMa2oDJsbCNz7uxTJ77HAUHWLWa3pbdDhn6NAkR1js6W5RoF9odHAieuP81Edu9i7Xqk6p8MEXV",
  "key23": "uGuh1sCETPyaPHntxsUe6gPQto4LNVrdKUy56izyUTXrqQjL9bgidbBvtCPLwC8dvB5sYnvtGFfYWAbvupoQdXq",
  "key24": "5ky7RdQjQmkGogs7V1anX19x1MD68bGpa2fVAHzQiuAGiafgAALguBsfUbRCc12ZBfysB5ZVZd8WowA8JT5B5kxi",
  "key25": "ADnLZVYx49r6sgJLjUJRrAjY8jbBC3hHckCFqwoERpRFMmT66TXToWBu2jQEA2KqXskoKy5V8CpGe3uLa4gDuAh",
  "key26": "4nKsYGzWPezBcXvyWwZst2Nx3pkaguhUmv9FJ4VXKm6GBzNWaBbVR6E14qtFqdBtVxHbNA8nK3ETwdXhNDyjcBmG",
  "key27": "37yiHntiPFKAdALcijVfZNEZBqJzja1mqBADYRXbSVEmoHkZu2ZRxvmuAx6shuJPnsvKCkteSqMV5JAXpRs7Z9R7"
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
