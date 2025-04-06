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
    "KogTQFqnUxQXXUJXjP5Y6aq5ZZpidFEg6nT7ZAktLSeomv6qnru7D2X4auWHU2xXCrEveiFBMqBL87pKFkT37A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhBzvCZntVcpC71GGvExDKh8BSBVPg6tQxr1cB1pBFPhzh3QPkstsnJGupXuR3QsifzhMXfgnVy7dmey8MnLZLh",
  "key1": "53tiwt58y24W4uJwavzHiwwHVL7rYF1xK2eVWJQiFfFeToWQh81WDHAWR29JCdacTZ79JCnJ5qNcjt3RR5n2NUhP",
  "key2": "3VmgdGUL1xnM4pGkVVDqjhiSrcLsALRWV3ehnu6vyNS6P4J1zQR58Rj9nrehBkgakXkH4p7edb7h4ZMxjEfsqyVh",
  "key3": "5XZVS7JRd77zoDjbnWeqy9iZstyULsmPGoczoAgba7hoBSS1JBQECjLwA6aDgcEEeBAhFWSCQknCpEifCvzWE3TF",
  "key4": "w2CuFtTSFE4PQbzQ6KW75q28ztUri6ZRvgF1HBjVjrJmnWCRpQQf7cjBt8xx81Q28FAKD2wSf1Dn24ZNveRhvrU",
  "key5": "3MqP9E5MYJ9RtaGVB2FX56RAUvzjt8sGRvy2Q71RSVvkkubRF2q4k4CDJmpwKxkkkezL1D8BbdMhBa5PjDee1u1D",
  "key6": "ChF9QzTq9h75FNxfpZZdhfvoXihXpGiJDghRcNHaRH267etyw3B4qKWRz3kB4YxakUMRphjeh91XTZEDKNXpduS",
  "key7": "3FC6FPmXR3oRNz8zawbcxmLuNAKyF73jbrAwQhPHdvvqNN4SM7o66WMRqhWHDxPNeZ8L6sBN1QicmKXvah1DSpo3",
  "key8": "58McGYH5f5Ab7ac9ji8QyEBH7Bk3cSyjZZtRS4rz9FwrCF9euowmFU1kx5hwJsmfXbRUcUHM5jrBWAr4tQdEEDqR",
  "key9": "2zArAYnDQYFJKtVwkfJmcUYXBmKfHXFNrZoYbXccLxPYbexpFBRrCjfxgibmrtuz6sXD8npQYkKLUq2JkNzdGksC",
  "key10": "2cjUUj5KUgPhtjmBExgSeXPWEtXrURoXk4YHWtLrEaXzUeZEQu8Q63BNr2rr8Bi7hs6EGM2tgeLJviXa4CbJiYTq",
  "key11": "2dppz6TkRD9ThKMSMo3SY5SGJRHYny419qcKh5z9ndnCxJD4nD48YKAkFXu6e2AywH2RuYwditD5yk7bYRsYqPWt",
  "key12": "4b6R8Bfiybhv9A4RjPEiJMWXmDEahN6rUFPYnStzGobEKja7P22vMmXaS4MwKaWggycgaikSkWW6jWnmvitPbuL4",
  "key13": "5xjpyWJYqfJubpQXJLdXjQrbkJexodFvFsenTMy7JVLGG7DdzmwHnHKXPzrFdhR2qBpEqqFvQub3s66pYNXxLosW",
  "key14": "2TKTFp8LHazDxKGYU6eFWMLgbzdJAn92JpmEr2Vgq9Lv3BpS3Yy5wPzaoNtse29K9egEkPgktdLj2EKATqcMk6AM",
  "key15": "2gddRsoz1NK5Pqn2BFw7dpaeLsJH9YPoLnWXpW8gjwQFDSTGu1qt3i27ozU5TLbMfVCdfRv9n3BYKV4JWMF7WWCa",
  "key16": "4FAzkbAGpVJ5w6cNWUvducmNZ8CAtm7AmoLRkCdvtZyJum7f8iAiYYmH9UpaSkRGxdgy4fBGkvKpmaH9wV4DZLm1",
  "key17": "59tvAqWP2rRa44XNLYWZavVYzGygpAdo8WgVNknzyAL4F9VNodEM4zzsUFTdZH1rnYtpiR2qrqVY2oYKdGYdfNU8",
  "key18": "aL6H7dcmwJ2eH2e18i9JRZDqTcV4qY7QFCfvac1vKmrxCB7rxgWhbqvKRKUfZbtpmtaac1fsamHHz2UtHvo5U3V",
  "key19": "3jnDhogCFuKVkejc8eMyhKtne9krLtXkJReDLhVzz1opGTA7rb51Kouz3CAvqRYCLYn1td4SGZh49u8wGVHDUgYJ",
  "key20": "3FUWUeP9eNQMV6tDR8HUh5WyA1evy8La5wQKzmyqxtghZXTiCFh8yUTMAfeQqF31LS52WKwezXxMjo5vVNnQ3pDZ",
  "key21": "SJjbQQvD9Unm9YYsqeJHZ9x9oMrJmg87pSZyMybfeNwm14fhvDPPYojRyhiW2x8jjp9dADk389AcKdPubbz9fER",
  "key22": "4ce13AdeZYvuqdtuMzZ1zti2FSGkUwANBD1QPS8w6CkbuFKSWgP9ffx1WiZiNePmrBx1qQ6Cp4ZNDsYxfMkV2q3H",
  "key23": "5nKdQEgLVPBcqQqeDF9wfYeRUyv4RgYyeuKd1qJ5iNUUpzu9fM9i7n8XoAeETJc9639fn3FGxzF9HAQLqLBJUfyw",
  "key24": "haLJMd34SKWxTTUe5GzurS4oFRbXMiBDSSYxaorq44HMCAs6udmf1v4wco3YRe14P71NMXEdd8Vq2jYF5VsxJoM",
  "key25": "bpjHvjYYa7DVmUGhLL2bT3SMmhHH1jNRLQkzx5H9wsuUFhuXKnuR2LAjm6hzp7ZMvh3o3Hok4TKLM4Lc2WUJ7KJ",
  "key26": "BAN42oKr3jQ54AsvNrXG8JWEKVMfuDc5UNdfkCzxZN9HK8esbse3dgrsgdCPcZX8AtzCHCrYLWbGWKrdHDT7jxD",
  "key27": "3mPNUjPUJopkNmzkDuFUmC4gQ8Sjs4zUbCuVcA7WoZK3XRt7bi2sE5KNJZEbB7q4NS1pvpuv6zxsdXNdgvmm9zKH",
  "key28": "nT4Pe8gU1i1eS9AT6tptyNoRxtmJLTtzt6r2Uu71eKB5EEVYNiEMJjnnmvWpHmqmR7JzM2Dqk8o7LzMAGZUjojt",
  "key29": "4oCVUyXdcdYqCixtY72nHHK53YHaK7JW5tNsrohGggJKpNfdXbs7ccnsBapDfo9WUDva5CofNj5RAqsa7UzHEKPS",
  "key30": "34xpWiYAjV2NpZaRYPpCwRnRpfAb2zZRsn2DmZN7WJ5ZGBCwf9xAqu4cdkYijmWjoyxEg76NFGECVJCTzLfBMe4y",
  "key31": "3qd9No61KJoLnX5wetoyfe7ooTYG1jx22LUHgMVPCEYqLsmMucTgmAUun86E53D5NTe2BhwVuC39zi4ZGL8YBKuw",
  "key32": "4gyKnCKu8wUaBrLFdyYh5AEiPcimyzhGVyPBYeki6BNoZXSeX3sc5MraBSAxhprB5MpTQWH5yPBJ4m4oeNb9ixey",
  "key33": "u1Nztj8ipcDxbmVHpG49yMR9huCsdDZwxy8g3SL6jJY9M9NNoQqbUrGSuQR83E8VjtptjP8ep7czoZiCFxSrCVU",
  "key34": "4QEzcBhpnuDGbTGYupmpQeCzbaRq97ZPA1BohfD6aT4CUR1K6c5pxqwFgDLU1pvpi59PoJgj7TNoHA4nLJ4aKeRN",
  "key35": "JshFp9URFyvgHRRnzdrF72Kx3MGDCEFKxadJ4LDrjW6r1DLyorwqtzHzZNJyadqBRRa9UK5GChGZDqPj3j5gwhp",
  "key36": "2uUGxA6hCqoE62A6TkQR1DE7hbLXEvVMKfUE3jAzT3gQKhsaSAEAZSPLnxcfSqc4WAATURzYyR2XGdWybLMqQuui",
  "key37": "4ZZg3SqAHm8eydbcs3K853GCktKMU7o4q2NsfimJu54UiDkASawykcYXpX2wSM7iuBPuhrebkrBvamjEVwp4xVAe"
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
