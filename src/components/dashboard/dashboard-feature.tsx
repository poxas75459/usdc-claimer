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
    "33pp99Eb6ujUnctWZ9oJHEAtX2V4kmVjPGsEtXga4htUX3wUcPprjREXtFrrkLxuuobS1TzN4zu8c4SwRvWFMkf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o89wvHtkmVaLYhqaky8W2ooLmaMwGJQ2XgMS5ZRr28WQ5ptJfnZm9fHMRnr26XR6zoBswrfCAV1HA3KYKjeLu18",
  "key1": "4TUUrvbX5SSkR4u1gjQanZ2gtqjoioUJE1KJtdPCUDkpkxCafakEQcMUJrAWTtddPhWTsqA3Gq89fMgSnMbC3LYZ",
  "key2": "492n9Q8jfwCYWNWBMm8zvfFaeFHmDPDXNsNe6LBQSy3Rpu1QEzrvLwvickP9qaBvMKoXiMKG9eZUTB4BUCo6V7TB",
  "key3": "2Sq49wzw7wM3PevxXd9gQKVqQbuHZpWLmCu4s26dWcAujsQqkzmgvsX6vvBK4KVk8SQhrXRk8p6KDfLvPPFKtMBK",
  "key4": "2S7Lo4cD6dmGKypKy6wKtq9xwtm5JLRCBLEqqTxahfjSakqaS2sjs54JSawEdVPJespMpfu5yhe51MjtdJjCf6s9",
  "key5": "2nAQVVAuR6BtrMsc9ZoHyYcULBtZwjHAdSkoEPi57DX5AkCePsypiQ9FGiX6NfpmKebuVdF5c9AStwxjSY1WjCSt",
  "key6": "43SnEpE8WcCyu4zgvzvobANjTWAsxMxyXfvs64Ug7kBF7zjofyTZno8E1MwhiVE4G2p6Ev7W9BKnrrhydoaQety4",
  "key7": "2eC8KQRWKXHpxazS8qK4DSF1GcoV4SqDx6VVMDuimotMQCzer5sSDijf2eFDPMH2nBVybxBdwYo3kLy4PrqcyH5F",
  "key8": "2B76f26vubDRFR5jJPE6bqc4gfS2Uvjgwqnd7LvacEXodesAQVS6Ly5ZC9XCwQB5nwFFFfAd9rwUd8ubA4fQMkpE",
  "key9": "26uFRgP99cCkM6A6sm1LvsRXShdDoT5pcP6tdi1kmq2cEBEYrBuGTRdC2hXjSGtboy78f8zDtzZf1vkffv3z3GXK",
  "key10": "3S9NYvBVUzGVH8KDDfDcFx81dgWE94nQ197bqxDHuiLMn7G1ABuZeNR73wb497YFgJPZkp5gqos1tshXQuHntnpt",
  "key11": "2RULzuT6dstoEyPVoDbsKqiJQsCNP3qXwaLgkALpaqEDxgkKu1EYHKF9o1KQDby3VWP3JgK3XXTrL3TYWTvtrQLT",
  "key12": "3t4SA3uMDEmpuza369D7Npss29fSJhsvpJzU1Me6JwA8j2DwEnFprc9QMBmuMm4pdF2c3JknvZNyfjVhxe1tLvvC",
  "key13": "4gYFvUNDwp3qTtSFGfQ5Xf8fa8NRHPMy3rwDmMaXGjiY6z1391ZdB28kUngxS2itESC7fASmVtQRFzRB28dndYfr",
  "key14": "JYHfctMGmB2sc1uxceBGvwFfJGiQ44L2m9t7PTnAYwuy1CwWUHFdaZgTMUSt3UiuU4SKgFz1tooq4fLuXwDzqBZ",
  "key15": "3aggpuvSr7vwZvY4RUAA8LzYE71Uzrkh4NBf52BdLqNSGZUVrXHXgtP7ugt54BxwUwxgwa1To5XYKc6N3XYMcSgh",
  "key16": "2Py26rLCGYvJY5MN9tLsBok36LFNYYvLxRx1ioPHXcaF8aDWYyPc1z8edosPm2X8y5deJcE7inMe1gXi7rdp2Ase",
  "key17": "M2TXafKvhesyZXX8LMxtHeVyWLGvTnJWJkh67mzu4jW9FrpshLD4NJFaSfhVACv2MEsCckNi7HzQjyCmJE3enzb",
  "key18": "4ZboJVTfnq4ZAn2WKQcZVHtbU6TVBV7TCdJNLfLhPnSTDf2djpJnMVe6ZTtcJjEshinZ63TELGuHRCSzPBWBEDcc",
  "key19": "4MCeG8xMAerSUrtnNw1pD9KuEGTHuw8isrkmMA1ejXwp98dUvq9QG3HnNoPMXxGstWH4RZXyECtEfYZpaiNmJdHQ",
  "key20": "e26QVDvGMXNjjRhignifJPf57YbhguDHDX8Nr3WvGtZh3Njf4v2Yz814hxwykXGK6kaTkB3wpKAgLXyBPPnnAMB",
  "key21": "4ucA9JZacaJkz44VrN3ALne7YW2fG1ps9yoMgAdfvM4pKnhJ1f3obmbSdjezYRHxpnoNJWABjFtakFhGWRq1RBQ3",
  "key22": "4mzjUGzpsnqvCSkjzfxKn6uqqgmJcdvBpCC5bvVUsXdN81m924MAqag3yqBbAXgxZzJTL5GaZzfxewYm3o2uic4x",
  "key23": "5EQdZ9Ak2AFkysqHMWq3gwadVH3ocrM7iNSkBitGGgs9HGF9bitEPW7WUduogBWKmR49WGfFY5Qt7z3sT7LsWJa4",
  "key24": "4vLCqFzV8zSLc5iGLWJMMmnzxyrXr5bHAus7iAeh1zaUVar2iHrKEbvtSmrLiFGRb74Bqb6QSdavJPu7fzc8SAJJ",
  "key25": "5MT3yg2TuH4KJyQeGRWkP4D5tU8Ntior2uTPZuaqeqABY2QgEGN223GdDQ7bdZtawRwvr5tPhFiUncFns5vo48zk",
  "key26": "2SXimV5hGdUk4LysWp4gBXfkZRy2qdMtgiBEhC8TaGWTtV4b7Kxoap3kZhqmYFVpdBjxiP3mNAk2azzXmPTr76NE",
  "key27": "2Un7fcQwYmCGdyKJzgAwbocsdbc4LGQWtEntXh6oCSL6vFoXQdNNLitYqTzMYedweUBWGUvPVqFa1dhiz7K1SXr1",
  "key28": "5warKAGJQ26HTi6qHdgbSAfLB6PABokk9HP12wnUy36Lh6BnaQpsgSSKWESinEp4xrWJFyczzVePjgzwUCFQhT68",
  "key29": "3JwSinoHrvPh94wCYnCBoUqfmgFWV76VV3WPZAjw4K9nDxZVqMM6qmZizKH6z6EDNDAYcCWXqpKsvbnqmsMo3zdX",
  "key30": "5DpUNLCkbJGf8m3EYyFvTgLeiFCbY8rMj2gi7CYmqf3EQ5AS1sRBoDU58P1Xkvd524FVMSGYJcZNmj4QGETFa5tY",
  "key31": "3pkzVmgPaGUwmHU8NGk9YD4fWXofLnwKTTxFmHUtwh3yY6wTLKVLEPo37tF7jAtF8EisYP3vLRV58vY4XjnpDmqP",
  "key32": "5TFrqsHGHfuq2Quj91P5AdYfbKg6HD7gzVJji83cCYVYbGgZprRu8RaVarBsAQzirszXrQGxeeUZ5zeFh5qtnSDk",
  "key33": "5zhPqDjZfJryt8qmsSbzgr1LmziZFXFAprq3GuD7RhX3H87SKYj1aBn54f4zXMyP4C3TuA2z3QZytqTFQuCTg7WK",
  "key34": "q9KqRJTvieV4qKXVXoFAbs37ZTDsdwudy3zfTGsmXUuST3gtq5wQRa6ZrK4k8HwLstJsdyh2qGwqof9tRG5WTZ3",
  "key35": "nM25aSEaiwXGdSqir5qoXg3uzLR85YABW3t8s9qJmLY8XrrfNf2ZmhKRdhUCtpgxgWwm74zi8TLh1pyWgXAaSao",
  "key36": "54b5uuWDDGaVeGrC4Ahm8pRjS1J66AYpg2ZXRcBe3PhKk6Pfaqxqsqzv1GbnS6RHYM14YzYeXnrgq7BGyMpwLinX",
  "key37": "533nf9KkjJkgJPjztfp8nJf6hieSowZCaEQbq7wssmocAA2M4CTygim2cd1irBFQ7JYvEmvddtmW9eW38Eg6nGqQ",
  "key38": "41K4UFGpk5TFEBkN8pkSg71yzteL2pPsFu4ULuyaYDo2hnunkMekGqoqFAbF9gwvRZw6kuXsUH3wz94WK1Em2R37",
  "key39": "4ZYe4qYZ6izvGRfUvZQpTxrKa6sXkchjmQv6EkBTDoXfqFh6r8UqXUECEpPq2jKrHXDtzsf92NjNcxtUkMaKbM1t"
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
