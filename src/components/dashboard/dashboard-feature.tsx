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
    "4GM4NHwLyiCShXdPKWED7YHUTyTCsYmtvSq7w9XEqJPSy4VdL4Z5dghW1uVJ54uw3PUQis5BUtDWFdzgxDZHYnbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nxZwcW6jZ6SNytFjQFkvRy6LRQsqbDU7sG6J9BbPUKAb2Cdn82kBf6BdmifjZrUhFCHbDzJokRse6rSRj9cNBBs",
  "key1": "tVhajMyFeoUatYxozE4bo1gjt9kp3SuZ5SsER4ac2ZbowYwGffXNwAd5tAHwEEkLSfzvbjM1iL4TbC7j2TMTgi2",
  "key2": "w5Qwv3E58jpV95neTbMEzkmJdSk2N1FkrsVCPHubHERk5Hr8PjmiFpAhH6vsGpsH2FbCkmJydwaVwLtQzpN1GPo",
  "key3": "2xmzXjbdNbBzrLadBdRCVhvyTC3q3wAuMNMexLfuue7n73kHaDTg6Xg3jSVsr2dk8SVwbzyDoJiCFxL2CP53p7tr",
  "key4": "MSECucHCsqKtsu9Wzozr6GraM74MJWkYRJxMmA7fe1btVwvVHnkSLfHZhtUK71zoQgMG98WwCdb4XKf6qi5N7j7",
  "key5": "2Q2oNq7AdjyGwE88i8jKx1WGVJSPGuBDAaQJ4d5B12Z9RJZJMQSVdbGmYXJseYCkJkT7msBZBVEZMFxwDPeHrfDE",
  "key6": "5LdzLtmxSZTX4VkQquNH6CzGwHaHMX7bbCM9bSLaABx9JK3iCwB1BnjncVEpcZLQxVate3zpmvPYZNhuNiRajFz5",
  "key7": "m1zn5ntDtNfWNYFB7oqZ2rpHW2LpAEM2sdMewHNaefgFj7m4idJrWxhsjid5heXph2N11tJcjiuJbZqTfH2HnPj",
  "key8": "3u1oYA61hfHgaerJbfh8LCKtzrraFbur6kwQPcKkNat6jMpF1s785eNqDXN1metJfp5eJ75EvdWe3asqNYVoDGsA",
  "key9": "4qMXybGr5j2REYSGcyH6VtznH57evVfU3M9AYW3Lt8stiSdHhNdoc12Xjx1SQyBgGKuVL1GX75gwBguNUCyQ5VTs",
  "key10": "5jUuGHni8c4cvhWMDTxd13Nq1hoQNwuLkzXh5CeJqhiAoQSZLNKsiTfBEiUA5frY5jpFmPSJwKg3L2FChd86errD",
  "key11": "MJhUq4D1M6MzkCPCdAxtiDoABJELRL6yDMuXmwFZUWMQGh2Syt5kMGsGyCwdMG2BHMvNJUJjGZVSpoMsj5GzGYh",
  "key12": "127MxMHFGj9BeJrZgFHP8RjXUtTd22kwQ2isN4UrbXLgCaUUcMsWXj6vuMebqsBdAeQhggYtscUdgN4xFJR4caTc",
  "key13": "3SwzMcd8gYJN32nMFKSvsr25DezLAsk2K58Lnj1Sxqh6un3R7MaLmkcNG8sHm9obsojUkJwqyKpY63CqCKWHr2Gy",
  "key14": "2PPGkrJqWVJw19UXFZJSLMqdpGgtGunDTKCZLmfN4rNER9bwa32Cjo1yVnRrN1F52wmAdRCXPwvkpKhG7CVGMYfS",
  "key15": "2ByThRsBh5Noaj1Nzg8MXf3rMtSJzoESzY4r63nwrVCkaLGbXHgFxpKkkNLdsp9ZHYE6A6DNSDD9Tn3DFAp56ej",
  "key16": "4MbCgpGUn1g2KvUUbko6wEKQPAayWUFU7H3eqDd1PmC13D3x79dZc5iV7AeJ9vQQZqUp2WYbC7wPGbEY4xNFMvBu",
  "key17": "5ic9yfTqAbmDHjNwrshXXF4KL4YwoJE2QNLKfX1Lycc4URw3C1mQtbU5sgmC3an2i1PtHiYKSkXrXRG8eUtDNkY7",
  "key18": "yNbvJFCEBHwbrGZ65dsKw2wwj7Q37Qi9yWUMxfC3r4FDVD9dLkooMt6pdA6wrfMV5wTEzQrA1prEyfrfUSauCJN",
  "key19": "3GbeL9of1L9xrqPCmSnanCi7LWvoWAq8ptSeRUiAFsxoP1wSPicFT3zjhsp7kaCvYjLwLL5n6sz99bUv6YiTuwHe",
  "key20": "4Y14jGtwz241mb9isYJVSEnHb88fj1F9yaNSZYFRdkDo5hAFVZdXJsi7M4gRJU8F7qez3c67WVcmFUwoe9mxNJAn",
  "key21": "3HqCkseWyKwACQD7rbGaa1LbqJ59QbvbeYrVPUxanJ74zZnVUGXtxd9Ysy3LVSqojpPs8yhSyYZDgvDizbNXVsmj",
  "key22": "28VMU9kwPLPeZjmuGgvP3iNnn5xsuV9QPqkLM6MXSf7oSfdJ9WHGcoVtHscDmNe7Dd7n5p8LZvqXRsbyCuLjZPnN",
  "key23": "22Jqe1dBqa5vHzCgXv5SowsED5LAcQBGuSe8Yh8YEyUjJs1Wy6HtjacF5b94BecTee3BL4tjgbMr5TTbL4Xv9mEU",
  "key24": "4oVfwR33jC2FkZoZry7bbbH4a55q58obQMgQJdmzVgYmC1aEZogmBwwQzt5Fmz8QyzMwWv5Q7dkShuA4VdK4L6an"
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
