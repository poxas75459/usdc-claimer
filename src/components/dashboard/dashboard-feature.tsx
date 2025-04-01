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
    "4ahHfZLzhtQkE5NtLbdt2MJVToG735sp2hc4WKUnaHYcQLv8vpGpkd1cCmMjoLrKmTecXpDprxyYmgqMnRTkPMfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Dr6bSTMrMwWG8svAeDiKfZF9Zt456v8ad79objgfo7HcWRXvmv4aNHTJFDQ52QdmP9nrUZkhAzzjuuCWJP2gCN",
  "key1": "2acENdmtbc4ZJAhKYEF2P7w44ar1DrdVw1zAXBYRJL6UiutUU78b9jZ1buxWD8u1YHaf1AcsgpZGwGBxNHymFdQv",
  "key2": "67dfAw1hmTJJm6DMQV7Ak5pBUCzP52kiwkwkeZDagmEcMop2bQpL5pBw5hjpq1pLarqzKPqgft6ZukeEDGpmythj",
  "key3": "5Pbh5k74dJeX6jsPyu5qZsaZBJi7EyhCJC11veqCApSnsZ2UtULiB11DucS7W1n6yh2q481eNjsvggcZt3U1kbiv",
  "key4": "oMkodp3uzPouRy7Zf6o9xBxVSnoWjJWpY8GJzAdLtA3jmDkDkgZRh2YYgEVgiutpQJvdXCw87e9pSLWxC199V8T",
  "key5": "3tRf7C5yJ4osW1pvGFr2moH8P3mVaoBjaYMYCXKBUB6p5XDZVZSVHQ1JgkKpKKJ2JD8AZRUP6655yoKBzBBMVsoL",
  "key6": "jh8Cj5KccmBW2mN8JyfzyGwZHJ9iPCcZ6FjxnVuTW3Z1h5QW5jiyYHe5qAgazRRT1czMi8JLHvnP34rgL1Y2EhN",
  "key7": "2VX91pMGuKCEob8BpJEECfVcVsARozzkveN7RjNsrLz5v8Pd9cuRz98SKRx6LhaNGFqp46d3dCy7AQ7Yrsq7fCds",
  "key8": "3Pvds5KZ7tUs2RsxCjhN8yvoSoh6n8vdR9inD3EXPzVkRgyN9nxWA3qpfTRP7NZR9T1A4e785Ufb8vEBSkM5vdHq",
  "key9": "5zZpo3eRPuruERTJNWWAnYUmEDTCY6PbJe1e5o69iS3iMH18A1nQ1yprdAPiUVXNDooanCXfkSNckW9EBkcWcFZs",
  "key10": "3fgeq1wsq47c9bxRNiPb8NANXBG25tNhajxKmb7Gow3FtyGRuGwhWcAQrCBfTwK9bd3k4WQ52gxmDToJVZJr9LcV",
  "key11": "4JFNok1yntbQeTMgxzDoUkRdKJBaGejjwoMtbdzyZQr8p2W8aBrCdxa9sABFgPZowV8cb3Sd6PCWcCpvXT6euFSk",
  "key12": "46k6GAbW8PbLcEK35FDXPP1Jzy2j8SbMDRFhZHWwxBmzfcmiBdF7DpT3MwrAJnh8nHNCsPYARg33U8MHfkC9SvQe",
  "key13": "2ejNZAVaCaZkiqUNwnx82z2EKUAbme4mjkwbokzUFQPorQ29oKR3VoEn4yTr4ksQxbugA8RjNkfH7YpHJHP19tfC",
  "key14": "3iQN5FA3o6njgJN4tMqZ7LNxCCvT1w9pCa1YoMr2hxdx2yRpqie8z4bgTtPvBZRpCN3jgKaUNGUtYhjsyufj7CTj",
  "key15": "2ENHqypCNwMTW4vAGcb8xbJAQNzowroXLuSVijRqQJYTbC5AD2hr2JDFnK5rgHDz3RDhkXSALbZVGfmmXJKCBbTW",
  "key16": "21oXe1VZB358CNXuzE9Mc76ZY3LTfYz85nNiaEg56LPUumZnq5R16kmANwYQHyFGBmwQw1vo7m68eYgNFyFuSEU6",
  "key17": "3uedc2Z8ACTZYa3gcGL93q1AmqwwcHqMcKCV86zQ1WsEpLLFPoirVVj855UwbF8NSC1Uhiex54mrTHWsgVGRhYwR",
  "key18": "31gvmSfnuvoATkMMZ19FQSMcEFpBP2iNpooi8MBRrnnnxG23hzMxmvdUVjiUs2cRBVqFFSkSLDZdqQpQaDcZFkRN",
  "key19": "4KmjNZukaytPo5E7FKrwQzwWbtwFuMDdZQHV8mzyZYg3QqiUsNokSGW77i8SdR8ZeQBSFGL12y2sC3VdHcStBn9M",
  "key20": "5firiR9k3rfN4RbENvNTaTj7iev7Ua97Bd43iCzaduBnUJn2eFAk94SX3iN5Akzk1aa3q5KZHeboXd6WNBMA9q7",
  "key21": "SuKsX8n9EfNzBXWZDExmf59evcu7xZnD9yTTsJyr1x86uQqzVLNZemNRSconecZoEwtFDUh6ZuGvzWaAfKMUUiW",
  "key22": "5dS4mi1QLZixaGErybZqDVCjnsPYU17muchfWxAiZgqxFpiUpyom351p2B6BF49eopiY8rm2ijnBUP7bprcYceeo",
  "key23": "3E7DAQpcyPrgWvTC6VwYgyfytdTf2TWtQD3zuGpbxxpfJQLTx4Bo16saBeyoZ5iocLdDNSF9rpWmQQtsv6BEUw5L",
  "key24": "heuZVbipMYaru28oMVjmzU7LNPvvkWGNmtX2rvhcUUt4vBaFdR3xxJRnb6DsDG9XF1wDSSFebM4jqWq2jmuofMU",
  "key25": "MpHQqSDSZvwYEGeCULkj5QPn3TKAzJhL8RYe4AP5dpYz1VbdR1axexCWqmTKw4SRDT1Bcibrm4d2xFmZqpCUSvu",
  "key26": "62U1oY6Tw3WeWdhZsLfxSRQ1bAdZhteVDmyn9JvkQ63kj2a9NiG1VYPCxYgzo8TDaiKU1X4psQkahxwx9j1TfVv5",
  "key27": "WsDeonUjEFceKjA2CeBEDE6opvevuHN3wtexj4inrLPsszBr8wbPs4BZmn4bWtudXCUFqmqee6FgtvPmH5TMBtz",
  "key28": "4Q5oNA5x1B4aebgfSfKM9secvDoYjwpUwesBCQzwKuMJFVrdoUsK2riqxPxiAau6KkdpV9A9CSYqmnyrzgBvZZeK",
  "key29": "445JC5H1T6WbbGkPhbarq2nFatC1tJkowpWueEVm6Eo1uwpyq9mp5Z2t821zEA18bzzwsXRhyo2UUn4U6fTBkLPj",
  "key30": "2qZh2JMTfXjhAtkrHvUKJQm8dGF5XzdxQPB4tNuH2pteEB3Ysz8X4fKA44LfcZ3maKhNNgKQ6wfiX1WHXEHCQbHU",
  "key31": "5duN2eP5rLWerpqkjf6BqMBwfoipcau8cqSVoisoroz6ijV9Unck1AV1QVwxzWV9NcjRwPwm57BFde9hsKLp9EZ6",
  "key32": "32MLjNQFaRFEr9D3A5LUtWNd7Kx49iPngoTtQUoa2TB4tpqrgNTt4okzoPBXx9mPDCpvxeVc7t3DrxMNUpGnybqR",
  "key33": "3CTGRAUwbwQiuZf3QPpc5xmeLb4xEiKSi1yVkBqKYqWtqUGEwvYJr4sEQyQNqdiJPLwrhaLtfYQNL6HJLFCDpV9i",
  "key34": "2PAYcgxL4H1ZhYe78rPScPq7tUaVXxnJQnWFA6tz42DyyR4GShHSb7LtzfSiNdZ4RdSgYVFag9Rh3jqHJFgUSiF",
  "key35": "b4iL2jdHd9qx1Mh1eiZUMEHcFkY8yMJAGYCgJPcfntEHmbroRhX9Su8E1HgnzRJV36kMgHjkVbYMkZjXHJdhbtg",
  "key36": "5CFxnQRiUvknAhAVdw5mPazTTv6g7bMrhUwm8hs2DAPSbBP7eGaBW2ex67EhQwmRV4JZeRbgy78oC6c5Lqdn2soP",
  "key37": "5FygBAchFEijPmXr1cNB2xxHPCLjLsfAbeWNvyf1ffFH4bhNhYm1gKYz5y4bYps54pauXqA6vw59zBHMjmkVttLn",
  "key38": "3MTmVuJY4X6NJcXvf6KtoovDYVYpseZwCiri2tZnLtNRLqy8D8SwyoQRZKDrCQ1t78PFhNy6iQuoCHUh8gJoG2La"
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
