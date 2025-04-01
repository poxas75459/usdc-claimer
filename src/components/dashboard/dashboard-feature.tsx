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
    "4AjKGdwZ9M6FNA9iCnq9Uk9mhkC63dGYdZW2GXfdT33WXyZHdkutGJe6s8oG2okcsHrSyX4ifSdLAHWgtFXZtUQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9yJa2NMc2sBxY1U6F8Ci95BqBfALTxMnzk2HcLCVajDx63S66Yx7kSgjx65Rff1yESvpb89Fv8suDT4bKiGvuB",
  "key1": "5c1CP32aiDCLPpEWD9SDh7qvAKut2zP8MCvyVtAP3jLQpuqus8GYCcikEbN5ZrqFqFGDacBt6VTVp2SWR2bDfPUu",
  "key2": "3oT6M8cyt1S2P8nxfVJ2bXy41SVBTi5CsbrreYvX6xT26MsLa8NHfqapf98gijge7Byf5sCgCmZgFVpvidMs35mV",
  "key3": "3jZwWex382HsRNEqP9ZJmPzYnNFkFagVK9a8rGs5YMAnvbCeCgzYNKtZHn2WbEZgF4GnXPv8icRHkoyzhKaumL6r",
  "key4": "hFPgs4oCiv1UZ3EfSvxmvGZ6aPKXhWFnsD9QYjEiz9sSR1UZZ3k4wjcErfBnx4N3Y4Vxyu8HAAPVfXkzXhR9dLg",
  "key5": "3XjQpHUz8ty66teiHFUWeTQJAK5j2WBdz2kTgDmHNo5dynBHmFoxQ1zWCTGFyt8hxjKsXGRDoe42ERvXMAXhnF6J",
  "key6": "3YCXGYhDt3KovYz3DDPy9cvVX7yCnqcukx7WUpgQ46btGs7AXkWw8qy1MzfTvHwWb3XrFBLDFTUvsaJBr3nRYsZz",
  "key7": "4XLZHMCMAb5exmnLb7MkKwddiJhsF6n5FH94xtnQxLT1x6QKR3sNhJxEyebW2A6K85i5wTXrv1fjkt2Ba2ATcYBS",
  "key8": "3KruF5FU8yAJ67FKMwgkxMYAxw8WpxNDrABFn5Weide5ogyTdKHdZyEEJMyNmzA6jf4r7vRSVjK14AVmXjnVuAVr",
  "key9": "mecWqJrt7WSqejqMZ1BqFZh2ZsancDzJKfXhs9gA5xaww9xjsoERsHCsfF5un69stZ3kWah8yYfV84QwLCJ8GkE",
  "key10": "MQXbCHJb43e3MTVVrmCs8KXPVFNdcMHnsgW8PTzSDWB6P3UG2uSPjda2giHoKy7jZcNEmrt2MdbmCAaGXaFt5Ye",
  "key11": "2RJVg4Q6hW9bWuzP1hMmKzRvYUXTRFrmX7tkxarjLLhWrobaJjVDtD3z87Ggkqny1y8MXdgStM5VBh9HCSVQMWor",
  "key12": "55TNh8YPiEdEQddg5wXDC7K28AvEE93FDSx5YenyX4q3Gy64fHCW3NGvBQ4rTUoqMcXQKTcj4ZVT8F5tcxBWN7LJ",
  "key13": "4AuXSfjHWsHXvQZsxsvpr3VjKNJ7AU5Ua1TLTAtc5t14vHBah5iQM3inofhCEgceEao41tufk9e4GN3vpaCMMHjM",
  "key14": "2aJwKwD7qsq6Rcg9y3rbPX1vu3i5dsSgLzBnfwSnJKtxUWhZdSy8ZeHYZHzetC1H1crtnT7rwvGDkdS4f1PZ5cxi",
  "key15": "56e9tr3MDaZDBZrkxtWYxT6htxPgDNqw4CsJd1gJK3idPDoUi5yjKx2s1gvAJCcEVnwecoVgWWiEZir8nkPwqjyW",
  "key16": "34fA77PcDfRu8UfqpnxhA4WxKW6gW1SD95RAwSoR3cub1uEP24pWfCBmJJHJ2qkcYaZ52U5B2fXQCnUh4nUSztq7",
  "key17": "387JYLdjBjthZsJwTkb826EdyCi3GLnQKBJs9mcWw1EXkA6c2mJU7CuV4gMbZ7g2vzxdB3VtTS6hdJ4GL6bZ4J5M",
  "key18": "2PVWYuXi8ZcJCgPTLKzDN4ShZSYEBKwBwikSwtFW19fhWdrcjDdVDwrPD3n6o3UdaASHbz2Vk2AiqAhheEjvbUVa",
  "key19": "2BnVF8X9VfrDEBWKMTftcsBdiqhuZt9xCA9ucDxQDZRCsm4U1ckbspmJ2iYN8U1pued5ATzQPo3yifV2bF66wT6E",
  "key20": "526iZzMc9EqQhsKYyNbfhtiJiBqZom5C9UW8XYjYnj7HgYKQsLVUkr6H4F1iKxPBZik4SY7WvQ6HwSSvXe5bKHpL",
  "key21": "41QrtANphxBRVRxwKSUcuCJuFwmjMmLJfo2NUyTbdodmTq8Apjh3eKeJpQ8hapcaqfPtEob1T8fhGEN8P8JjqAXr",
  "key22": "5YtoJaAezkUn78pN9f5yquNvzeRme3KMGuzZV2sicYUoTpyoGPGS5viZ7fTY6utZaj8PHnaGGErqLHwkEfxzr2Am",
  "key23": "3MZ6sSfqsVbVmppYn6FSBkkCnoixCKgq8vDM2nBsGFqNcSPaQ6Q2Ftrhu795S8ycjp4tgPqzJDFotYmuFRcftCED",
  "key24": "3YkMUSSg4Ba49X192vny94XMqMp5TX8vxEkGrT9kME6xeEkfRQJB6BY2UKHfsbwzL51e2Jeb5bxMFsQHeigdpc7a",
  "key25": "5AkqfS9Qtrn4nPT7LXQ5iDCk5aJsYtkAcXxkjBwhndBFb2msshG4A7sCD23fizZAxmmmR3BtYxvS5SayydLSF6gd",
  "key26": "5TfoYm6KSvbsVTzM5fcNmSgH9au61QWBjm4d7he5BGMDkfkCwgafirBUmFZ1WSoMEWdPBp4wPavaGuBUNkDWbhiB",
  "key27": "3gS1rvJD46Fdt3JXutbCDVVAEn45R5KfDGCU9jLGV8Qr9ZJhGQDkkTzieH5eEtsfUMBNoW9JHD9iHyQqwgGxsL3H",
  "key28": "5jxoGMgs3Cs1KdKy93Yx1VZcazhzmh4UUL4idKtggSMhYA164mFfjHSgdrqX32TFvgCPoe6vu1juK8xDvXdwKY4H",
  "key29": "4z33G9ASrszfzG8r45xo3XRwCnm9HdFovr4EkPaYTqAgVNuahWBQHe41xCjv1eU5YgBK35wgYAM7ACUru2Vc9UDn",
  "key30": "4qLgEieSxak5zZVG5fKBpui8JWY3VZHhVnWbRvL32aUTtpxbfaWwcCbs1tmxhr7vuJwNBeeXFULJSD5SiiUmCHT7",
  "key31": "5cP7jbw6wi7E1udAYAh4AFRkTSsntwbPhFFi2312mGG7BRp1p48Dp9zK13ZQ4b2TafaccYvXQ3GCeUiDU5aXVGiF",
  "key32": "94rPL43bGSFNgpwUiKX5rQtYCgbfvho1pmHBGEQbinGrpo2Tjeb2ENwVBi8aGVvv8kHxf4G9cGVbUUtybtL2XUm",
  "key33": "3eE3ZafFJzsetb6B1CvQdfpVLGbZoFJnCD8wxa9ihDML4cXTXokrzH1PbbLo6oVsynnZbEUNxgp5TtLHbCerXqMn",
  "key34": "5wpMLpsxgFKuxLqeBGxCjzamLwuqYKj2n5ZteqfyBvQs4eavWBf9H2PdjEyhNReiHAfEendMxbp9W49XETKQAtMf",
  "key35": "52f6rqRN4GANMcN4KTPYUQrMbi5J9dee5ERQb44vmSAGo4PHdEHs2t4cZPcLQjgEgkntPxiMW5ay4aDgsLTXpiEu",
  "key36": "wsKYUdeMWBWPyaEzTFeFRikdXDt2yWcHj39CDkfmVRzA1wktacgoLzKsVpRofrwjaBYts4WhVzawPAjZVK59ucc",
  "key37": "25otCc7vkjf7u6Eu1Ef3nkRykahm4XCnuK4mgm2YW7PG4sK7jiZFG2MeMUXriJRRXGj8gxjNdTxd5mLkwjnRf829",
  "key38": "4BtfA76DFrTh5RD5i67tPkXF3i2ZzDsXXAVsyTu2co8EHeqAi1MuvVnu6Ep1zjrpGVMpzaWDZR7jGxfo7GwkHEQ9",
  "key39": "2nxnJdJT9DNg6yZQzMNTWnpVULReD92jPDemUCNAUdWWCByjvXA5Q6Qmd6GFruuYzDSD6jZczshphSg5dRdpYXeo",
  "key40": "4ncUVQDYqZDWztLRZUjjCQTNhD9CSok7hFeoEfPxsxzHijaGL3kwHm1zgLJyRhZSRMD1fvuCgb2ktfQUytKhpWqE",
  "key41": "61yovdufPMFJ56yBAjTj9FpWJ9wNyqhTgftxFkmAmbGB9xirSsqhaDHtuWTmHiezcRZ8aN9dnQ2XCJUNTmVZHjBw",
  "key42": "5ED52rhVgCjUTMm8Pt7Q2pP5UredKLU8RXCPvwiCe3vejZcdvy7Fe1agDnkSy9DxrEfw2aqDNrMz2BADZBbUEc9B",
  "key43": "Hk1KwuuQAs6qX5ezwcwCTmfBtujerwPvKHNEGFre2dwuQyC1wroc9PAeHKiNGb46PJUeuu7VmmtVZ9zGqK2XjiD",
  "key44": "4mdJbN5ZtPSj2i2ND6MmGgTDfK9vjzGnKhR1MC78tKBinhWcWYfYuwPVv5zsp3uqBrQQ5q3esK7Y5n6LC1Z7Ufp",
  "key45": "4prSoPD1ugQmg7Mpr9LkdV2XwwdPZrZzGMYpaNJNgrL6qj3zMyewLqQj5RQZbpe6ibywZbZQkfkqF8mPHYnqoF7R",
  "key46": "4BwWsSMcktWTwqkysB2BfmxM7WSQWmaSQ5LJMKHbwSNWvsTrBsQQGNW4KeVMsHFe3MrDNdXJN5o2XusDv7C64uiq",
  "key47": "4TYUxb7uwMB8zAyuK8Gv577oZmC7WCNGXCYcjKpukaMATDfGRNwj8B2ZLsymJcsLzv6j2NXrMBWEQYXEWBYBHd8K",
  "key48": "37TXk4exdFqKme9budbgSMGVxUVj4bfsMq6CTQ6DTXmBnUhxjotFYdgoMAFaBo8AWL1tfQBpCucVfBTPdfS8ELbg",
  "key49": "3rEoqmENQ33KrbbGfjjzHLVYVXUvG8Zw6pfTaxQYo3LhthsfX23YM2CgNWPd8U4GcGgKZPrf8fiLPyJAwHS8cf7A"
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
