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
    "3fwd1SaqyE3hfaNVUFVN4vs9UbM353Yng47MfRngMrVBfwQh1uwcCGmcJPZ1o4ZBcEfG6qxrpefRpDZV2FspygJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kAgVuqojvqzsryqWbX3s99tQv5ZvQrqtzLz1ktyNkX9WinGrxW31W67MNs3P496h7NANndHKQEWKTbUVa4Atboy",
  "key1": "2QZyDAcSBKv8o2cKRbnRVRvGT1GQJ6SxNieUDnGFNQQHSyiB1us5AexuqvQPJLw8U2L7ySuovvS1R2p5UxdEmwYw",
  "key2": "2bKN62XZjZQAPeLX5hj6FGr6QnLVyfWLQPjA43dTLnjSQYQY85skpAEYXeyH26tJuUZ83tRCHH7HjT5oEZqXXtZj",
  "key3": "5Rz7A6XymMgjCRraJCt8e3EYQnysjzkZrP1GMCKNXqu1UdqjVexuGFUwrHF4dfuMc7RudSNaWqNBxgnuzjcH4ySJ",
  "key4": "5tWY4PMpS1EqeSeopxp4QjGFZLLqSXXowBuDeC9n9CgnDCN2Zg8inXEh8c1UH6LPiPq5rLuWVsGBCxYdoQKabPK2",
  "key5": "4QHp2MfEt6Kr8QPYXNU68wtm7oT2xb3HzjBzTcLWrW5TPuZoYXsBSiz5xhAaW2kVp2bsXz9G67yb2fZSb24LXqeA",
  "key6": "5V3J73cLNjXCjjMtNcAJTVFgRBJbM5vHZJwWbbu7nGTv1xZxuDGbj41tKNoyX2WYqsF5KnisZ4MhZLpcSS5gaikR",
  "key7": "4ShWtsENrEvn15Q2DgcZxY518U7kUnUYWAFH9agBw6nhyUNgVAUiVQayzRKqpiTAKkvmLeX69yMzcbiRjV9ydUVs",
  "key8": "4fhv6zkWGDRdegHid1gUeuPUadR9QJexh1eWUjsard8odZyEGn1Jhr7jfkPeCm2iH7JwLLVjpcPYWYGArX6tJSkv",
  "key9": "3xHDCRH1cD5kzVj3runypv6xnboQpHUVGL5yWZXi7UdtbUoWMFKmSZbWpQ7TjhaCz8Vz73nreapARk2SJ1siku8U",
  "key10": "5iG6mcgQmpRyDRXsDY11JJGFmqdkAvcShc6UCh7Ngb32SXpVHo8DWczVWZgE4oBTDRFC3v4YtQf8PBidU5trAzBJ",
  "key11": "3dGTURQ5kPjKYXvc3qYNNbr5RvCGJHE3gSDqy9qXvQKREbv4gU8HXYhPRteWVnBfJFGeQrNHT5LTkHHchqUoNKZ6",
  "key12": "4qkBZkZrzGgh6F1zTnPQpuPcZbPqz6k2iFyZGAM8qfLcMjQ4BbtVXRZByF9CMLJDWDp6KLjneL7K863bdUuBpsT2",
  "key13": "dEd1FGZe1oVdZTFowc64eFxohqmfFno7pyV9c9vjWYB87fpCGMN6LfMJ1GaBidh6xtXWypcEMzBTbBaTEBH6KVV",
  "key14": "5dWRFzJuB87JrnZziwT8Ncstyus579wcw9khUwpNgxrJvGupwMHC8yQ7fJFxTRwLT7dxQMi8FyTEJ44dyAb4MVvt",
  "key15": "3GqEZ6K7cJHGa3rVZ7RA8F4CaJuPHrFa6qJiNmvuNCc1gJGgdi9VvkG6XdNv5JCQk2ziaXtq1M5EFhfrJqXjPU4V",
  "key16": "3S3eCsNsKCp1VJj2nLemHtqxFYebNFKGN5KL7YC2XvWBcpKsMMNFdLc6fqj9Hrj3V2CQvEUPJiiK7VJDvkRLkPMj",
  "key17": "37tdKb7yoiuCg2vgFS5CdsCjkksQiH5BY6rNRJpBH1Dq7QZJAwRebYtVPZ42QfQhawfubfKjUqKrzH7ScMnnyBMK",
  "key18": "zCVJ79VwzFwB8WEMVCXhuaLRrunySonYzFn8NfJ7qMJj7nBUZE5YzRvjrRvCfifLusVC1tF6onWwF9jqKo8rCsz",
  "key19": "27sYm3b9Yaspw9WayZaj1VLviEYs87XVCJRN6XfY6XqmBgPWru3JcBZHnVejnMX23SJxbweLqPiYF9X3bK9nxx48",
  "key20": "4eDu48Lqh3oP9emJCdpvpeyMzHXSaGqbpMXUT6RNNDNgLB4Hk3s3sk45D28aqv6bRgKrbCEMCPwivFx5egZmZjS7",
  "key21": "5qvuJY9N4h2e5EyLQLPUFSLdATCg81THtLr1f1VpkGZr2m1n2LJkBizB8TjU6hRqSFitB2XjjRzXzninFAktEv6Y",
  "key22": "2b9gReiM1SK5Q2944GC4V88DF2h3QH6WMjzqSZWduUZBFTyTk9tCbdqjh8aM6zBsFDPn8KgZYd9G51H544mKirgy",
  "key23": "8V7b4hwvLCPy4AGnqPGBnJTP3q7HjgtDrDP7DHZPJ7mMoo2J6nQTaWLaDHeS6juYqQyYYq3v7mEm4pvh8VLe1Zq",
  "key24": "2TYUy2V5TKFYcEN1AAuFhBK6LMgjKFdi2PySRV3aPFsBnHSnaQ1J5P9unHL7r5MXEZACvFWMnSPstaQCrXRuBaf",
  "key25": "4TZVG8HDDofwYEQ8i2upixeMqE4JEB1pirTMLRxoxKMMPSk3MZH6oejLEcofFckm9QHkRA6C8A5EYiPVcqd2X3T8",
  "key26": "2CdpmRm4MCzPjuK9Taz9P4RZdfCYQuMGuFhocA3kPbn1JfZce7p5Zwt7ztKpmFDFsqnYfmV1b7jq7MaEPJPc8go6",
  "key27": "2aJPsXdrJTuaLxzJqWNtx6zNDgsP66m6JEGEue8RVYEHp7fRaARYCRawQFGknSgjjX4UG8vkAn3GDsRZGx1xp1sJ",
  "key28": "4bDNgdk7Yra1aVuTDCmYC22wpLxRP2mbfG8F9gTgq9FFmd7actwSTSvyEbB7myVG7yGP45r7uU6wyAcqLnX1yHrS",
  "key29": "2ugJYTeP4nNpG1JDHRZzhWAEbEpVsUeuMxbfvDf74kKNS9sMPXt4AWpMkAeLAp3PpX4irHYKWEUhqyy4NnJgaWHS",
  "key30": "5VoJp91iBbRxXjmWdh4ijvUqpgjKwQpRmTm6dv3LMZSencFNHE1KRgqUrcLndvqee8MddiuXGfrgxcS79YuLgBaL",
  "key31": "5GUoAJxcBPmNkQeatR9DyM9bJqkwv9ZEBYg3KLpGgUcg9D6o2AvC7HQG7ejXBHBsmgWd4Tsv8ZFi8SkW8f9msCDt",
  "key32": "4NfBrKFYgBCKsM5XGxgAoeqkJggYQC74xwwAFHr2JySmcA5ZcTk4uHioY5Vt9jPBncopi69hcf5kF9chSdByXJDg",
  "key33": "5qG5fTGXZe7krJjzimBPexK83nJ9T8mgzP8RVdvYNgWMuCg43PmqdRWgiXGVezTUYEjabX7fpStC3snntjUAjH2Z",
  "key34": "27C3HYuk7JpzUB1Qo4Wj4nNQBcXmphEszDUHq574v5ZuTkCx3Kums7b7FGhHAG3FUvZubHhuBwP925kJDTG6GDZK",
  "key35": "4rnnMNSeZpcVqUmmwKT8SDtrvTkozBzh4N1CudV3GLhMw4Wjr2QhXMYmBLeJX8bC8RZtAkMcXPp5FqeSqdPbtzBe",
  "key36": "4HhkpKux9DKgCBTw6ZpUN5Fs2HdQLLppScx4jd9RgyX37BR6h5CDPH3WWHpdVUQt5yDLawuZ5Jhei5iUK9bhAENo",
  "key37": "2gzjA8n5GgkajsRc2fdHToCEkHYH3oxxwDcLDmSeyKmQAWSrTXn8tpQVZAFRadxvv8uA4WfNpYQ7RVPTzG3bGGc4",
  "key38": "38emVsuSm9bbSZ1qtbt66MaSWwPui4Rvvx7qmjwvQk1jdfzqh9QtXi9sHajNz3oRpmwrYZ28Uy69npJSjzoDkbiF",
  "key39": "67PK7Qa8Crpj58w5C4frtvDshBCxwTVSq4rPz9zGj1t1csnoPznb9XRcYtAi7NpaneJqpRX4Zui7i6WJ3G85NyX3",
  "key40": "4UE5RsYRCgaockMQPqLBFn6yoxK4KheMCiMKLWFQVyuKURRJTZ9XYnAmxhsiTF2Vzftc8L8bUHG6cvschKkLV6SC",
  "key41": "3Vkh54fKwjN5USvhJ6FdcSdeRzejTnUZuCUGrKLS5hNvv1ndEJ8x8Uai54MCrFVuRBFPnTmH5Gp9to1n6hehpuyn",
  "key42": "62Zk81w3NCcbdjgNbbA3DZizVQK4ofMx5Xq4fDxYh4PLMb4DuNwTjRvGe9eUxVM7isy3snhGRHZHrmuKHy3okN6P",
  "key43": "rigTuvTi7ceDatbbeFtegGtTr9tx5p85ej3miZEnLPTkbFbYmf61XrugGf9pAmL1cyFEzaiUrEB8Km2sJos5rPB",
  "key44": "3fkGefV6RMSBrwyvDzNBzNEXnqBYRaorGnKwChAYy64KUM69927DgLTXEkQoJd6HwZMivehtv3uLk4Wef2cEkgB",
  "key45": "375Nn9MTZSrGY5xvnezwYBQHfTSiEt75XimL4fkJ9yGnZ1thDmS19sw4CkS8kehUyGaci11VF38Via1whdVH469a",
  "key46": "5LCBrUf1T2bdPgUV7PErCthamiEoS4ZUdLks2V4e1JSnMk5j3RQJoELvdRLpdydGc3dFNtaBhy5jroTZi6oFrt9n",
  "key47": "5vYpxmDJr9RuYjDQBrA6jx48VrJqHd3rgsxt6Bu8YuJKKyRmLRTgvcY2DrdptzgmeZCGYBJuekwdussp9v3qcbj6"
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
