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
    "4k88Jmk1a3FnwVnWhJ7NiczsBQVwBS8nhw8gUKSG44TBXczUJW24mP1t23zpgbfPjhM2qrm2cionr3eQUkGHzZji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23q69NmTEeGWFcoT4i2br1f8fgSPtjsfoHBLDAaTckMefLiytmuY4hoHJLgn3k4ZnkEnLSxZZheL6igXxxH6X65W",
  "key1": "3xjUhSF5JzB6U2DMPKDmWj7FLthxi4raxdzpHWDACa3JHTervxHFp6QiEwciG7aKrPRmkTHC7PV1KCfVm1xmFWos",
  "key2": "3aY5ESNHFu1wxrG6QinAEcvX7M18C6qc4iSxZWJM6vLrmNLcPzRjKi81vqsdfZSiKw4A73Lz45U6E4zSXttN1wm9",
  "key3": "3BM5LT6BnqAgU2PHsmZBWUHAsBQcDQD9sHVYzfvPjWeQa8B61xbeL7BpMM8eQdufMXcoK8vd5AmFDSAcc4kb4QRc",
  "key4": "2ZcmU3gFfFK3G2gBEXiHyaFDu1LmuECUesAK8gBmEUis1gYAo9e6vZSjphSSXQ8fnpDsZ2tHpQ2224FJbk4yQg8S",
  "key5": "ew3pqTsBn8nQpbV8PZ4wgMnodA3mEu3spz7aasfoTybbW2ZtTpFj5ELUpMimHdg6DXvoDvXtiQFR5keeE4AaF25",
  "key6": "j8LiphbViPgKC8P3ZP9fBU7HiTQpRXAAtDsRUTZwNxTpvDQaQNYnivLvNqFGNV3weTBFsNLMur1hKJD9SGoqrWZ",
  "key7": "5dWTzxGk2JD5h6w4Q8mbiVfusAqyHD2WK6D35u8YvZ6cZtgTM6REy52cbv4tFDbTtucc2UjfCUAZDnH8kPXzJUAk",
  "key8": "45iQkLQBu5hZqL5n52JAQKpjkDWfrayLrk4QMZzx8A8HkqjFNY4qVuDrmvVDP4ZBEUatRqrLjygsBworZ7tJPPfQ",
  "key9": "2JMrxyT3mbViXhPxs6nSif91MB46UkygdduLdhXotXJBcqrbv9TQq8TPZCetxoPJmkyHT5LwrwxDHjSYWLifzG7D",
  "key10": "3x5r8HYXYaHX5uh1hfRCcH8yhm6tiCNCXCDHw9EZ2ERAv3Rs7jY18GvhH5DwiCXhCTMT6r3hyCvoSvhudnjJuYG3",
  "key11": "3r8yXuG6RKSNJnTQzS5xWp5BkikoC6fnqy6p2f7k6GWygakjhBhitVp8TAzrSiPvGrykpxxp2VABmPvFuQ7H5GX3",
  "key12": "2r2SRaeP3rH8Ww66f2PYRqse1DFMUe9KVujbbWVt6LogdCrzoodjsaX7qTuS6pyxdFKcGseaFvNp1QkFdoGBHZvj",
  "key13": "3DXyCF5z6GU4zKKenNPL5LroGFheX393jm6rowZ8dwVoEFKCjQsVdpphgsHyBPdZxrZEefLKYCpJeoVUrspsYRwz",
  "key14": "29jRWiFZixCqWiLndidRfjrdY6hkKXjacxLSgycZoy9W7eS9bTNngpw7CiZn6FcdkULMWGWJDQHmMW1j4vcAFMYu",
  "key15": "3ENh9HjzvMW5MoCAdK3CoKjYT6qPbhMNny72yEoaHbRGCYGZwKm8grH2cPSxu6icJ25GM4QJXumB3zPc25k5Y288",
  "key16": "2b2NphKziSkNEqicmRyMR6gqFudYQGwEjMvQsmw8rNpaBubFWF5x48pSuePYCg3KnaekkUXfUFHm6Wtr9kHx9NSf",
  "key17": "5Aftp7hABgJKQp6cijmjNmyfnbCHHCV71DKQypq56Bfm1YHPxAeTaHbVEPbkgRvTwvF1UGpYfoADCcPjDxbG9wna",
  "key18": "5fMYFA348Ww18GpgTewpKzu2NjJ8ukBD4bBTbV2AgqmPAb6VXg6MkRcAEuChNLAMRaYaAxciCCjA5Y2Gsvcw8Kpn",
  "key19": "3FqG3mDiCo4BqjiYs6fzZB6ytVWzBNmpHTMm8EaNJQs3GvHGaBWVHc2TtXVt8TRjqyyAgMuPK66AQKPwQgF4tT6w",
  "key20": "52yCZfuiwJg36uHtbqeyF6pmcqNHhHgYrfNbcJV5ukywpzayEZ9c8toupGU32M8uJLBpverDKD9bLTkd3cEhME9H",
  "key21": "3Wvww3fzXegiCGNEaPtkF1X9nEN5pYVkXGksh1h4SZCN88w9krPjKtA1ucyfWzy5HaWUiBwFD2cTiVCZYHGjfEM",
  "key22": "qZn9ekR3QsHMpzFqaGeXvLkueuskLzuEmNhSrFH9Fb4hBzN1QPqAS8J8nagGRUEDJ2CkkBEXgwfb4YcGovqkxfq",
  "key23": "4NrRh1gjW3EyJ6YB4V4BxrBgk7DPsoCpQqQKjfuNo5EMT5t8KpqRWztLnSebRTXFB7mWoxYBrvzE2sfA87Z1VjCF",
  "key24": "5WBf9EtaFg82Z3714H45GKr3EqqvXmGmNptuFoPNSqs1jPokGxJYTFz5raogehCy5YDjn4zfAPbhrkqtMWDDjG9V",
  "key25": "49YEXzE65eySm6mddKBxDxhvWufdEfDccC9FRTjGmFTQtSEK8RVuUj4x1f21gkUzfDigGg5uNsJDbYGZd7kY49mj",
  "key26": "2JDV1CwvbQXMHQjFK4jdKEfPXeo46VSMip7rKt5LNsNtUu1g2erHbRnNKeS5YKc5ota25Sf1XyYkdDZh8XfYiKyQ",
  "key27": "3CTGurb8ZzHgEjg9RwqWfXFDMMqkFdSwjHhEtbCLMEAG5Hv4dmoqJaDajWVxUK89DDu8MpZ2mMMxqtk8EcgY2omt",
  "key28": "5zCsSmR3hVYoEqKs5QqgZrLG8wruVbysXSJmztnXpv7qKQWNevn5Rf5KaYNKh2MvY4UPgz4rqXgsGy2UCtYmR6xx",
  "key29": "5WRbG3WdgHqLeTmx5N1mXwBfEr7BSKZ1GayvKG3b1ienxqg9mNNxy37zsVDqZEpUYXCGj7phU21tk1RmQECYk149",
  "key30": "54D2ueCbsK9TR9LA2M6bofBxW38weHno4gA6Pm3DjtYS58zgLonqYBk1tqbnxqz5BRH1xkAAS2fAU82JNqi8kLz8",
  "key31": "ujdMetLyXeCmEFeUmBuTH3jLdNeouhG49garritzVrDXbTrN4BaQorkXXkGiU2anTaur2Bezq2mvisrqA7Pd2z4",
  "key32": "31JQFJMUTSqsUXrHQqSUgp3Tkr5iszpSHLtQJWVtcs5SnPE4LWUDAJJL8WYVArVBfU7dWqMGLN3Yfk2HRKok4iY",
  "key33": "2NvN8NndDSqHJRztFmyeWtALudhL5hDHAHMEpW1mcdhFetiS3mM4oP4fEXtyaK9NctsLRHsPZTY9LxB8wWuXsP56",
  "key34": "5ba1kfazYyFfCVBKJsjCycCigZbRcmAxL98xaJrrwuJu39EQnXYBb9vJG5zG6a3P8EHZHkCX9asU7yEXm7qabc1U",
  "key35": "5ZNyDBV58QzSkGk6YCwX9b1VDvsZ8wxn1xZDCv6VCeyWpbiMDxR6WxtPfaNLz1wBesxJC8DbirXbNDRf8a46AE2b",
  "key36": "2SFjXXVanm2yGP4TSLknnZw6PwUbD2mGUfQCJcKaVSLY8G6dqEdBFoKuqCWqgFkKEtYhuEc4RWDBV1Gobpka4miM",
  "key37": "5xbJ8pDpzXAfvBZHgHP2ALnybuttq55As1rf5gQMWjzEcjvjsRZXCpPWCHggcHc7fEhJfDouk7gX7yrcAGuAa4yB",
  "key38": "RdPsDumdj3HTmKkdcS3LVHmjzpLB1tniSPFJmcmHcL6FCmmvXKUTEKsLcyjzGLJG4GdA4JYZtUA2sMnJ3MH19FX",
  "key39": "HqNongUVvPRbdwd2hYbycshqkBNE3w8L1gX5QJNHzFiHVqFQfoeTQLuJAsy3dGivaZL1bVgAzErJCFwqzQiLqvN",
  "key40": "rXHENfxaaPYApCUCtByhbJWz5xFquQUp8aseEMV8nr6RQfFQ1vYzrU3NGWUir9F5SvDUaUMeoXXXMYCtgERjSvx",
  "key41": "3QjZCKLyL4aKPSw5hfm4CHyVQKXHvwR2TjCx8XUrS1pXGsCXu9vZDKU1WjjQvjixBVtxfUaFPV2ScfPHn12HdEvi",
  "key42": "SBYAMoUDFFGMmy7wUxF8f2nEWviPYXw8i22F5eCKP585SvHoCKpZTqX3TR8B5ftvtoJTSf63dVDeaGqBGYP6ioU",
  "key43": "5zsYTQPJi5NhCmvbTK2nkQeWsQfEkU29pzvgzsff54FYfu7WD1MfpQKXwGPB85FfGBLBj69KXJ4BxU8noXv4PuCe",
  "key44": "3GPW7btzNApjj7knQRDUXm5LQ94qHKShb3Xfy1tcesLP3L2QBQBy93nERUi6VvyHDkv9JC5vBsJrLXewu6LARRDV",
  "key45": "2xu5zezRXQUf9ghHRXG5hGRih3hunouPFSTmCiWYYu6HNzBhHv9awGJGPAzGHJt7T4zbfiAeJRNeB4MBo8EWaUhG",
  "key46": "5ExbK7o4tKGDXKqRi9CTyYCuPxNdmaQP6ALrQaLVtXv43drSL6U9LYTT3eKVrhPZ1UMtxrKNTNy4XQfAWBinyCEp"
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
