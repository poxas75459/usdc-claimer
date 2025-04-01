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
    "365G981qSHGUxfWAnySw3zfuq5EAWyeyCYZ4PTBNW7AYpewQXcCichPLDMEZ5W8cDrKYDHtbc3e4vmJ4393Wi3fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JTH3BySN83qUEhUHmAruprtf6wGooUQrpHTJsnhfGkPtjqHCTHzPjjMD5VEtZ2ad1w1ondiHsmwh6y8AFRkYeBB",
  "key1": "5jp3sH8Lsv5YnZVgiVx7hggjBKjV7sDZs8jCpVjJWrM6ogr2L2f6qqcdiDqeK5762iSTkdq5U7FgXUQYCET1RZAh",
  "key2": "4y9Wbv7uBz7BqBGtjA5Svxs1hwMGMcYnkBvh1kAmCj8ZQWnJg6974rqZhDSRnUQJZ3jwYYRYJB81dTMjo75Em9PR",
  "key3": "2gRvysnRyYBzdnmdZA72wuwboRGr6VVMt1mmSrXFAr5EMqz4V23a2N1V4iLB54H3KA8hHjL8mH6CrsHhg8EmfrL9",
  "key4": "2HsN77MP6uKi74haBzjVCtNrPCsgoSqjBwHgAFmouRUx1Z15qmJSkjQRQtbuqCxmwJDEoV5xayiKMD4sLBBZTYNQ",
  "key5": "3BNZboqpHE1uZM5mHJQMFFG1So3dmJyUneXvtYGRDxDtsEhm6hr9t2Lw91YyrYR3BHFwbhDskY7YKfYk9JF1i2NZ",
  "key6": "2iWNqnVtyjXTRBHv9J2kUuaiJSR6DZzoLheSrFbHqR9ugDxomqFDeY8YrRzxWoYia1HgwgP4eeQZNP8Ctvv1ZPXN",
  "key7": "5hrEiSRmTUfBPQvWZJLumqgnsLADCfMiLaH94KJDLxCyYMV246uTGRbvhaHbCoqnWMcgeyEx4nfD29DoKGXiNzC",
  "key8": "61V7vS7CVYnZCF6ZaAgu7TZcyXL6DRTVdLef4BFQaAetbCTqa7Ny4n1rHf5nZwoYXM3HiFUq3B2XToTjU6d2UUWm",
  "key9": "4zM3niDEoXy1YRRswXgfT1cBEUUSNYWxPrCnxuUtFQDUjdx41yAH91GPcidDEcUZNhwLtp4NQhewe3yd7QrPK4w8",
  "key10": "4yAkr8PGBapnRRmxiNTh8AXg9g6pp6BTiXpYUnevCz8CnsYX4TY72oAVoccznEyvEK4VoYkix8qBGj3dELgQur4L",
  "key11": "3LxcLVdkpUjpQBrDhwnWfMT2cFJ1fq6rQCsF3xWYVAyTZNgntfffEY2wwzRjWmH4Bvesz15NoAgRKAhgBoh6tGnw",
  "key12": "3AqzpVB4P2QKovRDt8XkJV6YdatvNJsBsoNn3k5Lf23rQYCpSSnjNFnEPFYizPBGYda42HvP174BCAKW5betJVUB",
  "key13": "54ZMDAZcbGaEsfo3CSAVDJ2LEA92pWbtFb2n43hUAhbfoemWoN9D8QNYpFooChxYtXUJw9MsKt9DrjwA1xPbb7vX",
  "key14": "CuDDFw2rADm5MSdvXMUDRWYTktC3TkuxP7j7bc9XWEic6hvAscnJ37sMwKGbMeb4a5z8Khd8XTNGWXZmY91GAQw",
  "key15": "4PJ1GRcFieFjWYfzajA8CLN8aoJCBs382jr9kXwMABNSHrdERNFLvPUKcG1NfkU6f2kCmsNBGqQkyqjNYk13dHy3",
  "key16": "4tKJJcoQ1hTg3g8jWamVE9XVDkNZerZQYzHKcqsoAxriPiUyagz8Yg3S8ob4MnsYtyEVK7yZLtZV5zwVZDQFh8h9",
  "key17": "2pFzg7GaR8UzZB1CFpeMXVNpy5ZQqd4j7y1UMqy6xNxKbCZ1p5MY7tpA12apFqJWch8w1sCv9UJbA3mi8wLQydcw",
  "key18": "4Vn8vGg3HKZpZrWh1PpKhMLdfRvBDsjS4TDib6X9PLytxVyG5sgvPtU28rQbcm7vXfML92ZbdJwc9zDm2QtTHzfs",
  "key19": "55KsTbuqJptAVzZsjoj8sWA6MBo2YWLvPVYMAZA2SdLVPgiEUdAYZMBkhFKRqocUbviZt9scFpXhfXXP3omkFhWs",
  "key20": "2DbmKwXwJnsdMYM1uDVRPxB2UqqqsY4tacCFjHWQtrJwKaoaasAMQQc1YbrMKAuAnva12VhFnUmkdtYQPU4FkLRS",
  "key21": "3FV52d5tiakbFzTTrbQHjLCs8PpAq2yBsPEaabZKsn4NUnNV6CaNFjjwVQt2dEs642QJ46tEoftY6t9pnrkyjqRo",
  "key22": "2g6ucYXczU5wBdFDPGrg7L2cuESmZW7kZTUBfKSdNEouBym28iqJVvFqY8rZzmZX3m7fAbo6Ldu5hZyuus8Yxmkz",
  "key23": "39hcn7XY9P16b8uJB44poBvXCQ1493pNwtsmgdSCLTZeWC8kqTiYP2JDpNpAeZpmyidSgbciWt6MRYkZgCoWKAUD",
  "key24": "4PxVDWxWxG6qPy8xo4tF9nN1pBa9JRbLHJwTzELKfa38mgWnFgSWXZ2L2EmFwF1q7Ae2KumHDpV87f825oqJSW8S",
  "key25": "dcTu8GM2SxCYxpQLyiuAbHFXRH7HtxEJJRMGhFTm6q7SEJyJrwdWzVXyqHrDtkjesau1xxjQa1kq5zddZUL3nUj",
  "key26": "3XFpnWxf3dUbFjjFJ9nxCodfEJyiPB58JHik7VDVzyWJcTVdjXys3PfmCmAS9JG3dD4nEE5URqXgqyHCzHDXeuyk",
  "key27": "5CuAiu4NXrQP2MPFKdyiKgGoiVXZ139osCaogyhmesFXk2AN4wzRZJgwdmwn73vJyNMzH6m9xKmdt9HHcYrnign9",
  "key28": "23d65QM4CkZk6SoHutc4afCS49A9BfWDELddou99zjRDqkyJDHkkvYjLP6ARqXq4ved9xD87fz5KMjXCHUhn6aCY",
  "key29": "4aP6exZfKF1jhSq64ZMHXEP5MQ6can85i6aU9CQYkwbLa3g7EpFYxf4jn7sYmkyz99FFqXvPHeo1wfMkx3nCqUYu",
  "key30": "2ZHESmrZgW14C7f9trSHMUtgt7GgStLFxNbwdWmBTT5q2zXM1qxTcdfvjB3GQfmAoRD6mv9r6tYqXDAMKMwsNHGw",
  "key31": "uAvG5uGn1YEbGAmLESYAv8zYyoQ8PZZ5HVGpuHLH94kgn3SAWkMeDaJFCmkNGoeaVRhDCuTzsg6ns5AviukjoEo",
  "key32": "4gmiBJyrnFbm3LQGmsrwsJjM3rfSoW7L38MDMETQ5tVmpyPjLZZiARimgsJrJc5VNd4u16K8a9U6sc5YYfnaaKpo",
  "key33": "YGXR8xzbaoETk3AzYkWfx3eKvcyBziY1sY8EwHYyZPsAFCNuzGX94b3f3ogK8SvEE4scXzE1LSC29AgQL3xU4WH",
  "key34": "4e6rdPwM6yRuBymdxP5ZCENPYJD29xAjhWKjJkZthw3jvxxarFsci1ZxH7fAYNSfA6bSWtU4tygbrPSMYd2dLQMg",
  "key35": "4NLdFMjk1sgbeqkChtMyEvf4KHTyfsNpsBGfxgpwwh2MbKzRGBb8uJQoDEdYfQrYq4wTZevd6VMHZDrvSAmBWfuw",
  "key36": "4qpvkVDGB6QBkdVbhVr3woFgZysBxWt1UUFATeJLazDfr7vKZbj5n1KCqL5aphFXghBnMADCMrK5okgbm4TBmva6",
  "key37": "3tGrrN3oMhosEzPk9eS1GqwdBqoSjjV2yF5V2Hmx8PjXaqrpbsiHLUZtf7Lokds7PQtHcRmRkJbr9GbLeRVqtrL3",
  "key38": "67PCKVsfJ3PE6KSPhWPzwi43APhTsmv7ngxzdEavHye94rb8szHPpf6X7Af5ebgkUtBtP4rbG6HVUqg1j9ZKpQkv",
  "key39": "4vHkKq9jEPJW9i53xHG6F7W8kDVRS432ZKpZnHSbjsBj2u6cFZJCqM1vAChamBZiFbt69VVoskPrxwxHSpT1kvkd",
  "key40": "2CKfmtTz4EwqbyTbmUn7xgeNTwU4FPkWMqPvptn7Ve97mzkH2jJuL8shMYvDKQajDnEwNG2c8C4AGSHYqNobGvs7",
  "key41": "iDMw4GprkfE7rGNTMd3FpsFmyjJW68wWgc3pWyKfifqBcGyV67ecfTfwR3sms6Q75kHDmqi9PeaJcqLQcwxzEFT",
  "key42": "4E4qE7eh8Rrh9tTC9eVC4gS62AXArJssrXAitmFLdCqwdg6Hx1ewcXQBBRk7kczUT8TbD3bxPHFyshnt11FtGdP3",
  "key43": "3bwbh1FuELnrMV2HNLwFAULS2zYPbf329wiG9EV8bHW5qHQQi4HfXwTWWugWS5Ekw9kt5VVK4WxFsUnX1WiqRkqX",
  "key44": "9jbfWoGArGkrkjA7aE67LDKULfn2m6xLuiwvJaYFK7QCmGhL4GsoF5cbS4iSnD9yZkWzXBbHMLX69A4CnKWYkFQ",
  "key45": "4GcFoi19YiGHYqZRYRHNGRedeVXhjDsoJxCtyxEtB1hEtiNi9zdheaVtzWtHNUp9Q35fw6B86GvPaYAviofziPXr"
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
