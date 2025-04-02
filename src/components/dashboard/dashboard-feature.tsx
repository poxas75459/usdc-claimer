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
    "2sonyTYAmSk6ny7J9vxa9zkegvX3cR5FcMrcWYqRU2VvEtnBADyusvr5nWoBaKjTmV9GnYbFrz4Cm1tzJ3k86MGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdNF1k679H1gCKePL2TZd6ui3YnzM9ry1qHdY45PBvskJMRzFYaYLVTHenr4xkWNdNC3B9QRQe6TrRNr15QY5Pd",
  "key1": "QV6MQjsguy89sV1cvLT6jGoJy55omt2rnJVKgs4x1RbjfADV6CGYRJk7tXY8Hmpn1FyDEr9pw8ctLXXQze7a7bQ",
  "key2": "417xi5MyNyzDuR7svmSMq7X4E6j94VDsnVwLVnebMJ3Fsg9QDiPwhtSDC1Efm9XfQV5zb4B7FT7GUKHoKsF9RNyw",
  "key3": "3ceZR2JrnHs1v9upKmYVFkbbr5njczGsXTt9bkR2rXEko1CgVzXTjUoifbe2dJnimKvF3tA52tPuof1dxJHwJ5og",
  "key4": "41AibZwHNnr7bRDLhgVn5we6NsiC9Rmy2yiMqosuHW7WoM2Cb5Cn1MvHsF2QX5J9w7HMBMhcgwefrdJb3qLtQabK",
  "key5": "5rnRqwDK2bi5LfymKfy4nvEUJLPzJjssHCpd2UGcSxDg6knAL2V6MHaCBSnYy6FBNq8S17PQD21gayTESzk3QVnw",
  "key6": "mEp2QnG8w3PC8qFhPUKFt1HjttaQsumXmht1QuCB5ZrZEMW3MC8Xu9271MADEXkRY7VwfRoWtF1SBh7u5DbZ5xx",
  "key7": "m4z584GANdAu6dQPz7nh4iENniAphidoVNFSpuqqmtzJhGQBKq7MxW4wCCGSJCx1N8MrWMdDgg6YFg8NKn7V9Zm",
  "key8": "2fp7ACXB22Znp2D1pMtmX4u9gfUcp4V68nW78hrJWMuLhCyRGZWMkWZeXK4Hy9iD9cqgekA42uQupREHgJa5AnB1",
  "key9": "29Pmc3zwD8Jcn8LLtcu6wt4P8fUfNAwkDqaPZWAaHEg1QSC617XWEaq2i96VWUCmk8Z45n5A83J7nSxHqCpqtJ9J",
  "key10": "ZxWpfdV5m94AVYxJxEr7PE8oPPijHD8K73WuFjms3GncqCJXLwovRbEgv5eL25U24gEKXQ6RHjXoxQRSSa2xU97",
  "key11": "66kd8PetvFpi5kFE8Eep6GpGGr9Wt6Lt1nnGQuGzRuw8HJgYspky3Lf5cnFJMhRqLLqNiZP7x4J5DSdKEm5ExapV",
  "key12": "61cpm6PwkkkiwxQCdxVNbh2JERMQdSf4kzgRvAVR59EPVNoJY58iV3T2ufWhYtNvRzfSbtpatUDD1qpDGjbf6Qhr",
  "key13": "3tN8gYjriUdewhdr6tH8f8B1rx4mNs3HnHoZGBZakNARAeHRB3GkNHdGee2djZSWbzDRx1gLJXJMHKhZLU2MGf5N",
  "key14": "fgvHXAz6iH8KEhekRyyCqhBQcTNf69TipUCS2f6xLNBVNCVzF8dG1JgbJFFNv1rKoVkWdpdZEwhHKFhpZ8LXxFG",
  "key15": "2CcdESswBbqghhqfG5LVDzHiVDLQFncXsQkWeZ29sSW4YGrSSSBLBvxikQmJTCo6iYSCQaG6n33ac19zqVjLm3Tb",
  "key16": "b4aGi3saQtK9nbtBx1EP6WMd8ZiAVJD6QvrSLMYFxBB1hiA7VTdTcY1XZWx4dYdD1ch4t1cQdPAF3CdDHsizLbv",
  "key17": "25pxt1bU8vt4SHxpKKEDhYVrsEKLsqiKD1vEhFSG27pHLC6QXo7JLYyKAAtho872UrqsPUr9s53WaZ1BoAUsax8a",
  "key18": "4ykpp1SxSUXf5hpPa5bgAQQubRzqHZHsM3q64eVTihQg1YFqYrTydSy1WZLMSu7xdEz6fx42hrfv1D7eJsBATukP",
  "key19": "5bLgtTsphRuFu8iZ2716bGreCfnKYbMDhwGWwHJYPFobuN3UDzaD7hMx9UbvaHLqu5KfQvmvads4yuqdiwxBwu53",
  "key20": "4VA2Q5xEDn71fxqCT2XNy5pW33dHhrVdrpo38ctuGmP8ZEUiwFrkWK5BSc5eghmbh94izpQvfz897B2ohjinfHUz",
  "key21": "3LKmeFpSQnoV8cmXSVDXtJ7uQXQdaE7ZLDHkdcbWVqQPjinhSM44zYLYf3jEgmEfBC421bQP6ePXtUu6FmB5komj",
  "key22": "4ct2JnJ5oChjisyXZGLDYtnhG2SJ1BPdv3VYKTDBk19hVzNKKanpqYGjWwM8ndkTRHdNGvn2F3GXstPJDSq4gfVG",
  "key23": "4iJ16hoVNQp2FHcabGKyzTVctExJGsGhKRhLyWZfdtQE8T1DYn3PjY2wu1snYQQsSpqjok58BW7ehuZkh2Mvaedu",
  "key24": "MdwpFuNokxBEPmvY4iskxW4ZciZwhXsp1vCL9Qs9rr6wrQfoCX38H5dP63C9rCRrPWCpW6pK9HdJk8Fwd9F6htC",
  "key25": "46fx6Za4uxBoddUUsoDMiPTbW91kujNJSc8Vd5hs9k59jwFHpec7w8KqDUYDtminM7JU7AzR9amyffSK8CGPLsaQ",
  "key26": "K8BKowFTdcCdFjn71fjvvUE9bdsJbKJtaifxgeLWF1wZm9X6tfQNWkgvzmUuTPjKrPiahVZnTnFTCz6R3Xj2nan",
  "key27": "2cVcaUBvvDDSSED7kyFVbzFcTBuK7a7nZhX7L4Vy474B9zQAou9UuyiZopACssXS5u9KKFih8tqRpPhs7q9AxNnp",
  "key28": "2uA7NVssn22epjdwEZ1VwcSNcWqerdKdEY1gcXMX61mQT4z9qfxQzFwxPsqod6ojUiVBSRSv7SczMR2EHTj1qkYZ",
  "key29": "2YzNCa58SrzKVJ7Hwfpc5EhfwkGu5ZDwM21hEBEAQPg55DuB776iPvvtG6qVNRrt3Yz6CJUo4whGtqZ7xuCPRjgq",
  "key30": "5ZnuEQka4J6ixZWvzdSB12MGiauauH2CJxmERWi2384wvUQwvon1YskiDf78g86k1vZHQ3cmNYJXf9sSCJ6zHhvE",
  "key31": "5WbuFGZKitdZDxXWU6Qh8ziThv1UJRFYXqcd2RhdxQ3cscT43mhE8NR2kD1x2FEkSveV9pvXxDzDS54UmsXfY5aD",
  "key32": "jPQ16wx58vKFKpUxNEJhnMTV9NNeoifeanJqkjbUEYUN2Bfym9BBSFUcDSk8iccwepXanc8KBE7mcMns1u9kJcK",
  "key33": "2SPQxSGYVG3qEPjpqwCiTmBY2FLNZnhq397fvE1QSJVcgN1nTT9ZprcdzeBmcMxpnZtddbjYERQRBskGZX4Gva55",
  "key34": "5sB8Yhoz1BJqU1E4qyKtF3G76okanAsVn89QbiWiquQdagqjW2rubaCm1mg1mFu6pZNpcJThRyaw9a2rhLxHY4MH",
  "key35": "9AE8ZAPc3c4u7Eny4pAh9o8QPE8T866SmfDjKXWXUEwtvH9g9z8WB2Gd1rtLDMstpebLtxrGDDpfigYwN2GYgYV",
  "key36": "zqdAbEehMKnE8kinchq98iqRCPLaZJVV1U4oYqda5XSW7PoKna3REURw2oonrj5ubeiyq2vbEp1dCuU2p1vRDJZ",
  "key37": "5HB8qwxFA2vT2D7kewg5iqNaFrVRq8wM7c9LqpariBKBnLpaFfL5m3XzZnGUD4UQsHVdyYfxffzxRmmEDKgYFeXd",
  "key38": "2bSasFvPhynPxMCxihMDz7kdpaU8Uz9vvMXAN4ta4mRQSBd81TxnYUVuRF8WYJHSVqGpEouY1EdLn3Lf16wTuLnH",
  "key39": "52FHvjBfYGZbww7jZtJUvQyR6TBRRqbcf96hWXg8zMuAwAzgPLEZFowACQDzynvgBfVYRuj7TkVEk356ZkffNUfd",
  "key40": "2SdpSaWEMvvb2XeQ8aa9esaVB38Fv4mP98dWX14YRoKGywF6u1hZGDr1E6J7YhFbeytyAX9YFWwRuLw6jGDuVouq",
  "key41": "4EDGMYiZxt6KwbP2zn3Yf3HDEonzsisYEsNqT7jbN51dg6zPb3KB3BhzYj8wYSF8mUfVRgGq2zo673ouXWoSwdin",
  "key42": "2PzDwajiMbqHosuucvaZ6RMeC65Y6gne8WUyo2RzXLBwz8ah7jTzfgEywQ8Y88kyA7GzFfZYVwUTwYroUXtUUyHf",
  "key43": "4b8vDL9GAb9hqFkQWWB5BRuQWfZ7suSMoH5GvrKqWydtQuFkFshjKnk6xPLu6deSDJtazxf2PyCZNHBo2imj1C1w",
  "key44": "4N8Vrd4bxhRrSzBAR4XfuHBozxtXnTYcumAYBrVxmu29QktRjv6nWnVKXXntFJZbVU1QGBqc9oz3TQRrfbLy4Gmk"
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
