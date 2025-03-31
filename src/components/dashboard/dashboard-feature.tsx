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
    "4hibjHXxYYvWa6Ja95ph3FEfutFJX9bfqUEBfzExDwX1AG1CnaaV1pYTK3BXRynSDDgZ2YzDFmaUnSCrURyWZaA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BQHdiRpzjwdGGn3w83qZmbqG8MWnQdvYfRUuFdGAo24xhB4AwNAansexMSB46vwzvGJLtRbtjNXRTdVucP4yt6D",
  "key1": "dZ2x8hq41KWdCneX5CZTqduiELqtMeF3WzZTMcUcQqqxPeinC9zsqUTG2ngjmh1WSVrvSsTokvj7H8Kb5fmNVyJ",
  "key2": "2UW5gbbPAX4J9SWPMLxjPNyQZz1eC5UrHrqd7gq6dj5WRC71Dr6wdzwDQtH3AXcKitLQSm3NpW3Uvy8C2CJ7sRFh",
  "key3": "ht1Kbeto5hAbocuZu4Q6VUiNfiBVaMpMRbaunLZuKWn3GvDd668WqD646PMpAmFxpExCcX8KQ5B6dmduPXwzG9g",
  "key4": "3bbHL4JGdSdx5AMecSMMZZvoAQPzx7aZ32JrT2CQvEnNqX6BxPxMKiH5rpYPhNYoBtwFs5T5oD67UXVRRDnVvEsA",
  "key5": "2kWAn2txrtvnmAmkWMjbhzg6GfVkySXHY559JZ2QfXnRdaunv2wVEGR67M8o7UeFqH2g3CGsMAXdbtbatNGV7bqU",
  "key6": "3TfKdhiduJfRUWe6bYodwFPNAMc9JtZEV5nTN5y1xwSkHayhd3mdcJDC1WvjD35TaH1ywZgePJDqkMzYDXswD9wt",
  "key7": "5DhTsMD6ihbUK6YCePnBp89hbgm2ogpirod7pSneZiHj4PpU7RN6peTmYnYJNFGC6YoZg72dj8CAj4WCcpXPavNY",
  "key8": "2RGnNcrzvqdxjbmxzeu6Yjwtf4BqUdAbCCAVYdDTRCRG7qo6R8xLq9QTcMuXSppw7dX3pN2NLBU5mkPVGbeJS3JG",
  "key9": "4bvNm9MdKy4aEqSkkiF3GY9PkDziCtGNYE5CFCmcNxTajszgM7k5NtrsF3vk3jUocW3x3WgzHaV1PWHni3Qx8HEZ",
  "key10": "3Na34BYzvSQzUrR632RegasngMaWrVn9W9LYx8JQEJrApCPaZxWdKwHRAyECURPZPFfbqAcHfMS79eotKXancC8J",
  "key11": "45mvacYxSApgupFgcBNuQGP4tj1uEBX7YzPG42EFNXQc6E5NdFKni7Qsa5BeT72y1ZjVdE7iS1zrsVa61EmPT3a",
  "key12": "2muwok9BbBQNzZRqtKq5KgsdtJYjpZKpAjQN54n5ujaFLYjeGymQ2BTxqgHPe3ZQC3B8h74uNkdcDE7mFAGxfMRs",
  "key13": "4ZNbeJiXxqBnLTNouSUVnuBfSGRWQYGj7mmptmWo3gXCJdEHSDHRH8WjQtkKgTxpP74m5GnsJj4TTAeYRvmT7iHe",
  "key14": "5kLr7XLmFEzmza42Check5TWBb2PP6G9DAtiYQaP2EkeyJ1nA4GzCSVAjoG8R5DULQpwu9ZpcHNMguyGFobt8xcr",
  "key15": "5nChPKEjSgoF6tXVXTuVM5uRXk2TSq4YXadyzL4PRGcQPBg1KAdG2Vx8X1vJQXx5E74trrYvE1R8NwnN945ViubF",
  "key16": "5ejwriKCBQNpQoZBRvPFAa1MMtL739tnvewkr81fQqp4kAdwYhzgsFnqvB4ncWQzaPWS6z8PVSr74CWXm1v4aozT",
  "key17": "5c8hVGxqH8oBiAMFy4fk9WCBGjrh5WLVLXfep3sHvi7fuCYtcUykGwKSLeVHQ2KuiSX4YBNeZtqv6D4YWYkhnaU6",
  "key18": "5ereacNZGkxqbGfW9vUpiFS5MWzcvcpRMyScn39rufMzJwkG42EjmrWSwgosihRFKoYUy4ZWGJzLwU5Zb2LacKc2",
  "key19": "3LL6FuzRL7NmDUX1JqFwmLJ8kdtNxVBomCqDUQpbPM4ZGb6CE6tWB3JonUQuyuqZ8kGjDe2QAcAQzmKFNDeDGdLt",
  "key20": "3NH8F9GnCcXjPincMeCtRpMGM76bkkETxAAGByQoHk1GfDrTTo8nMdJhvA2mAS7nEudQQ9JZFCF6Vscgr6t2rwVL",
  "key21": "3pEF1j6TP2NaR556NSvC9oF7TUSXrqq934NsWfYGFDZmxhG5CpjCPCbmuCMKRTSfVMVyUz5V5djrfyZHJPN9w8fL",
  "key22": "35k6gJNhuipLgmHz5tP88qGDcPBDbwxwW8h7qh2dP7FLWZXzF4mWfSLREkrv3m4mew4VQbmFhEncYPSudDnBYU3e",
  "key23": "rcmzvPt8KmuftWf65T6vVtqsH6JLMND8gTPQZEe4jxUEd3DwCEzYtekx4qaLEPKNqG8a8Mkt6h7JAGSZR2dwDGD",
  "key24": "9ZSySmdiG2cSJ24S94A7u93S7UBJ5oFqc18kCc35sEobDHiiWF8zx32sPRnjUmfSvEw833DNQCidQdmrnHQpkTm",
  "key25": "3FsNSuXkoGW9QRqBU7WrPehc69tYjUrdJxB874F8MQcGnPupiTZ2HcLKCdF59cz493zE8NNLjSKaqArLTAR8rNx4",
  "key26": "4cj1rmMwWwdQExVmJWKdZm8MeSTesq8L9JgMUwbicGWyS6ekWWqMDs6NYppWFW3WTAUoEuvx25xreo5QDQFShUq9",
  "key27": "3tEcRYD6JjHyTiQ1WpLTB9LEjzA4a7yVfTBdYDBiKCiLNrsfTrhk6JRqdKA3jjroHRu79h1v78cnrYaW8xZjr5tN",
  "key28": "GMxCKTdXT7pmxohTcunX4A4vsBRoQmaRkwn82GbxiRPnX54LGMAvdZAgZQ72tSQG3Dk3Gu6uxCNMar2Qf4zQcgq",
  "key29": "41dy7Ms1oLe78E6boucf8ayWB2xCb2UwHvq3su7Af6B9Mfs65uDYtwXQGLRk8fDexrxPHmNL2cC4j3FCzUe2ssEz",
  "key30": "2TQTkutWQHCfgTJHTE1Vh12Qzdc9b5V44ajQGhgrWEjAqFwu3TXbYC36j5AWZt3x6AnFHtKy41SG9iiDW1HNWwef",
  "key31": "2yRrZ9FyZmDiPL7kFEZTxrdGRc1A8H1fRwQFbNVgHng6Bb5fkMvxW7yadYRQUZPaXDqGThQewz1PJiwRJBwTQBp1",
  "key32": "3F6McTTsMemmmJAcmvizf3WC4hwUupox3pZPsuy8nPKFVGZkb4J7HQFCvsMG1UvXkAxXz8FjA2NLnNMyLDovBYdn",
  "key33": "3A5ZQXG4tnqwPKhyx1MDJwE5iaYBdfs4b2P23CUPw7q8gNKR7tdgtikfGPZFETHihX7nhK4TtbEQ24ZDtEE1sMXg",
  "key34": "5U8gri9BS9snpXCo6raigWTBz8jSFwjvsosAChNstwvUEQdvN7sNzYKa9G22K3WszpFSbvKUKyQPx8KvnnvD384",
  "key35": "3gmUtAXfWQtxeRZW8vkZd9dfw68gN9MYqMd6KvKPWpp71LNPE4umF47TbYM6vv66zP1A3HbrpZJ7G9vZyPCEBhb1",
  "key36": "5W3LVmTLPFZThuScWX78yJAbhgFPx5bNBAcsBYVG2d62YqDBeDN7sXHSzkC7uVWvSCJzam6RQxbY5Bjfc3hdrsKq",
  "key37": "4dN7YDJXiCdBzznDeStakM1YYX9Vvtt3W6BUsjPBpVR7r3hgp8XuFA2XFj5f6ZYU4MEaqqdsJCRbsUWNrBTncUkm",
  "key38": "4KUBJ6VL9PZe6TnpMx8Vx5z3EAC7DAFnYU1ghKvrRpkfCLm8gLV4XfYLb7GqRWNSduZncfqNrw3qQd3DRUk8mYzD",
  "key39": "4h1j26xGdaeDMQwFfV6BwR44o14PrSRyYbQ4uKEzY9XkSqL4GB4BVUapNcrdvSMMFpGt3BXpjBuwYH3FaYoaVNg5",
  "key40": "3zBDj7oczLzDJCTZfScMuz6Q72bozHdHhwXhxrCHaycRer9D4KPm1afwkScLHZnHbkRp3NGewajiYKEkA59756jj",
  "key41": "5445smbBVkVKYWJzHQsZE5yuZWG9x83Jr36a9YWYQW15CzVN5QxUdjgX8eE8wwZzyxvtzE7ea8ABH82YABdsd1Ym",
  "key42": "4qjoWfBaEHFcVF8u9nxmzwfm3QHrHaowcGoNcys3FtdZMLnTrSKx2PrspditEgmrLC5BrgjLfvsW6o1ko3Y89Ddr",
  "key43": "5ZNvye496gmRfhWbLAeWYLFFRESUuPAjRVqs7ev5XqDKq7Qg4cn87ev1j6Zx2NvGXxwCGwyVh3hdhgc5XxnqqJjc",
  "key44": "GHfyGoHpunLg3MeZazz3b971vmBUjEfoGm72SV7wwEpdb7iH35a4WnKuXx4gbAKc9tsNL4dE5RjpZEtpyRyCr5r"
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
