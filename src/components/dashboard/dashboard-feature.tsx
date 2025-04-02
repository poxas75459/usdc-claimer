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
    "2kcjKV28tVZjn9NSwnS27TkUGimJMKDKpCmxyvXG4yWjDcpiYtQjU1oZpEUqLM31LMZewrNoe8EPskfEf49n26LH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RsP9iuJWg4mZa1UcwhzuAvzECRzThxd2FHnR7ot25DATYpNvdqHu6ACAVBPnPVnBPAHC3kSQn986tMbZ2EQAapC",
  "key1": "dsSVDtjyR2AY1tqC3snWMaTYJ9uyG7vLvcmUdxmoyyPGKCAMdtd2T2fpsQ6nDUVFJJYQ6WV2sebdmNfCmThp3aA",
  "key2": "3KTeRbAoaNrhm2jFerteKvAUU7MWRqLHfAFqPuCb8XSCT6rxP3zan2guA2A31zzGwrsdDnFQszEAUsCCNW8bo7Bf",
  "key3": "5zUb2KWEkymPDYnCZy7gHnHGPaiSHjT35bwQFTwgRJEhrH4WVSS1u9zST8g9ujM1x1FE3HPrfTBcSqPJkz4jsnvY",
  "key4": "4n8yTHxbzhmDwHrKsPsBZJ2KVS8r8Z83wzwe6bdcgTTzqwuPxyf2kpdCWxXmyQr5zXjT54awdfAvvCS8EzHUqypD",
  "key5": "3ekNfkWLo3B2oWTBtTamuzi2Pbcg3ruSEAM6KcKH71JSHsD74T4ZwuUipjX1Yto49uUoA77xyajTNUjLevMMH5rp",
  "key6": "hdn5XMy5REQBifS5h2bg9EhTwbTgugZpuRxnhpXcRVs72CUMgHGLVsRuBxkbUUSiVgGL5FLN2aSmPBwSh64y3WZ",
  "key7": "2E92qwD5hQTmqmW5ET8mA82ZfUTnfMbdhmvS1NxMtSXybapqXYGrpoTcSzY3WpC58gRjm8QKzyuPSkmCjpmLNMow",
  "key8": "22uSFSrg7vtYFKSLuEo9uCame17SbrpYYasYV6k3Y9Vv8gL2UxbXBtzh3PLNuHF2kp2wpcV3V2QA71GEQj6W59tZ",
  "key9": "63i2MRKaJTx8BpFe2QTmuorHSp2hgjSP8uCz3hu4c8EZ2LFtUxHnfiz3DdjBCkRa4DoYr2KMXdVBSCXMnL4KK2Wy",
  "key10": "4ehP4adrgdA7tW7A9RgFnfFUSiUoeiUUWH8NrywN3hLd6xS1F75XtWdSUV1bBoJDRhAd1jMjhFZrwZHDHHoR9Z1Z",
  "key11": "5Bn35H7fAVgoZDs1m5pkkpt9pK7M4nQjiZFBNjW86XXx8vxmB4LAJCkzdSGQPLzcZzyXsEFxib3Fxe2NyjyaSSYs",
  "key12": "2bNZ1q8aHQYsMZqDSxZcxruk2PcWDptgQAH7jSh76JtXraxrBZfojFUdFURNRR4AmVF2qT6cgcU3QKggvWE6BTXh",
  "key13": "gYWdg4tVBEkCnwFvMgnBKtGqQuhhz8ffbbmdquAFvh7jhdzYN92HutSKKDBrgn4pGrbjijXGTbpdQDHBbSKN36g",
  "key14": "4NLT4p1TaSZqsN1oR9ai6hN6R5MH4wvud9cVfjDC2vitn1aUhK3Lz2Vm1CQe7XZqFHK9XDRnDkxLdFRbymabh2LL",
  "key15": "26DeWwivs2emyyWe4FiJqq8wKNjUupwKaQuRAn4SaXvJQKFWMuPCnnLYSgqCrRAz1r2U62yBU3Yxar443jFTbu5k",
  "key16": "5VRn6A7zB5HyEqwepKgWo7CpduWxBaTi7vLULD4hkT5ZUP5w78mQ5ww9sYRxFtWCrBCmdb8MAAASwvuDWiSBLV7S",
  "key17": "5qdL3V6WkopkuqJFLFniH3kxCEkxotdY7PSUy7CpE58d9gWJhx5htsedLR2KofmoxCGcFMLzSQf85nhJcZUm4zKq",
  "key18": "3M3uzj6L2YqgJyMX7mhQtYRz4kYQpvFQHKuGRPWPs1ta4a7EuorvcsYPgY9hgvXNiLSAVoxSqsDoSdNWCXurDYmM",
  "key19": "5GYHEBjMwBDkxtyn6YnJGRyuFHcpwuJH6u9NMCVniGvuZDUmwFUhcMfsjVTAgSbaWJ5ckkTeSQ7kEdwS9rvCoyUP",
  "key20": "63rdoRm9qEW4uWjmFMD6jYE5E5JFbMQm3jNx2AucbwaimXxEJcNjcqqXDfDJiH6f19ewWXp2Aiiz2mNAFX9DHNKr",
  "key21": "brBYqRaiPf2oWgxPopCRdx62ZRTP29uYcSd9zGKRW43m1fDPnCAHJohQ6WNBgh3tYJSxDPjHbAL9KNdr7BbPXK3",
  "key22": "2kkXj4diTbtS83ynfCsSztZAXRgVvAqvUmVFnmkMPEkxviKVtFRfv3RnLsoePBQ5xUe1AcUEYwmb82SaNdZviBpZ",
  "key23": "uct9o9xusQ6T6PsddvGtQW13W2YJdyDauWh7vt8h4Uz3ArMBvn3hJjiCJ1jQkef4sVxpmLRgdJZCW5oaixsVc7S",
  "key24": "2Su5af47PmajG5kB2TXqxvkNzBBQ5f7HCYrv3eF1FyXwwZ4WmWvqHhdzCdkhyXvPuTm2vPnoAgdJeqCvpKgDPLzU",
  "key25": "2zxsNZM5AwP8Lq8UnK1VQq28vmWsSLqZu5vtbiVtPkgoG6gJoeRq36qakGL1zqmRmk8hYnf1QjDx17rJV2we77Uq",
  "key26": "3U5BiCdbYQhpN2XXSDYU66JMykmqB4Spp6VExwcAZSvWAyuJ8AqbBTBRHu95H6uvo1hgQ9Pj3Rf6b8cC7VZCzZKq",
  "key27": "5aKjKH7a7frrkh261bufdsDPDF7gt6nzx98ovqFJafQa7t8ycYVB7VAWUMhcFupRwxRiWbdm1yZbid3eETqWQC16",
  "key28": "5ePQvCN1L7NzQ7vogu6tvUjYrQkUHo9rTbURtsW8yNuDCyRR1FGfnUrD8cTmz2SJpMdNcqF7mbxyhmTBcTtRo6vG",
  "key29": "gHuvYZjFaH6h2rQyQ87RBye3YmScwjSsPoMiAGgfNgN8EK6EyjmXGddGga1M335mHjm92oymwQ5TQ58Qh4eDLHH"
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
