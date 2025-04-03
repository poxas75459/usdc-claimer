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
    "4pCHH57PLyoGwcrEicSv3t7m2z2xQZy2kgSDcyrd3nZiZsJdirbDutAMS73d4N8moXqJdYNFAqRYAUTkHspydFJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ciaSTkrvcQJ4bmTcq2X7xMF2gsZSHkM2JRo8mscevvWLoTv7kMAWzKv7mDVoTthmiwEXvhsUiALj8nR3mh1ifM",
  "key1": "3Cfztdfve6c9ob6WHGTiBq1gGHNAXrw5Vv2TcfBzn1GdwJtZWsJczaVs1U7tCa864u6p8TWv44VzX1p5We2iy52E",
  "key2": "2TWDUtUxC7uTaFmaNHDpe1v34DnUwDc6RfbqCEjfvfWjFsx1ov6psKY7NkrnUJ3jczmhMXi9wsZpt1egNC8VqUEm",
  "key3": "2opA294YcJk4LEyxmr9g4epZhgQPZ6DWuqigA6LxXEAvZYqY3jUkNE1mF5zGB1YkRWrgB7AExJyh6SjNAc5pYrv5",
  "key4": "4wvVPy2C6rc28F3TujuX32MSxLN8G1X4981Th5FdXuJXxG7rkBCwRCHtq7EvmvUbUxjcdrxEiizcRAetr9jqzhxQ",
  "key5": "5hp2dVcYSsoEEz99zcTZW89vGS3uxki6Xc9C4UHe6msKB5A8vTDLmvGRyhRNxDJdDLkV1Uw7ERgMomvrbEn5sfMR",
  "key6": "4ink3UxbLp1nRC2pyWxeuusWkZsYHENFeA1vrp7GTWyY8qw7r1XG7ukHSqd7LTkZQTFxTLR4YebqKteHcfTL4eC2",
  "key7": "4sypPtQT732RpLsJsYMWPZK69JjfkuLmugCvUtaeTGjZXBcdqZePpVEpEertdZDmmCQBN9Kp4i648pAdfWveXHSS",
  "key8": "bpzGziD47RKNJDXLX345Mt4XuwH6ZP4WGiekHRQh6DSaStcQhZkEQhwJKfgGxeyFKHmwetNVZrbyTjGho6KRu5d",
  "key9": "4Ur3QUMqTXJpCugLcShPYtjxPg591ue4PzocDnq7YNtgwSBdN2hPGkt1HaVXTjfkDfJGJaawtb3d1tY5d9oqoBmi",
  "key10": "4MCf2Mm4ZkY9CXZWQqMrA15EKtT135Le2DmwP3xUedK8zLgkwe4JQUofP8vTEnFLQxW6wPXgzDhQmpooBpRuP1DV",
  "key11": "5GHHeTMCEmyjVg1a94XgLPuALUreAuKkUVgC6gni4PXCSyhCvZzHSddfZMHEUWZb5X2cRjN4PTzxp5NV2ihMU7cn",
  "key12": "2AGw9mPvvTVpeuXd3JKQcjHMtxcZ1cmvsNHGAk8oUChRWatHgCX9FYrSZdZzkpfZ1LF1oiV45essJU43gPXb2nVg",
  "key13": "638UDDAS33AyPt59GSWr7AFGsm6V2YsbWDZHrNq4JE4TrMahJMuLf6tncSDY5q4bpaQBMf1MUyvr3KxC2wwd8etH",
  "key14": "g8QvVtKm647YSENv186NPGVUDxrM2GtqPK99VxF9BCuS36YYzh8qJAc9n7NFvxv4iLHphULfykeGHu6DANzkqKB",
  "key15": "2QxFWWPrDzpPzRCN1F4i21mubrfCCPK2W56zkNFJiqRfzVkgJw3NUJDjSwYW8d799irTrXJGU9p1stVBg2DoSBgP",
  "key16": "43Kog477gpQLoDMC4JoPnNQgbiKrhbxg54SyXerKyuc8jAZjksHSbZZEPZyxnXZHLXpzftbuBqtLToixnXVGjRfH",
  "key17": "5ka3QGHJ9aarWazcaX8oJNV8FjoE9jjEBscWHKvdcL75kPH1d2xnWsbn8giVm9KEchwxsvJNykR5YbMSBvHqjMQT",
  "key18": "4aPyowxHrVtivY9ikXGpczBS5B9WB2WNDEbLjxZqZ7VDGLn1uFRMTHygSf6aDMkmhp3uCmPgTaWrgnFNfrt8c1H7",
  "key19": "2taULPg8RWNYpNkpVrQGAWrrv2jBUnBCuUuiBQBCpGEwnVDMRbUHoYnSL3r3dUMuw9rF7GdmqYMU9HKRnn1tcx63",
  "key20": "zxLiwt8jp64Esf7d4YjVyqoiweAfbL2vUWkv2ts5H8gCxvg7PGJnh5igfQXLJ81rTuzSNAotHAYEQimN9qBaQdj",
  "key21": "4YucoYCoBnBdpKdhQsYWpxHKTTh8xcG7Rq4frbzUZmrDDLw4VmsZT7tzahwLQ5jVW8NCLsVJzNzvBNWg77KfVkJs",
  "key22": "YhsbD9W4peMEXSHRAULuNFmU8tjoTDouxjTQegfkgWg5gX16UC1UM3LtBnxDDSSD9egnf86qUrtmGxzUo7qp2CK",
  "key23": "32tDiMq6kdKsndLyrcrYGWXq2rwkDCuVCazXG3yM7AwByEFWTaF2qLScsfWbRHaSiBTMVdWWCjyp2m1RRwjDQKqT",
  "key24": "23TWwXkt6AXrLzJEQ4QDBRdzto8E2DmsapbHG3CLkaoACoRv935HjtKXyRQtXPrZCnUypVb8oMZ1NcJdkUnisYFk",
  "key25": "2pspFnvMC8MQu4K8E6s7j5e5vWGf7ogTMQKd62n2ESzsP4px6EW2MHEXkRWEqk3EHiCiPFqbQTYEF2dWeNaZQ2R1",
  "key26": "2XYETkBrb67ejwSxJuPHrA6uZBVV8MhjDy7quAvtRGxGcgYAjg7DLJmHfoMacPG1PfwgLXPqLDJPAvwdZFBP6k4N",
  "key27": "61FNQX156ZcsaVqLEHiK8f9geZfPMp7SYx7JgoSH7tkhtJyDAt7ZzMNRwUiwhsG4oYeQhkHDyeFyh4CKSkGCN18A",
  "key28": "9KmGmFkpbYAz5mBMFQ9YEmWRgQX1Pbgr6DzqnWNFa3mUtjKmwfHCWSgn6arURa78b31pfL8VwFaib1XZJryawKp",
  "key29": "44dzuGHRqgDtissMquUmng2ikTK133dxmtxcg8iNEGmxRHhWHKJ86aL1g8WjK1SfA3WUckyVUgAKM9rKVu8TJVSh",
  "key30": "4rFHPtaHqmHQQtDaGocpJ3EZNCxSz4nPZsepHYbCvPtb1Z19hEXsjG4t6KTKN638gUE9YJR1doVhBSK7va1WK56o",
  "key31": "4ERQbuHa2kmBhFcXFrdt2jckDd9SyV2Pb5bwWskJkggzWLFpkKHvUNCnFMMoPuGYcVZrNseGi6KPX9JDhLiZHe5H",
  "key32": "5EYg3d8xRHEpNdFaPvcnJhCmUb81yTsheWL6rNbyJ55rC4EnBxNjmB5QsdWsLyW38bytinQQBnhFi24yRJQo8X7p",
  "key33": "5e437Sk33ffn1fkSWXU8xxegU1jtpZHy76ccN9ku2j9q7gvBSRnN4du8sX5ixmWBo7p7kotj3MZcbnr1ix7Pqc4m",
  "key34": "38HDnQt9UdjYFBu44FQH9Ea9CWdzzzFmfV3Yvgst28Ut1NLmNLnWYX6dFJrA13XDuAuBGFo5Pk6ePuY3DmgeRXTJ",
  "key35": "2ndhXU3vGKuPotd4WA4eUv9mWZidz8ccjcv7zx3FEJikyfVayCN5NScXwEGYfsMFfsmkvbikBF4UexJpg5LXGRrb",
  "key36": "3AH9p5M7qhkJLh59rPSbXMeL7jukiaaTD1wC8Y7HQj9TZJqkBAUzBTPb2h6ro6cSZ8Wta5sReitxYFkmEV2a1VVh",
  "key37": "KzQQ6VMfrP4fL2x8kpjBNoQgDB9yZaZFY3YCRrUwfWVXrSf4MuvExDdnufPaLooHziLU5WfinNZq7YaGkjYRRDK",
  "key38": "XgWdEPp3LmTWVKS7UBUPuqfsWAho8MdAk3nSratPKcyqHs7fDf6r2X83Bd8CaG4c6Sv3QoDGqpGeqEe2HngsYfb",
  "key39": "tVTuYfLXikrqV6GL1Wm9Ac3WzQL26gXbkwqFgxViqMZuRzQdr8tyqo7XsXH25f9ng5uegMPuwJCNZmCUMDb7LT1",
  "key40": "nDHQm9mjVcrmjVYGKuCxA1F1r4XyBdTsf6FkLuP6bePxYDKm4H53x7KR8LK3ZFjyGrCE2R9q4WwXJUQSVNWgyWG",
  "key41": "3atkqjsHnw2sQwAS5rjhfrB2y6Wxn165sao6tzE693hY2neKnsCsLNYyuafZeiHPbZaApZyNsVNTacARU2MNadJJ",
  "key42": "2ot9sFEbrDHL7eG8pfyEKRoQuat4TNGSLevzMdE3LqAMUK5PQUh4KGmx9GjGXaSpgWtNV98EyzSsiWeg65FAcBYz",
  "key43": "62nVofRE2qX6HGfyWPGxNsnn3b54ghCEFeFdyYRB6nTmrTCkmLqs2AmJJypG9MuNNkZjQq4qMArnYCytt1YCdMJK",
  "key44": "63JPtmEuRXbBzxWznp7tkEs3viB2bhWuk9M5FRb7NhsBq7pfAarHcSvC2gpGUCNp5KYLVho4dr64FxtED5LpckwK",
  "key45": "LUHsHd8LZKvQU8m4XCuq8WU6JJr9F1sJM5nxZ1BSnuv1ivv4crqEfBgpqk5WdrXT9FmkYiTAjG8esmZNcLabxpr",
  "key46": "5FMSRdS9L7SW6W11GYWBCaotLxUb3tGjMYhLGqHr1ZhvVmwPjqNw8iu8fw11SVTAziNCVyd57TybBUQy5Cq1csZ",
  "key47": "4AdZv9a5drQHfH8eT1jGZ18juWkysg9JpPGztqLoxaTrDhCyGr21FRu41jz2GVyRkhTodh47TjvvDnuzTuUgm3sK",
  "key48": "rGPSwukWj5UW7sKCtWCJeiSHwdqLgEPwGcqUuSaGJ1hgFN8PX6oiKeMXWZcTdQ3ifuvFvDterWiNA79VnqYFWzt",
  "key49": "qy8barZJvfqwg2H4LzNF2jGdZBmYCxgUkKqENDgpiPyjAZiF2WdvidDvreYUh7itvCwk3iXZXvGKatLjbrymZEs"
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
