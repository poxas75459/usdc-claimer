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
    "4Be6KKn6K3y9Jm5q5mVgvh8ThUAHgwg7HzNR24xahUXmiNGMdTa9XGYTWvXdfPBGWSPnkNPTtprCrEjsFkX16phC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFeZB1iben8tTpFNnE5QQ8mSC19mtvESZHyANzMTAiRpToz7w2QBy5W1YgHprzwiAqxWystAgECLmfCs3RV8Y5Z",
  "key1": "ao9ZSibV6mNHdtLfZwdu6Y4Q9omHEhgQnynUzNR6wobkRyEu3qpouS9QpqAanL5ouc1qR6ebayMRhLdFSrX89ZY",
  "key2": "3y9bY6AjcB24QnLkgaybwnuAejtaDfGcYxyb1CXB6UEFSz6WNDNTNnV41esiprHwCntFUtz1uwhdYVCL3GHH5yTg",
  "key3": "4ArCYNhMm6dh848jraDRvJtiqFSjVeJ3bjxiP8GP5ojb16tnvZw4hYCX9zPYaqWWS4EzbUkukq4k2dAJgKbt7F2g",
  "key4": "5iNZRK6J4MdH9CzhHx6kMFJnrN78REU3phmaJC2WuLtbEvTBn3WB9FafLy3DKdGybncfqC4a36wcwh9kF1tHNE6c",
  "key5": "5LFUvXi1C8MF6Fhk18MNKwGTMzFsSoDacsJ4ry7d4JAG2ZVWSwLmau3KoNFf18JvhHy3h2hYcrvxTg4TFZQnkhHv",
  "key6": "2d5o7twaXa3rNHef2ezyNHv2wNutUc9yarfbFhTr5rtoHxDoZqiDBYMvM8d8fAbQ2ptb6VXpvy1CW6wQbhaHmz6m",
  "key7": "541HMZXcrs47U8PxouRoWuX6PP2czg2DMnAjwaGNMiGGWLxEjzjy6Su54RYVmYPyRfictQc1KxXoN9We8kwXnjch",
  "key8": "48TLjDMkRB9aJeRDdPhEujfAmUvqvmxiYFHEM58vMUuDM8r7qErMJfo8oAGGw44EHPY85MWq5SJt9jU1d1dCMBak",
  "key9": "26DsMZVmioD4geyGtiTHLS2jKn8jz6RLcDgFmxt3rcEw1baLRQgXAhA5nk5CKNQa8EQBHFTPzxF2AWMjUikntbaH",
  "key10": "4ZK2RedfvuBc2A4Aecy2zuziPJ81SQJ4DQ7bW1XLSGBfuiXQ3DiDuUynRnXyMTDyfvqsQnB5uq9p5yDzADPjrbF8",
  "key11": "4dxnWg596eD44xffXP7kdCQdB8sbYkRqPXifzFHko3MiJzfCtQPiD6gWX34e9TvxvHvMNpWJpBsR37vAdKhdWtmr",
  "key12": "2B781xYP7x9faGGtongHBWvnfQzEsB4GorCqE1Kk7uoct5CbJanysdJGWLLysvkcHeWvLQkMAAdWDjeiotNPb9uK",
  "key13": "MJUfmSATj1bFdavG263AbMN7CVJHpgVghhDGYjjJyerY3bBPhUNm2eDqyFZFitjsCHkZXmtihPNVDxNwPCoxcWu",
  "key14": "3jjVk22Je7CCBCqrLQCEYnTwqrzMMZdejUTjVmJprzo3wrLjkzLtNWXERLWsWXiCKvouKbBPBoBnjpP8Y3aKZAdx",
  "key15": "5kifKp9npmz9LrSJ4xSRkfDYZ8AVhtxy5JkVSyDWShhimpcvAnyR2EVtCMjdGzxLLNRd42kEWyKjL4wBNHer8Lxi",
  "key16": "5SMGUi4ygiMUcHXn6f45f9awa1SA1KAP7d59LFcFiiiFxsRmcfdVLZ9r3kD2dJKD2VdN5MxPjH9xaag8nRnabChQ",
  "key17": "2HoK3nMNhrgexo7C9eVDAgiDu1y5Bwd6sa4iVJjwwRepej4xPKwC5WhzxBEKvfVhq3KdFQyrMzvQowNZgZ4UifxE",
  "key18": "2121RawAmSQJzcYBcbhVUwkNvANi64QNN3sgghNq3tt8WnjA1SzX4ynGtxTvBw5Wn18RTQum5H5gCUbChCVB3x2y",
  "key19": "4gYSCvPxuX3CYPvMNn6UU2cjqGtgEfPKcsP6Lu3xJVb4dm7y3mqJ2hWZVBEJArpYPRe31awJHhzxuP9DJ1h9jqNJ",
  "key20": "5XDk16TXkrLYYnjf1MmzkUYobCNgVc94soAn8Bb4Hy8M3HRZjWXmyaS27Rdm4C2ZZSXhVAocBTUp3gQZ7GkBFHG8",
  "key21": "paikHK6gReVm5KP89oTPWG4EYfe2jPbNT3P8FcUiAxEBZJf5jqE3khwkHbhgWevHchfeycoiJ2GTt84ZzBvRspQ",
  "key22": "2g56GbneV4kywBEuXcjmnLbWByC4i8pnMFqhyuvyQfr5FpSo3ae1jRkhyGETNtTV97B8GZ4abbVa2MwLBBotBVjx",
  "key23": "2QR38yxaE65btojAv6pNuF3jgWN1cPuhCzsWdPRFRU5Q3PmhNSURBPdrjS32NBmbd24kiba8QC1VfBVsMpUJ2skQ",
  "key24": "7ErgYuEzrLnn9x4v2oVeHdB4iJPeiYNFVqaUepmfJnWJ7sue4rmX4ThMfkvhBRW3Lk3h8SqDBxwv7qeGRth5txe",
  "key25": "EzBXSvMdcYRguM4Ymkq8pu7gxiSsosbyaGhFYztMdr5rxjq9CtUNhk8SUNKzAzCKkhoh35dUGBJzULir4KX5VbR",
  "key26": "2uw8gUukGhLRd323SqKPN3ahADLWr5Nj21Y511jYW2dAJPL8msTrq7AvkTSaYMgt5M9f2hKHgzjJrynZ5WNthAxR",
  "key27": "4fW1t5sQQWVwVcXg4QHvapFhH6moqMfFBRy5F6Cp4gC2c8sTPrFuY3sELiTmov4tE7vPwFXDEpjdd8XP3d9Hnr3W",
  "key28": "3528PNTvWBM546oUQwA9s9zDzpkp3EH3Y8nBTt7swFRwGGCVtr3TbG4AA98YUN3TZ1Nj4HbDoPs2s8UQT2eUqqVk",
  "key29": "5xHyu7fjUS7ycDXesr8emmwCNHqgBVBh9BZxK4dvwUe9VUdGwfkSSFa5avHjJPq3Faxu5gYBR6FGvjc9Zi3awtHR",
  "key30": "PFDmDFLzxbKgFYh1ej8eczujGxomp4SGmDaMWXr3XTC59Kpdf9y6o5FKu7GtnyHk6RrxC2Ao9FtXMxu7oiq4Yqj",
  "key31": "33svYskKAA4mnXeMuvke1aoPqsLHzw461Esrvap4XL8RaLNUdqmrRYFYbGZQXR92iVLXyD3JJHYbkwNUGZGDg6Aq",
  "key32": "2DnithFCvmfKZoLjrFx9Q1MQV4iciR2P8usoaMf2uDAC5hvNhSSfKUcW6SWhbsmrAKG9Dv5Qk7X1ZEbY4wz5m9rT",
  "key33": "4TZxXMTA4b2EUJTUhFUsJ4TWKxUCfdysbgFBxtzcQdGvbohZn5wjPaiTGiDFJXBFgmnwjpLXjrswtscxqMU5SdMg",
  "key34": "4bJhu6rzFm35mEF9j8j9vZFYmCbTN8yt5cZTD1TsoJStVXJpMdYssk6G7ihmb7s1kRuELV4BWQRWFBEyUPZ1SgpL",
  "key35": "3iaQgQRxv6QF5AkdwMy6sJ9uEiAQrUxVa2ftX5Qsymr5T33mRDU7ufAZpjXNTuUpaL431s4GredPP1toMEgd7bUc",
  "key36": "2F4iFQPnoTRQpnScqXCCDpfjZWwgzpfopuE61jqsusEFtSDyUmucZa889iUhwZDd2o2F57HnWKYtrHQExJmUtUQB",
  "key37": "5uKtJR9kCgWq8X1dP93Tk46B11iq6g7CmUzXuTLuEuJGChfbVML4XqkBLLAxx1EHyj7rDSMaCr2u9F1toFWfG4YY",
  "key38": "4rnEaK9xKHotg6d1JuKurrwWTqWgphWrLNJfGWds8bihSumYXNuGc7pXMhG4S5e5GMCtMptYaWbm3jvNRvs6883r",
  "key39": "3Dd2bkn6vRwCyb4CXcF6aE1t9y328qhjw9hgZvaEfiUDsYg8TWB1TTqsKPLHFRftbRJhNTmYMHFw6ystZQjJFNDT",
  "key40": "4LM6m3d95FrbYpsZdJcErYKnrwxEazEzHxcZ3iTuMQpEzASsugGCPib2GSWoJeiBmVe5PiCQBE8d3ozZs7Kpj6Tc",
  "key41": "2Upe4GmvgNZF2xU3XMKXjiK4eKDwv9SeC1ntGmduVSmxzRFYgzPcpWfeGmagqn6WaDKu5QWAPdf1wspDXT8Bk94A",
  "key42": "2EvwFXxJwtTTHQ7ym5TbmMALPbKnTLZ6ZKKcs9TWzm6Ydm6o8ThyoEquLWEZ5yxxgiqwwCXH9fPW41JCiHJ6GZx1",
  "key43": "22LyjgPFXd7fMbb6aoF2wti87r3qyjfD4wKDe5rFzYLnzbNsYFsv9sSPR6h2gDS7vRDZFSw6TT5vaT9WjeTuezF5",
  "key44": "3vcDFeyxwbuqWZ1UBVmFdXr5MTH9Y36B9Mq46HMGpXfb2H1rAbrnXQT5JDsYZgchjU9LNTqCXTWDkDY42HQ8zv2Y",
  "key45": "4Rh8hS4RzaWpT7KsSraJeX5ozgMNw268T8L2RiY5AqJM4Ri7Y4pFb4CBUUKzjkzFfyU8Y5iYPLCiMhPdokqW2wxM"
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
