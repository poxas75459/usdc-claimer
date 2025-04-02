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
    "62WRyDfGoPYndrwn3fcP4oAi491smutjCf1tGxqCe8tVTAoThKX6TbNjAc4p6dk1pGi9gVufDb4HCVxxvWaAmunT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSkh6aXkye3QQYygCeWQVFuAW7tSroszgj1tMByMZoVYSZMfszHDNYauHsM5BLgXZv6XUhYgWhz7gy6mZZ87akj",
  "key1": "4wrJBx6oVJoKQe8KtJ8reh7pbgwMZJ462gkuuJ3UYr72WRXuEQMPumWC1rVTBAHNvXK68mW4VB3xZzP73nvYGV5x",
  "key2": "2TZQNyoiEHV5mVmi9MaPLYQjqde5WnyuKs1kshHAfcLW4ubUhthm2jyNDTcygMgWAJfieHL9tGKDRWL85viTYbWk",
  "key3": "3NDbZF6u1mEEjRHK5Jk5frA4GPvyfaXnU83vtVfFzjS6MHbvVzCdadvvJeweSw2BnUCwyPJvB8HL6YAyaVav72Tx",
  "key4": "JN9E4NR6AwvbW3dy4mqAtbbZG8esAbWFSGBn9riCJNveZSejTnPytv9HH7VvdqfFfKMY6RTENuRH6ReKFsAca4B",
  "key5": "3jkW3RqsdBtCsKMWKTxNiD3zDBaa8HvYHzTFwtmVAh6CpuzzJfsYCAzhn2Kz37fx4ZK3jv1XQr34Tpx7DEctjgVP",
  "key6": "47tW1zB4Zq82CHkpV2roGza2FUCkdTrsat5eaGUN6reYfUTfMMYhW2JE1pz8m9N5fQJB57HhRn6L5ThHZMk6icxY",
  "key7": "4voLfKrGZekmUA5tHHMeCctdDQDYs1wZ6SMeedc1rq6wHBUxQBgschHmaosbhX4cD8NUbVe95AbbQzwVEa4NWFGC",
  "key8": "3Tj3ozkvFLbTN8L3rF14ETqQAYdHxthZo7T1hKTnog1P4sNqN44jk6pzwbJNWuScMTHKDKA6vYTDnVAPc4qn3Uui",
  "key9": "36tQtAHYhw9pHq19L4NzPyS7WByHpkewtdka2KdpPmLi5pHXbCprdH84DpARRTii4yv9hSWVqLbhny9k579N8B8k",
  "key10": "4i8YGN21c6mw4WmgUpJxBmq7pKs96KX1kx2HTEoCKG7CCWQU2Pxr18aK7XwLRhJZebgVcnrhrnNmMmjxtRMQxP4p",
  "key11": "59vsc4LM1AAfjcKHxX7CfpHRmyuDceJjzwd1UpjapjsNjT7qNtrwoPhJ4Ab8rLrugkPtGA1UhaoEKCc7QqkkrbPK",
  "key12": "2gNncpeJianPKHXM2g7mv18dkcgu99VJhucpnbXMaT4iErFnizvM9VQw4AobFDH81Zuj2ZUbVAWXiALAkkjDoNyB",
  "key13": "5dGsfSpXXyadW1skf4D3qFy3BX4LsLtLunRRQtWsge8MgKUYqktx6AYFhhdyf6Qhn2FaApRhgupvBWzBbF7BKRcX",
  "key14": "2tArJrtizmFGTMpykK8dYRXJx5aLmUQgdrJKJxktddHDD1i7URDkFAyHqa6CnJXUUtABtfrXdKFFizXCxS7sR54o",
  "key15": "59PHbAUpuwtZyt6zC1Y6CW3rHDzrQBvLqHZrj33QGTp9Qmk3LFociCaA8y3tKHubdL5kDCor1cwPBKeQRigdeX8e",
  "key16": "gXe4AWomF3X4GZspT33zJ7hdd8DZHgzVM2bcbSqwYJm6rWgtxW3cwE8tHFu3qgaKQF4bij4yjAd65mtFKfoWcQj",
  "key17": "5PPjhSS9XQUghNfg9V69dWT7NEUzcX6AbNG8vjXFPxMY9La6eC3CNmPZct6JwJEYcDmM4YrV925NyuxXpDVbGwmm",
  "key18": "2CzjsZezPZ38Uu6vDY1Wd1MKSDeo6bEqDqYN27hTrZXwh2kTE16uYzfHLf9nVWnob5FFgS3CTxQDXcxb5TP596dR",
  "key19": "5rJsNFtydbGBbUSwobCAGqM8iga5QDSVo1L4soWd6VdNTL6PhY8NdYdpPNp5TttS3mZZwfH83WpAmxGak9qfgoQe",
  "key20": "5A943CYyqpmwxcWDHoY52rt8A3AD7DpvmBssnEkbdhi7bNrgn3n1pUC3irQyqTHnAVUS3f3JGa6YFPtp2yvNdQA8",
  "key21": "ewno72u1MLzbV3d34sTNc3jWAzeTDQXZSfByKPDAgwqksMU58a38bTPbaLDnSnsKXqh7UfHEve8MEp7ssXr8sRs",
  "key22": "4yQjvwcsphLo3A64BCuicQWrJyBMCJJtDXVR1uF3KSfNX5v1RxcQbNz3tU8kDawJDxK6caMDX8iKJsodCR6Mv7mL",
  "key23": "5zgovoM8Yi6gs7CrgMtD61qnVKZHExdm2gU5xKdXqciTtwHh5E5z8MfxFVGVXuuqnMWHt4pjFoTFC6jMMuAVy7B8",
  "key24": "31AFbFHPvGgzRAri2aUqs2WzrFDsKrXwK81XfRayzy76zNmJJeQnxH89vjTCD46evK2FDcWH15sgNNhQYz42PcdX",
  "key25": "35XdyNChpPy8pvJEJ68qZb8QDmewy2RrgR3xdYbWuw8tuYDrLRA32oX56hSz5qzHWufthKrUZG1oUb5AZnXsL9ok",
  "key26": "5124zP8aD2MwKBY3wsoD68Wkv6VPrBWW8KzrLB2x1DtmoyuCuHwzjevZY8zTxeUSmds2WD7txNCqpcdmBsnu2Yad",
  "key27": "4JK6QKpgX6usVmh3PcNZDfgqL6eBnRYqbPbMQJxMCEmdAfid8MoKtTyeMNhqoyRu5Lbmvw9eBTUMEVCJPHA3UWG",
  "key28": "3EPa6qSsJRBkdoBXKXm85CAZitekavKJfurPsG8npGKMFyiTHWH9fK85H47t48ahVTnW6k9bG56BQSHkZwKnprGe",
  "key29": "2HrKVkKaoGYrw7qRde8ya3P4SXj2jihthoPNinm4FNAijehpwQ6iq2G588oSQP3veUa3wtD2QrHnWfMb43rQ9CWr",
  "key30": "3DdAv9486bWWGZtc7TJXP8yd3x411MBb2PTyatXZfNh1wnDRbdTnTD89hVjWXZav1pDc3FAZe94DAUwBcHS8iDcz",
  "key31": "3dbmTsBc8uh7QjDKx86qJgrp2vYHYs3N2E98vqwuDKJ1kdnnMsqK8LJ7WpEPhuiXh85FBLysLuayzC7UKfMQZPg7",
  "key32": "582P8HheuPUAGTiMMxFj83j4EJE3o9N6hQRuguUteGBrcxLbCeooDk8kpqv7EhGuFVnuEfeVjamUt2gPBjV75YTk"
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
