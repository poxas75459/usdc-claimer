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
    "5tPigmsFEPYh8WJj4vBevJoB8dUm7gX9BFSA3hQp91PiREESvcHSikScUbahkNUBYEvHqtttM4RwLJmMcQT72k1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zR1BcSN3EJr4z3CCD5tE45887HBYputzsGs36BBStVUPxXkPrPTxHQpeNfJcrU9BuEXLvxsJPhNCvUoxqKSw8aV",
  "key1": "4ec19mp9qJzVqgXTNDhkWZCMJq9SihqvHFsaw4XeNjQX6WtuBkvdrfMDWZAMsMUsgR6ZK74dTEQVTLAxGZdqFm5b",
  "key2": "56PtH6hb5E2fWXJJKiE5yi9NhDGi6DmHWhTpuPVfQirhihAugxgaXwFyZBvbD5DyxabQFZdFQH55aUDxUBinqKN4",
  "key3": "3Cr6pc6fTn33dqfkvdy8jWzp8mMUVhXpkmLkuMvsbb7pYF64oUb16ghKJRbAoSqaVXqVVWZVyK8r5E56Eerb6Ha3",
  "key4": "TvQvv5PdXYAqoWYUtHQZbWDHb1gYrAHT5s7jCtyPQqmxfyAEECXWuBfSQjFWWKjY1dFAWNp23jiErfYxEpFjFkB",
  "key5": "3XR6DrvoyrKRj8CotwCdYkeGLjEYKFNEa6f724uyAW1hjB4su8b4eoDbvdfLLJnWNfGGne6HTowJjGyrLDKyoN8E",
  "key6": "48LAexmtqBYzCd3XkcQQLmeWd3BcX8AHSzXiqTsdbauMivHsg7M4iADUNZx9VUbLzuEvTxjybEJJeooXhqKpfZYS",
  "key7": "5efv9otrQ8AAUff6SwmDdyaKdHBVTkdja5VFrQrMRGnqpBgdVL1Wqhgfjeg6Ucwh2xyW8S3kEJFx9Jv4PWJba6dU",
  "key8": "3qSSVXJ67pvp5weqYnDvDWAGVV5ZajPuJc2FM6R91jEcet27MY3YNbEsSauwmx5k9fSwUDR1H8jmCJNz3PdK9goW",
  "key9": "3Wc41uXTXjAVk1xT3zxBYHCxYoWwM9zLerNWCsnBhzgk1VcXPUVAR9TE6wkWing9qC6eJLuNw6SnwHfphbyhkudk",
  "key10": "52BJkiz2ZR7hLGmDeuYUtPhjyrYgHMyBUA5JXYtaPBnZdnFHYCWGF6BVZ5f8q8EbZezWwMCHfm5J9QsS7gHAGCeb",
  "key11": "2bgqpd3TmJZ3qHxN1eCEET5eEfpeZ1YKnoReSrUyFG3LVjTmw3rqJP5y4x8eynaRmR782d1E8gpwMfZ8LKz68p3d",
  "key12": "sGL8b6oce1BUXKDZbHuSciwYWXCNsE9H1vXeRidneN2UsHQtRC9tyf6b5cisNdEJ2vKdUPoZZyFoEh5SV9zR3Yt",
  "key13": "2x3TcZ7DiT2vdUUpB16zQpph6ajf5sRcb4t2TNkTSWjNpfBrj4nRDh7hgY6ReXVmR46jF85LjVpUowDj5z6YAGNg",
  "key14": "3A7B3aBd6cvZTw6hYNsDcR5pEhKEmRv4atFCBHAm88azuP9Enwn77S8yiynGuSU2eFx3enUK3PXvGBQU2g1ohZpW",
  "key15": "2e5UhZP2SSiE6VwjmpsS8TnGxq2HMrhxXAtQzCU5vkR5EQSapgQFY4xJ6rDRGSy9iuj5A4LgrjfhDGuj8umc1uye",
  "key16": "KCRd98mCw4y5VbpyLefGQaPSoYVTr5tZJoKqqfE441S5UyjvGP7Ka3hPV1ukDTD1ypmf1CiUKZ2YTSGCYGBPf4S",
  "key17": "2U4Ljnfao9GgyFBA8nvZqZzGvKoLv4Xvhk2RsFJygPTG8oJdMuzdkxq2HkwhFgM17oQLZmvhtPeFtJE7SDPZt4vv",
  "key18": "58gLVx3xcGVZbzXtREu3CS28iMck6wNGUhXLipFdsPVUqep8X5qEcbNwcWe63tHjgKDWf2T3b4quytih7JRYWqJ4",
  "key19": "2j6PDwRu3vue17NfVWxmMpFunfb95Gm8nVuJQDzLobEodu3n14cZE7qHbyEfVNGGHuNTF33KqPc7GuUsDhJPSSjS",
  "key20": "4WwWwjrFdywcw9TKwU8ezLNXU3TC12bkxFdZ7YRx92ir6atMevQoE3bk3Z9Jvoj9KvdV6s6SwPq7z5dX8CPUuBEB",
  "key21": "675kCMYHcobHJ7jL6JiqJ517wyPDfwuUZqGMrnoGXqLPpTcY6m3mX7Wsv8qU2xGEtJ89C1ysNYMUXnqx5wQ8oajs",
  "key22": "y6ejBAuQeEZfPpX4T5z4q3wHtc6DcRzxL8TmuY3aYHt4q3NEjsJhDfVXHffEyHRcce6AUphUXUF4DggZA3SHWpm",
  "key23": "pqoopLLEK8Ks3t5uKxgXyCDsBryAhwnQ79cCWqamAwCLF5xG8rGr1RXwspR7vveJTaRt3coAYVpMczuTztFQLfs",
  "key24": "52Kwz1hYhcwMfVRZAw6SFzKgg8SvoEePfygHeSeCyPSy3BMYQgDNXsVM9ZNVb5dqgccFfgXFdex97nta7XTQyEhJ",
  "key25": "GtTimbqQuLXNyBNhMgEK8bfnPdWwmkFgbcyM6uM4WZkTWshTBym4yuxMT8fTsfUWfEGeo7SpAemq8apaN1xDY4t",
  "key26": "3o5rnyfmmFZmhy39XfbTbTXxzzgBGJgncgLvqP44hEjZviQ594hE9oMTWNZ2QeL8D6Ur13Efve1ArkcvNbc3XTeg",
  "key27": "3Fw25Sx3EeB1XLTRui4HVLjf5THgn2nvmU1SaS27Cfx1kFo9HBQ4rpvfQZ8hbUnWdYKkc1v3LXcdMi2H1vHciu81",
  "key28": "bmBboE5jZyQtNSCyX6V7GqPfYHctmnBnDdp75wUJSgXAiUgrQaoUyVsbXAN5z29vCn89NBK7r23WL4q18vmk1QH",
  "key29": "pKdsEuoL8Prqp11rXrEx8FEssECSHSx4ZkAkAn21CJ7dNF7ZkEWpApxXhbLfqMmM872ADenYmfDTYqrQjeVFDsE",
  "key30": "4ugDcEGmDvPMd3JUzVcNcxb4oGbwtKSrJNst6qDQwvn4WjR7zdk2a63RGESTwEcWi4fv5Y7tZPxb5rrpB3Kx1Zcf",
  "key31": "5nU6wjHUCZEQScTGBKiDygKS1MbQChSRPYRDxKAEzH76BSjD9UEJK3SHLEYyy8d7U8UWvZYBhT3B8Y2LVWFVDQFY",
  "key32": "5utby2rvEypL5xKWRF6YxHwDR2hDFqHsDREc8szy39yjS89Wm2PhJjTvePV6khQWXgC6mFZuD4842Uj8co33wHJ2",
  "key33": "5Z6eNKMJa9EwVG6t7jpQyTX7vDHdhqVYC4HqCwL7g1VSqXpBbu9UNPn662Yugc1Ya1svQn5S6ifdTM9M5TA5MpZd",
  "key34": "4X2udVxyTndyKSQtYjefYvRpUqwzcmnaFfVCAwH9k1tmjubZhGUqExseY5G71DUuX1PrG7dUaZDfho9cTHjBs7Hf",
  "key35": "ayffhDWaihjsf7yCCBLmoNY6GDyKSUrjuS4HUz6sxVAYGGLmTv9EcutxtjQDJVj3dNnXXV9vB3nUPA778CBmxtS",
  "key36": "5ttr2EGe8hQw9uJsYyugDn3cb9mm6sLLiEeFT9asR2Q5ewxfj1bFgc5wMHPRiRdBHpXBQCPqoMjTzgeHiPwJ587V",
  "key37": "35qHw9pbEughtM7eE7NfbeR32A2tP5YW6uzXdRzVDLyVLgHTg5tgh7HhPXGJCHS1Fu66pqhyGYg5DxS2HHkq2YpT",
  "key38": "4si65tFLjJ9wcz93HjhdHyedzUPBzKY7QEKEouRYeVp7RzytWpuYRj8362N3NoJCbYyV8TyYwF2ZjekZvwdKaapM",
  "key39": "516esXsyCnybZawpTmhszSjkLdf8x6fufPbB1D3yUh5mTMYQ9czyaMexZ7SwCkbUZQ2a64mF1ALcyd8nvur1UhMC",
  "key40": "4vi4jrKhz8NUBUVBhcuvvvnFKWWgTzqX6UoUPVbjGrLU6Lh2rvh84Uk4KeGXeyt98yhn1pDRrNM93eER9TUzc2u2",
  "key41": "2N55NiJWRtge7qV5T8UdD2aB78SqZRrAhHPSz3jiegHV6ZKdRSrQe3Dw7dfBcG4sFMr64EqYSFi4KGr1k263HyCS",
  "key42": "5tTdrAjwZewapxDHPYzyCq8tGzp4qprDY669TBC1KNT1za1vmG3biJAFFfQCFtPjhHWwyiuuESVMYdFhntZRSxQT",
  "key43": "35zkRAxQbxzsD972ZDpZGzvewWG4j63wf7MPMHXUK1PfQEyAXzk24pPgfKSxiCyzH28JtE6vxJwTHS91rwtzG4gZ",
  "key44": "5FyQkt2CCtfXbgcV5Kq7BwcqQAF2ceytLxEnY6UG8nd9tHYYXvZiMvNUCvcSnHPRJa5pmdS1WYMKjjX51KbRsjHk"
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
