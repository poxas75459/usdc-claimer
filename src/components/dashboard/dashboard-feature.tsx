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
    "4Jp39pJ88BuTpgYPUZMxk1bbEfoY6p6enqjFaYrm54GVCEw7FGMa3jEo3Bf17WbdgNXjGj4jMmi4HMZfsE8CmFFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y797GdU5gEXDFa6QpXGm7ZunqkYLGZZsqpeq6CSUhjKqYqhjFdEFGTy6My8ACTHCfG5mtkDBcd57NGKqKm5rz7V",
  "key1": "4AwsNbLUd2XJ3bU6Er977cR2T9zynu1Wjub1qameRSUaBKuHs9R2zWKRMZPTVDkzQ6exbYyctNrqNa876huhKDH2",
  "key2": "2ju2Z9cDrin4U5u5hA1i9e2knsAzjPGZYQYHtx69JPBpFJp6zi8age1Fig9j42Ry3yuz38tTix6WX9yywfWL64c5",
  "key3": "3WeUr7vhQpwLz5diKhK42xGRUzRp5Gi7s3VMokX6aj5vpLLQa1rfsgmecsBKYabHiA6dV3c3DoE7CrhF1NQuLGfL",
  "key4": "5NAcsKtfYmduV5KGmxeUqDb5i3gaGPnA6xYt2xT3RcSKYqDPcH6pwJ3aPAtSWrynJYETzjt5cYsCxrSbucUvR9y",
  "key5": "FudNBvArgNg3DzLrpDFpC4Uedm9nPCx4iuF3hDydDkFW1YVZkTWCqSx2VzeGcFQJGudu9ziTpC3o4RM5ezUxY2F",
  "key6": "3E4EeyshGx4Tw6T5hDUrHhbndTNufoX7pGw5din72mbtsXnwHaoG66donyrL68wxzrTbiF49n9JmJAa3vGHh4mZd",
  "key7": "34w3vftKMEeocFV2uiqqK3uzMRaYWLa7eoQMrtrdADXPdf9Y1tHGtDPDbDwgVqKY8qUQJf87RRrjHtzFYidV1coq",
  "key8": "FEanUkCiDyhvw137q9ueKFa1ud4TPe3DMghJEQi4nYxovx6M8XB22BExrZvb1X1URgN4PzCaVEzYbfn4y4Fq1rH",
  "key9": "4BVEYrFK47vQNg4WVsDc3BFwCMtB6fSKJWiPx97enad5YkAk3ShQ4P75J75g1aTUEj6Phi8hPv3bYp9u8hhuhRZq",
  "key10": "3rsBLjugAfm9jxcze4GWRzERVrRpiGyEFk66EegxF5f1jSpxmo7hzSCyCm8yVi411e1mKrUHnRxMQt7pyRDmoS1V",
  "key11": "3THUwZwHVSiP4k5Nww5gPQ6AyoBrscVR1bcWFsKPN6JuTWFWw4jA17rhnLaZaXubRG5tFqdoVtkKD2Y3W84ZiyNn",
  "key12": "2Z9PZRS2eyT7GadHHyedJS7VDqsTwsScx2zdtUoD8tjL2MPpBLk5EdNSscJrBrnKfEFW4gQLeMocfBVfg6ntEVTb",
  "key13": "w4SudQPyBx697kA6j8NKyWdJbS8JyBE6XNVxbjpcV88bNmJhYHAgodMEuQ7GVDPExsgYNCNHttAoGGir3B7YUfK",
  "key14": "2zeSuFPGLif1GmV7fXXstfe1WbCg48cY7Rqe1qGpzgvksNT4XhoJ4K5t3LtquWnUfPP9CPzaUQgvGunEpbPwnBke",
  "key15": "553HEQTzSnFgaKvDs5GEB1FzqYHEzTg2fgGgdYVkFpLV7qSukHHn5ky94ZRWgtjbA1rV7ankJuRg7nCc2m6CmMdc",
  "key16": "3CX7JkS7nSN8v6BVMPKQncDTQKNHG92pn5bVJQwPxhE7VC8eZkXnMXUqdPKg8ZFPiL4PBXYDGReSJQn9kfFvhecV",
  "key17": "43N7bo8xmTeXiGEFqEzNTQpKQgNFptN6PJxqeF5RTMZuhpQWyHR3jRvE5YSbms8R4JXZXcQH7wqdni3eXdzrjWXZ",
  "key18": "4rCFc4TABKSnnoTMYaP16DaF59fhV1sN5wxwfUdSMTb66nauWMKHjKcAYVnti4TaBrscK6sdMWtbLMT6VTzn96u",
  "key19": "2wqQG4VrEJyheZCE8PQoX8v3QCcTi1JsLqTsJZ5L23kA27QTfGP24Q1B3FSLLMFP2BtuL1HmsuGLcCCd6AEyWYLU",
  "key20": "4LmxuSQE1SxM6gb7cGDtwapVWHWzyHXFwAhN9pDeGg4UG4uYaz1cHjnstTL43TENEkY9UNKdTENjbGvLKDBhmWP5",
  "key21": "3NP995Tdm8iTfxDnGDmb88XUCyNxwy8m2sUC514RgiukeKTJsGSdWoFb793yMhcx2akS2nveb2QAqPdHfTGfzjAj",
  "key22": "3gVLn5B8f1mkPi4439dTtZdW1SYe1wDXN4YyrWfVWYBxzyYr6PuEw4vpYfRJp2Q7Epy6hUMBNqqDyxud4vLRYjpx",
  "key23": "3UQG4Ye29KQrEg2Eaec895opGq4754G43vPALpaywMta5ProAkm6zVENYdkY6ba6mP84eLFwHMo6Paj5CotPvvhh",
  "key24": "3LavHeyP7Q9CM4XDkCMHQScBFThgJyhdWmDNFNtWijwDVLbbn4rEFuSWSqQjhhLjxXgoiTAsLZBjYgftxffa1Jrq",
  "key25": "27QsTTPZJyGQuoYM1t4PvtxquSgbRMkHYGm4uiLxTx5PbZuN8iuM52977dLbyt8PCmEzCeqmVvjdWwsy9nUZsB7c",
  "key26": "5CcAjXX72uaQvRtvpG7cb69nPPizKN9c5zXsGVuTFBtDsg2kX6jULEfZFSV7hKhc1WQHMDXTMcnQNJqjxWDstPze",
  "key27": "2nTQEux3BCJsBcxrQfckgNezFSci1nmvRcdLqS41TDgruTM1rXBGcszcWJky8bCFxQooV4xB3b13kgm5rmQpuycg",
  "key28": "4Gq9vpVLRygtqrQgqsds4xS3gTaHygzvbHNeFuQRyX16u7TRzc13jTSt9EwHN8hRU7w3nYPxAjnUTZwAYdaX4PMF",
  "key29": "5r3Lm7XCwLbCLPk26Sf35VUw21LsrEenpSYWviZZ9WVNrYZ6bA13Sy6taqreRjPTWKs8nabFp13e8bdZG7XkT8wB",
  "key30": "2VZPqcpJp7mXvU6Ce7xRYEHATTnSDD7TocLqxwJsBJgL2bSfn8vJ71PdPomnU5wB1friNyUTFjo88MuSbYrRDbHy",
  "key31": "3sK4Pe3Z2MhQozGskxHipu71QWHXj84oh2Lu6Tq5k5GNzNjKZkrTeU3BjvamXzPzUEbaNW3qtv1qupFWVCzYJLwo",
  "key32": "4VaxYg1tEaHcqqjvcTsGkEovUENZauqus9yKk2z5WhSGNsv5qhBFh3VgqrmBnvggxA2CvWHuo6caMdy7DzT3zdtq",
  "key33": "5bgz7RVmA27hDxzHGtCNAtgZG6pTQWwrASeSptCqgQcY5n2FwcD8nRgvFznDKpYatoHwGw7PYbqLERamMJzFuFEi",
  "key34": "5RXrsia7ZkaFKT9f7GGM3TsKHU9jkXK1RCn6YnQ1bqwoC2MK8k3R7YVw26zR5ydrR74oriD3CJVZPYbCS6gKsZye",
  "key35": "4WJ5jWBRNsqT6UAutwDGGdK69v3VTRGb3uG7D1NrHCJtreDcN1FAgkMqx2RDp2g3Sgw85xgiiTxjPKQx7F7BN3Sq"
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
