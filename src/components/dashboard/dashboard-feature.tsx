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
    "5YPeYsJyWw7ZPuicdiYiKZuq1Cc8EzjG3jGEcXUvPU1eWkVcg5grqtzR9BaUkfFyAJdAEACngercDhSmc2qB2LpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K577Up4DahtmwFujjrkX11gasRsZejL17xca3oL7nkZ55YJDBDawhMZw9dLU8m7XsCqivDtcWcfNNvAitvDUc7H",
  "key1": "5iScVm7HVhAUZn43CNeuwD3w33LjwG7MkLBRkPakJeTgPpA8ihMWwFpTuNtJgzhhDHWrnESGFt84SsboAKwiaAVt",
  "key2": "67UKYK8joTcT5nUB2AeVtqHTHLZHdNy3qFZrxXTWtsigJgUATsZyiFHm9C4mZ9pdAA4rPobN27dUCGfFBjX73v5c",
  "key3": "4evMAARRaSeGz54iFkL8fAnC7YmskyLe2MYN6uPggR9cNKLkaPqphy9j9hz8yTwjSMjNBfzzqw4XRUwgiZzsPCzN",
  "key4": "2kpx7baUnvc1LWzQrQyzChh4ZqUrirKMq3nfHKoKz38hr2DEYg9HQnKp4FB1LebLML4XbxHCxyjCSSq8FHLLrgja",
  "key5": "2GncEKN4FqVUgQ6Pf1TpZ2zXeTUvsnnm5A4d97tyWj4X3Ej7YBct6zJvg7nvqfJpngsWk3t7ZtqCSewwsAZSsqdC",
  "key6": "2E3HjLCehKSxEZ7iarwJGUfxxqevmdavgAetv7tRnKHJ92QAxjWnCLuixZ2hugNYgWA462PBJQDhCLuocppSb5Qp",
  "key7": "3ytvFELXXx3TbK2Re5QqTs5YbiAwEimiqL9JfHsBVv29L4oK4r7MyUq32JgoKHRHxRjK4GpD4kPo3CjrGSMB6NXx",
  "key8": "46Z6379coYimCXQCNqHYQGdRqWUazTZ436xksCSYTEZ93MzqsAVFwzjTL73QsJ8upEAZH8yU6sjptymgBE66dSGZ",
  "key9": "2oEDDtWRdC4JxirM78DDsTCJz9Wn9ozoVMUEwKT8JSmDQR3xWbKUdMN8pB4Vg2acjCkGw7CNEfjX36JsZLCBaPCb",
  "key10": "4qzz7d4PjngZKbASFZsNKczR4x2UnsxJLTbVL9zrAVatcD19Fr96P3XTSTPYua5sVjuMPRNZowGGKWcDcGmwAFdo",
  "key11": "3qLwkyqRKNQruvToCa9Rrbf9B7BjNTFdeiz5NRGsddXTLfkFv1ygE9mmetCDwRYW22VecpCSztjY7bX45zF9kZWU",
  "key12": "3YvLrVsQh7GbjFTZqn2QUjwLRC5Xt99vPiPhyT9sQKM7CPNwHgDWhPGzH2dE5TxBXZiT3Kvstyt5qpU8XBeJ7nMf",
  "key13": "5bYpbiJs6HbMCz8MVNCKkkSj8tckn1dfwYmwQkCpNHETiRHNreZsi32YzZzaAPz1CPQgVir4tCptQEWddji2B1UY",
  "key14": "4aXcGMngDZ3KyAd2RqTU8crNubAEsRcX7iRzrbMu1EKFPmrJy9NhFYc63rEa9JXgm3cw6vWHmmhEaxtqkztPBWiT",
  "key15": "3qbKR625SKpg7DYynbVf4WunTim8uRpNcXAs3Swmffg5cVgb7EYYVZrVRoFEyxne4HmmRqr2SPnWnNkxVv3SDH6m",
  "key16": "2B9UNp5Q9Ffxq6hdvmprfN6HmcwjQKej7L4F6U8Mzzi7gNCz8fTKbwXyCezkakecjnfu751ZNi3ZdzwDpChcz5RA",
  "key17": "4C7NA9EFp7JizRyixyNik6qHdbw5csL54cJseQHAm7Djqdxs2g1j8nJAs5K8uSG2cGu2VeHa6QN93VFAUa9pm213",
  "key18": "5TUL42P5VzdLV1PqGM87dhfbTtK3V6QAbwPhMpAEbQymhxX8h5f3uccZHxST3LbXSij1s2KXxZmrpGGtP8u4vnbd",
  "key19": "27xmQkZzMnrUbdAAnRZwLw4et7YTwQr5icRtsX6cd5LFtiftcrNL92kwdYi3wQ6gJVtkQrGmGWzYD2xogA2BvdC7",
  "key20": "3Mb8Qbu1BxUei8aZDBi15Ev6dVjkeacvzBouAHiDB2FZsxatmeHp4971YdrmLsPbgwPYt38V52J74JqvJUF5kn5n",
  "key21": "rGgyMiFXGqT7C2kEWjNgnJZVJQbVekQ6fVNAYULRfmagXpFvZRUcXKhpKb8X9tcwsNpcAEnwchbpvqmoowd1wrQ",
  "key22": "BH89gWHordHwriPUfSGmAnCZTD2wMYftvnUUMsbApj4Yj8v1xN4F71e6B6Ect4FDGm1pjpCWbN3N39JeccpXZGn",
  "key23": "oibBNnU17zE5tsVwFS2PUwA9umgDyeEWBN7bemrrUiYZ2nvhkng3sKWcxJw813wWXz8Rhij6xK4sdj9aN4DmsMW",
  "key24": "3ioCKFRJYinVJPJ16KhUwtPJPsazpVtKiUpn3hErFjrQvEiWDCny21hCq4NmVNJk1parhnKKncY1r5zaPRtokDNn",
  "key25": "4QuSwCFCYofxEBrbFMp9wtvSqkSAZiCLF4bzuuJj5MjXt9sFA9rUFxg9jN4SSfjnwijffNjVGt8hr86Hko1M3cNs",
  "key26": "3Q4Fz92niDzgUo7A5pQtQchU9eeM1tEwvNGWFbmjwCkpsscFUHRQbwLpob9UZqutaB7gncWiZEKraSYpqjCCXNbs",
  "key27": "bTsZXFWVhuwwKALAaSVEy4Dd61nSJR55ERrWgTSmSw1CcN1MjhNgCHqjQm6vdZjBcKe1PJzux3TvH9DXiansqUd",
  "key28": "3ZaBgNf1PWrXNPRcmuQ6ixTrRLZ7VTeqF4HdjP3XycZXCe3p4X6a7Mc1oAyaTUaVxQqCudHcSzV2R5NVvgyi1AsS",
  "key29": "3N2A4Bj3vKrSFp4wYFahyTMyrtM6MiqW4HvxUke4VciMTRjZSooR282nKRh4yGU8oCh8QSKQhw9T3D7QiiggC93G",
  "key30": "2Z9orsR5V4zFV8ese7sapYJH5hkS7MqHgKwhMP3j8wpafdTjpnVGKU7dda6DcrPoxeQrTmD9YA2QtQ6SQBtznCfN",
  "key31": "5rP96wbLLFAXiu2NsHADxoP3ddeaaB3YTZ6GHbzzer71GXG7DvLKY91oN7JonPtcNP1LUJaFjYMUgNT8NchFBAFg",
  "key32": "23U8xfX8CfdSVvDThs56yiYzv7S2dv9yD8iXPiwsE4HAURGgrkhEbfBcNxdR6wHMLeZNkj7Aq95qTqUAvC23juCM",
  "key33": "5WPXbobrqQ232fa8EkgfqLs4EL79RXyikmeLUxBGzX46RmC6RriYaV5gXwAeRTxUTD68AYMFnQ4MhbUyzDnuX7vk",
  "key34": "3KA7MZF1aiRPNKEmZDWJzH7FhYahUhMzk9rigEHMVrH6yQfYWvaESNARMV4p9qqA3M7Xs8GJcTWtARiBCziKS5mZ",
  "key35": "2RVaxvTRy3FD2Li1qpE4Vq4DNWDoP62fGm4TKyUdEejbupVKsGRCGrNDGJXzZ2rf7fyQVHjmWcsngJRvYtRMmFBs",
  "key36": "4FpAn2gBttoZdB2qLvJQ8WK74dJdesje91qzXQVuZsgr2HALTADUFB93aCu8QZwke44qXdbuvw31AfUmwfdgFswz",
  "key37": "4rVomdVqTgueQUsSAMAQztdBFf1ubq1ER7RbgN7XxnwLDYTd6E8djnfMNfnhiFpdM8LBxzzeqYH8q4vgwHRpLxhs",
  "key38": "4gsmkK76bHeVZjo6ZoeKtYHskFUF6jZGx7jMKRpimLtSyqeJHKXGf5LvrAKPEZiKRwNvFdcc4mtHmLC6gTmGiFyq",
  "key39": "3XjNYcRMzySuCZFQs1coMvT8ZpUDhHsqskSUsSXgEADbDZzKW32DznpDBKFc5RadPP4SwPX2geQ3qsK7awEv4G37",
  "key40": "xGQPXLYDrEJ6VkGoTyjGvAGRcePqxrHLBuagotrL6V6VLuxeVvuabGU7Ky6WbpztmQTaGFmWvriz3zYJxRVovMp",
  "key41": "4xwrGRE3rSTvnB6pVSGN8ezqsBt9o3Ga8nPmRo7oFPgZZtxJWYydXfjq8bi4A9p52jtTVFcYFjGeWP2hc6cun1sF",
  "key42": "22Foas5sAnioUdiiCXaygfByet63338p21kPAvSYhvVyq3RwYoyDygw288UdVXf14agg2LkS1L5uDH7nVYbhcwtM",
  "key43": "5knht9xGLZWmkLomji3QyrVnJZLYpXQudeKHe1qW7kp6JWWtccCUCx6SbuJK4efpVk9smFXKPvhqXNFgr623nSGW",
  "key44": "5VpVxwqfXBPCkQsweWYnJvjCVg2mHEKKovUFoyxgsP1s7uKvzpDGoJnbHXedKgboNbT7dhdN3nmg7Hbu71kwdfun",
  "key45": "35e8wEPadUNokGwCnP8hTyphttxqhrGJMLwS9fPuufvaxqcNy9bZTTKvRbKzHasWxe1SNhumLZqsnH1Xt7LH42bV",
  "key46": "2FooREJKEC8bRVLDqM4h7n4uwdKfVfFc4znXruFHy69XpWaqH8QZpyPjRxLpWD1z8uA6CksyHheQUHzcSFa8Eg5R",
  "key47": "3yfC17bHKQqqSVcNNEjcEwsHGAadXy7E3S3SxLEj1S95vYYmw6VJoHwK5EfXtukYyeNqVVt9v1U1d8HEqtWf4mnL",
  "key48": "68qLGKFRkgU5evdSSUNDwdmbYNXtwBSHLKw732eqcstsPmuAZsPYQTVuxnCp6GB3Q5D97EqpaEFE9K85za9YCAS",
  "key49": "3RTuEGK5pzw3aH5SUALEMTwRkjiK6sEQRzFM5CMs4r7ypqJXALTZvWpBV2p9x9sYfzrC1GuJBvRpDC8T9fMGdACd"
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
