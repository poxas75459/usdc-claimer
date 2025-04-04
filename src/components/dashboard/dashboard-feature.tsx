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
    "3CxbocnRNDLZuM8dX1rHVhkgUe9oR82ZCQS7jWWm8HGHbCKfUmexPFUKUbfMpXmT6J8mwGtAMRjCrN4w5CmXezNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dcFdwr4RWLn23daZimimUqmXKCV2U41sX8o4GeiDXW14SfmtBQJGBBMnEwffN26u6TjXJzB2sshvvC276QivHah",
  "key1": "2F58rnKoLhFnoXmdZh7kGwkcp3npiYwCEokqw25czz9ZTg9hxauifKkfkq5rh7XVqC3eYc6N5PSLA1wAmgnMWRmr",
  "key2": "4SjnXD3vfgiLusXbzKCSmKHiqkJ6mVL7p9y75DJErHRVgL8A1UzbN2hWLjN4NYf1ECvRGohcK9pvReMCBZ5YutWy",
  "key3": "4z1894FH3QLqwUKfEayse7ksAtsw7N9G7cy8zhKNDoKdy8dzXLRjguNqE7yhfQjwLozSndN25XgfRWnesERC9P6y",
  "key4": "4hCD5TTxpZiGxVuRRkZuX2LECYSvVWXhH4oCoSD6FARBbrUNGNwAUTb5bUWMhUTBxyDNnzudkEEKMabjkmDv2PPP",
  "key5": "23KwSAmpiwpaiD8gf9xCrVMoozQtk4qUqtdoMVtKcij45zKSvoT1wgPigxmdhdaPczHJ36aC9qiYUQWnvruL8SRc",
  "key6": "47ZJMQAWpfGJWn2xJuXTM5azepTibGXXjGPjTVnK5J6YxeksrYyW89jwxpbcREbC1V7gwfVts6bsdNyGwD2hKqdx",
  "key7": "4iJnz3zJyHWZJv9qRqFkWVKsgTGiCiQRwuRGQVKnvSaW7iMAPpAaepe1rUzXrqvrmz19DdWodqh2oBcvxsjYz9Rx",
  "key8": "3Agb5QtKNUrcDSoZd7128A6b2Y6vSbA43qaPDS4WyFpmFDbuUxEYxAYJwK9U9vXXJcDnXnNVK19a6gtn8TzqGegS",
  "key9": "3kDwLaNCVzWKNLEohej5KEEoQ7gZ5bixPvUo6zkbZJ26FfNifkCADx3oqo4KXG7AL6PUwK1gggxFJ6mb3yasc7Nk",
  "key10": "2VEK6QXPos7UvqNJTMr9YBc1ZgJtHN1gu3qsg7NfDZGk54HeeEadjdyEZR5qtsjryQLg9D2ukAYb2Sjjx3d97p69",
  "key11": "3nbYKtWDip8qtVm8NWkkhDfpRvxz49aCwNweVCXfNXgG1hwHSJpXM5Fzmq3Yvek7C9cK4Lfxy3ZxEDiBVdjzhja2",
  "key12": "a3XSnvbpqXYDabKYWpEdB1nEzYdvJaaV4x9nRJSn913aSjSriZaLFRp9mquyyZVHZrDrEpPAYLgCnbSamd9iSH8",
  "key13": "45y2cASfe77QrCd12BssKyWwr3q4pEATVb3dqb6KXkJZvSeXFQG6zhtQcJUgpxjRqxZ4agqc6aGLvAjmoetUBjSD",
  "key14": "4wNRJxZGgomE9bZ4ckY4FxaUvjCWZvbwyWm7Xk6bGWo7FZ1awzKWkAVhx4KYLYM3WbD71kVaUmRAn7KqB7DoMiQM",
  "key15": "3V7BGw49saQ23fXino25eww7RiR3e9MjP2iruafhbRsb36cxptHdAX6cGDnPMouFTEGhQ7CM8C2Zb5MxHeJqNXiJ",
  "key16": "4GeSTPZm7UzShWTfEwrmpuUBMWtBo1SBVhnTzRd5db8m6qfvd9nDLBmnKnH1KEB2sjadNJjX8zv3ZZ9c9V2KWswF",
  "key17": "2foerrpqYs6xs28nGsdZMsguvqf91Uma5NPKNy8eT6hSxdDxi9SNa9N4aRr7RC7J3XmEnh5svUwPQD7vXAgSba3o",
  "key18": "jeo5EuDLDzDuAJLvMiZ6eHrZfkJ83onAzeK1YC2rDXzpRNyLMDFBcY2duSBJsQ3z6bE4j1GzsdNN7YqWSkufufx",
  "key19": "3Pgb6FZ3GXj462n1F17KEDnwqFktJGzta88ipsnmzbzNKQRGBTPVuaKbykeKJHuu5TDrHdKvYDqXgpbtQAtHY4Ke",
  "key20": "eWVJsFeTwGsjT6yGQ34rc9SCtpBuWQ56o1zb9rJfHXDTerHTfhPPmrfemkyo2aiTnqofSLf448AM68G457sRcj6",
  "key21": "4cYcTo4x1eXEMsDLhMLejhPJQAVbXfXuykWgVdwXLZW2aqrwSs6MaF3JxRCtTLA4SiRBeQLdRmaFh6mGU6zV5NUU",
  "key22": "sEmDs97hN1NgHWnz3GcisRQSPxe9J8P2YLWk8R3bJHHUG62SChgorBNg5hzEt7PcUJ6FG9NzERJ5CMPoW3rAQs2",
  "key23": "2KGKAakHHNP9xrp5X9awBinu2j6AUNEcwBU2AUK3BMmjhjj2Tbpp48NQwdw1FC3bmZaMLMidfTkoxjn35nc4ryua",
  "key24": "4J4Ty9aUgPCvggVTAsFMzVcbpk8M54MjiLS6uW7Jvp4eBx8oRjKSTvJdigLzgYq118vVhG14QF6AfBiN7MaiuzjR",
  "key25": "2rGjA7TMe2oCaEdVytwD3ruo8fALGNGAgaPpj2VNyCVZKyeb6kCsUNz8H2TAQVRvRMegvGKUPjDZcYKwGzCwKCRK",
  "key26": "59m7ZEZ3r3Nxcn8Q3HFZEYwkA57WZhjhFbuBtKnJWxNY1NY9eUCJzwoQq6oVxaMRTu93A8pDmfeQJSFvPaEmvHSy"
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
