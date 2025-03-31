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
    "3dBNCNJ9frHaPdCmrDfLA3cDgfgcxTKRCrPAbGZcciLvrRXqWWbw3WBYEcZ8DEgdDQpE3KP4HXp8QqmQgi5oXV12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ypCXXpUU8na8fGeRqkXD5XA1zBAKZnpLFt5LvLQsCeefKkSh1zS3Hyy7XJGes4agE4JCw4oPiRn9EsWPwt4eDA9",
  "key1": "5CxdxuxMZLqUrdhLaLbXCuxjhBQ3T1qJipTKh5gMnAZoc29wVwpeP7iVSzj1F7vRRocQdbqSU5isJnrzsz3KaD4c",
  "key2": "5i7ibaDwhXYgMq5NTEFcvfMn6SfnfZeA8MVAJDw8vw4J541s4u44tiuNkNAnDHkuNnrp49X5LhKLCy6wDD92tQXL",
  "key3": "uzVodjbcAjndiCZ1VD9fRDXmCQo3zyiCpRL3RtfxgDX3eEaosDrMqG9zditsRpAo9tg1SzKQGTtQ9XVr9MQwRSV",
  "key4": "2FbyFvpdDSDhDzLe1yiuUwC98f5ZDLusFhNsGVYkAN36d3EVexT1bE6Bh9edENYXyZxFsHvYhmKaNC7kvqVyUPxN",
  "key5": "5p6BqvLScqoxC5WcV3BHWg9gGyRyPApGUMzWMDAoc7mcF5bcf3879GPkiNiWHQL3MZB7ukL3tVZC8jaDYc5UpTrW",
  "key6": "4YhAbhTZSBSjQ6LwfSUTJjY8NDZTGeWxjMykMatSSsubU9adMBBRc8MKqTpC7iHnPZtQg1nKi5nXxHnWpFYch8Kw",
  "key7": "4SEbGLhqS4wqHjcpyfV3mwh2KXEb6XoZDipKkfD5aeA5yEBhw9L3z1RRP2tayZukzk6GTo9sopDUAmeKxysjA4kC",
  "key8": "5f9WMqKD3nZ4mDGGey1QGMk6aiZLj2YKLdDiDXGArmUTZog737pLFMajDJgWtyvZ1QTVxZJzzP8X9hQhJYZsc7bE",
  "key9": "4Az32UpsyVRMmrvFNmRCTWtSecpMwZyytriCkHr5bMfHbbeEPs7kU25PCKF9KTVw1465CFezoa5yoMVTorPkEMaB",
  "key10": "4fu4orXUbkg3Rvjdqe4deGDTDnJ2nPCDwS6sHGGswfqyaZPoPURZApJfN2rgdbo6Ywiqdrjobo7NdWbtwS2QZgdP",
  "key11": "5GcEZ8btsyJ6y5sUyD6k1K5xX9cxvMrC1LFiYH6PFUoya9FWePCEFuQYCLELVUbngQgSPRhkrsXCp3TxYqrqLStD",
  "key12": "4CeV8fWFj6oxSHL9cJ8UMz8VqLq6umG9mDp7LmEZHXuy5SjnGKJDG1wzh2Tx33PHNvgSvm1mRMNDuDrKF5eTgH8N",
  "key13": "2HzorVaGHYRYMbNedFA97FF4Sp75mBgvYNAZ82tTCYtQffGk8nYzJjLys4J8wQZiRBdxYNDtE2EMMETCq5ZbfyAk",
  "key14": "61okk13zvrCgtvu3AsUkVjNsRTn2T2iVzDwtoZXUoKWHM8iCYUnpCHxKQf8jZAnW8wEqnafDTf6Eiisrfy1YsENB",
  "key15": "4pnC6iAYw7gfAea8Dc1iG5YpTQjovNK4bfPsA2SgFfitbXHQRms48m45bnZtK4UjVyVpiJqUo8H2Y2exWmudSYjs",
  "key16": "5rGmxpCrzdsiMNxqXBhNHFV11XCcUU6CCSgHSdRk5N8151FUqDcAxi8csegLTfrmNi5WSV6rzLE4qhNUeUhkMFGC",
  "key17": "3SBtLGTK3TeFfzCF968cUNccJUNmP35Wv2DWwogFJgNHMtKKrHiTj53E5SwfTvZcFM5UvUeMRyRuCSH6Kphsgir",
  "key18": "3V5FxjHjXV4jDSr229NoZY2Rdk69xNecwGWgdTBdkZAnapgFT63HRw5tf143UWn9aU7RYsPB8ccngmYkb2Hd8xPr",
  "key19": "5Wuwaa7kkrEVyhfAxzaNJCbHGPEnQ5CNrHqi8FY9DmFLbHGEANhhAUnE5hCycSXFeD61JRRtjEJjqB9utogxNuHj",
  "key20": "3uX3pi4d6xEoKL5JMVMtEqnk9NcN6zKaBx3mCGU84ztiAMmbj2KQyRJ2Yk1zqXssjaJ3uwSr3vQ63YbxnMUnWRDw",
  "key21": "5kXsFjjCz6efDJZWL79DgBFUSAVoWmm5xbYdYgpk7vvXeazzLVMyyHmrBt5fUHKkBLHLYyLmtyQDpHkwVfSk1wV3",
  "key22": "L32D82Q2HqQRjY3E39YnL5EYQMxjm3oSDkBc9LrP3vR1LLCcquvAsSiPjmfm67uUw3zJKPJuQtaUnZe2CCJjXom",
  "key23": "4TexDPCjFpNpfunhp21sCUqRFieiS21wswA5sdBWU977gMdXFgJCEFvuefqF9qSYzsPngmUZ2GhULcJjLoAvFCiT",
  "key24": "ubxJXdb8xju2vfHc8MKBvth8JJd8GksGEt9kC77nXWysxqLMR6aKqbLuzvgYwkpP8zdcie151uw3LeAuq2bNfC4",
  "key25": "2948dDiwVeyBGeVKerZ1yb35E7ETpqRKyKG7NL6F4zKcNAu28d5BykmJw6xJpeFwuDHJRkgffCVq18KqqBHWU8hx",
  "key26": "5jSxCZfXzwY7kW3obE6NYMLWP8NTiWHwCVeMe5CgtJmCxeRQCveNZohuWnBrotirLvmki1YzsFwguhVfxDQXdog9",
  "key27": "3ka7QSsUhSnp6N5oyDCx4YLDDQ6FSQtUsNe3xnukvdraPGCs1GuYBhWiUR8KDgMw5g86zh5uXGSj5WeXQqsrVieu",
  "key28": "5Y8yGd5n3tFuiUXWQHHKpjKtSN6DhsmRSbvysmMKjck45NDWVSuLxaZZPLZ9QE7aRe7b8JgTuTB1CUL43Nnpwsnv"
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
