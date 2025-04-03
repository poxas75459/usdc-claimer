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
    "2yNBAH1xp8GiofL92FchvKpKZo6oNC2qYiA1cTSEVrRp2aoP8LAKz6pWdM6eEGmDtsAUsPLkQ5mLWmyx8yG2Je2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5KVcVF3GcqT6b5QvEXdzXQehp8NnnrZNqi7S5XFBzUqaKN4KRTjRMBmv7Roaq8Wqffiem4EG5hiXaAWqYuPmke",
  "key1": "3AF5mW47hcszkdL238j945GwyKLwy3YP4su7jfbTDscgoyJKBPdXjeLJjFuSfLMeoyTxDdAa5qz7UbWLBwma3LQC",
  "key2": "3vrvf4o8kgEGbJCDGESadFkHgPuriU9Jfia6JmuH55dd2zRJtHBpkV9fHMGcaWWhvGcURPaEMtsB1k3AD2P2hgiz",
  "key3": "bujbPtvQ3cu37ua7bQrTsjyozippDQ7cKukaK8xc2Z28r6K3GsNbNXhS5ePJEzhv4tq6wFSgYHHo7dxPSXcfJgs",
  "key4": "53aHwniZeLoQsQJMsubyZRdgTpHGfDERAenMoLu4DUKGKFTGzC6jr3tfyfMpGPzJHdYm8A9HmL2AaCoeKCJTugF6",
  "key5": "4YSwc4zGY2jEfG1eBTs3pXDRMpVgkKwAdPxEP5STWWovhQtEGf6eC4DQpaCADuSJXW6vShvDdyKgJonNJWmgUZ4X",
  "key6": "ZKdbzrtRXHPdnq8ZNuahBYcn7biUM5TiRRYVmWgnL9QFcqAYSNKs3JwNRGPcV5vM1mjeRmnREFY52YxDVkr2E4c",
  "key7": "kdpJnCGB7QQwjjdf3o3ppKsKJKsKFcUVrcj2M1pURrY8vW5w8fMwGcAewiujXy5JYZnpJmo16wZndxM49b4pG4d",
  "key8": "XYzVo4nUKp8oxvjP6hZRmeK7TjDMCi77ySogCJDaan6E1ErTjX7Vf7kzt6QqVAa6G3zjTHjh8ocjtDkAdZdQuir",
  "key9": "5zdFaYzy3wCt769ZXTzfhjP4MLNsZAGJ4s8FVUhMVpUinz29V96uLLd46pAGCoKDTHTfHoNePufcAy7ccGPp24Nd",
  "key10": "2a4b5zGWRHr7pp5z5KpEeqQ2qXHtT7PWxUzgcBoMj6qEw1pgFdpUeR9zFspRtjLtKme1r54tXmdo7D3CDT9g8edP",
  "key11": "5sHrts4kFeckQsRiuu8pWAzi6gRA8kmPi9LnXEKf8qz5euKTEH4LADRLZ8nTfJPkiLQ3sTub9kxk5vR861MBCKeZ",
  "key12": "5KuPuFxpauj8XVCLcfSNXnbjgF7JJAuDg7MBwJqGoYmXPXax6sA8eG6sGj3uUQka4yL5YbqrwrJHMcmzTHbiFywo",
  "key13": "67njNHSr4f3PukHGudsD78wdsgeLV8qLVN2n9KMWe6ovrsytuzZakyktPjaBWVirwvyTCrmhYoZxWwia3EgFThPz",
  "key14": "5Ca1unogy5sJxts5LDrS2BnnpxVgN8H44sLkn1SULDSiJXHtfHvBvGsxj6boKfytQm1V5zMSo5TSpH9Z5Z4iTzQx",
  "key15": "42QyxUjRSGtNzi132YDcR3S3mknso32dPYUr3DmnfjhJYxVDJVADMymMJkySbKcNr8EJpdJCum8C9hM5pRmvQGSg",
  "key16": "4hKY8Fm5bQBsWJ2otoB7ye15k9NMrs7KvYqxxkiKA4TZVj3NJJVT9n9E6j26urUmDgDUi78d6ixGui6huPefLgrF",
  "key17": "3mEaERbAsHFRr3gfCSzYcPdewMgSpmxTqGJzcjCjzfVx28vcVhtCThfZFsVjANvLXhj3HnUq2HCEFqovUVqdymyU",
  "key18": "5VR5TJ2HtnS26q8HkAmCdeK2aqi141eAHuaLKybyiW3VE4BrU3PhLTLLH1dGupGpLXQYsHR6s32BUAUiiHG8iDkY",
  "key19": "yviBPzeDTkyB4bBtYdLQ8fHZ76Y9tBzsxvXFYzUPpa8hAAMPxYwJfESjttPMGZLTXA5M7UbdQSHseLbXvdZcyzh",
  "key20": "37VtQWnhac3TcDDsToMWtKWLToiqTgHADh7RHNDPEBaib2o3xMbfN5MUcwfcE8TUkeF7snqAdTuFvidiqYRD55ER",
  "key21": "47PWLcbyAe1oDfbkSJyqpGbxo5THqxsymscctp4RxCDaAn689ATETZ2pDY9bDWZDVV3to2uETSKsSrx1vWw6gCaq",
  "key22": "5vMbSRgjHXtHv5FYzFw8qPNTd1wEVNoL4mFu39xBP6qYAWw4BTX7DMPCszYddpcUG6ZwdFxeewrJdUV9yhDUh3mc",
  "key23": "FAGn5gnscJZVUyZU8RrQC25AGcxTtTYH7TsLxvNhv4jNaC4PNuUPq1sAtqSGPyhnu8DZ1kH7eXsXkzEh81xr9Mx",
  "key24": "5mXXG2G5e4n61ATBnZNtAPYUiSSUN89AuBFauDELuEU9ST1dyR8yVC6c788EJNCVZMpzJAFUPb7PQWp4qT3Aqdbe",
  "key25": "2v7UfapoF8QGp31eDg53mfotqbJHeukswm8iV4ypWjgXFQZVKihZbvPzXcpre16iGJxC6Z9FnYmAMBVodRY3LMmF",
  "key26": "3L3r56Yu2PZ45z7KnhMw4HwDwc5qVdjEBbnP9H1XwsSYTndwbxy7f44Pokzf4YUYacAG6UTdgYTBLd3tsVcfvivh",
  "key27": "3BBeeDC7fdKrAe3E8KNA2AoGJVvGyJGwJEHiSRwUM6yrGV5KCEursvqjaMLCcPJhcDDheVsPW1vm3z7eEgP6NUwn",
  "key28": "Ab5Wqj17dqLZEYhuV9uvihnr7s9o2jPXDfELkuJSuqkVUs6ghHXa8ZY6MSJ8sjXCgo4bjZNDu29iTC4pP6mcdww",
  "key29": "2SNoJj7PVcJnJB2zLyMYqHB4LD3tJmrkyzKWcePb7KCaftGTCEaU89e3rb6J9nyuPfMmW1xQyBudANcuvEHqaJU1",
  "key30": "Jqwr7mLbpuMLXezaTnwT7mPsvqsLTRVKaMYP5UCRrR2BXvx62y9zooEXWX4psoDMbjdAQG6v7turXYyRFH7ukEN",
  "key31": "Wf6aZeLstJpynjCzuwmsob21JERHujF7mjjgJL654Z9VQWMAFV8og53cqYXBt7saX2hJjVBBK3EAbhtonmaJW7J",
  "key32": "37TmnCqiaNsk3Uh98FdAB8971pwbdGsv5WZ3H558f44MWT3QJE9BXxfQ8GZvqT7BCkCPi5BmSYJVsb3QnhoTvXhY"
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
