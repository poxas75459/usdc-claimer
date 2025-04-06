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
    "YccfmkGmDcSZFG8GvdpxmqoYuDK8pcPXaRAdxxsNv1rUHUu2HnQfPxFM3K2AatkUsKvxJFfwyocKYfxD7ysp7rK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4itPiZNcikiYTnQsU8DX11XKvGT7bkMx2cM3iqhzL7QdzCVsuGJvn6t8abvvo653ZNq2nqdY33AAdMkcn5fwRzCm",
  "key1": "26Zzgc1mYMBBu1u5zDjxmv3PvgaD2HBbB7KpqrY8LNnYpNREQbrbREvugpg13MrHncKGRUcMyhg17UsLzJy9z7zM",
  "key2": "5KZnYTkkfZbCALZYQCZcpLLLSTZ7r1X3e8yreawgjWFrtxzXs5oN5m5DDGeNs1LLmEi2s55B7zAnexKae9zGhTRj",
  "key3": "3MTJkcd6brLgSYN3GMvxNZmKZcHeP93QUz1J6WZTYZW7agqzdbAm8yFMyQx2cjRMZU27PFoc65z6XAEJSDnjp6Rj",
  "key4": "khrRhV3VQ8CryZSPbasXq3eC6GCrou6fGZPJUk5FRzyhnXL6Euh1pvLx8WhVVJdaPi9oByfgjngAsTMTDbHNcCX",
  "key5": "5Ru1UN21LmU2tL1RQ3S6AdJ81x8CxjnVGg5XzSuoVeswZarLq49rk81ZtFoj2YpBqPQ8kauK3mTVtvGzpMNKHvpC",
  "key6": "5BaroNyXLmghEjqMVhJtVkLQj8vNsfoYMXQ1M1CxGXG94ZKYj1o1KsuesNLyub6aFdjSoNWiEe2DmztFQx6chJ7Z",
  "key7": "2Noh45by23Kpj2nyd5YiSzBaYW6KiC6EBtGUR5pEV1T5MjjzXrHJ7v2aAwVTDoqBY135EFVi8KxGedfeC8kcfYDa",
  "key8": "3Rv5ZLHVEs4ss4joxyY2F9YhRQmbSmhZy4q6WS2ixWCUS72xSmKMcjH3dGdCQwY31BFadnAoA9SFfURzVdZieerY",
  "key9": "52KNDJiRrbxgDR7GbTNL54Rw2aSQ7kJdmGXmJt6hmTUnFTDucYaGQnyxxHgobpvWbnFaAaEUhw5PRLCQvVMkr7Jg",
  "key10": "26btZSpquPXVBdAZF7JViXqQa1FQVwr4STz3rUExrBfRBYo1sWoP1ny6Y3FURgbFkDiy4jy2v3KeSPUG7BxiXgzu",
  "key11": "53LVh9gYAyMrKyzaMxGwJ3ip6TTUdKu6StKWLx1EM8RTq8Fkw4ZvANuYAoZNiYEXJgxecEntish4fCrnk9srDACE",
  "key12": "59pCU7uJbRAnXsmqDH7Wsmggti85ecbmmZLg9AkQEPUWAMfwVHVFGTQPaEz7ujETZD4LTydPaFp3sQUQDEoFXrCq",
  "key13": "XduXXihReSdjtKrqLAbVyfSoZS3xeJqkVxEAAfUn6VAz1YF7AAJjmGqmFTxkNVYEonnU7z5G62fTDsccxFrFiHL",
  "key14": "4qP4TYsZzkajaiauiSKsewDwVyijof5XgM7wji6fcR8vmvSoT4ezLfufC8VqrcsAXtobYcFgfjcup3h3Mvgmx9gh",
  "key15": "5MeBUr1SbETYemqWKWcCZSWkTo177BMN73ms4Ujkc1oydtpET6LckXgx8k75kxfdsyGyKzLMqLywuxym4hB4Vto7",
  "key16": "2UwaM3cQEohedBsp6h92ZvhMCDkeExhqMG4oR9u8Nvt683s8UoDqiKSfgFEhRxo9dCPKE5Z19mHcnEJ72Wcxz1Bq",
  "key17": "4n6m7P7PEkmTc5xMyZEBViTp6TjkxSqhijv6BXAw3QKLknicYEuZnJnSnEoSVkAez2kgidAud8Q3YV74ZnnZSo15",
  "key18": "4UE75qjGDMZs5BTs85SpXt1AQqhH23sbZUy7AqFzmDnGPPVWN2DbtSassBVLhbJtDxNDWFSF2dhTbSBrmVaW5GmV",
  "key19": "52jr8ets3DzHWkERL7K7rUEb78w9V1q5B9k1CkU8Gff32LyMK8V8CW3k3MPPXF6hgxQ71prQnXQnM7uXQVXY6TY5",
  "key20": "28WJqNPRqcdKqa8488xZv8FM8KuBEZvuYw6FDtHxhg2XHFPxdKeksZuMnxDQeSHnNUVmNkNKvpa6dogFZCQTW42j",
  "key21": "4LuzBTfQbvEzyB24kqChXmhWsGkp3gSfaYXC1RGRt2s5yBBAHwnijbZBvpLqmMmxzHeAFQk2uLC8UxFnn5bZqcLB",
  "key22": "5jW7udQ4GXFPRyGHNqY5kR3sFCqBmmA4HAPpwHYuq4KkBpACCTpSSJvrFusm7C999aMMFbKsj1dHYVtjKscuUzfp",
  "key23": "5BDPK3D24HPzkn9zQH8xQs3muxMeMK2LnwR2WH9pcEP6ZiR28GgNYvpYZR4BKu86SmbFNDPE4SixDxCikaB3PLGA",
  "key24": "5td2ACkCGitBLbUbM4kmgyZGAuXAooqYVyCZYCydZR7Z3yJ8Mg5P2RQBBNHyTdwkSqWhvLbPDpQAdu6Jktx7kph4",
  "key25": "wxDsLcuQuSMYxYVqxAvzsn7cMjg2h5LATonmsFmmzE13HC8dqZFpD3otWc1W4HU5A8kznNC8fZ5pRQ9qCsCghzf",
  "key26": "5jCGsrfP6BXrPvqanJJZbQRvcJ8uFdMBuHfgFNk5YiKp8csyEHx5TW5NVSBfxh9Jnr3nCg3ZnXFF8D4H4qj5cNzs",
  "key27": "5oGB6kr5WtUfzSnGN2RBQnPKsUaZxrDoeqMyC8B7Rr3RuK3WGQ4RFws2FHPyuHpQ4qtSQFnmJY8J6d7kaZ6U9Q3f",
  "key28": "61eJEmkfH767Jd9ahLUmMpzLVpV8Q3mSVhVeeq2LShptZLa9MCToPve3ZvYCeWbHsZgKV5ZC8wrsXyjRVnwHMugU",
  "key29": "7oEJp8DBvQdRSckmB6XwknfHxRGEMCvS1BuiZUvKweY8aU2HEdX5mqGNM1Ny248v1UXK33mJvArjsyhtaURKDCn",
  "key30": "43JFBR2qDoghQXvSCNYFz2NYMjGPxVv4q6e9fCuFceajMEA2Y22VukanUB6TqVyCgA4K4QxtmiLs8ufr7Z2qhhg5",
  "key31": "aEDFhZvmGYDcW7QpJUDL1rWJBB7qUvGJfWoXEnuphvYSCeRwC4EiWpMvUSkEiPj57Fjogo1bgyFJDF57vK9iCen",
  "key32": "24PuvTAXMpYHznXd9oZKSHPaCKpsAvnu6ZZH3UeUdEVik7qRc4jLRN5qj6hNswt7bvVbPuF17rCjaRd6k2KvFa5F",
  "key33": "3VDHynZU4tQUErRVThcvm1UH94Vzk5SaTCuW9mGU9qhuWEe2zpNvvbHuFSZvmha3desziWMvPsiEahepLvrKMrJC",
  "key34": "hb3NLR3dep51eSdhG9dP3voufW3m4gdoXHeJVSA4odBEtgMiMsXEStExaJYSuNDqD88Z4hWx2VC8iNDtchd2Yqe",
  "key35": "4UQ2HYDvjMuu5EAtJsPddUvfsSq5w8Yt6pt5DUgYUWskvksyYo53aPox7V42Q7zYoaDG8XcX5DcZ49JC7qHmPUL5",
  "key36": "56Q5wkGnHE7jXCvoJGcwJqqNdP4LmTAmDZHQwp6wHX84nNNyHwm2YnAbFDAHfWehWVqjVypRYML1HzCb9H5fTDhq",
  "key37": "5wRMGfJns3q9M85zfMdLn7PiYBajQhh1Axh42zh4xfHHu2ihn6cpzvf7rySbLE1NzrQeH211yaJCkNYQrGjJAAqG",
  "key38": "5vzutigvUJwSwYVpR6rj6XdXMLVnEzgDKTyTiQq9i7LTz3pe6hw2LYbvJhsYeMEq8CFfy8UFkipAuRZqajQMbgxT",
  "key39": "3HmDADksN4oSx2dtWFMSDdZfigswUThCwjSrsSaJrYhjiSyd8VZz7YMHtWCYZUpnoFnxrqVqaGyJasdfm1xRLc8E",
  "key40": "3jLDNDNSQUuf8QGHsuJFXX28TkX6ucVCkAme2ogba1a2Q5naKxxXX7peFLso5wDkwNaERNweRYHYoUyXr2k5hjJb"
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
