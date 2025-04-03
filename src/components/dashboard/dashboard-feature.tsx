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
    "2bFfokASmF3eHTZzECfvCy1eZ1oyG1yoLxyLBW48pCuJnLGu2eQds1dss9TbTEzphxVJKmMasstmCxqCXtCheb1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "osc1S5b3MCDAxn2LUwR6ug1BcmWtModZS3bw935i1wf8SG3xMBhHsFz3HhVwBd9Dv9oBmguRGUg2WbMaaCQxzqH",
  "key1": "d5W98WMBegvSbtdgcVbGiGVdZwzUR1fPkRAXuQKECEn35fYjkskpENXkbpc557wLz6Db5EefuYU5GAdhbzASt4i",
  "key2": "3Z1KmtGYJUeSu1g7wuB9ybKpCN98bWJQN22N2oyfEMs8YSX3aUdKH7YqUYuAAN1EeQkct5Sr637QYaiWSF1b1Ghp",
  "key3": "5XAhue5DQxNzD6dWascAWuvhzG1WgQMKVZoZ7mEgp2JXeD5cwKmShWLw4ibJRPLVDdgEnYj9STDUmPu4bYg9jH9j",
  "key4": "3uK9yFZig78HKBoPXf9EaQUwaAfY7NwL1yBrcmHS9fBYXP6GXufWXATfGzSQauTikwY1gwUHaKewDqyjTqfTBXkT",
  "key5": "3v6uVX3UqnqzFGikcQ2Nh8XPdecFRyBH9Q1LGnb2iuXjcHVQ5nTte3QyZ9gtS9RkDmFhFXY8Cd8LweJppZV6eR3U",
  "key6": "4wXmiXntdqwpE5UTsoWM3euYYSewHfhDXujSxKMR4gDMpxGrFTadMbWCE9pj5k2gNduZGbCrNdZCtk2tNedbcTq3",
  "key7": "4pe3fnrpuoyED4PevK7MpBRAjCkoXg17nSqm8dACfuTnSnUebKwPBygHSHfbABJEq3hS7i8zWskMZP3RwDyKaGQ4",
  "key8": "4MjFztdQo1biann5iqhJTbmbv4rkeBxKsyPSTZf61sevB3nSTAKL5T13TjVyHQXwSwVRWvaLr9oHdmvU9bWjjQPb",
  "key9": "2TTcSBRkZVRgmQBukBAhuSyHBJfxZxYGFAmseB38oKtBCxQ6PTWXd5Qq6E6exwrmGiKP3x4em8n2mV29hr4m5vgi",
  "key10": "5tLXkQGX51osMHEUGoTzasMNiJg5w2UN2yHkBgeuDwYCXX9UQNygjdWZt4bAmWPg1pHY7hKRcuWTSKaeBXFZbVAH",
  "key11": "4K7hios23dhHHtFoNVai2tw6LvB9zvatCB4P6KHxefGYYR95VqDEaRC3SGhZC9r1euVKb9xWqJtL37smiaW8hf4s",
  "key12": "5k1YZaMkwKYJq5ocgBJzgEsNoJLFWpqmDKFgFJgcjBFSqvqFPjGcpnjUbxmsEh65BJzoUE4Nk7G6jevvVxdgFsJZ",
  "key13": "3ZsjhaFsmJ1UnsZye9tQJ4eKCncwJhdZCXpnZMkSydNUJDQxANmSid5zsLProu6qvLgS857WFzSxmadHoKuYThen",
  "key14": "61FsQvVWQzyCYJaqtxNcxDNgPc9cSEr9ssWvuzazYtNJEMH8peLtesUeLq2KUrUX3Fs1N3LWSewJLKgXicjGs6mD",
  "key15": "5YLjTbS2eJEDrgRXKx7CWx1cJnaTSVTsfRnNSrnaw9YFADZnLx9hthECWYshbdXAJnSnXo1cW88AFQfMq8hZsJE2",
  "key16": "5DsZoTbT42YhXMc34JoSuZNGQHz475HuMZQw4YChr37MiuEjsBSFigjymYM3LUzcsrYyTim2hNaBxD6tDNVd7LRs",
  "key17": "5YYgiwmHXpkZ4zb7ggJtXG2w85ksYV8fChTiwjSwRyHGgs53xzA3yFAbzD24YYaqyFaqGuuMr4aMJf36P3i289oN",
  "key18": "dGw4bjYCE1W44a83ATe1GA3oiHinTT8CRJq8mCcvAr5866gp5ddqJqCaoPJNm6LaNSYnzB1z7oUqd9dfquytMAS",
  "key19": "2vZz8Zs8nR5VdKHFyBwguMRZ3PtCn5sD3joUa7an5NSdzqk21bzrqaCuppRZkKgTCrEmFU6VGKhXfTFVhcEeJpLK",
  "key20": "2Unsj3zbQaE4zFFo4dd47tE8bwm66hTTFDxsiV2SoT8NAMPY6zSqws1FmRAphHGD78hSJJCDJpN9B4WuhtRPN29Z",
  "key21": "3btiuTWVx1cJ2fvgtsKePgnr36SCM7u9sc3nxgkLLbPCsfZwpLXsA1WTJFA9BZWcF1Chxx5Z2cDLB4QtdVgSZENj",
  "key22": "4i5S8Ldkne1if3ELEFjfXxPvoD4pakV7jbuQknyiEJGM9b5qqemNnk8EsY3H7LwYqUySeP29svtBF5Vjc5LggLGU",
  "key23": "2J51oNdaXaTzdKfxgM5nacvR5X8KYpwyZmuzBSDQvUCAQovs9mepPbEsZNnUPkkfkzYKLBSoonPVWB1WG9SBWqR4",
  "key24": "44peqzkXsk3rMhCFXA2Cy5kJadK1HQ8KSkFgks3jS9aGj8rSWZ5CwAFVG4Qtg3jhCngDUKVhXL8ZtKXtvFFbeFCR",
  "key25": "FZCLBjPHKvRkvdtiB9aY1niGw6xPcrmtWT8o77raC5xAXTCssFz3jMsZ9XVFQ7w1aEbEqJnfKYwUuZvbNPrJhtS",
  "key26": "k5fCBcoT5YJWmaJ1wkEcwGVfQAieokb2QQ8MaN8W4NQKXcyhRzHGwiYp7bjTcW2So8aB2EmUoQZ1LcgPQ7Dmhrt",
  "key27": "4Vyz6QDpCkyDFxwc4CtbNj6wt1ngLMckihTaLnbHEbBCFkJVj8FzRTgWWMs5AP7KoCMDieLs21ACTZX6a2gNMQqN",
  "key28": "4acXF16ZcyaTzDWBtdZikmxKSEfURa9n3rAkLD3JXumeSvQBCWXP7ysCQWtYycHFx15oKA94HwfXR9VsNwj8dPc9",
  "key29": "4ioiGwkoqSBZEwFS6z2MTb36Asn8wL5MLQZvPjnnXPxVfCvuARv68LAq8fvqY76dLQ7qxskwyZ3XVvwmnuLPN7tk",
  "key30": "3ERn36xdPsEabRFfhxMenQj3UURjB33W164rcXH8Qyiby9JFjfptfKz2qdutbnGX2ijsU6AKi5ymDgw8d5gncZwq",
  "key31": "5WXU6errazTac7bAqSpZXR8mtBY3Wd5cVWe51p2zdkKPdHAxpnWdBFzXc8PMJezd9GfCQ8dr1TTxWCJj4UuSXMsc",
  "key32": "2Tka2zsYDsxVeT1m97yn5ue1kWKnvo9PrFqTwEUKfXWd31Vt47q6gVj9iVyGXng3FsHm694ny2KX7ZYMHPYwgVpW",
  "key33": "3n1sYgTbUNREedWr9hV9RtJHifgE36tHjHo4WQV7NPpWxAgMPp2RpD3AFWvSExmmTAEzh7xEcBsgQANWkqw5H7MT",
  "key34": "652218UB3TA5BWxn96vM8aaCo2YiAFs64GkqWnv811BKvLPWog6UPWV7ktpwR6ZmQwbiTKAy6jXtpPoqEPu2hoa1",
  "key35": "2pd7DQ5AapfPu9uHAkJ7NpZTEMdTab6aAnzAG7PuhQGhy91rCQEPRiojymn1khfPVP3T61JtwinRBFcRkZfczuBp",
  "key36": "2Hy2xSEwrZtEvVCoQ9Q8fwjtmZmUBvFKbRXGtSzWPuo9xkA1bkKEgPK7aTVNP55oXWhUKaTpTf9bLLxhzigrXi5L",
  "key37": "3aFhjR9jpWmyAPtU1LG6w8pxXcAEuGXV3fsSgDStpNZP4qxvvrhagR7rkkLo8U7ces9zPzwnpVNsjHmpBrBU4ehN",
  "key38": "5Q4yq2DTWZm7nyq8R987fp9HvmZKYBZ3XaiNLm4YeMuhM1HU1N9HBGbSkBZJtACL3etLW3X5zKQzxo9kxR5TTXfN",
  "key39": "44DEcF4m2BuxCFxZe33gEKkD7zE3ZgoNbmCec8VLM9jW622GhFS5qRmTRhb5mrDRDJm9AUvzx4J4AkUybPMezXb1",
  "key40": "5DvoMtazWvUyb15pgo6aeHRd8vB5okPTuucoPJPHpdfCieoZYTudwWFLVPYELKWK6sB9a4dAbKxQ7ZQ5tjXtkRz8",
  "key41": "2jpLWn89LAkf5hmgu58BMgb1DF16thBGfMmqmbA6AHgWuvra62iWA7MfyegabmwazADKntd6AA6WwRS3vbf3WJCi",
  "key42": "5j7bL2QvSdueHimoT2jWxf3hC9cNjyhpdvVYCRuFqA8orvUqJNXEhQRH7TUox6AkkfnJEze7Z2Y2SwnV4doWSLvh",
  "key43": "2FJQRA6uZCQqVVBXoDksYWxcLHDL6QhmfL4XF3oyezhi9S5Uahpz1JPkcdbf1thhpCM1b654e4sTDBz3985WECpn",
  "key44": "2qe1CTSTG7g7X1hkvWfeoiMKiQQG3mksPE97TzSiUvpBzXjLCYfitYtjz5MHNboNfYNm8jf8BgLUyUNHiQxk9jwb",
  "key45": "4u1WDn826SnTKCPnEQDwWBut6VTgW9GbbRxWHPV2N4h6pLajRpc8FnqrkmV9nxA9QXiF1TnD23YwPbLR78khcXkY",
  "key46": "3giKd5UbPjWV19hUngUVstGX5kUBBuA2HkJPjikUVspbGJW8RfVgQLi6wTJDnQckKk22gAt3kmGq45fr6egQ6uBa",
  "key47": "5q1mEPNhELFkB4h4mfbxAfqKpW8fWmAgRVqeoAHoPgtYu2QXy3zjRaZHWWzaAUw5jZAGCzGeA9MYRHHRctaVPtmr",
  "key48": "3Sszo9EhEKdkfX38MEQsGj63pyDkzo675NkbV5vmg2FP8mRXnbUBGq9z1aFWQEDHLfN417BSeDSa3Yya84GhSkbk",
  "key49": "37TLTWE7TtVXom8dM85dejVSoaHmccAcSFZAsHZJxzNcbzkR5zJ1fgikiQug4swNXhk9oGD9uows59bStQ5Xh7sH"
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
