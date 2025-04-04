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
    "4WWNH3LfHjZSEc7E3H9DNV1G6YufiTJAMcYiTtaV5tEYT21JJ5XzQzsFbbMmHGwMgrZs98FSASzcBh4tTFpFG1QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfjgcxVSBhE3ECQ1F4viAoz1abrxRARtywA3GnmqTTUtygzWE1hdsupUuQwkSSUjo1nXCAHMAjVww34PjoLQmyZ",
  "key1": "62F1FJRu3YmSSr2fizDkNDRsW8yJ4BCVqeoC15rUmBnppiH2JhRiitSTL1TgcQ4JUbzT7TokwatZTgpKWPsx9n1o",
  "key2": "4rw7LXbiGB7EBUFdfzFAmnDTLrSNAzucMosdQsSDdv32ZkAtZoHhNrVfTV596czeAeJ7MbNcVqjyfN35MMm7SyYg",
  "key3": "5am2yiQ5fA4obvT5XaHY7HY26A41H4XF65ArMnUjFRtkk3JriUaJYRjV1pwQK7NnRaHsipUX1EE93mgeCNqzMkBi",
  "key4": "PN7QvSCUg6mFnkJdw1w53rXMPPpcotEYBx6YeXJDeNcWjodE8vH79wRTkWh5z89MW6ZREX1tu5u2y5teSiRJd1G",
  "key5": "24HYbEdDmSxYjnbomyQDh3e6bRNNqQu3deiy6Ajmzp6Qm289WdoXjSApFtAAN3kpfiv5gGjub91aEuzaJVFt19np",
  "key6": "2TpjpDE2n6AMawyZZqmkEeFbS629E8NxZcjVdnP3iiGWdxsiahyS5kLorwxf3nqo7L7oHfg4ZNhYdcohStTtTBdQ",
  "key7": "3Lo2LEddwge2WMKZaqfQNhHobcVQkmBnKYAf9jUHvP4YTZTxSXUxkNMaPavAh7XwM9FeLZMWxDbsGkdtjrXpGo62",
  "key8": "3QmaWts8yZJkPFFL9FXsHcSADDmkcwqd3764Rh1q7czPnR14eVY965ig56d8eJjemh8BhhLfvRFsrsWEAH5LW5Nm",
  "key9": "5HnE9kUPCwBzPP5uH9domZuSX9MCBaCuC3YCcy21rQpRs9eXATkwmjvsVWPWXuHJRhxFic9aRQnd6wiE3brNiW8j",
  "key10": "4T9DjNdb1BKZGchbwbna8zrFU6gSXx7ersGViCR9BNd6VSVoake9rvX4bFkcsiUzhmsMvN57QRvFtTCHKK49iybD",
  "key11": "2LGTi61tCCzC42J788BnqrciUK8FT3ciyubFRNayR9Adz5qf565KXhahxg8NGBrqThTKNWZcpbBbtPZJhSdW1s6a",
  "key12": "c4wqqfcLGmJ9Ych92CyFyR3NTUH8aLDwtVwiTQgh95wR9QQsMU3FC4a7xz5FFQAS18UHoEDs1kG5sZqe3nu7SKZ",
  "key13": "2FpLgzFyRrcz2D7m5NMFookrzP2r2snnCaWCMygQF3S1qoJBbQhjVTCHRc9VeLc15P824GsFetz94m4jMXDfs1q1",
  "key14": "Vvr7GKAEq5G92unfbbwz1G3sP5f6Mpk5qcXu3PAbcXTH9tzaCU2iiEZmxMcAHtKpmPte3ejzzoXNNC1Kze4V9cu",
  "key15": "28oscp9DP9nqeKuDjYtcjtB4Px6H7Kpohbz6CQbRMfGcBLGnkaKYd637TrScxwN7r5nc6DtwjkGyYsk3MV6X3jpk",
  "key16": "3juJi39yxjAu8H2ZRUrcUsc1yjMc8owJv3tdN2cvzLzMmQRfZmiUpPLfyw8y9nx1EN8TGSPPcqN765UVKXfZDBeZ",
  "key17": "2VfEoVRXvwvYhXWZ51NguyrqbMtvUvXzP1Z5fDBv9S9gZmsWnfJP3k1WRx1Tam9zZAtWBdTCKamxu7eQHE7aMHnj",
  "key18": "mcAuGtPYeEkd9v7brQzYeh8FHcwFuaKdpd5Z67FUJRQFeVemWQLLy1pZncBP3kNJv87GcDxHTWngeywdnsMyzPR",
  "key19": "4o4jmtbSF6anYE6HDfKHPmRRyjs7xapnaimV4bmqTuVwuspbq3jHvHLwPKHfSQxRSNbnW6r7CeUVQDaK6VCyCeRT",
  "key20": "3hMSSa9UF4E4UZ7PVbiZPysTvwLpitowPucMx2nm2jx3Hhr6fAjgeirhqVckXeMzsigr1SNxz3sKdv7nUcG76gwg",
  "key21": "2VQCuzXY4je9ErgmXmjyaL1tZUMUbe5FbwoLDYD2odHS4v5thesqPP1anYhXCmVi71ehUmyDYXw2kbiznPKMgNWG",
  "key22": "2YRr77gzcPVcSqZ63idKAqyQFWkSnuQky79bFozMT2RqKfAvVhSEgparyTGL95zEjLuR47u9ByYDpLzBuC8Skoy6",
  "key23": "3M4W61rKrcBJ4hdzsLLPN8RsP4PVSqkX5wqe9TZtmKQhNUcdvUjDZvLEPzUR3m9isas8QgQJm7RNkiAqLcqXUiCL",
  "key24": "hSxb9G1GcrsCijMQHGajv9zkPAuudUeWDQPihtD7xt2RTKeAGeDvx3sgVMzHaxJkqPXK4jro4ejNF8H4nmLN68v",
  "key25": "43QtrGpt7y9sXEn1C9NCm9sZG4Yp1PyPKZ4ePsU25eZLRzShfhphkynPZLwcWXp1sS9uyrEa1qrMebjeYXH2Szwx",
  "key26": "3ZbtXPBoJsggUbGXbbp2JxuBascJzta6cLawbYYT6zkQaKEzFdDv41H8qkVJZzDpMHGjwajbvHiMox8eTBTX6vGS",
  "key27": "dfbZaHdYmTQx8ye7FwskRhQkC2EZjZwWo9rCVFnEhvL7hus49qd5vJJo8tMQiqrySN3YwkHfs9gmsmMidhvvj38",
  "key28": "K9uD6BXvqm7Sv1k4To7p6eJ6DhRWotdeUi1UEJfprVvkvJUTgaxQ7b34nMhpjUFRFgYhRyzuimCTPWw6RnRXPCr",
  "key29": "3averDUmmnqZDiVkNWagd3QGQssuTdLW1xm9sGKNzGx3s1NbY7ZyuhyY5ACnw8hM7daUxWbr9BEh59tWWRgnmFRo",
  "key30": "35jZPk5y7b6EZFcoRjMxKoqyYcDMbEXS2xbW2LP4Yva4B3eS4waGihpFDZmJa294XhyUtATV9UhtXXSnz11QCbDY",
  "key31": "3t3HQUYKGcmTbrfvm9feo7Ydsjv5bb6YRmdKQ2DnHZruT42LYLVthseJ7ZVHpQMtt45arVFz5uGj4fmJdtDoCitq",
  "key32": "4aH9Y7KQQe6j9ZsPm4HMmMGcGMHp9eRSJee7o7AS1MkwVosmiNWVhGxPQyMpN25p5GhnenCqS61b6JxKoWs3g5kH",
  "key33": "4UixQvGPncfPs7nVp9D19iRoYLHUzv5ua9FvShj7FMs3585jH1hq55uZ19wKiUSyT3DNBdoCxh3i2BSNCUzkb3Bi",
  "key34": "4a93KeXw1CNTjJvM2yBtGCLyRmCJNVJfeMz19mhuTWxaCANnpdhBi7uqVogL1pt2jG77UwbFMRpfjdGUNxAW6h9W",
  "key35": "27oDFR1RSeVayAa4aqX526hqx73okvbobVsx6AaEjM3HC9aRBohkBrDdeMwX9dnqoEgo3vYBdFR6qTQ2nLKLaZ9r"
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
