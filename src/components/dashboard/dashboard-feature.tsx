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
    "2oGs9wAE3PMvx7PSFFam2k55bkoWbJXsYj6mzuQFYrwNVqYXYMGxTN5a3VgnnMVKautA8FPhieyKFEgPC2DGfejG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MVHZzYbFzWjSkfzSYDefX2bCi2DkpqDxseojZR9hC2xFCtz5FQ8m4GmGi8APMrtESLgSmnConfeem5HCTS7JUS5",
  "key1": "c2EPAHmPNFuQWQ75b4egNj2BPZuCckBeDxRC5dX6RRBYRLqX3thMR7fKqVzEN1NxKCnyYGuxXBaBWeCHgREkcxd",
  "key2": "2jgckovQrsFR3wZvCbrgTn7XQou4mBnmRqZXf9nryf3mrHoVNmUZdp9UXZXn9TjV6QrWAVvfV3uDj7iNyBedPJP",
  "key3": "5KjwhnAEKBmr1RVh848nfpYEHGwyyZ62TLrW2cvFE1qAotvFgmthMLSgLCXdD2qzFtcpi8Vw4jehCgCp6rXzX9c4",
  "key4": "35hQgW3cVnodW4XrKgfryF6MKMT6zc4BqxB1GgvUWHUd8aiVfLU8AXedSTKkJPhRfqSAAXB2WFtPgZ4mMpcgk8kg",
  "key5": "fCDJXEMsPUJsWA2bmYjHuExcoKzg92b1Xty1L1cwnTtcDVpKXhWDzt9P3AKmbNx96Whn7FSv1nVY4B9uu9xLcgP",
  "key6": "3GghkpNEhKfbGCTEs2UWU9CBWAzYqXsMfVr5ESTUvrAgeS9csiRJAvu7m3rMiq61VnJ8XsfLisApxrvPDNPuzA2q",
  "key7": "4sTh6KpuLGpC7b6VfeAH8o1LkzY1GL4KKpTJiczEQoXjtXNt7QUAMr8kAvkqAXshjxvhjm2QUwvjraqtwHjJ7brJ",
  "key8": "5foAAoMZWkqhs3rSkQD8zBAaF5KiraLMnGfkDKxWBmwtAuTbNtwiC7WxJWYoJ3iz3ZZ8tjyhDrjBKEmUtnbtEbw7",
  "key9": "5S44CHdsg7Rm5V6urqKid32Pbw7wr1mqHSoN2P7nCa5SUtjrNmC2LGjFN8Mopitjriesst6JPbugqjNhTGZm7Qb",
  "key10": "5ccWqKS189UHktHHQqRV4pPA9AtX93fMMtkfWfzQDtfScdAguxwdf9k9dwkeHzFhz9aeEui6S8haQuDfDCYNQtPk",
  "key11": "35yW99hrppP91h8BW8LZgYY4ceYs2candWvpVs9pgjbPwEEzfSv1nMYtqsfnXa9VVp4GmL4rFEeghVJjeGTjzFWp",
  "key12": "2AGgqBFLfHcyhPjgntLgp9vzkAWcTcWSy7Amf7qZkib8AoXhgsSbnXQ58VUc6caKxJyaem9kYNUBP35ej9JeEV68",
  "key13": "3gX9R2bePkvu9XnJJ6gvGxiqp2CGVon4iB7Ewo7WjAvQH5FJvDPqf9K3TGcmFUY8DHF5cDt2MZ1ayQeXzbCPVCDU",
  "key14": "4rjU7gxpioBD3cPLJ8uShtMrE1tJoqJxVYAqVviJXbnsMm1UKV7EcWtaGvFHU5oFnEubv38XxTeiHwuTM4wPNSAk",
  "key15": "4HvD37yaBnuTu7tKdRKabvASPW4ooBfGwQcgRRTWqRhZA6qRMPrLWieVZDARXmcKiBQrBy4uKggL56d28Yez83A2",
  "key16": "3Vc19UKxRWLKi8Y4G68WfaiEMYCiAaU9oizDn6XuRkheR8zwRKFK51qyGz98geJi2w3N3QZDyRLngXm7rWvv7c28",
  "key17": "5CntHXYk7T5UcTqxrzApzZTVjZNL6aX8yPuhvPCRVkBLoZQqxYNpMh8YiWu8NEwMKeg8jAMUHBrSxQw88EeRb6vN",
  "key18": "45y1EfhusHp14CQhU1tof4c6fJbrafKNQ7ZFh7BzNXbcc7yKMSfrZjBCDPEmLvvwy3Tg3oAjdw6cN1xkBxWrdcFJ",
  "key19": "5GV4bTpwks7y1VeDGtV8KvZBWwn8gCN3KnvQczYk3wU89Y5SX59ZRPHJRwpeQDVa5XNkaB1QPd4HLu7ALkt8MpkQ",
  "key20": "58C5ghXTH1V52LDfy4DvYiXphuoDJWF5NXxgp1yRoLPorp1MWcxnQc97bHNyZpkCUqnihL28ssUedchCQ1LTMRpt",
  "key21": "2XGM1Gx1iQQC8wBGPyBnHBhTZLzhumGYn7vVrTvVni1a745nzc6AGa2wQ4KVV9SzJHSnnisgrkoiytXiznJXMHEP",
  "key22": "3Sv33nStDFn6G978w3uiHaTZ9LFhRoCo97rz5RFassTCPwRyjZZdLLipz31WJKhGa52roJk485ikK4cA3CPNsa5B",
  "key23": "2ruTwsTKQEcZ1jdeXe9AcWWB87dpkFvTWibwVE5yBrpeSfWEbzdb94KzUySurL7Q11XSVi8KSBVQaxxbh1bi98GU",
  "key24": "2geEJ1Z4r4PhNuTe92WDksYHsBbTk4nCeoLiF6WhSCTrRK7Y8iMerAD8G4dnnR5khJ7wJPfcN8cUhQP8VLwRteyS",
  "key25": "4ZZVEoMNZwrPBf2cFcArV8UBsyCFntQat1kpniky4e5vcc18Btye5vYkwnWZ8hkGXapnabeZZ8nku5gi8aCWbmEn",
  "key26": "5Av7gjxQnemaTh7cAte72FPuyeZLhf7SddN6oxLv4s2XKR7PxpBMcu9sewqm1LRL634NzNdVuNmSjv5L9pM78D8k",
  "key27": "273Ho7TQ2f7ZQUMj4HXhGyTjGBuWRFezscrzPrWCEQfi76r1DkVDcJmcxSYg7ywYHpEPB9X7XWZnojrV7VoDk2wH",
  "key28": "4GLKtiggEE9Dx4sPeDRDgvCUb5FCKgyPQMx5Ac8khZJn4YTuSDpH9doPdekB3xecxP61RaacUTM6ewhoK89AJtnU",
  "key29": "3wniGAK6C5NpKeCanAogvyKmAfAHnYRAngHCCBNcv9wTVfs6LMFjpzUCzirx8j4Ju9NXGFUXZpEw5qiCskjdndS3",
  "key30": "24M2m1b2UavnPVvfmpz9AXjmAomfLD2938Payg8VEbG67jchxqcmAHx8t77LJWNXcC3yhZRgvP5aoFcNP6zyh5VB",
  "key31": "3xbCxXK9xNXMKKnNxxwFZyuTedu9Xv5iZ1Z9BNUUdxnh468FHv2Sy59siVXGPmvp7pDzoTktjAh4pMUia5SNqDqm"
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
