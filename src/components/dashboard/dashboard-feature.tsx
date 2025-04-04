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
    "3rgxY3eVa1y8Xr8xKPQzNXye2QYtWtbiwFEwFs87kRUgPZfaEQUmRNBoNRzZvuMYs6prDYFF9S7jhzM3Sfi4gPNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxJNNbrFaTaAYFsV367YPAPBNduJ6Z48J7aenTya8h5jWjSKsai6nG6b8kDhxNf3ymZYmjffaL52nwkYkDxb8i8",
  "key1": "AjvgPVtf7FYH57Q5wgjxprfNkdRX7AWLMiLbnvxbeQxjktuLJxYtQ9dzhHd2AB1cUuPm1TD4frqFAZKCuzN7XSg",
  "key2": "495ah89VgCWV4KJiSWmFKP4MZ1QwFMqw9ue4TYy7vJgEQYXEDvq1zYg6dJSEhUJWRrwYYUE7zW8dhJgJjgP3xaHo",
  "key3": "JFfMoDHYvAyXXyQYDoN1TBe2rtjD7LXmeXJXLaiGAoW1LxyTNQvn99sMnJAjJQtdYQfJr6aSmfbLHFc3YZv5aLd",
  "key4": "5wUgLjw9avsGGx6esLhYXrmMRotfTBUp2zHpXXHTe2cesz8ce2jGC4vLVafbuYs5fytQdpY83V14Cn6wWABYBC45",
  "key5": "3ojNBMD86WMUnAALQXhyh5Anq2T2Lv46xsU516Xp1aa7a4f8b8txMemPjbVFXCmx4tfJaPu7U21aFtJkp3z5tWQc",
  "key6": "5LhRnp3Nq3fZUjy4WkC1z1AShuUBsFJ8Jqttb61iq1QcPFLqF9xctQVeXHTcSdUnrTneUmCoGfUJvrsfzYZZ3ajb",
  "key7": "2tH6esqCLty33ngSYHi4ATJWSFnrSmZQ1HSRfv9yKMvX1gNvNzKp158krwY8NxtcBYQ39a2XUM5aA6mmyA12Lfkh",
  "key8": "4JrUnU9QSAGUhsKAum1H2hGWDGiNQkBrn57qhbFPs7p94eJVmWX2ohbL7HKTGoVc3m4M4p5fH1CyFUC1LseKELy5",
  "key9": "4mmytaFgyZLFMyjjFeXAeZ1y7stv8GSES9yCcPa956QLzLSEUmZyBu361bwEq9bXDsTv7BPdnFPtFSs75x9VmUKD",
  "key10": "dg9CwZn6TZSNFZrXK6Jzzfz8RCodCYdQBjxSF7KNyspEQA7tUSMw5jc93ztghYfT1yibY53v9VnJ25XY5z4tmJB",
  "key11": "5MJyYmTZEZVqQGcBnaNHJYsKQju5gFuWVRkTURzpofujNMWu8P5UbXuGJrBt5XwRoH7ihvQzT57PVk8NmaLCcjXM",
  "key12": "3HZDSEEp5DC48B1sKuZPdUfUPotttkXP53Zy6RQZcGRXccfJEVbjg4ojeusHdsyFfpk3GAuDfdYgQuBN9Zub7tCU",
  "key13": "4TaX3Nui6PgHg4t9yWPsWRyNCThnAom5jKehe3zyLknLa3fJyYNLj9smonqT8fVAV9ms1Mozyh6yLNMPoyvkPcBM",
  "key14": "2Lc7xcnQsseUKHptRugsxvvEFunRzLFe1VL9YYdRGagmrQrMqP6Tx7b4boA72AvhvFeRuSvmYCswCxvXFVjwaPRw",
  "key15": "4WNWdXufUx6CwFYwxNJW9o4PN1JBT5qef14obSaRUmHkkAYpzZaaxzbrWxLY7697Wc7Ef36K55GtZX2gKRooCTgm",
  "key16": "63cRyT2KwHd6KwVTsxR4bCmCHCx2LT4xzRJDVfqCBGhbozBwpH8K1L7cdvgKYGnQhfrt8vHRcKnyoi2bntrkoaft",
  "key17": "61zTnVxdGrGmTTAMYgiHmACL7SVVyX9FoDkkcAPQqcHR3yoAFWQua289MTxjWkyUgaqFSTEi9z2NyF45LziGnrdV",
  "key18": "39Eq36FuCR44fJqL8QLJu1FzLq9rtbQLU5G3Wc13kur1J4KaFBG16ivMFfa91Wsvtto1kRsM4iLXDgeAHqCzogWU",
  "key19": "6243KAHprrphmRakX39Y1tFJaB88chATVFNfGnEze6m1goJ5NJpQQc66LbXsADjto2xh8X9FcHd8bg5HUCQfqQvh",
  "key20": "2eUW2qMoU7TwqN7ggVhucGLTUjKKsPZSbysHMRFL44Nbux2rXjRkwzVTDJc9sujbGYjrs1UhWHfURDXzYoXqqM97",
  "key21": "426rvf7EoH2KJ6xhwVnXdQjdGC6XdR3cDBGD56b1inNVhWTtw1ek8AJstYfqGLxgeTqqWQRAmAt2tvB8uSUbC8Lg",
  "key22": "5kdwoGc6sqRD2pTjtGhDZVcmtT6cDeqXqBWUwPsjSYMQsGcQozmeQEwnipYPGKArNGEHHD6hQqLAE1UP1MGsCxQL",
  "key23": "4riQmnM1w1CMLoUyB4KrptefgLN1gm1c1yFT9CvfnmXCqwjr9RRoabJoyzVaJmfyXb8sPHf2Am5EcPvo1FYRGAUJ",
  "key24": "4p79Ybkw2B94vjnxop1y5xxNvUqTKg4ptL7dTybzR4MMwWJkzAXqQktKnFNympzSEjocAAoKceFs8VsjUfyrsEwB",
  "key25": "Kz7zLtZjmhbLDk59YZBDhs6K9JgcGepjTXRBvwzsmDafjctbN2NSGNGjSKt9T9c25NAz9F9XussRP7GfyJqoS7v",
  "key26": "2GwKTvazFukEfdVm9LoCGdZ1xwYuaiNbdCVxQxxPQ6oBBovVXawAFP7bcv3fdUA6qGAjJBzVaZWaRErZvkoVL1Bj",
  "key27": "3GxvhMa74DAHAFCtvdmHsdRgeSarQdWhXCymAEak3U9CYsjUJeMrdy4k1GtqHZDP7dSTx1fDeMZWXL6mngZWpu2R",
  "key28": "58d6vZJ63zdrgxxZFdfACpkqLgHN4dDbSKhoaLBsubcQKtu5husbyHY1VxiSt2Fv14kWPJA3EJLdFQpm15Wievkv",
  "key29": "397SY1XDMaQRWbrZVhp9FnztZUuT8AGXDRyYYtsynrTRDCq32FUGJz5HUpoUUdZAJTaYPqUa1VNFZKQx3LDjK7p1",
  "key30": "324KjhkJM2rfNaU26SVsdEcwG8apm1jEUS7AusTmbMVbEdCF6BJ54SrRB6xgXtE1m7P6NavFKRQCuC3nyNk3ADHK",
  "key31": "3PfgbWsFHTdkvE8PteJCgBgMFnRmdko1jaeDzJk7xzp2TCcCd1hLBB88abXo3aA99DRjTPfozv6BjcdGEEZNH4g6",
  "key32": "2m8CJw2uz864kRMmvVaofbPa5kuSxagXqY3QCxHqSCY74iM48hQadHHZnQhGipoGA4rjG1NjqXNoorC8QKqNaREF",
  "key33": "5xSL9QHvbVm2FPn75waenSuqovNqt5nFrtXRLAt9zJbp3AFV8SXfopoASFmyLZQbF5HbZemoWARF2L5Jtjz24eTp",
  "key34": "Xgx2uDsAR5YJ3t6GLcH8YrefJE8DFtg5jPrxNeuEtZTrxDpwZhsCbbKcdanmupA79BDs6VmuyrRNHWndkF4JuXi",
  "key35": "2jERPFur71jTta5ooN5okq7ng1gxeXH52FSTyQiqdbroTBkpauGeMtNrhvNw24ChorPmytTBK8tcgP7oaiCWXK2K",
  "key36": "2ooPg7ZEWdS3fxJgFkKBxjgzAVYbyYgvcEKxypMMENW8hDnghim8RybzivTLCrPgueLKbvwceKia7RG8Dcf84Qer",
  "key37": "5Pw87hvh26Wi58RMSMi7DZpHdAEnipJxXhpgymELXuUjtmWBcZPxHy343aeAyrwngnvUWPBFue5vx9U7EZEtiikW",
  "key38": "2Na2KfACSkJq6vwNEtTSa3vbgquBArS4AgPjgDEhceDbaDkQerVM2bQ15m2oafzvEYzYrMqauFHpii7HFVgZVDsQ",
  "key39": "3tbjQ3DGbw4aDGzZ1vspyMdJKJ1c9sZyNfED6CXR8hPVzdTqo7CznKSSXuXM9KfAUGz3YgEfjcQPYZpbgRYK3WB3",
  "key40": "LKCGMEAWEKadCASztFT9YW3yD9oycyRjNeh6Esyf7GM7Brzs53ShE36VeCUzeQhNEsa6LhsuwyeW6em6HTT1Q4e",
  "key41": "h5soVPG5dxvYiM9xKoYRV1XskrQBTHx2z7voNwsNH4ZRDLfszEoaoojsJSME7phiGc7qTZPLs3gz65Dvb2YibiA",
  "key42": "4rWxniKivADieF1WbUb5xMya5nSoKAKsBRHB9MHZT3hLQPzNM3XdUAYJVgz3VhuJk3YNRFbTUCBDGVpjUaKY9gYp",
  "key43": "2GBvibq2R53tanZALaNE4Vk4HHzLgNhoME3odg4gi1EVVra3Q6k9xT44ZYgRNGkxcVwdeuCn785CXhhx1BVWFNAj",
  "key44": "34T9mmnVuio59DQRSLGM7M5bmZfn8Gyq5o1YeZFdfwdZ5QYyxTbVUG3YQMVgd4o4GpCGcWThvQTTcSBwQjG48By1",
  "key45": "3oBUmUj1AEXuhnh6ejds2nhD1XX7vpy1jdMMvFkoQDrSEHVkrzBLaJ9PdJC7ekkz2gRi5w9WjF3tsEHe3q1LmBaQ"
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
