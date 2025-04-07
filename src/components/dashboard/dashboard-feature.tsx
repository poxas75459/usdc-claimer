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
    "5ZhTVhS1u3cMqEr7dbEECMQW1VnaF5hWS23FDj9JVyFbR8VZHK1y6mQAhDNA8vWRG6iH4XmrCfBmZjwMveday92s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qttgg6cSyZ5emJvtjZPnpuzo1HytMMT2GUGAjv4DN2vrSUmufgGLZWF2qMQ8ddvx4vfWQGVPTKD7qzChq26DkSd",
  "key1": "eV7DkkUFXttQG8mB1XszMswss3YE4oanFepKzTqGdUFdQ3kG77CvKkW7hUQyj5ziDcwdGSLyyBjqHQgYJRD2eVF",
  "key2": "3Swb4i3miBCuRYN9bYkNZPx6j9Ua1DaBkPfpe8QEbRnQEoy1FdxEzaiNc9mAoc7KfGX9ANZCjVaLk8whTfRJzdLV",
  "key3": "3ZA5agqhKAEY4J62gLpW7umf392qb6SRACP9286TfrFfcrz67BZ39pafVDB6fYG9Qn8aXGvW916e59H8yyPxfaH4",
  "key4": "2GnQXTFZVouN7ZPoBojFUtuarqkn6HvchHuif3shNEinDvs729rTAHYaKWo2oeGq3RLzjgza4qX9Qb5UQJLL1ig4",
  "key5": "4yotiDG8pQmJvW7Y4N7nEatJazMHVPANuoQN14MNW1hqLvgWx92FhuVHEXFxxofhrPXNJXkGukk61vLamtL8Vzb9",
  "key6": "67ftvLdxzsxVApB6pqCRXzF7AGBmCKCrhq3KMuqNNrYxy74whYL9ViWEv4zASsT1shicdSsQAg5zYPuFNxx4vnbp",
  "key7": "4dwnrqL733AmVLsXEb7iN5BJceW4ueqcwEuC4XmCM5Ma43X7h88qUtSWjgxUvhVmdwbijhP39k76SxGTFboAryim",
  "key8": "128xn3uSopeGiN22kwuVt4axJMrHNn2hdGKi9K3yuH1ZkAcBT1YDXwqw3hct3gCK8DMuZMiQ6XzwH5Au9h7LwLaE",
  "key9": "3iQiJQ7neFpAMEGXwFF2mNLnQ51BRaog5bLBfjijjhhw2MzosEoWcJtXBrkdTTyMYEBRgoXbzqAURTXSN2kovj1C",
  "key10": "3ufknmkEAS1pAAZ7Sc5WzpfQSZcMHcARSSY1d6kRvKUPA56LZXsnqoUjyT6UPJnRHmb8NFH6b9eRQDFyqqYjGKpd",
  "key11": "52afCaQgBtadXcmJ4fCXDmrcHJw7KSM9MEgej8ydu3EmZ1V9wdaQXwt9KBasv4A4uSnFcmJj4GxkBKUPFinvakGs",
  "key12": "52x2CHgadqaTAPH2aPpVDgeCamuL5SARwiPpy479WUTqoBcAnBhMxuqyeveoKTFwLdSwp7AUJDYsWUZ84h97MCXk",
  "key13": "2RxCefnjfNppgWQTUZovZqLcJHyFMZUNrZW13FVHXugnGWGyg8DBU7rZTRGWwJkCJng7moWceLcs7Aq6gJjQZsY8",
  "key14": "Md3taJoHBmuEMQrWQuuybu1QB2ZzB7BVom7dN5A9cMJjkH3WmXn4c57hWNa27B6q4zfVJEiqwm7oe3vxyRSVhv9",
  "key15": "4WC4UJGSxwkZWL1TicqozScXJp1h6pjvTuNm4yGbgWSiKC4Tz5teMvb4brWy9B6W51iHJfJCtYidwTnHFCPiPYWa",
  "key16": "2Qv3GjV4paWfaBYsPeHrQ5DBQgMWqUU9TeBoHXiaZBagSkUbZmzT6qCCoruUJnpmoBqqGfbXxEvbmQ9LTv6fpzEQ",
  "key17": "5DowxQgLUXs9yhDswcKKxvYSZ3x1w8aVHFrqfLUhtdXohz6wbYbETJwbNp7bcJd2geEAXS8XhmGP7Ww1Wniyb3ax",
  "key18": "591GBnM9R2AFbtDvWMCpWvPWA5D9VuZvzkEyW1Tjy5QkWPbWV1iaxWqCo8SzXcWLnKQDvLx24Rvfxaamkp4tDFgK",
  "key19": "2Tq38MoUwzYk9mxLgaNEzbPcxhxFTagxKjvaAmJveQFn7aReHCn8VeoWiKR7wVuATsokxJMTNgBs1Kwe9hkmzhGk",
  "key20": "5eakcNPoCiLp44TyLaosDsGtm3aupzxDgvZFxWdnXjeG8eghgM6FEVUiEMAxQiStNLg6cxXFpP5uBCNnDKcg6unk",
  "key21": "2QD2g2jEYUUe6JtLE99xh3Dqek3baUG3P5xhB9cFqxE8Wc5FV9NkDbXCYW2CKaU11FxKJkFjas3EKnXxV3j3hcBM",
  "key22": "qQ7S9YNpd2AnfvdbFgiKhBveWK7uCQofwZcuHsSTqRFeuhShEaBKdCdJTKmVQyTBAZkMrVvGt33ogEvjak3uz3B",
  "key23": "3vVJG4oryTuGB4RjMHm7dqq7fAR6ckM8SqHxTeTPJmFAkKxW5uCcD6YXSqAbeGUr4dPv2nURyj4M9X6VETVWhaq",
  "key24": "3ZcddGY2Hd9j2JA5f1Lx1uZYreBuy66fByHf1pPfSnx6NYjGsUNBDTDcp2k4kGNvyX7DgkzQxw2NDvTA6qEqKvUb",
  "key25": "5QGV319QztZtzSWh5b4gVp9r2vDDWyusry8b4mfQFuANoZwjvUoTchtYq1iBeqc394T2KrFDUZZSCNeDHwLL9Y3B",
  "key26": "5QQ54gvEfTx24RSBZisnV13TnMDQYJxHDhitiSdt18xrChnT5aBKyCeXjxBrnqrYavVdRq4xKFUuFkdrYbDtZJuv",
  "key27": "5tb9msDV9PDvNThkKkxD3MEA1iPLjWy5BPYYHXmH2UnEcgWcki9pJtoG8oYGnbiWmsCAvMnKPPLvqQCBhqi2TCJ"
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
