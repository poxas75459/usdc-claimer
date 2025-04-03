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
    "2gRafeQYYuDDL96Tva6TfjK3gCbpPFfQiw2UWkUfkR3T8ny9HKsKaBCjJhaQea1hr8sCBDbVXB9rj5MbpRhixw5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKVMwoB97ZkMrnwZnjJX8NtKJn8aKGshFtrjEU966PAHQMcCWaHyqje2CpUPMRnzEZFtT96jTLCPhUgxdeqJSEb",
  "key1": "5n5skid7xwkiCVSpbFdJ7SLbyKr7JxpdEx9GoWQmSkwYihiYskgF26YeGAGP25gj5MmyBCXtdWyeyadc3d8rfHN3",
  "key2": "3RVigEM9HnQaxXTAxAxFvEQzvKBPiMt6AVXFFbjCQdq9YNeqxnpzbFVvjiWRQQU8FctgXMuh2bfYxP9NTEhheB9o",
  "key3": "4VPSgBLGYAmcwsnE7neyZ4EzjRV3tkGCSN62E24HmuFo6zmr6i21KQrXQYFmCCn53NvQCg7j6mRJyyFgvewcLv8Z",
  "key4": "41DifzAGz9bdSXBW4AX7iH9nKiWUPFS1ELoqfgXuBW9ZdqB49TJfNN8FfQDTJBwCq9C9bWRwZ2g7GLqASaeAerR9",
  "key5": "4jeYtXXGZE4Sf1KxhDVW9Uan5wuYtaNy6JaAhG1jRhtKNxyeVcNByWCNYiyyceePAZEGjzB46P7joWcMZHBknEvX",
  "key6": "67h53DVJdRzf1JVvMR1vWKCQqo1kYdPEtVQ6NpzoaN1kCAVnSkXvNNhDZX1jpv6MLwQcyehsQmLj57N9h8Po6R6t",
  "key7": "5tBmm5MGRzAsmci6qWzQ6DgNZc5BUFgxgQP13HJy6xpYtgd1L52tUWZwNvG48sxzAib9oxox7XWgmBhj3RNgDaZm",
  "key8": "5HUofLBRBhE39Jjvvn56shZhetnYA3o4V9r5EdKVLvMEkYGBVYF9U2i7VcUB5ekGG4s56oHG8yo51RM2Zm3PvtDo",
  "key9": "Grv3ccLwBtAMUswibHpToAszRgnMrA8TViC4av7GC2jRwXd8JfCxQSCaXdyKYLyuuhNU2FZWEuFqNW4fMD6sZH4",
  "key10": "64DgtNG5Yjb9vqbWrDhKy7GVzKRQjiAuezdKpLG9A2FBKr6KdiXtk3hUeq3UF29dC4SqfScBnSaeCEXkVK4HvyWb",
  "key11": "2Dk9fL16Kajuq2gW5MuwrxLcwNQFxHBKk4TFYbx6Sb6CXT7CyZnSCzHPYqHsX3rZV6XF4HhkYB746b45XFjj1jmv",
  "key12": "37N8J3ga4LqUo5DN8meQC2VNwvC1J6N4WZqjgYV75Swre1fNsc9wsZniHmbx5CLfBZ6RxHhcq8HXQcnxPHLbTbH",
  "key13": "3bRMmWCX9Z6jbpHRb9pgnbzdMXSUptPX274Z66izckMU8SrbjFv266cYBLMue5EodxKvZxVswLuaJ9goTKVMNJTk",
  "key14": "4NqkQ2ZpBCNHrn7vhBLRpRGxgyzQU8Bvv9NL6KY3fFywFcDbYbhHBVb62UEkWnpP2pUcbFRRdQA5Xt7Rj1kcApwe",
  "key15": "SpXUragKhJ7UKxYu9kf6VR52jxxPH4mq72T1GUtZdUdFdc3eDD2bRuZmj6vndbHN5Kjs7kAScWZ8fBFDik9bAJA",
  "key16": "gNdwJpKcyHBKw4HQSRr8Ueii6hbGpp3vbKwQEroEJuLftxFtyfuMuZuAtswVcbjRzkrnV3AMNePBq9JyscunZyo",
  "key17": "24tfcZmnG8ThPTBBSfcU1MGj1R3X94cSa2BV7GCj9zAWqUAknayy32Jy94H26DKQbf1A7uF8Ho9Q8DeC8Ftvt4Kj",
  "key18": "4MH45ZRwJ9GXKPnfwHgVgQq5qxRE7HEqEe3CuDrchiA8vd4LXVgta5xD51tMhct5GZyjkSafR48RZxB1MJFkNDu6",
  "key19": "3sd4VQ39yCgLLXmFLfXEzSzQ92AKnVpZsUzPV2jEKD7WENt6qfRVcpaDmNyGnMec1dsd1MbYsPwJ1rR89dV6Kv4q",
  "key20": "66sBLCCcmQkHe912Sx5SU6p9bcejwJfk2oGE4v7pRfUcc2RQECi5gFRhXUto21yhyZtwyQn5Wc774Lufk6fpygSS",
  "key21": "1wKxFnpYRnYQheF4uRidxJ8UiDFabtP4kV48Fb739S8uyg9JrgNd5wRPANUeQfwLKqBcwuuDEs3AaBqUWXuzqdm",
  "key22": "5GWrNEnB4LeS8curCghRezkxnwSaETHa5VP2G74VxLfTs6wF92XZAqiDU6c9DGNao4mKKjWXnz1ZjwkuE1VJRBcE",
  "key23": "5UWkoKRbK35ZuxV6ijPjM5wFDXWqScPZBFZZXkBPfTVGkh8XNCMqUKwybeeRzp9UCHnHy5qTHB7SZF547FQdKgQ5",
  "key24": "5b7c8s7vaopBaVSq5TPYNkK2Z45Qgehqr5MyWxYWbty1ckW9D8kqDteHLezSz8BSFD3K87e4E6v4aEEmEG2Pnah",
  "key25": "VbfYnXpMHRnrn63JpqS8gFuisSSmEiBhYXDX5BvbeDVDwjvSaWP5fAVQjEKBtgDJfHggdfCCv31mjwZBwxAcy4D",
  "key26": "3j6XE6ihZ4YwRwKqAboecauVQwYhbyMojGbnWQqCNjmMsUadyUPpq2Lbh5L8EtW9jkbaigsi8TkzguDNFnWQj2qt",
  "key27": "4ngq8GxscDfjfMwAi7KbDyjuhGs4YoNHEdzPBTSf5xsZ1NhSQRfJaMCh5HswT9fQ23Kne5QTYnUL51HMTEmazq8J",
  "key28": "5LogjVwe2bEVzT9CRn4DH2ho756QMYGSaSCbYLKigoBFPbRdXZFY5Hs4uUBNoumBh3ipubbkH2fmaFmRLgtvWmgr",
  "key29": "5fD7ygBG6jU2wZoLBKfhRAE3VdVeV1nrsAAmhq5yA8hLFwrz4ihwuZCLnKhQvXmv1ZJFfv5tzzZeDeCBBYXKX3F6",
  "key30": "2KDzKw2uTYiLv7NiGn4ZVGtLWyeoCZ2enkK6WYNX6oh9cQ5zxrHdNHrfAdHXA7AdWyhS161V4bssMDcoqJaBR898",
  "key31": "2kkr79DeVL7HGECiXSmRVDLFjE2SEj6QEWrFvZhucgcnQNo8sCajDAe21YwiLHA13CFAYW9wKXNRfLnNyFhnVvqW",
  "key32": "5VFPrknMBeeSsaG9Z4L8rYnuVhHG76hopxNpytSjo1XkLedrxXKQZtfeoUQpPJ9ZuTdQjdAeqfkcJrxZmxnSCw9o",
  "key33": "297UNzFdHRxYWFLMZLg6XGHiXDaMwhqqrYQjALBci6q1hHL3YTWukQqaT5nj9ZUhUVCdKYAKxM55Cta5QDk3bA8i",
  "key34": "3dmKKKfJfiQ4VeBCdZ4DwRKfLdirC4ys8iNsvZX9VsBdsgR49HSDBjppxi7AiPGSVzmPsy7hvmpuuRifptb1SFcS",
  "key35": "3gxevAdrnV3kD9uyom2kvE2f4PcsGnSTtSXG9ne2XArMpoK9JVrt4oGcCrwtxtYGyi17wRrw6fgRme6MXXYZQvP7",
  "key36": "3DjJLZ8dPYkwd4yf8h3Ws6VSb4SD4Yuz1assUuYieHBTBG95WQVBsEzjz6HMSLwbnVReV9y9jZaUvaFXLpTPWcNW",
  "key37": "d23qnXLKm11yiYihpBixenRtuCPoiTLXrhnVE5v2Jg7rBAmbYe5skc1ebZHTLsmFHyKkLM9SMiSNwcrfxMg6Q5N",
  "key38": "33Zc36tQg7b96MyZWoyKemmaorGVkn2FkYi8y5hTwbDMqF5nLSrBhgSYW9jPWMhb97Az4kQu9ErNhbf5p3neL6t9",
  "key39": "3fvAjbjQsTJPZ3XnA6RBZu28RjyTszp9CVXHgSSn7GAyfAMGB7fPcqrF6gb2qVpRJQrbXc8MwqA4Q3KeWzgH7zQo",
  "key40": "4BNARXuG4vRSDNfmhXG5Pow1sCzwyBDsxw6nM3wQmUrPcVLm9XkodzmuRCknXfcLwKHMmHZJBX9xqLpJNwTVctcy",
  "key41": "2fJvfGVkj5GQSYVCnQyALEA9fwjkQU6aM3VbAZsX5CxcK9eB9znPtQx45nK6K7c9g9Q4GEvqUEamMxn915PzLbRq",
  "key42": "2admKp9Q3xVUXUygcuNxrmBndhwbMCrHzExKuqbmmvrtEy6kLbjAn3ss5qJBBcWNxdoNeZVopAM23qKfrfucu5my",
  "key43": "j2LDevt82Y94Asd1Zcn7DDAUenJmv9ZJq5ASjvhiSNLQtPsA7pPSjmfCmSCE4HwkStktk1yVQhf263dQwJVquWq",
  "key44": "3P2yyRzhk5TcLmKNf9dTNqC1BUB64SdjK8tHG3vnuVt8TxvPniA2QDU8j3N6zFjMxrra5pxdDYiY5FXc4fAEvqiY",
  "key45": "2KnEAcsY6Gp7psuGmuYPRyhY9VgVVx4DeL9dPmtHikxnv7zNeMrurzXZs96pqJ8NimArkEMY8k1UzYLZqG4BbgAm",
  "key46": "5bt9GDCot5Xmf3ng2PrhwLkEJio4tSjacbMFaRjZ44HghyELCpzoFN3nsSpjdizr6jzVXGPHG6aS2UcYemTi3P5C"
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
