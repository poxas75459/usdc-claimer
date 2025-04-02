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
    "544JnfzvPimCAHFJ4Lm8adVnniUEjSPEGzK4QB4MS6ACgThQ3un1oPuAyTTDakkF9AvARmBupbjb63aeg1fAN8fE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5j3oUrmVBK8ZQSQdz8RT7AZkshLkK7Yu4CF6QmtLHifkMT5iihmkt5LakqfdB5Xsp2mNMA4qtDM6RLQHC6CARm",
  "key1": "2tM28nkgjrX6dGyqCEidXEP6bkrMRzavtrnq7DTBfWb2q54pptW4UkS82gwW5xcXWWkJzKhvRj4hYK3fdCYogT13",
  "key2": "3Fsnv2DDSNSgjk5277ADLCJwBidKT4Acx2DRcx43xGrq1FxMjP9YevSDxudeywENdN3axBy3nbWr7w1j2BiWN5iE",
  "key3": "5Vfqd7BV6s5gNAZCYqNsNPP527Yhb9RFE5ZYW7CsJ432xF1v6qXVtKbB2Mywh5YC2sLkb6p5rA1TJRKVPBMP61se",
  "key4": "5dbzSoQYZgz8cMcSCFoHbrReHAH39CDbpeXqwdhSXWT7hufeCb3gA75KCUbT46uZ97u2brzZionkuKfohAQqC8ax",
  "key5": "5WMjawo3z7NqTPM2JKbnhcTzxpMw6499Vo1u6C1h25rgECC4cnusPRTEorB9KwgdsKNBMqNdyXDeEWKbkSGdMcC3",
  "key6": "6U5ESP4a5PQCRqqZxX8SMZbfDSr9J1bD23evYtJXKxWZ9vVQjnbWJxgD5ThkwcN94yygAbEhQ76UeKmVKDqZPvU",
  "key7": "367dqxxMzRqMca5kw39ofJ5bFzJBDNbms2pWVz25ytYD2Sw5hZ42s4jbVXAnzWNw29MRRjXzEWHYqv9i82CMNF6h",
  "key8": "3p24jPdJzpXU5EqF4NLxn8LiSVc4GoiCF9mSGoB16vmrutDzQ3CWsQQnfFMAyyVxE92xp4CqMWiejCehWkAfz8AH",
  "key9": "4VzBKW2WJyhb9F3XHHnJY9yVEBnTbx168K2bd3jk8cudZJuF4c1CEd2EghSorLWkU1xXkqtXJsU2uFYfcG5vkh9S",
  "key10": "3qAzjd4sKyrSYKAczfvSPAWhBUJFMsMK7Nvvea6avFSi1N3ihxsqjdC67WHMSEucgFMM6Paj1SeQr1DfH9HWB198",
  "key11": "4Ms6fQEJQ9bTQoDo8DtbtEBaXLfUgBBszr21hhPzFjiYcQfxsvzpTdHPrYkDJN5uB444nMLkZ59skQnB1eEzHieo",
  "key12": "4dzubRLer9BcLdtLFdCf7d9yKYRNfdkh8xDDFCRekFJyebEutTPAJgA2E3yw7SuGb48a3U3dAkQgXAjzckfxxSDk",
  "key13": "393ZtkA3DQmMzL8YzKxLuRwr7au4NTHdNZSbWRLJ2hEucBkugDmahwSKBnvqVzE1cV6now2PS6Nsm38J3nGeVWE4",
  "key14": "4chNzmJaUmP4uzmy3qrqMhoHQWjRPGhwGpRCTyBypQ58UtsHaMcosnQCL6Nx3XDBmAcqiNNfbGWHk6F1hJmB3mqj",
  "key15": "543fYEB38TjHZdRhTxEjxbKfSvi8DizCWvvvRdu43DkUataMCWVsNzp6WaeprqxitwrCkFvpi55uz7L726QtoT8g",
  "key16": "2Nt4sjjtLyjnpKzdrnJPkjyoVoqrSQ6dXitn51PLsq2EN6KVCPsxpyyv3LHas12bNoqVF4AHHuoCVUM3Wa3aBw4m",
  "key17": "4n1BC8bK4Wia1UZhci6LYiFD8rqRUQeJEJocRVZqzytbiD5orPUnSGoPKQ47X3vyH7JK8gf4FTZokKQnfVHLzu1T",
  "key18": "ikz4ehXibiHkkwpVcejdSnXfMERtTKwdV4Bmp62JK2QzYyWsmH5cLAWJun55FAcFfWnKJ8DPQ7jGnYhWPNBAfYJ",
  "key19": "QfnPcByoExRUfNme4xyuRAZgagx8aRbPNCfzqL2ThMu1nt3axneEFGA7LCWo5EWqnQkAMN4dkZKmR2QRfGRHpEX",
  "key20": "4ExAuC231WfjomofvwUK6NfhPLEifzGGiDEaZQ3aBhDPoq8fnGxHXA8kEAF6Z1BUXhEeZm3X8Mmg4seAqHfydXTR",
  "key21": "35yHJfTj2cYfUxrcuYaCJPxHSqwSCmeAe5n4XLMRMZqjpZ1Pbn6FBR23AMnyXk3fDX3yBwy6H9xw6HUKfDQQT1RA",
  "key22": "SDUg45i3JsKTRkbveRUbGKJbLc3uuqGNqqxJ5m1hA5crY8beG7rgLP2t7th17KGd43rx2GYhA8ngqRsQeWFG5Jy",
  "key23": "4dUq3U49hNhuzP7FbEk2GPDXjFgeWLVdMpZFWg5epRuo9qbVShA7ufXnoT6TKiwnB1Y5MaqS399fPhXZR5ubvGEz",
  "key24": "W7zKhZkSw1V9Ws1xhuAn24BBHZxgJ5kuq2Y81TaPC4tXh3uaJpYjYFiVwGwx72fFQ2A6nHK8RyAktPJx9QS6Zuc",
  "key25": "eBFG2VH19kPk2F7uZK5vhhaKSeYYgLycAR55cLxRYDjBbd2YanBmiz2R782WPnHwP615F6qcvQ2e3eqsxJpEyvP",
  "key26": "21NDHn6ceMPBbho4oMgCS5SBgMreeqzVUm5zmbNpa69SLSnAdFuAsZHGriQXnoefhZPSx4etCdfRyBX4tXwxPMVT",
  "key27": "3KjA59ZD3LkvEUvCT7c5drRgPqxcxy3kyRcw2ePZNTvnBQpE3oyggpizgFAVm5CDfmeNFs9Kk15A8FQSMPSKQS63",
  "key28": "SQr5UPMJVu2o6bBL3PyR1sNWcxT1r5D51ghUNZK2J6M4maV3N25DSGWwzLiMac5cFhaTKWnLHr5miodeenXvu87",
  "key29": "42dKUj95VXuL2eXrZKRCWreccGaTr9Qcbv3CQSzNMmnq1hbyWt9b2BJua3Eio7GykWmkha3rWzDEPdTp7wy5MxjC",
  "key30": "Y9Kg3MhxJZisjpZJhaJh8Cjbps784eTuMos2rTuwtprvkMkjMLjxisdGty6yXoxJpu7sqtkEWqD3S4rawjEcrG4"
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
