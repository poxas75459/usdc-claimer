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
    "2wbxYfA4u8fZpbfupRnGyTgucwGdJsJq7CRCvmNWLM3LF7fZ1x4Dzy3ooBUiNp4cHTvsQBPVamsdKfPPK2Wu22tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmggwgmzqG9XZFjm1xuDyDSekA4kFvuwCPWki2Nk2paHzseeofd4Njtsbinro5kDbz6bexG6U49s8yn8rjfLPMT",
  "key1": "2RqvenftCuhhF8U5dz5aGHj6ZbKUVxM51nRiaDD8NnD568gdRWsxd3yiUAXzWXmpsPr5px1Esg1wGhoe4LyXpbgu",
  "key2": "AkY3aBWNxY7zBd2v1EPzLHLPqDbTn8dcPmwvr9hz125fLY7anq3myMKkYnCXVHerFGEQJf8Vqhu7UXmPjPkUdN4",
  "key3": "4TbSXVoHb2aAwwhtqLMqk2SbCmhfuQsFf4GVs479zVdoriwPZGb6g6SMozMXfZ88TJZ4nz3QPmGdf5CCEHEPJMA1",
  "key4": "63Egy4EXEFbEhgWwihnRTpkbKNT5V8NbgeQD1s4JcjLiduDddWMyLFcAwWRpV4QcvJhfSMSgeh78EWWe4mJR2woV",
  "key5": "5j7AqkHu6WAbyMjFs2MS7CPL1UVmgwfUqVgvhb25UyZd14rtGYo3sxvUm7EacPaE9wKYddbifwrctBCMf1SxTLsX",
  "key6": "2e37dnkq1qncyjdJZafiTouAMrbKhsEAE3GCCD4pyatMJzvbBgH7Q7ALWwTFBMqVNtb5VMGx5N49MEexcrA4FCNP",
  "key7": "yXnBqo2CYZ2SDpFphKUgBxrAErxFBqYkeHbY4vXGTDYz2vJkzwJqM3AmEUiLzqieb5uFsNiWfTn8fnTtNP38jHX",
  "key8": "5CkRBh4oqxeKp4RUTX8SnLfSmBnB5xcvUs3RNS3F9HqbqkA2tSvc4vackJhNCcKHRanJvCwLbMuyUMPDHs5WG1Mf",
  "key9": "4Rz4RwC7HUwkxJkN8j9rn397KQ6UUFCgBixfBhrJF1QTwr3vD4TZYcwrs6uZv3YdpWjzYe6fX9mG7uxdKbX3BmnZ",
  "key10": "4eHiSDkt4EwaoQY81rcD6ToFqCCk6BogGhWXAHoRJzDrWkWXjFfy63FqqtLqGTdsTWQEDRsWxSQMgdkBtom4eu3J",
  "key11": "4uGwBgykZ6qVk78xz2ryebwGgirT48m5j4DhTo2cepFSqguy1ekUuqN4BYpHGQiFouVrtawzVRByKSohzS9f3QnK",
  "key12": "edBrtvQPpGKEKSUxkyyckegGN2KpZSfKyRQCF1XFUidhSV4g9MUefeBCb5TZmZy4wHzveZawm68J1jEpF9uQAfz",
  "key13": "4o9A7imcNXiFxMfSGm8DVew4KH5cy6Sh7VAofaLfDNs3SBTjsJVNzM5XAAiJmzd95jtagJFBkwk5bU6MWsABGecz",
  "key14": "34XdCKaKodb78ThLRFXXCcxSB9YBCqKMhXkUTTRWcK4RFCytv6E89sq7V2yHEpjQgbeXeRFcg3YJCzZcfhfg3csh",
  "key15": "2zGWPokVryq1KRHzg4Movr4uNQ4xhm3mKjD4rpMqxS41bAexZkNniBZYX2LUE1BgBybgpK99VE8wKsJCSAvDSZr1",
  "key16": "2S5GnaLcLj6xWU2C66FkhYQ1d68dDGusXZRsKmbLU4PYC3fftQ7AeiKZURahNJBw1LLqCDoz2He52PsxRtYxaaA1",
  "key17": "2Ef4ach4wxVFujPnWWqtpUCFm12CiCY2iqPiGf5iaF8tL73GtUmUj1PBRpqaTrfprMVrVmmjBdJFBoeP1WgsQ8bA",
  "key18": "iUHa6PCeDM5ZHxGTGcH5g881hEa1R5rhVqSiYW6axR2jFfVVStGN54nuen7yGDsbWPuKpML4hVVKXmn59tw8zxf",
  "key19": "3nGAQ7egjyePRZ43R2UmBkRcmFT2pSMfbS3JHS4DwUMVZyB1rNe4wvd6ppbqeY2MqHvu8wmJ75MnpSypZFi46RPV",
  "key20": "345NGroQ2Fam5UkuibVJuSRZpNk7i5MBjYGb9gSEEsgfoeM4A8iRkHCEWmaecRFz3CUoMUDNTfBaAHzbHBBeTA22",
  "key21": "4nDwQ9Gse4AhucpeWCNoC9g6JfyyhW8YcFS1swADyk5YN44iBz8fWGsCwte9FKP3eTCKsj1dUeBX29mJG2e4AbqM",
  "key22": "xQ3W9oWDiw1FsUhzSSv3GDv4tWGrRy71San2qEX19yvphPjoL8Dqj7ULUWLL5UJ76Dro3nK7URA6LeNGHKiBDMz",
  "key23": "4YDY5SdnHBN8TjXQHMSHXXyiiLQtpEwGySnWEqhTXFrrtbiHKMtFbNhdGpTNXDT38e5hKPT8QhWH7QKQqD4BRS6Z",
  "key24": "2Z5x2WnXSzjrXGHX7K1y7wu69vBoPF1Vu7fcgNgDqwcvX7MqjxWAXM3opTVKckr7DSxyktD5GMx4TT1UDfTYfyfB",
  "key25": "8zU8mawsq7TJXtUJJqzmBVDjv4XxYGPjA6jyuwDwNAipzH9SwRX8EwZ8YTe2wbzYDhpoAv5WsLQJCsWobymYFKT",
  "key26": "4rV6ZDiNU9So6Qsz4GQLaEHywWw24QwdSzxVEJ9AiZo5Q3yirPASsqdhMhb318amn2e7DmRbDTkZjZRxu3MKFViv",
  "key27": "32oD23WDKq64akhbcvsd8ivb7DGz9LFStGL1V6FyxieeauFjajU9A1ibXDxjqSGUJH7D7MN31JS8HbMScYkaD6Qr",
  "key28": "5nUUhyxGvffY3ND9DijiFrGyVtB8X4HDde5RkRFsa3MJB7Aja1hVRN2Y3q2fHGpHPNMqr7GhBJqSEmhNqjsZs2j9",
  "key29": "3gWJuywsr1widp9uwHKemZviFiSc8y5CuBFGAZiDNeaK8CcnnftFMhjrpLG2jfvTAUQyZYJ9VNVYEWFB4Puh4MTd",
  "key30": "Z6DtAUB4c8eamd4zAJnYU6FzfaVGLr4KYoifFPzYTjP1EFoAJfvNbQjMvaMsbJfQi4XmjsUBsGzHMMfVHHPczJE",
  "key31": "57iQFKTmwAwD6QixB8J34GYvoeMD93fcDQxBmtHkgKjgVUWtPjzVERviVSpehR1tvUUpSpnzufcbwNGxPBu69uFa",
  "key32": "5hxNZxvSxYsbhnSvgFZS5XUyjxiD2DHKLLvfcVfYbTjmYPbQWcHYGFFGuXTBdssb3hpPycT3vjmkpFKp5e3MrB3F",
  "key33": "4F5gDKe1Z3YrV4zNMfTHsBciVRTquTNdgYfE2sUpXkmjda59BXtDGZGYSgYcBkF5yazZ6Ckf21Uxwghwy3WNutgW",
  "key34": "WJrpJ66KXUeDJuwiR57ecX3uAqgM5Fcus7mGYq5HgKVp8pwuc1CrVhnsE4bxU6PVFJBAYYUKeB3Y9sLtxSo3d3z",
  "key35": "QS4C1Qn3QXLkapJRJkYAobpV4ZmKxPCzFQkgw42TaBamW8v1ghzbwuiFdZB7orW1aoH1JyxVSZ6izedioHx72wZ",
  "key36": "4WiMZnwFuPt8eTHcw3hZeE2X2ndhRFpbELSgUgX2FXie8tCpLR3C98mCX68C8q1pN6DWXyfdfWbJ2c85hark3a7C",
  "key37": "fHYMoP2cQDVoSJKGsGqDg96BSSn6bCqBNTkszUSLn2a7oyBVbdb7gDuYDXwkD5mp4t7b5qLcPchwNqhhctCFEMh",
  "key38": "5RmhBDxr6tEZ7P7freiPB4M9YTZBeBXsZiDB4t8gw8MwrCUPVhv1AMn3pkF5kmZUT4JbUHi5sHNZZcJxUYwni4SN",
  "key39": "P7JkyCGz8ZUGfCer4t6UFv6dx3CdWPbyzMcCSJ8xDj1paSFNnPUndFtjnWayjaTiHVDXsofCTEdeQcG6cE4BtA9",
  "key40": "Cd4Bm3FtXn234TGHgGGWhFRxAbXj53GhjVj2KygaaC6eTpgnBBhvMzqPnF6nSYQpwUisAUKVmcy945HXTNAmZqm",
  "key41": "61wqETvR9sJB3Evx1YqsyLXUNerq4LBFAgW685EmLY4mnsqnnaZS4q4efUJjahhF2uEb2mLAhUfDRjyTBy8q4cEG"
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
