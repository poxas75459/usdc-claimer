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
    "56ZBuq5J6vEun4L3Yb6RcV7k2er1sLGAnUEG6U5TzDbPDKeu6yV2yX4GWTsiu1xZRuyygnFDtaZv1e78LryLc6CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZ67daALDNc7xeLZLig4D5s4E4viKqVgx8VYvN8jWucsjdcn75rj2Emyf1yaLxCPGfVPq2KETQBRNGkgTkiXpFj",
  "key1": "2PJ7F2uYV5Ho16ih1BX1PpsJhubjK78weEP5EkvaNLTbmfBs1ojkpEBbCtRjNVqPY4Uk3Xemzir6WLfK1Xs4hjy6",
  "key2": "NDw4Kjy7pM2M43dRhR23n2qjJxxfNkNQ21jY74x7jvdAnwiGhfrFgX5o2o3z4x5WXBEoTUEebHfKzs4TPAhNS7D",
  "key3": "2TdyNSs1RQYmoAwzzKEcTRucYevRq3wbERwVjW6tYHahRW95umR2fD89rktQtY9A8SxJozPBzorQkeLEgAqwV7j4",
  "key4": "5R87gvjRsKyBomGQ2JBa5wY9CC9So4rTiTmJ4BPY8eowkoHcN1oz22KVovsHrYBQ5753LtspuJVDLRZqFqe15kn2",
  "key5": "3FxeK9C7ZTUJ9unjhNXdCxZTM6SExFyyV1C77LCnhA297uqNNLNbNnMGisex6CkxoWZptTFGWWYJ6NNrdqidJBTb",
  "key6": "2o3PctYHCooyRTZTRKtKk1un6hbtf694824omuWTYbjmtok2pPvHBLjiyUqnjUFrHRr54zqYPS8yECPthGEe1UaF",
  "key7": "3qm9aX99p6PmHuPqrgAaMWUxiovfZk1Mje3PUya7fH4NhJjUz63CFxBnB9dgg42pLZZLA7Puq27XapCREwsvPbdf",
  "key8": "62Sd75LKi2C8bLFw7hjXUpgWd7E4zG4gAe7FEdJjQKAaXUEQHGf2kEF1m5VDZvX3iQ1ACioWZv5AFx4e98zPhJAQ",
  "key9": "2rHnGjcnR9dLFB5UMS1D1HMSXfEDiaPpNNBkw8uHL4oHuCVnoFZjWHFHvmBkWQHbzzAZnBFLTAVigw3njF1A99ma",
  "key10": "cnEkkhSzesM7a2xcfm2jJj1wHMoNdAb1Px5EqrzCtLLmmbSeJMNKyiBnevunG5sAi6qT7meE5US2ojFFZhgX9Yp",
  "key11": "3y25D1kEfQ6zT9gxfmL2tTQoKdLFxdDNDTgqrhQreNkBz8WabDBc2HFsHmRUVCgpaXF5ZHR7z3v8965pkm12nd9E",
  "key12": "3X6kWdtGiXz63U8wan2JiebckscUJEy63M3KSqXQSBsaT3PD15HGnxMzmfFbXEjDQd71DmFTXNRwAxWw6iu5taew",
  "key13": "3DnDVtsFuCBihYrVRRa1CG7JvLiyGq6ZSXnQmpWkg46SVXHrkkgYPb1AheaPnFw7SA4W7fVMxY2TBzWPNZaGY8eX",
  "key14": "4YyoaHKqffiaP72rqkaTxvFX8hVQJwmRmQaRaq7DBKZnEZL46usS5ShVCDgusK8nmoAnXXPy8G9CQpVH9oapAS1f",
  "key15": "J6SdHyBZWBw9UwgeBGKYqqAX7haZ9jpPDUtNvVRhGX52HxM4Kxt4kVDgDH9doAfva5oBJ4XM5qhvysu4Z3wo2Uq",
  "key16": "5NRZEtef8mTdNSAs4fjFyTnjUrwZzRG55SQBUokNyP6mNHrqa6UWJjuC5EuzavmGYL8wfsooq1ZjoStM7E14kA3c",
  "key17": "2hPL75LKppXB1hxRUa8jw7Hd4UYetMyeEoWr9Honpnnj3GwSzhGrLtZKSyjwUVxprPENmrD4JxKWMc1CJmVoz5cr",
  "key18": "5TxB9EEY1nZNCk1v5fCRcqwypHBnK6ZCc1uaAp45qcfuBn7N62CwF7tmW3Gprwcs5FegYVXkbtx1bX7iYaF62MGP",
  "key19": "2weoXbQuhKE6xM9zZxF2pwwojq2wevUJqF8fvXtFfT4dqZyaiEGSafMB1aGsVbHg3h94AResdun7DUdkLRXSZ7Yv",
  "key20": "2gA2xoHEYkLmPwe2tteLSKkLsjdpDJYXihSyWE1cCZYnF6k6pVjxVEJEDRdzPgp8xGCYXvEhV9HTjgUek39mQEun",
  "key21": "5gGLyGNeN7dqHuBrQHECQrfDZSNHBD5uc5Ym6aXJ9PCQaZPMUZ3EZ6JENLYhWoJxUkL7e513qZAdD8nhpwX9QqJb",
  "key22": "qPzfjP4o4L12XRAi81fwyWwXiWQcwnqMu6YiFvja21tcDWMHuXVhs5VbvLonHRTqzN8QsqnWfRUwkqhJoz1mCV6",
  "key23": "2CyXzfCLJmufyLAPZjnNsWWgQvUE9hMsjgdutu4BjxeeFgCyw31YFQxnErgWRTzUgFH8prcSS2AgwY4xjCUHCeWt",
  "key24": "5kkvrjmdtQeQTLjtzDEW3qQbUd4SQFevCwUXcMZuE2RtVa8fmsHDwHa8oyJC83k2P7McctsLSvLBPVkRi4QfAxCo",
  "key25": "n2ypFj3BfzZjVfSm1UUpifyJyfDDNamVfH3nsVgsbavitMakpkPWFCLQcuEJFHtUNzSrZ1jsEdXCJt4rtQL7Wdm",
  "key26": "4ZgnTYmqAjQaDGseboBrAhqAQSuyXBnM5QaUMBpz2PBgmtYTLgrYzWZTGesRrfN24jhJkqcMSzDZ5fSj8CmgYYbo",
  "key27": "3QS2Lwsi6yp3PEDasY5XaMCaH7mCNyfouviAS1cT3frYRwe8PdhFJj4nyhJppfhEjmQQQuM6WqbeH3tLjYJ1gymK",
  "key28": "5NhiML7N6mH6D1Gm62RxXpWZpSjBz3zyrADKcJynDZv64MHLkEs2D7zxymC2dyF5zVwt9SrAVuMU9TC4ZNop21EV",
  "key29": "3g7ShtRdPCWr9QSLuaVY7dq4aJtiNXuaeDxxNG1dwhezQgDpmw2ZZvGXZSjfWoyLuv5in8TaUnf9pomfE7TCkGyx",
  "key30": "2BcwkCGCSDvtVLT8UiWxNaC1BT4ffHo4xXpQVufHzL98XWjkdXgo5jsYBRTQvyAYGdXeoR83xuojDqqtmP1esYYH",
  "key31": "hMm5RcGCiHVuXmYMMaWmasrE5rGJ8mQmDbmouKU7iCXtcTaphscpe6e3xKDgQ9i6Cp8kjFw5axgaF7qL2DG9dub",
  "key32": "36a9gwBgyFXXbeUUR3AEgTkgXXE6bBGdfLfo7kdbJTrjmioT55K5c7nXoAhaSyv1rqBT8FSj9NhVNLT6BEyWNfHf",
  "key33": "3DyTX4nfqUB2vaYUGFvUboHg7BpWnEoFtEcgwj1PgpBz6PA1jRrja47XXvtUVANdypg3PyJ874sHL2uLp2ZCiL5Q",
  "key34": "4uZxLedsL3dtsx3XVthARdj5NUZB71u6G1DdErGoXvCi5HAnzGSuryNTC8WyyeT1PQsJCgNw2SDz41SLGE2ygiae",
  "key35": "29e5rUteLPrmXGP8fFFgpfZAG5ULw5wUGC6GX13JQZL2NhdESRFRdjyD4tQFd7qf18EZjptxhSsqcfWCyJCgszZ3",
  "key36": "5PUxkkejFPC3kmbCTDdT8rPb8yMcpB6gWKuUCjsyRTnDhsALU85o12jTjVus6N4gvZLBTWWEwnpwzjCCYVMZAhNJ",
  "key37": "3EHch1PjyBEBoGPnRQMteCez8jcBynQsGF9gHAwuFB17jnX1Z7NkALLD94rjpXedMW5Zmxk4imSvtXFar1nJRDJf",
  "key38": "38EoAFB2vE3bsa34QaiNDafcJKaNSfeFke6cpVfVr9AZ1VYybnhYhfoHyzKQg48QBdzeGyNbHZyQjPFqJCfTkmB1",
  "key39": "4w6sKeSjpRh3DqzPeyHFoyuv28i8zfV7v826NQYwZSuYQsz4FtHJcq763i6L3u6n9x1JKKzabGP2hACFsvMcjnC3"
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
