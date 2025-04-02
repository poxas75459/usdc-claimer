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
    "3XnsniKo7NKEcv3V2wUW8qSWXBpP2ZWYsRUiV6MstNyHxrGaLjxF79Q4ambNsGPZ2zw5xjEzc73RZhSDCaYGKm3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dsghb1ZCpf1d3XAZQgLCQNdoohyFcPycfngJ67FRrcnvKKDqxmBjChbrgnnD5dFxPsgjmeg5RkPEabqTWXF7c3L",
  "key1": "612LuYXt2RZaBCuxAjP8JYC8bysB1DGTVCSXJvLq7BtiAn98XxSWpznVhgE8fPwAwsuDaU2TeJAzjtbfbAJtbR4t",
  "key2": "3k2dyeerNihiuFhxqNKbRogLEoKDrLV7XH69TpR7zyQ57B9mwanVq1ssfcvoo3n3DUPGho1UUjmDTZuRkHV8NHWg",
  "key3": "Js7Hi8CyBki4UnWREqBSuek8HPivtJJKqrRUSBwrMBZpYWbfk1U8hxqvZPCR5CecghtBeydh1njtj3LEs3NcEcA",
  "key4": "2FYgsR3KtAw5ebmyGrUDg3sGxDthbCmg9WxVxUdTrDyHePBeykFE4tSnbJkYzmTETdxE9G1tnc9mX2KXn8uHUaVq",
  "key5": "aX6LC18zcnr6TYAc2ehLnnSQazuyMBCWd5UTQMkSm7W2J6mewuxng6ZH7hNuDxccUwU7yCNTkTvrD9Rc5hXuHjB",
  "key6": "HESsZUgP8FuHJgYCkD3RvgYZy5nxTRJtxGoeNWxKXdgZ9vN4cQtpmjP3MLVfjuTgsZaKaRBDRFThwqRV8DcZdqR",
  "key7": "4yXqc4reEeEuXX8DykFnPA1f6XBNrWdAc6BxJYfunJZ1DY3LPeLdUw9TqPijxAEgCT1FQM5T8B8zkvZKwhg75yTR",
  "key8": "3ePwra2cxbwXXNCFAbriSY8v5B9U6S55EWEpwUbHXQ1vUrM6L1YsBcxtu83GMUsdpL7SeMof6mq9Mchk4v8ADizf",
  "key9": "4YGnnvdxfEawE2pfZoScTRcqRFJ31Wivrg29Cponq6nL5LzzFiCnXPn6r6nJL2RHZdt1Ehy8Dayy1Wb764kHeQL9",
  "key10": "mTbK9XjuFUQvLNriSSSHuVXUhr7V3ZhLmqNCC5SR9UzTJ49ha2qVGVdcWK8uEeriJK5o3tvyTjm4s9WbSrFxWiw",
  "key11": "3kjXzKeQJUyL25NkzDaUbCxJxC4NSw9jKp6BWAxFpwDnZxnr8ScJXLUouwmVnpt7cxko1PwwQ21ks8RLSuJZ2fM5",
  "key12": "4jfgCmkHSnGJMa38dtaYMiayz3nSoCWqxr9CzVFTsfqfrHVKPWNX3rWee9Fy83Ht5Rd4nATvYgGV4aTjBJF4JSVm",
  "key13": "5TA8VZSYrJ6syS7MZKRfsNKrfZpVHQB2PTHps3z7PDvWzAkkZvYobfDyEmbXMuorEAUJv86Uy9Z8Ci5grmGZv1Zc",
  "key14": "2dmWTrPUM5W9DvymcZHqchfvmBuefneTH2X1Zx7XXdQj1LY22nXpNUj9tjakPJjzQa4bziUHpdcLsrhAyKEfaWqQ",
  "key15": "2vBhwxsadwRifCGKJ2xcTHT3kReJgsFjUEhfUn3mwdmH5xh8jwV1v5EHho741efBADZZJgp1dhDDYHfU9WzosfxE",
  "key16": "5h1rT7jwEbwbhZ3wB12MWt7eKWSjBPHK7TvzvdSAuewkpoLSt2ry2BsPKTrUr8FgXF7hvehrubZsTkXunUf3Wf6u",
  "key17": "3ZE1rCYE3AqERtpZvXEBGCzwRuWvJ3q6EseJTU3Ae4LNGoWBRsnYYd5XExqwHNTzaRfSLAKkEkADnPbSGXaVYdcu",
  "key18": "L9mP4LsCEWQQ152LzSPPEeHg5Mi8ADK4C4gcfrmsUdUn2oUzAgaWKoiUyfdRzMuxtUixHH6Dgc5XaavrckzJwZn",
  "key19": "5Pd9S8keWY4rGxLbLjWfscfeobRTPccxHYw1ifK5onpky3vyThiNeA611ocY7BzaWitnzL5J1aWDa37Bp8645Aw8",
  "key20": "5krJBHLNnqRYtc45teiQHWapheJAv44uCoMksPaNTVCouZyCHZvVfeTcPeCGmUpFW2DnaPjrbzzbNThdqMdgaMxJ",
  "key21": "51AqTFAJsEjcSrWzHtQapfukjfGZGhDHG3aCm2kiyJmqRcZTz2mtKpYJXhWrj7bRpq7ohDXRNdQmF5qUxJ7swvZ",
  "key22": "4da3gx3D355xn59wTiy3QKsc1yvTMK1F2y6dmiFNAfjVkferprdrPCn2NrrCSggnpDhB61jEYSpvPJWvQuRHMdkL",
  "key23": "ZyAfBmjdFXHcZb3MR9nsUuL4p1yTar2Z9QsPJ2d1busD3HLbp489cUSgThgqwBAjSAGQNHzE4K9iJfMXo6EL699",
  "key24": "FnboB4Z6Cub6UyfZqCabt2ZHBQweSuE7iSWVmVTdQ4LKS7XgPXa6vFA3CMdUZLJjRdhCJyHruRSY76sAhicZFJH",
  "key25": "2XgU89KxiG8PncbcowtpjRw1nabTz8xr28yqnCYobq7D1K6LL54n1Ta95tCRCibQ35Sq7K523kkw46phWYwz8pG2",
  "key26": "2eb6qvxAadpWzKjPDy5ECFNVAK3d43sy7Kh8rs8sY4LCxW2EsUeUYKYWZP5Dty8smGmYmS8wKBHGU5DN5ti1SvpM",
  "key27": "3jE9Y6U9VRiEYHchhjMSmrm62Dftsn1RehKmb9pDssh8M29Lj9fSCUu7xNoUY958kUWumyhHNSvhkkRwJAYgfUs5",
  "key28": "2LDu296YazZmwoz2GMpVxntXWB1yg4YQZEikVFmemHFHuE8mZYHVvvabqECG8mBSA5F6yUX4pp4NawKRzj2GRckr",
  "key29": "58fAtp8gENvucLqCSP55jvWJ5e1RxG9KpRFt5ELhvpzXDfejSVjNm6GrQgPssAcRNZM1HX1yNuNS1jUpKt2mFLqK",
  "key30": "5BjSu6oAmMNaL7ybaYqbMAu7VkyXvaBwfzN2TCRcEEVxzRxLSWqj1ipDeL1yt3sedfpm7ZzH6gnJ77qaw9AnquDb",
  "key31": "5bCXAUj4ThwtfkJ6NTbApe67cbpH55KZug2VEHHqqGCdNc1GrdXXX1Viw5MoFHjwb2xYft75njC1ZArqTyUHc6e4",
  "key32": "44hjWpRUPjk5JjYUP2LtY25DwZKBXrVuwjo4C5p2zAX8EoUqEJMFuzku4vQwHTKSgZrgZSBg6rdcN2hjxRFMcs9Y",
  "key33": "4fB4z7aEuhdAB3piTzpxKxrPjUowaw571h1yEGyAbvvL7wRTeaoN4EuHiuvT9rkzADxKymoAAdR3ruQZ5EYkPT7W",
  "key34": "4uCHTjCgM5KCMSDStSeFUUBurtdob8WdbpG5pBVgqxzTY53LovBacvVxi7HfBaxPWAddbwEvknPYLdgxhJUgr9S3",
  "key35": "3e5MVmEXwQqgeTCd4fo1nH1BteCxiCdzUiWo5WMShwbdHaF17GafdTuSkMA2mdsd9GXP9oFBvJB8QdHRzkrYdn4y",
  "key36": "KsdhbV3EVmw5GL4Qi1M5kyg7D8qHBNdxcL1Cq18BECFcrnqBwv23NPDDjL6a7RKfqqiJMkNEc5fX7u6inaH4MnN",
  "key37": "21gsvpqwh7XEzzgTStLRk6tsjeYH4pCsLKMab6kbmhw8GESAXjzofkgrDtnJPb5tGR5BawWgwmCFDdENr6X8fx3h",
  "key38": "5qBTBpZR5UFCo67dUGxJLSTg8uRQLBWs1hfxwQjz3fwkzDXUSXfCuZvvVyKPPdusyPEGpDfF5nPih2cTNDkCZvzR",
  "key39": "42riWoxAahHqU7ioc6jpQArNFcRDANUqQW75m41S3z3Zhx7CBMCivLEAijZTpCSXoDnq1yXKqCExAXJYQhGp9n9p",
  "key40": "63pRUBXHGR1ruZk8wq2CRPyMW1oX7wHLcZ1iv5ZiBoyybpYCKyYTGmGXSBk36s917SH2PJxXGiW38EE8XP2W858k",
  "key41": "3Epy29Hp7U3MDDsKPxFiT4wDfRCn3atGXYiG92mi2VUdcctf2Kwxk5bGeY1WDYKS74vwnrJwz9z4RC26dSXETtoz",
  "key42": "66VXHpKcvsnM8p6tYuBbKHa4wBQmJGfRq2EqWrts7WPDiHZ3qoy7eYXvG3abXy5bs8QtA9sDAYiGQestLgbMQDJo",
  "key43": "4uoLzGgvPX2PBhR2KyEScYhRBKak7LKkDQwsu7bSLdDJDbQj8v7dKYo9uC357Bure3kCqYmvuxFDeYkMAcTymfvq",
  "key44": "238rwicH554LH1jCnpymKJhiv5LUPkdB8Z43rbkiADoYu99Xb2VRaLBQZP2HkZECh6HDkkvznQ4wMrx8kc1EGj8G",
  "key45": "LiHjsf1vZkLbrsUGGBGMwzZ4e2GLQKV6zxTjE3WVi7xgvLtQeVxMsTAqf7rG3BhM7tLcFyjn26BEur7RSJ7dYfM",
  "key46": "5rQo8s7xUFWekoQoSm6C8ooy6AE8ZPs7DFg5JTsXn79fkWXWM9Us7DK17k88iniLxHPK3qFtBj68hvifRBsjckgh",
  "key47": "4u7fz4EFYaCRCbEfP3DvfDBUPy8XaXxikQhRLSZrAYeRtqkENHxV2inhsP8npQhyFoBGU5ErmmUrHE7eDvopyuvw",
  "key48": "mbEJ36DkLdpp6Bkk6wb6WyH8eRYJCHdouS9tDaQCPMXC3ZA4ijgFqAWTyhG2hBSZXzp31hH4Xn8D9G2Ax1gGiTa"
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
