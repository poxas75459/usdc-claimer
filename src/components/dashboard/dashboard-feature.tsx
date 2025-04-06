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
    "4kKgG5boXhkD5Q2iJs2aeZEHorxdfunZchazopB5EZjsYZben6tyAW1ELKJ3Anvm81STQko347bFq54NhXGHDwoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4gwTFwsxBrpfUnzVWj6nDZnazT7kNKtoVLpJLKVGdfdWfgUq84wyhyCva4U8xdRErS3URWgvxLqZ4b4adpMWX4",
  "key1": "7CwAYkb1vQi3PhaPHqZPskWpMUqyZjPdTcY3w3RM7da23PdGHQfK7uB7B5U9iQroteuVCXYpoe4fpKnpt7pBtaw",
  "key2": "3bQ1hLbK5tm8GdTovMtCmz8wTtp62u3P27QSg9o7V2m2Rh1hnHocJPnh1sWa5Njy5nsa6UyxsHgjf2UriSxBdtaM",
  "key3": "3Fq7bFSxNcGZmC648HRyze66omQ2FMnMheMerfLBTjzUaoYQNUcQd6W2ek4n14SaJTwq7dzYj7AkZYZahnCuE2Js",
  "key4": "st5t5yGjboGtS3yebpz7aTWYXwzz1cqKRxmgA5rXm5qYgDY37bQhhTYUJee2WLRXCWvKRSo3niWvXvLSge45Adh",
  "key5": "3BAfDj8eh1kk3Aiv6YZx5j3mR2k947nVQJefWVHGVCqzcPU7ax55tQy1eMRLUJiGag8AbRqSjMpb5C1c23ZdXtMQ",
  "key6": "5CK4JsAw1HG4xQa4gD7E3RXBLdDWTjHpithhHGxADQ1VD9EfhfL8LrxYvCKdrPuDoUzvVbjDbt4KsUAT8WbYZM6T",
  "key7": "5cEPYk8ifcChW3QmAmG91f9kepVv1JL3EmgECvZUa98aiVCXnNbWPmCxr6yRaMizCbtFDfqhYMefXGLSZNW6BzSb",
  "key8": "5KdUggG1SUhePcoL8JbVVCxexXfqRXaGVRBKfpBksrUiQLqAWhyJcj26nADYr23G4cjwuYiBKYAmhxfy87h4bpQE",
  "key9": "3hVSqbdrUDj57KfqB43mC4z1eizDz2FmwWCt9acC59MpYQwbGU9YpVHpPnoLu3RCCpfDGJbpQb3BWPcJNza4ASw2",
  "key10": "2fzUgpnJHCwwY3paJsLnEwtppjWAfi8YqNQimBA3VdeYsaFNJQKj58XvuZru3dEXHLg68B6DmjuBZMkbNwpGfN4q",
  "key11": "5Hn4dpgDfX1k79HxDCnmxRKfhfj5SEzNJpAKjsSp9KumdL3m8SWU8Drz24R7H6fwTbnVqHZkisEJKTdnMwcewdV4",
  "key12": "NBZYV63ascHWJdBWXRFUhEKK4NZJb2Apjz1AgKzNuckq7cUdnRiRHDgVGVwwCjK7MZBqXSba62t21CvNSMU3JHQ",
  "key13": "3MtKKrJk2hTppjZnbHyZT4uz4KJMaU9xiHmai6MvMDkdjFGeGJXQigS9FDSAx7YKjrNyttXatBJ2XFeg5vwjQ9ep",
  "key14": "28wWhkADKs9EGTdRK6jDgpB52yr6evU6Rz3YWzSDo2SjkdmziVD6VJUxLjGfUikYGZ5zHbHQmkYsx2PGM5QKe8fW",
  "key15": "d7WfJKkLcfyeJq8NjLttjpJNk64VJCcHH8SJDZDJ6g7KjBQFP9uYbr9TYMacuzXHgZwVN8cojAGaMMLzSAs4MWT",
  "key16": "3jPMikd7hdPGR2SVJn6cuPK39hdTM1axC4b78LXnNkB4YpwzLa9FfWqMxz8mpV8SkxGMPqy3EugEqRSD6eJL32D7",
  "key17": "2Ps3U13EkVuWiLNX7KzbvGbLmSsoHxMQfZy5XtTBDGo1WrGYujKPCqeWNGtaBVrSS2Xb5TjdwWwNySVRvowVg762",
  "key18": "2L96R4p4XU4tNEuXEcUzXAeVJD2XE2KQsBYnWPSHSZewH6ekEnRNywYUxb7K5cPQmQ4zvbzfF1nD18jaq34kypD6",
  "key19": "3BCPVs4uETjABdjQ5aYwLbbPhXxVPLV4f3w1oQiP3ccE6rP6kxoxs656fQ2czbM4jSzbXFMyTaZQc27Duj4VpZZX",
  "key20": "UmNtqYv5W4P4wT8zVdarkihu9n6zfQL6CCT4gsTH6U4VYZrxZcF5A9isV2Msu1TvX8zc93iQBxhJoXp1fWeiYUK",
  "key21": "346H6NixtHmkeQxbcgv6hiBMG7ChpGsY88mbhzPcroHofNWZt9EDoaiQ2wnqhAPoDDZbCgo4Tzcri8oKi5pqe2vw",
  "key22": "3NoDH7YtooejxfutfVL1xcDt7CuUYgkEwxVTe1Q5XUKdoYVMEL8eVrCfJxxGPyzCvuga3NCLoYYLqHDkHs3M9nLg",
  "key23": "4ZvJKPNgq2KzFNU3g8K5a4h3EUVr9mFNYX1hUsTXfS98mMEzSSsSmT5asMGARBQXxMzyH45yMt6RLDfe77xtgnSa",
  "key24": "4X5F4DvqMGvG2sdSy7koJzqugDy5WG5CNbfbAsvrQBK5ce8sQXEGoWthfF5AT7JEfBJmez5GSUigfAjVrhexxb9x",
  "key25": "3ADEVsHguFjpKBsHNtdSK3gdVxdLWNiZhTdaUArLJqwVfaaE5nwYkcEnxdaKmXpkGxKGvrpNZ2dovSUkS7njo9FG",
  "key26": "21tAYzYYGHMJyv7n7E8BaUoHVWdoJgV2bYWjMEcSLHxbYKzVfWqnC3DFNvPJXGy5cn7SJu5FXzdi4EpfTL24mk9W",
  "key27": "mezTVgmmeec99Bcq9rVc5Ph1vfWjLuCCegHPQ9qdureCQVRSh5G98zmzZ2fmK2nrwqUt4eUnXhvWxxXDBe797WK",
  "key28": "47zcBFDyr44Cxn3H5U6tdVLYzb474RbCeGiXQTbUieqcTjALCNPZu2sGTEBaEm39K4gyYZKZCygSQGPySVBDrBjr",
  "key29": "4EyeEEDzeNXqg64N9FZ4YpcAhh7oNK4MnfToRBtsP2YEbAHfrXpMnoHscZCv4ctBqDg7whKyBvAiDQibVyoxsrXB",
  "key30": "8Fq6RGL1pWrujfYefKiwAb5uHkChQx81b6sRhcLn1BaDLm1AELLfjpza1uJ6A2pT1Gi1SLC6v8GY74ycWiQEF6H",
  "key31": "3fx4HSNzVndZ7wtGpXeBDkNeX57J3jx7DHM7TYF6iscWBPpqWQn9Qk5GjKtNb6fowy5FfWSqeWLsUFkzGUwgdhR6",
  "key32": "4kQ8RppfwVykbEQnBkpg96URS33Bcwpzz1mKXSoUiJWmkAzWNFnv3E1mS78rCu429EQitp4Jy5C9GPaLRf7sgi69",
  "key33": "3wgua5rvMcwU1wjWLQMw7T5R3tYVbQxQZyBooZeC3jht9H2QegHurv9dmppGnBvBBekxXwnGLHrEVCY5iepxf4E7",
  "key34": "PGr7uk9pbP1fLFe2mgLzjgwKghygmSu4N56uQ3pQ6RVp1ediyzvTG9mnh4yxxufg7J6vqwTxLjSVqaQLqnYYQCA",
  "key35": "4m1CVQipof6aPrPPDySGGSLfw21T14kEhtFYrUZEs1Sw7SC1ihyTzgjD3RMtYyfffXTxe98PGjBGZCqgBZVqVvH2",
  "key36": "5qXmMwqFqMeFniBG4hEsqkCAxfudWxpiRkWzw97M9UfFmgTuRPNBZifxZzRSmEq2sztramDNTYNRJD3SJUzPYJtB",
  "key37": "wUHvr78bHChYmfks6khpbU1uAxo6sD7U3GoCzpEs4ForkKNEKHeyWeVQBwZxnUJgoRQXQNbx8Dw3RV6mG28g6Ku",
  "key38": "3WvujZqoHhKpmu3dLgjVZqoZEU4SrPaUT2bwXwZsbcQLd7RCuQCTMeGH88zPHyyDkdtWMAeJQ6iJTuPnzAqQ5ftp",
  "key39": "ga7J2upXBpsx1urXfmaQC1x1SbeniugXscpmwtFaLpqh6VxfnMwCvqA8hnoyTmqiQF4GfXoxBjr473yuoXkvJVr",
  "key40": "bxCpmfnnNVrk1t9ddLicEgGcpHBKMyTGj9YzEh1ULgpKiNHUrknmXmwcjngS54kVihUJiJGuzzpHXimzqLP6C2e",
  "key41": "2So8AbNiWrGnmRLxKNCNFzepzUx82WoNw9bsvWR7fRDRZ6SKYVzRiUmBihC1GhQgKUXfvNBWqi1G1Pgc7CP5X1dh"
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
