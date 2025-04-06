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
    "2m5RfTVNnyukajspHocgG2sXNixX9aa29yeGkrw7R2m8P8YxEUPy1rS3Bb1NFmkreBvDkaPPtrNVDcwS1HUdEmDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZj7mreNmu8gTjZMPpuAMas3cA2BJWRV2NNXhpLn8eamdUk3c4EUtEMjmN1FXvt6KFJqeFK5mYuMstmUephz13f",
  "key1": "3zWGxfTVGvNqjJuwj5gTJmneJNWZco8RgWSg2kGA48Pjeoi8NpsNagGw6Ts4yoSqx5GCQNgfH481sASojuvamKQM",
  "key2": "2SgCpqMFwDyysc9gcDmuXGuCTLPVWig9NQkrf99NNE1VCY349kFgU1pYmmpPs8kx7wK7T7tDrNSgeceXQffGgTCJ",
  "key3": "617Emr8ryeaBuwHq7Uk9y2QrsbumbWDbQhTHsWsRQykddJsZe2MbabFtavxRpmdF5TwxU39SyepLgDJCy5NUgGZa",
  "key4": "3npHYMZa2ZsJg3Y8boNt2CoUrSAK3S4yhYQxr7pc75tAEkKGUSBTJum2Y4dxk7Xbds7C7FociqSdyeXxd5guyvMG",
  "key5": "4HveQh7HqQETSruaxtNQ89eWVH4bNZcdBqrCgxREEhwoJTq3QdPAmWr3QPP9A8jkXDicLeH79bUB9YThrWfUKd3P",
  "key6": "611YtrLScg3rToKboJQDJiqBS9vLD89oJymDeTqf4tVVbCRTDHvg97XGC5GHiZFDEAYK5j42DFxRDEbHYhSDLEz1",
  "key7": "5iu9aBZ6mP36FYbA9zVNUNNsR6mff9GJ9Achc6JRvxJKSxMhHMJcWKBGn8whJ3LFZMpEDkhpMiRiRWrSyeaYEBp9",
  "key8": "V2tZ69wwYW2KPsv4WxUc8ddT3P2oZQhpCqm4egVum7rQTxDLat4zqqRjo2apyW7VX3i7c6gbzittcs4G6t1irva",
  "key9": "UzPJZ1o3dTkapirKiM4HXsz6BqNVMLQbW9hckmjMTod1tg4xWtgYHzazFtFqEKvKMZQQ9wstDd8pDGHmME7xR4g",
  "key10": "gYHz3HJ1ajDGEqRQ3epaUuNSAiSPXuGbT6Yt5dzt5UZkVeXymdeyG6xx7wHPeAqbeZ1JpJssRwhQDTTkQsgiWS3",
  "key11": "3iUvPoqCg7vUXnoXnaek7G13cwCb18AJ6DrqLJaTafPVzJ2ynB157Up3XsM9zjRY7E6wrvvhsiDDJUzpHTN8TK7E",
  "key12": "5s8gG25qJBDPgSK3RJSViWeTNxqkC7VcjhDD3fQ9EywCxv3bB2BCrFVMGJeJPigVw1efLNsvME2aGxreZmLRkEM",
  "key13": "4u4ptxSPth4UMYMw2jkbw7zAHn2LJZmCKNPpbubjke3TcJsVJLmxfzE65WZSFLpT3vJekgPMSGUc9bJW1AUeRTe7",
  "key14": "3GGShtsWaSmyRTek1mT7nh7dfJuo7UJqVpX2fvnvhvngYKbNBFrE6RsbT2ziG3trUsyzdCvgUjstAcPTTLxatvsY",
  "key15": "2BAWB6NL9JdQwS47jUgRqJnLEBcnigGpNjMsx8APPP2KahjMMfyvHWQHFFPtyJhcYteTgdZLxoaDhutb8XGXybFB",
  "key16": "3dh4YtEyUvR4VuJkSEAj4NmUcmX7Ytt3vTWWT9oEwqKbDD3XNwJYvNgUz7JuEvuy7s2pjqBet6y85T2FAdvKSWkb",
  "key17": "4zpErffqwe4ZxCE7sPRzxm7mYrHT4Mu1MktemCBXTT2hnZ4Nmzcr3UP5a5srN1xBQRJTpsX84aioSwPLejmfs8aV",
  "key18": "52J1uoLyBMayW3hYiqXQohHaCGe1rBd585y8EgNfShRUatpwm8XBZfrKXobcbrz55sUsqDcwAn33bNhXmTd2oi32",
  "key19": "5RZW5iR3GN6it4Ddnd75pNbp4x1vXzoQ8xFMAPLN5DMQuzxYghkjz2tFnzd17CRgxtw4fV44pwhZUJqx61yXfpUo",
  "key20": "3EYVmZGnBgD42Ho4JpDfKu12p8ocwcfp3FqHL4xMAkewzaWYQKVgXWWxZhabfGGjhZcZriGxXDkmTXViN2hrEh44",
  "key21": "5Ztn1Cvpc5GkTFCS8wusL4zFX9Dnf4vcAnhMKCvk5vSmYJAaaYBZ3ZWK3ikGgXRB1kXiBMURijrWL5AcZFM49ZDE",
  "key22": "65ymytWALZz2kPfPAJoDWRe1r6nhJnZokTjL4Ait4CjcqKHnLLFG7PLpBbqXFHxvzBdUeyJeD8zpxok7cKejWWWW",
  "key23": "4CWgyUn246FRZNnUbCX1cscLZ35L9Q1vN4MFEfbE76KRc7gmcj8aBMGfNeG15RF3LNMSTw33VZYC6aZ69VzrjK7X",
  "key24": "3cJyMQvwgurnKbGAM3L36fVW2guV1xzFgVFAp2uPhP5Kyicz1xXY6FfaKgeCxHAJ7ioq4hweuJfPiAiZykRGThiT",
  "key25": "5bRSPhYnDMbNLJ3pLuZ2cD9E1YviKSKqTJ4cNoPXzQb1tREouwzNx4toR71KoaT6WbErsG3ZjZB3nHMZF7YZC8Tb",
  "key26": "2ddkyYgq8h8JcjFcVBZiuJmBNyQhymV5gMuHPpRaMUQxY3NkX6EJSHQpEpXxcehsnTPESJkAfWHdJ3mGK5V4g3UA",
  "key27": "ckbCvfGS798oNnGuGZig9JRQ3cJUsn2pq52siJP4SNHprtWEhmFn5EWPa1WttZSKezQR4RxaBVoYkF3hcFhg95X",
  "key28": "2WpuYWDG5oeQU5Ue1tqi1LT2pZL4tWov4isxkYTAUiXkdtdj5UyGdWsvKUEKkZPDgNHMe5Mq3E5xTtCpw56ueZyb",
  "key29": "59L5qfWowHot1mqEvEEvtBku2RUejjnGHUowtyigveJ6wqK9zJNPv9skkqs2nSVeEVcTVAP4mguQoFYtvhh3PriL",
  "key30": "VhitQc3MT6j6XkKM746ATAyeisP12svGC1sYkcBjLUnFTzzz22LzcZFrsihZEfPR4b4HRxEKr8rP4BxFJiLb94g",
  "key31": "4vSv9ohq1cpaP1mMJY5BbJiSwoTwLGpiXDrWMkdHfrf5ANozgaGHCsi7bbbUJXG42W1h6Z99ZqyiHBECEbp65nZQ",
  "key32": "2pWnFDrC6V1du2NaXdhSS1TGLNgLBY3wctJ2tKivjJm5nJZBTfmxd3EL4bGjPB7tYQxPRNYsMZTr6trTK8Qr2hcw",
  "key33": "gtEQwNZVPtjBTjc25oBiu3jvYdGr9JWLLWWknztT4rcyvn9mz9d3n9rucugdVyzw1oADA3s3K5yfiXSFSAaDe3N",
  "key34": "47eDFUq1jMC6U7rqpS8hw35XekZcWPvmecNpizX8bMbr952aNBHf7kJyBKAuFVWKanCsXCMUgDT7AyCPRtVVA5xG",
  "key35": "51GRR2nG2QXrL4p8ZtYno2cC7budnjNd165RkQx7F92cH8QCAJmvWy9rfSvStu8JDgbnLsWB3edb1dP2SBKTU5RP",
  "key36": "xrZPmJD6JjmkpWVe4U7apB6WnkTPZh6hpx57QDBVaYcWCNF71xMzH5GuS4ypKuouMG4LNLDpESAEJZFUcchasMV",
  "key37": "YSes48tA5XcSYmtBiosRpGUJfAbsHbiJEjJ178HQNSTa2C57RsLn5Y2uksXdc9ixTuTk9XS88xy21MmXHsuU4wT",
  "key38": "3dNTN4CD2tSgg2Usz78gaohz6MAmqsrkFnaayNAohBFfndSZA13ZBiewyFcVmWeVHmA7JU4QGauegXxmfTMh46cs",
  "key39": "4ooPqwfUbiQkbB9AnVS9d6ZzWPBYyzKx1qraUpuGsToX6rqQxMSoh126qaM7WtfDWK4i2EJ1ZrYgGhFjd1D2NfF6",
  "key40": "37qjkqkmBtosK7DPZ7tdXtcxLA3qK2EEzSh6qpQPxGoWDZ7akY48ckk1kLoCV63cN9tdLYJPzuc6FEnM2ZnMCZGK"
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
