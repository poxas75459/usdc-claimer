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
    "3H1231kWYvR6cunWdFinPt4ABK2aWdSd22shRXNTxU1dTH58YpaNaFwbzoxpT2psSqq4SAqyjJj1psqqAwRHMTJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MxG52NBWHbbFe13bGPVXCdYXMtGBpsTkmfNsujx6AeaXzJEhaC74vcbk8kcox9rUhcGkqQL8gorGaX2yWe4CToA",
  "key1": "4DQX7Qe4LKfLJ5ycufmqXhez3qRmP5GxZnKq8pW5rymF76Di54xTyGMkKauyzgJUgiYrzcvv7Tm77w24gauxnFPY",
  "key2": "5LuQyaFKW8zTJeY9PesoAiRP8DbdaacpSv5T85BtpA6HUwKmz78uBD88hSm2PE7zZHj5qGq5ZtffVZVuLxKCzAk7",
  "key3": "U94nnUm2HX75aacFPsHN5V8Ds9czoZ7T7G8pnsVJtwSKkTzaJ4hVCStXa1rkzH1viet6kG6k77K67JtBcxnLUGr",
  "key4": "2meAa7smTBqTT1B6HeTMVz5tKhYArF6Gq4C2yp98QMb2QqVkw8Qbm5XDy6ipwgvFB4nU35BJfSBxwfMcdK5hZDHL",
  "key5": "4CeRuL1CgR1dLXFqcrSeUke4s6GLpfjtRYYzKbZYcswaZyZzQ79cB2c4HAjm2wVVurya1DW4BCEEBf3CFioHag6p",
  "key6": "4rP6oHeYW8od3BC3xpW4tAe2hboiLXB4iqCZ8oxXvhTkRj4q3poD3sCvhB62VG1nSorfGRiC9mUuCneCS1qVAnSC",
  "key7": "2Cov3J3bhMYM94xeLTiFQPdf4vndrt6eGcv3mFQssN2yzeeJ9zfFsZmYXPu72NDPdr3nusrMDE3dauoww54qkHmM",
  "key8": "45rAntfc5NqiBDSp3Jy9morCdjipB9fcmLGJ1EZjyDD9tmKsLfX1q72wRAE9J1t3buaGiSRChjay5oVe32SzsbUB",
  "key9": "4PRjeryv6S9XAUmWmCbSddrtyU3FXeTa9jbZh9iDCuf73NgVTNF2FQSPCiaTTvogDPCjr5YhL6ghHKVLexbLh3pY",
  "key10": "3saVuwwtW4KgjYyLBhmh6DZhBrJFjxkcUcMn8V2X8v2sr6hKDtQp9Uxc6KDXgWWsyy7ZGkuBhvGY85bTqvYe3bWj",
  "key11": "tYcSWDRrcQTLcCsqcDdsxJnq23dZrAAvJ875k5ciUqUMK4MeC4rzFm8CwERhst6uTLfiUNchLrtjC94UP2eiyVt",
  "key12": "Z1967KUHo8Nnkx98ipdKHZpMmdF2XxkGvdyTMuijkzoQTA6mHdhYGWhssAMjToDSmTAxeecDDYd9QLm5JkdTGpZ",
  "key13": "5N223Cijs7gyZmfj5B7om9T8HB6YRn5z3r29qgM5e8bfEtDRgNcJG2TM444fKRFRWGqWJfVbFEhSx16A8YGihH9G",
  "key14": "DCWi7VTmD2Qm33S8BB6dzevqsVhNJa8ZyCRCctoT39vaorjZniYcwwHL8V1qgvyBLAJRTMf3zdff7bwEKXQvHoN",
  "key15": "33aVihS6U8cC1mtetebBhiyFKwvS8By7fRrp5SN1USGjMtASyMN59DsrrPjFjQf9XmRZ4kX3R2DzJxpDMtay1zSJ",
  "key16": "3mt9ghpHRjHUB94ckGfvtFjeT7yzYsidJzD3vKLykDZ3E51it644dddotmAYneutiDSnYFE1w3rmq5gPwpGoReMf",
  "key17": "cgZn2wAwfMgqTvz4qWiJtpZiegS75Di2WGUoqvsRiLuHupVxFWaejBZnLv4kGGt2mWWV27RbdUX42LHnV1kfRFS",
  "key18": "K17u5fF2YgePMN93ASLSHUfwkoxj6fKkaRU29TR5DyafwqrhgWsHPRzkiudfcBP33tTzkSn67BMC5jdogtL13Jx",
  "key19": "2pgUfKFQ7kixBqRk5ZmFKW4UWJydvg5BhhEi29e2z8Uwczvh3cnpqfMvhocvQSiB2E7JdYzLfUp9AJsxGZvx4yrP",
  "key20": "DbJHoXMFqeLigm59EiGTSqBcweycfPpra2U4iHGVnKFsdkfhHx2k7giRSosyAmCke2pc8BxUUqUiM6yuCRnx264",
  "key21": "33XaHonytu1aBx36oMJ3zP6N1cCnfz51fUYHXa6Ksd51dVe8ZDB3D4korMEGvtSMAYnwXSQw76AbFysMRLEmddGD",
  "key22": "4yMbZTbSfNzTj2KsiDqQdD8b67fo5TBzufCCyQYKfqyWRNRhJbmHnnbNQyWcv8hVkQhRwJgTqeqmapsYLG4Tag3X",
  "key23": "61bmwAHQ2GH2MLMHJFEsZjU4TkindPiz8XAXY8mV1PZSqj4ZmoW3j5cMKoffH6Muq9ktGQ319amfmLpEtxaS2mey",
  "key24": "3JQiz1kfsc9DR9irFwSKAgVZuh3Cbz3Q4VktKPetFHUXszv3PHMiqqL6yeXfCU6voKHjy3WRQH2aVw6XV7CNXb2y",
  "key25": "5YbyvFwPMFLdV2dJyb3tgqZh3AP5g2maFbRKcVUkbLhDUhgMyfPEAbhoyv4o9fMqNonep7uLjweNg2vpJ1MpuyGp",
  "key26": "3f7ieQLj9qsAykdpJ2RbGWXUTsvCZ9pTxfiuXDEZmWmPjZv7YJm2vTBPmVMeAH7fJFpCZvTxdwLWpJUBqfuzKxpj",
  "key27": "EFEGAj7K1f5xrZywo8bYPma9t4UhPh6pFLkk65KW7PJQ4aKXqeuNy8To4DM2emTE514jAR8Hh6PzGSVjDsqBawH"
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
