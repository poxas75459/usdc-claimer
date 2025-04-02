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
    "2L2bWs3Hd7CAZRf9vtR6xA3cVxjCvuAtsgfF71jF4TnoKRnfnFwEfbVKM3YdvJedNwZaL5YYdZRi3JBUVLkFeKe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrjTiE4cwcpuLC2dczFskG885MXjfrCUAVMS7mqbKxTyDj1KfkjGTBa5U5ZEknLYj3eLhLhpEUQ2QiZfWjvCu51",
  "key1": "nzfNbyrY5jXK5ZeBNGM6n5A3MT8ekHb9wnUz9W3zKRtnB5rL4jyoHjuQ45yMMMcV2FvsPFioF836qeEgj37Zo9Y",
  "key2": "3ZPn5YAopKsRdSMV88tqYHX5GgTbwkQnWagbR5F8bvzrQQq3wJzK4g4kUUoMy1S2RE71PiFHbSRxUFwCrDDtmuPv",
  "key3": "5nuHvN1wwfyVB6YFBfj9PePD7XVjZB4yBZwmQaSsbft2JFua4iD3vAQwthuWTQBZuPvHf9Vh74BmGwqbk2PC2MkU",
  "key4": "5cEh8c1YZHZoUZiH9zcF1eZ6FKjr73bX1jEzTvPpq9KkYhFK17MzMsbYfCssTsTqW4V4ygXLbsAamrnvzhhrWNK8",
  "key5": "Xuz1Fv8ZtFb1Vmw3jRdyJR5tkNDUqBxQERgms3qJqbCx3wLacNtji1EzkW7MA1VbFLVBMFEueWLCWaamsATRvci",
  "key6": "3afGqETicTHLLL5iBUaqf9VSUxf4o6k34m6aX9MkXeSfwarc3ppNBSHhwpi1pda2b2WTboNt5yiA7MQaNtHZnv6X",
  "key7": "3V2AkfFbQMHiXjBKggLjE2ydifyRotmV1gZsQWFVdft6ymJLxsBhmeGaAPs6XLhqCEf1UVCAQdbTY3j2otg6mkmC",
  "key8": "V9M8p1hve1PMvAkDgPSFcNSZKSrN4jzBxdGUzwdATbXAZNQUqCYCd1s8hdgTKCSVeUuhM3TmRh5oa3tWeKosXhW",
  "key9": "2Z8e6EqfrK7VAdss2sGqt3Dbko3BweM9doDcXbCzKm2UwfrriPFB9i9TGCSgLohxGQka4i7F4eAExGDEuME3KRDx",
  "key10": "24NNx31WEeB66iEDSvSqbhFKuaXQ5sZChBFBVr4cG6nXiv3fmhtEogbJf1j1YU7DmGomqrdtpC5S2MGg1rKUF8AC",
  "key11": "5SGY45qocQRgnreD5mHC5yCZCn7nNFRn5NDL2kpR5KWzJGp1gxbBEsL4N5ZFPmNt86Su82xfsZaJPMWb2uw8688X",
  "key12": "4bUh66thhQfr99iNQ69jSufYNw8PQE2Ae9jMLnRZ6JKQq58h7As6bDR6iBbJC9mapcJsY8585KEUQLQjV5VDsGLS",
  "key13": "4y4Y5xwMS1P66sM4XzwpECkw1A7QGeQKjzcS6iKo9KiYpARNHQVE7sM3MVE3a7cxwJwhF6JRMHqoZW8S4cbfwJxD",
  "key14": "enam6UNC9DUBijaMjABAqm4A6DFsBuCab1dV1xJDJtEXJUCRqZ9r4DNpTsiac4RYng2fsqeCzzKSRPnezGFBR7J",
  "key15": "3mzCAr89ST2eN4H8H9usCab2AaGUMJU2PonSckLa3two6UNi3QSKZQThdu7hcoCqU3y8teWAGMbxJRPaoPaRNXQT",
  "key16": "3VXQ5ojp2YAnyWE6SLhPwhMLNFtQMk2qfzqqw5V3xE3TQ7YsY8AH7R9guTywzZn5hkCsRBtFBGd77khDLyvWcpEb",
  "key17": "5gbm4pSYv2rFdbxfxNB66ukHZmv3r8XaEHhXFM1YHRueEcseNPqNi8BoLHb42CFWv8VxbfNpFrfytmFqfQqGi6n9",
  "key18": "4Yw1DmeYVMnhhTQWUeiWobRmVJEdxfD3H7yPZBGaAtfP4U121BVZzWprP1atcNzbAHvgvKd9moTzgy1K9EqFdxdD",
  "key19": "55FmxxVGL5fKAELkrSXgRqhHDXMgp6kdfmcq4ZCzg7QHUcwiCrS45mBr6YWQRTwhi41NBM4qNv7YCe9xZJVXvzVj",
  "key20": "kurSCibd3Rmb2FBMwWCXKfFNBb2nTwSzxScVYTzHyGH5aw429Rgu1EuQWXCmt8599hfRVPGfVrNVtRWRjvBn9zt",
  "key21": "3s4XLM59AGxwopPc82mtecGsNVB5CKBs1mdYhbxAJ2kNpncF8yx4z6FyGkMk6qYppq36Y1aRXiTnpyB4S1pZNB2t",
  "key22": "2o9Exoy7P5oUjXywd5KtDqpgVunitymtWuYNPtoKfhdXPHfZv4fearvLJzCYDLCS9pHBaHZ22vdh1UrBZU7MAqte",
  "key23": "2mSYVRhkvsAWth85hTD6b9UgY6cBh7sRq6QLMPXzbzNtQW9hEDTeGmuVLM8yp6oF63GysqoCePN8DWcUwg7igBet",
  "key24": "2KTtkBggFcURcmXte1wMdV8CkhUcDEvvJT5JYn8TtFx2nrP2gqF4SrdjhCc8y8QLz5HrPWq3gHYkVYcYc5qmgKHf",
  "key25": "3qFXkAUL6Wxf2apmf9VdGBXHHbi5QBKaQaw5bD5UMwSXRxFdoBoFi9eY6gjb8JT4yBcL42ukbViseU3hyMWTKMK9",
  "key26": "5jfXi45etU6qb9Bfe1eUDJff5pfLscz3JxM6hQvx8NV6PH2WFqM53a5bym5EXrEZiDgwcczgmjyXac95QFM6ryTH",
  "key27": "4Ajd5d8X7X3tfn5S6WSc8EiPPLkEaQKfK9ifyAizDZz6eGRNQuYfVqtDtgDpJoCPLfQ1oBYYR7vnxfWPRthvfxuL",
  "key28": "3CFX4gVAVQqhhiV3cyoXdC18hGHtSccLDf3TQNppy9gJm9DWwJV59WHNKjBaUDXRxbjCzqr5nfTbpqR6zc2pjVQB",
  "key29": "4YaUpDNgmq4HwWPjh2fbxjrUeH1vUA9ZrNV6LJ7vKwqJvvBvadvQYZptxH44EiVNouEjviC1avmYv82QiakaPa3w",
  "key30": "5BzSvDxZX8fkJKQz1qQxtKzW64UzZPK1VGoPBfSomRsd7BAL9vE4gNeiyeEmj7chyfpfcdWtQc8DnMXvhEifuUa5",
  "key31": "v3ivKTr1Y8oBc6u6nhEKhLXdPJJzF1jbLofHx6X9HYDxnWg6xHCR8qzLSS7twW3FfJqpwvNygPYjFCCDQhPBvpv",
  "key32": "56cmi3RxAUk4aP59WwMtsCL4mQwmKBopaf4MQU9KHXX9ZB1xz4g2QBGXvWakSD7BTp2NdtvLfidbgWDcanmoYTDJ",
  "key33": "2ZwYsK5FXHbBHsF2yXVTJcspXHhcjJzpZrWLavjnQVoQG6Ro4FrTVGcKNrNnPkPGZ6zcEk7vBaPc35hrAHMBVxbe",
  "key34": "52QUamrjNAx998XTEQiTUm7SZdeCaKWSvkByjbu91CGgCb2XYX64haUHLJ4fxdZwsX3J1hxG3PHtgcqS4zqziQ7x",
  "key35": "3jgyxon3KaYN6TFoV7fRpBb2fh2QBFSkNdPgqEzxSsVGuyftoudQnjc7w1yfR19So8p6SCvhhiUTmSZe761eSM1S",
  "key36": "4qk689YxFTNfCmpouh3t9QzjgAHCpb4tBkw8taqShXHLULiG9MmLe5dfnx1tDxhpcJPMPrnAHPLQfem6vUNr3cw2",
  "key37": "Lybh5CvrvvawgxPLC7yotaojthkXdyJFyy7Bzup1SSZUdKmB9DpNJxEmM1SYDjTTnAadJNdG4doqv4krWgoogjM",
  "key38": "5KLyJSBhTZL8DsoXFRNQDRn78rYtHqZo5rJ8TV3gtiaa8YWcZmK81HVtSt1V7YwrUpfVbV4DpBGCjq8YHPywtuv7",
  "key39": "5utQvHM2Gyogjv5ZrEP6yr9L8r3xi2QeC7NJ3XAZwjVJKmcwwbpftmFueoYzQY8mf9dupdhcR2VZwygH1ZycMTiX",
  "key40": "3R5PhXJDpbdnsQ99hn2VVUKguq5NVbbiFLcRwRTtcWkUPv1b3SctDyfFvYBNuH24n7tdFZ15hkPEX9oXKHQ9c8FE",
  "key41": "AY1WZaVfWsEo7AcuEdwsJesh4rbVVtS39Be4HZUd1iUiuApabs69uVGTw6xoarYyM1GzD8VgZqfsRpjo7ERfSwp",
  "key42": "2hZLDtUZYaktZy87McZac6xA4h12b2c2toPcDBNHJsyLp7vwuM6EZCxKZRCcPz3c2f8uRbrMWP9HjtQK3isaWZtR",
  "key43": "516EWbL6CVeEhWknrMPrMEhepW31XGn6WvP3GQLo4sXqciW85Pg6rehDXLqRw2cxqSMs6zUjsQz9p7FeSzxwQmke",
  "key44": "2SgT5KLYtX2RpS8ATwdwfnZzJBhiazUx8EuSmPmWcEPNmcnQWnLkqBVVgwUCbnN7npFtKmHDrhzkvX3bp7kReokq",
  "key45": "2SYCVfzBkydNRSyNa4rsT9tH4W1yaa5U2GfYFJiPvsd2MJ4aHQAap2i6hGaLEFBccV84cBHH7Mmo2SVP1GN1C88D",
  "key46": "4i2aTfKvhiy2W4YB7V2scYUjp3UToBQPfmBdmxH9ZLBEa2qtxv2Lx8o4Dr6vuWPomN2rtngyGWG8zQfa5sK3mYSj",
  "key47": "21sUMqE2fStFiJ1pChB2tfyKwcAwmCFP3gcbYRgupXo8rbCvxuknHGG6myRHbRCTXt8nQag6nXxKvvVqkXJ7QND1",
  "key48": "5RgfoP7i7DwsCsjzsbjWy61UpEMHA9RRkdvcQxKFGEqFovcARZrTBi1ZP2EPARejaQVZyyeEHbSVNFLvW8EvoP9F"
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
