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
    "9MqbzokhpzinpfecrpEGn65KWWoswaVf6f6rNqaKhUqFubL4exn9XGuHF127KbxEJFYuHxUzFV4vRJiHohDSG85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b6aRAL6e2btrmi7L8YaGvsMfLH36PGbhqV7NaD2ZgrQMQEmoL18FLBRWoRP7GyjZCu9gTjCrmTTL7F31gwGV87o",
  "key1": "Xe6gVeKW6nAwLGcmL4ZA9YXFhNJunbGsWKhpXKS6AS4AjUaFWM2C8WPrMPes3MqjgfnidALuSfiGLHQ8QwAzUR8",
  "key2": "3jLDRfVXCRxJdUiELvFDtVUupvTmqk6GcMLAhByRgZF2NCMcRj55jU3MNTEfe6N8KYDws6nNP5zfyM4CZpsc6HBK",
  "key3": "4Z6VZriTAmVDcsKfmo4jFBWRTDKx9wbAo4AWHLZQ3HvqcQafRGF2VL2aH38WpxZsTB5wqpfnMpaRRrCR6NMsWQsb",
  "key4": "4xYdQ3gtmVEpx4XS2sZdGjAR9FYHZ3BNztGWbM3T6gzaMWmrfM8KnZVSXiiLHBiv3nisLYm6RLUejNi4VyDnb7G5",
  "key5": "24PQfXTDdL2AC5hbEPDgFUCSCNPzHsjqTma5WJJSV7qc78uZnrtttgwU7xobinjo2geirseFU9dSFfGWBiMWQ9Mu",
  "key6": "4rK7DhELGGPowkGS5Sv7X2UCHdYeRSCXk8iwwvWMLEF8nWFoJZcQQehKc9ALZhwv2n3qQWBynyZFSzsfHwEQRETx",
  "key7": "w9ziJetiQuUugohQQ6dy3bkH4Z7VzZpb6CpjbNVNEn5WZ9ZskeALH22tr6CpqkkHszEfZ8RVmFfAjrcKgyDoffj",
  "key8": "3nXDb5ReKxmW62srDCk4vnfH1BdGmWRq3dZ8JcuJrrRpQmPp4fQ9zZDwc8x2tvL2gPBThPBSfuXuvCBmnDBjsdKy",
  "key9": "246jCy82hSzBnEFutwvL2K3FdcgoJHVduCrsue2N6xon7ZHnRSqhrZcjHzQ5oXojCFiTqFK5ZR77zP7ijdUM57v4",
  "key10": "2bb2Yc47UsJdut77pkC9UNicjjdqJfi9TLsNV18bgKqzDC7AVuia5rLXMCRnKoqSnJS3fXo1UH1fvMJ28KbwZ2j",
  "key11": "5rRvwJkL13KjiMBXK7N9PHXwUGG2Efp4TG2m1NndmNtLYbNn3pTUvWy99827pBtXmyMkJyYaGUNqzVcj3fUG2M3Z",
  "key12": "4zwbaB5soNTpBD4mzzk5rA2gvgoTSXE3wDWmYznPbUHgHr16eacHVfC5eUe2dXMsJ1mQYGoGxwSepiGspZP93jjA",
  "key13": "54fqFtdbHxqEJWWzCUfPrE7HrRRW9zXgGqK8B6HgrnUyaFwj4haHoKx6u2YaGXGnfE7DvvVMfwwENuA3faDzgruc",
  "key14": "5K1wgBxjLBvRTZcKqtNQiAo9vtEaStfarXhv3u9irAs1Z7uVQBaJKs79e5XwfU6Suy668mAdc4i7UcbSgjZwffGk",
  "key15": "4T3TeVzs12u9F37ryaieWXKLn9RMYMaCqwcXsc9LzYmbALATnYwbeSZR2fGp9JaqTrTM4VE4WpQviNhnRJ1m82nY",
  "key16": "5ARdvwJa5wWM75jChib8YqypiwWwubjTPKVB8hcp53wLcjsmc7f1FasB3QakwVZxHQvn7hQPKQXBW9LdtiLDi45k",
  "key17": "51NHtdpiC1KCA6bCTZzpN9h3XkagckDqtxzhYvS6pqQgchLqohp3wsyJHsH821Veyf14XPdT5iF2S1JuFQirigK4",
  "key18": "5WwoKemm4UBNsXxAGuZs8ERzmwg3p3D3PLVbpGvpTPJnR17tkuXueXUg1PUWDS3vGJi25iRpXNvgaKB7bVzewCXc",
  "key19": "3EvoJXC3Z5YqrWbw3K67FwSjqYWetvtDA6b5NdNFpJhkaa8meS2SEWFP4mmg4W4ywnyiWoCAH33MZXuPucBrnQpv",
  "key20": "4PBtHnwbCsD8D8QyRPCzsbzdmythw81KFEYxrLVdpVqsvthYmVoSMXC99Ua3JzV9nJxed5iqiPZ2Rj1h51XPqfvn",
  "key21": "2npS8B7ZirmQbtXmQBvQpvgEy94dmGv4PSsc5ohbKnhEV65HhkcDEqK43nQwfZ9RVLPXxJoBJQxegsh2tt6RNKqd",
  "key22": "4atRRXCApZ2t2MHYCjnjMCBvynabP2XckDjLziFNXS1k8NRhTea6mzwii2Hd9bE9BUGmNDP2qsRWwCYBkL5xr7SP",
  "key23": "5f77P6EPLy1eu65yoe46YtAVqovNBMrDfz29jjqS9wcv4y6baSdgH758wSsvpkePLvGKTGrKSHRFTneAV2MY8BXM",
  "key24": "4DncfkpRmLuNcDBReuzwJKo3HPQUDYkEMipAxWYgzQNctYuvRX8F4aUHxDwHsptnJ7XjUWXPSjjG8nLB9NDN75SH",
  "key25": "eRPdDMNnKb6gzwcHdYiofkrPfSgjCMJeLbooXBx3SP8LR4KkZFYzCs6rLiDAjvBXYPmUtNxtPrZ2gPMTpehGEGM",
  "key26": "4qh8KgHigKoLtA4cEB4BWeup77FV7RbQctHP65gbZNmiZyhVyZ9W9aJk1oUS2D2w8ErcoagkHh5S1q37fuq9M2tu",
  "key27": "3FkPCDRe8XpaDxgQoH4bgGKejNx2Yeve9ANAvWjakLWF7xeSDYwQHu4ZqJyNrFBxd6FoM4E4fTiUzXcu2SEaZfRo",
  "key28": "53dmDNQyhLeAT2j67dksg2GrszthT9XcLBXNvk7qZA4iuKwnCNSNWpbDxYAhJbKhW9MQLPyebmbbUWrpBb99XgSy",
  "key29": "547xmGhLd6cX9xxBbPZSvzp6gERZbS29LT4E6MtbSBf9oFitpCQf7dcJ8cyCE5pnWo5CmUMhFb9bruJP1pegKJVP",
  "key30": "4tCLsfFCVTAvA2tDUwndHGUhRn4JM4tUqg5mgwuo5pPzrAAgpexcgqh5nQJyTKzvowx5jtx9WC8vXz8XQ6pj2Qxy",
  "key31": "2X9hGi7AP5XzknXzyJwBdoJxE4Aa8Z3bs6nBcU1HciRNn9de5jfvds7WeLJCfVuh92nnKSyBEahxhJcsDALAbVv5",
  "key32": "3eNCpA7PKhycvYoBKd65wgR1jmJRvJJ55werHcFaSbcjnjsgH5puSeSLdJpobbgy2961gq87EPbzfetcv6PYc72K",
  "key33": "5bTt1UdsimL5mo9tSdHCuYosFjKKPCnwaz4vN6xZmoHLc6R9yqBpStG12uQJZJzQusUdBZ2CgaoS6TNTK2w5XACS",
  "key34": "4WFeZJfBrzzNj6G6FrfeW7sj1ruSGWSppeJUmDUA57Y287rEJrVbaKdi1hbwQf7cFGk4hB8kSZ8hznr3mbHm6Aoe",
  "key35": "2cuWYV4FEVoCAcosGmuSx6UCmrrjzqxxoDPPu9qUQnNLq6UNgD6wp5VxXV5G7C3HUD9cehofZjwREkuYxW5waKsY",
  "key36": "48WqEPSUpPF6hHiQj3HKj7UHZtJPAUjwQ2yTmQsMUYYBjbCZhyBbzLxrWnm8DFNwiEYwPSik5e3wpnMXMh9yHrSz"
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
