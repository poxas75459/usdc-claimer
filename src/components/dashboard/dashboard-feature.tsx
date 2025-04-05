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
    "2hLWL8fpnDojGKYJoSwXDMn2MTpweUeYTz5vCJPgsnjB3pNSQYsuufg2qqEDArdDfcnFWUC434kiLoqvUozB6drU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oeWPkzVLoYdATzAQ5uPDdN3BSY2u76aGhTJe1Mo4vrQJVo3oSePdJFyb7TTVkPNsR8pfgn8Bh3gBJRkGR4FHA7T",
  "key1": "4hrTc62pT6iwFGTVAmCuZYHdB4SYGaYTd379dADLhPREUAAeU5keGgn18sy8QJ13M3RciSceMx74oDebDSGcDH3m",
  "key2": "3Gkr55DheVe5ZLNYQmCEHRUwwhKJt9qyc4Z3Uyheq9r9qkjrVRXbnJExmZxRHrNzsDQmDPrTap87UVXNs196d6Nn",
  "key3": "2EMTh1TurA6HzHNZJ8LUGepkCoHtaSpVuXV3wUmqh4cGkJg4XTKWGc44aH67jVQKX1hgUcAaAj3CeBRVnUQ24zjY",
  "key4": "U2pt4NFuyWpn2NYGFie1rQt1FcmwBHLgAkfHZ7NDrKPkzptWRxBh44P6B3m1H18QenZAhux9fASH4d8quCjBXLq",
  "key5": "3oxT3Fgwyw6B5LeEZETdzqcekscWCWnpmh7XTiHTnkXbMKNiU3PaEvMoz8fB23CaggFZNYBbsFmsan9NB9aU2vEi",
  "key6": "2ZhwK3ZKD3QM4L5qUzBaVyjpdw2kKeHAp3HRSihKQcChV57G5H68DdQnxL6iNswNvTiGrEwRbQSqMshwgFYbEiaU",
  "key7": "2dqSpsPdrUrKQJ8Ni2xdJiCX3YNhGXCvHZcymfrGoyMyyuV3r8xKt5rNcHVwUde6hRhQBsQxME53iPsafS3DJUhs",
  "key8": "2MV9c6ByDV4BJDYqbcNQmzRKKnGimaPBivzCee4BLFdKtRwFppMorexFr6RSPewd5x2tdPKZhDwgzaspQNkbphbS",
  "key9": "2d7cL7dnqxvdRAvRjuqrjCDWbk9b1mP4euVbRePSP4EgKVoypbKPhNiy8QGFUhd8BgLDUYrWVCjznmUcaKv3zKbx",
  "key10": "4MyTipicmKQxw23egLAdWzzQusXv3iorKJN1Q4gpGkSEt1opCZmndxCJ95XViFVT5dp4HC29gq8BhD9x8Ft3BvD9",
  "key11": "358wuJipdbAhaLNyGXVHcirLZ4Hk6emvrSNERapranb3EaNXRzpu769vEDLhcDP4mZtmLjp8sYoAj5qrE2JbU2AM",
  "key12": "63CD3uF1FQnCGytZ8fkLJ6fKa3QQiEenJ7C3xjkEsuHiv3E2wNU5hJSZqNdQEmdQzWZbDch1XpbaFjo5UK3DNjNE",
  "key13": "4dwDhTNaPDWEiEa1MwtHvHJYFoYAA7ga2Ey2rZNrbMoGHiqDjZSgX97RxdMeHrWFXx7NzHzxkPjuuqRFePLfGBsV",
  "key14": "h39MY9LpP52vXMWdDmjdxMmJbKsBRw417VUPriSAssfoKrdbnrRdDiukHCqthjsWrKNwsV8Gegs7ZB1eGxezQp4",
  "key15": "3BJFn1WaJojitP8Cj1Tp2CmUBGLcTA2pVvWVRTHXQVwAgaZ1fk6snxrSTF3tRmLyZK98Ktz7t7Uojdb6xe2novCS",
  "key16": "3KzqtdoAjgz61jB6WaC5n6sHePCzxcf46vgnHZUPxkc3pRNtEYx8gUzPnV73T8Uk4TYHDgLGKkBNTECeEvnfu31c",
  "key17": "5A9RRwS8hGDtUkGWCJjN2mYsusQ6xybkj5neCAV2b7Xj7e7xXwS5ebS4KLab1exKRGbJcHWvzpqvf29jSGeaqTjW",
  "key18": "5E1KZP5zZC58LVUFK4m2YQhaVn32f6W9LFqWBDruucggKy8rCGywfefL9k6VEkPhvru7KrfBfTENQHcr1qDjwFQh",
  "key19": "2sNhAK11bWoWBVug1AhdTadsWMCzFp5UizVvg8o8D5KFAD9gMPZaAHnvUdh2PrjxKMJ2Y1hYriJWy8tRLfmigsTe",
  "key20": "5g8S4RWnXNEyhFR8fvpxfnjNDfPfezVwMVZWhUbaA3SiNaMY6LtNk3kYNn5dJayLbRCjd2TYX56AMGP2Uf44wWXj",
  "key21": "5WdXAvjcX47GRyyWcn3nV1kn4MnfdidvP5uz9wB8skBMGivTwXKs4WuPcttZRAE5K6uCS6XtEPrmEsJ843skZ26U",
  "key22": "39ovKjzB6zg21ANW1uYg6wiDnPagjPm6w3NDVa4Tov2e7NSnvhkkwZWCp6TCDASyPn51k8a31aRNynV1Z7BTHfJr",
  "key23": "3b9eZgoXSsp7tdMAML9mqj11ErpTkFfW5xsohzNx6wPfzKXyYzDrBfw27gkUYb2s37xVkBCceZMVqNe34LSVmj8q",
  "key24": "5duM2d9mhFtBiMuXgd8xps9bhgoU77EfJGQ4dywv7Kwvn8Ak6RctFj17FTo3MfYi4K9MJpxN5CRmvPW2GD2GeDuC",
  "key25": "62eSiN8bn9HBFQBbxva7YyJ8QQE3tcZ1AcbJxNbxZDoKE4gZdyrDNW15Q6uAVjRnCynz1xmJ6gdDarSwbenHrkhp",
  "key26": "2xiVbYQWEzG2BFkDrEvUcPXk6uDh9uNPxWTbMY4DmCp1SYfczG2n84XPg8MpvCoNiCpBWQY9EbzamGHTQx79ohvi",
  "key27": "5mte2r58Mgo12R1SWsJCCururSQjjN1qopxL8jtTFJ2S4emsnHcoBWpZSs11f4xcMu7N66iRHyRmLCANcv4tPRsm",
  "key28": "5A4BR7rk4b6TNFCYPns8Fx2wQiYoU6FjxD5f7GuD3yxprAPZHoKhP9EfavbYA4xCSYQtpFMD9qufsrXnZntLzma5",
  "key29": "2wBQGXvPj79S4Ur7NLNwwu4yU4MX9vcjfFgNSMSyC1gXhAGD9PvTuH1S2Q1hCenkzLCsA9HrUJ1v3v9AqRt5orov",
  "key30": "2fueqdfWVJjAXZmNUAhRGVAVSgFdrP6xA4o3jrCNxR3bWw9B2XaGd9apes5znJdD2smbjt5Xcaz4jfdzQ4FH6C7Z",
  "key31": "3Dj3peAziDjbfmG2osdPDATVXrVcT3W1xuZY7hg3mhp4xwkLnJ6VgLP9KFUbq7aVARjDLdbMUUt3feKYsaazcGhg",
  "key32": "22enDkdKnvvXqA7uFG4Agmi1ixNLLRMZRvURdNCfQC5vXiRZ7Hb15wzACAEqPDvcoPc67pyg7kEMaV1AJVhBSYAt",
  "key33": "4qScHVVxTYGsi56zbKarovGEw89eHiRCrhsRpLhCWikid7Ju5GPJfLA1YxdcjKerHDQKoyhwVsC2V1pEziQAX82W",
  "key34": "TpjVXy1CNSsN2sNVvoxBjsFA7mHGAaiQ6n4Dj4Ahz2DoZqKcX6tC9J32kWGPtswWRqmcxa5CWTLnbUdbbg4T2co",
  "key35": "WWxRQPET7RD4e8rZ4mNJWq1Mq6JAeapyeQ9kLGihEgtNANT4fAScCSLLecEkpf8kczaUEAPucWsk9qQBbLrKfS5",
  "key36": "31Mx8CFT2xDiHJ6bRpf7PDVS3oP9yHjBBTKF1xQwVTk54MgFxgePubvfHXsVFMjFNnpwpVJtoti1jRJ8cZnaxMVs"
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
