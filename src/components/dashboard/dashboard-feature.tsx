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
    "3jaNE3Bh37s9fkH4nYNhZbCKQn6J5Y4Xiwv6A7TarrqWfGonxVFNobYReTKQCvgmV2xM5cnBmD9zs7GC7gETBWFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfKsrstw5P9jKbxquNVT3aM43y1DoVNacUoJTLdQPusVQVjDTgiknz4dfVt36SPwWRkn2c8rtQDBtoJR9YQT6sw",
  "key1": "3QckUGQ9LvgxfWXXHecuyGDCtNP767bK7jd8s2umQkGAAdTGGFFBzWdKoUnTNRwhJZUY4EphL4nuZ7gNS3Uj5KGx",
  "key2": "2QTUrQmaPPhAw6rb5DKKkjrgF5Z1hdJPkAU1iLezi3XSxGjXiCM6pCtmCQzKN6atBPBaFGYaMhKQffUswCLztQjx",
  "key3": "5SVLXPEqacURW4HemVgUJrbJisuRRG7QAiFzrYY5ZSMZrHXDgitwdoShYt4cdyKgCAZS9LPpLKjUyHi5o8Eo1fCX",
  "key4": "2FNTLLmsFhgDu4sxgyPZD9GKcHX7ziYYfBsE8ftkUvN6MawyXWVXWHdseAbhKrc63gFKdvpkxijWXfjJYF1H6etP",
  "key5": "2fiZi6xfZK2mVHJGbseEbt6SLHa5LbwHrWDCVCVRK5sYgZVTxZg7WqLpVCDWYQfcTY32kuWHdcN8yjbrEKiZj6F1",
  "key6": "81Z22xi3gkpo7kffzgMD7jbttT6o3CD9vfVJVPxxrtaueMGuvgwuYfara6DpR44GBiAcpp7LLhvc4vWpCtvzSo2",
  "key7": "5RX4BCxrsR34UiST86JXokhkLX1dyhViVrdkU2JaeGSgz2kDep9HbA8TzLmPXj5hukrDQBeDVyYE9juRMtPz7MFF",
  "key8": "5DARhPdycoa7VYmC3srTnhjyDRDcZrBZkNVKbzG1ytPWXMD8AmA4vWdgNPDtqG1ZW3Vh7gdXGa6WezMikMy7LCDi",
  "key9": "3BC8kjELvmoAGArptasu6eEPpgHPERLCSNuyLuKoDmPXnoq8GRpsWLcQUzVwvjJfkecAnGfCaEt1Vbrh547wwekA",
  "key10": "525cem1k2oXjPRovztg628HyuWBscnhfxn1z9mYg3R5uKwY9Cxpwdndgf3EWM5DgeuEyhqoPZJRr4xPAzsBJPdqX",
  "key11": "T7qCcxdyyX5kqDYwdNMSZJ68WpUDkpSVoqQSk9v34tq4X5YkBeRhiWM4yqR5kK2W3a1QsZs9A8xp13xKumUMKyT",
  "key12": "2VPk7L8SBdYD8xyKDT4uQpKqjRCTZaFezcfwjw8nfie8ywSiGDLd7aLEVK8QuiLE5rdjGUUGxg4vnAegLJeM9B54",
  "key13": "2cLN1bTyZifEXHHH6hfc9fy7M5ZJS7ShgkEVm7A3DCeysFdM1hqsBhYWmfgZc9fqqQKmvGnFaWygiQ5UesrZMy1T",
  "key14": "2DhyLeGnRad5zeKtao169Lk8FP9XPm6jPLJwnFQQj3xKaPt3Pp95BuZrRcT2zNqvYY6JWHg6GB1fbiCNTyj6XZL3",
  "key15": "48JJC3ZtASAbZj6nVtrAisavzqP3vpyQLNicgMZ1v5XA193uxVY9HX7DG1HChQbvqxKJbnRNuyuitT2LjpuNnjP4",
  "key16": "5TprDCsL6MKpE9fj8qK4dQLzkqrEAdr1vMb4Nv2EApjapS1oCqM4GnmnzFFCQ1R8X82V12XYszBbJVyAZyasm9AU",
  "key17": "4Gs4GcraWo9Q7Hba6T2CdpX6284ZNBrwKp83fLAEA796VTB7FNYES4eHBRXzLAUoCm1EDj9dCw5UZNEjtKSgKEQy",
  "key18": "3SD2MpTR4rowjxnATpKp6UMVrDw5A5ApfAVgMZhGC9NhLe3ChnVJQYPTG2bXN5H1YLP2vtDHNrHa1yeydfiuuH22",
  "key19": "dNgYeRJPBsPvJ1bLDmaAW5VC7aiytNzBySektLxGEvLMhYDEjgBBBfRwg1kYfn6oX2LL3RfoTgEd2HsPYbGbsHD",
  "key20": "2TSvYn2eiYHwEfzoACm7K6F6n3i1eppd3NnEx1TEhht78zop3VMen2pZd8Y7VugnUqoRWYsGC2NH1rPzYf6TjBQt",
  "key21": "2Kjudwm1RgKda8r1TpdWPMLrDg1QKUZcSDsL1Tyom2dzeYX9fCQUQRwqwzkEwdjBNuFdFvbjybbD635WUSHTiUUr",
  "key22": "43wznV4EqWrbgGqagUuM3JsidExRnGzMZgKgsj1SN13edVUz1gfiWnrTSC8ZJ4qgztRP2WJKtfeJdHu1d36P9V6g",
  "key23": "39H1KjtGADhBYM4f2QhfXAEik5AsoW8rMsCVkSZ8JAneCJe4BMHERvMUMdWBEem1BxuuDbeENgcfbcj9nk5qhWbL",
  "key24": "w6qMmzTNRFVPFEscz7iQBiZwt5D9788gSiTABM6riZKPQYXJksg7QAQkY1Qac4hDYVPoL9j5NzVKkX4Y6ct53JB",
  "key25": "88KVehvHwQBDArzdKm7qgrq4ExBy4NH1U4o9gRkHhVHQEkxuNZPg3YHouu66ffVYnFoJia4sTPii5syNe37pWY6",
  "key26": "4ADw13xnPDZxuitUbqV1oVi9hgQ2iwedF9CQSmx9ieNwDp6tue5JuG9uNUb9y3L7rxGAucfnRTGTDsptkW2uJVD1",
  "key27": "fPqNos2S3J84asdRFKpmEgD2REMqt1V68nJWLMGRE5GRnJaAWDWnVchrecvEPMthb3G1trGGSJab46muPCSjyig",
  "key28": "2uuBLiC1gRYNhJdXgX4HjAaeFBHhJL9MrqWJ6Zjs9Ty7Nd4rPnrBi5g2qtUQsjzo854Gg2FoGzyZqUzKrU7dz5a1",
  "key29": "4BE8EVhZPgJCnyqMNUbVgh9DkvyprafBwfmyQj9SPVe91kxixUr9uYZizaPUwNrnhkmSybCyH97VsWpsZTjfqQYd",
  "key30": "dmNbPZsiYyHo2xLrCeeG3Ze1KtPbmqbRqv8g87WdDGFgLWWGuSQzJLwzX7Ni5RuEJCC5y3quJD9ZbvzAAiBBJdP",
  "key31": "3bzSyho6oaNCxoX5Dxke8pkW7YccdcTrJVYt9zWWW1X9C8p36goGRgNgHR7TXZfnBsfZeEGYXJcpPoPZjeRn9kxe",
  "key32": "qPQCZoxNYM1Wm8mefjgGxovHfVpAdGnQyiNsLhgAAfMBVFZqB7yMSWtxUgibNsDg2SGjWp9jV12CVSe2jwuSWxP",
  "key33": "3Y6xKpEt6SrAaWcoc7rLq2LTitRCDwAoqcXemdNA2Z8WDv8RA8uWdH32pNKcn5EWxQ3JzDQwcRjsWM8q163j2GhY",
  "key34": "5HD6Vi9SuW5iipWcR92sXvNYChy2SJ86CezdHyHYEnnvqHMpdm1pPNEXWjVsYxSeZeSh4n9mYHhi44xcWaWhg8wh",
  "key35": "3N3rjxs1dfBnLsQca6UYG3tsMUiqsYAxCJJ3je1XyidxQFzXjyNNQvjA8LTzHqRQh4PXPX9fixLQ9jLApb6MUw5R",
  "key36": "5zUHfuzxngUyGLVLq4newAeSbNxiWkioSsHZ8WLc9wqAhkYXtZBs6dpT8qwbbXYnRga64dS2trmyLNT6CG9zhZPy",
  "key37": "3PzRxEMNPBUQWL2uxyD7icq54YXz1yJdTUuqau6QKquK6p2wAbz7LEMBxLApTQaVqYMADBDtS7euFzxXD14VbD5J",
  "key38": "48NLWaJjMvXsDGusnNK8jXfiLYQkPWUtwSey43exf3dDFrXCNX6EmJJpN1atuD42gNDHGsq7Zst3gkfWVEdj8JbZ",
  "key39": "64m1HgG59JEUXgFcYtGCtN7PSBw2GQ7iVMkViJpLe6Ez6B6xwbqS8bj9Qisp1eLwWNpuipyrFH6qgSa3SXPAqg7c",
  "key40": "67oVE4YpYsDL6brrMo6XSvs3HYUnWm6sTr4nvUz3KVJ8NFL7zAYX6foEfjhQrtn34d9GFy9GAGoVoVvnvcDisZWt",
  "key41": "2VHb2aCraCduxvwiXCsuKgzv4bmh2HWYrMkT6b4Ta6cnsq2zjSvgCXGjfYA64QQJu3nfzjNzsJD3KfGXvVi8kfJb",
  "key42": "2JxZAEbsR8y3cg1vnXKFH3FxuvkGDDSqRjK2KZhi6Jp9mqX5S4jYiHiyKaYp45N3pe3egzkY6if3UPF8jtYqd6cM",
  "key43": "5iCareA9Mf8dVmiqxXAKFruqkw5rjAJAuXCXSZra5JTAmbanwT7NLtVKQkr4KhEz5vtHaF2PdvJzcbyHGqsHV2sQ",
  "key44": "66vv8Yur53XSZqXi6shpqCr7Ed8BBd25kzmLALov6xEcef3bsizCikTdJVJynpQXspoAKwvtFjwd5h4yo44rxppH"
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
