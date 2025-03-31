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
    "4gnS6yKr3m1mx93Nv9bXZ5sfCUXaZCGPvVEM5QYkrCD6rtPXwQ3k9bm6XEcTyNrkcb2ohpVyxTMNk11B8kCPn5kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXjQBS4Zj1Cb7GXk8vKh2EqW1YywkjLYHwWuJ9PAEEZXp9zRgrQRD6snuroLvkGedHiVLtTezjjwyWDMBxc4qjh",
  "key1": "2TZXnUtEtm4sF1xZ4S8MP86KM5ZGHFA1U5V6Ur2KVVqmxKsEDiaactJmJb6X4ZvrnjwmGzxESM2UBiwg9P5dhpP9",
  "key2": "zoHti1Cd7DBsgpdLf8oL5ihyF8LNqmhzG6vdRTEsojrWMi6tuqwfRDmSY2Jejnf2UhQmHJYEs3BqntUUwxcfp6T",
  "key3": "65F6WmEcnUjg8HmHfRrbGpaxqoJt77aqkXTtXzjDQXj9imZ5becMjDcSs8iZBPfyaN5xtYyKzBRaGDqJyVbxc34E",
  "key4": "4UYjRcH3pFjxibJ6qLmTdjrct2DGXKY36PpXsRs914XhVWHe9bjrSvT3reqHAFMp9atiYDq8q7QDmfyopvRkkFoL",
  "key5": "3X19hYSWb7vzajqpdAyEK2cCRUq27qQReEtaL7H2vct7PYyYJEGiSEVt5m6CJJwL5umfa2BoTZC2hTo1jkr9i9x1",
  "key6": "4bd5fP2FAjj9oris2jEvri8KhrxhGwMJDmQrpop6hq16pTrLyEdrTXW7Bbo7X8vb5QPufxwZ2ikoLzSpPEzrpPaq",
  "key7": "4XZKRGQgZBXPwHK1DGEXFFgZY6XkHJbSgRRDafEu7mKEbw4CBSSxyHKH7dcBnvtGbs2CVkkkNmM9j1CASDQyS2yg",
  "key8": "32yuBGjEX1mL5o8RCKtFFNmhk58FvfmMwPZnty6SPwcjzBBWDfayJ1njGEQE96vmhWnLYkNUeJUqg4gEUP39cuiH",
  "key9": "44SagaETmmnfcEeyrPU2axZnAW3WhXWPKAGMivnrRF76mn7ZswEug6gXMqo4voqAQ1U6qLzVHvFY4aSxSYeqe1W5",
  "key10": "3oFdBd19gRSiUrQzoaKMcBP2kCehL3Q8xNTopgrCzQCQB5xniG4j9FFXtcAztrRaSvuvUKgsGCeZczUwG5nsmw4j",
  "key11": "5PSPLqGrRZDxuyssoWEpeQW4HcKSMZeDY4u9zsvJV1GeWAT6zNXyzuSgqHU7jgNaYxJTS6bjZRk6e8bhLB8DQKp8",
  "key12": "5eDgEY791obqbj5vKLj2FVFYniDnFHBGo9aiyCu7gntLEUwVsm9hMMsU2XEwS44utYoFC5Gkn6a8eMXBvhXfFRJM",
  "key13": "4rHk5AeVhZKcHuQPLAuGqhuCiNAnwM6RYXcrmoePN6anfyUyuzypuwXLueRLsRJQEotj1oK3tFfHws7EipJVc7Uf",
  "key14": "9uBpB6yE3pBSoDyVcHQfpP93HZb8XrRATsc48Jiey3ZR1u6KdjsyP3pbxwt3KaozumepoEv1BhPm2RLUNpCDK5X",
  "key15": "5VAKCMPoqY91WL9VwPRuYv5BPy9JAfjmsE1cPKmprnKcL2AnavX1bdn51WqAFm16Hyhx17u4EC6SxPJVCjTQ4cSB",
  "key16": "3GHq5dNPz7bFGgUn6LAE8TKVV8DcXDHuPxbdhFQQR2xH91h9yG85JuCYkHpegqcT5djtAVpZrYLHwHPbQ4FnU1U1",
  "key17": "24E6UuznnaLgmubs7Jf7fPFHJnFNRpZgB3QVmMiVkv72USTS2Fi3kN5iW35J4EX5yUR1m2N9g1iXQjJsTnY3Ky4Y",
  "key18": "2byWdWNH3GhBawXcnw9brHQCzzGfjhRn9rB3ZPmWuZ6JBeuBGpXVe6AJeQQNR87nNH9tiBmeJvoKKi2YR96RJSfv",
  "key19": "3SakT9Mui6SFXNhDzwuo8caA15DPfvhtLqcYPSvBJ1fMbAUKen2YmNA5tbgrSyLLWdnWYp78WjwYUVcJspLspbFG",
  "key20": "u3fteYwBs2xe2LgRF9G2yaLSgQjvn5jJWGKqNR4oW2km8S2n2JxDydEUszePgDwZhtBxbCyMwmh5uSzYpLTgvj4",
  "key21": "oWUzkyANZ36EEvTavau8Jv9nnRzwcaaFcjp4NENNPeZ7z14Xf5kByfsqrW7yyEq5KKqvs1QQKETFnkGMa1PK1Am",
  "key22": "4A77h9TgZV4rTKzmPZ1daRkUGt1QCDWZRGYNVqJ9L2MFbVfHHC93ZYpChB8vpvPdJiDoJv7swkEh9zqDcCAPvtbz",
  "key23": "67U9ctKoZVHmieUCPpQvipkEpaBRcYFj7asUhcH2bpGNzwYrDebXpaYY53KdTgFoEqkde66SjZMGksduh1oVvNFN",
  "key24": "3hMvFgWHRgB1H3iBZpv9c3RQ1Mg3b5GjDh8kEm2BEPURoCyZPmBfdYv9b37JRn1H9VunF3BnDCbK4XTQPHcAvEJT",
  "key25": "Nh1PRbds5P24SH8LVcJuaB5GWEmLQiMYhYxQXcwfSBpyGZEsRHBR9QtmNsoMACrPPSboe4UR9EwSySMM2K76voG",
  "key26": "5afW852bKAmx7G8SaTwgG988RHbTuAF2t9546znHVFKSwueHzxsVbVjteRDWjp9GaEPnyAEETKSN6L2ure3TkkKp",
  "key27": "2nkd323M9uXJ7EHh6FvH5RRDfHrdTzG5444uR5xWDMmAG5kgHa6FVpf4HkM15GW63UFKvDZuGnq5NtdAjZUNxxBv",
  "key28": "5VBZLXB2whg14mGZeZHEteFWvZPVZDFNvHXVEyNdAu8Qc1AV8y6MxgPjipb8DMWorJJ2BmzULeKKyU41fNyNM1vn",
  "key29": "5u21BZkzp2u4R3aozq2UBL54fJyqpuVSYRfanSSVJg7FNWNssrYDQpRsnDtUaF8LXH3SAhws6jZ9VhqNyBvyrJcw",
  "key30": "54dqQ2BpwcquG8MPepEPTUPHWZBRh1sBRkUS6ozSqZf6nMXctNrgj9m1uuhiSadzN4sn6wTTLYSHxFFQBBPLZsoj",
  "key31": "4kJkhJfKnper33kZvFMsBvby51zWEPjr7ZC9VZK7gwADsBD6bWtsmef8LZDyturkYWqVYxnjLyXpcNVsamyi7cM3"
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
