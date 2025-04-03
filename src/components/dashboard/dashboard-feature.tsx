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
    "3ZzE5kPAeQG68xxGBhjYVue4wqWjPbmnvea8Am32kmyXZJGK8Z9dnT61tLLE8AcBvbK5nCzFK7DmaLkUjoMS7shr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65NSmapiFsi3bVZYCHDrGz6qY76e5fifBZBTvvaVjwvQDa9kwE3wT3V96yzaCb26TKuCbmA3xtEzkRVZVYqov8MY",
  "key1": "G3KQnAk2o2o15LbG6UoxNKrijpRNZxZVg41wmcDL8QK7z7QBiZDCop97ojjGwoZHkBTbdrwwUCsjur5qHfBK679",
  "key2": "5zJjKPQMhfjafsxQ6ojDsYbDhV8MC8isFR86j7qUFyNoY8nobXe7SfGG1zvkuyzjRQggTEaYXd2Te4jsqGP7xXkB",
  "key3": "3EmwqLqNBoYCC3amZS6wgBBQt93FiQ53H6tmn1kuRYS2PZwjp5zqyKg1oArnRNXnvjhqztq1AJHdVLo2asyeQd2m",
  "key4": "3tdw7Fa7fgr2yDkjWrjQVzi9YfcVPqLtLMBpyDhyTEyyGJuqBM8LVu5zVHgb5yWQL16yR4WKy4kRvuQnbvdpoF7R",
  "key5": "638TbjH9F1xuyHmf7tR44PDJZzEeANssJKGHFGnZUE9YhCkCh5VDLHVokdXa6UjoQJwCVBFdep6mDcWnEbkkipu5",
  "key6": "2eWYgXSm56NNULXhVXZcBRDcbKYNbjZsGaTSXgVQ3zwuQJfY5DvDHPQ9cpQfh5YLJZgUdxkbFyJNUebGfNfbbjoT",
  "key7": "3m3tttMCZYdaarBfo2wfc8fwxcC698za9xMe2yFhWbhniyywHjWhw1mjASEAsDTgVbHydVaNudKJqA92CEswZzLs",
  "key8": "2J8Tv2vzFbbxtyf3BtLW6jHgKtCE38X5YDnKvLsKytxnnska6FJhWT3jzA8w6HxE1SzWTYm5v1dVtZwwmW9YHsdK",
  "key9": "27Nk4rcEo5NFyWFbPPuZXJ1j5T9K2LTdKWLN4yAThnZFDB7ha2gbTBEBtqzYDuYPD2rFHEgJmatKFX5Wrt6SF1ZX",
  "key10": "5V4Szbqzw3aNfbQW6C8MVrTMZmKW7U22WhQSpdQwSuaJ68dfHEurzq32CPVCgSFM6qqfZYoJHAdPsVR2U5Pe94H5",
  "key11": "3wPpWKpzt7rEojiNPTu4GDMSDyZmR9xnXJXhLxz8RJ1FxvDRHnZtAXgpjzJ8eCPK4JCgWh7fN6cmTG5pDc5VqPD3",
  "key12": "4FzAWTnZYSc4sToLWogT22MRqanSvHUGxAN5vFoDCyBEhMroZ5srJ6jjNAUgdQg9UjEoFxQrQWFDpcQXgS9xKAbP",
  "key13": "o4pWfxEQB3r7wQyeLh5cuvneKK9REgGodhaTWFM62Xq4mHd3Qhpbdd949CbUAzneX3kNBP7JvunoiH5vyJ989dv",
  "key14": "4KaPtKyZ48TexqVHcN4VnYbwXpoLMVvjGa1togoahm1dviwBX2rt5ns7uiLVX6vwM5U4QwtRa3nW2nGFrSbzSMij",
  "key15": "6228wzwaZfawGHekFhwLJ79YhMYyrGKTXmSgk4SZjoWFLEWUkWAfsN944ap3EJA4rBfxTYV4XpHhcGAFTTgnSiin",
  "key16": "48sVzM6FmbHtDnZbQvU6VbTuFtJvuXJDXkHaeiNGMSEScKKkncRCQfqvqHnjQrUHxRKAE17AczpCgZxxg9mXPKMW",
  "key17": "RwQgYXurMCGnusnTyTrSEKbF3ky5fAQq7a4LcU3itS2yeDCBXDRrzRo2ruAAm2WWXu55XxiurVKw5UfvZr7Ap4H",
  "key18": "3b88y2TVdfuK8LrBkrDHUj4scqJQxcZ9mePuZ53UZwwPPiJwU7zEHh9By5XfERHjLxHUYYSp15t1Xwg526hYLjZp",
  "key19": "JoazDXnGk517rYoBEEoa24WvAerSsxD7j2tayc7nqg1uBeHPEq2FG3YdXDid9YMPsmrVebCvBfzFcQKiMMup7jm",
  "key20": "31EU4M2CG7i4jUe81oEKW6QNSJ1t2wreZF7ApgqQQUeGGsnvYceeCjtNcAbap4rhoNbi5jVFHQbKSbYCuiDDQXCa",
  "key21": "25UgPH61sbxvBYN8fgWjoVnh6GMy5W23qT54Xat1W3whxpcRNaNzojPJ1KNukbLKTLGfX9ne2n3tRfurkBnqKUkP",
  "key22": "5UeVnArYce2sqNrusXKhxqShaBR6fC7KcDvY2gkczQ9Ku3hmC9kYxNMXzyidobmcieQnF73NLzgCBgffe6SenKG5",
  "key23": "4qCJYcePJSVkr7zy4MVYKaw7GHDdGBmgu5w452TYKoqztgQjU9oayfNSFN4VTdy8EHnixdDURVVVbLay7sKtogfM",
  "key24": "4rKXD64KJRHQQv7hCEyHDmhZiY3dqs7QeDZ3NcJiUsyGaZFrkuZb1CLZKdN1QWvYzNRzwBZetMjE64myD1FTTDwa",
  "key25": "2aM7Pibhx22s56r1SRyuNkP3vBfe4jQ75HiXCEJKfpjVKVTor14kVgh44rHXrUAkLp2HKwgaRKu8P84eeczKAU94",
  "key26": "5i4ydQUPS7GLrfGQeNbZLt4BCRLT6KtTSuQrTb33EAowQqHwdRPkSdimHPSUp4TtUz1NDgzRarWuUNnmpvGeTg9y",
  "key27": "2Rrbx6dqrABNEkqKHqJJWTS23BM8mChR1FJTWND51JyS7VdiQJMq7Ns5e9XjAG2PKcanEnssSoTE7KdvJaHbFL2Z",
  "key28": "3xR5Fp73rq2FQU1cMdy8Vqd53xxVJ7musTzRFexNFKhzrCGw13wxTsX5FfPe3Nv6KaEidy1iJdhrSfcsQhhNCWLB",
  "key29": "oRREyaP1FFwtXpna972sGxjpgmoTetMQGR6CcdkQB7urN3d6gpsCKWMhjfB35svQL6i7fmxqYuKSH57kzmfxhGN",
  "key30": "ZE5orWjwRKESGB2UPWs5qDcE1jCdRUQy7Hxwdp9WjBt2tvd2yBbvMtkaM8g3YbBfdWESoTG4RkJUriVsdEKHEnX",
  "key31": "5baEEiUsQmLtRmaXp7ru8BYTF32ZMRvM7o3fPWtXVw4LqWSMg2W7m8jvT8uhVmbFyEcmUkDp4ykoEUAsCKmdDySo",
  "key32": "EMm4AEPPqX6YiGVsuMsde36rYybsh4yZr3ZSBwwm37Dui6DcD2Qw9UeNPDQKaCDNgPVJENciBMuwfmGpF12MFtj",
  "key33": "hkpk3gj62yJAbqUoTTKRWS59MbbPFsnzcXXRb6VjaFx3PdghAZxXpWhJUsTJquXN1eC4iqCZwhBL2AkSP9sytLs",
  "key34": "4JAfzPueMiaA7HcCa5hjFZYEWHHBSnVym3SsEMGKLeak2C2BijfQhWFgc94rkQhT1ZaJVTmtuvA87JKEJy1obCWu",
  "key35": "5aDkfVcvLiJW5noTVJQs5qT9Q7drLM6MSCMYhHpapgNzH3vkkYd5F8UdKZtECYq1JRtPaMrKUHnUTDpymgGBtFFJ",
  "key36": "51UJkmpHdMCukEBss8tpfiNvWXazpz9vfX2hhPfb8WHSCUVz7we6FKZYMUkS4HY1LKnwoiyYiEMD4VaVrcJvcMw7",
  "key37": "5zhz6T2QSVZkoTeaR97fhr3FA71mpmsEhHpJXdkdg2cf7XcuKVi1zzSsLiKdWAo6hmYVJzVgqUWCKKDNj7vNjYRw"
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
