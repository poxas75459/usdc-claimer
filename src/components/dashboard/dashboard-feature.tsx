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
    "63k4m4Up4PJLAL7faLMwmm8UaAtLPkR2xU59PKHVMDNrJ33Xz6sVfzp4ePxJAXQa2cSMw1SeAgoQ8jQ6tTGg8R8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTALbfZSKYfcGGAi6v1nSTaBD11QpxpW9nsdmKw6nbdspMBqhixifsVaSgrBqMhg1qkpt3CZ2QaZZWbfqz5qm1h",
  "key1": "3CWjffbQdyGuhZyVdDoeGw4px3LPnjPFm9uLxxWBbaoZcSamSXpX984RfHbB9iPqAXihVw5aDqtRZ5wQdN1RgNMq",
  "key2": "5SQsnYy8kZvaoaSLTEwRfV8ooma5P4wE34H8SKWA7pGSMqULRS43EeVsocDMmG7SKrf5enLRESmScL64GEfZnJAB",
  "key3": "4gzG6HtzuARrUMSvAaSPd3ukgkFu7Y2KZfKNu62VP2QXboAVNYyzNBruZCmxZuGTKNMbjLYEuY5p5PR1wuPsEZdt",
  "key4": "4EDgAVHMDjh5in8SssC4SZPg4J5pqtCk8RGL1WKcxzpWJ64RqaTZ1cfA6FdTivYzYjtTfbc1dzTybzXDePvkJDBu",
  "key5": "vd5gWUfPX9bxjLPGPkb8vg5U8rzdUx1B3x2R8NCLNfuPRbpcWN27qqksBBWPPAg7wv9tVhfT4K3BznC7WqWX1Qe",
  "key6": "4q4VooS964rSZmnJAf2aiZh1E3CdZRHDR6evsoVvbPgfUTbCBvQ93eAbWnuHzi91bADs8Pf5F1fS4bMxCMjfbjrd",
  "key7": "4RS8M53S4Qq6XahJAr1jz5rmEJ2S9WqY54rpbnuRQN8FcB3j1BHgwrAC7FQE3dJeXSXfzetk7krS2PdbRSNdZLWs",
  "key8": "5uKbhCo32bJw8wq9e17nZ2Whw5AEuLtD7LkQgjv838Neno6bFusY9BYaNymZQEWbEzCX3ov3edB3yQBmnzVzKx2y",
  "key9": "3CnJdPdeY2xMxipoioNYQofRv1PgcbPD7kZrExUkae127NcTrPo9Y8TxUD3c2EL7C9bixGQsQ8rmtRxUQ4kimoG2",
  "key10": "BH83VnXhSz7AJWFu6wZy9TuFXnY5p8r5VkLTVYsJZiTCbEjKFMtF9hNCUrMnb3aVWsHsbsiusNZjM2sb7qjgwU4",
  "key11": "58yC5HcDSXSxqXRAVNPEojNE8otvR2VPiyVgUe1JRvs1kmFMjrRNPkUy1pGu7jCzbXDBfqohV9n8xxiMhTaHddab",
  "key12": "5npBD1uUFKcqzAcvojhpjNV2sQk7G2ZJrwXTZhRtUbWZNCj56RLx1FbhdhkEWGLbZRZP9EACxgCrQFhFXXnqzsxM",
  "key13": "2JeumaVaweE7X8ZGtiR5kNh92Yvoeca5cXd3SzNxpnHKmx5XhDQq82465nD8ZGgVy5kU1bw3xyDAQUEdLXpAen88",
  "key14": "3D7HnPs2prk3BoxNQ2BftAdpoo7cP4AHsN2R81JjR47t1tYo9iuSjuTmPf4bsQQgepgjcgrW6JfheUc9jLhvD4TY",
  "key15": "4VUhHipZyHkmsvoSMtQAxCFeuS5DGmrkKqaA7yafitiM1QYjBSZwGHaqgfvwZs918Z9Jz4mYxGNoa8f9KGVuZ2Aj",
  "key16": "4oE31zZHJREKWEqYSDg3hEEWKSfyqWLBvevfV52ikRw4XgL5848Ri7EnUXeCLgjrKTNT8GupRMGp7Cqcn6ND9jxH",
  "key17": "4Q7HwsbYhVPY9sYsq6rJxYzoLEyzeAcDVxFM37X9xbQD3KGbBmhhpBownJDDsAeHRv3TkCmPMCnxVyLv4L1m2Zyq",
  "key18": "3g2Pzzkeat7u8ByMW64AHPTQCWPca6F5k2FcqFCsL2Yn8inpf157JiRfY7q4Rgp1vZtk745ZjDPjr7492JE8ZNnG",
  "key19": "5UXPguZFCo2YV4rVjyuV91FH9EyGkLNfQH3Jr6CPsfNaCjnpTtpqtRp2mVi6v2WBBpY92WAbizNUCEGER8syDjVR",
  "key20": "4sH8HQ4dgtdSAySzwipYAvpNkwuBrZeoudUVhsCr6sM7WxZLG43R6PRqcCc9g5uPuZSkLAwpzceMiwkpnJkNWWMk",
  "key21": "4yczmQsdcrzMtfvqKqixtNEMK1uYBfb8rN26AL3yALym5DGnK94dYBoqYkk7Kh86CFuASadrcP7sx9V9R4dq8GkP",
  "key22": "3StzXk5ioEKfErwxNjwasdUHNGnqL5Wdttb4sB28sKpVXamzutyBS129uqppQy3gjyXhSdmYGRnucqHjqviWnwTb",
  "key23": "31aBpgbmfqyDo5Ndb28FjfaBjXRAusutGJfKcZxFHpnwpV2Y4e3Vs3qMdp9jZbcYH7CekfvbM8zrYTXgiDv1cepy",
  "key24": "2YrNugCWXURnpaMN7GcrmrGSrhVxKtGskp8GuuCShQz3qzRcSs6iVvkETdaPpwHuqm2k8G1zRw7XZA2z35sXy1tn",
  "key25": "2j341WcAiRSDcUCgECaeYGg57G3FyW6AM1k9u56KkREwC4rmFiboBLsHsn5bM3E3pgEEJsbSg7LLkYKtL9do6DMz",
  "key26": "22gkeqhjafPfPaF6kNxt7eHC2JC2FnQpeq6iErgRZg2iHLvhNuzSNX7gjUBbFQHE3qG31c7bnroRgAraDex2Kbaj",
  "key27": "P3Dx15Xxun8a1je33unGnEauebcpHGab5HQCdjtxgW7yASo3FT3Qh2FhMMNEfHWgWxRQnWsDLWa1FW2EgDXPZwv",
  "key28": "34vgNhJASrS3SrzXDC6P4PiuXp9M8FrALUSjDfVKiCEudnaGtCN5398ZiHtZAK1VfqHPXmMEGUgEqm9HxGmXf3Za",
  "key29": "4EGmSFw8Ey2f3M8PKrqUjkJJWiXsLiehnxNjcaLcUi3pNBzdVMeQSqUZVFvQNxvMsCJSgrw6NtBwpeUZgMg6UExb",
  "key30": "5hF5rK1VNfrfkQqxWiqVzkZYEpTroJxU2T82vH5iZjd9gcHuZAJbLdb8UvT344Z4fD5if16B5QQ6Jbkn6SnMBh1k",
  "key31": "4HHEHK3cBcWpAH2MD4KNvjDUiu9Za5UhSXtSUN2yc88e8cSGnTkjzM9KDDzuLvwRm3PpjpSFDpvk8gdnrjXHgivY",
  "key32": "st7rZ6eTQUqnaWzinyBbFAsqkJwNHAbTrjqKhK43jbrR1n5pGz9CP4GNK4PqNK1Ncs1tBJdxnyYYw9f4v1jzCbj",
  "key33": "573H56YJLgFXqTKR5viqw7uSEnDiVRGPdaD5WNcCESjCeNbnRUQkGnYHhuRGwXqzEkPdi2ewLDKovQNZwBT3oMhJ",
  "key34": "pUZwCnJ91NJDEuZh5eYoiJZv96FCX61PBH58Q4HocX9C6uQynWNsaAvnhMQcobSLWuEpvr7qkuVczXhhrvQHA4c"
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
