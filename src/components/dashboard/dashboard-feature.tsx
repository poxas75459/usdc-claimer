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
    "2Qu89RjJH7B25rLP63JBTbvfmgWp64TmSXgHhL29pezFUq98D2Lopk4KsKTdJFq6of4x6PBayBjhgu7hqgFohPZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KKQTkYyABwUmw3v1HigYeRvDynwUUye784MCvoxNBLR8BVfe1hg8RmpJSQzgS2eujg25UmL1bhgSoWwHFtS7G1p",
  "key1": "5vGGLziJzGAJwoAzVEhipAKDGcjPWyrHzPcUGfbvzeLZt2bdoqvVTDbr5dQu2oqquY1NyGze8pxXVwzwok9MaK4j",
  "key2": "2LnxcG2FnEhfVUYb2BRgh8cbMZM2qYTuRyW2S5K7hQnv2vNSGH8urxYrMcRW1CHrUq1PJNcz8ySR3qPusygGjz58",
  "key3": "25SyBxht2RXVpvver8BYrxohXvFg61Ykmru7p88RQ2UmxzSPv9RGmDQKeEHivNLWuNyhkHzXdZb5YpjZCdhfXdNg",
  "key4": "c8GkrfC636FJLLmrqvF4ETMNSmJrPVk7CLB77Ykvoa5VTVz6sXTKnw97Lds6Vx856DwR36KfEyxHtEKCMXpnTCA",
  "key5": "ksdmu2r5aXrcKMgnt9Htw8DG8rZ9WsfgD3LGYu8D66dMrCg6FhLkiDzxfXMmhF1dQvtdFnyX2RJgMnubsGU7ifD",
  "key6": "5eFJ1PX9uJhu6pPznBE7t335nGvFuB1ibkV1zrjvdAxUdvFnNghvMRqpmAqEYj84EVvwT3SmjSRCu9GBdESCzTmo",
  "key7": "26L2C2e12Zs6LQvL57q7PbcgcTZTLSc53SNdoM6SAnPWfhVAwRieoPZBHQFsoAvt3SfPKDSyAKhHF7xg9zK5jXCR",
  "key8": "Cz9GS9uHBMFy7mAWuSjFniRx7eQp8XSEc9BR8yAS29aGikWhoKdzBCTjcbWwtcvdB5ex9QUbWCmLY6L8NNNWKe2",
  "key9": "3Y8QeyCnvQJVVGAw68QddmdhRdP1nAEbfjniKmjqaVYrMq2u2GmkEp5cj2VUMqkGoYuEb8299njcYcf7MdH6wTD6",
  "key10": "JjG78apApZdw6Pg3i2ic9DMDfDRkrPWW9M7Xh2xEnHbzjcxuwbmfZRjzKhnoXurcwyiAAABH57F5qxNMyXJXnR8",
  "key11": "4xMHgyfcTR8CaoF3nZgEhbT2G4Cvfsq8BwaRvJt2zivFGLz9mLLhXpgT1oxxyHgxqmZMikXUwF3xJRX1fdcf1xda",
  "key12": "5v3dT8Bxbanq1aJgNwfcRrGSf4qnLYdd3z5JEQEmeHZuVMBVbSVj1LwF8qS9Jhq9TZeW67vy4vASa5Q6NpmLZi98",
  "key13": "WGnk7dbcH7UPNUe1PTKAmPYhMW8nD35zmdfWcT7nYRp1uPP2ftndpUhL5b1XKtXjjJnQSz4KeYRCrJX2ucouV3Z",
  "key14": "yniMat8iPn6QqgkF4aecHuFX9dd3vs5THvCEvWNaFYHkXJuwocgUSsDF6Upj3YUvqq1hENXLUFaLq5VxhMKRUNp",
  "key15": "3G7a63QYhN9DJkJt5skZ1ScqqjV4RzPszrPDruiT1ymQarYLPVkkQhpSbUuAgrS5ygsYq9RPvu87qAsRhVqF5vMZ",
  "key16": "3td5cmc38pm54irD2fgHbyDbszoj7CgLQm9McjSk7bH27UaFEp5c275hDjiRrvxyuvzK9TjHxnb25AkDhPhvxFGj",
  "key17": "4EVtFW6CBeAP2MaMf2e7F4zXUwqZivJXWSgeLwc5rEYCzrS3Qo7yXkdzazEk32Zm7Bnf69syFcUDVX8hMsHp794Q",
  "key18": "dVLLKnUvmadnGcoGNxAaKThJ4RQznvJACKZWLMNiJyGrw4Pwghm9ftVAgfRAhEhXzJae5x58VeCUNYiWPFyxPDx",
  "key19": "3mmnQVpixsFKMgrymPLSqY4vMqJa9VSPjXsaDx6g9VDKi6v5EYDek9jwkZmkM5RKEaJikLmh5CEqNGuNV6xaJ9RN",
  "key20": "63yCZxbfY1HpyBGyhbhMBTEPTmvT1yrhruaLk3Hfdr479vvavhVpjHug3XuToZMru2zjFMsBadax6LqB2Q6YjTxs",
  "key21": "2tsbhxKKjfxw5hQoYu76ddzK7oEMFroNEAXNoKaQpSVtjfDvALH7hirEoNJkJk2Nw2QHdvpZbokp81kavmffPS7a",
  "key22": "3CnhsLaSeaoYcWESZSj29MGSLj1Jxc8JEGERhX3Vt1eDQ1hz49YroZRVjuRo4tXJ7xx1iJriRC966TSRmNMKMXjn",
  "key23": "5NpqV2soCtqGpoxnGWq2zJjkgBKqrf5d9tEWsnPheyX2FFHR1pzdFNJzEtZVinFunQFUXQwrshNXV66mzXiiJa9E",
  "key24": "8ZwiwofBdRx2AUdxZXheVbodH6QBioQaqciJpyturGx5uU9SxDDGoCWycXiqKr41erLSbvYPCEqrAgFp3wtFbpT",
  "key25": "28riRDernLix3z6UfMGhPfGxBhhbLZtE9ogzmYH1cJ7GELTA3DQ1h9mfD2kwCpaqkX6DiXZCm3xdXTZd5hAhZPFE",
  "key26": "3i45quoMTLzpV9amef9jA2AHM7i8P5bgC8UdxEx8dqhAfV5LCuaF2Czp1k5K5HKmF72FbieyDbtgTxLBbe4cVPaV",
  "key27": "4HDjbLxxG3efdeP9XC2Bb8b3ii4ua9FhEmcorpkEUWVb3E6zzc1JZaZp2k34BXHPxcxnif4AyhK3MpWEYgSKxHDv",
  "key28": "5roWSEupV2jUVbC2vJcShAn4o8KB346C1x8UjcRk1xHJpV2JJcPh8BwyzkSzBgPMd5yhazUdGXTzjqTP8j75AUsH",
  "key29": "crvGW65nW7gWeJrwPKhcnxBNTaxNcWr6mvvT5i3Pfkg9ZcVgemgbdMLs7AW3JsiiA9b4EWa1QQVz5ezasa6nfQB",
  "key30": "3r2CS7pg5kaCkHXbGvQDpq2eVmZw3VJJ3QUPporj7gkxsm2VpDebHXp2d3rsbJt25kpxH4UF82JJXvAceF18Yrzz",
  "key31": "4YRH31FeyakzQZimAfa21Lkbkw7EN6iNc2KKDLyessodDEpgsCQefKPFFFqRzsQkfnis4GTpRJWCYFEsZGVyxTs2",
  "key32": "26JEVZQHpNkDQnVHoAQgxCbawKCVzmtm5AMquxLr86eBrKZ1uNYdndiBh2WkGTTp74EbDHi9aUayy3BZtReKXpNt",
  "key33": "3FHYfkfjwN3E247j3XNpamXVgDPNU3dqMzQ8jo6HcQhP4RDVUSdVVmiZtyGh1v6cBRG3K8DaFwKaSim6G8WY7BbS",
  "key34": "2frsfSWZstCDH4gVfxGPYLbrVYcfPiR8HpKqdwddQUMeXfUgAwDwqXpDcXAPXmpiVhJNnPLuzJ6MaATabxgZFYUU",
  "key35": "3kdLzpJrMXn8PdScEZc8KHZnuMbmfyc61Gh92RYiUDMpuY5FPv9zgPmANw15FxBfRB5V8S65rzBpkiA5LpXKP6ZV",
  "key36": "LD23QAzDJqhS7kY4ZpoJM8b92bdQgkSLiRLQCN3h6JovPNqCSM2Wa75Nc2RrmZVxf4pJVPkvurr4XRenfQmm6ZC",
  "key37": "4tgt8p3Pvq9VUXxrXwk3QNAAuHLar3VTK5g4tyrNncQZNmEtiea2B1t5YV8e7swZ9QspcEyk6jJCcYcBcPbrUXSe",
  "key38": "4sUFz3s1E6cBVZrcSqrGoJ9Xw32oEjzwi6NEmzreciN2GxVCijoK6zqL5jtd5MnDYM9noqzaRhHHeXpAGccgRPxu",
  "key39": "2YdTMZaRH56m8qfuFk31fW7xQ6jnYaoppVsrabyvhAuMTF1hPBA5KJ4cfsP3jWuSgRGXxaohEJTf3QTg7hagvCyb"
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
