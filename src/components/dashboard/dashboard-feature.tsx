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
    "4YHXEswYnyas9LZigMU3PTvx19RoGDWtBFCqUA7upniXp1di8VbB1UWFDnvYGKsvDDCQPLVWiiN6XGjg8FEHPWbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hdMpn9PrXARkKvB3HsqNW4G3A2Dt4rMu2Evgiq6CWbWig9jEAeK156hvdFCiLokZSYi18cbJjU5kHc8d6zduMiN",
  "key1": "48iGYPoKaRATJqSv2h5To7CxNjQNb3HMsBjCHKR4hm2xw2tX7L9Jt6A8gpHepL7hVhEnKGq6Ehbkv6aUff49KB9q",
  "key2": "5dNwkw1Rpmp3o5xMv8m5Cfumj5XkskSJJTwa4yXEd5fuzJ48PjyzPibKufJXxiHMNwn5UJ1FZ7ThVQ8QyvPSoVzF",
  "key3": "3V7BmNwruvAWR1E3mAR3rNMKnbvjC5fUVD85Ebsrw6WG3kNpC5yQyYpaYuWpmVfpbq84UUYQoJLcLt8YvBzZLnJE",
  "key4": "EtZEpjvF9HWjKt223KQFVk2qetxJmNiGs2koH7G6yiCV7tBQAMc2s5pztmXatck8QuyY9BY6NUAqfmiQUkTcwCz",
  "key5": "3ziVtGcKUiiB7rGGds2XVZtLQHUEDwEk6HHuo9s1CiBU8KSa6Z79cUc4vNzS8FZ3hKh7zXc8v7MFSkdcfrpXrgH6",
  "key6": "3Ma6etJQcAx1YiamHXnx6MEDz8JbJ1EB3mFDZDT1q6ufLWn3ifKEU812T41xdq3iPFmUKLGoixizkbJT3mC73FWJ",
  "key7": "3RNd9mCbP5i9NSpZgSecsAv8dB6wVJ6TvAewkyo2w7Wbzp8Xyq847TSQXqKHjnW7Q5pfgZDhKSeFtDLTmcuQiHEE",
  "key8": "2wCZ4hfmUTJaCicDCBJdgTfYHHYAtiKg7tZ1FCmC6WUUYp5W27icFYAVDavosNjYbzQ7Bmgu341L8Doh48QR6cNp",
  "key9": "4YydzXjshiWd1gKj2VzBvn6nhzZo7Hr8Zr9SF12zWeDdsCqt37yZjimxTtSTBid8ebjQeAoCGMZkLqrM8MrCGo3r",
  "key10": "4a2f4SvDaBU1PFqiGzW13m5kpLJqH7hi4ikohf3o1Fm34MvNhk1Un6UW11Hfh4c8rsuBumDTvxubbxhxfTjW4uMT",
  "key11": "3XdEVHdE1Mntn81tNeUcDuzikweGN68V7BGxdgHfm5fUw1vuJ295Fshkb6YQNUB8cT3PScUrLF2mt2BaM1gsNoQs",
  "key12": "3FWMviiZr396dsCd9JMUmG4pqsyojfka388jG9RuLmn9LyKEY3cDjHjgvdJoe4LpR3WvFBj9VoLj8NK9pf4M3b7U",
  "key13": "3tUWCmhaM17DpZ187AcDSgFs277duHkj2tGpaxaBXosm8fqNj4DJMtHp9NtWzVmUws4P8kM2kE9rJu5UQCYLiU5g",
  "key14": "2gBbGYZ5sWNLhsWLmhpGEqsA4fcUHxtB7a5cTotNXSqpQe3wmxr1E9ScW248yHXnQvSAjPefBJzeUnZj9JW83ZN9",
  "key15": "JeEbcjnJTg534XKjb6P8EWUCCmuW6nGHTFq647nZBf3zrGyBZAPrHV3WeguhGdSqnsUsnzxitKU9CR3xEmRLGU6",
  "key16": "2RoJBchdH8QWx6pd7B3qJxDeaD2AykCsoMKNEYg7ohanjQfEQimNGzpy17v8bmeHeEh2FAEmgs6EeVSZLqaYaYow",
  "key17": "5v6ReyMn91AmQcargcN6o7Be4jSg4tyQGAKEZRyT4K3Rvo5WeScvpK2X5AQTVGrRxd3sFPR2HkfUEiQNGXsWsHby",
  "key18": "4QfMpeJwQcdzVcccJSrL5R5zY2xnfXt1DHvpGzaScfSVfpQ4p2hwjPvDB7U2dNMLiSnXmMQfYrWcTNKjX8DgfemJ",
  "key19": "3YuFN2KH5UGBih5m7ke3CiLqszor2rqV9vngFEFFpyhKcFAoAb3pHZjXc56AGREvn3YbMv2cVLzH6UdKyLPKv16N",
  "key20": "5kVC5HMKBU7pQkHf4XBtvkpR4tF5HVrgkqfmqrAZy9LZn6FSSnH3NQKPzxVQr8AFRQidBFF4dDcgzTkykyDg375Q",
  "key21": "3SAqWxBoYUATTA3qtdzcYei35CweVQEfogneDMRhhVwBbYGhSfa9b8eoi5gAoj8D4SaCBHiBQK5wkRd4rKZKdShY",
  "key22": "2k7NCjqQUUcn4ZssH3oeJqjh8iBTVQWrTR3f2R45fke7CxhF6TaeaWvDGjBaKHnVeiqQL5RYrdPEPN7KDuBDPVJQ",
  "key23": "5yKpAq8oBxesizAaoVZisgK2Sf6FBTzSQvrzp66vDVcipq6jCNKWAR42wX3DyEj526Bni3hK4pt5U2KnLV7Uny4N",
  "key24": "2x3EKY1E37qsaNZDT9gpHMTEdLPLhSr9whw9GbukJ2XSMn1UZzHQkDwvnnF9XwHqpLHux1uEHWpRYYTWk8CVjLVD",
  "key25": "4cPFk5DRdCe11kWQ7CvvwaoC9YGE5ya6wwcXpjRc5b54owNozcx8RB1v2sRjpiRrAtdZJfAn9JJ2xS6qWf3jY622",
  "key26": "5a26qp1ooL2yqE4GRbcnHmx2ctQi5ixg2CbrwbrA9yrY6dBtihcrc9MzPEJkrzcrC4mrecL5sLU3NBmk92EDFvXG",
  "key27": "61xk6cBVPuFncUrRFQXc7a4ioL25ZTWetCoWFuXLsLxDzCW48cidxWeutzbJciFbYCCPpgu2RW5z7vaFMA38GsdF",
  "key28": "5zv6oUZNx44NwEruGpMhFgFAi5ddXm4kreqsYmjhjy6ECZThnZhjwxAXcVcfPCVZEvzD1MFgEUjCnASd9fCuyNKu",
  "key29": "5XN88XW1ZYxRM2RD4KS8vgVYfzpSmgW9EntRWbsf9wNMzZaZBhYq9s7SyEHhd6AjkQZCUxCSs4fbhh8nJ9BDRRKJ",
  "key30": "5u1EusSSBQ5xkcMNY71jQqiiLatbqSMvHRpy6WtXksjygKhzdcKPYs5cVweAhb7Xa7YNmN1o8qZ7tVZmQRFKqCgL",
  "key31": "5BF2QAf5HEhfw2nkuiZuPSFFwME2xwzc97Xj4A2RKrvEpHEsxeohX6SfTwfcuiw56yK9rP73NvXPk8EENvGjcwED",
  "key32": "4uj2E2cFjTF6j9kSpBS3ZtbqejDFTRUuPTnxago32rTtwSvV954RHVkEjmGuyh87aidon4BkAsqMJSaEjJtHTaDX",
  "key33": "2a5Y5UQdnVKR7ypojrfU9LcCkkCA2vfcd1t2T1Mr25MTDkFX5nPRdmzuZYGnRny19cJCSXf2LqABqZxXpjvmn8jb",
  "key34": "2GbQxPCGpTHgtWT3qg5c7Z3dKuXYbF7Rbvk6u5QFtQw6vVTgDjq1pvnhEHJDtjh2GYLKZEFt6kUpSi4cKZHiQpPH",
  "key35": "t4og1Mfb4b8o2Ei6rZceEnx4Mpcdo2icue4dNbHmkfnKUsD21xyBwN3XCD73JRBmXPz4jyVroBSQE9kULfgYyrK",
  "key36": "3rg314HEW6GEWzw4zJhdBtX3mgrW56ySkP8BBUyzHLCdNfnuCUT6jw63Ei39EwjRjzyf4dpLUaYXHCccdYz99G4L",
  "key37": "2ZQkEpb88wkUxuCncKim9tFQhDjzFajnHzT197Q7siLNmRMPPLpLLn7KmQAPoocPiCPKB6Vs2imTHXHfX8rC8HX1",
  "key38": "2kfC3RiuHJSfgC23s7UxzZgF8Kx1F6KkBo5pTf4TB4F2Hh7WVsFqFNMhrJPipkmDYsN7QxeV8VKiWXHYJUM4NEwa",
  "key39": "62LYTRT1Lb51j33eCUVbFMniyir7hCVjcRR3BYtXSvPi2h5b9wcHVMZ9ALTHr9seemo3Ytt4ke2yc7CrURJbWCux",
  "key40": "439d1jKEzVsD5pFi5x32HriAsMo2s5LZMtyzbCFpD7ywiw6PSWvBrJj7hfTjkV6dzUmiJoeX9RLpfTQ977ipa8n9",
  "key41": "52UWBtqPsoSh8eASQLxJ2Es1njF7WUpi8YodpHb1hZ1tjzifoYsUrMq3QiJbqxE9hzrwvsm1YBz5nuRGRyefCVhR"
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
