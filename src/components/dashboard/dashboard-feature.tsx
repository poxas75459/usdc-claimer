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
    "MyhwVYforJbYQoJZrkewrHsfCUV2Q8P2tpvjWtgNsFCk4grb8i1nbhVV9YQ2XxmJGM1z3pJuAEbrPdSKyvV8tQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wC5XQR2oF1TspRABMkJVsJ96nd5Dy1LK7Q2WfyrHUMposEmkAqGqKimX1s7GC9FDd1DgiwyUVmzGMTY2bPHVQ2",
  "key1": "2jkS9VogUbZAaubCPPs3VtHJoeiXPa1SnZURHApRRCPMNY5aREj4u1xfMQp34pFfocJFLUXGzXxiv4ko34AEF76E",
  "key2": "2SaRNe7BGLVxS73t3K8SNVoEYBYY1ji7xFMwhKd89bS2znUpRnRFTPcuS1DZKtJGWWBTYVpLxGSnSyaLg5F2MJGL",
  "key3": "2eAydY9zP8LifVy1zYzN6DhCNp9NhaJxhahWrM22DWBYkT5e3fCicdzsYJdi6JTL9NQ2kv1Uv5rohSGThQEMLck5",
  "key4": "3XbSif78RbKA497hC6fUA4YeBVeZzQFUcW525CdQCZwyEahXgrHJCp4NgQKjhSdLnAiB3KnXzenwc7FQ38b8ZA9U",
  "key5": "ii7tG7avxqXTMMfXmRKqnAraZMvtvmpSkYA46iSRP6tZcJNYkBs164xht3VqckwTxCqqahRci4xmdccN3VczZZ8",
  "key6": "4bn3Rqp3pvU2sU2iNVYYva3RYsErQrXJZHV6ZCNPHMGQUAeFtGEXig2NcsKQtd4qPoGs5JN7e5tTtWvAMm2fTrBr",
  "key7": "NgGB1LZ2bFzNsLpX9cq8Pk7LxMrEUkaxHz6nH8tteBJn96R6zXQF5C1cFdyeqAT32Rbo89gkPf4QjsS2X558eoW",
  "key8": "3omAsVfkfMTMAAjFoA1y9awzR2FdqEEafjaJEaDiTMEY4aADxyfzNWBU9x5sXUvjoNWTyuL9wDeEtpDe39Q4RVEk",
  "key9": "5VQrc7u82a2qkSVgGNDpJQNJdFM1ZhBDkvZSjCEeJaWTc6HepP4cB4R9VivGpycQoTM5cC3YVDZdd7WUoC3oEJCh",
  "key10": "4CjWm5reKxAbULyJ84aKoyVvydVybPcDTnGm6vyaYsZqu7e8sj3T4eogMgnuN8B3JYhpKjSAbnqHwS6vRszxAhMH",
  "key11": "beAWBQ2tYSAJBUwNeoGiz1VsTQBFVUDa9cN5rV6es8EiSmwYp98Jnw9fbf32h7tNg6HLoYzc6j3yr6rY2mTg46Q",
  "key12": "gi6sKDju7NGiz47hkkuY6hytgS1pQg3LRBPKN1BayBZRqRMbZXkQrjnE7fuRXsDjjbXqkr4sR4MYx3LfK7RbbFb",
  "key13": "444m6cYtw62Vcpjc5KEUDBztSbAgrAtsbi2iFkTfn8rwUfU6HVNTErLMuVznFCMTSy39eYGPbXRmQBC5ENRiuQ8H",
  "key14": "4XsBgLuvysniWv1iMmu1qLXePL1xhiMY98mz7d2eQXUyh7aUn1N59XHMxufCrqGoWg3swS51Ud6PbaFUCVGUa3Aq",
  "key15": "5UciKSG4DckRzx9q967AtNCYqnkFbaXSowkWXQ2HjNtmiLYx58WohTS9eVgZj4kyv8rtj3RxGxHC4ubWGaNJTKpM",
  "key16": "5sFyeJSKTpa8JjaBecVG3uQwkR6gdxnxx5nLpT7eHrHT8Tm4iY9B8rZG4834HcWGAGcNkaNF9RzD6EtJXYqgygLp",
  "key17": "5XnTcwiKi5W4WeBy1pjKmACusqbfCv5Ja5Qeys5qrxmYUpboMGgF5SyyLW6PiCfvtktcEf3YRzywqArv7jJBiitL",
  "key18": "5qJp5T9C4nW4eJ6Fy2oaAAzy5JMVHzQ6S9VjmXVnaSuAUZjm1aLMYRR1kagqy2duEyAPSB46RBZpPr1oteEvvB4q",
  "key19": "3KvhNLY1zejH6KV9R3gwykEndmYJqz6kQ8EHagLjQF6BpFfPxYcvSc9z8XL9xyFr7Ra95E3HUyNg3EtmyChxjG3J",
  "key20": "3pB683LWaJ7vXVE5cNBDJ9EgbYHfN3h2GHA1spHjrTafZ1WQhG7ajupiDjdqtFtkr2FeKU8uoPLpjv4EmznAZWiV",
  "key21": "4BsUQm2ToAN81vjX2QaiSo6t3NdRTXRHFt3C7G8LsCQEtHXzueLqhhd1FjAqW7FCwM3ewUjQvNPHxSDKAoDWVCSe",
  "key22": "5e3spTf8CJe3ijBvmpbDQKWt7nWMptiZcrHh6SXnchvmQVdbaQoV3ePDBxLYRxSezT3R8dzRZgjPrAbmFJM4Xh5q",
  "key23": "4AE63uQwvvprerpDDQcKYaugJkUuJjj7rFYhVLSp63Pg8JU2dd9saRGCvXbBZ38waMLu6xytFiPUsYDdESCKeMzk",
  "key24": "3JjQEwhsTcVrVto6GNprXYsnAZteDumm4hJQmhRmPBcxxCkqmPspJ153ihtyUH1XUsSpMMKPAtN69XLXLMycehFy",
  "key25": "265mjK3B4KeLuhaK4xAAecLtSRymTCuBQY7zPV7o6vXbwi1SdUVi1ykE9kNFbtTaKh9aL9pG7P6N5RjJibTBXEnV",
  "key26": "3ogDtCVQJ2Vsj8f5frBkaG5uKYFGXqQS5p2N3htYm9nesbrG1dNyH449JdbfuemWH8cXsCXNptH8xDPGBzD8XG3E",
  "key27": "5guT4JvkpAyRe7y2YhpWCJX7SGJ6h6uy2fBdjLCbLKfNsuge5xscwT9Sd47P1qnDq57oh33BbUd9kz5UyYpFm6TQ",
  "key28": "8pbPADRi8BDxw1x9c3N5Bgp7D6FzsKn4b7ru6AT4G8JAMz1UrN1SfAqmhTot4NZDr82PsQrdH9g2j17ivXvEa6Q",
  "key29": "4n7d9CGP6EsaX3smognd5qncP34AjyDe4J2dSNx9eeU8ZsE5pydx2s5NviieRGZMoryy71LP3BHGAzZD1JYpKAak",
  "key30": "5PoUHZN3jLgKjLX5nT7LX7pRQCrqgDqBgqmybXvFRenb7v8mRtF5A7HPndSJeUXf3AQeA5314dCBtbDYWEcGQb2x",
  "key31": "r6LCqfAkJgCfw7Jd1CH9tdWDRKYcbztGyNxSLeckL27cUXn5xdgy4K8iaWyrqW12k6kHWiYzjtVgkcYM4GzbHJG",
  "key32": "j8nS77cZK3oR64stGcvEXCx7eBx9Hn4gKFBQzCtNUN86WNWRXv5ebCHzjdDrENsmX3j19dKY5ypxy99UDCedn83",
  "key33": "4M5BdKkYCYdZkz9qTBUcVjW2oTJcXpQ5jKrcfHVGDMS5uHgqd5Vjup9RJg7tBzHtqFWvCqunw63vb1Z9gG2Zq2qQ",
  "key34": "4CUBK1n3G1TvHYbPs1o3brGGK9soUSTbxwJke1vL8pZbgy3ofViz7oQZZXe1XixEHHdF9LNH3EsmJ1z4UkeV2Gas",
  "key35": "3N3jzQRX3hCE1Zf5jw3xvHJyWEDE4Ru2oPurwgGMqxLc1HLdtRcdn2fEXrib11r4QHYbRAsq6vmGbtqpQ6fZpx1H",
  "key36": "FLCxoKog92Sb6mEn4knCPNCQQaGuHou7G9oiCyoedj4d56GxftfzJkoyJ4w4GY2veJuFSJe4FkT41UJ4pugMqyG",
  "key37": "2aMfWYTEf86gXFiryPtRRVVzYtGtUqaYzFrqrYuE3q4LYNfrDvmXp5B2Noi7or3jmCdX9NwTbdBsgrZzW9GmDXgy",
  "key38": "YBBwZunwtn6xzPofUxzDmdZWUy4wVx2bcuijAGGsiGwZF98caSpRqwvxKnQs46T9jsYUoJMHwhwgcCsNHKHtdbn",
  "key39": "53SioZLSvJyidJvjHihNYwHEQY4WUAyNsprLTi5eEsdUT2myLRH2gJ5pDKh3i68J6j81m1G42scgGHGg7iMYCAuT",
  "key40": "4ZnRvqEQ4dpmKZLmSU5Xow9bPG8XXYV1spdEZ8MHTL7qS37F6H5kZMmk9nhYikxEcm3LGQuceSmFLarZVeqx8HSb",
  "key41": "4ivUwWdHjjWrs2NmYnpGRHT6yYSTcmw3mhKAgZX2zLSpWKRxeRmhvC5VMvTMVWfrw4yaeCdDMJWZjRjBuFtsyqi5",
  "key42": "3bP1Ko81rfPVbMPDpnn93jjUU7FonCvW5vJptJc4wzkfjzv96a4turTzn68QPD5JB6TkadW2FDuFGN1AW447n9qb",
  "key43": "32bk1efvKgyvbhzemR4Qh1A3gKSmDWHvUXX4LjXaMBLibVhRpweDkZecMsFPVogDgyPhqBwjDbxrQtAjT1BCixgr",
  "key44": "mvRW9KSV662insKcZKmwaxcLQEpPR8AsLLoEQYnCdP6gpRtJ4SckDUJCjXrwvn1DFTQvAWY1WZTxuwpsKe6GNuh",
  "key45": "PePyNidk3EwRe8ih4VfvXVrPGWwrdqNXKmMbXSnbnAWexYUHd9cCpKXoRYsyzAsquuhJCVjjvn4VQKq1ZwU9tPi",
  "key46": "4rNzwfEdFVxJuzXJ3X4d4AV3TmSg6tog7xb5PnV8AzaFG9fSaNJGtF156xbyjtCg6ymQVLbFVxyRybPZjvjveHGW"
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
