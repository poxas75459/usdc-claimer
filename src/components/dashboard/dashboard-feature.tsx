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
    "3SjxEtsTkCDsGsasNNnymCd3nmA9eEio867Q35ivVdyP9AY1xH2mXop59qxxLEV2JuZk6UPdG2UWmYSmekA1rPa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPw9vP5cWhsJ1DHZxvGoupa954MyqiMUreRWSU6Kti85DaKu25sRhqU9Z4Uig4pQkqFbkgrBjSKwJG4Ah458CcX",
  "key1": "36Lng63Kjg9XWyjUE9mz2dFGeWoBSHsHViWMRykuhgcTdYLbmC9oWqLS7xxe9QCf7VqbZKPFeGUPvKAWSUVvANEh",
  "key2": "4CMESrdfSkZ6r1EeNkvrUwdRV5X77fqFk9yLpyhMYKYZ9gZf6YgoJzJtuJhBkH5T6XkFKzuex9ZR4H5GpoaTi8V",
  "key3": "5cpKzZZJ4meJ3rsFYaChHVE8StqiuT6Cm1zoR5ydbynHd7HnZAnHKHhJfKwrQZttxUDBx6VDJCf9FGLTCSBUfVnZ",
  "key4": "mUyYkW2zs6NGfSRjRxBK5Au6jdhnVVLK7ALFk7ABqx4KjxrbNvQtEZxziyhySdbNTso8fp86ktvVvH4rfZy8TcJ",
  "key5": "671uTHPDBta8jb3GJjeoh3WJ1TijWSqDgMf8JygzUJVuhAisGEcX3hWy16TyGWCiD1YsVdDaiNDtwpyHBrcbtsDe",
  "key6": "3LFCVhTMUGqSiorYsK6V84QJWc5E7f5YNW2HApz9mNrjfx313hYUFsS2zSDTuyd7VkxiQp5RfCk8HbwU5pp5Mntv",
  "key7": "5cuyXkSNKVnzSZCbDmacJhC12tXQRDHVwp2qmgdn8yatwKKU5Msc613Vi2t12AwSWHptjtwDTf9ChPYwSRgyfSe2",
  "key8": "5LLzetZZtufjyKr2GenLXXV6ucXraksibRogtKHy2RQFjskJPeTGJzVe5aj4KHrdcYp2taziDxUinGERSoZoXxiu",
  "key9": "5WVQ45vyGYys25ENaTE2ECm3d7xuNA5TtLmHXi2pH8cdSADUjS54oF9QMfXQ93v82hbLp6ZWzvE29LGfSi3cDuew",
  "key10": "3cJT2nEP3jxjXxsG6UcQ5UAWTh12VvGaroBVn67siUrVgBdXZCb4WdC6HQsvXmmXExKFQQ3HBMvpxJa1VEgBYKUH",
  "key11": "35V4pJCexGu3NzKjrKT8L7EFdgDa2CTYQsMboxZNM8JbXaJV9S9RsfN2BcmoFUiVqMkCm6Qgvqq8MAkKJJMGM1rL",
  "key12": "4nemqtxNT7h28KHtQgoipvB5jLe4wF5xuVqUp5KAPBdwEv1nxgnz3AkAo16cnpcfDuafhHWPN7BgcWN6hDYbisJ",
  "key13": "23RyMxryduhzYw7tN7MYUsmRsCh615emEUjt48b4MhCSD16Zo6DncCg13AXEA2StNESzvnCgqtfnpfSsLPhyyeSe",
  "key14": "5wQnpj29gJZZ3bXdhyXxeqbsSgVuA6fmFfPuWePTsegZ2qGuYcB4VrUf14rr4FL6C5ArnTRrAmuQgn6V6MQVN9vn",
  "key15": "3e8r7wiywDQ63tNyVsQq7GNSzxof1aTAFD7MJeV5xD4qzvB4LjGH5EMRpVdBDXzf9poA8UyRFzD9aZrDyUrCZFnj",
  "key16": "4JW55rm8uRnAeQH8s1jWuS2rdRdhQjDQxj9sTV13YbsZresArTpnzRw2H46wd1vnZyCNFSRMocFVfwSDLKWYUeCy",
  "key17": "3B6xSiKpqYayUNjBCAY58CSV5SheWYsSAqCTf2WDbxSrGe1qWLFKPVLSUEFk2fvdstjXwjXU2zyMGWHwpiJ6qQxz",
  "key18": "4vxVE5WC2CkhwjVQXyGfbr9ANusg9RRaNf47wtFrgA9tecZVvBGQ11i6PdTjgJMXYxCyuXtQPvHTQn9GveuKrkbt",
  "key19": "7fyGWNfHBNnyEH2iqwQ8KCHqfUUnkRiXJbB6fYw1RCZYQp3GgH9Mw6Ly3SFgWRCPoorH7wntqTFMSqSAUrWMC3M",
  "key20": "25gk733kbjCj3WiM4nHAGiBQ3vo1DgCxPLP3xoqmYU2SChcQ46x9wA4dwv3WUo6dBoWbMw7YJeuu8vDCRRRQNJYW",
  "key21": "2LBsHyoPazmozqAvm7ZMR5aCfqmfnH8aYdAY8PvbLUHgaqC7gT6wpsPLthBPgutH3AqfDykjsAFNJ4AqGbBYdaHz",
  "key22": "LBUuYd7kpjZZbEqZyM56JS7EDs1U5WX7jUajqztRCgdrVweVb8JT6344GybCGie1G2dySuwMzjRaC9AwCsb16Rz",
  "key23": "3ZXkmUkm9FdJPCysNSf8uit22zcAKvtNxkPYZmC8Wexj3dhN5dLNTGpZsUktvRF3VZLBcbeHpgXFiKdStzMxnq2B",
  "key24": "X9X9upgL4hx2YAHsP1J7TuY6uBVDQYGitvFKhXofKuiXQdRvyFCxMESMxXYhbwAtopT6QfVLhQVV7XdPqrZ6XAY",
  "key25": "5k3LCqLzf2Xn4nN4EzfdPWA86hHyw1NjUZN6VpXogvzsmBCuDfhxj4sRL1fHjcfvUsXNQZQNk6WrG4mDxicxBHKL",
  "key26": "4oFWVig3EnhEKknKQfC3CS3gHMNxJw6Zi5WhL4RAgf8gPbg6rYfaCmJrmRSovhwkQ4NqKYtKL6ad5XR9fEqxg5Mn",
  "key27": "5u3fiLwAUqH5hs3AmbcNReX8VAFyTJtnFTbskMG5sGCqkbLxg2xQZamhiJVAB9rFnNo16Bj72hQVhmZXqWrQ69zy",
  "key28": "4cgZGKgp3k37YHT9z3S8kihAjZfUpaiCBtFXqEpt356KrD7stqfuSwvzSs4VbjaggoqG2im5otbfL8U1z3r3xMBb",
  "key29": "n3jKrii5uisuwTgSJNisQL9sJigYMXhhueAFkZRAfE1kL1sNBhRx3G71ye77SCNbPjTqDmYzJPyUrP2qp6vh4h3",
  "key30": "4xU8a158giT2nKaXmZ5wJWzWkDcXHboxfs99bXFhbZhg3mKrvmhUCuWScffzdmTHG25rhcFHbqPPnQvSAe7Ai6SE",
  "key31": "2eXoCLAQY2nnxz12dNCAZYf4zyU5Rr6um89VjVCqL5SCnw8VrGi1oUVjuxYmtv1HvaMdrQKtdKJrGnLmkZvY1ZQy",
  "key32": "5E5u5qm9VTkHhjBAzGkBMruLeepehq4KMSsTRTXovZE1W13FHjziVwW9bw5SHrTQJdcpboyPYvj8Bupthj9ZLUAB",
  "key33": "2J5GAmsVnmEWqewtZuGycsm35Y2xdUvjAThf14yqXhfVCALWDioM7i7iViUMshK2qk4dhH4Ggx89o7Dk9jsKucQk",
  "key34": "4pk6EjA9R7WfbggRC48Uqzxy95AoEst7FdJafnJA5EN6ki5j5nscvavLyJ6SV49eATSDfLgiYnHpaBtGbbsz5JwU"
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
