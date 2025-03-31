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
    "5wF9b3fL23yhbT4NEYxDkZcowVNUUs2ARzyt7iXY6NqV85sTjtKziXMrDf5Tdx9v9qMDwCjZFWN5pnwq2Xkuc2JK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nc4nLNs6hyGov1vApp6j5DvyuL9UphayNsY8FsZD2vpfAVcJHoyhRoSEyTAtYes95vFz1FFZmQeJzzaP6yAEdd",
  "key1": "3WxwhXS7rdo7yb7iBMUAHu4y1Afeh98DcG9uExK8LVzMS8GbvfKCKTvB81xGW9cMD2yCKXfvX6iJnU4rN35ev3HB",
  "key2": "4cdDYGv3xaFNEMj3VD78AFuscbWRvKvYTCtTBNGWP3fLfab9uE9Ng6Y8DwUCSsLtvSgYGA5wrATG6Aq1zf6WNMx",
  "key3": "HTCxmiNSeG79wPqHuTYBKho67weai3FXgdy5nZFyzkSnSbSyCQfVksFBdaCvGKM5wpbJMEmaXHDZE6UXHY8KErr",
  "key4": "3BdzRpViXGDoSQt8mym4ZUjD65kmGaZ4HMzmVKEYCmBcxhQN87QZkWe7KJSi1H9E17nA3W12RrusWokSUM81EKW3",
  "key5": "29tokm7mZ2cSc7kYNCcLqyzGfivYnXknNF8ymTTm9hiAtdEwU1M9ukiwaWyRtuGWQwKen9YVs3b9RiN15UqhVroF",
  "key6": "5HfdJjE84iMrZsNQsyV9jEwTxxMNvMFXcjp4BnJp6RaTifxoXEu4gytDjdtPF26sr73f9AYCZpdno53gVvxPifyG",
  "key7": "TRHvwGbbC4gqyZSy4wZ8JHNvnk8p6oeuLMyCvbqE6SyksgNeseZjveZVPMQU4VRLRVkCw33GoKm7ZEDzNpFKp9C",
  "key8": "3MTH5buWD5iqYJcVm7VxvfeYWeNvhVKw6oGoLVRtyEdtSoAB189xSrednjmtmBYC5f6Fmhg585S1o6FBm3tijUSJ",
  "key9": "4ZDMKNhWUsuMchXxrxrsE1C6LBbXXSLcmKx5TFUcWLZ7LpXyxQ6CW1RqihP98iByV43L7HpfmnCJfsGyqr9ZoU9E",
  "key10": "62RmgAFxfG9PTdg97F7BTqANsZZrYVEXSjQSSoiXLHJ2aXRBLPgdDMzQ9Ky6VnsTskLngbi2VM1aRhmhbCWQ1uSk",
  "key11": "5xSpbLSs1eCZWV9PzGS5i6X6aFNEhQww3XrVKtV1QxdEhWHHtzNLJBxpXDooitPP9Rv5GRp2y3EebHeut7YCYKrD",
  "key12": "67FDuWKvsyR9gfEzuhYudiVvsxNBj6CqssiQAB8pKm9nERhA352MHssferR6NToWZDgDX89mdpf7PTZFVNkD5ue2",
  "key13": "4EoSBMFpazAK5PP8cDYCMWJMs6JBFmFfRTMKQ2siVcjLGEzjRPrtmb4cmUAMFEfwPLqtMi5aRkbMuaFkAdoSRsE5",
  "key14": "3jbyZU5tbsnL6dXS45PgKhaN6AWRJUvpiWj9R3oPfTvMCagFTJuFNpnRw8XpJc2yv9jnSzCNUY7Ys9rvkoHjrzZW",
  "key15": "2phMt8Y8c7VaF5sYKNDaAJNwwQx7FWZDiKkS5NSi6yFDwvyXEUncByxju8SS69WcwauBAFKoxpkme8GAcTCTEpGF",
  "key16": "43rgD4exkwaH5XqYGYwGEe7vB7z7NLz9sco5F7Korst1kPFfEVBR7LezucnfbojXet6rN3obN9ejVXMiDC4aQJGY",
  "key17": "QmBjAvWzaUVbWFFBtjdYPxXtvfs7TwrjfJSQ4b9pEYVByVRZftcDGjba1H9xx7uadUQQD6hvxP3PmVaucUUeqyX",
  "key18": "4wWnd5Lun92JRRv5qbuQdadhUP7vLp2FCyKYYFz8D51aQmAxBHBGaj3gcZNtMn8e4PsWD7ZEkbuwARmrSHjTAiEP",
  "key19": "4ewyAxScaMM32W2qvv8yUJZwTh4Yk5SSk4tVsTQCWyjnUHqm79EGthLLhvv93JaAxVbuaRLW1zBu37kiq1A6fSHa",
  "key20": "3w9JpfoLe64fMziVZuQdxu55kNEom3UpiAvBkj4Gcd1FR7YSFtPaLisBJ9y1XBBaaZyxZb2EHZt2kwF9TP83WgxU",
  "key21": "4kxGsTioDCSPXrRGvJv2CVbB8T8q9Lyayfey1CW7oCnse1bCKuvZjiQPp4vXR8gxBJN2aFsSmAnBQWbeRPKVBtjG",
  "key22": "pu4gmpdh3nU5yPHkjinVG3b8c5M8LDtfNgn4WpzNygd3PraEkFLjqxFJY7t3A9DtVcDxwEW1d6zfuc6bDdUYeF4",
  "key23": "5SW6yzBsXaKAEXu11yrxXFdxjvXB89FtuCJnDnuFkmTjEXLiv6DYdfvceZue5CxedrEUAuAZezpgksTkT4ocwKtK",
  "key24": "4H16Qr2xPg1kgyauRMSGUpq6ZMssnCBgtmxEh1F6nfBXPVFjfCHzJrAiRQziRvc69ro7FvCwMuCVbmaG6GTLbt5u",
  "key25": "3yvR3xC2CV8nhH1VX5SkxKGbRcngKzgF8Sd2h61aJB6FqYKythYXpLy9XSs6PjnR2Uo34tfp3ZqndpGJfWeMdnx8",
  "key26": "49ojvWp3ZFPrEvaayACyGZKakDKXonrcJUQtdH3LSd83frEKsNrEcvPJ81gy9zo2EsXWmD94MawZpw3cd4HvFAP1",
  "key27": "5DcsY4vuxVbTH3rTT1sfaRMgzDo5ARyfMiD8RoRWmanm4hpLpiSG6bJBmpfrBvjzxoe9M1iiGDoDCVDRRDMDVTef",
  "key28": "39ozxa1BUibKTJLyfonroybKSSR61m1dY8AXxJzuTS19rZ6GYEmUqBwgS3YvPdTtcQd3fox3XG9arSUX23GvJq4D",
  "key29": "3gctziLMGmMJPsh45vtMuF4Dwfre2vPgioHHuvu13khr4ek3gU4xybjz7JZt9Ly4n2cm62YxzsRXwKgQ27bkUTiz",
  "key30": "4PrjAgX7Eee9BudsWGcNoorUGY1FcyTcXzKMBa8HuzpPhCbyajZoaWR7DBPTuYDtQpCuxKpG92jqF7PvarEkgWE2",
  "key31": "2NazEhAkvWf2c6GsgX5r4M4d1FBWT5R8u5titiDVCfZYV8DM1Db8gqNxL4fZYqzMM2XK9T2duSS6SW4agDE8QeHT",
  "key32": "2nVVXBy8jPzTVQZxFKg8LjcHHsbSvJrvJ9FVZHz6UkPCjkn4xG31d8B3Abnoa851GYhA3Fwq3CFioxMg8XLeeGKk",
  "key33": "5AK3xC6CajfNdHs7fBtFrfq31iAZiXN7A2RcJxoQ5jQR1FwVqLdSuyPCZWTpUrkQNiF9H9Y4s43YoZpwPHFho3ZL",
  "key34": "2H6Q4ZDR54FCXPfqqGMbyPTjYkSyzpx28khWEBHbcbvhovMQghxT2SFciBr9sjNA1uGE7A6h4inkmWag5jyvq3Ng",
  "key35": "2LJU7Lwsu3E8GPXB1ZBgDdRh6fkfKMcv3aBDg2hSjhUVSoDbhWeJBhg5t7cAvTjereQ6hKdiNBVT9hHEq3QaokKP",
  "key36": "cjg6Y2xv3ksefxb9qajvKaV8BLrL4dKoAEXZMagUc8YstXxpHCsNPvkPV5Z1B2SkBWLEwD7cjEmnWKZNBNZUQmE",
  "key37": "4YmBFkg8inrb8ZuLiPWv7yjd6jxE8L5bGVeDFxsbvhuXhBxCA1uckWZ86zHtPq9oeL6xxfhNd2PBSbvGBAKLcGGr",
  "key38": "3aSdAa6p286sLjexpycmNu5wU4Nbrfgc2xPnB9TP9zdgenzkzpHKCq5qRXvkNJ84STSq5jp9fHFWZhqVvEZtRTmS",
  "key39": "24PGuHWHaikT8JRzs1FEC9k7VSksTh3jWkwNqnqzXRgx9bdAydrxCu6Um3kmZBR41GytehuNQMh9897MXSiESq9i",
  "key40": "2rtcicuHX4CV5Fi47EGZgW4Dr7BggxaHkQGhnRyuDVQgkqPmeEDBpH16QirehErRnvCf9YSHJiiU8XWsE2kFuMgW",
  "key41": "2X6Z3M5xgHUovfdoemg77H9UCfrKTvv7wnMu3cLJT62AfdusZKKGHWjDAscka17MG6iFKgS5urpPoFXgSb6bBDcV",
  "key42": "fcfWn6wbJNZpB1sFXqLEAGTKPLsVyZfewMruBDPFkp6KffiWgFBiysLKJgm3UdWaZazVdA2zWZhBhRDiBLyi6bB",
  "key43": "jdxJKeJFhcbx1eqvMGusJw1htr3Ds9fFddjoxg9NX43e9fhobzg5mJRt7dw1giqPBfadzgmxxDCtVZrWcedZrkD",
  "key44": "mzYnoQDqFQffsreXeM8pBXc56qc84A6GSMmjrymDB9HLUeSMNqVhWXNBs7KTKnEwQ9rLeBvdcsMrngAhgBhc8Gn"
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
