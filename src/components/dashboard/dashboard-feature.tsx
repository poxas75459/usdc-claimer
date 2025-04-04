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
    "4nXPojWSzzcXPU2HzFxJsfZeGquWVHxykWDhzJwyQTQvFe23vFdWQGGScnXFbBCgpsmNph5D3eMsmNycicrib5YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMLEeZeAYPy24NbWGTu7AqwkGUFbiodqwUnzJan24qo4sBkoe2SjZywQrASd3h4MzhhuU9zfa7eGAadCN3kgpur",
  "key1": "ygeXdh4WytBneEUMd9zBdJ9jg8tM2nTPk2xK6Rhc85g8aFswmYnZxUZHE3KqajeguE9J9hk2ytpTPBjukPgsu3h",
  "key2": "36yThkdHHRyxvdgLewtYvxFzjzm2EDPftx8dNaoxRDcYcADVYDgXb1T1ceL2aSJijn1d1wJUtetwVr31AiDUHUys",
  "key3": "3SWt9e5scVsWKaDzUy2fa5qxmNFaSF2urZtUKF4NQiEwm7sgqBXJaW8smetceScLKd3obcG2cHp5inFMdd2EYE9S",
  "key4": "3UvyVNVDB4D7JorEE71DkokJSARerre9fTcLd6fNyLTTNWJt394vmo7HDHLYTkEK1czrCKK9ZiL4LhiT3RkjTQMQ",
  "key5": "4azLUEg9TUSzEoLNgdTkDGz88LeivYx3vod16SuqqH4y3yVN2dXJUmayWwLqSZmh48V7LKCunXAdMQxyDJ1ViH4r",
  "key6": "4W4y8iEUQcC5nDtqWfGyrnfCGboJ3f38gnrotHDu7DNXv1TwCMJWCpQtDkUxZv713fgiorDyr9tj1U18f8Ueye1t",
  "key7": "3VdmZPdrrC3GSQ8SEyc1GFiuSGvbPJ2kXoBPeLk9mxWyW4g3c1b5sdU2vGTdc2rUrhmcu69siz3mh55zNnagY4Ri",
  "key8": "5mzsV1eHXj1GuaXL3Q3QtAy9xNaBnHBezdUVGB28iuPu5yVcX2sWNEvfex1nX9pxEHhRorHYnc9cBYj35MGSbeiB",
  "key9": "4t3rT3F4FouKKrid4JRrBGJutbNdy5YKPqTGTdbTWXtn3fNJaSC17b5royxmTU6WLJRxiBGQUfz4k5fAAPkysWED",
  "key10": "JNQeodzbDyB4TwidA4kuv1pWd5eJtqGBqQUr3hH5Jm5XTsL2ZKXqKnQdiq7mJuziyy65ddhof4dohdYgTYdG5wn",
  "key11": "3xDD8sqxWCx9ydC85dDEiWB58YVtcL423YMu1mrmJ4ip1znTRT8BFo5ort4GPM4oU57Eap7PWGssvFYBKk3wXw48",
  "key12": "2um2uaHVJq6vJxzups6PrVpUvCBtc2ZtAn99yVQmYpJbVAvh9LvU3GQgEC4pTiUD3FwL2qE3vJSoPL7jYEfKh9gQ",
  "key13": "3toTuTdV6MjegZBNWZpXVbXw9FJUuE6cxZuYXtgHNAxCGuKwXxR8fb6W1UywzsbQynVjMPPxNzBKQuSFHNTpqpB1",
  "key14": "5HAiobrm8UBxCfW1MrwerAYMrQFMTRpQ9oJVN9WABUY8i6Hg7YGVdrNESiZyp5PyLbzqkM2YkFVQJZ5G4c8DZqEN",
  "key15": "3E35NHtUGG42iW8y8vqGxJSGawvQFFcfUwfE38kDUQNkxJeq1gE14xxTYASZMKKgAKESR5nf6TiDiYGV99NxaH53",
  "key16": "3oMejDH87DSarFEUSqLF1AZromcLJfEMFq3k8suhnWWiYNe3dquBxSwPGrf21oKtZysdgqMFQ18R1de2ymVVW9ke",
  "key17": "2YWM7nXeDRSbnqXAqosDbqWPZBkoDGSwBGPntvc3wxUVPpo8WsaBf3UXqFhA4RUZob75L5LJP4dthuW1pmBsAGSm",
  "key18": "2w4fysjWE7CvQQxf3CrwEEgjp8NhpvJigvvyVWXBXF4kHEkNZsxhd5c9vgbLvAufYakgQrU9TWgTtbQhcjQbqFXA",
  "key19": "4rrkgwppmwryMivsFYFMgdEkLckVPEJicjTsozXn2aPFrPC1T2SCK3CV3s5WQitckRYFtHJUBtMjMDP7nLNvJQJR",
  "key20": "62SZqi3yEorpdWXAzTU9eX6p17nG1vDPYTEGYP1S97SY5xSbQ1nVbNynt9jHgAAjRQJf2AWBaip6PtkTSDz1JtDA",
  "key21": "4ezAf9jiXRL42dCzhvwS25Y27m9MPTuj6zRQ3SnG6iJuANzf2UoN9xm9jc1soQsCMZvCShKjPv4sSDwxf1FDEe2n",
  "key22": "3tTNjzUmbxj6pjZaCSCFGMWNZVUmZHHezQMzcdJaoEBTpLh1ed221WgPFjLs5rERTY97tSbVgZ1eYSraEZV99p9p",
  "key23": "5Ktgx1VyTGRmZcsW2zcq4PnSJVivKKtvuvCvnGS3aC3Rh3xMtRrnFKuR19KpMczaqx8V7cKUVu2E45BQNU7mUvtn",
  "key24": "kT1yWTc8tHzpm3BQEDMDkv4mEHvtPFbsuBcUuSdVr441Vkkev1qAqw9jhHv23xvjWg2FFDSvpcyx8NAssnXNc47",
  "key25": "5s8Nn8rFiRhq5mdm6HDrc4yByxo3cu5gL7mDC2szzCo2VVmb7X3nH1dsdVMY6H9wH2mL5QoPWiUZKjoa1frBGTbH",
  "key26": "6PCaJKi8dLjsn7FegtjnXaodYBQj4fh4oDV3XETbpvejw16WcCQS9947FWNBRebBcebhUkZSVJhTTnjC7FBb418",
  "key27": "tuH5po7J9LAritpS9F1YffHkdVCCYFweanDBKsuB7tHv5HJ7EW6ch6qg5Z72sjvzzAKNY62xUAJTFM64oFACrCt",
  "key28": "2JUNSXQGUK6DBswLE6f54BZPFmTiMV94Zi3VvwWcnSCFSZRsLhS4wWgWqNBenKe3BnpUKHPmRyEGo5NoAbXmK1gS",
  "key29": "n7xEvRb3BBpqcevPPZn8uVUJoCGRvRqDGC6a5DLvgwVwukBHYMtAKGNyf9xJBeoHNZxY5wCNVseAq4zm4UPpCZF",
  "key30": "2AJucCNpss74fXoizpgHFTToowk29Rt2hdJkreXRYnZRYug6wBgU5p5BKKDte9LSK7UjgLtiLHuLj257p2WcnABN",
  "key31": "3vwrCH8ARRjVgYQWrT2119PHsP8xnoKwJZukXdVy6wkpnQNwkikfPLW7z2dDkyp3KQrNgfDV6Q3QN3KtjpcCweTA",
  "key32": "515JrG3Wu9k4wKhbbYvtLRaWkHS9FyidCqeEtJmQY5PFEn8q7TyHWJpWvywCeQQ9HtX17d1DnJfYBACgWZ58kPnb",
  "key33": "nwfJnhNk6m82h9PoLDDBYQsC5WnV55XX1mzx6HJZBdnSBGRax5FEwsR7gAwdyxKcbEiZ6BCkPHwqsdbP6sseUoN",
  "key34": "3isBKospb6kqqN3JxSUQqcF6MDwpRM6cVmN6tDvLj8zWs21P47Eghte3STGMvMTmwu9W9ytLY1nbEs1hd2GQGy7S",
  "key35": "3UEfkymaJTuG2fqUAaTo5f6X3VaYQQpNAAV8CHaJGFJ9qotDedAR3mdcGJZVTG87xgHDi51iKDdssPSnMCGvncvb"
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
