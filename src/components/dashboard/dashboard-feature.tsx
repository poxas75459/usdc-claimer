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
    "5ZMzmdTtnnVDcyvtwMwMheWZkXJruPkQ73sTWN6vZqs4LAYKe5pg3mgCUTLwgYzjkXZ4YXEWiz8oDrA5JCiFcFEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3guXyQXKvy7QayobgPh79T3WSV2rnJ5JKEJWbscgFyQVibfwTomQbT79pMv57Mgi9EG3eRQ2Mt2jHsYDfiSJPmmH",
  "key1": "3pWx9VVUfBqLDUKruVcqeHrQCVcMTnpRU6iZF89JX3eHSvvCWc9yXdSXteraV5pUggkaioHAmWmkuZ9ehry11Urs",
  "key2": "2CHhk8Ae4NuQSYugUEzF7ejUk4TeB4t2CxFbzJHZxKiubi88QTfRrSHfDub6LWi2ePvRtajHx2biUDagkgmCMfGv",
  "key3": "5H57gYEtfLYficpmHrhSwg4ZU4r6CwSwbjf4RXtRtSTyMdaJD6ubPCvM8s3d4RbVzXbLshGpmB7HLZS8jSg65mkv",
  "key4": "28h7LaLVVSBATnDH5kw9efiV8PfQ8eHcNGrQZndCMZwKy7K7z24zirNcyFzHXzcpBa9GPHjnKd3jj6b6x8pareEE",
  "key5": "2De7vD1egR4YGM8XArc4WWyWGVzByr51yLqLvbKUptmrM47r53rjpx8hkSVUJCpogMstSpybgDGNiPgDvzUqTtuh",
  "key6": "eN1wbmrza7T39fj9iSPeeyriq8XVjUK4txR1zwDLmdaDzHDL98aNAdtt5KE6uizAdAVGbf7MMXuQAfU6sGUTeme",
  "key7": "5DNvyVyLqkT1ybAhDPdLqw7qQvARhhmHSbdnrSNdBZCi3AZVeB81wqqfBSEU9xxZCPrSAYkbQiU4brRaL1sjhQSC",
  "key8": "5EdMi7qYedoCd3R6kGGFxp2RDvtpVhQRgF3nCn6UVKCjvKwhppK9KodZweQrJ4W2QHJN4LtYf4wVTLgL5r1t6vdU",
  "key9": "3wvVtzm7wQxf9vvCzdmAWo6HFk9pZQr2XwMQfK8orE1yBTHjCwj3fw1EqoG3uwe4MWxQvXeSLLZaxso3FB4JQiYB",
  "key10": "5N9GM4LE9E1oJ8SrafPJ3iFv9FKsAZvPDbaaSRbLNCa9RiC5Yn7vEDVH7MvCJHSea1Xg4NiuXFZjfzcwV2naaZGC",
  "key11": "KXg1T7ZWUVT1YRUxDLpMXYWLE7swBpwF4ykScmaS6TzVwWFAEsGx68G3jzWypHxYTebKkJJvj9uFVhaQpNpAJ3J",
  "key12": "2rqyUQW3HGKbAx3JNPotb4zgMRYg7bceLYL4Jb2H9HHHepo36hFk7f4S64WY4fjZcydnp4YMAQqMPMLyYuhyzoTv",
  "key13": "WU45qhLYMjMCqvA4v74cUxwZeUd6RihyAGve2UmVcu1M3Lr8bRDwmL6gmsew5f48J9M8zwjU1zTwcgZWSZFrL1v",
  "key14": "3fN8xvv1b2z1vBwkLrALVN7dgcWE4BnfWA9VLYAeR6gpw7NV2sLaE1C8coQcqTUubnbAKRZz2ecP31D85Mar2nVr",
  "key15": "LemthcdA9M99NPRN3q3N8n5YFk9V7GsGd8u3uc2R59cbLdYV7J1Qd8tBSGyrnf4DJKVtEjTHdUqmRoeTYbjdW4E",
  "key16": "1KPLygfYf7WCTH6za2u4JLdQjNC1ytyexKSxhuFxG4vNNBDriuxUDr7qMWcecr3LErkqAfHkZHDmd2x7WfYwnTw",
  "key17": "4SX7iT2EYB846dyy4S9BAqxTGtTMnauAiaUM2RZmUJPWHaXdVMRXFCiDfrj1fUT7fdRoYjoD9aeYELAVabLyWfuU",
  "key18": "3rmGTw77Dk6WnEJY6njEXyV1cHpjXSHBHyARs5nbwG11HBZGapmcXTXkMSSX3o6UB5HBbEhYHRRDXGrXSX4QuejG",
  "key19": "3PG1HxNvyhaBwJJZVRMXDnDaBxgFR3f1hYQtVzsFYoJuM771yFrEiz6i4m7bxXJ3FCLAzK7UrPUevkGHe4CeHzgJ",
  "key20": "5ZD2Cs4GnWCUYaJbu5SXRBoEtYFZvmrMAK2Z6JHKsbnvwJSBzETZ1Q8BZrYTvgCtMB4XH3gKKJvvQbBBbWjQ5BRE",
  "key21": "2FyEgHxRZ5PEYteibrS2BKkktAT3Asf3nyfmfqc5T9fzuEpN2zMS5USJJtRr753PPPmy2pwUmJpMSp1tfWPGdh4E",
  "key22": "5k8waxVVQZfLUpxA3RrD85DQFHkMddZWefkrfj16Nu8ptdBWMsbk8kBra4hE4cphwerBPsAEY6geEcPJyqBDRW86",
  "key23": "4xC61277fGhiNftRGrsS2vVwaCuesTjtenSFoThPw7ZSnadENXMLS9dQtZTw6sw8PzgrtVf6bjtUrrS3XZrzZjTk",
  "key24": "4xGtY57kXyTaC7mTxFWWHTVbuwo2FhQs4vU5dDtN6ceyeExETBXGZEniuxkx8djzx6fGhCZC31c8gphhiZpQTyzc",
  "key25": "2vQKczp57NXWeNi66yybkxURK97gZWNAW2siGGJoPQcQAY1QfHWHFMNC385Nf1Y52SGtJLKW7bu8XE3R2V4d6VBU",
  "key26": "3pt5dHAna54fLyMM58tg3uxjTFVsgNFQSXPUURZDJrfjNCMrok9bPi9hZP9d2wmsRw53BMcT7L5UYzuSDjaeF9w6",
  "key27": "5ub5848LiAiaFDACCUJpcbFatC2aTXpKKLdpmWmL9XLm3QbTBUvv3ByX6a4XSSF1LD7WzNiSAyW9d7MeCNbMYfLX",
  "key28": "pYBoXs8fQELkriCURhVSUN2cs33h81Ri4qB43gHLnXJ22rap1dVvhnYN9R5HAwF4CebVbKVd1N2NqF2M4A1W3XR",
  "key29": "2ikgrtB97kZiTD4FjEEk8qCjoio7BeN6sKYwQZy8zA1F7AwRUpHWWRa8Kccn1gWtvo12VkuciHte1Kndzoj2EzN7",
  "key30": "wbKVTFLjuzi75fqbxY5V6z6HbJNS2ERBBVWEArHvupaUoxF1DVBPy8DjcLTcJUgHDFd961trqFhV5FThpiDahmg",
  "key31": "4H1FcRU5zaEfDZnASpFyf97g5SAYfcGiH5aTJrE1ogVwVTteTYYETk8c6TjZpvBniPSJMrquQzKqAs3bpdaKZ5YB",
  "key32": "3n6GvVDspiKG8mW3qiD1MrxnTJTQCsDYJzA8we22mdkrCvnkKLK14Nxz84pK4EQCmT3mhWfuqA5JrAZrZfV4NChT",
  "key33": "2UpUmcy9x8cEKJD4QKoyouXxerJVW9FTkQ2cbAEGMxdAqsgqo7bb37dnAoB6oj4AFqeiAgzXkZKRKWx5V6D6itMX",
  "key34": "6stXHnpQmq8dVjck36bZdVkS9iWaycSBrzd4uQwoLrYKqgH9RwY1HFW7odM9fvSPCs3S5UG7ayzWNtLJ23vRXPu",
  "key35": "5kxW6mUqtZvAns7WvBKo3yVTQLBTnkxcVWBequgL32xH9CyQkskX5aqfuJPQb49uEb6hhUjfZMJndkU11c9GtKjo",
  "key36": "2BJzVYf6rA3wuVwK1pQFDC3aFWWJdMKMWqdsdbPGY75KXn3C1v9uWnoS3CgVE1KJUuVxxq1caUaz6aGjU9xyoW6q",
  "key37": "5BivKZEBuSrbw5htRVrp32VEU6zs16huzGsqR7eXg3kpcqHGLDzdo1uCEWZhJqtE4jPYNUMNh6mEB29qgkboFWzy",
  "key38": "293GyEh7VbVp4CHZWZpkXRvZHiqEVVTxHBa7kDzco1rG1qHMZABKdePWeJQyesGgtytoAzEceModc1UrvM4Gctot",
  "key39": "5JQfQwqyssRqZnyoW1xKA13mm3tPNTYdef2u2QXia2kactuf3xhh6XQRkq3Gz7eUtTF4r4HLeUbEvMDAA145WoAP",
  "key40": "5XThXDNaCQrdNXcKoa5MXhSyxuh5RkBWeVL2qpJQfCZSh8epE4BHnpkFVejQFLuZGWy1LHoKVZ5829WhEsxwZtfp",
  "key41": "2tAn1FyKYN78uqsHo4sSyAci5aW5tZaveySnKk4L3QTuCnCUgnWV1BjcVfCPahoMtV47hUjr7NcTTATixTtUgQAK",
  "key42": "pZJ3gpehHBdtWsbaykuj73oSP4gupyoDp4sFxpwmU7CuEXv4WpVSJ5Ebedafmi4Hu3hyrd1XxL1dsHCzpMbGsSQ",
  "key43": "65S5fgBQBqZTSXpG7Wp4gAuuyDhK4h7Psq3E2fXm6CdpvtgmfGysRnSjUXFDH2wQ97yVwb35qyP9EgeuXda7UKaz",
  "key44": "31VkwBch2PUuNv6xFHMA9LXYBqHWCb6nXRpoyLCZfy6drPVwcGfq2nLfPbQM1V7w7cguvhakGBeWA9exMCGx6MfC",
  "key45": "5FWTKNRU1BvpzmtpvGBvKzmeWboY6fk5APVmfBrgkscwLa6vcVH7y5cCGaKxQfanHXsU5YkQoytBV6tnmqzuRhP6",
  "key46": "4HCyG2bbRrdxnuUGnvq8DL86LGw2E1wXqyGwbm6STb9wrugGydpEdyXfv4ffgUWMWp8Ny5J9xhmAecLwBMuS5PVg",
  "key47": "ewniXfJwFfcnoTWp9WvsWxtL2QrBhieoqGohLq3xv97sGnVQA7c4X9hrGJiZc8MMotrEHttxS7gUwsQFjmrBLko"
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
