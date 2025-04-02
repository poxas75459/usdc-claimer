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
    "3GSqMACEbayd2rtZskC2fFU5rtviq91TYnESHTsXdB6q8FRxGSJPWg4DC5svSkZ1KfV9ApzWhhMvrn6vDA2eap92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1NgGf2MBWWkUTBkPJwxLQG1KHBHKehz4ji9kdFpkMK2Az99ZbjLdqYydEmuFuczqsdN5GpH1Xjpt4F71E4bjAX",
  "key1": "EhDszPyArF2SHT2ukFhdiKFfzobCnaYwMD4foyUznaQKRfhduHTheR1tYBkbhTRB8ApbwrDXZFDtUorjvtBSx1W",
  "key2": "4xZgEe43DfjtmPDKFaieyHpRqMfZcKWnotnisXx6debunuzCWynwEPWjM8xCS6EWmEA5pfJYZ6t5cohzocVysVL2",
  "key3": "2sjcJoXK1UDZciaJMckWseXccRhBjFZuBkhG5rrpzqxpskkiSw8NuRTPsYDfmppm9EF9TZcBk5C4QhwvVNEtTdnT",
  "key4": "y4Fz9cMaXpEu25oCVi7mN4rFC4iV1Xgyq79XYPkpyCujxfuiYeEgY9931gunGBwgQYKrwJkHgb1mjuS1wkp3Dkk",
  "key5": "S6nn97ka2vVm2VSUG2wCRWbBAiBkUaiJasbWqLxfcLUf8jpzbS5KQbsMgfeC6sm7ji2XGGTyHkfXzRrqdqv5LsK",
  "key6": "38b9MuQPFYPNMbxLpoMt9XMZQ3WkXA1Yg2wTr4hVskZEMwrs2rRyenikHYLXmGCh8fRspWDUND5ya4NCDRbrSKdA",
  "key7": "5jKGqxm2hcA7wtz8X7eBimriTxRZnAgENYKMcfFLSzfftp2SGb1ZDU7ZsCUeK8i4zPsnhuNHQcKv6tPC6ngy6aZ6",
  "key8": "24NuoeWQhvLvKJar9YgzxGnxYADvKEMEtJVYtpQ3sr6wgSEL2Ug6YDGfn4VmqGhbM6RH78R447ojhW3YTQ7La3sb",
  "key9": "MMR4RQqxEpU2niDL6tb6roFwfFoQwQ1bmogadnS6Prnfe286aJyzGRw2rUBNvzZZSpWVAmsjqQNoswqbVqbe1RN",
  "key10": "4RWr1dK4MnTmXxnp22YVLwvpKakMmSMfzPhEzpwwqiZRysYzQ6JatoDovQ7ygHD496hCV2A1sEYBDipPBDVVydP2",
  "key11": "3LJN4mATZXMDCgSYkZcJBHkPb9MGd1ufdBqJpaJWU7jiiGFXRiLGipWR9EsitmHajEhLEvYdGEk8RATeyJBSbYEq",
  "key12": "3Dx2t5ycCaHrY9ovCEGQTrJk6TeCAKLjX1uTriVoJvf55VBKvnU8Sw81bPwyKCKfkDiFb7xhR37mDuU3c8UXi3pd",
  "key13": "2sjvuaWJiHRK6ks87UNGqpk3TpoBhe6mfqYzkXh25oUgckTop2u4sHiiexCDmeDsXiQ5kDQKYrbntukak8Ru6ZzX",
  "key14": "2qVv43Gp7TkP3uaf9hUBYXJhopF4m1ut4JFr5cayK8Pi6QMtAVRMxUW1r4AMTbhgrjQ8eX2LdLFv3kcLipzYZC5q",
  "key15": "2tVFGYYjhpdVp7jpoPPJhyUj8FsqDTuv7ksknAdjuWueKDW4Lqp7Zvxcp2mfgnq2ms8E2vPuhT1pYkF6bjsfjFLp",
  "key16": "5iqA4wE5cMNr7kAdUtDgsVPfviJLpNLRziEFD8TAWVUcomfvouGkfgNczCt4YByhU5XEFK52hHfYjuouAA6z2agh",
  "key17": "npPSS9wEAxg5bH8CfWTPLQvpRHyuAUEdjWhi2k4gaAkonGPdVsP3oijgCNzsBRyNtH1bJKbWwxmkpHSvpypizff",
  "key18": "4U5u4yvQsHtkhUYeqGnRXqEuHf2rGtGQPmDhSdnq4x272FVTXmKxGsdd7J3FAEy3xWHkj5bQYRETSZJavjaN4Un8",
  "key19": "4A1A18wk36rBbHbjbt5khp4XGXDHYhEejBXdTVmMP2AkQkuDNnnbvjJyS2WYoLn6YUpZu2wDmL547VHZZRgdVaTG",
  "key20": "4CwWrqfnfoJ1gJizuhJzedaW4CwwRbFUToGnEsuKSGoRwhznSttK8PcBigHyyn46cXfa1Uu6zSusxBMVynTK7QCQ",
  "key21": "3b6mscpphHYvzTXHqyzHQtE5nvzEw8Y34DC5K6uJbg6g38YkxvBdWT9JztY3X4VUSkm8K7pFPo87SUkMwiLd67NU",
  "key22": "3BpsWbqBARTD1wMj4XPKP8fygn12LWVwY881xHpjHqRASqm9JtuPkPNt9pHqxSe1qyhL2YAgvULiBuREbaY4xg4d",
  "key23": "yLgryVDZuW4zxavJ5SUR6ahWrQEiiR1rP6H6dz11iQ1GLE2cZeZtDR8whrPUsSNsipo5bd31hJS7zn9m9LY8Q1K",
  "key24": "5eaJcEW84TxnH8Z5tR8MotrEaihbVuovtGeifm5u42GeNBMYkJcRvsy6BRHwpNNsL6AhfUipPQbwDfkpdDV8GCwB",
  "key25": "4iv28EHUv1ZatRXViZmsk1hLmTsebSsWbPwzHep4TzQKfT9qFHJXGSnfoPbGgWm5udH4BnikrFFyogt2LemjqGZa",
  "key26": "3DAQgjH5N2pd19q6ve5vnZjkLJhZgX48pfhLeQZwe2qzhvaEyEcN5CLLECQDVmDfV7XtJESs1sSA697Gw5CJDdzn",
  "key27": "5MaDZj3yz7cumukY86GBPozcaFaSyRDc8WzrjuoiSTJxvxk43UPkqkv8KsmrzaUxMoRWeTF4W79Mnze7LiHjTfvG",
  "key28": "3yzwtAZ5PsZfmHBQYNQbknoSArMRWJZxdc9GTJp1uE7HbcoPSGoSs4J1wTdjH9VkNEBNEEKd9nnshzsqBVdgBYSx",
  "key29": "2EQct8xgbD5uxqxVkfWSSKdtQDp6id8Bmsp5rQWM4mz2UrtJqb6km2f6ZBVzrgZ1xX2fyGhVm87WvMNyhvHABiYf",
  "key30": "5F4iya6XEXXJ7mnREKwVKGLi9HxdjqBYvLKkZZJhR4F6n5EwbbUgX7S5mNRT5iigaPvFEV35iPqEkiUz4jP74f51",
  "key31": "d3gFws3dnyzjmjbDwpnRwzAw1yKBTAEDiUpVpaCs9NPepxXni3gJT4da5N55cAzREcPm68jRrjw6mxFR2VNBo6f",
  "key32": "4o4VMuQdEAtUauNEaMcghExswJuwUy87tVB2WyCrqGCifGtZP2zxMZo88LG5uPRYvcwogPcLNW7s6Zra1nk8Db4C",
  "key33": "3NoizzT6XT7KA7Ln1dCU9uXsPp4GFLEzgt7TomUF3tNxT5k9GQwHnj4Yk4rZ9eZeryhfAjL6FWApvgKq3kZKQgzX",
  "key34": "3xeSXXbV6uxE9fN4Qmfz8YWQxsXEqDr3Eg2b6SWgmSrKU2GeG2VUYszxBMDzQE7rtd76M2qRfAHn1bPPZRe2DQvS",
  "key35": "3sTeDPxhuxnaMVUdaXNXwwpkDqjoSAp5GMhpiLj3qd4zhTNmUYxa87Lu1XG1L6NGibrpuVzJY9FjmFbEQ1Fn2j9w",
  "key36": "GQhkFeqszQwLWcSJJSYbedL7VWaaWn2TeD1NcuNfPy48h2WUkE1hG2f2cQMdfmgRJ88M9y7MtLLrbzdMqomAQQP",
  "key37": "3Z1942KNZQTMc5AGMAS39bupthF2fpV3sLqd8v1vAsBPP8ybJRoZkzkUZjkCsJCUZZX9iPeFbDabcsjatPwZx2f6",
  "key38": "5hJmzS62McYqMd52mbWSTP2VjEqU1gjFDoiWoWY97TpkKAQ9ryKBWwVERZoxWX184ewXQvhGPSKf7m2AybUm8AUV",
  "key39": "3pmjTAkkSrUfR7nLFJsUfHF3cNKe8oasSCwRsbxvh85YnL3FRCHctxkgPiQQ8Vivy89bS95P885pR15NFnEzbYqP"
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
