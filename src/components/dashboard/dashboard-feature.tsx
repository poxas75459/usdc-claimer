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
    "vdSJdxZGyn2oHXU5LzF9Sx29jzwx4aT6eLWxUSv67XbRzXhh1TPNmKhp9hcVSVMY43ZzqoffkrovFqAKJrcLrBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47kV3prGy1WuUVqPAbfw99U57xnagieyGYL85n95pdMLesenHxVJEaGVSKNmZnekhjn6ZmdnowwHb36izGc7GUvw",
  "key1": "42PBgsyy7Dkfec1KfM3Yvc13AMEKU8VM1U889EE3UbMKaSb4JJuULJoyZ32ebVSy21iT33LBF6HZYaU11rG4QnNJ",
  "key2": "5p1JK6fGgsFuYbbCg5eLQXdumNEVtqgqaor7UeYDFnHAtbZyUzE3d1Ny6GCo462DjiQvMZvzNc7SK82Y4dBwFwjU",
  "key3": "3ZEVoTdx8BLWKYSWFWSApc1jEgEGWMnBpiZP81KP78GhnE9k57neoKfTPmA7A5WAjdwVhRveN3JT6s9KRnKQL2PL",
  "key4": "2Yvo3iaGx9mXbanR3GZR5P9uhzSbPsxSSiu566AbS8f5e9yTQbqEpzMinqj5chrw3PLU2kc6BF1sEwqiANUMCark",
  "key5": "VqP93Uiq35oGnxX8Um9eMZDANNGHtQqwRhGoieyRFRpxYax6CHaofxC2NyrBFTfg6tzQJZLXGutukSuqJvfP2ny",
  "key6": "45L9aUu5GDXWN9Qv6PP3f4SXUbe1V2BMY1kB4twjvAaDo43VhcWaV9Ue48i53ku4jRRBiG86DvHTABNkJMWnppqF",
  "key7": "63HWBBMm8bFeFbT2bTLWFNMm9DbsYDMK4yRQBu7q6VNn28q7uTLzp9g7SsbBkqCiyr5Y6Fzbh9A4EeiVQJLfkbRo",
  "key8": "4FKuXoURv1L6vK29UiSi8tcShyL3dqJ7jyNxhThUscVb32N7BEXigpEWadL3bYG7deF3bQcgXCbrLm36dZGepW5",
  "key9": "4Bp5ceYsB6SxXqGCBety9UHDHAkXcP63SonLipvAf5BaRHGNjQ6dV2vZ2A8kV7sFEqd8sfWAEghVYBrueoJptshC",
  "key10": "2Xm4soEQQGKE4RNnn2R4kGRLKi2z55SjgxdmGNVwnMZiXoSPzaY63xRwTRrCVdnQnQNSRmQog2r6aar2JoWTQqfe",
  "key11": "3HWGzMTQ3az6jwgtqZdB9GSYAdQo4mACqNuMinWRYV5XfM1dvkmdxYM1s6qAC83i948ZVoUC8ofjq26UFdLkBk1t",
  "key12": "49CZXhm88KhwGtsGxbbQdgsDMq6JYwun4RgcmmHDmAe6KeixjAkErqLoqu8QwkaazCEK7idKhhXeqKUdv4xcHpVn",
  "key13": "5Gopt5vXJeoJc8h9BQxQZuk1HSCnB5TCnYZoFAiiDPjabHJHuE5JkYrRm6oFPatAjkAyVtVxguUaSaWSmNNBiMEP",
  "key14": "5t7Xaqm5juFi7L6LJb8EFgMeUqoTntZh9odb8bPY6JTiQc4LMyU56jCXotMogzQ3sSZEB2DYEW2zmZJFfLzcQ7cG",
  "key15": "51GAcrVAupQm5esrfc4C9xEPCogNT11eJG6CLdpsfTvMwGDJ4xDdGDcuDanF5HbLzaEfxsMV6XAp6yvQeRhLAcoA",
  "key16": "61RGgrHV4DjTygT7ynywuBN1iAm6QCgJzYPMRmgnVj7QrQzuF1LW5uRu5WmFu4eKaz4UkFYrpPciuMMeB8tEmxHZ",
  "key17": "3qoVmKz3uUJNU2mZnHmjYmpdrTgPRR4ZoZKfneLx1nUQVF3JJKwduLThVLv8jgXvaacpJBN3qsm1R2nPP5hDnAAJ",
  "key18": "2B8kFLSz7ej8ihpV7cgzEmSe9Nfh4KuZg6Jm14YT1kkQnbmvQsL4SYH9qWhZJ5xRdemGEiqUA55BkgTJ9MkTZrSP",
  "key19": "76tfbFbzAiZkpNfCg8TjNSiU31UuncJHyJFHgwPCTAVfXv1KEhATVMFrxYfwmuE5TeMoMAqd91V5NdnwCiyzrxM",
  "key20": "3CViaf3FA4nyAKrVd6CzACsVwu1s6GaEyPTRCN2rNxZZ1vdwVrou32syEPQpJZGGVtwatGrvUtnnzSKzwnvxN3W1",
  "key21": "3B99qjJh4L5bZsBFuKTe4jjZCiBfc7U9MUu9GiMKUExibUw7UZrXKTRETRo6Xo8rGnJdzfAbUhZpKdVHNvwfNFCy",
  "key22": "5uWSWnWxGYBunnziwDU9QrkVLDTnfhKyfhBMEWf42jfXbdYJiHkGVAxPTSgK6G6k4LrSamgCkVXTDH6tBx1z52LL",
  "key23": "46NguKH91838N4JbU7GzGiZzEF6Drp1cXPKsAdLFfCWWzUdauYnhKgedtSB7SuRLZbZA6LrVoU2e4Rqp6tG8BBax",
  "key24": "3ddfuvwDj5YrezvEXetKBXkDrb7MqobmY4QJk7p94eVjf5CFi6BBxmUH2EpqGVjEQigfnkyYbGmWiPv9Fz6WWZxT",
  "key25": "5XtJ91nMRbawJj7j8k7hRMMN9b7jHLUjCrAAD4JKgC3xc91taDJCqFudc4tV1kjDpuU9fC9xXDMcMVHwE4GPTAJ4",
  "key26": "2J2y58grAMo7pSzyziRQsQBKzZamXyZU9PkWGu4rmmwpN4AA2y9Ei9fHbwZWBudJcT67AnUGAPQ16oQebzWYUJiA",
  "key27": "3QqfziQ9pXvuEQG38nqR5j7kvuDQMouGtWmmbV5gZCzGH9KPRScwKQPyHWnted43K6iHBvuRjnterCGyqJ1MWLHY",
  "key28": "fS2mEYw5iLhgwgqWLHayzkxT2zKmDm19YDQAzjXbLnn5XsG8ZX5F62cBgih1cMsorPEsFpon8AXfijd5GYAbbhB",
  "key29": "2KyvwCdtMZBAKS9MdvNH1HPa2mB4raGjqjDJzkJUBGdgQXa1t7y18UuWGxxn2XK5j7ZAfhGHt3S5bwei9qFHJiX7",
  "key30": "2NBPdU7QTA1Sy5hUm1EkbLDqxpGVG4rvP3YTtbpNpeCDBPqShdAenm4gyZszRUYDFJqiDSTUSkSqWb3AoyUu1rsG",
  "key31": "5rsevXzCBTwEKgxAQwTzVtJXRktfdb2BXvp16cRcAs3LpLdVJMv1smf2sw3HPdY9pyQrZam9vRZ2tUsdMym8wTKS",
  "key32": "khPaCoXbcMDuToXw3zz2jCJWeQWDffJyj7Piu42gSCpLBrK6669yDTBQW1AwwrDUCti9DwCnZrDfrWEsGSFZuBh",
  "key33": "bxEmcRTunZejb4WMc3orDSRHeWRjyZP98xSmpvB9vZHMFK7UF5iHbdBNbMEWpyS4c1jFowYMH7UfeLTzCxMHBkx",
  "key34": "3vQnsS8ypUQzxcpZUdxML9LPSi6ouH24PaP5iSQVK9ALHiCvpuwExEM3bj6T6dvke4RM8vpNyP8t9tCFDfL9eGAV",
  "key35": "2G87qiTJuSXqNjfEpomBJQbAUQUWwgXncg5FrFeK2HsFeSZWsPRUUpuRQmMHy8SqZWSKUTiVb4pTPhhWriZsxRsX",
  "key36": "3nXShVukmKnuiRFRz7swAEGo3AGnNaVdFc53L1uHvDRuG8wBe3NbdjbYyWYWZgATQxWpbSQMEancRJiEavwQHZ2c",
  "key37": "2UsGYPNk3o3WVNpx8b8GdoDhnazcABsZiTKCrQQ5YdHFLRaG3jPC8NrZTvBZj7vZ3UgU1x3LukHY6VBHiM1ZPowR",
  "key38": "QUgVpyT6HnkWE7cnp9mFSRzS95sHrwqibcVzmoAR9jw2k1T74xfSGoE2F41CD7dCR2W6Eh6kpS8YkDFrq3bY9B7",
  "key39": "42wWmvoMyqddm2BVtCj9dBnDVMbahfv4EwvQKnCfXqrAbUgfScsbeGX4GxpteUaGGh4Ev26rZiUomP3znttbCzHL",
  "key40": "55j6s6QJ3zGL5ZC5yS9vRPizuKUh8XSBUusYGZF8jaeSpRxyzCR6RASqhCYJxJoKyQoiM5czWo1uQUwydCg8r9gs",
  "key41": "3uKXKiQVCWSgR8m8o91TjKwCf5MAiWoipfEAUrJw8i9rhd3AxjcfivDC7ME2YM9ACMCP1MnT6w8bc5i1EgbFs6F1",
  "key42": "CTv7hS55Me2FSXPR2inUis7RLKKARpX3h6wV8PMsvbJH3zftoBSwcRaj9oU2eWipqL6ukDuUSwHC6Pv67fhtrLW",
  "key43": "22qQDx4SJ6SYpTvptfMLYVKMDAtWargTKbDvSrYPmm9pjCcCi2joQ2mD55pmscZkKrekeEUgjecPdTLCEZsZi6LQ",
  "key44": "3yc3tPnxyJgSF5zujykBVV3mvhFocRpq4yccwzXBLamQkS8P96EZL76vL5nerhpNebq1EnfMXiYjEHbooVAGtSL6"
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
