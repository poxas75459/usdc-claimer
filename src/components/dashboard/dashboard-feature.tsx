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
    "59jS4agy1pH6xvQ2yDX6rwKFqepX1eD4NREdeqw365BEYZp79Mf44njdAuwX1WTbcrg8rZTUk9YWC9eZ97Vi2SSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43H26kW1cjCQJkwtH386uRXNH77fGsX2LPGy9pHiXigvQ94axgeQnr6bcQFvsycwY112R5UyGMudiTwwLWM2U6zF",
  "key1": "4mCrp6ta65zYzX83ptXbHpp5eRpgD1JVER75mawGXbMDBGRpNPq8sZC8xXNC2ZrWe2Yd39CTo4MveLR1s99fARQo",
  "key2": "JJtFH244YTMmNtMtxDxd8qRNVZhFyox14Y2XqUQvPjjqn6NNtSFskxnoCggWJdfqwg332yFNa8bCEpstKKKKskW",
  "key3": "4fpzx9mto3nud8NvSutUtWbq82VTcbLB25kEaTPBbjvVJhw3iE9mPY764yAab3Eje9u9MqPn2WYeu9S4qssshzFR",
  "key4": "3bZfzaA9sU1dwUz5QmUrtPFLxXGa4nvhE5w9qdacQ3eitUzayraXAVyjx8wXC2Cs828EiTcRDjRsWtpHvAEvvUVX",
  "key5": "5cBFXAs6co9oechoqN8mmcwHpiVjk1bZr8AAXnspTqk3Sdwq7R3n9Z5ma1SXJX2BJPeA22SW84g8o56q6T5bSx4c",
  "key6": "35Caxts5wH9ifA3f9CJfPoWfAQh113hjcwaKNeYDjs1MeqYhQ3bjJeCvaDTU2uEBeHmc7Fz3j1nYAojgwBQSGQv7",
  "key7": "2UFuuuFz1YczRTUVKfXM78ndR35AkG3dn7vzjCsY2FfGp4kjNXTwYDZUdvv4nAUgbP19XM5TNDv6Re7TwwBfQy6J",
  "key8": "2mRjJ1gdgiJsZZNEA42ZoMjMQmcxbhdAwC1yY8imYtRJkd19dEQEJY5SwtA6cEhdKTSsx66AYX1zb4EvfEkGBpsi",
  "key9": "2iWng1RPR4WKXisMB7gnaNcSV5VJ5zDnreViyBPrsERkAxtr5VfU17pQLfciB9yUAWAnNA5c1MJ77HurvsFzoHih",
  "key10": "3xsJCdMonX1YfcGmWD34Rj8xjkGgx8hcajWBPMuuQKhavLFH8vha5RBCuPEBzfucvxaRU3Frus4t3zWydxWXQXU7",
  "key11": "4gmQBkkUBfHmXwtwp6xM6tyjNnYFggQzRS9eRwQj2qL3UvPehMF56Qgp1xFL783oc6fFsX4pqCLDbrzfsfhXvSdp",
  "key12": "5qhMRpMs3AgLxU5JoM1QMDjzPvDBbtj3PbKMVDB1oJWRHGazkbtbZsRPZZ6nrMmbfVHpoGAB2JKiKnLJkYUtBKWS",
  "key13": "5nQySJ5QKSjgrr4G2q1L6hPBuKasibbxxPMfXnqjiwaQXvY3maG53aojQoF6FgarLFNsyBKC5znhDv1edm3M9stv",
  "key14": "3siJTpNHnUJyxaAjfuA18hhqdaep9X5A3potJsvCM8ZzjaC6MTgL78vCDdM5f5a9xFXRoaVAjhURPeX3rhcLsb3S",
  "key15": "N9nZ4zZiqety1cMFwfxBrCgEjkSbYi1PN9w3MGrmMcf5xEBKZdriRf9thPY8MnkNhEXj6PeonPBRtJHyB5NN3uo",
  "key16": "5H1AfbDpt2Z7to6TGuyyFaXn5eQtYFdbN3QzJ2nZycCNA7GsnGqgn5PDWHrtTpAoVCXEbXvFeoNBFQfBydozubeG",
  "key17": "CjFP7NqdFyjVCxyC3mu7urLoNKQbZcmdvB8xiEoNbPVCdQeprS1CR1Kd6Aqjj1piS8o8K85qxP7n1DKgZ9YW582",
  "key18": "4qXTiyHmf6JjCQ3enMdCQBU7sXzZNvbpqoixq4i7Xbo8ctoXdvT42USYXumviSmj1Smz4iEFitSWVTVBxiNVRXS6",
  "key19": "3Wdr8upUPNCcR1cnBEnhw6LbGJR6WmahPs9vsaheNYVX962UQhFGa4b2aEP8a73Szv7YA4Neiw4nHLLc1AF2vuYQ",
  "key20": "3GE6etoBdyE8wjCPhVySMCRjupFUoP9KWBJE55rTma37VHHExC7nJGjTvkcsyDC2opqKfGYytvAzzJdBZ96j1ER4",
  "key21": "4U7EdEA2oBj53BfCX45gnpkRjBYcYV5yeJDzqPaUpsaie4EignTcamRk38gVih84JSQJBfRCHYLW88iYVyA5yYv1",
  "key22": "4nuu4x8G7cUEgoLCUsEuvcmzt9VZktohknk33NeYkEiBoDdpqL1s6FXZAustYdTBcovYAe234No955uHQpYc2x9t",
  "key23": "2Ha4hRATe5ZCWuQKKF7MTwGms93d6A9sf8VzejHEs2ykrdVV4dW4bThAkzn6exwEW5qaj1AYjjXMXQFYtvxGCrof",
  "key24": "nbgKMFp7EsLe32ytTu6WT7ZCpysMmeCp4NS5XSK2YCsuAexnHyGuXZJAN2usz8DZdxPQTEW7Mu2Wgzt99RUXYh3",
  "key25": "5GYc6LB2jv2Prng9ZF8XxeLxVSAfJNtpYBBxTDCSasJbxo6zbWfCW8sNHXqWu9sc5KMxKhXFQ6g6kopmydy3DotM",
  "key26": "66myo47br1aGqEpbq9VcB4pnmSpXsutC85p9iKrmihpVatcijRHwWJ7UoiuCytTwK3sere5REYNyig2cptrYVtc9",
  "key27": "xrdEgEbhsMMJwVvkNTWGChsiUJ38mtgqs7LmFMWC4VkgDJM98nkngJScbB4wNUpak4ZLdXFjQcXRwpzd211dxrk",
  "key28": "2AwQnPZ95tMQG4vBa1gRLjwEF1gAsTsV1xmGY28LNm3PA8bKFCuKokEQYJz4kU7jjwNcksBBq5u7PyVsqygHN4zF",
  "key29": "2x6hcmYVvgciRkP2uN1Xs4mRvHXLH1bzxv5TkqXZ888UU63wE5LKEdvSZJRidBnGAM7EmAiktXESe8C5gonR7waX",
  "key30": "5hH2KdxXUVmJgTeGZWHjDRaMLLxYn4gSdg2HZFNMisgGDwRRwYTw8DHcrMazpgXcspaozssfoCywmbgXCktSVeRk",
  "key31": "4NsQkS6wnCGGGzTL8pgJ61Dfp53Nw5MLrff1jS4CuQScz9BFJ8abQUWVG3FQhreamDqYfBYtCDwWNNmtFw7zgczS",
  "key32": "21Huskwa8VX8sQHJ5sYMTBe7CXvRbyPMSAyK4nAupHFGDg4Ski7BAkUcVLHjKrezpK7PCVJ9zy34k1YiMjbhfgvU",
  "key33": "5X1WHGEXyotyv2cykbJFouJJ8VxXvk9UYWCuuCVxxR3QbnVkaUH2aJ2EKB67zHC6dmAsCKY8BLzfWQQaQ9Wh1CZu",
  "key34": "5SzCuj6ouiHr2psFvt4QGtaE3CN6KHggti9iTXWffPDtznp8DrnraHypTatxtQoUSLvjN8jitgamHbJoca1CvEXE",
  "key35": "2fUiLAyZ2ccjPips1eRaYwvj1UZ8A27wiGtSeXz9VASm6HiajpT2e8SPQUn1JTqCLJpkJfVrv247ywTauuBBaK5V",
  "key36": "HnG2sxphv64KKR85cVLARiew8G5j6KfTbKcFBovtRe4DYUxvX3JqdGkb94QzszsoA7jFpYgBJdqmK5i8rDNcJWF",
  "key37": "31GvyGE2mMLaoz7Bza8LLQs3ja7mbkdvsPNuM2yCWeYbkq5FiFymL4oJnhG4DREG1WeAutN4cyAEEh95WJrfXnyC",
  "key38": "zLNoayNWxmECGAvUdemETtUDmDWGs97Lmp3BjbCuyaZiPnDGDXkqdsHpPHPxZuq1U4jDLQyv623BL9jjk1CiDoS",
  "key39": "4sQUXQ4tQivW1UqVaAb6MXFrBkrTFkH4jmx5ELWe7veEJF7VeU1Pp9hiR9fSYh6KzkWhvtsWdy9wURZHPNyBZsP3",
  "key40": "3TPv7CLy2SgcDHej4xDUr3kTaqz4g7Eab825MdCWyB7bMsq2sRgZyHRcMMe2yVcKNc4o92uKLTfGXembisenbhNX",
  "key41": "5p3LqYa1wM6jfEvNAiVbiwUkQaiSSc4jaxrbbk5B7pUeTWn7ionBjpaMBDpdQakSyh5UGrVRxj43Xcw2gX66HVYU",
  "key42": "ZCVU7exsHF6pZNTj4rry3N48PvRiU5Ppi62jSMtzKYGSN2crMUMc6srzBqW76ySePHP2w8QiDMrrhd2aFFDAMF2",
  "key43": "3qQA5r4gRNK7AC2nD7XnHy7Xx8abE4zRBkbZVSohBfpYcYc8SZhvh8bbttbR8u3nDn1ARj6isQLEAStNz9woeqfU",
  "key44": "34v2AotirTX8n43kc9KKhnZzP8XuVeZorXYSgw1be6rsZhs5EgGXie4dbpT6AgW4yzQBgc9mtXoihkYD8i9aq3YZ",
  "key45": "RdnGbktgyMkTdY5RXqR1o5d3RbUADZdSVaVtjU7CZdwcRhWtAuSU7MBpjNHe2MTmQu1vADqemDNXr4GUACg2kyY",
  "key46": "2D844ihpxaTWxGjpbHQYkx1ZMAkbYFtUqd6fmAiA6NtGa9vErEXHQK33nRiweHiB5ceCMv1FcR9EMVvseRk3ivUM",
  "key47": "ASynzvR7rzcUYcBWmbjVKD1BXNTgyBPAYD87yQ2Nn9GpTJRZTxytK3n9Hx17e1tuAVAxRJdUdGfny5huUvk8pbf",
  "key48": "3P5D7QN1yxa86wSeWnbJrxmTfDfGpDqj8eAKFkbym5AMfiyTL1idbXFLBEqnEXBLkAFoRaxYSRsBnrgKJsFwDWbJ"
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
