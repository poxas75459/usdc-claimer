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
    "4Lb9MSkL2b1vpsnR6VsmbdXdLjA8KrusA2zBR9Q7o3aWMo4YvpF6LAbNYQb49jxupMWpBN1dnPDcybjtETgoXEjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bCz78VYtrffeKcsg3oS99ZVAuWuVukJ8yofmvRZfcitiHHLwWY5v8vcVHiFDrBD4sxpbP7NQApQ5tMaT1dkWqUt",
  "key1": "3LiVdJzSgtjBPxB1FN9kacBR3i4iNu12h5P4LNnEd7ip3oj1CmCotuyuTszyA4LwrTcXXaQ51P5JFj8hEDsw9Rj3",
  "key2": "2AgjKS3K6vAXaucv7WuKhUZbqzXHhjpe1nEzV2ZuhF7Mtn948WBvyyeiyr1TWUCU7jCUKcWLBNvVPsxTM1UTPn3U",
  "key3": "5hfagnuEkczDaXtc6fpcpCa9d6m911SsNpcjbWHHEqVfuJRN9sEXwtZzTv5QBHGhp9JA5HVvaLKcwPAMt8oo9AgG",
  "key4": "Vkayq5aALYi32w3K5k5k7rNxet3sEtRqWNogud6xy1XMeiJtnVi7QChiWRGx61ANuxUkKprSx7BgH55RTz9guiP",
  "key5": "3XMLJap7B3ADTqybnnokYnzMyzXW4J6QH8q9t8wRJFHBLryZSvmVEVwbHgaB4GtDjcrDsqSr2hW6wGgaTuu1TBGm",
  "key6": "3xFj5W3CNL28LryaQNZrjvLfaMfYYUDGMQfCxCPSheBKouCcdeG9bw3kDJhcsuuzm8DbZoGoMo5WuM5qD42dNpYQ",
  "key7": "5w6yy16iqE3kBvhyvo5srRbCYFdeJrhHykHywK3D341h5ny5AbUK3fuzkuyrKkMFP35mRwa5pA1FsTyKAi6SsKYk",
  "key8": "5pj1QCSyNEaCsZFGd3qvzwTEyrD211RvgsJMuB9saMmUzQYTPwEfrJcrXTTjy8KbFVFZ74EbfAwMwQ8tQEuB1Qm1",
  "key9": "LA9vEZEYeEB7cqVQicJSz5RyLJCkNKsSdhEajxCDXKdLS6MTEgg7AZ7ASUp6EKx2wXAT6RticVmpCrfSuAfwfR3",
  "key10": "2DETXu4eewYZfZq4AutxSNgT9P2dvzMiqvq2iNQH6UEjMHcmV3cVXoTPYiBh8VhCS8RtRSivwSURBYEphJmiKm28",
  "key11": "mS2RbfGFExbw4hH4xvdekd6iMuyMEFcBJu7L3oqu4n3UFEcJV9M4RJ2CgCX779vNFaXSD5TBLLV6mjFEaXNjo2B",
  "key12": "67dL3z1H6rothTECBf4Kdi9rmqhkzv5Y2rjzipCG7eToUVgLKpvJNtAguLRjBDNvNoqmbwvwFQqszJzFk532qoSR",
  "key13": "4FPUrgSUQvHthcrsEzE3HagbbB1fMPadYHCucehfXt8wjesELDsZwbGSkwuGKsCvk5yYeygpCPwYUtcujdbsULCv",
  "key14": "5iDaCco5pUidNMvAq22PNadH5ciakUyz7sH2DpeTmXJLoLC1BxwbeX4Y5z5QWeGEhL73ZY7iTWZSidFt9B915oEv",
  "key15": "4ntkLXXWUgb78o77FryzTtd67KF4aZysRT4EK36SFXfUt43GaUKmrofayP6rXu81PYjMzWGg53Zi9iJFqVke9jpX",
  "key16": "5QRdcfEJKabDiBd1VERZYU91YR8wimeiTnmHKgndnLZr7t2VpXHHigSH6iCeng4PYJZqZLxNejWTdZaWBZUXtbsW",
  "key17": "3AXjUWAoN6uSgcPVvKmkmbS1xWTRoJ1DNrau5vc29zC7Jk3H9i6zG8HpMYsYunwpGM7CFBWeAiqwTuwoPnxFbZ9Z",
  "key18": "5eqk1F5GYajHGP6KsuUMEqvVnrYfVqx4wApDgwH2afiU5gAcbySkMBR7SGRUJk5uSQupQz8w2sjsBgYzhGsfVW3w",
  "key19": "2B2PeZzuVqns9uZyBPwX4JcTXSPhqytN1xFtQdHWZQfvSu4dNCxi2pKgj4WiAq92zDhQKRSj2wjpkycPEVuDBRy7",
  "key20": "26PUa6iEpzmeV4HBfGHBZo4pEzW2NWRagpen4VZXdNmxPhVF9Ltr2UiyjayKHUbpX5e3TDsmgwmEq9jQAaDX57hX",
  "key21": "4oXxarYXVj7GrheBUWQcv4UQ2WUZermou4ZLSvkxL2sSiuP6RuLoynUThcNE5zDjXio6zvzFawATwrNPrRWhwanu",
  "key22": "3mQYptMb1jvy3JHKkUSJoc5GbhH3mExjpD9sAwqSQApDaakYQrmuGKSBsHYPkXtE5531XtjC8rgQbVBY9vzEEaww",
  "key23": "4tztEwQ9tfEQrxiRnxXwa35owAno95EDmahe2EaudpWyh63nKoKYsovkFovGzrUvYjMY3GHXJRkJ9B7eTbT8YiiC",
  "key24": "25fqzjUh29xuqzWaY1GyAvScu9F7wdnKkMuyifF2qbZdTZfZRjgUr33kfgTAQZDuyzhQ4KpziJkuNTnCtqPMC1qP",
  "key25": "5fyakrvwF9as4H932d53p2pkoc4Lgyw2SzBzAd5mGSAP7J112Z7EXKt5dGLU4N38DXoQ6SyotdVx1rsp4kcoaqtj",
  "key26": "55ybJojrmi9MXo8ATLXqFgCh3Ct2Bw2LeG1Vs9Syxovu5RmrYChJvRwo5ooofTUfjSTyv3bwmQkxGFHzHhiykscC",
  "key27": "4s6KqkUFb2eXDMdEzxwL3zFAw4YeRnqiyQuxXm4SfjfsyNsMY1L9pkY8aS7DGnz6wCAyRdVuRpA3Vt5no3Xo9Qk9",
  "key28": "3fBfCnQxRDYvv4Dgi78DXYdSP4VgfaNPCNrZCgEMLnnvbhf2Zb6r3afTYaAM6kCrPrxmpr9VRqAbAYfowcoFE3Ug",
  "key29": "5YsoimKXjKovCLTN2meeaNUPWEaGLNTZ6kUE4VG5zatH3H7sc8ha5xzqpkKAJHASssPXB3pxJ5PPQiprZZ9FU3r9",
  "key30": "ZsJatfSaZCWQW6HtTiNt3CdkBUSB8pjYDGrZ53sVzLBfE8JtR2eEM78VJWcJEGvtFJ2md5YftJJbyBFyDYfCiAM",
  "key31": "2C1jz7xzEC6JAgkEBrouU6b4HNoksJY4SrAsGadw4NC7aJFmJ61CRFFaa2TXmsnnJGKHeu424gdnqjTkrfVnD3Qr",
  "key32": "7Nj3KsjsJuUWZeEutoGpGQ39ovEr3gyGW1BgQhxJqa98pfNKc942bE1j9uwLLoZzs8a4cZj5PigdexsNidYqLc4",
  "key33": "5votths3qB7u7jUyjXSxrZQyAdpTLadJtSuFvw4Xhwvz3xJzejNW5PqsZrLQdVLKpdKrcs8k3vgPznjpmHAhfSD",
  "key34": "24Haavu3HVcMUruCsCvsY7wFd1LGXbwVWteMBsAvFWQeSjaA563MBeTUZnhbKTcdC3y9SCdJZTWAqTYUW6rGxgNo",
  "key35": "3yyQjw5gPt5RaQaw2bzooY7RM7eSp83BfZu44Qu43rpYzfaQtki3jTJ6YWu89w9j3eor3F71vPWWdn7MAZMbH8xD",
  "key36": "5PBR8q1TPXoUwHvFtpGgtUbzCaDdBf7uyLZHSBZhFBTTQeHKaB4LFn65BAHGCcB9Hg7pRkUy7aoycnS79FpmfWCA",
  "key37": "48utcsdvqMnAqCa8LbhU6RrKvAEnHMpQtbExTqu8hbGqV7qhLY1dFQ6CrjZPh8FKgqk5egZT9P1bjhQY4UpQTGUr",
  "key38": "5PqSSBEHoCTJirrsRTc1vrDryLpkK9eEsaFK51z1js73haZd7QcGfekMxY89VcBZ7Yt6Pi2UfG36JPpQS5JzefgX",
  "key39": "6eXHRDT3yPiXc9JTfHS6pXy5t4Cqa7NbwD39cak3bdPZnXGWVpiFLyzfxLkiZmprF1w8UpS52ZawJzUhPPTYTKu",
  "key40": "4TvKthfDLXHf2ApJ4VDkAKCzruyKcHxwBuaQmNX76v1dknVnZfLcSBrzsKgMpJTyvBEEfBtVckhm2UcSjmVaz5RG",
  "key41": "QNxKnjiD5AUoWs1ag4dAgJpUjvqkt7ZCGkdonwysoWndfMd7boUayBa2EpAYcHwgtx393LeryEbYeQk8g2SmzXS",
  "key42": "33h3WGt8tNd8K5kzYA84JafuNdvk4US4e4KbmJrmGUwz9qyBiTjinkNdjBsf96sVFskGFiFownNjEaWjpfdDRECS"
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
