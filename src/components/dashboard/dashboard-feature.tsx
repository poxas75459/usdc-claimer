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
    "eHKRHMZfRNmnwGGxzh19BRGet5QNcgh3zDrWnqHufL5ktimZB4pAS7RWBW3wHPsaddxLfbsbARXQp3FwDpThSZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hz3LtyAwgUCGrustpzWTXCfmU4WJfqNcrUynStXyzVedAXLgFkyKGszFZxXMcbkUTYnLgSkm6wP2rp3wnhZstPH",
  "key1": "4cBfd6som8fEeWahrHcTqcqTRfTJSweofSP54JbFyzBc4AhCxcmNNTfubhEjLTS5FmkXu26Z3N9KMt3LjDAxYYHV",
  "key2": "56rfph7kEPh1WWdAQSTgxWsSMBk7Ki3wRjTKaPPVUcJkQ9et9xAjVrYCykagBVNMZFUu9GoLC3E4E6vHxmxShfDk",
  "key3": "5YHg9mK8tGTB7mFPSumd7kmBStU5JNZ1SFND6QQYhe59iZZroQ37WVkytbskvX9TTb5HWULVpCucV1gBCnGEpcBX",
  "key4": "36kBXYLm2tWKugb6yRYVp3GTwAvvjLvKHzmhqSEVDdYY4gxL6KqxFQHpNHozWD2BY9FGuW3XTJMyWmcSbNgTMSnL",
  "key5": "5RsBhi2iyuv2q16qiKJCjorVpBAw9sogjAHpdPauyK332s3iTedbpddLx1W474SHNRZ5ek66iiEAWqpfmamxYX74",
  "key6": "4SE1u5Jf2uovwayCudd1tZx2EcfiBDV2Sm8fpNmPSFPXSrasLQuxzWA43cvfm9K27rTWdpKYbgkGvtVNztBcXbiH",
  "key7": "4HUShwhRJVzDPECFQk96tkt31rR4gYrVuGUUHJ37G1mvjDJNb86RE2J6wzybk5XCpcVUxQhgVf3Sc8BriyjKEzm3",
  "key8": "3BiHVK1EwvtEqrwjGWWFsvChoHVStCqDjepooGfhcbBgA6GQE2kTr9GtKrmEGkef8RMFHxRGijwSigyVpQbkkjQN",
  "key9": "63JLA83fyCfVM7GBLbAXw2kXGfmch773yZtkf6W9xFrinXiATCy3jtsM6RS78nfm8TxWPxk55wgtbnsorr5kqTkv",
  "key10": "5f8wW5qGuoZGXyL6wGe9vrWaQXadhKfcGck58nTXVYzNXv9yoUTxwH728grN1rAtCGZno7X5QejPQAingneDwwxY",
  "key11": "a2UEyGC9C2cNSN37P2kjJuSpYb165v886CSm4SfjQbevpj4sAXD624yMEJWc7cTkJNkaUBMmaawzpTgXqCj6Sp1",
  "key12": "5Lo79dXQEoPU8kykFZoW6DZimcrB3nfjHN3Ch5xv4KMxCLExLaLmuuVSDXFuD5fcd8NDJtYboyU7b4hFsTL3JkEu",
  "key13": "4qwGzBhexAYs3JsPoykDkbpxG9WwxtHWxRXq8cevwztmVgpJ2fUH5mHcCmof8EVcWeAvvduLRHNQAeYdHzKPRKgm",
  "key14": "uvqHBkZgVaBjX5RTgJ2Fma3aZp6TDvuF2cxiHmYXYUPjoZqtw61n8iDerLPpStycDWR49fUEQWCUFp4X49ZkvrW",
  "key15": "4tohUnwcdQPYxUiESpbjzKFPpXwzxspduzKudvvFdcbTmvNavkcLVKr1z3goksBRyJssAd1TrNtq1St8ZXFjnGbb",
  "key16": "f3CH52XhAWo8XCW2oZz9Uy2yz8XXsEsGkpGDbYw9NwPdw4NQJah26D9JncrGVUEGaRiaChaBZMWGUuiK1KqvvwN",
  "key17": "5insGJpX2V7i9YgbVZY2E26VFUce4kZyqTuWiugpEiUZest7jSpqbCwNvcA33DF65PpBLjcz1pVZ7oV8CzG3Lxao",
  "key18": "ozeWzv8fpj1HrFH1XhtMooomUxzZWQMVi4c2wa51bu7r8XmPF2uLAXyD82GMQfQwFcfSgQFC7exCUJaqLB3yqYM",
  "key19": "2xC5oyfvzPmE4enrz5HrqgtseKyDNBd4j7VK1jjbyh5iVAwADo13mS3DFBf7zCoxstZ2mJAjaQFduYEbuRRkmBg9",
  "key20": "2xRRVJBZjQ7ymUqsjM3CYgA577zLwpAfTrooNsgo8BaffpL32zSUG7y8KZMdNtX1YfZFu1dbjKMLG65bX184iWnK",
  "key21": "wTCjsGzNi1XbKzy2doyjGUzLBBkGdHGFGTrTWJuGEN5GBnDdn5fY548BjYBtKAekq5RZxmPXi6sGMtXMpC9RJn6",
  "key22": "4QvyNQ7RpsK4Pb9W1esADbYSJRz5qHGkQyR7gY982UmsjjK1PuXSWnqsppBssNBCWRjJuGmkN29qdsf9BCyTDsje",
  "key23": "4FophRiuE5vfrwufMkqJ52jdgXBUwtVFU1SSy6P8MiW2GPbSVWxKTF6EeNeLz1ncrKRee5NUYkjgA9xStXq7CT72",
  "key24": "whjyx1pgF5hyM2VDuo9iEQ5doncPCcrq8MQe1oNoi7NvRDDtLnpjfZx2Km5JmEbsDp7f1kioTqSUDEyZd58Ekn1",
  "key25": "4hHX3xoy1P2dUHgRvUyM4guiciSGYAQcwpiEFm5hgbbbyrunLTsu9FqWyE6pPxSdXth8Z34qXXS2zZgwYHAQU54n",
  "key26": "3ego9JzbsUeiRBaNcA7RhAxdu8Mrs7U3BziiQri9t4vgvPMzB19Rvdg6ovrN51UuzVHKBu6PyZDp9H1Vesbw61e6",
  "key27": "aSqMndVNekXLjejYh9kRNstKszbWiokH2JjN8S4fuuaJZF7gxd31qvF6PUZJGxrMX7WAKqaL7avABY1KMbTNHCJ",
  "key28": "5dVt7LcGvct4971vbMASGuPNGQLKMhYfPETSjX5xD7hiy4N9HJH7qFX1JC3T9bNHuSfjQx53gB22fDedt8WGaMFt",
  "key29": "2SuGZSGsJFkecS9oikc21cw9LZx4zC3STE94bEwuD6MBToMkPqFiDsLeqfcq3mW7TgjyQj2HHk5ytJ3ZhPZ8zcFK",
  "key30": "5BTpp8so9MdqCvmSd1etJh3VfEFMqFiFTtQguVhbVaCR6mAXaJ2pwXUxmNt2JycFmWNN3yQg7DRN3Np5Ba9eBhmS",
  "key31": "sUVMFf9kM3rZ5FzMwLwvKJQowaWF785fFwo1t2f5PFTcdrL2hPMh8BeN9AZnEtMGNhQaFJJu2hAVsjcmy4EKLYt",
  "key32": "5FqP4b5Vj7K7yrP414FfSyJtXec8f6oBqNxhnxm6B492V86dRp33e8i6UubDvYegR37iqLnxjWRmrPjwunanMxug",
  "key33": "6iAsyjQVLWamotv8CuyyLGqGy4FY3py8pdtHF2nrTY639pmACBs47k3DgKNYuyC92K32QhayoiA4Bj1CWe5K533",
  "key34": "3xMYpi6cvZyJMsznDU5pw5PifPxDvVQdNoc5zgYP3WDzRgmNevbfEsopEBTqKuJZguyBfTFNbazzUq2uY6PaULjh",
  "key35": "3cr22NemXzpLSNWjHT1c6XiZ12HQ3X7LRHfhYBDAMdP4yz7FPQuuPPQGc5CubLxvj98cv1nh2UB6dMrWDyqeHFxk",
  "key36": "3f8jvXCq1EGhkAs8eV6o1izLABY9UNggjP6npmBvG5H5HUAa2M8emDfCoByEG7J4oit458WyVuAPZCzr6z7m7u9A",
  "key37": "23E3ArZD2ckgGTTkaCP1yHFZDisRfMmntm9YQZzjmvbYSdWyrcrS2w67zByhxawoYLHYYTKazuv2RwaLNJjuySjR",
  "key38": "2qjbbcbkhmppDtd1R7mxCWU5gRiVh1EPJiqtUWpjSKsG5FoaJ3eXdURHrR4vh4UjWkdt4L5efqxPdRh2C3kGdSgq",
  "key39": "5iSw1uYbm4CuwCnMNzo9GWDxgbLPzWiu9rjt5JHX7JmcpcRJUfGJZe84HBsix7CNTUP4QZuSQqabMiW1hvKvjS4M",
  "key40": "5zBRDwzdpzZLGechAHZatU2VLMpAFTrNp44hnMqYJp4kzEp9sea2xunkuBa5LCwFXeHKMk8iiQGGyaMXpak72E65",
  "key41": "2X2TgTq5HP3W4zc1tVghj1kVcJkpenUjP69QvAtCyYYB1Bf9rJD7EwjxkbPnxa8h68cmg4ue7Uc7iSdyzm4kCWWM",
  "key42": "4WnkGoReZKcxf7dkGSZJLYUiDVkJU1KTGxqz6FBCn8CZ43FqH68wS6Wej4Moe2AmsiJ53WFqUkJxFkFUwJcE4NR8",
  "key43": "J4uSLxDk35nmv2xD3AYM1AHxL5Gje2ftabsCp2aJDoxMeCKK4MYFwPU7v7aGFjy6hsK3XGV7S2w3ZFBJ7HGrne8",
  "key44": "29D52KodBcys5obGykrrYpbSLw3GcafwSx7HNtUzLmgynPJWuA5CURueCx3a2YZ8g4jnJsvwf5epPxd2dCkrhdMk",
  "key45": "ecebxL8qSotrAXP2AaDKXSFvbz57oQyu8RdhaDY9QMeKDMyQev8nUbucqngEmdJ2VeMyW27sobn82mV3bjR44XE",
  "key46": "4G9zXcDdhxhPYaYi2TVxFgWNnAvKeEzMSBG5zmJa9PGYzrsAYZex8KQQh1uCH96JwkomVVVr3uyiFyUaWU6qCzV1",
  "key47": "35WxLzk8rXUqXPzAwYQ86Mz11KDyD1LXWvQVFi3NZNonBVWZjVfCAvFGogf24myNhkp5AfQVXuVZwNTeiFHsHqQ9",
  "key48": "5An45ztrnYZBLzXdUtwKmtgtFFq5kg6LQ1wZHZY1HwWvwQsoDCbCRRXBeXCVbKtxZuKQrQopSSDqTdtDEGVSovF2",
  "key49": "3i4kxT1epZpw6EHELTDTpxHeT4HGecEt1jyvwvqTz1EjaRk2ynnWmCR6uoKrUxiFCsP2fGyAdWTEgzzMfAmJj8tH"
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
