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
    "2MkHrXYwcBaQAGri59eiwaZzHXQXtD2gVGbAKSv3QP6oRYLCXhNswRtBYEzNS7owDAoQWVoSBdxRu7JT2HrjHCX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5yJyP6YTebTyVsypDozrBM7X1d1f5c9TkAyMrELCu88ZGPak3GqoQBGNdXbgG1dDrP2v9RzkK33bbUnL4HwiCB",
  "key1": "25CtL4HiMSEmnA4RNAkdfBeA29Vn2MS6SD6mtSZkAF6N8cyiNYEvVKcubgoKEjvhaB6nRLJ65xugjA4JPyTajiFX",
  "key2": "37aioeHBMZ3cNLhNFkEwzSxEsyBqPBs91nAaWQDzJLiySpMtjDFGfkP1VG1jdcBYC6ViXEcx5UtGgWuw2z5r5ihm",
  "key3": "2KqXuDgw3K7PocowAqaW59ACbAqQvcxLg17t3uADeRvLW3av6yCpyJPR83DQbScwnTpE62Y9xcvxKMVrrChb59L3",
  "key4": "KAFrfmTY2kgYHxqXSdEMM9M6HwnZqgxe35hR7A47zKB3mDupc8PGuXa3qLLVya3GEFF1FdRnL7odLcgm2SA5CHN",
  "key5": "5Hp8sU7gEstbk8tkzsJ1jkMZ2YniVNr1ejp8AYjCRTAd4w2g4P1nN3kfD1GFbwuuqxeC1w6GZvo4DCLFrMzyx7cZ",
  "key6": "CSh3iTzo8MzzKaYFSy7tycU6sQea2bbv1oZZkoFf2mqCNJjq56ZVVsbEdBZTMmGFHPvQY14KkM1AqcNGigHhSeH",
  "key7": "5SYYcNdEejX1wfqRpEo1PxWJ1t11RSAMSce6cJyjagc8wZsxiAZuaxJ6S5XUap827hxJejzxcWjvNbvz6B2tRsrW",
  "key8": "2Zn9EyopvRKFrkAEp5YKL1tx6VaWb8bRXx4kHu2bW5E326UmkAEvGwtwxuUAiRGVXDdesjGh52e4YA9vKmsQ4ZDJ",
  "key9": "3E1o9YPHoMBB7ksgbJEgv3ryu78y7YYGsD4wY9Z1UwN3tf3HptuoXGa7m5XYZfgmigJKpVU1KhTAsgwoKaBsWNbW",
  "key10": "2ZrDHaw1j4CqwkWgaWiqJno8kFmhcNZP8hrJpKRf21FHcrspc4HrbCM5BmRjqotZM7q5wcbtQMMAsZtLX7dKRUvC",
  "key11": "61D29NjtgpSpvAu5oD5c7KJ47KYEoszE14KopHPczbwXbExe4r4MfRFzW66FbGnFQ8eZaQY3i6ZFP3dRLQdQLDMt",
  "key12": "4wgRM22QEqVMNp2v3trpfYUepN56jSz2JQPbTU3dUhP8kCeXbMPxSC7ySeVzbXWAgcQKYvu3wLP4HaeBv3uayWt9",
  "key13": "41shr8nHpsJwJvnCaJ9e42RPMMAF87uXiSi2f6jZRJvHA9cCGxCsYHbEAmAmVh58Fwa7LXa3jmhrc8tPdioSTW3n",
  "key14": "nBj8NRYSPJsxBtXUhiZ3LQH4kMHDUui1e51KmA1jjeBVCccPwF83s4agA9rZHrQFsQVQeaFZkDTSp6QDQLnW5Bu",
  "key15": "3aLKmVpTQt63MRQB51a17Lz9D9n4YqAc3q2etuwaY6joSBNaEyM1RX7KqFB8Pm4MGPUyRyMVefD9S3cWX7ygwUft",
  "key16": "5R2bkvMVZsaQarLf4pEG2k1AspvrsAYUMHHxHTgfE4hZiXiuDPe9iNAnszEUA3T2pGw7kFKvvPedsjoxYrTyLQ47",
  "key17": "EK7a1p3bW2B4jpcwAmcyv78zTrnV6wm1CZamVk4naggRZFKLF2Pk4Kyx9fabZCY6gbpEdqf8AHq4C1EVnbowR7v",
  "key18": "jwCB2Zr7cmoQzd95avP1HVHKmGfJDp97xmTx2ZRsCKAtQmLf68TfS53NtdgVB4PxNu7cYR6Y4t5SW4W16Uoun1Q",
  "key19": "4xjJD2v95gGSPAQDmG2jdwwPWuVkTb31a5J7gzzcLwLXSaddvFE5yVepzBU57ruaKHy4ZDCaYAUNckxCa3sUb3v8",
  "key20": "3vnCZrLsBTkEn1rNJQ2zB7rhNTfbkncSsP6xv5i3FzhcV8AgWNzS9DnrH9dYGrHTVXBdwDs3sc3YNHZ2S19uoGEB",
  "key21": "2sRZEAQmonv8zyPQRRCJiazVgitkhJVv6ozGi9JXGQRJQZwpFDgkszYRbesqLNBSXwvPmRHpCTkXmGi6iQpG9KQR",
  "key22": "3XJ7nL7TQgz4d85ycBtHHj7xHBWdcHMdLHKdTBmVCf8mBXK28GVYxjGpyF7bwUWMZnV17jzQTXZxgqhATETwNajp",
  "key23": "3Sh7roXwC9TFeMQkyCf426H41aPEENM8LcieF3A2jJMC5p4BRf7ytBfxXfAMu6G6q1gwK9Up75mZ6BKyif2soCZ7",
  "key24": "2m8c3AtHwHbnG3efMCbDEG5UKrTjWw9Tyjd7V4CMAMr6FfPvtFgcxZKSEfXA9T8gzWjtFduKYEwy1tgSnNxfZ1As",
  "key25": "67Bv116PLrJ8EMJtUJRXENVYmr6rgiMhiJFH4fN7AJeu3MeW7621aATtLyWtq3qouXXZUnKEZyCizzvXU3GXeWQ",
  "key26": "2K9ynKhWD6UQPQbAMXhfnMnaPD2DPd8h5KpdgtK61edvfFxbKWeRQRbyUB2jZHEsRZJh6eYaikNDNbYuXVtNZ8t5",
  "key27": "3MLFyUtFRHywjJhoWgSmX1yvkDq5QtzWF7TnrgCEz1cEcn5NfHzbXuyfYWUfaXNij3upWRJA2YMRPCZF35ibxRsV",
  "key28": "Sbgaeks3BSaTZMb4dY8QiPGR8TrTVELwMUDtuE5cGj7TrMT58qEM7TKLDLE8X93ZJJGMwAhz9PY9ZPgZQfzhWnq",
  "key29": "3Ho5xk1J73q6KU7hGP6f2SZx4moHXhZHRSH1Aiaoz5oa6EFktoTUbyP9322GoYqrC6TP7h6XUmCnpY3GMC63FRVJ",
  "key30": "4kH7bsKKciwPWdEjU5pX4S5vsujNhjFhPs3vMWkESNsZNuFeroJCHaTHHrnFY1vb3h9YFxHkR1eehjR6AEUxPoEZ",
  "key31": "3XM7gPz1XEXchVrNhnXyfHZ81hUVdZk3TgWorUFonCHQNwSsxxqtotPfxf7vPacF9dQWsM9vksiwcuh3ff2r4GyS",
  "key32": "2ByGSDVF6zG1KADJPDbvzwasHWFC5LAAWN1AAvcyvu1icfJqdRRGq2F8aMn9vY2hLyjMSJf9h15BP8zohUd4mKvP",
  "key33": "45uLdYe2VXb365L7JCbaWgbaSddYUN9t8XLjuTWKbhY4cwYXKbXP9DSe1rev88wVgWVNJD5weFTofTc4Tuk8Rr6t",
  "key34": "5R43pMwELxpSKhMNC23gD4ChomshaHJeNaVHNjgsvPtZ7ih5cx9C8xAYaWcRLGyDm5yQc46jC5o4BuKda4NKQrkK",
  "key35": "CP7JvZqBbzvoA8mQYeTEB88SXRsqsanCZDFG4dJZgu2HfEVkPntPfZi3T4YtedtVK9H8VWrkQ7EZtZS8XwvEAHk",
  "key36": "3KHpwTR2xoVN5r3PDzvqk5EN7waQE4RR2fB4EZzDMgQHPFZcBJqd7tQeiZCDr1sWaRjoCe4SKrHYRSswvpuPEj7a",
  "key37": "44WLkDNhf2CHTHRp8jv7PEdAUcPiX2Yfhrwhaqnizs7XeN83UB6uPbqLfeYW1wWCkzHcJSzUwMLBJKrtUJnd4SMi",
  "key38": "FDuZJL2Y9FzNZQVsDV1SWCWeDyAmEEVZzSELFuhFkBNSbgczLTnmZeCJDjHqEkdWaaW76863n7iH2YtyDUL2eWM",
  "key39": "5uphkzXz6iyB1QCYJTMAVwh9nf2tqCwKyoRWTcrGRuZWoYS5pQbkJm16q96h2KZAZ773RRVFkenhP34xMonZxtZw",
  "key40": "319kETg9T6b4Jv14XQiELZ9tWJkxQMM17khdd4EprFGZMJmarZzwKv7PHD2TGni3g7nQExY2SgMyZTWVW1n9Eec4",
  "key41": "4kuawXiJchYEtJxqorFdYMm88KY5JvgoXF1u4eLe8Ti65xGi49HQDnEmbJPLUDmrzn23w2S3QPbxBGTAguKLaJrK",
  "key42": "3CW7bBb7FfiVwTJHaTi5ZfhbBPDghcWCEAg6tYAy958e1Smi7cdYCiowPrg1UxbVYJHoCNV5CkMZTpMeRwDk7uVp",
  "key43": "2rxuuqcGnYy7ttGVz2CJchhiaUA8vcXuYvYuYg3pcKgUFivQea4QVsJ9WvCK31ngf8chSkBn9is2Pqvb3eEsk1P2",
  "key44": "4zoETWd7mTSHsxSdj8XE9wt6ZJoBWzv8LVudBEzWAEiw8cdyNuLQmErV7qFeU9916o7B1Y5avcLRxV2ajXnbkbU8",
  "key45": "4N2M8kjzx2dLoAZmDQzX92wpqaVg2DhbgjuGXSHF19ULyc2TrHnAygQsJBfidJP3tPkTQayVWgXWRgFmzVjRg3hA",
  "key46": "2gVHhSGUE7Br2zdq95wmPSQbVvUE1rgyMSSSufDqaKeZ9vdGRM96LaUUjfcCE4hCfzNeXifYrTnTVvo4VeT2MHtM"
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
