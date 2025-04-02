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
    "3SH4ede9yXAUuMtmXrFDcqQJLyZ9A6JV1n5csrY2XbNnzjPJVkZQKFpQ2BMnRtFakhmAS2TqjbMy2Cajm4as81tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeJ86rgmmmg9hHxTzuu7SYgpTkwagGpCEXsfDief65JXY6eUiGg9DvZ4KCkyJFDnWGMRfvrCDob4CwN1CiE45RM",
  "key1": "2wAEhapaHLMYR8hu4RMEBXQeWQ9r6ofmcWZm7qhKp4aPPZm2jyubcdZRgideas6BHXPfdS1bDEjwtD8G5e2pSMcm",
  "key2": "3YcoNgcNLDE6bq2PHryuuuhY3PT1oeFfnHzbxmbfSLAae48VHSB5KPQM1wX5LGp1tJAp1VpGusTyC7ji1CUcVXWE",
  "key3": "Z85Su97XqUBG3g1XNvoH9GRRa4cSqKkw16Npm4nYWQktLxrTPChXEFfmMtzyJGXwsovmYii3BXez5H9G5pEJziQ",
  "key4": "2Zs7ZAkPPYt6cuzwSYHhRnZMU1p6atRTY13p97Q5S9UcXsTZgUMCYYKYLodqyvG4QJxFpMS3RqbN4edDW8FpXDmv",
  "key5": "d2tWr3dYTskVVc5WXnt2Na3meDiu5u8qskvDmkUM6y6HXied4KaJD5pL93VMgTit3iUcYGJX9iyu5ESLAUxB498",
  "key6": "3MJ3nZ3Fi4BYDk7ncDmnT5VhjbJwxrXoBBqoR6Jz8pPa647HmVypxn1zDWhQLBp6eCo6Q5tFM8ZbnaXoTFESkgBP",
  "key7": "2pZUeDLqDbWPXkp73Sxw8LA4JMGZzG4ioZ3nXq65yxwYt3WK9ERk1V8wvvsHqDSedx9Vx85KPgi4MRMkcXZBsnpe",
  "key8": "2fej1G1Eng8dGr2pZhk1HM4aFtgzexjpwmaPY6Va52nBRiLyRsCKVwT7ur5FVFt1KovZJJbwTdgoitqEcqaFAG8y",
  "key9": "5qxptaPFdpbFJ7LR8b8LFCR1qqXw6Hn4aa6kci73TaYGQNZdCHdwBLB6Hut1bdob44gEysmB5gcXKpkGKM8fBEca",
  "key10": "3vJA6buyxmWdBCa6ZcB4y6jPWnyZTGTdjBrvRMWLi7uKbpG2t1Zkqf3Sf6zdr7CYhhDKkMn8P12uKazh9bK1vCef",
  "key11": "q7yoSAqBNzko1by8szMwumbbaM3jqqyp3yG6U5ov8i5amejYQ6LtYoYxbHkxfUHRt72vNgpa4i1AdLcHDNNQpf5",
  "key12": "4s2b1Pe8FsKYteYUUNHFqKvrJ2bJbdG6mG1YQUsLwKLQHDiYuvFZtaDdHRqxpppij1zuj7UzXFhe1xCU7gPanE4Y",
  "key13": "4DXMFadyQ8SQ7KS1LMpJhbTRo7aQf2eM9xNh8HKsVPYBRKjeUgvtn2dZbiTJ1yjiU1TnngaD1vGxue57597rHZUu",
  "key14": "5HDT7LhdQobfWN2aRW3hkakXtASrBmkiiB1nSfszBua4gaScwhAYQJ92wa36CSuns57PJ3WX2BzwewL3WWCkfxaV",
  "key15": "5J4jKac2AJ45D9DY2jpNzj68auC2NDa2SKeByezDyDGpUCmQSAvZQYU25jPDNVAQCVPsVfXuAE1tHanX79GKizrE",
  "key16": "4QuDwAWqN4FcVKyRgqncdSoiswxmyw2FZr4pb83WtzvQTXgzdVAbKLJLnB5VNqgHFhk5ypa3nTZupchGe6RwpLLB",
  "key17": "3Kfd1LqAYZypm7bN4kX9y9f8RitUL39dDYkBvsDVnzJ33bMP5XPkHBphsZNndhUrNcKh4CKghA4MkPftV3Ltaxpc",
  "key18": "2D4jfNA5AASstGjCDuTCuULXG4KyazxT8GtcRVs6q5CJum3Jkv7MpuSXWqQAdsJZR1oTcMdb1KBQehyifoQQ2fit",
  "key19": "2XG5AmSNhPdGQMJYKf5MZq9YgiCuSwuTLqpJAvMZFF1k9DraaRctzxqraT6vTHNULDu6gunQGSxJrSRxURE4HuNn",
  "key20": "5Aioub5BmbPzfhPcSgKLFx5LYHQAnpgzwTCZrziXPMtPqUSue1eyxYxJW4Nf7CbF467FFTdTUZdqDJCbQi5qCT9A",
  "key21": "5Jbxd3hAahyPzS9jzAe9dnMTUG5B5w1N9yvQwLM29NP4gi3PTvFnhYpvKpdoZiv9Ha1j6Yqt7cuzNf2m51qz2m5z",
  "key22": "Zgx3Bx4iP2mhahf1Vvd83d15UwST1Qz2opkFUrYRqYwvEeuWFpZGpXKwa2Q9Z9Qrg4bNt4HFpx4TmsNRGuf8msh",
  "key23": "3qrksaTPEXUf9xiR1d5L17gVkEzVXZYhnvcbrPxxVy5RBfeyiGhHfP9WAeK8wK3iS4bBCE7XhaMjmBde5d56dJ69",
  "key24": "2QCy3jSknELrqzSaBgmKGoBNSH5VMFdksaKwUkDYx915kiLW9JysYVVQzgh4Dfv4mBL7Sj9bUJo8HATUe4r32NZj",
  "key25": "sAWeyWCm8bRQ2q1WppqgEPjtHb1nvoPCfRKeuALHW6PT8oef9PSNQh7ccH6tqpJKFiD31gn29U4NP3XQawLgcfg",
  "key26": "2vEr2hw7S7HMBFzYrtH53wema1kSe8d9xTPcECKnYAy7rG7S8xxrk6hejgnWtMe6cWFDZnJooqpWetHWWYDBxPCu",
  "key27": "637aYnHo2aff6KnWyaKRHeUKxxmAKyat2UnpWAW9kqSN2P4KAvBZZQCXCQBPYR8Hyh5fJjPWk7JkSvapRRRBodv8",
  "key28": "3LsxsRGqysavY3hmiHMZeWdcHdtPuTjqVvioMoFrjih94NJ65BwRNsWqBL9YUCXjnXFeD3kGrUzG8PArmvyVCoaY",
  "key29": "3pDJhG9nxjqQdXu2j5b4EneoGUSHg9zVUKFhVhZcJa6kiQUJdR8yp3meE7ZpVWu39eYeTnyGoddYJbxZEWPCE8LE",
  "key30": "3vP9mn5QxzbAK1Y4dLCC5uEqnqji78vGnYYER5cNQomQ7Kw5fTihm6CWQirFenE3GU8B1LXwU5QCUQTW6oo4WCuN",
  "key31": "2aWSDCp3zEPpfCpDqgYnfXjYtB8XVGZUUX6AL2McT2e21qDSCZDhxUYAnKchsktkrSxjPgir8n4G97n6vcCSyVSx",
  "key32": "3JmMJuKtCfGHNcs9Lqm94mFRyrCsyHEfnVjwcf44ZdpAM9zx2JZZxRpcqk8XV2mrYQbLs1hV9QNTnvk1yF9w26mi",
  "key33": "yAtPKKVYNz3xzeAuYnFBVte8oKFq5cG6RACEhsd5D9D6nrctg87g3e7eVemJm5YVGiW3EESg7neUH8N12UEmK8q",
  "key34": "64pzpi2wJBTDnzgiVpQZpdWrjo9wCib3XmnUUVXQKqFZj5tdtPdRkDw9t9k4r3AoXGEPAhyRaBpAwq4rbf8MNHaF",
  "key35": "4Jko5QywH2bD1XsPP1SzWMQBJR6aujaQcePuE3wjbkQ4GgK8sG3YQSN47ymTZuEKtdAi1nj84eo5WX4tmuJyKZWd",
  "key36": "4zVGnyxNswSYthyy8pGYZwdt9LNuThffTeCqganFuQtCrZtZvkLNkRH4CKtXdyy7tj8teadded2abNQcJh55HySt",
  "key37": "cLG2PqCYijprBvdbuw8SVYsuQ5nFVWiQQh7HEr97vkocF5n6MNGprh2gigwv2mp9goe2XkeXAxSwu3WNdgnXgxN",
  "key38": "2SH2Xiq1KJsBMqCcNKQm3rXwPnhbi6gYfLTktPSrJWynZwWiK76rhApEk6p3NYPmx298oQi6oT2UXhfHtrFYBNtd",
  "key39": "5M6WZCMRKbH4D6PvuUW2grc6hsWzzJ57WvMf1yW2XJxxiyXF36x82cFBYGKz83ZhnMQ9TmU5m8cXv9Po5AP2g2eG",
  "key40": "534VT9GkshLQiAkgWh7tyeaWK7FQzUsgLNRaxcoBkBvVGWZDs4qVAj5x3QPiqafCUnqEiGVLn6zustCreDKAtbRu",
  "key41": "3vb5PnM52foTU9f8bcgXpuLMkV3oeBvVDw9KBXdLfW8XJ8CAb6YTQ5k3AwqaRjQ5dKjEHh5QtVmZi8Tw3CCpQzxa",
  "key42": "5r23vnZxjoDatG54eHminzL865mZzGcwTEFrnRRazysZUtjtNqMqfGcrXUBocyYhu2ZzFLHASWF4fuuDwQhLoWpo",
  "key43": "2Gjmv396YrcCpXR7BhzcXEkPDv8oztaRKiEFWeZm8MPYWvMwkQhvoygfVNKheJHuePQn5HPd92weEX6PWF9dswQ6",
  "key44": "3Ud1qD9UyHxm8dPndQRZXbgPzxz37nv32GwcUA6DEwjbsCvs3aiWTdRPsyskeFifKM9RvSKCMDw3cMGSLLN1oY1U",
  "key45": "3REV63dat6iUW49pSvuusyXXpgt7PDXbeYAh6cYUiSCVkCSpiXu8jW8TVnPazpqvJgdocuPfXrForZrNJ5MQsKRX",
  "key46": "2j3eD97gXjR6Q7LGb2zxtJttzS6KcdR93FVTr9YsVMK1qJXghHnD44FTRQz2tZJugHuLnjrfeaeiSGoSQQT8xX6j",
  "key47": "wBeojA8GDycqitKamv9fRHySvuNygotf6XH6vatam9HHczXggH1EsyP86FFGcafZsmNeZmCBtfRbjGUozB8HPob",
  "key48": "3KEdv25u6HxLUhXJBdymb84a1yAkBLNV9HMBKAoPVjd1yEuc5YTP8sAX5wC56irYED4zD3wTfwgyUfPysyd9ZmpB",
  "key49": "3LstbZxzgJ4f3oPqet335xihsfiNyevDHHKRJeGuJoQ7Vb8RSC7VZVxWgScbojjtdcpCr76kwfZruZypixeKjug6"
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
