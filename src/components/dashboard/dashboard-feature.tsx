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
    "2PdfY8nQAukmdBGohbMo19dPrEAh9boDhC9gyYM7m5nAkBJ8EsthRuZkq9AejUMJUpPCEPKTvhsDHw5MGFcP11VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bV38RdabZmQwafVS2bNakACy7vmBDZQuynboUcNdEQefA8Jmhzo4G89UK4Fye873EK6ryKBmmJPbDv3MPfNAsQv",
  "key1": "5H75oxim1t9WVVi7YDnkbRzN9B7qEoPBwMWfgNJNNEiSCt54kv9FQsY5LGC1MGyKA6hyLMH1hzs313ZiyEXvt2Ex",
  "key2": "5xX9A28uyad9VS3oDbFFfSRcF2nCCTdjzrHwxtacJeEiKrDbwcZFLFeM8ootrTB18nK8oCG8K311wLqPVL3Jkm35",
  "key3": "5Ftu4JasiJZPHC48d1M4nsEY2qzXndtVYog8gx4XGqAU93WZpeiCNWCMvuSqKKtxqJRip8k14TTYo5p4GDU1gtMN",
  "key4": "2cdfSnxVRgKZKZiFtmfPtcEqfYcwqkXwwdwmrD47ERJf2GdwXjsrLugypt9fu8g5t1cbhfLq3qn2gghTuLHC6Qer",
  "key5": "544E976MHVC13NhbYbcGTa58FsgT3W7MocvNHK8c8Umc37ir3Wj4djgT2oaXKA6DZ67oJpuRuiMWJbFHvH3ctq5P",
  "key6": "3oVDxv7KkDtowiwhuhhnHHBdPQqNABC3nh9Q11hXwhWX2VJK49rhuaKbMXMjS5FWx9swjRFLco5py7PgFT9F2ktg",
  "key7": "53cvFqL5GsfAEGHVajAH2ApDY2uUjyyE43VD19Zb2hBmQgKdyL5T2g3jm45qDp2BbVBagooxdtTMe49hRmhMsTws",
  "key8": "2b5MscMnREFpHYxejFVmPUAHfXkSrn2TksenSAM46kceG3STZNxsXyyT9TE4czTBzzBJH5Q8obc4breVdUkKeuEd",
  "key9": "4KHiVznrXXSFmkrzG3gsexo6zpnX2aJYygaXadaWcJzeeHRZUoJp7J1h1NgijacjFR9FRZT4NiwxrWKWrW1FDZ1t",
  "key10": "3frKhFemWyvCgk6db2t8ESb8yYmnYSbx6CezWedBa1HYqbmJWBTHLUb2s2sWLcTu54K6aPYBmbge9RxwoYVCmNmR",
  "key11": "2igAzYc7KpVjAdUKYdeisr5t7e5V6ogVgf1xV6zBXnAUpCgkAnEMF1ZipCoBwyKzN3B1AwMgG4YB9fXrgWsWDAAp",
  "key12": "4r9ucm4jHBPZFJEFB1Co9EKrhsEmhEUiJJHXKHemN95Y9aTff75xfVN3XtjfddiHveGyB5neVNLkzRC3uXwTsL6U",
  "key13": "3XisGHHAC8CuwW8hA4fsaYZrbfkbBtCN1XFxgRkd5rDPLUwo2D7JKD8yZKCCNTXVEBbr8m9iB2Fxx3uWEtY8hLUf",
  "key14": "5XVQnedKV6aJwGdqWHJy9gmHyobKk9oDC23pbdSCRtuShHToGXTkeyGuujC3AfsnmGQpNBjnSjCw7Ai5PqzZEfev",
  "key15": "2uQ3vbV6K6ouwH6WzfXStooon6FcRWbxKG8nk4iQQVjN1ojRrv9GA3ye9tiMexQoFno6SF21KAwfURB8du9REzkv",
  "key16": "3wzx295af2Sg35F5HKFf5LYmYS554nuYm2ZqVmuXxUpq7h2AMCtfrP2mR7HWxin8f882FKiDD1KHn4mMCJcNGeLj",
  "key17": "24uzCoYCPdnEwT21AMQarXWR74cAFWwuu8mwQmoExJaznoZUG6suimsNjmKiQN1qZWzXFV29kLE9PwqXNFYGU8Uh",
  "key18": "MKDk5DMi7wsCwH1cGwLW7zLtyEw4Bent7FGKcpGYWUhYvGCx3Yhpn6KNzPV5xnuZrbMDgdMxW1bcYmAbdSJfgdj",
  "key19": "2TSyHMCcMYpnttF81d8G2PvDEMUMeAmjz7QY12UnH6zG5u5ddh4GVGFAinaftEqHPyDhEEEweqddQFmN8ShUe6re",
  "key20": "3rh1gMsnHSc8geeGxHuWBE2LjPDqAoGMATgixugjWqNoqTAwQ4pHszTSnkdqeC5M6PgWLRpeWUCQzeXvpLx1kAvN",
  "key21": "4EftVUsfH8Yc5TrryjHqy1oaSoAPW9gHhqiw33KdB2DXqCtxCMaPybjiYXbNVwDWpwyMZyj3AC4mXTwGZuRJMbhW",
  "key22": "43a2YVZt1fVph3YiCeKTEw9aA7KxP3u1UD5H2MLAJGwo6MT1vcSB7usaf3xZCSdf5b3BkSGi5H7CjuJDDBVC31g",
  "key23": "3Wzq5mzFhcwLi86QtyUQHqg7oimDQZnBuC4v7kuKwv5X6ykVJKdvmDKMJaikmo5DYh4HGvCGsKA9No43kkYTXceV",
  "key24": "3hjfCRpTH8gWoqKNvCkJQdrBSH8UogK2aW8vRZK97gyk5G5gKeGVhvP8GpjzKBHGLax5xX1ePDgvPcerH4kTb4bX",
  "key25": "LeGwAhRfy7Qc7oTjFWkhEDLJAzBC56Ujud9KWq5FehSSCVSV5Dgxwf7PhrgHZKih9UgZn8aNLFjVdK4HFGEVWKV",
  "key26": "4ccxaCKXEr13NH7swGtLxu8F4n8yyHKjpCc8tp7njQnn5dSjwyKJG5MUUXnfeoUXTdupGxEwem6bqP5TFRBRkrco",
  "key27": "3rKmHJn5cnFw586mX2yxo6vLnwzneMa3HJvaMitk1YTH1KDptLQ1LGtcVkjM5D23AvW5uGNFm4rgcMKYM9PyJaEV",
  "key28": "6dGiBNaonYVXc66VaqZpTxNJQvJmdyQ24SPoZEaTvxgpvA1faPeQMNubyYsbUGDcwbbMk7W2JWTs2LDXEXPps8m",
  "key29": "xt8wUJQY4rCgM6uCRCtgDkA4uZMN5JspmFBqAgVZtfkcKFGNGCJetUgCr4h4sVu8RCJeCeqfzn1d2fFnsewzZbx"
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
