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
    "67Ky3Pgb7PyWWXr5E3w5nFonY9f5PdKMW4iqaEyusryVNpPAgqG9qfpqezuLKN26qgtaRugvxY9GRqFXrNm2wMMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EUFMY7kwWSvQrtpPyxG9xmu7ioZ5a12Ynp537GThTHwE7Ye2Ez9xjFdEnVJ6MSyLUHUc3TXTqHdvygeZUBRDQn",
  "key1": "3ibn1de8vHRQgouQJUZ3YRf5DVvqymbUyDgRfvd19yo2ZzzE5QKa8RMJ7kwutzuERC17LGHgkdkGqzqPrYTZ13B4",
  "key2": "4v6gqGq5M92EwnUeZJvr5hJs7hw3bCHPBfwkyXXGSBqLN1HutJeKvMFCSv2MLUydHzM56rxk8vdiNxRR9cUAL4nY",
  "key3": "2Lp937qZoVyfknR8NoohR3ZBvZCAqkcmVXNryGk7tyYP9aXrS9HUBBtNx8Px6ZnikVgBqQBaeYpwFcGyu9HH5Sxk",
  "key4": "4eRVBpwTybkSJx9SapgkuWDxCMJec5aWn1kiQMK1wYj1p6SCyc6r2SgqrFt7SmjyhvNESJhc6DFVMYiEiNFJDj2L",
  "key5": "2yZK3tKwdPTwUxNhQxSaU9ufpE15wJWpntWSUtq4p1Wv6F6hnaSz3Q7WykWF76drUX7xF4eGWxhinKYtm5gbyKpp",
  "key6": "5EifemrjvMcYnL1ZY1YVfiABu6XjC8QqQb2W4Ya6QYySmfY1w2JmtNkd43TGA9XmpL3qsE9bCcHvsrp6XFJQrrc3",
  "key7": "2KW2qcvxaVXiaXAFy9uBWXjuT9aYpSMnqrwe5Hw9567Y8LQuoBZEYLmpVnghEu1zHeZSwojHtjeNmkG6rwWmouqA",
  "key8": "nfrfKL6ecDiXJDN5oxMmFvwqMWRrPNrBGisqeFUEFNqakyktb55zQT3HQHewgMZKgddFgKbD7i47R1zSCinAfX5",
  "key9": "5X3TDsE98npdExx2nJ8moDDk2gEeBapUH9GAzzqcKjqrojUk5vVt5ad53zbmi13dENpHnKYgmRPXaw2peobgBKdz",
  "key10": "2SEGySFPPTriYstRHtnNVpd9N2V9mqirLDRA4JkbPrVcZHixj5AMEZn7eB1N8VtimSsEpjgQL4vySMv5yT8SPEd1",
  "key11": "61FvmiDbDgJthAxduBCnsJ3qyRyCqso6b6Zuebv26FE7be4FWfUVF5Lioq1UQGA1xs644ripPxCZtfdu1GpVTdm1",
  "key12": "2DYmujkhUwSkhZAnnQgL9v8hRFpB6kn6iLeTQt8sN5Dp7VSYJyswQMW9ZxFxL3o9QKJaJNczWkxN2Vh2YeQLJhKi",
  "key13": "4cdPZZUYDg67iQUuhw9CLRWHyXAKE3MfuRSER1kJ7NzbtKq751QJWdECTSFVFSsZj1NavxHuBsfftWPGQn9YrLvz",
  "key14": "5on94TVZZA6XPWePC3F2hk82Jd2mrd8SnJZmBHKXBt4et7VafQQU7QG23keB66qdxUV7bR1H6LmvMXBaEyhtHokm",
  "key15": "3KQPJr7bKcRjL6yuMaggCFupYkXJHLLekJtP9a3S6iRNt4qWsp1hTbLdj2AjQKbUjCLyttoWGot6XAxPYBobwknv",
  "key16": "4aN9bjcbBXug1RFDbq9wXQSgsxzLDuSePewEhS6A1ikCcaqBNgqxBnV9kX5cmZWC3V6BCBhHUswXcoTEZT1cTsf2",
  "key17": "3WDSLi9toyQMpMpA3xYxQxEvECkboqL5rFF1TnZqGB9vNprvT559HRcTLav6HrM3TYmccUJcNs1Rheqxkw2X4X5F",
  "key18": "RraXvFEoM6KePFCFtLsGXwUjbwPNrQ6u9Yv9UdR2fGYmZ4XesH5EoSq31FQi4WiHxVVM6WN1FSvsVSijAxfVMCM",
  "key19": "3V6WVHZtD89CqEbn8fg3yhtsay1bfWi1CBjvm7Jm19b2UDuBHGif7JUVh99oyZbE7Cmk6HSVjLdshQfCNcQEg56P",
  "key20": "4CrUUxQzgz1fE35NKCTFE8PiFsb6w9zDNeiuCQzrwogQLDPJt6DZWp75ePP8mgePhahKhPu3jXaxiU7Dh2iEyEXH",
  "key21": "xx5ZSnGXSRKn55VyABmyGbpkh7p2asCpHvbpjTHBDuAbAmUYCDcCJEvtBk8CVawgoZoriKMvjPL4TudK199B1G4",
  "key22": "4rxCW7CazA1qnVWL4nHQVy6N9Qx7rfTMr4C2y3vGLLLZS1Wj6LSeXWa3bJu9p6cmzCMq5GLp6ecwhPRBFYnAbYkT",
  "key23": "3VZRw2BWkShgibTxeHsTEpb6fBjb2ndbJUab7bFy6F4kTHV16Bn9yXaSB59YSLa6iU5oX13ToozScCmbagRwnNts",
  "key24": "2rSbJH4XPxhK9KNNXx7fkZXcFYpSVigJLNkq1aTQGwMgATUDS4nzd8G2FjxYU2kie6MKuFDwSaBW1q4HuBR9ePf9",
  "key25": "5yMYDYeqodsRwVvrsJ7nwuziNZfDp4QuDULMa8idFiKTNQtb8iNDgiy4tBPSVthgvJkewLVCUtGzdybk6arr4FFL",
  "key26": "L4NFSq5rivr88dP3V5ioRwMg6CdqgKmFNrZh9DotpYJnC9qwp41qBA45jCjW9uo32fHE9pHcLR2PniBnvw94kC7",
  "key27": "4b56qm5W9dFzXNmJ2T7xDHxBenEQ9aR3oNfXq4HnmRi9aEhKNtD25dfrS5WY47v42wgZMDKJmU8yf8xaaUXQHcfb",
  "key28": "oqLZ8wg3XgQp4DcnoxNwEevPinzk8KopAEpqVbtbnAgr3u9hoLbTtNmzAPXjiWPHTzDUkux27puXkVQeo9nPqcM",
  "key29": "5XqM6vBiisV9Fm6VxJLF7hYitkQ4HpVjLZL5tMWQtwu66Zwq3GU2nKB5i6h5KpsfTRzoq59roCCBC6RiEhTiYa3W",
  "key30": "4JjG7ERGFe8XwbBB1XtFUYVraA9Wkfyucbi1uZ7MCAReSGLqxAhTCergC1nLhc3WTM9yXm19Gvh88FrTS4MVEeu8",
  "key31": "5WySJBJXU2ix5Y7TADjroPkuwPGztrjpaft97Gpwg1w2A728fuK5SpKqU2XuSDKaYkTeYfikuafXSFTtdjTniXAf",
  "key32": "3hz97nhVc8zknxk3DRdNGCo5oMPn3stQhvzTcnUWYX73JPeFERBhMYmBuAjw28QDBqp4mXdUfo2RxAXtQJ6B7sU1",
  "key33": "3DTnepXJHUWzm6PYrdUnach2qXkonJtW74wfteUPtXVx1DMLBdtJgB6ezL9gi2RxYzAG8WFZnkHNDeeHJkSZUbrz",
  "key34": "43nNGMvdNYzByDfM8niG3k5R45JLAuwsMfHEqtM16JQsWZrpNZde3VdW15569sjP1pZD1UuMGCZTyfqmA8KF5VsV",
  "key35": "5E46mjvGTT4yrZwzq2SoTBk5RcRhKcTFWg4HkZKJ33VjeFr8W6CyRRxvccgfpK57Mkm2HovLXTVRB3FKdmZXUspG",
  "key36": "2vEiTBkB2DoxzdD5ib8dUJicJtctRJ5KVdqfL3Vb9ndoEEZBGfnch9mYyXmAbKWRYH3vGNpEr2PEB9HFWhA5mjfd",
  "key37": "4WcMgXWMLURuDsG8ry4DHMAu6b2rrmwNTXVzpSBqBctLTP9cWYMQUueZB2QuG4EDA5jNmWS7bs5MbTGfcqv63UBG",
  "key38": "5pDQH4ivfCNBx99YcUZjAs71H7H3SHiKtmiQMc6NAKtu8dwbxoZE1Az1XeLNeHn3Tvq7XomuoRnzKMVEbUr4vCuh",
  "key39": "5x3s4W2ugBbkpnQFcg7CBzMuuASjSxmPeoxFD11rRZkWdLdXjp8vHa4owA2RUWxYXEt3H43CFJijoxqy5FKJ7oDx",
  "key40": "4grXw46aQHxwvpycajhVVQiitRJTwWTk2NKdQVcECXhNmQP27aiU3y73wxaPMghZkV529kyW5y3Kajaz6cMHkTDL"
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
