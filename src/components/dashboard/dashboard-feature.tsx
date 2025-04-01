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
    "3cTjRmg6owxkvwFJhe51sTgUuEhf5xdRVFFm4KmqRvvpKeeHpzPcbGKvPzDL37GQhewvr9SLFUsGxvELsmnsFAUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woGFzyzXsTyPXxmEc2RDxRGiWtSb8yFWBvaxjPLEmsHRt1xgZsaNYmucDJvYb3fDBL7QWzLTJxZRdFdbdAJCNLQ",
  "key1": "5iuJ11ekijgDy2fGuKs83bMdfhzx9kH7Ru3QXBD4rN4NjWJdii2f2hN1BrKYxahEicYq6JvxHP1P7GNe1q8jVXhB",
  "key2": "tQ7rDUtvQn6SaTzoagRG3AhjWbVRiLX6iZQeG6hXfbrWvTwA3fLPeyBcLrUphAzy5Rn8J74TAoc7KXEFKAnxxVn",
  "key3": "65JqUv6hNpKv6b9CZ9xdWPuhLCd3mGuMKP2wdEcfx3uczfoQxXcRhyT3uD3C5mFvCSQw8t49KwBbtAuqyyhxjA14",
  "key4": "64X8SE2AUNaKJYeD1JrupZ3bDc4RS9A9AJbBx3gnrKxZyc64aLKjAsGVUXwodfau5jrW7FBQGW1khysCK4hHukjy",
  "key5": "5Lo8EnaQRicjnuHwk9Xgoo81J8oxVwEPdKv3cTLjctAsLJv4dm2XS9tt8JSeYZaRFrKX1JyEuwqLANpVJW6Wszmk",
  "key6": "5XDsVdzotuxddsp4hrawRKEXj8q1yHHkJM1zh9qxJjFMGkJ5mrzdaKsYYXWfNMLkFSsEdRzv5h9Pc49Q4CWjN3Uk",
  "key7": "3vuMwei4PfLWpgiCV3o1T1bRSqC9dR8XvTaMBsswCBwyajEr4ambapKdudaUMCpt37WYk6mfVKjzuJYT11JB59nS",
  "key8": "2CSndPhNwbn2th7V1CNoeoo5dXpE9y75nLMFgo4Tx6WNTpdgYUpExGeqXMczaFnongQ11arNpqfYdZB31kv7TkzA",
  "key9": "54fvPsWzBsREu9aUpMwwgEddDV6o9Epi19C6VetSVAr9ABBrPppK8RanBmvFmMPenLHXqhs7DsKXR5qYvoHvEfYZ",
  "key10": "DVqU26nbLHXtPz8524kh3zHQ6sYWXJZrRoViiz2fS6YWju8zhdNgzjxDH4piynHaxCoUZZMAF6uhVKqiAtXtgSU",
  "key11": "hBwqFT1Y3pB3DvKxzR3X7XSYiNqKmgoG3vEM8HQ9NWLoErSG8J62D9MWhTSbMavS3eZFQ87HQGUBAnCUMMDR3FR",
  "key12": "meVSGSZKjGFi1b1yN7LQUrkXSUQRwgx14MVK2YA7kpaHYfBL5HkEGMwSSXBdpgKJ9vJHYw8srSAU746dKJn8Rz7",
  "key13": "4hDvSrxB48dVy65danmKh2pwgmbVvSD3YJcQy26H2Sw4Fjzfisum3EZPFu5LL72HbQGrffa5J8tD5k5w8i4QsMf5",
  "key14": "4TRacfq1Gvji96SMt1Qk1MnoibrCbdhJuDY9cijTpAkP54RV8pbMRZ5icAwLkhSp6R93ijvinX1LV79vdgQzEkgK",
  "key15": "5r9tC5nXdEWquVRyFZmo3QA1ZGUU3m66Aboaga6TgokWUAnuSp6WsuCD1xnr9gTibFaoKahjmW67FpmEoeMrTocu",
  "key16": "F6hoh4JyuywUu7cXobTURM65mKFeJkhYu4jN3bB98FAqaLEvxeVXJ6tNLSARno37NqhyGoqDqLuoVNiKfUeNixw",
  "key17": "J5EhoUzsrNGeJYfDkabDVFZAabzSoWhNcpYLoaP7J636eQVF3h53P1KJAFVmQqusoJ2RQcA9dxQLLoQjrC2qgzC",
  "key18": "4WH6zhpHxoxF5xPNL4x89YDoxtHMc3vap83X7vtE44xfJUcTUajFgS6v7KUYaQCu6C2a9mr3Yutv5quHUaKHz2rF",
  "key19": "5ntCCjsoKxSLvMMoLSMWhQyZb2QvV1fydHtvJ1NvsG2fcSiCG9Q7y8dF8pT1ShynFCeqRZkpiFocbLtnRF12Ptkm",
  "key20": "4zYrDEij6nipPNbW2wiMmDuBmkUhW5qSkyk8Xrzy1gqMrQC7Dh2Y16mTBcLLVpVVcQwMKpXHSC2JsNtVVsN1L5w4",
  "key21": "4CDdpcYnod7t3pnodMSzLzweQma7r5Dg8FTwjHBbdSmnJuggvFgYFzpdENVDWTGaeM9b4MAwYaEWXxSrcJThsGmu",
  "key22": "a3XKctKo9HYr5x24jsBGNp3yNgnfgQaL4uphSrm7KXf2zsvBDJtKSBvT4mo8YvFJ1dEoU5vQcq5EnKXzRruuBxM",
  "key23": "51QRVNGPSPdFVUEC2ykMqYr2Gngz52s6sQ4X5qwKDJbaof8w45wQMmFPCpm4hnw3W6AgZ9ucUBejK2qZ4FUdmexH",
  "key24": "5MiHQ6f4YxUTHqfEFGRzXfvonCVQKgjQDxWUeB8Yg9d1kEWqmBnPLwvG8k74SC8tdSRtqs4wCcSZuLko3Ycp8fzs",
  "key25": "2LAHqofU2fDLC1aK8CQjeYwYS2HQFCSM4EWFbkP8BTc4SjRZi53e3tpsUwr5kGYYCxJ63fTwvMoTvbHidBR6wGca",
  "key26": "ffXVJFLgSC7M8qC1rksLUCDfXvDJyijzmCTvvQ6qtAQ8wewVi5LQJZxiKCWnQeEVdFtqFbnc1XfbB7wydHDXN9r",
  "key27": "fEvmRCqYca1kjNoxiupAgYEWm4i9RxrcPpYssBh5zDyRvgSA77pn9hUC9HmGGcQ9rvZoXeVTNdLC43ucJQYLBYJ",
  "key28": "3uttShiiKX11Mgm9GgRznkxn38bo7H4qm2bmPW3E3bu6WzUCV8yMQFpMSgaQgefPfPzdwTUkuLZ5pzi1Ex4CxgNV",
  "key29": "qPfDg2Uuq3xWhVm4KMvxvWkjxkpunC1tYxThToTchujYVEKsjyqed6p6GY3mv5FXJU73fSWKQzkhEKohAYZkcbG",
  "key30": "46AvERjsTbrqAySk3zu6tuQ7tdxob75h5fJwPsKqzJJuYfc8zbjiWsDrH62fbET4RNM73emfyJwLBTa38wremNjB",
  "key31": "3BShVxS5KJ3XNQ8kscDMedNhPhrsD3FPTGwuEuNFyoYX6t3FK6wBs3sJ8ZTGuWbgZcKqdak2B7HTibMEggiTdyqr",
  "key32": "5CdtzgeMjsPsvQUaYfw3vxnhLvkP3w9mMw8m1X3qL4Qtt1u3ak1sVESWswm82H2ZbNPDJPD34ywN1WqMrp1ePSYp",
  "key33": "4hetwisvuwG5mRGBb5h1SoN8g3RfMEtmLqvgAQNMUqXr7iZbnQZ4hEu94RqLggoChzZc4BCyiPXZ4aSaCoHbjt8a",
  "key34": "4dMbrTEJhcjMEBMga6k9UeLQYPJJivd8g8xxorb6Zd5RpD1XqxradXGmQSBBL645i1YvmBe8vEWCBrJsQN6NhzZw",
  "key35": "5iSdB8YSpqpyYM2sgVYtAnqpUGbjLaXtw8PE6kdbvstRwexLPPXxdWbQ6396XnKcWmJjcPg9W96aVVNxBB1rcuUN",
  "key36": "3uLiUf5fAdEG7WMcvRba1AUh16Ar9aFWQryNKRpDd3rAvt563pQVx3NNf9BALFDK1H8DwDJhaJL36YbuxhcdppsV",
  "key37": "5EHi1EFMQuw38aZWUsFoAMEamqDuitoHoH7quWSqeDdGnvwLFETYKJyH91uKGEZqQTWhZzUJJ96SS6xVFdHPftvX",
  "key38": "2smwbQa9fUPEDqTduK5hANysyfodYFz1zt45Z6dRS2hDr3fSgCRm8hsY18muUmnyTg8Py4pstFWtj786jnigNPCF",
  "key39": "4BH7ZyqCqq1EFh5dSkfyhRJ8fV3yFuJ8N7kDohS9bqLG3zobSCjYn8xBN2EeNKK84gcrbUbunVxdhTGcnvkrTU19",
  "key40": "4wkqKD2RawVSvMJRGTyqeKVH7jo5Qnk8obcUXmFwEjx3GyBkcNXCQY4J7BR64Np3nNnCBXiPpFoPEBobXuLyhNQ5",
  "key41": "3C3RmiwGe95R5FwqKap1mnDHWELRBf4JFCEUpZkgLmk2W3fSjReSevATwCgwTjSjccFqmewqbrRGDnaP8QCxB4Bw"
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
