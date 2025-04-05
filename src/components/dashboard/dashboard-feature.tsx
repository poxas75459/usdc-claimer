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
    "2SwZhQokSy6Ssb1kAxdDaRTXZNhVgtkVsGSvC15HqpjVussbJvcwoKjHSmhNVW2y2VFFd6hjPvTPBinj4TdKZNyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ATsXnKiz4eH4kw8ZyFsKQ2SdRdwVZQ1LJpA2fx4gJBed8RctAPBiFrCauBXLoLmFqGv4QmqmeLzAoU5PPfCWyeV",
  "key1": "4PudSL52UNqQQPkLL5YMLHKwdZCwztneC1fzQgfJVd8qaQZjLhgMAxL5AWssaVG4uV9hhWDT7ChTM8Rg2jdejsgj",
  "key2": "52uNu3oqa8qC9Aem27Vqvi1tvWzC1fzybCL9frVPaQr5fbpKbx6KpM8a82KkotB6k4uEejSx9EmxhyEofLczELro",
  "key3": "4JeQYtN16Lj6wDXTWguiyg3nKETcZPzRYr5qQA37bjuT84kPMqPi8Fr2QcZHjXZD5ZkyxbHgmYwwfH7jen8gEnyw",
  "key4": "3o5gdgLSRRHjB1g2JE3QeBwzxhCgmiA6HWvkPJ7iWbpt1dBaf9UsMx7CuEcCRP1VL3zpiQyYi6FE8KYbNBNsuGJ8",
  "key5": "4PPfu1KWkFcmmgmNwDpsDvZdonnxEvxmDosth3k3mDcpLNvTohpjC22cWYhtP4o9qYqanckchD3rRXjBtQ3Rn8xo",
  "key6": "5N7LQqZwUN537vGsGC7nM1hDNwYCFPK9jb4gsVA4GA3zCkoWYS2KV5EUD29PAWhong55zVrw5WTdTq9bbyARRA7V",
  "key7": "5Btmj7bWw7VPtYENPaxWZuiZjsRqCoJr1hGZ5eR7chWT3Ffm15wK4UB1QqsRNnGeCakV7T5dGQ68CERi29LcXBBd",
  "key8": "4o1orFqACbk9dopQVZuYzBwUxCYsjLQmqC5bgkJYADMmjUJUrbprEYX2bKyfAEnRxw2P1GW8NGogn8ngdxVfiNXr",
  "key9": "2cR2osDbEWQJZ1rJtcq6ZgDQZRWbtUQUzoD6CBzhiz8FRwcmUwHfTP2AZgUwKn8KgQ6BCC2E1rzMidqGE5Auohyy",
  "key10": "5tVLFvJ1pKxpj5tpv9Fdv8zq7MWragnXReStbnuVNyqF45ThGdYiadVDUXdZt42RaGh2HFMLLnDMb6GfEvaXT4oi",
  "key11": "HbYBkMdzWV5jSmN87C9ZHyZF5CuSoniUwPN17X9b2zTh8Cghb3HKUBo3tDXN8CgutXS8UvpmNZKJ1gNYpKiuxps",
  "key12": "2gY71Df7cjTrdVDdniWWreh2cyQqM196UuktirGdQTQAcFGwuuRKbrfegTYHgov7irMtKr5GJsdyJxTrNLwteBic",
  "key13": "5cm6QAhuWBap731XhHzs86L1MUaY31nSvLXw7ogkmpz5uAaGhTyY3BqMsUJ5NF946u5auA5ZG7vSUnRFFmAKefy8",
  "key14": "5daPVRkcjYmjy9zGhxyCWqd3XBd6uSbthpNwWjBtZuk2yid5iBLjQNp3pTvc4fFS15EKUrgjYrY75Hc3K3u2AXo9",
  "key15": "5gig7eJ7zHbRt3N13HVfQ6qRGSWHhMwgWnqiSWvHDxgRkZRmfZ2PkoYokWhkM1kkwjYDMCZZMD4bEbnNQPHDaAM7",
  "key16": "5Q5gwcdRGRHbRh1du5xwAe72b8SyRhVBvutLpY2pE8Qyuz3884SUYBapvbcc9U6gWtaogHjz3RBEYDXkiwtoR8AG",
  "key17": "arKQM3S6fqpmrg2bho2ZwemsgdF56hzDAcNtSmp5TuZbx5cP93r2ewhK4EEcXhzfvsSUW6sW33Dm3QfRqXnbEvC",
  "key18": "2AQdx5m2sQxgMre3C8zvqiutorkUCchGURPG1i7REcQABoTxKt7UayBoghazNfFiPu9pASJBQtUTZu3vB5wFJef1",
  "key19": "2pnRATrdzMLrKDrg9wxtjomMBph7ExXQGgmNVD3gN95BsMhsQjMLJDuvq7bB53mkPEGnCHsfx8uvWsKxvHDhqYBy",
  "key20": "4xajtR18CFXB8ahntMMYZswZbb7LR9QUgnRQYFJEekMftroRua1RGRGaLyzzgaFrmgttgxpQoe1TBR8HmtstX6MT",
  "key21": "4cmmHz9LB6onngx8BbYXjbHBSm7ptUtA5UUCS3ra4j4m5ieYkEX6KTBxnma67CSD4eVxuEEanxyUUzwBSLTgYPeQ",
  "key22": "5sgVkiXLBhswdZSmf3rELfMcJGvuBEK6FopxHDccsBQfNxgQBMq2kyMre7JqeCVpZxuADaTWCQ4sjd3EAUiJZKpo",
  "key23": "5Ttg66UHGvtzGq2W4ZMW4R1V5RbFZUsYGFkUcSA9m4tJBAse3TtndecRn4fhggiLwGaJ8awbc4msWZh5yWf7hfhV",
  "key24": "2c3x37yhuBPx9Q4oDtBAYZufjZ4xLCCVamhBetb9tjEKBSVoqx2RP6H55GFvWuS5jr9pjGKRXeTWJtbgMZUorqKe",
  "key25": "5KRE9g5H1YFYuWYkkk4KV9hpKNEKwdjJZUdRirrRj7UDqh2vBwvE1rda21f9ogCnkPqyqVGGp1fJbdhSMHqNv1Yd",
  "key26": "do1FXx7koHEE6hvTfim7VGPLnGwN3DWrNwqhyxZnsabBqHsG8i3s1mtjS7bhWc9aSMkmvooF2fgHkwPjMwmLE1z",
  "key27": "2s2Uvdx38VrY93dxrfbstuG1BCutFeki8fvmdbhjXzcCVr1QuGw8hUPnQvHapfMDWg8KyEfJ8MoTQEgESHD41The",
  "key28": "4e87pjVtGhgDsTucZskFHYRkcaDfCaDQjsARV5twkPeLgtgsPgqFKRmtfPzA88BNsP2EcVrDe2LZLk1a8Q3ovBaf",
  "key29": "2JrE4ZqQ1u4KVGgsvRodBmUe3mmWMcvqRnNNpW1JWtHfptpaziKKu88cxjMSFUtzS5ET8M57EXuXmLqzWqNJP2A1",
  "key30": "5nUuQSNt184WZVps27ipChwhSD4QNiHiYagLaZCNVUKwWagYrMhfy5viVKXJJ4vHW1WzenxRcnXabUwZjgDSkRtw",
  "key31": "e4qwRfR36Zqq4qCUTwz4awi4QsF8WJEXGHWJE6jjSHvbmVkRDECkefkJKBH9yV2KKU2xvCdNXaL3nr7SL7Xaaac",
  "key32": "2DUAH6DSSN6XQbFqoV1y7r7dXLjTRXtdv7Yao9KWgbDMkHBezcQTCfJvM4mWfv7kLeKi9LuRXyDZpgo9kSoyHGac",
  "key33": "51broriF7BKnsyJshRWF8gjTEyyvZ1RmN5QK3s9TFvtHJmuYdVUR5sMwad2a7bsKWp2Gu7GQLH8csfYt3anGV9W1",
  "key34": "4nQvPHH9cPGFhg15XN6YC8bsenJNqR8qu8APtL93g2Azmht1pmnZv6zHaDTWRxCDzP5i4iRsgm485M3aDeE6pP58",
  "key35": "23kv1L8gYVRVjq8KoDRbvNjuFEFewVJtMuteQ7kxG8wNZ9MLG3NYooqhvKBJ6TPUzBWxP94uAwSnYLXutmm9UPWt",
  "key36": "sVPQ73VBVLLqDJPFthXStjubhJMwZLZAPvRcdvC3TbFJTUvvcqH61yYtrzvHCu6t83UuhpEpLrCKZpPgCa3o1pv",
  "key37": "4jwuWt8XqQ9rtN328CyiCadQN1izB8vWA37ee3PJ5pF3qfh6GRPo5LoDDWG8t9EbRYxBzRSLJAGWCc66k22W5Eq",
  "key38": "5LC1PmubcNi75DM62Hh2D4H8Q2rJ5BS1mnayHzK9GMuF2EfdP8EcwZyDx6xqmTrEG2rT4K9yZks8gApp5Wwu9UkW",
  "key39": "4DSA87y9zcrb2mWyJcwQyFrQHTBtJcLNaeedUMaJmQ3U7WBzkFPQ8LnSiWRvqCgGTULexwC46oRHk4TXw1CfwVqB",
  "key40": "3pj8t9uYS9iT2s5LTS3veC23AudYuhSDgnUwkV1Ndqf1iiVXJxBYxzyN7aQGDZhWNn479PMkWLs4WDZnDbqb2h5E",
  "key41": "2LA6tvRtRSiFoufvT1shMj2dTfTzuEEi1A5CWKpeLX7PH2hXdmLkGboBqQv6dBA7Z5gUhQVwKqGJuiMfik28Xwcn",
  "key42": "3UD87pbEsv1gMjGkNpTgaFvY5KGxr4gNR4GB6ffeipGcCJaRr9KQFPHBZzc5LfXnHXxvmfetGbeAW8p6Bv3o1N6S"
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
