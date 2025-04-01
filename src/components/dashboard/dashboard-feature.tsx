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
    "2V1BYddXDDDaBmnFQutBQsVZ4nwcZZBL5qHjfmcRt9zRCSiTKYTmN8R1WcrBDejGtbTcXU3DEZ6TT6C3WfofTca4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25HkrSVaMDc29GQRjw6Vg2XdszZwKkATnA4BYxDMjwRbTVwVdyyf8zaxB6k6hJox8g5NjVGCvoBY8VimoGE8pNtj",
  "key1": "67S7UnuYHaK4higdPrqd3XPnGziKeC1WBfwyUCeND7wvZTbDsHUgcKtsPrLnat2vSosC5F3TDy9AYmKRmxmTGeDJ",
  "key2": "2brkupPszSRz6NqHNT4BuvGi42pVyVwGxrBFZTABp8HYMCZuRkdSNScowGbPHo76cfm55XXd85yBGf5ijPdxGZCJ",
  "key3": "4TmEjgUpBzYjNuzpCrWEGMTGxS5yQyxqLrEEmkYBn8xDLHftTHpSb1cvf7PA48UU2XrVgV71gf97TN5X3Nr9YMJc",
  "key4": "3Vs1PYc2tr7FXRmkcBVFhaKVyhCYGpUUhZcaMH3e2DcSE7cpWjCb7PPTV9tZVJCMohefotCMHX5aTumsbd33qZMo",
  "key5": "aQqeQbu8Um591VHFxemM57xJgdZ6sqYpnF2sRSK9faYTGrZyfShkHykQKQw8zVfE8DQ5Gq8DCEYGxPZkAoBA7Cx",
  "key6": "54Cgrc85Kc6jXak3KHC9XKN7GgxL5X1UM5SNjxneocddFG3u7uVJZ71VDmDt7JYbJfNuB4XAnzHEvMfgaccNfnLY",
  "key7": "2og5N9krZTP8FG5q3aFaCHJ2RvdgECfwUVdgwAd9mqicehtVm9P6Eq8w8fHGmD9crHNfxXUfh7riEVihQcHgEWUs",
  "key8": "3Fv8Wwqa3WYpQ1JRpaMqz7QHyt7tDx97V3EkAjRuaqxndbNtKLCh1fKbYNfFbDwiy9QqFkat8NsAEsu8YCGTzc4c",
  "key9": "2ZEDn5yFpZGzAZvPVfGNAcwukbvghYaVrzYvcH3FNPPWHZMgG4oNikVJPfyZuhZb8yMrRGB2mnrk6FRMvvChmxwQ",
  "key10": "4KGkco5gUNe7fiV6Tz3EFSEawnxtvbxK4aRTfAK194Kcrc44DY1fey3epFny4qdLS98jF79UziZxMfuK4gQaTLR",
  "key11": "53JN8FkdpyZ8yjaYspVA5AJQboRiH5e3xaGNK6cWhEDZ7UkBqxFX7G9PrCcEu6W6f9HkFS9Q7Yv4mLffarwwbwwJ",
  "key12": "2QRupPGHtjxmYYA3xd5AHmeVSfagKmpzYAooNTyNhixYBnY1MDKdQhoMitZ4Ry1E664bmkXp1rqyDx4vyUjZJ6F9",
  "key13": "51a62JbG516aUadTh2NhRg5f1veCAgNa5iF6LzcGvLsTKn4S7MTx5z45Kn3amBBwefT2Gur7UxtzNq4dG8PRqVy3",
  "key14": "2aPJSQrVt2e9DgJqTMkNpnypJ2wZxDgrAN45LXuUQXizd4vxPZLNaFVEFeAKHhC6fLWRxKB1ffw4KgdX7bpTTAS3",
  "key15": "F1GZskKL5TfSv7H7JyCctxK4kmLxuv5tDa4zbaGr2GX9sz3p9yhcVCjhdKjN2dpevdKy2YNGaHLtmMrXRqwsNZo",
  "key16": "458Yx8wzLgS2EbDhdNs9JrLaNFnVwDyAsUHcrVL38hr1NdsCcHSzcsxSkcK5JoYsozqSqQr8YV67itX2wxsgDJSR",
  "key17": "36WhXHtgeMHLPvzusof314vXdjXD9KS5kQcDJRK95PSTLqNUoGYUZyg3aeU4oMDEg3wTwJi9bv5PRUWDmoL6tzLn",
  "key18": "brRCeuXiMFWNdTuqYwatSPyq2tFxZFx9wWLYpxu5o9jDZGqTV9NjmN13HBYoDaf2zsuC1sfBu2KfU4FVDsPgXe3",
  "key19": "3GFurgyaVkSBQYjZUJfycR1nQJnB9cc6CArMcbjdKm8nnqCH8sJTcnhVsUWeUmtF4WhxeTSS9pBU9VrZ8jHjQ2Gb",
  "key20": "3TRhJQos4itZVLVhJXkW8argK3R33WPWLMwtJSiQKfXQLUNeFFdiFiDNggKCoQow4JFwGaThUDAq4StVx1kGLiJs",
  "key21": "3f9aeHDRFo3pRPUjMoFKEo82STgXfzJTJKdnQoz19vudTwruTivv8JBY4nxXRqDMNUTWpF2vf9AyLcKjN4V6wsdZ",
  "key22": "2wMwDKuP1HMHM1BgrPK8EYmLKhjMquXQ3qBM9ZR9RiuWBaXNZ5m8o7GeWzywWE7mCG321yECCfPjiiU2YdbLAS9J",
  "key23": "47uYpcak1k6bk3NusigU5JZcye4m3jjpH86adGSGHViqGT72x3NJrSFxjeB4K1kNiJB2uBNUXns9yAEgaX51WZQD",
  "key24": "5NfJwok7TbupSSoa7jnjnmbshwQcnxT78uKqkAakWomc7LtmgTmNRLpHzVb5D6vQQUEER7JMbZgwNxzNmAy4B5zA",
  "key25": "3S2Bo9JiekKoGGRDbtMW6bWRTGWjqcwpsZyfTtQHsEM1LS2NxNWKDiNUMVFCd2PJyVyaTB3JsTnj1cuybu7sfawP",
  "key26": "3imP4xAfPU2rdYqdh7wmge63JysVz9p8bANSJrEPdihrQvGg4VifGFmTdsJGjHFkf8o3UeioroiZBPmvNpuxpEHJ",
  "key27": "5rJnCdb4MTf8NKC57QjRmNYedTxbq7RWQjyTsWu43Mf4tccnGjNxWmaZp2C43oH3dHWUMd3UAF7BJwLNHEDGWiXU",
  "key28": "2apzgrEPrN8Bw1JeFaGof3Qsb42rwrhSZF1V9MTUTuvCJWxed2dDBu6mPY7W7PtbSKsV8Fr87MQLwWLFwMuvXb8Y",
  "key29": "5A6ZBdADznc62RTw4FJ6rPxnHTqt9vk3HyREGLXQGB7uPPepFD1bbqy25LWNz8nSiiwBUyhTEyb6bw4ikXZZ4Lvc",
  "key30": "46YQEKmjhqS6NK9EhAVRmYp42eaqnkUyKXebHtQDmxBXAnounfrGgw1hyPQPsBnDTCTzdQAskC2M8GUzJ9sC92se",
  "key31": "TaUyvuiXWx9tdEqGnYmcyECcxnQHyn1Yqz5hGueK7hwcPbozEuTeTsnkXiUi733QaZXdgkcq5Ch9cgdhmBSMkHB",
  "key32": "vYpHi2pQ1eadqbUBBCXBsRkFjH3DrkzpJwMzBxGy1ENR5DY25rZdrqB88oXbfkchFFKgtSvPGApaRhtRtwWpZJJ",
  "key33": "2dpvngyrH4c3zYBP6WoohXEjAbfsFeDm7PgRUTh7bH4xeweBrS14QEC5v9w3JbNyfSSZrDTtkE62j3S8CzP1xG72",
  "key34": "34iLQdPotfsaTFiajeqDP5dxqYE28rozmHdwd5Bhw4y64DtT5HWHMZFVQbwspdMfuWk8aMew7AWjVk5oxiwVTDxa",
  "key35": "25UXv5fa1jKQKHVEoszxqQYMpC2prhf58DTtr5Uen2AgXizDgbe3YfePpqaohi356ddBiJ7hPv841VDeAaUffMjx",
  "key36": "49LkWpeWiFnmi5gHHv4pkaFiL2qGDCmcMekwUdXLQrxJynRV4eP4Zg3phpxYFqGtRWbY3nC1noGYfvJ13wQ3xGY1",
  "key37": "78UqtEFX13aVKG3DjacsAavvbafTXJgdeHnFWLn5nnNLkc25XRDGE5PtugQmZrJ5w1Mo9PhYK5vk5SnDfQxheZp",
  "key38": "61q44f7g3YeVhAzxNCMFQShFF8qguc9csWUrpUUZZwCCtgKreFnXtacEwEfiGL2ccXWFgvMEQEuBbNkzfT8VAFcp",
  "key39": "2UkN9tpA1Y8eNQYnfh2CzRaKbBTWcaf2TBGWu4XowFUpfDCWvERhqWT83Ha9dZ8nX6AeYiokHRDy3LThsPKLNo6G",
  "key40": "2ASe3JbkzN6QL8FxyXF1qJ4UcM8fVA3jVD2KtrZV7avnaEiRkiKpQ9WHnJ3M4JRmB1EbQK6CJS7pFbrvLgKRpMJo"
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
