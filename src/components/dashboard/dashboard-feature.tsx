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
    "4BSceDQgUfxVKNS9RmpCrHeekxUDNbRvKerepCNfgE1E6LotMKHvFeZqefox3n1ECrP5kA9yJHegujnBVyKhY4JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MREeAJJg4yX9JEKH4rrh9Aakzm4USpWvQ8jfXNMhtVnj4FPafCntDzYwsBJCY3irS1LXNEbg4wGkczwFYRkjwTw",
  "key1": "4W6QgKccJiWmFc8Fm3oHwZuYxvyTX9vjbeygqwKpGpq5LJKSm2LP8b6RjCEcPGj5io1emNWBeKMXpV2RPwwNJskA",
  "key2": "2uM5L594k9PudieByEVJKnokr454U3XgQzLkZQZqH5RthiQbJKLs9CP8SETJkJ2VqyKyF2xPgr7YVarx9BS2XaSR",
  "key3": "YgmoQSC2H7td8kX9JNHFBT1LpJv9sxgYbD8qNJiuTsrqa7WJnguRzpJ2S9SJvmw4xudJ5kVLdRNnXRiEu9TwPrC",
  "key4": "4MkzYVgpgJkxAWnCXjGwBDfr28a9d23Sr2THR3YyoeSpWwiee4pGUHKvzTBjABZ7c5Nus4SDHz1UBW8KE1se7b8Q",
  "key5": "3BbspgcjnkvsfU3EouMY97dSAV3NCeGkFQ4k17FeqyfTXXHoLSdxKPSYL8KbRrtHdDYUKjCVpaU3pQVw2zofdzDg",
  "key6": "3dKshrvAzR1Bmi3BMWmjgonkemKaNeuHrhaG8yMkqE5WkrbuWbZL1Gbg8dkmnuV89Y7Hg4cATGc9U8hT4697bt3G",
  "key7": "oAyH5nSBt6r8ntWKYfiVer9ihSQiGgvbDrEtJqipT2Jvg6W3Y4SiaTputGyfSG193d3g1iJRY4ykpj6r4AttpZw",
  "key8": "59wbdgSaTpvqGDVWuAQStiB29TySP3SptTQEJBiPZgTdfhDgf7PNjWo42LEv6Xhh5jHgFAxJXBU9MGwVJkA8ABMt",
  "key9": "4xk3vamzakXo1Ch3wCbtBhbT1657hG7Dqb8gPcJ6MzhshjxbjLyiEUPXVyy2CURoLp2Hkw64tZkDdeJehzMfPdgQ",
  "key10": "4yhTwcynhudjr5ihpctNK8Zsh3LLzWG9sSb7HccK5e62FTUvYE8uZ7uDTA67Qui4BAhvCZpAnSZNZEbakvQ7k5SV",
  "key11": "5LEm4TRHisgwnoSojDzt3cYCAWgEh8qictfVLshVRmTSRqVKjMMBkwaMJ5AiGN6v7uBh8ZwhEPaq2mmgBrgTHkyT",
  "key12": "2uNsZTYXSaFTSkt77WYh8vMqi4eWVb5fTJWUVkpXcLCiWqb1ugbBH6LCuPEGA5wqTxNJi8fXNLhYLDcyAH87h3Ag",
  "key13": "qQeJKPnThEFjJbwPhPZagAiC25uUcBAsg2x9BadUbDDxqR2neXv6HNtPofQX2UTN9yV8uQ8cY4G6VcCc2JGmvEo",
  "key14": "5vyny4SQGERSBMMnBcY6sWZ2UQeSXyDWDsxNaHHG79ii9kfgEcahSqYzftBVhukTcxgbjrfGwbn4YZCkLQ9iJc3h",
  "key15": "343czeNPdqDfzL99vzSVwc94nYqScF5Dfm93eXLsSGDHCjRMPjoGbK4XSiAqbQaWs5qwNPurV1K6HCrFMzVmYB6q",
  "key16": "5gevMHR535mHW9KG3tingV7ztptQzYePPVfSyPxwBVw6qxz3yxDxQm4u3rJawRVg6v8xKKutPvbDN6rVvF5C1RGY",
  "key17": "5pKEZBnt931eZYSfYoXMMhqE55AoxApwUhPEf4N67Hrtf8SCFC8p1ncT7kC5eB9L3aNmsqS52iAwo68JCEFmV3F8",
  "key18": "4QSagvVdF5Nve72aJmucDyASYcLZRpdwGhMpPJcQCeeUd6onJSipAJJ4UZ2YJcWmVAZdbCATZ91jjjzdoFZFNjZV",
  "key19": "5tjiNAfaC1QsBYEGTvP9Ck1sNpM32DR2FtksyoxHwTV8HXRAQkxsZpqtWY24q9ZywCzR9xC3Ao73N447iEP1SrHR",
  "key20": "5y33HurVUnHR59D7wDDqgMFBP8L6snDJAnLBrcj8UBpZ6Hnc8RFwYsJUVPMjGpv9bScwR5meDz4m1UBxRi3N1jNK",
  "key21": "61yoSPThSLotBbmtmFniUf7pRL4BSBMUaUoRikS4eCUrERQjS75GRJVJL8wESGz4NSwaaH1hs64ZA84AVZkCnf8E",
  "key22": "28gY8zzwM5MqJHft8aCRVjBBJkzKqiJq2fFtVofRLR3VqX3Gij4p8DhAuPSgho5BT1fwTVGangNW6d48uGvgpwBW",
  "key23": "52s7PC1DjUngex2arA6pgL4KN7cDtk9sftzSRhNK5KuCz93aYZu46MaYHAcy76s9tafBsCzcqofS1CbBnA9teWNx",
  "key24": "YXupfJi7zZEdCWtjd3q8qSfSqLsdbNsSMbA6W2rxH7SezqcGV6iZskXEXZYUWfUW2G3iiqEgHo2hWMc44VywPXh",
  "key25": "baG8ba16F9ErJAS2yaQuTSsbAFAiHDyTC1LayZ9z1EbL73ZpCqfUnWPWQK9AYgnRvfPsB83w9wDMpnW3PjYLiAF",
  "key26": "219oeR8GFtYgGwVNkCs6ktaopjnYC7jjdeCzmBRn2hCsrqd84PZyzY4FghtxkNqhY8kYGo87BFmaaQcKrG9zUKHt",
  "key27": "5J1LTfXCXLYiwfAeJGNUhVbwARCitSisdsSsBPThF5WizAjXqbKVwKYreeAv4yfwzEjpd8ygjFuHaKiv9JCdLZgs",
  "key28": "5VL7uCxs6xongC2qrUgJeiGNZ1bpgRe2vPfqzY5Z2Y8rfE5VFy1zZyhDW3VVSpjuxySeCTywXU3EXZBQBPyYsQxD",
  "key29": "4qi3QNDuMWifpwo5HqHmtZkGsek7qfoaZW6i1ux61LtSLw8BxAqBb1bVUr5zbCpuMtKvUcPHKpkNiPCqBiurqTAy",
  "key30": "2Tkoxz8TkwYVJLiXVD6homguTeE2MWw4Eh9nhCj3TFWBQxSnFFJa2ZNzxHwbgTCQdcJ8DDFvJxVsyetQuNJ6s3Ph",
  "key31": "3kxbM9tKotELXPSVucVs2ABVmJjmMmqnaXNVaRwMBfMp4VMPfcE57vhfinrtuVGQ75Th6hcoUER2Lx7RZHxcefai",
  "key32": "5FHgdngJW51xKTcK59xo7KiRnDYDRw1aNdzdCQ7Zdu4Y1q3UMaGnuLsbP4Akq8pHzHUaiQazy5Da1E4NSCva3J1C",
  "key33": "3Qua6zMJsWp5pWVo5xAGWxH93Z6tP6zrLnV7eQEHfexx1SBiYAUFpm9s6rxcwnnPJTZXBV8cUyps3Z4UtyrHniXp",
  "key34": "52JW7KWw8wd7M8m6qEXL5DdF4ZPw5qNLpGM51hXbpQ7ip7FMKYkiiD5bHHxAboRLRbwyxqYXfEZeWxQKLPQDFVAq",
  "key35": "24rmEwM4wstyJ7y8br4bDra3qqywYHzSzdfcH2CMRAAjhswj4rXdL4QyrL1kMEojGvEkv7uTL6S9sGYV8kaZPy3z",
  "key36": "2xuBANftxJiL3RagQ6WcV4VHm8anX2Ris7puQa2HWadQHHFc8K8UUrNu4UQMnpEnhuP2DgjxdviZs7RGXnu6b5zR",
  "key37": "3VpNKSDj4WmYkTSo6de6J6kHRmz8ENpmaQNqYCXdsbom8vGvgNfLd4PwPrHCptJb2KpwVR8FFQDfS1ufp1Y1mwH6",
  "key38": "3dMAdeXMikvFcyX5ykDarSosJ4NXxfNtzLfoV4Jyxdmqj6C3koaZM7juMqMgWeiVsr5B1sbrqEDDBWeLjCNtq5zK",
  "key39": "2gACL4hQwQfLDN5jpLkM3XBDLRMiX3eyLkL1WBHR1K9gCVLhCuC2FUjyEkguTFPTzGsLjRUSeozHEhU7nBWo8dEc",
  "key40": "331pjkhdiEvt52txvZfbAtLD5K44LKMGB4vFe9E4EpbTmkfNrL7JqEzYaxm56TRrkpQPDLYmnF2LbxWzNX7n9mcb",
  "key41": "45FVDmNniKyPZLSYnURgVWH2StSM6K3mmcnwS7hikYqUqNRwom9dcj52povzez6EnqPhPeL6E9pur2CegZZFN986",
  "key42": "ytjd96cwQhM3CMQq3i12doNFEiRqwz3SPgXUptkSMt6yNZaptNuPNgmXMjSQWJeUZbj8LqNFN5ZD14S3DFvrRPk"
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
