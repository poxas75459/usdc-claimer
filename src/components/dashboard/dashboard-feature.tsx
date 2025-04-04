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
    "3UzKKp2fC4njqXowceq7AHeBQvcJmNo2Y4oVWgQccmkuTN8fBMz7vaG7mJ4kz5phF5FAv1U9G2CVxDeet6h8QyNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJU3qS5Vh4kvrii4Kv9oVfus6NnN8qHHioEwANyTSyG7VprF7RrSvLKXy5XM8mAT5CPZfPRer2418DnsvCZSR4b",
  "key1": "429xrYdgRehTiwvgRAxjHaKA72nAxVtXZneVjingbuLGwN1GEM8dJ4Epe9q8261VFXa4V3h4UvzHw7SJ51zEdzKy",
  "key2": "39pZ2rGFAvUpH5axf7uJWg8GLHJ75mZg5nGSsqHUNUmasYo5fx66KC8Cb3p3UcGCxHGcAu3cSa5qz9xarQ6jxMR3",
  "key3": "2CDehMTd518PEu1vPGdjtf7msjwU9irpE81cha6MZonc2YuCKL6CityhUm7xBQyTgyL78HyovH4r1KaT12zrHJGE",
  "key4": "34x5nzVsTzcVsiPMGd2FwZVZvDs7pgSFdfLoyx2ba5zhktavJ1i7XtEtnV32SaARif7Kr4Qijk47pN8eYM6FenSG",
  "key5": "4cCq7VKE3nyC4iimhE9NZoErUGtMimJbSbpMcxPbpdMDNeWJdUJtZFafPpKeQnEktWaA7mmg1m1TiagaZ3NrJwZx",
  "key6": "2Un9V2nzC4w9S1VsDDnE15RzsUxr2Qf4XzK1uW4mSFyguKsow4ypfgJEjUDoDvdnWrDHoJGyCsFf1yyyXL7Zbwcb",
  "key7": "3AeHEcdBv5ie5aCiz3iCRQG1Vn98MN9Eb89aSPDRnZHdv5VeYo5cyreRGe2RCpxa4udnsEXpiZktTCb2qUAyeqgt",
  "key8": "gW5mDpTRkK1hdij7NkufFGMsc76TCA3xZupLFUnh2gM4j1E6S2Xhu2gdmks7uRzRbN3L4G25hkwQn3f726KUn18",
  "key9": "32AFfwsfPdXHSL1ipoxBXRyEPLozRfz85CcCN4jZrk2Px8m9qFGEmSJP3Kar7Y43g9ti84uQEPWTTsiAiT7z4zW4",
  "key10": "4jGi5p3Fr1EVVjj1iuqfNY6uuxEsRkVH999bmxWxPPtbQ8atn69wPeToC4t7KY5je2hD1wY7Mccq3PCkXXszDSWb",
  "key11": "3poNTzVR6eQEA72a2XJh8NTwoMoM1t2tyjdxLt4k8CcjFSC8fkGJKWW5LaMCgj77fHFnFnb5Lhxtzyg8v3XdS6Jj",
  "key12": "4hATR7xeqa5wWD3Ky4QqY8BdcHh2pP4MMx5G7xXfBuRdvz1EuMgAnG1wsff1nsao7Lxcsn5DE2ugKtA4ESu4bind",
  "key13": "2H44c8cR9cNbuoyTNqEGBHE6kAW4sTBeyhvSdkTBAUms9YZ7NbLuT5MS7xhkAcZbd7AquGpCDk7fmqxS5wubFquu",
  "key14": "49Lqtnx4jh58y4ffhzipuMQcJtbT6oX4KUciREBvrL16SAzvaRqmksWhHfJExHZLXqTxcaRCs2YMxb7S4TFmAinW",
  "key15": "WVQZGPJ2AhPhumLHmX67skYuR9bWjHLM2woX3VPQXqVrG5V6VtZkQUEv39x7dCjRzKPHqE3h4L9B3MteqJqphYN",
  "key16": "5Kauvn27JcSPWncXt6jxsaetiQFcvifeFdeX7u2PZHUh6nsg5TawNHqBa48AWDjvW1avRB9T28yoYxLxxqWJTsAw",
  "key17": "Ttrnc2Qo1cwLrUuFJsaqMRHdQuePGRQLwyppjFxKvBLQw292zZ9xHK3DaoSibtty5AmTJw6nDvHVbPE4kYu5pEn",
  "key18": "2a5uRzdpoR2zGGNXvGotbnzBkbc5jxk51KSBEY1ecvXQ6aSyiVV4Gr4TNbWgHepRijkDEVQkWPeSLnUGLckKvFaH",
  "key19": "m5uP4VJJukGgavWzDusdifFDLVcMVmJEoGoNkDoMeRsS4SPAqKydKVDLjBpu1U28jiS2aAYpG5QAEBLZo8rSr29",
  "key20": "3LhjHm946Pyi4quuiDuy6RDatSkvFwbnp6aW4bTivxPZrur8RDan18NYCsAeZYGDkWV7Y3m7ZqFLnBXtHrVKi8WB",
  "key21": "25HRtpyMHPUikMXvq1cVKJAPgw3u4bgBXphFRv4ZXsxhgUb3wQJ1xjPaFJHwg4E4cx2JVv9TpZhHa2XgFuYebJfs",
  "key22": "37WeJNsRypnXRnk6ZDMG3N9bsuB7Xbj3BwgxTjX5FC9fDS4biFdJ6nrbAaeZH6QbGAN1ka432XmVzSWbr4yAH9HG",
  "key23": "3gfAHmz2PoshseY51FyY1jh9TnognhUXPwfnZk5GKbzUGvvafpW9UAKqhUN21yS2wTP3ftfDzN2QoCMan7LruyhF",
  "key24": "3p4JKt2zDBPf28zwGcoeLekhChBbugJ248F2JN8GHgJjiSL7X7cA5XmZeXJAY4b4z3RaVCxdxHhPf5v2kuCGcsT8",
  "key25": "qqRaGqcYCqHH2xdgYdwFmttYSerEZtReFayvjLtPErpeAwdksHgRVLn8RWtd8bN3AWadnUtipkmiAQbXrxYra1o",
  "key26": "2KwzfttWCXyFBjkP6n2ZAhN32nqwihv6AKhaZs6HLQNoUfoT7vvde2yZz5Ts9ELEjzmjeR2hAwYvUupNcn2omLxr",
  "key27": "59wRuiDZ2xQvumtHVkoZ4eg7qDdjkxTpZVhDNdzsVGeJkXBRe3rZLuMP2AGwJNDjxW3QvWvqzBd4Wf9n9h5PmNAE",
  "key28": "7RbAwLDD1t46pc8zTyqqhFxNPWSMQox15RqsfQCfqkEXEpBr8bmXSBcZR2TzVppTeQhFeDRN9TYeMwnUVSCxv3i",
  "key29": "2cFkZaYLS2zs7M3NMbn3zrr8jZHoNn51MkMzXaiF9B3Eqpr8cpReA2ZiCQ9QbFA8WmRm5PqZZwJmN3Y4QSTCSBjA",
  "key30": "YvDZKxc5sy8WXpLaXKrXYPPHww87r1gQNcstHc6dtfmNyUaWxxnrknMYpq6ua7ZLpCdAh54u9sJQrxqV1bngepA",
  "key31": "3wkZbbAie1KgkjGEKb5gVtUT1LKnp1TT4oHh4UrWNbYA729UQzwEhLE6BiXWXx55KEoaXZEC9TUUAugLHnJuAcLP",
  "key32": "3XRRnzbnt5oahSrq4v3TaBwF2D1wrNiuzCshWGiFAaVo5Gq1jwycva8N8KcpgjYeNA1p7kVYpB21bgeAojWYMxFV",
  "key33": "5HBNPncBjEGh6HsXpLbyQVEuqtNwgXP4bQw36RV3nfT1ieTtPBaA3fdZ2tdecNSUhFvmW4uvJ8CJoV8MDpPM9JsY",
  "key34": "4CE3vjqAsMKdH3jwPHuhqckZPivk3ziMnfeWyG4k82VpaTdXvmrQLWAeewBPmPDEG7vux2Bpde98rkUfUtD2Ek2J",
  "key35": "77rj2zphniQRJH3MGfJ8rHat1iLSd3J6sE3Q9dbNhXktpjEWgLGbva5KakGySZoamXuENXqoFHpqL5jupFCPxcU",
  "key36": "3eA3itYjnhRFcm9sXZ38KT2XYuybnygqwBw8KQpxXUSWHeKLBUn85P3p5X3HB3TcEbQc3pqJGGYCoASUsasUBzCU",
  "key37": "2wE7chU72cGVKb4mHk122iYzpmxgnQnJwDcsk4MJWfKGmT6tyCmdJHLQ44PeTTSmSHi2sq55aGNbTT2WvQiBYo7G",
  "key38": "2t1FvFtTTdQb3y2e1yBNfzaPeG4Ecb3Nv6o5tL6x4JoJzV3FZKbwyNSJC371k91VbR7eHoji3t1NMHUxJPdkccDe",
  "key39": "HFQDVxB5ANumEA2jcZAahASsECL24Vy1QbS6FTFC1TGVjUVu19GSihaKPskLMAsEGMkEHGropAucR1gTCcpEzXb",
  "key40": "41y7qbAajzeDDkjJMASYUu6o4FEhnwUjqWyukH4HVUfPAJtZLobpMuMPX9fqBGGU965mBNyVPyw5qFDpjpmsQfF5",
  "key41": "4GVdWnuiUjwTuz5tbTpX3Vt4FPzy9yUdByn631b8jYxbWszqXe546Xa4FBttL7KnScKYBGZ3jPXohN3TU87hUcBv",
  "key42": "2vcReyPBZZiftiGxRAmzCW3TbuFUk6FL5TttAVRNtqq4nEaD6ggQH4CYF8kiEaXN1DQNtPKoa8edy6tDBoySzkCq",
  "key43": "4RMNs2jQsNkzwzz8SWJuxk8dbPNpczY4cDVqGAQBn8wesWzGxHMyJ16oYA2mHxsQkefaQkXBT5fR4Z4VuSAYzcy4"
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
