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
    "2hJ6SpKk3mrW9ymd6G5Waci7cLPs4B7GvpRqYWDMViW5FoZJv4ixgstRrDCMKjerPJVHLR1qBkmm5NAPS57CMeY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EGqGkj6oSU6gdu4rRKbEB3LD1tR6HutsU8AqCBmMDwbSehaug1yCC5bPq2caBKtm19JBqPHbqaQB5Qxkn3rD9bo",
  "key1": "5STivA1FE1XH4zqtMqPZfS3txKXUEx6e9zX92DaPMqG8qr64rkS2Sa3b9KaHbE6RvGx79duUPJkpKDPyNZYUWqcg",
  "key2": "2uKvYFQAniUpixcybpMdMaSTzK75oFNUsrXVR9akzntDJRHHb17jZ8PqMnsmKST1VzfkHSRSGNyXkvKX9ae4RYpJ",
  "key3": "2tRTi99HPyLFEwEQXumJxKpwwXbUARomENDb3UbcRMDN8ArZ119ZfWaSdP6HaNMhuCm5M1GHz79zBKfoE5JEjvHs",
  "key4": "44N6FtNCJc6zHgiopAhfiPC3e7aBUg1CCd96dCLG8sDS1WrRcGR6wY1Tdx8kVndAonwrmvj9CTbm5kTjDvhrspMs",
  "key5": "3sqp6PeqZDNLwzSKQ9Fg2h6nMDst9Ao2QW1WpdSAqvoVR8wwK6csWFYCdePgm3UwxayQBEdySDGCjbDgsv2hZ73q",
  "key6": "5a9N6Ach8ZaPFjaNP9oEJgjtWt5uWqeQ3v24xCdY9PTdL4kGeK3Dx8M7ySa4QqGWNkXvu4wnrTkhtUQDyhHrHYqh",
  "key7": "2ezqqKcJbhqTMBEdCANyjPbYEmPD6yDm1D6D9Ni3tSuwTNoGuP6Urq5gYEVyqAdGRmw9FxVJhaNG6YCDd5MdPk3P",
  "key8": "u2iBYCTx75Tr2WGDeuETnF118sU4PgAFPtaUBmifdkmLCpiPNTnyVahKrB9jTD3jrWvNcohVdaHuk6rrmAG16zk",
  "key9": "5w88qdhuhMfFZ6ioueMg91RDMgYVsSRGASNzp6hkk776LutDCxJHdL7ZAGebYD7Dy35husQQHSY3YsYecNt7XX3U",
  "key10": "29igovi3r5P7ajuAgpE6NhZwYkjrqUdtBtZ9k4rk1Ddx19KGMhNshgBHXvq9LcjccF33h5bUXYe4xErHYuxbze8Y",
  "key11": "5g4H9mDfCir38WaEVHETfzdpYX387wqCLmmtftpUt4xz4VvEmdFmBZwNasXkhrYZCbw6qNFP7LW8wUFwSZtp4i4e",
  "key12": "y7TspMb5An1sbvDXu82dzeWnZF8VAW9NwHUg73gLYTiCaHPANYQeEZzqCaZD9iZymxpKZ4Qs4EtyDyjCx1QhCM9",
  "key13": "4Q3TAKo7UkV1XWi49pMrWFcgtP2dWfkEu53EBDeCVPeiZ1946rouoJPyGhKwyGgCngCMaqps7VsWVRX4gCVmNYGG",
  "key14": "9EnEMh8TPMKsUcJ7DL6dUViw6R3Piwt6CYbX3KYVB5MgfbkLfCSs57A836mVkd4SeTxMPkErpHPQpC4tpGsMaFB",
  "key15": "3r59PAzu4w9eD7xZeQHc33rgsLU5j7nbwxbcMqEBEZepnKfytnpGXkSCoc45ePrLmtJZ17UsUJXGhCMdn8z4NKra",
  "key16": "4nH5PWJdsrBwqGnDhwLkvyjBSEdxYoL8zLgg9oDyHRCHsob2kZ8fckXjAVdgDYKxR8zsXHwACj56VutFKvd6TqZD",
  "key17": "63hzLf7dpfEHctPwMY6UNmfzKU56X3UecyWnuqGkdkLYs7LKiiTpPbL3xaR6147TmpppeRogYU9ejddu9Kz9TACi",
  "key18": "3LXDybhft753Zjw4CTNu2ZRkpHvbwZjyH2QYCZG2gM8dkkqYxTyvJnbpnQt8372a5kPj4zzmg56gKXvXNnFhPh3y",
  "key19": "4DwFjf1L576q5fmPim4DGrJtGoyp2rE5ZSGh38cpJETMmHB9Hx4BGaNQAosPZPrESiggBSQ4zJ5o8wXW8mByyFoW",
  "key20": "WrJ53yLvMfYBEceVcBVrcdQA4JukTZ2feAVoWxYCjKxSUXnmCNtrN72XBza8ymSqGXDY9xvSqQ9jbjaoqDTTuvQ",
  "key21": "3gmqd9KAQXD7pkC6nL4T6FubVVr8vYDLBkkjf9HvBLA7bgP3bMEJQ4dGibLxwWFV5Ee2S65uUc9Ak64AeXUR5FNF",
  "key22": "m9oHQkci2nzVxBEtXGmdYKr6HpQLNmx1SsSWoKYWJ7qJfRgw4bHhZgMuHKrGm4tPzfJPmrTfNZ9v8TRoWb6WWAZ",
  "key23": "56dWpRto3d1sY6TzkFR54SPKRNEX1gqdEuWCfLh4mwVASVYNKZY2B3qjajiFQCmV2rzAfF4MVcmb1Mb2tkriPdLZ",
  "key24": "4zfJjh4Qwo7CPwaAdcRW7MZNPwMnQRFL58d3dsoYB6C8aW1pXEnPuTWyaFE4i5jyj1tx5Au4X3BhkEGmCjsPyzeZ",
  "key25": "3rFBH9bBraekr4PxF6gEeWTNpJ92sLohQmMVtfbmBJ3LKWCuFjVZgYoZizgwRSpFbsQd4tw5kV6MZzJPbUmCvpG",
  "key26": "2gkh3ermcRHPXKNmCYzJ9XJYUC5DgUdb6usHL9c32q4JqUhAmLNAmyYjkbbHHTV6nk8rPsp28P9MwbmKMxfkszwV",
  "key27": "5NkMWuc74aaadij7FHKTCy2RkfTVTv6289nVcCNgDTkSQRUxTRfW51JyPPbUkkWVZcsKXeEYhhCKuSpVzDgUKSMB",
  "key28": "4bxYySxpwqwL1wuFV7kBt5hwuKuZmdKUdxe6k6LJJZLCPnEKznh94FQwHGsNytakkGF7YA3M1Lb6HUCFX4UK9E7b",
  "key29": "33gBsMuRyVvKR5HkvZRoxJbHESFLh2btN6rQ3S4t9D7viseB78k7syuouTQpuySC1mz78WChykKpuk5PbfDB94x2",
  "key30": "4BAGkkt7wtNJyXWVt5e6MGV1XbgyRRR9yRzfCghgWnBhfp9bCDrUKYRKBc3frHwX3JFzvmoEfH9vAQfGET25gAQ6",
  "key31": "64E6zDbN8mgJJoiwP4AcSpJoWS6kzbcBNSNLyUjeC7LDyEqVTdf1UHQytf8iKw4c2dN2DNhzw7D3nSmksjJnA2jz",
  "key32": "4f2oinR25YtYQBfDkAjJ4HratnTHuoSHg459TstpScPDRVEdtKjeaqmR8L7J3JY5pqUssbdcKwbSFUQwqj22SJWr",
  "key33": "2EcXYKZqhWDd6BBj9ThxH5Rww2Ev7jieqihKkAnEbjFnvajbETxWJfNDMQ6ycLibJgFs8LoKMnvLKKu4SPcmyV7x",
  "key34": "2fgS74BFjE1pwUbmAGTRNAhdwN5WHBxhkcwUqunaDmmFdBCKyN9f37HSasj847oWfFyjD8i6fyTCEpoVB4XSHNwZ",
  "key35": "3coSBzLkwTBjwBX39w9vabV1ghx1nCKzJp6DoyJoX3Dj2zzVUCifdnz1TmZwJndpLHUoGRUxsM2pf7n3opmY8JD6",
  "key36": "wfMbf7jSZ4tghe6j3oXHRuhTniqmKf6cCVZinu75UbKZMVrATCVjvp4aY6FBKwWNu18GzzEVFv6pg11bpqWuwoK",
  "key37": "5GX5nXTEgGJggmPHUPA1zW6BEJwVVvxjZhN4CwZt34HiAxtNKgjoMDgnsNAjTANHputGZVSVdHMHrwtTiTd3xbTo",
  "key38": "xWjfJquu1c8V23BG3CGnPLGKY4yXSU8vzVuCTvbhGF8Rjdbh5U8TnSGEDLVLQdCVcxhHbSBqCWq2eF25bqV5nTT",
  "key39": "4fjZKwknATpGSRNZJWqfYeLGHexQKw7T785VAcjLmJVGJzY8uA7HCej8e5zfpT2bxBdzKcJAUK84kgKEJkEgfWZZ",
  "key40": "2hLYeVty1BbeqzkLfsRupybb8SK8RDwc7uEK5oU3Pgdf8Z8M4hQYuNMZysYesUa71X1dSHKhVDEjTY7XeqFga85C",
  "key41": "66HpUYNN9KBRgH7wD76rCU83pooH3sDE4ebsvhiycctXD2iVrRtwxYVrLautkkTToQTHcw6RJLBH4vUqrj3T3oaU",
  "key42": "2GjNuJvB6ZEruBH9imXzyCwkGraa3yWEiYsVRLh1qXZeYhSMAhkBtoCEnX5UqgqW7qqbhFBbvv4bATeRiEUUEKbk"
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
