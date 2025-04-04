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
    "4uahX7Vuq43SeuLsV75NBNEAaBaph72rajNCkEAipYUNGh8gRJyN2mqv9gAGKy89WF7cdQSs8dGisdmKCDTvRj2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5arpsuL4yBhw98UfGfPvYaqS8FAHCHvomsgyXmfnpi6NQEkDLCrjUp2rd75NdbcMiHxSjBqpqm9puw4FtAKKvDFV",
  "key1": "5z3xXQsNhQkcErL5aTNpYA8wudPz1EB2Btapvr22YDFiqrnTdpz8ke1VkF6mCaXweEoNtod8difukMbHHN4YBGct",
  "key2": "4UgRdoMrNon3KqsUTyaFwZgMpoJnVQEPLXzBmA2atUUmeAPAMjrYhdtrdCPseZkJWUzwdaoYi7K3izncGwH9nwv3",
  "key3": "44q6irmKwDNdJUY8DzsY8TeVH45VRQt6SvARPwSsHP5K1nFrcxs3H7SEL5yzWg5t2dBDYftammw4EnzLRUQujg4Y",
  "key4": "4sGhsznsXP4SB2sj7459kEUi4HjfQ7kQW7ZyJyeBfXubBArYLJexHYSknTSH71hB6bpnWBswavVhgYr29CfSj85z",
  "key5": "okPNdiUGykVYR4ZZewqEnJvczXqz6kpJ4P3UrAG5WR2mKw7STKkkwLjx1k8iUUmq3exTb9ad3epH2pYc2AD4FY6",
  "key6": "3cEGuAQyrT17SFtRRfwRH8gDAXFUcd79XDufV5CpLbDpf5RJh2KsjJWH91Jd82WVWXFB83oqCk457SzjyUhye1AH",
  "key7": "npL257oPA72UgQmeFAHKFjcWjh8VMCitAHb2gDWAjfsLQYvFFihggm45yHSaaj6F9tEz9o43EZDrw7jeLLQdLHa",
  "key8": "EHB4mJaBiPkTrzC8dbq3mXVbaRXv62jvgQXnuDpoJayRZhFkwDU6pti2FzjSZX8jcL7hSQxYC7D3UfM7AVrfwYW",
  "key9": "2eJ5kq2LT8L27CT1EwqYrcsUpenKF9fjm86Swi5JMfqPdTk2RK6AWyThmzcui42e9FfNgEg1obhneXmBdNxd8Fs8",
  "key10": "41iyZGXR3DBmFnxqedP1U5h7RMT5X39fvYjts7viNfDaRYbgAub6bW6m4ZANowH3VQa1hZWVjHCEZdYx48ySAuRT",
  "key11": "2NE8kuw3tX2X9xghKRsf3CQZDNLR7d6LkssfLM4kavF2xVmBWpzPTyyXLpmRM6UgX2zFmTVwVsvA8nLcUVgTH9bV",
  "key12": "5ZWU52DrLuj45y3TU9UxEBwkwebCWxNQTcph89aVfXBq6KXtapZFTwzjBehqGBd8vLKv28nwBmorj5G2XBzSZt8u",
  "key13": "5Qo5weMr6JSTeH18F7L2hcUPSznuiqWoXpDr7Mhc15ngV49BdUmHcyNQCWKsdRsNJspxFYapw2ZMfKFBKuh2apzd",
  "key14": "5ckrbgThKAR5YoxrBUDmrdTk1bn9KWfdNXfL9aJA8VMwMzkrevvuwskxhaYC8zxMyBqegFBDrhurrwGt3VQHyQ3j",
  "key15": "p7JfWmPAg2VA8EQQTrFgZCdCUsP8d8TN3eJV2oLq3zeuEQp9AwgS1PUQCavYvUv5TYxokTLem1e3qzkb5UB7FHH",
  "key16": "2Ra8MnBsdPM6G4AWoffcoQD6k3ba1eKB1Fphwmh5SexCP4PdoYaJbi31iMLS7JaumwSsoNZT1ARSJbFaoiQtAtho",
  "key17": "3LtH8d4hcYw6AgMFyDPFJBL6yFGfqYyEb2eGTohMBbHXf7z6CK5Hm1DJ8j3BbYMLfyw6vnG5GMTdME2cjXw3QfqL",
  "key18": "5Bs2AgbZsxuXFZ2QDdu2V5HprrZZPerS3J1EqVFhbL45XT8LtDhYxNgeBpFrAnjrxNBagEjTZ7wZi3981b7upg9f",
  "key19": "4MjizAz1krnUwNRnTD5urhfooAbswuNNadnXrNR7AYGoxj14X8LZkJGZQnz1FyVbPcDL3ePk7hchfjxca8mpfRfb",
  "key20": "3by1m75wVWyrFyZ4K1cbuRs5xGgGFWkXTpbobjaB89czzo2sZivrU68Ffy6vwXYzFJP1yZYfTU1SzPx2QYAxpU94",
  "key21": "3e7VTRBJK358JceUcrjK8jAYM6J3jJotn6cLVnpWPobzGiQv9PJPhWqWBDQMYTdzjPsDV5VjjejoeKzgmcjbDPXF",
  "key22": "4N1YAFXcwDB8Ss17gZQbajGAf5uzq9hhitDVShprtzud2bNHERNzsdi3XJTDXMwY5eHwmWWbqGYcv4482imxm5dC",
  "key23": "63oKrygV4uiSYYGDc2fUaEE8eGDxCXee7J7mrJfX8e1kj1jFe7kTiinajKa1QboGb7PuLtEY9dv9mdmPphRoipDi",
  "key24": "3TeHxhWpuqKz7hUJKk1BPBfLRE8DxpsDDyhW9GBGCCuDh5wRVDyxAABJvyx9BYeGGDe5ZqyCivCopqwHnfpuGjD9",
  "key25": "vLumMrgoyuQrhTzu44KumALimF4BrfN7pypcguDuLEEdWXYwkCX8w5J9F1VpyzBfNfXrK4pc3ZDkp6CVzLVumd4",
  "key26": "M9THtvbZhk1D3XmhUeqizxQGXe9pbRM4qozKp1f9jFnvZmLwADUjutpPEk8tToeSd8fL4zFRmrergbmAXGvqy5B",
  "key27": "DzaNtAmLS6jH3ju5UfGXp1fxqUw31MiNbh8AcNNbDC6ajUb8iBwojY1E4GuYiXwNrp6c53QHPFTerfEmmpgpGH8",
  "key28": "3hRpNe4Y9NqKQrf5cPbpVcwNf9z4K1QRo3FHkDeFSGWocKkqBdFoJrZV9MRRE1Snu2eNmAsKH3phHS3G4eg1mEbK",
  "key29": "4fJ9Bfco4Gx5HVpa272Vd7ki9zgjbfoq7cWoqw6uvFRmLTijamrELy7mUDQmC5cgmQKhunc6nXmZmJWCXR2HmKQm",
  "key30": "4uRTDx2JBgeEqCFR9cbbndSSYtMUm8kdxQNWCDFk5Vdhi4L1ZtuibBtdhCR5vNYupk2WwkEAhry1XoAtXUQ1z9Wg",
  "key31": "2AEoExXofWTrNLV3gAJ7pivvykDLTTVRsAZeVvyTYwHgRMhnfvD8mD8P3u89HALQ57VUm9q6d5EZuTQPfY1PV4BE",
  "key32": "5DaUMq6xqbqJC5ZRVSAZYtuQ47mMPdzQkh1KEBRfQRQJ9hfswLRzdL9UqBSVAET22hcs8KLT4o1qmyAvRwTHy4Lf",
  "key33": "2KJonzTg7MiWpYbakjm63eSejUdcRX8Z1XbRF483j8wfrrfbznZW9TNN5tDPs65wFoSD8ARQRfZiCfdVfXH56wDz",
  "key34": "4RFwRpquC4HfgysWCTGTfjwS3gmHjEtQx1CWFH8qFbeQuDazmpdQpQ3Q68uiw4T738gw7U6c8UmTfHJBxqsEAWHi",
  "key35": "3VxZ9SfftVVRj8cZXQxBA1cQxekKrGmqbqBwLzTtXdA3LQ4P6wp7vtvfqRkeFrP4GEbxMxJZMNqG4LYXMQTzHcAM",
  "key36": "4Cw7YnuPTmsTgFPXpz2SJvKanpxHMcbiHNfgrkKoTVRjw597FE6AiEN6ApUKBSUVrBvPmXpZfSs1SEgYpxshsHFR",
  "key37": "33w8Xp31aRm6orQbScedNV9FB1hMSRZmFGFpb58xiQfVJiFfKnWC4Zc8FCnZ8AtDr5kdSMdxzsa3uiEnFiiuJVwc",
  "key38": "53f4CWa1Ziy5XxW6PcyTi5fQELqKtayCUdtKFnG1BGyFB7CFMydQ4hXiHcrfUpEzZpwygUeLfJoRVeA26W8TBhCr",
  "key39": "5tFp6e3cT3pqRvjhDRKQAa6x6qYcyPJfj45E895SiiQ89Ad5ooCCW5S5CF4XvrDvPimgXNrVjwjgtGfsdk3B5LQo",
  "key40": "5LKkMVwXtUhevfeaRkLe7czmpogYsLZzrftCawacKMnzoUyqLSzbnyYczH3MFNJp7KiKfNELxxk29XJdzTvA83FL",
  "key41": "4Dx6oXSfvfrZvDTQXUN1yx58zUvcvcorKt12ksC7Mi6LA5FHpB3GFy89cGFABJf8W6KgDCN6TE2FYeiAaanEHPxw",
  "key42": "4Atw7DRmB9iR5d1guu4jP1z3G5KSicBs2pz3beF7kW5BYyfWTLRFP9XQy8JibP1cxHqvwn5JZ6N6vRQT3gdYugqK",
  "key43": "33ZLPxpiW1WcbuZFe8AA82SGVcitpMJZQmhrwg2nvxRmU4uVCXwHCK7QPcJfGANAMKvSNh1o2xia6safdKMxZayq",
  "key44": "5J17GqCbQ6bcF7E9eyJtLpA9t9LbrBFTvR4YNqtqjWaJFyWrNfhuZqqibNGrbtNtNHFEN9Wyd5EJ348bUmrwDyNt",
  "key45": "hzSYZ57zBecmWpQu1geuteMjGDjNdU7akqGrGom6SxJV3x9ubmNA17QoMru7AeY4mmvVKYcnqzBQ338ExHsVDDi",
  "key46": "3LrpiaxknhuAUheDmU8b1fxh2asZcP19XtaPE3sGoTuueYRBqGPHsCW82JUAsntCK8WvJXJmvFedkmczC8gUt94Y",
  "key47": "5Er9yNYQiJGRUK4HyfLVCnRXkBjzqgcsSyj2xXLLcT7Y1r15XSzZvzv9BYkodSZCgM8rstZpYkUpdwTsaohVPMk3",
  "key48": "4pt4mxDpLrmX95nGLjXYwdyLdhWuPDU7DhdjabjZtktXW2sxVz5MRQ265gzQL2XHHJLwckEfhDDtnDBw1jaaf8bV"
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
