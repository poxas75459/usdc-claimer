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
    "2WH71zUsNvGXFSPqKTXJitg3iZk5XUtv6sXJxe5gYCPd7g1XYcAuEWx1EecjySUirrsxBgyb3pRezyEQpGDeCeC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Gh1ErTK3mu3oGFnCQ1jb3PWzav95u7Jcnd22rPUh7fBv888xF2ZnKxhb1F7resMKPK8wDFMU7sSXEHF9o6xTef",
  "key1": "2EznYamnG5r8218N2hAAMcs46i8VAr4Wrnn45RDq6cM8zmCoDwz1CvTJ9zxGdDjAg5TDSwxxYYNfHtb4uLavtDuV",
  "key2": "9ifrbLHhqU2XmxZh9acgJJs7qy8anjdhwRJwMRDu3mtfA3SJGECTzoZnkuFt5NRyHPtKU4ugJGVdBUsBykgXGPa",
  "key3": "4NXVZ3F1H2sPzutAQLr2PGHD9f7ZVTqUwEou3upVwuyx4ihj8yGV6E22nhAS5FLPocZDKX7y5wjeT3bTenKXqAfN",
  "key4": "5FDhs2B9tn5tQaEnPjrVqLpGZXpiNUpktdsBjTrtRK2XeaLoqU8dfHrgS2FF65MNJ6qSd2TRPTQpfCoFfKoaowEp",
  "key5": "py6NXgtvinkANuuUzzHr8eixw55MeiggUKUiL41xxuTdAhES6JKUdr3p7knVCYYCyo5T8i9FU368PZZUo5hMg2n",
  "key6": "o3x3oX2BnXqzw5xG4vBLAKGnZKSGRjWHes2Ekdkqrz3nXWMWptqQwNMiPSpzQP5ihAwfn9fTXi4BoyRqzybcfts",
  "key7": "4SBQutUUvoRxdsSNFYLUf3Pcwic4nJy5zrRwa3Ukr7U8Wp6sJ3kWw1oygt9YJLNBwNkC25yJGaNogPTfR4hmEGHL",
  "key8": "5kytNHSvBcpMet1oCZESd84ou1JFRfw5nPdy8k9TGL5RTtPhfGX2vNhuAULngZgQ9NqLLbeUbUktc1ArZUVQxtVh",
  "key9": "2oZ4pL3q7XdNvUebYXaCNHNmxQyConP6YwKMkY6yFCEwDkSwrqWhBnMdgmRVBFMWoLFeebsrmWQRDwUt23qQVviK",
  "key10": "2V58TqDWmN7Y3DpKj5TWzVCNjsySMhxonrG1MbYnuosTmPrEL5YfB9cyKnYbL8mG5JPuv7ZTVpzxPaz9tAmUyfX3",
  "key11": "5HXhAK6YzK59ZwrpCC7kWSjkAX9S7Ux6tcd6KiqzXdmDwh9JfBot2cfmgisfvSpWkuY5omh8XniLTwCYdPwV39SC",
  "key12": "3TGoWhuNvniFkUSWVTvvPaTdMnVwc13zLjcABKriitxdn8hBXxbH1Sx27fNTnypyKJnBde3bUdNVYnWK2Hcag1Sp",
  "key13": "3BjSGaf7hhtyXTgWQRVpJsDUcNkxGcPN6KVPJkEnRngbAXVXcc8d9cDemZSUe17nTfZon9SmDc34Ksov7ZNfpnKm",
  "key14": "2GBBgKxTDeM2TxxGqCYW7GXU5jHv4QG54uhFdZUHmP1s7iqY74axwwQmZsKEQoUDPsVcAesipCGMDc3pHUWs64wx",
  "key15": "44BAgA6E2jiJxzLgN5gwaYvr8RvRoJMGFordgbJrSiiHpLKRuGtg51nFrKcaeMSDgsGBHdxKppqPfrLNNJ56PVFS",
  "key16": "4xVAao3ie2xLeG6QUsNqQb3FJ8yH6k3QQU3XcNuQKHeVunwBKQcCpBtQzrhuf2nFX2x9Pw56uFNX6TcPbQqwzirM",
  "key17": "2Zgyehygqb3cvETxzyRoAERHdfy3yVn23EiB2JuH5tV9xuQAwv5e5F67HuXoM9FvYtM1yct7HyWErQ1ppsiDak9o",
  "key18": "29Scydy6CkbahyHDgRftowD3eXxBJ63N8Qk3ZcL5W6wzj9oJXUJQxDp3hx7RYYq2hQPhqavJ97HYmeXnuYfqrkdp",
  "key19": "3WHSVTCdyqBCTPuRucTEUy9NfNuQqtNpUJ5XQf6zPeePscVnY6dnVHwUn9pc3JxPaeN8CTQWSm7Gr1UhWZyXTib7",
  "key20": "67YESBW21XN29PwHvc5uwpDCnDBTsasbGqMu2yHfNDdXqztT24SYqx62FrxFoeXDmEAfBDFNcXfRAwH67jasMDwU",
  "key21": "2ppb5GakJkrzgyXkGcJWQ8Fp9xQgEA6AiVM8WzfNEmu6N2rsXXfnADSEWN15NW5DSbRFZWafxXYt22SQsUwpKAFc",
  "key22": "4Uw9AvabLu7EoaBZDUHGh4Ws3k3VdBN6qEdA9wCUDpKxxEbejsLzJ7pbJoFUBLLAvZgugbHKJ9vKFAnJNbiN6xgZ",
  "key23": "4pHunesUHasxyw7u7FoAM8itdMxGUvHqTqXofED2r5cutCS6uyg3KFzrWnoVS3XrhAgqR999rEnaJWnDetifcE8v",
  "key24": "2m4MhvRovVmZ1MsxgnSghCkqCXe3UTzkQXLWhBUKFugz3Zqu4LYLkpMA98uoJcHRoitrLfoeSvf7GAHNmujbFrgM",
  "key25": "NJdHnBSSjThjLrCvd1QLfUhdRLxdpQQprqkms2AbvxRY18LMb1Py8VTH6nf5FznBm3hCMgnqGKLo24bbgRK6D6F",
  "key26": "2TG9ih6xhHRWNk4i3bktjjmnAJ6KnyU6oqM84bV5fm8HB7cu8RroVVoGRn5TPV5BbUJTCABvFgo5JxGDArremvFQ",
  "key27": "5pc4jZJvS55byof4dv2gm1Eys55rjpW897RQEdH9vrcc5PyqfzNrqfFX9jTK1HXyXJpfULCeBpFcSmhNh5574oCA",
  "key28": "5A8N3Wk8d4MkWx6q2yr3KyWtdhx1rpHfoPjCBdwS99gboZEgMig63FFiiDenuq4z6jsTYDUt66yHA5TbVC4hwvqU",
  "key29": "2C911uvi1SmcowZnx9xpzQbhFgmwR2A8ACgTumQjsRYT9mv9a2SDFXTYvjF4xGn1KdLeuXQhW92Yvr8hbKyqMxkk",
  "key30": "358tKL1uTnzTytX734nTLr912hjeZ1NR9J3Yd6tabfQ1cSHM3q1hEMS5vtugJzQSr62ydVwyFqdvYS3ZVRYb6Frs",
  "key31": "4N6HYPEUbNReVEAFXm4sbQPTnCRF33zrsXNUudDiwTEa4aNvfu1PSqnvSqiizoVw6hzcvgFgdE3Uq8xP9PYvymuf"
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
