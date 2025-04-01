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
    "28gpx6PVqUrTfZQzr8VhzkmD8egWRUEkqkhDrzqUX4eBXzo96JN6XXjt57yXHiiQHFkE4s8g1nuD7VMLivvusvCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJa22UqAHWtDxxCnexFKYSWTf9hrzvA7sdZvXaxAf5fQFhrEKS5gmKbS9RgWTHUHepbDAq69LkK6Q1Mqu8RxBkc",
  "key1": "5vrWx5kYoH8t6KpmySAHGkqzLfvpv2pJ3ukqbRhsBcUUVVaaiVbnDvQKtcnAGWUEddhPVm9zPRfd6fZCxANTmXXm",
  "key2": "3c4xs9goCZqB6eTt3pmh7gx8ygckzLWcpdgZmriHCUUcLNLf7bszVNBkYNLdSinjHYfXMXFsadPRF6qZSQm1v6mw",
  "key3": "2QGeo3d9z1W1HPqr45LbFMv2KETmQzTm2ramoaJpJsr51k3DwfQLFzbQsnGLTAaxLwLPzbUT42isnT5d1nw2B1D4",
  "key4": "2ucsiCjMdmxMGvD1TBSRwrCij95wttsyj8cZoZ1aHL3uBVdqcTMk8oHRAJFft87PU6Crn9QzrmAGFVE8D3cZA7Ge",
  "key5": "5bHgcJnJuBEYFdLzbvbkfBPesBPdbVk1L1vxj11zDhSt7sBgPXJ7LA5vWN8bH6EcNZ8j7ViuSCqfXq872E36MPfe",
  "key6": "5wMn5oucK86yCgM31GtnnrjWSeX4onWMKKFtW9M3ArfoPxcPaN533htSW83mLVzDVGep2ij9sUTTXzUrvLFhm4Sb",
  "key7": "4YRjBYfjy4rgYTvhfaMdzuUCyd22zCWZepi4uhcsT2uTesUedEzR7GL8HHeScKpBq8CCuJ39igumpLBpXtNUr3YC",
  "key8": "3iqij5rYHvtEvnpXb7UZQN9jeZm8nksgiQVN4dxNV5qrgLL96zqWLavdnUP14GedN4LTE6RZRgLCUxC7weV8NZf9",
  "key9": "5dpLfHHvHBqwv6atkeQjMF23b7TVgihNTKB7cqM8vt2sJodqXW6at7z3HakRrSb5zTNWX4imKgVM8Eou6U3o4Qbh",
  "key10": "3LDbN4ZXFfSLQtpHTgfb8VBbsRRdsQd8S8k7GDZayrmiSE2DZ2hZ9kiaSoih7boLEBQGnPe88Knpb2uKDbV8tYJN",
  "key11": "4szRwiu3jCQz6XrzmeL6GmhapXW43ybhrcPfon9p3xyGsVWstWzjc5qC6YeoV5EM129zbnnaqE3ct6rBeSzqnkL8",
  "key12": "42Bpt6MenU82vN2n3K4RDRuW4qRD6y54t8ceiN1MQ8GKfjLUQ2aCHSreDqi9VpPEoAVJ61ATWqi5vUbSDzCR4Mdk",
  "key13": "66FpHmPuLkwTdGKez3vHwszHirV943gHWkMq6JUxQFNaunLi8ykyLkaYnJCkMe6ifyoE7gDPj5c7p7zoC2zXTUdM",
  "key14": "6Q7ySa9AuBKZGfUibQcFAmpRSKLyoNFJMmNeShL4f2QdcQZU7YUtUFAV5hi6HRAPs3kRyb27aBdP1hPiiKtt1AV",
  "key15": "5HPBVdm5C8paR6kmUepQPnTSoQEdCZz5bkXdAin2NJ1BKVMmaj5PUV8Pq3wLWELK3bLpR3Ly4kBSRz8nS1LBjUHz",
  "key16": "UQxgg1dBc3m8StbXUAfwdP2Jb5VMfhyZqy3q7ZgMaRziDwvFkMMgTmTfxmcsvoMLANuuxJgG36ty4pX9XmjyB3j",
  "key17": "5KRF4YperpdY9B7skp4HusyzGxQ7NVaE7GX9GpkXuKvHLppacfnuQMuPbNP73hQMzAHgtLyqqyCfCVNxcqdmk4yf",
  "key18": "5KMo8n47GBw1RjS2b8C3Qer4xnvgbCWCqp5dkg88WbJ1i3v9EsBaojs2a1c3zejp5qdfjunedEtacWeRKdXQjTRB",
  "key19": "3QLWUzUra6pfvswihXqFW2LWotEih4nAmvHs117jjtN6NikgK1yV2weTmcGpe8Mky3S4ho5GEWkozUXtSgJsan5N",
  "key20": "5zA5W7RhVhrdgqKXPpjLqUCttUSdSG2CKA5FmXYVbdPhMht8uf2tWi7LuVKmUnwFwGc1hJ2PLo8JNuX7QEJBPd9z",
  "key21": "448Hdv68KMb26WxGfZ8HE2JizNb325LEvcUJjByBCCQMeX5Jqo6cieua9PLsvpjb5C4YK8NNwRyZNhUFaYN5AdBc",
  "key22": "53XFkrM8GqU6dZSnMBonux1cy1raNPAQYCKmHBjDsdiUDNCabcjrPzepDGZMdfwDXozLpUYBT2RpmuFAhVcKGHQZ",
  "key23": "4KCjqZiEfLh8GXDCxpvZn25JNcz5F42CpnsxnysVWVrAAhXnFAAvSGXj5Q8oU2BtnypAt9nDs9XgYML7sAeY8p5g",
  "key24": "25mdCuhMp28hyXzoDqJj2Lnfe2oT7bhdq7bBbXbS8eskMrpQYaWfMKVZY6Lg3dt3cNkyDeNhi7a6RXvV1PPTH3zy",
  "key25": "fK4Zkss2n7ign9ZFek1PoM1bvFxDtGF3uiFERJoCgkbfLehx5A2P5yhUWGgmQs8YmGn7sYVuWsHeQNqtx16bJzo",
  "key26": "545tt54uv2T97hXtG5FhTNKBBQUYiX3MF6FCfYTbKYdnMe3K7MBgYHYr1obYME6BKGNdDNFpCvmb8XXnVJjshoML",
  "key27": "51ApVM54GpMinCszgbnK7begj5qJHqkqFzuvGF4ePFZdbzfXahB4vjQc9eLFJzzttrqcpiAAhBBRL11VduanUt6w",
  "key28": "4N1udZqpPmhVpr7a5Kxq5GpWXmdP4vwNAyomG6YDLRwNvrRTboY6TuXBwDb7jKEbs1afbMhaDjfUZUXxB9eUtNdS",
  "key29": "gnGFY168k7JWM4ZoK13vomRyFzMG5VVi6YggD3ZzGcMkU228zLvFQXmaFdvaABXMRWqFiPyyF9c6r43sGMZrkjy",
  "key30": "2fSLS6byNUJUqjMVTs9dfR6VxdeEmmd6jaNkifRmiCKo3gzE1euT581ngjL2M5Zz5MmeNtgkycDsdDkBXFt319uv",
  "key31": "1ka9VC1hsXzyHa9dgKxvNHZSmNa9oPS4tAcJfNLXALe2ih9FpxbMgzCv3MgNRs26QARATKy62ic2CkMkF9y484d",
  "key32": "4Hqm1yjdB1Sa5DhxpXWXXLTE5kEujwKynGufTWgyGHttjo7YnhgFsDn7s7wYdEDiKU6uZFdUwrakN7secpYSecCC",
  "key33": "3R5aoWePrEFXMQUk6KHG4VtGq9TpgQCubH1U1oC3pwhLuGfJTF7bMMTocPqBrLBrxVdFHo1RQDsxqjUPUARZ4Dqx",
  "key34": "58te6znAY8woPqRytySwE74oxmsqvnHkqryh1hKK2EeoVmh8FxittksiWJYbCdFNDGe99cx4wZ4m9YyRobo1SWLK",
  "key35": "5SbKF9vCSXydUY6D5SBxTo92BHsfYDVHsTF3TeDVFX7bY5fiXkMa7rYJKBfU7EYKGXxVxqWnwxgJ79CXjerHBqM2",
  "key36": "8hVL1Z3SLEBXZARnPRSHgMt4ho8YNqSZRqNtSUs7nBHf67MxB6QYjUJdda6iBP7JHnS71kt3yb8ZhPUzvhvqM8s",
  "key37": "2piL9ofw1hppF4bs2673CgXT4kEG9SRMn6PVBCUAJPQRMLUNukn7FF1ckx34BzcbcSxVUeTdJQqbWMV78dY6wp2u",
  "key38": "3emS5LpxRYcetpAj2T16iwSTpUbddEx4wMe6nTxjYBD68G1LdUJPhgkyVohm8qGLQV6r6EZN4xt3uQHFJW2UYtMD",
  "key39": "5QrTR1vsKnEHAjJANAbo4eC5Q2aH6kQVBiPzH2tzgGBtQVgjHdHRN6WxbmwKPpiSnw6XFHcXesZRmD9qknbGwxa3",
  "key40": "3a8mQhEBd5TVRkdXNWFib4XnVbkwDa3n3KA3Gpv4AqVFHxMKQUr6yffH9Yf88khT3r4jhjhtTyuahqSuAvKdZrgb",
  "key41": "3p3UrTaXDfoU7geQMBW6Sq5Lr7ayj4GssPg9Uos4QGaayZsBxEorWRoLJKFcb3BeD7kpQdGPhVM27Bo64BsxuAix",
  "key42": "4fGUg4y26y3EM4F4tNoXGWgd7ruXzgwuWsU88iGUGJo37gGQqrrJLvZ52ftdZd4NU1kLp2HxN4LRzPpYu4TFPFXL",
  "key43": "5FTBVM9rU4BkbxFujgHNPJZwR8sTixZkJ2GYVBoXR55hnuKbjZrtsFWUpjFX86NBz7ttqxkcE3yxZxa59Mgapi9S",
  "key44": "42TK8qpdiMPu67WygetdaqVnL8Pv9H5ajSYLkTkz2gaZq8ziugaVD4Ad3xTYjUnZgkfiRyMSVhhacBe2Nm2Xt5Vc",
  "key45": "4zSh1WRfLGLuTM79TNe2qRy3YtJczsKwyhvXViyUmDFQz5ywDVHnf5Pqei4dQPu3XAxMRiGaYAonjjdQAyBRn97r"
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
