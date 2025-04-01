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
    "5tENBnBEfYWKWsGqBp4gE7rPn2VRzX1uLAH5n7cWnSCX6LgGPQiV7BtgMSa3WSSD24T58YCPvmRnG3gVC7uj3KFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XCwEkxfzLA8wNctNrCUVqRyiF6LuuWSQJyAi6tDdWrPjoSrN6a5Tp2REte7me8cZvHoWCoE8CemP7gT9RTKgSBe",
  "key1": "4c44vzshXA47GKZ83KMQ15bkk92yx2cbAyyEzUY2U9BDwPx1xASobjEBQCzjscEaiWwJXnpt3Bzi9SesL83VfAGL",
  "key2": "2HNd3xwBUWuMszsJuE5kDFnnuzzXoq1ekb8th6t1AKnbTHuLisrrk295zAKd8U1oF7HyxM5PrrR9owAbNxvC7DYw",
  "key3": "3p1PtbZcDxrw5TKu1pTGF8Zcfm1qsCtzFSV4GomSFFdp5JkHTW81r3ohYHvKoXQQyMmzRG2MXFrb7oTFce3TWbC4",
  "key4": "2ydM8VPgEXX1gQHf9aLNXSxSBUEzVATdjD6oE2zXmWCAnZv1vHgy26GwrL6rkwCdTQr6SLDxz65qFrEwshsQy2oS",
  "key5": "oQzTzPQ1PVYfFuxq9F9rMfpk7bEYRXSBYY4iL62HCHejsaYHfVqFd9B9XcZUmT8VoCJtP1P3KqSZZSM7eUCP86Q",
  "key6": "4sWo8nfFd7goD9GKrsMh6ACoPqrZujJxse89x2DgvjD1mHWvnAX3rBZttGZS14u4kQJqDPTjHMvdWThcbGzfbLeJ",
  "key7": "3gRAgdmmTmndEoFLvRnnuP7gt4H8da4X4sB4iP6CBTvmRNjaLLSZYtQr7iHPuvLN7K4juesyh1Lk8W1rsdkt2NWS",
  "key8": "4C1iVo63gws8xxVEv2wfambUTkHA1Wj5LMnMSUqDKNeDfRmpYRsoQpeQnK9UiCnyJuHv5C2VA8ynRGgLzcRc34Az",
  "key9": "oC4ovXrGy2tawir67Csqi1zm7HQ6z962Jj3aotzRdPdSLdsRU7QJV9hFisGpeBB7fZD4wpJ33YWGXeQmkG9XDhU",
  "key10": "t9625K5LKBwqvh7MXF1jX1EAzxXV4spA3HeQ4WjRBo6WQCveHsFqLW3xZE9z9AR1qvkaBXUovDzCox5Q84z3rMf",
  "key11": "5C6vbnVZFTzq4vJMS7VNSLpW7SQCida6ViuHFbpnbGh3Pw7JmGaECLKUDnkSgQM8DYnPhzFJjApZaRQHuNZE1aXu",
  "key12": "5wQm3Z6jiLZcxryd7Go8MDQJW2H68ywvVLbCj5ed6FLVWNxTJnubxgzhNDbcG2hQ5ivqnpiCdZF7JYqXkiB3eKKJ",
  "key13": "5DmjEmrZcFiTegfvGeW5iMRqEskD8CcS9j7xU8Chk8jcnsnnETiHC87TJmybvgcLbR7VG4h2mGo3qrKjtYuYXQAj",
  "key14": "3Gd7je7Lb2adXvHVGKiD8XN4UfnuNhwePAQ4bqH4o18GSzxFfX5kCRBa3yATHT34TXYcXy1qHjpiMro8tsHeGkKX",
  "key15": "P2uMEDeoBPKMS886dfBoWe9PmUNG83s5c8GQjwf3r4TXDj7ZFevAPnKB6CTpV5PYZLp4yop7wyZZeM671wUj6o4",
  "key16": "34En3m294Aq3wVSyaMXcPdfvGy9ZVcWZcfe47S3wsM79qRBy9CztppuPT2TqasC5AmceGLFpq2e2ayXsyScn1BEg",
  "key17": "3GkLCDPRHkwaf6iVyq27abJFezSaGEWWf3LPkPxcyQJqmfQ1fyQUXJERvWX85QdFDJ7eE2Hf9kzzWTUc9AoYjHsL",
  "key18": "44AsnDFAdD25ZJoWy588x1osSv3sgf2DPxDFzfEgUSyRuZirutLUP4H34qHyQDVCuXwTt7QTRchWy69UnezghGDP",
  "key19": "3vixKbArbB58FfMm4pPV3FGyoS55GYq8S77vthAbaBhci6WsANBDLKeTu6VrSV54wEbxomSWCGcv9DLu36CHKazZ",
  "key20": "2Y4NknFxTS6HQKMK6NVR8MaQbqCbYcX175dmtYps7qpBjf2a12yCMT8hxUBzeXdViAMU5n9StJmawCBLXPHKpcku",
  "key21": "2cWZipZ6XqjtB4ijpzAJHSeQLyf9dkioBYxZ3sqTfAMjvf6hkrQ31RaVaxKQYKz3yJu6UWQ6eJ6snJDhjnUdNFti",
  "key22": "46iUY3d1xKxq5jy2FEhpySh6vAuextU4ZuHvuZLhJVLk6sAYLzL6RfYLUjvx9zH6Lx2sBzdBz29JJ7WWYgRRc4ra",
  "key23": "uqppYMhyXZk2czADKbGQQZJXE9J5x2NzAcXRTKLfeCPYEAeGUHi1t4jNUWcCnDVmxR6aHs6AGEyTPF43mrayzGh",
  "key24": "61dfBnkJ9GKNvyZFmMrWqDxoBceb1bZWCSXL6PwLgiQ8i8aUiAYmguP53ophSre9KL8YMqFnD5TLEcPzB7KNrnTN",
  "key25": "39FSgiupMxQyUdQxkdRq7ajfDFKhdkvpJXG4uQGwV9yAZaVPAXJvvzUL6nbMg5jQNzTWPzfYGhkAmfjCVUaetKWs",
  "key26": "66g8RBoSdX2Wd68kxkmgoGgYbVahL83M8cawsr8WWTpJZXzyieQ2wGE76Yu7Unhcbzdv9Vvs6NZGdb41socwZnfS",
  "key27": "2YS8ABCKfBv3e7GrkCi2wFZEHJrb8kxEGDuXYrRat8KENcSHbJzrCita9UVzotYFABeTKCqrJLSYKpfxkvh2Ziju",
  "key28": "59FWkRM4Guw4qv9kvRKBFp2pdpVXxqdskkdp3M1ix34b2Nqeww7L3yoyFBh4sPwB95mx6B5jwzz3SCJ5SNwqMzuy",
  "key29": "511fhUFCPssajtM6sPLdShujdqPX3DPXitTKPBxq9pwJni5NPKk17vMR3Ykem5G9vxw4xk9HeraXvhot1gxPsaPz",
  "key30": "4m2ScNuijtnALB5gMLkaqV9s4drCmkGCPrq34BxwMAGKysv6YSnzw66S33h9wo8bED136j4TxsJ7Cs678mm21bjc",
  "key31": "5H7FV3kNJWhRpsVTw89UCpK1MhwHSFXyoAj2mNaqQwmknnQH1vPLXsVdkgCz2zc6NuZ1rifdF2SV8c1cQ9yUVBxa",
  "key32": "3z1XGH9ZkUHhVggtzzkhcFh6SLMUSwAccK2NxopQukurm2B3RKFjZ6kf9AiZwb32Jkp94tPbABEpNW2xa4ov4tZT",
  "key33": "3gVHsxRwzckUuNVva51P3cWbQwf5n5crFkTnek5i6DuRe7Jb4GNWPJhoR9GSTq2b7QSD7JK3gfDYxLGejc6FQKXo",
  "key34": "4mLQh1BA2jqcxP7QVSmxUvi9vVBukwzxZg6adFmbJP9CXQEP4fWz5a2vBRAknAYShjcqBYAEMTVrGxfSLumj8C2",
  "key35": "3jia2rqcD4r1EHjw2B6XVmaBDDMpE2dFYYTRTD3AfNGn3G2aeAHSkt13jHWgEYLHBSJpoDsqZspFBmWgM5LhzVwr",
  "key36": "3S3BgJmrbT1Jxuijk79gQ79cJrNDD83QLV2eKuCF362fFEHRD7H3yrHhbRGP3wKUVCkSVXeRMoD3sW8LKpVMKKrp",
  "key37": "5YpcDZPzhXTDW94LcsDC3BsiuCSB66GHawBEzPP6v6h9YBPJVwMdAxKA66nrabpLEhk5ZBoBvs7w9wK2NxZCAosK",
  "key38": "5FL5BdsrGWCQwRaGq8Nk216F3RbthzW8nRAD7cCt7Ynk3cHnTx3SKsGuqaFyAzA3AeT3yAkxMRynoo9Rgs8ivDA8",
  "key39": "4Jz5XdFxFHgWVfAVbPmqLrdiWziUSgReKNWS4zg8esCMBu4snZBQhYBWdFByNXv9PH99NWQ8dG5RFqDMBCpo7muX",
  "key40": "Td5BBAFPadBYcbQjtp7uTy2dB9TS3BDUi6bypejTCzUaCTBGDP65W6s5c7KiLt6yPNXe23d25WiZp3ADB5BcWs9",
  "key41": "8inXbcHETT5iasdKXMkfpXUR7cwuXmjicTy8AJY85FUk7UoTPoxzt6w5khoz8trfCG7px46hv74UCKBjtxzyHWU",
  "key42": "5JVZqfsYK4hJhzDb96RFG21RfcZiA5iw77uYeuzDpprvDEVXr3CpjD6ZuMjKgE8p7JEUvmnejJYi89PTPrGzwy6A",
  "key43": "pP5ttD6dd2NBSodnXXbRS2oouTrJtzPsvebHBNm2zjFUCEcV6umY7wubdHrE69PBfZ9Q2WrPx3zhoPi45yGzBKc",
  "key44": "38vqfVFJYMLg2QndxLwBMeC7TysWBMUDFTY6cZ2ivcCiE6xQvVMBhMr2ZhxmfJFqrFzqnTvkDnQEGgqF6tDJpYrE",
  "key45": "aJz5endoVMKzeDDsjFZiABY2XaCFBZPpqK4pSSuyehjzGZTT286ZKpLR1C4ZedWu96nMJ2rwiFjDJ1LSEbNTv7R"
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
