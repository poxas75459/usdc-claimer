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
    "5zfd3oG7tgm43wiruhevubyFXoBcBpu2kMsnuB2FvF3cXXmbmN93Zntjy3UqToK8T99h2xPKoH3BThAWFjHQpBmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXhbLqTv15FYhoUaLRU4iz5vh1QEgZpvPPDiRG543MjfSN7cqnTmF5RQrUGxxJZtmYVkStR8TJyjppD5a2LMija",
  "key1": "3NxQuTmfK8EiJVvnWUV1tkgMrbZa3ijmkxr91stECs7JesbSaMVqcUMPb8E7T85pfsXKhfu7sVF1hJyWV9DjMNoU",
  "key2": "2HSFbWHvL3Diu4fyYDBJkqmHyqyPgw11uCR5jb8f9EaRTobHxDHXa9WmvvB5HXPp3axbtmq9AEumBpcScgMYm22o",
  "key3": "5UT4VVmvikMGM9yVm17Ugh4FGLesHZeY8tVLce6guahLSGoZVHdPyHtq7Q2fdvf3TsS9VuH9mbNhK9viTGL3WTfz",
  "key4": "4ZR7SgwtMLH9sbpgGMFf9SHAKJci82X3UbxcHiDkeR6QxxGwnKn9xmmHxiqhpQDy74SwHMKjhoYqRZxc1CLeKhUb",
  "key5": "3hbq26WG7KRfBitJRAdTEaMh2nGs7FVTJyj5pCC8fhazRJriuDYJne4M2anCqUKzomUL6v5d1jkBGBe7yXHHxMSt",
  "key6": "2FGZZtahtPbi4PmrvgKZpeBVJWDzNGBZnqx5Kz9ScMa5NUaEVaUo1t91YJr6nYCntbGfxdEKY5rPNJoSuVWUQvAJ",
  "key7": "2wby5brGAEFAkp4voTBGRGFTmkpfhoLraKbJQtRGrsYU4aRzqKqFH73WvZaT2zZ2mPrh5Jmuv79uH89NE2EMBbY8",
  "key8": "4DXbmG8ab7cdreXgGbG1ZbvM85T2bgpavV3KJTA2L7eMGpWkMVnQQvzVhZtvDHjE9TLd4coGYAPQ62RGVQLLXxA6",
  "key9": "5A8QvAEwpvXrYVNvTG3x6uagVPHcxzVigVxMYFfu9EyZYoR1qFREZFeMNauttdKWy88qpfGJPj6PnWzvMY4sYgyU",
  "key10": "2n46XeFtoUGWzBPX4cQpRbkXFDokUM52KXfhwnASKhdWzx9SiprbUZqyTew1R1eW47LL5F9HMYCHkNKRVYwBwzq4",
  "key11": "2e7cLfban6YxnUadbRzTu6ohDyb445WANASq8Zp5oBF73k5tmKo7HrbQB6naFtGsRsLqYEPxP98DEPjrkRQgBf5i",
  "key12": "hqcKKPNh3s8oBgV6duXAvk8UoCnZJUMpfi6iGJmM8nSw6WyrcjNdPn4SowhXpYLBVhMjbAeFDeDrMXTPv8F7C8S",
  "key13": "5X2nABVx7aCsF4ZX2SK8VXTsWWo5tCG84JjNXSg5jdPxqfatuTtFtTuRp8995Kkkgw6SEGUg6S7vrEkv338wSpAw",
  "key14": "4fBkhP9PCxkj4PAwMiYQVmpUDbLWsDky3yXzqYWxUGqo46CxrruxL1GzAZaoij29xsbmL2s6f76CKU2i7YfuGA56",
  "key15": "2i3X1rEWP32KAvADpuZkRMUVvNWRaH8DMBQLBfFCAppabbsizEPZ9CvjeL3s7U9mcfEoeqTZMGXymvH5VKqLsJLR",
  "key16": "2ptTVCVsiFxqW2qbYnQQg7gTdiWgUbVahoRQxQiSsQXsLD6zH77itc3XA5Rm9DMYDpkDaokgrsLik6GAfKfBAfUX",
  "key17": "RskWA7tZrTCNzPE85DFGm6tnz7kheQgLvqPCHA2bonHL3Wgw7vpRCcqSUtkapCTGDDro1Nh7VRfQTn2bF4sSpNe",
  "key18": "4R8EmFAcn5XbF3RVeEn9bZr7vaoZW7cG5FBekDQ9HxhNB3ooTdkjBiP8hCJVzLAGQcQ5X9TU6ymPgxGAbj5LTV2w",
  "key19": "67WPJXpJsVEw3UPfWgBuaWwR6DdBqqYLtAjarTvbdENMF4y2DvRX9jWj1Ur225r7PtN2kVrmc72M6meBK8wCmnkA",
  "key20": "5pJMCa5TfW7Sj3cLEoAVsMCzhvXjjaYYr3xwdtsdnx8kvG8gVG7N3xcXoeC4isV3vaa2FXBCHftLcDBBk3RUi5Nq",
  "key21": "X4vFoMp4ay2qXKgHFvGss4MmhcpmWfd8CwRy3EteHef3XuXK5djaG3bGp2H2FHUyTSAgxsk6Zenv54rxvhDWSv2",
  "key22": "4eRRcqywzCpESuG1yQG2QM2sCdiXP1x32bibUBdrem39Q3ZWBa3hWwFsUPhFvDM8iNn8NANN5hcciscyN1MdkpAL",
  "key23": "56XrCZyZrkoJVgmL7cSL4yYZiux7ZC8xizqbwMPdu3uSFxBP7Ym6S1vvNE9ZBsXwmpJWv9CY2DuidUsUU66DTsow",
  "key24": "4fUMirHwgqQZJRip6ykozZ1U2DYVEyUk5YPNSD4j8TrPFfnFAMXBhRXHb52SNrYNQ4yP4G5F1697zMHx1vmZhSxd",
  "key25": "4694M59dDCqfyD8Bmmr1YWCQ4z3KPFWX6iUzY1LUwEk9eWQVQxp5U9HFBQZrPquK74HMyAd4YZFLjv7wjZspHZdt",
  "key26": "2wKtFpzeVXSM9TY5vemYcJmLeLcpi2VfGYtbXG2iV8TvC35438BCbevn9TbiBH3wsfSgsu82TjEusL4rfwgBuZn8",
  "key27": "4E1cGhsK3BM3brKPZXCRscMYDiZa45JUoC6XDMTqWpYHfHhMbEpnprZjcRFRGpQdzQDE1TVQcWhS7nT7rdtyrWUb",
  "key28": "2ZodZgLcr9VAM6zedm6TNpZx6Lop17KTyJ3fSRwrttvQxsap3A1s3opC25Mzqm9Rc7E7HKx52a8xcTgwdifpSh3T",
  "key29": "n2otsMjs2kVLAMeWUtATSjCpFvDuRoM6oCsoGD1jQsMr8YpJxRTExjre6P7i2catP51jEZtwEBiEdp3zy2BEwzf",
  "key30": "3Lewpfbkrd94LAdPMiABj9JD267R1kyPKZzzTsLkuFcBTe7B3gYzL5swQiASaz3GDAejjYecmzp3mcrgTfSFuVU1",
  "key31": "3R9fanMP5YRVoBS5QMigAsQcBPzrU29srB7deQVPQ1e1pWRJFK56NgF9PgjPWuFjwvhnPCPirCTHRQHKh3Ns3f3o",
  "key32": "bNYbnPkEwLXG561sPFPxSu6CnJzcumvoawXTn5bafCFJihFPoR1qaZpwhFywrg2JmgKRZeuELSYMy7JpkYHWj2g",
  "key33": "347kCzLBC2EeVn8UuqjzEoojbK3PG88bq6LzpJCeBKkMspdwVzGSCuRPQAJxKdRcejajHZCr75jHDzjFxXnCLNwW",
  "key34": "4EW6DWdHy9UqegvcqRnzqKNESJCHaXhC9J2yQuWHtTyCSM1vFr3HQFs8rxX292StMwcLr5KcoP2AEzCmSMLzMeiv",
  "key35": "5gTBEedP13xMUBV6oR2LdAGZQFTp46kPfP1RfpNgHTfiMCP3bdYfZvozK48HQavnfjYmQGmQr2bPjFFxrCy1unpc"
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
