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
    "5djB928xdXbZHVfCP6wsKVEsrTnEURrj1QJk4PzkrxtCccatC3dLDkECNSVeBgSaepsaBq8i8KccgMwuY9vYum93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yz2sW5RyoK4Kbq7EyJ9PcFBx3z5Pk54HmniPYxhZQR3TwfJTERpqkaEQxe9FSVEAVWmPBTjzhkdgyKMp59dfEx8",
  "key1": "APm3pwh3DP6LsYG2X8b8HRZWnmqDCYXdFv4P5SgdoSAarL4o724Z2sAHnvpZ6uj1ucB1kp438rMJk9rZFK7XNVd",
  "key2": "8tzqeiE63XTDgqBVfDfP7P2bFSzN3Ua2zitL5PLqYpmyYgbzmrmV7rLQJkLegy7BpDED3LzgNsKjkniiKM5AdHg",
  "key3": "2Rd4jKRYLkVuztiP4wtqobm8f3evwGQCzaV1x4XrWyZqJCLEouEhfh8GQdMpowUMQjD2fq94cTW4tpLiBMAtZiXk",
  "key4": "35r7joorjB6DrFRfScB5vkU56kQ3NmepnobfHyQUvR6C48NGGT9vv1Sw6nwHcFM2hfwqxxq3u4dmq3MidYcFmHNA",
  "key5": "3knk7xZ9EvbjsB1kUaB73mTzPQVuWvqypx3V6NGMN8wHZGXqQBhK9ZfYoSrV5L5LhByBeXFE37awHNaZS73DGwUu",
  "key6": "5uG6v86Bpa2CRmHJSQshPjcvCcKZvFJhd1CKVGLNrAgAJN5126nByukcJhvFksRPxwPQ7qCjbRZhPtVeAEMRdg9Z",
  "key7": "24qfVChr2QtxJfj3qvvLDCXx7XpZyjPBF4A285ADYJzQJdRJQkwb838Joqa34s9NJRL2KTg9rgxq4xKQuebbqFEN",
  "key8": "MXe1XDdT7uATbGhywPjFu6hPLouSeoH7zVd6tqMnea6jY92co5Ucn6pyXKH6vpuob5xmhtr4YtvtMCWmkAk8xvQ",
  "key9": "2FAPhwNehAereJeP94iH3tebeWkcLykJqsVzP1uNzwq4qxgjEXGC9afnqbjZn8hMCCeuqeZNHeZBXEfbzK37fTiv",
  "key10": "44HpTkpKUkBoapeYb3gsWmXxFfXBHdTUiAQ8SSamTCWTEJDv4jCgR9pPxGpdAh7mKNj5xieH1W7pqoeWk5vhH5vt",
  "key11": "3PDZ4BraiUUQvTHJhaWpBbzir92qDLaCjUdvmAkDCWzHWAKCbpydyVNsaXosrwLiDV5No3oYRuLgKbDrhNZCRmbv",
  "key12": "22zJMFSteFpEhM7PsqkERL3gck4JzxLC35q9TNpxdQ2B5KHZqXi8ng2QcYV821uh2LL1x6Ru1iMBdm4g5C7PDUKG",
  "key13": "3txfX5fuaAVjE5M29KB5xiLteB2btvYYCd6LmM998M9YP3ACtXtveMWeZNoTyWNDBtCEvZC8jb2HB7AKuKRczHLp",
  "key14": "44qZNwcYzb5mhS1PCmiLYjpqz23FRofWghkQueW5y3nELjdS9hD2H9GPwKT8uwu3RUE9muGz4efdAUq38gkPckwU",
  "key15": "642wr4zeM3VuYPLeNYrbmDgTfJT4SGpsKEX1AcFbceLL7MtMBq6ZkXACXV3Na2jxbTdaxBdh59Z9gwUNeGPWgHun",
  "key16": "5HZ5tYB6RYLfDRpcbCwnVWCaw6PiEb8ep97HzSNWF63BQ7GHcd14tRBDetB5TdZpoZ1fUkwTSA4LUNh8mLygWPA1",
  "key17": "3Z2yLJCZdBuwJhDM2TGwHxvWSQt2B2z4Dm3KpjXMNnPEaspdEdJiafNzKvaWZwvTQ1XyFrRxQbU3hJqnMkEcHJJ1",
  "key18": "3zmx8F3TEpAuGHHXRcKbkGFVADj68R5aEuBxHJVBuCjgdxvmCBQZvJrncwT9VhAJski7H7oC7hnRiCMKYEw2VTrU",
  "key19": "61Cjosnv2SMSQmP9AnSrGrrsb8o1Fz4uGtTKbRDBj2DTgnuvJVkjDgkqqPwXjVMHCKiMcTfYTcXvvuXFYqYzdMf9",
  "key20": "4e7SXBGVCyxXn8sSC3S9DbqZ3DkCfrHzpgvhMp3QDCq3CMNXe7kNtUHpTFZgHVpcyis6CpZh2wdjD1Pv9eCihVH4",
  "key21": "4CxF3sLonu7puny1FQBTynSkzxUT5SYYuBxPnHqtkLsytmUidgy3xjB2UdPGKSxAztpXSm8iHdzjDaE2FELZHRYB",
  "key22": "4wUw4Dwjyfe1g5o3x3onnwZTThoNiNM8CuTDbvwnJL1E5t5WkX7VvEMD5mAiDgoPrN6qmR7LvWf7dXNvNdScc4br",
  "key23": "32reuqqSNLzHN5vVsmfdCZWhnm2vJAq5X7WAL6nDoCfJYHW2tRBRd7HxrXbX1AEZsiNayrhqMELomJfVgdfhqJr3",
  "key24": "2yK8FABG9nXygRsoh8dgtZKVNXWLWXKHeVfGRsWeb6wxsx9ZsWqVTntPMGFwPYUYWqxCxWyB7BaDgoUtsbAJsYft",
  "key25": "4W3jFYgYExciGMLopUFmDu6o1zkte7VvviFpfzHYHyXJQg8oBM3FWc7p61RGsLwEURREgi17KjUYZAQeexMa4LGL",
  "key26": "3s2hyfyX43PxXK1DYF9wFM9NEQ2Q6GsLCRn1UVM1uq9T9xWgtQ9Jz5DN6SJns3q6q1UeJg4gVWFdgYTKtCGcLGqs",
  "key27": "4QRKMSWwxkWg5jZqKzHT4QNJLN2UGS21DGoEheBWwRdnoqCaoW1cDrLpRoGNy4HWoZFXUUTYzM4zpxAE7MN8v6GG",
  "key28": "5nQ6TMVrf8rG7GPcdagML25FT3cPnbaZ9ci8U1k5Wij94p6b5m4mEfZE9yX36CatWFTGskJpK6Uh69k8b5ZwtS9P"
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
