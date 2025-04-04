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
    "5bijQu7etBxcVBpMm7gEfvrdmBo5KJUQsFve2sZJ644BwxZo1n8qS2xpVSECQZzpcfgcT56Dr16reHU3rBr5Dzxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPP4AK72QLvqLppMsbFkdfhwi1sTDJ3JdMUG5R49zwc4WGT1ky3xn5jM1abTzAQZLL8u4c1J654N1doNaFs7V89",
  "key1": "2eTukttNkP4dohSPNaxb3FSFG7iNNZYwR364S65oD1Jy8sQKsoryZJcygg3XSZudyKLRcvnx6W5A5EkiTH5aAKeC",
  "key2": "TuD7iYooMZNxe92y6tmhovKmXWtDqnUjmtybmrnpuvHt5u7v8x4PHJ4x7TZNmJdB8RvfTtimokQjPWW8CU3yTwr",
  "key3": "4t7Ww2LbgUcrXAVyUMnWhFykBeFNBHMfZvXwDXsEXKDRssiho7rWRs9Cv5r8wYNjqT5kegvNsahNABggFoLwsTn8",
  "key4": "hqnAkcbYpcgbA4ojeHVsfN19LirbFrXStecv2k8Lr5vWo5ZqKKzePfHkdy9woTzfwtVX85hW8HyqGEh1Vs11Acd",
  "key5": "5TPTR3S1BoF7WxYsqT9tnSAokHXcohnFB1isyiNXsnu4joKQZrRRXkJS2BTQmd5tZwg3aoqfEC11d5RCquLvJiv4",
  "key6": "2BEpAf9fheHKyvSi9ENR5ZdoLfbg9erYmrya2JtkUccaXoyMgjVPbwp5hwwZHKu3tuRhUpYrxCspuHffaNQpzMgf",
  "key7": "3Uw9hDHc92tU3GCg69su2zqDu6JMSLicSLziSeMEfH6y9HMeWfVEG3355zY7PcMTA5FHp5AddkdM5Tq3ZUqu5B4c",
  "key8": "4nQDz17HTHrAuJDidttNum8Rcqwe2PjnoVhzmujQHoEuPY9TKYSyP81hNZiTVDd14347K5Tx3NceudZLhbcjqULC",
  "key9": "3368qyEfYPhQd1FHZthHj5HLW5uAsY2sVZC13ntAGhTPwcyNadNTvoSsgpJ1ZT3Kx8Q1oi4DDTWBf3gq9jRKFHis",
  "key10": "3DndMjN6jk4FjAkTiiEp8Vyb9ZMZyAzeeMWypNSAnUnNwij13xaDxrVGUTTXxgv4vCjpETV6imT58uSzXCSeft2h",
  "key11": "3xsmDF3mQschRMwceUAqqzvv1q5zCBykqrnDYW8yc15Nqn45SHFs8pdw6jhvgDWUH4GtjeKyGcWpzMc6dUp1Ljnc",
  "key12": "kMxU4pTTPfAyApEEpKrray45q5mCnigUAwK4sBZz876K6QSh3QvawxNxaWXBrd9VX35XjGrTEkD5D6TkBuM7FH6",
  "key13": "3t4Vdqiqd3yt6AGEJxfFGBvXqpjWPh8QGhU3gjhWxcwkuCVHGi9qaAL6gGWWtoiMGsnKZnZT7uXsE5zneEZosLjr",
  "key14": "5hqC3v5dE92NxPXfDKJ28GR3gsVCJrX2KSqZECb9iSyCYq2eKetM6rZHXuvhuaz6PcK3r45J8CXWzMTsk8xfmDMF",
  "key15": "4KHPXrggVWemRFjZrBH7ZZLU6PpkVMWpP2nQ9eFfGPZJUj4ZEurSk48qgfxoa6fzDKqKEMpNki3RgwK6xPDq1ppj",
  "key16": "pWBhwcaqKMo7JPzuSU5VmALZAZX8ssedpdwoTGhny59vkvk7YH1uicSaRWrEM4dAgVhfj2edfr7JB22YcegnnH1",
  "key17": "bashtTitPa13yy4Ei5Qa68DWtoUgH9EC9vdX1rZo2VDTz8GEkSCsCkuaXa8HKRRzSxpSButirYpMP46ZFEXyr3Y",
  "key18": "42AciLgGx2KrfEHEnwRfZKAH5NEzJibXMMHx4tz5J4NJxWYvn7tqbRYh8G249QDBnu4xmv79N5QgLBta8E71WVdw",
  "key19": "53B7MnoxvHQinGXcAgJkKPUXyH5mEoTXvZfNcLUwh92tHA7iUSgComXS73tEpgztSbSTopHLQmujEPAaFG9NL4iV",
  "key20": "3ArxkyJvR5BzcA52LxZ3MPL16gPryiwV9vNhy998QiWZ4fzCchRCoPiiqqjBSw5zmQBVJg4mvdcFZ5S1vevJCCJe",
  "key21": "zzFH3Mk8yru9LQdqnMYX5Jwp7ZwCLohNVnycMGbd7X1W9sBVZzsajwXECmQcbpwK958wgckGurP1Sc2jA9xyYRB",
  "key22": "2qbtvYJqcw4SM6K6YRKK3i6wCoFDNizagTtsxgx7j52J3acCqJUfVDZfX5UNHXFSxPNtdGWydSzPSZRoZ3mEhMcs",
  "key23": "5tQeTaD5B1FBtu6vnXBvQJ9TibFE2VHFZJPKjekpsCqKa2RZeroyoHzSN1bcqSjmVz7wcvkmioiJEJvU26L6qsv",
  "key24": "2AvKUHxrNgK5SL3wbggMox2Szm99iX1q49otcCnQnYimaQt3yiXJTtMoovLDBgvxBUBKiNTVGj3VCC8vQEoA8XhC",
  "key25": "4dayqghugFts2FNowiGhiuEv2NYNg4BQezuvkyg9rKvNkKdcEovGcKWQcGUC4mY8GozxAW6PSaPb5eXFt7pYaA66",
  "key26": "nFvfwPVkmb2tDF5K1LgdbncEhDz8c2f3py8WL4nVDHT5CybazZdZbean7rJRnfmkUAvWPxvCFuGW9YZDadKwQev",
  "key27": "24b5XABqEW3MCZRDjKmHwXJsWu1LdWdzFcM7u3yA4xFRv3eNPWVRdQmZjER7fQcPRY9yDijwperNdranHzeESBhN",
  "key28": "4zsQ7Sc2cJwi6huPYsxQ2XNqMEDRFVEeKaqAX1mhE1F8hmJiC53zEeks4piDtox9Xk1Kbty7VAViL8Sh38cvAHZK",
  "key29": "r3LAcvnUfSq5foYB3Ze9sG5W716gy3rZPSDtuiEfupQb8e1pcghki1LmiJceBoDkZx5rHQYtiRX9uueP3tR6MJ8",
  "key30": "Q1SqLm9UPSn8dLHPBiMwogZohQMqQTTZUnhrFbnZcpyzUZqDjZU5Rwhkd8BxvpNwmyrMQcqToPHMmjMhzuGUyMV",
  "key31": "8Ty9wcfr52AkPivq316hHzd49eZeqoj5Fq3etwXZpYHQDUkJac8o3ck54FRpo3NSsA9Q3pv8Ra2ATacEsWjaEW8",
  "key32": "5JUWNz9kSDM9e9EkjCdGvb8ZoZo4B8CJPqWz68usW2vuCsMJXGNk26DqKeF4QFPsUXGTMzGk4xSV3pp7LutGBGXa",
  "key33": "5A9QH2XRxTynMEVbzQtGBrFTLatWXywRDsSq7m1xUoWNUuSjbRN42RBry3pqtJ7PJ3R2mQWpKDdDSVv89LTvU53c",
  "key34": "4kzVQDbD1JnAtc7XixdM5csGE4XgHGKEhFnG17snZvEK3RLMiKRwGHFCFuYoi5V3s8hUvWWZEnNiU7QPDhVmqaQG",
  "key35": "2c4pbEy2b1aHbyh5PnWo78wHaqkjEzVjenWGEZAULxcJtTif7EurHi5c3DjFWC1GsEni2CzaEiymmu1SG9QtUUE",
  "key36": "5ygTKDevTCpzJN3N329tBadsRjmrSA9Bda7Y9bzv8ouamT73dsEBpoajoLKy3Gd2PHZzzFGwyFYByDNid5sydCp6",
  "key37": "SbJZj5TGzPz1KpyxFPVqPvivZS7xSmA1qHwviUTYuGPh3GxyUwM5vexNbZfzL8rWVHmSeJTXdkgsCFwgCsGY6qx",
  "key38": "5YxpierrB4vmZsboKcYZt5CRQFUk5dy6Xtus1Ya5khxkX5wj4r7RKHmpQJcF351AAQogv7UPeiKyAgmhsLmL3fzt",
  "key39": "48oYU3jSBtzJ19cqewoiqG3zqRXtfZqmw8RfJy9HtyA12hKaKZ2F3JapXhoy7RJQ6spcDPQarGP1FTR5c2iTseg5",
  "key40": "WgPa16UDa1Utp1c43Jn1gVCxVr94nzYQ1mtsAy57926tkzH4WZrdvMdiAEBZbWkqeyLT6BNSarBBPnEVqhCx5FC",
  "key41": "4pWzdjyENE8QLANZtmgQ9oqBAkDSUnwXbhkTvCD2a7npjvJoZrWnaYb54gheNeNWLzPhxT55KH81APW22ZaM42zs",
  "key42": "2Cfs6u6TfNoDTsQmau2MUs47w4dzvTKzA8AAyiBK7XUAPFvTZP33VZbQqByq4fMAAuaNBstZpiYGZh9bLeP5vWiR",
  "key43": "3uDByoyKZPitcxLC3qruyPh3zWeZtZBQGf5572XLMd4LSyTSy97aqSerzwMjHXGq3ivuU2y83s3tstQgXmC7Jqbi",
  "key44": "3sjpLbUJXi4vxfXyJfdbALnB7E3FBXSQ8BWrswn534BnyvCtzaiiW54uGDco1eAeE3Zt2EzcmoJ9qDb7aJT1vqva",
  "key45": "4AgvRoYXwo7fkCTuN4T6PJNeYp5zvrRH5jKV667cL2MuQPefBfyGPBJoBqHsfYZTjL1oT1fik418a5NQ4QFioKE3",
  "key46": "64y4xMwbicR9RTFGANCyaqXWKpbmwtxhkZbQ95Vw5sY9P72cPEHaQ9ggJHiY88CP2dSYd43yfcKnQq3Vmg3jBXyy",
  "key47": "2iLmy5ZF6SE2yvz8mCE1sYG4XyZqFeM8oC8kxU5YhbWxuJFAjTfEtumNBjHWJU8fnwGRa8Z5eZLskwJ8Eqy592gm",
  "key48": "3pqRLerLT1HW6et6NmGfa9sxi9KCUNuhhV6Bsd3nNhmhNuTyUT5sXjPJzLYF8C3CtpojWTNfVX3BvxdM9gDxivs1"
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
