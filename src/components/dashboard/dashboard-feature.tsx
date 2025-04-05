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
    "34h6bNF7tBAV9frF62wgRH9dwPJwQXg1toDBH2gFVBnN2viZGih6e7gW38PDkbmAe141V7CeeNfH6Yn2irZkZxkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C964AiGjTjuumgQJxY3aQhXYB1KQTpmtGZQeqePGS5WMd7fArjRMvhw59wzYUnCT6dyaDT3izivcLabdoyHzu8r",
  "key1": "h2aio2aDGUww3zX1HKEgqnop3a7iCy1cidmCV521J68c5ufnrn8NHpoR4tBLEJkTCbHmHgRiiU3itLX13Hq4SN8",
  "key2": "4XWvnsCpVUiuCQdo2KpmMf3UiSFfJF41BhRAwNmKXz38QVxcH3V7WCrUCjF8PiZyWwFs8JaCknY5yVvFfkyoU7op",
  "key3": "KSU8FuuGxfyX9UbEnhNdrBJWbEiXzmny1u55eJNBBDjXaqziHSMWDFMt5T5ExkVd7BZtrCPg5UVFrGkZEREwuiu",
  "key4": "3Th2ep7eSAYvq1RxwHQRh6KwaJ3awxy3dz5tPQN8z6NLRHHB44bPuTJZhdN1EY4KXqKvj9R7rTWVsm8Umqd4QT7d",
  "key5": "kuN12eabcN3Z6Hivsvf2xxEZgcqQjxKZ4GNVsAnB38FEw4sTK8nCWEuJ1QXQb8FaCR4dHYMmtaNYG6SseypTame",
  "key6": "2rhHqj14ZHvLysunXcCgkZpJiK64X25oJMa6FHPERE9W2nDRS2nvo2jdfruqJm1s3ZoSGkQLJ6fRauAUa2NtLt4t",
  "key7": "3eomEoKWEn1keDHQxMKUo7eze14qXwPAtZrRUoeVwora5GzF2CpbZs66123xsX86Q2wNGeB1cAe7DXWpSEvmicyV",
  "key8": "4BX8kMpre7j5LM8Z4R9pvcKrJL1XZ1fYiZrYNKXw5crZrH79vVvjGS7nTq6CTwb15THLBgdmU2LKLZGP2e4mrwB3",
  "key9": "37MgXdvLXNfpyvLCBPHhjLZDh5Pwm2f8H1wRTHNvTChA4but6yPentR13SihkwADyr8opA3yGeo6YebWdmTTd6St",
  "key10": "2VxUuWsZ8wjJ4HVD2cugXUjSf5Epvnjn149SRbbQT1jSB6Pam9z6rDd44Y2GHGTBhTqW4d6SAZg66TXjBakgfnaQ",
  "key11": "44DL8cpS83bHpko3GAxKxSjwoujJNDFFq4caBawVrEUbJWUKu4uixASMwGqifxH4mkZUa5fLzdTiNBAhWKTmkk9F",
  "key12": "14H2rSJLhS5sygSTmyLzSRsNphUbs7gfcNueAKstYUgMXhjMvnJVuzrmgA1tbyTLqT5doMVouUeHQujin8jARRH",
  "key13": "66mApPXFwutdbLcP8kibBLnprpQFeEjwtKYuz6NE4kAh3Z1hk9AKiTNJAJCPr7PMJ7CXJRyMyFCw7tnUtPRpPxDh",
  "key14": "3zzDK8SWjjrA6dfA5FBHRpmESXR6UcCjyeabcW6E9qvBrhddPNULCcE6Wt1ahCE7Q12TpabpVhPcpXFyCBUdHrUp",
  "key15": "2nxGAEjW4iQfh6Cadi1MwmprKyxnzW7KSJLdFvsAZdveFuEfDksBrMFvG4Di9YU9dvkRx3v1kgTK5yVXaH1i3yjr",
  "key16": "3rLFgWGS2MzkuFyv4tpk1zyVBx7bEMdJPmZ77hzZXhhdcNYTEasdEkAb8sz12bhjAU7mDPxbF5nJy55ef2uLLuDf",
  "key17": "3W4tTNSsbiK3CPYg1d1zMebLe7CEENrfhHMCubeTdgpgPEuRi25uH63D3iMJd4pDSpUkvZUuXaYfn8pJ3fVT2Ch5",
  "key18": "5dxzwhvRezTKGKAn8cZ7ymPAZauPdeF23jGffRtEG76DgXS9Le9cMpsueVasvSDpeCEs16bmxpuCzAtJGpPu6arb",
  "key19": "5Kt9h11iWcR4o9xzUdsXUVp5NXma8PgXiJBS16JBPUkSay7HNbv5G3igWN57ZwwFyFSVkRHtezVrDFRQRcCfoyVK",
  "key20": "fUypg44m63nEePZZvXfVt6rSmP8ebFBWUGktXh3uzoBQLRWJHaZGRQ1dEeyPAxeKjG1PmX5ssNzU1SmvhUCosm2",
  "key21": "5dCrShJ8R2b6NCh59ofEU54xd45y9qK1uWijqkaDsw5WnvjbkhrguEhLWPxPsnPtbdf7aNgqPXXEgbpu61vXp2hE",
  "key22": "3d5tnebgVUMd66tU8MBhxLbpDufKA3pJr6wMBaiNtyJG7oHSpUDqM6vnktQVsGhbuqzqkHxT2ssur5EJmGbRnEvp",
  "key23": "3gLptAmsfMKG3Xgai9fwQGG4TWCR9ZaFzyyvGEcZvgPPcrXGkGSp9KvqUqPDxAfXvjEcghnHjmhGbm8ne1LhPhFc",
  "key24": "34XeVn5MR32BzXFBTWeNWWE6fSrnHjZALWj9mmLxGDE6MLs5QcfVtsdxAHL9Bwnwg8P7A49JTRtd5hpAXNnrsPjM",
  "key25": "5N5RssqibnmovBVQyqbgggMCa4xrpkWsxWk3iBNxYv7k6KMdAxdUap8QjJ3zakoFxa1Rc4y8KiYet1wrJhJEf7aj",
  "key26": "52NZNvbMty9dJuKdea8oQPNh3oh1dVB8QaZWKAboMFBiaaqfVCXGHDTbXJaLyxi1PFG98jAwc3evwjXist91wm7e",
  "key27": "oX2pyBMpYt8shSA5eYjbEzFZtiGVeh9hjF7cz7t6ng4iZsYMv7odiLc7wgBi4aZ8XvqJ7fLNRUoR63Rb4uLAMro",
  "key28": "21kBNjFTABE7yu8MwVTTbkjyuP2L1pA22J4LddtDqgVW24bmodY6L3DynadJPqiJPwBFY7hBRcXfSDCmK22CkiQJ",
  "key29": "4fSCtD9Kkpxq9k7VRc3WxUAgbm9sUkcJrZQ4bjportD2JRoML3KVP8axmJrUCd27PsseHt24SvXeaUNomEs9mPTy",
  "key30": "3o5EJxe5SxPJL2B1DJLchFzjXR49Bs9wWdbQ6m9ofvzZS2jQQJHEk1q6sk6THJDzLA5bHPjae6L5Fd6v1zFQVJdF",
  "key31": "2F8BGk3NxbVmLopVzsZtTpTPsKaoRGMvX1fxSFGWuE17dHc1cs8xdN4ybJhq6AHkm2yQHHtPqMu4MfF7DD7241za",
  "key32": "31WDwioivktEZr7RhfL9SNPXj73NUNuFvNns6FJ2uVWPyZT85ewAYkzyL1UZLZz9TaSnpcXLTYVnnQYWVUMjiQ2o",
  "key33": "5EFZaJBrZghe5V86MojYZFCakFJMwwQtsLdkNg4dNrfvjpTFJpAkG7jCnckUF4BLHGd2K5aDErD4eXsJSKLPRwCt",
  "key34": "3BFN3chvVFxzNUJrXmE6XKVGjrPYgVcwXRiUELHXYWc4bYU5Gwp1GUqhfuRh4Y7mbvb8Muj4PuqjqZxvF5P1JLiA",
  "key35": "3ir2qSNCZyCJg9pLmjrz9ZGntVhWofMHMFfkLQVGEQKY7Dc9tFAJXzK59tSDPwxQajqJxpFQ9vzC3WkzVzE5S8cJ"
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
