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
    "63FPbVc3hV6i17D8rGBmXtVGine8EGLr7MZRnf2cGqQrBRHrWT63eB513iExB1YPeMy32HxXsUJnn19JmCvRHP8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dniJQ1f1ekki32dJvSVBvtTD8dC6HaLrPMhwfBa6wAJb74k6Jjun8v99zjo9K6xjwxYoLwsYfbdh3C1h5j7iW74",
  "key1": "2WAjHMJjThavkNmXFE3a48hhiQVzxtRjTSBm5FKbmcmf6HUxWt14nPpdaFvoFPxSPYQ4MkWUTVPcATYU5sFMzo4Z",
  "key2": "4gZBBq8Rj1ZWVs2SHTQugUu3ewkhougfM3SvuA8SzkX7Qdu46VwYyda8JtfAydX9WYBh8uC2FCZoosMYebpCb1hN",
  "key3": "3bpTRpWmgfmJo9Q7rPPFy7HZMYMi2mCWZuzNdMNdVbhTyydLUdRAxjyLczVesCJrZekuu1k1yobpPDC32xi46MEz",
  "key4": "2xgAjQ4RA8xfdiYUhUcNZRuLBJQU1ey4YVMugNVQPDqQ88eqMu11swNPfimxiaoLkSD5iaQJdUCd1Mg6hxpH7Kvt",
  "key5": "64G3ERpmAAHTD1JS28mantm1H9yaujoECaLAzETa4wzouZYTjqCqtVnv6tBNdG6n3tqWvotZhUYFCScfsgunAvXa",
  "key6": "2UVYCdZ4qhqPE6dUkc8JgLHaLTtcSVv5pFQRVuUbsWryuvN1LUQ4dqWGpBqNUa1Y2pqo9WJ9FZAkmHD4xPPzSZ3c",
  "key7": "4ZmugeAseBm7gYiSru4GFVaeLk1o3QQt5AG1UgBtZcbH3Hcgo6m1ESi6Z5oGBtBgSp7fjgEa95bKGQtWYj8ccLoQ",
  "key8": "62zgb9MLbLSR8Kam5ZQvWjoNkZPorEPLfFNNLWrA83w2x2yPKhfC7NkvVKzfLLFhnYqqVYrh9dBxbGyTfCDQojaM",
  "key9": "zHeq772RcJh1VC1do9Vj7AY43WXnLKpsS9MadpvzXmtB1Up7vUJJLDXT9ug7nA9csNRjrMWAhHUUjz1ZDxwuJd6",
  "key10": "4NuGuSL9VnWeGLJNXMLwxp2X7fKt75Q4bSnVD8cQYQu8dFj8y1FKdn12P5zwLeajW3mgwp7VontWEAQfM11Pvzjo",
  "key11": "3vtdLPpLBytxKHfc7ToAgn2ox4B1DW8nJYVcRJaGLHNkxyNfywZbnY3QRv1m4nMrZWxVJKooPwN33zdUBjFFHoty",
  "key12": "mqXZQfx3nJFsdn8x2Ydfb6qfTN3RwXBN4k9KeGjyjpEFXQoVUztJCxzXTuNPPuqnyM591BE6PKpbqZjuPP4D78k",
  "key13": "4ZeQmNtx7KAghUYY5CGXFDztQ3T1zDrrtfNv68KNFA5fTtwASgEh8pJYsrRqC1CSUr5vAtBrLUtMmidyNDB69r1h",
  "key14": "27Pw7WMyrDQSKije1yCxuYi8jju3VmKrzLPugpdon3SR7NhDQGSdfMLcudvhrJdJrrHW81RGmTd4rwvMqUGjuE6s",
  "key15": "5qN95ka7Er1Neq6VaQ9GCniv5bWARz1LUMa2w4kD37bFJDGwKWudVndv22TcoLhw1einViKGjuaauAErM16AeyZ5",
  "key16": "48xcyfxPnjb66pEMwdie46idsVrxhjDnXa91TyFPBYhJAXenmW1BgkbLifbRtDsYsVPXCZ9hicUoRCtmWzNxn1Kr",
  "key17": "3HVEayV7j4jwp1qzy7Fa1iuEYrbhwVMDKJfXfixz7C1hZVhDbnfd4hhZEtEvJ2kT1BXMXVGgXJvC7zbT9WeTWRTf",
  "key18": "2N7JCfrSW8ccFShdFwmcGe6YpCcn2NsUEu8DMskppFNssMyDBg2Em4w7WuYGZuTV1Xm9C6NWPGbgZkVhxNtSU5K1",
  "key19": "4sk9hKxZQbMmeDUYhwUkPRfeQDzzC5xWjQrBodinFgx7v7LjauBzuhxSV68KvYiTsiR66kjtGNFLW5e21CaWbczR",
  "key20": "vMYLr1NyXobVPVuB7wXA6GG2HFq2LgNd6iSfRGKT3dBy83n5jKvzQKAXRKPcF1hbMAoaFv6x8jtMY6HSnFNt1QS",
  "key21": "5AecLvXFZLJrL8KCTKzwQgmNvQewZPa3KuxpySN1mDAj9idTe5JBZBr7fjggmQvrSm51prwmvb3AckR5JZGxHZaY",
  "key22": "5hF3HkaWQT8phccVafnn9NQkxQU1pig9xqbmJ9es7oiKqXzodDX96SxrqWd4AVpoafpBK1wA2Z618y3AtHeYz2kW",
  "key23": "2ZQ6TdAmmdmskd1n3te6SRx5wK4aTb4kbSGFUpytcyYoTkqjm9HRwbzufhjSirC2Et1122i1icdDBWNM87mKBBjA",
  "key24": "2asEjJHPHqqSusaYP1HRr5YPPw4DAnDbAN4NtqrBvofekWUNRvC4vpvWT2BYuTMSJ6q4jnT1utJZ1voC5emhG2U5",
  "key25": "2hitbrFfr1AqsqjABfDLG2ewccgvtFtJPVGUKzdwMCCB3jaofoC9dj7Jnw3GzECJrxugxuwNWi2vAoZYcvoQKgyR",
  "key26": "4JLinKgUqkYBGBVFtNc7NaZXSGNMF47VvcmVLzc8bBGJSe43wwYRRuQgTTr3NXVvabwwppP6Eyag3ACpSNDRVj2w",
  "key27": "4a1RAY7yhSxeHngUHejeZQjAE3TixTeC4qTBxUd7EqYAEEwTPWJW7fUp77fLSSxWCAo8iTkc9VU6ifs512sN5rKm",
  "key28": "3S5GkwLWCjqKdU2QZLKQaJaZ8YnbTX8723RYrRXB3xnBzDvnhpDMTRut3UbXGzqJHsWQagopMynMscgRqomb8MjW",
  "key29": "5eaLbUQZ1NN7TbH8u26CxsKnfrdLCRxUhCLgHckFpQjbGbCgUqLgrHejpeAiwtuMtYkCYRYxrNfCo5PrKeQbecBS",
  "key30": "2T9mApPJNMN1VpyyM7dST9Re5EVRQRqDvGP1y73szXo5fX16eqKS1xZokYvK1zGQ72E8QgET1SW1wcgxq3MsZ2Do",
  "key31": "54QXkFaNV8ykmA3uyNyoWUMarV1rDKZTjDM71HGN4yQMtZQwW3RPvnYUsJhQF3qYzh8rGXq6zSiMpK5XwU59xfUj",
  "key32": "2PW8iyDw57fnzT592N7rnb5L9VaDwQmMydhJjV93giDEeeK7ycPhu8c1oV2uxSQ34grF83wuFKWmdTucejpdVDKJ",
  "key33": "4XcktxL9kFsCVzHL9kyYHbmV4an6XRoKdQNKvJWTLaCuRxQDAWxXCiU9Y5GA4s1hosNdoByz9ufTtAHbeBTiA3VN",
  "key34": "3rYgKakbUcAHSN7aeGSiVmEgDAhtGMcdMrKXdU4tBQZomSWgR28MiATUEHz1fdbaBuYenHRxAUHCcPh6o19DxBEs",
  "key35": "3jyszb6PepyzWgND6EGmZmwKYs1JjLaRh4c2ykmL1t1FEdKaM3nxN5t7qr3dwME6DqFVN2J4e64Uu77zPiVCok2E",
  "key36": "4Tw9eFcJhJc5pYAs2dGoDAKjwSDKbZGPaTYLnFkBbV7RS8kN5WAxC28FsbFZC1x7f4QGuciuXHci6GD3WDUedSKj",
  "key37": "4M5LAJumobPWWgbpp1K63MfEuMJ5g2rM4sP9UUQqjBNbe7ujLwZFnqH7Bzwf8pWhFPKh8b4BJ64LxKyMhPMurWEe",
  "key38": "2a2Pfuta5tJr497Gw4yCFdqWgSuHRRVu54acGY7XkZ8AhwtgsSjCidW5zYp3tGJ7PaBq8UjPYR7uecxm2f58NjQR",
  "key39": "3vmwiZfvbVakpURTyey3oQky3GZQpRDtce7ziNax8aWXLromBkwek972YUEKCJm36vbasSpBbQcQm9cbck3dWB5p",
  "key40": "3BvLqTpvPEuDD93Li19cab6h8uhBS7aDVTrLSNFknTvaStMwymve2QV5ePpJc85Epe2i5sSo8FSgv76S4Rovx75Z",
  "key41": "28WR6JStBPTxk6tSF49towG4AVwgwDQzpZ2HgDPiA7S1ocFS6hwmnZax6Pzz6pdqUYo8eURQkrQPgoprhZjwzboi",
  "key42": "5BDmBcJvgGoam67RBaxnJGELVyC6Xt9YmyuHBauYGKGF3UUdZ3j3kzkbMYR1jm1F59YdMWhwPqL9ZG1LdoAHWuzy",
  "key43": "QjRybLmGgUnLDgjMJ4MoQfHu88GcFkNjBsR4NMgStQSZ3aNtodg8TMnP3gqmwSDknnFGkGxbL6hD2jQiDNaDdBF",
  "key44": "4HJipi853MaHQdSd43DLdraaWNcpv5ECsp5pdrm9yaaVL5M9iVsVmDG8twbj8ES1TAvMjTeQRVoz6oYeAWo7h1eJ",
  "key45": "2KERjkXV4e9sN8o3gZKLpLcNHvgmFn67P3HRUaV4oGgCmFyGEyEodZZHgPG61Jcb7jYf1pWbBgS1QWAQSA2WQFQa",
  "key46": "4ZyAvVUn8MonZ6DRmWmMWV9oQfbDLs8ZhJYGnYmFay6YRoXEyGJr3exrQozHEeHqJt9zFpZ3BPHAtsEW5F6saNpv",
  "key47": "3634VmecJyyjhqs9VBsf7rRa1YvzsGmjmbiq8e8Yuw6XqEcGjp9YKoxHUsvWGK9JBQtFNPyLSiDcVfuDMsQZWBUm",
  "key48": "2rttFFWJuqLCjk8mnFhSC99S1YRTdr9td6JLtLb8WBpiAcz4Rss4i25bviAsHuheuRqHqaaYvq6PXcpQkYdyggH7",
  "key49": "7gNnP357EzGjUZAxzxJNsGGCuPmozGUfv8VkMzsPh9aFaWhSNPgQ4Bok4Gb9zUv7HkjG3i24oSCmUd6nGRJJSgg"
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
