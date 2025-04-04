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
    "36CnBNqvmWVp28ePCoPXmWs8wAWkQcmjSTxqEERSyYy3mnkCbKBoVqDJfwyAE7qQwZmeft5Y1vYpjvyWWtVV2tb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxkSnHV5BKWuASZcrXsHkMTTJog3bEsdkgVKxtEU7oLpyEM7kVTCT1BrY46CjZH3wSnfz1we7d8L2RRK6p6wrgh",
  "key1": "58mLnJ7Mt3gwM7oneBy57K8SZgMP4yJmfb5Mgpy3zUTZbuqEfRCEVqf77vXnQoaUdFjWALtwTJwZiM6Vm4icPv8T",
  "key2": "4HZiamueeh2WSiAf8VKfaKYCPYjA7URNrkLYnE3FSiqrxZn7FB4RBVMkoJ4vu3YadoC6STFoJKniFx5EJpK4MYYd",
  "key3": "23hkjsMfuAqfS3DUsCjyHXXNDRtLiGnUciA5EJpZZJB24bgXQJgfjzPuu7zKcab3NHx3wGQg1HvZEKF92rxnMnpz",
  "key4": "RV3HvNAP9njmKVfBiPH6sYNRCpoHpx5KyPUoPF6bB7g3PhoCWuDp6cy4RyBohiyV6sJtgCou81C18EbdLaKZ1vH",
  "key5": "49v7RBUPanr9PhzrtYNofDcqm4Se4p8fLT8wpueiznDQk8v8idUnZj1oxMHpxLnLXkGF8AmrgowjLGH3fJdtAMwM",
  "key6": "389hRD2fgpmd3CuGxPCJZrgsRgKXmpUw7JKeNVTuGV4WogC4MvRyDKCCE49RKeYnc1Wy6undDFoHkUHHshaXFntj",
  "key7": "3XUp6VU1S1WR9HA3YNp87fQLWj1TeUPfBD6PRCDoyD17ov2ypWj9p6FsW1nU5yAdVh3ibTLCXuW2kijrwyP5U2yC",
  "key8": "5ZKLHtQC4zzshoSBduSL3KfDvRt5BzndVScs22TvxC56sXUC9dwjZQXao7txSSqKAmVBbpDiD5Zi8stofkxnXRoP",
  "key9": "2hqnK8adnEmV2FCcqWtRGXHcXhJkH1ckKRHhbF1ckNtAU2QMRouVJS9JsEADYg7vKY6DMT5pu4BG1KpFezwv7sPP",
  "key10": "2iSRj1SxfTr7ja8v8tFhz5ovMVKQzgVkSg69Y1g5qoMUBoArERZmvLzBfoicENg6MsvAwvwn5D2Ve5RnHMELFEeA",
  "key11": "3a71E935rSrVzRM8RyBDbyoZu8TtPXJSNYbPC4YBdAaef8dzJtUjBqGCyyFnmVBkVa7t8fEd3NdLhst6EfWjwvnD",
  "key12": "2Z45niTqwqLs1NmQ24W6sAsQLE4u9NWKZaC6ydVZTnqFfez4sfDrgbe4SkpsfGXuH99DHbx2YCbhEhxF4GxuSRh7",
  "key13": "2996oqwEhyLy7mbNYYGReNdpXyzeHBSf362fQfBYXQgnA295hUbsGySSbcYc3i6EJD1KdJfctDcB4NP8Kds9f1o3",
  "key14": "2ejunbCHF5FkHoq8wQWu1DVNGKvyxGLkm7gkKEG5hmhcoM1p8cohAvQTUnN5MTwqdAsXJQtRBezTYZ33axphQzHx",
  "key15": "5x7qmYa4BuejR8PJP28S44U9rp1T35jHKAj3MRFj1tWnQxvqr9u33QmuV21XUYCsbeLPqgEhFR13JkVarSHLJv91",
  "key16": "mnBMkNBfmTPRf62AyMPtyUxTiio57bHGVKZRNDU1SXPCCNSctUjwc5mwGxLg7Hjr279frZ2XPcJsbEDb9EfzTJe",
  "key17": "4r8e24td1HgCsBeUUGN9WTyLhiCMTiFv5TijnT68h1c5TKyi6t1acDKvwYMYd6dL243H2bK6r7sYgr6gxvC5uq5G",
  "key18": "dXS8FGpdDou8D4hp5gGscpkxpfWrah5DYLwv77inTMdae2dYzpoNrrNsYziXkF4DY9rC2f7a1Y4S4m2j7YuhyyL",
  "key19": "5qdkgF2SsJxYXbiBPkjnKXH5cYrn1P8xo1mcX4fJRL5aojzSpYXeNST6hGUo2GHeB3gXuvaC3BpYtWgzjq9FJ1vX",
  "key20": "3mQWRy1yusRYM3DHcsA3VsZmrx9DqSn4SUUFsGGejLU5FJNDPT36KLDBjKGaoWq9uhcqm4HdjjGcatHjXXwFVfkh",
  "key21": "5DnSwQTuRPqGCCsnwm1j7sf4KrdwpeqSn5ZraMGtGvz3TKasoLtzhBkG5H7fvW3Zd1xPV5QmSa8wdRjM8KiHkYBs",
  "key22": "3woba5HeFXXGLks5CBJmx33fDCa19fKRiwnZAbxJXHuU132XJiJmpHUpaJyex7VswMAek2JzHEHjKHznAoBvooUu",
  "key23": "4jozdsXfAvx8ZtxfEUB4zvoKnxrXYJC42zbVUYjVJhHhTQQTxAHrn8GsWoaVREkg4i6wSFtFDMbUPvrt5vUWXhUY",
  "key24": "5gaRn2q3KFAGbsbtDKoxE2RRK4PooryxDV2JBjVfpgnPQvYh1hjtK6RvHz1PWS3xHQQyfJDSppTqowCRfkQ62oRL",
  "key25": "HLUGbznTkTygmsvbKufxg3o3W5vwqvz2ctuNpxwqHfiCbrsm2w9rDJzsLxi2ebzWYvuKH9ALAGAZLNmLQc9z9Kw",
  "key26": "2ppZ7bUUXqxk1yP4abn71KppZQCe32nXjyvxJkUahpS5i5gkCq8UjF11PrhwMSjLsHYJsFeTwY3rB8VwxwZ7PNgy",
  "key27": "3XJa49ZoSRnq3kZETR6tac6AJ6XJbzyYRF2xBfTUe9aMWuf557iT4oMKreotU3hxRagh5uX4jgviKYq2UzdUf5wi",
  "key28": "sK4CbXiyUd32vWJ2copqVfbWLZLkyKnS8wdb4KtBLzWV5H9KGUVnmxEmAmaDAzvtQAwJruUqorYDaXk1MKJkocL",
  "key29": "4KuWZftJ5QZ45inZudavGtetJoKLKZS1kQyiqX1YAZBcwsgM8iABczfTqkixP5MkxZGTBNhHTtKs9n2Mm1xDSgSY",
  "key30": "4TkhodvsHUBpgT6fHGgbvwjsXxsuAFNDBpHhjKQm3yyHnFsxTkhXtq25QjbZPH67YRw4zxZs9NzXxEMsWfoaGQp8",
  "key31": "5usrWXEj9ehjCPCL5npVtfHGvi6MLvLd4pPymgyqvm1Qk6S7CLVt1NzSk8mQvh9LVZ9rk6gajwdgBV7zsxguHzzj",
  "key32": "3ygR36wM6JsGwJwh6b8CPp7xqp4tup8hjxN4bUGzx8tzDxJnvL12hbft9M6aT4hKX98hrTGfRw73eQ7HHZZDHUYm",
  "key33": "4TxHNMwKAgd6M42SHJTAZvp3iqotTrAqzuwUKRRnn6btggmVDu7V79FXphyRfM8384yKwZDw8pvRQe418mRau2QH",
  "key34": "51TbFcJG83UjG4vG9Ni64oEQmG4J5vvGrrErVrb3N5vtDkCcTZ4Fr91VsDBLG5LuZR1DKkinjokhAmVa4bxGo5Wp",
  "key35": "59fgD9yj2dCG3DhYvXCoEn2Pn9X7yUxDxCuTrSKw4ejdivgFbuFTGq9eMapafC1FaAsJJE4LMmLfKYXaiTDQbcfT",
  "key36": "4u4hR7gk7H7FhGoQoVuXtQvHidZbGRPdoQfgzRARWF318M6hwpdmpo6AnmXEnCTxp2pkjSQ76uzFHceCrgZkmys6",
  "key37": "fwcFHwzdjKk6ajDQLWtYoiwsfZTkWEF66txZsS3hTuC6Jb41TWPwXpoB64Yf1PdHZ8WUNhBRdf6WMTQemX1vuAu",
  "key38": "3eZzzgucE1Xho6jo2k7LPJwWyvXGePwRREDNvhTuwSV6jDbYFjtgPv3LJiSKC2dNnW63crkHKyyMjBqMkhxgGknr",
  "key39": "JAzFe2j7xdtDRggTqY7vKDiAZtyEzX4ukBSk6RRMKqctSzpbxwpEDqnMzD4Ne5s5hDQ8dLxTgtEGzVLZ1uQvCZy",
  "key40": "5S2CUiQeJkPxKddxS1V7y9F2PM4n1eUmWfQDXuwGTL8JGK3KiNkpZkYfxYDM7exeGik7t1cdaP47t5MidQPPi8Kb",
  "key41": "3xujGuGsVo9txJQGuncztWFPfutGNmL3G2xwjXCRoyQnbmzKfiEaCTTZyNXtQLExv58z3PTLTzPuaEmNxbGM7aSe",
  "key42": "3WxFqpkDyYLAeKg8mEsoVn2KDCv2fHEKZTMHZciq1YpoARkfdrYWtR4xcRq8SAqRYYsoZ3T5mKdgwCDRQkXvjcKi",
  "key43": "5ZMLr9mWaxSVgPE9RtpM5xc61QHUicE5SG4JvVwSeENtfxPgb2UGaH6DAssB1UhQ1QjLm7GmPa6F2mUh5br9s6Ze",
  "key44": "4QPX5HzEbY8pLxWMrU6C2vaDQ27ovnD2asxUSeLWHKzkKavWP28wu6uan4UZys2VQmxTNmgNGbDcNiHr9A3Ff3qv",
  "key45": "UCMeaAnECMkeMyUwdJKF6pLd3RMJXY6RQrzrJ8fYdJjZjoG1gZzcWABAN8N6SrvvXRDp9QKUiAS3YmezkdEchxK",
  "key46": "mRGPQTmtqunEPUFCUgdhX2LrnndALAezuk2UVQmHxwDQm9wJB1YYQpburbPSqAZDPniDBEQFrhNzDocRiow4noW",
  "key47": "3834KCoFUGvPX4SiyzTbkSfmovUXTZnH3YWVFJiVN2xkJoPVGML7Q5z5jBAJ6BCnSpQQuCKFEjXwmFFHdv8f3ek6"
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
