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
    "4yi8rk6Ad9BPPQR9EZCBFS7oKQkZFQM4LpqdR1b7wqfiRB8zvzcfzjS8jvCdSwZdhZWqa9hzSEZQu1ugpuje2D4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwefu3F1Ae8H9PwtisXXsaKhZFauyfqP7ugqticoU9LoFNv5JiS7xwpszdu7eDHEioqPJe9jyz8vb7FjaHt8BRA",
  "key1": "L1wjGH1FoLUBQ33xdEg61gffdcv8g75penMyv5zzQjzf3tBBQq2GZNSPiGs5EJdbHEHn1uVa2Qfi4n699TszDmq",
  "key2": "2JamnGYL9Va3PwnbenxDHFuEdSLkG6cRWAnUxMpJMfMF6MLKoME8KejLmVXnAUjy8FEmJHZFaMmkTd6724k2GgfG",
  "key3": "3m4unNofBUxQAqxUeTLB2dtDQrMwNwBUrbQnCZoUY1pMay9D7NN4aqVCfmTfvq5U6uAio9M1sJ9RsJ3m7rBEXvEW",
  "key4": "5pHzDnpmjz8mtogfqZtL4oR5MxinKF4WcJWVtVQicYVFnerjDmC2LVag4ayDGPKn1meWJQkAJFzgc5HSCx3NrhVd",
  "key5": "4vzGzqBKHwq2hMxDxES8ERYeuCP8vqaqJaFon6CQQaPLBqcWmYLfvmbwV19QjmPniD9NYJKqCej2j1w4zPMMqZui",
  "key6": "2h4Ergqkb4ipsUgTCgSdWJxazJ3ccnH7cHUkSmE9sYdMZM277njCAmbcZ6eMHkzWdFwWkrhmxeoiiE2B6Ug6zhSr",
  "key7": "4xKcL53pp7WqAMSmB95MXnGsnWQYMfjCtwXpm2fypJAF26HbMC9dLAKo4ZMACgTeiHspqdrHQAUqTdMVjJUXoJS3",
  "key8": "2p8kKrxkyHNAYstvbesWtHssashbjENXmAbxxpvgnYHeibfc6RyYwMXsndgxs2tNRCHRLaUQaQ6Dv29cTPrTx4Ud",
  "key9": "5f3DNvVhRXQSCM3SxoB46SbvDSB3JiW6HKzwy9nSxvarfmR6jonDFcnQysBr3SpqFH1ppiJCY8wiGZ8yuq52SuyZ",
  "key10": "yLyR39CXGDAVAJAf3Aw8tY9cSaVt2jBJypEz7vmo3jzSmsPdnkVxb2jN9Za61NCbp6aXD2xxUy7BvacioPz3naU",
  "key11": "ZeyKJ9q6cePgfhk1vqpNqYoPijybumSkaYW2RDZjd9NWpi9TdspCFnYr7DhgPoa8oaC33nwmzb3MjF7tSkKqKGy",
  "key12": "3XyR423ZKi4c8amnhvTLgMLVVpb2RBU6rVaJ8zhoMLv4WFByZ5ggWK7ovpcd5NRk4vs4rPdm4iuCPhXtknRgBuj5",
  "key13": "2V6rPh9Rdq8jMgoDRFT9J2iSpibu7Lhcwcc5QVPYavgJriKSk3jX7fs2t6vHZj75LUJSMHiasQLTQSoenuEUmW8W",
  "key14": "24XTarUnfZRjjaXLHJAEvUYdVjwSVEBa7UPTUop4rpLzSxzKZD42AFVCjzJLGyTBnh7oEdpBGn5cd7tUmxS9kJ8k",
  "key15": "3odZkwXqfsPrFM4ev5aMBntexP28xCiEzeqfbZimKPVTiphjFtnL77WXVtEX3qpDujB5HBFKsuNTooJi7YE7KAu9",
  "key16": "2kiSTNYouMDedXysRSxMX3zcp3XkimQJ4t3GtsQYAHPcQriojHs1dKdDQAWezCKHe2v6p9pNruW9NbH2Zu5Njw2e",
  "key17": "5wz8pjvvb2seQB8T2toMaCbJd7Vs8HHXDzVagLEESYyEAN7tGdzhTCy4JJjpJEtdyGpCwUu4YLVVbCfjLbhBr8iD",
  "key18": "66hhwf9Fc5wu6WvjoVQFpjYh3wtzqZPQUP2rFeeciRo6tSk5eYHBoT3byPEhdH8k7TuKYen8oFoVPEn2E58Y5up8",
  "key19": "366Lvy42Z3wwrnpmSiAYaWkHFrgfbepG3uTgz8dzsJmgSq64gBqkfS5usyBnC1ss9dh2Fx3dfD7TP4sPiVVMaafT",
  "key20": "5bsSvFgFgwHRQWZV6aokJ3b75daE75mDp9hovntCxKSpd92MEGh8n8hh762Wkuxs1gjsDfkuojpMD6RVC4kyhokC",
  "key21": "4ELGR5L4pbXq9ywfJj3zehSpYij37QsaZFfUDrjuHFPguEuVwdiiVqBBeZnzi2qQqPt3EM2KKrmnXtjQXT3esm9s",
  "key22": "5P986dxP5iCQw46rSGEtcBLUErtnybY6XiqzfbhRRdcnS3E4omYmj74Y1jgWhzDP7LaDPfLoS3xoj5CEsPUQsFjh",
  "key23": "538EKXfXdnrQKSzzXeNpmPy3nynKguJytTjTvHJEWMgBSjZLagQ6jEAWuDMA8r57N6WoCAx2YPNiC9YUKvpp5pjM",
  "key24": "2XLdDbEqDRiY81yqesV23eqEd1cTykoqqravYSN2XTa3a2Yd5QXLTUiavnK1n1j4eviuDz32i2W8jbw5mDxs2dPb",
  "key25": "4NQfUxcohVhC6JpTHu89HtMFdYZ1VDuQtXmvSzjvtZiempfRaLnMFPa5NZR3vccGNF7HKcQCaFiHdCaF1U1N5jWp",
  "key26": "2NU1a5ZCJpENqrBsZAnS2WpX2zGukvhhUuTgJ9qLTscnLh8Ps5yg9nbkNDBmLjuEGsYgJoRqGzBsd3JofRE7pzs9",
  "key27": "wjNMzQcD9whq6aBSbs3aCCibNAf7koEJxJ2cUNsmJcKgjQ5HYQGzrABEwdHXVBGpU21ojsiX2U16ubjyCTsjnRd",
  "key28": "5F2MbFPSYk9Ze3S8RWgG523URbiAUV81rY5Jv9ZYMPu3D1QfABbdnR9fp7UD3JDHtT4FpMN2bzELHbzoUWX6RUA2",
  "key29": "25tvR4JUMcBZA5ZEYQgwpZvVA78GT9wESaVqdF1NLhzayXtQpVJv9nTeHgZCCRP1uN7ubKfX5j3NPNJj132Hx6VQ",
  "key30": "2T24AdK66HAX37NopFqiJvFGhgZeYJtYoS3gixCBffRHCQ6PuAvzP2fW1LqgThi8vYRiKARk2rUFza8T7sPVSpKC",
  "key31": "21HLWti3txKxqLfu5GwgPW5J2FEMgE6wBDDFU3dG366vDCi1stoZMKdn6PaFeiFbzE3r4hSZ34X3q3SgmxkJn9wM",
  "key32": "5sb1bCEgsiKxjurt22hi1ur3dTNjobtfQ2Sea46C5BRsEduSLSTGLbLTobMx2n6M9opDL1TTgMrToDDguNWqDoY1",
  "key33": "56YijN936LYJgycacL3dAievg2cbRtgQHPLtSjBHLfv2bbGg1HfmorBoJiKgC1PvkcuKuCZ5k1Q6vUbCBHZKniXT",
  "key34": "27KUtdUf4La1Nm1diqWDYRhKFVPLnE25hJscCzsNiA7AdbBqFnxKZU3WX4WoMUVGtzs5EgZv6iVcMFRjPBuYVQrK"
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
