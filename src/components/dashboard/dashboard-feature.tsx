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
    "tBypLtbJNXWmVjyokqraiaEwjfpYGJ5MuGBZMRa3ectNcfZKf77bpmR4d5qz4He5woGQPMCDZgUGekoqCinPx8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ajFVcmpyWkHwmBv5z72ha1Pub1iwjvMnYMXJjeCbMcGgVpSEEpXzMocaWgkUxFuu7KuiznpHMjWPkgqeo5AJggK",
  "key1": "3yVdtoCyagxgbgupxrYn3mDnoJBMGupEtV5MMU4PSpgBBXAGuHFVY2LJ9ZQV3UFt3ExuKMBH3DdfqB9rRQJdhpEg",
  "key2": "4eayTJoeYJTy6VGoAQkdPmo1GrhCd56GkgLShFSe72bFGDMVnPMP8tHFYSmXpH4daH4JSEhXetXsWAQDPGa9hiWF",
  "key3": "281eAt3hbQk2wfGaCzkECkuZ7L6pVpe1FREsNAWsUnEPaqRd476SapWerCrzSfbHHvaUuNzJZEQ7XU5k2fSt7NVZ",
  "key4": "3vyewxdyWYfnp2JFrSUu3CWrv9ciX1hKhC4SDmy8f9b8uura1jQ3rZ8KDu5dEJAr6WNqQtPA7jDhV7pgdyDjFJuK",
  "key5": "28UcyoBaUw3rvj8WGAtUtLbKwwiPmR6K4BAdz3L9fMo1xwSwcBm1GjHFfmn1GNHCuvKR3wJhTJmU2r1o2xsyp3bQ",
  "key6": "3SGiQEUu6u24HnxgUYKtBGocNbep3VgRSqmLpmw4BWruxS269kP1yKsfiQm2HxG8ttqZHbGsfwJzU35GVKE7vvST",
  "key7": "3vs3XiHFkQfaJntyWDSbqQAv6EmSutJroorAWWc24VEcf1izfeotd4hiFDoLvmc89G2ECUAErJaVHkowL51KjBkm",
  "key8": "2TMWFn9f1EfX8Mw6QoiHo7Pbdr2PskYRwakxMP7uaiz29CRP787ssBCKe1XZjh7ax3xb8hjAYgrQQ8B5UEWGwNG9",
  "key9": "2YJKFUpVFDyunCiqLEPTBBfUXBE8KCcMi7D9Ajb8AicvWQ52KN8YGcwF7orcQxz6Wxf2Gi7ayzchebr3EmUjzPJS",
  "key10": "5oPMFy5D1jeULoUUrqvna4n6uoavZAEJaUeeHMMPeNJr517RPsYZqrBVDxjTeJpfwxnmV5xKVFXa2YYqQnnqdXNX",
  "key11": "3WjTbga9TeDqpEAaEPanT2YR7hgapw57uZP2XU1Yv1fdwjJ1Y5MRqLurdEW9LrYb3iyoM1BtEaXY9T3AFu57y7vb",
  "key12": "5kABsBE2ZdMiKUXxKWtiZ8tRjFbZV8dTNWfs6vSYcfPi7cfBpyZfNKWjCAGUSbtVDtJreEMQ6wTEpZuXLws8xPgh",
  "key13": "pcoGFBt4u687TFHn3S9NYCphAdmJ1vAQNkKJWY23LBiDv31MaxK61URqYUYVfdDnJbWopZgCHy52etr56BMvACz",
  "key14": "2iW2RVKXgQDRCw8X25vCCuBcZnpKMdQp9bza8S3hzAXxWhTtircCUPzvTdmKra8A6GZvDCAvhfRY5DkLmezwDmQG",
  "key15": "2ynyCvWxXPjD93hw3j9n3YC9ukxXj9Q1kgtZZbcdSbAymY5Xks9spRVv5emqvN63LpEiDy12gicRSbFvmDGaazfr",
  "key16": "wKq5b1p56wmj94gW3uo73vnKcDeHmTKwsM9jmFSRpw3gvLada3vqhGq4s7NyihkHWw5rohajabCZM9bhZFk1iBM",
  "key17": "S4hRAWLATgSRoujhbBTYZ2nsJw7GbSV3FCL3qKqcgxyDUd55YSBSXQpFxxFqxTwNMXUFjMZXqSGCN9rFrA74WL3",
  "key18": "5Xc7nC7pdgkJ42dHXUdJz5mR78Rz1bEiX9g5gtgtuqZ6H19vWycSsdh8BW8CXget3TGSmbDoLQVcyG5eDiMsgRSR",
  "key19": "65VqechReJCCV6edSR5C9mbtg8TnvFgR2oDpUdyaVFKVZEZn3VzavtKX3Uema8VLByZCyy8UMmordxLu1uA5Z7iL",
  "key20": "3Uw63uW4BK61tyhzbKoZT3DbfY3WMx77g1B2nUjcJymXJdK1BZKmgGAJQFeGizTgy3uVuLVrjeVZmb8fLrRQgPYw",
  "key21": "2iCVEDJ3gru4eStGkJCDnGjeHBizaDV762Dz6xHyNAQ7oafBsJaS5LHzbbUXDwwW2FMSzS713Aam4ZH5t69B6M5U",
  "key22": "4Cfrid5Rr7LccMjd1ahSAjVwic5vR9QPUsyJacVcy3Zo4heqK5M5Uiv7NhRSjUKjfx35iCjFYw6kWJRAwdpTzcP9",
  "key23": "5hqUv6pcc2WkS1cZuEhyt4D2jQrDsbYkph1CrtB4wyfP4mj6eDLJA6q69qbP7E59QThMwDogJBSEpX4BeZumMes7",
  "key24": "3rT1opuinPqDZnpoz4x2qfczdHUtVYJwZ9efSSANWupMGYXG77kQu9a8hDvYqn57BdLKcAJrevMYvjWTDSamGaT3",
  "key25": "5Asj7gHyRc7yRuQZkP6wVPARaPLazGCmbjFxo2ayeTnfymk9hzoNK8ZoCsRa5qFX48BK79TZN6aVXUEy2xZiNXpX",
  "key26": "5EsqRiUavWxkHCi2bmijso6mJ962rbUsTtzqyjBdW9PuuH2hdpAWpXfPh9T4DjFXj9rspR9HdKBsxtTJiLjsaNuJ",
  "key27": "2wANWj7PLkHDMwFnrYmwRakFtCUQ6X8BzLdY6XwUyqTRizXX4tZrNAoKcwtS3KZtsTjMYbFa3NTEadCQP7CYvkKd",
  "key28": "2MfArabEStzAe9WQirzF1RzKyTZmBqxsHt3cYGJxjwu5ySqjJmVabHoWjoRLmMZ5FCxc39ywsfwcpTKbFYtECXfj",
  "key29": "4ZfpQxxLnJDer8yUYSkDAKZBddzwWb8AyvWroyL8rNTaCZ1RyFCz5Pdp3j7axWaBayNthWkGaiXGUigus9wao5yS",
  "key30": "2fr4tjJkBSFKjKtKwU6G5caVo8Q8vhznqbt4w1oWAB9kQkTLrgUJbovsEWjLPSkrsyjRyKn9yp1eFysAfrq8apUz",
  "key31": "3Vr3B1m1zYSTF9ZmmBRaWP1AsCQRp3hbjykbKQ9Z8DzXntukK1kJvQYrx3g1RkjA1Kdj4PaAFtC1wuuTrvehhgpM",
  "key32": "3zj5w3D8Sux9TdqaTn9SD3iz8aFrCUQPz51LaoBKYzxkHkBRkPKKXncoaaNFckhF6DsjuP6a1or7F8KzkiW44CDh",
  "key33": "3P9VEXCmrT5n7XKrH7v3ji1VudZVXf166tApNgfaaRtQa6WKbskqnRMbCVaTiBBgd89ycS9jY2xJUW9AjMQ582ag",
  "key34": "5x6HjT8MZhB6M5W1jzZYkXo4pi95MDmosSoKDXu3BACqZqv9Y6s64MhJdV8Pr7aKuFBEBKqQ1NyvzShSDTmz2KD3",
  "key35": "5MLLAcjJVTsN2GiTQbzvSdmgUebmfd3ZZGqX6mDTb9YqpKJhozaPgqa4Yf5hEATaSoLruWsu5QTwn2gdEtZq4ds8",
  "key36": "52r6ruLoQD8vxMSymJknc1oGUCfLzvYyvRTTXJedoMiRC5A6bs9U6jUe1QtgS9WA2T1LgG3DU3XVQEqCF1jibnF1",
  "key37": "f8wT68CHbuEL5g6WvaiBeKuGFXKDvahQtPR8srkkZiqE8s8N3PWy4ZuBD8hEvrKA17iP2xL55egKSvi6WMkn6XF",
  "key38": "3N1rAc6Ekyq1hrvi4dBGKAF8dFMaq9cE8uqmV3pcub5adWWcfJtph5Fr7KhT9dDrDZkDXUmHGUL1ATiyUptECcwx",
  "key39": "4w7arpMZsn35frPbgQnpdDWYcwTC2guwHFadUMuETpuFPwskATdzSJuk8EnqHgupomMHWCkPi8TfTdpex5KoSncJ",
  "key40": "3wKCkCao55EDQyX7RiGMWVbfU5aygDYiNw8Yke8o3yxQ8LsCYDQCL99zfjBQgWK1hkqbfPbQLan2CLhFKvoUNov6",
  "key41": "3ZYDmqY8Q2hPoKiPvSCyYTx5QUUrchTdow5oVU5VMTwH6M2XVb9R6R6rZLPPGFSYvB8Tn5tANgbhkRA1rJzBKfnd",
  "key42": "2Vtpf9Hw836F9fnDvtCLq2fsV53TQqKms2dG5XUP17rrvDF5mkD4xbe9RCvDaCDFbnc9KwvWm8F3BR2NeEdHWVMw",
  "key43": "3RedtqrFoFPjW8eHbzet6cE3izSLNzb2sBHG2dGxMYAS7KAMmXU965HS2chTzum9f6ec6YKEoGRe3MNdwq4QJbbq",
  "key44": "21pkxGeFrAmAmDWYxdEP5aoWd6ERBm96wFJcZBEQYf2Whm6ZyCB5pkztyoTLH1dXWyGgp12wZuyAt2m7ixJfpzXS",
  "key45": "4tQqanPy7qYLm31rQ9Tf9G8pjYxdXedPaLRHgQkrY8QN2JEFLkWXsp91hEZ4zcvWUJbmgHW4Cd8epQty3Ay6PCMM",
  "key46": "3BGFt23e7SQTUCkB2aCGJrW97esJC4ftvvM1zc7FbK1ufxAEcUYcmjyVmjwzxLkRGZeKiqBSZ8PN4LoWCt5FTY3D",
  "key47": "3jwoLcyUMAxUVWRt49KoWAS5pK5KSaSsjWKSV95LV3wv1yfy85ijnprbJPZ4jHoTbfuP9GvJXizmDhF8ud1bMVyP",
  "key48": "VaeDbp3Uk9tLNfgraN2jZPiRVetYdoBo9ABnJJxnudhT36dJnebUxwDnXFyk8adM4G4pZegkAJhAb5K7J335FP2"
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
