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
    "5ypUtHKxhXvgXiUTp6Psbisxsh2zBGiihJnzXeXdB3LHRKsjnxEWEiVmkjKpv1uSCoCadKYm25vhcDHh4EiMHPx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYp4qC2nJmJUVhU3oBc42MMi4JaJiojf9XBCAV7nr6TEAgAX6u3eD4rv54Xdty3HVmMbnCnyknEaooUqNnDvGVE",
  "key1": "48fhpiRPiTsPkMVD9AE7fjqWXjsUQnAb96fQFLTD2GmNb1J7JToYYKvJqti6YisfFV6ofSGUGWDzUnBf1n2f3ex4",
  "key2": "3PycgjVmWj57ph7LHwcQKi4FuRj42PDFgm5vQQDB3tz7FHVKc6dysW3MqpaQVm375pZtBXwFLHLCkcoYZC9zegn8",
  "key3": "4aAvY49z7ykApENLzUvWmt5oyJgE8bYfv4KTN2Q7X5xCosHGTLkbCBRfr2mv9CtY9nXty3sFPpgdUPB2pds1sM9P",
  "key4": "2AhizSgB7qf64uXFoMvnCPuDNWXLTp9dd9MDEp81HpTxbduKdkR4agrAZAeo5FNUennkZt9qJN35GgSmF7UduoUy",
  "key5": "3BMYm9JBJBLH45Kk3kXxcnt5AGBTAokaistzRtZetQBaiRheaY9tA5BWkBSyJHaQ95FmD6YstgKuCpnyXjbweMUj",
  "key6": "3LmVx2AdUMioS949DeAKvvJe2dsJ912mbGQoZSZ31sjLxEiAty3aNBqnqybEDNLWGXLUV3sRFC2VvbSTJdzCpovY",
  "key7": "5hR2z3q4itGuwPg9iQSowJzXqFcPbpFttuRoGWJRh7hJgsrobyp9JZFoeVS2rSR51WVs7CTbkFbuyqTkU912navk",
  "key8": "56rVQqELHW6R5vvS3urCLxWsRsdoXjiYc4vYDfyRqzbDRx3GA3gtRhHrPqjePCzuCUq5G6XoNwP9CZTV4b5wn4wN",
  "key9": "2rDzVRLJbHsrb2wZxqUNcSCtnrSCbT2XsW4uz6gvSCstPtCndznExDnT2iHovxQNm5WDC4nxepN7drrpj3xATYbo",
  "key10": "3CjXL1rUMxYUa5MoZTqVGFbmeeSEhgkUGft9ef6s23Jr3fvZhddWDTBwZ3nFfWpjGRnwnCV4h8DN4MKq3p893yjT",
  "key11": "2HqbsKGrHDJCQ9odEzSWjAvqAmkCAy4jxXjFndtBWVx1Q8oLMNM5pq7BWbQkoUsciL6RAhKJ8FngBr17LDq4bmtx",
  "key12": "2KfPftABS2j88yp581V9FmRDSiT88wuVtQthNeHtUuXiT3pPLESrFEMzq3Txx8gz7xnKgnWHSR6Nm3xPvF24w2Ny",
  "key13": "61eE8CXRUTZeAafDB8hTexENwZLV2BnQmAsbBAouz7GgaEtmabDzt197jxELUdK67QVjW14MhgWjqqXyPE65yMdN",
  "key14": "6u1kxdDbhesvgpESgSpga1SnCrkgLLvw49U9QXLuoq5omq9xpSTGQ1khrQhmYFptCifmPhzzes2JvqTmVGEdtQK",
  "key15": "384c8ghRHMFkBhjUTbvUHTHUt47Bkqp7eSt5XWnG4gj5hb6QnUKt9RtDE8bmSEdAqavwxrc1cArUrE76vMmLttA4",
  "key16": "9wJDcy9D3dks4SSrKdoY7roa9nR6BH7ikYcxdEakrx3iEtEgGHcFPTgmKYNwTwFEqYd9GE6XRvCYEWWCT3HadFE",
  "key17": "4os5W5E3aeGjtWimQx2yMXzvNYN7euAgMVDoy4mHH3qvjXUUDJy8AFkFqnyfBRt6zSGNMebKbhucgJyvwx3X94Kj",
  "key18": "3guLwPHkES9u11dhDKtUziZpRQxDBecJS2hpCxfDuePgBpPQzh7zfJKVMRzrKJuq9NmXwFrPpuFfuywxvQnRGs1R",
  "key19": "5yM7iyacvboiDt85xk4GJVU2qCH7cwSMRSRMfX9D8Lg8QuZLJBKFTgiopKnFjAsPyzTpXV4iUokixWh8Y7z7bpew",
  "key20": "FxoQUfLBhDxF6Ed2yftmmwDHyLi1SyfNgUhd9JpFupqL7KLL1QTDq6aLvy5N8gcNzhy2vRdZ3xFZtvajCpcFK7Z",
  "key21": "1PXEWZ1PisfUq5ntRQ5R6x4rCB5S826CJQnuzxqgGdCQ8c8btkec8DRGWK8gK3zBME8xbjDs1QSYHgC5kmcE33L",
  "key22": "2UHQ8fHCtqkjYMzjTcoceCDvWEfKgaBBeQVSgaKMiboK2n4zR37v7m9iPYtQY5DDxLUdLdRTYddD3D1HspaaabM9",
  "key23": "4YEZrVEAJMPkkHGGRSXwcpkU5K9VDtr1P24hNh5mGkD58EbhUeAS4LsgpfwMyS5ruSy51d51dDmBdp5fEhbGuQur",
  "key24": "5yjYTmajcTNE9jZAC3L6YABQ5Patawx3XStGEPUDGYhLTXBcXrVFEaczSUF9HLLZF2eyco8ZLECh6Jvj5gbiP3ir",
  "key25": "41cJaWH9qxt6Gf67wJMmj9SULrUKcGZUz8ry2yq58x1SBWxPbVmmwqff6o76djByvjuUEVRAePzFMTBsmQ5uW5Bc",
  "key26": "2MVpurXCsWHF5uvvu15RsmRF6dKCtMsxYg8QdDcn5d8F2vcPprqWFR2HBUif2LXL2cEYhn2cZq1jyF2UvhtBW6gf",
  "key27": "4yFNqKNxKHNfsGRJFUiFA11w9ZkNEzTVmaYyNNwyTNLj6Dnok1vv4C7aPHhnJmxAWRyXDDYbrzWUj1GNnWmGnfRH",
  "key28": "osUhteER9DhtRiKDDeScnKdCVeTg64wtYexCLHK5h2Rm1TtafWFwteWasQZeoGRsR7T9uB9dip8ga8vVofoYLpJ",
  "key29": "3myeWAC4fqh9CitSM3f1TDe5mkETZ1t95rCcPMjLfqwn13a9cJBtvu5FRnJBi8Birud4F6wTXG7ARUsfjJoVmaaW",
  "key30": "4BjT2ELw2iswhbac2kfwuFAiftgBRVD24786TJsYpc4PnnWM3kxEJHCkhncHZYReTPohrBYtLEkxATCYt9BhfPn",
  "key31": "XEkA8ntzi6CgFjNntFcdH42J7FRv4WpBqkiAFMqvKAvYTAzPWinkhpjBGBGjry2nFfaMQT7cZFkUxWEKJYLg9Km",
  "key32": "2AvvAmY82GXY48NLJUbanaxk2MSZLuaK5N82ydtXAxsDswZjZCoZbnjb9w2kxt55sSC7L4xtRwTJxXhNMYJHxbZH",
  "key33": "4dMD4MsmnooZUS5f4WqK8LmrEP5j7Df8QPos7cswavdbEL9HVaqWhmqjhY6HRXbvmPUgVf5bPvFRJiDHsvivpqHS",
  "key34": "3JhRfydDJ4DJohfGQPqzSBwyFHrtdaSsViCEhV7T3k1fX8petR7Gv5NVQhi5Gccd9BthscRsNQVQNuoLb7JuK63t",
  "key35": "2huMfHKVcDNTVa5jaF7jNdL7ywnm3snuV5G6pBiVtAxc58ow4B38abm4q2Xct9Qg1jHhWmCFdQ4wk7VWLnUE4FyX",
  "key36": "5UaQ2Hkg5mSCJ4nEEBLx2bPTGbRMT5Edw3Yf8vaP8EYfoNnLF3bDMHdbiQHrgwHqc51fMpWksXxPjDEFVjcaaywS",
  "key37": "9XtC1WrMbhVLpXJcy3jUZkWTYi8fW7FESgDXKhE4YURGcVC2D7yqnoihbsc7sxF2bfVNqQxSfoJ5KPuGAoYLpsv",
  "key38": "5pJxyXLoNSMJKZpwSHNznXrq3qdWRFFuGkoPuL5uNxdnctHSMri2URvia9yzDms3hEwBnBZVuGS9sUQtp68686xF",
  "key39": "45UT5dPCmH1ZmBiPadMeX3x6SNgyenMn3QzutQxqJ2xQN1RbzpaXYpt9xrmgvHBYtQiR4Qan4oB92HjFZLPEA8oV",
  "key40": "29cUdNvsdBK8D1V6mjzjwJzSFAxQGAv5Udo216NFxPSRNs7Mekw6c4uL2yX1an8HAtaJpSTTdnJVSunxrRA1eoKc",
  "key41": "55YydfX4sbBkGjfTJM2PmoLDsXuVUp8eHqzMvqB17MGH7QtFxmTRV7CwthepLWVLU7YwwxaDV8gG8ojqChmvdGNE",
  "key42": "5QNApfqN5hoo8NzhrrusyXFFRTftJkf79jXMsaS6rjikJNrxztVTfMxutUrDXeVVUXUzy5WNU5okCR5pMqFSSdrf",
  "key43": "5Z8edKhQucVoCGkkGDsTRAWLPWPQMv2aioMsqqwJBsthjnVpUDbEKJAAjoFHqZS9Zrk5UCbM1WhqiVbGffcETsoi",
  "key44": "bbHJdDMyMjYFQ3PWLmgHwy9Knc6JM9n8ojZjJWMt6gKSfdm4MRvnv3yVkFzkKhG7iTVDGrBVfRrU4a8Q5aRHrKA",
  "key45": "5xqaThd3qoqGSrQGQHW8Zrn3zR3DqGTTYHgAYgMz6BqEoSiriQWAzQRsTX1Cb3bYrTwvzkoMtYNeHEAPDEKFBfYB",
  "key46": "3KDTqYM5pi4avMutwWbJJQMgxoBRy7orA3mQEf2u4JWdGZENtbWuq5q7yoFYuyy7YmAF7tUXrqSxnMiwe1LoKmMn",
  "key47": "2QLDEzvzwzbFt8AhYNjTVPCraxZsFE3dgNfG8vYNJbKX2gzCzb4zcQ8Z61BBD94ckzM9vVadaXASGAeay2x4FiM",
  "key48": "4iLyvHbZu7TLrPwbATwe5wPJbYvq3GR2QV4UfSto5JWMCid689yLRurycER9925bMjnWn9nFfVqrAzUpPABgQeA4"
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
