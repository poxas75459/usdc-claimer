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
    "3zywDPL67ptsmq7kdEY6HY3YCTqs9wATb9T9QW2eKMBsonaZ94tKA7tdwaT3toLNqGR5L3y8yeB4qutfBK25AXDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYtCcwkujtwiggW5nimgiHaoDMfkMaJCtonCJumEqe2xqXkEEZgzWe1xtbooe3AdtsdNWhbjAcavxv8mcbayRhw",
  "key1": "3BcTMuk9esuvDx8gBKzVeHmaTNb4JyjfpBe9PdGuEdDm2Y8CXmDfkAYEjqqsa6rGKVvKqkEHATfXnBCU4kuNSLzf",
  "key2": "2MPnU8Ei9JXrfo7jvWv2t2uGXGwAarCj1KdN8CfsTsmyPXvhc2W8nvtVF3mfHwkxZ3NfW88onXW1JMCqS5cvcx6z",
  "key3": "5gQYc7oCuB5JZJEafTD4okxRmf6cFp2BMBZN8wfXV7JNAJTRwLKt5FCjqmuDbqXFJ2ULiBfqhQwPkxqCyDx4aswv",
  "key4": "365Js6H1knFeV6vigHkZ1vtq6p7NTfrjoP6AVxaEjE8KGqkADyahy1JeVd2znTPFTSSmRkfWvuSefzdQ1EXTV4JL",
  "key5": "538TBYQgno1dqsPspQXV6ebiw791zqHy4zdmquuvrSB8sHKBfbkpQZoGdC5ZuRUmr7iPHdPj5PCMjcLoGr6fp9sQ",
  "key6": "RuV7Bby4JWg1GGVpCcwQkaG3SrCMeiKTYNnMVHHHTAkHwnDTL9HNMRqeMVpBXvPqtXeq2j9GVEKa3VVh38moFv1",
  "key7": "yqW11NLv5AjxbjqR2rPveiG1grDRYMS2bPQMU9VB53HSixgRuB93xKkRWzfHvk8s2g4ZCvjCqukYiFpytRmPHiF",
  "key8": "4mi7sdbj5yyB1ta4AG8m3uQv8CXXkgAMG3gK5qyGW3PMU3Ntbo3ctYFH5RQNiEJeaB9Rci9JGD9FAk4mNRVpQX4v",
  "key9": "5UXxDd5vARY6GjXrQMxy4VU53KStMrbp8ov5aFgqnjkrCU1abQ6JNv3goivQWE7rE5vKoMAJNFDkxcKDBratZgAQ",
  "key10": "33PFSiSMhmLy2RJwyqXKVTDHvTgqdzLbjCYk8kk9vRmjYMbzomUBiqC5rrd9sArqR67EKMmSYJhkChZxsDufUBRd",
  "key11": "2x9bkXW2sSZ277BzFvjuAVw7vjs8NGen6cYvT9u9o9XUB7fDXib5myi5C2qQAeJ9JGFdmLZERk2Yn6m6CSStP7DU",
  "key12": "4vaTt71dMNwn2VhJ8vaEfEEudL1Y25ekG35U4qsjnsEFdKx6BSigQRh9zdVJ8o5Jn3YSGgJQSu74NGnJzGnePCT6",
  "key13": "2Tn5W3ZAdbciZe28BWjbdU1CY1xeb9hsyADcH79gsCr6snw8JvFyvukHp7gCdWt8x6zd8tJA1zqKnucZeXijQBmB",
  "key14": "3sU1bCD6E98TRt255oKqstMNtkGm9NiHgwCGxHoKRquaQZzpmznmW1e5LB6TQxb2nVxRZKVhWUCckNn4SYUu3Sx2",
  "key15": "sG52iPeynZugbBRGsTE4hgUofP9HGnG55wg9F1VWcnpyH4XgPsGaNREaHT11g2gBJkaBAUWV65PumRWs2rMTKuv",
  "key16": "63a3dySg7A7Gdr2334z5QYL95zDTCco8mWeXgr6tUsSr9NTtJxw31Zfqcz5mbnDD4z6MDuaJev3fX7gQYtZs95Ks",
  "key17": "3GpRkY8FLkDumr11zHvsWWejgrR7PeRNHfYH3AquBEDeUkgQ9euyWvSvoqWNWMqSSY5vzfM6CjViHK625TQ6a7mC",
  "key18": "3gCSgGKm5MADR2Hz6di3bKHETUopN6GQ5kBkUUUiXUednagPyg638VuzNGFidYCcQ1Cm2kgZb5kEgEdP6e9vReML",
  "key19": "5HDz6QSZGjwuk1rGm8d6qDuJAqW14gJbmAcvWo57LwvH5GfuKaRF9uyKvF6E1dhwPd984qTjL9GZmSTTTN2z9YgH",
  "key20": "4g2uXgsgMkeWkp4PH3do5pqfDfhsJziK93sryeVKDi1WhjD2c8YQ4YQz8ZzBQ1bfsojnoFCSg2TDCXnuHKwWLKEJ",
  "key21": "5c3Zo8R3jDUFDB1mDFzfGS1T2YVFGVPaEJv4dpzmvt7theq9iEUdiGtHb1ipyDoUJXuY9c3h3VbNeHohkZvBy19Y",
  "key22": "44tsLg3venFZPsWvebchQaFXPnxQchWpk5Z6WgfV52tB6ZqTAyXovzQx3ezjncbcPwKYr4XNmG95cSXNx2pavkb8",
  "key23": "4q4wwkh9dG8wmTMZno7sGcfAySynw9VwKc5s5d9juocbRhZWwspUa1KuG68QYyKFaTM2sJChjLhNxRQCfcjPnEqc",
  "key24": "4VYqkjxqGA3vSKVpw6RcFNoqm4ndsiK1Me6cFrgEh3M5b4GjdbwW3zawxCLDWoQWPf6Mpvyt7Gv9xnvW64an8asb",
  "key25": "4YvgnVSGNpip4MYPPPuqenbhvU3bBnMPohyEVuiUmfBwc37u6BGJWaif1bqCDPki4SNQN4p9JMxEmVnwUYkFQZUw",
  "key26": "5JJ6iWirUENsJ1e9ybTaZAJvVHFSdp9TMpm8Q5Lh6DmMEMjFLFVcauUMGZNHU1ug9uN5tpxNq9gG1QbZXgpaCxtE",
  "key27": "FgRgqqz8akqiozxfFUfE1YYdZqYRj7ukdrUDZFXW75DsFwzxy5iVeeXvK3CyoFnPYdr2oWeVg66dSGMUhXHTrJv",
  "key28": "namR1AFi8KC2sdGqXERFmyrL4v5tVHiNMTaG9PAfQviz9CDquWbaQou7t4DZuG3Abs2z8ptreCg9z5pBvHMTPpD"
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
