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
    "5SvFr7RG2XQFYCkLxREAHczLoygDRV9c8T22unqFoTpREEwuUHwLwNrGqbBKz7UpWduR6GcR9pEDAiWDY6g3pc3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKok8NdMStkZY1HujT98mdzKsjs2jjUqimkGw3KRvCbP2gBNojGLD25G1A23Z7NmVD2tL9Pqbpq5NifWhrrL1VX",
  "key1": "mKwFiUaFfG7vrnzhJMAaKms1bLTtGUhgr1bttQdEAzfbiBqq3ybzykfarKqnH6y1bSysGCuPMEt24CsF9cCrs7V",
  "key2": "3NZxaxeqcuCGAXo3T26wqyS3ohpNpkRuqYjGsqdmm7H7Ni9DMSCfo3CNjBxUkHnvM7WgXqCSzhQ8hFzCRw9aKgqi",
  "key3": "1BpDu5EPkfwQSFRwrQQcb3dEZ5DY3fr9ahNCriVHVeW8p8gV8LNtLG78eHjB4f9kfy48MWN56twKaz93ZQCoFYb",
  "key4": "22g5J65dJHmtTKS5BBGp9VjZFcmADNbB2ZN6YtRZCwzfFQ81RJexMHaFkug65sbe5LeoiTZxEavcCMu44DodEKnU",
  "key5": "5fR24fXrHNThWqGdKUVjGRn8inkqfh8yKGsa38KsBShdwtJH5BaCB5XjSZM5Z3niSBebu5jVz7omDtVVcBWXG3aX",
  "key6": "4AETzRiBEK8qwwYEWSsjUexCv9JuxKjxQZtrT7GrY8hRYAyikJqjPvMF4T6Pk9vW8hsK78SbCtQ9pVrFpn9E4aa9",
  "key7": "beY64ZbVGTAu1LiQv8475zVUbcUzvo8uehwGqsipQodnmm8SZ2YXBYqGrcicawuBzYowjXo6vt8QnJdnukUDgHX",
  "key8": "3aoDhJrkkyrQzSoFa2nY662ycc7qPdLitYZTHpTeHzART2qcFMoU9VqaWZFpJe2ryeuod6LFASmjPMnkzmUZhypt",
  "key9": "V34pFa6HbCkhzKFbR6bbybkbJ4ERpcVZkGnBCLTtXsuU3xMGZN6zdYoonsxtojGWMKTsvnHRepqQrE3AegLuggJ",
  "key10": "5traQBotDubdctvwAVkLd8TK1n6Lgoi922C5G1GQjAfjfffFfp8iP5tTu4tgxD9uD82ViYvsLYNWmK2SE8MgBLeY",
  "key11": "2qmw3oCaitDvqtfG5QUJpi26oKHLtWzj5i7FTsxYLveWXFFnHbuuMcNy4nyMZ8kt6E7VqDDnZfksv9zT25jMZ6Db",
  "key12": "4CzmcUiyF3bymV3C1jaeXXaqZkQqEkFAq5Bod6i7uwqU8LBP6qjTg1TwhXJ2yXgpSJTezyLgr1MLfpG3n2DtvUdJ",
  "key13": "36Ggqd4MdATfLUqpwPL5W6Sqw1ewfiWbz2jWUA2ZCHy8YHp2PtuxMN62vVTvs5TqrorjmYGJZc4PKWpC5rPsKmZq",
  "key14": "66QzyxQhh8Axj9eaT8z9Ds3rHWJvGxGrsm3QvEKmu9WnzJUK8xa4NEgrauqvAMLiZ6vCpHXGwDBaDtzm9JGjoFYP",
  "key15": "2XzAN2HMWweNA6U6rtLenM5dAVhaujgwzPgrqoZLutZQ7UCK2FCKuc2uGpJCP1onPomLeSJnacLsmsAeBqJSRNs6",
  "key16": "5dQYFoEMLJRJL2W1rx7PVgBQFSERe7B82mtCQpWf7VKvWXBKvViCGySD5qVCffKb2cbCuD7aP2Vk7HJ7jkR7qnX8",
  "key17": "3vkYAAGEJKhryahtfwMfxnLRctsudNrcMcUeD39t3Ctp7aFwVMqW2eabTBrjJ8KmySTZ34hjzFdfubfBbZKhviJs",
  "key18": "2zeXJkjeooZPMDscs5D7GFY1Gg1Lopp1qncZULtBeKKvtREc85pdaDwWQXfeWEu4vcbi3g3rcXrZiPx2m42E1Kk3",
  "key19": "5rB9gDWyRVhPHjs3n8K2mPBSxv3TvfP5jdLigRHiAJToBZZFNUnAvgeCsDi78oZVUPpSTK8QmjLEgYtsN7ndf7tT",
  "key20": "66VGkeWQzKmWdZxy6hiVjjHPaJFtrUuf5U3brnee3JF1mfQndBj3FAFTQR3Y6tRbV979rKfrFQeu3h7ck9NbttGR",
  "key21": "4vCiVYryHF4LJft7CkBpCoopAyXH3RiDkBzaLANkzZ8gSadmRkSjbnt3t7SF7Md1faLN3kvvDirwdY8w6FFk5JwQ",
  "key22": "3kTrx43Ua4TwBCcaABSePtjnPKi9RYxr1m2T734o5rKqnddb5L2BE38ySRiGJLVb65vU67VZdQZLNHTUg2usynXq",
  "key23": "2twByzgqpzXCmnCfbFV3kAigTsD4ZwQHaXCtT7TK5cJBj3xxzzAzftuEm9jig5yJmXbrY5ggUeEKAuEQZUECGP3U",
  "key24": "eW179nPTiacpSkkM2kUzc7yHjRJWLW5Ty9m6dHfyr8MdM779n4CoMG1TL5CMBBjueXHp1a2L4b6nSrLYkVxqzo8",
  "key25": "4LkRtks4r4kMZMNoErUdbdg8S9nDpSVHvWjMsjyMoLoTQ5cECdfzhwYsXuAFCNXRQRBHEUeXRjgrmFxkAUyst1sa",
  "key26": "znYEuJkpVeCQoEVgqZzLBK46FRUQdx4yiYyTWm9XWJQDDfLa67HhZZyJUMY8H7N2J36dX6Q3FYXZD8nHrXh5GZr"
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
