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
    "3RJ38obttcn9eH6UrzCvxhFzpnVcpu5icKWJUr7jVRhTXBMnA9fBjccHqG9DhYHMxWv3LRBGiwQ1cZ63U6fbTnqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GgeSTcG79raFbX2n9pmGQQdkEPgSgL5TqxaBX4TchDyxkB13W4zm2o7M188AixGnXBAxQcmhMmKMuNN6GZAy16n",
  "key1": "nSo7AWeXZv78hGrdvLKe3E6v2moaUkjjsroS96vR1xd41Cmcdjs1zoL7XS6VEUjrkq3D3eBd1uhy7LHQGfWbVcB",
  "key2": "REQVrALdXStzh6k6zD3QNqgWc9dqwb6cPXiFskhBzAb6nq3uYh9r3HJqBr8cJ47SoM4rif7NbEJEYpvJ6MfF2Kq",
  "key3": "2XYFp2MMoVAuFqono4YvybrtdiZDDe4sAAnQMrE56qSyWT6Wq28435fsPwpBRYa76kjbUvSZUS24bn4dKJh76dxp",
  "key4": "2kMUKcZT7hGnK5sS3H1zzHm6HhTZ4xvsRTThc3uBsH5JGg2bsU6AwbghXS4oJVDr32vNq8oCZcxx1xUHuxfCS118",
  "key5": "5WqhyW3wfYQVWwcVbrsZBfmXAQPL6MkQMqhDJzGkCLpcEA3jK3A8PstNypxt35nSae6xch4HgqGm3EW4J1f55bY6",
  "key6": "5uMNZcXM6JLRApvAxPdpSYvAj62jSipBL1WWcGvYLSWRY49CWn8VLidkXX2tKVtgEMCnr6VUhT1cjQz8oGBg4zGH",
  "key7": "2VvYB9cEt3PZywxiv76fpeRefB7PwSK59bEqrAgUUaA6oBZD1MHax66tXFeKJ3Ni5WogTef3TyyyVkYQPKGaScbn",
  "key8": "cinkaj3KKXAUEPWXf872zMEWVrYH8G1oou8wXpSiXMp82EtgNLEJ89zfkDJfk3ukgNA6TWzQC3yd16XXGBmQTpF",
  "key9": "2mcDNqG1D2tyMPzg1EM2TEzSxevKy6pVPdpoLEPgA1p1NQJS3c9i11Tqmqm5bwZHYvzg3oGTxF72pp85nRWNQxDC",
  "key10": "59tcJDE21trVcsVzaTxUm5AzEAcZY9M8p3MMeWBJuWVEsjdceuipX8Nm1FtA5iuvEZXSi2D2c5t4uDED7HHXvnrE",
  "key11": "3BfWEWKxXhzLEqG5Gi8eLL99N7SsQcjcXy1F5zKG2KNLdFRV157bJh4C2DC9zKXCZe81734EhdftxC4JMhiwcLYA",
  "key12": "64fpENDiBRVWUdTJzdo95wGudxAEAWjXAtXoXgzcK56faHnaivxDZFuhEtRyzJhJ3DpmxMnPt41neWzDAeLtpcij",
  "key13": "q4QD2DcNWNjnsKNyjXSLFzCB7ZH7hFMpmmwMHWEmourSeuiCaHNNyQHdvBF81h3TocQzohJKkdtAgaoBfdHe7pW",
  "key14": "48SBzLFpAQJYqRX8Q6VQrRQRcFTPpHK16sV5DL1FG8Tn111bx9gfPrHe9FX8HZctmkVjHwmvFtn2NB7nDnxnhy14",
  "key15": "4TiMzZeVpJHLxPTDLjgT8yWgRH3Ck5k5y2ghneBaFh6Zh1kj8w6CmFjArnKPVj6cJERnWRU3ggoAwuB1bw2tyFb9",
  "key16": "5sUmGicik2GzzpnT3Gv2Bfc1bVf1uSwyM11sJBPRo6p27mf98btmaNPaBRnjJhKi7YKGgkJeSFef4qmkVcGUQPSQ",
  "key17": "4nEYacY7Hq6UZfm6Ejog5MVMRDfvakSQYp6cbmjkQ62sxk65yEDSQi2XsJoHuF1VrRWzce7AHJt6FbwhDLGReUUv",
  "key18": "5Y8DTk9GsDjLCHRpW6Uri3KHPqdG6QYPyVWp2JYbdq5riNcyQJYPjsjnBC4Yz6TAq7urpa7t3SJXVNptnyaWPwEA",
  "key19": "4MidrdukSahuLwkGLvRWe7nMRMrS2AwkWY9bXPdCPaz5YFAsuCr2Q2DjAb37yCo9GGh2rV1qdHoETbou6H9BzoKs",
  "key20": "2XJJVNEb14WYpJSuQSi2uetvFjASJKzcjxdwQeW8scMRdn9b9UxqzYHW9KCEb1sK8fQHbUwazLJzB9Q1X18tgnRp",
  "key21": "4HkNFC31ptpKfCz5SSuDjM2yqmWJLitnmpHbesEVDFmcVWsKxwm8UQxWGRtfs3aaTCx4cPBHc4RK135gf8pJXhou",
  "key22": "VypxotC5PrMhn7egtXEPpB3NQ8ZULvpF9K1UhXiPLJLA2i1uzNXV9gbXhocQnJhyiCDSr2sSUpAYVrJrS4FbAs1",
  "key23": "66MNLV4rB3nw7hLdh2HbN6q1vn9sehpJUxYsmWqKG1zv62Qf7zqKaKNugg2X2fM9LLLLB8ySHaZrndr5HoXTWTPz",
  "key24": "5cCfaRQLCXZzynQooURt2pivwWZxJg75h9693NVMxkbhBkvjHe8LBBC7KgJzeoVrWhKaHHW8nHqTCTGC6mndvxpb",
  "key25": "5To2pNBJsw2Q1THt4FHGmMZ6xeXDEf5mn1maFEcK6ihy2BktS7XqEGYZsdK4ufPWpCozSnrvG3Evy1LTvrVdHkAi",
  "key26": "2qXZMcUdQV6DWiZPvXkZofY3o7HykFeP84vNhDA22NcsuCEa3wz9nuLvgU357Q3Z7xsPqb5oTfLaiMGXFfQyMiSM",
  "key27": "5t6QwkUijESphJ9XQ6s45Ek3WwH33GtdDtbioN9z9QT4NsTWi968PFYw9L3GWv3qWfHVo4DBVyPZqJj8eQF1e6nK",
  "key28": "4F2N9X7G3k76EkZWuhirX1v3xciZxPHiusXA8BXiARHyWmczzCcBVdycgJePXzXaCXt4LkJyyYRK1mpspoN65cQe",
  "key29": "4bQqExjnKfF8ycnMPHTMMFhx1AtRLBBNXujkpB7ro4YxVd4EyFx5s9qA6ABMjqzwsAfAViXyFxtHxCchF8hJiXcA",
  "key30": "4mxoJ3s1Td2jqNJLXeMuiYU8rVVbG6jNxqm3eBuFtvvmYvksxCx4d1yW7nyPagMrLHji5pkyrnwY8ky6K235LnFp",
  "key31": "48KV1qKzPUoZyuLYv3YegWtRX9gHGuVcsBdtQjegsJXR1Y2qabSbDHpNJThHXdVjFoz4L618AdQeApQUyc7gfeaL",
  "key32": "6JJDRfniUNCVGUcjYjLdhwVWpkeMCaUX4Ssqn96QKkBgdfeArW7NvmLhypK36bzjwSHVVKcwkwgMpXwo7SQSbN2",
  "key33": "2FPq8Wk1jdHpBd51ycqjTxjQJF9uwcm3G498iPkEi29URyhvcdcNsi8JTUcVWqBN4n957qYfTi3mbPBTaebJVZsA",
  "key34": "65DGmTLT15CAhTxfpoGzYnvHRfLNaBmdZMLSdYTTPmv4YU6EuVoaQh88usm4C1q7418RNVCJpFfm6k3C5vNL9Q6v",
  "key35": "3cq21DsCRArZhFjxxNmXcu48qDDVBRfwgNqbrnzhAKd8Z3sjVTPm45T5aWZ5iNUH22YjTBLdeXhNxqSyNpS2FPHR",
  "key36": "wytEAdHj2xCkg3cH6oeoCx56uAs5hsndAxxZiRV2iqaK5s2PLQJmprq3dnu5S1UfL6jiEoC1cWsL9x53226ugWr",
  "key37": "XNCkWTnn6VQw7hneQA255RkkvWs9S8kUELCnoaEDzDiBq1bDsFtA2TNeCwCCb4EDLTv7g16MLADtLwRBqBsNkSF",
  "key38": "455WtGv5yS8ZmhjS47tmLb5FMxNfydEaJhCh2otQB7equGTAzRpW1VHNFpPgJW7WdqGsfK8xgsRFfa8wUNkgdVcS",
  "key39": "4JqWECFLVXAhUSuvXnCq9SCC26ZzN3vmXWwt77dErWseMCddPvJ34bapRDTmwsz8VnVBZxDueUnHa85aS6SJbTYP",
  "key40": "4CR3dWLF4C718k8ES18PY1ZBrvxRyqFP9qFGpsWiz5KVKNFdkxaEcFuPa3mLQJSGA18xXoXwnEWGLMSyk8ELA2kQ",
  "key41": "2PrvZnhfKEfzv77dfUriPfHkLwKtJxuR4tSpXoPDNqasfB2SR4CJhDWsQKfGQYT94jAmuH6vKwjcvmXyWG47ogrX",
  "key42": "emhurM8RuLxU1xhGW4mLXBtgEsMqfqQYC7vf12TVXNTc11hkgA9oX6CWcLKbwjkD6FnGGYxsz7aer3TxGpfxNZC",
  "key43": "K2yyWpV9fR7otVuNf6aCz66wyHAQSrzZw5USGHbbRPTKSwjs4vBA199jX3JLWX38P5i7t167Pi5NhNFLf4Tr74d",
  "key44": "4YykWk4LVoPcYj2VtSB3nmMUfs3ydBcXx7HE1Uy2uuCLChgECo7j1fWxnjXyuga5NvpvMB4BuU7gNtFRR68zPnR6",
  "key45": "G1WD5QMaQQbgtkrmr19R7hrcoFfSPGWnhb67ZywN4QXq7u7eZrN3tBwBkGjcFxqPWwoDD7zzuoJueC5xrn7KYUa",
  "key46": "2E3JtCkN94Sn5J5G2iAMu1wuErpNDvKKiYREgeEGJWYnzjtDDfm5g7bgiWxVJiaLhCjjvHwZaD6p3GsBSUDHBkMQ"
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
