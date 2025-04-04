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
    "5FbBjtXHoSQVgoFg8YXNeAN49SKonzCtmHutFqKaeLurcTNGqCYEVkcQXRAxmZGyAUo4RAZidEEVVHHnkDkTcVhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kdTSm7PvjBE7RNEMmqbYdF1uuEAZARuXabtJdfwkXGcfcvuTRD4GHrKp5WUKvjTYUxJVcizapwxTrpMyT5SW2Fa",
  "key1": "63vvdV2F5ierofhPzhB31jV8UaKTgAz4QWmcPGRo578oESjniPKfpcohbzVeYHUGmYAHBUyDbSPrrEjUetfHK58b",
  "key2": "5xH6t48BAgxmkaD9vuwSAq7tqFnfooFdBJvUHfCK8nAeMcEDtzwzNtGDUy51oFWNG6gMuY6cmE3U4u2rz7H9WDe2",
  "key3": "2SWPKkTbHstr39kEw391x249xEFex1HnnPoj2J3MybN7uGR9Sv9mqVwfk2ARsuN4VTdBcPXFWLBxdfV79XrEcRHA",
  "key4": "3tGMKKKciAuZdd3pRmPazaRS8csHznMNX5cBgdbjYt3CKqug1Ne1WvsZBBUNtXfRicWyFhWJAcRFpw1gLoMFAxB5",
  "key5": "3K87uXHVYTmUig7u3dHWNFTBbj1Q9bgCZAFbi7e5wWyFLi3bwrgpBgGTJKgcChgdbY94Cpa511b2C28oBPB6B6Lh",
  "key6": "3SLSVW5STs4w4nBKxbgBe1HVR44JwLbCjd3TA7WTM7nvtQZgLQskv95UmsiB9c2941sf9UUoRMgUXn8Xkds2dND7",
  "key7": "KRVXWr67Qf8mLpJJ6ugQA939sfYps7TdVUNWxmPSR9ggCRM1Z7iMGik9ae46uAwDsr2HQAdALupE3gUJ7abCAjn",
  "key8": "28XV9MYJTaFoTuaybfBM9veju9Ui2o7x9grPExFwKx4vZTC4WP6GgDmH6LgM5aSQMM5eZ3anLVdUCECUwyk85L8p",
  "key9": "3PjwuDnYUGBqKQNNy3aKEB4y65CNpx7TvawyToVRuNxSpKkZ6nv5cEMp3Jz3BomwqwtL1YALhpC8NwwxbS8Avhrx",
  "key10": "3B66a34Ajj23to9JMHatgbxwLSHYNNx8GVQB5KtYjtK6n8rKJUo9XvnPCNEce9gXW6qRxTeKAamv7oKuBt328EyJ",
  "key11": "FRQhAboDGq6NkRddsj2k6HWrKXGT1wG89ktjLqU2UabouAmu5t5uJFc13PXzMK6W1PyMTDrceJ7qRiw2dkmR4AM",
  "key12": "5EHgwfev2pcFLLTwL6pidXTHrrdqhoULfMUk87rWvZxezhBAZQYrMzbi1AddTSA1unhnMg7fqe4Ktw7mN6D1RtUQ",
  "key13": "2ReuBcye62rmc86yZczLgPnKszABTxsTVUKDUArD4MGNK1SUaxz5W3cg1LnAcwhfKjLhGEhbGDyyob9wuUrW2htC",
  "key14": "2ies7TZaXGoop4R8MGoU5LFqfMnhRLjbckUw4sQZ21TVQ8iiGbjiYHfPJeRJDjGSqztQ5VbQ2C28MmFrCJyWr6cQ",
  "key15": "2LpiFk77J5AY4WNwbNMtnyWnipfR1fZ46mmPoHneP2kGPX777yFduYVUBGE62vvZdcD5JtjvN2ZisoGtnvuohz43",
  "key16": "4H6sTmi64bimTQdkr5oiBxyUgb8QA7cxB5CJBAW6Cq83KVw4dCFdjDPhNy5cZEBF3nWZPjLf6x5vsCNadX3zuDkX",
  "key17": "4HmUhgHqEqkYk2KguP7w8KKtirYnUV8V7GQdwhsbsoAL3bo2ndToH8Srh4CQkTk2sPn51xCVa3JXex1K2hGkV9oT",
  "key18": "4u3nqBH1osL7je9C66UaJBi758qLXCPwdU6Ca7ztd9xLa2J7o1rddmCsjFWoBTJCL9yYDenMmJ3njYQtWc6iDPgc",
  "key19": "3h6hthNMGmB8vbS5umcPHZ5Tu36tDknxneWLdso3vGonXu2vjJabg2s9CD9R9NbBskq79y2pCo6aeAUNHJKicrBX",
  "key20": "3DRJedn5upFqoH1po6xSwxQSzqsDwgRv9AcKkZU4JUr26YewEype9D8rMEjCdz2NKSdjfjbRbM266s4Cf2KGbbqw",
  "key21": "3Nuk6poMQPYuBmBRpoPXZkxRsQC44NkPwK6U7RDaJyYJ7o4YAtqmMrxLFZ35ec6wtqmVoaXRzyvuPzQhzNVcrP7o",
  "key22": "3KLiiKPvwx42E78nJpQK7LDXEHbPTJsXMF9tJTY4nGj3fNjTJBCuqbDZdX4sUGijLz9GJ7kie7fyx76Fy2XyH9oT",
  "key23": "3xcUXtzDokWTKbF3QftJWbKgT8csYa4TyiZ6VNhAcWzJabqfvAKPCJxRtLFqUNUPgEyWKS7N586DfUBxjcwveW7U",
  "key24": "BtJkF2YUSxm4cD66fuHhqqBh2GGxajK9zZrHtQmYRtbh6bZ6bHSJYHxbn4myBC2PBTvWGRRosyJrjuvXZJ9k56F",
  "key25": "mfDKpaws4qg8gmC9JxNR8DQRGRqP7wQLxJkuuZeSpKkzEuXQ6mip1TAxVGpaYw7e6eMb4Z1SAXhEDbepav7USZN",
  "key26": "CFXvKvzo3dYExYd3sCPe4tPsFq8xZbVcxwM3RYSByKEbfioRQj1HyuGUa63RU1qRDtF1hKLaL7Zqskccrc8sj8z",
  "key27": "5bfxMa5LHLZAYXL5moHexyyn6wUmj1AZjZXoRvmwzvSDns5KH1nnYZym5vP383FHLphuRbXqTapjR1z9jEDjXKaj",
  "key28": "4ViXvGUndFuCeAMnwx5mUURC9WhtB2ncDBmNyG9vmxWvQ2EnuKbAC3HavsfwCFBLbL69bCE4C6JEWSCa37nbDJ9V",
  "key29": "5s94KfwiCbZUvpQ1tGDpCeKWQnLosUFK4XnK818GK4ppSmkxjw3GKBKrMUUKDJYpjTQmn6sbLCmbHKcqmWPS9Wqx",
  "key30": "LyrcyLJyoRurdPuRNupnaF6DyYXjGbm3yNpsQxaLCRsvwC5V6zDHnfCJco7BrRo4BUMj4AC9jLPDTZMxizjiri1",
  "key31": "2ksXyN56nSgSLzRthfKszb24qiacjHo1HyZ8hzeVaGyruj2bdR4uvfGkG3ua7j1fNWFmuLg1FqfwqJvtNN6wwuR8",
  "key32": "3fV4obhbnw24U6GjUDeA1yxDkdBYZWL1YbUA6iNETr1YW38WxYvtrwcmUuytWAQbM7M5HX8EBMQCXpXNr7iet3Hd",
  "key33": "PBAsp1sSZJnJuGnDjNH1ryE5dBN8XjG6y1QJrCoG89MkLfj9FPRCbWzirw9kWfg2JyvZuyiZxg8a8hc1GqMPExU",
  "key34": "2pZjhaNC4XAAi3faP5YDLJ1ivxSLhWeRTVgwiaJpumr1UYkdFNdgoTjRdQABj1BrydCUM4ZSmRcVKPsSvus7DwA9",
  "key35": "2c4PBZeCRbxgqryUPWDLp1j23urCNSyDt9eZdXMmYi3ztZVvihgDJZ7foPy48VcCgqbkvQf8sRHLK7XqsNURsJXW",
  "key36": "3QvMGLraFr4TxsEhkzdcWA3oduKSF82PjxJnvYSEB6YSQUsQD64pZjmhhbYRRK3HE2yGoYnS1c8ubrUT6YbMPJyW",
  "key37": "32CFkfa9nLZgGDcEVM1UVnpDbgwbBp6hMtXNsQ5dHUysPqM57pw8L3dzzHaLRLSinnaGZhoi6CgaVwV6Ti1RPsLC",
  "key38": "23AczcP66mjmE6izuaP9Pczbrfs21J6NBirwBAHMp7bB2PvVdrdnAmB9KLSPbdqgcxTBRhGcvvpUSt3wBhiqSSMr",
  "key39": "2jW4n5mGGq76h8g1W7vqWXjASsh9eGypeY3vuekSsS6ufZrvtgcHboz7aeqUGiqqQ3N1Be2fngWG4TJ18J91NKem",
  "key40": "XgAxjR8C7fxUynQZLQCoi63GAbtxM7zHfMe9Wfj3PQwriwZcaCgCM7Eex3b2fPZYqx9xMV1pTAUhSTZMPS4C8MD",
  "key41": "4RCTwKLccyAux3jgbmigVaQ2JtVFzQgBndQeWq8CFHhK7QUuNZQmhgQ1jRenK4E97ZjedyDQRghJLcFChoQWyyh2",
  "key42": "33KHKohSREKrDBv86vH6mHnf7RdKj753RKeiK55fieEj3QzpMNKFXgkSzr4Gip7JS71CmWesT4gQczVSj8Fxq4Yt",
  "key43": "286L8niomKb7iiDHAtL3phr8dRXd15kgRZ7Doxn95G7XB1miv1UFiQhVDTvXwj3Fz9LAGeu5LL1bDKp7qicAcZcW"
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
