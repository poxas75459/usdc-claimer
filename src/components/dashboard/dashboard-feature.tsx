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
    "5v1qH834hadn5stauE6XFtJDT1ctrvcLpBE3qauKDkNFNPq7XZyAZMsPgzJmKZN8WgPvVJczPQMGrkcuChrhGFz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63PCcXbn3RDR85JPFqS87QJF478ShmtZJefuyNzqjKKnHUu8aW3RK1JN6BJv9ZuHMYBFjdKinZkteLGGhEVA7WvF",
  "key1": "3yiTZn6ABgtJrS7bwcxFzcYWVWW3C1JSoqu39mCDzDT5zBtXTdsJC3bLkhA3PgQBKYmav5hAxpYHwMgghRBzY4uY",
  "key2": "4eFaDgswQxhXLx8evEqcJM6NGcwXSTx8DxK4GefV2RwXuTohz38pSNdBGvfQuQN7HGmQz3QjAghZMXFMHcSidzpn",
  "key3": "3wybzwGDR2kvte2c1dVQfgVVvvUUC6QiHbwMXkPyXbyqCkpxZ24rJS1Jrn4FovA5W7cpG59W66bmYjwFaGzcjDdo",
  "key4": "4dc4DNsaCbjq9q3pPUoukH6FQbjhCDC8HWZhjXKfUpiNGS1T5zAsDKVR2KZprZrjTwuEUHHZ4jtYURDLS1Jpuzf",
  "key5": "2ZVjyb5R8LhaPDt6eC2t6TDg5Lztt1suoN26xnBUwEMCcT6DsGnsLvhs3kFqcXsv8mPG5Rh5z2TpeEn8eRPmJvd5",
  "key6": "5JWLjegS37oXhbJS8i5KmUXyTP6BvRDf54KNYa49JLSUsDiv4L78mp8cjcW3peYJzpF8SprDeuMYo9uWWAb8SwiZ",
  "key7": "2Hf6RM1hB4qJ3VBxsZ2ANBaeioJUAeZDvSUo28dSK3fBch36t6vcTynaxrb6pRwawx9DELr8XG4ihy6jzVb3pQgh",
  "key8": "5wk7GJsUkYCXKCv3Cns75d11aoxgLhTVaHcktHWA3vu5scFQ2CV77zk9Efv9txuVtwDwZzaFekkXLXgEvp5bjmwm",
  "key9": "48ssxof9tK7jAddjEhjwsJ4aRqvGpd4zwNmPCKWeju7569qMkV9Hts2F4r2Px8Fy1WBzxksSJdUk1QYcuMzBdxBc",
  "key10": "4P6o8LnYHqA41oFahePRjkHac3enBtQxvaRqHjzR55frbzDBs4TBLeP1yocqPvm2xXEQ4BBVXVAg6QwP8vwgi8Wh",
  "key11": "MsBwMnS9k48jxAu5D5mhsyVAKZkpGjwVDQv76nWWo79uw3fPUwKDSjm1qQ7dossXa8aF5KcmFESiDzYKqTbeGGp",
  "key12": "3cYtwgZVowyALDnEMBnLxpg88JtKAuRA8wxdFXgaETiQUCXud827W6vEqD42KKawNLUSWyfukjxSivBZb6DKg26H",
  "key13": "5Hfwg8QvPTersvf1S1XZi9u3pRZRjYfmZoR5BpXK4osmWqXQseYc1P61rjUHb9EShXhwk2DVFYk42fwJKZdbMWcF",
  "key14": "433a8LpoFt3Xo3BG26iR31rEpFj8fdYdR9fzLVmmKpwcwnFREr5v77JKFiH5CnLd3eS87h33148GeuFaDpXkqLzD",
  "key15": "4zZ9qAG6L9LkRaXLpeqe4e78WchCyEfeDAjxxfPmuGSZqzrarPDXMJRjZT2tPvsQu4BCDxbGFZkCqemVdmW8ZYic",
  "key16": "32VGicZvx5wibxscxnajnWSgNVSDAfZz76YLc2B9RokvRksvxgtJFEFNFFRYJepojNvNS5zfs26CSgKwxvTwtw7W",
  "key17": "5oasWtZRLKLz6D6Mibkd6KCcXD5Nxs16Gev86Edj1ngFa3b4mLM9WhdGY7E9fKJ3cPFbsWiuvE434TaHR9kNMjoe",
  "key18": "VZJaYaw6sAs26gkGCBAACuuRC5SCaJRRvtfE5qourTmGM8bChX6a9BgMpfZorn2JQy6MChpCReEnszWaxRXGaWN",
  "key19": "5NsN5TPWVcUR9JSfXj4Vr5xmprvrCHxszsWb93FxKozzXMNYHU99Qp7tscTU3LCSb2AmsVnFx3WoppxiCYx8qoBb",
  "key20": "4Kv1vTkz6NwMMTgiyegyC5L2V9iybMFVwpXSyDwdSi2kHS5HPDZZbXcjGXmBjQzu6Yh7XG3duwjGSjn1MNEtfnZX",
  "key21": "5MZYGfpfeaxqYfgc2FWWfQzSzh9XU9hxE18HTPjbYu3KKqtx3Wv65stFYYxz9YS1gAczEx3ro2hdrsYLRSpAvP7B",
  "key22": "A358tUSDaYwp8JKXWc23r94L2cbLxvMyc4SyAuBg8T5tvA4R5SESjvAXENGkveFnoBr2BBxhJoSZQXNg13r8XFV",
  "key23": "4wN2LEkGsn3AaVFiJgcCAj9B5cvNSWy8yr9cCPmXNUwXpKSvQhbdNNeQHw46K4zD72LzXMJpCUJjfXSQ5KJiKQyJ",
  "key24": "oMu4j86CwVZbL39aYwYHFoMDSAWnANsRYD2g4ys1CGjHND7ViC9EtiFdES5N8xmJNoGN7PemkhT5Qde3wAS2HyX",
  "key25": "67KTZPbiJPzG6D86p1xeJMRTScJgCmPJYTjy1vZW4ZKgJytDPRqvdDKhZ1SQTDzWacGBJXfLHKgPUnhxyvYQXhwP",
  "key26": "2X7zWqsR1HDyw3RVNoDSto28uUgcJxQyEoMQW1ZtsF9z7FD3L5AyTsZs25kZL36USTh58DnDEhhh1aPqDAPivGzX",
  "key27": "jhKLHgg98YFZW8bRpmNF46raGjSkziDeZLF3T1N1ei6VBcNbqt51gpD3NmoRQ6QZbkdbyL3oPvXZ93MygiEMFbQ",
  "key28": "4CwaBqEPJM2wkagfriuTwEkLpLNm1YUfPjQAijWoMB5ubU1esYp9peEp1mDQ2zqS1akBGmYrYadq838sRy4esh7Y",
  "key29": "3NnwQfwK9mUSGsbgKsTsHyN7MxQZE9B4dkqFStbqE4S957fD7RUcWiXyUehE8ivncaKW8zcNWADDYkHZBjtSBco4"
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
