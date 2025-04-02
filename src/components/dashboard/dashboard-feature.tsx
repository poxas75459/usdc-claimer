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
    "3dQsg6m48emDPPfBu8p9Z795vx6dSdctbPF3zgEtEgRkBdKhigsBPJYjw3TPLUWYfdNPgN4UTtvBPJfybSjbVWjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyQdLvtUyGsMaJtzKmKzC5BwkDoGdc3Tz1VcNZmttHmJqiWqB7U9qNWYKHAXBTAao1bQk5Ttq3FWxoH5CSCSASF",
  "key1": "5vgiYNuh2JFb3R5BRM97hCmkHgUtRAxuiUrzLg5xBLxf188KxGKz4TiXYANRaNnu7wh8pK83TYMKWTFq7vt9fXuX",
  "key2": "4XxktuPCGMqE791ZhGNp8YsGHsC5tjwA2orqPpwHDbfXQnXQN67LPBY1D16M1WgTt2iv3h4dzM6M5bvmELNxWZeP",
  "key3": "3v7dLUcpZ6bRKxMf4t7F6h5UZ7o5U2NfTjocQkA5nF8NGQmcrzPABdFxuLVD4ArsY76WetXtXvEeUnawx9Si5cjn",
  "key4": "5EronWBYSDRKitGQayNYoh6NTJ5fUr86boJuhq2yvFG1A7A9Nkc1aR1BijLyZLk6BhSpB5WSnAEo1dNMVE2qUvcF",
  "key5": "4ecZzMbyD7W3fwHU96pKquKpRXFhx7PZZch9MNfidSQVJ91B2UZckBwcZZEbmjuuX5reAir5TQwzawAuXZvG7bJj",
  "key6": "61rj6se1qkS2Twbkq6zC9DsW9S59VhdZufP7hzuxZJNQQcHB2Zr6D8h9cZYRtkhhvyraaPssyTaBtnbHQmUPJuGK",
  "key7": "4jAh3dDuSsNFCJXxGWMRyVGxqVJVxWrrwybQif5peTKkD9WZXPMeS6JcLA5m5RyVGojYQjn1dsmLZGKsF2obi1KK",
  "key8": "2pWYy1R4e3D7zBo52A4tcgYjJndBwNC9uZxFuDrMnwa52EP1Q5HhdW2tYybCD7wtpX1vbK8eYtsLpSzDzpdVopUP",
  "key9": "5r9Eq3kCdhBjfMvB7RAebgngLiTBJKzrcKocmHw7jfvz4nQn7d4pn6z4JCR2yuTykzPc23nsDfCQjtGoANLeVfbx",
  "key10": "5REUBCtbNufkhvRWpeK9UP6gfrG2bV6gBkpnzn3uqpabcgHqumw2D6pfJ2vWRHQsjNtVFMP53Myafctasf6NuDnm",
  "key11": "4gkUzCTjtMf4GUCYPga8tfyiHe8Yuunn4cqCjya7QM1R9SGs4eDg7Ww4kmnNeFAFakWD2Nb5j7U8fBDckUiws8Wf",
  "key12": "4SFgDWda1sGr81f6AosDyqbDJPnAzfu3xDJLErTS9KGUR522oiKquuRtHHMs4NQHwom9y8eiN2xfXtEbQh1PbEtX",
  "key13": "5EKAsnYADwea6ZJdpNmv3AdqCi9wto21ivVQkosifoJ9x1uUnXkLfF26o1uhft9rwkTaG6MfNxyGPGBqZsGHQWq4",
  "key14": "4gGh3LtYRdL1nZMVUKKsjLVUxzky4UMxuBNgRW5cMgjpXsVP99NrDJ9TasDXzJwTe39ALWxY4C4gpPeWBPWBnHzY",
  "key15": "3YuKnxDfSViWpk4b1aRx9sVuHoeuL2dT1EKpvYcvQTLAF48APQcGR5J2P2NJhLz2Ggbpqi6wYcY1KVnjJvgjZPzH",
  "key16": "5CnyoEpz99DGB4h9JoWu8CRSqocjhbg2kRpqVeGsY4QUE7sXxKdqbPDbmzqHD4Z3ZfxQc2wRGFkD4rXM4kZyDeu2",
  "key17": "3JR1ErfbsBUfCYDa4247HvBpP72kusWX4DneixGGJdG3YNtewDYpDuNySAUNZyd57uXSTXF6ZKkpgLGfyQ5Wzrsf",
  "key18": "4GsKcKvRfgPXPjjs4wFmBuDipmvv7kUJKK5YumTuiJp1U6CAVryPYK5YNWLBvJqofnhw6TToz4QqsSEh9Qc9mTfw",
  "key19": "61ozksHW3UNdJQJWDSZpMXjZ7bMVH3o4gX7w7kiXiyiJhx2RzZC9z9hrray2QDdKN2cQnLiiNvn6KBr8N2LYpYua",
  "key20": "4TxYqj4pUACtSehjnostrGPX3ozTT6p7Piyfq8vtmVHgaLPvyatU2DjMvCCGgGPfUe2xf8YVmSkvDHnUsrijJgGN",
  "key21": "k7iEeFyYj7zHwbXy5HcLhFrHGp9ByCLXVHvaTKUjmV5JVBdxAhJTY9WdyQJgQPU66718HR89hx14VQVeJQL7ynx",
  "key22": "2D7yjjHyRyijXmdJ188H3kfp2vmDweXSSBm3n1Bu9jsjtXTk1YPbwsywWzfaY4BWJX9knhEwHSA4otR6eQ5cRTmM",
  "key23": "2ES7UTz2emH6vycaqiHckEG41jeYRtpK87wk72xaGsZ58i5uU2NYmW2oLv2YQfqMPWjiMeUKZ2CB56D8YLDvxWha",
  "key24": "3otBXXgccnp7YRpyaKfeFKihXjWs519oGR2gaEu3MCz35FDq6o15KLD4bkMJWt6zrMWje9TLzhpBYeuxcg2usxDN",
  "key25": "5UKWSk4bv7WZvhfboSBbHqza1KbUir8GAVcCNH3JVkj7m2MEj1nMoGhPKfMHBPTvEt6Wp4ivJ4grpUY3BesfGAEb",
  "key26": "KdR8WGsbqixgmeSqrHd1JqiAqN8tHgNrkTT45R881dTnRfa9XKgBLAhNLUx2uBpjcm8EfJdL31yGGzBuW6C8pin",
  "key27": "4cZRazsLYxTkTFuaiXkh72KV6pSr4ZPs11x6o2mhLPGgqY6qH713gmZPuKnqRDKD8cv2eMM1V5aTRurrb4vWQGGy",
  "key28": "4s4yNnYbEM9cMcneXAWkbbB9dcYwhwmGJBaGB9fRfPHKpFcytHPSj4mvxQK9yaeSmfAdH7c5hCohwyWHoJJ5Nr6V",
  "key29": "kzgDBUcNg6KMW3JEY8Ds2NSPGCoukCmo33F8zHsohcrpp1rPnkFTpDAY4LNvpex36quAFqFDxgiMGw5cMDX1j81",
  "key30": "qbPuJ7sYmHeaS2Mh9jAVD7LJLN5gj2cTK4Yutrw8MHWs8gPMe8HLPJX7KSzD6P3KyRgXPC2sQeJcJtWLpNghACJ",
  "key31": "k5Eo9MhiLGkQk6ATDc81N5YbY53Tmf3pToG1K51GsCyJjGCpuLJCa3LrETkhCfxubQLqeSWJeLoSJPbg1unEfVm",
  "key32": "5H8YjdeKNsTUthjUGeiNH25Vuwc84vnU7bcYDp3pvP9eUC42NpedRiDkwY1uvoZAsDy4TJsnorQ1hep9jjP84TAx",
  "key33": "2EKJ8dfwQ7rF3snQoQdtgGi6t2kf2mvadq1Xx1iKkPNUSWFTbrhCaJn1JTW28nCuR5JGcyA1zPt6stkkLRFNtxJi",
  "key34": "53atgxhN3N9z6JP6xbsoeMHS96Geof4wGhBB2w5CdfnzZZtpQdq6SNqumJ8st3AfAnVtDB1UiZNbNyF1bcC9bqwq",
  "key35": "3JuMBcbt9s5S6QDLiuv5ZKiuSuAtzK6rdX7t1QuWaDMM9HxBnnN7QdZAj5ANZ18ug4MR5vkypJF6rUtoj5kvq9Sh",
  "key36": "3QotMedj9R5dCTjDzxgeq63Z1XqkuGxLM8ds9akwtCWfFPKENMFbfi5u7yFLXqFcD7ViNPoGC6Ysp6mQeGoSQRdz",
  "key37": "5N8tCYtkrw5SgyrHnFRaFNkYHqnnmRkVvwnZfY6eJmY9squyor16Z98NvV1ZVx6JTiKR1X36wpGdKfBaFRe3tGWS",
  "key38": "5fsKrGKgdxcpAQewoCVDQhL9BsKMouVCuBDvqpyE9fy8hmsaMgHbRYx8NTU1kA4gMVj24tusA19gUhHPVZucU9E1",
  "key39": "SgBx5evRYaXtv61hZztdLYhnBQtRYYoD2VC4hz2Heho2BbRaX8aQhCiMz9esG5asjd1sAVyXYW2Q5i3bXEohJB9",
  "key40": "sfQp96ccWf2hXhLgEZ3qxzW15cF85VzX7Kt7NMAhwFf4UEyConVY1cqeUNvrzQEed7bRagBn3kaGfcswvBHidAu",
  "key41": "4NZcgXxURJvp4J5kG5FDMfgiWfwm956NiqMNeYt8KcYb9LSCcUukRzjtE1U2QQTcMNrzh11K22H5FGbptdUinsRL",
  "key42": "24ePPaMe3zGB1moPKmtj3aShDFiSggbJUbNX5DE2nz88ViEczhoEAEQBT6EUErhZTg1dgiePqpNV1PS85UA8tfsf",
  "key43": "Z5mwoJ96DbSDHCQmcGP8yBnHrSboKWx15tmZGjFHzd9p2emicWwBq4nQsEPW8WUc3xcpwLdKV2kGuUaNgNtq1sn"
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
