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
    "2a4WbqWw7jDFD2VAHypghV1FWSRb8cLXK8a3TGxb55SVqNFaSwECcnpoyMzkRwXRCoHxiepQyLX8oCK8KQ5MCVnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuzxYCztyWW1kqVBYJFaAob6H8D2TaPHu5FgrLTqYoiUpPvvQz5HowNWQJZLdegxgEMmNrczH2ReSWC4UrXqSz7",
  "key1": "4ypqvNpFHQJRTLPe8Fxa65ZmHazBVfuQ4fqwC6UExSivrh1JESx3vpkGEZ2HEuABkYuupKrCwhEG6RnzKrxzaWAR",
  "key2": "evSmq98CWd1Wkv3sh7AdKSLA4PgCP6NHpjgF6h8vwPkw3g99Z5TddwAUrFZuJcc92Gj59Qkdp9WQ8BGGptcq4oj",
  "key3": "2KhE3tG4yHGUTKqzKutKV34gHJBfxZpY9AbTFenHNWuKwWoUzJ5FoyUjcBQrAwotZyhhfrYCPjERbx4b6C6zs1u6",
  "key4": "5KCtnpEKnTowkbWzxvmJR334Q9RF9pEannS3wBzQnj8YpvfTcdQARmNaDw5YkaTt4eAbsaWzJ1QGCQAreVCnaZKi",
  "key5": "Zcf14S57kFYLPX9LLhHWKQ9wTAaLEWDva4a2bbMqNKqoR2iqcDgUGHCRzRCDjeH4K3sp4VitMeWu31crkXDY5zH",
  "key6": "5eLrRPtyBgK4qBkZoNbXBCbnCLvrEpSi3NR7vDZVdviTMw1yHZmxDRh8BBZJngPKsbQpssQv8DxmFvno3FEoyDNe",
  "key7": "5ndG5FVThsL6x7nAu433ju1py8JcY4opHwGwUuys3dSvSrxPSgXwt7URhSB3yfjxCux7NcaQ7zAQv3oXhr36zgRu",
  "key8": "3dJLqit45kxyym7EqHvootyxHyAY8MEFF3wyryFiee3oqhyuMShz2Cd26ri5X2XGNKDCdSDRdSbNisci866f82kF",
  "key9": "3dUc29s79Ad9ScYoRyBpBuPcraaZeKgCyKjz8BukKfNiU59epN1UDfD2WDNDfqq4KqLiMZWygjjNDcgc2dBuiKdR",
  "key10": "5Q2CEpqeHgzAPHynJr1u4iecBC8hm3nJ7Mu3QTf51oMi8tSmEoqcS8Zbr2E15HAaAQrCzSJjeFLPwgW5v2JLTCgd",
  "key11": "5hGxzt8cK2MQs1eLVpeZfn1HPr5qjgaL5qANSihFTTbjkmkYPTry2kdmGWr1sDMt1qmrM5RW189mYaAGerhS7kQr",
  "key12": "oHwVaXiieJ4Eqj5SASgstEyKuTpip5aK7s79ZWj9UKZpnRWEJiFa7p61AANpfURiSr2g1nG5TVny8GCX5ad65y1",
  "key13": "2U73uDmsG8K4SeKRAfF3bQeSSwyFoNBEtFq2dmWsTqnRRpG7HZVwYUMWbJJBSwY6Jbyhj2jJ3SF2XpM5juGQWRjW",
  "key14": "4tm77qNTWeoou6LA8dopcgoC8YVFsNdtzCrRGme8jnPZtG8QJVNsQkCXwk9dTs1oPedXuk4S1qWkve1Fh6unCgxP",
  "key15": "66cBreZ3Pt6NmrCibfg66e7fLf6fbPVEuqFd9EUS82pHxhHC73NXpMkZ7BdRTwwXtQr28hoKfbuvcoZLTnMiyxta",
  "key16": "4akqhqUCKPXKiocxov46kAS4fdy1xDaVtaYrFkVX5NJxZJsecRu6eEYsLmQ8gopb9GmgPECZrq9wLjHqsTerEShe",
  "key17": "5UyTH9Mjt5g6CScRadwdN8E9sYG8uR7epD2qifBii8dbuqJTg5PxEbRHC5XPBnHwVQJZkprBrStdsHxJozMZyKPJ",
  "key18": "FhxHysPt9RMtDHnYvxPUCTYxCwmG75Tt2gmgVEc5J8QXfJmMwQbx2EXAYxt6j4Af4MJwikhX5dW9Cmfn1yHY1v7",
  "key19": "5yRxTNFgo6STNk1Y4M9npnrJEpdaHTXYY3WDauoi4GDaHTeUNcE44XUsxKarKQnauGyxU8bqP3UoSXxzjBswDg6T",
  "key20": "3bbAt4NDV59T1teShvUnNt6XfmGEiwJsfgtLioXoj39E4W9p4BhFrdrRbS2auK1cE5vZRptnQs7RcCQEksoGxBrg",
  "key21": "4z8fVhA7qorPYGFjYfwuCvpxHSKkm78L4dWqovzCpCHbGjESx3ume3dYLzLKExYBZLC92G2ijtwxKUBHz9MqtrXF",
  "key22": "4uYPgtGUiGX8as8T4K2eNXQ5oMDsnJNt9cWtbUwp6az7tU2PUooJSuhAyVbGUfycZdx3p9UEiSkKZ2QmWozqfotE",
  "key23": "2hNUdC9zjZEB6s3xDBBSpQQkz5ipP1odHcNW3hHNrnU3yDX7H7WAKf6724eaXru38Cn5BAUTMEQfTePjw9nYzLrb",
  "key24": "eNkMz5QpmTaB1PPR8njVJRq3vs7dvHCMEJUMrtg93ShSrxAfZdTjJ9j6wyuqVBngCwd6jDCg4Ru2rppbdrKodqz",
  "key25": "4T2fGMVBriHcypynwh9paJCow4zux5zQ1WwZFZQCpJEchtUhAsaTi7CRQCe6SEbNoboGNvj5Z13c9y8Rsh9Z2dbW",
  "key26": "43gvNa2f4KN1hiQBB5FqV87zCL3TESPWfUH9w4Gacpksip9pDGsiVizopUJw2Gfs7C2i3PtM9Em9n9Lihw4yYq3j",
  "key27": "37APDxVAVa1opW8mfnE4JAFzF7NKRRsQEaVCFmqXjddT4DjDf9Pu8GsEosx4EfWvZ2vnkbQZ2rsEgucSmMtNe4yy",
  "key28": "5PZmaesXKkT9qwfxLpemtrWUnwy7sCKdjMaGu9DzVn6kx6pJ6DMQTMKpcaWHd7NDrVZbw43u5SiapUgeM38Lzn9",
  "key29": "5BvditMuZPxXE5EHB1CwKFTKq7PJcn4DDQHFXggHaZPi4gDFgh42K7NhEfQHBYRyTrahfBwdVpFqsmk8ciDNn2KJ",
  "key30": "2oXhWrRY2zYKd41gqjreJJLoxXSBm898ZVEQS8ASyr5KacwPTco1qw1T6d328jxLo6g9SejRyo8rgPMfs7B4Eycb",
  "key31": "4ahf28mERnVdSEs6JZZkYqCCDzcvAc7DzBmekuB1Ue1CqwjeGX1rWv3UGboUKE2Yz5MFw4Qx7L3ByNXFizkEgKEV",
  "key32": "66pwdA9xi7gBYzaRdV67qP31ipmkgNrvagZ8J7XToCyt4pv3K69qxT6VHjW4zR23duPxAbTwagSRTdkTzioBcBzq",
  "key33": "E2VJvRMF9oD9T3atQxcQzdVm6yXYELQZAEtNCCmUAXpMQqhJGK36YXkgkpd3u3qtxEfj6ZtjipKYJR1EYnEotoB",
  "key34": "52F4oWyQhmDYAnhJcQSsMY3DU3cKAoFF6RWtMJjGwbGwiNfpj1VvCfbbtJ6J7Sf2ZHwKuVCgQtmhAoXjtyqgjmBN",
  "key35": "2c2yVdGDePE67iDoY3q6msncFLvQSpCjxv6JFMU6KakS2HXy5MbBBf9YxbGmyBBSYXhpfu3LPDhpf4ga8TsWsEz2",
  "key36": "Vy4FWPxHr16zApjv7rW2aRXd9ejb34422SxzYAkesHhB3nRYg6UQxpLEt8pbAi4SxmUCF7J8VRvmwvLqabtPZCq",
  "key37": "4itCYTDBM1qY2YC6ddkrLhFhEK6Ex1TVkVc2sPw1kVkd7CFq8C6AWkQAvq9xXHF6JjFtGPPHxRAMMV5JbBtJGLyr",
  "key38": "4ytoyHUDNBEGbtUqMqD3ZcJN5BFMJUKrNzGcji3CZprywY3PPAP3sSLNSsZ3egybsLycaA6gkh47uLNGLaCVRScp",
  "key39": "34VGN5xGoS4vrzS8xPaSQPY5HfEzQWbRvi3DPNuRAA45YUeWVGFxHYkoD3nH6W3xAD24RsQs5PEak772ur67Q21X",
  "key40": "54YbS8SfNjaAEzKeXRvYAC8FwsfK6hZCLJHHMmmxT3uBYeMGQA4pZYXfGcEpZxHEexfLYRFgXQmdHZQyCJirMEgQ",
  "key41": "5YRFjTNTLPNV3bNyskPG4tSH5EPc4pYGGStSdtRh3NoXFyiw78XuCDkinSL7C9doVKCr3eqHFjmRKPuptekW3PDK",
  "key42": "fekQENB7Tmm7zLNMNQJ3HVf6j7mtKLMiZzbgwY5TG2ARACDix3s9pgrBxLMJfGxq4Ri28iLfs1GcbMfnnjzZfL9",
  "key43": "iFXfciAm2QWv42vW8zNZt3C59AAsUYYxZ9RPwxWeeudrVBWa6vFy1K2d3stSMKeRVBhdpsetjK7pohv4oDswGUz",
  "key44": "HWJebVRBmgPDc62kmBZKJE7syxoUP63Z9ix9V4EHYpCpEFup1LqNPXRzAdFanxxrWe4KnYReHQX6Nn5bqpFziZu"
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
