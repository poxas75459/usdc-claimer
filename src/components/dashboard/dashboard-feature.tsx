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
    "5XSn7u31gZvo1a9rhMRBbfgGu6NJqWoN7ji3pyadteSq5nyvh9hMaN5qDhPNy8VcvREri846RhwJnYQsvR6bp1g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2668nY2DtSQyUhK818X2UfgqEfL3Jm5ehcE4X5mT1gSRctp33LPaLNHvYuVi9CCUpVRkHz83MWQqTP1KLKmRuHDB",
  "key1": "48k9iGuqyxvrfu3NUD4p2c12JWfeT5LD7BeK43hy5xvwgt46y4FMwM8DmnqZ5cLVXAKy8GgZiXqqrFZ6rFQLm8zQ",
  "key2": "3mVqRLhswubSMtVutaPQHPgK7j3J5B2Cq8hVTMzf5PkEayLbfBy8U7yvXSoWuLeak2v7BH5icG1YaQmnJiFAqaBj",
  "key3": "3t2N34bRtRYVk1xzD57JfWBWomj3xZTtUcbAJYzMhSXiMJbGcBSoecFXhqmUupjfM93FXDVfw8YGqprnHKB1Jq5v",
  "key4": "5F6DCmi77yKMMCX8j14qkPksugekReBCdbnnJY6cA315xwDNobfiZwmrtFBwqXtryF1RvAFnQV1j498D3P35FTP3",
  "key5": "2oYFLqybtJAhGQZpfj9t8dGiaHJZPCDf8c3fqYNimD5DKis4aKy6QQsWFmTfco6yTfzaaEArPM5Tbh8Cegs8cUEL",
  "key6": "yaoGLrgdmj2NAq8Qa4Qx4Wku4SkxrUWZJ7MaQATLmDuQRGJJ2Lt7HjURX9yAqS1A3NFjgpMFYWeeGi1G7gzffXh",
  "key7": "3rSUPb497pMBqjKqgF9UTNG4hXj4mBYyQD5tYpwmsNi3LNKiZh8G9hoTxM2qfq2VvxXFjrr3bMM7NUQk4VpCuttz",
  "key8": "vBBfqf8znnERp4Q7uE5mcQRXLhjT7LEyukAFgSBRd4crNyaqu7cfvRZbb4CqTEV696xms7yS3FdB9VaMA1yd9kT",
  "key9": "5ver9oTchZ7WAT7CBQTaCe1QM3Zo9GFTYtM5Q7eUUUgUDsxJwxobkHBf3nZLv56TtbD1NqMqgUrwqye5SXKBza2N",
  "key10": "21Q2EN8gCrgEmMc6m7fGGbmnNfK4E6AuHhnwgCDMSC2Dm6RpfaXVu8XCVTJ5fSQJAn2Zedy2K2kgqYWE4kZ7mTcQ",
  "key11": "4aW38NveorHCVXNtTxxkERu1GNXy9YUjE6txd4cdd8tgs2mUXpWwRon2tZYLudTEXsruds6ANBuUpgC9haU8GomG",
  "key12": "2XbrFXe96HPqo9vmHt41dchi8RnNuuZWQ1TuRMtfBWfXEcrnf9PsiiYNUfMnqNcvLPs8qgWFKvore3rEs5P4WmMc",
  "key13": "3FpbVFL18kpY1wbfv8yyRfNh3aXmGui8yrcDejo863joSDX2XFGqnmPXX84RwfxKvS2ckcxrxU7oQFSbjdXguscE",
  "key14": "3pvmBMbpBnqDMquMadE7yiycFKJM4ddce8hMAoQeLxTnC2GdaRujgc85K2iVXQJc8ihSiaaZpsd2LdCTVgkdMHXC",
  "key15": "4qQF6wPbXjWbUUB4LDQskzN62C6vRGdRVcvZGsP3Vf4NqEPULiFSntZJ9MEwRhdj5tFUaM5GcF7K54FVgRjs3YB8",
  "key16": "3z7CV4wM8bMS1PfdUuHoyDBG8RfQXkpPVxYYHoUTqUW5QTuV5NqePg1VQPac4XYjpava1x5NNVwauESfXskawEA1",
  "key17": "2SvYMTT8cEhFyDs6eienpK5BkRHvTFkSuJjfrQEUDbG9tVeu22N5aYUBQic2kx9Yn6yWeTNMDESktXptGpjcfo9i",
  "key18": "3jUf4rfoopo1z7Ya39ZqKeERVZ9gvBq1b2jo7CVBRDuARFy9WCbhXnC8CSdjKdsJKWV2mqNkL46u6Mf86aCmstSr",
  "key19": "3YNd6nXaE8SkkzZf7VzsNrw7Urs78mSiJ63AnHqPVP1WhAVZoX69fVyvsxj7EqftyZV37qic1RcY3oCANjV54Fe6",
  "key20": "mVEJ26c5cpfcq3kDu4EL8U4gL19zeETLfVHT7oCAiBUEUYA8FWXJCP9P7aoJsxM4BAUYJzfSVzHDVYuqjexBXHm",
  "key21": "2xmQyUuULPUrohCeWxnFdHGS7TFugnKTM78renQdxUg9LSYWwdXxaYnVXcxUgVQaMbvUonZQc87VxgSAarMWyoc8",
  "key22": "31PD91YR8nufP8eLDhk5L8gFzyqtqtAWNewHdgqyjXxVpuEtMo22MxcwAieW5v6YRU5mStFDBfg7fDaaU58ojwPr",
  "key23": "2nvtW6JtdaC89oYoqFuoMk3u4b1t75dTLZKWig2XaQvKarrnEKb3wnnc3b392zMvru2hbb7RZCHhtX3VkJZrUSKz",
  "key24": "4iAwSjidXv5nc2wc4VbV64WnkG5hndbrYoR2BnJUqt3C9jPvEoMqyqY6grYPWeLyJ7N9zf6MvTMHXj17127JabUz",
  "key25": "5vTa6GcuKsZhE6j2MoEqejbEEEzRxHZHmW62vKBQNPdxDxe9g3apPgCQ9ko2s5H1onhPSxA3oNMwStNvcVykFt8h",
  "key26": "4XQrTrmTrW5UofXQN2rsgVwmJCzDfsvTcoNy7QChSWYEAimzbbGHDLz9E15S5uh6tDeCgCKNYqKU7ZDCNyNq8CN",
  "key27": "36mw5CsPTamCfvcMq8rcmGvTzAjDGqvXhGZPZgqMHPK8PZRDS1yxWjBHEgKxEAyu5N9NcBj1E916odaxYz9RFDUw",
  "key28": "3xrixFio7YTyRTcdwxqgYnUBas1So9UzDPmwLy5PPqME5Q3pTrLorbAhbF9moN9kKdXEqgKSsLkn1RNuFVsdoCvG",
  "key29": "3keu93xeMJPYyBPbLN4NXTAWtLePSWJBczPm8CVFKyouVnqNDyyns6o8Dqzcf8Rhb7hR8JpR2d5qxQuL4D2Wcruj",
  "key30": "3ecsQK6mZ8WU3MZQSYRtzV2we2t7TPCEHmGHJ1vZfF9zDvsi1REtFbVv2jBmkiwqAhVAZLyGHLB7zumdbZGZdswd",
  "key31": "njNMVPZDBmAZbnWGUUrqyGGenfP516XPuBng95jHqNVm1iFb8FM2W118jJxTJd23juZuzGiiKqYQSLXrBMa5CSc",
  "key32": "CxNxrHCvVT2nrvCSffWjYHo49ig3wdUHouMc1gzt1uz15Gg6fjjP659qbB4HjwQyW4q4P7VZGyE2MXnyRV8Jg4z",
  "key33": "3Cj54FZpLMhU8zAAAdw8cDxGhBhn2Hz7mjAUC1mPgpm2iRpzMio5pW9Q3fB1hC7qyNfKwkiuiEJweumVdHmD7Vbt",
  "key34": "666LibhbAkJWZ85SdEfXdqpeFT1dBJMNaGXwNCStSNQwiMzprfksXDpwZp2DtcvJ3H61YgMpnCULrNnyAB2XxZx9",
  "key35": "5i5UTiBa3XMcucLrkt8A32ehqeK5pHXvTSBqnby3oqxQQdxLRqYT9QbfVRtP425BUGrmNXTJ95JtnS7sZJov4qr8",
  "key36": "2h9SoiVAWheUYnzKzHwRKxmYTHZvB9ezwvxqKggE3xpLotyH9yDhgFAxLaW2CxDH7nRi3GpqejQ1R6q4F91CAFY2",
  "key37": "tSMeLdJDZDLNiTnjiS92yX95L5EozJCbBjFhsc2NUxdHerQR99U48mqzB1u35aE7mTaddob5tWJfD3ojZvetSTW",
  "key38": "2BGi84xkqs3R8EZgeK6D3CdeKJTuyPJ17NMfkB4kLbBu1WauSr5hr4fc1mtYKKDZYojWWH5QDoVDmQbYFFcmyttF",
  "key39": "3QhfiKizN2gp52HAN1CVdzzUksECndWNzvJwPgfgB9STD8N1c8q21JQuTonwqaaDA37xYNu1f9derjUYFKjVS7MC",
  "key40": "2pf9GZt8pVVyqvhXZkcf99wA7HmqFgBQ5AMsAgP8Y9Yfaq5CTVJk7aryuwEKPha7RCqfhzhFWC8JPnBWBbCD5u2n",
  "key41": "32wBTEvbqckkbYt7qfXGxNHc3Ys2FzM8arWntQDCKmWapW3uW7FBacjtSTcqLDdiiTvevTkGEmTwNN71D8GTXaxT",
  "key42": "4EnCZW16zFjY17fxzQDTKkjWwkR7emRBf38Dw4kqbVMipwz9vAWdZxEXwVj75itAeHMjYz83NHNCdXc4hN9qm1Nn",
  "key43": "4jMt6XvmWpsZ8uXyiGEtCBviJg8KYsj3HpphDesKjGfiStFRyqGRkGY6WwQygtRoCoRpTEwMymzsZdnDtzgonpTy",
  "key44": "2vnWgKXK595PXVdQndAJ8auipqNJf6LgfmSB42tMriK2A5nz53ZxosocU1uuDPeakh5pbvQX7aJn425agz58VQEV",
  "key45": "3wZy7fgstf7bd9FFhhGd9pgwCTbmXexTH6Qfqu6vwvnu86YhVJAHEZ3XJeLW8AFHFzaqyMvcEufnKA9tYeFG8qco",
  "key46": "5yyxDNiYbP2EnHA59TiSL9wSXCkodP9TLZUKwiuqCvUkUhepdmSZBFji9A7bxD3nEAnDiDu2VXufrJbiSzfREt4b",
  "key47": "B2e6FsBmjyZ1FRXNC6fc2Q2Y4DLoM5r66mk69eveNMxYzzsxLo6AAgmGxDmqLbrxXoB95WnewqNw9ut9cP9mJFD",
  "key48": "38tf5CaD5KWmhg7s3BA4pk1vrN7yVaPcE4evf1f7Cxoxyu9zirZUEBe1ysiVtaM6gN2efBTjZFUTPYHkohJsWLj9"
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
