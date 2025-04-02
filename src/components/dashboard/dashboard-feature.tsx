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
    "3bu7NVevQQAx4wEmsz6ixF9pQJZUWGsWuCznz6KcPEnuci8zXKe81CjA8c4fbspVzwnAnEKgzWkadQQBwMPXktV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HABH9fPg2Da2Aps4giDv8FrgPQPDsdmoMgdwduys3t8AKkpUxQpZAP8CFt2GFzyW4PpNUWc77SQ2w4RCM2SWoFj",
  "key1": "5nQGVsM7B9HcUyexGGA5QjTH28eLESB21qMW2VdpNZYFJa6cRXaToe3aMAWSWs26t2aSwCeJLqvKeZwVSfSS34d6",
  "key2": "29Km8zoC7ymopVbmmeqvQid92CmUnhcnAQsCAC18TnQiUX8eakGUa5U1AU2tNvfuhfksen2T9B1jeDVFYYuxAZ1i",
  "key3": "2Gu5MLKyxzKf9GxdyvzyRkLJz1yCp7eFdxRiEL8Nf6naVXTWTmHA6nvV4EoKXSvF9qJoJGgsdQMUbuSgnpRC6Wdy",
  "key4": "39sHVGvcBQqwJcotEmXESpm8R2ntD8KQZRo7kQD9Todcnt9aCFi7XVDtb4heCJhQFmD6EjnmB1vJsH7GvbmSPXxg",
  "key5": "453CuZbjhzjm6HGjJMMTEwyUogsDjLZnKdTCQvtVbfohhwkh6YE8taDWcv8GGqn4EMtXYeN9PTByFpg5Jf8s2NmG",
  "key6": "4ZJDJbe27vY3UweZCmVPkVJbryKnzkJWyX3kPJCcY77ctN8rT5jZyDHypm9qhHcjXKbSay1nFiV1pEPcvW3AQzyR",
  "key7": "2cPPaVXxYktYMisGYxKhxZu9gkKCBo1ECeAekKt3N7EEtvTmesDqQNWh4Z9AjYQrKUE15y3MRhzaugimCbTji4un",
  "key8": "Ln9Gf2AXvu1gaS653kYGGBHnHLPGYjtMzBat6NmD5S3M1qYTUpzfKdWG31Pec3JikURwRkPXDYa1JMHDzRLNCjc",
  "key9": "5dgWGCENMq3LX7PYReqKzSPPVHrut5aYBb48a72Uy7kgwjo3Q48vftN5CmnRbmYxkxm7EuYLnnTcT5v42BdAJujq",
  "key10": "3J9ozpNuxGVJjtaRbUbrsfwJZx3fVbXgW8tUME6zw27UfQrVYesVD2MtFt5rd5AMLyEawUNjeQ2Mixu9f3Lt7ZSc",
  "key11": "2hE9pQKL4682A39HsgtVgaGXoSQ1Uy55CMrLumkXeCiz4MHDfxAgD41DGdzxe2DoCAKBFrULGEWqK2GYDwFj9Z2m",
  "key12": "61h8h3nZaK4P27iYrSzJCqqiupSzAkae7Ht1vDBLabKFtdM6o1eDBYF4M6nTWGLFxMAmLx6747EU2ctiHNfFTq68",
  "key13": "4aD3vEhoyuSjitAdznYKss5MQFEypEpzzYdgKz1AvrR7qJcPfoThWjyn63kEDB7dr9UpmXiTMtaK5GJxzHoXLhfa",
  "key14": "28wYQrgxYV9vaNef38tpumeuwKNWsm1DsBsVLL475GU2AZYv9VoH7hsvm6J5b8EP7pV2C4YAPbEkPfRPJX57j6Go",
  "key15": "3qNi9ycMpJrPE2Mju3zFM5LxFWt1rmQpX6dgHRkJ71M1Xc8Gey9KEMFy6okRBxM18REcwM8wg5WMuasfPVD45pm6",
  "key16": "2bXXCgnhuZ7BxVUNrhYMX228sJR6XWmBhYjFPeuicZVnYq2h5JTRnv689zmUVCj3B2ZEYXiyALVS7T3kufBYakgj",
  "key17": "mConi3VGe5DaW3jan3xYqX3H1UG68rfndh2TmUJbFjUKi3sN1bJhQ6Y6KEsevrxWq6LGySwC9TERCXAtXAzy1KR",
  "key18": "4oiAKEWUbXK2nU5Z5MB6cbjWS1GUSv6FyiEkznbTESgU8hPvUxDUrQeGKWhFcem1R8dncLoPQypRffUY9mgADbB",
  "key19": "5oDKmn6ik8t5koJW67YMyiVJd1YUAHJKoUohwApgUKwieRxnuK8afjwhPyy3NG6rZKzbma5ygaWzvHWirSvMB5fD",
  "key20": "5AjRouZgUzvw1hNFsweB9puUzE99pA7RiSRi7fgWx7diDZdzHtNYAKagEzepCn2AUati3ALmuzoXgimWL6Zy7Ydy",
  "key21": "5czZTP7weFVktKiVCyRiQTvcFmyH7jx8ntBDdEzRz8VY6SHpBkowM3SjMUxzU9khLckRbjaCbPkNdM361N2NZQY6",
  "key22": "5n4x9uD8eyJVy77QTZ7Lfagf7JJhJ12zsuKSAqUYCigrNxvLCUi4uYDWBH4bGg4uFVxujQmi2EnimoxerPdKR1xh",
  "key23": "m3shH7LX68CrVu2FtFE9RrYN9vi5r2rfnJ52sDhpisxveMGnq3VyCAVgt6WSvTA9DXZN47AScBLGqkQeCWy1vUr",
  "key24": "2tVcn2pr3F21QuRcwFXWq2pciYLkrodHxrnkQaxu13h84j9xCNVjoZRszhbtSwHhJZkkbDM69978wKphXXTPkL6p",
  "key25": "5boVK1vEHsT6PWQPuqX55RdhyuB6Fsmn5Bs3qDaLv5Y6Y9CaMULYS5rMGfRg9mYYdUpCjfYnZA9CsSMxSHrNCGPw",
  "key26": "5TEpEp9RZoTpWLAyzXAMSQs1mgXHTH5yXShCDmeoegLj4QkyFS8VyLQpd8mMQxofs7f7iMEw5VbodpPkMt5G9Px",
  "key27": "3yCGx46WSpQGt4JEWx3pfo7imKj32E1tGtSns5dUDs6mHkBvpFfVMo2wTjadGSc5hra6bMTnyfJfNXvePayRcbZ9",
  "key28": "5xFMu6uaHRs9NfGD3Um3SBmvU4ruh9UMFmKnPJviP4yorXrev27zpm8HGS3mAz9qXMoMvPphrrZqUvNybxB4nwSw",
  "key29": "4XkiDFdLJMRTLa317f3MxxrEYVxV8uxmcv5e2JUnLrPjQCBguhEbkfqrnX7R8NJ43Utqm9rTYhKk8KWX6X8uBiet",
  "key30": "LjYGUU9Tw1xZfC76gmPxWdHfM5aE8vLeKDuNZ9PvtzhP9atG7KWrbj7HKiQd3uW6weo1sbJHUFkUDM7RcFcZYkr",
  "key31": "5DauaQUkCbJUjqegmr8TcSWJLvQXsHWztKauxWYXJn9c4zxTYGFaWfSuqoZriELSaodkZaYJtWsRLL8Ab4MYyKJg",
  "key32": "5nRbjjNWb4pxZCMMMD7pHv2pVWKHfGJSQAWpXtZcYP1QJo3Y3PWwvDSTi9URBNjtDjqNWqNNPA9ifgopotNu9So2",
  "key33": "36AnnuB6eapbsThb4VEj7q5YL35PzfzZBgeoq8aGQYoN7UDrqLpPu5v1PMdisamfEsR2aMaiwfBrREvXGqFNGcxE",
  "key34": "5VFZzZwY2bajv5u17yVZqjBVwiCjbYPXZQ1XpXGi2MrAr1EvdwSFb4mW39Q7Phkf6KCrGzq8fswsbMSW9aWXqUvy",
  "key35": "4ywwk63Nmha6ZgRhJP3SQsaBGbPUWhmY1Qkers7eUpz6W4bRhbtZu4bDeG46su1pzjRbnup9tukJC1YMkD1E8agg",
  "key36": "2UM1t6x7LfRSyryQV4SbQwRsQkovs3Z3TywaAYU6x8yoabDSARKxs46ciaYSi5uNk4na5fFXwSVu3KcrWD9QzT1H",
  "key37": "4TcZk6qC8cbNYuc2wdCmxXpy8RzZUXAoDsSZiLkezXTeCXV5wki5S3UJW2tGz2nE2s8G7GBLNsWHgy8AiM3md1Rp",
  "key38": "5tTQXEBGfc2P5eQo8E2HaxVfMivHkShMYWVZoG5VZzyERE8G6mK54Wpgb145NxizqCrSNF7LDKtB2omAcbtwDh92",
  "key39": "5GxUC9hZw2HbHZxq72qQTuEjAeeNdaGKdcPg66SMJPMkNJvLq5HH17krgnfvDcSJHHWnCE4RkCEuycNPQFQoytFh",
  "key40": "4NXL8LSF2Vtwj6w1fKkRWqpE5LL1ueaUo4VguhYFVj5oQ12nLaWcp5wzERQmLE5GrgrWXQbyfrJcHjy1z65XHtmA",
  "key41": "3P7BQ2SUYH4ahUg4avcGmeZ9pd2qzciVWzdk4Udha2KHNJ83bkMJhqkh5mitMSSFSQwLNqQJ7warNDk69JDvpZFq",
  "key42": "MKHZmvnmCeYFBxXAkXSQh8i2P8TnW2zkRVkrRasXDjViyDiSnkxQzz4NAEwNHK11EGQrLo5ddfMgNfFepPRb39c",
  "key43": "3gkV5x1bUvFx2xer57CrVUDWH8BzqvHFnDWkVPYCDJrdbmVBbBt1pDgNPqx46uFSjBkkmyVmauHPyPZKNo3DrbR6",
  "key44": "34AjRkSgCB1fuZgMKWut3PJsu6s7EkxfzX4WbH3yatS2ZHrvsi38CJgdpm4BPtmSyPFto9pdTcSKqiLSjkKsC6nB",
  "key45": "VcXXrMSc9y4MwRYp6T9aHkh73wofVdqYH7U91HUofQHj9wPudj196UVfxdynVCm6T8CUVzWLCAbjHMKc1D7Q8ap",
  "key46": "4BY8RrrG8DeecRRAbbrA29NyH6v5GFnFrefQvFFjVCVsRKHrnFmFW82fDng2vn3AZPqqTA2BMoo5hoCiUJsu43V3",
  "key47": "2mnqwht24h2qfJCQHxPT6HR6SWTMps7axEPrApMe4hxoBBvEPsWiKjzsQC1HaxKsmCQN1pU8HuoeJn7XyhR6YoAb",
  "key48": "3LQeftTh3kEwFyaatY35sYNH5cAMXtRkgJfWgJbKrc4v9Wi5AYbmVZhpqHKaFXPERjGgf2uG7bi1cZbxbbepb21m",
  "key49": "5FskrpqWhPjW8rUQKy6mvcW2yrCVhVvX8f6TqyspEPSHu66Ljy1QXYF8QjKPTTGfAPApnLy2xtDtL7MhbMmH9Hmn"
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
