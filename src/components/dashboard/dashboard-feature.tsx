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
    "5QXCkz8DZu2hJpLL3NFJFY4VReuxaJ2dH6YeFsda7zGGCeS2npRjz9T2WSNiyYAwVngCiHEz26yxYstDfj9q8sub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQkdTbqHrXsKv7hrswcKGGVDgEwqmhDwG3d7Ak6nrwMhfxeMzyrkKWGFFPN6yV8fmH4eWxNZyNnwmayxziK72iD",
  "key1": "CpWRF6JQdH4Yr25wgTd5bYg6uWbmByZsPBQs23UxSghK6Qndy8QX8z48rSmKFuXXDLMzFM4aGzPpY3U6hagpFqV",
  "key2": "4RYnWJMVwCpjEvuWbX5ZXf9ktsADxAKad2d4xnbfrNXt5Q3gfVXD15ZXH37Dnz7wP1xGf4zZoLeQ7f917Xo43oBM",
  "key3": "2m1dxV1zrQpUuEb9UFbuxi9P6hmPaoVHMvpnVNNKfs643voH4MHWXLcCZoVTA1PsHxedAhBoBeaCkE7wmhrdrKgB",
  "key4": "5CJe7veZTL4dkuQfeavNiPZdHDCPVfnfU6u9YRiADMZdvmyh8kAHN54uk2tkWujx7aasNqoEAjR6q3ncKMuheLtw",
  "key5": "5Hem82ocAhvx2jg7DQhCoxrNMgNy2wuyBrjw5uRc7sXVnn5qMDA8eRt4mYUG3XYSZRDTbS419bsqtxmzfSFVB4RU",
  "key6": "55zgqh7Y13d3tXFGoeGKeLSpTbFqdhgWN23vhX4ApERQVJ5sTeNSnpNVPQGRirH7m8TEUxwK1SjhaBY7g8KvreTE",
  "key7": "2tKSDE1eYXSDgkdkZDJ9aGhxruERFuPE2eefcpJq5PDqfjNZ8iYdGjABvaHzoxNgdtAwbegekBj6hSRD5D9vAqaC",
  "key8": "2zmonyoC621hVagQjQGcJPQX9k1SMydXsPudvmav6CWT9ZXYwHRsEMWhv3Zh594hYrNLBTs2DvqR41bXnifR5Eyo",
  "key9": "2oMRQzkXgYtZt4TTSDhtYQPTx13QmhXLjN7s3s7pUnxH7VPe78cDsW4dTiipupwFeDCsGbN2X6GhTcQHnvHKoQZp",
  "key10": "4uX16qo7rxBQQzykRzHyxs1KKMLXKiq1tZBorUXc2RRLWrHgQ8cMf5qx7RJ2tHqmzXW5qf8bLN5NTrFfyKurcMfz",
  "key11": "5GEydDgC4HPMbVWWgRC1fBsfBcZS88Ns2MkLXrNwBjonQSxH3yMXxppUj6bHtS1n6tEjA2WEGaKYou2dNuie3sXo",
  "key12": "3C8xbZZ86SA7ZypXfq5amESK6JYdd2NHYuUwNt2CntqyqEpB7VkjAvETHgGrNDDDp7RwQMqYKMcNzhkz28dUsbTe",
  "key13": "cwT7Hcy9erm95QSg4km6k4qsThLwf5fBpkJTrqNj7BpGp2QzwYEs8L2gUTEuodoEQrrEaczvEZyesSgidCyF7He",
  "key14": "5gLBFeAXb7Jy9RakVYVdc6H9pXPwpnoga4wkVCbfEbHAqoCqschmFmxy1QAUhPxLjRsTDRvtDgudEikXzhSBr4kQ",
  "key15": "4jQsvD4c9QGgKmu1VFoss515pby9nzts4ddBpZHQBh7JUnnoajAqVgGtrgCKb6dPj3Z9NzxuAwCPS7AnSzy8Kwy1",
  "key16": "2Pvyg9JTy6K9nDPxTsNaFHS6rVUM6AQvJ1dNeey5snd3TQcfjNgJdk6VSd6nUmVSBtKMzdUGRndZ7sXFw3jyC9J3",
  "key17": "3Jro9XG5DtiLgGfwiQGmr1McAmS7H2sBZzerhga9Mk2cih83ks5oGWu8igxsxMs5o8EfbkZwFynHgwvLBgxzzhEw",
  "key18": "3q6bkuDE9juMYzhu5sGNTE1mNezmkhMehk8s6yWXSQdGtH3cHqHLLbjUY7FGDpLgnJBrxkdvNDoFkMcPYF3A1oRb",
  "key19": "niJdqW7J6X77hNyYuW5wCa21fbVUfLyxmX1dwUPJh1jpKBrxg2NkQiMXYwJVZtBua5rzBTh8PjgqHQ5vg24PWhM",
  "key20": "8CKK6k2DRteqibCL9MmxhjW6EnckrMSLxR2ZtvBundUi7Nojqvza7bRLtSvTdAq3sN99j8pfg4rTrxu4MGmfoJ3",
  "key21": "5kbQjASV7qLEJLafeMU5TsfgVWJaC7cy3BiiY4kq9TQwsKQQxjdtTMVa2UR5mhCWAP9V6PmZyKgbiKx3kkYzmLk7",
  "key22": "65fLtGP8RcbaTpFy7mzFPNJpANgF4RkMDKB6c6oc9PXKUM1bTZwbVv1kS9F9iejzPdvcUFhWiSWjBdf64zW4oUR6",
  "key23": "3J7m8shk3g814R764JQtaxq7oCrd9K3tcsgeYRiFnSXM72Bi1KSTmK53PS4mAq9xesszUrmpuJGsDoqjJDtcTRq6",
  "key24": "67XB9fYoyVM4JBxPEG2GwZu496kpeSBSyASZ1fw56hFqRD9N92hg3KYGR14W22bP3Zo6CPNvUwg8ipdpjm17FcDA",
  "key25": "Mr2FpAFA83SKS7A1HvJ16JFfALBYa7a623XYjqgFpbN4htLhx4cpYxAXcaFYStM5xsGMiSNMQGf8QrquYFoHP4i",
  "key26": "HZRTgVu7vDmG9FpEgrKvvFpw9u8sk7xBjLfBUg3ArxMEGQfyFg7wBQWvRGvN5ab8BDWJrv3cCbDsho8F6wSPkVs",
  "key27": "3z6ZJAW8atrYNgaAp77gfRvHFg9AZ2QnQp5MkJimPcd7juzGc5TCWC38zPN519GxqiQmHAP9R5KQ3Ha8iYtdxEYj",
  "key28": "3YSeB81TDRf6LwEFCcXU4j65v6up1N1pTur4v1ntK1HcP532sc5euFWTrXuB7A7Ge9Af9TeSFDje1ysT9BX5jcuR",
  "key29": "35nbBvhGQ1WPmHYCHid39ci6rVapEP4rmxbQGHegXQZsTJpDhNAVXRCFhWLo6dMVFz8LhpwdDEhBb4KPuXMQkuNm",
  "key30": "2fbj7euZiBWDw6vvmmsJXremsHS6tSKTB4CvUTQYrky4HEbiw8JGvFosc2EhM5CjiA79V7zNemJCxCxS3s5Nw7t2",
  "key31": "3tgtucjjUrSpFMCCoXB27A1tz7ro54bGceNkE5tzjpxpeNen2g47VH1URX8K4nk8K4JfmPhdGkZ6taLqe5bcncXP",
  "key32": "2HZofHi78wRUKz7Dv17NgLXeeJTAXeUKNfPvWzFPe2Vq5QoYMzJz5rMkxyWgsyR7zfMu5QB5WQzWr72voDSDoYD9",
  "key33": "4h1PqQSoKgrFLaFpo2ZeRS8Q6vvfRtvQrXetsnyzmvcvNMeCiCRjU3XL36k5FveMQbqHu4j1TrSqTCDq6yGMXQ7p",
  "key34": "4Dyw8YKzQ7sRS1bF93pesrtskr8c6kdCMsKFgrzAzKXVViPDvghZSfaJzqCxHkaxGVjfFfrtcJ7sDyAuAt7YTXkf",
  "key35": "3QatDfoP7vqHTa82DpWqroVCdPpUYFg5madyYw4kRNuBnaSLsyYc3TSz5YkSWQRGhDnQ538JwVF9saC8FPYGBzX6",
  "key36": "3WkFHNEE2t7SKzZAP4dkgs3dZcFFhK6kFuu65XJAtwPJvMTqVxaUMZN29p1qkDLL3t3M6LDrvGZi2gozukxt7pBT",
  "key37": "3U8V55rXht7WYyRU4k9QdPrtcYSnZnDcDm8dkQVAufVFATZkKHPKWnKUhJDjPvYH9vYZCzM1fRARUR2nB2wwC5FG",
  "key38": "3ZysiKhjyL4tCrpajMUBzP3VvJKXHUTmZEVHJzvMbQJUiYo7BwA6jQrJhhfAJRXdGQ3xeBoRdgXvHbkFS69J6VCh",
  "key39": "aN8HZkzX4ePqAgpXgufgCLpfyQTo9h8m1yBZKAUAnsCRnJJwBSqmSTxCcd7Ho1MEU2VQX8cNfCbqSFEpyNnnuCX",
  "key40": "4HnA29JfVYNaz5c4DyUqjm3qRp7u4ab4kDPhU2vPXHJeutMmApCEEpmU3whvRf2Ms9a1ZeWMj6mBnp414mj6eQM6",
  "key41": "349sAarHj3Ac14o44rHQuXC6d2u8zEW587FnyNwzQ5J6wNzKfCGWxe2rksjKjKM9xyTmKh99kEmjgcavjUSrvd9i",
  "key42": "2r7ax9pqLk1fFGK3YvgEySQuwMMMDpNyyBHdrxFEGHgKbLvwTJWDaA6wiaoqGEiEQiRZzm44pAoRxcdHfP6yC5of",
  "key43": "4zndzKfn3zd4n1AeknJL73Aco7jmtuFKu4LPczFefLbTgpXHVZ3GJFroRHLN8xrJC864uA2ZEhVHcotmKB3ahhCK",
  "key44": "5D74cQJLHQDFbdrcS8aoTGMbLnezUNA1PHtcjAHjiDTTKQMmXiSqoEDq2wSorVAqTwqRE1w7WKacCXv7rksfNHm2"
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
