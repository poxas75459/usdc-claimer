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
    "61QxBpYz7XSZUmUwyGcrK4AsGh6G4MFJrZsQVugCak1S1ym1bfRFQdB6zpAjcymSaQrwD5vSGrHd1McPmxM4WVuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2Kb56iTr699TGnicrnet2SDkzzRMUJ3bpWsqWNvmRrmv55u5wGW7iN5bbLoDidn5sMWB9U2AmFEGGjC27BhtnJ",
  "key1": "2gzDEbrRE2Y7eoyibf1koFjixtThU3VQ5uV2VkRTbWSGZeQteaHKzUu2NFHEx82sBkrVYQts6aSccquMdbcHrnXi",
  "key2": "2RuAfdWG5FRKsfjgzPZ24Fezt7NbEA9wc8jVn3M8jmt7TBsXgNt2heh62RaGyu4USZgmetdiKziXBGJDmQzKFiKz",
  "key3": "2hFKSFythCHjdDGo6VJg6bsYmwvhrDBcsfDtK4J7ckQQFsFehjTWKWRAK3XdgVFE6bpNPi3ZubzedcA6xC7Hgd6o",
  "key4": "3HjTMu7LNjwDKmxuA7SLZ4GhZjfzeVwpPZ97qhQhyYX6k6uT97Qhym9PeT8cPxZ4sxguB9HqSBbL73pEgsMmK4B1",
  "key5": "4XqyoYFiy2duwj5BbmPfR5fqXpd6VijJaRnXZQDq4zDHmH5ZPraqU4FLcx5cxhCsnomrQ2gXvF36FEVNe6qQNxZm",
  "key6": "4a23kVJertVFfWWhXEyCG4zkzHdecdnoAyijS23c2fxi9gc1wNq8n6M3ShapU2no2LyomevT6d3hmA6umacNyBS7",
  "key7": "DH34Dn8eJwnFuF87G4R5ZNkDpMFShz7fAax8LxuZCsTT8HJD6DyNnraDT7vhpfuSmEnmCv6BThtqCykaMubq3dA",
  "key8": "4aF3q8ZFLdaNeTtLmghFCJrpEJegUgacFRdhujNquUGtLV7iNAD83rYzUjoQWEwTFxcFaU4oSPMQvR7dcYArv8Jc",
  "key9": "3aFaBDkUDeW7RudPqr1efuS9pWtTv2dHP3P3ciKyz2zorD9psc4UCuyD32FSA7xEFy3jJ941cWUxxouXfTmjmKEB",
  "key10": "3xiac3dqFv57mQE6JtGzZw2v5VHt5hpXQPnkDpjXMoxn8nmbxVpVT372kqxciZ9txBh1dDgY7kRHvyJCiHUiPuo6",
  "key11": "32Aofkfhr6oMrmdMQtTSzr4wEE9Mt6B962EjSfCsbQQKAMr4ACCcxmvxfcKsWbwSrDiVZcMJzzGmaPSgkAzZfjhh",
  "key12": "2jKSgbkmzZe3PC1fqT9WwCivc6hsqxDD88PQWzPPbys18GiHdKdgpEVk94Yg45r7DEAyaTzUpLF3pqdgwPPD1kpU",
  "key13": "cJiXvcc9f9NXJpJDwWxS4NmV8aFeJ9ZSikQ3kokEUEsszY4geiRBFNtmxz2vKQsuz4rhMAmWSawUic9NswpXsdE",
  "key14": "4cXbzGEQA86zqE3SYoryknLB4XmNDaFrX3AUumJdhf7wbAXkJpcGr3KApEzCcaxEkWdhMfvNmAtTHsZeRWbXGJYt",
  "key15": "4JLDxPpiLTmjeZg6eUDpPtvYMijtmeNsdzBjZggvQSTSbjcE87NeM32zokR1K2Fxk6XvAxwrHdr1VLqpT3rNKP46",
  "key16": "86yLBcYVcb8kPCvy4dadZhgzWjzyn7toTvLen51rJLi9eMdCvxuV3Fa42QdEPwZQgt48rd79XAUVpQB7JrNEYQX",
  "key17": "644qZyr48KApDMmX8xU5LWGVXqFjRwgUPRiZZxHGGCrFKrkTXdUP2tSjKQgnNVDjAdtaRvzuEv8uvu3asZVduBcb",
  "key18": "2W4HhtKK55ERxUznX4mvNJt9t5yy62DWLHpha6soayzq3T3BSXjR2fY32rbftwDRsqrVBNiMbxdj4rpomWhFTymV",
  "key19": "2oaQtAYxLVpUaixdLLTYVac5ovdV4NSx85SKadRHRG77yAmJ9NxmXEr2qTV1AT7FUtoA4AA4iZYwzBdjQurNSkvy",
  "key20": "3z5BhVmvFUVtY4UK9ne9sFTnP2svqtzaFbSqgVSV676AP8f3FrQaKd44NwdTgQmpN56GoXgD84cKwA1wbn7wJdMU",
  "key21": "4VVsr4VauGu9Lsp1BrQi9AYt9ZtppCiCpgNcEy7zFCrftRprP6tRsaHAg9dU47rvjNW7HTLvUs2y3V2ogFxRWN1m",
  "key22": "5QnqHZEnDeZ4pTk2MrUs2whvgRE6LWdcjc2ZRfpPLhTjBc4zQCkXCtjQUMYXyjUwPu4imZXwCtGJtnveiQx8fCqC",
  "key23": "24jAyuAsdgUSRV3KWdNLjH6Jyvdik7NUX4heW2cHRwjNZtMsnCpmzqBRntWeRHcDbDcf5h2EVw4JKggpd7pw284B",
  "key24": "267zro3xZZFVEAbSyx5TBrMaB9UR6jCGPfPGb12kfczqSbh9kd2P2rV3ptCinPtjyUSSU6uqnRB541kyugUqFg3U",
  "key25": "2YpxswHn1DXGQPFyDAuowfR2t91CCpXmWPnuTFydVpfxBp1YYEgrXQGCYrFxauoptchiwWP2rG8hrRUxGAt9hRZt",
  "key26": "24hSc65dGJLSmcatENTMGHaH2Zs4rK1wV313a6HqYzC2RLs57YdKmQuMNEP7W5d7KmdXkZ8covrHHU2KAbqPxPcR",
  "key27": "2kmK5eD5V3DzshvR7kL6U67HFkqhxwQGYGDByEiFpJaoUrfQiL63Rz33vbwPCAt1Nby8s5xbLbXGLqCiumAmrZsL",
  "key28": "54bRxiomhwTKYMcf2yoMcaVwMFtmuonjP4NaBnH2e31amytG9nm4n8Z9mm1mqhvephQqYoEKs88GJ3827pCGZ8Pv",
  "key29": "2tsuapriVgePG261qW6Ej97dpSHbYXYjggmeSGUVgA39t6pswruU9jSHMmcgfszyiFoa5i3bTX3cxmnBfM4HABPr",
  "key30": "5oxUANv38CsVY4qTirEHmNeiAC2YNqy5uhGAH4fhGPe2h96fLfkVPMkrDyznm4DLLsfXN22HC4UmQGvZGRie2zDh",
  "key31": "4xT73i2zNKrNQxHsD2FGaLJuv5kvvnhfpXwiJVAdxFYvfhcxq4PuAjCwVuoKXtUtb1oLK4Hn3qw4fMB98iF8ohFH",
  "key32": "2VgypmdjTbtUwUSPgNRSVgNHBnREwnqA85zMCZ1etNbgbu3PXY5NYdTVuavjB6P4k5fau1ZbJE3a4Ce4qbUmSF9p",
  "key33": "5m61Eih1YW7CKbjkdatncpinPSuy9rdNnho6ZA2xNmJgsRkB6bL7Xo1z3z2tihyaqGxuyDpAh9szkzRp2FD9oaML",
  "key34": "3zGuXXGZzmnEHkzb9w5KhMwmJQFyXGH4pZC25yb44hWzvJn9wJMTwwbuAbCYbQeh8usushbir6SBEnrmPkPbzEZj",
  "key35": "aurpyJjNQN9zNqvoDEPatod7gauqVtMqZFCvDFutXPkNVRKNRT5UTywByqweY4LTRJpcQuBm34uA5qghWWLfaJp",
  "key36": "4VfAZqWrskjWRbMGamJxFSgPnCD2GGey6YLzBN9TLCDiUg7G4Z27jzvFcN7Dqqfrcipgx8hdPp9JUHgM6U7RAHAE",
  "key37": "32fqvmg13mQMgS1PcGHGGHa1Whr1VFfhnyBUCMgTXHuhQPdyotUehMGY24NxFTDEPT6ZfZ6agVT5S7DvGHieH53j",
  "key38": "2CHqMbKfMR2rpwpv5G66chraHseSAaMtJGEdRPpvtLUozAJJZht7VAwLy5aGFJeNMGnD5Xy51qLT9HS8er1NQ9XE",
  "key39": "3zqfSviK8GKpqYZmCqf8uPFwqWZ3XoYCc6j6vpM4UY1tYN3h1XgRtwoUXUN3pakwscaBsrSoiiBmNCqf29DrvrF1",
  "key40": "4wUh17AFxuDTN6qtAApgAcRDRfHV9g39uQnniXa2p1FkFSP4zxspmZRmRjyPNh2Xg13So1MAh1es35DJoPqvby5i",
  "key41": "453udSiCThMzmvMau9QvKk1TQXFdUMUyKf62Td1esajeND6uaHXh2zGxAj1qurPwVN88dNyxpdLB5inxA1dHEscw",
  "key42": "5WKYPuN54mt6bXXCNnyq7gQgu9XGr8WBbdi1SWvW2sfuPKrXQ5WxKtxGhGcnxjxDzHGaJytvCD4gmLQQAfei4reW",
  "key43": "2tXh64CzyTGx5AzsHA4c8sYRgvCAEEBwGxqRa8gnGYH7Lw7gMzT2ykxHVGxg6NsGZATDWKzNRdCH7gVYSzsp6p2g",
  "key44": "d3tAhYdGtoY5eEkq21ay7qFydsgmdb2sXE4Yizd6UuLRD6Y2dQiKPjm3oFjRzYGY13izLVs9FZWeodjqzcbu31t",
  "key45": "kEWSw3LFyEfP1D1ZJXZoAYNGzHyeVNiKmpSx8D1tAqvA4w1RdHZGw4Xn7PBs8QHMr8a2M8Qkahg7iYs5co1A6Y5",
  "key46": "5AZca37M973Q9A4JC98u3aNrLTQFvh5i7JZR1PkR8TUCqQfUsVbD7X5c8SeTbtL5SmPo2Lw7vxknxQCUAm2wg9Hy",
  "key47": "2bXZXNEyW2wNbfqLhtc46XDs8BcGDes628aXXbN8U16haJDgNKjaZHEfB6iz77vZ5sgrQh6yv8mnWgGw7MPxG7Po",
  "key48": "5q1cuHWYpA9KEdgb4kRiqF4ygEHNRemQ6XDoLSLTsnJdyJWZfmdUH8mybogjZ5Lp9DQukm9uMmSE3HfNMLKgA5iv",
  "key49": "4TqA4JTXEgGW9d4S8TbaPoXgkdwNMKo1jakTcBgjknaWqjMXWA3khth9rJzy2b7uFhZAE9YgFNNZJT9mFYs4n4Pp"
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
