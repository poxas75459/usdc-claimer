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
    "KmfCJELEAD4PRA9ZdLeuBX81yN8YT4cSsDNB9NJoih3YVR3CL1oHd1fUnta6gwdziuK1dknpZYcrR8uYhWDCZ5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xFpMba41BEAv9ZAbc2Hw5pu3AgpXrJSZ39YRDmnM38nvekQqEQ93MgY6vcizAqpwKENuAeR6UkVELzQ79ZyW4qk",
  "key1": "HYFawK1zYwuLKPFKa6KrceFBBBsww8PZq7YvaGDxq4Thpzub1ZQ82XVsQGp7DpTJRCG3CaVawY6m2RQWQjjCeKd",
  "key2": "4SJ9CZPqovcERkTzFA2YazwELpr2HFcPYARWewNZEX5zimkucYDrCi9ntAfTjgF8J1sSQzBk2NS3Arnvg41wdoYM",
  "key3": "5kTys5bKiweWnkW5yftkxgkndK3LyLK7cvTdyTx2TAGaHgovK5tkWfD6rqZmvxtZR4U3gLUn1ihYJKNKfyL71W4f",
  "key4": "27nUgzc5Sipa4Dv9fKBGGXY92MusgT4DF93tbGzXMwp5faRx1UYEtBatj4ayA3rxREwZXrpCqibRJNy7MeAzNZfm",
  "key5": "61AsVSWYwXFm7dMfG4x12NddeFLPJJ7iSAFBqJsYygjxAWBgGLEFdCMFkLKh1dCc5g3XvKTrjJcARbtGrnNxiKx1",
  "key6": "5xQcEEGwk97Wk135aandwV65xZU6wpgZGrwng4a3ShY1Q4RJHRVTmukyQGdLcxmirTefJYhp4cKq7BDxTAo2TsUd",
  "key7": "3XdTScztV8f3HtDYycecHohiupyJvBWFBmoVUghfiB7iAJ4RTJoL65u8HnCSyZ8jDYCNvqsgnjtusNcvJcp7xrz6",
  "key8": "9Xdd5LLhv6KSPHPnP532zaPkxidBmjDXsHjVKg15UUG6vuQ2y6eJghsbanezs2PWiQbYQLwfxzernntpjMMmkhv",
  "key9": "wkcHbYfJJ1PNDME8NaCk496sWq9y2gk4oBqjRGarTJu9TmhjQTMKRjYxJ3c9kM2ajwFFmUeLA71bEBv5ntjsjbW",
  "key10": "5CRKpivLWeb8TW2USymHhVKiNPE8BEofxKUTX9RaJG2zPWhbVr13pAhQDfJ2kgnz1b2GkhzqTWnwmH5EVRALT6h8",
  "key11": "3MpoRwMFy1Q8hCJaqas7bh2nbCbAKBJJB3s4gdPZZB4EK1Pk4UqiYHAxEigh5Cd89d8Ei1FwSti4VizT1mxaK4HW",
  "key12": "3VuayTcXn5YvFroQpQYgf8ax2n7tg1M7d8PWr3Xvg9LNqCD7GTgN2PFG9mcd2wDfCQj2u7VehvUEXYJDBeQdcKfT",
  "key13": "S9rj9BKTpTNKEZ2gmboiVED3UxxoyqFXF44CfsvZTS1YXWwe71iKgezobJBorCEMtAe5HxMCahEkAWBum5mva4o",
  "key14": "6fRTfL7K2YaJBkLJNzoUC46Jh67SZ8dgbZEG13oeCRyUJAE7gM2xsB6Auc4ErN4DNnaTyZ5JAmEAxqwtRAdTogt",
  "key15": "2jxzUcC9jynbh6vx3PEtiknANgzXB4RqNytgxX4bSYjmyMRvw51tKGmLByNTycP4UX9EJ1hKwxrJdwS8614aPijS",
  "key16": "3qqyMGmo87QMeUkJ4DSETxZMYNxtbCksKYcZUpwbvtWftktGoG9W2fLZmoNiSoCwDWdrttgAmioZA5Ab3ShrKN1f",
  "key17": "5X1yV6ifGxKjja6xC6xwkexzpwurCenH7FyneaQBjZ3Tz7CdJyiE9Qwt25CRvfp26FntzenWFMCRoErErcYRaktV",
  "key18": "34NX24A4Kfkif8o3VHbzikvvp9Dac4uZALwVsqwaNjM5ukAXMJ7hv7yWdxuJEr3FERoYvzJBJ6UiWEQRci1FSNU1",
  "key19": "4CR9kiEKZCRzfU4W4qHJ6qjcmUUPT1TERxruxTTer2Y7gStpWGaVqvGJs4AbGuCxW5EUuoWPBdzopuZoZEGQKDYE",
  "key20": "76URU4msp5PhtCPNUN18BH6uUi9yjR7g441NcosfthDcWbPmxwBAy2WinUDHXvv1syJSEojQZtricb1KcERAaR2",
  "key21": "5AYxRZ28iAZUfUQbCSmCtce6moSE9mFAWUZnhfszwbgZ7nZPSt78xwQcSxQsEfpfHpxeiyfqTpP3NNLPxBHnkhKd",
  "key22": "XCDZjU928gY33JokeqidftPaDVf4x46JzQfCewggW2skrowh3McNNdB9xYsv7H3i8ozgmuVJ4VFaqzecuVGi85F",
  "key23": "2BcEtADJPwihmvxdFTTHcvVuFnSPeEJEgfoYQj7wkwS5725kmir3nGo5zUp3mb7YWtNaH1MtSY2UQSnWKEisP4HA",
  "key24": "4UqXpwxd1VbGqesK4bsNj4XG3tT4UYXWdit3uJLYYMk7z81Coj5MnNU7YQUhCECtadSqkRrQ9GFE32AiB75WMrGZ",
  "key25": "5TN2kjWWyinwqhk6AYSEJcx7Xfie99fB4qiJdjzAtB6YUP8hZQ7Si876FPEs8ohaqpxRp4X66MDo7Emua6cJuQiT",
  "key26": "5hmi2MCTx5Cbu4LwNT5VuQrftxFjbE8GC2EeJf6SoAiv3TsdLhe6PvkWceHJrqT8WzLAFwPJhAxPTgo4gHj7mgTf",
  "key27": "44VBQZ7vXFEyioF1dJxagNyFfhuREkpNHCt4WF9qddXTHiiSc6vJeAx9GRL4c6jqR81sBRBGyZs3k3wn3AmJqou2",
  "key28": "4ov4Ch2CY9p9jhn7DxqwJ2hRPjQrYm3BDMeFYSCuDrv4CbntGb6TwNDHB93TNRkmxAy2E4B8Fyu6RrxLNnij1KJg",
  "key29": "3aGxNSfRjFzXKHjdNqy4sHeYQu7oqm2rUNNHnMb3Zg62QLEL1m8MD9oc4ErA9JUgyHrDQ2T4Rwv1e7vgA7SySmPm",
  "key30": "37BMgHu4YeBmngo3FRWBjLT6ycDc47TNGcSWbbmwhghTYCQEc4quB33tUSDmX19wADFXm813WSaLgLuRM7hP1W1s",
  "key31": "5eGsbH8aEv29vDQcouN75ded6Actnm4WdtNa5p8VnBSWbKQwkmwC6e4WPMk2Lih8uBpdr6N8ag9Bo7vcFtrHCEqd",
  "key32": "4bTiYWKeJtHaJLSdBKr4CpsyApKcjYaE38tyfz23Zd5vvh2Fq49uCon4g4gMhjPq9DUXBw3TsHKb4sggzktPuY3L",
  "key33": "2HHWhiSYpuLkC7tLerQTNWVdFNZwpeB6qsr2Uw2ojhHBKZG6bj6kib3pBNRGo2X25eMgSQF4cDgw3xSP49waAWwE",
  "key34": "64eVRXp2WT9S4D5tpr7TveJK6qVchqZVFVX9NEGTWdAXjRaDo6KCHHnEDkKkzxb1jWUWc4q2cFmjLt6a8HYBs4rE",
  "key35": "3LkNjDE1ikKGHHfec8hQ58tLfDgAAkBtHJsLsGCgFrfbqGZXCKVoTeBcM5t8AMMATvCE3JEnHPdvgmkyhSbecniE",
  "key36": "56NXqkbGbZ1fHzaefmB161oLpH7MSNESqssAtzMarYyN7zkozS1SEbdWE7EPNtR85VBPTn1ZcT5zUakfbfngRY1g",
  "key37": "3aKnenuJsbPnwtyQBpP8WigFjTQLCBqtS6p8Bd1MymNwtwLDFa1kCWBMRRjHY3U1UzgNyBfupvMoqhh1tcvybFMF",
  "key38": "4ACiu5Lp5EV52UaABpaCKz2RDAWwyYkUUQZ92EyC2gXhZZhcJbao7UF2dXu4FN5PiftKUWkDRDkWqiQMFTsSZzaC",
  "key39": "2nVTchzJRAmKrW4DffwFLgMnU7ipz3rZFRsCN8uXAtmoHZMkuac9H8DW2mkjh5qTBsucr7931oWw3UdA2N4wC8Qm",
  "key40": "iRNsGCVkMn9JeLFP4VNfS3oBkShtpsmvN5FajewYXeaDUt4wqexKex1813K2vSbgjAXNACktVPa9GZ4zCBHaJUw",
  "key41": "4KimmhuagjyJhKJmsQzhpXV43Chtrzm8QFT9nHcDFFGsNcbBBNqtHntbp8KX3vuscUBJg1hFbaCEKXwSFZRmYcLG"
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
