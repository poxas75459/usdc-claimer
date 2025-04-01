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
    "2ysSg55sK6RVQApfVD8uL4T4z2bD2GJRMEX5xwLruRaLyYmy2YDBiaRh5n6E4stzkyqMWFATjSqq6w8DXaXdu8bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHH3zmywRDrG7zVubo9HfDyWjs9bP56EWqrCcTjLZRV6E2cJoCSdpvdowe852Vg4qMaL6XrYc9vvM65GNF54Rnz",
  "key1": "5KbCnKHRbkZLLeRTqpfPB33qMtLkXzkF3D3RiSYbRUPF6Czk9uoMdRiW3CV89CDAsTdEo9RMhVd7SGR3ZEsrKzde",
  "key2": "5xmMjm2UHes2htXcTcWpM3aSKykTx3dPVjkG5o1X12Z2WZ6eJMXQjhGYQyRcH4AnvitivPLwUYCCzyjtiVDzwgc4",
  "key3": "2yJCoTFCJimeE3PU1mFwtsjsQ1MFsNSLvNV9qwQ8pzBe7eG2426yaSZardwxcoek2FdrMGZouNFs4TKx1v8r61wt",
  "key4": "5jgf8QAJB1xHiyX2zE46sA5GtmjKABL7xCN53QAmxTMus6nz895345ncd3CbHJqGErsM7NnD6hi8ff8YL449JZmV",
  "key5": "21gpnR6wafWZZrEUHacj2h6za8AFwa7Kxv4A5FXzy5TNhho2itog4fvJYXKCLzim4oAYhBgEt2yaQMFfxiRBpiCy",
  "key6": "5mR41CurBzsgbsjjrhm9Qr62Fnw19R3sKRZ8QPKrSn8KhNrRo21qy17hF3vsK4Dq5b3K2KaZ4rz5kAJC8XE8hUg7",
  "key7": "4mCBYwzzWExkAApRbb9DfJdG6MBcVVLEfbc1opb7XXUgF2NECz4fhpyeynH8VXFChSBoyG8VUKvb8uMRPwfWrFXN",
  "key8": "5SyJhE8v42ubAJNSyx3BnjqCrkZbdNcgTbiT3L6VCw9jxCwRpgMMJdagdLThsGLeCBXtZJRn3fGAKR6pU7EoVgH3",
  "key9": "rwZu4r3KNfaLgw7ZrxAxWDMJiNsmfWnYJCGu4S2RG64BQHvUctR5L5nSC9uyGh5oSvEjwSbkddQhXFJZwMeGVBr",
  "key10": "opTauqKDFsAF8nYYvoE4nWCS46G5fA2t3qrMkgrVL1SRr4owtJa4hJJS6wuaMpmPoo3XnzEXhUHWyAbaagMEiJq",
  "key11": "67ULARWFJ1aBQVhfsHpjwVBqcWmHrweGHFtnU1PPeiZSLPZoxYxzwxgNi6bS7HpYWVCPPpo7BtmD9Rbbc4EZPWLy",
  "key12": "2S6fSffpuKxSZk7m69Awmt1v7uizUiKCEJXWMHCScKu2SoWhUbzbBDQ4kWwxPuXS7iUw4F6aMsnHR2vVzZ2iSQKc",
  "key13": "3fn3StubApjAzJ9FeTjNUyagMi4k7whpEYwXf7AMv9fhnEZ7qSVLwnoWeCboBVWYCdgEgW9NTvESmFPQhawNV2eX",
  "key14": "4GEH5r6ThBN4wKKR4ZB6sQ6XWMThLvMAYGVKDszfcns63nPAdfeEsxiZAqidL2BHS7s9aru2HimqyuotnSCC7VXP",
  "key15": "KHnzrtot4DFhrGo4X7fV7to1qX3Gf4rNerJkXczG8t9a4h3FM8T1F5pc9eWgUAPRNjtaVYvavL2jLsS8xT6Hfaw",
  "key16": "2WFynhzRjy39bcuKLyNEoc8pG3hYY6SePY88JjBLwmr4ckyr6jsstN76WLNfSxhfqLu8J6Qu43FfrPrzkxaGNBFC",
  "key17": "5uRQcVpb7PQ5QajmFXMzNvYTZAjv5nxbWgbqaJ8vdfXxd4NTmeHYFvCegtQe17wq6aHccUY7UXJwWPL8RZznGcaE",
  "key18": "BTiyQ2cJZS9PBGotshkSSBvqJVH7WJZyEm88fAHqErLjFxHbmvSKKoZhas17WhaCZnkrhreTtC42C3dA7gxbzkQ",
  "key19": "2hb7q8HFwgRd2prkB8wvm3dQ2YViJpojCUxJMEHubKSnjHFAsmvSQLYDdbq258win4ixWv3oS7qxCxiQHbD3YFt7",
  "key20": "45mHmDrbeLhkm3udM33q28kL4Qd4VmDvYLdraoF68bwDbbWTgY4SrnH338zigCTN9d257hXtRYbow2nUzbFd26QU",
  "key21": "2NtN7QuqdW6ESHJsi8L8ee8AV4pCbhMgBmPVgXyKurupKCzoHvzoW39Gk83nmMoQMXiNQDq1R3c8b6WskUGwvGqR",
  "key22": "4HWjLkh6xqWkk2z2tE1J9PrqcPd4GbmaZXUWikspDCywd1J4rayJKpfXYg2yxfuEbm9Hbkcdf8xq644aPqh6XjZ3",
  "key23": "nzUmk84zX6GsMKEhvLhWS2mAHCAhNz1pcELHawBts2RcGhFnoBYRmsZ4ACZUyLfbgpc6imDAJxJBSy6n5Z3DPc3",
  "key24": "3ivv3ZrdFj1mKdKRRecdH718UxABVqLb7qnnPyqedNwheFxRcJSFmEKkYydggqCNLcsyhYRjoqkcSHQCTBgMYB5G",
  "key25": "5L3s5hGFiBMYqzYmS1ajbyc6CBJr6TD1xP2se7t6GsphNe5gZiY5ey6go2yHiyCvqfirEh16rEerbhLh3skMv2S8",
  "key26": "4PviNzzo8YyibAmndCCi5yLUPCNXSqGbw2KiWCAydCtHfCFEs4UvrztBg2zKnABd2qMqz1yUfKpSBPV8Fm5pBxE",
  "key27": "4WjdYuVKRbd7QQ2c3ZTztKvovza1fyLxG6GjKupf6fDS62Sn5ev68S9f79zUj6SUbeTtbyjrfwJH1cpNqifK852m",
  "key28": "3kKYCVyzHvL6QMMwogoz3umUxbegYsyvc6kaiGMmxeNqsuYSt7qqF5x2GPhrvHmPXKq3xQs7sqa1Ub31EwEGYJ3p",
  "key29": "399sdHGc9kTB5jCfXn5EsgFFzfZroaQJRQANJywK6e2sB3ZxSNunrGZwR7za8YR1Waw1raM4BtG1emCja6aBUAC8",
  "key30": "ZLsLSBd2JLcWuetA3EyDrFx4jo8TfV3a3mmwsM1a8UA4UYmJs4uhXJGiw13JbCeqVXwQ11JdJ39gZ31efq9vQmH",
  "key31": "5BvKPNigo4d9MgiGaDuLzCyyWGguMM28sFnqcd3wedNov1rnwyNDVY3281BETRF1UrxUMYwQju8SEkGdwn6VS8xa",
  "key32": "4s9M7TojmPnTyQYdtURRwZpCJwtxPA33n4QoqBMpZuVYVewMHzoHAuMMhQKRtHzmgMH4Hxw7w1PkTKy1jdNdCJti",
  "key33": "4W6AsMNnhSGsnG4E8pdu1tVjFDuvzqBqqkctTdM5JqXgvd2iNiKqayyTzzTU8g8XJTA2G3CizK4X2KT9FctNCwSV",
  "key34": "5L684oZvzPowGz17yh4TjC8LgqA63uNaa1WmsmuNQYqGW8nhAzgMCQkaGJpp1VTeJpCM4UfVuz7BrKLt9iV4J2q9",
  "key35": "34tNxpbnMLaBjXoeU7TLVAnqHT2uiHYcYrQQMRVyjeVqL4Utz1iW5zJPHSvCiHmRroZ4fjU6hhhq9zHbvaAdEfB8",
  "key36": "4JK5WYxrC5qcrVXWeaTMpkYvkX9cdsdg3jjemgVnrTJxjoWEzFCNKy7Q2z7nLxV4ex2sr2Gpph8KY35nmVNn87CA",
  "key37": "5hcpLiM4YzGE4DvnEJqvWyNUPRwUGMpRUCKhTi8uAvPcL7nB6WGXdPLHFVD6ZSnUuNKWepCbx1LpNfFZ95RHJV5x",
  "key38": "2aKyrc5s3NNiRMYsvac9QK8PSK6Q413z6CJsmfwF7oNxLQkfKASqKmPHDtQB3h4VRasB35dFJLEEnc3jkCz3DVAC",
  "key39": "27ssLuQVZhZJW5aVQ6BbB7sqpWoibzcjqyKkk21ZEM1m7zD5tk8BSF97ySpx5JfBmjPCXWv6Y5RibFGyYhTvnCnp"
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
