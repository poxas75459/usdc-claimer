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
    "38JWUffSdRHRT5JHdJgP9bVXSoBuXwkLpeTE9P33FcrLmyhVa4UAvJvXwSPViCUqaUoHojDhxFZXU4sQT1RCVDNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNpHgad3QuPzspaRuLdJPQxepDC8c1L7fZQXx2BB6DN1zY1rZraFq9cvZVUR2CDX7kvL6hDeXZEdwntkbWWURkX",
  "key1": "3kZ6sgUgwRyt4Xyu28Lpp6PRGpTMCxhAcp9roULy2wX546eZVeTA4uEh5fNdPXaQoucghyxqMdPobQ7dj4WRCohM",
  "key2": "3iymTioqpqHjdyemuBxaoBGXy69bADyA6L6DLRkdtejqdM7cimC1zUjfS2C4eSPJmnvpeCyjJfhZB8MoXyambUoa",
  "key3": "2KoMkckGGYJKujSw6asXfsrabVgA3KoZbLkqF7j1Ne3Y93GiwArSwndp5uF4HETPUyuvuYLxN1t2YDx3sPG8HcZE",
  "key4": "3tXBUH9dgoAMqKraEYA4ETHedBUPT6DBtbLSH98HrCx5sZ4vLZxU1VUASa81ZpWjp5Jvct23cV7zgPtLg1X2mdeY",
  "key5": "4UhhutQJQGkEh71Hgw1p6mvJRscdbYBvGugL4mf3ChcP4Ggpduxsy7Br2BMt3v4z3Ub3b2gjcMwY4cQXQkzGdMqh",
  "key6": "5vYH9fuMnR8rxKhdF9gufesA7TwNZTjiDTc6MFwpeeUDZwrS5Rzu6cwBsJB3bFsPEuD1BaTr45AdSjf89BLMgZNF",
  "key7": "5iqp689sbwHUigPBLh9JP1c2CEx4fjR7PJr4QRg3AfL4Eyf9zatgkf7Cuccm3uLZjqyF2wNhES4in6skpa3QFaaZ",
  "key8": "3tNRR1F1mKXGcUgMsypLL689TzxKWBR4qkKDuqbthxghPD95cge1j3amNBxLtLZkiiFfrSB6o8CK9XZmPvJNJ8YY",
  "key9": "ht674GhHoy9ZrwptrGu2ynYt4P63SKtYyPndcL2CmtmxHQSatmHZpnYv2Vy3enjKVxELKitjPcbJir19aAQyioW",
  "key10": "2K2XZ8NJjVfKhxcNP1VXmRSNVdxMmzAE8gAWpA9AHVLAZ6Ltmyhg9Uy7Rp51b6Zed7m5hdvqCc9beYQS1TgRjUKm",
  "key11": "4fsZuhFb2tQq3R4TmEqp3R8pZJZtc2n7nFp3FW7Ch4Fb8s95ZNYYsrnmceXsFADEsGaSRsbMfZWzYPRrkCXUKUEC",
  "key12": "5efsUqpC62WiHSDBT9hPHM22eZvamVwjHVksfDBx3NgWZ83i6yk4WPzDqY3RyfpEF6trDzetKixBBNDbES86zyNx",
  "key13": "PQ2qsVmVVZim64qBHpv4bjoJcA9a8vEMiZZrmb8G3vMZ14uqSNeMrLqaQGfBUqcV5Nr2Ea2R2qwKAJx2CoifmTn",
  "key14": "No1q5CmVhv2CwzhQLFBBfiBPzx5fLXLCuFor3zcbSufD1MmKJbsRPYGE4GQtYKGqLMKuTzn5e2MBJYiaFSUE5gj",
  "key15": "4sGfyiP45Xmi5PppVJegs4nRgEwN1JbjUumWxQYZc3EXoKLVPjp4X37v8SyAxn4LHJWGbpf7EENeWxH5xkA7FvEg",
  "key16": "5S42fZDGrX1ETEDCrvjp4sMPCLnFHQfXGhWYZDNr6PhgJSVq49VQ6qqPYAdj28jsqqMLWuzuoV8L4mygrqp21ktq",
  "key17": "2vLerwt3B333REk5JPfCCTKsFJUGnATzkgHFCAeFQ7GD3RsTMZ4HF2T5TpBhXVBb64ARKobSp98FU3bHvGBfGjCt",
  "key18": "2p3Engkdps2XtR528rBQAfpNLYzUppE2iL9oq2rNez7N8iSx7RNapnWszHWTSkAk81YdQ1q9PYKTnvQhS5EG6MpX",
  "key19": "2wwCon3Hhu1YKi1uki7NMKx7ZXqfwvjUmRExsqj5x31hEevbiRj94YN6kGFVJkgaMXkyFG9Q3bTuG81wocfiJ2nw",
  "key20": "5j18Xkw4QWxuTtHZNg1W9oPtZ6qNpyJ14iC5PmK6FDgJ36YV1Fv8KoNWFNyG3fzHZqk32GSZ4ngkBZvbvynbvLHS",
  "key21": "4PP6qYoupEpQHuPBxFJqEx5CL4aejWRgJPNuqfPvWJEBjD2CkVbNSXzauM2RvgsS1TuFXoyr3UnyiU6fkHKvnbQL",
  "key22": "2oF8a9qvwEMohyhkXHMH9WZBknmskGhBYqSaT6svDnVszZGy2f838ggMLvHHfaxWounVLb72WuRRXAXAjFfU9eHH",
  "key23": "4WZzYPkm9SPKDwsDmV6HDebXGAKpTYPHjYXPHbVqxVaRU9u21JZufYvdvHBHMfoGEFkXZLSTz5kNGXGbeQ5kroVA",
  "key24": "5YBBfGutByTWapTNKJJoN7BRWRuB152SAjMMVXQXiHisTUF5Jfi4WNwRiYX49Cd3ErJ51FypRsQu3dXke1mXqZsH",
  "key25": "56MGLJVeu7Ax5AJqLfdev2ctTJ2aUXopTfteto1ECS5PMfs8nYfX1MnLXSW1ar81Uizo7x5UA7XFfNsFmG4he2oo",
  "key26": "4guE16HoNA54hgQe5cEvh9AFSMmkNkTUd5xWxSqD7uPvsgF345TGjLZdJPxLcXCwSgKpGY54cQs6ggVH1LXbnJJ",
  "key27": "3HP5DmTCLJ3fJvjBMNZ4Mgp8dHSG41arwNj8SV7VPabpZucQKLDp1xocm3YZM6ssuFb47Qrs4M3GcTmLvHvo1Aq2",
  "key28": "3rjPSP17ZP9ewQj56zUE8tzuy4zDLWmU6uZEpLav9fP4uFi25Q8XhEpgZuG1eFVNi4d1SqPpG5eiSiZCeUNtP7sm",
  "key29": "2Z9K7K7nRQQmMwVAcVnE3DHgYH7h6paUBQTRhscGZgHg3mxs91CmCX2o5BR2fJACZjvCjnpRhP2BxrgymNyTvghr",
  "key30": "5XPVHoZYxuuGuYM4kzBqbT8NfgVoWLrPWpkX8EL2wuRip7jAJVeg1Q9MKQVroVyPuefyeAo2XWcygbstmpZJ4Yzc",
  "key31": "grkT3NniSDZMhrXrsMjkSDw2ohNzotf7bgrEytAPB7dwuQigrvwqVvdSQ8DNx3RyvfGseycUk7NBmmDE9DyfWTW",
  "key32": "58XaUZLujCUnJPWfYEgnuqWyy5J3UvWVFV7JLhGRNKJBAKqguy5E1Ld9bvQfdQmDfrt8nCRAxw48HoVk5fN2MGSG",
  "key33": "5KwsRMFMZNTtvQgMkqr5UErbAkmZcad2CVxN6zVBknV7ETEQpijHBwtPdayLHNAST9A2CjJ4wuFjz6N4ojhJeLQU",
  "key34": "QdcRhDx9iCi8wz63hxrmJnLDCdYCkUeuyj5kCNWmunsRNbqyDJUo7fM8cKHqaQSZhFNaVFznFj7vrVXW1Jdnwc8",
  "key35": "62cQsAWaFo2pjxEV7kdrKAKuB4AHE3td7Gmd2ce84NxHrLP5kvHmYQBMUfTnnVfvKB9ikRouCNRj3sUiQXttNyty"
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
