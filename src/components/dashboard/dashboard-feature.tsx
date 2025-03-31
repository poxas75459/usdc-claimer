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
    "3rQP4B9xhg5vKGJUJmCNbA9A7RfDL1FNWtBvqNjP5FMBGqzcPt8xMV6LD1kdDotsNWzwnfuqvTjMFFmW7V6H8CLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ab1HNhSFwpQ2da5dGaJBVETaWVxK78sxDnUogW6MHN6tTgj9D3KEqN5YhhzLVie1XV5GZZV5WXM5VSYWnxQnedk",
  "key1": "5No7KhqCp7NZctV6BmE44Uy1BLk614DFhrjwP8i4STpfyS6iPw7jK3RjLsRXEdZKrJFPJxnMENPMDQbmjLU9b1bg",
  "key2": "4VULXXwmAkDyT3PoX3v6ogDhywvKFgALTsoQrMrjRvBaSVHkdEumBAmdGgdNkB6wxRMvqEMWkQVt5wNujTHZCNkZ",
  "key3": "3sVSKEBm4naWZomBnKjyKbKLxWhDMiK2ME69mfhX8GgRt4XUjMUZaL3UmgRShzrtMadBhe63hJwTLNcTyT224yb6",
  "key4": "5VbzDnhF2jjDiH9UH23XhrsbXEnQHsBsCqUTSHNGCxMHmqcgBTo44ZNUQQYx7B6Qk8bvRyoQTfTSx5xeCGiKvsag",
  "key5": "cLmKKsmvAqFjDm2ukfnz95GwqksPhxAsaMdvHU6HrudHDbVsmihY1zAxrDumhSs8pRiJC16Pawu83aZ25xKYsVJ",
  "key6": "5cWFjSQWgC6HMBvdLd4DwnusabECQTzo2FEQ9h8hEznBBpMc39ZUJK4pGPzmermbcsihMr2YbjMkQmUcNpkheLqs",
  "key7": "4CnLN16BHkFkR5G4puVLZGFFnD9TCDXA6jrAkKgfsp1aEAwoDWUVidpZLouAdc8AYiudt7UFsHmHLTV9vfhDxq26",
  "key8": "45jzFcr93ViAxCQPNJp8xbyQSwfZK6LdhpCh5eLKGMcT97RKw3xenztAgazArL3eFWyL4ofWbzfeNjgBnQXBVeWC",
  "key9": "A5EtkQ9ZoAxmNd6Y1SPrSzTPwyPxPX7d5D9u8tAT8DM6MFv58kJhT5eXi2nBN5Vf9kVXG4K85o9E3Rt1X6vcaFj",
  "key10": "2oa1qTYdECcA19Q8XRsL7FJeSERvT7HAc9yT1mWvqWYjGBX1PaoARvnVTY4ubq4ukEo9PmDrPPSXAwQYPiAawMd",
  "key11": "5tbQCYJcxaS7zUCtACNiychH8sDLmEuTHSCPuR6ZLQkxJ3TYpZbXun9uzMo1mVseGqj2d5eAYhLQFpifznyCtvbv",
  "key12": "3q4ftxN4qM33LfJYQKwVqJk7Rd7XVjoVbTDfZDekzYG78Z9dg6CCgkVfXowNPKqgpuNHduLYZLa2VAM4xWcj5C2J",
  "key13": "5rrC3fKzLDY72xXA14x6ns1UkdcDxHtA5sWFb5Z2umq9gaXh446sFxCLKAwGYYy8vwaiRAsSQ6xxpCNAw59Lucu",
  "key14": "5GVYHqxgGj6sCmS24hBaSg7ogVsF8c5o6w47qW8YtQNDfqH6gUGrHMhHrm1bomkbM1qpFPeuZxdkcvRP22VXFNhk",
  "key15": "3dQHLQSCjDgXAmY1AqNCSM8wh711LkqpiA3AF4g3YQzmnGMqdSzktpYDs5gjHbDEVBf6gPVN6d4Ce9Qa7Lz2Gzrd",
  "key16": "BMhyGmdJn1Kz1u9WyYs2vW39thJGZvkHNqhLha4XfZyyTqkWqW9Di6WrZ4iYzXmKP4BkeeNUgnk3QS1EiCUitXg",
  "key17": "4QWKEFf8hgqUrJ3w3uFhmCNL26DdcnDpfoCo5rrNSucbEeK2qBSYWKXWEWs2BsQdhCoGosWRM9xhYK9DMAaPGv3y",
  "key18": "35zu1RGtgW2HcqgSyJe2WefhtBoJ8Uy7UAEcpS8C8hTrMFxPDdDQJFtXD2GoEdprdGcAB3i86pJkXz2GaXNFnFRs",
  "key19": "267vugPgDy2vaWCRcpEaL974ihbDBYZJKKtK6Ui9DgPjM2GTMGmqZiRAjp3obo3XBhY6htfPPtq7jJFtdN88o4Js",
  "key20": "eYamCUtgTeyohjBbwnktrzsRHvAFFcna81BkFM68Avu4EqFuJpWWLg1TjdKu6u9FzFcaDP4LJF1jP4Py1KwbPy8",
  "key21": "4iKdeBJQ8QrtMfLqWaXERXiD7Nj8RqejuMnXpf6p2Tcnh5Z4cFWv4gqbXVQT5FkWFNJeK6u3YyHAEsFfNQ1rZ1xJ",
  "key22": "ewmm9zS62kRCNBHVYnaGdmXoz4vLXH4MdKqmjuB4j1ygXG1Gz6KHRn9TghZM6agz1cKGH7nW5PEERf6x2yZpQ4w",
  "key23": "33uNydBcR9j11WHtFqBkTNVdnZpKRw7ub9mvGvsy2cHCpxVkaE6wBgyhrCm8iExSa99wJaTn5UcWcL3qMA4mxV1r",
  "key24": "AG5aYqK4rceTKETsm9ZEi3zsfqLrZpegwQndDSw8aFTgzvhzNgkS23HfZi5RgFrhgkHgBSnoyEns1vzRvMcyeeC",
  "key25": "jwsAFh4myDhGF27zhU2MegTUUq3eMS6PTEmwJtHyMvnvByPVKWhNmad8AvFHsbYhVeTgEnA5T35X6AH3HL3pF5f",
  "key26": "3P5fQxTT8goAWDLQer6gWpfAgazVfc3oS6boyzAb6xkVGXsjjKH39JhMJe9Fed9bwaVutLjaJK6DWNknQJmnVeaB",
  "key27": "2zJxWePokPN9vbDRFJKEBTg7JszqBDWb7WShVJnvfrzkg3gioSJiyrK8iUVKbuM3tMFzF7fortNVb37rfZW788jR",
  "key28": "22cD4Th8TPHgmmbnkQawpDJaREFoa9jcTzNVaYkBQRibUDqG9HhJfz53jVFgJfBc41HHLGTr95pKaTatocoq3fmF",
  "key29": "3qt27Q8oRyknawoPDdzaQtJKaLBQPpYjKsSeTTfxKiiUU2GxodJhCMnhcB7Hqkka7bXwirtnZtvpsQTJ147iTpfS",
  "key30": "63eZmEMqeP34V9yAE6EQ5ooe2RW7CzVw4cbFjG1HzZe9QjneKnyBNiMH2c7aGPwc9b11yKJDVDZ9Ft7GjdaNmQcx",
  "key31": "2cPZFoB6Sw3UTBz38Se1c7Y7nEyY5yE79Gx6TauqmA6AczZkSoSV4CzhXbaU681esZQEk5gakrv9UH5jZZ85ik1m",
  "key32": "RNyKrUuvhsEDCF5g3NkkNz42BY7HVHMaq6NhPJ43uNiR5AxJ1dZZwfstbptDvFr45i2hQWXnn9WeeCiQPwaJSDm",
  "key33": "gVnCTmr3zxa3Pe6FPQf2pYYS8RoasyYtSiwQFxNovUsTA1yRx456PfXKa4EKN2vaJh1w4BJzK1kHqGm5jwNa9dn",
  "key34": "nTzGdNuM1jKpXpgk5zAwhkEBbHaNb9eKXsTSoCJe3Y4z8p3csE1ZKrzyYVgmbc5G6TWujykzR2vLwDyBqAVXpxZ",
  "key35": "3yngzaLitKseciWR7g7A2UYP8FZaAXpupahKVuoYWCpgpeATaY57L5k6rxREBLZGybQf54i5X7ggA77oJv4JK2zh",
  "key36": "er5HFgqmF1iaPccVAV2FC7FHCh7CzvLr1pgHJGtwaFz2g1YZy9dEMfavBfjVxnktvneA5fbnCygYkV29BQhivGa",
  "key37": "xjaDh4981FY1TLQRr66CwverSaETc9V8Cjs4ZACpoSB1Hz5jN1XTFXmaHXR3cyCYHCC9FLgU5CWVkZahLE4pnfP",
  "key38": "2dgTsoKXygGaxubyeJjWzejUW1jih6VsFazvZ7Fz5uLE4tq1dEky8s7bnxmVSf3HMEU2JUACzJFi3tXgoMpYG3WY",
  "key39": "2CDWJhsi2BGns89KxsZqDxm54JNxqVfX2AwSD3UVpubnnZsiokrgFHdUeHqXuFp8htaTniZknm9wQEDdzDC1XcUg",
  "key40": "4PVU51xJwrgL1XHnCHmK1tU8yL7jjCdodL8Q44ZLUuCGT5SzCmwwwfUu2JHfLbUY1f4h5gNzHaUEuMLybfrvYCNm",
  "key41": "32NYE9aAsZG57efmgJZf2q4BCfULzoW97enrJFpjmSsTHKFanvVQ5XTkankx2TfyYstwdUdfW3sj6ENARvEYENcL",
  "key42": "3GqvYQBNPNZ3k97KvBfztHHaBe1R7Zbwvp2ugHC6r4zXQPnM97Y8yjt3mtt9nBNyD9GxsVH6iS11Sm4scin7zYKj",
  "key43": "SzVbopRtpEtoXSyt8H14TtGCFLt6W97dZPLkN2ziv5xrDWT3A7ZpipxKVNtyWNoazZTeFg1qJEGtypLeeh4xbYE",
  "key44": "4X5XgwvRW98j72mz36EDLGMa6ycJEtfqinQ7KHxCSuqB8gNBemHs87avdhhrvWFzCwYoRd9iYz8knWFY5hBZMmWJ",
  "key45": "cxmC5PiCTNgx34JUhN2Y6FX4nXwAVvGeodR7TKwqR5i15FeX8VK6T6cvhCx3SBcJEmgMWHK9on5XAHVx3fpbQgi"
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
