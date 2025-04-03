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
    "4VYP3CeFvUFF9XAS7UgTwGLT5momqKKiFHGPoehCDba9VLzN8JvoCwQfMatN8pa6PjNMKyGiP6DtvHPFXfgj6oH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caeQwm9hS1BEtMe13dzyWUeUPxFoVhaDHfA3DcjjbBRSLA1wNQ8MuPwy4nm9wC5mEmXFoJRjiUonE9K4zhsZpVn",
  "key1": "5si3z7GzpN63DEJmVVxFdhCmKrCdTKdnzjXv7cdxDeaAvZsRhyKPQEUz9ZYyqQZereBVSDHbTAz18ZipaAqCcmpw",
  "key2": "4wQAvafXHyRFzA9Nvub5A4G2QgBEDRwQ4K3hoBDHsWNCpi81BpMBFeQZBxSW7cfunMAayCDiTS5gD7e9mtNuGbQL",
  "key3": "41Y4hhrUAGQ7US5smpmaUC4HAXr1fetbPXh1tEc1FbKSy7m2fxznF24HHVsRp8a5X47gMq5Qm4sYFKvysmYSUzBK",
  "key4": "2qzpL5sQuv2v3d8b3jsqUPNM3giRVjMB8n8uoidFSXw1ZcHLPrP7ZtZToQ7msJiwCEhfnWyrsjGNDpEuk28KkRz6",
  "key5": "y5yNqbpTipkjvsQT7No3xHKpFoHSGxPDn4yXsZ1u3QoWKKEYawa6mn5VVekq2JduxGcxHK4hAzsGYxqcT4Qy1Dp",
  "key6": "yNSwkCRVKMgTtQ1cAyLitpSMQKrujG7EnfYWHaLd5j1z2tX6QjVrjKbS4gBu2mcCtKFX6mgNvTcSHLGc2CpZGYd",
  "key7": "2kZVLvgrNmRdS6HcJqVcsxxvvmD2xV3pEGb7hPXrc9G3uZNtPZK595GnutSVK2Bpt4eZvpLWmqwFPfpwJRs2kSRc",
  "key8": "2W7pqqxu8pigYaLLKpc72smz3TgJgx2xrJ11RuNWwif3hK9Fg6SKRf2MtPSsFKQ3QuRNaLKYJs9kvsSae6rtXdQ6",
  "key9": "2jJ6NWCyn8FsGmnTg4B6ijgTJ4bniQMvjTPcrNzs4aX5LtLsmyvYX7SJa1Vwosc9grwywNnLV3rfYnAbDJPLLJBG",
  "key10": "2BvmDQz3yF2c4ZYNZ99J4kvPkzmTzhx3Qxw2tJMyoVunRBuZeYmCjowixn8MxFQA8rUgqTcrj75G55o6DB4WTZqx",
  "key11": "65kBnv9ZEb7FRsqV7GdgWgMDy8pbFgd8raLk8TtUF1TMkLRnD8owD6nh7TeZAQB5ssS5MAUFtoJvMxycNfP8x5C5",
  "key12": "54ioMWgji4JnETV6ofmcu9y3xzLZxUVcArGPdowyxMNmT4MCnSzXeU9cAgMpyNoGVa1W99Q5WTcBbrfq1zSxNGqC",
  "key13": "5VRtr3YMEXCm5F32qd71ffDCU6Jp2Mi6cKddBmB63NStja9xFBFYmKnNk44vy6e9DtiGjjy7QRcws2y4crp2KQN1",
  "key14": "2GMW2KZLehymizkVQmEqsPWzAHfzQKDVCnL3iC9g8eEUjrCFCKeatXBUTHXieqpneFiRvceP5SypgBsbRQ1CjngL",
  "key15": "qZ3TFaXDZxaxLWEb6wjSBKFLJ1vUT6EkZQZcRYNJuaCUcw6eE3Y9iiYfsHcrvUvZE3mYLKMM5rj68WjauYgxUJQ",
  "key16": "26U9qcwJRX5a5emC7wmQkmqGLtJjik1EkGhxeNzqT2zuCvn2gzFVnqtKeHbqYwYX5MXt6q7vQF3irpwifrTnjbop",
  "key17": "4iZL68HZuJ1nmoHMizaSS3r4uRAbHrrzs5L5YhHQDdZVz3ArZUmM2T4ZDJ7fRe4rw5LvcCtKEiXBf3kZRfSqqzHN",
  "key18": "28V1MpiRuY49M83CotuZELPPTc9AgGKJ1hRA2gekF1ut8BoKanU9qNxzTE8XmLAgACX41Rz9M6rvFbTpctx8DVuU",
  "key19": "52n9fXJwu1upY8AsybviNc3BTSgmosxjp7zF5neeo2sV1dxULa98ip3tJJbhEbxnetxZ4Q8nf6ZpXDFBU6fXiAgd",
  "key20": "2C6CHrsfWn4YuKT9UaeRykHJfvqVdkGwVPQFJ9r1S6D9VHZ6C13bFqDEEfRkJ7ewNWCNgotgfjgEiqkJL7C7sgEP",
  "key21": "ckXhCZJTeRxwUc5Lf9UHCWVMBUstriqvUg1mfraYUe4qZ5Eg6zzX759JhLa4EJTSYznvYwBU8ThUYy8iWBK183M",
  "key22": "51kxW7bLxJT5BYqjA2TkdnVhVPzzdvitnYf7Vysh4rHTPDqZoZTSCgLwL3zvnANsbwvKoKKtdDnNPmrL91SRD6n1",
  "key23": "526NXkJBYErfWagFdHQ1YFPDs15JgvoaE3S5VZCpysXL8kJdWdKaoA2oHvyewuLYZGfkjxWMZWE4bcUqpTGXB23n",
  "key24": "48efxTkJnxLf2uyMUHiy1Zcu8q3LxEbnfUeLGYYLYEp4FjFVPYexX9vxwZPU9rxSzJfVJjZujrs9dGyUPyNAwMQv",
  "key25": "HDVvzKto9hkvg95BwPMXWFXX1UhuHr9fHVM4Bu3Y9e4KzmASzVCZRAGcGEWQPweJ4AT8RARWCU3yhMdwugZfiDT",
  "key26": "2E9q6fZ99LgYJ1wxPBWSXiMr83C6rNFgRTLdkYFxfrt6WsctFJF3czaCkdDw3DsDm6u4Y6VdtzjAmicfpaCUckgG",
  "key27": "2rY2hBH5rbydcTyfH2G4NQJtBKncdYYSWuaZzgftgZhTx5GJBEhVDqbcarbGZJZYGab1H7LmQVDH9SeZcXubZU9R",
  "key28": "2K3FbvToUoifJmRnqxPoGcEi2ePtoDJn9AoyUFo9KjdJHWLQ7ezavpTibKF5nnuzW6Cmqdh62Smo6UgjTkfFbmWU",
  "key29": "3VNCrtvYd6kQpiacFHWe4dXptMj72GbfNd7VpUSgFNCZzxpYxrEq5AHt1vBLvnXzF7fkWfEEsMt7qddJGbKcH3A9"
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
