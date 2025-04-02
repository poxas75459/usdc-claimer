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
    "6c9TiJ54dm1hq6zxYymRNuRXodKayPcrn5K7omKJd8zMjEoBLdLtGkRrJyuJyN38rmTxW6UGEDaDp8v62iU3brX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mBewGq2EB9rc9C97Li6c9mMbPthTHeiDcP424dYRGP4uUbVZJCdaex7Q2MZyE6yEPY62ft76aW5prpvxCmMa5tJ",
  "key1": "3mMqKzTQjgjF6LspSo4DaDb2DiW4JYjZN2QcC22Xc2UFwR5uhmT3vXs8GekbAXMCiHD9a2EoiPB1iW7Zec8fpXNb",
  "key2": "p433WtVKMoZMjEhznF45oNEbvmqoBtRn9oYRX2hGp9Azpwtkk4nWQdDww5NsYvGxD1VZpn18DTqHgxAcGBbLwvy",
  "key3": "r5tccQF2my9kRfmVddVq8MiTvypmNaCCUaZv5HcCSLgA49aK4DDfequVCu4XzU7uC6p5Knk5dGVX3Raz45EVs3s",
  "key4": "4AQU2658sLWPQoBJuKsD3cc8iWvUAKY2WaJ26qcbhsyHxKARzuhG1EMUdPac9kt1P3msQDUnrNJCSpdnjneoSnYs",
  "key5": "4GpLSpUgQjA8AgEb79M2AtghvcxTMdRvDVAwn83q3HHXJxZEoBZkeGaZ7hDWjZPsdCJ9zyy2gvAuav1mwVYifXfA",
  "key6": "ByKT7g9F6XkWQmk4MYC1nHLgM6asoAByFoT7f6y6iTjbaK3EQGjUjt8P58pduHQ6KcoJauHPpQkarf9v7nwfvrK",
  "key7": "232JcTU7UsEtLXgXdi9GVPuggT9f6y1KJyXmPmEbqi8vS98FwfQY1vDjMQez4qQ3C9rbbrYHg1KQu7tM3ZBk3BA4",
  "key8": "3BpsDvkp2bKo6EaZ8a7TJZX62wN5YMeKAhaZ6fwsg96w7X47B9JTdxcqBUpNgwaofGfd6jofKpcKxMa6MDy83ULi",
  "key9": "3zmuHZZeYwJTp3N2uNTK34536uWE4ckhBXfG9Y5qnzTsx14vapksZhxUevrXuhzxxEDBUUXfVHpgQn2Np95hnQsU",
  "key10": "5i8aTL5BMDBKnh96WymFoo1E2enxFdMCdVadZPLdysVziWE2vrK1W9EbrApZoVHXzYwt72uTXcsSviqS4daCuEY3",
  "key11": "55eQSw8oBubjKaPmitAYjB2G4nRLBquAsGUX32r5BPhBRi2QMhT2NXMsgwxdTVLqTcTnRq5hYt7SVSSttuFMjh7",
  "key12": "46ACD2iaZPoy4h2hxLgjes6BkzWqL4SMdKP1i6Y3vXWasNEBHhyt8arwnwaFFiTFKt5L89eevNukiecpqp8bGFf5",
  "key13": "fKiJi4U8N69CEEXBMW86DUNJAbNfW3tuW5EnV9kgpbr1oaQQ5DPLD5kpgq8HjNTxVBWxm12uXR8hHWocwCy5F2d",
  "key14": "5mdNhz5F7GZQui5GZbKqTQ3aRtzTcfjLoZ5Z5PJoubsK95sDPwKEMPSv7zGfdHhydPNFVzztNc3WjfF7BMGjAgqQ",
  "key15": "Q8ApbKx9JjzUFHN7b1Zxv8m59JiRYz6sgTFjo2LFsMwemmZw3QvckBdcSY6CGFp2jTXNbam72mB8NshTXGPBN6q",
  "key16": "2LicvVmvVYVWMpr4c3B83x3y9ZN3ypxqHvD1W5S9KADnVF8W2Jv1kbHG6epXat6gyCLh2KzRp9LWZiff6pEK2gmq",
  "key17": "3kKoVb1trYjYU5hwADiibSsBfm68hf6bqgLeoVSVxSGDNRzNnLRhrbzpzuTZ27nfijE59P5wyWWhYKUfMhKeP9qc",
  "key18": "3w4WtafjoyJPfXzt9Ck5EZtu11N4nxdXQcQWrL5sCxw4yHC827VzNixjP6HWxZQ845oxGfJQme1eow7BQCwoPJSA",
  "key19": "3yiD1NowoHiipukx8oxuLmLpHFrkHQYaXdcNZFDbKcHWzHMr18vuJ2tawxz7PKxhjpjdPm3L2WxZ8HLw4wRpuj6",
  "key20": "5eNWNKA1rUQPGgsZ7diGZp62Qw61TJ9tvFP7mgXVBVMofDJ932GVEe2ZmvL55AkXpHq8QQMdrUGkEan9WGwfhfQN",
  "key21": "QiSJivjjy5F8G1B36D2sZPCzEBuEFTYPd3Cc1hzWHdGmc5mZtaoGLse5oADQbdCehVFTLJ1JXnc1jvheGqVYx3c",
  "key22": "odRHAX6SYuzKoVqoGLp7qmkBKNLub6nh9eaSLLtinLBs9CofJtpy2Ffvf2ghynfQXk9Ypso6zZKdd2H5jRqKZEi",
  "key23": "5ZRrbDD7G6WxTzw9PuiqGEGyDLxDhzrJfNMeHfJkLaQ8Bju7Nig57T3nb5QSmCZM6tWzebocHg7xssi8FueUzSAK",
  "key24": "4nzpH48mympxh6VwF753VJjiYn9KQwvJsFRhF3RcY9vWB2qPSGASym7XXdddwrekRxKtsJG56R5FqPr4wUui3CDh",
  "key25": "474bPTjgzE6pBSNZxTHG8YKwfzm1bDJMCJhnzd7WnQ5Wk4tHX2zb5WESm8VV4XXcmgDR8PsgTPqDzWoQQ2HmexSH",
  "key26": "2v7v7ekbBJSCSmmTnKfHeNkDLHzG8fZ5d8bEpn5GmXi5T1PgFNSHyFqsVdFB2GZ4AEpNYkwmzLNhnMg35vCaXuFz",
  "key27": "3oKvQiTcnFZVxT7JvFRyrgWGxdgrd5E7bfyHDbrAxrJSccnkqxk6w59fVdBdHn6AVapohSFmGtuDtkcvjV4HMQy",
  "key28": "63XnP71JV8McLtk2VhvnM4JvmzYX2jaAY8RjeM3z44qxHXrmCWpMJoiXhZbXWyx9CdPzexwbAyBFU5VLhquYYujb",
  "key29": "2bjfmjPZd3sqKAT4HSmR9i1FRYG9oAFHJT4FZkehpvXeDT5YJcRNgeP3QotettVWoRRg5hfHcYuSSJhAHB7We1BX",
  "key30": "5g5x9awGQTA9xoJd5PnQoWmE6nZHJiYYygexqfQcrMCVLMFyBaEhP81yCimAkmR811PG5b9hecsSTdK5ucNHre66",
  "key31": "ugzgBgDpLdyb8oAu8JktnjdNzA52gMgrbK6uJjLkfoAzJf1eSdiJYrPohhGkWmFiC7uXxbsqNVaXmB8doWmXn8k",
  "key32": "67ikwknjGkD7UxaBTKdQuFEH6E1xe4Wze6tfdbxLsH3ajAF6Y7oVr4jypH35TDmxx4p53QoL6UnvsREK92Y1WxNv",
  "key33": "SMu8y5CxvL4miwwPpFbE4CjzB2Vt3yNyPgNwQMwBBTVbQYNVTyrUTDdkncoEeYYRv8ndxJF9WsGt3Bte7v1Xrme",
  "key34": "49a3P8Zzk9gmdZhMcpU8k3BUTSymiqy1BXthnEppgxvJ3JVwggV2BmMQJrxYDdJkp5eVxGSiKLVcQnLKWkK13z3X",
  "key35": "5nx885fewpFKuUWRRPAa5Q7UjSFCqAmtjvJeheqMCirbqhTNzm1xjD5KLErSbUTuZyaGP6raJTtPW7osBybqHX6P",
  "key36": "yaa8d9dc7qwKoiVZq2hTPm7jop45LYF5MMHXQBnUmjSCS52fUGUNUhjvk8JYxZEKWVdGrwhRvyeXuLqLHpLWRbm",
  "key37": "gFPKpXu87WaMou5SLZtWKu2iBgtu5BcF2sitxYToeY9iGxy2M474k6hUDxhC9C47EpProSN2yYVjaJQHAr8duZD",
  "key38": "5r3NuT4hnNXMYD8W9QRoixPGAamhxSRpBdy5ePBndG85mSDcktbd2rtJ6UU29Q3L74AACbx5wHJMeURBmRTwNmAf"
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
