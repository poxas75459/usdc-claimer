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
    "3AqfBkiHjjNbYb1vxpqAW8iVybhP1ibHhVer1Wwr2EScPYZQ1DwDVM7uUG91JuWDYvQ4gfoMP3Wdhp5JYTkcXu7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64g5fMSgbWpd4gf3bVzGA1mWweyYXRMuRKACjeEvvpPVojEh7XFfhfWEFLJYU7J5qdn74vWDDdZEvRdsx7PVqiox",
  "key1": "3ZfhkRHEPtPiETiAwtHxRZrDSby2GRfwd88dnuSvUpm9EBqcgjZd2BWFgpoJGbeSrZtzhuFTEiaJLnKz6StsTC8r",
  "key2": "xMM8vQBAJfZu1ZDVJ2xaeyer6o8n7QKGLnegxeBEw38mV8WAKsDRg8bCSf9z8S8DHk5nGMo1B6sZStJinHiV9DG",
  "key3": "4sQrwnjvWWNK1fC1sEUAt2hrb5gKxcqLWGnnbNujpgE5sEz8wrHHPgqVM1m7KEH86uNcmbLEKTbvV9Xp5iwVwKhQ",
  "key4": "NpCRSGowNXT7uwyqqhkUmyybMMPD3uMxiDiBaD1JiogniKdUevmAcfZgffsBDtNWjLgcgL31TQJnTFXYVfYZWP2",
  "key5": "41jQ7BHUtNuNLHCNbAmCE55GGjCXrJTM3tato1v8f8EjARikaWLZRpt22svPfgUkCx1UiizUk5heBLm7umMehupu",
  "key6": "4HE5Yh8Szr9atKaTU89z3622bx2YMBDsC7L9TXZt19tY9c5ap2Fq6QvqBXLrA37YXGZocPW6wM1jsMkvwo6YUSXX",
  "key7": "5R4pkExpfgPRjEfLVDjLQvo31EHMYhdiGnaVf5Fn2L3aym1CadYsMnvhqGERPpyY4bZmSSXNyCStWtEuLVU1fW23",
  "key8": "3iz5HauGcCvGXeTXfjhpUzxYe1tDXfmNvvJkx1Ky2MMyNqibeQMbhuh4a7r4GyN9WfuYzwApp3CwA8LEYcY8kwwH",
  "key9": "3RCF3YYeEju3bHZmGb9KbB6QjwckQ4D1qpVwEYPsBcugcygneM1Q3X9BrTwJL5J4sE2PKvi8db6xbZcsSZM1Fxf7",
  "key10": "5Zcbr8n4ovK6HAb1Nn2HiZCQVQ4KvevWquY78HNTiFwe3M6Kk4HxZ97whxfrBR7q6kcHh7cjdz852BWFL5V79V33",
  "key11": "5jkAE7Y4MugWAGPAuEBMYJDkmyz3gcJPqijD1TG1giVccjKWQ7EWfsmptfjXtDECa6jc6p6KUnqwmD54CZcvdsuq",
  "key12": "5aST9VbWgMtLtc6etWQ8Pp5DVSDk1FjBvJSt8kShEb3GvDmXyngQST9v5hAom7En9Hu1M4njcXe3zFkH6TLDxVCz",
  "key13": "5FdW8XguVk55KZaRr6YqnoCVm9D7gevpgiDCj9945ALvMSLQwdhQFYgbWvVwRAHSZyvzTxZmvnDXi5eMnKqUTXD",
  "key14": "4EeNEnmqqP7sqGoNbSnTvyauf2hiv5VCHngnwqbBSoR9v5fj9NBmmDuBJGarNNW8u4rSgdJazmeGaN7ATNLMtNQj",
  "key15": "3EXtR2vaV6N1F73CySWsKXyiwQ7zJwQZXfaw9asxYxJWQoDR9eVgwMZytkvxSjNApxUTbRBfLf343UGPxSpwKBhR",
  "key16": "4hn61LN2qgzyvxo4A7w3i8jeqtmGYJVGFiFaosggUJs3y4DNER5jGvwQ2hgeWruFJWjiSs4LEFtRF1fMz6YiQeoN",
  "key17": "3idUphsx9sLGEjGKPycSA9ERCPY8cP5ZkKS6ZnTC3nGVHCoMzMifQJui29RT1VGEKaeEsD2dcr75MfmtYRSiEvGb",
  "key18": "G39rcDgptSbmQnfQi4yfy4JSzxihwH3Bd713Vn1g3Q96yzhkcHFaMjN2ryF2tunhcjvMfGQkDDutb3UZs27NWCf",
  "key19": "4KYiBooRo7LcgVpTSNfTWPktfhz8G1dsc8jb1MHDn3mZ4ZsjNRsEXY3or351xixVSFgHxWALez1t4wyMfH4bHF4v",
  "key20": "2MsA4r7nrV8947Nz3FrUnJD5gjy7p7bqGEgfX7oj3n7Mcn3gzcSwkGW2EVBuqJeYpMs8xpK3yi9hLS564nBZiLWR",
  "key21": "RjHVXXTCJqKvERwKJDV7hqh7kMzJuCpXb5Cxs84Jzr6yx5v28ZYg72a2nkXcHcVNYUARPdHJsRtvHywQfJ3c4QU",
  "key22": "46QAqMNLCmE3LDPqZpMmDA4hLeaE7Zg6QWJohKHdFF8Jjbuastotb8pUtvxpTrLhjZhpbxWBW7FFE9bbY6LuWYti",
  "key23": "oWVHaT9U5vyQVWGoV4X34yuEvvW8vLUj8ZKodhvUHXK1CoCM2N2BdQvsHwHBT2sbEF8VcX2aF2ieTbpz5AUpBfn",
  "key24": "5EWSjZmnD6SptHkL6jN7jZwQQP5zvMbF4qDFBDFdhNwXw8VpjBgk2DBN5413ChWG7MK45vvLZBaw1LXYpPsrm7sw",
  "key25": "42gmQCvdwHULwgUEenhjb4xq8fPT4FgeuChGjySt2Mp1rSXLTH5dpj2uEEMycNixg9gj5aWv2ZrjVA3i2n7Yw6do",
  "key26": "rZTZ1XAeRL5ZCzbzu2CE9es5N8EijkmBS9tyzgVyK7g94f8EiRRtCtt7rDhsoUnQN4i4qL5J997P7j3PNPE7Nug",
  "key27": "3FTnJTYpNnDCNTDEeiQ8xi6La92Hnw3REURtQ2vV5JoJ6FVNZ3xMuLRh6L5dzLU9Ndz8RyvA6M8ejsm1DoGahbdS",
  "key28": "Fxj6QywUtTgGRrdJPevgC2FbHyWMPSjYv5qHsE3TWv7aodKRWhacT6ErPe2MpPFDCYrupzC4rGXuRuTyuDVgQcA",
  "key29": "3mmjj5RrC6GFTKqMaGjPaAMk11rmBaHEXhoxrcM7njaQUdrJuUxdqQ17bZfdCJGXwbz53GGwPq1Qq5afkkv38Zcw",
  "key30": "3ZyQjyMbSaP9q5y5bpYLE4o354fiAq39BQiDWFgyyMKvMiJk5zDmWxbNHmohvhwNxkaEbpuUnvbRLKsLuYAvLajw",
  "key31": "3erWHGLWFs82ZCUJia96raKeXwzBrCDuqLhW5y9jdyFnsgBuVViuTL5m1g8nRW3vCJZiaEMEkjYZ3AHGTzdnbSPP",
  "key32": "3uQcHdHQMXabX7HJAd9xeQSsvJRsqWqr42ScRkvLmjM5uG2zqgGDMaD9iMRu9yd8QnifQoukWMN8zL68W9iAs8H6",
  "key33": "5JBcenTXJzsSQH9Z9auHnjQRXRyBYjyVfZASsHoWy1rGfaJt2aHfHN9sahGYQGNc3WYuGX78xp93PFgHsB5wUm52",
  "key34": "2LcVUvqrNduHhwEVxNEqp86bwPYChZyfAvVs9x6XA6Cy1oudEMfPZgdiFpX6AFNxUwhjYiYNqxtvKvCrM6ezHTJt",
  "key35": "5DDwsLsoEX7eXMNWAFEBPzZw2xa7A2ACPhrMpJLcR9RqB3cxubGBZhJC7WtD23ShUwkwxmuxLJN5ZKbKm1cqaCQJ",
  "key36": "2qweVZX6ooeBqo55gtysDW5WhDgdoydECaBoLcwYyogYJdVtX5T31oW52u2ddAkcXtCRUBS1BtFTAbBXvfr9jYUq",
  "key37": "5AQTsZD8sKQpgwYkXAqoh9jrodvxpXn8aEnwsnhL85aPwdKFYmdTjJMEaXA8n8Sc3Jv1y3GkvYW9rDYFYWeuVKrn",
  "key38": "2HSNKG7c1vQZSeiGXko2bxZiecFd7kjqiP8C4cb66vaQ4BTAivyYtwryLaeaqz5fi7QPUwDo3tf1Fb8ywYK7SsxT",
  "key39": "dACuj6WeKnSTfmRy1LBtCmFGBju1oQqKDEZt8EMaTNJQ24ASJ5esHGwAfRMFKS5icr1zM8tAcag77zzAWtbziNX"
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
