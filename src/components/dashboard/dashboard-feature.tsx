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
    "4Gq5SJQ2UfLvTb3LXCjg8AMt9JMnwcrFvLdCYqYy4DVCfGxgUbxFnVw171Kgfdf15ztpXMGBmbDfjeSfye2SX7jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJx9z8dpEdenRTf1sA5V5AuL912PeBmN2h3D5diT3Jn2cz2pm8fadwaradTbvH37nNgA1FSeeMrcATVHf8jx99w",
  "key1": "5mS5Wn69r7LyTK5JLYHGaWWW42g6AkVQi8aM6n6xFDA3csTb4cDdqpVeDFbnuyYfGBZ18N8RtWQRW6RG5YiFreuq",
  "key2": "4ipKQpdfHcyQsZUw9f1VuggurEbcrVay3bJ8wPrsm1e2hXS5zyzKjWKPN1LaMEd7CBmewn7ndhYfwdcEvNjPJVTe",
  "key3": "5B2hx4DBd8TEWSknnrQpouV4A2rVy3i8a4DWhf3q7SB9egkPRDyL9gVpeBmb4uLH4PEPbLPDTL5Kdf9EPzm4dG7E",
  "key4": "zMcmNgEp2PYme4auCZ8TMrhhZWpxCGN9WLfiNvV6N26fWPbQyXsXAiKrNCRDrhcyund7aUo32WUvTT1a76RvaEx",
  "key5": "1zGLntrTfa6Q4TkmXYvSCWXMiEApaoBrKdNsgBK9hin5gv9guisjtiE4BmPYbkbVg8jwESm5eQPpUthEeV7qdht",
  "key6": "JTz2sVmW6UGYmJyJmYRQ4Bf9QFi7ZnQCRykm11VLzRAqaMPKmYLaZvZ3CQvsxEhKBpntBi3XYfUg4UcFxpNPyb1",
  "key7": "5H6MTX8aiUWPubZwHUr68wcphwrdNH2iqKW9QwmAaNX52xJRPNXtnuF2J1ptmTnGUR1H7KypJcwcipB8Eu3XUrAz",
  "key8": "44xaVYigYqKh4Uv7skcCtK8Q6xUwN2LQKwL1FUBaL5fPFwk7zMv73dUDx3cB5CVFGxd6riiR5AEVGmQuNiER5yHq",
  "key9": "62voWWEdHYDmgrZyFpvMXRm8pdMXfSkvjM84qJDLXAHcFy7CTBVMftJq8mQz5yTCfw6dKnuxYoVhFY3NPCSArQBv",
  "key10": "4ofxCTgHzXz1gugZNeo93S9odJvLZV1RodjuhXqZUsT8hjwZ7tTmevXVvk7hn648wXHnhZ27sWXGg74dKC6asN3g",
  "key11": "GPwqqQrAr5rkPNrtFKjBd3hGQqgEr4nsugQtWtfftp7Ak65Cj3GHJYWkbTTGsZzeNUo4Z3AH8VKYZj3uXDzgAeH",
  "key12": "2M2XrJ7QFsK4XTnToRrk13FDDu6Pve7BFQhjftV56Qm1NKWxN9JUKPaxAmFseeWLz2QbiCN9xBQkFSNGTtsWmJhe",
  "key13": "SDUKqwNeNPAP9WhbkrkWrEcxydVBcBQ25jaPT4fKuw6GKi6tSGXwppxmzjeXCzK3FTtmFGPMh8JLkh1kqE24tDi",
  "key14": "4HtEPbtvxP7LvoTqaUuWeFfT6NzhXT1BE5Gj7MX5MRJsGUELsJnz1PhVaKEtoL7jkQX6GSGWPJkBViy4bS1jyrcB",
  "key15": "3Az7zB7LdYNF12MCWBPukRtjsBvJgX4xW6GX2YUoE3rRCNYS7oC8PL15xXT47b6W9JFNJ3NkAq2diZQL5onmun4z",
  "key16": "3Q2jQhfujkf6tJkWXdikkQ8FjoypXwEcDaEihqUKpN8aFZNJqvkxejm2y2vj51vM3shhELGwoZsd8Nr1mPkfwkW5",
  "key17": "4BEAGHjemnQ8W5W4X4vaaoCTaCUKz16GujzDMtKQgPhfS7r3XNrJ7nJiV2vX8GinbbCY67WLbpjgjfCYcB6GhhN8",
  "key18": "2eaPQSkQZQabpAn2K7EdAV7YgMeiS48VMhmyGjT9YV3QR5ZgKZcYdZLaPM5fXB2EXRvrqt4WCpYXKWbHfdiZJm4i",
  "key19": "28hsBCDq1dDZxJbXKiR6jJPtixQcFXwnf5hf9mkR2zGLdKqpR6wepwwHp33VwtdDZ2Yxx6rmrt3jqxo88a4s1DJJ",
  "key20": "5GWEn21jYqeyQsFqdpppHUE69s5B8RdGTYMiHh315FCh51pzSLBEczsW85ikS72MStuoYgEqJEishYCyEPc735XQ",
  "key21": "2SowdNNpfaRVHrUEZfS8hkqtWZb3DJyUKnnDh8aMWzXDDKstNdbSbcMDpW7Gr9JsYbJBpgrQpiWr342jCbf5Vk1E",
  "key22": "55wq6NwTQ87FDiy4oiqhrvgC3xcvwMRor82zdqZPVGyCAx6rZBo83GBbko2zdXR3SK7NbfoqH9NSkTxfqAq8kjhd",
  "key23": "4XUScYLpxhazgN5VwC7WmzL4ufCkSsFAs3X8EBgwcgp8mfaxeRc2ievj5Lk1cUFpEN6vntyoAhzAbFn2FHpVfh45",
  "key24": "53qSrZUK1i5wkZjKTc4ZB8kGos22g1QfApPwoN7mcXroGxVcec1mk1Vi3NidYwFbsGJt2GJGFTfhRQQ3E4EjM6d1",
  "key25": "4GrnLMRKzqV8RARKVP9562iRJBksijrqnUDiJSyqUuJK2bAGw1Z9sv16u3YnPN5wH3qwFxkyLDEB3pwmn5KP6Mwq",
  "key26": "35JosxRv5nSPNR6aQQMmisVUqF6hqD7JbAQjrEuK2w1hjKv8zpPigm8u6LQDEvDkvZr3wGHobLCWb8TG4Bz4vprA"
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
