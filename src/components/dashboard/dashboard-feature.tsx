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
    "9JWBSyynmUnWTn5PY82r9HDw7Hhsd7KzAWjTr4TrU5721WagZdBqRt1tg7rUfGRiALy57kbqogpwmo76gEMQFGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bELx1iUF8Es44q8JTxZhSzukqqRssMoo7wMbZcFuMCJMLwMfP61xoaR6S47LDLtTP4MeEJ3KnZNLSFNAY1mG4vh",
  "key1": "XEZJwttqVQa3ULKtEpGPvSJz5dycLaEc2zZa3M2nMyXkFfs7Xbvp2jrUV6U4THK7FXnhu6yt3vNXfehxR4s7aF3",
  "key2": "5UQK2nYq9bdgmWboWKzfCHTUkgvpkjW8hw5cFdiMhMzm4ocif9L7Fsm2RyApky4EgLBEu23RHNuhU4EY1oaeHzPU",
  "key3": "54bG6T36jGUkpWpzU5Y7t9bjVi7h8ho1mrmR84ijDRxXJ4bcdKxi6rvghe3Bkxfxt6vTfGSZnz1JhfYiXDRaCvgK",
  "key4": "4VN9gmvQYq7KSv1G121U2cHiV1i6mtKhfKmHA72mYVNfTYn9WSyFcZWhcqAWr3CLKM1AqJojQKmM7pET1tumgkcK",
  "key5": "3H4EJcA443XEJVTz7xQhnKmR16C1CXSvFCrtwFDhqstxbeZSqbPEz1mty87u8ddjCvgVbo32wB2k3a7oAnt3Jwjw",
  "key6": "2x12dXpMdBJtBtD4u8dDnhcScsbsWJ8gwupXrzNveqdhVJwfQkNAMGwwsVGKXc32CjNAzcYQHdKiNJ1xhR8HnefR",
  "key7": "AxFxbeC6XHJgH2DoG4ZoYN9umoHYVoREYeWCjwmmXi8ksE7mvhir2cHvnYYe9JquqVQHUMydSjCMxfDnUvDVsHB",
  "key8": "61BdvfV3jX6PXvSgmFQ3aZQGiULzBz78FUEz7v77Hn8NZTq5oNeJ1mv7A83wPZ1XppiSbTTkzU6d1BzCkk22mCcA",
  "key9": "effQrmiaVSFJYFUsgE3KJESVxpw1q3E2Q8qBQWU7hD7VD5joew42HFSJPrpNdMnZGcjGdSBEhSZCh7d21YQehPV",
  "key10": "2SRa4dZWQWXA7qUDzBcD2QcF2wkXrrar2GMDXPDQo5EQ4YLkBtDrFdC5J7CBzeVdYXUbd2Ct7sjoeSB9eokGVMnU",
  "key11": "66rbsdbBMrsffQpTkfmRAiV2gGEcUGPr64q9M6NNYK7LJ8za56t1gJwpJBYVLVsstThDWNYpqJw3erEnKVNkU2ze",
  "key12": "5k2DUHuQwZgJE18uucjvnBtyyy4g6FMh3DrrCpAaG3nN2NcbApDYxqtEhViQjWYKoDXGcaU3ekEEhBt7N5A711r3",
  "key13": "y3E1DLFZFQFYMwexU4CfRM9JNAcwdmUv9TXapE6oT2WBc4rSWyrz5qq7zJ9Yj2fk67DVLWnXoCq5NDWEPybk3bY",
  "key14": "4WZdTXq8SoD2GAcLXua1YxHmfV2wYrWZm44nrNSkUwYJmojM6AhU7CKhSWRoUPpoPfFYZNKDk6YAcA34jxAFbAJu",
  "key15": "QgsoHgxMHVa8DqVtzBYqVEhWyQYovtNbfkvF2BwDpwdwBRctyvSbtdUV4BvxnFXBcxip1qzVM5gADfNjvUq3oyS",
  "key16": "2ZNbuEnm8mXhQ6b1f2KdjFiJM5vziwcQDKyQ9R4S1n9kTuocSU2GX6tc8932edQ3CVVuLNDXu45sisSPi7cpHaq8",
  "key17": "5AVsGEsmjK96YCcrT4vJ7tu2oS6dBjht6Qn1xH4FWqm5aoUN4obuv57SRExx7sAx33uthEyNE6teJm9XrHHpoCJa",
  "key18": "5DzguGBqhT2duGuUihabcZrkRocx52pNzcZCJHmEmas6DT2CogyQ8nNzUTZfdarH7ETd2pW4XkfeZQvU5LqrA1TK",
  "key19": "7muw54MEKzoDD4xbXLvesmUydS2vYonhFM2XTRjQd7kvPMoobjoiCoRNenxqWehyznhPcnvoDVRBLgzaioHYVye",
  "key20": "4Bb7NtWMsSHda9yF6HLCWxrwJeEzZQvMBW6TWBeL1MYb8RuzLboZtBB5kUcgP3ezy7ZdtHfCneBg8WYPrhmTXpdK",
  "key21": "2P4qSZNAvp5u8pqjZQnzMQFqYSRw35Kba3hdNT9CQaaZSJGC8BAvZywDqZhdZ71ohCb1VEGLBz7fyntZRHCh6JJe",
  "key22": "bVVK8KVKNaJpZujZMZtr2DB7vc4kJ1ZPibppyYNTUBXqtfF63xDoJXUiPWnqLAGTw7ymRMnZYVrAWVXrmreKxJP",
  "key23": "ZT424q1C6Md5ihkgADaXWiFV6V37TKHBUrUc3h6amQupQRgfGDREdpFLLg26CPhFvEi2axw1qUwr9gCpTZsbcCd",
  "key24": "4rGf2oFCsrRuLLMfA2TrZVNZG4Ka3jCf2g5Pd1boHPUXXXMDwuoLqvuEXRKfojPagkXq8mtp3yEfNMwHjiv9YQPf",
  "key25": "2qPzdADMBzGNSJ3RYDnzm3VSQNsJR2Qtni7dUyajTSruNh95Yh6otQ3LvRCrP6oUdc9bGfmMz3n3UYT8UVxDR9Eq",
  "key26": "ggc9AZwkkzRS1v2pbUpxqW9ZQzw4LYiCLdJb8RGVTKT9kbuUCoKAe36JUwZJJPhqDkVvNevfZ6ifDEafxWbXCUY",
  "key27": "33v62ExP16oBkgHKT2FrpkQeYDSMmJAKuuCSPq3YoygvziqhwqS3N76kiuKBPfrdqkpAgE7YTbo2sA4YwccN1jh8",
  "key28": "2WuWrJmqAXczZJ1fUX5AmSnJmFEAv6vUF8fg8jabWPHGZ1jQgXhdgKjETbBfWayEtj7JnqXxaAkzM9aapDGWzgv9",
  "key29": "21bjYVsTCSMEn5hARPmKyZJADmfq5DAmwcPEwk8BdLoa42z7Q5gr5bQR1k9V3VMp64H2Nhqp2J1ymR5XdfF2QrmT",
  "key30": "63idLyXAZh3dQ62BCjwQjF3mAhJM5spa5L6hRuudzeWDDxBVLNdZAyEVJXympX3sqztjcKFax1XcM9uJcJWemB4S",
  "key31": "2ZUanA2s1HfStjAbWuxCTbbh5nWMeL9gskQGdiWTj8xhyBBPDqfs9tRUum6PSZCCMvvXrVbKiArkG4S3sPUFV6bC",
  "key32": "9u1gVdrRaVaWVPAMcDgMsMWh5FsaAaAanA7M1WdQigZe8ByttNxrZru24uT52n78v8jj39MM2PunoAduwN48LdU",
  "key33": "3uwauz8oqDohaajpWmXdYYpQgonKzWA91Wd78bkqUTbVA61Ww7wWxurBdhr5rp2dXXtst7nCMfPCaaUGtq7ZQuBB",
  "key34": "3QzwDXf9w1FeH4EibJoZcfzJcLC7f96F3XJPVGQG2w6aJgo9nPHdpNJMYg6zydMXxKCjkB4XG1dxxaqx7pbp3m1Y",
  "key35": "56p16UZ1MM1jBzs2YfUnD7haYUXWP4adAaHsddJcdTy4bBaEQvciJufcNaZpH98BVpHq7Pw8ffAoVapvdDWij1R7",
  "key36": "4Ti23QNEKeYo5S6QWVqWYQVJm3JB4dYjKNisa8aMA9dZ5ojbxGdoAZS82sbqRwjhfivZzmCtoQxv2PL9AM4eAANZ",
  "key37": "4jQy7SUHLLPo3uDLuesUeJMbouu47vZPsks1sNZuSifJobx6ttjoVqSV9ySE7yCJXYpvbfkAMFNd18yV7DXS55sr",
  "key38": "4N5NN2Y1sKLfrd8cPvM2Ycgcmqxy12bcz1DtgGemfn2YkieQJ7rfntDNpVWnswY6s5X7Dfpk5YYPe7Jj8my1uLoz",
  "key39": "5esB7qJKUS7KwnZcThgoQRthARo4zjNmoBx7s5SR8ZdYYTRKJhcwWVdK3yx7whyBe1wyMhDweetq57gkzitAKXp"
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
