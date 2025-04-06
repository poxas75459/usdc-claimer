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
    "2u3DBDj2uaTm3rjHUacmAffy5hCHdW9uJ1FMP2UmQvj3CP9DcFnWrU3NfRwmCaQeZdBmdrYNwCKfZ2HzAstHN4rD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTMkwWtFohe4vMhBULhV1pswDh7UA18jf6UNaYSE7w2nQokBMapEnPUBTiAQUP7WsqFgiSYwkCUhuett9KbKmtS",
  "key1": "2RPBUgepkTvWKg2PfwaXYF4Ga5hcnqwLTPaiUfwVtXcYUs2pyw3ed7jMJjHWRZYsrPEiXofBBeAW4BJa36ucUuqx",
  "key2": "2VSUnqj9g9hmtiJDfzLnEU6Ve9kGBmQm3SFtR3drCJQ24Qbu5bxzxgE7gTXoGiqpHeL246NDbg4jTimbEVaRkrfK",
  "key3": "4K4G71VxjUcBYqke8kCdn6z8CW51JceZLDAMZ79npceo8JWRjGbYgKowNDjFhubSZZWM7zLCU7zWwFtSP4TYwVhk",
  "key4": "5aan89sbpi2oWRWuw8AfC1fbftLpwDJaGukZZAWjzBsSkmsKqi25H98wptpBNuZ5aViP2ReHbU8rWcm5CLb2kVDo",
  "key5": "31Vq65u9dskUj7VNm4khTx8Je8vWo6KkgqH8UXc2rmZsGJewnvmE6z9SbQTMJ8R9FaDfERjFp2kwBQKbozudQv6e",
  "key6": "NbFvu5X7dvvPUyjLeZ4n6ry863xeGaoL3Lza81TSpfnws5aZoQ96fBfttMRcrXuw4QwMkxe3N5X5owBZGPbHjiB",
  "key7": "3LBMVFQkA4MxtB2LKinyx2yRk83X16HtKJd41bKBRvPfLA4Wk4BC26HwgTL3oAE7h3mWLAx6C8KnpqKxQqcg9Ao9",
  "key8": "5HzCTHpVCd8okLcPhpMjD42KJT7eH7bNsExS2N4Prz3KceGhzLkRDregbANkxNN4cukP2MuWZBDxjAiykcjDsQfa",
  "key9": "4ZGFZLAadns7n81URGFfczqMn6zT2XH5iYdFiHB8Nx4yhwwkT5pWaEdVsd2fPbjUP8aJnd5ZvLZQDxhvcL5Kr4oU",
  "key10": "3bv8Y1tRF7H19mJekEXgfD353yC4LA6Vetrn56SFaRguWeZWnawkpHjinqNXx3UVezHoWHt5zeWDg7HyC4hLUchi",
  "key11": "21TfFJAVYgfbYr2JqqCBQ9zp5eWDpwnJTCNLmewr4rr1Wpip6tXmm1svuXCPaSgYdpQ8MfFkpU39LQ4CP3VVm5jN",
  "key12": "4we1kbQPG9S9EqPJm4cDCsyqM5nfEQzc1aXmHpJ2ghY26rLH3W4oXQDgw4ikw7QRcvpvtMVafcCDaMYZPEMkY7h9",
  "key13": "Js4yePW7TVprZbmKV8MtAqM91nDZVE9vbcgzkmQuX8b3cUzwctPcUG1BztDQoMcoaM3kLB8mwWtnWfvuXsjHjRy",
  "key14": "3HZyb3cr5NZsTAiin4rpoBwd2dkDnG8J6Dr9go2qzZA3RLiDFB9Mu5CEWpmTeKAh7hq4gGrbeUeVXtCfyuus1Hf9",
  "key15": "5uLZanMXwLZPmNMepN8C8bKDzujRqDf7CnBTsd3hKtfhHDe5Fqj9EYnkRMfcCKkyvJUEscrDRwJnTttqDQW4o7s5",
  "key16": "hFi9i8k4MisxZyLGb19XCXrtfSrYdq6Crg4yQmbp74vetvysPkAYjzrC6H3t5MDWKgZgwG2ZBHZT8BtBBDoj6xJ",
  "key17": "2LkbTz29pBFRTX7MkDeMeemz11Ra7YNw8giUwdXhooLVYQegrmxZEJBCH78P1tB5JzQZkdFecDz5TFFrja6DtZtg",
  "key18": "PHt85epgDKEThnKP1a6rZiVv3Lz2qvo1hs7nQCL9ewzoC9L6MSfb4Sfa7sN3ZscHdyyey656j6TLvV8hTe5DGs8",
  "key19": "22QrQ6MxYrQAdYJmWsGtF22wMa1ECwHACmidy7oa3L121cALVpyMQCw2Gvks28RC2oWCvRNKsac1rie6LqjDyXVs",
  "key20": "5C2aJ46GadeQTspMt2eBQGsQThybW24CP7qA8CTWstxaswt2HGa9puuEUBN5N1Ajegc2kJsQwBtBHD39cXWXghND",
  "key21": "2fULupXv1NpZisz7qTpjhApD4XTh9tFhKGqt3ufAxJ9tK74UkcAVBEcc8AdwbwvPne3NMC5XR8VN1sNWdoYJeUsX",
  "key22": "38Ytt6EHGcB71rSHThDJwCddeJ3HhgLsWZMWus5Qq8QiUBSfkmfThFZ92SuupisMX69JzYZU9CFDdqtWvwfGPLyp",
  "key23": "61reazEqp6FLUXbZj4mvAyPWyzSsVE9JHSLhfvafTSrrH4ZSGr1QqtrPStNiRqadDQ9qZsorvKANPzU6gDUnUe81",
  "key24": "4wwWPmT33XwCM5WFhh2cxt2prK8ytfzXpj98sLvtrV6PeyGdZDfp54qSvC1gVRT86jWYHzuczpRFAhyJ3wrGCVT3",
  "key25": "4rbYGvkZb3MpqFb6NL2x6eytwvLbQnuvzh1GTFQRXwhHGiiDdsL2hm1HhYtSX5qqAYZCiWCKtdmteLYWeSvPt31o",
  "key26": "cSTJNdFbF7UdLeFnZc2FMJRYAAP1N3o9nPngZdUnE2j9Rjs6stJuxYsA7KsD89N3fp9SHfpqWQSxAuReTCYkusP",
  "key27": "331jFemEaAiSjDCyqaTRRzeGe9R9TCboDCJyLxwCZ1CtfNYResuvbqcAiPbC11WXfza16NFP2YnVx7sQGN3fz4kG",
  "key28": "fYNkrCTB8vbGDBTLpRECm35sP7QCssRs4rc3eq3MshAPnERs8XWz56spb4YjRobpdbNw75EvjMPRnhzVr7rhcBZ",
  "key29": "4J28KwyQoCCee3Bffi4AWGpHJMr36b73TY5amce8hYGw5HbNgHRfPaqjJUMp3qqkDs4MuUr1mxPp6noPfsybVkS",
  "key30": "5sRYoaM9utANVacv6aiiGEhd6g85NzQsPK6YcHy8oLi8EdzgkbBQwHn71aAvm1hbaQaVAu6tBhe2VyLf18j4nQ52",
  "key31": "pyTZmJradxzR88ypFgUZUha2YksrgmaXv1i23wFWSt6KKVZXS4oiyTJJwifLTW7QQsoxE75YA4oAvy6jKUgHs9s",
  "key32": "2QEqWaogtfFhp8AfXzRLsyBHEBkETArwaXx7HgzFx11iJgvtLjFKYMMUqtjexYqFQoD4oEyiY6ktb3NBuVPtusYn",
  "key33": "AcVeK28qS6EGbbP8XgLufRgR8PxBczqHHGptp4LyhECUPNE81TzNunJ9nSaWotFkSg4kkYFSK2ewKKuSELSUgfD",
  "key34": "5sJaNbtJ2mcUfZnY8ZXu8C9vwGRDNtDozHRyWNUEmgKBPNh3w46PWMobF2fenfzFYwKM8PEgayVvUkpLyBbXgVW",
  "key35": "4iaUpG5jqMTzPKoYgbKTbEPAPdyGudtec3Zx4YeFzgWRhhQ5t2WMuqrzszxWWeMozGYjcynshXxPdP4k4h9zf3HX",
  "key36": "3YRXJehB7kySu1SSYkPp8HwuaboW94zDN815iFjKkTRT71fmBFnS56DcrR6NV5xweoxygVAR16S1NDMPvEpddagx",
  "key37": "567r5TqsQt8qvVPjSYnazjjsaWiyAJ7Z2qtrrrViLMyfmCzdp66tPCgU2LJ5mh29t7BKAvJzKZoooipj3JvNTjoG",
  "key38": "4e8mqzp18uyUR9bqk2eKSd5nYDY76Ls5WhCEtpAMvToYk4CSDFLRXd1h3vzHqKN35jmCAR59yPuFGKjhbuinNZJE"
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
