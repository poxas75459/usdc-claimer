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
    "5MZKig5jnzXbWDxDgdKCpLvabeCoHeCcssJznVZ1wDRzaa5HcTmBTaX7vezv3rvK6wkvjoPwqo4AhuJgEEEJ8m12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rm7xj5n3w9CeAx3bBogEzHU5cArEpm4FznHqFasRyt8ezsEyzKQ5uejuvDcxibnct7hYBaPK28tUEu6AK7VviLA",
  "key1": "4NjAEdHzXgt3vy8MESZA1tbLwXegqVAk24gW49yqnZhoJ3aVi1tx6f3LDv9wmxP3PcB8Vo1F3ngggbGKQTfAc96f",
  "key2": "5QHyn9fQGFrdLw8hLuZNgV5Ez3XUMmFkYZyJRMANE8qjgDNirHDWpGrgYb2QVETe4MqBD5bNRrWYgeynNDhayaRb",
  "key3": "gAMMdvJi2ZsbfifufP4VVVznub2f8NiKiKZYdahF4r2whCAMhYN54row2JzMGewCuvFYFG2s2xM7P9SYt4Qo7cZ",
  "key4": "5yu1gsj982eq8N9vJSM4Q6xDm8VfcuQqZjeoVWBSv6KxDABCWiz6fw2oxx1Z1mCwuLw53q3tcUMjfeWXaMVcv21v",
  "key5": "4VmT5XHAj95nF9yaLDjqVSwE4dNPmjbadcWUdLbgtRgVR6cM9fpLx6iEe79vbw2nfXJyGmb3zBAWZ6dqUsWxkapw",
  "key6": "4KAZM2iE7MWJU1iTXCgwmLVBGAiVDG5WpoUC7r429zhSWTRyQxW44fiAmpVbzyobQkoqqf7V4KZ9o81eArnCuQ6f",
  "key7": "7BEzWZ8BDic9ian8T8kXqHxRizZyosAMdxrFnSLQxMuAyg2FhfXjXojVpi4QNz4vamzX1Mit78pw8JNymzNXjUs",
  "key8": "3DA7nVEb4VvhGdfjLHfV966rPe9h9Ay9nb1yVSqdGhJdavWqocratd44x1YJ6sAPj688MS5rWGAcvpJsrqKbAcVx",
  "key9": "2hm52oeKBkWQRUdWgdTN9Ttcrd8mTHaehVeye1bfy7jzDVTGLZNaXFtQbNUnF6W31XURyGW75xHzVuTKRfAq4UdN",
  "key10": "29U52PD9bk4CVucPNDQpiZWigPzDrH1zvHE37GFVqHV2xzp2S141jY146NT7UFU1u7YsjzAyWMopkhA1ty5HQJ4Z",
  "key11": "4T4wwfE9g8K5EDtZbSwWoiokkjteKnz43Htws24x8MVCD5ZFwnPigMPZ6xyH21Yydmmp7z6xTx4urVtk9eEKnk46",
  "key12": "2AbuuzrAzSAPBcgKhxr3PgfeTHA3XddUbehZtVVuoSoNWegWBViDDyLUa225Sobv2RzmwaSVF93hSsYaGtD2TA9x",
  "key13": "2YCtUobj7kw4vKqdFff1eqoge2bPDfh111aGo5dP1EbZnEyfgsqpgn6ufgY6Yi8CFY942pdeNgLULYPXYWhcaCHV",
  "key14": "6YKSYoZbsxDD5GQYDAv1ayW5CVf3VYemDJ1WhRDWZq3f5Ub68NmVS7RAtE3Ute9BSAVAFtSVykpVY87maTZ3K51",
  "key15": "x6brHBBurFZCdgvJiZd5qFgs4m9h2nu4ncvTjyozuBufKapv2sFmicfKtKFpSc3QAmhY47N1p2XFfSNd1vCUjRT",
  "key16": "37SoGm78cuHqc8nhp2z8YsxCcoEhx4EDaa8KgAusFVSaJGuF9SZC48uJzoZqMCiyMqdtuHhwX4t1QtTiNRr6tNCe",
  "key17": "3DLW1xMPN1XhjCaFsaKahdguvunrF8XMzt3TNuAXKiW1ZK5gpqGR6m5VNA3QpRu4mBvUkSh3mvsgvX5Hpqs7kfGR",
  "key18": "2VBbjHdpiE6wSkuisdXes5Z3JWXiUE3eAUpYT8Di3q8EMtTv6DTNprGAupvqsKAnXVa9WRArDrYAcbyvKVj1xk6i",
  "key19": "rAL4Bo4sCGPVhXSkHqVzZQtDzZpwZncnsfddJxaE79fnYSbiYqxisKRQuW6ynT2dBBBn7HDhcmQ8zdK1bJivoCs",
  "key20": "2jFmykh2tnyD6tyrT4kw11JZsY5EpuyWhiy8kviAiVBvnUWtCXRCKWUaa7uEhDrqHDKNCgGTGvu6eFNP3B1ceSW7",
  "key21": "5EuWnvB7nYSSV3jSwELtVmR7ADiHGd7YtNNCSXbF4KriMKwLfh4coYUXYAbcbV4Hnhsg1wmbs7xUk81JBBwceab2",
  "key22": "4ak6FSGWJXuj3dUiBvJcpDnx5kS5aatwoyXi7X7ocnj4bJVnPYQM6VMMXGNZaeWE1kWWihWvqxF7WguwnLbz1b1J",
  "key23": "Ue9baJNuvDtPZCS3372VJNxTNzoXggbC5HEYWK2aTUzjzx4Eb21gowGdzP46cUzL6vc2xeKtgeGiH9ShCnooBBW",
  "key24": "5SCsT5QYBkkSKxDjvMH8t52VQ2oFWmDVCTipCmxnrfWK3tCSzJGCguLjg7jEWk7xrPgFQ36APwkVJaYruDp6hkde",
  "key25": "2u18C4WMWDfoyu3DYd9NiAkFFMjsShjqNdhLuNQe69EFBEPQGZw2YX6Teo46Y75EwMM742ybWAvjLzed6ukBgWqc",
  "key26": "5LjgETMqxjMqQBW79eFfJZXjJv4rdfgUft4FycL6chkJn4bprGW6HSeKZaNyfLRSUys7LeZ5JxrxrTxD757KK6fa",
  "key27": "4yBYfW7Btjf5a79ZGohYwMK3UoFH5Dqo7UPrkTd5GMgZ38s4ZSYE3ToHWfw5nKvJVqMSp15fvSFifw44h7ePhGdV",
  "key28": "jvmZXAsmhq3cBBVruCoQ6dJVEjnwZr4UkRzaL63GwFtAFrtucsxvvhtHQKDQ2BN5vJaSGfh6uHQzwcfmpwZoZcR",
  "key29": "3KrosnoGbqb1bz9SdDzmLEXnZaAZDJi64hEbHu7kGaoaSftBHLdEBwfyi6mnixbrbTRrqKYSmoXyoN2rF9V24ysK",
  "key30": "52cy56haJJGrq7LVe3iE7wSwKADAKahsFeqxmLpRmmQDMD8Jcno6r2KsKmGdXMLsUWuxNzHLhAJVCuGDnqVhfrfX",
  "key31": "5gA8ttU4pk5W4DhVFK5xBUtU5NWkGdmhW7K6izLBkJGpiStL3dmGpDMSWLHCPA579zYpU1Kn3kjt79RK88RRbbMn",
  "key32": "21fD6UX8oaGqc5yRhTHdM9r3zKUWSZz7Szsz4c17MCdC3mdKAUoU6EfYxSNXPt2UcGdKYtTVrsyr2WbXXhkSdHKM",
  "key33": "52HKpMrrSSMXyVq6QrMTc4YyADX5VvychSpqF8ta3PFURiCxQJhQrLdLaFU1KNpfYc8XTz7UW6ae28GjnFSUnGpB",
  "key34": "iPkSuXBHnYa8Vaw3GZ1L392frNYPp9u3xiBTYcZsL3q3W3kDMGnc2QQr1sCieMkZATMqotzS6s7rf2dkoZTFsBj",
  "key35": "3v5Jv9PsugMzUardwjw2LERoCWHcxMN7H7AXEEnYGz9ZgfhFcCC43Xi2c4dCBwBhKaVvVEbuH9zy4pNscv6cvADh",
  "key36": "2FoRcPztp4hatCXd1pTV8zLqqAmfC4RxQJjGxw2h1bBVWSPn6GhB2JD8hAkSahHjrdZhyEPaN1R6DbWnuJfkh7Nz",
  "key37": "5JhGF4i1RSCda7w5codsvmCT3eLuysw8RjdqNuC565nkTPEKPYdYH13dWFdh6nRAS7u6zS67CJ75CGpgDQp17LeK",
  "key38": "U4KYj7DbN2SvEL4Rufdi49XNcBzsgu7tW3XAhZtUQsFbYNwSb9JFJeiTT7sQA77JPmRSR7T3GmCe5snjJxNs2ix",
  "key39": "3SPZ3DX95vRindFxnHCcfix7B88zuBC6oCVs34VrPJfQmPCqmEj19z7o8WZHakahS4qxsS2vBr37KfwZTt27qR2p",
  "key40": "5tuJTgqFQNU7Hm97Zr5oGxGGtoF3wPzpJc2BmfX4rZY2xJfBhCaGzsrUeTtKdTKsGDCQGf3RJdZsUYNczFgxHwqg",
  "key41": "4m1GBhWHB5dENs74Sj6tvhooG9JYdrKNDvvZFZck8r39vimV7fS1GwMXonuu8m1styzQ47YJFeX9qFGJmuRADcnG",
  "key42": "2cSzXoEBT52Sch74UnTZhyYgJE76LZndbdxqEndjKCah8MtM66vNtSiZhXTmQR8uL7EnRdgASf36k5acF2tGvGj4"
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
