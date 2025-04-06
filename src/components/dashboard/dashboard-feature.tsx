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
    "2LAY7QJs3GS4Xe98Kr5VATJ8MLvDZoHzP816TTugmn3Win9ESgfbxBpJ8qigLB8MhfK2j2kpqtBnPqiLT71CJnMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gatn7wbNc8FzypnG2hzTMC7TTKSxY55b5sGcxwMwbyrU2MCcRy7RxxF9seM6DwxRGeAzQL2XNkL6qC4cKirpSNB",
  "key1": "3KSYRKNfSHQmVZkJA9EpmLf3FGJ2tTBtZQtJjAPtxMxmmGHqPAC9PH4az2h3JoQqDgSFZTpy9q37EwPCVr7hgswZ",
  "key2": "5tn8KTvAotkBGLcGtXhXiz2CBwMfaaCn1NHsCtHaqBE6wA6ABLtCNuDxiuX1kCt4RuYS1UwMV32gdwhnSLhsH5So",
  "key3": "5uUXCoex8L3441zMRXcAgCVfed2VbDqGNWoBWJ4Hdjtrf2zHpfw3RyuiPCw16rNYesBkac9kRFeqdpwod5NFPdEd",
  "key4": "591s9GVT7pkNjbDRqUeW2F9xbcabKnuW1DaqkanqhfuZ2t5WxeeeNHssk4EqYBbJcZSZoM3eVnYjvgemjM2sL6js",
  "key5": "2DcohzuzxDXnAKnG3MahsSqe6E2WDhBna5HXFwKzALz3yLhz3htLEg4LUobZGMKNz5FKEfUUtbwyyWGxFUmdYjVH",
  "key6": "NieRafRgtsFt6TAY1ceidPHafK24HbXUsuEv6p3iGm8pHXGwQ7tzcy1u37p5yCRQJou4wwiVFCkXAnWppNn4spc",
  "key7": "5h9eLsSvhD5bVpq5v5KAgH2HJNrW6FwXUhf6XLhHxTLqQptgPVgzpsr7ezPDxLEWcUk4dmjmqNeFnW5MQqzR1wnV",
  "key8": "5m8kZCnVjrMc5SNHo77LWnxDAzkCwLHt97AKswiRP3kTZYGNa4PFpcf9TEzjQJP2zeFxbkg2TAAhWzBJAf32Eb3L",
  "key9": "4115GcCcsXT7xqE3jdFJBXsS7JtrPN1f7H1HizhCVZtpWoy3EqTSqysdJjKmoemYZssExN4hhNWR1uNE7kXob5NJ",
  "key10": "5kJrw2UnoYxAKbpjL9NGTgXMYr6CjMQANRBN3t3KB3eJWR6CGGDyqs8fJ6vaxMTkZWj1XT2U9LwyL5XPvmRmipjQ",
  "key11": "4ZPeHmWyL6pBBmgA6cdBEV3xvZwFJKqaseouLkEMDpUqGK5UifnCPRWJUJMaC5rE3jUuGuR1Ji8tfEs8yqiJwdqh",
  "key12": "5XGAQ8gNLy6XwHMdcyka2RzEF9guTFb5pkpSYnTNAgp2YQyWwRZsbY527ahBe8qDZddPYhSpuPASH8wV3Jo8PvwW",
  "key13": "658Fidi5NYu6Gs2m3FZRsS1nNr9iLt7QzmiYPxwsbxZRTuRcy25DJiWbQ2wSFwJDnRLd42gmBHm4irVXYaiEYsgZ",
  "key14": "3c42Cki7g8ct3M2b6f9e2KpxFZjUrvxGJXCuVSByCKKmQgQWikCRAZ981VgJ5rcPrsZY6pgmUN3pMECJXV2ypDdo",
  "key15": "3ZeXwPK21j5JmSg7Tbn1rKQK7MdtDsWG6Qb3szeL8tS4qjtYortpQj5S2npuSyf3df2Ty5seE96gD1TWLhVBKv3a",
  "key16": "3QXD3DfeqgFJy7rUSTMsy6mXZZo3BMxue7v2VMEwyHZRdkboFoKCUFHJmaSwkwQZpjYH6s2YEoFJ9ciFAG3SNewU",
  "key17": "4QihNkRyzBU6swRhS1mqaHMwYnPTWnuthsqcEirQfHcVansL3HeBGKCpAmwHStpeRaT81NfvepFHvS62Tg7BAFvK",
  "key18": "PY9irzkrnC5LrGW2C5vJ7RtwYY9vd8poPzxJyey55CVFEZjojWvKAVh44MP2MzcQwSFcXqg9aiDpCjwf8vyPyoT",
  "key19": "4Kp1YnJMgZqLNHY24i42vQfLHMHsDjLZZnzqG6R6JqEUZ9FyuXPUjDgKu8SQFzQrDcuGdvHw3ScbbxAQywDMiaxd",
  "key20": "5DtKAvzfkUBaLWYk7kVgwWH5wJA6YnTxYbP4WgKLmyky7UGiL5VQgSzPHk9H9TaG3riBjc8bYfXrJMWa78qZfsVC",
  "key21": "4vz8JrWVrSqQBUmUeeudUYHEbNw2sE7vjTSqF3PQkTgNUjJqpVCNYGR4HdEANV1oygf7Atrypu2nud5RJvE7PhG3",
  "key22": "2F24ft6mTcQKv3qQn6KCsqjEc1SChrJYVVHY5UJT9zqRFfmmyhUxkDR2dMojBC4LSPoQYXjMk9SPUFFuTpq7UjFC",
  "key23": "5CDUHyEJKHM2STAKkKbfZk8Lh2wSsuxKYB4HavcagFacqKFY1k9ffLrmN7fb6XxqxSdQDaBFZA31dPfjkhwKmzHq",
  "key24": "5MozvZnW2sf4bQRgZygua3DdqBUeGXrK4SWWdSXTtfXmrnBKzeSBVYesocKPXhZ8XKekkFfNBcdbG32oc4mhHR2Y",
  "key25": "Ca18EKth5GDfcpT3QXUubJXU3aLiYnjtYUeMagndKJoH2c38vXow5GceF5EFyen2yPUByuZX1g98WamhMpFS5Zq",
  "key26": "5npbSoP5UeHtf6fkr6S72o2D1NUEFV7xkbBfALgJCAxmFWMmM5sTd6yyuy9HQrXDFsD3mBfBP782pP6GKPN97JwA",
  "key27": "5QXbReyYMhPSRrZPMLD3S6t4kmzc63iv78GRTHBogzhBvWfUFdHhJf7f19K87Ny8PyUz2L2dQqnvLF48xRuUvWxa",
  "key28": "PEfrkeLZ9afBicrBrhTZhv9yvroEzxsvpX61JpvYX93wxgGZSNAp1WURJq9naFtgYNUV123RfXZ4fu6WLcBKchL",
  "key29": "35ic2msUAd9vPMTkgCK4goG1amHV92Fg4opv7ufAP8Jcvn9nuBN1c8GBbEvGAbgfEd3G7T2EtNkAvWnA9EfLFdj",
  "key30": "5CtkSyAzniPRsmE9STcRu42PpjSyLU4PeiKPKoaAuKJa4knPV7bGRTqBm4mfPwceoZCpMZh3aBQLuyYC4PjvT3cr",
  "key31": "2x5CPg84EtVyKdnGKKFM1Rmj5AMyZNSMLjDsJavsccxDHYxGGxcRjPJauyYkhEPV5KuCtM7GVNz7ywuYC68Rw5ur",
  "key32": "meMKCUfH3oypfN7BrQLy4HAwHSvUES1AFmkGR5G5txhgfwrfWx6fxvL7GPyjT3pakQ1Tp9DgA8CDcD83jq2xGBS",
  "key33": "5Du3c5LCXBrdaTbrrcrJoR3qpAcYqAYjTMrjiQzCK96Y98hNpQpr6KyXdb65rMhpujDx9eMK6cSeYyg6TUU6ZkXD",
  "key34": "5bsRWokCo2kukUFqgxVV4yE5ARreYVBUzsFUwB5ffa7bYNh19Ah473EMabtdPZuHyoXU96duZSDt1r5hMPbuY3VP",
  "key35": "4w3EHFxvusSmWmWyMg7Yqp6E9JKRtgLh9dWLHTn73zo7iNKabWieJ3PbsHsBS4GBfDtxEaxUKarLsryam1FCUvds",
  "key36": "3FdjmYYqdgcbKASU2CbUbbpxKfyVKzkC2a6hHkXC6JM3N8f39ZJ9GyGyx993nbenjPXFEdZka8TQMZiFRbgWjeE4",
  "key37": "3kFhW7wiUYnbsKBrwKE1E9b4puwQwnyS6W3M7vLwt1EtXqvogYbgc8j8Y7rKQZdbj3mdYxezMV4htn5Vep1ryqj9",
  "key38": "53WoLXwinHFH2oPo9dakuCL14Dzd2tF93XGxHGnLXJgHipG92N1De8RaD1P8httvQAuyuFacob8zBtDkbiMR7pgT",
  "key39": "3ZBXQ5gAxBFxwvNBbhosZwSGbgvzqUM359Eqb5HjKr3SFQNyohnRJG93wZPDBQCMJZr4GXSrQjPswXm7AQnvbGCo"
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
