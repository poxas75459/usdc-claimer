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
    "5te1ziVNrcR3bLuihCcnUocqT4E8HPewnDHtXEWWN9dTzzuV4eAxGSXy2i2wQcf6RwojHzyXZkbjRF5H3375nwUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fSt9WZsD5Jih81NXu3pb6Q8org5TFa6t4TnToNb9W6DU2G4MWsubYyfsofh5bdGJ9A9YV5yUS2yiAB2bnN4ZWTc",
  "key1": "2DfGRrqV2Xto4UpY4AuiCT1yea4rXaHUZgc24TRkcGgHFTNguboJxBDYMkyzScvPsKurmAFC8SRqa7U2BGScEjGk",
  "key2": "5KBzFyHFuSKGsgLdYAJwY8yRAyCDVv8mE9vxjrxsze3n1gN7UZEV5vFLRhRHQ7pqaaS2oj8qvNBuu9PG3d59Kvzd",
  "key3": "5VX9ZsUYDkFRbhNed8L65tn4W477cdWa5ZpANJPjNoonc2fZdcCGKiiuAbEq3yfUz6zJSBjumSdE8Q9ZXywg8J9D",
  "key4": "42QFfCtyXtUJpSPp5sEDAJphu3TbYhQ4KXfCzQF3pgoeu8qDiywFZaN4RH99kd5AFLyLYThcWgBH5ug358kwaAXn",
  "key5": "PyukZT3cEg2FV6w1syFJm2Q9upGeqxidUCYTwGtgounkC8sGvdfPWDU8z8voMGjz2hCMudShUMC27azMVTxMRUj",
  "key6": "3FYUiHirP7mAkd7qeyURcgFBtdfYdiisegzq85m1cX6uovkedcptTNiTSa5AEpR34Farbw4WsKyUA8b7oH9NXogi",
  "key7": "4xUvm4FuQCtGuEwxFycYATjaSFwWERtW5eekn6VkQ41YuS8bAoAntVWMEQD89724ysuLNrobBhwhV97DP1jg1wEY",
  "key8": "3QpR53VQwc8hNgXLz1qBcV4ngk14iMfNXGNr5NJCbghnwpotU1sXiTnkmtyu2H8zJhgGPcRCtbSSqkFXkC7NXujq",
  "key9": "5CnW2nJWprb74oSX9BdMGuUFjPFCKRmazcdAZ2gY8qCj7Zwp7cNQ95MsESH4zuA4ewb7k7Wa2uwSirjRPB4ZZHaM",
  "key10": "2URWANakuByDRPL8nKqXEYUT7MwXeibd2eQaWb4ysPPRECN9bZizrKTzRMixVgWCGz71YKQrcR6Y44aUwthAsUDB",
  "key11": "4QnAdoXBW6XqSDQrWzdprzjt2poGeQyx8j5TFQidYjB4BZwXXiKcA33VwiMCXyjXq68araU89Lj2gTw4DnZyu79Z",
  "key12": "3pRqmCDReBaGqcfqRutSNZb9hBXWK3LUazipxu9ha3VGUUrp4viC31AnwdMoBK1N9wcSpYNMNSoCthSuEp2TyPKX",
  "key13": "3bfkZwTFCqPHCPhSWawwTa4CoEFXk6wW3eXwDCmG4n5qnffJgNvWDiTGGh4VEsJ97cHXUoBibJeNzqgjpwYYyYZs",
  "key14": "42dNn2BhB6PauJeWG5dwKMJzxeozYtisGbsGQdBfcfzCsxVqwdmxreqYYf68gpcLKbJb142cMX1aY7Vip7cA5adH",
  "key15": "2KnPhxLvPB61UawFRpFs6RdgUfqkYTVrkCzffJDCUfLG7mNU2bqrYdJgZPwFzbecLeEtv52N5gmQztzcXhakaqwx",
  "key16": "4RPeFo9wPDYiD2NbrXFGtpStTmqfivaqURSDg3L2vZE5w6vbhsXMkjLAo4HAEn7ozStpwcuh7e34RByXzartXHvE",
  "key17": "5bmW2EtBnqXrPJkTe8HCQ4QFvYTUnUGVY5bYt6u1rwK3prMF3zmx6qkZh8sbSXu7bQBvVab7jMiBoJmMwxuuucdb",
  "key18": "4NHt8dJtu4sraTPiMasvy2jMshVrXgYgzmu67ZmpwMScXPC3XXGF3zhepwxNNEtsTTVv5LBnr11VbQXP1bPQQu1e",
  "key19": "41ux34eXHACsCN9XarrRapdvNAvkp5Y5w8vNvULJERC4teR5RwFx18vjY8E4EtZFKfgzXU38DKFVU2yodYCr5wAr",
  "key20": "npZasXztFc2KrXG18g26Y5mHPA1SecSc6Yq7NeqWpUftzbT91Dp2A1KYtFsRshJjQ2ujHQdy8H1V1zDV8MpV1Va",
  "key21": "3EstVkGvNv4DiTot4W3RpY6WgsbszsFMsJXoF8e9SrqtWwTtMXgnPPruvMCSFaEYDTSMx6p1LW9KHTNfmbLmH76M",
  "key22": "3EUXBkcWBx5Cr2oudw3DZH3ZBNnUQEEy191AW8sDqh9U7TE6PREniTChFJKJ1ku1pp3K8BPuHxLAJBYfXTn22WEU",
  "key23": "2UbfBz2bnWsmC4C2SUAbtdUw7y5moEBZcry4dy1jaK3geUNpCQCv3f2qGDpwnyTqjowyjYfk4SpvQZzhXS48U5ob",
  "key24": "YMt8VD2i4VNFavy4NgjgJ3k4581hSjEu3A66P9Jdy37DaRtC7jY2oW3q3BEHcNQQF8yKv5doQoc9cXWeiQaDSLQ",
  "key25": "3pQ9HXP28Zo9eUiqm729wCGzNjwHXE2ujwgPv17JAWGG3CZBRfXswh7UDxsz7nAXUTHZH7z1X5kFCEyo9p7ypMLD",
  "key26": "YKdfEMExJrJ6S29StabLCXAy5QhUUxHVzZfHcvnZ3T7zgbNdKA1xn9gJkgbs7HuDGpeYQ9F5ySWdU8f5SDD1PAx",
  "key27": "4G5J6RvRMckYwziB9ws5FmC6bsotquPyLKAgQ8FC2HUdNqBBpDA5cChoR1dK4DbDwGcdWEPnakPVKDA8XJ9KxRLn",
  "key28": "3NEGqofSKJT2BhUNZ8yWD9ywYvAq7gRppiQ6Bb3UACH3CA5bMkHyqmX3x5w6FgWAyoRtzvmLN3DKdv3R7RfTB9kV",
  "key29": "aTo5A2bxqHjh1fMMMALeet2auwVYeESmkbidjHaDDC6eLzg5qJm218u9GMbuTKaCbCGmuefdRRFMTjJmNZHbomo",
  "key30": "4ZKAYsdZ2UACcLroozLf3VEwXFMNyY341BY4yFBji8k9vHgkaQdENgsfjGZ7MSQNPrZHomkxf8Aqw2hAdouLbn7f",
  "key31": "4YZaATyBfeRVGWq3i5dkwoQ78MFqckt21ZAXrHXxtf6HGNALVrAK4pyyAbvhUq5pvFP5sWGRySvgQVLcbHQMFBVy",
  "key32": "58g8cqWdq81TnviZCjNWMrKMqJVJ1TQerA2bY1q1kT9Aq7PzduC4iKUr7UMXevj12PwK9JBKV9GtYSZ5K7i3oDZF",
  "key33": "4cyguxdEgya2o9KwUsFNMEH2rryxrnWPTukUBmqUaaCHW6uEtkGJw6o5VBvuGktRav1Zvc8j5d7rRWYQnPYMCxuE",
  "key34": "3HQx6gUNhHLL1VAHnzX7CdYzKKtC4KA9bKGDYjcS1NRQyF3h34P6xdGBKuKKXzoNm64h9v65s2FGHB1t4Si7mkRF",
  "key35": "4CzECf8yYciGT3GhysFk9ahjgeZr4Gb7VVuMqdRVqRC2jmk73fQJJqiKK1ceMNcXCFmKSGCy74csibbREWz31N9h",
  "key36": "36aTvVuYYijY7xXDfXC9ebcRzMv69T3cg1XsS2X8Ry1ANkW8XznjyBNDYipYbRyKJ3iKMqKbPiYfkNY8ZK4NPnyq",
  "key37": "NsFVncaKMZe7qyhkookypTMbgGzkxnb5bv2ea65CV3zsUWH3gpmT2ibcBACgaA2G5x4KMFhaHmFt563uwG99Uxy",
  "key38": "3Mq8gZfLJxJoPJdGn9FzMzLWnRYPABmyQvUFRcBYMpQCi8Eadmbq4raQJN8q6Lyx65H97x7zZDF8W4Qqjz6iAjvM",
  "key39": "h3hBT6QFXZu29ZGhskQVWGenbtjuP8K7dH8dKZYurWEA3hahbQ42zPmMq9ETrfYzDRErTbCFAEJ2NmFFTiBQWo2",
  "key40": "Q3bN4ASfgiLUJN1EpscXF8wzydbiEW1QYarNCSCT2ueGFiEaZ6Nf7SZotowQmNWxwRhQZU8pXvSm84F1iiEAjVg",
  "key41": "LNgZfusfxrUwgMSNsDy5sdwA9U4GBDGCxUYPraRcg8fHknxuEd6DmddimKQYkr39pNj4NHPhKq7QMf6ff2v4A9Q",
  "key42": "28d9t1xkRrh1WJWnjs81t5HAkMDQwvDvFZL7bhK1CCgsXZVqo9J3CPCi7VvhSi7ew3C2keFhPxwWK3skeSdy81Rz",
  "key43": "4rD7bYCQJzC2pZZAi18DTYNFCwyaJqcUSfMo5cGBdjrpmFE1cgbqi3YnCNXF2aMWj6k9Ss58uCLTLsdFB5ZSTgF7",
  "key44": "2x3XSUgVEUfSuRvn9s4dEKaTxNYKiR3DVpk65pGGXxknpeTMPhCagz1koNCtL79mTG5UFPe3wKQ2tYys8gUwZ6je",
  "key45": "3XF1dmmTT2TAFze5YH1hUpAVrgQQ54sabymnhj7wv4pcEqAVWFCXGo2ePVEtbytG9Z2AGbzCGJjD4oKrT8EfrGoV",
  "key46": "2MankxZZpbhAbiZkNx8VpiDGid8p7TB4x15cdF64ER9pvUuFPhBwjJLcgZhxPyuyB2w8xnxYzgDTGYuKaN3S6Dh5",
  "key47": "5ftk8n3tzZLAhvUgxfUXF7HTMM8bibXDB5vyop7qjNZtXGyPdgHpZb91wRsYcyjudQfYVGErTwHF2C8c8HcTzcBF",
  "key48": "5aFRTTiM4r7d8o6ZNNjXJpWf5DQHHCTR3PL4xtcEBkEE9bZVUNGqHxK7K5vVPn1xkGcxigWm3gmK6DWvou3F7Cwh",
  "key49": "4VrnPBXekQRgLcBMC3y8zF71DptciPME9RF4ASJZ4BTL3GP4BqzvQknL23dbbDLQCSD3Aw7gWKVpSj3Mfom1BM6c"
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
