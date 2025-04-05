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
    "4rZA7gM9WCBMj29STU7jG513z9L7TwYDr1s8v8zdS1KL4G8jj6KiS1qXfTttyG8bHNkS92ryq2DSPh46paiEcCU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eag1wKPiyEPpfVC9xRHzGdcZbYp1pSzK1Pet53526wL2UsQumtDqizhLNumtztmLmgNi1ZnWF6yVZADxCa81RWH",
  "key1": "5gYSehvxJjGj9C1GqVg26yWbP3EQaDXKAgJALGXs47vwkXjoKRN4N844UXiPCy5m8XFxAXkrDLWAt2YaZbCYeUGn",
  "key2": "67A4CkhqBeMH7sieCSj9BfQsG4dpNDRA5wugGpN3pVu8VDSMFZdMTsZ199JDdWVi3aiK8K1gyiWcPPjHuSAWs9fc",
  "key3": "KDg67c82TtQr4MAX3oiBRukyC8W6QmFKNER9uRDmGTUf8NhcHp6H4QQRabPtTNfXpZTa9jaQU9KWcadqDYdH38L",
  "key4": "4LGgHpeSP8VFsAvGKFJbTdJBoy15yexSbUDAHh5Fysfy165BbPZh4PQYPghsHRT15q8UEB2QkPeD7g8xZe24aj7u",
  "key5": "nhzsLPJUjb3bbdTsNKedbXUCyVNFWGabbmZNQgSGvyjVZMQE72PZmZCELjCPVGaNQisg9mvH3cPinck1jw8Hwih",
  "key6": "5wProu227BfsqJ6aehxrYpZyVqHHqLhSJktLqKYtSpDXYSbB2K1yERmLCn5j1iiA6AXnSx4Yjm3Eoo4bmgBKAF7J",
  "key7": "2m2HbadE2FZdeBHTzAv5xv6hVgFvzd7MShBiXXL6ENfyMUsuqk8b6WphmEcfGmpFvSXCir5QqRrkFH1wtaAFfFT3",
  "key8": "3GZmdj1DsLL8D3nThzavmkpS6CYhfixZs8f6oCCzZSmDTGDUgzKzYZVFooxr2Rs9nF31xxKAd477fv3pUi19RT9Y",
  "key9": "3sVX8duDjyT4cNBWUL1SHfb7hnZG1cwp6NrnrPaTXBLLkytH498aV14XynJT6viYDFuph2FWmJ2NzS6icm3ov3gJ",
  "key10": "N2kAsi2JJ5aYUqXAQr53K9MxwSHDruwLPUq3gXzbmZt5vCi5aCxznMdzHA98kbbouhAVFDuSrKzPFBcQFSUv6CY",
  "key11": "4w3xbbtybwMcks2keBaahzzE6152aVsj7RwPTzswo2j2xDcQr8qJNWbVGLXENPEN5RR8WrkEUYrbAUYqvibrrHtj",
  "key12": "49vhBwgfrqsfPrX7nfFLuv8Nxi9X7t3E4BQhh2AP9c5cTHBNWSn2Rf5PwDms1zgnFLdKdurbiniwUCNK13qMdP3b",
  "key13": "45uJvMxPt58zAuSHSiUdWRCXsxsEUcXHU7zSJUoaY54FQPMM5wpEkWo338MoEt9Xofk2ZUSgUwAifu8ci9Y8eNuG",
  "key14": "38xfFwHYtcigNcxjNPfqN8dXEs36FC7wrGZbKPL7qak2FmTKXDUu679MtRQzyijZ4pu5Vn6RGSHrezkqvaLeT9kP",
  "key15": "5QRuRcYGd2JntWU9rTvFSiLUYRMSjPqjfcBkCe3LT3ZXQHebfGZoAw1u4wBsqewzCtAVFtePHwA68xPJqWEjZwqh",
  "key16": "5XUV35zwwGAu9Wd2jJGmP84DBH3hxw1fG14R9kQREjCmrYCx2FeDmQpgVKUt2eewhVNcFhvwMM1qzrRQvGh75wzt",
  "key17": "3AWTyvMtEEwBVdC9N9qoiQxp49e8iXGPVsg2UAhmBbpcCt72UtKKbagpqDvUyXkUEtecc6uhLCWB6mAuQ5N3uTek",
  "key18": "62h9hXUVRgGiuKrDSzhgPaG3m3DVSfREbR1mn8fwYgLqpMVzTYAzRnPA8k3EXmyTR8u56P9AKnxn3ry93AhLDdhm",
  "key19": "5aZNwEcsAvm89XyV6p6z3fiQGd3p9rmtRroGmpxjx24UgPHwPnnZuuu1XgHiaeYuJuHfKbpJhvsQvJ2GHnqHRmiM",
  "key20": "2afSnUd8bBmANDvLEnu7zr6qYDinf1nYWYXbr227a825jMG4ZJZo5iWoogrY2J2uFoYor3AfJ5Zd1QtGL42DnWBb",
  "key21": "4SUHf6wJLr1ruVEt7kFDQD4CK2fckD8Krcwis95kDhn4CMFKeucGAZoHLbYZkj2x8qJqPPkyrxpCj7Zw3r6jXnbQ",
  "key22": "2AWV7wt5Kv6P4xxZG8z2ZQGKRsua9Y7ZrumqypRaeBzGZu9uypzLt2UqMmJU9RKYuVcq1oTWH9wcrHCnkLD9oLCA",
  "key23": "39FHQ3SVaLqcoWYJn9i5fkpM6D7qW94mkpndpUSaU2Po8uzJMwBNpibeN4b968g3ipboQyC7Tm3CaESMu4HBLxHx",
  "key24": "4BqRPXBWrZ62JuWgXNvTyumfbaGmUaaMpHRjgYBeVuDhxpo6TkbbU59T1GTcz4SZoYP3ZF66XEnkULLfhFaebF9P",
  "key25": "44auwn5BASm3AeqigtCxvdfGJ3K6vqS7GmHT6eUpseBewY99QMRfWNawraRGAk39mAjwzPndc2k1389d4xCaWvG1",
  "key26": "3vy2G1KVPWgtZV6pyTjnrd6R8FhMFtYnQy2NC6iK1ofj2RioQfuKZeyEHXQuPhDVJwyaGiiNBgdTbCyXD9GJ77k6",
  "key27": "5XFWfrkKTty8duNa5j2z6V16iCS9UUg9tNmA3BdWtMfYkxM1DgP3fMs1pbsrBt146ga9HQUnd74LzbXgMc1BRad3",
  "key28": "5yAqap8QjhPyFJLYxPAbcdNpFiREe7MkS9tZWBcpwTcriTZLkLFwxN3nw9p6krE5cNCoithEqB7aCJSFBFKiA8Cc",
  "key29": "5iTMAdFfA9JYTh8q888b3Tn7z9Wo3hAiBrWFNjcYMP5ZQQpEvou8By24K154QNhXRJkXjuFNFqEjJNir1MdWCBsH",
  "key30": "55Kwt3rcW2KVxbpyZ3NNoayB8QFuhDTXpEzaNoy1vGKcG4xyVaj8z6tMn9RSCNW3NzbUMytBib8eA2z7Sfm9kNLm",
  "key31": "3J2du4nGr6UEhCLHuzCiXdw2guv7V76BNsENiQ76g9quXGxpYLQXcB3RX3fzvA9GunTZQXjJ7jx8SW2uvehwqyL5",
  "key32": "2XJDT8Zx96j15eYARFqv72GMV739vXUvT6FAjbDfkr29kCjZmfJFEwKLbF5fwT1X5874GU5hxTbSLR45EyzgHbxk"
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
