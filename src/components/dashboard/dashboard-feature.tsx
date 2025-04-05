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
    "4jN75qLmzkRGDNQE4kg9ivuhvFLEnjgpQZ6AwctoiXMmwyJw9AR3Tni1qoyyoEuEMen44q3jw3PYKeWtuZrzgHT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i49Cbj6ALGKmBaLsQJV2MiD9oJBZvLpWoTzKUX8pH4LfCoaGb5PPtLDMJ6XBUEn7dMD8EWuSpN2tyrjFSX6Nfnd",
  "key1": "5T2F6iWfmMNnT8XH9e6DkgNd96EDtBVCnoWrCFbQGyAFYCxsHMHL7Xm7ztpwiefUoZu1d31kwEUjHnvxvfYSyerw",
  "key2": "2cEPeErw9noiqCiH9QVUjfnijcvp2z4mbNpHuhUZQGQgaUeqve3fHv7d6ahzN3Ki9Kk6hLogZCykpMAsKBFooci7",
  "key3": "2JfiMzRYUYixirmbg2QjM5pLm39RoH9S7xxtHdPdtSBEE68M3RK1LEekmF4UJrhVGN4XnEEPLUSjfN7bQicRTs4D",
  "key4": "5XHy5kwp9vY4McYKkH4AHxGhv9nKUQ1Uk97e9ERjBmUtHNys3Ru3vnkkFynGZih8hZosTMLGEWGoFsdGmdxHBAsS",
  "key5": "26qymhJZYWCjYYHnDZYfDf5BCJPetvwvMmz5vmXw32iHdY4Qtja7inFQUz5w9Ww1K2mbk1dV78wwenjRuYhxBQRz",
  "key6": "3THgJRYfWJGJeZPbxJPdwocwBR1hox5U6fYwMDmFDp9iHZvcqQGzWvGaGBWLj4VNqMDAjX9J8bpZdhuA8Q5o9zhe",
  "key7": "ZS6NemGDXwUuJJM9c5SdhmmfWgbLCBi8YH6UMdqZPaR1nfUXGGDnF2ugHtuXVMt8TQEzqGcCt1LD4UteeNbwuY5",
  "key8": "jUHWkthMfKtzcmEo6UsSFBk49BwRgswZgtsPAJnQtYBeeaaseztLAFS1hqdGGge1jdXgvobPZVsQnKbp8iCEgEa",
  "key9": "5BauVAEpAeY9itCwPkQCijQhLTJFfxTq2a5PPy42QKHThQhdVT1S16167fRv539MQna18oFztkobpb7ej39nMmkd",
  "key10": "2de92MeZhehuRX5DVFLUNUVQwfsUwPSAfysv7sT7JwZyfw88cyXKZchyafCufh4fc3oMnrBj2AS7xZuhYvT17Zz6",
  "key11": "5fumsNRZ7oCjBa1E6ZvpR9bqvaYwYcGZibxbmZxEqDwyGb4fmoVGjL22UCaXWy1bKGWMjmQecwSS6af3WNxhQP9T",
  "key12": "3fRtZZU4FfnMfJu8TUQ26Je9J1wQFNtTj6ASisHE47qN4UCAv72vtVdHAknsvV4PbaodcnRkHPLjUzKC2oUNPhvd",
  "key13": "5UhTKsb7c6wXNWx5PBSp4Z2p3N92q4ykSAYxHTagaPJWgWdZQdUA9RD2b6WjV5d2RExX2HcikK5P2ZN6CGpREbdk",
  "key14": "W623Eb3DT9JcKjEHLK5kYnPPRVdsba1D671AXDmvVvprTMhVvnmjVVfh1ktBYyj8bEKxWpCgF3GZnbhcWDgRvZE",
  "key15": "5m4w68cZCBNXL9Ttcw5ysdUHrij2p6Tz3EWUtWGVwZF3jNNetexW8Dt96E9oYxMnXxUUsZDfhHVenQ5w5akcHxi2",
  "key16": "59HuqYjjLQVmagA4g2Zc6Wjy69mv5yToKRa6oerL1wPW3huRg7LbgL2sfxutp5mAt2gxLumyjYhHpaJe48FHJLsg",
  "key17": "61NUqggsui8Y2EMj5o9MSPFLQzGeyxfahB4jmgd6CxD4KyAx2zjph1GyVG6VTBXiNCroAF4fKqKM8hMtXJDTMNm2",
  "key18": "4vRgj2QMnrmGR1QPpCUgD1pXfQ8zR6QnmsSwU6S7W5AiM3wfbeqpibVTJurBG3Lc2es2GyGzf3hVLjt1sWp7esGi",
  "key19": "32nn7a6aRvh8Luq1V3C3ozzsSk3gR5q4Qft3nayxa427rqjEWaHEsUApGhgAdrAqSgMJbs1ddCMwgsoM9dqhABqT",
  "key20": "2N3M7EBUKZJ5iv6xSfwpfJWYwpeC927yfabsErUARufHjBR9GAau6711CD3LzVBJXU5AWHcHsY58o2Lx1asyDxS2",
  "key21": "hcY3B2rzszamZUiocxSnse1X41WcQS7qYF5Z7RiGL4kMw7Enpq5FjcSBfYeHKYGmiusngVukxuQeqk9RRvtU9GU",
  "key22": "qBvFepJseYyDcFjUB6sqNPPeCE1b66TfNA7U36qeZTn2KZP41nFYg5PUXrVj8vcLudUWkChDuLLj6SyBvC36VAa",
  "key23": "CmAmpZH5TayPCeaLgN87p6anHoj7SrfASNVkTw5jD8rrPX9WC9ZbSQFJaEAAncH9R1ncoDPfPYuKpfzehtGLqfg",
  "key24": "3CaZaGxugQADw4j3GQNv5CXUyTVEACi2a1A5qzd2dJqPEfnSmCdKe6nZab8ySpzbbH1qXrT1NKeqhXUmTgALnw5V",
  "key25": "26uDyu8ARz6k6bHSs7Pjsp63Mnjce6HGht9Y4DqnRcqYQfxm23mJ3eWKCyXaoALorjzcC56iN14u7NGfRViyTF5G",
  "key26": "2LTHZ3Gc9DPgpBP15rUPZu9B31eWcGABRTs3S3EbvG23rfeyK1WEWUKhu7TyWPPAw1jQjB9BGDeTAZkteQKMSNfp",
  "key27": "4DYasz8fzoWBJEj5Ks9JfSGvx7rjvNvQ4hALduioQBVnLKy4R88ki3Uv1oWHmmZ8UTmQEHy982x79RgfvJKV2Lz8",
  "key28": "5Q29pVidRKUHpCLuenzbEVNdbLdM8LsRfGioEXNaURXf1RFmuTRRdXrPmVCh2cDrj4j572d4feffo1QobckNSHDu",
  "key29": "5oH197XhgcCqZ5d979fWAYuh4RAuYYrS83URgKNqG6Co3XFJZiuwvpXhtGuoVVNDqFQxNsEXoJ1cWLY9kj43VfY2",
  "key30": "32Cthjcs58GaQyBVRD2Bt1Ua2VdQVkPYGASmUdH1YBbYwTm9r6EvSsG1GmZL5mci7BGf3ii6R1cuJYeEiemeCjoF",
  "key31": "3N55EDTCewG51soGWkqeY9dd1ARMocTp2BVxaGtFT5HnqGEeYMiDoNYEEeXrLCeGkbmcYpKtuwwj7Tz9N63723hj",
  "key32": "4UzvXuj4sajuiaE9AkhknA25AEd63bhAZCTP8Hq9EvT3zUKA5zs3bcjxZAzkqVgZttA6afcHQaLCAJxr3Ja9qjzm",
  "key33": "5gK5HtroDY2MjX23PRd9L5gDD4971rNgLdknkW4NDcahUsnyygZg4WpCzbGWdU5scg6a91WoRT49pu9SfaGJYUQP",
  "key34": "4mhnCtj3Rk3iNF7YsS7JmZtvDpEX9CkjSeSLcnkHp5hesNghHH8HwW4ScJg3ZwDTSLjFWzxYukhRnJBgWzkZWi17",
  "key35": "5eav4WGHGwtBMvgE8RpRgavEMD8AH61VaKCsVmicyeArV18zhNWuTtC8qpJoU9yee5ckAZ2Ph82joYerSfP3aGyj",
  "key36": "iSmy2tHmwjWSufCfXZKPRobHZuu1mX6J5y7PW2jLDBeP2QM7cpf3QiFTKDsEWZiuEeYRFC2BTVDzLE8vd6CemCw",
  "key37": "4XnXjQjHhBRBXwFK26CChPVJWZMmaukWAgJRtKbTxeapW2e9982W5QrVpKHPJeBv3J2XFvyNUep7fRk6ZYfi1FTb",
  "key38": "3TyL1N9LqLVcpNyoHCJz2HiybdP7zwsaNLbcesipFWwvofm68WbgMad6aQ4ynsSBW6MqQxCwM9KAPdvDGUjKkXJg",
  "key39": "3vTQaxP58868QoLBe7RmXQUzZx2M22gnMuSQJPpJDXbLSJtq7PMnwt5iXT1GfntVpBM13Dt7Z2Fdo8vdK8szahQw",
  "key40": "5eR1ToTHB7XVfAfXvFKEuWwZV7tCLqCvna6CsZLVHYt51RgDojmq2wYkewkWtHeLFfJydKduyRvnBx4AoQH3y6uP",
  "key41": "4XXQgprUEtFMap7of8vefcJhN93LLaHqEh1FeQn5qgKx6PKAWiM4wbbvp8357PhfBoLKN1yEYsJhV98i2r4r5x7g",
  "key42": "2FcZ7a6XMSEB4WsZhV7TdKpXNN6unvtr3cpYRX4yBVhcyjA8XJjeVSZUQ9biFWzpexpNKt1q2b3sm1dZ4ogwJGwE",
  "key43": "5d6RNgkNfjyr4HXKjRcrM1cYwMDdVJfNT4rLmEwCS3SxwXGjMTHyDQk9nWKw4mbNWq4FjXzC5kJnZTj8oYgeL6YT",
  "key44": "56bWG53svQkD4UYqN51CvZgSvHASsyXeUPsvYSkBQ5G7e7f4iNdXJ9eCu98BBfdHPd24jE5AhPtZxA9Syonwcajs",
  "key45": "48aWjMLkPhfzCSfLTkuX6KbQG5AvZkNuJNZqUK1zs2av9qQ43wSkQp7qeTpxDoWog4e14ZfXRDinHL89Q4th6LNn",
  "key46": "rNz4tz7468Fwoz4XnfAyiEpdMu3TR7EzQdhSzESJWFBNGDxCDfoY2JE8amYFK1nqzdgHkVRxgtttXtiE9QHGQxN"
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
