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
    "5buokoS3AeeC1EMYA79S9u6biNWSDSwTjyMBpo6Fuvf9upj4gcEg7ZQkgPgoHP7nhEjgEwTAJdwoZXKcZeNZkxGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tzgALRtzqK5PUV6CdrESSbyAWCpixM4d39TytWxCyG3hZe4FSnH1AiiFKxYiufMHpCY63TWWkjyFxezuoU736BQ",
  "key1": "3rtV1wASJKSgHpcpQ38gqjJyhvf4Q9shqpN86owEFqKTkhcszJ21ETWeXyPgSNdSKNCbWiQ4pUucN9sKpd6H51Zh",
  "key2": "3MceUey8nrrdtCvzkGYDr3UCWUeMYxXLBwVRbh7TEBujncZBtoxm73TL8twTkmSWoSvGebFZgkqFPJcrCyTcYXoJ",
  "key3": "47NvQgzJskJc6XHei5LNpE45PaH3Q9N7nuid35BfPwz6t2Pb6Em4eUyftpyCgtizTtKUR85LCvvd4EuvcP7tQ6DJ",
  "key4": "3GWixLTUuyLVTVemrCxB4EFCVpF7m8ThCB5Q3Zbnm5gkLKHqXqE5AEs48L6qePjvRoqLVFzX8XqFAiUntAKe6qQc",
  "key5": "5CjEtCEve9icdzv4vHcgpViwLsHfw6Xh7Dv5zeJ1h6CCSxYY4TvkMK1XQ5yNodwxKxANKLfSaS3kdZnLwR1xJXUD",
  "key6": "MUtyMGv4Q7NKM5YzorFfUNAcUwGgrwDc7qoVAihk2AbauB63GQnfy3uaE3hrAaRPfoqx1tfNkkCAT5n3thqSQN7",
  "key7": "2RfsizEfBjDoke15u6sfGoNaMXe8T3GJmSBZt1Gp8oTxDKHNppc4Jn4f5ZWbTQ7UzHtgQCw3a8jmnJRnYjpNSWwm",
  "key8": "3R4Y6799goSLgdUGtQkvJyz1uBhxny8qtPNUfMgegTzqozpib2ThYNzfN6Nn2A2hin8nfoBmjBPqsvrjexot2Bak",
  "key9": "5gNKRGUBqkS4QWDyzVEWivdKCayN8Bqvw2Gn6TAnEov1s2ekAj9YG6HJoTvXBuR91pxh6KcGiggimXMoDC3Kp2dE",
  "key10": "5u3dqAnrSXhWb1ujJvLv4DPF3Lme9WXKiLHqHUndfsjRR2e8Hyi9AUYEbEcK2z6NVvhJePRjskFSFjU9x3Y8XVuP",
  "key11": "2bikNdSapk9WRbbXksNMz8sRwdGsBbE2dfh6LFQ1QQptePWU1Vz4L78V4ecQWdSVtFexPSXxh94Q8KiMKpBh8aS8",
  "key12": "3D5M9cszjmjEpixLsfCgr1s1JocWRynHK7kxPzmGmSKiLt1FwXmbo78XwZzgXdkHfV2gxaVSxj8nGV76NF2crzTU",
  "key13": "5dcW6timscPNu6yvMFzN6SRbHsaM9domba5GnHDNRNJ5KfhtQhRS5Gb9eSgQjNcgXD7eD1zEvLioCm9vaithKExs",
  "key14": "3ydmHbzxVSJtnc1HuPRR9Ebe3rJe2BzErGvgWrNtJFV1tGbdXknfFSq84LrEZXiWXQiKFejdSyGkHGdK2xXZRD48",
  "key15": "5hM2hNqxRneJmenPmGTWXUjT7TkVkKDvLcWou3w6ubpSqZUU6qxPfAxGxppXQ7x3xKbqhmvF2hMjFHbAERFaLest",
  "key16": "4kzmhFpQkKvNmbsMJedtUEgFwBqjC895dbcMPq2LM6qbiomagsZwmaF1ZUvnDM3gJjAdSTBo5B7ZSJCt1he95SNy",
  "key17": "4oLkhyAJaERCP9mo4HzAgVDJsNmPGnKxhkMC5h9CsFLmmrFEkQ9qarB3oRjVmLdNSQy7TvXKE5VYAP8VJKg5pujE",
  "key18": "yCbc6XQCuR1sdKTqLdc3mmU9nn6zQ1cz94tU9gK1BFu3TRuo9fSr944t3pXm6gfCqk113nVGEhSD94mWC6itDzA",
  "key19": "33FnEALtVs1ceZv21REHvVGY5xzJ2aumaM4tGDgSiuTekuz93LPsz81Va1Ji936P2WJtvXFaKhCvyow4BySgRJ2g",
  "key20": "3rXNXLjdnn8Tdvewk6jKGt547FCBe4HPSskAGu82AVR4W5iTz1NsN2xWVPzja5bwJMuUwLALdJaZEKu3diPgDtqA",
  "key21": "MfYb8fVt48FvUPRB5rZcAUZWef411dgSsxbNLGgsi98emT7LsubAhj4iUCkfKAuKjb3uPmkJdb5Fy5gqavRyfRh",
  "key22": "tqNmvD4PYHEdePZD7ehGsVA4MovQuksmTjTxvpaKwSR82adsufZRP5dUBAgJwFLwMwZj3PegV5H15A1Qtvvombe",
  "key23": "4npaCiq8U3HnfeBjczuHx6bkrMBoDi9UivLN5J1P42LajabzSseCRParPTqc44stCkJ97XNdv3qpbs6mnqScWFu2",
  "key24": "4ywzT8gcsws4oQ7NiH1mFJmFN7Hg7ce53gtyLkfuXS5HHEBNpRDk8fjfbaobeqJwq3MRwvJAvskFG78WwGQRBvCf",
  "key25": "Fbs3j5rZojHi35r59jdDSyMr2qRMEqn6EnNZ7SdKpNQ2TrC5ypo3uDPDDTAavxPBw1XXqwd91YM2NnMyMMwNNtT",
  "key26": "ns9LyEScWY7P8Ee6MhzzqJt3vETSByrAsbnFYMh1E92m8XNK3MKZEFqYAyKQ1XYnRbEX3DbqHZDNYS2Qt4PTs9g",
  "key27": "5Fe9z4dFGYdoAfKZCGXpKkAVwMJ3HmkoFnNx2z95VZprLbySGJQMUzso1NjJJFS9tPmac3u78ExQCJxbALWcuS9y",
  "key28": "2S3TbgAapVDXdi9SkGJogTQsAzA8UE6FUEdwU16rQwEeGyt9ugqjfW91P9dQRew9f91g3dAVvwaLy3duD6A8YS2N",
  "key29": "4caCQsEKM8PNyXTTnEMsN1QV6iY9gmSDxz3cAwHt8S6iYZ2yMfmyTwAMZzR2TT5YqqXVwPDEgP35zpCZi4SnbyWj",
  "key30": "2jEVXFVhJ3vfxuayZuFYeX8kR3T339nWK2YR9CfQ7MJBSQa2FUo5yxD5NNFc56Hbwpmp5APasFurmUD54tgBy4D5",
  "key31": "2HVKo93WYxA9ufFuwck3r8ChenCa19QKy64uzm2bpJsPTp91h5qnTr4YTFKVfPype9zJPo9MVYGPGvM8A87ta5kM",
  "key32": "5NRkgM7d5FNG9Aghrg9v7y8R7jkKEeZfFayEaP5xF2viD24VBymJYN8s3ZpYUMLG55Fxg4BQX74Px1YVVBxJQxEs",
  "key33": "2qpboYodgvC38JhMASEke5KAFywr1GbUPt2TgkHdrT2txcUm75yF3nWfPy4UcFxqkghxQh5GzVPVX7hPUQrf5qq2",
  "key34": "5245VvLqoR3QxRCxobtKUi5QochbB6Vafph8yQvQ5gMbYXEWMktcbWNErUWvMidvDSQJD8i3nHcdFk3MsF69gS1Q",
  "key35": "3u8iVVEsfjLiL8FqmzWHT6LUmoSoggWjWemNW81uH148dXVc5EkHjHczjTprfPMeJrJnfwLwnS8vupKJpDCLYVVn",
  "key36": "4mGi4vvyooUVx53RJAc1voWBLZjsPVSF2fofEXmxqR3DsMFHbTGr8hQ22LttNdCmgnYfUFHYdVFb1ytYq7Wa6aWW",
  "key37": "3GqxWHJTAjixDCcRSgHLcYJzRywEMKo2LGhMXZvAWLMMq3pj8JbjLRoEX5QSUwiYNP1cxmFoscCD6oKyo3Jvhp6q",
  "key38": "2XyEW3nWCuakVZtocsPSWv9uXkK25Q1bZD1D2qwpVbSoXZimfNZJz9VKMpWjKK44iNt984S6xwaQMCFqypDRQ6xX",
  "key39": "5df9hXT6mNVGEiPmGYG7VWa4iTj7DDmPJFZbQkGxSyCguCWzVvhmVYwADH5hru4fByfrcKRUgrSkLDd7F9SD2Rke",
  "key40": "3huF68AfLkoBZh3uBi2RDSRXBWGh29EkYDUZsK32o9i7gE2bWww5NnsTouLDHfC18Ghn2ooVeRxk8DFhXzf7dzu1",
  "key41": "2WzTWwMrGtkj9iotTQCLcydovYAP97rQua5Fvykrx1vm37Y5kSiDj6xTdFLYs57rQmfiBfh4oXcfX69SR8aPZT5T",
  "key42": "3mmo2BSwCK9CSVbQ22CDsskQc4wtSvwNmNMfSfNnqB117YXhqkc5KFaHstr2Bzg9bhDe6B7bS6x8SuLjwq4rv71E",
  "key43": "tMLmMJAyqYvn3YaUCHmbk6zm5CiRmr8WHW6v35gfVH3KcgZzwkdb1361xVkdi6GqURZKgnMJwBSkwyvAurB1yoB",
  "key44": "4onv8FokiHGPEL1ggpct8UYxLciktspvqWWmTfpwEjX5w1ZWQMawBEyBePxoCc9pNuhGKxYtAhCEPjHZAN2xhabp",
  "key45": "4FymcmMG8P4hPNyehWMJgMs5Sabe6KCUYRmPUSKJMxJ6QYQYAeRuSUsqZDRS6JpCCQyL654342N6X6CnS42vfoVi",
  "key46": "2ktLveD7inGQs7GRpbvd7LHyBygqH1sVkKzigkgpY3pjvUMYQb5VLWQrxmwemMjG2gr26BnjWSP3XAg6DcggQg3d",
  "key47": "43n9bPmGqxhhjisDsjtnyc97LSd4WPnRoUCFTcjCJz1KxiH9KM9SB5erK9zcBiSuyxWzd4XaWFEU7gKBy19b7H6p",
  "key48": "545n6VvwdpGWw293u8FNJk23UvsjjsiSnGSCKTcYDiAK72rt29MRTZsqkAjPmFDq4NU1THjT1AGe9XBXFpX3qXkJ",
  "key49": "4C1CvaL3adgSjByeb5J9xGkBje4rYzwWVEsnuryaYHMrPx1FK3aY13tLnGfZMTtaKf9iyvcrsHdddMQdDv3fCUeU"
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
