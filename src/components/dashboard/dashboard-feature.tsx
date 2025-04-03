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
    "3a8m8NPharZTgcG5DprSGyYdsTfki8Md4TP2E7ZoSbfmnDYsnvq2ZwLbc18KJUMsPRHcrtZ4DuRfrLTt64jUETV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnHQw4BJEvDAaXwQdTvYWzzdPiK5BcvwpDSKmTRYWsnLhEpLhRwEjpCWHyb66kP6a83NPZD4eaoQPJVLpFhnmc7",
  "key1": "3NTNTWVXsBuGkohzSmmn1CBYENUvDwBZ2ynMWU2G4CZ6SstFEt5GmWMbbPFh31SBn9CRfA2vrz1bL84P5DthyYpq",
  "key2": "2YkG68VnYdHcLHVUZeqKcBW7K57UMycmEspiBn29AgBpXUQ2nbmShsPxzuZPZAXuWPo6fziEq2cSxiwbcXZddebf",
  "key3": "4ukw8iPgXKGjmBBvLBnZuxWBp5q9CcaR6MhxjuuVsgAgdLjGfPNiv8DARMykxphw5ECwCvTrqtTFh7QxJTiBsFbt",
  "key4": "ZiFufTkWXxj7qeZpyLXbMKrovVdh5X7Xbn95hRe6nsRx577cXaE4rcWSiZoa6GbquuSqpNyNqmo8FbSgR9CDupw",
  "key5": "4hY8PkeCagHFmti1PV4hBNBg7tWXcP52aNHMKah37wtiZCuw35gCQgxf9m2PgSEiCfdfmggjXe2BV1T4SDz6qnFc",
  "key6": "2gfao8Tz737B3QJHPCqYc32fRThxN8CWA4wcNR4qXPtL2jRHh5hVL4cKhqRpjr3JnCUw6AGmtkGZtJJ7NrJTCzWQ",
  "key7": "3nneJUKE4KBgti34xywhn9u3xUPTgJ39hd9NTthGSUJizH6eqpAB3eRWTQNb4aHHQ1kzmNPWG3rTS44cUznU9Zgj",
  "key8": "P5kroq6D8e3aB3LNfVLbbDaAeDPMobekYKDNWpJd3bA9VjqvryPmQ3LCQbk87eduhcGMfb1wgZdt3RkZt4szXaM",
  "key9": "4Pj7JC8tosCEkPC7o47PXhwTur7DV5sujKZ2AKZnYvCPzvpizWe7GXyevysActzLPwYRBHcuRvYjXQmSXjwTnaxx",
  "key10": "3EELRpyV8BfK9TfZHmPG4uzCMqB6nWEhESTe7yrkyzwNLmQToaMMyuvmhxcNSqXJAnCQ8UtX4DFcVzPdofXEef8e",
  "key11": "5DZYMn3JytDbupZ3qJ7nZ3RtZd8S6GtWm9WbfrkcdZEyKUB3XGs1FxgSdyXqQvyo5qozyWd5NcBUXbbNKPNwYboi",
  "key12": "4ShodM8tA8m4tzFvs1RfWCnivgX25vczavPyzXJfy4rs7co8uGPRptgj67ktrir38vmLoW4UBt7zUpR4xjpZAngC",
  "key13": "4s5reDPedW1BE9b4BLDPkoDBU5gcPySs6gF4cJmZYW51oxowp9oA3c6dYTjjf2LZAD1Hc98ZrcWn3sb7sstQRdf2",
  "key14": "4eK7eUCSHcC15s3EpHg3AnkJUD9JyGbnNRyrc5uRtbGSt8mK93XcJtjoCPYJo4TbCSVLMGi8sGHA2CH8cdzFTYga",
  "key15": "5woo3e9DLdqg3RX5SGAvv3V9924UnmioQF2irV8toHK32N55oiV61bF2Ko9T1budjeya1HPmAjP9azigTWXgStAu",
  "key16": "4o7YdnsTn8MJLuG6ydsYPRgRDisJxFxgboTVW4cKNSQSML8CpcXdUe3ZZcFqxbaT1LDaTg4f9sN7j1i6zn4ktBjt",
  "key17": "2REPH1Vs9PNjKdZXSsdG8X3baqRrgyYmi3L55GQJxr3Pe245HspSYqXHkacXeqKNqJ6yGx9yTztvy6b4axFMELfK",
  "key18": "4EWxvh6bETZHV5RhDjPxf2TW1QavFr4B4hzPMuKYeYjsNq76E84Lk8PZ3AsQVk8J63Y4bnEQqvnGgbzzd7t1A4kd",
  "key19": "5GVkCM7BgCGefG1KzfzdXzpTCNyp3TJ7T9QMcPUsyL7GR4ZMEZVvDTxpXW1WnNSMQnB6e6LoyagWzwyo4nSNfcAZ",
  "key20": "3Nt1wcFBKSo5yVgsHMKds2y69PX4sPiu1VVGMmanPWCnavTdC8yvWwtpmQ4BiecUni8bpnP9peuxETm8Sp3K7kYU",
  "key21": "47K4VtzHqcnxfXxgejc5S87gNxocpGNRpRp8vbc3nCEJDL97eW2BTPEkWamVPpXxJyZiAgATndw6jAybdFXcVSTY",
  "key22": "42unVtbvXCJmZrzuPzZzNdG4MVprwrhyPhggBXwmktF5fNbJ4YGgYfPoLnSz49NXp8XdV7HH3SFKM3CESUMcAtFT",
  "key23": "3Hxmj89qtTfLjPycHuGjkW7XESjzdrAR1wvBvKUdRbxJy1spEQ6EDKzpVUpcasMGfUzC8CDEKS1eXUyKDnKtjD4K",
  "key24": "5xEt2KwAsr3572V6ksZhRXDzKvADdcjrzdvFyBMKVSVm3o5gP7FbFzgcqixkkSgHega95Geh2KJ2hZFHtCSVCSsk",
  "key25": "2c7fQG3KTtsCnPzB2L8PRpb89Jxdhachhy8MgKAVSszNDVJF7Pd2WNtFsCTzNHfvJc6JqvTQBwDcX9AQBVmpxJqb",
  "key26": "8TFZDqo58bUwjc4unj3TuQ9F2aYAhn4bsuoNztDDKquENiF8W5WAmyPxW2pqy4Dm5NRrxRxkhJuqFvrYd8gSfP7",
  "key27": "jihCG9QEZWUZLAWHny3XNhtoKNsvmwr7qzsr5Nues59U7z1hp2VogWwEZH6VY8RxpA4r7T6BNbEZLeEnph8TjY7",
  "key28": "5D9tdaN2KfqEZc4sKabpK9K7GsHjmBcPPf4y2KH27DfwDt4zajMiBn2uvjvy7MKKDqg4vT6cQHkwx6xp1AthoFy3",
  "key29": "k4FYmprewrd1bAeQovKdBcZL65G22V33oiZt8gpAsBzKhzBKX7MbPuu5MXf6ddRYsujyHy6ZPoC1uCgDWYG4rn4",
  "key30": "7u79r9VojonP9r22tgz2boKHvgHQcCQyfvBs9dXLYLxYnNA8fc6jvFS6epvE3pSiFXYQyrVKntJtiPDqQQTSetX",
  "key31": "38bXth9ArEUeKknPWnwMSRfGDpATGUUBCVtg6WBYLFXBcX5LNDUHgxdDLbibSiFDvaGbqe7PVALWUsSNBBrR1TtZ",
  "key32": "4ZMGMuetiQFrmRa21x34JYBeV51vxE9rQengeoJQx3ory8LigwJr1CPMKEPEHC1aFiLq6wACCrWiUg5UNfWutweB",
  "key33": "5dXTWxtpT3ULN8SZk8wpGaitxciK34PqD7kJQxkda7mJk8EgYvFufEiogQTQyL6jGQNqG7kTYdTww79GCi2giFNQ",
  "key34": "2RV3YSBbKvfrQV6dvtafhtRgEicHv2HVEY6s7oT2QcfsyMrXFNie5uqcXsTZK6Enysv4xpH3DGpmUthySa2ipRp6",
  "key35": "3Tj9Um1y4KQaTzaruLWa9BdyaRNib5gbnAh8d3tuA96s6JcYyMPi9BRwj1TwW9cRhSkL8FYQmEkFVc86RLmebseo",
  "key36": "RctS9Cjkxs5H1m8tRS8hPjtjANtUby5JiUkddZBY6YcD1ezZHJaRHkBYGsbvYhoddB66APoRE5nuKpcSfQyLnzz",
  "key37": "hDQKvsMcirhWSES8w8ZzSjJ4MjM5Jj65nJ3a2TF8sMeJJHrn4Z59N7b1RU1KtwBE6rPcyrX9cgZvhxbpayKCPnu",
  "key38": "3uuGfTnJq2zpAobmmS1eQqpo4EMBBwKFiQf2myGgWZdf7qn5jKDtR2eAnofsDMJf9YXMYEtcfYhgxcTT94X69r7M",
  "key39": "5DBumf2xf8xGie35b88xuaAXdvP9rhs1JZnhKCxgVJZE3QrVzo4aMGFcyiUZyyn99C5TyHz24NM6k2d8Ex2cpfmT",
  "key40": "55jRMPupv2QgM1kjNuPwSyNthLhtdyKL3y3ksNF1NbNcbXarXFjFwByxvFXYzZL6mJtvg2yH5TeNBkm7ZSqbfGgT",
  "key41": "26KXDPAkh21ovxaoFi6HHD2y9syhoFMGkzahyhpNo1i7fTWbEWqRwqs7tMTCHdhKUXkPsC23xHnf55ATvAjcpvpN",
  "key42": "48LZ59jfXteed4m3y6CgWjkBDVSVVXT7mBKMo3rH18mq1BgfeNtZwqsbS8e7vxSinJKKNjPvUzjnqZwxWtM7VMgE",
  "key43": "4Lt6a55hQ4p4YfJTjg9oXBD7hpf8jVt7AFu6rw3n9NcNP6cgzE2KNPiVZJnLhaoPPT4BgqAViusU6vRXAd9HPZb5"
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
