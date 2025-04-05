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
    "64qDuhNjUDXMh4foTmNSe8zgmnSbmHfo5CNyK3vccGpL2po1DSrM74AarKkQ9f6eQPLw3sAgiKANQsBqucH4kWcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1peafit1SDSXx99ZGRe3Djpo25epodZApfbNGSHccdRYDLKPZrhkXCHe8zU4dAVoLbptuJ7d914FGCnbqDyGdY",
  "key1": "58Dqpt7XTSMGpWQbttygDp4bSXEgeT66mcNAwo9QUy1UPSgmFVSzZei4jc7x99cr4SasvWnUpi9igrpToN8bDtQz",
  "key2": "5UVgzLgBLPSZ71N197oumUvf7KK4YvWeA2SzKHLcW3WCumAwJoLpa5RG3Xf5RKXdrF7eucY8VvwpxEWNvxXqhwg2",
  "key3": "59xF4QohNKLw61AfSay5daVfgKV2qxmmegkfzgzheaWjegff9ho1uwz6bMPdxpn2XheQprXxiHLUvVLDwoMh82aF",
  "key4": "dK9uN9jEKygZQk7fgExVhtpELkpWULWX3KKePSYXcTWuvzvxHZGLeb3PAh8zXfMcwHmdc2E5hpfzjDPdz5PnbCX",
  "key5": "3dBYS49K7mzQqtYid1HauJ85pys4FGhsJkGaxvniDe3CiuNWmsmWKkd1xS6bU3zkN28Dgq7aTrFiKYEAdt12UMta",
  "key6": "4U6zRBd54dsY1YSKgXDe4AGqKzhQkzXyRfCrAHNTXuRvsrosGRN4c3FVU2GKWk5rtqNhC84gyq1VepCR8KCGWh6p",
  "key7": "5bY1fT7RcCP6T6N8XEhjCQnBHpNFRcVdutKv2BNcMqhfZsu4TdrEtx3KM4xU6uRenswcKbfAwUvn5FhCBLG6kzuj",
  "key8": "46T6LtsgAcx8iJYwrLJoSeVAoGtUVF2Jqem2mW8AkUXcXWDiT8uzSm9eUSQAqaF7nRqyGekThKejMMyVZsA9JQtJ",
  "key9": "42CN9pYrE78kz8Fav6uz4ssKs7mhg4Pt6rzkfFyHjnGJ5jtc7w7uBxmb4LFJvXJdwCZubnijsggje7F8S11pHqkt",
  "key10": "5fyAqYRduphHcV1yq8LFHsc2m2Cu6PgcWom84vGe8eMmwuHj3ZQc1q9caE2wjW5duJGZWsdWr8M7fX74bu5wKDdL",
  "key11": "3mMge9kXmSkcjXZq8zDCBgnPz5Yp3PqCav6FGvnCdDvugTyhy7RsCSt4ZGQemse1DjBhT2q4jKPoDo7GescHGwwX",
  "key12": "AhMxip1gREtMLjCuk9A3hBbhpxZMPWL9cXeTX2bBtZdASvgi5VxNf41dpKujA3YED7iMcFYWn1cWBXfbjFyHXcL",
  "key13": "5fw8So72JPN6ia2C1rhdUUntgt5mJNME2btwQVJZohzh14K4pmTqbqQS8oB69GGsH6zv6R91DvcSufNGQz6Z3xKe",
  "key14": "612VDMgRZ3YQNE4sij4ge5CApoVtX4QugVSJKNeDGCwL9bmHXa6DRwxd7FXcxXnEWbcAME9p67fFaV9ai231c9iY",
  "key15": "m5mK3TUxfttwCfbW3jN4iHeNhVfiyoWhjsyvuAFwxTdDmDW6tGsVUSCbAs2NAY5XD8SLRDQ1Pt1ynFV55pfJSRf",
  "key16": "45WUePdk5q76wMtefZA8tHT7ikjw1jaCY88CFjTL26BTjHeViQY2fHeC4nXtzVk8nEbaos7WV9XYEhUhWCS8hsdP",
  "key17": "4APmak5NaCqdRvhhR5K3QVVcWGdVD8ujtkkgEQ3ga9tkqaTuP7G7UfpNDpq8zfdSRbuhx6vGgbjcb7bmsxrR6trU",
  "key18": "3v2cJ5ZBvpeJ7tXuJtRfBF9xzk7oC6GETrnsfyNKJwzi39Na2H3VsMibELSPcSw7vCM4iUvnvrFhdBCVwRfCgPCf",
  "key19": "4LRamdxZbja3JrK6sWNQxTqGepj1ktshn9jkZihQRCnxgTKMBcrx3SAoUd2F36cRyX1How7TZmttUzQWQgtDx2U1",
  "key20": "2chf7TtnSWTUPa8g2TRzqvL2ZdC179SZmevkKADRSADokwa3oSBFdYk3q4jLXT5YEHJKkewBeF8g2YYqrK8s57BK",
  "key21": "5A3JWLwZv2eGYAMx55W3QwNVSr4BtdKqy4rQFsNUVmcHHjJTXMeHEPVQXR8TymRvX3bh74TTW8ofgvdGsw9YxF8o",
  "key22": "52jxuZQRWYFaroKCALiREMP89nMbaNXEUtBaKHv8wBvSYwSAikES9Zi22McDuGGPxLDrEKcmKvZ2a3ANti33BYth",
  "key23": "2h69fevfucidZzaZJC3FuCLNXbiDJTed8s6R9CjUcMnf2i7Z86TAGf7RhaFqT57eSW3UP3Nne9Y8eRrD52aeu6GG",
  "key24": "56J53L1tR4wWMdvx4yAqLugcBqPHgPxjTMXmGJNiiPRbUNnizVoikM16agW9Z1d7JRw3sT9nYLgtz3cQ6D9JBELy",
  "key25": "4ibsRMwXRBfty71KuEHe1MvMUKYBY5Vsnyj8QYjvdwahm88smeeEe2QmqUX2Hvrks9vgECXC2t3VWu9ZfvSRXwrZ",
  "key26": "34QdzCZV9YtVpQgn9esy1QXxgMcA9XcrpaLdnyRRbcdHZuamBWXts2zaTaaViqaREfGC7fNfh5ToQiKvMqjWpwfn",
  "key27": "4wB1dtPK24iksApywK98iUCGNLgTuNiDizRyTFC3uYkdj2FTpJqH3613deqJ6TeQK5tTnTd2UDRdk5E8WuZ2CJaZ",
  "key28": "2xisU2HifAP3fcwrRkCW21eeXo1bzMbe7gy7GcPBVjDrsaUSTqUCJUu6XhtMd1oaHcoj76JiRLNzazqVaSe7EyUC",
  "key29": "ewzyNtkAzuvM7FgwsC66yKUmVq6Wi8HibebjWVD5PhCUC8kPntqx7RTSbD48Y2a68LnmS56Wy1BQ6E4JLhLD1Lu",
  "key30": "2Vcwq5w57NxMChFWAVdZUBgs7kS4QTWJwFLPiXqexbNeN4PWf4H26LocphhXyyMp3cRGwYoKTTwahPEJ6ANSnaPy",
  "key31": "29CAfPgEtEGf2pGD1ccqyturF7GzwtcUXDawzNymHgiQzPwkZXu2sWqE3b8evGf33LRdWRRcdnKPJfhsxZ2zTNtV",
  "key32": "4LBGTmsooB3B9MgNanQo2zDkbVtXXWJSixv3G5p1X8kHShK5xfgSU6gA8qgEL5qPMETt6cnbWK4RUSg89aF9g9LU",
  "key33": "2z1XUFXahzyJi1cTMeoM3CXw8tCGYorXaCgo36TvRuXV5UYovE4zmsbXT1L6qosgdsHwU5o9wx9AkhqRSD3uM4CU",
  "key34": "52WSMwCMekStzz8aXBdJ9nitgQtU9JjJaHs32eoGpwjpW3jd6QmKgaSNKMLP1CwLYe4ZpZZA2DEsBwcu8fFfuThw",
  "key35": "F2n6CQobc5ZD1Sv62xwSLR6XvgmPXnHqGrgDxFYsjzshCUhA1u4qNPMimjjP8p5GNQzAp8JZ3a9D84CKRoakGQk",
  "key36": "4mMm6gkJ6hq87pSzbvecbx3GcxxQL51wRfuMAKVCwQqaM3d8mwh1NZu8uUecRRX2tiopVjcmR6uxi7FXV9U5h8JC",
  "key37": "58JMwh8pcatfT9hSVAY2tYes2ETcKePLayXFPycKyDBuBYqQ8q3JgH7JqpWbcWZsYQ2HbgE1gfuprS4CS7RXJHgr",
  "key38": "6HBfd1mn7Zd4GbxF1N3LXDcGWb555N3XyRzro7TceS83xZBHAxdBGpX9FAgWPt7mxHfeyPUjesoApSpuM9YExfK",
  "key39": "2jRXivSdhun2JWVdBWRZWUmSJMkfNc6LgQH6v6Egj7iMPaB3iugu1dm1ASDSDw8DouxZLGUgdPZ6yoE887fxjjnq",
  "key40": "3yGr4e4EDByxqoYmqrNwHpbCZMi9RkVsbEMSSrxJffHTu9wLtrrpvQXBhHLfMiUkYSLJ7iM2ff3eVnD6u4VtctsL",
  "key41": "4KEwYYS5CarAjUBeTCkqzDaWFK4CGiYh4BHf3PZeNxthMzwtYWJeMNqKwqnJYLMjTg5R3fG9NMaTAdbK7vEu85dZ",
  "key42": "5UYeo1Degd2vvFDvG2ZrD8LtKuARx74YSuEmetjDRK2yhRaQy6abYotvmmLasgyf7y54bEoKjc9wU4J1hxvFJVDJ",
  "key43": "4cYjq5YbGHnDcssG7nDSatdUyYTeQvF1efApZzyMkimGqWnc7u1VWHAtH9XS8z6GaNyqP5AqDo7ELTrZsUMXB1wZ",
  "key44": "4u391VXo7L9n1AvKhT7QwsSvJdvGYriqhmyyVDenr3Fe1fgFhJ7vv43cdjnVA8LYT6VFWFqB2CeFdaGYKTM64a2r",
  "key45": "63GEKTtsHsqMuwDbkB9RaRFohqPAdQv1iHSk6pprq5PLAKfyFiUgAAMAGKFa7csimmVSYJRdQ613DXvcivv2CvwH",
  "key46": "7Fi4rrpHiWkV1Cm25bZ9oHzeWUttP9SDewAkkpGe3yhMHg7aSvSRoBLcVf38ctZKC4zv4BdVvEVsJSL5Vde3EbC",
  "key47": "2w1pLNZ6fzb4w8LV1mrHMKpwUimWRPooMeBAHNyuotBwP1UJ6X84wCoLipec7xjnYQGUNGzaKYfdzYu1euLvQpnG",
  "key48": "5gUKWEd8Nw4wdtd1oNtEDNvhA1Rh5YaAuSKjq3f3iejJwbX2UPJK1NmzDTVpbosZd37dMtthT939CKkbuqhqKahE",
  "key49": "41oRUPPfzBAb5azAaisYmDs4tTiz9djWzeEZT9tYNUm52bEDyVD65zKWbV3JDn4a7CBq9U1dbXztuHCYeJvWzEqz"
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
