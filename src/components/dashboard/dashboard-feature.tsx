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
    "45DtcsAGQ6ekZJkUMJU4Ckef7qPL6D2YY7QQ29tcH34jAGLbUxgM6oZLXXCik7WW8E5qKHU6fZHu9UqLNE826FJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bv7o7PeHFvRNHSzfxndKhU6om1t1P2sPGm91tUKooPHeeMM61Dfszed288ssFEHhVdKWQZ84QH2siafjvEaK49p",
  "key1": "2FEDPfqNX2YCPUUoQ82V1FTnRsKn4yubyMgntjY7iLcuXpq4h6LbJtgdGLRNzDdYDp3mhv2JjqzyQNMN4MXUGc3b",
  "key2": "4YYbkkf9wGzDxui3LLLmRJr581h2zZk3VJt2HxWDdCe2aXPRoDsDBKxnqFquzbBDrxSXEBVJey41EEKqfjh3h72L",
  "key3": "4ZTKKGQ6AkEGWUcd7J7HGcoEfHaFsHg8wrZjqEtBCXDyDVuMtDRNCaCPEDNQ34e7Y6rE4kEaMLtvvyjpXtz6ykVJ",
  "key4": "126fk2yZs3JJJLHiV29uAWwFLr7r25PHrewMLFNK5pVtV1sa4fvufqYxSxQLsAKjT8TuGt7b1hbB53TVkh2JziyH",
  "key5": "4HsNddb3AkZZ2CEToQCF2YYoJ8hxYLgi9ur5uFQcq7uiYGN6DHMVVaewEvM3L6H3PHTL1ksKbBYaxXqxzzY7DkJS",
  "key6": "5PuDvkubWLCNxLC3p2oMfgAEsM3mA5FYH5XasidVy6jEeC15GzRHXaHGcsTi1H5Qi6nBThnGRKjdnYbZDWcPzcQd",
  "key7": "YbmSM4oY2Rtpupe7akgZ5MDsUJYzLGajUSRSgT5eZ93odrUfCEHddWxqdcTeU5evFZtwWhimQuyGn8JpAF5Enyr",
  "key8": "5rnu8iFmUyzBPAYDQdS2tvFC2pxdUYAuE1WVYSehUnMasgEuoJ8oqih9SSfXBF21KdKfKiDFM8chDEfNw33GJ5R4",
  "key9": "2U7zSouev7DXBjgGagxgRDkyJSCbaS2HmwvibEstiVTWfSCi5RaS8t43xsfUMQQsdr3xD565YFVvNv9C22CvbtYX",
  "key10": "FuZTzDHSKTfUxr3nDwHxMyErqjN5NWHurKPWb5DJAZPkrQpoYxWfV7dj6YFCDUnUoAeEM3mptRhgBTwfmA22rQj",
  "key11": "4naZsACWAExEhPLQ1hK1ZSTZ98nZ6dDPmyUXY9vV4N1LfXHyLuRe7TitbohU7cyG9PHadp66T5rjqygb4JaswHvU",
  "key12": "5onD4ciTxuu3qw2JLMT2uq7CuCJgZWrkHS16QN34jJmLGwUGKQXAzWvU4Gth49AjGsz1uCySw3RjK72q8zzJLhDk",
  "key13": "2gFB8rZ6s4SdzWRQSKvwGJiGS3qMChtTHHS9YMyhkGtvYQfbFhRT9enu5YpzQy9fFudGtB71y5vRvKLNoLovotpo",
  "key14": "5KHgtksF9H51MYS8ZUh7vQTnfC9x1xe5YeiEjEwFyj6qXJyBe8ESQiaBapZBNbPzVzTBorsjXy35hQXSpjgpn1mX",
  "key15": "5nWzV2Evc3xQ5arFxddhDk3mMUddcwzGD1t81EhhC56Mv37vsuTyqdCYHrCuM33YgAJ5fkAxQw8wGFWKPF9ZdgfT",
  "key16": "5M2dzk86P2ExRxM1QjNAL5xYCmFP9z3UdvZPB4yRUiR5ce4be5UCVvSZ9ruLy2o7R3QonVXcqruCncxLfATev3qw",
  "key17": "5nzYpDZN1sLUbpBqK3ii4noASpdUxniFDZofV968VyUhbaDz97sezcD3Noms39Xw1bd9dNxnqcspcssvGyRMcJ7w",
  "key18": "31Fvmzd7KwjovWnC1wJVqBQxSnGTfoa6oVf5A2Q2pedhN4K3MAcCo3NAofuEMA5DQA2XT1d8XfNx567T8xq7cRwX",
  "key19": "5nDETFw1gfiAYQ5Jp2ib4cx41bh5GXHjbgPVWuAU85ENTYCrpGCxnLfn4xqEsCT1UT1ob1qY9m6cFthdeW7MGn3C",
  "key20": "4yGVnhFHMnmbP4civgQ1cXx4hURDHUBDKq4iAuWztq8gKgoLAN4aA47aKYB7Uve4NUY8fd3f5ijp9w36Daz5rfKc",
  "key21": "4GE9NhfXkseegsuJ5ax8rZ6bKEc8mqc53VW9XqnyQswhkXyyFt9BfxsceDEsYZkQnACsDwX26bwTaJcQem24ruwj",
  "key22": "4T8UVDVzEzB6U81zpTDnAXYW3tRrLiWRLX2oqFngc2zbP6AzpyJKjjsGo1hEZa2tAuHdRkq1BcNi5UFMJF7tBhjY",
  "key23": "Q7EfttorJUf9wFbDb49vf93HhmyrtCRTEiEfDF24EQh8oaie6SrJPdgTiP9eU3Di25vMNzMDTAmrMBrKvB5HdQy",
  "key24": "31DRMSairDHKtpvSShuXPQbEG2nUXTAXkMFyzWgYLfux85X3Wgre17MAPGrDwpTsezRFVPQGsoAZ4f8GA6VuzAYd",
  "key25": "5kHnsunxmMJ7Ds5jeCmq3eWQHxDF5LJ4hv4Ln3TBaUbvtfjZTFHM58v3eT3UURpng2LsDTQEJm2qZwocKtBzB4zM",
  "key26": "3CD816U4qHVea1eYU8Pi7A2ogLBFwy4Qq9dc7R78dgdvsCDApFPBHW4hp2w8QBi2rt2AN6wJvoBy4C25ZwRZ7suy",
  "key27": "3gmjjhweWgpiTcZQ4RGwn2H2aWLb6YyfbqebhKwrko4D11TBxTdFovbZ4YDh8MrWhgp7hBYpD8KSwedPW8NvpAH5",
  "key28": "3ErNfjSd6GSfsoSkx6rUgMwqUEiUsoaCVNRjaFmHt1zsUmJs4g8rw8AekaDUsiXZQre5cHFfo5a6PghdjPDSbPUx",
  "key29": "3GweEH5rMZQie3jJB63ES3EmBzDyLMd7MhqGFjdQf8LwjsmjuDZnQXRSajMDzropxoaVHAGcCBQLFy7yXBePsWjW",
  "key30": "2a4zDwDpXVeXLEzL8LcMHWtiPa1DfRBSvqnBcoWhEEhyDQ4WByXbNBVGm17osfgbZrMec1T9qBaLjXo1pYnGhaZj",
  "key31": "3qaxpukKBwMGh136FWnSpqzCoQN3JseGNAMVDc4PAFjutosmTMuHSQxTUsGWjZFo235m4K5QnmaT8WBrmZwvT6Zn",
  "key32": "5tzpXkjZaSTybFT1B9yoE43yK3EWZNo38nTd8hMziQFLwiq8eLxvG5B2AcsgV3S9FwirwuzQnbP9kM9C6qZ3vNG8",
  "key33": "3mZL9Hq2pDk6HGPPXeQ1TP8ApgGg3rmrVxoLaveWomZvF4eM9Nmf8NNKYENnWLPcFV7HpteAVm6DKU1Kihuc9PAj",
  "key34": "2MNrmLhrUGraCHFUJRNneDahVyjPMY8oD2iRjSf8yfXPzHkQuYZraTETtmCTq8dFgPnJwsP3DaqcaVX3FEX44WMJ",
  "key35": "2eMieLAQ2Ti6vQoseoowWckP2nDcKhyC8GZ5pU7RhDuJXeLimmp4WFGqTm3JfRpKYaaJmhv478zGy414zt9kxacG",
  "key36": "5xWBnXX2MKLuKyZudzBtWj5KV1YZUTT2mQAxP8yBLkFexfmFz4vsqSq1JN2nGRwyFbmiaU6Ym7Qp1hgrrv8r8Mkx",
  "key37": "3QNfQwMGp6iia18QhchwAui53HFMsn8WXhubj3E1qKkccHH3jqJptkUc41B9WTjKy7WFtQKHJt52UkMBGkovd7rU",
  "key38": "3QXLkE8QM2DuGDKKggeQuH3Ytbd5DE25Yj2Uche1zFsFibKTLVgd818RWd6BEEm9dMy9N4nfnuG4Mogr7sptQ6Hf"
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
