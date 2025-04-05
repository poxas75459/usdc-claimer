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
    "g4h6JpuJaPzMnDJuXGsox9j9duHpgrLBosFkq48EcuGtsMH5EefTDJjHxovJ8TPLr4EBERAu3edsFMrDWHLmfaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3CvFt5hyaroLpH7qyVUzdJRJcRRfaiJTNEWieaeeTajHgAeUZbe5BXQbrvAXrZaJ9EPsfPfxyNY8V4UPDbzCpV",
  "key1": "5FEqg35sXbePxf7GB59azcWoG5Ux7JQnBco9WwTdNtfUzkDMNYkAERxG1Etj56wJWutBwQmKLvpimWVU1hLn8gHB",
  "key2": "Qx5XmyTKkfzB7WeokC3R27vkiHAjJgstvxZuCYtbwAemXghnDufDgzLCNZAhw6o9vYC3rtSMtsvTZ8y4nRCkX3A",
  "key3": "3ordN6ZhbDLeRVnf6sp6FSKr9wLMnVpocoVK6N17bNzWGuwyq214H14dFFpgSmKbpFxjfgR3yfXAE76Q6NzxsJmy",
  "key4": "5bH8FAuUK6YyKGSubkJm5sv9Zxek1kpJpGi4VC45jmyV1bo72YkG2RjBGQ7FrDcPznAQVSjCQK8wDaUTBNKXjMA4",
  "key5": "276Fu11nxnqKxBagksUvMCFnhJtotiWpP9LGqaE7pk4nMSXQ5HWXy8iZVHnNdALeQAbxaab2kLg9yXEbutLXQ84o",
  "key6": "4jwsLyi3puQj4qJW1yqwyRj7213HNcdG8JwhxFxqm4UySsasKWAscC5UQXnbrJ45Ci2EYeAQBD4rD1zYwpmziosb",
  "key7": "KNA3ABvT8QDmnL7PzCKYpdnBymMq7aLoiVvUBmYfCtswUhoWc5iRL96KYeK2anHhcnmNZteBjc87xQye489TAQ4",
  "key8": "5yxDG2SiUzyVM3if872xVmZRzTAzM1x7LEuiC9694jmPgUVWPX4tDzwUGyAaQuGadyq7dWqRy1MkS54h3uvNiHs1",
  "key9": "487h5YfB63wdGui2Wde1rzd8YdWXa6doZrAvaimsBvuv1S5TjVaRokbi1Shy4KGkMcQmidkGLn5zq3bgqWSKmBfn",
  "key10": "5PJr8C9NxybPgy6qTXfJVkwj7TvY5YHp6PzC2Ytow1uuhZLxYbNiVSA6CtoZcUfSVnMnB4K4DczZTX71HW75zjh7",
  "key11": "4FjFJhBNfTD1Q1xJQerpvp2J2QqBNAUK4yJmR1oNt8w77eQ8oTVj5bo34NteZHenKMP8Mrr26PWwoidhvyvn6iko",
  "key12": "5sJBuiPzwmRKUJLf9yojNczPCMkXPnpaqWMN4EEf5ctTLn8jJJGwrC9xpQibCM6McWcrK5pZ2ZGcVP4naKxRr3Ne",
  "key13": "7ggMG4iR4xZTCM5bVJ6QWRmiGW6bLBUPZWLqdVgr7NqgWugmCV9Mao32UrKKeHgMjFYgCcrCpot7thDwbsPQ8fp",
  "key14": "4HdMfJMA8XNcKCFGp7BTipmZsthipuxYRnEBjpFwhLDTKVcyawoxuBPuXEYxQH7fZN4HaQiGcfUSMq7H4q348Dx6",
  "key15": "2kYL1JgBp64HcpjAgQVRvvrDXqsQbkou93hbZZKz9VtkRm4BGdtdkfxwwU9UqKEvRFkk3WK4ki1EgBrpDQXD193k",
  "key16": "5P1G5NUs3EemPTmouYgwU6yB24Gn2Txn1cPBaYGxEfUscJRRhgBEPqSB5GRdwY3NjKtZSGBWrX5btDJ2ueCJQCNF",
  "key17": "4z33ncwdwjjWiXDBsRJ4mqXHUmFB1r3cLY9zxjEMYcAskKSoh2Bqm3nFKbuCYtjBSTz19MX6dfDZYsAhkqxsxecR",
  "key18": "3nHfX7e1m8hNVdZNpxMw1zqwycZG8Nf7P4hcRvgYskwwx9J2EaAYvXe8PQwUjm4jHFEa5F2HiSADSCAHJ9QFZSWL",
  "key19": "3FP1wr6CJzPFM6RthEGBBm8CJvQPhFw9mwcjHsU8YGHtPiejgxUGJxEfuJEuivbxXvnPT7SWTJ6KgTMZoPZjT9ea",
  "key20": "5HaR2vzxebLLxsgoDbgVZNraokMYmVAGFesX4KfWSW4K3ubhiVArHq8thwuYdFj728mQxCPfENoHo8XWsakGMveP",
  "key21": "53VAXYmHJdMBzWMVNhzVQgqFEahVyCxvUXrs1mUC4gFZwJt1rGzNfcQ5m4Y9Ugf34Zj3q6hV1o7kkoXMQuwcqkwb",
  "key22": "5dYpH9wui63MpA3W8Xe4fwgMeVQKsmLLEkxuTQMPa5kJbWKVmhsH7TzkFbRdYrK8KY2neDxYmPbnd4C2NEci6xxY",
  "key23": "2QZSCfrd2jNPWGVA1RmWNygtWPb6NY9XJwKJgnaCXQ1LcjJWfcbACkgFntqs8gJvdh1N5qExfy6CAwzrhWUb182t",
  "key24": "2gtCfi9muMQMSU8vUnE9nhuaRWPmX2YJj6Rp6LyvQvq9cbjhsPAF6rWMWNRUVydF2mG81st5HSNd95qsMDSxZiSm",
  "key25": "5DUHLEwGEzLKZEWWhHdmyHgpaswyZh9GxRF7e5qJBbsMfuEGwjBBrhCTxUPxyADsuRdHEVaDoXTg7ufpW5F63DQB",
  "key26": "4Y8eiKdz3HbQKJhBjcW73hvtYnYxp5XB8VH6xY34DMK6ieueDav7p36wJaQpphY5N3FdaeEmH8DEuNcRP2VzFpnQ",
  "key27": "JjuzRMnABUkT3Y9uByH2hqY8VmVoAU6XCPMVB9CyN3jZAPYPKDhVDp7M4PJkAc1ao2M7M6E4auCQKR5RGuRi5mB",
  "key28": "5UpxB1Tui5oaj7PWE8hLRrD3RenwESzMFZ4YJyiVHf2sBAHkce3rQVkt4PQ3nxJYp2F4whJxD1qPYaiMFc2NkQ1D",
  "key29": "3GJ1RfusoDX9Fovde4LzHHYuJuX2xDyvu1YAgnFt4kty8YuWxoyQz4gBwsYSPuXn9mFhoxhY5j7X2RbE28h4mYwi",
  "key30": "2MnoZPGi4U1GNNjVcjt8d1y73aMDcQwqeMY8PLhdGgcaLtG86f8ba6hB8BcCgtP6rBtW3v87aHSM3meQzjAb9FQD",
  "key31": "45AghqMBAdbcHECfG6n6SC5tL1rmDthRyaGGBLf2fyEmgPNxwT7hU1dfM2t5nc1ysZxCCXsCn7nLSBuM4kXHr6D3",
  "key32": "xf8hd7rHPNNp4fDUTBuK1H8SvZoub8H4EHYwUdVm7fK1Q4JFWqKooTmfrNTtU1LgwVtLiXS9RFXwmPtqKt2GUk4",
  "key33": "2GXwjrgwuXFEFsA96KoGxAiiNgqUYXeBGE1xaZoiAvxz11M4HgSuiSs9dhVXpkX7fvZAj79RffdD5gctqZkk1XxR",
  "key34": "5HWqLxzKWLZmoES3xBk7E4cj9oG5Nzb26Hq2FRNJBWZeYNFiyWj3fBF35BeCWy7Wt8DL2FgGxoitg8aLgBh1KfPx",
  "key35": "5foWhdJ9xsKEshcm1aLjKbgRBKKQuePkCUkaupcLibJRAuWjqDtmjr1piSfA3g6hNzXdZkve7YUXWE8xdRcPyUDA",
  "key36": "23QuQrh1t1eAPPuPm8vBqT5BQtGyPDFUJeF4LVFETUNUFk3iTW2sXUeAHXmQq5BmeJ6zxNyMrTX23hrf1kxprEXn",
  "key37": "wEsMsdYGucZ3A4LS6sp2H8sZnupgRVHjZaYcU6VJVvnw3tPzqDBvbCCbhnDiUj2M1XXURojdK5KLg2jsbTVoqmC",
  "key38": "5fXtvnbrSMTnwzwYR3fixLgjhx2VcLgv416a3YuoZrHVBfTWF51Srwzx72ij6iuoijUmafGGqPENf4s6rP27rits",
  "key39": "4zG3Pwxf2QSBnxK7iwXED28hFh4yW6SDjyr9qNmc7a45JDUPzJnbSzGpbmTNPr4dCzsWJ57JQpGvZSoyCQBmyuxs",
  "key40": "3P39rg9V8T1RxfnyJA65CCqHxh8ZLpuYhKLZRYjx8NKjdLAaweeE7XYwqU7LgbLCY5La8XckdNvjXDPmNFCAPRun",
  "key41": "5i1uHEeLV5dMCwdu1NC2BW5Vr6ZgYBJub5N9omaeH8VniR6syaMZeEX1KipxbzuY8ecspiTQ71rpFTTTcHMjb1n6",
  "key42": "4Pnz9V2hysQar5xUrMN3hFWxSMB7Trz8vYFqPmrgyYdF4BmFCs8xTQ9ErAvW7SuzjpKKsbSxTLtDYCo1WMDNZB72",
  "key43": "5x5owU49kVTvRX8dot4UFfNo1cXUTbSUkyULsaVgQmLgbWU2wvNy7b39jayWQ8kAF2f5dZqNQzXLqLw1gqX9BT5a",
  "key44": "2Sbh3J8VPQesetYoq28cChwut4QRtwmHnBDsWQGJZN4TWiu74rD1PZrYVm1fPLyDVemVCixnqiwsBgUvAijDBPTk",
  "key45": "3KQYQEjhC49p5Sj6mhjDJ3oNAW2xjtaQoyKgHUDKHVdZgSYLPUUAXVq6gUtztZeMibZjLn8SN4hgXxUCuwwsuYmH",
  "key46": "DZB12zT5FbJwXTQuyzNL2RMAgpTgpR7s37qsbHaZvpGFwPFzMGHdAcYg5uxHrPT4sn7w5Fdo1nhVxoi7Qu2ujJF"
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
