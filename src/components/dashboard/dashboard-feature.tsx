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
    "KPsmJy3WXJfxzAUoisLT4YHjVS1oTVP3hJnDCcwDLGDLRGx7hR5zG5fvBnpi6LspyJ9aUFxTsjrwprWiev2Nmy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mkdR2q3R2b4HLsH81NMr6jsLL8Jw517zKKmp6Hu2UAKBDACUqnbFw4H1Aj1gjbhTEsF6c1WdX8xp4KCQFN4gD4r",
  "key1": "5M2LggeCQXEnH29d9N2qPJvRMrtFeVcMgzcUMESCrgtjUrHYErzRRETvKKR25YyYztKerex78iCcNgzwGJ9PucAh",
  "key2": "4XiWryqcZsCb8ACCZw4tdtGCbR1v3qwXQWa2NL8E9mMnw844npaowQSJd8PwoztCEcaBU3j2kKkTqaJZ3M7QJC4z",
  "key3": "23MaMhMxLdLEGJmj7HSWiqy7vWsm1QqRTJ6yRpV6TgVUmawKQYmsveRXRrHqRYxJUpP4b8BwXDomeCGwbiJNyZ56",
  "key4": "3sJPvrLCPpdcb3PMovR82ko5gdKXdJwgqv5Xy15TmtW8D924phQ6Nkc2bpfzhcK6NLe9vPQhnGrrBpYUqewq1ZeQ",
  "key5": "3Da2C9nZ5qg3MMJdWxPz9jjRUv6ERdomxJycuyCDs3yFEk5PaG5zifufv8Nn4xbxGUp2bYn3Wcc2tWTTk6WW8DB9",
  "key6": "7WiwPgJ6EsYVXKis1bu1jm22mcxtDiGiMUoxJXjQyLE6HPC6wcB7f974iLib8NCFFig2paXmTf7kWi3Ydtz4RBV",
  "key7": "yFS1x7Ns3q8qiXzvNEiUjJUCVNdDSxewVpRoNzZDEZWMCGPpVCK7VMaMC9i5my22vfndZAHDCsk7zDpq76x9z73",
  "key8": "Mhn4dxqyfrGRbk9Q2hiSpBtBgerSJvDypdmWUCmRfvm6DUYqXbdtyEPo8WRk13b1W5s3AukQeqRVLVvyBaxbBKz",
  "key9": "5Bnp9jzBjYNxKxh62TvwJYdoJMPwj7jFptTdeZoki5gVExndXMBQB3RAM4x9yTdChRAhgqgDzp9xVTcQhHNiJQGZ",
  "key10": "3gsNjtNLphKmCWb1gq5yHsSXc2mBGxuXCoSJHHgBgFDPwBH44k64XPnAAunydJh1rFEzaBTqm1hdLYJdajmDv6oS",
  "key11": "4vuSdkSsQorsLRH7eLTupGA6zHu8j4yCP8kjCaegaUuGXfdAEmfL9T5jaiMHtgM4VsEBndR7sSCxWSymP7HKJn2Z",
  "key12": "QTvDFgRNqb7TjiyQFCtj61ropz2qFRPzrRCYWrrxi9ZgtZubZJCR13kXBCrwQomSzu79ZUXe5KXfoc7HG1Wro41",
  "key13": "664WeRt4wUe54kr8M8ZgsUF5nXfTbMSoHg5FU5rxsoruL64aJ1a5kue61WngcGAz2jva5qWuu41qHACv6pfW8R3Y",
  "key14": "2pGyCTadzpVu46giTk3K3qU1n51821STqZgQUQMbKG3fehMywfotZ17vWgFnqKNVnzcyGmcS58o2yTxF3tAzfU73",
  "key15": "26AuHgmpdQVK2FErEmvNsyNNzmXzWB2FqxyVnjVH4od4kudW5TG6877oxopfVAYkDPH4fAww87i2mtZwmmjxGeHp",
  "key16": "4Ta9CZnQBYq5V6d2UPBuhVsRaEyrC63B3pTWTPC5eK4zk9mBQVzxkj9WWn8Sz145m7mFbrgDRzY9aEYWEGRXQYoE",
  "key17": "doWgwXaTpgCCd5bLiizBFBr6PZ9G4MxztZcxWt6dBVke1Drx2189zsjokrngjr9nuJgM4ZYEbe53vb8YwMrHtw7",
  "key18": "5AYjJGQkTUrDXBRMSpsJqtYSRkeeUf1RZB4x1wqRQ5ZXK18QJ9Zi8AhRR7aU4stFLsXoqUg2gYieFJQ7a8E9aXiW",
  "key19": "5MEji9UEeUTja4vLY7LG5AgHRyfmy7Vmp8dKUPpvx7P1KHJP64c1L7EDupxeva49RyQb2keCDG66PyVNBnw2kUL4",
  "key20": "TrDRbycqEddghyGv58dWoAAn2JAe7oLFJxrnW7zgkQiJPCRQGnEFzXvtnYYRxPyn1u9iACE4aBogbN9RVL3jTbA",
  "key21": "5kpnbrWrZYTKGLysBiRbZrM6rYDbted4AeLgkwHGm66yXARriqmaqEXDiUTEnBa1dstEFbEPq829942T9z9A2hug",
  "key22": "2JAHqJvfYUPsQW6JLoagNPgA25aqcNrz5pKteCUwQFpnsYcgbqv1TW8rKMDhcLR8aEwwRCzLBUTdMk935WiG6xei",
  "key23": "5v8bHzubduTxFsgMsxNZPcGS7hi6pu469bFHMraPf5XY63XPeQihEZoc5m28cpiSi4WcVCX97oTXu1BJr4gYeT5D",
  "key24": "2jtCZVb2A7MgBrBVQxZNHi8KQB6UKsa4VbdKYin2fEiHFNepbbdxCsRAtj2YumiXkpn9m28L2K1Ffa8oxgmp6ZiN",
  "key25": "3RBBL7nxyK4oRw4cfsa8U7n3AnCBswmcWDgiRGh6LCFCS3Epa8QZ2KKr17szye29EyU5dZ6gP9yGrpAfaYM8ET2E",
  "key26": "3KzAPJoJFp3L6ZFMXYhoqE8RKDJwWRn17F5Ufd641wA5T1azVdQs4LwWxsoSYgLoqTM1KS3oVaGWB3sXeaSCEcd8",
  "key27": "4eM9yUSzkbWhaR2SpTwzYbHH1ik7269yusEcgB4aMcGTge7YHi4sRJwybRhVoJrKNsy1TSEEEtGmsG5U76ii37b4",
  "key28": "3JNjCnno3XBUtUL3aj7w1GjybpPHVZXn9mzRPNQ4thhRcVGFdYXWNZmK1f2i94MfUwM154BF3tdqpxvqpc1WpTAx",
  "key29": "45nWU6otkQuof85JcFxojvncEMZY4dK8A7zCVfvXpJmpK9zaP48kEox7V2Kdr9qKD5spvmxY5GGfJL2LSAHvSiMx",
  "key30": "5piztZeQeUS65rASsXuDKAst1zThPmpzwUXvGsHnJ7SKkaQhuintxZKrQsQ92geANaKqX7T4k8tzwqBwpCJuz2SW",
  "key31": "5yoXqoXM1RxNoFADEuH7Pf1b7oQF5CbrMs4uDPMYPT7jg4kKesqWLN4mqg2m9HbKnNpm9NWeZytaubzJRMeXkzq9",
  "key32": "5xcY1r5FiKmzMVqyyepce1uucFxHrQ44tZcaTp7vCugff2RQrPS6xioc6Q2T9diA2ZWpCChWqQ1RYV4M46u2wuqn",
  "key33": "ufcTBd7EpzYxiub7aSdVvdezMi9QRtY9ERbGjSabrZFTG7kPZWy2jonXGnX8M1w7KDgFs6hsNMcgHAUzti2YwRY",
  "key34": "Z2BNEwAk2pktaxXxcTHx7vwy1sRRt6FLfQ5r47ZfcuuHyXFL1BsUQ6QLj84RNZFJqB9iFx2vzgQnKbEmbuc62Qe",
  "key35": "5mDvKLVFUkj7EYVeUojo6Jc5igTg9HG7b3qRn4BewGz4Hjuk4HMgdmPYetm1M6ktHdyQYv1t6rRGCnNzrvNbD77n",
  "key36": "3VnVDG7LHZtfqaAoQEdeY73SMbyvnVbVU3b2eAuZTKrYDMMYLKJTnYxY6ZFzALwnpTxoLNmodruebdqZpCuCYh9s",
  "key37": "3h4pLx1VUYaCAZR6mQg7zD7WdAz1dcKfHv5ozN7LpEv6TCZsrQfzFSggM72UcixknKaLZoQfWXWndTcwWWPDGhyD",
  "key38": "5wUtipuaixVPMhU8CLwo3oscPLfjtXWDsrww6dFPbuZ74gHpNtANqtJ94K3ZP9mmEkEXvwNoP1s3hHTSeQ7VKTjh",
  "key39": "hFYE7dg35hb27iTt5q1AiGGJfAt7dL4J1iSSSv76nLggo4KZdkkWyKKZHVFSNQa33jX7eHR2AN51iqPHTfC6hCg",
  "key40": "61Zw6xioikieW5PkBUtwxJCPS1EGDpJ4bihY21MXXfZkcswPe9qpXA2RFfv6UBJMLju6DkyUfmVbNUkNkJZCujzJ",
  "key41": "5gy1aC9syEXsHYxKSx6m4F5SVMThNsfMJoaEnKapvFpGB2NH4oE1FzPspX87DJEfTd68Tj6QqFfFSDbRomZ7DFwA",
  "key42": "2kqWddDBT7yGCiHbsfUHS7eJGVf1mGYEdGh9VCdHHT3QY1aGQRNk5YBz8o2xN84FhWUUoG1DbkMMTvHcatxSzAaF",
  "key43": "5LghEAbqrqmr7jsZGKDUR2aSkpxYxY9hHeJJtqLRKvs6M8ka1buFLd2SVTL4N52ioDnn8EYRsBdXPkcoeFdoQHH6",
  "key44": "2WpyYKrhPjpRPT6BZCYWzboANCnzRpHCk7atacfrp19fqyMhqKe8u5edsDTcy948TRRyBFximu2HXT9NbPmt4zn6",
  "key45": "584Gzcwgb8dafXdY5CMmyV5AKsvaDisuUKv5JTUTt96CLBS9ahxdebSfMsoACoukBmhy3CwDjDh6SGrs3rNJY1Vc"
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
