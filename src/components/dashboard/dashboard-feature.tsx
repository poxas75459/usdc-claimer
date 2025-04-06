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
    "VNR9UuDyY44wm7sdHq5EadfBU59CjeYzf6TAPAt9rwkUUoDwdjCUQzMeBAwC8Jw3DxGxJkXkyeWfrs3oqJ2wtYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41okspwiMjfPsNNT5TqA1r1ZCMK7vsm2JYDZ7qCnEC2ibpVknr2Ywz2eKUYDdeb83dCpEhv1toDkmdTVx1Xrt34Y",
  "key1": "3gux1pupjRVn5BBz9jt5XvM4G7a5YuPL8SNHyG5PqUkJRAyaue1ao72RZfhvgxGqwFJzUydW7aDCx5Tv36tznHeB",
  "key2": "5om19HU2k9sydHuDQVChz1Re6BTZ9WB4hnENX9Sgujz7YJKkSH9JUXFLdwJPZrqYCm5Y94Vx8wEy8d6PUzT7Trvg",
  "key3": "3BsZX2tkcHLLWYxizKGBwyRdwMhUSbao7KtDfXhdWCsM7taHu3ZynggackeYgKPbpNBbUmkpRBXTyFeHuyREuBNj",
  "key4": "4jrpVV47KRVCX9tRVqXjnYJyW27abweYVpUf59YbQcbVf2zwrj2yU3dhRPyQKkCyoqtpXq6YdqcZU1W6hTTkifxT",
  "key5": "43XSZjwfySLMkoMjf6yLknKBcgqniB6gCXfe7fJGpLEePJmt8jcHSbsPgWSxqaaxLLynow2fWrcLg9tA2gkmAM98",
  "key6": "5iNpbDHwxsPJjwEZxENmAzMQSZmz5z6vMFaPdjRTbNREDyyKJ3jBXs8ZtgYxuq4GD3HBZgpMTWf9PaVeZs2cWZaG",
  "key7": "4qZsSuHWLyjDsGRc9Bd6RUqqP4wBLi7zBWxpBPGb7H7v91VWVp4rd6B2Ev5hxNvFC6gbrhy3tGyJyAj6xyxa5or9",
  "key8": "HzYymjpSdxRRBczKwygiYcoJmDuf5nwFr5vzQWrXjjRykPbTfE8czSWwTjiemx9WNMvph8gfBD3jBuurpZ7Tbsg",
  "key9": "5hkFtHgo75T5bgi5EGj2pdNTkpYinyKpR7bDkrGmVZSR5JrhMSnoKBMtax1kAvZvAyqRL3vhSkwZfaGboxdebUXn",
  "key10": "4GG99hYa7iktbwzfmavRi3UKLY5FypeovBNJB3NQ62EXL8h9iAnPY3zHfpBwgFHyzSH9KpLDwfXuboq7qpsBGK4j",
  "key11": "3eUPTGM6tPbqX3oxJsJULkDfUdQxN8zaQc6o1iDQUGTdaUGp12vTLU9u8kau1qwnuHzgsoLQxySvqKU6AMqdiMK8",
  "key12": "LY7XwmpW2xnYw5AUkpEwAvYsfEqno4B2XTbpGXajKgPhNnENZyGDJ4Q7o3pMyMHiuTnRX46jJjkvUqcD5aankjY",
  "key13": "3NNkoUzLKFJqKr9SYev8ftdsunKSbSTX6adSn8Hhn1hLMuVLzZuf24DmkbnciK9R339og9zfx85pF2gULJDLUn9Q",
  "key14": "3wYknNdokxoHwvnjHrVUVvt9Vnpm3yF1ibw3NZtoF3RCMUKBehSJHjiyZhfUSQWBrFFDxZrcRq9saxw1YwK3ALVr",
  "key15": "3h7LgM8VEUYdJvnagieYAzTH3anbWmd3mncf9viNcYtAXNRGMHZsFn4WPHcPEim11nqdSwFnc5fXrqcQJ9WqG4ve",
  "key16": "4kBjRKD8Dy8jFZg7TUU637r5fYd4A8dSvZutvekRDK37geriTnNZSXvBs57iFG5U4ZhNBrtEo5KHksVQdS5Akyup",
  "key17": "2ActamaQsjn6ZES58gmSnbXbjsn7TKav2qAmKwdcyEyixZskFqsRKEzQo3fqgLCBGK6pcs5hBEmWmPNFDG5eJLD7",
  "key18": "MXdirjCgX2LfmZaYXQFCRn8w8W8Gumv5tXtGVsNNzpMEyK1fnBeqMHfwnestSoT7JakWHZqpgEMz6aL5djbwJh2",
  "key19": "3dLp6dx9zqVbgqeXeVUtoUbgZ7st7vkavc3UFw8qUBGB8EQ1nSw9KDCEXzEPXTcos56pVLe7HwcWDFikLgDZZ1wS",
  "key20": "5dxXQjggPd8nc2im1Ve4PoJ7MpFuCNhV3B9ieYaUWkYHBxfygwMH5K72JHdbQcDWoguTAidVrswuF9kNLcpzpZ4i",
  "key21": "4twrtYkrrj43keRgoNVkxcJT95hZFj7sNWBQLDUmg7Zxzo33v3caRg18fRdKzqftXpahCdroX5gUog4LYFjyQd9C",
  "key22": "2MYg6XhxMjU1BrvKRRqJ2GppXJWmbS6BsCzZYBWYqvDej8yWAE9nRzdCX8zzTeL6yHh9f6q2oDPsJYn2JAh3mPKh",
  "key23": "2fLQeoGs6YHCHuFZatRF2RRffEELXqHSqGTofxpLyRuetmy78yK6Mq1n4PuY8X9Bt61oU8ZMCoLPVgStYemkTuu4",
  "key24": "tqguEdhrprE4FkTW6z8XdbsV6HXyS3riJDq4nn6qtz7pPQRagwS7kfW6jNM7EtcWDAEqwcNcwWdhqmKoFwQ8eeq",
  "key25": "3ZeAoNrAB9QpsbTbA7oiXhWMbNDwF7nWQDQzx96XtgjAUaZBaRtZXsMzULcAeb2s8KwEgb4n4VMULfMrY8mZgVA6",
  "key26": "2iwxXGAipvyc9BwqAiz6Ncta13ZtvXwkFLytweiaRXww55XF3qimnR8ouxM2WPaoztUPCDCD1JuxwL49PPXzyDQx",
  "key27": "4HewHGh3cj7cF6968uryvHv7xHncF2BUimNDHewHy268RoJMReihwFLBgf5aunun4RznAUpeWHJTaNKMAX5Q54jd",
  "key28": "3dpAfHEG9outXNnCAicHVNcoVAnXBnbBDVDPx8fV8UEZUUWSqYwtXFPGYEgtuFTJWVZeG3yrZReK18YWD8mNN1vq",
  "key29": "5G9UwqoJ3e4M1UFuuLv4P8W5M43ZxCiHh8wKqRfXwjg7zZjRDBtM1esgowyNwNg6ZjpGJz6g7UFgd5Vpov8n5cqR",
  "key30": "5tMQtG6LhF5Y2vF1n3wmcXLKKWgFbT6s4SKM5Kp1bPJtCCfhxg6asdy6LZnQ14GUb3Mh596pVrCkRow77fygCWp9",
  "key31": "4MvFqLrwjZY5PvMyNC3WM7nQPrqavasgqHcNZ2GCYWrskdLbc6cm796UXvu7rs97ZXR7UnLaqwi7XZieb7AhrqJn",
  "key32": "2ms8aDFAQbpGUxo3qJKsuWkeQnTGqRVPgnJzo93pEuTxkKwMFnPtVebSJ1rpFdwt3q4CtV8vMhtMm94FYZu8UcsY",
  "key33": "2SaWtCBsFgij7gQWs67zEvsqVEiCH59VdvrXSFB39uwB9RessCuX3G2kQmjoFTrTcGn1opgeSdnA7i1sUcEhTyce",
  "key34": "5xRxrJb78yZXdJULcHJqCsbSkT1m9SYC9pYKTTtF3WseUa8RNtRNCtffSXokKkjjCkcEtmdsAevStEPY2rhmD7qt",
  "key35": "w8QpaQkX1GMmFjV2dYqp5tVZRZ2RXdVSzFdt6hPbbtf2md1CR3s4Km3vsjGT9U6NQ7PRq4hwRqBRLjxt16RP4XT",
  "key36": "3yBCX83aqhYxA65Z6WhWM6yBJ5v83SGAZW8L84n9e27c4i978m8m6TJ65AoFeKzFMaRkXxbJcqnvu8158qCuppgm",
  "key37": "2r5Gp2oJE7PPsMMK3mt366rgUYvthhHzm1fhAkfMrTHTzG9LvrugNJWyi3NUDLfuhF7fM5Wv35JtrqWDGL9w6w9B",
  "key38": "NKxaRZNVabANyuQuZBsgpmbKkR4tQZE7RZNonTJcT9yfBnNwCyne1svjNEuAYKuxgr6iUEVXYBK4HM3i61ALesm",
  "key39": "4CxhKowPdYs9RyVsUNexrEQKcL8EYMmXz5s9tjQWyd9ws3Jjob21JgdjduSsPWiuYvE7GVeDu9sxsxrpnCdUhVws",
  "key40": "PrJAQnKajRdtVatF6m52Z9DJ4swYmcpSt2yvWGbXJJpiDewH8L3n3Lw2QhmKt3ZRnm3e9GMBBf4mQAwCLKx8EcZ",
  "key41": "2T4c6YGBA94u2NQZpAMKnD5DcdrUxr7hCGa8JDGY8A3CkyPgrP1zxkB3SWiEymBWDfkgPPzVcHoXLhBVae6pTMyD",
  "key42": "4UXqpuvZ7tsU5DijbAbUX7t58W5xcsoFhs3hRY7DKG3vbxZUGpUcC185iciP36t5tZpG1xBJLUTuZTyZEtRrLBCp",
  "key43": "5V9xuB3ion1RiTr8XDsgkRFcEU2jC5UT1zVc1gB7BgFZrC7FccAxkLbtq8UxDDKPptu2gwt5XX1QpeZKvg86Uy24",
  "key44": "4gDe3VRtE4XoWQ6DU85eTpUgmhQUSGVoa2W7yma7BuGAgn2sLkbTTyBLKsot6WFVLMyyrK8r9RXNcUXBhvLZD6hT",
  "key45": "5DHuekVswctRU7JE2VFUy8LfhrWRowKXY1YKG1cJUUCqB2rTBCFoMBFgBJ2gtSeFjDTzuuQkrZRWxhAH31DshnKR"
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
