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
    "5shWE81uGTNAjMtCDfCrP38bfez9j85ZEJoLkba8r49DFqU5w2mMYbpubMdxArETUdYouxwwxmXq7ZmXQYLjmBCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kGd9SEqB1h4Zs8jxropH9HfH2MMZhJMXUpBFrVP5gvSfjKbQHK3kmbmcu7E4stnf8F8mYyKhU24oWnt1jpvBY7K",
  "key1": "2DLrEKDfGr18Sd3FMoM2jaKkafi86y2aJVCJr7ENUJybF6mrib7Du5b6oHz4tB5HQEyavPgKHoscadAAVvTBSQpk",
  "key2": "fPfXhCg2Rkef34Bu5PodJdAYZZxPbB99QrMBXDWDwunCuokt7UN6SMpvDLP3VmZKsdaGq1MY3xgELdXs4ERrMKs",
  "key3": "2wazTeKVFffBDnCPGjLUXBURVJeTxNVdrstyCNZmZnpy8HxPRjyhYrpjS7ZihCfs9r91EFyvvCBxBmnQLKeh4RzE",
  "key4": "S6LbKim7cMM7NW9ZP5P6utWqfjUbFGb2NBafwQT3fUBRUSJ29TGHY2MvC8Eipnj4HVyv4r2NnPSm6Qd37KUVD3p",
  "key5": "qa54mT4KGq8TtZ92p2SbR3yqbFkmTtBPHnTfCZJb5fmihiLjpVsizH894qVB18aS8B6F8qywjme5n2vG4xJa6Aw",
  "key6": "5jsZMgGqq3u2tsPu9jJhr3xZg2TsgagfbRE7ydCH79A2QRSdXHR92vrpkyAVLgiDBbLNpmEEgC4NpRr5Pg2NttGt",
  "key7": "2T3yxDe4Giz1wKn5tz5eKQyAqtECTs98W5rQLESVSH63srCU8di34ZeHrmKvysXrUqN4RzZrDifrjZ2B5Gz1cyKo",
  "key8": "5RVft2vTSEXbUEwoAgjMBdeSoK12FJwbJbH92yZJbocqYSKxV7GXT393KrJjBLm595YKB5L5FKVXRKqTWYnWJuBb",
  "key9": "fFvBK9c5K78FeANxZSPvJMTgkRD81UPnmFh1o5R9enXu3AVMxv28Yo8ZaPxWqEu5bu8jpZsyVAvMf3aAht7Zpfw",
  "key10": "3h1UDy2ch9iatY6R8omH7togVj3rqJmvUAMoMRAYpzY37FMPgmzzduiD5UMdEfZ6tTBskFjJfLmAa7v6PVLcmVgb",
  "key11": "3fruACh7ivkQsehUnnz8wnbKYpTqvNTfVjrnN1VmdSP9aXi8vDsRvYLtxor9i7traX7VhyiFoS2nehyTPnN3NQAb",
  "key12": "2nmo5v2R77EFU7pbgaL26tf4Jq4XkDhXs7njqncTTE3hkedfapEx5QgXEscTM355Qcvueti9i1hrtysMvoMkSMqK",
  "key13": "awdkZDbNAvSs1asdcnJJotNud1jkNqPbWvu4SNkvupVZUNtbqMTT5JYdWRkSukvFnfYsT3515ov7iGvNhhPFQ6w",
  "key14": "4SaJ2JEumdft8pjvsRFRPYvwqmRnEaDPvRCRhJQJmHdz7NRvTqKPCtfyLgVXtWg88dCpznKPxQDyKNZTg58jBoNg",
  "key15": "4sAEdneLzabD1aVdc7XJ1iGojkK79uc88KJ3DVQDkveEHdTXv5Cf2YHtJmxopymy6DmFv2NCqweGzgesU9SkUPJc",
  "key16": "5vAEZS6BBmf7J33VUGkMfeuiUoFXXBovckLWUUjGAJFbTTJJzAStEWDDbyCRn8ZQVmmRdJh6sWM4vTT4sPzsSoQB",
  "key17": "5bv3z5eF23srV9LN2kdbKZzVBfTXhjt7TqeBNi1kh6bFLVuzKqBPU558ikZSXH4jRdXhtKtRo4u47tTCDhcPAUo2",
  "key18": "2T7YdmVu3dkbQg6KqY1V5AchncAZTJBxUp4Rvb6s9rEPHGqci9DQBtNbe9HizDeeUjzMRRoTazu51PaF5M2jSmvP",
  "key19": "3GyqBj2sYigj7u4ytmFENvnr2VajXGMJBgsmCrGEZLoEcXXYiyYg16y6KSLTh3Vm52QHwKhn1wfPEcPgL4Ftx7gN",
  "key20": "21qoAStJc4YnBCCCQz61RbJCjxL81KaqEJoW5zkEgMjFaLdGriqroo9kUQ8a65X9rxUPAXvhH5WXBFrr8rPBC5zA",
  "key21": "TurnjKu4RV6RYmjarXbWxJ3iJTrpHcDe3WYQdP7D9oqp3c8FBWUm4JFu2s4hFVj7knmGpxZ7YfVtrm4xNKvJQAd",
  "key22": "4oPJt6oLqT2DDkZndXfNMfk8ydCVM5YsF4U3aSjM4QS6ttbTnT4s9HTTcsUgJwfSeaXJb5V3wMncgjZyhA8vXG6S",
  "key23": "T3nzwVpPhsUH6ZGCT9U6XUmjxsCEjqzQTkVu6aXmot7Qr8utTHbhN2FCx6bfFfs8Do14L1Bww9PpNCboXvXWTPR",
  "key24": "5Lp2Y7JPaV4qxRvQf7WKbFxW2h3SGSzGdyUKzSvb3xy3g1xpXT9CiWfZnGXYHrGAqW4jwP2EZ2FastEb1ybV65zT",
  "key25": "4QA6LSkudrQqpN3sZ6GVVFZfpHxV1JxbXV3VEK7ywGuN2Z2gWgGJBuKyYjvsm9R16vL7easgKHpDm57ZUuS6SM9T",
  "key26": "ANTpikFzrFkZ4D6jLT62VGhLZJ7GJYdKaBXXCJ5udnhs8Qx4NZMDQczvKHBY35N9EMEh5JdHy7Zc71aMVDAnV6D",
  "key27": "3K3McwUR31E24DSGQp27yi2zGTUNvXzDu2SJgFjsf2gkneAWWCekmzm1LWoa2bLXsQANTK6kD6jGnWz9kcAyMS2E",
  "key28": "4wX5qSt2gWAa6112RUvZ6hwwfby84UjXeT7CgcTRNX4xJPwWqLcjrPZLP6pxXDEFcqiYtyPjk7bUfhdu6ZftMJvJ",
  "key29": "4xGSPN7E3SkxBSz7EH579c7GbTx18q8sTZjG4C2ivyDWhzJuCWQSdDP4Yfh71PPASaQht8gZ5NXsK3et7vYrXZZV",
  "key30": "3gciGWgstbQCPaR45Zs7bTcJVwMMMrzPBbU4QRoQUb1KaaqghTsbfL6a261Qq9Kj5N1roR7YBT2By6RNpZEGCgoR",
  "key31": "25VCofX1T7jarNuakYgY5RkngtBvAcHp8tDrYnMo8LU4NskD6cFUNmvRN3Hbo6UtstDXJDNh12kfmsi5GWm5gXnF"
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
