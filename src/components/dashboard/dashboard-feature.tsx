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
    "529o2Abq7yszXEry2HGskwJJsEGdm1EW5vAZAWoCjVG7L6uaYchahVe8jRxnTFVeCL41KS6bLWUeDWbKNDXVRce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TxihTNHVuvoth3NvwJgR3HptTZLgytaUyVf788F58RDFNCyPgcDjPJma6cjNxAcc3A9qm1SqojEkUSSSJRdi6KL",
  "key1": "yL12N1X3YbqMfpJAXqhDQ7e7onmsmHZxnd57MTHCACmsDgSCjysvZWmS9FwBVXNLhqvr7qtZFdZc91CPwkvt8xz",
  "key2": "5GMMxxesQ44tJ5MDCvk8EpbJDSwswxqMkSGi5WYrsxbiRZNMWzGMo95fwB3AsBgmsz2wQP5QNE7tWBpEm6RsTygE",
  "key3": "4LVFbVyA2XDycUTrkXZEYNPWgo3zA8AMpUxka2n4VGnid8DQVmHVDauig7iNce9QeBo2GPes55RFXhj8WjDWe5k9",
  "key4": "3W2M7z5j4ndihbeQXaBLA849mqj2bymjX4PaLVr3agUWmSC6JPzoH35UgxQPzeHXNKN5mffjgTmB9P4H6yYuftPk",
  "key5": "4kMZrpZyTgH6xwmDabNkbpmhWKxhdMXw8UscCjuRfUZpFLZiSk2dQpqXh1SYf2qd7mVcDSyHVd1KwTzWv3sWApX4",
  "key6": "vqoN3K5wbEeZhesnHtQRx7FLXDj2q5Rk8mDSHN4t28rtGuQi6vGe5zJKLAZRDSiuB9JTFxU7bzKZF6cJQbdsGft",
  "key7": "xoq8RaWnT9cEfigNgmnJ1gUCqBSjJrZMkrYUAnDanonkdoBeBT9Meb3kbnrefxwit7HQ4YwYQkwSE4R9R1pLtow",
  "key8": "3EY9c5mYoe3pcAcgEtXo2QSaCWTQPsgUsEFxHuNKEPhZgbarNchPNfzbhQZ3ob9x6ze8T1P2a9NMoxaqhY12Mdfu",
  "key9": "3L9u2FARUMp6ZEDmutB7bbQvbAFRajoWLngV74cLeL8r8J9spMG52qrQnKxHLo1NyEyoWKpHPTMKssobfaZegsRw",
  "key10": "5WVkoHKdFUF138qXawsgBnD6Sf6fbGX4CgAmWftSU4e5cEnWW89FA5oXmYfsZ7RWW76TFWjRtcRDnBMYkkRhse4Y",
  "key11": "3KD25cPWVd47J44zySYyVPgzwSfGh2Fobfj21LyhZF55UBkXVWPJHim8C8kZ8RVZkssSgXnUsGmCtpFAQ5p1UWbo",
  "key12": "GY6SeVHfnzucC5sRpHnYJ6LjcjTZhuSbvxKmvNjMTkhwXiAWsjXbnqTG43LpyAUcDbfPPWBM3kG1vGcau5fx4Vi",
  "key13": "4W2CRwuZe5QqqcaiferSMnCBQGgEDbmjNZeLjvUsknGtdDN5bo2uPCXPzmULSzSssuKE3m8U34eCw1tBDKxXC9AW",
  "key14": "ppDzbLYsokXnBseQfoAous9xc7NzZ8z5aMZHJPhPCVViDzSz1Eh9Bsad7fUZaAeneCcriinSgP1opQJNXDLbFGc",
  "key15": "3XHKFaECLToPUwo38wzpyeyhnG81J5gSU4KSu7Uvkf5FYLuR9CoetCvR4vAHbHSSUBnekZ1tNLy41AyoVgNV2Aoh",
  "key16": "3DVhWtuQwso6pBWaoNzrHrQDYQQgjisEJa7rK3hLraw5cVS7XGuGo8DWsieutDF7XsqSopWnzvuvbNFNvA6CVVZ7",
  "key17": "HKH31W68afDrvXqnUbV7K5AVZ4n6QDsjGfrcfM98ZXhuH9GqJxZbggsd5gpd9eMmMHdmF5LsUGfrSwNe7z3ytcQ",
  "key18": "5Prj2UmZPv4dAK5AvGRjJFEKZm34yzjvcCUj2oYYtxXVyUZxM8HtMXmMkz9TuaVitwCt22RNyRQqbfuuYBi7cutq",
  "key19": "4rvGvDSRdQcx5CPzZyVdo5PaaPi6hzYjZeLKWtMVEtCr5YuAr7HwpnVaPN8sHjyFfiR9xevCFJ9A6aBjqtQKisRr",
  "key20": "5VoDLmfiE1EUazUVmXdinbqjwXsrvJA7ZnchBk1u4R51EFQmRALoAUMnDYBsP8pCd6DySJW93ni9yN63DtvM3WmK",
  "key21": "5vow5kJvyUAZ1VfEp81cUzKdg57a5JCU7g5tsrkck6j76rhpNvBTwiKnvqgQgh89yrtBGhwbSU63N6eKvajUi8pd",
  "key22": "2yBz8J6USKDG3ADe6bDgG46b6VsugYBNroiULc5GvStoSQjrmqRV4QiWefpXqxar3D467H2txyfEMFCy38eDMxiF",
  "key23": "4Cib6vf7nQpwdM6ZctQJxBNwU9nKpL5kVAQbEhPCdnuHse6YUby8jwuukL8a64Yvgsf3KzN4mH5pWE4WF1GDqh9K",
  "key24": "3MC8bjP5oh5VChUtmyJ9raC6X5ycpEnshjJVsKqDoVqe3bLLqbW2sDMdasGpj6C6PBg2r8aVBuVcbjJmDD4uRiUU",
  "key25": "mjYH2BgeLhebj5Vbs53zjENTUXwiHd9hB7KJ8icGJn7Aga6gXcrWtFYT5x4LAg6xckpBsgNeuBgyqbh4fTgDVtT",
  "key26": "5rskLsS4mWk1iWN1eEfUnEDBkj38jJdsb8DR1yaR1oATp7ZvRYV6jQTZNZHFNb8kzML51ZgjbDZavMZVcLrftzTk",
  "key27": "4jYCHBWJVXqXuWd9LeTiFzcZXxv17Mi7V62qkRfPgkYdbCip66WxizsgRvZLHZwB6CApBcrjKR9XNqt3NhbuiqVu",
  "key28": "67n7maE3WbgmDg3W7GGx2ZLdKosNStd9SaVCKKoiQcP37AeALLuhkmS7FY2g3U8fTwDz4gmWA5T2g38JFUhdpsYT",
  "key29": "cz5aNq23aFrKrTYgCCcT1yXrsnBq9kt4jqDuWXS7j99QACKWFMDquky1dc6Y8pCEjwHckzripqQ1M8oPA51nTBC",
  "key30": "2x6GiH2ZFime5Ei3Nq1gzwBeqpgVMbChAL6dHeBHvZKwGuv8We76mRjMQqhiYVsMKfyNCsucmqwVURJeEPkjrbjV",
  "key31": "5JG4EubzCSDpBxK2FAntK4ERa8oCwAQQKY9BmVT8VkKcJYzQQe9pioAJZzkpMJsfXXBPANVnRTtmNdKXXrXBRPAe",
  "key32": "5oaKXZDfqXQ4qADdym4w9Ask3DpbxKX1BoR2s5tq1YwEhBfS1EkTh3mNgbViApCpatKNQev5zaSefL8L8aYS9tJf",
  "key33": "2QD1EtSVuy9XHFjegwZqDUvrE4KPVt9uRByABbQE64EniKXfHa2a5nufGFK55ssiDPo9ue1XGgr5PMQpHxRc56V8",
  "key34": "664a1sXQxxGm3xM6fv3vjVJ6LSzcgcwfH1DNgEEkiuXu3zTGxXNtLYN6GEQowk1CQCPb2wrLg4rYB8kahRwTsC2P",
  "key35": "34Ka5Lm4ijwZgAWGZVVbvhVbCtWo79u3BMuxTYB8QGYSttJ7watKKeRwm8sTguMj9jpSP6p2eGFydGvTy8UhcWuk",
  "key36": "3hPKdyU53fhQYhMjHjkNEWTjgdpEzDJy1R1RTnHUZLy8nCTiyMghhmWW7bSeA93K2HJvpQNv7iiLvEwH4cJFpUtw",
  "key37": "4s4JfL5Ci4M9tbdaoQK43rB8HyYAcSGywsy3PD8JW5BvhxUsEQ8HQLNEwUVch2uKUHqJAazSARn6KjtoFRVbMJKY",
  "key38": "3u2swQh58sDJ3wx5eXTJL5gJTuZK7FaBpkQKVyDwijCgPZJeMYgvMpjfdzbF4qxEQH6fssGsp4jbM2JWxveJcqUK",
  "key39": "4tDx3rpC4ZCw7SYz2tCrySuPwuorYsChcZ3rviKVSVW6dJHfcfe43Ghr2jAPNBvb2wLgy5JPuszt522PDJzyMuUu",
  "key40": "45MCEW3V87gVb6SesP9k5GG2uRHjSLGYWw4TRacXUG2sMTnmYeQKiCM2Gdvk3ejgb3Xh2Ey9cnEw9vRMkfLpZ4Yd",
  "key41": "3Qn3Zv2mYxhMtf6sTXd9Uh4uYBorAVCYVJ56GAC1opdYDapjkdb5yg1piDfXJKT28Gz4byDvwQFPueFoeJEuin4A",
  "key42": "pmxJdgmFkzqKgXQaEU3xXFUGcpBxYNdPYgURvfufLdg5VMpoGKudwWDihwz7X27sYxwD2jMYkGQwEzgAnv1pNL1",
  "key43": "9sK7ZfKzX75hUMbu3tcZWn2eavzkPWKkXUd126P3un2fjmNYtvPiFfpgH1REkyVf13N1FqyANVp7UqvfGRtZCNK",
  "key44": "PhpnFoiCrqwnebzA57FHUhxDE7gAArCFxLmJZjv8iPfQXk6s7rKo4E7ekZwYaBAPsDXqRBYVJi2eNE9ZL4qXKXd",
  "key45": "2EPCzTYqpqKXBSiGoVg6qXy6GRd4UhWNYWskjrNpuUHTzytrJZf3S5RkEbrWkGinDRapoV8AeaZA47PxLSP9qZN3",
  "key46": "8bGae1nnnVvH19ZoERkfP7AojYqXRvnkgA29zXQZ8pMLYnPpspKSwcGS8ZrCUX9i4siigoTemPNRHaqAGN6dNkB",
  "key47": "43iSrdLdftCExpq5xbQhfuXcadVysohuzWrhvNJNDqBPMaUzJkZi2YTtjEHeQZHP6ybGumisRBZc1B6Gh7ZR1KRP",
  "key48": "325HKHZkusTC7pCZtXaLbFYxb281A1yuc5hiXDNCffESfFB8gfw5iBLDhdJkSyaZctByLLbWzxGbftctKCxJ1u2u"
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
