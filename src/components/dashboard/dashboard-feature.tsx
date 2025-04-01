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
    "2wHg446mxCPFLdDqaTgKDNDuKiYkckJbkzCG7m7ey66iqdRg2psM3w6bZsqxB6JLaSHFHvB8J5vE25h1QLM89tUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXp2a5z1QYHaJsjosGwZqL648GipbpGXFpjjqKScnz749BY1PFPsBSJrRuyZRsmJwK9txzVviNsCcwMjVp6zymM",
  "key1": "xNAw1cxHJN7KxyNC7an6bU1jMx7oARdcxTQdjwmcvfSTJd83ZL7tevsGPQv599rUSCVH3Cf9Q4YVBRciJmxbBZz",
  "key2": "CNhZoCF9pTcumJ31ckfdeWhAHizQWceDQXiKBahPwJvJo2LEkrDxGL27LhXQNXkTTF4fbromEkuwcAVanZSfhzn",
  "key3": "4GAeZFuagBgWuzsydaYjikngwvYRdEuT1sV23y8chVigH2UkoxHbBVmw8DWe4XyYSVmMuRLYeCUj3s8A73pWpqeV",
  "key4": "4rsXg3ZYHB5JUot3iNRWAAhxDtTchA2sMQPojhUgktByZC4mVqHb87ANLfhUGn92QBGidz92zjmh4yYD765RL6Qw",
  "key5": "4iDmJuEtfADNUJqUwmhhV8X4gJAhpuJeXNihSFpj34FeJf1aBBEbsvHe6o4NuZo4BMPj3Zsmebgb1WeSCyh4GCEK",
  "key6": "AtVF7ibHsxaFaQasGXnmaxNNk2j3dQ2dMncB13YU3RQCDt1dm32zJHWRpe1g28Lsezfeho1D1ukH8Hu4pduWkZV",
  "key7": "2BoqiiQwptFY8C3aEH6U8PdAs9cvgMnuMKcKxbvGbUh1dwhhvKJMBgE7qLcJwDq2RuKx1UiVpqKkaUYN7aXtdT5y",
  "key8": "3Xer5wSLe14wYAgbgMH6NHWRZzmE35zhuJRZnSdpYMw4q3JzfjmB7yK3Tn9JHN2beXPrYLm7akcPBM1d1Jga1p6r",
  "key9": "5A2p1v9e4dXMQY2f9Hz6d767DFDVRKUZeMh32DrWLFmsL4zY4MrP5VvoopqpCpCv5z8AomasgPL1oBqXG1684yfK",
  "key10": "5MxicEAmPekjWG8QeBZsWcAANeEkvwaZPyXqXrV7fKTnnnvm6ujW23tDbxrW2yGDKHqSkT2ayLLyx6tqonpKBbQ5",
  "key11": "39MA3dAudcFeWUXQkyC5BYkqYqcnyvia7b8AzWNgPtrsXabaQWdyQzkPj9XtmMxgpf3SmmGX3YfC27oBcb4m8MDN",
  "key12": "3d35xesS6jjtZ4YZQg5NFp4oo7qy6K48HmtfZgkSow5PR7FxZUrJGfBJgXYe3rryJpSrUu5sLgZmoxedDCZLW1tP",
  "key13": "2UGdtPo2ChLA5rc3P4eiEuPyZitrnUPfFXK9u9wH7ApqXGEbomzSU7LekK8ycRrF1zoezFvoMB83Y1Yf7tNMcQZZ",
  "key14": "3BpfcHjM5zTFfQxBPyeF8L2Bg4mfNeGG81p7sMLnb23V2B9CKtd4a4YsRXTozWUEuzbnTsqznHRywygjZHqFVKew",
  "key15": "3LZtuceydTfgJggeAMFub38RKWBWQs1WsHnbEDvGkK4bJqPCETZGweZeLzxJoUq8vEJaGABL3eKTEdky3yh7NVqo",
  "key16": "2P2VDA5JyDrYahHRL59Gkq8Sf1gs3HghfpnWJHJaKnGYnQPGwLu65HGsytoZZSgjseW4kJA8pDRGdBGTgghUus2R",
  "key17": "3DBcppqHZkMj75cuyWQQzvKTPJ4FJg1xKegvRXbQLNTEDDttHsogPKCVVdqGWv84t2fThXXEiSrg7r5iwNsWG3bW",
  "key18": "Rrkpw9SuaYiQPEtuNrnzPsac1UTte8dPhYU8arXimbTj9ZsrdxQXuVqExvXL3ztgym2XuhXQdXQ6FGuEs1mn7pK",
  "key19": "N6hp1nv5YGsN1LjNRwMFe5wfECxm3YbZoi1fAxWba3DbPiHB8ZGxkmcZ6uohADecVvZu175EVJt5eYQmU1V8Xig",
  "key20": "eiGSTEvAmnCZ5NRvQPXZg8pkqMtEVVoAzCvh4TwdmXEJ3WS1wQHr74ETyFCFF11AvgFP8Xn8vYVFFfkc9HVpQTe",
  "key21": "k4MpZNQUEFRu6KFhjT7SmX3qGjfM2kKs12YBhCfj4V51jrvzXDXTBrWETk8WoGuUtrVCqwNk5UhDbJo7Y15ynnQ",
  "key22": "4hmKyqkEKnmPSHiesPm4zzZm63oZ1nzSqLbwDDTAqMBF8ATQpSvtJbTaVxkSyFhhbCpsDUrhQnDngWAzVCT3vfco",
  "key23": "62edL9sA7EjSVaPdMEiXAzBxaU2PKdvLL76w69oBsiHKGQLJTrDu3zg6eHY5nK3VNiLgf4up39VNGsEiNCz9XBHQ",
  "key24": "JocBm676mLiLes1FgjanELgX2uPtdeDnMFL4yVE5rH9f3zCK19QpbJe8BbkWe8QvdF1jpzjxvUKaGpBWp4thub6",
  "key25": "57ZV12oyJ4bWgNkRAeZ2vmKCFZ5XvQkHqmkvpLkn4qLAi6KgsHY6f3QLs7c2NLuYDPrAWQ9jMn6dHvZgzLC26GiT",
  "key26": "5W2UroZTpNRJ1LZXaKzjQqYC1SUaLQYj1941FEE8CuUfQY9hUoaPxfoqTig4cWSBYVqJfdfomnomVPeBkwGRHttn",
  "key27": "3k6G9vG6Tgtz5hxWNaJhsXmd4SpNiENpagKAMkpLBmSyxf2Lk4HLGWZDFFH2xPTXg8USRHdocX2CbTNSSL9ykXyf",
  "key28": "3Cy3uHb31CFSZHqHKHG5ZVVFpSxsQaT5pz4CTcyt2i9Bx35MjfG2moyhCZUZb85VT7FNpXqRi6Faj32SSWXFCT7W",
  "key29": "5zbD83HLyyFjNzLLxqUCKaFMmyrnuRBcKJLHa8rppJ8vLiD8gBXDjxYYVn1mrfvjfKmMKEEDoFBEWyscvf74ArHw",
  "key30": "3eXtvQb31YravfJYYp4Pc2hpi4GAsjk8UH2efFBg3dq6vM3oEd5kLHJvPU8CCaEpbdoFfB3kpyEhxfKd4DTkwfWC",
  "key31": "5FYqUsHX1kHQ6XL9BMSVQQ9u2DV5bfSdkf8XvmzxJPuknpU3kCTYWFbyhwkQA1VNcKtx9ergvDUS75R2NWwcF48p",
  "key32": "3aSrrEaE6pjEGzFgg7kBNpwKDJv7fVNbWKEDvsR2uG936y3qf5NxVwHtMJt9tCEYY8SSWunSPwtExQEETj5sN2g9",
  "key33": "2CQ3XYPYYcNqp5DPRC9ZeTRJQaGtMwpfJJbEygprhBvf83zh59qdbGr2BW58Va6LfAWq6FTG27uWFcBXuXirZ5H2",
  "key34": "5LgF68aDDdrL1qLSiC8hwvnfBjmWWN25ANSBM5mLc5m3uXbRq97gRDn6W1538nj1pG99DrnyT8WHE4yBxbHiax9z",
  "key35": "xFwb8ftByb8nNjTL39e7MvPYF2CobbzgXrFnx8SXtqQhwu2gzvnqxjVBsjUG1LHF2b3TRa9MPcruKzKLYjbuSc1",
  "key36": "5sEgi3sV4X7csUxKJJ3ajN3dXVzVfDrpaZzNNB8Wd8MoJnfQ3nVuHmMpsD49VFg2qM2JeHzpipZEcAkYKoW5cNgx",
  "key37": "3Sy84uHFU7YA8oweLLCMqmrydLouMJRJ5kQ9waV35SJdrN7289zeUdLV799QdEzWyM6K3ZnRGSpm3uG8hdQfpbrG",
  "key38": "2eDoGGmA298aY1gSRrx2647iGhQ85aKEqRZ38Jy3ECm7dR2sHrcvoHUgANTyr2hPJXkVnN5BWYLU5kmBgwosJP4W",
  "key39": "5EK4b97iYNLb1R6CUS5pVaYziQLuiWLXhYqWLB2ipF36RG9PQCU5j5qYtQBLciY6eiZ57v5fWZuS2GrzY7qNVk9U",
  "key40": "5gY6NzaziGSJmG9ue6UiSFyQdZrNsPSKK3AZj7UgQdepGo4MLjTRSfp9MGkYTp121YC3bF6fxyUZPqpY4DBNTkQT",
  "key41": "2ipUDX7PMqL9uzGSadjtBNy23aqFmhsKBiw4BT35WgccZdqgLkq9cW96gLqVurSZyp3hctdqnsiS67NMZWgTaYrG",
  "key42": "2FzdWixz7CVgUWdfw99iJvF3FZwRG58fWdCEMNgonR1SXxyUd17Gi6J1HqW3iGJZrJJYG3mjRCynYxKECiX6R7SS",
  "key43": "265VrbfLoG3ccqFDh4eg3B9KkVjPGWYd9LFT3m1ifv6SHN5LPcDGyRdbnT6HM3EnzRrd3S5GwVVjXuqMWo9CeV3n",
  "key44": "2RiRU4h87YuX8Rvgx3kg1Tu5mP3XCQwbWyYUPgb3zLTuby8UfTDXrR8WTCWQSQo7LomEsVuP2biBKS9r4gTVMBtR",
  "key45": "3bk1hLtzgQzpkRQzqybGar8D3mwJuCqX5XJpNh1qdaZN252AnEZZPYzGnSwvZRCWP4Rn58KVmdZqGq7wdtrZWUFv",
  "key46": "3RgF7SeCw9XKqbvwrcmCBqnxeYaRyefZaJxRBVMamF7iFTXnAkQTv6JJyeqgZgPqxApqSwAx1DHszaivmZCDKU1c",
  "key47": "VwzVQx8HJZyVriSkEn4GYWkYJRnFRUQUVHVqUuX1xnB7m5cuVmDXKJj5fPGx3ad1U4awsmqhKf6rpJBdqQ4iCzr"
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
