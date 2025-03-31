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
    "4idZkstH2sAb6sKH5AzBNPkz1oLcwj97vmJG4UNcPobe9MPYnFYvj3xy4mMDq3ycX6xY5WDQ4qZduC3qy5TNmsGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n5CML8fzF5Mass8f2UL2FqDnpfbQ3RHcAvJoCZZqHetky7tza1UVa6SADdy7JPPwY1TECnhkAWuxqZkm38BeW4b",
  "key1": "3dTDyAAU3yuYmEenXugthPsxbWfpSQTX8Goj13jrb73c6ct6ssEpLAruaCK4XQAne8SYyJuqupyyzAArdACnYcVg",
  "key2": "3Ju4zDyX7hCFJ5TjtA2JGzW1AHicjFQBQY3Ubc1Vv4dvQP658CcSy4vRo5my1RPJFM7BfiEYEgka5NG26XaqrfNt",
  "key3": "5FettJLNR3iDAbaoBCkJEaEoezpyG4bhjQYfHqWMUALToRCCtrqv63kAHvtyQgn58uJMGpAdPGHzc4MQA4ieQkgi",
  "key4": "4ZAvMHyFTNdcXVFbKy9A36erZvGHbm8AzW6vp9wYXFJdhhwLJfrMNWdpkRSJcBA1RbsiRVCYuPvD9AX1CC5d4okt",
  "key5": "4ro8Lv2LqHsYmuPu5rJgVzPKn58YT1jBoe47aEXd5YsmCvrP8ZoNtaGRVu5tWeSC4Ti7ckyiSYMnArRvBwwmwuM1",
  "key6": "5FdzXcqjt47WfTTQjhksEyDkY2AYZJtHYbdHJTADTUqgNR9rsKaGQ6BLLRGiaF3P9uPp2LsZctkbGS4VdANzpoGB",
  "key7": "KW851VJHp7meTS3oFJHiaXueiSwWVEKe4ek47oniRQ1QieRuHBEQuqiq7dBvxjkFntzjpjpaTLRYa7WAguLEJTB",
  "key8": "33W7wPMiFiXJRGD14uaqT1VjzQmLt81mcj7csyjF9hnnozkNmpMrYS24AA2Hx7nUU4K4pjq7RNtnJ7EG1mVSexwp",
  "key9": "5wvtFXGq3m93yEa3rKn79TaECYsT1nyshuzPRBdYUdb2FzBwaK4hdo9cpsxTkQ1njfdbdStg7b9sjwxCNwn6XEDB",
  "key10": "5FvmCph7GkhfkKQK7Zj2AfEXd9cCukE3YHkPQNdzmAM3teU43Cj3c3L7xehuyxQiBJA4J4MSdqHqryEcorQYB8rN",
  "key11": "EMfFhY7FjUx38tjXK19i8cidnXYEdLsjisXY6QVxiW5iVkB7sm4zJGVpESrag4zHAd2dbq86UcU9p2TGavAaRTG",
  "key12": "2FnrgHE8Kkbh1kiYKX8yg3uMyJb3SF7ZtTuxpvQYhaUx21Mud8GEWhbzavqBdWnQ56sXK6zjzCAQhBVuG1p42qwZ",
  "key13": "J9wNmbUDChPZpR8uEPhVCq2acWTPqitBARAeVXLSxLyY5dMV5uaiLSn8YqWzgi84ss1xwSZZNkQmU6AvpAZbWWa",
  "key14": "38zFS7Gg6iyum8AsVg2DKwMkBiYenqbcDdT6Wk6Nm1UMrcEpRBsxBVGntDDFvVYGWkRDgUgKQUYvKMrh8zdr3BAt",
  "key15": "2bfGhnzEzDhUqV5wLvxEvRh1PBM8mqZdLpW9Z7U8cjaVj8YyTVY3queYkPyoKX24HC9Kp9TEqjwP5jzTgWsbMHQu",
  "key16": "F1oVTNYeg5KLbx4gN86tmUtas5tVWVAV21GgicJ8sQGS379kWR2MWhRPRxWxpA19denbDKAvk33yPWA7e7fyf2r",
  "key17": "45UzymZneBdxLZhWVV4M6s7a3KYdibaWbSqncDDK2YexSQYArhEqGTRPEE828xJWrvPG9cmFEjyfEedLqFhQvJf5",
  "key18": "2a5U4ryRAomdYETJYKxzE5xFaGLkE54KFbWELKvSw5b7EWw8hH4E17onHc73abLh6xqFSuNmhAQaWHRVjxrY3KvY",
  "key19": "dC8xvaetswHK52vzw15gYn7j8PUftu86KnV9fLRyHVRQZZSFgzZ8hT13HCTtZ93uUqJQtLJEBm5g1pUTGYwfmwX",
  "key20": "5xCsaZuGhoTCqjDcqHzsES8t6L7HSt3diRBBSpnYfxRi9QVk4hmAEksSjJNEPC6wuucGU5pNG4TA7Dx9MWK9Ytvz",
  "key21": "4NYqPZpFPcGycman8BDLWHxSDwgduF1JGi3VYWRqRuYFjq6SiKT77BkTXgqsDFKLWWo9x5vBHSs3VanD5jkFV6RQ",
  "key22": "2yVscSaoJse6A6QixwaJXxPyC4XyM4McrRVmusC824SMYUnYEyhRCUdJsmvoxZEBGswzfozdKAkX56AEUFdtZR36",
  "key23": "3P3QRYiboVyweiX9RJGtQEQdcEM7odbCPvyRhy5ky8cvgXk4CL1GhoNcxEQ414mFZPrjcT6cYNKDiWgio98h1fV7",
  "key24": "5Td8s9Y9jXRtoJa8Uh68dVsByH78XdF2y1FNeeAsCsc18CzX53QjaEjkUFjAc9pL18kWcfqp5qJCzAJ2TcFzZjQ1",
  "key25": "2fLpqmirhzqNArRatPUqHEpTkVPgsvqUcUfoXrfjQb6kLX7Z3TCds2savHhovWwJ8FoPry1gMfuwi2GVNVwumwaP",
  "key26": "2eq5TXE1EQpst5wnBkykPVbXzGwx2kTirL6GHcHeisrP2C9PBjtQN6NdV78wn1MMz8G671QwcssLzj4s343ZTWQ4",
  "key27": "3pmZpaCPbJ2Moes4fW2PdhYjsYfAnNrrBw7AhJBE7N6SrfFdmEKGLwXguZzHLTg4pz1JhsqF2mYrKMLQZmKJsri5",
  "key28": "3aqanrr3vvZsfN6dLzjD7YKPksLEyb1skwxsgWHKaRekZ6cXGVqX1Rv4eqv6yZfLqCofjyrxXsKMgaRKMiZ4jmuz",
  "key29": "4jrLna5WCf2Qmk5dxbDc1AkVLJLV738dPo8hJioTHN5Db64G6JkNU3SLd1bo6dZmMXMzJ61pC1Z4CM7ogjT1er7k",
  "key30": "51wGrdwSbzbXDxvjyCeWFq2UpdTdQzmrsGdvE7phUvU9JwJojoqiqhT3VzCUqEoaZDHhoj7xg3wCCwT2aHXf2DRd",
  "key31": "3W2nEfsrQytdqGdV2UGR8uUgpTirH2QhXvNJwEPyKo4dpCSacApNxVpcXHYFaRetHLrf7oCUVowQhDyx7QCDks1f",
  "key32": "5X8i5bzCneCpg1EVdhKsxzCYMEg1QW5dozNjXoh5JffkE7P7rh7c6y8n8JtbC1DBabzcDowkxDYKYev6pX8d5gQe",
  "key33": "4QbYJ9jPpsK7fPX4METYG2Z9vmwP6WbxAdmJBYgHXKwAe1HndBFWBJK3bTfMVyGX78KHQkXhF3YoxxjFpKjctnrd",
  "key34": "Bvsasqt29xsVb14fUNwS24cdDNrpe2G8ZfKE7sSyNQvDTqf6pGWKEzCVcxZL6ZbppVLjxUbDnRiav52zoUtCpf1",
  "key35": "52NsbGUcy9FFvbrcQZHNEocB52Mpv2DEyEbUsSqptEjHKFCJAFGopjZ23BdhQAkPhNuG9ivzzp2V4XkDKmhumttr",
  "key36": "4ze92B8XeMjezvfYWNZqsdKLEd6QqYKNmFNq1mzEweKbHjgUgvMKXsn4Krgx8LiZFLW11hvXvwGPtL5EUAtSRB7j",
  "key37": "LGqcPSwk3p2T4jFpfTM9U3k2Lg97UZ3LjcLUSgF95n3sCScEinoethqSuoArb3yooGF5YWKcchhPyPZBHD44M4F",
  "key38": "EpAccZtgSVGJTQbN5yghTazk4YSecWRa64QmtY6oLsf9SGqiACKfWR8xuru2Q3FAeQFw62b3wFbZYJS8y1XEmo3",
  "key39": "3o6Du1masScZRS3QenYAQnDuTTb3SZdFgUHTxP6ZTFh21Cd4XXh5qL7TFMhCnBKHbXMHDEBCHxAZH6dqRsQM4nBY",
  "key40": "3LyGJ34xBJzKxzHr9Wi677oXNModQeAqBS5w8o6e4VAfPE8AZrPYZjGmnrnFuoykNTJQ6oN2i8oSjDeGgRY2r4L1",
  "key41": "5KtXPVzvoXc2cnZua5GnxNQ4mU5KiW3SiY1GgPY9nWhRUJUp6z56Tq5cADUrEpr57HkTjRG3CjcCCkCgcNycqK6t",
  "key42": "285ge5YcwqXKebZpQgvLmgmgd8ZZyJVovKXkD89AH4qfyuPqxJrFr4xmV1C5J7Q1TmPhaQSVZChjTnVrpDrdj2TT",
  "key43": "2e8YFHP25FxKkkefcZjhcNJQQuWGQ9ZXACWNpV2m4S3A3MmrhUVdN8pcxnaGj6tt2PZn8tL4WgkaPW5DiZnXx7Dm"
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
