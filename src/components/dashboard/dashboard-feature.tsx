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
    "mLG3G3HRoyGFBpsgCwGiskRqkFc4JZrHZ138UshusZNMfGh3xyWAxJNNuyp3Cnub1t5f8u67u2KcVUi5ooy8seY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55JC18jZmo25JA72RF8efQbUtRN9psmhcEupVS9VUFXWChLFHLJoCQWJPxA13tJcpfH6Tc6VLwSsCAyEnVcEMbpc",
  "key1": "3qzuRwHyGVPQrG33EgwJBqPBhX7USzHSVZ8c9138WGrAHHj8mdDrjECL3NmH1SPV82uBAUFYyKNYZpF32oR3atTQ",
  "key2": "2h86H6aBUZzAQ6bqmnmaGVNXVCFCHYJE1c2jU1MTxG2u7VHWJ8Q63zznFze3xf6fzvZZeNnqVdFBAKrzSpxvkXZm",
  "key3": "4zwVLZQS424YjgYnd2GBjNESXxYpSv1hzQQ5aGjDYUZufDM7qH9SA2Z5w4SAMLWJ5gg52DF9JXxWCmb3upaxorV",
  "key4": "5v429PcBYVw3SwerppSthqUKTrqgiZ6ANzsucffoJwEJpxkvU6WRhL3YGRtEUkcWNFCGnND3rP9iXFhKgSqwwTwK",
  "key5": "55okLWMUEP5RwnjDGUe17z4noTo7FZBj9nu8REqG6TKgC2WLGjDc6UCf4GFDPrSGNJEL8rFBLc5Rj8CHEm7xnunb",
  "key6": "632dbGQkgab3v9oscBZ8WmnSXWkF1aDi6N9xWNWDxFSf43U8mp9s24JrYSUFWTUtfhe9xYokb13zKqfS26HQJuyk",
  "key7": "4qwEkRfcd2GpvANKxDUYffFCWeBgke2WCTwPejFaqneXGcvUxV56VxdsTUzwZ7FW5D3Uf3DpWLt8rw3yiwLuR6ce",
  "key8": "32fwTDmU4fEptddRhXyynfzGYynhhogtzR7DnyqtLfc43bufXgtDt2FfoMUJdrU9tDy1R9eJbGyZDoGSHpGvwFJQ",
  "key9": "3x2TZZzFJzg8Q5hF2qpcppJnSwnYnMArmBGD5fFnMsDybZHSrwRPEhKRkGCrgbiLVQb4DxEtjHQwUVn4gdCYtvfe",
  "key10": "22a7hTqK22LXB5N4PxZpDUaWhTYS5iNeKHZazi56CQBLoYS6BSq8pzj6bkPhavRjQMXJLh4nzEzLyPJhDSRfS1gP",
  "key11": "5bNdSMnWffVCgenz17JkYkfKF3dHCrUEYx282aHnNTo6SZbbcW3gExxmhe6GNL5D4kXaqQoMhmhKcGhdSjSPh5ir",
  "key12": "5J1XXjKKXEtfD1AyerkC1Zf4uCAHb7GEyUrj89iJPbPyLtqDewF2b2QzD6W56pYTGadxgYmuntGz5ZAjkXV2LQqW",
  "key13": "2m15CqzUynuSEx18A8biVGrh6R9hUxL5ncF4UKoKVfbNcHKgr3CEzuCa4v1f6QjGgX5VGkerWyoPSuFJXFLLCSe1",
  "key14": "4CMc96CkKRjyv2BEkHqM62xaadmvxYJgmc3oJ13hQyeWT2f7JVqW125tA3Me4oKF1JkySmUicG41CADq27T5jXSp",
  "key15": "2WUYaHdaKBNGasVgrLDkMBwGYTWjctZPdXAqWkoiQ5z715SeodyMWV1g9mxwxTMWcotf5ZrVM3X4YLSY612WXBHg",
  "key16": "2v4KFqcfDFgSXAkKQ6jtuSTiBT8YQDCiXueH4dXEQTKaWK9UWbEdZ7rrfByyXHBUcAwMUPjy81mDcZ3ibJUU8zsG",
  "key17": "2SPG4LoyFv4FeQxqcswUznNt4AWWfnmibQm58yNJ9ecW1S7yoAiVWduKUWiY1rPYbQw3f61JFLMEcaCuBPYofEkV",
  "key18": "5yBeLYnGF2QBa4YborqiGztc1bHPgjEZBv1R8K8RYeHgwLtfp7AMu5XFuimPFEr5x1ckLY4HUpisFDw9KZNWkQ3q",
  "key19": "26reTBdEPew7jUbNkKqicC2iyd3DVXbTocuPLPQyrQC2PPStaY94ab4XrBHap3UKN2eGrdtyfdy3p4nVaJPtHjFG",
  "key20": "K84hhTA9zXJJWj6eiAm7GWC1FB8223xYyXo8SXfXYua6DGCWRRZFhvvhBwFv3MSiTxu1umGfovguMMbuR5tBEcd",
  "key21": "2KXnHDfST6GqEDoFtgNSDHbVfac5jf13J9YA8P2Nmof2ZSqNbSz97HfhVfKwDLULkSmoJ4uswinzXoap2V2CWkjT",
  "key22": "56ujvph6McnJHWRnxfWdm1X3a2RB6JXUK7ivm219vMKt7KFYaVdzhrnhxJd9cwwxQ7esBd2p4sya1G2o9am9ugks",
  "key23": "4nh9DfHmodzn7gXHi55uK5GFm9Rxj8CEYxGPaBTUuG872tG1abp19tkmTz9bLX5aXNNid6LsDENagA3PKABDyLKA",
  "key24": "3ttBQex2pGaZeKx8EBE6jkHh1dJ22ffTYsxtUBC7UA29FtyUe9evPMFKfLMkojRxzy3Gbmex8uGGwLdu33DUjCoe",
  "key25": "4N78WN86MkGGLgWRMVggVutKkL5aiRaDagMVuz3a8UFUfoj5Gm8yQfNH3LWzKjJgrnZKLXZz9BZ1vdzGvCFVFyWt",
  "key26": "5QUxUdZdRhpKnnYkeBu8osJ1RsLQxpeFgyxwbYLKrVqmfWrjRWqgRmkVPN5ost5ik8MXfpGV8rmCz2DXZj3WPoVW",
  "key27": "5nKpTxkvqN2azWZCsF1oBnX9yd9ip8U49bjbx1qwjeU3NyDFrJC8jkGMPxgqNqTVLA4QWV9dqKWvXFDV6EpmA5dw",
  "key28": "4ueZxjZzxZbLs2KMmVCvKwnKDVN19nxhKaR5SCarCBdjoaRDmjuBNChs6iiX1oFTzQh2vkyBdNkLdqkEFQB1dqJk",
  "key29": "3QZ7c2fFVFXvJxWGRTBTkR47WHaAYD3J6TFFzgLqki527f5arHSwo6UMZhmakK4T6WSJWK1vttmLi8tKa7WvXbKG",
  "key30": "4sjVDCuHei2VgzLC3NPVX3pzQbJdjGa1qPXK3Md4rcoHtJTwju4XySdjHcVvAhU4tr2gwoP1tUHCsNMsvYMnnHeE",
  "key31": "3YoM6ns9B3YGHVXhFx7AeCwmx2yVF86UuR9Eito8eQmWKHMfN72nML7YrqQhBHnqrS7cuQqPGvNGJQpejjEPj4Fj",
  "key32": "HXbxKJnjHHqFgwZJ4YufWz8PaRzeCzC3h71rDzoamfnfTVCg7MfPZ1NTVVxrAvUkrh9pLnxp5Sw4Y82ekwUBzzN",
  "key33": "TQ3cedorBbCECN9U99RBdsbvejSMsBJkxdCgSPkzjNeSTN9hqziNVbxQmYGGgHtSAi6A3DncZNtQrodb4P25A5a",
  "key34": "2icY5FiGVPqxBRouJjfkLWxLx3DYZEExUSAJ1kdsqt9myLTaCXfb6L37QZaVsxknx53sDxE7SB6jF5irmAvQjfGV",
  "key35": "gJH2A1QUzbvHma4hTyX958tQ7v5K7MPRyHcHobc511a9NRbyY7mVQoxMdrB18DJgP4jHX9zbt25UngiFsmwuJ55",
  "key36": "5aMLBj98wGUyXafGW7KqFnNEawEMhAc57dfzAHm6ij4oHm4MMadgEuUbVBena1EKyGFLkvWEU9KnLWoKKfzusfMp",
  "key37": "5GHpemjLEAwaXeH86JjGBbKnumJzovSJRQDjMdUs7oTW41zAec6ig4mNWDjaMHcd4EAVbhncxehQu55oXesxudH5",
  "key38": "31jdFw8T3qoRVXZYpH91akveVbMjAB4CoN6bVk9kQsiM4yLSvHC4A2FAFqfNEUj9bwBaGtH1rQvixy6Fj4JBpD6e",
  "key39": "3j1F2PwkTvic5Q1G3917dfqAV4PEnE5pdk1SfQmCHREj4VTh8FdoY6Mbeg1qEb4GJC9N5kb6kq8S84o5tsMphRo1",
  "key40": "3Qvzrn5mYiFH1qJXw2BjxGzMn2FyvXzi8A6WwFw3cgYz5XcgVV4WEAD3rCBqhJvmNZNpCLDFZRGoQzYENZHHhMru",
  "key41": "3xKG3y13dCkGzXZ1ZvorvPxaFnroqmqr5MGHaEMHjA7amcWg4X9VrwfDSykXV5sjkw9FrKUUviebda7z2LqFbwHy",
  "key42": "2vRkZGwNwpVnXhNzPn73KZ4Mv3NbZRSHZtocV4MVwUhPhugEAMN1rMBzo8maef4q3WhJTEWh5DzpEsFjYqPF3oMo",
  "key43": "32io6id1Cz5QjNpvMgaEMCfurncAJ8yqpymVkkqE8ZVsJiHzF2T7N1ss42aEjqXP4E71SNbF4uWA39gEsMS34b9i"
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
