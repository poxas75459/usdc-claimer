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
    "392Vo8mgKhFmdp9TYUanx3ZKLDSguduGyuCTpd1wHgjkqczqynxEMdrHvz7KGg9sypufrqBgb35NE6jHL4Bg4VF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZcuksAXhbZux62ge42h2frxbTCm7DVVeHHQuvnYctjXUyupvSNoPHykdVzuGHt32ynX7gau6AsHqbg5DZAx166",
  "key1": "4rNPA4z32PpBEVbQ58imYZCm8f7DpCyai3b6k7fqyDHQVzma6nZUciBtXpi7rokgxAWEs4xWk6tKK9HaWRtpRcUp",
  "key2": "2jaRGGGEPqPNS81BtMoTcvmTPtmEuewtBhZrdDJL6vnKpuNbHSrX25NfCKxTVxX7XQXzf5K6S3kFWSK8Q5r7t9xu",
  "key3": "3zucisx7RZ3Ph9oPfygTXq8TRWNcJTTvAai9VAY34rktd5cUppkbWiJM4aT8s5j7yKjGRK3ufngX8S5Eoq5u1Sxs",
  "key4": "3FUTDKK4htFCyTEHs23bp82e23c9EkBYCqGsG9aXGieokQ8HkyoHHoQWdw9pBBwXdPpLPwjPkuUXLrLE3XxbYyD1",
  "key5": "54k17v1fWJnAHr1zigjyunNW9TJ9V5zmGyNXj4qDTUDxZkVG74wMVXQowEobLGrpMkbJYKHzsaA1SwXFgUhoqqLc",
  "key6": "53bgbMUjHcVQJRzXD7afUvMscbRGV1Eos5x9t33hXpfawM3Pqyo6Tx117Bhu97XBfqH7XCvd2tbnEq98qh7cNrfe",
  "key7": "5jkcK4bhD9bozHzWcaWMqwvjzyarXUxAWvwPNcgVVLva4xmKefBHP25XWwa51LCBGCMr3zCpG4iqPrqbEKzVgNth",
  "key8": "2CMZab9TnAaedWc4rRbGKqFwkRMfW5m5ZYZGBS76mPTspk13UrS8Rm1kPyVkukVpQ1FgS9rcCzQjsYjox8xz86gU",
  "key9": "2geJyveua2fwfxyjvn4NHsY2gaTgyJTe92MrTDy8jviaW5Uhw6oeWhMzj6q92oCU7riwcRQW3yfY1R5c4GZDyBDz",
  "key10": "CMLLxNGBv4uNwTpDs3fkvhqouG6T8aBUuw1hCDbaQL8wy5b8ZvdMzLMU1s1JZswzEmE86NCkSpna3ac5nmBV5US",
  "key11": "5t3haZFQrT7PJKX4kcqHPQpAFymbMD28fBvLD3tioDLC8tDy7J7YEDKAhcHRWM6CHGMvZHyBpLCbzfKJPdAnXYkH",
  "key12": "3QnjYUUWfVHGLVcxR7hhMR3aifAGtgtrtMYA2Z5Vj8cebk4W79KrzrDKLN1ufr3gXjfTyUSfYszdywoWxzZEYvWA",
  "key13": "3LauAzt75amYpRPWpM6PWacTaDdD1qZT2nifjtxnv8cJXqPSgNC1aR9BZW1iNE9N841VGjweNNBzedFdj1z8FEcQ",
  "key14": "X2dPp8aEzvLtQApTjhUGYwufGQz7GzDsEZwHkMV8FfAAxZXkz6gYBqZiNqzk3ctv5RAKco8EDovdxC2nNY5nEfK",
  "key15": "5NvQwXjpXYqSZ9ifn6GznzkivTgXxo24PBYc6jFxzi6dQETPuxQXk88T6wDkWEmJwRzBchxb8cuhgg2hATB9Q6kR",
  "key16": "3WQog4LTnk7Pq61mKGtPnEpxNE5rsPbcfWp7pZAqmaeEQ45gP8p7iqntd2HyW3CxM7sgwPoDuDvTV8ber8YAJ9zV",
  "key17": "29PUck49PkjohvjjUDG1pjDtuTET2uXywDiXwWrK5VFmtH4qC7Y7soGEPWVqhD3vdM6CM8Kp8p9n6DifCm9fcJ3e",
  "key18": "2BzQomNaPUawpXEmBDDW8ZPJ3eihfo2BuY4vGyzAmtvv29YDrwxjMhwaFvLG8KrPaYL21QwjcE5ugtSdcuCRB6PJ",
  "key19": "4m4jg3QHtm4TpQ1RtiekoaWSzFiXuCwkrQqcPCDp6dvXN2H2dSQm69n6gtLbSSh56SnF1GGeLiXjgud8SgE7DDhE",
  "key20": "5VwbW7hfoSstTbhQLqSSyu816DwkXxXqR59EqEp5EM7ySCEpNiiDejs9y5CXppL9kCAp5S3PHnHDb8ULb7qse4gE",
  "key21": "49MjfAGnLtZm59jHaBBUuRm15s6c672ESHT71NnfeNk4SSZ8w3pwaa1PiW6DqxqA4jTu8xWFCVF5uf7oFvMCHYuJ",
  "key22": "3N8FJYgHzTLKxKyTWw6zHgb2h2EYNnCZ4Qv99NYbpTD6eTyFgoZQrJ3muVCDYTsa5jC7m13hTUsszmkCsWDKnr3H",
  "key23": "5PYpMRj6zQNfNaJCZmmzLmMtqgnuMWSRiye3u3uTdCwgPwuqjYHAg1ryXkYkGQhbFJqAABjq14G6M3r5waomKMSJ",
  "key24": "3DtYZ9sEazxT2rYk5bGv3KWoQtCXEqqoYNiGZmwFRyXepKJrU4TsRkH1WxJmyvKzaue1bCHDhz95B4rec9Ytthuh",
  "key25": "31sPPGvALD3q9fH4HRgt6g9UKefBFojg7H4DSd33iDPxtvnYSeahvHPZLCGwX4dc2Y51wWE99Xtp6PAX5E85zxJX",
  "key26": "2EDGQUj1CT3fkjW6CGCb8wQcnPUUjXGAL1LhxCRbYHQEzktYkL2vr7dnUDHJBowAFAHHZnKKEEK8vTQKEq1ND5V7",
  "key27": "3xLi6RWdcrNneoe9HYZr74A6zNnndmMQCzNbyPfsnb3CtxreuZN2hif75PrvSbx8QTCCgT1mGTzP5KHMrhnPDb9r",
  "key28": "5KxAkx8KFL4KzvdR1UzM35HNbTtPUbH1VF2ySTk5eg3pdqadCumh2pyfrz4avA8VzwfaV2r2nyjSGnHwQXaaYXpH",
  "key29": "5GGu1QVPNo9AL27yrWnKBmc1MxRsejGGt54Wi9xyKTNxx5QuXEE9JJG4N7oEAN18hJVwwTpUbmYUWStpNGu7zbs3",
  "key30": "28b4kwSL6JVReRmGFYTW5Z5JjYq5XfyZZpKcFXso4Y9EJBNMJG42HyJ3cJAPyCTmyJNdwXdvVPu7mZnsnEdAJGS9",
  "key31": "5r881VLqZavFiJifRv6C1mhvBXMZxnM5LBDxHtzYss7TG8mQqo32M4181LpfvDNGJaXgqfG8CLwBEdqZeBaaEiLt",
  "key32": "4A8uBnLsiziKbwzWtX5DE11LhscmBgmNtS4srjSjTR1pHZJfRhRjaMm7wqxQnCx9y8oVfnBfcWKsJuMnoNDtLLj1",
  "key33": "4hYekBWYSdsMRJu4N8Ay5ShaAVZVuvzLmXdfFQmSqoPAFG6nbCQ2RLMiJ3FZXE4jX9y7mcrtsZWPbjBgcr1SC38t",
  "key34": "5Vpnw651QybycZ6g9ohccqwe5hrnwfZskXQ91KM7MPcPCAU4JW97v2UivEpReqMTbSaSGK31cwdVCwRrLtRSr596",
  "key35": "4C6FzMT9H5coo8tfriZGBgf1KsVAkUZAfNEVyDaR13RBvP4EjSWSWW2HpRVJLkmqS3dmPUPzsnZBh92egJeHhNva",
  "key36": "3ZtmsjqjHZzZ6FHWN7hUAfpgXfVoPL91paHSanJbYrS6qagZrnWy4SroPy3LkNmSREdK1qPbuRr4KLEbjpmFrsp9",
  "key37": "2vKMxR1ek6QrdZPUvG5bSTxAP7UBFn9vQQ54taTcwzpCAhtxCqJH8qTFmtEHKWvupCvHPwXmdhuZ6CevKY24AYtP",
  "key38": "33Vy6FoubDXEsej2M6cS3T6WXDnMkeJZKSWunjRELMuVkCpTAomwJx8XfsxReScGQj3DSn38ZwcGCHRRjStSf92U",
  "key39": "pPUP2uUZ3RteoT2s434xDbvDeRr7MmZrKY3SGmkBMMsezAN1MFrXGbc2VgfzAddiFAFVix4917ED54o1UQoMVWk",
  "key40": "5DADQUjRGQpPdNPYYGp1Hi49knN7UNaggDqMqDBkV4ghFoiBLHWCVeEecp2wzFgzVigap54rXV9aEu4cqPJXjYo8",
  "key41": "3XsibiUkDqKT3zaok1J7KKbgN6JamgbLRUYcUm5XNRk3dMPEqZDt9g9LKPcXkAkCwTu9Neb9GfifHknfSpLPjkF5",
  "key42": "3HTLpErU6d5ELBZxQoHEdHctVWBHtHTUfzHdqnADyTUWZ17diAnyhH1AoRhLXod4z1e8kRgkAdjUDfeAbVPBH7fu",
  "key43": "3B2agbPAs4zo2eXkmGpAw5xPEsWhbpphMeiyyk3Ly5XfxQBfyFYjjqEM2vGLDaLNyY2MpDBqWZaq14f1ZENEC1wi",
  "key44": "sWTpLxS1nVubJNCqdBXx94b8ZkXQEuzEB81shNCThdJfrmhnwzDQiKNq3ZHnEuwkJan3s9Xmyzv5xCGxy8yQRJU",
  "key45": "2dwrowHPWrW9fCq4Zr6S8SJEgp6pFc4Q9avkxxoANYka85jh7cG6XXZJnUmNdLVFegqRz1K2dfq3ap95wT3MBdxr",
  "key46": "ZheHQTfA12dKLpaaHkcRn8uFaf5or3Xrw3tEE8m9LF9tngPiiVEt8cEUHv9MAW1xQnVLKnZZP5Cnh5q9e5X5Avu",
  "key47": "51Yq8yWcLc2hvBeHW9r233LNBZxuciGczs9ZZituZicGvurmFej7XuV2XECmuzYtjCFFpnb8s7nwegcsCRm1UZbX",
  "key48": "22Rx5APN6cUvhvCjgAgiE6nJ9z2ihoj2coPJ9xHwzHaT2fQi2bbicnynvEZFQf5b32ysN2HQDuYV4oLDhJfTybbF",
  "key49": "4vQgjEhVZvbwruKjEtoHqZuR948wyETYtgUdaC74zvsNWn27vw8sVCchH1ruPQA5DojzyaiR5EwAfCfjYyvoLMBb"
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
