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
    "ByjPR1BGaaGCaQxhPf7F2Mi5jXC1ZnBtJ2bLEBNDCvmTPE1icrQvfuTyqTX1KkD55vAfqEHNsPhXLh2pFtBJsr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QeuTZVniW6PHdhWLF2JeLhuoxiPqTMCuv9tugZwLQCFy33Y5ZgURxnsx4hYc66191E9S6AXu849wjzF1nVNQJ3e",
  "key1": "5FRLQnM8PS17yvAsi3sHuBjh5ois3noyMSzYzxtbeZEV7sbGjqCDnmUoRb5sz7gRjSpNmhZhPzZFLWedHSQQJWP6",
  "key2": "49RY3AzCNsqPFdhXfQMgm5MZx1fNF1dKy3kPsViQA4eMQSKFMWAs7fCTvWgMsK7TefXZAnJqduxiyYNTCCFPnf38",
  "key3": "ikRVaysptNnWVer9oiTzxxxypEexZHJTXYdNGLvi8kjzN1GhvgHsybegcfg14yEN2BqmthRSZ1payFpHoa5N5Gz",
  "key4": "EhWVn26PbgRBWmcnQqk9vmQ6YcRSXvaLYh2bvij6yoYkia4KkT9DNJxpcWjcAawA11irUpD5BdhybfQERQJM1Jr",
  "key5": "2HM2xsAbMFLA6CcR787QwBxPLzr3vpb1cfbDndcR3wHsRBP4jBrGKsodroJRHBNDNxdodxtynYP3HrGxkXemH59o",
  "key6": "1QtjPihY7fwDnPV3UT5tpP7BM4UghHdaggo3bLXGJLVuSL5AB4Q33AT4k2MqGbsZXDGiU35q42e5hUjJrfaEtd6",
  "key7": "48aa44FYUDCUowoskDqgqLmcfXrQYRhzXM6fyzd3WCvgbL68cSQzXqZKXSZnXyDkiuKxWyiQZ2FoZPq5zWDxdggN",
  "key8": "2nRb7VazjyW29sZ7BFyNFuGqV8SznaQSURghxSzhv7YhwEEMcwVgEmN9XBX55owB8yAQ4Vts2eS9km68K5VrAeVL",
  "key9": "5MJv6KGWWsWJQjFwP49dkxDL3qwAPfeTY3wMNnr8FwqN8dpF5kVZGNZrmK9G6xnT6tu2HqhkSfqDvacp9D2ouwgR",
  "key10": "3MQi5mtYgeRLXvkYApqdSi32m5rP7N2QfvyjUoYtcLkYfTUWoUgUmTM4woLffUcXXjkd16yhFM1AaHJEVmYMJvQQ",
  "key11": "623DmwJJiNCcBvotZFKYrXNNAnX1dsCdMr2mdSdHbtGxksE2BCCVuGkWMiDfvyQUJCpkqVd9YStGnY1iMedWd7QR",
  "key12": "5cz3iCQv8JFvaDGf1eH7tQQ64m8HZ51TZJkBJZjj5HuSJumXnkpkn8LXx1rizNieKkpsZm4Ae6mm8CRsSiuSHWT2",
  "key13": "5iwRzjcLHHCY5JnTcXkFKPmn74ZNBCaTX6QVZtcGr9BzLnbrineFQvgUgfD8W1kq5yrJFoekVttodXRU1o7whEsB",
  "key14": "egeHirtbt7Q2bCiiJdCGf3xzZVd5uqpWU1o7wUnSy6JDMRYZJ4m95bSfEoNkKE4ghbWdFUvR7ifBUksUJDE7ZpJ",
  "key15": "22yKWe3729Eysrqtt1URcAgGS8Ku69uXL5TViSzsu8W1xqdv7eVvoLBJUdnJGZVPYLPV6y4YJPUGfVC2tNkeAsN7",
  "key16": "4yUSN9LhncgQwrLYFw3hDR8MCLMbufpXcMU2PUMMekexpYNGN5QcrDtY6rDUkpLQ4LfpQhNorNgsmxLg1tQemo6d",
  "key17": "2RZ6GYvPRbE9Vv97p82Jq1a3QUm424X631oWg7U4AdxWnwPiTEfBytTxPcdy64ZtbEyYeqQeuNuzkjuibfX9E9TD",
  "key18": "4mtq4wTWJf4cykYiyVGTTL1spMtdPsE5sSn1NaLTxkQ39KgKKihWMftyXNfVH7JW6URnUFU5NW9Q3kUEeGMXDrNP",
  "key19": "2ZnCvZKX4htsTTkgGy6XnsLirZuh7TALrK9p7SnPKFR12BwhHowkqXg1CdZNwqk97WuemjHHfUXzKZGqZYo8KGS2",
  "key20": "XUyUZXtb1NYeJ1d7LD98iuCy89rFtVHPL6ismuv5vqjKvvVwjy8oMnoJAYi4dcpiRXRYrBpLTS1vyLmS2miK8NJ",
  "key21": "3Hkq4R5o4d6umyCzdLiDXSEVFnXBWpmzTLLBHJnBbxRXSZuLtDjRuxH3JehdzYLVQahGaqwY9Nws6ZExobBZR2F7",
  "key22": "5Medrgb4ep22t45zMEZiXTzkowia2oC2xW5e2DYNfHQhJeV4fzv4bqiLt9XcfGFvyvCZqTptNa8YMapim5uAcAE5",
  "key23": "5UbSNfPAe4MfczJpS8zdbHnRAd1fgYGNgyZTNSiXJEv9D2mqYkh2cQR5WVfaRTaKM1cG3tvrkBx9Vehau8aaqu2A",
  "key24": "25TUerYcP8vtcCVJR7WaRRP8D2ZuxkkcPVsFo7TacbnhTXaf6hii42C4RfjmmBCNLgoAQSdMRoWZxNFZxfiPfeLK",
  "key25": "2d14UXrm45cwDooeHoFsJTbtqDYS8uoa1awgNh8oTGpjvf9m95tuz7T1iU3WeK2sHjPoW8qVFrKgQqWd47Z5mk11",
  "key26": "SEi2j9TaTRBXhvxW4cCYc9NPUymFRg2Tk3a5bU9rtXSnvrY8MCiGTxJPVWsBHpSTVjBxmsBBYio3t55AVtyT2xA",
  "key27": "41sbuzyU5PRCtP6G9UvVPjAyYBtuEvfJz36Bpr5FZuNa9YE6H4tEcsZQkJxHpK2fTZFodTPtfWnXmcud8TKCY158",
  "key28": "4qMFseZvmDzEY9FErEahdNVCtf2w2Wv6pH3fiCFuzF7u4XVPSQb4Yn4XiZ95QphT5d94Ky2ztUnaCbbvx6iaK6vT",
  "key29": "veKX9Q221GGtm34LAir5SF3oAaoaA1cPsFwhmwC7hs6aSRdvWwKsxab3gBrcsE22dF8DUNBJKHva9PoNHW2cemV",
  "key30": "XSHZwehHv8Bir3JaPfYKX4nFGH5jLzkrG5hr5MhCDd45wfF4Mtdm8YvWDedHffiZutHcHfZyqu2zJWhsejrhJrZ",
  "key31": "3ankGiF45eop9mFb1kjsAja7dmj7oqBMLMrHqGzDFinop3Upk7NqpSToxR2vJR1mmYo9thWtVqripDy8jvuTm3vh",
  "key32": "234xU7KoYmGzBLTkdA8X69kxYEHe5hQ5YTVBS4wLd6joBDwhc4jA6X2jrkba53TTaScCrFbNUcE2Mc5sLWYRR2S5",
  "key33": "5x5q1GrHRsY4LcHQCVpRMyNcUpNurtLcTvLSwfbC3oWvyZ3vw6qmtALbNSgjByanBu1ReneVUHq17JBtQT6eN3hF",
  "key34": "39zSMtJ8wn8ZezHmizZ9FtUCsgZPKtDc722iS8xMmMbKmsMuPzCQBTgEBJDSdcvPZLBdu8swC22KvnJFBtNrFVBZ",
  "key35": "3Z8QEK6zm685U5g1idAAfzpsSenoWFGQxE3E5uwRxJ23PATcRjVu24YixVDjNs93ztG7rze2suacoK8RMWv2QFF7",
  "key36": "52TT7DqVtKvgcdisJwvAHBSf8fzCnJouWKmqfMUENT8aPwAx8duMqH49jeTJetiyqYJ7A89NK2Mp99yUKm5ZzJjf",
  "key37": "4unYHTQFHPWCYBJxqMy1y8DHLkWTVw3jfvVQktURJz7kuDv6XWdSqRbNrJDQx9cdQrZMeijJ8FPekUq4XjN8hiZX",
  "key38": "3XGfDAxeY2MJdrrs7EqWgZndXMuKTAChdtmWeiesLLUvg6ggC4o7MyKeAWuUBgZc6jsNmWZxd1g41udZMjL8Y7X",
  "key39": "2449xJJKbx1Se7Drikoh1Po37z4P5kNdHnBZEVs3dGioqk2aHBEpwSrsfhQvLxEhd5okTyYMAd71riTDXKtbaZ61",
  "key40": "4BwzDWGtTMbRod3dAGRrfFEr45KNXYQo4E9RL1ZVG19fjCDQGMnibezR7aW4oAVDLQu1VaMx5NDFkwfoWPGA3MQa",
  "key41": "gDMEmpUB8VxzAUsH12F3yRw3fqcSkyNe1xhwptS4aAHUDmcJ7CJLCRDADLxUWbrRU8Fit62L8Mh7Z6NHVu8Pstu",
  "key42": "2tYDDJoFAJkwhS3gSxEzeYuUftvhmrVkv8n73QRWZLwjHstrGEW46VDjXZJkx7WtfQKUQbTkKmh53GeqnNeje4GR",
  "key43": "4r9oyEh7Lt8vnaUnxCbS82KzJaHndupKrKGVs4AbsPs6F4XUcaNEexxggVTLrsLr4gJDpX2N8USYhrik5oNgqwxt",
  "key44": "4KYFJqMtRtrHDantp8CGyumbjTbkRwjocf2MuAdVPL5YSpwVyWjCNCNpZyXNJjfs93vBZNmmQA1jcWPURJmKiR76",
  "key45": "3cQTL9761QfmnkjMJQN2gdzCbo3fWxP994tNKjPbGsrEDNmsXe7wSHgYfvH4xTXgrxTEA4nRdWcQuE35uctk6vdY",
  "key46": "4dzQyhLStsBn8yLkeMhtajFMwBYXvoVjDW4nGGoEbQBc3vkwRdeo3c5RnJnoFS6waQ8WZhd5zcBamoYUPbHzojr2"
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
