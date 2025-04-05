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
    "WFAdnLoJhhH67bVyKzSHZF1vzceTRGRg8qLxchVLkkBpXMmfVeqcL6jYEdpLS1C5jiaPTWia73zZMcAEMkZHTKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWYaPx8vAmer1RrNwUou8ErJZdmV7L1w4by9Bu77xPjcfvC6X9UtzbgVxAN6PiB8HZQB8kTBUcsH6F4n8TG2FXQ",
  "key1": "36pHusjcSaF5hA2gDj3tVW7EDdYrTKAEnJV3idAkWp33k9tG7AzErqHSgXGDbp3RiBQPKrVEKRU5fwzcUggZZeMq",
  "key2": "n8R6qGPphNKqEv6Yp9j3uN2DbAAbMUiBpj54T1UBpruEn1Cn13VX8Bgm1xhcMAd4Q3GQaCo4TMP5Age4PrWQLsx",
  "key3": "4XBraZTp9NwPDGZj3Js4T8Gnkw3SR26koqrd6WeTFyACahAAqQP8rUUsqwPW6CXzkoWEtukt4fJy5u62jWzrcihS",
  "key4": "6NKbSFWLbecXRDjp5CvzHY3JM4Ya2cF14fUomb4jzjLsvmydUWR1P9vgHgX6HLochENLEyxeNdLa3FzPW3rm3QF",
  "key5": "RoWN3ij4bLLE4YQ3XUU51Xa1JLvnYmVEfucBnnbhKZor9JiMJBEvFWb9nAXp11u5is1s5UFnTCozBa1jqBHrgnz",
  "key6": "43n9VrM9v5dC3DYHtPc2K9zPhmfsNXyDey8BKkcqQVDRsYJYEuA45psb5LDMTEh8zj5n1NbUMFG59fKXqSzEFKXv",
  "key7": "qWmBANqPwmYWXHCkKJ28AZWKmwCacgms3NToqL55eb2NMkyVSjgPuteFHmKYKiE2CuFFGzYPm6QhEteyTBtiYHt",
  "key8": "5oYu9fZSwf5E3SUbiocA7Bqfxkndbrm5v8aoNBGP237MbtGZfhiz9n4nDzcMwB1yoHXvTremGDhn8jCBdzonFfPn",
  "key9": "kRMPk56mZVMRqaUuSfq7s5JQQDdR7j93cDcS1CKgc7VJTnG2FjNLCoLxBa6bmehupHn4NoFLqPSgZ2LkoiefHmp",
  "key10": "3Ssz34QJqkXUy7Jgn8TcFmqXf5Tia1CiY3WfirdJnHdjAo9yWQ5gnWb68pDMgnpaBn4jM2aURCmyevzMBMDHmi63",
  "key11": "2brCKuJ4hdTKPSe4MxydTmrYicWxfQuTTHDV6ZrYNdbmjvdffaBM3E6Afwg2zPpRc1pPCXaefRhYb2SUBRwUe1Di",
  "key12": "5gfPs7noxGbfcAHwjdPVgDBzW9CTmPnEtv13wCFJbNhjRky654EvrgrMKLgWBQvMhtzLJMmWvkcFwonsGyp2jf6E",
  "key13": "2DHYwcwiaZ8QcSC8W36AfQAidwvnmnBCef77ZSYnqRVA4s4mP2qte38Umi7BQFJ9gXUkspKgBYFUpsdSmUqhZaG3",
  "key14": "2KCBukPdvb3Fd16o7iKYfSpQcUgDeuQqFavGvRQLbvUaTYgDT9wEb4EZotVcnaUwAjqkTLDkqwPGH3XRiBuCB5DS",
  "key15": "4ywHRZ9RRho2SUDtbRa8hJuCBcTeJx9WSL5mjmmw9A9y4JwYykCYCYi7wdC2XRdsfUoKJKuT54T8L1uxkHCdbJL8",
  "key16": "53PUpfz1wvQ7KLoxZp4JhVhtXWFhZnVpdJUJxkCjdF3toZBwEnDF52cnXKKBXfh3y73mgCrswCMaD1LuzL8473qy",
  "key17": "3rDvVqctkXZBKQyNyJAhKkFbUWsN8ySaJhEmYcXvdaYGPpFgUgxoJ22bYWJeJ3MzKFPWi9JoRFFJX7xdhFFfgXhV",
  "key18": "3XtuRCqEZ5JNFi8YJBX7XhthwjgRMWaXY9E6dhW5RiGCu8xiUeBMkD2PYgqnALmSEWrBnueQymMa1Y9tY1kJwUF1",
  "key19": "4sryy8GNHCqbbvCsUbndZ8SfDHXVBp5Mpxqefazk8x8Y4WgfjYzncYBkmDw8q4Nv7KjKjgar6HThjrS8vaYDZTcg",
  "key20": "X3UNU9a2Wq6YhKzdpcQuRodvAbw8o9ig7BWrpamxeFmMV56bZFQrYL7pmwA1rDDtHqQgptbSdvjP5KFRPPEe6B8",
  "key21": "2ATtykiyekbSCxks2qAx5vXfFT9pLytNVx8Ln1njTFC4cU6CyZWvPLUdhsuuGb7gZW6XNTindjAkCs3wwJVobm7f",
  "key22": "3S3T6oShPZbLRyYsx7PXpL8fmoP539h3UxVjv6H6AoRk6iHL6dCjnpo1oQMgM1FzdQoiphU7Ken5K5Gz65HN5iMF",
  "key23": "99e9EbrPZhSmNqqP6nVjibKiKEkAiHPmRBZ4QtwBUAMxqr7S6EJX2978gkJo4V3xyHTBmi1MXLbkV8VQZQ8ihvY",
  "key24": "5qf7GUEJaf7PjNS8baq9zuT6PrK5HWyj6r7fdP8bX4qJTy33UHHxwUxKrkNpsF2Dpyb2zKTdr6eGajKNfqmPPz8P",
  "key25": "2RecNVWh7ugF9dguxgH5qX7qdL53LF5sdyFVJyPTSm2LZfT4bti3xVFbvuQhFc3ncqWEe3zzT7inPZx3hpSjzxy7"
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
