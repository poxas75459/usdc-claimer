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
    "hESt4W5JfMEhg14mqkBrk5Z1p5eL3jB3irgKE1ahGJhST7SN4WT5Scjaq3G6zaWAo1UWGfBgiGEK28EKWoz8FJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HUtDrhiYQjeFzQg665TY2bnMZonuoxguLsUnidefQXAqM1Vc7fta1W6ivuA8zcPkp8TikUPvueThKLSEA5cWVCW",
  "key1": "2Lejf9vx2aBAAhisiksZfKnp8CSTfK3skZR9n5Qt8KWefTPzwCAdXTtSKWnoFZTxtJZt2qU1mq7UAHMV8bs6TG4m",
  "key2": "4J4n3o5RWWqNdaQGBwm5VxcXBTd5Qi3RPvMoaoTLKfJHfqe43sYYLQTsPnB2hkFvG2AH4WyT5gyPXb4xk2NtxzFB",
  "key3": "5T8a85uCMERP7pzmFxtuDfZazRhqoRbhhB2JNBb29pZo7rqnz1EMtgTgXKncSQ3FNSLhRyaAQs7hv4PmrBJFURi",
  "key4": "2XxcuFFeG4Tj96iYw7FhTJxboJpV4Do6CgUWE4Ej4p8KnnycBZtWpx3DZ1AabP37SyfSdQ43q4HACwjdPdqhHHVG",
  "key5": "5CztrgiUCjwyHXi711Pm2rpxNmY3t6bYBdAEdsrnbBEbZ7nnxiRCdDy7rNFGkttDRcfixnfpfWRwzyMFL75enbdt",
  "key6": "66v9fCxAKwDfhr1R9L5art82ieaiSnoyTZwoivXXagzcuRDF5LG3PuosXBrE9YLsdtbqgJvridie5fPjTNs2LYAC",
  "key7": "5vS9iW1YzF5mBXyJmyFCbwqtG3u9os4NxS96Lcrew52az7sh84GFXeuU2B9mh1LAQzqcA22XufC2WJRsFXzP6NER",
  "key8": "uub69SBhn1cEh7vZxAMTcgJNvALUVMFuEMyBiZgJEU9G6SHod8e5wvvzbbFEsW1gYitaQ23AKwu5yoaT4PQZaYR",
  "key9": "3ohVecC4fiEFWf85TZaymjR7tQHqP79xS5iXyDvkY7EPma6MzHP6srXQ4nfiDFMJY9VfSqUPQ6kTCbAtXyxnwQLB",
  "key10": "4CDS6vca8ZUMdoXfqbWCWZBEC8F6ZEyNKzBrokdtSc79cZKyfwbTUEbic4fx4hchJBLZM3Mv4Ao8r69rrdwnSLKX",
  "key11": "4fB2wBF7f914scpvtToxRBkfeUr1ucoMERWbPTPUm2UGyHwo887Kk52ZkpQCF6H2ogEUv29CErNQxbX4fGwY7AcU",
  "key12": "5JTRwwPxDJdHei8C5Wuxmm3k4Eqpv1sd3KJWuNcugNuwzk8X2onqQr6FFQLHkLYBEVtDBJxZ39CuzXx3sXrKEyT6",
  "key13": "hMXXVEi2o7MTR6Cd41B9XAibx7xjHZmCyphpMC12t9JJwnnNjSCrJyCVdguc8LcJiYJ1P2xzwCrMrgu4ykaX6g7",
  "key14": "3jgLaPztu9FJwW4tLdCzBEboABT5gwF7rKvVhF6ZF1FQJ9QVJMnpR3PTvUcWFH5zXcuvk4vwskdrLJN2E7gtD4ek",
  "key15": "5bZH62zXhcURwtTzLZc4nZ7TQtUZssAchvXqwrT16Cse5j5N7pg9thtZkg5rEVFpa6SudPHC9pavsnVtsZuHGzWS",
  "key16": "43SoVqDaEo6L6sHbBjsUmSX72AiHWfLyaSUTW38thnU1J677xgoiyzLkodkysKbYWmiJx3nS12yZ3rj8t4WEXWCp",
  "key17": "5hmWwPJNT8uN38DPH22LrSFqS6h1ajcDq3xyA81mmyb24TXWJkxsXN2ku6KTM6YQP3ttd8isdytRQRMmJKJdrKKY",
  "key18": "2nN98xtfWhQ88tXgpBrEJhw9bpcxt3mXR59hF393fJiwwamWe2oTuLTi29mCHiXrvyyXywSjc2mcHEFtxMbYHhha",
  "key19": "PjZyr46M4mqJmWKVfc1wTDmiW6mibavaoq5UJRsJfLH2inJBRZThGDFDkihHc6xVYtiGdJTJ3wf4SqZT27ZWxe6",
  "key20": "4pRZubSBNzwvxpjs41mCqSSbc71DMnEJStRUbS1yR8aLSxz6ozkPWGReJNNjujkRtQ4BNcfTrbPrBMcc6eKASpf4",
  "key21": "2di4Pr94RUyBR3J3Sm6UqtWLbmuparY4Vf9ekD2cHVbcsFhw3twc7wDwmiwLUR4W8QinncDfJ2s426hou4z3ZVmc",
  "key22": "2yjrF336eqjwbFY15ynConktpS1wNa9c3enXB8aBsGKTz8sXETwsqLDvuLjczt1PPA8aHpo3dGyq3xcM5UYMMf57",
  "key23": "4H1u9s4pVpii2W3Duc3CU5pD8pfg5YjdeGFLHJnqkLBcJp5ge6GAZo1EyfczhoPbcYJxABQMMzAuba6Bmp916tX4",
  "key24": "4o8jsL7x9pjPV6uifmfdMWn8DyKhXwNhcCYDWdaC8NjaEPLfFCnXDoPjbXTmRx6zjgzd458QVeAHjFci7pdB1jhe",
  "key25": "3szLm8dNyBDxuUHPo8tKQekeeR2MRiM5L7ZdqytKcCHheYcMmtmyR8eZvzob23cPJq6qZUH3f76AiKVZap1ZAkkD",
  "key26": "2ndg4iY1T7egCCzvPuc76X2N13xb9d2t89hknB3EwY7WBf6fSKRVYzuy6RJEyNepGEppKRss2kdz4Cc2XuRukcm6",
  "key27": "2ykojsrCgf7Zp78h58Z7p1d7BwK9nowWBMs1oH4uyKqk2PTbxiW43Hkm6UFTbojXGYYZFvvzTfab7PtTUb1jAC7J",
  "key28": "2qyKvPNBZuZ69bFGBw1MGnHGpQzNmjxLtLQwHuPB89TpT2e2F4SvpJTmFHdDFq1YzRz3QpaxKUBMhVZcydr8CguH",
  "key29": "9ayCWaiHeSFEs5u8yAjQhSfDpD4pgkn8LMLh1PvhyjFTwV3uxg5f7Akve4ofT1sWWva2HHUxG6jTUvK19nN83uH",
  "key30": "3MtQqHgw9dLgjNQLo5TkSue1D4oNRa2r8uTiMZdcgRJomPx5L8EMwiuCzMNzxM3SN6eerWW3X3WdSvSGJk95JWQ",
  "key31": "24ttwai7cMgvgEcYcg2JNNasj6a6KeAv7N3EKJuUk9o3RvaDs4n3aHxTF36BeknY22H7yCMuHcgFksgjoKF5tmUW",
  "key32": "3DBpZfrjhCaKEPnrV43Utsft5VA3EwysvRWjD6xEzHLbgj2KdTSxTP6rGqnS63PByjvgnLcDzTwUdw4BhhTa5Nin",
  "key33": "44WRqv69n74FXEVu1NxTrHNntq8NLwXbKAvMj1qzNsgZEftmm5KwP258tRw6ntgf8mogQiE2LyVUFuYCXL9fCFDH",
  "key34": "4YELUmg9ZN6CgByf14Se3QPc3iQFA9kyR4pjcZDUZNyskY8RpFWnLs97sPYgDSu6QtUQzveuLAg3daWRSGmCfdtY",
  "key35": "4FZ1MBECUwrYZHoLdLo3wBsK7st5cHsLe9jJ3MtFYbtWv2dZyQChds5JjW6196wJzNiqzbL2ADzbj8CpjDuD43wu",
  "key36": "2nsvH4SthRPP7YMuDMK2fqjyqAZDdy7thdFfFfMqw9njGANx4i1nGKk5krsf2n3e5KE8NTVWNpnFaAGYwahNkyG1",
  "key37": "35GLP1WLyucDtnuU55qaGKo78YSaRZuaYQA9zFv1d6yuTAu4tUroGS7bqzeL33bpu2fnGUDz9n42DsxR8eURodK3",
  "key38": "4n29vVgTnSsuuk7msWtPssSTdFYsCvj1RnRGygvtzpSzCns5mNHi1Je2Nf3P1xRZnoQmg38fabDCNjxYnf4dX97z",
  "key39": "5h5fZVBpvdQEBzLY1FnSBHvmGNm7EcgeHrpUowc8h8trgmzLaKWiBxrUkr2c7u6XHHmehaRmaB4uJhnvSUKbk8Bi",
  "key40": "47wgYDVMJUZB4DLPpNreRJzuAWmExrNfRYTAsBcv4fPWa7TczAtffbBH22mKZMgjsy4H2T8fSwgMymTbW7zRTYqn",
  "key41": "P3e8knNjhF38wcZuEfHzTZpGdBcQpnNpBePotJ5ngcErnCcug6YKJeMCCyHkX1Vpfm5iBYBQnA8AzM4H8Lsno1Z"
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
