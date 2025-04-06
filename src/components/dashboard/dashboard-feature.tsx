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
    "5iVyCCwgcqp7uzFaekTqisdP8M64jiUssRJAKgCi42pZ7CtK1FFnyxfa7y8c5wyxeaahKsEDt4UyqgLXysLgRyB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwpjsP5eP9HFj4Y9PQdGYjZY5LrgkQWmLtzVtzyiEiNsUVpY2PPFwB8bgkHCU4x6bJEAPxazAuEhmR1E9ztXKH7",
  "key1": "5k4jttEeq1RXHAYH5pHx4Hi8FkVFE6B19EyTV9YmzosqC5HdWFMiodn7T7qaQeoFtgh2Bq9K3UvbcB6vzXNPPMSb",
  "key2": "U6syim6dzWkofvNgDnhwXMbB1CBvzd8qBqZktSwwHBgyDvto8osXkqBDiQYMKmRJ6KkdX3JaAy1b7hbZaGDqNRY",
  "key3": "2sJfGee4rkczmjEgf28XUa5iswyaXo6TQN2mhwU7RtBahRjoSu8CwM8tmRS9zJhgzSWVfyJpscNKeGCmXUfdJ87V",
  "key4": "5XBJxo1qh4hcrxj9KDYsWWdA6TLjrMf9FAFkvSrsmqwj8AzFmuyxcSGgNszsdY644BZXWTfcsN1rgzCHWERosknF",
  "key5": "BgUJAxcstV5Js9QYCJRr6WrsEd4iyGxR2AbiYpzTKNh8579jzMV97wHTbDHGNieok24DBVZ97BM94RTUMiaihJ9",
  "key6": "2md5aDhyMihcqd9gz8zBqJo763A12FffrJRrmwjRH2Uznx4pw4Ext7kpxV8K5PVs3fVK3SYmZYdQ5BgKfkjpafDW",
  "key7": "5wX2rsPNkwXJ3P6rYi13y1aGM8JXbWWDiuV9aMcutLLuRjHG7Xh72vWmSLjijyzUAHK34DtqZ9PUavgBspGJB6im",
  "key8": "2XhbKaw9kuUw9wFQmygbbKBpXin7Qq2ELa1TutYbuNw4CEjGwoMxbKFxpvY1HuwKaFVkFFoBTB5Dwn2tTqeFG8RY",
  "key9": "owSGrBXDmbrKwkzwu6993GzRZP6taKGzCrMVfk1DFtG5u3kfcFroXnLRA6VaDtUXveHtPpi9Ys1ALpRh6nxvchs",
  "key10": "tpVgaWtGSAvs9RYcShUZzHMjWtWS6De9esFB848qGY6zW7H5gqGcSPNSzkgR5HquG3gYiiEebf9s51aivRq4Q9i",
  "key11": "4zD3iBbRrDGE11dcMefVcQtW9h2vmdDap76NPL36zKSguKQ9CZ5ASNAk2aPc1uUHJdbTdntaxqBjBspdZiM8NQC7",
  "key12": "3xUeE8SXzHZZxvS38s85dGMAFU9x9AERP71FCH27oS4mXph5TPYN9YuKMH5zE7jfbKs1gQuqbUzf7eLBBnB5dmC8",
  "key13": "26tfhqirnaug9yN1PLu3FmKsNM4nntEhkfMPpjH1UtjbD5UYC3NABcouBGSGt8S4V5NohFyhrG2YA2CdiH3ExuM6",
  "key14": "4Bt66riAPNBpzZLhtNMH9GaUkotB7eMX39zaAeu2UV3MJ9Wd7UiwRU2p7sAUE43Y3CtQWfnCHRYEKBFhhuzJvk9y",
  "key15": "2qcvkfHYF4D7Y9EKVVyg9JYhFEUoFPsE3b8iCNq4fhfRFtn6UqLgQvRgSdRQRfUyWNHJ9iR7e1phNePdPgNseC2Y",
  "key16": "2DSGr8pzjb9wX9kgFJ6K2QyWe3Ae3tsKbfto6X813kdT3qN8ntLGN3bo7GW7Y5BSu5vhTidDpiVLHfhenbxR5ofn",
  "key17": "2PRUnu3PyJ9zTeo48TwpvxZkwszZbfgA2hk4wYA7nb72coEG2k6x3Y91SviLCv7Q57AX2sr5mRCLAAfqRRvtL8Vn",
  "key18": "4hjmx7psjfiYiC77BNTvPxi9Dk6QD4bhh5hSWLvhgpkgeUULx3wnXUuiWNKXJ7wLCHNUnHe6QfSC9UCMZEpYMKZu",
  "key19": "24od1SQCNWcTcqHibi1C2dtTcFgRX3wuYYKUypyBcGhMjnQgy18iBacGeBHkMtN8QDoqHdBF4tt5765cTgbatmoP",
  "key20": "4nm1fE5fiLxxHiZQrtuVK1kVohsezUUXG5hwwws39MnwmCZU9w4gFW23Np1WjJvXFEkoNg6YqZE16LcQqgPtqrBi",
  "key21": "4RZ4UasU2mtigohoEBbaYP663KXDwpfwarZFVoax5Cp5FbZ1CL9BF2XzcgcjayewJZTYiMLVyKgZAoxm63W9HmzG",
  "key22": "4TeYKLQMpmc6bsKfxrhKreqGHja8N3BWPrVYWwMY29ouaLsGCfgWEsU2Gj7gP4FHa5LvySdbHP3sdq1MzVsdJMek",
  "key23": "2mELAJxa916kVzZpbsVvx2hjeevQb9ZzPhe1bHmm4w6z3eKSjQpRLDKjHZymxtxk886aeVCNpQnv2Ns4duFcidcT",
  "key24": "5tV8DewZEdmgq5MwEJk3Z7UoEpzxAGj2AJsFvtno2uiK7Yfg2dtK7asfjT9CfyfRgzPcEBERkk4HquE2BrWAMrrE",
  "key25": "3mkatbHZW8Tw2cvu5Ee3ZixrCFrRfXyT9QeDiS6wUTpmeQxMB8HrsvMbaswR42fMUHWV7bsQ9QBAQW5ix9cGRy6n",
  "key26": "2XpumZy8sSf8krS4qnPGbPBHqgKMp1bTx18GkBZ7mg32CiQW1uEu9A4CRznqiTZYoC6GbZ3zpEDjfarJg2mGBctr",
  "key27": "5E4WFC2jbSF8nH72ov91yt7BiEdbXE4HkedPus3yE83BXnfycXSB5DSAT8BjckJnZAfeTSwZusds9uW7pSX2TLLr",
  "key28": "3perugzEhEqc42hxtY2sAsHR1UN5zz3GADdMmhauRYK837pmmALFXe4yfZh39uVC5y7AWEjTjeSkJKYFEdTycmso",
  "key29": "5pG4LbgQv64fwJ33RyxyLogrQwwUBEoTPSh7XULDq2BeA8LF9hNTt6DxGeSNYuM5Zp43WP1jdTG1eZ3Hb1ZrzszQ",
  "key30": "3AjDnuyChq3PdrVqFNbL5SB18o3F6tqxK5mGS5qNx9Z7M3HqShtESPBCoMoDzJcvdVAC42RbAdhiFMiTCgoZK41h",
  "key31": "4yEzhD9FFdMbjcD3n4gqyqPoFsyER7mXzGW9WJ94gQTVYGYKNxh34ZhuTXrdcf3rf7GzgdXP1GPBBbauWojXAdyQ",
  "key32": "2m3jcwdvYZvcUjMgsaJUFM8gdSjCoGdifRZBogtQRhothfn2wRcBkwojpoDGr8kZoGgkcEuvMTe97V2xZmPPaU8Z",
  "key33": "371Gpk2UzszdrFWBwPNke16aEc3cwGhTzLB4uvQepps8LUS7mhpKSaSDWR1rfwtrmGSFAEG5yzY8shUCSivjRbwF",
  "key34": "4UpDMVjwQbfFWvi1VVGxbyZEugLXtLX8qcR3mmVifSUqG84ZPdkas9jugE2Qj4mxJcSczmaJGi1dZC9j79dcrDVw",
  "key35": "2qqDfJjXmdZbT8tqdKDG77yHjHwGjdkL439gVQ7jKzEAunCmgDm51KjqnXoSUvKT9tLeeSmjK1o4nt7o3wbJe7P2",
  "key36": "5ow7Kv9m9RE28SYDALDNFm7Y3JvsUmgH293DhBAwwRbnf7ErhaBE16zocGVfxJefgZMVzfZ7MZPmfywiPMWDtEcL",
  "key37": "37XqECq9cQ5vkr3Dbm2c1MSkubk8tp9sqE1swdvN1VUfKLxLRzH8864Y1tKWbBu9QwnnSvaZMa7BKzosTHATtZbE",
  "key38": "4s2bNuL6UD6qe78mi2NPaZuAXrtid1dFZQAKQhs5Kq2x3TMxf1wL96FF3yHYKuonRN9zAGX1fJPvaYuo1kfciZtS",
  "key39": "22hkJHorV8F213v96n6UzTBVQgTFVnNacoa6obQscM4ThbPNYdU4avohEMa5d5GtvgTgwMQYY8SmaLkizdaKEDom",
  "key40": "3LJzJpT47JgRe9H1kDBtctX59uQMXA3v5cK9GwM1JTx4seFdsAYLNwsZCgDrMWZri9KQ1MjYQzUa6daqq9hRxjos"
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
