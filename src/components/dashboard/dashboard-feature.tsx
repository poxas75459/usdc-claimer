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
    "4q88oTQ2kfPpBfPLQxAs1aNDDdr26tiRMitfoNYLYuophaCTvqsbbGyiZZ4MC6cTJcP4faJGn5vEd8itw8x8rBqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwRCMxyQ6Sv1JDLBfYmJhDtFm9Jswc4M18UK7yoKRTnatYfzQJY2oXQgoFocmhuWHuwbKMyVTE7QfwD9T2UUPyq",
  "key1": "4zcmtxd3KpRmuYJo572mwSeocYZbNdxPhKs7yLSS2WSKKy8Bh5pYcBM68KrCDTrGBatHQBxNT4sMgYftJDNEfFzc",
  "key2": "ixYJezpmBcG438esj3emwLC6MKF7A9GSSPEMZUFHnYZ79gki8DykdJ2vw9UstgzCN8qJnZDy42zw8FHZyJhwSEi",
  "key3": "4Bn4VsY2sZ1JzBZPXUUhbWwSYWAN5heZqMWAMtyKsScZ9QernRNXua4J7giupBEpjAqjHxeCFXLNC8aCZF2RsEk6",
  "key4": "42QeGkTXSgVGUV2xuu1fgxr25VomwzmusyVw259E54fjeFAGGkvjB6J2h3XorkrtAqM4hik32DeobZhvPPqUgnqL",
  "key5": "2YYusccHeeQ3yjdUSsJVtjrAkzDgbMWRNHQZdGdo8YEGgpvxU4TBXMapDuWjCMa9u2qs2fCVFY6tPwBDXKTmjdam",
  "key6": "5xtYS9Urk8vthwHNNoXT8NtiYezuBHRXHnNyprBQHT2VBiGtmQ4J2EsyqLSxrGB8SbfHQsXkBAkjjLuCx8S29XJu",
  "key7": "4ratBo64iDQCAdppoPvpVMa1LZJ6feuPDM8d6HTQh68hX6GkYAdr9eozgvv75Gx1a4pToW7xuE2ygqwNcWJon6vS",
  "key8": "4RvcLoYtohpVgeQH16KLGfiw94BHC2mM6it5zmSvA9xXA9L14fLDbiNwoNTfdL5UXop5qJzXMai8xvLRYPeNURJ1",
  "key9": "r3DAa4yjnfaQ8oMtGMWxnQ4Pq1u8wwtBaKCrymhUzXq61RKGZiwCrpvP3gh5AdMVvJ2ibQbU9sKA3i6xu3u4G9N",
  "key10": "3arRTpoTXQn1QLYxfwDgusB5XnKT5YCfYUQfLuxHmUNbyuEjV3awNS2xTZ9no5Ti4JFNo3CopDCEn3W5iLmEnUhh",
  "key11": "2mT827TCBbXKn5JqTHbjcFNwcbzzkH647f8ZbnnGBwcPoH9QJ75q73VmBhaJGZMaq98Dm3TtU2keF8xX8isfGLst",
  "key12": "51cHwo9v58HzjmeTQaB4sL4Nq9DUNDbMMTZFW3jg6sXsaPwpGhxYPDwf5SRUU7GRusQLu5EvN2kPbd3dnms3BmfM",
  "key13": "41nATijhDkNEJRs5gXLbTJCrcepzdH9rDokZMfaD8NFPYRV1Pt7uMDRjw286e9WRcqDrodo6j5WjQkWMzeXpQAmv",
  "key14": "5FZgdfoskkP3TG3pZr4mp7uJ1TFCEPaE81Dx4ZP1vqNk3mWJRWygQbV8kU5mgzc8AfPeYNLe61MiKSqQ7y6Sn5bs",
  "key15": "2pt6qTE7G8ZNYMkhQyc4qAkk14HweoyAuAuPX7zMqAqdZLhCuokRSjENW8u4uf5a1iQm2yzRksAdMGfvp4KTFrCD",
  "key16": "5kEXYqa4GVkZwuuwHCr2scY3NTZYy4fw871HqJT9qzJG7whmwAWTN6tv1wH7e1fZHu8wNdGsYMwPuPhwh9bHZe75",
  "key17": "rCvUH7MPDse5LRgiTrHUofyVPqGE9oh1yP1U3LaZnMsUaJejnqdtcgvq5Zx9eDErTQHrmHpx58jxvCrYDpnEfrb",
  "key18": "374YiJfXqpmyDnvd8hL6iphzmbbgWi4RXQMZYCi4vRAnyyLU2p92g8rHDzoDAMFYZdjbrsPwy6t21brtbtCcKVg8",
  "key19": "57H5VMaHdRKA24e5ibWtDz5tVvRNfqXyG4jJTd5aNTyGd7ggAEii4wpMc8pTjha7pBKDzrRKi6QgBoYGa2SJjvg3",
  "key20": "5XPHBWG9HWLhByMHJjMQ2CRpQQmB5NtVLEJ37xoxA9Xm4RifyKmrDTBxX5dS5bGUmPvtFD8ZbWJu8augtqgTX9z8",
  "key21": "24xF9TRWZFLUzuZAgRQbUtojpbiFf8umNSg2vEDiU8Bsxis63GrMT3kz5Eta4486sCx6XBairUkxnFHruSnc4bDn",
  "key22": "2sZLNh7snQiDTSupQTREi9EDvASFkvgRo97Ggf9a7ELaLP4ynNrGe6DpW4jeZwHXTU4XFRGXwUKHjScKEBPQotzs",
  "key23": "2o6eWNp5yUyciWEQbaqj1WZJPmfNjVgRH9QsoVTgqsPGBtnAwxAjPk8PnNoVD1XQmFkzGyxdtDdn7Vf8AT55Kuzu",
  "key24": "2TmVouCMm6AR8QGM8LT6pg2tzEBbv55WNmaQiqPf51R2kCcBGd8MUGu5uV72pABGf3QfgJwukRZSX96841JAbqoz",
  "key25": "44gZCMsQcBWAVqS5J437PKNggbfVRKUK8KY6KbGzfpnLpWcWWVM72j67XkjMeMpNbvurPNUiTarjUjRBv4q789um",
  "key26": "5pFpEQ4EvkqSzcZyLEPy1L2miFJLcP3QJhhbw3MYSE8fFRSFNGFA1C41STzXe2d8Q445KNMb1PBoov4cyZUAD4wH",
  "key27": "4NMK1vTsRP2cbwuwSfZyaQmbnLmydsReBTBkhodSPnh9SrREGG7p2sKfSarZmXizND2NF7FccC7fqnnQW72GGgSK",
  "key28": "2n1eZnZGEkge5xcnhYwz9URYU3zpPc14EYeCpGw39JDPZJJEgghrG44BB4TaAmyC4j93H5xHV5UFBJBtjAz3frPp",
  "key29": "5AgpLsqLvCaGCLYNNeRCpT8aDvrnS6PJUdeqw5LQ9U7YWC9DmfxbS2fzNQuRf2pKBmd9sh4Q2QH3tKWXm6JTrcog",
  "key30": "4L4Xyr7FKjrYLB35ntxmaAgGRgQSr6MArxHkJcC6weUJHaH5YNErYt7P6z7JAUjUZnYgUxoQxbA9PYaL5GaUfjfT",
  "key31": "xrTmvgmunjYjCaUbhNpMQTtFqJQEmg5rg1jRSavo8bY6YfinUe5sFeiQBi2EEre2JEvFmw4YUWL4fFgBjtoVwu7",
  "key32": "hK3GvNeZfdJMbFRdkSbkSnRQPK6ZZ1o6vDKEtHKBNZqTY6fmDqrJjfmDRsB6gpYYHLzZYRV6XaVmhvWWH7mzy6N",
  "key33": "515Gwctzz8QdogZ3njB98vaykZQVq7uz9Gyjjmc8p2sVeVNExeGfjP6MT9TaDFPRSurQd5uF7Za9SP8286BkZt4s",
  "key34": "4XzKcUHC5Sis6Rv71QUUkXb7LzDKbxDXd6HpCwDCyeCftn3MmK5LuGhvenYtW1RET9dGgmVexpB4A9hknwca6w4h",
  "key35": "66yD2aVEzBZgTa78dhCg5RBSNrRtiB47odUbUZPvkcX1qXRZQbcENz1diUqo7XcNSJyQBucmW59gVh4ytDxJVJvs",
  "key36": "dpBY8E2xCjovUp1ugv2uDe8GWE6wNQZozrmFMHvoKqDmYMM7ZTCHKAHLZxFWAr6viW1qgXkYNhx43LtCrDC7EZH",
  "key37": "4ufMgPhKqtFaz1ovSX8dxdJpDV2UpqWMMaUqi68e9TNHoFZxs3A5arfsL9B8S7jUkFwjbRZAQhLeYpHTUytradnz",
  "key38": "3TEuYL2uqL8AXBe7VeZcAYpMJi5PSdHZy6EDMeJzmqnCHm2fE5WsbJy6jYsm4LJMfSKo7DMLbwWtT5vn8BL1y5Vx",
  "key39": "4dMdvcopXr4oEtmoPcYkBrVFA3bv2oBsvwVXgLHSgPMV4322sr9NPCFaWa3wdm8CNfXr4ehAyQVPK1xx9HoUF6E9",
  "key40": "39fNP6AdnhTSnB9JCbZrxoaaZNuQYSYwuLhHy1JBeUEWwdsmpwmier5QFpakgMCFdHUnzKdkYpdmouKU6CPX61wW",
  "key41": "3Umxf9MX1ZLG2WC5F66DwKoEoPzCMTAqnLEM7obfZxpyGRKe9jk711StyeaYVCrWjNsLRUfTLH9eRwJvFYpNkkAF"
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
