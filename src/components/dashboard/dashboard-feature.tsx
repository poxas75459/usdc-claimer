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
    "RtUEbC6ozzz48ZakkgDT475nvHzRhQzxG9pNsHmQv275vNgVxNWYEwjCkzcBw4Lb1FaXN4BBuPaMT4LbWaJwUjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opmR9AxRqTQGuFWpemS81sHgVz3YUoMQD6USokAr6eukbPmZqzk1spAwZbFVYRo7kv8LDLijKjgcPZKiLzoyVmA",
  "key1": "5TsBSCW3SDJX6GWbHzwGerZWGA8ohJK1bpTf4J2b2CzxPFyzXoMSR1Ks2nAiZnUpJVwr9SVmB2wJso2Vb3SpD4dB",
  "key2": "KCmep7nUdhkr8XF5xYP85cN3GevfEix7ocvVEP3exp6cAm1w6S6CxjTyTjN7uGrAe7Jj3UPn3jcpP6DNk2prE41",
  "key3": "4reAaiGvuyazLrpeWYmHJupFPbYCmg4jTPTJPLCz2FrckhVWuyDiXVSuR5urmMrGR16a8FF1dwxzbDyAWThA2JzG",
  "key4": "21r4ZGLsdrbZZPL6AVzToWZDWccS2AkdanXcPyuCFWfXxTj74QarDim1C2uqWQJ4LVw473tDdkj9SEdwWf5ZZrpX",
  "key5": "PLb3G45S6LNvhF7WwpkxonrLZDZ1vzo2yf41fpgL4wSK63Jp7WNRtjsRyeZXsTpMH7h9ermidL2pVP6Xu7e8HYF",
  "key6": "DL3GTtVM77QBwfqe3rBL9f6YwLgjdbtQ5HVb114ecTBpLnL6HhGjzRdTUYaqNWwcLbQYgQ4f6kgk7KAyEPXAXgE",
  "key7": "5pvR6GGoTsEsWQDtGnqZxDKRU3NuswNcCxkPjchQbhur5GyUu3KZ3WdsMioh2ApN96cwbJMDdL8u2pg5t3rZPhLp",
  "key8": "3TnLdynS3GTeHfSgAa99oFVunFZzcT3AkK6PyA9QM8ERZxN8eADpdJLEE2PyQKCGMu67Ny25z2ext1yv8xggXBYk",
  "key9": "3pKoHzSDecKQsv7pxKjHHs2D7CoWKcqTVkikBx2P2nZ5VxDFmJd4dPRtxKeDE1ZGhPGRtnvZFYmVNFHRCNqPDuDw",
  "key10": "5khrY3zrwduVadsTjvuCNXFnVbqQ65YRrYj1KgBxR7sV8LiopsHHTkUnz9e2N1TahX1XJ76a5rC5DYXu22Xijv3V",
  "key11": "3jmfQkxNXE1vLeMLCuH9H8mNw1WoWrEqB1q7Vi1viVgwpC2nwcT5RVSftmN2g5GzbGam2YnwiHhnVgHUKh2sf2VH",
  "key12": "65SHcxq1mkRctZ7cHgLtX76XnJ976ir4huPGXDCgqWGDiG6HjAkqWJeorCS66jhwwtZJU7RBqmz3t6V7FhUah5vY",
  "key13": "3LNjWZRkUmshWu6wDYNtA5JCeW9YXSFs9cxt565msVm5RrwxTGzfdKwNBc5kazvcZB1P9gEt1CdbYGe7rrc1NV4h",
  "key14": "21PcNfJrNDhXfyWR1JkFdA3F6oM4yojpnP2keZWMjxY4qNC9Ef1YwyJAafiUkkZPpjXuP8wdYsXnEbbfeDE1mQLe",
  "key15": "3Q6zQmxh4Asnp2Rbf5phs8274X86dPfVV7PtuSxbn6yPeGpB4d5dbX5apX5Pj7s4LqXXRQVKDVWYniYySjoqM4wT",
  "key16": "3aREoSAiC6hQ9h3w5x3Rg2cxQqWvqevxNZWQErb9R1s6TA58bmjbzeMgTGVsbkWjpZFJ43EEhKebBWKnLeG56z8G",
  "key17": "ufhxEztTHniXr1fPjU6qHehrDa9ctfgTqSWU2sbWK7ZoWdgF7KqEz7gpu5RdWofnHMVzxXYHKae8oH2MECR96gj",
  "key18": "5sdmmMLgTkDdEiG7pbTHMkTaX287xy46Avbmp2YfCjZLDFULeWkbfz4zS2coF1xJWQnF7EyYMaXuHN9HeBJi8q8",
  "key19": "2BTEzQMEiY31EnZ8DUNBxHqg3EvUq8V3Nco94hgjbx3wt3cr4mXUSdGP7Pz5dNQnLhBoYeRfb9YSgdVLHoRpyNfo",
  "key20": "2NjaJAUZ4ywJqsehJGdhaq22BrcyfyJ9TQhw38LssuouQT4vR7b9jjNMSUHgJ9a9DjJPujN1V7jhvQ26qd1D9wdM",
  "key21": "4WtztMEUb9fjt65kzZgP3J43qejiBmrhZBCeUP8ECwPYaRMTpnoL79CS1hB2qByRVCSX1f8M769VS5VcZKTWzPrF",
  "key22": "2xstJ9zNRtemiLKfRPFYhKb1BDZHsNwpbRoppfNQogcRqbEM7kVnmRLScgXbxDzH2C5u5zuudZoQ7mrFQrhfbDuF",
  "key23": "5yqUXo6rRzKWUdwQ2rQqiyJYVb68wxQCNRrxkYdgDrb5kqC241aZZUouRTvz5A9Bvh3TYkjB3F2MSRs3UvcmFmGZ",
  "key24": "2Vf6Hb2H5QJyMXKvUoBgZjayuqiAN6XWdvqLvp7nKbFB82Zr8Tw6b196uMH9SHqTwhevUWkoMQzA6dPc1eER9tRv",
  "key25": "4WSTAgDNEMRQ25fPa6jLr5aqS2bCy7CzRTpXk5hKXBHCG2UnbQsyATyiyuUkhyZobwvKiThFyW3X9aq8vefy4Zom",
  "key26": "5NEXRQZeWKhPvv3YUQvPKKWt3CSvVvG6AEX8CzRUFN5G8gzQLDU18sS5JLsKLNhq8vsrz4E2FytqaCHUCBAAPnRe"
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
