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
    "SNLRd34G5aNDzsZKnTZBYgC2ohC4pp7Q97Kaz84uz5xa4KnAHqmbU3Tprtt1EQgvJdz1uPdQ6jJLrHRqcVsAqf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckaC1ZzFf4sZqbBo7yVNeGPEGUaZYve2879x3tkXzgvSJuCdbXfF2CviXeNPQ4bh96gyugYLNLDGaM8ZmcP4f2A",
  "key1": "4qWAhrw4EzhTjrQjV9ZQf5HzesEK9Q8Xw6jGrBCrGjbEozNwaWcSubap9VnS59v9Ztjg6hhopqEB1AarLFu2XXQE",
  "key2": "5LhqAk45oMVd59nXgQ3YHoHucykkbbAitfhd1QyD7eouZ8VoWDpHwCZ2JzsizhJ1TyGVDiGwEYtxDMwU36PTvBoK",
  "key3": "5b6UKBPmq86QH9nN56sWWc6A2ZoimMXr6QDz4NPsV1bFTAjgc8qc1rAqJzwR3SP2bQrELtedNKcXELr7oDcVoeXX",
  "key4": "CEmTWcAxStn4uV9wq9d6hCqxKDafb5JrNQhF9YrAHEXL74dVVxyXqdKCovwk4Xv5MFwmry7KEy8aZPfjjBddigg",
  "key5": "VrjJo3dWuoZ8eyQ9vPCxBZ9N51Pmw8b14HAjWW8RhDxziMRjieymSaKcfkRNCBz7hs3c92MrdBVCS1uq6PNYJ1g",
  "key6": "kJYmBsJfQ6iTwM6BEG42JBomewwRW6EbDvheeW9QLzViVp8hLcAuHWVXfZhUge384UmpvDjEC5aWLjhnbyoFVG6",
  "key7": "2HzX5PdbtKHZF9PGufExF9DoZ5LtygSREKgD5rKh4sAsGfuqYKgWmsase86Zt61T3jNk77RmueCPLnh5JVoqVRzv",
  "key8": "31gZogFcx8nPDVecntdTsbiQa6chsVsZw7h9vwW8222EgchfELPso7f55WZpznrXSbqxJ85A1xgRYKrUQPcuPV7g",
  "key9": "4nxwopHmkih7E7wYriZkJ3S97rGJ47629mERbHeWMHmhUMMSV6JMtjChsAkYDiddRvK3jyGuZpd2S9CcrrbWcFqy",
  "key10": "2NfCrQUjt2tRQeq6cNjHw2CAbd7FdTWrdzAACNiPQWyt2gcRuMXnKhBgsVrnNDaSR8noizpfNmvfVDXMMc7pB6Zy",
  "key11": "2UCaakbAaaktZwrWCFaEMTXK5undMeoAnVKh6hQ5NmXe5jVFuGGTyVQgJXAoCvh6QgnzrKsTSPipg3tRgSw9GmZk",
  "key12": "4uL2VNA8bjSDoJWRBCF9WgPsU5RK7LCBTCpVbmtBShD3B43zmEjwZ9SiPBJjDXVrBq9uHrUCvjm4S7AZPAm4xf3P",
  "key13": "2BqWD72mLyNLzod3hdWzGWTSN9KvEx7mkL3myakVU8DMWunjS57zXBfkxv7bRXW7oH58rih4oTti1tXFwRAAj58d",
  "key14": "3BD77wqtToQqyLd8j4gaiAqQwnXuSkGcxEJ1UPR2v5xLLVBAwcfKYyvVfqDXTsEMm3cx49ex3u8QaD1otPYCSV2x",
  "key15": "3ZnujyyqePrhSQnY1KbG3rehGC5FEk7XquzeA4p5hsgDy4kmHxjzXvvVop5T7FSrHj2aNvp3CZwXzCjBW7LwCLMw",
  "key16": "55f7QDz8uPaC5KcTHnZaxBaCyv5HfNeuaPnRRVgz6xkyRJJiMgMrTUFAXqgEBDUenKp8ZmV2FzE9H6fbmUAZMDjv",
  "key17": "ZNBNR3tGnpLW6ronQS6U8LbtPq1rEHPGLjsoVLJ7DRxrtD8rp8rzqq2H7G9UJhJQY1qLmyAsJeY9PTrPwsXgjqY",
  "key18": "4yeDJCGvczV6YSpXo4pDqiVY66JvuYibpEMGwTYvqaoR13zBSjvhYg8C3ixvsK8HcNP34tsSGmUDAEY5m2km5qMs",
  "key19": "2ZrVYceJyapcmKWHUR88aiMnzEvGFRKz5XCTQk7g1GSNiy2VMHK1raMESyux9qW5rD2NXAKaNeAr1KbMtYc2A4rh",
  "key20": "64z5Cv6WsGF6XrdTU8fZTACkKentejBNucUQuUuC8JzGamJWL8DWVCDzMVM6z5C6kNqNkAE517VPdtLfhYPsbS5H",
  "key21": "6qd3SdkKV8YofqqABtY48yfTrMJFfmqNUS5e2QAvrGdpyEi6c4mDFnkR8JMda7xdi12nNjYKY3hcyNSBh5rHfRg",
  "key22": "3C7g1poH6be1su4Y6mAwH9zf7Vxj5FEHCGKN1BsCmzCEXVMUyWwkvPzBDAuU8pLyuhELUQxSyCYtjxLZ7senFSkh",
  "key23": "7Y4Bfq6Uj92egqDsRkSisX9rKNzKRRWMiggET4b4fHceu6oH8SA8D2YSCBSJHLn6jvCo8aDA3q3pASoLMzGX533",
  "key24": "5rUHdUQpLfMs2efcSwihsuURTiXutNBR49ppTH1Bcv38HZ48h6smzSQqYKPsVsM8V28En2ofY6eFTXgFhMpFuSGw",
  "key25": "3MYKsD9mn682oWnydqjN2XWuwpcyiCxpG92oCK484naH6GYn3kMQsvkbzcqdFMQoe2Y4Me8jHmt9BsMakVq9ta9m",
  "key26": "5ZuCto276XdiEiZgvqzwYDtMVqkhLtfKvW7LjKH92u4ejprJzjrpLBeqWdkVA3b9gewboBo7bYugMbwPRW2A1uPm",
  "key27": "3nT9YsXQUEcWmyQnwzGGuN51ArzY8tJih1AhdKBd9dStif2uqqGHYbAWjiGrkizRgFcH1nRUx7x5bac1gi4gZD2q",
  "key28": "5rH5f991wjo6eitRDd7E7oiufNyUCQ437zVMuQFLf93bRnS9EVv6VKueeLfYQMvpZF3AMDYd5D4zbWeds6eW7nGn",
  "key29": "3yWJSHgJmiWUWTB8TrfnZQ2Tm9KpLMNFRXTk2Ne16KJbRwK5gVf6Ng3fiQhb2gvZbSAhKrqrd2VjB49qXN4aTTZB"
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
