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
    "nv6PtZrjxTvAdckMMLrG7n38kBTktsGfZ1t7zC1ChGSoRYJRFuL9x11KWiv83Q3Q43j7T4HtyaeFo41SKx31rJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmmmN1w4F3dSYxPUk8rjf6f4btG6RfdHYZbRNN2AZec2e8muSfPS6hMkGiTeoqNYPqkttJC7ptnsZZVAAEEQ23X",
  "key1": "5wVXmVGPKR88qdehqyeLuZPRcHQUkB3EKfxwJpL5ng7HiqGryhdAJN3fEJcyUJNnThzkQvtqFjgAtTP2anyhLsaW",
  "key2": "2kUUZtehstf2Huo5TtWGV63hh83qHh7giitvZjKXoWMq7QSdBYRXETdTXxVEGHsbEYfyjbhZudn7KgHkZm7kTjMx",
  "key3": "57BfJdvkvhNe83BDugH2nBUNLFVY2CGtfn2PCgrNumDwhNUGHwvBkoUpf6Xj9zZQyeKPNY7jBgPgtSM2FD4bBKx4",
  "key4": "5thZEjPhHEAfDaSv93Smbw9ZsoaqJoMaa5yJGkJPNGPwm7XBe2HJfQDzrfQXmxGySArTpFFPpFithmLhSEcci35F",
  "key5": "42sRGVN9rbZkaQxVvxhGaPcM54XsDxV81F5cQ2BPtCUUEhJaqo4yXszcbM4yCMiqzFivhvCYNKvwL1cAc3mnPcox",
  "key6": "3BRtBdq4fc3XW1dFsd9eATEToLf1zLjdjEMNQp2muvoQawkJt2CNc964HKsBWzexddudFn1PmAVmr5YaL1Pf1rbH",
  "key7": "kVq8WD6AiFXNTLietfPtXUKTBENvhyzKb6Z9xqNq928b59nHopt669JKVF2s543WgxprSh1qvphTxPStDuqNFz1",
  "key8": "27dQz4z2HSfVuQokL1z48WCpAssBRaV3wwwfsoe9EAXuaneQjTVrJaximT87tvNMSzjv7RwvyaYcNW6rMrvdozc4",
  "key9": "3YrfjXUbtR3j1gNLZdEhBkNAbya6yN6vrc38zdi11eiTLXUJKVzG13nsXyUwFcYbuQZEbBx1qsy9UMkJhEqWACHv",
  "key10": "2nmcdUe3uz2cUfqSn6Yy1Rod8F4nADgULTgzRgRSBQuJeakgVhNvkyzGLsKK6R8WwiGvyPfgEphtGPXFJw3TVAVa",
  "key11": "5Z9Xa3wRWXLXb4FvTU3t2LWbd3cBMNbsAjZoMB32MCAeY75XbK59FBoteNy96ZQb6bartK5TNCTPB2uKX2Zj6Tud",
  "key12": "Bzxv24T7YzH5zEkUEGvTHXQGzLch4avfKPHc8jKezQUGWPnS6SRWascCovZMbLhjxTvNYcWwPEMaqWWEysAZ7bd",
  "key13": "4CPA1pi2UU1UtJo1x5qdY5WaZv2KyZwbaDr2TkMScuDGZvQQ33atdvRLmhk6oZ9F2WxNhNXcpfgenoXMqdDVngeR",
  "key14": "312mcUcKHM3wiURTfvxF8SbJBDBBsCmg9r2igygoqWLrwTaCgiWgtTnH12q1H46tVhXjSyZ5Nqej4X8DeU9V5xN4",
  "key15": "2h3kb7wCuZjLFbNLKyVkd2PwWV3X7s9L3UJ21b7XFmgYwQroNs4WKZa7jkPga3gdMjBxR4VCcAUoB2g68n5nzuWZ",
  "key16": "4onjtDAyBFtcJyFW9AQMMvddq5Uw5sJ8A8btRt7uFM5nd8ctjttkd99ZJnw6j4ngj5VjpnkxG8PqFUh9zSJfMZVF",
  "key17": "4EpjcRJVbKQntWRppqwugrWzUsMgsPhNMTT6dxfLii1BvPErAd3Nv9F8SURtLi9Jf2Tz41ztVnhZS3P15KZbTGfS",
  "key18": "4xu7FE5WZFADMQWzHH2XZKCaU4ZqGVVWeAGRnNdhRDZxrzuYzvka2nhvRPQUvDPp6uwpqCJN8kERBXs68KuaFCCa",
  "key19": "5vu4H7hRD2UWN22n3SVt5Mm1We3VSaPFygzNWBGAKdgBPmrwCMaC6oSighQ3KRxv8Cpu9isSEGtZgzP4qDNVbjdE",
  "key20": "21mk7rpsCQgz3Nbk3J733tqQMJhzhW7WihhtJx7xser9fgKoGseqzP52AhBF54TimdSeSTe5CHJrRwM6oWb7hb37",
  "key21": "3BP4E8Ab9YGLpNWNVxc6o2vpfNwhVfi44Kqi2ct7vo7ud3aLAkxoEPjpeqyeDDxcFGGL95ehhNeuatdHGPwf6jwL",
  "key22": "9BHks81Puc1Bf7omsrR8e5wibZr3545HLkAJEVC1tfuqwCaGv4quoyJyFjaqGjVDLScrkWQWHYMBm8XX4WV1h4M",
  "key23": "4N31jHmBWFcnhZkmEv7ScCv1F6XwKMqqtcEEnb2rtBLAS6L736xdBuoyKurY9mTAS4Zmb82h7K3kXaaNGh66xngo",
  "key24": "5jaKRWfUxBTLuGXDufHVuVbKAiRyeEMuctCC3JntoQ21yzmawroX2AZoXTm2wHYRudukMeL8abB93kSTq9UTHG1M",
  "key25": "tX1vKAf1M8qmsaexHAoc1hDPaJfus5z3HbQ5kCL1yoQFDqeuigMjYyyLoQGsHiPzuTvLz4nvm7TjkAFbZ5EPaEJ",
  "key26": "614vLTtjx6fx14eAtMvrk1hPowBfMcyapLvgFQgBChraK6ekpCakL2U6QbEBrGo7DA4YLGseprt2jKdU6kLPZWz6",
  "key27": "dCfPQ21Y1BxCa4ktP6L7h8MKA3WE65pXfTaH8xgacoAMzPDYxKY9W9viwhq3eLoSYFf2upMA61xvQXu4zG9M6Ww",
  "key28": "39aCwKmMwD3sFjoRZZkA8ApFVndxbFCJjPD3VhL92NZY1mgJDYg3EEXzYQXYbp9d7dmG2CkpdNx3C9ntVboXnuPA",
  "key29": "4qwYKzq2e9j3puWohpTDcfnfDUhoRf87buUou5fzCfQAZugDuZQf681tiqDUtbk2GgoKibUpxNLhAjWN9Xnr4ppa",
  "key30": "yE1DgNmH3Q94UMmAacxB9XGu887yemSucBtuGH5Mk8fdxu82Y11i7Zt3zDTHkCQ5LGke6Jd3X7QQeCtkLsopjHm",
  "key31": "zmpSn4RYMPRBamBkDMD4Srt7e3ZutKBLndQXWowhpBaTf1WuieXESkMw1MgomwuNZ3FsCwQZ31WSgNUJGYvXaKv",
  "key32": "3BxUMc3PKd5nABxfz4yzX5qgdngGxoDSihyqn7BHFWKSixYhDpo7HRj3DS4LyquGxhSDYzSm2VVA4A5TNL1WAs8q",
  "key33": "5S4aADy4xsewQVMsemVqjpZxCtnXAwocbP82sGMWDnTfMBbPAmfi2mBMfDuZYF1yGeEExP444R3CyqmLkDnvMK72",
  "key34": "2Drwps15d2X6CC4MK8PNNSvp2qaeG4fS5Cd2bJdmrKZpsGSVJU5uEqR7A8htKtK7Fh3HYMMJgczMHah3eo8Ad3QF",
  "key35": "5gJL8tycB2rDu8HD8HZtocD2t6nqVZZLyiEdu2yVDABkSkFH1UoHmjGBRRLJdDVZzJnzdvyC1JymyadUPnxH32PT",
  "key36": "5oJYMQk9pNBk6gBP4XfKSh2DQUxJ4VDtukunGSvqnaaZ9xaTYHapYg4KNHHM2Y2kcLTpcCLNd7QknEQzEat5Ha8",
  "key37": "vnLNdSYFQEPCnBEemW2HEfFu1i8oHtSx8PcJH8DZEPeZHKUSRGkYorkBYPDY1gZNCTJisBhGoADyXG55cy7TiZz",
  "key38": "4EMQtVgjFyKNtg4mCvJA45DYpBnvGvjdhD823qirJFSZR2ysTG6yKCyaxxDUSykqpqtUFBhoNVMdL3kSbmeMfAa8",
  "key39": "466P5tYL6PeUzUbsAPbou1aKY1iccrV4YcjAkrpf9V9QPX3ycZ7AbKHx7pwqyeAv5jcQRRsz96v4pEQoCKBRJzdt",
  "key40": "3Pnavz5mPWKyLDHCfE7JuEMkasQrHnmgn6xhwzF7frkeynumUbr8CxmD42YrD712xQz7fj4Jw6vVqNPqtfNPEkmc",
  "key41": "4qKHsPknX23oWip9XKVHZ515YL4szCqC7qmdQNhoZjWbEaBqPFpfh2bUKh72sr9mw8CFLqh6VxbqsTeSUUJbVDU4",
  "key42": "3ZDnUyTwB5FAxXrfZxf8SageMZDRwVrP9bmpre6kdgrdiyva6ZTfNRgYTBdXuVbN1m1Yc5Ch32G2gPFfg53cqQer",
  "key43": "C8Vk6t9b5KYM38pN1jFN9iWDQiEGHxEWBMbhXtLUr44ZM4QaKoab29JZ7A7xiv84wNLUzhhWAH8n3vXVakP8BXw"
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
