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
    "2GDvRr181CRGFKsFJHygma1nMeuZ5jSqdXSyoXDUjnugoyXexznPh6dUsR9cGdEYCx43fGC2WbM2Pg6p1jcoSAVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAorR2Logyxs4XcXUUN7YbQCNUTMvCGyxndLJChLM33u9husk4JihKCaGm974FBdxsqbRv9rEbBZHsY6NeDaFJ8",
  "key1": "Jr5zFZn8of7EeCqg8b6QkcjDXdbMgvrVezzSpEacH2VJfH9Sd8Z4TbZRJAdwdwAxUcKEfm3GMu7n7fkVtTFAshq",
  "key2": "4dFCf7DmGJJan2tVyJBVj1DTVFtFcb9GcpZrzUkqG1Sg8FWL9HDTgEWDLoHAcVSF7ebZjDQ2CUJNF7bRmnA6GivF",
  "key3": "WZsr1ZwFq9BJFq28UFMuQCnTP8FvTtAw2B9Mz53A17TFJbp2Ax6Lmy14LMorPsxU1Fhq26nVevyKBqWKk1eJzZt",
  "key4": "4Apf8kbTSPgBLcUM3Pv2nj1nMjWfH2FJKJz8TovZidB5LffUVEJNj9EN7uVFRqgZEQhhf2n4gMvjeHoUSVxhDPDy",
  "key5": "5mgcFk3X36B77nFHc1uL33umhCJ2BtACTtWLwxrjsqgHQW1ww7LRN242EmP784T6uCgY6ZvAq7sXfqbsiPJVZ9Qm",
  "key6": "53SbproQkrEsqDxFpVChX8gSoVFHpXagubNGZK3SGFnqDz4SPrRRDe4TAm9ey7bGvB97NG7efbvzt4Sk3EBPr8uD",
  "key7": "xzLTU7HiYxQpo9bQGMsXQdkTWYkVYgcK8F81gZHPpnp115up7dDz4zkAc797CJsV7gsFDR54cDKqQ2ZKgWE9j4x",
  "key8": "2aEshtGPJZbM9zAhkj6bRr5SCkq3qY3hBs9CZueLZvwKL4t6ECrNfULzfaaVUukwkkQYb2mkJj9PUPW3GuRgeZ1R",
  "key9": "55JpU2CMxEMCmir1jvoYncPWpMTpcBVdVwXpd47JgK6m9ZxG7qRQrMiK5TMD7vqHxgpDwSiZmhcCBse7HfhfdBsV",
  "key10": "51vaD5cbPRWHeXTJqr193dKRcFmFLEuzmH9rpa6GtGDZmpQT6VYE6cmzLk53J1eQBgeMDBRc78dgDMvt1UuB75G7",
  "key11": "2td6oaMaBPu2sZ9XWmJtP8YET2Q7jQMow7fDZTrtSi4s6aXzghMZBzjPncR95b8GUcEY2fspGotPHpz3BZV24g6o",
  "key12": "21vDqmyHxVR6ZcZq4bDXkwgZsRAU23VJewEnsx2d9M5F4JTWWfJzdgS2AcM9yGxvrNkJ9TUtrqJ5NbXctH5c7dK9",
  "key13": "5Z33wAqGqhJbvxJdHxdCcSeGL26hstfhw2hQapHzK4ZUgUWyb3uGmVinZcFimjWU2L5ekbYxNkAhptShUGNZyta3",
  "key14": "4GTypUYgbZ1L6GyLREJ7rSRJ4ogDXxEHNZyh83YYWFGqvBhD3ernsBYR8iVzNYqTf5vr3eaJqrFxU7fMvZYSnEsE",
  "key15": "4d439zomUGuoM938zJXt3RrwqfL95xLSJrEPmrUVyRcH7UFCh7uRjK4SUk8jaEp5FBkoktLu95GnvaGmEswtahmi",
  "key16": "3SjGktoLs4EAtoSzWRNmc1gq3zRNNdzvgr9ovZKGmxTT6MAyfDvUHmb11hfBmU9LA1tqiszKpyAbRyW9wYHyo6r5",
  "key17": "s5Z6E3GkhEfqqygrwRSBoDAULZFUDx7yoaoFnwsuZnnQEvuRb58C3qWVFUD7S5tcrwnpFjRH8C4pBJUYy5VbrQP",
  "key18": "2bT2yCVn3TygCrY7xTVJYLUWmFhahNrzWsZUrcBdGzuYSYooobBQTwJsJXu477WZsWtpvisQbSQYUjovNz9bvPzd",
  "key19": "FrNxaLmRc2Er9ctD5hQH3SJXaQ51MgXo3i4kJKC4Ga6Kh9nwtNbDtDemJdNkR3vreBJxEWHFJxgy3HRWde2kyBX",
  "key20": "5Nim41ZYNQicxhPk4Q8G6km1DcZKqEfhtySYQnc9LXJZctZsp7j1sa2tNcVgVK1QYydXhrY4NeLH8ymujuzpZx1k",
  "key21": "5wLEQeyAJk8s39CqiRi3kN4rSjfRAx21oTFt96afeMeFp6gqKdNfPtESCg9o9Zpa17Aewy992SbRgLkxmP86tJ4i",
  "key22": "67PbvpqX56UQAvYmNHx3dMFaLiqKpNUC9RtrwRgMuCEar8is3PNctch2xSWNuvfGfD5V9brxhkein6GHa3wV7wpe",
  "key23": "5V5ey1RuFZdScDCSWSnGSkyiv8uzSwadGpLp7UMCQDLvDe28RkfNikEeH1qKk4vVK7yssnw3LbjU5RH6v4GeNyk4",
  "key24": "3GCnHzzRtTUbuXXbqioqJa6tNLUg2QbkaUCvDySwdoceVcGiJofL1dPqDjEmSTYv7pE6MkTRvsktqXtiLE2oZEV1",
  "key25": "4QEUZ5EHSwxjid12pJK5cezjpG7vqFqXy4tiVxikSruDY4wsB8MWyYDwv34jUfEMnpWEmUE3d6T2QVSkkkWBdhsT",
  "key26": "2rxPknFXAf2CYeXj4LZEYb5whVsePyb4ZCyYBdSSCLLe4FhDW6jCrqBEN4uzexcZgHYJKGYsEL2eyWG8Xsx9SLN1",
  "key27": "2EzEXHibWZsxJVPQ3bopXuZkttwAyJtPXonGwux1MPxfjEEaAux7kkpdey4FoRJmV4m1d4hTrGrqjWp1XRNu3Fpj",
  "key28": "SreGZzRqB9rwyc884rkdENmPuB4HN3hukWAAKWs3tNEtyFv6nbb7MvXYo4VF3Avjp15TznQCzXoxyAvnuyxmXKU",
  "key29": "2tZ3DxPDuXFSmZgBZ1TRLWq8LvwnFmmrKaR9RVyw2Pej5Rk31FP4sv1jpXHDENaprkh6pWVSGSqqbw7PhvpUtArZ",
  "key30": "5DSYLDdLNdquw1X15mGjkDgjym14g97NkVtEMz8zikwFcKcD9hfhdDtJcyjTTXAnwsLGfNxMwbdZd7tVpMwMWQeB",
  "key31": "3NL11nfyH1bA6sFTCwCkX7oPxtk59BYiPuEFh7qthM2MtRQYN9z38vycr4z8kAkZcYkRrbVPxZtYnvcXac5uL6Ej",
  "key32": "4ugMxMRrZk1mXaNQ5ePEEHexnb3RJLnHZF6dWWHcm6ufHyJyhvMTMDA9RnLYhMk2yQUqb4RssJgHQFRTGJy61WH5",
  "key33": "3oYEDHCF3pbQjgn9EuW89RGdBKBLajiG23i2r8gMqqd3eo8ZddwmXBqXQpjnp1C7pA8pzwJxzKqxTgQrAHnAf76P",
  "key34": "5yrxT18UkXqd4uZiqSerki2vcY9TvNUPC3hBZ1ZANLcJCpiX5FSm5QtUrCrwbWx18VaSxoB2aeq4vrHYTgD2Edut",
  "key35": "4ASBZGzjCrUtREXGbb8R54ewJXBgbJwRfUZojhz1jaVN9ngucQhAmYWfz3xbgLuTBecaCzk2imky4Dsz2FgYLtbD",
  "key36": "3x561GGAKEtznnMhcwm2C29ranpbEqYZ6kAFbVKzuHTo4fiJQvWZNXJQvZyhuuVMUJJs198a4vhczEs2R557dorx",
  "key37": "46UcQ58m6Ap5urFMzuTQ4RSkQgYXd5eWzGyhxKdnGjPYpVQzmdK8wooyF8yKFyAd6bbKjxByezFhHP49zAw6y93m",
  "key38": "22Hb7Lz6DNGgALwRMpv3JrkRzkgvdfzKx92n9yCxmtUw7AUUXuesukMUrbATaUfHZiPyaTBPUXw8fCqUenye7Me1",
  "key39": "2mbj6thFksgpVrFDZi3xyp5GNzLncuYadduTFNXrcEpsMcdKJkCptWz5gCyAi5vt2dqWVPQ13wTAA57xGAt92yrW",
  "key40": "5L2SynT3NbgWnKXduhubu8e55PExsuJQXijKHC26KA99yFWW3agu9CDUDfFm9pKp9KiFESkP84Y4FPRpvABYxoot",
  "key41": "3zwsp8JVQ3ft8pkt9PvKzssj46VkdCJFx45VybRod71NzXJngf1N5EA5WT22CcTacRr25gnXm574gSXC8SyRUz6r"
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
