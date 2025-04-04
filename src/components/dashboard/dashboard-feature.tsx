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
    "34moAwyZJDrFop56SDp7GF7v4H4xaUwdztLEo2JoezEAdywKrkt7Vt9rgrPRd7rGrTheybyDrgT9QywpEVL31ngm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APpu9s5sKAkgGi4Wv31QWoNARZZAGnPGDEsij6owZ7SZC6VuaczQSiw7PoCw8er2on7uZ7P4TvJReJcQbj334gT",
  "key1": "2kMwvaTA27rzUaRersdcjEWKi8ZwREA51Lfot4k3c6BEvSehgEUNR1haB5qL8CLDsUfjWeEUbEYF4HBiRpnDXUMU",
  "key2": "jFRekfE5Q5ZVRojh2fsryQndfHEKgT9R5yoCg4G8nKwawk5sV9RVwKWDUyBrqLCTJLwNw5qh1AJjwnQPquUDN86",
  "key3": "5Vis6gHJTewJZ1ckem8syRuJbwUWYVKFr64ECaCXXFFaricpnhGmDqqyy1ctMFDmaVPr1D2yoXCWoSzCFMbXwrY2",
  "key4": "G6Q4aLzEfNWf2z5fPvpwVbsm5phJRwDWXN74MP7Dyk73di9GWBp3wu3BCWSK5QLZQ1epiRMDs9GMEFU9t9Ee7M6",
  "key5": "4rkKxW9sHPBBkrvRQ4wRfaT7pqLWEz8LG3n8Ufa4Sg4mTaD9ZnJEgZc7xPyyeVXctxGvhTWRwa67T2FyBD6HLo1s",
  "key6": "3qoPthe7UPX8pVAYhLQVcuj15dLbAJwnjAnc9VwCoGZpN7eKyMfaDCkToZ6jAGkVg2k4YkDN2nvULTtQiLrE9Mz7",
  "key7": "4h6zRkhyhwkoFz9MwVhtUajrfGUMEq5tBWj7qBE71bCx6spe475QE8S2BtbVKCD5eiFqg4grBniBExiBLzkGLSWM",
  "key8": "4n5UguPayAQWW4nZVxMVwKkrRNfVM7phymoCys67KrXbAkVvkAFidiGL9FBxP2ziJ26zLbVDsiPFte6YvNRiBxa1",
  "key9": "2aF5ggDrDuaDxDvq8sWBxeqJSW3AnRBnreTP4zhyu83Fo4YbsgqrbE2nqb1iXFPJw22gcpY8ZiTaNJzqiEhbnnUW",
  "key10": "2kG1MMA75eYtFP4FurNJUSMoUbaRSbt6CcjJn8AbGhSggxthZ3VexGjY2U4zXoMMDvVvVmFsQwLrX5DFtmxUShjJ",
  "key11": "3y78fo38udzzU9vrvXm9ERBuaQ3W99H6onK3UevC2MYdCEScQk8KFKRVwbhB1Uh6ov7NRaNMxVyi6drhMGgdbUiS",
  "key12": "4akeC85HQ7rmbXo631aWmewUKdhHRMBG8WoitZCPXgkcJbb7pEwNjVEQ8Cix6nKyqEpi3auiUE2gkB8qVrmjW5pf",
  "key13": "5HsEzJjW5rgQ9zia9DVYvdnmiGurYifmxV1tircVoM49jmvfu7RhpYADbti8XyypkxpF4Cb3YBuoyZzEXNUimP22",
  "key14": "2Kp7mY1dBkzgyYeDuV1vj1dk6YSrWZ3hYWeGzwUUX2KWRqJUCnJCBnkgfQazQAd6rEU1m9TPNtghvVBdZqDavf1N",
  "key15": "3sBYkU2dmJR1wQs2oxkktWnMF4KirpKT91KBoovLRrXckJcpr5eWGXWfVuLJLV58pEbfpmrzeR3CZodiTaMc4Dop",
  "key16": "3FYTvpacdXAmmTi253oZrDYinqTpRQjRFsMtnpdagEPzwMfobJaxVXbUZxDt5HRmDnQJbaj61bafpCrecYxshQYc",
  "key17": "tkohubsYRssHqCoEdtmUo9R7FjihzdseLyynQaUjFScoEsQ6ygbmQgv6k8u7t1j46ySm6A6DiLHij3U7iKj3HBA",
  "key18": "5u5dUSDxNKWGE5YFgYV5ezMomsspxBPjT4eSPd8gv7nBUWoA1jWTHKWhktLdg9aMXRyn2M9sfQLaG7gb3sQhPPay",
  "key19": "3wnWAbNHc4zWUCw7M2hbTfCdeueMrLoRH4dfF5UwUpZ5SU4jFb5LG6L65d5Y1KRYCmwVF2scTuxCTExZT5yCNEqB",
  "key20": "5Qgt2HYKSGfkG7xbHGwdky7syY7V8KW3mudUfxxritEAuT5CRyc4gZVLnjUB76yo8XndDKyvXz1wHY7Ys2SvA9zP",
  "key21": "5tasUFgSLMXxo5ca2t4frHmFPJ5z4ZCHCpqYFRE63hdDcnhoh99t5e2u4gkQL4XgSKQNQaoF8vG1RB93tB4XnUgc",
  "key22": "5ihXHGo92nSSqZSkxJLw91UvYytXcix5gzuLbc4HvezbvdCLb2AwNJTxVeJqWBEum2RkCg3J82uzDmtsvsSoCjn3",
  "key23": "kHHrDhqnTwGDyHJKabWKqUAuzSskcimkzwHrdbARrZwm7XMhApkN5N7BrxH4FJJ9Jv4cUfz2JxpQ7xdxtpqKi2D",
  "key24": "2NdCKmHFEowUytubXtfa6Ho2KsMAY9JXtzVThA8UbnRBWtJVaae5hpm29P56TvGByhPakZCRpg4rAakNbi24WwQ3",
  "key25": "27QbqjyKu3pmzXj5QBSSFvR6kjGE5mNUSoBFvgKekfW2b1tSfg6cbdwqXgr5KRZ9Sbv6wpRxM3wHss83yS3XYGWS",
  "key26": "414joQq8VF8vwuxc427VbXSYPNaVKvMLWFrRGjj4Mz5GFtQQisPd8D3B7V9CdgCj3dGSh9vugJSqbyK859wM9RDe",
  "key27": "223vP6xFyN8YfUxiP7dy3xJUvPeK7aL7anJWwQA8HMspD1oQhi4dPNdDZmNXoivJNhPJosaZSjpmSh8EEUvhLhLR",
  "key28": "YjutjTj9cBbw8JovcNsSRhSoW2LoAwQ9jKQ2bRBhecrWg1JHgxgiHujjJfZqxqLNM5vPMUKtgFcDKJof1SRgRLv",
  "key29": "3qwunr7brDvDVGS3ZXSWptxBqFm7YfAsDP6tX3mVE3fJ8RyaBXh5KXCUNyw2tdTKna9oWWEYUK8SKdwQEnpTYF2R",
  "key30": "ziqbDYL7JfzQ9PHNB4Z2V8YUu5xXJDpZ5qrFCiNiAR11Y75dsAhgTqMvw8ERwhTT85to9rgxe5Ah4mCeyoYBzyZ",
  "key31": "3thTaW8U2sQbrsWRxiWixt9d1GAhRNbY4oX77AVjCS7FhLkT4cR98BWDk4SbJdoVGdcMQ56kjSrwGa6tk9BZsEaZ",
  "key32": "2PmBv15HRbSJ3TQUoo8mo8hSYmntoAyJd4Qh2uFNceVSVDgUXh2TFDLKseC2Hj42WKFn64y1aUu4zwuQndiMwXSS",
  "key33": "3TPqNW9ukN1VM7Syr5ZMdtCMa45Lb9pyYfEg1bYB5SRmjabWaPE4nnQ1DTA7MLaP9FFnMNdpXgcScJrF9pM4bXL1",
  "key34": "3CF8cfHhpRJ4fUHNC826cty1WfXPtsVk4rcn76yULnjifGCNjRX7tCVrch3bwqzv3zZMzrxTQf69jn9v5vXb89Wc",
  "key35": "5QAHZH4DvnFm77KU6anDU9MCQ8t7jrCVdWZQovmvV9EDqUxoNqMFS6bA6Dk9fYsnbMMuSF1JTsk5Y2ns5NkmxbZq",
  "key36": "9P885ujs9LZVHvzEXvGect9r8xvYqHmadyM5rTmEUq9BthUEq8Dxp4VUD1K54yNFcoVbX6RAd9Ny4odEWmWyGu4",
  "key37": "3nirRxyB1ogw4NTqVXX94jNtPahoPpDdpV9BJH9QrwYSobSEzqyHrKuGoaAH9EZ7yPXWxhc6CTBNz4dN9LDLd1Nk",
  "key38": "22asL1MgjnojPr6GKpMLJT7BjoF2zXgv4nNW633cnKSStaL8zwfx5JkxNgJxT1RkVpHoJGahWPue4y9tbA62d3Jj",
  "key39": "3KXD3Kmh5CDJ4zMhhDc6Z5ifTU4d9Z9NmRbGf4r8axXJB8WSBuHHMNfvf9GvfbQJC7YSR13u6x8tAvrLxhKXjvVA",
  "key40": "5wDeZU9v4AuuUkn5PVkCz1e8KE4jpv8GEa6WCP7zdrU4Cgw9AYG7a1NEi47i3Ysg1fN15V1xWTMfZ67AAzFePmYL"
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
