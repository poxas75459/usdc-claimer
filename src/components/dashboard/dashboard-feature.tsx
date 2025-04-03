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
    "41u1KQBeWa7qdVst7e917oxwF1rTcLjdpfqPRkwdWzxkkhEGKtyASNp4b4MMBcYNcpMXtdxEBNvgEaBsRn51EvmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KSgbrzrpR825n1YQZSTMpom5mwTumP4uXeLEoU87HEiBz2ZGLT1mT8aXvUUmbQ4HiqqJaWrtUXBVFyh5VUrTBwX",
  "key1": "67F1JC3YrQ8UKEABkaLuQwC6J6FoC6nenTMu1VkmSXVqaVxgZQkWh6Qhc8xf7pfCSeRXxB3vvSN1HvRvuJP9yjiE",
  "key2": "4SaKwFbTVq7XsD2KV4TJniscyrRFmcbpRv6H9oP6amQ3ZJq8P6NKJLJ2kqNhQxweJkaiwXM4jmQNTuFxeEECTNDt",
  "key3": "5osN9GSi7x8NoQu5FSNnBxx1epKTCbMSCbxVRS1z4oZ26WC6swU71VpLzhfCvqhg4JTioQiWACynqHRZ1CoGL6fW",
  "key4": "26qhUn3TQKkchCs3vwZNkumnmk2F2LKQAZGnWRBkYVtWtA8qfc9BayviGsbyowWJiWeat7LNKunY1Y3G3PmqG7eG",
  "key5": "2WTPhWGGiXzyRXBJyJLkz7Q5kwCmJYTtWCdciB1bLjRP4MCyJDkApH3KTZRP4XYAfbsvWaiAJ5axoXvwWLHgYoGr",
  "key6": "2dyefAYeSyh3e1z5nSNF4DkijNjypamyuKNh7jvApHWCh2Gjgo9Q5vHTAF1dVJdC4vGL6KjrxdpPkdvh3CWjoZEA",
  "key7": "2aU4XcgBhPnPN9eR4eAKrgMP2dBnbe7LVVkwdGSCSqaUk7rd1KjiKexBgMj4TKE8TVLRfegtQR3X6yZXDPx96R1y",
  "key8": "3w5F9TYS9z76oni23K3v7fsR9QzwANGy3uYawSwVf3BYQdLua2gzRJdDppQbjbsCiYVCuuKnpAHr6GvTmwrxMKs4",
  "key9": "2gtQNzC93PDHaoRBZfy9CfrNV5NWXyGjj2qDDBrBsQJe4Ck2UAM3T6rEhQzZjiJv3NBPwoMT1f4VDdmBJkCWsPek",
  "key10": "4ZMrb1pCmem7bh1pdEtyh8pFVxDWw49fs7bB5Zb4BPEX9Eutrx4ipsEh1pxw63vk4PJsYFxdvzpZ3q6vtSeYHcTV",
  "key11": "3xewUNPS5QUwRJBLQMZEp8DbtsUNZgRnacCtY891pUNu7Q5Bhkx6mieywLnWCZVwAxttVnCti2s2QUF7JX71xZEW",
  "key12": "3fVz5XDcs3Y2fbUo1rFNfSdL4YmytEx76UE5XQeJceY8TvtB9LkEb8jxvooUaZrEa6TrtFf9V7i7FW9oRbmEKGjX",
  "key13": "4vxhyd5NAmbM4WwjUNHfhwbauhiNe2DKQN25L88KRubqRR3osMyUa7fmJZVQCkbbN49b86nVKHkb1N1dtTP9DcD2",
  "key14": "5qcd9naELHsPVraKiTb5W4e3seknRPRdJHz64cKQS2sgYir9L886RKF1Mq4tQUyXsbRD6vWriMrhZBHGLXs64sEP",
  "key15": "285dGT7EoNdQhG8Vtafk4Pd8ZkM8BZsmbTfJqj6Y4jhFibK326oGZ45veeWaGzxwebCTV5EHBXPyPBKSHorCdykX",
  "key16": "2Abf5mYiC22vXvhYmaqhmdXWKY1X6ALVxVNP3ePwnGu4hKg91hqThqUv49WrDuG99eLZdq7f9uuR35Mty3YURg3V",
  "key17": "57LVSV8AwKnGoJjTKh1Hd7xym4rQGcGjfTh6k4H8Nzn2uhUNzbLdKRMu68YSs8FDZonYbRwkJm6vRGwXPxWtj7U2",
  "key18": "2ucSfhpReHjEgfZDW7kbDjWw7Tihkm3Q41xWmgHhPhxsShNbfqmuLSuvYaTmcCPTMrurJu8FHMGYb78HZNtDon6S",
  "key19": "3Wneo9HojUvpqmjJweCqfrWRukBbwXj6M4xcaBjrr8CjxJPLdJv3hXB4cXZWcMvejsRZgzusQPhML6GpcTnHCuy3",
  "key20": "3VuiYH9SWyJ5cJbaYvBF28Yzoq2m6xGGrsYViby3iEFfbUhKu6XwKh8gvUFzZp9wM6DS8pUiypd55qYrVyv7kh44",
  "key21": "N9pjcRcW8emgo22C2L3bwFTjje7m84r3d2QxZwuGVDfhaf7Hhttr69BqPZ9pCUtAYSwAFi4ydPUdzdUB2peemcs",
  "key22": "3MEqFiMRvbX3kxH25gQTu1zwXmuahjhFXMXRJoR5vVaBDhf6GUUHT2P5HNGNJPcv72ELyCrFaBWLcsAK34PcXiAP",
  "key23": "4QJDiNKgKWMeaFfgD8CBe7b96bDzjxSGvuNrSCVX3rp2R2eREAAP1R23nCRngVQUR4XSi54RUKiKn72BEwoc6qVG",
  "key24": "4F4mgFPvbNhGHhVfjiosy4u4R9itJpTM2dMCVABZPgTDS3Ky18gNFzr3kNqBDKcxEuptPY2TRqn1SFXbpkRnRxiP",
  "key25": "5yQNMZvH5wfo9SxzyejgdMiaL17GyUXbjzQc3xLteSCTjJ8HJmR5cWrB5zvFc5u6S3JK8U1hsvtNyTbif5f3bSs7",
  "key26": "66WqxRAwWxaVHTeDCnRzXSsXwbUYRr34kAx7psaFQNw4dWQDY1z4m9C1u6pW2xq4QzfeSXkh4WQHYteaw1XHJxuv",
  "key27": "2qXLL1pf7fRZdyxRSJYvZzVsa5zVAfSNZuNrmzRBSGXXjQ38JrjK8RNNFc7CXPQhi2VxCt3Yh7taFBwKHRLbVK3T",
  "key28": "YvRTr9bRMM9nCqoAaoP2aYZ48RfTGJ9sS8tEqKHA8Tc6CFZUkCYNcohsRi29tEQiounn29dMiXKL3ra9izY8AbC",
  "key29": "3tN7SmfQ19pw8Uc7jD9GFHuKpLb9ygvwXoJvjYoZ2u2TGFTteDVck2asg3cw4nVYn5j7Pb9q5H9WwErvipMZpsSN",
  "key30": "2ank65Bc5ZRNbQ2hfnxbPR5R4LkrehLoGJWowKPs4iQDca7PUcxpnvX7KGyjxLfKDipkiGwzVPk7An7Y9FYuBmBU",
  "key31": "4UPwUnwnpVNuZYbHnDK2RgQ36y1HHu4atu1TmRwepGQUR6EMjQdppkrbkmPeBeH75gRS2oXQLgEkDdykgos4dgnm",
  "key32": "65xryp5La1XCZh6pwvuQA7YerVkD7cEHmRrb2kLQVHGjUNpEy4cor4W4sCDo3szMEGXojhS9dH1nozpso41Lo91o",
  "key33": "3KFwXkXtgukddnENuLxLRTRJWW8XU6o8YNz59sgKWbb4WsTaBFaJ8u4KdGVWFT55kE4C3pcDp9Ube2nyFyiDHMqS",
  "key34": "475py3Q1tQRcw19jNJyQKbjHZ3zNZPLVbV3RPA3N1CBAzwhVWgxJx8te42bHsau4ynXSa1Q46KEAsUPJgG2niqb6",
  "key35": "3omENkGVvKyj9Lbpyzq46VZxFZbtbwbR1BS8LZTViv8kUaHhJrfLGUsrYfkMHsWzpxD4u9zfUubUBZK6tJU8bjNM",
  "key36": "diDELe9y3f6E94XfBRJ9rXv2ECnHpSQLkdEEgtozev6saYwhkxQwUdkcZjzLr94pikMFuoj2a9USrwiD4dH9KMi",
  "key37": "222gUTMRQafPFu3rujJebuBK45eEjWqBDvmBpJyEZWJ8NJzfd6ScrskHDV1E4fCCRKF7hc6KVJtrTL32tnR3T1gD",
  "key38": "4xVG4bgwQiRJvVgcsVnxvnj8Q29mEsVfk1MgXNzst1Ho8YqpNHsn1EQh495xCok4gEczgTsYDLRhgWAsHgs27Tbu",
  "key39": "3Axcbmn2SMy1pmJxUGWe4yekN1SPFZ7UZPhwb379e1QKPfCovDBeAvEHK8rmKtAZtuZLGuWxeD2cSyFXnpdGdyd7",
  "key40": "4W7S56SXuLWbJcdrHFETPWMSEjUCUW23M2Kb6CrHa6miyomox8WV8ZqM2Rq2bkx74C88KhUjBraZYYKheYBpwXiA",
  "key41": "wbJTAirR99mY86ekkpqhNev87eK7vPP6Yghbq8rDucj7q28uxopTL7m75tbXymnLNM7xt4FnwncsddRbJNNu4jr",
  "key42": "4YNZaxXk1Yg9B1Ab5zW7skdDfoLoPwjJTYUrJndknDMjvsMTvsSxvZfsAqtEY2SsUXiWo5xAcz61SNvbjStapUV1",
  "key43": "2kqhfZuWhDUe1Wfy9fgi7espAhVkFR9U4NFsrwtWKssUJA29rvB2Vr7o44cE6d8NF9fgkhhb45ro4zKL3HifEKRN",
  "key44": "51rmtZFGmX18QjRCc9SbcEuAJ3CrSN55xLh8scMyo4FoV4Xog5LBK4dNcphcNXMxCa1bTL19N2xVyPw55ux8E4ct",
  "key45": "qx672wxf53Ndtmqba6Gnv9LBpry4a5EeXc29K6mBS9jBwYw8ypHpyAbTGcwtedqRxwU9C7u2cCnARY8V1Nfs8gn",
  "key46": "2GfDZg8BbhpFyrvrXEL9Br3BXMFMjnGuDJ64UNKgRDNsBfKW8gjXB8619sK33dq1ebDPhVTSZdbbsYVcRApD6SXL",
  "key47": "4tcXmVGx3arRoB2K86RouJ6tZdvk4hM7uq8v366WXsYQ5xN2qKTk5cm6tZ4XBHmwXJRnsH7fnqV8zGXJT5k6E9Ey"
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
