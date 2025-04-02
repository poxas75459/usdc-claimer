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
    "4swe8txG9iBmN5GpjWh8qgS9bDZRguHYQpNNYqwmi9b4mzfx5Hw4GzYg57Dzt143pV1RubRHdc8ikcw2o4XVwc9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYvZGMCuvJgQkgJuYhJKiZmNpkwqHn9sZV4tpqEnjxPgbmWEL1YKFBm1ZYo9u63p89Ea2tGDuyud3DK3ozDExzJ",
  "key1": "1hn6AoceHfztUNgsfzm17MYSEs8Dd8gsrcMaCjJ8u2upoP5dBxG6NdicPrNuiEMqUqkosKn3mXW7gnNv7q81YT9",
  "key2": "4MqAUJJpa3PJM6JpDzpCB46nm5nFRhDqnfZBeGvWEkiLTmUnCs7i9ZGf1jXe8twqUcnMAnPYcCwmKoAXLpNfonqJ",
  "key3": "5xJEfXqZkenSXHgxs8wtax9sPXrNUg1yS5P1Yq3FU4AHwR4tgcVcRaBjd5oUTCYGFvyi2LZ6g4GcrTUJ2c6QGPRe",
  "key4": "63PqfFDNoPhvsj21UucRsz8e9zSorhCisW8yywe6gb3iyJ8DR2KGcbmyKoN1bd3jsAMMG4SUgKJR6gYJcAsQFWrK",
  "key5": "2LmsXXefdWruNWey8uJnGA73sSAwiQbuy6YRdiNL4pxwD9aYYTdGEjfAJ4DYBXdH8wuHRMN72sbZsKZCn1MJccJH",
  "key6": "38nfAm8jwuyMRB5xM9pB4obrarQUrCaqCP2uf8wMmgNoLPwSjMrXu9PwDBx3A5Syhem4azDUcxxpHM8VPJr9UWxC",
  "key7": "35iN8K9zoqXTkeznEVe8vBE1XuBzb81XJnR76mUFxhCZSsHg41eCwDHZBo324AHWWaY7gjXKMT5cpPjx2y6i5EM7",
  "key8": "61WT8SukJJcT6RjU4DWQAY6gXHKLa8JrKLGpkVaJ2dzwpNTyvbJpRwk7XUsHNxr8M4SDyJSeZWqUGDkbWu51LxjG",
  "key9": "4643M835nM4926e5dWab4HaHoRa2JYW5wFMtfosw67hSS9694yxhoNyk7v3jcrxh9mp413PqZpho72kwKuvY7bi8",
  "key10": "5Jetu5F6zLQ99okf2TgescwxmUAvi83m9T3Q3r6CSeWCbJgPSzVxyMn5SeLB9D4hkLUjBhQsmJd4XgDaG79eyc3E",
  "key11": "28k4MZfcivLCaGxeK3x25rnaGD8RtM3WicLWhjGN5cAh7qAQVoRsvYRZmXxAqpLWw5JNdZdTniLnFUnw22epgN4g",
  "key12": "4s2gz2s6vBk7yqCtmmgsQJT6igcDUATCnwTnvoj6tactkDHyfqM5bt1yo2n9eNMDhUxXaor7yj5jWN3x5UcRGqp6",
  "key13": "HRStnDpb2dtZjLLvoLMGLxUqtVMGihPUXkMixoRiq5bvSDSeg3J1AJuqVGnRDoisvMNg19KPEn5iu7FTQsSv4K9",
  "key14": "5yS43vKyohmxDCb6eLBqRgALWKac4wFVdz6CYqomyywawwRL6LJdzNR8hGUighLdU3cpPR5Ym9uyE9FeRyhsaZE5",
  "key15": "QMScY2WNRBiPgjRtznvPi94jdjwa9xFz31BprDiR1Zn6ahqKLaXxSCGkikhUfdeBqYkDgujZ4QJFhTr2WSa1i7e",
  "key16": "Xr6aKw89scT2a84fWNv8iVKrqSWnsW9HamRDmcmLVytQQkzsHwkE1j3FZd6C2uTWrdEkdWtzAX5w4TgLwWPe76T",
  "key17": "53uMJrG6H3eC3oreAki1nFxYuQ11yfiushLZStvf3zstkuPbjvnEBYbebgbQVrTuYTgPxBemvzx4X1QC3dTUNZ5U",
  "key18": "58eYuKqMbdbscFeivHEihaAk8NwnyrGuSvUtwGoAKkZbGB3PmKEi24zkusEpE7NJwF4gcB96VGm5Ft9kKYkksjtd",
  "key19": "3nHKEgpjM7nx4rf4KnYD3VJWaX4VJKpw9XgzRqdKu9SDA3ivo16W85JK9PcnFVaznXQWsS8jK9egHRCBPrRbdgxz",
  "key20": "4uUFy1eR7vxumZMD1Wr2sY9JkDWscGpHu27C3GwWYPJXHcjKW5qYd6rLpnXT2it4WWN3bccVmVNmmFhuTy9oNJBM",
  "key21": "2Rg5uvkU2pgHSaXtanrtYkiXFK6uCLVs8PVLq2LQ1ttwsv5b2VhKQAjicNXt8UTFpZm1KgSm4gNisEbx7KbMFDtV",
  "key22": "3CLSXZKDrGm2FcbpPFHHjKn6Xpf2A61tDX6c3KXMYaP9DPXTXfm4g7ADySqMrTJf3ShvGUr7seFxbavtsYGnanvR",
  "key23": "itnYuMK3eT8RYF2zDp4Ub9wSTNij2anUevTsQ5y1un7tVaiQ3Y5aSHR7UGmrnhX7X8VfuS6j47on3q2wydpmq3H",
  "key24": "mNQxpuqzm4xwxgBhDU7RhfD8hjeAru2vSSA8LbwoiVpvwuNKadv29EnkgnVkGYdW8u42HHEExQY3zwmRbuehUsJ",
  "key25": "2Pjo4qRxVsdSubvbTzY11JssqbTvXt27QNCaFjjk9xuswTf5YkHQiVu9kU5jyNm26Mm9STDC2vbiiBfR3rpxvjY1",
  "key26": "3gUsQac5VF5wN7TKWMFVWckUHK1R2QT9UMssk2WiGrsC1JigBAxt7LzcNuSqGUZpLgBhsCww3yBaHPLnDvgDYhvw",
  "key27": "8itWGRXBqdzkfUu7qg15Sv2zeiQ1oUMaRVuQ6hXNgMuniZ5nFPveEJy2S6K3a6AuVqNEdMuUcDAaB1Ho3T9h3rj",
  "key28": "3vMx2G7rY4UmsTWAbAqHkZjkTcM97EY9RkCt7kv14orTy2AVyHnk1eiAiLoWSgB2fMgJspZLW3SVrBSocUwzt7tT",
  "key29": "hSHyYGJxuvr1LTYaZ4s7UeKX1EXR7n8rh6EJPDfQJheYsXoNDqLabgemZuVqxoubuTuBzNfyVE9JGKpCBxnzPBE",
  "key30": "2Vtathy6miqnNax9843j6JfjTRv2xMCpz3NSx68ZKqKzisJXQqgs2ifub9kDVCGTKB47sAf8CHh38gtMWo2WbbkP",
  "key31": "3i9GwhVLiPY77HkBaNpErpjAY8KJq885tcCnYkv4DwBxmDmXQMGYMfV1TTZtkzDWj5EJG7byACQmu6JEx8B4D7jD",
  "key32": "67QMbX9hDp5chE2zdadyqNLZWSCsq6xE1VW9pi6C8DvxVEXjePLo8QnYn466HK9v4ZtdMEtowKUJjHFAB8fJa5Qr",
  "key33": "3AgcCm94vemnQkdEkDi25naGJngzBvMgZ6zq7MqmYkCJZjBWXQa6bCyiELw7TGRC52vZYzECDtyss9TzHs1QLnEa",
  "key34": "4v8RdR1DSYDUDPhgeBCL5wmVSNUmXWupTyfNAuvNQThwXRTPV9Liwn57qdmkRHx64XZahN6o3Vri9Xs2VTuUbDBH",
  "key35": "2o7W8U78N3EMyC2bHxwS5H7wmp8pKmBWLukQMSohHqphMVWJGtrU5kn6yYK57wEZNGP9REZRB9YCBKtRanMqNAHd",
  "key36": "4BWWANbFrXCrbj3GNg3P9ACyLEx427g9jmP7tDnk6h3NsefFcrZjkFpUF46gDNsDGhXyFmAWrZzCMjCodet8cL4e",
  "key37": "2vA5gVSqrenuT8HWEpxvTyGAXoJoHHohFGXdyeQfgv8S1rRqV2rYQGWpmdEmkHTfEGvCGQWBAzuE1GTcRfaHJxiH",
  "key38": "2pEcBuSbCjckaedzHhSwQ9sAWquDx71J3FTTzkxZEX2zt78fX3gc3bAsrYgGdawkyfqEwqyFrKZaCPFZrHJSjVUK",
  "key39": "4p8kYreXxJnvEwZfU4h4Tv8jns2JTEPE7Ka2qvPVsBDoLpqaDtecYo96cSJDgJkgPYsHJpAfp4jM4xn3AGhG5AB1",
  "key40": "2XhqC6hDJwAcDnChQpvhvnDXCVFPQEotyRGNcqGKUNwpUm1k3EgodGJYz2dNXx9HJetjRXxZWwNXQ8eaxHto6EY9",
  "key41": "4yAGuNhHZ12q6V9JRDiVYyV31XGM7cvmGWvp1NBHN5m1efYYbYDarDYJ3H59TUTqi4HXzVf5iPpHjBe7ofBiNgp8",
  "key42": "5X4iHba3fbiUtGDKqSCzcJPTz4egbkLViPQFm5c4g5KgM8vumJv7W7ESHTtpydwQYQS8GDhpUPceppEEpRhebKEW",
  "key43": "3RFYrKeWwWcVSTXnsr9h4gWKigtSRxRF8AX8z1H1tVwrZNATKuyM4t91Bapzagg7PPmUN4M81zZ4Xwuf1u3v94wK",
  "key44": "3K7C9Jnfg3zHSsfBWAaEXMkv5o4qAuCCLp5bY4LJCVtMFCeU144qmkSbgSkVQCr9y8A1o4Jd2d2MfoQthrLH5Wp1",
  "key45": "2Tu6aMN9JPfJnVKN3k7EbDs9gwqg7qWp5BULAbcXvW8YAo1k5ZSw5DweRLcZzoxbBoDCP1ThHMKuQSP5W8KiCpGA"
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
