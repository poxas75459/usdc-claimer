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
    "4gtw7mc2ruDA2xZ4McS8i9khp316efg6fWWVnYTdr38WGPxoaJrVKG9y94qU6k8udCw5TZdqaPFgqp2F2zg19Nj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41jwiLFGmekfLysbY1JeAG8XbRxuUKnep4yRutF1BYhmmzxBDmU6pgQRimrKkP8JKoLXQPz3LiprdtDqa5QNGLYq",
  "key1": "5q18DAZJyF52B18kvo8T6auMK2Tmc1PgWKnqixB5sJ4dVU5omYnmfGHy3Xy7pBAFmerGECigEmiAUJSTBaGwRGH7",
  "key2": "37mb5QVKfb26Lt3SzWr9BqXpRj8sGn1b4h1XopKU3djJx8QBR9Ccn6dkraqQnzLkLHviCRw9j98ZAjKCgzpB1P2P",
  "key3": "5DZRaGrKNzhwjuerMmJeo6pviKyz1fibsAxwiAM7DABgWxYtHcsHALtrRiJBUBWyquBRTd2DrPwrTqLkBghaArrw",
  "key4": "39BgA3vJ6FYUn8R6MGL4XAa32Ws6DE3wRQSkwA2hWgV2ooK1BdfXUhXqNVtu9iTGH561SYCTJWHmCw5iD9PcaTdv",
  "key5": "5g8bxsiFJvdjUq3kWaz6uB2mm9VMYkCsPji4HYGVv3oZaPr9jDvULUY24BiJMxuA1exjppYJNmF6V8hRSFq8QtMK",
  "key6": "5EqUzRdkfn7hhHU44Ew1sg9M5BCo2wRsNVuVAuCGXZDvuF2te66Wp1AiPZvPKKpTU9Z7DsVvgvNb1UDkvVsNNgTC",
  "key7": "25t6YtynE1BWn3DJz9Au1rwJZg7PAeFH61PpNHDZwvSYSxDevEe8QrK1zKijmNYpTHiT2TXEMBKmWZuyJSr1NEjK",
  "key8": "uWop6oEkdB6GfeJvtPbUGFBx3qm56KbR5N2ZdQysKzM3xA2U3y8panZtNb8kCpVghYrDjE22MU1ai4K3wg3X8vF",
  "key9": "5FJUFriVALErhvLjmPi1nDX1V45LMqbtdYP78oCCtH1mJjFdvSQBgqfA65JgqN69V8YKYpZSDUuqSabmKqvpYnDu",
  "key10": "vv7uVHccTXiDCAJHUHWpZvsuBGXbQrFrg4HpgtXi15JFJdDhwiQRjc95s9XHv2iqiMA4u4vTKVFkhFNCxEp3fg6",
  "key11": "1h5ZVukirgfUb9fQCYTCuESsfWVRE819YwUPhhYP6kw7bJTpbKKA2k6LXrgdCpQvyKL7h8daKe7JumoZxJ4uuxu",
  "key12": "gMz5p7WJUB5x6ag2N6aA3qwSAPHNkPR6s9hQgABgZcnL4DTnKCdboepkuvHrCboNdHRS8yNMtjgBanKdcEsu4Ut",
  "key13": "4opdyAzhgUFU4us91ytNfPzivRBsiUD5eKBSfZeMzf8rU8eSEGxyBhSAGwccpAGnkWg2FEi15JrsbQKXSx1jRwLQ",
  "key14": "2SHuWHc2BbrnZRnSuJvyBysPPvCeBTzbaz4Us2MCGozARxHRyMkWiYiFFNyfeiS6hHxLnR7Z9KoDcZYfpnQDv3Sn",
  "key15": "2eaJdgg9xwkqAtd1rnXhBMazTRmeAaUo5m3b4tkAtLwWagboL4pbEEEAXEgCawZheEMKnUmdh7tXD8huYBc88fQL",
  "key16": "vUB5XP1Z4jTC5F144RhFPb3VsyyypGY4voLfomT8tnMzRb76vp61Srw9xTt6ugtfMu39JBLa9D1TzSFZMWkN2Ei",
  "key17": "2P4WQyE99AYdx9f2FJjEMUruUAdT7vi7A17AqjxFtpSbvCxgukzMMQeNV2mNziYsFyGMWq6XNSiYn7SiTWviXW9",
  "key18": "4kLPhcrEQEiArEbmwMf1BsSXLJKMQwnh2aTBUuHq28BejQutFKKDtTt572b6aCKVXVMSq8aC64aXaKoXoottijRo",
  "key19": "5sdHtt21au8gsemPBmGEF3FPZNGuY4KaXa2fuySmvMmvan2Edoh8wgrKephRt7npkby5hhhvyTt9eyAS8XRCcE3L",
  "key20": "2V2B8F7B56J9ebidejuXMbhv7Af7PqGP2RtRMRWFZrXqYBXup2Ps2W35EBpX1e2EqRj9iVVgDQZDjpTFKmJXmn9E",
  "key21": "RsAzy4GSQTe7jbqyRe6yXGvsQ1VmFeyjY8b8KPbqxoimGouZPTEm5wPPEa8pYamKWrgw6LMCJ3n6tEuVn52npM3",
  "key22": "51mP3uEkLJUx4jA3KakL6dfYDQGtHfwPzmnRw1tdiHHsG8BSTYxHBJYXkAk5Xx4VnJqwUMDTg2jwmiY47jArCoYN",
  "key23": "Hvd7SjEv1Pm7m3pofh5f6RXB85yJd3xG1XUvaBbRKo3RkTr78TUxxx8DVcx1otbqcDCDnWiwVmRKd7L9u2FhvfJ",
  "key24": "4Frm2dzoFVtVje8ZqwySzhYAMKRHaySGQe4DQMXrCstZMEmdQXLpYkSkuuJ58daqBxC7MPTd5i7Uj7RErQyQo13Q",
  "key25": "3TP9r7B9L3upHByqhEM22imvS6szYbS2rYp2xvg8bkQ4aazz3EPzBS3HsGp8dxDatmEV7kNU84QtfZtbbKiadVGB"
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
