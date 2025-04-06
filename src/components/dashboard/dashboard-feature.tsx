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
    "4YZxsb4APbkyASiAiC59qey51RqEGPcwmQCdmH7CRDRQ2LUnF3j3vN3BYt6g8CNQSvcGcX34tqMLCQ5M4o1xWmYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSwbeqxYQfdNRX2ryTnkdsQbxvF7ZQG1gRzJj1kH1rbHHbSNsdciLMdH713bRtqegXp912amKGjauL3sEm8bre9",
  "key1": "2Xu2mJo2zzcW2sh3opGYDsq4ZBUTYwoejktMBM13KnTRV7sm12scnMCsqtnp7WioznA2no26Co7N1MbZsu9gZnpS",
  "key2": "4uH5spSoiQx2K4YZfr7GzbYotppwtw5xKhkHHfdbAnDUoDmdiR3FWUqTw6dTWWUyStBjFWAH2QefzG1ro4VSEJm9",
  "key3": "3hXy7fAQvsJSmTm9mG7fk8eaTMcYGTGNyonVGStEsumW2pZ5WKNDc1Tv9hjaJgjyQu68pqmXR5oZiiu9g1FgNFax",
  "key4": "27hL7dTmyAQMaWmrVJpby9ekG5NKQN2H2AwpK9sMDxRohGqubSrWHfB4AQyteQgm87V9q4DHyuDgjAuipT128s3q",
  "key5": "5px1QgWLQE3jhuN3gGcZVk78ubvKUWdRnEQc9sGirbHbzuP3QY81qq3Btg6XUH55hDaXGY4xeTdTC1VJ4TCmMJuT",
  "key6": "52vDt7ManM7DGgsT5zHqF5eN2maKY2AhpFH4peFxzWg7vikLbbJFf3SZW1D5WnKuL5w3SFSfKTSdUvaDZEGHqHhH",
  "key7": "5VKAmkFgcs9dh3imh4trek8dqWsLcmLgkaSPM2q4QAcoUEhU351RKiRwdnYkMnVqF33aE4qU76SNCX5XcxgYTPYh",
  "key8": "4Ze25QoXXgc2LQC3MK9S218MuCgVYpdxE4cJzFZ39ssZCwa1nXKLWxNReJRL4ofS6483KFST8iSfB9V279GtMpoz",
  "key9": "41dxcLbKPSA7seFabkHVGVJCeW9u4FGPREph9U46BAAnEhRy4YmcKBNAYGzBvWwCptXAjMf7ejTqWHBXnNbk9y5N",
  "key10": "2FgX8T6HPkQCsmEQMua2iS54TDj2gigKfFQktc17gpRzCcvnymhRHaoGWsLUHHCrJ8fe6JidhRpZCrWeYApA9Txt",
  "key11": "4FRhbESYDZ8TXBuDZTeNgLRC384vqW65sEPDkNf9mqCf9aR911Hzm3c4mVqmdqzP51PvfBHceiNfwuvFYAsARghW",
  "key12": "3nwRKMmYJsZMxhVCuKJYJFxCdsxb19dT5B3WaiQcpuAx7mC659ftsnaWiQQDNyuDDCLFdm1i9jASx5Adt9BXDCR2",
  "key13": "5ngQr5GjH5MjYvnXEkqEM4CvHoMa3csqAapCt8XGcEBKvgSqkmrqx4dLzZ8ob64XE2nT4Vd4J8wHPrzCzGK3M6b1",
  "key14": "4EVWNRNAinyA59QJYK4zrKbx2BqUstSLP9bdQLKm2AL6MBrrbFfk6T4sFNMW265Ciuv8Fd5NFArgXTsS61g6CQnG",
  "key15": "5EwKmPbYvTmyZw8db8fmcQNoZyyz8jHEAAPEYfcvVSNQqbYBFTux25TfDCzXpZURj4oju7TmLPE47Y1fkydoF56n",
  "key16": "3uxdsbtDwn7uy8DAT9jXtyyJqaMUPKTmbXGeEcFrMDZE7kz5amBJzLzsz6tXB4DSsv9gpNSx31hmvrDKsVhACqxN",
  "key17": "4CiRSMBwspTLqoRh3fdWfpvQw7ob1Q1RdG489NFgVjHnSu8Qz4xVZpHKE5D5yFfLFv1UaYsmfVxRscPhB9PpT6Cd",
  "key18": "wkaNdNYTUodJj72dAzMEKw8HZunwGmqLgYW5DkEY3Pds4nY3HY5ZrZxhH7ELoLwXBy2ztUKCkmThMyFnk1Uhhy4",
  "key19": "4bwZYzojcPf6o3UJXq1q5atif1i9WKxqjThRzF1pt18pv4Jg3hcbsLqxU19XF5nYRsphVDjhCYE3e98AUKUdriVE",
  "key20": "5ZWs7uSL4PhSm7XNjHccVzRRkzntjixhd18vREZk351ErA9pyqrzJrgANoih33n3o2Svt438RFp6BnRMLDRutPaG",
  "key21": "4AwV2Ghhv35bVF9fHi3hSi4nThDSEnXkthR5JfMJPMQJBssWZGcSmbuDvHdES9EfU6cTNvpGXrPt3gtYj9GB2zVQ",
  "key22": "24R4UP9Lf11UWC8rUhFtbjkbtXUnZ1Nh7hCKVhpNcNDhzVSvbY2viueQ6oddBsMU413p6iPACJBotk9VSconZwEo",
  "key23": "4wtQ4YwBoZFz5yvSHZgbFaE38cvWroeqRHcTVvGY8nZLqiuSRj3gnspKRi6Qdxf86L41FNZAdmU5TPsSsk7JT7By",
  "key24": "3nCNCbsij9Ufgud2vnKHiPV5CFZkDigGSMJquo1YAGrpCQrafjyAsnt3YWp5PTXY54buPijmy24DfbdMqSDFbvuu",
  "key25": "WXE6avevxd5CcB9G5cozi4p24FWRAAjMbJRbhY42jztdh61PSCaFqJnNbVGEhRPZYqgzyii2S5t9MMRmE221ogG",
  "key26": "H4Ltp5NSGzf8m9aM74w6vVhNusesKSwKvpeQVVSXGPdj23iVPZ1Z2jeRPboAcwAdh7fHHnDjQTy2Uj8As4vAwTP",
  "key27": "3t3aFjs9kWM738bbGtNRHrVrLcjeL9cRqS9CYsXryNjmhZhHMCsVpNBeN9cAQ4ybN7YMugPEpU8QPzuJ3YZCKVrp",
  "key28": "VoPsBcQyWJ7o4xCbLQ7DRjkW1N2sfcdigoit9o6LPU6RdTkPZ1tLRBYK43Wo7sDtAzZMSBtehoa7gFGFCgyS7sY",
  "key29": "4E5Su4jfpypqARe6Heqd5EtbPAyrKhXcLkivGJ1FWd6pseBCp7tF1J8N3LaDb1zNNEQU9UxYUDEVEF3UJ45q4caN",
  "key30": "41HQSMvppLzoZjYBpVzc5YJ7h3u5jTepAn6dV8fokTTdz1fe7USeTHWrYnyALg5yfE71HYHgJw3NcqUQXtGhjUN9",
  "key31": "4WKSqEXeXpnLiWAjqZVZzFP3H5SMwxJbqto5yTQxXsQpuHv3eWFk321yDTfhKDY4EMhyyMLZ6J4hqUB39mB6sXLk",
  "key32": "6iSGinpv7dFDsyZJm3pQ7qk96UmduokRgS3yJ3ixnxzrYhC16aRuoj3DtYqeDSGbRuRWTBAxD8DdhRa2oce7udY",
  "key33": "4to2QUiLPnXwLqcss9YBLQzsMep3RjhDq5mhvrbXV2nwczV3o295aSANQ8j6Kv4sHXTPFHWc4onCH4HW6uhkNk2T",
  "key34": "4yci9zKVzmGykhDwwKjfqLafg2e1e91cooyHpV8XVtTMEKefNXsytZHkhwyrr4YCJdVFQjSswvzmpPAHTkdfAM86",
  "key35": "4y7rfMRbJrWUQbRmZYz3NwvLkCZooMmukQzuEhrUpBp7DJd5QoxGxhGyFLj6A7peSyJ35d1r76666fRmYdt1B5Zt",
  "key36": "4QVjotuyhQ3mjy5NFZX5sBwXVGHwvCeCH5SvVjFFXDaJGeUvq6WG7rXQDWwey8Sh5kDRrZafxZMgFa6H86xSLrAk"
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
