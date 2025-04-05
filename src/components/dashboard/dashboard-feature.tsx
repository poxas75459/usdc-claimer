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
    "61hfG8szQF41SVTxKkbqvzU9TJnbfxNs2UZ9Vj3H93vcWYtYoNpgfrkWq9zrPDxQSHS5Mvj2wTHmnbchqY1iSwKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42EUDqsnxpTiUQjbMmT1ww68hi8GQu58z7GCaDjNeFq23JtZK2Ejgfoeo7u3E4Q8XGXAVuuusqbr6ZNtc1nhVv8e",
  "key1": "3mZiBzHFjfXDACG4timWZkequ4rwUBJh4E7t2kt7sotUfEbU7GRSPvyGMjUoBNyNtFmbKfmU8qZWsquGxPqxLNzQ",
  "key2": "469LuVx22g5qaUghjf8V1Wq4XpcZf37D2pnBpAh4zcFZ9Z9cdM3yncx6neomW3z8ZcGPgeQtDxb1ZexjQBkjeFS8",
  "key3": "4UNye7Ghe41MeoALt6DTQAERVj8QkscvpQa3g2B3qvBNrRRbCBAm1Yopiw6FrkPXu33wahGHrQdt4H6SAYSYHyvb",
  "key4": "5FR8vkFboXaLgBdbvUMbmoqbNkmcWJ4pt7SnGbSDbmqkZikDUiGHUi3FicTHtsiLU9v16vCiTN2ddp6kAHsFxeuf",
  "key5": "51jeSwmAmTNYRqM93SbE8XRJMaeS9DbhZUXt6JAD2auxkUh8zoCRpDf9dxtbhkyN3gqYRA4r3ABii4kjfKvx8LyW",
  "key6": "Q8iWMZ81Q3tSTP7BTpm4tLocXQmiHWGQdzT1HSrYUQneesoL9QVukKk8imwCot1CLpDQYm3sxstqxHA7XXyxvkH",
  "key7": "5dH1Uz1VKQLbTJtaJRMcm7TuxbpT7VCsCbwvhKfdm5CJi71AGnKawkZNfUw9eeft4HZSrCg5twfmdDY8ai8k45nv",
  "key8": "3YARqAqSFiQ4uGnAKZdsYBWAkSVKY8ytQJivCicXW2CYgE6rsV6x3sQouNgStkBeJvmp5LBLNXomnVJ8tBtxJKSe",
  "key9": "5u3zMjvREfbGmZYEbH5PuvSGjfXjQpvB4jfz4w8SJp4eF399T9wdxG7u3McMY7nf23Acu1sGud9Jqgd1CFi8xq5B",
  "key10": "369QxouzhHC6rE3BbrF5JNHt1UMM3CH7fgaoDdeGdiyFgwp6Atz2rN7Gmya4abKDGrYSETBWpwAnPjcEh86NVdB6",
  "key11": "rPTWhmCZNQs4frZa6QC1rkAueFLoAM1Ady4hXJN9FMW7dHjAXUTHm6scWhSqg5ZUC2FEB8oM4XebfA6ePaPqQE8",
  "key12": "2wPt79g64Qc3gbzww8kKJHajM92HUMZPL4KrGm4omUqSfEDDNw4hyC7UN5GFBjaaK98kGyT3KLRSY5DYnS2CpaQK",
  "key13": "4j33TXjPaNwXZrpNEwnjg8imSpYAoPi53cuNdc6HrqpiG4d9METFKeCxJpEuHf1oRkTjFm2cm4vRgVmvp7g3BKou",
  "key14": "3WfL2CUPPZk9XeB3aLFfyArai3AUwmjDtct7iXL68K9W9b5aQHP4ec8Gc9YSU8TeM3WsiXmBE8bVEFyGfP19HZV6",
  "key15": "27J9EZ9pqgm39gRiSGHQwDv7tfdhqLq2jEnRTcDMNRy5QYUoBMkmXEjpy61SHK4TWSzWRTFfpYGeYAZjHms1fj5j",
  "key16": "2DvPv6MsNS3rJc6yZpL59B6s2LvCzhJGT1YNfRvW5x2oeW8eGw7WDP6aQtGoimgSei5W1dJhwFLQf1DaFrkpGBoi",
  "key17": "B1zTAsRAmHsoivoYkJa7nd3hJT5rDA3koqY1bissVPCS3XqToc49j4YmzWURbCCjG8FS1UTfu2nC6hLLMeLHMAC",
  "key18": "2VKDefomw6v4aYRgHW5bUsZZCgoTmungMLk6piMwe1Rp2K17X9uJJvVUC5ZqXaGsBvoAbpGzjHWUZTtote6v1XBr",
  "key19": "4rnTMqcHJfL8bEqB5dyFKX4nzeJBPJ3ucuWkq1RWXrJdNucWdVb2ih2J3Bnff1LiVmJNNVuTPGisvHPLyER7SkJL",
  "key20": "4cXXR99Dv8nv74A2Wdgbe5JUpTyC3pcHxpdZGUwZx71VY5aSPVjwQDdE4XaQKNdzj3WZrLbYgKfGMPqkAXhhS1SN",
  "key21": "4829F4TKwHPvSbgwNy9LHRBKXPrvGY8cgpJ8LgbzcWkEznFV9AsMQyatY9fpNFuYCARCbEoLbsWGCG1fFNJXwknt",
  "key22": "ytfB77XCDN9PrAggghfZeiDvXKYfSsvvDE6By1bhJoTpseDRPDcHHuwSzFjiKxUCZnFR9PtxW1pYLFmwfC77XUD",
  "key23": "w49HvPrgGTV4HU1o1tYEYQv5BS7C2yJP41MCCA3MpRtq3UzRMbf2MaqV1GzmgoxcgwxKY1RXX5jYc5BjZD48QqL",
  "key24": "3FfmYDrn4USZc2APCaf1KbdnqCnQvLNTSAvonSbL1LHJHVnZHL2nrRPgjwNNZt98ZSeiAbhEBhnRuMdXJHXfpa3Y",
  "key25": "4AexnWv6RcBSynR8HP1JoxwvX7iqJMYTtd1PYutsxojcjJTnrkRobtx6RradaagPjtn1zvyFTrdWvRg2fkYuZJVZ",
  "key26": "2HyZeKdLpdnYRS9RHHyS7r7iLrabMJoZZXTu7yeAcNHUXP9oAs52oE7xKfcH8zCt1QYTkM52mngjBhAbC7HrJWDp",
  "key27": "298Rhj941xLR6LZjC6TiwfjwY9d44vTJDP5HtA3memb6ARPyvUpE9PpiEiQpe8cy3ijSfFRbc97MCmLY5NPndHB7",
  "key28": "4AFZDgcsS8wit8eEAc5zHHZLQzpKxFVazMDfGoXWEGU1X3V4iYvfHXr7KCvAwsnYj1x7HvZzaR7wxZBRPz9saJLM",
  "key29": "2LYTKWM8begnqyViG2gGriH4c27jCLE3WzimmZRQBsfbVaRKitFah3q1VHADTnMETDpP1WQvPnxkPyjeBAXMKZgg",
  "key30": "4JdBhCHh4kPaf6CsY9t8u2y1smAy5CaAjjkuanAwZHh2feWP2X8ALrF93GQFX4GJv6KTejB7TB6RP7rAnRs8q7eY",
  "key31": "2L2Y4cP4VQrCwf1ux85bR2Ea3qeDJKfs9yR1A3oGVyf3LtgrhqBjGgPgq3Q25YvEmRy6SWXcfzQHPVgXJQRhBtyz",
  "key32": "WvLWcYk4oh6YqJXvprFhX8Z4VEmpHiHbAxKtEw4L5ZgpDRCAAN19UYyiGokvgTYAcKi8BxgtSKUVzrZqPA39oKT",
  "key33": "5g6hqu9Eiu8HtVYkpz6QCbTfVWi6aFXf21BsJ7BChYkXACdFwKGQX6uZSVVmq2BR78L1azZPT3iszZCAkzfbUF7C",
  "key34": "4dsN1qU7ixRAAAq8FS7JoTyQr5ng2QUk6KPNuFfcgQk9DQfUJcbu7FE4TWCETDtmP2XobVPmNEWoMw3P27re6Sd",
  "key35": "3JfaqzisFSEcRmCT2o9FanSufja3jDHhQbjCjNvx9eEQ85GmEyE5KPpGNzbpZrK6aYdVwpH3Z8MJBDGVm9TXDAGk",
  "key36": "5G8s836HfifHFDQbMQv5xRcZTmJMXnqifbXLbBeFQf2vuJ8wZcyyzhLB2itoFxRw8jGhxobX6X3DtKe7UT29Gcm1",
  "key37": "4pKb6KsXPk7Rj4RRh8688qgt5AU7cBNGHRhTbU9GNPxFvr2MnGmorjNxP4Y3HFaPd54eVaBikZ7CBZDdJ1toknXd",
  "key38": "3pkJgG8ZeXjeA6Yhg8fAAgfNRPYRgxLW34XbwwoRNpzy6weUupBHzsSy6xNxsmPohC9PAZhtnBh3f74gH5gDvtqE",
  "key39": "5BbyjhcNUoQYWcbzDMT4GkjHUuqdaDYTReKSL2t41RPAzw234eC96HeuH9BSAhP6Td196684gzJVRAg3LCBEo2ua",
  "key40": "rD1xebH8YKoWFsTFen9bsE62oXfYP5fTEGRwXrr2x1yF9Nyuhf8UVCR1KLTbYEjBzzGRwYDyi1seU3yitFXEiQw",
  "key41": "QaMek8wNxA4reiB3cZxLMVpYKXCRZWQxRnzN9wHtsvFu6oiR4QSNxkmwd3ArUnwHYtzPBVt3grRvVTBUaCi3RMW",
  "key42": "2cSLPwzaPaxZ9twdx2XzmTZG6CE5UtybJpGUvkdMm4CTzfSsk6bWXSswXnYbiUzutdnd8dENfF5jrFC1tqTqsfVb"
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
