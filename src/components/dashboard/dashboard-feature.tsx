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
    "3RNBorzJ6BKQtmdZiP6xLiaV3N3PWv2PyVY9VuJX9NgxgQFT6FLLfK2aPtzBsxs4bSL7rbnNSnL8Xf1tobPPVcH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NWBd84XUkz8uBwJFNkEMbs6MhXCZdndqGRcYWm2YqmfrYsocm7hcyhvaWG2hsxdxWK8mDXgGmUNfM4c3Tw726Rk",
  "key1": "67CADyAfQYzEHjFmq68bBURQUADLEpUdJ8FFozMsz22zK3Gmzr7hM1HuFgoG3SQqC4CkAj8k6LvPu1yPyb7QRcGw",
  "key2": "611K3opaLEkKaHd3bhnU2ar6hMQuVvQep8ywffpiVJuVNB9k5DKzSwQjtc7CruNW52AXJBn34xxYKHBdwuBd1ih2",
  "key3": "4SQj9AbF9gudohTzzVJNHCFtHVmKW5oSvxWGg4n4gRreJp9Xaui3aRgyVtSK825DhhZM9GnBFFViaD8oR6vfCL1V",
  "key4": "2VCxrFXTfEsU4drg3G9TbbACb4wXsyURrGGA7acZEPEzA258CCtq54FvzXEWWndu2pvdVYEaryjcnEL9Kp3ScSWR",
  "key5": "4EJx3F2vvokbbtTt2JGYkdunCFwgBA1LMBjrmtir2mcUh3MBfkcfsf8yCiRx3KhuAqze7yJ3niRV6TBpExwEeFTZ",
  "key6": "2TNAiwc9N7wNzn6VMxcfk4vYC7Qzn5SpXyp68HhZcJzJ8LeQKb49akFjVCBCMX4NnpQ1QVeuuuRcYQ3fbnWupBK1",
  "key7": "Dr3Yz9Rpe5zYMAgdSqFvj8uRfHJsoXB4Qdho957MqLQ3yuactii74hHhtagnxRjZk4QeEHgojL7TR7epJrFfPgy",
  "key8": "2ZVVkKCA56bhe64djYzJcVfFFwHzcpAdkL6w8LqLdcB4dcZrULdszZKMr3aLX4HmTKptkWeVR9eptu6nn1cFM95u",
  "key9": "4Q45VP15N9R8eZ2qzc2VMgpJJLpaRxvYNh9ycwBcUjGeNYGpnPGgUdD5BEPSsUtPeDmZuvs3A9Wfb6ZoBAksCXgp",
  "key10": "5CKS8KsHREg6f4STK5noRyB8BA4AcR8kAGCgzPGgm8xjBoMGGd3odoU6WLafhQuxmhKd6xSWvcoACvy42NJYx9RM",
  "key11": "5ksNog6quM5B4CX5Je8iVJvexPsXtDD6k4Mm7YxZ35NBnYLtUaTjaNSVs4KKaAYVvUo2vzLYiCAuTeJiueGTZNdD",
  "key12": "5pDhaToYBPuXoDKhjNYfxK7tCW9K96YKwKQVmS4kvpTFfSo4V4emC8fgcoCzeqSgKNE8Jr86Va4WBZdfNJ6Y7qSk",
  "key13": "5oo6jkXWmEbpczeF7GH9e1gn9JWTZwXeRvvB42Y4ZypGwpNgQnFmBCMEApS6scTH22X7yo6rmKXEvx6AgW7KW3Ce",
  "key14": "5h3uGk4dHuyUtVLRt8ekFkQ55Qi63kjtMmPVaNqAK9yMNCZnSFBwq6NuiVZphHLj2wpALfzUHhMxgRFtrmiUDMKd",
  "key15": "5cs2ebxJTGUDudC51Vb9wxZgySfaJ4MQrRiPew6kkKHkx8zzmw1ppy1t3bPN64dhaULGVHkHYxLjEKPbbRQV2cWz",
  "key16": "ue9zkZsdGRM5RLSVxisJa5cFte5kjp11eu8CKCzsV7k5E4B7XuBZgWhQoeWNzSWXnEmDdoGvi2mdJoAxGeQCeUS",
  "key17": "3SURp6aLjB17kqDBJb9gVxMoWqVRqvfxtbU7BzxsYAv7QrYpEVTFzhTrLutctiA8XR611tKJYrGs1Upg6znbqnS",
  "key18": "2g8ScN9RmhyHVxFCa6RLxQUbGZTUkWuKf8kc1n3GYS4ca9pTGWPnyeSw64HPRLJdvR1feUac1JcqhfYkc22vEJV",
  "key19": "56TXd9RtqoaP9YegbMptp2bZ6KxNnng2dDerTrS61P1zkbnRvxo94XqJhrWYaApUvV8XUXHkffBWAdDoBDy32wP1",
  "key20": "5C1U9edTAXiJZk2QXc1CTfvdLSr25fAhNR71YLQACGA4ucJ8fVG1ocsi8aFfFecSmz6aSbJAM99Yq8BAmHw2pBdp",
  "key21": "2QLHLGSk7xrNqMZBYRFo4sfgND3tYcRmDnEA67J4GRqsYUfBLA4GRDx9Mrh8iRr47zYXFMoMprqt2Y8Mx171MUHD",
  "key22": "3CSrxRNJvBJ4xhtyPkkHiMgDAf6pYZrUgvWCLZQVUyZcRTubdFZzSTvnWNwEqXy53U6pVfh7LX2Q11dLk3YVcyjs",
  "key23": "wEvCekWSkHU8Z7euZjjwzJxSQs5XR78TUwVbom2E9QjwcCGnN6yBqinWWBH1UqUuNvKaNJGkwLkNUDu18uc8pPm",
  "key24": "4Jd88D6fQZdf1PUv2LnERrhBDZPvVUhiWho1xkwiEyJtctv9q38RqaRiGhxUKH9d9Bokm3qTsdBPQKoZzXLgVyih",
  "key25": "g1VN6LQKUjTqDtn2QFBKDrA3XpwDkqYfc4fKTe8gucb2DmhjjXCy3QBKNXxBUYPpu9JzgpApCCqTubJipXX6GZM",
  "key26": "3zYp7C46jHjWdwisYbJMkiKKzhaeYQwbXJUmrKLw6jwoAhUnTkuqBjPbptL7Mf5bhdgLR8cNjg16YuYWHu36UwBt",
  "key27": "63bDDtepxd3hbVVC5MZduqfc4xXHG9H3VdshrV39Tchwnt1yQ6xjAkAeaaRX52MzXjaEpc3o9KNw8uz8e8AUNRH5",
  "key28": "4h6bZsXVY9Uy6PUr6Ay7zD9U6rtcLc8TZU32aYywPGLtfpX2ocSjRgnJSmRWGhJBEu33hQ8YJiE4fH9vNKEAweVD",
  "key29": "2bc9rvoLdXcLJESJdkFvfqDbTgaY6JCV7gw6YqpFVDXxgTxBQXeGKjrSQQDxuMoEoQv7ok6XGXp7xYcnnmQvpasV",
  "key30": "5vkrbvpGAjznGhawNQour7yhqHM8Ju5Efw7VuD4aeAKochPScpr1Sxen4EFAKTaFqaTZJXfZzzLuiiYiqPigpBXj",
  "key31": "eXjRXoJPpJq3DyXuXdvqMcAzhwzmjjj3ZDirctKfdJGyjBgRQhjJmjGm7hP2DzgvoFGLVfoQHCR3oXh5FXhyqRV",
  "key32": "5qYTtbAYEj8TLKcpdbHtkscgmRQtDdsafLoYNTrrgmDmbj5HCAcGkBSBUjXvxgfvtp2MZvAQ8WJh1emf29bALdxU"
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
