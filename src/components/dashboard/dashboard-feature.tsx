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
    "5wJ4hCWacGmnain99YEkYV96CLgNrcBbkpYCmphecABetU2d6bazkYfmVJywHhkNPVYz2oZTN4s15D5L6q9y3UM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjqGBoQ1i5hj6WLfauhkfG9P1K2R1Ddwtne9zU1SoqVNRVEBc4YKLNLPzRYJHeZ9nLr1oi3SGU7H6gGyiyjRjGD",
  "key1": "tiuJRPR3dFYXWj5WpAna8i1nm9kgjbLE2q5EuMEJtmpW4pigRxJ6EzLuGg6Aj833wQBcm542WP8HptvYyubXv6c",
  "key2": "2Qnmo5duX6tPGfsDxGKaxeFbvZHnH6CDhGUQW6UUe6NzrAPUm1wUcoCQ5gv7QXgZnDCcicTmefrGuwZLXaBkv8Jo",
  "key3": "3FHQcoDGvjaQewjTuzFQcPUYq1WnGTaTRzMJ8cJS2U8d77xS1cVLxw4rAi8xhQzzEBD43ep3AEwpyrPfHDtpDeej",
  "key4": "5oZgA7b4XmsmjNGmwtDr3zXzWkJ8nsGfLiycPb2JAewPVfNnXGF6YvjekF9KvQ7Z7xusXZZiQiLUah659wnnEkXL",
  "key5": "5MD5EzV2a324nGXvkKBgonSYN6wcTkdtpAudzv8XQQE6ysnSf8okQ76grfDpHSmfNeU774ph4B2m29NEb8aYnJCv",
  "key6": "3365oiHRyyCYLSTbHUKB3tZe5EJRtpvKYJfeH9t2kpYiDDfGKkij7Q1vzndeusjnWA1RWQpwPS76h9hugrv3GXp1",
  "key7": "3yy7aTRCNrMa5EJuymNJYKCvEo69V8AvV5H8EzbyRceCcy2oh8Kaj7S7qHRYi7A26HQuTah8aRHydVDVdrNcNx3q",
  "key8": "4k1V3QzEVx6RteEYVKhzZ99J86RQJL2JLjUWjVoCD2xqj4FCEKVEj4d9uVU7spnKWRKPL1GSsWcguGwJNKNY5vBW",
  "key9": "3JgcLpCYwbh3KdmSA1E9xX7f6mkbKxJtQVWuADyh4tpqWKybaSbh8Zy7o9hTS3Pt5yJHi5aZvPo5foDoeUuJJZ1r",
  "key10": "2ZRSmW5xfj7Hu7dfTzDkjajWrTdAiNJMuQmHqCGDJovhakVEFsrVmEDQ6gBjvUXYiLDffinkbY4fNSSwErsRSpsN",
  "key11": "583ZeQvHPFvKhn3Bmz9Qnghros9UZXpbz1SQPcCUntApGYRqSwnPJwDNDRuwVAb8kb5mEJNbmghgDF34HpQQLtDi",
  "key12": "vNpHZqwP3gVSL3wNm1ofSRk8DBk5VSz3ynfRNc5TBSEaSaxSdZ8oHJv3pBH3SX1HkgbpkQALGf6bM7E6KB8kfDp",
  "key13": "55vYZetW8fi1sJ63EfgMAzgLKufsCzdg1MBsEtFVMJLxbpKZTcurbabWLvfZktJdD3yNpCzLdaj42mz9UyYc3xrD",
  "key14": "4weeniNTfQ547o2hZUoWfgrBgbVe1yNHR16njqCjnnascK4KpR4MUomAJkGhc5PAWFqp8Nvohsy4ukqPyrvtB6EZ",
  "key15": "j1sJ6WamcobPRgh4Eg2iASbyqCRvBty1L8KjFubJVvCbh5x6WoKGb3fMdkjX4iKfFjg6DjS8DobfftH2eijsgDx",
  "key16": "NQB3x8ag6Y8LWWMAqRQuVKsc2bp5sgATaWJwCMajrkjpNAKR2cnujKFGLRKPKD4raiK24ujjTaSTQxdgHbHPtMV",
  "key17": "uS3NqzFpb6RZw18tWSZqypy1HvbtgzMxB1cRPoocPoC9gvH2x3e71C8yPYN3L4Wg8mcyeYPLQ5NQUUWEFTy7i5U",
  "key18": "SrF2zJFumizCU1HkrTzwxui7YqV3sDvPpe5KVtGnv8A8C8VMC2BA2tj1B5dVNKamWhe3Q1iRY8w1Z55sy9PBYgz",
  "key19": "2Gn5nv1wFfNQhL3y1dF6ihmyE5Qjcg8u5UGiPLDqGuN1tK5AB27psxSZSQ1YjbvzL7ZfutDwKBmViroqXh11jBDY",
  "key20": "3LLtDD6haY8VLhHnrFo8rbj7wMp2rpvLm7LifRRKw54fL1rRCr8Jtwy3bjVp6gSjT5zyVCDc2Yk3CbTAZs2VEoYy",
  "key21": "jDAEEhwr3g5a8YswJURutW88gspKbXFpGqb4ywTEkzxEMV3yJ9RTiU5uBDXZS4RaF8Z6HAFP6caZ7GKyNb15HKt",
  "key22": "3MCUQfJQYKJZ6cTiF8sTRXXDCcpSnViQd1AdpeFepJFWKpf5zMGiBqgVVyhgC9VMafwD2R7a9skD5LyogziYovin",
  "key23": "3BK6N1NZzMuwNDPx7zs5kbn8zfJRhvLNYRYov7FVuh3J1KgL8MryadE44w1numyv7A7b1MYAYTyq6TkSVpzXxAox",
  "key24": "3T51h5r3pDNgMT5yNQXQtgvVmWLMe1M2bWXZReuZKLYaDiN7ujYbuhzXMHLrtevTPeCEQXckw9J7eaDEARCDXEJg",
  "key25": "36P4RNk8a6A3utTauWC4hHBw5uQrDHEL1mUzrtT7zFtzFrwMXXNAj6NDmriurbji2TiYLjYqW2j2QYMsWnMWBUq8",
  "key26": "5hrs24HToQfNLDUpsheFoEpLT1PXQ9AWrXTeYE1rSAukuQXLKur1nZwVR1QK7Y56eKnUjNfEqTXb3NrxVxS3qHBE",
  "key27": "2icYX1EGQkMScUj3AQ6TyzH2z1t7hVKoJ5E5MkBKy9GLsfHEbXcrc1yZCqCwjKqg2ukC8FqeVmxKgtkP6nd3E63h",
  "key28": "2EPF2v2JmbtBD3cKQUn5Rj5Zi7tL64a37AmA8zTeas2922yu62Jj2pbVgvxgXCpUbgJjANDx5M58hH2XWpebPvzZ",
  "key29": "4PuLVRH6YSRiC64BRVUHBvAHShcPHRbVg5zGixibBKWYKYvg9hoxGK2167bQpYocAoxP6XWC8oSEzpwVz4QvBbmj",
  "key30": "4VLoAeARNyzkKxtLkat8SuN5bVuCw8NoXGTmnyk6RuPeZ7yT1gFy7ZWMiGCbZsAqHCp5HxuRgymYvhb9WRjav2vk",
  "key31": "xc9g1NVbjd4dKaBvTvvPPEh39Adq6ruWpj1kmQekC7PnTSUey7ejJKuAPirAxtkeaeC9BLdM4FSAD342s4AB4ko",
  "key32": "2iAxF5LYwkaW3NrfrCAjV5XTTxYvWsaPJm1GHgDdqHkVGWtsi4uH82yZG99beRzm3biqovL4V5k76HqxhFcJb9yn",
  "key33": "NfGaDScFuS73dLLysvtGwxk9Rs7syrRvRwF68MUDV7BgPViKRyDYtxBi2r2sNtx2jfCao2QmMdMTkENGnAK7eGs",
  "key34": "MebLCvi4AP8m43ZExopbuM8ZSQ9ypcq6yc5zoeke2EbkRDqaivemywVkFA1Swp1az2geF7bP83EZCsJxoUmTcXM",
  "key35": "2rYEwB1Dt3WXf14SWAM4DRU2y89tMS3mgfV5AEoky1kZiLPnBQxH6yk9eiwPWRoyXAvWtsguKAiXju8rgEB3t3QN",
  "key36": "4C6HeiTKGYjecBzHxxHTiwX8ABq3sFAdGfCoADcBwpFYCFhksZKKeD53kXApjcjvkNGsbS9mrWttDLaNog4PdmnZ",
  "key37": "3EeDXiNCdVgrLMXtf19thvwyy7fgzSoF6v4Ek1UPLZuqaSUebWGHsnPs8csVpvFxy8h4rVfgGpNqHbXGB2mjVKGW",
  "key38": "22g2AqXNohfhzCznpqTDdJhTAoXhvdD2PNGDCfPopGYnux4TA3uPsEeA7mG6tjZGe5rUQLHMtN2r97siBoznZkfG",
  "key39": "2cX5Ro681wbWJtxhA3eJQV1nr14Gw6geeivUvfVi9XQ86SYZgnNUkHB3CAsPWXUBK1VnsWbgP6dswYzmYAGgebY9",
  "key40": "3o1V9qqBYLM1j5JH159v9cfTjU5S9661JTK6WdE2sY6A94nUA3ujbNgqWWChe67RZSsJG5dye2V85g6eAcNbLMJv"
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
