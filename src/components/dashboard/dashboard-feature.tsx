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
    "mjrZDbB8hQWDBpBAed1fxVWJyzyTs4DQnWzbNXieM1hTWaxn4NpnXeSuncu1rBuLpu9uL19REAuwLAXpjNQBmcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MGJDzY6S9R2wQaNA73c8pMX59md3eA52ekEmM6ZKjB8Qe2FbRHFMV1bsKTp6wgL8W1ZyjuYhqH9vHPbgghnLRF",
  "key1": "ronmfDjLTupmQ3E8tCjVNyVcHWWcuHMDdbD8eEHuoNsTn8jXNhBPwELrj6PDndVc1a9Qf2fE6StyqFUA4Sq4Qzq",
  "key2": "3pG79kofAhCABs6PrhWp4qtCXi1EKRFH7a6Z8RQ4fFPscF3Nt6Uo5hcZTBp2nGsKjEsyvZvsknQFiqtG4JRpYksT",
  "key3": "2ig4A63Z74Ce6fTtTYm1PrKn9HkK9VuisuNu22rJmHTxuNCZVBSTWUbFC4dr4X4yT6J9oFb8nJmCciqPPirNKjbP",
  "key4": "5ryaguLtHg7aNR2fjLeUcxoszuYFN9CVr8kXvv7gwJjHsgmSxwLjgpBMUhnEMKuA5S7KE6WfAypbdxqTp61qyvZz",
  "key5": "5odEzjh25Fmk1ZYnHKQBvFaggpnMmZH7CnWoiMMMYysrqGxLEQnziJMNu1HMovRfMBUAWAQd4Kc9naQU6tZ2NeLr",
  "key6": "2MFQsP29vNZxUtCzNAR2qQpzJfbprzEeTdJPwmy2jXkdyWMoYeTD3ggZsCeAVbtoBnrpomgcjnqzKZwRjWsb3Vwr",
  "key7": "bkct6tQU5diKS2aTo6h651CQvNYuRpX8UR376VbpswHSRvVAvEAvvZNuyCHqw8Z7eveVbyBunvZXjjvV6rSiVgc",
  "key8": "3Xsp4ZBnkHAXyrSff82uYRF6vP4a3L2tdmgWnFXuSXECBTM5dx7wU8no6t9RtwwPoNTCEJVMn3HsVV3j7bTutZyi",
  "key9": "qVhwg2MQMU5DAwWchGD2Pq49nCKksN7pv9kko2xyLeaHMWEuj7LcPhSdrkwQHX9Lndr2b3o2xp6cVm7QiqS1YvJ",
  "key10": "4KuNsZBnhWYY9YvZieT4inHKtuf251LHeN3NzxVHBeVGW2WCfsVEsoMQHuvCBfhTBUPtFs16fA2iAZYERiJH2YAM",
  "key11": "2oNrUChqZ6c1vC4Df3Jkx5ZWVFxQuoNiZBH7kJ5DcWLRVAVve24CLnm2bEEN22ouHQnPqrSQvHvtvgcoS1V7RPeZ",
  "key12": "5yiXHkHHiQ5vEyAEUB6BSaXNEGHCz64bKcvmRjWjWEiX9P8jUy9LEeKsfkpHCeXv9crp47Ubv9YPWutaNydnpvNi",
  "key13": "5UHyZdp2jwLZx7BjctKPNMCi4aBgGN2MmMd4EiXMH8gAfyE1UBXG6hR3CD4kXUX3muEVm49cMtUJndnAsqPtXC6A",
  "key14": "4JAVFDz5C4UW5an6X2kidx3utvy7W2SBxikwcWPz857kCCHchM72ShjQcVgXRJgZHDEZSSZJCAs4EZaQ28zYNDAp",
  "key15": "4hJzeP3McbdH7LuNykZAhuuqyroqbr13ykpMc1mPvw4EjqrqP3y8sGku7zBt9P56jGBHkMJzvyC2oBx47xFzeTof",
  "key16": "jEvHqKPEoTJy5b4ggCeQFrSM2NLZGQzfakabFhwuSEDQUUni4YXDMkpQTwfGoMRGVvGw8PU4GGnqTs1VopK1gCK",
  "key17": "e6jV37jbVjiZqpeaNBvFwgrzywMHjHgGkY5Vtq3zN9SRvHmC4v3oEHuZnfUUGvwJJTDwgc3sP9sevWF8EvPpcgZ",
  "key18": "5pmskVuCS64sPz9GoggfZzxtfGhvQx3yFDFG991wHhMf7f9XhqvcXgPP4HEyGDYaekhNqS2UEuPHtM8hqNQZyPNZ",
  "key19": "3R2Gz93ebfzbhZuHuChQRQiixWx5TMpz8fgJZFiT5wGYwgdoh54uT8vnszJzqW2P7ac4x224QCMtK6MsA7mLWeGX",
  "key20": "4T757GsyMqZDb5FoEn26gTT7Jy31bCmBCoqWKFkM8Zwqxxm8EigEUAd4gKhzUXCsUMSE4TTJCYtFUmBcU5Lk7aei",
  "key21": "2zDYfCu6KgA3brjeMnYJuvBDWXCG6f7fRX53oSvUQPxwEzUhHyN9UjyNrt49nfLhTLLc2dheJyYqZKaEzuo79jeU",
  "key22": "1DHXHxKAVWJmLDtyWizwGNAymdgZLuzy5EmPntuQQmztFczhV4GHc84hqKo7AaBVd3kxooPTLKmS35NxQSfRqJ8",
  "key23": "2mdEWW4Qm4x3WPms5VAhHJJuqGbAbY7PjuoX4UPYTcbBFByHoJ1ayLtVCtYDKn6aUPbjN1csbrMe5itPoQCRPh2e",
  "key24": "2QPaDxhESWMQCMd1QdmwEczVoATEukDimkyFCAmZpMDXDUydHaARZn1aibqGh7kFJT6HNEBcNpkgVKVCTwLjomua",
  "key25": "3GMSVCu9MxZvBVUoce2zM3roCkDxFYP139dLfb8vBqqM4BQq2QZ8NVVwdLWiP5jvFPeC62px6D2eCtTfSc32Rrh3",
  "key26": "3NcTnCrLHTE68qQ3gsBPpTiufbeKHUEKMRAcgyUBANFcyzJDZRCs4D5ECueC64dwxWr3HU6U2RXiF6CpT4nRAGHq",
  "key27": "2mh5EMVsMFtj2nD3ZU5XezBuTVQXXMBiYX14zoKeReYzSmdekNNNNwr47xgT1p2fYgGPBSbn6yc6M7G9UfSKE8Qz",
  "key28": "4fxsDNoBBnT4PmY9RnRGHuG7L9dc4G1uABfMSivef6QM36WXwSHYe2qKXrtBab8tqFGzgfNHEkigzmqT6gLyhYkP",
  "key29": "324mi7xbmyMXL237H6fRjVVw7uXcKYvDjhtpX1irjJsVydfVaas7882TYVyeATMjCi78Q3W5UpqkUX4b5BxkE8Pa",
  "key30": "4eRWigUiuDFJ9XGmfGdjRnaCSgtyezwyzuPA1yGtTrrDsrhtHuDfY2E71ufqa5jKP5pspHcyqgwjQt8HVwXTngqe",
  "key31": "2fhd2njVTZ2CP5iHiAe48eCo7bwrnfpFRZuw7Arhnz5Tai1cTBsC3T7ywQequ7ruvdmWaj7j3VgwgJGM6XPQ4yQe",
  "key32": "2bnAd7mmbj7o6YV63L13rdKQn9R6BTgHpKu66f4qhY1AxyFWQDUXGynGqYwxeRpmr2mp6G4UCp7TEBAA8kNDK4dP",
  "key33": "3drvBTuKDp9fe9y7P1aVPrRdhrerBJp1CvZAv4YVWEKJPNKZwojUEfijMT4yJHxqKJLRc9Pc4ESpVFpiEGD9PXAJ",
  "key34": "4JNkpaS5gzPzhMkx73QhwKJQoeQ9saFSDf287ogEzGmmc5NrvsoybaEibN5c6hzSUHJM19uUJYwSzY2E7YHs6Tub",
  "key35": "Z5V8eX19H5j7mkv9qCWb5azejynmxMfJVJTSAFAJjGx48zwGGWnGxF7RP2WF6MC1i43ptcHTHe8PqKBzoN16Yyg",
  "key36": "2tc1DoqHMGDpG8PvebK73AdK8HQw7JRReUkvemtR6tCBZkJSzzoVA8GLaPjANaWAjcSnCprV65PxyeyFGRdHknNX",
  "key37": "3jeXR5PQh7HqKSnZSPTEQzKAyFPp8AZtBCNKuHwQZPK61BybArU1PbrACX4UgQybDrhZhpy6KBn7EryVBSQkUeT4",
  "key38": "2VWhq1nmh64WZBWUpFaRGMQcNskg3HafGyQNJ4Znh723zEPxSehiGfHVcXFD2SQjC8tD5HjTucvvnXn4KcTMpXBY",
  "key39": "1ZpzJBnmEF6zGWLqMZb3GUHJCaBNDvvt4rQHbRSW9uQrmj3Jafb3uwFW4AeaMaRzZhz94sFFdvBh5j1hRnZNDvs",
  "key40": "4t1eVYWh8py6ySXFxbzp8nFBYHJL6ZAUD5Y9h3ifevvGcvis9guEyVkBHPWvbANYXCrH9fuPdxYRD8eJtmjkjPMK",
  "key41": "2FNpRYzREBT43zrcosWEzaCwDgMu3y6JpBwz9AdrigF8CVtP19AZBTRkdjWT6yd8yo2DAqQ4hJMYzqgNATBNwbRo",
  "key42": "5YMxquZfDXKKaR2WeimPStXYSuCUYaZDzqaqCrRRLKDabYFdAiv4G1TA7eMrWLVuenBj2p2anMm3jGyGgyG2YFdX",
  "key43": "3BhRVxNXFg2ef7bTpV7k7t64frUjLkuTBvP5vj6V8wHZuPdPEPuLhmCEvicwHewgiHLoQYBANYx2NtT6RQPg2Yb4",
  "key44": "3Bmj1zffE1WWm45nE2NpQxDknSx6PYSLV2fU9prwmLtGV6XW3mzvBeHCit4JEKTmdTZnUHMzmsdA8P6yJSyJPXb8",
  "key45": "3a9rNHNik1PBgDsTFWMA8FhKVWAUuXUjHEGP3TaUvtuoPvejgRZD5kYBQjmghoagGYDuxSiy4cFHAwLEhbjZotcz",
  "key46": "gDr7fACgGwa9nkAxKCuxiUpCZD4ESAyJ7DbCn6NpBm4sbx1rL3UfmCReBtpHaWvcmJnjxX9GkgybdPAdCbkJmtk"
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
