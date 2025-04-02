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
    "ASJjhjVxz8on3ZCtqLsSWbzU9W64odG7pdjQMMS4bQfPv8Gt7jPMaRWLhmjPBaPsqFQVXgQfsQNbG8HFnKzc1oW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jNFLNBo1s4u2BnKAZ6ey2nE7U3RkJZtqKXTDQGLua1AL3ZUvHXdsft4uUk4FhiKgQhZBMV4PeuBT3iqnyHQ8qHh",
  "key1": "3z7PTf2s83MGUP4v9XFz2rhXfcb91JEzEZAzUhxiJ9NrHHhmWigb3x7dhFi92r4f3A1xi7DGwJVYwRuodesWoQSk",
  "key2": "4tz7RqCxi68PHQu2iwGcLwJp6JqGsc8aZvBymRvHfQYBzvY31KkBknb7UARQTTsMXXgTW3FzMBY3M5ZsUdgPmyie",
  "key3": "27nqCqfjpt1DuqhunSmHJrvSkkAE7EWCBixeZ1UJDdiaTyMf1nucN6Grf8MCkyCaQpMsYCyo37zcs8jBXDTaBxM7",
  "key4": "5CZVDDSfVAyQ17mc2wCovaiaVbmoKYDcTEkADaFo38egwud2n5Zk1tJDeNZU744vBdzWWhz9T6AeM3vt4uDkXnko",
  "key5": "4MthBf4Gmy5tFajNC2JCPTB4DGR4bF1M4bk9WXu8jgqFSVTuTXtUfz6GRBj31Qv1BhSdrEDidouBtv9WXBW8F8Y3",
  "key6": "2kbakUVdSJNasTfzvm4eGQNaoLehSRF4JVVQPsgmS2hqZ1uCcpK68vTQCERJafDYxV9PHfAJGywp4x2njQm5h4qH",
  "key7": "58PRTehCUf8DNUcYJrWqHNaBZeQiTikN6uEqPVe36zjS3CPn73SGTw8RvxPZhNSaKxDPqgYqsbwU6Ga96BJDJNNy",
  "key8": "3aT3WJam2fiogvtVvsD6xZnBttr2g9dKEyQrb32BfmfwgaH962vL1ZbgoBKzdUF3LPocr52KauXrvv7gtkPHHD8k",
  "key9": "iQuVy9XFMq7rPDFmK4skGhJxRyjvvJarmRbZMCY6JP8S2KCHdzjPwkSDXs9KxTF9nLvLPotUG8msYfLWKiQGxfu",
  "key10": "2c9PiPrpmaTjhopyJyuA8euGn3GpMiN1pkpVxSZBgfQy9H4ZGSePMGv5gYcceVNrs6kqeE4EuCLod4UCuCUMUoTS",
  "key11": "JcDhPzt4fNiD17KumNodyUdqmbBfjV1K6nphCNMhEMKqHDVbDHdFUU6yVY1tYi4k8CCsi3NzYBBcGSH4nYtM6rY",
  "key12": "4HLFpmAqbxNHTP4Nx5E4k4qXQkd7fCjFCcZQmjCYoob5jVCJ1FjJr7iZcjRYUbLdfJb6DabKjHLfvR7ehGWPisat",
  "key13": "2w6THHD7HvZ2ecXQAgsDxa2fkHUjxcTKNJc7dkSivWfqWJonvEXP62abcHbqU4a2vnatpzdtvrDD728XQziRmPi9",
  "key14": "4qRswHKS2SLjwxfaUqfmfUFxziCsgDRaY2NBE3enyrh3SfxT4NqydYYBXqGAiMX839yGHZSPuNYxQ6UidMBxBraR",
  "key15": "3mW2MWHfCsmk21L179ew581atkSSjBKw1UbSouE4ZE3zejrSp7d9ytrM4PoQFdVxCMUnXpckAgnXaKpcG3TA14tW",
  "key16": "3s1JciBuPdnQp1XYzwiheDppS5rymHsdworSLzH3z7fxwMmjbf4iBtoghqffYDDqvxsRn7b2tNGCPFsQYnyDBw1J",
  "key17": "62FgfkZmATUZdtMfvKmGDNNQpp7nxUZHWcdRrTH1CYedqPkRxxZdaTEzmSDQTERSbroF2XguqmAwkC5qeX9pHN7N",
  "key18": "2NvDnSuGLoR9ZUmjDubcvxLAbEByMnBtseTjq27Vv4y4vBA4wUvSqbE4wL86i8xJW3tgKPMMxvCeoZ68xCmiexDK",
  "key19": "K2gcHhFsuHWP6JGAZHcC5Khxej2f2oKY3E8cHFrRSz265USC5rgcsHcDYkRbDtinTAiip32jHxjJvhR6nX8ToW4",
  "key20": "4HxAuh8ZjEpV25CUpxUEeTQ2AkL9vqP9i2zG1wek25oT9zdxCtRAZHvLRFSRN9UdYYyGFpPeQT4ziraBrkzbWSf8",
  "key21": "3EDEWxjzWsj3BqgoEHFhJNCL2iTpkCudrTxqoC7dkYTxTwCTTru8d1Vp9c3xQkWYXnKV54Laf46CkoHXKcj6uuDt",
  "key22": "5SgbutA9UNWwkADq2y8KdA4kCzWyhoDasUA5bNd2nk8UuFDVsC8271V72HEQai4L7ihnVxAuGihzUvKdB6oABUr4",
  "key23": "3D1h6jfYvUv3SpE1qYsxTF3cw8V3QPRMvDgsAVsdQ6fMrFmUrmxyvxmZur4s1q9PthdrsEYi7PqBVmrcZQ9fJoj7",
  "key24": "2LsBU3bweXvR9jpGGr6EGNNxFKaC2aCf4DgxGWUNtRyheZPE5gATyCAUPxdcaebMgrJnogx41gtYc6rkizNGSmY8",
  "key25": "3dw8k5nPEsjVCWUmy8FeSRsDtZ5uaRAQf7JnhmoRjx7GF6Gk6GbmyxpPyHb2nWtRaoW9cBZMDK9hPP8kHgPQoPxT",
  "key26": "3M3X3voRqZ986K4kfpY9pS2d3d9kP6b8jFNAiEq7FgVXXfF5kPp8diSqdeULVg2SHpKSpCzVTd6EA51AzKBjhW8X",
  "key27": "66txxGqrXxaHFxi6XKKFokCjmPQ75KMgngZkuQkn5Vz2Wvioig4DvtinwBvcbfDjHbabWJfEUzeVxHNhpcbV9HKr",
  "key28": "5dv9dxYbSQfJRVFuYQbvnkNypEnZyW2M3VjwwcUvdyPMu1hv2pUDmraSuXSxMivzMVUT29Vks1xCGAsxDG7wnPgd",
  "key29": "5HvhU4SMwUrmFWE5Hz4Gk6PmhkFBHE2qo4rAPqAhtdJu1KKQY7q1RLdVzvogJrYosibs8tGwaFjFrehTU4JbDF9J",
  "key30": "4oWDdVo1gK6GqgX2MkFrS1rJ5iLoNyHz5r1ucrtBL54XZ7tUD2V4VxrAVK3nvUgyqWup1C4GUeYkt95dxYwoAohA",
  "key31": "4DJULtTYUbW5JDqQMsm5g92ZPjBmRJwjCgUkrBiViNi2sJhecHP4XEvoRYPnumjN3Hrcwdf5kpvaQZxq6RfyMVVj",
  "key32": "273rPk6yWYFV5wuwhwUS3atmAJhR1EhnefLnwA4g87qKz9YjzggYwVMKjjiSwBvzf3NnjKk8MAmdiP1eGGKVAo7Q",
  "key33": "24vCe8ccYa4nUPPS5krWwMHbywceypoGSsDPPF77mJE4attgjt2fY1KyfxzfborZPGqP7Ltx2qHUYZQyMZ7MUyhn",
  "key34": "22UzXfQ48MB497TAi4zQwNJkNM3RV6t3erAyLV23Ai3EJBvX2ohkhma766K6rzDbiFCzXHnRmuuV81GRYRqg6W5V",
  "key35": "4NqJNsbY8popo2UqbcRhQkuog4knye15evgJkJU4QA3V9KNZaJqmnDD96UU9u2BxTwqePHqXeDUUZ9PUuXSaa5Mm",
  "key36": "4KNuNuKmrjnsjXGqFH6NSqmZrHz3Lhs7zRSbKRys41XanqmXXUaaeDFvDwnJBTVH87YcL4gPwKwENtGNHDeJhg1j"
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
