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
    "453NChujYVEothCfESftXpw1jmgh8xf9iPN87SU744w1NVHFjjZjgzJnRXq8d4eiNBYGFoaBN5wU2ASKyMq9rBCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVy6uuSghN31diC6xDGTV3eyhxfcH2AsMRcV7cYnRZaNTxxaEoa2E6QrDDf4g8wM9TY8EgRFDiYdauCScMNKdx6",
  "key1": "2x7wpmgicheLgM1Uhb3u2WNhv7Pher9TZBtpdm9EaNWL9JVbzHuv8wXFrGv4sGRPx7CYxgbTmQb346yJwdZjTBnv",
  "key2": "3HCUuCYvxbzopXEwL1fNodzpG2r5aJnfVHzcJZbaa9gMJWkCmLXQPrcYxzbkSSGm5Kgh5pmsMEPiqrEGLEKw7gVj",
  "key3": "2dTK65v6bNAhsEU3SYgDzjGZyED6ZuXiwqaugdH1XKgmJpS4ro6km5HZvQe5gq2DBUZc1ZhYqCwhtASATNtGr7Ez",
  "key4": "x9q2Gjen6hgrzoAhJa5raosGT1yw9VASy2LznchT7xLVrGvDskpg56Y3SLavvKawCdFL7TV86bxV61KrYyeQ5Th",
  "key5": "63a9WC6oDv6Jjzf184zVAozSwv1Gt8dycG9XTXPFm1nqxHpftPg8sDvYEtARMGdDn5q2QLng8fSc1mVAG1vpNXZK",
  "key6": "5CaCtw8NrgRvci7WNLmgxeSTDfWKU498zr4yugzajv1FgaGviVPRjUTqJCjH9t5CChqYyxwgwBGDnH5xDmxwgcaZ",
  "key7": "3AEpCAQ9mBYJSQkfDDh61ViEQb2TttD6uq2CeRacMrnWWGiCmifSom6XRr5USjw2udkXgzQXUngkJ27C3tj9mRcf",
  "key8": "64RAxwBqWa26UZMcto8SQqHnB1JwgqwCm9qndg43zioNFFg3dSt9T5UCrDc22sNot6ufCGGbBM4oEt2NXZJUs6Vn",
  "key9": "sPAG2QqbrzzfuWngbgfae7iMkYWXdC5hq94AUjhqsNZJaq7bVEhi6fz9ETTCuEy5SVgbkSCEQA46XZT74jp5Kuj",
  "key10": "4iR9fqtYEMEcNqeoYgxTcprzebUCWjvSCv4Vf71ajJuK7ayS15CSNzSfF8auxfznPHCyuRZJo9tK9oBkHNW672ar",
  "key11": "3G85ACWt7j5G9z9a5J2Bt6957Dii7B1kZexay4x5KQFnJLYVyLCeDQAA9RBYpQAgh5rJjULkehezoaNUxSWaVpYp",
  "key12": "2DxoKp2rqg1Pqr4TuVr6bpGokkaeieeXYqvirhAAZt1KMMTHRextbELNqDphyE9JsaKN8S5pLxYnjRC37J7Sc5g",
  "key13": "123Z2Mat2QWpxdcW3zbZqxhsqNqBT4Ms9HFX1LemfrD618hQr9E9gQLjK3J8Ed8jeaHsLJNVKTEaJ5Fnsa3fDqjb",
  "key14": "5Dw1jMLTWVeQ2PzeEg8331uxbsY3nYkWgNmnyuAjekXUWqf3PqmdW8VrRunkX1pTJdgX3pMwefrd9qVaThhPjzYj",
  "key15": "bykpLG3EC88dGiwUgUUu8oT43my9b1XoKpTXW5oeQKNF2fkAWGDtun4xbvATtCsv58D7cLXndJevVhdSeiShVyc",
  "key16": "2QqQYCt2E73sKtMsoLcDbgQWCSeghsb7NaBSJuwar58wQXBcGDsxGzAmpPRQEyd4RxPDnRnQrMg5jsAgyKZHY7N1",
  "key17": "5d94zqfh7YFzu59watMCfWE32reviW8vXqHtf9TKzb4CHPthkdU2ynpjm3oD4KrmjRk2agVGBAQCSX5peZpfQMjy",
  "key18": "FefUfBSoNFgjxMVwxaMkS57Lu3bQ8oS55N9dtqHiUt8wzM9JKEttpaJoDPQH9ahGoB62zDKT2xfBBhWGyvFjBVK",
  "key19": "X2xnS5KALJ4LtVbzZ7W1ezgDEMShoXLKrZtwUHULeAPdNwCzpfFeQsPjxcCkN9XNG6DqgndTouL8WWpCG3TLcDL",
  "key20": "xghcQZEFTQhXgsMfQiEzzGy9qNMMSFSQkrL2drqM7m2XGs6Lw5dyVeQSyDD15c2GYsnr7JPWP6VoY93EaH9JaN1",
  "key21": "4AWiq7KoXny1VdZjmgHygE8VedFxhqkecaCFP3BcvGzrWUx9bNnPg3mtKEzu2XbxfJukApmJKs7PnjsL6aWdnvLZ",
  "key22": "4zF7j2QvXpc3BDfm1dixoYXKssuJYWDueYRYsCKUXDHAgD41SFNDZWQWz6RtpEoq7XWaHkDNaDvcpoAUaUr2Zib9",
  "key23": "3RyUS1AMNLG8vYrc4fW5FmAj956RbpL7ASwF2TYjrJ6wUzixJdGDg21EgM1qnTQAxnhJPzJzCU6ygFGBFqtye9Xb",
  "key24": "3dbBzE7qHYd7Mr2AgDw8VNFpvmh6xVPGtrebf4LTiYFf5WD2N4V9SPPuEJx12Bq7xVVyBYC8fZhJZNZ3VkCZB5PU",
  "key25": "mFV8pNBztxCvUXJiy6mN73AkcjaZV4S2ncgtzUk9k5a1f2Zwy6GQs6zsVA4TYniFRmQVei81nZz5BSAhS3dsQ2F",
  "key26": "5KsW6DCs1XoKeCupRSxdtZtGFe3sZh5MSGM7WWCKNe7Y9G7ViBdxx7t1XHiTBAF9qGJUjwDe4E9ghRGdRqneCnvh",
  "key27": "eEjbTuKrL7tcKa5HGLNXyTa5rJ8BiTTiNkChU6epnxXxedew7KWXdAhLNXxjLfPPFiiEEidBkH8yaKRsWjehqQ9",
  "key28": "5t1zzrz98KGnPeuYRkjNmRNFstFyh8hbuhGDfon6B2tamyhGtc9NVvhFyA1AwvHn9CAm3B9d3QAT3fEoegUUrSjp",
  "key29": "45z7U5hyCPH1RYgBwN4tJYSQ8ngynABCkDqpmQM2hWAbUgnHnrY7DoR2VohBM1Lx6bcwdeGsjiPxSBwUk29UHtVy",
  "key30": "45x8iJfPqUEBnqBuRnfYezCdNn8eC4uy3dYG3VHcKTsSBVHvVggZbfZuAfKPF4qoZpWExB6WRa8JcounJnwakbod",
  "key31": "5Nq8RnB3fL1Nk4RF8R6DsbpQ9aehEvFMPdDNuyqoUzGk6asod5Uc5TebuskWSp1AvRuVYaabKBpULac23LQ1jzSc",
  "key32": "2cUfmZCpHzNmcM91djaeZpDc4K24syaDSErAqfH4zZEbtDE28g9jDgDGg9weu9nC2upcd36EVx9GqiVP2Pjqtarm",
  "key33": "3unExynW74eb1RTz5mMaoggsvMB7wg2MS8jMGk4PNqGWK3pwPZYkrNwNWDQnNqmuNJeDvm2mNNbZGoVAuWmJ3bPG",
  "key34": "2pLCrTmozVfcZTqKt6sk8P6KeNhg1GuX3JaeorWwsG32eBy9EamXMWduXgiatbRUrfS9qK7imSoMyNmQXWriefgh",
  "key35": "2P4hWBeHNuTmhykpqNAXA4XUsnG1zChY6WY1WdcHPAgEBpV1GtSAHG5zKJDUjW9DDKaoxWBb6CcTN34ew1ja9Rno",
  "key36": "3i8wqvRbBUD6kzX6qoFc4VApDRdJqz8PTbuB6ukq3Si6WYTryARqSAUof1Atyg8jf3UNMNtQZmcaLCA1BpdkZTQK",
  "key37": "2TmXYzJWWwpGTr3QeqCYtyazmgUpdabc81FwkzjUd6QSjSPTjASBPQJJVBtCLA3JMTqK2NWyCV8jAPSSL3gPgnh4",
  "key38": "4JRFgYpaJqhVt5jqAaSLJNQzkB8BUWzX4BbujajcqQz8a3DA7NXd5tPDdBX2tCneknV318xDFHwrXz8duamxPTUR",
  "key39": "6j3MXHWPk63vVmTivArvt7jABtjqE3N6mY82HaCbYuxpeekjNzb6ukGnsgdNWc9NZzdoxtYTeyU83tDc399g5Ga",
  "key40": "4eUSe5LFdthhMauD48EwuwEnmPtSDGWZfMc8Q5mhpDLifjQHEEzpfAyPRRb8JoBc6WRRDoW2CbuvJJu44hXw6nch",
  "key41": "2pGyMrKEUgrtNGRpyxpYMDy5dvVFY2tW6ooEA3ybXSK8uKFuL9uY4Kog9aY9WRxa5Su9fUnz9sSRnLuWzvpKf4qP",
  "key42": "2rgSLq9imjvn3NWWRQ3CKXJNvbcPfqFGCQfupTBGeujwEpLHHDs2bwUr2B7vBuaxjy7X7s7Km7r4R5Pv4MGhNngX"
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
