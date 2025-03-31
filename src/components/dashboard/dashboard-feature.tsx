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
    "kWJVdYDXLG5QiLEmXqXqpR7oWKP2gUcVaFD4RSRaj54GkDVox4XPv6LwLFGpYojCxaXmo54gaY1mHQnURdp8fz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578du4wCHLGPkR7ZGGEvgZ2y1tSEwCRMvjYX3oSuchd2XHXpU71jX3BPbTuVTfs9SiawpVF6sozzpu4NbsVaYAH5",
  "key1": "2AtcvNg4mNYwmwirrYp5hWmV1FrLn53kjSncmHDh6QiyoQHknX1xgJvyytbRLkk6moxLwx1pd9KkCcPXC6orFwzc",
  "key2": "GnyUePm9QJ4eso9ukHrXNV8XgHBAEUZ4CW8Zz1B4c8rwLeUeXbVMfmsijVgh2gvRzoAv5Axk1FvTF9wR8bmc3Yv",
  "key3": "3ewLrHfcrCvbhe98UNZWcKRqovd1uF6G1yUtiRouRA2Cqbvrg2n3GZLxXJjkf4MrcHjF6VWixWgsS7ukef1zfK4s",
  "key4": "4Mn1kY6hyPPmWARs9rL6WZZ7JKtkBDNd6RUPRgnM62xpN6Lj8BGXmSzky9FhHJzUAJhGYpRDPLJWnScaJfMn8Yig",
  "key5": "LB949igBQjSg1KfLcV6XDFHuU5Hji4Q1MEz9Ej82cm4BKEcG3CFRyom9G1qRudvpEyL4Kk5WwK8yjFc444Z7QC8",
  "key6": "2PTW6wboKsstMa82oUqf5qjd4biMejRcXv3RLfrQs6bkhmhqFVkZQN6tvN9zLEvdvxta2U1mL879Xd1PzqyeKP1M",
  "key7": "2CfVSegMFAoH9TePeFEpSnZDR4xkfAqugXtucnvMB5AM8Fp5m2Loj7qf4jN3dJzcP6uzc2NuSU1ZbTppWcrnhCxo",
  "key8": "37fuVaTMhm5v2HFYqKczaPhUsRy7dTnq2jobDE5vUEQPSdMkn3HZ7RAQGQBsi6CSTdchV3z4brADLUV9Es3ijUkr",
  "key9": "2bLj7jawWV8VjFvkKHGKMAzvGhRbKjEEEKBKkCYFBn9E6sD54VKsyJ5ugXn36LmTzXqZ2uxf4bSjX8J4zEbaiYmE",
  "key10": "v26jjEysaENrLMjgGTDSXgsN7UDSbhFk2tnHca9L12DGVyyxLD6AkYmeuHKSLvA48mX2yowVLeHAwmoPegWqsb6",
  "key11": "JPnDMoJJNVXNuYUY26rZXwNRPvtN8qJ8GA4FCDZJnj3HsoJsSMyfmCm6iNsSXPbyYGT2qk2Bu1b8F63qojS2MV5",
  "key12": "2afZ1pCHCVpU3NXxBPJMTr8jcLuFniCHTdXCDNsTizNZE3wBUYVCXEgMnr5KJ11dJQqByT6pBWyLE7rbSYE36wBy",
  "key13": "2VJhfcAei1jRLGE1URWx6jRj7GY9sEL25GW5U6bvTqMSWjptaMM6qnJJpMmzGBEz6Gpur7oLAcV2egKemSxNwG1g",
  "key14": "4abvZucoEtvDsfQP3DUmn4AWX8H5iZnESxiyazKHUTtTYuDyk2gpW4PVij4oD7Atrxp83n8u4oUBCSkCFXNqNCDX",
  "key15": "5H3HFfA4FNP49Qdqj7iB9iCBJk78cLiE1YyUQtfdGGbFr4Eu7oNL5q8m77hMxA7zdTt46k8bkTj3GfjqsAcYBmgF",
  "key16": "oYcT2ah3y3wfEwfvrsuWPDA8tyfVUEKFWAZQ2sJAEHGKPqDN6zMucAyRksjPaXs9tDtmpGZHjsj8WQH9KFPncwV",
  "key17": "4ebRr6sv76VHsnNJx3Kp27deq4hrLumVn9bzbWriD1NBNDbBKBZHVH7rE8ndmLpot3CSJcoeVZMSvoLCVyQevaoL",
  "key18": "21jHQjiQBsSj1RooGCaxCU417YWXC2w2jBfUVUMbGrCr1fSgD1XJFfB2gLwBEb9J26AVQuqQ3JSgQwBEZwfgLzGp",
  "key19": "2mJZxsxQ6FnAB2VeEja6QW5Cs67eHBaoNK8fHXo6wGxtkJf84senh6rz8XSTzqdBizcG1Z3MxLabRsGoUcrQu4NP",
  "key20": "57zei9wAtG8FCVrACKFPZEAHNCsWGQgxip9CNEqzQ7UPd9hhyeFNUJJqXk3hkw2x8dj4SSdiepGevnRdnMoX2DLW",
  "key21": "NWFecQAkU1hRp6pfcrei2CdWp15mcmvo9AdR9HSbaTxNRKkwyycseKg73WoNu8cnpXYSLhaEaeH1DBC3sSdocvQ",
  "key22": "2NnNYji6ERhZoynbAWHAXAx7znv1h7ewqj5McHV3fnAMJPKBujspAjn3EPm1nnYfmvzShomRjPzvfocQYCZAaytd",
  "key23": "3P6fPDn93iJjbdKMAikDx2Rsvg32ZRyiQTaPi3fDbCpkkw4siskg8jJJpWjS4Vj6YQE9pzsZp14HUDnA15HVRB1m",
  "key24": "2HiifwMdPuLxLnhvaD3k7pkVM1A1g7xTXexd4Xow5pHW41x6DcL6QPephwQ6j26GYKx4Yhc2mudFrLWwR1q56nN1",
  "key25": "PiH5ky9Ya3xPX4dHHjJySgJh56PbgK9pHsQpFuaGiKjsjqoPFDxUXvgHE3Z2VfY5Z4ATmWA55qh6XeJTZMzDbFN",
  "key26": "43MFnkcBo7MEWkgQ5xbPBCL7uRsrLpGtpchkv58e6gmuFyDSR8wsggVCmXxcK7XSHYvpCFuPHcYNf2cy2gRu6Zk8",
  "key27": "4bA9zJZnrqYGrv7CD8WvQURD6mjCR1swcvvJ7hCwQL7THAzQikM2QSMCzMwJBSxmSdoSeRSrUjHbYLvHYVG1zqQ9",
  "key28": "2koDaNSFhyUCmcubBTqGQvETNqAicbCG3KddW7Y3eVFcUBkzMfF9xoiGgJxQLZufpZVR9jRdo5oZYPtEcTCJg5HL",
  "key29": "4mBY697StkCyAnjVhKT2NAT3wARwCSjHC7w8TiuiyrPe9ZJMsRJ4hjkb2Twpco5PfGsHwgdYoiCjXy9ZZJTgRVY9",
  "key30": "2YwrfroZUeeEk361man7cMQ9dsP8TqSuAGncgcGbEteFakJAY46SesjoM6DvUdVaSwyZwP7fpzQDijWwVc3L7DDM",
  "key31": "3vEENrKheJguf8ZPgKwDGtXgiv8qCi92MVfQPvAGHUo2wueU5ABFya9a9PatJdQGQJfYcqibuDTTGnYrz3DHXCfe",
  "key32": "3wjzJ94CYKm7pNscqWqpPvfY9ZA8XW8WnDFjXsMkGf5R5S3rLRSQjaBqbD6e732AcTL7LspCGgNGwKak9vd2KGWC",
  "key33": "5tv6bZrbQap1zDFtKHJKJw8SSVBVgnpdRqaw6Q3rMxR49BfV2c9xKjdD9TEvcf8orxZU4iTt8ydXioRvuNMeNEZN",
  "key34": "r5pc3ooRjdH6JjieWTgeioM8m5smAP5xqfTQa34YHNVpNWgV6JDHe3z2moJ3VbFYQrS7Zyv19ocSRT7GDZhYk3Q",
  "key35": "38ZkNR8EEv6uwn8g2EdLcRRhXV892H4bJJL1uiaxP47UBqvHQFrUrmQNLGKTuraiJsgZi6XqXfp24zS1ubHKmq1G",
  "key36": "3zZDs5cCoD1TugzJEXkyHA3qD42zrtmfAZDbYpJJgrKSwzbWSSDZeXENKkoutNug2dMcsxU9rYLpjSncDCcspmEK",
  "key37": "4eEnpaSWTjkFy1SLCZ5Y4iQTzXNp9b7cjRBQWM77QKmEzUa2kYSZw6WA7hy23kNVwdNqbeMRQfdBnyNugw9SDZD6",
  "key38": "3W8Bn2CYezJCHUMai5fSxBz6G4gsMnHPEjv2BztxGtStgYpvSXJYfh2eUaAentAbaneacMHaFafWS4dACQcRxAjG",
  "key39": "4YDaWvhsrPBEUfB7CGWZEh6DQRR6rE3mj1E6Rvqwd8ctMrBkWsUxbxSRTMaMFhJdYzR3rzJHAtbmPLtfGyNUQeDB",
  "key40": "2hRykAXP2UEANiFu3eFGEpzv5ev8eBXrZANrKWPvdQdzpuwesbmeJCMGSZhZjm2dH4XMPtuz8rrHz9Q23dYh7N42",
  "key41": "2zW2i2mdc4PJzRdjniFtZfBofEg8Wmroxz2UYcWWi3ZMUxQ329AnSST3KuF2UFoXm3P8FZpuWnNiPuSpbx34M8pG",
  "key42": "4tQCq3PXA6gMQeg5AQnUXYJDwsophp6URqk9riSjX7uRPRQcxy2QWLKEuFkNFhPGzFjuYJdJFSkraNyGkXBbS6QE",
  "key43": "4bqsVthpTUGA2TKVF2vnbe8VyZ3yeu1WaZQXU5ebkoZjgsQmGNYRHZZr2Ai8CEDgmGByXkTdQX3ceuiRJwGAEcxP",
  "key44": "4duEEXwt1x75Wvh4h5SvTdePEHKB1r9LbiWMmp1pVAqdw78VLks7y5TCmB4cevLfEbEargTS1ZkuVVTBQf8D22CQ",
  "key45": "DsfaUwHoCQ1gnfmP1pmGEHTBKLM7CvUjk4gakVeQZCg8LyrDpfSpxCm2EZw5958MqN8x9WpQFH643TUDEZhgnfJ",
  "key46": "1PzyLSXLyPd7unvUo4zmvuxKmfgcAZGULow3UXMFECqgingYhbkKxoaeGMXDhPuGDAVtwuoYqCkJiMQYqsc1YCV",
  "key47": "52b4o99umdaT9pM7UjKH1iJXGBFZu1AmmKs7HFDjpRA5LTVT912BuyMcJ6BDxbMFVEdnbnNGM6hPtQPWQSkcAkpM",
  "key48": "4dMh7tPzH4KSpHWsPfvvSxpYTKun8jwY2EHzv52Key329xme7q1LFJ8Eeg348XxcGSatFjARCkMhUszxL4w6BbZi",
  "key49": "5Ti9f58aazgMZFVfTNvKE6b1krXeWzqFSoxryT4ynz3fzmaC3yCHqapHz59dvV2vQDNGJCBgoAuifGnKkb5kj3z4"
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
