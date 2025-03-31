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
    "3aeHSBX1Yw6oNLTHXxPCtYvvdbDpQAdZRjCVkwpQjVT3mt8v7FwsXZHXK5VwF3chiJGkbCuH3vXbDUez29zJuPMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PeAhPrkpCa5RCLg698izULg4GWHf1XZj67E8dM9cSYp7Rk9qZBRBjXmyEMSzN5tDUpPFc3WUXmxabYNcDRRyxp3",
  "key1": "4EA11Pf8VwTw2sNZAkr7QDV3gAFqhaGYBWnaFNrgfKM9duYvNWHtxgBPeztHEGfCs5aLDVn8a442D58gvxL9tjSf",
  "key2": "3Car4bnHFLce6nAB4nN7eZouf59ePR2zQkSSkNzZZFxciEaHzvpLVFxfYpYjsY9ArD8RLHysYpcXry13Gwd4EXqo",
  "key3": "4zB7EnrMTMwDVM683qApmyZGsdCPAEmGWyLM6XcrKJjWA8Giz3hhnigndcRPDvg2stXYQxub37cmmVG5zfbWV5Jx",
  "key4": "4xQ26zLrSqa8CPD4oGoobmNmcNyjGfwxH5PAfBYjv52YFRNYBTfpHTQJASz6zjaCqcxJ4VSCbq8xHrHo97A77Jym",
  "key5": "4PGwmtxxHk76Z5pkLzixDHvHH43ofrFhLf6Cy3N7FLngeoPNLz6v2KafJMFpCM7tUSvNBBpJKDYFeLMfBE5FxDHj",
  "key6": "34qvG96znzUmVK8z7myv5VwqGNCJ3Y8HyXgscU7shyft6bUHmKfyfmf1XTzdJCcRL16jXFCGcUSXWB43PWg6pcLu",
  "key7": "4fijbUEQun5hNQeZkpuHXGsbQvq7N3xbzPDMr78AmxmKM9BveidyRbrrpKQUMvd4wRzYffftmb2DcEAijM1ipvBf",
  "key8": "2LHZWiRGNctfGRakWi1sVdwEgeNaDKgMi4hRm2R99nFn6yiDaMcZUnt68YCeodZjogxKShdbCVFvKBXSXqBdUGEg",
  "key9": "3MPugN9aPxFZLXBXxNEWi48bfrtu2JhNLpCQrEd6zogcxM4xD6jYN7FEf16hC9n2bNuAFm9Z76dNnzzFMbodkLid",
  "key10": "3UNkhP1tbSYGSdn3VRZMv5kbCKNNL8qtSd4fAAqNkT2fqjRLQnf1rZm65Q9UsNcFjiwJA2Kh8SeFVS8CanNYinX",
  "key11": "3PUFofEFvY8mT2L7nGFWk5ePrkckYiuAFYNMGC2zuNRwK613apUyH3wZstoarNBJWCkknvowp9BytHQYd5rR93Tj",
  "key12": "5VYxgre4RdWfqvpZZaMjXpzi6QoYARc7k9YFg1BqUFEEwbViXCZadouEqF82wjkqbWChGiRoAjtusS1cBQE23hVK",
  "key13": "2a7DfwZQtrDXDocik2YFrVmcuJTCoHZ6nptWmmPmutzR1SvzuPBdViCRjg4QDSuQ51dQS3hLtvg8gVuc6FW1ZfSV",
  "key14": "29AQvwXw6zF3pmcTFKHKFs4VNf7tnqbEggV6VTFmQYCqCGMaMSUegsqyW5Y4JWzPn9hz9ZYwQxsGiq1PTMYnHD8w",
  "key15": "358KV6v6GJAf1xe86xgnRfzyTQZN5AJhkWhwxBiG4KAXHs1dA4dRaMMWzcgqqaAYCXbPE5EpMKhSqo2r4fkPBxaq",
  "key16": "3nV8Zx3po6TXAhXBT1DvUwnvkWLS8Wzr9f3w6z5qP3K5nEsmWNbreQeNXEa7jNugWcEmYyfxykWyRTZ93A3eJCHU",
  "key17": "64b4PitMuKZDREQKFLhS9QPqgP7eyCf1BPTv5dmG8egrqg6qmiumZRSUBWuuqDtXaW31rtipV8U1jqBiJNea6Ftz",
  "key18": "5v2dp4YQHnkUsUestnZ2JbzmKzyG944bSMqG8ufAGaR6zmzHNxzEpDh1SSVf1ucMrwHZzXT6woNhyLEsj6927H9Q",
  "key19": "5X2fm4XYcZCcNatxVcLxLxhZPTurZVQKxqSLRSd9aTwFc75H3369rMn7m2YgHvVnU35YAbLk7wCMhy82TSxjoSmA",
  "key20": "ap2Axx8TEtukVkgUF4xWNURkeArZSXERyNgTonwjsC79FYDQEFPetH5kKhyPSffmymzP1RoChCnT8z2GbF3Fx8G",
  "key21": "fkAJAmdAzQB8qsMDeQP2Q3K9jXoBqiAHQUpbjZXPLfzp56vRkywD1j7hv1LwWSP8BdGsGHnt7J9tZiTp6UDwveY",
  "key22": "2mj1a59jVZ2EmVvthmJfnVffrzCfdZUHPgNEcJwLjPSR9ob4ZdfcJ3vwKZRJRhfdKpL3ZsDxej59RVJbqwtgq2cC",
  "key23": "3y7UgNrWEU4EH97Ex11yWrt738vhYsTomwVU13L7bCPBRicJRrKtgSLLhn883MkGkPwRsWzzE7LoFZhoHEiMZCi9",
  "key24": "3mzYUopXpCdASadxhvmSAbS14JAfE3c2Je83dAKG1A5Noy5WLinkSnD3A5hxTYCKHVeeu3h8wijTiae8CwQotQiq",
  "key25": "x3LZH2ZnfeP18CTny1vviHDQ1rymuziQTaTiPQk8X9YUkTpd4se6XtHeTzmfg8XDt9N7G7YX9KDm7B5T2GLAi3b",
  "key26": "2XXrE6JebUWGtVdx6ZMDUBWaoUx6A4xA2w2zdfS8s5w2jQJLodBmvkT49Ai3VWqn17ZZyztm6ibbbahgKP5jQSX6",
  "key27": "4q4UCiPFMSDf7zHHynpcRTeUojg4BYEW5AyztyDEtKEYHhzmsTk1X8sybMKERyp4NBuQmBnKt1gPTkXdoDzB6kjS",
  "key28": "8rE9Jz4xwLeCEkNocNrJETbt1G9KRhgSwFdeEx52m7CgumhiqFEBZcTDKHrk2zhkEkmUEbSSpbpHBLbWbbntpjr",
  "key29": "ERBpuZVzxBtUwzgoRXp7wy78JNt78DCebFsQbuEjBgBy26eucjF6eRWvCGwnTp3KBpW8MJ45T5yd8ZUYayo31zU",
  "key30": "2d7QwqNMtELTPhS8taENgvSu3x57pYxzxUtKwtJQt3PrUQPtvYJ9A6ULcG8d4UEzmFXcySjiKZesEmQWLVaA2thS",
  "key31": "5HrcoUJgNNbrK5AAo1GMfCR9sJ57Mznh4JUYWy7usnvBMd1eT61mxGYyg3683aL3fZWa5K95UjZHTGjByfvhHbsK",
  "key32": "kSwyBCrRrkQ8yJRk65RJ6m3otqi8CyFRQzQaFyheKdBv3nkiaMHkG1StSgSthcXJvYYfxecEDoxGfKATu9B1qcm",
  "key33": "66RVaahpbF6DinGkN91C5aGfKBWy1pS4GYZVkYuir5SmSbdmd3pCV11eJ85RWA9M74PsdfuTszzki7GvR4S9fb1V",
  "key34": "5GMETphMF8pkqAb9QDKCtVZEiC82EQnqeddPSAxSjAJHuA6uvAf8Re9L76aMRR513nygQ4pB5WFx2x5hT728L1Rr",
  "key35": "3nMfihnrYaBKJmQnYdM6wpPdQK57KMMZezbmHJpSMUBUUG9EgufSm2ReGfWXLZVusEq9gt63V4otMd7LLfVR6Na6",
  "key36": "4BXKiKYjpxBkf643kLFRHPV6s47f8aPfpzhrg8ZDb7TYV5czWgZ9oxKLhHwCs8vJGJu4rXKudjBNqXBTs1Gf6xLZ"
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
