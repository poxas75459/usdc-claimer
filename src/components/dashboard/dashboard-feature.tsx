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
    "3imu16frNqWvD8v8TyKJtt9meH1DHQY9go9gkW6zMXvmSQrVGXwEJXz5yFQXYcaJ6f2c5PPKAc6PWEBTdgd41txF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TSvC1MZLB48SjoHqo3iQmzeWz746L5BcYCdZi2eD8S2usQuyYtPsWFNGjMRkfk6rayACtkZkK2ZCLLF7PtDUF5",
  "key1": "5sWzXaKaBZVF2Kv4UiQaVnRsB7YEsMxxMEobDGHuJFwEYydSyw5HbKMG9iNDTiDCagjgCQuDzTuv3xxbJWmWcqgM",
  "key2": "4CP4YPFtC5tqqYdam8njp6vXAcCNDGSawoCvMhpgDuKVgYtST9gwc9sQLoayJjWZ1oKTWL2kGKDNc8oKWKLMiRZo",
  "key3": "3DMfuRgQ3iG38mtQ9nCNVaD6yeD2pbB85FU1SeHh5KzifvWoF9MGyCr9VSjCEUHorw9YEsoFXd6pwwaDNHDjpmVr",
  "key4": "29jCavNVd1aCtXoLUntncPXzq2UneJjjaS3ACk1ys7PPLd9af81ALrnH6NjtGTfR9prKxLSq2Ry1FFmQVPLrguWY",
  "key5": "2sEv5CY5jYfNjvgqrojp41kYrmvUKNKsHKaZD2a15JTYHzPjXhYpD4HJi8i7rNk1nu9kDaJVgAPTRf25srwJA27e",
  "key6": "5SBjXBEm94JbbTdrUXAGLJ8RF17CagJqXijPSGjYf8Tng71JncP2sWXNGjbRbtJDZMsJXXqBSxyih8nZXrRdggcU",
  "key7": "5cmQRq7Na2YzP9zQszPkxePei9N4bEuw8Xdz8sh9jZmV5rDa7ikXU1v7oeZFLd3GJ57rASkjSojVyZEaJ4F5LDky",
  "key8": "3DdX9RaKzw2yFDJYmB2AJMgg39hqna8Tb8A71mZLeqF4H7LRJpRfXBK7ZkUJNA5MKqcRpYB8BwQqm6Zh2jrxd9nk",
  "key9": "h5M6xDrAmFKNjWvPvUkE7oMLddHFymB9yLVzhJ1mdqqkqvZRARAgaLfXbCzEkGeyjRyRgxLpAAFX3U9zRr1XWHG",
  "key10": "372vgkTGDXvfJuApdxfA8FbSPb1g9xZYJ1UMzEfV6mRUNHtdq5MTrjLQm46mgWRS64yUaewNF7ijV2SsbdA3c426",
  "key11": "N5JALgZpsswg4D46P1GQvkr3eV9hRKfzTyVAWXeemJ6fr6duanBazqHNWgY1c1mT7q9URdZcBmQCcMwgbJRc2sa",
  "key12": "ZfqPHkpmUSz4wDmGDKw7qGkicj21YPS8fY47R7ofjMAdqxdssRWCxGWkRdpbpauGJ11V8PWkJfRq9wrV88vdGE9",
  "key13": "26p4GLJqTqVEhZdbgJH8vDNfv78uMx2QPwtFGUwvpVxokagSAHpvX5xw8SqACt9345GBDXVvtex4Rfqs9SKkojZx",
  "key14": "3TSg2LNAswcg1dBQLfbi5ZbebKMuQn97nFK5d7SMqMWkXJxMTeC3X5CcL5wps4ehXtRZV5Nn9gfrZfBmYKkD6rvS",
  "key15": "2wXucDypxLdCBmfVHvrjAaKYnTYGMhVyeRiPQMiBM18UyFAvj6GjprQe3N3BJzSaPv4EqayDEoMffMs5Zqnhmycz",
  "key16": "mMM5DqCj7mNHe38FTPJyjjmPqdWXjVaSD1sA2Udfn3FRebxLPVN5ijGb19hrbf1aGZer7nJ45G8JztZFykYnZVu",
  "key17": "9QcueL6ur8Hcxn4XZSS8SSLpNwc3A3AvM4pSWuT6hc1qWPpKw2PKLe4441d3y2QXsFFfZQBG5VuxVW1pbHSgQmd",
  "key18": "4HnLM26i2s5X5ThhnRbpJ9ECa6wZoJSzez1KpsHFveJhE6ErDaqK9ZUz2p9RwrVyCbdDxNCpapA4TxJS2Sz9hXHQ",
  "key19": "3N227gHAHsKFvXuvLtopTRdhxsiQ5FKttLr6PA2A86bFSt2JGGCBQPuCTD5XiA77NyrJ1PWy1gre7QZLp3Mme4Fz",
  "key20": "5N5vKhCuskewdS5oGqxpUe4RcAmfrRq4GQDHjmurRwykYxh5bj8vyExHjs2ujFTifXTLQQ2HLQcL2LWjWFUAn9sk",
  "key21": "2NqTVQy6BmKwR982nX529SrY83dxnfo8gj6zePUA9yyvXfnVvm9z3yNyMD4czXuatdygyKAEA7fHpkTCSNyJ3PHW",
  "key22": "2ry5nKwvShthKaMEFZWgvWMHfM8QCjkpoyvy278mDR28LWxssUwVSKxd3VCvmqoiyQaWyr7HCnzhYxkybB98tM2z",
  "key23": "574XynHFoCpUKUPgTPRLpb5GDGddkmYcd1yCTBPSLWrFPpmWzbaSSQMZVpAfYbGHiH3yBPKg7ASjNjcSsQFME4v8",
  "key24": "26zDdjG4CPZAvh3RBjQmCPW7nTzAqFzG6zbBNX6ZWRH7Lck4XGEkSmhYoz27UPbqZ8AQq2uZTdAt4M8GLPVwksRV",
  "key25": "2vEyAC27DiTeyaT1JURRJ8VS9MGiB8Zzegg3VN64QFkxbkyq1E16jQ8ygnJJtf8AUaz7JgCZnpfFtEVU7CbrZXZQ",
  "key26": "4E83ePf2qXes2XE6CSVei1cXZ2VwPgTxyZGpc6BxMH5FrHac9RGyDGjeyqF4pSDumcoPE4ns5JgFEtU1BzLCDMKU",
  "key27": "5RASVtkjSGk3KZpGp92RbRfaPYUpgGnBVjWcsusw91YxEg75bw7zQKWyHthLHGgk8m1FZ198ejQTczz5KoAEuRDx",
  "key28": "2n8icMymZRpmoPSSctCAkdquYgXuZn7jEe9dRAiRZmBVHD3vMALy5cRyXN66tWHXcBXg1V9XZtPrUqLmBeSGTmhS",
  "key29": "4WepsKHWgmAhi9akp7Q2SvX4idEfcv3pfjP4RmWVX6thyhzV2VsZqZTUgcfnHkAZJv98KpXcsGQ3ch5iipXkaLvg",
  "key30": "9MnNARy2uUVD2ZoMh9WreFAxKaVrRyZpV8gH2u2RZLKjrQPbaFHfTh3pSXEfUbvLv78NyGjQAtca4BJcVAuYTFv",
  "key31": "8DAdb6FDK63UX78spv29THa1vDk29WbnRLRs219Pyy6bNXbavzdz1eKBUSxoSxtHThwK5PvVm79VC4SYnFunPSQ",
  "key32": "pDzFKPF25oPP8ccgnTKUGqhLRQd3X6voL1SCwmEcME5C93cHLpjHCncqmAey6ypVdgUzhyzqdT7YHHcM2AZRDUU",
  "key33": "fsWWbostHPtXLz5yx91tUnhu2Gs32fS67mPWue5JWdZ6m1oeUb99aCCzJv4NgMUeyEARB96YfraPfXT2YQLmTwT",
  "key34": "3X88Cqf1uyv5UWMc5vPduihKrBSD6e5bqBrK4WYBdS4Xz415fTfwkTiscxjRioNbHzaHvEQ5fW2UkLB4fE5Tu74o",
  "key35": "52rpCjDCZq2THdgBfZ86LKyFhRqfZLAiGATcBb5y5BDqQFyXP2Evw5ybLMK55iN225HuQKZC3adpKpDcPkMykEgT",
  "key36": "82jxE5FavTcXi6oRycPpyuPea4spQbUy6v97xSxcTjRjoXkEMNhN4yu3Bke8m7gDqBP72k26YRLuw2GAMjMydMC",
  "key37": "3X3oCqMMrh4CrzDixUtof72Ssrf7GWooyZZZsXEFZyHPcbCVt48CDzHL4GgoEeb5FVG1cq8FPFgb7xmQ4tw6Q5uq",
  "key38": "3jN6wjnGtS1iwKvvWmqu4BcNHJn8RrCo3CJMq8hbpqkk1HTv5jjhvXTw627Vz66FEUPuEvvhiEYjtSGDpp2XV3Sx"
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
