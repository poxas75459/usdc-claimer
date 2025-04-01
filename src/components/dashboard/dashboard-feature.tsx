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
    "JhNDcr8zffGBfbgmj5YvhHTfCWbuz2tGwNBrayhRxhUWB3KoFQHUZKtkBDVwHJhxyNiADmsEJg39qHuxMTW58Uj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1dJhJYrQSBEXzJFx6ws9KmwyzRdygFf24tmqX31J86ev3gCekbHyQTEZLNeRbNr9NpnM4rrbzKdbqsfzMeRodZ",
  "key1": "G9G7q6Z6u8mcv8bDuGhyBmboVjGq6p9pQj1fs76Zp7182wsp9hrUbhpMjXpkVhsKEa8BCgcgv13jvSrvSbjchhG",
  "key2": "4uaPRADjefYbhUCkikVvUQWs8QVJBCgbzaXafcqQSiyF1EXFFLTcxWykRGuc6pBCk9zVpWNWxW1LjdJ4BLV4CPE8",
  "key3": "uNLtoJArBuGxDeYUb5rKWQLzowbmW5Sim8W9Cs1U9xosk5765ghwXobTBLZxwmdMemRQWycKsnTKJ7EqdRhSBsj",
  "key4": "5aPwcyFFBNFepjq8MFhJoHP87FTMMjWMpbxnhDeNzQ2aPFGdQN9kDxCcNbsakmaR7ZBkJSF9VxzmxHxDkEthnupp",
  "key5": "5dTkw4Ng5U3r1ry3bwF2TXyoRpUodj6Z7jpWuBVzH8aeW5B6iggRuCSGmrgtGGVZ3hYm3DN5XxxDN6yDFQmPKX6u",
  "key6": "3UUk53hYhdTZa66Vs5FivyCCdrREDZEb88prHMjAm2XNdEYYqdmYRuWZNKmSqb1U1F55DNQzE7xtMMtZxte3Huuy",
  "key7": "4DHDsf8LLFMyoD8KnnCsEPCD7DUxjWKwH6V6UQqpMbcvGFzWReEBXpx7z2nPzgc5zXQVgbvAFkLCksg8GDowhFfs",
  "key8": "pd3cbZiU4VXoCW5RAuo91qoVVupENSJS12Ho26zkbd6FSrVRYBcR3qN7QB6vzbzutqwFoHHcUueq2wLkoxxTNwe",
  "key9": "wRjfMoWghQN9PeoemYbcW7TLFQSuup23rzhXBZbxYKK87ro56yFLNS2k2H6CiaSM4fFhy3wow2RaNtGSwSWk1rC",
  "key10": "3vgScWDtMuvWNZNHGtrkN9qrk3ufKSuuWrZxoN4W27TMZHK2AM8QNAKAJWKrmWFBLF7HoGmM856tgZazXPUy36m8",
  "key11": "P4R4hifYjv3Vp2YBJetSyajAdVN7ky2j4nAvRpSu6S7Gn2fRVrkLxnAXUT7gbNmFxYS8MSutU7TuSnJGSC5NY6B",
  "key12": "239FjdZzpmUi8RyBunjRNmPDkLVFaXuuz7Y6Ec4JfhcGD8BkZ4wqpmgBYW2dWAvDoa7P22Fr6F2Fz7wgtaqMTXUe",
  "key13": "5GXkrSAx7XpTWtTQeENQ6ArC3mjH7BGmcKTJKkTnGdQNB97kqtVtGcBekjSDDpvuisjuVtGsdP6hwy1w8yEnqGwg",
  "key14": "3scTSgDtJSRVxuVwA3pvrS7A55UgL4X8ywY1GvS1T56AE8GCsx9rbhQTPDBWpitQwg9xEH9UdTf33Vahvwy7gytR",
  "key15": "2MDxmZ57SqauD3C5KtFmUvmiXhPUmcZsCPNS6iKZ8WPNfDnFecWgJc1A72bWKLTNG4zGUuLapNSfWP4yswEW6o2S",
  "key16": "4mLeeDW5jERJP1E5wcBJxePY9BzGqrhPCr9YZ2Bh3KF59NHZeagxXLKE7TdySgfMFXiCq3u5PyjA1CCYS2ij9rVY",
  "key17": "3koLnwNkL5iGyzYU4Kwqpy3jBDSgy3stzEsPcYo7pzpcpQq2STtmBR4ydWyPSfYWB15ooPJUtEFXALU6fokEsTMN",
  "key18": "2621oEPrkJgrAD46qbosazTn9tUecDFa3zmVwgEYrnUEkwsYiA4ZkKHR1z3yrfEXpPzTPf7EcigD5Tbe7QRe5qLj",
  "key19": "4CBFts2zQRL4hGvT4CHrjjY65bFe86BpGSVv9FUcm5wADKaHCzp19oJvMVpKUdgHbh1c5Qdve5ZbRhVPcigiFcwi",
  "key20": "3Y2dstFcs1e56DrLSs2Da2drSF2F2iNNgDjNqptHWAkkbM8BJwtZjkXFNzkfXnKLeLZMp2E9K3xWYScbSeRcCBxY",
  "key21": "61BkspGqJ5isQ55HnZGhX4cwfkHCWVAta41ry32nF8V3trgrPeTgHrxnWcnwiTqzApG9mFNCY2NFG4DcJvnmtYBd",
  "key22": "4MnafiCgTb3ARTQeCMP7wV8PAu7M9Ar11kkWGixbuxEFmozBXBFkfUvyLD9qZpyZLeNhXbEgenS7XyTTypGcJVc6",
  "key23": "3apGPjNYMP4kX2Qv77Q8DESttLkQLizbfvSKuj63U5ose4nSeDrFY9Q2YdWXesCoEVbKedZaen3pMnn8Fi7crF2Q",
  "key24": "5DR8ywKQ8RFSXX1B9S1zqGG2WmeLW2wrBHXpHd3Pkkgek4YGsWfy6dU6paBFG4ibLXqTVCXX8RxghGzmMfpYNkxi",
  "key25": "5iq4tfhsmNLX6YU4H6hnvMmNMMsLkynwqEfJ19kzjxggzQ6YsYB1qAi9c3tmh5gNNX6r9ok6jdwMkZKmuMuLRLm4",
  "key26": "46VPkAQoKTgGN4KUT1B7Fcgf3HkwMYuVtKV59H89XnLHqg8GQE2vMSLAQiAF8W1WqAsMy7bLAAGMu6x885JrV2ph",
  "key27": "5ggbeb8oFWhdNYFC5LL5orKAcArQbaJvtmVS2c7VUEVYbzjtLxU1VALuKXH9bcQQKFcdMwDExd1TZYpda3uX47wy",
  "key28": "26oKvMgRqLJWv2sy3EuYmasXHQjLcgsUU53U5QSDgiZXXpVrWMLg1yW3k4ymw22sEPLccXywJd4ddA6FCjaRRaYU",
  "key29": "Mep3JhbyRA2VVWRS2BDi2gJMK7X2Gg3W18DTVWSr3bk3LSebg3kRYydaryvke3EcuMYmbhKcJPv7fPZ5wct3QRg",
  "key30": "64HUwCAdsR9WruZ9ZiTxKjpYBAQLR63J6qdvUDcjQoqr1byX9ErdfP8F8p9V7zMj1Z3crPSDPSBL3rgvDVVm8Yd8",
  "key31": "35qWB8Z34Ac7XxRGRGsZ4nhVZseVTjJn9Y2ggkGgm9W4p6H9GzYncttU3oX8jEv1tWpxk9ZR4sF46ZkRvBKV8Rzx",
  "key32": "zsu7GVJEKq36ontZDGjJYMYTDhYyHCU7uRW1SHXcsYUEbUtqswNUsqvnQWD83CgjHaXNcyLcSJmQQdGux7GFVk6"
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
