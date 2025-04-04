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
    "cwUPEfKG6zJDaYAUMTZYiMfRKRTa2ve1kDXkS2FCYMryo6wmvAx5iqy9Y25VmZcUTRbejowj8nVtZzRw4gWymeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UUF853Kbf2rzCCSj9kt98n9cXWAaTnu1w6VskBskqChVw3ttLn6RB1E7ZqGCp4KwQVpTbizTtSSADSQrfmChERL",
  "key1": "2JGp6uHQDZ4JGXnaBiPB3LjMbjTKWHSXJrMASohZNiTFinK31o8mEbCKwF7m9D8sr5CnuzXJJDHWjybDoebnpHz9",
  "key2": "2sX79jxbfvLqbBFjNC69jTbfSVQKrrDUW8Ye3cwEjq6cd5gXdErrDnKzwZswWKqXweZSd2WgdnKrgPgmCMyoWhhf",
  "key3": "2W4AsthyAKyq455jDZtf2DsBhzBb2WsZReHyFrqsX9kKDRdRwTzVo3NRCkwMPCbgeT9L6Y5qgiEMqcSF2sNmLERr",
  "key4": "4cesXG6fUDXqRD8X9YVUZVNbtY76bDHYxVhV1paMZnoLJGbBQJiHJm9Hi6ugXWZ3EhTgteXjkN6h4uaQRpakq2pb",
  "key5": "3Usifn483nNEuzqB6DhEKshCBbUDZkBexHeP8WVHBTeXhV8v8W92TokBKeJGPpDBVfLkvTsVdChQTZVpoJih7F5E",
  "key6": "2X9B2hFRBCVsHXsnG13d9WwTzfdunBa2rEJmGpyZYyLiYyHfDqKaVjE1KizLkuqvcR5W7S8WcM1wFsXZLR6UEqoB",
  "key7": "N4XzykCuANj1WQxBSFj54SXRJdpFQRvNj6UyPCqtHMe1yRXfcdug2EPEJnVpECCRgdNPZwiZ7P6Uto5pkfJskTm",
  "key8": "xCGgmVPC3YMU41k2v9xMkWvAxC1N6cpZsjoAqfosssd6CJPsbNez9SftuMgFEgfxHGKJsXVRh98Ka6zUrDNTpao",
  "key9": "3HmG8x2TRr5DsHLQixasdfkQ5eNGHPsurX4TiW3wzWuvnhe699VBXDjgp3iLcc5YEZ4vQGxarkaPgfu5KDx1N2dN",
  "key10": "4cEruUaseNbscMiDaaCimtAF3Yv5FXjRfBbfew1LeG2CRuPUms6KrebsPHcyAmpHtNJpqHep4B6oZtSsvpcBViX5",
  "key11": "63KcHu7w46LwZnxqx82TjV183nsj8dSDEfwfXmUdK1xpBVhLQkJs54u8LDrLAzDyH8faMo737fkUjRZtD4CTE3Fa",
  "key12": "9GW2XWEw2wzvyr8VXxMP8Gs19y4MmMTboDqv87tV2tyTCzHofftSxdrGiMw1AFXCZx2YJqZusSBfN7Zn83x55J8",
  "key13": "dJFRo5BKu7HPApYTPAdkqsgN4Tyon2xYiMbkuEx3MogWL3nUyAeGJx2WygSvbuqD396txRH3W629YJQKD4MS3g4",
  "key14": "4z3uSMCgggBi2dSN7fmGMhrYt4dckAZUsyJrKT3jvMZznE95gGpBBstsDUGYmTRkjJQ8TGtx9zZhstxUmL9N8j2J",
  "key15": "3Q9YvGMXW1ESn9jQNJrHKS7J7hL2bdVKWSViEtZF6pab9k2RWhWTKm3aqnk9QDDvbF9dMDRUBd6M3pXQTm7kYJFm",
  "key16": "3VZ9ANNK1t5u9s9eUJwG8BZG57iCGXuig8r9Ay5QjYVWmQAPXcaBLG9pxSu46CmXjBPfeZxciUoHgMhHtHKsKedz",
  "key17": "2jUFrD51QX9EGsTrWQ4kcbfhZT9vPyBWxNjfyjx6xUdia8DoPXM2fKiJcfMzj8NpEfUhMjpTL9ahGn278DMhM3za",
  "key18": "4ZnPuQgYVXhVhnQLetseHmXwKnoatfujwAYryeApneRtg29C4GsvbyHXCYfyma2y1BZhjwDM8R7b5rJZveDvwXjN",
  "key19": "4PyCxwFYcCucfx9ei2m9fvm93oLU4gCe9KRCQbdnoAwTZgr13mXyp9SdrRpEw4EZNpzJs5ZL4kzT4s84xDSNDTea",
  "key20": "4TfoK8hvhu7refrfKmbbowzkm5cTtBDRsbLt6kwCQDHrmevJrHG1iKxkLzjQ7h2ko5aQXXrMKEMsD31idzT6Mgj3",
  "key21": "dy9VjAJVFHpBHeL6bs7cteq1yupEma54mzLFkhFU9ZeaFdhQerpUP52pfX5t2Mc1BmG5L5LgHEFgiBvaCBZEAHV",
  "key22": "33zh1sTg7Sp2q651TxbCfmoHZxXtbBK3VHBAHrBbNPgKwqxYGWhd6qnzynvq9FqanpTZeQiCdkeDRrjf2ir35BQR",
  "key23": "2D6bNmosPEoMhY3gjhcj8ysuFS4wcrpUGGr6HmHtxPjUDiy1KLqfHgBC1xY8kZXC9uJjpzMZR9hQxZs99B1datMH",
  "key24": "2HxGy5jNAG8gATPMQpxxqc6hkfTGpUTPCZhzntvBdzufmWTmf9GopTF3PDyGfA3t91fkWP4AZZVhqkDDqHEKbP3L",
  "key25": "2a2SLfzBee9511DykcoFNdobrLY6zyxEVbWfuio2d5c9JRmVNVY3d4GmBVWUWb22JycPK6jjd7jRachHtz5KjgN7",
  "key26": "3BwtsxaPJyVe76fQXQs782WaSGTdCjeEk7sNYE69wECFwNr1vnAqksaxEQ7bsysNjsuBBwnm7W4tkNuMW8exFkLW",
  "key27": "2yBbDBk3PsGQvftREVULSevTNDihoUWBuiKcF68pjwvQVbNErvSRWdFdEXubHhRPNwGqTEuFEbhqpNHepSXu4ztB",
  "key28": "5RFSN4q8Ei9KgAmiPJWj9fdnZeGXwLUNmScaw43yCHGjP7PtVbJCgY7W7in8Ar1RvpwMHbAvodYoWVCzt2Z2ihq4",
  "key29": "vugJdvQrqcMGKWtnpW32dyY2n3RDjkoL23aisHvHTG8bu92914DKiddssh7TSBdoaXxHgKZrq4rs9EK2T6LRxvX",
  "key30": "5Yc8kBVLFZhFffcfCrBLrDGpBKwQzPJwEPFurehhKV47XerqfksqsUuUzf2JDBVU73Y997VFaqN3W7XMkpdWrReg",
  "key31": "3AHR8qxv3kgTKw7RhtJYgyAsvpeURDSCU9q83g9uso7M7V4G3qCnGgTsV21AW4r8aMPhSHYddhtiYJYm7pWLCGdi",
  "key32": "63NzLccKQ7yLaJKQmQRneqXdobTYY4MBQhmw7GL7gRwWHJmhMzvH5sfiCGUUQaMUv773hs6HE6S48EVRU8mDbdMa",
  "key33": "2vhqsiEo668f2EWPCXgujjd2BcoUwMk8GndYdujxC1RzJ1bg2J3dLAb4syX32sPRmseoEk5Dukqu98h4qYHpX8WQ",
  "key34": "5pWT8to7NqJFThSJFFU7h1HNe4TxKVNvButeUuXDmPRNjL6MbH2Edr4Bpzd2SuP3Rc6BdU6e8eTv7zMYdZ2oj5m4",
  "key35": "5WXLjZA4EHZ2K4pkMfFk1m4sGbvzFdBntcwbwg9UKZAosn58g6C71pD727LpVGAZt5jrYBf3sfD9gcDsRi3gj4zx",
  "key36": "3uv7mxyNj9FiWLknwakxQ2yjSjQfHB48SyCXtP9xQmPaZW9VfsfeXcCGLSz79cfTGoZypXogPQKLCT3MTneBsNo2",
  "key37": "2srRBcK8AGWgGdmosrK1wRkYojsJYjTM4K9KKY5sN2uS25YsZoxsaqtQTt68tt1zjHWDJMjfsLireRqK7KCgbDcS",
  "key38": "6rhrZ85m2PnLdRiQM1rLKCPH5LTbeTrNq2vCWdHjRSq4xFDoPCPmbjrr9Lzr3z6qhS2osHY9vHeHy6ZxFijCmQV",
  "key39": "vcFBCgpqFWy9dcjqjmUY4UQbdP5AX3nUBTmJikKvwr5YJU2UdQqd8WkuyQGn9aDfQ332Vwv6XQELCCMph8nD2Sc",
  "key40": "4Xqk1a4X1LvTWT1EJnr9EoJRUAS47S3pGwe7BsCdCdtn2v5zrgWjd6XwcxfdUnTFwxWERmzoN8PF74LbuvBeNaue",
  "key41": "zhxFfFdX9VMGcnkTqLwrH1oKgGEt2dXHHmxy9NJxCFpUErKr69kCzRHAwN7vnAX3zBuYBJDnteygZ6RxhQpEh1R"
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
