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
    "5kBSBUQsnQJXrVtSH1XC2BFRk49u5yctyQ7rtDnZreMVGPqhQoNhEokiVx6GZ4r3HLmmcmKFhtG6kYPKcQrpq8gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQn3Z5aWXGUgGq3Qk27FpnRGakLJZfCyWB6cP5hrX9HT6aAbi9TEh77XxhKgArN7kqPxAz2Nf6H5JJzNUdtc9H9",
  "key1": "24x5YaDaPTHPyiP4QqvgTmSj6vbzcBtdAEt5Tc4JaqAMcEdjzm9d8iYHHjSAi1BX3MR426iMgxcG56cJNvte64Em",
  "key2": "4ywnKhiSdJ7kVSYkaSMuExM2WqULYcCJ4B8QLqmznHq5zxwt3w7A3fpSJarx6MUqnTCpSk54z5jKHx572uCa6KFr",
  "key3": "4ModtRUcTvS5NsC1Zz7fwYCLPFeC7LRSrcMHigCiCqjnDoKnNAq9EhcNtF1ZAVCdZLcMfx5AJQBiF7bv6SbefScV",
  "key4": "5V5a1yy9qaUcJse5bwj3t4EnbETGGAtYUPLYwWuBwY5HtY2iG5sNnLN2ZUqmct66u6pZiAPjEq6rvFTcvVnRWjEe",
  "key5": "31xZm2pXYjgirgYAgpJWHotb3aqf7auDh87xZcvHb3BbhacBsyUDNQMN9foj8R3TQTRPNp5qaNt3TSqUWQWGxh8s",
  "key6": "4m1o1n5rMZjys22qpfAxNYjcKkE9K2qujxh7Sx4NXj6Kn9tXSjEAsgZUJWA8mrUj2wFP7S17VzPVFPnRPKQvFg1d",
  "key7": "5CMMdYpF5pswiWpWazwEnTMuEgEV8QKP6875m8mm2gNvDjMfuzCquX8ZhThCc3MwR3SMVVeZmAC4uEAuZo22dpKS",
  "key8": "2j4CwsncMPAGkT5J6TbSVE4EPGCRHNYuXcFsrx68WUKPAcwxwaqbhrb9GYUfbLg1CwT5JMXyQuXHZ47pg144qjHB",
  "key9": "32KKGseUuQYK9MzAahDzzP44DYrf1xvH7VtD3W7awBgDToKmGAYyCUekvtXbM1HU9g9AKrkz3hfLXR5HcbDtHQDk",
  "key10": "rUAZMFFzMZrsByuC9TPb7NF7VEfS8XAQewNT8zdkME5wwp66DdiVknckxQ1aK3tEzAih47wbXsFma9Rgx1iRr6z",
  "key11": "2FhDEudzrKBZYuMRmp6rKzi3HiVSJ8pryQBvat4uMSHfY7pqCUSUYbyS3pdVNEkEQMAcjbmGGTywKooKQAhHQiF5",
  "key12": "41emfbLp6ucW6NTaNXMboAGC4AsqpAUujXn3eYyKnc9sxCaAR3BBDCSQPPHw62J8drS2X2CRvMn9YZBPKAQjzEbt",
  "key13": "4HFZYvPrNkbkgMWtQmua1Xc3ynMDQy1nrXL2hWHGbRm4y2VAwzw6D44ViXY3KUbT4cZk19rTp337EARVHfArN9kt",
  "key14": "2cYgbaceoyUAr5BHhK7HKuYrmPdM9Rb4zLNtcyqbYzypXV82W7D4BGCh5vXdv2h3CXoKg9fubUGAQ4ffG7f5rthf",
  "key15": "3Tg2DjfTFRWLN7oVEDwjWKcdUdxucHSC7TwYiNzgXYERh8vbdXTKdFQPbCmoLGm2y8p3T9LyoF4G4Q3eCP4LHVPo",
  "key16": "3JPNRQeECgDjv8qThCYMBagJANrMx9XRTuBs58h3bUNXV1X1m72peGB7yfE7Bh65MfRdmDZQWLb9CZjUzn688uVg",
  "key17": "GLkiVMSErsmbvYo9R8CVoePCbRUJVS9UyED8gdbEgMGm2y7nkwbbPXRrrZFBBgNxyGKfvK8mDyzmj1kr2rV9bGD",
  "key18": "2MpAJV2WEHkFE9rHSwNCnH7hUcqaXvz6DEyB1MS7md7e52vySXGDBBkHAds8V57nNjL8ui2HZjfJUnv3fhEbwzYp",
  "key19": "XmPwrHSctgon75zaEUwPfPpaQQeUpo1fypPb2YRZyCbDgj3oADBZkqJkYgJvazPuC9ndZyJRfkTNEXMPLYmo3yD",
  "key20": "2qJn9jPpCFkW4pTeEVPAKc9mAgdnYtzHGZuJXNDS47dd61iMNN85Hf6cFixZhPdb3UeBR3u7hva29Sc9BqqXac9n",
  "key21": "1HR5mqD7pFTtA9jcQKk15mPntnx7WcV5J4KpoPLxXkuocyJmb5ryPdYa3438DTtizGebssZhByfjCybhreiqcTZ",
  "key22": "2mnH8U39GvMwH5KbD6j2ANfDRWN7RhogZ2Fg93Gm8fubF3myosSVw5fKrVQ7XSyTAMnFhNwq9fiHXJqcgLMsp7G6",
  "key23": "2xZMMCttsDFSNdLRip6VLva8KmNW2iLjr1wM2r5YX2i6KU31MdQFWhV8aM9LuR89SxuQLkvNvmTf6pmpDUdpCLHg",
  "key24": "3WcFj9GWSvrKs9j2DSb1HFNjit8ER65kZ2WFjm3nuxbg6jesJvk1D3Cny7WRmLztSBS9zQebr3zGVUkKtBso24dC",
  "key25": "4oxXLh87u51Q9EiX2W4ZfvT4B7cZre5MKZhYQAA1Q6WXk8mHh2tQ2ZkGuWeknLuva226nhZMnqFb3sAmzacv4e9A",
  "key26": "53g3j6jJeyeNLgPLDeLSuPjjnNAJN7i1s7iHJTSehLqb97JuBwowXBRSZN17Ty4pEKB2yvJKdQtUzawGXWtd35m2",
  "key27": "4mAthH1ZXriPusQE1PcR4xn18rN3oVVF5oprkH7gd69QrJ3hrPshc9nm1EvsAgWbSU1gvuGxhdbzqi6hJ6Pb924d",
  "key28": "sN8y7iUpDR1UMisdqqm96fkabFeWPQxsDJn7xpYLNrGwx95MoZ6QU3fdai2Va5yATSjhv4fmTNoxdkHMVwgn9hP",
  "key29": "2LfthWhLnfk64FXpHnWh8u2CtqtKfZrgXorYMozgDpD1fqSgVG5TMBwPrJe2zFWMpLtgU1wSauobMq8v6Xdu4sT4",
  "key30": "3PZRsRA8yNkweTCq9W6CKgNBofKaFS2887AL4LHc18f4mYEQ1qkP2deQvG4yb9Li9KuBWYh712hScPgtwkyig54f",
  "key31": "2XNcYBgZupV4znuEcb36vp8rRT5vxCeebaKeG5VMAGisMgczm65yX7PAJvwgECDFcLUfhuYGCm2T6NhWpvARGYHC",
  "key32": "2nGB9fEu528VR56xVqMMZ374iQmuTqBFjZ67xnpDd8P5h4VqVozjJw6yXvKyFofLByqZoycBzjcYcaSodNiagYsc",
  "key33": "33daiPDvwDX1ibKomDUuUJ8C2SgN2uCJuzVNi3SFZrUBHj7s9qs8VaUhokjJdAxLrzDVS5YozVYfY3crbfa2wrBY",
  "key34": "2uV1GvbSE41nRxdt3zYwGcTUqGi32q4vLKYZeuT6GGyXJ4oKtaMjiXuheLMJce8N42cgDrWB1TYLymW2g1p7Fias",
  "key35": "B2omK8ormKCaJWF3LDx6Lhu6wqBK83j9TcT4ee13Grj8J9mK77proADEX1TRicyUoe4JX2JWz9DhEhqt12spGJC"
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
