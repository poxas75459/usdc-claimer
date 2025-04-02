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
    "4NUxQWfrWVPEfSphgqcqVAkm2TcrdgXvLCc3zSQmNRxohehAHcVssqAzDGDT6tXDTfkH6RtsKshdorhBkjRMby9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ejBku95Wd1bMJJG3u649vtuTd6HqX17vxiH2ZXBmJDniBVnAXFvHch9cy44RALJPxjRT9io3oVzit8vR2KNuX9S",
  "key1": "35o1QqA8Pb8uMg5BRcg8GLASW5qx7iBXTkh8kij3XaWvcvXe49qxf3btfoELd2Mo4kGrMP9Rk5fYFHEnXAosM1by",
  "key2": "4hGSwjd9dNq9uEkzRd7kkmoqS8qSgN4ZRFRj57WGoPruvZZ83qdJFHas2ScFeAjpPQb8H7SLpWhtJwHhGWJfoMhg",
  "key3": "3h4BqhYNa5XHSnB2qFSjbkioD532tjP3xK9KENhXMERnnZy1a3hWGPmk6YduYLHRStxXgnKRkwXuA4mXztkf1i6g",
  "key4": "2fg1xZBCUxyeziAQEPADfDqn5npkgVbQKNSindqQLnZTDkVttpHBEZC1SadHR3ETff32D1un1eWUEDeCu2Z4ryKH",
  "key5": "2rYGHP1MJfBH4q4yLDKzifzgLBUoxL6T777VeDMeydvs5A3QpK5GKVNK6D8TtgXPKmPJ8NqN2AJoKJfvFwPNyvTh",
  "key6": "4JW59KCzGyxfW9RF9Yf7v4cJsmCo8CXaN7nQQbCnRAkLYtXv5MrpNrgD28cZrDL7FxsUahAGxjMxVKtECWyhocbd",
  "key7": "5zmW6F6TeWh2YBWWSwpV73MFGHBE1scDpABYCyQ5VzsGxYPb6hEcDS6uvCDatX9TAe8bX6RrRTbZcz6VPh2FGDp2",
  "key8": "5S4PZgCq6zZi5wS7GwUB8WC5jfKnyJSEDYnN8n6tWnGKG4Z5k4QbWSitiCi7EysbBBB69KEeodqsj6Mv1mzXkias",
  "key9": "2j1WgUhCSSEQh2oTd4ACvzrRbU9rqHRYLpdCBjkV2hhjcunmYZa7W3hGC9jB7p4toirJ75Dfp1VxexN9YLjGjmXd",
  "key10": "4VRwZhx5mqJxnhFHdiyUH3Pgm8h7ci2jGEgh2gnw4QxViqV3HWPjeNvmaULxyMZtHDz1aJ5EXKDCidFqD14Yniij",
  "key11": "61w6m5jFTKwj6ApvLy9apRsHKK1BVzfyFyCwJtcjRjWDU8Wwk1XBHNPkZi52LwHUCYxKNsadTM1V5QG17sX53uis",
  "key12": "3oBbSNLRUxLEmkrf1ZY2TKDBxbmdV7w9q7ywGfHcZXXWBXCGXju75pvWJqtdDupoRLA5F5uQvnnU4asdfT4dfNPS",
  "key13": "XmRi5ypS68j9mhtacxZ7qDCReTJtpabDq1rGyn74aHDifvRi1S8gqncqEfaae3FKR57zvMpwgwUQP2im2jXjQqU",
  "key14": "4ntrYQTCNX2LUe2hG4L28eoWTfFL6SPsAbH7sEa4hiY4zLEyaZatoN67uRGv8W9wfMNh41WDU3KPtdmR75vPh7Dv",
  "key15": "39UK4QNwThq6BJ3L5fYcQsa4v2oj2Dzprc3uoo7A5zjX6e4FjeCimWsxZjd33SybMaTRw1vSmXBNncasqJjoPwi8",
  "key16": "5xZLBnDn1PghUnE67qhkJeYr4F8FgWfJeLsMfMo9ew1WHYddw9ti59sujaoyd9icZ9na2MBaDNGymqf2nJ3uLrmj",
  "key17": "3KTPFrWEWAsajpBV3RcLHzkWPhFWKxyzYLgJRYL7dXWmMsJMUBDHLNWcRkd5SLPhjXtHupzjE4xMzsD9g1RnpSbC",
  "key18": "W2ZKkAUAPwDZ3mYKVVEtH2fnPuTA1y4qFLVGjMtzgGPkVJuGqDmdH1J54HwkLwWPFFEgCPxyYfK6TVh8FeYmyUm",
  "key19": "3DNSK5vATZ6tiJyzftR3SNDykHvBqWqrdGLnskGHDeNZy31yYxLkmsKhCBXS5YbwawyjLMDHJ99NmW8stibyKaph",
  "key20": "5JYjgTh58w3Ri886vcot5aZdPgoe3CZo4k2jGBfPBDMoimrwPfy5aX6mRQFyhFxsPYfhSqY9Yb17XwQJHVnAD2D7",
  "key21": "zxVsmzeXYgpNWFwdHSGH1Vr9yfGfTe5UJWMCrXo4HCNTdWBUntvrzoq6HgXGzyvHGb3QyZybn8sjtpBuvnfpgDt",
  "key22": "5UBmz8J3MPpj9NM6iPVo89YgjJfjvCEnP3QGALjbFXCciRHW9vE48xEcW7SK3mpSqx3Hu3QMfjJM62LTBn8txvuu",
  "key23": "4k53QCB7Hzaz388r9hgcs2fHJDFxhPujYxPGi3TreZ9hfs7zYpTLkEtMbe3MYNoVArDRTGKWzWognbQ1SuzLijWN",
  "key24": "2W9vFxwGucQNPR5JKvpy8Mjjgz9tFbyeiRxkQXJQtxnRDDBRNnsxdfDw5S8veqn6DtgS5fk3viwuibNvUYj47mY5",
  "key25": "3TEqbmpSRddyJ9oiFGkxZTJsBS3cABsDKw2Beff7DuGpsJMxcebHisTXFhi3dDZ1ssq3DDyFMWn8J7z6rReLys8s",
  "key26": "3BkZ6DS9NrXHgTpdSHDQnAEQfNRYUvxjkity3Z5xLRhsW2EB3eqYK3Pr51HVZWbcEdjuMXy9WqFrRmXdaWt1AZRY",
  "key27": "5Gz9Zno3DbJmwxiYcvSTindF3XRhxwaR7UYmWbSRiYpSfcM3teYsWBUhf6dtmGT1ntKKoav8VX7cc7u58vBZbaKU",
  "key28": "3UkZJfKBFQR6c1zoqxR3apy7iqkczDxyL6qV1GiVsFqWC6AecYJMcHaJ9SXTDb4PiMBJDnyuZKoW55udhD1F3EqX",
  "key29": "2kdnf2iiZ4QpVRryEWsEg8QKrPwnT4TJWR75QQHvtDxvgUy1td5rKekRcpBw2RxzaDU4iTnHkKn88pv9BhaSFwHq",
  "key30": "29mmhTRAnSsJfoz1S2Ma14zB69x5pQ2TmVMVQ8MVTGzvroSSe9YXAjLC2cYBXX2Vt6J6g79MxhGwHdXfto4nXGpW",
  "key31": "2JHSnetS47PBoKEp7hRmCfaPjdKZE7fE53pbJgnkRmKrnrdGT6ExQATqxeuH4dEn8BTBMaxSeUT9F8kxDu4zifDm",
  "key32": "4s5RzwQR8aghT7pJbCnBBrpNjw1EdfTFis4dyr7wSJRKvdtdtzRBuKhnxMxbCJYugnx2uHQcqeEvvoXnrrgDYkgA",
  "key33": "2YauJwLBjgAyGLXuu8aZUu7YNvYFxaWdoGGMJ7JmsmjXNgTA9a6Fm226sbQLjEHLEnXVLd9faao76LA1mFFR9bmV",
  "key34": "3yQCbtsCpHXTL4YXWPDVdUxLvTrbKTBTdXMgBF1tyyJBSbG7LpEsscB7V5Yt5rAqxNfkqXHxhVj5RCG4Qe7Gj4zd",
  "key35": "2gpFSx5iBbgtgLmCcz1PBNG59c413xzKYrmDB17qwdER1t1HhmrgEJ8w7Kbf1B7gXvRKcECz17a9UoGLMfS3F3W6",
  "key36": "5dBfhEm4vEdezpHH4xRWZmD2MfzLudJQwqUyKrVnwvvH5iE4vKtcTbz6aQusnbzeuFoR2o7HMqCv3t6pkVtteWaT",
  "key37": "KjLFrKVffDCEMCNojdReVXHh68SAAC57gxd5vLU1RkPqsAMDM1UnyNS8V4s6W2ZwTQmHobEcxr7VdUmBz3LYLHY"
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
