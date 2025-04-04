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
    "2BRktbRGNYTRKz4Fq5APnVH5xyECUASfwPrWs9Am3xxrd6tz2Tm5c5z3iAy86G3Wo5apGhHU593rT5Z2ZcpetuYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWPpJ7nxASBo4B3JKCy4QSUGFJszAAVJzQF3BkoEFGAPKHUEG6t3ybS9ruh7Vvj64ciqm9dGYEWGfETjM3h7RUT",
  "key1": "46Kscyi5ZR8VUqxUGLukJfzTYZmEKLYWTzhaHKkWnYuRTTtU2pcHh1GUerEQLFqs7nY5RbphMqKd5raAfZ1WAQpP",
  "key2": "DaXKz6R1WV5RTA1svtQ2LbsqsJkkN3mwNiZo1jSBAW3BoBoLKGggvzYNtHrLqMCvFuAmh8PcRFR9RJsdgCS8KUw",
  "key3": "4g6WuY9ST4eYnoB7xkKyHFL8RuFQvLJCfwQZ6tMko4XFB6mpHzeRzxfit7mKwPjbFKcF3ptUEDTLWftmC3KdATxX",
  "key4": "32JGVHmTC2XsenD7SrSAnxKE2haGiFunh2X9CwJsoFXPysBhLfu3MRo3oAZeqysSFyjSuz1EpRrLWMWMb6qwfYMe",
  "key5": "343uNZwaNKT45J9X663akwyURBqWiuv2re5HodFVViiHbg2DttafyB5Guqh2dFaYwsYqC6RADdGRqFJxh4nkaimC",
  "key6": "4P87GBGWmnpC6xdszi5vWVbY9zh3hKcLCP8fmn8h1hvZpPbv5eJ1Z8H4VAcgu5K52AAwh8BXtwDXTWhpFMj8dDHc",
  "key7": "5iw5k9eE1DTri5HZ4u2JEk5uNLwn9UT2EdcNDeasUbPbcsUjW5DWtbPnHXHLsVeZowjj9E19yv7vBn1Dmm9MfApM",
  "key8": "34ov1P27dd1LMiH6jFHifaiKhqagVEZU3BRLtJoRCdcMVXH72gEAPpwWsmB7pVvgC6wwrfFNV7xydgTAQ94NBWGL",
  "key9": "5MhKG7JjURndns9LWjHVXGTecvs8kEWtRFwvxZ9ZD4pFAwf2rAR4JxJnGSCCLqEymWxZt2bAX4gwsr2EpbgexmQJ",
  "key10": "DgtgwgTTiS362eVBHkzWZrkHD6MJ43HuNWtActx44cUaCWe4XCQzGVYcTnV362nWduzUmw2u8rwiwV4fNvJD78o",
  "key11": "GBcwGzGB4rumG7WFo6mSdLVUuiPzMw45nC8yZSuPBTpu8auE2k9F63KauC2nH2Subra6EFGcpyx9jwmAiL92F9Q",
  "key12": "4eNpu6F2A44xZqscKWvXwHiS99AGefF65oQp6Pjh1gU9QoV6gWv7DaTNHxS2VFXFkCekbNDBxjoCXwfjPkb1cCyT",
  "key13": "5u8LRNaUV4sbjGuw6JgTRHd7ftCdKCxFJSSkzyAz3DZ3oqyC5W5ExrkgEKVDWdxszfpwp968P1HUtuD1AEHKp7st",
  "key14": "4Hgqxh9rwXRurAYr4De44SUzrRaPgPjViEcDCAZsDp3YAkYiC19d4MxHDvawneQAAjhPZEgqAvbCVkGtK4hJXDsM",
  "key15": "3AQcApN1ik3dnMw4FALdxkBiE3MR89z3trXNP4jL1Vy47WzhamHg453ciyUV1iig5r9LDzRmZCR3k9T7SuqDPTP7",
  "key16": "A9rBVhcxzQXFKu3R2V6Jcdjv4dkLBpsbt2GsSMXQPLXeavkLRW1wXkHe4LuDPGzUb9QCD7VFGh6JghSd6LZaFD8",
  "key17": "5YeQqGeFByX3DgBcPdEWibNDmCmd9oNJ18pQFXgTkY6oNEFBmd7dumha2B2vrGLBhQh6Zpwaxe2gNLnE4EYZuuw4",
  "key18": "2Xf48mLVKFqzTe1RkgT35eyBUhR7wBzBdtuWKjenFWyGdKF3EpFprDHD8jFYDGnat8SQYQ6ussFKaWd8r88p9LA9",
  "key19": "49tnkVfWrUfZbJzowAN1SXD7xFqCfxiyNTYSC5B7ADx4YyynvRMzYzTdQhU5yJYAfzeic3LZA1JRNNJpYfqGcv6s",
  "key20": "428Qpj1jfSKfFGz774Yp2ujXTSpzna6C7GDchNFXRnApLTErtkBtNdygUf4oy64Wtqu1yroTVPjfsxamFnPtSSR9",
  "key21": "4SS7EprKJcEVhaFacghgeYiWXHc3TkFY9iqvQdZTuQKJmCp3xUKZPgPSnX4LYhoWt7fe1RwNB9eopaJMVNUrdiCV",
  "key22": "LYBfSD6XGuo2tSREJPyrm5W7DgHgsmQgsZQJhEF8FJZF5HBQgxC5BwkedXNBMvhBwrq8kDteWxDXRCY18HPuNDK",
  "key23": "5cWYJ5rdUgrViMqPtne5pcJVJHigG7jEcyXuS98G3U5yssPHaCcmbUvCPr9mt6CTy2pg88kLBzYnfCPdELW12Ygz",
  "key24": "5XuGGtNVsuZAmuqcNM57VR8tv1X8g9azaQNgGVegeiCjkngD2eV18HsPP4arFLsTiZjU8raUZMgKUgSHMqxXQSJL",
  "key25": "2hyc6KxCAH96eyrkiCnn2jKvscdxQdFNRL2hvPyniAiRB2Jk9Zr9MhL5LBNauPCfjDN8ykPqs49UWmMG3ucY73vb",
  "key26": "2rUz2grr26raVr5khNFu3ZJrc5rVfQdoXmxnpfvdRXLRSV4kWBVJKbxzUBj6t7NaQhtmvHVpYLrfr7Vi2ydMAe5y",
  "key27": "KAy7ApFnctKXWs7TevFNmnxzuyxAmPp8RxZh2jTQsyJLJEjhgifG9Echss31E4sNBWmLSpwS2enmH6pCamYrteB",
  "key28": "4rV2LiYsass6vvVbmEQGLz14SQGPNSgwpimCbcLWCTmKneQhMctgXaFQmVxXRSZ8k1j9TrYmhkXpzbZpcv6uSXRe",
  "key29": "to94St5bT3ksiGM7fe8GNJun6PFckEHnkgCf94p1bafq6VskBrsuLZ6WpF59ybSahoRXAeX8i22xe68Ckx9ftoZ",
  "key30": "29NDeZmBS9s5kjdoJtCFcV114FhhmDoEwUfNGhP7nXYpv4mtTSPGiAzATkVyht5d7aBEE3sBswtK5QJN9X2uXquV",
  "key31": "3oakoNuHrQ5MjpthMUCX8Heh7Zj1tKmcHptEACDSx6MNuMn1pyaAAYQBVncRV2bHeq4jmmNRjmNxTL1tu9Kku3GQ",
  "key32": "mjr5KNVyhwKR5VPnteHv4ah5PjRgD7kHhqQXtK1ctjdoycgMQPVVoZiLRqWXog3jynKCCKkumRZuV3yWZF357zc",
  "key33": "3sQfcCXA1ysJhxTSUpPBEBEKWyqCJZc79v95bASVm1t5bUbUJwutJ5nN3EhbGkN1ZKw8A9v44TXU8CAY196V6GGv",
  "key34": "4TBTDCQtkJZwujzs97EgQ4dzRzqhLor2po4Q17qe1qH8f9qiy1sth6BCLAsu9LV5v72NCgJhbbvYUYBJLCsf9e1d"
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
