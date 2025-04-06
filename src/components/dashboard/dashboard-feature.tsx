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
    "29xKnMFLnpAbyh3npTmkDQW4x9Kj9ESA1C5Wzz6N3dVmHNb27Sjn9x8Px5nwrThok4R2zix7VbBqnQZeP5GF8ywq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tnL7aohjirHsd8t3dHQ8ZEHwwEfrziJoByN6QWr1kzHBMsRGGz8hiC5FN5cPWptpUKc5L5xgWSaN7izPcNxtmSs",
  "key1": "4oodLxwC3k7Lyk5tbjMz8afhJivbgh8iB9H27ipNPaDCdJfq8NEMznTxpAwLBbDwZaytA679St2howPrNqP6rs4z",
  "key2": "3jnUyETVyDWaq5CdyByFjM83bzbisiMQ3DJZkD76tPmsYPimNKAVnWJMV94qDnvpGonjptK3dE6F5YimJ1J8Cvfh",
  "key3": "rHVpY9mymEGUrKDzKB1nFjkPqXvgTXKnF7qgpicNfEt4r3PBWuoeo7FtNxWcV7FKVERZSj94Xu2hhtwNCM6iZti",
  "key4": "5UNbSVenhnJsgskCiq6vepba8MN67YAQXQSivb6cZ41tzDe1U73CxJbLsCGoPvayvwTeUTRaBF3J2oAJ9f7TVVEh",
  "key5": "J4w1rrovLZbDa54PC13yh7LYu3cyDjy95Ye2E8UCHNbRL3qq9rTwtujsXrwVJRygCdEfofBstUj8F3zwkgdxJwg",
  "key6": "5KQx8oN16LrvEHqtmE9rydLDKxyn5QpjKm278Gkxa8P8vKdJ9u6ZefK9Mmxdc85BmAGi6a5qEWzYGmatNC9rXaQ1",
  "key7": "5eg1QkZEFHbfPPeKBqMCVihzUf9XF9tmG4k99Ch5zK1UrmUQm76u53NkwUiCNAizvrHrMeN9jq1xACQjgjCCr6yc",
  "key8": "44wJcxXXbpkWu8sa6GfT2VsHtLKfRganZnBbKUo497R4v5Jq9mV6rywdqLYMkWd9duFDm9eXc88PdEKeYRZL2dFG",
  "key9": "vZyKC4rukJWMqZ4kjgMwXaV1Mrm5iJtZzck3YnCaaQEZZquDuXbjbnUfQJWef8KtQEMCJeThunUteHeHxhtjaDd",
  "key10": "457zBkVTE9vgcDg64rouUroo1oNVEckoVeNkCRdqJu2hwrEcSi1JbuPGiKxxRf6156STTLkq3zXvwUZ2xGMwU2Ls",
  "key11": "5oqz6zmZ7VMBbigMs99MqJfzB5kKTKwR5HxjQmiecPsZ1HfHWp8YVkJDWMGvZg1XZ9Ve4qnkgyFdWZMQBspimNo5",
  "key12": "2TNtAN1BhTAyU5zrBCYHjL7uCMnaNTT6QUbSob2qHS1vyXGEESMCgr3SAkH5VvN7RrTg7apYBrzyMsjsn4cKbf2a",
  "key13": "31vNKPjbMgcDbM7ZSknLfohNzpvgx4Vd3CjbWdng5hNdAkHYkA6CBKNmF7uHKn2V1ocqBL8FjyRFKN7jmsq1F1Po",
  "key14": "5Wy1BGtcTy2dHWtibXCaJ6XHA3mZJhRfLXgseTMiGvnMBPKTvCzcpYNvX59NhY4jAoDK3kVm3uEFZx6DXjmPhY4X",
  "key15": "5XSvP3iynS9XCQ6KCZWoggAeTW66DBs7GkgH7BekRfMZ1JTrA49wFxDcYVZwEv2JGEH2LcTYMSc4Xg6k9dnhRYck",
  "key16": "2xAV29qQusWpo9quyNQzKZ4YfAh4k5n2Rb9oP99B9KkEPzkYFm1kXhAorm5Z9tT9yeg6vVN1RoGZveMdp8Q5QCwH",
  "key17": "4JCbUwbhP2AsdqzKzf9kTkgNHVe2nB1zbT9qhJk2KRabu4V935Cx1E28mN3EzevT5M6iZqh1sFmerMdBt24z5owt",
  "key18": "2dij5RG1yL89fzkenvv4KE32gVYjHjQ8ihES6TvqH2omu5B78b8X6GcH5DeZ9hjaNaicdUYGGFTEYpktTzRMpdP8",
  "key19": "61WJY5QiQP7vkBHmevSCs4zhLiKZw4BDiwtcJwc7qUt94vK5dKkdqqMCS1JQdEUzn56VJfoi5kzqMH66iWNkofN4",
  "key20": "4msLp2jDHihoJnWp26sqotqoT4HV3TkBR8m6fHLexbY6Y7A7hnfA5dPWRF3ChQGRCf6bhM2joEjRYceDRTbR6sgX",
  "key21": "3qR9YXvgffkX798JQgY9DafeZySTEUwz4pwbd8nQx6VtofYmLZ73UMSaDQCbNqiDFwcMg3Kz1LRVFDzkZkaUeYvq",
  "key22": "gDddy5gdEYuyYdEjbLD767jh4VVcS5Rm9nXiKVCbjcha2jjrUef5aGsye51ikeHMTTfyBdfqzY89Ld3ECurAvVe",
  "key23": "2Q5C7VSoeGephUxcMz345oyQWpmzmgNUngjgcjpbo5Eej5X1hp2LVWMqfbcJHgXhEeNWKybpddC2RnbBAsfoZj44",
  "key24": "524xht799xN9Ty21PzB2KAuyWvv4PLysg7jabSqd4ixuyBDWLD1Ga6yUhxF9dh5me7i5pDGz2wX1Yap8A91Shzjz",
  "key25": "RxG7Z7ttMW9X8d7e5QtGaGrQd3m7zJCmytZN8i4dtLsdgC1zRaXM8kfe1E2KXAFvBmBoj8QSmTRmZF7ZqWHMi9b",
  "key26": "i6pkmJKEziao5zbTJECELPYFBg3Djkgdw8RFwhBVF8CZ2SEk3nt1g5xrK1ahqSnQvfFgEEC75TBN9nrBeLuxxco",
  "key27": "3oSHF22UAkECbnFfeuE3Vx8ut6ZmmkVSgtY4ubqajU7hA5DgEBYFwMKdyamNtkmehCN5bHFjWKD1N4e88K3uCWae",
  "key28": "EGa7Q6RbssXvey8FfPW5Z8i8o35sDJSz7hUP4LfJ2FQwigEFtg5KrwhNPRrYjiNU8yB8eLAYqa4H8gp1uSkbNVA",
  "key29": "5nmNp3NwdFBNAkHai7b6NMyy29mcb1SEMmePErQcsArbGDbLTLsstC955W5rpo7bBaUnYLBUcJXDpdZFhCY5NyoX",
  "key30": "2hr7fRw2gj2xnRH4zKteZqDixq5ZbKaSkr9ab1w5Cxho467XC7BSwkM1FN4hHPDE6g9gUzcmmYVeUGd8qVfL5DA7",
  "key31": "29rdPLjLV2xyZdbeSyU3FcPnKnFQ1mmXkrFDiNW4wh5RhGPe5CUsD1jiLL5AswPb6Yh6GoNYk1SpskfHYoARpeTP",
  "key32": "5JTzkwEK7hdQzznksf79ir4gUD8nJ7VEe4MDySWYqWqSBubqdW3oSnhnF2fkJMWcv5NYME3HYUmwjJDNg99MnSDM",
  "key33": "5Gm9ijXvrGM6nXmT6bCiFUibHqGLXMhpssFVNDuC25aL4fYvkntnSc8rSSbR4pB4yBCpSUnY6UkcNcZ8YDvBMRnm",
  "key34": "o2VcHk8fL3dSg7JhJbYHMBNW1EuJQD98huDkKkFLKnqwKbx1k13RfLTjk89saHwc5zru8vYZGeCs8GTd5ZNJwHw",
  "key35": "o2Z5TDS2Rvt7XMzS6zwYoL4Rb4iULY9oGYKfeJx6bCt46h5oV5JLBbtomcJxKsNdbqwRQwVMSXcjNLQRS2iKJm6",
  "key36": "3mcu1ro3qDrtn4zs3AcmqFXp5MvRtSUUC55AXrt9zpdWzSZTo6N1oSvk3cV3hxELroq3xbaFe6GPbu7XynGNp3Hh",
  "key37": "bkfQxPQYdVgag35yrZYbFLmHhWt8iasPWHL46pUWwEiNsnvyxyA2sfRwr3JWyQZmCto1G1NtwnFd2FSnmnwj5t9",
  "key38": "3Jw3xu9WdxCjrPu9nqnJv2dHb2gb5bwduLxr8TVVQURe6j9DtaxHYK22VusvFmtK4g8o7nwhTDoKNiGn5VYNu6yV"
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
