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
    "5Fjcixy8v7UJJS59LgkUAmWz7gGX92Emqb3SY9g3whTiCCdGXLBQYXTE3DDGU5rLkdZ6qGbSFdEP6HMAe8GB1W39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61apjYjzi5dBVdhpLzUnrhguoPJGXQpsnEhttAutBHtrGwogLZzTyhL3Rb3kJXHTmrcusgryDPbzVx9ULHsRhgWt",
  "key1": "bTttkXcyeDh6LwZeoD6GVjDbRKHZA8nXuHiNCfdxnaRF9BQT8yMtaVtuuKAC1rXWxBRNA2f3x5suLERSz1EsaFb",
  "key2": "ARj5BFdU1V8VhJpGWWXfZZfQo7iXgYHQmy7JwWP2R2xScQNpUre9itoK35GoBVhWg9aGcz4PhuvzJBTutcC674b",
  "key3": "3QEyrx5MpP8f6M44UrisaxFTuc5HkxebmXZwtC5WPWZQtLqeoRxbf2cctS3fbp4W4bStaWkdkZQQf8nEh6Rqeojh",
  "key4": "2sBELwo8hn7HKbsCYoyngpNqZZhVZdhnbLLEyxXEWbk21ZvYJFddE7LHDoY6EiNMGuouqPHYmAnj422Mzjy4kWYH",
  "key5": "4C3S9VLSCQ4VHz7TFcnTREWZnmH7hUZU9xUrUFJ7zPqVErzHsiFvcMBHXaKSQw5wCaw9URA588u71WT3Ssr5X32S",
  "key6": "4bfmKFj4FEGWptfjoUUYWpeAkC2PBA6yRHrjqF3ozyvuEL6nfJiX8oi64iuQ9aEVuN31fakx9VgWrrGvB9wQ357T",
  "key7": "4rKEDVLQiAApUeckEMG766yfHjCSBpxqV6seVz731THBRcdpZX6PVrwCNAKcAuEdHWVprQByqb1prHZD6t68ghW7",
  "key8": "XPtSdCmh5Nz9U4gQHUTR8WSyHGS6DJsNWwqhBhdXVT8YA9B2HqsAzrg1THDi2J8CxDmP4veL9pFqieoM5N4T7Rj",
  "key9": "bqV1D9MDXTCNcemTmRFyDQvtZwvFqQBqHMatXtS2KZtbkenKYfZA8YpshBSws7A6wXvsiVuHGWqVSHGQLxy1XL3",
  "key10": "262XdkvFL6s8EStvaNikXfrifo1DEfBYR8vsz6ZP7TeE8dkh9HFXi49WLATGkgwRWwtb5YKTnZsTVV4rEw9JhRqF",
  "key11": "ELLyJeMHUsZGxq7zdgyaBbMSF3TuQapSW2kmJMfYizoNRdcBqQGKHwNS6Jmxm7HVz5QE9eUCK7HHhw9jUEGpZGi",
  "key12": "223RSHrrYx3TTs5Dphads95WYgqZHDbSZi9a5MXdY2gtxcuVeVvnDjRKGWfFj9iBWY34hKWLyxxRGFLF2srBpLUR",
  "key13": "3jAvKu2vJsaeqFZq67ASE7EoZmCBv2W4BMrWcUGZJ3nwtYiZwW14pRe2qRuRV9n9aZ5yjEHmECKvn67ytqEkTjx7",
  "key14": "2Q4aaGoTJAmuS1QKJQJ5uWvrPgLs5umCfNWTyYTPa8RNdVzXhHW7fZg54RnNPhsH8FA6WHa4e8aabRxFBinB4p6x",
  "key15": "pG5s3hBTJMBmDDoG7vEnkCzcQGuknTeqMxM3ErbVyTAS3KQQzzdF8RA5hPy8vqLdzU8GSugmtsVQG1sUhbyrk43",
  "key16": "BHyB3s6qaaNbRRZgbFrjLtfNeeqhToWpNtcVPL8PQ3cco44A6c7hsz9cuo4UNmfRfpjK7sTcTx54uasjpH4pkXE",
  "key17": "571MxteskTQ2T6E1Xw67t1QgwNwwU9FEhnmzR3to29vBxzYhpA6UMcn2YwLEjC9AapVp9S1AP8n3xwfauG6oSsgG",
  "key18": "5vvnKsYRBy2dMW7g9StaghE2vfPzgoK6PXk52x2RkXTjyQPrcTaeCVXxHTtgYvED1tRknFrxDqXbq3RvduSDPS4r",
  "key19": "3dGs7VpXEbVG6yE2RTNTqAXhHJdenDiUzdxLWM2jWDXDrA9ijtEaSkQNJBSEtWGxWWYnxm4qJPbPKa28TMMoZTha",
  "key20": "4Ha6S9YYJKsWPGxnsLX8LyiuXRJ2WPhChpuVDtwVCFs2m12UvXLNewEPm8VEnggvebUozoxrb5XjC1rMvaBWGnTe",
  "key21": "wf1coe69YzfmTKrmb4QVE9435SQkR8Dg5wpWfAGoaiYVGhEqFpqFCJ4GxrqKwJf3xgTPCKLaSRqM7maj1t1qcvv",
  "key22": "dKtocsJ1c43rbFf6jmiXxje194H2gJMuRiRdwdzoaSgkKThfGJALy2azZ3zt139r8vvc1ibjLYyCyixUo4BXayn",
  "key23": "5AFPoWgWxykLtA4B6m28a6zG3mVk5AKvssyEuxJwpJTPkTxCUD472b16c5FxJY8TK31yjNqW1D9xW4VTiBGgDdXa",
  "key24": "56e145LZF2xqBJdMkPKc8obdYt984QxyvfAxCW51fjUStxrFzcaZv9Jo7cTEQzkeHYP1EWmLv74BeMyFs4eSJssx",
  "key25": "5iLnLcVqy4zXXJ8UVViRqyM9qTryDiVSoJZqJNVxArxKqsE3qRsH23eKnXeq4rnQrG4DrwHx5S6fv8TX5y8x8Jd",
  "key26": "3CMkdzbXR5aEQq9SpaiTFNw5hR1TuXfy8fa1MV7e4Qvu8QB371YoSu5MDBPBA6fqYoLyixG47TGBkWgyiEpNLBXK",
  "key27": "2wATSHC1EKdeHXK4FSpjLqsipZw7dv3Edictag3scm9VsoEFWwh8kLXXCLTVE51rkpADC62UKzm3Lm7gTXEX7Egn",
  "key28": "5h5p7wdvuQwwXoVz2a6WXjsrcURfUoQ6QUQkbLc4WJrqRCWeoKp4AjmsQJCthN1xKxgMKaitqWeWW6dDHouaDqPL",
  "key29": "2jH6mXfjstwnt8N9krjuWfc2eFZp9YQt2BxGsNdUBDHwtxY91u5nSJ4C6uQW3wZ3FaZVr4kRrwstbtowUv9dDB8U",
  "key30": "2nNRKPDQbreoA2JmxKBgbMVLFxheJFs2xamdm7RCkumZZtkAiJGFpECsEoc6mmC92EFoeRxoAcGDb4fWcnHT9mhj",
  "key31": "2fQ1Pp7YFThbtiaC4yxwGTTkTC1GfEovoWYCrUXYaHZNGLASdjcRH929HLdkjR7ke9JGpEqas7ytTax98puUsQ9a",
  "key32": "4UxMrpVznYW4cV1VPrxDa6ViMDu4rdeHpgR8TJXu2ev3v4sHdB37CB6uGceFzA2aF9Cpz7fxJCLMmKXS3W17J3GD",
  "key33": "4whUXJG7Bg5e1JgBC9E1aMBYi6bedYuGBoNQ1RNzPiycgevE6yT99uBU1xpQc8orpVg8dEuoDVUdPfVsNpT3qkNx",
  "key34": "3yiscZd6D6ubTJ2utkJTygkWB5xSPKBUqzJGAAS4VPVW9aB6nPwq8zTNb7jc344cMa53acGGuhYf42Ww9tdYNrPB",
  "key35": "4LfgGg5qQAmuxJELuhtx1aTkaWtDcXAMyb2e3KtgDAt1Dz69fjK5C9V3WMRWkHahhsURzUbBQAwtY4Y4UR5EUn25",
  "key36": "2zLvKxt4Lp6cmCS2yVFwkvTjXZRgGjKFuge89KgL7KerFfQNgCp6vAPPumVzBHTH5xjqw6rRm3AkYa79rirBXFqy",
  "key37": "5pMDvVuS8R2fA26SY5HBapbcq45pPDRnheNMaQW2HNXQB9ehGRpzp6uYeDpshKvRznNbjCNHwqxuntJTDbWeAGRD",
  "key38": "2gc24aNFEUWd34crhATH59L1RV9CQrW6NmBG1F9HhnZhLyr5qgR32Bf934HMPTkR65o9Eiq1fUYyUd5iNhhEZW7x",
  "key39": "4WFhgUrsRzNjegrjYiVTWNBngE5LGHzs6xbSkW5GA2vAphrXAMKhjV2ggkWk22eU9ufi1rahzXxpu5Ve3Ms1YyAX",
  "key40": "QXm3unGWYc23CewDJFyvSU59u92SHfR7YLMANtJ4gDo4jJ9Mtr3oQBjAg3ajyao4NaJLE8wj7ZGM8HHrzeKT5qh",
  "key41": "5PwmffG53LfPPb1naqqhXyzVtBtxrQsWXbPRPNtbxY4S25Zg3KsDNndoBAXTduJxpSXwhXb67PePtApHEovrJZVs",
  "key42": "5RhLMwdCttrXCHvnRkrEDDjYaN5jZRDSxc95fUW2e98xscrqFgSS2AKwXKmhkP45KGJdN874q8BnsK21MnKH1gNs",
  "key43": "5AipxjETjs56ZUMN8gXoawiuLUq4CDcx6HszBTFReLoKj5gV2fC431RFXm5dYmXhnhXruCKakLT1AD8ix5ggq2bb",
  "key44": "5dzULcdsS4PJ4J6b1Lnq65ehJByRwHr9iwky7iaCPHdiwzBFyQRRHycXSPNdRsYh3Gvx3nrv2nsX2C5ZJtAMuuqS",
  "key45": "4S5ZYiNp85aBYhdCdQsKj5VZRX81twRNaK1BnJAjXhYFPMJm1C7o3NCu8bs9yPg5D2WubkNZJhptGgXaopi5qcYd",
  "key46": "ddiKoYErBdYC8Qf4t2YBtn1HMh57xsto6tc75tCVuPXGn2qgRU3PmidbYJfBx3kaJQ1Q1mYRDeGwwadmHKLQjjn",
  "key47": "6AJrmUREAw5YCQaDprkDUd1QiKENbhxsWT9my2cCH7t2UZqMgGa5Vxf35Zk64rEB1fKPSAWYyrR9k3z53Mh9UJB",
  "key48": "y5f7hfMCk6HbPvoVMS4H4kisSH1dQohbiJ7LuGwuiJgckHTst5qZ11kz1cRHAP4eeC33TGVt3c9Uya1KR2mteuF"
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
