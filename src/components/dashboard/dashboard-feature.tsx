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
    "3WeGHwbqHPJR6LfixbDK9VmEEtQcD3BHjF7yvvnEGtmiCyRwu4JEPuoojMeDdbJQzyHAGYqpreeCDuBH4UqBh5GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569XTerRPe8FGzXPTjjPNhJz3s79Fd5vb5QHJ3YBPNgFqEiS2NAx3ssKTACw5GvkT8drSyoAZaekpQeZWFHL9Z5Z",
  "key1": "2YWpUS9HSsxwpmuaFLxqv58NPSHfoa2H19m4N7U8UX16LB3kqQ6Er3tNYc5p7XYVS7VY3PUNdvnAnjUuXQjZyCsr",
  "key2": "5qo2LWZwGj2rdsVrNtHywM9aLH8sijpogkJCxqEvssmb2ADy3TDXnTGAs3AXygfRGBRj3EiQfy6WLEkLCm3CJ6MJ",
  "key3": "3PTL2kPuxDvfTevaYeY5sF1BMMwhV422UyvkLE9FwDZDT4MFErK2SEQSxLerWFMnbBpfvcSNCHDbmsTWXfRtMvr2",
  "key4": "4QBVXkBVMZrDFRjh8K3EdkUf2iJKDMmavXa2QtokdLzER6Hr3i29qWCKj1oGyyULdX51cWnby3vzxiFeskjG8qwQ",
  "key5": "2WxNeHPWGQULGyZnwSFfHvze36QLqHT4mSUQdDBjQu5AHPavN261YTfanPAB53cQsKnURTZZnD41f9cLwdxNf5Ze",
  "key6": "4KsUZ8Pqm6CZRDzz4u2gRfM2qnEm1DqGLeA4BV4tsKDGiVCXYgZoqa1jrPmxBUFTX2cS6EVJk6YRVg6sxajfgTNp",
  "key7": "u7vWHzwn2Wt6swHAnsR9X7gxYgdhvZDSb5SfubayxhodUeocepu5Z7aLQzEmQrpu9iiL9FovvyTD5of517w5XXa",
  "key8": "24Kz7EgFA7bSxFNQ4GyBe5zEpUGkSzJqfKSZXGN4atAw4aF56HB4gvK61chd9rgcnKox7DouhhjUfEGQCwPGHAiw",
  "key9": "4prnu47EUfzZjnKA1a21wrAN1Vh1DTw7zptdF4PkHsdbUeK3FfvkUJv74VANVVqCxXX6wD8nA3k9o5SgwVAWTTxm",
  "key10": "rWqCBHxW1d3GZicWNjTD4XAQSRS4eeW8byS2D9xBPxV4NXB8WjbNAe8YGFRXFFSYrWiwcuPsAoX64Admr3RKL8j",
  "key11": "3bxm1cYuFPQ8KdACBt3UmYa6V9WaDN84TpmYCjDaYMRPAB4THFuvd6ZXrdmJoJvzhbHs9pxCMWQVtmzrv9e1tvfM",
  "key12": "4iU2rcwZdtCDwaMdK4T8BAu88H7xmu7F8reoDGFyFbN1JWJEwrNGZTtQNc6DjfvYduVZ1ZiiTJKMgsjXAcGEB7A8",
  "key13": "4m4jnzQwUtbiB4mhgtXGHKT1sbD2Qemz5wW7gwHMWbVQzfVc1fHK5WVr2kKDAsMPfcYqf5r8fiwz4iStXKAFAmEq",
  "key14": "3CfjaC2JNKLhPYpHXh2VFHD9rniKzFiF3zzhekAN7sCEhD9Cyd5EZZox5eu354sPYHZbmsmtLVpPNNrvDEi6r853",
  "key15": "2V6zZQ9jECtuPW9pZCsayN5oz44ftA3X8L3Wf1jSQvnr55jEMuy4feq4rym28ibU7qDcFvr1jBPZbnYVXVMKz4me",
  "key16": "4K46Ka1NsbmrgK2yuCjyvVVzCSQRxjBYVeev1kbLZbD5fEmjwLhwWfrQrtH2kRzL7mrDQXFBc2eswif8c3q1SW4j",
  "key17": "xBrjjtro9ZewJ5x4x2pCnycMiH5yiA5YbBxi5Jr4iYxdEazjsa9bF8aYVHhcVZGtataof62YCoeiavsxjiTaBZC",
  "key18": "5FD9vvQmtXa4LCLMmFuTuAUCN3PD1zHE9nWMGNCrihDhXbBZXRqfGv8QYDnk5EkFHhUx4irag5xCF9kbrAn5Hvsy",
  "key19": "2HTB1bwLQKSayNM9GhbygbMdjBQQwYpsAi5MdPTgf9Z9oxJRcC1DC342tnXXSnz36BXsYeVWGLUPf2c8mBCTdmCF",
  "key20": "3VGnQuM4rqfxfBCEPV61AQayBqkoiZAU4m345vqi652WH3L2KnQbWKmfqDmwbkKXksP2jqgH1w6TqT5WL8sTYijh",
  "key21": "3WMQqoaG8nXfEm1s9XysKfKAAG6Fy6UwvDhTeBfvBQG8gDr7SFTd3vgMefSeEXhJGNwCMMCRQC81jxHgcdkHypUx",
  "key22": "389djtWdu7uCmY1eChWK2HEYuorL8tqxfNCccgzkALyYRRS5ry74VFonw7ssuRwWi6rRwgd9Z14DYiaiw1tkca7g",
  "key23": "2pqHXL4tTttkrHGZJgj6DueMhbcJhmw1T5YhF6SvDZhZdEho4tqXsMwscBjUVCu6YTe568gVT7rc5scRPX5vu9kw",
  "key24": "3bGLrj4PQo2AT8vKrvBcXYz5qTxXkQTKVd9dqpaqUKL2Mj4h2HhB9BiBv8n23WwRM6S48qhLKyj7H4HsFqJCspbM",
  "key25": "3F1LXxzTwDZ1wLxSxn2WsnWyEEs24idPTFinRu4fbxtfWaGWQH1fqnPScA2ofc9PCe1sJXbZbrkuoG3HApLBzY8m",
  "key26": "rpVNGzzUdytzTsPjk76ZSBSRBU9AUXPnbr5Q4Wi8YsuUGJtPoZ3ycgkWWuWpwGLhfWJsH26JQpRDqUmngcSd3Pp",
  "key27": "4Hix2yZc2u4BKQmPNC9PBBQNoNDbxEg5B5GxSikFdYvEvLrX7VxF3TvGmzucYgmD8EqY6fY58xs8V9YmtH3882B2",
  "key28": "5UU7NPm29NZz5goQ7cmaQrxyMmxcvdci4Ume6Qg9VU7pNWjP369qaEXSWwXQhzwdAMX1FR1rCw62TeKVKVGkZcC3",
  "key29": "vmEVf5s1C1RtULXBKRV3ff8Ge852G3adfGKnwF5dGEZkV1Sxk9LdJPCEqcBLsBmVTKWwZ9UXfv7smvQZWYVgLj5",
  "key30": "2i1nwPQw5eGXXwW4Mbe1yDb7PSLBfgkqy1mGrD4ad33KigvTnP9xpMwANqpT9GCD8kMBvmdQDW9fbAqKFv7SUyCL",
  "key31": "cpZwtumDdR25kvSN4FwNPYU7UwJ8Cr6BLxtinGf6Mkv6qPnNyJQv5x5pUtNywmvXQFVBZi7BbuwQejrYKvL7tRs",
  "key32": "2p1eYR12cKUW4zz9CE71qZkuuSLPGRcHQYPB6ReDH5eVmkrte9wEvsR14fWTSA31VUVSmZE3FwxS7SwqJxEJCunc",
  "key33": "1bUhty9LyF5bEvfmQUY539Qnef4hAzN2WAAnzMpcPJC6CkW8jx7dn7BL1d6EcW7XKi7DGkKP3saChhhrq7ACiny",
  "key34": "67En3e5eq3hCkpJz7Uz8472mNQovAWNANofxpHha7rXzMvH61sxVaWiLd4PbVveyLAKrPMh4wPVazobLB5MRJLt8"
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
