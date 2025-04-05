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
    "5bMWeygPg2NHW9TqiYaTKBVi6cNq2bZ8v5Sg2uovNcRbTDvVNXNCgoCn3GQaDsWcxsRUaA15E1yimq5hgybZuBiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2ZVjV4kBQ8xWenmc35mGBhxGycJoyYEeg4y6fG98XgQES9DD2aZbWgPexhVtqnn9TtuH8b7aoQQNjsvBtxMhk2",
  "key1": "5eyqMYUh9DnSu7YMr8htsg7wKshfKpE9VHwBTnSbkQ32naaiKepvYgse3z89vQEbRQPQavNc7F9kfWpU6AatBRWz",
  "key2": "2ficZQF5cW14wi5A3yAZMx6Y5FiEpHG5uuSNz1XVc9vtJJmNuiBNJFGVji7oA2L32RWSd6KVDGsU5E5uXfiyqdHZ",
  "key3": "4AQ1k6M4xazTdBmXjn8hb9TKJTVtU3Hv8gDPYgBm9iUiqBxtsjFVyRXqgwkZ18nP3tqFDnzWan5ARPakVyiN4iKV",
  "key4": "611fzdbETs6woZ2L69QdU1xtczmHcqZMA4wFKKTpEufXUmf1QPPJpn1pHnqPdMnB9m5YLnRbSzy4o5BMa9epyg6M",
  "key5": "4WMk4XSjGxT7ewLffqAocmNt9q2iCbLdg7UejLJFMHoMhX46wQXjr7urnLUWDcxTB16J76PMspT7v7AwrFYyEi7K",
  "key6": "5QZnzue8jZAx1wjKFifrLgetniMij8nBuhAJEcc8umHXpCE93eaSt3vejjQceuVbdB2Ae9qP7RKb4cp8nxAuXkSa",
  "key7": "SEYkVGQqoDY182m6tym3Ri1zaGzi162FdmgThh3VTk6yjEsPDcZ8QXLZkhsPCvVa5T35GkKjK3LBWgBHBjtKJuN",
  "key8": "45KdRL7SHfsidboVC5tShbfDGdMDKEMdFxCV6nJQSLgcvym7tJSqy79NXvULYFFkt12W3FM7MpuPrL6QFSpnotLU",
  "key9": "56CE8dKYAxSnq5gCh9HVUhUBEJd2ufszW3hpMtQB6Ukkm1yZ1qVXrVKcXk8TUW3bMDJmkbQBR6BLQYdKXNELcU8j",
  "key10": "3QNxycMBFHHq8xvFTkCKUHgWooXGzkXg3FGm99ADv5keVxQaNb15x7QqzgJvPtwkAaSKnJJyVV2E9eku8BWScLi",
  "key11": "4Q5pPwicM5LM8ypTLAJnwe5kqWYjJGBvMie3cZykVs6Bs1arnnfs9Qym5jUnKfVsDirJXYp8ZQm4LGjiW8TDUyux",
  "key12": "3nseuTQXP1v2LsSWKmmBRch7HKTNjqf8uffoRoY1RMb8YvisHvqQCN3L4yyt2UXcSD9fvPS9Sttx6QXfXbmuuiYE",
  "key13": "T8z7KD1sSBhnuFY6U4ofZbTQeWVQrumgvvfG2A3kagq2oictmQGqFaB4Jda5yh5DKUoj1UdyoPHjxPrxgEnugMJ",
  "key14": "64Asfg152Rtx8MqLcJx91ZhhxjUhcuWSjCVSP7UyzoFReCnDFz7ggCan85oNXwST1gxCMQmuZX7AvNBZkwp8eg8t",
  "key15": "67cxpigeGkA7d2aane2mxcAm4pAzEmrCoZwYDMHALPY1MmgnhZZynaCioMzbHavBpxeADWjthYcrcaeToyUfsT99",
  "key16": "4X5skTXbhyHuekUfTmk9mCdCutWsLR7uRsgPEFQq7ZXVy2yNioh8QZBrAuGXX2QTHtdqFBKNCVbQ46joXzqFDZBk",
  "key17": "7bmQzHpVyDCDZh5ien8wx9yxADwKhw9SDJgy6NR3yK5fc12HjkzMaPXDMeX66tXtjhVNz4gFzJiS7seWBQ5DL6H",
  "key18": "3dx7kEMRM51h6ZkHkT4zgkDuzwN9BHtDYs6fmP8Xnk1cusPtWmDk98qJWKzskKBJRc4L621FKNnRPeuN1Jz6m6LR",
  "key19": "2sEMF4z86oMLTkJ1AfAVCgRuxiyKVZ73qZB2vvM2WH5oD5anxyLDe6q7h1RvwzTTvrU9u5CP2HVzXtuPUMzwX1ss",
  "key20": "3WxiC1D3mkt12VoffXyuDciA99ViLKpc13Zy2DBFN6kN8vqJd5oL3REme1TRpEuJpZwqe9ur6Ht6hpLTXRMTZ4Ng",
  "key21": "3QzXBpZXxpeUDVxtNGghdkjumzxZrxaXPxg4T2rZq1SqfZVVfPEFgDxqXsMpb7EC7tpEhjpNvPxoibQyAJoxjCMu",
  "key22": "2JYSSm7RMdn4FUaxEegXaCSsPaS4myqe9kycHtuWa8iGXBBCq2rnBFbQE4HGcmRSrLwMJ4yZ7Fqv9GgAV2HSczHj",
  "key23": "mUZNVa8XR6S4GMsEPLqTMqNQwctU6Mb5mi5foBjNYwvLHb6XXjxHb3PEFW3tE2n6CGGtwhR6riT9qbubYfQwbGi",
  "key24": "5Gnyn6SguotopV1vEWc5GahvedbqWE5Z2QPh9eBT331T3Mx6mdqekWwTHjBrfyn8KGHid8yjJE3kiY8JA5G9X8mj",
  "key25": "4dk3sqGLJET8PXSnnFHtRnpmSm9yqkXiPzQSgSQFJE9sLHrvTTdtyfe1P6awTcY16KTeNgr7SeNth8v7HsMLDtsT",
  "key26": "4NtENrHJFnaySzMqtPzsirbJdNMd7PZr2eTNDKphpHqHra3LqGWHdQjWhpZEYNjo6s41WRXTcWwSNqB42sDFKdwG",
  "key27": "28gExmw2UGWuGKewKyP2XF4TuUyiQnd585XT1SBApGC5mayBeu2597F5BAoV85dXJTrdBtr4k92HSJVqm4qqBVUq",
  "key28": "3YRApq9JyZetSwaykCFgtX9P2VeFefvoBXCdVmP2ydXjhbmE1f26x4PqVtf5kRnimyXmCEgCwBf1RgfKW8FQroNm",
  "key29": "5HwFhYwbUk72oLXnbEUNyY2Ci2KsGDAuKizuV2eYZewpVXog9esegT2wvjttATY3fWDM7HEB8YtyRveqBrvZCS8v",
  "key30": "X3oWPHdXL4caYvLB6KNcyVfjRFXPyTh6eU7n4R8dvCHkDpCudqiEg93Ko4fGYxXNPJwCVMnH4hkjeaLXKEu4RNr",
  "key31": "HWGGyyaPgGeht3XXhd46Jcj3fyXZwDsLGRHsZNJfnHQWmTvEHZaEaC3kZDQzpesymg3zV888sY1nDiEcsWumcMr",
  "key32": "4Mt541REevjTCb6XtAeHBb1qxjY8FDSmQ8HxM4sn46EBbb9K64kb8u6xmuTqhhCCYgqrfLRuQVaPZYHbPkSYBrUT",
  "key33": "4YXRtxXEPpkoKMsW29idYETi6BEXrLz7RWYWZANHHyePad1AbyEmNPbMyQHrESZbPUhHwe6JPP6dBp1dSZvr59Am",
  "key34": "2jNYSQQ6bgCgC36x9uN8mN6iZSoRhHu62r16SvyQjuKkhNBVd9dZiFPu4ZUeEDWqSGpGZWcQKXmTyDFA2LtBDhys",
  "key35": "3Jmuor8bv65fQbQ78TGyR9gxdK4MJNMtwXuWFkcFWhrdS4XsALMMpGa28nZNwCQ8TKDmrzShyanrXzf5xRJv2nft",
  "key36": "31XQPTynP3QaeV4qwQwGfz7zE8yJUptcarNYQn9n6iNqHfBDns13cQShxpYmVy5nRngzvNABCHJiED1Bm9LByDK6",
  "key37": "2d2dbcBHf5ovdeMsj1oBhKcRVhZCJ1tohx2m8FWXuVQzZm9HbTsWEKUuj95shTXFV5FWJ1JyWyVyajTQZm4XUKdk",
  "key38": "MXvCntEFLftakBgYYADA99wCH1XV8eWXDoB368EbPaZXZHWRmcHpnGux83THmLyJ2hi6XcYrG3br2LHVD1WqXV4",
  "key39": "5QSqT1BwTaRiqttBTZj8xxynEPiPk6vjdHnSR9dnEXsh9dEjpRLv791pUh2bu8LB6Jx2rDd96Xc7QDfHHiAjmQBv",
  "key40": "4fzoCzNqq24axEc7KQS49m55eRYyuQWFzjWP5hNRL7CAn4Pc3yF3XnJEvuvNWdv8rEnqwUE4BcC9mvbj1sQtZrBr",
  "key41": "54CCFPpsj8tU2j1tTwWANzR6p2w5HfcRgDHPATghtxgTXiVcXN4PTBdyahJ245kKJAVPJaTWXJPFUKPMLv68iRyW",
  "key42": "5ovzH98TEN8iZc5XFSBKCqrX4uELmHop2nexiXCkZS7m1rW6KiEVyZcHsK1AnLtmUnsEx9D6kCAB8XSaaTEzsaxy",
  "key43": "NfW4f6GHmKQ2YMM2cUHqq4v3mw7SBu1HjnS9hTrA5FqXuwjAjo3tCSpWeYJ1g8HmVFkC3tt9t6fAMR4UvRdqj7E",
  "key44": "aJk2a9oDDYUDQE578DgUi3dru81piLmm7rXdazuWc7DPZvTFy1VsGG184AUeozCKntmEUViy1hWGPXiFkRuuxqn",
  "key45": "2pKuWB4BpzeeoAeQYhejDg8TrkdULsW3oLG3WjJp9niJYdoU1spXLEMvAmMHk2RbJ6QYp1BVv6KEgYWLh9Abq99Y"
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
