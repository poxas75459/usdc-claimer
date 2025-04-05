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
    "2PQjNAvGLjmXhNZgF41pXrsEL47B8FFmayRDXc5UjCDxiZ6EtAsF3DhKFRYPqYxFbKU31ELADBLj2keAprUc7UqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWeeHQnCUbUSs4N5T63LF8ytVx6cfHPJCuvHic7QFXUQEtfRN7grpRTQUuF4f3BCXSaJMz3zuJsJXoZRtL1zyte",
  "key1": "37Wj5nnBNPj96itgrbtBEZJLGounXZVC3grrdhndPJZMmCQY9kXfD1vgZ5r9jSckv24kQNjV3cNGoTmcziatfYQD",
  "key2": "2LgXmCEi9oAr1uKUm2gAeZAyGkuUdcKPxDVUw2brnVisyLrv6RgYXcuMpheJAVraoiKS6AbR9dQGj1N2fkPWgoTc",
  "key3": "2GQnteScDkjNq3fURbexPNDevx89diQJB7Bwvp2r2QkXLBMNLHRUSEYTSi6J414xyxi6Ys72TArWy6hQcoZHWk7X",
  "key4": "5zvRq2kdVxgs87stzJ71iXUYiJ9n55vv5XSKZsAnE73jZuEfZuzqshKVnZ62qiaFZRcYwTW4zfaWeUZSsV1BxpN8",
  "key5": "3NzSMgQCHQLZwfLHsH49DJ2cCHS9oD5GDUBjKPWhUeELtBcsANYUohixYfM5A985EgbinxL8wmd8bKPXSaUo9r2R",
  "key6": "2H6CcscKV4n88RDCxqAEepkXtz6ynawfcSBC7H3zYP1cM1V5FaJGPMUZ2WBUVBu8Ed5uNvi6G5TaFb3mjkWgrdJf",
  "key7": "5hApDA5iMvjrkhHNwJpje7ysPa7HRpRgFC6Bdwpuqcs8dep3eHy3D4ba4m1gruCXW4WpFc5K5yGGnTjWr6UGCwWf",
  "key8": "3Rf2BeHgDAPdG3AMT8zf3uBLCWcLsz8prFhD1DMtNBdz5aYaUyP1kprAsFFM6uoyCFY197Wi38uPSvA6zzxX4MvW",
  "key9": "2skvKSPCfvfiGUdr6DGXMtdQ5EYN4pCDURe6DE2UQinf2keG8BhtXEPjyzNstXCNYe6DmMdDLwPbgF7QZyDLQRxN",
  "key10": "36Z5gFQHN2YrbaShhbAuLq4QsVenDpe9Q2ikFufxiPHxkBWwrG4HpeWfFJbm6BzT4VVtk7Py8MDWKL7ZFhoyd82L",
  "key11": "4AqBCxUmKrJSMw4wRXv5qir19UwRmmhuYNFc1QuoWq8WFuMhqcUy7hL8Lr5wgyAPfvaPBx2HPW7Efhx3JhyGuMJi",
  "key12": "4PzBisB4NZ5XXZeXivgYuvwmkMBboJRKvUhmFWTdoxjSdUqU3qr9kdDaV9fP2JHaBkgLwpFNK6sjZanKvMHLMUNp",
  "key13": "5igBUyWkEe1ErPmCqFzAnRKi9EamGuPoJ9hGpAbUuJmDS6jpPnMF5SkWbzFWUEvLDQBygR1jUAtiHJYTuNgrZ7xk",
  "key14": "5ZpKVD7HvvUhkDWpf7shtkyAXmkMLigrnbSyzDzHQYKjQ18TnLmJUgy5C2x4onbKrpA7V1QAfue48nZyfMScZEiS",
  "key15": "3HpTuEGrmuiWFAC6uvkNkRLCUwzt76S1BQD5zuBT1nd7s1KYngDUS9xXGKdoVZCYoayUVFC5Y6vY4KHj4mYUEcFA",
  "key16": "4NaMTjEYbhBCagrxmA5MbkUCfYjem2m38YSxVKJAdh9E3bRErMUWbpPsS7kGwfhqH2eDtMjVF94xTkE6y2rjNai4",
  "key17": "5mq7eP9oL1h4YczEp9nSSqEFLbdhxqNTCGEybjJ9DUQdDPqawp4di81tTiY87fTcheiGKSbnonv7ksqdqwtEwhtT",
  "key18": "oxia8WsvZXsMLS8kM1zPPLPRn6n8rCp2MKboR9NdmYNL4FjQFkmi9gJD3Kwivopy3TD9Qt2HMwrSLfPXCXa2Fku",
  "key19": "663zdVrEBLn8ahcL3uBMk8ET72kpjdi1dK3ZeLdjxvhuobajGLFgSiCxtPxyj1m4Af2gK8fwtgtZW4i5wv2YMjRq",
  "key20": "3kZ9PQh439Wg5H7sJb7QM4cpVgo4NCkyGz8k1ytceMsHQ4a19eoGWgcxWjDHWvUvtRvEc219m3zCbKXWYy1iE2J8",
  "key21": "4RxznuJa3UrqBDsfJAh33zk2pMikDRzv1mbVyv8C6dwEnsZ9rxoUzmwjtgPhKfcXiCKXADUXUfjph5RSCW8wBY1i",
  "key22": "51PwGXg5BxmAMCZhBjsZSYhVrbW5ctq4twmjqHfaGJThPHBBWVFwiYBydoLtTpnrNBkPt9fSqeSRohgyx9M7diMo",
  "key23": "2YBVpp4yjoqHkeQWydnERB7bisHQiNzTo94vWMUwYivVWGxFVzME4sxFair4efaJb1S1aboMEdRfYrMQoxmfbSGe",
  "key24": "32F73Ub1tBWQCshCWj8uY7o2NUhq5mqn26U7EY4c73WeHnKjRh2LXcdtgYsFmgZNGhCWQRcFfhjnzxA4SmVqsVeJ",
  "key25": "2HLprnbSmeY8xuX121Rg8Wdc8qAtZ5wFpP9d3Hdwkt4oph4Dud74dB5sdJeBfdaSabk6e5PTzR7ABm8VkVKtEBjL",
  "key26": "3WePBSn2wJg66zF7HCq4SEPm4fr4ZmUGxWSTSFszR5ovDiZc1342JJGpfZRcqqfDEraFFX8yR5MyqgZESzgB28Bz",
  "key27": "aLj8XrGanhGbZmrkefjm9DfrdGEkUSSKGDhD7sDNPPtN73wgnpVdq9beixEZBisWoQnpvLjCxvWvj4DuNPu54o1"
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
