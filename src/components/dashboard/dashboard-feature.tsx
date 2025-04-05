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
    "4Sb4xiamAWzhBxHtYKuk2iYnWJXxF4Vx2uf9S4mothpRcUae7HDwP8HBp7keEta391C7VRCecrKJzy8gy3bj74VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJgh8aKhMYuswfQLZsF2WH5X33bcYx7ArctHWY2X8V4Hr4XFqkqzuq7BRWSqY7jAEVUCRAQi3znnyNco3BFwYvp",
  "key1": "2GARaF6zYuzkgEiNermQ8GBriphdUDh7ynpPhuGBVABepy3XAXGr5CEmE4HftE4NznDiGJteNvVmE4MHs2tzPWj",
  "key2": "uxbyw2n9JZCwRcXdVg1FuxBzoRmtAZMuHXSf5yKYfGCuhyeDvLj9jwNqvX4qiReo3iWbnoWSzCgeofinMtkKpGT",
  "key3": "2UwmfTExRQeWn2tF4pH9oFv7Ur14c7BxFF7sW98PRn6MjehVhy56FAn1bFVqRAjAHMrrzptbRDGc6VDXpzdvq9RT",
  "key4": "89yqySQkoPJuN9shrhLxUcyk8Aucb95UneFmpc92pmnyErFYQKJXn5AA2c9VWktqJQVqCNcSUEXW9NsPvrF8TTa",
  "key5": "4Sbf7G6MCznwpicqif8L2E1nsn3vWbDFzqvuRn4dGLv5eUXtb1v3YA9GaL94prHYCpyTHuitFFnzTh4qBn5ot7SK",
  "key6": "2SxovTVpvcTcqz4fN16ygCU8HH9nKdxPoVwYXu12bDVcTwVdEmsFqNn1aX4XbiqdjpWhP5ohNHpwD4RigN74tfjP",
  "key7": "5Np6V43yrTdQAuNxwEt7CZT2ieaganphWpaHwXhSUz3BWgkzwqsvdwGJsN8wQUua9GGQD5ma9zRNCcPi6UkbK8Y3",
  "key8": "3MR6fDMuugY5GyuRwtH7sa13qvKvxR5ys51nwtPmQf6W6fTHVQt4SKaboZfcn4pPREM8RXbrSj2zv3v8vAyL7Rma",
  "key9": "35iQquwbjDHRTT6htWVNJLnji3ip3JzMzmojxH1Rfd3AN3Wm6J7N9DAmcvoHreRT1KUr5oqChknZbzQJBbLZbxoe",
  "key10": "4Ee2Tw3BrhZVGP7ek57QoAVWay8zee6vghU6cfXZeAYNifGfBusfx2KaeHQYRrexXnBvVfWrQREJiyduiRsVswSM",
  "key11": "5DCqngS4zi64QtpkuoPeLTYtFqHm6sprZGYGq77BccpViS1P6st2FTL1S7BnxfFi1dMdpnVG2aX5M41FXzoD2JdZ",
  "key12": "2o8QgXvFySha3egQ27cwmR2Wf34J37MgMZ7VZbJUr4jFYJdzS9BQ6EsZkgad7cUc5oWxdhdp92s1AdPD6bFdk5iG",
  "key13": "KxS2kKgCkSRbNsxJQQDFXf7sMfCwG4K7DYp9RVvGL581mm9yVkSwBLAAbiE6DdU7AngkNSyYTHfecFdxwZyfVh3",
  "key14": "LwKvtpsXefXLKVWS5iApTowMofEZy4orfosmHqXxmYjp6VRHuk1WvMtPFBWSe2mEu4kBHDYnBeAKxAXu67ZdXiC",
  "key15": "5uUANF1cDr7KEDtUuMeojsrVph1yq7wUFEtUsQU9pPMcBLuQQwfxXbdiPJC6KP4RkD6pNA2pyiy5StZPAg8mSJZV",
  "key16": "3hQrV8VPBkFsmJnL5PTD5rN3exW2dSz7Nb1hrwGR8AgBQ66LsWVAZjKMAMwoPTaZkEe3SyijmGyhpN9P9UXJgLsJ",
  "key17": "3SReGs9ttTUwBh7jP6wvAyd3q2nNj6ygVPkkjDz1JbSHhewQEmb9Q9QAbKS5ipQWC8keWSYehcXiKDhhYrfEDb9b",
  "key18": "3m5JzqhZaCgNsPFM9YhAiUzUMRYXZG273gRdTEzMGvLBrAM1SRVzzuV7gjnRhp9Vk8B89GUo98q6F6pAQs8wqij5",
  "key19": "4ESGowTDGCCG4cLPi174yLzzy5K3KPxhVRh2qt95yGgRUDYXwARNbyts6BhSDxg3kqU3Ca14CJunGDwA29NhZG98",
  "key20": "RXjsMJTVs8W2ZJ81cJpq47tnbhkQ8ZauwSBZn6tniZu47xyZaM5WnNc88Sk8U8ptNWrE3BPfaEL9qafJHWFpyEj",
  "key21": "3u9VWSNVH1mGL3PE9XwcegWPMacS9i39NM2Frr3txrPmtjEBZoPGn2PHEAik6E2GXdwiGCakfrNhYRzXD45TYbWS",
  "key22": "2MdYemi8hQddo5Hq7gFzJWAXKFcREyNpWAoryUBTY4JynGSN4BfaNdoack3Npkd6Vj9Fxzf8eTEtE4gC18GdWTF7",
  "key23": "4R7CbVCdXaRUihRkmN1zxkcD18WFHWo4T81vyF7m2hHiqsd2NSYxWmPrr5WHHnA7uHhAA4oFkwZPGC9RZCrVwApV",
  "key24": "5VbNUYkbFgpH58FjgD66RNLeP1r5VnZpbcJ5ZtmPZ3nhVeXVPeCsJQbsueoYnwqNC1cDQQBEuJA1PTwX5unq4j6V",
  "key25": "42GADybpAS1vmVBb25dkRoPNA7KEd17pUVEF5dnsLKJdCBj6hhHzFjBi8pvVEzrrM6LHkmLU76zhcVEo5YYXm2Bx",
  "key26": "3xaYUf3o2ZxqAUukLgxFAqQDbnUktXkaDL2JDwbUHrSY6KjXj1pdVoLUYRsJWtC9T9PSGFesZsU67hiiXywbnywa",
  "key27": "3gYxHUcjf1Qdhm36VYmQT7p7wjEoYeyj6RsUFAAdtiQVrTNg8Xs5qQF5Nfoq8JwrMrmgwerawjaw4imcjYokXa5L",
  "key28": "NhrGkWF55QaTVhwioFe8m245vmXqrFfyw2ALUy8MC9pXJPixrWviUN4k8Dr5q71XNXu77iFmGAZ7jao7hGApBGY",
  "key29": "3mAknma2PL762fy38oByqQeb5k5pBXVBE4DCVLMgb1MeSr4X3CB3QUBTLYpttd2XzqEoEeyB3nZXKuumRyrwpNR8",
  "key30": "4AX2hUnPkCyst139FtSgqbaLWEKNwHL73yP6hjqkbKujgzWpfJywRTt148UNY3kNiyLxMPTNXfdtnun57ThTK3iq",
  "key31": "43YmXwnZYYckkYwV3x3G2tZ9uSfWZoXhN1BwkqdbgcoueLLwMTC7HKEkCecjooRwJoBJnuLcYje3K71cXZyRKdyZ",
  "key32": "2bSkoBv4DeWAxQ1XXdc5DLXWuvWX1UWraqPoP9bLs6btwTsmzTD1siAAtoS5NzT5awCnUMRYKcBFqitB2U68ud1Q",
  "key33": "zLz43PCsg8ii7LkWeMUw5a5TbZAcfZ8PTexX2ntfnubx8zaKMMNtXRvhtGvFuL4xfjmafkWGN6nyZQkfcUaDdJo",
  "key34": "594uK3KUokdsDqsTiyPFVyGhxEwUZc1YJxrY6S4asqcQQrCMnD5AuaDNr8uWg1zr8heaPQFdcjpFwNZddLvA49FJ"
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
