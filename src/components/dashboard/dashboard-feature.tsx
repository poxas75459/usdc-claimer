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
    "3WoNExNtzfmSXsQrGTdgo2w7RaoNU8Sc1LL9Dz1v35BzRwE7q4JHTrH436fFw5SxWdtgETp6urDziKkcJaDzdPhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEEa1j8XcTedAo1krZXPaxaEn6thx74cWM2pR2YmeADi5WJF8gG2ZWiGjDg4e4VFEWkADYCiDpLCikYGzNzzP2n",
  "key1": "3HBaKZAEKt24YjKC5gUUndC3UPPpzek9ymwuZcy5y3UHH7CVr5HY86Ka7NbsMjAFBv3Cb3KPZ8Yx81gABB63d2yx",
  "key2": "eUoE4BPrcME5MsTZ5iZonDZicTExx3pRcrAJDu6DFM3UG2y1Dp6kmscbgGCyPEbLqWTS39XPBFAjnJdj2AyUVAh",
  "key3": "2LB6uRSpXZ1V99ahebm7f7mvsH3UwCczzJmTQhsJZcQ8nu8RDJQtat4UfJd1HeDcwaRhRYuHDBhL49J9dXjWMUaT",
  "key4": "5aiTwhp9JoMonqJ5jjXJYn4RZLAVqdMpgRh6VnuuJVUq5J4zGhYGk8md6myrZ9teoEPxU99z6YYcYUGcg5iGmNF6",
  "key5": "ocWiE16yKQEM7NLJVVyZsWSoNoU9XRMQKPrKp2rpniNCUvkFzHcenwexQr55xXR3qGJye4PtNCsKc7QXgG7Zyir",
  "key6": "5wi73oouQzZXJv54cr17TebgsiZgVtYWm6d8kiLiMXfZkzFXKQwWaf2KVMSrucsYXoj5d5DEun9yJvDaQCqzk8pE",
  "key7": "hqmh55kbuBV7sAEVnTDQksRoWY6eZ384YrjYbae7VUPnu96uAtNGpoUSeuhU97JKguG4yTi2H17igfF98rmNBHW",
  "key8": "5NVao8V2F56BybBti8kQmghRKviKGVPJutuDXrm7qdkvc3KRjZ73AFtDTD9yrWnTUPjFADnQeUDJBE9sCkMVwd9B",
  "key9": "599jZBXzo9kJ3ndwWrYCJgCWDRiPnKiVbK4cR87N3Tymn7iCFPJyYpdy3WGuTjWdB9MVEqd7Bw5uQqwGb9eux8hb",
  "key10": "5uo9NhkUxzVojWFWqdb4Y4dJJqCdKbH6QkeU6Kai3pffHEnRbg9CHN1ZjNTi9HBVw7WymxvSaVG4tZ1k8qCRXbyN",
  "key11": "5fhZHXJKBu2sEDLEoyYo4jrb5oV8jVSj3TSMQEUubHjg9DKeY8xL38ouMYme7HVEzmyKi1FqgHftmRXcXa9C2Ls8",
  "key12": "3tho9YaXY9qbPhFvwiTKg6zRnsf1tgAYDYZ4t2aw5hv422YXtfVHzFjfDDsQtkiLk7eCSgRzWJBFauaiAySAj7Xv",
  "key13": "4BurYtZLiqSAMgFNeUBam1gWQ14qkvh4MPocgAXhRHLzWiP1fw1ra7F2MkYqR3KcYFuXzoAdTLKHUGSSFrpbGie3",
  "key14": "gJXu5hfcAcsqxWncaW99k2yigAhmEzhQafcuxd7qRtp4TEqATJ2XmPnVQUoHn2TMpgn6mpkkdYC5ZrQvB6Qc7XK",
  "key15": "5sDoy73nkUeqRf1CMNAjGGygstNxPbjiu728g4M4b5XJudvbVWKWp1ujfnkK12XmTd1Mh54NQGGitZwTkSuCuzgJ",
  "key16": "62xHbp8G15z3pQaEMwVcTQGkoVddVvDmLK5G3pQ5jveuBkswGXA2HiSMDC6BzwLz5TcsCfPNvn7ribLX5PfWwGSt",
  "key17": "35SZn5hpZzHbb7mJSpqaNsrZ1qBM8JV3FQv9fff3boQJVhiW94BA8EHXaitToQhrQq4jYRiWav1zNKjHZxmEHp2G",
  "key18": "3mWzdhjyUaXbvEDVvciqdXxxZ63LTDttGy4C7RJpmaZ7HSUdKx2qrQ8sNX2BsuiLg6KUiPSSfoe9V2Nb9WUezos7",
  "key19": "2w6uaagRmdc9hh1Y7bm9zpiJaUTE6zV5mFdrgmWx8VirXVC4CZEo7xCr1aaCgtPJ3Mstk8g6UmVhXxg7p2BhBKrQ",
  "key20": "XKGfXzLE2piqSf9PBTBAgks3n7on1NSv83MRYaGEmdtvyA9aYEUX9oSS41hJ5BAYSyhduwkK9ewBEGfGY8ANsJ9",
  "key21": "3MhU8XjPpAah4Q9R87TFmTQu3RCGt2Uj4X58APBK1RuVbi1N3M1RCbgPFUMKktc6gXF3RFy8gHurtEiS8qwZL7ti",
  "key22": "2oWTtj6biHBwjkDdzhBkGRkMkbKM37p51sjMQVQhaw35u6m2c9mepy4aBkjmm9z6PywkbiKguuhWwV1ZirhGqhag",
  "key23": "4BTUJfXgcDwzc8DweuXyWzBdTTtgK31RkCJcKeWn5t4EHseCPzWnNhNQWSywknPc1ZnxX6viZpuhxua75M4iEKyn",
  "key24": "5jMMd7gTUfW2NrMKygAjTgDHRrPHTwnVuMPhLH63i9VaEjKLVi2kgeynrDSjNxvj71iTRCwJrNaakepQFJL3x9c2",
  "key25": "3u2CGK4ZcmTVjMzMya6RNq7CquF7XeSFevWFwMFAxQetfRrQbbZxsFyQToGRqp8go1RpBiXxPXiurk18A2VmYZTU",
  "key26": "5GUm422y9FTVhxSr8uKi9AebjpurtvkMjgTh1NAQwGKkn8quPC2y1V31ydmwNvaHcz4cyjyyJKiBLSje6SNaqJy5",
  "key27": "3duk4u2u9k461UeFGt5RTpWJsgq6246i2JyfHwftSR1BQY3toamhvYv1AvQdedJnUPsZYQi4thH13wU39UYcAjpw",
  "key28": "5o6Kv5BsJP7L2Ty8cFqmowAzvyMk1DrtRpT7HdNGzigsLFJ37ox4qphrt11YxVHxmQPgCTBgBfBo9xh47bQf3Npf",
  "key29": "2rko9yBxR86QbyFBGKrr8hfCp69FowYi6ptUuM1r1ZP5hDCzd6CPSActvwFLRDckZxiX7u89bsgz22fPNN3wMYdC",
  "key30": "5sNJWC5pPrpCiea8T5TsBgmeEQWfeZDr7pFbgya9KDVVZ4AGwbUgrbr8J35hsEi6TrRpYuLXbwtHSK1ad8g2anMu",
  "key31": "49PWpfihRMEL1EJxxE6zn43XxM4EQnv5hYvWeq2Rxb75BET2ekV5JgXZiJ8CZ4VbM2ZP68mRAeW3c9yipLFb1gx4",
  "key32": "5FRZbFFpL3fmMFhjMZbRhL1XK5Xw5LxQtauBqyjbkeCCkG9zJobwnPADvjWhyQ424UZtWdfpWvWrHwzvV7W58W8T",
  "key33": "5QGKyzNTKDoMpwZBzk2Zz6HJuPkRbp7jcBXymJew5c2UdB3m98AXfFbiNhfqsMNsiVTwd7VhA7jNEHwLu8M4xypM",
  "key34": "4n3DcJYrjrsaeevXNiMW9FjCCHbaR48FwB9T63qHU2iJwCaRPd8tXNt8Nwrm3epYJSVaNdZ8XWTUtmWe9a17FbyA",
  "key35": "qA9cMLWc2qLGsbws5dgzX8Y8WLa4fvBxzJCzuWMt9NJ3xYvjnQX8EKH2V3yhciWrm3qXTneRSb85yneDVxMvhm8",
  "key36": "49TcNNdV9kEubSE6kkQTPc67731jRqijgRwqFDRmmbziwCzwbCMGMW4zcXFFSqJf6W4tsxCw4HdsUkWL9UVWcSRx",
  "key37": "32A7Vz3CS2BxiqAdryWkWUWGqsGzSJhPFQ3aCWTWTwzCZDQNSR3wvyXCuNYfjbshBz1TG7xSDC4hoXULgpQLK96m",
  "key38": "NkBKE5kxYyRXjKhBQ1iDvFnGgY2SigDRAwsfN7obKNKz7oJV5qGrYYUm1ruFdtCSjw5WJC1K71v8q73nDemhsbH",
  "key39": "32pXy244CWBhFauGib7QzPsFHcLyyc3kmMK1xAsseDP8MZz523X26ySKLkaoCT1PuzUh6jRixrSsKScBma793GPs",
  "key40": "3KeFmxvnkBtt6pKPfCM8F4DTzCX3gyDzJmgUn8HNgM4Jsj47RAykeokY2XoCZxuhm12wpLWUDDUV68QoMUoVmbhm",
  "key41": "5FD8jABfa2pFnJB3Nw12dWEvXDWtJZ6Dp3KKpzcfd65sg3mhGudjmrgQkUPgjH9RrT2CT8qMef2gusfT9U2Dihx1",
  "key42": "2v24hu9g28kVdY2L8pzyXs6tLGmwGnC7nGPTipJ8GQUgsMTyASQgvaprz29NRzqNhFJJgYUXGfNhNmPBeofZq6nd",
  "key43": "4RKTjyEs4Q4XNeFVtKxC2UDSv2MjRRebvqsbFTvuWZJGGX2NYkCVbvuqSqWmcRRgxMQNBE4Z9m9q4hGGx2ozfNiq"
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
