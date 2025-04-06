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
    "2x2qJY5uXG6hM9T1jMp44CRswfAkFTTZYqQQZxYvHFowi24HXo2NMoEC7evakzfWx4GD5661UX1cKMDDeRQU1qmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKFeDJPLAkrVP7DQaTA5hqTiK3gFbASi45DmZoDSovsbFT9uBjHutZmrKbzDWPwo6CxqzuNfSEo8Y2tuTSszt2q",
  "key1": "4pS1CTUyk9BwwVK74SD7wKiwPgR21DSNkqTfVuonnV1ApFj762htXRzV2q426qaMrM69nDHRQEpGtYWhVwTigGuh",
  "key2": "ws47vNgY5PZwB5pMng4dkGRrfEwJahMC1Pur3TZqutJztGHvpFAfbaUJbWfsAcVaNTTTSubKoTtiDrto386oJKM",
  "key3": "5vtEq9ngyHHmeK5smJmAa27bziVL6bFipVJC1cR6CiKgZnNnU8rxqUkXKjfQHZZDYTsdftofue1mtMM4LwHeJ2PQ",
  "key4": "4vVdqQDHk2avTfPYZarFPq6tZ7vFHk5LSoycSn79XsadvRiBUDf7jWQ2tH7BckcxK1z321RVR3UuP2PVHU1SG39y",
  "key5": "2pe6ajKKvgxpJv7abo85DQ6yEa4HVf7P88C8EjgYcoffivbk6rdzaHeEbjn93xvC6bKbhs6c4Cre3VA8W6FhEyPT",
  "key6": "2sATDaA5tNmp3fUxdQjYV9yh2Ki1asRX87p5ah5dUpKAP6Ru4zc1QVPgwY6SvCBX3qERZeJyccZBj2qxbFjUqG5A",
  "key7": "5z5e73WUeeuc45rnx1DjQBChG2vpMKh5WyxnkcngbsvRmVRVV5x9xU5TLcgLf4WgSP6Eqwx2u2YWbo1tS5uxsRrB",
  "key8": "3CawcpEKKK2wYC3R2XcoicRHWXLhJ2ryWN79NyEAmNrRYFUMUykv9MAn6SW42e512KiDvPgovqHjuBa6uEqv8vt1",
  "key9": "HZRJ9rjjMnyVYGQtczTgAEmcY2qcPECppcDuqBHeKNr9gdhSqKn8UUSqLd7Vw6t2HdzuY64rHwwYqpsv9sd1knK",
  "key10": "4sMz3P9GQTaRBLCLA9CNFfj2qBjTK3o86wSuZ1VnZJneCwVrFX5HtuczDaq4axmaLQESuRad8euTeZP5zTHFMg7F",
  "key11": "5GVki7M2qWP5wZtmLrsjYgLvhtntAfbfrqdHS9qCi28NGKraq8T3DSGUjxrF8UqLVayZ6aFWAKGs1zj4P9dZDwH9",
  "key12": "4gAF8LtjuRQyvXSYswdsTh3aa3BWU8gHa3Yxhq5eb1TJfbS1mmswAr2U4VLxKZLE36JDCDigGjdQm76jf5xhDMZy",
  "key13": "GcAE8EkobU3GaM9FvUdB2LBoQn7DbLSDM1ZiJo6SQ7acoeNe7BzxdzHGdnr9ajNzZfwCsGT386B7K4iJp43uMHo",
  "key14": "2JchivDii7mtLrzcd2mTnPs74VuPTHNRHoDZgqVBtLVAiRzCk1RFqzTXtzmZfDMtVBgQMaZ93LfvVWvHQufzs3wF",
  "key15": "3HZm7gc9FPUt8pkdVSWvFDp21k1ZzEarXb9R148WoK3vgg2R2Z4HJQmdLi6WFd5zTSrptxb2kqvasQWu2dvX8JZp",
  "key16": "4pxuMEAfMncqfpKt5xsWToYmzE1TNwCo6TftZCnuEDxYj2iu7L7eRLkVjyGFNVJAd32FhQCffDE5KcsxiDE8L4Uw",
  "key17": "24oGV3g7PVaQpMr3cDPzuZJTiqeZ2cPoRhb6yvbUKcCNZo3Qyete8QVeNwGUUinec4eDH8n5VJBmUMBMbNvNw3U4",
  "key18": "eiQTwpcvJaKgR2Vq8fcyeLeNGi2ZX8KVqSDaAKGSmhZgYhLteJLp3BAva8EvaPQ1bQ48cVhd3aHXAaSUK5Xq8rn",
  "key19": "2q4UYkX8keZc2m4p2HPTAZ4TQTXHTMXpEPk9xnU8a5Nhqm3idtfhryeW6TeKaz7KhTMV8MDkqVeL9rQWVVpAj7ao",
  "key20": "5sbQ9Z5ZAv6GqXm2yoWpsBvXz3BsYu2yQhMFGvs6JXeREP3RDeoGtZAXARDvFH5wjaM1CTQksXH5hEcGZy5k1VhL",
  "key21": "4V8WSZJhyojeFHYPRvPyk4sYyMTncNwcKCKfVGnjcZ8qsj8HPnL8TTHT3Vos5NaZvtrCdig7ciUTUpNJwEbLNgwt",
  "key22": "23zpku7FD4UMhsXxJ34rZnPkPDqiJiECPRH2PM6minyTzy8FsqftFhi1pRw7e5fVgxwBYwsixyamFrvSvFSnNaL1",
  "key23": "3EXtrZcTMem8dKtFNeiPLK5FXdKYmDQW23goBJfyVqeLspKYGZxDgPz1WrkQQXGcNNDaY72ztNTXV5qzDNyFNhMi",
  "key24": "5Mu7kBaTdVFJwrgndnK8duXRcQnmxM3SWoBs8LBKhtz12MLceHWPVAjEWoURJTaDuGt63RxhbhdKxqpt3qpdMsiN",
  "key25": "4q9g43hPGeJSNHGw7vL51eqYnoGHMGq5LZvkQduLCXwRdSWVuo1PDCVjP5KwQWumRiJeBhi6bsBUaX7rwoDiJwtQ",
  "key26": "2rCfpHHQz7BM4PntYQ1ejHHmBjtuw94YvPCrYVAyfFPH9ogsT15FfjqRZa6P1oNZUMnXqGNwMHxHe5aXUzoiLmP",
  "key27": "5yJoBHRqVWzGdX2DNaBT23QmohztepEdu92yY1Lwq2UBwaw9TgSQTHzzVxymTQND1RYnqzjp2d7wjtWBPB8TouVT",
  "key28": "38rMqWaZa7Psah9DsDpVnZorKtxF47ZLwpWmGnTT2Bypo4Vi73HY5U2FYKRTMko9ymG5MDoahhz55vMh15iAPbfu",
  "key29": "5BjL28KBHjeGap8RYJxj6hoPeSQrCF5KYPhyTXZDpYWUsh6jEJhgsN1PErJwwRgLjk73p22LpwVT4uKmbJVhtFfu",
  "key30": "5bULVmmNUuumoGPRWBM5W2CMaod5KzngzTa9mseTgGFB5AsqbqvULZL9qzAFvS7rq1ciNi6zAoq6giE7bPYWPWqQ"
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
