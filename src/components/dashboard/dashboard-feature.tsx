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
    "2osU5sqeLQphvn4RXUE1t2nQV1qHWGuUS2j1UZFSkRyKxbRcWwLSyVXTef5nibfhojFMrwTqUH69bYdyd8jtjE7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nxYVX84AnqNyHDvTQ79D956Rop14PwDv7gsQib1zhtqq54bebs1PeH2yc3YyWm4Euod1goWabpXyqC9uuZcspC",
  "key1": "3BcQLosDkGLRrXit7HT7kqPj7aEmcAZg8VXS3393Xjb7gMujrWLTRRbdp6kgbB7ZXXwWj48mguNr8YUQsPTeoHD9",
  "key2": "ZSBb2qbiucQy8BFqTALrnh1nKtHzh1v2ohSstPicB3dYmN4uASRQpm83QTPVc7GJ6vWZnbF9YDHTg71234va6QH",
  "key3": "4KqPLt2MJHqs995BttFMCP3Z5ohPgFbkt5juHVuyrcKTUYw9ejuheo3XfT4BQYctiHoxJecCkK8urN4mb3RCk6VZ",
  "key4": "5YXi1kEPSpsYYcvAprnxpp1A6Jmvwj48bCLBZGm1qq69zzRj2GM9FBY5bmwWEYc8gqcbW6L7QbH3NqDtsLCmKXg3",
  "key5": "55KDS4itaJvPA1W64jLFawGjSf5uzfazgMttzXotN52xuoL4UhGC2wdQhYZFRErjfN3GUdRrGhHyiyDdezFydebW",
  "key6": "5w1yKWSQxTpiarNxwihEVRomXYGr9Zq2hRpeiBNcdtRsRd9D6JVSMkTN9uiyLsLkxcmXNLLBkDG1yRRhHoqLDXBQ",
  "key7": "3nUVzUppgNXvFMKH6uUYaHgQQVzGBBgNzvA1cWn7bmQEkbWNHY6uTHo8XwH8GKidoic3s626NqN9e16p8hn1bnnp",
  "key8": "3jsw32gvV84PZRgWj46wy1S4JooakaQC38nBi7XtkHEMJvdgWYZeEAbmquTbj1SagEN1iVrQC4xTUzmhsGLBd7TS",
  "key9": "4cHF4f3wMUXBQ4XsAXStxqtWTkaDAigCeZAbRW1Dc6eym2jytrMSzv3nvGEsd3BoZkkf144hgoxJcBKMASK6pSn3",
  "key10": "5ZuvykJecqMqrT9PHnb3gVvHk7FPnxVGXJf5cuJ6o2agXR3vk7vApmqJeXDURuVvGdimiSrnjkM8jjjcFXMX6ydV",
  "key11": "3koNssCKQ9ds6vxJoE1pyotckVrq3p4jirjcGGQLdxUtYv79TnVXBC3w7BXQGGXcrZQEyBPCH24ywL4AfAMzXqxN",
  "key12": "7e1PzBnqqTQ6B2honomvV1nweFZj6CdFcsy6mA9UtxvmEiZHbb8KsFRJW3dnak6PP6rJr7cnjucLLs9Jjh3nbcg",
  "key13": "4G7jiRxz2t8Kxp7U5L4SBL5cVGSTpNdkaacULg5xAQvXUaEiA6gixLzUE2mWZ6XQfSaERCiXhT8u6G2Y1dEoWkLC",
  "key14": "4kYsmqxkJTKidKAbRHAeHyDEufVJNcDdnNcXtgGvz1Z3jStEdKQ9KBTXkXYzTpuKLySw48TViP8NFRrY3FNdL6SH",
  "key15": "3iEAEXR9VB2HxaMxHTRtGqBsG1Wq1JtDt8rtVz5EQpMx1J7og8msNTWoiQNnJb7z8uZK1qHBwBMRFmjw7xHfe2vk",
  "key16": "6FJDoA4PB7wqTTq2tVQu8oL9V9Wa2DYbQgGY2MHgauTHoPmMH5KvnxijpAYYDo22fzxYiBGXkUP25mfqSi2w1Wt",
  "key17": "4ZpuFh8TUF8La1o97KfNf7sePPXdVTf8cQKYLh1f3pGGs8FcdwqXr1DeqHA8UqRKBiXQsn9TqED9UvQfKQEm1dLh",
  "key18": "2bSoBenchN2JyhrecVmLMxnL8Q66RxBPuKKvjcURxQ8n7uDMAUTGx7u64odxLJAfVyWYjrTFNnxuX6pUA1M7DgSJ",
  "key19": "ad9CPajD7uJn78v8v8osQUeKpG4sZhp7QPx831DMdX5YPhivwC78uE1ypBk8zYDZYacpVDNKNcZqWb4qbb6vDTC",
  "key20": "ssXC5J6YvTGEKmYrp4WPSQysGijrh9NULnaJZkG2xAzd894c8Y7aUcW4q4CAZ2xPipt2LadC7Rb4BK6v2T9k3jh",
  "key21": "2tKhi8ywKjzJoWRKvLrEJ2STcMbPZ3e7CR9gC3Jx7i6NnGXP2NdbTbpPQk2MuHc7bs4BFA7cdGnAVeNW34s8sJXr",
  "key22": "4D9YY5Ne7q1Nm63DWWADJ4SEgydHNNUbbtDMmj2e6H91kNXfkN6eJ93tEtx2PBpByQXGE6BjXaArjMkutK1LN9tP",
  "key23": "5RcTmXAor6LebHNYUzWeSAfUnuAnucG9gyPfc2GEfwKdjufKyijDhziFj5N5ArXu3VhDF85HfRvNZ9fSf9CCQVRY",
  "key24": "kWe8X11CFjKbjFW7RphjsnH1eC8sqRcmC9qN7pR2GBdWz3L2HK3VH8VX47WjzBLinJ4bKWEeYVxqwoV5QwJqSta",
  "key25": "Sd8S1jEgEoCUjVprnxkyBwZd2eRC1gBmniakjb7iupztiDu3e7wJq6kXVZfvuj46Jgf771GzYQuMPgUxzbyCEfb",
  "key26": "2oPFbiiv8aTvBr7mVoGgtZvmGaPSN4rtrVetpcTjLoy73yuLnDmQWDx6TPeNNnXddVg4BY2qgsG8Kzn1sqzYMMe"
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
