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
    "2MvbumXmRdt5AapJH3F8azVfuvo4LWXDe7KrLcDcdXLkkuhTMzorEXYvVFy8KZtmDbJkaNZEQZcMxGdecPJZEhSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDj6gwaCvF7fCKWDoimfZQCFptEZk8hxxC3pGB4RWJSRTbaybN9XP7aiVk9rMgwJdX6RSqUv7nbttyR3iNJSQZa",
  "key1": "3YVwumZ2cLau5xGQrzk4ZXvzRz232sAfhY1X2e1ry89CAdkju4zUYYFSsMkMs7HmDW8Ag43hFqaiidLcwLEV5MN4",
  "key2": "3waMb2K19dLjpmo9J2syGUV5hX6bQ7TRKhpoNC6LGLJJgcVEVB3Hu5LmiPANktAnUSq9ZyXLFKJKLCK1UmDzuWJv",
  "key3": "mKTLaGC3deGJbWrXBNw1PmjUzGXFKo8LiHZASNasgNv66CTAhs5xDegBJYCSuVjnSoWr6nRyEytWSTkBTTHo4ay",
  "key4": "3qRbTRotJEopmjaFKz9mDauHUxdUfdQyiiSQ8cUHihJcZV4tMcoRn6n1pUabJbvS41qYPVpZjpuzffSG8sH17AW8",
  "key5": "2vzAeiDQJPgSMW4VreabCotkGuViP58eed26ET3ps3d88zMnkUVFhcJZ82GyBeFUBLKNscQkDt1VfusNDAzjfiRN",
  "key6": "5UiNcB22YrGfTvtmqtBzJR494ukqmdPw8qK1ocFA19YbCU1QUj4tdfrCXrhjD6HEGr7PLVDNoNmExy1kbxuUQzDa",
  "key7": "2sWVqvzE5UNucWWrvzfuUF7LwZHZ2PVEErDZZCxZZi8o8YxPiWehKN6yHMzgwcyKkkse37Qr6TPmpyNZFM3jY7G1",
  "key8": "3Wazx37DN4f1ZmD6EFyHFwJ8hRTXmuSeLwSMAmP2pph6rMZ3Pzg6Zd6Q6kpMhHysnLHoq14fJajhaCmNufgfEB7L",
  "key9": "4r8NTLtmqF6TJa3Rz5E4yg2JRp9V65iPQEWEtPQbH5X1HXJE5ztGhccx4jkxsib2YDx9aEwVgw54qo98NarCy6V6",
  "key10": "5SakNzPWhp5nKs1m9N9PogpkWsURVuPgZjqw5pwEifde2P9v62piqbZ8VD5zdYHBRQEMPuaF8WYiYU81tF9WPCn4",
  "key11": "3e2oKKhoufgrVQKiu9VfwULWpvysMzHNRg8QcTaQQcx5NLvT7ZuR6i4hcaYM5xQ4kF58BbZCJLFcpQmAzgLP6uET",
  "key12": "5A6QN69XLxG9eN9ehe3qf58N3TvdfoKP7ARK1dbDQ2MHF5UmdXqTGSPfZLULpgrqS6EvwyUuNs6jipeJ3Kgrg2PR",
  "key13": "3mVMaKVrmHCz6K7ePaLuBFuoxy6ZHpWnDA2ZDf3PFsFEiF3nU6rLhFr5MfKzS9xHnzvmBPvFuaH6DXn9pikGPfL6",
  "key14": "557kvAQazSpoRk3SWZEwFsZ6Lrv3rpDJ553iQ7ttb3UniPp13sNhdhC7rcSdwxw5NEdqh1QsayCkVSoNfGX3n9ZS",
  "key15": "3naVZFaV9vnFc52y5jCjQPnwPRbpXendGmayh6zQC5XoR9utRrQFtm8BGKP1tnWBXE7PC3s6LKfdZwmYuYSZQrRw",
  "key16": "4q8vR8n81hjx39sBuf6NszUAHQ1kK5jrcF3YFLkS2vtSJZYNgBQHpw1QYLc3iWoHx2tsVPpABe8dLqc4JQK6eXbU",
  "key17": "2JeP1FmnpybfayCTApdZit85EjJPLVrLz7fBWMqdG63kRjPDTu1HHNEjQ8AnsNun3ZLmXbnbtSpce7aj7JtooQnX",
  "key18": "5XWNNTLcn6c2ZkWodMgYN1YnoyCJCMWyqrQqZFRcebyvtYT4VDVtDohzP1b7QCmwo7EHDj8qizYVavgKufmKCDYV",
  "key19": "5K4UvZXo48uGRmjV48PfVQSXxSMqeWRS9wjP1A38TX1ASPtT4XcTDmuqDSeiE7BAvA1nTHWsjdd1Rm9U5KE11hgy",
  "key20": "2FWaD3YyG747NybLX1VWm8w6QkSp3ifJ6Zjysf7tTDDiVaozGhXiUqeQVzowT8Je4a9AboPe8QPvUKhsnxSN4xhH",
  "key21": "3cw6ZcWitFJ4YysHiVDEabp1X7GWuVaiCRn7oyLSaPM5AHKy2DEeB2fdwfWDQt2KsagzaPLuo6SYx26YiJSrLgGA",
  "key22": "e1Y2tj2qjwHdTfSCF5X1BBTPWqrpLu2P7d1Y4bdT1ArHs6RDw75P9HHjQA6c1nW7R1T1Kdv7soAXpJ15dx3dMz9",
  "key23": "SotPyAKRmF4BLcQakce5ifYd592oJMqpgYbLNTNTQC6kVw7zkThpRpknMVikw7nBFU9KKALUqJCBj4Y8XuRkCGm",
  "key24": "5WxyvdwP46T9N4Z6qfciPMFTbsd6RWK9ah7iLLpH8dSuBzznSFbQY689rV5Pv4Zkpbn7L5ojjpkdW7RRb47hNNFE"
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
