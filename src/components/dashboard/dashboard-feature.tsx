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
    "JeorfzL5vuJnpzFNMgTCttD3EsCpjvP9qGtanppoBMt5E9f2rVEQTTqGcpB4uXUEiRmx5TzV4nyKHFUsjCZqaE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ziBQrFwBw7QiLRE5vrWWBNPxrctehAZxST7ok6xq9c83wJ5vbRV4Yx24Zmk7YkYQjL3MKpnTbYu16UdkbgM1uaF",
  "key1": "2UsVr9EfMF5ZXEjbmpbYZ4LQfSpkZA6Qda9TWvskuuy5ELywjPWSbLCCtkNMyGqTYPdn5ZzLbnCZ7WhNKfKohrVD",
  "key2": "5WHmuUJZWPRRyGvFBTn4Kb5TBKX4DW51gLUzs5ZzaX6UXdL62vKP22EnPEzpKYq9vgk9nz3q7Ve8zTgj6qCpgTkc",
  "key3": "619YZygBXQneqdzhcCqRUVb4aiWV6ydyfW5KJN1odxkQUsNnaXA9JR7CafnFcZvg1qbQXsgbeGyK6Hcb72jGzE77",
  "key4": "45yTDYU5Jpng9kbYF8pBtSteJzbgxeL6Z4XMSPWZKPUKfPaShc7XnLX5he6pwsSYacffHGAD1YTv4LsKQ1VnHSCp",
  "key5": "4S46Ao2UnmXaxTMaB6VRGjMQ2KvafRVsNYUtgdZcekXVqJoqvAdDHwfLRYetYVaLDmtTcBfA5bEd8ztXMztVU1jE",
  "key6": "8Gd1isdcWBz9QW6DuFjNkgT1L2BPFGWuSh6hoZ5NtAfMK1etiaS2uBg41Un35BRJ6zqdeKKzecNJM6a7HY4GXqH",
  "key7": "4XdME9XMZYW1xgr7Q7KyhB1Etk4PL7a2wjRJS9HcWJT6orUgaev1AXMH8G4vPYNaXCUMJVTrpaNSxLTmHA4xw8gd",
  "key8": "4gFvPVecikZ3DF8chki4CnKrWWaXCozW2jLmD54Sj83sA45vKoeRzH4mAvcsoDyZXcZxtJTkFdJPMFZmo1xNEt5U",
  "key9": "4VFaRnTqWdHW7nTLPm356RxbNuvmexFKvBnkTKg38w3a5YQUQ1UaKfocYRqFMK6RmUn54Fgbd9eHw7GSKWfR2qC7",
  "key10": "41dNcAARhXzq8zLN5o7tD5cvKssb6C71w4mgdKXW3q4StQL2rAw6ohwgrJH9FavKgefdqGs5XUAW8jN9eeZbKrRn",
  "key11": "2G3maAtzUD8fbZ4ix2eKB894g5YRanzhXRcNxPmPzexLsLLz5Xz9p1HQVys7tf6KECgr8BqpuvLCKWHrCWr1qR18",
  "key12": "YGh94EBKxzKZN2pGj9dey2TFagshv81vPo6wjQi63ZJ6NjEAkjqVpFzzXa37TcELskN2fsoWQRexjrvHQJZsTQX",
  "key13": "3ywe2quu1VXDd8cjRvTNHhB3XnWFiJTHJG5f79LsHaDRBXCX6hSyWfHMAfdRMAd7duncXg3rkf4s7RSuTkDZtAKx",
  "key14": "5qzf8DHb8hAThvm3Tw4XsQnh9Ls9w3G7qPfCHn5wVbvUg7GxmMcPe2ueERybTuGEG3zHKs6NsMCQTAFDgzPVKne7",
  "key15": "2LFiGpwvaKkMCAK6PZVbc7sXdVcX2xNtcCLUUtrT9Ncec97v1NiB1QvRfhWbaR9zUWpnrhGu3qu6pQquUw3VJHpE",
  "key16": "3Gpwzexxd3LEJr5G3SYdCCNzHyHNnTP81TyzmAhyJGFgeeb4aK8dJYH2mBcHUbYkNBunPDcXmXuRHQpdWj3jDAFy",
  "key17": "2wy6YMvch5VwD4YBBqGS8u8c2wL9gtzGWE7rPwUd4zoNrXCaByyGBvcTRRDArEodkeSko4BEmWJTwYvjnmMok2cN",
  "key18": "3WYD4Xz5FATfpCUxnYKjqhBLB9jPbvv79FGHQuGGPF7Gd8L5fWJyYZC7kB6ev2hA3ZEcy4XxX6iTjd7jfEgRkaP7",
  "key19": "4bEmMbaneYkqU9vffum44381syDsP7D4Vdbexeeqa3ZLqM4Ut2ShPnptkwVzNGPJUHqzbUXnS4VQFThp1kRKsz4",
  "key20": "2SPhHDtd9jgLSyW9mgS9Jss3iejU4ppWzW3yqwHDoSkabdfj8bVmMQeFSVYEXuUqG8QMoWAPfPSrkmgh5G6ug7i1",
  "key21": "SVvNMf2m4Rvz7TJss2zqYzPqPs3j6QgsQiDNzVUp5ygfSThPGZzG39hv7S5pxou6FkG6Hm59mfooauAgsizB9D9",
  "key22": "eBbKAPXVEXssiX14oRi1YM7xZED8nFGfTkwjQt8wDgVaJae24LBSKZ4v5tCTZtKAnJEdVdD34s2S59L3BWWTDQa",
  "key23": "61u3hJBqcVQcWwNx7rcsSYr9qnnaySu86ntt8YU4cWUgkCWdY7FSdnhJq6Mwy1qtB2qk7kQcjFPsFGAh2NBnGSLM",
  "key24": "46Dj5zRS8SRNXaDynEWGNLB7YHSbszDYJQHseMcU8KG5axrRgKZKPMrh3TLfE77vceb9bcbC4BSEyefUYR414rx7",
  "key25": "64x5DtBzXMq2NxwJiXDzjAg5g5r6jbw5cck1eLvzHErqLmtzVc4ueCswdvknoxijv3Vp25yh4irp7zAibGuohLrK",
  "key26": "5Yztz58QUvmtPNwxfh1EfekjKkKvzwLSd2dydxKjDvUM9khVFoTXCfvub2ennGiS5d5hz4o33pzkuYvMuDhAEVFP",
  "key27": "2Cogy2p4T7gbTWtnXKgBXQmDEsedwUMQwPMZBCZMf1xk89v5Wv1JDguvR9ExNssnvv6tGgN9Tss5j7FhF7wMwV6z",
  "key28": "3X1k7VZMoVrf1nbSKsaJ8vNWeJJoQPpDp46ZJaTxHwmaX3n9bpNXYHCLhqZvbfPAdS8ekbmsCQ58ehczJrQKapPZ",
  "key29": "2ueRmUxY3jdM6haG3A8U2hgzuatoNwaVL5dbqimG13gEQ9DLi56Pujh2A6SdYBzQ2YCG3Y4hBabeNJz3NGbQhnJD",
  "key30": "37vJBwqwkxKvKQ8L4AHjSuSEQUbwbxU6MeEC5KmKWh1ksCHsB3JKkstbsJiyBqmhALf5aFjSXK4a8hd46Cgz8fuY",
  "key31": "dD1Lddvacu5Zk5BbozTyqg1j3PG5jDdZfC6mUuVXRdt7yA7FJKgwSHgTSqNwpP4LyAxDPVFQo1p1D5QLMZT9ZuJ",
  "key32": "2bgKL38dqa2MxdDbsErGiCsU8oGkYDjavnYAT3xx4Jk4WcRJQdt1pNr626GUZMWdFW1Qq4LwjqKKqTAjru6ygY7",
  "key33": "387n2dF6xMZ7CwaCU1mNAdzfT2pomHLDASXfNokJYVmHKofSUHmw66sgb4SWeCdTii6xipv5zK9ss8xGWdxMemUG",
  "key34": "JMfGG9xNnsMj5RZxjx7HxhSiSxEjVpRsenXVNYTg8rkJUATcZZc5FtEpphHHcotgbtYqjAVMFNNooWf1QuCcBGE",
  "key35": "4QDoSRhvkmaQ2LsdtixxmZb1j9hoQ2PJpJ29KHPGByQx1Y3LLDM2LLWW1tX8KfqTePqKwft3Zxs2xDa6VsdNiwNB",
  "key36": "5hRvTr2e2QUsBhGKauRFMGSuXWBZRzwZ6PfgzUJL7FRBtHWa9kpJ8SxDBr5gjRBkzZ8ACP5jVS86TzYtGr96uS5a",
  "key37": "2qByBpcfvy8JtvihBDpauEbcc6HBvKe6xw1aVG9j69JzjpDxB1HxEW87dpSXzchyWPo6m9Rx6sqM8esjUaTHhHmV",
  "key38": "312bXGSiQviChYV6iiZWMhGQoxivQUZct2LeqrupEVNC6pfEHRcokCjdt8KvCnMGjMo6bwKofVcJt9VLuYqEJto1",
  "key39": "5fsGXQW6VzaX3EtBZSWaW1uJavmh1aiwjmvW7vd6XBGu3ZgonPL5yYWG4H8GEYDeGCzkEwikEAnMbiMqjDmsKHq3",
  "key40": "2d8Tv5JH63haRA6q8Rx4eSGTY8BHrxdjUdbqFMWAYPQtQzcjbQvYyFacpHQHcSPt7b3p3J78JwoSu2qQbMvx9kmF",
  "key41": "4rUVoAiFEKAkB6En6A26xaVxz4XJBVGBe2Mca4DobJvY697QVwETdzfv11jvFJS5PvErt56hSLsxqUAGe1QBhDCr"
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
