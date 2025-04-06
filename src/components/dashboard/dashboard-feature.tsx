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
    "2qLhKehvRJNpKCFQuY8sQ5aeVQV6AvUQhTkihYirg5Y6SCStrvJt4hw3k4ewNAYLGR73T9jpvLnr5oNAAKRiG6V8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQNUJcr3NaVqjxFEaoDapjmZVYoQFpPcGzQh9UwA1FRVHWhQyhoVgGFZvs62H7DW2HfR78kuvxqMTvZ23AN2vLy",
  "key1": "4xUJ52GAJ5xFkUm7qhypnc3MozdQ9w94vWcEabwC9GUvbZ8sDrRDFoHnP4kWGbdhDvDEHC68A7myDkdbjuvF1Dnv",
  "key2": "5CEMMseCbXsohr47YnNQsR9qo9wq5cZGXKs4ZMoTS9uN4fmJFtQRQVTsJNjtiz2wgrpmB2wK8NHC8cJmX8yybUH3",
  "key3": "CMnGAojrh48pCgsRQAskKMnL17Q3c3xnikh39pfDwvPQwoBmtyeyVAaucMqfAqzqDT4zTeC8D75ZGL6BzGqHEnk",
  "key4": "3NmZFE2UebWRGY22jgJw6YS6YFdFPirxXzubazZmgyBwsWJv7jfg3eQx6Hv5mpgSV6CvhzbtNyNmYFG95LTDDFTG",
  "key5": "e1ybhrXtHqxAuAbAirqnGH21neWX231rdV8EmYwvQjjxRvKG2if6tn3fCrFBSUnMDpnTm6UD8tKAScp4e7p9UTD",
  "key6": "233VRkLmi7EAdjzakjBZh9bd3QGw7jUcN5HVwv21FqQcCZDkt661scg8t2UA8zY3bPDrcz7Dr7SyLagoxkpDujyK",
  "key7": "hCEvgSuK7CEdq8Gsuvt5pvs9217X2LBH71XXTWWY5Rtp88SVACgkJDkv752ibT95ts272hPuU1GFZ5s54XgDzVj",
  "key8": "yHrGFCE15c2MkG7naomiQGukXjRS3isxe3jeCkSu9Gu53phtw3RXo1AiVHMK3QMAjFRdH7gC4Ex21QbF9MD1ADx",
  "key9": "3UJjmvrRebdV9Mbj1zYwEN6qUPBoPwkRbhVULChSbAydeJsx4RAcuwwLBkPQGn29TQzgCzkoxD213e6yqCwzmYTu",
  "key10": "5iRwL8zm4LotsCo7PqJvWXT49SfuuGUHQzGR5hFeAbty6YKQXqK7xoMD6pnKbB1U9tT1W9swqu9cirtuv71NaVgD",
  "key11": "4V5dZjPV3VS6FDywJr6cUoBHbjV2Pynqu1MsLAF88TfsaLYdytHFAkW7M68eEcGt1WZhhReJbsbKSVRcpSxiNPpA",
  "key12": "xEL52gX2NYVSmHTsLeGvcESPSpdmtCi4PBThwLP8MMY4nt3SnMzVhiRsqLBirgPDgRtpvAjr8iFmQHYSEVcLeUe",
  "key13": "5NECh6qgM4AMQxDUYSAFjhiL4CRzq59BttAEBiJdpHSkA8NgmTPDw5jdXPz2oGgS2rtQuTcRzQ7bnq8YjaPtvSUz",
  "key14": "Jvpu5ELqb7V1Xz4SrUkt6tsYFM4FRQAfYXoF1UHQQ9ccnBStSQSNUCiNFMM5HW9fbVWqGwrxnp3sbHnZMcvXS1D",
  "key15": "2oKpjfgzx6nJDsSoK2Br94RXeh8HQQYaR6fyJ9BcMxF8tShBnLvCuu455bLBn29SQoUde5eobGyyYbvA43Vv5b5F",
  "key16": "3hApYAZSyXeTbJYhzwBobPvgBDKpE23axQGKTmd5N2VxgMZ8EroaUaHgKAozpAV56MoNRTRdyxThmMoyH9vFgx4",
  "key17": "3Yzzw9mrATyhGyhL4vHU1QZfviVw65J8SMpn1BSYuG8uWbhXKsLUYFXwokNjeP6AUrWbfHuHhoBMkJTj2cevk6hu",
  "key18": "57x9Go79AgHs5L6WjKNMgR1ViJkEWxqfFpEDyibsxCJcZ3YtA9AbbSYCBPdPFRVjQ89SJFv6um8g4HLSSrisaLRL",
  "key19": "48hU2oy6RNBL3d3L88GG8BaPvZ3eHAzfi2Jn8mRzMmZDSSAk8qyUny4D9genP49KRpAjgfPrxBbbdfpzHPu5x2Ge",
  "key20": "4kBQpzhaqCvtyMopbcZmfDAe4q12ddDvnsnpmdc9AJ1SFE5Fei3Tiz41N3Witrtw2zigBWBTyqKCDdWeFGQ1rXh6",
  "key21": "4q2LooFm58o6ViLTWNFtKSYqVCzQ2Srsk4q3BeEmRVHHzNGvjpPPGnbAyno5zusLioRtZGExjfQH6uXo3ccSrTHX",
  "key22": "4PS6uTcWpYbLPJ1fzDfAZQecT7AbUTJZb3uv6gLNd4QwVfz6PSfjowAyhXvqpwAg8Fud2DgXvrFoVA8qd8ooTPpR",
  "key23": "ttaPcybiyZj5n89Hn3aXYZVhxF6UZTgvCFj1duvUhu6x819NcJWP4CqrPAXXgb3aaSULsGocaudpVSVYhHfzumd",
  "key24": "3X4C6CYXrc4oz9rcAb7ieY4KfoG2sGUYvZRKHsypHRGr5wLKX6uY4b9Sd6i3MeT9hzuVFbW8rEagHbLsn5BvznXE",
  "key25": "2KB7rrBWYqn2V8euCsmjkvt4VEtqCVV9fumsPFqs33bgxoa4FTg7avniqiwYrUdKABWHAnujHpBe555F8iP6NChY",
  "key26": "5kV7QU884X6jM68FMggkpAwJnBC8Wm5eUuGRb1M6QBhUKf8vUVvrzq15qLoZYrgpkLJgr2J9Wb88SXWtDGSPcSoq",
  "key27": "5iSPuNxVN7aFiYCSxM91VgUhVC47wAjAKVfQC6xwbForKqpHzxz6TNTqtNoqc8vyBH2dbwQJMBVUriteJkzGjVTL",
  "key28": "ZMgoScuELpB9sgVxqjUwZoRvQ7tbEV3AZYtZ4kQTS5jpL626HPZKKcFMDAw6jmSLQP5CmYp4iAk2Lm6QGLKWmK4",
  "key29": "3aFb83Vb28j7ULoWsEJUNLR2BjB4TyVAzaeZ8RM3nkpv5Ngar3WHfmmhX5JwXEgrFDFuNwNtxzpMhbeGcnXvRqUL",
  "key30": "58zyLa2mUrLsABeMg3H5SVW47cmAHqAHM953ohU1BDaW9j7DJBQsrKRfF5eZHic9yixi9epjD2L5xndJqEbMNLAQ",
  "key31": "4Avyk62NZFWT3gZ4bBxpbkgx6GtrDN8qc6XTJLf4UEmZHpC2jwueh46G5D4eRusxxnCF4URdUurY8SzbiLb2ZdBL",
  "key32": "319fHc3J6BbDGGAq6ukqLXJ7PzYj7WvGuM5hzfEN8qT3yq9UvGyrjt1E6J2nL4HaQKymrmcmfDi4KrUiBFq7ttZV",
  "key33": "5MxZorhjTq7mhDNBF2wb9V4Y4an5uPN2Jz3ob2AT9WpkyJQHokzcjE6mJ6KkFzBjPyMnsb7tiwnnSDR9Xfbhypvs",
  "key34": "2VZJpssYA8PnzJzWLPDUWcj4gRWqV3wXzdQF4BzjSyb1tMu72kWucdCUCeSYVbhrYsjvmU1T3t38sD2bRrQ6h9PD",
  "key35": "3p6FjF4aat4nRrPoxAME9AzW6Hf9Eng9e232e9ftxC7To3BzMHAGk2BqC2kCuCs8osQjpMsmQeURN5zWJCxK729w",
  "key36": "2sHcpVqMKs6ubYs41J63oADNRoPcLsG1V57ePW3ic3nxg1qyYYf5JGLD81wkPGHktvaKx9cjaXNjD8Au9ATHhh6S",
  "key37": "ZHHwDJes83e5NN2hZSPd5rMJusi9sQHrj6vjscX8LLyNJKqScVHismxWSKiGb8GXw4Zso5B4M5qQSpx9B8qF4SL",
  "key38": "5FBSuKN4TsrzwqUc8qLJD8GsyrUHy9wmzzjeZqqnQnZdUAyJVEcAePJVvAgWpt7G6CrsVbdUQmJmTQkG3QEnwtHA",
  "key39": "pVcYWzmAVjxnHh19onq2ZyhQrh2wweA7f3ZuJwFHToJqn6R3KsJZvuKBggixpiEFUArD6jZfeSYNX6Jo9RgxQ8x",
  "key40": "QvtDnAvtYgm6JhRj1euqDALYjg7EV84ZoWSTmAhvHgL8SGwwPuu4eUfTso1prUNAoDnV59s3XiW5dYt9r9bjTfh",
  "key41": "2qMKrpt14hMZxfs1tzMkYmKpX7Mr3an2CgSHci2NzaZMaQfSEUdPrGLHZ3zzpXY56qyyqLJLKD3HCdzx3evQGTTC",
  "key42": "2RdNjL18h7UBFBdezC8devJ2aX6AEkbbFaHRVp5GyBJkucQfRHthoN2ywBEHMV6aGyFyw1uGsYk44P1CfTuT6NWr",
  "key43": "arJx3MsNRTGsZMsGGRrx7g98YxdYnGLaR5AaSfysAeCdARi3PmcDJCHAeygCrQ8wXmNvo3yhz1fuo2CQ5Nyc2Fp",
  "key44": "3CTZ2MV2ZAo7XyESJdoUh7LEAK5ZQcJt34BbayoKPmj5gf5x7iaXcSVQ3FwjcVxh1H8WtN22iDDBkurggXvYGsWt",
  "key45": "2qzjCZ2Vody8Xief9mEvK2pj9wfzXCHhHFyffjZ4LXnLDQKiHhhSgeqFEgqqBtWkJ82kZgJpGqpticj9j1ZVSF1Z",
  "key46": "waL4AjkjmiwY9rt9Ecn2GvinVTcdJdTPQLxyq9upgM8fP6Zy3FjiFEL7oDSa2szGaN494nbsimo6fpu5NMUrZ6G"
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
