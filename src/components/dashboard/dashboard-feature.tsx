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
    "5b1Ef4tPMUSp8QzC6C8eNvxrEjJc9QM2tDvx7zGuxpbuJET8FGgGp1BYF3MRZYSEJQsZyAHASUW8teqL7ZWdcPC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSmqA4wsRYLwXnwKQ6gh66sc84xHCgn21tPkydqGvkGsWSQLr3ZB4NtK7PmAUp55EgMtgz1LGAgdS4zJvnhB1RR",
  "key1": "1sBcnVpGMbComuLzgAHFrNFbheP2eanrkX7k4ggpEq4ZpJhFVVpkPUVkjjB9PjGgrxi4JXmdMZqq9vAbcieC76m",
  "key2": "bcaf1Wmxk5ZLp3aa2iNwceqgdaCeKu7QDsqzmE9cpBy9R56miF3yJ5T3UgtuBKUG6Qk4RC74GVaG5SFeZ5cPJHC",
  "key3": "2KazJbfnHef1frMyffEzCWHhdy5voD1oQzY8FWG6nmG8PT9wYoVM7Fnh4dtMftLaWgjhcB8JJV1LuWQih5d4aCyo",
  "key4": "43isaAA3EGzJBMB2RJ86z7XWh7fUZ3M4cmZ7pfDrP1V2FjM3oS7H8c8oRFVsmipGCsGoFsggkw59NQrTPqx56E4i",
  "key5": "4oNujjomaMAHQPJK3VJsMAzgg3827TVKUFiEHBtwtEZR2NifcfkgA8gDKiW1NrZ3EfGS1skFaoRmiNpGiUpCoEW6",
  "key6": "FeC9vCqgzZh4uusNddxvmg3XAcuRnLRjDVFafMKELoeNvhH3ac6f2MsLHLLL3qyssDVEgTU1aUwn4R4FsanhBFN",
  "key7": "sjwvvBhPaZx6KsxznAkFkKkCrvQjoFFiM4bEwfNWjX4M7CvoigsnYhiaSGiY19xdueWMwkETQo8eBKjFBaEw8iR",
  "key8": "2KAYsS91ZPAmp7R7dpZLEupwob9eFYcsLV4bsmQwZsmmG2n3bRMH67ZG8rodoZbAxXkugq1C2Jfbzhk6evppPqP8",
  "key9": "5wY7Bdmuba31tLhdX28NomSMpwk1Znx2PyjYnnKjqNKBuo8Cj7whEv3fs8g3ptmZPYWh3jA9Z5gwSDabQGFfswjk",
  "key10": "4ftAzVBTuDbrjCdc1TaHWHkqxUK3JAf25VQrTbCbkU3zvN4wPAsbkc4cRAaaRvt3R2KjCvvU5rDNZ4Y3j23nKhb7",
  "key11": "iR8kPBasped7DsSExvCVntLGeGxu36UzA88QBBuLtdQEJJJcPH3X1rft7ZkBVc9nBYgreQMjcNpfrDSM7CKPJno",
  "key12": "5Njv1c9pm7RFTEWgdx79SxRDowrH6vLkqFdMFYHkCTEXD7dp1RCdqZtbrQm9szHPfqMfVCSBWxb4tP8EowcKTLGV",
  "key13": "61EsBixtxuNPTrRVBp2h1zeyUuHKsC1YwYqdJkFwzCfUP8wYqyQdPG9rRW3dQ2rqhZTQd3ipMHM5FkL3LW2B4RnF",
  "key14": "2YfjShemQNBsNFufmfXsuxMCKC4jHZyHqRUCPHJjxuj1e6BJ7Axk39uckLXhj6j5jVW9jf8xAGNgDLfoVS1LQAzh",
  "key15": "2z99LC9sEAySPiH4nPrJfxZFsK1qG7W1NkpXFmGrSuKcbq4Fmp4Js3GLaqnzad9vnompAgH5VbVsA1cjUwa1ZKNG",
  "key16": "5i5y3M6k6rg7j8p57kvTnHT2SjcCb3YNg9gH1urBcNFMoszPAen9ty9ooAAZsmFaciRruZpMWgbFxChjpJwKr7M6",
  "key17": "25bjtKkJFP6DZbGRK2kc5nhFMhboxHvkeG9w6ooFgvzTd6WeuugENsJGrZq5a6K5Wpn7Se9qXo78VaLsoeFVS2Np",
  "key18": "5zSwawLy5xmGWLYjSgnGDsZPP6jmZtmCrVf1P7JybQmi9imwX8ScnTHMr4i2MFDu3ZC6QMj5F9UAAPBgCAwFYr6Y",
  "key19": "3VY3DKXmqnmCv3VfVpuExYzCF7SnWUV4Q9hD83bRdx3BGyc4DCMv6FxoC67Ne5GkNK6bLYkyhjZs6Z2mSBFg8exX",
  "key20": "2pMD1p1kmo6WnPPE51npKk28B1VDcmhNK1HzWWFKiuELLKuiX6Qh8du2FaBWLXDWunrfdyfDPeup3dvZ4hsG1c6L",
  "key21": "29d9gxY6dkRJJDcVzhsvv3ngSJr8GeCxczpKekUFvxKjq2hcAWFgRoMzHK2TxzaEXmTxyULeTVFNNpRLbGQuVa5d",
  "key22": "3eobotW2vjq9Rtsz7qcB2RKRjw369y8xmbvi2awAqkWfS92xv9rT7NKDYmroy743MMa9E2FuJCdDxuuVTsWZ3pyL",
  "key23": "53T45TonYkmQioio6b1eXkpGAEztTuMszAw2EqYvrT3T9NoKY13N3WN9GUnnVdrY7wCsYJrJ7gQfvqmaZPEniAQT",
  "key24": "56UGSLZ9CQQgEZdVJcXfJNMWxLRd8bGkp8Q8UBhNLYeXFLJuNQTuqG8wNmF4dEjzF8hrAAqj85iNxVLzuH6rUjfW",
  "key25": "m4NdxDU7WXCrbRGVJ6BUq6mvECF86eS4b5gPVcPvA7YbQdKUvTPNLkHaVxXz5xETxYkEF3XKAfu2PuS62BuKuyV",
  "key26": "21SK5FWz8hV6VKspiRgntoDgecUxng8XYdpxNFUtVj6DMyh5SbHC1CvW16km87TzBco5aoCAqrHvhvhbTAsHGECB",
  "key27": "5nWH6TgntQKFhetzc3FTbg9QJx3XoowyVCWhMzJciHmhnXsQnLp9WArEP2cPtgL59vsqj8SUg8nbfnedvAG9BkyB",
  "key28": "3PVxQBWiYT6nRRMd1iusMaK2ZDxKAnpaTaP5TNr8VDyA4NPqvPkUjA2e5otaT6G57ytxSurewtiB1y7yrAxyi4GU",
  "key29": "4j2KJmH8sddbtBS4vUDac9pV74vRA2XLJZE7YG1dCwEUQiNeyJFMEBgJotbLqU4b9z6d2uz6jBHysTFBknsov94G",
  "key30": "3nUhWWB1TY93VGcMZrKRxgfGR4JrgREMjJuSnoSEzDKYxcs6HP1UCgt8HP7cDLiHjzNfSEYvTVE3ohxwiLhv1pG5",
  "key31": "29NJ5cZ6EqJPZXUEkF7NBmHVwbwADXkQxEqYnerEEd3BXc6N9WioWzQSkGVPtTnn2XjY5mJGVWhfwNCPPghCgbHQ",
  "key32": "2HnYUxyNczmFra7pB4gm7EHPqTeybujX2La9qmWRUhQoGKG9te4S981r6XAPfFrUKY8DUu8DBauE72UQPHEV2g4R",
  "key33": "44AgrZEhWUu1dZpJsCVraAVnKpDtkcGB88wAPJLHR4dFMzBcZ1QUfpA9sXnm27VXFkRcZBdkYhjKE4UH2DL4292j",
  "key34": "2Bh8qqnEVKpFXHFP5H8RFE7LUFgNkwK7T9PSAP16szxe5xrrPZsxRa2x1TACPazZ8SsJ9Nv2yvZCboyWFYHA7ucF",
  "key35": "2M7RBb67U1zn6yjrKoPyywGCFhiqiYFe7qsiVrxbeMdEGAvmsvphmxYLTKT82GFbzrJ6bb24Hbhim31fMeNnP8Px",
  "key36": "13Cv3wsZ4dvKy46Dw7nWpX3TPwyQDndPpP4xs7ncsm8nwhZhuQewgnQickmpd9mqxbrWZwgQHXXHXKrbvrc5d3X",
  "key37": "5MtLYBxftPSr4eVydYPWqDGgprw4iohftkqp92dUqtdW1ZLVTgwhKwvFamBj874UmJVnPkRUKYASpUgNhbwxKhRu",
  "key38": "tBdW8JkWAm4jVASrQK4o9oUTRVKHTJocgCppawoXn4AYpMwBasSkjdtB3qfGbz8yAXB49VqEsAdjmWHnLXLqrWy",
  "key39": "41LfbpJsNGhTACFF22RvEjm1fkUhADxavR7hPFjTxjarNDkRuGbSoSv7oxhgNg1UnhXzMsd9hf6xcSVT4HnAaGtG",
  "key40": "9y15Dm25zgm115GL3YP6ASJSqs8kwC2CaAFtV2WGqXqAL7rUSSkXQXVBxfdXV1QAFVayasA27jDViNiYNc4nbxe",
  "key41": "2Rmw8woTcWhpV8167gLGgEhgbXcCHH3ZfohxefJpAt7Ve9CcoAPkbZZdGQrMAS5mLSNLWrBC4wJwjf7TXYPyBeRs",
  "key42": "2mPq1QUUoot7359GVoatamKA1u2snXKBKNNBpKaTw1iBnPj3ugG5dgSA2KJfe1AyhLStzPWGRkRv62fmwZF3N6FD",
  "key43": "2DgcwjV9te3jQihh25a63cT2Wp3qtXRNsFjAPAZjt7nGkaxrCsvb86TXd6peKkwKxLGcDDcmcyurto4A26s8LFMj",
  "key44": "5HqZS7mowxKEUBdju2x48zqkfcqU8N471wdcZxfAJSWNLKtf4WDsZ5VenRGQaYmtKpbS4XCztKDduvcSTFjoadtc",
  "key45": "3bj9FEptHkVkMDdrXgpwn736pXgQgJprvia46DAEoiAv9ufqn9vGc5vJTgwvjQDzdJ6TmLjouCpE3JkVeyQ5zyQX",
  "key46": "2zxHLi72TEYn6qERXisewGoE9cw89bn6DC3pW2pHWr95fXZyxEe1ktRm4r3tHnvkkwBvogj5TUvz8jF7K8EvMA1D",
  "key47": "g9NqiETrxX2B3DJ3kFjoQJAKX9Q8tya3PjK7VHaQzVpKBcSUkhcW6Wp5uQan9EpF8PE1R26BHM6YEEQfX9WMTne"
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
