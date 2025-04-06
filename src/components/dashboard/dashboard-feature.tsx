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
    "3EcusqoPzuKg8biQ7DhhHmVM9urKr3pQCTHxQazCuWcokiNpaUg76xpRqwuqB9sxnQLHoUao6kzt4VrSXRMr6jKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bquoCXtwdvTwmCTTgTc1ZvWUWUSaXeX8ZCLztPsVDjJ55YxdnVcsJiLth4AoPxZ9tXmNu5uLhJNrXT9LgaPxoDr",
  "key1": "3z26LV2f7fZizJFR4PPQxCfaPm11YYjWQeBp1WFJa1eEu9QEKWgpQa41ctyBYKvFReqtz2YYFWwcCKLQgK6gz8gf",
  "key2": "3t85LXACZ6QQHMYEoABKczPxoe7fPjT1r1zh7tf9BfjZcKTMYrn9gk3aDXP3rY1Nu2nyQ3ZPPMw4iDJxRNwGjxCZ",
  "key3": "3L2xnCw78xGzbsfJxtTsAEgPDYkpoDE4A1xgAhfQxv8DvT87Lge7ex3A4kQCZgH5St2gRUn2j6PYnS1SAb6Qdonm",
  "key4": "2Vn8npMCGTeaCTbLMVVofEojvbwtVo9gUj1UxXQujRBCLEN9EBqQS1rZVFY2q1B1A3N55ohwiC4327V5RtjRjJx2",
  "key5": "2uhprUYEsodrHSAh3M8vNDgkUVz7jMByUMtndyEhV2LiuxSqEcpSARJgnLCG3TbeoebXwzF3G2rdukwP4XMiDTXU",
  "key6": "i8UyzwAL3HqfvgzNh64Ms5kdymMnVYPou62DE6P7Ryd6aQSTtxEbMJcFfM5d9tUEGB2QEgWnSNPx4awXPS1V8Mi",
  "key7": "2PwAsgBP8y4ytGrDCLhEPSSFYbKSZvdMnnGza3P6sMYAD55PRG6ntAG7WWJfCj7EmfPBLbYGWitBmmdVzDiU6ibw",
  "key8": "4d9AS8P45qnq5SokFxyUd26EWJt9xdi5ZrW2k7GJydAytM8iWT6XUTBTHuASkS6zaotFVrgxnuKuYFUBsPDgkWJ5",
  "key9": "44w9X1ZJW9EnYray9B84oYRKp45AAHXM83BHD7FuUf2EFgYxm23n2jv7oEqsdD9GBYTqk9q9WDGyjhAwhMmMTZxg",
  "key10": "47KRsysyUm2jaTex6EY5VeHrG6ca2r8bAeAxboRfwu714qrCj9bHE277nDPTCH1jMQijmUXKMCwkgzcofntZhkAE",
  "key11": "KRMsRM6rtwvAbHyPtgJhUgXHTRXPvMhxQ2GSyBqV9VqNA8GUzHxzSZ36QE1BDsNnLxvKkVoD4KpRmB8cdSPNcMe",
  "key12": "kH5aAAvbUHjBhiVcB5Wzxnrxv9g1CTp3eBGLwZ1ujYPAzmxP8g8d2d4RD7koSE96YKd2PaU1VwYh41Z8SCwYB14",
  "key13": "5DjQffSGPMd2eirrcSk4BW8HFhybX8dmiL4MBH6LfQewJBjDkmRXEo2r972iPSBnLYowDNevwddtQnc81t3qwBUU",
  "key14": "2BxCJPkme4bbSSXKdQKrbNULqECViMMocp8nzMU3XBKxwkUBN1W4aQottAxz86Er9ZMExN7Sow1k6Ey7Dj2RWjej",
  "key15": "4Hf5LTrxii7zjsSbiVvP5PUocKCiufBetFX6tQwSa1VYUYYiNa32ia2MW3eMpT4BcEGgKutew374uDdb5aqQZXEc",
  "key16": "4hTcWrYPgpTB1C9UQrKAwyyHMuY4tYvs9XQ3cNAPMAYreW7tDxUV6MkdYyx5qcxoipgsbyx7E2Yupq9wuiyVSVmN",
  "key17": "4B5udKEdgjKcyj2Mg7dCtXTg9pxzi6tygE3PDGUguLVuMf9ragGppiPBqzXiCMqxqkRCwnGvMGFaWijvSr4hRxGV",
  "key18": "2Vu25sxTfs5t2koFspHHZHAXcAvCwiYs7Cz3tmXCkWDi2XgEKbkGQWxQiL2PX6SLb5pRBBmBHH8Bj6vUep834nN2",
  "key19": "JKTW4X7u4R3h9KDdf6KF8KRr5xhy5xSjvKWzL72wYuUyc3FRzjcarmh7ddCy116iawFphKR6r5Tvajx43D4QhFq",
  "key20": "JrqUWneHECi6z4dqhXBB5p6BHt95D1cFBsSj79Pf79j9fNsJBMJ1PuEK6WPfzfPyBbCqJhEoeNSz7xmCGE9xxiS",
  "key21": "2WrweyYJtCAkim9XbaiYJENBgDhLBRCJgvYh6LHFb7DLSiTohqYi7Wdxx2PaKdGKAyHvi1yhf6yWgHpwg7jgP6Jy",
  "key22": "3AYUaD6CESiTmtnwdH4ByqkQW7Xq6KebPAWy1HW5Tc336NzH6RgNzmKnsC2wjcXbavDNNrDgNr1D4RcmCdYcuopS",
  "key23": "5H3mv1DGmkVxLmCtnkgTGDpBGk8b8mXD8YMV8bEgGfSReBi4pxtboEkpXC32T4DWpP7SJXJi5TQK8wz8bL9PU2hw",
  "key24": "5s1AjYnhuigbCaZq9g6iNvULjpazbLjo1J7tJPufzyM7mftvSGCqv6Ras9i8EnY8VgaBdzrP6w5WDLgvxPNRz3nt",
  "key25": "3Eyuho1scPrDzsiogMMFahFxbDTfbAyCtU8ixbEX15VtDL9bDKgxBRSDSfCyu5v5tfajU1gRifUJEtbNAM6TBA2S",
  "key26": "4AA64QihE6kreCUCMzuTBmCeyWjUMqbKsonCKzeB1wvmrJyox19mfh2AipMrqfthjsHQiCU7dRGGvkXmKS5kgHnh",
  "key27": "2FUiMY8UoHSBsCxwrip7MKUdtVCHFdfVtvJQzKB7V1RfwA1E8Ge62dgEFoZZCwRBBbK95sNDgHaDyEfaS1RP4Usx"
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
