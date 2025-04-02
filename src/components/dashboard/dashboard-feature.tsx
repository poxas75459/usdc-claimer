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
    "3CQLZwe8XUTpbcJFmvnC2c7p13uPVoyRTTtQLj9QvmZeaWK9sY657W6sDA8qEPH9GPNjgJGXo4VhSpzMZb7s8joB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KBzNueTVZb7X8LRpHAoPwsQ2J7z8GQbFFwg5Su3QAe7jpGgiisebah45JxFLn6Lb3wMzhCY4GJL3Q6wMQmXbg5",
  "key1": "3NHiZZMA5KzdhP1cviaoUnvrayViyxafZ4QpWXsV5d5urxM9D5HhJLuu9QWAjtwfSATvdNwBupSNDJaN6xYsdU76",
  "key2": "Sz958AesvBjFgGj2pxSHDPoRL6tqZgD9vDViiFiVbSAg5eqExKV3KAWza96HUnQpvZpn1GqCZopg2Yt6vMEfp93",
  "key3": "2tDN9pZykGEKHopYzKAYZyCwyzSUUGWioQ2xM6cgnVDb3HhkopRHMhKsBBNA2tStjfeXfSe4kMTtzB1Ad9f5D2Vf",
  "key4": "3kK6EpEGNLwjQj3BnCVLHt1ZewUmPJgGRKws7pkhnJFfF1xFtg991dGo3R3FuLJiTZ4CBudGSDPPkFzAVF4yfndZ",
  "key5": "4PRKZE4nDspj8ggiUAs6RU3QvW3wL5Nyvj3qo9WLDyZAvMTP7H3kJw5nXsoJ5bJqctefcDvUoPm4ka89zgya167D",
  "key6": "4peZdSzUGBrU1qCUiL8o3Wh7rsnTgsgXozu8LUwSEGubftoawZj7LrS7cT1pZuZKVCxiros6MKq1DwuSXAgvLaCs",
  "key7": "5kpjMu6kyNL4T7pCW2V9fmFztq5omtEk1pmADboYF2biM1bTzHT1shvSMKE3VMmyXtLMydgKyKE7nrGgW9nAzfZX",
  "key8": "37x4GHKVXnqZcpAmbcnvoXCpYjGfiBHjbrrYNkwNEAXVW3wNLscbGQ4RvjfTZMzTBJZ58AdoCnwmLCB3ixRcJAGn",
  "key9": "3YxbvXjKE31kuCEVF3vMAeZ3zH2iewJPxHCrmBeXiHveFwJhSuyGmy45cVQJsAXmK2QgDi4JELs713oVFBAZbJsd",
  "key10": "57ifWY8QqLguwSxupnxe9CbwedPMyjrEwY4Ty9d4iNEMeuQf2poaFdYve9zPAva8bXmMWG561AQNCSPVJgYHscD4",
  "key11": "5gZsdbUhHWP2pt4aRukh999546Ajm21TpXGywB2fJgQ25dARvgPB5aExmr7VJftdcA78uDu1y5JwsLGezq9gse2X",
  "key12": "KLQkjegKGfMris7niatqZMY2p8FfCzMVwR3ebjH1YYgX1nXCL9YRkQF7F8Y3N7rj9yQHHATYCeTMte4dh7nKBCQ",
  "key13": "5FaCJ29TzXDAA5JhymAL3FeFpEk4UaGsEkSbCEAxzBVJcRHM3sC5xGXDohpGvK6TTgMgxCv1w6dSsKc94RyvUrx9",
  "key14": "3nWqhAxCRSubRYnSZ874TM8HtucCpGFBdGbPk8RwrjXnVJugdkxc9cFm2k5qxS8bt4Fdwv7zQqKtAa8kqERJDeY2",
  "key15": "5vW3GJJybxxi9gK8TBu6vBgRg1eqZwVLDExHCB3d3FBTRUchce3qP8k7Kku5LzBZcA5FEY4kfqGg56WdYJgCK8hy",
  "key16": "8eZiC36b8K8syC9Mjafj4japovLSVRxYoLCkikeXAXLvSCyrpZn4BXqfVWiVLsGSK87rdfEYKUkY7yhonESwx21",
  "key17": "4wh5uXgBguTamKzFbw5xBCTTFF1Hu48E2Qewv9bk3PNenYbLXdUPPSeuDo7VuZuc4gmu664B8APhZH7TAv7qeJi9",
  "key18": "5xs7L1rqd1N9fXRMWcRzNSj4Uonbh8HZT7saFLiktGT8JtbUKFPBtenWqhWPQyBPqCr1YgJzXpfH3xLY4iQUG7YJ",
  "key19": "3wSfnBHuNz8fCeiJc1C5CK5uVeWK2UpTFtvVEn2dn2pof9jLpKBndoAJ9nq3KEZ7U9oWMyoxMuKBjWNvzKcA5qWF",
  "key20": "2zRsDthCRmmWfE4zvG3SnGstdBeg1YqYZesfYxoidBsoY7xXKq9YC7J52kr1pANzcN3nyHuzHvMdM2nJBW1LyXgP",
  "key21": "5Kzqu7EDXHf9NGdXMfbBZzT7cCSbLZtupo65AcgSH4VLW2WvibuXKc2EKqFhR1yGNAT5dWX761wf6LS5piDUB8kq",
  "key22": "QYXpEXgi1k2MSAycxmBnxcvwy55XLaUgdk9eSfpKgko1gR745KVCFh2ssfTLSm97eqGgPp6E6Mz2rAwvo6nPz4A",
  "key23": "4h87fvDHPTtK2wGXF9RCPzkVBNoWnbddLrNRa7sFpmwshtEEU4Hx2t6wkiRXRWigXN3owuyCqz8xVu4b5cXvYNUT",
  "key24": "45boW4PMwGTP7YD4Q61aaTCKhYSu9rzW2wvgc24xNCfEpRoidt7yzCRzvXBDMBfMdbdy879Gt9pKz2We1anqwArj",
  "key25": "5rZsYceTCvxRstHgHSbz5uhKMroZXj59hhpJ7KboGLKDh9Gg1FVFL6Yg4aXxVWEUsybESgD21zVvvdFSepxoVDvT",
  "key26": "BzSrAeymdQWtbfKdNMB2TsQk278eaw9QCVGWQKFWegjieTVBpbphK5ihXFDz6pHVpCzJbhYUh1P1uhwcJDxCezB",
  "key27": "4wydNrKiYwiLQgpxZpS3BPKtJMez5NvBf5cjRsCG3etsViTyYqQ3SwQTvBQ9WThTr4nBRaZKX7G7T9K1fAvVtd1R",
  "key28": "4Yv5Aq2JzoTZ2W8T98ZQsuMMNPMGALnP1ReS4gAY8tStvrdkPTkNf5Zha5bY7b2dYaC77SmEqiY4t4p7bGFkyrsr",
  "key29": "3dma6RUy6UEKjh1QYiF71Sv1ricGiF5xsV5xgU8HGSt5cAPnfVv3GLiwBunrdju5FRemiB39biJANcLFujx8i9aP",
  "key30": "3nVE7SnD6Sn6tkgkDLQb3Wp4pdPeWsuaKzcpTJyRgjWYxxB2sDPXSPtxhjpNZcVDrrdNsbnxeAzr9Q2z7CooFPFU",
  "key31": "21r4egsKWqU9JgRBbfHfPBH8X2T44hS8Nc2TkezMHqVMKx8FcmwQZw4ZH48x6JkULHa1Cg4yUvxhePxsCaCzfAET",
  "key32": "56LUwwo6EDgwZmUhjmexmbE9pGuE2jdbkE7PBgZuTgYy4N3GrpfhVWWKy586UFQv36kACMSYbcoDFQaxoPaSNzTT",
  "key33": "5xmUVm45Dja68UvQwRSaDfqzcTFJ9m8BySkNJT43oEh5Jcn47VCLYeU8Pf9qaVZx6J1jX6xtjPjxprrSW95VmgfF",
  "key34": "3LsuKbsgRt789PCafUaEUh7GAGntbbGWJWNkbggRRSiKqz1mKfz3zcW9PPWwiESPmEtayLqkSgp1a96LYguxiDXw",
  "key35": "5C9Rah11WYLW4Gkb4pnRm4ztPdWvmS84fJewPGHENFojfomwnfQCSifTfevTXdB4FUJ7tczQbfRo6K1vjB2JoE1n",
  "key36": "2EMYesEgobQWxcSe7rj4Wa1gYzpNL99qonMjZdLGhYLMoJ8GY2MqsX6wpCPPyw8RBbqgNZdPkzs6bZn5UpLBRkQF",
  "key37": "5KZBr8HCQ82sTuBdNKnnQ3bXPWL9j7JzsrrCfw4MY1NWKwvfgRQyVp6nvqZtsauU8ho2hj3rK5pjkX5tLi3akivB",
  "key38": "HVLgQsY5fpfva7mtuReE3Z3k3qqEqxqr1pbg9N4DqMLKt95s34fAwoY6giwhQ6A6X4Bfdm3WqsFvzbKi2WGLB8x",
  "key39": "2TJRfJkCDqWmR4L2kQyYPsKibmnF53ksrGyy57k3hgajb1NDcVqFy4ufBJVgxFL4fT4USq3bVbewM8dGk8wCkUsA",
  "key40": "5G4uruJ5mCkQvXcpW6c6NVx4tP59pVKnc7TpQsjJHcN811xj5ULKBKUVZ7qffPeGKi7qm13dGvFtdX4NcVi4YZ3y",
  "key41": "wHexcbA9mgGsUdmTYWzdfiJyLUMtuij6FYNsMJ8kDzCKkbK2Ekt5rheSMQQDpj8MJ1Dgq55ZX8j1VpccCDV8Dr2",
  "key42": "2Lv9Fbr7fSZBfnvGJM7QauS7r7YR6hXUJB6Yi7rUfJ3ps9ebFhgw5TnYuUakqC9xqpVSFAvDM2xNPeZjtk3mSpcy",
  "key43": "2jiLwQufHjAX7sSbkTopLRBNc5gUwQ4gLJQJ4KDshRupkhsLSeVDFpmowtQNjd4iRgWSPDQ4bwfTahaUsV9Vj62t",
  "key44": "3Cuu267vRS7XC1brYQGvPeGdY5Pc5xYCXw2F34cePKGA3HW3G5H7aEj4qjC84tU1LrhN8Pr1xcBe6AargHL2PPfw"
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
