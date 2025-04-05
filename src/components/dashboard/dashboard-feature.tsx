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
    "dH3P5uLon5CDCQZm4Vrnd6UdSw8rKJztrm4mcjoPC3XkhGvXUbCxzefGFe1SkSaDshrEPfm2XToWEHuN9DAxCP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yH17D7t3TMmWf1RhkUZPkk5UixbteYRZKJNCCoDVtuA9XMcP1cnXQ9xnsimwTgpdJ5MxSRm6rQU622p5jGCkPVF",
  "key1": "2PbQe7gDf3iqBDSqkaXL9g58wsxhQBeeKMHeYtAkGSD2R8oQfsePsbe88cBqovoRdKoRvpap1JLNkJRJrQNnbFxK",
  "key2": "C6cNvi4MvU3TCaz9RcSb6BSc96UneohFHM2Kn2oDMHMdnje5kwo7GaWGTPT2kNPBiF8QN3tUHrmE5U8EwcMujF9",
  "key3": "gR95Ne3NVXBvsiaMLPr5hCLij9NKrV2xdiuBzegYUDASWuCiAjdb6KsD28VJsViwGn4ny7gAMXVuXvzCXQvrYDc",
  "key4": "3NDgUmsvKXsMXrsQeyBiP1Pxg6haR4fyETijB63sTRH4YuqvGrunYuWCzNKDFH9o6eEGoLY86JbHbtDUVQaA4mMn",
  "key5": "5o2LKq4afr5Cg7DdusaZ89cAkq45FhconhDjoPSxeJnUqN7oRsZouXWu8afPApbRVXmXVgWz25oXiBaF2JcvpruQ",
  "key6": "3rArhVgd8AVF8pJUTTUcatuBnp7QtyvyrZ7WQBxjmgJ3S9eMqWMDxdLbwUeMYfComnwnrqTMBUanCNK7Jqg1mefz",
  "key7": "HmxGvESdDu4b7i91Rb6TXdBv3mfiStJrNh5NWkBvJfyYcngYQeaFFTEZ2etD4WNxwkGLNgqisAMnRDjECpbWpVj",
  "key8": "3BkDU9CCzPUkc34dx4GDvhJFimkVLRvBMJnriQ6vC2qvzNedTzF9zJmbw3QU9iyPJzDgVnaRxVDnr97J2utzu6Rd",
  "key9": "qYcTLckYzPH2xZv6kzc34fuJUDtr51RdgxHhvhoxGrR6D2iVp5hFmjRqDSHm5QjrvnbhhKu7ciPiUgJrVaqpiiV",
  "key10": "62VqRPEPxFRZCTV4PcYS3LWjGKiqUL1eYHDEmPjkn4tpDvsCY5ACrmR2aK9a2gBmhJkhLNi7dXLhX1vFro7He8gB",
  "key11": "3inYBXKJLcQJpNaMZBmB1Rur5TExJFfc4tV5Phz27bFfwZxXtMJAFfajAdrJaRjhcJg2T2rxCkYfSNqGqZYrv5K",
  "key12": "3qbZrfokZm1zLGVSR8HhW3bKASNXURxzbZeNpqREqT74iGbzYLxHhhqtxXffVJXrDNuq1SvZbQwiVqLmiJxNqDYe",
  "key13": "5KbLoLqYdDuG6nKib2mHs87JiFm1NkYb9CPxNZ9pFbfFtVPpGTozaa18MfNLTNuL75e9phiTx9qQ5ze3hW1MU7kp",
  "key14": "29X6AUdBkdHavAp5ne8ChMTGvLQz4TSvLr5FwxZCyZAiWSCiRV312Qzi6ARd2kQWJnpDqek1NceBXWhL4aiG7mFB",
  "key15": "23z66yPWtWH4UBAkdo3ugRroX55ogv8DXgQXDYonqw5HzxdkTMb2qUdETk8UyirrpzL32hqQRhYmV9r5cAPPX7WW",
  "key16": "4aGaDncdMuv7emZqfc4iCSHAqWKwJ1g5xKComsDWMbzD2tNC1jm2YvUEE3TVmxec8uqGwT3uGE3aqdRSNwdL2PZS",
  "key17": "4ef3fs8QWHndGsGc91a5aTsxKrhPZKn15PXdTYmkXWw4GPJnBpDG4kYMq3JaBX2BarbDDq1o4gqPX7KVTxrRbwR5",
  "key18": "5g52nwThXYiUZbNyjW7bNeQg9SfKuXMs4wSDKnyALRiShpqt25cYnHA6riRrDQVL9kSZ348k1WrSNTuiqDkHc3wK",
  "key19": "57Z4K5CnQ3h6icuNhZX6xHdjQi8595KPbNxgUV5QNbUtgh1KKzcBcBsH1XQR1n8rsg2qFBm8h7Ldgmz3ARNqhzEo",
  "key20": "3Hqy95oTQW2fdYp5cwP526pUajKZt443JsEZukYAmH1u89dDdSphAfBa68MhYkHoA79rUDcJ3fEov8gvenMrcCnu",
  "key21": "4mdwHGLduRxby4CF6oJWbqc5ENhgwGgWpXbVuV4eg88zcGkMbXK2Qq3c97zgGG8gNqAPRh78DBvtqNdZjB85qP2W",
  "key22": "sc2Vq7yZJ4yaDBvpUrW7zx3t5aogakRa1XXHYEh91xrNraMghhnhsQ5nZT17YukrWz6NBWWg4M4aeHDB94KGpBS",
  "key23": "2knTLcjHExRWvPZxmYVPgd4LM3MFNhYzKZhF14G4nPNYeYegJt51CWyiWZzEAsqHLqiEtRR393XfjBKHejPSAaUE",
  "key24": "3AXGoXF921dbQj5vbiVfTJCuWkkuuboxSmH9mNMWNTAesYvUB3HzrLBpY22Q3GbCRN8ENsKmmFyknNKEAijKmdPd",
  "key25": "4dm6SqBvvaWX7ggWnzixVYdfVg75SeczDDAkgSNwNs4Arbn6kneJkJqvVF4iBSnAqEV1o8LN2FFYzgPcj9xU4XFz",
  "key26": "VrDupt8H4RtD5CKUkR5c3mKu38YicTtAHkiTZPLxKR7pf5uNyhDLVzGCsyBKnR8rUzNZhp7dnA1YD2JdqKvLnqf",
  "key27": "4wfSpeDEzfizfNSp9hRgyS2eTx9n5zr56tj6e6EqWoiKuMpKrpm2uSGavN5bcpj7XhF6XaKwpaLjyyEqoYs19AKd",
  "key28": "4cv2JTnwUnVtHJ7ea6AhcQcR2VdVFEGJrKngs8kzZg1yhjTCMLccrQfuuSoxCGoXFJP7RVzXMKYMU78dcZT3XQ9q",
  "key29": "5aV69WQuniCFxZhqyb1joWxjmE6ftbgzhXSHxQzVVu4JPfydiKqAPXtF4FGZYzuTES4qKicS9jg5XtC1V6dpj5Mv",
  "key30": "K8rrjymAc8egaqVCL8YYNBPoVtN6Ltnnva7a4MYmAy34SukjaT8umxwMPaWgR83dTvkLgdWT3qh3f94mx9tJ7gh",
  "key31": "5FK8yc2rDQ68eiFS8JFQCTmzyG1j5t9S1EnT22fJMUJqyrmSzW7mB1TrnY2Zn2wMLcpiskq93Pr5XvB3rvgodBLN",
  "key32": "5VLfkgikZpFqUxePQbdf1cWzMPjR4rERohqZoVsP29Fw4YAicMxz2RKYcsBJY5vhiYcwejBPMceSpSgyggk6KYnc",
  "key33": "2TTLkbs8SxGnrAKcrCZ4sSvJ58hFQM2XN9H63rRSDjcqNua1T7c7dAbgc9XvCfvdU1y2P89jf8NvGDzdmWpxVKPc",
  "key34": "33UCVni8FSsedd3XeP1DFTGFaircpUP5zMQR6AApSij6dR46FzYGZ8CsF7kYnmsscULwjrF4tKMnCeUpQGvXngAk",
  "key35": "4oaHB6GbkqD3bNw1orJaVj1ivEnneP7JP3zFdgswcBgL8aV2vkyjgNd7VBZLa1u5YmBcFmutVWPTHzaLx9QMU7N4",
  "key36": "3BGAn7KPYgYP1VgNv6zGmMorRS9iLChevUUA6iedK1fcgEkCpZCRSBk3RXYHnHYmcWrrSQ4UTx3BLvcbKb4HXD4j",
  "key37": "4479ksaEqhZ2qwW1Rz1cETNg7Q8HDG77bLkveSr4cro5zzrQwD8wuWPkQk6CMmx6ThKjimFWAU16gzHiTaJJMDyz",
  "key38": "49Va7dV4izhxDf6Q85n7dyuuS6mZHAAGV61s9miWqW1A1oMbM8LCLxQXcX454mjT9SntZfWVKmgYybdx8EbPSR3N",
  "key39": "63gbfWgj7cX5ZuYJk72Ds9MwJyWCN8karJ9pjmbA3LwVjU5CdYMw8sKLh5sPpso2YkssM4BTQFPgFsnhCcp4Dth5",
  "key40": "THA65RK3yHYkMdSKRdf59GNBM4aECBzFK1ikxfNkxV64A7ZDMP5NorhacUUhEW7uHtoTNymHaGk7sKUQkvGDEqN",
  "key41": "5kWSadcqabzgyGPgwkPGJXAgTFHnL5m7oLDBwt17Yd1CMLJmKrTxC81UyRq34ySeLnA6HqQRHk18Yeof9EK2f1KX",
  "key42": "3znLGFFwRH73xNQNh6c7DzqSG6W3P7Sr1XpQ2uXHpBa76hEYoXM4sJYnwgKsRx1AVo9iew17VgmycKj7DmR9db5i",
  "key43": "2yYJagEnJcph7n9jTb7dEQJ6HnnGiWexNSK2urgUcx5uXiaG9d82kLJfNRz91qGpchBkLUraCs8mFss1xjF9hF1D",
  "key44": "4VubnNwWsrJT1yTdjnimYXehqMKoT4CwjiK2Gyo1NNq3Qs6mBouwwkPRgzYrCpjjUyUjb7TiXC56U67qvUCZeZHz"
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
