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
    "544Gy36GhmVwyM2UWKHSsMSQPJDQxRVHBJ6RkyH1fx5XPBX4acWKjb5NVru7esE4BZeDdEwG44augyVEbwnDFuaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54vDoEL9idLB7ToyM5b46hsVUmp61gNHY9aqovQMwqN1aDaMGAX3cHXMeDmC2vzpV5xBVe4q3JQTeJD6k7hJKoga",
  "key1": "2k5qiCnK9QiusHcr9zMoCpk1zFSVUKbC2xbBAueC9xjXKL4vQzwrURjYBu8jro9najxz1yncjRs5yZsUDcg1wpdZ",
  "key2": "5v8Z5LmastmimVacHXJGczgb8nt4k5C7ALG2zNtWoy5AWzqzFb3mKEP7BeBVvEPXMUsfceD3GCrMETbmyY1XpKtq",
  "key3": "2SWSRCV5i3AK8yw9be3sbfAcuMjmrBCQvDxL37Tc4daBzmDZaF2EWfMkbYHdbYA9GfVbMmZzrTKLmnWRCwnsZg2K",
  "key4": "4mbGCgzND3mHFYHuosrjkS9EShzAaKK6ic6mgz6Kxo5ryxGMH5BrCUKBvBW8U3n6oEwPoH1aDCdnhf2dx2G2JEqX",
  "key5": "wGDTjNbmfpFoGEdBzUBunCk34oWjjo5EQQyeeH3sd4bD1uj6JGbpikV2z9PRp7Evg8ESdJtVUtCWG2ezKn7z3tW",
  "key6": "2V5oqKpuWMsGo5ZD6PfHGVTeM6mJNTBeEE1vhWYBtF45877sWjLAxu5EUsgey2GP3LNGxDuvWXSUGFFd7yXpGbS5",
  "key7": "kwGxrhz7owFd1vUyvfz89yYMpSzyEbSjM4GRZvN51GRyf4MVSks1A89PDtcfniBSkMYHmM52YfMBJJckwK17TPy",
  "key8": "39oY4gNdkK68HCB7kc81FMqX3VfrJNxHscUSFxx48ZrHkW5xPaHmEeFBGikuykWmAs8CeVtM7Bi3GUp1yLRT6ZVh",
  "key9": "67Q9wPSjxBCSmUFhNfkVV6hXdicZiZDykgHk7eqJfy8mNbCcTGuZZcHCprm29iAHQvskCiSXh4EKQUmJce3FL8hV",
  "key10": "5TaJESt8euRRQ5VCvLWeA8WemErsTHeJTCArSzd2jz4wXJuUEJhR2HzjxZHuFz6Bm5CHWcHqCbJ5Yx2QHJX5pguL",
  "key11": "3UQvgaac9wvcjmv4UT4dY3vCTedJSzFc7qbL3ryc5B5j1R3vKSiyWerKSJ3yCbR1SnccPeVgRcX5S8XagTe6wVg5",
  "key12": "2phuHY2wNcu9F6YkKFzkvtcRx3PFXXuWp7eFaDVnREphJZ9jinYqeJYXPir3tdeE96LC3TxE5R35ucPQ6PtE7qS9",
  "key13": "3cmojhEQwPprddFr7jqa9cqYpm52yrwP8QChHbiihZTxuWQFEpCiswXFviTbr2aXSHCcgReYSX2xrZg6svP5LAgh",
  "key14": "34S1x89ERCCSnudKoQrETzjhvAnPFemwVvbjnQSBusgcAN2UASZnb6ZeafmejrcBgTNqBtgDqb5rix7cvXKLgg7p",
  "key15": "45jit7tTcHKG9AjL77k5wb11mQB8N2komXHc8mMsbKSBFSejVdpA23aXJwGMA8sQoZUzt9APJY4Ls23buf5ZWfJB",
  "key16": "4egtGyAdqKBB1LqG7hnBWBrs2SwyeaXxyjjw4NHJkrHoD5yCewDV1GNjd2xEFy8NA7eb7Po2nusYD3usrREGG95j",
  "key17": "4WAbKVs2drC3TGDFcLwtGJmpGJH4iJYrMpBdV9YbNnBzpWt6fsH1ban3HYG7Uze63yox7bf1zYtbZJn3RvmYJqSb",
  "key18": "tf3yaiFKWVPHWqL4CFR6yGhgSq3Czs3KYAtuh4UQRMr7UrLBXUq81wdhCwtB2nANxbRc49CKScAZxjzL92tfGae",
  "key19": "5VrdfpsvoF1LQTMYyJe1tZ5Qm4YQnbbJsQRcwyhmQKghzmGnA3xSepDiCte78RC1kphRQq11u3VvRAAviFEcWNL4",
  "key20": "2JYk1mekx165mQ5hbuydrYhC9smEKA8TWn3wQtZFinTeFC7UDJPEVVKEXY6n39N7DtMfSXc4T3oQAMvP8kkwdcDg",
  "key21": "3qnhMy59zC6MEvrYVzivCPQyBVNyH3BQgX3pmwadip2U3Z7gA512w9M5eue1ZNLHqsL1DANPam4vrn6gCSTiM94J",
  "key22": "2iTnA77WmYV9aYngmWzdn4XWj3AYDVbpWRwrwbUcEyLCd4545DtXFez3hU7SfN1h6wGKnnHCtbChK3J9QEw94ixV",
  "key23": "4ZzxZ8aAkZuaYTgHb4hTQ2Rbh6915s2Gub1BvhFDahAbdHqJoWA7EsXyL76MkbJR4Vc9c1cHRxMRRtH3g3mY3h5k",
  "key24": "4p2h5vqqVDjph8DuFXy2hKv1MjGDRZ3RYmQFKpPyr45tVhrMogP24CSqVTk1vqvgJSeQejh93G2wHz5xPM3a6m9y",
  "key25": "44WguxJp5TwLadPurnxo65mytVxSN2XyN81smQPCXNZaBSpe67AvR8USRzSrfDp946MxchqpxYTJw99nb8Xg5rKb",
  "key26": "26RxHPa2Pw7MQH7ZqnhaWCREsMUdAp3QFQVcm9n4ZQgQWwRpqPVKBBTkvYS64Yw6FmhFXSvJW77FRXEN2NzFceoQ",
  "key27": "3Jwux7UkrPRRuACMxgnbrTg3P8aTDvk3fmWoHHZ5gPQ2FAKUeGVqhtfeFEDwmgKsxiaxkXZGn6F1uPA2XPgU8f7M",
  "key28": "4vuzk76ErM3W8GwcKqtWjoZfgqYa2GkcyUVMHJ29C9BjeP1GUMx4Rj61VZ9qpa8fPsZ4e6U6uAdekjwUGCC5MdtC",
  "key29": "66YoPKR1ym5GmCcKoNdStAHaUoMoi41Wa4GNTuC3Yu4W3kEJcCw1ZHbBMqU921f7a6kYsFPYnMo2E9FFgj9NQDDy",
  "key30": "5BehSYnXmHyfDZNFv1hGdjGDQbjf84r4ajj4TUCKXHz25HXaS5rRC8AGuwfarGmFA6rURpQv4qdHqeH8CPuA4Ha5",
  "key31": "5npvuk1MtsXjU47QZGDAfKwv5HwPvAY1TMh71KG6t6kQKL3CgfyBQE9ZniP3G69rNTeqY1vfxJVh5tGe9izA1Z7e",
  "key32": "3ExDKMuxpoBpwybLSPhzbeKjEmX6FuUc2QR2vsTYN1hAj8XzNYTTLAQU5F45iKbkuVAkfQRABMLEUp13PnZwawxu",
  "key33": "dHXSWtzCk4zU56oFCTmZcgofbZ8UrDMFk2VxPRFBo8zFdzzKEAAT5DcmRoBXpEb68MP8G2BiXTjiAm9sd2VT6Nv",
  "key34": "rTUnJwAeos9uCx9z6knwVsDNcv9K5HCokZ2SGAw6ou6H5eFvnQrtSez8pVVWwpbuELxc4cBDtNwFpsG6xioCGe4",
  "key35": "5ZSkrTJEKZRUEnN5HJHNAjGY8VNwdJnb5YkuUxqKYPy2wb2B237R2LN7hzy6xs6WZSiUjQiQetPax7rwAaJ4dpuE",
  "key36": "ueykZ3KcgdLM5b1st5NCQh2EvbiYH4iaw65G7yCofNa3CQbVDSNe7W2FxYv7EPW5Q6VjujX9cXpVnmR5Evrx5gh",
  "key37": "514JFsbfou5Aa2WHzsTb6D24gs42gnjf6FwUtworQHquvNDgzWbcSzm2EtDwSUdVfGgcz3TPhaUBJkfBr9adAuwL"
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
