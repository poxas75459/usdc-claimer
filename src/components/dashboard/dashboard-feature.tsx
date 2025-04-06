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
    "5vQacZy6nCq8Xy2ptmA11nQiStFEpFgnhkRV8RPfhZHjJSA8G1EEjgMGMPZEpYKiF9fy1ikuG2DkHMsu8gUcwFc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92tWBjuYNZV2wne4pGm7cfRbKWFF5bihUM5eTPfHuGaz5p3woRAt1VaQEDCFabPSUmeqjJ8c2WhtwhN4Xhg21sz",
  "key1": "3GHtVqpifZts5YQ7HyXgfX44CmcYJoJ5ccLcufAcZ6jAz7cmi1cnFYWoW1t7e7tUgM3DR8K7iC2d6LXACjm5noZn",
  "key2": "4HZN4TtancPAfqK6gt7r7ZxBT665mFcxTGMRAS4bm1DVPNKMkGAnyFnnbt1YcDHwBR92pD7ubooLvvbbxy7MtkrG",
  "key3": "XuS3K6LbpBfP2RGDTRCnxGntMo52FxeJNwQgnecDBM1GAq6GDUd6xjx5NrXniwN12KTCgFSLsNupkuEWeHraguo",
  "key4": "4Z1SKMykPieY4uPH4Ans1XotXX8tVg8w6VjftMhpE4P8H5qfKJSYHK2zrAKDjDsfnNU2Y4LMqMvYirnzLFDTGw4d",
  "key5": "55jNTcY7PznYK1PJPyyeZ36BmUGSL2wXV5yw51dr2mEgBvTKK19XxCiARvDF6QRPqTFtmqFtNxdmsrvMxmp5r4eh",
  "key6": "2gytiofQZ6GaiWCfPt3XLP16oJsdgDuuhwLBcLRFijEYemqMey9yrqCDKRsazrKzcAuNGuMra6vpo6xVATSK38Vj",
  "key7": "2GqS5vQ2AWozMcqrLe1XrW4JfGxvxgFGvssAPD2hssU5YWJznvgNEx3hHGKqCrEuzKR7GKhUaqu3ujbUD5ANZAjs",
  "key8": "54wAi1m5atsECGNTV9Aa5u9695SxRF3ytA2ckvhXzyeCF63DiwF4YkMsqz4XDUGUGGhFvswsCdF4NFBE2ghWsh6c",
  "key9": "4iQSCDUanGPJTaav3Fsqpv6BbrX43g8eyR5j6jqc6L25M7g4g63pJ6PnYEmZnd2pdyfLyCBsHJ3dEVc1HNq8rzSE",
  "key10": "XFTBmjdAnjLYV4j7seTm3HVCMVq4njRfzJ43TZZVfu6zoS4HCKqN4JNXaEURyaD45fFUH8jGVum7qztyfaTV7zU",
  "key11": "31gCduhhujdm4qPY4wsr1Wp238QLankqtzMr9WjZJeK7M1nUPwZxCukWeP3XcWErsL6FLf2qbRkHQ76bE3VM2dv1",
  "key12": "5kh5Sobi7QXadhBhqtdJVuno2pSptj3V48mVW9scVP4NaBEupxit4jfSvFvABd3i78cL6N4t33AbqoV8nCA8Cfch",
  "key13": "Ma8HhteWLJXgHcXmkDNbHGUcQxfN2s85FdMWbDQ8ZKMnwEUHZ4mh7h7Hgbok7RCyPMmujmw7QwGGGTXpK6dLjB5",
  "key14": "3okxYEk96Wr4awAeGpVGYKhbNog4G6kJuyex6WBfPKfkepNcpy66YPYBYSm478RbiKGZ4A4gu4CoiRarg5PUXEo7",
  "key15": "4wP6gnoftEYx7VpvVX6zDB9u7S4zAWncs4CYeceFYUqGpKT9KV3ATsD5sMJk9C8LinKNGxm1oy5gNh6JhjaTW4Ct",
  "key16": "4sXEviz5rm2Eiodp9o4WRjPkd3XNN9h5tann83cj9nfobkghaufxf13QvTCGWnjdv48wWZV7PGBQdEMqQRvjwas5",
  "key17": "3Lhkqro8X1w12HxviFpA8JdxtTkjyDxfAuN7qk8MFqmcfEd1U6peARFRAivRt77iAf6E8bRH1vRYhNvBWCuo4YdQ",
  "key18": "2347nfkqva4zJcTE7KPcn3RGRtTtCvzUwEH7DVvfrtrTw4eJYy66FJfiNRb3U6i4zWC6Ti5Kax1TQdCQnu1tAaka",
  "key19": "2XLxynVmqCL9J9CeLfbMnpkb2rf9JWJLjUKa6tpJjcNRK72nRfKmB3BdHnTmU4GZk6ZigvQahpCu4XD9gvVE5Z55",
  "key20": "8STuMom64nMGX7FYu11vuWFQb9JV71SBiHYyziirh4yCx1hWMx3ttLEtGzBKPNs9Qdah9qQuiHQN1WCW6ZJsFw7",
  "key21": "5SF8nyrT1By1q2B71S9XvxZ4rvW6bsRK7YjAz8KNqpA2NwHfpAPZ2UYx7bEx2kNnwdaiPgbLoZzs3icPFUnpKCYU",
  "key22": "4uZhwRtbHhYZgqMik2o2zPWDQSLQ8cYpVQWYxSDUr8HQan2HK6mK2F7qdVut6KqzDfixRjkSHRJsw8Jux4Zp6nn4",
  "key23": "5D6sWBxUoK7NBGaa2wFxpGBUQrurxeMBtmmV6vchYrcqyTa4FcoVxuXPjf8gAFhshVgcjRsfpVDGpTV4H2DQ1YvH",
  "key24": "2A59VZei46Qey1UhscA35MbhzXSuDD3ywuodH4MG6qBt2navvu3EdeHFiLPp1mQNKwN8qgdE4KK1RuF93f1faHLo",
  "key25": "5S2vJwxytEaKikoEa4Vz2ybTReQG3QQwM8T5hVxQ71iDdhT4J7dCimj1SWiT6PrGkfLkvfFpovh2fdP7SeVxWpXS",
  "key26": "44umYrLX6YK85RfaHqU47AJs8f2VeevS83PMdfjTqLexkqn3ScPCCzZGTQCjfFdKf2xnKr6SFNYRYmQ9RSmR9Es9",
  "key27": "gBuH2ewFbMHF9pp96FP4CdwEKyjpnw7eSspxD3GHJA8HkpEUEWPc4rdoRkSRg9c5WTpPpvzzTZ97eitseQAb61V",
  "key28": "2nNH77p2zpKvxwmvt14F2AuTPMwMLZ1AyDXb5WXubFxVzDTj59jEryDUSgMvGRctsu8wXyWFebachMt4hZ1drC8P"
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
