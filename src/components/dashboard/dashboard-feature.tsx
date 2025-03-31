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
    "2UKDTLyN3qXUBVvWgiDjUCPguyZpX8BipSUvEVC7y6Tx6PRjCt2QyewXuqM32f1YGfFP5vzTebGLfJGeGwN5LLt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7ioGV7wb3Ki5jdkCMybSDNW3LGqkx4AujcxYJHUZeB6F4mJTTEgjh8LQwFuy2xTfD1WNeqeoDmDHPz8JGj7g78",
  "key1": "4zuL7k14sLRZ2DHEcX5P1fKHSLF3mvwB9ebs2fbXTGptFdMB1MRwMk8KnABaogRnxx3132ZNgzbBDyaVQtqUYVLu",
  "key2": "4hgC7Ckxc4BVpJa1Xp9qWpCXBpgp9krPisRSK4msemWa5saujUpdwMBHMSMK2SZ42VmtggVjbbUgcgKnvPSvT7t2",
  "key3": "KirHNCzwrxQGWJE1Ao2eGHSqjEzZEgAkmehRsbN47XjdWFMqZM3mJoyJz2YacDgdhefxUm9CFBsKEcEzzx9rYLV",
  "key4": "2tpFHNgsn4DLRTAnRQJmf3Dyp2Qsr9fezgU9UZ7MD24BHp6dANPJLxKAsT2WiJwyF1TAEdNpaRjk5ZU4BncbuAhK",
  "key5": "576nu6AWHwdVLicS4PWaK1LCG7kHiKjkHCdAo2PN3tBBup3XNLjY8oN5vtDW2ESbZBc7zx5CoQ7mMj7SMbja6Mxk",
  "key6": "3FQMD6NBvDfkVBctRHgCnbd33i6pZt5WZCZdrdTZ8E69tzBWJedj79HcNgDcaVkBpn5eAKxAcedvYpKE7c28p4vw",
  "key7": "2L5oxyuj8hS1sdCQqNdT8Msr1mXS1KRGfxLghNsrbpVKCBjDqm1BcVy91kpUQGU4ia4cksLH5MvW4RN1puRGvZup",
  "key8": "2sRLAQJXAQB2ng1TerH3GhjRT3KcDybJ7c72v16ANcsj4ZiiNY7721a5MFJHVeqrFXxf721xTb5R7othuViAzz5r",
  "key9": "2c3NT2HqeXwtZV7AZpuALyyHu4tRYXshXUpXEpyqZGLbx5RQ9zDK1H4rAARrBdnFeVUqHPSXGpRjEZ5mfYFkE1L9",
  "key10": "5Temku4btUnrugc6bm5qbbRkiBLMFT3gsvaFSuRXLgR5W1BGh54AKsNAYciKsDQ6VFmAFiRfwuUQdRTvRYNnHT34",
  "key11": "4FhvJDkF6hmiUJPUbZPGYjp4eiFHDcfSbnQuLHfbFohr9Y6nDFVrQnXidCTRgVktTnezsVbRTozasupwL2LxhNQ9",
  "key12": "z5pRRYYtVW5t3PRkXHDpfxjCrzRruWmH9H6A6a7Qn77gF6P7AhPTuVCpi8cLvdhnnUhPpuLekz3G2sHX5aWKAuY",
  "key13": "5GVGfmmcohpENq3NQLBkVYiNGon5bMRXwtEwhMLubcxxuFpvowW4J3go9c9qZepPqCRnEih9w6hQsybFc2JzaNq",
  "key14": "4MztLPgXjsr79vU2jNn85mMFz5DxEDLJc5Z3MAtPvjPqfJgRH9bqUL8DNd8pn6jUwB5GK3Nj4kimZ4eSsSJsZEn1",
  "key15": "4EJktQc2JuEvMakRYFrogtddAFiG8vDK1qsenXU6ToNbQ8XTySsRC4QsjKMfB7Do6dV6dR14TxEqvX3BuXwCx3Fp",
  "key16": "4E1wMgpreHxh7rVs3kn5a2TQ5ez9naStL4LgnY5QMuuyDsBqhWsdohWJEDM5EKLDv3oMBeKSQocCFsRaRiuH7Ftv",
  "key17": "41EuPvW7fQJJ1Y9AzU7pei5XH7zJxjhter2r4nSKKdcvtogPYet4Uo6RmfvGH7QChnS3uwSFNMhxyp6yyc3DUeRk",
  "key18": "56DEA2SGMMy76HdBVnmF5PPV6H9wAmCuo4a3Q8qHS5FFZ4asozHUBf7gv8BAWR9zD2zBbbwctZbtRJQyEwVAiV7S",
  "key19": "4AzbnQyZwHqFwvH92ZravAe2w4SQktqfFvHxE1H2VSEpzxsCQUiDfuonteyWCVNPfsqqiWeoLX659YTpqEq4e2BZ",
  "key20": "5JTyb3qahWrSmziB6mDTeLGpqY84o3M2DHfd8hGRwXW9KYPxqb1wBdz8CoH5eDGaySyvEaDYcTdbqUGZZAMmvRqC",
  "key21": "3e5kgHR3HHXTcECE2Qn9j1MMo4SAf3oWkMGgp5dj6DyvMRuC5ATDfDtH3un5BbVjgxTQQ8Hb8ULpcEmyHM4kzUPC",
  "key22": "3SZLC7GmmEqZJCZHCT4h9bBNg4KVKx3nUBLTAZJT1YHVDBZqJKrLWeEaVcP6wNHYEa9Fni4uVZBy2UyQsmFt42Bm",
  "key23": "Bb8tS1KK43ZwGGYw257JdVzvvi6swPAun6ufHg8QBtpEnf9qov4HMhS3U1qb3uHorZRvUJUhG5nEpJgmmuKiLgS",
  "key24": "2MfHHXZzjUr5daCaLghNNs3bnHvqZadiSfwFNFf11z13pKbRJ4mBqZRvBYnyJiEGpDnQ79MJB4xgjteZbN2VpjDa",
  "key25": "2mHnVTtLxoSKz51gfJHgjbBjU5ZZofRMJKPEP356etJQrK1XXvrcw9RHY7jahevMBpEpVvAVTcy3QQYYCSDQuXrn",
  "key26": "upq4GdkSsjmvB1mkibtPPPVve9GbLWucNSXxDCNKrdbYS9aMecZdw7mZUjTdGG6PrZYVEsR2FFZxznByL3LvpRc",
  "key27": "47ckcfB8YsXC4f2rrxv2uvHnSh8J5CmmMyBQ1hdVD9NHu1C2JzdQMAKTevsaBgF3imcBt8v4U6K2YrgPK8RPoNNb",
  "key28": "4joXTfcoLoGrza8fC3y3ByZbxAH5fkT6uijHsG1zSmQZ8BX5qGrDtHtEV9dnXVu4nkpjussbMNcqcQaqYQxVPbeQ",
  "key29": "3eJhbkhRN5kkfuNVvE6L7PzyfFTCDhwwycXgbcF6bexTmSMvyGstGsPij3nW8dDgqSg8AUu76nYW4brJo2nieic5",
  "key30": "2YP4nx8WUjQsFeYwNm5Te11cBCQMSkjQXSmcyPTAXAY8TziXgXtybZYb9putPoE8TC9UYk6ccddma3nSwpkHpiVQ",
  "key31": "4FiTN5bFeycvBqo33z8Ufn6iZKLnrKtXSgWR12zdiNN2CBVWQTqBWsWVitq4iuAMPDeMW4ek6xdx3QzXnS4qJWr2",
  "key32": "4DNsQcqBKnXVGJ3tR6NudbwsK6UuR8t9iNUKmh7MPZtLjT6uJ5u1T2BjCcQRPBk8KgmUkEwzhRgbBsyYeGgebDLv"
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
