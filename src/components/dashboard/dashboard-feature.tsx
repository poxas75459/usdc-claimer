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
    "TLK6wZbCeLv1nHLE6XBogHtNiUZt86GXSgKF32wfYPSw1SaW95Wodf5FxG1R48SnkGnGACzjdApLvA6KdDyvP1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fehRc9PwMTSTptH1ymPn1CoepyLVhHXLoHqqpnEs2iPkuvVWP9eXpTYBSzU2EZyz7cJj4JDchBx46HA91xGQYw4",
  "key1": "71XC4R5kVxyiBbE5P8rCjtamyWYAGhYmQfJR41BSjKBpjj4CyV4snbEubj7D6egKGvqE7yWXCj2ipbHwueeWdkA",
  "key2": "2yjbthb1B1duRSWEcocL7SDTGGP6mS9v6VeEn8MKnfEgjJxVt49ePJcNkTEXKx9DX8kMzt9VMo1hc8QoTP1Ur4VB",
  "key3": "5LpLVU25huwbbixJRMHvQFa9s9HfjqmswqovZWiceGokEDwyBYjnjN5v9ctC8qYxvrvbw7ZLFMAUroiB2RJUo2sD",
  "key4": "oewvudBtVu7ohhAF1DUuU5QLwNDkBNsZfPhaAohbXhYr2Ffb7rPMACC47i2rg8gJL3HR2fJrikWFtuWD4CiRL4R",
  "key5": "2esNAq4c1TnRffoYNSaK8HD3CJzq3YKCByCqDvrncHgCc4to2EUiPT6iVs2jXN7Hc8VR2ZVqcpbzGmGiJYaQWHck",
  "key6": "49QQLssyC11R5FfdjV754B3Sxy5E6jdHwznmg13ii5b7JzWSFEzhpNZPNkjJxDN68Mvpzesi4gztVXNqA3Uh9F1p",
  "key7": "4UfuMEiV9komFGK51jtZb6aEbYdT5Eno4cvSDdwvLmKYJ9AHNLA2nLih46e1YSE3UdeQP3zQPUV93qUfwSV1GE8f",
  "key8": "3R1z8TmWe2MfGDg6U9P7LJ4weQXqfM9L4QmMW58LBfXiLCNcT2LurNDoF7co11F3FiX7hRBCXaJv7ojF7kv9FtAB",
  "key9": "eXQTCz8sdMS4nj1MM9quDsnJSFvVAVSTQuCpqitNSpfXttJWtTHb2ReXPCGcvaDF6CpVTVMj4Qx1BkLpVLYSzpa",
  "key10": "5mHAbhupUWYpPqUXZQ22Yfhg8A8zzYSrHEdXJ49ZMCPVHroARtVVKVdTs4jz72wL8kTEA6eTvzmkz7hUYD9oQ2VS",
  "key11": "5ukYpJSbZUPYKCE2hLsdE6VSfGMUZySpb4JiDaBQG81mBMzfN4RJZgQdACQQqYVddXZSMJwx5Ka381xhqfD6yaEy",
  "key12": "VKgx2M7RzNCcsUXGcyPjZ4sCngq6sMrH3bRxNqWXpNcLPNRXmiPuJ3i5D2gjVXWYX35rxMBqDXoZs3MdcJezeeD",
  "key13": "4XsgwUBoDNvhxiW1GQB7cuABzM9dqpWUsYFg1H4x74GLnnj6ZR4bXR9wxsXtVNB1dyekNYht9jdX9z3uzYdD9NRS",
  "key14": "2N3CMNrYjF78wxK6158b11ao3ftuNMQnRc1XG6ddrEDfefP4orVM7hrpsd6M3LVTXavkFjo9T92TC9qKweTKNDFZ",
  "key15": "2Gdhkr6rkxyE6fVtfWQHXRD7m7UMiq2AwMn1JtkQWRSDTWb1tjzmsfVivs4nPbAgVPx6s9CtXE4ZT4E9u2xebxjK",
  "key16": "31dCD4ZWHAcioVKsE1zRPPHoUbJs8p8427p38c9c3GTF5TAkWi4RA5zv7BGgFBWXi6QRx2Vm2ik47uJhAHxRr5Dn",
  "key17": "2XRNK4BCpggbveC7yrbf1GEdXQNkBL7914ZfwJiiK3rFvYjokNLTT9D88J4CzTFpkuM7Pr7Gt6UMGBcMuKyq4PuE",
  "key18": "4mUnwZRDPPoJRXPnpBnwjEzgTu9MnZCGRStJb1skc6vWBUwfg6cptdVRPRG86sJNWPNRKLwg6NhDKTCEPj9DR1Jw",
  "key19": "4dgVoMcWKvYid3mnZNZ9qfrKf3bAgjzu1pktUMFiJAcV1DND1SefQH9LBsSVRCHE8P2XCTUFd5YGXPVutPtPCvpe",
  "key20": "5Lkgxys61RM9zLcSjZvvyBZAaSEGWBJgEanpdjhNSod1xd5Hh5W3QXKfTrihF2bUiSGprkorArFnoFDgMKC6VhB6",
  "key21": "67oufHJgh4CE8pGMu15ZDb47YmQXyyoNEcWAXdPNFesUjYpvMCC8KS7iwkDgkMVkMr5vcMFVMJG4ZjdLeb4tSpii",
  "key22": "RuGNqxXyQAMJwDA86WTytvRmoeTutbBEBY6nGqLJkBFm4ZuEQxZAdMB1YtT5R6idAJBNyEQZSwXRgeQWj4dnvx7",
  "key23": "2KnVa6rgSxadRfkrwGUouG8rsRJcrX1RsG16gXUHnTisr1mSMKm4iwxHdQd8NaiUHZzmXtEQ8BtFrq3anNn1WBwm",
  "key24": "4DmU5r4Kx3cuMnE6wGxrVypC9gn89KR5xv8tApeQhtwNYoNAPuUVkWxDs4GAxbHe9NJrry2vwQqwq5kSUDJJGkHP",
  "key25": "3ovHfTShQhrFy4BLTcLCnpRSy3mKAjzEq6seP117hkqeN4kHZaSmezkJKjEUXbJ56HV6CJeW3csnR9nHbRCkUbK8",
  "key26": "53mFPRG4CRuAV8be9FpSDoj5qoeuz4vGV66dVx2LSbNDQXVzyhXd7GdgnGbZvCBwuqnu3jmxaSvwfJEXUmLVyTLP",
  "key27": "34XuKHQLyJ5WXdWM5LmAVTJEigUebxLGLR5qeYvj1RZuQfDXYAonDebiSGRxpTH3sKSLbybaatqCkc68vV3LqJgU",
  "key28": "4MhTLYpqNcNyWbv3xbyuq6TYK25wubYdJ9uWYkoe6QhKia2aPUsbyvM3mtxpibBAbqAejUy8nibQpHtKeX7jJcjb",
  "key29": "2wYFXRmps7zbCp5nZ83QrMq7UVMqMkMdDE1yPirBKbCZR2wX88ubsfm6Asnx5rnLWisAweQ8ZQ6319B21FEmezfz",
  "key30": "4pDePG3mhvKwdKNRc6R598Ph6vrURr8MzWhfYYtQJRcJJT7m5dxQCMpqAqXfiRmP3wc5SRMjFJfsuxapZUg3BMvH",
  "key31": "3WqKo1ih5D1L2uhCj7bV2TrsWxRc7xubqo5ZqqvGKuf1o8cUuyZMjsxEn35sZFDeLfeWezxbbYFyRX6wYuzuBaKC",
  "key32": "4JK9ZDurZArimQMtosBut8vjmqtx7KZvJFV6XaTwdNRqfxwSYkGaAMMxDT7M4vQuqZ5pwqxiAWhtSXdKAreDcwRw",
  "key33": "4UUqRBz9r5qyDq54DsjuAKZ7HQtsBkTGXJh3kZZKG5r1hRSV6xD8KJ3z5gCnAdWLtGk43fgnLUtY9bxd6JWNhfzm"
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
