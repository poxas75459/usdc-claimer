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
    "SwuQEEZJrkCRa7NoiWNGG8tGv4YeVn9Z7NTAeiFGW7PFQrmXLrV7eqqkgS4EUsU2ydrNYbtmq5cBiK5hjDF3zBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3taB95h6SXHRLkYRExzwuEYsSVXhG8EJcVGmivwPPospwSH9pAChZrkHJh47QYkzadNbEjRRRiz3pq33jiFRXUc2",
  "key1": "og17emKQPcjQ36VHPw8EAN3MxFQagXnGYh8tjzfhsyfmJsGY52C9grsAM3jHE7aLpHDQ6xqmigtRiejUvbjUmtX",
  "key2": "3PC7AbnNSKdY3zqmiXjQzNgjCSWXrpRTBaHMD7jEqo1j6bCADGVkWeawP7qdor9UFkpii1G769AcqcR7gA1Faojs",
  "key3": "3PYCnTYgrFVmUQNS4vjseiAPvhxC4hYXsyHGw7b75GAJ7hLgxgsK5rhUGWK6m6dnN8L1pCeBEL9VU3bHZfMg4ENH",
  "key4": "3oMtZCAQMvuc3VDAtr17k3ewijCyK1yyCRciRobABqzLCJmwqE8FoXDLymKqHDUgZeFANnUek7rbPrRgzrtbL5ah",
  "key5": "2uvCuJp5vViRR2wif46hXPGmW71HNzN39HwVLWgqe8edRSaddd8EWhEixyYBKhighkgmPG3hJ1mMJDt3kXPJLJd2",
  "key6": "5VvgLD5otma5V4xrsNjMNfHCvy7Sot7Cc3x2sao8S3dZDG12nvKUfWErFcKAnhNX8yuXDcCYbwMQJHDGHQ8ot9Ah",
  "key7": "45isaun1hgmNehSAnFUqDka5X9W7yK7jgJGdrHsff46MjkK2CgtcSdYsm3PvtR4JEiModUYqdGtEwV1oxcwvAuRQ",
  "key8": "4xa2qSLYxpnd1xZtMazdL24TveTLsBiDrsibCmbyrQ7v2b13NSMufGgsFSWhM4juErQHoop9WoqNeNA3yCZPVQrx",
  "key9": "4Yq1BXjNdMH9Zn3rds1pHVCg8AZm2tk6dF47th4D5yPjEhTDax544fGjqrQC6wpMzxknfagW9kf9FLMqoTAAWdZn",
  "key10": "4bLsLDyLV2PJAygBWF1uV9aFKiQs9XRYgXzajpbyhqfybDJ6x4VUenrQJSAuP7Bx8SAkAbhDyJHHU6aYt8YFoT2C",
  "key11": "2GfwWYjQCAMTvAEBGDkH6hZvmmHYCCnutxF5u2fH8NCTXHaWhMjY45WZdqw7mhRd9mEk8aDDxgCHmBv4wPqa3iyX",
  "key12": "4qYBLXJWxGhpwo3virVMWZJPKGMEQQDsP2qQEsrTqevadbQsvjW4an1g6QbuvXPTMMbRDHZn8tFehaTGq5QVFdX7",
  "key13": "LHTT2c9JABWxUYB2AUa8rTz65FvGgZTWbYvb8oJQHUieL1YLknekaBdYq4Lkmqi7WowEPpwKumo1q3wpzUaa1xW",
  "key14": "pVmfstc5WHmK5b12SRXXGCWNCwRaN2FKYGL6spp8UTr4ANqkTVYEzp1XLYwUJGqdVnzjrzmXR8BrkdfxRX5Q89o",
  "key15": "5zRGmiW3CWQkdzZy3doD6egS9kazJyXy4tPuBQyzUiy5PGDon8z2tHmVSXRBCo8dVawN5BuuiBofWYiYz9oGuyZb",
  "key16": "3ASHWCGnyASPjp3nHG7dMAp62NB8Pqjw5PiFa8V9Q4Vsew1kWgTvxwKawKe15LQF1rvRb1wuKjqYUsXBnwKk1V3c",
  "key17": "2eP1fFUiSqEvsLNGsXcDMmAdnoQd4yJZXcapcqkMQXeLSaq85nj7RUsodi8S3nAz4ZE9wKsLGdye2SYVFsuB2N8r",
  "key18": "3QUFKngpr2oZ7P4Jqqp3aHtuzp4PtvedM6fbFmyq3Fx6iYyqAburU1VLGvmTfA7THkt1Q8dfC127nVSRQMRCykSM",
  "key19": "24ka1BfqpZjujHdk2k6wQxba8gQjEyaCiuETmdyzEoaLGEPHiwgjfawyAZ9ikcSorRXLzuyzry4gd6wT4eafpVq4",
  "key20": "3LR96WikSAiPnGM2btqPAFhvYf4p8R16Y9vmaYyVv2jjaDzhH9TFJeDNDSDQAWdvkb8ejWAZ5n8FSUf8awoXJrEc",
  "key21": "2r7uQbxT2VAUJxacETxyHU9SPanSabZfP6NHXSaUBqzE1Lm3EzqfychjMH387hLWeL4BqQdzKoAR4dmmB987NFCa",
  "key22": "3sQNSPPYbDVPy1KLQx3CC9oWMUPFPcuYSVXPpn2DGrFnfoMbDgdZLRwP5yg4HVWKGB8W9qdeAnjwtLa8wRocYag6",
  "key23": "5VWAcptaPmsymTwaGN5E3ZbgZoE6SForybMzw8SwobtxYwuudUiToDfqvCVqCFSKBbDZcXqpPWfrH244qy6t33wD",
  "key24": "5Mm9x64kawzxKMUWjbH8yhfX6jx8s5efg3hpghaTtMaJFJJ2J4L75P7chTx3h5pju9oo9Pr9PMGRMr3GEa8hJ2Fg",
  "key25": "4XrcNQDLckhF2MoDKQS8w9GogZBPWNGouExa1bZbY3BDpM6BiWET4ZyjittUTkmb8gwkYsC3eQJaf8No3FFaUebm",
  "key26": "4SNm3419AEoKsnEN37t6Hv37J3vxPUpavjquakT6tEcJoitF76YrXodV9oduBLrh6ZoJvCyBUH9vUXhRcxsW85iB",
  "key27": "2yUkFhrhhig3JWaAfnrXApHT44uKTJGxAKrXm3wJLW1dTeSxKdiFsLXNWYSsf4qkVZ7PoTu9Ho3PRBw1kCLxZuCH",
  "key28": "2KQ6cQSUWLijKxiTxstwAf4uvUnC9ra7ngsBT9dJMuhPt9h97xkMZhnaAb3W6UyQJAx2zHhpsYRpAjTA3LXChuRC",
  "key29": "LoMwwMN8AaTjbKFwRea2Uj7A7oYUxokkr9aEhG5zRUYWLBEecNNsGT5FWFqrhQpXz8hXLD83Gg2RUzjWi5RfdV7",
  "key30": "NVouxZkqEKuPmN5KiaMsbbsv4oSTBzjVqYbezBHiEQiDnA7Cudxv5hQYG5cNYweE2owbGx9p1G53kDcCjHERoSj",
  "key31": "5PjydjVvJ3mWv6LfnJA3nyWuG4nWJNRJisSwNLnXfQwgucsC2VyYMxPkRiCri61uyRFCcHjx8ecVDBQAn44qYgue",
  "key32": "28FzzNSTtgKD6HWoacKnbtoMt8htKYyt8Ncb2XHd4hwSJjij78vzVYmrWY2qcqykFVDntGyonbgzJR2vcEL6FmW8",
  "key33": "2Akv6oebotRuATt35puPqsdNZ2V71WDk2VhH5NZK2NjhjexK5oJc2MKvwjsnCbVkx41Aw76Lfsy3PPocuxvVMKdv",
  "key34": "659vvaiHhXDipsg6AFCPK3EN1m19ZYyaAjjXCNAssgNZiByoS58fAhqc1QPJ5CzhMCUbdszeYphQooHKUqssfyLC",
  "key35": "35Vrt9ipdndDHrNM7bpPeUNR8Ai7nSDcKHd3SrzvyYJwmDQKa1579WspAsq4epaXHdZX3XZednjwx67Gb8QU7qLi",
  "key36": "55HFPZX7XoBD33ejHn1EaCtwRwH8dqFNXyszGDbMk4kmJSdMm3spkQxi5W4NNM371X3kHocM27LonLee6D8BbB8E",
  "key37": "5TsMSSk7jcxuRDbG2BjSFwpEwzYBfTHTx2C2UkEos7fj56ReQNYMj8W6q8nZ5LUx1Lkx1N9VMD7432HGJf3r1Zss",
  "key38": "bDPxG8BmHwkknAYNmz3Q9fDDcWL5bXtygspFEnaDHs3QuxXoSR8KvUidEuUDJAo6AajT9q2CdyxSE4sXsAHfxpV",
  "key39": "EMrZoF9k37ppnTYe8e1nRhRgBmbHDr3kzAo8tekBBAj46WiCkuBNmwG7sk2VRLt5qzEAkREHn3F4StbSXQNYqj7",
  "key40": "2567mHFP4JEbdLRVh1N1MGy4X5kPXYZ4GxWccp5yHtQdCttCvoDoMgFYeurj6n3EroRQ2Lou3ibB1JecNTpsTiX2",
  "key41": "2xYs2wVScfMB1rY44U4A5D65Sf6DkKty6jj7cMeT2G4RonHTZY8bUnD8sVMRLSn5jAEV6HZh13czMRnf7F7iz5x9",
  "key42": "3nkC6gBHAMaVFQDtwwvc8UnsuxbVEmRAijYXE1zVAPLfMZ8nue8kREWH1RdV9nF6b1NKhqP3AfmXKp73cRthCGYY",
  "key43": "61vzwoUzmg3PNAeRZnWopE2YEyLEBCHWSmw7ngyA3dNMsEYXdNMEa5NU5WhcHm8mQxVkcULrwHzpbvcgDoRidrFA",
  "key44": "462bTv4FDTaL6NsCZSgeLhaxfEv2W8tDoEoCKUzgNmwSjXsStCjfZh5yQH9epw3pSrwhjcr5kEjFFNxgLYEADWUj",
  "key45": "2dxxMfeuXRecAm87U4ofV8mpsR6s5nuq5mxv4AAz3rFEsEBkrA8WbDN6e2SomoZAQSf7HoVf3ZVChqbyayCELVFL"
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
