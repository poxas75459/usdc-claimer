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
    "3rVAhx8Qo52XeHy6aRM13pSAeuGwLtvCBd9o4h2yLwqEvGgWem3Jc9p5reFu3wCr5qiQ7haWimHhYhcQdCAPv7qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSgSkTScNTo8XdCeCPzEUPRf3EXurV33Xpr3V7dm1pFjFgcK71yKtN856mBqoQR1WGZgts13EQDTYZxbBkyVzWx",
  "key1": "Mw9dAGoALnpvNg2sW5aua7bcjivN1YQ9Gv2M9XFwmj5RthEvXT6jeQdJnpAE3xXrfHn7r7iCmTgGtqXP81MAEsR",
  "key2": "47YG6iU5kUnVdgvbKknLriVia1MmT2cQ4mVmEayEyz6vFyZvDbv5ArMXK1twctq2kNoVFYxCW4kER7DFs3jAHRdS",
  "key3": "UDmvmfX8guPhYEXEbE1Hqca7CMbi5jzKzMft4fk8BcVPEyhU3mpUBvoFa19mikzX1YSeAbUvzx68QB5MXpc4CNM",
  "key4": "38qPFdB38XiBerThKPM4CgbtRhBhsYQv1X1XL1PHG81cSHDDxNkvQGnpHERf5daqi8nYbDSpSEbJo3hRx5cxiCeN",
  "key5": "5EaBiXb4gzHat6kb7mTNcwxxs9PTi2wNzLKsJ2qYum5Roh59fvbygjUt15b24TUPVBWxaLgpMhkad474nPGh6b4o",
  "key6": "5SW5vJMLTgZG6y49eLv4GCAUwce4h4hiCfLcDRPtsuzJzXz9s1k52BxifaQYFrFUZGf3ZpFSL2YLqsts1QvhgadW",
  "key7": "57GtDey8WsS6EEaNBZAkwmdziAT1Tdb3WgjwaHC8UhAkQEPHvRL2wxSWiJeWyGULZUzcUT6KT45Kt7fVyqXRBktG",
  "key8": "5ytq8acxen9kNgCxUFs7mTzkzNChWxxu33QQ7PQJbYbwJJc3SB2Wr8sb8SzPwkFXYrg3tv6MdXwDU9PqLQ4N7bxs",
  "key9": "3jt6FRRdGsYy5AGKEPYmSGnbEkvXKfh8nNRiEB89AR9oMNmsQ72pFWCCMtBu9VuAAMrtrGjLQgcwgbbFBh9UP1fK",
  "key10": "2H1XArN6FzsHzvPPr4WdfutZo9zXHqBKpFW2kU6zfdpGQUtEaUyzn6F6VAm3cJb9YDtWwXN89AaF3gxT9BSqXJud",
  "key11": "23ZkCZijepQvb6m983iqhwqqiwF8kikKmsAZ5N9XuJ8xgnhx77eYSH1hprzdgfPY8HqEbnaNZiAeBYDTLwM9uNQ9",
  "key12": "2CSFnBqTWQUsesQcWFSRfM79o42h2B9c4gq93efQBL9foiHr7fPzn3Q68D481KXLEYZRjnX4uzSmiKPNEDMkpzfg",
  "key13": "4a8ZUNdAhUpG7JcbQp9QCRtgpQLZHb8SYuyoHXsnLwsugCNohpTq8qFiBVwjZFdYvSMkvYsFgX7fjFk3Ep5wc3xx",
  "key14": "2uYPDETsoS84aLCNmoQiVX6D39eom7j6n4mSS772DLpyBuYfbn1WZzf8T2xN2kD97KWqmVuiQgvxETpEkYjgXnch",
  "key15": "3GDWVbMAQUoYhyzjQDfnBvWgy4Y3ZwF5fpznR9fsYayiiD4Xi8nPD7VASFQpTP55DA4rpk8qsHxg2XfCewBaPVDV",
  "key16": "5bRt1N34VrDfcpfgyTGfEgymmmSC6oMRCXzoVz95HSwR5mgs1YJooM4RRBeFrAXKUSbQ5MiRM7i55EWPzquVFchj",
  "key17": "576dpdnebRYQ5ikxVZJoce8vDWUWwfnTsqZFft9BrNLZik78D2Wszs9vMFVr1D9sxtwsMj3S3jzo1r4RtcU2kLow",
  "key18": "3VWLZ6ub2W3Um6SCna5f9GxF4HqDQj8rZ5FHs2sZHefPU8achcYkrJYdmVoB9Qr8NT9vdx4sQBj1pczsVdDfnEA7",
  "key19": "4dQzVPW9Rt4aQ3bHWzGq9mjN7ygVByrk5xNiWrYYApRh3nJScJf5TfBPrdhVR9NW1RQ8anEhuzPSdW1jUbtBohJk",
  "key20": "2FqMyidjrqFiBYWs1Y7x5kP7TzAmYobTqhBE3VNw8K887UGUjWyQ6oBTBxzWUDKFY3Td1Fm21iVsKRSfKLiTxBEU",
  "key21": "26KERF7TihL3VfpXRXXqJJBqWzN4iNc9iiKLQSrDNWjmEVTU5RAVP6cfMgJwXRYZr4WF6RchDGYgBxqD63KhvTKx",
  "key22": "5ZEhqCgrAbynyWNT4eaYXWWLpypiNiR7WKRrmZ29rUu5v6RRikEvqMRFGWF14uCUQ58DD19ZAdmBZor4K6jENZVf",
  "key23": "3skiKPsoKbPpfDUXKhqdRxXpK1j9mpV83CGAxFdBFdHUKnrQMZM8W2G3DBkxY5vxZHzFJ7Zy26s22v1K3F8QHP4U",
  "key24": "66CD3CxuhL1LB8auNkWKyFjfdUfzdTMRnzYsJu8z4RXNwad6CVGSKU6knp1JrofgcLZaR1ZjpqgttZXX2kNNGf2g",
  "key25": "4i2TVyb43pQ32a453f8KVNnXoZ9BYvwbZ2iPujkHWSYd1wndV6JVVt69bm1dVk42MeoxyZEK2yj8u95EFzwEkDND",
  "key26": "K637n4TyL9LasgLEZxZejxSKCHj55UugrRmdxdY6MuRvsJg8DMdnZxcYsKMbcoxTr1MMcrNNSzR7WK7n8CDEEBC",
  "key27": "4dpSFFQ9aBaiQkgrNJoMnQzQiYFgaw5Wjx7x71fEEvXYQmUFkCacRTxeEMGKyXCaH2SLs4wU8PeLnt1QBpK2yGVr",
  "key28": "2uNLwDR7fJVAG4FDxPZTRhRB1euMxeCs8vY85ij9vhVsgysahry2MDx6grLD11CsYYnNhEQ1qdKphrdGeG5181gF",
  "key29": "3KGsw236JFXuTmZkdDhPuheAEEgcv4xgPjsFF1BFhL3f7Pay36fR9Ri4obhBc9A69JGLfpTcUWLsCRucqVnDeddP",
  "key30": "5hPeMV7x1oUL65aVREZkYFeoL35qYZgEPTYq6VCtcYUQ8bmsVtvPskxBqBGwWECJh8wFtpx8YZ3qAcgmVWtBF8Ww",
  "key31": "3a3ZkjfcnMc3unktvtGHKx2MSdSCcekqhmDfctebKoAUmXDxrKoxzXhn3UcTQXBipSduXFRzFABBNDHx9EVGcVHk",
  "key32": "2X5nrrxNpHbnWWVRA4snVoNJvgDZr82f6RZrULEeWAR6v2G9a3V8Z9E974RJcVd2y44Rssj4UQKNKAc2WBoYjEag",
  "key33": "56Hj7DMeU5TJb1YvbaHW6BDx9aT5T8Ahh4BtJtuBuTuVhgs5czK1SQXCU69H2JbgDLL9T8EoqxCN7pKueeHfktGz",
  "key34": "5xSceH3Sjo4dks3omW3CdFbP8NHieiiHgTo9LKAcYJpBMewaXYaHcCzevyXS3iLieQd4LGXYeeJebGtWuwUNLyfZ",
  "key35": "5W5BQ5mUVEq4T1BVSpRDfd2ZWDcG8gFn9khAaEjTQj7zgF1VfaesAAyLAfDAT5qKXrLQGyEfyKsDPbKoeczMjnja",
  "key36": "3wXkVu6rNvLfMmVftpzqox5s6uBumSctWwWmsmQDqt8fF6KVwSH7XCPcTyZoNHsFM1ymxtrxoiQHgdUv25JYK14Y",
  "key37": "uL7xmRqUXkfBCyjY9PrUZxgi5ddEFw6y4a5o7ZGpfugigF4MmEMjobqGpPV33K21WFeSeUNv8Cq8WjxEmGCFACY",
  "key38": "57H9Q1iRgBXV1V7HaPZNCu4nqyXsrdzmb4hHn6TVibx7Ytmdzvvwgu3YGxL8nmajP1keCMrGqw85gDCZZmRfGkR6",
  "key39": "2jcJNoBUZ9hpTmMm1ZBFs888kvxLDxDNWZjqkfMp4BJn59kVdEBL7fQ5D59uedYHyFvmr71driUq8Ug3H1XkNm7K"
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
