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
    "3LFn5hMYDuSChT5kbeBc1aJze6WfXhMg3pgfzSuGgrkwqrLGqUy8dZKhm7p7ybFAQo7Nzf6ArydpU2Y57g4P4ovf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfodMjmAcPWdLH3RWPU2wuytQkC1CJSqj3jAV7ppjUj3F1JBuJEX97GgqsL2hWMzgbgXhSaQCEDvbzwQCoLqghZ",
  "key1": "vPV3BrGPqCUV2kxqRmYpfBpxzyuA3a47CkNsXL2u6fFPcGNonGhZuAadVJijqmoS1wcSpGkqiJC3YQoDsMuAewa",
  "key2": "M3o6jmkdRfwmnsz2mSUryQLHsg9fFpBFBic88ZoHmjUDCBPaAT8bpFXxGEsWpEgT2o1erMZRYajGrGjoY7Va7gr",
  "key3": "5whEXx9cPm2TpgepK4cgCaMxtqLs53feecBBpxBu6k4tSPMxA9sS5LXSTCG6Es9XJbrCFyp3BA1oWxVmi51AG9dC",
  "key4": "4vR5BSUtm3WkjouniRAWaXkmH1vGDCMRziGGSXVov6ZQ3Y8MHMafje5eTU2heQBWV6DwByCoaNckeFbbGJGJayQx",
  "key5": "5msrpcKihwhmE2hu37rnRVvBSSHVBx7NoP26K8XpyQ5Br7NambzeiGB3T5k4c4b2D5GoxckidU2SRzYP5pZHVFbv",
  "key6": "63aoiXB2sAYEN1vLeB6wWLGmBM2Us9UZftfkA9GEJztwRBETfQQMWSZGxuiAprHxaKSk2we7JtE1VsUyKZeeb7Yp",
  "key7": "2nmvcm4rs7YeDpHpe2o9z6Z7X1witu7GTif1NYHBGaJVD7xvk1Hw7ko6PA1ep3ifWKNAyvoaDfbxpwXgotmG96ys",
  "key8": "452L9KJyXkGHHhDhsXF9NzZXadWKsy1KceKB9nN246H8vXTzddguTo8TzVR4q9gkU7LBCSLFARawrvFLe1ow9cKo",
  "key9": "4ASVsLrZtHMYeBkoTzr57QAzZES1JpxfGjyABuiQche2vqaek2DgswhBbG8WX5CaQbC97nB2FF1BbCxUMERbJ98P",
  "key10": "4Sqk9GGEJoqVJEZJBHuY4vn1TeD3UsDJvMaeo31rMfavpAMezkDekvX1DQhaL2cnR8Fsfek9ugKVhBERwRi8PMZj",
  "key11": "5xW4HRiNNNtmAjwHZQpg1fuSSuGhZGdBhR9sSh91dbVbs8DLUGuRiSEpESS16qH5jxgRoQfgWUV1Xghea4YSD1EK",
  "key12": "2chTqXDucc1SmJu9MqFzf5q67wTTdePCo343ngdGBu4AC3jGt2npfc9kd38ebiJT21YL5w7v46ciDfngAfyFnjYT",
  "key13": "4M5MQn4rGtYompGSZESwTHB6ZysCuJviBnx3uAWMmDz3djS69nPoAxoX9tAeSrzR1BCPU74eNnbVmjQwFDMpqiJQ",
  "key14": "5iYuh1gsp3QxtwgNCX8CWoMJ7umeshGSn51LvDKJibWCNgVbbFvYDJUb72Jxk6r3hDsnbfp8MkaZSZ4X4aXc9YKk",
  "key15": "3F1R4aPH3H6EeaHpZcR3MPDKuzy9G89VoGo5Kzo67uHZWY7Ttg6mRmvD2cj1PpvZM7h5Ek1KSUPjKGUXjWVoN4Z6",
  "key16": "29oRBmVzp8hPKUdjCrgj8Acc2YfJDQsh14AoWTVdL5Xm7zdU76FL245gokEvdJa217zpRYt7qzZ85Aw3NWf7Z1RQ",
  "key17": "3PEw17vawkcUPpSWcYZXxUxmYFMGrm5EgYoW67VhP5D59VT4QrrR82J21jpyQrEy61HQcynH1HqJ2h5gZ2GoAs9S",
  "key18": "3hTRrLugSk3Y2LG9pPFcJN988p8JU75GxEACp1dhXd8qQ3NLCgc6QrfCsF9d3dLX3rcKtixXDgCMKeZus9zjdz7L",
  "key19": "qJ77uhts2v2QWAChkWVwLM3Rvr3VCLKDakAjLiF56fvSEHnZCEiSgRV5xbgHcWUhiSX4pNatCXPc84iSshKV2pm",
  "key20": "5BDExCvxEKdZDiweypxhsdmDYXZmZnHbs9NeJ6JDLw2rs7KYaoeZjv6EuNX1F25Pg41wHcK4pwGQaEoHyb3d5wWd",
  "key21": "euVwXcXDjjdR9Tc3DRPxTJh9MwDYESfzWnNdYzaZWQ3Dybk43rrb47DW4XB4WfgQAYzD9WjLoywHEcRXsfkMu8W",
  "key22": "3K2dLE7NnN58bPktcHpxoZcsPK5on13SWFsFjqghZ1Z8AvGvCuAHGMYhtPVHEZYzpRLjAiuRfDL9vHVG8mU28R7E",
  "key23": "51hJfo2stXsWaRhcpff3dTZWwg64fyDdnJnrNnq9nY2X85QZDmveGtn32ra6A1HtqVSYZWDjVNKj4F2fbaLWzAGg",
  "key24": "31aHGGWVA1KbHMA26nGUXWgkq1MsVnToqPoyRFbQrLR1sbzQdS57e8Hzkk4TAp9nQMjkqNAWqBZN7yfHYPDeKGpr",
  "key25": "3WxSio86MqpWvSfMWxJG769PrLUKMg6yyeGvGejCdPnBf36LB15CmS1jigQ1DSq2YvehjmmQnBurZHeX7eMEpwX9",
  "key26": "3RJ66HfRStQt6nvWoPmQGUza55si5gaVFq5vmFhRrvQgsbuMiDv3ZLztiEvg1Mc8V1N45CCzT7kxmd25WU1ge7g5",
  "key27": "EWxhQKmhpAMtmunkTMbjm1rZSyWDLm7cUPdfts9ioHyzDcUaWYTotRqS8aMBZq91NUcimTm7Ap5Ejy1Hw4M8Fi7",
  "key28": "3GQ7BSEmSxrozh8uEnJnKY3Lh41AsftQwu4c5ECw1FhfUAmCxFmdWAcSMsdNbNw24oB9PeidAwamrpcKfn17JQx8",
  "key29": "4feRcYkbDPzdYyHysR3rj4guotiPRqrskXGLnoRZGbv3M9Qg5k1oGYQhN5fxx1A7miiMC39LeXpMhLGcHqAS1GZv",
  "key30": "5N9DYdtM1UCYc8dycDe9BXGx4r1pmXq5hVyVrXUBELj8Sdk1VaxxTaZDJXqUg3UiRdcr2DZri1Ly1fef4iyPbdeW",
  "key31": "2s3B17trszpFUKKmq3XeZqe6sp3GqqMRGi6VEiXeBfV6QXsnTrqomHGahPG5kWJohmiJaKaFwYxVLj3iyFqEK8qQ",
  "key32": "YCqPwtTbtA3ecNMSAefsDvV4k5yCjLh3sLsLHmdsECfBkqnc2dspUMnAPx8Aj3sGFw4xBJNAcCtqiBbN8hpj8i7"
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
