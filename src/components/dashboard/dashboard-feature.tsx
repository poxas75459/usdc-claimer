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
    "4MARR3QYfN1imkey5hvGTLiVXn2uUCokNcL6tJd9BRdbHxh1L4qspnDmhLCAvZMH9USy2NEWFsPCShfeeBJeRVXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GV6PZMt7tmhHy6ByDuCYLE55rookR9K9A5fed9JRfSmjjspBwLbHo1pkWoCkSmWpykrfj4tKy22V4EDLgxfArHH",
  "key1": "5tzQcnnRtrTrrQrPvLQeb7boLYqAmQ2rZEfyqtGfKu7uQbNgRSYaNAqUvfqjxzq7RgF9RR8acyEGyzr3EVJ3nRvk",
  "key2": "2A6xbiwiTRaLUs6SBATQpigJmWg9XymEgiJ7GAy9okYMewphv37EbePdFeGZApNCjbcrw9WjVDifCs2JSxHEBLy4",
  "key3": "H1CWNvS9S2i1JAcwzWkXAnbuAFJbbkBoyEz5kHnt7tcM9t7QKEZHbH7jaALswTvS8Tmi2w4BBUFZMxupZBmkgLt",
  "key4": "4hj3SSfvkqkck8W9AUZzr6YacYhLo6Y3UftXeKYGRjbdsMr2PYfF8KebePRWZKxi3kmxhEJwuAYMVSNuSmr8vEZo",
  "key5": "jfSDBcAsnsuGRzYd7eFrNyjNnhMUuod2HosQNcA1tEr5xoPDfh1PtivEpRrage68e8exS5qd2BmsBSzBUVNY6D2",
  "key6": "2bGWmTC8xLZn32qJk9bcBXEpR5BzwoXWv3QxbnkpPyP2zJTtKrtVnt9QBSGsijo9p156wVJuCGqfhG97DKsD8PNH",
  "key7": "5H62BhjwiudiA7UvfD7SAAnF2AaVicPRkwqpJA3rQjk1cxEXT6yE41KLTMMWbeS2ZaHUGeutmEcUFW4eAShuPHWv",
  "key8": "yikF6kV2XxjEk1CiNwB7djb4HsSSDYtQbGZ4xSYpE84JNfWs1862GN5RCtu9ZGU1CHa2DWEj6MFNZa9WANohjSx",
  "key9": "5h3sagWSqKPs13nN4h3Ed5Q63NzmKmJcsEGLUiDwwSjtmmUDNoWiToRkLP2o3m5noAetQPm43bzX53HevhTPk4nB",
  "key10": "2oKuqwyziqyLVbJKZGjcPwRGALS5Ktn5GKo7YDSpufDb2pYo7XtDtww1ftcbJv4tzKfXfMT16coF24NmpGsVnpMn",
  "key11": "39NuPrssGF9DmsyahBFFDyCtps6dRFASJmota7zAgUP5R8aFGfArEREQKFjb6XjTQeEgy33rMHtj9fmLgaRVQBnR",
  "key12": "4dVfvhiDgZDHJJFneubiEp5QVqEdwufQDb2br7vLfMhJVRsTNePPtE5y5Ei5hUuNgG7Q7yR7TCFLgbNWQ1Y6Ah3Q",
  "key13": "6fMNLXwVjButj83qALk5iqt7HaejF3rdwEHy6xAvMnDRfj7Vk4t5WQZmALuTC8RjwyxNHD99qtzrYbLdwQJ9VPW",
  "key14": "PqTyuGo1hZ2MrBubmMGEBF31tibVMSS7rmZWAoTUqdmEEhZR3NLULoErn6qDbKLzGyDQgR58TtzCA8bfCdjjGWw",
  "key15": "4GHGcFyUMbM27L8pji5aQbZFBTorkCZzmaPpp4wgZ25SXh2GrcjYA1P6a4ULpUM48vWsTTBqaDYcCJLEGEMfuV2W",
  "key16": "4h9E3nV8ArpTNArQAAL4i9A5AmrHHUY3EmfuwioZJECuffEbmZkAhZ2tKVHCbyNR8Kbmuge4BNTParYDbBSBGGVL",
  "key17": "5kqBrm5eEXq45V6x33vgN2inCKQwzu8pUn2mf8E9po6nakC3kNHMubC62t7Y6YCm4giF3U9ZGSZhu15usALcGN1Z",
  "key18": "5LgYKYuHLWHAKh22SCfMw66awgB8SEtMariUuV5FV1gfNz7zTyT2xWcj1mFm7EATuQWcsAAuehhmsvKYDp1rgqSB",
  "key19": "4sytku8KLXSzRWmcWosjAVSbLx2rJjA8ymdopMfA8rriwQabWcHiH9dFVrazqLnL5vsu1hZihDPhDZ9DRok3LNJV",
  "key20": "2VCCtgHJJrkFD12iD81tcVFUaYsoMCeWYDnuLb3L4Vpio7g7FhxwixzGxBwVdq1Hz2XsXrQxFoL7B2DcHvbBDWqo",
  "key21": "WiQHHFXR3oSShiXEWe67iaLnqPfpsEgxMX3RaZZ6Gjm87fqjvjXdp9a8MyzWxByzGwrpR6vn8HSvR347ycLmqxm",
  "key22": "5oUPTzdCvzRxbixYvHi9TQcZeDM7qM4brRQ8ZZpTRUCugRCh46M3aVRhGRwBeMjpgQuRHVw5rn7AHx3DDPNRUHbZ",
  "key23": "2yK6AF8qHNoGoiFzRvwj2tExg64M59EhzpmyGvp8uysS4FkpenDvw2yMFpAsssTu6r6hEspLgnTpgqP78LPLTZmq",
  "key24": "4CDqkFsvf8sz6AN2PPbYzXgHh2ABdtM9eEwpojnqyKHmKE9dcffQUbEYWe1RkRbunDLNTkmNLfDBKwtZq7WT5uCb",
  "key25": "2uQS7FFQumvEfNrJE2aJn6wDrHnVgLpQPNU6reWVqmZzYCPrrdQb8wdgRZRrqfH6zv7wRo3D9cLjFWX3Yq8j33Ys",
  "key26": "3UukSuhzHPLav2jhzt7Rwn5San1EcgDrMwi9VtinKe49VMZAmFGzU7Xnbxpi9MDtS8KSgdy7hwFsy1HbFJbxPkiQ",
  "key27": "3Qabx82dyi4a6Rj7H65WQ2od2GwhBaRuqQxb8yKZGsDvxkSvRjH8GyWAXphRot6GmXorxydH1Sncu3dhJuHVSVKC",
  "key28": "5rScuc7u29dcez4qdgjaQws7rXTHrQY896Cy27piJPtFGWBgd5ckEpNUizCFt5MZz46cJmHD3cZxqdtUakZig7jd",
  "key29": "23VNmQXe58QcpSSQM5TLA9667kZh72ShHH3UGkZ1M5hArb2qyPgn41xpEVvsEizN7v7oqBQPV9Nab4Mpja3y9t74",
  "key30": "3f1xU54M5zAbHzJ9aN8s4jbM22oPA7XFLnn4z9vAwyhQviwr7gCPme8XpDggVkYoCPqUUg7d8WgFqijMKq3nJzDS",
  "key31": "2NEnnkMDUKeXMqbrHhdfxzfeZNyZfRxeceUnJQhYQk4rkRjtguvZNUbD2EHBQYs2VsnqfiP9ohetFt75pbjDkoHD",
  "key32": "412ffwVCu5akUfqzpAB1dU8KfFRpyLbSkQM2LjGCdBZEgyVYH6ECd8URa1RKxmBSsVkrw4bge3Rg5effu1NC3edV",
  "key33": "4HqYVQcVV3oBB6D3163ym2nU2M7J1TccPP28T2VJx78TY3oENZTSx5xBodTp6Wr4ezJySApdGVH3hMvuqRLu9jgL",
  "key34": "4AY2VFxpBZnbjQge15GxiX1U14uowC3GszMVEPKemSDeGgc4aQJBGBF9r4VYeAU5TjDuzvrc8goQhbmaxF3nmKHo",
  "key35": "28et8gGUxEKZgdcKbcFz3fbY2HBLvshBTWTPZjcVdSvZyKNSaF553xxFqUjSHutpSDE6vNaHFevE4JdhyajHSosC",
  "key36": "2kgPUu5Shs5jrm9yvmdzG5avmBsCqb4u3yrGq6JpQjyvxJpZmCau18qCo8hbPBh6M9RZZSXFTxtkafqdbHBjth8X",
  "key37": "59vTa9b7cadCBPthjGVZVS5YE5cHj9JrHb1xtuMJok1utbrxbVKxo1Pg6CdxZCXV8AHoiFh6jiHqBbLxNGS9VUL7",
  "key38": "2XGuqWtYgkS8XVmFPJWjdRu6ESW5iZugRvKRPRvxXqbBsrzANyzN8jWoT6CqL3LJWAp9uyrPq59uGi32Pdgg5FKW",
  "key39": "4cjobgNkNyHRz5wpNhx7noYGsx3gDXemsoUcT1XV5fS6zfHZwMutfzEVgt42HTj6352Pr2TAAJNfi8SXDCJvib9E",
  "key40": "2bTJWKX2aCFRrW7FDjb8hRDDynMRvLeNpUPtbJx2WBzdMypCWQaUkTnyJKczBrqs2Sy857JYd73xiJxe4CDdAx38"
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
