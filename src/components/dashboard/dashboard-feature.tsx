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
    "4bXGsSinM6b2dGa1K5ygpMKWEm9EHpNqR31rPgmyeGDM4bw1QBCtmMqPmRLTzarhHdm2bJpHJm8UrtXb5Yyrt4wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGMrDV596PJhKDcunkXgfkr8ZmLB2MTASE9q7jbncEa5hqAAoi1Ms3qh8VCHe5vWsedob4bUv2EYUiTocZXwcK",
  "key1": "2Ra2pTnMMQV1rZNrQ7AyhKBpfopcQoFvzPqfTefyaqyT5A4gG5dD1XSpbqwGF64aK1iMbmJZKVX2uAvXV9wnbD2D",
  "key2": "LDZVNtfb4hxtNJJZee6CbgMPH9VxnEwxDauDehFBQCYwbjWGWN2L1rfSsvRN576rqtADSwfJVqWYgGwYtb2WUPX",
  "key3": "5uwGJrwcHrNoM5HS3ftLDkKDiKQUEAe6wyY6kDiuFdaabWwCxA1V6EUVoJEyrpcwgRdCXxVueVLqqHT83efpenG2",
  "key4": "31gjiViYcxpAwr5vSdZHxKapHY6g13W2qTWA5W5yVxk3CSWGMeBPEdu1dsJSGZX6vW9jTuUn4A2wYws2iuxuyNFp",
  "key5": "53FeWezMNYan2bgMwLrqfnf7wC56xwP96Hsom9AbkLwwJQ3jZ87dPhQyaKET3VHuPtyjigJnnuPvNNeW5yVyvQAi",
  "key6": "4QPMe9J9MQFNeydnwfBP9DSFgfqj36KmGnHNH7hW3ZeinxBSuUuPhAYtmzaR2zGgZwDrEvBJwQ7RDfHqNbNHPeW7",
  "key7": "2Ls2HyTQoQZo4JxHZyqFF78jH9uskTGnWY7SoYoxp9YqXTzmyKsim8FsyXZci7LiGFXfTsGNAU2JioTC5WzzQarS",
  "key8": "31vPDLKAV3guqVtGwsQdd151ysVL7cqv1CQFJLgQKGURghLmU6s8VFEcjddbyYQu7jYJ63biR6LwLvphFTDPW7Tq",
  "key9": "2iMuyRFdhPHjdWnkidSLCtNbwe8UyFHXXeafE3Xt5GXdAZdacpvMjwpDQbA8x4yxssLBhh86DriV9Qnyr1URHHE2",
  "key10": "5JgDbdYKrvjK4t4PALS8KXioR2GJ3E94b2BhjSsHW4XV3rDjrCLsQYfAmDwsqJXcRh8Y4aDg5oQpXXwZefVmprbv",
  "key11": "3yqGjAUEHi3sdVbj17YH5mKCGVv2shTzgnexaH2xjjpMRsLF8Mv77WoPRhc8kTXes1fE9K7DQzz3Ke475Kfj1jeL",
  "key12": "2zq8dhreFmadfPUeF2n6vGwv8NasngGNNrKyQuReBcsmvpQc9CyReqf4fVuLfiHktsTnuAL7g3PfVJDEp7tLRAF1",
  "key13": "2aWNTR3EhuST8j4rJU9TamUp7krnf6v8nbNHJeJb3r4nRDAT2uQTEGSQeaskodjdNY5aANLTVLWimLG9GR3JoPgQ",
  "key14": "2keBZUBXpjSkQ1MZBnLXYUw5rYUu7je353WzqEzUpfRwUuc4UzYNSJ9dF6FDqd59opjHYevoDSqyeTLiKLV7B5Zu",
  "key15": "h6dVmPa9p5GF4PqUj1sjsrS5iKV4AnkE2hziJ6YgcWJXeYfgiMYwqYdymQsHQMjubHgyvd4oN23ZLwxkJRMpY7q",
  "key16": "5ZNtrWfwWGLtLiJKJdr426Mw95H6spujhn6iQViKZCUQbubMkLyxQ756ruc87u1Ggkk2eoZnLPgbXbX84wsqg1Gy",
  "key17": "3QRQDM5APFCaQqBqvV5Zspm2kYipPgv7p3b2KredPmLPJyS1FQCfcZusodvMHkSJvGWCvyMReaXxj9JDZGH3wjYv",
  "key18": "5AhXkWDTWAfzqDcGNM7um7uden4HmaVJs9FAMNcBosoNayWwRj339b4AsagjxPLa8FZnmerBikck1vkKUAyb4jPS",
  "key19": "3qJT8b3SRLivULdfrZXeed43FTauVWvs86dknCKoCHJdN8nyEmKRcUZSJusX8qyd5ZtKTjDdUCw1VaRGzS6FMuHf",
  "key20": "HvDTcYNff4wKRNNtJpd3ZPx5w7yhsT4thg2K8VvxWYLZreVNaVBYgEtSsHoyhgiTSNiCqycXj1v26hHULkkQR24",
  "key21": "54Q8a23xUsbJGCS7CESW2yiiu6M8xc8fA1RCGZYAeH8PQzhYdmp378ZrXApTMmuZgx9ZAGvjJU7Z6riVG12dptBY",
  "key22": "1rSgd7bduVm9XPXnMzKp7a4FBhHaMYW9vcPJBPrPyfhxjGnUe5E8vZ24Km72XUzFMndvdh77VSasbmuyXAPyqqx",
  "key23": "pGwNPTtVCXZD4cT1r7ZurUGHbW2qRdJpu8GPs14GsbKjmaADqHYUMukwKQwRi4xRyys2TzxiD56xMYs8JrtZxLx",
  "key24": "VMFkp6N15yZjrXPc1wF4KCJSKJJLQJz3FzMPw1qbXU5KHNVSTytiXd7TBeZN8UPFNxDsn84SchiBVTpKwWkN11H",
  "key25": "5kacUpdLnDJn2fhwkyffsUPbpeDR2ZgofgmgafxEQS83hRhQVQMh3jr8YMGU2hHoUQK1LDJyzsDtWNDpGoV2wYEu",
  "key26": "5Dnjo1wRooZxqQFzZf4bnyEDLjAQuq2jgduVqkUjU1Ldz57hUcpAkskg1x6rF8dbE2BkLrdcE4RszkTxbycAVFn8",
  "key27": "4VCyFVM9UhcWbpWSwf3YRBNo44E8w6KwiZYet8ovZ7XghSk1zg3V72qf8kxcpVG815zg6b7rYRDFDEj6Uv6CLM8j",
  "key28": "2FpQXdA4y8cuuDZ97YKNdjd9SSCaUznU9XcfFau6yAHQ2gMDifgw2La3YRaNyC5XDdHxjHgC8SkvhE3jVZyv3huo",
  "key29": "87h43BTXeg1tenMUiFF6exN2JRutBZxTbRvFmay22atKB7oxGS7kPPimin9sjJJfubRE4czUsqDeih5oiDMA52j",
  "key30": "4e57E27mtJrZLA32RZfCapVb1YUDZE2EzgYdvoTq7m7NorKATbsjT6R2uYfjHpK6ssuV57jrFeaHswLLTZt2ix8B",
  "key31": "cVU75VNQN7wMwNmYUiVMsvcLv8Y266cHpXuXumWJ2LcLtEw95e6FaARwUr8Fk1i7aYuJVNpmuEQ3JENkMEeC4Sv",
  "key32": "ZmFBWBDJHTT4CKduxDSAeUKpEs6myMJbyQqdt7WD6SgNC34H3i9tNRcvke9nGHrUQznRbpUdvmQT9prptgpYGJV",
  "key33": "SNK6p9Qh2TfBTx24wgEMJzu7wpfrrjjkbyGwqSVn1viMYfMgGgmkxMycUKfjVFt7A7AshAsyJiprzmYKTRB8kmT",
  "key34": "2taZWo5E5XhQwekQfAA5Af3tjwD2d784ohUxQNar4vF2JRAnwUK3wBjHVtsupeWRgvovLmoFb9DUYNzW51V4aNDn",
  "key35": "3RNAN8QdwS8CMWVMM936f3iWRC1NC9rR8Fc3KEQEE6yeAeiDHXJLWAq28ChwRX1mZFStBH1ndEGtGkFFvGHfJ9dA",
  "key36": "3YZZSMvx8vemYHJsAS27qnJQbddhNFfyCiHv6Yim24oa89dnYXTV2ss4Bxp9xS7WESTwXSj8pw94M5fHZCidoUQv",
  "key37": "CkW4Lau9wazZ1PcZVAh35xDpDDsW7TsvXm5qnpqGUCJ99XoGpenuZQas39K7uysAMeLH9p93uzM8noR1trH8gzB",
  "key38": "2NEe5ZrybaCdrHSe3WvZPLzMrKs88hsmvbJjQ85PkvRyjUAUnVD9CSWnc8FWE5Nad6mfauXRQLuj5bRThjPc7Meo",
  "key39": "2Xhj18zCy2Tn8a9qRoGpkHsB3c3PCSZporkCXYUTCR46ZPY4YDikFUTpk95e8ehEvRuK1hor14p2kgfh8FtbHhCp",
  "key40": "4W6Ms47LJizwLMp4XWEexfVPTryZjJWnDueJKM1pY3FVviuZ8TAkh2MGhDWAFNRGTuvfNTTu3RyT3wxBHUgBMzgK",
  "key41": "5pSGSUH3N2GpZzstkq95aLgJMPdskbcK1uPjKAAiDm87A3JnmfYYyLrVHztVXwPHdm9fArj3bxUxWuFBxVm6bsxw",
  "key42": "4TcoyURWEyAeA3XUxv2HKdbBpRj9jGewun44nNxgZQGpcckNsq9ExLfePMHHrhNWPpoRNyy4hm5PHZBMnWU3qLqX"
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
