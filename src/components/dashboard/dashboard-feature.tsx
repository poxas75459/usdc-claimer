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
    "5KwhKQjdv6qjrHnh3yVqP4hpCwPFmoERu7jW31u5UjoQePx7BkyHop8NXQjueXeoE1f6duRFn12SWJE9BrpbDyBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PBpzomPmN9J3UDq69V34gWNkYJjGrKf1m7U4wX5THyu4ueqp4i1cHQFPYkKRWfw6VAM4YTAG3avKMuJ1NKEvXdK",
  "key1": "kNRJq16BeK3vQHqNWh3nyepNLUWAeu9hU2XTtjdfchshrmbmLDS3pRFgJSpJXp6goCLomMEupufU6fPjLWKJXcW",
  "key2": "2VpwgCWTRmXKDn2PxoHL2Be6AcJo56zuWoFBpCgcufaBPT1fJVtn2KoL16bPCBUBguzwkfprwgyeQVYNZgiTE6Cr",
  "key3": "Gm5LGmJ9X4kw3Hsx1ZLChSehBX6HvPYt35R6THDxBopd3ZapCaLpwNerx6cbhc8rQPaikBMaNgiGgNA72wY1o2b",
  "key4": "5mYr9LUgUjiPkiFoEPo6WY9jj1WcjkLmaf7qQMgjKULjegwVS3L2Y7QbUiNHEfCKSsFoCqAvykzdVYSEajFCPhYb",
  "key5": "31QCzEJUnY7Ne1Xnm35kaCdTg2sjtVcKEdZmSHYaGBdmpikn7BdNNvhVzeeDeNyNf4TJPDx6UywRFCyJHJCnnrWg",
  "key6": "Tb7uCyoGPBmzQnL696334YhHxht3RbQYNXQBkBDd63DVAGUkcebf47VuEvwTBEPWZttcmTxVsek5eMVxpYGvdwL",
  "key7": "5tmbApPScN1td1TCQmAxGt86Kwg1CpMSYyxevAkdjWFAdgnECEznn1eRbjLf8j6Fh2ZZoo36gju43p5qdGNJRYF6",
  "key8": "24g63qokmM5TS24Y9oAHoFm5oWp8GPf9Md71HLJEAh9eitfrP9uukXU61RqDcAypYykEfQwTKFPgVH9uVVjrQxLw",
  "key9": "4jsaRUp66KkHz53dUcCDFyefYYH4Cf3ZemLVYSuPuzF15Z5UmcVLWu8R1apWBCSfvkqTmRBGPjRgFiK38sJEwevi",
  "key10": "52sqLY1s1dXDNb2c6rk3yT6CUUNpHbCQh8Jn3ToFHcM8Nrw2aEzEA9Lmwo1f9uYDV8wQUDU4A26hjymoZM75ELH4",
  "key11": "4MReckCK4Eh7vpavc4EatBcgYbuwq4vwoKdQoKFWjy6DegRMJw9LnAPbzxWtL2PfRaZCQn7CArQeAHj7DxJQ5rWU",
  "key12": "4h1FmgLYo8uQdivNiESMnPLGWupxhPKiDYSMB4rPuYZ1BB9ZexuYJxAMY6mmbVJvKtM5x5on116GDqgbvbqQozo5",
  "key13": "3cQDDtLwfKayEbD6erDTs99FxdhFRqeaW1J1csR7yd5yhMEDwkcWNjW97BYRBM43wRe4yuuJnnrUZBmoHw62HHiv",
  "key14": "5scbvAg2t7UqX6aSnP6yNgyCmGCMSvDYtKuhqsQA7xe2n4E11Psrav5ktKieVdkwkipv6D2L6KZmaUTe8U5PXXVi",
  "key15": "62nbcFyQJey4oKFdK5Zy1zhSMioZGx4gjmdhsP8X4NcDuU3fLHjr3hutrHH1dQvziCprECFyPyMfFzQvboXVpfGs",
  "key16": "2Gb53JWmGXUyydxiJwaScKGZa7jWYYFXBumeNxUsLHDD8dRJNSZzEtFPzVWHjM39E4YXYXtokaseCtZNKMQ92hTU",
  "key17": "hAQpm5SB7x8Lw5UuYXARD135rSVTnaZhBAbY9DokZZt4iShzQAaUL73LQrucioNBAKDZks7B6gThNsrswUeQZyH",
  "key18": "5HxjZ5TYPYPdsLDApSUtvnjcxWJURtUzpHgytJnKWCFof9ZyTiZC1skE2EtUpn3ApfEYW4wNo2syAWAdC3VGTKuL",
  "key19": "3qr9BEVXHfL2S37R8bpCHMqK23j94TDQykKpDCWmUXahSafV5jkdTNCCSzEkxYRvD8QZRYjRuMHMCavefbTYVqp7",
  "key20": "4pKcojEu2VzFzHd5fQMwXerYrNa4arHCy1CknxLoiszdDQh8qBLbzjCxvTKnrstoPhhurj5bvTw3L1VorADwWXpC",
  "key21": "3RH9da361ZjuWZyUqMXcRN2xYyVvbGmXQNyEejcrRir6CDhCTbqSH8QUogASGRvYgtrcoy6URfbrwTfg84tL95hn",
  "key22": "3cGVbGqfvMMVcCfNh3THJKmVfnubX3w1BhbGKKekFPeLjyGgNNZwgnCH5XnVFrPgiwis1psi7boWeG52Nf8g3Aoy",
  "key23": "3beF8k9aMrSt8tnnJZv2qLger4HNuGjvhthGWjLZMdRQ87NYTWTThdAYuT6ptK8LxUx7wypys89kRTBbvVaP8BhQ",
  "key24": "4dbA7is6nWHiMV8kDq2YvD8GvqfmqWkMh59FedXWCAtZc57BCJRuRi8fU6jPEqo44c4gcNPSfnPK11iZjkCroDv2",
  "key25": "zcMqUQ8jJUDQnWeQXeMuDeSkvSJQQ2Lyemg8QQuxsjdyDFCmUtZadkVUb7ifuDoK8imN49Ra3pxdtnyX27qWToE",
  "key26": "ASzHycAaSPsaRdjsbXwu62GcEFiJyXyuRWZsCA2eFp53tPLuPCCQ9qap5hz24fhTyakDhh98BVEbspZqPzigRGk",
  "key27": "5w7SJoexf8uDwAJKmqLzzRewGo39LQwWFi1Xg1NcTpf5bv1GnWP4jdyMsZpQ1WD79oDRyZHBQ47njrqQfnH2DPMF",
  "key28": "5qd9ySPDLigkhKH6CchdQy3FXzqPNFktJcL3yNWdMtHG8fpMUy9Q3NDbJeSXoYPgnJ4tezuNbuZ38Bc4RN8Brdh1",
  "key29": "ZBuRqm7ezFQiJSZvWNCWotCduF2BdSF8M9KC4kNJvWbfMugF9bsTLiXFeCtgxb5zWtjmxLjaBwSrpZ26jmf5LHr",
  "key30": "3wumeQDLEXtZnfN6UafNVydG72SAGpUK7HZjzMQzAL4ugLzYvczdrm9jHb52FrzmdgkyxM1a6BPz6UcMajWsaSrg",
  "key31": "2hdVdawCHV6dX6XD2YTXU29wHnzZokJGtAELK9joYQh1FC4B3hEFJXfrNLEQc8Kry9K9N19dtxV9UdcfVTVGkdpL",
  "key32": "67c7zmFx7rGq95FuXu2gbjd3xZ9cY5QHPXxqf86VZ44rNbNWrQSVt6rUTT3fC4qFxVs9CxUzAvAsPFZzAbEGrCYR",
  "key33": "3ZcfcLEaEKq5U7eePLHoKhitQr63FXKYKURavGBVtJCcj1qaozVT2Zaw7TL66d3vWav1ZGvureLCvKjBPScsN5V4"
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
