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
    "4m4nHQCAnr2Si1J6UtU8aawbYTa1cxm2F2maaXei918XLUaf9Bmboj2ykiBMBzZxiTDJWok6KP3q9THeoBrMbek3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfaKxZBGsZSMk1hfuhB9fiPwTVodRNgc69QsA9iKNsZUQtHa3GWxMPT1Jf1CitNjBbDH2ojj8hKDDArT4cm41is",
  "key1": "3mFRb7RsWjJGY9vwjhMcrofhTPBzxMSMhXNPMmM79r33RJVGkoapgf6uT2MdSwEkTxxtFt8BWUE6rPig4Ducpnzo",
  "key2": "26H2yFE84bvyAK8bhem1o6vTRSbYzWUHEkWJLNZMw4f3dva4dihyTFM1FgyTyQuM9s5jCAibMYowEjktfEyru1LX",
  "key3": "AfRDT7taP8XMVciAZQubGq5yH9aq2ZmB5KNCT1HcNSkPJAHrxq1kKxyKPMDDaAoRTfG9VdwGAD1ZkgEcJoRuL6Y",
  "key4": "63DmTHU2v8tEN33R5biJLwZoaNUPwjeNKWftFWrCETc9kR5AGG5EnkZMQiWBYdikbEse8NQqQpzYNZ9A5dsXZ9uF",
  "key5": "2e7VULrYxuxM9ksLMg6reKj5fgQQ8htXkJFS8vS3oS5cz1RkPaH2Ju4JnyfcbXZrgGa8gD4wG3CUEwkTy8knM1Xo",
  "key6": "STR2QBgt7Ukrq16NVAGVCdzsidEaCAvFFW3XpnX9vwzmgw3dMHi1vtcMkMDbsCq82brPpwAKQWUsHju64EJc5RW",
  "key7": "s96EAp6zAB1dPj6HxYDEUL45zcjQpH4YAfNMiD2z5PXRfaooh5J1FToDR3LFKXJ38oYsRaBqqFckysZetB71mW2",
  "key8": "5SALzYQq13CdE9pKDE2BF6KXvS4RtoSNjhjSTQnqCBoYFTxuFSTFZXEPaDTMEKqgarts9Ljaow7YpKyGsYbAZiEj",
  "key9": "4zGx5h778g5BMd7BeQWoKBt7tHeo9wnPuMADJZsEyhwm5bqotJpCoPqGg5GWRpcHigebmsSDgiZv4L91enpZuVaq",
  "key10": "jUJxxS85eLGabZsAUZjVtxNTyS7p8EJc5mAbaztLhedyKGWCdj9m5XDc3AFkYtPTPsJkSRjzEFcRzpWGXLteZRo",
  "key11": "4PUsmAzbzfzivc46GLyxGk7zQvCGXUtKNMdQ3XSNPxHMtCH8o1FFroAzwuiKFSRvv8iteL766joiYskcaJMCRhFN",
  "key12": "5C85JqyUX9AHGKgUtokxzLD4fRjM9fsnE8fuXPYsEPjDcXoi4vPDRShBHdUbttK1D4ztZTX352E9p97MJPbDUfD9",
  "key13": "589EJm5qpF2AwDR3WkEdWZq25Jg564dH1hJCbRwdLNBjurmAPX5HmNNzaNaSQtJSYgeqhyWKc9fVc9zwsPqFBr4P",
  "key14": "3pvQfqebdNZCkFCcjFWBio6PBcwof2i5NJh643Cs5TDpK7nx4gSgk1qCcwCD3MRmnMAkoJGURE5yYY4oN2GrVvqt",
  "key15": "5doJSweo6vQcerRPqCMPTvi79Z8HNei9WDgGj6KbqJGZeNkf47ivcjMbkdFQbCGkSAhWAn2cYfnJE9paq3BSbZKA",
  "key16": "2Fe5GwFoH6X2oY9x4bXnJrxWrfvxeBgcTYPHAJ9qghTscKTacpcwehMtAaHkZUaS8xiHpZzyckKnr2YabpTEAKNC",
  "key17": "4ZgyNeQEL1s12xwoyr6wikThFgydxXQyQoyPJerK8B5KBAkBxPL3ZsCYJW6rNpBgJoVERPpycNo4G2a3EWW6DyH8",
  "key18": "n5UCiJqE6Am9WStQMttdbQqq3GstFRNywpUAHpWzGMr5dp7x34pTGXM3ecbZTnu9BhJCmoLs4EGzWpJrpDmzVGW",
  "key19": "4SD74Rz2fbuYtRRkgXBgrSCuqYjDuPUabRiaqP8fKgA235a1VpEH6TGALjsj3Ln9t5cUrAnV9WZbxBQkbTVrxJgU",
  "key20": "5iaSkZ4vQcrDNgn1RpZmv3LZfUtpaYRFt2Bhd1Ck6BJ4fVcERX4KVeGSfsXX79SYPiRxxfCcR7Q5mbuSsBPFriw",
  "key21": "3q3CAFK7jfVCiWZWcrHqoZKzbCgjEnwTPfgZECM8cjSmT53GBamP6YhVbyoLvk3rx6fDQK1wwBq8Gv5q9meVs3Rd",
  "key22": "5wq7tKqoWoNCNt15TAb5gXHcGJgYBayhkKDVJzwkX2bAZYuckEyR6SBvYMqtWdTBaJBFp5LDydpAMqBCvaLYgyps",
  "key23": "4WFcrCrMo2GazfNEJDahdangoibzy3ahG2AC7ZUzXAvAEa3Khy5u1oDBn6aGqgAVKpBfuFpBFxbqXSHgYsc199dx",
  "key24": "4TYC41EezicRvVCkGL8gBogjPy33QZuurbNVaaL4ZJrn9RPB9LnDtsKaEmhpS2LsEVhyC9VLjfxK5pQ86THWcupf",
  "key25": "2ktarRSUiSZ7bMzsUtitKmcb1xGVQMnmp9KnFRM9Wuoxqe7q6p32sksh96yVE753dFqgrqA5MWE3hQYWBaCexPM6",
  "key26": "2dVbY55Pxy1eH1LfsE99RY8PKDG3ebSh2rGXmSwAnCSjhXGMyDYSbdjbbvnCvS17KC1JZ1GcqYCmzdNNrfrnKSso",
  "key27": "3NyN7AbyZBnoJDHRN7bSo6dd9gyQiYkmAqW8Bbj5WKmLxXQM55xSLqA5oxLtXdWqGsqK4v6zRywKRzq3r2PwL1Uw",
  "key28": "uHHyssP7BmL6ug2MV29Z551X2yZzc9KzMqaKcLbnjJdaKjRin4jw17i8VpsWPYmJsT1FdWprA8DhLh4yAa1QUVU",
  "key29": "3KTFGQCfz4nCTBrfeWNva2bZeTUBrZZhMEs6yDggF6g7YnkymKryk4u21Ew1ZQ9dUxZ1KRrvyPtfabCi2Gwnh7zd",
  "key30": "2Wcjnja1r4iNuWzVVS3owPsQLEq4kg7gDogPPbW5WUupU6Zc2R5ya2D14QCLbVF8M9iCpxH7UhwwPZPHKqmhNvMQ",
  "key31": "4TE2cHFbSTaemTSTZHwUHJurKa2nM21rLggpu1mheiCAMHMWMrWDqwJQZe7hvmcHLhvdo9bAjbyDKKKxUpBWVape",
  "key32": "4zGuaD226Wqj5iae68Qf3aiPDFmck2v3jqaFCfZdUmee219w6tQ3GwGK7omQtfWbaKpViAZfnGiAHQqeAXDk4Jon",
  "key33": "tRmhrBv8m9fgN247aVeRzSXnJR1PoD86j2kGNgNZfNpBdpcJ6jnTHMwi8YX1kU56TcV8poEyjf56YZYh7fQgVEs",
  "key34": "52CEN9cWM2TBiwSXiTGQQNFTQCXQryu4D9pjRz5gnJ4fMcYFrfF5R6efXBjvGgzBhRfbsi8R2mR6EkEjRARUdeV7",
  "key35": "5P2KezPFJe7WmuJc3FGTehvowhzYmxNyCxtkmzzHLvaevKNUWw8nqs1TfQrNhGBiwUCGMd4JJVVGnVdda43i8CDB",
  "key36": "5PsAoznHeNtGneBSD1Mi4PzgqHCTbtW5zrqUvnjn6WjcoFaTmppz5fq65dEL8fgiMTFFGZkzoDmzxGWwRdM8YKYM",
  "key37": "3xG1PrTBMuHXSYqzkMUbySvy9L7j25dyZuLqZiGPQhFQbAh8jsCgLzkooMLLv84Nc2dD6U1kxBiCXngmG3t7Y5U2",
  "key38": "4R67ZCKirakiDvWFkN9Lq7BRduDoXyEwgteZAc5fDAK9W7bto91NJeANqcVXkbLjAwRnCC1WMHuseMpnnV2KFPR8",
  "key39": "2pEdDBPar4ZtFxZANBzkiwJTWt1fvocDJ7JUd2PR4nxe4q1xMdduQw9saHx94BJaVyAXavoACX9AHpv81ar3hYkC",
  "key40": "KaT7ib6hEhnPWxs7UUwbs1fcwDpx8EYW372K7KzBmEJsA3C6K3CDBYPmisi1Q3pscgZBML3HakfsExbv8qUQJWq",
  "key41": "3a1JYhACsUtM5mN4b9WvZ8QzRYxCDrhscFfAhYYeC32P48SxpcEVWbbTxPQ3SbUiDKUp5U8pPm56ThdE63rgycjH",
  "key42": "4fEuFjRpyPyaCDmhaFFtRqjfBJsBd6RUkW8E9pvKGbLJZEPncxCk8HCEXjSJwrjSmH22putyD9EdZ6bPa6TyShAm",
  "key43": "22xGBf6r5adgs4fPtSsii9s4yzfgATvqZqjbD67MporCqdVzU2RQubcKFEFYENEh6kTSzBbLuqtYeKEXva4U9uwi"
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
