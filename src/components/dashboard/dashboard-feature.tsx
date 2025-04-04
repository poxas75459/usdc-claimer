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
    "32WePiKVbvrgSAtErwxVJbKwXDbvu69o3CS7BSribztmJpkFqGJeNe71mkPKHxXaq99sFeWDigS5X1UC7ueakAXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwK3o7RWkvGXyPRZEbHsPuHuTycsEaMpv7NdVHjr6tM3e9hGNnKjqVgTSC93z7BDPiWFTKpnMUbrkiL7kacpo3v",
  "key1": "5uJHdRWAviQp7DumWQXad1eig6mFGEDqZwH65CBXE2W2aFXhTLpnpWCzuMzwNWHBSfpRkWNjTAmYxksEU8YJacEP",
  "key2": "RcGbQpq4Ck8sP6YignBR2rvm2G9wzDoPRqUjMPcn3Pv87n5E8Uc679wkjEvgQYuLx17Yr762qa21epQbfVa5JmP",
  "key3": "2dBDvvXviqqV3dSzS7iTybZM15y78xSA3Ujiq3eugjFbrQdNiHvJ2xJHkzxXceYMz2P7ijdWSAhuhspsego8KPog",
  "key4": "4vbe7HLrPpm94YY2bAtgULJeYsN44V959DCyAWXVxkujdbepXkxNcVrUErHouwokjPVbSTdAr8yh1AXiVHaK68ox",
  "key5": "4Lh9TTNrs6QAZCxvt27DJJA9vQn3jm9866o6rpKHZGBRm65hgrEXiutjVckLFy4CXr1JhXMCr1xX55PdjyfS2FHo",
  "key6": "64aAqMA8tri89whPLueHYTVCcueWMk6VNVYer6zRXJs3XAJyND3x7fLMuBzBLwQt2z7LYAtPeKo6YV3GL5ue5HS8",
  "key7": "4TBDFYBsp8WdUqDy34d6MsxKDrswduCUWBX54ZcHMNzPCfRDwqGsypEVHJxLWWbZPPdowdwGS2kVr9V47nakFNX7",
  "key8": "2RZKsoUD6tycQ813Dzx5oQe76cndXS2yPrDPu4s8TbawjunE9CUHenBbmMcUsSFAMSkt53Rf7TFTkEVsGCtMEiBr",
  "key9": "XAtUbVRSYBViZvZ5eo8EnV6UM94jUzpnCu8BGZdqwBQJKookcBh6UPZnzeJvxzaaKLrqaVbKtU4fucy4UATNTBR",
  "key10": "4xq9dJiFfaNgDgEeWJEXtUfqRv5eRwFidfcrH1VnAsgsNm8JRhUds5Vk6cJN5xiX2pcKNqJvxHB4M4FtwP32UVVr",
  "key11": "3ZHzxu3xkupQdmsJndr1Sqp8v3RDevHADyUFr5qj2q5Ess3NaGC7aXWwWaPgex4iRpahCupVtTsrpFExoqKndaqR",
  "key12": "CpEP4HZv7pSokGGE3fEMnK3y1m8W7MMkLU4AD2yGeFhAsq6TkMfmWMr2q25p2dtC4zVPU3bChqaGHdRWWxCFGb8",
  "key13": "2yqj11LkJQwpejrJgZvERoQjzckkxYbWKU2ZhSe267h621orddsPmGJWAxLtSn9QUEfR5w37GNEJAc8rDMyBCZVz",
  "key14": "hh6NMtq5e2gBGYEZZXpJtW4cuMWvck3JYbV5b7xrKRvA5reeAWaXREuKP6i9Vro2vV4L23YVuVLFGXdgc3UpsR1",
  "key15": "2f316D34aM3adjLuN4pbARt4igLDEppUKhoQ9RxBUTEnB2VPLhi1GRCjdUfZaqUZzZBWDQ8WN456iEgmhMp19ViY",
  "key16": "5tPoU6X2H4U3pGa3b6g1hLatCVyiHbmX5ADrQcJFKxmDmCmuwsy1SDo89PziTxCwF2ns59LY6aKzuFeYoMUadRSY",
  "key17": "4XDaUK82Fj7CzPFGniSsU3sa9XHWZtRh1q59thfxbCEWHGfpBzg9bfpn3NhQfVB8aqKCn65FPMLK2pqNGPZV3VPS",
  "key18": "2xkKiKjSRhEyhmGAfcwSSu1qpGi23WN6uveXvuhbJM6Bv4m5Uw4hsy1x1Q513L9dvPiLL6zxuQNH7sTCqAYWutAt",
  "key19": "eAnF6QSt42mXh5uWUGcYYLWdrRoMkFtAufL73HieLDkAtGTTyqppzL2dtZvNJtsbtxcFnHmuCdrTtiM3jmm1xJz",
  "key20": "5vdo439rNoadvW5sLeB64ND3kQiHGhdwviKjzJUpbQc5Nucc6e7SYgYH1dwcUfB3M6xLtsdmm6L2VpdUY5sh43vK",
  "key21": "46wByHBV1wVknf3Q2mKjB3KcoFJ6uob9A2Xjqw4fF98S21zyos3DTPcmKkpEFgmxiNqQJ6ZMoaNW9zjpAUHH28S8",
  "key22": "4e2Ky5PKCF247PkUAsK6KzkTJNcWbFMY4WTwYacUwv6NPU3Cu6owps1P8J9mDnf669LnYcABX884TA3dd3nuhsZf",
  "key23": "5NgayvF5hn9DeApUBt7Qza1nvY7gFr6mAtuaMaeE4HgeuK2Exj4GMxKpkn1EhA2HM4r7SPEwv6jP38YAtx8x8jjt",
  "key24": "zZ5stGVkj4LhuqAw2tLv119b9YKgDwwRqbMjRXCXw5PJRPwNvCQ92KxiP4rQrnXXC8NNjBYURsd5mQHyd3H58M3",
  "key25": "2RMtH2ZsskWA5b7wb26PY4ZZv63DhBjEvKjYqLfgZ1JiEegCj3VDHWYTpPhiiqwFVB7CVY92spkcoyrF4nuKoLhz",
  "key26": "k5bn5wt4uSbLLHZphPNpK3xGY8ZC57QUd7nxy7BNoJWKoyNexrBtp6CiFDxxwZmHrVBzEdSQbMhJrFTH8SYiJow",
  "key27": "5s936ARKzWEVfAyCsWr7suoALYm85CsY8Q3EXy3RLEXLSM1TTUMXY5CtjpUxzYSS4cfRAMXuDnExQFqzRgUQBTjG",
  "key28": "59d2p3S7Pfuc3S3iahK98mjz6SGq3pwHeG5q42n9RvMxTgUDV4sHbuDj2KN9s9QvBAMZzY4CGWLMEgfCi2rJeU9D",
  "key29": "3bM8BvUhmmXu9CL12jdaCVn1jDDXkw5QZBk1cCem8N6gd4WaTnJEftgoLugwysmdipxTz7nTEHHewfFG9TyrwUzN",
  "key30": "FgM4sXCNbBtTq8xx3mXDF314ibaVb88DjcUxPJyfqHpPz4cMDFWwVU2xfzP76iBro65ZNXNvnDRpuaeNZ1uGAGt",
  "key31": "3aay71hdbSbRP7g4R89ftwbnpFCjngDadpBbPvLYwzhsPgSS1YDHcohwuhu9Ed611vSfULM6v9Me4Lnorh6efYVc",
  "key32": "4bC6yZTo5d4YhWoLoce4rJXyBhsZ7Go2ZW8gwU5m4gQLqyab7kCNGgSmGPMjGmx72Sh5BaXNYA3ZtkaKbGJNCjz4",
  "key33": "4fs7ihVFMy6QKLPR5wXuL7u43St9kaD5V2rK9Bxvdg7d8jTTtxoge9kGpuGUrDLrqWp65iEdPLteCYKxPx5GivcH",
  "key34": "4rMm3khc6AZxhJFjmjiHLLnPVymwyLorxo4Z3GPY4PJxhPmf8Y2B9rnrztqHMuoic92Z4i9ADP6bUxpKrQorNEW6",
  "key35": "2zcvEavCpZc2kNG9ddU71wjUtEwLRfShJBYavaXesRG55pUY949tRnv2tucAgrH1vHUDuhzpx7Nf51HYeRB3125R",
  "key36": "3zPaEWiRxY3tZ9DB93swiPNwr4WiQe1w7GJb8RsJUYdiK4jRKKLXAhBT3XuMqVkawJitVwDggZdeJ6YRjTUcBCsa",
  "key37": "2kfXbt8QLSEywAvjo68Ungk8ktop4oQFkNA1AvojqQ7u37Znf6j7DbxhixRCZUjtZL74K4VaycWhCp29Ug2QhGNP"
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
