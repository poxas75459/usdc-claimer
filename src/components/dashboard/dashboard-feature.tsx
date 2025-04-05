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
    "bsZkaUsrsXJt9qVW5An6iZntkUT9mtWnLcrkit9dEzCJ2zt58BYv6gT6FPSq6hP1AWESqLjTThRwsuYQueTVHWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21CdmQypuqF7XZwZ9p4gy42SzhBTYv9SMH5ovgUsnL58eUe6vvMWXVW8JU7YhQh53M5ontEfLKjiSSXY433SqaYw",
  "key1": "5iX4aQHjKLernx2ebizkDECASRu5vdDdRE3CZ9UNDHMHexoBA3e1NLwQtPySpNLeMojPGA34xqaeaVs32uhSq1PW",
  "key2": "dFJH35CpBCCMRJbX814AUbBkUipHgfUwLBa5e4jAs1xBtyZe4gWeAoTMKxnqBKoasQQBBiMnb3DkxNS7dak94k2",
  "key3": "2AucRkZZSwmM9ghhZs4YBaFMd6YMrgkWkt5YRLXQBr6MmMrJXvgKkoh6WbVNHCx1vS6DrAb5T4p7yGWjVaYsbdFE",
  "key4": "5aZWNunx13nUZG1HZ2w3V7kFHTUrKKHHFrVkaQYcwJeurTdeKnmC6ahnn6pmo9MUVC3M6Y89dbuwbtXhDaoWTrL5",
  "key5": "44xihqBY5FuBtTS6rNYCCQApPfJYnZXTgV1qAJJNggX8Pwh4wtnVqUHJt9gUGBrPKo4tbT6DzhEKBXyjy5YAEvUc",
  "key6": "5nXq4J7svUcoP9B5xKuyBZoKWd5tUtnFyMjfgLB7HHreg9yG81MTxjXQqzXoJeZko9Dhg1qYDnZZPrfWT9XjFJno",
  "key7": "jukd5BFbRj3TGJ7GgsMCvGTG7bVkK15FzbhNymbyTywS9NXxvXtsz17UvFnkgWdJY7n8QKT4SFK1DY56LVXcXi1",
  "key8": "KVxXmDUyXmMar9RXUqZJYJHeqqNRiJZCHj8K7Ftw8KRFFizzCdKmy5UBWKCgVN5dU7Co1Arm2o4Jfa1VP5zQGdg",
  "key9": "26hnUUr8pHZrAo9epGEwEKx7txWZHfFftxGFzrjxAM2REbwqD68rZrgfRDQh5Js49mQz8EnCiQ6yHcNBpKoYGb9f",
  "key10": "4EGjPC5Y46tao5pH5MN2EFjXhD7FhNiYuqfmxhYNm3rnbUKzfnUHMAQprRY4oN8W1K3uSMuFJqsxYFyCYbvGJN1u",
  "key11": "66b81mZQVJ6uCgTcgnbzMm1ekHGAMDM5F33aTvY1YYGuYhwbQYsJp76w8W6fQ3roqZnE7FgoXRd7jFGqPHbStvm3",
  "key12": "5eHJUEq6YWQxdLmErdTBvyQdU9aNkjNLZCwBrbw32GMQTU1ssqfA9A4v2BNSQuH8cqbFvdJGV3qTcG74jhBmVHDo",
  "key13": "2FXqjzoMFEtnT6VjDWGv4sKRTetJENocNc2vAPsuL7cG5e9ab1iD6H7wK87GzaCCQjTGruu5vveypYdoiHv62ifj",
  "key14": "5nUEC5AfGGpQcfioRbnPoKZvc6M1eK7wpdie8jmTAdpbX17GGzdfCbvYL8fpdbZEnBYBuErqEo6FN6bU9V4oijNn",
  "key15": "ScyU5tdxdapzngg1923unGyYeZXDHnAXGh6aeSCmhy5c4rqdNDMELqrBMFepe1iDcniYt7SMs3CYYogjtxuWFri",
  "key16": "5T5M1Y37aBc6tZztQQhPkzwziPRcbchwhyxpxXNQDPMRgJrTJpkbwSJ8Q9u67KYrFXfxZim275zuLSRnWWoQyZ6a",
  "key17": "ZnJqobGsYiRyr1sxNXEEGCt86jwpjMauZ9tPvZnXpJfdXsuAqje2TPckuQRpcpjBkxLCNH2ygDEaAcjfF8NiPgR",
  "key18": "Uc9FpbWqpoyxANS8ekbzn64eEb7c6cay1Hg8LtMZHmJdisDzgeF8tVFVdixVjBtJTJcZC4HqpmdV7nbNkx8FL8q",
  "key19": "4vLC224bTC2kH6odCaHHfmqgW8kQao2THRH8ssQGQyVGCSvEEBEGYVXmYQS6s9zZCUsBigc14UAfMdPZS1RjE4c",
  "key20": "3gjfMfcs3MrbMvqE1dacoeSiX5dcTs74A7W6hAbGW69xHRRXARwh6H74s5LXDFkZhhUNZSSbTX41hMCndNiHqLKD",
  "key21": "hfnMXk4Qh7j6YTqt5uAuuK2i1sMYUjjztWMhHGqRmS6shk1Bpg6HarY5MQNfZaPxJthsbjwpHNvBAedzx1ssdKK",
  "key22": "3eihp4kcoocAioZx6fDqY1n3CNjEhnGj4WwtfNaxdLsdUdAv7WYREANkqijKfaZiTvMfTsYJ7DyrUNdRMV4VdeVC",
  "key23": "2nGuxbcYqvYmSynnTv24wC6eRFSbjSzajZ7VQRamCz96PtEs5qUrYFingSKYdaPHMtwyzAiHQYk5yLkRtDQnraW8",
  "key24": "3AfnXpdr4LavQ8i6TEaLSRbsQ8cexnExnicRXoAvRHmE8CKH7WWKxwf1NaTiuRTJHFArjE89uihMXBopo4gU1eoc",
  "key25": "46rpvu7zPTAX8aNWo13SA1hminreppWReUgPSsqfgwjtaC699fbohzTmLLr2x3XzEj1m1pS3CZWrRN8uomsxPUec",
  "key26": "53La4jVhMG85aApDKtEWHs7L7wGL7vs6TXNuc5djYsthX9ii4ip1jVUhXP1cQU6xR54MEa2FDECBhvjfGbGqJ17c",
  "key27": "67753ndr6RZkyLSXVhL3QNWGyKXpLRDtx6c7waFX4NXM1KhUFBmHHo2jtGXM45v5fCqLtXMX12zLC5gmmNKCFth7",
  "key28": "2ohjAimYpPSfd1k6prahbNZyNHhTp2Djj7aQFd2fzKm4MjBNckpw1KJHyimDDBd42evzVM71i2uGEPSbqf6gEiHN",
  "key29": "DVBabFaYwada7LFAPWGUmMMuNeGC2BG4m6tmDNukEFjGKGn6PztQSWNjxDhQiY5whwUb2rj7QVv4rWAEBgLu8kp",
  "key30": "2GFcpqa3oEEdMFnKadRvMtFgXVo6RryYZybrPTToB381MNRUUdA1vRmiuTjDMCsWexv6gLshpd69d71fv8rEKrNn",
  "key31": "5tHoEuAaKHNMkeD3TJaQcyNu2BBoMubEoA6HdEQE46odbxbMdW59sQjSAp51brrc4JaAKFvhh666JAqFqnTTfqR5",
  "key32": "5T3PKdVr8hLRv2qAnpuVQa1HmeCnQwK2GogozNWkGdN3L8rS6xTGbemicjxzpapgWxaARKmYDrEBoXAKnbFZh15V",
  "key33": "4VMeRTjjWcnJehyr2yM9U4RVzgiX6JLFcPBaseU5k8BAc4oPrWYKqRBn2hzWq94ujnNPrWyCi1TcwUiydCimRZYs"
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
