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
    "RhJmM7GyhCJDdxUoZKDcPa8TGXmMcxpYvUyNe76VT8U9WgnPECJkVTXA2Q9z5BPhsUsmMhFnkDaHfSBTjeoqPty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iJB3qiyA8gbvsduqMEfG9acDLVNaFVQN7h6hcHJnJ5aSxMquTA4ZwcmRHhAPftuaPFgU6L4hACfnD6rdUgD22gC",
  "key1": "ocuHBhrobh6yGcSZwkWevUjxBrubMETpHF7BoTBJ1BKbSmFYMUZeBMcnjrxbi7funfgtWvB5ekEUBhdnes7A4QC",
  "key2": "3Hff7qno1i3HCCS9xth2UQmHBbZjv5vj9pqmyQua4ViBALY1udggrkDQLqYyuCM1oFxBXAPPur8sX8uqTJZxXB5p",
  "key3": "5JY7fEez6ZqFr1G85fK1eXqYjooYpS8Y1UiyuFy69svHFTQG8HfBm3ho6KuBFyqo2CuSNyX7QGLJA8j6p7uzVz9W",
  "key4": "4MYM3jnWPVM8CLWryRBQJmySR1A62WNPtz5ckv8Mh4pkDMhrjrAMfcM2yQx2Ff9yeMDtDEesa7pAjzh2pnCMhtFy",
  "key5": "5hfcq56rbLEdZsaPGpGzy9yNvnDN5uFLUC2jBSzGsQ5jAsuSqFncWdX7ZmQ6h3y4yZpB8HeteRtQ3HycmpEecrLQ",
  "key6": "4KdAMAmvgYPxZqwKRSrbda4hdNvP7PFueMGxt52xgdXf2uvwkNvzhXGpEssxtTSW5EsVu25i7d89rjR9jFm13Muo",
  "key7": "NSXfXktBnMTnQDwzMMqeioGdWRBXCWopqp2MMFXf5kisDpq1UpKyhrsqKeN49bh941UwcY4J9moyPMhzxsffc3w",
  "key8": "3eeccpzmS4FRp38ye9GMHNibafczvHVb52oRy7J4PbDA9Vp5ivqP3n888MFis8iT6eXVP9crPMGcTdjNtPBAqVa3",
  "key9": "61mNQ4hZQQEFQjhPn4C3nQBfiE2CTuD1hi9qLPLtrH4SMi6oWhkeyRUsngkPfjR6H6TgGomqDBkqrwFe8UoHhpq3",
  "key10": "39xaY8ve73db1hmNWeXNuHVMfzzbFypHQQmPE3kQrqD3xin4h3PCUJLCHQTdQLR4Y2yoLoRAhvQUUTfduAPDqmNL",
  "key11": "r5aLUQpmjAex6qZDxD8hR4Y3xagMG96SrWf5BzPNNUkhmCdqE5G3jkw68LGvsKWB8yRDrWLjdxzJ9mSej31MQ3K",
  "key12": "3Bf9T9sX8GxEmE9Ng5bEAqTsGripFZqQDn1a4zf2mkYyY3qx5k1FcxoA4w5cL1atACvf3FzztDEMyT1D92iVX9w3",
  "key13": "53pATsuPjpEE9mCHoQmaV3M4QqgnARcsP2s7j6sjNY378WoTmNGm45Jo95rEbUDqXuaZwGRt1Mtac7AvKsEyGibB",
  "key14": "5L2YjFtbF9hqkGAVdBnvJCMjCfJxXSu12SFAhHzmVWyx1uNw1GwVRCTop4JBZkCHwYnqMg3QAgGq2GhuFhgRBNHy",
  "key15": "49fwAE3JLjrDZQwnqUFYwtzruwKhU3pz2FDENPWRp8huyfdwvwJn44ESg2KenAyqZGjG28NMHDCrQN9oW4cK1vxi",
  "key16": "38yVYinPcFuNRgcbpne7pUvYKeMZoQnDn1KaStKxjb3tUqv1X41EJc4d1VrfxJjWR3Z2RwM93rpCuWCMqu5Nu8tX",
  "key17": "3XfMy2NvbF9GHg8qaAsx3YvBJ4ECXNgdPNdAiVbiYrKFUD8bAJ4TVFkCi8nZo6vggTKnQQecSQ7Yu12XcE5eLjd",
  "key18": "2eCr5oHUTHHXdGrZmVr54oep33iwiGkj8aRPyem6q3eLFPNUApUF1M31c3xQ3QeHugNuGparkpnqN7u3qhJGG949",
  "key19": "fktH4jAxefdVxyxye63Z6qPxr5USCa1FEuSeuguJt4nZT5ngfq6yvnr9SEu3PefV11caQfemfXhMVEcSjckN8rQ",
  "key20": "2UcdrtdxbYgdrDN9wuSXh1ZCpuSWN3SX3L3oYU9GXfFBW5AzqrQhJLeEekYdUHCwBrjmdtgzp57B8RZNqoPqCbR9",
  "key21": "6VouutoVtTGg8Yit8VronaZSFVRWQXpDKyvnTC6MZAGTNGScLNgtei5SVERXqTB47vCXDFLXbaxDwJh4zww1WGD",
  "key22": "X9skXipDAhLFrtNiZ3NKdgA7s1ZSPNQ4nn7RjFNA6dxH9pcvSwnvUC5qKCHSW4AzhAaDGUzC8nyyAzz7teYz7AG",
  "key23": "5bKPap1ksT5Q6Q2esiZiv8gPA4tGTe9E4sNcXPUFntE2x9EYm2esBsAWTsGxS7N8CvTZWfbrxhEdCC4PmB91rrnS",
  "key24": "65Ra3mfttxAhAyAoCCQqjiMG4KeFPYg76EQ5b4AXNcuftrzW1hZBLR4gx5JPiwXABXDzQFD9yDgCzdbETPvi1xUM",
  "key25": "3kRk9cUe77geHvXfRK6eXVoBQyWtmitsyAXE3y2cQwAnd7vkxDuyyBYbzv52wxbi1WCDoDEFiDFhQ8JJaqBbeEVd",
  "key26": "2kfv6bozhNXbNu2MSHExnxeFXxz9hVTx8TDrXSjjv5649hZ7nmLaCpHZXXwXd2DJbRJJzM9CtricNwvJvWnfSoRX",
  "key27": "2LvBJsgUGxF2r6Tpu5jRnAqtQxJoLuNSHEhLE9YJ7qwixrVvXiwqs3k61TrS46a8T8ZyvrmMKRyLY8e9QgCv6rs2",
  "key28": "3sxQXaoLYEwdDK97D6FkxyxvFmeAwo1UP4yPoVX5hqNHHDLzUgHU2Yk9JXExEEhe1ivZzqsjsMvXVieNJUFGqJen",
  "key29": "3BfcoP7V6WBPXYvS2Sd9cyNocumDBB5naZjD9mqmP4VvUvgbYQ1hCNAWjbmJjP3yy6W3xNRrMxjYMm4FnbxrJXA",
  "key30": "5kRS6w4AtYsC2mYnfhn7ruYruRoyuBEEa5zqfQgrVBpP7BRBWvouxwpZLXitm5P2f9DRAT1U5uQCgou27Jokhcgd",
  "key31": "36vFz7TDuaDdcK9qut9cHNbusE4dWFnFqjAAjhLjiLyQZetMD5pJ4qebkHuYreq6JtA41FP1iWwHuiKUtPispUCF",
  "key32": "5UBxqb2dk3FaTN4ivjKgABYEugFWBVWksaCMkauRqiP5gVAcRu4CRuEdsamDz1wv7XxURucBdzLnAfpqnBPG9e7q",
  "key33": "zu9y6J8DkQuFbG3ur8b9KXsGoXLMWKWgnNA9KDYKjgxRAtsifGxJMm9bhfVQKqT1paximK4K6E2HTSUnfvEwCfy",
  "key34": "2CDDqNU5nw4P3XcLtoihzkkeXSqmLgx8LNRiAGGpSdbguoevKGFQWsu7kiRD59jSDnrV9AY6VvYNzfRFYTrYEjeh",
  "key35": "4U7AA5D8CMiaEoJPV7kPamQZsVgWXfqxLntHRMQ12AWjJkEjpiXMVkPqom6Nkne8JL4kpr1vT8dWknXzq4FXRdQz",
  "key36": "4p9yDAWpd2kXvtnaX5MuD1uAffE7WY5pEaoz3QwjQjiPAHRCXrtiYxrVuA9d91CPHuMvamRTwoHhRzQwjz7EjF72",
  "key37": "4UjTpAfeXx1AjG9YoN8TPMbxgDCW6fm99m2uH21AVHWWGE65UEyxFy3BNFKJY3jgmn4kBtBqhvfdXXQ6spQnCRLv"
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
