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
    "3uBtb4UhwvKEpdH73MHeJkvwtDi9eZSkSSLWB3Vk9oLQDPgfQ3RoTYAPguEkQd3iQuufq8tJYhGYgtR7c2WTJ36p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zrgwXQ5oTsqrgWNjoMXBjscSGtTS4qwENX5a4nifQECTATd5V1ezNhauey6bxCAyfudyRFcFVjHXpfDxBhoAynX",
  "key1": "3jXKGWBRwNgFV9GwfrFN8nj6HMieazCug9Dy7W4cnR8YaXjhLgtNE57wbachgWZpmo68faimgBEBEDATLqVsKemZ",
  "key2": "3K4aHXdSoCK9vx1AyizepwquWS9oSXkqUa6AjZdDRVJu8LP1xLzv3zjvWRPytfyaUvgeDti3ibQdxgsEK1Ta6Sku",
  "key3": "HqvWMAoyin3fiKDa5EvpSZQHHo3gWrNBajZejLLLjmZDrnR2uJsB9ebaycT9t9bEbV36GTkXxaR3X8mjSMdpAfs",
  "key4": "2a2J3miP4RcNckzejxNLu3rpi1uvw4mt3jUdg4s2jAzR9K1cyRHBa31r3aGwv2PTLFSYW61cjbc5bW6iAGTKYN6L",
  "key5": "4nKWxfDttJ4BbDUYm7QB5Senkr6HRufia2SZCUNgeHknuHUUapfLJXw88mTCsfNqjvxNDkBDmQCMHFSrVYdz26jb",
  "key6": "4fFWnqtSnr5Yrc12sQtae1Cw1R4g36FtHrpH9KueU55ZyGCcbqmy4H2imNchRFSxDfEoym19g7BQzwh89q6fmGaM",
  "key7": "45LAH4P9q1SaBDcfWHmsgyy1QVQFsxZFR3BtJbubYYTvuPLDSgoyVR7pb9XHYGgxa95enra8FGsFayMmcoigcanE",
  "key8": "2T678P799SUtfkF7R3U51T1wzdEBDuWCkpPmfe6DoSX4R3vnE7MfRTkuAq3fhKXZzqhbenaSEoLfV1tXZ9Tsc2vp",
  "key9": "32VzVnZLPRazZEhDdtQmsyyg7tVExVKT8p6kdzzgZHLu5uBJuhMn1incJWcM4YCSRhMYebh27So7Kn3m7zEE1GED",
  "key10": "5magXKXBM4YGqHVsS6i9dAod8MjV9muwi3TSrZvehQ4Kg5g9vN8zXDA3w4pzLvAymx3ea8UCncBLCbwA85omo1jk",
  "key11": "5oxF9Z2YU4uzJC4Bm2kGCyMf78TfBEG3Sczy2i8YE5DYxRVQnb5wRpDQpu3bnsfLQvxjphi7E7m1rKnHBXJwVt8V",
  "key12": "4ZbRDv8WzkQ5cEMhZ8UJwiQtVhyQRjdwxAHmkm3ZdfHLuc7hVrR53LDnAwM2KcKfDLLhRrFDdELkeejNydYno48o",
  "key13": "4H21EU67d1CiMJ76x9FiR2FTc9uHetv1vMwKmUdw5Rn9zBZhNWcBdnMfZtTKGTfK2hqJeeAfMjNWzjoPqcK63VFr",
  "key14": "jb9DZhuTsCfTsomgbKRk1QDVfn4MCiZq3ZoNdWAk4v7EQi6Z9sNTgK9jgNM6Y9CwienoMEUjwN4gGDygbvnbJ3o",
  "key15": "65mXWQq8mFYnnAxVu989LqhMbUAvwdB1iLMUee2bRfp5JWtq5BxbtkMAjZ6p44CNYHXqZCYahN8CCxnNRnwW27cP",
  "key16": "4iMnY3hG5UoUaEcE7RdYqJM8CpBdKvgC6LvjwHXrCNosr8po7mzF2Jrta2AP9vWkGiNsaAbECx2JL9SZ7rHeirMs",
  "key17": "2DQ2m9UHTMLVyRPYk8an32GjwLMTfy23yZHq6siD5PqKLV54nPN74sv5qcaFuiYXQtYMhU8PUNs1ThW7FySB8kYN",
  "key18": "ihxnVRmsYC5KMEn1XKMV3NjfCP1CbbNerFJzRNYwMBajHe6EsGHuvFigm8GNTC9qvjV9gJn9GMJR68qpkULUC1z",
  "key19": "2ARZ227SmrCuj6zqyCTX9bnivTiUMTfXAtoMmXXHvGp17VBHyBGT6FRgdw6xsBgU7bApRk8rmHdc863wUkRwX8dU",
  "key20": "2p1yNftjPL2HBQdH5jLod2PsSUZyukuBDDzCo45NHmkPX3LLzGmDP7LZoXwdLG47RcDTUg4zq1LRUawzmctZQkHi",
  "key21": "46z8amoHPaRc4dQTnXLYC658ZDqh6PFmg8c2HDdFd7GpBcR2QQx3eYASEbs7EviFTQG9FmKCk3AJFi4S7f8CWEBG",
  "key22": "3BWeBKeph9dXuXuiRFoVbGzFKasg1PdxonXW4fCcy6u8LY7HF4qd1NznchGceoYSowdmDFGAaob86Xj4xa6P4nYm",
  "key23": "3fETxup9EHqqnn44Xg2L6jVvhHyvijFvZyLD9YPv4SB9WencqhEVhWy12VHUAyv91srzMFaEZ2EL4SgA6RewweEA",
  "key24": "46tT3Ev31yjYgKUg1toV5xh1cS1L4LBX9duzAxp8AiRxdh3sNn9BuJVmQ8ngJnb46ZxbcdT7RqNAE1ZeAPrg4Qy5",
  "key25": "ZzhmHiAFvfGPuDhunJuuUC87vgWsU9mQpW4nX6najEjd2RFHhVwc4WXZ2oUhN17xBGeu5PmCbaWdQDzXRwXEmx5",
  "key26": "4cb4i5SXkhZpwfpDEcNQdX9Wa5k6HjX7GbbeDTNrcb48z6HBdZKEC6WrZi6YziVdzZgDxinphvjRUeKBdbUr3Kir",
  "key27": "hXLQbChKzR6L7cMEKRatbnJLaTMSoKKXXxNu1m5MWNDjmAuXW2VCTSfrWNAtpzT2AnaaXh9T23EFVS2dd74NAkW",
  "key28": "4dDakpLxyJ12SFxjb4DY5gpYJQioPH3NBihSc15rB9yGantnQrM5WQg1XVDcgz9aFgw72zvY81rw2rAbEgxPeDu"
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
