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
    "41ojfy7P1mW9vZDvsvJtqTCWVQwxEVdK5QHcdXodTgkar177tL7HWpFJychK7Wdz3VU9B4ogrtwNeL2KVoovEBLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54CFq7JykoLg6vERP11kQKqSXbqyKgh93kprPfcE4ciGvqBfC4THemQmp3WmrHBHZUi6nwtrjjgk3mxLtPMeMnUB",
  "key1": "2PT6JAqts3aYpw6yaDoEtV7GdoCynDYM53zazvZ2qErPmAuLj2KTHBerVYZXrcWoCDsTGkjzxpSxmkEdJs6GJvmk",
  "key2": "3XUq8zu3rNfd1di8kioYssojfsWHh1hkqCQsxYDoLxmVXDSaYNrYnBwv7Jc51DnaEUxeCYm2ac2CYxNrGjg3tCHT",
  "key3": "4qvUBus7jvezPNcuGiE4eeKK3AwAN1mM3fkJBgLGgfZdE1w7zGuZ4fkpEmY66qK5TXEr178ssc8EhLGdnAP9Utg9",
  "key4": "36xS8RZrTYJ8FFG9eyxHvK1cBmN1GCDREDKL4RRdMtxJHV154xxbU662XkR9b9CV3TQqaQBxDdXSW73w4CjpKeM6",
  "key5": "2APY94b8V2UbLcUUg8UH1xKfYC1sRcgNnFrcgoSkod5ecNUY7mrSmQKij5RUA2YHtJsfaWAp1QgzkxBeRVqZ9qGu",
  "key6": "65KjzVKz8ko52CduEpreozXtFAieD82F93dHfb59KcLxn4Xvc8mm1RKu2NefcndudKP6qPTig8o3mmHydtrzZ8gy",
  "key7": "zY5V7ZrgG61VCfANU59rpi87RkTubA3Gno5UFMJnSyazhgr1hrYJG7rqemxLANtYw6XFkNKhThJwrtpNPe9UbWB",
  "key8": "McjRZVi9xwpvGC8J5tJiZ2tJCfAHTZRb7HXbnssCu79s1BrchdoQNGXN3YdxH4U4RntcTSVLfPW6C5Ns9ppMWtn",
  "key9": "4RMAYjeGRHBDDzNNNYEg7NArM9fm98FRewWnF9sF7R4eo5RaZoZ6Hj6VRJYQyG4w4rXqWKLu4LfnYULVKPNkrLqV",
  "key10": "5Z3oCtdiUwKBHUcQN6MDCFmSUvMnMTh4zx6CfCfsvxeV9ag1rUfkgyT6sGdydEgDMCFUawiwu8UyZCb5d2Sm2uTC",
  "key11": "29qzaY5CQqGJR43yD3T9n6uxdJiJ7immZ5AH3ifrfz83XMa1puiQfmaMtG3KBJ6M8tCG3c7eKJeEM14DtKyoYSWE",
  "key12": "5zazFrSeanzHQRPDkc8YLuUXRZYUD2tFCzdeTMGEcog8Kk4WD6ygwWQEMjfT2n8JEkVBffyVRfig5spEnn3X43x6",
  "key13": "jJzjLH5rgojH6hmLFRrpM7cf59P2EzFEKLKjG1D4pJm5b8BtQNMx4iXHGt1XJQXpAdCmA3Tm9YJD6fVvH9Zv3L4",
  "key14": "4qq8AAZDjeePHgJc3ySYzs7rMAvt589de7ZWtta3A2ffA5ppmeDhjeaXLNmFKBEpiGq4FzNbJLz3pdz1eX7a4jp4",
  "key15": "5Dam9cFGjpdZY1vGqWap6kAshm6HRphPa8PuWFL7Vw2k8hziyDwgZ8pxxRpCXaVbTjkHahJVnznPK1jAJwpBgDrW",
  "key16": "5AHovqNBZ5y9sPcwmyVHZqMJT6XtQm4RGzZzotWMppwjaZrAmf6yDk3WjYD55yBbAXUgRdWJt9u8T2RofYLzoKEG",
  "key17": "54L1S4qfrhFG8z1sPzWiu6r3LUfdRh55df9x3dWvvL1w7kdB3TgEjYZ9trDNYsJMc5dZhLHbUDhYtoETpknx3xAG",
  "key18": "4bMAQ48RJoQ8YEN3N2PHdteYGqba6Yr1kxFkmEMKM1qYuEovZN7jgAFc7ptRdp6FuTLovLrHmaXgtCyeKEDjWCEE",
  "key19": "7e5byECBppwEEoPjH6nmDHcFYcuuUzQTbZN9TuCcBMG7YpJhy9LTefzDaguNCFtjapS3hetZ3wsMJHzP5vJsYSQ",
  "key20": "5vuWsRYoPyu7thzFbnGBkW8W876TnihHx1rPBJQer92Xg5GsTHjq5fM12EekdNtr11mK4Wr6wZxbHbjiW8hx9mZo",
  "key21": "LKqe26NxzKSMMmHN69gETqSLGbgQHc9vtHfrdfd3m8dibMVQReZ8ESFkshiAntqP62hkRocMe16Xb123VzYAddz",
  "key22": "22dTxyu8ozcCwAcrEDz5Vt4UWj7e3qQfYckWiqq6HgT6ebYvxganswZU9vwFojX1FyFDYzoYrFcrKzsBS4gvcsmL",
  "key23": "5643E3mu1igtHtDbXUED1YKwnEsWbX318Ru4rQksQ2ePZQogDELLS5RQsJFtfcxRcGN38RKjjPzhZj6ZXNkt9WGS",
  "key24": "5mZKpgrncnPWHEiuNVAeaWakAuSpXBAPNmSGPmzSo6751iwPdKYP63o4tuS4TVkgosv7qewuaQxkXJ415JN74k4q",
  "key25": "3NqCzdUvL5dyqBTTHztrHUqCAgqH4y6oHt7MQtAQEuphhBqkwVcTKYNCeiBFN5uW5HSJFGZExp5D7bfKV2GEZ49M",
  "key26": "3qDkftPGY1txt83bzagxPUcg6M7bm17kMQsZRzb6okKpkvxDs6LqTAE2PT3jSMHhFpbeGKnd3GLsU3P38rNtnVnB",
  "key27": "3iCazz4yL4Dq3UYztFTnMLWSWuAY9UEh6yJAwhpYTbjX5LPNgsDgZK2VAHWurpiJRnigUxYm41HjcjH88LmTKS6p",
  "key28": "5MVRbMyBo59KzUV3WCGdNdeWu17xcDxbZ4ZCfdvJat22VfLRsXcdaoxrVik21iQkm7WtCUUxfszAL74U8rEWjaiC",
  "key29": "2tQKvfDZbiGfavTSczvXdnLg2D5MBohapSFYqGjjgxBwVGbTviAX5ST6AAp2ciVDSXCgw1j9BaB7FbNiS68eTnUB",
  "key30": "2PMFeL8oxLfhYdRmDJvGnL4SZyg7jUyk5kkVTwzLFtZNHairKzCrCVPVr7VqYiUcPsntF9iz1dbjx7VBJX39ZHX6",
  "key31": "2sUGSBWfEtXeDpT9rAmVxmoWznc6xmkG6fqcVA1rkVR3DkAbt6ArCEpEjDMGnLuq2eT5gDnhcjpV76p7LCo3yyF7",
  "key32": "2EaW9jkNAzcjQ7pRcJEb5mysvAzGQZQcwRLAVGtuMKaXrdgdgVdMfw4PFEnbTuHbwEFNionMo2gYhnNeYgLsRHWb",
  "key33": "2QD1fqhTSGwVL9bQ8fM5Je3nVJvwo1iWM2zx92SpLMvK6J76JJ6QVYjeWGtbcNcSzmnwGUnDr4WfQBwbqFDNUGrp",
  "key34": "3YJzGewdJXkdb6KoEm8sba2aMaT4vWpsxnbUHwu3io6wK2UmLtmVd2FPet4YzPkHmP8YSZrHLWr4ouLD1JEMgJm2",
  "key35": "2frAGkj4c5dQMHHmnxsrbCJyPTQvzPPuWtnVJFji5eY5b2itbdEVJWytEUBZgk8pD4Wbsd1jFbPmvnDgciEacaTX"
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
