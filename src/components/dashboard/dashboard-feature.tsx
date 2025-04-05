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
    "3jP7Q4TdbXc1xNoL4pVTAVF42taYVdb2yP9UcSAwx7onFDdALiojoDScDMkFS6ENX4RFfBb3mYh7bQDiaBTxxUwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62mEqKJvrsbRpbuxJqprgsnQB8U1ZY8NjFdkexpwxCTFexPizugHJDGojtsZ4dd4PaU8WApccqhjNW9Tu68PpPWz",
  "key1": "3KQyQRu49sicx6ZT5rbqMqV9AGWDmUaE2rTmwtPMcLdXatadZef1iYGje6n3GLwTgg3UAfYCqKuYxukZ7beWcoZZ",
  "key2": "448UPRhrXPMJrYfy8uTquzGzsdjPMyANYYKQtUGUmyQozP8HZowcEGbKWCdPyddZ33BZJM4bcjE1HCKBY2xpumTg",
  "key3": "3NHQUWFMacEJBJz91sbotGEK9Ldr1yNUitQsHucdZinhQ3UiNZ484zxxPqXWLEwFU3CN7ZyNEQgPSCtsjiKiKefK",
  "key4": "2EGJteu83DpMPxA1CR5HsGwgUctZZumpM7FCsVHJ8zb4wYSLeNba6H5iJzMeKGLF4Lape9fZqZ5aQGvXTaCDgtW6",
  "key5": "5SsHPtKC31ZnzUnSs6d5xbCDHXuUnS1NA1JAAUqrpF6xYnBQrzVq5mChRt42LAEVCgiREJBYfQKC63fa5kqMrbeF",
  "key6": "R87D1HvMLURWVqqaXzgvmLw273SNwP4aY1Z2FN52ss5o6isnh5H4Wvte3Hzb1ZsUPtZWxGA471F9mvhxGUpdoNT",
  "key7": "5LJwdqGdG5PwCvTDN7vGb3Hj94kmamNHcWvX43A9E3vhSX2BdsFV97exEVDUTkrjw3TK8boRGbprs47dN6FjxetA",
  "key8": "4SQ3qBQcmFe452Lt5LCvUnrGZkXkMP1gRKguSJcEqWwh2foiyTNJJWRw8ekJYWjP62qpVqvKA6F5M6MnC4Cyk9cg",
  "key9": "ZpfF6ZEW35DUx1UX7TVU6eTz9UZD7RFU8RieLAXUSgotkR4RJCb21a412bkdcWWKSfGeSCvKySZFT4EBEUEPKnf",
  "key10": "3BxAVnqBCvJdE3jXFN6BV4kRoCRd9GTuQqYCZgP8QSBbivyNYQQAMmSkktDujdnKhjFndW1DwmVN3q3sFH4dPMq",
  "key11": "4JSoLPM2nvfhHyFd9wxFxDDV5YjxXYTGjTjAzHtgxJBFTeeehKKFoKmoQq212L8AfQs7ofURdRjyF1yqGn2LEwPX",
  "key12": "4qQYXXsjV2LfMzMJ1yPmgHjV85QNi8XmWDLHiUzwU3xS5v1fvfW7EVfn9dyE78g3ZUuNGQDHrnnJoh4cVSBJD3EQ",
  "key13": "2NhjTeMLUSUZ4qC2826zrMoE2gDAjDG9npNdPi9stvkTBokzwBmkWkBk85GxRCQXeZaKz6C6rU4xHZR86YXgNCqM",
  "key14": "5X6ywFLJBDr2GA53CxJdZCPT1tSMntvrLFDLdcKf6ZfHV58mu7HbzzRyRvQ6ELCNW1st3LTfVbe5EjBFbLYcQqQ7",
  "key15": "5BwRUx2sFsG9sacN6GuahiZwWtJ6G5PjgUzRXzr2zX2dK29SeeyzWLiCpvm4QDN3GUt69z7oprRwpXmiw6ZUFPSH",
  "key16": "2EMdEjnNQeC5cSFiA9rjEMvY3CiC417cYhVetHywePNWxAuRXMioj5jjkVEC5x9P1M7n7yWKeKreWk19MCqMTaav",
  "key17": "2YwmidmRrpXQ9e9DiQ2pDmNuE1PZEo8Sc4eorTcjwFEfSBjTiN9aQ7J4SLE5RdY5TWypd1r84vFLLRMdP3oHRFB2",
  "key18": "nCswfBeezBprmDvDvXCrJSoN9n1FhfmDBs6Wm7gDRrWbcTdkDHzsDEo4kNiTrWDUYDVv3ARZLVJhiaPqxb2KoBb",
  "key19": "5rdZginybFJ4vtq5tRwBpvMusKtZzxbwr3GMyi4tsoBggrSc9ahjm2iKFtueMwQtUamy3UjLHgp73CY8esog7AWz",
  "key20": "P5QYFurSBdtSQ6gBswAwQ1R9xS1hkAf3sAup5XN1qeEpJ8X7YPbscZygQ9bydE5W26MHzCZG4kX2PWYFfJDes64",
  "key21": "3dRWeMCis7mwFZAN46wutf7vu5SzEWCq9SzFETHWFkSwQrNWUCMgWjL5XJxaHXs93ZP5Ftdoi5X7Mpy7pjCkYPCg",
  "key22": "3EXKAe5Rx87JbamqZ5SmJ9BrknxprkqUygtq2dqNTqHujgqvUBpd4MwbLc231s2VZQwL47WZsHCkt3KfdLtgM6eB",
  "key23": "38Kcptbz3M5o7MNdUgWBzDJbsF15yrKdUFozM7kANB13SvWpsLKwNzU1JsPeD4SyPYWJCR2RqEjpY7zqHDZSujwq",
  "key24": "2gZ3TeFq2Azxg4PdSVHcALRvTfduc8yq5Kxctj6nuWGj9MSGjVQWp2t8StYD99KXB4aN8pGo3PCfTrrpovvehrPG",
  "key25": "45cQs95Lh45YUyBsHVD2n1wLnkUvxYb2PNBFbA9jWasK5roxJ8FbKQfjXR1toWx41RsxwaHzdZuwHqWTPdLx57GE",
  "key26": "347H8Azf6Co45d3jmPtJcm1cytQGQNt3NpkDnRcKtFHiMZauhtJxmzCwoGqTTAuwpeTKergHojvsG7hvEsqF2CHj",
  "key27": "5iUBiERed6phmEi8GpgTrwGftSiyBgyvHtgi458zsV9AD9XJPQqbnqRifrpeWVMU5m5zXgSbynAqVPScs5LJNumK",
  "key28": "5JGgXATaVXrRrBVXCL1Aw9XxDhB6sHaoVGaaytBDqo8HaV1k8GdFYG6LJLUkeaQS315wSRoPQTxtiSxDUCL6nyHo",
  "key29": "jTW7jb3wC4BChP1b7zQ7eDpYAhqfsGJgoETi7w3e9GoeJQCnbAUHLSLXmcBZAEzYrcM9Bb9FhfrFhj979UAqWcu",
  "key30": "2xTVrduQ69mvYy8Q31NYT9RtBS2gSYgtPWE574BPFvVYPBioD1mPTNDSo8mUru3H4tc8kzLcVZ3jVNV2DV8skTzj",
  "key31": "2GVDHm7inmGnozyxCWdV8GE32KBmYac7ymojqcJUbwPnPRuaHW5r6xk6MqRxeyfxY21SYdh7pgPQjy6nDmJAmzqw",
  "key32": "CbXY9ucs9VkYPuLsh7fvmKbSxVGkUsRB9m2v9jR1Ay8bnR3kPgw6icQh3anTRMX64tT9acskHdbZcHfWajKkQZU",
  "key33": "3rBwZz6LNTB1QsBZ3tPCq5Dcbg8tHL2mhPp9SKd8q9iL3w1LJi8vhHRSWQ49MszYmDUJVEHhoT3nYPXqGNZyGukN",
  "key34": "5MgjGTPgkbnwLkC2cF7TJoARr7vR9xi1zZw8MrpnTspF5qApXW7sDeVamWeSF9FnUryQ9p8aCAo21Vt6KfocePKf",
  "key35": "4o2GV4rmsop5SZRaKyRFYwGsM6DQwA9euqGtE7wcxkTDKshsG2xbN3S2Bq1u8zuMHK89htm35ZBWaRxG4dWy8N3R",
  "key36": "o8BPEhYGWDTtyiYtgAspAYDqa97T4KrrgwtryggdAtW5uitd1yxhBEVXSw6eZDa1phDWGy5r53Bcfc1FY8qR72G",
  "key37": "3Kc9S4ohTGHDkHWRu8yff5dFY2FEgSTDHgcLxKhVs1RuarwJ9jXR6NkYNkJnDwuobsNjNV9M2iA4a3u1zVQP8BGD",
  "key38": "2oXr6AwsrBRgVmR6pf5QeFmbDQQWfeJKxzKW3AqkXWrpQJFCgm2jhvSgevquHyh47auwqtc4o6SppTxGqBHRvPGf",
  "key39": "4VGhP39FHh4ski8rpZUfJ3Wdn3aCWizckKisuxQkJQPapLxocyHx6xumsf6jQyxpQ65GYP6VrtNGtiDtAz74KYtm",
  "key40": "3bEoqfY6AcGPE1Z4y5mVXWgpKYKre3TENQQKtfe8qEiS7LJVF4XkB24qVQ8E82VE43buWgMXCzSjGgDL1S7mtReR",
  "key41": "5oEdSMXTqDdZs622GKYyuo7m4iXHqjSnM2UMMy12QZFBkAUiHDtEpra6veXwNtA7Fm6HpYhBX5WGFf94nx371foQ",
  "key42": "2nPzsotGKmj76f9JEPd1ca5WcAyToSh7TjiVnxqrTc17U656prLXjPtbmVr4EtFjH4azQtE2fxf3F7ChUFkro84D",
  "key43": "38A7TfN6YpBeGt3SRXhTsqiDxZEcU8WcZtiLgKSFGCUUdGzbKvKiaiuJeWhfqa4fzMDY14TgPz31QdqGrx1Ef7V4",
  "key44": "Fn1ze5NZFHh3pqfgTdTMcmN7oxZgCy96eYbE64hd2JPi3aGacXWSnKW2Pfw3TRCwGY8pJJSZJSudMhiMQMLL8UV",
  "key45": "2SC49WtzGGXp1U17YbBzvTiuJGzCqCHVJZddTMxfZniUxDvNgcEdM8XA4egucC1yB6DX3RfcTHkXGkorwRSvtf6h",
  "key46": "3ik4n2FRS38wN55NDEZFnbVEkGuD64139oiSNvvcs6WUVMQStb9RDa3o1FfKb4Fy6z64oQPWtDeVmPJosnoYGx6Z"
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
