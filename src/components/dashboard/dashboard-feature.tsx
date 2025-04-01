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
    "4M1q7Y823TCAs9zECRn259SgguemgwhCCod6MLFxfAjj9BvKv8JWbo6TkQ58YwkHNxEuurXgQdBf6sviFfMq6N2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2i2rL8VMkDzyeytPyda9xzHD8BkGQ1fGhtVRKU5wmE4oEdFDeYthzFF9ftLL2V5uuXkobVkQjrWFpuo1hCACQB",
  "key1": "A1uqS9WHPDyNGFZ6am4tLAWMYtiL2rTRonwEo4XmdxTzYWtDn6BdTnX69Ceh61bxzFoNTTD9zcxhGZLWXszBPv1",
  "key2": "2zMZgdohKCCwvqYiLV5CsDEurXP5XKS6Z4GNBwpaVNirvZvSK7opKC9idRofxu1g8RsMrCtzosei3gpALxWPGhx1",
  "key3": "26XcJ1xMGfZQggeRxVuvPeRqfPBttfFQTvDmsF9RVjoXqdm3BobJD55XfXADmFgCgKKdqaEY5ZqUbKAgsYTznFet",
  "key4": "4aQSje44516PT2j66R5PTdaQ24zKXiZes579tutgntDdy3EUc9SsAXur3iU6jXJwdTzNnSVTdEHm9KxRbLFBzh5R",
  "key5": "3gjd9vwKGAgXo1yjdeo4B7Qbv9FvfwyGdTDB96717gw64RyG9oTYaUMfxLcyMoQHr2fWF2MsoXXy9Y4sUfyg9h9U",
  "key6": "5iyG51X52Z23h2ELAERRGSAQfd16nX5qC7sgY7HCameQ2A1yCMHsycvtitejEcG3HSaz48x3Wa6KQHXh3GkPJdpE",
  "key7": "7KbLnwBQb4ADbhLqRpZRvS98tXYAoVDsiojedCuNcUf9iPieCDnr8Kxj85eY2HxQvUkKRijspKMFDPxXozcXEGz",
  "key8": "uvkBsXhTcZoeWfBcXn2tSDcEsLNonGPcvP2GSnUyYYcm4GiouaNoeRPgxDvLNS8GwKU5eKrjME3jHFvrSa7wWxT",
  "key9": "3MR7eo3zLhE2JpbN33fyeszfiEQLTmuzLG2soFroU7PUUjm5bia7cLg9pGvmDDX3PGJYcouaTRd42jkqsChLXVcz",
  "key10": "3RKuG8nEezXhNL5KKopK5C55puEDzB3b36xuJEvR3tkv7YkX975ZLdT7h9z8HyFmsbpG7Mshq1H4T2cf1UEUkreU",
  "key11": "ZRQMZufgrtxhSuh6eHvW8FZ1jmtXJTna8Nueh74QEMx7ZC49r9yxkzLCCpg6AJWmdxLTay9MuRbxGLXVR8mR1uZ",
  "key12": "55Dze2Mo2sVYDCgi5HBAxAm33mwdrcn5tTWg1tmEjC32HKyGMMZMSxWWSzNQL3YfcE5xAroZqKBBK1u8o4FxjnXF",
  "key13": "2Ps7bAz3RPqppcMsrUZME66R7zjBXs1uurP7abHhcTd2P84DjvSbKrBA7R9LeQSc9UB56SqwXGDiPJ8b6pgM8g3R",
  "key14": "2TFiJZ8UpA33hTEjE311x2c9ZEjMuYBbLuCziFtDDmwXqdUNNZ5a4ovMUYCngjRKDFpqiEa8rcV6aQx5L1nK3YjT",
  "key15": "3b6AUWiGEFyZfgxBipMZjG3ZmzyuagivUkCzDvuYG3KhLvkCSggUP726u8hW24uLn4MjaQsLinkbgSzbJuij35PV",
  "key16": "mft6CnMxWDyvBWKTVPSD17FE1SnARGx5kynzoiCMioA5SBboXNmjQTiNoxrBMcsLkfgG2kZnYNrFh4n15zKugGz",
  "key17": "ocmJHCrBgQ3UzuAje1N98aNwnoRvPfq4ybjGZvvYV98gJECxCEhixNqWBMs6NcYKLf3ew4XPL32dwxAsFhpaYYa",
  "key18": "4AFtSAkp2K1gyYhmR4EjqGEzFWoYW8ptdBEJ7Hsq5JGBDcP6EsP7UzqKH6QBWFpx52TgkMBpWAWFU2kLrTjgXNed",
  "key19": "V2FMRvKLXAfLsDsRtu8s3b17qEWGtbvnnmPN8XKBoK6aCsPM9KrzmuTFfjy4Edyo9SEactiu7kAYdmvCQiinCUp",
  "key20": "4CKTiBekFLPM8umbkkqia3ywGcoSYD2KTAzMdDt9LHhLTwjQJjgTLfT9eDU1hMPx5qTf3iLXyf4QAggFdPSsZfHf",
  "key21": "5FYvSEeRnkGbjxhaHyBUD2fZ4gp3kt82kCVHim5DqVMr9jKGNnzgWzof7UACVfsT5zv29j6edSFhU1Ehiu4FNZfB",
  "key22": "41i9kL1mPS9ykPBpQmTkbGZg9sEh6nSrPFzgm9uKHajLTUpzYPiBgiNCGfBynZ3ktFAWS6wKvPFoCaqEV3czteyZ",
  "key23": "3kiTrqWPXxMdBANGok1YDC5wjEt39RdYvxTubcBtKwjEon2z63pU16NyYJLjrAsUWRBuS6ajKuKEwKdKW7yP48Qi",
  "key24": "4sYawiEaLfmKyx57SLjVaEjcsc4LwLCtYoBf5n594VyM5oiEf6oGHtJptMJ8NvPBcdokepzTtyrUXsASZ5QUGRDD",
  "key25": "3ar7Ls669sqGD1x8eJmh9NuiDs7e5AMdQCijAvDEXBAuNLEAtFPcDjDmhn7SzttWVDnAtKK5HG9CFEbiTgNazv1B",
  "key26": "5HJja9E3Dp9JaLcXUNTPuQjuqmBcFSYDhv7W1eoFnsReLeLXeszKMszSr54iNgBpHCbbMCe1gQaBwy46QyZuJ7sn",
  "key27": "3BF7QgMNQtBXVLfqbJqqfJu4H5AfRoYzHoBWTyB6iYrHr3aRXeT21nGHtzyWPwzy5CfUscKUYHKwweWaqgEtQSpf",
  "key28": "4jHjnN3GwzLFzZwAhBusDoEavCVBF1hUEE4wdvYWjBh72B2yHLYpLPT6s8Ki6XSz8nPQSjg87SHFR1eHsipLPPtH",
  "key29": "3vAgakYvWbSLgBZihPxTCet5otNf7qksZV6Dn6egKD8kJ3iCbYaDPzdfRnk8pmLzHRA9EZ5FBzNoBpMJBjWVsTyf",
  "key30": "5jDLC8ACrcAnTgwtzi51Sg92HjRs4nLW2J2WrdGhNt1BkeVytszqJ9xCUg1goboTfSS3LdXnt4DuehCgdE2BSmSJ",
  "key31": "5yHXu7m6sxTaCwvgjmy8x8Fo5mcGSwpjKcAk7nUfGNbr6RitTbUa5FauxG4Aqku3CD5foaSQNec4MwX6eM2aemT2",
  "key32": "3TdkZH5qye7jCCudVnLfnT6k87sgV8sj118hCYGzXMUpM6nBfKqf2MFSREdUiKvG6QKW1V5fFiMHxvARHXBCztMZ",
  "key33": "3rvb3Db63J5RPtA9srXtYdAMPpDDs6XzVWxX1khN8CLCdQAXdmJhNMdBaK4ZJek4uFmyqmP6DGuLQNZGd5pRDqLj",
  "key34": "2S7519CL59GASK7wQYM2BMNN4V7k7gnPeBPm5zSEto3mJ67e63btWzPvuMH5mTcFd4iDD3HGsLX91gLaNKrdjDpR"
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
