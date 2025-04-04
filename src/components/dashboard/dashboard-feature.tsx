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
    "5BP6YWAYqbXBiQRinMouMBJ3hPY779F7YNLmj4ykocVQbJCGNmHkJ2m354ecnMpFN7RBriYaRzfwXP633PHcx4BH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WeiAeRpSkz1nTGNrAf7STQxjSYyCzm4BEkQhMdgSPztDKKtmDXwNBAuDZG1vEc7KtzjXeutiEfnVgTNnEeDvDHT",
  "key1": "39LGnYyfmGXGfX3KANeP8gPmkmB8at9QatGtLu6YRW14rvKg5B4CsCQn2LVfX3LkRKL8qPyWF6R5GUcyHbLRExDS",
  "key2": "3kMr29vgGDiVR5vJbzL4Ds1ERcAupoDY3JHiEivpJ43xDaVphf9o7zq26pUhH9ASoxpNrG6AsAgQMehfqsUEy8EK",
  "key3": "3jsBG9LSrpj3z6gUbwCyNY2toMz5xq6sngELftPCVcTMoHY3yNkLGhAmpUTg8WMfxGwsZpqTvFJoUotYYHNhNqv8",
  "key4": "5z4WuAyU7TMq2XLYz1GRZAEh6kWceNSEKHFcEHFdUtzLnGst4CDUjKfhg2PzQovtvAeYUCPwLaa9wUs1HFhr3eqx",
  "key5": "3DUW2DQMG3Ycq2NStFBkxeRSEcBB7JVupTHoxwFBDUVTuXdHUGWQ1oRncFKU6FZ7LmVaakgfaLGu5YJhpsztrwCF",
  "key6": "4ghGFJ32vcZ17fPyUWLGY1fpHLGmokJGPGfrVbGDo3qCVdziWbH9r5YorioNQ4LcJZ9xRLPP9GojAPVx7A9jzwbq",
  "key7": "3Vmn65sgJARKrNxGFUYrdXEZv4h4E1z1emvnbxmcFLMFCKJrLPjZBddxDBbpiR7Bv1xvZewrwKx5oirK36jHLZuE",
  "key8": "2uqeimL5SNZf46mLrSyXh2hZZbgW7rmunTUCadTJrACDrsL2JFtjNrgoNLexQX1rSZ18MWtXjT7KcGfaHdWsGALX",
  "key9": "4LKi4wQABikwTq3r5MhnReDAYyqrJBkyHH4eriN6hRJocrHUbid3dQPnStTUt7vGxDRtozoAqJSYeWoLMcgCvSxg",
  "key10": "5UzVAspzwZfVpTQYHVd9gkSTCBTysMMs5SArEPZQ6okuuWTuoX77LvuKPKLAr3rNui4DEK8zMu4NKBbj9RJkZeJg",
  "key11": "b1nruHkQQhG5F51VkybAHQkuGoyTTG1gwEuGpR2AuWAKyAVScJ4G9qQi75gWdJWWTbWXRN6wKdze87Fe4XkwrxM",
  "key12": "2SCfSdcr7Cy23GXpx9Gv5sZBuCf7GFkM9YwtKAoDq3YM7h9ZVEj3UMpQuu4jRL7KhayzdSEqtJZ4swtk3AU5atEg",
  "key13": "4vZudkFY6r1V9Bc3XeYDV4BTadhc6uEsCNPbnZh6p9AxzqgFAZPPpMsmhbVeaJEjKgfFkmf5TCGiet4gfKsRH69P",
  "key14": "5PivAjbwtX6juGVvqN5pgPcChgjPkFrD5DazW1YnVfwWXZTEQ4XWiC33BHihoeFnzvFYsEKTxyWG2rHZPMSCz3Bt",
  "key15": "4uBkZmyLzoYtfjRpsMLyHWpap2d27jYpDSDrmWh5ucKBMvwbsMVqY7H7GX2GvNbYLXkD6SVg4SN2HuPnGmH3u1rn",
  "key16": "3iuoC8qSF7zw5gPKt6UUFMcmpH3iocC1xBW5DbV1XB3muDYiqEH2DLYcaRkBMgNnjiJeAyXTPTAd7fKEk3QPPudB",
  "key17": "N9RgkuGh5AY5YkWuXE62k2VH6vSPVi1ehdr6amd3NNNhsEFJ5JiJtwTKyKvpzwSBbZQxNmw3gFi9k2GRqBF5nx5",
  "key18": "2NgNkLXqxXtJUNJgLNCjnNLdyRBPfevCdjW7bZgg4U1BkDd65rNJvVzHYyGeop61WmF85CCgmpXzMCWk45Jjmt5F",
  "key19": "3vqqF2GYbELnWeTApDCWpZnBiDfpbVuh7r87Mq4dPRjBXMhvSmuF2E6YopcNfRRW8WNGAHrE1QbEzRxcDnihgyiy",
  "key20": "4kVqEJrJeSZo3R9rKv1ChWpdh8RWSuGBiz4v5zq1KBPhYqgcydoq1GdDjWSbV1hPxC7LTssy3ywmUrtvdoNTsn3d",
  "key21": "2uhrt8itxvq9uQ4ZwDWgbkMcR1FZL8999rtFvRJbDTnQenE2qVHYok78VNSV3CiWEi5EK9s4MQU5PK3toXR9j1x7",
  "key22": "56CtBPkw1cee4EnkEFSLCSp9MWZGmCR5CvDu2yNdKvaC8QRoLKfy2rgBdaeKk7riDRkqi5MEaTMUY4i2KacRNzGz",
  "key23": "4ejejH7X2KbnFTr5DGxqXkoPnTQfUmWcHUEwibtkoKRLUJWJdzEhfC3jXriDB5U9f96GdmHHJNBbJaWytnkrBgQf",
  "key24": "4twkmPym8rrukS6tJUeaLQVtrAxHg9gVCEKMbwBVruMwdXcqXfimPp72nL2Yd7F1ahFBAJJhmiBzhmbeNjWVDmbq",
  "key25": "25V5QR1umkMobsH4dXXyLaQZaTT969ZcrA5Q7JGDAjqVLPYpkxZEzaXLQvQRJoWnn3QgojX7wQCCsokdWabB66ov",
  "key26": "xqtzcmR7SvQRVmdq9sxsp85wi2tbG1asbq24WKCHFRYWtHvxLMU4GWiPFANsQK9WsuniAmjsWBzZ4g4BckTtR8Y",
  "key27": "5Jz7tb6yhtSnSFp1fqJjpUPRwv7B7jdHx5bc2b1bEYeFHDfMNK4zP12Xz2sFkWEkNFmafsWjWE7BcmJWYVBYLc2Y",
  "key28": "NxCz2EtAHVhbVPWBf1FEP3jNC1dWn4eCKNojAvNNiy9cqk3BGQkQzHxsSB8MfL5MEioQLaGxmJDNcb4B1p6KVJK",
  "key29": "fFHHdaSVLBd81mErk4YS1m7sRzgcQvRRTAAUPnAYN4EobMnaVwTVbUheRDc5AG8CNoVQNH3t1nb2LSPgTft2gH3",
  "key30": "2dbD3Es766T23Ewhynvs3CyLpdFM6hDbJGspYqUFWNDaJVwAu2nKvWTZak2F2iqqJo1u77p7MVJGfHYy5jaYDt1A",
  "key31": "3cCpT74ppHtnf4qNvSJGAK4nudFkTyFnwQsMXRd5hMvhEfkYNA6yjXKEhcWKr8z7HnjoembrYWySZbCWGQefDRBq",
  "key32": "5udnT6kPVt7nhvsBk3AmaWXe95KKuysMLm3mPes8WMvgr5HLiGWXxV8SQMUjAoGdKvzG1VeixiZXFGGfUJpsWeDK",
  "key33": "3eemhUdHaVujuHj22AMWcQHQ5dyVZroEW5XeVzunjJcC9PpjcUnuJ2LULZEiVMR5X7LFqM6t7R4JmBzWSyM5NxfZ",
  "key34": "3sWUnd4QY221bFvAZ9CQfK47fGNVTusHWdCS6w7JM9AYzSfp7c2JNA7ngTwW29xAqCkT2Ady9oHSQsu1ahv77GYs",
  "key35": "3a82DffR6D2aLTSTDooDL9G2J8NPBSYWGK6FJ1fF5es5kHSKJsRkCzG9MKHa43KE6HuppzXFYbF2tp3eXctrq3x4",
  "key36": "4xMBSQCVcpCJedDQNnSCd187ZXr7bPHMQud7URFWBSZ1X8yB4KS4JDDAcXzWQPL1ddZJWr5R2mQMx5K1GMSQx6Aq",
  "key37": "2kz5yssJ63JkrhKrtJj2fowtNMTCT5nXbKSTCC5keTnRcPQwHdow7duuUobibK77m82TA1yVcaHnVvWiFcK79APT",
  "key38": "VUWB3Kh5WZrCSDooHh6f4spyGGQTLmdEZN8qCcAMwXKxEtSVHczSZhAfq6kWh1z296HQpaUoRi3gJRhqkY5Sioo",
  "key39": "2k2x7eayxr8gEjYR1JiViKAGVYGPWtwBvcG96koBVZs7jZM5Aiq8HdwM21Zabi7xXs6hU6YULTk7Vs9b6jFmZ75t",
  "key40": "4jnkn7ro8L8CEjDg86gK4Pe1gR7RuxfWAwBta3vGGyzr7j7vVASprmxDs5AvnZ3o6UEKeHf8hbvvsMpki9VqcBbD",
  "key41": "63sRNPZQpUAa6CztLT47D9XMjYdhuS1HAx3YKcuFENuU6p3GPEGhwMDNF3wG52TQFp8xFsNfGu76CTxSLiXFkwCm",
  "key42": "2CwcXWyJHp3furSqpVpcAwUaDSA8u2Z14BPwLEZPiLwwJhCRWfvLAYNFLBDMZjpKSYLcmXCL5g4mfcP4FjDVvcsL",
  "key43": "2gUQeE59MiVKxg39mSTzuifRgGZaQMKucF9SqESz6CxC5scM8xKa5DmjUwahp35mfDaWmXDxQf6M35wz3e8zqZ1T",
  "key44": "29QGomnw5FeCfLJTXmBVaGLuPgXwLahEvdL4MnWqc5qP69M2wzJvrQfTVhNqZzkwk53a18czsBseYpomM9XNaPpS",
  "key45": "41mNFsvkHGRG454ViGirovXYkek3yW2XoSRjzGy1sNFSju1JYZXxTgE8yaCm68cjPSWDkJpHvEHwP3KSSH14dZgQ"
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
