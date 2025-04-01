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
    "3QG2PKGFmw6s1sRiZJiGKTv8x6ogrT1omtn9Jzx9FgjbxqFJ46WyazfKVAoivrv4Z1R9LXdE5tAJiZ3wkyJDKNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCrAYjtsiwW7MnneR2Tr8ETYSq2RESEHrq9d4QkmQnbtbs1FgF5GFHk5YVVvFiLsFpztPMrGdJLGVXXYGd7zogJ",
  "key1": "5iijjUBEamCFXrAhLf66QmGcszwZKDngEnxAXyKVrDqa91oe3WiASFRREaKauKvTFUrCfGBxNivNFAG4wY6TrjGd",
  "key2": "8eaiZmkStu7YsCpt2QaF7BGvFpq3cgWKAFaiiHUghfvg1ghJrV1RDV2YtyDti4hvxiUL6D37pk91gVnSuSurgCW",
  "key3": "4w3qmamW4guemmb5GbQfXchjSvQsEz2zLjoKZMvwncCxeKZ9v5zEZsan5fHR6rFPqbNKqfnenpGNgQe26smSrVfD",
  "key4": "2cYGJ3meny6SmDRWxzZcFP4egtzsW3hqZNSrFXdPzfCQhawtHCrdp6qTbVipnmcsQadywKBaWP4QiPiHwPxTBymV",
  "key5": "2dTsvMJdw8tTPEuDhKiLku2c5EBEJT1Ktk1KM5NdtKqDAdDZ3CPUP2n7N2QpyDmkNR1ZRs4fuBjXiWXS6gDAxzZh",
  "key6": "3ifZowN62Zj3CiqVmh7DZUjVvjf8rxDDESVjwvuXgXiLA13LXgeRQdZonvHVBzY6fAwMBAoB2KV4kt8Q7cqssdkd",
  "key7": "4zUxUudeqiZN84Tm31RWz6D9AUJMB2YTTZTLBPQiu7xaxG54x1raARuWey7Gshf5tYKpLi4fYDfXpC8MAvziagMt",
  "key8": "2cUAzPeZVsv3jNvh3o9r6CyVq7MkcyrdR6z5cp3YdTjA1bF3kVbKgsthSAFgwVPvkB5X9C8mhsjFh4aM2y3vVM1e",
  "key9": "5VKtVq2rzYpU2LgpCrq8UtM5RQJsA7aEzyxyEuwv192hGxVFCEz29uCQavYg8PHf2jv6N3ttwxzDCHNXh9HXry17",
  "key10": "5LKuzHSXUvbUCwdQtmAaXDcVhaZFuydZxvjDM64Z2cUwLC3wQaeWkcD3RzhQbgXxF5prPEXZwEEhrYBEGrmtQTRc",
  "key11": "soT6Zi3rUz36TWBZMJrPdX9rZ7R94UGfxrnQXaGDzqHTshwPCSmuAkW562mNNDvp8RYPRwwwZD3w5zmNfhYZa5k",
  "key12": "2imAf23J3Todgr9fuHvDM1DxKYZAvn2DJkudioKa2XttUkTS6ExQMyvDBAPhTCa5j7oq8debsvTjEPGZpFH8UwUs",
  "key13": "2y3phGAYyhFPutfgyUUdRQtdUoWsYFJ4wazE1aUxGFkAdgp8RMpcPqt9bbJVZSZtHi4SXfpogZHpr3bNzH41P6g9",
  "key14": "42C9Ccc5tMrs8ky79ytKmd4NYS4d9QcqZ1XL5N9cQads58y5Tzs9JRVkma1TKZkuXbbisgeNSPG7HBXYzwrvKdBQ",
  "key15": "VexUMGWEdTGHbWfv59cY8uaPrnafX69ENCLmf5CHGH5svLie1ANvN6dvm3mk3oYVeu11nyVakuqC4g8wMB17saq",
  "key16": "3pnqKn7cjTbyLh1d5zgtTrpMHx6g24Hju3k7A8ZbWfq6wzBxBoBM6iG1XUMac8MpnYsQqth8sFMnVUqjvfnd3Zk6",
  "key17": "zP4eKEr3Hu3rT7Z58sp2VByS9Xq7YBSKyiPJ5oVJoiGdTz4rKTmfdsDBakuTxYduaxPC7pQT8XGdd6XPcKzU16z",
  "key18": "2NmYusHuY744zFdr6gqBsvvMyc6S9fvkahv6oVohhWcnD3TYqphaNn5hK5HF3ignoWm9WkFHWLmr6AHGi8PFTYY3",
  "key19": "65CBcB1P9Y81YQTmCHo6DW746hiVsXNxLsS11w25kSqGdJt5UccfY7w6sXH6F1QYsuADFfHH1K1KUemat6MaQmFU",
  "key20": "5A1D8jJUMUm9F5jzNjv7TqamcDswJq7Qodt31pAjDnVKwvqpeVnXhJMA1U9pDjVJqKXQryxjEcCbWJRa6bc7qxAW",
  "key21": "2VxWBjxTzjsMADG7EVBh3xnBZqqvzHhmGFXaddhNJkwanCWi4S1gi4US3LWkU9DpbCfNwmM5vpGkeD6eSjCRbBGf",
  "key22": "2b7sR6HFYyERYaNyr8NSBo2fNb5kxG9iZiDe2W1cMsmQyV6isGLH8YVJjTGq8qRWqekXTJVtCXmDwiMbKufCyAnm",
  "key23": "59YwKQvfYP4QQziRVmUVVymhGpwqsLGof9i9W7YY1XKitLnjQyMRqcz4H47osEyZK4R5jeDhKABiVR2Xt61qBSXT",
  "key24": "4mkwfNuMmJAyWzHWSBsS5LvFywvi5RgGohwvDpTQHJLYnqjVT4f5zdZCUSdQR5bqKov1pFy7cQod35kwTTrhnKGD",
  "key25": "bcGjX3Gyv2aU2AbBjQa6NazDa5uK3Po6kmip6vxM9GhXVowpRgQnxQjSw5CnJpNiMbepPygF4Syn8QmUj7jY5Vu",
  "key26": "zZP1pbsHNwRsJGonFZfm61AG6yhPWh66cu7qBMadPeiuAkdqMAr5AkYwh4BuDzY92FME36Qe1M5baF16ChBq6V2",
  "key27": "4gH8eKiokijDdKmrUrbNFvBgJGFTT2ZKJfBF3Eup2Gp8gz8i3Q84iqWAy32eoSCumwTRku66vJUCD5fxDuyTZQyb",
  "key28": "AwagDsExFwcxi6jmnemMq3JFxrifTGmsYR1ZspZApbDPbjz3uYdCA85z2Q24wmFtdMTnuXBRg576jUJAGF1kqZQ",
  "key29": "34bcXjih7fF68a8LBXsrvMhNJiggFdMmxSTYzLfomAN8TdWF4hB2VhoN6QGZPTxFKyKKc1Gx95EitxZoKP7Sbtng",
  "key30": "42MnC4oCBXd6aGxL9tQKjzfA5c1vECrKoyttYqjBns5Se1mBTJen2Xn3hWckPwBP6nR8wGgsCNZ2YeHPMLbA6Qzo"
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
