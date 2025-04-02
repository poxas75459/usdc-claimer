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
    "3nG4XDVN3uKJJAxFHyNCpbDdZR4SfTWeE66goor9aReUKZU9C2EEiF5GrGqTX3Qj1yiGvCgzEaa5omcGFo4oawvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RMYa55fLQNEYZXRq36z9gnJcVHiqtesx9kYQ5Yim9c2DfW3B9CmGJ6RzDixeG8uF7EQKGbfSeEouwsfbqxjRbX",
  "key1": "vgwNY3tWtP1AjD2bhzXrSknato5q4frsB2hVL9xX9HW4qpq9B7NoUJY3JiKxZqM1VQ95W8WgWQV8pofm2ftFbiD",
  "key2": "WiTstwtFHb7eyWLKG9oZCJaVqbKzjWRhLLfyA6HMtkcnpYthrwN4ZhkBBCaKhwEiYh7viWqk6CBuiXbRBeBmxwU",
  "key3": "2F9aF3PMKXtm1Vfyf39uNioVKrTsJ1scehiWM8yGaKJyYj12MRZq3EwF2GkCzPM2DbvvZbU8EfUA2FKFkcVeqtMk",
  "key4": "62P6d3a9oAPrThURCUuiX6mMfHFSAk7PoMfAJGmQeaFfxybWv9kc4EqtZEQ9PupGawzUequw25A34nvDL5V7EWaS",
  "key5": "3sK6EVFKivBgARFCpBbeXeKhL2r1YcQWVjmUiGt5RFfaha9qB3VDNKLwLcT8LYR4h5f9zf8Wtm47iqvytdgmWbv",
  "key6": "2iiWE6oXDEdfsuPUB6j1m3mZZdvv1JvRgHRuFewA5331UNxqGgFhUmn1Wu6D9Lmrh3NvwdFWKqzdBxJZN6H693Md",
  "key7": "5RnYXvdpmG4JYNMpjUr44s6TrYQnLZLFHKhUhtuSAYDiDz68Hybby9yQ5TEesUbLdVPdKivuKs5RTF7TMW4qFmcq",
  "key8": "3mfx2E9yXjwZvhXpFPtjCQxMXsWgy42vShiRPEimxFRDwthsy1Df2rjZJruBHDdibG5pGJuezJwAuyTKMdyRsTNS",
  "key9": "JrKskrk5hMzJwDqgU9Uq4TmuBWmmWjbamrvdBwBw5rpSQXDBqaa9rFjKGYuHTYqa2P762k7GCfd2HkpuNPZZKtv",
  "key10": "3AohtjtksGSzMTqUgoosMfxyZq1rxDxnnykwAQG1GdVdkz2CxARcUuxHyci2aXb1u8JxNVKNAoa4fkkFBsvP9mTo",
  "key11": "4eXGrm8Na2vgnBRiyJXX9MtgZNHqBbBPNGtKx5pJWu1YfLsbaL1p54ZAqfHDGcmAtXKg8LG5cZcocSEDq5dtF3He",
  "key12": "5vqh2BcTSZXNAqgMP7bHWuVFkzJbAw5KoMHg6XmjgaEoeF4vSQyM7JRQdggNjTsK4hZbj8nqaxDnAFFQNtKYrNz6",
  "key13": "5HknoXe1tsACzJYgcMaMELJTxHEZqRrEiC1HUdJhogFZEbvPDe1A2BQhs2pdgRpumeYF1a9LywEUeasfjEMUzUiW",
  "key14": "22dVGw3LcWXFaLsp1YPUhhm55sFzgrQv5vueFjQUUYfECdLvs9KdqCLSC9bnyXez1GFf7FdUY5BPhBD13q7QZUTN",
  "key15": "GzDQZ283CoCQL1tcAXY5wt94VwvYxCqryeiPfCtF3daSjGpDGkbJgGtt5vkwXsAFheNBS8RKVKYiUY7hqUA9Dvh",
  "key16": "4djtGWWpQqtDCXpGWFUw5X3jureFtYLByrU3mEkVddbVRYS9JfR8fkDWQZzrSmjvzzFoJnDaUNH8HMkmG9HXnBUG",
  "key17": "3eqSjhkd7pqxSPWuGspMa6Y7hGo4Eu98yXBbP3GLKwH7XKpci8kV6cvztra5QSFjhac5iTQJexM3QjGCGVBnxwA8",
  "key18": "2y3K1i45v8ALybQxp2W1W4EQpEYg7UBVZN352UUXGR2Ta6QW8dtaQKxW8DYLJZiwkXybVcpyYXyr8ZjH1Fuo7Rtb",
  "key19": "5E3jZorL4EBEwVU3jnFZ7Ruyd7DnUcNVh1G93L2sfMsoeRir2p8f1WF68G8dCBtTYJvpLaXRZusmLPM2PCvtC4Lh",
  "key20": "2V2hkCJnb39WTGBQXGBhQLr4xgXsnb5mtVmckQYgoE37YTzf92wHpqUK9727Myi89zhMGUMYAZvMH3EBggc7Fpyx",
  "key21": "24zGP7ZjuAx4kZy8vGMtaSuFy6wEK4z3mhN2w5MdzZuq68qgHnFaE324hAWx8U8vYUawbbw6zb5TEVrhH9SB4UgT",
  "key22": "2ZjzowwAfivDQmMpWssFz4ozj3K6aXwrD1yVRPrNCNEn4sUety1n6Ps5pAtxsW9DcPtYi4qgfXccKBDYBDfinKbU",
  "key23": "ZGmQ9bu5Vc71aDBsqgM6k2VS2XLMPaD1hRcdcAChxc7u1Z6NN54CuXvoJXTwodXQSwmyMvigm7gb9oLuAPQ18TW",
  "key24": "XGJCNELKpFWUjLNU9JZB5W8dfdR9fYYgiFFFhJRBC5LJhwXmryu5hCFoxiHY6bLMRMpijbFNG2Dag68wqHXYXZB",
  "key25": "5AgCBSE8yNcaWDwEA4JqFJ8UuK9QrtvQZqJPidUEDNT2jnPd9vrbJEj8Rkd7GxFZj3SJqMXw8mefBZzahotYPxnX",
  "key26": "4NU5TT1sKFAgYkPkA4PMSNpPM2rmixZXKsqqk9ZAhhnpWF4FEaYKgUUUBsfrZc5UqUxHLrhS8Tw58EKmppnx4Ewd",
  "key27": "4uBDXxp3vD7MegN74cjAdqmhHWXAmB43vwTULpTQWh29FfzVHUoQeR8Cj52pb32f1fxBsQYzwptxD6q7otxn928t",
  "key28": "JvG3CTT1fymN3XaCm87DFKPEoEf8dzKyfSEDu3P13d7WirUekkTnUj4qGrktomirLKum2bHbXhQWk7E2Y4SM5dn"
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
