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
    "KnYyxzPYMhAQjWozcknLFszNnDwhCUQK8FszRDSbToVNrf3mKpq6RxkLtMYiYVCiXc3MnKx6pvSKn4Rx88Jr7kL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mS1xwa8HffR6HujVxdsgL6da9s1RKnWgppHk5h1mri3HcwER1BS6zFfHhUjgkfu3bNdz1W7Vh6AaCARxS4XmS1Z",
  "key1": "fXWXYGyEzFiwvAWa2rv3V6pABGTHRiawnREP3y8tFWSxXhmMGkhaqfNcdvXh6zTcg8xmRr7hi6Wvuotd66GT7pt",
  "key2": "3BcBk8BopRQNJVG8821aEcdGuVD16pajK7N1434J4UBVMFESxATPfuLP1He3TUWpUiSYv9xRT7DF93vCScxtmuRH",
  "key3": "65voA8vgMz6ACzDeYUJBAxsCaQ8jRYFY6psMUHM3jH47dL6cgQ9NDdBQBVXn66oesAdiNmhkw2gvPt5nyPjVMyMo",
  "key4": "5Bcb3rvn5UMgY2wesWm21xvtxqSFXr1vVhPPNH53t2KaZrThn2EdJEEa8jPe9sY7K9h4K3q5c76uuunAtsio6Prv",
  "key5": "4B23mbsHhsHteWv2TTNL7DFG9B54VMahgN5kM1D3snAjE6xZPHAWfNYZLu54RERw2V5LAyvio9nz25aitKzsG9Kx",
  "key6": "4hB7sAKmRBkKmkbZqqJmj1qZZ8dFofr3saZfFexmuqE5GHCyUwLqSy4cVZAxmeu7nDajtziCY6151BjFnFvwPnkF",
  "key7": "5XNnuMaRKrXiJ7XDyUUSePzvoZarLd5z6seqpy8LkQTZM7LXR6YKJUxEM611z2P3PwaECGTQwX36kuNvWvuX6Q8R",
  "key8": "36534RRCyYppBCQUAzBL5jAbDbucfnCKUj8BhWRNmniej9v9x2ou13D8FZjRjqo3hMhgofcpY9F8o8Stjh3cG9Xw",
  "key9": "63rKCHMCCvXe5BdmnDRjceP6SAduzo8AzQny25xyJYeTZvWpQheSMy3GocpNxZzLTEJX3TozjwtibZCownzQDLHz",
  "key10": "5GDFaujzkqXYeQZALvFbZfx5Zr5epmGKYNuKStkVdprjP6Z3izSQrF25SSe8j8QanqafvjH9hZBxzGx5Zi8hqtZe",
  "key11": "sYgd8QWPggZ7ymQE6XtVJpDQFAPHH2QiEmeFM8Dcfhh6ooQLRCSAe12n8tH9cWLPpogrVq1SPh4NAr9o1LH9Kuw",
  "key12": "QnXfTTUVfKRHWcxSSwKw1r5Uxig325vtMkzxZmFDdbu2Ry6PCXg7Tu1HYPAZXV7CCSyaLdi5doU8NtPaW5D4PrN",
  "key13": "3pyKKpwcvutTt5Sozyq9xktQMgV4m4U7ujXxPSCmddDgQgwoB9rXnU6fK3GUbBBtDFJyyPzHFoMG8nxXD7Ukpz1i",
  "key14": "5NyYcc4iy5uYaKArKWT1HfbCJAJrRmpFsY8p44MTZkV5CzNjDeXSkD1VX7JYNEtr2zA6pqtuhs7tQVg6oV9kJzt2",
  "key15": "bJr4KPsodbiJe7M3Y527HUirwSApSgNCh8H37dpW3B9vMX31fjGZHv94zwKUVQLQZaoXrwruvCgGNe6v3bRRoj3",
  "key16": "5rYQvTmzQijXwMNvhpSVGfQHWNDcwnHAxpzfdKHapopHAAJfcXE31zBQYYQDw62qbawfTTniiii65cXJN7Bob6bW",
  "key17": "4jyTk1QtpMa8cqm3T4gLaNb4H5FJ4mTXcdUgbaQ2ierCnvVPmUuJRL4rJiUU86ZNhKsuRwh3mTLWUwNyPVwkF7bM",
  "key18": "5HvELgNDWyB47jCzzF8GJxeKjPy5ELprQVkgB5fgoJJhMpUbFPNe81drrVz56RN1mDRav1LaBDQms9E1E5B8JjMF",
  "key19": "bUpsRpjFEUnQ1TMkGAvG2oPtiySyYr2Yud9zjSSVKtDeFp2GSgaTGVSG5CivgTj3vrFxYvGJzpoNdWa7URbUo1M",
  "key20": "5475unXuL97e2SHNwmFGKBvXZrR1yxFmMGLPBc16SP31QerkpZwdm79jZa5tUxmSqUVyAwfad31uT7ei8FyKo1p5",
  "key21": "5PXhj5bdWiZWXfVrJSaDe9dkH6KgsYM5xPXVyaz6JMgAx2EG7nMjVjRtrXHok3L4s1qAsA1m7dTxK2jnzmDfJGdn",
  "key22": "3EKt3tJXA7U8sbJCvrGmbYY4buPnnTXFnKxGciy6coMy41CPasVRuB9cNCu6Q6kqR8FsLV4oViz9i3jonFXioF8F",
  "key23": "2Hfs6RgiBjXHGTJw86B9deVpHEmbwLLpjBtbQrxiaeBU4YMWRNLKAkaDyTL5NkL6FHuaSa1RBY6j5zR7GFasnqmn",
  "key24": "4gMXSvrL8ik8Mo9QpGDNLfofcxsFhJfhE5zyiuPvw2QM1hKR1USNnPaCyurLmvUD3kLwn3m9ztZcptvkNQwYH9AM"
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
