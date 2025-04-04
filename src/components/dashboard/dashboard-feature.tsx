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
    "spgDD8F2seuKx1GFhogsD9EshmgnD2KNDfb7VMETSx14Fsu8vyxvX7Sr8CLecoRRqnkJUmnXctdNUt4A2zi7qB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oPe7ZFdsv9HaD4t2bvmTX22VkkGmmXaqHYo1AAS6WTzVkVaSGjAHRPzQ9nakPNDuwRKm1S6MYYVLjQzyRHvZrDy",
  "key1": "5guHq9p6eAJnwzzxMauY9SvdFDLqdEgqu8aSC6w9NbAF3SmAMKr2eKWy6yWcxY2V8dK7PH4iK1dW3cYQuWqWRs7g",
  "key2": "59GeebFpeKLZkqaRsZad1VrysqLrbNFBsiCgvEN8tWsU36NECwjYRbef29m5NYrUvdgAARuYmnNkrP3vGpRmg4NC",
  "key3": "XvXfPNgtECZnrhgX3QPqkDHJtWxuHy8DaW99A7iMnsKA5s76hHoWewCGtZFkXmsz7bxwRDTAAmPRVGyLbauTAuu",
  "key4": "3UFkBYTGTuFwHGUkBsXt6ss1mg8uvL5S9FMZiC61xffsumh9Msy2bPJabH5wwyfXpG2vwF5nQb2eEzg8Ujz6AuuV",
  "key5": "2HBQV9dNGe4zdQir2KkgvPmRAXg477E9CAFs6zwzT1bp3pXp9YcVknAX7ScEkh5PeqSmsJeECtxeNg1EkzM1tTbT",
  "key6": "2WmWVZ113THkiwSTJL15ajLHYCvumtPawFReFa8WFUoR59pa7FdN27HADf3gVLB2n37n44p4vet329Ymq3VuDcej",
  "key7": "3E7fL2oNSQKzfJK7p2JK9fDZr1UjJnfnkLSSeYX3DpsvLiZp7aWQHMKukyorHj8BP7U4KrcnXykXVYa9pp9qMxPR",
  "key8": "5K4BKf6LpEHtRRzCnqiby9A3dtGGzMJnnsnaNo5xgsNvTQcDC6y1yynHY6AK6oMQ8amMWbDdQ67unrE8e9gWtnHs",
  "key9": "d27mfgERyovEPGQSizJAqmJax96gVjhLhL18fMR4W3HBf5qLR8gUs79gX918dxuKX1YCk3BXQNVrubunwqqZPvG",
  "key10": "5cUtEJFq7Z5mhkqLjLXX9JmjiUrGkqHfe4GYkqAwLTvkDy8wu6LX3ntb3hrK1yEqkdi8wtM24wQiSY4ohDGspRTn",
  "key11": "3BM4BAAygugQeqtVKnqVH5WNJjfenCLJPoaqG2YL9F4VE1Z5Fj3Zxy8Gg5dxnBr775swuAyw82ks1LgLRP2F9WH3",
  "key12": "26CS4kK868Xhd2vNn9sP4sbKgtS9nQDwDh2D7qFfpHY4XPNg6YfXERTDt2omCpfiNgcYRiiG3jHCM5VXsrTjjejp",
  "key13": "rJeHFcgB1s842SJPQxfAZuxensrG8XJyMmqLaTyjNDmYhgG9cx1gbFZcvidJxQAPK4KPSR47woVQFvryMKvWE8k",
  "key14": "RC5A7i8mWZQWQQHyCXVtwBTb7xvHW6M4gNGjbMPEv3tZwyadPR3c6JHhB51VFbejKPSaEo8ni9ShAYMEtFstq24",
  "key15": "5vUHZTjsz44RVUaxHHdxo7gvpK2di1ftqGfN7D5cgarR575bDAhhsU1NED1NykaveSQFKQcV5aum1UvfwAPaz3d5",
  "key16": "2ey1PGVUGyitQy8c2kqUXy22ibe56MvUbRz5RHCRXKMm6NhGFyzgqTok8E96q6JnDx7wKRsG6Maf7SVvhozcPfYb",
  "key17": "aH77Sf7WTuXJ8ou1gimVFSWHU265VZmtjLtWwQjvibr4Jgi9rZNuststPT4YYDtSs7CBafzmGQUtKEtxBnt4Sba",
  "key18": "61oksPHHb857udVk7PqSiwywc75zHBfV12WruW54u9hyFgU9FJv9xQ2hbR3gJd711d1BtBCeSwGeCvfzsYziCJvV",
  "key19": "Pc9BUrZC7NcZAQoPJLNvYN4v2P33dDqbJc1CVQ9nBh9D4vmjT4YW37qLu4txYXxVikW1eCcFmRsTm9eCXMYfnAu",
  "key20": "35HCQBBcqJkMe2VxAQAx2v16FPidiJqcsnQBVtokD1fjcx6iejnHGuDQdNHYMQVT7KqqEf2Bk6dieYCyNZkayEUG",
  "key21": "4gk3LuRJj8B4ynT3Kf8RA5myzxnaBd3QF2KazEtpWFhGzSNt9hoULt3Xi6X4hyrU8DFfnES3cexSbzdoHVcr42hz",
  "key22": "5untTHW1sTGBQuwuRoDjuSX9T9mJAEr6NX7Zi4NxA66C2Vz52xHrFKNKeoDdvfDqpetEctBPZYyi9cYbnYeDVTQo",
  "key23": "3JaSuDSgksHEuQyAy6zVpAxxZ8mPyByCTjMtJmcFuh34JdrULLZG4za1uBeeG9aT2n8ST2ECHWcVayVgrur1fdsy",
  "key24": "fRjpQ6UfcAkzmDeVcfuqiypELTQL6wxdE7CWGotk6AvWbQpuCXUjTN9Y29vvuwQX974Z9KesyaxZKK2E9LvGj1h",
  "key25": "45ogo8uZLsLJh8k8oV8SbgY4UPgsoGFoyDexf8oeg3MdLSdff6nmttdZqfarSyczYA92TqK9C6dQdYLc6K9SVYmL",
  "key26": "48ogaX1YMHjVSDgNoYPyGUauSQzwfMZVyRfqCaJZngwhPPxgKfhXoFNGm4bQn7MENZmv3S8Scqfu6Coz3GGxM3Kd",
  "key27": "5FnjFquGfjBHM6Ak9TkSMYGp3o2ma19dpyeaWPFBSjtXCpPPexYFVg7AD6FDdM3rav2aNxwpVAg7SPbd9SN1SWw8",
  "key28": "3PT6GiX6GK5tbQuqGvboRGAZb7S8GNLBtf3rQSSajdhETWcMZnDVBeVVuoEFNHut55GxdRm6jaehb6RYwSZWce32",
  "key29": "rgscVrsFqFnuYXMk4mrCw5vnCQL3yu8X1MfPtE7XLexhApm54frj8Tr7A45JSK26AePdpsXbsU8oeBe6iy6mb1E",
  "key30": "5GXUmTy1PM89EvRBxuqA8BMqq9iAdjfdVPJsbhPYTnARWE2mye7yj2z72tn5voditRk87zZNmSMZ2ZiLCjyCv6Mx",
  "key31": "3yAHcgdqP6oF5dKGxuKLxA8yTh3y9h6zsuLon9qaYTuZgPP6nMF9BpV4ngrd8CV7E721q2CaA3Q4x5MDC9amx55i",
  "key32": "2FUhT6F3ENQRvFEox3nmPFdLfzsS115x1zfy8yJJ6A1oRSjxSoH9gha2iLb6zc9qX4PUgq8npigHNxhnpNhv5Vim",
  "key33": "3sE4gYg6ber3CoAsrP5sLwGjzPudkuBPtFQ33hgdkCXS5GoTPN5qvcPjipA5sLb8bRYrAbdW3oV3UFe1BvmMCjyw",
  "key34": "Gz3g7h2sks2myGe4igH2F6s3tnETBrDpbixQ3GZpi5ANcQQwMnsKoMQGNBvDgvYpHiBXszTMfCqmphtVq9ZsSen",
  "key35": "Uw2TGSHMvwk3N4UPXVJFdsJRmaFYfPDfRhZwjdH1zmvrPDyCe3y3UMo2rzDsKeL8Q6yeHPeoKwbpRoQFFUx5q8L",
  "key36": "4dkkSmsNBo9K7Epx81CuwRZpHTKQFcd183WosTbD2o6PfNXNg5oTurpRYEzsFfh9ssgHdnTwiD1ApivpPfHRkH7Z",
  "key37": "DZnpwWuuLjHLLsXLFBrtJYFNgLDnvDfbvvr7mxHoDkpmvRneqEDtNch9FnFVNf3skhQsWWf1HXrPPrvJqhb7SSn",
  "key38": "2q1hPGQm87e9rRrK7oFEZLc2gCcTNSw3JDaZvPF9qQ2C92ScaQAyNMzaZ9wKbaBQG5tNhQN3ShECaMfR5ApuikbA",
  "key39": "31w3utoQVfjCpD9jcRhsR9vGUEKWa7a4qxCrA6KuSrefq9JbuSnLegsHCfweTWcUYhUywrs5Uv7zTXABteCKc2N4",
  "key40": "3EZH3bit52GAN5tiN6EEW3Tiw4gPgE812Q8uxZuhM6dKJ2W5kAgU3uLoYY38nA9FH5dCtf6fqvMDaJ91TGe5tFH2",
  "key41": "2QY3MuyjTM5VQgWMeHDxAHPkfsGJwmU5mqkxmM4KqZxw2Riav19Qgze1P5LSUrodQvx8bSmnAia56qnzhmnHfp28",
  "key42": "ht9eyALroCaHLe5aV85tvwpwiH7AaS4BtbMbHTu1Wnyd5ssUU8xw9hWQDDXLrQ3LAur5AZfWJ8Gs4Gu1HCH2Xgf"
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
