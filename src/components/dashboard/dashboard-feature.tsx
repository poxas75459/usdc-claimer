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
    "5WiDpSUFunHgkP5jYEBVoJ7SC61SFotLDc9vspTmkorG3rpV4yrEpeb7GggL4PgDZ8np7B4EC3pWnmZUVkCxuL5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rkZzVmwddngz1DUJPZsbaJ1yQYpHtCKfv1psGcXgyDePdfd5pkhfjCmfwqXPFuMcDqLmUPNksSKY9jsZJy653dq",
  "key1": "4WE128waqhvs6Y9k93kxhefDFfKsqVt3oSR8icBG93daQBgAY38oPWdXfQUAUzaXrphua2anBrim6NGNqqZcTjMq",
  "key2": "4WTohNc1QrpN9uBcycbEGCPyFmjcMgE5UCcfyBXgv6ummhqbt8srFDPSm66EQdkR1dkYxf3331k83ZimyCpjMkzC",
  "key3": "5wCa6XkPTVn43Pq8deY8N4Wuy33fhQvpsZHC9A9xkSDNCCkDt8xL6EMmk7srMZRZLdY7RaipyUyKaEQbni6axya2",
  "key4": "4AZzPFyFxJCUn5cT6Aeph9TdeExg1hKEZhaXRcCtodA1uemXarpHP68hpNoPHXZU4ghBuKW4zBY43pzXdqrGpkTL",
  "key5": "4koQ7SJ9MxH5ydZNgiCNJKNUSCLskbepyH1W3ozYD4SckfoqSCQfhkbFPMEMr6XxncLEdCrw3GptyZxMc3RaUyPq",
  "key6": "535pv4nqz2hunis6GxVTtYsiBLHD2Eqvg7LijU8W5qGbKzXEBimbhLTxAwo3CqLsRhQn2H4agJfK5tfeodfURYTj",
  "key7": "49jfmAVzR9PxGCAcFCQjunffy89mrHPaxv7vacWBqa4cMdQsa6dZfQGXSteBmVMQP8dC63KtbwwFweAp8UgaGyvx",
  "key8": "127qnoMihepoWSgaaLsJ1jKr7W49btHTEFLjkQXSF7sEkJkX7c3KygN3oYC3SZQxhynFvfkSZ9F9D71wvprMy5sa",
  "key9": "4jGdgUHBXov2c6FN8xLtgUkHRuESFmCXzQCMFRX5XCZUDZYUroC8mXRitHMH2jDZpd9pSa5HSHPkFaHGQpSx7UeZ",
  "key10": "xPmNGdY54KcM6ZqXs1dD9eaZVgNf4dGAjU9bZuYGYfNzrS52LyLi3K8nPjB1D6zbQw6XzyUqGX1MDgMGAm2gWuc",
  "key11": "f7neBUTATha9h2ii4ZKJ1NSMg54JFciTyy7pJkmBEprKedrwmH3tRmnuyDEwGFcBxqzZbxzWaQDaBk6SCBthkkY",
  "key12": "2pMWuSHDTHoD7PwnSeopL9qfRmwvJLayCAwDPMLq8eGBSNC8kKb93YZ5B9Eh2Sk9uX8uCCQaZmpDfxz25skxEdbW",
  "key13": "4ATmjWABPEdSnHusSE7nNWpg4rypxW2ZE3nhEEKfDjmAgU5bdZkD66fDX6jF7qpTPoBPNjxE7CT15cMiJ45u5f7C",
  "key14": "5QkFrFPVRqRbjgsLfGyKiMSTSNCqMqZ5fZrPmLVbE5BChjP9n62ejJHDFtWCqztvRJJZzJFbDifZWMPf3z1PphF4",
  "key15": "2BkeHX6pLYCCzJNSpowCARULpFVNETXhjeXE6QHksjAouH84Lykf39vVahgrFmQn5XNAPrtoi54YtD67VBEqh6sN",
  "key16": "248iiKaHBEvQsQ3Qemtg23opqxeKwY8ycbj9rMHT3m3FhXdhfgMaArv6JSHZY3UoN4399cbV4ZmjT9GkT6uvxg6d",
  "key17": "3wToFbUXqwFvh4AvUQ5rmGpEpnKyGkj4QwcW59wXqaGMtEZy1hp2C7mzF1CUwywZ82mYhpi19Gzp33QbCJkNbAzy",
  "key18": "eBP79XZbT8NsNdV7ddgaAfj2iozqq9ZziMUaZJWrGtWG58piXyknutGQD1zaeb3JEF44Nuqrg9PSeHUfYoLDksQ",
  "key19": "5DDCEKsQGUweGp1nDg7Z2Ee75KD8pUvFQJrqkf5VGL7hHuU4LdRX2ePF6WGvdwksstfoENfNtsfv3Mgc5o8cD1B8",
  "key20": "2uq9bY3HW7gUaGGtoFAe2R7ZKx52JbUU2XQDhFvtPuyM3UVqGTKqfpA6gtovQLZXAkrpL2uCBWsTBGr22HSmzcP2",
  "key21": "374Q4KsTrHEpqX7N33T4CDyFfgMfmKne4DzvgCpbJ1xkHiwNmN8zXpJkyEzpygPAKYYPC29iHqwVgB4sGa7V65gS",
  "key22": "KCPkWztowY5kgDc3VBZTAzCfqDmcBvuycKqY3aiXCyuTb4CMi3Qb1xNTitZBW8zLqop7BLdDF5L4CMrA4MRnPru",
  "key23": "2qgctS5PBzz7JRu8FVUxKAxEzwU2aZjNR9LiXwG58pQUDzkt54sADwqmVTG9Cj4RGGjfpgbby2iokn2V8kxqtsNZ",
  "key24": "2TM32ZAvk1kYyr9xZo2DDSJmEtTrQFqUhRetGzwqxAU8UxkUoYgy8xKJV2HMDqorxBeRQe44UC1Z7DK5PMeCpTUe",
  "key25": "5qwVwtRRr1YFUsEdtbfMMuBaHuTHC2BFMkPm7YdUWLjJ5nNEnfCyBFrohVNnKAcTPWEfMdEQHxyT7tjW49VKCbcX",
  "key26": "6NGEYqxweCpvnyWJ2zNaNY4cCfJddPsZ7xbHwc3PPF4GiCVjuPYK8sRMXfnJFdDebapNb4nzWrkb4aEe4Fryhb9",
  "key27": "hDA22Q957KMXXHroMRmNiuvPnv5KoXm1HfNKBkWHF5oR5h3x8sQ6PehuyuTVan4GSLonsQ5SbtQMRoTNe7tShSq"
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
