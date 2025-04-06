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
    "3Yq76NhmV196FNJ8HiqXeWoRaAXResYJwoED2qgZaABk3yxwAsdkhnwgryyx1wiPwro7zguUDhxWUKyaeCQeqPQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DL9jzbxdaT9dPeLuudaAb2j3HqsLsRFw3fkj6GaFGkhRwyfH7FZFniVdTdxb6ScMfi7NeHsRXTyLpr647Xu71U",
  "key1": "67gN5V1WfeqT3BJFUF66Rk6r312uf2Q5Dmw4K7gLTBTjfK4dGAxPEjxc32BmHu1kxcKhq36ra8xRNyaLJ2aSuo5N",
  "key2": "41ZKKQCJ6tEg4HCouUzwRx8xJwH4NuTyWLLGbT3Gd57ij3pagy46sP5NcibofbPGHieCDztpvnjcRBxFYiuXA94N",
  "key3": "4MMM2BWbkkyknDeKXsBtsG7yCiSiUfssKs6xdDGbbCEcnUZpG8rK4gov8BsL4LNZJXboyp4pp2tAgFNPvUBmDiMx",
  "key4": "2Q61nqj7hn6s49nCZXXXtyLEtG4eNK7bD39QAj9EYkFaPjp1p5XHCZtuN2EPfBxgabuARv447Vd9F6xW2rbQVX8x",
  "key5": "29qn2DtSgoh4Rdt1ctVdpJ5cJGHSpKViqdQhDbnSqRFaTfhLSgbtnH34xsKrZGir2aF91sfomKV91nDHXdftJkNc",
  "key6": "EnGhHF26444SF9DCNyVLt8xCTsS6rKWck1JUK5KZXYBMFtuuVA6teUh2hW3R8kVvudFSPA9df1q7gC67wdYn7AW",
  "key7": "vygzoRCZLQ5ebJFNPrB2MEY8YMEyQn8iVHGJNcauA4iUaTuoCsYCvsXnUtxn9eGCyGfqTUqqWrQ3pF1E4DtV9pz",
  "key8": "3xPJxtks3zdFvfm4G6XLD3pQJZzKhhev4HTK4LqvuonxgBeQ8EhKv2KzbjsGxWBcdqJGigoBC4aJeWaPhXNQSRGt",
  "key9": "2Byqizs5duCedxChNqsSEaNsykJr4csui2y7N1gkU9jgoY3pCiaKTrR9A1mQ3wAqwxkaekbpHxHXzNfsnf9kWSR9",
  "key10": "2Wd2LKbsrCq19Ywx2qJFCu76r2Ub7r1ZRRXP7nMr7bXinBXBYojK2F7ganVLgXvftDN7huzTwnVvSjGC5bfL8jyL",
  "key11": "ufdLMRDf3zzYpQ2M9qYWVxq3hms2ZDoLP48t9LTBpYXK1jJ6BaD1JrzqyoZ5TaAqzmttbYDtYUfkizvKtLyLBpG",
  "key12": "3MqYgm6NcJhmWtYYXxsH9tZugnNNAGyYC9rZHKB6g5nCGEeW8u3Ctu1gMxj1PAJ7bEWoQEbaGpD1eiSopzD15Jci",
  "key13": "cfCnLYuj26soccWdyrYeu2p1JVWeGeKYZesZfMtrkQpmdD2x3ek1PY4bS8uyLXdmjP4EzYGLXwFco4MJFNXBbpj",
  "key14": "54qcnPQYYLy5uj3ufTFttz1jZ1YtDnFHrrpi1gNNzENhu3N41EfedMcaMBk8jUUG2LdxDaesV7AtDKNi19yU2aJc",
  "key15": "5t1iNH35ZdMGTDBZhypH9h25eiXS6F1TumYPBwrmuEFCT8Bo51EKB6PTf4PqfAX2vCqFPuj2QefgSnebRvS4ZyGs",
  "key16": "5VZDrr6cebLthfsMvpnBmz5APht3Aygz7b9cRfuLZT38qRUnodLsZwgg1pfvuJLb4wkuTK8tiHneLkQSJBmRLauv",
  "key17": "2ap8AbiD2VBkwTP7W9rJYWZXDBfdV7bxq6YeCnJh5xyk5XUsH8edE38MLPtNfvjAnMwniLRdbko1SzfLsCKYZHLY",
  "key18": "4qyv7FFcuvVqkrUJUsN8GPrJzMfcjdah1R4hVYrwN8TMd1fDyxrzPe5FbgRiAZznDodoKV3ztU1RurygrSPzAuLM",
  "key19": "4cu9yiHSJ6ktzVghVpuPa3bzu7eW5XVR6MWhTxanGjTBmDJtnECSPuNXMQbsnV7pqAM1bLx3AM2ezovGmad4rP6z",
  "key20": "5kTr3EwPVGPA5eY1cNrhNxLa4CwoT2VY75dWFgJLuEUYCHSBdRsgaYmirUGYqt4BGUwe8beZFXgq8C1qJjV7PF2o",
  "key21": "SxPGd5wRUhdjLDZArJ7xsDbQHUPRYB9xU5aBuj4NbzTSprajmZdRCVyzMy3X5sXpFTghDYTS2r4y9SQufoEbNqe",
  "key22": "31HNkmzvbuP3TDPdDZJcgcbSqiv8fzAbkvUT4M2Y5u7mSuDN2uyGVZha8fWx7Sf8mJqm9cweqhPsRAv3mYDscnqt",
  "key23": "562kUYuVxpHfHnPDc3Wnoh1MJzBDR2CVp4b1kSXVgdTPB84uWS8o1eqaR4uZsGi5CkQ9mQazyGFktumzG9pNNuh5",
  "key24": "31CKaARvdDbGL81bbesv4e2HipYTEG5d3BmLEmVZUhkaaKobN3GyMvVoKwCxKuMMrL9iX69WdcARQ6kwGtPbSx9t",
  "key25": "4DAfXMF1WKW5ELn4CrJ3GnRA6KJkxvW6vVhRdxr9yZosxJVdxMuwvYrYHTSh58MEg82VZ8krwT1Jv1dx8MgSPK9L",
  "key26": "4fknqjuspUVBAyMU2FyDwvpC5aLoK44ibn7KQewRePrfTT17BnM7e3YTfH25eN6EydaZ89Z2V28iMq9CctGFzUTf",
  "key27": "2UmSg4ydYB3RZP5Th9N6zK1hDLMwoZjj4XZ7EdMPHuejUcMdoSA7fgbhVEcyQywKytdt8HiQTT1S26J4giKEJQYs",
  "key28": "3XNg98Z4Kb3warcAfby9nnpUaz3jm4NUkdNVmo6pyLjeWKxQ2fEKDiVs5TF9uskMDgk9hi2kqh8Dr2NV1NJjmoDc",
  "key29": "3M5RqRfNfhkGfDxdyPVVvwRadyRqJuuTMQgSdSoKA9PzdKmUnnNpgU5VXWFEyQ2RJrzMSAZW1yFUwNe5KZu9JZuu",
  "key30": "3RfNiUtByLrQftQpuyB2rUYoRtsD7wk9Zys3qpDqrXjKewYBkARhRNvyicEHPdHq2EZKSV3Ea6ExTQrswy6MGsF7",
  "key31": "4dLJ5AKQMBr9QcX2mvWryumKXq1Wpt9kxy3nvgu7dvZxt7yu6Mdo3K99TQUEEuVw8YcTDtLbF3GZ9hnGfBzZTSMS",
  "key32": "BKFDf3h2W8NGQgGVyS3y7cufXyPmErK6AMCgjtjhTzp4hpyLTFVaPxHFSzMekcQHn2d7ohm8eYAbycQ4W7Fa3nn",
  "key33": "52H1tAQW3MbxXCEbKbyJQNmqcoXr9Ui1y1451rmL9RwAyJbPzYm5FGZMypJV68iCPNP2ZoFxY71JuyBsw7LfwsV",
  "key34": "4uNmDYFEZ3HYPMYDi3Fv6MZNp8PmHNrdRbqKTyDCmNG9eCeQsZiTnbA3r1FUt4paK8zw6iD18BwgpgQGmd77RFaS",
  "key35": "4BBbqL8EtaocSF2dkgEfw7971HW2eaQkA1jJ8zaqrrnhEpXqozeYR7BhZmH2Qcg1XYaQgRwfpyXRUD5kB4SitRtr",
  "key36": "3UTgxYfpPRJ28p5GoY573eNHpyLAHLxbGzZZushpuNY7DETEPmbr2TcKzxRRWVwrrP6SkGh2zbzW7pEdoEGbtiWF",
  "key37": "49X5jZDkN6cNPeaEfM3UKzXtWWD6dWGC8Zjz5fDMVMGeR3qH282xgBNr3P7oQFasm9Tw6fSPWWpncLureSuCufUC",
  "key38": "3pQTqqCam8B6QGEaaU5SNHEmHCWFG6aFTeNgaEMoPrrPEY1FXZrPTFmtRmDNcNKARYiPrSgzp9afSwWfWLEon8Bq",
  "key39": "fk2WqjGB3DPM81HkdS5qMKHszjCR44uLKxGhSo5s4nhi4Zw4M4JoeUuSHCF7aPMqxU4CizyrchQwbu1KDgdbRpd",
  "key40": "4K3WxZj7Lk8nbTVQUiHrXpjShTpvhEczDKLubf59z4vMRVzDoZmXg1Wd9ZiYUcK3pmKigmaxBsH2a7wGitz4rxME",
  "key41": "4C8bEwF736iDsVkoLY3oZoKaxupR3UZK3Zgu1A45yGfzUa6c7irPPoeGzJhUXT9EWcCX6QhxDLccUnpLmPqU9Sf"
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
