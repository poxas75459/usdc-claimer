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
    "AvVuHKf3Fq6DnPPTfuY3Ssa9nd7Z1ZNXfcMSSXvDDCZpCano82rsGvB3GrV2gR7EatcGL3gNQiHPdzqs1km1evW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eren4SPEnSh8FqnUMo4XhhHDih4RTgiWNyLTogyVVV5SFMgZcnPhvxKD9DyENPkQaEEe1HJD8hfvvFD8EYxstv5",
  "key1": "4LwoYudCHKD7o717J4k11V4TkTANmrY4qxAVaVbLhnFbo9sQknkAQghCPVMxpA4UXVr8Z3Qg1fstadpmuZip83XV",
  "key2": "3KQpcsu8Q1VovukXDzJK6FBDDTNEtuuAw9ws1mJ3JZMNcepo7sgNcFvq6mpsaDim3S4xZtMzFCXgSwRVjHECWcCE",
  "key3": "2rQBCW6rV5NogLB5q1qi9auuaNtrmJeWjvqA99kFr1c2uCWiqVZ1ivSd93traGDEuFL5eJh6K8wJbvgDSggsuvmM",
  "key4": "3BHXuABZJFrweJ7ubdKvWJSfucQRysPCpFvK1HRBrPBGu2SuXJLzE2kj7tT5YQQvxNDYFNh6XkJtVt8Q3jQej1t3",
  "key5": "dym3QKxJRkePu2q51uPto6bzuV4L7DRFQdVnCZKPdNMeXqqbnUZ2yz4PkJKCtdnrrxGwrVefYWWDKCpGK8EHiXt",
  "key6": "R2FNSbA7SREKeB3FBr5d7Kce4hthWVwDYEQZkcnxxuw5QKAhZTDtwwB2YQacqM2bTh5C3j4oESG37Lmaot39MCT",
  "key7": "4MzSYRyCd2hwcvBrFnZbviYCnsbfgVqFXWUr5tVRid8NixDnvuM4unk9VMi2PhAFMcD8t3VEjqm3pQDMeosdVKza",
  "key8": "hWJL345g5WzMASXPgDSiiwbdeDFcHz1SGu4yVFaL8T6xUHAZsm4YGPBx8vZedCe1ggf9tmTRD2WmQWksw6a55ow",
  "key9": "2uj2fVAyoCyfnBaCoesGy3SCdGPDx8HiM1Rj8cYTvL5s1oGVvwQtkKBbsvubkXWPUcwkMdacJTegob77vHNGHJor",
  "key10": "4UFAtF7J6E6ytM685Uc3ATxoX2iuicAJ2nAtx4ZNQ6tscuoV8PfnXi6XEjEhv7VFvU9eafsCzW1tw1y15i7Dxx5c",
  "key11": "5aNf2MHAeB3BYkmbzLirzcpxdV1VJbkxnaaMY3UK54EsvEGvX1p8H3W3ewQDidXrP4iz4JvtGeRzzvpd37Pr1TGP",
  "key12": "N1SmXNRHnTR2yQdewyJap6pWEDNYCHNLXS9g6y6QHZUQhQMpy24vcid1b6T1cN4yfwGBaFuMYbp7VFXUfm9HXVA",
  "key13": "3GaSJzxeY7LoLxt4HCAAtYEp5YaRvhxAuKwXW49WUfo8MMgjgd92ho5xCaHgu7DofjvXVKpQ3waysdXse63jqm16",
  "key14": "2RAVqxdP2Ru1hDaC1UMDSaWSurXMqZSKWhstgKMgZQtiae5ecmdkqMHk2Zg2Tq2nrhehogZ2qoovB39pLyVBEe4S",
  "key15": "1eHBSZ6n4yJbSmqmWiWoMDyJNHi6a3Lek5QF6nrukNVpqVWREJKJirGpmTkpEyzcJFQqnfH48Q3HLaYJgJeDjkS",
  "key16": "3DQnu3aoR7HFH9FKegoSQbdDUdEVmQ8nvmQaDrhS9TESMwuNSwRtnJF6f4jynBvy442MEQdHnsh9kzrKwn6H64KS",
  "key17": "4gc2ppwjmwqgd4ytjTmZ7q8Y38WQQ5fDK9w2Kj743TVJQrJZtecQrMpMri9uTtiPrajh87faiKWRftPNFvtzqnLK",
  "key18": "5m8q2VGSSwdpR1DyV53HvGKLQD974k3EAumzVLArq3tprTEgmdyEWKMVuXBsAVFYibFzyHyojLTQwuUDU1LJrDvg",
  "key19": "5aJfVdd78ZWDS3gDwrVMJyupG3ePNG92SpuFXuznUoAb85Dqc22VethgftWXqKPTKZSPrA4MNGimBPBwAznAtYsL",
  "key20": "3CU5qVScNCD8AgmyD3jR5YWs3tPVv4dDMJB9sPGuNCbMUHwjKos9WZLdMKEoS41xVx28c4Koi3SGdtEcHFKPje2S",
  "key21": "5js98wJ95FVoMHaQvpdYga6ex5PAbqGVPVf4pqNPUms9vVN4FrTNgYpP2yUx2Tw73rPDfbJvcFcfaLg7y7MgR7Vv",
  "key22": "46Rh1V5J8qxozNoKWJchu1zfWKzTm323yZnnpZpX1mpxuwXpcFnHcpPM3oPvomHBL1FjSjGaEDPrBQkcwcmmKCnR",
  "key23": "45R71RUKqxpb1L6DQzh8gz9cbhDWv3qkQfYrLf9YuGuSwJJKzox2Q3StktwXQT1B3TH8e1dzbY1fjRjz2hUr87kN",
  "key24": "2EEHLBB9Lk6642xFwXkWTuzhQMcdMYLwRg1anw8HrWhSgxBjBgk4txJUvayoRPQoTXwUyPW6kbg3acTrEkyt4sYU",
  "key25": "58NoVrpmMq3EwWuF6djbJN2KZUCRpVAM1TXcYfwBydLqL3GxHFA2RP3LyMGFevo22ox4biKHftX8TH3uZVfyrALD",
  "key26": "31YW5XcnNrBX9QAeDfz7q2bkq6Q2vSur5bjUeuKRK6F2f1rE3xSoWQ6pJDX6WAR4XfnnXQq1QrW6iQb2zYXgru1C",
  "key27": "3KjLUqEyXdShLHX3vX3PYQng969JXPEepgmkGXgPuV6T9csSH8JXf5jQLhZjGfvWwqfYYuUCbRynZrMD8AjvfHKY",
  "key28": "585paVRtwRppwpnXj168kkX7JDJsFHVBePvjC8s5XAr12iqPod4TJKojQg8d9SwecdiKzQMha7EgQRbTbqRZpDr5",
  "key29": "3xVtA2w4hnDhDiHa9z5iDr6VVhFLcpbmkdpPcUYDQoChVWFL7fTqbieY6kfztSvns8j4NNp4ekjUW6sQrbSz3DJR",
  "key30": "4yzbY3Xb2S72FVR4FLZ8uY7AS6x8FJZeYhZpzuej4Dg93BoBZT9CDSv9oqMmrqQpshLVTm9tE9fwo7tXmkMHf6VN"
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
