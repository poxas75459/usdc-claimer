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
    "5SXt8jJEG8tY7Xjfy2cv5YVgfzMu2pH4EPuNCmGBx1bQv4jSpSS3YhCjiuuvJaL8GZZFAeZWK5ChJLcqYznjsxPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "baazUxeW1KgA5bLcxJ17PCUW85BgzNFcVk3LL9FWyEibSsJR3iU9Dk9b16URVeegxcFnayAFLvj3fqb8rsgmQDi",
  "key1": "9zLNyhJcXMVoS2ZmfRWqe1PZK3H8WjLvBm7R8eExS4djaD1ugPhfooaMSw7NgUKzP6Ubpg8kibqCYHMp93Yv5b4",
  "key2": "5G5WockjkeKB4HKXYNo7uogqHzxJo9ytN5JujYWNHQ8nRKtYG1z4PhFjNxMEiuUzr3pQVahhDSZjVACmGPWKe3U3",
  "key3": "Wa1VkK7t36QM327177seauCLQSz2f2QvYe1h7cpLtB2oFZDbk9dtxRKU6S41oEvfCb3sXrhF1qRxG9y4r1kL5sB",
  "key4": "pNTwPkpynCWquSJqdZvia6UwdsTGwEjRyBFvvqFHD9NnhJxBy5d1NEqB64kgcWz3SAF9wmrBwHqKRcPjM5ZQ3Sh",
  "key5": "3fv3gw6evGxYnYvGv9HdLj1RxYm3wgtPmqKLDwEvwYGBocJB2ZDFNfVTFByhC4kabroN2u7VDudze38SApb7TCPQ",
  "key6": "cqKYUc97keNPAxeEvLMcpZVP7tSGmP9aT19pXDohtR6ZwKEwVwZEXAhpTnjvydfb65LfKR9bvkWusC8u2RaW6sT",
  "key7": "wQYYm9TFBLiGS5TEcCbP9LHBFSpJ6RKU8Nzx9wiofY9sHnTQ5USxhr4gSDnduxETsXDLxLxAgXECkpKGeVTTdsT",
  "key8": "3yijcHs9X4Hmc2HXrFNztinQc1M48QFF1HGH9LtKaMX7t5mHRaNzxMWd8eLbJGa1JDuXDPgZtCkcMyJMkpoWXaHq",
  "key9": "3UtV5peoNpfydFzsd8usbczjArmZ5kegDvKWsKqx6mpkPi2PgAR6fKaTmXFpnMuuiBxrGw7pN2xQmDf2saBM2WgJ",
  "key10": "4aCyLyVjcAjFuRE4517hx7ykKhry41TsKQjTVfst7keCyD2rbgjaWs1W7RkTysSzqocyXRJMoc6K5UU8u2aSbGBf",
  "key11": "2KDRngJrDwtHaSusN8QjLU5T3khWcJuVRojmP57Q2twnkhhiiJ8xvqn8ru45cXC1pZzEnNfDJ7meYjTVmhtSEyfZ",
  "key12": "3atoDQmBuv6LQ7prvWrL2KNCGMZqvwPa8Q4pT7wcu8WRUwK6MGqsVnUiVy7NwRNGzfRDbys9xaqm1fj7tubbtBpY",
  "key13": "4PGuZLxZGJTR7wXc1P8H5f1zcBgjXqoQTcVToWxbLTtny9xvbUQ78DUS7gkjNE3t8nYvyHihTJxK4WNaE47pr4cC",
  "key14": "5vBvkMKesJzAfeegxoq5br4qVjGj384wAouuXmbqLtP1EBGqjBK6CNiHoC1Kqk2XrQqUhUvnC8YXiU2Lpp3yaXbK",
  "key15": "649FnV54K8DdnZ8G66ysomokaLhPC82zqtZZWJCYTCVCPRYgCGRwNagQDZdXBL7Wu82xXR5WjMHZpTbACeLr9P7H",
  "key16": "rCKPtd6oMmMZJxkbnziGXkvuatA5y4LTnubZ5QbNEry1LisvSj84pMKyMGb6hGKnH3epcPR1C2NAyZkugtgyrbb",
  "key17": "Cy9wYmtoUHvWTGK8nNaGP2nmS8hQUEugEbL4U7DZmEoASnpzdpA2KjSiVaYRykYLjEFRquFV9rK3KrsN9UKXjzx",
  "key18": "4HMYJ1oPAxn2QeetKAZgrTDnP27obfBgUBrp8XqHKGBmQL8SxaXXtWkkKm5W2WTRiEzq519mSPfKorQ6gyA6FJ7D",
  "key19": "jvZoVjWgGxiwBNThkLNKW5WsHaFNopu7EbbyA7fvu3MEUpg4okULTUe8wy3rmWp9WNEaSpRX9VgiJWHDtHnPKtr",
  "key20": "5MZbL6gp4MXEVi5DuEh5pJ1U6RRR6TmmiUHNnDwESxTXR2vbipvafEmFVFGnjxW6fSKHao3rjDpm4icXqEF5gAYz",
  "key21": "5WK7djX2zbZ4mP7MPKEZbzAE8LpoVZ5FVztesdFh1oyHeKVG5FZDN3Jsdrnnh3sw9o73aHm78EA6sE7XogtBvVFe",
  "key22": "2kDHNBM6M3TpWGCfSmhhqpLxN1uYz567ehEN3it2rgh83PNGrdbtjkEKuMgkDhgy2nLUfM5DLhBoN9n134Lrd281",
  "key23": "4cxTeeM1yqtzq711Mdm2TD4GMMT9WEMxPL2xSiCqwmFBWuW6bTSzXVamzZAi65KPpZVbFVRfZKFKxa9HApwnaVJ4",
  "key24": "H9a3AUhZw48AJjrvhmdTZUayeHGwmP1PUJCE1wy9RbRr8CmCYxKn3FA1aUjaWUZbkZTbRuEQVQYRQvAS5LErReD",
  "key25": "QLfEfQ9ZXtaGRfFAU82cQBwS5tgqfMeoK9yTUZykViAqwVXmuMnR4LaxQXjFz9tJ7yXJUUDuZYojtsawBkf2CuW",
  "key26": "38ZzomQi2DqiEj6Mc8sgnmcP2qNaeTyU2M9jBVfcDNvUW1Hsfgt5XSE5xshNRHGB1gNe8dEHQt7EbYogRGziMeXH",
  "key27": "3guZs1edL18YvWK6UpydKZGYyzJrBagi1FXF1MDdh4bd81Av6Xuprr2e6KaNsmAUH27U6FpGhyj97rPBE1vZJn58",
  "key28": "3Avup83998fBvwesp19HGKvGfQv78C38St2CVoy4AtVgCebw5VtQsTuses653aPbPA6YA7gxetam86zY4gE4ZC7c",
  "key29": "bXgJHonmhAHkLtKcQV3Hsuh9dGA9p2JrXfzTvXe34UwC8uyweMAvcpdxj5mvL2148n85UptmeycfM72dg1LkN9r"
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
