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
    "3jXUw1ZtuNdr8x3mjUHSWcm7JiKK4YMLLt6V6RADQw8L3i88mgmkGJwqLaWkVgJUwHAPsw2VgY6ussKg3AEzPaRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46f5REcbwUtsMFqBEbUVBH6wRWGVjZgEBn6jUsRzeBQyPMESRMJkhJHXLUAnwHHM8Ps8fqiHvuHHwBuY5qEjTzSZ",
  "key1": "4oFngPJfu1UzAz1UBsf4NP9JsXw6FfVFcvxEhsxv1BG9WhF1CrvK1Hk3ufdf9DFa5sgNKtxkpF9tFvPDXsWjpk65",
  "key2": "3QrNF9FCRQyojb2ijr1NnW3xkG6bFLc99m5EmcRPjkp5T8AqLKGtr2AczHx8VjigjuNMfn2ght66FvDSCNz7VqWd",
  "key3": "CSiRoP5DJuzvfHdgDrZKhXehSxYR4mx9fuasY1wp7XRidcZH9g25kVF4YbxCcBJh4PXRCQgGaGwy6kKTyNFCMM1",
  "key4": "7Tqdt4QCZVu94YYSk8cwc5dKfP32CFZUv5uso1ZnDyMwiuFWjzxgTr6SGdevyimgn4VwRPiQHcCCpYJnaqBnmHB",
  "key5": "2ERQEKT2WzKv45uUtM4fmBiqKFsXYTYBVes6rbAyHt3yKb78SGEbqJRGP6oC7oMeffHtX33oRxNP5m4yY4xeMrY2",
  "key6": "4RQpRaREWXFQ7Wc75aFLygCPK4p6KuDLLTUpJm5NJhcmTZfwHzrJ3fSDZj7QaJ6RU3MSFbcSwJFtPsYEPm9mpWSB",
  "key7": "5Lg3RrA9rHaWJHadkx6wg7Jo2fdRSgeVnegFoy7MFewvjRqKLESUZ2jwa5eiHWqGiz5RmTcfK2Ghpy56tXrnq8rK",
  "key8": "QpKXTam56tHzP5Cq4cvyChGZB2tTo8R9T3ydgWkhFGUDtybCcThve5TD7MgLFCV6U39XUeXo8ZBYhr6iJPGXiGF",
  "key9": "38JG3tLyKXdr7mkgZ898KNWYkNmTMdHwkWAQn6XjGbwZYJCk4FeAuQVVCfBdsSfAS9LxqGhsdNBQQkZjQiY3nkUM",
  "key10": "32Cirpmd3UXqpc7XtKtzHeYeoxFHBfmrKMKMXuctGcziJa8hXLa4m21jKe6Bvuc9assE6a9FuWqXSpTTJs1NaheJ",
  "key11": "cV4gsU22cWC3yGUq8SLKqQjw9DVT4iCyJuXDPqTi1s9n3p3L7WewEDPzCtggtkjp3ogQMVJrH2kaJJGeTWjANUB",
  "key12": "2fnW8yZWKrQ1YrCCUXpYGMuUXmq6uRRH2uqkhmEdGQg4pxdfzSyDvB8o6BQaBNHZDT6N1SNQrNwZWGNEbVG7vw4h",
  "key13": "4oiRdAR3RMsh8HSDauwN4bniVx3AnyrVffDJPEUe1BZnJ83d4u9R1LPusZGCNvwfrMTMF9z6G7fwZ69bJufsv1mc",
  "key14": "2vtLMpQ7Gm5nSzz4iDZZ7rh8k7dRg65a7rGMmk5debxtMGaGmH6YNFV4roQSUnxBBCpXYYZwjH6d5L3Q64GRdESF",
  "key15": "3g7LASnC4TQvquzthTL1pAmCnVKfr3rU5HF9vPYhKUBJboAQQmKpsFJkRD8H3W7CpkrWdgWLAydd7Uv4e4UFTzoH",
  "key16": "5NjqEJNxfZ3dRRYMrXH6fJ2aLwA2Qc5bSztAJYBmvja11dn2rmcwvb8r76Ca6dhHFMERWZPLUJrqtSVfWxCQpErG",
  "key17": "2N6FpCFwU8QXnaNhjVZfjoPm4Zj347e4X3JgXXVYrd2t3MHyRSFqmiVE6rPsq37cTQFMh3RqdTXiDwZi544R5xs4",
  "key18": "62pZDpaTWwh8eGmmdMUfVxEsvc5UR3ssQxCq4S4FEKvMijgAiDeKtfP51N3YJV76CZR7t5UAj1pHhd3PRKjYMAbV",
  "key19": "47fhJrqekQpv2L37WwKRaNenLNq3smUqRcbQ97K9Z5pQ26gSgaojfriQtVa1UYpvVcPL6fCifzDq8zCY6oFrqvC6",
  "key20": "fpyQgGRCwtHAjvRtnzLRykgnVSAvT6ABD8br2WVVKEBnBSoSYXqEaiDRTAk2NfNJDWbSqfCv6RtiAnu7xSAEG6v",
  "key21": "3a3ojQ3iG8AFrqCugHkkiBLE1N4mjDhMWsshpsgBuFzMgEu9zbDvw8gSxuna6L3c24K51i6Hghhh3VUjzZVwX7sV",
  "key22": "JnGoGce53dYVaBPHQYQi8QTyTRmUBwdTBKQYnbgQLuzJKHyYw9bK4qNAgxXstB43CABzouFpR6QZFfqu4X43YXn",
  "key23": "4pk6U7tAoKsDQtyPsLrXKouWrEH2wQevgfYdHBGLBV7AkTqJVJ5Y9RA54RV4YfYjnh7bQkwtFt4yyThd6V2DGuci",
  "key24": "62RD3cy27t1315ds1ZzqvPYMwHUhwfsvRpXLA9KuCBZU8M7sBrrjU2HSQiY5WumJKLJ1SMXU1pbKAS1Zy3vHaFfE",
  "key25": "3fyi3QSwQRRwdwpWJ1etPzVeUqa2mf4oRdLqYyQu9Vy1TEprAjxzcKJeyxY9JswKDzatdMLLFBrp95p9fY85JoDT",
  "key26": "3wEmu2vgxWkycCkFPxvbsTEQUYDMu3EWqFV4xNJ3f7YmHEynkt7FqFZPfhEcNBan8nbA4XwxDkXz723V9AqkMb6G",
  "key27": "4eD8cC8BcGJW4sc9FLzKipCjoqyvbNNARrp84XvLWm9atHeqfFLWSgoDraS2pt3jcxRfteBX81AVP6FMANHDsKfL",
  "key28": "2gyZKWUzJcqtwoanrWHpkUAmnfVLKmSBewLByhMqCoM3GtXjSYgVfqhdj1XzD8FRVUVFN9DjgPNcVmbYvVFjcYP2",
  "key29": "2q56MHARbcTuWhqVHJyCJrBWBHGAnw6SKyjJvF98oVD3uxevE9Semif7KpyfKFBDoqRdeGh8eVWLE8AVbt8hpG11",
  "key30": "BRdo2vd38H6EDehQPbpMm145pX5vTNEACnXfiUYneJVHPXWWuzjqumM3tMimKxs8y5gfhbCbZDMrAt1crDzsoA7",
  "key31": "3rPLcjom9By3ue8k3x7Z6tSoNymxvitkchsD3QeM9Upf4DzDkHb2z8cn9VYnNuAV2HXmDLWWCrZ4ev2fV9w1ipQB",
  "key32": "3pD6ZydLca88dvnRSbPKzj4PqkJo6usVKVe5CseMmsdm1BoWuqVwDVjfP3ZnkYUvN8GJNf2j2WXLgiuJNQk3nTJh",
  "key33": "3wGuEK2qMu55n5PB3URJKsuKuqtq17yyPKNHsY3fqazodgd6XhFqhiuEicTJYXS4ixgKe1fiasHYfyLb7gLdcVft",
  "key34": "1moGyPmi265o5X2s2jkRcKJFPQGkPE7buuYYEVtyyVRP8yN1LL19yK4zJr6mPHpF5Mnn82jdPdHbxw1QQ7X4Wb",
  "key35": "7zPUc1hmjJup9Prv76oRNoVoVaFE82bzmTUq2jcL72dtVnrYbn9MkmiisyerntAFKUTQ6Qo8J245BmnHDR1XUDf",
  "key36": "5pyrBNRpvWMaksUXLnDmvzy49mEgxp5das92VWmcxwbACBwue1YUyWi1pxgSUqDQuitXYjsWLwxGJsvUVNcTqHop"
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
