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
    "5icQ17bk8mjwJVoEdWxhjgrUBQ8Q4vszxySXHoaUufsp9ydCwomoTe58XsYw7PfRyq6TLEBip4yRjXCz5pUH6XCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UkngH3R1JMFyANv1A3rdYetdAjsmFd3fLkMnwsjjYsaULoiB9MFeb6snoyvtJB3PAZWewveznZqQh7cJPqqwVJ",
  "key1": "3gCVW2KxVPrsfbKK6K8zEQGUhq8KVek34rD6qjv8Gzaf7NLGo8rFQGLJ7ynTMkdh9dzGCP4cRCsQ6GtSEUGn5mot",
  "key2": "AhkQFU9FijrGTefoZT9SLHNk6Yo1cMWQxKVJa1AATXxWGKgmTrYdRAZpEpE8RvRyhjaAXzSkochoDgNWn13CT3N",
  "key3": "399Zstu8S1a1fHWaQB5byWJ79eocwbndWA1iZ2TKpxmi4BbunsvZwpakWezxFp2Z2bjJZwrpTJiPTNkXDxftedm1",
  "key4": "4np6nYcYWMXtt8BcuoRbunRAEu8u2UMGrE5qa6bbTMixy132n4Zbds5ynUoWRynwAJF7ofhG7FDfzme6Fxtd8ajQ",
  "key5": "57fyY4LuT9M453ytB9FmjXtWaZNSexvJL23nKedXJ51nFxnTUZAUdyjgtymPZuuGryizpV2T82LGqg2CK6mGck9e",
  "key6": "4Yxj7Ju7uvPeNeabASCim61Aa93XcuTkV8skbFfKZiD1c62jSfA1kJLWhe5au2a8CSNA6a8mUbhrniwPogy4ic5L",
  "key7": "3R3BPd9UvzEvbP8keKGCjw3ceBvtQyKGiWowUD8UsyAjNxvjtEvMVQGjEKQFSPBwwYZ161p554t8YVdwne97DrXe",
  "key8": "4h8umW1aR53SRpiYg34t2m8r5D5T5BAFA74s3m8J4NyHdV8da96mAsdyo6FaxRi9pRtefNw6u9k2XJt9ULcVwZsQ",
  "key9": "4L3pNomcnJ1WDRb7m4YMAhasC8bzxmAdyX7a96uy4uzVG3WnNec41imnFFTYC7xzwCF3E8XNbzZrvqH2hnzFxyt5",
  "key10": "42bsGmHhrQ66LCD2Ps1wALTxtmQRoHLQninvRwfNxC9onCmhQMFK9YA2hsr9sc6jubyRBckG6j1LKDDkiw4m8FAv",
  "key11": "2Nm7uzgFboQozzVofWUzUaNt9FQTbb7XWQR81fW65eFgGTfdsQH1QGcbcX9mn4B5Y3r3ucE2EGkpMN4QFmvjTer1",
  "key12": "2jCyxHmZ2233KYS5i1zMBYiU17bUs5ZinHfwivwA5g8di6wwNL8FyhopPoSpyVCRnfpQEaZhUvnZ6mFcyMNzc7cz",
  "key13": "3eJh7aRinuq45QrJPqt53q9gr17DVLjupUNDVruSCP6BrnCBDKDHEpi2fAHXqdYjomLPoRUa7Uwi6vGgx782XsJC",
  "key14": "55iAFQwnbVubvEAFWYLsxYnAeaTF29YyXncy8haSFcKtxhtczecPFYBz6qeDEUd9gZiEXAxkJCMp29dNzdjRvbFo",
  "key15": "5ZwVedzmgyk6VYAggjyBscotAyk3U5uRJB44icpLaBvRP5fk3c42bVdWwLNvDcJHobYHJHkyXETTwn2tLFMYfmiP",
  "key16": "2FLSR32XXxnBABvrqm1TR53XDF79YBFioPrFY1jJCdpfCcyaEVMb3iWBchZ1FBGDDjTJwELJxEBGvFdUKR51hp1D",
  "key17": "2JCEEsnyEJZ5JeYRMm5tDGpSE3PwA3ZpPSFLzoZNQHT5BnRb15meRSxmAVuRxnwMrHZHv9JLLjyw3yr7WussFX3i",
  "key18": "4Cxzfmg5fQ4762611WDhoMbs6iMBJBf4Fj1sDFPAjtGabm8ANwatxrBPwUGrK15nkPwAK2UcTLuZhnxXS12d43Hm",
  "key19": "NtGeFKWpA4AFLgfKKUREzbkmXUA2jA4S5HP9JkmN6oxNn1Wk2ncCT6bdPshyTPRELMoSEeDqvXe41QDDD2NAc3W",
  "key20": "5Jmy5upTTuK5mbS9Mkh2YZyn2AJSFUJMCrtyDdL4qq9KrU5n7LRpD6X8EdY47ePw1fCpK74wqcPHskbXd63EZgsu",
  "key21": "Azc5T5q1BBZQjHTj9KjGivVh5ttBU5DK7DWt8y1o385Knc1tuRyMi6rmAJp4CXuTsM8efTpN6aVKzhB9ijLSvS3",
  "key22": "gvvTkcqSwovT1RXuwCBNXTkrnBsxe6MM7LB42Wzbaxn5JDzMzmoKb3357ZKCNxTRLoaB8TYhjkq6wwSTHBqGjBE",
  "key23": "udjqSs4wyx52t32A91Q9JtgbQrxyKYkvAgvpf7JA2mFi5M7v8EReEVwZotNnbJ5zjrw5pkboPw5MHN4tbv5QLHq",
  "key24": "4NWmGvoQGWQyvuTJHs2hKtEkc8MZfH1JPpxzEuSBNyMmKnw7eKs9tqzbK2WmTsj3netjZ9jRfobKAW3axKRy7ZKu",
  "key25": "2ZbwfdvuGEqXdCen1UCqKo7SW23Eb7TejmkimzjkeD2vbhUERc1w7kz3dUbc3g9HqN4SPxvydeEbJCZrg84Gz8dm",
  "key26": "2iVRjiXQnRRgspK1erB9HjEJvjZsdndMfg2h9t7R3GPYDEof6Zseh6YHJgYof5XbV5t8k97LWnoUTfaxbipiug6u",
  "key27": "3YsVDteih678fbQ1UoepNUiiWTBiMhmFS1PVd1fxVoLhBVQksGdSPktGNHJ6V1FFvRN2qEXFikTg6yVJ7s9hn8r5",
  "key28": "2gpQmWHmNi9yzZaUBBwLXK3CKd7NtJnucrFaKZG3AhYGf2hjvWurU8BJ3nQRVwtRNoqug3H4TNnjZ331UzXrByy2",
  "key29": "MxVJSC58JCQ1xDq74Vj9C55xfJXavfUo2cfELh3mbsntvobDfFJZnR3voaQaFEwK47VG6kvRj9BJaZmX3GkUdhm",
  "key30": "2xHkKDhSqnuBCUSiC7q9SC5gN629PetVbP16NHFWfdRvhV9qRdtrocLrj9sP5UyxeKM96JmU1dZMvpLwAcRPH2MS",
  "key31": "5h4y2TMirrGVHHCfhmTKFPqHYBg2HE8Aiwizxsv81toAeHgPcxPDvhJYostwvKk3bpBRyeVWFhyH6oAbU6nusPiF",
  "key32": "5pnjNMiUBAVVBLHBx88x6cRVkSLYx6xDo6YWUgZJdMdeqygtoJD3p7Sj55eASinwnUmjC2PhY7bBYPRSqVae79fJ",
  "key33": "2JPSKWv5PjTrk9zSaKX6VoKN3b28p7NuNbDfqbEW9ECTPWmpR1EKq4brEL7eNSU4mqfv3n8fwHamW7r6Q22UN5qx",
  "key34": "3fD9syRhLA2hXLTrLgnuCWYeANkZs9ToAJLorCrLHKWch5ti7QHqmSyXQM3pnqymMnWyethKaS5PZJaJBtHujvye",
  "key35": "3TPGxCMBuHxXjoYPYzXwaEcm25yFkL4A7pRYhwSS24WY3crALQnweY9TqCCy8Xx4TTaaiB8MVwUe8E87uTrHpbj6"
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
