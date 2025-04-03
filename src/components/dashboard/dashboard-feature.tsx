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
    "5W7JVU74qkVWd4XzUpAbBQy3uMUiFqZBXvjFbWferytogZU6sqMXrZpukEL3oVwuLDth3nQyWZsmXiQmT1aid8Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WeHdn8wvZ26JWpahb9hQ5wCFiyd4D7WirXDTaCRKvJhZEDjPPyhJ2D98NT5ugPfCN2mTcStDRbs5kvbLV5svd5i",
  "key1": "4TARk3HkH3v9FptzaV1GRC8XtbQGH4xYc63Ugf99HLrVnsrgH2vTgWwWhstgvpWbtWNf1j3DP8L8zv8AoNpnreKG",
  "key2": "4ep7rBtBorGzxfEir2qyYWmjjjcsvw4212dWD4Q5qDrmpxJQ83bpXzSgenj32Q3EbheH8nE8EvcCfhZiU5vkVDG2",
  "key3": "33j9qmKgeNE9bYKW243ZH14KrZHNzAd9fKnk5cAydQ6jYQYRUTnddJWZ4Xje6JbvneWUFVYcfyer8XiABdWb5usd",
  "key4": "52PDsRwvaaCNZTNrSHpwJF64Fck3uusMpDrYJizTTotXE4a2opaiaKL91DQT7967HQSCywF1qu1Bch3eMG1XmsBu",
  "key5": "E8vKzELsYpavDHoUmX3Kt1vXMMyXzFHC57fgVEWTDZBC3pAFhFYeGTSd8iZDT6e4zjFwrvxoUKq47mbZGC9hYVX",
  "key6": "5uQyzauNKDRDkundyHszqf8g3mqjzkgmUG3ZM8cAQ2phrR9oqMDAy2bhq9Lg6oGEC3zQnK8eDMvbb9wXKDrnA8Vz",
  "key7": "2X9cS2zuHw2z5Y7aVRukKs2ZYRFU9TSf3dwNkvHRuVnMFhZ19mqZXHRb5hJfQ6fipwcYzQTBfTY9ai5Ph3UVzKfJ",
  "key8": "5PKLpFG84GcX4rsjM85Kc1R5V5FCTsx1V7TBJo1PDbcdpjFPaghi24tEA6yLrEtrqcsmKXVbu6qETQF2i9BrKZAq",
  "key9": "k4qmC2r238mLatmDQazdxYnSbEuYvaSQKiEBt4qYt4JHJmgH4s3T6yWAEutCcJeNdbkYAwfe5nuztkifQraJLnX",
  "key10": "oVEDejC893f87LhYmjeW93dE4KJU2YNXJKsbk4wZE92svRE5HzxGRQkkK3Qc1LDoMxXkEMSBzXdGb8rERUyngCc",
  "key11": "2mcHGu1Q5gkzjZS6Lojhj3iMNNL6vZqufLU1tcUD4ZvdRUaFc3yhjjCkmAC7nfFVyjzAJpHbGbUeyqkakaRd5qRq",
  "key12": "3pyuM8uyeVrGGY1c2LnL7QohsDwtAUSoyJtLRz51mwmgPx5FuUerdC7QvPP2x1icWBJKhjfbXP5R9XLxj2SDCzcn",
  "key13": "42eBnFXj2ZqtTzRZEdXobo7gXiTLTowpbDuaP3ZCGk4JzBZoaSsxe875TzaJRgmeomdJEp8kVV7yiSj6RvqNGPRN",
  "key14": "4STXtMixv4sWNpcFij4CAqHwQF9v3cvEJG2E27Ej8UJaLexcKRsXVxbD3tSTboYYTkCwGPAFwhqvgGe8cwtZ4NMr",
  "key15": "wKJqMxHX9PPfTZtsZoB2hXi7V5cc9jnHLchwMrLJaLNZrWJmWi79yMDTrjQEp6NhBAxwFABPhdHd2QZ9BfPsCPF",
  "key16": "2YyYGb1zqHbCW7UR8SYwGaTiytyJ8zSfZ8auBWtvekjPvXUsFaEPE4vnzijvxDu6igCfnXgi13zJL2SDt5zLQMv",
  "key17": "3s3RrJrJVwsSQE7PjhVi37mAwxx7pbTs5JnYNZDrf4UD4iEW6dMGEKegkbeSUN5EDHTnaG78BUL2WaUWJQ7pmd97",
  "key18": "WPe3ajxRyFy6XSarFHZT8XbGYkYsmiqgSTUMoweakf6novxgpSi1u9PAYPr9aEqiACFNV3HF3bkwNqTeJaWTQZP",
  "key19": "3t4rbgguMfNRbYgXTgHe3YLN5Sc8LQzfc2t8RfhbSmRnLAHXTP4KwZfubTwaFEJMVRDwMeQ4YXhLutsXJUdU8E4K",
  "key20": "287aPb1yFUZHGRjdAC742frEUGmNxksBYMNnNYEDsBmphTnMb5npHcp7K3gfesCkm32K4jC1wCRgXsAdb9hLgB8d",
  "key21": "3u7st1UWMRuuZQ3vcSX6MFnMdCKBrUHQQNJvJ8nbiHfEbXQ4rQBM7cr9LQSkiztapzSaGJ7e9i5YQhzCwJ15oJ5y",
  "key22": "25TXf5keoyAZiQQiNt9n1wXSa2SpTzxrdqP3mwucPDJRf2AE6ZwW2AkyTJWQHBrFi3ds3PLFZPJYgULaCnyUcSBf",
  "key23": "tGs2MWfnfU7WD5oqhawciJCFXwYaKM4LdedsRa6FZ55sMNHLaFHZbyYy21CcVAAtsH3jBiU5mfXdDeFpzNHbCSP",
  "key24": "4vHiURSU7iayEQqYQkZF5Eif6r6YaQeA74CAApcSzTpFbPkkVfRsAQf1uJq9cTGvr7ev7S2DHuzjJbycDAuJJ8P8",
  "key25": "5qgiryckJ4dofDkdTFXWd9CgxENHMvVxYG9VZ6WVBCVS1nf8dEybJqaU9KZPaCgKTah22t33APXgmDb8Y69fE6qH",
  "key26": "5PN3EA7ZnEY67FEoNvwpgR7Moee9V27Svx8JXaQ6XGkhN7EyEL1jYuHzTbGhHRpPyNxu9sn8WmRjugDmvDdzLSew",
  "key27": "4x5tKJqBnWRtiwuPAo3QVcP3cYNNf1eNqEnYh1Skv3CTmTsSfsjRQppDyJsKYXsAPXLfjxCBi14xea7wb8RmdNW2",
  "key28": "4yH2NZNruhd4ko5G7Chy4a8i15Gb7swpJxFFhxY3TeNpPRU5nXknAyRYchLHjB3HSbdA4wrNffs7Guosp22kqY1R",
  "key29": "2ooc9GHLoxjJgzC91xX5Xv1rX9wxdBETPj1USm4UyyCznBtDfEEiGP15GEoBTe67xYNqDkjtW7daeqxsfczhpHkd",
  "key30": "492vhR3FzGWGUmcrmBiz1Dru5wydN2aHe6R3HWBvnBNABoSSDUTUsHQsoP7DCGpQuJZMrotAFJMEtb7ciYrhEmb8",
  "key31": "ZAdEtcuXs3tECzmZjcVCv58m83tP8JSmt7mBdBLpBo6aDTkDt4DhTBHxpeM5dALLk5oBAxKeeZvLGcU9y9KKdiZ"
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
