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
    "zF3dLyxmjkEPJP9duHf2DHTY4AYmETh6GgpJEHCw5Hc1Q6qXRGLfrkNjFPhaPmwH3zjpS488gKMH8BRKykvFGZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbmYRMrYMuaPyq4eLWfGrDsxWBKoMagK9nPbDzjg7dsnSybUFBgJTU3oFVBnhBYQq38ZBNuRXvszFzQB9dLVTnm",
  "key1": "22d7pAE7FmEuNUtmjppHkSERymuk2BVYytZfGxxNjSrmnbAzPsKteTTVw5QhFDJix9cPJRzLdimPmrG15hoSwbMD",
  "key2": "2NKCuZQiSeWMgQ7nvaqDBBRAGG6zQwrhsvsr5XgzWuWyJdRqY2zArhi1LKofncTYJ6AgTV16u37rKA8V8FmZxqBX",
  "key3": "25knqp2ZR8TCxRVC3rqp5ZRpVgvXb1yFpTK6vyv7Bs7ypHJmQhWsi7fMmuht8qCVvKzexbX6PZG8Wd6ms2Leppn3",
  "key4": "QHhi5qtjo4hY5jr2X5VdQ77SEZiLhX2FQVRzVB3mEXpvC5E9VfG8xGzFNtXbZVu3QsnYZu8pottgqNTrC9DP814",
  "key5": "2Az19WNjH5CwN84sFDTFL1JqAf4wpZRvXioPjWgsazHV12vFGMh9i6GPTuLWBDLTwSAdHSsmPEFmE6Wfd1aQcgfn",
  "key6": "47wXTc6UVZizezgtBAyZFnidDH85Km1yLMdxbHqsHKNTwoQRZFYwvzW3ukyNfTFBeTTYkTLCvVi19hemGECQRkPv",
  "key7": "3GSK1mBWjs7wganSr4hyX1pKJr8BSDmabBrXpdRxCWFTUv9YxxWez2tTpd6ZTvNv4YbjUMhTgd7vmwB8MnTBxC1x",
  "key8": "5ARqUo79p7tyiCL5oyYthey46Q8pJDTmciq3u6r6N3ML18wahLssegS4KHb8nZmGeKT8RTk3sWWYGD4TTsqYxXsi",
  "key9": "zkkAA3e5jNqpBfSm8oWYxamDjMKiBhkGimSWe4UKZgMite6F9ncPYJETgz5WoEwZqjTjjArphsp9Eyjm4fWxKqb",
  "key10": "ifuctbj9BERbqhCLrxUiuFsvEhZqnudyX1YEpyTFCf7mABeNg1zTBgcwQ8NTWCftiZu3qqx8cyMWy4fNxxuWbpy",
  "key11": "3fjHBRAos6frkWGirdDkKMsTqeae6pkV9qoektbbVWrxMHsBXDyP5kfecHaaYPDBbg6HmbRhMjADR6hKdW7oroLw",
  "key12": "21kgUjC49xVAyZctjXo5FgzsZbMT8eguxhPpaErc395KHipX7Y1CvxDjtDg718WMySsmW66wgpa5cvcJvqTxxn9y",
  "key13": "2m9FNaKvVV2rDvZv3ips2fboqCuS3HkjExWfMtEWY5xEvEoGq8J34VYc21dfpY9gv6qV59ttpjaoYntFCJLyMhNQ",
  "key14": "5GBNYGiNcqNiYVp4NFhqRzck4TYuvin9EfBqHZWnZQfRsyebSEkPNra9nwCWEwVmfWgkDmaWDw6FbKDhoNSZDNpe",
  "key15": "37h1J8C2jTT33TRYjviuQfCEnkviD7fxqay4T2dTbXs5iqnyccX2vzuoh9TWsZdR5SMkSZCRyyEHFVs5S7zYC7sk",
  "key16": "3gaMrpoUzztmy2xYArxtwy9AZbKhufBmTEmegVizqc56BvrxNkQKg36kPjArmwvHSKPdVtP2NsYGE9h8RcMct42C",
  "key17": "2d1Wo8s4w1eTdQGV4GgBwgd44XUXdz2ZonapLozzgVCRLgjwtUf3rnwyzcqAyY9q5V8L7ZWcKL4CppRayBCWfBNs",
  "key18": "4mQnKG5pAFhMGApraSjWhTGWj5uBiMZjpoJyH2RjsFph36h98sW6wSjvAfAcvZxbjd1u77Xfvt9hjM7aqamQm5XM",
  "key19": "5nXJCa9Z7yotbk3TgUht26nokXNSr1PTGerW7GVP8ufJH5Ct7PZ5ZspEa8jjRCzMyHiqiXzrrTbzB65gKnCoMSjc",
  "key20": "4xB8MR85X5cmMBpjJ9ex8FNB9n77JMqYiHpXY8WKnhtWkX7xmUbzuhYx6SrF1hZ6JdLGHFCEs7RxxQ5g8kfx2AcZ",
  "key21": "4KJwK7F7tKPr4gcf4MZaGnSjjKVv9qAy4jjCu8EprtQnxQNchE8NLpSPPP6sKrxS5xxUF5XsKAus78kZZR6cNnHd",
  "key22": "5E88wwfy1uBocvkbFs69778ticTrajvvZXerEFrvZqqRbzeyNc3BhP6Sc3G9aWWZHi7GExmKQx4fQxtq5kH5QXLd",
  "key23": "58H89hDn6i65UYbvVvt9RftWXE5qGw7ZqpFQPiJFRPhWLe3JBZNHgjmo9jwFSr62RWkf3BhQxU5pahayweVfRUbQ",
  "key24": "2BtRdvmTXJjVC8K12DWvRQMaKn8hpp8vMTEJdM46GWpSmp6v7hbTH8ZSNUB131E4UjD7zy5wSjiGJr1w5og9yswR",
  "key25": "67n8VaMu4MNCmb3iraut3CsCuZzC9v6wsgpGQGjyjN5GasV3Z5TGLuj7XcZU6Y1aAbG2pnQPtBPERMZV9AxASJ7",
  "key26": "5HzsJkAanEPLwxWeTJVsHuWgrfE97adMkoYwHm9JzKjrjoKtQXhXq36jC5oMrDfs7nmU6VHAJoBEBmJFMU4ncFbR",
  "key27": "MtSwQvM23N1RhJF8msRP3GASmztGrsy2BtV9WHSETTwe8RBmNQDWUVJDVrsfm8d9utDDmMXTuPkcXNnTu5xLoGn",
  "key28": "2vnbvhJSTf7HbGxSTeBvPxdtBf9m5dq8ppp4JkxKnDZGgx1iQhuYATPECVt7FKt9q77WZg9FCKd2iCBQ4o2MhzNc",
  "key29": "4vxWoH8hFCUi6GWuyy8dC5weS8S8m11PcA5BuQkSRBGa14oMeBwu2LyZpg5CdkkZ5bAjXBufTK8e14jdd8zi8G2V",
  "key30": "2YZa2phoxuc2LWq6Skg17w4fMHaVTh9arRdoMCGQ35YMLF2kzjkWumBLNVnyHYgJJC672t4bPNTXLoUoXvgYmPKd",
  "key31": "5daatetFWuodVhQJHTcX4vobGqhHfcSD1wivx7PFNqVxJ7dprY4vtwZUTEb1Q5LkFLNLdmpH9dk2ca1pUhT1E7yN",
  "key32": "kBThQQjLEQhuZ2E1ZraHouYJviXUsY5HU2DNPPq2tt9zgu8e3aquQpvwxsMrurwrqm3Rp1Z5xnM69cZyED2b3BN",
  "key33": "4TTAj6q6KxMmWgvyejjHYsvFTzyuZC9UXP8Ag5SR4F9VPmfwJrkK1yiSrTYJZcyrniHRN2PjxX2eB5GxC1tWfqCi",
  "key34": "4hbMQi6gBbLegYbYoayrC3UwZQ2EA5QScD17ac6fB1ngGa1nS8jJsLgb3Xo3bzmeDSy7hGcwsU6wBzdLL4h6go5C",
  "key35": "4nf5XPDTRgf5VjCmXzBHCjhkGwcqW7aGdDQpFUzQZnnXqctSC3XU7obsdaXL8BqPFff1um4c38cGqXNJCAA8v5Pj",
  "key36": "4Mnx9La64hF3sHUbk25tyo6gGSi7XbUxKzEuEDP7rrfybFmj55Y4C5AQymMmWWzspQbdy4Zyq7ntG75cwbApL55o",
  "key37": "2G7amxbSfdVTsbmtCnjHs25L4u8xQRtApdBCKPYWA2rfx354hWhFre3ydBFeab1LiWbaTRAo5XjFEwue5rEA4M7X",
  "key38": "kQdqYt3zGR8K66GajzdqvY27A31FQKoU5kZ7bVpnF8arydCWU93JtUnT2RVtjJY54Kr4b2ZwtQusFNDyqVEaUpv",
  "key39": "3Cfr5G6tqrCc8Bhp6tDzcHrd2k29EM5iXLRKcmYq8PyGFU8okpsaiEFACJWMfCKRTmk3R2oZVfwHEiwzhodNERa8",
  "key40": "5XL4FbCEprMqv9n7yq91N43c6YTUps4kMoPuHDbU3FJnustmwowcnzHWnLxDxnvwKpSvcqCbLAEyPsqDLnvPDdKh",
  "key41": "2T7YKWYVbTD6eJiYB5SB5XgxwHkfXwg5QgqR6XY8UeHTeJA4MxtRFz4M5R5TURKLXpJXPXHKR44A2nLmNkNsvrKT",
  "key42": "4xtFjrM9APuwrNDYNXgnZeKARLikXcL19rnjE1WdX1QQWeJdrjEitLjx3TYjQowvNqbZvpEKYN2kUY6sAtvzDTL3",
  "key43": "LW5jH7GZoaQNGj461fmRRBLFHTzj73tSxDZja6zJdsXisoh6xqeX2MJ6JQ5iVqeFWSUKix8MzhyuqV5k8sW4pSW",
  "key44": "naErRFoGdJbJtbL3oKqSsPRd9a4qwvn71YH6pgXG4NLRb1ACL9urD8xCf1SYoLZXYeKiMZdofAarduaJow3go3b",
  "key45": "2GQf9YcmmLwmwaYbQGZfBoZozWpXWGjFRXaXMbmAj9NWaLMAkFBtBsQHhDZxmYuN4D66y6pJ2vUuFbhJyhNTcQ6P"
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
