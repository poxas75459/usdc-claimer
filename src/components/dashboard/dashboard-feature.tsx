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
    "4bshRJ82ARxWfMWsMkNhMAUA5JeTM6dqA16NSLyDEawMTvpaXBTg4LqQoZCsFdu9SmUtusuVYbxr6h5dz68D5voR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a4Hq4tXWnN7JjUU92S8o3qvUz5wviF5ijQX8JAwFiNdzssDzk1GeMDjYaf2vLkcGTgDntoZfc77G8FxF9GoGi19",
  "key1": "2JG7ZjDML9wdx3fsMhmYR4beAU35bhfXZVCggvKQ1kmpqUWefv4bEpgj46SBgB5hXwaGctqR857D6r3L3DVHNP7Y",
  "key2": "3tvXUiumrR4PjL7vU29J5rfEZwR6HBEAiFB5gYj5aV4jggT9CvEA6nxvu5MmRoA2K7PgZrnech3DeX79kHp4tkKQ",
  "key3": "4CUJKwzhzcuGx9fVcv74FmjedrMYhSdFTQwuW4mBDmgogwXMWd9CWuQmfjwPvHS7Zs4tipT7VHYURR6S8GPTydDJ",
  "key4": "64WCEk423GfyfRaNSNk1AefX9A8vtjFWskANdYPXxb8ERX2dWNHtqs6GPPJ1P67LhbsKynArvMF3LXnZTGtJXVHL",
  "key5": "5m5BCcCQYr78p4BrhfocbWDhTXRd11BEbWX7p49qwQXap5GvUyHf5CSYfhB1hrvZPxyxJtwdC5ZgeSTaYjSa7btr",
  "key6": "4ADUr73L6n9bRbi5JKdhUb9CfrSNVtYvYQ7PZvezmeZrVgwF6V1ci9KVdtXdHbXDQERsP5HNezDpeH2HXj6FGmLB",
  "key7": "3Hqozu7mS9BHj5acVuxKtQvyDdvbs5rne25sMAGmbAUCDruxamUNCmgAuCacGEMFrjLkdFXYDH26pTfg8ceJ9ShD",
  "key8": "2nGXpb8LfrqbCFhGyTCiprwq5oCTeWpg9GKa9ZsjEmuTh2tyWv3hHiiFNf157uLgbQo4Tm19xJNMpHoSLKmGxcPE",
  "key9": "pdNrcxbUyngP5CbJRx3WigQ4TtFrM4vk8SMb6wGaFZjn1cuhdSK1q5WHx24oR8rWxCnDayPZ67Hb4cpAsWvSDuU",
  "key10": "2mYaNayGyMZ4JpcHdWVFmEMFPrL9g8raf5UdpHABJsos56x9yJNvc4n68oJ3PkSS8dM5UABJZMGB5R5nFJ1hyfHL",
  "key11": "3bkyuWvFySMcdFdFMXCLg6saUmpjuCpJ1un7LQEqvdkMSoz3yw154QH4X2VSWnhHpTk3zX7sEMR4QSMGCPNmXPU4",
  "key12": "2JwkMde6G63Q7prEgaDN5xfB9jMN5tJ36p6Uy6JNUx8QL5wUQgVWH4SFKp6jYnQUNvNstK1XV8kdvAsEA1XQCSu4",
  "key13": "3WNGqLNiAf55RQzBBEEspdAo3E8DYBouRP4zUBH8kR9U2emZH3PVSpzHLkShRVPh3aPREX2uTTqWreUVBSNHbkvY",
  "key14": "3WyHrtgLgrTS1ZZEUnKuMLDK43i5a7Xq5LaZACUdCy5KTh61whVnjvFmyfier955qLRhwPeQrWYCxM2akqoaTfs3",
  "key15": "5KGzsr7L5X5HQapr11orGsjg37qj3VeYtuq2tFupB15eb8TQ4Ub1CWtbWSiAu36b4YD3454GrCxt1eRGJgaRhmGE",
  "key16": "ZTchXum1hA6XbDX44SWrM5o5ZTWSPc8rXC7ebyz96wsDj9twV38718rYtSJEmb1hRehiKeCNxTFYiZ7GM3akvHL",
  "key17": "k7M5LRS6jZ2MUS9edTAAAX3ZBMPj4XbLG3NvY3FskJKKzKoM1uHohpvkrJiqYtEd1VWTPQsP1Av9ZbQKUY3dXAR",
  "key18": "5gaxnTXtehuXxKp5io5r13iDpHjkFaYZVohZNEgr1ETZJCPpjbk9SLQL8sbKNh3CGnLxMabVNqiYM2ir3cfc5Vg2",
  "key19": "5HXbYhg3zMuYxw8PF6JrWvMUtnxtbDQ5mxKMhJjhqvB9KdR52xAKUBzXqwNjM5imGRb9S2cZc7NvkjNg11fj9jQf",
  "key20": "5Cpb3oc7ZfpL4ew3E1jg328jb9T6NJKJytGbJqbzUGWPDSmc2YfRjNLM5ZgGmKUbqSt98CNGHQj6u97wRmfM5FbS",
  "key21": "3z6N3H7zE21kwUMzsizR2SDgS2NBkiBJkL5BqyYDvDUQbXegojjeNkadvQD7UehEi1XpVUsG1JXyxGS3S9rNFNa7",
  "key22": "2YWx9vZPBPrTBzDFazWqfULzGPoJcqiftB5rRmKPHJN1RLRAEwPMMsY9GDwjwopoASkZ6y74SK6aXfUWNAXure2",
  "key23": "3EEGXFdVftBf5v3giCgHmFzLmhjcaxkA1m3yJVaJkitGRz8iviXVnvq8YqmBuMN6dpsfkawinMS2mT7Tjudw7N7U",
  "key24": "3DqxaNxNMaHdfLRj8en8pc4Ev65D77PLMSVR2JLeG2ai39PotV73XJVRVNfy2bqPy2Fqcj9yuQPxfiuDx6H7rBcy",
  "key25": "4swCrJevhxCXFqZ1C7kLvFgdzGoV1a9FyU5a5daaXt2L8jxvAEbSAGnYg5qgPB45PXja6UH6XpRGkoSC6qEB8K7T",
  "key26": "2hSToFnuiJbMBiJhG5i6mCy7eEnpYhFHJnvi5AKgfp5vHQp2raWvfg3Xdxtjm25wp3aKexV69i9an1Y8oeBKjVRY",
  "key27": "3C4XUTGwk8k3ybkKV9oE5sNnhLBCaK31E3sQq5tuHD2BBLGhXD5XCBGhR1zeKy316QT9NYFKExMP5J4TovqpuvPT",
  "key28": "5DSZHmPWk743CigMvnLTztFGAqbAw2vK69Rs9fbSAN3QZRvWG4MUdNGXkWCozxrTLXMXKo6Lj2XCKXYJByPFbCvz"
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
