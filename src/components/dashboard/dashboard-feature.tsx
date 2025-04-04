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
    "3BMJz3rkcCP6PGTnJxxHk7Uk1nocgTkbmev1PTWaGH3a76v4UYtZD8SSHBfFPpQoPJ3zKHyw9UG787GazXowxgLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38atJ73ymrTbyUzyTfZsWTxo1GN654kXA4Yc4vbHkiheumauavT5DwS9Y41DLiro6nC6VHyhTgMD8WTKpZgxBvJ",
  "key1": "5dr8VmjcZDscGrDWcrGpbNYDPSS9uGiiWPYv9aCDxBvL2jnp2My88uXoytCactTBp48BvDnKqPGFhmn223csef73",
  "key2": "587XiRBdRKTxja4aJEdgm6KCwLovXrzXQN9UsnJu1vnaeXHwU667jvSRrqGhF96o7zRhQVtuWUwgbJbabL7eMzMc",
  "key3": "5CdhwsPSeG9iBmfZYhR3UxY8oNard9Chm2szYTbgPFirPseCFTdJgB8vafEnvxEi7K2Gc3M96jnaNxGBHDzWuLdJ",
  "key4": "4sVkYEVwxmF4UqnndaVxPwRf2yd4Toa9nLA1U4jyhP5j1JVHPKgZUDhwWGwBhsJRRfhSuRAZCz5xVmZAvS2yU9RE",
  "key5": "5G68Xbrgryj4dD4m9szk6aM9Ub9Kx6H3UQTD8Yd76XxEGGpPRntD7eJXpKrvxdivLVDtiEizDw9HSZGd8h2aj2jg",
  "key6": "4XPKnqucsPJWJydUVEvZygsEYH8YNj6WFXkFVrN35KmJ4uZEmBMNbmZUu9WFJYPjAkSuEM8R4BMQUfhUL4E9PwBQ",
  "key7": "5vtmQpWrenZNmy4dbutecHBSJCkQ9wWWQccUdvCpnQHLsPDtoWe9ntqc9WDJc7NcMYT5vhhB8grZ7Xv6hXoCfCZg",
  "key8": "htZ5rYcRbYv5N5qvxLtFZ9rfHJJH4KCf8vxtEQxnf5Wko4MWRpnCXucskhNyZnvASjrV9d7WfvU6he8EgfNCD5T",
  "key9": "4g9uyeDfvNehiao27T42bg22dQE1niJvTSF3JP1nEpUvdStF28z2rRn1trRckjov8swESzggmRGY4qFpZYAesQyX",
  "key10": "kjVZh1bKXGagCv94c2jAvHWkFMqHePm9eLvgwR4Cif8xuWySLFUYTEbB4SALFryLLEPczzPPFeZjSVoyctBPNLA",
  "key11": "5J41XeKUY7dBRL7zYspPpKWdf6nCcYERXmCd52NPwzaPNFHe1Q2RGW2pXrUxbzfoeDLycmjSKvqRrvqL9GKGR9ku",
  "key12": "2baaynUpXo3wor4GUZi5S4hEd3DrUrfuzex3sc16FYKTqxDSEMLwdSrTSJWPQB1vH4NoraRAoo8F5UoNL25dqj2i",
  "key13": "4eV8xeE9sf5AyjE4oBBvezb4xHVDszUxTpsxXjKSRNhGjCjwUwrAkoJJXMf1Zq9rNjDDFX8uB4S2UYBzzD5jRodK",
  "key14": "4wyFGDnQak6Wk6f17GYAKSpE5GsCe8yeR3RQ2iuHSVZd3zPxMAg9rGDKGqWJR69JuKd3ZfKuj9nWYCSxxRG19eNr",
  "key15": "Mm3iEytePHxevUWvSMEnsLpk1NNxZt6kKkC97bapeHsmhSG9QsPAz2EAEdxxsGNuGH2mxN1mL6JcQ3abWTfi3uR",
  "key16": "2DGDVNPW5m8GgDAoMSVYfBbbbf9UeUGHQUaTDDzUXqew8EMxjBLhdNTrYKgnkt2MgYUt2ieUXZ8pLP1J3ezwLq8w",
  "key17": "XeM4L7fvbLnLchCyMjxENeMBaxKuTSAWTbhmqzmPoKe3AtzHMd7hjZCgTmhWa3CtmJtUsn9xYmj8KEvtXJrpK3a",
  "key18": "9ksXMftA5VsnQvnJATS41NMYDDH8ujvuVVeFpUpD8ckoCNTtqWbJ3r3uakeWQULpZD4KnLYM8sYMhxPSyM1y6q4",
  "key19": "4aa7QVJyuJMzv8HYoFk85nqMiCKENN5ZVDv17iHrdiWYTRJCmz59Yg7SEhWA73XtLjVkuyZm2S8aWAnDQZqJwJSc",
  "key20": "2Y31FbPoVQ1K4pSvsYWmoyv8KTgUwYnduWBWyvGmLXEHebHNjs4dyJiidZ9dn2VuS8CmSsYALGxy8ZmqRTLwrh7X",
  "key21": "4QDnq5FXxATbT4aLniheYVMM4QSbMQbouRTdDZdCDtGUsbgX858EjT8HWp4D1QwsyQqEKhYthJKjUVM6sgsch7q7",
  "key22": "5V85nTAPgwCfw6domJ1UoqLZPwaA8MUantZ7cDcnDhuHHifo8pACwntebsTHabFdidEDTwKyVUactWSWpgp28ZQh",
  "key23": "2GCNpsArR4TLvTqJHTxwmmddnPBb8PLmPRqfGR7kQNRLVW5brLL3YW4Ekiixqq9JCrrGjxdDBcbwP2WbrGkAirHk",
  "key24": "42YVJk7whPhCrenYqP4P55wrCgJEmyrn9EE7jQ7W3KK1aCyTSHchz1EYbXyGsoeE2tqA76QYhd1d956Q11NapAxT"
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
