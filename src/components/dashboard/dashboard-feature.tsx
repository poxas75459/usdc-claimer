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
    "FJ5F6ZV68LtyjkCHLpw8qEfwG5SNfxGEbCkdqYxTv57Kg9xKVhHPsNzqwpWqRCB6XJxvwcodr4HDEujBbh1yhU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfoDnpqEZ8sKD1EJWgiqKmyud4sE1c7cdibmUHfMwjdAnvHPnPeeJUktw6WbfG3LVV3FnD6DZH56UczUx2CJEhW",
  "key1": "5LkFhTqryNNcMfEGccdJzeM6FhmjqL48d3PWs5xpszBW35nE9TE78hVnPYZTfLbEZBEvi7AMXnRf5VJAyGC7niZR",
  "key2": "kD7VQ2YSM9VhpEKsfnQz45nBz4cjosxCsy5RuY6SRviak2ZxbsSYRWqaH8B2wwtshTZTWNRxWbir83sedif15b2",
  "key3": "4sGE98EaQkvB6AanzakYLyo25BbHTUkYZuVNie5FpBhkutVpgjVi1JMKBx4ZjkomzijxJPHL9jeyWZBqdcquPrwe",
  "key4": "2XHXkoQPrkEZwfhf7Wsd2EFgGrs57qyRNTqogsyHxX2FbCgNdjpf7zYYhwNf5FMKGWtBAh7iQtFbtHRNCd5Ccp19",
  "key5": "4zW7gj8f4FMf6VjmqHPpzPzkV2BHNorNiJG2qcgLx9fUoBuVtrT7RSWJiMqUg4gfbbF5xHaugauQNdXwkm9ze393",
  "key6": "3XNAWetyxvkyRC4eHgL2MbFy1gRtjazTRgkQMAxwaDSpnEiFbf75QU3zn76L1ZXxm4i867gHHn8XdGGymLXejcvi",
  "key7": "2e9trPFYDdiZxCfkQMRX1HNqgBJQ5zvjhsBbH9Xz1raY8cfkPtRrXgnSGtDiJBYutQwEoFP7azfXH2h21Tsh2MUq",
  "key8": "56bivjH1vckWNM2GD8o7DFhDomRRXXNzBpX2NZB8iKmFRArSrJwVE4MgZVsmCVrEYzomtZ7L2jY96fniDmpNeaUe",
  "key9": "bdpp3z4waKaymc81qs6YJtfVdBnHDeFL2bDWhXiiBPe6BufxtYsqzGtB6VEYRuCm5oESTa8zTQrVDPxiQXhfbC9",
  "key10": "3aRqNuhuGsWe9Ebk7mFs87jQeWEZxQ4ejSFsZm8nuFVzsAAbj1MtvwZQBFmpwSd6PNp8Rkp1FTokYZUTuZ42zKkb",
  "key11": "3vdStZzm3WGv4kbTaSTwi4Aj7Nx8wisrtzY3v5BBMXuNdUexcjh8mkpPSvWnWuHxVAqPJhiL8Kb5peSLNyMb2bMR",
  "key12": "4uf7FzniuK4DEMBs7eWSwKV6jkessf5fovgVanHtm9Fhysy1HunJYX1kgD2dL6nxuJ4YfJ1QzTcedRvseuHBqdeo",
  "key13": "2fX7vbf6czufVDYHZiSxJ5r6eGMMvwEkKX9TWmS2F9AsNaPKg6bruktt8E8udqPTEXu7EnqutcmzMnXNy2gt9uT1",
  "key14": "3ncxVkRo6ME12we1pcD78E8kTAZmGDX8W1rffS7kiCe5hkmMxLtfrno6e9Z4uRy7ZdkTqgQkQMNPAPi2WPPjbMsE",
  "key15": "4x4KoakeTiR22MKTEGthxEFvNFjbjCKj5nktz1YUQ53gznS65unDMuAXAWdBwmAtacuo68DyZHf9H1E9aPVmBHer",
  "key16": "5thGkNWPijK87aNV3eL4XrBcEWvQxCEjWghuBgWdEtH6QNBrMpaco59J6PdCSF171JiDnAC6Z51Jq3pAF9NU6rHk",
  "key17": "3Ldx7USW6jdmu5LkKzZRmbTsfb9CGgCJCQVF1WbQ1FpGKLijLbQwD6VGBC9xrDiPj3Yhd9nRfr8ii4GKntWVyMv9",
  "key18": "4EtoHq9FJX5tfJ2fhvPszTkm8NUKGx8G9yPgSAiQERhRZStS4gXkAdMR3dApRgZXtcjvxZYPbpBFUd3SyHCH3TN7",
  "key19": "3SMDHcYsTs29uCsHdPhQiNvLbh4oxJS6yerSDmx99NxyEduFqQsokb7NxDnuzdCH5jjnnVFtWHqbyPZVmC4rjfdd",
  "key20": "fNcdcnz99UxWp8dkSGhbRR51ACaePKR4X7EKY3jVjLHaZMKaXZaQr3RH1AnVdQUQjP88osBB6b9zCCeBmQnM5M4",
  "key21": "4iP5LDR8MBJhxBpTqfiGckx2V94dSQW3nVSLrR3vEzBXNrfoE4e5ptzr6X8Knk7ubeRNoZFBzUEuWktBf5ZP6NEP",
  "key22": "2XEzz8zogjDdtgLnftMpb7p3VZkKMLj9o3kjqFe2T6M8QTTHPHgaLtJ4gB3Q7pobQbjk28S3bVmpqMpsEWyuSYym",
  "key23": "3KG3pKsRdJ2TTKe1DAQ9DFJbCSDqsQrouaDUoAEQ2Jhz8HKPZws9Q8nKS1fiTYULYytXZsz7r4mAffC2qcGCNaZD",
  "key24": "2yppLbXAN5u87Jui2vr74WWMUYRX99t9owDpeqDsKKaiA8kGVgnpRQ8JSQoNZdYeK2nwBc2rSKGjWq28y3QLmK2w",
  "key25": "3TN3NxXLix1F2mbh1TSycSVJ8M4QUKXqxQh1gmCRmQZr1mt1DTL3fGdx8KLpBUWVwxx4xHYeEoWn3a9S5i65Qbfy",
  "key26": "5vSZ9Xjr9vtzJWB9ZPrJ3LyfEs1j2aTAeka53jBDXHXYK96sK4kVZCdAx1AR8ynGyZsvo5BvyTZv8A3qmRa1NRKf",
  "key27": "615W2U2nwxNiJpBerftXYZYzEonyRfKcmMVyWSrdeSAeVkRV7YjpKPoLBiNX1VgR2UUR2UFPkqJDaTHAoPSceBjQ",
  "key28": "4TRqNzck9rF7pbpyLamqLBSkkSJnEXDnYKv4tKYPvbtegf34YDJpG9KV3Vemo8KaeGzgkoiV4TUERFEgdam1R5ij",
  "key29": "5SKig47MRxwai3zgj1wpx2kiXqpgJk9qGfFYtcvXE55G5pne3jtEapbcnWto9bjXT2vnLgd1hKUexcvwAnbRGsK3",
  "key30": "5axgYkPuEhva7vukSJiG66EreVD7YgJHacaHUcYMEPqXqWtdznguQyPJ8FRkikgi4KA8aEXrjPf9ii5ijXqvWptX",
  "key31": "2P883gwTLdBnDRk5qwytNBq56APBSzFbmcXhgcKw9nCMfessYBrZhXLcZkSBVWiytxo538wfHknvMDRzdxp7b72x",
  "key32": "2ab3on3iueGdP4BJNCoH1fddreJPKwbETdpdNB59c5yCoakvdkV2qetwGq3ju4msxTyhMmhB8GnummJ5XYmgbRqw",
  "key33": "24e2WsXXHQUC1UYpij3KuTQtG73PjiThQDo4GPmcHnYUYoS6CbRj3ntuoqUReAoAbYpUML3E9EGfSDoeaZ9uyWeX",
  "key34": "5YksCQRmM3KQhwPwtsPMnfsXwgSjqmALyKg6vvDF64Gfs39QJJkTLws11nTES5J1mLP26Y3w4bbvQVSgh7kWXAec",
  "key35": "2kXY15G4Vd7bh3YuFXqaxKoVzvCBP6366Y4aRnQNBdJauEgibnW7EsW5HETcVGqJiYQVeDdvedjtQnr2CgZVowYY",
  "key36": "5q7tDYLaeoAGBJCzTsq8vKaPA6czX9ScH3YH2jrNv6vg7bCkBFyCiZungxtEFQmXPFfbFNNp1bXey6Zbgnh5MhY8",
  "key37": "Bf6BwMVeQ92BDtEHLHeZbp2VC9xGMYg2BFFNA28idtW62MADoECXMLbbQM23sbH1aAP1MiU1UQRFFk6BuRmTqhN",
  "key38": "ZjzZtZepPsmT6YK8Suaii6o8C8NABR6y9SS1QSf3wfeMvzwHa2GdyuC148sznHV3FnxUtKVn6W1Xu5iJMZKEbJN",
  "key39": "5gQv7qunjduG5sHGPp85sdScFL8pSDTvVBrZZEPgj7j1iG3gyg7m6kwjxNpg8gaWkBP2KtGBiostM1CHY18RrNXu",
  "key40": "DDwZj7BbTpzo36Qd4yFi1oRVMRgWGnS6hB3nYjX1SvbKFxMBxFBsDympjvMMmG3izKoyzzMTnXJuzbhqGprX8CE",
  "key41": "3s6uPhLdUY9JZ379FWWW3m9RzFzaU33NNwZNY5ENyfZZkPRFTjLoheLiSzhYNmQg6qG8F81MFBazf6FQ8yQ6jBfU",
  "key42": "4ARmj94Ko7vuhkAMJKG9mn2FZCUQ3LSJhRAvNpMDyGo8rsKZMoBu8u1ZoseCJSExc8huf2V5Sv7eoAQb8X6kJPKi",
  "key43": "5kiEf3WisAWq3ZxF1WENmV5rRUJjbQEXeMWmRYeYGiocg4KXSSMfQbmKSEaSETsYoX7Z8tw4Q4ZqtBseiGAaTVbQ",
  "key44": "ch88rNFkgeEuqWpcg9npyDZQPb6opXCYkQXykqHjkgmoBKrvLXGPwg7Dd49i47fjpc5j1AyJ1ye3PSeBfhfAEeu",
  "key45": "4ZMZq8NLtLZ1zz7bF748gbSiMLh1UybZVrEmUdkyT3zWkhxLjGbZtwjLYDYbY6wpWDTaGkdsWVCi7KKYAzUa3efR",
  "key46": "visgcLXdCQKyWkxSm81WvYPM2gXQe8nxPqymQwZcsnCnHFvSUd78i5umt85LNffCSM3FkoAmCBgAiWZmDKccine"
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
