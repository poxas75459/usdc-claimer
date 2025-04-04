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
    "2udJboEu54ZhHZvpmoL61xskqYVEANK57tPS5kXXAZQpyAraPF4ZrMPPqTfDAnA4ZiKFBf7vo4Pwt2yJLwJNyamq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fFjbQ8JfP7F3rr3h5TsmL4nMuA9jqacFTti6PAwCYNDniAZ9NKE84qRC9G9ck1o2eRykTp1ymYSeUYraJKtqR8Q",
  "key1": "2EKiN1GAmEz5dKiiieLtYwBHptXMukwiaPYX9NGVzdXMritjCV6N3RwzF4uEzuGsDMqc8SA54gXJNibwDx7tb3YE",
  "key2": "26SDzEfuocFxMJ5afvVtnuJ112Gs6NywmGFp8ueBQEsGETByAS3jEsvS9QBNF6pz1MUwD58KTEVq6Mu6g8NJ73AA",
  "key3": "yRzKf6LVtm8e34n4CQX8tq8eL21kKVxRZxB6x8G77L68nb5UZXKECXqBL783ioX4uWcX4Ycqc4anVK6TfaGmNcP",
  "key4": "51fkDYJYcKHpufB342747Xbgin24foQQCYnnkQvC11q6nKf126ZQTcdEiV9EEfmn3FSDzuyiCDg1KwGfoF8YSLQi",
  "key5": "5nrQTNWk2FnbdwM3TnXrwURoxLUDdYsqneCX1cqDsZbxA7Ea6aB5FMWtwPqah96ruzFuq48qhpJNPfpyWd1a7Yh9",
  "key6": "5QHD4bYJEZvDUHWgE9JpLJEKMCELGhdMUN7b7HvzXpHjnK9Nbxvvu4veWfRbcnp8j6WJigGa6xcHDSmc5wvRvwoG",
  "key7": "51F7J1buR3nmpsk46PFN2bFrmbe2ZrHiS2axFTyD4Q7SUc4dH6f26FhhMPzqnexxSbXyYbXVk7cpEjLDXajz3UjB",
  "key8": "23m2xwVoqfgRwx1W5L8J3vdAbMTbbBYuyhV2yDXnMfv4MEuHzRMEKt7pJ5wQoKkfHdv8Zp1QWkZe2gMmEiNpbceS",
  "key9": "5MtoGUhy39gGExps84uNXhL89uVSJTwQd5Bi115xr8BbyZhWorgFCJZotQvE4pWmN6UCqUJKkNVHQmoGoipRJxTG",
  "key10": "2WGt7KtgeKdqrbXKChGH5yw5dyrR5wzUFGpCpjxpcMULps5tpbzeCBffjZwD46c9SFRN8rLFehPDQHzx2bdqQsLk",
  "key11": "5NT6d87wDvVnRgWoQxrg4g5qd2Sx9VnLPUDZGFpEKCoqWxsRcFe9hrYQr4zB7tk4FsqcTDYYFE945h2mQrCHAcNL",
  "key12": "3cMAbAiKhSUPZgEQJSNKqyGoCX1bHtzGQ1yvs4XWxmadurQAVb5qziC4AyLFT33cwqdNm22NUAgxZzTxcVYSxdcF",
  "key13": "5oKg4WeGcnUVCXWRaZnCCVw9UCq4D1QqYqs6JMEraZc9pkm2vCrtcf3iurtBtbGb6CYRMdAiqeAxBdh8N5i2C4cc",
  "key14": "4CtRvGhUkfSzPxZfmnNFfCCm5a4Gs34grgmvEVgMQytDRESVeXPsuawJCEhserzbRy5dV5pfiKW3nNfZZa8pDKEd",
  "key15": "559kgVChrFUtY9yX2kerdxQoVw8rhdy261mqJd8GfutKhaJihatNMhNsEXaeKnLJccmZiUAecmovZADBmK1mj5BF",
  "key16": "bNoeJRhZa9MPy6R9END4E5rNQtYK7pSZ9fU85jvmPhqjds5e1HVjdvv3UBWms9MFF5oJLyUUt3EhehrW311GxgR",
  "key17": "5YwSMEK9PuVqHCoaQ9UqEHYzt2jSZQjGSutJCq4Hcq3HgnS4F1Rb1rUZKNkMEjtKHenuwnkTQS86jUTsKgzQW2RC",
  "key18": "2k5z4aBZvhKuZMadP5JQM2mku9LgYas4tL2HwaG3fLCYmT5M7tjtwsgASqtkvgd94RaY1e1dMpu4FAoRwbHN3fwb",
  "key19": "3oZHQPhocijCEqPL1THVyNzaZcwut9yVNxJWfy7FQQrdvFj411P9PdqYWGqfkBCLoGGAcgyQPyfH9vaq8ydG4KzL",
  "key20": "4PBJDKEoXZc58rjn5q3zSuAEfUDbusB2mHn4kQ5CCX5zgnYxvWx7ULv6wS7dCsAha2dWNAK39UM31ueUphuK97mY",
  "key21": "5LmjMVAvX3wBa3SucyV3uky2K2RosZtECh7ugR4uSf2zg7sNZGJX5QnRcZgifTNn2SyJ9HGycKSq6vKCQJb6BpHh",
  "key22": "3wHr1hBH3GQM43Uhy9ZvAH5kpAYAC7WpL7Aq4Cn5k81Tj5fPdFkXxmsYHAuK5em4xNQq7Zy8o3MUiNefUbhBXzNU",
  "key23": "5SYS83piVHsuz6x1yzRpVmyCF4UXf9RSPzYLueKfKe9KGVtSdaKSH9VwqGneSkYYQkcJpNkpxmGu9yW8789vGYiu",
  "key24": "4PRAoeQavmf5y8EVpVLR8U2fTZjp8yCKq4EsnXsu2BKmZHa5qef7KbqRa1i6Q5YujuZbavejxtWjZrRTYFHHkrbg",
  "key25": "4B7KyysCTf1PS9Sujo1NHCskjfV22spcajk5nUFqyp8i3VghG55kk863u7g96eErpwhVJkmqJbaJ954kgu6KfKhj",
  "key26": "53MWZAaXyihyhpZi6fz4FM7Uh9hpNz1vw1QuLBDiLoHt4sapj1DxeQ5vHX4Ei8ucHUcBsXZwEh97rmwfbQKcMB9v",
  "key27": "2MKLH2PszDHrVH2jJU6haN9qXSmyStcauyBuQEeJpeb7EjJHVuT4FNXUu9XjvEFKi4AvMqLnDRCNrMEo334Kwvvb",
  "key28": "5unqnPdYc5MmR7ejZPEiiPsx4wA5Hw6Aet43RXwRKnY2VpKFydmgetGyFvapieJ4UnrmmQZRGcApZpFpFe92TXwC",
  "key29": "uXajm6z9vJsxbrUcRKNnTMphWSJ15mbRHRWmhnf4NcSJvW6Q2h9h653JwfX9TEK6URJUYEVE5MM9G1dyw7Vwxwz",
  "key30": "5LSZyZeB3bCugoV9jAfj15CjZXbtMMTM66gNiSRR4JoHRi2EfGk9pA1MSz7v7GPyd4gF6uApqZNcB8JzzJxLvEXT",
  "key31": "qC5HoUgpy3FjCLtNkQQAyh56c6cKNb1mE5p1R7Q3UUUjFymtYYNazDJaGXebguL4QXUXDUddQZkBmYNg2tF2ZR4",
  "key32": "4EE6jruuDY4YPHALEcA1Wo1uPfvRcY1jMXH3DaTS5ADAw2rVVNV1jGCUZV7fouSStkxo5VgHtdTtVGWBiqfdRwY7",
  "key33": "2zjk4SxokhUEstVdPVPV415KZhkRLoPfuk9oSfcj41Leg1RCoWhBtQzhqjjonmQhaSHowmagf6wQF5ttsvTefiNV",
  "key34": "265TLPwYmgFTfkjorGjRNntx2PtoCn9rSA84eVFobcPt6YurdpGFq8iFmjLGMQRL5H8mrFpydkUCNWwFSwrR98kq",
  "key35": "4LhXjkme32cjVqTEHdWymGKx4PKVmqiLe4WTAf7jnRknVennnXcLno3iwUXwLY2WDbfdkjHHb8YCPc5QUuPNMwAr",
  "key36": "3UMqHMja7miBpFU9eRWBBsfiryRZ8QMVC3aLaW1BAZFdbxQiMkgB7Np8cunQMEbJ7SwEMPc1viYwHWTu1Qs8xhs",
  "key37": "4xeZNCJCuHa3VkV8D1LF1rGco14VWuM5JBmJ65DNezyXCbTUX7uTsNtsRubKETHXw4F75FdCeTpt9pso6s9dZ82s",
  "key38": "33J1RASkQr5rr4w6yWhCRXY3kbVZXkEZYcSHiAjt5oGyqrm6bH5Qpo2KrzAmGnSBMKa6khmD1qDzxVYpPXRrQTKC",
  "key39": "3VeVBJHEk7YCGge94t6MgpsFAzQJ1UHrn1LDRrqc6mQwME3msV5tngDRiDLvbRbrj8yk4v2CQaTNLWVoChiEeP5g",
  "key40": "3AUQDfX7w6buVZbK5q2SvGBkaiaHRvbwBnvgx9ZsCwgtV7d4LaxACg4eZsg5qVuhLpmkmzQZgtfcXJ4DPP72FuEh",
  "key41": "5oJJMoF6iX7RQbksaDT3uJHvyGTKP76SjEAGM5Bhm2ZEv6fXc8QaTXdEtk1dBQv79yzpJy9ZY9vLEQ4eU56PQgJB"
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
