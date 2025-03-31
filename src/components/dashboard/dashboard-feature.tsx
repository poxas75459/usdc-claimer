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
    "59cSuR6C1gS4ecq78q2n868pKCBfAt157Ty4Kg9duDxRho6LbEKwfCnaebFjvsDbriCZRb73yB4SxhHzvq9UA4Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EpXPGeCnSkZHaEfiBcw1Fq6KqB3uSsWUwN6T7vjUdQ7yqnJufu51tWAcnZ6TNoEBZmp9eqFGJeV2zw1UTXjpC5t",
  "key1": "2jjPEssNjk7KEEQCFqRmdbxsN9XWFmivdYGuaSz2uPKfPBeG9WP4pTP64uR9HBUMobTNvbYnaBBDUxidPk1xbGYH",
  "key2": "2GVTsCWdH6grbnuaJBDzMcumbjVjNcEAgZUC1JBoyBiNmjpHNMyZ6x3Vnsu75DfosZbgn3WDjaMPvREdn8hMF4ZK",
  "key3": "26BNERVSyuvBCGgdZsSE5aLgduBt4K3WPVd8gtWX7K8fAnY9g8EGa3WR88BVmr9niL1d4sNsxoqb5PJYHmieAsdG",
  "key4": "5owv1ksQMRbcnyLc432ci4rPCGZEXibestPqKbH8yCvoNHEmjME2FgC44cvoGt2T95sqvi3yD5Dpu6gij1GxY3NU",
  "key5": "789WhL82YySDCbqJ4grTLhQ7Uh49KaypmQZfAg7mRZLYC6agbkyRyqmq1Ti1SW67B6NEPBtaDDXu2cp1Y9Kvvom",
  "key6": "zYUGcMSiCbvK9xyhwmdioRgHhNcc1eWTwTG8TFoWhcq6AmeiJG5nN8dS5nxuCjvnaJF1AL7YTW6wjk63wAfUwyA",
  "key7": "XhwUQAktJnCkZ4bPooTgQnjhMsTm2qW49H82bgkYcjCD9DPutZMDyGQbAa7PzdRekwUKc38y9vMDwV7ix9sNknn",
  "key8": "hiZjZMchxi4kXdqvQWDuENXr1sNzCLBjnawoRdE88Hd9XswfJJ35zV1D1F8dkKTRg9jDhWHcNo8F7pvG6iAUW99",
  "key9": "2k7oj19zEZCrDsqzmcYX4HWVdKt1v62Y1f9P9cuiMpZxgYKKrwaVy2wyYMqD5hiAYzLLPNFRXVEvVweuv9hEFXbF",
  "key10": "2eupAfFUhwnYaZYkVm3M6Hy2DGp9q2D24Wen6qBtTSU1rt13r5xJcZNxcbxsaVN978ZWYNY49JFsFpMKonv2iwER",
  "key11": "3iYV4G55RVuCdHepkSi4mTqnCSG6GAVPiGH5Z8eq1eZLfzU3mVoLvyFbPNhkkkY5KsFTpdX3vb3Mt5kqen4Wxwh5",
  "key12": "3B9LbrWcFfp2fSCu43xY1Ai4scgVbR2aYyd7nWa1HPHNifTbcrcYbYs6NckX4mNXEqtaBoSBTaoGCg5oe8sqsJYz",
  "key13": "2bzNSqXNjW654CHCBqpDvapJLazLW2Lz4Ji9C96vBdQUV8zEqnHKAkzbeRXDdMrvUEZSuHPwDSqB9wyi24uANTA4",
  "key14": "5zQAoSu2aQiwHgVqy7JV1EMaMCrg4YeZcM8P7AXDK5EKRDU8ifs84xurNoPcdQsK2jSWSpHfBqz6AePmgdUEoBHd",
  "key15": "2sUPP6YfKzQZARCmZyj8D5secapUv9CJsHS1tJPynmTg2nzXSSkmNoGY4JWyvHpf4rouj1CiSTqs8eS9qmewf9vf",
  "key16": "2mQwDMHdCA8HEhhjCdpNFZYst9aCTzf1LAy2tjdZ18FKGpR7R8CTS6Nr7FiNTqmRrDX3FC4fKT7Ttd7TAfVAmadN",
  "key17": "3JBo1h8nbjpM1aWPoB2gge4Q3U5VvPAM36ykCyTEu2gh1DzsqJ27q3Sj5KmqesFfTW3H2DRGVBaoYsJQjxna4ocW",
  "key18": "rU7gmGqoEg4US8y12mLB9zamGJrksFS6dZR4n5ADEf5pcgjcKNh3uDMowg2ULwUA54DBNuCfusk5DU7P9xC5dpy",
  "key19": "H93no3h8buV4R4xFQgbRCnAGP25LaxG7tA5RTFXgYvtkmCEb9pg29nYFBdmxpeafdrpqbnsSGVmVgA4FDBU1WVF",
  "key20": "42YohW6hZzcuBvwE2eFR4U3o2DgCUskyBU2jH8N5jtgqDHv1Jgid7whz4cmCZaUbYRvDaKmJcr8oWu4uDChAngjC",
  "key21": "FAryr7cTxpAyPdb1pGsCgy3RYFtFAmQNXYixpVMAqp6VCN3tcPa4vpsaFukS6P4xLrTf3vFLu3CoYun9mzcXsYV",
  "key22": "5uRJvjs1mqFj57r8S7TxbUynuGbVCxgXsvXDaq6wYXpusH3M24ACjtzeGXLEbq8WWgn7VmWsFgsTWYv7usGuEYhq",
  "key23": "4WkzTgVUq888m7wSjt7NXdBzuy3vY7DjgTKjQsYAzfgqcgjijQXxhArGPEpgCftUezUjHYc4QxTKC8hobWSv2Va",
  "key24": "4znqrbP9np9zYYixM1EwBJcxMDnu2kztCog3Bm62wFbmfeWHPn1XKYFJ9q9XWfnXFy33i2XnT2JJHNLWNMsqydeo",
  "key25": "4MxjmWBzwW8hYL2v2fdgkdN2zNinvkv1TfyEKKmTNwgSNqVtLJg1qPeQfF8oknM8axszGr9sYDZKhx5StVrAkeeC",
  "key26": "HActaW6WiMvtH6pSyFRPnS5g7JRr7LuAsWFeRMiFzUaLitzA5hgAbgjuLYRzf63LHCpdMFtePzLdnLe7KEzURGT",
  "key27": "39Yhg8GEdpmMW6tGBAUcaBLW2JFqaod9URbjrW3JkMKf7uPbiE4H6CRJjftnyXoGxhNRnskDEruCHL9UCjGK1D3Y",
  "key28": "64FMjynDA7stquknWLBfVvi5PDzGefPsid4GNw8751sQ35emuVFatTeaNyRRHXHxDxTwpvxVChNtAtuKxYdxEQvJ",
  "key29": "5P75ce2hJQFFaNzmZ8i5W3JqdWdG4Xx7VGs714QwnQYhSwPexhZcYiFPNLr8DMEEudpJ2EDdfk1GxAmPhdp2dtzD",
  "key30": "4YJFAjdHAyRanTJiV7aHfNz96bM88nkWx5vcQS16aRwjyuoA2XL8Yp7v5EaGiJo8qvKSYZ18m2E9SftrgS7bH5GN",
  "key31": "3bD3jRvP4Y3iv5jFHjVNQ43pUGGsvK5Jdd8FNU2ftzq9uLgnypdcUNSmKUvFJeengrjnSGT6o6J85qd5J4XkNiZR",
  "key32": "4jdd8FnBcJYfwP2NhKwVm4on49jP8V8jwYUENzVMhxKWzbJXDNJynQSGUKJ9JTvCRwR68KLr1M43TMiDh4LCRRpJ",
  "key33": "4VRkdNu4Nb5hPjmWBSd84eYntcQWuyJ1zF7aKFWJPjxZtePBkGL7yJuYzRNrE6DNkig1phVR9csWW4C8BNieLr7w",
  "key34": "35MJHxTJtWkgeWAz2KN5CGn7Q5asht11LRAPGuK7ZPMKKnjjc6XAcXceL2AYuJAu7Cn8EzcTCg859ei6cYGFm5Gp",
  "key35": "5rzSG9C6xWXW9N8YVaAb1ukqpYo8fRUw3UVRyNA7rEhqjn69oZ5DwPdc8n3E2ZvSX4Kohzdp4RBVPFytqQgD9GU8",
  "key36": "24ap7KXp5zEspykSGMnw7QFyHVyxGJ7ZK7rb8q7D7ia3ouoVgKeM3vpdBoGfzbqiMFLYiRQ5AmpiDQmFnHwZYgge"
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
