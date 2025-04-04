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
    "4ProJyHFsPGuy4TAhePkKzfQCVvU8qbg9kWB7yw2nhgKcSo3BntArxS2gJWeoSVGzgz6Ae8FjvJyuQHLy7b8muDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLsqWyJeQTLGuc8AKSJXgxj22jgZa9BFLzakjWLKba4BxwMBTPV4My2b7VfNypNVAtJjCVMp5EZkuDzUJoBups1",
  "key1": "5zyQTayrwx6fPSEvqaMAuVj2EBJYnNccmB2dUKwbBniQNZex7obSqQhg4iHHjSYUNBUM4Tpq1todVztTsWMxTxLC",
  "key2": "24yUw33HMHo3b3dNKK5Zcd7h1RqV4Xhu8jBSNPAin9ZAHh6PcavK3LDEGTtZesBCycAX6dAcU1HJuJCmu5xaEVpP",
  "key3": "5puQWYSWrCuhUFtanGGuiVh1iFZeCuqYtLWNMUUU8APWzFe5onn1ozfXqFysTeVNu7KbPcn6yzBhaif1oRnsV1FE",
  "key4": "67kM6sKULHD9zqPSgrNChsYR4jcZ8dBETewwNUmtNBW6c4dUiTcaykabRjM7cV5XrTj7CMjGr5geBRv4EpCcbXaU",
  "key5": "4JJ6ZJA5L4ketxdVnyBssAUvPECNxnVy1HKWr3BkH6FeZqdthUYcL7u9hNVnLbwXvmFEVVL4gtLw3x4VkbazSZyD",
  "key6": "5swy33QcbqGpuJKkcHmz9KLrJhqPVTtB1rAjQV43wyvK1wJFtXKqzUH7uxHhXrRWyEhkY1UCszZfhRwRGD3Tf4HJ",
  "key7": "3w6itpcPSbVzhkL6NxMTcRt8Kd92ksv6BK8T5yfFkM9nhaYVrNWh3rDkqp6i5zwbTenPNHJo3wgQ9ik3H3zZzcE",
  "key8": "4Q9NFGYHKsf7WHLs1VJTQFZtnQwdNLR3XVyu7P243TwnHQsyptybJJ4CzPZsuqZne4CKUDty75SWvJhch5XJSbkA",
  "key9": "2QYdyB63S9i6JMVDVaNokJMPFwJCDYC49j19qptvNPMiiVgDa8yCNv9uppyhQuwwqicoXDmfcKLxbsNNj6Dccpq6",
  "key10": "37YkdyWHcBcTShcSzwTknEFdkrFGW2vNERDwyKTEvC7P3rWg782voSY2PpqD5LZW1uyCoMdDRb4W1DjgK9B8VMR5",
  "key11": "4zVWL171s5ATGK5yAEGMsfhAVR6FUipCSykR9DkMVZVNc8F9sB3w5in3yr39XJEEDvjFxH8fJ6wQ6s9B8sphrJgf",
  "key12": "4jtup85paQAFWWnzXUgcbVqwDFaSXz2Mp88W8kKVkxWj1HHaryCFVXCXXgEN6QNR1hSYVgE4pFFMpDzabN3m58Hz",
  "key13": "2GmF3htMBo9UHYtfPy7NA8cP3UHE5SMyZM8XmA6HJUfHP53e34nnXkCkubiMQ3TN11kxW6LLmcaq8wt9jpGitK6Y",
  "key14": "2esfm1p6fnfkaxDHiS1qav8zvcKmEm8ECqPDBvWKDS7FQz3P65dnuoRmvSJMyyS2gmgGnf1y1hSwKU6AKQrRxLJh",
  "key15": "TwhtsGE8GKfBVvzZpec7uX2rst5h95J58erKKMSJwpRw5fxwnF1r3Z5BmtK8ugxqX1mnhVjv5mWbfFdc5rQ3onA",
  "key16": "5PxibyYDqofKUZDmm6uxtJKX882VpU7ZFGoh4n73JBwkpmG69bZPWjFpvfneSYqZ3mtWJYKt3faru6eXPxYKs8kp",
  "key17": "65vHQRziyr7CXwiUD9MrgJMTPNdPBdye32AimwcADGuUmPbjnaAFYtbiNqE3iU6NKQCV8ryLYnysmeqgoguzwEDj",
  "key18": "H9X6P196VtYBTvKJTUGNsy6LH8sS38i7PRodPXCQQgt51XLNKQhyYBww8yzq7GEH5BPZEhSJwx4fyXcbNVCXni7",
  "key19": "59isjh2Ps4B2ZXEGG93Pp5sofNGeN5Da6hsr8T4dANEXAZM84yxNq1b9ktZc77nX1fvuANnskn8y9ckFSUEp78Vk",
  "key20": "UPqUekqE7tLeFdiSDYkBDh8EW3wfBGFDirWDXBqiv72B6TTidnUJpWMkejQkwZaW3iQQn9TotAb3zhfA53z3e2Z",
  "key21": "2qXLKu5CPH7npKg86xefMMCZQkarJ6MhDigWMFUhQBFyLhqsUNbGnhudgBHeXQCCf6UNEYv1vMnkq1pTceveUMMb",
  "key22": "3pQoTtb4UZQnbQfmavLbMzvgX3aGCzMY1LsAq1khHqftogLru6cev5eZQaMSzBi8p5o3z3B1DRv7oATGPA2eNXvr",
  "key23": "5DVKwp1A511r8WyjLEx9Z1bSCzFen2jorPkEtizhcW623Ge9BoWHUqGy8prmcyqwfqNkttnMEMpFk9gZ4yppvCC6",
  "key24": "64gAPGeQWcJ3u1PHLFvPrBJpzGLMd1tz8AS8CkgFtshQGB8RgEj9JxMKFPpvyTDqbQ6PDfPPuG49jmwMCSVLRLYN",
  "key25": "2SD9gHv82vtajEgwvHBgS3Bh9br94ADaNtQijuyHA9NbNsJMsnDDjJi82DZwFFJX3CoYSnPdkxpVGMn9V6gAr93K",
  "key26": "35sGB1hhrvfrdxE4TCwM6tkTdVEDy6xNpXdMUcQjMzfcxhGNWTxSSLHmBnduaRzBKCd8AKrwYwC9vpTk5Aa3UHza",
  "key27": "3ikKCC1mjGeY5fPuezhsdKkWS9JsT6rspyb6BjvLnwpbjbc8B3G3Gta1QfcKcUaqYEm3meDeTpFsAqxifXfj7SUy",
  "key28": "swayVX72webdNZ8WY2JjXtYSE9rkTm3yzrHd4Bzjs4oHsPGgVTAfe7svmXsnvsEJ6KkLv1b3uTKcqcWZ9MeWFKX",
  "key29": "3aPdmBRWB6gcqk6LWpABQwh3Jcteqz1uzkZ9PAJ2j7xoMk2g8iJwJafh4N5bPMY8sJQqWdQor8z1kAN9p8mTzdoE",
  "key30": "2zCcCmXCvS394JdX7QyVRvsYnGfAEYL9VpHoCtNRXFWbWcMip9744NA6Jbd5PUN1VmPyF87DqBNdnKh3jL97WGHk",
  "key31": "5ZEynPuzW7QcsLBQUjifMAuEDX8U5FRG7W33VLpZKR3oNpKfvdkdW8v6TTUV8yMup4oXcq4cEzoK971L1wzQWHZb"
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
