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
    "2RWwZGXqNR672LjXHnHXYdQZKxr9SsVzs3X1uvKrWVgLSwJBoMPDK5JtB5d4BXGzNNF3QUh9J8U2hz6dXvPrQdpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kn5FHuZ99Cg5P6GzzRjGko2493eprkCYUSwgtFx3sw7aBYjFTwSekyvgMD7rBfnyHcMa9XENMhawZjaDFnjfEyH",
  "key1": "5rdaBudSsFzDNRSJ2rTQ4DSjPq442BgmUopNftnZg5auiuXU2yDPdrwNSEePK9kdksY52c7mtPePsqxPNB3XGWhH",
  "key2": "2fDwtJTPRDDJSsZ8f17favHSLZmcbpQ2KyKhkJiU7ViCQUSQCb6Lsg7tZAd7ggFVDsiwwoiFgGdpZqk1Xdvix1o5",
  "key3": "4Y6EEfJ8j7NgvNLSsYA9XErsj9FAL7pCh6Q1gBFJEDBGnUPSUFvsdokkM7uKj8Nx3CYs8mTGvfqzzE4zkgU6Rfnz",
  "key4": "2RqzAHTb47LrCwHv8oUnjupy7SWxadYr4wg8PhV8ULgZVe4NHtGw2Qe27BDKbBsi77yZqJQUPRf2575CumATqfgX",
  "key5": "L6bnbzAY3qe7QPZbrnntE56a8eT5W64E9kgTyLdVogTCPT1GzrS3HmF2vx1MEqJaoN51XZPLG5amyTBc4WTUiqu",
  "key6": "yYbKhgUEErD26QmcMF1vxfaWhE6MN6BrZ2CpscFL3zPUtLi1j2r4GsZusyFpSonR4nU9Ug35g7L1UkziJJUJoRr",
  "key7": "3VATJLxpwV7Z1ffFF4s2XwgX2NtquUBNVvJEW7MQodkz3EwgYh2w1Y3tejy7qjvN2iokYHq5eXMgHHon5uKmaGB3",
  "key8": "QH4jRsmVTNoxPio1cn56rBYPou7Norwao8gYmYTZEL6MDzfVFmULcceA9ssS7GP2FDJLz33BFscDkaLgZenoJoE",
  "key9": "5HLKc5a2SUXpMg6rXjxD2eG4KcTqwiQjzK5qRKV212xW1NfRqtMYfTHwCqu8qxezcawiXEqgvsFFPpjWroNUfc1L",
  "key10": "2yr6jm3mq7ysuRoLgxWfNgRaFuaUf2NppsbFsLEemwkz61FcCpNsj7rGJuWdj91zQvdGhJ6usUQpRcgaKt663ZU9",
  "key11": "n2sGyFjCxC7U9fNR13bo4CgKUUhwWVVeDvxvKnnPpEDbx7yH1XgBNaBw8G6V1M8YDqGJpqynBxzuReKLP9Tpk4t",
  "key12": "2c1Qozjytfh9oMAMmpGcyjqFH7eXyrCvuKk6ki6LutV3RdqZLf7BFXsM1f6T85iWVj6F1Zkar45sfZy7k28hLA9V",
  "key13": "35Q5zZftUEyYVi2s9JUyzvgvPn9dUxzvuBmxvFScjEXfo5iF6XH2TVmdnCgcy1v5k2NGue1keM1RrUUzgDjAkFuu",
  "key14": "5YRMJsQiJoyfTGWQdmMKFsyxVB89jWoRRBctun5GVtY5jHzPxhtRtWFMvC41ayiiPhiLqnUaGBp7UuUTDdDfTS18",
  "key15": "39oZ28jwZeDFRpUq7R5QvMdU4HzYrnnK6L2YgaDKM479uQhpkbZrm1ZvZVAy6YkxSupGjue8LJ9ft16mpbcsZEuU",
  "key16": "2JnniChcBk32WntQGp3sUhPfSL5Z4xom1iXR3UrHVatg1PGyXi515FRKv7C3mKmzRxNoUtiCVSgMiGh3fFckSHqf",
  "key17": "4arrkTK6ZMd7M2jarQKpHzQeYgM4ENAVparpPPx92WJuTN3rKQjMDSnX2qJdVMgrNQvwfYAWERjJURybETusQHaE",
  "key18": "cebRUwgaCZSd9PtKsH4JdyiW9JnKafHVZ55ZLkMZaF1gqycoxLwtQy7AsPUUph4UfSxSn3PoUH4gHEcworCGSDf",
  "key19": "3NJhrho7wDadsqf2jBjyXCer4TpBP9zpeh2kbc9eD8z8XsR5RkMVc95bBaa3ARan1QDKxtByYnHq9ujHWmQxACtx",
  "key20": "4UWAV92rDvAw43Nw6soeacsYjtn4ohLWk7jjgsUSeN9pcpapNjcmpDDWeGD9SQ5QJ1QkFRQhQRJ2E6CVosV3qVfw",
  "key21": "3ggjNjGbK2DD48umF3AP8vm7RedswpiP4AGzfq9QBGEqNz2NKGR1WeWF2dxU3pBAs2zSTLQrKhhcFEJkfxDtZWdv",
  "key22": "ei886Hah4tHXgyUQWLCiPtfzyWui9x7iHQPq4HcorjuPRmrtVLmsJAcYZrhi7FkgqhvNAWtKPeJcJSCeW4JZ8fs",
  "key23": "44q5He8LjhYKx9JL79eQzftm1iDyftMQLY2GRVFzqW1medrrCx4UE3Yjx2wGTR8zhEPRcGo6idNucedxQXYeKKh6",
  "key24": "21Ge8JVFKEPT7ChN7gZaBHYG7jpbsd43p4m5jaUxHycP3tTvQUyiKTAhrKyoNusNiPvAFNsi9nfbfzHcfUvhUiAA",
  "key25": "scqqERsjUwJ81ANW51BjDCmTaZsB5GXJrMvWbnfphub6DKJmtpLTwHCj18eCiRAkU8emeY9XqxS8DfokMjn1ZYK",
  "key26": "5RYKTqjEYqLyQuuG45sFSUfL7DrD5K4dvcPuvfYY4JjmFDGAh1ihL64SYzcjMFJq8MmUsFvQAYP7jJERxbixxafX",
  "key27": "2eRbdQfpiZ54HRuNZYucTHw6TcTCJdowSv3i5Mdu751rTnovHVU39YeRtgwvStmjnRCs7WjECHzWMDmHMv7M5MTY",
  "key28": "2RWYicxnU6pDLZ1UZe74NMk6uUzg2RDcksfgg2UZJ1HCkLRzqreKpomxeGvqLo5fML8XkfHznf6xzkT3JTK7XqZ1",
  "key29": "CWJZCRiTvAQozBujsuDMWK7YaSgRpRnZ1ShdQr3c4EM9QTAu3JhhVGfnwxTNyDaMEUzE46Xuh3dZ3sywxBK4NYg",
  "key30": "5bvMoRZ1SwhF6RD7FMcWZ1ftPNmGrbpbcTWrFQswY8EC4qMYN45x2rdaY5NocxvKWKYgxa8EuZ1gSKGoUfKUqjmw",
  "key31": "LURvCys8uXswYsZWB6ZsQu42hQq8GW9YkxbCVRsqkSod8HrxHBW6mByBiGqoaXj4RrnbjsYmpeoCg7HTkhKPYNy",
  "key32": "2cMmZpVto2EYt2dzzjGiUiLZxYSjKGDdqaHredYjYxxfSyFozYr4KjTrm9zJQeoeoLo1hrxo7VxqWhUSBKaD5Ryc",
  "key33": "3hgMKg4rTqkPaEit5utNLzEJqb4Aom5n1ajTG5n3VwU3pWDFgQeVgjYuiboVZL1nDtduXsctSaC2eAhTJTcdqnT2",
  "key34": "3iCEtse3vNNqSK1PknM19JE5DMJp9vY3rGQ2Uwn3LXHLSo7N6NsJnsZuS4XyRpKbKqh66dS9YPPfSgqJskqeHUrK",
  "key35": "4iRAHUHdcFfzE5hDKKWgxC8qGfrwWnSJVEV1PNRVJr7hey1aixfqEfcwHRLz19oBXYBH3ZgsZq5D9nXFPq7nxvHF",
  "key36": "3gPbwaVeFuiqhy7XUBYXQLrsmzHAqzZSMqNnrQpwsy3gJvjGXf3Q98Wi266cPuNDwqrQxmsGy9sqogZSNe5Lprbj",
  "key37": "2MV16dJKmEn7Xjmj8b6rCDrmxHzMC82AKiZ5idvi9wDN3x7vd3sGb6CWEYhcwsHYYRhvPPhXKxK7Bb8vnqfkyTer",
  "key38": "2nJSYinJJJHH9kuX9S8FixA8BfScGxaZhNbYGVfPpT5sKAt9XhArFAzgpn2EZqYZccoo1NKmjG5QVisia5r2y1Pk",
  "key39": "5dkmFudN5m679RBQYqBimyCCipchc5CBnDPuLy1pFXwU1cbY7SiK2icLf82X4ny6PSoxx99vjuJKYdGv9scWQcjW",
  "key40": "2FRBoar3tctMCiAqEomhdyAz5pgubfQoKoVPa3Q5isS4S3Widqdz6GBtSaHe9cNxobBn6eiaFht2BrC2PjkRENy2",
  "key41": "5so9or5ekrzRdS1zSsbNsyGa5pMteePp96QeuDjjqYr8Y2nfKe5cTgPHMU1W1mARFzZGf48knCWE9FaMQcTG2Fc2",
  "key42": "z71c7UsVSRbCHVjSnR8NZmVhW7qZoisziw6qPMUikhAw9gTBea6gqcEtFgQ3YSkCeVDMJiqMFUmhGWD3jDF4LQH",
  "key43": "4FYPnM4mTxZShn2Xcx1gEbW2UJJj9uBjiRzzF9xCWeRhhZFBYCo6wtADjJFY7HeFMNoje9R4VrYbhF3RCWWLfL32",
  "key44": "YdJk2o34dcPgWutwHt5MiEKZHj11Z4Hsd6UtWxFM1sKSDW7qeNH6PrT5Xbnt8BooFZA2CxC6eBy6HFH4XzwgEzk",
  "key45": "3UsTMv4m6Zeka7PjWJBfb8uS9aFRDHVjsRqttKCr7zsmg9B2J1fqLi7hEki9V1gSnBCHm6nrH7sEnBLVsRQPbcwQ",
  "key46": "2rKLZ6ZhtQaZHv5r9hbhyFcVmzhfhoo9j5udyMtrZZG8uo3v7aMa4r1MzN6fES4owUJ2HPqwwVBttb4kWvVbDQ7G",
  "key47": "2pfbYCJhF3YUfzzN1g31oq18sLVfG3tCvCCeBF7bvJTdacmmcVK6bGyEvpmnL1PKX4AbSz5KTnne7UBEedWquXWL",
  "key48": "4U1aD9bxXMr7Ph62CcnDirywvtobPcuLVMWfKFor55wwgR3he6rsD45gxDKrxCf2prUSPgS2KfcY3LswByXupwt7",
  "key49": "9V5oscfCDBt6s1UVt7pV8pd9kg1fKbtokkmR9P6sB9CJWbJ83hRa4tXf4gTLjeVShoJquHYs268cAVU7H63q5ks"
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
