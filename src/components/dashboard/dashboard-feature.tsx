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
    "4Ae4cstpjmz3yPE6B5Ri2mtgDWdGPT46away7FvPKmYqzFq2fvuistaH2cT3abfuRGK6gJ8Vai7Jv93msJ166JF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t9uQZvBLV6UwhmYseXQmTMWdVTjrA2efLN38HFLVbhzxVaV2ZMwiYcFrrTweJChkR7g2uM9iTMWNYCWpRKRK848",
  "key1": "2HmCnbCdcUpbh8wdSyw64DpvAcFv5koPvkbUrWsRRasRis3Ln1NwYzRb8Mb8A3fwj1vz1AtZQ1zMfE2B3nBExcu2",
  "key2": "57gnvSAP9XMj457QPDbTEDUcTdDuNE3uq7gfUeRoQ3TuAeoK7c65otQ1krbwEe5pnwXF1QJnP82GpXicypJ9w8Nr",
  "key3": "2vQQbGRXLTbx48WXHAmGdZduw8YNRjPVLHDkgGMwAVmbpmkEQUNHYTHM9Az6EFzgE9RzNa1Ky1snMvK8zCSPPMw4",
  "key4": "5cvk5eDAwyZDDqGmm3ZBrfok4rwpuapvyL86cWxDVvxtvWXvbZ7dtBEj339YZ2u6W3pfbq3sCqWEzju5ja1cWEa3",
  "key5": "3BxoScDYJvaz373UGc2ZMVJV4U5mfeQ2mh1d76um5S34pTMK6HRGxcDhGzFDbFiVWTMTF2jjjj46MBQRVJKwZX1o",
  "key6": "MYKJioZ8iAriUJEwQGsnoKUjXnQAJVGdjxKktqNyPwaGmqhPdYALTRnFqfAXrigTF64tohb9VVw9ZHZmiZb1Q55",
  "key7": "2bLuaM5mDgvmvFGf78R7HXwLtK8GpsCWoL2UNTYYMhCXUuhdwRhx4jG7vcL7rvrPaaF3miqh7MskfVAZWk3PYuFg",
  "key8": "3ZYuXK1vz9ikY41BqSWLoE72MT3H2QaBavjjdbbG9m3Doy9ad5Wk9vhSym1LUCwPueqLqL4vKXkt82WEcp7spL4v",
  "key9": "4nGHhvBBE9omExkSNcksueXHxPRAEdV4DUxxHpBj1GSDX9qnEn6NDNpVWZc5iELSDyESyyseXsqmPSv1SZWfpMtR",
  "key10": "224n8hxRwSbK36dxjYNQUo9sjjkScob8hdvnNpdhCHNih8f8SRQbQYZrpJex2zZSQ4oT9ogNTtLDow13KZNh25yc",
  "key11": "RD8cQJHDZhAewtGhPSbeatxycFz6TbPQxPwVv1gwEUREBashmEd7UBNU8rqbHb8NdYPG7TEPXMNEGGJ4Z1xj84X",
  "key12": "2nnmiTsxwFkF3HF8avu4qhptTFx1FRqffGasvE8AQE4YyrdgcqpduAwfuJvzJv8KvfVXGmU5EeRDESZW3tJT5F5P",
  "key13": "2YRom1xLUWynLoZN9EcoSD1sYBiePHaQ1HAcZYhAhWnGobgMcB8zeQtFKRdwjTyy3EXgY57vLDVyaqiZJVFMXc7m",
  "key14": "2ZEVbtXLJQR2VH1aYk5cuUPUrXyyXhDuRQydgY7GpyqaQ6MEMRumhJbkNaPf3h4Y7YtCvjVQd8xhZyeXHMMjBNUy",
  "key15": "4A8XankRbo137sRbtzKkgsoT7EGmGzTQ1w1z2nRBBUJ8Mx6m3PXM2Lw65SaWTQz4ZFysNPtwMHZV6HYRZ4yErTvv",
  "key16": "4N1wY9dfjA5x3tLiczuh6BaADbXt8fMqEb4Z535ziZ7ND4kwyLmrGBu3w6JF5tpsJAbumsccyP9pDrZptMwyFufV",
  "key17": "n4M8PsGZX9uesCqNvoaWCG76QRFUqjg1jKutJnTd99MwXTDZRHxn8tApz5awJgGKFkJNoESddC5RyC85m8Zm2dV",
  "key18": "duRVuxEHmLJimo5FbjGNhRoVMxCQqKe12P3CEgKFmXtjR1iTzkSgh4RVr31CE3Q2UT3Sj9U3Fa2amFCiL538w6t",
  "key19": "66zfgP31eoaTRTmp7VaF2khS41aoBEbbVz3kgi19wxR5g3i7g3KNb7wcnEX41DaMoXWm8Rztaxz92NWPRwjJwdLP",
  "key20": "2Rgy3sSkrCoTu8DuAGAqHW6KzZzpXgBmh4b3PkS9jzmhc8XVC2CU6VY9UiWCgx91LGwLJyAUAYopyy5VsZ7KvEnv",
  "key21": "2Mva8hmR8MVQqT8T6g9FzFf57198H5fYtqqXpKEUDZ36UJBZhPxB1PxXDK7qi3bCknxWKC9BFvW6okoqcWQmKUsu",
  "key22": "4o6Yhb8Ukvgwo3MZP8oST7yDyRBT5n7FunhnGdfkKCPcuoJzCNNeJWKc85NpPcQDNb1YN6hgnmcgm9GiGT4SxzZa",
  "key23": "36Fm7PicKw8FNo1hPckLnLWPhCnSctxH3CfLtmrFKQNmTpqxCnVAnXznHSjHWkCxmNdknZ4YxwvUHMKjetsrpo7a",
  "key24": "5j4GdNtW1FRWFSQcycj6dEtaTzQqXkeo9ya8vgQ2xAkWZqMhbjm6sE9VhpoMraxxNpZcyAyxkA5xsR6SgncFhnv7",
  "key25": "3XrGC3Y7VRoxCVHCS6RdoYsjLLcLr1t1FtjbA3jzExmxUu36jDuCKXo6nFy3TpGaSayUuDya29NyqwaPACLxBbzs",
  "key26": "4RjdepotbchSJQxh6LCC1SJgt4XCYRUPYJwppG7V2urjNAkgSjhnkPKUJcXtAsVZvscj1NsRFvuv1LwWoDwEzHAd",
  "key27": "4nf6h8qSjADnWQEh87UnQKACrtKWHb559DT1RbekBRwtLZsjj1XQHJzYpsYqZz1iTfCFnQhey9A2s4QH1vyCMp9K",
  "key28": "5jvU5AhtvA3NibwgbC8T6ECMn7tsz674c6cpTKfG152CB7EWUg1VtnarfhY8yVAu6QfRZTcCUU7TwU9A8bumoxr8",
  "key29": "4bMUebdjSuhSvmwGfmjj3pmvivynvySYHj4k6WZQK93K5EhYdiiYkQQzjxhXd2SiNJBsmtZL4Rtpq59fB54FkhBZ",
  "key30": "5yVfPaJaZ3NLMH6hsit6yC1mL5sR9GHu1GMLPi6UBShxH43vUm5RFJUpSDeG9pwqidRoHGhhTW8N6EwCYpvZUSCQ",
  "key31": "2nf6ffidfQANreWwKZG1v7dPnemG18iaiZ2iHzH3ofH327fkcV7fQsoubqi7XoP5PovnEjp8dbt7KVFjLpf8j7zm",
  "key32": "4VLhVDFasF1EjKqhxhUkwojPpG5yLwS8yDpo7g4NQwYEAC74YvQSaVJ6jqMy4bvToYcbpLQh3KeLNPJoYfiuA34K",
  "key33": "3X8vzChhxR1twNoCH38EjAtDs4DaN6sdXvk8zco95Gn83Jhvw2GowJNUwARd95oJUn3yGhKVhBieDFaDvrZETM4W",
  "key34": "B2aByJnbDx3cs9ix1u3G6px9b2Fw8RL6nbuLqzubvjVSfJLXhgSTM3jocNZ5YGcMbqUeBdaU27qnQr7wLkMyw1B",
  "key35": "dWs8PiNHQu25BW3Mb4V8nU3cF5aBCWcaADuJGngb98LUFE4V7BecXTKPPhm5NKcZ4dvwNgF7bUe6WdHbkuJ62RN",
  "key36": "JdKoZpE71YjGuKVGLzeu9b3c4Kyq6hREYaGQY8QRKkAy7VMBVYNipB4xqpN6gGUY1xSeQyVG6WiT91ttgBF3aV8",
  "key37": "3b5swY83TxaDhCQiRMVaeQz5BaM1tenvrPP9eCz36r4rw3WeKw4vt2FA1wwmQstttD2No47koK8YnCyNnekdb9jB",
  "key38": "3z3z6suXJUydGsGbCuw4k9HPqLyZjD43cvNjj5qU4frzLXSki8JFkNeLYWmXTipEQfD3YWCLuc59RaoSupx13i6t",
  "key39": "4mgBGEVU79M8GgDjshgod2oz99uuwzMsD3Dt327FBPPQHnZP2A7px83Sfxtmf3EnuAaZeibsuS6gyGMvz38cqFQN",
  "key40": "3D6JiUAQPYPk8Eu3AntHSjfzbi4qUEqgHHJZpXWcrpLMXmujv1cr6rdQUm5iD1Dp6ULV1vftDSnWutCusfFSZvSP",
  "key41": "G1eCTBkiD9Bm3BHeSwKjQ1MKcjnQHxGPjdKMMS3CMPv1wbJJugCX2EGwEQQPTHThjkB81XPDCKbBTYH3JFJ9KST",
  "key42": "mcRH7e312kSwdRWyE2Rr4TwkEDUuAdCdNU4nSRDCcw5yaXfA4JtMBVD9wMabeaK7UESghZ2SjFytf92RgXruTDF",
  "key43": "2pH8h2dbeBBQ2LqztmpQ8cEQ2h7zoGq3JfviZk934bqFh9VGUsC9BuQcyVPhN4GgYfS3zGYXJ5L88eSdgg8H3FG",
  "key44": "VCp37KVVi3hB4KNLHeVSddNoemkQ5qN8HmAnuDWqorL4XdbKmjAgN2C5vQ23qXtCbEYkdYFAR7CpQEvSk6JGpkY",
  "key45": "3ybfNV2NKgh4HCy2xsESk5UmAHuKujyyf8BfDZLfDr9ZKpPrpkK3na6rpxS9Rhu1wTR7ZUeS3j2F2bDqSkwrjfXS",
  "key46": "BKgYMaQBrQhzH3URjwcJwAxehn9CpL3asPLwNuvYWmnME3vLdipqZLTgq31gQ7WdnZztGQpa5Xkf37eqhrLc6qv",
  "key47": "4X2L66aMPkiyF2GzoXgv3QxmdryPa3UQtvdLaBKR42cegnQD2gQ47ydoXtf83PAgnxYgbso51eLsL2CUoCFVvxYj"
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
