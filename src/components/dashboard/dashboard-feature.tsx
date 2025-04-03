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
    "3KjMmEP9Ph8tHkxEvbBmJSCFsGPZwDaYqNLdPt7sSbWSyTA4hQUymfZxytFeaHu7MTECPsqoZqnvVAp5jyfY95iJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evZKuRPevSNzuH95s2TsGSj2SvmzFwfGCWrvDQ8hztmvxyhopUyYU4ZFAb48rLsqA2tdpAwUSC9vP72fCo7B1yi",
  "key1": "2MkFYguEJdCYnk78w3BTa9mpiLmEGa4TtsQAo6GiRWVMLfq3d91knLro6skgpPt9z71xLSa5AwCRsM8dvd3LWKce",
  "key2": "4b5orwK3qqTb4EaYDM9zNsEJnBM2y7QwMd6erhgPKDryaTyNUee9MSTQLH6eJw9VDsqd2akv7rgizsnMaoTcVTFY",
  "key3": "isZGSqQXAKNFLSE1gCiCarx26hov2X7MP5cjeggqg3TaNmPx9gT7ijjB7paTosb3u4XeE4AjJJ7cnR8kzuFowjE",
  "key4": "5Y6GvmpWZxSSuNH5pn2VV8opUydUvDuYZGT5Hu2Cs9bTbYwvCWBfvqja8nSzbRvKpddWRt9LsEYe4ML6Bp1SK7tR",
  "key5": "2GVVpwX9f94jVJbMpWpu279RNqFV8ye1HArqBNJvA6MPzHNCNJKvZdGLdMRBqUDsnrevLnNZPivJSyArCofPsrT5",
  "key6": "7KzucokPBAAhVzbcS3J1rJVJNQxkkjzEeerxzbDgWikYrwgvWN7sccosUJ665EjimoDW5em98oqhPW77j7HmPCR",
  "key7": "3rTHAM2KKs96rqDUc58uwysB498jKFUVFumYwBoVXWFsEYjA1Bh34nu7FUacGT4myaLikxGjp2MPHg54N6Hxomny",
  "key8": "23WdoTHFEL2VbhSoBphvVuZCyKhAQmQryiHn9PYiX9SLADobJq5r8kCPF4DtLMey52XrzzGqVdhCseUczd2usWPf",
  "key9": "2yTyCwHimHrJp3cK9EXgVC857p5FeXX1nfYbdGceCNYE4irzAwKU41R9cRM2v4Wh7DYTHTC377nhxcQXchrSrNsX",
  "key10": "YYZon5YdgAuhBRcxsYcHtTf8NmsmwGdMfyThDKJuyBGWvAZHQbLAFMGtFogFSTRvCwhQWZMyM3eFxR4EkN8pSfE",
  "key11": "3Rs8tfdXWLEFbCLfw3Dj54wayWok5GtPBpWT3wYhymDigSkn4x5o1Ys7BhTMyWdN3nTE2XYSoZr633zo4WAoXCnL",
  "key12": "5ubnhCTpnJmX9D9PPyyZfrYEZm4vVTyiezXu5226bezQoszGcCJC6Wi8jmCxsGfuuzniaPWY84k7KEE2D3GhDwqf",
  "key13": "EMVEKqt6XEK41W6WSYUNRWoNUsnLPkLZwoPvimDukSH4tGmPP2zpZhgMcinNFDuUiS8Y1BwmPrj9Qp3oMHfHuAm",
  "key14": "34BfCsyAVdHCdBsbsHXqtqJgFW3JcKMtbjPvCUB1STFBdzuwmR7eUJQLxapNy2HerpM4ccsbwAcDxdBh3mVfZAy5",
  "key15": "3huHx3LqkX8WhBajEhhX2bNo3jbKz77oWbTXDAgXio4n8j4zG2exSwKjtjShxtCWNvH21SMd78Nr5f7tHwcL5zcx",
  "key16": "QnDoDy61FHoWS3xEZwirGCcS3jDgzfndx6Hsea4MF6UA8qBM1hUR842M27bEuevePeQ8BjupRtauoF9pRCv85sT",
  "key17": "3ZbPNLXN1Yq7y47cfWfE71n7xe7NPsvpkAkH8XuMUidMrjPQh4X7vruHVXpTkRXKiPmzr2pKz5viYyqkQZmqo86p",
  "key18": "3REX7qgiMCVGiDAP1udg7ZT271LjeKVYK6a2ZDwwTH8RvYo9BcywL4DMJ5BsD95h7tdFfep5p1n1gWToks3MS839",
  "key19": "Cyp9dAJL9hamLKrYdsWePbzzNWE673otEAYrhmSt69YA2TaCfJDP5NhqckhiLNFa9WoNvqS3xUEpGgur7EFdkZv",
  "key20": "1uxcuDm877CUGwvXgtyxs9Kv6nHtHJsJw5AiHMCNe92xBYEhuVLH4kp71B7GhkiEyQJWMkYC49dDCCvLpYgbKVJ",
  "key21": "5UDE3AaWVtHnSFRXWamddNogbFUcWm9hakUAcMryBS8WfY9ZVZa5G8sngt3iUUS6nqgVQq2wLR4LbjuAqdaGAcM",
  "key22": "4ZoSojMNc8ak4N1XYMMUReQr7TEjNtqdgXyrFA1F2WChHnwazW7MjdUog9u2JPQCd9xeyrxJe8Vc2XrDDvF71ugT",
  "key23": "2SFKZniMVdwkcKFXgmHqfLgYYnFTNJjRAAgVti4W21Wqy5Je67VJrQkZzKvDwRv3y7i6seYtjB1KBcFCyBZj6rCR",
  "key24": "2YXjDUr69xCDYMQBt7vFWAwXToF1zXRkWDruTphBGaZWxxvdRysM92S4xVX8V9GEAZvEtuG84ziaSzPVz2qzWHQU",
  "key25": "54wt3hvpzM2E7ewbrzjVMdeEb8mp2yRmBnvmRq9NcFTZZTYsrF1Edf34r9CPzbzWaHT75eqsW4fjwY4nViRRqjBM",
  "key26": "2HUnX5TKivMg7nNHJcn1urps7XTsBpMncjtTSGRN4qAABLLKBER4YH3nc1ku9JrhZiMtp1Amutyqd5jJzFw3EHbo",
  "key27": "36TbQYj1KjkEfL5pch1NWPvS2t3FGJNNSEf8KztQGpqjGCeqFLX7asTEM5FRNaPyLB2iqT7TfTFkwfoQ21B3JtDA",
  "key28": "2Sdvn4srLhXaGBWUSr8A892KfiuThLNmzuKd3HgrZxWP9Z4q2a2Si286TzHwEiKx2AZ22QdeZxgdWxxD87qaiLZX",
  "key29": "4FvypVHk45DqAJ1F4U72fHdW8qKRjJLP5ydrLFAVhiAAzArRYK49iQ2PAhRk5LSmt2heewT3ZK3u4YQci63zpMKw",
  "key30": "2XPAshV7nRLFEtbmm3Yu3NMy4R9JBH34nwLEtgdgRPAGGvLmSmsnGMDNruLbBr9dSBZqSB8uw7V9bcXFK9d2hphb",
  "key31": "5A4TbRbP3roxJRnNp3Fu1oJeTVwCNLAjPq1VaUy9Py9JxyQrPKEMhaxnpX4HKhfrDvnQZey83c75z7YwgunpeBXs",
  "key32": "1jCug1easymBACcTVR6Cke8iDQJ5vSzjYcpuZgfUrUoXthquhdHABkfr4yCzPmXqsyibagVHB269Rwr8QZiJKAP",
  "key33": "tSWVo96r2c5nNYM5BHwUmGs2duu21wAWpayoQjdpneVRsC7VwqJh19Rfu4fW6CDjzPBm7rWS2PUcLUv6MpuKZHB",
  "key34": "3fF6byt86YCQYDgHFSS69yrUqzzsLS8BpLnU3AL8VgFaN3ERGrxSHSTtEgjDLUzSbdRynXkgAXMYXy3iC995wCwV",
  "key35": "59zhQK4x2nytGSLQPqZbeguz4B6fbgtpTeuMcgkkaeAvfMUBSNrDGhaobbwkytPAtJSaoP3KNeSqQut6Se4WXYh7",
  "key36": "UgwNsqwKC5Jiu958k8ycedC5TKW3UKtcrfPqYhVVrMeakRhPtSfjavvBCM8ThL8hd658VMLsLJjdnv18EDACHdX",
  "key37": "rbevgTZtw6pDRSRLxQsAjsZgZAUxg8R8zs4PSQxvx63q7yFwd9Lb3QzUJeDcBtQpyoKkixUCsWkpRFpe4i5R4Gm",
  "key38": "1gekpNYaS2fNtPf9RKVyJTekNJGSdyqK6nKVuHSNDDjWEY9ZhY4mxFk4jLZgX58wgXCmdDGsrtBwvmof1GTXuLv",
  "key39": "n2qmyWs5CVFyoLeCsMm8WWtQU8APdPEAgnAdbYaZGpzS5NQ6Z1qKjLbopGRMvC4emfHgYsERrUn8ZjpotB87Rjc",
  "key40": "2bXVSLCiL7yZ21FxbuftoFq8mPMrjt2QgJ1suWC1C3gyc3jLjNmeLmBw6pgkwGjoNomxEFPXJQ1VBSHT3a1EDc6r",
  "key41": "5KkXqMEg4dMFEkStt6uFGGSwDJGrphJfrG5WcsDgdAgYCe4BPsytLcKDfrUfb4CWqb4r6jBx6kgNe1Vd4CSg2F64",
  "key42": "13KpqaMzrazFf73ihsuvN49gJHrW5W4vT7saceaEyZZwfCHgT116fDWi7bXdPt3HcVw9o5cy3T3h2y7qTCsp86m",
  "key43": "5K2EXUbjEQZdEpXkMJWngVuCToBTTkBtDkDv8SXAGPgrYPnARK24BFFb6P3u4DRvxqw2CqmMgtwxqfeuq1JmobvC",
  "key44": "5eyjvontsWDQgnyZ8e1151HYZbg9tibMmTjtG8VF6pokxiQibhqRc4G3q4vEPGN4D6gqWYfFzhYYQSVmoBGcrtLt",
  "key45": "3ynes96DqAqHLGYvSeDb9YccNJJ67bjkKNzFtQWbppN2YfqgzVWDrjAXntQu2WD4qBvQqjmhPNjqVN8kKAFgLbdG",
  "key46": "52k7DbzguKd6gbD2uwEWQ8cVNANyC75MX8R7d2VVbxK7kp2SwGyq1Czoor9iV45MkThbKM4fTqCDEBF1bX5CzNgW"
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
