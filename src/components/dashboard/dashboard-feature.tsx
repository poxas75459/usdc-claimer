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
    "G3gkqXn1e8hDceuTk66RSAfRvvpneJmzXohU8t2Hvd3X3FpAzmrxCJfATuNeQePBmJQhQczL7urYn31vZgvbtmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3df83fjx3zcSmcu5fBgQPSJgNUXBb398VY8JaDkJpg5sEfPqno24RxsrJgQLFzcPupbmFJcpRCxHRkr8GU5da8wD",
  "key1": "3GKqLz9M9MkkKxUBjCaRysEa9yJGB7qoRnC1sddBwQFW9z15LZCwjsqdPA4WcXfnLhNxY8eD9hPgKaNapCmFCZ1R",
  "key2": "2oJM3A1QpZWMEPKZtiL3tE6qi4Gy9g7w177GzY1FaeCbaLBgfftXxZvW8tVGGnB31tJMG6Wj3o42qzqytdWKAJZR",
  "key3": "5Nt4Ffo9hvB6EUeJGFrQyZPWYEKYBvSxHTJznbJ96dC6vrXMw34Mse5C1jbSe9dAs6TVr7TrJgRrP9Vzr3isR8aD",
  "key4": "4RcFwYCVh46SSqSJTkfb83VRZL3LQZjnHWzwjJHita4CpP3WqyNXteA7Jo3YnG16kkqfgS6HXictPgBnv6ea9GkJ",
  "key5": "2g5v7u9maQCP68ZxRFTAha3hjSEkCTYTzrHipQJznH9ZeBFcvs45B7mMqfrN5G2k4G55XiS89NaMRv3EiKrxs1uD",
  "key6": "4LP7vberYXMwi5QHaAz7fr1R5kzhRzdSajMhTErhwoWTD5Vo2TPkbMVcEW19yqiQdcAeQd3W86L1FR6iJfrhGMCa",
  "key7": "4FgHVsuis16MuvKNDqAAa9VKREzXoPcT54M4aw9STyeEdh4JgSfxYYK1mU3DxQJY3pkBZtGGVnpCHD85aDMJbnK2",
  "key8": "4PKMVjBrFeaiNvJocu58ozsKCwetnYCvcKUz6TD7aQ5ZsmwUVbBn9bEa8jhjr2PmQZMzXancs5ESuAEifoAdhUtn",
  "key9": "5KXicnKwnkXz6Xw13xuWa2YkpmBMAMxe9oCEkxHELaGzkhPDZXncLbohxxdGEW8gaeiN9TZ66xLPyZouVqN7oTvp",
  "key10": "3hSSJXghGSx6k8227yDRbxFW47HRYdTFeS7dKfYaoscUL36h68ryEkoovhw6PkxfNzY5WVnFmyuAcgAS7MyK8mhy",
  "key11": "2EGcs9xZfqtJ5sA8eXh3bSNw2NbtYUt6WTFVLr3RBii2umvvJzN77KizSuNYb7fFas5LFpH1X6GLPUG4z3YTKdme",
  "key12": "4N1zrTuzcftbHbfVtMerkpofp6avPENTf7od1sPE6oBth857d64pfDvS8Sovig5ewcFEfEpBSXfg5qNcV7jqPSk",
  "key13": "H9nQUZ2LBCzm65GhVMoF6bdZQN3EbXEy1vGvvX2djoPsLQpoSL5hLL1L7kZknEkHGvW6rPLQx4FEHjq4JTrLNU2",
  "key14": "n7TE2pPWFBazAg3YWaUx7yWNCYqHH8up7nqDemCSBH9TweYf6f3q7VuHKWVtqdvgcQ9EoHFqV41aijzAgiCabwP",
  "key15": "2JuABjDkWtYjHLkKHe2Yik8AUczEgrswtBrKqRbz67x6uveQA1SLhqxB4zLQNEv7mBTL7cvF1h1AD3MjJPYmJvXw",
  "key16": "4FMMqgwiVadqAybpGqyg55bntXC8irLDr2E4Xz8wqFdBfssoQ96MbnH7dfeGuqjCDSCbXo1jmKE9RK82ry3eCmKT",
  "key17": "5msMkKczGk2wH8i3Gz3UWBP6gaE9YohNbQUQhVkErmN4vzsn8b3hgpUo99dV8432RUm8g2BEApGZZcxtNNLLucWA",
  "key18": "5grV7TENJ26iugBrid3PnW6g1pmzGqyPJjundZVc5fp4ZM2T1SqQW2ZiQeDWw5f3XPdZH1ibaTqkjZqPGjA44KCQ",
  "key19": "3GPYo6ujkE58mTGpqnk3P9oT6wwiKHJ8Gw59GK3nWVCamxRN5sweRDmrrMHkByAfphCvSELcTjnhcx5FEDXDvewW",
  "key20": "26gSH97DbFzx5tn4rGtWDwuiVBEtCKDVAa5qRf3qymHsLV1pGREuUihm6BpEPx1Xq4jCEKHgsxXovt9vFTHG64o1",
  "key21": "5BJfLv6CSARUnzUz4B6Qn69yQN2KZLRgQnbFsowaTWvdxKjfD4ykFPYMUag9v2unYZbsSdtNtkuW4KRKwVMS7nim",
  "key22": "5RTSAaxUKM6GpWDaJxDpq1aBXYWMLFRn5XtGvXv2DmbBTtZajwrDZr6vobKTLrmj6uVHm1tVTUZLAUJwUPTrJKss",
  "key23": "2v7x9bx6yQGGPy9YAK4VckcPzCHeLPrFBMWqgsYHQnN5T7swoBcu2nXAYDiskEeK6PACygGBZmPRtti32aKYNvB5",
  "key24": "2nepb1Un3SKknbcpknUpmy1LVTCuG6pfXLzEqBsown5aTeAkBfxRWKgARWMg9NjzzZTzKkHyJ5MhTFzd3nWzCf4y",
  "key25": "2BrVhmYZZxg8bCBG2bPktsnaRUwi7DWYFUqrHKRwGyxt6TaG8SqSre7QkrtNCTY5dvzCobJhYYpRy6MWS3UfNiEg",
  "key26": "34S9xJ5fQY77nEuK5rRpasuPFPTMnMxP2Ci1PdQfAx2hDmP3RZ3vnKUUPUVZEVetY2SrL8HaUFnSxvQvrv2iRjcs",
  "key27": "3Y5h7vzTD6CchmGSRTDH4tmS3m5si8Uchev7S1VxEgHD3oQ3wRTNuSuNu3oACmqBoo9gonAYY5EW6eBopvzMrtkS"
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
