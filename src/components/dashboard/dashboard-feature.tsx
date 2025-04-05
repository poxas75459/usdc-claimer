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
    "3vJUWtfhbJQsPuXLqQdfLbjsP6tUW2bkNHqGzEJ4SyJpNybzEzmxJvXM8k9SyK6NbYv8pEdZSChCQJGqdLcfiog1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iGRPdPnQaSVPFPUCK2TCKLkeggtAx8BkV66ZbBJESc6rySpQUyHbA4dvMK1C6Zb9LcBHy5bk3jox919fwqSsrUn",
  "key1": "3h4hxLrDDMxGgPBccGY4hT5Q47PnmCR3LJo6dZPD3G1kWokqrzwQAdbpGxP1nqkYpFvvny1dsyVNpSY718Gy1EZW",
  "key2": "5SEoVF9fWeD9Ds1MFVjZai2tt3tWXFGjtPsgNXRmMctELFjaZfPmo5D5pVnDsLvSG9xSApicy3RrNwUXP4JsmWMF",
  "key3": "2DkppuMsg5639RkqcM3Pv8kwrqc3jXsmbuRJVHhpUYGLN21joVXBhLNPRgGZDg1JYD88CGzBwANckURVkkatcV5A",
  "key4": "2vfubgCWimaAoiqQEzu8GjsDgXbfQnGVcJTuPRihhv2XxZEjJ2MUFKDjvv7r7CUm3uyrrt6yhutTQySt5c8wunFT",
  "key5": "4EqsovLCM2kxyevLVD3Jz4uBjcy8K7myw31JyNoQbxC6vdXBBTQHZTis7p3Drfhox8L8LRwLDeCiPBrwrLRtwpL8",
  "key6": "4ETNcHDie9JAeqMinbgCe3xedTBS7XwTwYSoHFx35amfPwphEVmrqLca3zm3AXeyx6tTpfHEYKsCmygeTUpRytsf",
  "key7": "sUHGDzsF9C1sr4GBLj7cDp1ow349ppiWPKQF8MeP99dxYt5astCADtVbUeutzrssgbPGFWk1bdiTX79d72rWWGR",
  "key8": "4rn4g3t77BV7PYQ1axn6BRxMHhkGy8xULs4Czz6qWhqyzgYDEwaWQKAFphT7g7D6jVU4pcaxRUc39hdCpEXyGXtn",
  "key9": "4BnfxCHVvKF1WfK63mvKWJVFKJpS4BpEEgEph7LLtyf5wYVwW1MsqbMz1Jk2zuoKphogy1AMXZzb589eKoVEAkiS",
  "key10": "zQm2nitkSYNsBWUFAuXSxubULUhwC6iDGb8jpQznba6D9iY4VQf7advLnBqR89Qh8gekGM7KRugTiDZu9XCHMzq",
  "key11": "ksnYeWzUFyFQTpbikjmGnyQ7J9sJJBevBsDDpa6nuukiH9qKsVefV4HfvxDmC4hUKAhVjP5iBzAs2zVYeLsU7hb",
  "key12": "ojB8WfhKR6cjnbFfZoJPtQSzRbEGCiHHp6PyqtUWtTQ4g7Q2VHi76fXucmw5DAAtCSYqSc3kMDKj4T6cGL9yfgJ",
  "key13": "34EChekx5NrDEDArTSxHpU16rwRnmZLB9DpHd85hFyKKEb1ecCqonzyMotus1BiNPWP2DsDTydxaiG4mwa9tCh51",
  "key14": "54nVDkrV7wAyuJQBpST3HqH1ZPvGCFqBGMaLNXujz1NZ7fJUR1rgKgE5QZQQD2abxzfhzwDwhrzwzmSPC2gPxcEt",
  "key15": "3thsJRtHmemQRzN3zRhC4SiTvUzHe76UY3wnTvUsS8hmgiPBwPLWCqLx4PZbVDLHqLbW62h3n6bxGSRDku8s4e8T",
  "key16": "4Jpw5gJMT8o9JenvQSW4ajJjNUZUSXS6kuC8zGVLTcXpgFKUtzNLbYZaPmYTgme9arMXZYGcA1qq8zfHDyJBWRvC",
  "key17": "5gt39CDi6vBWaoLF2NisK1KqcKrmeMn6wz3CP9YcFk656vQ36ngqY5UqGNxwvaWscJdM4jLsNRUAB1bYe3PHRePp",
  "key18": "52BHUXxDNE3wJWG3SQEBUZWB4GuyxRJL8rb6n6b3D5hm1pdGxCCVpWawaYDU8T4mbE6MMmEyscBUBWTfPvF9mBkP",
  "key19": "5swn6yHbBcEHeDaNTAscxZPDcb8xejF2SX5MHbdmWixnTpdS5qU884bJLTpVsjLyGKcBAewJTSBPqo13MCZoPQni",
  "key20": "2wvscACVmX6Z4x5aKqdNYMxJS7BPzhZCLJV7kfZWcdLmg1vUyd6xUuTtKTiiMZGdWv7D1CxcNkR4NJBFXory974s",
  "key21": "5GQL5252mqTFAt9Ep9tqbZpvGTz2SfyR7GVDUgiCYtv1vxpi8uuhgRTpkknoZGDWKAK3H8CoriR5r5WvmHpnRCfL",
  "key22": "5YTEMYxLv52LLzoE5tFQuijXBB3MEyPSxZYTtst3PHhaFHgsTyiYVAXK48Ht67b3zqxkvR14V2d4VGoduRzBfCxL",
  "key23": "5pXLGNmqUTGiE1Loxt62E3HYDizaK7z3d8A1kJB1Vir6yPgJZUKNKp2dwAmzzZqeSLYWTbjPyDmX4LonjAPnsJSo",
  "key24": "61hCwWXJaU8JPNodaZVzaNy7LxmnG5nZgBr5UyeVd2G9ncjAFWfrjVTVCwJhbPSot87RN451JUuSF5JxUgmK6Ux1",
  "key25": "2ASKsudJZbU9GG4mrJYyjgc6oHzjq6booR8g5z2ZsXgkkkgFW8vBAyQXLrXuEYMiDuofqyacM596r1s8qidrpF8H",
  "key26": "4nxAh4FgmSwJusW9368rzDvYsjK8pVp56QXWP1nex6CBaYAtNNwzfbGUzvZp7VdoKByLbi7gcjz8cJKMSmmfC3w9",
  "key27": "7BHKFMsFsVt5NtoYWHSig1X9VxnZETQauDJNE3L3isbFGwZ89qzZbUDxNVLXBb6NSaK3YFT3XJd8ygGLxz3kXgK",
  "key28": "2TCH71cuDYeeLfLREbXDt4SzT3XysrGkXKFn2BvcT5n1aEDjMdhnir5vw2Q4drzjCT5P2uYCMrK5VMsraLxtMNFM",
  "key29": "46SBrevvL7o4eN6teuuQAPULvv3mhHdXoVrsABzraTVy6hx85HCRABUpQCfc2NFy4ggb4GEredxAE1ZGVFPXLS1s",
  "key30": "4KrDtQUJHzdYZ2QV7U12swQxvyt7mdVepgUWhm7PKsjCbhRcPkRtiuaWhocUiG2fe1g37dw9vYMutQbNodm4hLgF",
  "key31": "2bVecne5LxefzCJspSmU2td36v7zXsMPaTEdUEZXnM4ULmbLYVUDw57Dmn2Fi9A1BDMUqjCzn7DYLgz78pGE5WCu",
  "key32": "2FtMvf6tTLVZ4L194ADHc8UyVV69yudjLPDPePGs42cL9YGFthuJTsbJokRUPrH4YBsn9J5v23bsxdTZacvdk8pu",
  "key33": "4YcNhiNNydEgaWmUvPxo37DX2iMDYsCjxGBTEg5FYEyWwNBKsxyEUW5NDGS25EpaVHAeu8hkAY6n2nqwjq9ys4Q8",
  "key34": "3ZxhehMrSeJtknFtqV7qgaJy7hGWRaQGGqJPcuN8rXSiDhmxHN9fgTxLpEgabyujA7UgEcezwvgtvtWbrQ2aBpCK",
  "key35": "4jECtTX7FH9pWzzHLZdDpJCR4J3FjDoWQm6zzqA3wb7fgNVPp9RbKGmZ1xx8D48PgXZj8RjoTRr8YdcvRuoYQgr7",
  "key36": "42HKVhAhddEkCvxWGg6dEsXTXyzkMnaPhGY7LXZUsXzGKotS2zGeqAab1ftVY3d53MXQQDihooEh52BYf1hihz9o",
  "key37": "vUu4TgosY5677yE1s7Rd68QVHRt8PUKpUL8iEwDzx7txBBZ1YibmsP9WyCCL6N2YgvYMzNMz95gWiGVfP7ESq8S",
  "key38": "55gdhQApLTMFGbUgTeURo4Pu1x9kWB5CUxxicfUZ6f9xNo2NkwsbVTbTZJR3jULaeqtW9b7ukwG8cWCsR4KbKUmB",
  "key39": "5afj1VyawgVzNQbShiQ1uDF7KjLrUyydbNW6u6BbBDVcb5jbCaFieC2vEcLV2PLswRq2VNZq9BpVNvxkhX5q1Kj6"
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
