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
    "4hfk7YtDU9HvZ75TDyQZ4D1LL2vFYWDG8dAdqCdJUxstx6qpuvd8L6SfV2nskx7cWUftByfsc8jfBxParBuisWic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sRnsuPgweqFcPdwvXSzXRfyY232pnWimNVQaQ3eLoXH83dY1GnnRntMidFy9jDGYngKnqj6Bjq7cyTrkBupiPVp",
  "key1": "f82EkcsoPzvL9hPp62SSg9za2zZ96MfNUjNsSD8KsgtT3HwMHrdMPLbxbAiw9EJNsKeqie2yGsupkYBwUabsN6Z",
  "key2": "JP6tG8KWuqKKSJjCisws4GzipaJWBHXuN6VWjnu2cG84PZnbPygBm4qjBPJte6EzjrLu4YUtEg3CtjeLCp7Sbsu",
  "key3": "2z8xr2K1MCVDyjcKoc6gQBhTm6QtSZ5AcyjymuvdUUa3CFccCVz5ZgRzeZQUDasxzVPTNdMgW8eKnQRqG41EQQGH",
  "key4": "4kgnsmqDU1hHBgKXw49wt738kNUnU7jpYoVfk6JuKQ7CEdTeoHX6EcYf2yiq5HvYs1AgUt8S2xcKqU461Ehhz5ib",
  "key5": "4ADwuaqmAwVfdC4z7qTYBqrb7aWPKMrXtBxrgit6zgT5SxhYNkXgCU4EsUSw7odkmKUsrDe5awE4CTRz56dT8kNY",
  "key6": "vbubdLNTpKoudZ2krEw8rVD2HHWWmiz2PzgGyjzkrToWeQRvbU58GeqLvxPsbSDizFVwD83Xm2cHwaGNCpcZX5H",
  "key7": "4FRf1tfiTR396mh9khh1mu7sJZ2AyoYvN3GDZmwCNjByHLZmF4WpuCPLueut8GuWgGotUfQTfLQphM1DozpH2aQn",
  "key8": "3WN2dkzgXQK62vnAbb7Tfvk7bVbgJH8ejD9YKHYA3vxK9MxzTYLsK5ehYejcGLDiMWmgW7hKUayQ45cmKo5rETFu",
  "key9": "4b6eoSCPBZQWiCGYmgpNeHc688y3G7R8q19Uu5VL9ygUkApLtaX8q3FYvkiVo9YkgYax3nuVbTqqZfgRK1V5gBmZ",
  "key10": "5PC1vwZr8x5H6X1jyJbA9mnhdvYANz8rE2d7VSEPGNsAPXZuZieDBrPzzC79U57azjknn5N2gpPHteRSnUfTB94i",
  "key11": "iCJxZdLiWiJwCnydxYVroSo3BsmSmHFNt94KYnUY23TedbFsKj2JJAESC8vteW9VzZp7BaKYfJj56S1oSCRXg6H",
  "key12": "3qtMKZzzKoPmmqu8MrvkPfXWsDZxMz4ZPT3soM3SmaF2A1LeBZkHNUQkUqDGjvnvidypxwu6ySQVFj49UWuSAMvX",
  "key13": "2Hi1K397nRp2ksaczYkeFsjhSKFCzmZKGwP8okhjLfWmKHG7LaJAsfQPMJXRxAq2s59BPWGCZkMnq7nk4krMSGZ6",
  "key14": "KpAW3dXWD8VaYgRyz49afuZ6FJgm7CJBkq3WLQJgAF3HjwQUhG2BaTUG4rGJ1FBXEfGw6n8YbUyJaTGfu5F3394",
  "key15": "5CmZpbT3YZvAg5XHPrAy7kFbL4beZH2DhuXuUxU2TgnFLez3KtE6ZX8B9MCQszARxJMy2TxDwh8thmSuBN3ZaCcJ",
  "key16": "3LDaXvN23ngDE9QvX6kWaan1TXiYiXawsB8Nq4obE8WSm3xmh4gjKW14E8UBFwQw9SpWTszbT9xg47w1ynu6XKMS",
  "key17": "2em54ukV1AypGPeL5HKeDEMVWyZakEZXJW7acnReuDchnYYk351utnq4mvqMdPo2BP1SaW3BA88K5oSw1Y1SbcLf",
  "key18": "4QA85ugbjW8h4kdoA9AdnL5DERVQSkGjeYxqafjamnAHRq53tLRmkgRwDf1XcRwzxWdfCAz1T8J1AFfJ8nUU7Bar",
  "key19": "3yRtRJQd1Mrek5k4Vj1qiEdrQS3ykAezRv95iYP1HHwP5PCnSTPgF5FnnqzRMgkKP7m1FskpCoUj5FHKR7G5Rzyx",
  "key20": "yVKyddKxUmvLfyvGECRcpjEYyk6CNuejW2vn4Aimk4tzphhTkQccsd6UDuz3e6PwiFA3VmFcwiy8k6tCduk7keP",
  "key21": "4fGDyPgLecPXgdHbEtEAUHQDF2LbQgA4e9uY6cdDngA12Pkb173ZCjAFp3GsHzzssCSEBnqvjckv5Xz426cAVvMe",
  "key22": "3MxFrKrq9WidqNVQmeYhGYTG8cxpjzFei8D7aFwQc9pWMwFmWj4HZxwNs8ecL58CXMPw24qFNK2pELmMXpZ2ozaq",
  "key23": "23eDE545pJCEWGebHtCHZn6jeruYU4m2NrB5kLpwvqzHY4M7iEaJJDkAVrzkwchKH4Xhn1zj1CGUQChKvnzdRVTf",
  "key24": "4ArhTB4U5LvHr4HTfTaaDv7WtxZw3HwMpyBEboNakKe1DvAMqHHBnhMuTTZbp22qdswmTMg6hava5QHS5LcsmEKm",
  "key25": "28p7cBPaKacuw7WLDMrTfG8btQtYUPrd5GUxCNGPBEXGnEupSjmFkawk7PEiEF8ewSAfTKqDXLPr8GJP1kuqR9ma",
  "key26": "4pWGqzam6jPGkdV7guKCnggvyNPS62Et2KSzDNJrVWKLi3JPReBARu1RAGEFu1Zab7wN2wHTkgh23zQeX9AixTGw",
  "key27": "5tyxT5j2gh9t4J9BhZAzkUkLw78VQWxZ7C5Kq5hENaNBfSt1KyndofJXfXKkTCC6H4FtALRWmYWfzGVgz5p2e7c6",
  "key28": "3YSNYeKLy2nDqoGovCYCzGkBGQm2hp6VrGRVHbYTPv8M382fJTbM8gHrbVqVXa4eoatREMpfmZUFDV9cZG5fMPX7",
  "key29": "3YgYUzaWAfKTzX9wV978S8FuDe1NU8awKN44NwqGoBAAMWx8tMGLLd4A9oStfC8d6yEEHRDaH7zmERi9WQdu7C6v",
  "key30": "3ReE3hAc28wBi4cdyEqnEJNCq5UyG65nAgtNMBYR58hJky7tumGo6n3xy1aFa36Njz7G1oaYrztoVXLXYDwJ1H3Q",
  "key31": "5w1hJACZs4rq2TkCueircnM2p3aGBMdHvsyvHcTU4KPW1XKwC6x75oarnhD1wcsChnEP9y7w9i82psvMZ5biruSN",
  "key32": "iopf8xAc5bArr4codfapCg1Fzj1oioMWANyEhoLRAJM41Yseab8RoSnAenVp9jHb6vTQAZLxh1E1heKpwQVvgtX",
  "key33": "2tdwqVxzNA3J5TmemEyoP9qjLp66m7tvwxaaH4N2f5qJBuwkGURXt7YJ1vUMG2tGdhAjxY2q3zchaoDmorUvEJL2",
  "key34": "SNMVx6BhDJrFeBfWXtu5o1Zd65zeVR93jRiXNikD9zHGgQ15STXXQvYcny3p3qjcEfGPkmw7YzbWedjeXW5H2xf",
  "key35": "2sSVedjrmYwVLr9pVQ7aEypczysP1WL7AoJtJs2f7XseXL2Uz5WUYT7Fe2CWvsKSKojAV3L5d2wXMhmYXyWYApYL",
  "key36": "5Tx62E6BqJj5fQXsmRR693p3o2waexc8qetcvPvCQyyEHoDMfQGSfV6Bhi4a9t6ZkViHeVHuzr6KDsnFp5Skb87X"
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
