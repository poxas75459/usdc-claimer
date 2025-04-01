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
    "4zjeEkPtoKpQjJWoMJ4NMwH1s1HhhevaxPmot5ZteLcgwUzz16EktNdNNsfYuMoi5weMRu4B5dgDRCE6brFMK2QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CWXqsuujTaxVXULe3YfbxgAppCeiDWP852rb5scnmERQFvcdg4HrzXEehJcDG59q9Lcj5iuD7UDRFMGcbbpoDET",
  "key1": "32i8v2j1pPknkYHW7g85MnsKQhKcUmEZ3YRL6F3qNb16G3MgPMVXDPh4Utq3H1gA5ZjYKb9JJDFuy5W7Mmr2mVHV",
  "key2": "57WcPTFceqQ8xf6XocVLPUbQsJXoJaub5rmjjj2sTmXMswoeHEYJqJ2hV96cpdZExDg2MLY4TFtnf76kBNKmrkxe",
  "key3": "y7sXnwwuGLCYEFAWqCKunP5fMzvTZ1gHhHXxJ11TWM145Au2o3nxTAzXcF9a3iqEnycNNKKNqDWoRxp9jrMtuMY",
  "key4": "3xuvYQwBr7GVB3iCKybdi2iasaQkeGNhRHMYc1ZewtFx8TN2kQUKWcevEprGpBLKVpPCZtFnzapiEXkCttAxdWRT",
  "key5": "28YK4h8NsymJxcS5SnGs92zauQbbReFRp9U5Jy6yp2CyW6FvEgQmCmXwbLZ93momvDrnPhe8src6Tqaog43tPpxP",
  "key6": "31PDugJRQHyw8P9nuGQXp1g1GP2hpRj48T1KejuKbsbygPJXdurmodSR9JazRhpvhY1Hry5cARiuysjzoDvguwHm",
  "key7": "2ZveNrbkq7tsKF9gQC47Qv28W7WjizujFk8znc2JoPK59M3joJu6bx2D7apXzNPnJ91PkyFyQJcdG1J1cSoDsCUH",
  "key8": "2ADb9Gev5YVtatJwfxRG9th5BGrQDBJBH4Xd1z4hac2sq8v8UdWLchXCzTZMT5iX5bJaxDBrmS7qgW3mguABJzGC",
  "key9": "9Lz8CXmyyBkEbda5Jd5A5WqQw3Y4to6U3XKMcHMXSfUb6TRretRB55khQ4cESbsyDjgoE5hQCpQM5tk83mLP5Be",
  "key10": "2zsDnHVGqVZZ5T4kgoQx8EonVA2iDLWkExUNVj2EYjFKyfVgLiyMcFFHRrxGvwDQwKzULxQ1MHd6rXWaHxugMJUS",
  "key11": "48BpsGbTmUN2EpXSbVfp4PanBXU1G1jdXn8TTzzKsaH9sFFrM4JSp3hE8TDUjvd1xWEVw4q35YyfMjKe5whVopGd",
  "key12": "3UkiMCX3xzhc5dBfLL3ncymyfXgjumn9rVRVKNDyVE6ZoDxc6yWuPsUwxvDWy9jqEgzML46TRmpMwHUEKtQuBRYd",
  "key13": "2sHazasaxs8G5VCZVohLpcJWYegH96D7RqJjrQ3CThhG7JwPbyNwirVQNa4Af3Gv5smVnjZoPAkM6EpfnxbnX7LT",
  "key14": "5LRVruDNdfFA5u488ji2B2XD8HZCPzqiW9hjTCWo5hrqZgoDU2ZaHMNGrWvFXG9BwfESt82vey567bYPKJESzQaF",
  "key15": "KgYS9mStQNeSZ2ARYQwuXW7qMc3K9q3P4Wqs8CC6vVigc2gDM4q5rooPKaP3k4ghAr9L6tZGGz5tSe25Xaxs3ad",
  "key16": "4eQD882YfpQtPeyTWnm5gy1PvvSXcGZ3zv8t5yF6imfz3HoRMMM1g4hY8RxNDXBpMgdQAjb5rfEY5Yk4mYptJvdc",
  "key17": "WkkzsFSEtT2Z4WeSk2rdqsWhrWzmk8AE5mzSvRFwYXs26yQveyzNoUY6ZMve4RwqciVBebjHR9SQ8jBsAFEoQt2",
  "key18": "SKFNpam2q1QWnH1bstZFHamJmeX1pMore92NMuLiGCB9fCceH8hX7jGLS2cRSb97kqCNnQdXBRwpmvZxcvGPNjU",
  "key19": "5EnU3Yp8EyopbdnNbKUNPhDWaiqPZ5eRFduh9WQuYLxYLzQtGH132fzmhtY8T6XmarbMqypiwVhRXtH9h7X6MkLj",
  "key20": "5WzsmmNALC5QzC3SDa88xoxU7tN13jV6Z4PTeQ97uHxXRxCwwjH6dJsa9TcRd1CxW9CsBPHXXuaQrrVyrpxXiUTy",
  "key21": "MSnU38kL5LcHRMz5MdHjBxWJPr6a7a8vbBaZeYhNbw5tnSNM2fFZj9q8phgqb2xUi8Sm1CkGSNbP6j7J26uPFiu",
  "key22": "5A4JZyouVgeq7PV9bvRnUsYrNvsNwzbaoqeCTwgbpRgzn9eaEh7pJE8uw4aH5S3q9B5ZCcUggT2YPJ8Kd9ntfnAr",
  "key23": "2cHupjm5yDEvtmuvbkCK1EPhjC8NpdCpuEtgg8mqMkxJjksNUHoujLKHEtq2eUaY6ZynUJvycwgndiTU3dNrpM9k",
  "key24": "5wSLuGevAenArNgnEPtT7e8gf4Hrcobbowh2YRReqK7roErSkbrxTToNm7WWBiDF47HWxydYWFnbEPLRj4YZ6puC",
  "key25": "22aAkViUiqCFcgWFmitvPhby3WrMrLr7P13SSqDivQYa8NLPkKwTkaUn3sxMG4SshbWikw9dp1VPrUZKeTrwSHP6",
  "key26": "2fuqb4fybwb5mGR8GNr8BKK6PGXeCmUMFxLo8TV4wUAq1uAEAvrr5Gi1nC52j5jf91utYH9zz569S1Fee32awFFs",
  "key27": "3J2LSEke1oKpH4bHrhnJjxUh3FoLqn6DR6EstCpwAf3KNooB4USwTDuJtZo1h7cJG2EifRNTB7amrrSg3AGwhB6n",
  "key28": "5ZtR7EC5jPQSDVTR5NhpDayLkBnqX9s9jxwMAtPSgGQQs1mUANpAcEZ4uYpvynB2CH7DM1rPXWC7d1zZ39TKEoB6",
  "key29": "5nxy2ForDB7YwAEjCprVyKLcdo6KGZgjnLGwRcZsraksurPqDGtBYdvhuZLixjN9eJy9od6tDzm3LCWMUzHDJWG3",
  "key30": "3hhFBiGAwGMrykWJwPpeNiugj3t7XPPKwSChkWJKZL4HpXaagQBDCxMs5Qyssvknhc1VmytnathnAp3nVK42RXas",
  "key31": "24D8YKBLA4vX7vw8xNZtQ9YXfz2QwqYChrBJPhSoNxfp5j1z2zqh1h5JsXGjLtFj4koe8dzUzR7FEAXasKYuAZVW",
  "key32": "4rqCayGLD8rrVMY1JLPXR2Qijhj8jCDEPYBV5QE5pYwiCPz7g4mRgZY4cEcJYsiP4daMSnxPd46U7S7o8TiAn6eV",
  "key33": "2tVtreVfqaNDrGu1P7PATeimuBafDrRihvFve9j9SDoZpCYNoRte6GFpCDPhEMyK9ze1wLRNEN5sSReJGotL3tXh",
  "key34": "3snANaHvf74QSs4CmZHcygjQH6rpjAhPTT17sQZf94BQ9Hw3vAEKbFw8QwH6ajAs7Ra7XpXKxAe65GRZBRj42M3x",
  "key35": "4dN1CU1jrJjnmCNfxHYSggtP8XGsJurxapEZJEvooFq9SUxi7xw6cJRMzSQKhXW2DbifTSqjD8qCg2uu6Bzq9jf8",
  "key36": "4njfpyJa3Pi8qjy2pLwxzDmvFCPdy28WB4iPNs8jpv14w9aTXB784NZe73ky8coe55hfAKGnzamfRXxVu311WGcy",
  "key37": "4dC69CmHvFQuPasBwgiGwq9cnvWqu4LRaLHiJhrAJwBkY85roMbLsx4q95wygaNK2Vv72JqmJhh34qeZYgEioQyU"
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
