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
    "Ns4T8xbHtsvcZB13VfzUSajdhrPB4RrkGf3zrEAvhomRMeZ35JQJPKio9XD2qMqCyvyBTpX2LAXoUXcBu1V8DA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRq9qYrNPhWZoSAsTwXjuUsTvJUH4TqoBUz4LL7zweCLU66P7KgAaSzAyaoUxpUKn2LiAM1zeAN5Gp3xnS9k6ZX",
  "key1": "3z6y1c3Fhx3JnJGYM48rP2vwgb2EzvzuU39MzVNZpdQRaxHqM1JsHtUXtDSNPMBjHhM9n8jCrmgHpPic2ES6B4GJ",
  "key2": "6E1bxK16bisqupCBFrdHGndMGEH54u2NuCHyaCnFFgNhus524VbQcKekNxSR9hEfxNVMPd87DrNi4iHwLbzy6LR",
  "key3": "exWMAXwor4rozBBEentfZ5RkGM38wnBumexwF3T4XDwMnGREZ8ecCup7rjRha9rfYpzpxqM1yVzPHAfyHqs9L72",
  "key4": "uRN3yUJ515RQWkBMvTu2udXZ94xSgX91UhtYLoTvHERGdhUJo8AvkHUT5odjwZbpP2PYBma8YiMoRMA32QKDMZX",
  "key5": "614aHbANMNhfKyhn8UpqMQ4kQCemV39u2ModC8B41nyxHwcKwxusUeiuyi5mjrcebzs9PPT8QGrS8vBaZ376CEFW",
  "key6": "5aqPp36DvP56c32weRqW3wZq3BYZA9FwWi2mhgwhn7taoK9RgM6NnEFBXBctaU339jhNeer2jMqv76omJk4VMubD",
  "key7": "FYeFFdeHSbaLZSpWea2EMWPNGnoCf15Y6nh21xJVBWocSECVbnDMyrEcAHbZeBNL3FkPqDNdDMv6ekfTePmJJJB",
  "key8": "3WGhQrTwc2qvezD5YnYY7TynVqp7nwx3bKP8wjXuzuamERVaM5CN1DiLEgheExjxykZvfZkrZjXFddVRSxFCTD1n",
  "key9": "5Q33z1o5mecHgHo63JA4xREzKanHRBQFKqb72cAC4FeKPE6Y2ADPiLBwpYfHEYq8swqyysoorP1jaxvocHJn11kP",
  "key10": "495xRpH9gJVM8XbNNnk4KGXUyxysQJrjMyGS66QTz7tNG7VD4amjT92YfMJoDpiMZp6rVGnHjpK6Pu3TJr6duQWP",
  "key11": "589GQe5G1jL6HDWML4jyA5ResBMCCr2LX3NZbDCBHFLfFob82Z2GTMTGxfHoXyfpjDAv3YF1peqJLVSf2yiwEE5T",
  "key12": "HrMoMwieUWwWRuMaZWnYYb9MSQny12zGdTacKBcnPCpda5yF6pFRP4LY2AMngyUCcZoL1zJWEa2732PA2oSLJMR",
  "key13": "36K45XXMxEFekToqFLm7oWAZNzB5A2zXvsxt9qouRW4J2bJmj9bd3Bpqko9K2qP8JJbGs16QRuBzPL5ExeT3jW3L",
  "key14": "49tkFgFghxRFyPW7zr5sx8jAw8J13rnLkySsJxrc8XUnAnSBSZcmGLNC5bc69SFcyXxFiBLaFgYhbuzq7sKKX49T",
  "key15": "4iDDHFrDfEeDkDDNbTGNCLiF2GnY5faVrenThZf8MWieNFX9wXL4QVZrGiR7ki1DFu2nDiWUxXfLWo59ppvrNxXf",
  "key16": "4oCv438UU4t5aVWeUX3bgP7n1C9fqfWJbWik21FxJJKyCqq9rQLgvbiUTxYsc7vDN1ATSp7NUfmUwsBMLVRR6ZCk",
  "key17": "eqimwC4Qut9NLfdZBZkJq9NZqS3eCr5XetNtTtenkDHTm6hZgKZ38frnDG5nkz9DfZvZoq2hKDqZJMuvJPXQkfT",
  "key18": "2B9tQfGUKpenfdUAbgLQVzjsajRzoMek691TtBQVgrXTnaTVDrzn2NfggsXJ7fqSdsu7Emc9Uax3ExYKxM1SQMWc",
  "key19": "5b8m1fkc2UHPvUTmgsVNNJP8Ag1LLszfSBmxHQFEBEh1D55xGdoQsqZRceGux4q9eSWdvmJig2Ksm6PHgnw97UGP",
  "key20": "4i4zKtnrk1GMAqyhtPxEjTkGcDR2vwQPnE9acCwQ6Xq4ZsiS2wmZLeyd8YGvHJ7WaTdCUmu5ATDg8Si3zgbsaxji",
  "key21": "3yDBk4nXZkAVS51fBxZnsLbWMyZMb3YZZbtsFEFBu7L2Xy67UBZuNHEVCaaJKksBXv8XjbsNCCq1KYBHTzsbuvrc",
  "key22": "4w15V4SXLcjaCkrxF79yvTZygBEsTMfLFYns1tpKyktoad5E83761GCNS1gW4K27bhKvmqQdczp9752M9CZ72CKX",
  "key23": "2MAmf8S7LJZRGBFd1yfndHHiZs6GMyKDxfVGBwiSk7usv656Y2kD8Quz2ZQRtkdSoVW16LmjMeWjtJHoipXGioLV",
  "key24": "4UbLCPfVxggTh7G1uXrePovGabuixArgozGkmRez6ReQniKyXyWtfamQ6MYaGEmmKvXYeHHXR7qLhA75Fgk3Fduk",
  "key25": "66PHGj5f54BM9RHADCGemawZ6SWYCphGE9fvnFRGyJBzcFNao5NjJdVYDH5gGbwUmb1gdT9FQroBNwquSgTdYBb1",
  "key26": "4eCmSYyds91FqGNK2SpshsB8WxbhLx3hKVffuAHnuEC1FxeEX3ssArttcMVnRtqTipV7ZSEyzUHGER84Sj1Rkz8k",
  "key27": "2VD41UKJ3WJkbCkerzkW9FQC3mwUrEynMqL4Qhmp153oQZxE5ATH1LdYF58hsRbNG637i9tkheFXFs7V5Qq1qxkq",
  "key28": "WFVccsLn8UDrnWxATWvKt7QFLPZ8XKHDBp8kTc2bNtCH7iQGK9CyRfMz79us4xdfJiGBuwenhG6fFHiZoLLbE8x",
  "key29": "4vvCAN85KTe7Ldu9XFr6PTZi3jyhqGdde3Ua59uH4FbP3Xdwvzd7pWJxV9YHaTJU7T6gJ6MmEEwR4qirkH5NG5Zj",
  "key30": "5QDGzawu58QCkABwk2skg4NWhBzrvPvzfgXdRypXNgASJyQoQPXef1rr26eBLDQ423eowGdZnvmLrCRHCpdMhBpR",
  "key31": "2B5NNCfhYDQZmNCLqbVhQsZAzFhAvzk69ZwsJWXYbiAYXQEkP7ckJ6gjtJFVocd2FV1mEjaw9WVv1qTVeEtyvvFw",
  "key32": "3NceKdt4hY8TTh1UUsmHHoqYzqkuk7Q5K8YFAfpz8hVUvdsqtb8Y5bwiCKdM4dVaerRJVbgtjCLW6A3kDsB7K217",
  "key33": "KcWzmXoaGZB9cw8SPLyP1YBeVdchbYcPGmRss21rY4ifCruFJfSPCZ4uqmvtzMHnUh5gStvN3YBCMESxVAPfaa2"
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
