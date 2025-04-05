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
    "4TJrL99DYxySUBbwvB8U8VxxB1dxLQaxNKkrJk9wxo2tgMij8ckkFor9t19BVsF7RREqY1pU6pyCXeiTuwoCTwDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEq8pTv65wMpwDdRvksL2LiEAoRJ1dyswt4Fb3vDn1G63ktAZB3mdVyUn7kfgbSPHn1KwqBgSX4m1i34piPfrzq",
  "key1": "Xp7zw2oq3XXFFgFS3BzpgFXemimtD5o44mxShxeW99sHeECCFDQghH6TzbPmpQbVvURwEPtif7ijXGnt5ZppMcp",
  "key2": "21D5kSN1Vy1Tnqy6uUv7f8C4joH3s2npcVDPupqY42X6KsXF8RHGPYuaBtQmyFCyBNvmbJHgtuoYD7W1ZB7R4YTF",
  "key3": "56zhXo3ctAXEzVF4zjECC5oss79Pv5vHqLBR4x99xJBqS2NtEUryTSfKzr3BKT2oz9uk8AjWP9eJws4MLHim3LpR",
  "key4": "64Qonv2Ps2FL23PhDCQkCtzPFSeBoEMJr771hfrw9z9a5azNn6BcN1KdpMvHRKu6cQuFrbGYSv7asQ1n6nxLNJQb",
  "key5": "5iy6eqR8ehhJhk9mLVPkgsqF2HTAGLHhcFShsy27nm5hWCwsB2rMM2Nvyt3SdBACqgw6xcrYkBMjniXrMdQY2QBo",
  "key6": "2E9A2cBexggnR6q1nxeC8JfesgahgEQjUgyUFsA65JBd9MYCJXJceeBJbYCEmiEQvUYMYraHe6fowhShnmRkFoHg",
  "key7": "3wo6s8uo9hS1u624cKMBsZao8sgGm9HD3WkJ76QMGS22vUXJKCxfYH354VWU3Jx8yxj3yJWBhP9xC626Ub8pNa2Z",
  "key8": "KBV54GRT9QyqtbSa5RgByqKyRxbAXZv5hGWYVo6toBsCyw94GDuoPtRGj4uzdJLnn5VdtutvNN3VWxjUFXYTADQ",
  "key9": "3ahpkWTPwF5k7id1WbV6ACQjMhhhLj5H6neK8NVhWmo3WdD4QA3QYsUGxw883E89oJNiapEStpshmFWtkSf85Djr",
  "key10": "4J1nSzGW1Y37GGD92dYWQagiqzYdTifc1xUBnq2owKJ6Zoh6p7h53Hwtqe1GgmRUSu9RCG1GBL8Rk27nF6gTeqpP",
  "key11": "4iuN2tGVEWLmxdSkdVJmB5DEbCnqdkwbD9qFsDd5aUbApfqwjWYkny99RUKTefUeSvkLcwLdvgNtRcj5Hn8D88cQ",
  "key12": "5FLzBt9U1pFXh13iXChoj5kKmc4KkPKLL3TdXsUZbPpeuXKHo1CVd6J6tktu7pYxzB4atiGSyfnw29E8Kxy3EDQp",
  "key13": "Y1NRqgR9pn3RVCogcXief8XaupQ1gLHtVPArWhbQDN3zvJtkwtCQxhnmPwHoPPYMqcZvqeVJ7qQPv7gcosyw7EJ",
  "key14": "4XNjgXkPB1UNEAcNAfScC3wodFTEdnAwiUZMiV2u6TdkLeYNNRKY6oHTXbXmrrfzY47Hg3MCsWQLn4cKnyhCVyZz",
  "key15": "EeBeFAVWuVcUib1zA5CZQyJtZF8RJRr8aDaEGocbvjcMsbXbgdMFbFgS2F4JJpnTfs9gVm5PA7ASmRgxEtE8BYw",
  "key16": "2Zctex85CmDiKzNkrJfubmTMF8MCVxb4MhE41CSifzLZ9DmS4VqVhF9S3XuCd3KGr6rby8wB8FwfDVaozszj6s6x",
  "key17": "59ov6HceaC9sb78rBf3mhAmRVeJWgzVk3G9vNA1CydGRUkBeHkDuxwTA7fBbMW45mkuJZvjfBu4BAtsNM5QAdyVX",
  "key18": "AnhACQ6kW6LxPsrySg12QvYkZq2VnvNyygoMYPmfki1qkjYfUHevTuJHhsJcSoHtbc3rCD1a7NwqZBWTDR82M6h",
  "key19": "5JReUSbf4t3FybijAeF2Nu6E69HfF4xfiEvZpafuc7fZARvzJ6wZx2QNhb6YKA3N7YHs9pRUJ6pdoUYvF1SR4Bxy",
  "key20": "P86QxJbEAWbYMARy9VGKuMqhJRCAwtniivNyahuHZhDgAGyPDBWKFkMA1Co8XQHhxCyYNwWq4jSMH86frK5xomN",
  "key21": "5FsE1jykkXtH2vNXycwJr5bnsKPUYWRoybGdX9qL2JtFiiRaMKy7VhuCpDNKpQAMQyrcShsX2gJQZMQMdp5YzA1w",
  "key22": "4Ub4wePvpQ2d3goyWpEP41xoBzqaMMHpgb6mWvhaMpqsPSYJXmyqbribRMbFnKDVXjmEZcieuAMFzS4xD2EoQtYR",
  "key23": "4jsbNBxLe9TmntABMSToZScTSEkJubLhn2tsW5ardkFCgEdev5wPksMqg3aHd5qoYhGwcfnRAYLHbrCqHxjVqbpD",
  "key24": "3HjpUGC4GUECLGFmd2NWCwJsdMkeFeUBiBH1scjUbZdKcZGji95Jk7YpEDWBbRj5p1fWKj5sYSHkRPLGixJ7k6Bq",
  "key25": "3S4QfXcyveWBvyFcriER46ZMXC7tCCeb1b9hoM8hhg51MTTuK8TftS1WdKTVuiYBScbCwvmiE11PLmXiPDUKFGdv",
  "key26": "hnFqh3PTzBwCGtuwkS92v4TQ5KAjynTYGpk4BnPzdFdUQGir7Awttd9bsmufMd8uwP6J84GG2Rjx1DnYYi6e1LL",
  "key27": "3qcw7PcRwgF869My6WHrzDTokvyHLb78oQhxrMF4fPk1dP1eQxVg3hDuHSkHJfMX4YMQZeDiLwMoJhaDkG62MiKj",
  "key28": "4ntKFwCzA2ZwrXM9vbx4BUcRsvzjagQ3yPLKx7UNa8RL6fwumBE849CrbrrdfvVaCjqNJ9x5tQCvFM8fUY93TW7u",
  "key29": "ec7wAcuGdkQvg5rG5n7y2bfKyVK2pEbJ37mkDVgT4s8DPv7U9TLcJJDxxdS7pToADiExt7v3R824fNYpVc6irBC",
  "key30": "2WX2JY9Ww1xjaVPbnP1BdqPAZRvHEkoKMCA6StbEDWt2XYZWwXDvyS7bJpvidUrXLd6wUpWi2qNw1GpLBvy7qGZE",
  "key31": "4yTswbzMiNWUmQ6mUVbUZR5NLWtf3Fz6DbkJN1FDAXxfKa7MVXHsgboJ5PNX9ChFQzuu6pQfGNvt4UgayZagcZKT",
  "key32": "5CQe6MDTcEGTdrTafhfjUvURJb6j3sT2qjLhjJehUTFgvXBMKxrdaUhecqPnZXiWkK44jk3WvRPn6fr3BPpssXi7",
  "key33": "aTwnQ1i7RJrorpJLLZJYgN7FMt9GhPAb7T6BZrFZTBfP1d1CC8grJ27GkwSZuTEmPM3XveTwf4fZj6pPFyp4mri",
  "key34": "2aQ5XRjc47SDsGCVdSYnXEjAJf1ggUfV583xnqN18Aq3Ph4wdoKN5u3LZxbPid6FVsuysLhRsMd5c36G1trzPgH7",
  "key35": "d8DnX6YRChLnNqVr7PUtsNJg3jvxS55MHfREN4xWP4KmrUKkonRbtWzqVJvazf9JV31CnvriT6niEptNwD6Gu45",
  "key36": "2iW2qB9qixMXQJ7csC3b32L4VcB7FRSYAWmxVNxmejE4wabMk5Bp3oo769skDgyDRq8PN46xJmsCXErCYcQh6phV",
  "key37": "4pTYViG749QuLrWCQjCxDKHQNQ8n5BChDt1DggR5jPJ7Zmavcz8ycNZqhPDH7M6dK5qS7MrM36TrW2ikxwktHG6N",
  "key38": "3qyEwEHiW74bPSXU8m4byrn9qU8v98tgL2YNoyHWPppbHh1AgQDwMmeFKieKFNzLtUiq4ZeF4H2v4Xz7cxeT4deb",
  "key39": "KHwbXY7aMTSYYeWCVRWbfM6ZWDJgMTQ9C46FjKfUoQYbw8GEd3t72BNrHtjqiJQp3u4GGpVWRQWPXC6UHwcE7Gt",
  "key40": "3MqGnhhWxGkB1mXu4MqHBZajThEB3kjiB9hDorkV7ZPp18diXtRfms5ciaMoxKuMuLC1LvBrtDJww8rbnwTgENzR",
  "key41": "3ytE1baLup5mMrMqvoDUoQhosE94DMYTZQTmwf6gtaxDbiMt3xt3J12dyCXTGWR5kweTCzBSG46ZZjdNRJz1VB35",
  "key42": "4zmwzKC5QhX1FSbhN3UrXeFPt7EH4nSvDBnxHTaku9Jp3vn44B1KtDvFQNs1wcQkP3iB1LojqCwWqBwiPKFYWSi8"
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
