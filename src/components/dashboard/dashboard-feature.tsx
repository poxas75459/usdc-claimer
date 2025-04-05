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
    "5QJXgsTeyFop3UFEKPq2RzLxi964HNgqd9EZN742TFTHYSrPo4pwT99gEzCZUcJdwKjAzsqaaumXTAuFi6cU8DJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AxVfSzQkVdu5ChpiC1jhzwaKZ8CeUFTs9NqJYTouui7oXJanCTGrHDAYMG7Sw7VZ9gkhTpVCTrXmU13z7kBtQBd",
  "key1": "Y2c2rwdoRiirdfSLmnkNRZJNWUaLXt3xhwMmhuzU6UGFHGox28SZap76gpkT5pWjNKVwE2CVtXwbARMZbyzq28j",
  "key2": "5bSDQ2RoM51zu1p2ZaEM2NaeB6J9x2ML8h8ZUSkujhn54CqwFEW561G138kDWLHsUC3CtGXKr4xptW7b5HYeR8t2",
  "key3": "3eadLQx6spV8DyAxQNuAkNWZJrr8pqeus5nkz16TLARq9GoHsx1FtLzCZTk8GZAeShevhr6dTufGEqYgMmaGnHLF",
  "key4": "4XYjEt7UcPRww6K3gjSQHmVvx98aTvrDeY4K3VGgEvcVWGAWkFZLxYL8EXUQFVGqKuNdA7V3ujWHHCqAHXzsmwmo",
  "key5": "4zXHQz48ef4gDun6FKbBFsACpy9tS2gFSVcFEWutT5erNv5uPS7qvNUepqk1PLUAjLxGTVenmKXGVwxARMcELn8T",
  "key6": "3dL52nWe5R8SgAeaMVophhFx3NpbPnd21pqzfDxSWA34FMLog6su8qTHhsBC9bwmoLUHMnnhfXAknhighxDRsm7g",
  "key7": "3wHTb79vw6wXCRijTdd6zoJd9AmQNkhHyDneYgNMGFPMtjHJdSadQ2n5yasTGoPbWx3oiQe5tPe9KY865K6iFu8P",
  "key8": "2dydwemdwEh9XajtjgA1m3j93EnRymkbmrwmutDaJix67SVuH6aFU7B9qn7sRvHeynm2JqC4ZeX5Qn9kyACLxtE2",
  "key9": "NyeHR7hcGoVZYUDcjeCvRT3J2Eu8U6c9ANwrG5XBUSWWzN8MrhhiM4xYvf38UbQ1QSgYSw2PXj1uTa3bkS2xcmk",
  "key10": "5xrF33oEEWts4Cg1TcAZ9T6XJwRe6wHZnYbGNSFMZ3GJ31z8kXSUVuUAfB85CnmiYTj5Qh29UmYyPn65aaiu683L",
  "key11": "6f3CLGZkd2MCX1ywiEVCqbQa5Tn6DZcSzPtFx6SWEXXGZhvBSYZkJEbtMqJbqKVVKBiWdFnkhoZpPh3dauFnk1R",
  "key12": "EJPJSoVU1v2s2TKLRdsXsY9iPZ9s9y8iHtCU9oZhVgVgmduUgBp7YVhmLEQyw8wrw9WW2PzywjZeCg4ZvVr2c33",
  "key13": "2Rs9umaLRgwSnx7pYSRFLboTjMUzueDAMbb4EEYLcEgEG9RVB4N4MvE5okavLq7GUESwVcsrkDydiFnMWazZ5paV",
  "key14": "45cDxa4StwxKge6a8arFyMqrZmNZnPhMt9d69CidE3TsPtnDg8ZdsCCSpRE96tBhN9te8zVN7Uqfgps4UBkZmhtB",
  "key15": "nW4gxCa1hpZmo8fyyVAFeGNpqm1EWcKqypXhZ6CngJe88YLyn7S1w4RRFdN5q93nQK1MafM8rDEJmi5bW7syFb3",
  "key16": "5V2kUFhK98Ldg8ehAXQAwe6h87qJKk6L5ZEVrr1RAgr7RjnaDrF3UXA2ezp6HS3RDmZx8wHF8VQTW1cYwXf6qbw4",
  "key17": "5AUPMRf2e2fLFnDj4TiFpfF67BDP9NEH4UqrvuRKeS5M9VE2eordyBFyx7GoEy5GLJbjsprZdw3N5MCSsPVzGczk",
  "key18": "5Rk8SiGGxZp4DJbhypRm5FT7UcDLhWxGQppUf3LxE2EsLxRUprac6ZTY7kxqHJq55mmpoPiE3qUmoVVJqtTPxcnK",
  "key19": "3GoHmcmqpNGBXsGQDVDbzuNngHavKhgiSPUqUqH2UZozyfUVSqfkN6QfwMrQtxz4ZoHSinrT5tfxhP73i67WN48h",
  "key20": "1uwf9QiHMDgxcWJYLxDSBQxKrwnshs1Zytx9vPrYbrpZb6m5xeEPkFq9fopoYeQngeFm3BnaUuC6S6DY1pYfoHG",
  "key21": "5SotyqeBVvNK5SN7hkBFh3cAK3yNACnCcjDKsgftz5P4y7153dyuFfWwsDTygjzAGTPBTUWxgtY31pmmBRvYS5AE",
  "key22": "2u1DmLhV8PWSjjhD7a5kUThA7FGKgDwFVaGFQbP8TeoeHDgWriv7sk2qAqvmSnYX6iD4GhZcY1Cd2ir9c1PrXy9e",
  "key23": "3CD1zLGBh3Z3jwFioNudpVvYpoDgSLzKA4sgtDdG7sUsR95c1NwWmubX5uWK3jyBsGjqdoNbB1LHRNkV5PHbwKYr",
  "key24": "Kgvq49XZwXQYAvvTHC56gsgt5rXp7Y9Spn3enCQZMigLVgmS4kHokrFvBXj7MCZyHDn6CcvqiAd6m5CdNyvMywj",
  "key25": "KWWBGgZzg2h59w5VMHBKWRq9GRc6eVN5LwzHKKcCHPdKPUmuvWyaMss43w7fY2ZCgMUhypEtREr6Ze3KEnsc7kD",
  "key26": "62XARuQ425AwTjnJHyNAc9URn8iucJqKuSrUavC79TYrTDPty3ag72vQ5SEHy1ZGB1cLtfqKAavWXzu2jX6R8TAa",
  "key27": "2iFnKfNypo7gSHUFy45AaendgEpP6iyieKdjVeJSakUpvFLfiMQR2EpbacWMWouYCTSEYzjAQf3pGnN7UVs2orkJ",
  "key28": "fYBMuxZuMKpTkFz3Pk8b1Bn7jGAkbfBNehmG7gcqF3hoN8Ke8kiN1EdYGT138tPe8X1RyBHo8ad5H968f45zc7R",
  "key29": "4NnQ6KZCN1MmwVBkaEvssSWpFSiqq97kWMT6ed1yCpbrvRLJXbAf3UTu1KJFZBntxszvgmwZfCgZ3BL7PUoVhYXP",
  "key30": "3nYYUnDFC9Fn7S7ztaDhBZBtKrJTtuDjG93Va7jWQTx3KB123X2GRCHCtWUyEasWCA6RW8Gwq1gsFdC7MZUjcovE",
  "key31": "3fTnsonVC6RP1bLRetMfvy7HG8tFWraZeoxCPUQDjtsLNbBewfKd4twmx8aF8LUdZvmJz4cw5bcduAPqZVXSU3N9",
  "key32": "ELJhbxUhr3xybDZStJ9xfEPxZPKBomRjqKQAbFjewAxWMeSo78TPGzH7TMZoKKKKH8DhxuAtafrMYsS19UV8o7H",
  "key33": "5Y2WJfbaQmafbzsg45UnUzjzY5Au4SeNVZsQo3MijoFLQnivwqYHYX56wYRdsSmXqrvVvFTptebGtsnwPLej9n5P",
  "key34": "5JQiKCYYUprKiiatmUAw2a1Zf4nk9hWVwPmSe4t1vCbBxkNtSk5jTDjCM3jjfJADWdxBJWy2nPWimpXRi2pGrtMN",
  "key35": "7GFFJLWmgsENRQDmAKFRZdSzaFhWK3paqdVwkHBw3GuuayhTmHd9UA8bJxAQz97GUou9EkTaHFGYwcn3LcHHmQy",
  "key36": "3iB5vPuryTLymD6a6uQ5Mtz4M3TctzA7PCh7Kctpso8ZULAqBbncgXCNLcXftLjJiN8Uwe4bzdMMgraMmiYbUC7w",
  "key37": "ymBjNEvVBnDTG9e2KrfY64J8VCLRqS7APmyMbdptNrHtyiCi4rq3Pv1H8j6hNg4NKkzVENMEBPTPW29x5rSVq2M",
  "key38": "46sEKTCpkiAsMuuBBheWSnZ4C8zcc9xmvBcZdA4r61vXdjd8MBrFnwBCWMDn3aAjpx3KKFWiShFLmryFHkPiaKhH",
  "key39": "3UV2hh7otzyy4CXDvqx64ZjDcVobm8m9u9Tg1bqsgqqQj4MvRe2cADyXBRNZxqPK17DiNnSm9YCQ6aTaMPZUqEdV"
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
