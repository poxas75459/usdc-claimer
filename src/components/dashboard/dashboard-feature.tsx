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
    "6UAUoCiQyVFa8XH5eZ4199HAF3B5VdYVGvWVhS37pCEGdHzv6dC6uecAXWHw5Gr4WryfbYQ6TRgASkoTSmZGwmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4peGDEz7tV2Wx5fVhNZAXEaBLco2uJu29ZSwheWCvWMUxHpY2R7dWRdYrN46QjJAkTGZqSfcfrP7cjb5PrKFjoyn",
  "key1": "2ea3SJSjWBLPcNGTMStoy1yGCM4Fe3UrDdY8KVLzWVqZ4bTJpH6nHUgyGR52kJPaeNF2QrzfrMdGR7NSfssXiZab",
  "key2": "4qdXay2QRLM8QH4yRXPtY2PVQLEs1cF682xM414PodGvcpn6yFLKZkaPS4r5dTxeXYJxRV3TVUJcps1zc5Fpsio9",
  "key3": "qpSq8gjTHLT7yhVxHLuAAUnSCTkw87UdFtCY9wH74xEtx8SNV3w8UtspgGnpDav8zsDk1yscgN1tikdxdYd6TxR",
  "key4": "5csWwUyRUv7JwzDn7if6RGrox6BK82Z2puMjzHaarbW1AQ6yBGmW7e9HPXNkj3cnBZuC2eYedE9nEk2JXRApToTU",
  "key5": "4AyXChCvnjByxTCeWJ7WnTrmB4WCjDcHSiJZ3cQYfWPDr8oVCGKp3LGPt2sDJMScAM2FXUypJ3udK4Dx1HwS525z",
  "key6": "37VNpn7A7gZwAkkUwNYA58FTbYjG6ndg4136pMt1nyVuKZv9kTWWFjEtvKiV9pUXzB2179TYpWE7gzM8xwGA27yZ",
  "key7": "4n8xFEZ1wZVUqRkg3Yzm28SjzsKfk5cbKLa4E31hWEkHs8qDEVeqgLVWsbKPBjKobdEMLEyeUkZZH93R61yrjqfA",
  "key8": "4bS2kTowNdoFjfeBVwW4bNr9kCjy3c6eZrR5nY4SCanGcNDAxxjRekX2rp8M1hb2XytRFBX5hwbpYfCX54HhuTeQ",
  "key9": "63R7U6QVzdDYiMfAMpeiYDmTmQ1R7fvEMgdwkkizS4xYgXC3h6ohgyY6mtnBv6oD6sa2dM3RgVcTQG82S3wzHxMV",
  "key10": "KniXJ34pQGms6fpKdAZh4tid9XQdfkhP36Ctb3bf8TXQeb9NCFyn1qHfWn6h96djY2d8tCuMvarJqrbXPrnjCPW",
  "key11": "qHKaxuwhZMcphKwphjScVtJkusFQ6y3cfSLw4QKQcqyv9HwRow1bS7Sf1utpjJ8wsh29nbGPiYzvS6kyNU1ZuDT",
  "key12": "4Xjjqq4tF9dGnR67JSDsiGdTX4GNbg2cUY6VRWU6mb7gEWHbwS8tLuarPD9yQxJe3SnFjbjGST49zThFo3AV8VsU",
  "key13": "39zLZpjv4oTrTQrbEm9ZFp5RAAQ3rmWyxDR2wUWNJ6SCijkhpmTkQLQguYmmt3PTy2Tqi878PzeaaeqSR5LUTy5T",
  "key14": "5g7hgtNikqqhxFFPUQfyg2YJe9NNCsuCoKuLVVYhorvWhVjajDeKMzmtvvLEmqFPkMgvGwsgCYiPPBFDdTqh4sCg",
  "key15": "5YmNPyhdji5NSkAMViXryvdgyLXMxs8WWwCxiwX6zmkYeV2FCyt1KnaoUNnZPPofrHLZUbHTv3fp6F9ixNNRFk8Y",
  "key16": "4Hk7PMgMtTDVZK8UARjPtroeHoRanoSTLxgEKic1LasLbGjSmrRNk4ge7QacqCDiJtkWLQPkVgNC8G4RQATwdU46",
  "key17": "4H4pVWJkyAA8UQjckFGGknkTUTmPDHosXEHRUKjSCE3M6QkrYctCbAJLCo5NBAj7T5uWM8ZytxaonRC86anY7gK4",
  "key18": "2juHrQK6EiuaUHjXTXL7QGvDaHvja5idh4RSu8cevyCeRfJLFo3GHktE7NrkqyxGAJdrnFLFXAq8MHdnMpwf9MvC",
  "key19": "4vy7AmxxtHNzZ2kYrcZiu4FGesiPd2NGPqY64xAVZT94PK9Dt8ZnCHNqXn8EFk4f7rgCg6BDkg9Y6w8kouy2nZ88",
  "key20": "4zhpJghZ392okHFYYrTYMT95PHNWc2UhcsDQCaYvG1uTQPrTtWMyNKujgTowWZRkTxCL2tG9vwG8kgPWv6h8ihsN",
  "key21": "5AdPuyYLjdAj3JQBPihuK3awVNfTnqPgGgSYAJgj15Qqbs4MChrQMYF4oQQAzTdosbGPFSbpgjjx7S6xZx8qwTPd",
  "key22": "3T5bwLjgm98h6wForAW537BA8YCaseCwwkFJNs1egb4z2KR6dJoso9jWG1VjdG4NQpDMRAWr8N1sqFxGL1q9pW2p",
  "key23": "39RHwucvexH4hHvC4e7oSHbGTy2m9a5tBFdLkQdCNFgGW7wuMnGKQF7NCqbEFYuWYWGMtWkdg4J37oHKCpy8FKsY",
  "key24": "5o3ZFNdkNQsXVs1Cqj73T9ucMDxk6jK4KdJSu16zei1TjGuqckNNYM3ZKrKk786w1JSKmhNi8epMijqjgTbWwZ61",
  "key25": "4nfyyv5PgYqBSZcWmKxgE8WLn5htR4ZcMbfUnyGDv3TU16bgLiqFMNaAirmgdHVo93y6tgHj9NTEDrSQoMba3Kqw",
  "key26": "4rXjZPbqvcKyMDpoJ67fP4ZdX3MhJSQtNKtiMs49stPkppoomRiSZr6ZH4ZJrPgfsUB9MByxZowpUaFgFWzonTsh",
  "key27": "2JNSRm1pUxHGQA9s8Bv3Yg9mVrBLkaaHRN22t2exKZMUhJGCXSCviktvaRDMicLSpF5VXzTADe9LKdWhphJv6oMo",
  "key28": "PM6PJ8uth9C58N8XdrBgs2xG7tTBBDNQYXid9w5z36urLurLJ5dWT9pXRTKtbVgP1VF9Z2d3FiNdUhvvvBjWQ7j",
  "key29": "941DoR1T7mEJRB4n7Sw8zXKEvTu8b64N166kANDXSQomnqaZWsork9i5r7fqDnHcsE8oqqkoEhC53Aams8ERTzH",
  "key30": "58upsYMpbNJPVdk1s8ukgKB6R2rABYkJhrBXEm3J3rgdhGzrGqMCzPcwFb4dEUGxfphZLrLfrcEnDyYiBSRX2F2m"
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
