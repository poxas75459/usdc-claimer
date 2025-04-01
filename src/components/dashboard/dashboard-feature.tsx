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
    "3M2UQRskd3KX1r1bsdyES6eb8w4UqvueqNp5hsf8hU15ZgXEAHh9jDQpA34oYJeMskBPVSgdf8Jk8cywXDCt7UV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkvfYUM4AjGkugkrWtVzUjBZ2KCchEMasStMPEW59JhHP1DekDagw52RP8kwfLJ1qUxjhTVdxANqk9k3N4mLR7B",
  "key1": "4u92JH6w2uJusbBizYPL26ed9tMTi5rrKHjt7tEfayn4QTjxXmXiimkmEki3RuD1JzHWB7M72Bx9g2xypbMPJMd8",
  "key2": "3EZ6V5FmVbjELfF96JWDLhD2czwd21JBUg79tTxCWhVpzDYUKdmuAazfkqjRoA228xzXSafHXy3x2s5fhBzPnuUR",
  "key3": "5i1BLBW6YVSRLdQ6ZVdFCz68uaRNo8ULozHFtQP1ukstVo5bXKZvcfe517yoqqgsqVn643BPBrL4sEpUVKFas4Rc",
  "key4": "65a6fqJjimaA3taxyFoo2CzZK8a8t6vpjm9MAyQWVyRKdoEYAVwWnpV9SxjXrwvYbfPnHNtL8hEw3HZn1cy8mpjo",
  "key5": "4G8ow8dtSdpPpTd8irynVMqLBaFWLZ2HGezYsGc8qx5Y1FQPTfwVCReDNzuiR36fnaJRWadD4fPzHxXYd6Pa4QzE",
  "key6": "ieJMvFP7aeYEFiH721KCet4yFtcdKXGhCXhktFk9Uv8Hz6EYfm6RMge6VSAQire2CAf8CZiXmTDQZCCHtBje8YA",
  "key7": "8cpDzXJg6dqvGjwQFWeiCTqC5aECnKC36tbXWpj9VsLVoywf65cvnxu3JPcLsDc1ocGypmC3fpHavfU7XkWMoEo",
  "key8": "WSr5qn7TdthFSknCn9XATZuzTRk1Wy6mGfmoxZUXY2SpYFB8aNpoMd5Wv8u5hj4fDMNGCLmwLSeWvMEtkpoNSM2",
  "key9": "4oXUgUSuLnSHHx2Bw3PNVCduRT8tvhig1R557pzvLjNuGZo6QXACBgfigESrFDURPtUrnmhxAWKin7J3pRT2iH9b",
  "key10": "2g4rUTTCEabXtH12ZyjqRd9rQ5LKeyBtyneRkZyS4u5MvfvBNAQGehWqtVZxv29YY6GYA9oTkQVhQ6gjQPRUwbbS",
  "key11": "KBffTMuX1AQuDB6sdKbzAPCK2zQwTTJhZGgJrCWa6hsYkK8wLLVp2KZwRi8fUhNoM9AaMtKSkp1vac7Qimh14LF",
  "key12": "bFmkkbKkgbWthYbEVwrWShYSaqarD73FtxffDnZmFinCBe9ybwbSpi45zGamVRwVXuvdcDBwv5zTJdx7fgfSp3d",
  "key13": "4XT2XKMF7u5T2UB1EAZ9xvLgML7EJddd4H1iMxmxUBkyy9SboM2L3astdKFSTfT7vaWdfi6PponxYigMaTk3rUnD",
  "key14": "65UoXhAPczc4wJvVFdxNXrt7CrRq2CTYkPjxG9XqJ3SQ2QkwEks59Pg3CnXD8VWaxNU3VG7uUk4Q9H7737zLMKqF",
  "key15": "DbAUWodAmhBknZiNC9gqvYVaFt8QUf8eqp2uncpCZcYgeMQ7VkmPV6mhpJX7YjPrukdQhkLsa958MsPWkrmHziW",
  "key16": "5biBfgBAGDWJMYTeR5enTjwXfXbWYG9msedKS2HCHF6vXjJB3CPRDWoSkWx2m3kgtjr2pFK94NwKQp6Yf56FA9bY",
  "key17": "3bHb3XkUbBnm6kRPEtsmbpJz3Ucpupu8S4P2vtDSvs4AQYD6zo1cAtW5emjbB5oYDoqg9HXcafr15dxorzFd1Avb",
  "key18": "5L7vrT68ov6BipXZGEn1RtNrenCNq8wNDoy8WsaPZY4sJiSw7TRi6gLFsUcZFvZzqyVQHS776GmbG371VfUAGZX5",
  "key19": "5mMr4mASA87DmVCCF95wTfPp589B7bftK33HnD1Wt2zQmXcpY8e59ZCAt7Z53vyKRvj6bcMV9N2V4mTk1xS2bc7o",
  "key20": "4buwwgMs2k455x2fHLkamH5tYaGhYTKePFDyn5i2LoQuTxoq148XGZ7qYCTY4N5yiXNxtdz9wQtPZjjgK7mkWbJh",
  "key21": "2vmyBHUzD47vwbAv8dnFyE9B5bvaWcuzZAfyLnyyYApvdVmoHVQdk8CuP5iN6yi3fmntyTo9vEmDfnBCkFg4DHcD",
  "key22": "32pFeAaYF6WrBw95EYGnkBBJajwQ2EJAUkvGPmXQ62LqtzNCMQjwsbZ4GHmfQBYr87TJBSci4hYJsKt33EbpMHSN",
  "key23": "5rUrUXQ5wc6xmVZrffm4hqzkftVSJ1RELzPg9d5aqm5s3zoRHfReuz1RTf5NEYY6dwUQqN7T8H3qurDTjPni3SFx",
  "key24": "TvuwrRc7MxRgAnJRGHg25NCk5BUJwGPQR7XR3J97iM352ZmzbzV2Darymq1aJfKDSzxPuXZtwHczaVQxjiXgLia",
  "key25": "3zLYkPesSsd4YczeE5RemLrwhsyLHE9B8ujADUhnn4tgKpHXsAXyxZGDUcppajzvJTgR7mQvV8ZZBP6GUirYdDN4",
  "key26": "EZXSSJa9WGuQB6ZLaktTy2nUXuUHYEYZZ27nciEXRMJD7MyM9WGRYmY6xiy2m4zR98fNWqT6rBkV2ghYWhQc449",
  "key27": "5SG6Lnu4vdFU9NHr1Xp54Hwbks2zHzPrnCJTWtwaMm5joqQ5LFSsjGktXar7ikoS9Xwyk1mbjpj1yT7QmmaWXSre",
  "key28": "4wmHffw32WTPHHewuBCLhJL71RZu7g3QeMCKZmvdkj6L31SK6GF6wDiXb7n73qgzXB3Qjr52hDhTvq4AdntNok18",
  "key29": "2eVLSpt1baJzG8fbdwmiTrQ5grLgShhJfu2rN2D2tE17YVsuBW2CPmmdqYAfeau8VoBMd85zyeYpJR2AkoXPKpB7"
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
