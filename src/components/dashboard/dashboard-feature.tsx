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
    "3x2mkRi5m11WCB3qvg5rs7d9LUcKXrRsW5ai7r3CtoS7y5iHBggFRecJhjJKgSC87tkwv8NJiYZMoM4zwhciCJP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3842BEvLi7RN1o6w2QB9AohEAP1NzHCJJ8pAtv57iNorzK7o3hDVmFmG4qm5i8FuvRRPDnbZZsYyo1V24DPGXMmV",
  "key1": "4YvP7uieNUeweuquzZjzxjPKXhNE9BYKUivJGn3Tmdu8gq4MTrRLq1jFwEn78efviX4s1V2SemaGqrUVHtFPQFgp",
  "key2": "3oymmmvCW6fJJ54DBe51djr8kJRTAXgdxxKUjed4KtiAEUvoop85dBT7o1QnezVsZ1FriixQMMxabUz9fz9AtkG8",
  "key3": "NkGRQr4m7kzTgt4SXQp8fsH6THLXSz6mSpeHChiLtssEFHG42q5S96Sw2ghnUMXMvX3Q7CY4WskPuyL6zMhRZgs",
  "key4": "4xV2xvCX4iWrKYRZjeABsz23gBaxChvgNa5Pi3vJbQ7ESWEazQVKMWYuVf3pTMRz5xVoDLSX5hGAn442kdJ4o5Zt",
  "key5": "3CmMZthpBZGdoRXx1QyvthJ4KsBo1c4KduZfqLpviST5utrG7EjgSNm4sHzm4KTMKsCMcRGpQyGjVkpjw4cop5k7",
  "key6": "52WEJzoYkNa2nf7Gh2nujEeZg2s7kfT7cycgdSrj95fsYJjVbAT7mwcGNjp8Ps4afQPLvyyJ6jyKqCBfjLGq7mia",
  "key7": "55TuV8GTDZ1qtvtwokccDnees6ju5PvNSW2YDRENKBpezDHq7ZCXibnn1vry1muS8uBZBfHZxWVf3rnadXZajvFt",
  "key8": "ChUYQb742VjQbrh4wUm6jtu1dADYJeuHQPHPdvUVF3MmwZN6cBQx3A7K6b1RGJruEabWv38fP4skpEE3ZFzQK34",
  "key9": "3UV6FNvY4rcSqWJf71mDupFDD1H4TDmhFNMPntjaZkhBftchh9drtd9Zs22go8yKtT1BvnGJ7zXucJAzDM9koJTX",
  "key10": "oPDdmMER9R3hZ6i7wMyKqfguFHSe1z8FUpcpivCP2isd2VrBrHxJAyJz2tHsqRMJdTFkXizFnvLTJ6Jk8AsJyqM",
  "key11": "5ADty2QQB9kzHHDf6iTdqZQZJ4cypDLxQ1v4QL3sZFwhXKppDLTLjEGPeuL737c2j8fxDbzHcMfNicgqeNwtTrBX",
  "key12": "2aEMnMvLPvKBi2V632tsMEUxwVt4S2ytkFy3ytGe9mUp3uojMf22YCJmmq5TCv2iE4rnxgrHRtjxc1V8sFFMHFKv",
  "key13": "49iYZKL4peddUDHwQGTExGWnvNC9Bke93SorcwACtW1gv4XHhswig917FjhujoTjVwhdosYcpJHRWLR2bbk1RtkM",
  "key14": "475SgiyGzzeo2hs6sRvNZkg5hdnSmaH2GB1Dbz58e4YTW15MHv4KMx5kPfNbKrgngyCcpHYwYgc2Se7ZZwSQjg9a",
  "key15": "YeBndfdzwQK32GTAoRzQ5iufbBp1vwjwNTibeDtnyZFcngbyfEoNcbtHbjeNUrSEctzbrq5g94edHbfkSW2htM4",
  "key16": "2Nj5tV8xb4aVFpZ4gaQNuEVBQpWkzjjMQ8cJT62vf4jDpCWiTsPp4hZnbnJz7s8qEAS8RyVC59txxxBnxeDRNkse",
  "key17": "YwHJ5U69gRCyiY1uL6vKPGDtsJmwfaLB7hfwc4ZhRXdKb3AHaAxkAdxLc9UYHrDHe1Cabqe9ehQhkYLUSbAqEq9",
  "key18": "3mrSH3BrvUcGA18TTReRiZphSDfzSiS1iVfxXYovJVNkFVCnW3JYZFyepqQtoJXsp8JGkqdGN2muLWm5coZ52hQo",
  "key19": "4t1bVsfMCr4cWHSsT81AbzmpzDDtLxSC5uFpGDroeK6B2MYVBBhuDGJcVUvs8sWSmAksY5PSMKNcQnaQwpySPBFV",
  "key20": "2AbCQnrfDQ5e5cof2ZQX9nvqDz86JGxcFpsjJSDCjwdPSEZ6LH5gGtfJ3BMFSiLH212BpiwMspEdq4WXNZ5iukk3",
  "key21": "2PVsg9mUAN5iBDCzsayiJKnf7P4GaieyMZ1kWFJ2Amx5oeYDp8mVeDqUS5kmbrGMXjpkF6ZAWPWk5ZEfeGk3TNnT",
  "key22": "PvFwruJVjF45QzoHYnzJaCSrGUwkdzGAtUaVRUWTCP5QBs7MEpfWgknDGZJepY4g8B6oDY3JgsfCDHEULerXHEP",
  "key23": "4K6Scd1EVKACW8x1yx3urNPLEoLpRkghkraxK1k2j25yvPZE2znZCdEPdxwrxBLBpXvaD4FKBuT47HgFUKG11gBW",
  "key24": "3nJTDpXW7aY9kQNZrksCW2PEbfBE3D3TajUoXkUpGJE7LDnT865hhqzcjFDnF3gAPaznng9qcumsPKQ3VXUddTBU",
  "key25": "65qUW9U3TP5V3sX6iM7GE2EpnbLNzFVCQdMLgKb5X69cxpFWgS5cfQvYvsfYBn4GozrngyWgEb3CoVAiX4iKdhCo",
  "key26": "28nYdTAUFKDToeAqXaeotK6haQB3A8iQqyQR7FDHmwmYYqzqwRN6PTHa5sm36oiDoFE5DNfjPrDWiunVb3BLoJpS",
  "key27": "5SAZBSZvd2NS6ekynCZy1HkzZYiRRSW6MjFSVKVWeGm9HmG7G8Ga82NVRfd4cZ7vmLribmY2QBad8hgqPFncmhnL",
  "key28": "ijaJtNZnViUsTb9sFhuWRhJCFcaXjXBnchgcQJDuhMg8RZsbTXzHXin81zZNFvovudN1iY4QUy61P1Mpjrt6qRe",
  "key29": "SSfGt2cGpPuviJWRqxqPNuEkw7wVzTeRdP8LFLFPCbxexFkeN2o7QUfr7R6Zb8Bci4vtJDAoetcFHwRrNhfh19b",
  "key30": "BJP8Qr7K3HmM8kaqc6trmkAp8CwRY1gz8QHiLZnS2UiP5d9mTNeahxCHXFwTKt7K42zTxNPMrAxR9bCaJhKohvt",
  "key31": "3JkYHLNUA1eF8eUEmgszurBZ3SLrecv7JXhuCGM5AF7VNZcnHrQywDCKQ4hYNgM6q9PKgHmHRPMdhUheFzvvGixF",
  "key32": "r4iSaVypxDRzHWYPS8HMkBEKyHEbCzL7u4BrD1Qnvud1fcG497MsMmiHG344cYiFYjacKTtNJpTyesu7kGZG1E3",
  "key33": "4EPdqqXZp9EXy6gLXhpqSdZ98YQyXHKz747x4yskFsGgoS8V53bw7M3W6rAQE14sGX3EGV2k5DMaHUqMoPKaqBiD",
  "key34": "3Wahd4iBm5gMsLs8fKfdb2XvzCX9LaebhGAyd84HaxaayRquQoE9b3mBYj1r999XMgHtJuftQ5LUMLPDiisyUs5h"
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
