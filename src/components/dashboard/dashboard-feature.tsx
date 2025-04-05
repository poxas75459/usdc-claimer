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
    "k7UBVJvKCSyahT6g6Nmbuso3ugxiMDkBGQpv3V4JDbkNT1SVsM9hcKFEEgBThP1pTZjUuZNyueuj4WzdVH8kfrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMBQ1RSW1z2a9k5X5Yamyjp52AhQG5myDaX53jizbW3bmCV1dYmRiNDAdYbYEZZ9rah4bGrQ3HYoRrKDffF23VG",
  "key1": "4Fv1XdWdmNrkXQx1UtNCFM8gvQijJd6vsbMetWRYyJZRfAAnDnDXJUUx864ZcXwGQboajva8F9tbrAH58Pgfx1of",
  "key2": "2HbYzDaapEGcTmAdvzEXiY7fpkCQca5R5S8ZfvnK92r72RDua4GaLGKRxBU89bEevNdyg3AaYvE8B1TjTAoRYMue",
  "key3": "8ef5oVqg8rZQJRukod4RdCqGQYRaxoBBQH5asMEvKzQkqadyN11b8uDWUTk6KoccKKgJs5trzU5s6V2QNEcqG6Z",
  "key4": "4vxhZvEyqhkuXUjbFuvMx8Z1WnxUVgkBLZqjrA8FDsmq6xUCQs5aNr3tz6ZDQLMWuGv9RbtJEbJHCBUg97vnnoxb",
  "key5": "4iDjxPucWZkZCzfWon2yjFwH1pdZDaB23LyVgDq77v4J6FYFM4cpB9bkWnM3zUjfXo9mBuj5xZViVumyXYso1Rzx",
  "key6": "nQShZ19WPDLsU8Qz2yT6Go68wfu1nFdxcWDRDRpbUCz839HoVCTcXbzWMz3ojGc9DmLwQPG3yiMVBECS15Loooe",
  "key7": "317jbR6Y1NMtT4jbFpS2Ri8CVkwXJt3GJDANfWpubJPgzjeH1k5Lpc963v9jeo27fwjuZLkrysNErhJfNDDbHCsw",
  "key8": "4ZRZA8a6cCSb3Q3hPDnZP8ybjJy4eKMC3XgUhapCziym9CfSTsd2MVQy6xUYbygywLeWNPEy3KGUivU7cpUWoMvk",
  "key9": "3xyvHfjPundPvDyW646gg5uepK6Td1aZS13bhdQEoLn3iN5QD4wW5ZbRk4wUh6qjfWgnn5Ko12erkMAqjzwUufKR",
  "key10": "4sbVUdXE7iTmoDZkjHYjH3h5PKKu2XNoW9HhyTKFPUg6yQ2XMdRGpDQmN5AvazASZHC4vLR1Hr7hPLGnZqfucds9",
  "key11": "4B4xwvUQV7xAJZbdqYAecva9QhxYaKjay2V3wL8AsbVzZEvs6eEBWA2ieWupMzNquyRxW16Pv6AxjtHT5D2mCznQ",
  "key12": "2xWS5vTt93FFmoxdayLW4rzfXuYaKPi7vPZiKqKJeYnUUxTgPX2Bg4sx3ofxooaBHAgumDB35oVcWef8piSM6STD",
  "key13": "5nfWz6WDYt2pR1PXizkh2N9PxTZ1LeA4yG5WAMosn9UnZg2uAd2RDBEcdiw3HrRkXxN6L7V25c3iUguzrxNT9r8p",
  "key14": "597HvqTXn1dAKLrWMr9ah49ytZwGnVm6wsj9KGErS3cxREfzam3HAQj15EhAV7HPyi3Gu7XyTqrJVh8AgbkPny6w",
  "key15": "5aNspzsAvJE6F53XctRdfLyH4u7yy2GScwmEB6WoXPkTSqzcNFBT5FwpUCjBTKWLNcuqSshiGykWZtGrwHDpB7DZ",
  "key16": "3ds6XmHfh8Jtw1D9SRzZYw3satDpNmbmXN1FFTZgx1P2uUhymS4X8S68nm4DM4UpXUcUCRQjyizA8snqHK6UgfqL",
  "key17": "5dYeVB4zyF4eVvZn9JFBUsDq1G8SdaTABPdQnZNG89Be7i5d29V4n1TNR8cBNWbFuwnQXYCtbtPV8D7q4q5BEUgp",
  "key18": "482HfjD95hphvy7dsPNPX44WsySUvNPbgWoHn2nJGga7Ebbs2nJc9XjDitRH6JiYZmxV3PoAmUb4xcnRu9EXL4jt",
  "key19": "dvxYox4gbGrGGNbqdF1bbQLnVRSjUdMGoPPNUffs9GKY3cd9WQxc8ygciuAQqPdu3dPNX2k2MJ8snP1uBVb5FNM",
  "key20": "3nvju4VLfNwwjNwDgDuyBFJmw821E2bkM9u1rFE2MSpd7eZSb9fmCcce7iCnSFdABUHYywdeR4eajqytTh7a8Qpe",
  "key21": "5pVTqcixQSdhqq46RZqNJEThBa81JocwAHkBEdWmhtNJoiLzs3juTtF7L9tqn7BwDvryx4zLqyiKApnow6wiJf28",
  "key22": "47WztTXNCbyJQJjHeUTZyhmt39oqae4YkkN8Q2Z2nTRs5H5oXnoDf4gihsZfNxwbU1rVhnVZjvRLMoJtKMmo6qJ5",
  "key23": "5y1HdtbxQA9eriWRqJmzkBci8Jrd4Muoosd4h2EhP4jpdpKgFg8vXhyuQH2mPNL4rtsSwG7oyvMLcwAoJPURpVXc",
  "key24": "3MAhcFcS7v9vQh7MsoPGkRSrBHeF8aB5jz92PKpiK9a6iemetyDTv9maeqp7XaaT3NREneoUAhXbtjvPSNDMCkDy",
  "key25": "38Ajy89MyNw7ws9Gg15r3nMZ9iTm5tXiZccqyRyUWwyDdocwrQUZMn4tW13XxquEuRwKZMgigVhjnfhq15aiUWxg",
  "key26": "2DqgxgcPD1kdZvDEZ2358Djy2R958cV8q7pnyonALs5drg4am2EFxf72DyEKmeiL59kDgPWp3F5grMYMBL98H8ii",
  "key27": "3srBQYiUDaeGTUsuH7vAV3NnyZzMiXUuQCQBitBFZAsqdS8HP1MrcPr1orTNrSHu7a5oUGE51xjaUhTZDQxh4fKs",
  "key28": "5ppQCtSGWydRTSEjsTcKPsw7myjGZkFEeCFna8pXLWgjcBnaDgmWif3xWPbgCNpVtYTU6znjM9XU3mYhZNSqJusz",
  "key29": "5YDkknizoskhH3SgQVVe6KNvUtKuPcCyFVAhtJj2HMv52RL2B9ojKdiLbB3UMMoh7W34KxqBt54bWwEmWfD73Qo8",
  "key30": "2BTKF89Ta1EuPyUG328yV5xvPdUNqx6jPmeSV784wuo7iSYpAvxPJKci3sYyrrXgP4R64M2BeEGgLxyw3Z67SPwV",
  "key31": "51MG67shFKmFeqEiMB5U1SHrfP6vA62rSrS3WHjZoq1BmcheJ4Hb35rtjwQAv6TBEqig36b1wZsxt1i5E7WGZpeW",
  "key32": "tSDPkc5BPc3WngSbxsUzqjjtbLuaX7ja6F5K1wsgToDtNyPDEmZXESNPTeyducprtPsUaBqTkERYaiari6pHARP",
  "key33": "51GwH9YLhsNgpmKwmQQ3WSu55ymJfFyArkJvkWEPV4CXoSgRHKS8GVcRp94dGr2j8Gr72J7oefu1QRK7gTaoqoN8",
  "key34": "6F9HYRuxU5CezC9NE3A44iGbnDEqm2PqRoGSiPLp9cyseazzY4wbfKyUzVF4DXgrDTttXVtAk4yjTfey16sT21F",
  "key35": "2x6x1JLtGRHTVLXBegseam9kNhN6F7buXveYqNRypaoUaafV2nEKzNSLpSrLxQEGAorYm8VLn4Hm94jkTcRRJwqU",
  "key36": "5Sv6k2NjPyTK8HaVGJ6h4GdgqwvXRhaqW3xNf74oDLUXSDteCobYBt5C1ujxAnPuiqdAcDrW3sjQSYTkzQYgrEx1",
  "key37": "5TKhfrrRFd7zHkT6jXo72EWEgnWMoGrSJt6oUi9JZHTfGfcdk4MYggjwFNEdFaKdVf4rou8Hmgky5X9q16S49fcW",
  "key38": "zSwyqstWm4u1NjSXVcHvtAUjQnsoquVP15Q2qnX8efcrBoLzbbaFeAjpZyJoFb9251EU5j39NsSBhzEG6ifDJpW",
  "key39": "5UYcd5HqgU4hY2uGQga3VRHyJdCdTMPRMvoN6sRA24hX4AtLXzUbL3aTRUpVb2aRXbGCTWhHnJqupBEA4AxmGZYS",
  "key40": "RhVxMc25cGn7MN5Cc5LkcabZ237En8vFozarAfsHn9ykf4k99TrhCaVeLkkJrgsNcYfPg6NcGUmUCvCnLFYL5tj",
  "key41": "5cSFPTsddCK4RdgXiBhKrrUoUKXRNh3zw62QAMjc1CwooWtfmb6jEw2L5zr9YU7FRxEed8btiydFx7DNC89FMPgY",
  "key42": "4whSyCGz6vN3jSj4RcZbi346gpF8LLeM9nrHhorJBaPTo3tyzKz3SHprdBayVuKupcyAasJ9QLVzver1s3YPqjpD",
  "key43": "3d7QCjJvrds2VhXb9UZsasJs63MWTLm3JwvXGX7RzEfojVLn9q59APmVhaouPUk29rKKp1hcxStPNFBY2qosDTVi",
  "key44": "yRRYQLY6ioB3QUu7okVDQDryYoVG6fkbBjSuA4ErkvJR8XoJRpCfNFGRBRnd6aFTpGERhbog9cLPFFsFZGJYeCg",
  "key45": "3eRM6oMGzRWnUjmzfnsU2imNeNvQsVTftPvDik39VPYqNqjX5sgnSAgsWfJ3C9Uw4tvC1L57A8PCyCrRNfPXUQnR",
  "key46": "5zWMhZBYUGM5WEAyPC6uZMTtDaYUUxc1mCv4649L2RwSFYNyPAPmU2MqEEsb1ecHHSfeXpyTSqsFpnKBQcMuejQo",
  "key47": "35VSGunnYrGzYPV1Vwos4JezTCpVyJkPPjVDx5QDADBurspP46kQEtkCneLsFjQn147aiHih3zk3JrYxB5oeVKYU",
  "key48": "2aT1WZnPSvvHftpc2NJehwqQFg9mXnyCtX4vyCBcR4vGSvN3CvU6X6xQEPGUAMjhNspjxRArzMLxNxnc9RfBa36X",
  "key49": "48XruZZSddWssncs6nY9KrkkW6LUmXvDhSU7kPaQs1dSA4ACP5GiGGVHC9oLBcGfeUSsTJxiJCaknuG46VneRknh"
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
