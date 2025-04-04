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
    "YQi8MLb3noZ8hs5zyu4Gavuzis1NweHd8pYGT1vteeX9EjqatPYbZJiT3a8GQkePJtmmS1xA4ydTGBJDWZfTvEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJUMwcwXBardAgrVrtpYTkDL1Xj1bYGkkPmvPdtXQrtFDMqiKWbmoxskKXSscC3MsEtmWBRvN7fBHKrnAWGkHcY",
  "key1": "4gbFNXS2dyuEh3g8vooyYFE96mqBB7P18KpeoEXTprcvnwnxyjFXP2s3hjWnLsTHEyFKPG2qZXbA7ChLE4U25FcH",
  "key2": "5v6LnUDK2nWkTYxzZGyhmfU8SynQq8hVuws3CGLCR4BWmEoxp3Re2ysd7fFwt9CCEmvDv9YkzZUTu26xqz2H2rus",
  "key3": "3L5pL9KhszhWRXSQBZfpM2GLKynh2bQ2kxxy1ZrC3oHgFFSFMdTKHwDQvxuVFcsFGL5VF1cTWkV8PTSt4ax1cU7z",
  "key4": "4uDZus6TELusdETRUU6bGM6GGKFeMw9rCFGEv8GULrLaZV7SMAaV4opjbey6d5d4hbrjchNQngXpREAZNAdTY8Dh",
  "key5": "FvfwvJynSHJmweAfFg5BAq45KMLVb69tbo8qMV8qC24M9B7HC3iK88jfeGMHxApjjtjxjhDsHZgZpKHWztDcQCq",
  "key6": "2Hgjrqn7EH1JmGmfVAUMeFLXW4BuJiAwM2gvTG7MrCQcbt7w754sM7hpwWjqdutq6bTRjRNHrPxKLq5j2VFutyb7",
  "key7": "rj96k6nGWQc5i4GaNP7nQKJQqCxqjqp5kkEYhyW93PM7d5vTtDmAQNPN2TV76bhKtwhwHTCRSons9KV6eXULimv",
  "key8": "5vE6rfEhW8yeEBJDugnsh3axeWn4x9v3sgK5K7U1BVHQRv7ATjnEVENbUyA98qYtMz93GMCCcrYR5kqkLz2H5WDA",
  "key9": "38CkVoGkeg7QVWRc8BRBZg14tYTbih3hKyACEDbAjGVj49hrxTgrvzJFYFtdqH9nJwB5CHBtv4ZVn6CjefajeFzQ",
  "key10": "5e8xDAjRjTEY7xd5ffiaD9hDGQkGhhsXLndXLVyqS7HGDqfK9SWdygVsUCxLZQyDeuhqWwSKQNtp4gVBQbALqA7k",
  "key11": "5a7UbTJKBFZirmcivdFfwnDrQZgtt4m5S97hrhZRZzTtvvtqARseur7DH5KfNh1BbFDGYGUqAddr9Y2EWo5xrNsn",
  "key12": "3rhA7SZ3YPRrPKNQG4YVDqbr4qcTrugGaXY4NorjU8woREmLcNGGyKueeJkQqiRJtuZxfnqjaRPm2V8KMo2Jc48f",
  "key13": "27VXWpQnjFz4YWf4EgTjNGGxcwxWc7Fe9ZFufV6wyt5HHpp76utsFzgSyYEsmW55jEcx4X6xy9jsqbDtVHS265Uz",
  "key14": "225V4rgUd5AZ7BYesQFesGXLJ8ZkwaWC5u4nuADBwMERsG7GcK6HNBjTcsbVJ24uRg1SAobCzNKUSoxrDwbneJzs",
  "key15": "3UHvL1qSQ2EhNJ6xk7ebUekQ5zNtVZnBoBuvkMPy9TmQ2VrJLH61BxuJhrQ7moQbPqJY5u1j4FPAETK8BSwx9542",
  "key16": "4JWdENQQer585qT2iNRaNzD9LqiaL2hFZuFWTbBmg4TKMEffrhMsJj9g8HAKXTjw3fyhC4bQgug6NemFXU7v3i73",
  "key17": "csQYGdrFXTT8MHS6TEWdR3PZrFb25dFCusbuWBGU9QgXcWCLTKEqhGAwJYwqBxohZcoeSqLTDfTghQuPZMpj2ex",
  "key18": "5953MWFButYyeLJBTmw8qdFvrggccs6oYK5BjjX8Qj4HLoyYFAPshuFVcJDSBxiAGifGh8v3S1ABfffHjXd4Y5CZ",
  "key19": "jBoTWvSzA8HFg5YnX26hREKimCTn2i62bbp9URqZfUtA5ghoPHJNE5J3zXTipShgYs17oCi1mXVSzWMZo23xcNa",
  "key20": "3RGQLDFfXSYoMXFb5hTcCohxvpZoMJfc46Yn9NDPGV5q1mFvzXKDgJ4eXfCkvqYaKs8ByURAemjjeZDc2BZRyzuc",
  "key21": "38AuNfP9zp5HsmQpoc3kDEA7mw3aJCtHx2aH77j3G8oZC1YUMpxWUwpF9E6oPJZvh7wW5ZYSB8iXzHQKNcu1GxGn",
  "key22": "stVyeCStvXAgbS7LCVUTHriuczQkaCFc29s48mYwu8oKEMaRYajb8eVdCfHbCRCtRfTSEj8S8YXgCdynjmkZQa6",
  "key23": "2N8KiaJ7jaqHv3KiSmM3Dx6xuwfgog27Sev6Nd2dCWP6rgL4Wx84BaabkqWQRuUkEaiUe7z4UgZEkf3ymh52T3Lz",
  "key24": "3n4G9QgdHUMndFyQ7wDwCZoGLeKVNmNYftX1VH4hPQQgVR11gMPxz9mWJkxpduwz92GjcNiw44ys327UdvmRoH36",
  "key25": "z67i9QvMAkxwWAUZ9tMUt6Aiq6m59joesAsWV7CMdUa2AXWNH84S4wyFnsjxSYvYaHnnQX4BCQEMpQsakaEPg2m",
  "key26": "64Es6jGp98W8pAJMr5CTHBu3bd2dk6VqCcPucoASzJYtWhR1NTkdZNp1qRTFgJX8VfFru59kfYftvJhMBa11UDrs",
  "key27": "3xLrWStwXCi3BDZidv2nnGEtHE8SqmEW6HN7JF74JVxbR4m8a2JkaxjGqDBUexKtWhfN95pUvaEVB13a29uia6b7",
  "key28": "5aj6pe2YThmfGDsHC4PbcPZ2XvSWJgATse6EnUVUh3hDTSp9UEABj5Vw5ZMfVMwig2kCobUaM6d2E2ZaYSX869Jg",
  "key29": "2EedRsj4pBaMcqGkMHCfCDbviGL1rpeWMQuh4zP3s1njfcq2NHYDQ4CFQv9wHoPpTNjygk2DP8m49hkTQVACmtJq",
  "key30": "58ASyJL2BqjWtPoBmnRqd2frFi4x2WPkwYCyprUJk3a7TXEMZzb71VHRU4kzdxRrxMtRyMNiTUMnpg5CZPTfg5V3",
  "key31": "2MfyoZmSNL7xYvY7NCnFHsbqD9ZgLi3SythKE53PxYvQXLLGznpecyZoqoQrQUBtDDWJLyfiPgqeb8cKubVbpZK9",
  "key32": "5LTMMgXpxgPHKJN449MKVAYHfpdxnE3dMFnad2wt9eoZkfRv83aZZHbjtgA1yATv5fwN8cmSwAr4TZUwoCuMF1ov",
  "key33": "2X4moRSE4sKmepw9M6P74yt5TVpfQZREcbfv6V1XwsWKZPZYDd1LRfYTThMwepQKR7oAys7ZX9o2rnvC4PABsUUX",
  "key34": "PZRaPqqzCDzSJ7b9WG1Rj2sgSJ4ye64x8PszNsvP6rvNgoPPKeuQWnMXvBXELRM5irbFVPr6yYavF19HvA4bTza",
  "key35": "4PMYjhSU7bnTNyUfcT9pBSpUfHqSkWJ31Kmh6q5vCmBJ5GGRqCbYeseEDJ9JjjehJ6Zr6DjuwmqJP1CT3s1TSaHG",
  "key36": "3XfvzADVrx42GC9E8PwPC1vFeMzVo38AHy3EoF5PqZqk9U69K6xwUe9grYg5GYXg3Jqx8vGoc5qWN7Cpj7uwCaXP"
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
