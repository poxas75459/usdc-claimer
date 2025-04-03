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
    "3mZ4Vz2XDQN1bGghnYL4Kqimfx1mBFH24D4gArWfSbK8hgAdXcDtCYBVzK8g4V4YDmbEAzKYqxJR2uR3vTAjQE2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKWcTb2ttgQbprkdxTt3QMbUorGaeUBcQzEsj3YJrZxBvggFy9yGxGsGexeGyzra3R7LPk1AiuQCa3kjda5Y7Ms",
  "key1": "3PWRfxMbWFCiwLQi5ZcwirAfUSquHr1b6nw1av44FcuKcc4ouRpfrfbk49gMB571ckgNueMdih6b7GRquBGqCx9v",
  "key2": "4QrQLwi1vmMtkff4r4cJZt3jpLyAyKRjiuWfwtLfk16grpj2Gbe2mWHv8pGCryTMt8abbh8PnNq98y14HB8BYEiG",
  "key3": "2dHqq7KuWNS6ZibHsFyWpTMm7ah4cV4zAAw6VbW4r9y3UGY3GYNJZkAbWjfk6fEQY6J68xhQq81ZTvMk5hCZVpuE",
  "key4": "2FvnjJYXnTj3KAgnDARWHA14m5oLxQmMr4KRtD7og4Jy5xWQ2vsQTuWHmWLDk2Xy94fZHke21RNufBFK3gQpjxtX",
  "key5": "3MjHoXPUTtrhbZpzLvoU5dd1hbAMYanvFnXaAzRos4ZPn7EB2APupNfs4PQALuQWsqcCLPm1numANVMxS4BHHm9w",
  "key6": "4G2WUPpecPG1BuZxKFFJaMV9RipEYytuKb243oH8XbeA1u8Rw6MQMxB7gYDuCxpEvnMCpFMcTnr4ZqVW9TjwfRPw",
  "key7": "5KQxgZJCMXs7pGko56o9aonfHqDZCzeprHGGCgJbanYBkMorifD3aRaBSJ3UFVvEjbfzWNCHFJVNqtsQbLQ3RBXv",
  "key8": "4rUszeHnj6ftfpHCi6GQnMEAZHAe5r51CswExLHCFtjXRb6AYgg9CuUoGvkRTZzJaUkyj6TC9NQ5z1EMCZETL85i",
  "key9": "t5KQqH9M5aEBEroEJPhhUpPv3sF7X3TQAHj2MEKCfcjKRpPXwYk2ADNitqvHQRU1PKBnwK6NgupBKixDNByxPmR",
  "key10": "46DKBBAGaPLJQFKLFmzRMAdVZQHQJBLRfFjmQHantm4HfBkkHJJa7DdqP6NpYD2MJ2PDKtht7YSxFgychYRUSTLE",
  "key11": "3QCiWjCpq8YGsh4MfH3KrVKWeDUPFjmXyXQq9QfSgrcu7qqkBVvx4HFkf5upuPcyUht9RJjtccRsSoFnvPDHNZXv",
  "key12": "3FBkd8FvHYnMezeRALRnQPCR79ahAWJKSzsgAAQUsQDYtXaDdeSeA8wbVEfSs6zSjGY5Jar5h3JuNWsHtPjU9QYi",
  "key13": "2TBxbhaS9KjkqH2GSTuUM88n3ott1xcPSEmroiaGLbExUyhdA7bLMrHn1CeCoZ6SWmn1bDRpiZ2D3T2kW4qxs9y9",
  "key14": "82ptiC4Yndy6sNJquKL1niUtPZGCDZnC87SLfJQgCS1WYGCoJwH2htQWbu9ZsjxEbaz7zn6mKccRmd2yBNuyZ1S",
  "key15": "2iKzjHoUkRLzU8YBftvDf1sa5JvzekjonxCuX6EDU3DPDqASEqaxN8s8bHex5krg9GvFLwxjDWqQT51dy26Vctic",
  "key16": "GaZY3sTaVepLXwe9a3hdo4WNPGCMYHr9hMySR9Cs93g4Wuo9ujzv5FT4VpGWx52dDjew51hfpVZ6gwMA3mZwkoa",
  "key17": "Hjx2xT5suAjYFJMH4FDkEuekZYJSSC3czEANqFhtgMA9UxenkvacyDq1JSF76KTNsAzeCaBGmy4sJKJ3DmcT9gK",
  "key18": "2xV2YNFEmut45E1ZnpQkmyrov24VP67NzKPgGdyvVNZpCZ2zxTQeNyS1XduAmY4hrMXoqt24FmKk11z8mETnGC7a",
  "key19": "3UknK4nBfkySXYmagq1WDpPBE9GM8xSg7QBMCDAziQzWSgBu3isum4C6SLpLc7DfTaTB4Zpz8gWNURhXXHriKTuf",
  "key20": "3MiTzSyw5dVmy8rEyxRzMWsAQuwRrx6qccmeECQkNXqRo5fe6iy9qRgw2YZG3LGVakEJ6hjeNXete8iZHHfYaSF1",
  "key21": "3kjqwbfATm9FZEijLYeehEkTki9kkrw1BB2cqy6eMB5PLBDoanbm9T4kKQpLbxyv8ChgKe3z1pAXJmXuC6h1MXYp",
  "key22": "4AYeqgSnux3p2hgU6rcJvgZfp1UGxAmWm7PzL46GJTXaRK2gGrAY2zbr9zMPW4JSsN8nkL7bh1ZmAeBxJELDGfA8",
  "key23": "53GeeP36fCWYnGcZPLhHyxyRuGEdrT4KbeMgiEuKLsPuQ6PbaKTRvMLHBET6sihMrdGgnrxeR9CJJZbJG76otUxT",
  "key24": "3hCtr6T2xjNXC7K5nzRmrVmkMpqZ3oQpmszqy1WDR4bjoHM9eNauCiWTFuuPrGvA5dV9U9Yrw6SJDeMpAn5gR2GQ",
  "key25": "Cpcg1UyqiDqUs3aUWuxUogQ16SErBsUzaRRYH3FNRxkQ32LAKdsqzEb2s1ejE3jSxsyTkzycamxYLNCeyQij52C",
  "key26": "48sBYE7i9V51QUsHtHmb9kP6AaLYJae9NbUNucJwvHPq5YztH1WFEUtXXhfrZvh5Bqqskct5xmgEp3CDd3PUWHuG",
  "key27": "4YHaRJpw38GfyTxD5zu3pfrAzcJjUdsd7epf2BkDPmw8fHDr2nvtEyRpAVKCJWSCuWRix8bXPGt2abTT6iHJfVHQ",
  "key28": "61C8HvAx4qxbfqrJB1cySxRcvxb2uigM2h459mcQjk2GczKHp9fFwv74z8LAFY3echd1XwzbQjjAsVGc96qpVppQ",
  "key29": "2fTRpj2RU3ca6iZG42GiKn4VB95j3sEuki5dTUK4aaqEEpjFieEo26LXr6m64jw6oQQ6fa9F2zjrvmMmAGrusBMa",
  "key30": "bG3786tP8CCZrRT7CmjvYwjr6L7KPYphF1si54HD9SrEM32VsqDqGRTuZLjaa7szdcZH4k5ZeTGn8yx36PNAJru",
  "key31": "22doKL9V8bceBseGSb5SKmBBb4gUvSDNBv82aQmYeRCd4MKBBET7hQLU8tm8PPLAv8fPyv6PS6fT8BjR1Voz29tA",
  "key32": "5UPcokvk4k3q3DsVLh8Wnbg3YQ8LjjpiCxAGViPNwRmfiVnUZhU2QWF3m9gBCNoNMqHBewQaqkVmvC7qdWm2YKvQ",
  "key33": "3j6MVpMFLVKMN89xMEex3DARgU5sM8dJT5zQogoZNNY2FUMVoQEn5bEUpgX7NYF75Ux5AGMzjJ5urptTYELq3fC7",
  "key34": "4Gim6Z5DEGPuoAg94TcakEzeZZbsLULY5PHAE4MH3Ei1heELvzhV2sagECrFa5UiPyKzbfzuotgLQPpNFeiLaZ47",
  "key35": "5tkCdC2q1BF13kzwAYHKRDrKgnUNhSGTNLx9nxcKf3URcdoormjJDEt7izDsJEGVNqyvrtF1m21nFfCaG39nJWvm"
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
