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
    "zwpXPxTgKLtAJxhfUJJioMs2mnHSexn3etLPB8B6cSZjBcRDujBkwzvWxj85Xx7afB7g3oZEyDoJVbCMLerHe2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xg1uuyvzaDc2T9rVTfNxY79Qn1M7uX2H7C4f6PGo4crMQdQCpkpiWqmYoyzEiJUwNR8ey8AFG5KnKCHPz7NFme9",
  "key1": "52oQ5yZViVpqmwtn9mv7HocvCfJHZtiuH4NAQ6cn2wiEvp7UxZBH5uyZsEPtJUzjDv43k38Jgb9vvCuNhpjLzAB",
  "key2": "2ELVk4iZ5RAWP5bwjsvYcE4gH775j7pM5u6D5uWpmTGKKYC5sZin2uh1QKJYyFRypMAvNn2DPPVPYUieY8McnLqn",
  "key3": "5qsrsES6GUJ5y87HKEoZgvpmXwvQFq3y2wvYZx694fZ1tho1aDxcpugfZWdLW2DdVxws88M51kxcTEauhwyZEiPA",
  "key4": "2rzw4LrPtq5JyFh9CKrXNMhv22Znftn8aHzsjHPEXzG4a9SQeEHj7BNUcj9zf7DTueFMyHZsfasrHLKuV19pJAGD",
  "key5": "HHLkJkp4gEAAhb4F1UPv2WGBPU6Ebum7gV5LeCH9AkEP7K2cK9a7wKb9bU9FEHUpvasKYBQNkqKYthnKKYVNtHz",
  "key6": "ik2RiCiumTf6MrS1UTGUonrivRK6FUcMmsM4D4kX7478ct4UCJ2ewztCE6xqQxFJ3SxWgLeTuCw1zZemVJMV6LJ",
  "key7": "4LE64UiDbC71PtWxYSrNaH9qdiTLjfmsvjYBB2vdZZyvPnSgjEqBcxe3cbqsqw2qFB5pVmY1dTZXDHtjuWZzEZNd",
  "key8": "46ZnBhdRkzweaNBLRwvKayhgPUNX62h33U1Ucd2UUHi33yxL3LUoa8NucNePAVYme8prh1KgVdNEB6m1KxfsQWBW",
  "key9": "AYwt5Q2kdy7x4p5iLMHUyRZAAs6sB93vHDeV1hh18TB4xHgtsUkCUSmxGHkjNHpqkwJJuMkYhy7FDtQq1qUBrVd",
  "key10": "NbHJ8KTLhzrgBTkb6BPd52ihRdKgEwdYMrt6zoAWehcowCMZ8MdRpsQz4RexJ8DKxv1VT5ZnRVwoZmLz5K9FEMx",
  "key11": "2f96buqsYEXJ6bw5FwtC5cQNSkVQY85wkAoEYJe8nZac7dkhzMEmaqEsCek3zv6pnuT6ZAdkkMkJAmT4yTKLmj7S",
  "key12": "2hWnHDPPvq7HozkmgNo3EvM1AioDenDfi7DW7ndRer4srqNM1RhBHPq6aiEGmeQByHefRQWr6F25JU9y2ePTK4u7",
  "key13": "5x4r5vNMssUhdKqp5g22K7wro82Vseuyz5R5eBWrx255UBXnf5uBep4qs9bsKNKtopcfYKGr8djKTSchwUkkNJWf",
  "key14": "2uwrSY4BgwaBkvWpH9gSuZFDLUXRMugptZdj6AJ7ASncuYyfNWHufXM9VFus9z4i6GpXzjkqzr9CYiKNm8LXNCRc",
  "key15": "4rwcFeiv39E8xvLx18hkk6dqCMvPvFH1Cow5FQy7HDp8QUVRGCZMKNSXFuNSi2RHeLAVA4YLAnrvdC4X3gf6DgYu",
  "key16": "24zd556H7E824bpZ3i5E1SHz4G7YjNboZEVbgkNEdmswZQnFxoqSYGPbkYA2rhM5jf692hrb2dS3yqHu9rwZro1A",
  "key17": "4PVH2dX9zKJkHdKLgXMCcrVznQQQQr7czmtaudbjjzV25pU1jRktNLobExjE926casq246hUBE36LugpQPbX3MvB",
  "key18": "4hBLW64moApNDUvnMqrbyJF6q9LJn1GmuwxyhCdZRtp261LGR3pZnAqTuMhC41rS1b6qkv6hnCANtSGFHrPzdUPx",
  "key19": "4NybegnVV1Pciyg9VZx3rRxAvDFKvyfkwxZd63VZYi9a7ndaU1LgGeLWZZXLyoL2H69jusrhDCk1zuGjGooEV5zi",
  "key20": "3BwhL3sknhK1rdcydv93CxdaaeoEuDxqsGY2zUbdiLe3narTNsQKMVtLiiNZUJsrSNnqRoKR1oTpzjknny3tXNEo",
  "key21": "4M1NWBwVF7jZsPYC61viFX5QiMe1gkB91NtoMgNoZ8YDmJZqWdchbhApCDmfwf4JRnUrXJ9HG2DMYqt1cg2RqQRL",
  "key22": "4vWKhtTxbGy6nf3Q4PCqPA4gbfmcGMqu9LpHkhfQE9gFZ1utL8pvuSsvAFLEaHe22NY7WFZdpCJsr6YM2qhrqvQa",
  "key23": "jAr7CEyKBh75jsChHah9podgUhdHJBfCLENAdCNbszxZVjF5SNGvnw7myAngvTzra4vsHaho7iMYyMgGmX37oqw",
  "key24": "4s4RMPAvfyUb7WLraMX4bUg6taAFqaqjboCYkgUTH8ASGPHiNoqLvv3sKEWYsqPTsMTe6EVXWXAEcLEdnLYMSHnV",
  "key25": "3hTw2stVmgNHxeoRnmMkVSyi8ZgPgTo25fEDaCcVsn9GPEDvqoRJnfHxZHTaiDnPurnj7sSdxsPHtoM8hsxeKiHj",
  "key26": "59eS2at5ePZtf2BiucpATABuzWZoCcPgMuNmUv3iKQYfihxFLG3JEcsg6GZ9gBNqmonfDfdW4KBw85x6uiFkVzVC",
  "key27": "41j4CPwdg2CWmww9FnvSjRkycDVKzYQn1Mi5N1c59cikLDHxFCCPSuGavJBfgfwzzvRGeR4HARZqEe5enZNGW7v8",
  "key28": "4sXAp53xaiMjH9m2uEwbaugU9t9b8y98G8mQmBCyZexQoPwhzfdqiNYcneksjcDXMSG1p4E7NACz7HJAX34amAC6",
  "key29": "34DDyXhyVUucif9zKGWLYdwUfKoQugLnpfRg4e7csJf8h8359nDdMLzjkzumXtukLKq4zbvMJh57drZsLgDGExfz",
  "key30": "4uw53q8PsanwAk5CiR4aF4WG8edyYWpaZ3XMbPUUmCNwJjf95RPusuuxP4a1WWW4pSJA9h4jbmrEAcmgkmmneLHY",
  "key31": "2pRTy3kA27bohPn3vBriVgcFJi4raVxA2oEXJSe1UnVRP8BeY6ihpEXBjy8x6KNxajNNpDzamMFhrCuwN3qNgpbb",
  "key32": "uz3Ydi3nrCdnggUiuUMGaeHB2fyPJcF99yhn1JsfF9R9ZD6gPJVLYGYjKVDFrXjzKuvMK5Y5j73UJCCbQmo81TC",
  "key33": "5MRTNaLG5NvKJWdsVrBGb73qFFt1E4gA9V4F6jrbkzviyhK5VTccB3xhxb4Bzi4UyZh9xEfT8HhEUZcs5Y1P3MKv",
  "key34": "3xgXPkEtTU5gsJ9LgEN8rR5oLUefYMbEifcE75UoAePqkfarMhiauTwxyRE62UbiT5ra9asWhPBUTQSKnPTGJKrj",
  "key35": "4foyowzwREsd3J6qKXheNK7eqnrFWvKFFVQNX1uRauRR311uN5untCCtqhxBFhvxGcwZkcpeaYvY2xn8DWHxbB5D",
  "key36": "g1FxNAMVe2Rfx38sKB1uddFuXUWL5eWL5NHa2KtAP6e6Ed7WzCAqFry2T7SoayzhQcuuHE64EjzuRfZ3AXhjfS4",
  "key37": "3kQZHBPhsqK887KKYKf9bddWS4iQq6TVcPESUThEqD7kv1uvXuvG8WovTzP2zSv2VmebbAoTCVWwZ4fJQWKRG9ce",
  "key38": "CWitcJ5LAWbVo6HgZBKzjrif3JWjeUWUzFkEmEDeeteJy3LrxEFbCiw7iucHWsJYFKR16SsBi7HkEyE5J3Vw1s7",
  "key39": "52Wz55toWPi4xUAiqaUH5CC6tAu29GeCz8mAXvwCKdNEmf4BacJyuisHgBrGwHHD18U5jeYiygvrrb42hX45cGkt",
  "key40": "trQrFmD7529YavaQPppYqWom7WCUVpJuZVBhh98kyYQab1FUscQNo4qogyGSC9xaUQXtgU1YBkmv4NrEctFSMm8",
  "key41": "3nQiLZQcxhc5EXHLt1xLzrAHBH8QbrQvtrjq19cFt7ssdhn2PZHxYN5eDeosaR1jxv4cfcSRRN8fb51qXDEnAJRP",
  "key42": "Ec8Pz2eUrkzCHtd6aH6cLiZLYL4ciFJU9Ubg5irdm7J8132DxJPD7pFEb8fhdMThpzB8bXtRoobeX7KUxLgjrE6"
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
