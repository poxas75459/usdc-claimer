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
    "5Nz1yGotT59oQaN7cxJdaT8TNrWgDWL5e5qA6A7eBkfgXgbve8dNYY2vQEnxY6N2dXBLB7H6jrsbzWAL5TcrG8wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Kfpm7TfPuSPiKgk38o7rCRrCseeHa2uqR4pjnLTjBF2h7Cx8DUgRgrM9kuLJeRHvLD5mGPKvHCp3bFmWzZASyP",
  "key1": "5UhLEbVkm4pWrkUHLwGreTjPAjLGCrjzzRLXqvKH5c3pCKRHzYcMTrJMxyoQeckiCBmR1SLMNSBao5XHyEdrC14s",
  "key2": "dJZvEz4pcK9sjoBt7NESxEAJ2ZBSNbh6XXnm6KiDi76zrDuSYd5jGRPVgYS1f9WvWQahmj1tpMeQdWdXEknNpUY",
  "key3": "5Dr2p7GAXAiXykybC5FYK792ZZh53uE9buZ8nuTLCMLQwowBEo97UyxXV5su2PYaZ2PDgY7JzfnPEbkVxcWqnekZ",
  "key4": "3oBGHoxdrdBTCuZNwdPy31CPX8qm4ubw37CMFMfNHxLy2jE3FcuBWVwcVLTS6RhWHBujTu446CrRUhbui6mZbEpZ",
  "key5": "66kf5exb2gVMPqKthxbyL8wNmTbKiYefyEYpc43tCD4RYN846xTrTrawTSj4F9SiPyKu61mAB349ADqWYbf2zvop",
  "key6": "3An9WQSs4DmRvBh13YGgQCLCmRa5icozCxQqdJgbtnr9L6E68M4r85fibzeJChjZCeBvaLEfHx6aeRMWFqJfBkBv",
  "key7": "4MC4rYdZRgoT6X4Rgxj8jpyUAt5csEHDjHnpLxgjkou5QBTbToQUSZx4rC23HJy4hQQMrWezdZjceuwJf3QsKMvW",
  "key8": "aKfwbD66tjFS45X3k65iUbp3MtRZNuMaADa3HnK32K7rLXVPghBViGiSVeH5auKF9CcRxgF8nhVwnRX63wVPbYY",
  "key9": "59EQoAq4tJTDDofsSdhyg7wNWBvL6Kro7FQAaiwTnJji7CQeAUREzEMQ5iwJKSext6xheE9muKoL9prJHZqmFzJL",
  "key10": "aWr5W1YvHHuTwTPtEzvLmQdeqjHXxVBq3VApDte4BMPYXHCh1UpuBLTg4YLCsvicPZKd5E1TSAAHCDfvhg73MKh",
  "key11": "8fDDMzvXKSJ8hRCg7Q3rtmXYm5J9MGZpdqaHkJNZ4KbWHEfBKLNuqCFitWE1PCZau5noGun4rTCqM18qknhug3U",
  "key12": "5D4FfH69KFfMYeopnhFAPpvdCJMDis94DiLBwg6MDTCqj5SbLdJEVKcp9gCHX16DkM4ZjZXATYUnTKViKsj2Rm3y",
  "key13": "3NLGaPyfuc8EqATT7AP8hvFMjV8TBj9mhvzaQuGCa4Vzh6it4SG4i4TGhupQKFCNdg8MBJTq1SvfE4Ts4mqNg8DW",
  "key14": "5v6zrsUHw45KrSzqhPSqXwgaJwFj921NiUWgergrzDkhpWPLgMsWZtUcy3zWmWuqTLT3thmLXZb1D9rf9QCAqffV",
  "key15": "354bU2Vxr9bZLTYywpPFmoQgdLnHsHjAxusncrZ55JPSbQV39r6Zc4HD8CumUSXTPZKn3AmBfw31W5b272KvT7WF",
  "key16": "4PeXqgDrPAr8HzMwK6zDNJPcAEhQNqFMs31pLq3vLPS4fWkCkdFv89gPpvz2aSb7FURT3grd5W4U8t2k5Le3zcvb",
  "key17": "4zJSrCV3SbqEwSJWJWhpM6dN6jfn9A6FTVbhD9g1CVJkNHksUVmrpZeFgLHG9kbEsbtBDxUzQTnzhfQW7BUtVeDa",
  "key18": "56WAJZxDjBJ7gc7R38WctnctskKFhgJHia5YabzfmZqM7aGag7jtKaFLvMNfb4zozPFvSxGXqbY9ueD3f41LCNnt",
  "key19": "5W99KMCQGecv7yuhw5jnQvJsFLXAkJLmv9h6q2xJRThpMni34znTJ4aQBDmncj1y5afLddrBDNsU6xmvsh6ZDkwx",
  "key20": "MV9FCutrsK9M9Qx3i9eAuvLvz67WxaJuKvNyr3aUGfmY8zCgYG3NkfxAjEnNfRrkGHkQxnHQwnzEpgsmXSdzYxt",
  "key21": "4BsDsBhdk8f4ph7PGLjwgMoVPojzTxkr98JcVprwJtLGNreaGpV5TCibyta16nrAcbdMxK4ekuw7Le24cadfzubr",
  "key22": "2UCz7Yb1JhtjbYAo7vDkToAc8MAUtw7mmXvnx4cr4o8MmRZFBrvMfBqXM5jLpQVdd9qcrFmY4ahwEG3FSh5jCzKs",
  "key23": "3e8tdtawWkzuGTZnJh9efpCsgKL4vUBrvKgW4387aVXCZMbXKJWsH8dri44Pti7ZeP6CUM8iqsGQ5wu69KweueU1",
  "key24": "jTGFBj3ht7i7zbjAiBLo2y1r1FtYekD2S5uVHtXRjsV1ss56mQHFWvVZ5QnVAhUfTFSuCd4pnefYiRDGgcEmgCP",
  "key25": "5jedJBvuR6ESJ6dqwvuhZSYg2fxquFUB9dxNhRkucUGs2x7HDA2ur7VXzV41vnhxgxv3eod3h6MFA8w8fyuMx9sf",
  "key26": "5anJU8KGvwkfVQDaLEFJkkkKs5omoZuRyYFZNBvh4uGskMe38Aq7Ziw8YWnYd4WhAtcFqnpe9iK4828ZdEJCve8j",
  "key27": "59mAHdUC4HedYgMQDg6asXgMWETeTAw4B6sJRf2ApkL2ENCNCy1GmkgMWp6AWSW9L18jVvHiPF6qM5hCYVaUfFpK",
  "key28": "5ZjN2rmgqj4J1L86huSEy1q8i4pHX7vgAhFTLR2XMLxpjodEB4ufcjPyWjMB1CVZyXeh5zgmuL7jpbrZUB9V2wEP",
  "key29": "58AKLYkTX4wvc44ndJJsVHJNM6orVwLwDVt9o8XKuDdLHyeCaxysXb2TVLEmW7RdtN4y7ngUgefvco2nTce7rTQ",
  "key30": "89YPxRxp956ETrNf3y1wf5Svd2k7s6roypj5Pv6dDFzEfmS5fAuDatxsaQ27vUDyuHbbCCNkV7BZyp668QUXwME",
  "key31": "3XPgm3tvbAW83m8yp3Qnfkbz3fDSrqj5JN9ka3cPJtzkb9YT6Vcw16uQr7Xv3mRBnUn7fGq7AkSJ1288raP4pVvo",
  "key32": "23X4X84CZCFtBv21yfpa6ERx5XKzKYL18btaWWmcs4pCkMomsGu39dmUYZF43Lfj31V9UTZt1xMcUQQKbnw55d5X",
  "key33": "5WDo5oGFBWgS3GSbop5Xj99wfJwC5dxJFpb6ge3GniCipEMoRA55SYEuSRpzKaCHeetbRzJEQnWiScpFYYe8MFge",
  "key34": "3zbgebMuqQpJFLKphWTKvAqgkuSAV8eLqXfYaCmfBde5i8dfHbb3YkyBun42p1XRKSZjUoQRjCtbLjsrCgtSZkCE",
  "key35": "5eXUNZU8V4pNsFsymVcT3jzFFXHRBrXtdVpqgK44aiwiLEQdDDMm5E4poz73GJAJrRYiaSdhWCMf1kk6gjP1KRGX",
  "key36": "hhJqrnyKgwwEBFnKvQkWz53c7fP1151RnDRMG1hSqcPnedkd7cwcakRse2Du7URQ6FZMwjrjYc72UTkVWLTcJ8T",
  "key37": "7wo7qsgUYhWVmcy2mph5jfZsbastXDWdArRNC6gZpi86w5AvxtBnjnK4Wxampzhckg325CBrgx4tWXv4eXJ2YFL",
  "key38": "5zz3Pjg9N9sqJ46MA4Ck4FmBsjEqMGoZekkT6ZUKLjrT85RTW1EGsAWp2Df8fa7QtLn9TE2wuqbV7pap9SMTL5q8",
  "key39": "3Z2daCAviLWLrxkWePDCfEXqTz6M1AdV3bM3sQ5vU1qwRJoeL7DnFNqLFVGCWbfUsQ7vRoAk5tZeb8UQxpr48oFV"
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
