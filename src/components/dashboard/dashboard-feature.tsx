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
    "3Zt9Bqc7hiQvbzdQBMEQzGtxMzbAiG65Z4CvUU8JmpM4N9D7XNnJ9hbjwvDJcsPhNa9WjFgAiuXmyso1gGipbAFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXbEGfBqco1JErzk3S4mcoV9E3k8qB56gg7yPnVyBnAvTto1R1RcunH5cqJLz4FmHbDSbAES173t8c9u91Newtt",
  "key1": "5hbCFKWLWgvKtExcoPFbUMYjXNHnHRoHJzVowyCJ9bCDwfNXPybJAD4pncQD3pFknAUWr4KRgbmcbimLZUgetjE9",
  "key2": "3zSFfNFm41wauVZLj8QgaVkdiY357M6ZAsnM9upCqEnVJgw8VBrewX7cNVLKtnK9CLer7XkZie9f1BGfyMPP5RnL",
  "key3": "4Wnsd7r3cXWCLauGtYub4Miu3kKJUjjucCVmJp3kF7fTJqYGKWpL9ijSnrkivX1vAwg1q7PZYwNCqbTRYhejEDsL",
  "key4": "65j1zWnQ6xfmkF37yRU9Xbeh8VQicyzHRtg11cU2emMdooRUaY6SBkTKHUrCVSR8tFhFYfZYn2VCRidL6xXbczBk",
  "key5": "2SDvWpLhQovqeTnLdQaVsecBrjZAKuTpbMabRVYkcSi74FRaF7u3XVodpDo9wHzix8QTcYxTfXjVpHivvMzj64PQ",
  "key6": "46LCU9zczsJ11VFGr8Tbj9xJwzfyAacBWgNvz3LiJLiBSs4cs3MZiy32ZiaEUN1XdnwtHMrVbCM6bY4GQrw6jTkF",
  "key7": "4wMUHq3UApoZQHVTrckPSdbQrrkwtU3jyihf4RGc6UwhE8WphvCrEonUYDfZX9xz1A6Ldu4tms9qjjPzU4cGverr",
  "key8": "63ZBJANmkhc5qbdvkNB2YY6vtiqfBMV6CCobXWoeRztJedGYtBNwZzDYJ8JhNwTFYDLW75HaucqWiUTP2yunG3c3",
  "key9": "67npvpdqRpZRJxw1tbEm2zFkreF4X9YGtRXKdYcEke3yZMmSuj3kY5mkufbVKuHdjZrhjrNE9awfoRbtwM4cZjbc",
  "key10": "3PWexN1RZpdu7egL6AyhyRAeYrER4ChPFNGj6vbDawNAtFs6NAEdB5mmQo96wGdN2kzi5UibWYkRFmzqvxCcPrDs",
  "key11": "BorRg9o1wb3pQmDRd7p91gf6dCGrMUaSdKnnXcNoyrBsKAJYqu2abeuMYMMd1RMqkpLBfsrViMJF6Pzk7HE9VAB",
  "key12": "5bEKp4t6fvC7xCuEQqrgVkVtFzZUJJgpcsHW9yn6X6qJ1CeYvHv4Ty2yJcvK3zdYmTzRwiNPdQVL5e9aiB99Bdhd",
  "key13": "128dH5PWY93Y1aYQkBwy8ABMtvjPDUf2DcZbTU2s1gCRkVGn6vtnSBR9PGEaGnuxRbmTx3xW9DxViid9nPhxGYsf",
  "key14": "5MCQae8zA3EgZqXZQ2muXS81GgeTic2rL5AddkPTb51y5YytKTbqP5k7P318b18hWSVrrtNkKcqCJiZWx9UFLBGV",
  "key15": "Qy64C6BdAgaLtcndjfSi9DwRWUqZzsh3mE6JKvSkEcRJJie65L1RZBwKt94J3yf3B5BF9tH3mCNYC7ojjsdiwMc",
  "key16": "37wdYjsiU1ZBf1T7sv3d6RxtpCxpLXGEdt1VLcWhD55wWfTki3sdS5nDXm2ujhS8i5qMurP9RGSdJoSXYFSWDTqA",
  "key17": "xijKe6fxvexwr2r9T3V28ANTZgH6aQUQCLYHzgLKVsxGMBN2vgkv2g32XaDCXrStpvUsnqed4mBbzv47Cwh5sZA",
  "key18": "4y9gnaVU5ssMmupf2ER25WYfQJJMecQ3eSEVYB9Bu7yNr8349FBoduxecqDZ5ya6kxa14TTNMTaoA39G6r8jjcaK",
  "key19": "xjjqmpRMwJu3FNEUKSST52t2gMUngP8WyDcGJVRCy9uF4QmJZsLbCmcNU9VJukgZf2GHqDo7wYhMDyi9ZvRDRca",
  "key20": "4tTczesUybB6Rz4oZAyh6Y6g7fH3iSJdVEAp5xWcXAZqvUH3Z2AB3TmoecjNVG4W19jiYdiLTE5KQMTg12iFY2mN",
  "key21": "3NZTJVV7RzjqCJg55pmc9Vn2xk75pW9pj2BXUjrPrzTS4dvDnP5NEPEMC3PYhBCxBw1TjobiFWpeQdxT4TUGXRD",
  "key22": "bR95wuV24TU35xxWcyeA123oL5QitLdpBP2B4BYcJ5GmNmqKZFTUsoS25y4gxCKYE2sx51B7QAg9rwa1dC8y1v2",
  "key23": "2cReXBwUVNTJtqAUSucf7Rs13oNW4XnYu6UMrMsVkRSu5gwtwfwpQPxa2xta1GmDV95jMH2YxjSab6NT3zxurjRA",
  "key24": "5nXPLVP59tgY18WPS3tvCSbb4iZ4MLkJJmTjLKj3fMJNQuWacjJravN45AA7R8biQSWiQP6MfgUMhpkSFeBizpYK",
  "key25": "5jUPPbpooBAhWJw73dkdd2ATQw2kDcwvuDSFvy59JSVMyVjqWkJnMpNZr5N3V8nCMsEQACn7bzU1LrUU6Yr7eh28",
  "key26": "2M5dzqb5eM7Pp4Lp6vCx3cjraEQiXxcrkC3oJ4HbLHzvEXTeBfJXxL7jbW2M3JKKrn6e45tdF25YwvtNE7NkmUcx",
  "key27": "4yzDDuNqfRJVVpSgVdyy8iwTMi6JTdTfKQ5c6bQ7EakU8EDpEpja5KFvRoaphoJab2sEjbrSQsKSqXnJpsUrPoAp",
  "key28": "5eQzWo47kAiUcE7SFonwPRSEJnbDfq7ZS4gpwSZYmSUMXaz3zFVnnFh5XzxeEZLsQasbXEyfep9vmgbdX6y3oBEx",
  "key29": "25y2SHdtfuojYmcNkP8ELKW126oA7weEPPzd8fApsbRSzgKJAzBGQ8Sb18EKxkZxMjGuDV5E4EU82KDSUDcqxvMR",
  "key30": "3pEENA5iCav1QYNfpkb2aB9sJFkyQCdSHsamFJRHT36FnAqtnsGbMVYCyaUF3B32WWCdmMKqDuyw1ZHVAQviwRNy",
  "key31": "4VhXQqf9jkY4tkW4zriygbYQ54j6LVQ4Bp9mmu4qE5nBXUbZxdT5ruq2pePo7W2H1u2RXYoCaZtwGbz3oh8gsZ9Z",
  "key32": "3fJQh5AJGnLoe8eoRY2fWgGouTGeLkZScAmEy79fTXiBREXgHrWgkgX7opyMxcMmgFfcyAVC1Sb4nsZuimRGprA2",
  "key33": "2v9c7hj2NSwvTajgfPHw7bwgm6WrsUNur2Qs7F8cR5dHoRGGvQSoofbm2nAsqM9nU2u6CTYvdP5HUHN3P24HV3Ya",
  "key34": "3gbuLWCriw3GRRcxSzeESDFQWKzSSHdxCWqdxC5Kho3YG5b1ewfqKcLfHfeqZzn8XgvAAnhPLjeHptNjMu7azkRf",
  "key35": "2oshT5V8TMpMSBAYgzqYc268QC3Ff6ggdNN8BXKavaeaGe6fRYokgh4JTg29xABad46PK53BjCZF4jw5QBHCd9qJ",
  "key36": "26R65UKgahY3KTcRADyLek7XHqmBJwyga8Mj8q1koEV3s1YKRWZo3LvbpB7YwrbNuVtbpW41Habvxz7BLwJjAYMT",
  "key37": "4sjivoT9oLmmnG1PokpTqK12a6eS21hs59YLU11qmFJE3S3DDnwQ1rE6RpfCaETHmfFzV7SnDvXTjvEQ7UuF3pUP",
  "key38": "2tSyj7dk6nFJauomLoUTzKQTsxqWqsXo39ffukMTZvrgEMmdGFomoK3G4cQNU8fshuLvZ9HoRG4VSGjjpc9KFHNW",
  "key39": "3sebpzTYyM4Jb9zLR4CGESK1j91VN9bhhriXgzudqLdB6t2b43YaeVAWJRRcxwwmG3rU9CwftUoRqv8Y55WTbYad",
  "key40": "36ztfnt7uk9kC7MwdmY1Ciibqum9PHz6XqZ1uxP2z5EBLth8Y9ih1cXbqf6Sx351ATLJc4kdFtDPcgbqfNtQumgL",
  "key41": "4ncyfD88wGhWRu6DK3kXsj9CexwdjbYgDm3aZH1eDdCAZHWzyZwnRruoCgiC9HDkeLCCmWR64be7Jx9csdJBNQGX",
  "key42": "PdsycyTaDGMtBhCAZfxytDusFePXWRQSpTkG9GvUfrR7umYSD96Dr61b7nyiBWMCBXoggRyMQXHrn31TDzjD5sM",
  "key43": "3gAQaHMSGgvJUetiBoAjZjGwrauasQMREBZB1D2rdoeNx3rtzHVr4f85hMXKDiyXPe9E7YYLZRNjGsj1a7dAqJfL",
  "key44": "5nePfFKYjFbdVkpwR9sNqRBFEex1CbZMkEZBC8bZkJ5UE1YtWGex3F9FALA2rGUBobHjYppHZyyRgYmTJsph8J54",
  "key45": "2xvzBUFLDVHaDxE2dv3PiLRHz2Ut9qLVxsUYpAT8tmsVjaE1Y8h4snqxh5F3mwrY72CM1iQAziXQfwMACNXkCq8f"
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
