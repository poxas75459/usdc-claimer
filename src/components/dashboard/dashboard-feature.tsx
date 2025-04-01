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
    "5NM8o2bc6uuEXHChZMyRTuNRs6rPB3fJgCaVfZ4UGGRmt2JafbTPgZo9zXWuSC6MfiVMGTazYU2kVBtKfArU3tTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHGB4rcAj9XaLfFW4uaLdorKpyT2baNmVVBLm44P5zhnoobwYV2yQQDrYsAjrdMHNRWD6dYQTqvNiigRMiJRpts",
  "key1": "32RkGiCGWvdsdqnJcsKbkxYt2gDYcessQ5M65PScVbvRDXmFyf6ZCVXFbnj52WDMmp8rR2Mj66ETVhdTTPh34eTR",
  "key2": "4TXdFVxPKk7CzQ9CWz1SeSJvoew1C64YqXCtYvEixqb9cTVe3CKnR5Bq4LoHrnkRzjSNfZXaN4SN2ocm33ZvStUu",
  "key3": "5MN2Zry5WdVXRnMxgVR9QA5skun5isCSX5wJu4PbFeERzKNn1ToXszFFFHEFf3h4Hq9bfrTUfYzWYv5b4TveiwDF",
  "key4": "5JbCXZnobfyafKp8RamrwNWipmuDZLJdnS5aZpiMGLiEbjNsyFT5SNaGVuoq3cyC1K76kS8ZhD9j3JbwqCTkHyWA",
  "key5": "4xYigVh2ryNsVNYKkn4NDXoVnNdayVmJj8Z75MbmjytJ6Y9zqbKBwRN3nAu5rDadT8M6oDZLLwRPp4aJyEX5w78J",
  "key6": "2V8wPhxTTvjbWskgbxmMYMdAqjqdz42JH7wN4uhuwaiki6ecY8PHmy5g7ZBprMLa6ryrZywiPh6EMJdFYAHUcJi2",
  "key7": "3gYUAMwpM8ZqDEmdxF4h2R3eeRohR6EMZ7LSjydRgKqRwkywaKUFdEjJiCouNcJeSbrBX3SEKWkqPLb22nj5x4Wt",
  "key8": "yyJ3LeMGEdLgBmDdwGmsZzHWcyqbZJ8u9M6zQAcx6txNEGevCrSKXD58hHMg8pmP86Z74imxGQcKyDQz91UcnET",
  "key9": "5L6FyNX8J9Vz9NojGuzSL46R6Nawd91LXFBhxjvqdUXnQ2Mkpq9R4yRCRJtP9Q9hXocH3prq1FAjeqz8W9CcyTJw",
  "key10": "28cSd2b66YHyAgmNCFJmNTwE8UmpF7ybhrdEwBDPT6TXfkTi8xb9fLR7TUyqLkyJySqvGjfWiDAS3a1Xx8H6nA1R",
  "key11": "21Ry9PwA1kT3oJsYfPom24YmJTSXKYhGoTtkgNnHyGqnoNjjGqKcMi7rZkqwMmPWYm2xXdcg9oVesbEY2CAPwtDM",
  "key12": "4T32U2EYRihHq7ug7j4WFcJc1b5BkX8HuvwKxGuTzvBQghMoUU2V3YKn3DZZ9zvkMpdTW76b6wmeKW6fwJB8VTor",
  "key13": "44k2ZbVZ4EsCDqestQr4PNACRX7itcZjmYUPhExywDoRbKbYFC4sDQRQyS8JPt3iz6KdimukiqHHSweu2zxL678d",
  "key14": "39Ht38dzC1FL4Tze4rHnBTT8BnxYs6B6kEDDXijp9cCdYhZpHE3WhpHM6MLx1yrvQtfRk1J12VWH7FTkYktQ5ASY",
  "key15": "x8735cyNRDDSHexd9dEc9ZcdLoHatf1UMmXJpEEefy1xHmJZYeonfwkDNCpLfFPpskLjaPQ9bQ65RhXevRmqHGs",
  "key16": "39GaQbFNTcFhBb62MUo2Gu6XEvWQQe9WHLJcKKPBLJpsPkBr6sggUSLVfnh6uFvCKGLG12CvfgfkWsxfVZWH4iVT",
  "key17": "21DKecgXWQDqNYnt1QLWokfvhPJFSeRi5y73sKdks5jBYrzsvavkamg6kUvvaf1Uzbc3FMgDhYoCwvRQtAGPwwRH",
  "key18": "2FPw4sTxDWo1RXvw1zSKthErTw7T3hqtT3Z6wdZP6CgrRQ8WfZgrSchvyhNPrMnuCV7ETFqE8R8MN72HTWgFgzkn",
  "key19": "57ZfMQoDYVijhqKVJvwfpNwkuUEGXr2cTYoeeKsnWna9D2QvLubfoD2fRnhdSU2QJEhS7KAHyjKd9WQWkCA9DxRb",
  "key20": "GsgSYSNctRyubDZQYUZbfNoTdKKu85LgNcJWTbMk5p6Sj9vkPHi9bHv5SQ63W2X4p9n5kn5cfM62DeBBWSSW56A",
  "key21": "33pdyxHD7fvVxxxHxFjjUGgsTMk29UPb8m6ztp1KG7XdW7UN2mUhi3BFAicSPs7Fiz9cur5W4AxjB3vPedu5vjFc",
  "key22": "4mRS192rvKjP9RLcyEzQU2uWjxXYqJLJLRn97EQJbH5X4cAP9gax4Aw9gBk76dsdvUBZCHuH5xcNuphZA69V7Zwx",
  "key23": "46soMCpPbjd5FErLR1jg9RfSw2bVLWVXtkkS3vUg9JntyL7ZWwUpkGgxabDhMaEbcvgq7kM2KC1noJo7guqi2m6W",
  "key24": "3XLoaqX4duoEL9SUf4JN5w6Gpq7Qkp8ALos81YSeP9hnh7Kn8gc8bedaXvX1So9yKiiedgwerDdFhPjBUwgRAHri",
  "key25": "5MMLNsJcQ2npvDKhuwKuRBDB8apcQJkSAG7Fkb2WDWU14LTfS1aHmzqMq2QaDQc6FTqFCkVoHVSDugkqDejRSoev",
  "key26": "391E8nbkon4XSSvTE2V7uaac3MhgBJic1qAffuztUh42V16q5iib3Fbm4tF8LATAHS6ELnsMywFZsg9fKmpc6TGZ",
  "key27": "2D2BopWGunWUAcy37WcR9AwEsNmNQMohq5x6uiiYEx18naFfzfDhzJjUPh2Q6jp3tfNHSUqAJWXhEiAv4zM4onrs",
  "key28": "2LGCpkgwfPde3yFfiLvcDY3RpKxg3qP2BUeju7CVdKeWrBn2TLyxuXtz6P4rsgyzoxU3vnqMsv173bYWr4wP2fMN",
  "key29": "2AsfB2qxnDXgJhbG7agdcF3Pnhwo7BBKXgBWV84QAHYnTR5kfGAUg6hASYCW6KrCHVvpi3z5v2XNdLi9Nn5eWejH",
  "key30": "5wyaFGRHT9b8TqgYx2Bg4M92WrEzqd81f8DZtgjoFD5vdAtKXDh6E52MijxY68YBA7B7edanvZChiwQTEyifLGWS",
  "key31": "5SZqvcDvrLX2Gc2GJLoHCJZk5AvUvU8aAudKDmGqtwnz8Hmri8yrrZRyuRQSpnwr8Y6Kk2Qj21VTphR1mHW69vRR",
  "key32": "54XLJG7sk6JvKqekBR3tTqni7FjxSwDu7YdqA6vkhR2bib7Sx5Lz1FJgMJG9dkSWaz5aQsi4m6HXqSKW3p1gLk1a",
  "key33": "3hy3V8b3NXpPohnFV7FkmUPFACPQxZC1dGo3xbKkKz42viB3Af8C7gNiwquPfY1xZ6A2TNS7UNwXVpZD6DZhUA8Q",
  "key34": "5k3mBZ8NGX87qMicNbu2jQYxHJm2kuZF7wVuopdDKLY89Z47nqgj6B7QgzyN3dP194W47cndZgojmY8HuaS4P9Jx",
  "key35": "2C6P4e74Fmm3LhKPPgEZA6YAAUqtuCgdxNatswZ6GWxcBC775YApVXfcJVmSkWECfkdNtsG4BNdyEVEDK516aULp",
  "key36": "4JH6hw352y6rpmLEpMG3d6bf4QBwqfNYDSwh9VeETeT3dwqa3b8RS9SdY3JyVm24tSJZvJdoL6b27v38HQorWino",
  "key37": "2B8yNCmXAjZSg94fXF6xfXhBrshfMqg7aUL3wGNyWfHzhR3kFYCjUtkCJzkvLXpwAi3K5KV5Fiz4hNXyg5gzqatn",
  "key38": "5XMq29jGSzuTS2CSADBvMWiM4NEyKMVCZGZNE11N7irNFLeaFnuHwgzqFF5JNRqntBy4Xn97JfqGLYZgNqEPDkeF"
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
