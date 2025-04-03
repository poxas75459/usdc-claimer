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
    "3WAUZgqE9sa9JmxkQXF2E1WKygTyqCY25Zp4kyDR5d4QYUirE35WYGgcf7cxYefNESSvuGkfsQKypqVusE2Hryei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jrKWZpjcbmU55KTqVkZqSDAutcSeQPbYzX7GkkVL9eoKMTFJyqHfPts8g3EcAKk7Cw69sZoYNtygxZMGNHj91N5",
  "key1": "5Dg5WEqq52S7U3KxQbrrTEfrsH4Uq6Czc2dxEjCLYHtf5F1ty969UgbpzXHUzb1ivADQvtzfUitFGKcxDYQ5TCKB",
  "key2": "24xJz77r447eNXKsYp4BA2fQTipimKG5ERv4i3zmZxGXEj1guJHUXBsCUjySzQpVTiMG8eQFwkUKg8BKsa2a29HG",
  "key3": "5N5q1bK1qZtAjffsyTcsPN8TDwA2gXKfCxwCR6yKmEJD7B69Nnukn5zCouFN1otGTP3LpDaXi6PzVtNSyEzUwR2e",
  "key4": "2DyX2X8m1EkySBp3297iveL7Zx9CY85shK2fz7wuBwoZZzSrag8BTCEKurrfLqwj6AtKZogf1az49XN6H2yUSR1Z",
  "key5": "nYyyFLHhfKskcEY2U6TM69PKJFfakQQmtX1j945RaDPuhsCD5k7AnUB649hjxxYxSZxvFputXHpypbFmd5QqXAP",
  "key6": "3vLF1Kd1Hv8Mu7iCZzXdMMXZ5KtBLahLcf9gqp5rnCcjE2i4L1Qyuw7M6t14rvCFbZPBuU1hLmh2aPUMDAJE6zk6",
  "key7": "5yu7pUJipRNgjsTtDLbn6k59MH4cGrVjF1Cs5Ypf3oZhJxau4zyUGpPu1BkKX3DpqzjwE9qw9WrJQ29s7o1Ni5x8",
  "key8": "HYXxjhne3ptWMzNEQhzeMtPjrRkVbY5n7UcLTPqquZY6sSk9PARQrtr7HtDb4RcQ6yjeuSmAZuhqUTEcCbsR8DU",
  "key9": "2R8XFWPEySawc5KpRbyCYGNj1ZxuWBBAJn1v1Go1Zgieb6YvTFoDYZFYTCwVPGEXiYz81fcU2zwV7pVgzsAK6UAZ",
  "key10": "55VJxhevfcrLJGiiiGNkEShxKfVeP9qXvVJ1M5JmPH8i7Uj3QL4yphfcrxycmJUEL2KVgtpC5DHyADYiFXxRGyjR",
  "key11": "KBNUZpjha5PhUm7LyLCb414AkbxU7SUT3jxEvo6K9CrsKRsshCMSSiuFMstc3grS2rYc575deGt4dRK77hSpuPh",
  "key12": "6YpZhvuD3qSLSm5E42fSmPJAny5LtwyyPfbVamZNHNB3iq8YiFtbRQcZbidtAKVD9byfUxDcThsErrbg1nZ1qLX",
  "key13": "4Sik9DiwRM5gcDmjLfVYjuqNHunz3JenYYJiuMvBhohJcp3t7BU9zQWWTPRvpwmbMqWK7C8tL11R38ggZytMbpxB",
  "key14": "4dbQszsfoozy5cFb8FLTmDE38HKqiJ6cR9n3gpqGUMLc5Qh3etAvTm24Ftkc81roAykrsXrXFy4XpYiwy1PRziRF",
  "key15": "5GhkTqWe9thHcTHv5FVxxYnnBaNJSqckvdKAu7yymCo3NE8Pro51UH452wbdGZGdzyjfHKP4TN5Br1RzrWFVd3sj",
  "key16": "P3ShEviAUE2EY4PfEgprqwZzwVAbu97fWYqsPcnaJq4k2DtyVEUcbmGPXG4RxqAuyneCRLAdhwtU13CRkVh3GCv",
  "key17": "3jNxrM3Ro9c24La655KnW1mTyD4EaZNfTqbhGZhLqntNYMrmGoT6KnpXRjiJ3SpWogBhdqMp4XLZWVhJcYTujzBd",
  "key18": "5MAiZF7CusiefxF27tc7rqnYuzv9DgUgKDST2hTqsStmTiD18sHJop9jSNSkFVy1dH7tseuY8pUF11yrNT1MCi8P",
  "key19": "4q5Qyg1svb8XNV174bRQaAdgmZYAqLaevt62pqnabnVUhvc9tXPf8tsQrNfbeFcgA6X5wT9Jhfbuhahi8qjRFiHt",
  "key20": "2qzftHYEAicnGpBMeYBUwPVtbB73HftNy7eDex5tsMxAGZ5y8YkwnqnQ49WDyuaa9xEVK8Ju2HbVCkMvDkyXEaW7",
  "key21": "3REWoFxLDtUjPDTPjKUiSUz5BoXCXuUtfCXrBvAvrCM4574W1Vb4S1gSLvQp8LKYJMd6jg2pT7ggZRfRfonzMUXq",
  "key22": "ScCY75ppRCzmVKLHPyYrHiUurmeStZfknJxTbvYRy7oBnN2ZFbJvFhhzZMpNuP5VwxVsi4k53cEXPXyQsmmuQaT",
  "key23": "3Nedt4cudTMgt2VbRQd83LwEY25yzioiB9f6bjUBHAzvEFQ5EmBEZZwEDBSPAhtBiY12UHFq5hXZzANBjjWwEU68",
  "key24": "KjLTBdav4Fqc2tkroYLEL2TwQ7mxCvxn7jikHz47MTjG25jUJwpFLrQLbtXcTBjZF3QgnkhHmbwtn2JSnYVFjjG",
  "key25": "3uQMpmRCLHFULtfoABKEZa4uYzTeL2jSYzRQZqD2UCvErR12VpBUSynyHokqBywB1TPHEjsGGh1EpuwXWXiRX2Pw",
  "key26": "64tuGojiWs283DpnBi83BJyt438umZ5cyvcq8Hx3GHKk2Co6UsJEJ5cL6bz6iz6aHh9ZhJR341ioJDzQSPow8m9k",
  "key27": "tCfz73dhkphRDaVbwXGd5RCL5wD1EB2pTSFHioRrkXcezoWiQCtb3ifzYZEbKWthoBrT1jutfFfC1uu3xmfwNuX",
  "key28": "5KuzXaeuSVDx94GWux5YiaUuyarJ5yyP5TEKkfNzbFcz49V6TMqCeHQQYTcdGbVUF2pB98pcB4ct5c71WteH4fDe",
  "key29": "24tEgwfK2QmbN8RhpAwe3qhwTzpjXW7QHcKKc1y5rHhJrd8X6yUTPJTDuskvkDhc9SPAjN8wTEjvWUS69z8DfEVi",
  "key30": "4K3wL9zPVKJxa5YATFhzrzdJgpJyHgJ3No1bFgupS1EXj57eonmk781YUn8cs6yYSAo5qz3vxhRsjqpSpQfeyWJy",
  "key31": "3jnEp9SVn7Lr4yhd2x97obK9p3bv8ym86bpS1JJxL8P92FSjK6zRrMv3hTm64EXVhEbe1KiQM6p7GvThPSiL7TqJ",
  "key32": "3Sdvneb7FHc5kEFhGyYx15iqVao81K3V9iRTPyqH5YNcV3wTxJFuWLvckpVouYm16kG9wb46cqgT2MCNTBsbWmLH",
  "key33": "5nTpf9boQ32JSytej6uCapMiojVMaPpowc8QejanCAAX89ZfT1fpAnCerR8qanmBAiw2S3qdts5rUH26Gd4E6Y5c",
  "key34": "37YUvTksqT95NNGfYvnKQ7WGAxJnbGcLCfQvepz97wt2cTStFXbYLNN3b62bDtipLmVh5CkciAwPGs8jq7idfJs2",
  "key35": "szPnymEuoKc2uPUnJnM1ssY6jRzHT7NeAseoonDVzNrSSqc5Hy8TG1vXrNMG4zLgF2Ry5YUc6JSojSSwzszGKTV",
  "key36": "5654rwh93Zhv6mPQgiHDg8Qx5VVjZNnp4UCFUsvUED29UiRNoWsedh9ZX4izVmjup7GNui8fNy5sGDkhyYRLw5fV",
  "key37": "2KCAheERRKp4DD11EiyuALrP2ngPqhmF9j3FtdZ6iNXYBNpweXuZDCS7SffnnxAFPbL21MqhiEEXzB9AEQBcCgPT",
  "key38": "2xNoKvr315wUn5eUjMHnF4esfUh3k4vSu38H4uWhUCdcjsENQ6mYuHKJQ8Y9fQ4vZZSC5Bpjxi7AxbJDKoxqvVZ",
  "key39": "2xYJ1YYBXW3FhwxhHqjgvDDjCgMG75SamkmBuxzEdkSE7kHX7Cbc2omwQDRDmyKupMQrDjweDnLR8gBJNBC99aYk",
  "key40": "g7Z8s7eHJsmUf1eYGFyQRxZN6ec4CjP494xRheAGbwY3Ez9CFRXfv49eynqqHX1FUzd8ST8SJ5exhU3mhMmxzKC",
  "key41": "4ethAEdLQQETJv6zh3oPFVowpYY9x2EugtyX19cHw1qJhwyBtXLmHauM4ZwYzpcejmET6N7YFSvmhwUYuVJteaEy",
  "key42": "2VGBswiaBDV7LRNH1X1EeLqk2FVyFupPHkMmwpqVXsub6ctvYUjNvE145TG1HgiSMRwywQiAwnLLuhtat8aAQaqo",
  "key43": "bnH8DHMFuGS8KwbcaJzwGAbsYx1YJCeJW8Aux58xH5pmyEUtQczc1tVWK6fGywMAd1AhcUNSREqAt7Rox1v4SuD",
  "key44": "EpXUonSY34Cy3m4UuzQ6gDPeGMiozjMC47RaqgWveRAsz8ypQqDaxqEc4qteEAvZhWKesdXeqHts8nfdtzE6LZV",
  "key45": "4CGcMa8rNDHKaWkKpdDue8tJ6rCWMcW9QtVhAwuqhKn4tRHQMWeArwnQCYFACLMBE21p6reQLrzDrDWjTgm1RSNu",
  "key46": "41Bab8JDBoQzbqKnSq4s2KJT9tPXvBGHBzAMYBFTY4SHPJrwZMktZQPsCSvAUbPuooconPx2bkRNzGQddbNTnZcP"
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
