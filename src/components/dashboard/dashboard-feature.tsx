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
    "j2WSywLPRMjMXyW5GeSkxnhFpZBKLkrc9zruwLAj44d9dnNjLqwkLASu8LM4uHyrmRjZrXaGQEQfvMEhAGEnUQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uBSJrKTDMCRMpA3EYuhp8HWxhrWnSgSWyjd64H5qi7ahJxC9oUmBBYbPrexv23z5SaNrpjk7oR2ikYkSfGTRNPU",
  "key1": "3BAFJQQdArZiAw1BFDEpVXNpfQuxbGPdzQ6UArtzLqjrNyiqaM5U5BaZGGwDqNyJb3LxpgNSf8bpnYq2nxw8KPBY",
  "key2": "2cbiWBXNX2eybU4QuipiiWAHWdBdB34EuQ5iU5Tgs2iCHHZphz1dbBeLvufJ9LzzcfsysQGzmntX29p6eXbxH9tB",
  "key3": "3XBwaQZEbyLr5WJttXuNd6zGFozWg924uDwroLV6PsRDUXUDork6ygKnCCVPDk6GhDU2292omnY4LtMCvc9USKcN",
  "key4": "3FX1kizDkdZiicDUMQtwogFvz22qpKa4GJRZXHj1mmkaYagiksKBayYLhdePx7mEufh9Mxjtu2TYND9GtLzavzYt",
  "key5": "FqtJZrH5iQLW8hNZ253epz7MdxsxQTSeL6xCNxb3C13A7uwFtbZwSbFW4YDxrwpX31JUTGcV6fD8KKqWv4NjRKP",
  "key6": "2v6uvXe7b6kgfFQLQC9Nq3KWTZ3XDMEJMLekmnUHKzaeeHCEU91aKsrMFcDF1FqpMi5YtNHCYiah7oSt2wNB89m5",
  "key7": "3VUnNhtXJE65TQSCCJp74u8r9kucSTUAeSVAxezVRDMt9gLFpxXsiWL6dEnungq7NVajJqGUeJk3d1gxHXh26MRE",
  "key8": "229sqjVPLosYfH8EoXLKcpesjPbW1SAJdMpDff8vUQJXtwZm4xGzcLRzcpDRS7y1sf2Cv9QEaQnMqgsHeKXktTRP",
  "key9": "CuhwLptE59f8xD9w7r5t2adFwuY9G5uAgcy1SPvMCSjTqvdWFkeQGLrR1kpAm1oYEmLqG1wPoMUd3kQatnGpMcD",
  "key10": "3RzN2twmnqP6BQw4VRphNzKTiTQTwwEqgYSJYhra1R6PDyGRFfujJUX1JdVbVnqcZEAKAE6vam9TG5wP884BUq8c",
  "key11": "3k68DwSQR8MtA58yNks4KunS5kysvqv7JTwmjUJ5MMJhhBD7qHfd8VZ5MpBJD4GdVgWg2v4MJ18UnqJUhSAPQTH9",
  "key12": "3k4eTvvKrgbx3HrP7N3KfWACq2AhqbBsCZwfHHmMVzDC75VKMjDmJPGVG4gsaeSceCcBcc3D9bLjeWnpzmdcYyAq",
  "key13": "VZ84CV5AXk7mns4v5Qzbu1CYyPfcqEhYi18ZLgQf5k8dS3pHbU3TDSoLvXf1bivDskdEFey1cozKGJx9kDM5hnH",
  "key14": "3jVYGCopfBjuFSxcytq4shJ26bR5QPdhDCZWgno7iWMVWgKEzLq7UgbjUZ6GkdzthKCU35miQwdt8tgRSH2PoM86",
  "key15": "58cqX5mnGLXB3ddeNXw8fN2dX73K7qfiiyphwUDrVG9mjicBxesQhtVc6UgfYYAm5Kj91gScAi61t6YY81Ujjnv2",
  "key16": "EVBRYCM1r6uRRCZrejDwXEMEHWxcb3RUZmF2Qf4jqBP27GwJ2xLv8t5Uuw2JBSakWEhdU2b9eERv4WLxqrM4Fj8",
  "key17": "24wYfyTKNwxyxMjrzhw8UPJ2J37f5AuBi6GTWgEQxa9Ve7DBe5raNhkXoPTt6f9xZc9Lusvn6XWXEi2mHxnGUYpB",
  "key18": "RBjugrmLxcS426DHQnMqcooEAwUhjipDVmBFAP86UF1pTvRUq1bNApXoJoGbGvEaY6rfKxyCnqvjHUaS4YEvfBS",
  "key19": "3nwLQE2pq34iKXPB2dBJyjUvNo8aJu4TUzdspU4sM65mZZQCkDV6iWfVVZsTgpCyDwtYjyxkZ9mPWCCYqBnYqfUy",
  "key20": "5YtxxsMjtAn7zWKEcxp9men8ejAk5HEQLXZvsSi886B4bqSppo1fty7ReJMnxGxqax2D21ky4zesc9En9ooKJZW1",
  "key21": "mfTTt6crhuVCEdwzApzMYeFyxa64BWhDrHT4eBhC1rsrBL4CSQ2WefttzvPpDnNbDCASFZ4uF5vTZHEzpWCJ34B",
  "key22": "48RLfQ21YeaHP4TuoGFVwRQi9TnwushqbsR1hMR62nRNXqEShHSWyKAcSjJ8FcX85VW26RpUgHHizBoPLBewVRNa",
  "key23": "5yvhuZAtrber1EPGgHp9AG9wVeQZKMcnmpwq5RuwBw27BhFJxi5hm8xyMynfPToVMA3FW9XBe3WUZZ7GkrfHB2At",
  "key24": "cjbpyQz1oYpqBuRSyG4gzhAnbP1x2dgwHfHPCamX9ASWeTTvJqBZnpoEuG34rd1Whn17ARa3BzvqarQ5jnUHC1a",
  "key25": "2aB92p5XiVUd9J72Gpkgkju8PRFXGvRXUz51yGBmSDaXkqdiDMM52tzX8soD6C64nzNkGcYdVJiq7N78fMj2y8N7",
  "key26": "4VGXPi1wXBKXNWaQQhQW3tE7nNttcyHDeYMqLporLHvKm7RkFqvi2RoBjv6ktRYqZuWAxwyTs9bBULEUhh5E8CL6",
  "key27": "5Et2NWx5D6uDJExR1ovH8wHjFFqqbFtRyqT9nvzEQr1QCV5Pvp8oAbewbxgsbskerorEbanD85SfEgZ31bKmUwWT",
  "key28": "4a7NsDLLJiCiUN8AUtGhkdkLUfU8G6yM74jdLqxKc3qT8pCZVSjWDa4hLjvSsvsizyMG774rVs1iUgqgJufAt9H4",
  "key29": "2xYwcSvMdUF9r3UrEJRn8eL2G8FXn1csB1xUSSKb8Ph55FJG4y9qVHxBEy8YQ4hyZpMZwKWUShsA7wtsqDVY8HS2",
  "key30": "2Hx82fn3rjhcWX1pS1FCoZbJi4ST7CNF2UokF4MVsbpYmDwTsBUz1iyigsqvUFiGt3ncKFVCfgZttoM5bv7VyCQ",
  "key31": "2sJuSRwRHquzSLCLaD5xhyssGVMms1ndcsVmJbkZWATQVanJ7B9CXRjnCZzaab2QQZ3VrRLypC4SHbj7GF5AAEhM"
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
