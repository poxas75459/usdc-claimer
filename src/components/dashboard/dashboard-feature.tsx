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
    "3E5HvVx86e8N7r9veEMPz4kppD4YvjqkfTuCdhH1hnXLDyckDsJ9NdCm8cQQZLDFX91vfWTiRBYSmjQEjnkNnAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETohJgeJNLYk69c46PQGUR4Y9TcLub6da7QyxFKBMvMEUgE5u3SztF1QMZRcSRW7WC1NFdCQMEijdXJcP2vxs7U",
  "key1": "3bKA1swyJ4LuvsnpqzxZsDu3QZdEfa1319GfrbAPbLssF2ECQyrHY5P7wLc6Eay5hEmQHbspT8h9ZdBBJdUkbSvS",
  "key2": "2RfqPTwUfXYBUvV6D77uymffHNWzaTropFaKdnmKgQvUQciYA9kvQGgoRyno5h3eBFQF9rwiQjmDCGtgXwGniocb",
  "key3": "45KmxPF9m5soqx5kKucRVuhLirZVAFohLS2tGB5uTKy9UcCjcixtmAevUBL3wHC71fPRi1ABjqJmL13AXRf4sLqg",
  "key4": "5zCzCDpjR4yRjzDYSJ8Ur2vACspafoVJ2TXnb2YtNL6viDpkkHQPqzgeKqoFm5GcqUzfMCZ7ssubzr65Es7M8mrz",
  "key5": "3ygRYmAV8E6Xta7LmvxjoXHAu49G1basR2RDSAedGgVpbTvrWXxSpySmHfpC8ixsDz33ei4iUtv1whjMekXTfos7",
  "key6": "5fr7getxW9c1iY6pFZYpR1iQKNzQPJTLTFUh15PuJfLVkh8RBS3Rxn1TqGedcK9yvNAh6JyDwvq8FDQw8fYgHnPf",
  "key7": "38pUZ3F61N2JjhNpWX3ehTaGzoRqNuFHvChHon2AfMG3Bw4AxY3WXoLhKfwtKwhj3rQHEHUwxrbZKtP4todNwANg",
  "key8": "26qrMgph11oqRgajAbx1eidjgfAtwKTEjQ2hR8D28BV7h4dYtNfX3uxtnfsvCZ9HhtHe1x8d1wEdpimPRL9hULJg",
  "key9": "4BxTFCJ3FEoXcRRggznF8QrHtFizWAwdg6UsViLwLFJgYHqg7YiToVtR8qJbLNzL9nQR9VFEAdkXHFJJdFYTQNCc",
  "key10": "49kceskmTs8qmn6diZm9sUna3ipbFeFKqdMosvyp58qNFXNo9JLpJ75o6RxnqkK1emiL6YggsND1R3Ln6DbgDaig",
  "key11": "ZU6dwYCrwynWMv2U5whieWrG9CUmVTWowHJVvvum6C4fxu8pvctufQguYbvHMwX4TCdRn9GG9KeUDzJUyo8PMU8",
  "key12": "aWbecetvSSqQWBy1XyguCRQYbgbEdc6Kank4CgTiG1ed49L9BJgcB5biwB828Df3ZTtrQVwxNvGYTADBj79un4o",
  "key13": "4DWpJSuwWseyX4u5HxjcfUVW8B7zbpj9vWcuqWswt2giodSkWEdgaCbgiSNoxNjyHPPo2pw4r295CzWtMQbMFzK7",
  "key14": "NbvjRrHvQ4UnsTAHMNAoWoTTftXSZprqNhEpzgYu5UE5VueCA9Kj1ncuv4t5RYLJR9mtryP4Z3LoiVsWBq65Dbi",
  "key15": "3yRS2ZHbjqnizKx9sgu3zGyEVYes3ckSDTG3PvnVzPZ6XmNSduAoAApPm11xPJcPFqFPmrqRLSDr5ikah8FYDW3a",
  "key16": "5Z2TccQy4S61qzKHFabbrvqnPAXnXdE6eECmtJ4PPCKV6ZYd2vyqMHvfxL5XSgaD96QH1twhRkKrpnLwemak8KMM",
  "key17": "44xC3GouxWhJkr4QhyHCGaZp7ASRLtKjsaJKdkKQJYkoDLg4ggsYm1vc3xsp7LbNSPsvrLUB8iZBpXYUGNUUzhj5",
  "key18": "GXmkPbm67xAHfsHu2xfeWBHRhMcQhjoaWop2NPEL1V5nTETFM2UgPSdvzdmGNJBQdJsiJ6xgnigaUuQKZXqu259",
  "key19": "3LSaMMYVMkD9TJzNtxXbXdcX6D3P8VQkHn4K7FeP6boUkBbBhNHPGWvF4cpfpmHbtt6BnyAwhiU11pGqtu13Z2ir",
  "key20": "56xpwiqWMdYVyuZh2tNH7NPtwiwroJHYUTXkwjpLJyJr8w57AZPeTUZjQnRQZzevJKWYYGDU3Hx8k6h44mpXHunF",
  "key21": "xCa373xmVMsjrwEHhZjwJSxbwwXk4HdBY37Lnwcb3jEcLjLxrz5CLqHraPw1EMafVN2d6fNiRAXcGLwu5BCBR2q",
  "key22": "5z6EqRZsvxCeg7Mu3DtpWexh723qaV56ToYSp3akjyPN3JZ5CFPxRy4JVQmW1Fdw2jJM4ykMHXVffCZerdzg1YQD",
  "key23": "5M5RPScqxz1o16Q74iX6FuSNs69UYQhRAQZrcrUSbKmMP4W5bGH6gx5dg1haaJoihhD91UGggmM1x5y6D3Xd8GzU",
  "key24": "4NCMB42AQjsjtgi9Nnu9WfUX2tT1NA1aFcnSYTZrWvSJ7oCos8zvQvM88NHJ7Crfk1fsgSSR9bm6q4p6SJaVf1u8",
  "key25": "4Ct2yXTp3TGGGuncNpGfzdCrwQbpfGx3J3BuAG2uQAA9n6GwWMNHpGJqQFp5AADagy7kUrBSfUiZNvfDQWhhb1C",
  "key26": "2muZfF8qTDBhhRYE3qzfDN2KBThor8amdqfRmGXD2TiUgM4jVLH719MgHcYuojEWZyMEptKCcfwn1oWfpdcQphqR",
  "key27": "3NYum2Zm9y4FiN62CpJTGxtgFK4ibrLSbMzPf6rthdnnJFRauqqajbiXi66KfKHmGFDUdm4hYXt7SWJ962w9MEuF",
  "key28": "2rgnbxx8vCQMxDkMivsyv5JDLyKK7acAo6ym8NFxRkAnYfVe9BvDoNY1bU2Hxdf8w3bUdSUeTqnorJ1GALXa5rEz",
  "key29": "2Pjnth9GSZsR1Xq2orwtkVcpxApDQtA5u99ZAmbWsj3krZNr8WSkuHbaTKTEKupKRt5K8j6qv5aFybnpmQristFC",
  "key30": "26bcEAoYPxBMDQoDv9E1EMLGZNzSTvM9dAdxsjLqFYjKaF9VyGG3Fj3mHN3i12JJwpCpii2duJXw6AFANm89HKbU",
  "key31": "2hQqabMHXqqHN6WzmSWv2ZUf7bfeq3cZK7ZVCpRV6YGZPk1Ww8tXW5tfjcZVKjXt9yops9ivEUfyZ2ze3q7jFyYU",
  "key32": "2MjUNv9jdWEM5CP1Ta9EPFBdQvQaEigE7DiLAMje9JuTtG5LZ6hz95k4pX47mUzG783prLsoHgh7cBvkKPGxZyVT",
  "key33": "3GQQii2NopeJYQP56U6Ttt1EqFqJgNr9T1gkRueNmorciUCUw5cpjThjaoWhzoXMCebZ4kvyvE7kEA9RJnHBDyHj",
  "key34": "3D1RbQVBWNhSJW9N2uLTiLuHYtQN5desSjueJKnzQTN38TSThoT7PGtF7youUhygmdiWzi4ufSfEvTTBiTsgyWU2",
  "key35": "2JkfNDFdsYXAcJup7yr13wtmJQwUztkVcymFRJqWXm8HGc2bacuiWJqJkbMUYpXKJP9Msmnwc3aLvr2dYCKazBKa",
  "key36": "3DqfgJuTi8TDNr44HbD61PvpyMZK2eN1nGsh7SfYykRmBoVCdADpbENbos9scCjMugVpE92mF6zu14chT4ja9srh",
  "key37": "sS75Mk3Rjzo4qzzDa9WT7m7ArRc8wyiXv4cAv1UDwZyAx5TQ9YQUNf49de6LmGZoDMyAEyAp4EYB5K56BKZYadv",
  "key38": "3CKzBn6KHNLMLBwXYKD5R6riyCMDSC7tVazTvr7WPQHefn9qQ3MwbLg3MdXMkoYTbHkBFxWBKuR3BvrPerMMrEMq",
  "key39": "Bh5gXRUjCaLKtpukK5Tv9NpD7MRqH8MSZ9Mw6WwG3jpsen9TNeweVWj8GKaCGtFWUhQdD9hgb7pKn8SajH6kqi1",
  "key40": "Mr5Bj7gLns147gAaw55EwMPo4ZhMGxj5BrJogN1dKQhX53Sxzy3YeqFr464Qi6kxAeSXeEhV7YQ9gCmxH3xrSpt",
  "key41": "34KbswC6dU2pEAofMFKERH4HwuSBSXkywjhdNB2hVsxreLD99htyNGsXTq7m26U1Hyc6h5E1aRXM8BwYaTpojsf7",
  "key42": "3jg2sWo8G36f8iZSaZtMY6SChJr3QBKisQ2XrHgaF453Hsu5jadjuGkoQsq7F1wyvYt18WxtKVRRbqGiukTZUw1H",
  "key43": "6WvYKtGgf4EqPDZaJNVQ1SjnUaAQcVZpGpM2P1rTTVqGM6so4TiTfvPxYkby4RkEtz7z3idPff8Y9J988nQiibX",
  "key44": "3nUvwcntUrkPDsjYSPVojEVcQnjukvggfuagSYjS3nAyGS2g3z6dnVv6CMv1hScKCCtQyBnd4o29K9gvXM6DuJwh",
  "key45": "4nxBBuEzs52DKMzTUVyWy5ePTnSNpRP5oSx9q9fEAsaTDrGsgqXUVLUMWoHitwFqHNmFEM5ir7DnMP7TkxASL33h",
  "key46": "E3zYbNAoDihRskhiaSRm5d6i53U2tWqmQQefXq6aZBv7MSMQLkndJ1jdkWm8Jbs8AQZHpTJZWXg6zf1iDTTLcNF"
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
