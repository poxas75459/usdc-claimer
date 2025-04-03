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
    "49bvH9S4B2HMsWUkjCaFiweBwXSVG5NL9xZPS2wA8RcA31xmM9LFMnTXZ4Bk4nUrbz7yfHZWk2FwDwZ6qShhAsV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CASuRcUPmKguNzje6jb3n7L7YDZrof6KmaBvP1xqV8pEs9qt5Fg6z39JMcznYZoa8a3vfcAPTBfnBmXTDgc3vWf",
  "key1": "3E1Hw8YaVxxpr2d1Pbsz11GvfDSXA3d7JbEeNNHe2zXN9aKiNv2gYzYdrwfAFfQSaozm7eGfXyJ1muknUEAdbnk2",
  "key2": "2KBUvTY3JHgndyhdQYxsMa6FoGYET5u9tqVPC4WSkVYkHvBTmk4C2gFPUuWGGYUNSg1TK57cF9RA2yFuAXx2jGVi",
  "key3": "4m2GpMbSPEJSdq9y9KkxU51nNnRw7zxfCcoiPJaMpTYkmSuWGNWgF9qq94cbw4EXwgHwaERDxDFQEvw8aacjnyyn",
  "key4": "CYWeVYAKardnxDJgqDLB16fVj1UPnMBxpWEQBtq4qnkYUbW7So1zmJ2egNqUUYXu6RXmxgfL5GM7YQwzpn9ZGwf",
  "key5": "4mv1iMShtsLnqb9smQEsbjDLnzvts6ZpPFtfD3Mo8v8MMkjEeqCVHFca3qCztcqZVric5T9GRGWGDtKP7bNRxKfq",
  "key6": "36CMEFZ4M7kcYrKKjUNMzXEPusFsUdAhQo8f2xMVNkXUCTxmZrmu54eupjV9SwkooGSQhz6gkin5neJX7BrAFPwx",
  "key7": "4LvKqiw1N3dEMR4k5Cj3y67AKzzajq1dQvFXH1bUPxuEqedzjAV8N66CjkXLporAo8oafAe7TkXt7skAWqRKLkzf",
  "key8": "66awcqXWCCcYx39Px2tMDkyuqQs9xVFb8JiGt4ow4kqm2gtcjLXMxs9oYP7GBjEBJZMz5aNYPdvBMPXYr6ps4zWk",
  "key9": "2Rf299qSdu3nfJWg7voswubSmXVQRzonDhDMqgBvifHuRkgdWpX9ciBkFdHfwcserFXQLTkztqgyPTNmeRerfCzc",
  "key10": "5fkAd7dT1jiwTfG4RG7bRBbCGfZdSZ7Ha5mQ4SdMHVdFe6N7ytZokvwbDgciCDJzsNZbrY7ieLrDJSVfctAnxfbd",
  "key11": "3BJe7u4TdUoBVAQKk4i6u1TUdu2paCfpCRg4PCuMZZ377FtiPpAcp1atrD5dznGjGEudYxiuxWmBiC6VfFufY4Ss",
  "key12": "2tF7GzAPyrn4fGqGYBHykLPvfMSrCXdNubz8wCYkCKacrMtMaffqtb5eCMJj4MdFSeQEmNJhkuxKUKJiwmhDvYDq",
  "key13": "2C4h9v5r9rxjmcnF7fpPp9EEk1uqoiF5NMe8qcVPjMxUiJAZDVa9AR2U7re3UG64QPfYLLpjfjusjjvt8woFgry6",
  "key14": "3oGZ5njpHF2oKNLE5HmeT5Njw4eiXN8GKT19X6Trc9vxpLyfyAEGqAm5KhjqQCGAbwbDLU4Z3Y8jdvFDJs78DuEZ",
  "key15": "3tqbJeH4DJhVAXtwf4Piwk7DDmdodSAiPE2a2kbykjLwcxxSP56nPQkdaKCAYX6ChQxu2o1A6skM1dWwmbYsNnGa",
  "key16": "64ZEoG2c7SEJ3kFPFo3qdffBckbwrkEcfp7EkLPZR7DqgLAnvEAZqEW7bBNAPpZVWmXDRVhBUBcGooawPshir3SN",
  "key17": "5XxoNQ2cRZ3DdUxFrg6DvHBoxoYRADyTdMM63tTTFA38MfoDaYbX3giTaYCZrrxncKteqKJE24KfNhoaagNZviad",
  "key18": "26SJUAZtJEoQDHQAg1eoeanBnRwX4mhGNsuBG8CncsJ3wMo2Nrsu7EZuxPTB4oNdowioQLh2fT3SXEpJdyjXsTMo",
  "key19": "3aea85NLVqYqWNR4FgTJhdsKuP3ueVcKFJHh6hFpg2uDnS11fLRUyvFhsUdvLie7h2J9UZSC4mWaYKaP1Zoxjpyq",
  "key20": "52C22b2rgFLuzeqZVW79Bp7tDxLNaDzzEyTv9nBCrWheoAjtU6ySZ2Rm3NC4CnFtErhRYAwFY5J79mKhqok9E6Zi",
  "key21": "4ff8FDawq6HSA9ERFYs3uUo6kHUfsn2SW6cWDPhvNR65wvRgVBtPPE4JjWxWY9nAFHu525wMroggwWBTbB2Upe3q",
  "key22": "mKa2bBfnkpixE3idPLcx14u2Yc2F1ztBF8JU4JvV16hNRrGYiPhoYb2eLNfY8jm7fJuziZysQXYDbjWGxnQBDs9",
  "key23": "4KEUyHktruNArgzKz3AQkqUz84MzpHZM2DWWvSS8fMB1fg7QE9894tsGatDWUQf4KFTuhEVP7z8kMfiWYBCEGnzB",
  "key24": "4NuZgsFs8R1g4ieELm14TcScjTfcB1XFbNvKPURDHFohg5sb3nEgdjP5u3kGC9ZEnKz8kwwJKSA2fDYQd9Z4ZzAM",
  "key25": "3wCuRkNB5zuGSkjR1N3uxU94JVLbzZXyMZcPmVUZrGDwCGk8fauGnX3u2T4ZFc7JShJKqMkFAiYCRNEw6WLZzhe5",
  "key26": "2s5FQv7xxcoDngpg48DZ5HMNgHWwoTi9ZRoXU9BQQejgpZYkKCrQgd1nuQ7tZVfss96Ri87FLqRL9JpmcwvywNXp",
  "key27": "4jVH8UYcVEib42BEFnm2oAJMNXqwNMoGzU4jFWM57yB6vHh6fCftUZBpdmnTASovwGTmRPJATnojvATpNN6KEQAj",
  "key28": "2zLjmUVMZGoR6Sc3uNWWTt8zZfRjevhw7XhtT4nEVq1BRhnbymZWgs1Uq1tusQ5JoCK5U54UuyF9AQzeRMtKWVNa",
  "key29": "4npapm72uCJhE6z7yY3bsRkrViyHwJM15LNqqiaAD6GXbgbpzCKBSowgFvT1gpEgWWn9K215Pji1Jo3yQKRprFAi",
  "key30": "2hNYftMviShGnQW1Vnm4E5Z95r6oC1THeHsPqmdfjgAkA2B8b3DEQfe6ivZX54wycU2iQjygW13RhA6nk1CMB4uR",
  "key31": "2EzdXRXRj3cANN1gsG5LsJgcwmiY5w4BcyiiMtxTcfqpqjJdtC4tZafR5rnVAGstvdQDip75iLGPRD5NLtPFu7LU",
  "key32": "41N3CME1giXu8i57YnrMtJkrrjXFG7yYnJGo8bV7kU1fKegiYeHft41kw3DN6BZNoxhQa3MfYbDDzLPy8WWTExr1",
  "key33": "3K7cL7kikAU9NqEU9yaVUCEm4cfkR5daRCs38xyfYRq23QMJMN3bnStLFdKYSXtG8YUN4CL2PtRc5nkygEzGCsm5",
  "key34": "mMniM5HWVkGKt5vDZpntRYLVMja1ZU7R6wURAoRRvh8jzqavRPCzaoNhf2XzKfpxNaoSiPUgfXD5VuiZ5YhRJKR",
  "key35": "52TpeB5UbQ1tfhKFYijAoH4YXrxvVN8VnLqkBjSDmzV6ifY8NWNHtWYUZsnHsA4ir8YpDNw53yVaLLhawYS5GzmD",
  "key36": "3qtVc1h7gpJUh3Gspd5yic2fXJEkkLdxNmPwpW3ReUS62tSoKWzyGnCo3LLJBuvGBPcUHJAH93XhVjBTS4puxop9",
  "key37": "PXTeyPs314L2Ds4FNe8BVXdvtoZLFfRWGKSNiXaf9GHUnKtdZqkAZAxpmuSbgwLNm3HuKehsvwya2vwq55kGRuo",
  "key38": "3PDg7pw78uHba9tdcf8ZVYRWQSnJutb7o5eXJt4kWxFRSgJeztfJDR8macrT6hWo1hrLjDbHiPQXgesyHuGmYXtc",
  "key39": "2RpbxHthPUDpQcdc5HpkwqK9WqXaTjdbC5nJCMzCqxXYX2nUij9daq48HgJtmRibnxk8PNGa66vDmg9GQKd5VywQ"
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
