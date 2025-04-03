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
    "2cBSm5u7L9FN5rvawF8fAihwnqcQPFT4GgZjT2XzytZSRPF3Hen3HmCmATb6ricy1efLrtPBqsmkD3UCpoDyJDA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYhovHvjYz5xwsMixV79RFemQNF4MTmJiKgHtoJwGazKRdHmYt2MpAywHsicgmCPPchbb4caCWU6Cf3vqW26w3V",
  "key1": "4NVKYJze6wfJkBMSPzzqrEq5nP7f8C9zWLa2c8C7mNdxrN2bX6UQRNjbC3Fv952HNnj72navQnu6Kg7qB2trhDMs",
  "key2": "5fcY98Fc1MTkQQqN2gU9KcjPPEzXi2Mi2Shf6J2K5z2yYuGf7gqSwzYg3dgxvAjj3ztdQ46GaEhyV7xYLfshxhgu",
  "key3": "2v3n5Zj4daRyrSdcGkmPyrdJht7TPsdhMfdYQW4GjwbRetWELa1swARSo5M1qtr6QoW8mVZ17vGg1DRym112HUMF",
  "key4": "3k6aLbpTpC7AWiU6PoFDyWcQ48ph4Nymk7BmVLb6yYTEokLSn9PPV17KQk362UuE9etudBVBVGNtFRfC1hHXNF42",
  "key5": "5zBZu9vt22ujwj1vpuwNhFydWWBRy2YTbjtukMQBYcwHHeL1FuWWXnoucrG3Ax8hSzJbjGXM7tbJLjqf9hBcDtL1",
  "key6": "5egybTtb41nFjmCsa3FnAfHfAbrbS85nXBDZAjFYV3zMLorEJrZuRMD8jP6mbjCLdWCKidnSKAGWrzukrjnsiQCy",
  "key7": "4e3C3fNgeLhmeTLBT12mXUbd86e6T2rWS3P1nwHuF9cGkuT8h5LKBZnQ7GGtvV517GpNG3TYcG2SZfFZYHVBNhCN",
  "key8": "3gjDzDVPTDSs7ywoVDyu7nc3ngY4cjN6FHgUpiQiVR5Zbk5gsevBcUidxBUi5jbZtGkD969SBe5EipgL9VXBHPF4",
  "key9": "2akY2BivHHdyF1W527bAW7JXzg7Cdi6t7ovRMGZP5Eomr9bTNY9EuSmzZs1CnrNQWBcezQBQQj5tdM6NjTvwY5Hu",
  "key10": "4hcJcXkU12nW4RsAjcNhBMCv84GeXzzKSXfLBB9SMGxSTVLa4teYWpZVf9tnfmprBzhoz3vj7xEKaCfMMps1y9Yy",
  "key11": "AxSWwQc44o6KyNezfH9wVw9SufdT1cNbBZtvZjV8WuPNeNFTCRwNY5EEd7TVr6GD52Ud1BhU6phhwH93VB354Qv",
  "key12": "wU6i5PrBGhwQU6Xm3sXEpKkSaQh9VimbT6pzXK3Cj1djwEd3WmZNLocMLEvnBtoR8XHu5pb5QxDbbtyR8Fes4AS",
  "key13": "3oPazUu2uM97AREYSNfk31Qw4Qu3UJWdXG8fJa4VKJoPzJqiMaUxEo6Cb3HZvUPpSscrKnvKr8BbnYeWsS8FBXZU",
  "key14": "2bXE1biFRBfYM2PbwpCYD421xPBryDbWZCA1yVsMXUAwUV9PYDzSZdbXQ4eTKyGP5gC6pbtzrTgCyE8bKXgXYLof",
  "key15": "4GWBh9D6vPoa87a9xHzqvf5bKRwAbvU75u3tyHWr7cf4B3EqeRqMks5eEDrhwhfQgeSP1uw1BjNJ9n68dNLBAzua",
  "key16": "5BaZJsC36SsasWEjqsNHDNFeqLzAgjyAEXp4jgYSpso1hvL7hsAECDcSdv6qTUgr6SAZPnjRBrGWgWP6JVzSPpfG",
  "key17": "ZYNC5ExAkkgMB6FydDoxHoaQKNFfqMEQkUjDTLVPaNHS29tPPxfw2jRQwYqVAAdLWEVu5QxsptrdZ7EiwPEQarC",
  "key18": "2Z6b9j5ioYzcvZYRhCCMTTLPVZsXS1xEZsiUGadbSMMX1A3roZuTjo7mdz9Zvvk6aoBiReuiXvQeSQDKgxx4mwPY",
  "key19": "3yWLXUJ6xd8Aejd3tk8zyUCHXxMcsbnf5y669oMYVKVrxGPegWPDfkJJcmm9piwBA5GNyjBhhh9t33tjdJRZb9z5",
  "key20": "f7A1FUxC2nwsJzGLAjuZKJreCktbVWJBfLNsUrhp2JkUrYvG1SN8RG83uhvi1hqxjLwUh5dhEf7sZiYTZZbmXBE",
  "key21": "3Bu7YNcJPKSbetZDD8w7MM5cTvUmh55dE3bFY47DeyneigFb3ayifJv9BnoRcA9yGGQLGNVJxHNJeAcWMXNbpzL9",
  "key22": "47FuatRuy4poE1UGZoY4GU5G1X6jTV7Pzyi6yxS8xt5L7dS7CHp8BdxB9pWBdq93wAsBYDgT9dKzhjQVfMJEzAuU",
  "key23": "5UuK8urxLRy6ScQBYqCjt92WMvsSAEzWiuyPCZnUvPKgKYtCh6y4NgS2k2h7YsZGU6XA7v5jtFJW5anNTEFxYZ8r",
  "key24": "5zQ2oeGQUApQx7XfeGLHa32gVCMfZFBS43B5iqLfcxBfiAeHNE8yZdN9GPG4uHAagX63Vo5XxMumEHvcuPbq7JPq",
  "key25": "xyzXaTJL6tqk2FPhF85NZLDSLWkjGGB9mDeVA35sZYiam85gikocVuECnvovzD2c7Qsz2HDn8u3wPtmeL6KKfLJ",
  "key26": "4N87SFUAF36nfGfcWy7iEMkdMEbZqzNk51ruJ5d1JEk5rQWJExXs9CiXFp7RjaR13ijmMSjx9mDvzc2QmML489gp",
  "key27": "baxN2wLd2AY4NxaYDj2Us3g7HV4ZwYwGwpwrJBFiusJ3dfyx3K6jEvAi9DBFkmHiZHATWo65LsKooVRisEgQijw",
  "key28": "3XsfzRnXJYSHHECufg2p97rqQshEkN1EusKBXgoEyBWsJLeZxocNyBp9CCgL86uyP9M7JhsbAfJzEDwbqFnpjCY",
  "key29": "2Jxx4zg6vu7TifJaq1Vb8jeyKvy9UVCn7qFVZkHU9WT9KrYusMpTm5qrejip9o3PYifNnek4KieGs5W2oo4tqGgL",
  "key30": "z19WuzijFaFiSgUm9MjkEMj8M8dVEUE5FdSuRY4kz4zT3KLBZ3vFWgAuek9Zz139WF3rxDw4XYS7bdPkrfffMvR",
  "key31": "2NmHoRtx3PaPk3RLG3jxKa15xTDXd1LNaUMoHD8c4HHj5g918UMCBKkveoXzHzp4vTk3NtH9GkAs8auekrEZN4Nj",
  "key32": "2AGAQGjeWTane9T4Tr9WRzpQiuqhZ8SqYQ5xCjTeZq7HdF4apXmkwfvhpdSDrWBVCftWjfUzgd8ozFEJo5tfbMqT",
  "key33": "xXycvKWE2mUhmNjRZoRW2ejstcwzM8jcQQbuAxYhR38K7qrsCTVte49Cz7U9Nf9ZEnL8yesYdiRv7kgZ1tZy6MQ",
  "key34": "2uCDChLxs3skxE88VmbmBcgo2pwpe9DACXzvsMogHDgaQR1nvqzSs9hCpEDe8cAU9doCZ59r7PtNhcDXFZfdPRu4",
  "key35": "3GicWYNjVPqzXWySfQJVXKvpgxVkby8Xh7P3XuKncVJQEL9t9pv5j66124BBxuUAZQWEs4DpsQ3tEqCPot2bqequ",
  "key36": "2NguxmzWpS3uMSGPEu5X1UeLyfVppcoTqJ17DVadPcf7Mm9YvVB5j3zZyQ3YEbTC4APj1Cedjsty8u3kwRKUasTM",
  "key37": "3vVucgk1KExKWzVUpWojxYK6bgN1bxzEKT3FY1oUMjq42AbJkDwV68RuCFZwS6yVhQeHidYr3zgEXxMRj3VfN2S8",
  "key38": "2UMNYVE1XCqDtZ5Ycz2Yas35bFxF76Y12vTpMe417zNc867UGxvTRdZBmusBBPAiq6a2XS549hR7uX4apzG9s2dH",
  "key39": "2WehN786TQaXmLcoV1H8SF64mqT7j86Q77eJnAcPhnHSvsW4LLM795sMsikivpePMfcoRM6ZcHDDamrMrwh8ceqd",
  "key40": "2kr3Ujazmmchktg8CDGKUtsMvSDAAQbws35bAEav5zUnhFRsHVCnuuukzwfM9imjPo6A2u5J7oMY31pp1g8ZL2sW",
  "key41": "5RCtAeK6GE135EMFv5iaZzhEGmbg2fE1TJwYM8WHVvHrF7TuwMvL7zXNW9H172iyjhcbJoWLq1HcDZxTEWVbXeQg",
  "key42": "2r28xoHwTJvcy11MdzXa2b5FzGzyKa5rJ6mfAaggGHHjty9vD5XY1FAqCjh9bEMPP5ko9k7hS81j1YVVGNkT6a14"
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
