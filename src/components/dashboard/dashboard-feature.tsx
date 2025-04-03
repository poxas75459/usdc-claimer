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
    "4Z1F7qg2p87zbkHFjaKYyttJH96yS8GFyuVmca4zVx8mHVSe47ugmtkvms79bcdio7QvfHf5PhkwLPSLo6MwTrkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63q7DDNnNEdcBgXQQHYWB8GnfWJEasyFuk8pGL43jxD6eHHCaR1hQzw3uDfjmnSv4FNFsS9cLAkizGiyzpNbYfAQ",
  "key1": "26gjfhMYh8JLLtBCKs9YF11XQamSXuKDCXAQcMYyE7HTpfKTze4rpi5g8iEtLNJqST7HtazknXMu47VctA3WKzyb",
  "key2": "2yyNCeNSgZDsj22pGhLPiqD8H5MVHwp8y8qFF1JwBPaxhRocEWDhHvBjfBKUdo579ELHhMGcb9bzBC5fMfKzdjbR",
  "key3": "ghdPww616DHY8NtS77onE1VJVvzxPjE66pDtRH1ACQuWx53CSQ3f18e7JZjXWqeeW52CwS5jgRmndF4eqxRTT49",
  "key4": "623G6H762Y1fxNsWN9eb3XhtCeF5Yy6S9LqfhaALU3AxsaVt6r9buetmQY81rvjQ8eH3RJU9V55gMjaLPQNtxLVv",
  "key5": "FThejaStenk4ESJsebj6QjNTmBnNhPUBsP14CrCu3HS9zCP66sUuk2GEJ6CjdGKiJhLPVBA3FvGYqDtadVdixhq",
  "key6": "5HjCiPaUHgqjAR1PaEhBKmPY9ckvQJrx5eLofDKBoxUdD4ZmEdgtyQFJmxktTGdPchu3Rr3ouYbk8uVNVLNwpC4B",
  "key7": "41SeYcMV7AfUYuuauJh2yB7FJDSh2CpCcMXwYJQVtvMyuwEgVbMAmMfopqochnvQTtvgidn2V6mmC7kHm3Cc9hYp",
  "key8": "5e9ea3mxBt91Mm9WBeGuwPf6v3xGZkRE74UEpZ4ujzFBWa2n5W5dRxL2twHGNppJXpdLW3mxiEiDYsYNqCdZMxpC",
  "key9": "3B65f6eL9CVNpRnRPS8cWS2DVUzAwxgWfwSzSWDqrHtgMZaaPzKjXbmnNe7Ufc82Xoqr3GH9q7vfxaV5qe4rSqz6",
  "key10": "3JnrNgBBoDrLg2Vc7Cmj6LwogLy24VGsztkEGgib9YXD7xTzhjAn9c3LADqMwQwWyyebxydFCCmjKAC3yAKUigAs",
  "key11": "3TxnZHEsNPCx8rag4wdrn5YJTeFpDWLZw531D5LVZMoE3avNu293ye1CVuWdd88NrhtVmNGsAx6JdHZTXCtFD4vq",
  "key12": "4UCduCDwtrK7MmwxB5eBsTSvCNoKd4MwKvxDQoaF89A4gs46Wc11wrACStoFXLYmHJCwikyfZ85uaXQga3VsyYxX",
  "key13": "5vwEYZaLxzvmNvCiqGNCf31udBmwPmFtexpmWcb4B5RgteZpvGLCBJWzrkcrpLbSQx85EAG9EcgLPUjUF8xz6ZAc",
  "key14": "2MR5N9Lzus83mzL7p6AuRWunNq8k2WCLAABNF9N6RtKakPmG2U8Tty9nHkgBxVsyYrH27Yf5nVwmURmZqLBNZKcm",
  "key15": "32M6FDc1ZhFRGQun3NZ9t3P9ZpQTPSEJgzPfSgkXoSt5b4o9Qo61GpP2HGnuwfDjcHsVyt7NwSX14eioeDWddJjP",
  "key16": "3rDLwzMF2LKvpAFUUN1gyzUaDrAQgKCpp7u7vVJYLGS9Vxj2y4NsRPHYkLko8BV9qetsPYjwCZd69FmNJjWwu4Uz",
  "key17": "4mkEVAWUN9MAbne4rReST1EXWitDdUL3MZa8gVYyDJVM3EUcy62Ew6XjjhE5iBK9wp1M5BTS28jdsM64aUWvfiU3",
  "key18": "5P4aQ59z6NuuPJPtbSSdHipddzUWkaXaCgkbgm5rmiymx8KTftyhfDZiGbBiyKhkYjS6LkmyfLVSgSuNEtTdjcX4",
  "key19": "3R3g5Zv7rQeaJ39QWRhDupDuMQ2wMwp58gk6vbVHT9wwwUCksVjzZbehe7BSGWhFSUBYbh3qenNHryoBP9n2c6Y7",
  "key20": "4L7yXaunoAdEq574QLwkccQuNNc7c4HXe4vQVegrkMDExLSPhMXRfSbHGe4sNboVXjUTDRPmie1a6dirUgd8z7D1",
  "key21": "4cVBmyCzDs9QgMFwWT1PHUufdD9FrwZRyCWeG4hqHoG7WegZnc3ceUimeP9kHG8gXTEjrCGHQrgGUZsXViSTdCNF",
  "key22": "3Hw2aQPFuyjhDyCAzkakHEW3JGrukRv4xZpc2HYu8zrDdXTxPVyLVdn7CWUEPtdRv3yBPooH5yxfADCiUfq2Uhfa",
  "key23": "2QShhEYrhCvouLBgJReCyYTAhDVsBmjY1k5zs1SNsEv3QAQBneNrx6XDUnbKqRB1PUk8qmuGtv9jkhmKf7ERG4QY",
  "key24": "5aYqpnXppKjiq5Dq3aCib7JwMhNc6qjqs1zoQbiYmZYTbrhbVBYNn68h45GowVHzeipG8ByWrU774LwDtEGHNfJm",
  "key25": "2rP6C5sgoFLkqFUT8eMbDQSem5idroKjZ2sLS4UErav8w8dHcwo2G1URtac4dHdKTGDu1M1T8wLEh1mpMRfd5vY6",
  "key26": "3bDZHqWmdsSEBGHJhiW1yaEKz5DeFXCnmbnA4rtsW9R4gxhLj6da92tRGpCaiR9TKgpLSMfiSVwvFnPnirFWGZhm",
  "key27": "222jgkveRYwKGFPJWCeXiVSkp82RKLJRDp6w6SJ35CjqL4HPadTDh6soDaKTdTmuCYLEPLTQVmwppVbDQeDk5cMd",
  "key28": "2rdgcZ7wzJS3sxMqU4FAdTeWycVXeFMRkuAtAzTbgU7NH18nzFvPpugRAmSu2dJfFtoeuDLF47ZN1yWwoiLSbSD8",
  "key29": "3M3LhKM5yJ4oVNj6KX4jSQC5DnKKdz71PimvGncbFJjTP6Cf1fKmKK1bbo82iA7Xc1pevqaoa3qHv3PxsXj7WMYn",
  "key30": "4e6qpKBy3SKY6LxvrFhuYdFNkKcDLQFpdCznJwGNZWbhKhT6LUVtd3gD5Y3KY1GKaDvbY7MNDvnmkeB8YhTjrag4",
  "key31": "3pTMoBrD9szUwdEaJuD3J8GTzeKLrAKQYjCxNn4T6eap7PMBjDid2Vr9SPqLyfvM3yKv6prbhUcxgebViWshmQs3",
  "key32": "34XUfFq8cXbZTjRQ3C3ZH9PVFkVDfvVjgYwmmPqUtXH6976U936owMLj1M2F6qkZQBrdZTxAeUkg7DPmcw2NyuYM"
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
