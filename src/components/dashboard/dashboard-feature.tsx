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
    "3BxFdDeM5Rst25vSGfr9aDqmTNzyfwmnYMMVbhYbHqptSSg4S6ZfftfcK8pPSXHrj3QXDbGc56YpEeUqqYVzaXno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLt7WVpL7zdU4mwe7ceBrNUjKSN3AAg7kdGbWiPZeW5LmW8aKAzpCunyPaVppR6hGWf7tGKt7VY5USK6AZVgm4J",
  "key1": "4ViFsgCCNjthSyXyQR5qZRm5F7sdMAjYeor8dJT8tCxJaaQuDZN6azN7aDdjwB86Kw2WWm9AAUDG137xQHntnE9G",
  "key2": "5Vb6mYHNqgVejz8Ptb8gdTZNG9Ddx9dSZViBz9ZXCgngvueDuA2hKcr7EaJ239oHNZxSikoHmDtxy4mvtxrKzhvk",
  "key3": "5Hr7QHsmkPPqfZDoH7mWzscNNHak43by95qZbQspgf3bA9PPcFqRGCcXWawM7RXi3TyrCYdrQojWKsa9FApQnBby",
  "key4": "4RKgivwVY6HQKnePqhCJShTkdJ4nfJoxZBUATRQQmy6zQcFVuyTSzqZoVhHBuKVdVpr8dGPZeGu7WUHTFfzspQMc",
  "key5": "Bk3JxUMH4uyZjx4xpb8ckpACYcHCupzq5fJ42NHx6N85Y6Da1rcPf6wRnCHGBzy5vAHuNk3wMm78yj4UpPPoYiE",
  "key6": "3GqLewsoiBqiZT3R8DbYtcBkW1M2eZ33fQxr6sLYxAHSomtXrWFbq8iKk7EH5b79WiA55Hy2X8AUuf8HGq1DPj6g",
  "key7": "3P7SyyBjEobhTyGn7fnzdeNvR6BCitELGC4D3sVwskvo7PxA4XS8gXASyFArzCfnWfQhCsRZwZd29YwpReL2LfRU",
  "key8": "wV8wPXp7o24ffhJXbXFini9sgVCrv3km9s5KcEhZaXD645KiWgt5AbMRNB59veAd1kbVdsszE4cLAEZyhAz8Cc1",
  "key9": "4cD2gTFvrroHVbZAoChrxqy3YuWgPYbwQhSHnsB7wtXYj6gg1djdrZXrHUMUHAd4vssA8CY62Xk9sKee81mskZ1Y",
  "key10": "4vM6u2oJJbE5LydBxRexBcSxy7oyLc6wSLDbRZzHenAhMbhm6WAw8rQ8pLpg6E1Ze7Gs9TJ8vk3UcekBY9xD8UDv",
  "key11": "3AXGMsFhGCoYUfrKvwAHA7h95YGLBfqwTj8m78gz5KAGHnc9iyjVMbHXaxKDcPbb1462YLXCF2gTStac8kEgTqwX",
  "key12": "5wB4qykVSzVnRxY9KR8Y97fgoHNrE4iEiYF3D9JNYUoQBgDGQnxrSCQZdAygkL8Tuf27HF5U4SbXWb8S899FYiUC",
  "key13": "3QKmpiXy7dVjxoYtQCmw3UV6ZYmchgvU1SHin3Qk3254yc662APDaoY3JtYCVjfSHoY2HeEW5KHrJjGBVGZUMCbL",
  "key14": "2d3WjoVMUBT2xyinUjwEXdWeAFNugzHCRTV6EFKkrN2PEsRLxNVUjotFkWQp2PsKHoNy2sKFS8F9ihxyZK8wAioq",
  "key15": "2FZKnJ2UkWhdAZToe8SwRnDm7GHQUdF8LbEHiD9xLS4duEvS3aypBq7MsGpznLjBsEhR9S6nPzGwXnryrVgiEKfp",
  "key16": "3TW8okBZEESgZD6SYfZJ6x63hPojVny2bq3ZfB47te8UU9X3yGrf7FGdQ9b1qgAtLxAQDiY12sUcqNMPYBxE29Wz",
  "key17": "494mwEM3fjpoz9EZE4MtDTpGiBiJXTp7MGtZuuUozkp5Cd4JSoqXxCP7SAa7ze6dQYX47uYDdxfV18KAPMTwMABH",
  "key18": "5eEipKHP7etAxTekgkdL1a8orYLhWQi9wWqmd1qhQvgNo3PuXHxdecoeYV1HX3Kx2gBeezXRoCouCNTqbccCFAp2",
  "key19": "26W7b9EmqbfywxB12PKiA9VemwDsNNXqseWWEs9SgkkVm33m831aNqbgTJdpC59R97WBdYFrm4JdbpUU9AqUYvwe",
  "key20": "v52wgCe1edXMorV4g7EprJKtAZrdzCsdcHL3KHGbNmyq6PmwKwH36hkk4s7RfZ6vkzJzDMwnnsTNNjLkdQatpbV",
  "key21": "qpK82i7KDaM7uQgDHdAmgq65sp6Z8wGvYdRiF3dZEuPwgL7YM42PLKEgxV5FmpmRnKatvwsVi7Y6txVU6s3ZsKc",
  "key22": "4K3F3ANnSusXM6oHJCdmsRWv5NipN7o5XM3LAwdszZfwBqn8tqBpwEm7evn5TfmmAUpW4sR2BmyJKMcaWYjQU6od",
  "key23": "RAo3nc3cYRtpzGB3ywUF7jzm7LMbJSdA1LsBygiTDG1mJ27tR23g7Fu9QaQMaXCRBNAhRqBDcspPhhF1GvpQPmL",
  "key24": "5XGEvDxR48ZrdsDUz5zDE8BEtQRzYpsTAsvnQwawzTjaCv5z9PH4sTSLLNE8MtdZig9YhwvzgekxtKSdpS7TScFG",
  "key25": "ao4KA8bty49BBeAVsBXhnxLiJyY2wyuJpFoQV9B6qHn9Gf8T32XUdMX1kHWGPAPMvPuPde5ZS32U8g698UiNVEC",
  "key26": "YtdHAhGQchLBJb2uaxTgktcAs3989TMF8dRMtaEZJTXvNoNeRxMTxJErdgsgZffE8EXRxmvrb26SGnCj87DTzkM",
  "key27": "jsLm1AE6k3zhcvumneYZN3UNhAnYrngRqtAwSBGGYZDc7py9wUHkqFijzBGTdHn5gBjHBUD1BdabUMXx8Fu9Z7H",
  "key28": "bAcwqzh2CtAuZeAQqq4ksUid4njg4C1rTpbSv7MU1vSkEbq5mX1yhHpYqLP8gDQJmy1bcCKYAMQVLj4pK6ouZnC",
  "key29": "5j9oBBg1Y8SZhkQYPEWtXQCHtnMt4sZJCSJNsM9mSL3LZRKKrTd8UYZn7VLzhJDN9oPtF19xrMbfsjaTxherKuST",
  "key30": "45YG8zmn8oS1tAnQ7eEyigbtLaiYZt3JoBY8mpA8XPVETWbXZApqyLto9cecSJis9f4C6t2SKHj5W4GqJFa3nYN9",
  "key31": "y2x7BgHWK8SYVtrzYfRQjGfHRWEmDukpcnccZExNnJCfy6JZmuNzAdP4Mq7NT6CgXoPpqsh7BiCohFtEBj6fxHe",
  "key32": "31Sz3MywpNKiswfK1cM8zdkzDTy2dHG7GG71SeXvVksmmnkJbLMxRfuZ1uEzQF4S2knZyPkHUEUCcTHzz6X2gXe3",
  "key33": "2viU4c2c9h7hECsDw52GFxtMQyRvVnXmWpfB96sAPt9L9cv7gLnPsUun5yhVT1PHDgVQ6qwX6AJhdWAdo1CVUoRH",
  "key34": "4Kpvh5cZgZyjdJgVwwCZEpRUYyKa1LLBhDs3RvXBECXECk2G7MhEojBGdem7b7Uc3gnkGgdVqUGJc9wbQKmrUh1B",
  "key35": "3cXYvQ6eH1ACQQQ9bgqphCwGDdrtpxo3BbQr9oY8nYiyyHpjTcPMyrhvCCTTi1boAtfwd2vZgUYgeVhBQQ8GFk5E",
  "key36": "3DEXToaQTXdNp5r1wkMK7jgXXqnPnGwjF6ttj5PFAsELxzb4HYv3zgSWZXYQu7BbGzzFL6bn7zSbkm9QtkorFr11",
  "key37": "5TEemJ32QDU4ywLFUZCfHUftAz5xe7adxyrPFTnggU1oY9vUhbp7QoYAsKmZ1Grysz1arfNdsjjkMGGDLHaG5WS",
  "key38": "4qQnG9iwtpKfPg9C9oxp9LWqj55o8gunKk2zAv9DHZGVy6KeTKDPNVkd3HDQtckHi8qV3qLPoXECp8n3fWe5bDHM",
  "key39": "5eP58qbWdiQnyoHkKJjsgEfM1yz84RCMg432jwRSTQDNPAp3Evwgq5g6jrRQGnbhghqHsebp6wYRsmEi7Mgvd8w5",
  "key40": "4FqRterENTsUjmMLERod3z5eqJzzBpzzAmC5MmNhEYacDZEZnuEPa9PtGWkKKn9sYEC9prqMogswTmdbbcNzkNtS",
  "key41": "3ZFgEDSHXBwepBsXPS2MsX8uv2mT7Dim9GH7iRiHNB7ENfLKymerFVsVQBYsPr5dwFUUaVygc6pHxHJmErwLyfvc",
  "key42": "3zeANmy5NGcD2mrsSqsKxZKvfaKiRXpBkGBMADacQ4srW57zXzFYAbvXq9c9NknwS5HsTERxnWchbYLVAhjTVsAr",
  "key43": "5QXdtdinYpAvdrGjieBaEmXYasT2xoALZoCeGg86DAK2zMXXT4spwmk7TzNw5z29jBpZFLktuHdU9YJX7PUacVJ3",
  "key44": "5Ud8vsyTrxxTkxpXQKUNbWGZZJDS9sthGXsBY33i1JkyXbvVSFmxPD4oLeiaChPMSFukexTFH51SGNYtB3VWyB2S",
  "key45": "2z1TXj78oLrFGjGpkcHT1so2CadXRoUh8JfaTJ4RE8zgsUapKnTeApn87KGzDso3z4NordKC4HpoJcEwUQRpLF6D"
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
