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
    "9si26VQWvgKAHKTdRdsCsd2eKS3Hr1epEPqRsmohew5UtmnKc4oDMaxbCpxp2YmtqvPgwundhG7v1faLeJB75uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oErtueMohyXxyqpsZLvsXj7jruWbxyCEkvyCuK4oyEmsEntgUTanSLYzzBMS3NcYCVMeNeDzBnr8jaoDoH2oDAJ",
  "key1": "5oVHibA1rhWzM5c6TaE3v6AL6N4HxxCPwePRSECEXUtVu2uwNbWcB5yLRCGHTesscKV1jeFcUssXDhPJLu6oC1rH",
  "key2": "5CyAYHwv1uwPUPRKAxvqtZbRZJ9YxrrTt74QiHdJFPY4mct4UM7BSuXp5KJBrdwTcSTbXis6ZWs6HwscqJKpxrCY",
  "key3": "4LTooMtGwkgxeARY9LdJTA8mQo6RjcS2Tog56UtydG66onvwLbRvMESiL9JocE99PnN1QyNWSdcDu2AKBycL4p5d",
  "key4": "34rjXkEapFzNAwXbzj991pFhhgNaHpQZ9yopkaXK3GPibxCPVUuo7PQmYn6fsc76VzDJfUjimHXb7RMMmNVrhLXL",
  "key5": "2jeRaAbm6xvgqXUdufHBYYLDxVSBZEuGT6u6qGVLm31VRALULdVRyTbCJdSGtb9WPUa6nKuY1X1bK2ejDL3Fvs37",
  "key6": "54QyeBBMXikyukYSTxBnNeZD5VKGNJaZxtmnuPME3STupoadvgY5vgozKueUbW1h2VFUsAtFrpfXfvT1axbqyNKf",
  "key7": "2y65DgmUrnrVwVmoGwSXBUynaeQApdmbjYDn6F2K1LhPHD33uRYSL6ThY8aBBrhNbPxUnFEEoyGAhqG5wXniMr6u",
  "key8": "3xMbr6o4nfGcxHA3nJfazPPnTzX3sR8LWa18ZzXMpSJ2JsZXWFw2zfUTMGieMtz7C1Teo4HrJVDuEPvjHqqzc6BR",
  "key9": "k5A8j1azZfdPKagpix51izxVYxUnFZLxQdKuGw7Sq322gL7PsuWaoMgmzxaPtyoYrRnP2fmTb1nktvDbGDgGt54",
  "key10": "47no2yCDDQdBjFj2Da8ZB8hRgZH884wM2Ts73B2tzGaSys4nMC6s4vmoMBv5kCRzCAvkgU9YTesqdPe4SK2st8ht",
  "key11": "3VUo92AyzoxusySgjq1GyJruk7M6i8J9AHSqZ9pZAsMQsHSgXp4GgFYwKZncghCrDZiyFkgPXqd3eSv4Seb14uJj",
  "key12": "4jvUcGX3428zt4gabYdh14YLoA6FDzwG2tGXdbKg6ZGgDcM4qm4pPvmTKxdVxNA9aCq4M9y1m5Rr9om7sBVEzVEA",
  "key13": "2WBzSGnGPHtzKHMz9XcEPWn9aCcLPscNs2Q8w49Kn9jc5wv1pqj2Wktvey5nqWcrvndeZwA5jVYCs2M4XpTVTpzf",
  "key14": "x4rDxsauM3vboHojCvDGJqbV2p7GwCqntYBy8TNJFVdurE5ZbPm8qSpy1Ri1jfPxu2AD9RiJCZUyUBZ23doLPzN",
  "key15": "2qMcvTsVG1tRunFCb2RRxQd4tRSSySTUFFsomeuGScgcfAGa1zKapzaLeKQ62NUoNN63apFsqNuSwiyaizFVjQ4X",
  "key16": "3ZaafYYurKR9NypjpodszWKua9ar1kuPzpHgVgdhfyAhrtqKTc63XNaFqvcHoiieCPtcGjhymHCe7ctp6tVt6FPC",
  "key17": "2N5n8Uk2BA5eLLgWnTRFoCUrQd3QCoHzv1iYS9mfQyTywBwmLFn4nRoMEv9cshhRGt6XMkVaAHSdnStJVmeoMFVy",
  "key18": "3BqrV54xRrPNPwWVeBajknnGwncRByoDSPmQa3sBMiMCk9rYqJSqAKPq6nZ8oYi6p2EV7noTNiFEGDN8qHLbEJ6y",
  "key19": "vj3FiRiXrX1jXK6euqnGbSFtQbjbAgEuemFeeHaNjPJx9L94u6nT3LF9voFwAs46rCTmK2dEG4ibGGDi7sFKYmy",
  "key20": "WB8db8ZsDLHq21a3U3C3Tys2Wj1uk4ZUG4jgQqYWLchEE5p2DUHQLRPR8xXoTVEgKzBu3LdWUviJRyrDyfa9YuU",
  "key21": "518V74n2tuBNs4js125vAWfjS6jPYwEZc7tmZPQBB1jZDQMLa6dhEUK4REcW4MfgYedHujjGYvvwF1DTJtYen9cK",
  "key22": "3jqGx88JWqZYmjq2Mz7HEh4FC1Btzg92SSJN4ieDVF6fAMA5BpjwVRPGT8V4MyhP3LxfeYqHZUUFEHobLpD8i3X6",
  "key23": "5xAHtyQEMMcZmH29TQuqU6Ws8ZGJTzPxPgEaTxAKmNwwJTFVMG439QtTvPxbhgeu3SnCtNonax7LniwstrmMBDy5",
  "key24": "5dqTbKHCqg3kZ2zzFLsjXtctsyM7ZY1tAruZmdDxqPqxS8jwjnZMSvtE8EcB7jgueHJmkYAgWECXEPhhGarhNsMu",
  "key25": "3HEC2CC8tw8zNmNSM3Y9agdkdpuzj7qzhQodVETLo8jYrPD8DS4UrcwM7Vwy2iFWtguJHNa61A2f9MNsxE8BHNRN",
  "key26": "4ahcgLEPdmxZvzAM3z8sK2NhvxoT3VRi7K64cW6LSP6kV86LryQXihdrLaijNwtxLp8NG7Ej3jDZqURPaDdgfTB3",
  "key27": "3DiMviEnu5fJL96QKsibiY1MpXVcZmGmBVGroZPLTW4nt3985Yu1Uc47GTPX6WnqHkeCW5PVNZaLrsf2jMitVwNQ",
  "key28": "3srx9LEY664LKKtBfF2seWTijumf1ta24A9Um8sukStNEdUoEkEAh6eJNeS17cjDsS8isogF86wmKVGeSKyAsA9W",
  "key29": "Rh8BBgiuxrH6PQhQqzWLCzsnjacxpBBgZHqNr6Zt6a7DYYE8pebe9yFkDChXknghotKqhYSw7B9SzChfHDxMhs9",
  "key30": "jmQaNmuxp491Anx8EF65LvUQU9D9npVi2PG2NPVamcTwm2tg7pjEJhEtR6oLpD2SYg9i9ZZFvwLBcC3U4BQgmXa",
  "key31": "46yGUXipMYGeHcsrtV6g7MfFsoKiLHJhtMemcaTDTPWDQM96pgPWwbqyhbr6WzLkq5oaLt7rZfrm3Le9EbQVwDk6",
  "key32": "5DYytAffDUV4V8m9VqVj7wmGwnNRefUMD6TCysh8XyyJLHXpDXpUG6Zq4L7rVhB21eW2mgRtpduvgA6cP89FMTg8",
  "key33": "4SPfovS4EA5DSJrMZ5CgieZX6n2h9WHL3z4d5mZYT4GJBUKR7P3ok9WcULnPcLzd1dWHkHZ3fL58EQ7K94vFeZwH",
  "key34": "CgqwRU6ju5E91eG84ST2vASFqGrS7Sytwz3N4BE1vxq3i5M7r2jaZLZMNguFK3389SX7aENvcMtRpe5Mn3wCmgt",
  "key35": "3akzwow5hEhyscHm1eLDSirGgT1paxF7ma1a1AtvgsD2dMukQgJ745f4ZT5dykACTa3H2Ja3PatraAwoDCt5SjhL",
  "key36": "5CQWJegn15jPiNGQDnzNUQhoXf9kQ6onniikCBnqKL3LjrXGsfEvJJxaBtUMYk8xoRKRdc7VKGeBxJoZBMTDReu8",
  "key37": "2cBjaPM6oDU99V4EV66h7VyrKz8HDCXXCiecn4FQ9owiapfz7HJY3s2hxW4yaWSd2QQgCjGb8hLHr9TGraHS9ePS",
  "key38": "52iSu9EpqXnRdnujqLYwXB1WSZBAXg6H4VVxnLPzXWijfeD1R7Bsgz1TftMEjyzVHoZyj37xSqa3sYE8eiuaHVDV",
  "key39": "5F9HdezikPgGUQDgF1WrmDCsWWD4ckdNZeF19A8EAMcmtsc3dc88BxsbAeaasHrArzoJHtCsjRSquw5h5uA83hAm",
  "key40": "2N6DEjVKHwnDs9jjnh2QxLX1jHTA9VFrHqbbtYmhZeth4g3Jqt1y59yqnt7GATv3X5DQHjb7EN4k28Ui9kd35F3d",
  "key41": "fu1SZQrYBQHTukofQEJSJ9g5zGmauBgModWPausEmGUyi4so1hUoYrHp6nCLvAQearXXHLMU3dsJZB7TnzB12ae",
  "key42": "393sL9uwQKddCr1LLuyEiUHNzRPTebfzFj8p5j9w7SRFePAmYbCTiHxoSu64Mb6bd5XD59No26k6kzkzXkixRzL1",
  "key43": "2M7CeWrxxnndCDFAK1xxasigp1JieXncUoirWUSrGazgGv9UBo64oFDPFuzsNLDCNKGiuGpSRwdNUv6DDZsfjcLw",
  "key44": "4A63Tc2q5JCRbDCyWMbfdxaYCQjp2Zj3y38Pqk3EWPVGsusGQqj7VZY9R5o4K4z4vVqJ2EFN3iNz73Zquw4zQ17S",
  "key45": "64chA3vaE8srD694BykaHY1qddJvaLVxugHixnw8g3QoTG6XJA1YkRvGT6tKj2Lh9JSCCGsxR6BFuGhDyEfagARA",
  "key46": "5KAYS6xJUfhmFuuW3zxrZm7FQukF7pjUgn4zcxAYbnXm26WwpXa8bEffrPWGZM5Exhitn9JQcC2W9numNqviWg12"
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
