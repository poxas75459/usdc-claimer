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
    "5HaNVen4yNXcenHQFeCcfcxaCmRd82ZDyQU5vi9PSTh14YPQe2yz26cQFp6fK722YAKYpHCYewTmP3oAjPh8rdqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycLcvnXjyZxNQyPtMDJAUoA1MEJ8hUsz732b9GTNvTxX3GJB62JTRJQzuanc64gRVy9ap9vSNw63GH6jSoZhF6h",
  "key1": "3aDDFkCePkKZXdTtMgiswcfWxTAdegVhKj5nSVb2ngBp4fPtUK3CzXHvRygpJEX6VFYFKY7Dt24hW6CkKcqqJYWp",
  "key2": "5tHvE2yQKkN4HUPQ4Yvgrbxg9GjHU45XadQiuzuB8acviXUiwVYfVmJFAMeMbjVE73k3953nSpYdQM9wWntAjAnD",
  "key3": "2zJecw4NVG6qXBDZkr9c1hkYUx7xdw19BCcfs23WQabGTd2BHDb4r1mURqR7nYvXaHkwrpsPVxFkAbCjLf9fwMys",
  "key4": "62vfVMUznTpo2higvzKGsByvwjpmE8ci2etuUM8xEiM6syDCcrQac8d6HpiWFMZa1zUgRgqRpn1KSoiM8rDRHszF",
  "key5": "DZtQGihBNppfssxCF9oaC5YNj5L6xnBjdMrX2Jv4GRajfDmFQVRyp2DKGVamrasEgJxokCF5uMpMW6EejfXw89d",
  "key6": "5Tq6jZVatcMWuEEchNB6DDJj64rJqypx1r9xJmkn9gzDNxMfwcuTdBYVCtxKiPAJ38tH5sLcLRjDkRSEvx1y4zcY",
  "key7": "3WACfxL7j1hpwqgVeYHRofH1eC6mRBLyjVhWwHmv4yuZH8tVN7g3FPw1SWcv3DGpNB6ZdyfsgkRJjVa3hYMTj7rQ",
  "key8": "39SpcqapCFFWWTXFPmCZye8jimPcwxNd2WGgcX1HF6N3uqcixd4gxpTCoqzgCWRwfp1mEH1xzUsoewhiti1pYceG",
  "key9": "4ZiHvFjr7nCfapB6sKn16g8yWHsaXSqQRnU7wZo9Y4rKKg8anCkCvY7t48CsF9RMRyiMfN6RQNFQ98Qc3UvVkst2",
  "key10": "5Fbwkh7KRpHH3c5ZrrhNPT7mrKBsWhfeomhognhhw7BGrk9enTxhPVhTzPVxxj57EBK9sMwJLY39YZMhQtwd3qAR",
  "key11": "3VahFjjst8zFo6FM43MS4ibh8nmFfFT4npmf99UHRhkQc3NuCA62JNTiQV3dwEVD9XenfsqmneQaSNXq69FT98zd",
  "key12": "cACoEg7Yi1UpHMZA5SCJ9L4YSeLka2DYnKpYf1zJNQfFzVByTeSXGPtSwpCoEuQ2MPYRMurKi3rTPpc2CA4LY7z",
  "key13": "4SrknCsaJm66FwQf4uybknTfjkr8go6hponGWsP4BTcmSzGwWquBo1R84oPTYoPqFHFPmo4RbkmtvJrZXLJcjb7M",
  "key14": "oL9yYzJBDRAbDTQLqfRmfg4HBjHsokeKmrByb59tMFys8pnRjAWfn5qhsAs28mkX7ikd1xepUujStVgwKpvb4Yc",
  "key15": "3hKwsCbfiGLh8ox83JZB2WRNxvEqoBooLEjjeBNxWhs6jm3SxwFWyLeuWT59D21GdUwRFkeGuTFEpUTuTMttf1xH",
  "key16": "5DvcuJi3p2o2M2qUh2R3aLisDtNP6wmGqEtzaSfWWPv5CeBqKjv8dLXVm55eWXMBUEcEJ35ZyJ37PkCwRKFp4B7p",
  "key17": "4xwxY1A5z7R14MAD1QJTNcKxz8jqScesqP2ZxgzNLmkGBwA597DLVoSrFSdRLdRFyC18rUsyqhZZxiyodXLuJ4KE",
  "key18": "5qmo51CTczcfks171yzgtHtgTfyEks7vS6RQhwmPwHFHYstrTkvPz6oUYwVKs8sMNVxTN4pAmiihEAGiHTomA7Ex",
  "key19": "5Njna55Ake4cqTUHRMZnnrKdnUsnVo3LiBixpdG3GFQzY3ZnUhhU5mCGDHtbM5ajQfk5A6LKk3V8gvwHrEpxt46W",
  "key20": "2eM66UbvaP85gw8Sq8jrU7aDF4ASFtDB76Kg3DEQrcYU88JgGUFckMpvJTR74b419Kqm4aUMCqvLiwX9LRtdCEQk",
  "key21": "4SQLmz8rTULm1iTBecKqDSVHyhWBSneZ2MrLxmbh2ZjxyMjqwU3pxhAEqcmzPP2id4QLhmYTZGysjLnrqYrWHu44",
  "key22": "488DWGQv9QgUHoQoinP16Jv6W5cMwSqhwBVY8YDRvaX6ijkK5jgXKQKVsUGmYK58FUoBptPtbu92y22W53yud7MX",
  "key23": "3nCUKXU3S2B9mSezQosQsBzMN4Z8yD9UwgTwZixaDeCFvgkFziU3aNHhJTVBHdDpbu2S5cMLyYWbH5QUL8t4PyxH",
  "key24": "9embYpK9yEo9iMmbArrEfd1ZNr6AWimtjrct96HQ1MyhGFmqsBj82aBmp6YtCky4XoMQn2fY2QNmtKbQRE8EMsb",
  "key25": "2MUpDGaCJk4kYms3UKHe5Pv7VqUtUHsFzmJXXPAhN9reFmY6omLMCv3PEJv6gDd6cT6ZRUXc9FrQZgUNYdP6RhBh",
  "key26": "3wCdt2LLjA3ApuAUYa3mxnxeCEGjRCEMePiQnvCAtADosebcacKDB53FXNKWCnaMAUdGtm4e3FrsSmizUU4hupUi",
  "key27": "4p7h722rhjFqB98xGYxMLyUCMGzCqCMhKm4Ji3kt9nYkfqAxoHBwErPB5jyXUYzhL9nAhcDepf4XPerw6v3cgiB2",
  "key28": "3x3GwMf4BxWSqRGjjUDCUpwqhW4gQJesTveRCDHxRxxqSk5w146apQWWFzsxL7xme3rfCvojhkvQg1HFK2mgzUMi",
  "key29": "5PcYTxebVysCCaeyyB22fyVCd2R8MRYWm7qaA1ZFFhPw4cBKFGegvmD3FDik1qrXZqtdAXcKhVdgup5R5NPaoyxa",
  "key30": "4t43HNU4V6yv6YCvw9z4B4SeAjANBK6Y4afhdY5v5uMxTVCD51PVRBngneRDya8tTgYprjvJLTkMeFFxxWp6cdCv",
  "key31": "4s9VV2ogtBW5jX5VNYp3EipGWhgyVtWKq6p3nxw1GmDciGu8epQF3GoSAbLsfs3te1tbEwJJkWc4E4Yg6GaovCt4",
  "key32": "3oCTRzeY21ATQpHG1FCvQddoHHrv3gTTncDFjeMa2QUYZ2ugw8F99dfqQmmaFRLEH4McsS6LarkyKoSh8MJSgUSC",
  "key33": "66VzDQrqF66Y3m2xor1iVLM5oYNP9Aekh8h3Mm6UmtCcXNHTT4ZfjE7YnwtN3f8DZaKqLKpTij3RS54zoi2v9bM",
  "key34": "4mHpjD43DnFjQHo6S8xxqGN7Xy6rdWrN26sCiErZuWL33Mkr6kMHuhGsw6fgoskLg5N68Ct2eKgwncrMCjTKaFkX",
  "key35": "5pm8V9vy2SzYDuekYj5bCgusWb4LLghEGJvQS67iiRgcu2zL9DMuPFDD9fNK5ykAxDvVeWwwzHYfKnNAGmESJYS6",
  "key36": "za9c9HAKYxWHZnRGTMJzytE37ExQjBXRHH5B1Y8hkNHHMgMeFrMAQeHPsbXwwaXKZcmRPb21Kp5UFwHSz8dAsM8",
  "key37": "47Fi9TZnCs9CTa3ZmbLzLaABs1LMLanA2Mqcj6xfJsUx1eyY6eu6guECBFGKhNKuGJsKC6fEfWehspnVQNPyXX4w",
  "key38": "2sDuvwCfrux8vTBd9otJHzgyKDkqZHE1Mgw4h7SvbJXcy8waYRZ6CPYGnq1syjhytf2GZVCzyJb3r19CRqASQaoq",
  "key39": "3Ave7CQU8Pu3DdxeorcuTkNT1sA7h5mPajEYoWWhJD1SDdTWDWJMfDNPy5a8ziYjnCBcRcZuH4s43DpbwgQn2kBS",
  "key40": "NbJbcpLJLtWMZuXtitdzQW4CR7PcHrPd9uLAmEcVQCjzivmxRbKA7RTs7C5iKbecrPbGtbcaxdpCkSotF5kcJZc",
  "key41": "2MPp4UyAdD9LKHzRykgskiKgS5aQbTgNZNsGxya4diFnCyzqg6XuLwaAM8Qga8FjbQBpgvC61dMXCsPKfktRVkwN"
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
