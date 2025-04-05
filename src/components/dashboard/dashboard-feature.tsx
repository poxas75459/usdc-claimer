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
    "5V3eRiKkTa2uHeZYuzYwe9GcxrxNPB1qqnbtoh5QhPY5NMRGncLHsm5YtQPp9MQ97oKyx4TyvCzaX2UW1AR3Agxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqpCzBrbyvpcZPQDNDyByjM66bc8TVpdiAxEL3yKX2VKtmNA7oyZ6xbyZQVbswFi3kDFMyRLRuiPqDEpaPzD7Zs",
  "key1": "2d9sy7sd4NZpNzcaf3MW183QJmtRpyfziXq3URKQrDQxjmW5CHaMffNASfThCX46rEHf6Q2YA9uLzJWwcaXbdY7F",
  "key2": "662qYKPJH7arVSWeDyiTZoFNGx8WQriUssu1oP6W7L4hHFpSPaqbiwTthPeYZKS4FwvW7apfNXGtpNnQiZqScm85",
  "key3": "3414ET1UTeNBYPwSkvj1VNv5YaZkZKXZ6tmQosyzJG7to8Wvx44U5mB8hMnd7jZFej7pAa72rLCjohHKAf46yDWe",
  "key4": "2LYsaD4WqtHLd6ok4en6CE8CZAu6duxAR7fnVXtdJZkq3GTyJieBsZm27AFBxpWiZoSpjx48wFVVP53dKf9kYdnf",
  "key5": "4STqXLbfYxZFMPprjhD1FfP4Hv51M7pvRQaN5pZ1JdvTnRNzqrJvficiUdCFb3XfYWRjfwExsV7yc6kcHzWS75xR",
  "key6": "rAXB5THX1ZNLofwYQYjGmRNGqa1mW4Xo9F5hm26Ro4fdx1xYXncWWYLgoSeP47xFD3LLGwej17YPMXZMPniofUW",
  "key7": "2xy6fdxZLAf1X8VgaLgbvVEjcyzUV1RBjDGEP6kifoaVSZXKCTukjnuEfKmRyoXxnfu2KQxnpWxqkdn5Z8Zsndzz",
  "key8": "5gweduKEdTPQMYHkMcT1rsiFLTwEU8PapYmxq32sGDQ5NfYPUp3XFhBvdkVD68onahxZEsrKaW1SVLgkhPovjeGV",
  "key9": "4DezwoYz1rmta32brd5BFyLz8P9cEeAmAmGQQx3eFQBxn3e1CSeZwZzQaBHzAp8icafNpbimeCveCBNRxb75cmdp",
  "key10": "3dbtcdnt2czFTiQnz1qC77SLVZbnN1E7wg5i7QFLp5GkBq25kxrGKaDKo1h2Adyhi24V292YNuwB6Skfx2um4Eum",
  "key11": "57aKBHjkkitDPFLpRQcJRzEq4EsVC4KKKhDDr2FtU3TxTE7QiDKWJR6a1muqwedd87meRX3rEPaNUhAw89tE3JNZ",
  "key12": "2U9jQnUQhHpd2o6Py5HH9WGUTvsoX5wNpMW51QAXYDi78YmPBnGxQYgvcN7WNBdAjAscWFjs3KQUeJcwir4xXRn4",
  "key13": "4Hk1XL6McMrud9otsDrrrbXz7a8nkXnGTGLsXPX1WrvdQLXJAvcyXtRcR83gU7uZs2LC6dntNiktRkCa75bZeeWN",
  "key14": "2HszHjqAohr317yTWGDkJSU9Rf68dJasxbtq93MeQr4y5Hi9XDapqPPfX5QtWRZAcsw672v8xALwGKsVeDCGpJ2T",
  "key15": "41cVXRjqAx3pwCRT48RGofPsz3maCQgvhMNHZdZ9kNFFk8uwve1R1M8J5kQ4SwPiyuQXPq2Xu7rciVp8L3nTFpoQ",
  "key16": "5VnHyGUe11Wa4HbzqYPSfS7xUfKmkcM4i2agDm41DVrbonwt3Rx1dysuVSVvQT681pFwhDv3Uy7mquNNjD3tMnkc",
  "key17": "wdX1LvUMJiTFbQMoQZU4TQLzfzRdnrE8eknk9wTer5mKeKLbXULccJ2HFFfzwpYAdz2WAjzoSjmiHEF5QR3HNH9",
  "key18": "2bm49NQvJXckqdXEsaoKUdnirwSkNVTVyDVkc7DF8fCv5f2nATShKJ2cTkJog26S6yWXig7WjGq8mdMCZESBw7J1",
  "key19": "3AZf44YqcTV4so4smqEjcVSep56ZJJRn9wgn1G3xdskw9hxQUJANcbxF7T7DYTk7SQhVjuandvwEEc7eYGgCerSh",
  "key20": "4DEdwZyQyPbcsFU31KM9sKbSQbjrFBNdq48f5gspBKYyBFAR8DHJCt3o61hEhB8q2rEgRMYC4XiR9Gsduh3yb2s4",
  "key21": "eCcesgEzqRjYWBVxHUJTpHMMyMSbGa5d7DFox6Hz4zYiyv3MNPihFqRctoSuhPFR4UfiZWWF4oTu2XSfTtfHDYw",
  "key22": "5oVPSDbacwr1wnvHhWwvd6TJ5KkhFGYSkEovbRBEc7YDffppqS7XePGLoNkvHA5EEKCytVmKUE4tgV9DgsHLqKop",
  "key23": "5BRGPjemWDqj1SKQ9YgEb8xdXN3vWt6broKQxpYGFF4M3vThSv43mfjqLMRPqqqgCYrhiwjH5xiiLS2H2aeaDhEi",
  "key24": "21cnWTtFKgzu1cyuxMUwquJw7NK6kQGCKyVE1GcGBSKvukLoazZ3Yu6U9QjbHZxR3f7gQ11P4RH9VaLBFFS1U41J",
  "key25": "4bN4ybm2xwaKafaiWC5SjJsS9iedkSYB4JasTpqbSFY4CtCWv1HRosRhV8iYhC9EaE2aS6sfMEDsDVKcDd3AVmPt",
  "key26": "3ENSZicJcEiyEz22sr3E8dDHfmHdm7RvKnKGke8AYa3F8aVLb1pkJ3CR339L8nxyWskdWfYJdAi3c1GJGkLmJodU",
  "key27": "2EVwBhgabrhmTwP19SrShJacnzXsDNi7ZviXasCgKHN8899DH5pbtKuHyeMsttdt6fWCZKNmUKQBEsWdTAHhbspX",
  "key28": "5rhUvCroxkJSdFMPZ1LsxFCBpFqQvJMyxZ18QXmUbLR5W1vfqKGy86CH8PaUHx6kUqd2JPdjoBEu9naVnkLNKvqE",
  "key29": "58BuvduVkLqfMh86ewNKGzQpKcNo7R8pSCy9Gprpc452edxcHV2nUHnQQuNpEdjB65LrjRn5SoW3guUT1H7CuNPb",
  "key30": "3hNf9yVnE3pZKVz14UnhTatFP6cdfB2NDfJMqucAbU2TK37fpDgsFhfUSmMkiC1SuADqnpJpT9aiMq8JPrJsHKMA",
  "key31": "5YNTYWahJKWhq7QJXcHyLFjw3HrYsC9uJGNdTZPiNYaqX4BHhCVj5b9FnoZ8kSfPa6xGoFqtLSFZSnx7QvpDdXv8",
  "key32": "5WAQh3SqP91zBGxFseW2JKPeYxJampDDqaXpEo8qUmmKcyMZrAYxgPRtJBRxJjoWYRUGnBQy3nZsdCxUvf48B4iD",
  "key33": "38hq43EKeszkwj9KSK2rET49UarhSKd3oPwsB3ng3gpdTN82nUnMPY358uYrzUCXMKwkirL4edab4fasfNk7JrjB",
  "key34": "W7HgtChwzRoB332eerLsLonHJcjD2suwJoMeYGjeVcy1TfmxnNLQt1L3SYXKpj2drYfKjqzd3YxukmKzPuJvPFy",
  "key35": "4G6KzHz3e9LBD9wsmEmDwTGQRiHRqz8gV54E61jpiCGkE92QHdKWZB8ZsHPToZTFeWrh34313Yc5YvJw7DuqCHri",
  "key36": "zV84BCmQXF3nSi1TRWa94pFWgPbazHTmLW2nZ9uMYYyFLf6K49U8fisii9p1riNjHmTrSAL6E8MhqxgaBcti2Yu",
  "key37": "45ZvXBKxL53HzFBMdqDk9U1j447kpzT2PywT2CtdpvoTwWNFgNizfPCCC2C95WgecQXF1W2dUySpHPgHfkGy2Wor",
  "key38": "5nYhhY32KeA6WnybLRg7PyGWZE5M9ZZCTJxjrpBVXCUr9FBsPxiUfSrfwbXmp29NSxsBctjnAtpGbktnr6YAmo4E",
  "key39": "52UMuRoDmiLoaAAyZJfcKz4GDT5cse7L6iiLq2urobtcpuJYA6y9Z8Yh1yBixszH8owgHmvAUUptkXLSDNPEcEhV",
  "key40": "4PbaJDqU5Ss4XMM1bmnAr3PrEMnHCAopnbLY35nobohK5S5SiGFL2UyBwzguGpcWxYAFdgopPTZ9EbYe5uE5N3Gk",
  "key41": "4NvDsrmUY2bL6PXNbhxK3QB6Wbyfg2FxUeZwVPMeMJjT3LAdrKwBwrzSLdCCL3QAmGimbfh5ycPk1gt7k31zcRtN",
  "key42": "rbfFy5TwyTg61X2AwB4McCX1FQf6XPmmtA8KnqWEd95iN5d4H3QFZdSszK89Lji2C86MJDEJtCcyjxuFMHPHR9A",
  "key43": "5sXKRzs4cGGjWBhhuKR35pHmThh5gcTLU46rwnSvkdvm99QC4yp4vLSekaooZSZPsELJArRkPCTtGLCSfVGGCasY",
  "key44": "4udVqaBu5ZUKEgvVeLZpqatYDrMV1pHouVQC7TiMxsYZR7M75vP3agMUeJnKAqTGupXYyAx5oyHywfaqUMr3drZZ",
  "key45": "X8vwcbfzwnEvBqrVynPR7eRWkBkQu3TFAZS58AL4bLm8qKKxPhpxmPe923CorZLPgP98SmNzw8mJvvtvUa7RJig",
  "key46": "e1cCD7GtdXyWJ3aJJzuNvArxs7n4ugDcVQp46Uux3rXWDSekFWTwsN1KSvG4DVYQTuzGgkHScktFAvY5pWthst7",
  "key47": "4aFirmCMTPA3ghRaNGmb4xUh3B9FP5CBe4TZEx66sWWUbpqr4k579a93kG9KVB1r2WMTSi1apDNf2SGBC8oCdjyw"
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
