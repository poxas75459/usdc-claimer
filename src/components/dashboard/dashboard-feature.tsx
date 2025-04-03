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
    "47z8hZvrDvztqsXCsCbPDcxMSzrji8by45f5xnEAytecPxPwe2f1nYpT8pjKqDnSBy2HHYtUmSXNDsVFkuCExt8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a28HiEKUKEURigrpcsZyoD36uM2hDQbUNJjsAzr5JrmXiAxbNoir58dS8XY6v5pczDc61ajJWVe3d3qfA28j1eU",
  "key1": "4EkVK2SKm6gNbX3n5tPcyjEYFd6uDQE5L8uihTXQ2i7XzoxQtRhpPTPK1QvTACsWQCFUbA5wvN5rJ4A2f14rDsPw",
  "key2": "5uS19QqNVqJfLHrsviAzQwm4vtRZJbizhC6mrhchm2hexkc6taFXdLNts4d2AfiYUFucF4J1WzXhMLfwJpcmW8fm",
  "key3": "5F76rvh2tzh5bkun9wBcgXksRrczq58At49mPM9JUEkjaxBymjo6Yf3MP6oqxTHEykv791cc7UThkqcUeA7Rpy2L",
  "key4": "4an18XaEQBdwjHN1DdLAL4iZjChrRtxLfUtaF5Sf1tZtfSMpgM8HAPhM3m9RhQDpChyrAzYUEr3VzERC7F1zp8Jf",
  "key5": "42yQYsv7tAF8HPycdjzGC9QsYkJNB9JpwBigSFMyfEj4JJAZz7Y2F7g3dnG4jUKyaLvS72EaX1uYZzpFaqULA4s5",
  "key6": "eiwg66uCu55D8LuRgj53PznrV86w3ZTRuAKBxaGVT8cESQAJoSMmTxeC5ezPNevmbkcXJFZySLHkZjzg7W2sjzE",
  "key7": "gqBwyHaZG8cRLM84L3PKM6spm9yVX6zTKBy2SJkV7iDvExqZdaQc157uQWiD7y43EjJM7W3syoxatRNgLkngYiJ",
  "key8": "4JBpZEwqw8RronAXCA2esuLHrdHB3VsD7g75puiT4PaBtuMUt2cRa59gfw31wVkw2r7BfGMFAsdvkKVZ6MpXyLjw",
  "key9": "1BzrdXFXejTDNJK4ZdsVCT6BhRc2EQxvbWymawxCv1zghXoFM21QEoQ2ZwncUCgkZwWTE9Ki5jSuibg1xtkaK9h",
  "key10": "38FndhravM75TeSrZZLYSSfi3P6v5NQeUpTBfw9ief24tVuifSraFKTxdDi6XCBnGmBBKcWvExNtCcBSsE7Szcfg",
  "key11": "33zeG1BP1T97BqATMPsNyzaPPkqtEx5Z7DsEagfi8XnhjAiANvCZjg3hMCre68UkjRVAGP8xR6dKcxizMhy9zcEc",
  "key12": "55zzQyv5VQ924gdkqPN2o27af7cjQevPVruz9oydoKjqkvH9FKQcschZGZJkdK4xhzVvroKiEFbaruy4d6MWBnLK",
  "key13": "3WyfN3JCjeCTPAGEXA4qSJwRYTTqRBNs3p5CCB4XVsghJMQZsZDqEA8LTfvufLqeKpuwTXMiSs7DVH6yZ6qyuzv5",
  "key14": "5bCdo8DNtvbNGuF8GckkmmDLfNPqAGbSGXfE7UXzgGTdDmxbNoBrg8dwfM3xhUcbg2GaidfxgpJLaYHZwgYTgFVc",
  "key15": "3BMWY4eLvqRTuoe4QnFnSvPzEbaJNQnpFta7G4HwJkdU6vNmt5Ye1XPvFLyMEyLLRbBbpvG3pYAc9Gu52nja9BKx",
  "key16": "bbrw6xG3FLFyRbPffHjvrYDH5Pj9dJ2ZVVSMBjnZnoQgLg9Dfroui8mkfdV1yqcB3z5xjGCs1eyxwwDn1Txx7YF",
  "key17": "3Xo4sBmL1kj3La7hmt2oCo4viSqcF5En3Z6vmiVDjkNENN6yQkWe9CzDnrV9sKzA4KtbTJewXbZHLCXevEGs8an4",
  "key18": "HJLTzmxYBH4rz6J67NZ6ZqxzC1ggCe8ZNLWBE4Q8di32FXDvDh8qS134Dc8z4qYbPa8aTMcRtxtQXdnHAZ3imvE",
  "key19": "3CHPmZ8Gg3c3zBzATBnPRnSygWtGeYULoSLn6Lgux5xS6vqFFQrbdVzyMPESyhDBhJTFM16UTrQcJtGw8fZsFE7F",
  "key20": "5B2XbmE1EuAcvdwiCuftH1qMn7BoEQCjMaRCU19P8G5yYSTS8nXxSwT9oSzfXo8iz8WPJmAzms3DxfgjJ5quPmaz",
  "key21": "66TKc3g8iKH5iWD7PUcwkCo8NRSj1jjHMRiS9S3fS674aFEenyv7jXTkvGzoupjz3WZNR5U4nb5iD8STAyCfjXPp",
  "key22": "AFa4bm87VtEA8Qe1fsme3qXRKN4QkqWFWMJBaEirDz89rL1QBMcWuEZPB1sh3MNFz5DZc5GhouU9CsyfnpzbRtB",
  "key23": "3Twf8U3BugiuJ3uFCzmme91L8etECAzVvxmMSTPsA29DCqzguCLj9FrxKQ5QmYTqXi7UnfMNFjty52aS67GvuXnA",
  "key24": "5QMkrxoZpRsXhXZTrYuvoWoW6p8RHKi3g7UQqxvAJtM5Woyfs3Btjhnjbb9sB6n3QHL1nbpgftND2qJ6Wp13w5yc",
  "key25": "35ynbbqerZctrC8maiCizgEkNqNspFggAFKGMW6KKg6AJFqwFGSAkSkFu6X2CaGAWGEepoP7yyYtRT3Xe7jte4hW",
  "key26": "4kG2SZzaoFUHnY1z3Tb3RG5V9fPgCMrBFnWJoV2H3MdZ2RNM8rNNhaEzrk94bRZ8QfaEnXWaG5mZzHmbbqAoKKzY",
  "key27": "4c5J34ezrsujnW52ocoG4zNYW4JGpdXHPwGfqXbrBsV6NSb4ujXxTyJUoq8T5xTzgLRURHeHKbyu9cx89oBfxSmM",
  "key28": "69YPmGr9W9Q4TXMgbvcS7DsaaMjcRKbzVZoMSAggsCj7yJxcD9z8mFRArfGoqSosB6mZqYi31N5XRtAxHoogWHZ",
  "key29": "4MNt29iXVRaMo8nnX3FbxqVgcxd4msbTdU1v6b9Zmp8FXBW5uSzUUUnFuqBosVDFcipW9KKCxaL6qsngSZQwsJM3",
  "key30": "4hTtADejFrkA7j6BjhLqkM689U9D3VYSs5Vc6SeadtVsmPZ16tdQJgTiB94Q5AMLz8PC3j7X5SVv2mkw7urTS89E",
  "key31": "3gbsTL2JMrfVzPXovADG333VwDZA5G8fokS4TZK99ygDf1jF1pNYNUGaqYjVP7VBCW4n5taP5rJavUuzRKCipGmL",
  "key32": "5FbX8uDDmRwzFUDEUjCnYDshq4VsjRpFaxELTJXWxnMuct8FR4cgitiVVbvniH6W3y5GSku6zZbM9eNeaii8aScq",
  "key33": "4pZo4mt3YwaPGDhzgMJR4T5kg8j5KCTzUMnjtw6r3QtRT6wNvScqGLpzQdgGgFyysKqTivoPakvyd17YPLJtxtTA",
  "key34": "5PscgxJhPKAqhkUQBjXV7EQtghafYtW78vJsKsHmTu6UkeH1gFdf3fiJaaVP44eFhgDPDkCWzh4NVEe3EMcaXYgx",
  "key35": "5TnsiAgoF45pkdKdsMfAk5wCfxMSvBrcb3iC8SDKTop5Ru4eK8b8PXHjFmQVN2qk4GceFVdAR2bMGWbwVJDy58Hz",
  "key36": "f5EuSDvmKLDGBZR8qoetMRgogezvRW1MD4kAEPdNKejefTpoN53HZBiAXmseqoihgFCuuZk6BwfFf38fdtT6b2R",
  "key37": "4qysbRXEwpxrL9S1ckm963tRq9DxrJc2zzZa7spVMTYgj1YLMb6VDuUfK8MFzbdE3tGXDjrn2n4SvnuyJ9Kb47wQ",
  "key38": "3RYjNqKSVrh2PJED6y2dbPG3wZHQ6TeWeKsZ92AvDayMYoM5Vz3RrY5aNUVDNQmEok28GRuxMmV5gH8mpt8x5ESb",
  "key39": "42UEQzBamTv7xSASQS9F2ZqdoW6szqRqy8REmEU9dgdjCdHeMjHnjfVUB6kEXXg62YgqhipdpA9wyPSPogMjcZYu",
  "key40": "5Z2qL3rmpDNGvEJcaPXNVzw3omgqux2WYFF6ghYNfk7CgoUNnF8hNAP1aVwg4XyedADsgBGaEsczs5akx8DsrJTe",
  "key41": "UgYreGX39pj7LGWb82B1C3T7BgEg9yx51YrWiayyVz473mH9rw7ysD2fVx2huoTM4zER6gFYQH5R9AjThogZVHj",
  "key42": "ckLwvQ7L3RSnQFMh1qnCub3D1xFgYzyxNBiFUQfGCiRzuWBtbQabgSi9KTiLmdP3vXvUWp3P8oL8DkC6RNvsWmu",
  "key43": "2s8wEnBQo4yZpC27Em9oRetPKaWFsCtngC7qFV4u1KLiiJMVkh87ULZBZEGsR6suB341XDTbueFngcvErUfG25VX",
  "key44": "2oqv9mtW6ML4aE4Zp5A2AdwFxFPRgQPswsiBfQjBZeEff6VdpdXMBuY3E7z9XznQYHkb9LCTQHVtxNZAQArRsLU7",
  "key45": "2zjww92yuc9fz5SAs47ucvQ3FYJmCxJNRaJ7BbzvcLa2TZtCsuk9sCAJmU9Efmz3fknDKAacQq3pcKmnRdakzhZu",
  "key46": "49CC7iABV31LUz7wZLqiajEDh8W2HxxHpVsKAv9i6ECbQqBTH9DSxM35oHAEqjiFovKNDAkM58MMETjkE4Gpi2PY",
  "key47": "L3LpmBH3XHxoPR6YQqid1s6JGGbp52mewqkFPhUP7WZ7wG5B7fGUFRPADbdZ1qUBE2yteH2XjygrA5iaHbDpGHz",
  "key48": "2q1sDzRGmVJeBCWFBLCzHKvASvjQvs5sXjJm443AY1dShkLJPwwxt2wjV2pqFfpTaaVQnpKfo2xuiXkisV5abuAv",
  "key49": "3DZJeDJT27hfSKj8HgfUbgMW2aN88gDBVSgbnv1gyEBnHQV7z78Qzk3BLo9ptYCZB73Kq75kGjsuf685wMkEEHzb"
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
